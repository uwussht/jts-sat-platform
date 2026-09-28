/* ==========================================================================
   The units and the 45 lessons.

   Eight units — four Math, four Verbal — plus the mixed reviews, the hard
   phase and the test week. Every lesson is worded once here and referred to
   by code everywhere else: a lesson names M2.3, the error log names M2.3, the
   materials page names M2.3, and all three read the title from this file.

   n3 / n2 are the lesson's number on the three-lessons-a-week and the
   two-lessons-a-week schedule. They agree for the whole content phase and
   part company in the hard phase, which is the only real difference between
   the two. A lesson that exists on one schedule only (the second mixed review
   and the buffer) has null for the other. On the two-lessons schedule the
   three test-week lessons are run as one, so all three carry n2: 45.

   Loaded after js/data/programme.js.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme.units = [
  /* ------------------------------------------------------------------ math */
  { id: 'm1', section: 'math', kind: 'unit', n: 1, domain: 'm.alg',
    name: { en: 'Linear Algebra', ru: 'Linear Algebra', kk: 'Linear Algebra' },
    lead: { en: 'The half of Math that is answered by writing one equation correctly.',
            ru: 'Та половина Math, которая решается одним верно составленным уравнением.',
            kk: 'Math-тың дұрыс құрылған бір теңдеумен шешілетін жартысы.' } },
  { id: 'm2', section: 'math', kind: 'unit', n: 2, domain: 'm.adv',
    name: { en: 'Advanced Math', ru: 'Advanced Math', kk: 'Advanced Math' },
    lead: { en: 'Quadratics, functions and growth — with Algebra, 70% of the section.',
            ru: 'Квадратичные, функции и рост — вместе с Algebra это 70% секции.',
            kk: 'Квадраттық, функциялар және өсу — Algebra-мен бірге секцияның 70%-ы.' } },
  { id: 'm3', section: 'math', kind: 'unit', n: 3, domain: 'm.psda',
    name: { en: 'Problem-Solving, Data Analysis and Desmos',
            ru: 'Problem-Solving, Data Analysis и Desmos',
            kk: 'Problem-Solving, Data Analysis және Desmos' },
    lead: { en: 'Percentages, statistics and the calculator that is built into the exam.',
            ru: 'Проценты, статистика и калькулятор, встроенный в экзамен.',
            kk: 'Пайыздар, статистика және емтиханға кіріктірілген калькулятор.' } },
  { id: 'm4', section: 'math', kind: 'unit', n: 4, domain: 'm.geo',
    name: { en: 'Geometry and Trigonometry', ru: 'Geometry и Trigonometry', kk: 'Geometry және Trigonometry' },
    lead: { en: 'A reference sheet comes with the test; for 1500+ the formulas are learned anyway — it saves a minute or two per module.',
            ru: 'На тесте есть reference sheet, но для 1500+ формулы учат наизусть — это экономия 1–2 минут на модуль.',
            kk: 'Тестте reference sheet бар, бірақ 1500+ үшін формулаларды жаттайды — бұл модуль сайын 1–2 минут үнемдейді.' } },
  { id: 'mr', section: 'math', kind: 'review',
    name: { en: 'Math Review', ru: 'Math Review', kk: 'Math Review' },
    lead: { en: 'Not new material: your own weakest codes, taken from the error log.',
            ru: 'Не новый материал: ваши самые слабые коды, взятые из error log.',
            kk: 'Жаңа материал емес: error log-тан алынған ең әлсіз кодтарыңыз.' } },
  { id: 'hm', section: 'math', kind: 'hard',
    name: { en: 'Hard Math', ru: 'Hard Math', kk: 'Hard Math' },
    lead: { en: 'Module 2 difficulty only. This is where the points above 650 live.',
            ru: 'Только сложность Модуля 2. Именно здесь живут баллы выше 650.',
            kk: 'Тек 2-модуль күрделілігі. 650-ден жоғары ұпайлар дәл осында.' } },

  /* ---------------------------------------------------------------- verbal */
  { id: 'v1', section: 'rw', kind: 'unit', n: 1, domain: 'rw.sec',
    name: { en: 'Standard English Conventions', ru: 'Standard English Conventions', kk: 'Standard English Conventions' },
    lead: { en: 'Grammar as a set of rules — the fastest points in the section, because they are learned rather than reasoned out.',
            ru: 'Грамматика как набор правил — самые быстрые баллы в секции, потому что их учат, а не выводят.',
            kk: 'Грамматика — ережелер жиынтығы, секциядағы ең жылдам ұпайлар: оларды ойлап емес, жаттап алады.' } },
  { id: 'v2', section: 'rw', kind: 'unit', n: 2, domain: 'rw.ei',
    name: { en: 'Expression of Ideas', ru: 'Expression of Ideas', kk: 'Expression of Ideas' },
    lead: { en: 'Transitions and synthesis: the answer is chosen strictly against the goal stated in the question.',
            ru: 'Связки и синтез: ответ выбирается строго под цель, заявленную в вопросе.',
            kk: 'Байланыстырғыштар мен синтез: жауап сұрақта айтылған мақсатқа қарап таңдалады.' } },
  { id: 'v3', section: 'rw', kind: 'unit', n: 3, domain: 'rw.cs',
    name: { en: 'Craft and Structure', ru: 'Craft and Structure', kk: 'Craft and Structure' },
    lead: { en: 'Vocabulary in context, the function of a sentence, and how two texts answer each other.',
            ru: 'Лексика в контексте, функция предложения и то, как два текста отвечают друг другу.',
            kk: 'Контекстегі лексика, сөйлемнің қызметі және екі мәтіннің бір-біріне жауабы.' } },
  { id: 'v4', section: 'rw', kind: 'unit', n: 4, domain: 'rw.ii',
    name: { en: 'Information and Ideas', ru: 'Information and Ideas', kk: 'Information and Ideas' },
    lead: { en: 'Main ideas, inference and evidence — where students at 1400+ usually lose what they lose.',
            ru: 'Главные идеи, вывод и доказательство — именно здесь ученики с 1400+ обычно и теряют.',
            kk: 'Негізгі идеялар, қорытынды және дәлел — 1400+ оқушылар әдетте осы жерден ұтылады.' } },
  { id: 'hv', section: 'rw', kind: 'hard',
    name: { en: 'Hard Verbal', ru: 'Hard Verbal', kk: 'Hard Verbal' },
    lead: { en: 'Full-difficulty inference, synthesis with competing priorities and the grammar traps.',
            ru: 'Вывод на полной сложности, синтез с конкурирующими требованиями и грамматические ловушки.',
            kk: 'Толық күрделіліктегі қорытынды, бәсекелес талаптары бар синтез және грамматикалық тұзақтар.' } },

  /* ------------------------------------------------------------- both ends */
  { id: 'tw', section: 'both', kind: 'test',
    name: { en: 'Test week', ru: 'Test week', kk: 'Test week' },
    lead: { en: 'No new material. The last practice test is at the start of the week.',
            ru: 'Нового материала нет. Последний practice test — в начале недели.',
            kk: 'Жаңа материал жоқ. Соңғы practice test — аптаның басында.' } }
];

JTS.data.programme.lessons = [
  /* ------------------------------------------- Math Unit 1 — Linear Algebra */
  { code: 'M1.1', unit: 'm1', n3: 1, n2: 1, diagnostic: true,
    t: { en: 'Linear equations in one variable + baseline diagnostic',
         ru: 'Линейные уравнения с одной переменной + baseline-диагностика',
         kk: 'Бір айнымалысы бар сызықтық теңдеулер + baseline-диагностика' },
    skills: { en: 'Fractions, brackets, the variable on both sides, zero or infinitely many solutions',
              ru: 'Дроби, скобки, переменная в обеих частях, 0 / бесконечно решений',
              kk: 'Бөлшектер, жақшалар, екі жақтағы айнымалы, 0 / шексіз шешім' } },
  { code: 'M1.2', unit: 'm1', n3: 2, n2: 2,
    t: { en: 'Slope, intercepts, linear equations in two variables',
         ru: 'Slope, intercepts, линейные уравнения с двумя переменными',
         kk: 'Slope, intercepts, екі айнымалысы бар сызықтық теңдеулер' },
    skills: { en: 'The three forms of a line, what the coefficients mean, parallel and perpendicular',
              ru: 'Три формы записи прямой, смысл коэффициентов, параллельные и перпендикулярные',
              kk: 'Түзудің үш жазылу түрі, коэффициенттердің мағынасы, параллель және перпендикуляр' } },
  { code: 'M1.3', unit: 'm1', n3: 4, n2: 4,
    t: { en: 'Linear word problems', ru: 'Линейные текстовые задачи', kk: 'Сызықтық мәтінді есептер' },
    skills: { en: 'Text into an equation; slope and intercept in context',
              ru: 'Текст → уравнение; slope и intercept в контексте',
              kk: 'Мәтін → теңдеу; контексттегі slope және intercept' } },
  { code: 'M1.4', unit: 'm1', n3: 5, n2: 5,
    t: { en: 'Linear inequalities and absolute value',
         ru: 'Линейные неравенства и модуль',
         kk: 'Сызықтық теңсіздіктер және модуль' },
    skills: { en: 'The sign flip on multiplying by a negative, the absolute-value form, inequalities in context',
              ru: 'Знак при умножении на отрицательное, форма с модулем, неравенства в контексте',
              kk: 'Теріс санға көбейткендегі таңба, модульді түрі, контексттегі теңсіздіктер' } },
  { code: 'M1.5', unit: 'm1', n3: 7, n2: 7,
    t: { en: 'Systems of linear equations: substitution and elimination',
         ru: 'Системы линейных уравнений: подстановка и сложение',
         kk: 'Сызықтық теңдеулер жүйесі: қою және қосу' },
    skills: { en: 'Substitution, elimination, and reading the answer off a graph',
              ru: 'Подстановка, сложение, графический метод',
              kk: 'Қою, қосу, графиктік әдіс' } },
  { code: 'M1.6', unit: 'm1', n3: 8, n2: 8,
    t: { en: 'Systems in word problems; the number of solutions',
         ru: 'Системы в текстовых задачах; количество решений',
         kk: 'Мәтінді есептердегі жүйелер; шешім саны' },
    skills: { en: 'Building the system; zero, one or infinitely many solutions from the coefficients',
              ru: 'Составление систем; 0 / 1 / бесконечно решений по коэффициентам',
              kk: 'Жүйе құру; коэффициенттер бойынша 0 / 1 / шексіз шешім' } },

  /* -------------------------------------------- Math Unit 2 — Advanced Math */
  { code: 'M2.1', unit: 'm2', n3: 10, n2: 10,
    t: { en: 'Exponent rules and equivalent expressions',
         ru: 'Правила степеней и равносильные выражения',
         kk: 'Дәреже ережелері және тең мәнді өрнектер' },
    skills: { en: 'Powers, roots, rational exponents, expanding and factoring',
              ru: 'Степени, корни, рациональные показатели, раскрытие и разложение',
              kk: 'Дәрежелер, түбірлер, рационал көрсеткіштер, жақша ашу және көбейткішке жіктеу' } },
  { code: 'M2.2', unit: 'm2', n3: 11, n2: 11,
    t: { en: 'Quadratics: factoring and zeros',
         ru: 'Квадратичные: разложение и нули',
         kk: 'Квадраттық: жіктеу және нөлдер' },
    skills: { en: 'Factoring, the shortcut identities, and how zeros and factors are the same fact',
              ru: 'Разложение, формулы сокращённого умножения, связь нулей и множителей',
              kk: 'Жіктеу, қысқаша көбейту формулалары, нөлдер мен көбейткіштердің байланысы' } },
  { code: 'M2.3', unit: 'm2', n3: 13, n2: 13,
    t: { en: 'Quadratics: the formula and completing the square',
         ru: 'Квадратичные: формула и выделение квадрата',
         kk: 'Квадраттық: формула және толық квадрат' },
    skills: { en: 'The formula, the discriminant, completing the square, the sum and product of the roots',
              ru: 'Формула, дискриминант, выделение квадрата, сумма и произведение корней',
              kk: 'Формула, дискриминант, толық квадрат, түбірлердің қосындысы мен көбейтіндісі' } },
  { code: 'M2.4', unit: 'm2', n3: 14, n2: 14,
    t: { en: 'Quadratic graphs and vertex form',
         ru: 'Графики квадратичных и vertex form',
         kk: 'Квадраттық графиктер және vertex form' },
    skills: { en: 'Vertex, axis of symmetry, intercepts, and what each form shows at a glance',
              ru: 'Вершина, ось симметрии, пересечения, что видно из каждой формы',
              kk: 'Төбе, симметрия осі, қиылысулар, әр түрден не көрінеді' } },
  { code: 'M2.5', unit: 'm2', n3: 16, n2: 16,
    t: { en: 'Functions: notation, domain, range, evaluating',
         ru: 'Функции: запись, область определения и значений, вычисление',
         kk: 'Функциялар: жазылуы, анықталу және мән облысы, есептеу' },
    skills: { en: 'f(x), composition, reading a graph and reading a table',
              ru: 'f(x), композиция, чтение графика и таблицы',
              kk: 'f(x), композиция, график пен кестені оқу' } },
  { code: 'M2.6', unit: 'm2', n3: 17, n2: 17,
    t: { en: 'Exponential growth and decay, nonlinear graphs, transformations',
         ru: 'Экспоненциальный рост и убывание, нелинейные графики, преобразования',
         kk: 'Экспоненциалды өсу мен кему, сызықты емес графиктер, түрлендірулер' },
    skills: { en: 'a·bˣ and the percentage it means, shifts and reflections, polynomial and rational graphs',
              ru: 'a·bˣ и процент роста, сдвиги и отражения, полиномы и рациональные графики',
              kk: 'a·bˣ және өсу пайызы, ығысулар мен шағылысулар, полиномдық және рационал графиктер' } },

  /* ------------------------- Math Unit 3 — Problem-Solving, Data and Desmos */
  { code: 'M3.1', unit: 'm3', n3: 19, n2: 19,
    t: { en: 'Ratios, rates, percentages, unit conversion',
         ru: 'Отношения, скорости, проценты, перевод единиц',
         kk: 'Қатынастар, жылдамдықтар, пайыздар, бірліктерді айырбастау' },
    skills: { en: 'Proportions, a percentage of a percentage, chains of units',
              ru: 'Пропорции, процент от процента, цепочки единиц',
              kk: 'Пропорциялар, пайыздан алынған пайыз, бірліктер тізбегі' } },
  { code: 'M3.2', unit: 'm3', n3: 21, n2: 21,
    t: { en: 'Desmos: solving, graphing and checking answers',
         ru: 'Desmos: решение, графики и проверка ответов',
         kk: 'Desmos: шешу, графиктер және жауапты тексеру' },
    skills: { en: 'Intersections, vertices, sliders, regression, checking the answer choices',
              ru: 'Пересечения, вершины, слайдеры, регрессия, проверка вариантов',
              kk: 'Қиылысулар, төбелер, слайдерлер, регрессия, нұсқаларды тексеру' } },
  { code: 'M3.3', unit: 'm3', n3: 22, n2: 22,
    t: { en: 'Statistics: mean, median, standard deviation, margin of error',
         ru: 'Статистика: среднее, медиана, стандартное отклонение, margin of error',
         kk: 'Статистика: орташа, медиана, стандартты ауытқу, margin of error' },
    skills: { en: 'How an outlier moves the mean, the median and the spread; what a margin of error means',
              ru: 'Как выброс меняет mean, median и разброс; смысл margin of error',
              kk: 'Шектен тыс мән mean, median және шашырауды қалай өзгертеді; margin of error мағынасы' } },
  { code: 'M3.4', unit: 'm3', n3: 23, n2: 23,
    t: { en: 'Probability, two-way tables, scatterplots, line of best fit',
         ru: 'Вероятность, таблицы сопряжённости, диаграммы рассеяния, линия тренда',
         kk: 'Ықтималдық, екі жақты кестелер, шашырау диаграммалары, тренд сызығы' },
    skills: { en: 'Conditional probability from a table; a prediction from the line',
              ru: 'Условная вероятность по таблице; прогноз по линии тренда',
              kk: 'Кесте бойынша шартты ықтималдық; тренд сызығы бойынша болжам' } },

  /* ------------------------------ Math Unit 4 — Geometry and Trigonometry */
  { code: 'M4.1', unit: 'm4', n3: 25, n2: 25,
    t: { en: 'Triangles: Pythagoras, similarity, 30-60-90 and 45-45-90',
         ru: 'Треугольники: Пифагор, подобие, 30-60-90 и 45-45-90',
         kk: 'Үшбұрыштар: Пифагор, ұқсастық, 30-60-90 және 45-45-90' },
    skills: { en: 'Similarity and side ratios; the special triangles without reaching for a formula',
              ru: 'Подобие и пропорции сторон; специальные треугольники без формулы',
              kk: 'Ұқсастық және қабырға пропорциялары; арнайы үшбұрыштар формуласыз' } },
  { code: 'M4.2', unit: 'm4', n3: 27, n2: 27,
    t: { en: 'Circles: arcs, radians, circle equations',
         ru: 'Окружности: дуги, радианы, уравнения окружности',
         kk: 'Шеңберлер: доғалар, радиандар, шеңбер теңдеулері' },
    skills: { en: 'Arcs, sectors, radians, (x−h)²+(y−k)²=r² and completing the square',
              ru: 'Дуги, секторы, радианы, (x−h)²+(y−k)²=r² и выделение квадрата',
              kk: 'Доғалар, секторлар, радиандар, (x−h)²+(y−k)²=r² және толық квадрат' } },
  { code: 'M4.3', unit: 'm4', n3: 28, n2: 28,
    t: { en: 'Trigonometry: SOH-CAH-TOA and complementary angles',
         ru: 'Тригонометрия: SOH-CAH-TOA и дополнительные углы',
         kk: 'Тригонометрия: SOH-CAH-TOA және толықтауыш бұрыштар' },
    skills: { en: 'sin, cos, tan, and sin x = cos(90° − x)',
              ru: 'sin, cos, tan и sin x = cos(90° − x)',
              kk: 'sin, cos, tan және sin x = cos(90° − x)' } },
  { code: 'M4.4', unit: 'm4', n3: 29, n2: 29,
    t: { en: 'Area and volume, mixed geometry drill',
         ru: 'Площади и объёмы, смешанная geometry-практика',
         kk: 'Аудандар мен көлемдер, аралас geometry-жаттығу' },
    skills: { en: 'The area and volume formulas, and scale: k, k², k³',
              ru: 'Формулы площадей и объёмов и масштаб: k, k², k³',
              kk: 'Аудан мен көлем формулалары және масштаб: k, k², k³' } },

  /* ----------------------------------------------------------- Math Review */
  { code: 'MR1', unit: 'mr', n3: 33, n2: 33, fromErrorLog: true,
    t: { en: 'Math: mixed review of your weakest skills',
         ru: 'Math: mixed review по самым слабым навыкам',
         kk: 'Math: ең әлсіз дағдылар бойынша mixed review' },
    skills: { en: 'Every code under 80% in the error log',
              ru: 'Все коды с точностью ниже 80% в error log',
              kk: 'Error log-тағы дәлдігі 80%-дан төмен барлық кодтар' } },
  { code: 'MR2', unit: 'mr', n3: null, n2: 34, fromErrorLog: true,
    t: { en: 'A second mixed review pass', ru: 'Второй проход mixed review', kk: 'Екінші mixed review' },
    skills: { en: 'Whatever is still unsteady. Two lessons a week has room for this one; three does not.',
              ru: 'То, что всё ещё неустойчиво. У графика 2×/нед на это есть место, у 3×/нед — нет.',
              kk: 'Әлі тұрақсыз болғанның бәрі. 2×/апта кестесінде бұған орын бар, 3×/аптада — жоқ.' } },

  /* --------------------------- Verbal Unit 1 — Standard English Conventions */
  { code: 'V1.1', unit: 'v1', n3: 3, n2: 3,
    t: { en: 'Sentence boundaries: commas, semicolons, colons, dashes',
         ru: 'Границы предложений: запятые, точки с запятой, двоеточия, тире',
         kk: 'Сөйлем шекаралары: үтір, нүктелі үтір, қос нүкте, сызықша' },
    skills: { en: 'Fragments, run-ons, comma splices, non-essential elements, lists',
              ru: 'Фрагмент, run-on, comma splice, необязательные элементы, списки',
              kk: 'Фрагмент, run-on, comma splice, міндетті емес элементтер, тізімдер' } },
  { code: 'V1.2', unit: 'v1', n3: 6, n2: 6,
    t: { en: 'Subject-verb agreement', ru: 'Согласование подлежащего и сказуемого', kk: 'Бастауыш пен баяндауыштың үйлесімі' },
    skills: { en: 'The subject behind a long insertion, collective nouns, each and neither',
              ru: 'Подлежащее за длинной вставкой, collective nouns, each / neither',
              kk: 'Ұзын қыстырма артындағы бастауыш, collective nouns, each / neither' } },
  { code: 'V1.3', unit: 'v1', n3: 9, n2: 9,
    t: { en: 'Verb tense and consistency', ru: 'Время глагола и согласованность', kk: 'Етістік шағы және үйлесімділік' },
    skills: { en: 'The tense the paragraph is in, and parallel tenses',
              ru: 'Время по контексту абзаца, параллелизм времён',
              kk: 'Абзац контексті бойынша шақ, шақтардың параллелизмі' } },
  { code: 'V1.4', unit: 'v1', n3: 12, n2: 12,
    t: { en: 'Pronouns and clear reference', ru: 'Местоимения и ясная отсылка', kk: 'Есімдіктер және анық сілтеме' },
    skills: { en: 'Agreement in number, and references that could mean two things',
              ru: 'Согласование по числу, неоднозначные ссылки',
              kk: 'Сан бойынша үйлесім, екіұшты сілтемелер' } },
  { code: 'V1.5', unit: 'v1', n3: 15, n2: 15,
    t: { en: 'Possessives and frequently confused words',
         ru: 'Притяжательные и часто путаемые слова',
         kk: 'Тәуелдік формалар және жиі шатастырылатын сөздер' },
    skills: { en: '’s / s’ / s, its and it’s, their, there and they’re',
              ru: '’s / s’ / s, its/it’s, their/there/they’re',
              kk: '’s / s’ / s, its/it’s, their/there/they’re' } },
  { code: 'V1.6', unit: 'v1', n3: 18, n2: 18,
    t: { en: 'Modifiers: dangling and misplaced', ru: 'Модификаторы: dangling и misplaced', kk: 'Модификаторлар: dangling және misplaced' },
    skills: { en: 'Who is doing the thing after an opening phrase; parallel constructions',
              ru: 'Кто выполняет действие после вводной фразы; параллельные конструкции',
              kk: 'Кіріспе тіркестен кейін әрекетті кім істейді; параллель құрылымдар' } },

  /* ---------------------------------- Verbal Unit 2 — Expression of Ideas */
  { code: 'V2.1', unit: 'v2', n3: 20, n2: 20,
    t: { en: 'Transitions and transition logic', ru: 'Связки и логика связок', kk: 'Байланыстырғыштар және олардың логикасы' },
    skills: { en: 'Contrast, cause, example, sequence, qualification',
              ru: 'Контраст, причина, пример, последовательность, уточнение',
              kk: 'Қарама-қайшылық, себеп, мысал, реттілік, нақтылау' } },
  { code: 'V2.2', unit: 'v2', n3: 35, n2: 35,
    t: { en: 'Rhetorical synthesis: the student-notes questions',
         ru: 'Rhetorical synthesis: вопросы со student notes',
         kk: 'Rhetorical synthesis: student notes сұрақтары' },
    skills: { en: 'The answer is chosen strictly against the goal stated in the question',
              ru: 'Выбор ответа строго под цель из вопроса',
              kk: 'Жауап сұрақта айтылған мақсатқа қарап таңдалады' } },

  /* ----------------------------------- Verbal Unit 3 — Craft and Structure */
  { code: 'V3.1', unit: 'v3', n3: 24, n2: 24,
    t: { en: 'Words in context', ru: 'Слова в контексте', kk: 'Контекстегі сөздер' },
    skills: { en: 'Your own word before the choices; tone and precision of meaning',
              ru: 'Подобрать своё слово до вариантов; тон и точность смысла',
              kk: 'Нұсқаларға дейін өз сөзіңді табу; реңк және мағына дәлдігі' } },
  { code: 'V3.2', unit: 'v3', n3: 30, n2: 30,
    t: { en: 'Text structure and purpose', ru: 'Структура и цель текста', kk: 'Мәтіннің құрылымы мен мақсаты' },
    skills: { en: 'The function of a sentence, and the main purpose of the text',
              ru: 'Функция предложения и главная цель текста',
              kk: 'Сөйлемнің қызметі және мәтіннің басты мақсаты' } },
  { code: 'V3.3', unit: 'v3', n3: 31, n2: 31,
    t: { en: 'Cross-text connections', ru: 'Связи между текстами', kk: 'Мәтіндер арасындағы байланыс' },
    skills: { en: 'How the author of Text 2 would answer the author of Text 1',
              ru: 'Как автор Текста 2 ответил бы автору Текста 1',
              kk: '2-мәтіннің авторы 1-мәтіннің авторына қалай жауап берер еді' } },

  /* --------------------------------- Verbal Unit 4 — Information and Ideas */
  { code: 'V4.1', unit: 'v4', n3: 26, n2: 26,
    t: { en: 'Central ideas, details and inferences',
         ru: 'Главная идея, детали и выводы',
         kk: 'Негізгі идея, детальдар және қорытындылар' },
    skills: { en: 'The main idea, the details, and the logical completion of a text',
              ru: 'Главная идея, детали, логическое завершение текста',
              kk: 'Негізгі идея, детальдар, мәтіннің логикалық аяқталуы' } },
  { code: 'V4.2', unit: 'v4', n3: 32, n2: 32,
    t: { en: 'Command of evidence: textual and quantitative',
         ru: 'Command of evidence: текст и данные',
         kk: 'Command of evidence: мәтін және деректер' },
    skills: { en: 'The quote or the table row that supports or weakens the claim',
              ru: 'Цитата или данные таблицы, которые поддерживают или ослабляют тезис',
              kk: 'Тезисті қолдайтын немесе әлсірететін дәйексөз не кесте деректері' } },

  /* -------------------------------------------------------------- hard math */
  { code: 'HM1', unit: 'hm', n3: 34, n2: 37,
    t: { en: 'Hard algebra', ru: 'Hard algebra', kk: 'Hard algebra' },
    skills: { en: 'Parameterised equations, systems with no or infinitely many solutions, function transformations at difficulty 7+',
              ru: 'Уравнения с параметром, системы без решений или с бесконечным числом, преобразования функций сложности 7+',
              kk: 'Параметрлі теңдеулер, шешімі жоқ немесе шексіз жүйелер, 7+ күрделіліктегі функция түрлендірулері' } },
  { code: 'HM2', unit: 'hm', n3: 36, n2: 39,
    t: { en: 'Hard Advanced Math', ru: 'Hard Advanced Math', kk: 'Hard Advanced Math' },
    skills: { en: 'Nonlinear systems, radical and rational equations, exponential reasoning',
              ru: 'Нелинейные системы, иррациональные и рациональные уравнения, экспоненциальные рассуждения',
              kk: 'Сызықты емес жүйелер, иррационал және рационал теңдеулер, экспоненциалды пайымдау' } },
  { code: 'HM3', unit: 'hm', n3: 37, n2: 41,
    t: { en: 'Hard data analysis', ru: 'Hard data analysis', kk: 'Hard data analysis' },
    skills: { en: 'Margin of error and study design, conditional probability, dense scatterplots',
              ru: 'Margin of error и дизайн исследования, условная вероятность, плотные диаграммы рассеяния',
              kk: 'Margin of error және зерттеу дизайны, шартты ықтималдық, тығыз шашырау диаграммалары' } },
  { code: 'HM4', unit: 'hm', n3: 39, n2: 42,
    t: { en: 'Hard geometry and trigonometry', ru: 'Hard geometry и trigonometry', kk: 'Hard geometry және trigonometry' },
    skills: { en: 'Combined triangle-and-circle problems, trigonometry in word problems, volume of unfamiliar solids',
              ru: 'Комбинированные задачи с треугольником и окружностью, тригонометрия в текстовых задачах, объём непривычных тел',
              kk: 'Үшбұрыш пен шеңбер біріктірілген есептер, мәтінді есептердегі тригонометрия, бейтаныс денелердің көлемі' } },
  { code: 'HM5', unit: 'hm', n3: 41, n2: 44,
    t: { en: 'Hard math under time pressure', ru: 'Hard math на время', kk: 'Hard math уақыт қысымымен' },
    skills: { en: 'Multi-step word problems; sets of ten questions in twelve minutes',
              ru: 'Многошаговые текстовые задачи; наборы из 10 вопросов за 12 минут',
              kk: 'Көп қадамды мәтінді есептер; 12 минутта 10 сұрақтан тұратын жинақтар' } },

  /* ------------------------------------------------------------ hard verbal */
  { code: 'HV1', unit: 'hv', n3: 38, n2: 40,
    t: { en: 'Dense inference and purpose questions',
         ru: 'Плотные вопросы на вывод и цель',
         kk: 'Қорытынды мен мақсатқа арналған күрделі сұрақтар' },
    skills: { en: 'Science and history passages at full difficulty',
              ru: 'Научные и исторические тексты на полной сложности',
              kk: 'Ғылыми және тарихи мәтіндер толық күрделілікте' } },
  { code: 'HV2', unit: 'hv', n3: 40, n2: 38,
    t: { en: 'Hard rhetorical synthesis and quantitative evidence',
         ru: 'Сложный rhetorical synthesis и данные как доказательство',
         kk: 'Күрделі rhetorical synthesis және деректік дәлел' },
    skills: { en: 'Synthesis with competing priorities; quantitative evidence with tricky tables',
              ru: 'Синтез с конкурирующими требованиями; количественные доказательства с неудобными таблицами',
              kk: 'Бәсекелес талаптары бар синтез; қиын кестелері бар сандық дәлелдер' } },
  { code: 'HV3', unit: 'hv', n3: 42, n2: 43,
    t: { en: 'The hardest grammar items', ru: 'Самые сложные грамматические задания', kk: 'Ең күрделі грамматика тапсырмалары' },
    skills: { en: 'Complex sentence boundaries and modifier traps',
              ru: 'Сложные границы предложений и ловушки с модификаторами',
              kk: 'Күрделі сөйлем шекаралары және модификатор тұзақтары' } },

  /* --------------------------------------------------- buffer and test week */
  { code: 'BUF', unit: 'tw', n3: null, n2: 36, buffer: true,
    t: { en: 'Buffer lesson', ru: 'Буферный урок', kk: 'Буферлік сабақ' },
    skills: { en: 'Catch up on whatever has slipped, or one more mixed set. Two lessons a week has room for it.',
              ru: 'Догнать отставание или ещё один mixed-набор. У графика 2×/нед на это есть место.',
              kk: 'Артта қалғанды қуып жету немесе тағы бір mixed-жинақ. 2×/апта кестесінде бұған орын бар.' } },
  { code: 'T1', unit: 'tw', n3: 43, n2: 45,
    t: { en: 'Final mixed hard set', ru: 'Финальный смешанный hard-набор', kk: 'Қорытынды аралас hard-жинақ' },
    skills: { en: 'Aimed at whatever the last two practice tests showed',
              ru: 'По тому, что показали два последних practice test',
              kk: 'Соңғы екі practice test көрсеткен нәрсеге бағытталған' } },
  { code: 'T2', unit: 'tw', n3: 44, n2: 45,
    t: { en: 'Pacing and strategy drill', ru: 'Тренировка темпа и стратегии', kk: 'Қарқын мен стратегия жаттығуы' },
    skills: { en: 'Module 2 decision-making, Desmos against algebra, question triage',
              ru: 'Решения в Модуле 2, Desmos против алгебры, сортировка вопросов',
              kk: '2-модульдегі шешімдер, Desmos пен алгебра, сұрақтарды сұрыптау' } },
  { code: 'T3', unit: 'tw', n3: 45, n2: 45,
    t: { en: 'Light review', ru: 'Лёгкий повтор', kk: 'Жеңіл қайталау' },
    skills: { en: 'The error log, the formula-sheet facts, the transition and punctuation rules',
              ru: 'Error log, факты из formula sheet, правила связок и пунктуации',
              kk: 'Error log, formula sheet фактілері, байланыстырғыш пен тыныс белгі ережелері' } }
];

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
   * The course in order for a schedule, as slots. A slot is one sitting: it
   * usually holds one lesson, and on the two-a-week schedule the last slot
   * holds the three test-week lessons run together.
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
