/* ==========================================================================
   Study time: JTS.studyTimer

   A small panel on the practice screen, opened from the top bar in both
   Reading and Writing and Math:

   - My stats: how long the student has studied today, in total and per
     section, counted from the time on each answered question.
   - Pomodoro: 25 minutes of focus, then a 5-minute break. The clock runs on
     a timestamp, so it keeps going between questions, across screens and
     through a reload, and it rings when a stretch ends.

   The Pomodoro clock is kept in this browser (localStorage); it is a study
   aid, not part of the student's record.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;
  var KEY = 'jts.pomodoro.v1';
  var LEN = { focus: 25 * 60000, rest: 5 * 60000 };

  /* ------------------------------------------------------------- clock */
  function load() {
    var p = null;
    try { p = JSON.parse(window.localStorage.getItem(KEY) || 'null'); } catch (e) { /* none kept */ }
    if (!p || !LEN[p.phase]) p = { phase: 'focus', running: false, endsAt: 0, leftMs: LEN.focus };
    return p;
  }
  function keep(p) {
    try { window.localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) { /* not kept */ }
  }
  var pomo = load();

  function left() {
    return pomo.running ? Math.max(0, pomo.endsAt - Date.now()) : pomo.leftMs;
  }
  function start() {
    if (pomo.running) return;
    pomo.running = true; pomo.endsAt = Date.now() + pomo.leftMs; keep(pomo); tick();
  }
  function pause() {
    if (!pomo.running) return;
    pomo.leftMs = left(); pomo.running = false; keep(pomo); tick();
  }
  function reset(phase) {
    pomo = { phase: phase || pomo.phase, running: false, endsAt: 0, leftMs: LEN[phase || pomo.phase] };
    keep(pomo); tick();
  }

  function chime() {
    try {
      var A = window.AudioContext || window.webkitAudioContext;
      if (!A) return;
      var ctx = new A();
      [0, 0.35].forEach(function (at) {
        var o = ctx.createOscillator(), g = ctx.createGain();
        o.frequency.value = 880; o.connect(g); g.connect(ctx.destination);
        g.gain.setValueAtTime(0.0001, ctx.currentTime + at);
        g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + at + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + at + 0.3);
        o.start(ctx.currentTime + at); o.stop(ctx.currentTime + at + 0.32);
      });
    } catch (e) { /* no sound */ }
  }

  /* Everything showing the clock registers here ({el, fn}) and is repainted
     each second while the clock runs. */
  var painters = [];
  var interval = null;
  function tick() {
    if (pomo.running && left() <= 0) {
      var next = pomo.phase === 'focus' ? 'rest' : 'focus';
      chime();
      if (JTS.ui) JTS.ui.toast(t(next === 'rest' ? 'pomo.doneFocus' : 'pomo.doneRest'), 'ok', 5000);
      reset(next);
      return;
    }
    /* A painter whose element has left the page is dropped. */
    painters = painters.filter(function (p) {
      if (p.started && !p.el.isConnected) return false;
      if (p.el.isConnected) p.started = true;
      p.fn();
      return true;
    });
    if (pomo.running && !interval) interval = setInterval(tick, 1000);
    if (!pomo.running && interval) { clearInterval(interval); interval = null; }
  }

  function fmt(ms) {
    var s = Math.ceil(ms / 1000);
    var m = Math.floor(s / 60); s = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  /* ------------------------------------------------------------- stats */
  /** Today's study time in ms: {total, rw, math}, plus the session not yet recorded. */
  function today(extra) {
    var start = new Date(); start.setHours(0, 0, 0, 0);
    var out = { total: 0, rw: 0, math: 0 };
    var s = S.state();
    ((s && s.attempts) || []).forEach(function (a) {
      if (!a.ts || a.ts < start.getTime() || !a.timeMs) return;
      var q = JTS.bank.get(a.questionId);
      var sec = q && q.section === 'math' ? 'math' : 'rw';
      out[sec] += a.timeMs; out.total += a.timeMs;
    });
    if (extra) Object.keys(extra).forEach(function (k) { out[k] += extra[k]; out.total += extra[k]; });
    return out;
  }

  function fmtSpent(ms) {
    if (ms > 0 && ms < 60000) return '< 1 ' + t('pomo.min');
    var m = Math.round(ms / 60000);
    if (m < 60) return m + ' ' + t('pomo.min');
    return Math.floor(m / 60) + ' ' + t('pomo.h') + ' ' + (m % 60) + ' ' + t('pomo.min');
  }

  /* ------------------------------------------------------------- panel */
  /**
   * The top-bar button and its panel.
   * opts.section(): 'rw' | 'math' for the question on screen;
   * opts.pending(): {rw, math} ms spent in this session and not yet recorded.
   */
  function button(opts) {
    var wrap = U.el('div.pomo-wrap');
    var label = U.el('span.pomo-btn-label');
    var btn = U.el('button.q-tool.pomo-btn', {
      type: 'button', 'aria-haspopup': 'dialog', 'aria-expanded': 'false',
      title: t('pomo.title'),
      onclick: function () { panel ? close() : open(); }
    }, [U.el('span', { text: '⏱', 'aria-hidden': 'true' }), label]);
    wrap.appendChild(btn);
    var panel = null;

    function paintBtn() {
      label.textContent = pomo.running || pomo.leftMs !== LEN[pomo.phase] ? fmt(left()) : t('pomo.title');
      btn.classList.toggle('is-running', pomo.running);
      btn.classList.toggle('is-rest', pomo.phase === 'rest');
    }
    painters.push({ el: wrap, fn: paintBtn });
    paintBtn();

    function onDoc(e) {
      if (panel && !wrap.contains(e.target)) close();
    }
    function onKey(e) { if (e.key === 'Escape' && panel) { close(); btn.focus(); } }

    function close() {
      if (!panel) return;
      panel.remove(); panel = null;
      btn.setAttribute('aria-expanded', 'false');
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey, true);
    }

    function open() {
      panel = U.el('div.pomo-panel', { role: 'dialog', 'aria-label': t('pomo.title') });
      var tabStats = U.el('button.pomo-tab', { type: 'button', text: t('pomo.stats') });
      var tabTimer = U.el('button.pomo-tab', { type: 'button', text: t('pomo.pomodoro') });
      var body = U.el('div.pomo-body');
      var view = 'timer';

      function show(v) {
        view = v;
        tabStats.setAttribute('aria-pressed', String(v === 'stats'));
        tabTimer.setAttribute('aria-pressed', String(v === 'timer'));
        U.clear(body);
        body.appendChild(v === 'stats' ? statsView() : timerView());
      }
      tabStats.onclick = function () { show('stats'); };
      tabTimer.onclick = function () { show('timer'); };

      panel.appendChild(U.el('div.pomo-head', null, [U.el('strong', { text: t('pomo.title') })]));
      panel.appendChild(U.el('div.pomo-tabs', null, [tabTimer, tabStats]));
      panel.appendChild(body);
      wrap.appendChild(panel);
      btn.setAttribute('aria-expanded', 'true');
      show(view);
      setTimeout(function () { document.addEventListener('mousedown', onDoc); }, 0);
      document.addEventListener('keydown', onKey, true);
    }

    function timerView() {
      var box = U.el('div.pomo-timer');
      var phases = U.el('div.pomo-phases');
      ['focus', 'rest'].forEach(function (ph) {
        phases.appendChild(U.el('button.pomo-phase', {
          type: 'button', text: t('pomo.' + ph), 'aria-pressed': String(pomo.phase === ph),
          onclick: function () { reset(ph); refresh(); }
        }));
      });
      var clock = U.el('div.pomo-clock', { role: 'timer', 'aria-live': 'off' });
      var sec = opts.section() === 'math' ? 'math' : 'rw';
      var tag = U.el('div.pomo-tag', null, [
        U.el('span.pomo-dot.' + sec, { 'aria-hidden': 'true' }),
        U.el('span', { text: t('pomo.sec.' + sec) })
      ]);
      var go = U.el('button.btn.btn-primary.pomo-go', { type: 'button' });
      var again = U.el('button.btn.pomo-reset', {
        type: 'button', text: t('pomo.reset'), onclick: function () { reset(); refresh(); }
      });
      go.onclick = function () { pomo.running ? pause() : start(); refresh(); };

      function refresh() {
        clock.textContent = fmt(left());
        go.textContent = pomo.running ? '❚❚ ' + t('pomo.pause') : '▶ ' + t('pomo.start');
        again.disabled = !pomo.running && pomo.leftMs === LEN[pomo.phase];
        [].forEach.call(phases.children, function (b, i) {
          b.setAttribute('aria-pressed', String(pomo.phase === (i ? 'rest' : 'focus')));
        });
        box.classList.toggle('is-rest', pomo.phase === 'rest');
      }
      painters.push({ el: box, fn: refresh });
      refresh();

      box.appendChild(phases);
      box.appendChild(clock);
      box.appendChild(tag);
      box.appendChild(U.el('div.pomo-actions', null, [go, again]));
      box.appendChild(U.el('p.pomo-hint', { text: t('pomo.hint') }));
      return box;
    }

    function statsView() {
      var d = today(opts.pending());
      var box = U.el('div.pomo-stats');
      box.appendChild(U.el('div.pomo-total', null, [
        U.el('span', { text: t('pomo.today') }),
        U.el('strong', { text: fmtSpent(d.total) })
      ]));
      var bar = U.el('div.pomo-bar', { 'aria-hidden': 'true' });
      ['rw', 'math'].forEach(function (k) {
        if (d[k] > 0) bar.appendChild(U.el('span.' + k, { style: 'flex:' + d[k] }));
      });
      box.appendChild(bar);
      ['rw', 'math'].forEach(function (k) {
        box.appendChild(U.el('div.pomo-row', null, [
          U.el('span.pomo-dot.' + k, { 'aria-hidden': 'true' }),
          U.el('span', { text: t('pomo.sec.' + k) }),
          U.el('strong', { text: fmtSpent(d[k]) })
        ]));
      });
      box.appendChild(U.el('p.pomo-hint', { text: t('pomo.statsHint') }));
      return box;
    }

    return { el: wrap, close: close };
  }

  if (pomo.running) tick();
  JTS.studyTimer = { button: button, today: today };
})();
