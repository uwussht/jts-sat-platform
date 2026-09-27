/* ==========================================================================
   The daily check (#/daily).

   Five questions a day. Not a lesson and not a mock: a lesson teaches and a
   mock measures stamina, and this only asks whether what was learned is still
   there. It takes a few minutes, it is the same five questions all day however
   often the page is reloaded, and it cannot be taken twice — a check you can
   retake until it goes green is not checking anything.

   What it asks, in order of what is worth asking:

     1. mistakes whose review is due today — the whole point of the error queue;
     2. the weakest skills, by the same ranking Practice and the planner use;
     3. anything from the skills of the current phase that has not been seen.

   The set is seeded from the date and the student's own e-mail, so it is
   stable for the day, and two students do not get the same five.

   It runs in exam mode: no hints, no explanations, no AI while it is open.
   The result screen is where the answers are, and it links into Practice for
   the skills that went wrong, which is where the teaching lives.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var N = 5;                 /* questions in a daily check */
  var MINUTES = 8;           /* advisory, never closes the set */
  var DOTS = 14;             /* days of history on the dashboard card */

  /** The daily record, created lazily so an old profile needs no repair. */
  function rec() {
    var s = S.state();
    if (!s) return null;
    if (!s.daily) {
      s.daily = { history: [], streak: 0, best: 0, lastDay: null, promptedOn: null };
    }
    return s.daily;
  }

  function todayISO() { return U.iso(U.today()); }

  /** djb2 over the string, kept inside 32 bits so U.rng can use it. */
  function numericSeed(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) h = ((h * 33) ^ str.charCodeAt(i)) >>> 0;
    return h;
  }

  /** Today's entry, or null if it has not been taken yet. */
  function forDay(iso) {
    var d = rec();
    if (!d) return null;
    return d.history.filter(function (h) { return h.date === iso; })[0] || null;
  }

  /* ------------------------------------------------------------- the set */

  /**
   * Five question ids for a given day. Deterministic: the same day and the
   * same student always produce the same five, so a reload mid-check does not
   * quietly swap the questions underneath.
   */
  function pick(iso) {
    var s = S.state();
    if (!s) return [];
    /* A NUMBER, not U.weakHash's string: U.rng does `seed >>> 0`, which turns
       any string into 0, and every day would then get the identical shuffle. */
    var seed = numericSeed(iso + '|' + (s.profile.email || ''));
    var out = [], seen = {};
    function take(list) {
      list.forEach(function (q) {
        var id = q.id || q;
        if (out.length >= N || seen[id] || !JTS.bank.get(id)) return;
        seen[id] = 1; out.push(id);
      });
    }

    /* 1. errors that are due. */
    var due = JTS.analytics.pendingReviews()
      .map(function (e) { return e.questionId; });
    take(U.shuffle(due, seed));

    /* 2. the weakest skills, one question each so five skills are touched
          rather than one skill five times.

          Five of the top ten rather than the top five, shuffled by the day:
          straight down the ranking, two days running with nothing answered in
          between would ask the same five skills and often the same questions,
          and a check that repeats itself measures memory of the check. The
          pool is still the weak half of the list, so the choice is varied
          without becoming random. */
    if (out.length < N) {
      var daysToExam = JTS.analytics.daysToExam();
      var ranked = JTS.mastery.ranked({ daysToExam: daysToExam === null ? 84 : daysToExam });
      var pool = U.shuffle(ranked.slice(0, N * 2), seed).concat(ranked.slice(N * 2));
      for (var i = 0; i < pool.length && out.length < N; i++) {
        take(JTS.bank.pickForSkill(pool[i].skillId, 1, {
          exclude: out, seed: seed + i
        }));
      }
    }

    /* 3. and if the bank is thin for those skills, anything at all. */
    if (out.length < N) {
      take(U.shuffle(JTS.bank.query({ excludeIds: out }), seed));
    }
    return out;
  }

  /* --------------------------------------------------------- the record */

  /**
   * Write a finished check into the history and move the streak. Idempotent:
   * the result screen runs it on every render, and a reload must not count the
   * same check twice or move the streak a second time.
   */
  function record(summary) {
    if (!summary || summary.kind !== 'daily') return null;
    var d = rec();
    if (!d) return null;
    var day = U.iso(new Date(summary.finishedAt || Date.now()));
    if (forDay(day)) return forDay(day);

    var yesterday = U.iso(U.addDays(U.parseISO(day), -1));
    d.streak = d.lastDay === yesterday ? (d.streak || 0) + 1 : 1;
    d.best = Math.max(d.best || 0, d.streak);
    d.lastDay = day;
    d.history.push({
      date: day, correct: summary.correct, total: summary.questionIds.length,
      sessionId: summary.id
    });
    /* Oldest first, so the dashboard strip and the streak read the same way. */
    d.history.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    S.save();
    if (JTS.badges) JTS.badges.evaluate();
    return forDay(day);
  }

  /** The most recent finished daily session, whether or not it is recorded. */
  function lastSession() {
    var s = S.state();
    if (!s) return null;
    return (s.sessions || []).filter(function (x) { return x.kind === 'daily'; }).pop() || null;
  }

  function start() {
    var ids = pick(todayISO());
    if (!ids.length) return null;
    return JTS.session.start({
      kind: 'daily', mode: 'exam',
      title: t('daily.title'),
      questionIds: ids,
      durationMs: MINUTES * 60000,
      /* Advisory: a check that slams shut mid-question would teach the student
         to rush a thing that is not being timed for a reason. */
      softTimer: true,
      returnHash: '#/today',
      finishHash: '#/daily'
    });
  }

  JTS.daily = {
    N: N, pick: pick, record: record, start: start,
    state: rec,
    today: function () { return forDay(todayISO()); },
    doneToday: function () { return !!forDay(todayISO()); },
    /** Last `n` days, oldest first, each either its record or null. */
    strip: function (n) {
      var out = [];
      for (var i = n - 1; i >= 0; i--) {
        var iso = U.iso(U.addDays(U.today(), -i));
        out.push({ date: iso, rec: forDay(iso) });
      }
      return out;
    }
  };

  /* ----------------------------------------------------- dashboard card */

  /**
   * The dashboard's copy: where the streak is, whether today is done, and the
   * last fortnight as a strip of squares. It is a card and not a notice
   * because it is there every day whether or not anything is owed.
   */
  function dashboardCard() {
    var d = rec();
    if (!d) return null;
    var done = forDay(todayISO());
    var strip = JTS.daily.strip(DOTS);
    var taken = d.history.length;
    var correct = U.sum(d.history.map(function (h) { return h.correct; }));
    var asked = U.sum(d.history.map(function (h) { return h.total; }));

    var head = U.el('div.row-between.row-wrap', null, [
      U.el('div.eyebrow', { text: t('daily.title') }),
      U.el('span.badge' + (done ? '.badge-ok' : ''), {
        text: done ? t('daily.doneToday', { correct: done.correct, total: done.total })
                   : t('daily.notYet')
      })
    ]);

    var dots = U.el('div.dc-strip', {
      role: 'img', 'aria-label': t('daily.stripLabel', { n: DOTS })
    });
    strip.forEach(function (day) {
      var cls = '.dc-day';
      if (day.rec) cls += day.rec.correct === day.rec.total ? '.is-perfect' : '.is-done';
      if (day.date === todayISO()) cls += '.is-today';
      dots.appendChild(U.el('span' + cls, {
        title: day.date + (day.rec ? ' · ' + day.rec.correct + '/' + day.rec.total : '')
      }));
    });

    var stats = U.el('div.dc-stats', null, [
      U.el('div.dc-stat', null, [
        U.el('b', { text: String(d.streak || 0) }),
        U.el('span', { text: t('daily.streak') })
      ]),
      U.el('div.dc-stat', null, [
        U.el('b', { text: String(d.best || 0) }),
        U.el('span', { text: t('daily.best') })
      ]),
      U.el('div.dc-stat', null, [
        U.el('b', { text: taken ? U.pct(correct, asked) + '%' : '—' }),
        U.el('span', { text: t('daily.accuracy') })
      ])
    ]);

    return U.el('div.card.stack-sm', { id: 'daily-card' }, [
      head,
      U.el('p.small.muted', { text: t('daily.lead', { n: N }) }),
      dots,
      stats,
      U.el('a.btn.btn-sm' + (done ? '' : '.btn-primary'), {
        href: '#/daily', text: done ? t('daily.seeResult') : t('daily.start')
      })
    ]);
  }

  /* --------------------------------------------------------- the prompt */

  var askedThisLoad = false;

  /**
   * The once-a-day nudge. It is deliberately hard to make annoying: once per
   * calendar day, once per page load, never over a session in flight, never on
   * the question screen, and never before the plan exists.
   */
  function maybePrompt() {
    if (askedThisLoad) return;
    var s = S.state();
    if (!s || !s.profile.onboardingComplete) return;
    var d = rec();
    if (!d) return;
    var day = todayISO();
    if (d.promptedOn === day || forDay(day)) return;
    if (JTS.session.current()) return;
    var hash = (location.hash || '').split('?')[0];
    if (['#/question', '#/daily', '#/mocks/run'].indexOf(hash) >= 0) return;
    if (JTS.tour && JTS.tour.isOpen && JTS.tour.isOpen()) return;

    askedThisLoad = true;
    d.promptedOn = day;
    S.save();

    var m = ui.modal({
      title: t('daily.promptTitle'),
      content: U.el('div.stack-sm', null, [
        U.el('p', { text: t('daily.promptBody', { n: N }) }),
        d.streak ? U.el('p.small.muted', { text: t('daily.promptStreak', { n: d.streak }) }) : null
      ]),
      actions: [
        U.el('button.btn', {
          type: 'button', text: t('daily.later'), onclick: function () { m.close(); }
        }),
        U.el('button.btn.btn-primary', {
          type: 'button', 'data-autofocus': '', text: t('daily.start'),
          onclick: function () { m.close(); JTS.router.go('#/daily'); }
        })
      ]
    });
  }

  JTS.daily.dashboardCard = dashboardCard;
  JTS.daily.maybePrompt = maybePrompt;

  /* ---------------------------------------------------------- the screen */

  function resultView(screen, entry) {
    var ses = (S.state().sessions || []).filter(function (x) {
      return x.id === entry.sessionId;
    })[0];

    screen.appendChild(U.el('div.card.stack-sm', null, [
      U.el('div.eyebrow', { text: t('daily.title') }),
      U.el('div.h1', { text: t('daily.score', { correct: entry.correct, total: entry.total }) }),
      U.el('p.small.muted', { text: t('daily.resultLead') })
    ]));

    if (ses) {
      var rows = U.el('div.stack-sm');
      ses.questionIds.forEach(function (qid, i) {
        var q = JTS.bank.get(qid);
        var a = ses.answers && ses.answers[qid];
        if (!q) return;
        rows.appendChild(U.el('div.card.card-sm.row-between.row-wrap', null, [
          U.el('div.stack-sm', null, [
            U.el('div', null, [U.el('b', { text: (i + 1) + '. ' + JTS.skills.name(q.skillId) })]),
            U.el('div.xsmall.muted', { text: t('common.' + q.section) })
          ]),
          U.el('span.badge' + (a && a.correct ? '.badge-ok' : '.badge-danger'), {
            text: a && a.correct ? t('common.correct') : t('common.incorrect')
          })
        ]));
      });
      screen.appendChild(rows);

      var missed = ses.questionIds.filter(function (qid) {
        var a = ses.answers && ses.answers[qid];
        return a && !a.correct;
      });
      screen.appendChild(U.el('div.row.row-wrap', null, [
        missed.length
          ? U.el('a.btn.btn-primary', { href: '#/practice/weak', text: t('daily.practiceMissed') })
          : null,
        U.el('a.btn', { href: '#/today', text: t('nav.today') })
      ]));
    }
  }

  function introView(screen) {
    var d = rec();
    var ids = pick(todayISO());
    var card = U.el('div.card.stack');
    card.appendChild(U.el('h1.h1', { text: t('daily.title') }));
    card.appendChild(U.el('p.muted', { text: t('daily.lead', { n: N }) }));
    card.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge', { text: t('daily.qCount', { n: ids.length }) }),
      U.el('span.badge.badge-muted', { text: t('daily.about', { n: MINUTES }) }),
      d && d.streak ? U.el('span.badge.badge-muted', { text: t('daily.streakN', { n: d.streak }) }) : null
    ]));
    card.appendChild(U.el('div.notice', { text: t('daily.rules') }));
    if (!ids.length) {
      card.appendChild(U.el('div.notice.notice-warn', { text: t('daily.noQuestions') }));
    } else {
      card.appendChild(U.el('button.btn.btn-primary.btn-lg.btn-block', {
        type: 'button', text: t('daily.start'),
        onclick: function () { start(); }
      }));
    }
    screen.appendChild(card);
  }

  JTS.router.register('#/daily', {
    title: 'daily.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      /* A check already in flight always wins: resume it. */
      var active = JTS.session.current();
      if (active && active.kind === 'daily') { JTS.router.go('#/question'); return; }

      /* Finishing lands here, so this is where a finished check is written
         down — once, however many times the screen is drawn. */
      var last = lastSession();
      if (last && last.finishedAt) record(last);

      var screen = U.el('div.container.screen.stack', { style: 'max-width:820px' });
      root.appendChild(screen);

      var entry = forDay(todayISO());
      if (entry) resultView(screen, entry);
      else introView(screen);
    }
  });
})();
