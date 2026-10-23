/* ==========================================================================
   Screen: Roadmap (#/roadmap)

   The course drawn as a level map: one winding road from the baseline
   diagnostic at the bottom to exam day at the top, a stop for each thing that
   actually happens on the way, a ring around each stop for how much of it is
   behind you, three stars over it, and a marker showing where you are
   standing today.

   The stops are the phases of the student's own plan (JTS.course.plan(),
   built by js/shared/plan-engine.js): the diagnostic and Bluebook Test 6, the
   two months of foundations with Test 8 and Test 10 after them, the Challenge
   month when the extra package is bought, self-study until the exam, and the
   exam itself at the end of the road. The dashboard and #/plan draw the same
   phases, so the three screens cannot disagree.

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

  /**
   * The stops: the plan's phases, without the exam day, which is the star at
   * the end of the road. A test phase is a gate; self-study is its own kind.
   */
  function stops(plan) {
    if (!plan) return [];
    return plan.phases.filter(function (ph) { return ph.key !== 'examDay'; }).map(function (ph, i) {
      var kind = ph.id === 1 ? 'diagnostic' : ph.test ? 'gate' : ph.key === 'selfStudy' ? 'self' : 'phase';
      var stop = {
        id: i + 1, phase: ph, kind: kind,
        name: t('phase.' + ph.id + '.name'),
        short: t('phase.' + ph.id + '.short'),
        lead: t('phase.' + ph.id + '.lead'),
        from: ph.lessons ? ph.lessons[0] : null,
        to: ph.lessons ? ph.lessons[1] : null,
        weeks: ph.weeks ? t('phase.weeks', { from: ph.weeks[0], to: ph.weeks[1] }) : null,
        bluebook: ph.test ? JTS.courseUI.TEST_NO[ph.test] : null
      };
      if (ph.id === 1) stop.cta = { href: '#/diagnostic', label: t('diag.title') };
      if (ph.test) stop.cta2 = { href: '#/tests', label: t('tests.enter') };
      return stop;
    });
  }

  /** Done / total inside a stop: its lessons, or the steps a test phase has. */
  function stopProgress(stop) {
    var ph = stop.phase;
    if (ph.lessons) return { done: ph.done, total: ph.total };
    if (ph.id === 1) return { done: (ph.diagnosticDone ? 1 : 0) + (ph.testEntered ? 1 : 0), total: 2 };
    if (ph.test) return { done: ph.testEntered ? 1 : 0, total: 1 };
    return { done: 0, total: 0 };
  }

  /** current · done · ahead, from the plan; a passed phase left unfinished
      is drawn as passed, and its panel says what is missing. */
  function statusOf(stop) {
    var st = stop.phase.state;
    if (st === 'current') return 'current';
    if (st === 'done' || st === 'incomplete') return 'done';
    return 'ahead';
  }

  function pctOfStop(prog, status) {
    if (!prog || !prog.total) return status === 'done' ? 100 : 0;
    return Math.round((prog.done / prog.total) * 100);
  }

  function currentStop(list) {
    var cur = list.filter(function (s) { return s.phase.state === 'current'; })[0];
    return cur ? cur.id : list.length;
  }

  /* ------------------------------------------------------------------ map */

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
      var pct = opts.pctOf(stop);
      var wrap = U.el('div.rm-stop.rm-' + status + (stop.kind === 'gate' ? '.rm-gate' : ''),
        { style: '--i:' + i });

      /* The ring is the stop's own progress, drawn where the eye already is.
         It is a plain conic gradient behind the pin, so the pin covers all of
         it but the rim. */
      wrap.appendChild(U.el('span.rm-ring', {
        'aria-hidden': 'true', style: '--p:' + pct
      }));
      /* The number stays on every stop, a gate included: the road is "step 3
         of 6" and a pin that swapped its number for a flag broke the count
         exactly where a student most needs to know how far in they are. What
         KIND of stop it is rides above the pin as a small badge. */
      wrap.appendChild(U.el('button.rm-pin', {
        type: 'button',
        text: String(stop.id),
        'aria-label': t('roadmap.step', { n: stop.id, total: list.length }) + ' · ' +
          stop.name + ' · ' + t('roadmap.kind.' + stop.kind) + ' · ' +
          t('roadmap.pctDone', { n: pct }),
        'aria-current': status === 'current' ? 'step' : null,
        dataset: { phase: String(stop.id) },
        onclick: function () { opts.onSelect(stop.id); }
      }));
      if (status === 'done') {
        wrap.appendChild(U.el('span.rm-tick', { text: '✓', 'aria-hidden': 'true' }));
      }
      wrap.appendChild(U.el('span.rm-kind', {
        text: stop.kind === 'gate' ? '⚑' : stop.kind === 'diagnostic' ? '◉' : '▤',
        title: t('roadmap.kind.' + stop.kind), 'aria-hidden': 'true'
      }));
      /* Every stop is named, always. A map whose stops read 1, 2, ⚑, 4, ⚑, 6
         is a map you have to click six times to understand. */
      wrap.appendChild(U.el('span.rm-name', { text: stop.short || stop.name }));

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
      U.el('span.rm-name', { text: t('roadmap.examDay') })
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
        var x = pt.x / VB.w * 100;
        el.style.left = x + '%';
        el.style.top = (pt.y / VB.h * 100) + '%';
        /* A name is centred on its pin, and a pin on the outside of a U-turn
           sits close enough to the edge that a centred label hangs off the
           stage — which clips it, because the stage has to hide the road's
           overshoot. Stops near an edge hang their name inward instead. */
        el.classList.toggle('rm-edge-l', x < 20);
        el.classList.toggle('rm-edge-r', x > 80);
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
            text: t('roadmap.step', { n: stop.id, total: listLength }) +
              '  ·  ' + t('roadmap.kind.' + stop.kind)
          }),
          U.el('div.h2', { text: stop.name })
        ])
      ]),
      U.el('div.row.row-wrap.rm-panel-tags', null, [
        info.status === 'current' ? U.el('span.badge', { text: t('roadmap.youAreHere') })
          : info.status === 'done' ? U.el('span.badge.badge-ok', { text: t('common.done') })
          : null,
        stop.bluebook ? U.el('span.badge.badge-muted', { text: 'Bluebook ' + stop.bluebook }) : null,
        stop.weeks ? U.el('span.badge.badge-muted', { text: stop.weeks }) : null,
        /* Weeks and lesson numbers, and no calendar dates. A stop is a
           position in the course; a date on it is the plan's business, moves
           every time the plan is rebuilt, and read as a deadline that was
           never promised. "Lesson 1 — Lesson 1" was also simply silly. */
        stop.from
          ? U.el('span.badge.badge-muted', {
              text: stop.from === stop.to
                ? t('prog.lessonNo', { n: stop.from })
                : t('prog.lessonRange', { from: stop.from, to: stop.to })
            })
          : U.el('span.badge.badge-muted', { text: JTS.courseUI.phaseSub(stop.phase) })
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
    } else if (stop.from) {
      var codes = P.lessons.filter(function (l) { return l.n3 >= stop.from && l.n3 <= stop.to; })
        .sort(function (a, b) { return a.n3 - b.n3; });
      if (codes.length) {
        /* The topics by name — a code says nothing to a student who has not
           met the unit yet. They are read here, not opened from here, and
           the list is folded until its arrow is pressed. */
        var chips = U.el('div.rm-topics', { hidden: true });
        codes.forEach(function (l) {
          chips.appendChild(U.el('div.rm-topic', { text: pick(l.t) }));
        });
        var arrow = U.el('span.rm-fold-arrow', { text: '▾', 'aria-hidden': 'true' });
        var fold = U.el('button.rm-fold', {
          type: 'button', 'aria-expanded': 'false',
          onclick: function () {
            chips.hidden = !chips.hidden;
            fold.setAttribute('aria-expanded', String(!chips.hidden));
            arrow.textContent = chips.hidden ? '▾' : '▴';
          }
        }, [U.el('span.rm-fact-lab', { text: t('roadmap.whatYouDo') }), arrow]);
        panel.appendChild(U.el('div.stack-sm', null, [fold, chips]));
      }
    }

    if (stop.phase.state === 'incomplete') {
      panel.appendChild(U.el('div.notice.notice-warn.small', {
        text: stop.phase.test ? t('phase.testMissing', { n: stop.bluebook }) : t('phase.incomplete')
      }));
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

    /* Only the diagnostic has a button, to the test it is. A phase and a
       gate send you nowhere from here. */
    if (stop.cta || stop.cta2) {
      panel.appendChild(U.el('div.rm-panel-foot', null, [
        U.el('span'),
        U.el('div.row.row-wrap', null, [
          stop.cta ? U.el('a.btn.btn-sm' + (info.status === 'current' && !stop.phase.diagnosticDone ? '.btn-primary' : ''), {
            href: stop.cta.href, text: stop.cta.label
          }) : null,
          stop.cta2 ? U.el('a.btn.btn-sm' + (info.status !== 'ahead' && !stop.phase.testEntered ? '.btn-primary' : ''), {
            href: stop.cta2.href, text: stop.cta2.label
          }) : null
        ])
      ]));
    }
    return panel;
  }

  JTS.roadmap = { stops: stops };

  /* --------------------------------------------------------------- screen */

  JTS.router.register('#/roadmap', {
    title: 'roadmap.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.rm-screen');
      root.appendChild(screen);

      var plan = JTS.course.plan();
      var list = stops(plan);
      if (!list.length) { screen.appendChild(ui.empty(t('plan.noPlan'))); return; }
      var current = currentStop(list);
      var selected = current;
      var days = JTS.analytics.daysToExam();
      var exam = plan.examDate;
      var examLabel = exam ? U.fmtDate(U.parseISO(exam), S.settings().uiLang)
        : t('settings.noExamDate');
      function statusFor(stop) { return statusOf(stop); }
      function infoFor(stop) {
        return { status: statusFor(stop), progress: stopProgress(stop) };
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
            text: t('roadmap.weekOf', { n: plan.week.now, total: plan.week.of })
          }),
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
        ui.bar(plan.done, plan.total, plan.done >= plan.total ? 'bar-ok' : ''),
        U.el('span.rm-total-n', {
          text: t('phase.lessonsDone', { n: plan.done, of: plan.total })
        })
      ]));
      screen.appendChild(top);

      var fit = JTS.courseUI.fitBanner(plan);
      if (fit) screen.appendChild(fit);

      /* Map on the left, the stop you are reading on the right. Side by side
         and not stacked, because the road has to stay whole on one screen and
         because a detail two hundred pixels under the pin you just pressed
         does not read as that pin's detail. */
      var mapHost = U.el('div.rm-map');
      var panelHost = U.el('div.rm-panel-host');
      var left = U.el('div.rm-left');
      left.appendChild(mapHost);

      /* No arrow row under the map. Every stop is drawn, named and one press
         away, so a pager that walked the same six stops one at a time was a
         second way to do what the map already does. The arrow KEYS still walk
         it, and so does a swipe on a phone. */

      screen.appendChild(U.el('div.rm-body', null, [left, panelHost]));

      /* Selecting a stop redraws the map's marks and the panel in place. A
         full render() would redraw the whole screen for a click that changed
         one card, and would take the scroll position with it. */
      function select(id) {
        selected = U.clamp(id, 1, list.length);
        var stop = list.filter(function (s) { return s.id === selected; })[0];

        U.clear(panelHost);
        panelHost.appendChild(stopPanel(stop, infoFor(stop), list.length));

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
        pctOf: function (s) { return pctOfStop(stopProgress(s), statusFor(s)); },
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

      /* Nothing under the map: the week-by-week list of units is not here.
         The phases are the stops on the road, and each one's units are in
         the panel beside it. */
    }
  });
})();
