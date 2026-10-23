/* ==========================================================================
   The school's course: its words, its homework and its routines.

   The course's shape — the lesson order, the packages (basic: lessons 1–24;
   extra: the Challenge lessons), the phases, the Bluebook tests and the
   dates — lives in js/shared/plan-engine.js, the one file the browser and the
   server both run. This file only says things about the course in words.

   A unit still carries n3 and n2 (its number on a three- and a two-a-week
   schedule) because the lookups were written for both; they are the same
   number, and only the three-a-week schedule is used.

   A unit's wording lives once, in js/data/programme-units.js, and every
   screen reads it from there by code (C1 … C24, CH1 … CH12). The code is also
   the tag the error log refers to, which is the whole point of having one.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme = {
  /* ------------------------------------------------------------- shape */
  /* How many lessons a student has comes from their packages
     (js/shared/plan-engine.js), not from here. */
  wordsPerLesson: 10,

  /** Three lessons a week, for everyone. Not a setting. */
  schedules: [
    {
      id: 3, perWeek: 3,
      name: { en: 'Three units a week', ru: 'Три юнита в неделю', kk: 'Аптасына үш юнит' }
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
