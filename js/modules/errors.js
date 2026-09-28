/* ==========================================================================
   Screen: Error log (#/errors)

   Every wrong answer the student has given, in one table, with the thing the
   programme actually asks of an error log: not that it happened, but what KIND
   of mistake it was. A student who has missed thirty questions and sees thirty
   red marks learns nothing. One who sees that twenty-two of them are "misread
   the question" and two are a knowledge gap knows exactly what to change on
   Monday, and it is not more content.

   The classification is the student's own, made at the moment of the miss in
   the study-session modal. What this screen adds is the view across all of
   them, and a way to classify the ones that were skipped — an error with no
   kind is the one that teaches nothing, so the table says so plainly and the
   row opens the picker.

   Nothing here is stored twice. The rows are state.errors joined to the
   attempt that produced them and the session that attempt belongs to, so a
   number on this screen cannot drift from the number on any other.

   The table is exportable as CSV because a tutor sitting with a student wants
   it in a spreadsheet next to their own notes, and because a log you cannot
   take with you is a log you stop keeping.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* The same six the study-session picker offers, in the same order. A kind
     that exists here and not there would be a column nobody can ever fill. */
  var KINDS = ['knowledge gap', 'misread', 'calculation', 'strategy', 'time pressure', 'careless'];

  var COLS = [
    { id: 'n',        num: true,  sort: function (r) { return r.n; } },
    { id: 'date',     sort: function (r) { return r.ts; } },
    { id: 'section',  sort: function (r) { return r.section; } },
    { id: 'code',     sort: function (r) { return r.code || '~'; } },
    { id: 'skill',    sort: function (r) { return r.skill; } },
    { id: 'question', sort: function (r) { return r.stem; } },
    { id: 'kind',     sort: function (r) { return r.kind || '~'; } },
    { id: 'where',    sort: function (r) { return r.where; } },
    { id: 'status',   sort: function (r) { return r.status; } }
  ];

  /* ------------------------------------------------------------- the rows */

  /* skillId -> the lesson code that drills it. The programme tags an error by
     lesson code, which is the whole point of the codes: "M2.3 again" is an
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
     table full of &amp;radic;. Assigned as innerHTML on a detached node that is
     never inserted, and read back as text. */
  var scratch = null;
  function stemOf(q) {
    if (!q) return '';
    scratch = scratch || document.createElement('div');
    scratch.innerHTML = String(q.stem || '').replace(/<[^>]*>/g, ' ');
    return (scratch.textContent || '').replace(/\s+/g, ' ').trim();
  }

  /** Where the miss happened, as a word a student recognises. */
  function whereOf(session, state) {
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

  /**
   * One row per error, newest first, with everything the table prints already
   * resolved — sorting nine columns through three lookups each would walk the
   * attempt list nine times for nothing.
   */
  function buildRows(state) {
    var now = Date.now();
    var attempts = {}, sessions = {};
    (state.attempts || []).forEach(function (a) { attempts[a.id] = a; });
    (state.sessions || []).forEach(function (s) { sessions[s.id] = s; });

    var out = (state.errors || []).slice().sort(function (a, b) { return b.ts - a.ts; })
      .map(function (e, i) {
        var att = attempts[e.attemptId] || null;
        var ses = att && sessions[att.sessionId] ? sessions[att.sessionId] : null;
        var skill = JTS.skills.get(e.skillId);
        var q = JTS.bank ? JTS.bank.get(e.questionId) : null;
        return {
          n: i + 1,
          err: e,
          ts: e.ts,
          date: U.fmtDate(new Date(e.ts), S.settings().uiLang),
          section: skill ? skill.section : 'rw',
          code: codeOf(e.skillId),
          skill: JTS.skills.name(e.skillId) || e.skillId,
          stem: stemOf(q),
          question: q,
          attempt: att,
          kind: e.errorType || null,
          where: whereOf(ses, state),
          status: e.resolvedAt ? 'cleared' : (e.reviewDueAt <= now ? 'due' : 'open')
        };
      });
    /* Numbered newest-first so row 1 is the most recent miss, which is the one
       a student is actually looking for when they open this. */
    return out;
  }

  /* -------------------------------------------------------- what kind card */

  /**
   * The answer to the question this screen exists for. Counts by kind, largest
   * first, each a button that filters the table — because the next thing a
   * student does after seeing "misread × 22" is want to look at those 22.
   */
  function kindBreakdown(rows, filter, apply) {
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
      var cell = U.el('button.err-kind' + (on ? '.is-on' : '') + (k === 'none' ? '.is-none' : ''), {
        type: 'button', 'aria-pressed': String(on),
        onclick: function () { apply({ kind: on ? 'all' : k }); }
      }, [
        U.el('div.err-kind-top', null, [
          U.el('span.err-kind-name', { text: k === 'none' ? t('errors.unclassified') : t('err.' + k) }),
          U.el('b.err-kind-n', { text: String(n) })
        ]),
        ui.bar(n, total || 1, k === 'none' ? '' : 'bar-ok'),
        U.el('div.err-kind-pct', { text: U.pct(n, total) + '%' })
      ]);
      grid.appendChild(cell);
    });
    return grid;
  }

  /* ------------------------------------------------------------ the table */

  function csv(rows) {
    function cell(v) {
      var s = v === null || v === undefined ? '' : String(v);
      return /[",\n;]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    }
    var head = COLS.map(function (c) { return cell(t('errors.col.' + c.id)); }).join(',');
    var body = rows.map(function (r) {
      return [
        r.n, r.date, t('common.' + (r.section === 'math' ? 'math' : 'rw')),
        r.code || '', r.skill, r.stem,
        r.kind ? t('err.' + r.kind) : t('errors.unclassified'),
        t('errors.where.' + r.where), t('errors.status.' + r.status)
      ].map(cell).join(',');
    });
    /* The BOM is what makes Excel open a UTF-8 CSV without mangling Russian
       and Kazakh into question marks. */
    return '﻿' + [head].concat(body).join('\r\n');
  }

  /** The miss itself: the question, what was picked, what was right. */
  function rowModal(row, rerender) {
    var q = row.question;
    var att = row.attempt;
    var body = U.el('div.stack-sm');

    body.appendChild(U.el('div.row.row-wrap', null, [
      U.el('span.badge.badge-muted', { text: row.date }),
      row.code ? U.el('span.pg-tag', { text: row.code }) : null,
      U.el('span.badge.badge-muted', { text: row.skill }),
      U.el('span.badge.badge-muted', { text: t('errors.where.' + row.where) })
    ]));

    if (q && q.passage) body.appendChild(U.el('div.q-passage.small', { html: q.passage }));
    /* The table flattens a stem to one line of text so nine columns fit; here
       there is room for the real thing, exponents and radicals included. */
    body.appendChild(q && q.stem
      ? U.el('div.err-stem', { html: q.stem })
      : U.el('p', { text: t('errors.questionGone') }));

    if (q && q.options && att) {
      body.appendChild(U.el('div.stack-sm', null, q.options.map(function (opt, i) {
        var letter = 'ABCD'[i];
        var isRight = q.answer === letter;
        var isPicked = att.selected === letter;
        return U.el('div.err-opt' + (isRight ? '.is-right' : '') + (isPicked && !isRight ? '.is-picked' : ''), null, [
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

    /* The reason this screen can do something and not only report. An error
       with no kind is the one that teaches nothing, and the moment a student
       is looking straight at it is the moment they can still say why. */
    var chosen = row.kind;
    var picker = U.el('div.stack-sm');
    picker.appendChild(U.el('div.stat-label', { text: t('errors.setKind') }));
    var opts = U.el('div.err-pick');
    KINDS.forEach(function (k) {
      /* Selected is its own state and not .btn-primary: the modal already has
         a primary button, and two identical-looking primaries where one saves
         and one only selects is a trap. */
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
    picker.appendChild(opts);
    body.appendChild(picker);

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
              else S.update(function (st) {
                st.errors.forEach(function (e) { if (e.id === row.err.id) e.errorType = chosen; });
              });
              ui.toast(t('errors.kindSaved'), 'ok');
            }
            m.close();
            rerender();
          }
        })
      ]
    });
  }

  /* --------------------------------------------------------------- screen */

  JTS.router.register('#/errors', {
    title: 'errors.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      var filter = { section: 'all', kind: 'all', status: 'all', q: '' };
      var sort = { col: 'date', dir: -1 };

      var screen = U.el('div.container.container-wide.screen.stack');
      root.appendChild(screen);

      function rerender() {
        JTS.router.render();
      }

      var all = buildRows(state);

      function visible() {
        var needle = filter.q.trim().toLowerCase();
        var list = all.filter(function (r) {
          if (filter.section !== 'all' && r.section !== filter.section) return false;
          if (filter.kind !== 'all' && (r.kind || 'none') !== filter.kind) return false;
          if (filter.status !== 'all' && r.status !== filter.status) return false;
          if (needle && (r.skill + ' ' + r.stem + ' ' + (r.code || '')).toLowerCase().indexOf(needle) < 0) {
            return false;
          }
          return true;
        });
        var col = COLS.filter(function (c) { return c.id === sort.col; })[0] || COLS[1];
        return list.sort(function (a, b) {
          var x = col.sort(a), y = col.sort(b);
          return (x < y ? -1 : x > y ? 1 : 0) * sort.dir;
        });
      }

      /* ------------------------------------------------------------- head */
      var open = all.filter(function (r) { return r.status !== 'cleared'; }).length;
      var unclassified = all.filter(function (r) { return !r.kind; }).length;

      screen.appendChild(U.el('div.card.stack-sm', { id: 'err-head' }, [
        U.el('div.eyebrow', { text: t('errors.eyebrow') }),
        U.el('div.h2', { text: t('errors.title') }),
        U.el('p.small.muted', { text: t('errors.lead') }),
        U.el('div.row.row-wrap', null, [
          U.el('span.badge.badge-muted', { text: t('errors.nLogged', { n: all.length }) }),
          U.el('span.badge' + (open ? '.badge-warn' : '.badge-muted'), { text: t('errors.nOpen', { n: open }) }),
          unclassified
            ? U.el('span.badge.badge-warn', { text: t('errors.nUnclassified', { n: unclassified }) })
            : null
        ])
      ]));

      if (!all.length) {
        screen.appendChild(U.el('div.card', { id: 'err-empty' }, [
          ui.empty(t('errors.emptyTitle'), t('errors.emptyBody'),
            U.el('a.btn.btn-primary', { href: '#/practice', text: t('nav.practice') }))
        ]));
        return;
      }

      /* --------------------------------------------------- what kind card */
      function apply(patch) {
        Object.keys(patch).forEach(function (k) { filter[k] = patch[k]; });
        paint();
      }

      var kindsCard = U.el('div.card.stack-sm', { id: 'err-kinds' });
      screen.appendChild(kindsCard);

      /* ------------------------------------------------------- the table */
      var toolbar = U.el('div.err-bar');
      var tableHost = U.el('div.table-wrap.xl-wrap');
      var foot = U.el('div.small.muted');
      screen.appendChild(U.el('div.card.stack-sm', { id: 'err-table' }, [toolbar, tableHost, foot]));

      function select(id, current, values, label) {
        var sel = U.el('select.cal-filter', {
          'aria-label': label,
          onchange: function () {
            var patch = {}; patch[id] = sel.value; apply(patch);
          }
        });
        values.forEach(function (v) {
          sel.appendChild(U.el('option', { value: v[0], text: v[1] }));
        });
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
        toolbar.appendChild(select('section', filter.section, [
          ['all', t('errors.allSections')], ['rw', t('common.rw')], ['math', t('common.math')]
        ], t('errors.col.section')));
        toolbar.appendChild(select('kind', filter.kind, [['all', t('errors.allKinds')]]
          .concat(KINDS.map(function (k) { return [k, t('err.' + k)]; }))
          .concat([['none', t('errors.unclassified')]]), t('errors.col.kind')));
        toolbar.appendChild(select('status', filter.status, [
          ['all', t('errors.allStatuses')],
          ['due', t('errors.status.due')], ['open', t('errors.status.open')],
          ['cleared', t('errors.status.cleared')]
        ], t('errors.col.status')));
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
          var tr = U.el('tr.xl-row', {
            tabindex: '0', role: 'button',
            onclick: function () { rowModal(r, rerender); },
            onkeydown: function (e) {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); rowModal(r, rerender); }
            }
          }, [
            U.el('td.num.xl-n', { text: String(r.n) }),
            U.el('td.xl-nowrap', { text: r.date }),
            U.el('td', { text: t('common.' + (r.section === 'math' ? 'math' : 'rw')) }),
            U.el('td', null, [r.code ? U.el('span.pg-tag', { text: r.code }) : U.el('span.muted', { text: '—' })]),
            U.el('td', { text: r.skill }),
            U.el('td.xl-stem', { title: r.stem }, [U.el('span.xl-clip', { text: r.stem })]),
            U.el('td', null, [
              r.kind
                ? U.el('span.badge.badge-muted', { text: t('err.' + r.kind) })
                : U.el('span.badge.badge-warn', { text: t('errors.unclassified') })
            ]),
            U.el('td', { text: t('errors.where.' + r.where) }),
            U.el('td', null, [
              U.el('span.badge.' + (r.status === 'cleared' ? 'badge-ok' :
                r.status === 'due' ? 'badge-warn' : 'badge-muted'),
              { text: t('errors.status.' + r.status) })
            ])
          ]);
          body.appendChild(tr);
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
        U.clear(kindsCard);
        kindsCard.appendChild(U.el('div.row-between.row-wrap', null, [
          U.el('div.h3', { text: t('errors.whatKind') }),
          filter.kind !== 'all'
            ? U.el('button.btn.btn-sm', {
                type: 'button', text: t('errors.clearFilter'),
                onclick: function () { apply({ kind: 'all' }); }
              })
            : null
        ]));
        kindsCard.appendChild(kindBreakdown(all, filter, apply));
        kindsCard.appendChild(U.el('p.xsmall.muted', { text: t('errors.kindsHint') }));
        paintToolbar();
        paintTable();
      }

      paint();
    }
  });
})();
