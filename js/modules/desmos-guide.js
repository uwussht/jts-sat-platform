/* ==========================================================================
   Screen: Desmos guide (#/desmos-guide)

   Seven sections, each with its own live calculator, plus six timed practice
   tasks. The calculator is mounted when a section is first opened rather than
   seven at once — an iframe that nobody has scrolled to is seven seconds of
   somebody's connection spent on nothing.

   The two tasks that are faster by hand are deliberate. A student who learns
   to reach for Desmos on every question has learned the wrong lesson.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var SECTION_ORDER = ['basics', 'graph', 'solve', 'tables', 'sat', 'shortcuts'];

  function progress() {
    var s = S.state();
    if (!s.desmosGuideProgress) s.desmosGuideProgress = {};
    return s.desmosGuideProgress;
  }

  function setLearned(id, on) {
    progress()[id] = on ? Date.now() : null;
    S.save();
  }

  function isLearned(id) { return !!progress()[id]; }

  /** All seven: the six content sections plus the practice-task section. */
  function allSectionIds() { return SECTION_ORDER.concat(['tasks']); }

  /* ------------------------------------------------------------- calculator */

  /**
   * One calculator per section, created on first open and never touched
   * again. Removing or reparenting an iframe reloads it; leaving it alone is
   * what keeps a student's work on screen while they read the steps.
   */
  function calculator(host) {
    var slot = U.el('div.stack-sm');
    var mounted = false;
    var mount = U.el('button.btn.btn-sm', {
      type: 'button', text: t('desmos.loadCalc'),
      onclick: function () {
        if (mounted) return;
        mounted = true;
        mount.remove();
        var frame = U.el('iframe.desmos-embed', {
          src: JTS.config.desmosUrl,
          title: t('desmos.title'),
          loading: 'lazy',
          referrerpolicy: 'no-referrer'
        });
        slot.appendChild(frame);
        /* A cross-origin iframe cannot be inspected, so the fallback is not a
           detection but a standing offer: if nothing appears, this link works. */
        slot.appendChild(U.el('div.xsmall.muted', { text: t('desmos.blocked') }));
      }
    });
    slot.appendChild(mount);
    slot.appendChild(U.el('a.btn.btn-sm.btn-ghost', {
      href: JTS.config.desmosUrl, target: '_blank', rel: 'noopener',
      text: t('desmos.openTab')
    }));
    host.appendChild(slot);
  }

  function tryItRow(exprs) {
    var row = U.el('div.row.row-wrap');
    (exprs || []).forEach(function (e) {
      row.appendChild(U.el('code.chip', {
        text: e,
        title: t('desmos.tryIt', { expr: e }),
        'aria-label': t('desmos.tryIt', { expr: e })
      }));
    });
    return row;
  }

  function videoSlot(url) {
    if (url) {
      return U.el('div.video-slot', null, [U.el('iframe', {
        src: url, title: t('desmos.title'), style: 'width:100%;height:100%;border:0',
        allowfullscreen: true, loading: 'lazy'
      })]);
    }
    /* An empty slot says what it is waiting for rather than pretending the
       video is coming; the URL goes in js/data/desmos-guide.js. */
    return U.el('div.video-slot', null, [
      U.el('span.xsmall.muted', { text: t('desmos.videoSlot') })
    ]);
  }

  /* ---------------------------------------------------------------- section */

  function sectionAcc(sec, rerender) {
    var lang = S.settings().explainLang;
    var learned = isLearned(sec.id);
    var body = U.el('div.acc-body', { hidden: true });
    var mounted = false;
    var caret = U.el('span.caret', { text: '❯' });

    var head = U.el('button.acc-head', {
      type: 'button', 'aria-expanded': 'false',
      onclick: function () {
        var open = body.hidden;
        body.hidden = !open;
        head.setAttribute('aria-expanded', String(open));
        caret.style.transform = open ? 'rotate(90deg)' : '';
        if (open && !mounted) { mounted = true; fill(); }
      }
    }, [
      caret,
      U.el('b', { text: t('desmos.section.' + sec.id) }),
      U.el('span.spacer'),
      learned ? U.el('span.badge.badge-ok', { text: t('desmos.learned') }) : null
    ]);

    function fill() {
      body.appendChild(U.el('p.small.muted', { text: JTS.i18n.pick(sec.lead, lang) }));
      var steps = U.el('ol.stack-sm', { style: 'padding-inline-start:20px' });
      JTS.i18n.pick(sec.steps, lang).forEach(function (line) {
        steps.appendChild(U.el('li.small', { html: line }));
      });
      body.appendChild(steps);
      body.appendChild(tryItRow(sec.tryIt));
      calculator(body);
      body.appendChild(videoSlot(sec.video));

      var cb = U.el('input', {
        type: 'checkbox', id: 'dg-' + sec.id,
        checked: isLearned(sec.id) || null
      });
      cb.addEventListener('change', function () {
        setLearned(sec.id, cb.checked);
        rerender();
      });
      body.appendChild(U.el('label.check', { for: 'dg-' + sec.id }, [
        cb, U.el('span', { text: t('desmos.markLearned') })
      ]));
    }

    return U.el('div.acc', null, [head, body]);
  }

  /* ------------------------------------------------------------------ tasks */

  function tasksAcc(rerender) {
    var lang = S.settings().explainLang;
    var body = U.el('div.acc-body', { hidden: true });
    var mounted = false;
    var caret = U.el('span.caret', { text: '❯' });
    var learned = isLearned('tasks');

    var head = U.el('button.acc-head', {
      type: 'button', 'aria-expanded': 'false',
      onclick: function () {
        var open = body.hidden;
        body.hidden = !open;
        head.setAttribute('aria-expanded', String(open));
        caret.style.transform = open ? 'rotate(90deg)' : '';
        if (open && !mounted) { mounted = true; fill(); }
      }
    }, [
      caret,
      U.el('b', { text: t('desmos.practiceTasks') }),
      U.el('span.spacer'),
      U.el('span.badge.badge-muted', { text: String((JTS.data.desmosTasks || []).length) }),
      learned ? U.el('span.badge.badge-ok', { text: t('desmos.learned') }) : null
    ]);

    function fill() {
      body.appendChild(U.el('p.small.muted', { text: t('desmos.tasksLead') }));
      (JTS.data.desmosTasks || []).forEach(function (task, i) {
        var faster = task.withSec < task.withoutSec;
        body.appendChild(U.el('div.card.card-sm.card-flat.stack-sm', null, [
          U.el('div.row-between.row-wrap', null, [
            U.el('b', { text: (i + 1) + '. ' + JTS.i18n.pick(task.prompt, lang) }),
            U.el('span.badge.badge-' + (faster ? 'ok' : 'warn'), {
              /* The label is the honest verdict for this task, not a slogan
                 about the calculator in general. */
              text: t(faster ? 'desmos.fasterWith' : 'desmos.fasterByHand')
            })
          ]),
          U.el('div.row.row-wrap', null, [
            U.el('span.badge.badge-muted', { text: t('desmos.withoutDesmos', { a: task.withoutSec + 's' }) }),
            U.el('span.badge.badge-muted', { text: t('desmos.withDesmos', { b: task.withSec + 's' }) })
          ]),
          tryItRow(task.expr),
          U.el('p.xsmall.muted', { text: JTS.i18n.pick(task.note, lang) })
        ]));
      });
      calculator(body);

      var cb = U.el('input', { type: 'checkbox', id: 'dg-tasks', checked: isLearned('tasks') || null });
      cb.addEventListener('change', function () { setLearned('tasks', cb.checked); rerender(); });
      body.appendChild(U.el('label.check', { for: 'dg-tasks' }, [
        cb, U.el('span', { text: t('desmos.markLearned') })
      ]));
    }

    return U.el('div.acc', null, [head, body]);
  }

  /* ----------------------------------------------------------------- screen */

  JTS.router.register('#/desmos-guide', {
    title: 'desmos.title',
    render: function (root) {
      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);

      function rerender() { U.clear(screen); paint(); }

      function paint() {
        var ids = allSectionIds();
        var done = ids.filter(isLearned).length;

        screen.appendChild(U.el('div.stack-sm', null, [
          U.el('h1.h1', { text: t('desmos.title') }),
          U.el('p.muted', { text: t('desmos.lead') }),
          U.el('div.row-between.row-wrap', null, [
            U.el('span.small.muted', { text: t('desmos.progress', { done: done, total: ids.length }) }),
            U.el('a.btn.btn-sm', {
              href: JTS.config.desmosUrl, target: '_blank', rel: 'noopener',
              text: t('desmos.openTab')
            })
          ]),
          ui.bar(done, ids.length)
        ]));

        var list = U.el('div.stack-sm');
        SECTION_ORDER.forEach(function (id) {
          var sec = (JTS.data.desmosGuide || []).filter(function (s) { return s.id === id; })[0];
          if (sec) list.appendChild(sectionAcc(sec, rerender));
        });
        list.appendChild(tasksAcc(rerender));
        screen.appendChild(list);
      }

      paint();
    }
  });
})();
