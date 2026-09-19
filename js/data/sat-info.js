/* ==========================================================================
   Onboarding content: what the Digital SAT is, before a student is asked to
   prepare for it.

   Six sections, each rendered by js/modules/onboarding.js. Section weights are
   NOT stored here — the Reading and Writing and Math sections read them from
   the live skill taxonomy, so the numbers a student is taught cannot drift
   away from the numbers the planner and the mock use.

   IMPORTANT — verification. The College Board rules quoted here (ID, device,
   Bluebook setup, what is not allowed) are the standing international rules
   and change rarely. Fees, deadlines and the list of test centres in
   Kazakhstan change every cycle and are DELIBERATELY not stated: the screen
   sends the student to collegeboard.org instead of printing a number that
   will be wrong by next year. satInfoMeta.verified stays false until JTS has
   checked this text against the official site for the current cycle.
   ========================================================================== */
window.JTS = window.JTS || {}; JTS.data = JTS.data || {};

JTS.data.satInfoMeta = {
  verified: false,
  source: 'College Board published rules, paraphrased by JTS',
  checkedAt: null
};

JTS.data.satInfo = [
  /* ------------------------------------------------------------ 1. about */
  {
    id: 'about',
    lead: {
      en: 'The SAT is the entrance exam most universities in the United States, and a growing number elsewhere, use to compare applicants who studied under different school systems. Since 2023 it is taken on a laptop or tablet in the Bluebook app, not on paper.',
      ru: 'SAT — вступительный экзамен, по которому большинство университетов США и всё больше вузов в других странах сравнивают абитуриентов, учившихся в разных школьных системах. С 2023 года его сдают на ноутбуке или планшете в приложении Bluebook, а не на бумаге.',
      kk: 'SAT — АҚШ университеттерінің басым бөлігі және басқа елдердегі барған сайын көбірек жоғары оқу орны әртүрлі мектеп жүйесінде оқыған талапкерлерді салыстыру үшін қолданатын түсу емтиханы. 2023 жылдан бері ол қағазда емес, ноутбукте немесе планшетте Bluebook қосымшасында тапсырылады.'
    },
    stats: [
      { value: '400–1600', label: { en: 'Score range', ru: 'Диапазон баллов', kk: 'Балл ауқымы' } },
      { value: { en: '2h 14m', ru: '2 ч 14 м', kk: '2 сағ 14 мин' },
        label: { en: 'Testing time', ru: 'Время на экзамен', kk: 'Емтихан уақыты' } },
      { value: '98', label: { en: 'Questions', ru: 'Вопросов', kk: 'Сұрақ' } }
    ],
    points: [
      {
        en: '<b>Two sections.</b> Reading and Writing, then Math. Each is scored 200–800 and the two are added together.',
        ru: '<b>Две секции.</b> Reading and Writing, затем Math. Каждая оценивается в 200–800 баллов, они складываются.',
        kk: '<b>Екі секция.</b> Reading and Writing, содан кейін Math. Әрқайсысы 200–800 балмен бағаланады, екеуі қосылады.'
      },
      {
        en: '<b>It is adaptive.</b> Each section has two modules, and the second one is chosen by how you did on the first. Doing well on module 1 is what opens the upper half of the scale.',
        ru: '<b>Он адаптивный.</b> В каждой секции два модуля, и второй подбирается по результату первого. Именно хороший первый модуль открывает верхнюю половину шкалы.',
        kk: '<b>Ол бейімделгіш.</b> Әр секцияда екі модуль бар, екіншісі біріншінің нәтижесі бойынша таңдалады. Дәл жақсы бірінші модуль шкаланың жоғарғы жартысын ашады.'
      },
      {
        en: '<b>No penalty for guessing.</b> A wrong answer costs the same as a blank, so never leave a question empty.',
        ru: '<b>За неверный ответ не штрафуют.</b> Ошибка стоит столько же, сколько пропуск, поэтому пустых вопросов оставлять нельзя.',
        kk: '<b>Қате жауап үшін айып салынбайды.</b> Қате де, бос қалдыру да бірдей тұрады, сондықтан бірде-бір сұрақты бос қалдырмаңыз.'
      },
      {
        en: '<b>You can retake it.</b> Most students sit the SAT two or three times and send their best result.',
        ru: '<b>Его можно пересдавать.</b> Большинство сдаёт SAT два-три раза и отправляет лучший результат.',
        kk: '<b>Оны қайта тапсыруға болады.</b> Көпшілік SAT-ты екі-үш рет тапсырып, ең жақсы нәтижесін жібереді.'
      }
    ]
  },

  /* -------------------------------------------------------- 2. structure */
  {
    id: 'structure',
    lead: {
      en: 'The whole exam is four modules and one break. The clock is per module: time left over in module 1 does not carry into module 2, and a module closes itself when its time runs out.',
      ru: 'Весь экзамен — это четыре модуля и один перерыв. Таймер у каждого модуля свой: сэкономленное в первом модуле время во второй не переносится, а по истечении времени модуль закрывается сам.',
      kk: 'Бүкіл емтихан — төрт модуль және бір үзіліс. Таймер әр модульде бөлек: бірінші модульде үнемделген уақыт екіншісіне көшпейді, ал уақыт біткенде модуль өзі жабылады.'
    },
    timeline: [
      { key: 'rw1', label: 'Reading and Writing · 1', q: 27, min: 32 },
      { key: 'rw2', label: 'Reading and Writing · 2', q: 27, min: 32, adaptive: true },
      { key: 'break', label: 'Break', q: 0, min: 10 },
      { key: 'm1', label: 'Math · 1', q: 22, min: 35 },
      { key: 'm2', label: 'Math · 2', q: 22, min: 35, adaptive: true }
    ],
    points: [
      {
        en: 'That works out to about <b>71 seconds</b> per Reading and Writing question and <b>95 seconds</b> per Math question. Those are the pace benchmarks this platform measures you against.',
        ru: 'Это примерно <b>71 секунда</b> на вопрос Reading and Writing и <b>95 секунд</b> на вопрос Math. Именно с этими эталонами платформа сравнивает вашу скорость.',
        kk: 'Бұл шамамен Reading and Writing сұрағына <b>71 секунд</b> және Math сұрағына <b>95 секунд</b> береді. Платформа сіздің жылдамдығыңызды дәл осы эталондармен салыстырады.'
      },
      {
        en: 'You cannot go back to a module once it is finished, but inside a module you can move freely, flag questions and return to them.',
        ru: 'Вернуться в закрытый модуль нельзя, но внутри модуля можно свободно перемещаться, отмечать вопросы и возвращаться к ним.',
        kk: 'Жабылған модульге оралу мүмкін емес, бірақ модуль ішінде еркін жүруге, сұрақтарды белгілеп, оларға қайта оралуға болады.'
      },
      {
        en: 'The 10-minute break sits between the two sections. You may leave your seat; the timer does not stop.',
        ru: '10-минутный перерыв — между секциями. Со своего места можно встать; таймер при этом не останавливается.',
        kk: '10 минуттық үзіліс секциялар арасында. Орныңыздан тұруға болады; таймер тоқтамайды.'
      }
    ]
  },

  /* ------------------------------------------------------------- 3. goal */
  {
    id: 'goal',
    lead: {
      en: 'A target is a decision, not a prediction. Pick it from the universities you are actually applying to — their published middle-50% range is the honest reference — and this platform will plan backwards from it.',
      ru: 'Цель — это решение, а не прогноз. Выбирайте её по университетам, куда вы действительно подаёте: их опубликованный диапазон middle-50% — честный ориентир, и платформа построит план от него назад.',
      kk: 'Мақсат — бұл шешім, болжам емес. Оны шынымен құжат тапсыратын университеттеріңізге қарап таңдаңыз: олардың жариялаған middle-50% ауқымы — адал бағдар, платформа жоспарды содан кері қарай құрады.'
    },
    points: [
      {
        en: 'Middle 50% means half of the admitted students scored inside that range — a quarter scored below it and a quarter above.',
        ru: 'Middle 50% значит, что половина поступивших набрала балл внутри этого диапазона: четверть — ниже, четверть — выше.',
        kk: 'Middle 50% дегеніміз — қабылданғандардың жартысы осы ауқым ішінде балл жинаған: төрттен бірі төмен, төрттен бірі жоғары.'
      },
      {
        en: 'Aiming at the top of the range rather than the middle is reasonable; aiming 300 points above anything you have measured is not a plan, it is a wish.',
        ru: 'Целиться в верх диапазона, а не в середину — разумно; целиться на 300 баллов выше всего, что вы измеряли, — это не план, а желание.',
        kk: 'Ауқымның ортасына емес, жоғарғы шетіне ұмтылу — орынды; өлшегеніңізден 300 балл жоғары мақсат қою — жоспар емес, тілек.'
      }
    ]
  },

  /* --------------------------------------------------- 4. exam day in KZ */
  {
    id: 'examday',
    lead: {
      en: 'You register yourself, online, through a College Board account. Test centres in Kazakhstan are schools and universities that have been approved to host the exam; which ones are open on which date changes every cycle, so pick the date first and the centre second.',
      ru: 'Регистрируетесь вы сами, онлайн, через аккаунт College Board. Центры тестирования в Казахстане — это школы и вузы, получившие разрешение принимать экзамен; какие из них открыты на какую дату, меняется каждый цикл, поэтому сначала выбирайте дату, потом центр.',
      kk: 'Тіркелуді өзіңіз, онлайн, College Board тіркелгісі арқылы жасайсыз. Қазақстандағы тестілеу орталықтары — емтихан қабылдауға рұқсат алған мектептер мен жоғары оқу орындары; қайсысы қай күні ашық екені әр циклде өзгереді, сондықтан алдымен күнді, содан кейін орталықты таңдаңыз.'
    },
    steps: [
      {
        en: 'Create an account on <b>collegeboard.org</b> with your name exactly as it appears in your passport.',
        ru: 'Создайте аккаунт на <b>collegeboard.org</b>, указав имя точно так, как оно написано в паспорте.',
        kk: '<b>collegeboard.org</b> сайтында тіркелгі жасаңыз, атыңызды паспорттағыдай дәл жазыңыз.'
      },
      {
        en: 'Register for a date, choose a test centre in Kazakhstan, upload a photo and pay the fee. International registration costs more than the base fee — check the current amount on the site.',
        ru: 'Зарегистрируйтесь на дату, выберите центр в Казахстане, загрузите фото и оплатите. Международная регистрация стоит дороже базовой — актуальную сумму смотрите на сайте.',
        kk: 'Күнге тіркеліп, Қазақстандағы орталықты таңдаңыз, фото жүктеп, төлем жасаңыз. Халықаралық тіркелу базалық құннан қымбат — ағымдағы соманы сайттан қараңыз.'
      },
      {
        en: 'Install <b>Bluebook</b> on the device you will bring and complete <b>exam setup</b> in it — this has to be done in the days before the exam, not on the morning.',
        ru: 'Установите <b>Bluebook</b> на устройство, которое возьмёте с собой, и пройдите в нём <b>exam setup</b> — это делается за несколько дней до экзамена, а не утром в день сдачи.',
        kk: 'Өзіңізбен алып баратын құрылғыға <b>Bluebook</b> орнатып, онда <b>exam setup</b> өтіңіз — мұны емтиханнан бірнеше күн бұрын жасау керек, тапсыратын күні таңертең емес.'
      },
      {
        en: 'Print your <b>admission ticket</b> after setup and keep it with your passport.',
        ru: 'После настройки распечатайте <b>admission ticket</b> и держите его вместе с паспортом.',
        kk: 'Баптаудан кейін <b>admission ticket</b> басып шығарып, оны паспортпен бірге сақтаңыз.'
      }
    ],
    bring: [
      { en: 'Passport — the standard ID for international test takers', ru: 'Паспорт — стандартное удостоверение для международных сдающих', kk: 'Паспорт — халықаралық тапсырушылар үшін стандартты құжат' },
      { en: 'Printed admission ticket', ru: 'Распечатанный admission ticket', kk: 'Басып шығарылған admission ticket' },
      { en: 'Your laptop or tablet, fully charged, with Bluebook installed and setup done', ru: 'Ноутбук или планшет, полностью заряженный, с установленным Bluebook и пройденной настройкой', kk: 'Толық зарядталған ноутбук немесе планшет, Bluebook орнатылған және баптауы өткен' },
      { en: 'Its charger — outlets are not guaranteed, but bring it anyway', ru: 'Зарядное устройство — розетку не гарантируют, но взять стоит', kk: 'Зарядтағышы — розетка кепілдендірілмейді, бірақ алып жүрген жөн' },
      { en: 'Pen or pencil for the scratch paper the centre gives you', ru: 'Ручка или карандаш для черновика, который выдадут в центре', kk: 'Орталық беретін қаралама қағазға арналған қалам немесе қарындаш' },
      { en: 'An approved calculator if you want one — Desmos is already inside Bluebook', ru: 'Разрешённый калькулятор, если хотите — Desmos уже встроен в Bluebook', kk: 'Қаласаңыз, рұқсат етілген калькулятор — Desmos Bluebook ішінде бар' },
      { en: 'Water and a snack for the break', ru: 'Вода и перекус на перерыв', kk: 'Үзіліске су және жеңіл тамақ' }
    ],
    avoid: [
      { en: 'Phone or smartwatch in reach — off and put away, or your score can be cancelled', ru: 'Телефон или смарт-часы под рукой — выключить и убрать, иначе результат могут аннулировать', kk: 'Қолжетімді жерде телефон немесе смарт-сағат — өшіріп, алып қою керек, әйтпесе нәтиже жойылуы мүмкін' },
      { en: 'Arriving at the time on the ticket — arrive earlier; doors close and late means not admitted', ru: 'Приезжать ко времени на билете — приезжайте раньше; двери закрывают, опоздавших не пускают', kk: 'Билеттегі уақытқа дәл келу — ертерек келіңіз; есік жабылады, кешіккендерді кіргізбейді' },
      { en: 'Your own scratch paper, notes or a second device', ru: 'Свой черновик, конспекты или второе устройство', kk: 'Өз қараламаңыз, конспект немесе екінші құрылғы' }
    ],
    links: [
      { label: { en: 'Register and see the dates', ru: 'Регистрация и даты', kk: 'Тіркелу және күндер' }, url: 'https://satsuite.collegeboard.org/sat/registration' },
      { label: { en: 'Download Bluebook', ru: 'Скачать Bluebook', kk: 'Bluebook жүктеу' }, url: 'https://bluebook.collegeboard.org/' },
      { label: { en: 'What to bring, in full', ru: 'Полный список того, что брать', kk: 'Не әкелу керектігінің толық тізімі' }, url: 'https://satsuite.collegeboard.org/sat/what-to-bring-do' }
    ]
  },

  /* ---------------------------------------------------------- 5. verbal */
  {
    id: 'verbal',
    section: 'rw',
    lead: {
      en: 'Reading and Writing is 54 questions in 64 minutes, and every one of them is a short passage of its own — usually 25 to 150 words — with a single question after it. There is no long text with ten questions hanging off it any more.',
      ru: 'Reading and Writing — это 54 вопроса за 64 минуты, и у каждого свой короткий текст, обычно 25–150 слов, с одним вопросом после него. Длинных текстов с десятком вопросов больше нет.',
      kk: 'Reading and Writing — 64 минутта 54 сұрақ, әрқайсысының өз қысқа мәтіні бар, әдетте 25–150 сөз, одан кейін бір сұрақ. Он сұрақ ілінген ұзын мәтіндер енді жоқ.'
    },
    points: [
      {
        en: 'Questions come in domain order: Information and Ideas first, Standard English Conventions last. Knowing that tells you where you are in the module without counting.',
        ru: 'Вопросы идут по доменам: сначала Information and Ideas, в конце Standard English Conventions. Зная это, вы понимаете, где находитесь в модуле, не считая номера.',
        kk: 'Сұрақтар домен бойынша жүреді: алдымен Information and Ideas, соңында Standard English Conventions. Мұны білсеңіз, нөмірді санамай-ақ модульдің қай жерінде екеніңізді түсінесіз.'
      },
      {
        en: 'Every question is four options and exactly one defensible answer. The other three are wrong for a reason you can name — this platform shows you that reason for each of them.',
        ru: 'В каждом вопросе четыре варианта и ровно один защитимый ответ. Остальные три неверны по причине, которую можно назвать, — платформа показывает эту причину для каждого.',
        kk: 'Әр сұрақта төрт нұсқа және дәл бір қорғауға болатын жауап бар. Қалған үшеуі атауға болатын себеппен қате — платформа әрқайсысы үшін сол себепті көрсетеді.'
      },
      {
        en: 'Vocabulary is tested in context, not as a list. A word you half-know plus the sentence around it is usually enough.',
        ru: 'Лексика проверяется в контексте, а не списком. Полузнакомого слова плюс окружающего предложения обычно достаточно.',
        kk: 'Лексика тізіммен емес, контексте тексеріледі. Жартылай таныс сөз және айналасындағы сөйлем әдетте жеткілікті.'
      }
    ]
  },

  /* ------------------------------------------------------------ 6. math */
  {
    id: 'math',
    section: 'math',
    lead: {
      en: 'Math is 44 questions in 70 minutes. About three quarters are multiple choice; the rest are student-produced responses, where you type the answer yourself and there are no options to work backwards from.',
      ru: 'Math — 44 вопроса за 70 минут. Примерно три четверти — с вариантами; остальные student-produced response, где ответ вводится вручную и вариантов, от которых можно идти обратно, нет.',
      kk: 'Math — 70 минутта 44 сұрақ. Шамамен төрттен үші — нұсқалы; қалғаны student-produced response, онда жауапты өзіңіз тересіз және кері жүруге болатын нұсқалар жоқ.'
    },
    points: [
      {
        en: '<b>Desmos is built in</b> and available for the whole Math section. It is worth an hour of practice: it turns many questions into "graph both sides and click the crossing".',
        ru: '<b>Desmos встроен</b> и доступен всю математическую секцию. Час практики с ним окупается: многие задачи превращаются в «построй обе части и кликни пересечение».',
        kk: '<b>Desmos кіріктірілген</b> және бүкіл математика секциясында қолжетімді. Онымен бір сағат жаттығу өтелетін: көп есеп «екі жағын да сызып, қиылысты бас» дегенге айналады.'
      },
      {
        en: 'A reference sheet with the standard formulas is on screen throughout, so memorising areas and volumes is not what this section rewards.',
        ru: 'Справочный лист со стандартными формулами всё время на экране, поэтому зубрить площади и объёмы эта секция не вознаграждает.',
        kk: 'Стандартты формулалары бар анықтамалық парақ үнемі экранда тұрады, сондықтан бұл секция аудандар мен көлемдерді жаттауды марапаттамайды.'
      },
      {
        en: 'Grid-in answers have rules: at most five characters, no percent or currency signs, and a fraction or a decimal but never a mixed number.',
        ru: 'У ответов с ручным вводом есть правила: не больше пяти символов, без знаков процента и валюты, дробь или десятичная запись, но никогда смешанное число.',
        kk: 'Қолмен енгізілетін жауаптардың ережелері бар: бес таңбадан аспайды, пайыз және валюта белгілерісіз, бөлшек немесе ондық жазу, бірақ ешқашан аралас сан емес.'
      }
    ]
  }
];
