/* ==========================================================================
   Screen: Onboarding (#/onboarding) — six steps, progress bar, and a save
   after every step so a reload never costs the student their answers.

   The first thing this screen does is teach. Four of the six steps are about
   the exam itself — what it is, how it is built, how you sit it in Kazakhstan,
   and what each section actually asks — because a student who does not know
   the exam cannot judge a target or read a diagnostic. The two interactive
   steps (the goal, the exam date) are folded into the section they belong to.

   The rule that shapes this screen: a score is never invented. Onboarding ends
   at the diagnostic, which returns a mastery map; a real SAT or Bluebook
   result comes in through Mock tests, not through a text box here.

   The second rule is that nothing here is allowed to be a dead end. A student
   is never blocked by a button that does nothing, never refused over a number
   that can be rounded, never made to scroll to find the way forward, and never
   made to read four screens of explanation they did not ask for.

   Content lives in js/data/sat-info.js. Section weights are not copied into
   it — they are read from the live skill taxonomy so the numbers a student is
   taught cannot drift from the numbers the planner uses.
   ========================================================================== */
(function () {
  'use strict';
  var U = JTS.util, t = JTS.t, ui = JTS.ui, S = JTS.store;

  var TOTAL_STEPS = 6;
  /* Which sat-info section each step shows, and which interactive block, if
     any, is folded in underneath it. */
  var STEPS = [
    { info: 'about' },
    { info: 'structure' },
    { info: 'goal',      block: 'goal' },
    { info: 'examday',   block: 'examDate' },
    { info: 'verbal' },
    { info: 'math' }
  ];

  /* ---------------------------------------------------------------- helpers */

  /* Settings edits the same availability, so the weekday naming lives in
     JTS.util rather than here. */
  var dayLabel = U.dayLabel;

  /**
   * A section score, and a field that refuses to be a trap. 705 is not a real
   * SAT score, but rejecting it on the Next button — one screen and one click
   * later — teaches a student nothing except that the form dislikes them. The
   * field rounds to the nearest reportable score as soon as it loses focus,
   * and the steppers mean it never has to be typed at all.
   */
  function snapScore(v) {
    var n = Number(v);
    if (String(v).trim() === '' || isNaN(n)) return null;
    return U.clamp(Math.round(n / 10) * 10, 200, 800);
  }

  function scoreInput(id, value, onInput) {
    var el = U.el('input.input.score-in', {
      type: 'number', id: id, min: '200', max: '800', step: '10',
      inputmode: 'numeric', value: (value === null || value === undefined) ? '' : String(value)
    });
    if (onInput) el.addEventListener('input', onInput);
    el.addEventListener('blur', function () {
      var snapped = snapScore(el.value);
      if (snapped === null) return;
      if (String(snapped) !== el.value) { el.value = String(snapped); if (onInput) onInput(); }
    });
    return el;
  }

  /** The field with a step down and a step up either side of it. */
  function scoreField(label, input, onInput) {
    function bump(by) {
      var base = snapScore(input.value);
      input.value = String(U.clamp((base === null ? 600 : base) + by, 200, 800));
      if (onInput) onInput();
    }
    return ui.field(label, U.el('div.score-row', null, [
      U.el('button.score-step', {
        type: 'button', text: '−', 'aria-label': t('onb.s3.lower'),
        onclick: function () { bump(-10); }
      }),
      input,
      U.el('button.score-step', {
        type: 'button', text: '+', 'aria-label': t('onb.s3.raise'),
        onclick: function () { bump(10); }
      })
    ]));
  }

  function validScore(v) {
    var n = Number(v);
    return String(v).trim() !== '' && !isNaN(n) && n >= 200 && n <= 800 && n % 10 === 0;
  }

  /** Weekly minutes decide intensity — it is derived, never asked for blind. */
  function intensityFor(days, minutes) {
    var weekly = (days || []).length * (minutes || 0);
    if (weekly < 180) return 'light';
    if (weekly <= 420) return 'standard';
    return 'intensive';
  }

  function radioCard(name, checked, title, subtitle, onSelect) {
    var input = U.el('input', { type: 'radio', name: name, checked: checked || null });
    var label = U.el('label.check.check-card', null, [
      input,
      U.el('span', null, [
        U.el('b', { text: title, style: 'display:block' }),
        subtitle ? U.el('span.small.muted', { text: subtitle }) : null
      ])
    ]);
    input.addEventListener('change', function () { if (input.checked) onSelect(); });
    return label;
  }

  /* ------------------------------------------------------------- info blocks */

  function infoSection(id) {
    return (JTS.data.satInfo || []).filter(function (x) { return x.id === id; })[0] || null;
  }

  function pick(obj) { return JTS.i18n.pick(obj, S.settings().uiLang); }

  function bullets(list) {
    var ul = U.el('ul.stack-sm.list-dot.prose');
    (list || []).forEach(function (line) {
      ul.appendChild(U.el('li.small', { html: pick(line) }));
    });
    return ul;
  }

  /**
   * The share of a section each domain carries, straight from the taxonomy.
   * Percentages are within the section, which is how College Board publishes
   * them and how a student thinks about one module.
   */
  function domainTable(section) {
    var domains = JTS.skills.domains(section);
    var weights = {}, total = 0;
    domains.forEach(function (d) {
      weights[d.id] = U.sum(JTS.skills.all()
        .filter(function (sk) { return sk.domain === d.id; })
        .map(function (sk) { return sk.examWeight; }));
      total += weights[d.id];
    });
    var wrap = U.el('div.stack-sm');
    domains.forEach(function (d) {
      var share = total ? weights[d.id] / total : 0;
      var skills = JTS.skills.all().filter(function (sk) { return sk.domain === d.id; });
      wrap.appendChild(U.el('div.stack-sm', null, [
        U.el('div.row-between', null, [
          U.el('span.small', null, [U.el('b', { text: JTS.i18n.pickName(d) })]),
          U.el('span.small.muted.num', { text: Math.round(share * 100) + '%' })
        ]),
        ui.bar(Math.round(share * 100), 100),
        U.el('div.xsmall.muted', {
          text: skills.map(function (sk) { return JTS.i18n.pickName(sk); }).join(' · ')
        })
      ]));
    });
    return wrap;
  }

  /** The four modules and the break, as a row of blocks with their timings. */
  function timeline(rows) {
    var wrap = U.el('div.stack-sm');
    (rows || []).forEach(function (r) {
      wrap.appendChild(U.el('div.row-between.row-wrap', {
        style: 'padding:9px 12px;border:1px solid var(--border);' +
               (r.key === 'break' ? 'background:var(--surface-2)' : 'background:var(--brand-050)')
      }, [
        U.el('span.small', null, [
          U.el('b', { text: r.label }),
          r.adaptive ? U.el('span.badge', { text: t('onb.info.adaptive'), style: 'margin-inline-start:8px' }) : null
        ]),
        U.el('span.small.muted.nowrap', {
          text: (r.q ? r.q + ' ' + t('common.questions') + ' · ' : '') + r.min + ' ' + t('common.minutes')
        })
      ]));
    });
    return wrap;
  }

  /**
   * Reference material a student can open if they want it. The exam-day step
   * is the longest in onboarding and its actual job is picking a date, so the
   * registration steps and the packing lists wait behind one press.
   */
  function disclosure(label, build) {
    /* Built now, shown later: the content is a few paragraphs, and having it
       in the page means a browser find, a screen reader in browse mode and a
       print all still reach it. */
    var body = U.el('div.acc-body', { hidden: true });
    build(body);
    var caret = U.el('span.caret', { text: '❯' });
    var head = U.el('button.acc-head', {
      type: 'button', 'aria-expanded': 'false',
      onclick: function () {
        var open = body.hidden;
        body.hidden = !open;
        head.setAttribute('aria-expanded', String(open));
        caret.style.transform = open ? 'rotate(90deg)' : '';
      }
    }, [caret, U.el('b', { text: label })]);
    return U.el('div.acc', null, [head, body]);
  }

  function checklist(items, kind) {
    var wrap = U.el('div.stack-sm');
    (items || []).forEach(function (it) {
      wrap.appendChild(U.el('div.row.row-top', null, [
        U.el('span', { text: kind === 'avoid' ? '✕' : '✓', 'aria-hidden': 'true',
                       style: 'flex:0 0 16px;font-weight:800;color:var(--' + (kind === 'avoid' ? 'danger' : 'ok') + ')' }),
        U.el('span.small', { html: pick(it) })
      ]));
    });
    return wrap;
  }

  /** Render one sat-info section. Blocks it does not declare are skipped. */
  function infoStep(body, id) {
    var sec = infoSection(id);
    if (!sec) return;

    body.appendChild(U.el('h2.h2', { text: t('onb.info.' + id) }));
    body.appendChild(U.el('p.muted.prose', { text: pick(sec.lead) }));

    if (sec.stats) {
      body.appendChild(U.el('div.grid.grid-3', null, sec.stats.map(function (st) {
        return U.el('div.card.card-sm.card-flat', null, [U.el('div.stat', null, [
          U.el('div.stat-label', { text: pick(st.label) }),
          /* A stat value is a plain string when it is language-neutral (400-1600,
             98) and a {en,ru,kk} object when it carries a unit that is not. */
          U.el('div.stat-value', { text: pick(st.value) })
        ])]);
      })));
    }
    if (sec.timeline) body.appendChild(timeline(sec.timeline));
    if (sec.section) {
      body.appendChild(U.el('h3.h3', { text: t('onb.info.domains') }));
      body.appendChild(domainTable(sec.section));
    }
    if (sec.points) body.appendChild(bullets(sec.points));

    /* Everything a student needs on the morning itself, folded away: this step
       exists to pick a date, and the rest is reference. */
    if (sec.steps || sec.bring || sec.avoid) {
      body.appendChild(disclosure(t('onb.info.dayDetails'), function (host) {
        if (sec.steps) {
          host.appendChild(U.el('h3.h3', { text: t('onb.info.howToRegister') }));
          var ol = U.el('ol.stack-sm.list-num.prose');
          sec.steps.forEach(function (line) { ol.appendChild(U.el('li.small', { html: pick(line) })); });
          host.appendChild(ol);
        }
        if (sec.bring || sec.avoid) {
          host.appendChild(U.el('div.grid.grid-2', { style: 'margin-top:12px' }, [
            U.el('div.card.card-sm.card-flat.stack-sm', null, [
              U.el('div.eyebrow', { text: t('onb.info.bring') }), checklist(sec.bring, 'bring')
            ]),
            U.el('div.card.card-sm.card-flat.stack-sm', null, [
              U.el('div.eyebrow', { text: t('onb.info.avoid') }), checklist(sec.avoid, 'avoid')
            ])
          ]));
        }
      }));
    }
    if (sec.links) {
      body.appendChild(U.el('div.row.row-wrap', null, sec.links.map(function (l) {
        return U.el('a.btn.btn-sm', { href: l.url, target: '_blank', rel: 'noopener',
                                      text: pick(l.label) + ' ↗' });
      })));
    }
    /* The same discipline as the exam-dates file: this text is JTS's reading
       of the official rules, and the student is sent to check it. */
    if ((JTS.data.satInfoMeta || {}).verified === false) {
      body.appendChild(U.el('p.xsmall.muted', { text: t('onb.info.unverified') }));
    }
  }

  /* ------------------------------------------------------------------ steps */

  /* Exam date, from the reference file rather than hard-coded in UI. */
  /**
   * One administration, drawn as a tear-off from a calendar: the month on the
   * band, the day under it, and what a student has to do about it in plain
   * words. A row of dates and deadlines in one sentence is how a beginner
   * misses a registration.
   */
  function dateCard(d, chosen, onPick) {
    var lang = S.settings().uiLang;
    var loc = { en: 'en-US', ru: 'ru-RU', kk: 'kk-KZ' }[lang] || 'en-US';
    var day = U.parseISO(d.testDate);
    var todayISO = U.iso(U.today());
    var days = U.daysBetween(U.today(), day);

    var closed = d.lateDeadline < todayISO;
    var lateOnly = !closed && d.registrationDeadline < todayISO;
    var state = closed ? 'closed' : lateOnly ? 'late' : 'open';

    function fmt(iso, opts) {
      try { return U.parseISO(iso).toLocaleDateString(loc, opts); }
      catch (e) { return iso; }
    }

    var input = U.el('input.sr-only', {
      type: 'radio', name: 'examdate', checked: chosen || null, dataset: { date: d.testDate }
    });
    input.addEventListener('change', function () { if (input.checked) onPick(); });

    /* What to do about this date, in one line that changes with the deadline. */
    var action;
    if (closed) {
      action = U.el('span.badge.badge-muted', { text: t('onb.s1.regClosed') });
    } else if (lateOnly) {
      action = U.el('span.badge.badge-warn', { text: t('onb.s1.lateOnly') });
    } else {
      action = U.el('span.date-left', {
        text: t('onb.s1.daysLeft', { n: U.daysBetween(U.today(), U.parseISO(d.registrationDeadline)) })
      });
    }

    return U.el('label.date-card.is-' + state, null, [
      input,
      U.el('span.date-tear', { 'aria-hidden': 'true' }, [
        U.el('b', { text: fmt(d.testDate, { month: 'short' }).replace('.', '') }),
        U.el('span', { text: String(day.getDate()) }),
        U.el('i', { text: String(day.getFullYear()) })
      ]),
      U.el('span.date-main', null, [
        U.el('span.date-when', { text: fmt(d.testDate, { weekday: 'long' }) }),
        U.el('span.date-away', { text: t('onb.s1.inWeeks', { n: Math.ceil(days / 7) }) }),
        action,
        U.el('span.date-line', { text: t('onb.s1.deadline') + ': ' + U.fmtDate(d.registrationDeadline, lang) }),
        U.el('span.date-line', { text: t('onb.s1.lateDeadline') + ': ' + U.fmtDate(d.lateDeadline, lang) }),
        U.el('span.date-line', { text: t('onb.s1.region') + ': ' + d.region.join(', ') })
      ])
    ]);
  }

  function examDateBlock(body, state, refresh) {
    var chosen = state.examDate || null;
    var todayISO = U.iso(U.today());
    var dates = (JTS.data.examDates || []).filter(function (d) { return d.testDate >= todayISO; });
    var meta = JTS.data.examDatesMeta || {};

    body.appendChild(U.el('h2.h2', { text: t('onb.s1.title') }));
    body.appendChild(U.el('p.muted.prose', { text: t('onb.s1.pickHint') }));

    if (meta.verified === false) {
      body.appendChild(U.el('div.notice.notice-warn', {
        text: t('onb.s1.provisional', { source: meta.source || '\u2014' })
      }));
    }

    /* Selecting a date must not redraw the step: a full redraw would drop
       keyboard focus and scroll the student back to the top of the list. */
    var countdown = U.el('div.notice.notice-ok', { hidden: true });
    function updateCountdown() {
      var cur = S.state().examDate;
      if (cur && cur.mode === 'date') {
        var n = U.daysBetween(U.today(), U.parseISO(cur.testDate));
        countdown.textContent = t('onb.s1.countdown', { weeks: Math.ceil(n / 7), days: n });
        countdown.hidden = false;
      } else {
        countdown.hidden = true;
      }
    }

    var grid = U.el('div.date-grid');
    dates.forEach(function (d) {
      grid.appendChild(dateCard(d, chosen && chosen.examDateId === d.id, function () {
        S.patch({ examDate: {
          mode: 'date', examDateId: d.id, testDate: d.testDate,
          registrationDeadline: d.registrationDeadline, lateDeadline: d.lateDeadline
        } });
        updateCountdown();
      }));
    });
    body.appendChild(grid);

    /* Pressing Next with nothing chosen used to do nothing at all — the button
       simply refused, with no word about why. */
    var err = U.el('div.error-text', { role: 'alert', hidden: true });

    /* Not deciding is a decision the plan can work with, so it is an option
       here rather than something a student has to skip the step to express. */
    body.appendChild(radioCard('examdate',
      chosen && chosen.mode === 'undecided',
      t('onb.s1.undecided'), t('onb.s1.undecidedNote'),
      function () {
        S.patch({ examDate: { mode: 'undecided', examDateId: null, testDate: null,
          registrationDeadline: null, lateDeadline: null } });
        updateCountdown();
      }));

    body.appendChild(err);
    body.appendChild(countdown);
    updateCountdown();

    return function valid() {
      if (!S.state().examDate) {
        err.textContent = t('onb.s1.errPick'); err.hidden = false; return false;
      }
      err.hidden = true; return true;
    };
  }

  /**
   * Where a total score sits against one university's published middle-50%
   * band. Four bands, because a band is all the data supports: a range is a
   * fact about last year's admitted students, not a decision about this one.
   */
  var NEAR = 70;
  function fitFor(total, c) {
    var band = c.midSAT.total;
    if (total > band[1]) return 'above';
    if (total >= band[0]) return 'inside';
    if (total >= band[0] - NEAR) return 'near';
    return 'below';
  }
  var FIT_ORDER = { inside: 0, above: 1, near: 2, below: 3 };

  function goalBlock(body, state, refresh) {
    var g = state.goals || { rw: 650, math: 700, total: 1350, collegeIds: [] };
    body.appendChild(U.el('h2.h2', { text: t('onb.s3.title') }));

    var totalOut = U.el('div.stat-value', { text: String(g.rw + g.math) });
    var needOut = U.el('div.small.muted');
    var err = U.el('div.error-text', { role: 'alert', hidden: true });

    /* Only SAT-relevant policies appear; test-blind institutions are absent. */
    var colleges = (JTS.data.colleges || []).filter(function (c) {
      return c.testPolicy === 'required' || c.testPolicy === 'optional';
    });
    var cmeta = JTS.data.collegesMeta || {};

    var rwIn = scoreInput('g-rw', g.rw, recalc);
    var maIn = scoreInput('g-math', g.math, recalc);

    function currentTotal() {
      if (!validScore(rwIn.value) || !validScore(maIn.value)) return null;
      return Number(rwIn.value) + Number(maIn.value);
    }

    function recalc() {
      var total = currentTotal();
      if (total === null) { totalOut.textContent = '—'; needOut.textContent = ''; paintFit(); return; }
      totalOut.textContent = String(total);
      S.update(function (s) {
        s.goals = s.goals || { collegeIds: [] };
        s.goals.rw = Number(rwIn.value); s.goals.math = Number(maIn.value); s.goals.total = total;
        s.goals.collegeIds = s.goals.collegeIds || [];
      });
      var base = S.state().baseline;
      needOut.textContent = base && base.total
        ? t('onb.s3.needed', { n: Math.max(0, total - base.total) })
        : t('onb.s3.neededUnknown');
      paintFit();
    }

    /* ------------------------------------------------------------- left -- */
    var setter = U.el('div.stack');
    var grid = U.el('div.grid.grid-2');
    grid.appendChild(scoreField(t('onb.s3.targetRw'), rwIn, recalc));
    grid.appendChild(scoreField(t('onb.s3.targetMath'), maIn, recalc));
    setter.appendChild(grid);
    setter.appendChild(U.el('div.hint', { text: t('onb.s3.step10') }));

    /* Three answers for the student whose honest reply is "I have no idea". */
    setter.appendChild(U.el('div.stack-sm', null, [
      U.el('div.label', { text: t('onb.s3.presets') }),
      U.el('div.row.row-wrap', null, [[600, 620], [650, 700], [730, 770]].map(function (pair) {
        return U.el('button.chip', {
          type: 'button', text: String(pair[0] + pair[1]),
          dataset: { preset: String(pair[0] + pair[1]) },
          onclick: function () {
            rwIn.value = String(pair[0]);
            maIn.value = String(pair[1]);
            recalc();
          }
        });
      }))
    ]));

    setter.appendChild(U.el('div.card.card-sm.card-flat', null, [
      U.el('div.stat', null, [U.el('div.stat-label', { text: t('onb.s2.total') }), totalOut, needOut])
    ]));
    setter.appendChild(U.el('p.hint', { text: t('onb.s3.fit.pick') }));
    setter.appendChild(err);

    /* ------------------------------------------------------------ right -- */
    var uniHead = U.el('div.row-between.row-wrap');
    var uniList = U.el('div.uni-list');
    var moreBtn = U.el('button.btn.btn-sm', { type: 'button', hidden: true });
    var showAll = false;
    moreBtn.addEventListener('click', function () { showAll = !showAll; paintFit(); });

    var unis = U.el('div.goal-unis.stack-sm', null, [
      uniHead, uniList, moreBtn,
      U.el('p.hint', {
        text: t('onb.s3.fit.caveat') + ' ' +
          t('onb.s3.collegeNote', {
            year: colleges[0] ? colleges[0].year : '—',
            source: cmeta.defaultSource || '—'
          }) + (cmeta.verified === false ? ' ' + (cmeta.note || '') : '')
      })
    ]);

    function uniRow(c, fit, total) {
      var selected = (S.state().goals && S.state().goals.collegeIds || []).indexOf(c.id) >= 0;
      var band = c.midSAT.total;
      var row = U.el('button.check-card.uni-row.fit-' + fit, {
        type: 'button', 'aria-pressed': String(selected),
        onclick: function () {
          S.update(function (s) {
            s.goals = s.goals || { collegeIds: [] };
            s.goals.collegeIds = s.goals.collegeIds || [];
            var i = s.goals.collegeIds.indexOf(c.id);
            if (i >= 0) { s.goals.collegeIds.splice(i, 1); return; }
            s.goals.collegeIds.push(c.id);
            /* Prefill the target from the middle of the published band,
               rounded to a reportable 10-point score. */
            var mid = function (r) { return Math.round(((r[0] + r[1]) / 2) / 10) * 10; };
            s.goals.rw = mid(c.midSAT.rw);
            s.goals.math = mid(c.midSAT.math);
            s.goals.total = s.goals.rw + s.goals.math;
          });
          var g2 = S.state().goals;
          rwIn.value = String(g2.rw);
          maIn.value = String(g2.math);
          recalc();
        }
      }, [
        U.el('div.row-between.row-wrap', null, [
          U.el('b', { text: c.name }),
          U.el('span.uni-fit', { text: t('onb.s3.fit.' + fit) })
        ]),
        U.el('div.small.muted', {
          text: t('onb.s3.midSat') + ': ' + band[0] + '–' + band[1] +
                ' (R&W ' + c.midSAT.rw[0] + '–' + c.midSAT.rw[1] +
                ', Math ' + c.midSAT.math[0] + '–' + c.midSAT.math[1] + ')'
        }),
        U.el('div.row.row-wrap', null, [
          U.el('span.badge' + (c.testPolicy === 'required' ? '.badge-warn' : '.badge-muted'),
               { text: t('onb.s3.policy.' + c.testPolicy) }),
          total === null ? null : U.el('span.xsmall.muted', {
            text: (total >= band[0] ? '+' : '') + (total - band[0]) + ' ' + t('onb.s3.fit.vsRange')
          })
        ])
      ]);
      return row;
    }

    /**
     * The list is the answer to "where does this score get me": the ones the
     * target reaches come first, the ones it does not are one press away.
     */
    function paintFit() {
      var total = currentTotal();
      U.clear(uniHead); U.clear(uniList);

      var ranked = colleges.map(function (c) {
        return { c: c, fit: total === null ? 'inside' : fitFor(total, c) };
      }).sort(function (a, b) {
        if (total === null) return b.c.midSAT.total[1] - a.c.midSAT.total[1];
        var d = FIT_ORDER[a.fit] - FIT_ORDER[b.fit];
        return d || b.c.midSAT.total[1] - a.c.midSAT.total[1];
      });

      var reached = ranked.filter(function (r) { return r.fit === 'inside' || r.fit === 'above'; }).length;
      uniHead.appendChild(U.el('h3.h3', { text: t('onb.s3.fit.title'), style: 'margin:0' }));
      if (total !== null) {
        uniHead.appendChild(U.el('span.badge' + (reached ? '.badge-ok' : '.badge-muted'), {
          text: t('onb.s3.fit.reached', { n: reached, total: ranked.length })
        }));
      }

      var shown = showAll ? ranked : ranked.filter(function (r) { return r.fit !== 'below'; });
      if (!shown.length) {
        uniList.appendChild(U.el('p.small.muted', { text: t('onb.s3.fit.none') }));
      }
      shown.forEach(function (r) { uniList.appendChild(uniRow(r.c, r.fit, total)); });

      var hidden = ranked.length - shown.length;
      moreBtn.hidden = !(hidden || showAll);
      moreBtn.textContent = showAll
        ? t('onb.s3.fit.showFewer')
        : t('onb.s3.fit.showAll', { n: hidden });
    }

    body.appendChild(U.el('div.goal-split', null, [setter, unis]));
    recalc();

    return function valid() {
      /* Round rather than refuse: the only way to fail here now is to leave a
         box empty, and the message says which one. */
      [rwIn, maIn].forEach(function (input) {
        var snapped = snapScore(input.value);
        if (snapped !== null && String(snapped) !== input.value) input.value = String(snapped);
      });
      recalc();
      if (!validScore(rwIn.value) || !validScore(maIn.value)) {
        err.textContent = t('onb.s2.errRange'); err.hidden = false;
        (validScore(rwIn.value) ? maIn : rwIn).focus();
        return false;
      }
      err.hidden = true; return true;
    };
  }

  function availabilityBlock(body, state, refresh) {
    var a = state.availability || { days: [], minutesPerSession: 60, intensity: 'standard' };
    body.appendChild(U.el('h2.h2', { text: t('onb.s4.title') }));

    var err = U.el('div.error-text', { role: 'alert', hidden: true });
    var summary = U.el('div.notice');

    function save() {
      var days = U.$$('input[data-dow]', body).filter(function (i) { return i.checked; })
        .map(function (i) { return Number(i.dataset.dow); });
      var mins = Number((U.$$('input[name=mins]', body).filter(function (i) { return i.checked; })[0] || {}).value || 60);
      var intensity = intensityFor(days, mins);
      S.patch({ availability: { days: days, minutesPerSession: mins, intensity: intensity } });
      summary.textContent = t('onb.s4.intensity', {
        level: t('onb.intensity.' + intensity), minutes: days.length * mins
      });
    }

    var dayRow = U.el('div.row.row-wrap');
    for (var dow = 1; dow <= 7; dow++) {
      (function (d) {
        var cb = U.el('input', { type: 'checkbox', checked: a.days.indexOf(d) >= 0 || null, dataset: { dow: String(d) } });
        cb.addEventListener('change', save);
        dayRow.appendChild(U.el('label.check.check-card', { style: 'min-width:84px' }, [
          cb, U.el('span', { text: dayLabel(d) })
        ]));
      })(dow);
    }
    body.appendChild(ui.field(t('onb.s4.days'), dayRow));

    var minRow = U.el('div.row.row-wrap');
    [30, 60, 90, 120].forEach(function (m) {
      var r = U.el('input', { type: 'radio', name: 'mins', value: String(m),
        checked: a.minutesPerSession === m || null });
      r.addEventListener('change', save);
      minRow.appendChild(U.el('label.check.check-card', { style: 'min-width:96px' }, [
        r, U.el('span', { text: m + ' ' + t('common.minutes') })
      ]));
    });
    body.appendChild(ui.field(t('onb.s4.minutes'), minRow));

    var langSel = U.el('select.select');
    [['en', 'English'], ['ru', 'Русский'], ['kk', 'Қазақша']].forEach(function (l) {
      var o = U.el('option', { value: l[0], text: l[1] });
      if (S.settings().explainLang === l[0]) o.selected = true;
      langSel.appendChild(o);
    });
    langSel.addEventListener('change', function () {
      S.update(function (s) { s.settings.explainLang = langSel.value; });
    });
    body.appendChild(ui.field(t('onb.s4.explainLang'), langSel));

    body.appendChild(summary);
    body.appendChild(err);
    save();

    return function valid() {
      var av = S.state().availability;
      if (!av || !av.days.length) { err.textContent = t('onb.s4.errDays'); err.hidden = false; return false; }
      err.hidden = true; return true;
    };
  }

  /* ------------------------------------------------------------------ shell */

  JTS.router.register('#/onboarding', {
    title: 'onb.title',
    render: function (root) {
      var state = S.state();
      if (!state) { JTS.router.go('#/auth'); return; }

      /* Every student walks all six steps, including the ones that only teach.
         Someone who has sat the SAT before still has to be told how this
         platform reads a diagnostic and what it will and will not claim, and
         the two steps that ask questions sit inside that explanation. */
      var step = U.clamp(state.profile.onboardingStep || 1, 1, TOTAL_STEPS);

      var screen = U.el('div.container.screen', { style: 'max-width:1100px' });
      root.appendChild(screen);

      function goTo(n) {
        step = n;
        S.update(function (s) { s.profile.onboardingStep = step; });
        draw();
        /* A step that opens halfway down the previous one is the commonest way
           to lose a beginner. Every move starts at the top of the new step. */
        window.scrollTo(0, 0);
      }

      function refresh() { draw(); }

      function draw() {
        U.clear(screen);
        state = S.state();
        /* There is no app frame yet, so this screen carries the brand and the
           controls that still work: language, theme, and the way out. */
        screen.appendChild(JTS.shell.setupBar());

        var steps = U.el('ol.steps', { 'aria-label': t('onb.step', { n: step, total: TOTAL_STEPS }) });
        for (var i = 1; i <= TOTAL_STEPS; i++) {
          steps.appendChild(U.el('li' + (i < step ? '.done' : i === step ? '.current' : '')));
        }
        screen.appendChild(U.el('div.stack-sm', { style: 'margin-bottom:18px' }, [
          U.el('div.row-between', null, [
            U.el('h1.eyebrow', { text: t('onb.title') }),
            U.el('div.small.muted', { text: t('onb.step', { n: step, total: TOTAL_STEPS }) })
          ]),
          steps
        ]));

        var card = U.el('div.card.stack');
        var body = U.el('div.stack');
        card.appendChild(body);
        screen.appendChild(card);

        /* One line at the very start, because the first question a student has
           is not about the SAT — it is how long this is going to take and
           whether they are about to get something wrong. */
        if (step === 1) {
          body.appendChild(U.el('div.notice', { text: t('onb.intro') }));
        }

        var def = STEPS[step - 1];
        infoStep(body, def.info);

        var result = { valid: function () { return true; } };
        if (def.block === 'goal') {
          body.appendChild(U.el('hr.divider'));
          result = { valid: goalBlock(body, state, refresh) };
        } else if (def.block === 'examDate') {
          body.appendChild(U.el('hr.divider'));
          result = { valid: examDateBlock(body, state, refresh) };
        }

        var back = U.el('button.btn', {
          type: 'button', text: t('common.back'), disabled: step === 1 || null,
          onclick: function () { goTo(step - 1); }
        });
        var next = U.el('button.btn.btn-primary', {
          type: 'button',
          text: step === TOTAL_STEPS ? t('onb.toDiagnostic') : t('common.next'),
          onclick: function () {
            if (!result.valid()) {
              /* Say why, where the student is looking. */
              var msg = card.querySelector('.error-text:not([hidden])');
              if (msg && msg.scrollIntoView) msg.scrollIntoView({ block: 'center' });
              return;
            }
            if (step < TOTAL_STEPS) { goTo(step + 1); return; }
            /* Onboarding ends at the diagnostic for everyone. Nothing here
               assigns a level, so the diagnostic is the only thing that has
               measured anything by the time the plan is built. */
            S.update(function (s) { s.profile.onboardingStep = TOTAL_STEPS; });
            JTS.router.go('#/diagnostic');
          }
        });

        /* The footer sticks to the bottom of the window: on the exam-day step
           the way forward used to be a full screen of scrolling away. */
        card.appendChild(U.el('div.row-between.onb-foot', null, [
          back,
          U.el('span.small.muted.onb-count', { text: t('onb.step', { n: step, total: TOTAL_STEPS }) }),
          next
        ]));
      }

      draw();
    }
  });

  JTS.onboarding = {
    availabilityBlock: availabilityBlock,
    infoStep: infoStep,
    domainTable: domainTable
  };
})();
