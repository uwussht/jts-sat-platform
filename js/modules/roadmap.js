/* ==========================================================================
   Screen: Roadmap (#/roadmap)

   The course drawn as a level map: one winding road from the baseline
   diagnostic at the bottom to exam day at the top, a stop for each thing that
   actually happens on the way, a ring around each stop for how much of it is
   behind you, three stars over it, and a marker showing where you are
   standing today.

   The six stops are the course's own, not a shape invented for the drawing:

     1  the baseline diagnostic, which lesson 1 opens with
     2  the content phase — every topic once, by unit
     3  gate 1, passed on the weekly practice test
     4  the hard Module 2 phase
     5  gate 2
     6  test week, and then the exam

   Everything they say comes from js/data/programme*.js, so this screen cannot
   disagree with the materials, the plan or the guide. Which lesson numbers
   and which weeks they cover depends on the student's schedule — three
   lessons a week or two — because that is the one thing the two schedules
   really change.

   The map does not scroll. It is sized to the window so the road always fits
   on one screen; moving along it is done with the arrows, the keyboard, a
   swipe or by pressing a stop, and only the detail beside the map changes.
   Being able to see the whole road at once is the entire point of drawing a
   road — so the detail sits in a column NEXT to the map rather than under it.

   The compact version the dashboard used to carry is gone with the rest of
   the dashboard's cards: Today is the clock, this week's test and the two
   numbers, and the road is a screen you open.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;
  var P = JTS.data.programme;

  /* The map is drawn in a fixed 400×400 space and the stage is kept square by
     the sizer below, so every position here can be a plain percentage of the
     stage and the road never distorts. */
  var VB = { w: 400, h: 400 };
  var ROWS = [352, 262, 172, 82];   /* the horizontal runs of the road */
  var LEFT = 80, RIGHT = 320;       /* where a run starts and ends */
  var TURN = 58;                    /* how far a U-turn bulges past the run */

  function pick(obj) { return JTS.i18n.pick(obj, S.settings().uiLang); }

  /**
   * One road, back and forth up the map, with a U-turn at each end — the shape
   * a level map has. It is one string because it is drawn once and never
   * touched again.
   */
  function roadPath() {
    var d = 'M' + LEFT + ',' + ROWS[0];
    for (var i = 0; i < ROWS.length - 1; i++) {
      var toRight = i % 2 === 0;
      var endX = toRight ? RIGHT : LEFT;
      var ctrl = toRight ? RIGHT + TURN : LEFT - TURN;
      d += 'L' + endX + ',' + ROWS[i] +
           'C' + ctrl + ',' + ROWS[i] + ' ' + ctrl + ',' + ROWS[i + 1] + ' ' +
                 endX + ',' + ROWS[i + 1];
    }
    return d + 'L' + (ROWS.length % 2 === 0 ? LEFT : RIGHT) + ',' + ROWS[ROWS.length - 1];
  }

  /* ---------------------------------------------------------------- model */

  function perWeek() {
    return JTS.programme ? JTS.programme.perWeek() : 3;
  }

  /** How many lessons of the course are behind this student. */
  function doneCount() {
    return JTS.programme ? JTS.programme.doneCount() : 0;
  }

  /**
   * The six stops, from the course.
   *
   * `from`/`to` are lesson numbers on this student's schedule; `weeks` is the
   * range of weeks they fall in. A gate is a single point rather than a range:
   * it is one practice test, sat in the week the phase before it ends.
   */
  function stops() {
    var pw = perWeek();
    var out = [];
    var phases = P.phases;
    var gates = P.gates;

    out.push({
      id: 1, kind: 'diagnostic', from: 1, to: 1,
      name: t('diag.title'),
      lead: t('roadmap.diagLead'),
      weeks: t('prog.weekNo', { n: 1 }),
      cta: { href: '#/diagnostic', label: t('diag.title') }
    });

    phases.forEach(function (ph, i) {
      var from = pw === 2 ? ph.from2 : ph.from3;
      var to = pw === 2 ? ph.to2 : ph.to3;
      out.push({
        id: out.length + 1, kind: 'phase', phase: ph, from: from, to: to,
        name: pick(ph.name),
        lead: pick(ph.lead),
        weeks: t('prog.weeks', { range: pw === 2 ? ph.weeks2 : ph.weeks3 }),
        cta: { href: '#/materials', label: t('nav.materials') }
      });
      /* The gate that closes this phase is the next stop, because on the road
         it genuinely is: you do not walk past it. */
      var gate = gates.filter(function (g) { return g.n === ph.gate; })[0];
      if (gate) {
        var at = pw === 2 ? gate.afterLesson2 : gate.afterLesson3;
        var test = pw === 2 ? gate.test2 : gate.test3;
        out.push({
          id: out.length + 1, kind: 'gate', gate: gate, from: at, to: at,
          name: pick(gate.name),
          lead: t('roadmap.gateLead', { name: pick(ph.name) }),
          weeks: t('prog.testNo', { n: test }),
          cta: { href: '#/mocks', label: t('nav.mocks') }
        });
      }
    });
    return out;
  }

  /** Lessons done / total inside a stop's own range. */
  function stopProgress(stop, done) {
    var total = stop.to - stop.from + 1;
    var inside = U.clamp(done - (stop.from - 1), 0, total);
    return { done: inside, total: total };
  }

  /**
   * A stop is done when its last lesson is behind you, and exactly one stop is
   * current: the first one that is not. The ranges overlap on purpose — the
   * diagnostic IS lesson 1 of the content phase — so "the first unfinished
   * one" is the only reading that puts the marker in one place.
   */
  function statusOf(stop, done, list) {
    if (done >= stop.to) return 'done';
    if (list && currentStop(list, done) !== stop.id) return 'ahead';
    return 'current';
  }

  /**
   * Stars are the stop's own lessons — none yet, some, most, all of them.
   * They are progress through the course and not a score of any kind.
   */
  function starsFor(prog) {
    if (!prog || !prog.total || !prog.done) return 0;
    var r = prog.done / prog.total;
    return r >= 1 ? 3 : r >= 0.6 ? 2 : 1;
  }

  function pctOfStop(prog, status) {
    if (!prog || !prog.total) return status === 'done' ? 100 : 0;
    return Math.round((prog.done / prog.total) * 100);
  }

  /** Which stop a student is standing on. */
  function currentStop(list, done) {
    for (var i = 0; i < list.length; i++) {
      if (done < list[i].to) return list[i].id;
    }
    return list.length;
  }

  /* ------------------------------------------------------------------ map */

  function starRow(n) {
    var row = U.el('div.rm-stars', { 'aria-hidden': 'true' });
    for (var i = 0; i < 3; i++) {
      row.appendChild(U.el('span' + (i < n ? '.on' : ''), { text: '★' }));
    }
    return row;
  }

  /**
   * Keep the stage square whatever the column around it does. The stops are
   * placed as percentages of a square drawing space, so a letterboxed stage
   * would put every one of them beside the tarmac instead of on it. CSS can
   * clamp one axis or the other but not "the smaller of the two", so the
   * measurement happens here. The observer holds the only reference to itself
   * and to the host, so it goes away with the screen it was made for.
   */
  function keepSquare(host, stage) {
    function fit() {
      var w = host.clientWidth, h = host.clientHeight;
      var size = Math.max(200, Math.min(w, h || w));
      stage.style.width = size + 'px';
      stage.style.height = size + 'px';
    }
    fit();
    if (window.ResizeObserver) new ResizeObserver(fit).observe(host);
  }

  /**
   * The level map.
   *
   * opts.list          the stops
   * opts.statusOf(s)   'done' | 'current' | 'ahead'
   * opts.starsOf(s)    0..3 — how much of that stop is done
   * opts.pctOf(s)      0..100 — the same thing as the ring around the stop
   * opts.onSelect(id)  called with the stop a student pressed
   * opts.onGoal()      called when the end of the road is pressed
   * opts.here          initials for the "you are here" marker
   */
  function levelMap(opts) {
    var list = opts.list;
    var total = list.length + 1;             /* the exam is the last stop */
    var stage = U.el('div.rm-stage', {
      role: 'group', 'aria-label': t('roadmap.mapLabel')
    });
    var d = roadPath();

    /* Four strokes, in this order, so the road reads as a road: a shoulder,
       the tarmac, the centre dashes, and over them the stretch already walked.
       Walked road is solid; the road ahead still has its dashes showing. */
    stage.appendChild(U.el('div.rm-road', {
      'aria-hidden': 'true',
      html: '<svg viewBox="0 0 ' + VB.w + ' ' + VB.h + '" focusable="false">' +
        '<path class="rm-road-edge" d="' + d + '"/>' +
        '<path class="rm-road-line" d="' + d + '"/>' +
        '<path class="rm-road-dash" d="' + d + '"/>' +
        '<path class="rm-road-done" d="' + d + '"/>' +
        '</svg>'
    }));

    /* Hidden until the stops are placed: they are positioned by measuring the
       road itself, which cannot happen until it is in the document. */
    var nodes = U.el('div.rm-nodes', { style: 'visibility:hidden' });
    stage.appendChild(nodes);

    list.forEach(function (stop, i) {
      var status = opts.statusOf(stop);
      var stars = opts.starsOf(stop);
      var pct = opts.pctOf(stop);
      var wrap = U.el('div.rm-stop.rm-' + status + (stop.kind === 'gate' ? '.rm-gate' : ''),
        { style: '--i:' + i });
      wrap.appendChild(starRow(stars));

      /* The ring is the stop's own progress, drawn where the eye already is.
         It is a plain conic gradient behind the pin, so the pin covers all of
         it but the rim. */
      wrap.appendChild(U.el('span.rm-ring', {
        'aria-hidden': 'true', style: '--p:' + pct
      }));
      wrap.appendChild(U.el('button.rm-pin', {
        type: 'button',
        text: status === 'done' ? '✓' : stop.kind === 'gate' ? '⚑' : String(stop.id),
        'aria-label': t('roadmap.step', { n: stop.id, total: list.length }) + ' · ' +
          stop.name + ' · ' + t('roadmap.pctDone', { n: pct }) + ' · ' +
          t('roadmap.stars', { n: stars }),
        'aria-current': status === 'current' ? 'step' : null,
        dataset: { phase: String(stop.id) },
        onclick: function () { opts.onSelect(stop.id); }
      }));
      wrap.appendChild(U.el('span.rm-name', { text: stop.name }));

      if (status === 'current') {
        wrap.appendChild(U.el('span.rm-here', {
          text: opts.here, title: t('roadmap.youAreHere'), 'aria-hidden': 'true'
        }));
      }
      nodes.appendChild(wrap);
    });

    /* The end of the road, drawn as the prize it is: everything before it
       exists to make that one morning go well. Pressing it says what that
       morning is and where the date is changed. */
    nodes.appendChild(U.el('div.rm-stop.rm-goal', { style: '--i:' + list.length }, [
      U.el('button.rm-gift', {
        type: 'button', text: '★',
        'aria-label': t('roadmap.examDay') + ' · ' + (opts.examDate || ''),
        onclick: opts.onGoal
      }),
      U.el('span.rm-name', { text: t('roadmap.examDay') }),
      opts.examDate ? U.el('span.rm-sub', { text: opts.examDate }) : null
    ]));

    var doneStops = 0;
    list.forEach(function (s, i) { if (opts.statusOf(s) === 'done') doneStops = i + 1; });

    /* Place the stops along the road by measuring it, so a pin can never drift
       off the tarmac however the road is redrawn. Percentages, so a resize
       needs no second pass. */
    setTimeout(function () {
      var line = stage.querySelector('.rm-road-done');
      if (!line || !line.getTotalLength) { nodes.style.visibility = ''; return; }
      var len = line.getTotalLength();
      U.$$('.rm-stop', nodes).forEach(function (el, i) {
        var pt = line.getPointAtLength(len * (i / (total - 1)));
        el.style.left = (pt.x / VB.w * 100) + '%';
        el.style.top = (pt.y / VB.h * 100) + '%';
      });
      nodes.style.visibility = '';
      nodes.classList.add('rm-in');

      /* The walked stretch paints itself in from the start of the road, which
         is the one place on this screen where a second of motion says
         something: that is the distance you have actually covered. */
      var target = len * (1 - doneStops / (total - 1));
      /* The dash pattern is put in place with the transition switched off —
         otherwise the browser animates the road from "fully drawn" down to the
         starting point, which paints a stretch nobody has walked. */
      line.style.transition = 'none';
      line.style.strokeDasharray = len;
      line.style.strokeDashoffset = len;
      void line.getBoundingClientRect();
      line.style.transition = '';
      line.style.strokeDashoffset = target;
    }, 0);

    return stage;
  }

  /* --------------------------------------------------------------- pieces */

  /** The three moves the whole thing comes down to, for a first-time reader. */
  function howItWorks() {
    return U.el('div.stack-sm', null, [
      U.el('p.small.muted', { text: t('roadmap.howLead') }),
      U.el('div.grid.grid-3', null, ['measure', 'practice', 'simulate'].map(function (k, i) {
        return U.el('div.rm-how', null, [
          U.el('span.rm-how-n', { text: String(i + 1), 'aria-hidden': 'true' }),
          U.el('b', { text: t('roadmap.how.' + k) }),
          U.el('span.small.muted', { text: t('roadmap.how.' + k + 'Desc') })
        ]);
      }))
    ]);
  }

  /** The stop a student is reading, beside the map. */
  function stopPanel(stop, info, listLength) {
    /* .is-* and not .rm-done/.rm-current: those two mean "a stop on the
       map" and are counted there — the panel is not a stop. */
    var panel = U.el('div.card.rm-panel.is-' + info.status, null, [
      U.el('div.rm-panel-head', null, [
        U.el('span.rm-panel-n', {
          text: stop.kind === 'gate' ? '⚑' : String(stop.id), 'aria-hidden': 'true'
        }),
        U.el('div.rm-panel-title', null, [
          U.el('div.xsmall.rm-stepno', {
            text: t('roadmap.step', { n: stop.id, total: listLength })
          }),
          U.el('div.h2', { text: stop.name })
        ])
      ]),
      U.el('div.row.row-wrap.rm-panel-tags', null, [
        info.status === 'current' ? U.el('span.badge', { text: t('roadmap.youAreHere') })
          : info.status === 'done' ? U.el('span.badge.badge-ok', { text: t('common.done') })
          : null,
        U.el('span.badge.badge-muted', { text: stop.weeks }),
        stop.kind === 'gate'
          ? null
          : U.el('span.badge.badge-muted', {
              text: t('prog.lessonRange', { from: stop.from, to: stop.to })
            }),
        /* "Lessons 34–42" is a position in the course; the dates are when the
           student's own plan puts them, which is the question they actually
           have when they look at a stop that is still ahead. */
        info.dates ? U.el('span.badge.badge-muted', { text: info.dates }) : null
      ]),
      U.el('p.small.muted.rm-panel-desc', { text: stop.lead })
    ]);

    /* What is actually in this stretch of road: the codes, in order. A gate
       has no lessons of its own — it is a test — so it says what it demands
       instead. */
    if (stop.kind === 'gate') {
      /* The rule above already says what a gate is and what failing it costs;
         saying it twice in two labels was the panel talking to itself. */
      panel.appendChild(U.el('div.rm-fact', null, [
        U.el('span.rm-fact-lab', { text: t('roadmap.whatYouDo') }),
        U.el('span', { text: t('roadmap.gateWhat') })
      ]));
    } else if (JTS.programme) {
      var codes = P.order(perWeek())
        .filter(function (s) { return s.n >= stop.from && s.n <= stop.to; })
        .reduce(function (acc, s) { return acc.concat(s.lessons); }, []);
      if (codes.length) {
        var chips = U.el('div.rm-codes');
        codes.slice(0, 24).forEach(function (l) {
          chips.appendChild(U.el('a.pg-tag', {
            href: '#/materials/lesson?code=' + l.code, text: l.code, title: pick(l.t)
          }));
        });
        panel.appendChild(U.el('div.stack-sm', null, [
          U.el('span.rm-fact-lab', { text: t('roadmap.whatYouDo') }), chips
        ]));
      }
    }

    if (stop.kind !== 'gate' && info.progress && info.progress.total) {
      panel.appendChild(U.el('div.rm-panel-bar', null, [
        ui.bar(info.progress.done, info.progress.total,
          info.progress.done === info.progress.total ? 'bar-ok' : ''),
        U.el('div.xsmall.muted', {
          text: t('roadmap.lessonsDone', { done: info.progress.done, total: info.progress.total })
        })
      ]));
    }

    panel.appendChild(U.el('div.rm-panel-foot', null, [
      U.el('span'),
      U.el('a.btn.btn-sm' + (info.status === 'current' ? '.btn-primary' : ''), {
        href: stop.cta.href, text: stop.cta.label
      })
    ]));
    return panel;
  }

  JTS.roadmap = { stops: stops, starsFor: starsFor };

  /* --------------------------------------------------------------- screen */

  JTS.router.register('#/roadmap', {
    title: 'roadmap.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      /* The map half is sized to the window; the course under it is a long
         read, so the screen stops being height-locked once it is there. */
      var screen = U.el('div.container.screen.rm-screen' + (JTS.programme ? '.has-course' : ''));
      root.appendChild(screen);

      var list = stops();
      var done = doneCount();
      var pw = perWeek();
      var sch = P.scheduleOf(pw);
      var current = currentStop(list, done);
      var selected = current;
      var days = JTS.analytics.daysToExam();
      var exam = state.examDate && state.examDate.testDate;
      var examLabel = exam ? U.fmtDate(U.parseISO(exam), S.settings().uiLang)
        : t('settings.noExamDate');
      var week = Math.min(Math.ceil(Math.max(done + 1, 1) / pw), sch.weeks);

      function statusFor(stop) { return statusOf(stop, done, list); }
      /** When this student's own plan puts a stop's lessons. */
      function datesFor(stop) {
        var all = JTS.planner.allLessons ? JTS.planner.allLessons() : [];
        var from = all[stop.from - 1], to = all[Math.min(stop.to, all.length) - 1];
        if (!from || !to) return null;
        var lang = S.settings().uiLang;
        return t('roadmap.dates', {
          from: U.fmtDate(U.parseISO(from.date), lang),
          to: U.fmtDate(U.parseISO(to.date), lang)
        });
      }
      function infoFor(stop) {
        return {
          status: statusFor(stop),
          progress: stopProgress(stop, done),
          dates: datesFor(stop)
        };
      }

      /* One line of state, then the map. Everything else is available on
         request; nothing else is allowed to push the road off the screen. */
      var top = U.el('div.rm-top', null, [
        U.el('div.rm-top-who', null, [
          U.el('div.eyebrow', { text: t('roadmap.whereYouAre') }),
          U.el('div.h2', {
            text: (list.filter(function (s) { return s.id === current; })[0] || list[0]).name
          })
        ]),
        U.el('div.row.row-wrap.rm-top-meta', null, [
          U.el('span.badge.badge-muted', {
            text: t('today.countdown') + ': ' + (days === null ? '—' : Math.max(0, days))
          }),
          U.el('span.badge.badge-muted', {
            text: t('roadmap.weekOf', { n: week, total: sch.weeks })
          }),
          U.el('span.badge.badge-muted', { text: t('prog.perWeek', { n: pw }) }),
          U.el('button.btn.btn-sm', {
            type: 'button', text: t('roadmap.howTitle'),
            onclick: function () {
              ui.modal({ title: t('roadmap.howTitle'), content: howItWorks() });
            }
          })
        ])
      ]);
      /* How far along the whole course, not just this stop: a thin rule under
         the header so the answer is on screen without a click. */
      top.appendChild(U.el('div.rm-total', null, [
        U.el('span.rm-total-lab', { text: t('roadmap.overall') }),
        ui.bar(Math.min(done, P.lessonsTotal), P.lessonsTotal,
          done >= P.lessonsTotal ? 'bar-ok' : ''),
        U.el('span.rm-total-n', {
          text: t('roadmap.pctDone', { n: U.pct(Math.min(done, P.lessonsTotal), P.lessonsTotal) })
        })
      ]));
      screen.appendChild(top);

      if (!state.plan) {
        screen.appendChild(U.el('div.notice.notice-warn', null, [
          U.el('div', null, [
            U.el('div', { text: t('roadmap.noPlan') }),
            U.el('a.btn.btn-sm.btn-primary', { href: '#/diagnostic', text: t('diag.title'),
              style: 'margin-top:10px' })
          ])
        ]));
      }

      /* Map on the left, the stop you are reading on the right. Side by side
         and not stacked, because the road has to stay whole on one screen and
         because a detail two hundred pixels under the pin you just pressed
         does not read as that pin's detail. */
      var mapHost = U.el('div.rm-map');
      var panelHost = U.el('div.rm-panel-host');
      var left = U.el('div.rm-left');
      left.appendChild(mapHost);

      /* The arrows are how you walk the road, which is why they sit under the
         map rather than off at the edge of the screen. */
      var prevBtn = U.el('button.rm-arrow', {
        type: 'button', text: '‹', 'aria-label': t('roadmap.prev')
      });
      var nextBtn = U.el('button.rm-arrow', {
        type: 'button', text: '›', 'aria-label': t('roadmap.next')
      });
      var stepLabel = U.el('div.rm-arrow-label', { 'aria-live': 'polite' });
      prevBtn.addEventListener('click', function () { select(selected - 1); });
      nextBtn.addEventListener('click', function () { select(selected + 1); });
      left.appendChild(U.el('div.rm-arrows', null, [prevBtn, stepLabel, nextBtn]));
      left.appendChild(U.el('p.xsmall.muted.rm-hint', { text: t('roadmap.hint') }));

      screen.appendChild(U.el('div.rm-body', null, [left, panelHost]));

      /* Selecting a stop redraws the map's marks and the panel in place. A
         full render() would redraw the whole screen for a click that changed
         one card, and would take the scroll position with it. */
      function select(id) {
        selected = U.clamp(id, 1, list.length);
        var stop = list.filter(function (s) { return s.id === selected; })[0];

        U.clear(panelHost);
        panelHost.appendChild(stopPanel(stop, infoFor(stop), list.length));

        stepLabel.textContent = t('roadmap.step', { n: selected, total: list.length });
        prevBtn.disabled = selected === 1;
        nextBtn.disabled = selected === list.length;

        U.$$('.rm-stop', mapHost).forEach(function (el) {
          var pin = el.querySelector('.rm-pin');
          var on = !!pin && pin.dataset.phase === String(selected);
          el.classList.toggle('rm-sel', on);
          if (pin && pin.tagName === 'BUTTON') pin.setAttribute('aria-pressed', String(on));
        });
      }

      /* Pressing the end of the road says what is actually at the end of it.
         The date lives in settings, so the way to change it is the way there
         and not a second editor hidden on a map. */
      function goalCard() {
        var m = ui.modal({
          title: t('roadmap.examDay'),
          content: U.el('div.stack-sm', null, [
            U.el('div.h2', { text: examLabel }),
            U.el('p.small.muted', {
              text: days === null ? t('settings.noExamDate')
                : t('today.countdown') + ': ' + Math.max(0, days)
            }),
            U.el('p.small.muted', { text: t('roadmap.examSub') }),
            U.el('a.btn.btn-sm', { href: '#/settings', text: t('settings.exam'),
              onclick: function () { m.close(); } })
          ])
        });
      }

      mapHost.appendChild(levelMap({
        list: list,
        statusOf: statusFor,
        starsOf: function (s) {
          var pr = stopProgress(s, done);
          /* Same reading as the ring: a walked stop with nothing in it is
             finished, not unstarted. */
          return (!pr || !pr.total) && statusFor(s) === 'done' ? 3 : starsFor(pr);
        },
        pctOf: function (s) { return pctOfStop(stopProgress(s, done), statusFor(s)); },
        here: U.initials(state.profile.name || state.profile.email),
        examDate: examLabel,
        onSelect: select,
        onGoal: goalCard
      }));
      keepSquare(mapHost, mapHost.querySelector('.rm-stage'));

      /* The arrow keys walk the road: the map is one control, not six. */
      mapHost.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); select(selected - 1); }
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); select(selected + 1); }
        if (e.key === 'Home') { e.preventDefault(); select(1); }
        if (e.key === 'End') { e.preventDefault(); select(list.length); }
      });

      /* On a phone the arrows are small and the map is most of the screen, so
         the map itself takes a swipe. Vertical drags are left alone — that is
         the page scrolling. */
      var sx = 0, sy = 0;
      mapHost.addEventListener('touchstart', function (e) {
        var p = e.changedTouches[0]; sx = p.clientX; sy = p.clientY;
      }, { passive: true });
      mapHost.addEventListener('touchend', function (e) {
        var p = e.changedTouches[0], dx = p.clientX - sx, dy = p.clientY - sy;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) select(selected + (dx < 0 ? 1 : -1));
      }, { passive: true });

      select(current);

      /* Under the map: the course itself, week by week. The road is the shape
         of the preparation — six stops a student can hold in their head — and
         the chronology is the forty-five lessons that fill it. They are two
         views of the same journey and neither replaces the other. */
      if (JTS.programme) {
        screen.appendChild(U.el('div.rm-course', null, [
          U.el('div.row-between.row-wrap', null, [
            U.el('div', null, [
              U.el('div.eyebrow', { text: t('prog.title') }),
              U.el('p.small.muted', { text: t('prog.lead'), style: 'margin:4px 0 0' })
            ])
          ]),
          JTS.programme.chronology()
        ]));
      }
    }
  });
})();
