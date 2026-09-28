/* ==========================================================================
   The explanation a student reads before the ten questions.

   `rule` is the thing itself and `trap` is how the test makes you get it
   wrong — one sentence each, because a wall of text in front of a drill does
   not get read. The lessons of the hard phase, the reviews and the test week
   carry a rule only: they teach no new material, they drill what is behind
   them, so what they need to say is what the drill is.

   Written for JTS. Nothing here is taken from College Board material.

   Loaded after js/data/programme-drills.js.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.programme.teach = {
  /* ------------------------------------------------- Math · Linear Algebra */
  'M1.1': {
    rule: {
      en: 'Whatever you do to one side you do to the other, and fractions go first: multiply everything by the common denominator before anything else.',
      ru: 'Что делаете с одной частью, делаете и с другой, а дроби убираются первыми: умножьте всё на общий знаменатель, прежде чем что-то ещё.',
      kk: 'Бір жағына не істесеңіз, екіншісіне де істейсіз, ал бөлшектер бірінші кетеді: алдымен бәрін ортақ бөлімге көбейтіңіз.' },
    trap: {
      en: 'When the variable cancels on both sides the equation has no solution or infinitely many — and the test asks for exactly that more often than it asks you to solve.',
      ru: 'Если переменная сокращается в обеих частях, у уравнения нет решений или их бесконечно много — и спрашивают об этом чаще, чем просят решить.',
      kk: 'Айнымалы екі жақта да қысқарса, теңдеудің шешімі жоқ немесе шексіз көп — мұны шешуді сұрағаннан гөрі жиі сұрайды.' }
  },
  'M1.2': {
    rule: {
      en: 'y = mx + b reads straight off: m is the rate of change and b is the value at x = 0. The other two forms say the same thing rearranged.',
      ru: 'y = mx + b читается напрямую: m — скорость изменения, b — значение при x = 0. Две другие формы говорят то же самое, только переставленное.',
      kk: 'y = mx + b тікелей оқылады: m — өзгеру жылдамдығы, b — x = 0 кездегі мән. Қалған екі түрі сол мағынаны басқаша жазады.' },
    trap: {
      en: 'Parallel means the same m; perpendicular means m turned upside down with its sign flipped — and the line is usually given in a form where m is invisible until you rearrange.',
      ru: 'Параллельные — тот же m; перпендикулярные — m перевёрнутый и со сменённым знаком, а прямую обычно дают в форме, где m не виден, пока не преобразуешь.',
      kk: 'Параллель — сол m; перпендикуляр — төңкерілген әрі таңбасы ауысқан m, ал түзу әдетте m көрінбейтін түрде беріледі.' }
  },
  'M1.3': {
    rule: {
      en: 'Name the variable in words first, then write the sentence as an equation left to right: "per" is the slope and "to start with" is the intercept.',
      ru: 'Сначала назовите переменную словами, потом запишите предложение как уравнение слева направо: «за каждый» — это slope, «изначально» — intercept.',
      kk: 'Алдымен айнымалыны сөзбен атаңыз, сосын сөйлемді солдан оңға теңдеу етіп жазыңыз: «әрқайсысына» — slope, «бастапқыда» — intercept.' },
    trap: {
      en: 'The question often asks what a coefficient means rather than for a number, and the answer is the unit: dollars per hour, not a count of hours.',
      ru: 'Часто спрашивают не число, а что означает коэффициент, и ответ — это единица измерения: доллары в час, а не количество часов.',
      kk: 'Жиі сан емес, коэффициенттің мағынасы сұралады, ал жауап — өлшем бірлігі: сағатына доллар, сағат саны емес.' }
  },
  'M1.4': {
    rule: {
      en: 'Solve it exactly like an equation, with one exception: multiplying or dividing by a negative flips the inequality sign.',
      ru: 'Решайте ровно как уравнение, с одним исключением: умножение или деление на отрицательное меняет знак неравенства.',
      kk: 'Теңдеудегідей шешіңіз, бір ғана ерекшелікпен: теріс санға көбейту не бөлу теңсіздік таңбасын өзгертеді.' },
    trap: {
      en: '|x − a| < b is a distance, so it is two inequalities at once — drawing it on a number line is faster than remembering which way the rule goes.',
      ru: '|x − a| < b — это расстояние, то есть сразу два неравенства; нарисовать на прямой быстрее, чем вспоминать, в какую сторону работает правило.',
      kk: '|x − a| < b — қашықтық, яғни бірден екі теңсіздік; сан осіне сызу ережені еске түсіруден жылдам.' }
  },
  'M1.5': {
    rule: {
      en: 'Substitution when a variable is already alone, elimination when the coefficients line up, Desmos when all you want is the crossing point.',
      ru: 'Подстановка — когда переменная уже выражена, сложение — когда совпадают коэффициенты, Desmos — когда нужна только точка пересечения.',
      kk: 'Айнымалы жеке тұрса — қою, коэффициенттер сәйкессе — қосу, тек қиылысу нүктесі керек болса — Desmos.' },
    trap: {
      en: 'The question usually wants x + y or 2x − y rather than x or y, so read it again once you have the pair.',
      ru: 'Обычно спрашивают x + y или 2x − y, а не x или y, так что перечитайте вопрос, когда пара уже найдена.',
      kk: 'Әдетте x не y емес, x + y немесе 2x − y сұралады, сондықтан жұпты тапқан соң сұрақты қайта оқыңыз.' }
  },
  'M1.6': {
    rule: {
      en: 'Two unknowns need two sentences, and in a word problem one of them usually counts things while the other counts money or time.',
      ru: 'Двум неизвестным нужны два предложения, и в текстовой задаче одно обычно считает штуки, а другое — деньги или время.',
      kk: 'Екі белгісізге екі сөйлем керек, ал мәтінді есепте біреуі затты, екіншісі ақша не уақытты санайды.' },
    trap: {
      en: 'The same slope with a different intercept means no solution; the same slope and the same intercept means infinitely many — asked as "for what value of k".',
      ru: 'Одинаковый slope и разный intercept — решений нет; одинаковые и slope, и intercept — их бесконечно много; спрашивают это как «при каком k».',
      kk: 'Slope бірдей, intercept әртүрлі — шешім жоқ; екеуі де бірдей — шексіз көп; мұны «k қандай болғанда» деп сұрайды.' }
  },

  /* ------------------------------------------------- Math · Advanced Math */
  'M2.1': {
    rule: {
      en: 'Multiplying adds the exponents, dividing subtracts them, a power of a power multiplies them, and a fractional exponent is a root.',
      ru: 'При умножении степени складываются, при делении вычитаются, степень степени перемножается, а дробный показатель — это корень.',
      kk: 'Көбейткенде дәрежелер қосылады, бөлгенде азайтылады, дәреженің дәрежесі көбейтіледі, ал бөлшек көрсеткіш — түбір.' },
    trap: {
      en: 'A negative exponent is a reciprocal, not a negative number: 2⁻³ is 1/8 and never −8.',
      ru: 'Отрицательный показатель — это обратное число, а не отрицательное: 2⁻³ = 1/8, а не −8.',
      kk: 'Теріс көрсеткіш — кері сан, теріс сан емес: 2⁻³ = 1/8, −8 емес.' }
  },
  'M2.2': {
    rule: {
      en: 'Factoring turns a quadratic into its zeros, and the zeros are exactly where the graph crosses the x-axis.',
      ru: 'Разложение превращает квадратичную в её нули, а нули — это ровно те точки, где график пересекает ось x.',
      kk: 'Жіктеу квадраттықты оның нөлдеріне айналдырады, ал нөлдер — графиктің x осін қиятын нүктелері.' },
    trap: {
      en: 'x² − 9 factors into (x − 3)(x + 3), but x² + 9 does not factor at all: the difference of squares only works one way round.',
      ru: 'x² − 9 раскладывается как (x − 3)(x + 3), а x² + 9 не раскладывается вовсе: разность квадратов работает только в одну сторону.',
      kk: 'x² − 9 = (x − 3)(x + 3), ал x² + 9 мүлде жіктелмейді: квадраттар айырымы тек бір бағытта жұмыс істейді.' }
  },
  'M2.3': {
    rule: {
      en: 'The formula solves any quadratic, and the discriminant b² − 4ac tells you how many real solutions there are before you solve it.',
      ru: 'Формула решает любую квадратичную, а дискриминант b² − 4ac говорит, сколько действительных решений, ещё до решения.',
      kk: 'Формула кез келген квадраттықты шешеді, ал b² − 4ac дискриминанты шешпей тұрып неше нақты шешім бар екенін айтады.' },
    trap: {
      en: '"Exactly one solution" is the discriminant equal to zero — that is the question itself, not a remark on the side.',
      ru: '«Ровно одно решение» — это дискриминант, равный нулю; в этом и состоит вопрос, а не в примечании рядом.',
      kk: '«Дәл бір шешім» — дискриминанттың нөлге теңдігі; сұрақтың өзі осында.' }
  },
  'M2.4': {
    rule: {
      en: 'Vertex form gives the turning point, factored form gives the x-intercepts, standard form gives the y-intercept — use the form the question asks about.',
      ru: 'Vertex form даёт вершину, разложенная — пересечения с осью x, стандартная — пересечение с осью y; берите ту форму, о которой спрашивают.',
      kk: 'Vertex form төбені, жіктелген түр x осімен қиылысуды, стандартты түр y осімен қиылысуды береді — сұралған түрді алыңыз.' },
    trap: {
      en: 'In y = a(x − h)² + k the vertex is (h, k) with the sign of h flipped: y = (x + 3)² turns at x = −3.',
      ru: 'В y = a(x − h)² + k вершина — (h, k), но знак h переворачивается: y = (x + 3)² поворачивает при x = −3.',
      kk: 'y = a(x − h)² + k-де төбе — (h, k), бірақ h таңбасы ауысады: y = (x + 3)² x = −3-те бұрылады.' }
  },
  'M2.5': {
    rule: {
      en: 'f(x) is a machine: whatever is in the brackets goes in and the value comes out; f(g(x)) means do g first.',
      ru: 'f(x) — это машина: что в скобках, то и подставляется, а на выходе значение; f(g(x)) означает сначала g.',
      kk: 'f(x) — машина: жақшадағы нәрсе кіреді, мән шығады; f(g(x)) дегеніміз алдымен g.' },
    trap: {
      en: 'f(x + 2) shifts the graph left, not right: inside the brackets everything works backwards.',
      ru: 'f(x + 2) сдвигает график влево, а не вправо: внутри скобок всё работает наоборот.',
      kk: 'f(x + 2) графикті солға жылжытады, оңға емес: жақшаның ішінде бәрі керісінше.' }
  },
  'M2.6': {
    rule: {
      en: 'In a·bˣ, a is the starting amount and b is the multiplier per step: b = 1.07 is 7% growth and b = 0.93 is 7% decay.',
      ru: 'В a·bˣ величина a — начальное количество, b — множитель за шаг: b = 1.07 — рост на 7%, b = 0.93 — убыль на 7%.',
      kk: 'a·bˣ-те a — бастапқы мөлшер, b — қадамдағы көбейткіш: b = 1,07 — 7% өсу, b = 0,93 — 7% кему.' },
    trap: {
      en: 'Growing "by 7% a year" is ×1.07, not +7: a linear model adds and an exponential one multiplies, and the wording says which.',
      ru: 'Рост «на 7% в год» — это ×1.07, а не +7: линейная модель прибавляет, экспоненциальная умножает, и формулировка говорит какая.',
      kk: '«Жылына 7%-ға» өсу — ×1,07, +7 емес: сызықтық модель қосады, экспоненциалды көбейтеді, тұжырым қайсысын айтады.' }
  },

  /* ------------------------------ Math · Problem-Solving and Data Analysis */
  'M3.1': {
    rule: {
      en: 'Set the proportion up with the same units in the same place, then cancel units along the chain until only the one you want is left.',
      ru: 'Составьте пропорцию так, чтобы одинаковые единицы стояли на одинаковых местах, и сокращайте единицы по цепочке, пока не останется нужная.',
      kk: 'Пропорцияны бірдей бірліктер бір орында тұратындай құрып, керегі қалғанша бірліктерді тізбекпен қысқартыңыз.' },
    trap: {
      en: 'A 20% rise followed by a 20% fall does not come back to the start: the two percentages are taken of different numbers.',
      ru: 'Рост на 20%, а потом падение на 20% не возвращают к началу: проценты берутся от разных чисел.',
      kk: '20%-ға өсіп, сосын 20%-ға кему бастапқы мәнге қайтармайды: пайыздар әртүрлі саннан алынады.' }
  },
  'M3.2': {
    rule: {
      en: 'Type both sides of the equation as two functions and click the crossing; for a maximum or a minimum, click the turning point.',
      ru: 'Введите обе части уравнения как две функции и кликните пересечение; для максимума или минимума кликните точку поворота.',
      kk: 'Теңдеудің екі жағын екі функция етіп теріп, қиылысуды басыңыз; максимум не минимум үшін бұрылыс нүктесін басыңыз.' },
    trap: {
      en: 'The pair Desmos prints has two numbers and the question wants one of them — decide which before you write it down.',
      ru: 'Desmos пишет пару из двух чисел, а спрашивают одно из них — решите какое, прежде чем записывать.',
      kk: 'Desmos екі саннан тұратын жұп жазады, ал сұралатыны — біреуі; жазбас бұрын қайсысы екенін шешіңіз.' }
  },
  'M3.3': {
    rule: {
      en: 'The mean moves with an outlier and the median mostly does not; standard deviation is how spread out the data is, not how big it is.',
      ru: 'Среднее сдвигается от выброса, медиана почти нет; стандартное отклонение — это разброс данных, а не их величина.',
      kk: 'Орташа мән шектен тыс мәннен ығысады, медиана дерлік ығыспайды; стандартты ауытқу — деректердің шашырауы, шамасы емес.' },
    trap: {
      en: 'A margin of error is about the interval, not about one person, and it narrows with a bigger sample rather than a better one.',
      ru: 'Margin of error относится к интервалу, а не к одному человеку, и сужается от большей выборки, а не от «более качественной».',
      kk: 'Margin of error бір адамға емес, интервалға қатысты және сапалы емес, көлемдірек таңдамадан тарылады.' }
  },
  'M3.4': {
    rule: {
      en: 'Probability is the part over the whole, and in a two-way table the question decides which row or column counts as the whole.',
      ru: 'Вероятность — это часть, делённая на целое, а в таблице сопряжённости вопрос решает, какая строка или столбец считаются целым.',
      kk: 'Ықтималдық — бөліктің бүтінге қатынасы, ал екі жақты кестеде бүтін қайсысы екенін сұрақ шешеді.' },
    trap: {
      en: '"Given that" changes the whole: it is the row you were told about, not the total of the table.',
      ru: '«При условии, что» меняет целое: это та строка, о которой сказали, а не общий итог таблицы.',
      kk: '«Егер белгілі болса» бүтінді өзгертеді: бұл — айтылған жол, кестенің жалпы қорытындысы емес.' }
  },

  /* --------------------------------- Math · Geometry and Trigonometry */
  'M4.1': {
    rule: {
      en: 'Similar triangles have proportional sides, and 30-60-90 and 45-45-90 have fixed ratios worth knowing without the reference sheet.',
      ru: 'У подобных треугольников стороны пропорциональны, а у 30-60-90 и 45-45-90 фиксированные отношения, которые стоит знать без reference sheet.',
      kk: 'Ұқсас үшбұрыштардың қабырғалары пропорционал, ал 30-60-90 мен 45-45-90-ның қатынастары тұрақты — оларды reference sheet-сіз білген жөн.' },
    trap: {
      en: 'The right angle is not always drawn at the bottom, and the hypotenuse is always the side opposite it, whatever the picture looks like.',
      ru: 'Прямой угол не всегда нарисован снизу, а гипотенуза всегда лежит против него, как бы ни выглядел рисунок.',
      kk: 'Тік бұрыш әрқашан төменде сызылмайды, ал гипотенуза әрдайым соған қарсы жатады, сурет қандай болса да.' }
  },
  'M4.2': {
    rule: {
      en: '(x − h)² + (y − k)² = r² is the circle, and an arc or a sector is its fraction of the whole: the angle over 360°, or over 2π in radians.',
      ru: '(x − h)² + (y − k)² = r² — это окружность, а дуга или сектор — её доля: угол, делённый на 360°, или на 2π в радианах.',
      kk: '(x − h)² + (y − k)² = r² — шеңбер, ал доға не сектор — оның үлесі: бұрыштың 360°-қа, радианда 2π-ге қатынасы.' },
    trap: {
      en: 'The equation carries −h and −k, so (x + 2)² means the centre sits at x = −2.',
      ru: 'В уравнении стоят −h и −k, поэтому (x + 2)² означает центр при x = −2.',
      kk: 'Теңдеуде −h және −k тұр, сондықтан (x + 2)² центрдің x = −2-де екенін білдіреді.' }
  },
  'M4.3': {
    rule: {
      en: 'SOH-CAH-TOA is relative to the angle you picked: opposite and adjacent swap over when the angle does.',
      ru: 'SOH-CAH-TOA считается относительно выбранного угла: противолежащий и прилежащий меняются местами вместе с углом.',
      kk: 'SOH-CAH-TOA таңдалған бұрышқа қатысты: бұрыш ауысқанда қарсы және іргелес қабырға да орын ауыстырады.' },
    trap: {
      en: 'sin x = cos(90° − x): the test asks this as an identity far more often than it asks you to find a side.',
      ru: 'sin x = cos(90° − x): об этом тождестве спрашивают гораздо чаще, чем просят найти сторону.',
      kk: 'sin x = cos(90° − x): бұл теңбе-теңдікті қабырға табуды сұрағаннан әлдеқайда жиі сұрайды.' }
  },
  'M4.4': {
    rule: {
      en: 'The reference sheet has the formulas; what it does not have is that scaling a solid by k scales its area by k² and its volume by k³.',
      ru: 'Формулы есть в reference sheet; чего там нет — что при масштабе k площадь растёт как k², а объём как k³.',
      kk: 'Формулалар reference sheet-те бар; онда жоқ нәрсе — k масштабында аудан k², көлем k³ болып өседі.' },
    trap: {
      en: 'A question about doubling a radius is a question about k², not about k.',
      ru: 'Вопрос про удвоение радиуса — это вопрос про k², а не про k.',
      kk: 'Радиусты екі есе арттыру туралы сұрақ — k² туралы сұрақ, k туралы емес.' }
  },

  /* ------------------------------------ Verbal · Standard English Conventions */
  'V1.1': {
    rule: {
      en: 'A full stop, a semicolon and a comma with "and" all do the same job: they join two complete sentences.',
      ru: 'Точка, точка с запятой и запятая с «and» делают одно и то же: соединяют два законченных предложения.',
      kk: 'Нүкте, нүктелі үтір және «and»-пен үтір бір ғана жұмысты істейді: екі аяқталған сөйлемді жалғайды.' },
    trap: {
      en: 'A comma alone cannot join two sentences, and neither can no punctuation at all — between them that is the commonest wrong answer in the section.',
      ru: 'Одна запятая не соединяет два предложения, и отсутствие знака тоже; вместе это самый частый неверный ответ в секции.',
      kk: 'Жалғыз үтір екі сөйлемді жалғай алмайды, тыныс белгісінің мүлде болмауы да; екеуі — секциядағы ең жиі қате жауап.' }
  },
  'V1.2': {
    rule: {
      en: 'Find the subject by deleting everything between it and the verb; the verb agrees with what is left.',
      ru: 'Найдите подлежащее, вычеркнув всё между ним и сказуемым; сказуемое согласуется с тем, что осталось.',
      kk: 'Бастауышты табу үшін оның мен баяндауыштың арасындағының бәрін сызып тастаңыз; баяндауыш қалғанмен үйлеседі.' },
    trap: {
      en: '"The box of old letters" is singular: the phrase in the middle is there to make you agree with "letters".',
      ru: '«The box of old letters» — единственное число: вставка в середине для того и стоит, чтобы вы согласовали с «letters».',
      kk: '«The box of old letters» — жекеше: ортадағы қыстырма сізді «letters»-пен үйлестіру үшін тұр.' }
  },
  'V1.3': {
    rule: {
      en: 'The tense comes from the paragraph around the blank, not from the sentence on its own.',
      ru: 'Время берётся из абзаца вокруг пропуска, а не из отдельного предложения.',
      kk: 'Шақ бос орынның айналасындағы абзацтан алынады, жеке сөйлемнен емес.' },
    trap: {
      en: 'A date or a time word — "in 1890", "today" — decides the tense, and all the choices sound acceptable without it.',
      ru: 'Дата или слово времени — «in 1890», «today» — и решают время, а без них все варианты звучат нормально.',
      kk: 'Күн не уақыт сөзі — «in 1890», «today» — шақты шешеді, ал онсыз барлық нұсқа қалыпты естіледі.' }
  },
  'V1.4': {
    rule: {
      en: 'A pronoun needs exactly one noun it can mean, and it agrees with that noun in number.',
      ru: 'У местоимения должно быть ровно одно существительное, на которое оно может указывать, и оно согласуется с ним в числе.',
      kk: 'Есімдіктің нұсқай алатын дәл бір зат есімі болуы керек және онымен сан жағынан үйлеседі.' },
    trap: {
      en: '"Their" for a singular noun, and a "this" that could point at two things, are both offered as answers.',
      ru: '«Their» при единственном числе и «this», которое может указывать на две вещи, — оба предлагаются как варианты.',
      kk: 'Жекеше зат есімге «their» және екі нәрсеге нұсқай алатын «this» — екеуі де жауап ретінде ұсынылады.' }
  },
  'V1.5': {
    rule: {
      en: '’s is one owner, s’ is more than one, and its, their and whose carry no apostrophe at all.',
      ru: '’s — один владелец, s’ — несколько, а its, their и whose апострофа не имеют вовсе.',
      kk: '’s — бір иеленуші, s’ — бірнеше, ал its, their және whose-та апостроф мүлде жоқ.' },
    trap: {
      en: 'it’s is only ever "it is": if you cannot say "it is" in that place, the answer is its.',
      ru: 'it’s — это всегда только «it is»: если «it is» туда не подставляется, ответ — its.',
      kk: 'it’s әрқашан тек «it is»: сол жерге «it is» қойылмаса, жауап — its.' }
  },
  'V1.6': {
    rule: {
      en: 'An opening phrase describes whatever comes straight after the comma, so that has to be the thing doing it.',
      ru: 'Вводная фраза описывает то, что стоит сразу после запятой, значит именно оно и должно выполнять действие.',
      kk: 'Кіріспе тіркес үтірден кейін бірден тұрғанды сипаттайды, демек әрекетті сол істеуі керек.' },
    trap: {
      en: '"Walking home, the rain started" says the rain was walking; the fix is to change the subject, not the phrase.',
      ru: '«Walking home, the rain started» говорит, что шёл дождь ногами; чинится это сменой подлежащего, а не фразы.',
      kk: '«Walking home, the rain started» жаңбыр жаяу жүрді дейді; түзету — бастауышты ауыстыру, тіркесті емес.' }
  },

  /* -------------------------------------------- Verbal · Expression of Ideas */
  'V2.1': {
    rule: {
      en: 'Read the sentence before and the sentence after, name the relation in your own words, and only then look at the choices.',
      ru: 'Прочитайте предложение до и предложение после, назовите связь своими словами и только потом смотрите варианты.',
      kk: 'Алдыңғы және кейінгі сөйлемді оқып, байланысты өз сөзіңізбен атаңыз, содан кейін ғана нұсқаларға қараңыз.' },
    trap: {
      en: 'However, moreover and therefore are not interchangeable — decide the relation first, or the choices decide it for you.',
      ru: 'However, moreover и therefore не взаимозаменяемы — решите связь первым, иначе варианты решат за вас.',
      kk: 'However, moreover және therefore бір-бірін алмастырмайды — байланысты алдымен өзіңіз шешіңіз, әйтпесе нұсқалар шешеді.' }
  },
  'V2.2': {
    rule: {
      en: 'The goal is written in the question itself; the right answer is the one that does exactly that, using the notes.',
      ru: 'Цель написана в самом вопросе; верный ответ — тот, который делает ровно это, опираясь на заметки.',
      kk: 'Мақсат сұрақтың өзінде жазылған; дұрыс жауап — жазбаларға сүйеніп дәл соны істейтіні.' },
    trap: {
      en: 'Three of the choices will be true statements from the notes — true is not the test; doing the stated job is.',
      ru: 'Три варианта будут верными утверждениями из заметок — но проверяется не истинность, а выполнение заявленной задачи.',
      kk: 'Үш нұсқа жазбалардағы шын тұжырым болады — тексерілетіні шындық емес, айтылған міндетті орындау.' }
  },

  /* ------------------------------------------- Verbal · Craft and Structure */
  'V3.1': {
    rule: {
      en: 'Cover the choices, put your own word into the blank from the sentence around it, then take the closest one.',
      ru: 'Закройте варианты, вставьте в пропуск своё слово по окружающему предложению, затем возьмите ближайший вариант.',
      kk: 'Нұсқаларды жауып, айналасындағы сөйлем бойынша бос орынға өз сөзіңізді қойыңыз, сосын ең жақынын алыңыз.' },
    trap: {
      en: 'The hardest items use an ordinary word in a narrow sense, so the everyday meaning is the distractor.',
      ru: 'В самых сложных заданиях обычное слово стоит в узком значении, и бытовой смысл как раз и есть ловушка.',
      kk: 'Ең қиын тапсырмаларда қарапайым сөз тар мағынада тұрады, сондықтан күнделікті мағына — тұзақ.' }
  },
  'V3.2': {
    rule: {
      en: 'Ask what the sentence does for the text — sets up, gives an example, qualifies, concludes — not what it says.',
      ru: 'Спрашивайте, что предложение делает для текста: готовит, приводит пример, уточняет, завершает, — а не что оно говорит.',
      kk: 'Сөйлем мәтін үшін не істейді деп сұраңыз — дайындай ма, мысал келтіре ме, нақтылай ма, аяқтай ма — не айтады емес.' },
    trap: {
      en: 'A choice that summarises the content correctly can still be the wrong answer to a question about function.',
      ru: 'Вариант, который верно пересказывает содержание, всё равно может быть неверным ответом на вопрос о функции.',
      kk: 'Мазмұнды дұрыс қайталайтын нұсқа қызмет туралы сұраққа қате жауап болуы мүмкін.' }
  },
  'V3.3': {
    rule: {
      en: 'State each author’s position in one sentence first, and only then answer how the second would respond to the first.',
      ru: 'Сначала сформулируйте позицию каждого автора одним предложением и только потом отвечайте, как второй ответил бы первому.',
      kk: 'Алдымен әр автордың ұстанымын бір сөйлеммен айтыңыз, сосын екіншісі біріншіге қалай жауап берерін шешіңіз.' },
    trap: {
      en: 'The two texts usually agree on the facts and differ on the reading of them, so a choice saying they contradict the data is out.',
      ru: 'Обычно тексты согласны в фактах и расходятся в их трактовке, поэтому вариант «они противоречат данным» отпадает.',
      kk: 'Әдетте мәтіндер фактілерде келіседі, түсіндіруде ажырасады, сондықтан «деректерге қайшы» нұсқа шығып қалады.' }
  },

  /* ----------------------------------------- Verbal · Information and Ideas */
  'V4.1': {
    rule: {
      en: 'The main idea is what the whole text supports; an inference is the sentence the text has made unavoidable, not the one it hints at.',
      ru: 'Главная идея — то, что поддерживает весь текст; вывод — предложение, которое текст сделал неизбежным, а не то, на которое он намекает.',
      kk: 'Негізгі идея — бүкіл мәтін қолдайтын нәрсе; қорытынды — мәтін бұлтартпайтын еткен сөйлем, тұспалдағаны емес.' },
    trap: {
      en: 'A correct inference never adds new information: if a choice needs a fact the text does not give, it is out.',
      ru: 'Верный вывод не добавляет новой информации: если варианту нужен факт, которого в тексте нет, он отпадает.',
      kk: 'Дұрыс қорытынды жаңа ақпарат қоспайды: нұсқаға мәтінде жоқ факт керек болса, ол шығып қалады.' }
  },
  'V4.2': {
    rule: {
      en: 'Decide what would have to be true for the claim to hold, then find the quote or the row that says it.',
      ru: 'Решите, что должно быть верно, чтобы утверждение держалось, и найдите цитату или строку, которая это говорит.',
      kk: 'Тұжырым дұрыс болу үшін не шындық болуы керегін шешіп, соны айтатын дәйексөз не жолды табыңыз.' },
    trap: {
      en: 'With a table the answer has to read the data correctly AND support the claim; most wrong choices read it correctly and support nothing.',
      ru: 'С таблицей ответ должен и верно прочитать данные, И подтвердить тезис; большинство неверных вариантов читают верно, но ничего не подтверждают.',
      kk: 'Кестемен жауап деректі дұрыс оқып, ӘРІ тұжырымды қолдауы керек; қате нұсқалардың көбі дұрыс оқиды, бірақ ештеңе қолдамайды.' }
  },

  /* ------------------------------------------------------- the hard phase */
  'HM1': { rule: {
    en: 'A hard algebra item is ordinary algebra with a parameter where a number should be: solve it as if k were known, then read what the question wants of k.',
    ru: 'Сложная алгебра — это обычная алгебра, где вместо числа стоит параметр: решайте так, будто k известно, а потом читайте, что спрашивают про k.',
    kk: 'Күрделі алгебра — сан орнында параметр тұрған қарапайым алгебра: k белгілі деп шешіп, сосын k туралы не сұралғанын оқыңыз.' } },
  'HM2': { rule: {
    en: 'Here the equation is nonlinear, and the work is seeing which move — substitution, squaring, factoring — leaves something you can actually solve.',
    ru: 'Здесь уравнение нелинейное, и вся работа — увидеть, какой ход (подстановка, возведение в квадрат, разложение) оставляет то, что реально решается.',
    kk: 'Мұнда теңдеу сызықты емес, ал бүкіл жұмыс — қай қимыл (қою, квадраттау, жіктеу) шешуге болатын нәрсе қалдыратынын көру.' } },
  'HM3': { rule: {
    en: 'Hard data questions are about study design and conditional probability rather than arithmetic: what the sample lets you conclude, and about whom.',
    ru: 'Сложные вопросы по данным — про дизайн исследования и условную вероятность, а не про арифметику: что позволяет заключить выборка и о ком.',
    kk: 'Күрделі дерек сұрақтары арифметика емес, зерттеу дизайны мен шартты ықтималдық туралы: таңдама не туралы және кім жайлы қорытынды жасауға мүмкіндік береді.' } },
  'HM4': { rule: {
    en: 'The hard geometry item puts two figures together, so the work is finding the length they share.',
    ru: 'Сложная геометрия соединяет две фигуры, и работа — найти общую для них длину.',
    kk: 'Күрделі геометрия екі фигураны біріктіреді, ал жұмыс — олардың ортақ ұзындығын табу.' } },
  'HM5': { rule: {
    en: 'This one is about the clock: ten questions in twelve minutes, and the skill is deciding fast which to solve and which to leave.',
    ru: 'Этот урок про время: десять вопросов за двенадцать минут, и навык — быстро решать, что решать, а что оставить.',
    kk: 'Бұл сабақ уақыт туралы: он екі минутта он сұрақ, ал дағды — нені шешіп, нені қалдыруды жылдам шешу.' } },
  'HV1': { rule: {
    en: 'Full-difficulty inference on unfamiliar science and history: the answer is still the one the text forces, but the text gives you less help.',
    ru: 'Вывод на полной сложности по незнакомой науке и истории: ответ по-прежнему тот, который вынуждает текст, только помощи от текста меньше.',
    kk: 'Бейтаныс ғылым мен тарих бойынша толық күрделіліктегі қорытынды: жауап әлі де мәтін мәжбүрлейтіні, бірақ мәтін аз көмектеседі.' } },
  'HV2': { rule: {
    en: 'Synthesis where the goals compete, and tables that do not say what they look like they say.',
    ru: 'Синтез, где цели конкурируют, и таблицы, которые говорят не то, чем кажутся.',
    kk: 'Мақсаттар бәсекелесетін синтез және көрінгенін айтпайтын кестелер.' } },
  'HV3': { rule: {
    en: 'The hardest grammar items hide a boundary or a modifier inside a long sentence: shorten the sentence in your head first.',
    ru: 'Самые сложные грамматические задания прячут границу или модификатор внутри длинного предложения: сначала сократите предложение в голове.',
    kk: 'Ең күрделі грамматика тапсырмалары шекара не модификаторды ұзын сөйлемнің ішіне жасырады: алдымен сөйлемді ойша қысқартыңыз.' } },

  /* --------------------------------------- reviews, the buffer and the end */
  'MR1': { rule: {
    en: 'Not new material: whatever your error log says you are under 80% on.',
    ru: 'Не новый материал: всё, по чему error log показывает точность ниже 80%.',
    kk: 'Жаңа материал емес: error log 80%-дан төмен деп көрсеткеннің бәрі.' } },
  'MR2': { rule: {
    en: 'The second pass over the same list, on whatever is still unsteady.',
    ru: 'Второй проход по тому же списку — по тому, что всё ещё неустойчиво.',
    kk: 'Сол тізім бойынша екінші өту — әлі тұрақсыз болғаны бойынша.' } },
  'BUF': { rule: {
    en: 'A spare lesson: catch up on what slipped, or take another mixed set.',
    ru: 'Запасной урок: догнать отставание или взять ещё один смешанный набор.',
    kk: 'Қосалқы сабақ: артта қалғанды қуып жету немесе тағы бір аралас жинақ алу.' } },
  'T1': { rule: {
    en: 'The last hard set, built from what the last two practice tests showed.',
    ru: 'Последний сложный набор, составленный по тому, что показали два последних practice test.',
    kk: 'Соңғы екі practice test көрсеткен нәрседен құралған соңғы күрделі жинақ.' } },
  'T2': { rule: {
    en: 'Pacing rather than content: Module 2 decisions, Desmos against algebra, and what to skip.',
    ru: 'Не содержание, а темп: решения в Модуле 2, Desmos против алгебры и что пропускать.',
    kk: 'Мазмұн емес, қарқын: 2-модульдегі шешімдер, Desmos пен алгебра және нені өткізіп жіберу.' } },
  'T3': { rule: {
    en: 'Light review of the error log, the formulas and the rules — no new material in the week of the test.',
    ru: 'Лёгкий повтор error log, формул и правил — на неделе теста ничего нового.',
    kk: 'Error log, формулалар мен ережелерді жеңіл қайталау — тест аптасында жаңа ештеңе жоқ.' } }
};
