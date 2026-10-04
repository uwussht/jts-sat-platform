/* ==========================================================================
   The question engine (#/question).

   One screen serves practice, the diagnostic and the mock exam. What differs
   between them is the session's `mode`:

     study      immediate check, feedback, and the help layer
     diagnostic no feedback until the end, no help, advisory timer
     exam       no feedback until the end, no help, hard timer

   In exam and diagnostic mode the Hint / Ask AI / Explanation controls are
   never constructed, so they are absent from the DOM rather than hidden (AI-08).

   Everything the student does — an answer, a strike-through, a highlight, a
   mark for review, the scratchpad, elapsed time, the current position — is
   written into state.activeSession on the spot, so a reload resumes exactly
   where they were.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* ------------------------------------------------------- text highlighting */
  /**
   * Highlights are stored as character offsets into the container's text, not
   * as saved HTML. That keeps restored content provably identical to the bank
   * content: nothing a student does can introduce markup.
   */
  var HL = {
    /** Offset of a (node, offset) pair within root's text content. */
    offsetOf: function (root, node, offset) {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      var total = 0, n;
      while ((n = walker.nextNode())) {
        if (n === node) return total + offset;
        total += n.nodeValue.length;
      }
      return -1;
    },
    /** Current selection as {start,end}, or null if it is empty or outside root. */
    fromSelection: function (root) {
      var sel = window.getSelection();
      if (!sel || sel.isCollapsed || sel.rangeCount === 0) return null;
      var range = sel.getRangeAt(0);
      if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) return null;
      var start = this.offsetOf(root, range.startContainer, range.startOffset);
      var end = this.offsetOf(root, range.endContainer, range.endOffset);
      if (start < 0 || end < 0 || start === end) return null;
      return { start: Math.min(start, end), end: Math.max(start, end) };
    },
    /** Everything root says, as one string, in the order it is read. */
    textOf: function (root) {
      var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
      var out = '', n;
      while ((n = walker.nextNode())) out += n.nodeValue;
      return out;
    },
    /**
     * Grow a range out to whole words and drop the whitespace at its edges.
     * A drag that stops in the middle of "straightforward" means the word, and
     * a highlight that cuts one in half looks like a rendering fault rather
     * than something the student did on purpose.
     */
    snap: function (root, r) {
      var text = HL.textOf(root);
      var word = function (i) { return i >= 0 && i < text.length && !/\s/.test(text[i]); };
      var start = r.start, end = Math.min(r.end, text.length);
      while (start > 0 && word(start - 1) && word(start)) start--;
      while (end < text.length && word(end - 1) && word(end)) end++;
      while (start < end && /\s/.test(text[start])) start++;
      while (end > start && /\s/.test(text[end - 1])) end--;
      return end > start ? { start: start, end: end } : null;
    },
    /** Merge overlapping or touching ranges so repeated passes stay tidy. */
    merge: function (ranges) {
      var sorted = ranges.slice().sort(function (a, b) { return a.start - b.start; });
      var out = [];
      sorted.forEach(function (r) {
        var last = out[out.length - 1];
        if (last && r.start <= last.end) last.end = Math.max(last.end, r.end);
        else out.push({ start: r.start, end: r.end });
      });
      return out;
    },
    remove: function (ranges, point) {
      return ranges.filter(function (r) { return point < r.start || point >= r.end; });
    },
    /** Wrap each range in <mark>. Call on a freshly rendered container. */
    apply: function (root, ranges) {
      if (!ranges || !ranges.length) return;
      var merged = HL.merge(ranges);
      merged.slice().reverse().forEach(function (r) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        var pos = 0, n;
        while ((n = walker.nextNode())) {
          var len = n.nodeValue.length;
          var nodeStart = pos, nodeEnd = pos + len;
          pos = nodeEnd;
          if (nodeEnd <= r.start || nodeStart >= r.end) continue;
          if (n.parentNode && n.parentNode.tagName === 'MARK') continue;
          var from = Math.max(0, r.start - nodeStart);
          var to = Math.min(len, r.end - nodeStart);
          var target = n;
          if (to < len) target.splitText(to);
          if (from > 0) target = target.splitText(from);
          var mark = document.createElement('mark');
          mark.className = 'hl';
          mark.dataset.at = String(nodeStart + from);
          target.parentNode.replaceChild(mark, target);
          mark.appendChild(target);
        }
      });
    }
  };

  /* ----------------------------------------------------------- reference sheet */
  /** The Digital SAT reference figures, as a plain HTML table (no MathJax). */
  /**
   * The Math reference sheet, laid out like the one in the test: each figure
   * drawn and labelled, its formula under it, then the three facts. The
   * figures are drawn in the text colour, so they read in either theme.
   */
  function referenceSheet() {
    var I = function (v) { return '<tspan font-style="italic">' + v + '</tspan>'; };
    function svg(body) {
      return '<svg viewBox="0 0 160 110" role="img" aria-hidden="true" class="ref-fig" ' +
        'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" ' +
        'font-family="Georgia, \'Times New Roman\', serif" font-size="15">' + body + '</svg>';
    }
    function txt(x, y, v, extra) {
      return '<text x="' + x + '" y="' + y + '" fill="currentColor" stroke="none" text-anchor="middle"' +
        (extra || '') + '>' + v + '</text>';
    }
    var sq = function (x, y, dx, dy) {     /* the right-angle mark */
      return '<path d="M' + x + ' ' + (y + dy) + 'h' + dx + 'v' + (-dy) + '" stroke-width="1.2"/>';
    };
    var frac = function (a, b) { return '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>'; };
    var figs = [
      { name: 'Circle', f: 'A = &pi;<i>r</i><sup>2</sup><br>C = 2&pi;<i>r</i>', d: svg(
        '<circle cx="80" cy="55" r="45"/><circle cx="80" cy="55" r="2.6" fill="currentColor"/>' +
        '<line x1="80" y1="55" x2="125" y2="55"/>' + txt(102, 48, I('r'))) },
      { name: 'Rectangle', f: 'A = &#8467;<i>w</i>', d: svg(
        '<rect x="25" y="30" width="100" height="55"/>' + txt(75, 22, I('&#8467;')) + txt(138, 62, I('w'))) },
      { name: 'Triangle', f: 'A = ' + frac(1, 2) + '<i>bh</i>', d: svg(
        '<path d="M15 90 L65 20 L145 90 Z"/><line x1="65" y1="20" x2="65" y2="90" stroke-dasharray="4 3" stroke-width="1.2"/>' +
        sq(65, 80, 10, 10) + txt(74, 52, I('h')) + txt(80, 106, I('b'))) },
      { name: 'Pythagorean theorem', f: '<i>c</i><sup>2</sup> = <i>a</i><sup>2</sup> + <i>b</i><sup>2</sup>', d: svg(
        '<path d="M40 15 L40 90 L140 90 Z"/>' + sq(40, 80, 10, 10) +
        txt(28, 57, I('b')) + txt(94, 46, I('c')) + txt(90, 106, I('a'))) },
      { name: 'Special right triangle 30&deg;-60&deg;-90&deg;', f: 'sides <i>x</i>, <i>x</i>&radic;3, 2<i>x</i>', d: svg(
        '<path d="M15 85 L135 85 L135 16 Z"/>' + sq(125, 75, 10, 10) +
        txt(66, 44, '2' + I('x')) + txt(148, 56, I('x')) + txt(75, 104, I('x') + '&radic;3') +
        txt(42, 80, '30&deg;', ' font-size="12"') + txt(120, 36, '60&deg;', ' font-size="12"')) },
      { name: 'Special right triangle 45&deg;-45&deg;-90&deg;', f: 'sides <i>s</i>, <i>s</i>, <i>s</i>&radic;2', d: svg(
        '<path d="M45 15 L45 90 L120 90 Z"/>' + sq(45, 80, 10, 10) +
        txt(33, 57, I('s')) + txt(82, 106, I('s')) + txt(102, 46, I('s') + '&radic;2') +
        txt(56, 34, '45&deg;', ' font-size="12"') + txt(100, 85, '45&deg;', ' font-size="12"')) },
      { name: 'Rectangular solid', f: 'V = &#8467;<i>wh</i>', d: svg(
        '<path d="M20 45 L105 45 L105 90 L20 90 Z"/><path d="M20 45 L45 25 L130 25 L105 45"/><path d="M130 25 L130 70 L105 90"/>' +
        txt(62, 106, I('&#8467;')) + txt(126, 90, I('w')) + txt(142, 50, I('h'))) },
      { name: 'Cylinder', f: 'V = &pi;<i>r</i><sup>2</sup><i>h</i>', d: svg(
        '<ellipse cx="75" cy="22" rx="45" ry="12"/><path d="M30 22 V88"/><path d="M120 22 V88"/>' +
        '<path d="M30 88 A45 12 0 0 0 120 88"/><path d="M30 88 A45 12 0 0 1 120 88" stroke-dasharray="4 3" stroke-width="1.1"/>' +
        '<circle cx="75" cy="22" r="2.6" fill="currentColor"/><line x1="75" y1="22" x2="118" y2="17"/>' +
        txt(98, 13, I('r')) + txt(137, 60, I('h'))) },
      { name: 'Sphere', f: 'V = ' + frac(4, 3) + '&pi;<i>r</i><sup>3</sup>', d: svg(
        '<circle cx="80" cy="55" r="45"/><path d="M35 55 A45 12 0 0 0 125 55"/>' +
        '<path d="M35 55 A45 12 0 0 1 125 55" stroke-dasharray="4 3" stroke-width="1.1"/>' +
        '<circle cx="80" cy="55" r="2.6" fill="currentColor"/><line x1="80" y1="55" x2="125" y2="55"/>' + txt(102, 48, I('r'))) },
      { name: 'Cone', f: 'V = ' + frac(1, 3) + '&pi;<i>r</i><sup>2</sup><i>h</i>', d: svg(
        '<path d="M35 85 L80 10 L125 85"/><path d="M35 85 A45 12 0 0 0 125 85"/>' +
        '<path d="M35 85 A45 12 0 0 1 125 85" stroke-dasharray="4 3" stroke-width="1.1"/>' +
        '<line x1="80" y1="10" x2="80" y2="85" stroke-width="1.2"/><line x1="80" y1="85" x2="125" y2="85" stroke-width="1.2"/>' +
        sq(80, 77, 8, 8) + txt(72, 55, I('h')) + txt(103, 80, I('r'))) },
      { name: 'Rectangular pyramid', f: 'V = ' + frac(1, 3) + '&#8467;<i>wh</i>', d: svg(
        '<path d="M20 88 L105 88 L135 62"/><path d="M20 88 L50 62 L135 62" stroke-dasharray="4 3" stroke-width="1.1"/>' +
        '<path d="M78 12 L20 88"/><path d="M78 12 L105 88"/><path d="M78 12 L135 62"/>' +
        '<line x1="78" y1="12" x2="78" y2="75" stroke-dasharray="4 3" stroke-width="1.2"/>' + sq(78, 67, 8, 8) +
        txt(70, 50, I('h')) + txt(62, 104, I('&#8467;')) + txt(130, 82, I('w'))) }
    ];
    var grid = '<div class="ref-grid">' + figs.map(function (g) {
      return '<figure class="ref-item">' + g.d +
        '<figcaption><span class="ref-formula">' + g.f + '</span><span class="ref-name">' + g.name + '</span></figcaption></figure>';
    }).join('') + '</div>';
    var facts = '<div class="ref-facts">' +
      '<p>The number of degrees of arc in a circle is 360.</p>' +
      '<p>The number of radians of arc in a circle is 2&pi;.</p>' +
      '<p>The sum of the measures in degrees of the angles of a triangle is 180.</p></div>';
    return U.el('div.ref-sheet', { html: grid + facts });
  }

  function directionsFor(section, mode) {
    var lines = section === 'math'
      ? ['The questions in this section address a number of important math skills.',
         'Use of a calculator is permitted for all questions.',
         'For a student-produced response, enter your answer in the box. Fractions and decimals are both accepted; do not enter symbols such as a percent sign or a dollar sign.']
      : ['The questions in this section address a number of important reading and writing skills.',
         'Each question includes one or more passages. Read each passage, then choose the best answer to the question based on the passage.',
         'All questions in this section are multiple choice with four answer choices. Each question has a single best answer.'];
    if (mode === 'exam') lines.push('Once you move past a module you cannot return to it.');
    return U.el('div.stack-sm', null, lines.map(function (l) { return U.el('p', { text: l }); }));
  }

  /* ---------------------------------------------------------------- session API */
  /**
   * A session is a plain object in state.activeSession. Writing it to the store
   * after every interaction is what makes reload-resume work; nothing lives
   * only in a closure.
   */
  JTS.session = {
    current: function () {
      var s = S.state();
      return s ? s.activeSession : null;
    },

    /**
     * opts: {kind, mode, questionIds, durationMs, softTimer, title,
     *        returnHash, finishHash, meta}
     */
    start: function (opts) {
      var answers = {};
      opts.questionIds.forEach(function (id) {
        /* Highlights live in two buckets because the passage and the stem are
           separate offset spaces; nothing else may share their containers. */
        answers[id] = { selected: null, struck: [], marked: false,
                        highlights: { p: [], s: [] },
                        timeMs: 0, submitted: false, correct: null,
                        helpType: 'none', attemptId: null, errorType: null };
      });
      var session = {
        id: U.uid('ses'),
        kind: opts.kind || 'practice',
        mode: opts.mode || 'study',
        title: opts.title || '',
        questionIds: opts.questionIds.slice(),
        index: 0,
        answers: answers,
        scratchpad: '',
        startedAt: Date.now(),
        elapsedMs: 0,
        durationMs: opts.durationMs || 0,
        softTimer: !!opts.softTimer,
        /* Exam-mode mock modules run on the wall clock: closing the tab for ten
           minutes costs ten minutes, exactly as walking out of the room would.
           Every other session accumulates only the time the screen was open. */
        wallClock: !!opts.wallClock,
        paused: false,
        finishedAt: null,
        returnHash: opts.returnHash || '#/today',
        finishHash: opts.finishHash || '#/today',
        meta: opts.meta || {}
      };
      S.patch({ activeSession: session });
      JTS.router.go('#/question');
      return session;
    },

    /** Drop an in-flight session without recording anything. */
    abandon: function () {
      var ses = this.current();
      S.patch({ activeSession: null });
      if (ses) JTS.router.go(ses.returnHash);
    },

    /**
     * Close the session: log any attempt not already logged, archive a summary
     * and hand control to the screen that owns the result.
     */
    finish: function () {
      var ses = this.current();
      if (!ses) return null;
      ses.finishedAt = Date.now();

      ses.questionIds.forEach(function (qid) {
        var a = ses.answers[qid];
        if (a.attemptId) return;                 /* study mode logged it on check */
        if (a.selected === null || a.selected === '') return;  /* unanswered */
        var q = JTS.bank.get(qid);
        if (!q) return;
        a.correct = JTS.session.isCorrect(q, a.selected);
        a.submitted = true;
        var attempt = JTS.attempts.record({
          questionId: qid, skillId: q.skillId, sessionId: ses.id, mode: ses.mode,
          selected: a.selected, correct: a.correct, timeMs: a.timeMs,
          marked: a.marked, helpType: a.helpType
        });
        a.attemptId = attempt.id;
        if (!a.correct) JTS.attempts.logError(attempt, null);
      });

      var summary = {
        id: ses.id, kind: ses.kind, mode: ses.mode, title: ses.title,
        startedAt: ses.startedAt, finishedAt: ses.finishedAt,
        elapsedMs: ses.elapsedMs,
        questionIds: ses.questionIds.slice(),
        answers: U.deepClone(ses.answers),
        meta: ses.meta,
        correct: ses.questionIds.filter(function (id) { return ses.answers[id].correct; }).length,
        answered: ses.questionIds.filter(function (id) {
          var v = ses.answers[id].selected; return v !== null && v !== '';
        }).length
      };
      S.update(function (st) {
        st.sessions.push(summary);
        st.activeSession = null;
      });
      /* A lesson counts as done when its session ends, however it ended. */
      if (ses.meta && ses.meta.lessonId) JTS.planner.setStatus(ses.meta.lessonId, 'done');
      JTS.router.go(ses.finishHash + (ses.finishHash.indexOf('?') >= 0 ? '&' : '?') + 'session=' + ses.id);
      return summary;
    },

    isCorrect: function (q, value) {
      if (value === null || value === undefined || value === '') return false;
      return q.type === 'spr' ? JTS.spr.check(value, q.answer) : value === q.answer;
    },

    summary: function (id) {
      var s = S.state();
      if (!s) return null;
      return s.sessions.filter(function (x) { return x.id === id; })[0] || null;
    }
  };

  JTS.questionScreen = { HL: HL, referenceSheet: referenceSheet, directionsFor: directionsFor };
})();

/* ==========================================================================
   question.js (part 2) — the screen itself
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;
  var HL = JTS.questionScreen.HL;
  var KEYS = ['A', 'B', 'C', 'D'];

  JTS.router.register('#/question', {
    title: 'practice.title',
    render: function (root) {
      var ses = JTS.session.current();
      if (!ses) { JTS.router.go('#/today'); return; }

      var isStudy = ses.mode === 'study';
      /* Set when the questions are a unit's own practice set. */
      var unitCode = (ses.meta && ses.meta.lessonCode) || null;
      var board = null, boardSync = null;
      var hardTimer = ses.durationMs > 0 && !ses.softTimer;
      var shownAt = Date.now();
      /* On a wall-clock session the stored elapsedMs is only a crash record;
         the truth is how long ago the module opened. */
      var startElapsed = ses.wallClock
        ? Math.max(ses.elapsedMs || 0, Date.now() - ses.startedAt)
        : (ses.elapsedMs || 0);
      var timer, announceInt;

      function save() { S.saveSoon(); }
      function saveNow() { S.save(); }
      function q() { return JTS.bank.get(ses.questionIds[ses.index]); }
      function ans(qid) { return ses.answers[qid || ses.questionIds[ses.index]]; }
      function answeredCount() {
        return ses.questionIds.filter(function (id) {
          var v = ses.answers[id].selected; return v !== null && v !== '';
        }).length;
      }

      /** Move the clock for the question being left onto that question. */
      function commitTime() {
        var a = ans();
        if (a) a.timeMs += Date.now() - shownAt;
        shownAt = Date.now();
      }

      /* A unit's tasks take the whole window, like the unit itself: the
         app's sidebar and header step aside until the screen is left. */
      if (unitCode) document.body.classList.add('unit-focus');

      /* ------------------------------------------------------------- shell */
      var shell = U.el('div.q-shell');
      var topbar = U.el('div.q-topbar');
      var main = U.el('div.q-main');
      var content = U.el('div.q-content');
      var footer = U.el('div.q-footer');
      main.appendChild(content);
      shell.appendChild(topbar);
      shell.appendChild(main);
      shell.appendChild(footer);
      root.appendChild(shell);

      /* ------------------------------------------------------------- timer */
      var timerEl = U.el('span.q-timer', { 'aria-hidden': 'true' });
      /* The visible clock ticks four times a second; the announcement for
         screen readers updates once a minute so it informs without spamming. */
      var timerLive = U.el('span.sr-only', { role: 'timer', 'aria-live': 'polite' });
      var lastAnnounced = null;

      function paintTimer(elapsed) {
        var showMs = ses.durationMs ? Math.max(0, ses.durationMs - elapsed) : elapsed;
        var txt = U.fmtLongTime(showMs);
        if (S.settings().timerHidden) {
          timerEl.textContent = '--:--';
        } else {
          timerEl.textContent = txt;
          timerEl.classList.toggle('low', !!ses.durationMs && showMs <= 5 * 60000);
        }
        var minute = Math.floor(showMs / 60000);
        if (minute !== lastAnnounced) {
          lastAnnounced = minute;
          timerLive.textContent = ses.durationMs
            ? minute + ' ' + t('common.minutes') + ' ' + t('common.total')
            : txt;
        }
      }

      timer = new JTS.Timer({
        durationMs: ses.durationMs || 0,
        elapsedMs: startElapsed,
        onTick: function (elapsed) {
          ses.elapsedMs = elapsed;
          paintTimer(elapsed);
        },
        onExpire: function () {
          if (!hardTimer) return;
          ui.toast(t('mock.timeUp'), 'err', 4000);
          commitTime();
          saveNow();
          JTS.session.finish();
        }
      });
      if (!ses.paused) timer.start();
      paintTimer(startElapsed);
      /* Persist the clock periodically so a crash costs seconds, not minutes. */
      announceInt = setInterval(function () { saveNow(); }, 5000);

      /* ----------------------------------------------------------- top bar */
      function buildTopbar() {
        U.clear(topbar);
        /* A unit's tasks are worked in class with no clock on screen; the
           time on each question is still recorded for the student's stats. */
        if (!unitCode) {
          topbar.appendChild(timerEl);
          topbar.appendChild(timerLive);
        }

        /* A unit's set is worked in class, so its bar has no clock, pause
           or hide: only the way back and the tools. */
        if (isStudy && !unitCode) {
          var pause = U.el('button.q-tool', {
            type: 'button', text: ses.paused ? t('q.resume') : t('q.pause'),
            onclick: function () {
              ses.paused = !ses.paused;
              if (ses.paused) { commitTime(); timer.pause(); } else { shownAt = Date.now(); timer.resume(); }
              saveNow();
              buildTopbar();
              renderQuestion();
            }
          });
          topbar.appendChild(pause);
        }
        if (!unitCode) {
          topbar.appendChild(U.el('button.q-tool', {
            type: 'button', text: S.settings().timerHidden ? t('q.showTimer') : t('q.hideTimer'),
            onclick: function () {
              S.update(function (s) { s.settings.timerHidden = !s.settings.timerHidden; });
              buildTopbar(); paintTimer(timer.value());
            }
          }));
        }

        /* A unit's own set is worked in class: the way back to the
           explanation keeps the set where it is, to be continued from the
           unit page. */
        if (unitCode) {
          topbar.appendChild(U.el('button.q-tool', {
            type: 'button', text: '← ' + t('q.backToLesson'),
            onclick: function () {
              commitTime(); saveNow();
              JTS.router.go('#/materials/lesson?code=' + encodeURIComponent(unitCode));
            }
          }));
        }

        var tools = U.el('div.q-tools');
        /* Practice only, in both sections: study time today and a Pomodoro.
           A timed test has its own clock and nothing else to watch, and a
           unit's set runs in class time. */
        if (ses.kind === 'practice' && !unitCode && JTS.studyTimer) {
          tools.appendChild(JTS.studyTimer.button({
            section: function () { return q().section; },
            pending: function () {
              /* Checked answers are already in the attempt log; the rest of
                 this session's time is not yet, so it is added here. */
              var p = { rw: 0, math: 0 };
              ses.questionIds.forEach(function (id) {
                var a = ses.answers[id], qq = JTS.bank.get(id);
                if (a && !a.submitted && a.timeMs) p[qq && qq.section === 'math' ? 'math' : 'rw'] += a.timeMs;
              });
              if (!ses.paused) p[q().section === 'math' ? 'math' : 'rw'] = Date.now() - shownAt;
              return p;
            }
          }).el);
        }
        /* Directions and the scratchpad belong to the test screens (mocks,
           the diagnostic, papers); practice keeps its bar to what it uses. */
        var inPractice = ses.kind === 'practice';
        if (!inPractice) {
          tools.appendChild(U.el('button.q-tool', {
            type: 'button', text: t('q.directions'),
            onclick: function () {
              ui.modal({ title: t('q.directions'),
                content: JTS.questionScreen.directionsFor(q().section, ses.mode) });
            }
          }));
        }

        var hlBtn = U.el('button.q-tool', {
          type: 'button', text: t('q.highlight'), 'aria-pressed': String(!!ses.meta.highlightMode),
          onclick: function () {
            ses.meta.highlightMode = !ses.meta.highlightMode;
            hlBtn.setAttribute('aria-pressed', String(!!ses.meta.highlightMode));
            saveNow();
          }
        });
        tools.appendChild(hlBtn);

        /* Calculator exists only in Math. In Reading and Writing there is no
           button at all, matching the real test; the note says so next to the
           clock rather than between the last tool and the close button. */
        if (q().section !== 'math') {
          /* tools is not in the topbar yet — it is appended last — so a plain
             append here already puts the note ahead of it. */
          topbar.appendChild(U.el('span.q-note', { text: t('q.noDesmosInRw') }));
        }
        if (q().section === 'math') {
          /* The real test keeps the calculator open for the whole Math module:
             it does not close itself between questions, and it is still there
             after a reload. The flag lives on the session, so that is exactly
             what happens here. */
          var calcBtn = U.el('button.q-tool', {
            type: 'button', text: t('q.calculator'),
            'aria-pressed': String(!!ses.meta.calcOpen),
            onclick: function () {
              ses.meta.calcOpen = JTS.desmos.toggle();
              calcBtn.setAttribute('aria-pressed', String(!!ses.meta.calcOpen));
              saveNow();
            }
          });
          tools.appendChild(calcBtn);
          tools.appendChild(U.el('button.q-tool', {
            type: 'button', text: t('q.reference'),
            onclick: function () {
              ui.modal({ title: t('q.reference'), content: JTS.questionScreen.referenceSheet() });
            }
          }));
          if (!inPractice) {
            tools.appendChild(U.el('button.q-tool', {
              type: 'button', text: t('q.scratchpad'), title: t('q.scratchpad'),
              onclick: openScratchpad
            }));
          }
        }

        syncCalc();

        /* The unit's whiteboard, the same board as on the unit page, in its
           own window over the question. */
        if (unitCode && JTS.whiteboard) {
          if (!board) {
            board = JTS.whiteboard.create(unitCode);
            /* Its window's own Close button says so through this event. */
            board.addEventListener('wb:window', function () { if (boardSync) boardSync(); });
          }
          var wbBtn = U.el('button.q-tool', {
            type: 'button',
            onclick: function () {
              if (board.isWindowOpen()) board.closeWindow(); else board.openWindow();
              boardSync();
            }
          });
          boardSync = function () {
            wbBtn.textContent = '✏️ ' + t(board.isWindowOpen() ? 'side.boardClose' : 'side.board');
            wbBtn.setAttribute('aria-pressed', String(board.isWindowOpen()));
          };
          boardSync();
          tools.appendChild(wbBtn);
        }

        tools.appendChild(U.el('button.q-tool', {
          type: 'button', text: '✕',
          'aria-label': t('common.close'),
          onclick: function () {
            ui.confirm({ title: t('q.finish'), message: t('q.exitConfirm'),
              okText: t('common.finish'), cancelText: t('common.cancel') })
              .then(function (yes) {
                if (!yes) return;
                commitTime(); saveNow(); JTS.session.finish();
              });
          }
        }));
        topbar.appendChild(tools);
      }

      /**
       * The calculator follows the section, not the screen: open on Math for as
       * long as the student leaves it open, absent in Reading and Writing
       * because there is no calculator there in the real test either.
       */
      function syncCalc() {
        if (q().section === 'math' && ses.meta.calcOpen) JTS.desmos.show();
        else JTS.desmos.hide();
      }

      function openScratchpad() {
        var ta = U.el('textarea.textarea', {
          value: ses.scratchpad || '', 'data-autofocus': '',
          style: 'min-height:260px', 'aria-label': t('q.scratchpad')
        });
        ta.addEventListener('input', function () { ses.scratchpad = ta.value; save(); });
        ui.modal({ title: t('q.scratchpad'), content: ta });
      }

      /* --------------------------------------------------------- question */

      function renderQuestion() {
        var question = q();
        var a = ans();
        U.clear(content);
        hlTargets.length = 0;

        if (ses.paused) {
          content.appendChild(ui.empty(t('q.paused'), null,
            U.el('button.btn.btn-primary.btn-lg', {
              type: 'button', text: t('q.resume'),
              onclick: function () {
                ses.paused = false; shownAt = Date.now(); timer.resume();
                saveNow(); buildTopbar(); renderQuestion();
              }
            })));
          buildFooter();
          return;
        }

        /* "Question 3 of 7" rather than a numbered tile: where you are in the
           set is a sentence, and the tile was competing with the stem. */
        var head = U.el('div.row.q-head', null, [
          U.el('span.q-count', {
            text: t('q.counter', { n: ses.index + 1, total: ses.questionIds.length })
          }),
          U.el('span.spacer'),
          U.el('button.q-tool', {
            type: 'button', 'aria-pressed': String(!!a.marked),
            text: '⚑ ' + (a.marked ? t('q.marked') : t('q.markReview')),
            onclick: function () { a.marked = !a.marked; saveNow(); renderQuestion(); }
          }),
          /* Naming the skill is useful while practising and is a hint while
             being measured, so it appears in study mode only. */
          isStudy ? U.el('span.badge.badge-muted', { text: JTS.skills.name(question.skillId) }) : null
        ]);
        content.appendChild(head);
        /* A question with no passage is a column of text and four choices, and
           it reads better narrow than spread across a desktop. */
        content.classList.toggle('is-single', !question.passage);

        /* Passage and stem are each their own highlight root. Answer choices
           and feedback must never sit inside one, or their text would shift
           every stored offset the moment feedback appears. */
        var passageEl = question.passage ? U.el('div.q-passage', { html: question.passage }) : null;
        var stemEl = U.el('div.q-stem', { html: question.stem });
        var answerHost = U.el('div');
        var feedbackHost = U.el('div');

        if (passageEl) { HL.apply(passageEl, a.highlights.p); wireHighlighting(passageEl, a, 'p'); }
        HL.apply(stemEl, a.highlights.s); wireHighlighting(stemEl, a, 's');

        if (passageEl && question.section === 'rw') {
          var split = U.el('div.q-split');
          split.appendChild(passageEl);
          split.appendChild(U.el('div', null, [stemEl, answerHost, feedbackHost]));
          content.appendChild(split);
        } else {
          if (passageEl) content.appendChild(passageEl);
          content.appendChild(stemEl);
          content.appendChild(answerHost);
          content.appendChild(feedbackHost);
        }

        answerHost.appendChild(question.type === 'mcq'
          ? renderOptions(question, a) : renderSpr(question, a));
        if (a.submitted) feedbackHost.appendChild(renderFeedback(question, a));

        buildFooter();
        if (JTS.studyHelp && JTS.studyHelp.syncPanel) JTS.studyHelp.syncPanel(ses, question, a, refresh);
      }

      /* Which containers a highlight may land in, rebuilt with the question. */
      var hlTargets = [];

      function wireHighlighting(rootEl, a, bucket) {
        hlTargets.push({ el: rootEl, a: a, bucket: bucket });
        rootEl.addEventListener('click', function (e) {
          if (e.target.tagName !== 'MARK') return;
          a.highlights[bucket] = HL.remove(a.highlights[bucket], Number(e.target.dataset.at));
          saveNow();
          renderQuestion();
        });
      }

      /**
       * Highlighting listens on the document, not on the passage: a drag that
       * starts in the passage and finishes over the toolbar never fires mouseup
       * on the passage, and the browser's own blue selection was left lying
       * across half the screen with nothing to clear it.
       */
      function onMouseUp(e) {
        if (!ses.meta.highlightMode) return;
        /* A dialog has its own text in it — the scratchpad most obviously —
           and clearing the selection there would make it unusable. */
        if (e && e.target && e.target.closest &&
            e.target.closest('.modal, input, textarea, select')) return;
        var applied = false;
        hlTargets.forEach(function (target) {
          if (applied) return;
          var r = HL.fromSelection(target.el);
          if (!r) return;
          r = HL.snap(target.el, r);
          if (!r) return;
          target.a.highlights[target.bucket] =
            HL.merge(target.a.highlights[target.bucket].concat([r]));
          applied = true;
        });
        /* Whether or not it landed somewhere useful, the selection goes. */
        var sel = window.getSelection();
        if (sel && sel.removeAllRanges) sel.removeAllRanges();
        if (!applied) return;
        saveNow();
        renderQuestion();
      }
      document.addEventListener('mouseup', onMouseUp);
      /* Same gesture with a finger. */
      document.addEventListener('touchend', onMouseUp);

      function renderOptions(question, a) {
        var list = U.el('div.opt-list', { role: 'group', 'aria-label': t('common.correct') });
        question.options.forEach(function (text, i) {
          var key = KEYS[i];
          var struck = a.struck.indexOf(key) >= 0;
          var cls = '.opt';
          if (a.submitted) {
            if (key === question.answer) cls += '.is-correct';
            else if (key === a.selected) cls += '.is-wrong';
          }
          if (struck) cls += '.struck';
          var btn = U.el('button' + cls, {
            type: 'button', 'aria-pressed': String(a.selected === key),
            disabled: a.submitted || null,
            onclick: function () { select(key); }
          }, [
            U.el('span.key', { text: key }),
            U.el('span.opt-text', { html: text })
          ]);
          btn.appendChild(U.el('span.opt-strike' + (struck ? '.is-struck' : ''), {
            role: 'button', tabindex: '0',
            text: key,
            title: struck ? t('q.unstrike') : t('q.strike'),
            'aria-label': (struck ? t('q.unstrike') : t('q.strike')) + ' ' + key,
            onclick: function (e) {
              e.stopPropagation();
              var idx = a.struck.indexOf(key);
              if (idx >= 0) a.struck.splice(idx, 1);
              else { a.struck.push(key); if (a.selected === key) a.selected = null; }
              saveNow(); renderQuestion();
            },
            onkeydown: function (e) {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); e.target.click(); }
            }
          }));
          list.appendChild(btn);
        });
        return list;
      }

      function renderSpr(question, a) {
        var wrap = U.el('div.spr-box.stack-sm');
        var input = U.el('input.input', {
          type: 'text', inputmode: 'text', autocomplete: 'off', spellcheck: 'false',
          value: a.selected || '', placeholder: t('q.spr.placeholder'),
          disabled: a.submitted || null, 'aria-label': t('q.spr.preview'),
          style: 'font-family:var(--mono);font-size:17px'
        });
        var preview = U.el('div.spr-preview', { text: a.selected || '—' });
        var err = U.el('div.error-text', { role: 'alert', hidden: true });

        input.addEventListener('input', function () {
          a.selected = input.value;
          preview.textContent = input.value || '—';
          var v = JTS.spr.validate(input.value);
          if (input.value && !v.ok) { err.textContent = t('q.spr.err.' + v.code); err.hidden = false; }
          else err.hidden = true;
          input.setAttribute('aria-invalid', String(!!input.value && !v.ok));
          save();
        });

        wrap.appendChild(input);
        wrap.appendChild(U.el('div.row', null, [
          U.el('span.small.muted', { text: t('q.spr.preview') + ':' }), preview
        ]));
        wrap.appendChild(err);
        wrap.appendChild(U.el('p.hint', { text: t('q.spr.rules') }));
        return wrap;
      }

      function renderFeedback(question, a) {
        var box = U.el('div.notice' + (a.correct ? '.notice-ok' : '.notice-danger'), {
          style: 'margin-top:16px;flex-direction:column;align-items:flex-start;gap:4px'
        });
        box.appendChild(U.el('b', { text: a.correct ? t('q.correct') : t('q.incorrect') }));
        if (!a.correct) {
          var shown = question.type === 'spr' ? question.answer[0] : question.answer;
          box.appendChild(U.el('span', { text: t('q.correctAnswer', { a: shown }) }));
        }
        if (a.helpType !== 'none') box.appendChild(U.el('span.small', { text: t('q.helpUsed') }));
        return box;
      }

      function select(key) {
        var a = ans();
        if (a.submitted) return;
        var idx = a.struck.indexOf(key);
        if (idx >= 0) a.struck.splice(idx, 1);   /* choosing un-strikes it */
        a.selected = key;
        saveNow();
        renderQuestion();
      }

      /* ------------------------------------------------------------ submit */
      function check() {
        var question = q(), a = ans();
        if (a.submitted) return;
        if (a.selected === null || a.selected === '') return;
        if (question.type === 'spr' && !JTS.spr.validate(a.selected).ok) return;

        commitTime();
        a.correct = JTS.session.isCorrect(question, a.selected);
        a.submitted = true;
        var attempt = JTS.attempts.record({
          questionId: question.id, skillId: question.skillId, sessionId: ses.id,
          mode: ses.mode, selected: a.selected, correct: a.correct,
          timeMs: a.timeMs, marked: a.marked, helpType: a.helpType
        });
        a.attemptId = attempt.id;
        if (!a.correct) {
          var err = JTS.attempts.logError(attempt, null);
          a.errorId = err.id;
        }
        saveNow();
        renderQuestion();
        if (JTS.studyHelp && JTS.studyHelp.afterCheck) JTS.studyHelp.afterCheck(ses, question, a, refresh);
      }

      function go(delta) {
        var next = U.clamp(ses.index + delta, 0, ses.questionIds.length - 1);
        if (next === ses.index) return;
        commitTime();
        ses.index = next;
        saveNow();
        /* The top bar is section-dependent — calculator, reference sheet and
           scratchpad are Math-only — and the diagnostic mixes both sections in
           one session, so it is rebuilt with the question and not only when
           the session starts. */
        buildTopbar();
        renderQuestion();
        window.scrollTo(0, 0);
      }

      function refresh() { buildTopbar(); renderQuestion(); }

      /* ------------------------------------------------------------ footer */
      /**
       * The practice bar: Previous on the left; in the middle how many
       * questions are checked and which one this is (it opens the grid of
       * the whole set); on the right the study help, Check and Next. Next
       * moves on with or without a check, and on the last question it
       * finishes the set.
       */
      function buildPracticeFooter() {
        U.clear(footer);
        footer.classList.add('q-footer-practice');
        var a = ans(), question = q();
        var total = ses.questionIds.length;
        var last = ses.index === total - 1;
        var checked = ses.questionIds.filter(function (id) { return ses.answers[id].submitted; }).length;

        footer.appendChild(U.el('div.qf-side', null, [
          U.el('button.btn.qf-prev', {
            type: 'button', text: '← ' + t('q.previous'), disabled: ses.index === 0 || null,
            onclick: function () { go(-1); }
          })
        ]));

        footer.appendChild(U.el('div.qf-mid', null, [
          U.el('span.qf-progress', { text: '◷ ' + t('q.progressChecked', { n: checked, total: total }) }),
          /* The arrow says the button opens the list of every question. */
          U.el('button.qf-where', {
            type: 'button', 'aria-haspopup': 'dialog', onclick: openGrid
          }, [
            U.el('span', { text: t('q.questionOf', { n: ses.index + 1, total: total }) }),
            U.el('span.qf-chev', { 'aria-hidden': 'true', html:
              '<svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" ' +
              'stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 10 8 5.5 12.5 10"/></svg>' })
          ])
        ]));

        var right = U.el('div.qf-side.qf-right');
        if (isStudy && JTS.studyHelp && JTS.studyHelp.footerControls) {
          JTS.studyHelp.footerControls(right, ses, question, a, refresh);
        }
        if (isStudy && !a.submitted) {
          right.appendChild(U.el('button.btn.qf-check', {
            type: 'button', text: '✓ ' + t('q.submit'),
            disabled: (a.selected === null || a.selected === '') || null,
            onclick: check
          }));
        }
        right.appendChild(last
          ? U.el('button.btn.btn-primary', {
              type: 'button', text: t('q.finish'),
              onclick: function () { commitTime(); saveNow(); JTS.session.finish(); }
            })
          : U.el('button.btn.btn-primary', {
              type: 'button', text: t('q.next') + ' →', onclick: function () { go(1); }
            }));
        footer.appendChild(right);
      }

      function buildFooter() {
        if (ses.kind === 'practice') { buildPracticeFooter(); return; }
        U.clear(footer);
        var a = ans(), question = q();
        var last = ses.index === ses.questionIds.length - 1;

        /* Left: how much of the set is answered, and a way into the grid for
           a long set. Middle: the set itself, numbered. Right: what to press. */
        footer.appendChild(U.el('button.q-jump', {
          type: 'button',
          text: '▾  ' + answeredCount() + '/' + ses.questionIds.length,
          'aria-label': t('q.position', { n: ses.index + 1, total: ses.questionIds.length }),
          onclick: openGrid
        }));

        /* A long set starts its rail at question 1 and scrolls it so the
           current question is in view; a short one sits centred. */
        var rail = U.el('div.q-rail' + (ses.questionIds.length > 20 ? '.is-long' : ''),
          { role: 'group', 'aria-label': t('q.jumpTo') });
        ses.questionIds.forEach(function (qid, i) {
          var ai = ses.answers[qid];
          var answered = ai.selected !== null && ai.selected !== '';
          var cls = '.q-step';
          if (answered) cls += '.is-answered';
          if (ai.marked) cls += '.is-marked';
          if (i === ses.index) cls += '.is-here';
          rail.appendChild(U.el('button' + cls, {
            type: 'button', text: String(i + 1),
            'aria-current': i === ses.index ? 'step' : null,
            'aria-label': t('q.position', { n: i + 1, total: ses.questionIds.length }),
            onclick: function () {
              if (i === ses.index) return;
              commitTime(); ses.index = i; saveNow();
              buildTopbar(); renderQuestion(); window.scrollTo(0, 0);
            }
          }));
        });
        footer.appendChild(rail);
        var here = rail.children[ses.index];
        if (here && ses.questionIds.length > 20) {
          setTimeout(function () {
            rail.scrollLeft = here.offsetLeft - rail.offsetLeft - (rail.clientWidth - here.offsetWidth) / 2;
          }, 0);
        }

        /* Study-mode help is constructed only in study mode, so in exam and
           diagnostic mode these controls do not exist in the DOM at all. */
        if (isStudy && JTS.studyHelp && JTS.studyHelp.footerControls) {
          JTS.studyHelp.footerControls(footer, ses, question, a, refresh);
        }
        footer.appendChild(U.el('button.btn', {
          type: 'button', text: t('q.back'), disabled: ses.index === 0 || null,
          onclick: function () { go(-1); }
        }));

        if (isStudy && !a.submitted) {
          footer.appendChild(U.el('button.btn.btn-primary', {
            type: 'button', text: t('q.submit'),
            disabled: (a.selected === null || a.selected === '') || null,
            onclick: check
          }));
        } else if (last) {
          footer.appendChild(U.el('button.btn.btn-primary', {
            type: 'button', text: t('q.finish'),
            onclick: function () { commitTime(); saveNow(); JTS.session.finish(); }
          }));
        } else {
          footer.appendChild(U.el('button.btn.btn-primary', {
            type: 'button', text: t('q.next'), onclick: function () { go(1); }
          }));
        }
      }

      function openGrid() {
        var grid = U.el('div.q-grid');
        var m;
        ses.questionIds.forEach(function (qid, i) {
          var a = ses.answers[qid];
          var answered = a.selected !== null && a.selected !== '';
          var cls = '';
          if (answered) cls += '.answered';
          if (a.marked) cls += '.marked';
          if (i === ses.index) cls += '.current';
          grid.appendChild(U.el('button' + cls, {
            type: 'button', text: String(i + 1),
            'aria-label': (i + 1) + ' ' + (answered ? t('common.correct') : t('common.unanswered')),
            onclick: function () {
              commitTime(); ses.index = i; saveNow(); m.close();
              buildTopbar(); renderQuestion(); window.scrollTo(0, 0);
            }
          }));
        });
        m = ui.modal({
          title: t('q.position', { n: ses.index + 1, total: ses.questionIds.length }),
          content: U.el('div.stack', null, [
            grid,
            U.el('div.legend', null, [
              U.el('span', { text: '■ ' + t('common.correct') }),
              U.el('span', { text: '⚑ ' + t('q.marked') })
            ])
          ]),
          actions: [U.el('button.btn.btn-danger', {
            type: 'button', text: t('q.finish'),
            onclick: function () { m.close(); commitTime(); saveNow(); JTS.session.finish(); }
          })]
        });
      }

      /* ---------------------------------------------------------- keyboard */
      function onKey(e) {
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        /* Keys typed on the whiteboard or in the study-time panel are theirs. */
        if (e.target.closest && e.target.closest('.wb-window, .pomo-panel')) return;
        var tag = (e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') {
          if (e.key === 'Enter') { e.preventDefault(); isStudy && !ans().submitted ? check() : go(1); }
          return;
        }
        if (U.$('#modal-root').firstChild) return;
        var question = q();
        var k = e.key.toUpperCase();
        if (question.type === 'mcq') {
          var idx = KEYS.indexOf(k);
          if (idx < 0 && /^[1-4]$/.test(e.key)) idx = Number(e.key) - 1;
          if (idx >= 0) { e.preventDefault(); select(KEYS[idx]); return; }
        }
        if (k === 'M') { e.preventDefault(); var a = ans(); a.marked = !a.marked; saveNow(); renderQuestion(); return; }
        if (e.key === 'Enter') {
          e.preventDefault();
          if (isStudy && !ans().submitted) check();
          else if (ses.index < ses.questionIds.length - 1) go(1);
          else { commitTime(); saveNow(); JTS.session.finish(); }
        }
      }
      document.addEventListener('keydown', onKey);

      /* ------------------------------------------------------------- start */
      buildTopbar();
      renderQuestion();
      if (ses.elapsedMs > 0 && !ses.paused) ui.toast(t('q.restored'), 'ok');

      return function teardown() {
        document.removeEventListener('keydown', onKey);
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('touchend', onMouseUp);
        clearInterval(announceInt);
        if (timer) { commitTime(); timer.pause(); ses.elapsedMs = timer.value(); }
        if (JTS.session.current()) saveNow();
        JTS.desmos.hide();
        if (board) board.closeWindow();
        if (unitCode) document.body.classList.remove('unit-focus');
      };
    }
  });
})();
