/* ==========================================================================
   Accounts: sign-up by phone, sign-in, sessions, roles.

   Passwords are bcrypt hashes. A sign-in is a JWT in an httpOnly cookie, so
   page scripts can never read it. Every request re-reads the role from the
   database, so changing someone's role takes effect at once.
   ========================================================================== */
'use strict';

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { pool } = require('./db');

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE = 'tt_session';
const SESSION_DAYS = 30;
/* Behind plain http on localhost a Secure cookie would never come back. */
const SECURE_COOKIE = process.env.COOKIE_SECURE === 'true';
/* Phones listed here are made admins when they sign up or sign in: the way
   the first administrator gets in. Comma-separated, any spelling. */
const ADMIN_PHONES = String(process.env.ADMIN_PHONES || '').split(',').map(normPhone).filter(Boolean);
/* Packages a new student starts with, until a manager sets them. */
const DEFAULT_PACKAGES = String(process.env.DEFAULT_PACKAGES || 'basic').split(',')
  .map((s) => s.trim()).filter((s) => s === 'basic' || s === 'extra');

const ROLES = ['student', 'teacher', 'curator', 'manager', 'admin'];
/** Who may do what in the staff area. */
const PERMS = {
  staff:    ['teacher', 'curator', 'manager', 'admin'],
  groups:   ['curator', 'manager', 'admin'],
  packages: ['manager', 'admin'],
  scores:   ['curator', 'admin'],
  moves:    ['curator', 'manager', 'admin'],
  teach:    ['teacher', 'curator', 'admin'],
  allLessons: ['curator', 'admin'],
  roles:    ['admin']
};
function can(role, perm) { return (PERMS[perm] || []).indexOf(role) >= 0; }
function permsOf(role) { return Object.keys(PERMS).filter((p) => can(role, p)); }

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
const isoDate = (d) => (d ? new Date(d).toISOString().slice(0, 10) : null);

const USER_COLS = `u.id, u.phone, u.email, u.first_name, u.last_name, u.grade, u.role,
                   u.exam_date, u.plan_start, u.diagnostic_done_at`;

/** The account as the site sees it, with its packages and group. */
async function loadUser(id) {
  const { rows } = await pool.query(
    `SELECT ${USER_COLS},
            COALESCE((SELECT array_agg(package ORDER BY package) FROM user_packages p WHERE p.user_id = u.id), '{}') AS packages,
            g.id AS group_id, g.name AS group_name
       FROM users u
       LEFT JOIN group_members gm ON gm.user_id = u.id
       LEFT JOIN sat_groups g ON g.id = gm.group_id
      WHERE u.id = $1`, [id]);
  if (!rows.length) return null;
  const r = rows[0];
  return {
    id: r.id,
    phone: r.phone,
    email: r.email,
    firstName: r.first_name,
    lastName: r.last_name,
    grade: r.grade,
    role: r.role,
    perms: permsOf(r.role),
    examDate: isoDate(r.exam_date),
    planStart: isoDate(r.plan_start),
    diagnosticDone: !!r.diagnostic_done_at,
    packages: r.packages,
    group: r.group_id ? { id: r.group_id, name: r.group_name } : null
  };
}

function setSession(res, id) {
  const token = jwt.sign({ sub: String(id) }, JWT_SECRET, { expiresIn: SESSION_DAYS + 'd' });
  res.cookie(COOKIE, token, {
    httpOnly: true, sameSite: 'lax', secure: SECURE_COOKIE,
    maxAge: SESSION_DAYS * 86400000, path: '/'
  });
}

function sessionUserId(req) {
  const token = req.cookies[COOKIE];
  if (!token) return null;
  try { return Number(jwt.verify(token, JWT_SECRET).sub) || null; }
  catch (e) { return null; }
}

/** Signed in, with the role read fresh from the database. */
async function requireUser(req, res, next) {
  const id = sessionUserId(req);
  if (!id) return res.status(401).json({ ok: false, reason: 'signed-out' });
  try {
    const { rows } = await pool.query('SELECT id, role FROM users WHERE id = $1', [id]);
    if (!rows.length) return res.status(401).json({ ok: false, reason: 'signed-out' });
    req.userId = id;
    req.role = rows[0].role;
    next();
  } catch (e) { next(e); }
}

function requirePerm(perm) {
  return (req, res, next) => {
    if (!can(req.role, perm)) return res.status(403).json({ ok: false, reason: 'forbidden' });
    next();
  };
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

async function promoteIfAdmin(id, phone) {
  if (ADMIN_PHONES.indexOf(phone) < 0) return;
  await pool.query(`UPDATE users SET role = 'admin' WHERE id = $1 AND role <> 'admin'`, [id]);
}

/* ------------------------------------------------------------ routes */

const router = express.Router();

router.post('/register', async (req, res) => {
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
       RETURNING id`,
      [phone, email, hash, firstName, lastName, grade]
    );
    const id = rows[0].id;
    for (const p of DEFAULT_PACKAGES) {
      await pool.query('INSERT INTO user_packages (user_id, package) VALUES ($1, $2) ON CONFLICT DO NOTHING', [id, p]);
    }
    await promoteIfAdmin(id, phone);
    setSession(res, id);
    res.status(201).json({ ok: true, user: await loadUser(id) });
  } catch (e) {
    if (e.code === '23505') {
      const reason = /email/.test(e.constraint || '') ? 'email-taken' : 'exists';
      return res.status(409).json({ ok: false, reason });
    }
    console.error('register failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

router.post('/login', async (req, res) => {
  const phone = normPhone((req.body || {}).phone);
  const password = String((req.body || {}).password || '');
  if (!phone) return res.status(400).json({ ok: false, reason: 'bad-phone' });
  if (rateLimited('login:' + req.ip + ':' + phone)) {
    return res.status(429).json({ ok: false, reason: 'too-many' });
  }
  try {
    const { rows } = await pool.query('SELECT id, password_hash FROM users WHERE phone = $1', [phone]);
    if (!rows.length) return res.status(401).json({ ok: false, reason: 'no-account' });
    const ok = await bcrypt.compare(password, rows[0].password_hash);
    if (!ok) return res.status(401).json({ ok: false, reason: 'bad-password' });
    await pool.query('UPDATE users SET last_login_at = now() WHERE id = $1', [rows[0].id]);
    await promoteIfAdmin(rows[0].id, phone);
    setSession(res, rows[0].id);
    res.json({ ok: true, user: await loadUser(rows[0].id) });
  } catch (e) {
    console.error('login failed', e);
    res.status(500).json({ ok: false, reason: 'server' });
  }
});

router.post('/logout', (req, res) => {
  res.clearCookie(COOKIE, { path: '/' });
  res.json({ ok: true });
});

router.get('/me', requireUser, async (req, res, next) => {
  try {
    const user = await loadUser(req.userId);
    if (!user) return res.status(401).json({ ok: false, reason: 'signed-out' });
    res.json({ ok: true, user });
  } catch (e) { next(e); }
});

/** The student's own details. Setting the exam date also fixes the day their
    own plan starts, the first time. */
router.put('/me', requireUser, async (req, res, next) => {
  const b = req.body || {};
  const sets = [], vals = [];
  function set(col, v) { vals.push(v); sets.push(`${col} = $${vals.length}`); }
  if ('examDate' in b) {
    if (b.examDate !== null && !/^\d{4}-\d{2}-\d{2}$/.test(String(b.examDate))) {
      return res.status(400).json({ ok: false, reason: 'bad-date' });
    }
    set('exam_date', b.examDate);
    sets.push('plan_start = COALESCE(plan_start, CURRENT_DATE)');
  }
  if ('firstName' in b) { const v = clean(b.firstName, 60); if (!v) return res.status(400).json({ ok: false, reason: 'bad-name' }); set('first_name', v); }
  if ('lastName' in b) { const v = clean(b.lastName, 60); if (!v) return res.status(400).json({ ok: false, reason: 'bad-name' }); set('last_name', v); }
  if ('grade' in b) set('grade', GRADES.includes(String(b.grade)) ? String(b.grade) : null);
  if (!sets.length) return res.status(400).json({ ok: false, reason: 'nothing' });
  try {
    vals.push(req.userId);
    await pool.query(`UPDATE users SET ${sets.join(', ')} WHERE id = $${vals.length}`, vals);
    res.json({ ok: true, user: await loadUser(req.userId) });
  } catch (e) { next(e); }
});

router.post('/me/diagnostic', requireUser, async (req, res, next) => {
  try {
    await pool.query(
      `UPDATE users SET diagnostic_done_at = COALESCE(diagnostic_done_at, now()),
                        plan_start = COALESCE(plan_start, CURRENT_DATE) WHERE id = $1`, [req.userId]);
    res.json({ ok: true, user: await loadUser(req.userId) });
  } catch (e) { next(e); }
});

module.exports = {
  router, requireUser, requirePerm, can, permsOf, loadUser, normPhone, isoDate, clean,
  ROLES, PERMS, COOKIE
};
