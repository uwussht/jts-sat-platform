/* ==========================================================================
   Screen: Desmos guide (#/desmos-guide)

   Each lesson is its heading, a live calculator, the video and the exercises
   to practise — no written walkthrough; the video is the lesson. The
   calculator is mounted when a section is first opened rather than all of
   them at once — an iframe that nobody has scrolled to is seconds of
   somebody's connection spent on nothing.

   A section's exercises are links listed in js/data/desmos-guide.js as
   `exercises: [{ title, url }]`; until they are added the heading says so.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* The order is the data file's order, and only the data file's. It used to
     be restated here as a literal list, which meant moving a section in
     js/data/desmos-guide.js changed nothing on screen — two sources of truth,
     and the one being edited was the one that lost. */
  function sections() { return JTS.data.desmosGuide || []; }

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

  function videoSlot(url, credit) {
    if (url) {
      var frame = U.el('div.video-wrap', null, [
        U.el('div.video-slot.has-video', null, [U.el('iframe', {
          src: url, title: t('desmos.title'),
          allowfullscreen: true, loading: 'lazy'
        })])
      ]);
      if (!credit) return frame;
      /* Someone else's screencast is said to be someone else's, by name and
         with a link. The slot was built for JTS's own videos, and an embed with
         no byline reads as one. */
      return U.el('div.stack-sm', null, [
        frame,
        U.el('p.xsmall.muted', { style: 'margin:0' }, [
          U.el('span', { text: t('desmos.videoCredit') + ' ' }),
          U.el('a', { href: credit.url, target: '_blank', rel: 'noopener noreferrer',
                      text: credit.name })
        ])
      ]);
    }
    /* An empty slot says what it is waiting for rather than pretending the
       video is coming; the URL goes in js/data/desmos-guide.js. */
    return U.el('div.video-slot', null, [
      U.el('span.xsmall.muted', { text: t('desmos.videoSlot') })
    ]);
  }

  /* ---------------------------------------------------------------- section */

  function sectionAcc(sec, rerender) {
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
      /* Sections that follow the video series carry their number, so the order
         on screen is visibly an order and not an arrangement. Sections that are
         JTS's own carry none and sit after them. */
      sec.lesson ? U.el('span.badge.badge-muted.dg-lesson', {
        text: t('desmos.lesson', { n: sec.lesson })
      }) : null,
      U.el('b', { text: t('desmos.section.' + sec.id) })
    ]);

    function fill() {
      calculator(body);
      body.appendChild(videoSlot(sec.video, sec.videoCredit));
      body.appendChild(exercisesBlock(sec));
    }

    return U.el('div.acc', null, [head, body]);
  }

  /** "Practice these exercises": the links for this lesson, or a line saying
      they are still to come. */
  function exercisesBlock(sec) {
    var list = sec.exercises || [];
    var box = U.el('div.stack-sm.dg-exercises', null, [
      U.el('h3.h3', { text: t('desmos.exercises') })
    ]);
    if (!list.length) {
      box.appendChild(U.el('p.small.muted', { text: t('desmos.exercisesSoon') }));
      return box;
    }
    var ol = U.el('ol.stack-sm.list-num');
    list.forEach(function (ex) {
      ol.appendChild(U.el('li', null, [
        U.el('a', { href: ex.url, target: '_blank', rel: 'noopener noreferrer', text: ex.title || ex.url })
      ]));
    });
    box.appendChild(ol);
    return box;
  }

  /* ----------------------------------------------------------------- screen */

  JTS.router.register('#/desmos-guide', {
    title: 'desmos.title',
    render: function (root) {
      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);

      function rerender() { U.clear(screen); paint(); }

      function paint() {
        screen.appendChild(U.el('div.row.row-wrap', { style: 'justify-content:flex-end' }, [
          U.el('a.btn.btn-sm', {
            href: JTS.config.desmosUrl, target: '_blank', rel: 'noopener',
            text: t('desmos.openTab')
          })
        ]));

        var list = U.el('div.stack-sm');
        sections().forEach(function (sec) {
          list.appendChild(sectionAcc(sec, rerender));
        });
        screen.appendChild(list);
      }

      paint();
    }
  });
})();
