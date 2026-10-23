/* ==========================================================================
   Skill taxonomy. Every question, lesson, error and recommendation points at
   a skillId from this file.

   examWeight is the share of the WHOLE Digital SAT (54 R&W + 44 Math = 98
   questions), so all weights here sum to ~1.00. It drives the "is this worth
   your time" half of the recommendation score in JTS.mastery.priority.
   Figures are College Board's published domain shares, split across skills by
   JTS from observed item frequency — approximate, not official per-skill data.
   ========================================================================== */
/* Topic and domain names are College Board's own, in English, whatever the
   interface language: they are the words a student meets in Bluebook, in the
   official materials and in the score report. name_ru and name_kk repeat
   them on purpose; the interface around them is still translated. */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.domains = [
  { id: 'rw.ii',  section: 'rw',   order: 1,
    name_en: 'Information and Ideas',       name_ru: 'Information and Ideas',       name_kk: 'Information and Ideas' },
  { id: 'rw.cs',  section: 'rw',   order: 2,
    name_en: 'Craft and Structure',         name_ru: 'Craft and Structure',         name_kk: 'Craft and Structure' },
  { id: 'rw.ei',  section: 'rw',   order: 3,
    name_en: 'Expression of Ideas',         name_ru: 'Expression of Ideas',         name_kk: 'Expression of Ideas' },
  { id: 'rw.sec', section: 'rw',   order: 4,
    name_en: 'Standard English Conventions', name_ru: 'Standard English Conventions', name_kk: 'Standard English Conventions' },
  { id: 'm.alg',  section: 'math', order: 5,
    name_en: 'Algebra', name_ru: 'Algebra', name_kk: 'Algebra' },
  { id: 'm.adv',  section: 'math', order: 6,
    name_en: 'Advanced Math', name_ru: 'Advanced Math', name_kk: 'Advanced Math' },
  { id: 'm.psda', section: 'math', order: 7,
    name_en: 'Problem-Solving and Data Analysis', name_ru: 'Problem-Solving and Data Analysis', name_kk: 'Problem-Solving and Data Analysis' },
  { id: 'm.geo',  section: 'math', order: 8,
    name_en: 'Geometry and Trigonometry', name_ru: 'Geometry and Trigonometry', name_kk: 'Geometry and Trigonometry' }
];

JTS.data.skills = [
  /* ---------------- Reading and Writing — Information and Ideas (26% of R&W) */
  { id: 'rw.ii.central-ideas', section: 'rw', domain: 'rw.ii', examWeight: 0.040, prerequisites: [],
    name_en: 'Central Ideas and Details',
    name_ru: 'Central Ideas and Details',
    name_kk: 'Central Ideas and Details' },
  { id: 'rw.ii.inferences', section: 'rw', domain: 'rw.ii', examWeight: 0.040, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Inferences',
    name_ru: 'Inferences',
    name_kk: 'Inferences' },
  { id: 'rw.ii.evidence-textual', section: 'rw', domain: 'rw.ii', examWeight: 0.040, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Command of Evidence: Textual',
    name_ru: 'Command of Evidence: Textual',
    name_kk: 'Command of Evidence: Textual' },
  { id: 'rw.ii.evidence-quantitative', section: 'rw', domain: 'rw.ii', examWeight: 0.023, prerequisites: ['rw.ii.evidence-textual'],
    name_en: 'Command of Evidence: Quantitative',
    name_ru: 'Command of Evidence: Quantitative',
    name_kk: 'Command of Evidence: Quantitative' },

  /* ---------------- Craft and Structure (28% of R&W) */
  { id: 'rw.cs.words-in-context', section: 'rw', domain: 'rw.cs', examWeight: 0.075, prerequisites: [],
    name_en: 'Words in Context',
    name_ru: 'Words in Context',
    name_kk: 'Words in Context' },
  { id: 'rw.cs.text-structure-purpose', section: 'rw', domain: 'rw.cs', examWeight: 0.053, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Text Structure and Purpose',
    name_ru: 'Text Structure and Purpose',
    name_kk: 'Text Structure and Purpose' },
  { id: 'rw.cs.cross-text-connections', section: 'rw', domain: 'rw.cs', examWeight: 0.026, prerequisites: ['rw.ii.central-ideas', 'rw.ii.inferences'],
    name_en: 'Cross-Text Connections',
    name_ru: 'Cross-Text Connections',
    name_kk: 'Cross-Text Connections' },

  /* ---------------- Expression of Ideas (20% of R&W) */
  { id: 'rw.ei.rhetorical-synthesis', section: 'rw', domain: 'rw.ei', examWeight: 0.055, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Rhetorical Synthesis',
    name_ru: 'Rhetorical Synthesis',
    name_kk: 'Rhetorical Synthesis' },
  { id: 'rw.ei.transitions', section: 'rw', domain: 'rw.ei', examWeight: 0.055, prerequisites: [],
    name_en: 'Transitions',
    name_ru: 'Transitions',
    name_kk: 'Transitions' },

  /* ---------------- Standard English Conventions (26% of R&W) */
  { id: 'rw.sec.boundaries', section: 'rw', domain: 'rw.sec', examWeight: 0.075, prerequisites: [],
    name_en: 'Boundaries',
    name_ru: 'Boundaries',
    name_kk: 'Boundaries' },
  { id: 'rw.sec.form-structure-sense', section: 'rw', domain: 'rw.sec', examWeight: 0.068, prerequisites: [],
    name_en: 'Form, Structure, and Sense',
    name_ru: 'Form, Structure, and Sense',
    name_kk: 'Form, Structure, and Sense' },

  /* ---------------- Algebra (35% of Math) */
  { id: 'm.alg.linear', section: 'math', domain: 'm.alg', examWeight: 0.070, prerequisites: [],
    name_en: 'Linear Equations and Functions',
    name_ru: 'Linear Equations and Functions',
    name_kk: 'Linear Equations and Functions' },
  { id: 'm.alg.systems', section: 'math', domain: 'm.alg', examWeight: 0.045, prerequisites: ['m.alg.linear'],
    name_en: 'Systems of Linear Equations',
    name_ru: 'Systems of Linear Equations',
    name_kk: 'Systems of Linear Equations' },
  { id: 'm.alg.inequalities', section: 'math', domain: 'm.alg', examWeight: 0.042, prerequisites: ['m.alg.linear'],
    name_en: 'Linear Inequalities',
    name_ru: 'Linear Inequalities',
    name_kk: 'Linear Inequalities' },

  /* ---------------- Advanced Math (35% of Math) */
  { id: 'm.adv.expressions', section: 'math', domain: 'm.adv', examWeight: 0.034, prerequisites: ['m.alg.linear'],
    name_en: 'Equivalent Expressions',
    name_ru: 'Equivalent Expressions',
    name_kk: 'Equivalent Expressions' },
  { id: 'm.adv.functions', section: 'math', domain: 'm.adv', examWeight: 0.075, prerequisites: ['m.alg.linear'],
    name_en: 'Nonlinear Functions',
    name_ru: 'Nonlinear Functions',
    name_kk: 'Nonlinear Functions' },
  { id: 'm.adv.nonlinear', section: 'math', domain: 'm.adv', examWeight: 0.048, prerequisites: ['m.adv.expressions'],
    name_en: 'Nonlinear Equations',
    name_ru: 'Nonlinear Equations',
    name_kk: 'Nonlinear Equations' },

  /* ---------------- Problem Solving and Data Analysis (15% of Math) */
  { id: 'm.psda.ratios', section: 'math', domain: 'm.psda', examWeight: 0.016, prerequisites: [],
    name_en: 'Ratios, Rates, Proportional Relationships, and Units',
    name_ru: 'Ratios, Rates, Proportional Relationships, and Units',
    name_kk: 'Ratios, Rates, Proportional Relationships, and Units' },
  { id: 'm.psda.percentages', section: 'math', domain: 'm.psda', examWeight: 0.016, prerequisites: ['m.psda.ratios'],
    name_en: 'Percentages',
    name_ru: 'Percentages',
    name_kk: 'Percentages' },
  { id: 'm.psda.units', section: 'math', domain: 'm.psda', examWeight: 0.010, prerequisites: ['m.psda.ratios'],
    name_en: 'Units',
    name_ru: 'Units',
    name_kk: 'Units' },
  { id: 'm.psda.statistics', section: 'math', domain: 'm.psda', examWeight: 0.015, prerequisites: [],
    name_en: 'Distributions and Measures of Center and Spread',
    name_ru: 'Distributions and Measures of Center and Spread',
    name_kk: 'Distributions and Measures of Center and Spread' },
  { id: 'm.psda.probability', section: 'math', domain: 'm.psda', examWeight: 0.010, prerequisites: ['m.psda.ratios'],
    name_en: 'Probability and Conditional Probability',
    name_ru: 'Probability and Conditional Probability',
    name_kk: 'Probability and Conditional Probability' },

  /* ---------------- Geometry and Trigonometry (15% of Math) */
  { id: 'm.geo.triangles', section: 'math', domain: 'm.geo', examWeight: 0.020, prerequisites: ['m.alg.linear'],
    name_en: 'Lines, Angles, and Triangles',
    name_ru: 'Lines, Angles, and Triangles',
    name_kk: 'Lines, Angles, and Triangles' },
  { id: 'm.geo.circles', section: 'math', domain: 'm.geo', examWeight: 0.015, prerequisites: [],
    name_en: 'Circles',
    name_ru: 'Circles',
    name_kk: 'Circles' },
  { id: 'm.geo.area-volume', section: 'math', domain: 'm.geo', examWeight: 0.017, prerequisites: [],
    name_en: 'Area and Volume',
    name_ru: 'Area and Volume',
    name_kk: 'Area and Volume' },
  { id: 'm.geo.trig-ratios', section: 'math', domain: 'm.geo', examWeight: 0.010, prerequisites: ['m.geo.triangles'],
    name_en: 'Right Triangles and Trigonometry',
    name_ru: 'Right Triangles and Trigonometry',
    name_kk: 'Right Triangles and Trigonometry' },
  { id: 'm.geo.radians', section: 'math', domain: 'm.geo', examWeight: 0.005, prerequisites: ['m.geo.circles', 'm.geo.trig-ratios'],
    name_en: 'Degrees and Radians',
    name_ru: 'Degrees and Radians',
    name_kk: 'Degrees and Radians' }
];
