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
  function referenceSheet() {
    var rows = [
      ['Circle', 'A = &pi;r<sup>2</sup>&nbsp;&nbsp;&nbsp;C = 2&pi;r'],
      ['Rectangle', 'A = &#8467;w'],
      ['Triangle', 'A = <span class="frac"><span>1</span><span>2</span></span>bh'],
      ['Pythagorean theorem', 'c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>'],
      ['Special right triangle 30&deg;-60&deg;-90&deg;', 'sides x, x&radic;3, 2x'],
      ['Special right triangle 45&deg;-45&deg;-90&deg;', 'sides s, s, s&radic;2'],
      ['Rectangular solid', 'V = &#8467;wh'],
      ['Cylinder', 'V = &pi;r<sup>2</sup>h'],
      ['Sphere', 'V = <span class="frac"><span>4</span><span>3</span></span>&pi;r<sup>3</sup>'],
      ['Cone', 'V = <span class="frac"><span>1</span><span>3</span></span>&pi;r<sup>2</sup>h'],
      ['Pyramid', 'V = <span class="frac"><span>1</span><span>3</span></span>&#8467;wh'],
      ['Degrees in a circle', '360'],
      ['Radians in a circle', '2&pi;'],
      ['Angles in a triangle', '180 degrees']
    ];
    var html = '<table class="ref-table"><tbody>' + rows.map(function (r) {
      return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>';
    }).join('') + '</tbody></table>';
    return U.el('div', { html: html });
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
      var hardTimer = ses.durationMs > 0 && !ses.softTimer;
      var shownAt = Date.now();
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
        elapsedMs: ses.elapsedMs || 0,
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
      paintTimer(ses.elapsedMs || 0);
      /* Persist the clock periodically so a crash costs seconds, not minutes. */
      announceInt = setInterval(function () { saveNow(); }, 5000);

      /* ----------------------------------------------------------- top bar */
      function buildTopbar() {
        U.clear(topbar);
        topbar.appendChild(timerEl);
        topbar.appendChild(timerLive);

        if (isStudy) {
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
        topbar.appendChild(U.el('button.q-tool', {
          type: 'button', text: S.settings().timerHidden ? t('q.showTimer') : t('q.hideTimer'),
          onclick: function () {
            S.update(function (s) { s.settings.timerHidden = !s.settings.timerHidden; });
            buildTopbar(); paintTimer(timer.value());
          }
        }));

        var tools = U.el('div.q-tools');
        tools.appendChild(U.el('button.q-tool', {
          type: 'button', text: t('q.directions'),
          onclick: function () {
            ui.modal({ title: t('q.directions'),
              content: JTS.questionScreen.directionsFor(q().section, ses.mode) });
          }
        }));

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
           button at all, matching the real test. */
        if (q().section === 'math') {
          tools.appendChild(U.el('button.q-tool', {
            type: 'button', text: t('q.calculator'),
            onclick: function () { JTS.desmos.toggle(); }
          }));
          tools.appendChild(U.el('button.q-tool', {
            type: 'button', text: t('q.reference'),
            onclick: function () {
              ui.modal({ title: t('q.reference'), content: JTS.questionScreen.referenceSheet() });
            }
          }));
          tools.appendChild(U.el('button.q-tool', {
            type: 'button', text: t('q.scratchpad'), title: t('q.scratchpad'),
            onclick: openScratchpad
          }));
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

        var head = U.el('div.row', null, [
          U.el('span.q-num', { text: String(ses.index + 1) }),
          U.el('button.q-tool', {
            type: 'button', 'aria-pressed': String(!!a.marked),
            text: '⚑ ' + (a.marked ? t('q.marked') : t('q.markReview')),
            onclick: function () { a.marked = !a.marked; saveNow(); renderQuestion(); }
          }),
          U.el('span.spacer'),
          /* Naming the skill is useful while practising and is a hint while
             being measured, so it appears in study mode only. */
          isStudy ? U.el('span.badge.badge-muted', { text: JTS.skills.name(question.skillId) }) : null
        ]);
        content.appendChild(head);

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

        content.appendChild(U.el('p.hint', { text: t('q.keyboardHelp'), style: 'margin-top:18px' }));
        buildFooter();
      }

      function wireHighlighting(rootEl, a, bucket) {
        rootEl.addEventListener('mouseup', function () {
          if (!ses.meta.highlightMode) return;
          var r = HL.fromSelection(rootEl);
          if (!r) return;
          a.highlights[bucket] = HL.merge(a.highlights[bucket].concat([r]));
          window.getSelection().removeAllRanges();
          saveNow();
          renderQuestion();
        });
        rootEl.addEventListener('click', function (e) {
          if (e.target.tagName !== 'MARK') return;
          a.highlights[bucket] = HL.remove(a.highlights[bucket], Number(e.target.dataset.at));
          saveNow();
          renderQuestion();
        });
      }

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
          btn.appendChild(U.el('span.opt-strike', {
            role: 'button', tabindex: '0',
            text: struck ? '↺' : '―',
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
        renderQuestion();
        window.scrollTo(0, 0);
      }

      function refresh() { buildTopbar(); renderQuestion(); }

      /* ------------------------------------------------------------ footer */
      function buildFooter() {
        U.clear(footer);
        var a = ans(), question = q();
        var last = ses.index === ses.questionIds.length - 1;

        footer.appendChild(U.el('button.q-jump', {
          type: 'button',
          text: t('q.position', { n: ses.index + 1, total: ses.questionIds.length }) + '  ▾',
          onclick: openGrid
        }));
        footer.appendChild(U.el('span.small.muted', {
          text: t('practice.counter', { answered: answeredCount(), total: ses.questionIds.length })
        }));

        /* Study-mode help is constructed only in study mode, so in exam and
           diagnostic mode these controls do not exist in the DOM at all. */
        if (isStudy && JTS.studyHelp && JTS.studyHelp.footerControls) {
          JTS.studyHelp.footerControls(footer, ses, question, a, refresh);
        }

        footer.appendChild(U.el('span.spacer'));
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
              commitTime(); ses.index = i; saveNow(); m.close(); renderQuestion(); window.scrollTo(0, 0);
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
        clearInterval(announceInt);
        if (timer) { commitTime(); timer.pause(); ses.elapsedMs = timer.value(); }
        if (JTS.session.current()) saveNow();
        JTS.desmos.hide();
      };
    }
  });
})();
