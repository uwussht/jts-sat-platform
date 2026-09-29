/* ==========================================================================
   Screen: Error log (#/errors)

   The log the programme asks a 1500 student to keep, and it is entirely
   theirs. A row answers four things and nothing else:

     the mistake  ·  which topic  ·  why it happened  ·  reviewed yet or not

   The student writes every row. The platform does not put anything in here on
   its own, and that is the point rather than a limitation: writing the mistake
   down in your own words IS the review, and a row generated for you is a row
   you did not think about. It also means the log covers everything — the
   misses on paper, in Bluebook, in a lesson with a tutor — and not only the
   fraction that happened where the software could see.

   The spaced-review machinery is a different thing and lives elsewhere. A
   question missed inside the platform still goes into the review queue that
   #/practice and the plan's review sessions serve back; it just does not
   appear on this screen, because this screen is a notebook and not a report.

   Reviewed is one column with one meaning: the student has been back over it.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* The six reasons, shared with the study-session picker so a student meets
     the same vocabulary in both places. */
  var KINDS = ['knowledge gap', 'misread', 'calculation', 'strategy', 'time pressure', 'careless'];

  var COLS = [
    { id: 'n',        num: true, sort: function (r) { return r.n; } },
    { id: 'date',     sort: function (r) { return r.ts; } },
    { id: 'topic',    sort: function (r) { return r.topic; } },
    { id: 'mistake',  sort: function (r) { return r.title; } },
    { id: 'why',      sort: function (r) { return r.kind || '~'; } },
    { id: 'reviewed', sort: function (r) { return r.reviewed ? 1 : 0; } }
  ];

  /* ------------------------------------------------------------- the rows */

  function sectionOfCode(code) {
    var P = JTS.data.programme;
    var lesson = code && P && P.byCode(code);
    return lesson ? P.sectionOf(lesson) : null;
  }

  /** The topic a row belongs to: a lesson of the course, or the student's own
      words when the course has no name for it. */
  function topicOf(err) {
    if (err.topicCode) {
      var lesson = JTS.data.programme && JTS.data.programme.byCode(err.topicCode);
      return {
        code: err.topicCode,
        text: lesson ? JTS.i18n.pick(lesson.t, S.settings().uiLang) : err.topicCode
      };
    }
    return { code: null, text: err.topicText || '' };
  }

  /**
   * One row per mistake the student has written down, newest first. Only
   * manual entries: what the platform records for spaced review is not a
   * notebook entry and does not belong in the student's own log.
   */
  function buildRows(state) {
    return (state.errors || []).filter(function (e) { return e.manual; })
      .sort(function (a, b) { return b.ts - a.ts; })
      .map(function (e, i) {
        var topic = topicOf(e);
        return {
          n: i + 1,
          err: e,
          id: e.id,
          ts: e.ts,
          date: U.fmtDate(new Date(e.ts), S.settings().uiLang),
          section: sectionOfCode(e.topicCode),
          code: topic.code,
          topic: topic.text,
          title: e.title || '',
          note: e.note || '',
          kind: e.errorType || null,
          reviewed: !!e.resolvedAt
        };
      });
  }

  /* ------------------------------------------------------- why breakdown */

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
    var chosenKind = e ? (e.errorType || null) : null;

    /* A textarea's initial value is its text content, not a value attribute —
       setting the attribute silently does nothing. */
    var what = U.el('textarea.input', {
      rows: '2', text: e ? (e.title || '') : '', placeholder: t('errors.whatPlaceholder')
    });
    var topicSel = U.el('select.input');
    topicOptions(topicSel, e ? (e.topicCode || '') : '');
    var topicFree = U.el('input.input', {
      type: 'text', value: e ? (e.topicText || '') : '',
      placeholder: t('errors.topicFreePlaceholder')
    });
    function syncTopic() { topicFree.hidden = !!topicSel.value; }
    topicSel.addEventListener('change', syncTopic);
    syncTopic();

    var why = U.el('div.err-pick');
    KINDS.forEach(function (k) {
      /* Selected is its own state and not .btn-primary: the dialog already has
         a primary button, and two identical-looking primaries where one saves
         and one only selects is a trap. */
      var b = U.el('button.btn.btn-sm.err-pick-opt' + (chosenKind === k ? '.is-on' : ''), {
        type: 'button', text: t('err.' + k), 'aria-pressed': String(chosenKind === k),
        onclick: function () {
          chosenKind = chosenKind === k ? null : k;
          [].forEach.call(why.children, function (n) {
            n.classList.remove('is-on'); n.setAttribute('aria-pressed', 'false');
          });
          if (chosenKind === k) { b.classList.add('is-on'); b.setAttribute('aria-pressed', 'true'); }
        }
      });
      why.appendChild(b);
    });
    var note = U.el('textarea.input', {
      rows: '2', text: e ? (e.note || '') : '', placeholder: t('errors.whyPlaceholder')
    });

    var problem = U.el('p.small.danger', { hidden: true });
    var content = U.el('div.stack', null, [
      problem,
      ui.field(t('errors.fieldWhat'), what, t('errors.fieldWhatHint')),
      ui.field(t('errors.fieldTopic'), U.el('div.stack-sm', null, [topicSel, topicFree])),
      ui.field(t('errors.fieldWhy'), U.el('div.stack-sm', null, [why, note]), t('errors.fieldWhyHint'))
    ]);

    var actions = [];
    /* Deleting is on the row and not in the table: a stray press in a grid of
       twenty rows should never be able to throw one away. */
    if (e) {
      actions.push(U.el('button.btn.btn-danger', {
        type: 'button', text: t('common.delete'),
        onclick: function () {
          ui.confirm({
            title: t('errors.deleteTitle'),
            message: t('errors.deleteBody'),
            okText: t('common.delete')
          }).then(function (yes) {
            if (!yes) return;
            JTS.attempts.removeError(e.id);
            m.close();
            ui.toast(t('errors.deleted'), 'ok');
            done();
          });
        }
      }));
    }
    actions.push(U.el('button.btn', {
      type: 'button', text: t('common.cancel'), onclick: function () { m.close(); }
    }));
    actions.push(U.el('button.btn.btn-primary', {
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
          errorType: chosenKind
        };
        if (e) JTS.attempts.updateError(e.id, rec);
        else JTS.attempts.addManualError(rec);
        m.close();
        ui.toast(t(e ? 'common.saved' : 'errors.added'), 'ok');
        done();
      }
    }));

    var m = ui.modal({
      title: row ? t('errors.editMistake') : t('errors.addMistake'),
      content: content,
      actions: actions
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

      var filter = { section: 'all', kind: 'all', reviewed: 'all', q: '' };
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

      function addButton(cls) {
        return U.el('button.btn.' + cls, {
          type: 'button', id: 'err-add', text: '+  ' + t('errors.addMistake'),
          onclick: function () { entryForm(null, rerender); }
        });
      }

      /* ------------------------------------------------------------- head */
      var toReview = all.filter(function (r) { return !r.reviewed; }).length;

      screen.appendChild(U.el('div.card.stack-sm', { id: 'err-head' }, [
        U.el('div.eyebrow', { text: t('errors.eyebrow') }),
        U.el('div.row-between.row-wrap', null, [
          U.el('div.h2', { text: t('errors.title') }),
          addButton('btn-primary')
        ]),
        U.el('p.small.muted', { text: t('errors.lead') }),
        all.length
          ? U.el('div.row.row-wrap', null, [
              U.el('span.badge.badge-muted', { text: t('errors.nLogged', { n: all.length }) }),
              U.el('span.badge' + (toReview ? '.badge-warn' : '.badge-ok'),
                { text: t('errors.nToReview', { n: toReview }) })
            ])
          : null
      ]));

      if (!all.length) {
        screen.appendChild(U.el('div.card', { id: 'err-empty' }, [
          ui.empty(t('errors.emptyTitle'), t('errors.emptyBody'), addButton('btn-primary'))
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
            onclick: function () { entryForm(r, rerender); },
            onkeydown: function (e) {
              if (e.key === 'Enter') { e.preventDefault(); entryForm(r, rerender); }
            }
          }, [
            U.el('td.num.xl-n', { text: String(r.n) }),
            U.el('td.xl-nowrap', { text: r.date }),
            U.el('td', null, [
              r.code ? U.el('span.pg-tag', { text: r.code }) : null,
              U.el('span.xl-topic', { text: r.topic || '—' })
            ]),
            U.el('td.xl-stem', { title: r.title }, [
              U.el('span.xl-clip', { text: r.title }),
              r.note ? U.el('span.xl-note', { text: r.note }) : null
            ]),
            U.el('td', null, [
              r.kind
                ? U.el('span.badge.badge-muted', { text: t('err.' + r.kind) })
                : U.el('span.badge.badge-warn', { text: t('errors.unclassified') })
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
