/* ==========================================================================
   Screen: Error log (#/errors)

   The log the programme asks a 1500 student to keep, and it is theirs to keep.
   A row answers four things and nothing else:

     the mistake  ·  which topic  ·  why it happened  ·  reviewed yet or not

   The student writes the rows. "Add a mistake" is the first thing on the
   screen, because most of what goes wrong on a real test happens where the
   platform was not watching — on paper, in Bluebook, in a lesson — and a log
   only the software can write is a log that misses exactly that. Writing the
   mistake down in your own words IS the review; a row you did not type is a
   row you did not think about.

   Questions missed inside the platform are added automatically, in the same
   table and the same four columns: the mistake is the question, the topic is
   the skill it drills, the why is the kind picked at the moment of the miss.
   They are marked as coming from the platform rather than from the student, so
   the table never pretends someone wrote a row they did not.

   Reviewed is one column and one meaning: this has been dealt with. The
   student ticks it; getting the same question right again later, unaided,
   ticks it too. Nothing is stored twice — a row is a record in state.errors,
   joined for display to the attempt and session behind it.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* The six the study-session picker offers, used here as the answer to "why".
     A reason that exists in one place and not the other would be a column
     nobody can fill from the other side. */
  var KINDS = ['knowledge gap', 'misread', 'calculation', 'strategy', 'time pressure', 'careless'];

  var COLS = [
    { id: 'n',        num: true, sort: function (r) { return r.n; } },
    { id: 'date',     sort: function (r) { return r.ts; } },
    { id: 'topic',    sort: function (r) { return r.topic; } },
    { id: 'mistake',  sort: function (r) { return r.title; } },
    { id: 'why',      sort: function (r) { return r.kind || '~'; } },
    { id: 'where',    sort: function (r) { return r.where; } },
    { id: 'reviewed', sort: function (r) { return r.reviewed ? 1 : 0; } }
  ];

  /* ------------------------------------------------------------- the rows */

  /* skillId -> the lesson code that drills it. The programme tags a mistake by
     lesson code, which is the point of the codes: "M2.3 again" is an
     instruction, "you missed a linear systems question" is an observation. */
  var codeBySkill = null;
  function codeOf(skillId) {
    if (!codeBySkill) {
      codeBySkill = {};
      var drills = (JTS.data.programme && JTS.data.programme.drills) || {};
      Object.keys(drills).forEach(function (code) {
        (drills[code].skills || []).forEach(function (sk) {
          if (!codeBySkill[sk]) codeBySkill[sk] = code;
        });
      });
    }
    return codeBySkill[skillId] || null;
  }

  /* The bank writes stems as HTML — &minus;, &radic;, <sup> — so stripping the
     tags is only half of it. The browser is the decoder; anything else is a
     table full of &amp;radic;. Assigned on a detached node that is never
     inserted, and read back as text. */
  var scratch = null;
  function flatten(html) {
    scratch = scratch || document.createElement('div');
    scratch.innerHTML = String(html || '').replace(/<[^>]*>/g, ' ');
    return (scratch.textContent || '').replace(/\s+/g, ' ').trim();
  }

  /** Where the row came from, as a word a student recognises. */
  function whereOf(err, session, state) {
    if (err.manual) return 'mine';
    if (!session) return 'practice';
    if (session.meta && session.meta.lessonCode) return 'lesson';
    if (session.kind === 'mock') {
      var run = (state.mocks || []).filter(function (m) {
        return m.id === (session.meta && session.meta.mockId);
      })[0];
      return run && run.paperId ? 'paper' : 'mock';
    }
    if (['diagnostic', 'daily', 'review', 'practice'].indexOf(session.kind) >= 0) return session.kind;
    return 'practice';
  }

  /** The topic a row belongs to: the student's choice, or the skill behind it. */
  function topicOf(err) {
    if (err.manual) {
      if (err.topicCode) {
        var lesson = JTS.data.programme && JTS.data.programme.byCode(err.topicCode);
        return {
          code: err.topicCode,
          text: lesson ? JTS.i18n.pick(lesson.t, S.settings().uiLang) : err.topicCode
        };
      }
      return { code: null, text: err.topicText || '' };
    }
    return { code: codeOf(err.skillId), text: JTS.skills.name(err.skillId) || err.skillId || '' };
  }

  /**
   * One row per logged mistake, newest first, with everything the table prints
   * already resolved — sorting seven columns through three lookups each would
   * walk the attempt list seven times for nothing.
   */
  function buildRows(state) {
    var attempts = {}, sessions = {};
    (state.attempts || []).forEach(function (a) { attempts[a.id] = a; });
    (state.sessions || []).forEach(function (s) { sessions[s.id] = s; });

    return (state.errors || []).slice().sort(function (a, b) { return b.ts - a.ts; })
      .map(function (e, i) {
        var att = e.attemptId ? (attempts[e.attemptId] || null) : null;
        var ses = att && sessions[att.sessionId] ? sessions[att.sessionId] : null;
        var q = e.questionId && JTS.bank ? JTS.bank.get(e.questionId) : null;
        var skill = e.skillId ? JTS.skills.get(e.skillId) : null;
        var topic = topicOf(e);
        return {
          n: i + 1,
          err: e,
          id: e.id,
          manual: !!e.manual,
          ts: e.ts,
          date: U.fmtDate(new Date(e.ts), S.settings().uiLang),
          section: skill ? skill.section : (e.manual ? sectionOfCode(e.topicCode) : 'rw'),
          code: topic.code,
          topic: topic.text,
          /* What went wrong, in one line: the student's own words, or the
             question they missed. */
          title: e.manual ? (e.title || '') : flatten(q && q.stem),
          note: e.note || '',
          question: q,
          attempt: att,
          kind: e.errorType || null,
          where: whereOf(e, ses, state),
          reviewed: !!e.resolvedAt
        };
      });
  }

  function sectionOfCode(code) {
    var P = JTS.data.programme;
    var lesson = code && P && P.byCode(code);
    return lesson ? P.sectionOf(lesson) : 'rw';
  }

  /* ------------------------------------------------------- what kind card */

  /**
   * The answer to "why do I keep getting these wrong". Counts by reason,
   * largest first, each a filter — because the next thing a student does after
   * seeing "misread × 22" is want to look at those 22.
   */
  function whyBreakdown(rows, filter, apply) {
    var counts = {};
    KINDS.concat(['none']).forEach(function (k) { counts[k] = 0; });
    rows.forEach(function (r) { counts[r.kind || 'none'] += 1; });

    var order = KINDS.slice().sort(function (a, b) { return counts[b] - counts[a]; });
    if (counts.none) order.push('none');

    var total = rows.length;
    var grid = U.el('div.err-kinds');
    order.forEach(function (k) {
      var n = counts[k];
      var on = filter.kind === k;
      grid.appendChild(U.el('button.err-kind' + (on ? '.is-on' : '') + (k === 'none' ? '.is-none' : ''), {
        type: 'button', 'aria-pressed': String(on),
        onclick: function () { apply({ kind: on ? 'all' : k }); }
      }, [
        U.el('div.err-kind-top', null, [
          U.el('span.err-kind-name', { text: k === 'none' ? t('errors.unclassified') : t('err.' + k) }),
          U.el('b.err-kind-n', { text: String(n) })
        ]),
        ui.bar(n, total || 1, k === 'none' ? '' : 'bar-ok'),
        U.el('div.err-kind-pct', { text: U.pct(n, total) + '%' })
      ]));
    });
    return grid;
  }

  /* ----------------------------------------------------------- add / edit */

  /** Every lesson of the course, as options, grouped Verbal and Math. */
  function topicOptions(select, chosen) {
    var P = JTS.data.programme;
    select.appendChild(U.el('option', { value: '', text: t('errors.topicOther') }));
    if (!P) return;
    var pw = JTS.programme ? JTS.programme.perWeek() : 3;
    [['rw', t('common.rw')], ['math', t('common.math')]].forEach(function (pair) {
      var group = U.el('optgroup', { label: pair[1] });
      P.lessons.filter(function (l) {
        return P.sectionOf(l) === pair[0] && P.numberOn(l, pw);
      }).sort(function (a, b) {
        return P.numberOn(a, pw) - P.numberOn(b, pw);
      }).forEach(function (l) {
        group.appendChild(U.el('option', {
          value: l.code,
          text: l.code + ' · ' + JTS.i18n.pick(l.t, S.settings().uiLang)
        }));
      });
      select.appendChild(group);
    });
    if (chosen) select.value = chosen;
  }

  /**
   * The form behind "Add a mistake", and the same form when a row is opened
   * again. Four questions, in the order a student would answer them.
   */
  function entryForm(row, done) {
    var e = row ? row.err : null;
    var draft = {
      title: e ? (e.title || '') : '',
      topicCode: e ? (e.topicCode || '') : '',
      topicText: e ? (e.topicText || '') : '',
      note: e ? (e.note || '') : '',
      kind: e ? (e.errorType || null) : null
    };

    /* A textarea's initial value is its text content, not a value attribute —
       setting the attribute silently does nothing, which is how reopening a
       saved row showed two empty boxes. */
    var what = U.el('textarea.input', {
      rows: '2', text: draft.title, placeholder: t('errors.whatPlaceholder')
    });
    var topicSel = U.el('select.input');
    topicOptions(topicSel, draft.topicCode);
    var topicFree = U.el('input.input', {
      type: 'text', value: draft.topicText, placeholder: t('errors.topicFreePlaceholder')
    });
    function syncTopic() { topicFree.hidden = !!topicSel.value; }
    topicSel.addEventListener('change', syncTopic);
    syncTopic();

    var why = U.el('div.err-pick');
    KINDS.forEach(function (k) {
      /* Selected is its own state and not .btn-primary: the dialog already has
         a primary button, and two identical-looking primaries where one saves
         and one only selects is a trap. */
      var b = U.el('button.btn.btn-sm.err-pick-opt' + (draft.kind === k ? '.is-on' : ''), {
        type: 'button', text: t('err.' + k), 'aria-pressed': String(draft.kind === k),
        onclick: function () {
          draft.kind = draft.kind === k ? null : k;
          [].forEach.call(why.children, function (n) {
            n.classList.remove('is-on'); n.setAttribute('aria-pressed', 'false');
          });
          if (draft.kind === k) { b.classList.add('is-on'); b.setAttribute('aria-pressed', 'true'); }
        }
      });
      why.appendChild(b);
    });
    var note = U.el('textarea.input', {
      rows: '2', text: draft.note, placeholder: t('errors.whyPlaceholder')
    });

    var problem = U.el('p.small.danger', { hidden: true });
    var content = U.el('div.stack', null, [
      problem,
      ui.field(t('errors.fieldWhat'), what, t('errors.fieldWhatHint')),
      ui.field(t('errors.fieldTopic'), U.el('div.stack-sm', null, [topicSel, topicFree])),
      ui.field(t('errors.fieldWhy'), U.el('div.stack-sm', null, [why, note]), t('errors.fieldWhyHint'))
    ]);

    var m = ui.modal({
      title: row ? t('errors.editMistake') : t('errors.addMistake'),
      content: content,
      actions: [
        U.el('button.btn', { type: 'button', text: t('common.cancel'), onclick: function () { m.close(); } }),
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('common.save'), 'data-autofocus': '',
          onclick: function () {
            var title = what.value.trim();
            if (!title) {
              problem.hidden = false;
              problem.textContent = t('errors.needWhat');
              what.focus();
              return;
            }
            var rec = {
              title: title,
              topicCode: topicSel.value || null,
              topicText: topicSel.value ? '' : topicFree.value.trim(),
              note: note.value.trim(),
              errorType: draft.kind
            };
            if (e) JTS.attempts.updateError(e.id, rec);
            else JTS.attempts.addManualError(rec);
            m.close();
            ui.toast(t(e ? 'common.saved' : 'errors.added'), 'ok');
            done();
          }
        })
      ]
    });
  }

  /* ------------------------------------------------- a row from the platform */

  /** A miss the platform recorded: the question, what was picked, what was
      right, and the reason — which the student can still supply. */
  function autoModal(row, done) {
    var q = row.question, att = row.attempt;
    var body = U.el('div.stack-sm');

    body.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge.badge-muted', { text: row.date }),
      row.code ? U.el('span.pg-tag', { text: row.code }) : null,
      row.topic ? U.el('span.badge.badge-muted', { text: row.topic }) : null,
      U.el('span.badge.badge-muted', { text: t('errors.where.' + row.where) })
    ]));

    if (q && q.passage) body.appendChild(U.el('div.q-passage.small', { html: q.passage }));
    /* The table flattens a stem to one line so seven columns fit; here there is
       room for the real thing, exponents and radicals included. */
    body.appendChild(q && q.stem
      ? U.el('div.err-stem', { html: q.stem })
      : U.el('p', { text: t('errors.questionGone') }));

    if (q && q.options && att) {
      body.appendChild(U.el('div.stack-sm', null, q.options.map(function (opt, i) {
        var letter = 'ABCD'[i];
        var isRight = q.answer === letter;
        var isPicked = att.selected === letter;
        return U.el('div.err-opt' + (isRight ? '.is-right' : '') +
          (isPicked && !isRight ? '.is-picked' : ''), null, [
          U.el('b', { text: letter }),
          U.el('span', { text: String(opt) }),
          isRight ? U.el('span.badge.badge-ok', { text: t('errors.right') }) : null,
          isPicked ? U.el('span.badge.badge-warn', { text: t('errors.yours') }) : null
        ]);
      })));
    } else if (att) {
      body.appendChild(U.el('div.row.row-wrap', null, [
        U.el('span.badge.badge-warn', { text: t('errors.yours') + ': ' + (att.selected || '—') }),
        q ? U.el('span.badge.badge-ok', { text: t('errors.right') + ': ' + q.answer }) : null
      ]));
    }

    /* A miss with no reason on it is the one that teaches nothing, and the
       moment a student is looking straight at it is the moment they can still
       say why. */
    var chosen = row.kind;
    var opts = U.el('div.err-pick');
    KINDS.forEach(function (k) {
      var b = U.el('button.btn.btn-sm.err-pick-opt' + (chosen === k ? '.is-on' : ''), {
        type: 'button', text: t('err.' + k), 'aria-pressed': String(chosen === k),
        onclick: function () {
          chosen = k;
          [].forEach.call(opts.children, function (n) {
            n.classList.remove('is-on'); n.setAttribute('aria-pressed', 'false');
          });
          b.classList.add('is-on'); b.setAttribute('aria-pressed', 'true');
        }
      });
      opts.appendChild(b);
    });
    body.appendChild(U.el('div.stack-sm', null, [
      U.el('div.stat-label', { text: t('errors.fieldWhy') }), opts
    ]));

    var m = ui.modal({
      title: t('errors.oneMiss'),
      content: body,
      actions: [
        U.el('button.btn', { type: 'button', text: t('common.close'), onclick: function () { m.close(); } }),
        U.el('button.btn.btn-primary', {
          type: 'button', text: t('common.save'), 'data-autofocus': '',
          onclick: function () {
            if (chosen && chosen !== row.kind) {
              if (row.err.attemptId) JTS.attempts.setErrorType(row.err.attemptId, chosen);
              else JTS.attempts.updateError(row.err.id, { errorType: chosen });
              ui.toast(t('errors.kindSaved'), 'ok');
            }
            m.close();
            done();
          }
        })
      ]
    });
  }

  /* ------------------------------------------------------------------ CSV */

  function csv(rows) {
    function cell(v) {
      var s = v === null || v === undefined ? '' : String(v);
      return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    }
    var head = COLS.map(function (c) { return cell(t('errors.col.' + c.id)); })
      .concat([cell(t('errors.col.note'))]).join(',');
    var body = rows.map(function (r) {
      return [
        r.n, r.date, (r.code ? r.code + ' · ' : '') + r.topic, r.title,
        r.kind ? t('err.' + r.kind) : t('errors.unclassified'),
        t('errors.where.' + r.where),
        t(r.reviewed ? 'errors.reviewed' : 'errors.notReviewed'),
        r.note
      ].map(cell).join(',');
    });
    /* The BOM is what makes Excel open a UTF-8 CSV without mangling Russian
       and Kazakh into question marks. */
    return '﻿' + [head].concat(body).join('\r\n');
  }

  /* --------------------------------------------------------------- screen */

  JTS.router.register('#/errors', {
    title: 'errors.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var filter = { section: 'all', kind: 'all', reviewed: 'all', source: 'all', q: '' };
      var sort = { col: 'date', dir: -1 };

      var screen = U.el('div.container.container-wide.screen.stack');
      root.appendChild(screen);

      function rerender() { JTS.router.render(); }

      var all = buildRows(state);

      function visible() {
        var needle = filter.q.trim().toLowerCase();
        var list = all.filter(function (r) {
          if (filter.section !== 'all' && r.section !== filter.section) return false;
          if (filter.kind !== 'all' && (r.kind || 'none') !== filter.kind) return false;
          if (filter.reviewed === 'yes' && !r.reviewed) return false;
          if (filter.reviewed === 'no' && r.reviewed) return false;
          if (filter.source === 'mine' && !r.manual) return false;
          if (filter.source === 'auto' && r.manual) return false;
          if (needle && (r.topic + ' ' + r.title + ' ' + r.note + ' ' + (r.code || ''))
            .toLowerCase().indexOf(needle) < 0) return false;
          return true;
        });
        var col = COLS.filter(function (c) { return c.id === sort.col; })[0] || COLS[1];
        return list.sort(function (a, b) {
          var x = col.sort(a), y = col.sort(b);
          return (x < y ? -1 : x > y ? 1 : 0) * sort.dir;
        });
      }

      /* ------------------------------------------------------------- head */
      var toReview = all.filter(function (r) { return !r.reviewed; }).length;
      var mine = all.filter(function (r) { return r.manual; }).length;

      screen.appendChild(U.el('div.card.stack-sm', { id: 'err-head' }, [
        U.el('div.eyebrow', { text: t('errors.eyebrow') }),
        U.el('div.row-between.row-wrap', null, [
          U.el('div.h2', { text: t('errors.title') }),
          /* First thing on the screen, and the thing this log is for: the
             student writes the rows. */
          U.el('button.btn.btn-primary', {
            type: 'button', id: 'err-add', text: '+  ' + t('errors.addMistake'),
            onclick: function () { entryForm(null, rerender); }
          })
        ]),
        U.el('p.small.muted', { text: t('errors.lead') }),
        U.el('div.row.row-wrap', null, [
          U.el('span.badge.badge-muted', { text: t('errors.nLogged', { n: all.length }) }),
          U.el('span.badge' + (toReview ? '.badge-warn' : '.badge-ok'),
            { text: t('errors.nToReview', { n: toReview }) }),
          U.el('span.badge.badge-muted', { text: t('errors.nMine', { n: mine }) })
        ])
      ]));

      if (!all.length) {
        screen.appendChild(U.el('div.card', { id: 'err-empty' }, [
          ui.empty(t('errors.emptyTitle'), t('errors.emptyBody'),
            U.el('button.btn.btn-primary', {
              type: 'button', text: '+  ' + t('errors.addMistake'),
              onclick: function () { entryForm(null, rerender); }
            }))
        ]));
        return;
      }

      function apply(patch) {
        Object.keys(patch).forEach(function (k) { filter[k] = patch[k]; });
        paint();
      }

      /* ---------------------------------------------------- why breakdown */
      var whyCard = U.el('div.card.stack-sm', { id: 'err-kinds' });
      screen.appendChild(whyCard);

      /* -------------------------------------------------------- the table */
      var toolbar = U.el('div.err-bar');
      var tableHost = U.el('div.table-wrap.xl-wrap');
      var foot = U.el('div.small.muted');
      screen.appendChild(U.el('div.card.stack-sm', { id: 'err-table' }, [toolbar, tableHost, foot]));

      function select(id, current, values, label) {
        var sel = U.el('select.cal-filter', {
          'aria-label': label,
          onchange: function () { var patch = {}; patch[id] = sel.value; apply(patch); }
        });
        values.forEach(function (v) { sel.appendChild(U.el('option', { value: v[0], text: v[1] })); });
        sel.value = current;
        return sel;
      }

      function paintToolbar() {
        U.clear(toolbar);
        var search = U.el('input.input.err-search', {
          type: 'search', value: filter.q, placeholder: t('errors.search')
        });
        /* Only the table is repainted as you type: repainting the toolbar
           would replace the input under the cursor and lose the focus. */
        search.addEventListener('input', U.debounce(function () {
          filter.q = search.value; paintTable();
        }, 200));
        toolbar.appendChild(search);

        toolbar.appendChild(select('reviewed', filter.reviewed, [
          ['all', t('errors.anyReviewed')],
          ['no', t('errors.notReviewed')], ['yes', t('errors.reviewed')]
        ], t('errors.col.reviewed')));
        toolbar.appendChild(select('source', filter.source, [
          ['all', t('errors.anySource')],
          ['mine', t('errors.where.mine')], ['auto', t('errors.fromPlatform')]
        ], t('errors.col.where')));
        toolbar.appendChild(select('section', filter.section, [
          ['all', t('errors.allSections')], ['rw', t('common.rw')], ['math', t('common.math')]
        ], t('errors.col.topic')));
        toolbar.appendChild(select('kind', filter.kind, [['all', t('errors.allKinds')]]
          .concat(KINDS.map(function (k) { return [k, t('err.' + k)]; }))
          .concat([['none', t('errors.unclassified')]]), t('errors.col.why')));
        toolbar.appendChild(U.el('button.btn.btn-sm', {
          type: 'button', text: t('errors.exportCsv'),
          onclick: function () {
            U.download('jts-error-log.csv', csv(visible()), 'text/csv;charset=utf-8');
          }
        }));
      }

      function paintTable() {
        var list = visible();
        U.clear(tableHost);

        var table = U.el('table.table.xl');
        var hr = U.el('tr');
        COLS.forEach(function (c) {
          var on = sort.col === c.id;
          hr.appendChild(U.el('th' + (c.num ? '.num' : '') + (on ? '.is-sorted' : ''), {
            'aria-sort': on ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'
          }, [
            U.el('button.xl-sort', {
              type: 'button',
              text: t('errors.col.' + c.id) + (on ? (sort.dir === 1 ? ' ↑' : ' ↓') : ''),
              onclick: function () {
                if (sort.col === c.id) sort.dir = -sort.dir;
                else { sort.col = c.id; sort.dir = c.id === 'date' ? -1 : 1; }
                paintTable();
              }
            })
          ]));
        });
        table.appendChild(U.el('thead', null, [hr]));

        var body = U.el('tbody');
        list.forEach(function (r) {
          var tick = U.el('input', {
            type: 'checkbox', checked: r.reviewed || null,
            'aria-label': t('errors.col.reviewed')
          });
          /* The tick is the one control in a row that is not "open this": a
             student marking ten things reviewed should not have ten dialogs. */
          tick.addEventListener('click', function (ev) { ev.stopPropagation(); });
          tick.addEventListener('change', function () {
            JTS.attempts.setReviewed(r.id, tick.checked);
            rerender();
          });

          body.appendChild(U.el('tr.xl-row' + (r.reviewed ? '.is-done' : ''), {
            tabindex: '0', role: 'button',
            onclick: function () { (r.manual ? entryForm : autoModal)(r, rerender); },
            onkeydown: function (e) {
              if (e.key === 'Enter') { e.preventDefault(); (r.manual ? entryForm : autoModal)(r, rerender); }
            }
          }, [
            U.el('td.num.xl-n', { text: String(r.n) }),
            U.el('td.xl-nowrap', { text: r.date }),
            U.el('td', null, [
              r.code ? U.el('span.pg-tag', { text: r.code }) : null,
              U.el('span.xl-topic', { text: r.topic || '—' })
            ]),
            U.el('td.xl-stem', { title: r.title }, [
              U.el('span.xl-clip', { text: r.title || '—' }),
              r.note ? U.el('span.xl-note', { text: r.note }) : null
            ]),
            U.el('td', null, [
              r.kind
                ? U.el('span.badge.badge-muted', { text: t('err.' + r.kind) })
                : U.el('span.badge.badge-warn', { text: t('errors.unclassified') })
            ]),
            U.el('td.xl-nowrap', null, [
              U.el('span.badge.' + (r.manual ? 'badge-ok' : 'badge-muted'),
                { text: t('errors.where.' + r.where) })
            ]),
            U.el('td.xl-tick', null, [U.el('label.check', null, [
              tick, U.el('span', { text: t(r.reviewed ? 'errors.reviewed' : 'errors.notReviewed') })
            ])])
          ]));
        });
        table.appendChild(body);
        tableHost.appendChild(table);

        U.clear(foot);
        foot.appendChild(U.el('span', {
          text: list.length === all.length
            ? t('errors.showingAll', { n: all.length })
            : t('errors.showingSome', { n: list.length, total: all.length })
        }));
      }

      function paint() {
        U.clear(whyCard);
        whyCard.appendChild(U.el('div.row-between.row-wrap', null, [
          U.el('div.h3', { text: t('errors.whatKind') }),
          filter.kind !== 'all'
            ? U.el('button.btn.btn-sm', {
                type: 'button', text: t('errors.clearFilter'),
                onclick: function () { apply({ kind: 'all' }); }
              })
            : null
        ]));
        whyCard.appendChild(whyBreakdown(all, filter, apply));
        whyCard.appendChild(U.el('p.xsmall.muted', { text: t('errors.kindsHint') }));
        paintToolbar();
        paintTable();
      }

      paint();
    }
  });
})();
