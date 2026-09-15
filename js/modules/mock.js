/* ==========================================================================
   mock.js (part 1) — the simulation engine.

   A run is a record in profile.mocks. It owns four modules; each module owns
   one session, and the session engine owns the questions. Nothing about a run
   lives in a closure, so closing the laptop mid-module loses nothing but the
   seconds since the last save.

   The two rules that make this a simulation rather than a long practice set:
   a finished module can never be reopened, and module 2 of each section is
   chosen only after module 1 has been graded.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, S = JTS.store;

  /* Difficulty preference per module, as weights over the three bands. A
     first module is a spread; the routed second modules lean hard or easy
     without ever becoming uniform, which would make them feel artificial. */
  var PREFER = {
    mixed:  { 1: 1.0, 2: 1.4, 3: 1.0 },
    harder: { 1: 0.1, 2: 1.0, 3: 2.0 },
    easier: { 1: 2.0, 2: 1.0, 3: 0.1 }
  };

  /* About a quarter of Digital SAT Math is student-produced response. */
  var MIN_SPR = { 22: 5 };

  function blueprint() {
    return JTS.config.examStructure.filter(function (m) { return m.section; });
  }

  /**
   * Build one module's question list.
   *
   * The mix mirrors the real form in the two ways that matter for practice:
   * domains appear roughly in proportion to their weight on the exam, and Math
   * keeps about a quarter of its items in student-produced-response form.
   * `prefer` steers difficulty; it never hard-filters, so a thin bank still
   * produces a full module instead of a short one.
   */
  function pickSet(section, count, opts) {
    opts = opts || {};
    var prefer = opts.prefer || PREFER.mixed;
    var pool = JTS.bank.query({
      section: section,
      excludeIds: opts.exclude || [],
      licenseStatus: 'original'
    });
    if (!pool.length) return [];

    /* Score once. Scoring inside a comparator would make the sort itself
       inconsistent, which is undefined behaviour, not just untidy. */
    var sc = {};
    pool.forEach(function (q) { sc[q.id] = (prefer[q.difficulty] || 0) + Math.random(); });
    function byScore(a, b) { return sc[b.id] - sc[a.id]; }

    var byDomain = U.groupBy(pool, function (q) {
      var sk = JTS.skills.get(q.skillId);
      return sk ? sk.domain : 'other';
    });
    var domainIds = Object.keys(byDomain);
    var weight = {}, totalWeight = 0;
    domainIds.forEach(function (d) {
      weight[d] = U.sum(JTS.skills.all()
        .filter(function (s) { return s.domain === d; })
        .map(function (s) { return s.examWeight; })) || 0.01;
      totalWeight += weight[d];
    });

    var chosen = [], rest = [];
    domainIds.forEach(function (d) {
      var list = byDomain[d].slice().sort(byScore);
      var want = Math.round(count * (weight[d] / totalWeight));
      chosen = chosen.concat(list.slice(0, want));
      rest = rest.concat(list.slice(want));
    });
    rest.sort(byScore);

    /* Per-domain rounding leaves the set a question or two short or long. */
    while (chosen.length < count && rest.length) chosen.push(rest.shift());
    if (chosen.length > count) {
      chosen.sort(byScore);
      rest = rest.concat(chosen.slice(count));
      chosen = chosen.slice(0, count);
    }

    /* Math without enough grid-ins is not a Math module. Swap the weakest
       multiple-choice picks out rather than appending past the count. */
    var minSpr = opts.minSpr || MIN_SPR[count] || 0;
    if (minSpr) {
      var sprPool = rest.filter(function (q) { return q.type === 'spr'; }).sort(byScore);
      var have = chosen.filter(function (q) { return q.type === 'spr'; }).length;
      while (have < minSpr && sprPool.length) {
        var dropIdx = -1, worst = Infinity;
        chosen.forEach(function (q, i) {
          if (q.type === 'spr') return;
          if (sc[q.id] < worst) { worst = sc[q.id]; dropIdx = i; }
        });
        if (dropIdx < 0) break;
        chosen[dropIdx] = sprPool.shift();
        have++;
      }
    }

    /* Presentation order. R&W modules on the real exam run domain by domain;
       Math runs roughly easy to hard. Both are worth reproducing — a student
       who learns to pace against them is learning something transferable. */
    var domainOrder = {};
    JTS.skills.domains(section).forEach(function (d, i) { domainOrder[d.id] = i; });
    chosen.sort(function (a, b) {
      var sa = JTS.skills.get(a.skillId), sb = JTS.skills.get(b.skillId);
      if (section === 'rw') {
        var da = domainOrder[sa ? sa.domain : ''] || 0, db = domainOrder[sb ? sb.domain : ''] || 0;
        if (da !== db) return da - db;
      }
      return a.difficulty - b.difficulty;
    });
    return chosen.map(function (q) { return q.id; });
  }

  JTS.mock = {
    PREFER: PREFER,
    pickSet: pickSet,
    breakMs: function () {
      var b = JTS.config.examStructure.filter(function (m) { return m.id === 'break'; })[0];
      return (b ? b.minutes : 10) * 60000;
    },

    /** Everything a run needs from the bank, so the hub can say no up front. */
    capacity: function () {
      var need = { rw: 0, math: 0 };
      blueprint().forEach(function (m) { need[m.section] += m.count; });
      var have = {
        rw: JTS.bank.query({ section: 'rw', licenseStatus: 'original' }).length,
        math: JTS.bank.query({ section: 'math', licenseStatus: 'original' }).length
      };
      return {
        need: need, have: have,
        ok: have.rw >= need.rw && have.math >= need.math,
        total: { have: have.rw + have.math, need: need.rw + need.math }
      };
    },

    all: function () {
      var s = S.state();
      return s ? (s.mocks || []) : [];
    },
    get: function (id) {
      return this.all().filter(function (r) { return r.id === id; })[0] || null;
    },
    finished: function () {
      return this.all().filter(function (r) { return r.status === 'finished'; });
    },
    /** At most one run is ever in flight; the hub refuses to start a second. */
    active: function () {
      return this.all().filter(function (r) { return r.status === 'in-progress'; })[0] || null;
    },

    create: function (opts) {
      opts = opts || {};
      var run = {
        id: U.uid('mock'),
        startedAt: Date.now(),
        finishedAt: null,
        status: 'in-progress',
        timed: opts.timed !== false,
        index: 0,                 /* which module is current */
        phase: 'module',          /* 'module' | 'handoff' | 'break' | 'done' */
        breakEndsAt: null,
        modules: blueprint().map(function (m) {
          return {
            key: m.id, section: m.section, count: m.count, minutes: m.minutes,
            adaptive: m.adaptive, route: null, questionIds: null,
            sessionId: null, correct: null, answered: null, timeMs: 0,
            closedByTimer: false
          };
        })
      };
      S.update(function (st) { (st.mocks = st.mocks || []).push(run); });
      return this.get(run.id);
    },

    usedIds: function (run) {
      return run.modules.reduce(function (acc, m) {
        return acc.concat(m.questionIds || []);
      }, []);
    },

    /**
     * Fill in a module's questions. Module 1 is a spread; module 2 is chosen
     * from what is left, in the band its own module 1 earned.
     */
    prepare: function (run, index) {
      var m = run.modules[index];
      if (m.questionIds) return m;
      var prefer = PREFER.mixed;
      if (m.adaptive) {
        var first = run.modules[index - 1];
        var share = first.answered === null || !first.count ? 0
          : (first.correct || 0) / first.count;
        m.route = share >= JTS.config.adaptiveThreshold ? 'harder' : 'easier';
        prefer = PREFER[m.route];
      }
      m.questionIds = pickSet(m.section, m.count, {
        exclude: this.usedIds(run), prefer: prefer
      });
      S.save();
      return m;
    },

    /** Open the current module as an exam-mode session. */
    startModule: function (runId) {
      var run = this.get(runId);
      if (!run || run.status !== 'in-progress') return null;
      var m = this.prepare(run, run.index);
      if (!m.questionIds.length) return null;
      run.phase = 'module';
      S.save();
      return JTS.session.start({
        kind: 'mock',
        mode: 'exam',
        title: JTS.t('mock.moduleOf', {
          name: JTS.t('common.' + m.section), n: m.key.slice(-1)
        }),
        questionIds: m.questionIds,
        /* Untimed runs keep a clock on screen but it never closes the module,
           and it stops when the screen does. */
        durationMs: m.minutes * 60000,
        softTimer: !run.timed,
        wallClock: run.timed,
        returnHash: '#/mocks',
        finishHash: '#/mocks/run',
        meta: { mockId: run.id, moduleIndex: run.index, moduleKey: m.key }
      });
    },

    /**
     * Grade a finished module and decide what comes next. Idempotent: a reload
     * on the hand-off screen must not advance the run a second time.
     */
    recordSession: function (sessionId) {
      /* Resolved through the session's own meta rather than through whichever
         run happens to be active, so reloading on the hand-off URL of a run
         that has already closed still finds its way to the result. */
      var summary = JTS.session.summary(sessionId);
      if (!summary || !summary.meta || !summary.meta.mockId) return null;
      var run = this.get(summary.meta.mockId);
      if (!run || run.status !== 'in-progress') return run;
      var m = run.modules[summary.meta.moduleIndex];
      if (!m || m.sessionId) return run;         /* already recorded */

      m.sessionId = sessionId;
      m.correct = summary.correct;
      m.answered = summary.answered;
      m.timeMs = summary.elapsedMs;
      m.closedByTimer = run.timed && summary.elapsedMs >= m.minutes * 60000 - 1500;

      var last = run.index >= run.modules.length - 1;
      if (last) {
        run.status = 'finished';
        run.finishedAt = Date.now();
        run.phase = 'done';
      } else {
        run.index += 1;
        /* The break sits between the two sections, never between the two
           modules of one section. */
        var crossesSections = run.modules[run.index].section !== m.section;
        run.phase = crossesSections ? 'break' : 'handoff';
        run.breakEndsAt = crossesSections ? Date.now() + JTS.mock.breakMs() : null;
        /* Routing is decided now so the hand-off screen can name it. */
        JTS.mock.prepare(run, run.index);
      }
      S.save();
      if (run.status === 'finished') JTS.badges.evaluate();
      return run;
    },

    /** Leave the break early, exactly as the real exam allows. */
    endBreak: function (runId) {
      var run = this.get(runId);
      if (!run || run.phase !== 'break') return;
      run.phase = 'handoff';
      run.breakEndsAt = null;
      S.save();
    },

    discard: function (runId) {
      var run = this.get(runId);
      if (!run) return;
      run.status = 'abandoned';
      run.finishedAt = Date.now();
      run.phase = 'done';
      var ses = JTS.session.current();
      if (ses && ses.meta && ses.meta.mockId === runId) S.patch({ activeSession: null });
      S.save();
    },

    raw: function (run, section) {
      var mods = run.modules.filter(function (m) { return m.section === section; });
      return {
        correct: U.sum(mods.map(function (m) { return m.correct || 0; })),
        answered: U.sum(mods.map(function (m) { return m.answered || 0; })),
        total: U.sum(mods.map(function (m) { return m.count; })),
        route: (mods[1] && mods[1].route) || null,
        complete: mods.every(function (m) { return m.sessionId; })
      };
    },

    /**
     * Raw count to an internal JTS range. This is deliberately not an SAT
     * score and is never shown as a single number (§14.12).
     *
     * Two pieces:
     *  - the module-2 route sets the band. On the real exam, reaching the
     *    harder second module is what puts the upper half of the scale in play
     *    at all; staying on the easier one caps what the form can return.
     *    400-800 and 200-600 are JTS's working bands for that, not College
     *    Board's published figures — there are none.
     *  - inside the band the raw share is linear, which equating is not.
     *
     * The +/-40 width stands for everything the model does not know: equating,
     * item difficulty beyond our own three labels, and the fact that our bank
     * is not a real form. Narrowing it would be a lie about our precision.
     */
    estimate: function (run, section) {
      var r = this.raw(run, section);
      if (!r.complete || !r.total) return null;
      var band = r.route === 'harder' ? 400 : 200;
      var mid = Math.round((band + (r.correct / r.total) * 400) / 10) * 10;
      return {
        low: U.clamp(mid - 40, 200, 800),
        high: U.clamp(mid + 40, 200, 800),
        route: r.route, raw: r
      };
    },

    totalEstimate: function (run) {
      var rw = this.estimate(run, 'rw'), math = this.estimate(run, 'math');
      if (!rw || !math) return null;
      return {
        low: U.clamp(rw.low + math.low, 400, 1600),
        high: U.clamp(rw.high + math.high, 400, 1600)
      };
    },

    /** Skills the run actually got wrong, heaviest first. */
    weakSkills: function (run, n) {
      var missed = {};
      run.modules.forEach(function (m) {
        var sum = m.sessionId && JTS.session.summary(m.sessionId);
        if (!sum) return;
        sum.questionIds.forEach(function (qid) {
          var a = sum.answers[qid];
          if (a && a.correct) return;
          var q = JTS.bank.get(qid);
          if (!q) return;
          missed[q.skillId] = (missed[q.skillId] || 0) + 1;
        });
      });
      return Object.keys(missed)
        .map(function (id) {
          var sk = JTS.skills.get(id) || { examWeight: 0.02 };
          return { skillId: id, missed: missed[id], weight: sk.examWeight };
        })
        .sort(function (a, b) {
          return (b.missed * b.weight) - (a.missed * a.weight);
        })
        .slice(0, n || 5);
    },

    /* ------------------------------------------------------ imported results */

    SOURCES: ['official', 'bluebook', 'other'],

    addReport: function (rec) {
      var row = {
        id: U.uid('sr'),
        date: rec.date,
        source: rec.source || 'other',
        rw: Number(rec.rw), math: Number(rec.math),
        total: Number(rec.rw) + Number(rec.math),
        addedAt: Date.now()
      };
      S.update(function (st) { (st.scoreReports = st.scoreReports || []).push(row); });
      return row;
    },
    removeReport: function (id) {
      S.update(function (st) {
        st.scoreReports = (st.scoreReports || []).filter(function (r) { return r.id !== id; });
      });
    },
    reports: function () {
      var s = S.state();
      return ((s && s.scoreReports) || []).slice().sort(function (a, b) {
        return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
      });
    },

    /** Is a section score a plausible Digital SAT section score? */
    validScore: function (v) {
      var n = Number(v);
      return !isNaN(n) && n >= 200 && n <= 800 && n % 10 === 0;
    }
  };
})();

/* ==========================================================================
   mock.js (part 2) — the hub (#/mocks)

   Two independent halves that happen to share a page: results the student
   brings in from outside, and simulations run here. Only the second half is
   gated on screen width.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  function sourceLabel(id) { return t('mock.source.' + id); }

  function fitsMock() { return window.innerWidth >= JTS.config.mockMinWidth; }

  /* ------------------------------------------------------------ import form */

  function importModal(onDone) {
    var m;
    var date = U.el('input.input', { type: 'date', id: 'sr-date', value: U.iso(new Date()) });
    var source = U.el('select.select', { id: 'sr-source' },
      JTS.mock.SOURCES.map(function (s) {
        return U.el('option', { value: s, text: sourceLabel(s) });
      }));
    var rw = U.el('input.input', { type: 'number', id: 'sr-rw', min: '200', max: '800', step: '10', placeholder: '600' });
    var math = U.el('input.input', { type: 'number', id: 'sr-math', min: '200', max: '800', step: '10', placeholder: '700' });
    var total = U.el('div.stat-value', { text: '—', id: 'sr-total' });
    var err = U.el('div.error-text', { role: 'alert', hidden: true });

    /* Total is derived, never typed: a total that disagrees with its parts is
       a data-entry bug the student should not be able to create. */
    function retotal() {
      var a = Number(rw.value), b = Number(math.value);
      total.textContent = (JTS.mock.validScore(a) && JTS.mock.validScore(b)) ? String(a + b) : '—';
    }
    rw.addEventListener('input', retotal);
    math.addEventListener('input', retotal);

    m = ui.modal({
      title: t('mock.addResult'),
      content: U.el('div.stack', null, [
        ui.field(t('mock.import.date'), date),
        ui.field(t('mock.import.source'), source),
        U.el('div.grid.grid-2', null, [
          ui.field(t('mock.import.rw'), rw),
          ui.field(t('mock.import.math'), math)
        ]),
        U.el('div.stat', null, [
          U.el('div.stat-label', { text: t('mock.import.total') }), total
        ]),
        err
      ]),
      actions: [
        U.el('button.btn', { type: 'button', text: t('common.cancel'), onclick: function () { m.close(); } }),
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('mock.import.save'),
          onclick: function () {
            if (!date.value) { err.hidden = false; err.textContent = t('mock.invalidDate'); return; }
            if (!JTS.mock.validScore(rw.value) || !JTS.mock.validScore(math.value)) {
              err.hidden = false; err.textContent = t('mock.invalidScore'); return;
            }
            JTS.mock.addReport({
              date: date.value, source: source.value,
              rw: Number(rw.value), math: Number(math.value)
            });
            m.close();
            ui.toast(t('common.saved'), 'ok');
            onDone();
          }
        })
      ]
    });
  }

  /* -------------------------------------------------------------- history */

  function historyTable(rerender) {
    var rows = JTS.mock.reports();
    if (!rows.length) return ui.empty(t('mock.noResults'));

    var table = U.el('table.table');
    table.appendChild(U.el('thead', null, [U.el('tr', null, [
      U.el('th', { text: t('common.date') }),
      U.el('th', { text: t('common.source') }),
      U.el('th.num', { text: t('common.rwShort') }),
      U.el('th.num', { text: t('common.math') }),
      U.el('th.num', { text: t('mock.import.total') }),
      U.el('th.num', { text: t('mock.delta') }),
      U.el('th', { text: '' })
    ])]));
    var body = U.el('tbody');
    rows.forEach(function (r, i) {
      var prev = rows[i - 1];
      var d = prev ? r.total - prev.total : null;
      body.appendChild(U.el('tr', null, [
        U.el('td', { text: r.date }),
        U.el('td', { text: sourceLabel(r.source) }),
        U.el('td.num', { text: String(r.rw) }),
        U.el('td.num', { text: String(r.math) }),
        U.el('td.num', null, [U.el('b', { text: String(r.total) })]),
        U.el('td.num' + (d === null ? '' : d >= 0 ? '' : ''), {
          text: d === null ? '—' : (d > 0 ? '+' : '') + d,
          style: d === null ? '' : 'color:var(--' + (d > 0 ? 'ok' : d < 0 ? 'danger' : 'muted') + ')'
        }),
        U.el('td', null, [U.el('button.btn.btn-sm.btn-ghost', {
          type: 'button', text: '✕', 'aria-label': t('mock.deleteReport') + ' ' + r.date,
          onclick: function () {
            ui.confirm({ title: t('mock.deleteReport'), message: r.date + ' · ' + r.total })
              .then(function (yes) { if (yes) { JTS.mock.removeReport(r.id); rerender(); } });
          }
        })])
      ]));
    });
    table.appendChild(body);
    return U.el('div.table-wrap', null, [table]);
  }

  function trajectory() {
    var s = S.state();
    var goal = s && s.goals ? s.goals.total : null;
    var imported = JTS.mock.reports().map(function (r) {
      return { x: new Date(r.date + 'T00:00:00').getTime(), y: r.total };
    });
    var internal = JTS.mock.finished().map(function (run) {
      var est = JTS.mock.totalEstimate(run);
      return est ? { x: run.finishedAt, y: Math.round((est.low + est.high) / 2) } : null;
    }).filter(Boolean).sort(function (a, b) { return a.x - b.x; });

    if (!imported.length && !internal.length) return null;

    var series = [];
    if (imported.length) series.push({ label: t('mock.seriesImported'), color: 'var(--brand-600)', points: imported });
    if (internal.length) series.push({ label: t('mock.seriesInternal'), color: 'var(--warn)', points: internal });

    return U.el('div.stack-sm', null, [
      ui.lineChart(series, {
        target: goal || undefined, yMin: 400, yMax: 1600,
        ariaLabel: t('mock.trajectory')
      }),
      U.el('div.legend', null, series.map(function (x) {
        return U.el('span', null, [
          U.el('span.badge-dot', { style: 'background:' + x.color }), ' ' + x.label
        ]);
      }).concat(goal ? [U.el('span', { text: '– – ' + t('mock.goalLine') + ' ' + goal })] : []))
    ]);
  }

  /* ----------------------------------------------------------- simulation */

  function runCard(rerender) {
    var cap = JTS.mock.capacity();
    var active = JTS.mock.active();
    var card = U.el('div.card.stack', null, [
      /* The heading is the name of the thing, not the name of the button that
         starts it: "Start the simulation" must match one clickable element. */
      U.el('h2.h2', { text: t('mock.internal') }),
      U.el('p.small.muted', { text: t('mock.runLead') }),
      U.el('p.xsmall.mono.muted', { text: t('mock.structure') }),
      U.el('p.xsmall.muted', { text: t('mock.routing') })
    ]);

    if (active) {
      card.appendChild(U.el('div.notice.notice-warn', null, [
        U.el('div.stack-sm', null, [
          U.el('div', null, [U.el('b', { text: t('mock.unfinished') })]),
          U.el('div.small', { text: t('mock.oneAtATime') }),
          U.el('div.small', {
            text: t('mock.inProgressLine', {
              n: active.index + 1, total: active.modules.length,
              date: U.fmtDate(new Date(active.startedAt), S.settings().uiLang)
            })
          }),
          U.el('div.row.row-wrap', null, [
            U.el('button.btn.btn-primary', {
              type: 'button', text: t('mock.resumeMock'),
              onclick: function () { JTS.router.go('#/mocks/run'); }
            }),
            U.el('button.btn.btn-danger', {
              type: 'button', text: t('mock.discardMock'),
              onclick: function () {
                ui.confirm({ title: t('mock.abandon'), message: t('mock.abandonConfirm'),
                  okText: t('common.discard') }).then(function (yes) {
                  if (!yes) return;
                  JTS.mock.discard(active.id); rerender();
                });
              }
            })
          ])
        ])
      ]));
      return card;
    }

    if (!cap.ok) {
      card.appendChild(U.el('div.notice.notice-warn', {
        text: t('mock.notEnoughQuestions', { have: cap.total.have, need: cap.total.need })
      }));
      return card;
    }

    if (!fitsMock()) {
      card.appendChild(U.el('div.notice.desktop-only-note', null, [
        U.el('div.stack-sm', null, [
          U.el('div', null, [U.el('b', { text: t('mock.desktopOnly') })]),
          U.el('div.small', { text: t('mock.desktopOnlyNote') }),
          U.el('div.small', { text: t('mock.needDesktop') })
        ])
      ]));
      return card;
    }

    /* Timed is the default because an untimed mock measures something else. */
    var timed = true;
    var group = U.el('div.grid.grid-2');
    function paint() {
      U.clear(group);
      [[true, 'mock.timed', 'mock.timedDesc'], [false, 'mock.untimed', 'mock.untimedDesc']]
        .forEach(function (row) {
          var on = timed === row[0];
          group.appendChild(U.el('button.check-card', {
            type: 'button', 'aria-pressed': String(on),
            style: 'text-align:left;cursor:pointer',
            onclick: function () { timed = row[0]; paint(); }
          }, [
            U.el('div.h3', { text: t(row[1]) }),
            U.el('div.small.muted', { text: t(row[2]) })
          ]));
        });
    }
    paint();
    card.appendChild(group);
    card.appendChild(U.el('button.btn.btn-primary.btn-lg', {
      type: 'button', text: t('mock.start'),
      onclick: function () {
        var run = JTS.mock.create({ timed: timed });
        JTS.mock.startModule(run.id);
      }
    }));
    return card;
  }

  function finishedRuns() {
    var runs = JTS.mock.finished().slice().reverse();
    if (!runs.length) return null;
    var wrap = U.el('div.stack-sm');
    runs.forEach(function (run) {
      var est = JTS.mock.totalEstimate(run);
      wrap.appendChild(U.el('div.card.card-sm.row-between', null, [
        U.el('div.stack-sm', null, [
          U.el('div', null, [
            U.el('b', { text: U.fmtDate(new Date(run.finishedAt), S.settings().uiLang) }),
            run.timed ? null : U.el('span.badge.badge-muted', { text: t('mock.untimedTag'),
              style: 'margin-inline-start:8px' })
          ]),
          U.el('div.small.muted', {
            text: t('mock.rawScore') + ': ' +
              t('mock.rawOf', {
                correct: JTS.mock.raw(run, 'rw').correct + JTS.mock.raw(run, 'math').correct,
                total: JTS.mock.raw(run, 'rw').total + JTS.mock.raw(run, 'math').total
              }) +
              (est ? ' · ' + t('mock.estimate') + ' ' +
                t('mock.estimateRange', { low: est.low, high: est.high }) : '')
          })
        ]),
        U.el('button.btn.btn-sm', {
          type: 'button', text: t('mock.openResult'),
          onclick: function () { JTS.router.go('#/mocks/result?run=' + run.id); }
        })
      ]));
    });
    return wrap;
  }

  JTS.router.register('#/mocks', {
    title: 'mock.title',
    render: function (root) {
      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);

      function rerender() { U.clear(screen); paint(); }

      function paint() {
        screen.appendChild(runCard(rerender));

        var runs = finishedRuns();
        if (runs) screen.appendChild(U.el('div.stack-sm', null, [
          U.el('h2.h2', { text: t('mock.reviewOnly') }), runs
        ]));

        var importCard = U.el('div.card.stack', null, [
          U.el('div.row-between', null, [
            U.el('h2.h2', { text: t('mock.imported') + ' · ' + t('mock.history') }),
            U.el('button.btn.btn-sm.btn-primary', {
              type: 'button', text: t('mock.addResult'),
              onclick: function () { importModal(rerender); }
            })
          ]),
          historyTable(rerender)
        ]);
        screen.appendChild(importCard);

        var chart = trajectory();
        if (chart) screen.appendChild(U.el('div.card.stack-sm', null, [
          U.el('h2.h2', { text: t('mock.trajectory') }), chart
        ]));
      }

      paint();

      /* The width gate is a real gate, not a one-off read: rotating a tablet
         or dragging a window past 1024px has to change the answer. */
      var wasFitting = fitsMock();
      function onResize() {
        if (fitsMock() === wasFitting) return;
        wasFitting = fitsMock();
        rerender();
      }
      window.addEventListener('resize', onResize);
      return function () { window.removeEventListener('resize', onResize); };
    }
  });
})();

/* ==========================================================================
   mock.js (part 3) — the run controller (#/mocks/run)

   Everything between two modules lives here: grading the module that just
   closed, the ten-minute break, and the hand-off card. The controller is
   reached only by JTS.session.finish() redirecting to it, or by the student
   resuming, so it must be safe to load twice with the same URL.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  function sectionName(sec) { return t('common.' + sec); }
  function moduleNo(m) { return Number(m.key.slice(-1)); }

  function moduleSummaryRow(run, m, i) {
    var done = !!m.sessionId;
    return U.el('tr', null, [
      U.el('td', { text: t('mock.moduleCard', { section: sectionName(m.section), n: moduleNo(m) }) }),
      U.el('td.num', { text: t('mock.moduleSpec', { count: m.count, minutes: m.minutes }) }),
      U.el('td', {
        text: !m.adaptive ? t('mock.routeFirst')
          : m.route ? t('mock.route' + (m.route === 'harder' ? 'Harder' : 'Easier')) : '—'
      }),
      U.el('td.num', {
        text: done ? t('mock.rawOf', { correct: m.correct, total: m.count })
          : (i === run.index ? '…' : '—')
      })
    ]);
  }

  function moduleTable(run) {
    var table = U.el('table.table');
    table.appendChild(U.el('thead', null, [U.el('tr', null, [
      U.el('th', { text: t('mock.module') }),
      U.el('th.num', { text: t('common.questions') }),
      U.el('th', { text: t('mock.route') }),
      U.el('th.num', { text: t('mock.rawScore') })
    ])]));
    var body = U.el('tbody');
    run.modules.forEach(function (m, i) { body.appendChild(moduleSummaryRow(run, m, i)); });
    table.appendChild(body);
    return U.el('div.table-wrap', null, [table]);
  }

  JTS.router.register('#/mocks/run', {
    title: 'mock.title',
    render: function (root, route) {
      /* Grading first: this URL is where a finished module lands. */
      var run = route.query.session ? JTS.mock.recordSession(route.query.session) : null;
      if (!run) run = JTS.mock.active();
      if (!run) { JTS.router.go('#/mocks'); return; }
      if (run.status !== 'in-progress') { JTS.router.go('#/mocks/result?run=' + run.id); return; }

      /* A module already in flight belongs on the question screen, not here. */
      var live = JTS.session.current();
      if (live && live.meta && live.meta.mockId === run.id) { JTS.router.go('#/question'); return; }

      /* A break the student sat out with the tab closed is over, but the next
         module is not started behind their back: they come back to the
         hand-off card and press the button, with the full module clock. */
      if (run.phase === 'break' && Date.now() >= run.breakEndsAt) JTS.mock.endBreak(run.id);

      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);
      var breakTimer = null;

      var prev = run.modules[run.index - 1];
      var next = run.modules[run.index];


      if (prev && prev.sessionId) {
        screen.appendChild(U.el('div.notice.notice-ok', null, [
          U.el('div.stack-sm', null, [
            U.el('div', null, [U.el('b', { text: t('mock.moduleEnd') })]),
            U.el('div.small', { text: t('mock.moduleEndNote') }),
            prev.closedByTimer ? U.el('div.small', { text: t('mock.timeUp') }) : null
          ])
        ]));
      }

      /* Routing is announced, not hidden: the student should understand that
         the second module changed because of the first, and the result page
         is going to say so anyway. */
      if (next.adaptive && next.route) {
        screen.appendChild(U.el('div.notice', null, [
          U.el('div.stack-sm', null, [
            U.el('div', null, [U.el('b', {
              text: t(next.route === 'harder' ? 'mock.routedHarder' : 'mock.routedEasier')
            })]),
            U.el('div.small.muted', { text: t('mock.routing') })
          ])
        ]));
      }

      var card = U.el('div.card.stack');
      screen.appendChild(card);

      function startNow() {
        if (breakTimer) breakTimer.stop();
        JTS.mock.endBreak(run.id);
        if (!JTS.mock.startModule(run.id)) {
          var cap = JTS.mock.capacity();
          ui.toast(t('mock.notEnoughQuestions', { have: cap.total.have, need: cap.total.need }), 'err', 5000);
        }
      }

      if (run.phase === 'break') {
        var left = U.el('div.break-clock', { 'aria-hidden': 'true' });
        var leftLabel = U.el('div.sr-only', { role: 'timer', 'aria-live': 'polite' });
        var lastMinute = null;
        card.appendChild(U.el('div.eyebrow', { text: t('mock.break') }));
        card.appendChild(U.el('h2.h2', { text: t('mock.breakLead') }));
        card.appendChild(left);
        card.appendChild(leftLabel);
        card.appendChild(U.el('button.btn.btn-primary', {
          type: 'button', text: t('mock.resumeEarly'), onclick: startNow
        }));

        /* The break runs on the wall clock: reloading it does not extend it,
           and neither does closing the laptop. */
        var remaining = Math.max(0, run.breakEndsAt - Date.now());
        breakTimer = new JTS.Timer({
          durationMs: remaining,
          onTick: function () {
            var ms = Math.max(0, run.breakEndsAt - Date.now());
            left.textContent = U.fmtClock(ms);
            var minute = Math.ceil(ms / 60000);
            if (minute !== lastMinute) {
              lastMinute = minute;
              leftLabel.textContent = t('mock.breakLeft', { time: U.fmtClock(ms) });
            }
          },
          onExpire: startNow
        }).start();
      } else {
        card.appendChild(U.el('div.eyebrow', {
          text: t('mock.moduleCard', { section: sectionName(next.section), n: moduleNo(next) })
        }));
        card.appendChild(U.el('h2.h2', {
          text: t('mock.moduleSpec', { count: next.count, minutes: next.minutes })
        }));
        if (!run.timed) card.appendChild(U.el('div.notice.notice-warn.small', { text: t('mock.untimedWarn') }));
        card.appendChild(U.el('button.btn.btn-primary.btn-lg', {
          type: 'button',
          text: t(run.index === 0 ? 'mock.startModule' : 'mock.nextModule', { n: moduleNo(next) }),
          onclick: startNow
        }));
      }

      screen.appendChild(U.el('div.card.stack-sm', null, [
        U.el('h2.h2', { text: t('mock.moduleTable') }), moduleTable(run)
      ]));

      screen.appendChild(U.el('button.btn.btn-ghost.btn-sm', {
        type: 'button', text: t('mock.abandon'),
        onclick: function () {
          ui.confirm({ title: t('mock.abandon'), message: t('mock.abandonConfirm'),
            okText: t('common.discard') }).then(function (yes) {
            if (!yes) return;
            JTS.mock.discard(run.id);
            JTS.router.go('#/mocks');
          });
        }
      }));

      return function () { if (breakTimer) breakTimer.stop(); };
    }
  });
})();

/* ==========================================================================
   mock.js (part 4) — result (#/mocks/result) and review (#/mocks/review)
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  function runFrom(route) {
    var id = route.query.run;
    var run = id ? JTS.mock.get(id) : null;
    if (!run) {
      var done = JTS.mock.finished();
      run = done[done.length - 1] || null;
    }
    return run;
  }

  function sectionBlock(run, section) {
    var raw = JTS.mock.raw(run, section);
    var est = JTS.mock.estimate(run, section);
    return U.el('div.card.stack-sm', null, [
      U.el('div.eyebrow', { text: t('common.' + section) }),
      U.el('div.stat', null, [
        U.el('div.stat-label', { text: t('mock.rawScore') }),
        U.el('div.stat-value', { text: t('mock.rawOf', { correct: raw.correct, total: raw.total }) })
      ]),
      U.el('div.stat', null, [
        U.el('div.stat-label', { text: t('mock.estimate') }),
        U.el('div.stat-value', {
          text: est ? t('mock.estimateRange', { low: est.low, high: est.high }) : '—'
        })
      ]),
      raw.route ? U.el('div.small.muted', {
        text: t('mock.route') + ': ' + t('mock.route' + (raw.route === 'harder' ? 'Harder' : 'Easier'))
      }) : null
    ]);
  }

  JTS.router.register('#/mocks/result', {
    title: 'mock.resultTitle',
    render: function (root, route) {
      var run = runFrom(route);
      if (!run || run.status !== 'finished') { JTS.router.go('#/mocks'); return; }

      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);

      screen.appendChild(U.el('div.stack-sm', null, [
        U.el('div.row.row-wrap', null, [
          U.el('span.small.muted', {
            text: t('mock.startedAt') + ': ' +
              U.fmtDate(new Date(run.startedAt), S.settings().uiLang) + ' · ' +
              t('mock.finishedAt') + ': ' +
              U.fmtDate(new Date(run.finishedAt), S.settings().uiLang)
          }),
          run.timed ? null : U.el('span.badge.badge-warn', { text: t('mock.untimedTag') })
        ])
      ]));

      screen.appendChild(U.el('div.grid.grid-2', null, [
        sectionBlock(run, 'rw'), sectionBlock(run, 'math')
      ]));

      var total = JTS.mock.totalEstimate(run);
      screen.appendChild(U.el('div.card.card-accent.stack-sm', null, [
        U.el('div.eyebrow', { text: t('mock.totalEstimate') }),
        U.el('div.h1', {
          text: total ? t('mock.estimateRange', { low: total.low, high: total.high }) : '—'
        }),
        /* §14.12: no predicted SAT score anywhere. What this screen shows is a
           range from an internal model, and it says so next to the number. */
        U.el('p.small.muted', { text: t('mock.estimateNote') })
      ]));

      var weak = JTS.mock.weakSkills(run, 5);
      if (weak.length) {
        var list = U.el('div.stack-sm');
        weak.forEach(function (w) {
          /* Same shape as the Practice skill list: .skill-row lays out a
             flexible .name against whatever sits to its right. */
          list.appendChild(U.el('div.skill-row', null, [
            U.el('span.name', null, [
              U.el('div', { text: JTS.skills.name(w.skillId) }),
              U.el('div.xsmall.muted', {
                text: w.missed + ' ' + t('common.incorrect').toLowerCase() +
                  ' · ' + Math.round(w.weight * 1000) / 10 + '%'
              })
            ]),
            U.el('button.btn.btn-sm', {
              type: 'button', text: t('practice.startSession'),
              onclick: function () { JTS.practice.startTopic([w.skillId], 10); }
            })
          ]));
        });
        screen.appendChild(U.el('div.card.stack-sm', null, [
          U.el('h2.h2', { text: t('mock.recommended') }), list
        ]));
      }

      screen.appendChild(U.el('div.row.row-wrap', null, [
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('mock.reviewQuestions'),
          onclick: function () { JTS.router.go('#/mocks/review?run=' + run.id); }
        }),
        U.el('button.btn', {
          type: 'button', text: t('mock.title'),
          onclick: function () { JTS.router.go('#/mocks'); }
        })
      ]));
    }
  });

  /* -------------------------------------------------------------- review */

  function answerText(q, value) {
    if (value === null || value === undefined || value === '') return t('mock.noAnswer');
    return String(value);
  }

  function questionModal(run, q, a) {
    var lang = S.settings().explainLang;
    var body = U.el('div.stack');
    if (q.passage) body.appendChild(U.el('div.q-passage', { html: q.passage }));
    body.appendChild(U.el('div.q-stem', { html: q.stem }));
    if (q.options) {
      var opts = U.el('div.opt-list');
      q.options.forEach(function (o, i) {
        var key = 'ABCD'[i];
        var cls = '.opt';
        if (key === q.answer) cls += '.is-correct';
        if (a && a.selected === key && key !== q.answer) cls += '.is-wrong';
        opts.appendChild(U.el('div' + cls, null, [
          U.el('span.key', { text: key }),
          U.el('span.opt-text', { html: o })
        ]));
      });
      body.appendChild(opts);
    }
    body.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge' + (a && a.correct ? '.badge-ok' : '.badge-danger'), {
        text: t('mock.yourAnswer') + ': ' + answerText(q, a && a.selected)
      })
    ]));
    body.appendChild(JTS.studyHelp.explanationBody(q));

    var aiOut = U.el('div.stack-sm');
    var askBtn = U.el('button.btn.btn-sm', {
      type: 'button', text: t('mock.askAi'),
      onclick: function () {
        askBtn.disabled = true;
        askBtn.textContent = t('common.loading');
        JTS.AI.ask({
          intent: a && a.correct ? 'explanation' : 'why-wrong',
          questionRecord: q,
          selectedAnswer: a ? a.selected : null,
          correctAnswer: q.answer,
          skillId: q.skillId, skillName: JTS.skills.name(q.skillId),
          language: lang
        }).then(function (r) {
          askBtn.disabled = false;
          askBtn.textContent = t('mock.askAi');
          U.clear(aiOut);
          aiOut.appendChild(U.el('div.ai-msg', { text: r.text }));
          if (r.warning) aiOut.appendChild(U.el('div.notice.notice-warn.small', { text: t('ai.fellBack') }));
        });
      }
    });
    body.appendChild(U.el('div.stack-sm', null, [askBtn, aiOut]));

    ui.modal({
      title: JTS.skills.name(q.skillId),
      wide: true,
      content: body
    });
  }

  JTS.router.register('#/mocks/review', {
    title: 'mock.reviewTitle',
    render: function (root, route) {
      var run = runFrom(route);
      /* AI explanations and answer keys exist for a mock only once it is over
         (§7): a review route for a live run would be a way around exam mode. */
      if (!run || run.status !== 'finished') { JTS.router.go('#/mocks'); return; }

      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);
      screen.appendChild(U.el('div.stack-sm', null, [
        U.el('p.muted', { text: t('mock.reviewLead') })
      ]));

      var tabs = run.modules.map(function (m) {
        return {
          id: m.key,
          label: t('mock.moduleCard', { section: t('common.' + m.section), n: Number(m.key.slice(-1)) }),
          render: function (host) {
            var sum = m.sessionId && JTS.session.summary(m.sessionId);
            if (!sum) { host.appendChild(ui.empty(t('mock.noResults'))); return; }
            var table = U.el('table.table');
            table.appendChild(U.el('thead', null, [U.el('tr', null, [
              U.el('th', { text: '#' }),
              U.el('th', { text: t('common.skill') }),
              U.el('th', { text: t('mock.yourAnswer') }),
              U.el('th', { text: t('mock.correctAnswer') }),
              U.el('th', { text: '' })
            ])]));
            var body = U.el('tbody');
            sum.questionIds.forEach(function (qid, i) {
              var q = JTS.bank.get(qid);
              var a = sum.answers[qid];
              if (!q) return;
              var correctText = q.type === 'spr' ? q.answer.join(' · ') : q.answer;
              body.appendChild(U.el('tr', null, [
                U.el('td.num', { text: String(i + 1) }),
                U.el('td', { text: JTS.skills.name(q.skillId) }),
                U.el('td', null, [U.el('span.badge' + (a.correct ? '.badge-ok' : a.selected ? '.badge-danger' : '.badge-muted'), {
                  text: answerText(q, a.selected)
                })]),
                U.el('td.mono', { text: String(correctText) }),
                U.el('td', null, [U.el('button.btn.btn-sm', {
                  type: 'button', text: t('common.open'),
                  onclick: function () { questionModal(run, q, a); }
                })])
              ]));
            });
            table.appendChild(body);
            host.appendChild(U.el('div.table-wrap', null, [table]));
          }
        };
      });
      screen.appendChild(U.el('div.card', null, [ui.tabs(tabs)]));
      screen.appendChild(U.el('button.btn', {
        type: 'button', text: t('mock.resultTitle'),
        onclick: function () { JTS.router.go('#/mocks/result?run=' + run.id); }
      }));
    }
  });
})();
