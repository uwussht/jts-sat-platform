/* ==========================================================================
   Screen: Roadmap (#/roadmap)

   The whole preparation drawn as a level map: one winding road from the
   diagnostic at the bottom to exam day at the top, a numbered stop for each
   phase, a ring around each stop for how much of that phase is done, three
   stars over it, and a marker showing which stop the student is standing on
   today.

   The map does not scroll. It is sized to the window so the road always fits
   on one screen; moving along it is done with the arrows, the keyboard, a
   swipe or by tapping a stop, and only the detail beside the map changes.
   Being able to see the whole road at once is the entire point of drawing a
   road — so the detail sits in a column NEXT to the map rather than under it,
   which is also what lets the map be big enough to be worth looking at.

   Two jobs, one module:

   - #/roadmap is the map of THIS student's plan;
   - JTS.roadmap.reminder() is the compact version the dashboard shows every
     day, so the road is a reminder and not a page you have to remember to open.

   Nothing here invents structure. Phase boundaries come from
   JTS.planner.phaseForWeek and the current phase from JTS.planner.currentPhase,
   so this screen and the plan can never disagree.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* The map is drawn in a fixed 400×400 space and the stage is kept square by
     the sizer below, so every position here can be a plain percentage of the
     stage and the road never distorts. */
  var VB = { w: 400, h: 400 };
  var ROWS = [352, 262, 172, 82];   /* the horizontal runs of the road */
  var LEFT = 80, RIGHT = 320;       /* where a run starts and ends */
  var TURN = 58;                    /* how far a U-turn bulges past the run */

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

  /** Someone who asked not to be moved is not moved. */
  function stillPlease() {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  /* ---------------------------------------------------------------- model */

  /** Week ranges per phase, derived from the planner rather than restated. */
  function phaseSpans(totalWeeks) {
    var spans = {};
    for (var w = 0; w < totalWeeks; w++) {
      var id = JTS.planner.phaseForWeek(w, totalWeeks);
      if (!spans[id]) spans[id] = { from: w, to: w };
      else spans[id].to = w;
    }
    return spans;
  }

  /** Lessons done / total inside a phase's week range. */
  function phaseProgress(plan, span) {
    if (!plan || !span) return null;
    var done = 0, total = 0;
    plan.weeks.slice(span.from, span.to + 1).forEach(function (wk) {
      wk.lessons.forEach(function (l) {
        total++;
        if (l.status === 'done') done++;
      });
    });
    return { done: done, total: total };
  }

  /** The same count over the whole plan, for the line above the map. */
  function planProgress(plan) {
    if (!plan) return null;
    var done = 0, total = 0;
    plan.weeks.forEach(function (wk) {
      wk.lessons.forEach(function (l) { total++; if (l.status === 'done') done++; });
    });
    return { done: done, total: total };
  }

  /**
   * Stars are the phase's own sessions — none yet, some, most, all of them.
   * They are progress through the plan and not a score of any kind.
   */
  function starsFor(prog) {
    if (!prog || !prog.total || !prog.done) return 0;
    var r = prog.done / prog.total;
    return r >= 1 ? 3 : r >= 0.6 ? 2 : 1;
  }

  /**
   * How far through a phase, 0..100.
   *
   * A phase with no sessions of its own — the diagnostic week usually has
   * none — is not 0%: there was nothing in it to do. Once the calendar is past
   * it there is nothing left, so it counts as walked; while it is still ahead
   * it counts as untouched. Printing 0% under a tick would be worse than
   * either, because it is the one reading that is certainly wrong.
   */
  function pctOfPhase(prog, status) {
    if (!prog || !prog.total) return status === 'done' ? 100 : 0;
    return Math.round((prog.done / prog.total) * 100);
  }

  /** Real calendar dates for a phase, so "week 5" also means something. */
  function spanDates(plan, span) {
    if (!plan || !span || !plan.weeks[span.from]) return null;
    var from = U.parseISO(plan.weeks[span.from].monday);
    var lastWeek = plan.weeks[Math.min(span.to, plan.weeks.length - 1)];
    var to = U.addDays(U.parseISO(lastWeek.monday), 6);
    return t('roadmap.dates', { from: U.fmtDate(from), to: U.fmtDate(to) });
  }

  function weeksLabel(plan, span, phase) {
    if (!span) return t('roadmap.share', { n: Math.round(phase.share * 100) });
    /* "Weeks 1–1" is not a range anyone says out loud. */
    return span.from === span.to
      ? t('plan.week', { n: span.from + 1 })
      : t('roadmap.weeks', { from: span.from + 1, to: span.to + 1 });
  }

  function ctaFor(phaseId) {
    switch (phaseId) {
      case 1: return { href: '#/diagnostic', label: t('diag.title') };
      case 2: return { href: '#/practice', label: t('nav.practice') };
      case 3: return { href: '#/practice/weak', label: t('practice.weakTitle') };
      case 4: return { href: '#/practice', label: t('practice.mode.rwModule') };
      case 5: return { href: '#/mocks', label: t('nav.mocks') };
      default: return { href: '#/progress', label: t('progress.title') };
    }
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
   * opts.statusOf(phase)  'done' | 'current' | 'ahead'
   * opts.starsOf(phase)   0..3 — how much of that phase is done
   * opts.pctOf(phase)     0..100 — the same thing as the ring around the stop
   * opts.onSelect(id)     called with the phase a student pressed
   * opts.onGoal()         called when the end of the road is pressed
   * opts.here             initials for the "you are here" marker
   */
  function levelMap(opts) {
    var phases = JTS.planner.phases;
    var stops = phases.length + 1;           /* the exam is the last stop */
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

    phases.forEach(function (phase, i) {
      var status = opts.statusOf(phase);
      var stars = opts.starsOf(phase);
      var pct = opts.pctOf(phase);
      var wrap = U.el('div.rm-stop.rm-' + status, { style: '--i:' + i });
      wrap.appendChild(starRow(stars));

      /* The ring is the phase's own progress, drawn where the eye already is.
         It is a plain conic gradient behind the pin, so the pin covers all of
         it but the rim. */
      wrap.appendChild(U.el('span.rm-ring', {
        'aria-hidden': 'true', style: '--p:' + pct
      }));
      wrap.appendChild(U.el('button.rm-pin', {
        type: 'button',
        text: status === 'done' ? '✓' : String(phase.id),
        'aria-label': t('roadmap.step', { n: phase.id, total: phases.length }) + ' · ' +
          t('plan.phase.' + phase.key) + ' · ' + t('roadmap.pctDone', { n: pct }) + ' · ' +
          t('roadmap.stars', { n: stars }),
        'aria-current': status === 'current' ? 'step' : null,
        dataset: { phase: String(phase.id) },
        onclick: function () { opts.onSelect(phase.id); }
      }));
      wrap.appendChild(U.el('span.rm-name', { text: t('plan.phase.' + phase.key) }));

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
    nodes.appendChild(U.el('div.rm-stop.rm-goal', { style: '--i:' + phases.length }, [
      U.el('button.rm-gift', {
        type: 'button', text: '★',
        'aria-label': t('roadmap.examDay') + ' · ' + (opts.examDate || ''),
        onclick: opts.onGoal
      }),
      U.el('span.rm-name', { text: t('roadmap.examDay') }),
      opts.examDate ? U.el('span.rm-sub', { text: opts.examDate }) : null
    ]));

    var doneStops = 0;
    phases.forEach(function (p, i) { if (opts.statusOf(p) === 'done') doneStops = i + 1; });

    /* Place the stops along the road by measuring it, so a pin can never drift
       off the tarmac however the road is redrawn. Percentages, so a resize
       needs no second pass. */
    setTimeout(function () {
      var line = stage.querySelector('.rm-road-done');
      if (!line || !line.getTotalLength) { nodes.style.visibility = ''; return; }
      var len = line.getTotalLength();
      U.$$('.rm-stop', nodes).forEach(function (el, i) {
        var pt = line.getPointAtLength(len * (i / (stops - 1)));
        el.style.left = (pt.x / VB.w * 100) + '%';
        el.style.top = (pt.y / VB.h * 100) + '%';
      });
      nodes.style.visibility = '';
      nodes.classList.add('rm-in');

      /* The walked stretch paints itself in from the start of the road, which
         is the one place on this screen where a second of motion says
         something: that is the distance you have actually covered. */
      var target = len * (1 - doneStops / (stops - 1));
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

  /** Everything worth knowing about one phase, for the panel beside the map. */
  function phasePanel(phase, info) {
    var actions = JTS.planner.actionsForPhase(phase.id, true)
      .filter(function (a, i, arr) { return arr.indexOf(a) === i; });

    /* .is-* and not .rm-done/.rm-current: those two mean "a stop on the
       map" and are counted there — the panel is not a stop. */
    var panel = U.el('div.card.rm-panel.is-' + info.status, null, [
      U.el('div.rm-panel-head', null, [
        U.el('span.rm-panel-n', { text: String(phase.id), 'aria-hidden': 'true' }),
        U.el('div.rm-panel-title', null, [
          U.el('div.xsmall.rm-stepno', {
            text: t('roadmap.step', { n: phase.id, total: JTS.planner.phases.length })
          }),
          U.el('div.h2', { text: t('plan.phase.' + phase.key) })
        ])
      ]),
      U.el('div.row.row-wrap.rm-panel-tags', null, [
        info.status === 'current' ? U.el('span.badge', { text: t('roadmap.youAreHere') })
          : info.status === 'done' ? U.el('span.badge.badge-ok', { text: t('common.done') })
          : null,
        U.el('span.badge.badge-muted', { text: info.weeks }),
        info.dates ? U.el('span.badge.badge-muted', { text: info.dates }) : null
      ]),
      U.el('p.small.muted.rm-panel-desc', { text: t('roadmap.desc.' + phase.key) }),
      U.el('div.rm-fact', null, [
        U.el('span.rm-fact-lab', { text: t('roadmap.whatYouDo') }),
        U.el('span', { text: t('roadmap.you.' + phase.key) })
      ]),
      U.el('div.rm-fact', null, [
        U.el('span.rm-fact-lab', { text: t('roadmap.byTheEnd') }),
        U.el('span', { text: t('roadmap.goal.' + phase.key) })
      ])
    ]);

    if (info.progress && info.progress.total) {
      panel.appendChild(U.el('div.rm-panel-bar', null, [
        ui.bar(info.progress.done, info.progress.total,
          info.progress.done === info.progress.total ? 'bar-ok' : ''),
        U.el('div.xsmall.muted', {
          text: t('roadmap.lessonsDone', { done: info.progress.done, total: info.progress.total })
        })
      ]));
    }

    var cta = ctaFor(phase.id);
    panel.appendChild(U.el('div.rm-panel-foot', null, [
      U.el('div.row.row-wrap', null, actions.map(function (a) {
        return U.el('span.badge.badge-muted', { text: t('plan.action.' + a) });
      })),
      U.el('a.btn.btn-sm' + (info.status === 'current' ? '.btn-primary' : ''), {
        href: cta.href, text: cta.label
      })
    ]));
    return panel;
  }

  /** Six squares on a rule: the whole road at a glance, for the dashboard. */
  function miniTrack(current) {
    var wrap = U.el('div.rm-mini', { role: 'img',
      'aria-label': t('roadmap.step', { n: current, total: JTS.planner.phases.length }) });
    JTS.planner.phases.forEach(function (p) {
      wrap.appendChild(U.el('span.rm-mini-i' +
        (p.id < current ? '.done' : p.id === current ? '.now' : ''), {
        text: String(p.id), title: t('plan.phase.' + p.key)
      }));
    });
    return wrap;
  }

  /**
   * The dashboard reminder. A student should not have to go looking for the
   * road to remember which part of it they are on, so Today carries this every
   * morning: which step, what it is for, how far in, one way back to the map.
   */
  function reminder() {
    var state = S.state();
    if (!state) return null;
    var current = JTS.planner.currentPhase();
    var phase = JTS.planner.phases.filter(function (p) { return p.id === current; })[0]
      || JTS.planner.phases[0];
    var plan = state.plan;
    var totalWeeks = plan ? plan.weeks.length : JTS.analytics.horizonWeeks();
    var span = phaseSpans(totalWeeks)[phase.id];
    var prog = phaseProgress(plan, span);
    var weekNo = JTS.planner.todayWeekIndex() + 1;

    return U.el('div.card.stack-sm', null, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('roadmap.whereYouAre') }),
        plan ? U.el('span.badge.badge-muted', {
          text: t('roadmap.weekOf', { n: weekNo, total: totalWeeks })
        }) : null
      ]),
      miniTrack(current),
      U.el('div.stack-sm', null, [
        U.el('div.row.row-wrap', { style: 'gap:8px;align-items:center' }, [
          U.el('b', { text: t('roadmap.step', { n: phase.id, total: JTS.planner.phases.length }) +
            ' · ' + t('plan.phase.' + phase.key) }),
          starRow(starsFor(prog))
        ]),
        U.el('p.small.muted', { text: t('roadmap.you.' + phase.key) })
      ]),
      prog && prog.total ? ui.bar(prog.done, prog.total) : null,
      prog && prog.total ? U.el('div.xsmall.muted', {
        text: t('roadmap.lessonsDone', { done: prog.done, total: prog.total })
      }) : null,
      U.el('a.btn.btn-sm', { href: '#/roadmap', text: t('roadmap.openRoadmap') })
    ]);
  }

  JTS.roadmap = { reminder: reminder, phaseSpans: phaseSpans, starsFor: starsFor };

  /* --------------------------------------------------------------- screen */

  JTS.router.register('#/roadmap', {
    title: 'roadmap.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.rm-screen');
      root.appendChild(screen);

      var phases = JTS.planner.phases;
      var plan = state.plan;
      var current = JTS.planner.currentPhase();
      var totalWeeks = plan ? plan.weeks.length : JTS.analytics.horizonWeeks();
      var spans = phaseSpans(totalWeeks);
      var days = JTS.analytics.daysToExam();
      var exam = state.examDate && state.examDate.testDate;
      var examLabel = exam ? U.fmtDate(U.parseISO(exam), S.settings().uiLang)
        : t('settings.noExamDate');
      var overall = planProgress(plan);
      var selected = current;

      function statusOf(p) {
        return p.id < current ? 'done' : p.id === current ? 'current' : 'ahead';
      }
      function pctOf(p) {
        return pctOfPhase(phaseProgress(plan, spans[p.id]), statusOf(p));
      }
      function infoFor(p) {
        return {
          status: statusOf(p),
          weeks: weeksLabel(plan, spans[p.id], p),
          dates: spanDates(plan, spans[p.id]),
          progress: phaseProgress(plan, spans[p.id])
        };
      }

      /* One line of state, then the map. Everything else is available on
         request; nothing else is allowed to push the road off the screen. */
      var top = U.el('div.rm-top', null, [
        U.el('div.rm-top-who', null, [
          U.el('div.eyebrow', { text: t('roadmap.whereYouAre') }),
          U.el('div.h2', { text: t('plan.phase.' +
            (phases.filter(function (p) { return p.id === current; })[0] || phases[0]).key) })
        ]),
        U.el('div.row.row-wrap.rm-top-meta', null, [
          U.el('span.badge.badge-muted', {
            text: t('today.countdown') + ': ' + (days === null ? '—' : Math.max(0, days))
          }),
          plan ? U.el('span.badge.badge-muted', {
            text: t('roadmap.weekOf', { n: JTS.planner.todayWeekIndex() + 1, total: totalWeeks })
          }) : null,
          U.el('button.btn.btn-sm', {
            type: 'button', text: t('roadmap.howTitle'),
            onclick: function () {
              ui.modal({ title: t('roadmap.howTitle'), content: howItWorks() });
            }
          })
        ])
      ]);
      /* How far along the whole road, not just this phase: a thin rule under
         the header so the answer is on screen without a click. */
      if (overall && overall.total) {
        top.appendChild(U.el('div.rm-total', null, [
          U.el('span.rm-total-lab', { text: t('roadmap.overall') }),
          ui.bar(overall.done, overall.total,
            overall.done === overall.total ? 'bar-ok' : ''),
          U.el('span.rm-total-n', {
            text: t('roadmap.pctDone', { n: U.pct(overall.done, overall.total) })
          })
        ]));
      }
      screen.appendChild(top);

      if (!plan) {
        screen.appendChild(U.el('div.notice.notice-warn', null, [
          U.el('div', null, [
            U.el('div', { text: t('roadmap.noPlan') }),
            U.el('a.btn.btn-sm.btn-primary', { href: '#/diagnostic', text: t('diag.title'),
              style: 'margin-top:10px' })
          ])
        ]));
      }

      /* All six at once, under the step you are reading: the map is the shape of
         the plan and this is its table of contents — a second, faster way to
         jump, and the answer to "how long is each of these" without six clicks.
         Deliberately not .rm-done/.rm-current/.rm-sel: those classes mean
         something on the map and are counted there. */
      function stepIndex(onPick) {
        var rows = U.el('div.rm-idx-list');
        phases.forEach(function (p) {
          var info = infoFor(p);
          var pct = pctOf(p);
          rows.appendChild(U.el('button.rm-idx-row' +
            (info.status === 'done' ? '.is-done' : info.status === 'current' ? '.is-now' : ''), {
            type: 'button', dataset: { step: String(p.id) },
            onclick: function () { onPick(p.id); }
          }, [
            U.el('span.rm-idx-n', {
              text: info.status === 'done' ? '\u2713' : String(p.id), 'aria-hidden': 'true'
            }),
            U.el('span.rm-idx-text', null, [
              U.el('span.rm-idx-name', { text: t('plan.phase.' + p.key) }),
              U.el('span.rm-idx-weeks', { text: info.weeks })
            ]),
            U.el('span.rm-idx-bar', { 'aria-hidden': 'true' }, [
              U.el('span', { style: 'width:' + pct + '%' })
            ])
          ]));
        });
        return U.el('div.card.rm-idx', null, [
          U.el('div.eyebrow', { text: t('roadmap.allSteps') }), rows
        ]);
      }

      /* Map on the left, the step you are reading on the right. Side by side
         and not stacked, because the road has to stay whole on one screen and
         because a detail two hundred pixels under the pin you just pressed
         does not read as that pin's detail. */
      var mapHost = U.el('div.rm-map');
      var panelHost = U.el('div.rm-panel-host');
      var right = U.el('div.rm-right');
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

      var index = stepIndex(function (id) { select(id); });
      right.appendChild(panelHost);
      right.appendChild(index);
      screen.appendChild(U.el('div.rm-body', null, [left, right]));

      /* Selecting a stop redraws the map's marks and the panel in place. A
         full render() would redraw the whole screen for a click that changed
         one card, and would take the scroll position with it. */
      function select(id) {
        selected = U.clamp(id, 1, phases.length);
        var phase = phases.filter(function (p) { return p.id === selected; })[0];

        U.clear(panelHost);
        panelHost.appendChild(phasePanel(phase, infoFor(phase)));

        stepLabel.textContent = t('roadmap.step', { n: selected, total: phases.length });
        prevBtn.disabled = selected === 1;
        nextBtn.disabled = selected === phases.length;

        U.$$('.rm-idx-row', right).forEach(function (row) {
          var on = row.dataset.step === String(selected);
          row.classList.toggle('is-on', on);
          row.setAttribute('aria-pressed', String(on));
        });

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
        statusOf: statusOf,
        starsOf: function (p) {
          var pr = phaseProgress(plan, spans[p.id]);
          /* Same reading as the ring: a walked phase with nothing in it is
             finished, not unstarted. */
          return (!pr || !pr.total) && statusOf(p) === 'done' ? 3 : starsFor(pr);
        },
        pctOf: pctOf,
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
        if (e.key === 'End') { e.preventDefault(); select(phases.length); }
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
    }
  });
})();
