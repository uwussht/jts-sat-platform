/* ==========================================================================
   Dashboard pieces built from the course plan:

     JTS.todayTasks.card(plan)       "Today's tasks": three things to do on
                                     your own today, each leading to its own
                                     section — words, practice on the current
                                     lesson's topic, and a full simulation on
                                     the days the programme sets one (error
                                     review on every other day)
     JTS.todayTasks.teacherLine(plan) the next lesson with the teacher: day,
                                     time, section and teacher, from the
                                     group's schedule
     JTS.todayTasks.selfStudy(plan)  phase 7: a list of things to do, with
                                     numbers, and one line about the extra
                                     package when it would still fit

   A block's state is read from what was done today (words learned, questions
   answered on the topic, mistakes reviewed), so it starts again tomorrow by
   itself and a block finished this morning stays finished until then.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, S = JTS.store;
  var P = JTS.data.programme;

  var WORDS_MIN = 15, WORDS_MAX = 20;

  function lang() { return S.settings().uiLang; }
  function pick(o) { return JTS.i18n.pick(o, lang()); }
  function todayStart() { return U.today().getTime(); }

  /**
   * The lesson the tasks are about. In a group the calendar decides: today's
   * lesson, or the last one the group has had. On your own: the next lesson.
   */
  function focusLesson(plan) {
    var today = U.iso(U.today());
    var todays = plan.lessons.filter(function (l) { return l.date === today; })[0];
    if (todays) return todays;
    if (plan.mode === 'group') {
      var past = plan.lessons.filter(function (l) { return l.date < today; });
      return past.length ? past[past.length - 1] : plan.lessons[0] || null;
    }
    return plan.next || null;
  }

  /** The group's next lesson by the calendar: today or later, not yet held. */
  function nextByDate(plan) {
    var today = U.iso(U.today());
    return plan.lessons.filter(function (l) {
      return l.date >= today && l.status !== 'done' && l.status !== 'missed';
    }).sort(function (a, b) { return (a.date + (a.time || '')).localeCompare(b.date + (b.time || '')); })[0] || null;
  }

  /** Questions a section's practice set has by default (task 7). */
  function setSize(section) { return section === 'math' ? 22 : 27; }

  function unresolvedErrors() {
    var st = S.state();
    return ((st && st.errors) || []).filter(function (e) { return !e.resolvedAt; });
  }

  /* -------------------------------------------------------------- blocks */

  function wordsBlock() {
    var n = JTS.vocab ? JTS.vocab.doneToday() : 0;
    return {
      id: 'words', icon: 'Aa', href: '#/vocab', mins: 15,
      title: t('tasks.words', { from: WORDS_MIN, to: WORDS_MAX }),
      note: t('tasks.wordsNote', { n: n }),
      state: n >= WORDS_MIN ? 'done' : n > 0 ? 'partial' : 'todo'
    };
  }

  function practiceBlock(lesson) {
    var skills = lesson && P.unitSkills ? (P.unitSkills[lesson.code] || []) : [];
    var size = setSize(lesson ? lesson.section : 'rw');
    var since = todayStart();
    var st = S.state();
    var n = skills.length ? ((st && st.attempts) || []).filter(function (a) {
      return a.ts >= since && skills.indexOf(a.skillId) >= 0;
    }).length : 0;
    /* A Challenge lesson has no single topic: its own set is the practice. */
    var href = skills.length
      ? '#/practice?skills=' + skills.join(',') + '&size=' + size
      : lesson ? '#/materials/lesson?code=' + lesson.code : '#/practice';
    return {
      id: 'practice', icon: '✎', href: href, mins: 40,
      title: t('tasks.practice'),
      note: lesson ? t('tasks.practiceNote', { topic: titleOf(lesson), n: size, done: n }) : t('tasks.practiceAny'),
      state: skills.length ? (n >= size ? 'done' : n > 0 ? 'partial' : 'todo') : 'todo'
    };
  }

  /** A simulation on its day; otherwise the mistakes; otherwise the weakest skill. */
  function thirdBlock(plan) {
    var today = U.iso(U.today());
    if (JTS.course.simulationOn(today)) {
      var since = todayStart();
      var ran = (JTS.mock ? JTS.mock.finished() : []).some(function (r) { return r.finishedAt >= since; });
      return {
        id: 'test', icon: '⏱', href: '#/mocks', mins: 135,
        title: t('tasks.simulation'), note: t('tasks.simulationNote'),
        state: ran ? 'done' : 'todo'
      };
    }
    var open = unresolvedErrors();
    var reviewedToday = ((S.state() || {}).errors || []).filter(function (e) {
      return e.resolvedAt && e.resolvedAt >= todayStart();
    }).length;
    if (open.length) {
      return {
        id: 'errors', icon: '↺', href: '#/errors?status=open', mins: 30,
        title: t('tasks.errors'), note: t('tasks.errorsNote', { n: open.length }),
        state: reviewedToday ? 'partial' : 'todo'
      };
    }
    /* Nothing waiting is a result, not an empty box: say so, and offer the
       weakest skill instead. */
    var weak = JTS.mastery && JTS.mastery.ranked ? JTS.mastery.ranked({})[0] : null;
    return {
      id: 'weak', icon: '◎', href: weak ? '#/practice?skills=' + weak.skillId : '#/practice', mins: 30,
      title: t('tasks.noErrors'),
      note: weak ? t('tasks.weakNote', { skill: JTS.skills.name(weak.skillId) }) : t('tasks.practiceAny'),
      state: reviewedToday ? 'done' : 'todo'
    };
  }

  function titleOf(l) {
    var unit = P.byCode ? P.byCode(l.code) : null;
    return unit ? pick(unit.t) : l.topic;
  }

  function blockRow(b) {
    return U.el('a.task-row.is-' + b.state, { href: b.href }, [
      U.el('span.task-ico', { text: b.state === 'done' ? '✓' : b.icon, 'aria-hidden': 'true' }),
      U.el('div.task-body', null, [
        U.el('b', { text: b.title }),
        U.el('span.small.muted', { text: b.note })
      ]),
      U.el('div.task-side', null, [
        U.el('span.xsmall.muted', { text: b.mins >= 60 ? U.fmtHm(b.mins) : '~' + b.mins + ' ' + t('common.minutes') }),
        U.el('span.task-state', { text: t('tasks.state.' + b.state) })
      ])
    ]);
  }

  /** "Today's tasks": the header of the current lesson, then three blocks. */
  function card(plan) {
    if (!plan) return null;
    var lesson = focusLesson(plan);
    var blocks = [wordsBlock(), practiceBlock(lesson), thirdBlock(plan)];
    var first = blocks.filter(function (b) { return b.state !== 'done'; })[0];
    var unit = lesson && P.byCode ? P.byCode(lesson.code) : null;
    var phase = JTS.course.currentPhase();

    var head = U.el('div.stack-sm', null, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('tasks.title') }),
        U.el('span.small.muted', { text: U.fmtDate(U.today(), lang()) })
      ]),
      phase ? U.el('div.row.row-wrap', null, [
        U.el('span.badge', { text: t('phase.' + phase.id + '.short') }),
        lesson ? U.el('span.badge.badge-muted', { text: t('prog.lessonNo', { n: lesson.no }) }) : null,
        lesson ? U.el('span.badge.badge-muted', { text: (lesson.section === 'math' ? t('common.math') : lesson.section === 'rw' ? t('common.rw') : 'SAT') + ' · ' + lesson.domain }) : null
      ]) : null,
      lesson ? U.el('div.h2', { text: titleOf(lesson) }) : null,
      unit && unit.skills ? U.el('div.small', null, [
        U.el('span.muted', { text: t('tasks.goal') + ': ' }),
        U.el('span', { text: pick(unit.skills) })
      ]) : null
    ]);

    return U.el('div.card.stack.tasks-card', { id: 'today-tasks' }, [
      head,
      U.el('div.task-list', null, blocks.map(blockRow)),
      U.el('div.row-between.row-wrap', null, [
        U.el('span.small.muted', { text: t('tasks.selfNote') }),
        first
          ? U.el('a.btn.btn-primary', { href: first.href, text: t('tasks.start') })
          : U.el('span.badge.badge-ok', { text: t('tasks.allDone') })
      ])
    ]);
  }

  /** The next lesson with the teacher, for a student in a group. */
  function teacherLine(plan) {
    var l = plan && plan.group ? nextByDate(plan) : null;
    if (!l) return null;
    var when = U.fmtDate(U.parseISO(l.date), lang()) + (l.time ? ', ' + l.time : '');
    return U.el('div.card.card-sm.row-between.row-wrap.teacher-line', { id: 'today-teacher' }, [
      U.el('div.stack-sm', null, [
        U.el('div.eyebrow', { text: t('tasks.withTeacher') }),
        U.el('b', { text: when }),
        U.el('span.small.muted', { text: [titleOf(l), l.teacher && l.teacher.name].filter(Boolean).join(' · ') })
      ]),
      U.el('span.badge.badge-muted', { text: t('tasks.lessonLen', { mins: plan.lessonMinutes }) })
    ]);
  }

  /**
   * Phase 7: no lessons on the timetable, but a concrete list — never "study
   * on your own". The line about the extra package is information, not a
   * sale: no price, no button to buy, only when it would still fit.
   */
  function selfStudy(plan) {
    if (!plan || plan.current !== 7) return null;
    var st = S.state();
    var open = unresolvedErrors().length;
    var snap = JTS.course.domainSnapshot();
    var weak = snap.priorities.map(function (id) { var d = JTS.skills.domain(id); return d ? d.name_en : id; });
    var seen = (st.seenQuestionIds || []).length;
    var bank = JTS.bank.all().length;
    var papers = (JTS.data.papers || []).length;
    var papersDone = (JTS.mock ? JTS.mock.finished() : []).filter(function (r) { return r.paperId; })
      .map(function (r) { return r.paperId; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).length;
    function row(text, href) {
      return U.el('a.task-row.is-todo', { href: href }, [
        U.el('span.task-ico', { text: '•', 'aria-hidden': 'true' }),
        U.el('div.task-body', null, [U.el('b', { text: text })])
      ]);
    }
    var box = U.el('div.card.stack.tasks-card', { id: 'today-selfstudy' }, [
      U.el('div.eyebrow', { text: t('phase.7.name') }),
      U.el('p.small.muted', { text: t('self.lead') }),
      U.el('div.task-list', null, [
        row(t('self.errors', { n: open }), '#/errors?status=open'),
        row(weak.length ? t('self.weak', { list: weak.join(', ') }) : t('self.weakNone'), '#/practice'),
        row(t('self.bank', { n: Math.max(0, bank - seen), of: bank }), '#/practice?mode=all'),
        row(t('self.bluebook'), '#/tests'),
        row(t('self.papers', { n: Math.max(0, papers - papersDone), of: papers }), '#/mocks')
      ])
    ]);
    if (plan.packages.indexOf('extra') < 0 && plan.extraFit && plan.extraFit.fits) {
      box.appendChild(U.el('div.small.muted.extra-line', null, [
        U.el('span', { text: t('self.extra') + ' ' }),
        U.el('a', { href: JTS.config.links.whatsapp, target: '_blank', rel: 'noopener', text: t('self.askCurator') })
      ]));
    }
    return box;
  }

  JTS.todayTasks = { card: card, teacherLine: teacherLine, selfStudy: selfStudy, setSize: setSize };
})();
