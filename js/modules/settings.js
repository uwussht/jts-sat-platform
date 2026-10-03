/* ==========================================================================
   Screen: Settings (#/settings)

   Covers the profile, exam date, goals, available time, language and theme,
   the vocabulary goal, and data export/import/reset.

   Changing anything the plan is built from offers to rebuild the plan rather
   than rebuilding it silently: a student halfway through a week should decide
   whether to lose it.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  function card(title, children, subtitle) {
    return U.el('div.card.stack', null, [
      U.el('div.stack-sm', null, [
        U.el('h2.h2', { text: title }),
        subtitle ? U.el('p.small.muted', { text: subtitle }) : null
      ])
    ].concat(children));
  }

  /* --------------------------------------------------------------- screen */
  JTS.router.register('#/settings', {
    title: 'nav.settings',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.stack', { style: 'max-width:1100px' });
      root.appendChild(screen);
      function rerender() { JTS.router.render(); }

      /* Availability changes arrive one click at a time — a confirmation per
         click would be unusable — so they are collected and the offer to
         rebuild is made once, when the student stops. */
      var dirty = false, dirtyTimer = null;
      function doRebuild() {
        dirty = false;
        if (!S.state().plan) { JTS.planner.generate(); }
        else { JTS.planner.rebuild(); }
        ui.toast(t('settings.replanned'), 'ok');
      }
      function offerRebuild() {
        if (!S.state().plan) { rerender(); return; }
        ui.confirm({ title: t('settings.rebuildPlan'), message: t('settings.replanConfirm'),
          okText: t('settings.rebuildPlan') }).then(function (yes) {
          if (yes) doRebuild();
          rerender();
        });
      }
      function markDirty() {
        dirty = true;
        clearTimeout(dirtyTimer);
        dirtyTimer = setTimeout(function () { if (dirty) offerRebuild(); }, 1200);
      }


      /* --- profile --- */
      screen.appendChild(card(t('settings.account'), [
        U.el('div.row-between', null, [
          U.el('div.stack-sm', null, [
            U.el('div', null, [U.el('b', { text: state.profile.email })]),
            U.el('div.small.muted', {
              text: t('common.status') + ': ' + (state.profile.level === 'measured'
                ? (state.baseline ? state.baseline.total + ' (' + state.baseline.source + ')' : '')
                : t('mastery.no-data'))
            })
          ]),
          U.el('button.btn', {
            type: 'button', text: t('auth.logout'),
            onclick: function () {
              JTS.Auth.logout().then(function () {
                JTS.shell.renderHeader();
                JTS.router.go('#/auth');
              });
            }
          })
        ])
      ]));

      /* --- exam date --- */
      var examWrap = U.el('div.stack');
      (function () {
        var ed = state.examDate || {};
        var current = ed.mode === 'date' && ed.testDate ? ed.testDate : null;
        var days = JTS.analytics.daysToExam();

        var select = U.el('select.select', { id: 'set-exam-date' });
        select.appendChild(U.el('option', { value: '', text: t('settings.undecided') }));
        /* Past administrations drop out of the list by themselves; the one
           the student already chose stays so the select can show it. */
        var todayISO = U.iso(U.today());
        (JTS.data.examDates || []).filter(function (d) {
          return d.testDate >= todayISO || d.id === ed.examDateId;
        }).forEach(function (d) {
          var o = U.el('option', {
            value: d.id,
            text: d.testDate + ' · ' + (d.registrationDeadline
              ? t('onb.s1.deadline') + ' ' + d.registrationDeadline
              : t('onb.s1.expected'))
          });
          if (ed.examDateId === d.id) o.selected = true;
          select.appendChild(o);
        });
        select.addEventListener('change', function () {
          var d = (JTS.data.examDates || []).filter(function (x) { return x.id === select.value; })[0];
          S.update(function (st) {
            st.examDate = d
              ? { mode: 'date', examDateId: d.id, testDate: d.testDate,
                  registrationDeadline: d.registrationDeadline, lateDeadline: d.lateDeadline }
              : { mode: 'undecided', examDateId: null, testDate: null, registrationDeadline: null };
          });
          offerRebuild();
        });

        examWrap.appendChild(ui.field(t('settings.exam'), select, t('settings.examChange')));
        examWrap.appendChild(U.el('div.small.muted', {
          text: current
            ? t('onb.s1.countdown', { weeks: Math.max(0, Math.ceil(days / 7)), days: Math.max(0, days) })
            : t('settings.noExamDate')
        }));
        /* Where the dates come from travels with the control: a wrong
           deadline costs a registration. */
        var meta = JTS.data.examDatesMeta || {};
        examWrap.appendChild(meta.verified === false
          ? U.el('div.notice.notice-warn.xsmall', { text: t('onb.s1.provisional', { source: meta.source || '-' }) })
          : U.el('div.xsmall.muted', {
              text: t('onb.s1.datesSource', { date: U.fmtDate(meta.checkedAt, S.settings().uiLang) })
            }));
      })();
      screen.appendChild(card(t('settings.exam'), [examWrap]));

      /* --- goals --- */
      var goalWrap = U.el('div.stack');
      (function () {
        var g = state.goals || { rw: null, math: null, total: null, collegeIds: [] };
        var totalLine = U.el('div.stat-value');

        function paintTotal() {
          var total = (Number(g.rw) || 0) + (Number(g.math) || 0);
          g.total = total || null;
          totalLine.textContent = total ? t('settings.goalTotal', { n: total }) : '—';
        }

        function scoreInput(id, value, key) {
          var input = U.el('input.input', {
            id: id, type: 'number', min: '200', max: '800', step: '10',
            value: value === null || value === undefined ? '' : String(value)
          });
          input.addEventListener('change', function () {
            var v = Number(input.value);
            /* Same rule as the mock importer: a section score is a multiple of
               10 between 200 and 800, or it is not a section score. */
            if (!JTS.mock.validScore(v)) {
              input.value = g[key] === null || g[key] === undefined ? '' : String(g[key]);
              ui.toast(t('mock.invalidScore'), 'err');
              return;
            }
            g[key] = v;
            paintTotal();
            S.update(function (st) {
              st.goals = st.goals || { collegeIds: [] };
              st.goals[key] = v;
              st.goals.total = (Number(st.goals.rw) || 0) + (Number(st.goals.math) || 0) || null;
            });
            ui.toast(t('common.saved'), 'ok');
          });
          return input;
        }

        goalWrap.appendChild(U.el('div.grid.grid-2', null, [
          ui.field(t('onb.s3.targetRw'), scoreInput('set-goal-rw', g.rw, 'rw')),
          ui.field(t('onb.s3.targetMath'), scoreInput('set-goal-math', g.math, 'math'))
        ]));
        goalWrap.appendChild(totalLine);
        paintTotal();
        goalWrap.appendChild(U.el('p.small.muted', { text: t('settings.goalNote') }));
      })();
      screen.appendChild(card(t('settings.goals'), [goalWrap]));

      /* --- available time --- */
      var availWrap = U.el('div.stack');
      (function () {
        var av = state.availability || { days: [], minutesPerSession: 45, intensity: 'standard' };
        var dayNames = [1, 2, 3, 4, 5, 6, 7].map(function (d) { return U.dayLabel(d); });

        var dayRow = U.el('div.row.row-wrap', { role: 'group', 'aria-label': t('settings.availDays') });
        dayNames.forEach(function (name, i) {
          var dow = i + 1;
          var on = av.days.indexOf(dow) >= 0;
          var chip = U.el('button.chip', {
            type: 'button', text: name, 'aria-pressed': String(on),
            dataset: { day: String(dow) },
            onclick: function () {
              var idx = av.days.indexOf(dow);
              if (idx >= 0) av.days.splice(idx, 1); else av.days.push(dow);
              av.days.sort();
              chip.setAttribute('aria-pressed', String(av.days.indexOf(dow) >= 0));
              S.update(function (st) { st.availability = av; });
              markDirty();
            }
          });
          dayRow.appendChild(chip);
        });

        var minutes = U.el('select.select', { id: 'set-minutes' });
        [30, 45, 60, 90, 120].forEach(function (m) {
          var o = U.el('option', { value: String(m), text: m + ' ' + t('common.minutes') });
          if (av.minutesPerSession === m) o.selected = true;
          minutes.appendChild(o);
        });
        minutes.addEventListener('change', function () {
          av.minutesPerSession = Number(minutes.value);
          S.update(function (st) { st.availability = av; });
          markDirty();
        });

        var intensity = U.el('select.select', { id: 'set-intensity' });
        ['light', 'standard', 'intensive'].forEach(function (k) {
          var o = U.el('option', { value: k, text: t('onb.intensity.' + k) });
          if (av.intensity === k) o.selected = true;
          intensity.appendChild(o);
        });
        intensity.addEventListener('change', function () {
          av.intensity = intensity.value;
          S.update(function (st) { st.availability = av; });
          markDirty();
        });

        availWrap.appendChild(ui.field(t('settings.availDays'), dayRow));
        availWrap.appendChild(ui.field(t('settings.availMinutes'), minutes));
        availWrap.appendChild(ui.field(t('settings.availIntensity'), intensity));
        availWrap.appendChild(U.el('button.btn', {
          type: 'button', text: t('settings.rebuildPlan'),
          onclick: function () { doRebuild(); }
        }));
      })();
      screen.appendChild(card(t('settings.availability'), [availWrap]));

      /* --- vocabulary --- */
      (function () {
        var goalRow = U.el('div.row.row-wrap', { role: 'group', 'aria-label': t('settings.vocabGoal') });
        JTS.vocab.GOALS.forEach(function (n) {
          var chip = U.el('button.chip', {
            type: 'button', text: String(n),
            'aria-pressed': String(JTS.vocab.state().dailyGoal === n),
            'aria-label': t('settings.vocabGoal') + ' ' + n,
            dataset: { vocabGoal: String(n) },
            onclick: function () {
              JTS.vocab.setGoal(n);
              U.$$('button', goalRow).forEach(function (b) {
                b.setAttribute('aria-pressed', String(Number(b.dataset.vocabGoal) === n));
              });
            }
          });
          goalRow.appendChild(chip);
        });
        screen.appendChild(card(t('vocab.title'), [
          ui.field(t('settings.vocabGoal'), goalRow),
          U.el('a.btn', { href: '#/vocab', text: t('vocab.title') })
        ]));
      })();

      /* --- language and theme --- */
      var uiLang = U.el('select.select', { id: 'set-ui-lang' });
      var exLang = U.el('select.select', { id: 'set-explain-lang' });
      [['en', 'English'], ['ru', 'Русский'], ['kk', 'Қазақша']].forEach(function (l) {
        var a = U.el('option', { value: l[0], text: l[1] });
        if (JTS.i18n.lang === l[0]) a.selected = true;
        uiLang.appendChild(a);
        var b = U.el('option', { value: l[0], text: l[1] });
        if (S.settings().explainLang === l[0]) b.selected = true;
        exLang.appendChild(b);
      });
      uiLang.addEventListener('change', function () {
        JTS.i18n.setLang(uiLang.value);
        JTS.shell.renderHeader();
        rerender();
      });
      exLang.addEventListener('change', function () {
        S.update(function (s) { s.settings.explainLang = exLang.value; });
        ui.toast(t('common.saved'), 'ok');
      });

      var theme = U.el('select.select', { id: 'set-theme' });
      [['light', t('settings.theme.light')], ['dark', t('settings.theme.dark')]].forEach(function (o) {
        var e = U.el('option', { value: o[0], text: o[1] });
        if ((S.settings().theme || 'light') === o[0]) e.selected = true;
        theme.appendChild(e);
      });
      theme.addEventListener('change', function () {
        S.update(function (s) { s.settings.theme = theme.value; });
        document.documentElement.setAttribute('data-theme', theme.value);
      });

      screen.appendChild(card(t('common.language'), [
        U.el('div.grid.grid-2', null, [
          ui.field(t('settings.uiLang'), uiLang),
          ui.field(t('settings.explainLang'), exLang)
        ]),
        ui.field(t('settings.theme'), theme)
      ]));

      /* --- AI provider --- */

      /* --- data --- */
      var importArea = U.el('textarea.textarea', { id: 'set-import', placeholder: '{ "profile": … }', style: 'min-height:90px' });
      screen.appendChild(card(t('common.export') + ' / ' + t('common.import'), [
        U.el('div.row.row-wrap', null, [
          U.el('button.btn', {
            type: 'button', text: t('settings.exportProfile'),
            onclick: function () {
              U.download('jts-profile-' + U.iso(new Date()) + '.json', S.exportProfile());
            }
          }),
          U.el('a.btn', { href: '#/desmos-guide', text: t('settings.desmosGuide') }),
          U.el('a.btn', { href: 'admin.html', text: t('admin.title') })
        ]),
        ui.field(t('settings.importProfile'), importArea),
        U.el('div.row.row-wrap', null, [
          U.el('button.btn', {
            type: 'button', text: t('common.import'),
            onclick: function () {
              var res = S.importProfile(importArea.value);
              if (!res.ok) return ui.toast('Import failed: ' + res.reason, 'err');
              JTS.shell.applyProfileSettings();
              JTS.shell.renderHeader();
              ui.toast(t('common.saved'), 'ok');
              JTS.router.go('#/today');
            }
          }),
          /* The screen tours are shown once and then never again, which is
             right until someone wants them back. */
          U.el('button.btn', {
            type: 'button', text: t('tour.replay'),
            onclick: function () {
              JTS.tour.reset();
              ui.toast(t('tour.replayDone'), 'ok');
            }
          }),
          U.el('button.btn.btn-danger', {
            type: 'button', text: t('settings.resetProfile'),
            onclick: function () {
              ui.confirm({ title: t('settings.resetProfile'), message: t('settings.resetConfirm'),
                okText: t('common.delete') }).then(function (yes) {
                if (!yes) return;
                S.resetProfile();
                JTS.shell.renderHeader();
                JTS.router.go('#/onboarding');
              });
            }
          })
        ]),
        U.el('p.hint', { text: t('settings.bankInfo', { n: JTS.bank.all().length }) })
      ], t('settings.dataNote')));
    }
  });
})();
