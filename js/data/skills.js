/* ==========================================================================
   Skill taxonomy. Every question, lesson, error and recommendation points at
   a skillId from this file.

   examWeight is the share of the WHOLE Digital SAT (54 R&W + 44 Math = 98
   questions), so all weights here sum to ~1.00. It drives the "is this worth
   your time" half of the recommendation score in JTS.mastery.priority.
   Figures are College Board's published domain shares, split across skills by
   JTS from observed item frequency — approximate, not official per-skill data.
   ========================================================================== */
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
    name_en: 'Algebra',                     name_ru: 'Алгебра',                     name_kk: 'Алгебра' },
  { id: 'm.adv',  section: 'math', order: 6,
    name_en: 'Advanced Math',               name_ru: 'Продвинутая математика',      name_kk: 'Жоғары математика' },
  { id: 'm.psda', section: 'math', order: 7,
    name_en: 'Problem Solving and Data Analysis', name_ru: 'Задачи и анализ данных', name_kk: 'Есептер мен деректерді талдау' },
  { id: 'm.geo',  section: 'math', order: 8,
    name_en: 'Geometry and Trigonometry',   name_ru: 'Геометрия и тригонометрия',   name_kk: 'Геометрия және тригонометрия' }
];

JTS.data.skills = [
  /* ---------------- Reading and Writing — Information and Ideas (26% of R&W) */
  { id: 'rw.ii.central-ideas', section: 'rw', domain: 'rw.ii', examWeight: 0.040, prerequisites: [],
    name_en: 'Central ideas and details',
    name_ru: 'Главная мысль и детали',
    name_kk: 'Негізгі ой және детальдар' },
  { id: 'rw.ii.inferences', section: 'rw', domain: 'rw.ii', examWeight: 0.040, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Inferences',
    name_ru: 'Выводы (inferences)',
    name_kk: 'Қорытынды жасау (inferences)' },
  { id: 'rw.ii.evidence-textual', section: 'rw', domain: 'rw.ii', examWeight: 0.040, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Command of evidence — textual',
    name_ru: 'Работа с доказательствами — текст',
    name_kk: 'Дәлелмен жұмыс — мәтін' },
  { id: 'rw.ii.evidence-quantitative', section: 'rw', domain: 'rw.ii', examWeight: 0.023, prerequisites: ['rw.ii.evidence-textual'],
    name_en: 'Command of evidence — quantitative',
    name_ru: 'Работа с доказательствами — данные',
    name_kk: 'Дәлелмен жұмыс — деректер' },

  /* ---------------- Craft and Structure (28% of R&W) */
  { id: 'rw.cs.words-in-context', section: 'rw', domain: 'rw.cs', examWeight: 0.075, prerequisites: [],
    name_en: 'Words in context',
    name_ru: 'Слова в контексте',
    name_kk: 'Контекстегі сөздер' },
  { id: 'rw.cs.text-structure-purpose', section: 'rw', domain: 'rw.cs', examWeight: 0.053, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Text structure and purpose',
    name_ru: 'Структура и цель текста',
    name_kk: 'Мәтін құрылымы мен мақсаты' },
  { id: 'rw.cs.cross-text-connections', section: 'rw', domain: 'rw.cs', examWeight: 0.026, prerequisites: ['rw.ii.central-ideas', 'rw.ii.inferences'],
    name_en: 'Cross-text connections',
    name_ru: 'Связи между текстами',
    name_kk: 'Мәтіндер арасындағы байланыс' },

  /* ---------------- Expression of Ideas (20% of R&W) */
  { id: 'rw.ei.rhetorical-synthesis', section: 'rw', domain: 'rw.ei', examWeight: 0.055, prerequisites: ['rw.ii.central-ideas'],
    name_en: 'Rhetorical synthesis',
    name_ru: 'Риторический синтез',
    name_kk: 'Риторикалық синтез' },
  { id: 'rw.ei.transitions', section: 'rw', domain: 'rw.ei', examWeight: 0.055, prerequisites: [],
    name_en: 'Transitions',
    name_ru: 'Связки (transitions)',
    name_kk: 'Байланыстырушы сөздер' },

  /* ---------------- Standard English Conventions (26% of R&W) */
  { id: 'rw.sec.boundaries', section: 'rw', domain: 'rw.sec', examWeight: 0.075, prerequisites: [],
    name_en: 'Boundaries (punctuation between clauses)',
    name_ru: 'Границы предложений и пунктуация',
    name_kk: 'Сөйлем шекаралары және тыныс белгілері' },
  { id: 'rw.sec.form-structure-sense', section: 'rw', domain: 'rw.sec', examWeight: 0.068, prerequisites: [],
    name_en: 'Form, structure, and sense',
    name_ru: 'Форма, структура и согласование',
    name_kk: 'Форма, құрылым және үйлесім' },

  /* ---------------- Algebra (35% of Math) */
  { id: 'm.alg.linear', section: 'math', domain: 'm.alg', examWeight: 0.070, prerequisites: [],
    name_en: 'Linear equations and functions',
    name_ru: 'Линейные уравнения и функции',
    name_kk: 'Сызықтық теңдеулер мен функциялар' },
  { id: 'm.alg.systems', section: 'math', domain: 'm.alg', examWeight: 0.045, prerequisites: ['m.alg.linear'],
    name_en: 'Systems of linear equations',
    name_ru: 'Системы линейных уравнений',
    name_kk: 'Сызықтық теңдеулер жүйесі' },
  { id: 'm.alg.inequalities', section: 'math', domain: 'm.alg', examWeight: 0.032, prerequisites: ['m.alg.linear'],
    name_en: 'Linear inequalities',
    name_ru: 'Линейные неравенства',
    name_kk: 'Сызықтық теңсіздіктер' },
  { id: 'm.alg.absolute-value', section: 'math', domain: 'm.alg', examWeight: 0.010, prerequisites: ['m.alg.linear'],
    name_en: 'Absolute value',
    name_ru: 'Модуль',
    name_kk: 'Модуль' },

  /* ---------------- Advanced Math (35% of Math) */
  { id: 'm.adv.quadratics', section: 'math', domain: 'm.adv', examWeight: 0.048, prerequisites: ['m.alg.linear'],
    name_en: 'Quadratic equations and functions',
    name_ru: 'Квадратные уравнения и функции',
    name_kk: 'Квадрат теңдеулер мен функциялар' },
  { id: 'm.adv.polynomials', section: 'math', domain: 'm.adv', examWeight: 0.030, prerequisites: ['m.adv.quadratics'],
    name_en: 'Polynomials',
    name_ru: 'Многочлены',
    name_kk: 'Көпмүшелер' },
  { id: 'm.adv.exponential', section: 'math', domain: 'm.adv', examWeight: 0.035, prerequisites: ['m.alg.linear'],
    name_en: 'Exponential functions and growth',
    name_ru: 'Показательные функции и рост',
    name_kk: 'Көрсеткіштік функциялар және өсу' },
  { id: 'm.adv.radicals', section: 'math', domain: 'm.adv', examWeight: 0.020, prerequisites: ['m.adv.quadratics'],
    name_en: 'Radicals and rational exponents',
    name_ru: 'Корни и дробные степени',
    name_kk: 'Түбірлер мен бөлшек дәрежелер' },
  { id: 'm.adv.rational', section: 'math', domain: 'm.adv', examWeight: 0.024, prerequisites: ['m.adv.polynomials'],
    name_en: 'Rational expressions',
    name_ru: 'Рациональные выражения',
    name_kk: 'Рационал өрнектер' },

  /* ---------------- Problem Solving and Data Analysis (15% of Math) */
  { id: 'm.psda.ratios', section: 'math', domain: 'm.psda', examWeight: 0.016, prerequisites: [],
    name_en: 'Ratios, rates and proportions',
    name_ru: 'Отношения, скорости и пропорции',
    name_kk: 'Қатынастар, жылдамдық және пропорция' },
  { id: 'm.psda.percentages', section: 'math', domain: 'm.psda', examWeight: 0.016, prerequisites: ['m.psda.ratios'],
    name_en: 'Percentages',
    name_ru: 'Проценты',
    name_kk: 'Пайыздар' },
  { id: 'm.psda.units', section: 'math', domain: 'm.psda', examWeight: 0.010, prerequisites: ['m.psda.ratios'],
    name_en: 'Units and unit conversion',
    name_ru: 'Единицы измерения и перевод',
    name_kk: 'Өлшем бірліктері және түрлендіру' },
  { id: 'm.psda.statistics', section: 'math', domain: 'm.psda', examWeight: 0.015, prerequisites: [],
    name_en: 'Statistics: centre, spread and inference',
    name_ru: 'Статистика: центр, разброс, выводы',
    name_kk: 'Статистика: орта, шашырау, қорытынды' },
  { id: 'm.psda.probability', section: 'math', domain: 'm.psda', examWeight: 0.010, prerequisites: ['m.psda.ratios'],
    name_en: 'Probability and two-way tables',
    name_ru: 'Вероятность и таблицы сопряжённости',
    name_kk: 'Ықтималдық және кестелер' },

  /* ---------------- Geometry and Trigonometry (15% of Math) */
  { id: 'm.geo.triangles', section: 'math', domain: 'm.geo', examWeight: 0.020, prerequisites: ['m.alg.linear'],
    name_en: 'Triangles and similarity',
    name_ru: 'Треугольники и подобие',
    name_kk: 'Үшбұрыштар және ұқсастық' },
  { id: 'm.geo.circles', section: 'math', domain: 'm.geo', examWeight: 0.015, prerequisites: [],
    name_en: 'Circles',
    name_ru: 'Окружности',
    name_kk: 'Шеңберлер' },
  { id: 'm.geo.area-volume', section: 'math', domain: 'm.geo', examWeight: 0.017, prerequisites: [],
    name_en: 'Area and volume',
    name_ru: 'Площадь и объём',
    name_kk: 'Аудан және көлем' },
  { id: 'm.geo.trig-ratios', section: 'math', domain: 'm.geo', examWeight: 0.010, prerequisites: ['m.geo.triangles'],
    name_en: 'Right-triangle trigonometry',
    name_ru: 'Тригонометрия прямоугольного треугольника',
    name_kk: 'Тікбұрышты үшбұрыш тригонометриясы' },
  { id: 'm.geo.radians', section: 'math', domain: 'm.geo', examWeight: 0.005, prerequisites: ['m.geo.circles', 'm.geo.trig-ratios'],
    name_en: 'Radians and the unit circle',
    name_ru: 'Радианы и единичная окружность',
    name_kk: 'Радиандар және бірлік шеңбер' }
];
