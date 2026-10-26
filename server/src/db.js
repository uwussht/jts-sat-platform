/* ==========================================================================
   Database: the connection pool and the schema.

   Schema changes are numbered migrations, applied once each and in order
   when the API starts. Never edit one that has shipped: add the next number.
   ========================================================================== */
'use strict';

const { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

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
   )`,

  /* 3: the course — exam date and plan start per student, packages, SAT
        groups with their three weekly slots and teachers, lessons marked held
        by the teacher (with absences and curator moves), lessons completed by
        students who study on their own, and Bluebook results with curator
        confirmation. */
  `ALTER TABLE users ADD COLUMN IF NOT EXISTS exam_date DATE;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS plan_start DATE;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS diagnostic_done_at TIMESTAMPTZ;

   CREATE TABLE user_packages (
     user_id    INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
     package    TEXT NOT NULL CHECK (package IN ('basic', 'extra')),
     granted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
     granted_by INTEGER REFERENCES users (id) ON DELETE SET NULL,
     PRIMARY KEY (user_id, package)
   );

   CREATE TABLE sat_groups (
     id          SERIAL PRIMARY KEY,
     name        TEXT NOT NULL,
     start_date  DATE NOT NULL,
     exam_date   DATE,
     created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
   );

   CREATE TABLE group_slots (
     id         SERIAL PRIMARY KEY,
     group_id   INTEGER NOT NULL REFERENCES sat_groups (id) ON DELETE CASCADE,
     weekday    SMALLINT NOT NULL CHECK (weekday BETWEEN 1 AND 7),
     time       TEXT NOT NULL,
     section    TEXT CHECK (section IN ('rw', 'math')),
     teacher_id INTEGER REFERENCES users (id) ON DELETE SET NULL
   );

   CREATE TABLE group_members (
     user_id   INTEGER PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
     group_id  INTEGER NOT NULL REFERENCES sat_groups (id) ON DELETE CASCADE,
     joined_at TIMESTAMPTZ NOT NULL DEFAULT now()
   );

   CREATE TABLE lesson_marks (
     group_id  INTEGER NOT NULL REFERENCES sat_groups (id) ON DELETE CASCADE,
     lesson_no SMALLINT NOT NULL,
     held_on   DATE NOT NULL,
     marked_by INTEGER REFERENCES users (id) ON DELETE SET NULL,
     marked_at TIMESTAMPTZ NOT NULL DEFAULT now(),
     PRIMARY KEY (group_id, lesson_no)
   );

   CREATE TABLE lesson_absences (
     group_id  INTEGER NOT NULL REFERENCES sat_groups (id) ON DELETE CASCADE,
     lesson_no SMALLINT NOT NULL,
     user_id   INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
     PRIMARY KEY (group_id, lesson_no, user_id)
   );

   CREATE TABLE lesson_moves (
     group_id  INTEGER NOT NULL REFERENCES sat_groups (id) ON DELETE CASCADE,
     lesson_no SMALLINT NOT NULL,
     new_date  DATE NOT NULL,
     moved_by  INTEGER REFERENCES users (id) ON DELETE SET NULL,
     moved_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
     PRIMARY KEY (group_id, lesson_no)
   );

   CREATE TABLE lesson_completions (
     user_id      INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
     lesson_no    SMALLINT NOT NULL,
     completed_on DATE NOT NULL,
     PRIMARY KEY (user_id, lesson_no)
   );

   CREATE TABLE score_reports (
     id              SERIAL PRIMARY KEY,
     user_id         INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
     test            TEXT CHECK (test IN ('pt6', 'pt8', 'pt10')),
     source          TEXT NOT NULL DEFAULT 'bluebook',
     taken_on        DATE NOT NULL,
     total           INTEGER NOT NULL,
     rw              INTEGER,
     math            INTEGER,
     status          TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'rejected')),
     comment         TEXT,
     reviewed_by     INTEGER REFERENCES users (id) ON DELETE SET NULL,
     reviewed_at     TIMESTAMPTZ,
     domain_snapshot JSONB,
     created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
   );
   CREATE INDEX score_reports_user ON score_reports (user_id);
   CREATE INDEX score_reports_status ON score_reports (status);

   INSERT INTO user_packages (user_id, package)
     SELECT id, 'basic' FROM users ON CONFLICT DO NOTHING;`,

  /* 4: access, set by an admin — none (a new account waits), trial or full,
        each until a date or, with no date, open-ended. Accounts that already
        exist get open-ended full access, so nobody is locked out by this. */
  `ALTER TABLE users ADD COLUMN IF NOT EXISTS access_type TEXT NOT NULL DEFAULT 'none'
     CHECK (access_type IN ('none', 'trial', 'full'));
   ALTER TABLE users ADD COLUMN IF NOT EXISTS access_until DATE;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS access_set_by INTEGER REFERENCES users (id) ON DELETE SET NULL;
   ALTER TABLE users ADD COLUMN IF NOT EXISTS access_set_at TIMESTAMPTZ;
   UPDATE users SET access_type = 'full', access_until = NULL;`
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

/** Run fn(client) inside one transaction. */
async function tx(fn) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const out = await fn(client);
    await client.query('COMMIT');
    return out;
  } catch (e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
}

module.exports = { pool, migrate, waitForDb, tx };
