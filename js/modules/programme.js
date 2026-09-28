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
            U.el('span.pg-mins', { text: h.mins + ' ' + t('common.min') })
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

  JTS.programme = {
    chronology: chronology,
    lessonRow: lessonRow,
    lessonName: lessonName,
    homeworkCard: homeworkCard,
    topicTable: topicTable,
    errorLogCard: errorLogCard
  };
})();
