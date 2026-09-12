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
