/* ==========================================================================
   Question bank — base module.

   The bank is split by domain across js/data/questions-*.js; each of those
   files calls JTS.data.addQuestions([...]). This file must load first.

   Schema (validated by JTS.bank.validateAll):
   {
     id, skillId, section: 'rw'|'math', difficulty: 1|2|3,
     type: 'mcq'|'spr',
     passage?: HTML string,          // R&W stimulus; may contain a <table>
     stem: HTML string,              // always English (§2)
     options?: [A,B,C,D],            // mcq only, always English
     answer: 'B' | ['7/2','3.5'],    // spr: every accepted equivalent form
     explanation: {en,ru,kk},
     distractors?: {A:{en,ru,kk}, ...},   // why each wrong option is wrong
     hints?: [{en,ru,kk}],           // progressive, never contain the answer
     methods?: [{title,steps:{en,ru,kk}}],// only genuinely different methods
     calculator: true|false,         // true for math, false for rw
     meta: {owner, source, licenseStatus, sourceRef, reviewedAt, reviewStatus, version}
   }

   All content is JTS original and ships as reviewStatus:'draft' until a JTS
   methodologist signs it off. Nothing here is copied from College Board,
   Bluebook, Khan Academy or any other publisher.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.questions = JTS.data.questions || [];

/** Domain files call this so load order stays flexible. */
JTS.data.addQuestions = function (list) {
  JTS.data.questions = JTS.data.questions.concat(list);
};

/** Shared meta block — keeps 300 records from repeating the same seven fields. */
JTS.data.jtsMeta = function (ref, overrides) {
  var m = {
    owner: 'JTS',
    source: 'JTS Original',
    licenseStatus: 'original',
    sourceRef: ref,
    reviewedAt: null,
    reviewStatus: 'draft',
    version: 1
  };
  if (overrides) Object.keys(overrides).forEach(function (k) { m[k] = overrides[k]; });
  return m;
};

/**
 * Questions kept as JSON files.
 *
 * js/data/questions/index.json lists them: { "files": ["m-adv.json", ...] },
 * each path relative to js/data/questions/. A file is either a list of
 * questions or { "questions": [ ... ] }. Each question has the same fields
 * as the ones in the .js files (id, skillId, section, difficulty, type,
 * stem, passage, options, answer, explanation, distractors, ...), written
 * out as plain data. Missing pieces are filled in:
 *   meta         the JTS defaults, merged with whatever "meta" the file gives
 *   calculator   true for math, false for rw
 *   explanation  a plain string, or { en } alone, is used for ru and kk too
 *   distractors  the same, per letter
 * A JSON question with the same id as one already loaded replaces it, so a
 * .js topic file can be moved to JSON one file at a time.
 *
 * The question-bank export layout (stemHtml, choices [{label, html}],
 * correctAnswer, explanationHtml, skill and domain by name, difficulty as
 * Easy / Medium / Hard) is read too, and turned into those fields.
 *
 * The files are fetched when the app starts (JTS.boot waits for them), which
 * needs the app served over http — Live Server or any local server.
 */
JTS.data.loadQuestionFiles = function () {
  var base = 'js/data/questions/';
  function get(path) {
    return fetch(base + path, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(path + ': HTTP ' + r.status);
      return r.json();
    });
  }
  /* A plain string, or English only, is shown in every interface language. */
  function lang(v) {
    var o = typeof v === 'string' ? { en: v } : (v || {});
    return { en: o.en || '', ru: o.ru || o.en || '', kk: o.kk || o.en || '' };
  }
  /* ---- the question-bank export layout -------------------------------
     { id, domain, skill, difficulty: "Easy|Medium|Hard", type: "mcq|spr",
       stemHtml, choices: [{ label, html }], correctAnswer, explanationHtml }
     is turned into the app's own fields. */
  var RW_DOMAINS = ['Information and Ideas', 'Craft and Structure', 'Expression of Ideas',
                    'Standard English Conventions'];
  /* Skill names that are not worded exactly like a topic in skills.js. */
  var SKILL_ALIASES = {
    'linear equations in one variable': 'm.alg.linear',
    'linear equations in two variables': 'm.alg.linear',
    'linear functions': 'm.alg.linear',
    'systems of two linear equations in two variables': 'm.alg.systems',
    'linear inequalities in one or two variables': 'm.alg.inequalities',
    'ratios, rates, proportional relationships, and units': 'm.psda.ratios',
    'percentages': 'm.psda.percentages',
    'one-variable data: distributions and measures of center and spread': 'm.psda.statistics',
    'two-variable data: models and scatterplots': 'm.psda.statistics',
    'probability and conditional probability': 'm.psda.probability',
    'inference from sample statistics and margin of error': 'm.psda.statistics',
    'evaluating statistical claims: observational studies and experiments': 'm.psda.statistics',
    'area and volume': 'm.geo.area-volume',
    'lines, angles, and triangles': 'm.geo.triangles',
    'right triangles and trigonometry': 'm.geo.trig-ratios',
    'circles': 'm.geo.circles',
    'central ideas and details': 'rw.ii.central-ideas',
    'command of evidence': 'rw.ii.evidence-textual',
    'inferences': 'rw.ii.inferences',
    'words in context': 'rw.cs.words-in-context',
    'text structure and purpose': 'rw.cs.text-structure-purpose',
    'cross-text connections': 'rw.cs.cross-text-connections',
    'rhetorical synthesis': 'rw.ei.rhetorical-synthesis',
    'transitions': 'rw.ei.transitions',
    'boundaries': 'rw.sec.boundaries',
    'form, structure, and sense': 'rw.sec.form-structure-sense'
  };
  function skillIdFor(name) {
    var n = String(name || '').trim().toLowerCase();
    var hit = (JTS.data.skills || []).filter(function (s) {
      return String(s.name_en || '').toLowerCase() === n;
    })[0];
    return hit ? hit.id : (SKILL_ALIASES[n] || null);
  }
  /* "2.5, 5/2" lists accepted answers; "16,606" is one number with a
     thousands separator. */
  function sprAnswers(v) {
    if (Array.isArray(v)) return v.map(String);
    return String(v == null ? '' : v).split(/\s*;\s*|,\s+|\s+or\s+/)
      .map(function (a) { return a.trim().replace(/^(-?\d{1,3}(?:,\d{3})+)(\.\d+)?$/, function (m) { return m.replace(/,/g, ''); }); })
      .filter(Boolean);
  }
  var LEVEL = { easy: 1, medium: 2, hard: 3 };
  function fromExport(q) {
    var mcq = String(q.type || '').toLowerCase() !== 'spr';
    var choices = (q.choices || []).slice().sort(function (a, b) {
      return String(a.label).localeCompare(String(b.label));
    });
    var out = {
      id: q.id,
      skillId: q.skillId || skillIdFor(q.skill),
      section: q.section || (RW_DOMAINS.indexOf(q.domain) >= 0 ? 'rw' : 'math'),
      difficulty: typeof q.difficulty === 'number' ? q.difficulty
        : (LEVEL[String(q.difficulty || '').toLowerCase()] || 2),
      type: mcq ? 'mcq' : 'spr',
      stem: q.stemHtml || q.stem || '',
      explanation: q.explanationHtml || q.explanation || ''
    };
    if (q.passageHtml || q.passage) out.passage = q.passageHtml || q.passage;
    if (mcq) {
      out.options = choices.map(function (c) { return c.html != null ? c.html : c.text; });
      out.answer = String(q.correctAnswer || q.answer || '').trim().toUpperCase();
    } else {
      out.answer = sprAnswers(q.correctAnswer != null ? q.correctAnswer : q.answer);
    }
    if (q.skill) out.sourceSkill = q.skill;
    if (q.number != null) out.sourceNumber = q.number;
    return out;
  }

  function prepare(q, file) {
    if (q && (q.stemHtml !== undefined || q.correctAnswer !== undefined)) q = fromExport(q);
    var out = {};
    Object.keys(q).forEach(function (k) { out[k] = q[k]; });
    out.meta = JTS.data.jtsMeta(q.id, q.meta || { source: 'JSON: ' + file });
    if (typeof out.calculator !== 'boolean') out.calculator = out.section === 'math';
    if (out.explanation) out.explanation = lang(out.explanation);
    if (out.distractors) {
      var d = {};
      Object.keys(out.distractors).forEach(function (k) { d[k] = lang(out.distractors[k]); });
      out.distractors = d;
    }
    return out;
  }
  return get('index.json').then(function (idx) {
    var files = (idx && idx.files) || [];
    return Promise.all(files.map(function (f) {
      return get(f).then(function (data) {
        var list = Array.isArray(data) ? data : (data && data.questions) || [];
        return list.map(function (q) { return prepare(q, f); });
      }).catch(function (e) {
        console.error('[JTS] question file not loaded — ' + e.message);
        return [];
      });
    })).then(function (lists) {
      var all = [].concat.apply([], lists);
      if (!all.length) return 0;
      var ids = {}, repeated = [];
      all = all.filter(function (q) {
        if (ids[q.id]) { repeated.push(q.id); return false; }
        ids[q.id] = 1; return true;
      });
      if (repeated.length) console.warn('[JTS] repeated question ids in JSON, first kept:', repeated);
      JTS.data.questions = JTS.data.questions.filter(function (q) { return !ids[q.id]; }).concat(all);
      console.info('[JTS] ' + all.length + ' questions loaded from JSON (' + files.length + ' file' + (files.length === 1 ? '' : 's') + ')');
      return all.length;
    });
  }).catch(function (e) {
    console.warn('[JTS] no JSON questions loaded — ' + e.message);
    return 0;
  });
};
