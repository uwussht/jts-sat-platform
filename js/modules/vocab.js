/* ==========================================================================
   Screen: Vocabulary (#/vocab)

   Flashcards on SM-2 over the JTS word list plus whatever the student adds.
   Scheduling state lives in profile.vocab.cards, keyed by word id, so the
   deck can grow underneath a student without disturbing their progress.

   Three games sit beside the deck, in the order a word is actually learned:

     Match     recognition — word against definition, six pairs, against a
               clock. The warm-up: it asks only "which of these six".
     Cloze     the real question type — a sentence with a blank and four
               near-synonyms, only one of which fits the register.
     Register  production — a sentence as it would be said out loud, and the
               academic word that keeps its meaning rather than its volume.

   The games do NOT touch the SM-2 schedule. A word answered correctly in a
   game two minutes after seeing its card is not evidence that it is known in
   three weeks, and letting a game reset an interval would corrupt the one
   measurement the deck actually makes. They keep their own tally instead.
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

  /* Ten questions is one sitting; six pairs is one screen. */
  var QUIZ_LEN = 10;
  var MATCH_PAIRS = 6;

  /* --------------------------------------------------------------- the deck */

  JTS.vocab = {
    GOALS: GOALS,
    /** Opened from the shell's + button, from anywhere in the app. */
    addModal: function (onDone) { addModal(onDone); },
    MASTERED_DAYS: MASTERED_DAYS,

    /**
     * The games' own record, which is deliberately separate from the cards.
     * { match: {plays, bestMs}, cloze: {asked, correct}, register: {...} }
     */
    games: function () {
      var st = S.state();
      var g = (st && st.vocab && st.vocab.games) || {};
      return {
        match: g.match || { plays: 0, bestMs: null },
        cloze: g.cloze || { asked: 0, correct: 0 },
        register: g.register || { asked: 0, correct: 0 }
      };
    },
    recordGame: function (kind, patch) {
      S.update(function (st) {
        st.vocab.games = st.vocab.games || {};
        var cur = st.vocab.games[kind] || {};
        Object.keys(patch).forEach(function (k) { cur[k] = patch[k]; });
        st.vocab.games[kind] = cur;
      });
    },

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

  /**
   * The add-a-word dialog. It is exported because the "+" button lives in the
   * shell now rather than on this screen: a word worth learning turns up while
   * a student is somewhere else entirely, and walking to the vocabulary screen
   * to write it down is how it gets forgotten.
   */
  function addModal(onDone) {
    onDone = onDone || function () {
      /* Only the screen that shows the deck needs redrawing. */
      if (JTS.router.current && JTS.router.current.base === '#/vocab') JTS.router.render();
    };
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

  /* ------------------------------------------------------------------ games */

  /** A short definition fits a tile; the full one often does not. */
  function shortDef(w) {
    var d = String(w.definition || '').trim();
    var cut = d.split(/[;(]/)[0].trim();
    return cut.length > 74 ? cut.slice(0, 71).replace(/[\s,]+$/, '') + '…' : cut;
  }

  /**
   * Match — six words, six definitions, shuffled, against a clock.
   *
   * Tap a word then tap a definition; mouse users can also drag one onto the
   * other. Both routes end in the same pair() call, because a game that only
   * works with a mouse is a game half the students cannot play.
   */
  function matchGame(host, rerender) {
    var pool = JTS.vocab.deck().filter(function (w) { return shortDef(w).length > 3; });
    if (pool.length < MATCH_PAIRS) { host.appendChild(ui.empty(t('vocab.game.noWords'))); return null; }

    var round = U.shuffle(pool, Date.now() % 9973).slice(0, MATCH_PAIRS);
    var startedAt = Date.now();
    var left = 0;
    var picked = null;                 /* the word tile waiting for a definition */
    var tick = null;

    var clock = U.el('span.badge.badge-muted', { text: '0:00' });
    var best = JTS.vocab.games().match.bestMs;
    var head = U.el('div.row-between.row-wrap', null, [
      U.el('span.small.muted', { text: t('vocab.game.matchLead') }),
      U.el('div.row.row-wrap', null, [
        best ? U.el('span.badge', { text: t('vocab.game.best') + ': ' + U.fmtClock(best) }) : null,
        clock
      ])
    ]);
    host.appendChild(head);

    var board = U.el('div.mg-board');
    var wordCol = U.el('div.mg-col');
    var defCol = U.el('div.mg-col');
    board.appendChild(wordCol);
    board.appendChild(defCol);
    host.appendChild(board);

    var done = U.el('div.notice.notice-ok', { hidden: true });
    host.appendChild(done);

    function finish() {
      var ms = Date.now() - startedAt;
      if (tick) { clearInterval(tick); tick = null; }
      var rec = JTS.vocab.games().match;
      JTS.vocab.recordGame('match', {
        plays: (rec.plays || 0) + 1,
        bestMs: rec.bestMs ? Math.min(rec.bestMs, ms) : ms
      });
      U.clear(done);
      done.hidden = false;
      done.appendChild(U.el('div.stack-sm', null, [
        U.el('b', { text: t('vocab.game.matchDone', { time: U.fmtClock(ms) }) }),
        U.el('button.btn.btn-sm.btn-primary', {
          type: 'button', text: t('vocab.game.again'), onclick: rerender
        })
      ]));
    }

    function pair(wordTile, defTile) {
      if (!wordTile || !defTile) return;
      if (wordTile.dataset.id === defTile.dataset.id) {
        wordTile.classList.add('done');
        defTile.classList.add('done');
        wordTile.disabled = true;
        defTile.disabled = true;
        wordTile.classList.remove('sel');
        picked = null;
        left--;
        if (!left) finish();
        return;
      }
      [wordTile, defTile].forEach(function (el) {
        el.classList.add('miss');
        setTimeout(function () { el.classList.remove('miss'); }, 420);
      });
      wordTile.classList.remove('sel');
      picked = null;
    }

    function tile(col, cls, id, label) {
      var el = U.el('button.mg-tile.' + cls, {
        type: 'button', text: label, dataset: { id: id }, draggable: 'true'
      });
      el.addEventListener('click', function () {
        if (el.disabled) return;
        if (cls === 'mg-word') {
          if (picked === el) { el.classList.remove('sel'); picked = null; return; }
          if (picked) picked.classList.remove('sel');
          picked = el; el.classList.add('sel');
          return;
        }
        if (picked) pair(picked, el);
      });
      /* Drag and drop for a mouse, on top of tap-to-pair rather than instead
         of it: touch devices do not fire these events at all. */
      el.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', id + '|' + cls);
        e.dataTransfer.effectAllowed = 'move';
      });
      el.addEventListener('dragover', function (e) { e.preventDefault(); });
      el.addEventListener('drop', function (e) {
        e.preventDefault();
        var raw = (e.dataTransfer.getData('text/plain') || '').split('|');
        if (raw.length !== 2 || raw[1] === cls) return;
        var other = U.$$('.mg-tile[data-id="' + raw[0] + '"]', board)
          .filter(function (x) { return x !== el && x.classList.contains(raw[1]); })[0];
        if (!other) return;
        pair(cls === 'mg-word' ? el : other, cls === 'mg-word' ? other : el);
      });
      col.appendChild(el);
      return el;
    }

    round.forEach(function (w) { tile(wordCol, 'mg-word', w.id, w.word); });
    U.shuffle(round, (Date.now() + 7) % 9973).forEach(function (w) {
      tile(defCol, 'mg-def', w.id, shortDef(w));
    });
    left = round.length;

    tick = setInterval(function () {
      clock.textContent = U.fmtClock(Date.now() - startedAt);
    }, 1000);
    return function () { if (tick) clearInterval(tick); };
  }

  /**
   * Cloze and Register Swap are the same machine: a prompt, four options, one
   * right, and a note that says why the other three miss. Only the prompt is
   * drawn differently, so only the prompt is passed in.
   */
  function quizGame(host, kind, items, promptOf) {
    if (!items.length) { host.appendChild(ui.empty(t('vocab.game.noItems'))); return; }

    var round = U.shuffle(items, Date.now() % 9973).slice(0, Math.min(QUIZ_LEN, items.length));
    var idx = 0, correct = 0, answered = false;

    var head = U.el('div.row-between.row-wrap');
    var stage = U.el('div.stack');
    host.appendChild(head);
    host.appendChild(stage);

    function paintHead() {
      U.clear(head);
      var rec = JTS.vocab.games()[kind];
      head.appendChild(U.el('span.small.muted', { text: t('vocab.game.' + kind + 'Lead') }));
      head.appendChild(U.el('div.row.row-wrap', null, [
        rec.asked ? U.el('span.badge.badge-muted', {
          text: t('vocab.game.lifetime', {
            pct: Math.round((rec.correct / rec.asked) * 100), n: rec.asked
          })
        }) : null,
        U.el('span.badge', { text: t('vocab.game.progress', { n: idx + 1, total: round.length }) })
      ]));
    }

    function result() {
      U.clear(head); U.clear(stage);
      stage.appendChild(U.el('div.card.card-accent.stack-sm', null, [
        U.el('div.eyebrow', { text: t('vocab.game.' + kind) }),
        U.el('div.h2', { text: t('vocab.game.score', { correct: correct, total: round.length }) }),
        U.el('p.small.muted', { text: t('vocab.game.noSchedule') }),
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('vocab.game.again'),
          onclick: function () {
            round = U.shuffle(items, Date.now() % 9973).slice(0, Math.min(QUIZ_LEN, items.length));
            idx = 0; correct = 0; answered = false;
            paint();
          }
        })
      ]));
    }

    function paint() {
      if (idx >= round.length) { result(); return; }
      answered = false;
      paintHead();
      U.clear(stage);
      var item = round[idx];
      stage.appendChild(promptOf(item));

      var opts = U.shuffle(item.options, (idx + 1) * 131 + Date.now() % 97);
      var list = U.el('div.opt-list');
      var note = U.el('div.notice', { hidden: true });

      var KEYS = ['A', 'B', 'C', 'D'];
      opts.forEach(function (word, i) {
        var btn = U.el('button.opt', { type: 'button', dataset: { word: word } }, [
          U.el('span.opt-key', { text: KEYS[i] }),
          U.el('span', { text: word })
        ]);
        btn.addEventListener('click', function () {
          if (answered) return;
          answered = true;
          var right = word === item.answer;
          if (right) correct++;
          var rec = JTS.vocab.games()[kind];
          JTS.vocab.recordGame(kind, {
            asked: (rec.asked || 0) + 1,
            correct: (rec.correct || 0) + (right ? 1 : 0)
          });
          U.$$('.opt', list).forEach(function (o) {
            if (o.dataset.word === item.answer) o.classList.add('is-correct');
            else if (o === btn) o.classList.add('is-wrong');
            o.disabled = true;
          });
          U.clear(note);
          note.hidden = false;
          note.className = 'notice ' + (right ? 'notice-ok' : 'notice-warn');
          note.appendChild(U.el('div.stack-sm', null, [
            U.el('div', null, [
              U.el('b', { text: right ? t('vocab.game.right') : t('vocab.game.wrong', { word: item.answer }) })
            ]),
            U.el('div.small', { text: JTS.i18n.pick(item.note, S.settings().uiLang) }),
            U.el('button.btn.btn-sm.btn-primary', {
              type: 'button',
              text: idx === round.length - 1 ? t('vocab.game.finish') : t('common.next'),
              onclick: function () { idx++; paint(); }
            })
          ]));
        });
        list.appendChild(btn);
      });
      stage.appendChild(list);
      stage.appendChild(note);
    }

    paint();
  }

  function clozeGame(host) {
    quizGame(host, 'cloze', JTS.data.vocabCloze || [], function (item) {
      return U.el('div.card.card-sm.card-flat.quiz-prompt', {
        html: U.esc(item.sentence).replace('___', '<span class="quiz-blank"></span>')
      });
    });
  }

  function registerGame(host) {
    quizGame(host, 'register', JTS.data.vocabRegister || [], function (item) {
      return U.el('div.stack-sm', null, [
        U.el('div.card.card-sm.card-flat.stack-sm', null, [
          U.el('div.eyebrow', { text: t('vocab.game.casual') }),
          U.el('div', { text: item.casual })
        ]),
        U.el('div.card.card-sm.card-flat.quiz-prompt', null, [
          U.el('div.eyebrow', { text: t('vocab.game.formal'), style: 'margin-bottom:6px' }),
          U.el('div', {
            html: U.esc(item.formal).replace('___', '<span class="quiz-blank"></span>')
          })
        ])
      ]);
    });
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
            id: 'match', label: t('vocab.game.match'),
            render: function (host) {
              dropListeners();
              teardown = matchGame(host, rerender) || null;
            }
          },
          {
            id: 'cloze', label: t('vocab.game.cloze'),
            render: function (host) { dropListeners(); clozeGame(host); }
          },
          {
            id: 'register', label: t('vocab.game.register'),
            render: function (host) { dropListeners(); registerGame(host); }
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

      }

      paint();
      return function () { if (teardown) teardown(); };
    }
  });
})();
