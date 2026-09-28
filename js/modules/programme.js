/* ==========================================================================
   Rendering the JTS 1500+ programme.

   The data is in js/data/programme*.js; this file turns it into the pieces the
   three screens hang on their own pages, so a lesson row looks the same
   wherever it appears and a tag is worded once:

     JTS.programme.chronology()   the 48 lessons by stage, with the gates
                                  — used by #/roadmap
     JTS.programme.homeworkCard()  what follows every lesson — used by #/plan
     JTS.programme.topicTable(sec) the tag tables — used by #/plan
     JTS.programme.errorLogCard()  the error log — used by #/guide

   Nothing here writes to the store. The programme is the school's course and
   the same for everyone; a student's own progress lives in the plan.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;
  var P = JTS.data.programme;

  function lang() { return S.settings ? S.settings().uiLang : 'en'; }
  function pick(obj) { return JTS.i18n.pick(obj, lang()); }

  /** "Writing 3", "Math 7", "Hard Reading 2" — the lesson's name. */
  function lessonName(l) {
    if (l.kind === 'diagnostic') return t('prog.kind.diagnostic');
    return t('prog.kind.' + l.kind) + ' ' + l.seq;
  }

  /** The chips for a lesson: its tags, or its one-line focus when it has none. */
  function lessonTopics(l, opts) {
    opts = opts || {};
    var box = U.el('div.pg-topics');
    if (l.tags.length) {
      l.tags.forEach(function (tag) {
        var top = P.topicOf(tag);
        box.appendChild(U.el('span.pg-tag' + (top ? '.lv-' + top.level[top.level.length - 1] : ''), {
          text: tag, title: top ? pick(top.t) : tag
        }));
      });
      if (opts.spell && l.tags.length) {
        box.appendChild(U.el('span.pg-topic-text', {
          text: l.tags.map(function (tag) {
            var top = P.topicOf(tag);
            return top ? pick(top.t) : tag;
          }).join(' · ')
        }));
      }
      return box;
    }
    if (l.focus) box.appendChild(U.el('span.pg-topic-text', { text: pick(l.focus) }));
    else if (l.errorLogDriven) {
      box.appendChild(U.el('span.pg-topic-text.pg-from-log', { text: t('prog.fromErrorLog') }));
    }
    return box;
  }

  function lessonRow(l, opts) {
    var gate = P.gates.filter(function (g) { return g.afterLesson === l.n; })[0];
    var row = U.el('div.pg-lesson' + (gate ? '.is-gate' : ''), null, [
      U.el('span.pg-n', { text: l.kind === 'diagnostic' ? '0' : String(l.n) }),
      U.el('div.pg-body', null, [
        U.el('div.pg-name', null, [
          U.el('b', { text: lessonName(l) }),
          U.el('span.pg-practice', { text: t('prog.practice.' + l.practice) })
        ]),
        lessonTopics(l, opts)
      ])
    ]);
    if (gate) {
      row.appendChild(U.el('div.pg-gate', null, [
        U.el('span.badge.badge-warn', { text: pick(gate.name) })
      ]));
    }
    return row;
  }

  /**
   * The whole course in order: four stages, the lessons inside each, and the
   * gate that closes it. This is the chronology — it answers "what comes
   * after what", which the road cannot because the road has six shapes and the
   * course has forty-eight steps.
   */
  function chronology(opts) {
    opts = opts || {};
    var wrap = U.el('div.stack');
    var diag = P.lessons[0];

    wrap.appendChild(U.el('div.card.card-sm.pg-zero', null, [
      U.el('div.eyebrow', { text: t('prog.lessonZero') }),
      U.el('div', null, [U.el('b', { text: t('prog.kind.diagnostic') })]),
      U.el('div.small.muted', { text: t('prog.lessonZeroNote') })
    ]));

    P.stages.forEach(function (st) {
      var lessons = P.lessonsOfStage(st);
      var head = U.el('div.pg-stage-head', null, [
        U.el('div', null, [
          U.el('div.eyebrow', { text: t('prog.month', { n: st.months }) }),
          U.el('div.h3', { text: pick(st.name) })
        ]),
        U.el('span.badge.badge-muted', {
          text: t('prog.lessonRange', { from: st.from, to: st.to })
        })
      ]);
      var body = U.el('div.pg-lessons');
      lessons.forEach(function (l) { body.appendChild(lessonRow(l, opts)); });

      wrap.appendChild(U.el('div.card.stack-sm', null, [
        head,
        U.el('p.small.muted', { text: pick(st.lead) }),
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
    return U.el('div.card.stack-sm', { id: 'prog-homework' }, [
      U.el('div.eyebrow', { text: t('prog.hwTitle') }),
      U.el('p.small.muted', { text: t('prog.hwLead') }),
      list,
      U.el('p.xsmall.muted', { text: pick(P.homeworkLoad) })
    ]);
  }

  /* -------------------------------------------------------- topic tables */

  /**
   * Every tag of a section, with the lesson it is taught in. This is the
   * answer to "what have we covered and what is still ahead", which is why it
   * lives on the plan and not in the roadmap.
   */
  function topicTable(section) {
    var rows = P.topics.filter(function (x) { return x.section === section; });
    var table = U.el('table.table.pg-table');
    table.appendChild(U.el('thead', null, [U.el('tr', null, [
      U.el('th', { text: t('prog.col.tag') }),
      U.el('th', { text: t('prog.col.topic') }),
      U.el('th', { text: t('prog.col.level') }),
      U.el('th.num', { text: t('prog.col.lesson') })
    ])]));
    var body = U.el('tbody');
    rows.forEach(function (x) {
      body.appendChild(U.el('tr', null, [
        U.el('td', null, [U.el('span.pg-tag.lv-' + x.level[x.level.length - 1], { text: x.tag })]),
        U.el('td', { text: pick(x.t) }),
        U.el('td', null, x.level.map(function (lv) {
          return U.el('span.pg-level.lv-' + lv, { text: t('prog.level.' + lv) });
        })),
        U.el('td.num', { text: String(x.lesson) })
      ]));
    });
    table.appendChild(body);
    return U.el('div.table-wrap', null, [table]);
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
      U.el('p.small.muted', { text: t('prog.logWhy') })
    ]);
  }

  /* ------------------------------------------- a planned day and its lesson */

  /**
   * Which programme lesson a planned session is.
   *
   * The plan is generated from the student's own dates and the programme is a
   * fixed list of 48; the link between them is simply the order. The third
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

  function programmeLesson(n) {
    return P.lessons.filter(function (l) { return l.n === n; })[0] || null;
  }

  /**
   * Everything the programme sets for one lesson, for the day a student taps:
   * which lesson of the 48 it is, the topics it covers, and the four pieces of
   * homework with their numbers filled in. This is what used to sit in a card
   * under the calendar, where it was the same text on every day of the month.
   */
  function lessonDetail(n) {
    var pl = programmeLesson(n);
    if (!pl) return null;
    var box = U.el('div.stack-sm.pg-day');

    box.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge', { text: t('prog.lessonNo', { n: n }) }),
      U.el('span.badge.badge-muted', { text: lessonName(pl) }),
      U.el('span.badge.badge-muted', { text: t('prog.practice.' + pl.practice) })
    ]));

    if (pl.tags.length) {
      var topics = U.el('div.stack-sm');
      pl.tags.forEach(function (tag) {
        var top = P.topicOf(tag);
        topics.appendChild(U.el('div.pg-day-topic', null, [
          U.el('span.pg-tag' + (top ? '.lv-' + top.level[top.level.length - 1] : ''), { text: tag }),
          U.el('span', { text: top ? pick(top.t) : tag })
        ]));
      });
      box.appendChild(U.el('div.stack-sm', null, [
        U.el('div.stat-label', { text: t('prog.topicsToday') }), topics
      ]));
    } else if (pl.focus) {
      box.appendChild(U.el('p.small.muted', { text: pick(pl.focus) }));
    } else if (pl.errorLogDriven) {
      box.appendChild(U.el('p.small.muted', { text: t('prog.fromErrorLog') }));
    }

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

    var gate = P.gates.filter(function (g) { return g.afterLesson === n; })[0];
    if (gate) {
      box.appendChild(U.el('div.notice.notice-warn', { text: pick(gate.name) }));
    }
    return box;
  }

  JTS.programme = {
    numberOf: numberOf,
    lessonDetail: lessonDetail,
    chronology: chronology,
    lessonRow: lessonRow,
    lessonName: lessonName,
    homeworkCard: homeworkCard,
    topicTable: topicTable,
    errorLogCard: errorLogCard
  };
})();
