/* ==========================================================================
   Screen: Onboarding (#/onboarding) — five steps, progress bar, and a save
   after every step so a reload never costs the student their answers.

   The rule that shapes this screen: a score is never invented. A student
   without a measured result keeps level 'undetermined' and is routed to the
   diagnostic at step 5 instead of being assigned a number.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var TOTAL_STEPS = 5;

  /* ---------------------------------------------------------------- helpers */

  /* Settings edits the same availability, so the weekday naming lives in
     JTS.util rather than here. */
  var dayLabel = U.dayLabel;

  function scoreInput(id, value, onInput) {
    var el = U.el('input.input', {
      type: 'number', id: id, min: '200', max: '800', step: '10',
      inputmode: 'numeric', value: (value === null || value === undefined) ? '' : String(value)
    });
    if (onInput) el.addEventListener('input', onInput);
    return el;
  }

  function validScore(v) {
    var n = Number(v);
    return String(v).trim() !== '' && !isNaN(n) && n >= 200 && n <= 800 && n % 10 === 0;
  }

  /** Weekly minutes decide intensity — it is derived, never asked for blind. */
  function intensityFor(days, minutes) {
    var weekly = (days || []).length * (minutes || 0);
    if (weekly < 180) return 'light';
    if (weekly <= 420) return 'standard';
    return 'intensive';
  }

  function radioCard(name, checked, title, subtitle, onSelect) {
    var input = U.el('input', { type: 'radio', name: name, checked: checked || null });
    var label = U.el('label.check.check-card', null, [
      input,
      U.el('span', null, [
        U.el('b', { text: title, style: 'display:block' }),
        subtitle ? U.el('span.small.muted', { text: subtitle }) : null
      ])
    ]);
    input.addEventListener('change', function () { if (input.checked) onSelect(); });
    return label;
  }

  /* ------------------------------------------------------------------ steps */

  /* Step 1 — exam date, from the reference file rather than hard-coded in UI. */
  function step1(body, state, refresh) {
    var chosen = state.examDate || null;
    var todayISO = U.iso(U.today());
    var dates = (JTS.data.examDates || []).filter(function (d) { return d.testDate >= todayISO; });
    var meta = JTS.data.examDatesMeta || {};

    body.appendChild(U.el('h2.h2', { text: t('onb.s1.title') }));

    if (meta.verified === false) {
      body.appendChild(U.el('div.notice.notice-warn', {
        text: t('onb.s1.provisional', { source: meta.source || '\u2014' })
      }));
    }

    /* Selecting a date must not redraw the step: a full redraw would drop
       keyboard focus and scroll the student back to the top of the list. */
    var countdown = U.el('div.notice.notice-ok', { hidden: true });
    function updateCountdown() {
      var cur = S.state().examDate;
      if (cur && cur.mode === 'date') {
        var n = U.daysBetween(U.today(), U.parseISO(cur.testDate));
        countdown.textContent = t('onb.s1.countdown', { weeks: Math.ceil(n / 7), days: n });
        countdown.hidden = false;
      } else {
        countdown.hidden = true;
      }
    }

    var list = U.el('div.stack-sm');
    dates.forEach(function (d) {
      var days = U.daysBetween(U.today(), U.parseISO(d.testDate));
      /* A date whose late-registration window has already closed is still shown
         (a student may already be registered) but is labelled, so nobody picks
         it expecting to sign up. */
      var closed = d.lateDeadline < todayISO;
      var sub = (closed ? t('onb.s1.regClosed') + ' · ' : '') +
                t('onb.s1.deadline') + ': ' + U.fmtDate(d.registrationDeadline) +
                ' · ' + t('onb.s1.lateDeadline') + ': ' + U.fmtDate(d.lateDeadline) +
                ' · ' + t('onb.s1.region') + ': ' + d.region.join(', ');
      list.appendChild(radioCard('examdate',
        chosen && chosen.examDateId === d.id,
        U.fmtDate(d.testDate) + '  ·  ' + Math.ceil(days / 7) + ' ' + t('common.weeks'),
        sub,
        function () {
          S.patch({ examDate: {
            mode: 'date', examDateId: d.id, testDate: d.testDate,
            registrationDeadline: d.registrationDeadline, lateDeadline: d.lateDeadline
          } });
          updateCountdown();
        }));
    });

    list.appendChild(radioCard('examdate',
      chosen && chosen.mode === 'undecided',
      t('onb.s1.undecided'), t('onb.s1.undecidedNote'),
      function () {
        S.patch({ examDate: { mode: 'undecided', examDateId: null, testDate: null,
          registrationDeadline: null, lateDeadline: null } });
        updateCountdown();
      }));

    body.appendChild(list);
    body.appendChild(countdown);
    updateCountdown();

    return function valid() { return !!S.state().examDate; };
  }

  /* Step 2 — a measured result, or an honest 'undetermined'. */
  function step2(body, state, refresh) {
    var hasResult = !!state.baseline;
    body.appendChild(U.el('h2.h2', { text: t('onb.s2.title') }));

    var choice = U.el('div.stack-sm');
    choice.appendChild(radioCard('baseline', hasResult, t('onb.s2.have'), null, function () {
      S.update(function (s) {
        s.baseline = s.baseline || { rw: null, math: null, total: null, date: U.iso(U.today()), source: '' };
      });
      refresh();
    }));
    choice.appendChild(radioCard('baseline', !hasResult, t('onb.s2.none'), t('onb.s2.noneNote'), function () {
      S.update(function (s) { s.baseline = null; s.profile.level = 'undetermined'; });
      refresh();
    }));
    body.appendChild(choice);

    if (!hasResult) {
      body.appendChild(U.el('div.notice', null, [
        U.el('span', null, [U.el('b', { text: t('mastery.no-data') + '. ' }), t('onb.s2.noneNote')])
      ]));
      return function valid() { return true; };
    }

    var b = state.baseline;
    var totalOut = U.el('div.stat-value', { text: b.total ? String(b.total) : '—' });
    var err = U.el('div.error-text', { role: 'alert', hidden: true });

    function recalc() {
      var rw = rwIn.value, ma = maIn.value;
      if (validScore(rw) && validScore(ma)) {
        var total = Number(rw) + Number(ma);
        totalOut.textContent = String(total);
        S.update(function (s) { s.baseline.rw = Number(rw); s.baseline.math = Number(ma); s.baseline.total = total; });
      } else {
        totalOut.textContent = '—';
        S.update(function (s) { s.baseline.rw = validScore(rw) ? Number(rw) : null;
                                s.baseline.math = validScore(ma) ? Number(ma) : null;
                                s.baseline.total = null; });
      }
    }

    var rwIn = scoreInput('b-rw', b.rw, recalc);
    var maIn = scoreInput('b-math', b.math, recalc);

    var dateIn = U.el('input.input', { type: 'date', id: 'b-date', value: b.date || '', max: U.iso(U.today()) });
    dateIn.addEventListener('change', function () {
      S.update(function (s) { s.baseline.date = dateIn.value; });
    });

    var srcSel = U.el('select.select', { id: 'b-src' });
    [['', '—'], ['Official SAT', t('onb.s2.srcOfficial')],
     ['Bluebook Practice Test', t('onb.s2.srcBluebook')], ['Other', t('onb.s2.srcOther')]
    ].forEach(function (o) {
      var opt = U.el('option', { value: o[0], text: o[1] });
      if ((b.source || '').indexOf(o[0]) === 0 && o[0]) opt.selected = true;
      srcSel.appendChild(opt);
    });
    var srcDetail = U.el('input.input', {
      type: 'text', placeholder: 'e.g. Bluebook Practice Test 6',
      value: b.source && b.source.indexOf(srcSel.value) === 0 ? b.source.slice(srcSel.value.length).trim() : ''
    });
    function saveSource() {
      var v = (srcSel.value + ' ' + srcDetail.value).trim();
      S.update(function (s) { s.baseline.source = srcSel.value ? v : ''; });
    }
    srcSel.addEventListener('change', saveSource);
    srcDetail.addEventListener('input', saveSource);

    var grid = U.el('div.grid.grid-2');
    grid.appendChild(ui.field(t('onb.s2.rw'), rwIn));
    grid.appendChild(ui.field(t('onb.s2.math'), maIn));
    body.appendChild(grid);
    body.appendChild(U.el('div.card.card-sm.card-flat', null, [
      U.el('div.stat', null, [U.el('div.stat-label', { text: t('onb.s2.total') }), totalOut])
    ]));
    var grid2 = U.el('div.grid.grid-2');
    grid2.appendChild(ui.field(t('onb.s2.date'), dateIn));
    grid2.appendChild(ui.field(t('onb.s2.source'), srcSel));
    body.appendChild(grid2);
    body.appendChild(srcDetail);
    body.appendChild(err);

    return function valid() {
      var s = S.state().baseline;
      if (!validScore(s.rw) || !validScore(s.math)) { err.textContent = t('onb.s2.errRange'); err.hidden = false; return false; }
      if (!s.date) { err.textContent = t('onb.s2.errDate'); err.hidden = false; return false; }
      if (!s.source) { err.textContent = t('onb.s2.errSource'); err.hidden = false; return false; }
      err.hidden = true;
      S.update(function (st) { st.profile.level = 'measured'; });
      return true;
    };
  }

  /* Step 3 — target scores, with universities as reference only. */
  function step3(body, state, refresh) {
    var g = state.goals || { rw: 650, math: 700, total: 1350, collegeIds: [] };
    body.appendChild(U.el('h2.h2', { text: t('onb.s3.title') }));

    var totalOut = U.el('div.stat-value', { text: String(g.rw + g.math) });
    var needOut = U.el('div.small.muted');
    var err = U.el('div.error-text', { role: 'alert', hidden: true });

    function recalc() {
      var rw = rwIn.value, ma = maIn.value;
      if (!validScore(rw) || !validScore(ma)) { totalOut.textContent = '—'; needOut.textContent = ''; return; }
      var total = Number(rw) + Number(ma);
      totalOut.textContent = String(total);
      S.update(function (s) {
        s.goals = s.goals || { collegeIds: [] };
        s.goals.rw = Number(rw); s.goals.math = Number(ma); s.goals.total = total;
        s.goals.collegeIds = s.goals.collegeIds || [];
      });
      var base = S.state().baseline;
      needOut.textContent = base && base.total
        ? t('onb.s3.needed', { n: Math.max(0, total - base.total) })
        : t('onb.s3.neededUnknown');
    }

    var rwIn = scoreInput('g-rw', g.rw, recalc);
    var maIn = scoreInput('g-math', g.math, recalc);

    var grid = U.el('div.grid.grid-2');
    grid.appendChild(ui.field(t('onb.s3.targetRw'), rwIn));
    grid.appendChild(ui.field(t('onb.s3.targetMath'), maIn));
    body.appendChild(grid);
    body.appendChild(U.el('div.card.card-sm.card-flat', null, [
      U.el('div.stat', null, [U.el('div.stat-label', { text: t('onb.s2.total') }), totalOut, needOut])
    ]));

    /* Reference list. Only SAT-relevant policies appear; test-blind is absent. */
    var colleges = (JTS.data.colleges || []).filter(function (c) {
      return c.testPolicy === 'required' || c.testPolicy === 'optional';
    });
    var cmeta = JTS.data.collegesMeta || {};
    body.appendChild(U.el('h3.h3', { text: t('onb.s3.colleges'), style: 'margin-top:8px' }));
    var cList = U.el('div.stack-sm');
    function paint(row, on) {
      row.style.borderColor = on ? 'var(--brand-600)' : '';
      row.style.background = on ? 'var(--brand-050)' : '';
      row.setAttribute('aria-pressed', String(on));
    }
    colleges.forEach(function (c) {
      var selected = (S.state().goals && S.state().goals.collegeIds || []).indexOf(c.id) >= 0;
      var row = U.el('button.check-card', {
        type: 'button', 'aria-pressed': String(selected),
        style: 'width:100%;text-align:left;cursor:pointer',
        onclick: function () {
          var nowOn;
          S.update(function (s) {
            s.goals = s.goals || { collegeIds: [] };
            s.goals.collegeIds = s.goals.collegeIds || [];
            var i = s.goals.collegeIds.indexOf(c.id);
            if (i >= 0) { s.goals.collegeIds.splice(i, 1); nowOn = false; }
            else {
              s.goals.collegeIds.push(c.id);
              nowOn = true;
              /* Prefill targets from the middle of the published band, rounded
                 to a reportable 10-point score. */
              var mid = function (r) { return Math.round(((r[0] + r[1]) / 2) / 10) * 10; };
              s.goals.rw = mid(c.midSAT.rw);
              s.goals.math = mid(c.midSAT.math);
              s.goals.total = s.goals.rw + s.goals.math;
            }
          });
          paint(row, nowOn);
          if (nowOn) {
            var g2 = S.state().goals;
            rwIn.value = String(g2.rw);
            maIn.value = String(g2.math);
          }
          recalc();
        }
      }, [
        U.el('div.row-between', null, [
          U.el('b', { text: c.name }),
          U.el('span.badge' + (c.testPolicy === 'required' ? '.badge-warn' : '.badge-muted'),
               { text: t('onb.s3.policy.' + c.testPolicy) })
        ]),
        U.el('div.small.muted', {
          text: t('onb.s3.midSat') + ': ' + c.midSAT.total[0] + '–' + c.midSAT.total[1] +
                ' (R&W ' + c.midSAT.rw[0] + '–' + c.midSAT.rw[1] +
                ', Math ' + c.midSAT.math[0] + '–' + c.midSAT.math[1] + ')'
        })
      ]);
      paint(row, selected);
      cList.appendChild(row);
    });
    body.appendChild(cList);
    body.appendChild(U.el('p.hint', {
      text: t('onb.s3.collegeNote', { year: colleges[0] ? colleges[0].year : '—', source: cmeta.defaultSource || '—' }) +
            (cmeta.verified === false ? ' ' + (cmeta.note || '') : '')
    }));
    body.appendChild(err);

    recalc();

    return function valid() {
      if (!validScore(rwIn.value) || !validScore(maIn.value)) {
        err.textContent = t('onb.s2.errRange'); err.hidden = false; return false;
      }
      err.hidden = true; return true;
    };
  }

  /* Step 4 — real available time; intensity is computed from it, not guessed. */
  function step4(body, state, refresh) {
    var a = state.availability || { days: [], minutesPerSession: 60, intensity: 'standard' };
    body.appendChild(U.el('h2.h2', { text: t('onb.s4.title') }));

    var err = U.el('div.error-text', { role: 'alert', hidden: true });
    var summary = U.el('div.notice');

    function save() {
      var days = U.$$('input[data-dow]', body).filter(function (i) { return i.checked; })
        .map(function (i) { return Number(i.dataset.dow); });
      var mins = Number((U.$$('input[name=mins]', body).filter(function (i) { return i.checked; })[0] || {}).value || 60);
      var intensity = intensityFor(days, mins);
      S.patch({ availability: { days: days, minutesPerSession: mins, intensity: intensity } });
      summary.textContent = t('onb.s4.intensity', {
        level: t('onb.intensity.' + intensity), minutes: days.length * mins
      });
    }

    var dayRow = U.el('div.row.row-wrap');
    for (var dow = 1; dow <= 7; dow++) {
      (function (d) {
        var cb = U.el('input', { type: 'checkbox', checked: a.days.indexOf(d) >= 0 || null, dataset: { dow: String(d) } });
        cb.addEventListener('change', save);
        dayRow.appendChild(U.el('label.check.check-card', { style: 'min-width:84px' }, [
          cb, U.el('span', { text: dayLabel(d) })
        ]));
      })(dow);
    }
    body.appendChild(ui.field(t('onb.s4.days'), dayRow));

    var minRow = U.el('div.row.row-wrap');
    [30, 60, 90, 120].forEach(function (m) {
      var r = U.el('input', { type: 'radio', name: 'mins', value: String(m),
        checked: a.minutesPerSession === m || null });
      r.addEventListener('change', save);
      minRow.appendChild(U.el('label.check.check-card', { style: 'min-width:96px' }, [
        r, U.el('span', { text: m + ' ' + t('common.minutes') })
      ]));
    });
    body.appendChild(ui.field(t('onb.s4.minutes'), minRow));

    var langSel = U.el('select.select');
    [['en', 'English'], ['ru', 'Русский'], ['kk', 'Қазақша']].forEach(function (l) {
      var o = U.el('option', { value: l[0], text: l[1] });
      if (S.settings().explainLang === l[0]) o.selected = true;
      langSel.appendChild(o);
    });
    langSel.addEventListener('change', function () {
      S.update(function (s) { s.settings.explainLang = langSel.value; });
    });
    body.appendChild(ui.field(t('onb.s4.explainLang'), langSel));

    body.appendChild(summary);
    body.appendChild(err);
    save();

    return function valid() {
      var av = S.state().availability;
      if (!av || !av.days.length) { err.textContent = t('onb.s4.errDays'); err.hidden = false; return false; }
      err.hidden = true; return true;
    };
  }

  /* Step 5 — diagnostic for an undetermined level, otherwise a plan preview. */
  function step5(body, state) {
    body.appendChild(U.el('h2.h2', { text: t('onb.s5.title') }));
    var undetermined = state.profile.level === 'undetermined';

    if (undetermined) {
      body.appendChild(U.el('div.notice.notice-warn', { text: t('onb.s5.diagLead') }));
      body.appendChild(U.el('div.card.card-sm.card-flat.stack-sm', null, [
        U.el('div.row', null, [
          U.el('span.badge', { text: '12 R&W' }),
          U.el('span.badge', { text: '12 Math' }),
          U.el('span.badge.badge-muted', { text: t('diag.preliminary') })
        ]),
        U.el('p.small.muted', { text: t('diag.lead') })
      ]));
      return { valid: function () { return true; }, finishLabel: t('onb.s5.startDiag') };
    }

    /* A measured result is on file, so a plan can be previewed straight away. */
    var plan = JTS.planner.generate();
    var week = plan.weeks[0];
    body.appendChild(U.el('div.notice.notice-ok', { text: t('onb.s5.planLead') }));
    body.appendChild(U.el('h3.h3', { text: t('onb.s5.preview') }));

    var phases = U.el('div.phase-track');
    JTS.planner.phases.forEach(function (p) {
      phases.appendChild(U.el('div' + (p.id === week.phaseId ? '.current' : ''),
        { text: t('plan.phase.' + p.key) }));
    });
    body.appendChild(phases);

    var lessons = U.el('div.stack-sm');
    week.lessons.forEach(function (l) {
      lessons.appendChild(U.el('div.card.card-sm.card-flat', null, [
        U.el('div.row-between', null, [
          U.el('b', { text: U.fmtDate(l.date) }),
          U.el('span.badge.badge-muted', { text: t('today.expected', { n: l.expectedMinutes }) })
        ]),
        U.el('div.small', { text: l.skillIds.map(function (id) { return JTS.skills.name(id); }).join(' · ') }),
        U.el('div.row.row-wrap', { style: 'margin-top:6px' },
          l.actions.map(function (a) { return U.el('span.badge', { text: t('plan.action.' + a) }); }))
      ]));
    });
    body.appendChild(lessons);
    body.appendChild(U.el('p.hint', { text: t('plan.lessonsThisWeek', { n: week.lessons.length }) }));

    return { valid: function () { return true; }, finishLabel: t('onb.s5.go') };
  }

  /* ------------------------------------------------------------------ shell */

  JTS.router.register('#/onboarding', {
    title: 'onb.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var step = U.clamp(state.profile.onboardingStep || 1, 1, TOTAL_STEPS);
      var screen = U.el('div.container.screen', { style: 'max-width:720px' });
      root.appendChild(screen);

      function refresh() { draw(); }

      function draw() {
        U.clear(screen);
        state = S.state();

        var steps = U.el('ol.steps', { 'aria-label': t('onb.step', { n: step }) });
        for (var i = 1; i <= TOTAL_STEPS; i++) {
          steps.appendChild(U.el('li' + (i < step ? '.done' : i === step ? '.current' : '')));
        }
        screen.appendChild(U.el('div.stack-sm', { style: 'margin-bottom:18px' }, [
          U.el('div.row-between', null, [
            U.el('div.eyebrow', { text: t('onb.title') }),
            U.el('div.small.muted', { text: t('onb.step', { n: step }) })
          ]),
          steps
        ]));

        var card = U.el('div.card.stack');
        var body = U.el('div.stack');
        card.appendChild(body);
        screen.appendChild(card);

        var result;
        if (step === 1) result = { valid: step1(body, state, refresh) };
        else if (step === 2) result = { valid: step2(body, state, refresh) };
        else if (step === 3) result = { valid: step3(body, state, refresh) };
        else if (step === 4) result = { valid: step4(body, state, refresh) };
        else result = step5(body, state);

        var back = U.el('button.btn', {
          type: 'button', text: t('common.back'), disabled: step === 1 || null,
          onclick: function () {
            step--;
            S.update(function (s) { s.profile.onboardingStep = step; });
            draw();
          }
        });
        var next = U.el('button.btn.btn-primary', {
          type: 'button',
          text: step === TOTAL_STEPS ? (result.finishLabel || t('common.finish')) : t('common.next'),
          onclick: function () {
            if (!result.valid()) return;
            if (step < TOTAL_STEPS) {
              step++;
              S.update(function (s) { s.profile.onboardingStep = step; });
              draw();
              return;
            }
            /* Finish: the plan exists either way, so the app is usable. A
               student with no measured result goes to the diagnostic first;
               the diagnostic rebuilds the plan from what it measures. */
            var undetermined = S.state().profile.level === 'undetermined';
            if (!S.state().plan) JTS.planner.generate();
            S.update(function (s) {
              s.profile.onboardingComplete = true;
              s.profile.onboardingStep = TOTAL_STEPS;
            });
            JTS.shell.renderHeader();
            JTS.router.go(undetermined ? '#/diagnostic' : '#/today');
          }
        });

        card.appendChild(U.el('div.row-between', { style: 'margin-top:8px' }, [back, next]));
      }

      draw();
    }
  });
})();
