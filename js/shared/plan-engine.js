/* ==========================================================================
   The course plan engine — one file, loaded by the browser AND by the API
   server (server/src/index.js requires it), so the plan a student sees and
   the plan the server reports are computed by the same code.

   What it knows:
     - the programme: every lesson in its fixed order, with week, section,
       domain and topic (the methodologist's table, not an algorithm);
     - the packages: which lessons each one opens (basic → lessons 1–24,
       extra → the Challenge lessons). No count is written anywhere else:
       totals come from the packages a student has;
     - the phases: 8, in order, in one place, for every screen.

   What it does: build(input) lays the student's lessons onto the weekly
   slots (three a week) from the start date, sets each lesson's status,
   places the Bluebook tests and the weekly simulations, works out the
   current phase and checks whether the course fits before the exam.

   It is pure: dates in, plan out. No DOM, no storage, no network.
   ========================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else { root.JTS = root.JTS || {}; root.JTS.planEngine = factory(); }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var LESSONS_PER_WEEK = 3;
  var LESSON_MINUTES = 90;
  /* A plan with no exam date is laid out over the length of the course and
     no further (task 1, phase 8). */
  var DEFAULT_SLOTS = [
    { weekday: 1, time: '18:00' },
    { weekday: 3, time: '18:00' },
    { weekday: 5, time: '18:00' }
  ];
  /* The last full simulation is no later than this many days before the exam. */
  var SIM_GAP_DAYS = 5;
  /* Less spare time than this before the exam is "tight". */
  var TIGHT_WEEKS = 2;

  /* --------------------------------------------------------- programme */
  var RW = 'rw', MATH = 'math';
  var PROGRAMME = [
    [1, 'U1', 1, RW, 'Craft and Structure', 'Words in Context'],
    [2, 'U2', 1, RW, 'Craft and Structure', 'Text Structure and Purpose'],
    [3, 'U3', 1, MATH, 'Algebra', 'Linear Equations and Inequalities in One Variable'],
    [4, 'U4', 2, RW, 'Craft and Structure', 'Cross-Text Connections'],
    [5, 'U5', 2, MATH, 'Algebra', 'Linear Equations in Two Variables, Slope, and Linear Functions'],
    [6, 'U6', 2, MATH, 'Algebra', 'Systems of Linear Equations'],
    [7, 'U7', 3, RW, 'Information and Ideas', 'Central Ideas and Details'],
    [8, 'U8', 3, RW, 'Information and Ideas', 'Command of Evidence: Textual'],
    [9, 'U9', 3, MATH, 'Advanced Math', 'Quadratics Part 1'],
    [10, 'U10', 4, RW, 'Information and Ideas', 'Command of Evidence: Quantitative'],
    [11, 'U11', 4, MATH, 'Advanced Math', 'Quadratics Part 2'],
    [12, 'U12', 4, MATH, 'Advanced Math', 'Exponentials and Radicals'],
    [13, 'U13', 5, RW, 'Information and Ideas', 'Inferences'],
    [14, 'U14', 5, RW, 'Standard English Conventions', 'Boundaries Part 1'],
    [15, 'U15', 5, MATH, 'Problem-Solving and Data Analysis', 'Ratios, Rates, and Percentages'],
    [16, 'U16', 6, RW, 'Standard English Conventions', 'Boundaries Part 2'],
    [17, 'U17', 6, MATH, 'Problem-Solving and Data Analysis', 'Statistics, Data Displays, and Probability'],
    [18, 'U18', 6, MATH, 'Algebra', 'Linear Inequalities, Absolute Value, and Desmos Shading'],
    [19, 'U19', 7, RW, 'Standard English Conventions', 'Form, Structure, and Sense'],
    [20, 'U20', 7, MATH, 'Geometry and Trigonometry', 'Geometry Part 1: Lines, Angles, Triangles, Area and Volume'],
    [21, 'U21', 7, MATH, 'Advanced Math', 'Functions, Polynomials, and Rational Equations'],
    [22, 'U22', 8, RW, 'Expression of Ideas', 'Rhetorical Synthesis'],
    [23, 'U23', 8, RW, 'Expression of Ideas', 'Transitions'],
    [24, 'U24', 8, MATH, 'Geometry and Trigonometry', 'Geometry Part 2: Right Triangles, Trigonometry, Circles'],
    [25, 'CH1', 9, RW, 'Challenge', 'R&W Hard Module A'],
    [26, 'CH2', 9, MATH, 'Challenge', 'Math Hard Module A'],
    [27, 'CH3', 9, RW, 'Challenge', 'R&W Hard Module B'],
    [28, 'CH4', 10, MATH, 'Challenge', 'Math Hard Module B'],
    [29, 'CH5', 10, RW, 'Challenge', 'R&W Hard Module C'],
    [30, 'CH6', 10, MATH, 'Challenge', 'Math Hard Module C'],
    [31, 'CH7', 11, RW, 'Challenge', 'R&W Hard Module D'],
    [32, 'CH8', 11, MATH, 'Challenge', 'Math Hard Module D'],
    [33, 'CH9', 11, RW, 'Challenge', 'R&W Hard Module E'],
    [34, 'CH10', 12, MATH, 'Challenge', 'Math Hard Module E'],
    [35, 'CH11', 12, 'both', 'Challenge', 'Full Hard Simulation I'],
    [36, 'CH12', 12, 'both', 'Challenge', 'Full Hard Simulation II']
  ].map(function (r) {
    return { no: r[0], code: r[1], week: r[2], section: r[3], domain: r[4], topic: r[5] };
  });

  /* ---------------------------------------------------------- packages */
  /** Which lessons each package opens. The extra package needs the basic one. */
  var PACKAGES = {
    basic: { from: 1, to: 24 },
    extra: { from: 25, to: 36, requires: 'basic' }
  };
  var PACKAGE_ORDER = ['basic', 'extra'];

  /* ------------------------------------------------------------ phases */
  /**
   * The phases, in order. `lessons` names the package whose lessons a phase
   * holds; `test` names the Bluebook test a point phase is. Phases 7 and 8
   * are not counted in "phase N of M".
   */
  var PHASES = [
    { id: 1, key: 'diagnostic', kind: 'point', test: 'pt6', counted: true },
    { id: 2, key: 'foundations1', kind: 'span', from: 1, to: 12, counted: true },
    { id: 3, key: 'test8', kind: 'point', test: 'pt8', after: 12, counted: true },
    { id: 4, key: 'foundations2', kind: 'span', from: 13, to: 24, counted: true },
    { id: 5, key: 'test10', kind: 'point', test: 'pt10', after: 24, counted: true },
    { id: 6, key: 'challenge', kind: 'span', from: 25, to: 36, pkg: 'extra', counted: true },
    { id: 7, key: 'selfStudy', kind: 'span', counted: false },
    { id: 8, key: 'examDay', kind: 'point', counted: false }
  ];
  var TESTS = ['pt6', 'pt8', 'pt10'];

  /* ------------------------------------------------------------- dates */
  /* ISO dates only ('YYYY-MM-DD'), computed in UTC so a server and a browser
     in different time zones agree on what day a lesson is. */
  function parse(iso) {
    var p = String(iso).split('-');
    return Date.UTC(+p[0], +p[1] - 1, +p[2]);
  }
  function fmt(ms) { return new Date(ms).toISOString().slice(0, 10); }
  function addDays(iso, n) { return fmt(parse(iso) + n * 86400000); }
  function daysBetween(a, b) { return Math.round((parse(b) - parse(a)) / 86400000); }
  /** 1 = Monday … 7 = Sunday. */
  function weekday(iso) { var d = new Date(parse(iso)).getUTCDay(); return d === 0 ? 7 : d; }
  /** The Saturday on or after a date: when a weekend test is sat. */
  function saturdayAfter(iso) { var w = weekday(iso); return addDays(iso, w <= 6 ? 6 - w : 6); }
  function isISO(s) { return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s); }

  /** Every slot occurrence on or after `from`, in date-then-time order. */
  function occurrences(slots, from, count) {
    var sorted = slots.slice().sort(function (a, b) {
      return a.weekday - b.weekday || String(a.time || '').localeCompare(String(b.time || ''));
    });
    var out = [];
    var day = from;
    var guard = 0;
    while (out.length < count && guard < 3660) {
      var w = weekday(day);
      sorted.forEach(function (s) { if (s.weekday === w && out.length < count) out.push({ date: day, slot: s }); });
      day = addDays(day, 1);
      guard++;
    }
    return out;
  }

  /* ------------------------------------------------------- package math */
  function normPackages(list) {
    var have = {};
    (list || []).forEach(function (p) { if (PACKAGES[p]) have[p] = true; });
    /* An extra package without the basic one is not sold; treat it as basic. */
    PACKAGE_ORDER.forEach(function (p) {
      var req = PACKAGES[p].requires;
      if (have[p] && req && !have[req]) delete have[p];
    });
    return PACKAGE_ORDER.filter(function (p) { return have[p]; });
  }

  function lessonsFor(packages) {
    var pk = normPackages(packages);
    return PROGRAMME.filter(function (l) {
      return pk.some(function (p) { return l.no >= PACKAGES[p].from && l.no <= PACKAGES[p].to; });
    });
  }

  function packageSize(p) { return PACKAGES[p] ? PACKAGES[p].to - PACKAGES[p].from + 1 : 0; }

  /* -------------------------------------------------------------- build */
  /**
   * input:
   *   packages     ['basic'] | ['basic','extra']
   *   examDate     'YYYY-MM-DD' | null
   *   startDate    the day the course starts (group start, or the day the
   *                student's own plan was created)
   *   today        'YYYY-MM-DD'
   *   slots        [{weekday 1–7, time 'HH:MM', section?, teacher?}] — the
   *                group's three slots, or none for the default three
   *   mode         'group' (dates fixed by the group calendar, status set by
   *                the teacher) | 'self' (no group: lessons not done are
   *                re-laid from today, status from the student's own work)
   *   held         { lessonNo: 'YYYY-MM-DD' } — group: marked held by the
   *                teacher; self: completed on the platform
   *   absent       { lessonNo: true } — group only
   *   moved        { lessonNo: 'YYYY-MM-DD' } — group only, set by a curator
   *   scores       { pt6|pt8|pt10: {status,…} } — Bluebook results entered
   *   diagnosticDone  boolean
   */
  function build(input) {
    var today = isISO(input.today) ? input.today : fmt(Date.now());
    var packages = normPackages(input.packages && input.packages.length ? input.packages : ['basic']);
    var exam = isISO(input.examDate) ? input.examDate : null;
    var start = isISO(input.startDate) ? input.startDate : today;
    var mode = input.mode === 'group' ? 'group' : 'self';
    var slots = (input.slots && input.slots.length ? input.slots : DEFAULT_SLOTS)
      .filter(function (s) { return s && s.weekday >= 1 && s.weekday <= 7; });
    if (!slots.length) slots = DEFAULT_SLOTS;
    var held = input.held || {}, absent = input.absent || {}, moved = input.moved || {};
    var scores = input.scores || {};

    var list = lessonsFor(packages);

    /* --- dates */
    var lessons;
    if (mode === 'group') {
      var occ = occurrences(slots, start, list.length);
      lessons = list.map(function (l, i) {
        var o = occ[i];
        return {
          no: l.no, code: l.code, week: l.week, section: l.section, domain: l.domain, topic: l.topic,
          date: moved[l.no] || o.date, time: o.slot.time || null,
          slotSection: o.slot.section || null, teacher: o.slot.teacher || null,
          plannedDate: o.date, heldOn: held[l.no] || null
        };
      });
    } else {
      /* Self-paced: what is done keeps the day it was done; what is left is
         laid on the slots from today (or the start, if later), in order. */
      var left = list.filter(function (l) { return !held[l.no]; });
      var from = start > today ? start : today;
      var occ2 = occurrences(slots, from, left.length);
      var k = 0;
      lessons = list.map(function (l) {
        var o = held[l.no] ? null : occ2[k++];
        return {
          no: l.no, code: l.code, week: l.week, section: l.section, domain: l.domain, topic: l.topic,
          date: held[l.no] || o.date, time: o ? o.slot.time || null : null,
          slotSection: null, teacher: null, plannedDate: o ? o.date : held[l.no], heldOn: held[l.no] || null
        };
      });
    }

    /* --- status: done · missed · moved · next · planned */
    var nextSet = false;
    lessons.forEach(function (l) {
      if (l.heldOn && !absent[l.no]) l.status = 'done';
      else if (l.heldOn && absent[l.no]) l.status = 'missed';
      else {
        l.status = moved[l.no] && mode === 'group' ? 'moved' : 'planned';
        if (!nextSet) { l.isNext = true; nextSet = true; if (l.status === 'planned') l.status = 'next'; }
      }
      l.inPackage = packages.filter(function (p) { return l.no >= PACKAGES[p].from && l.no <= PACKAGES[p].to; })[0];
    });
    var byNo = {};
    lessons.forEach(function (l) {
      byNo[l.no] = l;
      /* Scheduled on or after the exam: it will not happen before it. */
      l.afterExam = !!(exam && l.status !== 'done' && l.date >= exam);
    });

    /* --- the three Bluebook tests: points between weeks, sat at a weekend */
    var first = lessons[0];
    var tests = [];
    function addTest(id, date, phaseId) {
      var sc = scores[id] || null;
      tests.push({ id: id, date: date, phase: phaseId, entered: !!(sc && sc.status !== 'rejected'), score: sc });
    }
    if (first) addTest('pt6', addDays(first.date, -1), 1);
    if (byNo[12]) addTest('pt8', saturdayAfter(byNo[12].date), 3);
    if (byNo[24]) addTest('pt10', saturdayAfter(byNo[24].date), 5);
    var testBy = {};
    tests.forEach(function (x) { testBy[x.id] = x; });

    /* --- weekly full simulations in the Challenge weeks */
    var sims = [];
    if (byNo[25]) {
      var weeks = {};
      lessons.forEach(function (l) { if (l.no >= 25) weeks[l.week] = l.date > (weeks[l.week] || '') ? l.date : weeks[l.week]; });
      Object.keys(weeks).sort(function (a, b) { return a - b; }).forEach(function (w) {
        var d = saturdayAfter(weeks[w]);
        if (exam && weeks[w] >= exam) return;            /* that week never comes */
        if (exam && daysBetween(d, exam) < SIM_GAP_DAYS) d = addDays(exam, -SIM_GAP_DAYS);
        if (sims.length && d <= sims[sims.length - 1].date) return;
        sims.push({ week: Number(w), date: d });
      });
    }

    /* --- phases */
    var last = lessons[lessons.length - 1];
    var hasExtra = packages.indexOf('extra') >= 0;
    var phases = [];
    PHASES.forEach(function (ph) {
      if (ph.pkg && packages.indexOf(ph.pkg) < 0) return;
      var p = { id: ph.id, key: ph.key, kind: ph.kind, counted: ph.counted, test: ph.test || null };
      if (ph.kind === 'span' && ph.from) {
        var ls = lessons.filter(function (l) { return l.no >= ph.from && l.no <= ph.to; });
        if (!ls.length) return;
        p.lessons = [ls[0].no, ls[ls.length - 1].no];
        p.start = ls.reduce(function (m, l) { return l.date < m ? l.date : m; }, ls[0].date);
        p.end = ls.reduce(function (m, l) { return l.date > m ? l.date : m; }, ls[0].date);
        p.weeks = [ls[0].week, ls[ls.length - 1].week];
        p.total = ls.length;
        p.done = ls.filter(function (l) { return l.status === 'done'; }).length;
        p.complete = ls.every(function (l) { return l.status === 'done' || l.status === 'missed'; });
      } else if (ph.test) {
        var tt = testBy[ph.test];
        if (!tt) return;
        p.start = p.end = tt.date;
        p.complete = ph.id === 1 ? !!input.diagnosticDone && tt.entered : tt.entered;
        if (ph.id === 1) p.diagnosticDone = !!input.diagnosticDone;
        p.testEntered = tt.entered;
      } else if (ph.key === 'selfStudy') {
        var after = hasExtra ? last && last.date : (testBy.pt10 ? testBy.pt10.date : last && last.date);
        if (!after) return;
        p.start = addDays(after, 1);
        p.end = exam ? addDays(exam, -1) : p.start;
        /* Zero length (no date, or no time left): not on the roadmap. */
        if (!exam || p.end < p.start) return;
        p.days = daysBetween(p.start, p.end) + 1;
        p.complete = false;
      } else if (ph.key === 'examDay') {
        if (!exam) return;
        p.start = p.end = exam;
        p.complete = today > exam;
      }
      phases.push(p);
    });

    /* Current phase: the calendar decides (the group's common calendar), not
       how much of it this student has done. The last phase that has started. */
    var current = phases[0] || null;
    phases.forEach(function (p) { if (p.start && p.start <= today) current = p; });
    /* Before the first lesson the student is in phase 1 whatever its date. */
    if (first && today < first.date) current = phases[0];
    var counted = phases.filter(function (p) { return p.counted; });
    phases.forEach(function (p) {
      p.state = p === current ? 'current'
        : (current && phases.indexOf(p) < phases.indexOf(current)) ? (p.complete ? 'done' : 'incomplete')
        : 'ahead';
    });

    /* --- counters */
    var total = lessons.length;
    var done = lessons.filter(function (l) { return l.status === 'done'; }).length;
    var missed = lessons.filter(function (l) { return l.status === 'missed'; }).length;
    var next = lessons.filter(function (l) { return l.isNext; })[0] || null;
    var weeksTotal = Math.ceil(total / LESSONS_PER_WEEK);
    var weekNow = next ? next.week : (last ? last.week : 1);

    return {
      version: 1,
      today: today,
      mode: mode,
      packages: packages,
      examDate: exam,
      startDate: start,
      perWeek: LESSONS_PER_WEEK,
      lessonMinutes: LESSON_MINUTES,
      slots: slots,
      lessons: lessons,
      tests: tests,
      simulations: sims,
      phases: phases,
      current: current ? current.id : 1,
      phaseCounter: {
        n: current && current.counted ? counted.indexOf(current) + 1 : null,
        of: counted.length
      },
      total: total,
      done: done,
      missed: missed,
      remaining: total - done - missed,
      next: next,
      week: { now: weekNow, of: weeksTotal },
      fit: fit({ exam: exam, today: today, remaining: total - done - missed }),
      extraFit: hasExtra ? null : extraFit({ exam: exam, today: today, lessons: lessons })
    };
  }

  /**
   * Does what is left fit before the exam? Remaining lessons over three a
   * week, against the whole weeks until the exam. The tests take no weeks.
   */
  function fit(o) {
    if (!o.exam) return { state: 'none' };
    var weeksLeft = Math.max(0, Math.floor(daysBetween(o.today, o.exam) / 7));
    var weeksNeeded = Math.ceil(o.remaining / LESSONS_PER_WEEK);
    if (o.remaining <= 0) return { state: 'ok', weeksLeft: weeksLeft, weeksNeeded: 0, missing: 0 };
    if (weeksNeeded > weeksLeft) {
      return { state: 'short', weeksLeft: weeksLeft, weeksNeeded: weeksNeeded,
               missing: o.remaining - weeksLeft * LESSONS_PER_WEEK };
    }
    return { state: weeksLeft - weeksNeeded < TIGHT_WEEKS ? 'tight' : 'ok',
             weeksLeft: weeksLeft, weeksNeeded: weeksNeeded, missing: 0 };
  }

  /** Would the extra package fit before the exam, after the basic course? */
  function extraFit(o) {
    var need = Math.ceil(packageSize('extra') / LESSONS_PER_WEEK);
    if (!o.exam) return { fits: null, weeksNeeded: need, weeksLeft: null };
    var lastBasic = o.lessons.length ? o.lessons[o.lessons.length - 1].date : o.today;
    var from = lastBasic > o.today ? lastBasic : o.today;
    var weeksLeft = Math.max(0, Math.floor(daysBetween(from, o.exam) / 7));
    return { fits: weeksLeft >= need, weeksNeeded: need, weeksLeft: weeksLeft };
  }

  return {
    LESSONS_PER_WEEK: LESSONS_PER_WEEK,
    LESSON_MINUTES: LESSON_MINUTES,
    DEFAULT_SLOTS: DEFAULT_SLOTS,
    PROGRAMME: PROGRAMME,
    PACKAGES: PACKAGES,
    PACKAGE_ORDER: PACKAGE_ORDER,
    PHASES: PHASES,
    TESTS: TESTS,
    normPackages: normPackages,
    lessonsFor: lessonsFor,
    packageSize: packageSize,
    build: build,
    fit: fit,
    date: { parse: parse, fmt: fmt, addDays: addDays, daysBetween: daysBetween, weekday: weekday, isISO: isISO }
  };
});
