/* ==========================================================================
   The weekly practice test (#/weekly).

   Fifteen questions once a week, mixed from the whole Practice bank:
   seven Reading and Writing and eight Math, one question per skill, the
   domains taken in turn so a week touches every part of both sections, and
   a spread of easy, medium and hard.

   It should not repeat itself, so the questions are drawn in this order:
     1. never in an earlier weekly test and never answered in Practice;
     2. never in an earlier weekly test;
     3. anything, only if the bank runs out.

   A week's fifteen are chosen the first time that week is opened and stored
   with the student, so they are the same fifteen all week whatever is
   answered elsewhere in the meantime. Every week's test, and its score once
   it is sat, is kept in state.weeklyTests; the dashboard shows this week's
   and the ones before it.

   It runs like the daily check: exam mode, no hints or explanations while it
   is open, an advisory clock. The result screen has the answers.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;

  var N_RW = 7, N_MATH = 8;
  var N = N_RW + N_MATH;
  var MINUTES = 20;          /* advisory, never closes the test */
  var LEVELS = [2, 3, 1, 2, 3, 2, 1, 3];

  function weekOf(date) { return U.iso(U.weekStart(date || U.today())); }

  /** All weeks' records, created lazily so an old profile needs no repair. */
  function all() {
    var s = S.state();
    if (!s) return null;
    if (!s.weeklyTests) s.weeklyTests = {};
    return s.weeklyTests;
  }

  function numericSeed(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) h = ((h * 33) ^ str.charCodeAt(i)) >>> 0;
    return h;
  }

  /* ------------------------------------------------------------- the set */

  function pick(week) {
    var s = S.state();
    var seed = numericSeed(week + '|' + (s.profile.email || ''));
    var used = {};
    Object.keys(all()).forEach(function (w) {
      if (w !== week) all()[w].questionIds.forEach(function (id) { used[id] = 1; });
    });
    var answered = {};
    (s.attempts || []).forEach(function (a) { answered[a.questionId] = 1; });

    var out = [];
    function chooseFrom(pool, level) {
      var tiers = [
        function (q) { return !used[q.id] && !answered[q.id]; },
        function (q) { return !used[q.id]; },
        function () { return true; }
      ];
      for (var i = 0; i < tiers.length; i++) {
        var ok = pool.filter(function (q) { return out.indexOf(q.id) < 0 && tiers[i](q); });
        if (!ok.length) continue;
        var atLevel = ok.filter(function (q) { return q.difficulty === level; });
        var list = U.shuffle(atLevel.length ? atLevel : ok, seed + out.length);
        return list[0].id;
      }
      return null;
    }

    function section(sec, n) {
      var bank = JTS.bank.query({ section: sec });
      var bySkill = U.groupBy(bank, function (q) { return q.skillId; });
      var byDomain = {};
      Object.keys(bySkill).forEach(function (id) {
        var sk = JTS.skills.get(id);
        var d = sk ? sk.domain : 'other';
        (byDomain[d] = byDomain[d] || []).push(id);
      });
      var domains = U.shuffle(Object.keys(byDomain), seed + n);
      domains.forEach(function (d) { byDomain[d] = U.shuffle(byDomain[d], seed + d.length); });
      var taken = 0, round = 0;
      while (taken < n && round < 20) {
        var any = false;
        for (var i = 0; i < domains.length && taken < n; i++) {
          var skills = byDomain[domains[i]];
          var skill = skills[round % skills.length];
          var id = chooseFrom(bySkill[skill], LEVELS[out.length % LEVELS.length]);
          if (id) { out.push(id); taken++; any = true; }
        }
        if (!any) break;
        round++;
      }
    }

    section('rw', N_RW);
    section('math', N_MATH);
    return out;
  }

  /** This week's record, made (and its questions chosen) on first use. */
  function forWeek(week) {
    var recs = all();
    if (!recs) return null;
    if (!recs[week]) {
      var ids = pick(week);
      if (!ids.length) return null;
      recs[week] = { week: week, questionIds: ids, sessionId: null,
                     correct: null, total: ids.length, finishedAt: null };
      S.save();
    }
    return recs[week];
  }

  /** A finished weekly session writes its score into its week, once. */
  function recordFinished() {
    var s = S.state();
    if (!s) return;
    (s.sessions || []).forEach(function (x) {
      if (x.kind !== 'weekly' || !x.meta || !x.meta.week) return;
      var r = all()[x.meta.week];
      if (!r || r.finishedAt) return;
      r.sessionId = x.id;
      r.correct = x.correct;
      r.total = x.questionIds.length;
      r.finishedAt = x.finishedAt;
    });
    S.save();
  }

  function start(week) {
    var r = forWeek(week || weekOf());
    if (!r) return null;
    return JTS.session.start({
      kind: 'weekly', mode: 'exam',
      title: t('weekly.title'),
      questionIds: r.questionIds,
      durationMs: MINUTES * 60000,
      softTimer: true,
      returnHash: '#/today',
      finishHash: '#/weekly',
      meta: { week: r.week }
    });
  }

  /** Past weeks that were sat, newest first. */
  function history() {
    var recs = all() || {};
    return Object.keys(recs).sort().reverse()
      .map(function (w) { return recs[w]; })
      .filter(function (r) { return r.finishedAt; });
  }

  function weekLabel(week) {
    var lang = S.settings().uiLang;
    var mon = U.parseISO(week);
    return U.fmtDate(mon, lang) + ' – ' + U.fmtDate(U.addDays(mon, 6), lang);
  }

  /* ------------------------------------------------------ dashboard card */

  function card() {
    if (!S.state()) return null;
    recordFinished();
    var week = weekOf();
    var r = forWeek(week);
    var active = JTS.session.current();
    var running = active && active.kind === 'weekly';
    var done = r && r.finishedAt;

    var head = U.el('div.stack-sm', null, [
      U.el('div.eyebrow', { text: t('weekly.title') }),
      U.el('div.h3', { text: weekLabel(week) }),
      U.el('div.small.muted', { text: t('weekly.lead', { n: N, min: MINUTES }) })
    ]);

    var status = done
      ? U.el('span.badge.badge-ok', { text: t('weekly.score', { correct: r.correct, total: r.total }) })
      : U.el('span.badge', { text: running ? t('weekly.inProgress') : t('weekly.notYet') });

    var past = history().filter(function (h) { return h.week !== week; }).slice(0, 6);
    var chips = past.length ? U.el('div.row.row-wrap.wt-past', null, past.map(function (h) {
      return U.el('span.wt-chip', {
        title: weekLabel(h.week),
        text: U.fmtDate(U.parseISO(h.week), S.settings().uiLang) + ' · ' + h.correct + '/' + h.total
      });
    })) : null;

    return U.el('div.card.stack-sm.wt-card', { id: 'today-weekly-test' }, [
      U.el('div.row-between.row-wrap', null, [head, status]),
      chips,
      r ? U.el('div.row.row-wrap', null, [
        U.el('a.btn.btn-sm' + (done ? '' : '.btn-primary'), {
          href: running ? '#/question' : '#/weekly',
          text: done ? t('weekly.seeResult') : running ? t('weekly.continue') : t('weekly.start')
        })
      ]) : U.el('div.small.muted', { text: t('practice.noQuestions') })
    ]);
  }

  /* ---------------------------------------------------------- the screen */

  function resultView(screen, r) {
    var ses = (S.state().sessions || []).filter(function (x) { return x.id === r.sessionId; })[0];
    screen.appendChild(U.el('div.card.stack-sm', null, [
      U.el('div.eyebrow', { text: t('weekly.title') + ' · ' + weekLabel(r.week) }),
      U.el('div.h1', { text: t('weekly.score', { correct: r.correct, total: r.total }) }),
      U.el('p.small.muted', { text: t('weekly.resultLead') })
    ]));
    if (!ses) return;

    /* Each row opens in place: the question, the answer given, the right
       answer and the explanation, scrolled into view. */
    var rows = U.el('div.stack-sm');
    ses.questionIds.forEach(function (qid, i) {
      var q = JTS.bank.get(qid);
      var a = ses.answers && ses.answers[qid];
      if (!q) return;
      var given = a && a.selected !== null && a.selected !== '' ? a.selected : null;
      var body = U.el('div.wt-body', { hidden: true });
      var row = U.el('div.card.card-sm.wt-row');
      var head = U.el('button.wt-head', {
        type: 'button', 'aria-expanded': 'false',
        onclick: function () {
          var open = body.hidden;
          if (open && !body.firstChild) fill();
          body.hidden = !open;
          head.setAttribute('aria-expanded', String(open));
          row.classList.toggle('is-open', open);
          if (open) setTimeout(function () { row.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 30);
        }
      }, [
        U.el('div.stack-sm', null, [
          U.el('div', null, [U.el('b', { text: (i + 1) + '. ' + JTS.skills.name(q.skillId) })]),
          U.el('div.xsmall.muted', { text: t('common.' + q.section) })
        ]),
        U.el('div.row', null, [
          U.el('span.badge' + (a && a.correct ? '.badge-ok' : '.badge-danger'), {
            text: a && a.correct ? t('common.correct') : (given ? t('common.incorrect') : t('weekly.skipped'))
          }),
          U.el('span.wt-caret', { text: '⌄', 'aria-hidden': 'true' })
        ])
      ]);
      function fill() {
        if (q.passage) body.appendChild(U.el('div.wt-passage', { html: q.passage }));
        body.appendChild(U.el('div.wt-stem', { html: q.stem }));
        if (q.type === 'mcq' && q.options) {
          body.appendChild(U.el('ol.wt-opts', null, q.options.map(function (o, k) {
            var key = 'ABCD'.charAt(k);
            var cls = key === q.answer ? '.is-right' : key === given ? '.is-wrong' : '';
            return U.el('li' + cls, null, [U.el('span.wt-key', { text: key }), U.el('span', { html: o })]);
          })));
        } else if (given) {
          body.appendChild(U.el('div.small', { text: t('weekly.youTyped', { a: given }) }));
        }
        body.appendChild(JTS.studyHelp.explanationBody(q, {
          selected: given, submitted: !!given, correct: !!(a && a.correct)
        }));
      }
      row.appendChild(head);
      row.appendChild(body);
      rows.appendChild(row);
    });
    screen.appendChild(rows);

    /* The answers and explanations: the same fifteen again in study mode,
       where each question is checked and explained. */
    function review(ids, title) {
      JTS.session.start({
        kind: 'practice', mode: 'study', title: title,
        questionIds: ids, softTimer: true,
        returnHash: '#/weekly', finishHash: '#/weekly'
      });
    }
    var missed = ses.questionIds.filter(function (qid) {
      var a = ses.answers && ses.answers[qid];
      return JTS.bank.get(qid) && !(a && a.correct);
    });
    screen.appendChild(U.el('div.row.row-wrap', null, [
      missed.length ? U.el('button.btn.btn-primary', {
        type: 'button', text: t('weekly.reviewMissed', { n: missed.length }),
        onclick: function () { review(missed, t('weekly.title') + ' · ' + t('common.incorrect')); }
      }) : null,
      U.el('button.btn', {
        type: 'button', text: t('weekly.reviewAll'),
        onclick: function () { review(ses.questionIds.filter(JTS.bank.get.bind(JTS.bank)), t('weekly.title')); }
      }),
      U.el('a.btn', { href: '#/today', text: t('nav.today') })
    ]));
  }

  function introView(screen, r) {
    var c = U.el('div.card.stack');
    c.appendChild(U.el('div.eyebrow', { text: weekLabel(r.week) }));
    c.appendChild(U.el('h1.h1', { text: t('weekly.title') }));
    c.appendChild(U.el('p.muted', { text: t('weekly.lead', { n: N, min: MINUTES }) }));
    var rw = r.questionIds.filter(function (id) { var q = JTS.bank.get(id); return q && q.section === 'rw'; }).length;
    c.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge', { text: t('common.rwShort') + ' · ' + rw }),
      U.el('span.badge', { text: t('common.math') + ' · ' + (r.questionIds.length - rw) }),
      U.el('span.badge.badge-muted', { text: t('weekly.about', { n: MINUTES }) })
    ]));
    c.appendChild(U.el('div.notice', { text: t('weekly.rules') }));
    c.appendChild(U.el('button.btn.btn-primary.btn-lg.btn-block', {
      type: 'button', text: t('weekly.start'),
      onclick: function () { start(r.week); }
    }));
    screen.appendChild(c);
  }

  JTS.router.register('#/weekly', {
    title: 'weekly.title',
    render: function (root) {
      if (!S.state()) { JTS.router.go('#/auth'); return; }
      var active = JTS.session.current();
      if (active && active.kind === 'weekly') { JTS.router.go('#/question'); return; }
      recordFinished();

      var screen = U.el('div.container.screen.stack', { style: 'max-width:820px' });
      root.appendChild(screen);
      var r = forWeek(weekOf());
      if (!r) { screen.appendChild(U.el('div.notice.notice-warn', { text: t('practice.noQuestions') })); return; }
      if (r.finishedAt) resultView(screen, r);
      else introView(screen, r);
    }
  });

  JTS.weeklyTest = { N: N, pick: pick, forWeek: forWeek, start: start, history: history, card: card };
})();
