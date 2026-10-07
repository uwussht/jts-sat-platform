/* ==========================================================================
   The domains and the 36 units.

   Eight content units — four Math, four Verbal, one for each Digital SAT
   domain — plus the Challenge month. Every unit is worded once here and
   referred to by code everywhere else: a unit names U9, the error log names
   U9, the materials page names U9, and all three read the title from this
   file. The Challenge classes are CH1 to CH12.

   n3 / n2 are the class's number on the three-a-week and the two-a-week
   schedule. The order is the same on both, so they agree; only the weeks the
   classes fall in differ, and those come from js/data/programme.js.

   Loaded after js/data/programme.js, and before js/data/units/*.js.
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

/* ------------------------------------------------------------- the units
   Each unit and each Challenge class has its own file in js/data/units/
   (U1.js … U24.js, CH1.js … CH12.js), loaded after this one. Every file
   calls JTS.data.unit({...}) once with:

     code, unit, n3, n2, week   where it sits in the course
     section (Challenge only)   'rw' or 'math': the section its questions are in
     t, skills                  its title and summary, in en / ru / kk
     lesson (optional)          { lead, parts: [{ title, mins, html }] }, the
                                written lesson, generated from the course page
     drill (optional)           practice flags, e.g. { hard: true } for Challenge

   The order of the files does not matter: the course order comes from n3/n2. */
JTS.data.programme.lessons = [];
JTS.data.programme.teach = {};
JTS.data.programme.drills = {};

/* Other spellings of a unit id that unit files use. */
var UNIT_ALIASES = { 'v-eoi': 'v-ei' };

JTS.data.unit = function (def) {
  var P = JTS.data.programme;
  var lesson = {};
  if (UNIT_ALIASES[def.unit]) def.unit = UNIT_ALIASES[def.unit];
  Object.keys(def).forEach(function (k) {
    if (k !== 'lesson' && k !== 'drill') lesson[k] = def[k];
  });
  P.lessons.push(lesson);
  if (def.lesson) P.teach[def.code] = def.lesson;
  if (def.drill) P.drills[def.code] = def.drill;
};

/* ------------------------------------------------------ lessons kept as JSON
   js/data/lessons/index.json lists files: { "files": ["U1.json", ...] }.
   A file holds one lesson or a list of them:

     { "code": "U1",
       "lead": "<p>The opening paragraph</p>",          optional
       "parts": [ { "title": "Part 1 · Reading the blank",
                    "mins": "10 min",                     optional
                    "html": "<p>…</p>" }, … ] }

   A lesson from JSON replaces the one written in the unit's .js file, so a
   unit can be moved to JSON one at a time. Fetched at start-up, like the
   question files. */
JTS.data.loadLessonFiles = function () {
  var base = 'js/data/lessons/';
  function get(path) {
    return fetch(base + path, { cache: 'no-cache' }).then(function (r) {
      if (!r.ok) throw new Error(path + ': HTTP ' + r.status);
      return r.json();
    });
  }
  return get('index.json').then(function (idx) {
    var files = (idx && idx.files) || [];
    return Promise.all(files.map(function (f) {
      return get(f).catch(function (e) {
        console.error('[JTS] lesson file not loaded — ' + e.message);
        return [];
      });
    })).then(function (lists) {
      var n = 0;
      [].concat.apply([], lists.map(function (d) { return Array.isArray(d) ? d : (d && d.lessons) || [d]; }))
        .forEach(function (l) {
          if (!l || !l.code || !Array.isArray(l.parts)) return;
          JTS.data.programme.teach[l.code] = { lead: l.lead || '', parts: l.parts.map(function (p) {
            return { title: p.title || '', mins: p.mins || '', html: p.html || '' };
          }) };
          n++;
        });
      if (n) console.info('[JTS] ' + n + ' lesson' + (n === 1 ? '' : 's') + ' loaded from JSON');
      return n;
    });
  }).catch(function (e) {
    console.warn('[JTS] no JSON lessons loaded — ' + e.message);
    return 0;
  });
};

/* ------------------------------------------------- each unit's practice topics
   The Practice-page topics a unit is practised under: the plan's Practice
   button opens Practice with these selected. A Challenge class has none. */
JTS.data.programme.unitSkills = {
  U1: ['rw.cs.words-in-context'],
  U2: ['rw.cs.text-structure-purpose'],
  U3: ['m.alg.linear'],
  U4: ['rw.cs.cross-text-connections'],
  U5: ['m.alg.linear'],
  U6: ['m.alg.systems'],
  U7: ['rw.ii.central-ideas'],
  U8: ['rw.ii.evidence-textual'],
  U9: ['m.adv.nonlinear'],
  U10: ['rw.ii.evidence-quantitative'],
  U11: ['m.adv.nonlinear', 'm.adv.functions'],
  U12: ['m.adv.functions', 'm.adv.expressions'],
  U13: ['rw.ii.inferences'],
  U14: ['rw.sec.boundaries'],
  U15: ['m.psda.ratios', 'm.psda.percentages'],
  U16: ['rw.sec.boundaries'],
  U17: ['m.psda.statistics', 'm.psda.probability'],
  U18: ['m.alg.inequalities'],
  U19: ['rw.sec.form-structure-sense'],
  U20: ['m.geo.triangles', 'm.geo.area-volume'],
  U21: ['m.adv.functions', 'm.adv.expressions', 'm.adv.nonlinear'],
  U22: ['rw.ei.rhetorical-synthesis'],
  U23: ['rw.ei.transitions'],
  U24: ['m.geo.trig-ratios', 'm.geo.circles']
};

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
