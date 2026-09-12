/* ==========================================================================
   Screen: Diagnostic (#/diagnostic)

   24 questions: 12 Reading and Writing and 12 Math, three per domain, mixed
   difficulty, with at least two student-produced responses in Math. The timer
   is advisory: it is shown but never cuts the student off.

   The result is deliberately NOT a SAT score. It is a mastery map marked
   'preliminary, few data points', plus a recommended starting phase. The
   profile stays at level 'undetermined' until a real test result is imported.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var PER_DOMAIN = 3;
  var MIN_MATH_SPR = 2;

  /**
   * Three questions per domain, one of each difficulty where the bank allows,
   * preferring questions the student has not seen. The seed is derived from the
   * profile so the set is stable across reloads but differs between students.
   */
  function buildSet() {
    var state = S.state();
    var seed = U.weakHash(state.profile.email + '|' + state.profile.createdAt)
      .split('').reduce(function (h, c) { return (h * 31 + c.charCodeAt(0)) >>> 0; }, 7);
    var seen = state.seenQuestionIds || [];
    var picked = [];

    ['rw', 'math'].forEach(function (section) {
      JTS.skills.domains(section).forEach(function (domain, di) {
        var pool = JTS.bank.query({ section: section, domains: [domain.id] });
        var fresh = pool.filter(function (q) { return seen.indexOf(q.id) < 0; });
        var source = fresh.length >= PER_DOMAIN ? fresh : pool;
        var take = [];
        [1, 2, 3].forEach(function (d) {
          var byDiff = U.shuffle(source.filter(function (q) {
            return q.difficulty === d && take.indexOf(q) < 0;
          }), seed + di * 13 + d);
          if (byDiff.length) take.push(byDiff[0]);
        });
        /* Top up from whatever is left if a difficulty band was empty. */
        U.shuffle(source, seed + di).forEach(function (q) {
          if (take.length < PER_DOMAIN && take.indexOf(q) < 0) take.push(q);
        });
        picked = picked.concat(take.slice(0, PER_DOMAIN));
      });
    });

    /* Guarantee the Math half exercises the student-produced response format. */
    var math = picked.filter(function (q) { return q.section === 'math'; });
    var sprCount = math.filter(function (q) { return q.type === 'spr'; }).length;
    if (sprCount < MIN_MATH_SPR) {
      for (var i = 0; i < picked.length && sprCount < MIN_MATH_SPR; i++) {
        var cur = picked[i];
        if (cur.section !== 'math' || cur.type === 'spr') continue;
        var alt = U.shuffle(JTS.bank.query({
          section: 'math', domains: [JTS.skills.get(cur.skillId).domain]
        }).filter(function (q) {
          return q.type === 'spr' && picked.indexOf(q) < 0;
        }), seed + i)[0];
        if (alt) { picked[i] = alt; sprCount++; }
      }
    }

    return picked.map(function (q) { return q.id; });
  }

  function startDiagnostic() {
    var ids = buildSet();
    JTS.session.start({
      kind: 'diagnostic',
      mode: 'diagnostic',
      title: t('diag.title'),
      questionIds: ids,
      durationMs: 0,          /* count up: advisory only */
      softTimer: true,
      returnHash: '#/diagnostic',
      finishHash: '#/diagnostic'
    });
  }

  /** Per-domain accuracy over this run only. */
  function domainBreakdown(summary) {
    var byDomain = {};
    summary.questionIds.forEach(function (qid) {
      var q = JTS.bank.get(qid);
      if (!q) return;
      var skill = JTS.skills.get(q.skillId);
      if (!skill) return;
      var d = byDomain[skill.domain] || (byDomain[skill.domain] = { total: 0, correct: 0, answered: 0 });
      d.total++;
      var a = summary.answers[qid];
      if (a.selected !== null && a.selected !== '') d.answered++;
      if (a.correct) d.correct++;
    });
    return byDomain;
  }

  /** Starting phase from overall accuracy — a recommendation, not a score. */
  function recommendPhase(summary) {
    var acc = summary.total ? 0 : 0;
    var answered = summary.answered || 0;
    acc = answered ? summary.correct / summary.questionIds.length : 0;
    if (acc < 0.4) return 2;        /* Foundations */
    if (acc < 0.7) return 3;        /* Deep practice */
    return 4;                       /* Timed practice */
  }

  function renderResult(root, summary) {
    var screen = U.el('div.container.screen.stack');
    root.appendChild(screen);

    var phase = recommendPhase(summary);
    var phaseKey = JTS.planner.phases.filter(function (p) { return p.id === phase; })[0].key;

    screen.appendChild(U.el('div.stack-sm', null, [
      U.el('div.eyebrow', { text: t('diag.title') }),
      U.el('h1.h1', { text: t('diag.resultTitle') })
    ]));

    /* The first thing on the page is what this result is not. */
    screen.appendChild(U.el('div.notice.notice-warn', null, [
      U.el('span', null, [U.el('b', { text: t('diag.noScore') })])
    ]));

    screen.appendChild(U.el('div.grid.grid-3', null, [
      U.el('div.card.card-sm', null, [U.el('div.stat', null, [
        U.el('div.stat-label', { text: t('common.correct') }),
        U.el('div.stat-value', { text: summary.correct + ' / ' + summary.questionIds.length })
      ])]),
      U.el('div.card.card-sm', null, [U.el('div.stat', null, [
        U.el('div.stat-label', { text: t('common.time') }),
        U.el('div.stat-value', { text: U.fmtLongTime(summary.elapsedMs) })
      ])]),
      U.el('div.card.card-sm', null, [U.el('div.stat', null, [
        U.el('div.stat-label', { text: t('diag.recommendedPhase', { phase: '' }).replace(/:.*$/, '') }),
        U.el('div.stat-value', { text: t('plan.phase.' + phaseKey) })
      ])])
    ]));

    var breakdown = domainBreakdown(summary);
    var card = U.el('div.card.stack');
    card.appendChild(U.el('div.row-between', null, [
      U.el('h2.h2', { text: t('progress.byDomain') }),
      U.el('span.badge.badge-muted', { text: t('diag.preliminary') })
    ]));
    JTS.skills.domains().forEach(function (d) {
      var b = breakdown[d.id];
      if (!b) return;
      card.appendChild(U.el('div.stack-sm', null, [
        U.el('div.row-between', null, [
          U.el('span.small', { text: JTS.i18n.pickName(d) }),
          U.el('span.small.muted.num', { text: b.correct + '/' + b.total })
        ]),
        ui.bar(b.correct, b.total, b.correct / b.total >= 0.7 ? 'bar-ok' : b.correct / b.total >= 0.4 ? 'bar-warn' : '')
      ]));
    });
    screen.appendChild(card);

    screen.appendChild(U.el('div.row.row-wrap', null, [
      U.el('button.btn.btn-primary.btn-lg', {
        type: 'button', text: t('diag.toPlan'),
        onclick: function () {
          S.update(function (s) { s.profile.currentPhase = phase; });
          JTS.planner.generate();
          S.update(function (s) { s.profile.onboardingComplete = true; });
          JTS.shell.renderHeader();
          JTS.router.go('#/today');
        }
      }),
      U.el('a.btn', { href: '#/progress', text: t('progress.title') })
    ]));

    screen.appendChild(U.el('p.hint', { text: t('diag.lead') }));
  }

  function renderIntro(root) {
    var screen = U.el('div.container.screen', { style: 'max-width:640px' });
    root.appendChild(screen);
    var card = U.el('div.card.stack');
    card.appendChild(U.el('h1.h1', { text: t('diag.title') }));
    card.appendChild(U.el('p.muted', { text: t('diag.lead') }));
    card.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge', { text: '12 R&W' }),
      U.el('span.badge', { text: '12 Math' }),
      U.el('span.badge.badge-muted', { text: t('diag.preliminary') })
    ]));
    card.appendChild(U.el('div.notice', { text: t('diag.noScore') }));
    card.appendChild(U.el('button.btn.btn-primary.btn-lg.btn-block', {
      type: 'button', text: t('diag.start'), onclick: startDiagnostic
    }));
    screen.appendChild(card);
  }

  JTS.router.register('#/diagnostic', {
    title: 'diag.title',
    render: function (root, route) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      /* A diagnostic already in flight always wins: resume it. */
      var active = JTS.session.current();
      if (active && active.kind === 'diagnostic') { JTS.router.go('#/question'); return; }

      if (route.query.session) {
        var summary = JTS.session.summary(route.query.session);
        if (summary) { renderResult(root, summary); return; }
      }

      /* Otherwise show the most recent finished diagnostic, or the intro. */
      var last = (state.sessions || []).filter(function (x) { return x.kind === 'diagnostic'; }).pop();
      if (last && route.query.show !== 'intro') { renderResult(root, last); return; }
      renderIntro(root);
    }
  });

  JTS.diagnostic = { buildSet: buildSet, start: startDiagnostic, recommendPhase: recommendPhase };
})();
