/* ==========================================================================
   Desmos guide content.

   Seven sections, each with a live calculator and expressions to type into it,
   plus six timed practice tasks. The timings are JTS's own measurements on
   these exact tasks — they are there to show where the calculator actually
   saves time and, in two cases, where it does not.

   Nothing here is copied from Desmos's documentation or from any test
   publisher; the expressions are ordinary mathematics.

   video: paste a URL to attach a JTS screencast to a section. Left null the
   section renders an empty slot rather than a broken player.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.desmosGuide = [
  {
    id: 'basics', video: null,
    lead: {
      en: 'Type an expression and it is drawn immediately. Everything below lives in the expression list on the left; the graph paper on the right is only a view of it.',
      ru: 'Вводите выражение — оно рисуется сразу. Всё, что ниже, живёт в списке выражений слева; клетчатое поле справа — только его отображение.',
      kk: 'Өрнекті теріңіз — ол бірден сызылады. Төмендегінің бәрі сол жақтағы өрнектер тізімінде тұрады; оң жақтағы тор — оның көрінісі ғана.'
    },
    steps: {
      en: [
        'Type <code>y=2x+1</code> and press Enter. A new empty row appears below it.',
        'Type <code>^</code> for a power and <code>/</code> for a fraction; the right arrow key leaves the box you are in.',
        'Click the coloured circle on a row to hide that graph without deleting it.',
        'Drag on the paper to pan, scroll to zoom. The wrench icon (top right) sets the window by hand.'
      ],
      ru: [
        'Введите <code>y=2x+1</code> и нажмите Enter. Ниже появится новая пустая строка.',
        'Знак <code>^</code> даёт степень, <code>/</code> — дробь; стрелка вправо выводит из поля, в котором вы находитесь.',
        'Клик по цветному кружку слева от строки прячет график, не удаляя его.',
        'Перетаскивание двигает поле, прокрутка масштабирует. Иконка ключа справа сверху задаёт окно вручную.'
      ],
      kk: [
        '<code>y=2x+1</code> теріп, Enter басыңыз. Астында жаңа бос жол пайда болады.',
        '<code>^</code> дәреже береді, <code>/</code> — бөлшек; оң жақ көрсеткі сіз тұрған өрістен шығарады.',
        'Жолдың сол жағындағы түсті шеңберді бассаңыз, график жойылмай жасырылады.',
        'Сүйреу өрісті жылжытады, айналдыру масштабтайды. Оң жақ жоғарыдағы кілт белгісі терезені қолмен қояды.'
      ]
    },
    tryIt: ['y=2x+1', 'y=x^2-4']
  },
  {
    id: 'graph', video: null,
    lead: {
      en: 'A function you can see is a function you can read answers off. Sliders turn one graph into a family of them.',
      ru: 'Функцию, которую видно, можно читать глазами. Ползунки превращают один график в семейство.',
      kk: 'Көрініп тұрған функцияны көзбен оқуға болады. Жүгірткілер бір графикті бүтін бір отбасына айналдырады.'
    },
    steps: {
      en: [
        'Type <code>y=a(x-h)^2+k</code>. Desmos offers to add sliders for a, h and k — accept.',
        'Drag each slider and watch which part of the parabola it moves. That is the vertex form, learned in twenty seconds.',
        'Click any point where two graphs meet: Desmos labels the intersection with its exact coordinates.',
        'Click where a graph crosses an axis to read the root or the y-intercept.'
      ],
      ru: [
        'Введите <code>y=a(x-h)^2+k</code>. Desmos предложит добавить ползунки для a, h и k — согласитесь.',
        'Подвигайте каждый ползунок и посмотрите, какую часть параболы он двигает. Это форма вершины, выученная за двадцать секунд.',
        'Кликните в точке пересечения двух графиков: Desmos подпишет её точные координаты.',
        'Клик в точке пересечения с осью даёт корень или точку пересечения с y.'
      ],
      kk: [
        '<code>y=a(x-h)^2+k</code> теріңіз. Desmos a, h және k үшін жүгірткі қосуды ұсынады — келісіңіз.',
        'Әр жүгірткіні жылжытып, ол параболаның қай бөлігін қозғалтатынын көріңіз. Бұл — жиырма секундта үйренілген төбе формасы.',
        'Екі график қиылысқан нүктені басыңыз: Desmos дәл координаттарын жазып береді.',
        'Графиктің оспен қиылысқан жерін бассаңыз, түбір немесе y-қиылысы шығады.'
      ]
    },
    tryIt: ['y=a(x-h)^2+k', 'y=sin(x)', 'y=|x-3|']
  },
  {
    id: 'solve', video: null,
    lead: {
      en: 'Most SAT equations are faster solved by intersection than by algebra — and the graph shows you how many solutions there are before you find any of them.',
      ru: 'Большинство уравнений SAT быстрее решать пересечением, чем алгеброй, — и график показывает, сколько решений, ещё до того как вы найдёте хоть одно.',
      kk: 'SAT теңдеулерінің көбін алгебрадан гөрі қиылысу арқылы шешу жылдам — әрі график бірде-бір шешім табылмай тұрып, олардың нешеу екенін көрсетеді.'
    },
    steps: {
      en: [
        'Put the left side in one row and the right side in another: <code>y=3x-7</code> and <code>y=x^2-5</code>.',
        'Click each crossing point to read the solutions.',
        'A system of two linear equations works the same way: one row each, one intersection.',
        'For an inequality type it directly — <code>y>2x+1</code> shades the region.',
        'No intersection on screen means either no real solution or the wrong window. Zoom out once before believing it.'
      ],
      ru: [
        'Левую часть — в одну строку, правую — в другую: <code>y=3x-7</code> и <code>y=x^2-5</code>.',
        'Кликните каждую точку пересечения, чтобы прочитать решения.',
        'Система из двух линейных уравнений решается так же: по строке на каждое, одна точка пересечения.',
        'Неравенство вводится прямо: <code>y>2x+1</code> заштрихует область.',
        'Нет пересечения на экране — значит либо нет действительных решений, либо не то окно. Сначала отдалите, потом верьте.'
      ],
      kk: [
        'Сол жағын бір жолға, оң жағын екінші жолға жазыңыз: <code>y=3x-7</code> және <code>y=x^2-5</code>.',
        'Шешімдерді оқу үшін әр қиылысу нүктесін басыңыз.',
        'Екі сызықтық теңдеуден тұратын жүйе дәл солай шешіледі: әрқайсысына бір жол, бір қиылысу.',
        'Теңсіздікті тікелей теріңіз: <code>y>2x+1</code> аймақты бояйды.',
        'Экранда қиылысу жоқ болса — не нақты шешім жоқ, не терезе дұрыс емес. Алдымен кішірейтіңіз, содан кейін сеніңіз.'
      ]
    },
    tryIt: ['y=3x-7', 'y=x^2-5', 'y>2x+1']
  },
  {
    id: 'tables', video: null,
    lead: {
      en: 'Data questions give you points, not a formula. Desmos will fit the formula for you.',
      ru: 'В задачах с данными дают точки, а не формулу. Desmos подберёт формулу сам.',
      kk: 'Деректер сұрақтарында формула емес, нүктелер беріледі. Desmos формуланы өзі табады.'
    },
    steps: {
      en: [
        'Press + (top left) → Table, and type the pairs into the x₁ and y₁ columns.',
        'In a new row type <code>y_1~mx_1+b</code>. Desmos fits the line and prints m and b.',
        'For a quadratic fit use <code>y_1~ax_1^2+bx_1+c</code>.',
        'The residuals and R² appear under the regression — useful for "which model fits best" questions.'
      ],
      ru: [
        'Нажмите + (слева сверху) → Table и введите пары в столбцы x₁ и y₁.',
        'В новой строке введите <code>y_1~mx_1+b</code>. Desmos подберёт прямую и выведет m и b.',
        'Для квадратичной модели: <code>y_1~ax_1^2+bx_1+c</code>.',
        'Под регрессией появятся остатки и R² — это пригодится в вопросах «какая модель подходит лучше».'
      ],
      kk: [
        '+ (сол жақ жоғарыда) → Table басып, жұптарды x₁ және y₁ бағандарына теріңіз.',
        'Жаңа жолға <code>y_1~mx_1+b</code> теріңіз. Desmos түзуді таңдап, m мен b-ны шығарады.',
        'Квадраттық модель үшін: <code>y_1~ax_1^2+bx_1+c</code>.',
        'Регрессияның астында қалдықтар мен R² көрінеді — «қай модель жақсы келеді» сұрақтарына керек.'
      ]
    },
    tryIt: ['y_1~mx_1+b', 'y_1~ax_1^2+bx_1+c']
  },
  {
    id: 'sat', video: null,
    lead: {
      en: 'Four moves that turn a Digital SAT Math question into a graph. Each one is worth practising until it is automatic.',
      ru: 'Четыре приёма, превращающих задачу Digital SAT Math в график. Каждый стоит отработать до автоматизма.',
      kk: 'Digital SAT Math сұрағын графикке айналдыратын төрт тәсіл. Әрқайсысын автоматқа дейін жаттықтырған жөн.'
    },
    steps: {
      en: [
        '<b>Answer choices as graphs.</b> Four candidate equations, four rows, one glance at which passes through the given point.',
        '<b>Unknown coefficient.</b> Replace it with a slider and drag until the condition in the question holds.',
        '<b>"How many solutions".</b> Graph both sides and count crossings; no algebra needed.',
        '<b>Systems with a parameter.</b> <code>y=kx+2</code> against <code>y=x^2</code> — drag k to find where the line stops touching the curve.',
        'Type the numbers from the question, not the numbers you simplified. Simplifying first is where the marks go.'
      ],
      ru: [
        '<b>Варианты ответа как графики.</b> Четыре уравнения — четыре строки, один взгляд на то, какое проходит через данную точку.',
        '<b>Неизвестный коэффициент.</b> Замените его ползунком и двигайте, пока не выполнится условие задачи.',
        '<b>«Сколько решений».</b> Постройте обе части и посчитайте пересечения; алгебра не нужна.',
        '<b>Системы с параметром.</b> <code>y=kx+2</code> против <code>y=x^2</code> — двигайте k и найдите, где прямая перестаёт касаться параболы.',
        'Вводите числа из условия, а не те, что вы уже упростили. Баллы теряются именно на упрощении в уме.'
      ],
      kk: [
        '<b>Жауап нұсқалары график ретінде.</b> Төрт теңдеу — төрт жол, қайсысы берілген нүктеден өтетінін бір қарап шығасыз.',
        '<b>Белгісіз коэффициент.</b> Оны жүгірткімен алмастырып, есеп шарты орындалғанша жылжытыңыз.',
        '<b>«Неше шешім».</b> Екі жағын да сызып, қиылысуларды санаңыз; алгебраның қажеті жоқ.',
        '<b>Параметрі бар жүйелер.</b> <code>y=kx+2</code> пен <code>y=x^2</code> — k-ны жылжытып, түзу параболаға тиюді қай жерде қоятынын табыңыз.',
        'Шарттағы сандарды теріңіз, өзіңіз ықшамдағанын емес. Балл дәл сол ойша ықшамдауда кетеді.'
      ]
    },
    tryIt: ['y=kx+2', 'y=x^2']
  },
  {
    id: 'shortcuts', video: null,
    lead: {
      en: 'Small things that add up over 44 questions.',
      ru: 'Мелочи, которые складываются на дистанции в 44 вопроса.',
      kk: '44 сұрақ бойында жинақталатын ұсақ нәрселер.'
    },
    steps: {
      en: [
        '<code>Ctrl</code>+<code>F</code> in the expression box gives a fraction; <code>Ctrl</code>+<code>/</code> does the same.',
        'Type <code>sqrt</code> for a root, <code>pi</code> for π, <code>theta</code> for θ.',
        'Subscripts: <code>x_1</code>. Useful for table columns and named constants.',
        'Hold Shift while scrolling to zoom one axis only — the fix for a graph that is all vertical line.',
        'The calculator does not carry over between modules. Anything you want to keep, write on the scratch paper.'
      ],
      ru: [
        '<code>Ctrl</code>+<code>F</code> в поле выражения даёт дробь; <code>Ctrl</code>+<code>/</code> делает то же самое.',
        '<code>sqrt</code> — корень, <code>pi</code> — π, <code>theta</code> — θ.',
        'Индексы: <code>x_1</code>. Нужны для столбцов таблицы и именованных констант.',
        'Прокрутка с зажатым Shift масштабирует только одну ось — лекарство от графика, который выглядит вертикальной линией.',
        'Калькулятор не переносится между модулями. Всё, что нужно сохранить, пишите на черновике.'
      ],
      kk: [
        'Өрнек өрісінде <code>Ctrl</code>+<code>F</code> бөлшек береді; <code>Ctrl</code>+<code>/</code> да солай.',
        '<code>sqrt</code> — түбір, <code>pi</code> — π, <code>theta</code> — θ.',
        'Индекстер: <code>x_1</code>. Кесте бағандары мен аталған тұрақтыларға керек.',
        'Shift басып тұрып айналдырсаңыз, бір ғана ось масштабталады — тік сызыққа ұқсап қалған графиктің емі.',
        'Калькулятор модульдер арасында сақталмайды. Сақтағыңыз келетіннің бәрін қаралама қағазға жазыңыз.'
      ]
    },
    tryIt: ['sqrt(x)', 'theta']
  }
];

/* Six timed tasks. withoutSec / withSec are JTS measurements on these exact
   tasks by a student who already knows both methods — the point of the pair is
   that two of the six are FASTER by hand, and a student who reaches for the
   calculator every time will lose those seconds on the real exam. */
JTS.data.desmosTasks = [
  { id: 'dt1', withoutSec: 95, withSec: 25,
    prompt: {
      en: 'Find every solution of x² − 5x + 3 = 2x − 4.',
      ru: 'Найдите все решения уравнения x² − 5x + 3 = 2x − 4.',
      kk: 'x² − 5x + 3 = 2x − 4 теңдеуінің барлық шешімін табыңыз.'
    },
    expr: ['y=x^2-5x+3', 'y=2x-4'],
    note: {
      en: 'Two rows, click both crossings. By hand this is a quadratic formula with an awkward discriminant.',
      ru: 'Две строки, кликнуть по обоим пересечениям. Вручную это формула корней с неудобным дискриминантом.',
      kk: 'Екі жол, екі қиылысты да басу. Қолмен — дискриминанты ыңғайсыз түбір формуласы.'
    } },
  { id: 'dt2', withoutSec: 120, withSec: 30,
    prompt: {
      en: 'For which value of k does y = kx + 2 touch y = x² at exactly one point?',
      ru: 'При каком k прямая y = kx + 2 касается y = x² ровно в одной точке?',
      kk: 'k-ның қандай мәнінде y = kx + 2 түзуі y = x² параболасына дәл бір нүктеде жанасады?'
    },
    expr: ['y=kx+2', 'y=x^2'],
    note: {
      en: 'Add a slider for k and drag until the two curves just touch. By hand: set the discriminant to zero.',
      ru: 'Добавьте ползунок k и двигайте, пока кривые не коснутся. Вручную: приравнять дискриминант к нулю.',
      kk: 'k үшін жүгірткі қосып, қисықтар жанасқанша жылжытыңыз. Қолмен: дискриминантты нөлге теңеу.'
    } },
  { id: 'dt3', withoutSec: 150, withSec: 40,
    prompt: {
      en: 'A line of best fit through (1,4), (2,7), (3,9), (4,12), (5,15): what is its slope?',
      ru: 'Прямая наилучшего приближения через (1,4), (2,7), (3,9), (4,12), (5,15): чему равен её наклон?',
      kk: '(1,4), (2,7), (3,9), (4,12), (5,15) нүктелері арқылы ең жақсы жанасу түзуі: оның бұрыштық коэффициенті неге тең?'
    },
    expr: ['y_1~mx_1+b'],
    note: {
      en: 'A table plus one regression row. There is no hand method that is both fast and honest here.',
      ru: 'Таблица плюс одна строка регрессии. Быстрого и при этом честного ручного метода здесь нет.',
      kk: 'Кесте және бір регрессия жолы. Мұнда әрі жылдам, әрі адал қолмен әдіс жоқ.'
    } },
  { id: 'dt4', withoutSec: 70, withSec: 30,
    prompt: {
      en: 'How many real solutions does |x − 3| = x² − 4 have?',
      ru: 'Сколько действительных решений у |x − 3| = x² − 4?',
      kk: '|x − 3| = x² − 4 теңдеуінің неше нақты шешімі бар?'
    },
    expr: ['y=|x-3|', 'y=x^2-4'],
    note: {
      en: 'Counting crossings answers the question without solving it.',
      ru: 'Подсчёт пересечений отвечает на вопрос, не решая уравнение.',
      kk: 'Қиылысуларды санау теңдеуді шешпей-ақ жауап береді.'
    } },
  { id: 'dt5', withoutSec: 20, withSec: 35,
    prompt: {
      en: 'If 3x + 12 = 5x − 8, what is x?',
      ru: 'Если 3x + 12 = 5x − 8, чему равен x?',
      kk: 'Егер 3x + 12 = 5x − 8 болса, x неге тең?'
    },
    expr: ['y=3x+12', 'y=5x-8'],
    note: {
      en: 'Faster by hand. Typing two rows to solve a one-step linear equation is a habit that costs time on the real exam.',
      ru: 'Быстрее вручную. Набирать две строки ради линейного уравнения в одно действие — привычка, которая на экзамене крадёт время.',
      kk: 'Қолмен жылдам. Бір қадамдық сызықтық теңдеу үшін екі жол теру — нағыз емтиханда уақыт ұрлайтын әдет.'
    } },
  { id: 'dt6', withoutSec: 25, withSec: 45,
    prompt: {
      en: 'A circle has radius 6. What is its area, in terms of π?',
      ru: 'Радиус окружности равен 6. Чему равна её площадь через π?',
      kk: 'Шеңбердің радиусы 6. Оның ауданы π арқылы неге тең?'
    },
    expr: ['pi*6^2'],
    note: {
      en: 'Also faster by hand, and the answer wanted is symbolic. The calculator would hand you 113.097, which is not what the question asked for.',
      ru: 'Тоже быстрее вручную, и ответ нужен символьный. Калькулятор выдаст 113,097 — а спрашивали не это.',
      kk: 'Бұл да қолмен жылдам, әрі жауап символдық түрде керек. Калькулятор 113,097 береді — ал сұрағаны ол емес.'
    } }
];
