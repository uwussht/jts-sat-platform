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

  /**
   * Advice is chosen from the share correct in that domain, and it says what
   * to do rather than how it went. Three bands, because a diagnostic gives
   * three questions per domain and pretending to more resolution than that
   * would be dishonest.
   */
  function adviceFor(share) {
    if (share >= 0.7) return { key: 'strong', cls: 'ok' };
    if (share >= 0.34) return { key: 'shaky', cls: 'warn' };
    return { key: 'weak', cls: 'danger' };
  }

  function sectionShare(summary, section) {
    var correct = 0, total = 0;
    summary.questionIds.forEach(function (qid) {
      var q = JTS.bank.get(qid);
      if (!q || q.section !== section) return;
      total++;
      if (summary.answers[qid] && summary.answers[qid].correct) correct++;
    });
    return { correct: correct, total: total, share: total ? correct / total : 0 };
  }

  function pctRow(label, correct, total, extra) {
    var share = total ? correct / total : 0;
    var pct = Math.round(share * 100);
    var a = adviceFor(share);
    return U.el('div.stack-sm', null, [
      U.el('div.row-between.row-wrap', null, [
        U.el('span.small', null, [U.el('b', { text: label })]),
        U.el('span.small.num', null, [
          U.el('b', { text: pct + '%' }),
          U.el('span.muted', { text: '  ' + correct + '/' + total })
        ])
      ]),
      ui.bar(correct, total, a.cls === 'ok' ? 'bar-ok' : a.cls === 'warn' ? 'bar-warn' : ''),
      extra || null
    ]);
  }

  /** Before the plan exists there is no app frame, so these screens carry one. */
  function setupHeader(screen) {
    if (S.state().profile.onboardingComplete) return;
    screen.appendChild(JTS.shell.setupBar());
  }

  function renderResult(root, summary) {
    var screen = U.el('div.container.screen.stack-lg', { style: 'max-width:1100px' });
    root.appendChild(screen);
    setupHeader(screen);

    var phase = recommendPhase(summary);
    var phaseKey = JTS.planner.phases.filter(function (p) { return p.id === phase; })[0].key;
    var totalQ = summary.questionIds.length;
    var overall = totalQ ? summary.correct / totalQ : 0;
    var rw = sectionShare(summary, 'rw');
    var math = sectionShare(summary, 'math');

    screen.appendChild(U.el('div.stack-sm', null, [
      U.el('div.eyebrow', { text: t('diag.title') }),
      U.el('h1.h1', { text: t('diag.resultTitle') })
    ]));

    /* The first thing on the page is what this result is not. */
    screen.appendChild(U.el('div.notice.notice-warn', null, [
      U.el('span', null, [U.el('b', { text: t('diag.noScore') })])
    ]));

    /* The headline is a percentage, which is the only honest summary of 24
       questions: it says how much of what was asked came back right, and
       nothing about where that lands on a 400-1600 scale. */
    screen.appendChild(U.el('div.card.card-hero.stack-sm', null, [
      U.el('div.eyebrow', { text: t('diag.overall') }),
      U.el('div', { style: 'font-size:46px;font-weight:750;line-height:1;letter-spacing:-.02em',
                    text: Math.round(overall * 100) + '%' }),
      U.el('div.small.muted', {
        text: t('diag.correctOf', { correct: summary.correct, total: totalQ }) +
              ' · ' + U.fmtLongTime(summary.elapsedMs)
      })
    ]));

    screen.appendChild(U.el('div.grid.grid-2', null, [
      U.el('div.card.stack-sm', null, [pctRow(t('common.rw'), rw.correct, rw.total)]),
      U.el('div.card.stack-sm', null, [pctRow(t('common.math'), math.correct, math.total)])
    ]));

    /* ---------------------------------------------------- domain breakdown */
    var breakdown = domainBreakdown(summary);
    var card = U.el('div.card.stack');
    card.appendChild(U.el('div.row-between.row-wrap', null, [
      U.el('h2.h2', { text: t('diag.byDomain') }),
      U.el('span.badge.badge-muted', { text: t('diag.preliminary') })
    ]));
    card.appendChild(U.el('p.small.muted', { text: t('diag.adviceLead') }));

    var ranked = [];
    JTS.skills.domains().forEach(function (d) {
      var b = breakdown[d.id];
      if (!b || !b.total) return;
      var share = b.correct / b.total;
      ranked.push({ domain: d, share: share, b: b });
      var a = adviceFor(share);
      card.appendChild(pctRow(
        JTS.i18n.pickName(d), b.correct, b.total,
        U.el('div.small', null, [
          U.el('span.badge.badge-' + a.cls, { text: t('diag.band.' + a.key) }),
          U.el('span.muted', { text: '  ' + t('diag.advice.' + a.key) })
        ])
      ));
    });
    screen.appendChild(card);

    /* The two weakest domains, weighted by how much of the exam they carry,
       are the ones the plan will open with. Naming them here is the whole
       point of having run the diagnostic. */
    ranked.sort(function (x, y) {
      var wx = U.sum(JTS.skills.all().filter(function (sk) { return sk.domain === x.domain.id; })
                 .map(function (sk) { return sk.examWeight; }));
      var wy = U.sum(JTS.skills.all().filter(function (sk) { return sk.domain === y.domain.id; })
                 .map(function (sk) { return sk.examWeight; }));
      return ((1 - x.share) * wx) < ((1 - y.share) * wy) ? 1 : -1;
    });
    var focus = ranked.slice(0, 2);
    if (focus.length) {
      screen.appendChild(U.el('div.card.card-accent.stack-sm', null, [
        U.el('div.eyebrow', { text: t('diag.startWith') }),
        U.el('div.h2', { text: focus.map(function (f) { return JTS.i18n.pickName(f.domain); }).join(' · ') }),
        U.el('p.small.muted', { text: t('diag.startWithNote', { phase: t('plan.phase.' + phaseKey) }) }),
        U.el('a.btn.btn-sm', { href: '#/roadmap', text: t('diag.seeRoadmap') })
      ]));
    }

    /* -------------------------------------------------- availability → plan */
    var first = S.state().profile.onboardingComplete !== true;
    var planCard = U.el('div.card.stack');
    planCard.appendChild(U.el('h2.h2', { text: first ? t('diag.buildPlan') : t('settings.rebuildPlan') }));
    planCard.appendChild(U.el('p.small.muted', {
      text: first ? t('diag.buildPlanLead') : t('diag.replanLead')
    }));
    var availValid = JTS.onboarding.availabilityBlock(planCard, S.state(), function () {});
    planCard.appendChild(U.el('button.btn.btn-primary.btn-lg.btn-block', {
      type: 'button', text: first ? t('diag.toPlan') : t('settings.rebuildPlan'),
      onclick: function () {
        if (!availValid()) return;
        S.update(function (s) { s.profile.currentPhase = phase; });
        /* A first run generates the plan; a retake rebuilds the weeks that are
           still ahead and leaves the ones already spent alone. */
        if (first || !S.state().plan) JTS.planner.generate();
        else JTS.planner.rebuild();
        S.update(function (s) { s.profile.onboardingComplete = true; });
        JTS.shell.renderHeader();
        JTS.router.go('#/today');
      }
    }));
    screen.appendChild(planCard);

    if (!first) {
      screen.appendChild(U.el('div.row.row-wrap', null, [
        U.el('a.btn', { href: '#/diagnostic?show=intro', text: t('diag.retake') }),
        U.el('a.btn', { href: '#/progress', text: t('progress.title') })
      ]));
    }
  }

  function renderIntro(root) {
    var state = S.state();
    var last = (state.sessions || []).filter(function (x) { return x.kind === 'diagnostic'; }).pop();

    var screen = U.el('div.container.screen', { style: 'max-width:820px' });
    root.appendChild(screen);
    setupHeader(screen);
    var card = U.el('div.card.stack');
    card.appendChild(U.el('h1.h1', { text: t('diag.title') }));
    card.appendChild(U.el('p.muted', { text: t('diag.lead') }));

    /* Taking it again is a normal thing to do, and the previous result is not
       thrown away by doing so — every attempt stays in the history. */
    if (last) {
      card.appendChild(U.el('div.notice.stack-sm', null, [
        U.el('div.stack-sm', null, [
          U.el('div', null, [U.el('b', { text: t('diag.alreadyTaken', {
            date: U.fmtDate(new Date(last.finishedAt), S.settings().uiLang)
          }) })]),
          U.el('div.small', { text: t('diag.retakeNote') }),
          U.el('a.btn.btn-sm', { href: '#/diagnostic', text: t('diag.viewLast') })
        ])
      ]));
    }
    card.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge', { text: '12 R&W' }),
      U.el('span.badge', { text: '12 Math' }),
      U.el('span.badge.badge-muted', { text: t('diag.preliminary') })
    ]));
    card.appendChild(U.el('div.notice', { text: t('diag.noScore') }));
    card.appendChild(U.el('button.btn.btn-primary.btn-lg.btn-block', {
      type: 'button', text: last ? t('diag.retake') : t('diag.start'), onclick: startDiagnostic
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
