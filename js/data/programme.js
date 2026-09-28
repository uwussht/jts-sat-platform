/* ==========================================================================
   The JTS 1500+ programme.

   This is the school's own course, not the platform's generated plan: 48
   lessons over four months, three stages and three gates, with every topic
   carrying a tag (M1…M29, R1…R17) that the error log refers to.

   Three screens read this one file, which is why it is data and not prose in
   three places:

   - #/roadmap  — the chronology: stages, gates, and all 48 lessons in order;
   - #/plan     — the homework after each lesson, and the topic tables;
   - #/guide    — the error log and the terms a beginner has not met.

   A lesson does NOT repeat its topics as text. It names tags, and the titles
   come from the tables below, so a topic is worded once. Renaming a topic
   renames it everywhere it appears.

   Levels: base — Module 1 material, core — the body of the exam, hard — the
   kind of item that only appears in a hard Module 2.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme = {
  /* ------------------------------------------------------------- shape */
  lessonsTotal: 48,
  wordsPerLesson: 10,

  /** The four months. `gate` is the gate that closes the stage. */
  stages: [
    {
      id: 'topics1', months: '1', from: 1, to: 12,
      name: { en: 'All topics, part 1', ru: 'Все темы, часть 1', kk: 'Барлық тақырып, 1-бөлім' },
      lead: {
        en: 'Every question type once, in the order they appear in a module. After each lesson: a set on that topic and ten new words.',
        ru: 'Каждый тип вопроса по разу, в том порядке, в каком они идут в модуле. После каждого урока — набор по теме и десять новых слов.',
        kk: 'Әр сұрақ түрі бір реттен, модульдегі ретімен. Әр сабақтан кейін — тақырып бойынша жинақ және он жаңа сөз.'
      }
    },
    {
      id: 'topics2', months: '2', from: 13, to: 24, gate: 1,
      name: { en: 'All topics, part 2', ru: 'Все темы, часть 2', kk: 'Барлық тақырып, 2-бөлім' },
      lead: {
        en: 'The second half of the tags, same rhythm. The stage closes with a full test.',
        ru: 'Вторая половина тегов, тот же ритм. Этап закрывается полным тестом.',
        kk: 'Тегтердің екінші жартысы, сол ырғақпен. Кезең толық тестпен жабылады.'
      }
    },
    {
      id: 'tests', months: '3', from: 25, to: 36, gate: 2,
      name: { en: 'Full tests', ru: 'Полные тесты', kk: 'Толық тестер' },
      lead: {
        en: 'A full test at home before every lesson; the lesson is the review of every error in it, plus a short lesson on the two or three commonest tags in the error log.',
        ru: 'Полный тест дома перед каждым уроком; урок — это разбор каждой ошибки в нём плюс мини-урок по двум-трём самым частым тегам из error log.',
        kk: 'Әр сабақ алдында үйде толық тест; сабақ — ондағы әр қатені талдау, қосымша error log-тағы ең жиі екі-үш тег бойынша шағын сабақ.'
      }
    },
    {
      id: 'hard', months: '4', from: 37, to: 48, gate: 3,
      name: { en: 'Hard practice', ru: 'Hard-практика', kk: 'Hard-практика' },
      lead: {
        en: 'The same rhythm with hard items only, everything on the clock. This is the stage that decides whether a hard Module 2 is survivable.',
        ru: 'Тот же ритм, но только сложные задания, всё на время. Именно этот этап решает, выдержите ли вы сложный Модуль 2.',
        kk: 'Сол ырғақ, бірақ тек күрделі тапсырмалар, бәрі уақытпен. Күрделі 2-модульді шыдай алатыныңызды осы кезең шешеді.'
      }
    }
  ],

  /** Gates are compulsory: a stage does not close until its test is passed. */
  gates: [
    {
      n: 1, afterLesson: 24,
      name: { en: 'Gate 1 — full Practice Test', ru: 'Гейт 1 — полный Practice Test', kk: 'Гейт 1 — толық Practice Test' }
    },
    {
      n: 2, afterLesson: 36,
      name: { en: 'Gate 2 — review of the final test', ru: 'Гейт 2 — разбор итогового теста', kk: 'Гейт 2 — қорытынды тестті талдау' }
    },
    {
      n: 3, afterLesson: 48,
      name: { en: 'Gate 3 — two full tests', ru: 'Гейт 3 — два полных теста', kk: 'Гейт 3 — екі толық тест' }
    }
  ],
  gateRule: {
    en: 'Not through a gate means three to six more lessons in the same stage on the tags in your error log, then the test again. A gate is never skipped: a hard Module 2 without the base under it does not raise a score.',
    ru: 'Не прошёл гейт — ещё три-шесть уроков в текущем этапе по тегам из error log, затем повторный тест. Гейт пропускать нельзя: сложный Модуль 2 без базы не даёт роста.',
    kk: 'Гейттен өтпесеңіз — error log тегтері бойынша ағымдағы кезеңде тағы үш-алты сабақ, содан кейін тест қайта. Гейтті өткізіп жіберуге болмайды: негізсіз күрделі 2-модуль өсім бермейді.'
  },

  /** Lesson 0 is the diagnostic; the starting score changes pace, not content. */
  tracks: [
    { from: 900,  to: 1090, perWeek: '3',   weeks: '~16',
      hw: { en: 'Easy and Medium; a tag under 80% gets a second set before the next lesson',
            ru: 'Easy и Medium; тег ниже 80% — повторный набор до следующего урока',
            kk: 'Easy және Medium; 80%-дан төмен тег — келесі сабаққа дейін қайталама жинақ' } },
    { from: 1100, to: 1290, perWeek: '3',   weeks: '~16',
      hw: { en: 'Medium, with some Hard', ru: 'Medium и часть Hard', kk: 'Medium және Hard-тың бір бөлігі' } },
    { from: 1300, to: 1400, perWeek: '4',   weeks: '~12',
      hw: { en: 'Medium and Hard', ru: 'Medium и Hard', kk: 'Medium және Hard' } },
    { from: 1410, to: null, perWeek: '4–5', weeks: '~10–12',
      hw: { en: 'mostly Hard', ru: 'в основном Hard', kk: 'негізінен Hard' } }
  ],

  /* ------------------------------------------------------------ homework */
  /** The four things that follow every lesson, in the order they are set. */
  homework: [
    { id: 'words', mins: '15',
      name: { en: 'Learn the words', ru: 'Выучить слова', kk: 'Сөздерді жаттау' },
      body: { en: 'Word list #N — ten words. The test on them opens the next lesson.',
              ru: 'Word list #N — десять слов. Тест по ним — в начале следующего урока.',
              kk: 'Word list #N — он сөз. Олар бойынша тест келесі сабақтың басында.' } },
    { id: 'set', mins: '60–90',
      name: { en: 'Set #N', ru: 'Набор #N', kk: '#N жинағы' },
      body: { en: '30–40 questions on this lesson’s tags, Easy through Hard.',
              ru: '30–40 задач по тегам этого урока, от Easy к Hard.',
              kk: 'Осы сабақтың тегтері бойынша 30–40 тапсырма, Easy-ден Hard-қа дейін.' } },
    { id: 'timed', mins: '15–134',
      name: { en: 'Timed practice', ru: 'Практика на время', kk: 'Уақытпен практика' },
      body: { en: 'A section or a full test where the lesson calls for one; otherwise the spiral — ten questions on earlier tags, on the clock.',
              ru: 'Секция или полный тест, если урок этого требует; в остальные дни спираль — десять задач по прошлым тегам на время.',
              kk: 'Сабақ талап етсе — секция немесе толық тест; басқа күндері спираль — өткен тегтер бойынша он тапсырма, уақытпен.' } },
    { id: 'video', mins: '20–30',
      name: { en: 'Watch and take notes', ru: 'Видео и конспект', kk: 'Бейне және конспект' },
      body: { en: 'The video for the NEXT lesson’s topic, with notes — so the lesson starts from practice, not from first contact.',
              ru: 'Видео по теме СЛЕДУЮЩЕГО урока с конспектом — чтобы урок начинался с практики, а не с первого знакомства.',
              kk: 'КЕЛЕСІ сабақтың тақырыбы бойынша бейне және конспект — сабақ практикадан басталуы үшін, алғашқы танысудан емес.' } }
  ],
  homeworkLoad: {
    en: 'About 6–9 hours a week at three lessons a week.',
    ru: 'Примерно 6–9 часов в неделю при трёх уроках в неделю.',
    kk: 'Аптасына үш сабақта — шамамен аптасына 6–9 сағат.'
  }
};
