/* ==========================================================================
   Screen: My plan (#/plan)

   Three things live here: the phase track (what stage of preparation this is),
   the week grid (what happens on which day) and the month calendar (where the
   whole thing is going). The week and the month are two views of one plan, not
   two plans — both read JTS.planner.allLessons().

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
    var current = JTS.planner.currentPhase();
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

  /**
   * One month of the plan. Lessons are matched by date, exactly as the week
   * grid does it, so a moved lesson appears on the day it moved to.
   */
  function monthView(state, rerender) {
    var wrap = U.el('div.stack-sm');
    var cursor = U.today();
    cursor.setDate(1);

    var examISO = state.examDate && state.examDate.testDate;
    var todayISO = U.iso(U.today());

    var head = U.el('div.row-between.row-wrap');
    var grid = U.el('div.cal-month');
    wrap.appendChild(head);
    /* Seven readable columns do not fit a phone, so the month scrolls inside
       its own box rather than widening the page. */
    wrap.appendChild(U.el('div.cal-month-wrap', null, [grid]));

    function paint() {
      U.clear(head); U.clear(grid);

      var label = cursor.toLocaleDateString(
        { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' }[JTS.i18n.lang] || 'en-US',
        { month: 'long', year: 'numeric' });
      head.appendChild(U.el('div.h3', { text: label }));
      head.appendChild(U.el('div.row.row-wrap', null, [
        U.el('button.btn.btn-sm', {
          type: 'button', text: '←', 'aria-label': t('plan.prevMonth'),
          onclick: function () { cursor.setMonth(cursor.getMonth() - 1); paint(); }
        }),
        U.el('button.btn.btn-sm', {
          type: 'button', text: t('plan.thisMonth'),
          onclick: function () { cursor = U.today(); cursor.setDate(1); paint(); }
        }),
        U.el('button.btn.btn-sm', {
          type: 'button', text: '→', 'aria-label': t('plan.nextMonth'),
          onclick: function () { cursor.setMonth(cursor.getMonth() + 1); paint(); }
        })
      ]));

      for (var d = 1; d <= 7; d++) {
        grid.appendChild(U.el('div.cal-dow', { text: U.dayLabel(d) }));
      }

      /* The grid starts on the Monday on or before the 1st, so the columns
         stay weekdays rather than drifting a day each month. */
      var first = new Date(cursor);
      var shift = (first.getDay() + 6) % 7;
      var start = U.addDays(first, -shift);
      var month = cursor.getMonth();
      var lessons = JTS.planner.allLessons();

      for (var i = 0; i < 42; i++) {
        var day = U.addDays(start, i);
        var iso = U.iso(day);
        var outside = day.getMonth() !== month;
        var cell = U.el('div.cal-cell' +
          (outside ? '.cal-out' : '') +
          (iso === todayISO ? '.cal-today' : '') +
          (iso === examISO ? '.cal-exam' : ''));
        cell.appendChild(U.el('div.cal-num', { text: String(day.getDate()) }));

        if (iso === examISO) {
          cell.appendChild(U.el('div.cal-tag.cal-tag-exam', { text: t('roadmap.examDay') }));
        }
        var onDay = lessons.filter(function (l) { return l.date === iso; });
        onDay.forEach(function (lesson) {
          var cls = STATUS_CLASS[lesson.status];
          var n = JTS.programme ? JTS.programme.numberOf(lesson) : null;
          cell.appendChild(U.el('button.cal-tag' + (cls ? '.' + cls : ''), {
            type: 'button',
            title: lesson.skillIds.map(function (id) { return JTS.skills.name(id); }).join(' · '),
            text: (n ? t('prog.lessonNo', { n: n }) + ' · ' : '') +
              lesson.actions.map(function (a) { return t('plan.action.' + a); }).join(' · '),
            onclick: function (e) { e.stopPropagation(); lessonModal(lesson, rerender); }
          }));
        });
        /* The whole square opens the day, not just the chip inside it: on a
           calendar the thing you press is a date. */
        if (!outside) {
          cell.classList.add('is-tappable');
          cell.setAttribute('role', 'button');
          cell.setAttribute('tabindex', '0');
          cell.setAttribute('aria-label', U.fmtDate(day, S.settings().uiLang));
          (function (dayLessons, dayISO) {
            function open() { dayModal(dayISO, dayLessons, rerender); }
            cell.addEventListener('click', open);
            cell.addEventListener('keydown', function (e) {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
            });
          })(onDay, iso);
        }
        grid.appendChild(cell);
      }
    }

    paint();
    return wrap;
  }

  /**
   * A day, opened from the calendar. Everything the programme sets for it
   * lives here now — the lesson, its topics, the homework with its numbers —
   * rather than in a card under the month, where it was the same words on
   * every day and belonged to none of them.
   */
  function dayModal(iso, dayLessons, rerender) {
    if (dayLessons.length === 1) return lessonModal(dayLessons[0], rerender);
    var m;
    var body = U.el('div.stack');
    if (!dayLessons.length) {
      body.appendChild(U.el('p.muted', { text: t('prog.dayEmpty') }));
    }
    dayLessons.forEach(function (lesson) {
      var n = JTS.programme ? JTS.programme.numberOf(lesson) : null;
      var detail = n && JTS.programme ? JTS.programme.lessonDetail(n) : null;
      body.appendChild(U.el('div.card.card-sm.stack-sm', null, [
        U.el('div.row-between.row-wrap', null, [
          U.el('b', { text: t('plan.goalFor', {
            skills: lesson.skillIds.map(function (id) { return JTS.skills.name(id); }).join(', ')
          }) }),
          U.el('button.btn.btn-sm', {
            type: 'button', text: t('common.open'),
            onclick: function () { m.close(); lessonModal(lesson, rerender); }
          })
        ]),
        detail
      ]));
    });
    m = ui.modal({ title: U.fmtDate(U.parseISO(iso), S.settings().uiLang), content: body, wide: true });
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
        /* The programme's half of the day: which of the 48 lessons this is,
           the topics it covers, and the homework that follows it. */
        (function () {
          if (!JTS.programme) return null;
          var n = JTS.programme.numberOf(lesson);
          return n ? JTS.programme.lessonDetail(n) : null;
        })(),
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

      screen.appendChild(U.el('div.card.stack-sm', null, [
        ui.bar(done, total || 1, 'bar-ok'),
        U.el('div.small.muted', {
          text: done + ' / ' + total + ' · ' + t('plan.status.done')
        })
      ]));

      /* The month and the week are two views of the same lessons. The month is
         first: a week is what you do next, but a plan is a shape, and the
         shape only appears at the length of a month — which weeks are heavy,
         where the checkpoints fall, how much of the run to the exam is left.
         The week is still a click away for the day's work. */
      screen.appendChild(U.el('div.card', null, [ui.tabs([
        {
          id: 'month', label: t('plan.viewMonth'),
          render: function (host) { host.appendChild(monthView(state, rerender)); }
        },
        {
          id: 'week', label: t('plan.viewWeek'),
          render: function (host) {
            host.appendChild(U.el('div.row-between.row-wrap', { style: 'margin-bottom:12px' }, [
              U.el('div.stack-sm', null, [
                U.el('div.h3', { text: t('plan.week', { n: idx + 1 }) }),
                U.el('div.small.muted', { text: t('plan.lessonsThisWeek', { n: week.lessons.length }) })
              ]),
              U.el('div.row.row-wrap', null, [
                U.el('a.btn.btn-sm', {
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
            ]));
            host.appendChild(weekGrid(week, rerender));
          }
        }
      ])]));

      /* The homework and the topic tables used to sit here, under the month,
         where they were the same words on every day and belonged to none of
         them. They are inside the calendar now: press a day and it tells you
         which of the 48 lessons it is, what it covers, and what is set after
         it. The full tag tables stay reachable, folded, for the question a
         day cannot answer — "when do we do M17". */
      if (JTS.programme) {
        var tablesBody = U.el('div.acc-body.stack-sm', { hidden: true });
        var tablesCaret = U.el('span.caret', { text: '❯' });
        var tablesHead = U.el('button.acc-head', {
          type: 'button', 'aria-expanded': 'false',
          onclick: function () {
            var now = tablesBody.hidden;
            tablesBody.hidden = !now;
            tablesHead.setAttribute('aria-expanded', String(now));
            tablesCaret.style.transform = now ? 'rotate(90deg)' : '';
          }
        }, [tablesCaret, U.el('b', { text: t('prog.topicsTitle') })]);
        tablesBody.appendChild(U.el('p.small.muted', { text: t('prog.topicsLead') }));
        tablesBody.appendChild(ui.tabs([
          { id: 'math', label: t('common.math'),
            render: function (host) { host.appendChild(JTS.programme.topicTable('math')); } },
          { id: 'rw', label: t('common.rw'),
            render: function (host) { host.appendChild(JTS.programme.topicTable('rw')); } }
        ]));
        screen.appendChild(U.el('div.card', { id: 'prog-topics' }, [
          U.el('div.acc', null, [tablesHead, tablesBody])
        ]));
      }

      screen.appendChild(U.el('div.legend', null,
        [['', 'planned'], ['done', 'done'], ['skipped', 'skipped'], ['moved', 'moved']]
          .map(function (pair) {
            return U.el('span', null, [
              U.el('span.cal-swatch' + (pair[0] ? '.' + pair[0] : '')),
              ' ' + t('plan.status.' + pair[1])
            ]);
          })));
      screen.appendChild(U.el('p.hint', { text: t('plan.rebuildNote') }));
    }
  });
})();
