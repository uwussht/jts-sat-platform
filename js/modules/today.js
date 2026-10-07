/* ==========================================================================
   Screen: Today (#/today)

   The one screen a student opens every day, and it holds three things: how
   long is left, the test that measures this week, and the two numbers they
   are steering by. Everything else has a screen of its own — the next
   session is on the plan, the daily check at #/daily, the road at #/roadmap,
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

  /* ------------------------------------------------------------- the hero */

  /** Digits as separate tiles, the way a flip clock has them. */
  function digitGroup(label, width) {
    var box = U.el('div.cd-group');
    var tiles = U.el('div.cd-tiles');
    for (var i = 0; i < width; i++) tiles.appendChild(U.el('span.cd-tile', { text: '0' }));
    box.appendChild(tiles);
    box.appendChild(U.el('span.cd-lab', { text: label }));
    box.dataset.width = String(width);
    return box;
  }

  function setGroup(box, value) {
    var w = Number(box.dataset.width);
    var str = String(Math.max(0, value));
    while (str.length < w) str = '0' + str;
    var tiles = box.querySelectorAll('.cd-tile');
    for (var i = 0; i < tiles.length; i++) {
      var ch = str.charAt(str.length - tiles.length + i);
      if (tiles[i].textContent !== ch) tiles[i].textContent = ch;
    }
  }

  /**
   * The welcome and the clock. Returns {el, stop} — the interval has to be
   * cleared when the screen goes away, or every visit leaves another one
   * ticking over a card nobody is looking at.
   */
  function heroCard(state) {
    /* A first name if they gave one, otherwise the part of the address before
       the @ — capitalised, because "welcome back, td" reads like a machine. */
    var name = (state.profile.name || state.profile.email || '').split(' ')[0].split('@')[0];
    if (name) name = name.charAt(0).toUpperCase() + name.slice(1);
    var dated = state.examDate && state.examDate.mode === 'date' && state.examDate.testDate;
    var streak = (state.daily && state.daily.streak) || 0;

    var left = U.el('div.hero-left', null, [
      U.el('div.hero-title', { text: t('today.welcome', { name: name }) }),
      U.el('p.hero-lead', { text: t('today.heroLead') }),
      U.el('div.row.row-wrap.hero-actions', null, [
        U.el('a.btn.hero-btn', { href: '#/materials', text: t('today.goCourses') }),
        U.el('a.btn.hero-btn', { href: '#/daily', text: t('today.dailyQuestions') }),
        /* The streak belongs to the daily check, so it is shown beside the
           button that continues it rather than as a statistic of its own. */
        streak ? U.el('span.hero-streak', { text: '★ ' + t('daily.streakN', { n: streak }) }) : null
      ])
    ]);

    var clock = U.el('div.hero-clock');
    var groups = null;
    if (dated) {
      clock.appendChild(U.el('div.hero-exam', { text: t('today.examName') }));
      groups = {
        d: digitGroup(t('today.cd.days'), 3),
        h: digitGroup(t('today.cd.hrs'), 2),
        m: digitGroup(t('today.cd.min'), 2),
        s: digitGroup(t('today.cd.sec'), 2)
      };
      clock.appendChild(U.el('div.cd-flip', null, [groups.d, groups.h, groups.m, groups.s]));
      clock.appendChild(U.el('div.hero-date', {
        text: U.fmtDate(U.parseISO(state.examDate.testDate), S.settings().uiLang)
      }));
      clock.appendChild(U.el('a.hero-change', { href: '#/settings', text: t('today.changeDate') }));
    } else {
      clock.appendChild(U.el('div.stack-sm', null, [
        U.el('div.hero-exam', { text: t('today.countdownProvisional') }),
        U.el('div.h2', { text: t('today.noDate') }),
        U.el('a.btn.hero-btn', { href: '#/settings', text: t('today.setDate') })
      ]));
    }

    var el = U.el('div.card.today-hero', { id: 'today-hero' }, [left, clock]);
    if (!dated) return { el: el, stop: function () {} };

    /* The exam starts in the morning, so the clock counts to 08:00 local on
       the day itself rather than to midnight before it. */
    var target = U.parseISO(state.examDate.testDate);
    target.setHours(8, 0, 0, 0);

    function paint() {
      var left = Math.max(0, target.getTime() - Date.now());
      setGroup(groups.d, Math.floor(left / DAY));
      setGroup(groups.h, Math.floor(left / 3600000) % 24);
      setGroup(groups.m, Math.floor(left / 60000) % 60);
      setGroup(groups.s, Math.floor(left / 1000) % 60);
    }
    paint();
    var id = setInterval(paint, 1000);
    return { el: el, stop: function () { clearInterval(id); } };
  }

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

  function targetsCard(state) {
    var goal = state.goals && state.goals.total;
    var now = latestMeasure(state);
    return U.el('div.card.stack-sm', { id: 'today-targets' }, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('today.targets.title') }),
        U.el('a.icon-btn.tg-edit', { href: '#/settings', 'aria-label': t('today.targets.edit'), text: '✎' })
      ]),
      U.el('div.row.row-wrap.tg-row', null, [
        U.el('div.tg-cell', null, [
          U.el('span.stat-label', { text: t('today.targets.target') }),
          U.el('b.tg-num', { text: goal ? String(goal) : '—' })
        ]),
        U.el('div.tg-cell', null, [
          U.el('span.stat-label', { text: t('today.targets.now') }),
          U.el('b.tg-num', { text: now ? String(now.total) : '—' })
        ])
      ]),
      U.el('div.row-between.row-wrap', null, [
        U.el('span.xsmall.muted', {
          text: now
            ? t('today.targets.measured', {
                what: now.label, when: U.fmtDate(new Date(now.at), S.settings().uiLang)
              })
            : t('today.targets.none')
        }),
        /* Progress is not in the navigation — Materials took its place — and
           the charts belong to exactly this question, so the one link to them
           is under the two numbers they explain. */
        U.el('a.small', { href: '#/progress', text: t('progress.title') + ' →' })
      ])
    ]);
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

      var hero = heroCard(state);
      screen.appendChild(hero.el);

      /* Three things and no more: the clock, the test that measures the week,
         and the two numbers a student is steering by. What used to be stacked
         under them — the next session, the daily check, the roadmap reminder,
         the review queue and the next checkpoint — each has a screen of its
         own, and repeating them here made the one screen opened every morning
         the longest in the product. */
      /* The fifteen-question weekly test. The full mock has its own page
         (Mock tests) and is no longer repeated here. */
      if (JTS.weeklyTest) {
        var wt = JTS.weeklyTest.card();
        if (wt) screen.appendChild(wt);
      }
      screen.appendChild(targetsCard(state));

      /* The clock ticks once a second; the router calls this when the screen
         is left, so it does not go on ticking over a card nobody can see. */
      return function () { hero.stop(); };
    }
  });
})();
