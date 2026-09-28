/* ==========================================================================
   What each lesson drills, and what it teaches.

   Two things live here, both keyed by lesson code:

   - drills: which skills of the question bank a lesson practises. Every skill
     carries ten questions, so a lesson with one skill is ten questions and a
     lesson with two is five and five. `hard: true` takes the hardest items the
     bank has for those skills, which is what the hard-Module-2 phase is.

   - teach: the explanation a student reads before the ten. `rule` is the thing
     itself, `trap` is how the test makes you get it wrong. One sentence each,
     because a wall of text before a drill does not get read.

   The questions are JTS's own. Nothing here is taken from Bluebook or from
   any College Board material: their items are theirs, and preparing on a
   leaked live form is misconduct that costs the student the score. The
   official practice is done in Bluebook itself, which every lesson links to.

   Loaded after js/data/programme-units.js.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme.drills = {
  /* ---------------------------------------------------------------- math */
  'M1.1': { skills: ['m.alg.linear'] },
  'M1.2': { skills: ['m.alg.linear'] },
  'M1.3': { skills: ['m.alg.linear'] },
  'M1.4': { skills: ['m.alg.inequalities', 'm.alg.absolute-value'] },
  'M1.5': { skills: ['m.alg.systems'] },
  'M1.6': { skills: ['m.alg.systems'] },

  'M2.1': { skills: ['m.adv.radicals', 'm.adv.exponential'] },
  'M2.2': { skills: ['m.adv.quadratics'] },
  'M2.3': { skills: ['m.adv.quadratics'] },
  'M2.4': { skills: ['m.adv.quadratics'] },
  'M2.5': { skills: ['m.adv.polynomials', 'm.adv.rational'] },
  'M2.6': { skills: ['m.adv.exponential', 'm.adv.polynomials'] },

  'M3.1': { skills: ['m.psda.ratios', 'm.psda.percentages', 'm.psda.units'] },
  /* Desmos is a tool rather than a topic: the drill is the questions it is
     fastest on, which is where the guide's own tasks send you too. */
  'M3.2': { skills: ['m.adv.quadratics', 'm.alg.systems'], guide: '#/desmos-guide' },
  'M3.3': { skills: ['m.psda.statistics'] },
  'M3.4': { skills: ['m.psda.probability', 'm.psda.statistics'] },

  'M4.1': { skills: ['m.geo.triangles'] },
  'M4.2': { skills: ['m.geo.circles', 'm.geo.radians'] },
  'M4.3': { skills: ['m.geo.trig-ratios'] },
  'M4.4': { skills: ['m.geo.area-volume'] },

  'MR1': { fromErrorLog: true, skills: [] },
  'MR2': { fromErrorLog: true, skills: [] },

  /* -------------------------------------------------------------- verbal */
  'V1.1': { skills: ['rw.sec.boundaries'] },
  'V1.2': { skills: ['rw.sec.form-structure-sense'] },
  'V1.3': { skills: ['rw.sec.form-structure-sense'] },
  'V1.4': { skills: ['rw.sec.form-structure-sense'] },
  'V1.5': { skills: ['rw.sec.form-structure-sense'] },
  'V1.6': { skills: ['rw.sec.form-structure-sense', 'rw.sec.boundaries'] },

  'V2.1': { skills: ['rw.ei.transitions'] },
  'V2.2': { skills: ['rw.ei.rhetorical-synthesis'] },

  'V3.1': { skills: ['rw.cs.words-in-context'] },
  'V3.2': { skills: ['rw.cs.text-structure-purpose'] },
  'V3.3': { skills: ['rw.cs.cross-text-connections'] },

  'V4.1': { skills: ['rw.ii.central-ideas', 'rw.ii.inferences'] },
  'V4.2': { skills: ['rw.ii.evidence-textual', 'rw.ii.evidence-quantitative'] },

  /* ------------------------------------------------------- the hard phase */
  'HM1': { hard: true, skills: ['m.alg.linear', 'm.alg.systems'] },
  'HM2': { hard: true, skills: ['m.adv.quadratics', 'm.adv.radicals', 'm.adv.rational'] },
  'HM3': { hard: true, skills: ['m.psda.statistics', 'm.psda.probability'] },
  'HM4': { hard: true, skills: ['m.geo.triangles', 'm.geo.circles', 'm.geo.trig-ratios'] },
  'HM5': { hard: true, timed: true, skills: ['m.alg.linear', 'm.adv.quadratics', 'm.psda.ratios', 'm.geo.area-volume'] },

  'HV1': { hard: true, skills: ['rw.ii.inferences', 'rw.cs.text-structure-purpose'] },
  'HV2': { hard: true, skills: ['rw.ei.rhetorical-synthesis', 'rw.ii.evidence-quantitative'] },
  'HV3': { hard: true, skills: ['rw.sec.boundaries', 'rw.sec.form-structure-sense'] },

  /* --------------------------------------------------- buffer and the end */
  'BUF': { fromErrorLog: true, skills: [] },
  'T1': { hard: true, fromErrorLog: true, skills: [] },
  'T2': { hard: true, timed: true, skills: ['m.alg.linear', 'rw.cs.words-in-context'] },
  'T3': { fromErrorLog: true, skills: [] }
};
