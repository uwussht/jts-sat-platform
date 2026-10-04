/* ==========================================================================
   Study-mode help layer (step 4).

   The question engine calls into JTS.studyHelp only when the session mode is
   'study', so in exam and diagnostic mode none of this is constructed and the
   controls are absent from the DOM.

   The rules that make the help honest rather than decorative:
     - a hint is the question's own written hint, one at a time, and never
       contains the answer
     - opening the explanation before answering marks the attempt as helped, so
       it is counted separately from independent work and never feeds mastery
     - after a wrong answer the student classifies the error; that is what
       makes the three-day review queue worth anything
     - 'solve a similar one without help' starts a one-question session with the
       help controls withheld until the answer is in — only that attempt counts
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var ERROR_TYPES = ['knowledge gap', 'misread', 'calculation', 'strategy', 'time pressure', 'careless'];

  /* --------------------------------------------------------------- helpers */

  /** Raise the help level recorded against this attempt, never lower it. */
  function raiseHelp(a, level) {
    var rank = { none: 0, hint: 1, explanation: 2, full: 3 };
    if (rank[level] > rank[a.helpType || 'none']) a.helpType = level;
  }

  /**
   * A first guess at what went wrong, for the student to confirm or correct.
   * Deliberately simple and explainable: a fast wrong answer is usually a
   * misread, a near-miss on a numeric answer is usually arithmetic.
   */
  function suggestErrorType(question, a) {
    var secs = (a.timeMs || 0) / 1000;
    var bench = question.section === 'math' ? JTS.config.pace.math : JTS.config.pace.rw;
    if (question.type === 'spr') {
      var got = JTS.spr.value(JTS.spr.normalize(a.selected || ''));
      var want = JTS.spr.value(JTS.spr.normalize(question.answer[0]));
      if (got !== null && want !== null && want !== 0 && Math.abs((got - want) / want) < 0.5) return 'calculation';
    }
    if (secs > 0 && secs < bench * 0.4) return 'misread';
    if (secs > bench * 2.5) return 'knowledge gap';
    if (a.helpType && a.helpType !== 'none') return 'knowledge gap';
    return 'careless';
  }

  /* --------------------------------------------------- explanation rendering */

  /**
   * Split a worked solution into steps at sentence ends, so a paragraph of
   * algebra reads as 1, 2, 3. A sentence ends at ". " before a capital or a
   * digit-free word; "1.5" and "e.g." stay whole.
   */
  function steps(html) {
    var parts = String(html).split(/(?<=[.!?])\s+(?=[A-Z(])/);
    return parts.length > 1 ? parts : null;
  }

  /**
   * The explanation, built to be read in order:
   *   1. the verdict: your answer against the correct one;
   *   2. why the correct choice is right, as numbered steps when it is a
   *      worked solution;
   *   3. every other choice, its own text beside the reason it fails, the
   *      student's own pick marked;
   *   4. other ways to solve it (Math), when the question has them.
   * `a` (the student's answer) is optional: the mock review passes none.
   */
  function explanationBody(question, a) {
    var lang = S.settings().explainLang;
    var wrap = U.el('div.stack.xp');
    var isMcq = question.type === 'mcq' && question.options;
    var correct = question.type === 'spr' ? question.answer.join('  ·  ') : question.answer;
    var picked = a && a.selected !== null && a.selected !== '' ? a.selected : null;
    var answered = !!(a && a.submitted);

    /* 1. Verdict */
    var verdict = U.el('div.xp-verdict' + (answered ? (a.correct ? '.is-right' : '.is-wrong') : ''));
    if (answered) {
      verdict.appendChild(U.el('div.xp-verdict-title', {
        text: a.correct ? '✓ ' + t('xp.youGotIt') : '✗ ' + t('xp.notQuite')
      }));
    }
    var vrow = U.el('div.xp-verdict-row');
    if (answered && !a.correct && picked) {
      vrow.appendChild(U.el('span.xp-pill.is-wrong', { text: t('xp.yourAnswer', { a: picked }) }));
    }
    vrow.appendChild(U.el('span.xp-pill.is-right', { text: t('q.correctAnswer', { a: correct }) }));
    verdict.appendChild(vrow);
    wrap.appendChild(verdict);

    /* 2. Why the correct answer is right */
    var right = U.el('section.xp-block');
    right.appendChild(U.el('h3.xp-h', { text: isMcq ? t('xp.whyRight', { a: correct }) : t('xp.howToSolve') }));
    if (isMcq) {
      right.appendChild(U.el('div.xp-choice.is-right', null, [
        U.el('span.xp-key', { text: correct }),
        U.el('span.xp-choice-text', { html: question.options['ABCD'.indexOf(correct)] })
      ]));
    }
    var expl = JTS.i18n.pick(question.explanation, lang) || '';
    var st = question.section === 'math' ? steps(expl) : null;
    if (st) {
      right.appendChild(U.el('ol.xp-steps', null, st.map(function (x) { return U.el('li', { html: x }); })));
    } else {
      right.appendChild(U.el('div.xp-text', { html: expl }));
    }
    wrap.appendChild(right);

    /* 3. The other choices */
    if (isMcq && question.distractors) {
      var others = U.el('section.xp-block');
      others.appendChild(U.el('h3.xp-h', { text: t('q.whyWrong') }));
      ['A', 'B', 'C', 'D'].forEach(function (k, i) {
        if (k === correct) return;
        var d = question.distractors[k];
        var mine = picked === k;
        others.appendChild(U.el('div.xp-choice' + (mine ? '.is-mine' : ''), null, [
          U.el('span.xp-key', { text: k }),
          U.el('div.xp-choice-body', null, [
            U.el('div.xp-choice-text', { html: question.options[i] }),
            mine ? U.el('span.xp-tag', { text: t('xp.yourPick') }) : null,
            d ? U.el('div.xp-reason', { html: JTS.i18n.pick(d, lang) }) : null
          ])
        ]));
      });
      wrap.appendChild(others);
    }

    /* 4. Other ways to solve it */
    if (question.methods && question.methods.length) {
      var ways = U.el('section.xp-block');
      ways.appendChild(U.el('h3.xp-h', { text: question.methods.length > 1 ? t('q.methods') : t('q.singleMethod') }));
      function methodBody(m) {
        var txt = JTS.i18n.pick(m.steps, lang);
        var ms = steps(txt);
        return ms ? U.el('ol.xp-steps', null, ms.map(function (x) { return U.el('li', { html: x }); }))
                  : U.el('div.xp-text', { html: txt });
      }
      if (question.methods.length >= 2) {
        ways.appendChild(ui.tabs(question.methods.map(function (m, i) {
          return {
            id: 'm' + i,
            label: m.title || t('q.method', { n: i + 1 }),
            render: function (host) { host.appendChild(methodBody(m)); }
          };
        })));
      } else {
        ways.appendChild(methodBody(question.methods[0]));
      }
      wrap.appendChild(ways);
    }

    return wrap;
  }

  /* ------------------------------------------------------------- side panel */

  function closePanel() {
    var main = U.$('.q-main');
    if (main) main.classList.remove('with-side');
    var side = U.$('.q-side');
    if (side) side.remove();
  }

  function openPanel(ses, question, a, refresh) {
    closePanel();
    var main = U.$('.q-main');
    if (!main) return;
    main.classList.add('with-side');

    var side = U.el('aside.q-side', { 'aria-label': t('q.explanation') });
    var head = U.el('div.q-topbar', { style: 'position:static' }, [
      U.el('strong', { text: t('q.explanation') }),
      U.el('span.spacer'),
      U.el('button.btn.btn-sm', {
        type: 'button', text: t('common.close'),
        onclick: function () { closePanel(); }
      })
    ]);
    var body = U.el('div.q-side-body');
    side.appendChild(head);
    side.appendChild(body);
    main.appendChild(side);

    body.appendChild(explanationBody(question, a));
  }

  /* ------------------------------------------------- error classification */

  /** The question's opening words, as plain text, to name it in the log. */
  function questionExcerpt(question) {
    /* An inert parse: no images load and nothing runs. */
    var doc = new DOMParser().parseFromString(
      (question.passage || '') + ' ' + (question.stem || ''), 'text/html');
    var text = (doc.body.textContent || '').replace(/\s+/g, ' ').trim();
    return text.length > 140 ? text.slice(0, 137).replace(/\s+\S*$/, '') + '…' : text;
  }

  /**
   * The error-log window for a missed question, opened from the top bar's
   * "Log error" button. Nothing is pre-chosen: the student names the kind of
   * mistake themselves.
   */
  function classifyError(ses, question, a, refresh) {
    var chosen = a.errorType || null;
    var m, save;

    var list = U.el('div.stack-sm');
    ERROR_TYPES.forEach(function (type) {
      var input = U.el('input', { type: 'radio', name: 'errtype', checked: chosen === type || null });
      input.addEventListener('change', function () {
        if (input.checked) { chosen = type; save.disabled = false; }
      });
      list.appendChild(U.el('label.check.check-card', null, [
        input,
        U.el('span', null, [U.el('b', { text: t('err.' + type) })])
      ]));
    });

    m = ui.modal({
      title: t('q.errorTypeTitle'),
      sticky: true,
      content: U.el('div.stack', null, [
        U.el('p.small.muted', { text: t('q.errorTypeLead') }),
        list
      ]),
      actions: [
        U.el('button.btn', {
          type: 'button', text: t('common.cancel'),
          onclick: function () { m.close(); }
        }),
        save = U.el('button.btn.btn-primary', {
          type: 'button', text: t('common.save'), disabled: !chosen || null,
          onclick: function () {
            if (!chosen) return;
            a.errorType = chosen;
            if (a.attemptId) {
              JTS.attempts.setErrorType(a.attemptId, chosen);
              JTS.attempts.logToNotebook(a.attemptId, {
                title: questionExcerpt(question),
                topicCode: (ses.meta && ses.meta.lessonCode) || null,
                topicText: JTS.skills.name(question.skillId) || '',
                errorType: chosen
              });
            }
            S.save();
            m.close();
            refresh && refresh();
          }
        })
      ]
    });
  }

  /* ----------------------------------------------------------- public API */

  JTS.studyHelp = {
    /** Buttons added to the question footer in study mode. */
    footerControls: function (footer, ses, question, a, refresh) {
      var hints = question.hints || [];
      a.hintHistory = a.hintHistory || [];

      /* Hints are the question's own, shown one at a time; once they run out
         the last one stays. Reading one costs the attempt its independence. */
      if (!a.submitted && hints.length) {
        footer.appendChild(U.el('button.btn.btn-sm', {
          type: 'button', text: t('q.hint'),
          onclick: function () {
            var i = Math.min(a.hintHistory.length, hints.length - 1);
            var text = JTS.i18n.pick(hints[i], S.settings().explainLang);
            if (a.hintHistory.length < hints.length) a.hintHistory.push(text);
            raiseHelp(a, 'hint');
            S.save();
            var hm;
            /* The answer is never in the hint, and the explanation waits
               until the answer is checked. */
            hm = ui.modal({
              title: t('q.hint') + ' ' + (i + 1) + '/' + hints.length,
              content: U.el('p', { text: text }),
              actions: [
                U.el('button.btn', {
                  type: 'button', text: t('common.close'),
                  onclick: function () { hm.close(); }
                })
              ]
            });
            refresh();
          }
        }));
      }

      /* The explanation is there only once the answer has been checked. */
      if (a.submitted) {
        footer.appendChild(U.el('button.btn.btn-sm', {
          type: 'button', text: t('q.explanation'),
          onclick: function () { openPanel(ses, question, a, refresh); }
        }));
      }
    },

    /**
     * Keep an open explanation panel with the question on screen: it follows
     * to the next checked question, and closes on one not yet checked.
     */
    syncPanel: function (ses, question, a, refresh) {
      if (!U.$('.q-side')) return;
      if (a && a.submitted) openPanel(ses, question, a, refresh);
      else closePanel();
    },

    /** Called right after an answer is checked in study mode. A miss goes
        to the error log on its own; naming the kind of mistake is the
        student's choice, from the top bar's "Log error" button. */
    afterCheck: function () {},

    /** Open the error-log window for a missed question. */
    logError: function (ses, question, a, refresh) {
      classifyError(ses, question, a, refresh);
    },

    /* exposed for tests and for reuse by the mock review screen */
    explanationBody: explanationBody,
    suggestErrorType: suggestErrorType,
    ERROR_TYPES: ERROR_TYPES
  };
})();
