/* ==========================================================================
   Screen: Progress (#/progress)

   Everything here is a measurement, never a forecast. There is no score
   predictor and no "you will get X" anywhere on this screen (§14.12): what it
   shows is what the student has actually done, split so that work done with
   help never masquerades as work done alone.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var STATUSES = ['mastered', 'developing', 'learning', 'no-data'];

  function cls(status) { return status.replace('no-data', 'nodata'); }

  /* ---------------------------------------------------------------- summary */

  function byHelpLevel() {
    var s = S.state();
    var by = { hint: 0, explanation: 0, full: 0 };
    s.attempts.forEach(function (a) {
      if (by[a.helpType] !== undefined) by[a.helpType]++;
    });
    return Object.keys(by).filter(function (k) { return by[k]; })
      .map(function (k) { return t('help.' + k) + ' ' + by[k]; }).join(' · ');
  }

  function summaryCards() {
    var tot = JTS.analytics.totals();
    var s = S.state();
    var streak = s.profile.streak || { count: 0, best: 0 };
    var map = JTS.mastery.all();
    var mastered = Object.keys(map).filter(function (k) { return map[k].status === 'mastered'; }).length;

    function stat(label, value, note) {
      return U.el('div.card.card-sm.stack-sm', null, [
        U.el('div.stat-label', { text: label }),
        U.el('div.stat-value', { text: value }),
        note ? U.el('div.xsmall.muted', { text: note }) : null
      ]);
    }

    return U.el('div.grid.grid-4', null, [
      /* Independent work is the headline number. The helped count is shown
         next to it rather than folded into it. */
      stat(t('progress.independent'), String(tot.indep),
        tot.indep ? U.pct(tot.indepCorrect, tot.indep) + '% ' + t('common.correct').toLowerCase() : '—'),
      /* Not just how much help, but which kind: a hint and a read explanation
         are different admissions. */
      stat(t('progress.withHelp'), String(tot.helped), tot.helped ? byHelpLevel() : '—'),
      stat(t('progress.streak'), String(streak.count), t('progress.best', { n: streak.best || 0 })),
      stat(t('mastery.mastered'), mastered + ' / ' + JTS.skills.all().length)
    ]);
  }

  /* ---------------------------------------------------------------- heatmap */

  function legend() {
    return U.el('div.legend', { role: 'group', 'aria-label': t('progress.legend') },
      STATUSES.map(function (st) {
      return U.el('span', null, [
        U.el('span.m-dot.m-' + cls(st)), ' ' + t('mastery.' + st)
      ]);
      }));
  }

  function skillMap() {
    var map = JTS.mastery.all();
    var wrap = U.el('div.stack');
    JTS.skills.domains().forEach(function (d) {
      var skills = JTS.skills.all().filter(function (s) { return s.domain === d.id; });
      var grid = U.el('div.heatmap');
      skills.forEach(function (sk) {
        var m = map[sk.id];
        /* A cell states its own confidence. Without six independent attempts
           there is no percentage to show, so it says what is missing instead
           of printing a number nobody should trust. */
        var meta = m.status === 'no-data'
          ? (m.independent ? t('mastery.needMore', { n: m.needed }) : t('common.notEnoughData'))
          : Math.round((m.windowAccuracy !== null ? m.windowAccuracy : m.accuracy) * 100) + '% · ' +
            m.independent + ' ' + t('common.attempts');
        grid.appendChild(U.el('button.heat-cell.m-bg-' + cls(m.status), {
          type: 'button',
          'aria-label': JTS.i18n.pickName(sk) + ' — ' + t('mastery.' + m.status) + ', ' + meta,
          title: t('progress.clickSkill'),
          onclick: function () { JTS.practice.startTopic([sk.id], 10); }
        }, [
          U.el('span.hc-name', { text: JTS.i18n.pickName(sk) }),
          U.el('span.hc-meta', { text: meta })
        ]));
      });
      wrap.appendChild(U.el('div.stack-sm', null, [
        U.el('div.eyebrow', { text: JTS.i18n.pickName(d) }),
        grid
      ]));
    });
    return wrap;
  }

  /* ------------------------------------------------------- accuracy by domain */

  function byDomain() {
    var s = S.state();
    var rows = [];
    JTS.skills.domains().forEach(function (d) {
      var ids = JTS.skills.all().filter(function (sk) { return sk.domain === d.id; })
        .map(function (sk) { return sk.id; });
      var att = s.attempts.filter(function (a) {
        return ids.indexOf(a.skillId) >= 0 && JTS.mastery.isIndependent(a);
      });
      if (!att.length) return;
      var acc = U.pct(att.filter(function (a) { return a.correct; }).length, att.length);
      rows.push({
        label: JTS.i18n.pickName(d) + ' · ' + att.length, value: acc, max: 100,
        valueLabel: acc + '%',
        color: acc >= 80 ? 'var(--m-mastered)' : acc >= 50 ? 'var(--m-developing)' : 'var(--m-learning)'
      });
    });
    if (!rows.length) return ui.empty(t('common.notEnoughData'));
    return ui.barChart(rows, { ariaLabel: t('progress.byDomain'), labelWidth: 230 });
  }

  /* ------------------------------------------------------------- mock trend */

  function mockTrend() {
    var s = S.state();
    var goal = s.goals ? s.goals.total : null;
    var imported = (JTS.mock ? JTS.mock.reports() : []).map(function (r) {
      return { x: new Date(r.date + 'T00:00:00').getTime(), y: r.total };
    });
    var internal = (JTS.mock ? JTS.mock.finished() : []).map(function (run) {
      var est = JTS.mock.totalEstimate(run);
      return est ? { x: run.finishedAt, y: Math.round((est.low + est.high) / 2) } : null;
    }).filter(Boolean).sort(function (a, b) { return a.x - b.x; });

    if (!imported.length && !internal.length) {
      return ui.empty(t('mock.noResults'), null, U.el('a.btn', {
        href: '#/mocks', text: t('mock.title')
      }));
    }
    var series = [];
    if (imported.length) series.push({ label: t('mock.seriesImported'), color: 'var(--brand-600)', points: imported });
    if (internal.length) series.push({ label: t('mock.seriesInternal'), color: 'var(--warn)', points: internal });
    return U.el('div.stack-sm', null, [
      ui.lineChart(series, { target: goal || undefined, yMin: 400, yMax: 1600, ariaLabel: t('progress.mockTrend') }),
      U.el('div.legend', null, series.map(function (x) {
        return U.el('span', null, [U.el('span.badge-dot', { style: 'background:' + x.color }), ' ' + x.label]);
      }).concat(goal ? [U.el('span', { text: '– – ' + t('mock.goalLine') + ' ' + goal })] : []))
    ]);
  }

  /* ------------------------------------------------------------- study time */

  function studyTime() {
    var s = S.state();
    var now = Date.now();
    function since(days) {
      var cut = now - days * U.DAY_MS;
      var att = s.attempts.filter(function (a) { return a.ts >= cut; });
      return {
        minutes: Math.round(U.sum(att.map(function (a) { return a.timeMs || 0; })) / 60000),
        n: att.length
      };
    }
    var week = since(7), month = since(30);

    /* Speed is reported against the per-section benchmark, and only where
       there is enough independent work to have a median worth quoting. */
    var speeds = [];
    ['rw', 'math'].forEach(function (sec) {
      var ids = JTS.skills.bySection(sec).map(function (sk) { return sk.id; });
      var times = s.attempts.filter(function (a) {
        return ids.indexOf(a.skillId) >= 0 && JTS.mastery.isIndependent(a) && a.timeMs;
      }).map(function (a) { return a.timeMs; });
      if (times.length < 6) return;
      var actual = Math.round(U.median(times) / 1000);
      var target = JTS.config.pace[sec];
      speeds.push(U.el('div.row-between', null, [
        U.el('span.small', { text: t('common.' + sec) }),
        U.el('span.small.muted', {
          text: t('progress.speedVs', { actual: actual, target: target }) + ' · ' +
            t(actual <= target ? 'progress.faster' : 'progress.slower')
        })
      ]));
    });

    return U.el('div.stack', null, [
      U.el('div.grid.grid-2', null, [
        U.el('div.stat', null, [
          U.el('div.stat-label', { text: t('progress.thisWeek') }),
          U.el('div.stat-value', { text: U.fmtHm(week.minutes) }),
          U.el('div.xsmall.muted', { text: week.n + ' ' + t('common.attempts') })
        ]),
        U.el('div.stat', null, [
          U.el('div.stat-label', { text: t('progress.thisMonth') }),
          U.el('div.stat-value', { text: U.fmtHm(month.minutes) }),
          U.el('div.xsmall.muted', { text: month.n + ' ' + t('common.attempts') })
        ])
      ])
    ].concat(speeds.length ? [U.el('div.stack-sm', null,
      [U.el('div.eyebrow', { text: t('progress.speed') })].concat(speeds))] : []));
  }

  /* ------------------------------------------------------ calendar heatmap */

  function calendar() {
    var by = JTS.analytics.activityByDay();
    /* The grid reads as weeks in columns, so it starts on the Monday on or
       before day -89; otherwise the rows stop meaning days of the week. */
    var end = U.today();
    var start = U.addDays(end, -89);
    var shift = (start.getDay() + 6) % 7;      /* Monday = 0 */
    start = U.addDays(start, -shift);

    var grid = U.el('div.cal-heat', { role: 'img', 'aria-label': t('progress.calendar') });
    var total = 0;
    for (var d = new Date(start); d <= end; d = U.addDays(d, 1)) {
      var key = U.iso(d);
      var n = by[key] || 0;
      total += n;
      grid.appendChild(U.el('i', {
        'data-lv': String(n === 0 ? 0 : n < 5 ? 1 : n < 15 ? 2 : 3),
        title: key + ' · ' + n + ' ' + t('common.attempts')
      }));
    }
    return U.el('div.stack-sm', null, [
      U.el('div.table-wrap', null, [grid]),
      U.el('div.xsmall.muted', { text: total + ' ' + t('common.attempts') + ' · ' + t('progress.calendar') })
    ]);
  }

  /* ---------------------------------------------------------------- badges */

  function badges() {
    var s = S.state();
    /* Exactly three, always all three shown: an unearned badge is greyed out
       rather than hidden, so the student can see what there is to aim at. */
    return U.el('div.grid.grid-3', null, JTS.badges.defs.map(function (d) {
      var got = s.badges.indexOf(d.id) >= 0;
      return U.el('div.card.card-sm.stack-sm', {
        style: got ? '' : 'opacity:.5',
        'aria-label': t('badge.' + d.id) + (got ? ' — ' + t('badge.earned') : '')
      }, [
        U.el('div', { text: got ? '★' : '☆', style: 'font-size:26px;line-height:1' }),
        U.el('div', null, [U.el('b', { text: t('badge.' + d.id) })]),
        U.el('div.xsmall.muted', { text: got ? t('badge.earned') : '—' })
      ]);
    }));
  }

  /* ----------------------------------------------------------------- screen */

  JTS.router.register('#/progress', {
    title: 'progress.title',
    render: function (root) {
      var s = S.state();
      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);


      if (!s.attempts.length) {
        screen.appendChild(ui.empty(t('common.notEnoughData'), t('progress.clickSkill'),
          U.el('a.btn.btn-primary', { href: '#/practice', text: t('nav.practice') })));
        return;
      }

      screen.appendChild(summaryCards());

      screen.appendChild(U.el('div.card.stack', null, [
        U.el('div.row-between', null, [
          U.el('h2.h2', { text: t('progress.skillMap') }),
          U.el('span.small.muted', { text: t('progress.clickSkill') })
        ]),
        legend(),
        skillMap()
      ]));

      screen.appendChild(U.el('div.grid.grid-2', null, [
        U.el('div.card.stack-sm', null, [
          U.el('h2.h2', { text: t('progress.byDomain') }), byDomain()
        ]),
        U.el('div.card.stack-sm', null, [
          U.el('h2.h2', { text: t('progress.studyTime') }), studyTime()
        ])
      ]));

      screen.appendChild(U.el('div.card.stack-sm', null, [
        U.el('h2.h2', { text: t('progress.mockTrend') }), mockTrend()
      ]));

      screen.appendChild(U.el('div.card.stack-sm', null, [
        U.el('h2.h2', { text: t('progress.calendar') }), calendar()
      ]));

      screen.appendChild(U.el('div.card.stack-sm', null, [
        U.el('h2.h2', { text: t('progress.badges') }),
        badges(),
        U.el('p.xsmall.muted', { text: t('progress.milestones') })
      ]));
    }
  });
})();
