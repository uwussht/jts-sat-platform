/* ==========================================================================
   Rendering the JTS 1500+ programme.

   The data is in js/data/programme*.js; this file turns it into the pieces the
   screens hang on their own pages, so a lesson row looks the same wherever it
   appears and a topic is worded once:

     JTS.programme.chronology()    the 45 lessons by phase, with the gates
                                   — used by #/roadmap
     JTS.programme.unitList(sec)   the units and their lessons — #/materials
     JTS.programme.unitTable(sec)  the same as a table — #/plan
     JTS.programme.homeworkCard()  what follows every lesson — #/materials
     JTS.programme.errorLogCard()  the error log — used by #/guide
     JTS.programme.lessonDetail(n) one lesson, for a day on the calendar

   Everything that prints a lesson number asks which schedule the student is
   on first: the same 45 lessons are numbered differently at two a week and at
   three, and a number that belongs to the other schedule is worse than no
   number at all.

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
   * How many lessons a week this student is on: whatever they chose in
   * Settings, and failing that whatever their study days say. Anything other
   * than three is run as the two-a-week schedule, which is the one with room
   * in it.
   */
  function perWeek() {
    var s = S.state();
    var av = (s && s.availability) || null;
    var n = av && av.lessonsPerWeek;
    if (!n && av && av.days) n = av.days.length;
    return Number(n) >= 3 ? 3 : 2;
  }

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
      if (opts.skills) {
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
   * course has forty-five steps.
   */
  function chronology(opts) {
    opts = opts || {};
    var pw = opts.perWeek || perWeek();
    var sch = P.scheduleOf(pw);
    var wrap = U.el('div.stack');

    wrap.appendChild(U.el('div.card.card-sm.pg-zero', null, [
      U.el('div.eyebrow', { text: pick(sch.name) }),
      U.el('div', null, [U.el('b', {
        text: t('prog.scheduleShape', { weeks: sch.weeks, lessons: P.lessonsTotal, tests: sch.tests })
      })]),
      U.el('div.small.muted', { text: pick(sch.note) })
    ]));

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
    });

    wrap.appendChild(U.el('div.notice.notice-warn', null, [
      U.el('div.stack-sm', null, [
        U.el('div', null, [U.el('b', { text: t('prog.gatesTitle') })]),
        U.el('div.small', { text: pick(P.gateRule) })
      ])
    ]));
    return wrap;
  }

  /* --------------------------------------------------------------- units */

  /** How far the student has got, as a lesson number. */
  function doneCount() {
    if (!JTS.planner || !JTS.planner.allLessons) return 0;
    return JTS.planner.allLessons().filter(function (l) { return l.status === 'done'; }).length;
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
   * A unit as the materials page shows it: a pressable header with its state
   * and how many lessons are in it, and the lessons themselves inside.
   */
  function unitCard(unit, opts) {
    opts = opts || {};
    var pw = opts.perWeek || perWeek();
    var done = opts.done === undefined ? doneCount() : opts.done;
    var lessons = P.lessonsOfUnit(unit.id).filter(function (l) {
      return P.numberOn(l, pw);
    }).sort(function (a, b) { return P.numberOn(a, pw) - P.numberOn(b, pw); });

    var state = unitState(unit, pw, done);
    var body = U.el('div.mat-unit-body', { hidden: true });
    var caret = U.el('span.mat-caret', { text: '❯', 'aria-hidden': 'true' });

    var head = U.el('button.mat-unit-head', {
      type: 'button', 'aria-expanded': 'false',
      onclick: function () {
        var open = body.hidden;
        body.hidden = !open;
        head.setAttribute('aria-expanded', String(open));
        caret.style.transform = open ? 'rotate(90deg)' : '';
      }
    }, [
      U.el('span.mat-state', { text: state === 'done' ? '✓' : state === 'current' ? '▶' : '', 'aria-hidden': 'true' }),
      U.el('span.mat-unit-text', null, [
        U.el('b', { text: unit.kind === 'unit'
          ? t('prog.unitNo', { n: unit.n, name: pick(unit.name) })
          : pick(unit.name) }),
        U.el('span.small.muted', {
          text: lessons.length === 1 ? t('prog.nLesson') : t('prog.nLessons', { n: lessons.length })
        })
      ]),
      caret
    ]);

    if (unit.lead) body.appendChild(U.el('p.small.muted', { text: pick(unit.lead) }));
    lessons.forEach(function (l) {
      var n = P.numberOn(l, pw);
      var st = stateOfNumber(n, done);
      /* A lesson opens: the explanation and its ten questions are a page, not
         a tooltip. The row is a link so it behaves like one — middle-click,
         copy the address, open in a tab. */
      body.appendChild(U.el('a.mat-lesson.is-' + st, {
        href: '#/materials/lesson?code=' + l.code
      }, [
        U.el('span.mat-n', { text: String(n) }),
        U.el('div.mat-lesson-text', null, [
          U.el('div.pg-name', null, [codeChip(l), U.el('b', { text: lessonName(l) })]),
          U.el('div.small.muted', { text: pick(l.skills) })
        ]),
        U.el('span.mat-go', { text: '❯', 'aria-hidden': 'true' })
      ]));
    });

    return U.el('div.mat-unit.is-' + state, null, [head, body]);
  }

  /** Every unit of one section, in course order. */
  function unitList(section, opts) {
    opts = opts || {};
    var pw = opts.perWeek || perWeek();
    var done = opts.done === undefined ? doneCount() : opts.done;
    var box = U.el('div.mat-units');
    P.unitsOf(section).forEach(function (u) {
      box.appendChild(unitCard(u, { perWeek: pw, done: done }));
    });
    return box;
  }

  /** How many lessons of a section there are, for the heading's badge. */
  function lessonCount(section, pw) {
    pw = pw || perWeek();
    return P.lessons.filter(function (l) {
      return P.sectionOf(l) === section && P.numberOn(l, pw);
    }).length;
  }

  /* --------------------------------------------------------- unit tables */

  /**
   * Every lesson of a section with its code and its number — the answer to
   * "what have we covered and what is still ahead", which is why it lives on
   * the plan and not in the roadmap.
   */
  function unitTable(section) {
    var pw = perWeek();
    var rows = P.lessons.filter(function (l) {
      return P.sectionOf(l) === section && P.numberOn(l, pw);
    }).sort(function (a, b) { return P.numberOn(a, pw) - P.numberOn(b, pw); });

    var table = U.el('table.table.pg-table');
    table.appendChild(U.el('thead', null, [U.el('tr', null, [
      U.el('th', { text: t('prog.col.code') }),
      U.el('th', { text: t('prog.col.topic') }),
      U.el('th', { text: t('prog.col.unit') }),
      U.el('th.num', { text: t('prog.col.lesson') })
    ])]));
    var body = U.el('tbody');
    rows.forEach(function (l) {
      var unit = P.unitById(l.unit);
      body.appendChild(U.el('tr', null, [
        U.el('td', null, [codeChip(l)]),
        U.el('td', { text: lessonName(l) }),
        U.el('td.small.muted', { text: unit ? pick(unit.name) : '' }),
        U.el('td.num', { text: String(P.numberOn(l, pw)) })
      ]));
    });
    table.appendChild(body);
    return U.el('div.table-wrap', null, [table]);
  }

  /* ------------------------------------------------------------ homework */

  function homeworkCard() {
    var list = U.el('div.pg-hw');
    P.homework.forEach(function (h, i) {
      list.appendChild(U.el('div.pg-hw-item', null, [
        U.el('span.pg-hw-n', { text: String(i + 1) }),
        U.el('div', null, [
          U.el('div', null, [
            U.el('b', { text: pick(h.name) }),
            U.el('span.pg-mins', { text: h.mins + ' ' + t('common.minutes') })
          ]),
          U.el('div.small.muted', { text: pick(h.body) })
        ])
      ]));
    });
    var w = P.weekly;
    list.appendChild(U.el('div.pg-hw-item.is-weekly', null, [
      U.el('span.pg-hw-n', { text: '★' }),
      U.el('div', null, [
        U.el('div', null, [
          U.el('b', { text: pick(w.name) }),
          U.el('span.pg-mins', { text: t('prog.everyWeek') })
        ]),
        U.el('div.small.muted', { text: pick(w.body) })
      ])
    ]));
    return U.el('div.card.stack-sm', { id: 'prog-homework' }, [
      U.el('div.eyebrow', { text: t('prog.hwTitle') }),
      U.el('p.small.muted', { text: t('prog.hwLead') }),
      list,
      U.el('p.xsmall.muted', { text: pick(P.homeworkLoad) })
    ]);
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
   * The ten questions of a lesson.
   *
   * They come from JTS's own bank, by the skills the lesson drills — never
   * from Bluebook or any other published test. A lesson with one skill is that
   * skill's ten; a lesson with two is five and five, so both get practised.
   * A hard lesson takes the hardest items the bank holds for those skills, and
   * a review lesson takes what the student's own error log says is due.
   */
  function lessonSet(code, n) {
    n = n || 10;
    var d = drillOf(code);
    if (!d) return [];
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
    return out.slice(0, n);
  }

  /** What the student has already done of that set, for the page to report. */
  function lessonRecord(ids) {
    var s = S.state();
    var attempts = (s && s.attempts) || [];
    var byQ = {};
    attempts.forEach(function (a) {
      if (ids.indexOf(a.questionId) >= 0) byQ[a.questionId] = a;
    });
    var done = Object.keys(byQ).length;
    var right = 0;
    Object.keys(byQ).forEach(function (k) { if (byQ[k].correct) right++; });
    return { done: done, right: right, total: ids.length };
  }

  /* ------------------------------------------- a planned day and its lesson */

  /**
   * Which programme lesson a planned session is.
   *
   * The plan is generated from the student's own dates and the programme is a
   * fixed list of 45; the link between them is simply the order. The third
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
   * Everything the programme sets for one lesson, for the day a student taps:
   * which lesson of the 45 it is, what it covers, and the homework with its
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
      phase ? U.el('span.badge.badge-muted', { text: pick(phase.name) }) : null,
      U.el('span.badge.badge-muted', { text: t('prog.perWeek', { n: pw }) })
    ]));

    var topics = U.el('div.stack-sm');
    slot.lessons.forEach(function (l) {
      topics.appendChild(U.el('div.pg-day-topic', null, [
        codeChip(l),
        U.el('span', null, [
          U.el('b', { text: lessonName(l) }),
          U.el('span.small.muted', { text: ' — ' + pick(l.skills) })
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
    codeChip: codeChip,
    unitState: unitState,
    schedule: schedule,
    numberOf: numberOf,
    lessonDetail: lessonDetail,
    chronology: chronology,
    slotRow: slotRow,
    lessonName: lessonName,
    unitList: unitList,
    unitCard: unitCard,
    unitTable: unitTable,
    lessonCount: lessonCount,
    doneCount: doneCount,
    homeworkCard: homeworkCard,
    errorLogCard: errorLogCard
  };
})();
