/* ==========================================================================
   What each class practises.

   A class's practice set is written for that class and lives in
   js/data/lesson-questions.js, keyed by class code; JTS.programme.lessonSet
   reads it from there. A class with no set yet says so on its page instead of
   borrowing questions from another topic.

   This file holds what is left: per-class flags. `hard: true` marks the
   Challenge classes, which are run at hard-module difficulty. `skills` can
   still be given to fill a class from the bank by skill, which is how a set
   could be stood up before its own questions are written.

   Nothing here is taken from Bluebook or from any College Board material:
   their items are theirs. The official practice is done in Bluebook itself,
   which every class links to.

   Loaded after js/data/programme-units.js.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme.drills = {};

(function () {
  for (var i = 1; i <= 12; i++) JTS.data.programme.drills['CH' + i] = { hard: true };
})();
