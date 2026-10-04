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

      /* A new exam date changes the plan's length, so the plan is offered a
         rebuild. */
      function doRebuild() {
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
    }
  });
})();
