/* ==========================================================================
   The units and the 36 classes.

   Eight content units — four Math, four Verbal, one for each Digital SAT
   domain — plus the Challenge month. Every class is worded once here and
   referred to by code everywhere else: a class names C9, the error log names
   C9, the materials page names C9, and all three read the title from this
   file. The Challenge classes are CH1 to CH12.

   n3 / n2 are the class's number on the three-a-week and the two-a-week
   schedule. The order is the same on both, so they agree; only the weeks the
   classes fall in differ, and those come from js/data/programme.js.

   Loaded after js/data/programme.js.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme.units = [
  /* ------------------------------------------------------------------ math */
  { id: 'm-alg', section: 'math', kind: 'unit', n: 1, domain: 'm.alg',
    name: { en: 'Algebra', ru: 'Algebra', kk: 'Algebra' },
    lead: { en: 'Linear equations, lines, systems and inequalities — the backbone of the Math section.',
            ru: 'Линейные уравнения, прямые, системы и неравенства — основа секции Math.',
            kk: 'Сызықтық теңдеулер, түзулер, жүйелер және теңсіздіктер — Math секциясының негізі.' } },
  { id: 'm-adv', section: 'math', kind: 'unit', n: 2, domain: 'm.adv',
    name: { en: 'Advanced Math', ru: 'Advanced Math', kk: 'Advanced Math' },
    lead: { en: 'Quadratics, exponentials, radicals, functions and polynomials.',
            ru: 'Квадратичные, показательные, корни, функции и многочлены.',
            kk: 'Квадраттық, көрсеткіштік, түбірлер, функциялар және көпмүшелер.' } },
  { id: 'm-psda', section: 'math', kind: 'unit', n: 3, domain: 'm.psda',
    name: { en: 'Problem-Solving and Data Analysis', ru: 'Problem-Solving and Data Analysis', kk: 'Problem-Solving and Data Analysis' },
    lead: { en: 'Ratios, rates, percentages, statistics and probability.',
            ru: 'Пропорции, скорости, проценты, статистика и вероятность.',
            kk: 'Қатынастар, жылдамдықтар, пайыздар, статистика және ықтималдық.' } },
  { id: 'm-geo', section: 'math', kind: 'unit', n: 4, domain: 'm.geo',
    name: { en: 'Geometry and Trigonometry', ru: 'Geometry and Trigonometry', kk: 'Geometry and Trigonometry' },
    lead: { en: 'Lines, angles, triangles, circles, trigonometry and volume.',
            ru: 'Прямые, углы, треугольники, окружности, тригонометрия и объём.',
            kk: 'Түзулер, бұрыштар, үшбұрыштар, шеңберлер, тригонометрия және көлем.' } },

  /* ---------------------------------------------------------------- verbal */
  { id: 'v-cs', section: 'rw', kind: 'unit', n: 1, domain: 'rw.cs',
    name: { en: 'Craft and Structure', ru: 'Craft and Structure', kk: 'Craft and Structure' },
    lead: { en: 'Vocabulary in context, the job each part of a text does, and how two texts answer each other.',
            ru: 'Лексика в контексте, роль каждой части текста и то, как два текста отвечают друг другу.',
            kk: 'Контекстегі лексика, мәтіннің әр бөлігінің қызметі және екі мәтіннің бір-біріне жауабы.' } },
  { id: 'v-ii', section: 'rw', kind: 'unit', n: 2, domain: 'rw.ii',
    name: { en: 'Information and Ideas', ru: 'Information and Ideas', kk: 'Information and Ideas' },
    lead: { en: 'Main ideas, evidence from text and data, and inference.',
            ru: 'Главные идеи, доказательства из текста и данных, вывод.',
            kk: 'Негізгі идеялар, мәтін мен деректен дәлел, қорытынды.' } },
  { id: 'v-sec', section: 'rw', kind: 'unit', n: 3, domain: 'rw.sec',
    name: { en: 'Standard English Conventions', ru: 'Standard English Conventions', kk: 'Standard English Conventions' },
    lead: { en: 'Punctuation and grammar as a set of rules — the fastest points in the section.',
            ru: 'Пунктуация и грамматика как набор правил — самые быстрые баллы в секции.',
            kk: 'Тыныс белгілері мен грамматика — ережелер жиынтығы, секциядағы ең жылдам ұпайлар.' } },
  { id: 'v-ei', section: 'rw', kind: 'unit', n: 4, domain: 'rw.ei',
    name: { en: 'Expression of Ideas', ru: 'Expression of Ideas', kk: 'Expression of Ideas' },
    lead: { en: 'Rhetorical synthesis and transitions: the answer is chosen against the stated goal.',
            ru: 'Rhetorical synthesis и связки: ответ выбирается под заявленную цель.',
            kk: 'Rhetorical synthesis және байланыстырғыштар: жауап айтылған мақсатқа қарап таңдалады.' } },

  /* ------------------------------------------------------------- month 3 */
  { id: 'ch', section: 'both', kind: 'hard',
    name: { en: 'Challenge', ru: 'Challenge', kk: 'Challenge' },
    lead: { en: 'Hard-module practice: timed sets at the difficulty of the second, harder module, each followed by an error review.',
            ru: 'Практика сложного модуля: наборы на время на уровне второго, сложного модуля, после каждого — разбор ошибок.',
            kk: 'Күрделі модуль практикасы: екінші, күрделі модуль деңгейіндегі уақытпен орындалатын жинақтар, әрқайсысынан кейін қателерді талдау.' } }
];

JTS.data.programme.lessons = [
  /* ------------------------------------------------------- Month 1 · weeks 1–4 */
  { code: 'C1', unit: 'v-cs', n3: 1, n2: 1, week: 1, diagnostic: true,
    t: { en: 'Words in Context', ru: 'Слова в контексте', kk: 'Контекстегі сөздер' },
    skills: { en: 'The four-step method, two special cases, word parts as a backup tool',
              ru: 'Метод из четырёх шагов, два особых случая, части слова как запасной инструмент',
              kk: 'Төрт қадамдық әдіс, екі ерекше жағдай, сөз бөліктері — қосалқы құрал' } },
  { code: 'C2', unit: 'v-cs', n3: 2, n2: 2, week: 1,
    t: { en: 'Text Structure and Purpose', ru: 'Структура и цель текста', kk: 'Мәтін құрылымы және мақсаты' },
    skills: { en: 'The job-label method; purpose, structure and function questions',
              ru: 'Метод меток-функций; вопросы о цели, структуре и функции',
              kk: 'Қызмет-белгі әдісі; мақсат, құрылым және қызмет туралы сұрақтар' } },
  { code: 'C3', unit: 'm-alg', n3: 3, n2: 3, week: 1,
    t: { en: 'Linear Equations and Inequalities in One Variable',
         ru: 'Линейные уравнения и неравенства с одной переменной',
         kk: 'Бір айнымалысы бар сызықтық теңдеулер мен теңсіздіктер' },
    skills: { en: 'The solving sequence, no solution and infinitely many, word problems, the Desmos shortcut',
              ru: 'Порядок решения, нет решений и бесконечно много, текстовые задачи, приём с Desmos',
              kk: 'Шешу реті, шешімі жоқ және шексіз көп, мәтінді есептер, Desmos тәсілі' } },
  { code: 'C4', unit: 'v-cs', n3: 4, n2: 4, week: 2,
    t: { en: 'Cross-Text Connections', ru: 'Связи между двумя текстами', kk: 'Екі мәтін арасындағы байланыс' },
    skills: { en: 'The five relationships between two texts, the method, the traps',
              ru: 'Пять типов отношений между текстами, метод, ловушки',
              kk: 'Екі мәтін арасындағы бес қатынас, әдіс, тұзақтар' } },
  { code: 'C5', unit: 'm-alg', n3: 5, n2: 5, week: 2,
    t: { en: 'Linear Equations in Two Variables, Slope, and Linear Functions',
         ru: 'Линейные уравнения с двумя переменными, наклон и линейные функции',
         kk: 'Екі айнымалысы бар сызықтық теңдеулер, еңіс және сызықтық функциялар' },
    skills: { en: 'Slope, points on a line, what the equation means in context, the Desmos workflow',
              ru: 'Наклон, точки на прямой, смысл уравнения в контексте, работа в Desmos',
              kk: 'Еңіс, түзудегі нүктелер, теңдеудің контексттегі мағынасы, Desmos-пен жұмыс' } },
  { code: 'C6', unit: 'm-alg', n3: 6, n2: 6, week: 2,
    t: { en: 'Systems of Linear Equations', ru: 'Системы линейных уравнений', kk: 'Сызықтық теңдеулер жүйелері' },
    skills: { en: 'Three algebraic methods, special-answer questions, the Desmos method, word problems',
              ru: 'Три алгебраических метода, вопросы об особых ответах, метод Desmos, текстовые задачи',
              kk: 'Үш алгебралық әдіс, ерекше жауап сұрақтары, Desmos әдісі, мәтінді есептер' } },
  { code: 'C7', unit: 'v-ii', n3: 7, n2: 7, week: 3,
    t: { en: 'Central Ideas and Details', ru: 'Главная мысль и детали', kk: 'Негізгі ой және детальдар' },
    skills: { en: 'The main idea method, the detail method, two different reading rhythms',
              ru: 'Метод главной мысли, метод деталей, два разных ритма чтения',
              kk: 'Негізгі ой әдісі, деталь әдісі, оқудың екі түрлі ырғағы' } },
  { code: 'C8', unit: 'v-ii', n3: 8, n2: 8, week: 3,
    t: { en: 'Command of Evidence: Textual', ru: 'Доказательства из текста', kk: 'Мәтіннен дәлел' },
    skills: { en: 'Support, weaken and illustrate questions; the method and common patterns',
              ru: 'Вопросы «подтвердить», «ослабить», «проиллюстрировать»; метод и типичные схемы',
              kk: '«Қолдау», «әлсірету», «мысалмен көрсету» сұрақтары; әдіс және жиі үлгілер' } },
  { code: 'C9', unit: 'm-adv', n3: 9, n2: 9, week: 3,
    t: { en: 'Quadratics Part 1', ru: 'Квадратичные функции, часть 1', kk: 'Квадраттық функциялар, 1-бөлім' },
    skills: { en: 'The three forms, factoring, polynomial operations, reading a graph or table, Desmos',
              ru: 'Три формы, разложение на множители, действия с многочленами, график и таблица, Desmos',
              kk: 'Үш түрі, көбейткішке жіктеу, көпмүшелермен амалдар, график пен кесте, Desmos' } },
  { code: 'C10', unit: 'v-ii', n3: 10, n2: 10, week: 4,
    t: { en: 'Command of Evidence: Quantitative', ru: 'Доказательства из данных', kk: 'Деректен дәлел' },
    skills: { en: 'Tables and graphs as evidence; the method, the traps, a worked example',
              ru: 'Таблицы и графики как доказательство; метод, ловушки, разобранный пример',
              kk: 'Кестелер мен графиктер дәлел ретінде; әдіс, тұзақтар, талданған мысал' } },
  { code: 'C11', unit: 'm-adv', n3: 11, n2: 11, week: 4,
    t: { en: 'Quadratics Part 2', ru: 'Квадратичные функции, часть 2', kk: 'Квадраттық функциялар, 2-бөлім' },
    skills: { en: 'The discriminant, completing the square, the vertex, nonlinear systems, Desmos for hard questions',
              ru: 'Дискриминант, выделение полного квадрата, вершина, нелинейные системы, Desmos для сложных задач',
              kk: 'Дискриминант, толық квадрат бөлу, төбе, сызықтық емес жүйелер, күрделі есептерге Desmos' } },
  { code: 'C12', unit: 'm-adv', n3: 12, n2: 12, week: 4,
    t: { en: 'Exponentials and Radicals', ru: 'Показательные функции и корни', kk: 'Көрсеткіштік функциялар және түбірлер' },
    skills: { en: 'Percent change in the base, growth and decay, radicals, Desmos applications',
              ru: 'Процентное изменение в основании, рост и убывание, корни, применение Desmos',
              kk: 'Негіздегі пайыздық өзгеріс, өсу мен кему, түбірлер, Desmos қолдану' } },

  /* ------------------------------------------------------- Month 2 · weeks 5–8 */
  { code: 'C13', unit: 'v-ii', n3: 13, n2: 13, week: 5,
    t: { en: 'Inferences', ru: 'Выводы', kk: 'Қорытындылар' },
    skills: { en: 'The method and the four ways a choice overshoots the text',
              ru: 'Метод и четыре способа, которыми вариант выходит за рамки текста',
              kk: 'Әдіс және нұсқаның мәтіннен асып кетуінің төрт жолы' } },
  { code: 'C14', unit: 'v-sec', n3: 14, n2: 14, week: 5,
    t: { en: 'Boundaries Part 1', ru: 'Границы предложений, часть 1', kk: 'Сөйлем шекаралары, 1-бөлім' },
    skills: { en: 'The connector menu, the error catalog, the method',
              ru: 'Меню соединителей, каталог ошибок, метод',
              kk: 'Байланыстырғыштар мәзірі, қателер каталогы, әдіс' } },
  { code: 'C15', unit: 'm-psda', n3: 15, n2: 15, week: 5,
    t: { en: 'Ratios, Rates, and Percentages', ru: 'Пропорции, скорости и проценты', kk: 'Қатынастар, жылдамдықтар және пайыздар' },
    skills: { en: 'The percent multiplier method, ratios and proportions, the Desmos angle',
              ru: 'Метод процентного множителя, отношения и пропорции, Desmos',
              kk: 'Пайыздық көбейткіш әдісі, қатынастар мен пропорциялар, Desmos' } },
  { code: 'C16', unit: 'v-sec', n3: 16, n2: 16, week: 6,
    t: { en: 'Boundaries Part 2', ru: 'Границы предложений, часть 2', kk: 'Сөйлем шекаралары, 2-бөлім' },
    skills: { en: 'Colons, dashes and the other new tools; the trap patterns',
              ru: 'Двоеточия, тире и другие новые инструменты; типичные ловушки',
              kk: 'Қос нүкте, сызықша және басқа жаңа құралдар; тұзақ үлгілері' } },
  { code: 'C17', unit: 'm-psda', n3: 17, n2: 17, week: 6,
    t: { en: 'Statistics, Data Displays, and Probability',
         ru: 'Статистика, представление данных и вероятность',
         kk: 'Статистика, деректерді көрсету және ықтималдық' },
    skills: { en: 'Centre and spread, displays, two-way tables, lines of fit, margin of error and study design',
              ru: 'Среднее и разброс, диаграммы, таблицы сопряжённости, линии тренда, погрешность и дизайн исследования',
              kk: 'Орта мән мен шашырау, диаграммалар, екі өлшемді кестелер, тренд сызығы, қателік және зерттеу дизайны' } },
  { code: 'C18', unit: 'm-alg', n3: 18, n2: 18, week: 6,
    t: { en: 'Linear Inequalities, Absolute Value, and Desmos Shading',
         ru: 'Линейные неравенства, модуль и штриховка в Desmos',
         kk: 'Сызықтық теңсіздіктер, модуль және Desmos-тағы бояу' },
    skills: { en: 'Systems of inequalities, the Desmos method, inequalities in context, absolute value',
              ru: 'Системы неравенств, метод Desmos, неравенства в контексте, модуль',
              kk: 'Теңсіздіктер жүйесі, Desmos әдісі, контексттегі теңсіздіктер, модуль' } },
  { code: 'C19', unit: 'v-sec', n3: 19, n2: 19, week: 7,
    t: { en: 'Form, Structure, and Sense Part 1: Verbs',
         ru: 'Form, Structure, and Sense, часть 1: глаголы',
         kk: 'Form, Structure, and Sense, 1-бөлім: етістіктер' },
    skills: { en: 'Subject–verb agreement, verb tense, the method',
              ru: 'Согласование подлежащего и сказуемого, время глагола, метод',
              kk: 'Бастауыш пен баяндауыштың қиысуы, етістік шағы, әдіс' } },
  { code: 'C20', unit: 'v-sec', n3: 20, n2: 20, week: 7,
    t: { en: 'Form, Structure, and Sense Part 2: Pronouns, Modifiers, Possessives',
         ru: 'Form, Structure, and Sense, часть 2: местоимения, определения, притяжательные',
         kk: 'Form, Structure, and Sense, 2-бөлім: есімдіктер, анықтауыштар, тәуелдік' },
    skills: { en: 'Pronouns, modifiers, possessives and apostrophes, one unified method',
              ru: 'Местоимения, определения, притяжательные формы и апострофы, единый метод',
              kk: 'Есімдіктер, анықтауыштар, тәуелдік формалар мен апострофтар, бірыңғай әдіс' } },
  { code: 'C21', unit: 'm-adv', n3: 21, n2: 21, week: 7,
    t: { en: 'Functions, Polynomials, and Rational Equations',
         ru: 'Функции, многочлены и рациональные уравнения',
         kk: 'Функциялар, көпмүшелер және рационал теңдеулер' },
    skills: { en: 'Evaluation, composites, domain and range, transformations, polynomial zeros, rational equations',
              ru: 'Вычисление, композиция, область определения и значений, преобразования, нули многочленов, рациональные уравнения',
              kk: 'Мәнін есептеу, композиция, анықталу және мәндер облысы, түрлендірулер, көпмүше нөлдері, рационал теңдеулер' } },
  { code: 'C22', unit: 'v-ei', n3: 22, n2: 22, week: 8,
    t: { en: 'Rhetorical Synthesis', ru: 'Риторический синтез', kk: 'Риторикалық синтез' },
    skills: { en: 'The method and the common goal types',
              ru: 'Метод и типичные виды целей',
              kk: 'Әдіс және мақсаттың жиі түрлері' } },
  { code: 'C23', unit: 'v-ei', n3: 23, n2: 23, week: 8,
    t: { en: 'Transitions', ru: 'Связки', kk: 'Байланыстырғыштар' },
    skills: { en: 'The method and the two classic traps',
              ru: 'Метод и две классические ловушки',
              kk: 'Әдіс және екі классикалық тұзақ' } },
  { code: 'C24', unit: 'm-geo', n3: 24, n2: 24, week: 8,
    t: { en: 'Geometry and Trigonometry', ru: 'Геометрия и тригонометрия', kk: 'Геометрия және тригонометрия' },
    skills: { en: 'The reference sheet, angles, triangles, circles, trigonometry, circle theorems, volume, Desmos',
              ru: 'Справочный лист, углы, треугольники, окружности, тригонометрия, теоремы об окружности, объём, Desmos',
              kk: 'Анықтамалық парақ, бұрыштар, үшбұрыштар, шеңберлер, тригонометрия, шеңбер теоремалары, көлем, Desmos' } }
];

/* ------------------------------------------- Month 3 · Challenge 1–12 */
(function () {
  var P = JTS.data.programme;
  for (var i = 1; i <= 12; i++) {
    P.lessons.push({
      code: 'CH' + i, unit: 'ch', n3: 24 + i, n2: 24 + i, week: 8 + Math.ceil(i / 3),
      t: { en: 'Challenge ' + i, ru: 'Challenge ' + i, kk: 'Challenge ' + i },
      skills: {
        en: 'A timed set at hard-module difficulty, then an error review.',
        ru: 'Набор на время на уровне сложного модуля, затем разбор ошибок.',
        kk: 'Күрделі модуль деңгейіндегі уақытпен орындалатын жинақ, содан кейін қателерді талдау.'
      }
    });
  }
})();

/* ------------------------------------------------------------------ lookups */
(function () {
  var P = JTS.data.programme;

  function byCode(code) {
    for (var i = 0; i < P.lessons.length; i++) {
      if (P.lessons[i].code === code) return P.lessons[i];
    }
    return null;
  }

  function unitById(id) {
    for (var i = 0; i < P.units.length; i++) {
      if (P.units[i].id === id) return P.units[i];
    }
    return null;
  }

  /** A lesson's section is its unit's; nothing states it twice. */
  function sectionOf(lesson) {
    var u = unitById(lesson.unit);
    return u ? u.section : 'both';
  }

  function unitsOf(section) {
    return P.units.filter(function (u) { return u.section === section; });
  }

  function lessonsOfUnit(id) {
    return P.lessons.filter(function (l) { return l.unit === id; });
  }

  /** The lesson's number on a schedule, or null when it is not on that one. */
  function numberOn(lesson, perWeek) {
    return perWeek === 2 ? lesson.n2 : lesson.n3;
  }

  /**
   * The course in order for a schedule, as slots. A slot is one sitting and
   * holds one class; the shape allows more, in case two are ever run together.
   */
  function order(perWeek) {
    var slots = [], byN = {};
    P.lessons.forEach(function (l) {
      var n = numberOn(l, perWeek);
      if (!n) return;
      if (!byN[n]) { byN[n] = { n: n, lessons: [] }; slots.push(byN[n]); }
      byN[n].lessons.push(l);
    });
    slots.sort(function (a, b) { return a.n - b.n; });
    return slots;
  }

  /** The same list cut into weeks of `perWeek` sittings. */
  function weeks(perWeek) {
    var out = [], all = order(perWeek);
    for (var i = 0; i < all.length; i += perWeek) {
      out.push({ n: out.length + 1, slots: all.slice(i, i + perWeek) });
    }
    return out;
  }

  function phaseOf(n, perWeek) {
    var from = perWeek === 2 ? 'from2' : 'from3';
    var to = perWeek === 2 ? 'to2' : 'to3';
    return P.phases.filter(function (p) { return n >= p[from] && n <= p[to]; })[0] || null;
  }

  function gateAfter(n, perWeek) {
    var key = perWeek === 2 ? 'afterLesson2' : 'afterLesson3';
    return P.gates.filter(function (g) { return g[key] === n; })[0] || null;
  }

  function scheduleOf(perWeek) {
    return P.schedules.filter(function (s) { return s.perWeek === perWeek; })[0] || P.schedules[0];
  }

  P.byCode = byCode;
  P.unitById = unitById;
  P.sectionOf = sectionOf;
  P.unitsOf = unitsOf;
  P.lessonsOfUnit = lessonsOfUnit;
  P.numberOn = numberOn;
  P.order = order;
  P.weeks = weeks;
  P.phaseOf = phaseOf;
  P.gateAfter = gateAfter;
  P.scheduleOf = scheduleOf;
})();
