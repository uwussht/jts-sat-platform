/* ==========================================================================
   Screen: Practice (#/practice)

   A session builder rather than a menu: pick a section, narrow by skill and
   filter, see honestly how many questions that leaves, and start.

   Everything here runs in study mode (§2), so hints and explanations are
   available throughout.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* Builder state is view state: it lives for as long as the screen does. */
  function blankFilters() {
    return { section: 'rw', skillIds: [], difficulty: [], status: [], marked: false, source: 'all' };
  }
  var filters = blankFilters();

  var MODES = [
    { id: 'rwModule',   section: 'rw',   count: 27, minutes: 32 },
    { id: 'mathModule', section: 'math', count: 22, minutes: 35 },
    { id: 'topic',      section: null,   count: null, minutes: 0 },
    { id: 'weak',       section: null,   count: null, minutes: 0 },
    { id: 'custom',     section: null,   count: null, minutes: 0 }
  ];
  var chosenMode = 'topic';
  /* How many questions a set has. ALL (the default) is every question the
     chosen topics and filters allow. */
  var ALL = 0;
  var chosenCount = ALL;

  /* ------------------------------------------------------------- selection */

  /** The filters other than section and topic, as bank query fields. */
  function filterQuery(extra) {
    var f = {
      difficulty: filters.difficulty.length ? filters.difficulty : null,
      status: filters.status.length ? filters.status : null,
      marked: filters.marked || null,
      licenseStatus: filters.source
    };
    Object.keys(extra || {}).forEach(function (k) { f[k] = extra[k]; });
    return f;
  }

  function pool() {
    return JTS.bank.query({
      section: filters.section,
      skillIds: filters.skillIds,
      difficulty: filters.difficulty.length ? filters.difficulty : null,
      status: filters.status.length ? filters.status : null,
      marked: filters.marked || null,
      licenseStatus: filters.source
    });
  }

  function answeredIn(list) {
    var s = S.state();
    var answered = {};
    (s ? s.attempts : []).forEach(function (a) { answered[a.questionId] = true; });
    return list.filter(function (q) { return answered[q.id]; }).length;
  }

  function timeSpentIn(list) {
    var s = S.state(); if (!s) return 0;
    var ids = {};
    list.forEach(function (q) { ids[q.id] = true; });
    return U.sum(s.attempts.filter(function (a) { return ids[a.questionId]; })
      .map(function (a) { return a.timeMs || 0; }));
  }

  /* ---------------------------------------------------------------- pieces */

  function sectionTabs(rerender) {
    var wrap = U.el('div.tabs', { role: 'tablist' });
    [['rw', t('common.rw')], ['math', t('common.math')]].forEach(function (s) {
      wrap.appendChild(U.el('button', {
        type: 'button', role: 'tab', text: s[1],
        'aria-selected': String(filters.section === s[0]),
        onclick: function () {
          if (filters.section === s[0]) return;
          filters.section = s[0];
          filters.skillIds = [];
          chosenMode = s[0] === 'rw' ? 'rwModule' : 'mathModule';
          rerender();
        }
      }));
    });
    return wrap;
  }

  function modeCards(rerender) {
    var grid = U.el('div.grid.grid-3', { id: 'practice-modes' });
    MODES.filter(function (m) { return !m.section || m.section === filters.section; })
      .forEach(function (m) {
        var on = chosenMode === m.id;
        grid.appendChild(U.el('button.check-card', {
          type: 'button', 'aria-pressed': String(on),
          style: 'text-align:left;cursor:pointer' +
                 (on ? ';border-color:var(--brand-600);background:var(--brand-050)' : ''),
          onclick: function () {
            chosenMode = m.id;
            if (m.id === 'weak') { JTS.router.go('#/practice/weak'); return; }
            rerender();
          }
        }, [
          U.el('b', { text: t('practice.mode.' + m.id), style: 'display:block' }),
          U.el('span.small.muted', { text: t('practice.mode.' + m.id + 'Desc') })
        ]));
      });
    return grid;
  }

  /* Which domains are open. Ticking a skill re-renders the screen, and a
     group that snapped shut every time a box was ticked made choosing two
     skills from one domain a matter of opening it twice. */
  var openDomains = {};

  function skillAccordion(rerender) {
    var wrap = U.el('div.stack-sm.sk-groups');
    /* The counts follow the filters, so picking a difficulty shows at once
       how many questions of each topic are left to practise. */
    var counts = {};
    JTS.bank.query(filterQuery()).forEach(function (q) {
      counts[q.skillId] = (counts[q.skillId] || 0) + 1;
    });

    JTS.skills.domains(filters.section).forEach(function (domain) {
      var skills = JTS.skills.bySection(filters.section)
        .filter(function (s) { return s.domain === domain.id; });
      var picked = skills.filter(function (s) { return filters.skillIds.indexOf(s.id) >= 0; }).length;
      var isOpen = !!openDomains[domain.id];

      var body = U.el('div.acc-body.sk-list', { hidden: !isOpen });
      var caret = U.el('span.caret', { text: '❯' });
      var acc = U.el('div.acc.sk-group' + (isOpen ? '.open' : ''));
      var head = U.el('button.acc-head', {
        type: 'button', 'aria-expanded': String(isOpen),
        onclick: function () {
          var open = body.hidden;
          openDomains[domain.id] = open;
          body.hidden = !open;
          acc.classList.toggle('open', open);
          head.setAttribute('aria-expanded', String(open));
        }
      }, [
        caret,
        U.el('b', { text: JTS.i18n.pickName(domain) }),
        U.el('span.spacer'),
        picked ? U.el('span.badge', { text: picked + ' ' + t('common.selected') }) : null,
        U.el('span.badge.badge-muted', {
          text: t('practice.inBank', { n: U.sum(skills.map(function (s) { return counts[s.id] || 0; })) })
        })
      ]);

      skills.forEach(function (skill) {
        var m = JTS.mastery.compute(skill.id);
        var n = counts[skill.id] || 0;
        var on = filters.skillIds.indexOf(skill.id) >= 0;
        var cb = U.el('input.sk-check', {
          type: 'checkbox', checked: on || null,
          'aria-label': JTS.i18n.pickName(skill)
        });
        cb.addEventListener('change', function () {
          var i = filters.skillIds.indexOf(skill.id);
          if (cb.checked && i < 0) filters.skillIds.push(skill.id);
          if (!cb.checked && i >= 0) filters.skillIds.splice(i, 1);
          rerender();
        });

        var status = m.status || 'no-data';
        /* A topic with too few answers to judge shows just its name. */
        var meta = status === 'no-data'
          ? null
          : t('mastery.' + status) + ' · ' + Math.round((m.accuracy || 0) * 100) + '%';

        /* The whole row is the checkbox's label, so the row is what you
           press; the start button inside it does its own thing. */
        body.appendChild(U.el('label.sk-row' + (on ? '.is-on' : ''), null, [
          cb,
          U.el('span.sk-box', { 'aria-hidden': 'true' }),
          U.el('span.sk-text', null, [
            U.el('span.sk-name', { text: JTS.i18n.pickName(skill) }),
            meta ? U.el('span.sk-meta', null, [
              U.el('span.sk-dot.st-' + status, { 'aria-hidden': 'true' }),
              U.el('span', { text: meta })
            ]) : null
          ]),
          U.el('span.sk-count', { text: t('practice.inBank', { n: n }) }),
          U.el('button.btn.btn-sm.sk-go', {
            type: 'button', text: '▶', title: t('practice.startSession'),
            'aria-label': t('practice.startSession') + ': ' + JTS.i18n.pickName(skill),
            onclick: function (e) { e.preventDefault(); e.stopPropagation(); startTopic([skill.id], chosenCount); }
          })
        ]));
      });

      acc.appendChild(head);
      acc.appendChild(body);
      wrap.appendChild(acc);
    });
    return wrap;
  }

  function filterBar(rerender) {
    var row = U.el('div.stack');

    function chipRow(label, values, isOn, toggle) {
      var group = U.el('div.row.row-wrap', { role: 'group', 'aria-label': label });
      values.forEach(function (v) {
        group.appendChild(U.el('button.chip', {
          type: 'button', text: v.label, 'aria-pressed': String(isOn(v.value)),
          /* A bare "1" tells a screen reader nothing, and it is ambiguous with
             the session-length chips too. */
          'aria-label': label + ': ' + v.label,
          dataset: { filter: String(v.value) },
          onclick: function () { toggle(v.value); rerender(); }
        }));
      });
      return U.el('div.stack-sm', null, [U.el('div.label', { text: label }), group]);
    }

    row.appendChild(chipRow(t('common.difficulty'),
      [{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }],
      function (v) { return filters.difficulty.indexOf(v) >= 0; },
      function (v) {
        var i = filters.difficulty.indexOf(v);
        if (i >= 0) filters.difficulty.splice(i, 1); else filters.difficulty.push(v);
      }));

    row.appendChild(chipRow(t('practice.answeredStatus'),
      [{ value: 'correct', label: t('common.correct') },
       { value: 'incorrect', label: t('common.incorrect') },
       { value: 'unanswered', label: t('common.unanswered') }],
      function (v) { return filters.status.indexOf(v) >= 0; },
      function (v) {
        var i = filters.status.indexOf(v);
        if (i >= 0) filters.status.splice(i, 1); else filters.status.push(v);
      }));

    row.appendChild(chipRow(t('practice.sourceFilter'),
      [{ value: 'all', label: t('practice.src.all') },
       { value: 'original', label: t('practice.src.original') },
       { value: 'licensed', label: t('practice.src.licensed') }],
      function (v) { return filters.source === v; },
      function (v) { filters.source = v; }));

    row.appendChild(U.el('div.row.row-wrap', null, [
      U.el('button.chip', {
        type: 'button', text: t('practice.marked'), 'aria-pressed': String(filters.marked),
        onclick: function () { filters.marked = !filters.marked; rerender(); }
      }),
      U.el('button.btn.btn-sm.btn-ghost', {
        type: 'button', text: t('practice.resetFilters'),
        onclick: function () {
          var section = filters.section;
          filters = blankFilters();
          filters.section = section;
          rerender();
        }
      })
    ]));

    return row;
  }

  /* ----------------------------------------------------------- starting up */

  function startSet(ids, opts) {
    opts = opts || {};
    if (!ids.length) { ui.toast(t('practice.noQuestions'), 'err'); return null; }
    return JTS.session.start({
      kind: opts.kind || 'practice',
      mode: 'study',
      title: opts.title || t('practice.title'),
      questionIds: ids,
      durationMs: opts.minutes ? opts.minutes * 60000 : 0,
      softTimer: !opts.minutes,
      returnHash: '#/practice', finishHash: '#/practice',
      meta: opts.meta || {}
    });
  }

  function startTopic(skillIds, n) {
    if (!n) {
      /* Every question of these topics that the filters allow: the ones not
         seen yet first, then the rest, each group shuffled. */
      var seen = (S.state().seenQuestionIds) || [];
      var all = JTS.bank.query(filterQuery({ skillIds: skillIds }));
      var seed = Date.now() % 9973;
      var fresh = U.shuffle(all.filter(function (q) { return seen.indexOf(q.id) < 0; }), seed);
      var old = U.shuffle(all.filter(function (q) { return seen.indexOf(q.id) >= 0; }), seed);
      startSet(fresh.concat(old).map(function (q) { return q.id; }),
        { title: skillIds.map(function (id) { return JTS.skills.name(id); }).join(' · ') });
      return;
    }
    /* A fixed size: shared out over the topics, each drawn from what the
       filters allow, unseen questions first. */
    var ids = [];
    var seenIds = (S.state().seenQuestionIds) || [];
    var per = Math.max(1, Math.ceil(n / Math.max(1, skillIds.length)));
    var seedN = Date.now() % 9973;
    skillIds.forEach(function (skillId) {
      var avail = JTS.bank.query(filterQuery({ skillIds: [skillId] }));
      var fresh = U.shuffle(avail.filter(function (q) { return seenIds.indexOf(q.id) < 0; }), seedN);
      var old = U.shuffle(avail.filter(function (q) { return seenIds.indexOf(q.id) >= 0; }), seedN);
      fresh.concat(old).slice(0, per).forEach(function (q) {
        if (ids.length < n && ids.indexOf(q.id) < 0) ids.push(q.id);
      });
    });
    startSet(ids, { title: skillIds.map(function (id) { return JTS.skills.name(id); }).join(' · ') });
  }

  function startChosen() {
    var mode = MODES.filter(function (m) { return m.id === chosenMode; })[0];
    var list = pool();

    if (mode.count) {
      /* A module is a length and a clock, drawn from the whole section. */
      var seen = (S.state().seenQuestionIds) || [];
      var fresh = list.filter(function (q) { return seen.indexOf(q.id) < 0; });
      var source = fresh.length >= mode.count ? fresh : list;
      var ids = U.shuffle(source, Date.now() % 9973).slice(0, mode.count).map(function (q) { return q.id; });
      if (ids.length < mode.count) {
        ui.toast(t('mock.notEnoughQuestions', { have: ids.length, need: mode.count }), 'err', 4000);
      }
      startSet(ids, { title: t('practice.mode.' + mode.id), minutes: mode.minutes, kind: 'module' });
      return;
    }

    if (chosenMode === 'topic') {
      if (!filters.skillIds.length) { ui.toast(t('practice.pickSkills'), 'err'); return; }
      startTopic(filters.skillIds, chosenCount);
      return;
    }

    /* Custom: whatever the filters leave, shuffled, capped at the chosen size. */
    var shuffled = U.shuffle(list, Date.now() % 9973);
    var custom = (chosenCount ? shuffled.slice(0, chosenCount) : shuffled).map(function (q) { return q.id; });
    startSet(custom, { title: t('practice.mode.custom') });
  }

  /* ----------------------------------------------------------------- screen */

  JTS.router.register('#/practice', {
    title: 'nav.practice',
    render: function (root) {
      if (!S.state()) { JTS.router.go('#/auth'); return; }
      var screen = U.el('div.container.screen.stack');
      root.appendChild(screen);
      function rerender() { JTS.router.render(); }

      JTS.shell.topbarActions([
        U.el('a.btn.btn-sm', { href: '#/vocab', text: t('practice.vocab') }),
        U.el('a.btn.btn-sm', { href: '#/desmos-guide', text: t('practice.desmosGuide') })
      ]);

      /* A set left with "Back to practice" is still open: pick it up where
         it was, or close it to start another. */
      var open = JTS.session.current();
      if (open && open.mode === 'study' && !(open.meta && open.meta.lessonCode)) {
        screen.appendChild(U.el('div.card.row-between.row-wrap.practice-resume', null, [
          U.el('div.stack-sm', null, [
            U.el('div.eyebrow', { text: t('practice.openSet') }),
            U.el('div.h3', { text: open.title || t('practice.title') })
          ]),
          U.el('div.row.row-wrap', null, [
            U.el('button.btn', {
              type: 'button', text: t('practice.closeSet'),
              onclick: function () {
                ui.confirm({ title: t('q.finish'), message: t('q.exitConfirm'),
                  okText: t('common.finish'), cancelText: t('common.cancel') })
                  .then(function (yes) { if (yes) JTS.session.finish(); });
              }
            }),
            U.el('a.btn.btn-primary', {
              href: '#/question',
              text: t('lesson.continue', { n: open.index + 1, total: open.questionIds.length }) + ' →'
            })
          ])
        ]));
      }

      var card = U.el('div.card.stack');
      card.appendChild(U.el('h2.h2', { text: t('practice.create') }));
      card.appendChild(sectionTabs(rerender));
      card.appendChild(U.el('div.stack-sm', null, [
        U.el('div.label', { text: t('practice.mode') }),
        modeCards(rerender)
      ]));

      /* Length only matters for the modes that do not define their own. */
      var mode = MODES.filter(function (m) { return m.id === chosenMode; })[0];
      if (!mode.count) {
        var lenRow = U.el('div.row.row-wrap');
        [ALL, 5, 10, 20].forEach(function (n) {
          var label = n ? String(n) : t('practice.countAll');
          lenRow.appendChild(U.el('button.chip', {
            type: 'button', text: label, 'aria-pressed': String(chosenCount === n),
            'aria-label': t('practice.count') + ': ' + label,
            dataset: { length: String(n) },
            onclick: function () { chosenCount = n; rerender(); }
          }));
        });
        card.appendChild(U.el('div.stack-sm', null, [
          U.el('div.label', { text: t('practice.count') }), lenRow
        ]));
      }

      card.appendChild(U.el('h3.h3', { text: t('practice.browse') }));
      card.appendChild(skillAccordion(rerender));

      card.appendChild(U.el('h3.h3', { text: t('practice.filters') }));
      card.appendChild(filterBar(rerender));

      var list = pool();
      card.appendChild(U.el('div.divider'));
      card.appendChild(U.el('div.row-between.row-wrap', null, [
        U.el('div.stack-sm', null, [
          U.el('b', { text: t('practice.counter', { answered: answeredIn(list), total: list.length }) }),
          U.el('span.small.muted', {
            text: t('practice.totalTime', { time: U.fmtLongTime(timeSpentIn(list)) })
          })
        ]),
        U.el('button.btn.btn-primary.btn-lg', {
          type: 'button', text: t('practice.startSession'),
          disabled: list.length === 0 || null,
          onclick: startChosen
        })
      ]));

      screen.appendChild(card);
    }
  });

  /* ------------------------------------------------------------ weak skills */

  JTS.router.register('#/practice/weak', {
    title: 'practice.weakTitle',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.stack');
      root.appendChild(screen);

      JTS.shell.topbarActions(
        U.el('a.btn.btn-sm', { href: '#/practice', text: t('common.back') }));
      screen.appendChild(U.el('div.notice', { text: t('practice.weakLead') }));

      var ranked = JTS.mastery.ranked({ daysToExam: JTS.analytics.daysToExam() });
      var listCard = U.el('div.card.stack-sm');

      ranked.slice(0, 12).forEach(function (r) {
        var skill = JTS.skills.get(r.skillId);
        var m = r.mastery;
        var enough = m.independent >= JTS.config.mastery.minIndependentAttempts;

        var meta = enough
          ? t('mastery.' + m.status) + ' · ' +
            Math.round((m.accuracy || 0) * 100) + '% · ' +
            m.independent + ' ' + t('common.attempts')
          : '';

        var helped = m.helped
          ? t('mastery.helpedLine', { correct: m.helpedCorrect, total: m.helped })
          : '';

        listCard.appendChild(U.el('div.skill-row', null, [
          U.el('span.m-dot.m-' + m.status.replace('no-data', 'nodata')),
          U.el('span.name', null, [
            U.el('div', { text: JTS.i18n.pickName(skill) }),
            meta || helped
              ? U.el('div.xsmall.muted', { text: [meta, helped].filter(Boolean).join(' · ') })
              : null
          ]),
          U.el('span.badge.badge-muted', {
            text: Math.round(skill.examWeight * 1000) / 10 + '%',
            title: t('common.section') + ' weight'
          }),
          /* Without enough independent attempts the honest offer is a short
             measurement, not a recommendation dressed up as one. */
          U.el('button.btn.btn-sm' + (enough ? '.btn-primary' : ''), {
            type: 'button',
            text: enough ? t('practice.startSession') : t('practice.quickDiag'),
            onclick: function () { startTopic([r.skillId], enough ? 10 : 5); }
          })
        ]));
      });

      screen.appendChild(listCard);

      var top = ranked[0];
      if (top) {
        screen.appendChild(U.el('div.card.card-accent.stack-sm', null, [
          U.el('div.eyebrow', { text: t('practice.mode.weak') }),
          U.el('div.h2', { text: JTS.skills.name(top.skillId) }),
          U.el('p.small.muted', { text: t('practice.weakLead') }),
          U.el('button.btn.btn-primary', {
            type: 'button', text: t('practice.startSession'),
            onclick: function () {
              var ids = ranked.slice(0, 4).reduce(function (acc, r) {
                JTS.bank.pickForSkill(r.skillId, 5, { exclude: acc }).forEach(function (q) {
                  if (acc.indexOf(q.id) < 0) acc.push(q.id);
                });
                return acc;
              }, []);
              startSet(ids.slice(0, 20), { title: t('practice.mode.weak') });
            }
          })
        ]));
      }
    }
  });

  JTS.practice = { startTopic: startTopic, startSet: startSet, pool: pool, _filters: function () { return filters; } };
})();
