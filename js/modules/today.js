/* ==========================================================================
   Screen: Today (#/today)

   The one screen a student opens every day. It answers five questions without
   much scrolling: how long is left, what am I doing now, where on the roadmap
   this sits, what is coming back to bite me, and what measures me next.

   The clock at the top runs: days, hours, minutes and seconds to the morning
   of the exam. A countdown that only counts days is a number you can ignore
   for twenty-three hours, and this one is the reason every other card on the
   screen exists.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;
  var DAY = 86400000;

  /* ------------------------------------------------------------- the hero */

  /** Digits as separate tiles, the way a flip clock has them. */
  function digitGroup(label, width) {
    var box = U.el('div.cd-group');
    var tiles = U.el('div.cd-tiles');
    for (var i = 0; i < width; i++) tiles.appendChild(U.el('span.cd-tile', { text: '0' }));
    box.appendChild(tiles);
    box.appendChild(U.el('span.cd-lab', { text: label }));
    box.dataset.width = String(width);
    return box;
  }

  function setGroup(box, value) {
    var w = Number(box.dataset.width);
    var str = String(Math.max(0, value));
    while (str.length < w) str = '0' + str;
    var tiles = box.querySelectorAll('.cd-tile');
    for (var i = 0; i < tiles.length; i++) {
      var ch = str.charAt(str.length - tiles.length + i);
      if (tiles[i].textContent !== ch) tiles[i].textContent = ch;
    }
  }

  /**
   * The welcome and the clock. Returns {el, stop} — the interval has to be
   * cleared when the screen goes away, or every visit leaves another one
   * ticking over a card nobody is looking at.
   */
  function heroCard(state) {
    /* A first name if they gave one, otherwise the part of the address before
       the @ — capitalised, because "welcome back, td" reads like a machine. */
    var name = (state.profile.name || state.profile.email || '').split(' ')[0].split('@')[0];
    if (name) name = name.charAt(0).toUpperCase() + name.slice(1);
    var dated = state.examDate && state.examDate.mode === 'date' && state.examDate.testDate;
    var streak = (state.daily && state.daily.streak) || 0;

    var left = U.el('div.hero-left', null, [
      U.el('div.hero-title', { text: t('today.welcome', { name: name }) }),
      U.el('p.hero-lead', { text: t('today.heroLead') }),
      U.el('div.row.row-wrap.hero-actions', null, [
        U.el('a.btn.hero-btn', { href: '#/materials', text: t('today.goCourses') }),
        U.el('a.btn.hero-btn', { href: '#/daily', text: t('today.dailyQuestions') }),
        /* The streak belongs to the daily check, so it is shown beside the
           button that continues it rather than as a statistic of its own. */
        streak ? U.el('span.hero-streak', { text: '★ ' + t('daily.streakN', { n: streak }) }) : null
      ])
    ]);

    var clock = U.el('div.hero-clock');
    var groups = null;
    if (dated) {
      clock.appendChild(U.el('div.hero-exam', { text: t('today.examName') }));
      groups = {
        d: digitGroup(t('today.cd.days'), 3),
        h: digitGroup(t('today.cd.hrs'), 2),
        m: digitGroup(t('today.cd.min'), 2),
        s: digitGroup(t('today.cd.sec'), 2)
      };
      clock.appendChild(U.el('div.cd-flip', null, [groups.d, groups.h, groups.m, groups.s]));
      clock.appendChild(U.el('div.hero-date', {
        text: U.fmtDate(U.parseISO(state.examDate.testDate), S.settings().uiLang)
      }));
      clock.appendChild(U.el('a.hero-change', { href: '#/settings', text: t('today.changeDate') }));
    } else {
      clock.appendChild(U.el('div.stack-sm', null, [
        U.el('div.hero-exam', { text: t('today.countdownProvisional') }),
        U.el('div.h2', { text: t('today.noDate') }),
        U.el('a.btn.hero-btn', { href: '#/settings', text: t('today.setDate') })
      ]));
    }

    var el = U.el('div.card.today-hero', { id: 'today-hero' }, [left, clock]);
    if (!dated) return { el: el, stop: function () {} };

    /* The exam starts in the morning, so the clock counts to 08:00 local on
       the day itself rather than to midnight before it. */
    var target = U.parseISO(state.examDate.testDate);
    target.setHours(8, 0, 0, 0);

    function paint() {
      var left = Math.max(0, target.getTime() - Date.now());
      setGroup(groups.d, Math.floor(left / DAY));
      setGroup(groups.h, Math.floor(left / 3600000) % 24);
      setGroup(groups.m, Math.floor(left / 60000) % 60);
      setGroup(groups.s, Math.floor(left / 1000) % 60);
    }
    paint();
    var id = setInterval(paint, 1000);
    return { el: el, stop: function () { clearInterval(id); } };
  }

  /* ------------------------------------------------- this week's full test */

  /**
   * The programme sets one full practice test a week, from week one. This card
   * is that test and nothing else: which week's it is, whether the two
   * sections are behind you, and how long is left to sit it.
   */
  function weeklyCard(state) {
    if (!JTS.mock) return null;
    var monday = U.weekStart(U.today());
    var sunday = U.addDays(monday, 6);
    var from = monday.getTime(), to = sunday.getTime() + DAY - 1;

    var runs = JTS.mock.all().filter(function (r) {
      var at = r.finishedAt || r.startedAt;
      return at >= from && at <= to;
    });
    var run = runs[runs.length - 1] || null;

    function sectionDone(sec) {
      if (!run) return false;
      var mods = run.modules.filter(function (m) { return m.section === sec; });
      return mods.length > 0 && mods.every(function (m) { return m.correct !== null; });
    }
    var v = sectionDone('rw'), m = sectionDone('math');
    var doneN = (v ? 1 : 0) + (m ? 1 : 0);
    var past = Date.now() > to;
    var status = doneN === 2 ? 'done' : past ? 'late' : 'open';

    var head = U.el('div.stack-sm', null, [
      U.el('div.eyebrow', { text: t('today.weekly.title') }),
      U.el('div.h3', {
        text: t('today.weekly.set', {
          from: U.fmtDate(monday, S.settings().uiLang),
          to: U.fmtDate(sunday, S.settings().uiLang)
        })
      }),
      U.el('div.wk-status.is-' + status, { text: t('today.weekly.' + status) }),
      U.el('div.small.muted', {
        text: t('today.weekly.until', {
          when: U.fmtDate(sunday, S.settings().uiLang)
        }) + ' · ' + t('today.weekly.progress', { done: doneN, total: 2 })
      }),
      U.el('div.row.wk-chips', null, [
        U.el('span.wk-chip' + (v ? '.is-done' : ''), { text: (v ? '●' : '○') + ' ' + t('today.weekly.v') }),
        U.el('span.wk-chip' + (m ? '.is-done' : ''), { text: (m ? '●' : '○') + ' ' + t('today.weekly.m') })
      ])
    ]);

    return U.el('a.card.wk-card', { href: '#/mocks', id: 'today-weekly' }, [
      head,
      U.el('span.wk-go', { text: '❯', 'aria-hidden': 'true' })
    ]);
  }

  /* --------------------------------------------------------- your targets */

  /**
   * The goal the student set, and the last score anyone actually measured —
   * a mock they finished or a real result they entered. Never a projection of
   * the exam: this platform does not print a predicted score, and a number
   * with no test behind it is exactly that.
   */
  function latestMeasure(state) {
    var best = null;
    function offer(at, total, label) {
      if (!total || !at) return;
      if (!best || at > best.at) best = { at: at, total: total, label: label };
    }
    (JTS.mock ? JTS.mock.finished() : []).forEach(function (r) {
      var est = JTS.mock.totalEstimate(r);
      if (est) offer(r.finishedAt, Math.round((est.low + est.high) / 2), t('nav.mocks'));
    });
    (JTS.mock ? JTS.mock.reports() : []).forEach(function (r) {
      offer(U.parseISO(r.date).getTime(), r.total, t('today.targets.entered'));
    });
    var b = state.baseline;
    if (b && b.total) offer(U.parseISO(b.date).getTime(), b.total, b.source || t('today.targets.entered'));
    return best;
  }

  function targetsCard(state) {
    var goal = state.goals && state.goals.total;
    var now = latestMeasure(state);
    return U.el('div.card.stack-sm', { id: 'today-targets' }, [
      U.el('div.row-between.row-wrap', null, [
        U.el('div.eyebrow', { text: t('today.targets.title') }),
        U.el('a.icon-btn.tg-edit', { href: '#/settings', 'aria-label': t('today.targets.edit'), text: '✎' })
      ]),
      U.el('div.row.row-wrap.tg-row', null, [
        U.el('div.tg-cell', null, [
          U.el('span.stat-label', { text: t('today.targets.target') }),
          U.el('b.tg-num', { text: goal ? String(goal) : '—' })
        ]),
        U.el('div.tg-cell', null, [
          U.el('span.stat-label', { text: t('today.targets.now') }),
          U.el('b.tg-num', { text: now ? String(now.total) : '—' })
        ])
      ]),
      U.el('div.xsmall.muted', {
        text: now
          ? t('today.targets.measured', {
              what: now.label, when: U.fmtDate(new Date(now.at), S.settings().uiLang)
            })
          : t('today.targets.none')
      })
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

    return U.el('div.card.card-accent.stack', { id: 'today-lesson' }, [
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
      }),
      /* Progress left the navigation when Materials took its place, and the
         charts are wanted exactly here — next to the checkpoint they measure. */
      U.el('a.small', { href: '#/progress', text: t('progress.title') + ' →' })
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

      var hero = heroCard(state);
      screen.appendChild(hero.el);

      var wk = weeklyCard(state);
      if (wk) screen.appendChild(wk);
      screen.appendChild(targetsCard(state));
      screen.appendChild(lessonCard(state));

      /* The daily check sits directly under the day's session, because it is
         the other thing a student is meant to do today and the only one that
         keeps a streak. */
      if (JTS.daily) {
        var dc = JTS.daily.dashboardCard();
        if (dc) screen.appendChild(dc);
      }

      var grid = U.el('div.grid.grid-2');
      /* The roadmap is a separate screen, but a road you have to remember to
         open is not a reminder. The compact version rides along on the screen
         the student opens every day. */
      if (JTS.roadmap) grid.appendChild(JTS.roadmap.reminder());
      grid.appendChild(reviewCard());
      var cp = checkpointCard();
      if (cp) grid.appendChild(cp);
      screen.appendChild(grid);
      /* The three shortcut buttons that used to sit here repeated the sidebar
         exactly, which is one navigation too many. */

      /* The clock ticks once a second; the router calls this when the screen
         is left, so it does not go on ticking over a card nobody can see. */
      return function () { hero.stop(); };
    }
  });
})();
