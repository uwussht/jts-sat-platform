/* ==========================================================================
   Screen: Roadmap (#/roadmap)

   The whole preparation as one road, written for someone who has never sat an
   SAT and does not yet know what "phase 3" is supposed to mean. Every phase
   answers three beginner questions in plain words: what happens here, what you
   will be able to do when it ends, and what to press right now.

   Three jobs, one module:

   - #/roadmap is the full map of THIS student's plan: which weeks each phase
     covers, which are behind them, where they are today, how much is done;
   - JTS.roadmap.reminder() is the compact version the dashboard shows every
     day, so the road is a reminder and not a page you have to remember to open;
   - JTS.roadmap.overview() is the same six phases with no personal data, which
     is what a visitor sees on the sign-in screen.

   Nothing here invents structure. Phase boundaries come from
   JTS.planner.phaseForWeek and the current phase from JTS.planner.currentPhase,
   so this screen and the plan can never disagree.
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

  /** Real calendar dates for a phase, so "week 5" also means something. */
  function spanDates(plan, span) {
    if (!plan || !span || !plan.weeks[span.from]) return null;
    var from = U.parseISO(plan.weeks[span.from].monday);
    var lastWeek = plan.weeks[Math.min(span.to, plan.weeks.length - 1)];
    var to = U.addDays(U.parseISO(lastWeek.monday), 6);
    return t('roadmap.dates', { from: U.fmtDate(from), to: U.fmtDate(to) });
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
   * One step of the road.
   *
   * opts.status  'done' | 'current' | 'ahead'
   * opts.open    whether the detail is unfolded to begin with. Only the phase
   *              a student is actually in opens by itself: six unfolded cards
   *              is a wall of text, which is exactly what a beginner cannot
   *              read.
   */
  function phaseCard(phase, opts) {
    opts = opts || {};
    var cls = opts.status || 'ahead';
    var total = JTS.planner.phases.length;

    var actions = JTS.planner.actionsForPhase(phase.id, true)
      .filter(function (a, i, arr) { return arr.indexOf(a) === i; });

    var body = U.el('div.rm-body.stack-sm');
    var open = opts.open !== false;

    var toggle = U.el('button.rm-more', {
      type: 'button', 'aria-expanded': String(open),
      text: open ? t('roadmap.hideDetails') : t('roadmap.details')
    });
    toggle.addEventListener('click', function () {
      open = !open;
      body.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? t('roadmap.hideDetails') : t('roadmap.details');
    });

    var head = U.el('div.rm-head', null, [
      U.el('span.rm-dot', { 'aria-hidden': 'true', text: cls === 'done' ? '✓' : String(phase.id) }),
      U.el('div.rm-title', null, [
        U.el('span.xsmall.rm-stepno', { text: t('roadmap.step', { n: phase.id, total: total }) }),
        U.el('b', { text: t('plan.phase.' + phase.key) }),
        U.el('span.xsmall.muted', {
          text: opts.weeks || t('roadmap.share', { n: Math.round(phase.share * 100) })
        })
      ]),
      cls === 'current' ? U.el('span.badge', { text: t('roadmap.youAreHere') })
        : cls === 'done' ? U.el('span.badge.badge-ok', { text: t('common.done') })
        : null,
      opts.collapsible === false ? null : toggle
    ]);

    /* One sentence of what this phase is, then the two lines a beginner
       actually needs: what you do all week, and what changes by the end. */
    body.appendChild(U.el('p.small.muted', { text: t('roadmap.desc.' + phase.key) }));
    body.appendChild(U.el('div.rm-fact', null, [
      U.el('span.rm-fact-lab', { text: t('roadmap.whatYouDo') }),
      U.el('span', { text: t('roadmap.you.' + phase.key) })
    ]));
    body.appendChild(U.el('div.rm-fact', null, [
      U.el('span.rm-fact-lab', { text: t('roadmap.byTheEnd') }),
      U.el('span', { text: t('roadmap.goal.' + phase.key) })
    ]));
    body.appendChild(U.el('div.row.row-wrap', null, actions.map(function (a) {
      return U.el('span.badge.badge-muted', { text: t('plan.action.' + a) });
    })));

    if (opts.dates) body.appendChild(U.el('div.xsmall.muted', { text: opts.dates }));

    if (opts.progress && opts.progress.total) {
      body.appendChild(ui.bar(opts.progress.done, opts.progress.total,
        opts.progress.done === opts.progress.total ? 'bar-ok' : ''));
      body.appendChild(U.el('div.xsmall.muted', {
        text: t('roadmap.lessonsDone', { done: opts.progress.done, total: opts.progress.total })
      }));
    }

    /* Each phase carries the one thing this platform can do for it, so the
       roadmap is navigable rather than decorative. The phase a student is in
       gets the loud button; the rest get a quiet link, because starting mock
       exams in week two is not advice worth emphasising. */
    if (opts.cta) {
      body.appendChild(U.el('a.btn.btn-sm' + (cls === 'current' ? '.btn-primary' : ''), {
        href: opts.cta.href, text: opts.cta.label
      }));
    }

    body.hidden = !open;
    return U.el('div.rm-step.rm-' + cls, null, [head, body]);
  }

  /* --------------------------------------------------------------- pieces */

  /** The three moves the whole thing comes down to, for a first-time reader. */
  function howItWorks() {
    return U.el('div.card.stack-sm', null, [
      U.el('div.eyebrow', { text: t('roadmap.howTitle') }),
      U.el('p.small.muted', { text: t('roadmap.howLead') }),
      U.el('div.grid.grid-3', null, ['measure', 'practice', 'simulate'].map(function (k, i) {
        return U.el('div.rm-how', null, [
          U.el('span.rm-how-n', { text: String(i + 1), 'aria-hidden': 'true' }),
          U.el('b', { text: t('roadmap.how.' + k) }),
          U.el('span.small.muted', { text: t('roadmap.how.' + k + 'Desc') })
        ]);
      }))
    ]);
  }

  /** Six squares on a rule: the whole road at a glance, no text. */
  function miniTrack(current) {
    var wrap = U.el('div.rm-mini', { role: 'img',
      'aria-label': t('roadmap.step', { n: current, total: JTS.planner.phases.length }) });
    JTS.planner.phases.forEach(function (p) {
      wrap.appendChild(U.el('span.rm-mini-i' +
        (p.id < current ? '.done' : p.id === current ? '.now' : ''), {
        text: String(p.id), title: t('plan.phase.' + p.key)
      }));
    });
    return wrap;
  }

  /**
   * The dashboard reminder. A student should not have to go looking for the
   * road to remember which part of it they are on, so Today carries this every
   * morning: which step, what it is for, how far in, one way back to the map.
   */
  function reminder() {
    var state = S.state();
    if (!state) return null;
    var current = JTS.planner.currentPhase();
    var phase = JTS.planner.phases.filter(function (p) { return p.id === current; })[0]
      || JTS.planner.phases[0];
    var plan = state.plan;
    var totalWeeks = plan ? plan.weeks.length : JTS.analytics.horizonWeeks();
    var span = phaseSpans(totalWeeks)[phase.id];
    var prog = phaseProgress(plan, span);
    var weekNo = JTS.planner.todayWeekIndex() + 1;

    return U.el('div.card.stack-sm', null, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('roadmap.whereYouAre') }),
        plan ? U.el('span.badge.badge-muted', {
          text: t('roadmap.weekOf', { n: weekNo, total: totalWeeks })
        }) : null
      ]),
      miniTrack(current),
      U.el('div.stack-sm', null, [
        U.el('b', { text: t('roadmap.step', { n: phase.id, total: JTS.planner.phases.length }) +
          ' · ' + t('plan.phase.' + phase.key) }),
        U.el('p.small.muted', { text: t('roadmap.you.' + phase.key) })
      ]),
      prog && prog.total ? ui.bar(prog.done, prog.total) : null,
      prog && prog.total ? U.el('div.xsmall.muted', {
        text: t('roadmap.lessonsDone', { done: prog.done, total: prog.total })
      }) : null,
      U.el('a.btn.btn-sm', { href: '#/roadmap', text: t('roadmap.openRoadmap') })
    ]);
  }

  /**
   * The six phases with no personal data. Used by the sign-in screen, where
   * there is no profile to read and nothing to be personal about.
   */
  function overview(compact) {
    var wrap = U.el('div.rm' + (compact ? '.rm-compact' : ''));
    JTS.planner.phases.forEach(function (p) {
      wrap.appendChild(phaseCard(p, { status: 'ahead', collapsible: false, open: true }));
    });
    return wrap;
  }

  JTS.roadmap = { overview: overview, reminder: reminder, phaseSpans: phaseSpans };

  /* --------------------------------------------------------------- screen */

  JTS.router.register('#/roadmap', {
    title: 'roadmap.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.stack-lg', { style: 'max-width:820px' });
      root.appendChild(screen);

      var plan = state.plan;
      var current = JTS.planner.currentPhase();
      var phase = JTS.planner.phases.filter(function (p) { return p.id === current; })[0]
        || JTS.planner.phases[0];
      var totalWeeks = plan ? plan.weeks.length : JTS.analytics.horizonWeeks();
      var spans = phaseSpans(totalWeeks);
      var days = JTS.analytics.daysToExam();
      var weekNo = JTS.planner.todayWeekIndex() + 1;

      /* Where you are, in the first thing you read — not six cards down. */
      var doneLessons = plan ? JTS.planner.allLessons().filter(function (l) { return l.status === 'done'; }).length : 0;
      var allLessons = plan ? JTS.planner.allLessons().length : 0;
      screen.appendChild(U.el('div.card.card-hero.stack-sm', null, [
        U.el('div.eyebrow', { text: t('roadmap.whereYouAre') }),
        U.el('div.h1', { text: t('roadmap.step', { n: phase.id, total: JTS.planner.phases.length }) +
          ' · ' + t('plan.phase.' + phase.key) }),
        U.el('p', { text: t('roadmap.goal.' + phase.key) }),
        U.el('div.row.row-wrap', { style: 'gap:28px' }, [
          U.el('div.stat', null, [
            U.el('div.stat-label', { text: t('today.countdown') }),
            U.el('div.stat-value', { text: days === null ? '—' : String(Math.max(0, days)) })
          ]),
          plan ? U.el('div.stat', null, [
            U.el('div.stat-label', { text: t('roadmap.weekStat') }),
            U.el('div.stat-value', { text: weekNo + ' / ' + totalWeeks })
          ]) : null,
          U.el('div.stat', null, [
            U.el('div.stat-label', { text: t('roadmap.lessons') }),
            U.el('div.stat-value', { text: doneLessons + ' / ' + allLessons })
          ])
        ]),
        allLessons ? ui.bar(doneLessons, allLessons) : null
      ]));

      screen.appendChild(U.el('p.muted', { text: t('roadmap.lead') }));
      screen.appendChild(howItWorks());

      if (!plan) {
        screen.appendChild(U.el('div.notice.notice-warn.stack-sm', null, [
          U.el('div', null, [
            U.el('div', { text: t('roadmap.noPlan') }),
            U.el('a.btn.btn-sm.btn-primary', { href: '#/diagnostic', text: t('diag.title'),
              style: 'margin-top:10px' })
          ])
        ]));
      }

      var list = U.el('div.rm');
      JTS.planner.phases.forEach(function (p) {
        var span = spans[p.id];
        var status = p.id < current ? 'done' : p.id === current ? 'current' : 'ahead';
        list.appendChild(phaseCard(p, {
          status: status,
          open: status === 'current',
          weeks: !span ? t('roadmap.share', { n: Math.round(p.share * 100) })
            /* "Weeks 1–1" is not a range anyone says out loud. */
            : span.from === span.to ? t('plan.week', { n: span.from + 1 })
            : t('roadmap.weeks', { from: span.from + 1, to: span.to + 1 }),
          dates: spanDates(plan, span),
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
