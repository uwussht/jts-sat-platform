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

  /* --------------------------------------------------------------- events */

  /* The four kinds of thing the plan puts on a date. A lesson whose actions
     include the mini-test is a checkpoint rather than an ordinary session, and
     the exam and its two registration deadlines are dates the student is
     steering by that the calendar used to know nothing about. */
  var TYPES = ['lesson', 'test', 'deadline', 'exam'];

  function lessonLabel(lesson) {
    var n = JTS.programme ? JTS.programme.numberOf(lesson) : null;
    var actions = lesson.actions.map(function (a) { return t('plan.action.' + a); }).join(' · ');
    return (n ? t('prog.lessonNo', { n: n }) + ' · ' : '') + actions;
  }

  /** date (ISO) -> the events on it, in the order they should be read. */
  function eventsByDay(state) {
    var map = {};
    function put(iso, ev) {
      if (!iso) return;
      (map[iso] = map[iso] || []).push(ev);
    }
    JTS.planner.allLessons().forEach(function (l) {
      put(l.date, {
        type: l.actions.indexOf('mini-test') >= 0 ? 'test' : 'lesson',
        lesson: l,
        label: lessonLabel(l),
        title: l.skillIds.map(function (id) { return JTS.skills.name(id); }).join(' · ')
      });
    });
    var ex = state.examDate || {};
    if (ex.registrationDeadline) {
      put(ex.registrationDeadline, { type: 'deadline', label: t('plan.ev.regDeadline') });
    }
    if (ex.lateDeadline) {
      put(ex.lateDeadline, { type: 'deadline', label: t('plan.ev.lateDeadline') });
    }
    if (ex.testDate) put(ex.testDate, { type: 'exam', label: t('roadmap.examDay') });
    Object.keys(map).forEach(function (iso) {
      map[iso].sort(function (a, b) { return TYPES.indexOf(a.type) - TYPES.indexOf(b.type); });
    });
    return map;
  }

  /**
   * One entry on a day. A lesson is a button because it opens; a deadline and
   * the exam are statements, so they are not.
   */
  function eventChip(ev, rerender, opts) {
    opts = opts || {};
    var status = ev.lesson ? STATUS_CLASS[ev.lesson.status] : '';
    /* The week has room for the skills as well as the label, and a day column
       with three words in it reads as an empty day. */
    var rich = opts.rich && ev.title;
    var cls = '.cal-tag' + (ev.lesson ? '.cal-tag-lesson' : '') + (rich ? '.is-rich' : '') +
      (ev.type === 'exam' ? '.cal-tag-exam' : '') + (status ? '.' + status : '');
    var kids = [
      U.el('span.cal-dot', { 'aria-hidden': 'true' }),
      rich
        ? U.el('span.cal-tag-body', null, [
            U.el('b', { text: ev.title }),
            U.el('span', { text: ev.label })
          ])
        : U.el('span.cal-tag-text', { text: ev.label })
    ];
    if (!ev.lesson) {
      return U.el('div' + cls, { dataset: { type: ev.type }, title: ev.label }, kids);
    }
    return U.el('button' + cls, {
      type: 'button', dataset: { type: ev.type }, title: ev.title || ev.label,
      onclick: function (e) { e.stopPropagation(); lessonModal(ev.lesson, rerender); }
    }, kids);
  }

  /* ------------------------------------------------------------- calendar */

  /**
   * The plan as a calendar: one toolbar, one legend, and whichever of the
   * three views is open. The month is the shape of the plan, the week is the
   * work in front of you, and the list is the answer to "what is next" without
   * counting squares.
   *
   * Which view is open lives in the hash (?view=), so a reload and a link both
   * land where the student was.
   */
  function calendarCard(state, ctx, rerender) {
    var events = eventsByDay(state);
    var todayISO = U.iso(U.today());
    var filter = 'all';

    var cursor = U.today();
    cursor.setDate(1);

    var bar = U.el('div.cal-bar');
    var legend = U.el('div.cal-legend');
    var body = U.el('div.cal-body');
    var card = U.el('div.card.cal', { id: 'plan-calendar' }, [bar, legend, body]);

    function shown(iso) {
      var list = events[iso] || [];
      if (filter === 'all') return list;
      return list.filter(function (ev) { return ev.type === filter; });
    }

    function monthLabel() {
      return cursor.toLocaleDateString(
        { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' }[JTS.i18n.lang] || 'en-US',
        { month: 'long', year: 'numeric' });
    }

    function paintBar() {
      U.clear(bar);
      var nav = U.el('div.cal-nav');

      if (ctx.view === 'month') {
        nav.appendChild(U.el('button.icon-btn.cal-arrow', {
          type: 'button', text: '‹', 'aria-label': t('plan.prevMonth'),
          onclick: function () { cursor.setMonth(cursor.getMonth() - 1); paintBody(); paintBar(); }
        }));
        nav.appendChild(U.el('div.h3.cal-title', { text: monthLabel() }));
        nav.appendChild(U.el('button.icon-btn.cal-arrow', {
          type: 'button', text: '›', 'aria-label': t('plan.nextMonth'),
          onclick: function () { cursor.setMonth(cursor.getMonth() + 1); paintBody(); paintBar(); }
        }));
        nav.appendChild(U.el('button.btn.btn-sm', {
          type: 'button', text: t('plan.today'),
          onclick: function () { cursor = U.today(); cursor.setDate(1); paintBody(); paintBar(); }
        }));
      } else if (ctx.view === 'week') {
        nav.appendChild(U.el('a.icon-btn.cal-arrow' + (ctx.weekIndex === 0 ? '.is-off' : ''), {
          href: ctx.href({ view: 'week', week: Math.max(0, ctx.weekIndex - 1) }),
          text: '‹', 'aria-label': t('plan.prevWeek')
        }));
        nav.appendChild(U.el('div.cal-title-box', null, [
          U.el('div.h3.cal-title', { text: t('plan.week', { n: ctx.weekIndex + 1 }) }),
          U.el('div.small.muted', { text: t('plan.lessonsThisWeek', { n: ctx.week.lessons.length }) })
        ]));
        nav.appendChild(U.el('a.icon-btn.cal-arrow' +
          (ctx.weekIndex === ctx.weekCount - 1 ? '.is-off' : ''), {
          href: ctx.href({ view: 'week', week: Math.min(ctx.weekCount - 1, ctx.weekIndex + 1) }),
          text: '›', 'aria-label': t('plan.nextWeek')
        }));
        nav.appendChild(U.el('a.btn.btn-sm', {
          href: ctx.href({ view: 'week' }), text: t('plan.today')
        }));
      } else {
        nav.appendChild(U.el('div.h3.cal-title', { text: t('plan.agendaRange') }));
      }
      bar.appendChild(nav);

      var seg = U.el('div.cal-seg', { role: 'group', 'aria-label': t('nav.plan') });
      [['month', 'plan.viewMonth'], ['week', 'plan.viewWeek'], ['agenda', 'plan.viewAgenda']]
        .forEach(function (pair) {
          seg.appendChild(U.el('a', {
            href: ctx.href({ view: pair[0] }), text: t(pair[1]),
            'aria-pressed': String(ctx.view === pair[0])
          }));
        });

      var sel = U.el('select.cal-filter', {
        'aria-label': t('plan.filterType'),
        onchange: function () { filter = this.value; paintLegend(); paintBody(); }
      });
      sel.appendChild(U.el('option', { value: 'all', text: t('plan.allTypes') }));
      TYPES.forEach(function (ty) {
        sel.appendChild(U.el('option', { value: ty, text: t('plan.type.' + ty) }));
      });
      sel.value = filter;

      bar.appendChild(U.el('div.cal-bar-right', null, [seg, sel]));
    }

    /* The legend is also the fastest filter: pressing a kind shows only it,
       pressing it again shows everything. */
    function paintLegend() {
      U.clear(legend);
      TYPES.forEach(function (ty) {
        legend.appendChild(U.el('button.cal-key', {
          type: 'button', dataset: { type: ty },
          'aria-pressed': String(filter === ty),
          onclick: function () {
            filter = filter === ty ? 'all' : ty;
            var sel = bar.querySelector('.cal-filter');
            if (sel) sel.value = filter;
            paintLegend(); paintBody();
          }
        }, [
          U.el('span.cal-dot', { 'aria-hidden': 'true' }),
          U.el('span', { text: t('plan.type.' + ty) })
        ]));
      });
    }

    function monthGrid() {
      var wrap = U.el('div.cal-month-wrap');
      var head = U.el('div.cal-head');
      for (var d = 1; d <= 7; d++) head.appendChild(U.el('div.cal-dow', { text: U.dayLabel(d) }));
      var grid = U.el('div.cal-month');

      /* The grid starts on the Monday on or before the 1st, so the columns
         stay weekdays rather than drifting a day each month. */
      var first = new Date(cursor);
      var shift = (first.getDay() + 6) % 7;
      var start = U.addDays(first, -shift);
      var month = cursor.getMonth();

      for (var i = 0; i < 42; i++) {
        (function (day) {
          var iso = U.iso(day);
          var outside = day.getMonth() !== month;
          var list = shown(iso);
          var cell = U.el('div.cal-cell' + (outside ? '.cal-out' : '') +
            (iso === todayISO ? '.cal-today' : '') +
            (events[iso] && events[iso].some(function (e) { return e.type === 'exam'; }) ? '.cal-exam' : ''));
          cell.appendChild(U.el('div.cal-num', { text: String(day.getDate()) }));
          var box = U.el('div.cal-evs');
          list.forEach(function (ev) { box.appendChild(eventChip(ev, rerender)); });
          cell.appendChild(box);

          /* The whole square opens the day, not just the chip inside it: on a
             calendar the thing you press is a date. */
          if (!outside) {
            cell.classList.add('is-tappable');
            cell.setAttribute('role', 'button');
            cell.setAttribute('tabindex', '0');
            cell.setAttribute('aria-label', U.fmtDate(day, S.settings().uiLang));
            /* The filter decides what the square shows at a glance; the day
               it opens is still the whole day, because a modal headed with a
               date that hid half of what is on it would be lying. */
            var lessons = (events[iso] || []).filter(function (ev) { return ev.lesson; })
              .map(function (ev) { return ev.lesson; });
            function open() { dayModal(iso, lessons, rerender); }
            cell.addEventListener('click', open);
            cell.addEventListener('keydown', function (e) {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
            });
          }
          grid.appendChild(cell);
        })(U.addDays(start, i));
      }
      wrap.appendChild(head);
      wrap.appendChild(grid);
      return wrap;
    }

    /** Six weeks of dated entries, as a list. */
    function agenda() {
      var list = U.el('div.cal-agenda');
      var rows = 0;
      for (var i = 0; i < 42; i++) {
        var day = U.addDays(U.today(), i);
        var iso = U.iso(day);
        var evs = shown(iso);
        if (!evs.length) continue;
        rows++;
        var row = U.el('div.cal-ag-row' + (iso === todayISO ? '.is-today' : ''));
        row.appendChild(U.el('div.cal-ag-date', null, [
          U.el('b', { text: String(day.getDate()) }),
          U.el('span', { text: U.dayLabel(((day.getDay() + 6) % 7) + 1) })
        ]));
        var box = U.el('div.cal-ag-evs');
        evs.forEach(function (ev) { box.appendChild(eventChip(ev, rerender)); });
        row.appendChild(box);
        list.appendChild(row);
      }
      if (!rows) return ui.empty(t('plan.agendaEmpty'));
      return list;
    }

    function paintBody() {
      U.clear(body);
      if (ctx.view === 'week') body.appendChild(weekGrid(ctx.week, shown, rerender));
      else if (ctx.view === 'agenda') body.appendChild(agenda());
      else body.appendChild(monthGrid());
    }

    paintBar(); paintLegend(); paintBody();
    return card;
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

  /**
   * The week, built from the same events as the month: the filter and the
   * colours mean the same thing whichever view is open, and a deadline that
   * falls in this week is on it.
   */
  function weekGrid(week, list, rerender) {
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

        /* Events are matched by date, so a moved lesson shows up on its new
           day even though it still belongs to the week it was generated in. */
        list(iso).forEach(function (ev) {
          col.appendChild(eventChip(ev, rerender, { rich: true }));
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

      /* The month, the week and the list are three views of the same lessons,
         and the switch between them sits in the calendar's own toolbar rather
         than above it — on a calendar that control belongs next to the month
         you are looking at. The month is the default: a week is what you do
         next, but a plan is a shape, and the shape only appears at the length
         of a month — which weeks are heavy, where the checkpoints fall, how
         much of the run to the exam is left. */
      var view = (JTS.router.current && JTS.router.current.query.view) || 'month';
      if (['month', 'week', 'agenda'].indexOf(view) < 0) view = 'month';

      screen.appendChild(calendarCard(state, {
        view: view,
        week: week,
        weekIndex: idx,
        weekCount: weeks.length,
        /* Which view and which week are on screen live in the hash, so a
           reload and a shared link both land where the student was. */
        href: function (q) {
          var parts = [];
          if (q.view && q.view !== 'month') parts.push('view=' + q.view);
          if (q.week !== undefined && q.week !== null) parts.push('week=' + q.week);
          return '#/plan' + (parts.length ? '?' + parts.join('&') : '');
        }
      }, rerender));

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
