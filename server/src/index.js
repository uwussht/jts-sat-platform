/* ==========================================================================
   TeenTech SAT — API server

   Accounts (auth.js)
     POST /api/register  POST /api/login  POST /api/logout
     GET  /api/me        PUT  /api/me {examDate, firstName, lastName, grade}
     POST /api/me/diagnostic
   The course, for a student (course.js)
     GET  /api/plan                          the plan, built by js/shared/plan-engine.js
     POST /api/lessons/:no/complete          a lesson done (students without a group)
     GET  /api/scores   POST /api/scores     Bluebook results (pending until confirmed)
     DELETE /api/scores/:id                  take back a pending result
     GET  /api/progress PUT /api/progress    the saved progress document
   Staff (staff.js) — teachers, curators, managers, admins
     /api/staff/users, /teachers, /groups, /teaching, /scores
   GET /api/health
   ========================================================================== */
'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const { migrate, waitForDb } = require('./db');

const PORT = Number(process.env.PORT || 3000);
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
  console.error('JWT_SECRET must be set and at least 32 characters long');
  process.exit(1);
}

const auth = require('./auth');
const course = require('./course');
const staff = require('./staff');

const app = express();
app.set('trust proxy', 1);
app.use(cookieParser());
/* Progress documents can be large; everything else is a few fields. */
app.use('/api/progress', express.json({ limit: '8mb' }));
app.use(express.json({ limit: '64kb' }));

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api', auth.router);
app.use('/api', course.router);
app.use('/api/staff', staff.router);
app.use('/api', (req, res) => res.status(404).json({ ok: false, reason: 'not-found' }));

/* Anything thrown inside a route ends here: logged, and a plain answer. */
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  /* A body that is not JSON, or too large, is the caller's mistake. */
  if (err.type === 'entity.parse.failed' || err.type === 'entity.too.large') {
    return res.status(400).json({ ok: false, reason: 'bad-request' });
  }
  console.error(req.method, req.path, err);
  res.status(500).json({ ok: false, reason: 'server' });
});

waitForDb(30)
  .then(migrate)
  .then(() => app.listen(PORT, () => console.log(`API listening on :${PORT}`)))
  .catch((e) => { console.error(e); process.exit(1); });
