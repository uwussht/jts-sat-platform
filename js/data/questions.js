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
  function prepare(q, file) {
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
      var ids = {};
      all.forEach(function (q) { ids[q.id] = 1; });
      JTS.data.questions = JTS.data.questions.filter(function (q) { return !ids[q.id]; }).concat(all);
      console.info('[JTS] ' + all.length + ' questions loaded from JSON (' + files.length + ' file' + (files.length === 1 ? '' : 's') + ')');
      return all.length;
    });
  }).catch(function (e) {
    console.warn('[JTS] no JSON questions loaded — ' + e.message);
    return 0;
  });
};
