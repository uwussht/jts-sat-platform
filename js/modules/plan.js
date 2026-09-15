/* ==========================================================================
   Screen: My plan (#/plan)

   Two things live here: the phase track (what stage of preparation this is)
   and the week grid (what actually happens on which day).

   The rule that shapes this screen is that missed sessions are NOT carried
   forward. A plan that accumulates overdue work stops being a plan and becomes
   a guilt ledger, so 'Rebuild' marks what was missed as skipped and rebuilds
   the remaining weeks from current mastery inside the time the student has.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var STATUS_CLASS = { planned: '', done: 'done', skipped: 'skipped', moved: 'moved' };

  function phaseTrack(state) {
    var current = state.profile.currentPhase || 1;
    var track = U.el('div.phase-track', { role: 'list' });
    JTS.planner.phases.forEach(function (p) {
      track.appendChild(U.el('div' + (p.id < current ? '.done' : p.id === current ? '.current' : ''), {
        role: 'listitem', text: t('plan.phase.' + p.key),
        title: t('today.phase', { n: p.id, name: t('plan.phase.' + p.key) })
      }));
    });
    return U.el('div.card.stack-sm', null, [
      U.el('div.eyebrow', { text: t('plan.phases') }),
      track
    ]);
  }

  function lessonModal(lesson, rerender) {
    var m;
    var skills = lesson.skillIds.map(function (id) { return JTS.skills.name(id); });
    var dateInput = U.el('input.input', { type: 'date', value: lesson.date });

    function act(fn) { return function () { fn(); m.close(); rerender(); }; }

    m = ui.modal({
      title: U.fmtDate(lesson.date),
      content: U.el('div.stack', null, [
        U.el('div.stack-sm', null, [
          U.el('div.stat-label', { text: t('today.lessonGoal') }),
          U.el('div', { text: t('plan.goalFor', { skills: skills.join(', ') }) })
        ]),
        U.el('div.row.row-wrap', null, lesson.actions.map(function (a) {
          return U.el('span.badge', { text: t('plan.action.' + a) });
        }).concat([
          U.el('span.badge.badge-muted', { text: t('today.expected', { n: lesson.expectedMinutes }) }),
          U.el('span.badge' + (lesson.status === 'done' ? '.badge-ok' : '.badge-muted'),
               { text: t('plan.status.' + lesson.status) })
        ])),
        lesson.movedFrom
          ? U.el('div.small.muted', { text: t('plan.move') + ': ' + U.fmtDate(lesson.movedFrom) })
          : null,
        ui.field(t('plan.moveTo'), dateInput)
      ]),
      actions: [
        U.el('button.btn', {
          type: 'button', text: t('plan.markSkipped'),
          onclick: act(function () { JTS.planner.setStatus(lesson.id, 'skipped'); })
        }),
        U.el('button.btn', {
          type: 'button', text: t('plan.markDone'),
          onclick: act(function () { JTS.planner.setStatus(lesson.id, 'done'); })
        }),
        U.el('button.btn', {
          type: 'button', text: t('plan.move'),
          onclick: act(function () {
            if (dateInput.value) JTS.planner.move(lesson.id, dateInput.value);
          })
        }),
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('today.startLesson'),
          onclick: function () {
            m.close();
            if (!JTS.planner.startLesson(lesson.id)) ui.toast(t('practice.noQuestions'), 'err');
          }
        })
      ]
    });
  }

  function weekGrid(week, rerender) {
    var monday = U.parseISO(week.monday);
    var todayISO = U.iso(U.today());
    var grid = U.el('div.week-grid');

    for (var i = 0; i < 7; i++) {
      (function (offset) {
        var date = U.addDays(monday, offset);
        var iso = U.iso(date);
        var col = U.el('div.day-col' + (iso === todayISO ? '.today' : ''));
        var loc = { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' }[JTS.i18n.lang] || 'en-US';
        var dayName;
        try { dayName = date.toLocaleDateString(loc, { weekday: 'short' }); }
        catch (e) { dayName = String(offset + 1); }

        col.appendChild(U.el('div.day-name', { text: dayName }));
        col.appendChild(U.el('div.day-date', { text: String(date.getDate()) }));

        /* Lessons are matched by date, so a moved lesson shows up on its new
           day even though it still belongs to the week it was generated in. */
        JTS.planner.allLessons().filter(function (l) { return l.date === iso; })
          .forEach(function (lesson) {
            var cls = STATUS_CLASS[lesson.status];
            col.appendChild(U.el('button.lesson-chip' + (cls ? '.' + cls : ''), {
              type: 'button',
              onclick: function () { lessonModal(lesson, rerender); }
            }, [
              U.el('b', { text: lesson.skillIds.map(function (id) { return JTS.skills.name(id); }).join(' · ') }),
              U.el('span', { text: lesson.actions.map(function (a) { return t('plan.action.' + a); }).join(' · ') })
            ]));
          });

        grid.appendChild(col);
      })(i);
    }
    return grid;
  }

  JTS.router.register('#/plan', {
    title: 'nav.plan',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.container-wide.screen.stack');
      root.appendChild(screen);
      function rerender() { JTS.router.render(); }

      if (!state.plan) {
        screen.appendChild(ui.empty(t('plan.noPlan'), null, U.el('button.btn.btn-primary.btn-lg', {
          type: 'button', text: t('plan.generate'),
          onclick: function () { JTS.planner.generate(); rerender(); }
        })));
        return;
      }

      /* Which week is on screen is view state, not saved progress.
         Open on the first week that actually has upcoming sessions: sign up on
         a Sunday and the calendar week containing today is empty, which reads
         as a broken plan rather than as a week already spent. */
      var weeks = state.plan.weeks;
      var todayISO = U.iso(U.today());
      var idx = weeks.reduce(function (found, w, i) {
        if (found !== -1) return found;
        var hasUpcoming = w.lessons.some(function (l) { return l.date >= todayISO; });
        return hasUpcoming ? i : -1;
      }, -1);
      if (idx === -1) {
        var thisMonday = U.iso(U.weekStart(U.today()));
        idx = weeks.reduce(function (best, w, i) { return w.monday <= thisMonday ? i : best; }, 0);
      }
      if (JTS.router.current && JTS.router.current.query.week) {
        idx = U.clamp(Number(JTS.router.current.query.week), 0, weeks.length - 1);
      }
      var week = weeks[idx];

      JTS.shell.topbarActions(U.el('button.btn.btn-sm', {
        type: 'button', text: t('plan.rebuild'),
        onclick: function () {
          ui.confirm({ title: t('plan.rebuild'), message: t('plan.rebuildNote'), okText: t('plan.rebuild') })
            .then(function (yes) {
              if (!yes) return;
              var fresh = JTS.planner.rebuild();
              ui.toast(t('plan.rebuilt', { n: fresh.skippedCount || 0 }), 'ok');
              JTS.router.go('#/plan');
            });
        }
      }));

      if (state.plan.provisional) {
        screen.appendChild(U.el('div.notice.notice-warn', { text: t('plan.provisional') }));
      }

      screen.appendChild(phaseTrack(state));

      var done = JTS.planner.allLessons().filter(function (l) { return l.status === 'done'; }).length;
      var total = JTS.planner.allLessons().length;

      screen.appendChild(U.el('div.card.stack', null, [
        U.el('div.row-between.row-wrap', null, [
          U.el('div.stack-sm', null, [
            U.el('div.h2', { text: t('plan.week', { n: idx + 1 }) }),
            U.el('div.small.muted', { text: t('plan.lessonsThisWeek', { n: week.lessons.length }) })
          ]),
          U.el('div.row', null, [
            U.el('a.btn.btn-sm' + (idx === 0 ? '' : ''), {
              href: '#/plan?week=' + Math.max(0, idx - 1),
              text: '← ' + t('plan.prevWeek'),
              'aria-disabled': idx === 0 ? 'true' : null
            }),
            U.el('a.btn.btn-sm', { href: '#/plan', text: t('plan.thisWeek') }),
            U.el('a.btn.btn-sm', {
              href: '#/plan?week=' + Math.min(weeks.length - 1, idx + 1),
              text: t('plan.nextWeek') + ' →',
              'aria-disabled': idx === weeks.length - 1 ? 'true' : null
            })
          ])
        ]),
        U.el('div.stack-sm', null, [
          ui.bar(done, total || 1, 'bar-ok'),
          U.el('div.small.muted', {
            text: done + ' / ' + total + ' · ' + t('plan.status.done')
          })
        ]),
        weekGrid(week, rerender)
      ]));

      screen.appendChild(U.el('div.legend', null, [
        U.el('span', { text: t('plan.status.planned') }),
        U.el('span', { text: t('plan.status.done') }),
        U.el('span', { text: t('plan.status.skipped') }),
        U.el('span', { text: t('plan.status.moved') })
      ]));
      screen.appendChild(U.el('p.hint', { text: t('plan.rebuildNote') }));
    }
  });
})();
