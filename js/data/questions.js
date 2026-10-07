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

/**
 * Skill ids other files use for a topic in js/data/skills.js. A question
 * filed under one of these is moved to the topic it names; without this it
 * matches no topic and never shows in Practice.
 *   - the College Board skill split of Problem-Solving and Data Analysis,
 *     which skills.js keeps as one "statistics" topic;
 *   - the long "math.*" / "rw.eoi.*" ids used by the lesson questions.
 */
JTS.data.skillIdAliases = {
  'm.psda.onevar': 'm.psda.statistics',
  'm.psda.twovar': 'm.psda.statistics',
  'm.psda.inference': 'm.psda.statistics',
  'm.psda.claims': 'm.psda.statistics',
  'm.geo.area': 'm.geo.area-volume',
  'm.geo.lines': 'm.geo.triangles',
  'm.geo.trig': 'm.geo.trig-ratios',
  'math.alg.linear-equations': 'm.alg.linear',
  'math.alg.linear-functions': 'm.alg.linear',
  'math.alg.systems': 'm.alg.systems',
  'math.alg.inequalities-absolute-value': 'm.alg.inequalities',
  'math.adv.quadratics': 'm.adv.nonlinear',
  'math.adv.exponentials-radicals': 'm.adv.functions',
  'math.adv.functions-polynomials-rational': 'm.adv.expressions',
  'math.psda.ratios-rates-percentages': 'm.psda.ratios',
  'math.psda.statistics-probability': 'm.psda.statistics',
  'math.geo.lines-triangles-area-volume': 'm.geo.triangles',
  'math.geo.right-triangles-trigonometry-circles': 'm.geo.trig-ratios',
  'rw.ii.central-ideas-details': 'rw.ii.central-ideas',
  'rw.ii.command-evidence-textual': 'rw.ii.evidence-textual',
  'rw.ii.command-evidence-quantitative': 'rw.ii.evidence-quantitative',
  'rw.eoi.rhetorical-synthesis': 'rw.ei.rhetorical-synthesis',
  'rw.eoi.transitions': 'rw.ei.transitions'
};
JTS.data.canonSkill = function (q) {
  var to = q && JTS.data.skillIdAliases[q.skillId];
  if (to) { q.sourceSkillId = q.skillId; q.skillId = to; }
  /* A grid-in answer written "2,112" is the number 2112: the comma is a
     thousands separator, and a student cannot type one into the grid. */
  if (q && q.type === 'spr' && q.answer != null) {
    q.answer = [].concat(q.answer).map(function (a) {
      return /^-?\d{1,3}(,\d{3})+(\.\d+)?$/.test(String(a).trim()) ? String(a).trim().replace(/,/g, '') : a;
    });
  }
  return q;
};

/** Domain files call this so load order stays flexible. */
JTS.data.addQuestions = function (list) {
  JTS.data.questions = JTS.data.questions.concat(list.map(JTS.data.canonSkill));
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
 * or, per file, { "file": "x.json", "lessonCode": "CH11", "assetBase": "assets/sat/", "idPrefix": "ch11-" }
 * to give every question of the file one class and a folder for its pictures,
 * each path relative to js/data/questions/. A file is either a list of
 * questions or { "questions": [ ... ] }. Each question has the same fields
 * as the ones in the .js files (id, skillId, section, difficulty, type,
 * stem, passage, options, answer, explanation, distractors, ...), written
 * out as plain data. Missing pieces are filled in:
 *   meta         the JTS defaults, merged with whatever "meta" the file gives
 *   calculator   true for math, false for rw
 *   explanation  a plain string, or { en } alone, is used for ru and kk too
 *   distractors  the same, per letter
 * A question with "lessonCode": "CH2" (or "U5") belongs to that class: it
 * is added, in file order, to the practice set on the class's page and kept
 * out of the Practice page. One file can hold the questions of many classes.
 * Such a question may leave out "skill" (it then counts towards no topic),
 * and a Challenge question may leave out "difficulty" (it is hard).
 *
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
  /* "reading-writing", "Reading and Writing", "R&W" … are all 'rw'. */
  function sectionOf(v) {
    if (!v) return null;
    var k = String(v).toLowerCase().replace(/[^a-z]/g, '');
    if (k === 'math' || k === 'mathematics') return 'math';
    if (k === 'rw' || k.indexOf('reading') === 0 || k === 'verbal') return 'rw';
    return v;
  }
  function fromExport(q) {
    var mcq = String(q.type || '').toLowerCase() !== 'spr';
    var choices = (q.choices || []).slice().sort(function (a, b) {
      return String(a.label).localeCompare(String(b.label));
    });
    var out = {
      id: q.id,
      skillId: q.skillId || skillIdFor(q.skill),
      section: sectionOf(q.section) || (RW_DOMAINS.indexOf(q.domain) >= 0 ? 'rw' : 'math'),
      difficulty: typeof q.difficulty === 'number' ? q.difficulty
        : (LEVEL[String(q.difficulty || '').toLowerCase()] || 2),
      type: mcq ? 'mcq' : 'spr',
      stem: q.stemHtml || q.stem || '',
      explanation: q.explanationHtml || q.explanation || ''
    };
    if (q.passageHtml || q.passage) out.passage = q.passageHtml || q.passage;
    if (mcq) {
      out.options = choices.length
        ? choices.map(function (c) { return c.html != null ? c.html : c.text; })
        : (Array.isArray(q.options) ? q.options.slice() : []);
      /* A question whose picture already shows its four choices may list
         none: the student then answers with the letter buttons alone. */
      if (!out.options.length) out.options = ['', '', '', ''];
      out.answer = String(q.correctAnswer || q.answer || '').trim().toUpperCase();
    } else {
      out.answer = sprAnswers(q.correctAnswer != null ? q.correctAnswer : q.answer);
    }
    if (q.skill) out.sourceSkill = q.skill;
    if (q.number != null) out.sourceNumber = q.number;
    return out;
  }

  function prepare(q, file) {
    var noLevel = q && q.difficulty == null;
    /* Read before the export layout is converted, which keeps only the
       fields it knows. */
    var code = q && (q.lessonCode || (q.meta && q.meta.lessonCode));
    var ownSection = q && (q.section || q.domain);
    if (q && (q.stemHtml !== undefined || q.correctAnswer !== undefined)) q = fromExport(q);
    var out = {};
    Object.keys(q).forEach(function (k) { out[k] = q[k]; });
    out.meta = JTS.data.jtsMeta(q.id, q.meta || { source: 'JSON: ' + file });
    JTS.data.canonSkill(out);
    /* "lessonCode": "CH2" makes the question one of that class's own
       practice questions (the set on its page), not a Practice-page one. */
    if (code) {
      out.meta.kind = 'lesson';
      out.meta.lessonCode = code;
      delete out.lessonCode;
      /* A Challenge class is hard-module practice with no single topic:
         its questions need neither a difficulty nor a skill. */
      if (/^CH/i.test(code) && noLevel) out.difficulty = 3;
      if (!out.skillId) out.skillId = null;
      /* With no section of its own, a class's question takes its class's:
         a verbal Challenge (CH1, CH3 …) is Reading and Writing. */
      var cls = JTS.data.programme && JTS.data.programme.byCode(code);
      if (!ownSection && cls && cls.section) {
        out.section = cls.section;
        out.calculator = cls.section === 'math';
      }
    }
    if (typeof out.calculator !== 'boolean') out.calculator = out.section === 'math';
    if (out.explanation) out.explanation = lang(out.explanation);
    if (out.distractors) {
      var d = {};
      Object.keys(out.distractors).forEach(function (k) { d[k] = lang(out.distractors[k]); });
      out.distractors = d;
    }
    return out;
  }
  /* Picture paths written relative to some other folder: prefix them,
     leaving full addresses, data: pictures and assets/ paths alone. */
  function rebase(html, base) {
    return String(html || '').replace(/(<img\b[^>]*\bsrc=")(?!assets\/|https?:|data:|\/)([^"]+)"/gi,
      function (m, head, src) { return head + base + src + '"'; });
  }

  return get('index.json').then(function (idx) {
    var files = (idx && idx.files) || [];
    return Promise.all(files.map(function (entry) {
      /* An entry is a file name, or { file, lessonCode, assetBase, idPrefix }
         to put a whole file into one class, fix where its pictures are and
         keep its question ids apart from another file's, without editing
         the file itself. */
      var opt = typeof entry === 'string' ? { file: entry } : (entry || {});
      var f = opt.file;
      return get(f).then(function (data) {
        var list = Array.isArray(data) ? data : (data && data.questions) || [];
        return list.map(function (q) {
          if ((opt.lessonCode && !q.lessonCode) || opt.idPrefix) {
            var c = {}; Object.keys(q).forEach(function (k) { c[k] = q[k]; });
            if (opt.lessonCode && !q.lessonCode) c.lessonCode = opt.lessonCode;
            /* Two files numbered the same way (rw-m1-01 …) stay apart. */
            if (opt.idPrefix) c.id = opt.idPrefix + q.id;
            q = c;
          }
          var out = prepare(q, f);
          if (opt.assetBase) {
            ['stem', 'passage', 'explanation'].forEach(function (k) {
              if (typeof out[k] === 'string') out[k] = rebase(out[k], opt.assetBase);
            });
            if (out.explanation && typeof out.explanation === 'object') {
              Object.keys(out.explanation).forEach(function (l) {
                out.explanation[l] = rebase(out.explanation[l], opt.assetBase);
              });
            }
            if (out.options) out.options = out.options.map(function (o) { return rebase(o, opt.assetBase); });
          }
          return out;
        });
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
      var sets = JTS.data.lessonQuestions = JTS.data.lessonQuestions || {};
      all.forEach(function (q) {
        var code = q.meta.kind === 'lesson' && q.meta.lessonCode;
        if (!code) return;
        sets[code] = sets[code] || [];
        if (sets[code].indexOf(q.id) < 0) sets[code].push(q.id);
      });
      console.info('[JTS] ' + all.length + ' questions loaded from JSON (' + files.length + ' file' + (files.length === 1 ? '' : 's') + ')');
      return all.length;
    });
  }).catch(function (e) {
    console.warn('[JTS] no JSON questions loaded — ' + e.message);
    return 0;
  });
};
