/* ==========================================================================
   The 48 lessons, in order, plus lesson 0 — the diagnostic.

   A lesson names TAGS, never topic prose: the wording lives once in
   js/data/programme-topics.js and every screen reads it from there. `focus` is
   only for the lessons that have no tags of their own — the twelve full-test
   reviews of month 3 and the two mixed hard modules.

   `practice` is the timed homework for that lesson, as a key:
     spiral      ten questions on earlier tags, on the clock
     hardSpiral  the same, hard items only
     rwSection   one Reading & Writing section
     mathSection one Math section
     rwHard      a hard Module 2, Reading & Writing
     mathHard    a hard Module 2, Math
     rwAll       the end-of-stage test over every R&W tag
     fullTest    a full test as a checkpoint
     gate1/2/3   the gate
     none        lesson 0 itself

   Loaded after js/data/programme-topics.js.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme.lessons = [
  { n: 0, month: 0, kind: 'diagnostic', tags: [], practice: 'none' },

  /* --- month 1: every question type once, in module order --------------- */
  { n: 1,  month: 1, kind: 'writing', seq: 1, tags: ['R1'], practice: 'spiral' },
  { n: 2,  month: 1, kind: 'writing', seq: 2, tags: ['R2'], practice: 'spiral' },
  { n: 3,  month: 1, kind: 'math',    seq: 1, tags: ['M1', 'M2', 'M3', 'M7'], practice: 'spiral' },
  { n: 4,  month: 1, kind: 'reading', seq: 1, tags: ['R11'], practice: 'spiral' },
  { n: 5,  month: 1, kind: 'reading', seq: 2, tags: ['R12'], practice: 'rwSection' },
  { n: 6,  month: 1, kind: 'math',    seq: 2, tags: ['M4', 'M5', 'M6'], practice: 'mathSection' },
  { n: 7,  month: 1, kind: 'writing', seq: 3, tags: ['R3'], practice: 'spiral' },
  { n: 8,  month: 1, kind: 'writing', seq: 4, tags: ['R4', 'R5'], practice: 'spiral' },
  { n: 9,  month: 1, kind: 'math',    seq: 3, tags: ['M8', 'M9', 'M19'], practice: 'spiral' },
  { n: 10, month: 1, kind: 'reading', seq: 3, tags: ['R14'], practice: 'spiral' },
  { n: 11, month: 1, kind: 'reading', seq: 4, tags: ['R15'], practice: 'rwSection' },
  { n: 12, month: 1, kind: 'math',    seq: 4, tags: ['M10', 'M11', 'M12'], practice: 'mathSection' },

  /* --- month 2: the rest of the tags, same rhythm ----------------------- */
  { n: 13, month: 2, kind: 'writing', seq: 5, tags: ['R6', 'R7'], practice: 'spiral' },
  { n: 14, month: 2, kind: 'writing', seq: 6, tags: ['R8'], practice: 'spiral' },
  { n: 15, month: 2, kind: 'math',    seq: 5, tags: ['M13', 'M14', 'M15'], practice: 'spiral' },
  { n: 16, month: 2, kind: 'reading', seq: 5, tags: ['R16'], practice: 'spiral' },
  { n: 17, month: 2, kind: 'reading', seq: 6, tags: ['R17'], practice: 'rwSection' },
  { n: 18, month: 2, kind: 'math',    seq: 6, tags: ['M16', 'M17', 'M18'], practice: 'mathSection' },
  { n: 19, month: 2, kind: 'writing', seq: 7, tags: ['R9'], practice: 'spiral' },
  { n: 20, month: 2, kind: 'writing', seq: 8, tags: ['R10'], practice: 'spiral' },
  { n: 21, month: 2, kind: 'math',    seq: 7, tags: ['M20', 'M21', 'M22', 'M23', 'M24', 'M25'], practice: 'spiral' },
  { n: 22, month: 2, kind: 'reading', seq: 7, tags: ['R13'], practice: 'spiral' },
  { n: 23, month: 2, kind: 'reading', seq: 8, tags: ['R11', 'R14'], practice: 'rwAll',
    focus: { en: 'Literature and poetry — R11 and R14 on literary texts',
             ru: 'Литература и поэзия — R11 и R14 на художественных текстах',
             kk: 'Әдебиет пен поэзия — көркем мәтіндердегі R11 мен R14' } },
  { n: 24, month: 2, kind: 'math',    seq: 8, tags: ['M26', 'M27', 'M28', 'M29'], practice: 'gate1' },

  /* --- month 3: a full test before every lesson, reviewed in it --------- */
  { n: 25, month: 3, kind: 'test', seq: 1, tags: [], practice: 'fullTest',
    focus: { en: 'Review, and the timing strategy for Reading & Writing',
             ru: 'Разбор и стратегия тайминга R&W',
             kk: 'Талдау және R&W тайминг стратегиясы' } },
  { n: 26, month: 3, kind: 'test', seq: 2, tags: [], practice: 'fullTest',
    focus: { en: 'Review, and Math timing — skipping and coming back',
             ru: 'Разбор и тайминг Math — пропуск и возврат',
             kk: 'Талдау және Math тайминг — өткізіп, қайта оралу' } },
  { n: 27, month: 3, kind: 'test', seq: 3, tags: [], practice: 'fullTest',
    focus: { en: 'Review, and the Desmos moves',
             ru: 'Разбор и приёмы Desmos',
             kk: 'Талдау және Desmos тәсілдері' } },
  { n: 28, month: 3, kind: 'test', seq: 4, tags: [], practice: 'fullTest',
    focus: { en: 'Review, and the traps in Reading & Writing answer choices',
             ru: 'Разбор и ловушки в вариантах ответа R&W',
             kk: 'Талдау және R&W жауап нұсқаларындағы тұзақтар' } },
  { n: 29, month: 3, kind: 'test', seq: 5, tags: [], practice: 'fullTest',
    focus: { en: 'Review, and Module 1 without a single error',
             ru: 'Разбор и Модуль 1 без единой ошибки',
             kk: 'Талдау және қатесіз 1-модуль' } },
  { n: 30, month: 3, kind: 'test', seq: 6, tags: [], practice: 'fullTest',
    focus: { en: 'Review, and grid-ins — the format of the answer',
             ru: 'Разбор и grid-in — формат ответа',
             kk: 'Талдау және grid-in — жауап пішімі' } },
  { n: 31, month: 3, kind: 'test', seq: 7,  tags: [], practice: 'fullTest', errorLogDriven: true },
  { n: 32, month: 3, kind: 'test', seq: 8,  tags: [], practice: 'fullTest', errorLogDriven: true },
  { n: 33, month: 3, kind: 'test', seq: 9,  tags: [], practice: 'fullTest', errorLogDriven: true },
  { n: 34, month: 3, kind: 'test', seq: 10, tags: [], practice: 'fullTest', errorLogDriven: true },
  { n: 35, month: 3, kind: 'test', seq: 11, tags: [], practice: 'fullTest', errorLogDriven: true },
  { n: 36, month: 3, kind: 'test', seq: 12, tags: [], practice: 'gate2' },

  /* --- month 4: the same rhythm, hard items only ------------------------ */
  { n: 37, month: 4, kind: 'hardWriting', seq: 1, tags: ['R1', 'R2', 'R3'], practice: 'hardSpiral' },
  { n: 38, month: 4, kind: 'hardWriting', seq: 2, tags: ['R4', 'R5', 'R6', 'R7', 'R8'], practice: 'hardSpiral' },
  { n: 39, month: 4, kind: 'hardMath',    seq: 1, tags: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7'], practice: 'hardSpiral' },
  { n: 40, month: 4, kind: 'hardReading', seq: 1, tags: ['R11', 'R12', 'R13'], practice: 'hardSpiral' },
  { n: 41, month: 4, kind: 'hardReading', seq: 2, tags: ['R14', 'R15'], practice: 'rwHard' },
  { n: 42, month: 4, kind: 'hardMath',    seq: 2, tags: ['M8', 'M9', 'M10', 'M11', 'M12', 'M19'], practice: 'mathHard' },
  { n: 43, month: 4, kind: 'hardWriting', seq: 3, tags: ['R9', 'R10'], practice: 'hardSpiral' },
  { n: 44, month: 4, kind: 'hardWriting', seq: 4, tags: [], practice: 'hardSpiral',
    focus: { en: 'Conventions and Expression mixed, on the clock',
             ru: 'Микс Conventions и Expression на время',
             kk: 'Conventions пен Expression араласқан, уақытпен' } },
  { n: 45, month: 4, kind: 'hardMath',    seq: 3, tags: ['M13', 'M14', 'M15', 'M16', 'M17', 'M18'], practice: 'fullTest' },
  { n: 46, month: 4, kind: 'hardReading', seq: 3, tags: ['R16', 'R17'], practice: 'hardSpiral' },
  { n: 47, month: 4, kind: 'hardReading', seq: 4, tags: [], practice: 'hardSpiral',
    focus: { en: 'Everything mixed: a whole hard Reading & Writing module',
             ru: 'Всё вперемешку: целый hard-модуль R&W',
             kk: 'Бәрі араласқан: тұтас hard R&W модулі' } },
  { n: 48, month: 4, kind: 'hardMath',    seq: 4,
    tags: ['M20', 'M21', 'M22', 'M23', 'M24', 'M25', 'M26', 'M27', 'M28', 'M29'], practice: 'gate3' }
];

/** Lessons of a stage, by the stage's lesson range. */
JTS.data.programme.lessonsOfStage = function (stage) {
  return JTS.data.programme.lessons.filter(function (l) {
    return l.n >= stage.from && l.n <= stage.to;
  });
};

/** Every lesson that teaches a tag, in order. */
JTS.data.programme.lessonsForTag = function (tag) {
  return JTS.data.programme.lessons.filter(function (l) {
    return l.tags.indexOf(tag) >= 0;
  });
};
