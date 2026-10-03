/* ==========================================================================
   Keeping the SAT dates current: JTS.examDates

   The app ships with the dates in js/data/exam-dates.js. College Board adds
   and moves dates, and a weekly workflow writes them into the repository
   (tools/update_exam_dates.py → js/data/exam-dates.json). This file brings
   that list into the running app, so a copy nobody has updated still shows
   the newest dates:

   1. at start-up it uses the last list it fetched, if that is newer than the
      one it shipped with (kept in this browser, for when there is no
      connection);
   2. it then fetches exam-dates.json from the repository and, when that is
      newer, swaps it in and keeps it;
   3. a student who has already chosen a date is moved with it: if College
      Board changes that administration's date or deadlines, the student's
      exam date follows (matched by id, one administration a month).

   Every failure is quiet: no connection, a blocked request or a malformed
   file leaves the list the app already has.
   ========================================================================== */
(function () {
  'use strict';
  var URL = 'https://raw.githubusercontent.com/uwussht/jts-sat-platform/' +
            'claude/jts-sat-learning-mvp-wo6kbw/js/data/exam-dates.json';
  var KEY = 'jts.examDates.v1';
  var ISO = /^\d{4}-\d{2}-\d{2}$/;

  function valid(p) {
    return !!(p && p.meta && Array.isArray(p.dates) && p.dates.length &&
      p.dates.every(function (d) { return d && d.id && ISO.test(d.testDate); }));
  }

  function newer(p) {
    var cur = JTS.data.examDatesMeta || {};
    return !cur.checkedAt || String(p.meta.checkedAt || '') >= String(cur.checkedAt);
  }

  /** Replace the list in place, so anything holding the array sees the new one. */
  function apply(p) {
    JTS.data.examDatesMeta = p.meta;
    var list = JTS.data.examDates = JTS.data.examDates || [];
    list.length = 0;
    p.dates.forEach(function (d) { list.push(d); });
    reconcile();
  }

  /** Move a student's chosen date with College Board's changes to it. */
  function reconcile() {
    var S = JTS.store;
    var s = S && S.state && S.state();
    if (!s || !s.examDate || s.examDate.mode !== 'date' || !s.examDate.examDateId) return;
    var d = (JTS.data.examDates || []).filter(function (x) { return x.id === s.examDate.examDateId; })[0];
    if (!d) return;
    var ed = s.examDate;
    if (ed.testDate === d.testDate && ed.registrationDeadline === d.registrationDeadline &&
        ed.lateDeadline === d.lateDeadline) return;
    S.update(function (st) {
      st.examDate.testDate = d.testDate;
      st.examDate.registrationDeadline = d.registrationDeadline;
      st.examDate.lateDeadline = d.lateDeadline;
    });
  }

  function refresh() {
    if (!window.fetch) return Promise.resolve(false);
    return fetch(URL, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (p) {
        if (!valid(p) || !newer(p)) return false;
        apply(p);
        try { window.localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* not kept */ }
        return true;
      })
      .catch(function () { return false; });
  }

  try {
    var cached = JSON.parse(window.localStorage.getItem(KEY) || 'null');
    if (valid(cached) && newer(cached)) apply(cached);
  } catch (e) { /* no cache: the shipped list stands */ }

  /* A student signs in after this file runs, so the router also calls
     reconcile() each time it draws a screen. */
  JTS.examDates = { refresh: refresh, reconcile: reconcile, url: URL };
  refresh();
})();
