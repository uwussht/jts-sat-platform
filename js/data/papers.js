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
 * Register one paper. `modules` are [{key, section, questions:[...]}] in exam
 * order; the minutes come from JTS.config.examStructure, so a paper can never
 * disagree with the exam about how long a module is.
 */
JTS.data.addPaper = function (paper) {
  var modules = paper.modules.map(function (m) {
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
