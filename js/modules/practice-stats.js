/* ==========================================================================
   Practice statistics

   Two views over the same numbers: the result of the set just finished,
   shown on #/practice?session=… when a practice set ends, and the running
   totals of every practice set, shown as a card on the dashboard.

   Only Practice-section sets count. Lesson sets, the weekly test and mocks
   have result screens of their own.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;
  var DAY = 86400000;

  /** A set started from the Practice section. Sets saved before the tag
      existed are recognised by having no lesson or weekly test behind them. */
  function isPractice(sum) {
    var m = sum.meta || {};
    if (m.source) return m.source === 'practice';
    if (sum.kind === 'module') return true;
    return sum.kind === 'practice' && !m.lessonCode && !m.lessonId;
  }

  function sessions() {
    var st = S.state();
    return ((st && st.sessions) || []).filter(isPractice);
  }

  function blank() { return { answered: 0, correct: 0, timeMs: 0 }; }

  /** Questions answered, right and time spent, overall, per section and per topic. */
  function tally(list) {
    var out = { sets: list.length, all: blank(), rw: blank(), math: blank(), skills: {}, days: {} };
    list.forEach(function (sum) {
      (sum.questionIds || []).forEach(function (qid) {
        var a = sum.answers && sum.answers[qid];
        if (!a || a.selected === null || a.selected === undefined || a.selected === '') return;
        var q = JTS.bank.get(qid);
        var ok = !!a.correct, ms = a.timeMs || 0;
        [out.all, q && out[q.section]].forEach(function (b) {
          if (!b) return;
          b.answered++; if (ok) b.correct++; b.timeMs += ms;
        });
        if (q && q.skillId && JTS.skills.get(q.skillId)) {
          var sk = out.skills[q.skillId] || (out.skills[q.skillId] = blank());
          sk.answered++; if (ok) sk.correct++; sk.timeMs += ms;
        }
        var day = U.iso(new Date(sum.finishedAt || sum.startedAt));
        out.days[day] = (out.days[day] || 0) + 1;
      });
    });
    return out;
  }

  function fmtTime(ms) {
    var min = ms / 60000;
    if (min < 1) return Math.round(ms / 1000) + 's';
    return U.fmtHm(min);
  }

  function kpi(label, value, sub) {
    return U.el('div.ps-kpi', null, [
      U.el('span.stat-label', { text: label }),
      U.el('b.ps-num', { text: value }),
      sub ? U.el('span.xsmall.muted', { text: sub }) : null
    ]);
  }

  function accBar(label, b) {
    var p = U.pct(b.correct, b.answered);
    return U.el('div.ps-bar-row', null, [
      U.el('div.row-between', null, [
        U.el('span.small', { text: label }),
        U.el('span.small.muted', {
          text: b.answered ? p + '% · ' + b.correct + '/' + b.answered : '—'
        })
      ]),
      JTS.ui.bar(p, 100, p >= 80 ? 'bar-ok' : (p >= 50 ? '' : 'bar-warn'))
    ]);
  }

  function sectionBars(tl) {
    var rows = [];
    if (tl.rw.answered) rows.push(accBar(t('common.rw'), tl.rw));
    if (tl.math.answered) rows.push(accBar(t('common.math'), tl.math));
    return rows.length ? U.el('div.stack-sm', null, rows) : null;
  }

  /** Topics sorted by accuracy, weakest first. */
  function topicRows(tl, min, limit, link) {
    var ids = Object.keys(tl.skills).filter(function (id) { return tl.skills[id].answered >= min; });
    ids.sort(function (a, b) {
      var x = tl.skills[a], y = tl.skills[b];
      return (x.correct / x.answered) - (y.correct / y.answered) || y.answered - x.answered;
    });
    if (limit) ids = ids.slice(0, limit);
    if (!ids.length) return null;
    return U.el('div.ps-topics', null, ids.map(function (id) {
      var b = tl.skills[id], p = U.pct(b.correct, b.answered);
      var name = JTS.skills.name(id);
      return U.el('div.ps-topic', null, [
        link
          ? U.el('a.ps-topic-name', { href: '#/practice?skills=' + id, text: name })
          : U.el('span.ps-topic-name', { text: name }),
        U.el('span.ps-chip' + (p >= 80 ? '.is-ok' : (p >= 50 ? '' : '.is-low')), { text: p + '%' }),
        U.el('span.xsmall.muted', { text: b.correct + '/' + b.answered })
      ]);
    }));
  }

  /* ------------------------------------------------- after a practice set */

  function resultScreen(sum) {
    var tl = tally([sum]);
    var total = (sum.questionIds || []).length;
    var a = tl.all, p = U.pct(a.correct, a.answered);
    var missed = (sum.questionIds || []).filter(function (qid) {
      var x = sum.answers && sum.answers[qid];
      return JTS.bank.get(qid) && x && x.selected !== null && x.selected !== '' && !x.correct;
    });

    var card = U.el('div.card.stack.ps-result', { id: 'practice-result' }, [
      U.el('div.stack-sm', null, [
        U.el('div.eyebrow', { text: t('pstats.resultTitle') }),
        U.el('div.h2', { text: sum.title || t('practice.title') })
      ]),
      U.el('div.ps-hero', null, [
        U.el('div.ps-ring', { style: '--p:' + p }, [U.el('b', { text: a.answered ? p + '%' : '—' })]),
        U.el('div.ps-kpis', null, [
          kpi(t('pstats.correct'), a.correct + ' / ' + a.answered),
          kpi(t('pstats.answered'), a.answered + ' / ' + total),
          kpi(t('pstats.time'), fmtTime(sum.elapsedMs || a.timeMs)),
          kpi(t('pstats.perQuestion'), a.answered ? fmtTime(a.timeMs / a.answered) : '—')
        ])
      ]),
      sectionBars(tl)
    ]);
    var topics = topicRows(tl, 1, 0, false);
    if (topics) {
      card.appendChild(U.el('div.stack-sm', null, [
        U.el('div.eyebrow', { text: t('pstats.byTopic') }), topics
      ]));
    }
    card.appendChild(U.el('div.row.row-wrap', null, [
      U.el('a.btn.btn-primary', { href: '#/practice', text: t('pstats.again') }),
      missed.length ? U.el('button.btn', {
        type: 'button', text: t('pstats.retryMissed', { n: missed.length }),
        onclick: function () {
          JTS.session.start({
            kind: 'practice', mode: 'study', title: t('pstats.missedTitle'),
            questionIds: missed, softTimer: true,
            returnHash: '#/practice', finishHash: '#/practice',
            meta: { source: 'practice' }
          });
        }
      }) : null,
      U.el('a.btn', { href: '#/today', text: t('pstats.toDashboard') })
    ]));
    return card;
  }

  /* --------------------------------------------------------- dashboard */

  function weekBars(tl) {
    var today = U.today(), lang = S.settings().uiLang;
    var days = [];
    for (var i = 6; i >= 0; i--) {
      var d = U.addDays(today, -i);
      days.push({ d: d, n: tl.days[U.iso(d)] || 0 });
    }
    var max = Math.max.apply(null, days.map(function (x) { return x.n; }).concat([1]));
    return U.el('div.ps-week', { 'aria-label': t('pstats.week') }, days.map(function (x) {
      return U.el('div.ps-day' + (x.n ? '' : '.is-empty'), { title: x.n + ' · ' + U.fmtDate(x.d, lang) }, [
        U.el('span.ps-day-n', { text: x.n ? String(x.n) : '' }),
        U.el('div.ps-day-bar', null, [U.el('i', { style: 'height:' + Math.round((x.n / max) * 100) + '%' })]),
        U.el('span.ps-day-lab', { text: U.dayLabel(x.d.getDay(), lang) })
      ]);
    }));
  }

  /** Every question ever answered, wherever: practice, lessons, the weekly
      test and mocks all log their answers as attempts. */
  function tallyAttempts(attempts) {
    var out = { all: blank(), rw: blank(), math: blank(), skills: {}, days: {} };
    attempts.forEach(function (a) {
      var q = JTS.bank.get(a.questionId);
      var ok = !!a.correct, ms = a.timeMs || 0;
      [out.all, q && out[q.section]].forEach(function (b) {
        if (!b) return;
        b.answered++; if (ok) b.correct++; b.timeMs += ms;
      });
      var sid = (q && q.skillId) || a.skillId;
      if (sid && JTS.skills.get(sid)) {
        var sk = out.skills[sid] || (out.skills[sid] = blank());
        sk.answered++; if (ok) sk.correct++; sk.timeMs += ms;
      }
      if (a.ts) {
        var day = U.iso(new Date(a.ts));
        out.days[day] = (out.days[day] || 0) + 1;
      }
    });
    return out;
  }

  /** The streak as it stands today: a run that missed yesterday is over. */
  function streakNow(st) {
    var k = (st.profile && st.profile.streak) || {};
    var today = U.iso(new Date()), yest = U.iso(U.addDays(U.today(), -1));
    return {
      count: (k.lastDay === today || k.lastDay === yest) ? (k.count || 0) : 0,
      best: k.best || 0,
      today: k.lastDay === today
    };
  }

  function dashboardCard() {
    var st = S.state();
    var attempts = (st && st.attempts) || [];
    var tl = tallyAttempts(attempts);
    var head = U.el('div.row-between.row-wrap', null, [
      U.el('div.eyebrow', { text: t('pstats.title') }),
      U.el('a.small', { href: '#/progress', text: t('progress.title') + ' →' })
    ]);

    var weekStart = U.addDays(U.today(), -6).getTime();
    var thisWeek = attempts.filter(function (a) { return a.ts >= weekStart; }).length;
    var todayStart = U.today().getTime();
    var todayMs = U.sum(attempts.filter(function (a) { return a.ts >= todayStart; })
      .map(function (a) { return a.timeMs || 0; }));
    var streak = streakNow(st);

    var P = JTS.programme;
    var unitsDone = P ? P.doneCount() : 0;
    var unitsAll = P ? P.lessonCount('rw') + P.lessonCount('math') : 0;
    var mocks = JTS.mock ? JTS.mock.finished() : [];
    var bestMock = null;
    mocks.forEach(function (r) {
      var e = JTS.mock.totalEstimate(r);
      if (e) { var v = Math.round((e.low + e.high) / 2); if (bestMock === null || v > bestMock) bestMock = v; }
    });
    var weekly = JTS.weeklyTest ? JTS.weeklyTest.history().length : 0;
    var practiceSets = sessions().length;
    var openErrors = ((st && st.errors) || []).filter(function (e) { return !e.resolvedAt; }).length;

    var card = U.el('div.card.stack', { id: 'today-practice-stats' }, [
      head,
      U.el('div.ps-kpis', null, [
        kpi(t('pstats.streak'), '\uD83D\uDD25 ' + streak.count,
          streak.today ? t('pstats.streakToday', { best: streak.best }) : t('pstats.streakBest', { best: streak.best })),
        kpi(t('pstats.solved'), String(tl.all.answered), t('pstats.thisWeek', { n: thisWeek })),
        kpi(t('pstats.accuracy'), tl.all.answered ? U.pct(tl.all.correct, tl.all.answered) + '%' : '—',
          t('pstats.correctOf', { c: tl.all.correct, n: tl.all.answered })),
        kpi(t('pstats.time'), fmtTime(tl.all.timeMs), t('pstats.today', { time: fmtTime(todayMs) }))
      ]),
      U.el('div.ps-kpis', null, [
        kpi(t('pstats.units'), unitsDone + (unitsAll ? ' / ' + unitsAll : '')),
        kpi(t('pstats.mocks'), String(mocks.length), bestMock !== null ? t('pstats.bestScore', { n: bestMock }) : null),
        kpi(t('pstats.weekly'), String(weekly), t('pstats.practiceSets', { n: practiceSets })),
        kpi(t('pstats.mistakes'), String(openErrors), t('pstats.toReview'))
      ])
    ]);
    if (!tl.all.answered) {
      card.appendChild(U.el('p.muted.small', { text: t('pstats.none') }));
      return card;
    }
    card.appendChild(U.el('div.ps-cols', null, [
      U.el('div.stack-sm', null, [U.el('div.stat-label', { text: t('pstats.week') }), weekBars(tl)]),
      U.el('div.stack-sm', null, [U.el('div.stat-label', { text: t('pstats.bySection') }), sectionBars(tl)])
    ]));
    var weak = topicRows(tl, 3, 3, true);
    if (weak) {
      card.appendChild(U.el('div.stack-sm', null, [
        U.el('div.stat-label', { text: t('pstats.weakest') }), weak
      ]));
    }
    return card;
  }

  JTS.practiceStats = {
    isPractice: isPractice,
    sessions: sessions,
    tally: tally,
    resultScreen: resultScreen,
    dashboardCard: dashboardCard
  };
})();
