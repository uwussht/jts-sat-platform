/* ==========================================================================
   Screen: Materials (#/materials)

   The course as a syllabus rather than as a calendar: the eight units, Verbal
   and Math kept apart, each opening on the lessons inside it. This is the
   screen that answers "what is in this course and where am I in it", which
   neither the roadmap (a shape) nor the plan (this week) answers well.

   A lesson's number depends on the schedule — three lessons a week and two a
   week number the hard phase differently — so the page states which schedule
   it is showing and links to the setting that changes it.

   Progress is read from the plan, not stored again here: the lessons a
   student has marked done are how far along the course they are.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;
  var P = JTS.data.programme;

  function pick(obj) { return JTS.i18n.pick(obj, S.settings().uiLang); }

  function sectionBlock(id, section, perWeek, done) {
    var count = JTS.programme.lessonCount(section, perWeek);
    return U.el('div.card.stack-sm', { id: id }, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.h3', { text: t(section === 'math' ? 'common.math' : 'mat.verbal') }),
        /* One subtopic, one unit: the count is the same number either way. */
        U.el('span.badge.badge-muted', { text: t('prog.nUnits', { n: count }) })
      ]),
      JTS.programme.unitList(section, { perWeek: perWeek, done: done })
    ]);
  }

  JTS.router.register('#/materials', {
    title: 'nav.materials',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.container-wide.screen.stack');
      root.appendChild(screen);

      var pw = JTS.programme.perWeek();
      var sch = JTS.programme.schedule();
      var done = JTS.programme.doneCount();
      var total = P.lessonsTotal;
      var pct = Math.round((Math.min(done, total) / total) * 100);

      /* The header is the course, not the student: its title, how long it is
         on this schedule, and one bar for how much of it is behind them. */
      screen.appendChild(U.el('div.card.stack-sm', { id: 'mat-head' }, [
        U.el('div.eyebrow', { text: t('mat.eyebrow') }),
        U.el('div.h2', { text: t('mat.courseTitle') }),
        U.el('div.stack-sm', null, [
          U.el('div.row-between.row-wrap', null, [
            U.el('span.small.muted', { text: t('mat.progress') }),
            U.el('b', { text: pct + '%' })
          ]),
          JTS.ui.bar(Math.min(done, total), total, 'bar-ok')
        ]),
        U.el('div.row.row-wrap.small.muted', null, [
          U.el('span', { text: t('mat.lessonsOf', { done: Math.min(done, total), total: total }) }),
          U.el('span', { text: '·' }),
          /* Eight units — the review, hard and test-week blocks are phases of
             the course rather than units of content, and counting them here
             would contradict the document the course is written from. */
          U.el('span', { text: t('prog.nUnits', { n: P.lessons.filter(function (l) { return P.numberOn(l, pw); }).length }) }),
          U.el('span', { text: '·' }),
          U.el('span', { text: t('mat.words', { n: P.wordsTotal }) })
        ])
      ]));

      /* Which schedule the numbers on this page belong to, and the one link
         that changes it. A lesson number from the other schedule would be
         worse than no number at all. */
      screen.appendChild(U.el('div.notice.row-between.row-wrap', { id: 'mat-schedule' }, [
        U.el('div.stack-sm', null, [
          U.el('div', null, [U.el('b', { text: pick(sch.name) })]),
          U.el('div.small.muted', {
            text: t('prog.scheduleShape', { weeks: sch.weeks, lessons: total, tests: sch.tests })
          })
        ]),
        U.el('a.btn.btn-sm', { href: '#/settings', text: t('mat.changeSchedule') })
      ]));

      screen.appendChild(sectionBlock('mat-rw', 'rw', pw, done));
      screen.appendChild(sectionBlock('mat-math', 'math', pw, done));

      /* Test week belongs to neither section, so it is its own block rather
         than being counted twice. */
      var endLessons = JTS.programme.lessonsOfSection('both', pw);
      if (endLessons.length) {
        screen.appendChild(U.el('div.card.stack-sm', { id: 'mat-end' }, [
          U.el('div.row-between.row-wrap', null, [
            U.el('div.h3', { text: pick(P.unitsOf('both')[0].name) }),
            U.el('span.badge.badge-muted', { text: t('prog.nUnits', { n: endLessons.length }) })
          ]),
          JTS.programme.unitList('both', { perWeek: pw, done: done })
        ]));
      }

      screen.appendChild(JTS.programme.homeworkCard());
      screen.appendChild(U.el('p.hint', { text: t('mat.hint') }));
    }
  });
})();
