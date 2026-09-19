/* ==========================================================================
   Screen: Roadmap (#/roadmap)

   The six phases of preparation as one journey, from the diagnostic to the
   exam. Two jobs, one module:

   - signed in, it is a map of THIS student's plan: which weeks each phase
     covers, which are behind them, where they are now, how much is done;
   - signed out, JTS.roadmap.overview() renders the same six phases with no
     personal data, which is what the sign-in screen shows a visitor.

   Phase boundaries are not invented here. They come from
   JTS.planner.phaseForWeek, so this screen and the plan can never disagree
   about which week belongs to which phase.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /** Week ranges per phase, derived from the planner rather than restated. */
  function phaseSpans(totalWeeks) {
    var spans = {};
    for (var w = 0; w < totalWeeks; w++) {
      var id = JTS.planner.phaseForWeek(w, totalWeeks);
      if (!spans[id]) spans[id] = { from: w, to: w };
      else spans[id].to = w;
    }
    return spans;
  }

  /** Lessons done / total inside a phase's week range. */
  function phaseProgress(plan, span) {
    if (!plan || !span) return null;
    var done = 0, total = 0;
    plan.weeks.slice(span.from, span.to + 1).forEach(function (wk) {
      wk.lessons.forEach(function (l) {
        total++;
        if (l.status === 'done') done++;
      });
    });
    return { done: done, total: total };
  }

  function phaseCard(phase, opts) {
    opts = opts || {};
    var state = opts.state;
    var cls = opts.status || 'ahead';       /* 'done' | 'current' | 'ahead' */

    var actions = JTS.planner.actionsForPhase(phase.id, true)
      .filter(function (a, i, arr) { return arr.indexOf(a) === i; });

    var head = U.el('div.rm-head', null, [
      U.el('span.rm-dot', { 'aria-hidden': 'true', text: cls === 'done' ? '✓' : String(phase.id) }),
      U.el('div.rm-title', null, [
        U.el('b', { text: t('plan.phase.' + phase.key) }),
        U.el('span.xsmall.muted', {
          text: opts.weeks || t('roadmap.share', { n: Math.round(phase.share * 100) })
        })
      ]),
      cls === 'current' ? U.el('span.badge', { text: t('roadmap.youAreHere') })
        : cls === 'done' ? U.el('span.badge.badge-ok', { text: t('common.done') })
        : null
    ]);

    var body = U.el('div.rm-body.stack-sm', null, [
      U.el('p.small.muted', { text: t('roadmap.desc.' + phase.key) }),
      U.el('div.row.row-wrap', null, actions.map(function (a) {
        return U.el('span.badge.badge-muted', { text: t('plan.action.' + a) });
      }))
    ]);

    if (opts.progress && opts.progress.total) {
      body.appendChild(ui.bar(opts.progress.done, opts.progress.total,
        opts.progress.done === opts.progress.total ? 'bar-ok' : ''));
      body.appendChild(U.el('div.xsmall.muted', {
        text: t('roadmap.lessonsDone', { done: opts.progress.done, total: opts.progress.total })
      }));
    }

    /* Each phase carries the one thing this platform can do for it right now,
       so the roadmap is navigable rather than decorative. */
    if (state && opts.cta) {
      body.appendChild(U.el('a.btn.btn-sm', { href: opts.cta.href, text: opts.cta.label }));
    }

    return U.el('div.rm-step.rm-' + cls, null, [head, body]);
  }

  function ctaFor(phaseId) {
    switch (phaseId) {
      case 1: return { href: '#/diagnostic', label: t('diag.title') };
      case 2: return { href: '#/practice', label: t('nav.practice') };
      case 3: return { href: '#/practice/weak', label: t('practice.weakTitle') };
      case 4: return { href: '#/practice', label: t('practice.mode.rwModule') };
      case 5: return { href: '#/mocks', label: t('nav.mocks') };
      default: return { href: '#/progress', label: t('progress.title') };
    }
  }

  /**
   * The six phases with no personal data. Used by the sign-in screen, where
   * there is no profile to read and nothing to be personal about.
   */
  function overview(compact) {
    var wrap = U.el('div.rm' + (compact ? '.rm-compact' : ''));
    JTS.planner.phases.forEach(function (p) {
      wrap.appendChild(phaseCard(p, { status: 'ahead' }));
    });
    return wrap;
  }

  JTS.roadmap = { overview: overview, phaseSpans: phaseSpans };

  JTS.router.register('#/roadmap', {
    title: 'roadmap.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.stack-lg', { style: 'max-width:820px' });
      root.appendChild(screen);

      var plan = state.plan;
      var current = state.profile.currentPhase || 1;
      var totalWeeks = plan ? plan.weeks.length : JTS.analytics.horizonWeeks();
      var spans = phaseSpans(totalWeeks);
      var days = JTS.analytics.daysToExam();

      screen.appendChild(U.el('p.muted', { text: t('roadmap.lead') }));

      /* Where the exam is, and how much of the road is behind. */
      var doneLessons = plan ? JTS.planner.allLessons().filter(function (l) { return l.status === 'done'; }).length : 0;
      var allLessons = plan ? JTS.planner.allLessons().length : 0;
      screen.appendChild(U.el('div.card.card-hero.stack-sm', null, [
        U.el('div.eyebrow', { text: t('roadmap.title') }),
        U.el('div.row.row-wrap', { style: 'gap:28px' }, [
          U.el('div.stat', null, [
            U.el('div.stat-label', { text: t('plan.phases') }),
            U.el('div.stat-value', { text: current + ' / ' + JTS.planner.phases.length })
          ]),
          U.el('div.stat', null, [
            U.el('div.stat-label', { text: t('today.countdown') }),
            U.el('div.stat-value', { text: days === null ? '—' : String(Math.max(0, days)) })
          ]),
          U.el('div.stat', null, [
            U.el('div.stat-label', { text: t('roadmap.lessons') }),
            U.el('div.stat-value', { text: doneLessons + ' / ' + allLessons })
          ])
        ]),
        allLessons ? ui.bar(doneLessons, allLessons) : null
      ]));

      var list = U.el('div.rm');
      JTS.planner.phases.forEach(function (p) {
        var span = spans[p.id];
        list.appendChild(phaseCard(p, {
          state: state,
          status: p.id < current ? 'done' : p.id === current ? 'current' : 'ahead',
          weeks: span
            ? t('roadmap.weeks', { from: span.from + 1, to: span.to + 1 })
            : t('roadmap.share', { n: Math.round(p.share * 100) }),
          progress: phaseProgress(plan, span),
          cta: ctaFor(p.id)
        }));
      });
      screen.appendChild(list);

      /* The exam itself is the end of the road, so it is drawn on it. */
      var exam = state.examDate && state.examDate.testDate;
      screen.appendChild(U.el('div.rm-finish', null, [
        U.el('span.rm-dot.rm-dot-flag', { 'aria-hidden': 'true', text: '★' }),
        U.el('div.stack-sm', null, [
          /* Both were inline, so .stack-sm's margin could not separate them. */
          U.el('div', null, [U.el('b', { text: t('roadmap.examDay') })]),
          U.el('div.small.muted', {
            text: exam ? U.fmtDate(U.parseISO(exam), S.settings().uiLang) : t('settings.noExamDate')
          })
        ])
      ]));

      screen.appendChild(U.el('div.row.row-wrap', null, [
        U.el('a.btn.btn-primary', { href: '#/plan', text: t('nav.plan') }),
        U.el('a.btn', { href: '#/today', text: t('nav.today') })
      ]));
    }
  });
})();
