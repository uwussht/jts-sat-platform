/* ==========================================================================
   Progress measures for the dashboard (#/today).

   There is no Progress page any more: what it showed that is still wanted —
   accuracy by domain, study time, the last ninety days and the badges — is
   on the dashboard, built here by JTS.progress.dashboard().

   Everything here is a measurement, never a forecast. There is no score
   predictor and no "you will get X" anywhere (§14.12).
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

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

  /* ------------------------------------------------------------- dashboard */

  /**
   * The same measures, arranged for the dashboard (#/today): four numbers
   * (every question answered, the streak, skills mastered, words today), accuracy beside
   * time, and the last ninety days beside the badges.
   */
  function dashboard() {
    var s = S.state();
    function card(title, body, lead) {
      return U.el('div.card.stack-sm.dash-panel', null, [
        U.el('div', null, [
          U.el('h2.h3', { text: title }),
          lead ? U.el('p.xsmall.muted', { text: lead, style: 'margin:4px 0 0' }) : null
        ]),
        body
      ]);
    }
    function stat(label, value, note) {
      return U.el('div.card.card-sm.stack-sm', null, [
        U.el('div.stat-label', { text: label }),
        U.el('div.stat-value', { text: value }),
        note ? U.el('div.xsmall.muted', { text: note }) : null
      ]);
    }
    var answered = s.attempts.length;
    var right = s.attempts.filter(function (a) { return a.correct; }).length;
    var streak = s.profile.streak || { count: 0, best: 0 };
    var map = JTS.mastery.all();
    var mastered = Object.keys(map).filter(function (k) { return map[k].status === 'mastered'; }).length;
    var badgeList = U.el('div.stack-sm', null, JTS.badges.defs.map(function (d) {
      var got = s.badges.indexOf(d.id) >= 0;
      return U.el('div.dash-badge' + (got ? '.is-got' : ''), null, [
        U.el('span.dash-badge-ico', { text: got ? '★' : '☆', 'aria-hidden': 'true' }),
        U.el('div', null, [
          U.el('b', { text: t('badge.' + d.id) }),
          U.el('div.xsmall.muted', { text: got ? t('badge.earned') : '—' })
        ])
      ]);
    }));

    return U.el('div.stack.dash-stats', { id: 'today-practice-stats' }, [
      U.el('div.eyebrow', { text: t('pstats.title') }),
      U.el('div.grid.grid-4', null, [
        stat(t('pstats.solved'), String(answered),
          answered ? U.pct(right, answered) + '% ' + t('common.correct').toLowerCase() : '—'),
        stat(t('progress.streak'), String(streak.count), t('progress.best', { n: streak.best || 0 })),
        stat(t('mastery.mastered'), mastered + ' / ' + JTS.skills.all().length),
        /* Vocabulary cards gone through today, against the daily goal. */
        JTS.vocab ? stat(t('pstats.wordsToday'), String(JTS.vocab.doneToday()),
          t('vocab.dailyGoal') + ': ' + JTS.vocab.state().dailyGoal) : null
      ]),
      U.el('div.dash-two', null, [
        card(t('progress.byDomain'), byDomain()),
        card(t('progress.studyTime'), studyTime())
      ]),
      U.el('div.dash-two', null, [
        card(t('progress.calendar'), calendar()),
        card(t('progress.badges'), badgeList, t('progress.milestones'))
      ])
    ]);
  }

  JTS.progress = { dashboard: dashboard };
})();
