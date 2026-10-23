/* ==========================================================================
   Screen: Work on mistakes (#/errors)

   Every question the student got wrong or left blank, from everywhere —
   practice, lessons, the weekly test, simulations and past papers — plus the
   mistakes they write down themselves (from paper, Bluebook, a lesson).
   Three blocks:

     1  the list: a snippet of the question, section and skill, difficulty,
        the reason the student gave, where it happened, the date, reviewed
        or not — with a filter for each of those
     2  the review of one question: the whole question, their answer and the
        right one, the explanation, Desmos for Math, "Solve again", "Mark
        reviewed", "Add to training"
     3  the statistics, with the conclusions written above the bars: the
        reason the student gives is the most useful cut, because it is theirs

   "Did not answer" is its own kind, not a reason: a blank in a timed set is
   a timing problem, not a misreading. Answering a question right later
   marks it reviewed; it never leaves the history.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  /* The six reasons, shared with the study-session picker so a student meets
     the same vocabulary in both places. */
  var KINDS = ['knowledge gap', 'misread', 'calculation', 'strategy', 'time pressure', 'careless'];
  var SOURCES = ['practice', 'lesson', 'weekly', 'simulation', 'paper', 'diagnostic', 'manual'];
  var DIFF = { 1: 'Easy', 2: 'Medium', 3: 'Hard' };

  var PER_PAGE = 10;
  var page = 1;
  /* The filters, kept while the screen is redrawn (ticking one reviewed). */
  var filter = null;
  function blankFilter() {
    return { section: 'all', skill: 'all', difficulty: 'all', kind: 'all', source: 'all',
             status: 'all', from: '', to: '', q: '' };
  }

  function lang() { return S.settings().uiLang; }
  function plain(html) {
    var d = document.createElement('div');
    d.innerHTML = html || '';
    return (d.textContent || '').replace(/\s+/g, ' ').trim();
  }

  /* ------------------------------------------------------------- the rows */

  function sectionOfCode(code) {
    var P = JTS.data.programme;
    var lesson = code && P && P.byCode(code);
    return lesson ? P.sectionOf(lesson) : null;
  }

  /** Where each session happened: practice, a lesson, the weekly test, a
      simulation, a past paper, the diagnostic. */
  function sourceBySession(state) {
    var map = {};
    (state.sessions || []).forEach(function (sum) {
      var m = sum.meta || {};
      map[sum.id] = m.lessonCode ? 'lesson'
        : sum.kind === 'weekly' ? 'weekly'
        : sum.kind === 'diagnostic' ? 'diagnostic'
        : sum.kind === 'mock' ? 'simulation'
        : 'practice';
    });
    (JTS.mock ? JTS.mock.all() : []).forEach(function (run) {
      (run.modules || []).forEach(function (mod) {
        if (mod.sessionId) map[mod.sessionId] = run.paperId ? 'paper' : 'simulation';
      });
    });
    return map;
  }

  /**
   * One row per mistake, newest first. A miss on the platform carries its
   * question; a mistake written by hand carries the student's own words.
   */
  function buildRows(state) {
    var bySession = sourceBySession(state);
    var attemptById = {};
    (state.attempts || []).forEach(function (a) { attemptById[a.id] = a; });
    return (state.errors || []).filter(function (e) { return !e.dismissed; })
      .sort(function (a, b) { return b.ts - a.ts; })
      .map(function (e) {
        var q = e.questionId ? JTS.bank.get(e.questionId) : null;
        var att = e.attemptId ? attemptById[e.attemptId] : null;
        var sessionId = e.sessionId || (att && att.sessionId);
        var skill = (q && JTS.skills.get(q.skillId)) || (e.skillId && JTS.skills.get(e.skillId)) || null;
        var lesson = e.topicCode && JTS.data.programme ? JTS.data.programme.byCode(e.topicCode) : null;
        return {
          err: e, q: q, attempt: att, id: e.id, ts: e.ts,
          date: U.iso(new Date(e.ts)),
          dateText: U.fmtDate(new Date(e.ts), lang()),
          section: (q && q.section) || (skill && skill.section) || sectionOfCode(e.topicCode),
          skillId: skill ? skill.id : null,
          skill: skill ? skill.name_en : (lesson ? JTS.i18n.pick(lesson.t, lang()) : (e.topicText || '')),
          code: e.topicCode || null,
          difficulty: q ? q.difficulty || null : null,
          title: e.manual ? (e.title || '') : (q ? plain(q.stem || q.passage).slice(0, 140) : ''),
          note: e.note || '',
          kind: e.unanswered ? 'unanswered' : (e.errorType || null),
          source: e.manual ? 'manual' : (bySession[sessionId] || 'practice'),
          reviewed: !!e.resolvedAt
        };
      });
  }

  function matches(r, f) {
    if (f.section !== 'all' && r.section !== f.section) return false;
    if (f.skill !== 'all' && r.skillId !== f.skill) return false;
    if (f.difficulty !== 'all' && String(r.difficulty) !== f.difficulty) return false;
    if (f.kind !== 'all' && (r.kind || 'none') !== f.kind) return false;
    if (f.source !== 'all' && r.source !== f.source) return false;
    if (f.status === 'open' && r.reviewed) return false;
    if (f.status === 'done' && !r.reviewed) return false;
    if (f.from && r.date < f.from) return false;
    if (f.to && r.date > f.to) return false;
    var needle = f.q.trim().toLowerCase();
    if (needle && (r.skill + ' ' + r.title + ' ' + r.note + ' ' + (r.code || '')).toLowerCase().indexOf(needle) < 0) return false;
    return true;
  }

  /* -------------------------------------------------------- the statistics */

  function countBy(rows, key) {
    var out = {};
    rows.forEach(function (r) { var k = r[key] || 'none'; out[k] = (out[k] || 0) + 1; });
    return out;
  }

  /**
   * What the numbers mean, in sentences, above the bars. The reasons are the
   * student's own; "no reason given" is counted in the share and never
   * quietly dropped.
   */
  function conclusions(rows) {
    var out = [];
    var answered = rows.filter(function (r) { return r.kind !== 'unanswered'; });
    var kinds = countBy(answered, 'kind');
    var total = answered.length;
    var top = KINDS.slice().sort(function (a, b) { return (kinds[b] || 0) - (kinds[a] || 0); })[0];
    if (total >= 5 && kinds[top] >= 3 && kinds[top] / total >= 0.3) {
      out.push(t('errors.insight.' + top.replace(' ', '-')));
    }
    /* A knowledge gap that sits in one skill: that topic is not closed. */
    var gaps = rows.filter(function (r) { return r.kind === 'knowledge gap' && r.skillId; });
    var bySkill = countBy(gaps, 'skillId');
    Object.keys(bySkill).forEach(function (id) {
      if (bySkill[id] >= 3 && bySkill[id] / gaps.length >= 0.5) {
        out.push(t('errors.insight.gapSkill', { skill: JTS.skills.get(id).name_en }));
      }
    });
    var blank = rows.filter(function (r) { return r.kind === 'unanswered'; }).length;
    if (blank >= 5 && blank / rows.length >= 0.25) out.push(t('errors.insight.unanswered', { n: blank }));
    var week = 7 * U.DAY_MS, now = Date.now();
    var thisWeek = rows.filter(function (r) { return r.ts >= now - week; }).length;
    var lastWeek = rows.filter(function (r) { return r.ts < now - week && r.ts >= now - 2 * week; }).length;
    if (lastWeek >= 3 && thisWeek < lastWeek) out.push(t('errors.insight.fewer', { now: thisWeek, before: lastWeek }));
    if (!out.length) out.push(t(rows.length < 5 ? 'errors.insight.tooFew' : 'errors.insight.none'));
    return out;
  }

  function bars(title, counts, labelOf, total, onPick, active) {
    var keys = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    return U.el('div.stack-sm.el-stat', null, [U.el('div.label', { text: title })].concat(keys.map(function (k) {
      var on = active === k;
      return U.el('button.el-kind' + (on ? '.is-on' : '') + (k === 'none' ? '.is-none' : ''), {
        type: 'button', 'aria-pressed': String(on), onclick: function () { onPick(on ? 'all' : k); }
      }, [
        U.el('span.el-kind-name', { text: labelOf(k) }),
        U.el('b.el-kind-n', { text: String(counts[k]) }),
        U.el('span.el-kind-bar', null, [U.el('i', { style: 'width:' + U.pct(counts[k], total) + '%' })])
      ]);
    })));
  }

  function kindLabel(k) {
    return k === 'none' ? t('errors.unclassified') : k === 'unanswered' ? t('errors.kind.unanswered') : t('err.' + k);
  }

  /* --------------------------------------------------------------- review */

  /**
   * One question, opened from the list: the whole question, what was chosen
   * and what was right, the explanation; then solve it again, mark it
   * reviewed, or practise its skill.
   */
  function reviewModal(r, done) {
    var q = r.q;
    var m;
    var a = r.attempt;
    var body = U.el('div.stack', null, [
      U.el('div.row.row-wrap', null, [
        r.skill ? U.el('span.badge', { text: r.skill }) : null,
        r.difficulty ? U.el('span.badge.badge-muted', { text: DIFF[r.difficulty] }) : null,
        U.el('span.badge.badge-muted', { text: t('errors.src.' + r.source) }),
        U.el('span.badge' + (r.kind === 'unanswered' ? '.badge-warn' : '.badge-muted'), { text: kindLabel(r.kind || 'none') })
      ]),
      q.passage ? U.el('div.q-passage.el-q', { html: q.passage }) : null,
      U.el('div.q-stem.el-q', { html: q.stem || '' }),
      JTS.studyHelp.explanationBody(q, a
        ? { selected: a.selected, submitted: true, correct: a.correct }
        : { selected: null, submitted: false })
    ]);
    var actions = [];
    if (q.section === 'math') {
      actions.push(U.el('button.btn', { type: 'button', text: t('errors.desmos'),
        onclick: function () { JTS.desmos.show(); } }));
    }
    actions.push(U.el('button.btn', { type: 'button', text: t('errors.addTraining'),
      onclick: function () { m.close(); JTS.practice.startTopic([q.skillId], 10); } }));
    actions.push(U.el('button.btn', { type: 'button', text: r.reviewed ? t('errors.markOpen') : t('errors.markReviewed'),
      onclick: function () { JTS.attempts.setReviewed(r.id, !r.reviewed); m.close(); done(); } }));
    actions.push(U.el('button.btn.btn-primary', { type: 'button', text: t('practice.solveAgain'),
      onclick: function () {
        m.close();
        JTS.session.start({ kind: 'practice', mode: 'study', title: r.skill || t('errors.title'),
          questionIds: [q.id], softTimer: true, returnHash: '#/errors', finishHash: '#/errors',
          meta: { source: 'errors' } });
      } }));
    m = ui.modal({ title: t('errors.reviewTitle'), content: body, actions: actions, wide: true });
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
            /* A row written here is removed outright; a miss on the platform
               leaves the list but stays in the review queue. */
            if (e.manual) JTS.attempts.removeError(e.id);
            else JTS.attempts.updateError(e.id, { dismissed: true });
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
    var head = ['errors.col.date', 'common.section', 'errors.col.topic', 'errors.col.difficulty',
      'errors.col.mistake', 'errors.col.why', 'errors.col.source', 'errors.col.reviewed', 'errors.col.note']
      .map(function (k) { return cell(t(k)); }).join(',');
    var body = rows.map(function (r) {
      return [
        r.dateText, r.section ? t(r.section === 'rw' ? 'common.rw' : 'common.math') : '',
        (r.code ? r.code + ' · ' : '') + r.skill, r.difficulty ? DIFF[r.difficulty] : '', r.title,
        kindLabel(r.kind || 'none'), t('errors.src.' + r.source),
        t(r.reviewed ? 'errors.reviewed' : 'errors.notReviewed'), r.note
      ].map(cell).join(',');
    });
    /* The BOM is what makes Excel open a UTF-8 CSV without mangling Russian
       and Kazakh into question marks. */
    return '\ufeff' + [head].concat(body).join('\r\n');
  }

  /* --------------------------------------------------------------- screen */

  JTS.router.register('#/errors', {
    title: 'errors.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }
      JTS.attempts.backfillUnanswered();
      state = S.state();

      /* ?skill=… (from a skill's "N in the queue"), ?status=open (from the
         dashboard) arrive as filters. */
      var query = JTS.router.parse().query;
      if (!filter || query.skill || query.status) {
        filter = blankFilter();
        if (query.skill && JTS.skills.get(query.skill)) filter.skill = query.skill;
        if (query.status === 'open') filter.status = 'open';
        if (query.skill || query.status) { try { history.replaceState(null, '', '#/errors'); } catch (e) {} }
      }

      var screen = U.el('div.container.container-wide.screen.stack');
      root.appendChild(screen);
      function rerender() { JTS.router.render(); }

      var all = buildRows(state);
      function addButton(cls) {
        return U.el('button.btn.' + cls, {
          type: 'button', id: 'err-add', text: '+  ' + t('errors.addMistake'),
          onclick: function () { entryForm(null, rerender); }
        });
      }

      screen.appendChild(U.el('div.err-top', { id: 'err-head' }, [
        U.el('div.stack-sm', null, [
          U.el('div.eyebrow', { text: t('errors.eyebrow') }),
          U.el('p.small.muted', { text: t('errors.lead'), style: 'margin:0' })
        ]),
        addButton('btn-primary')
      ]));

      /* A new student sees what the page will hold, not a blank. */
      if (!all.length) {
        screen.appendChild(U.el('div.card.stack', { id: 'err-empty' }, [
          ui.empty(t('errors.emptyTitle'), t('errors.emptyBody'), addButton('btn-primary'))
        ]));
        return;
      }

      function apply(patch) {
        Object.keys(patch).forEach(function (k) { filter[k] = patch[k]; });
        page = 1;
        paint();
      }

      var insights = U.el('div.card.stack-sm', { id: 'err-insights' });
      var stats = U.el('div.card.stack', { id: 'err-stats' });
      var toolbar = U.el('div.err-bar.err-filters');
      var listHost = U.el('div.el-list');
      var foot = U.el('div.small.muted.el-foot');
      screen.appendChild(insights);
      screen.appendChild(U.el('div.el-layout', null, [
        U.el('aside.el-side', null, [stats]),
        U.el('div.stack-sm.el-main', { id: 'err-table' }, [toolbar, listHost, foot])
      ]));

      function select(key, values, label) {
        var sel = U.el('select.cal-filter', {
          'aria-label': label, onchange: function () { var p = {}; p[key] = sel.value; apply(p); }
        });
        values.forEach(function (v) { sel.appendChild(U.el('option', { value: v[0], text: v[1] })); });
        sel.value = filter[key];
        return sel;
      }

      function paintInsights() {
        U.clear(insights);
        insights.appendChild(U.el('div.eyebrow', { text: t('errors.insightsTitle') }));
        conclusions(all).forEach(function (line) {
          insights.appendChild(U.el('p.el-insight', { text: line }));
        });
      }

      function paintStats() {
        U.clear(stats);
        var reviewed = all.filter(function (r) { return r.reviewed; }).length;
        var share = U.pct(reviewed, all.length);
        stats.appendChild(U.el('div.el-summary', { id: 'err-kpis' }, [
          U.el('div.el-ring', { style: '--p:' + share, role: 'img', 'aria-label': t('errors.kpi.reviewed') + ' ' + share + '%' }, [
            U.el('b', { text: share + '%' }), U.el('span', { text: t('errors.kpi.reviewed') })
          ]),
          U.el('div.el-counts', null, [
            [t('errors.kpi.logged'), all.length], [t('errors.kpi.toReview'), all.length - reviewed], [t('errors.kpi.reviewed'), reviewed]
          ].map(function (c) { return U.el('div', null, [U.el('b', { text: String(c[1]) }), U.el('span', { text: c[0] })]); }))
        ]));
        stats.appendChild(bars(t('errors.byReason'), countBy(all, 'kind'), kindLabel, all.length,
          function (k) { apply({ kind: k }); }, filter.kind));
        stats.appendChild(bars(t('errors.bySection'), countBy(all.filter(function (r) { return r.section; }), 'section'),
          function (k) { return t(k === 'rw' ? 'common.rw' : 'common.math'); }, all.length,
          function (k) { apply({ section: k }); }, filter.section));
        var bySkill = countBy(all.filter(function (r) { return r.skillId; }), 'skillId');
        var top = {};
        Object.keys(bySkill).sort(function (a, b) { return bySkill[b] - bySkill[a]; }).slice(0, 5)
          .forEach(function (k) { top[k] = bySkill[k]; });
        if (Object.keys(top).length) {
          stats.appendChild(bars(t('errors.topSkills'), top, function (k) { return JTS.skills.get(k).name_en; }, all.length,
            function (k) { apply({ skill: k }); }, filter.skill));
        }
        var byDiff = countBy(all.filter(function (r) { return r.difficulty; }), 'difficulty');
        if (Object.keys(byDiff).length) {
          stats.appendChild(bars(t('errors.byDifficulty'), byDiff, function (k) { return DIFF[k]; }, all.length,
            function (k) { apply({ difficulty: k }); }, filter.difficulty));
        }
      }

      function paintToolbar() {
        U.clear(toolbar);
        var search = U.el('input.input.err-search', { type: 'search', value: filter.q, placeholder: t('errors.search') });
        search.addEventListener('input', U.debounce(function () { filter.q = search.value; page = 1; paintList(); }, 200));
        toolbar.appendChild(search);
        toolbar.appendChild(select('section', [['all', t('errors.allSections')], ['rw', t('common.rw')], ['math', t('common.math')]], t('common.section')));
        var skills = JTS.skills.all().filter(function (sk) { return filter.section === 'all' || sk.section === filter.section; });
        toolbar.appendChild(select('skill', [['all', t('errors.allSkills')]].concat(skills.map(function (sk) { return [sk.id, sk.name_en]; })), t('errors.col.topic')));
        toolbar.appendChild(select('difficulty', [['all', t('errors.anyDifficulty')], ['1', 'Easy'], ['2', 'Medium'], ['3', 'Hard']], t('errors.col.difficulty')));
        toolbar.appendChild(select('kind', [['all', t('errors.anyReason')]].concat(KINDS.map(function (k) { return [k, t('err.' + k)]; }))
          .concat([['none', t('errors.unclassified')], ['unanswered', t('errors.kind.unanswered')]]), t('errors.col.why')));
        toolbar.appendChild(select('source', [['all', t('errors.anySource')]].concat(SOURCES.map(function (k) { return [k, t('errors.src.' + k)]; })), t('errors.col.source')));
        toolbar.appendChild(select('status', [['all', t('errors.anyReviewed')], ['open', t('errors.notReviewed')], ['done', t('errors.reviewed')]], t('errors.col.reviewed')));
        var from = U.el('input.input.err-date', { type: 'date', value: filter.from, 'aria-label': t('errors.from'),
          onchange: function () { apply({ from: from.value }); } });
        var to = U.el('input.input.err-date', { type: 'date', value: filter.to, 'aria-label': t('errors.to'),
          onchange: function () { apply({ to: to.value }); } });
        toolbar.appendChild(U.el('span.err-dates', null, [from, U.el('span.muted', { text: '–' }), to]));
        toolbar.appendChild(U.el('button.btn.btn-sm.btn-ghost', { type: 'button', text: t('practice.resetFilters'),
          onclick: function () { filter = blankFilter(); page = 1; paint(); } }));
        toolbar.appendChild(U.el('button.btn.btn-sm', { type: 'button', text: t('errors.exportCsv'),
          onclick: function () { U.download('error-log.csv', csv(all.filter(function (r) { return matches(r, filter); })), 'text/csv;charset=utf-8'); } }));
      }

      function paintList() {
        var list = all.filter(function (r) { return matches(r, filter); });
        U.clear(listHost);
        var pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
        page = U.clamp(page, 1, pages);
        list.slice((page - 1) * PER_PAGE, page * PER_PAGE).forEach(function (r) {
          var tick = U.el('input', { type: 'checkbox', checked: r.reviewed || null, 'aria-label': t('errors.col.reviewed') });
          var check = U.el('label.check.el-check', null, [tick, U.el('span', { text: t(r.reviewed ? 'errors.reviewed' : 'errors.notReviewed') })]);
          check.addEventListener('click', function (ev) { ev.stopPropagation(); });
          tick.addEventListener('change', function () { JTS.attempts.setReviewed(r.id, tick.checked); rerender(); });
          function open() { if (r.q && !r.err.manual) reviewModal(r, rerender); else entryForm(r, rerender); }
          listHost.appendChild(U.el('div.el-item' + (r.reviewed ? '.is-done' : '') + (r.section ? '.is-' + r.section : ''), {
            tabindex: '0', role: 'button', onclick: open,
            onkeydown: function (e) { if (e.key === 'Enter') { e.preventDefault(); open(); } }
          }, [
            U.el('div.el-item-top', null, [
              U.el('span.el-topic', null, [
                U.el('i.res-dot'),
                r.code ? U.el('span.pg-tag', { text: r.code }) : null,
                U.el('span', { text: [r.section ? t(r.section === 'rw' ? 'common.rwShort' : 'common.math') : null, r.skill].filter(Boolean).join(' · ') || '—' })
              ]),
              U.el('span.xsmall.muted', { text: r.dateText })
            ]),
            U.el('div.el-title', { text: r.title || '—', title: r.title }),
            r.note ? U.el('div.el-note', { text: r.note }) : null,
            U.el('div.el-item-foot', null, [
              U.el('span.row.row-wrap', null, [
                r.kind === 'unanswered' ? U.el('span.badge.badge-warn', { text: kindLabel('unanswered') })
                  : r.kind ? U.el('span.badge.badge-muted', { text: t('err.' + r.kind) })
                  : U.el('span.badge.badge-muted.is-none', { text: t('errors.unclassified') }),
                r.difficulty ? U.el('span.badge.badge-muted', { text: DIFF[r.difficulty] }) : null,
                U.el('span.badge.badge-muted', { text: t('errors.src.' + r.source) })
              ]),
              check
            ])
          ]));
        });
        if (!list.length) listHost.appendChild(U.el('p.small.muted', { text: t('errors.noneMatch') }));
        U.clear(foot);
        foot.appendChild(U.el('span', { text: list.length === all.length
          ? t('errors.showingAll', { n: all.length }) : t('errors.showingSome', { n: list.length, total: all.length }) }));
        if (pages > 1) {
          var nav = U.el('nav.el-pages', { 'aria-label': t('errors.title') });
          for (var i = 1; i <= pages; i++) {
            (function (n) {
              nav.appendChild(U.el('button.el-page' + (n === page ? '.is-on' : ''), {
                type: 'button', text: String(n), 'aria-current': n === page ? 'page' : null,
                onclick: function () { page = n; paintList(); toolbar.scrollIntoView({ block: 'nearest' }); }
              }));
            })(i);
          }
          foot.appendChild(nav);
        }
      }

      function paint() { paintInsights(); paintStats(); paintToolbar(); paintList(); }
      paint();
    }
  });
})();
