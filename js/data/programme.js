/* ==========================================================================
   The JTS 1500+ programme.

   This is the school's own course, not the platform's generated plan: 45
   lessons in eight units — four Math, four Verbal — plus a hard-Module-2
   phase and a test week, with a full practice test every week from the first.

   The same 45 lessons run on two schedules. Three lessons a week finishes in
   15 weeks; two a week finishes in 23 and leaves room for a second mixed
   review and a buffer lesson. The content does not change between them, only
   the pace and the lesson numbers in the hard phase — which is why a lesson
   carries two numbers, n3 and n2, and everything that prints a number asks
   which schedule the student is on.

   Four screens read this one file, which is why it is data and not prose in
   four places:

   - #/roadmap    — the chronology: phases, gates and every lesson in order;
   - #/materials  — the units, Verbal and Math apart, with their lessons;
   - #/plan       — the homework after each lesson;
   - #/guide      — the error log and the terms a beginner has not met.

   A lesson's wording lives once, in js/data/programme-units.js, and every
   screen reads it from there by code (M1.1, V2.2, HM4). The code is also the
   tag the error log refers to, which is the whole point of having one.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme = {
  /* ------------------------------------------------------------- shape */
  lessonsTotal: 45,
  wordsPerLesson: 10,
  /** 45 lessons × 10 words. Printed on the plan so the number is not a guess. */
  wordsTotal: 450,

  /**
   * The two schedules. `weeks` is how long the course takes, `perWeek` how
   * many lessons are in a week, and `tests` how many practice tests that
   * comes to — one a week, from week one.
   */
  schedules: [
    {
      id: 3, perWeek: 3, weeks: 15, tests: 15,
      name: { en: 'Three lessons a week', ru: 'Три урока в неделю', kk: 'Аптасына үш сабақ' },
      note: {
        en: '15 weeks. One mixed review inside the content phase. The risk is overload: little time to go through the mistakes.',
        ru: '15 недель. Один mixed review внутри content-фазы. Риск — перегруз: мало времени на разбор промахов.',
        kk: '15 апта. Content-фазаның ішінде бір mixed review. Тәуекел — шамадан тыс жүктеме: қателерді талдауға уақыт аз.'
      }
    },
    {
      id: 2, perWeek: 2, weeks: 23, tests: 23,
      name: { en: 'Two lessons a week', ru: 'Два урока в неделю', kk: 'Аптасына екі сабақ' },
      note: {
        en: '23 weeks. Two mixed reviews and a buffer lesson. The risk is distance: topics drift far apart and are forgotten, which is what the re-drill rule is for.',
        ru: '23 недели. Два mixed review и буферный урок. Риск — расстояние: темы уходят далеко друг от друга и забываются, ради этого и существует правило re-drill.',
        kk: '23 апта. Екі mixed review және буферлік сабақ. Тәуекел — қашықтық: тақырыптар бір-бірінен алыстап, ұмытылады; re-drill ережесі сол үшін бар.'
      }
    }
  ],

  /**
   * Three phases. `from`/`to` are lesson numbers on each schedule, because the
   * hard phase starts at a different lesson depending on the pace.
   */
  phases: [
    {
      id: 'content', weeks3: '1–11', weeks2: '1–18', from3: 1, to3: 33, from2: 1, to2: 36,
      gate: 1,
      name: { en: 'Content phase', ru: 'Content phase', kk: 'Content phase' },
      lead: {
        en: 'Every topic once, by unit: four Math units and four Verbal units, 34 lessons of new material plus mixed review. A full practice test every week from the first.',
        ru: 'Все темы по разу, по юнитам: 4 Math-юнита и 4 Verbal-юнита, 34 урока нового материала плюс mixed review. Полный practice test каждую неделю, начиная с первой.',
        kk: 'Барлық тақырып бір реттен, юниттер бойынша: 4 Math және 4 Verbal юнит, 34 сабақ жаңа материал және mixed review. Бірінші аптадан бастап апта сайын толық practice test.'
      }
    },
    {
      id: 'hard', weeks3: '12–14', weeks2: '19–22', from3: 34, to3: 42, from2: 37, to2: 44,
      gate: 2,
      name: { en: 'Hard Module 2 phase', ru: 'Hard Module 2 phase', kk: 'Hard Module 2 phase' },
      lead: {
        en: 'Eight lessons on hard Module 2 material only — Hard Math and Hard Verbal. This is where 1500 is won or lost: few mistakes in Module 1 earns a hard Module 2, and only there are the 650+ points available at all.',
        ru: 'Восемь уроков только на сложном материале уровня Модуля 2 — Hard Math и Hard Verbal. Именно здесь 1500 выигрывается или теряется: мало ошибок в Модуле 1 → сложный Модуль 2, и только там доступны баллы 650+.',
        kk: 'Тек күрделі 2-модуль деңгейіндегі материалға арналған сегіз сабақ — Hard Math және Hard Verbal. 1500 дәл осында ұтылады немесе жоғалады: 1-модульде қате аз болса, күрделі 2-модуль ашылады, ал 650+ ұпай тек сонда қолжетімді.'
      }
    },
    {
      id: 'test', weeks3: '15', weeks2: '23', from3: 43, to3: 45, from2: 45, to2: 45,
      name: { en: 'Test week', ru: 'Test week', kk: 'Test week' },
      lead: {
        en: 'The final hard set, pacing and strategy, a light review. The last practice test is at the START of the week, and after it there is no new material.',
        ru: 'Финальный hard-набор, pacing и стратегия, лёгкий повтор. Последний practice test — в НАЧАЛЕ недели, дальше нового материала нет.',
        kk: 'Қорытынды hard-жинақ, pacing және стратегия, жеңіл қайталау. Соңғы practice test — аптаның БАСЫНДА, одан кейін жаңа материал жоқ.'
      }
    }
  ],

  /** Two gates. A phase does not close until its practice test is passed. */
  gates: [
    {
      n: 1, afterLesson3: 33, afterLesson2: 36, test3: 11, test2: 18,
      name: { en: 'Gate 1 — the content phase closes', ru: 'Гейт 1 — закрытие content-фазы', kk: 'Гейт 1 — content-фазаның жабылуы' }
    },
    {
      n: 2, afterLesson3: 42, afterLesson2: 44, test3: 14, test2: 22,
      name: { en: 'Gate 2 — the hard phase closes', ru: 'Гейт 2 — закрытие hard-фазы', kk: 'Гейт 2 — hard-фазаның жабылуы' }
    }
  ],
  gateRule: {
    en: 'A gate is passed on the weekly practice test. Not through it means one or two extra mixed-review lessons on your error log and another test before the next phase. The hard phase without a closed base does not raise a score.',
    ru: 'Гейт сдаётся на еженедельном practice test. Не прошёл — один-два дополнительных урока mixed review по error log и ещё один тест до следующей фазы. Hard-фаза без закрытой базы не даёт роста.',
    kk: 'Гейт апталық practice test-те тапсырылады. Өтпесеңіз — error log бойынша бір-екі қосымша mixed review сабағы және келесі фазаға дейін тағы бір тест. Базасы жабылмаған hard-фаза өсім бермейді.'
  },

  /** What the weekly rhythm is, on both schedules. */
  rhythm: [
    { id: 'lessons',
      en: 'Lessons on separate days, with a rest day between them. Lesson 1 opens with the baseline diagnostic.',
      ru: 'Уроки в разные дни, с днями отдыха между ними. Урок 1 начинается с baseline-диагностики.',
      kk: 'Сабақтар бөлек күндері, арасында демалыс күнімен. 1-сабақ baseline-диагностикадан басталады.' },
    { id: 'test',
      en: 'The practice test near the end of the week: full, in Bluebook, under strict conditions.',
      ru: 'Practice test ближе к концу недели — полный, в Bluebook, в строгих условиях.',
      kk: 'Practice test апта соңына қарай — толық, Bluebook-та, қатаң жағдайда.' },
    { id: 'log',
      en: 'Every miss goes into the error log by skill — the lesson code — and by reason.',
      ru: 'Каждый промах записывается в error log по навыку (код урока) и причине.',
      kk: 'Әр қате error log-қа дағды (сабақ коды) және себеп бойынша жазылады.' },
    { id: 'review',
      en: 'A review session on those misses before the next week starts.',
      ru: 'Review session по промахам — до начала следующей недели.',
      kk: 'Қателер бойынша review session — келесі апта басталғанға дейін.' },
    { id: 'daily',
      en: 'Every day: 10–15 minutes of vocabulary and one dense passage.',
      ru: 'Каждый день: 10–15 минут словаря и один плотный текст.',
      kk: 'Күн сайын: 10–15 минут сөздік және бір күрделі мәтін.' }
  ],

  /** The rule that keeps a two-lesson week from forgetting its own start. */
  redrill: {
    en: 'Re-drill rule. If a topic from four weeks ago comes back as a mistake on a practice test, it is re-drilled that same week rather than waiting for the mixed review. On the two-lessons-a-week schedule this is the main defence against forgetting.',
    ru: 'Правило re-drill. Если тема урока четырёхнедельной давности всплывает ошибкой на practice test, её перерешивают на этой же неделе, не дожидаясь mixed review. Для графика 2×/нед это главная защита от забывания.',
    kk: 'Re-drill ережесі. Төрт апта бұрынғы сабақтың тақырыбы practice test-те қате болып шықса, оны mixed review-ды күтпей сол аптада қайта пысықтайды. 2×/апта кестесінде бұл — ұмытуға қарсы басты қорғаныс.'
  },

  /** The error budget a 1500 allows, as an orientation and not a promise. */
  errorBudget: {
    en: 'For 1500, about 3–5 misses in Reading & Writing and 2–4 in Math. The scale moves from test to test, so the working target in practice is 1520+.',
    ru: 'Для 1500 обычно допустимо около 3–5 ошибок в R&W и 2–4 в Math. Шкала меняется от теста к тесту, поэтому цель на практике — 1520+.',
    kk: '1500 үшін әдетте R&W-де 3–5, Math-та 2–4 қате рұқсат етіледі. Шкала тесттен тестке өзгереді, сондықтан практикадағы мақсат — 1520+.'
  },

  /* ------------------------------------------------------------ homework */
  /** The three things that follow every lesson, in the order they are set. */
  homework: [
    { id: 'words', mins: '10–15',
      name: { en: 'Word list #N', ru: 'Word list #N', kk: 'Word list #N' },
      body: { en: 'Ten words, N being the lesson number. The test on them opens the next lesson.',
              ru: 'Десять слов, где N — номер урока. Тест по ним — в начале следующего урока.',
              kk: 'Он сөз, N — сабақ нөмірі. Олар бойынша тест келесі сабақтың басында.' } },
    { id: 'set', mins: '60–90',
      name: { en: 'Set #N', ru: 'Набор #N', kk: '#N жинағы' },
      body: { en: '30–40 questions on this lesson’s code, Easy through Hard. In the hard phase, Hard only.',
              ru: '30–40 задач по коду этого урока, от Easy к Hard. В hard-фазе — только Hard.',
              kk: 'Осы сабақтың коды бойынша 30–40 тапсырма, Easy-ден Hard-қа дейін. Hard-фазада — тек Hard.' } },
    { id: 'video', mins: '20–30',
      name: { en: 'Watch and take notes', ru: 'Видео и конспект', kk: 'Бейне және конспект' },
      body: { en: 'The video for the NEXT lesson’s topic, with notes — so the lesson starts from practice, not from first contact.',
              ru: 'Видео по теме СЛЕДУЮЩЕГО урока с конспектом — чтобы урок начинался с практики, а не с первого знакомства.',
              kk: 'КЕЛЕСІ сабақтың тақырыбы бойынша бейне және конспект — сабақ практикадан басталуы үшін, алғашқы танысудан емес.' } }
  ],
  /** And the one thing that follows every week rather than every lesson. */
  weekly: {
    id: 'test', mins: '134',
    name: { en: 'Practice test', ru: 'Practice test', kk: 'Practice test' },
    body: { en: 'A full test in Bluebook, strictly timed → every miss into the error log → a review session before the next week.',
            ru: 'Полный тест в Bluebook, строго на время → каждый промах в error log → review session до следующей недели.',
            kk: 'Bluebook-та толық тест, қатаң уақытпен → әр қате error log-қа → келесі аптаға дейін review session.' }
  },
  homeworkLoad: {
    en: 'About 6–9 hours a week at three lessons a week, and 4–6 at two.',
    ru: 'Примерно 6–9 часов в неделю при трёх уроках в неделю и 4–6 при двух.',
    kk: 'Аптасына үш сабақта — шамамен 6–9 сағат, екеуінде — 4–6 сағат.'
  }
};
