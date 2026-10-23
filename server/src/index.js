/* ==========================================================================
   TeenTech SAT — sign-in API

   POST /api/register  {email, password, name?}  -> creates the account, signs in
   POST /api/login     {email, password}         -> signs in
   POST /api/logout                              -> signs out
   GET  /api/me                                  -> the signed-in account, or 401
   GET  /api/health                              -> {ok: true}

   Passwords are stored as bcrypt hashes. A sign-in is a JWT kept in an
   httpOnly cookie, so page scripts can never read it. Error reasons use the
   same words the sign-in screen already translates: exists, no-account,
   bad-password, bad-email, bad-password-length.
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

async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id            SERIAL PRIMARY KEY,
      email         TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      name          TEXT NOT NULL DEFAULT '',
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      last_login_at TIMESTAMPTZ
    )`);
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
const normEmail = (s) => String(s || '').trim().toLowerCase();

function publicUser(row) {
  return { id: row.id, email: row.email, name: row.name };
}

function setSession(res, user) {
  const token = jwt.sign({ sub: String(user.id), email: user.email }, JWT_SECRET, {
    expiresIn: SESSION_DAYS + 'd'
  });
  res.cookie(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: SECURE_COOKIE,
    maxAge: SESSION_DAYS * 86400000,
    path: '/'
  });
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
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.post('/api/register', async (req, res) => {
  const email = normEmail(req.body.email);
  const password = String(req.body.password || '');
  const name = String(req.body.name || '').trim().slice(0, 80);
  if (!EMAIL_RE.test(email)) return res.status(400).json({ ok: false, reason: 'bad-email' });
  if (password.length < 6 || password.length > 200) {
    return res.status(400).json({ ok: false, reason: 'bad-password-length' });
  }
  if (rateLimited('reg:' + req.ip)) return res.status(429).json({ ok: false, reason: 'too-many' });
  try {
    const hash = await bcrypt.hash(password, 12);
    const { rows } = await pool.query(
      `INSERT INTO users (email, password_hash, name, last_login_at)
       VALUES ($1, $2, $3, now())
       ON CONFLICT (email) DO NOTHING
       RETURNING id, email, name`,
      [email, hash, name]
    );
    if (!rows.length) return res.status(409).json({ ok: false, reason: 'exists' });
    setSession(res, rows[0]);
    res.status(201).json({ ok: true, user: publicUser(rows[0]) });
  } catch (e) {
    console.error('register failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

app.post('/api/login', async (req, res) => {
  const email = normEmail(req.body.email);
  const password = String(req.body.password || '');
  if (rateLimited('login:' + req.ip + ':' + email)) {
    return res.status(429).json({ ok: false, reason: 'too-many' });
  }
  try {
    const { rows } = await pool.query(
      'SELECT id, email, name, password_hash FROM users WHERE email = $1', [email]
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

app.get('/api/me', async (req, res) => {
  const token = req.cookies[COOKIE];
  if (!token) return res.status(401).json({ ok: false });
  try {
    const claims = jwt.verify(token, JWT_SECRET);
    const { rows } = await pool.query('SELECT id, email, name FROM users WHERE id = $1', [claims.sub]);
    if (!rows.length) return res.status(401).json({ ok: false });
    res.json({ ok: true, user: publicUser(rows[0]) });
  } catch (e) {
    res.status(401).json({ ok: false });
  }
});

app.use('/api', (req, res) => res.status(404).json({ ok: false, reason: 'not-found' }));

waitForDb(30)
  .then(migrate)
  .then(() => app.listen(PORT, () => console.log(`auth API listening on :${PORT}`)))
  .catch((e) => { console.error(e); process.exit(1); });
