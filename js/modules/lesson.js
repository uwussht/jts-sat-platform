/* ==========================================================================
   Screen: one unit of the course (#/materials/lesson?code=U1)

   A unit page is what a teacher puts on the screen at the front of the
   room. It fills the window and runs in the order the unit does: the
   written lesson — the method, the worked examples and the traps, from the
   school's course (js/data/programme-teach.js) — then the practice set, when
   the unit has one. The side panel keeps the lesson's parts in view and
   opens the tools in windows of their own: the unit's whiteboard, saved in
   this browser, and on a Math unit Desmos.

   The practice questions are JTS's own, written for the unit. They are NOT
   Bluebook items and never will be: those are College Board's, reproducing
   them is an infringement, and a student who prepares on a leaked live form
   is treated as having cheated and loses the score.

   The set runs through the ordinary study session — explanations, error
   classification, the error log — because practice that does not feed the
   error log teaches nothing the next unit can use.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;
  var P = JTS.data.programme;

  function pick(obj) { return JTS.i18n.pick(obj, S.settings().uiLang); }

  function currentCode() {
    var q = JTS.router.current && JTS.router.current.query;
    return (q && q.code) || null;
  }

  function backHref() { return '#/materials'; }

  /**
   * The written lesson, one part at a time, the way it is taught: the
   * opening paragraph, a row of numbered steps for the parts, then the part
   * on screen with Previous / Next. The last part leads on to the practice.
   * The part a student reached is kept per unit in this browser, and the
   * arrow keys turn the parts for a teacher at the board.
   */
  function partsViewer(teach, code) {
    var parts = teach.parts || [];
    var KEY = 'jts.unitPart.' + code;
    var at = 0;
    try { at = U.clamp(Number(window.localStorage.getItem(KEY)) || 0, 0, Math.max(0, parts.length - 1)); } catch (e) { /* first visit */ }

    var el = U.el('div.lw-parts');
    if (teach.lead) el.appendChild(U.el('div.lesson-written.lw-lead', { html: teach.lead }));
    var steps = U.el('ol.lw-steps', { 'aria-label': t('lesson.parts') });
    var stage = U.el('section.lw-part', { 'aria-live': 'polite' });
    el.appendChild(steps);
    el.appendChild(stage);

    function short(title) { return title.replace(/^Part \d+\s*·\s*/, ''); }

    function show(i, focus) {
      at = U.clamp(i, 0, parts.length - 1);
      try { window.localStorage.setItem(KEY, String(at)); } catch (e) { /* not kept */ }
      U.clear(steps);
      parts.forEach(function (p, k) {
        steps.appendChild(U.el('li', null, [U.el('button.lw-step' + (k === at ? '.is-on' : k < at ? '.is-done' : ''), {
          type: 'button', 'aria-current': k === at ? 'step' : null,
          onclick: function () { show(k, true); }
        }, [U.el('span.lw-step-n', { text: k < at ? '✓' : String(k + 1) }), U.el('span.lw-step-t', { text: short(p.title) })])]));
      });

      var p = parts[at];
      U.clear(stage);
      stage.appendChild(U.el('div.lw-part-head', null, [
        U.el('div.lw-part-n', { text: t('lesson.partOf', { n: at + 1, total: parts.length }) }),
        U.el('h3.lw-part-title', { text: short(p.title) }),
        p.mins ? U.el('span.lw-part-mins', { text: '⏱ ' + p.mins }) : null
      ]));
      stage.appendChild(U.el('div.lesson-written', { html: p.html }));

      var prev = at > 0 ? U.el('button.btn', {
        type: 'button', text: '← ' + short(parts[at - 1].title),
        onclick: function () { show(at - 1, true); }
      }) : U.el('span');
      var next = at < parts.length - 1
        ? U.el('button.btn.btn-primary', {
            type: 'button', text: t('lesson.nextPart', { title: short(parts[at + 1].title) }) + ' →',
            onclick: function () { show(at + 1, true); }
          })
        : U.el('button.btn.btn-primary', {
            type: 'button', text: t('lesson.toPractice') + ' ↓',
            onclick: function () {
              var d = document.getElementById('lesson-drill');
              if (d) d.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          });
      stage.appendChild(U.el('div.lw-part-nav', null, [prev, next]));
      if (focus) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function onKey(e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var tg = e.target;
      if (tg.closest && tg.closest('input, textarea, select, [contenteditable], .wb-window, #desmos-panel, .modal')) return;
      e.preventDefault();
      show(at + (e.key === 'ArrowRight' ? 1 : -1), true);
    }
    document.addEventListener('keydown', onKey);

    if (parts.length) show(at, false);
    return { el: el, cleanup: function () { document.removeEventListener('keydown', onKey); } };
  }

  /* Line icons for the tool rail, drawn in the button's text colour. */
  var ICON = {
    board: '<path d="M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3z"/><path d="M13.5 8.5l3 3"/>',
    desmos: '<path d="M3 21h18"/><path d="M3 21V3"/><path d="M5 18c3-9 6-12 9-9s4 4 6-5"/>',
    full: '<path d="M4 9V4h5"/><path d="M20 9V4h-5"/><path d="M4 15v5h5"/><path d="M20 15v5h-5"/>',
    exit: '<path d="M9 4v5H4"/><path d="M15 4v5h5"/><path d="M9 20v-5H4"/><path d="M15 20v-5h5"/>'
  };
  function iconBtn() {
    var b = U.el('button.lesson-tool', { type: 'button' });
    b.setIcon = function (name, label) {
      b.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" ' +
        'stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[name] + '</svg>';
      b.setAttribute('aria-label', label);
      b.title = label;
    };
    return b;
  }

  /**
   * The tool rail: small icon buttons beside the lesson. The whiteboard and
   * Desmos open as windows of their own, moved by their title bars and
   * resized from their corners, over the lesson, because a teacher reaching
   * for them mid-explanation wants them beside the text, not instead of it.
   */
  function sidePanel(written, board, isMath) {
    var side = U.el('aside.lesson-side', { 'aria-label': t('side.tools') });
    side.cleanup = [];

    var wbBtn = iconBtn();
    function syncBoard() {
      wbBtn.setIcon('board', t(board.isWindowOpen() ? 'side.boardClose' : 'side.board'));
      wbBtn.setAttribute('aria-pressed', String(board.isWindowOpen()));
    }
    wbBtn.addEventListener('click', function () {
      if (board.isWindowOpen()) board.closeWindow(); else board.openWindow();
      syncBoard();
    });
    /* The window's own Close button closes it without this rail, so the
       board says when its window opens or closes. */
    board.addEventListener('wb:window', syncBoard);
    syncBoard();
    side.appendChild(wbBtn);

    if (isMath) {
      var calc = iconBtn();
      var sync = function () {
        calc.setIcon('desmos', t(JTS.desmos.isOpen() ? 'side.desmosClose' : 'side.desmos'));
        calc.setAttribute('aria-pressed', String(JTS.desmos.isOpen()));
      };
      calc.addEventListener('click', function () {
        if (JTS.desmos.isOpen()) JTS.desmos.hide(); else JTS.desmos.showFloating();
        sync();
      });
      /* Desmos has its own Close button; watch the panel rather than guess. */
      var panel = document.getElementById('desmos-panel');
      if (panel && window.MutationObserver) {
        var mo = new MutationObserver(sync);
        mo.observe(panel, { attributes: true, attributeFilter: ['class'] });
        side.cleanup.push(function () { mo.disconnect(); });
      }
      sync();
      side.appendChild(calc);
    }

    /* The unit already fills the window; this takes it to the whole screen,
       for a projector. Esc or the same button brings it back. */
    var fsBtn = iconBtn();
    function syncFs() {
      var on = !!document.fullscreenElement;
      fsBtn.setIcon(on ? 'exit' : 'full', t(on ? 'side.exitFullscreen' : 'side.fullscreen'));
    }
    fsBtn.addEventListener('click', function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () {});
    });
    document.addEventListener('fullscreenchange', syncFs);
    side.cleanup.push(function () { document.removeEventListener('fullscreenchange', syncFs); });
    syncFs();
    side.appendChild(fsBtn);
    return side;
  }

  JTS.router.register('#/materials/lesson', {
    title: 'nav.materials',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var code = currentCode();
      var lesson = code && P.byCode(code);
      if (!lesson) {
        var none = U.el('div.container.screen.stack');
        root.appendChild(none);
        none.appendChild(ui.empty(t('lesson.unknown'), null,
          U.el('a.btn.btn-primary', { href: backHref(), text: t('lesson.back') })));
        return;
      }

      /* A unit takes the whole window: the app's menu and top bar step aside
         while it is open (body.unit-focus), and come back the moment the
         teacher leaves it. The unit on the left, the side panel on the
         right: the lesson's parts and the tools a teacher reaches for
         mid-lesson, one press away wherever the page is scrolled to. */
      document.body.classList.add('unit-focus');
      var page = U.el('div.container.container-wide.screen.lesson-page');
      var screen = U.el('div.stack.lesson-main');
      page.appendChild(screen);
      root.appendChild(page);

      var unit = P.unitById(lesson.unit);
      var section = P.sectionOf(lesson);
      var pw = JTS.programme.perWeek();
      var n = P.numberOn(lesson, pw);
      var teach = JTS.programme.teachOf(code);
      var drill = JTS.programme.drillOf(code) || {};
      var ids = JTS.programme.lessonSet(code);
      var rec = JTS.programme.lessonRecord(code, ids);
      var week = n ? Math.ceil(n / pw) : null;

      function startAt(i) {
        var ses = JTS.session.start({
          kind: 'practice', mode: 'study',
          title: pick(lesson.t),
          questionIds: ids,
          softTimer: true,
          returnHash: '#/materials/lesson?code=' + code,
          finishHash: '#/materials/lesson?code=' + code,
          meta: { lessonCode: code }
        });
        if (i > 0 && ses) {
          S.update(function (st) { st.activeSession.index = i; });
          JTS.router.render();
        }
      }

      screen.appendChild(U.el('div.row.row-wrap', null, [
        U.el('a.btn.btn-sm', { href: backHref(), text: '← ' + t('lesson.back') })
      ]));

      /* ------------------------------------------------------------ head */
      screen.appendChild(U.el('div.card.stack-sm', { id: 'lesson-head' }, [
        U.el('div.row.row-wrap', null, [
          JTS.programme.codeChip(lesson),
          n ? U.el('span.badge.badge-muted', { text: t('prog.lessonNo', { n: n }) }) : null,
          week ? U.el('span.badge.badge-muted', { text: t('prog.weekNo', { n: week }) }) : null,
          U.el('span.badge.badge-muted', {
            text: section === 'math' ? t('common.math') : section === 'rw' ? t('common.rw') : pick(unit.name)
          }),
          unit && unit.kind !== 'hard' ? U.el('span.badge.badge-muted', { text: pick(unit.name) }) : null,
          drill.hard ? U.el('span.badge.badge-warn', { text: t('lesson.hard') }) : null
        ]),
        U.el('div.h2', { text: pick(lesson.t) }),
        /* A Challenge class mixes every topic, so it has no summary. */
        lesson.skills ? U.el('div.stack-sm', null, [
          U.el('div.stat-label', { text: t('lesson.mustDo') }),
          U.el('p', { text: pick(lesson.skills) })
        ]) : null
      ]));

      /* --------------------------------------------------- the lesson */
      var written = U.el('div.card.stack-sm', { id: 'lesson-teach' });
      written.appendChild(U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('lesson.explanation') }),
        teach && S.settings().uiLang !== 'en'
          ? U.el('span.badge.badge-muted', { text: t('lesson.englishOnly') })
          : null
      ]));
      var viewer = null;
      if (teach) {
        /* The lesson text is the school's own course document, shipped with
           the app; it is trusted markup, not anything a user typed. */
        viewer = partsViewer(teach, code);
        written.appendChild(viewer.el);
      } else if (unit && unit.kind === 'hard') {
        written.appendChild(U.el('p', { text: pick(unit.lead) }));
        written.appendChild(U.el('div.notice', { text: t('lesson.challengeNote') }));
      } else {
        written.appendChild(U.el('div.notice', { text: t('lesson.textSoon') }));
      }
      screen.appendChild(written);

      /* The whiteboard has no place on the page: it lives in its own window,
         opened from the side panel, so the lesson runs straight from the
         explanation to the practice. */
      var board = JTS.whiteboard.create(code);

      /* -------------------------------------------------------- practice */
      var practice = U.el('div.card.stack-sm', { id: 'lesson-drill' });
      practice.appendChild(U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('lesson.practice') }),
        rec.done
          ? U.el('span.badge.badge-muted', {
              text: t('lesson.recordShort', { done: rec.done, total: rec.total, right: rec.right })
            })
          : null
      ]));
      if (!ids.length) {
        practice.appendChild(U.el('div.notice', { text: t('lesson.practiceSoon') }));
      } else {
        if (rec.done) practice.appendChild(ui.bar(rec.done, rec.total, 'bar-ok'));
        /* Back from the questions to the explanation: the set is still open,
           so the button picks it up at the question that was left. */
        var open = JTS.session.current();
        var inSet = open && open.meta && open.meta.lessonCode === code ? open : null;
        practice.appendChild(U.el('div.row.row-wrap', null, inSet ? [
          U.el('a.btn.btn-primary.btn-lg', {
            href: '#/question',
            text: t('lesson.continue', { n: inSet.index + 1, total: inSet.questionIds.length }) + ' →'
          })
        ] : [
          U.el('button.btn.btn-primary.btn-lg', {
            type: 'button',
            text: rec.done ? t('lesson.again') : t('lesson.start'),
            onclick: function () { startAt(0); }
          })
        ]));
        practice.appendChild(U.el('p.small.muted', { text: t('lesson.easyToHard', { n: ids.length }) }));
        practice.appendChild(U.el('p.xsmall.muted', { text: t('lesson.ownQuestions') }));
      }
      screen.appendChild(practice);

      /* -------------------------------------- the unit before and after */
      var all = P.order(pw).map(function (s) { return s.lessons[0]; });
      var here = -1;
      all.forEach(function (l, i) { if (l.code === code) here = i; });
      var nav = U.el('div.row-between.row-wrap', { id: 'lesson-nav' });
      nav.appendChild(here > 0
        ? U.el('a.btn.btn-sm', {
            href: '#/materials/lesson?code=' + all[here - 1].code,
            text: '← ' + all[here - 1].code + ' · ' + pick(all[here - 1].t)
          })
        : U.el('span'));
      nav.appendChild(here >= 0 && here < all.length - 1
        ? U.el('a.btn.btn-sm', {
            href: '#/materials/lesson?code=' + all[here + 1].code,
            text: all[here + 1].code + ' · ' + pick(all[here + 1].t) + ' →'
          })
        : U.el('span'));
      screen.appendChild(nav);

      var side = sidePanel(written, board, section === 'math');
      page.appendChild(side);

      /* Leaving the unit: the app's chrome comes back, the board's window
         goes back into its page (which is about to be cleared), and the
         screen leaves full screen. */
      return function () {
        document.body.classList.remove('unit-focus');
        side.cleanup.forEach(function (f) { f(); });
        if (viewer) viewer.cleanup();
        board.closeWindow();
        if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
      };
    }
  });
})();
