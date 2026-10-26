/* ==========================================================================
   The course, for a student: their plan, the lessons they have completed,
   their Bluebook results, and their saved progress.

   The plan is built by js/shared/plan-engine.js — the same file the browser
   loads — from what the database knows: the student's packages and exam
   date, and either their group's calendar (slots, lessons the teacher marked
   held, absences, moves) or, without a group, their own completed lessons.
   ========================================================================== */
'use strict';

const path = require('path');
const express = require('express');
const { pool } = require('./db');
const { requireUser, requireAccess, isoDate } = require('./auth');

const engine = require(path.join(__dirname, '..', '..', 'js', 'shared', 'plan-engine.js'));

const today = () => new Date().toISOString().slice(0, 10);

/** A group's slots, with each teacher's name. */
async function groupSlots(groupId) {
  const { rows } = await pool.query(
    `SELECT s.weekday, s.time, s.section, s.teacher_id,
            NULLIF(trim(t.first_name || ' ' || t.last_name), '') AS teacher_name
       FROM group_slots s LEFT JOIN users t ON t.id = s.teacher_id
      WHERE s.group_id = $1 ORDER BY s.weekday, s.time`, [groupId]);
  return rows.map((r) => ({
    weekday: r.weekday, time: r.time, section: r.section,
    teacher: r.teacher_id ? { id: r.teacher_id, name: r.teacher_name } : null
  }));
}

/** Lessons the teacher marked held, and the moves a curator made. */
async function groupMarks(groupId) {
  const held = {}, moved = {};
  const m = await pool.query('SELECT lesson_no, held_on FROM lesson_marks WHERE group_id = $1', [groupId]);
  m.rows.forEach((r) => { held[r.lesson_no] = isoDate(r.held_on); });
  const mv = await pool.query('SELECT lesson_no, new_date FROM lesson_moves WHERE group_id = $1', [groupId]);
  mv.rows.forEach((r) => { moved[r.lesson_no] = isoDate(r.new_date); });
  return { held, moved };
}

/** The latest Bluebook result per course test (pt6, pt8, pt10). */
async function testScores(userId) {
  const { rows } = await pool.query(
    `SELECT DISTINCT ON (test) id, test, status, total, rw, math, taken_on
       FROM score_reports WHERE user_id = $1 AND test IS NOT NULL
      ORDER BY test, created_at DESC`, [userId]);
  const out = {};
  rows.forEach((r) => {
    out[r.test] = { id: r.id, status: r.status, total: r.total, rw: r.rw, math: r.math, date: isoDate(r.taken_on) };
  });
  return out;
}

/** Everything the engine needs for this student, and the plan it builds. */
async function planFor(userId) {
  const u = await pool.query(
    `SELECT u.id, u.exam_date, u.plan_start, u.diagnostic_done_at, u.created_at,
            gm.group_id, g.name AS group_name, g.start_date, g.exam_date AS group_exam,
            COALESCE((SELECT array_agg(package) FROM user_packages p WHERE p.user_id = u.id), '{}') AS packages
       FROM users u
       LEFT JOIN group_members gm ON gm.user_id = u.id
       LEFT JOIN sat_groups g ON g.id = gm.group_id
      WHERE u.id = $1`, [userId]);
  if (!u.rows.length) return null;
  const r = u.rows[0];
  const input = {
    today: today(),
    packages: r.packages,
    examDate: isoDate(r.exam_date) || isoDate(r.group_exam),
    diagnosticDone: !!r.diagnostic_done_at,
    scores: await testScores(userId)
  };
  let group = null;
  if (r.group_id) {
    const slots = await groupSlots(r.group_id);
    const marks = await groupMarks(r.group_id);
    const abs = await pool.query(
      'SELECT lesson_no FROM lesson_absences WHERE group_id = $1 AND user_id = $2', [r.group_id, userId]);
    const absent = {};
    abs.rows.forEach((a) => { absent[a.lesson_no] = true; });
    Object.assign(input, {
      mode: 'group',
      startDate: isoDate(r.start_date),
      slots: slots.length ? slots : undefined,
      held: marks.held, moved: marks.moved, absent
    });
    group = { id: r.group_id, name: r.group_name, startDate: isoDate(r.start_date), slots };
  } else {
    const c = await pool.query('SELECT lesson_no, completed_on FROM lesson_completions WHERE user_id = $1', [userId]);
    const held = {};
    c.rows.forEach((x) => { held[x.lesson_no] = isoDate(x.completed_on); });
    Object.assign(input, {
      mode: 'self',
      startDate: isoDate(r.plan_start) || isoDate(r.created_at),
      held
    });
  }
  const plan = engine.build(input);
  plan.group = group;
  return plan;
}

/* ------------------------------------------------------------ routes */

const router = express.Router();

router.get('/plan', requireUser, requireAccess, async (req, res, next) => {
  try { res.json({ ok: true, plan: await planFor(req.userId) }); }
  catch (e) { next(e); }
});

/** A student without a group finished a lesson on the platform. In a group
    a lesson is done when the teacher marks it, so this is ignored there. */
router.post('/lessons/:no/complete', requireUser, requireAccess, async (req, res, next) => {
  const no = Number(req.params.no);
  if (!engine.PROGRAMME.some((l) => l.no === no)) return res.status(400).json({ ok: false, reason: 'bad-lesson' });
  const on = /^\d{4}-\d{2}-\d{2}$/.test(String((req.body || {}).date)) ? req.body.date : today();
  try {
    await pool.query(
      `INSERT INTO lesson_completions (user_id, lesson_no, completed_on) VALUES ($1, $2, $3)
       ON CONFLICT (user_id, lesson_no) DO NOTHING`, [req.userId, no, on]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

/* --------------------------------------------------- Bluebook results */

function validScores(b) {
  const total = Number(b.total), rw = b.rw == null || b.rw === '' ? null : Number(b.rw);
  const math = b.math == null || b.math === '' ? null : Number(b.math);
  const sec = (v) => v === null || (Number.isInteger(v) && v >= 200 && v <= 800 && v % 10 === 0);
  if (!Number.isInteger(total) || total < 400 || total > 1600 || total % 10 !== 0) return null;
  if (!sec(rw) || !sec(math)) return null;
  if (rw !== null && math !== null && rw + math !== total) return null;
  return { total, rw, math };
}

function scoreRow(r) {
  return {
    id: r.id, test: r.test, source: r.source, date: isoDate(r.taken_on),
    total: r.total, rw: r.rw, math: r.math, status: r.status, comment: r.comment,
    reviewedAt: r.reviewed_at, createdAt: r.created_at, domainSnapshot: r.domain_snapshot
  };
}

router.get('/scores', requireUser, requireAccess, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM score_reports WHERE user_id = $1 ORDER BY taken_on, created_at', [req.userId]);
    res.json({ ok: true, scores: rows.map(scoreRow) });
  } catch (e) { next(e); }
});

/**
 * A result the student entered. It counts at once, marked pending until a
 * curator confirms it. One live result per course test: entering Test 8
 * again replaces a pending one; a rejected one stays in the history.
 */
router.post('/scores', requireUser, requireAccess, async (req, res, next) => {
  const b = req.body || {};
  const test = ['pt6', 'pt8', 'pt10'].indexOf(b.test) >= 0 ? b.test : null;
  const source = ['bluebook', 'official', 'other'].indexOf(b.source) >= 0 ? b.source : 'bluebook';
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(b.date)) ? b.date : today();
  const s = validScores(b);
  if (!s) return res.status(400).json({ ok: false, reason: 'bad-scores' });
  const snapshot = b.domainSnapshot && typeof b.domainSnapshot === 'object' ? b.domainSnapshot : null;
  try {
    if (test) {
      const live = await pool.query(
        `SELECT id, status FROM score_reports WHERE user_id = $1 AND test = $2 AND status <> 'rejected'
          ORDER BY created_at DESC LIMIT 1`, [req.userId, test]);
      if (live.rows.length && live.rows[0].status === 'confirmed') {
        return res.status(409).json({ ok: false, reason: 'confirmed' });
      }
      if (live.rows.length) {
        const { rows } = await pool.query(
          `UPDATE score_reports SET taken_on = $2, total = $3, rw = $4, math = $5, source = $6,
                  domain_snapshot = COALESCE($7, domain_snapshot), created_at = now()
            WHERE id = $1 RETURNING *`,
          [live.rows[0].id, date, s.total, s.rw, s.math, source, snapshot]);
        return res.json({ ok: true, score: scoreRow(rows[0]) });
      }
    }
    const { rows } = await pool.query(
      `INSERT INTO score_reports (user_id, test, source, taken_on, total, rw, math, domain_snapshot)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [req.userId, test, source, date, s.total, s.rw, s.math, snapshot]);
    res.status(201).json({ ok: true, score: scoreRow(rows[0]) });
  } catch (e) { next(e); }
});

/** A pending result the student wants to take back. */
router.delete('/scores/:id', requireUser, requireAccess, async (req, res, next) => {
  try {
    const { rowCount } = await pool.query(
      `DELETE FROM score_reports WHERE id = $1 AND user_id = $2 AND status = 'pending'`,
      [Number(req.params.id), req.userId]);
    res.json({ ok: rowCount > 0 });
  } catch (e) { next(e); }
});

/* ------------------------------------------------------------ progress */

router.get('/progress', requireUser, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT data, updated_at FROM user_progress WHERE user_id = $1', [req.userId]);
    res.json({ ok: true, data: rows.length ? rows[0].data : null,
               updatedAt: rows.length ? rows[0].updated_at : null });
  } catch (e) { next(e); }
});

router.put('/progress', requireUser, async (req, res, next) => {
  const data = (req.body || {}).data;
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return res.status(400).json({ ok: false, reason: 'bad-data' });
  }
  try {
    const { rows } = await pool.query(
      `INSERT INTO user_progress (user_id, data, updated_at) VALUES ($1, $2, now())
       ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data, updated_at = now()
       RETURNING updated_at`, [req.userId, data]);
    res.json({ ok: true, updatedAt: rows[0].updated_at });
  } catch (e) { next(e); }
});

module.exports = { router, planFor, groupSlots, groupMarks, engine, scoreRow, today };
