/* ==========================================================================
   Study-mode help layer (step 4).

   The question engine calls into JTS.studyHelp only when the session mode is
   'study', so in exam and diagnostic mode none of this is constructed and the
   controls are absent from the DOM (AI-08).

   The rules that make the help honest rather than decorative:
     - a hint never contains the answer, and the answer is not even sent to the
       model when the intent is 'hint' (AI-02)
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

  function levelSummary(skillId) {
    var m = JTS.mastery.compute(skillId);
    if (m.independent < JTS.config.mastery.minIndependentAttempts) {
      return 'few independent attempts on this skill (' + m.independent + ')';
    }
    return m.status + ', ' + Math.round((m.accuracy || 0) * 100) + '% independent accuracy';
  }

  function payloadFor(question, a, intent, extra) {
    var p = {
      intent: intent,
      questionRecord: question,
      question: { stem: question.stem, passage: question.passage || null, options: question.options || null },
      selectedAnswer: a ? a.selected : null,
      correctAnswer: question.answer,
      skillId: question.skillId,
      skillName: JTS.skills.name(question.skillId),
      language: S.settings().explainLang,
      hintHistory: (a && a.hintHistory) || [],
      errorType: (a && a.errorType) || null,
      studentLevelSummary: levelSummary(question.skillId)
    };
    if (extra) Object.keys(extra).forEach(function (k) { p[k] = extra[k]; });
    return p;
  }

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

    /* R&W: every wrong option gets its own reason (AI-03). */
    if (question.distractors) {
      var list = U.el('div.stack-sm');
      list.appendChild(U.el('h3.h3', { text: t('q.whyWrong') }));
      ['A', 'B', 'C', 'D'].forEach(function (k) {
        var d = question.distractors[k];
        if (!d) return;
        list.appendChild(U.el('div.card.card-sm.card-flat', null, [
          U.el('div.row', { style: 'align-items:flex-start' }, [
            U.el('span.key', { text: k, style: 'flex:0 0 26px;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;border:1.5px solid var(--border-strong);font-size:13px;font-weight:700' }),
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

  function openPanel(tabId, ses, question, a, refresh) {
    closePanel();
    var main = U.$('.q-main');
    if (!main) return;
    main.classList.add('with-side');

    var side = U.el('aside.q-side', { 'aria-label': t('ai.title') });
    var head = U.el('div.q-topbar', { style: 'position:static' }, [
      U.el('strong', { text: t('ai.title') }),
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

    var tabs = ui.tabs([
      { id: 'explanation', label: t('q.explanation'), render: function (host) {
          host.appendChild(explanationBody(question));
          host.appendChild(similarButton(ses, question));
        } },
      { id: 'ai', label: t('ai.title'), render: function (host) { chatPanel(host, ses, question, a, refresh); } }
    ], tabId);
    body.appendChild(tabs);
  }

  function similarButton(ses, question) {
    return U.el('div.stack-sm', { style: 'margin-top:18px' }, [
      U.el('button.btn.btn-primary.btn-block', {
        type: 'button', text: t('q.solveSimilar'),
        onclick: function () { startSimilar(ses, question); }
      }),
      U.el('p.hint', { text: t('q.independentOnly') })
    ]);
  }

  /**
   * Remix / 'solve a similar one': another unseen question on the same skill
   * and difficulty, run as its own one-question session with the help controls
   * withheld until the answer is submitted.
   */
  function startSimilar(ses, question) {
    var seen = S.state().seenQuestionIds || [];
    var pool = JTS.bank.query({ skillIds: [question.skillId], excludeIds: [question.id] });
    var fresh = pool.filter(function (q) { return seen.indexOf(q.id) < 0; });
    var sameLevel = fresh.filter(function (q) { return q.difficulty === question.difficulty; });
    var pick = U.shuffle(sameLevel.length ? sameLevel : fresh, Date.now() % 9973)[0];
    if (!pick) { ui.toast(t('q.noSimilar'), 'err'); return; }

    /* Close the current session cleanly first so its attempts are recorded. */
    var back = ses ? ses.returnHash : '#/practice';
    if (ses) { S.save(); JTS.session.finish(); }
    JTS.session.start({
      kind: 'practice', mode: 'study',
      title: JTS.skills.name(question.skillId),
      questionIds: [pick.id],
      returnHash: back, finishHash: back,
      meta: { independentOnly: true, similarTo: question.id }
    });
  }

  /* ------------------------------------------------------------ chat panel */

  function chatPanel(host, ses, question, a, refresh) {
    var log = U.el('div.stack-sm');
    var thread = (a.aiThread = a.aiThread || []);

    function addMessage(m) {
      var box = U.el('div.ai-msg' + (m.role === 'user' ? '.from-user' : ''));
      box.appendChild(U.el('div', { html: String(m.text || '').replace(/\n/g, '<br>') }));

      if (m.role === 'ai') {
        if (m.warning) box.appendChild(U.el('div.notice.notice-warn.small', { text: t('ai.fellBack') }));
        if (m.unsure) {
          box.appendChild(U.el('div.row.row-wrap', { style: 'margin-top:8px' }, [
            U.el('a.btn.btn-sm', {
              href: JTS.config.links.whatsapp, target: '_blank', rel: 'noopener',
              text: t('ai.askTeacher')
            })
          ]));
        }
        var acts = U.el('div.ai-actions');
        [['up', t('ai.helpful')], ['down', t('ai.notHelpful')]].forEach(function (v) {
          acts.appendChild(U.el('button.btn.btn-sm', {
            type: 'button', text: v[1],
            onclick: function () {
              JTS.AI.feedback({
                questionId: question.id, skillId: question.skillId,
                intent: m.intent || 'chat', vote: v[0], source: m.source || 'bank',
                text: String(m.text || '').slice(0, 400)
              });
              ui.toast(t('ai.thanks'), 'ok');
            }
          }));
        });
        box.appendChild(acts);
      }
      log.appendChild(box);
      box.scrollIntoView({ block: 'nearest' });
    }

    thread.forEach(addMessage);

    var input = U.el('input.input', { type: 'text', placeholder: t('ai.placeholder') });
    var send = U.el('button.btn.btn-primary', { type: 'button', text: t('ai.send') });

    function ask(text) {
      if (!text.trim()) return;
      var userMsg = { role: 'user', text: text };
      thread.push(userMsg); addMessage(userMsg);
      input.value = '';
      send.disabled = true;
      var pending = U.el('div.ai-msg', { text: t('ai.thinking') });
      log.appendChild(pending);

      JTS.AI.ask(payloadFor(question, a, 'chat', { userMessage: text })).then(function (r) {
        pending.remove();
        send.disabled = false;
        var msg = {
          role: 'ai', text: r.text, unsure: !!r.unsure, warning: r.warning || null,
          source: r.source, intent: 'chat'
        };
        thread.push(msg); addMessage(msg);
        if (r.fallbackExplanation) {
          var fb = { role: 'ai', text: r.fallbackExplanation, source: 'bank', intent: 'explanation' };
          thread.push(fb); addMessage(fb);
        }
        raiseHelp(a, a.submitted ? a.helpType || 'none' : 'explanation');
        S.save();
        refresh && refresh();
      });
    }

    send.addEventListener('click', function () { ask(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); ask(input.value); }
    });

    host.appendChild(U.el('div.small.muted', { text: t('ai.quotaLeft', { n: JTS.AI.quotaLeft() }) }));
    if (!JTS.AI.isLive()) host.appendChild(U.el('div.notice.small', { text: t('ai.mockNote') }));
    host.appendChild(log);
    host.appendChild(U.el('div.row', { style: 'margin-top:10px' }, [input, send]));
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
            text: t('q.aiSuggests', { type: t('err.' + type) }), style: 'margin-left:8px'
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
      /* A 'solve a similar one' session withholds help until the answer is in,
         so that attempt is genuinely independent. */
      if (ses.meta.independentOnly && !a.submitted) {
        footer.appendChild(U.el('span.badge.badge-muted', { text: t('q.independentOnly') }));
        return;
      }

      var hints = question.hints || [];
      a.hintHistory = a.hintHistory || [];

      if (!a.submitted) {
        footer.appendChild(U.el('button.btn.btn-sm', {
          type: 'button', text: t('q.hint'),
          onclick: function () {
            JTS.AI.ask(payloadFor(question, a, 'hint')).then(function (r) {
              a.hintHistory.push(r.text);
              raiseHelp(a, 'hint');
              S.save();
              var hm;
              /* The answer is never in the hint; it is one deliberate click
                 further, and that click costs the attempt its independence. */
              hm = ui.modal({
                title: t('q.hint') + ' ' + a.hintHistory.length + '/' + Math.max(1, hints.length),
                content: U.el('div.stack', null, [
                  U.el('p', { text: r.text }),
                  r.warning ? U.el('div.notice.notice-warn.small', { text: t('ai.fellBack') }) : null
                ]),
                actions: [
                  U.el('button.btn', {
                    type: 'button', text: t('common.close'),
                    onclick: function () { hm.close(); }
                  }),
                  U.el('button.btn.btn-primary', {
                    type: 'button', text: t('ai.showFull'),
                    onclick: function () {
                      raiseHelp(a, 'full'); S.save();
                      hm.close();
                      refresh();
                      openPanel('explanation', ses, question, a, refresh);
                    }
                  })
                ]
              });
              refresh();
            });
          }
        }));
      }

      footer.appendChild(U.el('button.btn.btn-sm', {
        type: 'button', text: t('q.askAi'),
        onclick: function () { openPanel('ai', ses, question, a, refresh); }
      }));

      footer.appendChild(U.el('button.btn.btn-sm', {
        type: 'button', text: t('q.explanation'),
        onclick: function () {
          /* Reading the explanation before answering is what disqualifies the
             attempt from counting as independent work. */
          if (!a.submitted) { raiseHelp(a, 'explanation'); S.save(); refresh(); }
          openPanel('explanation', ses, question, a, refresh);
        }
      }));

      footer.appendChild(U.el('button.btn.btn-sm', {
        type: 'button', text: t('q.remix'), title: t('q.solveSimilar'),
        onclick: function () { startSimilar(ses, question); }
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
    startSimilar: startSimilar,
    ERROR_TYPES: ERROR_TYPES
  };
})();
