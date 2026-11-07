/* ==========================================================================
   Screen: Today (#/today)

   The one screen a student opens every day, laid out like the IELTS
   platform's dashboard: the goal hero (how long is left; Start, Now and Goal
   on one scale), today's work beside the growth zone, the week's test. Everything else has a screen of its own — the next
   session is on the plan, the road at #/roadmap,
   the review queue in practice — and repeating them here made the screen
   opened every morning the longest in the product.

   The clock runs: days, hours, minutes and seconds to the morning of the
   exam. A countdown that only counts days is a number you can ignore for
   twenty-three hours, and this one is the reason the rest of the product
   exists.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;
  var DAY = 86400000;

  /* --------------------------------------------------------- your targets */

  /**
   * The goal the student set, and the last score anyone actually measured —
   * a mock they finished or a real result they entered. Never a projection of
   * the exam: this platform does not print a predicted score, and a number
   * with no test behind it is exactly that.
   */
  function latestMeasure(state) {
    var best = null;
    function offer(at, total, label) {
      if (!total || !at) return;
      if (!best || at > best.at) best = { at: at, total: total, label: label };
    }
    (JTS.mock ? JTS.mock.finished() : []).forEach(function (r) {
      var est = JTS.mock.totalEstimate(r);
      if (est) offer(r.finishedAt, Math.round((est.low + est.high) / 2), t('nav.mocks'));
    });
    (JTS.mock ? JTS.mock.reports() : []).forEach(function (r) {
      offer(U.parseISO(r.date).getTime(), r.total, t('today.targets.entered'));
    });
    var b = state.baseline;
    if (b && b.total) offer(U.parseISO(b.date).getTime(), b.total, b.source || t('today.targets.entered'));
    return best;
  }

  /** The first score measured: where the student started. */
  function firstMeasure(state) {
    var first = null;
    function offer(at, total) {
      if (!total || !at) return;
      if (!first || at < first.at) first = { at: at, total: total };
    }
    (JTS.mock ? JTS.mock.finished() : []).forEach(function (r) {
      var est = JTS.mock.totalEstimate(r);
      if (est) offer(r.finishedAt, Math.round((est.low + est.high) / 2));
    });
    (JTS.mock ? JTS.mock.reports() : []).forEach(function (r) { offer(U.parseISO(r.date).getTime(), r.total); });
    var b = state.baseline;
    if (b && b.total) offer(U.parseISO(b.date).getTime(), b.total);
    return first;
  }

  /* ------------------------------------------------------- the goal hero */

  /**
   * As on the IELTS platform: one line that says where the student stands,
   * how long is left, then Start, Now and Goal on one scale. Start is the
   * first measured score, Now the latest, Goal the one they set — every
   * number has a test behind it; nothing is predicted.
   */
  function goalHero(state) {
    var goal = state.goals && state.goals.total;
    var cur = latestMeasure(state);
    var base = firstMeasure(state);
    var lang = S.settings().uiLang;
    var dated = state.examDate && state.examDate.mode === 'date' && state.examDate.testDate;
    var days = dated ? Math.round((U.parseISO(state.examDate.testDate) - U.today()) / DAY) : null;
    var reached = !!(cur && goal && cur.total >= goal);

    var say = !cur ? t('today.goal.say.noScore')
      : !goal ? t('today.goal.say.noGoal')
      : reached ? t('today.goal.say.reached')
      : t('today.goal.say.gap', { n: goal - cur.total });

    var title, when;
    if (!dated) {
      title = t('today.goal.noDate');
      when = U.el('a.btn.btn-sm.hero-btn', { href: '#/settings', text: '📅 ' + t('today.setDate') });
    } else {
      title = days > 0 ? t('today.goal.days', { n: days })
        : days === 0 ? t('today.goal.today') : t('today.goal.passed');
      when = U.el('div.row.row-wrap', null, [
        U.el('span.small.gh-muted', { text: U.fmtDate(U.parseISO(state.examDate.testDate), lang) }),
        U.el('a.gh-edit', { href: '#/settings', text: '✎ ' + t('today.changeDate') })
      ]);
    }

    /* The scale runs from the start (or the SAT floor, 400) to the goal (or
       the ceiling, 1600), with a tick every 100. */
    var lo = base ? Math.floor(base.total / 100) * 100 : 400;
    var hi = goal ? Math.max(goal, lo + 100) : 1600;
    if (cur && cur.total > hi) hi = Math.ceil(cur.total / 100) * 100;
    var span = (hi - lo) || 1;
    var pct = cur ? U.clamp((cur.total - lo) / span * 100, 0, 100) : 0;
    var track = U.el('div.gscale-track', { 'aria-hidden': 'true' }, [
      U.el('div.gscale-bar', null, [U.el('i', { style: 'width:' + pct + '%' })])
    ]);
    var step = span > 800 ? 200 : 100;
    for (var v = lo; v <= hi; v += step) {
      var edge = v === lo || v + step > hi;
      var tick = U.el('span.gscale-tick', { style: 'left:' + ((v - lo) / span * 100) + '%' });
      if (edge || span <= 600) tick.appendChild(U.el('small', { text: String(v) }));
      track.appendChild(tick);
    }
    if (hi % step) {
      var last = U.el('span.gscale-tick', { style: 'left:100%' }, [U.el('small', { text: String(hi) })]);
      track.appendChild(last);
    }
    if (cur) track.appendChild(U.el('span.gscale-knob', { style: 'left:' + pct + '%' }));

    var gained = cur && base && cur.at !== base.at ? cur.total - base.total : 0;
    function stat(cls, label, value, hint) {
      return U.el('li.gstat' + cls, null, [
        U.el('small', { text: label }),
        U.el('b', { text: value }),
        hint ? U.el('span.gstat-hint', { text: hint }) : null
      ]);
    }

    return U.el('section.card.card-hero.goal-hero', { id: 'today-hero', 'aria-label': t('today.targets.title') }, [
      U.el('p.gh-say', { text: say }),
      U.el('div.stack-sm', null, [U.el('h2.gh-title', { text: title }), when]),
      U.el('div.gscale' + (cur ? '' : '.is-empty') + (reached ? '.is-reached' : ''), null, [
        U.el('ol.gscale-stats', null, [
          stat('', t('today.goal.start'), base ? String(base.total) : '—', null),
          stat('.gstat-now', cur ? t('today.goal.now') : t('today.goal.noScore'), cur ? String(cur.total) : '—',
            gained > 0 ? t('today.goal.gained', { n: gained }) : (cur ? U.fmtDate(new Date(cur.at), lang) : null)),
          stat('.gstat-goal', t('today.targets.target'), goal ? String(goal) : '—',
            goal && cur ? (reached ? t('today.targets.reached') : t('today.goal.left', { n: goal - cur.total })) : null)
        ]),
        track
      ]),
      U.el('div', null, [
        cur ? U.el('a.gh-link', { href: '#/mocks', text: t('today.goal.more') + ' →' })
            : U.el('a.gh-link', { href: '#/mocks', text: t('today.goal.takeMock') + ' →' }),
        !goal ? U.el('a.gh-link', { href: '#/settings', style: 'margin-left:16px', text: t('today.goal.setGoal') + ' →' }) : null
      ])
    ]);
  }

  /* ------------------------------------------------------- growth zone */

  /** The topic with the lowest accuracy over at least five answers. */
  function growthZone(state) {
    var tl = JTS.practiceStats && JTS.practiceStats.tallyAttempts
      ? JTS.practiceStats.tallyAttempts((state && state.attempts) || []) : null;
    var weak = null;
    if (tl) Object.keys(tl.skills).forEach(function (id) {
      var b = tl.skills[id];
      if (b.answered < 5) return;
      var acc = b.correct / b.answered;
      if (!weak || acc < weak.acc) weak = { id: id, acc: acc, b: b };
    });
    var body;
    if (weak) {
      var sec = /^m\./.test(weak.id) ? 'Math' : 'Reading and Writing';
      body = [
        U.el('div.row.gz-row', null, [
          U.el('span.gz-plate', { text: sec === 'Math' ? '∑' : 'Aa', 'aria-hidden': 'true' }),
          U.el('div.grow', null, [
            U.el('h2.gz-title', { text: JTS.skills.name(weak.id) }),
            U.el('p.small.muted', { text: t('today.growth.text', {
              section: sec, correct: weak.b.correct, total: weak.b.answered }) })
          ])
        ]),
        U.el('div', null, [U.el('a.btn', { href: '#/practice?skills=' + weak.id, text: t('today.growth.train') + ' →' })])
      ];
    } else {
      body = [
        U.el('h2.gz-title', { text: t('today.growth.noneTitle') }),
        U.el('p.small.muted', { text: t('today.growth.noneText') }),
        U.el('div', null, [U.el('a.btn', { href: '#/practice', text: t('today.growth.toPractice') + ' →' })])
      ];
    }
    return U.el('section.card.card-accent.stack', { id: 'today-growth' },
      [U.el('div.eyebrow', { text: t('today.growth.title') })].concat(body));
  }

  JTS.router.register('#/today', {
    title: 'nav.today',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.stack');
      root.appendChild(screen);


      /* An unfinished session outranks everything else on the page. */
      var active = JTS.session.current();
      if (active) {
        screen.appendChild(U.el('div.notice.notice-warn.row-between', null, [
          U.el('span', { text: t('today.resumeSession') + ': ' + (active.title || '') }),
          U.el('div.row', null, [
            U.el('button.btn.btn-sm', {
              type: 'button', text: t('common.discard'),
              onclick: function () { JTS.session.abandon(); JTS.router.render(); }
            }),
            U.el('button.btn.btn-sm.btn-primary', {
              type: 'button', text: t('common.resume'),
              onclick: function () { JTS.router.go('#/question'); }
            })
          ])
        ]));
      }

      /* The layout of the IELTS platform's dashboard: the goal hero across
         the top, then today's work beside the growth zone, then the week's
         control test across the full width. */
      screen.appendChild(goalHero(state));
      var accessStrip = JTS.courseUI && JTS.courseUI.accessBanner();
      if (accessStrip) screen.appendChild(accessStrip);

      /* The course: whether it fits before the exam, where the student is on
         it (the same phase strip as #/plan), the next lesson with the
         teacher, and what to do on their own today. */
      var plan = JTS.course ? JTS.course.plan() : null;
      var main = U.el('div.stack');
      if (plan) {
        var fit = JTS.courseUI.fitBanner(plan);
        if (fit) screen.appendChild(fit);
        screen.appendChild(JTS.courseUI.phaseStrip(plan, { id: 'today-phases', link: '#/plan' }));
        var teacher = JTS.todayTasks.teacherLine(plan);
        if (teacher) main.appendChild(teacher);
        main.appendChild(JTS.todayTasks.card(plan));
      }
      screen.appendChild(U.el('div.dash-split', null, [
        main, U.el('aside.stack', null, [growthZone(state)])
      ]));

      /* Three things and no more: the clock, the test that measures the week,
         and the two numbers a student is steering by. What used to be stacked
         under them — the next session, the daily check, the roadmap reminder,
         the review queue and the next checkpoint — each has a screen of its
         own, and repeating them here made the one screen opened every morning
         the longest in the product. */
      /* The fifteen-question weekly test. The full mock has its own page
         (Mock tests) and is no longer repeated here. */
      /* Laid out as a dashboard: this week's test with the targets beside
         it, then the progress measures (js/modules/progress.js): four
         numbers, the skill map, accuracy, time, the last 90 days and badges. */
      var wt = JTS.weeklyTest ? JTS.weeklyTest.card() : null;
      if (wt) screen.appendChild(wt);
      if (JTS.progress) screen.appendChild(JTS.progress.dashboard());
    }
  });
})();
