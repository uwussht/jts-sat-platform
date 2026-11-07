/* ==========================================================================
   Screen: My plan (#/plan)

   The course on the calendar: every lesson of the student's packages on its
   date (three a week, from the group's schedule or the default slots), the
   Bluebook tests between the months, the weekly simulations of the Challenge
   month and the exam. Above it, the check that the course fits before the
   exam; the phases are on the dashboard.

   Everything comes from JTS.course.plan(). Nothing here moves a lesson or
   changes its status: the teacher marks a group's lesson held, a curator
   moves it, and a student without a group finishes it on the platform. A
   lesson on the calendar opens that lesson.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var STATUS_CLASS = { planned: '', next: 'next', done: 'done', missed: 'skipped', moved: 'moved' };

  /* --------------------------------------------------------------- events */

  /* The kinds of thing the plan puts on a date: a lesson; a test (a
     Bluebook test between months, or a full simulation in the Challenge
     month); a registration deadline; the exam. */
  var TYPES = ['lesson', 'test', 'deadline', 'exam'];

  function lessonTitle(l) {
    var unit = JTS.data.programme.byCode ? JTS.data.programme.byCode(l.code) : null;
    return unit ? JTS.i18n.pick(unit.t, S.settings().uiLang) : l.topic;
  }

  /** date (ISO) -> the events on it, in the order they should be read. */
  function eventsByDay(state, plan) {
    var map = {};
    function put(iso, ev) {
      if (!iso) return;
      (map[iso] = map[iso] || []).push(ev);
    }
    plan.lessons.forEach(function (l) {
      put(l.date, {
        type: l.section === 'both' ? 'test' : 'lesson',
        lesson: l,
        label: lessonTitle(l),
        sub: t('prog.lessonNo', { n: l.no }) + (l.time ? ' · ' + l.time : '') +
          ' · ' + t('lstatus.' + l.status) +
          (l.teacher && l.teacher.name ? ' · ' + l.teacher.name : '')
      });
    });
    plan.tests.forEach(function (x) {
      put(x.date, { type: 'test', test: x, label: t('tests.name', { n: JTS.courseUI.TEST_NO[x.id] }),
        sub: x.entered ? t('tests.entered') : t('tests.notEntered') });
    });
    plan.simulations.forEach(function (x) {
      put(x.date, { type: 'test', sim: x, label: t('plan.ev.simulation'), sub: t('prog.weekNo', { n: x.week }) });
    });
    var ex = state.examDate || {};
    if (ex.registrationDeadline) put(ex.registrationDeadline, { type: 'deadline', label: t('plan.ev.regDeadline') });
    if (ex.lateDeadline) put(ex.lateDeadline, { type: 'deadline', label: t('plan.ev.lateDeadline') });
    if (plan.examDate) put(plan.examDate, { type: 'exam', label: t('roadmap.examDay') });
    Object.keys(map).forEach(function (iso) {
      map[iso].sort(function (a, b) { return TYPES.indexOf(a.type) - TYPES.indexOf(b.type); });
    });
    return map;
  }

  /** Where pressing an event goes: the lesson itself, a test, or the mocks. */
  function eventHref(ev) {
    if (ev.lesson) return '#/materials/lesson?code=' + ev.lesson.code;
    if (ev.test) return '#/tests';
    if (ev.sim) return '#/mocks';
    return null;
  }

  /**
   * One entry on a day. A lesson is a button because it opens; a deadline and
   * the exam are statements, so they are not.
   */
  function eventChip(ev, rerender, opts) {
    opts = opts || {};
    var status = ev.lesson ? STATUS_CLASS[ev.lesson.status] : '';
    /* The week has room for the details as well as the label, and a day
       column with three words in it reads as an empty day. */
    var rich = opts.rich && ev.sub;
    var cls = '.cal-tag' + (ev.lesson ? '.cal-tag-lesson' : '') + (rich ? '.is-rich' : '') +
      (ev.type === 'exam' ? '.cal-tag-exam' : '') + (status ? '.' + status : '');
    var full = ev.label + (ev.sub ? ' · ' + ev.sub : '');
    var kids = [
      U.el('span.cal-dot', { 'aria-hidden': 'true' }),
      rich
        ? U.el('span.cal-tag-body', null, [U.el('b', { text: ev.label }), U.el('span', { text: ev.sub })])
        : U.el('span.cal-tag-text', { text: ev.label })
    ];
    var href = eventHref(ev);
    if (!href) return U.el('div' + cls, { dataset: { type: ev.type }, title: full }, kids);
    /* A lesson opens the lesson: there is no menu, because there is nothing
       for the student to change on it. */
    return U.el('a' + cls, {
      href: href, dataset: { type: ev.type }, title: full,
      onclick: function (e) { e.stopPropagation(); }
    }, kids);
  }


  /* ------------------------------------------------------------- the road */

  /**
   * The plan as a road, the way the IELTS platform draws it: a fortnight of
   * days as circles on a line — done, missed, today, still to come — and the
   * day you press opens in the panel beside them. It is the default view
   * because it answers "where am I" in one look, which a month grid does not.
   */
  /** The four views of the same plan, as chips beside the screen's title. */
  function viewSwitch(ctx) {
    var seg = U.el('div.cal-seg', { role: 'group', 'aria-label': t('nav.plan') });
    [['road', 'plan.viewRoad'], ['month', 'plan.viewMonth'],
     ['week', 'plan.viewWeek'], ['agenda', 'plan.viewAgenda']]
      .forEach(function (pair) {
        seg.appendChild(U.el('a', {
          href: ctx.href({ view: pair[0] }), text: t(pair[1]),
          'aria-pressed': String(ctx.view === pair[0])
        }));
      });
    return seg;
  }

  function roadCard(state, plan, ctx, rerender) {
    var events = eventsByDay(state, plan);
    var todayISO = U.iso(U.today());

    /* Two weeks at a time: the week on screen and the one after it. */
    var weeks = ctx.weeks;
    var from = ctx.weekIndex;
    var shown = weeks.slice(from, from + 2);
    if (!shown.length) shown = [{ monday: U.iso(U.weekStart(U.today())), lessons: 0 }];

    /* The day the panel shows: the one in the hash, else today when it is on
       screen, else the first day of the fortnight that has anything on it. */
    var days = [];
    shown.forEach(function (w) {
      for (var i = 0; i < 7; i++) days.push(U.iso(U.addDays(U.parseISO(w.monday), i)));
    });
    var day = ctx.day && days.indexOf(ctx.day) >= 0 ? ctx.day : null;
    if (!day && days.indexOf(todayISO) >= 0) day = todayISO;
    if (!day) day = days.filter(function (d) { return (events[d] || []).length; })[0] || days[0];

    /* --------------------------------------------------------- the lanes */
    function dot(iso) {
      var list = events[iso] || [];
      var date = U.parseISO(iso);
      var lesson = list.filter(function (e) { return e.lesson; })[0];
      var test = list.filter(function (e) { return e.test || e.sim; })[0];
      var exam = list.filter(function (e) { return e.type === 'exam'; })[0];

      var cls = '.road-day';
      if (iso === todayISO) cls += '.is-today';
      if (iso === day) cls += '.is-open';
      if (exam) cls += '.is-exam';
      else if (test) cls += '.is-flag';
      else if (lesson) {
        var st = lesson.lesson.status;
        cls += st === 'done' ? '.is-done' : st === 'missed' ? '.is-missed' : '.is-todo';
      } else cls += '.is-empty';

      var mark = exam ? '★' : lesson && lesson.lesson.status === 'done' ? '✓'
        : lesson && lesson.lesson.status === 'missed' ? '!' : test ? '⚑'
        : lesson ? String(date.getDate()) : '';

      return U.el('a' + cls, {
        href: ctx.href({ view: 'road', week: from, day: iso }),
        'aria-current': iso === day ? 'true' : null,
        title: U.fmtDate(date, S.settings().uiLang)
      }, [
        U.el('span.road-dot', { text: mark, 'aria-hidden': 'true' }),
        U.el('span.road-lab', { text: U.dayLabel(date.getDay() === 0 ? 7 : date.getDay()) }),
        iso === todayISO ? U.el('span.road-here', { text: t('plan.youAreHere') }) : null
      ]);
    }

    function weekBox(w, n) {
      var lane = U.el('div.road-lane');
      for (var i = 0; i < 7; i++) lane.appendChild(dot(U.iso(U.addDays(U.parseISO(w.monday), i))));
      return U.el('div.road-week', null, [
        U.el('div.road-week-head', null, [
          U.el('b', { text: t('plan.week', { n: n + 1 }) }),
          U.el('span.xsmall.muted', { text: t('plan.lessonsThisWeek', { n: w.lessons }) })
        ]),
        lane
      ]);
    }

    var lanes = U.el('div.stack');
    shown.forEach(function (w) { lanes.appendChild(weekBox(w, weeks.indexOf(w))); });

    var head = U.el('div.road-head', null, [
      U.el('a.icon-btn' + (from === 0 ? '.is-off' : ''), {
        href: ctx.href({ view: 'road', week: Math.max(0, from - 2) }),
        text: '‹', 'aria-label': t('plan.prevWeek')
      }),
      U.el('div.grow', null, [
        U.el('div.h3', { text: shown.length > 1
          ? t('plan.weeksRange', { a: weeks.indexOf(shown[0]) + 1, b: weeks.indexOf(shown[1]) + 1 })
          : t('plan.week', { n: weeks.indexOf(shown[0]) + 1 }) })
      ]),
      U.el('a.icon-btn' + (from + 2 >= weeks.length ? '.is-off' : ''), {
        href: ctx.href({ view: 'road', week: Math.min(Math.max(0, weeks.length - 1), from + 2) }),
        text: '›', 'aria-label': t('plan.nextWeek')
      }),
      U.el('a.btn.btn-sm', { href: ctx.href({ view: 'road' }), text: t('plan.today') })
    ]);

    var legend = U.el('div.road-legend', null, [
      ['is-done', 'lstatus.done'], ['is-todo', 'plan.leg.todo'], ['is-missed', 'lstatus.missed'],
      ['is-flag', 'plan.leg.test'], ['is-today', 'plan.leg.today']
    ].map(function (pair) {
      return U.el('span.road-key', null, [
        U.el('i.road-dot.' + pair[0], { 'aria-hidden': 'true' }),
        U.el('span', { text: t(pair[1]) })
      ]);
    }));

    /* --------------------------------------------------------- the panel */
    var list = events[day] || [];
    var panelRows = list.length
      ? U.el('div.stack-sm', null, list.map(function (ev) { return eventChip(ev, rerender, { rich: true }); }))
      : U.el('p.muted.small', { text: t('plan.dayEmpty') });

    var di = days.indexOf(day);
    var panel = U.el('aside.card.stack', { id: 'plan-day' }, [
      U.el('div.road-head', null, [
        U.el('a.icon-btn' + (di <= 0 ? '.is-off' : ''), {
          href: ctx.href({ view: 'road', week: from, day: days[Math.max(0, di - 1)] }),
          text: '‹', 'aria-label': t('plan.prevDay')
        }),
        U.el('div.grow', null, [
          U.el('div.eyebrow', { text: day === todayISO ? t('plan.today') : t('plan.dayPanel') }),
          U.el('div.h3', { text: U.fmtDate(U.parseISO(day), S.settings().uiLang) })
        ]),
        U.el('a.icon-btn' + (di >= days.length - 1 ? '.is-off' : ''), {
          href: ctx.href({ view: 'road', week: from, day: days[Math.min(days.length - 1, di + 1)] }),
          text: '›', 'aria-label': t('plan.nextDay')
        })
      ]),
      U.el('div.small.muted', { text: t('plan.dayCount', { n: list.length }) }),
      panelRows
    ]);

    return U.el('div.dash-split', null, [
      U.el('div.card.stack', { id: 'plan-road' }, [head, lanes, legend]),
      panel
    ]);
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
  function calendarCard(state, plan, ctx, rerender) {
    var events = eventsByDay(state, plan);
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
          U.el('div.small.muted', { text: t('plan.lessonsThisWeek', { n: ctx.week.lessons }) })
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

      var sel = U.el('select.cal-filter', {
        'aria-label': t('plan.filterType'),
        onchange: function () { filter = this.value; paintLegend(); paintBody(); }
      });
      sel.appendChild(U.el('option', { value: 'all', text: t('plan.allTypes') }));
      TYPES.forEach(function (ty) {
        sel.appendChild(U.el('option', { value: ty, text: t('plan.type.' + ty) }));
      });
      sel.value = filter;

      bar.appendChild(U.el('div.cal-bar-right', null, [sel]));
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
            var dayEvents = (events[iso] || []).filter(function (ev) { return eventHref(ev); });
            function open() { dayOpen(iso, dayEvents); }
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
   * A day pressed on the month. One thing on it opens that thing; several
   * are listed so the student picks one; an empty day says so.
   */
  function dayOpen(iso, evs) {
    if (evs.length === 1) { JTS.router.go(eventHref(evs[0])); return; }
    var m;
    var body = U.el('div.stack-sm');
    if (!evs.length) body.appendChild(U.el('p.muted', { text: t('prog.dayEmpty') }));
    evs.forEach(function (ev) {
      body.appendChild(U.el('a.card.card-sm.row-between.plan-day-row', {
        href: eventHref(ev), onclick: function () { m.close(); }
      }, [
        U.el('div.stack-sm', null, [U.el('b', { text: ev.label }), U.el('span.small.muted', { text: ev.sub || '' })]),
        ev.lesson ? JTS.courseUI.lessonStatus(ev.lesson) : null
      ]));
    });
    m = ui.modal({ title: U.fmtDate(U.parseISO(iso), S.settings().uiLang), content: body });
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

  /** The calendar weeks the plan spans, Monday to Sunday, with lesson counts. */
  function planWeeks(plan) {
    var mondays = {};
    plan.lessons.forEach(function (l) {
      var mon = U.iso(U.weekStart(U.parseISO(l.date)));
      mondays[mon] = (mondays[mon] || 0) + 1;
    });
    return Object.keys(mondays).sort().map(function (m) { return { monday: m, lessons: mondays[m] }; });
  }

  JTS.router.register('#/plan', {
    title: 'nav.plan',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.container-wide.screen.stack');
      root.appendChild(screen);
      function rerender() { JTS.router.render(); }

      var plan = JTS.course.plan();
      if (!plan) { screen.appendChild(ui.empty(t('plan.noPlan'))); return; }

      var fit = JTS.courseUI.fitBanner(plan);
      if (fit) screen.appendChild(fit);
      if (!plan.examDate) screen.appendChild(U.el('div.notice', { text: t('plan.provisional') }));

      /* Which week is on screen is view state, not saved progress. It opens
         on the week of the next lesson. */
      var weeks = planWeeks(plan);
      var nextMon = plan.next ? U.iso(U.weekStart(U.parseISO(plan.next.date))) : null;
      var idx = Math.max(0, weeks.map(function (w) { return w.monday; }).indexOf(nextMon));
      if (JTS.router.current && JTS.router.current.query.week) {
        idx = U.clamp(Number(JTS.router.current.query.week), 0, Math.max(0, weeks.length - 1));
      }

      var view = (JTS.router.current && JTS.router.current.query.view) || 'road';
      if (['road', 'month', 'week', 'agenda'].indexOf(view) < 0) view = 'road';

      var ctx = {
        view: view,
        weeks: weeks,
        day: (JTS.router.current && JTS.router.current.query.day) || null,
        week: weeks[idx] || { monday: U.iso(U.weekStart(U.today())), lessons: 0 },
        weekIndex: idx,
        weekCount: Math.max(1, weeks.length),
        href: function (q) {
          var parts = [];
          if (q.view && q.view !== 'road') parts.push('view=' + q.view);
          if (q.week !== undefined && q.week !== null) parts.push('week=' + q.week);
          if (q.day) parts.push('day=' + q.day);
          return '#/plan' + (parts.length ? '?' + parts.join('&') : '');
        }
      };

      /* The title says what this screen is for, the way the other site's
         plan does, and the view switch sits beside it. */
      JTS.shell.pageSub(t('plan.sub'));
      JTS.shell.pageActions([viewSwitch(ctx)]);

      screen.appendChild(view === 'road'
        ? roadCard(state, plan, ctx, rerender)
        : calendarCard(state, plan, ctx, rerender));
    }
  });
})();
