/* ==========================================================================
   The AI tutor, for students.

   One chat box, used in four places:
     - a practice question in study mode, once the answer has been checked
     - a finished mock's review, question by question
     - a lesson, about the part being read
     - the diagnostic report
   It is never built in exam, diagnostic-in-progress, daily-check or live mock
   mode: the callers only reach it after the answer is in, so in those modes
   it is absent from the DOM, like the hints and the explanation.

   The answer comes from the server (POST /api/ai/ask), which holds the key
   and the daily limit. Without the server — Live Server, file:// — or with no
   key set there, JTS.aiTutor.box() returns an empty placeholder and nothing
   appears. Nothing is sent until the student asks.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;

  var statusPromise = null;

  /** Is the tutor on for this student? Asked once per page load. */
  function status() {
    if (JTS.Auth.mode !== 'server' || !JTS.Auth.user) return Promise.resolve({ enabled: false });
    if (!statusPromise) {
      statusPromise = JTS.api('ai/status').then(function (r) {
        return r && r.ok ? r : { enabled: false };
      });
    }
    return statusPromise;
  }

  /** HTML from the bank or a lesson, as plain text: an inert parse. */
  function plain(html) {
    if (!html) return '';
    var doc = new DOMParser().parseFromString(String(html), 'text/html');
    Array.prototype.forEach.call(doc.querySelectorAll('img'), function (img) {
      img.replaceWith(doc.createTextNode(img.alt ? ' [figure: ' + img.alt + '] ' : ' [figure] '));
    });
    Array.prototype.forEach.call(doc.querySelectorAll('br, p, li, div, tr, h1, h2, h3, h4'), function (n) {
      n.appendChild(doc.createTextNode('\n'));
    });
    return (doc.body.textContent || '').replace(/[ \t]+/g, ' ').replace(/\n\s*\n\s*/g, '\n\n').trim();
  }

  /** What the tutor is told about a bank question, and the student's answer. */
  function questionContext(q, a) {
    var lang = S.settings().explainLang;
    var ctx = {
      section: q.section === 'math' ? 'Math' : 'Reading and Writing',
      skill: JTS.skills.name(q.skillId) || '',
      passage: plain(q.passage),
      question: plain(q.stem)
    };
    if (q.options) {
      ctx.choices = q.options.map(function (o, i) { return 'ABCD'[i] + ') ' + plain(o); }).join('\n');
    }
    ctx['correct answer'] = q.type === 'spr' ? q.answer.join(' or ') : q.answer;
    var picked = a && a.selected !== null && a.selected !== undefined && a.selected !== '' ? a.selected : null;
    ctx['student answer'] = picked === null ? 'no answer' : String(picked) + (a.correct ? ' (correct)' : ' (wrong)');
    var expl = plain(JTS.i18n.pick(q.explanation, lang));
    if (expl) ctx['official explanation'] = expl;
    if (q.distractors) {
      var why = Object.keys(q.distractors).map(function (k) {
        var d = plain(JTS.i18n.pick(q.distractors[k], lang));
        return d ? k + ') ' + d : '';
      }).filter(Boolean).join('\n');
      if (why) ctx['why the other choices are wrong'] = why;
    }
    return ctx;
  }

  function errorText(r) {
    var reason = r && r.reason;
    if (reason === 'limit') return t('ai.limit', { n: r.limit });
    if (reason === 'network') return t('ai.offline');
    if (reason === 'ai-declined') return t('ai.declined');
    if (reason === 'no-access') return t('ai.noAccess');
    return t('ai.failed');
  }

  /**
   * The chat box. opts:
   *   kind         'question' | 'lesson' | 'diagnostic'
   *   context      object of plain-text fields, or a function returning one
   *                (read when the student sends, so it follows the screen)
   *   suggestions  ready-made first questions, shown as buttons
   *   lead         one line under the title
   * Returns an element at once; it fills in only if the tutor is on.
   */
  function box(opts) {
    var host = U.el('div.ai-box-host');
    status().then(function (st) {
      if (!st.enabled) return;
      host.appendChild(build(opts, st));
    });
    return host;
  }

  function build(opts, st) {
    var turns = [];            // { role: 'user' | 'assistant', text }
    var busy = false;
    var used = st.used || 0, limit = st.limit || 0;

    var wrap = U.el('section.ai-box', { 'aria-label': t('ai.title') });
    var head = U.el('div.ai-head', null, [
      U.el('strong', { text: '✦ ' + t('ai.title') }),
      U.el('span.spacer')
    ]);
    var left = U.el('span.xsmall.muted');
    head.appendChild(left);
    wrap.appendChild(head);
    if (opts.lead) wrap.appendChild(U.el('p.small.muted', { text: opts.lead }));

    var log = U.el('div.ai-log', { 'aria-live': 'polite' });
    var chips = U.el('div.row.row-wrap.ai-chips');
    var input = U.el('textarea.input.ai-input', {
      rows: '2', maxlength: '1500', placeholder: t('ai.placeholder'), 'aria-label': t('ai.placeholder')
    });
    var send = U.el('button.btn.btn-primary.btn-sm', { type: 'button', text: t('ai.send') });
    var restart = U.el('button.btn.btn-sm', { type: 'button', text: t('ai.newChat'), hidden: true });
    wrap.appendChild(log);
    wrap.appendChild(chips);
    wrap.appendChild(input);
    wrap.appendChild(U.el('div.row.row-wrap', null, [send, restart, U.el('span.spacer'),
      U.el('span.xsmall.muted', { text: t('ai.disclaimer') })]));

    function showLeft() {
      left.textContent = limit ? t('ai.left', { n: Math.max(0, limit - used), total: limit }) : '';
    }

    function bubble(role, text, cls) {
      var b = U.el('div.ai-msg.ai-' + role + (cls ? '.' + cls : ''));
      String(text).split(/\n{2,}/).forEach(function (para) {
        var p = U.el('p');
        para.split('\n').forEach(function (line, i) {
          if (i) p.appendChild(U.el('br'));
          p.appendChild(document.createTextNode(line));
        });
        b.appendChild(p);
      });
      log.appendChild(b);
      b.scrollIntoView({ block: 'nearest' });
      return b;
    }

    function drawChips() {
      U.clear(chips);
      if (turns.length) return;
      (opts.suggestions || []).forEach(function (s) {
        chips.appendChild(U.el('button.chip', { type: 'button', text: s, onclick: function () { ask(s); } }));
      });
    }

    function setBusy(on) {
      busy = on;
      send.disabled = on || null;
      input.disabled = on || null;
      send.textContent = on ? t('ai.thinking') : t('ai.send');
    }

    function ask(text) {
      text = String(text || '').trim();
      if (!text || busy) return;
      if (turns.length >= 11) { bubble('note', t('ai.tooLong'), 'is-note'); return; }
      var context = typeof opts.context === 'function' ? opts.context() : opts.context;
      turns.push({ role: 'user', text: text });
      bubble('user', text);
      input.value = '';
      drawChips();
      setBusy(true);
      var wait = bubble('assistant', t('ai.thinking') + '…', 'is-wait');
      JTS.api('ai/ask', {
        kind: opts.kind,
        lang: S.settings().explainLang || JTS.i18n.lang,
        context: context,
        messages: turns
      }).then(function (r) {
        wait.remove();
        setBusy(false);
        if (!r || !r.ok) {
          turns.pop();              // the question can be sent again
          bubble('note', errorText(r), 'is-note');
          if (r && r.reason === 'limit') { used = r.limit; st.used = used; showLeft(); }
          return;
        }
        turns.push({ role: 'assistant', text: r.text });
        bubble('assistant', r.text + (r.cut ? '\n\n' + t('ai.cut') : ''));
        used = r.used; limit = r.limit;
        /* Boxes built later on this page start from the new count. */
        st.used = used; st.limit = limit;
        showLeft();
        restart.hidden = false;
        input.focus();
      });
    }

    send.addEventListener('click', function () { ask(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(input.value); }
      e.stopPropagation();       // the lesson's arrow keys and the question's shortcuts stay out
    });
    restart.addEventListener('click', function () {
      turns = [];
      U.clear(log);
      restart.hidden = true;
      drawChips();
    });

    showLeft();
    drawChips();
    return wrap;
  }

  /** The box for a bank question whose answer is already in. */
  function forQuestion(q, a) {
    var right = a && a.correct;
    return box({
      kind: 'question',
      context: function () { return questionContext(q, a); },
      lead: t('ai.questionLead'),
      suggestions: right
        ? [t('ai.s.faster'), t('ai.s.why')]
        : [t('ai.s.whereWrong'), t('ai.s.why'), t('ai.s.faster')]
    });
  }

  JTS.aiTutor = {
    status: status,
    box: box,
    forQuestion: forQuestion,
    plain: plain,
    questionContext: questionContext
  };
})();
