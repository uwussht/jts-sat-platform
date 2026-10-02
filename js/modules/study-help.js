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

  function explanationBody(question) {
    var lang = S.settings().explainLang;
    var wrap = U.el('div.stack');

    var correct = question.type === 'spr' ? question.answer.join('  ·  ') : question.answer;
    wrap.appendChild(U.el('div.notice.notice-ok', null, [
      U.el('span', null, [U.el('b', { text: t('q.correctAnswer', { a: correct }) })])
    ]));
    wrap.appendChild(U.el('div', { html: JTS.i18n.pick(question.explanation, lang) }));

    /* R&W: every wrong option gets its own reason. */
    if (question.distractors) {
      var list = U.el('div.stack-sm');
      list.appendChild(U.el('h3.h3', { text: t('q.whyWrong') }));
      ['A', 'B', 'C', 'D'].forEach(function (k) {
        var d = question.distractors[k];
        if (!d) return;
        list.appendChild(U.el('div.card.card-sm.card-flat', null, [
          U.el('div.row', { style: 'align-items:flex-start' }, [
            U.el('span.key', { text: k, style: 'flex:0 0 26px;width:26px;height:26px;display:grid;place-items:center;border:1.5px solid var(--border-strong);font-size:13px;font-weight:700' }),
            U.el('span.small', { html: JTS.i18n.pick(d, lang) })
          ])
        ]));
      });
      wrap.appendChild(list);
    }

    /* Math: alternative methods, but only when there really are several.
       A single walkthrough is shown as one section, never as "Method #1". */
    if (question.methods && question.methods.length >= 2) {
      wrap.appendChild(U.el('h3.h3', { text: t('q.methods') }));
      wrap.appendChild(ui.tabs(question.methods.map(function (m, i) {
        return {
          id: 'm' + i,
          label: m.title || t('q.method', { n: i + 1 }),
          render: function (host) { host.appendChild(U.el('p', { html: JTS.i18n.pick(m.steps, lang) })); }
        };
      })));
    } else if (question.methods && question.methods.length === 1) {
      wrap.appendChild(U.el('h3.h3', { text: t('q.singleMethod') }));
      wrap.appendChild(U.el('p', { html: JTS.i18n.pick(question.methods[0].steps, lang) }));
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

    body.appendChild(explanationBody(question));
  }

  /* ------------------------------------------------- error classification */

  function classifyError(ses, question, a, refresh) {
    var suggested = suggestErrorType(question, a);
    var chosen = a.errorType || suggested;
    var m;

    var list = U.el('div.stack-sm');
    ERROR_TYPES.forEach(function (type) {
      var input = U.el('input', { type: 'radio', name: 'errtype', checked: chosen === type || null });
      input.addEventListener('change', function () { if (input.checked) chosen = type; });
      list.appendChild(U.el('label.check.check-card', null, [
        input,
        U.el('span', null, [
          U.el('b', { text: t('err.' + type) }),
          type === suggested ? U.el('span.badge.badge-muted', {
            text: t('q.suggested'), style: 'margin-left:8px'
          }) : null
        ])
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
          type: 'button', text: t('common.skip'),
          onclick: function () { m.close(); }
        }),
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('common.save'), 'data-autofocus': '',
          onclick: function () {
            a.errorType = chosen;
            if (a.attemptId) JTS.attempts.setErrorType(a.attemptId, chosen);
            S.save();
            m.close();
            ui.toast(t('q.reviewQueued'), 'ok');
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
            /* The answer is never in the hint; it is one deliberate click
               further, and that click costs the attempt its independence. */
            hm = ui.modal({
              title: t('q.hint') + ' ' + (i + 1) + '/' + hints.length,
              content: U.el('p', { text: text }),
              actions: [
                U.el('button.btn', {
                  type: 'button', text: t('common.close'),
                  onclick: function () { hm.close(); }
                }),
                U.el('button.btn.btn-primary', {
                  type: 'button', text: t('q.showFull'),
                  onclick: function () {
                    raiseHelp(a, 'full'); S.save();
                    hm.close();
                    refresh();
                    openPanel(ses, question, a, refresh);
                  }
                })
              ]
            });
            refresh();
          }
        }));
      }

      footer.appendChild(U.el('button.btn.btn-sm', {
        type: 'button', text: t('q.explanation'),
        onclick: function () {
          /* Reading the explanation before answering is what disqualifies the
             attempt from counting as independent work. */
          if (!a.submitted) { raiseHelp(a, 'explanation'); S.save(); refresh(); }
          openPanel(ses, question, a, refresh);
        }
      }));
    },

    /** Called right after an answer is checked in study mode. */
    afterCheck: function (ses, question, a, refresh) {
      if (a.correct) return;
      classifyError(ses, question, a, refresh);
    },

    /* exposed for tests and for reuse by the mock review screen */
    explanationBody: explanationBody,
    suggestErrorType: suggestErrorType,
    ERROR_TYPES: ERROR_TYPES
  };
})();
