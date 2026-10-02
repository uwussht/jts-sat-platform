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
   * The side panel: the tools first, then the lesson's parts as a list that
   * scrolls the page to them and marks the one being read. The whiteboard and
   * Desmos open as windows of their own — moved by their title bars and
   * resized from their corners — over the lesson, because a teacher reaching
   * for them mid-explanation wants them beside the text, at whatever size
   * the moment needs, not instead of it.
   */
  function sidePanel(written, board, isMath) {
    var side = U.el('aside.lesson-side', { 'aria-label': t('side.title') });

    var tools = U.el('div.row.row-wrap.lesson-side-tools');
    var wbBtn = U.el('button.btn.btn-primary', { type: 'button', title: t('side.boardHint') });
    function syncBoard() {
      wbBtn.textContent = '✏️ ' + t(board.isWindowOpen() ? 'side.boardClose' : 'side.board');
      wbBtn.setAttribute('aria-pressed', String(board.isWindowOpen()));
    }
    wbBtn.addEventListener('click', function () {
      if (board.isWindowOpen()) board.closeWindow(); else board.openWindow();
      syncBoard();
    });
    /* The window's own "put back" button closes it without this panel, so
       the board says when its window opens or closes. */
    board.addEventListener('wb:window', syncBoard);
    side.cleanup = [];
    syncBoard();
    tools.appendChild(wbBtn);

    if (isMath) {
      var calc = U.el('button.btn', { type: 'button' });
      var sync = function () {
        calc.textContent = 'ƒ ' + t(JTS.desmos.isOpen() ? 'side.desmosClose' : 'side.desmos');
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
      tools.appendChild(calc);
    }

    /* The unit already fills the window; this takes it to the whole screen,
       for a projector. Esc or the same button brings it back. */
    var fsBtn = U.el('button.btn', { type: 'button' });
    function syncFs() {
      fsBtn.textContent = '⛶ ' + t(document.fullscreenElement ? 'side.exitFullscreen' : 'side.fullscreen');
    }
    fsBtn.addEventListener('click', function () {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(function () {});
    });
    document.addEventListener('fullscreenchange', syncFs);
    side.cleanup.push(function () { document.removeEventListener('fullscreenchange', syncFs); });
    syncFs();
    tools.appendChild(fsBtn);
    side.appendChild(U.el('div.card.card-sm.stack-sm', null, [
      U.el('div.eyebrow', { text: t('side.tools') }), tools
    ]));

    /* The parts: each heading of the written lesson, then the practice set,
       which is a part of the unit too. */
    var targets = [];
    U.$$('.lesson-written h4', written).forEach(function (h, i) {
      h.id = 'part-' + (i + 1);
      var label = h.cloneNode(true);
      U.$$('.lw-mins', label).forEach(function (x) { x.remove(); });
      /* The list numbers the parts itself, so "Part 3 · " is not repeated. */
      targets.push({ el: h, text: label.textContent.trim().replace(/^Part \d+\s*·\s*/, '') });
    });
    targets.push({ id: 'lesson-drill', text: t('side.practice') });

    var list = U.el('ol.lesson-parts');
    var items = targets.map(function (tg) {
      var b = U.el('button.lesson-part', {
        type: 'button', text: tg.text,
        onclick: function () {
          var el = tg.el || document.getElementById(tg.id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      list.appendChild(U.el('li', null, [b]));
      return b;
    });
    side.appendChild(U.el('div.card.card-sm.stack-sm.lesson-side-parts', null, [
      U.el('div.eyebrow', { text: t('side.title') }), list
    ]));

    /* Mark the part on screen. The page is torn down on navigation, and the
       observer goes with the nodes it watches. */
    if (window.IntersectionObserver) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var k = -1;
          targets.forEach(function (tg, i) {
            if ((tg.el || document.getElementById(tg.id)) === e.target) k = i;
          });
          items.forEach(function (b, i) { b.setAttribute('aria-current', i === k ? 'true' : 'false'); });
        });
      }, { rootMargin: '-15% 0px -70% 0px' });
      setTimeout(function () {
        targets.forEach(function (tg) {
          var el = tg.el || document.getElementById(tg.id);
          if (el) io.observe(el);
        });
      }, 0);
    }
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
        U.el('div.stack-sm', null, [
          U.el('div.stat-label', { text: t('lesson.mustDo') }),
          U.el('p', { text: pick(lesson.skills) })
        ])
      ]));

      /* --------------------------------------------------- the lesson */
      var written = U.el('div.card.stack-sm', { id: 'lesson-teach' });
      written.appendChild(U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('lesson.explanation') }),
        teach && S.settings().uiLang !== 'en'
          ? U.el('span.badge.badge-muted', { text: t('lesson.englishOnly') })
          : null
      ]));
      if (teach) {
        /* The lesson text is the school's own course document, shipped with
           the app; it is trusted markup, not anything a user typed. */
        written.appendChild(U.el('div.lesson-written', { html: teach.lead + teach.html }));
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
        practice.appendChild(U.el('div.row.row-wrap', null, [
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
        board.closeWindow();
        if (document.fullscreenElement) document.exitFullscreen().catch(function () {});
      };
    }
  });
})();
