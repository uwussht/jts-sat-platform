/* ==========================================================================
   Screen: Today (#/today)

   The one screen a student opens every day. It answers four questions without
   scrolling: how long is left, what am I doing now, what is coming back to
   bite me, and what is the next thing that measures me.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  function countdownCard(state) {
    var days = JTS.analytics.daysToExam();
    var provisional = !state.examDate || state.examDate.mode !== 'date';
    var streak = state.profile.streak || { count: 0, best: 0 };

    var left = U.el('div.stack-sm', null, [
      U.el('div.eyebrow', { text: provisional ? t('today.countdownProvisional') : t('today.countdown') }),
      provisional
        ? U.el('div.stack-sm', null, [
            U.el('div.h2', { text: t('today.noDate') }),
            U.el('a.btn.btn-sm', { href: '#/settings', text: t('today.setDate') })
          ])
        : U.el('div.countdown', null, [
            U.el('div', null, [
              U.el('div.cd-num', { text: String(Math.max(0, days)) }),
              U.el('div.cd-lab', { text: t('common.days') })
            ]),
            U.el('div', null, [
              U.el('div.cd-num', { text: String(Math.max(0, Math.ceil(days / 7))) }),
              U.el('div.cd-lab', { text: t('common.weeks') })
            ])
          ])
    ]);

    var right = U.el('div.countdown', null, [
      U.el('div', null, [
        U.el('div.cd-num', { text: String(streak.count || 0) }),
        U.el('div.cd-lab', { text: t('today.streak') })
      ])
    ]);

    return U.el('div.card.card-hero', null, [
      U.el('div.row-between.row-wrap', null, [left, right]),
      !provisional && state.examDate.testDate
        ? U.el('div.small.muted', { style: 'margin-top:14px',
            text: U.fmtDate(state.examDate.testDate) })
        : null
    ]);
  }

  function lessonCard(state) {
    var lesson = JTS.planner.nextLesson();
    if (!lesson) {
      return U.el('div.card', null, [
        ui.empty(t('today.noLesson'), null,
          U.el('a.btn.btn-primary', { href: '#/plan', text: t('plan.generate') }))
      ]);
    }

    var phase = JTS.planner.phases.filter(function (p) { return p.id === lesson.phaseId; })[0];
    var skillNames = lesson.skillIds.map(function (id) { return JTS.skills.name(id); });
    var isToday = lesson.date === U.iso(U.today());
    var actualCount = JTS.planner.lessonQuestionIds(lesson).length;

    return U.el('div.card.card-accent.stack', null, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('today.nextLesson') }),
        U.el('div.row', null, [
          U.el('span.badge', { text: t('today.phase', { n: lesson.phaseId, name: t('plan.phase.' + phase.key) }) }),
          U.el('span.badge.badge-muted', { text: isToday ? t('common.today') : U.fmtDate(lesson.date) })
        ])
      ]),
      U.el('div.stack-sm', null, [
        U.el('div.stat-label', { text: t('today.lessonGoal') }),
        U.el('div.h2', { text: t('plan.goalFor', { skills: skillNames.join(', ') }) })
      ]),
      U.el('div.stack-sm', null, [
        U.el('div.stat-label', { text: t('today.lessonActions') }),
        U.el('div.row.row-wrap', null, lesson.actions.map(function (a) {
          return U.el('span.badge', { text: t('plan.action.' + a) });
        }).concat([
          U.el('span.badge.badge-muted', { text: t('today.expected', { n: lesson.expectedMinutes }) }),
          U.el('span.badge.badge-muted', {
            text: actualCount + ' ' + t('common.questions')
          })
        ]))
      ]),
      U.el('button.btn.btn-primary.btn-lg.btn-block', {
        type: 'button', text: t('today.startLesson'),
        onclick: function () {
          if (!JTS.planner.startLesson(lesson.id)) ui.toast(t('practice.noQuestions'), 'err');
        }
      })
    ]);
  }

  function reviewCard() {
    var due = JTS.analytics.pendingReviews();
    if (!due.length) {
      return U.el('div.card.stack-sm', null, [
        U.el('div.eyebrow', { text: t('today.errorsToReview') }),
        U.el('p.muted.small', { text: t('today.noErrors') })
      ]);
    }
    var bySkill = U.groupBy(due, function (e) { return e.skillId; });
    return U.el('div.card.stack', null, [
      U.el('div.row-between', null, [
        U.el('div.eyebrow', { text: t('today.errorsToReview') }),
        U.el('span.badge.badge-warn', { text: t('today.errorsCount', { n: due.length }) })
      ]),
      U.el('div.row.row-wrap', null, Object.keys(bySkill).slice(0, 6).map(function (sk) {
        return U.el('span.badge.badge-muted', {
          text: JTS.skills.name(sk) + ' · ' + bySkill[sk].length
        });
      })),
      U.el('button.btn.btn-primary.btn-block', {
        type: 'button', text: t('today.reviewNow'),
        onclick: function () {
          var ids = [];
          due.forEach(function (e) {
            if (ids.indexOf(e.questionId) < 0 && JTS.bank.get(e.questionId)) ids.push(e.questionId);
          });
          if (!ids.length) return ui.toast(t('practice.noQuestions'), 'err');
          JTS.session.start({
            kind: 'review', mode: 'study', title: t('today.errorsToReview'),
            questionIds: ids.slice(0, 20),
            returnHash: '#/today', finishHash: '#/today',
            meta: { review: true }
          });
        }
      })
    ]);
  }

  function checkpointCard() {
    var cp = JTS.planner.nextCheckpoint();
    if (!cp) return null;
    var label = cp.type === 'mini-test'
      ? t('plan.action.mini-test')
      : t('today.phase', {
          n: cp.phaseId,
          name: t('plan.phase.' + JTS.planner.phases.filter(function (p) { return p.id === cp.phaseId; })[0].key)
        });
    return U.el('div.card.stack-sm', null, [
      U.el('div.eyebrow', { text: t('today.checkpoint') }),
      U.el('div.row-between', null, [
        U.el('b', { text: label }),
        U.el('span.badge.badge-muted', { text: U.fmtDate(cp.date) })
      ]),
      U.el('div.small.muted', {
        text: U.daysBetween(U.today(), U.parseISO(cp.date)) + ' ' + t('common.days')
      })
    ]);
  }

  JTS.router.register('#/today', {
    title: 'nav.today',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var screen = U.el('div.container.screen.stack');
      root.appendChild(screen);


      /* An unfinished session outranks everything else on the page. */
      var active = JTS.session.current();
      if (active) {
        screen.appendChild(U.el('div.notice.notice-warn.row-between', null, [
          U.el('span', { text: t('today.resumeSession') + ': ' + (active.title || '') }),
          U.el('div.row', null, [
            U.el('button.btn.btn-sm', {
              type: 'button', text: t('common.discard'),
              onclick: function () { JTS.session.abandon(); JTS.router.render(); }
            }),
            U.el('button.btn.btn-sm.btn-primary', {
              type: 'button', text: t('common.resume'),
              onclick: function () { JTS.router.go('#/question'); }
            })
          ])
        ]));
      }

      screen.appendChild(countdownCard(state));
      screen.appendChild(lessonCard(state));

      var grid = U.el('div.grid.grid-2');
      grid.appendChild(reviewCard());
      var cp = checkpointCard();
      if (cp) grid.appendChild(cp);
      screen.appendChild(grid);
      /* The three shortcut buttons that used to sit here repeated the sidebar
         exactly, which is one navigation too many. */
    }
  });
})();
