/* ==========================================================================
   The staff area: what managers, curators, teachers and admins do.

     students   list, packages (manager), role (admin)
     groups     name, start and exam date, three weekly slots each with a
                section and a teacher, the students in it (curator, manager)
     teaching   a teacher's lessons for a period; mark one held — with the
                students who were absent, on any past date — or unmark it
     moves      a curator moves a group's lesson to another date
     scores     the queue of Bluebook results to confirm or reject (curator)
   ========================================================================== */
'use strict';

const express = require('express');
const { pool, tx } = require('./db');
const { requireUser, requirePerm, can, isoDate, clean, ROLES } = require('./auth');
const { groupSlots, groupMarks, engine, scoreRow, today, planFor } = require('./course');

const router = express.Router();
router.use(requireUser, requirePerm('staff'));

const isDate = (s) => /^\d{4}-\d{2}-\d{2}$/.test(String(s || ''));
const ALL_PACKAGES = ['basic', 'extra'];

function name(r, prefix) {
  prefix = prefix || '';
  return [r[prefix + 'first_name'], r[prefix + 'last_name']].filter(Boolean).join(' ').trim();
}

/* ------------------------------------------------------------ students */

router.get('/users', async (req, res, next) => {
  const q = clean(req.query.q, 80);
  const role = ROLES.indexOf(req.query.role) >= 0 ? req.query.role : null;
  try {
    const vals = [];
    const where = [];
    if (q) {
      vals.push('%' + q.toLowerCase() + '%');
      where.push(`(lower(u.first_name || ' ' || u.last_name) LIKE $${vals.length} OR u.phone LIKE $${vals.length} OR lower(coalesce(u.email,'')) LIKE $${vals.length})`);
    }
    if (role) { vals.push(role); where.push(`u.role = $${vals.length}`); }
    const { rows } = await pool.query(
      `SELECT u.id, u.phone, u.email, u.first_name, u.last_name, u.grade, u.role, u.exam_date,
              u.created_at, u.last_login_at,
              COALESCE((SELECT array_agg(package ORDER BY package) FROM user_packages p WHERE p.user_id = u.id), '{}') AS packages,
              g.id AS group_id, g.name AS group_name
         FROM users u
         LEFT JOIN group_members gm ON gm.user_id = u.id
         LEFT JOIN sat_groups g ON g.id = gm.group_id
        ${where.length ? 'WHERE ' + where.join(' AND ') : ''}
        ORDER BY u.created_at DESC LIMIT 500`, vals);
    /* Each student's Bluebook results, newest first, for the same table. */
    const ids = rows.map((r) => r.id);
    const scores = {};
    if (ids.length) {
      const sc = await pool.query(
        `SELECT * FROM score_reports WHERE user_id = ANY($1) ORDER BY taken_on DESC, created_at DESC`, [ids]);
      sc.rows.forEach((r) => { (scores[r.user_id] = scores[r.user_id] || []).push(scoreRow(r)); });
    }
    const out = [];
    for (const r of rows) {
      const u = {
        id: r.id, phone: r.phone, email: r.email, name: name(r), grade: r.grade, role: r.role,
        examDate: isoDate(r.exam_date), packages: r.packages,
        group: r.group_id ? { id: r.group_id, name: r.group_name } : null,
        createdAt: r.created_at, lastLoginAt: r.last_login_at,
        scores: scores[r.id] || []
      };
      /* Where a student is on the course: the same plan they see. */
      if (r.role === 'student') {
        const plan = await planFor(r.id);
        if (plan) {
          const cur = plan.phases.filter((ph) => ph.id === plan.current)[0];
          u.course = {
            startDate: plan.startDate,
            phase: cur ? { id: cur.id, key: cur.key } : null,
            phaseCounter: plan.phaseCounter,
            next: plan.next ? { no: plan.next.no, code: plan.next.code, topic: plan.next.topic, date: plan.next.date } : null,
            done: plan.done, total: plan.total
          };
        }
      }
      out.push(u);
    }
    res.json({ ok: true, users: out });
  } catch (e) { next(e); }
});

/** A student's plan, as they see it — for the fit check before a package is sold. */
router.get('/users/:id/plan', async (req, res, next) => {
  try {
    const plan = await planFor(Number(req.params.id));
    if (!plan) return res.status(404).json({ ok: false, reason: 'not-found' });
    res.json({ ok: true, plan });
  } catch (e) { next(e); }
});

/** Set a student's packages. The extra package needs the basic one. */
router.put('/users/:id/packages', requirePerm('packages'), async (req, res, next) => {
  const id = Number(req.params.id);
  let list = Array.isArray((req.body || {}).packages) ? req.body.packages : [];
  list = ALL_PACKAGES.filter((p) => list.indexOf(p) >= 0);
  if (list.indexOf('extra') >= 0 && list.indexOf('basic') < 0) {
    return res.status(400).json({ ok: false, reason: 'extra-needs-basic' });
  }
  try {
    await tx(async (c) => {
      await c.query('DELETE FROM user_packages WHERE user_id = $1 AND NOT (package = ANY($2))', [id, list]);
      for (const p of list) {
        await c.query(
          `INSERT INTO user_packages (user_id, package, granted_by) VALUES ($1, $2, $3)
           ON CONFLICT DO NOTHING`, [id, p, req.userId]);
      }
    });
    res.json({ ok: true, packages: list });
  } catch (e) { next(e); }
});

router.put('/users/:id/role', requirePerm('roles'), async (req, res, next) => {
  const id = Number(req.params.id);
  const role = (req.body || {}).role;
  if (ROLES.indexOf(role) < 0) return res.status(400).json({ ok: false, reason: 'bad-role' });
  if (id === req.userId && role !== 'admin') {
    return res.status(400).json({ ok: false, reason: 'own-role' });
  }
  try {
    await pool.query('UPDATE users SET role = $2 WHERE id = $1', [id, role]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.get('/teachers', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT id, first_name, last_name, role FROM users
        WHERE role IN ('teacher', 'curator', 'admin') ORDER BY first_name, last_name`);
    res.json({ ok: true, teachers: rows.map((r) => ({ id: r.id, name: name(r), role: r.role })) });
  } catch (e) { next(e); }
});

/* -------------------------------------------------------------- groups */

/** The group's whole calendar: every lesson of the course on its date. */
async function groupCalendar(g) {
  const slots = await groupSlots(g.id);
  const marks = await groupMarks(g.id);
  const plan = engine.build({
    mode: 'group', today: today(), packages: ALL_PACKAGES,
    startDate: isoDate(g.start_date), examDate: isoDate(g.exam_date),
    slots: slots.length ? slots : undefined, held: marks.held, moved: marks.moved
  });
  return { slots, plan };
}

async function groupSummary(g) {
  const cal = await groupCalendar(g);
  const m = await pool.query('SELECT count(*)::int AS n FROM group_members WHERE group_id = $1', [g.id]);
  return {
    id: g.id, name: g.name, startDate: isoDate(g.start_date), examDate: isoDate(g.exam_date),
    slots: cal.slots, members: m.rows[0].n,
    held: Object.keys((await groupMarks(g.id)).held).length,
    next: cal.plan.next ? { no: cal.plan.next.no, date: cal.plan.next.date, topic: cal.plan.next.topic } : null
  };
}

router.get('/groups', async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM sat_groups ORDER BY start_date DESC, id DESC');
    const out = [];
    for (const g of rows) out.push(await groupSummary(g));
    res.json({ ok: true, groups: out });
  } catch (e) { next(e); }
});

router.get('/groups/:id', async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM sat_groups WHERE id = $1', [Number(req.params.id)]);
    if (!rows.length) return res.status(404).json({ ok: false, reason: 'not-found' });
    const g = rows[0];
    const cal = await groupCalendar(g);
    const mem = await pool.query(
      `SELECT u.id, u.first_name, u.last_name, u.phone,
              COALESCE((SELECT array_agg(package ORDER BY package) FROM user_packages p WHERE p.user_id = u.id), '{}') AS packages
         FROM group_members gm JOIN users u ON u.id = gm.user_id
        WHERE gm.group_id = $1 ORDER BY u.first_name, u.last_name`, [g.id]);
    const abs = await pool.query('SELECT lesson_no, user_id FROM lesson_absences WHERE group_id = $1', [g.id]);
    const absent = {};
    abs.rows.forEach((a) => { (absent[a.lesson_no] = absent[a.lesson_no] || []).push(a.user_id); });
    res.json({ ok: true, group: {
      id: g.id, name: g.name, startDate: isoDate(g.start_date), examDate: isoDate(g.exam_date),
      slots: cal.slots,
      members: mem.rows.map((r) => ({ id: r.id, name: name(r), phone: r.phone, packages: r.packages })),
      lessons: cal.plan.lessons.map((l) => ({
        no: l.no, code: l.code, topic: l.topic, section: l.section, week: l.week,
        date: l.date, time: l.time, teacher: l.teacher, status: l.status,
        heldOn: l.heldOn, moved: l.status === 'moved', absent: absent[l.no] || []
      }))
    } });
  } catch (e) { next(e); }
});

function readGroup(b) {
  const nm = clean(b.name, 80);
  if (!nm) return { error: 'bad-name' };
  if (!isDate(b.startDate)) return { error: 'bad-start' };
  if (b.examDate && !isDate(b.examDate)) return { error: 'bad-exam' };
  const slots = Array.isArray(b.slots) ? b.slots : [];
  if (slots.length !== 3) return { error: 'three-slots' };
  for (const s of slots) {
    if (!(s.weekday >= 1 && s.weekday <= 7)) return { error: 'bad-slot' };
    if (!/^\d{2}:\d{2}$/.test(String(s.time || ''))) return { error: 'bad-slot' };
    if (s.section && ['rw', 'math'].indexOf(s.section) < 0) return { error: 'bad-slot' };
  }
  const members = Array.isArray(b.memberIds) ? b.memberIds.map(Number).filter(Boolean) : null;
  return { name: nm, startDate: b.startDate, examDate: b.examDate || null, slots, members };
}

async function writeGroup(c, id, g) {
  await c.query('DELETE FROM group_slots WHERE group_id = $1', [id]);
  for (const s of g.slots) {
    await c.query(
      'INSERT INTO group_slots (group_id, weekday, time, section, teacher_id) VALUES ($1, $2, $3, $4, $5)',
      [id, s.weekday, s.time, s.section || null, s.teacherId ? Number(s.teacherId) : null]);
  }
  if (g.members) {
    await c.query('DELETE FROM group_members WHERE group_id = $1 AND NOT (user_id = ANY($2))', [id, g.members]);
    for (const uid of g.members) {
      /* A student is in one group: joining this one leaves the other. */
      await c.query(
        `INSERT INTO group_members (user_id, group_id) VALUES ($1, $2)
         ON CONFLICT (user_id) DO UPDATE SET group_id = EXCLUDED.group_id, joined_at = now()`, [uid, id]);
    }
  }
}

router.post('/groups', requirePerm('groups'), async (req, res, next) => {
  const g = readGroup(req.body || {});
  if (g.error) return res.status(400).json({ ok: false, reason: g.error });
  try {
    const id = await tx(async (c) => {
      const { rows } = await c.query(
        'INSERT INTO sat_groups (name, start_date, exam_date) VALUES ($1, $2, $3) RETURNING id',
        [g.name, g.startDate, g.examDate]);
      await writeGroup(c, rows[0].id, g);
      return rows[0].id;
    });
    res.status(201).json({ ok: true, id });
  } catch (e) { next(e); }
});

/** Changing the schedule re-lays the plans of everyone in the group: plans
    are built from the group's calendar on every request, never stored. */
router.put('/groups/:id', requirePerm('groups'), async (req, res, next) => {
  const id = Number(req.params.id);
  const g = readGroup(req.body || {});
  if (g.error) return res.status(400).json({ ok: false, reason: g.error });
  try {
    await tx(async (c) => {
      const r = await c.query(
        'UPDATE sat_groups SET name = $2, start_date = $3, exam_date = $4 WHERE id = $1',
        [id, g.name, g.startDate, g.examDate]);
      if (!r.rowCount) throw Object.assign(new Error('not-found'), { status: 404 });
      await writeGroup(c, id, g);
    });
    res.json({ ok: true });
  } catch (e) {
    if (e.status === 404) return res.status(404).json({ ok: false, reason: 'not-found' });
    next(e);
  }
});

router.delete('/groups/:id', requirePerm('groups'), async (req, res, next) => {
  try {
    await pool.query('DELETE FROM sat_groups WHERE id = $1', [Number(req.params.id)]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

/* ------------------------------------------------------------ teaching */

/**
 * A teacher's lessons between two dates, across their groups. Curators and
 * admins see every group's lessons.
 */
router.get('/teaching', requirePerm('teach'), async (req, res, next) => {
  const from = isDate(req.query.from) ? req.query.from : engine.date.addDays(today(), -14);
  const to = isDate(req.query.to) ? req.query.to : engine.date.addDays(today(), 7);
  const everyone = can(req.role, 'allLessons');
  try {
    const { rows } = await pool.query(
      everyone ? 'SELECT * FROM sat_groups ORDER BY name'
               : `SELECT DISTINCT g.* FROM sat_groups g JOIN group_slots s ON s.group_id = g.id
                   WHERE s.teacher_id = $1 ORDER BY g.name`,
      everyone ? [] : [req.userId]);
    const out = [];
    for (const g of rows) {
      const cal = await groupCalendar(g);
      const mem = await pool.query(
        `SELECT u.id, u.first_name, u.last_name FROM group_members gm JOIN users u ON u.id = gm.user_id
          WHERE gm.group_id = $1 ORDER BY u.first_name`, [g.id]);
      const abs = await pool.query('SELECT lesson_no, user_id FROM lesson_absences WHERE group_id = $1', [g.id]);
      const absent = {};
      abs.rows.forEach((a) => { (absent[a.lesson_no] = absent[a.lesson_no] || []).push(a.user_id); });
      cal.plan.lessons.forEach((l) => {
        if (l.date < from || l.date > to) return;
        if (!everyone && !(l.teacher && l.teacher.id === req.userId)) return;
        out.push({
          group: { id: g.id, name: g.name }, no: l.no, code: l.code, topic: l.topic,
          section: l.section, date: l.date, time: l.time, teacher: l.teacher,
          held: !!l.heldOn, heldOn: l.heldOn, moved: l.status === 'moved',
          absent: absent[l.no] || [],
          students: mem.rows.map((r) => ({ id: r.id, name: name(r) }))
        });
      });
    }
    out.sort((a, b) => (a.date + (a.time || '')).localeCompare(b.date + (b.time || '')));
    res.json({ ok: true, from, to, lessons: out });
  } catch (e) { next(e); }
});

/** May this person mark this group's lesson? Its teacher, or a curator/admin. */
async function mayMark(req, groupId, no) {
  if (can(req.role, 'allLessons')) return true;
  const { rows } = await pool.query('SELECT * FROM sat_groups WHERE id = $1', [groupId]);
  if (!rows.length) return false;
  const cal = await groupCalendar(rows[0]);
  const l = cal.plan.lessons.filter((x) => x.no === no)[0];
  return !!(l && l.teacher && l.teacher.id === req.userId);
}

/** "Lesson held", with who was absent. Any date up to today: marking late is allowed. */
router.post('/groups/:id/lessons/:no/held', requirePerm('teach'), async (req, res, next) => {
  const groupId = Number(req.params.id), no = Number(req.params.no);
  const heldOn = isDate((req.body || {}).heldOn) ? req.body.heldOn : today();
  const absentIds = Array.isArray((req.body || {}).absentUserIds) ? req.body.absentUserIds.map(Number) : [];
  if (heldOn > today()) return res.status(400).json({ ok: false, reason: 'future' });
  try {
    if (!(await mayMark(req, groupId, no))) return res.status(403).json({ ok: false, reason: 'forbidden' });
    await tx(async (c) => {
      await c.query(
        `INSERT INTO lesson_marks (group_id, lesson_no, held_on, marked_by) VALUES ($1, $2, $3, $4)
         ON CONFLICT (group_id, lesson_no) DO UPDATE SET held_on = EXCLUDED.held_on,
           marked_by = EXCLUDED.marked_by, marked_at = now()`, [groupId, no, heldOn, req.userId]);
      await c.query('DELETE FROM lesson_absences WHERE group_id = $1 AND lesson_no = $2', [groupId, no]);
      for (const uid of absentIds) {
        await c.query(
          `INSERT INTO lesson_absences (group_id, lesson_no, user_id)
           SELECT $1, $2, $3 WHERE EXISTS (SELECT 1 FROM group_members WHERE group_id = $1 AND user_id = $3)
           ON CONFLICT DO NOTHING`, [groupId, no, uid]);
      }
    });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

router.delete('/groups/:id/lessons/:no/held', requirePerm('teach'), async (req, res, next) => {
  const groupId = Number(req.params.id), no = Number(req.params.no);
  try {
    if (!(await mayMark(req, groupId, no))) return res.status(403).json({ ok: false, reason: 'forbidden' });
    await pool.query('DELETE FROM lesson_marks WHERE group_id = $1 AND lesson_no = $2', [groupId, no]);
    await pool.query('DELETE FROM lesson_absences WHERE group_id = $1 AND lesson_no = $2', [groupId, no]);
    res.json({ ok: true });
  } catch (e) { next(e); }
});

/** A curator moves one of the group's lessons ("Перенесено"); null undoes it. */
router.post('/groups/:id/lessons/:no/move', requirePerm('moves'), async (req, res, next) => {
  const groupId = Number(req.params.id), no = Number(req.params.no);
  const date = (req.body || {}).date;
  try {
    if (date === null) {
      await pool.query('DELETE FROM lesson_moves WHERE group_id = $1 AND lesson_no = $2', [groupId, no]);
    } else if (isDate(date)) {
      await pool.query(
        `INSERT INTO lesson_moves (group_id, lesson_no, new_date, moved_by) VALUES ($1, $2, $3, $4)
         ON CONFLICT (group_id, lesson_no) DO UPDATE SET new_date = EXCLUDED.new_date,
           moved_by = EXCLUDED.moved_by, moved_at = now()`, [groupId, no, date, req.userId]);
    } else {
      return res.status(400).json({ ok: false, reason: 'bad-date' });
    }
    res.json({ ok: true });
  } catch (e) { next(e); }
});

/* -------------------------------------------------------------- scores */

router.get('/scores', requirePerm('scores'), async (req, res, next) => {
  const status = ['pending', 'confirmed', 'rejected'].indexOf(req.query.status) >= 0 ? req.query.status : 'pending';
  try {
    const { rows } = await pool.query(
      `SELECT s.*, u.first_name, u.last_name, u.phone, g.name AS group_name
         FROM score_reports s JOIN users u ON u.id = s.user_id
         LEFT JOIN group_members gm ON gm.user_id = u.id
         LEFT JOIN sat_groups g ON g.id = gm.group_id
        WHERE s.status = $1 ORDER BY s.created_at ${status === 'pending' ? 'ASC' : 'DESC'} LIMIT 300`, [status]);
    res.json({ ok: true, scores: rows.map((r) => Object.assign(scoreRow(r), {
      student: { id: r.user_id, name: name(r), phone: r.phone, group: r.group_name }
    })) });
  } catch (e) { next(e); }
});

router.post('/scores/:id', requirePerm('scores'), async (req, res, next) => {
  const status = (req.body || {}).status;
  const comment = clean((req.body || {}).comment, 500) || null;
  if (['confirmed', 'rejected'].indexOf(status) < 0) return res.status(400).json({ ok: false, reason: 'bad-status' });
  if (status === 'rejected' && !comment) return res.status(400).json({ ok: false, reason: 'comment-needed' });
  try {
    const { rowCount } = await pool.query(
      `UPDATE score_reports SET status = $2, comment = $3, reviewed_by = $4, reviewed_at = now()
        WHERE id = $1`, [Number(req.params.id), status, comment, req.userId]);
    res.json({ ok: rowCount > 0 });
  } catch (e) { next(e); }
});

module.exports = { router };
