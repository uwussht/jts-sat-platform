/* ==========================================================================
   Course plan pieces, drawn the same way on every screen that shows them:

     JTS.courseUI.phaseStrip(plan)   the phases as a strip, "phase N of M",
                                     and what the current phase is about —
                                     the dashboard and #/plan draw the same one
     JTS.courseUI.fitBanner(plan)    does the course fit before the exam
     JTS.courseUI.scoreModal(test)   enter a Bluebook result (Test 6, 8, 10)
     JTS.courseUI.testCard(plan, id) one Bluebook test: instructions, link,
                                     the result and its confirmation state
     JTS.courseUI.lessonStatus(l)    a lesson's status as a badge

   And one screen: #/tests — the three Bluebook tests and the comparison,
   scores Test 6 → 8 → 10 in one block and the domain map in another.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;
  var BLUEBOOK_URL = 'https://bluebook.collegeboard.org/';
  var TEST_NO = { pt6: 6, pt8: 8, pt10: 10 };

  function lang() { return S.settings().uiLang; }
  function fmt(iso) { return iso ? U.fmtDate(U.parseISO(iso), lang()) : '—'; }
  function fmtShort(iso) {
    if (!iso) return '—';
    var loc = { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' }[lang()] || 'en-US';
    try { return U.parseISO(iso).toLocaleDateString(loc, { day: 'numeric', month: 'short' }); }
    catch (e) { return iso; }
  }

  /* -------------------------------------------------------------- phases */

  function phaseDates(p) {
    if (p.kind === 'point' || p.start === p.end) return fmtShort(p.start);
    return fmtShort(p.start) + ' – ' + fmtShort(p.end);
  }

  function phaseSub(p) {
    if (p.lessons) {
      return t('phase.lessons', { from: p.lessons[0], to: p.lessons[1] }) + ' · ' +
        t('phase.weeks', { from: p.weeks[0], to: p.weeks[1] });
    }
    if (p.key === 'selfStudy') return t('phase.days', { n: p.days });
    return phaseDates(p);
  }

  /**
   * The phases in a row, with the current one called out. The counter counts
   * phases 1–6 that this student has (5 without the extra package); self-study
   * and exam day are on the strip but not in the count.
   */
  function phaseStrip(plan, opts) {
    opts = opts || {};
    if (!plan) return null;
    var cur = plan.phases.filter(function (p) { return p.id === plan.current; })[0];
    var strip = U.el('ol.ph-strip', { 'aria-label': t('phase.stripLabel') });
    plan.phases.forEach(function (p) {
      var cls = '.ph-item.is-' + p.state + (p.kind === 'point' ? '.is-point' : '');
      strip.appendChild(U.el('li' + cls, { 'aria-current': p.state === 'current' ? 'step' : null }, [
        U.el('span.ph-dot', { 'aria-hidden': 'true',
          text: p.state === 'done' ? '✓' : p.state === 'incomplete' ? '!' : (p.counted ? String(p.id) : p.key === 'examDay' ? '★' : '•') }),
        U.el('span.ph-name', { text: t('phase.' + p.id + '.short') }),
        U.el('span.ph-when', { text: phaseDates(p) })
      ]));
    });

    var head = U.el('div.ph-head', null, [
      U.el('div.stack-sm', null, [
        U.el('div.eyebrow', { text: plan.phaseCounter.n
          ? t('phase.counter', { n: plan.phaseCounter.n, of: plan.phaseCounter.of })
          : t('phase.' + plan.current + '.short') }),
        /* #/plan leaves out the phase's long name: the strip right under it
           already says where the student is. */
        cur && !opts.noTitle ? U.el('div.h2', { text: t('phase.' + cur.id + '.name') }) : null
      ]),
      U.el('div.row.row-wrap.ph-meta', null, [
        U.el('span.badge.badge-muted', { text: t('phase.lessonsDone', { n: plan.done, of: plan.total }) }),
        U.el('span.badge.badge-muted', { text: t('phase.weekOf', { n: plan.week.now, of: plan.week.of }) }),
        opts.link ? U.el('a.small', { href: opts.link, text: t('nav.plan') + ' →' }) : null
      ])
    ]);
    var box = U.el('div.card.stack.ph-card', { id: opts.id || null }, [
      head,
      U.el('div.ph-strip-wrap', null, [strip]),
      cur ? U.el('p.small.muted.ph-lead', { text: t('phase.' + cur.id + '.lead') }) : null,
      /* An empty bar reads as a broken line: shown once a lesson is done. */
      plan.done ? U.el('div.bar-wrap', null, [ui.bar(plan.done, plan.total, plan.done === plan.total ? 'bar-ok' : '')]) : null
    ]);
    /* A test that was not sat stays visible until its scores are in. */
    plan.phases.forEach(function (p) {
      if (p.state === 'incomplete' && p.test) {
        box.appendChild(U.el('div.notice.notice-warn.row-between.row-wrap', null, [
          U.el('span.small', { text: t('phase.testMissing', { n: TEST_NO[p.test] }) }),
          U.el('button.btn.btn-sm', { type: 'button', text: t('tests.enter'),
            onclick: function () { scoreModal(p.test); } })
        ]));
      }
    });
    return box;
  }

  /* ----------------------------------------------------------------- fit */

  /** The nearest SAT date far enough away for what is left. */
  function nearestDateFor(weeks) {
    var after = U.iso(U.addDays(U.today(), weeks * 7));
    return (JTS.data.examDates || []).filter(function (d) { return d.testDate >= after; })
      .sort(function (a, b) { return a.testDate < b.testDate ? -1 : 1; })[0] || null;
  }

  /**
   * Nothing when there is room; a soft note when there is no room for a missed
   * week; the facts and the ways out when the course does not fit. The
   * schedule is the school's, so the ways out are the manager's to take.
   */
  function fitBanner(plan) {
    if (!plan || !plan.fit || plan.fit.state === 'ok' || plan.fit.state === 'none') return null;
    var f = plan.fit;
    if (f.state === 'tight') {
      return U.el('div.notice.fit-banner.is-tight', { id: 'fit-banner' }, [
        U.el('b', { text: t('fit.tightTitle') }),
        U.el('div.small', { text: t('fit.tight', { left: f.weeksLeft, need: f.weeksNeeded }) })
      ]);
    }
    var later = nearestDateFor(f.weeksNeeded);
    var ways = U.el('ol.fit-ways.small', null, [
      U.el('li', { text: t('fit.wayPace') }),
      U.el('li', { text: t('fit.wayShorten') }),
      U.el('li', { text: later ? t('fit.wayMoveTo', { date: fmt(later.testDate) }) : t('fit.wayMove') })
    ]);
    return U.el('div.notice.notice-warn.fit-banner.is-short.stack-sm', { id: 'fit-banner' }, [
      U.el('b', { text: t('fit.shortTitle') }),
      U.el('div.small', { text: t('fit.short', { left: f.weeksLeft, need: f.weeksNeeded, missing: f.missing }) }),
      U.el('div.small', { text: t('fit.waysLead') }),
      ways,
      U.el('div.row.row-wrap', null, [
        U.el('a.btn.btn-sm.btn-primary', { href: JTS.config.links.whatsapp, target: '_blank', rel: 'noopener',
          text: t('fit.contact') }),
        U.el('a.btn.btn-sm', { href: '#/settings', text: t('settings.exam') })
      ])
    ]);
  }

  /* -------------------------------------------------------------- scores */

  function statusBadge(status, comment) {
    if (status === 'pending') return U.el('span.badge.badge-warn', { text: t('tests.pending'), title: t('tests.pendingNote') });
    if (status === 'confirmed') return U.el('span.badge.badge-ok', { text: t('tests.confirmed') });
    if (status === 'rejected') return U.el('span.badge.badge-danger', { text: t('tests.rejected'), title: comment || '' });
    return null;
  }

  /**
   * Enter a Bluebook result: R&W and Math, the total follows. With `test`,
   * it is one of the course's three tests; without, any result.
   */
  function scoreModal(test, onDone) {
    var m;
    var err = U.el('div.error-text', { role: 'alert', hidden: true });
    var date = U.el('input.input', { type: 'date', value: U.iso(U.today()), max: U.iso(U.today()) });
    function sec(id) {
      return U.el('input.input', { type: 'number', id: id, min: '200', max: '800', step: '10', inputmode: 'numeric' });
    }
    var rw = sec('score-rw'), math = sec('score-math');
    var total = U.el('b.score-total', { text: '—' });
    function sum() {
      var a = Number(rw.value), b = Number(math.value);
      total.textContent = a && b ? String(a + b) : '—';
    }
    rw.addEventListener('input', sum); math.addEventListener('input', sum);
    var source = U.el('select.select', null, ['bluebook', 'official', 'other'].map(function (s) {
      return U.el('option', { value: s, text: t('mock.source.' + s) });
    }));
    function ok(v) { v = Number(v); return v >= 200 && v <= 800 && v % 10 === 0; }

    var body = U.el('div.stack', null, [
      test ? U.el('p.small.muted', { text: t('tests.enterLead', { n: TEST_NO[test] }) }) : null,
      ui.field(t('tests.date'), date),
      U.el('div.auth-row', null, [ui.field(t('common.rw'), rw), ui.field(t('common.math'), math)]),
      U.el('div.row-between', null, [U.el('span.small.muted', { text: t('tests.total') }), total]),
      test ? null : ui.field(t('tests.source'), source),
      JTS.course.isServer() ? U.el('div.notice.small', { text: t('tests.pendingNote') }) : null,
      err
    ]);
    var save = U.el('button.btn.btn-primary', {
      type: 'button', text: t('common.save'),
      onclick: function () {
        if (!ok(rw.value) || !ok(math.value)) {
          err.textContent = t('tests.errScore'); err.hidden = false; return;
        }
        save.disabled = true;
        JTS.course.scores.add({
          test: test || null, source: test ? 'bluebook' : source.value,
          date: date.value || U.iso(U.today()), rw: rw.value, math: math.value
        }).then(function (res) {
          save.disabled = false;
          if (!res.ok) {
            err.textContent = t(res.reason === 'confirmed' ? 'tests.errConfirmed' : 'tests.errSave');
            err.hidden = false; return;
          }
          m.close();
          ui.toast(t(JTS.course.isServer() ? 'tests.sentToCurator' : 'tests.saved'), 'ok');
          if (onDone) onDone(); else JTS.router.render();
        });
      }
    });
    m = ui.modal({
      title: test ? t('tests.name', { n: TEST_NO[test] }) : t('mock.addResult'),
      content: body, actions: [save]
    });
    rw.focus();
  }

  /** One Bluebook test of the course, as a card. */
  function testCard(plan, id, rerender) {
    var test = plan && plan.tests.filter(function (x) { return x.id === id; })[0];
    if (!test) return null;
    var sc = test.score;
    var card = U.el('div.card.stack-sm.test-card', null, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.stack-sm', null, [
          U.el('div.eyebrow', { text: t('phase.' + test.phase + '.short') }),
          U.el('div.h3', { text: t('tests.name', { n: TEST_NO[id] }) })
        ]),
        sc ? statusBadge(sc.status) : U.el('span.badge.badge-muted', { text: t('tests.when', { date: fmt(test.date) }) })
      ]),
      U.el('p.small.muted', { text: t('tests.how.' + id) })
    ]);
    if (sc) {
      card.appendChild(U.el('div.row.row-wrap.test-scores', null, [
        U.el('span', null, [U.el('b', { text: String(sc.total) }), U.el('span.xsmall.muted', { text: ' ' + t('tests.total') })]),
        sc.rw ? U.el('span.small.muted', { text: t('common.rwShort') + ' ' + sc.rw }) : null,
        sc.math ? U.el('span.small.muted', { text: t('common.math') + ' ' + sc.math }) : null
      ]));
    }
    var rejected = JTS.course.scores.list().filter(function (r) { return r.test === id && r.status === 'rejected'; }).pop();
    if (rejected && (!sc || sc.status === 'rejected')) {
      card.appendChild(U.el('div.notice.notice-warn.small', { text: t('tests.rejectedNote', { comment: rejected.comment || '' }) }));
    }
    card.appendChild(U.el('div.row.row-wrap', null, [
      U.el('a.btn.btn-sm', { href: BLUEBOOK_URL, target: '_blank', rel: 'noopener', text: t('tests.openBluebook') }),
      !sc || sc.status !== 'confirmed'
        ? U.el('button.btn.btn-sm.btn-primary', { type: 'button', text: sc ? t('tests.edit') : t('tests.enter'),
            onclick: function () { scoreModal(id, rerender); } })
        : null
    ]));
    return card;
  }

  function lessonStatus(l) {
    var cls = { done: '.badge-ok', missed: '.badge-danger', moved: '.badge-warn', next: '', planned: '.badge-muted' }[l.status] || '.badge-muted';
    return U.el('span.badge' + cls, { text: t('lstatus.' + l.status) });
  }

  /* ------------------------------------------------------------ #/tests */

  function delta(a, b) {
    if (a == null || b == null) return '';
    var d = b - a;
    return (d > 0 ? '+' : d < 0 ? '−' : '±') + Math.abs(d);
  }

  /** Scores and their growth, by section, Test 6 → 8 → 10. */
  function scoresBlock(plan) {
    var tests = (plan ? plan.tests : []).filter(function (x) { return x.score; });
    var box = U.el('div.card.stack', { id: 'tests-scores' }, [
      U.el('div.eyebrow', { text: t('tests.scoresTitle') }),
      U.el('p.small.muted', { text: t('tests.scoresLead') })
    ]);
    if (!tests.length) { box.appendChild(U.el('p.small', { text: t('tests.none') })); return box; }
    var table = U.el('table.table.tests-table');
    var head = U.el('tr', null, [U.el('th', { text: '' })].concat(tests.map(function (x) {
      return U.el('th', null, [U.el('div', { text: t('tests.name', { n: TEST_NO[x.id] }) }),
        statusBadge(x.score.status)]);
    })));
    table.appendChild(U.el('thead', null, [head]));
    var tb = U.el('tbody');
    [['total', 'tests.total'], ['rw', 'common.rw'], ['math', 'common.math']].forEach(function (row) {
      var tr = U.el('tr', null, [U.el('th', { text: t(row[1]) })]);
      tests.forEach(function (x, i) {
        var v = x.score[row[0]];
        var prev = i ? tests[i - 1].score[row[0]] : null;
        tr.appendChild(U.el('td', null, [
          U.el('b', { text: v == null ? '—' : String(v) }),
          i ? U.el('span.tests-delta' + ((v - prev) > 0 ? '.is-up' : (v - prev) < 0 ? '.is-down' : ''), { text: ' ' + delta(prev, v) }) : null
        ]));
      });
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    box.appendChild(U.el('div.table-wrap', null, [table]));
    if (tests.length > 1) {
      box.appendChild(ui.lineChart([{
        label: t('tests.total'),
        points: tests.map(function (x, i) { return { x: i, y: x.score.total }; })
      }], { height: 180, ariaLabel: t('tests.scoresTitle') }));
    }
    return box;
  }

  /**
   * The domain map, from the platform's own data — never from the tests,
   * which give three numbers and no domains. Each column is the snapshot
   * saved with that test, and "Now" is the live map.
   */
  function domainBlock() {
    var withSnap = JTS.course.scores.list().filter(function (r) {
      return r.test && r.status !== 'rejected' && r.domainSnapshot;
    });
    var cols = withSnap.map(function (r) { return { label: t('tests.name', { n: TEST_NO[r.test] }), snap: r.domainSnapshot }; });
    var now = JTS.course.domainSnapshot();
    cols.push({ label: t('tests.now'), snap: now });
    var box = U.el('div.card.stack', { id: 'tests-domains' }, [
      U.el('div.eyebrow', { text: t('tests.domainsTitle') }),
      U.el('p.small.muted', { text: t('tests.domainsLead') })
    ]);
    var table = U.el('table.table.tests-table');
    table.appendChild(U.el('thead', null, [U.el('tr', null, [U.el('th', { text: '' })]
      .concat(cols.map(function (c) { return U.el('th', { text: c.label }); })))]));
    var tb = U.el('tbody');
    (JTS.data.domains || []).forEach(function (d) {
      var tr = U.el('tr', null, [U.el('th', { text: d.name_en })]);
      cols.forEach(function (c) {
        var x = (c.snap.domains || []).filter(function (y) { return y.id === d.id; })[0];
        var pri = (c.snap.priorities || []).indexOf(d.id) >= 0;
        tr.appendChild(U.el('td' + (pri ? '.is-priority' : ''), {
          text: x && x.pct != null ? x.pct + '%' : '—',
          title: x ? x.correct + '/' + x.answered : ''
        }));
      });
      tb.appendChild(tr);
    });
    table.appendChild(tb);
    box.appendChild(U.el('div.table-wrap', null, [table]));
    if (now.priorities.length) {
      box.appendChild(U.el('div.small', null, [
        U.el('b', { text: t('tests.priorities') + ': ' }),
        U.el('span', { text: now.priorities.map(function (id) {
          var d = JTS.skills.domain(id); return d ? d.name_en : id;
        }).join(' · ') })
      ]));
    }
    return box;
  }

  JTS.router.register('#/tests', {
    title: 'tests.title',
    render: function (root) {
      if (!S.state()) { JTS.router.go('#/auth'); return; }
      var plan = JTS.course.plan();
      var screen = U.el('div.container.screen.stack');
      root.appendChild(screen);
      function rerender() { JTS.router.render(); }
      screen.appendChild(U.el('p.muted', { text: t('tests.lead') }));
      var grid = U.el('div.grid.grid-3');
      ['pt6', 'pt8', 'pt10'].forEach(function (id) {
        var c = plan && testCard(plan, id, rerender);
        if (c) grid.appendChild(c);
      });
      screen.appendChild(grid);
      screen.appendChild(scoresBlock(plan));
      screen.appendChild(domainBlock());
    }
  });

  /* ----------------------------------------------------------- access */

  function accessText(acc) {
    if (!acc) return '';
    if (acc.type === 'none') return t('access.none');
    return t(acc.type === 'trial' ? 'access.trialEnded' : 'access.fullEnded', { date: fmt(acc.until) });
  }

  /** Days left, the end date counted in. */
  function daysLeft(until) {
    return U.daysBetween(U.today(), U.parseISO(until)) + 1;
  }

  /**
   * On the dashboard: a trial says when it ends, and so does full access in
   * its last week. Nothing for open-ended access.
   */
  function accessBanner() {
    var acc = JTS.Auth.user && JTS.Auth.user.access;
    if (!acc || acc.staff || !acc.active || !acc.until) return null;
    var left = daysLeft(acc.until);
    if (acc.type === 'full' && left > 7) return null;
    return U.el('div.notice.access-banner.row-between.row-wrap' + (left <= 2 ? '.notice-warn' : ''), { id: 'access-banner' }, [
      U.el('span.small', { text: t(acc.type === 'trial' ? 'access.trialUntil' : 'access.fullUntil',
        { date: fmt(acc.until), n: left }) }),
      U.el('a.btn.btn-sm', { href: JTS.config.links.whatsapp, target: '_blank', rel: 'noopener', text: t('access.contact') })
    ]);
  }

  JTS.router.register('#/locked', {
    title: 'access.title',
    render: function (root) {
      var acc = JTS.Auth.user && JTS.Auth.user.access;
      var screen = U.el('div.container.screen', { style: 'max-width:640px' });
      root.appendChild(screen);
      var status = U.el('p.small.muted', { hidden: true });
      screen.appendChild(U.el('div.card.stack.access-lock', null, [
        U.el('div.access-lock-icon', { text: '🔒', 'aria-hidden': 'true' }),
        U.el('h1.h2', { text: t('access.title') }),
        U.el('p', { text: accessText(acc) }),
        U.el('p.small.muted', { text: t('access.lead') }),
        U.el('div.row.row-wrap', null, [
          U.el('a.btn.btn-primary', { href: JTS.config.links.whatsapp, target: '_blank', rel: 'noopener', text: t('access.contact') }),
          U.el('button.btn', { type: 'button', text: t('access.check'), onclick: function () {
            JTS.api('me').then(function (res) {
              if (!res.ok) return;
              JTS.Auth.user = res.user;
              if (res.user.access && res.user.access.active) {
                JTS.course.refresh().then(function () { JTS.shell.renderHeader(); JTS.router.go('#/today'); });
              } else {
                status.textContent = t('access.stillClosed'); status.hidden = false;
              }
            });
          } }),
          U.el('button.btn.btn-ghost', { type: 'button', text: t('auth.logout'), onclick: function () {
            JTS.Auth.logout().then(function () { JTS.shell.renderHeader(); JTS.router.go('#/auth'); });
          } })
        ]),
        status
      ]));
    }
  });

  JTS.courseUI = {
    accessBanner: accessBanner,
    phaseStrip: phaseStrip,
    fitBanner: fitBanner,
    scoreModal: scoreModal,
    testCard: testCard,
    lessonStatus: lessonStatus,
    statusBadge: statusBadge,
    phaseSub: phaseSub,
    fmtShort: fmtShort,
    TEST_NO: TEST_NO
  };
})();
