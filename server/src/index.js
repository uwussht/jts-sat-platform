/* ==========================================================================
   TeenTech SAT — accounts API

   POST /api/register  {phone, password, firstName, lastName, grade?, email?,
                        consent: true}            -> creates the account, signs in
   POST /api/login     {phone, password}          -> signs in
   POST /api/logout                               -> signs out
   GET  /api/me                                   -> the signed-in account, or 401
   GET  /api/progress                             -> {data, updatedAt} of this account
   PUT  /api/progress  {data}                     -> saves this account's progress
   GET  /api/health                               -> {ok: true}

   Accounts live in PostgreSQL; passwords as bcrypt hashes. A sign-in is a JWT
   in an httpOnly cookie, so page scripts can never read it. A student's
   progress (answers, plan, statistics) is one JSON document per account, so
   it follows them to any device.
   ========================================================================== */
'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const PORT = Number(process.env.PORT || 3000);
const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE = 'tt_session';
const SESSION_DAYS = 30;
/* Behind plain http on localhost a Secure cookie would never come back. */
const SECURE_COOKIE = process.env.COOKIE_SECURE === 'true';

if (!JWT_SECRET || JWT_SECRET.length < 32) {
  console.error('JWT_SECRET must be set and at least 32 characters long');
  process.exit(1);
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

/* ------------------------------------------------------------ schema */

/** Numbered and applied once each, in order. Never edit one that has shipped:
    add the next number instead. */
const MIGRATIONS = [
  /* 1: the first, email-only accounts table. */
  `CREATE TABLE IF NOT EXISTS users (
     id            SERIAL PRIMARY KEY,
     email         TEXT NOT NULL UNIQUE,
     password_hash TEXT NOT NULL,
     name          TEXT NOT NULL DEFAULT '',
     created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
     last_login_at TIMESTAMPTZ
   )`,
  /* 2: sign in by phone; the student's details; progress per account. */
  `ALTER TABLE users ALTER COLUMN email DROP NOT NULL;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS phone        TEXT;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS first_name   TEXT NOT NULL DEFAULT '';
   ALTER TABLE users ADD COLUMN IF NOT EXISTS last_name    TEXT NOT NULL DEFAULT '';
   ALTER TABLE users ADD COLUMN IF NOT EXISTS grade        TEXT;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS role         TEXT NOT NULL DEFAULT 'student';
   ALTER TABLE users ADD COLUMN IF NOT EXISTS consent_at   TIMESTAMPTZ;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS phone_verified_at TIMESTAMPTZ;
   CREATE UNIQUE INDEX IF NOT EXISTS users_phone_key ON users (phone);
   CREATE TABLE IF NOT EXISTS user_progress (
     user_id    INTEGER PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
     data       JSONB NOT NULL,
     updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
   )`
];

async function migrate() {
  await pool.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
    version INTEGER PRIMARY KEY, applied_at TIMESTAMPTZ NOT NULL DEFAULT now())`);
  const { rows } = await pool.query('SELECT version FROM schema_migrations');
  const done = new Set(rows.map((r) => r.version));
  for (let i = 0; i < MIGRATIONS.length; i++) {
    const version = i + 1;
    if (done.has(version)) continue;
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      await client.query(MIGRATIONS[i]);
      await client.query('INSERT INTO schema_migrations (version) VALUES ($1)', [version]);
      await client.query('COMMIT');
      console.log('applied migration', version);
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
  }
}

/** The database starts alongside the API; wait for it rather than crash. */
async function waitForDb(tries) {
  for (let i = 1; i <= tries; i++) {
    try { await pool.query('SELECT 1'); return; }
    catch (e) {
      console.log(`waiting for the database (${i}/${tries})…`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  throw new Error('database not reachable');
}

/* ------------------------------------------------------------ helpers */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const GRADES = ['8', '9', '10', '11', '12', 'gap', 'other'];

/**
 * One spelling per number, so "8 701 234 56 78", "+7 (701) 234-56-78" and
 * "7012345678" are the same account. Kazakhstan's 8 prefix becomes +7, ten
 * digits get +7 in front; anything else must already be international.
 */
function normPhone(raw) {
  let d = String(raw || '').replace(/[^\d+]/g, '');
  const plus = d.startsWith('+');
  d = d.replace(/\D/g, '');
  if (!plus && d.length === 11 && d.startsWith('8')) d = '7' + d.slice(1);
  if (!plus && d.length === 10) d = '7' + d;
  if (d.length < 10 || d.length > 15) return null;
  return '+' + d;
}

const clean = (s, max) => String(s || '').trim().replace(/\s+/g, ' ').slice(0, max);

function publicUser(row) {
  return {
    id: row.id,
    phone: row.phone,
    email: row.email,
    firstName: row.first_name,
    lastName: row.last_name,
    grade: row.grade,
    role: row.role
  };
}

const USER_COLS = 'id, phone, email, first_name, last_name, grade, role';

function setSession(res, user) {
  const token = jwt.sign({ sub: String(user.id) }, JWT_SECRET, { expiresIn: SESSION_DAYS + 'd' });
  res.cookie(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: SECURE_COOKIE,
    maxAge: SESSION_DAYS * 86400000,
    path: '/'
  });
}

/** The signed-in account's id, or null. */
function sessionUserId(req) {
  const token = req.cookies[COOKIE];
  if (!token) return null;
  try { return Number(jwt.verify(token, JWT_SECRET).sub) || null; }
  catch (e) { return null; }
}

function requireUser(req, res, next) {
  const id = sessionUserId(req);
  if (!id) return res.status(401).json({ ok: false, reason: 'signed-out' });
  req.userId = id;
  next();
}

/** A few wrong passwords are typos; dozens a minute from one address are not. */
const attempts = new Map();
function rateLimited(key) {
  const now = Date.now(), windowMs = 15 * 60000, max = 20;
  const rec = attempts.get(key) || { n: 0, since: now };
  if (now - rec.since > windowMs) { rec.n = 0; rec.since = now; }
  rec.n++;
  attempts.set(key, rec);
  return rec.n > max;
}

/* ------------------------------------------------------------ routes */

const app = express();
app.set('trust proxy', 1);
app.use(cookieParser());
/* Progress documents can be large; everything else is a few fields. */
app.use('/api/progress', express.json({ limit: '8mb' }));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.post('/api/register', async (req, res) => {
  const b = req.body || {};
  const phone = normPhone(b.phone);
  const password = String(b.password || '');
  const firstName = clean(b.firstName, 60);
  const lastName = clean(b.lastName, 60);
  const email = clean(b.email, 120).toLowerCase() || null;
  const grade = GRADES.includes(String(b.grade)) ? String(b.grade) : null;

  if (!phone) return res.status(400).json({ ok: false, reason: 'bad-phone' });
  if (password.length < 8 || password.length > 200) {
    return res.status(400).json({ ok: false, reason: 'bad-password-length' });
  }
  if (!firstName || !lastName) return res.status(400).json({ ok: false, reason: 'bad-name' });
  if (email && !EMAIL_RE.test(email)) return res.status(400).json({ ok: false, reason: 'bad-email' });
  if (b.consent !== true) return res.status(400).json({ ok: false, reason: 'no-consent' });
  if (rateLimited('reg:' + req.ip)) return res.status(429).json({ ok: false, reason: 'too-many' });

  try {
    const hash = await bcrypt.hash(password, 12);
    const { rows } = await pool.query(
      `INSERT INTO users (phone, email, password_hash, first_name, last_name, name, grade,
                          consent_at, last_login_at)
       VALUES ($1, $2, $3, $4, $5, $4 || ' ' || $5, $6, now(), now())
       RETURNING ${USER_COLS}`,
      [phone, email, hash, firstName, lastName, grade]
    );
    setSession(res, rows[0]);
    res.status(201).json({ ok: true, user: publicUser(rows[0]) });
  } catch (e) {
    if (e.code === '23505') {
      /* Unique index: which one tells the student what to fix. */
      const reason = /email/.test(e.constraint || '') ? 'email-taken' : 'exists';
      return res.status(409).json({ ok: false, reason });
    }
    console.error('register failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

app.post('/api/login', async (req, res) => {
  const phone = normPhone((req.body || {}).phone);
  const password = String((req.body || {}).password || '');
  if (!phone) return res.status(400).json({ ok: false, reason: 'bad-phone' });
  if (rateLimited('login:' + req.ip + ':' + phone)) {
    return res.status(429).json({ ok: false, reason: 'too-many' });
  }
  try {
    const { rows } = await pool.query(
      `SELECT ${USER_COLS}, password_hash FROM users WHERE phone = $1`, [phone]
    );
    if (!rows.length) return res.status(401).json({ ok: false, reason: 'no-account' });
    const ok = await bcrypt.compare(password, rows[0].password_hash);
    if (!ok) return res.status(401).json({ ok: false, reason: 'bad-password' });
    await pool.query('UPDATE users SET last_login_at = now() WHERE id = $1', [rows[0].id]);
    setSession(res, rows[0]);
    res.json({ ok: true, user: publicUser(rows[0]) });
  } catch (e) {
    console.error('login failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

app.post('/api/logout', (req, res) => {
  res.clearCookie(COOKIE, { path: '/' });
  res.json({ ok: true });
});

app.get('/api/me', requireUser, async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT ${USER_COLS} FROM users WHERE id = $1`, [req.userId]);
    if (!rows.length) return res.status(401).json({ ok: false, reason: 'signed-out' });
    res.json({ ok: true, user: publicUser(rows[0]) });
  } catch (e) {
    console.error('me failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

app.get('/api/progress', requireUser, async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT data, updated_at FROM user_progress WHERE user_id = $1', [req.userId]
    );
    res.json({ ok: true, data: rows.length ? rows[0].data : null,
               updatedAt: rows.length ? rows[0].updated_at : null });
  } catch (e) {
    console.error('progress read failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

app.put('/api/progress', requireUser, async (req, res) => {
  const data = (req.body || {}).data;
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return res.status(400).json({ ok: false, reason: 'bad-data' });
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO user_progress (user_id, data, updated_at) VALUES ($1, $2, now())
       ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
       RETURNING updated_at`,
      [req.userId, data]
    );
    res.json({ ok: true, updatedAt: rows[0].updated_at });
  } catch (e) {
    console.error('progress write failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

app.use('/api', (req, res) => res.status(404).json({ ok: false, reason: 'not-found' }));

waitForDb(30)
  .then(migrate)
  .then(() => app.listen(PORT, () => console.log(`accounts API listening on :${PORT}`)))
  .catch((e) => { console.error(e); process.exit(1); });
