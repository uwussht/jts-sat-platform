/* ==========================================================================
   Past papers.

   A past paper is a whole exam, fixed: the same 98 questions in the same order
   for every student who sits it, four modules, the real clock. It is not the
   generated mock — that one builds a fresh form out of the practice bank every
   time, and routes its second modules off how the first went. A paper routes
   nothing. Module 2 is whatever the paper says it is, because that is what
   sitting a paper means.

   Two things a paper deliberately does NOT carry:

   - no explanations, no distractor rationales, no hints, no methods. The
     teaching layer belongs to practice. A paper is the exam, and the review
     afterwards shows what you picked and what was right, and stops there.
     JTS.bank.validateAll enforces this: a paper item that grows an explanation
     fails the bank.
   - no AI. The study-help layer is built only in study mode, and the paper
     review screen does not offer the "ask" button it offers for a mock.

   All of it is JTS original, written to the published Digital SAT blueprint —
   domain shares, 27/27/22/22, about a quarter of Math as student-produced
   response. Nothing here is copied from College Board, Bluebook, Khan Academy
   or any other publisher, and nothing here is a real administered form: those
   are College Board's and are not ours to reprint.

   Adding a paper: call JTS.data.addPaper with modules in exam order. The
   questions go into the bank (so a session can render and grade them) with
   meta.kind = 'paper', which is what keeps them out of practice, the
   diagnostic and the generated mock.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.papers = JTS.data.papers || [];

/**
 * A paper's questions are written as plain objects, one per question:
 *
 *   {
 *     "question_type": "words_in_context",
 *     "difficulty": "hard",                 // easy | medium | hard
 *     "stimulus": "The passage …",          // optional; text or HTML
 *     "question": "Which choice completes the text …?",
 *     "choices": { "A": "…", "B": "…", "C": "…", "D": "…" },
 *     "answer": "C"
 *   }
 *
 * A student-produced-response (grid-in) Math question has no "choices", and
 * its "answer" is the value, or a list of every accepted form: "9" or
 * ["7/2", "3.5"].
 *
 * question_type is the skill, in words:
 *   Reading & Writing — words_in_context, text_structure_purpose,
 *     cross_text_connections, central_ideas, evidence_textual,
 *     evidence_quantitative, inferences, boundaries, form_structure_sense,
 *     transitions, rhetorical_synthesis
 *   Math — linear, systems, inequalities, absolute_value, quadratics,
 *     polynomials, exponential, radicals, rational, ratios, percentages,
 *     units, statistics, probability, triangles, circles, area_volume,
 *     trig_ratios, radians
 *
 * Question ids are made from the paper's `questionPrefix`, the module and the
 * position (p1.rw1.01, p1.m2.22 …). Keep a paper's prefix once students have
 * sat it: their saved answers point at those ids.
 *
 * A plain-text stimulus is turned into paragraphs: a blank line starts a new
 * one, a single line break stays a line break. A stimulus that already holds
 * HTML (a <table>, an <u>nderline) is used as it is.
 */
JTS.data.paperQuestion = function (q, paperId, moduleKey, n, section) {
  if (!q.question_type) return q;
  var slug = String(q.question_type).trim().toLowerCase().replace(/_/g, '-');
  /* Advanced Math is three topics now and absolute value sits in
     inequalities; the older question types still name the old topics. */
  slug = { 'quadratics': 'nonlinear', 'radicals': 'nonlinear', 'exponential': 'functions',
           'polynomials': 'expressions', 'rational': 'expressions',
           'absolute-value': 'inequalities' }[slug] || slug;
  var prefix = section === 'math' ? 'm.' : 'rw.';
  var skill = (JTS.data.skills || []).filter(function (s) {
    return s.id.indexOf(prefix) === 0 && s.id.split('.').pop() === slug;
  })[0];
  var levels = { easy: 1, medium: 2, hard: 3 };
  var difficulty = typeof q.difficulty === 'number'
    ? q.difficulty : (levels[String(q.difficulty || '').toLowerCase()] || 2);

  function html(text) {
    if (!text) return null;
    text = String(text);
    if (/<[a-z][^>]*>/i.test(text)) return text;
    var esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return esc.split(/\n\s*\n/).map(function (para) {
      return '<p>' + para.replace(/\n/g, '<br>') + '</p>';
    }).join('');
  }

  var out = {
    id: q.id || (paperId + '.' + moduleKey + '.' + (n < 10 ? '0' : '') + n),
    skillId: skill ? skill.id : ('unknown:' + q.question_type),
    difficulty: difficulty,
    stem: q.question
  };
  var passage = html(q.stimulus);
  if (passage) out.passage = passage;
  if (q.choices) {
    out.type = 'mcq';
    out.options = ['A', 'B', 'C', 'D'].map(function (k) { return q.choices[k]; });
    out.answer = String(q.answer).trim().toUpperCase();
  } else {
    out.type = 'spr';
    out.answer = Array.isArray(q.answer) ? q.answer.map(String) : [String(q.answer)];
  }
  return out;
};

/**
 * Register one paper. `modules` are [{key, section, questions:[...]}] in exam
 * order; the minutes come from JTS.config.examStructure, so a paper can never
 * disagree with the exam about how long a module is.
 */
JTS.data.addPaper = function (paper) {
  if (JTS.data.papers.some(function (p) { return p.id === paper.id; })) {
    console.error('[JTS] two papers use the id "' + paper.id + '" — the second ("' +
      paper.title + '") is skipped. Give each paper its own id and questionPrefix.');
    return;
  }
  var modules = paper.modules.map(function (m) {
    m.questions = m.questions.map(function (q, i) {
      return JTS.data.paperQuestion(q, paper.questionPrefix || paper.id, m.key, i + 1, m.section);
    });
    m.questions.forEach(function (q) {
      q.section = m.section;
      q.calculator = m.section === 'math';
      q.type = q.type || 'mcq';
      q.difficulty = q.difficulty || 2;
      q.meta = {
        owner: 'JTS', source: paper.title, licenseStatus: 'original',
        sourceRef: paper.id, reviewedAt: null, reviewStatus: 'draft',
        version: 1, kind: 'paper', paperId: paper.id
      };
    });
    JTS.data.addQuestions(m.questions);
    return {
      key: m.key, section: m.section,
      questionIds: m.questions.map(function (q) { return q.id; })
    };
  });
  JTS.data.papers.push({
    id: paper.id, title: paper.title, year: paper.year,
    note: paper.note || null, modules: modules,
    count: modules.reduce(function (n, m) { return n + m.questionIds.length; }, 0)
  });
};

JTS.papers = {
  all: function () { return JTS.data.papers; },
  get: function (id) {
    return JTS.data.papers.filter(function (p) { return p.id === id; })[0] || null;
  },
  /** The paper a question belongs to, or null for everything else. */
  of: function (q) {
    return q && q.meta && q.meta.kind === 'paper' ? this.get(q.meta.paperId) : null;
  }
};
