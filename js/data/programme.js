/* ==========================================================================
   The JTS 36-unit course.

   This is the school's own course, not the platform's generated plan: three
   months, 36 units. Months 1 and 2 are 24 content units in alternating
   weeks — two Reading & Writing units and one Math unit, then one Reading
   & Writing unit and two Math units. Month 3 is Challenge 1–12: timed sets
   at the difficulty of the second, harder module, each followed by an error
   review. Bluebook Practice Test 6 is the diagnostic, and an official
   practice test closes Month 1 and Month 2.

   The course runs at three units a week for everyone, so it takes 12
   weeks. A unit still carries n3 and n2 (its number on a three- and a
   two-a-week schedule) because the lookups were written for both; they are
   the same number, and only the three-a-week schedule is used.

   Four screens read this one file, which is why it is data and not prose in
   four places:

   - #/roadmap    — the chronology: months, checkpoints and every unit in order;
   - #/materials  — the units, Verbal and Math apart, with their domains;
   - #/plan       — the homework after each unit;
   - #/guide      — the error log and the terms a beginner has not met.

   A unit's wording lives once, in js/data/programme-units.js, and every
   screen reads it from there by code (C1 … C24, CH1 … CH12). The code is also
   the tag the error log refers to, which is the whole point of having one.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme = {
  /* ------------------------------------------------------------- shape */
  lessonsTotal: 36,
  wordsPerLesson: 10,
  /** 36 units × 10 words. Printed on the plan so the number is not a guess. */
  wordsTotal: 360,

  /**
   * The schedule: three units a week, 12 weeks, a practice test every
   * week. It is the same for every student and is not a setting.
   */
  schedules: [
    {
      id: 3, perWeek: 3, weeks: 12, tests: 12,
      name: { en: 'Three units a week', ru: 'Три юнита в неделю', kk: 'Аптасына үш юнит' }
    }
  ],

  /**
   * Three stages, a month each at three units a week. `from`/`to` are unit
   * numbers; they are the same on both schedules, only the weeks differ.
   */
  phases: [
    {
      id: 'month1', weeks3: '1–4', weeks2: '1–6', from3: 1, to3: 12, from2: 1, to2: 12,
      gate: 1,
      name: { en: 'Month 1 · Foundations', ru: 'Месяц 1 · Основа', kk: '1-ай · Негіз' },
      lead: {
        en: 'Units 1–12, weeks 1–4: the first half of the content. Every unit is a method, a full lesson and a practice set, with a full practice test every weekend.',
        ru: 'Юниты 1–12, недели 1–4: первая половина материала. Каждый юнит — метод, полный урок и практика, и каждые выходные — полный practice test.',
        kk: '1–12 юниттер, 1–4 апталар: материалдың бірінші жартысы. Әр юнит — әдіс, толық сабақ және жаттығу, әр демалыс сайын толық practice test.'
      }
    },
    {
      id: 'month2', weeks3: '5–8', weeks2: '7–12', from3: 13, to3: 24, from2: 13, to2: 24,
      gate: 2,
      name: { en: 'Month 2 · The rest of the content', ru: 'Месяц 2 · Остальной материал', kk: '2-ай · Қалған материал' },
      lead: {
        en: 'Units 13–24, weeks 5–8: the remaining topics. Timing starts to matter from week 4, and practice shifts to the hardest questions in weeks 6–8.',
        ru: 'Юниты 13–24, недели 5–8: оставшиеся темы. С 4-й недели важен тайминг, а в неделях 6–8 практика смещается к самым сложным вопросам.',
        kk: '13–24 юниттер, 5–8 апталар: қалған тақырыптар. 4-аптадан бастап уақыт маңызды, ал 6–8 апталарда жаттығу ең күрделі сұрақтарға ауысады.'
      }
    },
    {
      id: 'challenge', weeks3: '9–12', weeks2: '13–18', from3: 25, to3: 36, from2: 25, to2: 36,
      name: { en: 'Month 3 · Challenge', ru: 'Месяц 3 · Challenge', kk: '3-ай · Challenge' },
      lead: {
        en: 'Challenge 1–12: hard-module practice only. Timed sets at the difficulty of the second, harder module, each followed by an error review.',
        ru: 'Challenge 1–12: только сложный модуль. Наборы на время на уровне второго, сложного модуля, и после каждого — разбор ошибок.',
        kk: 'Challenge 1–12: тек күрделі модуль. Екінші, күрделі модуль деңгейіндегі уақытпен орындалатын жинақтар, әрқайсысынан кейін қателерді талдау.'
      }
    }
  ],

  /** Two checkpoints: the official practice test after Month 1 and Month 2. */
  gates: [
    {
      n: 1, afterLesson3: 12, afterLesson2: 12, test3: 4, test2: 6,
      name: { en: 'Progress test 1 — end of Month 1', ru: 'Прогресс-тест 1 — конец месяца 1', kk: '1-прогресс тест — 1-айдың соңы' }
    },
    {
      n: 2, afterLesson3: 24, afterLesson2: 24, test3: 8, test2: 12,
      name: { en: 'Progress test 2 — end of Month 2', ru: 'Прогресс-тест 2 — конец месяца 2', kk: '2-прогресс тест — 2-айдың соңы' }
    }
  ],
  gateRule: {
    en: 'Each month closes with a new official Bluebook practice test, which also counts as that weekend’s test. Review it the next day: a test without a review is worth half a test.',
    ru: 'Каждый месяц заканчивается новым официальным practice test в Bluebook — он же тест этих выходных. Разберите его на следующий день: тест без разбора стоит половину теста.',
    kk: 'Әр ай Bluebook-тағы жаңа ресми practice test-пен аяқталады — ол сол демалыстың тесті де. Оны келесі күні талдаңыз: талдаусыз тест жарты тестке тең.'
  },

  /** The five routines that run alongside the units, for 1500+. */
  rhythm: [
    { id: 'test',
      en: 'A full practice test every weekend in weeks 1–8, in one sitting, reviewed the next day.',
      ru: 'Полный practice test каждые выходные в неделях 1–8, за один присест, с разбором на следующий день.',
      kk: '1–8 апталарда әр демалыс сайын бір отырыста толық practice test, келесі күні талдаумен.' },
    { id: 'log',
      en: 'A mistake log from day one: every miss sorted into content gap, careless error or timing.',
      ru: 'Журнал ошибок с первого дня: каждый промах — пробел в материале, невнимательность или тайминг.',
      kk: 'Бірінші күннен қателер журналы: әр қате — материалдағы олқылық, абайсыздық немесе уақыт.' },
    { id: 'timing',
      en: 'Timing from week 4: about 71 seconds per R&W question and 95 per Math question. Flag and move on.',
      ru: 'Тайминг с 4-й недели: около 71 секунды на вопрос R&W и 95 на вопрос Math. Отметьте и идите дальше.',
      kk: '4-аптадан бастап уақыт: R&W сұрағына шамамен 71 секунд, Math сұрағына 95. Белгілеп, әрі қарай өтіңіз.' },
    { id: 'hard',
      en: 'Hard questions in weeks 6–8, especially in Math. Month 3 is then hard modules only.',
      ru: 'Сложные вопросы в неделях 6–8, особенно в Math. Месяц 3 — только сложные модули.',
      kk: '6–8 апталарда күрделі сұрақтар, әсіресе Math-та. 3-ай — тек күрделі модульдер.' },
    { id: 'daily',
      en: 'Vocabulary, 10 minutes a day, from Unit 1 through test day.',
      ru: 'Словарь, 10 минут в день, с 1-го юнита до дня экзамена.',
      kk: 'Сөздік, күніне 10 минут, 1-юниттен емтихан күніне дейін.' }
  ],

  /** The rule that keeps the course from forgetting its own start. */
  redrill: {
    en: 'Re-drill rule. If a topic from four weeks ago comes back as a mistake on a practice test, it is re-drilled that same week. It is the main defence against forgetting.',
    ru: 'Правило re-drill. Если тема четырёхнедельной давности всплывает ошибкой на practice test, её перерешивают на этой же неделе. Это главная защита от забывания.',
    kk: 'Re-drill ережесі. Төрт апта бұрынғы тақырып practice test-те қате болып шықса, оны сол аптада қайта пысықтайды. Бұл — ұмытуға қарсы басты қорғаныс.'
  },

  /** The error budget a 1500 allows, as an orientation and not a promise. */
  errorBudget: {
    en: 'A 1500+ score is about 750 per section: roughly 3–5 misses in Reading & Writing and 2–4 in Math. The scale moves from test to test, so the working target in practice is 1520+.',
    ru: '1500+ — это около 750 за секцию: примерно 3–5 ошибок в R&W и 2–4 в Math. Шкала меняется от теста к тесту, поэтому цель на практике — 1520+.',
    kk: '1500+ — секцияға шамамен 750: R&W-де 3–5, Math-та 2–4 қате. Шкала тесттен тестке өзгереді, сондықтан практикадағы мақсат — 1520+.'
  },

  /* ------------------------------------------------------------ homework */
  /** The three things that follow every unit, in the order they are set. */
  homework: [
    { id: 'words', mins: '10–15',
      name: { en: 'Word list #N', ru: 'Word list #N', kk: 'Word list #N' },
      body: { en: 'Ten words, N being the unit number. The test on them opens the next unit.',
              ru: 'Десять слов, где N — номер юнита. Тест по ним — в начале следующего юнита.',
              kk: 'Он сөз, N — юнит нөмірі. Олар бойынша тест келесі юниттің басында.' } },
    { id: 'set', mins: '60–90',
      name: { en: 'Set #N', ru: 'Набор #N', kk: '#N жинағы' },
      body: { en: 'The practice set on this unit’s code, Easy through Hard. In the Challenge month, Hard only.',
              ru: 'Практика по коду этого юнита, от Easy к Hard. В месяц Challenge — только Hard.',
              kk: 'Осы юниттің коды бойынша жаттығу, Easy-ден Hard-қа дейін. Challenge айында — тек Hard.' } },
    { id: 'video', mins: '20–30',
      name: { en: 'Read ahead', ru: 'Прочитать заранее', kk: 'Алдын ала оқу' },
      body: { en: 'Read the written lesson for the NEXT unit and take notes — so the unit starts from practice, not from first contact.',
              ru: 'Прочитайте урок СЛЕДУЮЩЕГО юнита с конспектом — чтобы юнит начинался с практики, а не с первого знакомства.',
              kk: 'КЕЛЕСІ юниттің жазбаша сабағын конспектімен оқыңыз — сабақ практикадан басталуы үшін, алғашқы танысудан емес.' } }
  ]
};
