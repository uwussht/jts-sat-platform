/* ==========================================================================
   The course plan, for every screen.

   One place answers "what is my plan": the lessons on their dates, their
   status, the phases, the Bluebook tests, the counters and whether the course
   fits before the exam. Every screen that shows a phase, a lesson count or a
   date asks JTS.course — the dashboard, the plan, the roadmap, the stats.

   Signed in to the server (docker compose), the plan comes from GET /api/plan:
   the server knows the packages, the group's calendar and the teacher's
   marks. Without a server (Live Server, file://), the same engine
   (js/shared/plan-engine.js) builds it here from the browser profile.

   Bluebook results go through here too: to the server, where a curator
   confirms them, or into the profile when there is no server.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;
  var E = JTS.planEngine;

  var cache = { plan: null, scores: null };

  function server() { return JTS.Auth && JTS.Auth.mode === 'server' && !!JTS.Auth.user; }
  function todayISO() { return U.iso(U.today()); }

  function diagTaken(st) {
    return !!((st && st.sessions) || []).filter(function (x) {
      return x.kind === 'diagnostic' && x.finishedAt;
    }).length;
  }

  /* ------------------------------------------------------- domain snapshot */

  /**
   * The domain map as it stands right now: accuracy per domain from every
   * answer on the platform, and the two weakest as priorities. Saved with each
   * Bluebook result, because the comparison screen shows "before and after"
   * and practice keeps moving the live map.
   */
  function domainSnapshot() {
    var st = S.state();
    var by = {};
    ((st && st.attempts) || []).forEach(function (a) {
      var q = JTS.bank.get(a.questionId);
      var sk = q && JTS.skills.get(q.skillId);
      if (!sk) return;
      var d = by[sk.domain] || (by[sk.domain] = { answered: 0, correct: 0 });
      d.answered++; if (a.correct) d.correct++;
    });
    var domains = (JTS.data.domains || []).map(function (d) {
      var x = by[d.id] || { answered: 0, correct: 0 };
      return { id: d.id, section: d.section, answered: x.answered, correct: x.correct,
               pct: x.answered ? Math.round(x.correct / x.answered * 100) : null };
    });
    var ranked = domains.filter(function (d) { return d.answered >= 3; })
      .sort(function (a, b) { return a.pct - b.pct; });
    return { at: todayISO(), domains: domains, priorities: ranked.slice(0, 2).map(function (d) { return d.id; }) };
  }

  /* ---------------------------------------------------------------- scores */

  /** Every result, oldest first, in one shape whatever its source. */
  function scoreList() {
    if (server()) return (cache.scores || []).slice();
    var st = S.state();
    return ((st && st.scoreReports) || []).map(function (r) {
      return {
        id: r.id, test: r.test || null, source: r.source || 'other', date: r.date,
        total: r.total, rw: r.rw, math: r.math, status: 'local', comment: null,
        domainSnapshot: r.domainSnapshot || null
      };
    }).sort(function (a, b) { return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
  }

  /** The live result of each course test: the newest one not rejected. */
  function testScores() {
    var out = {};
    scoreList().forEach(function (r) {
      if (!r.test || r.status === 'rejected') return;
      out[r.test] = { id: r.id, status: r.status, total: r.total, rw: r.rw, math: r.math, date: r.date };
    });
    return out;
  }

  /**
   * Enter a result. rec: {test?, source, date, rw, math}. Resolves to
   * {ok, reason?}. On the server it waits for a curator; here it just counts.
   */
  function addScore(rec) {
    var rw = Number(rec.rw), math = Number(rec.math);
    var row = {
      test: rec.test || null, source: rec.source || 'bluebook', date: rec.date || todayISO(),
      rw: rw, math: math, total: rw + math, domainSnapshot: domainSnapshot()
    };
    if (server()) {
      return JTS.api('scores', row).then(function (res) {
        return res.ok ? refresh().then(function () { return { ok: true }; }) : res;
      });
    }
    S.update(function (st) {
      st.scoreReports = st.scoreReports || [];
      /* One live result per course test: a new Test 8 replaces the old one. */
      if (row.test) st.scoreReports = st.scoreReports.filter(function (r) { return r.test !== row.test; });
      st.scoreReports.push(Object.assign({ id: U.uid('sr'), addedAt: Date.now() }, row));
    });
    return refresh().then(function () { return { ok: true }; });
  }

  function removeScore(id) {
    if (server()) {
      return fetch('/api/scores/' + encodeURIComponent(id), { method: 'DELETE', credentials: 'same-origin' })
        .then(function () { return refresh(); });
    }
    S.update(function (st) {
      st.scoreReports = (st.scoreReports || []).filter(function (r) { return r.id !== id; });
    });
    return refresh();
  }

  /* ------------------------------------------------------------------ plan */

  /** What the engine needs, from the browser profile (no server). */
  function localInput() {
    var st = S.state();
    if (!st) return null;
    var p = st.profile;
    var ex = st.examDate || {};
    return {
      today: todayISO(),
      mode: 'self',
      packages: p.packages && p.packages.length ? p.packages : ['basic'],
      examDate: ex.mode === 'date' && ex.testDate ? ex.testDate : null,
      startDate: p.planStart || todayISO(),
      held: p.lessonsDone || {},
      diagnosticDone: diagTaken(st),
      scores: testScores()
    };
  }

  /**
   * Lessons finished on the platform that the plan does not know about yet
   * (students without a group). A lesson counts once its practice set has
   * been worked through — JTS.programme.isComplete.
   */
  function unreported(plan) {
    if (!plan || plan.mode !== 'self' || !JTS.programme) return [];
    return plan.lessons.filter(function (l) {
      return l.status !== 'done' && JTS.programme.isComplete(l.code);
    }).map(function (l) { return l.no; });
  }

  function refresh() {
    if (!S.state()) { cache.plan = null; cache.scores = null; return Promise.resolve(null); }
    if (server()) {
      return Promise.all([JTS.api('plan'), JTS.api('scores')]).then(function (r) {
        cache.scores = r[1] && r[1].ok ? r[1].scores : [];
        cache.plan = r[0] && r[0].ok ? r[0].plan : null;
        var missing = unreported(cache.plan);
        if (!missing.length) return cache.plan;
        return Promise.all(missing.map(function (no) { return JTS.api('lessons/' + no + '/complete', {}); }))
          .then(function () { return JTS.api('plan'); })
          .then(function (res) { if (res && res.ok) cache.plan = res.plan; return cache.plan; });
      });
    }
    cache.plan = E.build(localInput());
    var missing = unreported(cache.plan);
    if (missing.length) {
      S.update(function (st) {
        st.profile.lessonsDone = st.profile.lessonsDone || {};
        missing.forEach(function (no) { st.profile.lessonsDone[no] = todayISO(); });
      });
      cache.plan = E.build(localInput());
    }
    return Promise.resolve(cache.plan);
  }

  /** The plan, built on demand if nothing has asked for it yet. */
  function plan() {
    if (!cache.plan && S.state() && !server()) cache.plan = E.build(localInput());
    return cache.plan;
  }

  /**
   * The exam date was chosen or changed. The day the student's own plan
   * starts is fixed the first time a date is set.
   */
  function setExamDate(iso) {
    S.update(function (st) { if (!st.profile.planStart) st.profile.planStart = todayISO(); });
    if (server()) {
      return JTS.api('me', { examDate: iso || null }, 'PUT').then(function () { return refresh(); });
    }
    return refresh();
  }

  function diagnosticDone() {
    S.update(function (st) { if (!st.profile.planStart) st.profile.planStart = todayISO(); });
    if (server()) return JTS.api('me/diagnostic', {}).then(function () { return refresh(); });
    return refresh();
  }

  /** A lesson's practice set has just ended: a finished lesson moves the plan. */
  function lessonFinished(code) {
    var p = plan();
    if (!p || p.mode !== 'self' || !JTS.programme || !JTS.programme.isComplete(code)) return;
    refresh().then(function () { if (JTS.shell) JTS.shell.renderHeader(); });
  }

  /* --------------------------------------------------------------- reading */

  function lessonByCode(code) {
    var p = plan();
    return p ? p.lessons.filter(function (l) { return l.code === code; })[0] || null : null;
  }
  function lessonByNo(no) {
    var p = plan();
    return p ? p.lessons.filter(function (l) { return l.no === no; })[0] || null : null;
  }
  function phase(id) {
    var p = plan();
    return p ? p.phases.filter(function (x) { return x.id === id; })[0] || null : null;
  }
  function currentPhase() { var p = plan(); return p ? phase(p.current) : null; }

  /** Lessons scheduled for a date. */
  function lessonsOn(iso) {
    var p = plan();
    return p ? p.lessons.filter(function (l) { return l.date === iso; }) : [];
  }

  /** Is a full simulation or past paper on the programme for this date? */
  function simulationOn(iso) {
    var p = plan();
    if (!p) return false;
    if (p.simulations.some(function (s) { return s.date === iso; })) return true;
    return p.lessons.some(function (l) { return l.date === iso && l.section === 'both'; });
  }

  /** "Phase 2 · Foundations, part 1". */
  function phaseName(id) { return t('phase.' + id + '.name'); }

  function clear() { cache.plan = null; cache.scores = null; }

  JTS.course = {
    engine: E,
    refresh: refresh,
    plan: plan,
    clear: clear,
    setExamDate: setExamDate,
    diagnosticDone: diagnosticDone,
    lessonFinished: lessonFinished,
    lessonByCode: lessonByCode,
    lessonByNo: lessonByNo,
    lessonsOn: lessonsOn,
    simulationOn: simulationOn,
    phase: phase,
    currentPhase: currentPhase,
    phaseName: phaseName,
    scores: { list: scoreList, tests: testScores, add: addScore, remove: removeScore },
    domainSnapshot: domainSnapshot,
    isServer: server
  };
})();
