/* ==========================================================================
   Screen: one lesson of the course (#/materials/lesson?code=V1.1)

   What a student gets when they press a lesson inside a unit: the rule, the
   trap the test sets around it, what they have to be able to do, and ten
   questions on exactly that.

   The ten are JTS's own, from the platform's bank, picked by the skills the
   lesson drills. They are NOT Bluebook items and never will be: those are
   College Board's, reproducing them is an infringement, and a student who
   prepares on a leaked live form is treated as having cheated and loses the
   score. Official practice is done in Bluebook itself, which this page links
   to instead.

   The set runs through the ordinary study session — hints, explanations,
   error classification, the error log — because a drill that does not feed
   the error log teaches nothing the next lesson can use.
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
      var pw = JTS.programme.perWeek();
      var n = P.numberOn(lesson, pw);
      var teach = JTS.programme.teachOf(code);
      var drill = JTS.programme.drillOf(code) || {};
      var ids = JTS.programme.lessonSet(code);
      var rec = JTS.programme.lessonRecord(ids);

      screen.appendChild(U.el('a.small', { href: backHref(), text: '← ' + t('lesson.back') }));

      /* ------------------------------------------------------------ head */
      screen.appendChild(U.el('div.card.stack-sm', { id: 'lesson-head' }, [
        U.el('div.row.row-wrap', null, [
          JTS.programme.codeChip(lesson),
          n ? U.el('span.badge.badge-muted', { text: t('prog.lessonNo', { n: n }) }) : null,
          unit ? U.el('span.badge.badge-muted', {
            text: unit.kind === 'unit' ? t('prog.unitNo', { n: unit.n, name: pick(unit.name) }) : pick(unit.name)
          }) : null,
          drill.hard ? U.el('span.badge.badge-warn', { text: t('lesson.hard') }) : null
        ]),
        U.el('div.h2', { text: pick(lesson.t) }),
        U.el('div.stack-sm', null, [
          U.el('div.stat-label', { text: t('lesson.mustDo') }),
          U.el('p', { text: pick(lesson.skills) })
        ])
      ]));

      /* ----------------------------------------------------- explanation */
      if (teach) {
        var body = U.el('div.stack-sm');
        body.appendChild(U.el('div.lesson-rule', null, [
          U.el('div.stat-label', { text: t('lesson.rule') }),
          U.el('p', { text: pick(teach.rule) })
        ]));
        if (teach.trap) {
          body.appendChild(U.el('div.lesson-trap', null, [
            U.el('div.stat-label', { text: t('lesson.trap') }),
            U.el('p', { text: pick(teach.trap) })
          ]));
        }
        screen.appendChild(U.el('div.card.stack-sm', { id: 'lesson-teach' }, [
          U.el('div.eyebrow', { text: t('lesson.explanation') }), body
        ]));
      }

      /* Desmos has a guide of its own; a lesson about it should send you
         there rather than restate it badly. */
      if (drill.guide) {
        screen.appendChild(U.el('div.notice.row-between.row-wrap', null, [
          U.el('span', { text: t('lesson.seeGuide') }),
          U.el('a.btn.btn-sm', { href: drill.guide, text: t('desmos.title') })
        ]));
      }

      /* ------------------------------------------------------- the drill */
      var exercises = U.el('div.card.stack-sm', { id: 'lesson-drill' });
      exercises.appendChild(U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('lesson.exercises', { n: ids.length }) }),
        rec.done
          ? U.el('span.badge.badge-muted', {
              text: t('lesson.recordShort', { done: rec.done, total: rec.total, right: rec.right })
            })
          : null
      ]));
      exercises.appendChild(U.el('p.small.muted', {
        text: drill.fromErrorLog ? t('lesson.fromLog') : t('lesson.setLead')
      }));

      if (!ids.length) {
        exercises.appendChild(U.el('div.notice', { text: t('lesson.noneYet') }));
      } else {
        if (rec.done) exercises.appendChild(ui.bar(rec.done, rec.total, 'bar-ok'));
        exercises.appendChild(U.el('div.row.row-wrap', null, [
          U.el('button.btn.btn-primary.btn-lg', {
            type: 'button',
            text: rec.done ? t('lesson.again') : t('lesson.start'),
            onclick: function () {
              JTS.session.start({
                kind: 'practice', mode: 'study',
                title: pick(lesson.t),
                questionIds: ids,
                softTimer: true,
                returnHash: '#/materials/lesson?code=' + code,
                finishHash: '#/materials/lesson?code=' + code,
                meta: { lessonCode: code }
              });
            }
          }),
          U.el('a.btn', {
            href: JTS.config.bluebookUrl, target: '_blank', rel: 'noopener',
            text: t('lesson.bluebook')
          })
        ]));
      }
      /* Said once, plainly, on the screen where a student would expect to
         find official items. */
      exercises.appendChild(U.el('p.xsmall.muted', { text: t('lesson.ownQuestions') }));
      screen.appendChild(exercises);

      /* ----------------------------------------------- where this sits */
      var all = P.lessonsOfUnit(lesson.unit).filter(function (l) { return P.numberOn(l, pw); });
      var here = -1;
      all.forEach(function (l, i) { if (l.code === code) here = i; });
      var nav = U.el('div.row-between.row-wrap', { id: 'lesson-nav' });
      nav.appendChild(here > 0
        ? U.el('a.btn.btn-sm', {
            href: '#/materials/lesson?code=' + all[here - 1].code,
            text: '← ' + pick(all[here - 1].t)
          })
        : U.el('span'));
      nav.appendChild(here >= 0 && here < all.length - 1
        ? U.el('a.btn.btn-sm', {
            href: '#/materials/lesson?code=' + all[here + 1].code,
            text: pick(all[here + 1].t) + ' →'
          })
        : U.el('span'));
      screen.appendChild(nav);
    }
  });
})();
