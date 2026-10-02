/* ==========================================================================
   Desmos guide content.

   The guide is the 23 numbered lessons of Tutorlini Test Prep's Desmos video
   series, in order. On screen each lesson is a live calculator, its video
   and its exercises (`exercises: [{ title, url }]`). Lessons 1–4 still carry
   the written steps and expressions they started with; the guide screen does
   not show them.

   Nothing here is copied from Desmos's documentation or from any test
   publisher; the expressions are ordinary mathematics.

   video: paste a URL to attach a JTS screencast to a section. Left null the
   section renders an empty slot rather than a broken player.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.desmosGuide = [
  {
    id: 'solve',
    /* Lesson 1 of the video series. The numbered sections come first and in
       order; JTS's own sections follow them. */
    lesson: 1,
    video: 'https://www.youtube.com/embed/TFmt1VwZte8',
    videoCredit: {
      name: 'Tutorlini Test Prep \u2014 Desmos Lesson #1',
      url: 'https://youtu.be/TFmt1VwZte8'
    },
    lead: {
      en: 'You can solve any equation on the test by drawing it. You do not have to know how to rearrange it, and you do not have to be good at algebra. Walk through the steps below once with the example, and you have the whole method.',
      ru: 'Любое уравнение на экзамене можно решить, нарисовав его. Не нужно уметь его преобразовывать и не нужно быть сильным в алгебре. Пройдите шаги ниже один раз на примере — и весь приём у вас в руках.',
      kk: 'Емтихандағы кез келген теңдеуді сызып шешуге болады. Оны түрлендіре білудің де, алгебрадан мықты болудың да қажеті жоқ. Төмендегі қадамдарды мысалмен бір рет өтіңіз — бүкіл тәсіл қолыңызда.'
    },
    steps: {
      en: [
        'Take the example <code>x\u00b2 \u2212 5 = 3x \u2212 7</code>. Everything before the <code>=</code> is the <b>left side</b>. Everything after it is the <b>right side</b>.',
        'In row 1 type <code>y=</code> and then the left side, exactly as it is printed: <code>y=x^2-5</code>. Do not tidy the equation up first \u2014 copy the numbers you were given.',
        'Press Enter. In row 2 type <code>y=</code> and the right side: <code>y=3x-7</code>.',
        'Two graphs appear. Look for the points where they <b>cross</b>. If you see nothing, scroll to zoom out \u2014 the crossing is usually just off the edge of the screen.',
        'Click a crossing point. Desmos writes its two numbers, like <code>(2, \u22121)</code>. <b>Your answer is the first number, 2.</b> The second one is only how high up the two graphs met, and no question ever asks for it.',
        'Count the crossings. Two crossings means the equation has two answers \u2014 so read the question again before you write one down. It usually asks for a particular one: "the positive solution", "the greatest value of x".',
        'That is the whole method, and it works even when the question gives you no answer choices to try. Two things it does for free: a system of two equations is the same move (one row each, one crossing), and an inequality can be typed straight in \u2014 <code>y>2x+1</code> shades the region that works.'
      ],
      ru: [
        'Возьмём пример <code>x\u00b2 \u2212 5 = 3x \u2212 7</code>. Всё, что до знака <code>=</code>, — это <b>левая часть</b>. Всё, что после, — <b>правая</b>.',
        'В строке 1 наберите <code>y=</code> и левую часть ровно так, как она напечатана: <code>y=x^2-5</code>. Не приводите уравнение к «удобному» виду — переносите те числа, которые вам дали.',
        'Нажмите Enter. В строке 2 наберите <code>y=</code> и правую часть: <code>y=3x-7</code>.',
        'Появятся два графика. Найдите точки, где они <b>пересекаются</b>. Если ничего не видно — прокрутите колесо, чтобы отдалить: пересечение обычно чуть за краем экрана.',
        'Кликните точку пересечения. Desmos напишет два числа, например <code>(2, \u22121)</code>. <b>Ваш ответ — первое число, 2.</b> Второе — лишь высота, на которой графики встретились, и его не спрашивают никогда.',
        'Посчитайте пересечения. Два пересечения — у уравнения два ответа, поэтому перечитайте вопрос, прежде чем записывать. Обычно просят конкретный: «положительное решение», «наибольшее значение x».',
        'Это весь приём, и он работает даже тогда, когда вариантов ответа не дали. Ещё две вещи он делает даром: система из двух уравнений — то же самое (по строке на каждое, одно пересечение), а неравенство вводится прямо: <code>y>2x+1</code> заштрихует подходящую область.'
      ],
      kk: [
        '<code>x\u00b2 \u2212 5 = 3x \u2212 7</code> мысалын алайық. <code>=</code> белгісіне дейінгінің бәрі — <b>сол жағы</b>. Одан кейінгінің бәрі — <b>оң жағы</b>.',
        '1-жолға <code>y=</code> деп, сосын сол жағын басылған күйінде теріңіз: <code>y=x^2-5</code>. Теңдеуді алдымен «ыңғайлы» түрге келтірмеңіз — берілген сандарды сол күйінде көшіріңіз.',
        'Enter басыңыз. 2-жолға <code>y=</code> деп, оң жағын теріңіз: <code>y=3x-7</code>.',
        'Екі график шығады. Олардың <b>қиылысатын</b> нүктелерін табыңыз. Ештеңе көрінбесе, дөңгелекті айналдырып кішірейтіңіз — қиылысу көбіне экранның шетінен тыс тұрады.',
        'Қиылысу нүктесін басыңыз. Desmos екі санды жазады, мысалы <code>(2, \u22121)</code>. <b>Жауабыңыз — бірінші сан, 2.</b> Екіншісі — графиктердің кездескен биіктігі ғана, оны ешқашан сұрамайды.',
        'Қиылысуларды санаңыз. Екі қиылысу — теңдеудің екі жауабы бар, сондықтан жазбас бұрын сұрақты қайта оқыңыз. Әдетте нақты біреуін сұрайды: «оң шешім», «x-тің ең үлкен мәні».',
        'Тәсіл осымен бітті, әрі ол жауап нұсқалары берілмеген жерде де жұмыс істейді. Ол тегін істейтін тағы екі нәрсе: екі теңдеуден тұратын жүйе — дәл сол қимыл (әрқайсысына бір жол, бір қиылысу), ал теңсіздікті тікелей теруге болады: <code>y>2x+1</code> келетін аймақты бояйды.'
      ]
    },
    tryIt: ['y=x^2-5', 'y=3x-7', 'y=|4-x|', 'y=7', 'y>2x+1']
  },
  {
    id: 'system',
    /* Lesson 2 of the video series. */
    lesson: 2,
    video: 'https://www.youtube.com/embed/oL9_EOn5x7w',
    videoCredit: {
      name: 'Tutorlini Test Prep — Desmos Lesson #2',
      url: 'https://youtu.be/oL9_EOn5x7w'
    },
    lead: {
      en: 'A system is two equations that have to be true at the same time, and the answer is the one point that works in both. The thing worth knowing is that you do not have to rearrange either of them first — that is the step most calculators make you do, and this one does not.',
      ru: 'Система — это два уравнения, которые должны выполняться одновременно, а ответ — та единственная точка, которая подходит обоим. Главное, что стоит знать: ни одно из них не нужно предварительно преобразовывать — этот шаг требуют почти все калькуляторы, а этот не требует.',
      kk: 'Жүйе — бір уақытта орындалуы тиіс екі теңдеу, ал жауап — екеуіне де келетін жалғыз нүкте. Білуге тұрарлық нәрсе: екеуінің де түрін алдын ала өзгертудің қажеті жоқ — бұл қадамды көптеген калькулятор талап етеді, бұл — етпейді.'
    },
    steps: {
      en: [
        '<b>You do not have to get y by itself.</b> Desmos draws anything written with x and y in it, exactly as the question printed it — <code>4x=20</code>, <code>x-y=1</code>, <code>3x+2y=12</code>. Rearranging first is where mistakes come from, so do not.',
        'Take the system <code>2x + y = 11</code> and <code>x − y = 1</code>. Type <code>2x+y=11</code> in row 1.',
        'Press Enter and type <code>x-y=1</code> in row 2. Two lines appear.',
        'If you cannot see them meet, scroll to zoom out and drag the paper around until you find the crossing.',
        'Click the crossing. Desmos labels it <code>(4, 3)</code>. That is the solution: <b>x = 4 and y = 3</b>.',
        '<b>Now read what was asked.</b> Here — unlike a single equation — both numbers are real answers. The question may want y (3), or x (4), or something built from them like x + y (7). Work it out from the point; do not guess which number to write.',
        '<b>It works when one of them is a curve.</b> Try <code>y=x^2-4x+7</code> with <code>y=2x-2</code>. Be careful here: the line only grazes the parabola. Zoom right in on the meeting place to see whether they touch at one point or cross at two — from far away those look the same.',
        'If the number Desmos gives is a decimal the answer choices do not have, type it on its own row and press the fraction button beside that row.'
      ],
      ru: [
        '<b>Не нужно выражать y.</b> Desmos рисует всё, где есть x и y, ровно в том виде, в каком напечатано в задаче: <code>4x=20</code>, <code>x-y=1</code>, <code>3x+2y=12</code>. Предварительные преобразования — источник ошибок, так что не делайте их.',
        'Возьмём систему <code>2x + y = 11</code> и <code>x − y = 1</code>. В строке 1 наберите <code>2x+y=11</code>.',
        'Нажмите Enter и в строке 2 наберите <code>x-y=1</code>. Появятся две прямые.',
        'Если не видно, где они встречаются, прокрутите колесо, чтобы отдалить, и потаскайте поле мышью.',
        'Кликните точку пересечения. Desmos подпишет её: <code>(4, 3)</code>. Это и есть решение: <b>x = 4 и y = 3</b>.',
        '<b>Теперь прочитайте, что спросили.</b> Здесь — в отличие от одного уравнения — оба числа настоящие ответы. Могут спросить y (3), или x (4), или что-то из них, например x + y (7). Посчитайте это по точке, а не угадывайте, какое число записать.',
        '<b>Работает и когда одно из уравнений — кривая.</b> Попробуйте <code>y=x^2-4x+7</code> вместе с <code>y=2x-2</code>. Здесь осторожно: прямая лишь касается параболы. Приблизьте место встречи вплотную и посмотрите, одна там точка или две, — издали это выглядит одинаково.',
        'Если Desmos дал десятичную дробь, которой нет в вариантах, введите её в отдельной строке и нажмите кнопку дроби рядом с ней.'
      ],
      kk: [
        '<b>y-ті жеке шығарудың қажеті жоқ.</b> Desmos құрамында x пен y бар кез келген өрнекті есепте басылған күйінде сызады: <code>4x=20</code>, <code>x-y=1</code>, <code>3x+2y=12</code>. Алдын ала түрлендіру — қатенің көзі, сондықтан олай істемеңіз.',
        '<code>2x + y = 11</code> және <code>x − y = 1</code> жүйесін алайық. 1-жолға <code>2x+y=11</code> теріңіз.',
        'Enter басып, 2-жолға <code>x-y=1</code> теріңіз. Екі түзу шығады.',
        'Қай жерде қиылысатыны көрінбесе, дөңгелекпен кішірейтіп, тінтуірмен сүйреңіз.',
        'Қиылысуды басыңыз. Desmos оны <code>(4, 3)</code> деп белгілейді. Бұл — шешім: <b>x = 4 және y = 3</b>.',
        '<b>Енді не сұрағанын оқыңыз.</b> Мұнда — жалғыз теңдеуден өзгеше — екі сан да нақты жауап. y (3), x (4) немесе олардан құралған x + y (7) сұралуы мүмкін. Оны нүктеден есептеңіз, қай санды жазуды болжамаңыз.',
        '<b>Біреуі қисық болғанда да жұмыс істейді.</b> <code>y=x^2-4x+7</code> пен <code>y=2x-2</code> көріңіз. Мұнда абай болыңыз: түзу параболаға тек жанасады. Кездескен жерді жақындатып, бір нүкте ме әлде екі нүкте ме екенін қараңыз — алыстан бұлар бірдей көрінеді.',
        'Desmos берген сан жауап нұсқаларында жоқ ондық бөлшек болса, оны жеке жолға теріп, қасындағы бөлшек түймесін басыңыз.'
      ]
    },
    tryIt: ['2x+y=11', 'x-y=1', 'y=x^2-4x+7', 'y=2x-2']
  },
  {
    id: 'intercepts',
    /* Lesson 3 of the video series. */
    lesson: 3,
    video: 'https://www.youtube.com/embed/nIIG-5lTmmI',
    videoCredit: {
      name: 'Tutorlini Test Prep \u2014 Desmos Lesson #3',
      url: 'https://youtu.be/nIIG-5lTmmI'
    },
    lead: {
      en: 'An intercept is just the place where a graph touches one of the two axes. You type the function in, you click the spot, and Desmos reads both numbers off for you. There is only one way to lose this question, and it is answering about the wrong axis.',
      ru: '\u041f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0441 \u043e\u0441\u044c\u044e \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043c\u0435\u0441\u0442\u043e, \u0433\u0434\u0435 \u0433\u0440\u0430\u0444\u0438\u043a \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0434\u0432\u0443\u0445 \u043e\u0441\u0435\u0439. \u0412\u044b \u0432\u0432\u043e\u0434\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043a\u043b\u0438\u043a\u0430\u0435\u0442\u0435 \u043f\u043e \u044d\u0442\u043e\u0439 \u0442\u043e\u0447\u043a\u0435 \u2014 \u0438 Desmos \u0441\u0430\u043c \u043f\u0438\u0448\u0435\u0442 \u043e\u0431\u0430 \u0447\u0438\u0441\u043b\u0430. \u041f\u043e\u0442\u0435\u0440\u044f\u0442\u044c \u0431\u0430\u043b\u043b \u0437\u0434\u0435\u0441\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0438\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u2014 \u043e\u0442\u0432\u0435\u0442\u0438\u0432 \u043f\u0440\u043e \u043d\u0435 \u0442\u0443 \u043e\u0441\u044c.',
      kk: '\u041e\u0441\u044c\u043f\u0435\u043d \u049b\u0438\u044b\u043b\u044b\u0441\u0443 \u2014 \u0431\u04b1\u043b \u0433\u0440\u0430\u0444\u0438\u043a\u0442\u0456\u04a3 \u0435\u043a\u0456 \u043e\u0441\u044c\u0442\u0456\u04a3 \u0431\u0456\u0440\u0435\u0443\u0456\u043d\u0435 \u0442\u0438\u0433\u0435\u0442\u0456\u043d \u0436\u0435\u0440\u0456 \u0493\u0430\u043d\u0430. \u0424\u0443\u043d\u043a\u0446\u0438\u044f\u043d\u044b \u0442\u0435\u0440\u0435\u0441\u0456\u0437, \u0441\u043e\u043b \u043d\u04af\u043a\u0442\u0435\u043d\u0456 \u0431\u0430\u0441\u0430\u0441\u044b\u0437 \u2014 Desmos \u0435\u043a\u0456 \u0441\u0430\u043d\u0434\u044b \u04e9\u0437\u0456 \u0436\u0430\u0437\u0430\u0434\u044b. \u041c\u04b1\u043d\u0434\u0430 \u04b1\u0442\u044b\u043b\u0443\u0434\u044b\u04a3 \u0436\u0430\u043b\u0493\u044b\u0437 \u0436\u043e\u043b\u044b \u0431\u0430\u0440 \u2014 \u0431\u0430\u0441\u049b\u0430 \u043e\u0441\u044c \u0442\u0443\u0440\u0430\u043b\u044b \u0436\u0430\u0443\u0430\u043f \u0431\u0435\u0440\u0443.'
    },
    steps: {
      en: [
        'Type the function exactly as the question prints it. <code>f(x)=</code> is fine \u2014 Desmos understands it, and you do not have to rewrite it as <code>y=</code>.',
        '<b>Now look at which intercept was asked for, and say it to yourself.</b> The <b>x-intercept</b> is where the graph crosses the horizontal axis. The <b>y-intercept</b> is where it crosses the vertical one. This one word is the whole question.',
        'If you cannot see the graph, scroll to zoom out. With numbers like 84 in the equation the crossing sits far off the first screen \u2014 it is there, you are just looking at the wrong patch of paper.',
        'Click the point where the curve meets the axis you were asked about, then click it again. Desmos writes the pair, for example <code>(12, 0)</code>.',
        '<b>Write the whole pair down before you look at the choices.</b> An intercept always has a zero in it: an x-intercept reads <code>(12, 0)</code>, a y-intercept reads <code>(0, 14)</code>. If the pair you clicked has no zero in it, you clicked somewhere else on the curve \u2014 click again, closer to the axis.',
        'Worked example \u2014 <code>f(x) = 7x \u2212 84</code>, x-intercept. Two rows are not needed; one is enough. The curve crosses the horizontal axis at <code>(12, 0)</code>, so the answer is that point.',
        'Worked example \u2014 <code>f(x) = \u22128(2^x) + 22</code>, y-intercept. Type <code>^</code> for the exponent and press the right arrow key to come back down out of it. The graph crosses the vertical axis at <code>(0, 14)</code>.',
        'Worked example \u2014 <code>g(x) = 11(1/12)^x</code>, y-intercept: <code>(0, 11)</code>. Typing <code>/</code> makes a real fraction and the right arrow key gets you back out of it, the same as with the exponent. Copy the numbers as printed; do not simplify anything first.'
      ],
      ru: [
        '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0440\u043e\u0432\u043d\u043e \u0442\u0430\u043a, \u043a\u0430\u043a \u043e\u043d\u0430 \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u043d\u0430 \u0432 \u0437\u0430\u0434\u0430\u043d\u0438\u0438. <code>f(x)=</code> \u043c\u043e\u0436\u043d\u043e \u0442\u0430\u043a \u0438 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u2014 Desmos \u044d\u0442\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442, \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0432 <code>y=</code> \u043d\u0435 \u043d\u0430\u0434\u043e.',
        '<b>\u0422\u0435\u043f\u0435\u0440\u044c \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435, \u043a\u0430\u043a\u043e\u0435 \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0441\u043f\u0440\u043e\u0441\u0438\u043b\u0438, \u0438 \u043f\u0440\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u0442\u0435 \u044d\u0442\u043e \u043f\u0440\u043e \u0441\u0435\u0431\u044f.</b> \u041f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0441 \u043e\u0441\u044c\u044e <b>x</b> \u2014 \u0442\u0430\u043c, \u0433\u0434\u0435 \u0433\u0440\u0430\u0444\u0438\u043a \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u0435\u0442 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u043e\u0441\u044c. \u0421 \u043e\u0441\u044c\u044e <b>y</b> \u2014 \u0442\u0430\u043c, \u0433\u0434\u0435 \u043e\u043d \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u0435\u0442 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0443\u044e. \u042d\u0442\u043e \u043e\u0434\u043d\u043e \u0441\u043b\u043e\u0432\u043e \u0438 \u0435\u0441\u0442\u044c \u0432\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0430.',
        '\u0415\u0441\u043b\u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0430 \u043d\u0435 \u0432\u0438\u0434\u043d\u043e \u2014 \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u0438\u0442\u0435 \u043a\u043e\u043b\u0435\u0441\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0434\u0430\u043b\u0438\u0442\u044c. \u041a\u043e\u0433\u0434\u0430 \u0432 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0438 \u0435\u0441\u0442\u044c \u0447\u0438\u0441\u043b\u0430 \u0432\u0440\u043e\u0434\u0435 84, \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043b\u0435\u043a\u043e \u0437\u0430 \u043f\u0435\u0440\u0432\u044b\u043c \u044d\u043a\u0440\u0430\u043d\u043e\u043c: \u043e\u043d\u043e \u0442\u0430\u043c \u0435\u0441\u0442\u044c, \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u044b \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0435 \u043d\u0430 \u0442\u043e\u0442 \u043a\u0443\u0441\u043e\u043a \u043f\u043b\u043e\u0441\u043a\u043e\u0441\u0442\u0438.',
        '\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0442\u043e\u0447\u043a\u0443, \u0433\u0434\u0435 \u043a\u0440\u0438\u0432\u0430\u044f \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442 \u043d\u0443\u0436\u043d\u0443\u044e \u043e\u0441\u044c, \u0430 \u043f\u043e\u0442\u043e\u043c \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437. Desmos \u043d\u0430\u043f\u0438\u0448\u0435\u0442 \u043f\u0430\u0440\u0443 \u0447\u0438\u0441\u0435\u043b, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 <code>(12, 0)</code>.',
        '<b>\u0417\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0441\u044e \u043f\u0430\u0440\u0443 \u0446\u0435\u043b\u0438\u043a\u043e\u043c, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b.</b> \u0412 \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0435\u0441\u0442\u044c \u043d\u043e\u043b\u044c: \u0441 \u043e\u0441\u044c\u044e x \u044d\u0442\u043e <code>(12, 0)</code>, \u0441 \u043e\u0441\u044c\u044e y \u2014 <code>(0, 14)</code>. \u0415\u0441\u043b\u0438 \u0432 \u0432\u0430\u0448\u0435\u0439 \u043f\u0430\u0440\u0435 \u043d\u0443\u043b\u044f \u043d\u0435\u0442, \u0432\u044b \u043a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u0433\u0434\u0435-\u0442\u043e \u043d\u0430 \u043a\u0440\u0438\u0432\u043e\u0439 \u2014 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437, \u0431\u043b\u0438\u0436\u0435 \u043a \u043e\u0441\u0438.',
        '\u0420\u0430\u0437\u0431\u043e\u0440 \u2014 <code>f(x) = 7x \u2212 84</code>, \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0441 \u043e\u0441\u044c\u044e x. \u0414\u0432\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0434\u0435\u0441\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u044b, \u0445\u0432\u0430\u0442\u0438\u0442 \u043e\u0434\u043d\u043e\u0439. \u041a\u0440\u0438\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u0435\u0442 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0443\u044e \u043e\u0441\u044c \u0432 <code>(12, 0)</code> \u2014 \u044d\u0442\u043e \u0438 \u0435\u0441\u0442\u044c \u043e\u0442\u0432\u0435\u0442.',
        '\u0420\u0430\u0437\u0431\u043e\u0440 \u2014 <code>f(x) = \u22128(2^x) + 22</code>, \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0441 \u043e\u0441\u044c\u044e y. \u0421\u0442\u0435\u043f\u0435\u043d\u044c \u043d\u0430\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 <code>^</code>, \u0430 \u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u043d\u0435\u0451 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u0432\u043d\u0438\u0437 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043f\u0440\u0430\u0432\u043e. \u0413\u0440\u0430\u0444\u0438\u043a \u043f\u0435\u0440\u0435\u0441\u0435\u043a\u0430\u0435\u0442 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0443\u044e \u043e\u0441\u044c \u0432 <code>(0, 14)</code>.',
        '\u0420\u0430\u0437\u0431\u043e\u0440 \u2014 <code>g(x) = 11(1/12)^x</code>, \u043f\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043d\u0438\u0435 \u0441 \u043e\u0441\u044c\u044e y: <code>(0, 11)</code>. \u0417\u043d\u0430\u043a <code>/</code> \u0434\u0435\u043b\u0430\u0435\u0442 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0443\u044e \u0434\u0440\u043e\u0431\u044c, \u0430 \u0441\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043f\u0440\u0430\u0432\u043e \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0438\u0437 \u043d\u0435\u0451, \u043a\u0430\u043a \u0438 \u0438\u0437 \u0441\u0442\u0435\u043f\u0435\u043d\u0438. \u041f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u0430 \u043a\u0430\u043a \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u043d\u043e \u2014 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0443\u043f\u0440\u043e\u0449\u0430\u0439\u0442\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435.'
      ],
      kk: [
        '\u0424\u0443\u043d\u043a\u0446\u0438\u044f\u043d\u044b \u0435\u0441\u0435\u043f\u0442\u0435 \u0431\u0430\u0441\u044b\u043b\u0493\u0430\u043d \u043a\u04af\u0439\u0456\u043d\u0434\u0435 \u0442\u0435\u0440\u0456\u04a3\u0456\u0437. <code>f(x)=</code> \u0442\u04af\u0440\u0456\u043d \u0441\u043e\u043b \u043a\u04af\u0439\u0456\u043d\u0434\u0435 \u049b\u0430\u043b\u0434\u044b\u0440\u0443\u0493\u0430 \u0431\u043e\u043b\u0430\u0434\u044b \u2014 Desmos \u043e\u043d\u044b \u0442\u04af\u0441\u0456\u043d\u0435\u0434\u0456, <code>y=</code> \u0434\u0435\u043f \u049b\u0430\u0439\u0442\u0430 \u0436\u0430\u0437\u0443\u0434\u044b\u04a3 \u049b\u0430\u0436\u0435\u0442\u0456 \u0436\u043e\u049b.',
        '<b>\u0415\u043d\u0434\u0456 \u049b\u0430\u0439 \u049b\u0438\u044b\u043b\u044b\u0441\u0443 \u0441\u04b1\u0440\u0430\u043b\u0493\u0430\u043d\u044b\u043d \u049b\u0430\u0440\u0430\u043f, \u043e\u043d\u044b \u0456\u0448\u0456\u04a3\u0456\u0437\u0434\u0435\u043d \u0430\u0439\u0442\u044b\u04a3\u044b\u0437.</b> <b>x</b> \u043e\u0441\u0456\u043c\u0435\u043d \u049b\u0438\u044b\u043b\u044b\u0441\u0443 \u2014 \u0433\u0440\u0430\u0444\u0438\u043a \u043a\u04e9\u043b\u0434\u0435\u043d\u0435\u04a3 \u043e\u0441\u044c\u0442\u0456 \u043a\u0435\u0441\u0456\u043f \u04e9\u0442\u043a\u0435\u043d \u0436\u0435\u0440. <b>y</b> \u043e\u0441\u0456\u043c\u0435\u043d \u2014 \u0442\u0456\u043a \u043e\u0441\u044c\u0442\u0456 \u043a\u0435\u0441\u0456\u043f \u04e9\u0442\u043a\u0435\u043d \u0436\u0435\u0440. \u041e\u0441\u044b \u0431\u0456\u0440 \u0441\u04e9\u0437 \u2014 \u0431\u04af\u043a\u0456\u043b \u0435\u0441\u0435\u043f\u0442\u0456\u04a3 \u04e9\u0437\u0456.',
        '\u0413\u0440\u0430\u0444\u0438\u043a \u043a\u04e9\u0440\u0456\u043d\u0431\u0435\u0441\u0435, \u0434\u04e9\u04a3\u0433\u0435\u043b\u0435\u043a\u043f\u0435\u043d \u043a\u0456\u0448\u0456\u0440\u0435\u0439\u0442\u0456\u04a3\u0456\u0437. \u0422\u0435\u04a3\u0434\u0435\u0443\u0434\u0435 84 \u0441\u0438\u044f\u049b\u0442\u044b \u0441\u0430\u043d\u0434\u0430\u0440 \u0431\u043e\u043b\u0441\u0430, \u049b\u0438\u044b\u043b\u044b\u0441\u0443 \u0430\u043b\u0493\u0430\u0448\u049b\u044b \u044d\u043a\u0440\u0430\u043d\u043d\u0430\u043d \u0430\u043b\u044b\u0441 \u0436\u0430\u0442\u0430\u0434\u044b: \u043e\u043b \u0431\u0430\u0440, \u0441\u0456\u0437 \u0436\u0430\u0437\u044b\u049b\u0442\u044b\u049b\u0442\u044b\u04a3 \u0431\u0430\u0441\u049b\u0430 \u0436\u0435\u0440\u0456\u043d\u0435 \u049b\u0430\u0440\u0430\u043f \u0442\u04b1\u0440\u0441\u044b\u0437.',
        '\u049a\u0438\u0441\u044b\u049b \u043a\u0435\u0440\u0435\u043a\u0442\u0456 \u043e\u0441\u044c\u043a\u0435 \u0442\u0438\u0433\u0435\u0442\u0456\u043d \u043d\u04af\u043a\u0442\u0435\u043d\u0456 \u0431\u0430\u0441\u044b\u04a3\u044b\u0437, \u0441\u043e\u0441\u044b\u043d \u0442\u0430\u0493\u044b \u0431\u0456\u0440 \u0440\u0435\u0442 \u0431\u0430\u0441\u044b\u04a3\u044b\u0437. Desmos \u0435\u043a\u0456 \u0441\u0430\u043d\u0434\u044b \u0436\u0430\u0437\u0430\u0434\u044b, \u043c\u044b\u0441\u0430\u043b\u044b <code>(12, 0)</code>.',
        '<b>\u0416\u0430\u0443\u0430\u043f \u043d\u04b1\u0441\u049b\u0430\u043b\u0430\u0440\u044b\u043d\u0430 \u049b\u0430\u0440\u0430\u0493\u0430\u043d\u0448\u0430 \u0436\u04b1\u043f\u0442\u044b \u0442\u043e\u043b\u044b\u049b \u0436\u0430\u0437\u044b\u043f \u0430\u043b\u044b\u04a3\u044b\u0437.</b> \u049a\u0438\u044b\u043b\u044b\u0441\u0443\u0434\u0430 \u04d9\u0440\u049b\u0430\u0448\u0430\u043d \u043d\u04e9\u043b \u0431\u043e\u043b\u0430\u0434\u044b: x \u043e\u0441\u0456\u043c\u0435\u043d \u2014 <code>(12, 0)</code>, y \u043e\u0441\u0456\u043c\u0435\u043d \u2014 <code>(0, 14)</code>. \u0416\u04b1\u0431\u044b\u04a3\u044b\u0437\u0434\u0430 \u043d\u04e9\u043b \u0431\u043e\u043b\u043c\u0430\u0441\u0430, \u0441\u0456\u0437 \u049b\u0438\u0441\u044b\u049b\u0442\u044b\u04a3 \u0431\u0430\u0441\u049b\u0430 \u0436\u0435\u0440\u0456\u043d \u0431\u0430\u0441\u049b\u0430\u043d\u0441\u044b\u0437 \u2014 \u043e\u0441\u044c\u043a\u0435 \u0436\u0430\u049b\u044b\u043d\u044b\u0440\u0430\u049b \u0431\u0430\u0441\u044b\u04a3\u044b\u0437.',
        '\u0422\u0430\u043b\u0434\u0430\u0443 \u2014 <code>f(x) = 7x \u2212 84</code>, x \u043e\u0441\u0456\u043c\u0435\u043d \u049b\u0438\u044b\u043b\u044b\u0441\u0443. \u041c\u04b1\u043d\u0434\u0430 \u0435\u043a\u0456 \u0436\u043e\u043b\u0434\u044b\u04a3 \u049b\u0430\u0436\u0435\u0442\u0456 \u0436\u043e\u049b, \u0431\u0456\u0440\u0435\u0443\u0456 \u0436\u0435\u0442\u0435\u0434\u0456. \u049a\u0438\u0441\u044b\u049b \u043a\u04e9\u043b\u0434\u0435\u043d\u0435\u04a3 \u043e\u0441\u044c\u0442\u0456 <code>(12, 0)</code> \u043d\u04af\u043a\u0442\u0435\u0441\u0456\u043d\u0434\u0435 \u043a\u0435\u0441\u0456\u043f \u04e9\u0442\u0435\u0434\u0456 \u2014 \u0436\u0430\u0443\u0430\u043f \u0441\u043e\u043b.',
        '\u0422\u0430\u043b\u0434\u0430\u0443 \u2014 <code>f(x) = \u22128(2^x) + 22</code>, y \u043e\u0441\u0456\u043c\u0435\u043d \u049b\u0438\u044b\u043b\u044b\u0441\u0443. \u0414\u04d9\u0440\u0435\u0436\u0435 <code>^</code> \u0430\u0440\u049b\u044b\u043b\u044b \u0442\u0435\u0440\u0456\u043b\u0435\u0434\u0456, \u043e\u0434\u0430\u043d \u049b\u0430\u0439\u0442\u0430 \u0442\u04e9\u043c\u0435\u043d \u0448\u044b\u0493\u0443 \u04af\u0448\u0456\u043d \u043e\u04a3 \u0436\u0430\u049b\u049b\u0430 \u043a\u04e9\u0440\u0441\u0435\u0442\u043a\u0456\u0448 \u043f\u0435\u0440\u043d\u0435\u0441\u0456\u043d \u0431\u0430\u0441\u044b\u04a3\u044b\u0437. \u0413\u0440\u0430\u0444\u0438\u043a \u0442\u0456\u043a \u043e\u0441\u044c\u0442\u0456 <code>(0, 14)</code> \u043d\u04af\u043a\u0442\u0435\u0441\u0456\u043d\u0434\u0435 \u043a\u0435\u0441\u0456\u043f \u04e9\u0442\u0435\u0434\u0456.',
        '\u0422\u0430\u043b\u0434\u0430\u0443 \u2014 <code>g(x) = 11(1/12)^x</code>, y \u043e\u0441\u0456\u043c\u0435\u043d \u049b\u0438\u044b\u043b\u044b\u0441\u0443: <code>(0, 11)</code>. <code>/</code> \u0442\u0430\u04a3\u0431\u0430\u0441\u044b \u043d\u0430\u0493\u044b\u0437 \u0431\u04e9\u043b\u0448\u0435\u043a \u0436\u0430\u0441\u0430\u0439\u0434\u044b, \u043e\u04a3 \u0436\u0430\u049b\u049b\u0430 \u043a\u04e9\u0440\u0441\u0435\u0442\u043a\u0456\u0448 \u043f\u0435\u0440\u043d\u0435 \u043e\u0434\u0430\u043d \u0434\u0430 \u0434\u04d9\u0440\u0435\u0436\u0435\u0434\u0435\u0433\u0456\u0434\u0435\u0439 \u0448\u044b\u0493\u0430\u0440\u0430\u0434\u044b. \u0421\u0430\u043d\u0434\u0430\u0440\u0434\u044b \u0431\u0430\u0441\u044b\u043b\u0493\u0430\u043d \u043a\u04af\u0439\u0456\u043d\u0434\u0435 \u043a\u04e9\u0448\u0456\u0440\u0456\u04a3\u0456\u0437 \u2014 \u0435\u0448\u0442\u0435\u04a3\u0435\u043d\u0456 \u0430\u043b\u0434\u044b\u043d \u0430\u043b\u0430 \u0436\u0435\u04a3\u0456\u043b\u0434\u0435\u0442\u043f\u0435\u04a3\u0456\u0437.'
      ]
    },
    tryIt: ['f(x)=7x-84', 'f(x)=-8(2^x)+22', 'g(x)=11(1/12)^x']
  },
  {
    id: 'minmax',
    /* Lesson 4 of the video series. */
    lesson: 4,
    video: 'https://www.youtube.com/embed/-2PXxoc9_Cw',
    videoCredit: {
      name: 'Tutorlini Test Prep \u2014 Desmos Lesson #4',
      url: 'https://youtu.be/-2PXxoc9_Cw'
    },
    lead: {
      en: 'When a question asks for the smallest or the largest value a curve reaches, it is asking for the vertex \u2014 the point where the curve turns around. You do not need the formula for it. You type the function in and you click the turn.',
      ru: '\u041a\u043e\u0433\u0434\u0430 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0435 \u0438\u043b\u0438 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0440\u0438\u0432\u043e\u0439, \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u0432\u0435\u0440\u0448\u0438\u043d\u0443 \u2014 \u0442\u043e\u0447\u043a\u0443, \u0433\u0434\u0435 \u043a\u0440\u0438\u0432\u0430\u044f \u043f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442. \u0424\u043e\u0440\u043c\u0443\u043b\u0430 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u043d\u0443\u0436\u043d\u0430: \u0432\u044b \u0432\u0432\u043e\u0434\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0438 \u043a\u043b\u0438\u043a\u0430\u0435\u0442\u0435 \u043f\u043e \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u0443.',
      kk: '\u0421\u04b1\u0440\u0430\u049b \u049b\u0438\u0441\u044b\u049b\u0442\u044b\u04a3 \u0435\u04a3 \u043a\u0456\u0448\u0456 \u043d\u0435\u043c\u0435\u0441\u0435 \u0435\u04a3 \u04af\u043b\u043a\u0435\u043d \u043c\u04d9\u043d\u0456\u043d \u0441\u04b1\u0440\u0430\u0441\u0430, \u043e\u043b \u0442\u04e9\u0431\u0435\u043d\u0456 \u2014 \u049b\u0438\u0441\u044b\u049b \u0431\u04b1\u0440\u044b\u043b\u0430\u0442\u044b\u043d \u043d\u04af\u043a\u0442\u0435\u043d\u0456 \u2014 \u0441\u04b1\u0440\u0430\u043f \u0442\u04b1\u0440. \u0411\u04b1\u0493\u0430\u043d \u0444\u043e\u0440\u043c\u0443\u043b\u0430 \u043a\u0435\u0440\u0435\u043a \u0435\u043c\u0435\u0441: \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043d\u044b \u0442\u0435\u0440\u0456\u043f, \u0431\u04b1\u0440\u044b\u043b\u044b\u0441\u0442\u044b \u0431\u0430\u0441\u0430\u0441\u044b\u0437.'
    },
    steps: {
      en: [
        'Type the function exactly as printed, for example <code>y=x^2-14x+22</code>. One row is all you need \u2014 there is no second equation in this kind of question.',
        'Zoom out with the scroll wheel until you can see the turn. With numbers like 14 and 22 the vertex sits well below the first screen, and it is the only part of the picture you actually need.',
        'Click the turning point, then click it again. Desmos prints the pair, here <code>(7, \u221227)</code>. That point is the vertex, and everything the question can ask for is one of its two numbers.',
        '<b>Now the part people get wrong.</b> Read the wording. \u201cFor what <b>value of x</b> does it reach its minimum\u201d wants the first number, 7. \u201cWhat is the <b>minimum of f(x)</b>\u201d, with no x mentioned, wants the second, \u221227. The number you did not pick is almost always sitting there as an answer choice.',
        'Worked example \u2014 <code>f(x) = 4x\u00b2 \u2212 50x + 126</code>, vertex <code>(6.25, \u221230.25)</code>. The question asks for what value of x, so the answer is 6.25. Notice this one has no answer choices to check yourself against: the vertex is not a whole number, and by hand it is a page of work.',
        '<b>A maximum is the same click.</b> A parabola with a minus in front, like <code>y=-2x^2+6x+3</code>, turns at the top instead of the bottom: vertex <code>(1.5, 7.5)</code>, so the maximum is 7.5 and it is reached at x = 1.5. Nothing about the method changes.',
        '<b>A shifted function stays one click too.</b> Type <code>f(x)=4x^2+64x+262</code> in row 1 and <code>g(x)=f(x)+5</code> in row 2 \u2014 Desmos draws g without you working out what it is. Click the coloured dot beside row 1 to hide f so only g is on the paper, then click g\u2019s vertex: <code>(\u221213, 6)</code>.',
        'One habit to keep: write the pair down first, then answer the question from it. Reading straight from the screen to the answer sheet is where the x and the y get swapped.'
      ],
      ru: [
        '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0440\u043e\u0432\u043d\u043e \u0442\u0430\u043a, \u043a\u0430\u043a \u043d\u0430\u043f\u0435\u0447\u0430\u0442\u0430\u043d\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 <code>y=x^2-14x+22</code>. \u0425\u0432\u0430\u0442\u0438\u0442 \u043e\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u2014 \u0432\u0442\u043e\u0440\u043e\u0433\u043e \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0432 \u0442\u0430\u043a\u0438\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445 \u043d\u0435\u0442.',
        '\u041e\u0442\u0434\u0430\u043b\u0438\u0442\u0435 \u043a\u043e\u043b\u0435\u0441\u043e\u043c, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043f\u043e\u0432\u043e\u0440\u043e\u0442. \u041f\u0440\u0438 \u0447\u0438\u0441\u043b\u0430\u0445 \u0432\u0440\u043e\u0434\u0435 14 \u0438 22 \u0432\u0435\u0440\u0448\u0438\u043d\u0430 \u043b\u0435\u0436\u0438\u0442 \u0434\u0430\u043b\u0435\u043a\u043e \u043d\u0438\u0436\u0435 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430, \u0430 \u043a\u0440\u043e\u043c\u0435 \u043d\u0435\u0451 \u0432\u0430\u043c \u043d\u0438\u0447\u0435\u0433\u043e \u0438 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e.',
        '\u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0442\u043e\u0447\u043a\u0443 \u043f\u043e\u0432\u043e\u0440\u043e\u0442\u0430, \u043f\u043e\u0442\u043e\u043c \u0435\u0449\u0451 \u0440\u0430\u0437. Desmos \u043d\u0430\u043f\u0438\u0448\u0435\u0442 \u043f\u0430\u0440\u0443, \u0437\u0434\u0435\u0441\u044c <code>(7, \u221227)</code>. \u042d\u0442\u043e \u0432\u0435\u0440\u0448\u0438\u043d\u0430, \u0438 \u0432\u0441\u0451, \u0447\u0442\u043e \u043c\u043e\u0433\u0443\u0442 \u0441\u043f\u0440\u043e\u0441\u0438\u0442\u044c, \u2014 \u043e\u0434\u043d\u043e \u0438\u0437 \u0435\u0451 \u0434\u0432\u0443\u0445 \u0447\u0438\u0441\u0435\u043b.',
        '<b>\u0410 \u0442\u0435\u043f\u0435\u0440\u044c \u0442\u043e, \u043d\u0430 \u0447\u0451\u043c \u0432\u0441\u0435 \u043e\u0448\u0438\u0431\u0430\u044e\u0442\u0441\u044f.</b> \u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0443. \u00ab\u041f\u0440\u0438 \u043a\u0430\u043a\u043e\u043c <b>\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0438 x</b> \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u00bb \u2014 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, 7. \u00ab\u0427\u0435\u043c\u0443 \u0440\u0430\u0432\u0435\u043d <b>\u043c\u0438\u043d\u0438\u043c\u0443\u043c f(x)</b>\u00bb, \u0433\u0434\u0435 \u043f\u0440\u043e x \u043d\u0435 \u0441\u043a\u0430\u0437\u0430\u043d\u043e, \u2014 \u0432\u0442\u043e\u0440\u043e\u0435, \u221227. \u0422\u043e \u0447\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438, \u043f\u043e\u0447\u0442\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u0442\u043e\u0438\u0442 \u0440\u044f\u0434\u043e\u043c \u0432 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u0445.',
        '\u0420\u0430\u0437\u0431\u043e\u0440 \u2014 <code>f(x) = 4x\u00b2 \u2212 50x + 126</code>, \u0432\u0435\u0440\u0448\u0438\u043d\u0430 <code>(6.25, \u221230.25)</code>. \u0421\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u044e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 x, \u0437\u043d\u0430\u0447\u0438\u0442 \u043e\u0442\u0432\u0435\u0442 6.25. \u0417\u0430\u043c\u0435\u0442\u044c\u0442\u0435: \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0437\u0434\u0435\u0441\u044c \u043d\u0435\u0442, \u0432\u0435\u0440\u0448\u0438\u043d\u0430 \u043d\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e, \u0430 \u0440\u0443\u043a\u0430\u043c\u0438 \u044d\u0442\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0432\u044b\u043a\u043b\u0430\u0434\u043e\u043a.',
        '<b>\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u2014 \u0442\u043e\u0442 \u0436\u0435 \u043a\u043b\u0438\u043a.</b> \u041f\u0430\u0440\u0430\u0431\u043e\u043b\u0430 \u0441 \u043c\u0438\u043d\u0443\u0441\u043e\u043c \u0432\u043f\u0435\u0440\u0435\u0434\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 <code>y=-2x^2+6x+3</code>, \u043f\u043e\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u043d\u0430\u0432\u0435\u0440\u0445\u0443, \u0430 \u043d\u0435 \u0432\u043d\u0438\u0437\u0443: \u0432\u0435\u0440\u0448\u0438\u043d\u0430 <code>(1.5, 7.5)</code>, \u0437\u043d\u0430\u0447\u0438\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0440\u0430\u0432\u0435\u043d 7.5 \u0438 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 x = 1.5. \u0412 \u0441\u0430\u043c\u043e\u043c \u043f\u0440\u0438\u0451\u043c\u0435 \u043d\u0435 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0438\u0447\u0435\u0433\u043e.',
        '<b>\u0421\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u2014 \u0442\u043e\u0436\u0435 \u043e\u0434\u0438\u043d \u043a\u043b\u0438\u043a.</b> \u0412 \u0441\u0442\u0440\u043e\u043a\u0435 1 \u043d\u0430\u0431\u0435\u0440\u0438\u0442\u0435 <code>f(x)=4x^2+64x+262</code>, \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 2 \u2014 <code>g(x)=f(x)+5</code>: Desmos \u043d\u0430\u0440\u0438\u0441\u0443\u0435\u0442 g, \u0430 \u0432\u0430\u043c \u043d\u0435 \u043f\u0440\u0438\u0434\u0451\u0442\u0441\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c, \u0447\u0442\u043e \u044d\u0442\u043e \u0437\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f. \u041a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0446\u0432\u0435\u0442\u043d\u043e\u0439 \u043a\u0440\u0443\u0436\u043e\u043a \u0443 \u0441\u0442\u0440\u043e\u043a\u0438 1, \u0447\u0442\u043e\u0431\u044b \u0441\u043f\u0440\u044f\u0442\u0430\u0442\u044c f, \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0443 g: <code>(\u221213, 6)</code>.',
        '\u041f\u0440\u0438\u0432\u044b\u0447\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0441\u0442\u043e\u0438\u0442 \u0437\u0430\u0432\u0435\u0441\u0442\u0438: \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u043f\u0438\u0448\u0438\u0442\u0435 \u043f\u0430\u0440\u0443, \u043f\u043e\u0442\u043e\u043c \u043f\u043e \u043d\u0435\u0439 \u043e\u0442\u0432\u0435\u0447\u0430\u0439\u0442\u0435. \u0418\u043c\u0435\u043d\u043d\u043e \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u043f\u0440\u044f\u043c\u043e \u0441 \u044d\u043a\u0440\u0430\u043d\u0430 x \u0438 y \u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043c\u0435\u0441\u0442\u0430\u043c\u0438.'
      ],
      kk: [
        '\u0424\u0443\u043d\u043a\u0446\u0438\u044f\u043d\u044b \u0431\u0430\u0441\u044b\u043b\u0493\u0430\u043d \u043a\u04af\u0439\u0456\u043d\u0434\u0435 \u0442\u0435\u0440\u0456\u04a3\u0456\u0437, \u043c\u044b\u0441\u0430\u043b\u044b <code>y=x^2-14x+22</code>. \u0411\u0456\u0440 \u0436\u043e\u043b \u0436\u0435\u0442\u0435\u0434\u0456 \u2014 \u043c\u04b1\u043d\u0434\u0430\u0439 \u0435\u0441\u0435\u043f\u0442\u0435 \u0435\u043a\u0456\u043d\u0448\u0456 \u0442\u0435\u04a3\u0434\u0435\u0443 \u0431\u043e\u043b\u043c\u0430\u0439\u0434\u044b.',
        '\u0411\u04b1\u0440\u044b\u043b\u044b\u0441 \u043a\u04e9\u0440\u0456\u043d\u0433\u0435\u043d\u0448\u0435 \u0434\u04e9\u04a3\u0433\u0435\u043b\u0435\u043a\u043f\u0435\u043d \u043a\u0456\u0448\u0456\u0440\u0435\u0439\u0442\u0456\u04a3\u0456\u0437. 14 \u0431\u0435\u043d 22 \u0441\u0438\u044f\u049b\u0442\u044b \u0441\u0430\u043d\u0434\u0430\u0440\u0434\u0430 \u0442\u04e9\u0431\u0435 \u0430\u043b\u0493\u0430\u0448\u049b\u044b \u044d\u043a\u0440\u0430\u043d\u043d\u0430\u043d \u04e9\u0442\u0435 \u0442\u04e9\u043c\u0435\u043d \u0436\u0430\u0442\u0430\u0434\u044b, \u0430\u043b \u0441\u0456\u0437\u0433\u0435 \u043e\u0434\u0430\u043d \u0431\u0430\u0441\u049b\u0430 \u0435\u0448\u0442\u0435\u04a3\u0435 \u043a\u0435\u0440\u0435\u043a \u0435\u043c\u0435\u0441.',
        '\u0411\u04b1\u0440\u044b\u043b\u044b\u0441 \u043d\u04af\u043a\u0442\u0435\u0441\u0456\u043d \u0431\u0430\u0441\u044b\u04a3\u044b\u0437, \u0441\u043e\u0441\u044b\u043d \u0442\u0430\u0493\u044b \u0431\u0456\u0440 \u0440\u0435\u0442. Desmos \u0436\u04b1\u043f\u0442\u044b \u0436\u0430\u0437\u0430\u0434\u044b, \u043c\u04b1\u043d\u0434\u0430 <code>(7, \u221227)</code>. \u0411\u04b1\u043b \u2014 \u0442\u04e9\u0431\u0435, \u0436\u04d9\u043d\u0435 \u0441\u04b1\u0440\u0430\u0439\u0442\u044b\u043d\u043d\u044b\u04a3 \u0431\u04d9\u0440\u0456 \u2014 \u043e\u0441\u044b \u0435\u043a\u0456 \u0441\u0430\u043d\u043d\u044b\u04a3 \u0431\u0456\u0440\u0435\u0443\u0456.',
        '<b>\u0415\u043d\u0434\u0456 \u043a\u04e9\u043f\u0448\u0456\u043b\u0456\u043a \u049b\u0430\u0442\u0435\u043b\u0435\u0441\u0435\u0442\u0456\u043d \u0442\u04b1\u0441.</b> \u0422\u04b1\u0436\u044b\u0440\u044b\u043c\u044b\u043d \u043e\u049b\u044b\u04a3\u044b\u0437. \u00abx-\u0442\u0456\u04a3 \u049b\u0430\u043d\u0434\u0430\u0439 <b>\u043c\u04d9\u043d\u0456\u043d\u0434\u0435</b> \u043c\u0438\u043d\u0438\u043c\u0443\u043c\u0493\u0430 \u0436\u0435\u0442\u0435\u0434\u0456\u00bb \u2014 \u0431\u0456\u0440\u0456\u043d\u0448\u0456 \u0441\u0430\u043d, 7. \u00abf(x)-\u0442\u0456\u04a3 <b>\u043c\u0438\u043d\u0438\u043c\u0443\u043c\u044b</b> \u043d\u0435\u0433\u0435 \u0442\u0435\u04a3\u00bb, x \u0430\u0439\u0442\u044b\u043b\u043c\u0430\u0441\u0430, \u2014 \u0435\u043a\u0456\u043d\u0448\u0456\u0441\u0456, \u221227. \u0421\u0456\u0437 \u0442\u0430\u04a3\u0434\u0430\u043c\u0430\u0493\u0430\u043d \u0441\u0430\u043d \u0434\u0435\u0440\u043b\u0456\u043a \u04d9\u0440\u049b\u0430\u0448\u0430\u043d \u0436\u0430\u0443\u0430\u043f \u043d\u04b1\u0441\u049b\u0430\u043b\u0430\u0440\u044b\u043d\u044b\u04a3 \u0456\u0448\u0456\u043d\u0434\u0435 \u0442\u04b1\u0440\u0430\u0434\u044b.',
        '\u0422\u0430\u043b\u0434\u0430\u0443 \u2014 <code>f(x) = 4x\u00b2 \u2212 50x + 126</code>, \u0442\u04e9\u0431\u0435\u0441\u0456 <code>(6.25, \u221230.25)</code>. x-\u0442\u0456\u04a3 \u043c\u04d9\u043d\u0456 \u0441\u04b1\u0440\u0430\u043b\u0493\u0430\u043d, \u0441\u043e\u043d\u0434\u044b\u049b\u0442\u0430\u043d \u0436\u0430\u0443\u0430\u043f 6.25. \u041d\u0430\u0437\u0430\u0440 \u0430\u0443\u0434\u0430\u0440\u044b\u04a3\u044b\u0437: \u043c\u04b1\u043d\u0434\u0430 \u0436\u0430\u0443\u0430\u043f \u043d\u04b1\u0441\u049b\u0430\u043b\u0430\u0440\u044b \u0436\u043e\u049b, \u0442\u04e9\u0431\u0435 \u0431\u04af\u0442\u0456\u043d \u0441\u0430\u043d \u0435\u043c\u0435\u0441, \u0430\u043b \u049b\u043e\u043b\u043c\u0435\u043d \u0431\u04b1\u043b \u2014 \u0431\u0456\u0440 \u0431\u0435\u0442 \u0435\u0441\u0435\u043f\u0442\u0435\u0443.',
        '<b>\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u2014 \u0434\u04d9\u043b \u0441\u043e\u043b \u0431\u0430\u0441\u0443.</b> \u0410\u043b\u0434\u044b\u043d\u0434\u0430 \u043c\u0438\u043d\u0443\u0441\u044b \u0431\u0430\u0440 \u043f\u0430\u0440\u0430\u0431\u043e\u043b\u0430, \u043c\u044b\u0441\u0430\u043b\u044b <code>y=-2x^2+6x+3</code>, \u0442\u04e9\u043c\u0435\u043d\u0434\u0435 \u0435\u043c\u0435\u0441, \u0436\u043e\u0493\u0430\u0440\u044b\u0434\u0430 \u0431\u04b1\u0440\u044b\u043b\u0430\u0434\u044b: \u0442\u04e9\u0431\u0435\u0441\u0456 <code>(1.5, 7.5)</code>, \u0434\u0435\u043c\u0435\u043a \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c 7.5, \u043e\u0493\u0430\u043d x = 1.5 \u043a\u0435\u0437\u0456\u043d\u0434\u0435 \u0436\u0435\u0442\u0435\u0434\u0456. \u0422\u04d9\u0441\u0456\u043b\u0434\u0435 \u0435\u0448\u0442\u0435\u04a3\u0435 \u04e9\u0437\u0433\u0435\u0440\u043c\u0435\u0439\u0434\u0456.',
        '<b>\u0416\u044b\u043b\u0436\u044b\u0442\u044b\u043b\u0493\u0430\u043d \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u0430 \u2014 \u0431\u0456\u0440 \u0431\u0430\u0441\u0443.</b> 1-\u0436\u043e\u043b\u0493\u0430 <code>f(x)=4x^2+64x+262</code>, 2-\u0436\u043e\u043b\u0493\u0430 <code>g(x)=f(x)+5</code> \u0442\u0435\u0440\u0456\u04a3\u0456\u0437 \u2014 Desmos g-\u043d\u044b \u04e9\u0437\u0456 \u0441\u044b\u0437\u0430\u0434\u044b, \u043e\u043d\u044b\u04a3 \u043d\u0435 \u0435\u043a\u0435\u043d\u0456\u043d \u0435\u0441\u0435\u043f\u0442\u0435\u0443\u0434\u0456\u04a3 \u049b\u0430\u0436\u0435\u0442\u0456 \u0436\u043e\u049b. f-\u0442\u0456 \u0436\u0430\u0441\u044b\u0440\u0443 \u04af\u0448\u0456\u043d 1-\u0436\u043e\u043b\u0434\u044b\u04a3 \u0442\u04af\u0441\u0442\u0456 \u0434\u04c0\u04a3\u0433\u0435\u043b\u0435\u0433\u0456\u043d \u0431\u0430\u0441\u044b\u04a3\u044b\u0437, \u0441\u043e\u0441\u044b\u043d g-\u043d\u044b\u04a3 \u0442\u04e9\u0431\u0435\u0441\u0456\u043d \u0431\u0430\u0441\u044b\u04a3\u044b\u0437: <code>(\u221213, 6)</code>.',
        '\u0421\u0430\u049b\u0442\u0430\u0439\u0442\u044b\u043d \u0431\u0456\u0440 \u04d9\u0434\u0435\u0442: \u0430\u043b\u0434\u044b\u043c\u0435\u043d \u0436\u04b1\u043f\u0442\u044b \u0436\u0430\u0437\u044b\u043f \u0430\u043b\u044b\u04a3\u044b\u0437, \u0441\u043e\u0434\u0430\u043d \u043a\u0435\u0439\u0456\u043d \u0441\u043e\u043b \u0431\u043e\u0439\u044b\u043d\u0448\u0430 \u0436\u0430\u0443\u0430\u043f \u0431\u0435\u0440\u0456\u04a3\u0456\u0437. \u042d\u043a\u0440\u0430\u043d\u043d\u0430\u043d \u0442\u0456\u043a\u0435\u043b\u0435\u0439 \u043a\u04e9\u0448\u0456\u0440\u0433\u0435\u043d\u0434\u0435 x \u043f\u0435\u043d y \u0448\u0430\u0442\u0430\u0441\u044b\u043f \u043a\u0435\u0442\u0435\u0434\u0456.'
      ]
    },
    tryIt: ['y=x^2-14x+22', 'f(x)=4x^2-50x+126', 'f(x)=4x^2+64x+262', 'g(x)=f(x)+5', 'y=-2x^2+6x+3']
  },
  /* Lessons 5–23 of the same video series: a calculator, the video and
     the exercises, nothing written. */
  {
    id: 'l5', lesson: 5,
    video: 'https://www.youtube.com/embed/uHuhHKY_wO8',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #5', url: 'https://youtu.be/uHuhHKY_wO8' }
  },
  {
    id: 'l6', lesson: 6,
    video: 'https://www.youtube.com/embed/-fS29WVBxlw',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #6', url: 'https://youtu.be/-fS29WVBxlw' }
  },
  {
    id: 'l7', lesson: 7,
    video: 'https://www.youtube.com/embed/wgIuacO3Xdw',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #7', url: 'https://youtu.be/wgIuacO3Xdw' }
  },
  {
    id: 'l8', lesson: 8,
    video: 'https://www.youtube.com/embed/QjEZuxPfKaE',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #8', url: 'https://youtu.be/QjEZuxPfKaE' }
  },
  {
    id: 'l9', lesson: 9,
    video: 'https://www.youtube.com/embed/yAYGDGOO5bA',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #9', url: 'https://youtu.be/yAYGDGOO5bA' }
  },
  {
    id: 'l10', lesson: 10,
    video: 'https://www.youtube.com/embed/a1QNaRnn6cE',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #10', url: 'https://youtu.be/a1QNaRnn6cE' }
  },
  {
    id: 'l11', lesson: 11,
    video: 'https://www.youtube.com/embed/XIrg5fyIHL4',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #11', url: 'https://youtu.be/XIrg5fyIHL4' }
  },
  {
    id: 'l12', lesson: 12,
    video: 'https://www.youtube.com/embed/TIC6oYtvBGU',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #12', url: 'https://youtu.be/TIC6oYtvBGU' }
  },
  {
    id: 'l13', lesson: 13,
    video: 'https://www.youtube.com/embed/oOZeeiLe13g',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #13', url: 'https://youtu.be/oOZeeiLe13g' }
  },
  {
    id: 'l14', lesson: 14,
    video: 'https://www.youtube.com/embed/szu6vufYqmA',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #14', url: 'https://youtu.be/szu6vufYqmA' }
  },
  {
    id: 'l15', lesson: 15,
    video: 'https://www.youtube.com/embed/LOoY9iU1uZU',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #15', url: 'https://youtu.be/LOoY9iU1uZU' }
  },
  {
    id: 'l16', lesson: 16,
    video: 'https://www.youtube.com/embed/8Ik_TbQ7ouE',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #16', url: 'https://youtu.be/8Ik_TbQ7ouE' }
  },
  {
    id: 'l17', lesson: 17,
    video: 'https://www.youtube.com/embed/bcoYGlribno',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #17', url: 'https://youtu.be/bcoYGlribno' }
  },
  {
    id: 'l18', lesson: 18,
    video: 'https://www.youtube.com/embed/IFBTj353NHI',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #18', url: 'https://youtu.be/IFBTj353NHI' }
  },
  {
    id: 'l19', lesson: 19,
    video: 'https://www.youtube.com/embed/3rF4TTAVom4',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #19', url: 'https://youtu.be/3rF4TTAVom4' }
  },
  {
    id: 'l20', lesson: 20,
    video: 'https://www.youtube.com/embed/Kjm-tNBxLY8',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #20', url: 'https://youtu.be/Kjm-tNBxLY8' }
  },
  {
    id: 'l21', lesson: 21,
    video: 'https://www.youtube.com/embed/jcTnOfbnaiM',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #21', url: 'https://youtu.be/jcTnOfbnaiM' }
  },
  {
    id: 'l22', lesson: 22,
    video: 'https://www.youtube.com/embed/X3nl7auPK5A',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #22', url: 'https://youtu.be/X3nl7auPK5A' }
  },
  {
    id: 'l23', lesson: 23,
    video: 'https://www.youtube.com/embed/TtVwM6Doydg',
    videoCredit: { name: 'Tutorlini Test Prep — Desmos Lesson #23', url: 'https://youtu.be/TtVwM6Doydg' }
  }
];
