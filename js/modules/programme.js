/* ==========================================================================
   Rendering the JTS 36-unit course.

   The data is in js/data/programme*.js; this file turns it into the pieces the
   screens hang on their own pages, so a lesson row looks the same wherever it
   appears and a topic is worded once:

     JTS.programme.chronology()    the 36 classes by month, with the checkpoints
                                   — used by #/roadmap
     JTS.programme.unitList(sec)   the units and their lessons — #/materials
     JTS.programme.errorLogCard()  the error log — used by #/guide
     JTS.programme.lessonDetail(n) one lesson, for a day on the calendar

   Everything that prints a lesson number asks which schedule the student is
   on first: the same 36 classes fall in different weeks at two a week and at
   three, and a week that belongs to the other schedule is worse than no
   week at all.

   Nothing here writes to the store. The programme is the school's course and
   the same for everyone; a student's own progress lives in the plan.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;
  var P = JTS.data.programme;

  function lang() { return S.settings ? S.settings().uiLang : 'en'; }
  function pick(obj) { return JTS.i18n.pick(obj, lang()); }

  /**
   * The course runs at three classes a week, 12 weeks, for everyone. The
   * schedule is not a student's choice; this stays a function so the screens
   * that number weeks keep asking one place.
   */
  function perWeek() { return 3; }

  function schedule() { return P.scheduleOf(perWeek()); }

  /* ------------------------------------------------------------- lessons */

  /** "M2.3 · Quadratics: the formula" — a lesson named the way it is coded. */
  function lessonName(l) { return pick(l.t); }

  function codeChip(l) {
    var unit = P.unitById(l.unit);
    return U.el('span.pg-tag' + (unit && unit.kind === 'hard' ? '.lv-hard' : ''), {
      text: l.code, title: unit ? pick(unit.name) : l.code
    });
  }

  /** One sitting: its number, the lessons in it, and the gate that follows. */
  function slotRow(slot, opts) {
    opts = opts || {};
    var pw = opts.perWeek || perWeek();
    var gate = P.gateAfter(slot.n, pw);
    var row = U.el('div.pg-lesson' + (gate ? '.is-gate' : ''));
    row.appendChild(U.el('span.pg-n', { text: String(slot.n) }));

    var body = U.el('div.pg-body');
    slot.lessons.forEach(function (l) {
      body.appendChild(U.el('div.pg-name', null, [
        codeChip(l),
        U.el('b', { text: lessonName(l) })
      ]));
      if (opts.skills && l.skills) {
        body.appendChild(U.el('div.pg-topic-text', { text: pick(l.skills) }));
      }
    });
    row.appendChild(body);

    if (gate) {
      row.appendChild(U.el('div.pg-gate', null, [
        U.el('span.badge.badge-warn', { text: pick(gate.name) })
      ]));
    }
    return row;
  }

  /* ---------------------------------------------------------- chronology */

  /**
   * The whole course in order: three phases, the weeks inside each, and the
   * gate that closes it. This is the chronology — it answers "what comes after
   * what", which the road cannot because the road has six shapes and the
   * course has thirty-six steps.
   */
  function chronology(opts) {
    opts = opts || {};
    var pw = opts.perWeek || perWeek();
    var sch = P.scheduleOf(pw);
    var wrap = U.el('div.stack');

    wrap.appendChild(U.el('div.card.card-sm.pg-zero', null, [
      U.el('div', null, [U.el('b', {
        text: t('prog.scheduleShape', { weeks: sch.weeks, lessons: P.lessonsTotal, tests: sch.tests })
      })])
    ]));

    /* An official Bluebook test is its own card, where it falls in the
       course: before Month 1, and after each of the first two months. */
    function testCard(test) {
      return U.el('div.card.stack-sm.pg-official', null, [
        U.el('div.eyebrow', { text: t('prog.officialTest') }),
        U.el('div.h3', { text: pick(test.name) }),
        U.el('p.small.muted', { text: pick(test.note) })
      ]);
    }
    function testsAfter(phaseId) {
      (P.officialTests || []).forEach(function (test) {
        if (test.after === phaseId) wrap.appendChild(testCard(test));
      });
    }
    testsAfter(null);

    var weeks = P.weeks(pw);
    P.phases.forEach(function (ph) {
      var from = pw === 2 ? ph.from2 : ph.from3;
      var to = pw === 2 ? ph.to2 : ph.to3;
      var mine = weeks.filter(function (w) {
        return w.slots.some(function (s) { return s.n >= from && s.n <= to; });
      });

      var head = U.el('div.pg-stage-head', null, [
        U.el('div', null, [
          U.el('div.eyebrow', { text: t('prog.weeks', { range: pw === 2 ? ph.weeks2 : ph.weeks3 }) }),
          U.el('div.h3', { text: pick(ph.name) })
        ]),
        U.el('span.badge.badge-muted', { text: t('prog.lessonRange', { from: from, to: to }) })
      ]);

      var body = U.el('div.pg-lessons');
      mine.forEach(function (w) {
        body.appendChild(U.el('div.pg-week', null, [
          U.el('span.pg-week-n', { text: t('prog.weekNo', { n: w.n }) }),
          U.el('span.pg-week-test', { text: t('prog.testNo', { n: w.n }) })
        ]));
        w.slots.forEach(function (s) {
          if (s.n < from || s.n > to) return;
          body.appendChild(slotRow(s, { perWeek: pw }));
        });
      });

      wrap.appendChild(U.el('div.card.stack-sm', null, [
        head,
        U.el('p.small.muted', { text: pick(ph.lead) }),
        body
      ]));
      testsAfter(ph.id);
    });

    return wrap;
  }

  /* --------------------------------------------------------------- units */

  /**
   * A unit is complete once every question of its practice set has been
   * checked, in any of its sessions. A unit with no set yet cannot be.
   */
  function isComplete(code) {
    var ids = lessonSet(code);
    if (!ids.length) return false;
    var byQ = lessonAnswers(code, ids);
    return ids.every(function (id) { return byQ[id] && byQ[id].submitted; });
  }

  /** How many units of the course are complete: the ticks, and the bar. */
  function doneCount() {
    var pw = perWeek();
    return P.lessons.filter(function (l) {
      return P.numberOn(l, pw) && isComplete(l.code);
    }).length;
  }

  /** The course number of the first unit not yet complete. */
  function nextNumber(pw) {
    var open = P.lessons.filter(function (l) { return P.numberOn(l, pw) && !isComplete(l.code); })
      .map(function (l) { return P.numberOn(l, pw); });
    return open.length ? Math.min.apply(null, open) : null;
  }

  /** done | current | ahead, for a lesson number on this student's schedule. */
  function stateOfNumber(n, done) {
    if (!n) return 'ahead';
    if (n <= done) return 'done';
    if (n === done + 1) return 'current';
    return 'ahead';
  }

  function unitState(unit, pw, done) {
    var ns = P.lessonsOfUnit(unit.id)
      .map(function (l) { return P.numberOn(l, pw); })
      .filter(Boolean);
    if (!ns.length) return 'ahead';
    var last = Math.max.apply(null, ns);
    var first = Math.min.apply(null, ns);
    if (done >= last) return 'done';
    if (done + 1 >= first) return 'current';
    return 'ahead';
  }

  /**
   * A unit is a subtopic. There is no card for "Standard English Conventions"
   * holding six lessons inside it: a student opens a topic, not a folder, and
   * a folder between them and the topic was one press that taught nothing.
   * The domain it belongs to stays on the card as a caption, because knowing
   * that sentence boundaries are Conventions is worth a line and not a level.
   *
   * The card is a link: the lesson is a page, so middle-click and copy-link
   * behave the way they look as though they should.
   */
  function unitCard(lesson, opts) {
    opts = opts || {};
    var pw = opts.perWeek || perWeek();
    var done = opts.done === undefined ? doneCount() : opts.done;
    var n = P.numberOn(lesson, pw);
    var st = isComplete(lesson.code) ? 'done'
      : n && n === (opts.next === undefined ? nextNumber(pw) : opts.next) ? 'current' : 'ahead';
    var unit = P.unitById(lesson.unit);
    var count = JTS.programme.lessonSet ? JTS.programme.lessonSet(lesson.code).length : 0;

    var caption = [
      unit ? pick(unit.name) : null,
      count ? t('mat.nQuestions', { n: count }) : t('lesson.practiceSoonShort')
    ].filter(Boolean).join(' · ');

    return U.el('a.mat-unit.is-' + st, { href: '#/materials/lesson?code=' + lesson.code }, [
      U.el('span.mat-state', {
        text: st === 'done' ? '✓' : st === 'current' ? '▶' : '', 'aria-hidden': 'true'
      }),
      U.el('span.mat-unit-text', null, [
        U.el('b', { text: t('mat.unitNo', { n: n || opts.index, name: lessonName(lesson) }) }),
        U.el('span.small.muted', { text: caption })
      ]),
      codeChip(lesson),
      U.el('span.mat-go', { text: '❯', 'aria-hidden': 'true' })
    ]);
  }

  /**
   * Every subtopic of one section, in course order and numbered within it —
   * unit 1 of Verbal is the first Verbal lesson of the course, whatever its
   * number in the whole 36.
   */
  function unitList(section, opts) {
    opts = opts || {};
    var pw = opts.perWeek || perWeek();
    var done = opts.done === undefined ? doneCount() : opts.done;
    var box = U.el('div.mat-units');
    var next = nextNumber(pw);
    lessonsOfSection(section, pw).forEach(function (l, i) {
      box.appendChild(unitCard(l, { perWeek: pw, done: done, next: next, index: i + 1 }));
    });
    return box;
  }

  /** A section's lessons, in the order this student will sit them. */
  function lessonsOfSection(section, pw) {
    pw = pw || perWeek();
    return P.lessons.filter(function (l) {
      return P.sectionOf(l) === section && P.numberOn(l, pw);
    }).sort(function (a, b) { return P.numberOn(a, pw) - P.numberOn(b, pw); });
  }

  /** How many lessons of a section there are, for the heading's badge. */
  function lessonCount(section, pw) {
    pw = pw || perWeek();
    return P.lessons.filter(function (l) {
      return P.sectionOf(l) === section && P.numberOn(l, pw);
    }).length;
  }

  /* -------------------------------------------------------- the error log */

  function errorLogCard() {
    var cols = ['date', 'source', 'tag', 'type', 'rule', 'again'];
    var table = U.el('table.table.pg-table');
    table.appendChild(U.el('thead', null, [U.el('tr', null,
      cols.map(function (c) { return U.el('th', { text: t('prog.log.' + c) }); }))]));
    table.appendChild(U.el('tbody', null, [U.el('tr', null,
      cols.map(function (c) {
        return U.el('td.small.muted', { text: t('prog.logEx.' + c) });
      }))]));

    return U.el('div.stack-sm', null, [
      U.el('p.small', { text: t('prog.logLead') }),
      U.el('div.table-wrap', null, [table]),
      /* The guide shows the shape of the log; the student's own is a screen.
         Explaining a format without a door to the thing itself is how a log
         ends up explained and never kept. */
      U.el('a.btn.btn-primary', { href: '#/errors', text: t('errors.openLog') }),
      U.el('div.notice', { text: t('prog.logClose') }),
      U.el('div.notice.notice-warn', { text: pick(P.redrill) }),
      U.el('p.small.muted', { text: t('prog.logWhy') })
    ]);
  }

  /* -------------------------------------------------- a lesson's ten items */

  /** djb2, kept numeric: U.rng does `seed >>> 0`, and a string becomes 0. */
  function numericSeed(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) h = ((h * 33) ^ str.charCodeAt(i)) >>> 0;
    return h >>> 0;
  }

  function drillOf(code) { return (P.drills && P.drills[code]) || null; }
  function teachOf(code) { return (P.teach && P.teach[code]) || null; }

  /**
   * The practice set of a class.
   *
   * A class with its own written set (js/data/lesson-questions.js) gets that
   * set, whole and in the order it was written. Otherwise, if the class names
   * skills, it is filled from JTS's own bank by those skills — never from
   * Bluebook or any other published test. A class with neither has no set yet,
   * and its page says so.
   */
  function lessonSet(code, n) {
    var own = JTS.data.lessonQuestions && JTS.data.lessonQuestions[code];
    if (own) return own.filter(function (id) { return !!JTS.bank.get(id); });
    n = n || 10;
    var d = drillOf(code);
    if (!d || !(d.skills || d.fromErrorLog)) return [];
    var seed = numericSeed(code);
    var out = [], seen = {};

    function take(list) {
      list.forEach(function (q) {
        var id = q.id || q;
        if (out.length >= n || seen[id] || !JTS.bank.get(id)) return;
        seen[id] = 1; out.push(id);
      });
    }

    /* A review lesson is the student's own error log, in the order the
       spacing says, and then their weakest skills. */
    if (d.fromErrorLog) {
      take(U.shuffle(JTS.analytics.pendingReviews().map(function (e) { return e.questionId; }), seed));
      if (out.length < n && JTS.mastery && JTS.mastery.ranked) {
        var days = JTS.analytics.daysToExam();
        JTS.mastery.ranked({ daysToExam: days === null ? 84 : days }).forEach(function (r) {
          if (out.length >= n) return;
          take(JTS.bank.pickForSkill(r.skillId, 2, { exclude: out, seed: seed }));
        });
      }
    }

    var skills = d.skills || [];
    var per = Math.ceil(n / Math.max(1, skills.length));
    skills.forEach(function (skillId) {
      var pool = JTS.bank.query({ skillIds: [skillId] });
      /* Hardest first for the hard phase; otherwise a stable shuffle, so the
         set of a lesson is the same set every time it is opened. */
      pool = d.hard
        ? pool.slice().sort(function (a, b) { return (b.difficulty || 0) - (a.difficulty || 0); })
        : U.shuffle(pool, seed);
      take(pool.slice(0, per));
    });
    /* Short only if the bank is short for those skills; fill from the same
       section rather than leaving a set of six. */
    if (out.length < n && skills.length) {
      var sec = (JTS.skills.get(skills[0]) || {}).section;
      take(U.shuffle(JTS.bank.query({ section: sec }), seed));
    }
    out = out.slice(0, n);

    /* Easy first, hard last. A set that opens on its hardest item teaches a
       student that the topic is beyond them before the explanation above has
       had a chance to be tried. Within a difficulty the order stays as picked,
       so a two-skill lesson still alternates rather than doing one skill and
       then the other. */
    return out.slice().sort(function (a, b) {
      var qa = JTS.bank.get(a), qb = JTS.bank.get(b);
      return ((qa && qa.difficulty) || 0) - ((qb && qb.difficulty) || 0);
    });
  }

  /**
   * What the student has done OF THIS LESSON.
   *
   * Counted from the lesson's own sessions and not from every attempt ever
   * made on those questions: the bank is shared with the diagnostic, the
   * practice builder and the daily check, and a page that opened saying
   * "3 of 10 answered, 0 right" about work done somewhere else — with three
   * steps already marked red — was telling a student they had failed a set
   * they had not started.
   */
  function lessonAnswers(code, ids) {
    var s = S.state();
    var byQ = {};
    function take(answers, qids) {
      (qids || []).forEach(function (qid) {
        if (ids.indexOf(qid) < 0) return;
        var a = answers[qid];
        if (!a || a.selected === null || a.selected === '') return;
        byQ[qid] = a;
      });
    }
    /* Oldest first, so a retake overwrites the attempt before it. */
    ((s && s.sessions) || []).forEach(function (sum) {
      if (!sum.meta || sum.meta.lessonCode !== code) return;
      take(sum.answers, sum.questionIds);
    });
    var live = JTS.session.current && JTS.session.current();
    if (live && live.meta && live.meta.lessonCode === code) take(live.answers, live.questionIds);
    return byQ;
  }

  function lessonRecord(code, ids) {
    var byQ = lessonAnswers(code, ids);
    var keys = Object.keys(byQ);
    var right = 0;
    keys.forEach(function (k) { if (byQ[k].correct) right++; });
    return { done: keys.length, right: right, total: ids.length, byQ: byQ };
  }

  /* ------------------------------------------- a planned day and its lesson */

  /**
   * Which programme lesson a planned session is.
   *
   * The plan is generated from the student's own dates and the programme is a
   * fixed list of 36; the link between them is simply the order. The third
   * session anyone sits is lesson 3, whatever day it falls on — which is what
   * makes "set #10" and "word list #10" mean something on a calendar.
   */
  function numberOf(lesson) {
    var all = JTS.planner.allLessons();
    var i = -1;
    all.forEach(function (l, k) { if (l.id === lesson.id) i = k; });
    if (i < 0) return null;
    var n = i + 1;
    return n <= P.lessonsTotal ? n : null;
  }

  function slotOf(n, pw) {
    return P.order(pw).filter(function (s) { return s.n === n; })[0] || null;
  }

  /**
   * What a sitting actually covers, as words: the programme lessons that fall
   * on sitting `n`. The calendar prints this instead of "Lesson 7", because a
   * number on a square tells a student the count of what is behind them and
   * nothing about what Tuesday is for.
   *
   * Returns [] when `n` is past the end of the course, which is how a day the
   * programme does not reach keeps its ordinary label.
   */
  function topicsOf(n) {
    var slot = slotOf(n, perWeek());
    return slot ? slot.lessons.slice() : [];
  }

  /**
   * Everything the programme sets for one lesson, for the day a student taps:
   * which class of the 36 it is, what it covers, and the homework with its
   * numbers filled in.
   */
  function lessonDetail(n) {
    var pw = perWeek();
    var slot = slotOf(n, pw);
    if (!slot) return null;
    var box = U.el('div.stack-sm.pg-day');
    var phase = P.phaseOf(n, pw);

    box.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge', { text: t('prog.lessonNo', { n: n }) }),
      phase ? U.el('span.badge.badge-muted', { text: pick(phase.name) }) : null
    ]));

    var topics = U.el('div.stack-sm');
    slot.lessons.forEach(function (l) {
      topics.appendChild(U.el('div.pg-day-topic', null, [
        codeChip(l),
        U.el('span', null, [
          U.el('b', { text: lessonName(l) }),
          l.skills ? U.el('span.small.muted', { text: ' — ' + pick(l.skills) }) : null
        ])
      ]));
    });
    box.appendChild(U.el('div.stack-sm', null, [
      U.el('div.stat-label', { text: t('prog.topicsToday') }), topics
    ]));

    var hw = U.el('div.pg-hw');
    P.homework.forEach(function (h, i) {
      /* "#N" in the wording is this lesson's number, so the student is told
         which list and which set rather than being told the pattern. */
      var body = pick(h.body).replace(/#N/g, '#' + n);
      hw.appendChild(U.el('div.pg-hw-item', null, [
        U.el('span.pg-hw-n', { text: String(i + 1) }),
        U.el('div', null, [
          U.el('div', null, [
            U.el('b', { text: pick(h.name).replace(/#N/g, '#' + n) }),
            U.el('span.pg-mins', { text: h.mins + ' ' + t('common.minutes') })
          ]),
          U.el('div.small.muted', { text: body })
        ])
      ]));
    });
    box.appendChild(U.el('div.stack-sm', null, [
      U.el('div.stat-label', { text: t('prog.hwTitle') }), hw
    ]));

    var gate = P.gateAfter(n, pw);
    if (gate) box.appendChild(U.el('div.notice.notice-warn', { text: pick(gate.name) }));
    return box;
  }

  JTS.programme = {
    perWeek: perWeek,
    drillOf: drillOf,
    teachOf: teachOf,
    lessonSet: lessonSet,
    lessonRecord: lessonRecord,
    lessonAnswers: lessonAnswers,
    codeChip: codeChip,
    unitState: unitState,
    schedule: schedule,
    numberOf: numberOf,
    topicsOf: topicsOf,
    lessonDetail: lessonDetail,
    chronology: chronology,
    slotRow: slotRow,
    lessonName: lessonName,
    unitList: unitList,
    unitCard: unitCard,
    lessonsOfSection: lessonsOfSection,
    lessonCount: lessonCount,
    doneCount: doneCount,
    isComplete: isComplete,
    errorLogCard: errorLogCard
  };
})();
