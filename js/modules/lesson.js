/* ==========================================================================
   Screen: one class of the course (#/materials/lesson?code=C1)

   A class page is what a teacher puts on the screen at the front of the
   room, in the order the class runs:

   1. the written lesson — the method, the worked examples and the traps,
      from the school's course (js/data/programme-teach.js);
   2. for a Math class, Desmos right under it, because every Math lesson has
      a Desmos part and the calculator is the one the exam builds in;
   3. a whiteboard, the class's own, saved in this browser;
   4. the practice set, when the class has one.

   The practice questions are JTS's own, written for the class. They are NOT
   Bluebook items and never will be: those are College Board's, reproducing
   them is an infringement, and a student who prepares on a leaked live form
   is treated as having cheated and loses the score. Official practice is done
   in Bluebook itself, which this page links to instead.

   The set runs through the ordinary study session — explanations, error
   classification, the error log — because practice that does not feed the
   error log teaches nothing the next class can use.
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

  /** Desmos, loaded on request: an iframe nobody asked for costs every visit. */
  function desmosBlock() {
    var slot = U.el('div.stack-sm.lesson-desmos', { id: 'lesson-desmos' });
    var mount = U.el('button.btn.btn-primary.btn-sm', {
      type: 'button', text: t('lesson.desmosLoad'),
      onclick: function () {
        mount.remove();
        slot.insertBefore(U.el('iframe.desmos-embed', {
          src: JTS.config.desmosUrl, title: t('desmos.title'),
          loading: 'lazy', referrerpolicy: 'no-referrer'
        }), links);
      }
    });
    var links = U.el('div.row.row-wrap', null, [
      mount,
      U.el('a.btn.btn-sm.btn-ghost', {
        href: JTS.config.desmosUrl, target: '_blank', rel: 'noopener', text: t('desmos.openTab')
      }),
      U.el('a.btn.btn-sm.btn-ghost', { href: '#/desmos-guide', text: t('desmos.title') })
    ]);
    slot.appendChild(U.el('div.row-between.row-wrap', null, [
      U.el('div.eyebrow', { text: t('lesson.desmosTitle') })
    ]));
    slot.appendChild(U.el('p.small.muted', { text: t('lesson.desmosLead') }));
    slot.appendChild(links);
    return slot;
  }

  JTS.router.register('#/materials/lesson', {
    title: 'nav.materials',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var code = currentCode();
      var lesson = code && P.byCode(code);
      var screen = U.el('div.container.screen.stack');
      root.appendChild(screen);

      if (!lesson) {
        screen.appendChild(ui.empty(t('lesson.unknown'), null,
          U.el('a.btn.btn-primary', { href: backHref(), text: t('lesson.back') })));
        return;
      }

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

      screen.appendChild(U.el('a.small', { href: backHref(), text: '← ' + t('lesson.back') }));

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
      if (section === 'math') written.appendChild(desmosBlock());
      screen.appendChild(written);

      /* ------------------------------------------------------ whiteboard */
      screen.appendChild(U.el('div.card.stack-sm', { id: 'lesson-board' }, [
        U.el('div.row-between.row-wrap', null, [
          U.el('div.eyebrow', { text: t('wb.title') }),
          U.el('span.xsmall.muted', { text: t('wb.lead') })
        ]),
        JTS.whiteboard.create(code)
      ]));

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
        practice.appendChild(U.el('div.row.row-wrap', null, [
          U.el('a.btn', {
            href: JTS.config.bluebookUrl, target: '_blank', rel: 'noopener', text: t('lesson.bluebook')
          })
        ]));
      } else {
        if (rec.done) practice.appendChild(ui.bar(rec.done, rec.total, 'bar-ok'));
        practice.appendChild(U.el('div.row.row-wrap', null, [
          U.el('button.btn.btn-primary.btn-lg', {
            type: 'button',
            text: rec.done ? t('lesson.again') : t('lesson.start'),
            onclick: function () { startAt(0); }
          }),
          U.el('a.btn', {
            href: JTS.config.bluebookUrl, target: '_blank', rel: 'noopener', text: t('lesson.bluebook')
          })
        ]));
        practice.appendChild(U.el('p.small.muted', { text: t('lesson.easyToHard', { n: ids.length }) }));
        practice.appendChild(U.el('p.xsmall.muted', { text: t('lesson.ownQuestions') }));
      }
      screen.appendChild(practice);

      /* ------------------------------------- the class before and after */
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
    }
  });
})();
