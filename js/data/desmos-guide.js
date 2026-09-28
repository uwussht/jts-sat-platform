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
    id: 'solve',
    video: 'https://www.youtube.com/embed/TFmt1VwZte8',
    videoCredit: {
      name: 'Tutorlini Test Prep \u2014 Desmos Lesson #1',
      url: 'https://youtu.be/TFmt1VwZte8'
    },
    lead: {
      en: 'One recipe solves every equation on the test: put each side of it on its own row and read where the two graphs cross. It is faster than algebra, it shows how many solutions exist before you find any of them, and it works when there are no answer choices to test.',
      ru: 'Один приём решает любое уравнение на экзамене: каждую сторону — в свою строку и смотрите, где графики пересекаются. Это быстрее алгебры, показывает число решений ещё до того, как вы найдёте хоть одно, и работает там, где вариантов ответа нет.',
      kk: 'Емтихандағы кез келген теңдеуді бір тәсіл шешеді: әр жағын өз жолына жазып, графиктердің қай жерде қиылысатынын қараңыз. Бұл алгебрадан жылдам, бірде-бір шешім табылмай тұрып олардың санын көрсетеді және жауап нұсқалары жоқ жерде де жұмыс істейді.'
    },
    steps: {
      en: [
        '<b>Left side, then right side, each on its own row.</b> For <code>x\u00b2-5 = 3x-7</code> type <code>y=x^2-5</code> and <code>y=3x-7</code>. Copy the equation as it is printed — do not rearrange it first.',
        '<b>The answers are the x-values.</b> Click a crossing point and Desmos labels it; take the x and ignore the y. The y is only where the two sides happened to be equal, and it is never what the question asked for.',
        '<b>Read the question again before you write.</b> Two crossings means two solutions, and the question usually wants one of them \u2014 "the positive solution", "the greatest value of x".',
        '<b>It works when there are no answer choices.</b> On a student-produced response there is nothing to substitute and check, which is exactly where guessing used to start. The graph does not care.',
        'Nothing on screen? Zoom out once with the scroll wheel before believing there is no solution \u2014 the crossing is usually just outside the default window.',
        'A system of two linear equations is the same move: one row each, one intersection. An inequality can be typed directly \u2014 <code>y>2x+1</code> shades the region.'
      ],
      ru: [
        '<b>Левая часть, затем правая — каждая в своей строке.</b> Для <code>x\u00b2-5 = 3x-7</code> введите <code>y=x^2-5</code> и <code>y=3x-7</code>. Переносите уравнение как оно напечатано — не преобразуйте его сначала.',
        '<b>Ответы — это значения x.</b> Кликните точку пересечения, Desmos её подпишет; берите x и не смотрите на y. y — это лишь та высота, на которой стороны совпали, и в ответе его не спрашивают никогда.',
        '<b>Перечитайте вопрос перед тем, как записать.</b> Два пересечения — два решения, и спрашивают обычно одно из них: «положительное решение», «наибольшее значение x».',
        '<b>Работает и там, где вариантов ответа нет.</b> В заданиях с вводом ответа подставлять нечего — именно там раньше начиналось угадывание. Графику это безразлично.',
        'На экране пусто? Сначала отдалите колесом мыши, потом решайте, что решений нет, — пересечение обычно чуть за границей исходного окна.',
        'Система из двух линейных уравнений — тот же приём: по строке на каждое, одна точка пересечения. Неравенство вводится прямо: <code>y>2x+1</code> заштрихует область.'
      ],
      kk: [
        '<b>Сол жағы, сосын оң жағы — әрқайсысы өз жолында.</b> <code>x\u00b2-5 = 3x-7</code> үшін <code>y=x^2-5</code> және <code>y=3x-7</code> теріңіз. Теңдеуді басылған күйінде көшіріңіз — алдын ала түрлендірмеңіз.',
        '<b>Жауап — x мәндері.</b> Қиылысу нүктесін басыңыз, Desmos оны белгілейді; x-ті алыңыз, y-ке қарамаңыз. y — екі жақтың теңескен биіктігі ғана, оны ешқашан сұрамайды.',
        '<b>Жазар алдында сұрақты қайта оқыңыз.</b> Екі қиылысу — екі шешім, ал сұрақ әдетте біреуін сұрайды: «оң шешім», «x-тің ең үлкен мәні».',
        '<b>Жауап нұсқалары жоқ жерде де жұмыс істейді.</b> Жауабын өзі жазатын тапсырмада қоятын ештеңе жоқ — бұрын дәл сол жерден болжау басталатын. Графикке бәрібір.',
        'Экранда ештеңе жоқ па? Шешім жоқ деп шешпес бұрын тінтуір дөңгелегімен кішірейтіңіз — қиылысу көбіне бастапқы терезенің сыртында тұрады.',
        'Екі сызықтық теңдеуден тұратын жүйе — сол қимыл: әрқайсысына бір жол, бір қиылысу. Теңсіздікті тікелей теруге болады: <code>y>2x+1</code> аймақты бояйды.'
      ]
    },
    tryIt: ['y=x^2-5', 'y=3x-7', 'y=|4-x|', 'y=7', 'y>2x+1']
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
        'Type the numbers from the question, not the numbers you simplified. Simplifying first is where the marks go.',
        '<b>Bring a mouse.</b> Every one of these moves is drag to pan and scroll to zoom, and a trackpad turns a two-second look into a fiddle. A mouse is allowed in the room.'
      ],
      ru: [
        '<b>Варианты ответа как графики.</b> Четыре уравнения — четыре строки, один взгляд на то, какое проходит через данную точку.',
        '<b>Неизвестный коэффициент.</b> Замените его ползунком и двигайте, пока не выполнится условие задачи.',
        '<b>«Сколько решений».</b> Постройте обе части и посчитайте пересечения; алгебра не нужна.',
        '<b>Системы с параметром.</b> <code>y=kx+2</code> против <code>y=x^2</code> — двигайте k и найдите, где прямая перестаёт касаться параболы.',
        'Вводите числа из условия, а не те, что вы уже упростили. Баллы теряются именно на упрощении в уме.',
        '<b>Возьмите мышь.</b> Все эти приёмы — это перетаскивание и прокрутка, а на тачпаде двухсекундный взгляд превращается в возню. Мышь в аудиторию брать можно.'
      ],
      kk: [
        '<b>Жауап нұсқалары график ретінде.</b> Төрт теңдеу — төрт жол, қайсысы берілген нүктеден өтетінін бір қарап шығасыз.',
        '<b>Белгісіз коэффициент.</b> Оны жүгірткімен алмастырып, есеп шарты орындалғанша жылжытыңыз.',
        '<b>«Неше шешім».</b> Екі жағын да сызып, қиылысуларды санаңыз; алгебраның қажеті жоқ.',
        '<b>Параметрі бар жүйелер.</b> <code>y=kx+2</code> пен <code>y=x^2</code> — k-ны жылжытып, түзу параболаға тиюді қай жерде қоятынын табыңыз.',
        'Шарттағы сандарды теріңіз, өзіңіз ықшамдағанын емес. Балл дәл сол ойша ықшамдауда кетеді.',
        '<b>Тінтуір алып келіңіз.</b> Бұл тәсілдердің бәрі — сүйреу мен айналдыру, ал тачпадта екі секундтық қарау әуреге айналады. Аудиторияға тінтуір алуға болады.'
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
        '<b>Absolute value:</b> hold Shift and press the key above Enter for <code>|</code>, twice: <code>y=|4-x|</code>. Faster than opening the functions menu for it.',
        '<b>A decimal the answer choices do not have:</b> type it on its own row and press the fraction button beside that row. 2.25 becomes 9/4, which is the form the choices are usually in.',
        'Hold Shift while scrolling to zoom one axis only — the fix for a graph that is all vertical line.',
        'The calculator does not carry over between modules. Anything you want to keep, write on the scratch paper.'
      ],
      ru: [
        '<code>Ctrl</code>+<code>F</code> в поле выражения даёт дробь; <code>Ctrl</code>+<code>/</code> делает то же самое.',
        '<code>sqrt</code> — корень, <code>pi</code> — π, <code>theta</code> — θ.',
        'Индексы: <code>x_1</code>. Нужны для столбцов таблицы и именованных констант.',
        '<b>Модуль:</b> Shift и клавиша над Enter дают <code>|</code>, нужны две: <code>y=|4-x|</code>. Быстрее, чем открывать ради этого меню функций.',
        '<b>Десятичная дробь, которой нет в вариантах:</b> введите её в отдельной строке и нажмите кнопку дроби рядом с этой строкой. 2,25 станет 9/4 — в такой форме варианты обычно и даны.',
        'Прокрутка с зажатым Shift масштабирует только одну ось — лекарство от графика, который выглядит вертикальной линией.',
        'Калькулятор не переносится между модулями. Всё, что нужно сохранить, пишите на черновике.'
      ],
      kk: [
        'Өрнек өрісінде <code>Ctrl</code>+<code>F</code> бөлшек береді; <code>Ctrl</code>+<code>/</code> да солай.',
        '<code>sqrt</code> — түбір, <code>pi</code> — π, <code>theta</code> — θ.',
        'Индекстер: <code>x_1</code>. Кесте бағандары мен аталған тұрақтыларға керек.',
        '<b>Модуль:</b> Shift пен Enter үстіндегі перне <code>|</code> береді, екеуі керек: <code>y=|4-x|</code>. Сол үшін функциялар мәзірін ашқаннан жылдам.',
        '<b>Жауап нұсқаларында жоқ ондық бөлшек:</b> оны жеке жолға теріп, сол жолдың қасындағы бөлшек түймесін басыңыз. 2,25 деген 9/4 болады — нұсқалар әдетте осы түрде беріледі.',
        'Shift басып тұрып айналдырсаңыз, бір ғана ось масштабталады — тік сызыққа ұқсап қалған графиктің емі.',
        'Калькулятор модульдер арасында сақталмайды. Сақтағыңыз келетіннің бәрін қаралама қағазға жазыңыз.'
      ]
    },
    tryIt: ['sqrt(x)', 'theta', 'y=|4-x|']
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
  /* A grid-in on purpose: nothing to substitute, two roots, and an answer that
     has to be written as a fraction. That is the whole of the solve-by-
     intersection method in one task. */
  { id: 'dt7', withoutSec: 110, withSec: 35,
    prompt: {
      en: 'Write the positive solution of 8x\u00b2 \u2212 2x = 15 as a fraction. There are no answer choices.',
      ru: 'Запишите положительное решение 8x\u00b2 \u2212 2x = 15 в виде дроби. Вариантов ответа нет.',
      kk: '8x\u00b2 \u2212 2x = 15 теңдеуінің оң шешімін бөлшек түрінде жазыңыз. Жауап нұсқалары жоқ.'
    },
    expr: ['y=8x^2-2x', 'y=15'],
    note: {
      en: 'Two rows, two crossings; take the x-values, keep the positive one, and press the fraction button to turn 1.5 into 3/2. Nothing to guess and check.',
      ru: 'Две строки, два пересечения; берём значения x, оставляем положительное и кнопкой дроби превращаем 1,5 в 3/2. Подставлять и проверять нечего.',
      kk: 'Екі жол, екі қиылысу; x мәндерін алып, оңын қалдырып, бөлшек түймесімен 1,5-ті 3/2 етеміз. Қойып тексеретін ештеңе жоқ.'
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
