/* ==========================================================================
   Screen: Vocabulary (#/vocab)

   Flashcards on SM-2 over the JTS word list plus whatever the student adds.
   Scheduling state lives in profile.vocab.cards, keyed by word id, so the
   deck can grow underneath a student without disturbing their progress.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var GOALS = [5, 10, 20];
  var GRADES = [
    { id: 'again', q: 0 }, { id: 'hard', q: 3 }, { id: 'good', q: 4 }, { id: 'easy', q: 5 }
  ];
  /* A card is "mastered" once its own interval has stretched past three weeks;
     before that it is still being learned, whatever the last answer was. */
  var MASTERED_DAYS = 21;

  /* --------------------------------------------------------------- the deck */

  JTS.vocab = {
    GOALS: GOALS,
    MASTERED_DAYS: MASTERED_DAYS,

    /** The JTS list plus the student's own words, in one array. */
    deck: function () {
      var s = S.state();
      var custom = (s && s.vocab && s.vocab.custom) || [];
      return (JTS.data.vocab || []).concat(custom);
    },
    get: function (id) {
      return this.deck().filter(function (c) { return c.id === id; })[0] || null;
    },
    state: function () {
      var s = S.state();
      if (!s.vocab) s.vocab = { cards: {}, dailyGoal: 10, custom: [], log: {} };
      if (!s.vocab.cards) s.vocab.cards = {};
      if (!s.vocab.log) s.vocab.log = {};
      if (!s.vocab.custom) s.vocab.custom = [];
      if (!s.vocab.dailyGoal) s.vocab.dailyGoal = 10;
      return s.vocab;
    },
    card: function (id) { return this.state().cards[id] || null; },

    status: function (id) {
      /* 'new' means never seen. A card graded Again has reps back at zero but
         is emphatically not new — it is the one the student is learning. */
      var c = this.card(id);
      if (!c) return 'new';
      return c.interval >= MASTERED_DAYS ? 'mastered' : 'learning';
    },

    counts: function () {
      var self = this;
      var out = { new: 0, learning: 0, mastered: 0, due: 0 };
      var now = Date.now();
      this.deck().forEach(function (w) {
        var st = self.status(w.id);
        out[st]++;
        var c = self.card(w.id);
        if (c && c.dueAt <= now) out.due++;
      });
      return out;
    },

    doneToday: function () {
      return this.state().log[U.iso(new Date())] || 0;
    },

    /**
     * Today's queue: everything overdue first, then new words to fill the
     * daily goal. Reviews come first because a forgotten word costs more than
     * a word never seen.
     */
    queue: function () {
      var self = this, now = Date.now();
      var v = this.state();
      var due = [], fresh = [];
      this.deck().forEach(function (w) {
        var c = self.card(w.id);
        if (!c) fresh.push(w);
        else if (c.dueAt <= now) due.push(w);
      });
      due.sort(function (a, b) { return self.card(a.id).dueAt - self.card(b.id).dueAt; });
      var room = Math.max(0, v.dailyGoal - due.length);
      return due.concat(fresh.slice(0, room));
    },

    /**
     * SM-2. A grade below 3 resets the repetition count and brings the card
     * back in the same session; the ease factor keeps its memory of past
     * failures and never falls below 1.3.
     */
    grade: function (id, q) {
      var v = this.state();
      var c = v.cards[id] || { ef: 2.5, interval: 0, reps: 0, lapses: 0, dueAt: 0, lastAt: 0 };
      if (q < 3) {
        c.reps = 0;
        c.interval = 0;
        c.lapses += 1;
        c.dueAt = Date.now() + 10 * 60000;     /* back in ten minutes */
      } else {
        c.reps += 1;
        c.interval = c.reps === 1 ? 1 : c.reps === 2 ? 6 : Math.round(c.interval * c.ef);
        c.dueAt = Date.now() + c.interval * U.DAY_MS;
      }
      c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      c.lastAt = Date.now();
      v.cards[id] = c;
      var day = U.iso(new Date());
      v.log[day] = (v.log[day] || 0) + 1;
      S.save();
      JTS.analytics.touchStreak();
      return c;
    },

    addWord: function (rec) {
      var v = this.state();
      var row = {
        id: U.uid('vc'),
        word: String(rec.word || '').trim(),
        definition: String(rec.definition || '').trim(),
        example: String(rec.example || '').trim() || null,
        ru: String(rec.ru || '').trim() || null,
        pos: [],
        category: 'custom',
        addedAt: Date.now()
      };
      v.custom.push(row);
      S.save();
      return row;
    },
    removeWord: function (id) {
      var v = this.state();
      v.custom = v.custom.filter(function (w) { return w.id !== id; });
      delete v.cards[id];
      S.save();
    },
    setGoal: function (n) { this.state().dailyGoal = n; S.save(); }
  };

  /* ------------------------------------------------------------- flashcards */

  function flashcard(host, rerender) {
    var queue = JTS.vocab.queue();
    var done = JTS.vocab.doneToday();
    var goal = JTS.vocab.state().dailyGoal;

    /* Everything on this tab is as wide as the card, so it all lives in one
       centred column; a full-width progress row above a 520px card reads as
       two unrelated things. */
    var stage = U.el('div.vocab-stage');
    host.appendChild(stage);

    /* The daily goal is the deck's only setting and belongs where the deck is
       being used, not in a card of its own above it. */
    var goalRow = U.el('div.row.row-wrap', { role: 'group', 'aria-label': t('vocab.dailyGoal') });
    GOALS.forEach(function (n) {
      goalRow.appendChild(U.el('button.chip', {
        type: 'button', 'aria-pressed': String(goal === n), text: String(n),
        'aria-label': t('vocab.dailyGoal') + ' ' + n,
        dataset: { goal: String(n) },
        onclick: function () { JTS.vocab.setGoal(n); rerender(); }
      }));
    });
    stage.appendChild(U.el('div.row-between.row-wrap', null, [
      U.el('span.eyebrow', { text: t('vocab.dailyGoal') }), goalRow
    ]));

    stage.appendChild(U.el('div.row-between', null, [
      U.el('span.small.muted', { text: t('vocab.todayDone', { n: done, goal: goal }) }),
      U.el('span.badge.badge-info', { text: t('vocab.due', { n: JTS.vocab.counts().due }) })
    ]));
    stage.appendChild(ui.bar(Math.min(done, goal), goal));

    if (!queue.length) {
      stage.appendChild(ui.empty(t('vocab.noCards')));
      return;
    }

    var word = queue[0];
    var flipped = false;

    var front = U.el('div.flash-face', null, [
      U.el('div.h1', { text: word.word }),
      word.pos && word.pos.length
        ? U.el('div.small.muted', { text: word.pos.join(' · ') }) : null,
      U.el('div.xsmall.muted', { text: t('vocab.flip') })
    ]);
    var back = U.el('div.flash-face.flash-back', null, [
      U.el('div.h3', { text: word.word }),
      U.el('p.small', { text: word.definition }),
      word.ru ? U.el('p.small.muted', { text: word.ru }) : null,
      word.example ? U.el('p.xsmall.muted', { text: '“' + word.example + '”' }) : null
    ]);
    var card = U.el('button.flash', {
      type: 'button', 'aria-label': word.word, 'aria-pressed': 'false'
    }, [U.el('div.flash-inner', null, [front, back])]);

    var grades = U.el('div.vocab-grades', { hidden: true });
    GRADES.forEach(function (g) {
      grades.appendChild(U.el('button.btn' + (g.id === 'good' ? '.btn-primary' : ''), {
        type: 'button', text: t('vocab.' + g.id),
        onclick: function () {
          JTS.vocab.grade(word.id, g.q);
          JTS.badges.evaluate();
          rerender();
        }
      }));
    });

    function flip() {
      flipped = !flipped;
      card.classList.toggle('flipped', flipped);
      card.setAttribute('aria-pressed', String(flipped));
      /* The grading buttons appear only once the answer has been seen: a
         grade given before that is a guess about a guess. */
      grades.hidden = !flipped;
    }
    card.addEventListener('click', flip);

    stage.appendChild(card);
    stage.appendChild(grades);
    stage.appendChild(U.el('div.xsmall.muted.center', {
      text: t('vocab.remaining', { n: queue.length })
    }));

    function onKey(e) {
      if (U.$('#modal-root').firstChild) return;
      if (e.key === ' ' || e.key === 'Enter') {
        if (document.activeElement === card) return;   /* the button handles it */
        e.preventDefault(); flip(); return;
      }
      if (!flipped) return;
      var idx = ['1', '2', '3', '4'].indexOf(e.key);
      if (idx < 0) return;
      e.preventDefault();
      JTS.vocab.grade(word.id, GRADES[idx].q);
      JTS.badges.evaluate();
      rerender();
    }
    document.addEventListener('keydown', onKey);
    return function () { document.removeEventListener('keydown', onKey); };
  }

  /* --------------------------------------------------------------- my words */

  function addModal(onDone) {
    var m;
    var word = U.el('input.input', { id: 'vw-word', 'data-autofocus': '' });
    var def = U.el('textarea.textarea', { id: 'vw-def', style: 'min-height:70px' });
    var ex = U.el('input.input', { id: 'vw-ex' });
    var ru = U.el('input.input', { id: 'vw-ru' });
    var err = U.el('div.error-text', { role: 'alert', hidden: true });

    m = ui.modal({
      title: t('vocab.addWord'),
      content: U.el('div.stack', null, [
        ui.field(t('vocab.word'), word),
        ui.field(t('vocab.definition'), def),
        ui.field(t('vocab.example'), ex, t('common.optional')),
        ui.field('Русский', ru, t('common.optional')),
        err
      ]),
      actions: [
        U.el('button.btn', { type: 'button', text: t('common.cancel'), onclick: function () { m.close(); } }),
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('common.save'),
          onclick: function () {
            if (!word.value.trim() || !def.value.trim()) {
              err.hidden = false; err.textContent = t('vocab.needWord'); return;
            }
            JTS.vocab.addWord({ word: word.value, definition: def.value, example: ex.value, ru: ru.value });
            m.close();
            ui.toast(t('common.saved'), 'ok');
            onDone();
          }
        })
      ]
    });
  }

  function wordList(host, rerender) {
    var filter = { q: '', status: 'all', category: 'all' };

    var search = U.el('input.input', { id: 'vw-search', type: 'search', placeholder: t('common.search') });
    var status = U.el('select.select', { id: 'vw-status' },
      ['all', 'new', 'learning', 'mastered'].map(function (k) {
        return U.el('option', { value: k, text: k === 'all' ? t('common.all') : t('vocab.' + k) });
      }));
    var cats = ['all'].concat(Object.keys((JTS.data.vocab || []).reduce(function (a, w) {
      a[w.category] = 1; return a;
    }, {}))).concat(['custom']);
    var category = U.el('select.select', { id: 'vw-cat' },
      cats.filter(function (c, i) { return cats.indexOf(c) === i; }).map(function (k) {
        return U.el('option', { value: k, text: k === 'all' ? t('common.all') : t('vocab.category.' + k) });
      }));

    var table = U.el('div.table-wrap');

    function paint() {
      U.clear(table);
      var rows = JTS.vocab.deck().filter(function (w) {
        if (filter.q && (w.word + ' ' + w.definition).toLowerCase().indexOf(filter.q) < 0) return false;
        if (filter.status !== 'all' && JTS.vocab.status(w.id) !== filter.status) return false;
        if (filter.category !== 'all' && w.category !== filter.category) return false;
        return true;
      });
      var tb = U.el('table.table');
      tb.appendChild(U.el('thead', null, [U.el('tr', null, [
        U.el('th', { text: t('vocab.word') }),
        U.el('th', { text: t('vocab.definition') }),
        U.el('th', { text: t('common.status') }),
        U.el('th.num', { text: t('vocab.nextIn') }),
        U.el('th', { text: '' })
      ])]));
      var body = U.el('tbody');
      rows.slice(0, 300).forEach(function (w) {
        var st = JTS.vocab.status(w.id);
        var c = JTS.vocab.card(w.id);
        var days = c && c.dueAt ? Math.max(0, Math.round((c.dueAt - Date.now()) / U.DAY_MS)) : null;
        body.appendChild(U.el('tr', null, [
          U.el('td', null, [
            U.el('b', { text: w.word }),
            w.ru ? U.el('div.xsmall.muted', { text: w.ru }) : null
          ]),
          U.el('td.small', { text: w.definition }),
          U.el('td', null, [U.el('span.badge.badge-' +
            (st === 'mastered' ? 'ok' : st === 'learning' ? 'warn' : 'muted'),
            { text: t('vocab.' + st) })]),
          U.el('td.num.small.muted', { text: days === null ? '—' : days + ' ' + t('common.days') }),
          U.el('td', null, [w.category === 'custom' ? U.el('button.btn.btn-sm.btn-ghost', {
            type: 'button', text: '✕', 'aria-label': t('vocab.deleteWord') + ' ' + w.word,
            onclick: function () {
              ui.confirm({ title: t('vocab.deleteWord'), message: w.word }).then(function (yes) {
                if (yes) { JTS.vocab.removeWord(w.id); paint(); }
              });
            }
          }) : null])
        ]));
      });
      tb.appendChild(body);
      table.appendChild(tb);
      if (rows.length > 300) {
        table.appendChild(U.el('div.xsmall.muted', {
          text: t('vocab.listTruncated', { shown: 300, total: rows.length })
        }));
      }
    }

    search.addEventListener('input', function () { filter.q = search.value.trim().toLowerCase(); paint(); });
    status.addEventListener('change', function () { filter.status = status.value; paint(); });
    category.addEventListener('change', function () { filter.category = category.value; paint(); });

    host.appendChild(U.el('div.grid.grid-3', null, [
      ui.field(t('common.search'), search),
      ui.field(t('common.status'), status),
      ui.field(t('vocab.category'), category)
    ]));
    host.appendChild(table);
    paint();
  }

  /* ----------------------------------------------------------------- screen */

  JTS.router.register('#/vocab', {
    title: 'vocab.title',
    render: function (root) {
      var screen = U.el('div.container.screen.stack-lg');
      root.appendChild(screen);
      var teardown = null;

      function rerender() {
        if (teardown) { teardown(); teardown = null; }
        U.clear(screen);
        paint();
      }

      function paint() {
        var counts = JTS.vocab.counts();
        JTS.shell.topbarActions([
          U.el('span.badge.badge-muted', { text: t('vocab.new') + ': ' + counts.new }),
          U.el('span.badge.badge-warn', { text: t('vocab.learning') + ': ' + counts.learning }),
          U.el('span.badge.badge-ok', { text: t('vocab.mastered') + ': ' + counts.mastered })
        ]);

        function dropListeners() {
          if (teardown) { teardown(); teardown = null; }
        }
        var tabs = ui.tabs([
          {
            id: 'cards', label: t('vocab.flashcard'),
            render: function (host) {
              dropListeners();
              teardown = flashcard(host, rerender) || null;
            }
          },
          {
            id: 'words', label: t('vocab.myWords'),
            /* Leaving the flashcard tab must take its key handler with it, or
               1-4 keeps grading a card nobody can see. */
            render: function (host) { dropListeners(); wordList(host, rerender); }
          }
        ]);
        screen.appendChild(U.el('div.card', null, [tabs]));

        screen.appendChild(U.el('p.xsmall.muted', {
          text: t('vocab.sourceNote', {
            n: (JTS.data.vocab || []).length,
            source: (JTS.data.vocabMeta || {}).source || '—'
          })
        }));

        screen.appendChild(U.el('button.fab', {
          type: 'button', text: '+', 'aria-label': t('vocab.addWord'),
          onclick: function () { addModal(rerender); }
        }));
      }

      paint();
      return function () { if (teardown) teardown(); };
    }
  });
})();
