/* Math — Problem Solving and Data Analysis (m.psda.*). 50 original items. */

/* ---- m.psda.ratios (10) -------------------------------------------------- */
(function () {
  var M = JTS.data.jtsMeta;
  JTS.data.addQuestions([

  { id: "m-rat-p01", skillId: "m.psda.ratios", section: "math", difficulty: 2, type: "mcq",
    stem: "A recipe uses flour and sugar in the ratio 7 : 3 by mass. A baker uses 2.1 kilograms of flour. How many kilograms of sugar are needed?",
    options: ["0.6", "0.9", "1.4", "4.9"],
    answer: "B",
    explanation: {
      en: "2.1 / 7 = 0.3 kg per ratio unit, so sugar is 3 &times; 0.3 = 0.9 kg.",
      ru: "2,1 / 7 = 0,3 кг на одну долю, значит сахара 3 · 0,3 = 0,9 кг.",
      kk: "2,1 / 7 = 0,3 кг бір үлеске, демек қант 3 · 0,3 = 0,9 кг." },
    distractors: {
      A: { en: "Divides by 3 and multiplies by 7 the wrong way round.",
           ru: "Делит на 3 и умножает на 7 в обратном порядке.",
           kk: "3-ке бөліп, 7-ге көбейтуді кері тәртіпте жасайды." },
      C: { en: "Takes two-thirds of the flour instead of using the ratio.",
           ru: "Берёт две трети муки вместо использования отношения.",
           kk: "Қатынасты қолданудың орнына ұнның үштен екісін алады." },
      D: { en: "Multiplies the flour by 7/3 instead of by 3/7.",
           ru: "Умножает муку на 7/3 вместо 3/7.",
           kk: "Ұнды 3/7-нің орнына 7/3-ке көбейтеді." } },
    hints: [{ en: "Find the value of one ratio unit first.",
              ru: "Сначала найдите величину одной доли отношения.",
              kk: "Алдымен қатынастың бір үлесінің шамасын табыңыз." }],
    calculator: true, meta: M("m-rat-p01") },

  { id: "m-rat-p02", skillId: "m.psda.ratios", section: "math", difficulty: 1, type: "mcq",
    stem: "On a map, 1 centimetre represents 25 kilometres. Two towns are 7.4 centimetres apart on the map. What is the actual distance between them, in kilometres?",
    options: ["32.4", "110", "185", "250"],
    answer: "C",
    explanation: {
      en: "7.4 &times; 25 = 185 kilometres.",
      ru: "7,4 · 25 = 185 километров.",
      kk: "7,4 · 25 = 185 километр." },
    hints: [{ en: "Each centimetre stands for 25 km, so multiply.",
              ru: "Каждый сантиметр — это 25 км, поэтому умножайте.",
              kk: "Әр сантиметр — 25 км, сондықтан көбейтіңіз." }],
    calculator: true, meta: M("m-rat-p02") },

  { id: "m-rat-p03", skillId: "m.psda.ratios", section: "math", difficulty: 2, type: "spr",
    stem: "A recipe for 6 servings uses 450 grams of rice. At the same rate, how many grams of rice are needed for 10 servings?",
    answer: ["750"],
    explanation: {
      en: "450 / 6 = 75 grams per serving, so 10 servings need 750 grams.",
      ru: "450 / 6 = 75 г на порцию, значит на 10 порций нужно 750 г.",
      kk: "450 / 6 = 75 г бір порцияға, демек 10 порцияға 750 г керек." },
    hints: [{ en: "Find the amount for one serving, then scale up.",
              ru: "Найдите количество на одну порцию, затем умножьте.",
              kk: "Бір порцияға мөлшерді тауып, сосын көбейтіңіз." }],
    calculator: true, meta: M("m-rat-p03") },

  { id: "m-rat-p04", skillId: "m.psda.ratios", section: "math", difficulty: 3, type: "mcq",
    stem: "Machine A produces 120 parts in 8 minutes. Machine B produces 90 parts in 5 minutes. If both machines run at these rates at the same time, how many parts do they produce together in 20 minutes?",
    options: ["330", "420", "660", "1,050"],
    answer: "C",
    explanation: {
      en: "A makes 15 parts per minute and B makes 18, so together 33 per minute; 33 &times; 20 = 660.",
      ru: "A делает 15 деталей в минуту, B — 18, вместе 33 в минуту; 33 · 20 = 660.",
      kk: "A минутына 15 бөлшек, B — 18, бірге 33; 33 · 20 = 660." },
    distractors: {
      A: { en: "Uses only one machine's rate for the full 20 minutes.",
           ru: "Берёт производительность лишь одной машины на все 20 минут.",
           kk: "20 минутқа тек бір машинаның өнімділігін алады." },
      B: { en: "Adds the two given totals without converting to a common time.",
           ru: "Складывает исходные количества, не приведя к общему времени.",
           kk: "Ортақ уақытқа келтірмей, берілген сандарды қосады." },
      D: { en: "Adds the rates but then multiplies by the wrong interval.",
           ru: "Складывает производительности, но умножает на неверный интервал.",
           kk: "Өнімділіктерді қосады, бірақ қате аралыққа көбейтеді." } },
    hints: [{ en: "Convert each machine to parts per minute before combining.",
              ru: "Приведите обе машины к деталям в минуту, прежде чем складывать.",
              kk: "Қоспас бұрын екі машинаны да минутына бөлшекке келтіріңіз." }],
    calculator: true, meta: M("m-rat-p04") },

  { id: "m-rat-p05", skillId: "m.psda.ratios", section: "math", difficulty: 2, type: "mcq",
    stem: "In a class, the ratio of students who cycle to school to those who walk is 4 : 5. If 36 students cycle, how many walk?",
    options: ["29", "40", "45", "81"],
    answer: "C",
    explanation: {
      en: "36 / 4 = 9 students per ratio unit, so those who walk number 5 &times; 9 = 45.",
      ru: "36 / 4 = 9 учеников на долю, значит пешком ходят 5 · 9 = 45.",
      kk: "36 / 4 = 9 оқушы бір үлеске, демек жаяу жүретіндер 5 · 9 = 45." },
    hints: [{ en: "Scale the whole ratio by the same factor.",
              ru: "Умножьте всё отношение на один и тот же множитель.",
              kk: "Бүкіл қатынасты бір көбейткішке көбейтіңіз." }],
    calculator: true, meta: M("m-rat-p05") },

  { id: "m-rat-p06", skillId: "m.psda.ratios", section: "math", difficulty: 1, type: "spr",
    stem: "If 5 identical pens cost 1,750 tenge, what is the cost, in tenge, of 8 of these pens?",
    answer: ["2800"],
    explanation: {
      en: "1,750 / 5 = 350 tenge per pen, so 8 pens cost 2,800 tenge.",
      ru: "1 750 / 5 = 350 тенге за ручку, значит 8 ручек стоят 2 800 тенге.",
      kk: "1 750 / 5 = 350 теңге бір қаламға, демек 8 қалам 2 800 теңге." },
    hints: [{ en: "Unit price first, then multiply.",
              ru: "Сначала цена за единицу, потом умножение.",
              kk: "Алдымен бірлік бағасы, сосын көбейту." }],
    calculator: true, meta: M("m-rat-p06") },

  { id: "m-rat-p07", skillId: "m.psda.ratios", section: "math", difficulty: 3, type: "mcq",
    stem: "A vehicle travels 240 kilometres in 3 hours and then 150 kilometres in 2 hours. What is its average speed for the whole journey, in kilometres per hour?",
    options: ["75", "77.5", "78", "80"],
    answer: "C",
    explanation: {
      en: "Average speed is total distance over total time: 390 / 5 = 78 km/h.",
      ru: "Средняя скорость — весь путь на всё время: 390 / 5 = 78 км/ч.",
      kk: "Орташа жылдамдық — жалпы жол жалпы уақытқа: 390 / 5 = 78 км/сағ." },
    distractors: {
      A: { en: "The speed of the second leg alone.",
           ru: "Скорость только на втором участке.",
           kk: "Тек екінші бөліктің жылдамдығы." },
      B: { en: "Averages the two speeds (80 and 75), which is only valid for equal times.",
           ru: "Усредняет две скорости (80 и 75), что верно лишь при равном времени.",
           kk: "Екі жылдамдықты (80 және 75) орташалайды, бұл тек уақыт тең болғанда дұрыс." },
      D: { en: "The speed of the first leg alone.",
           ru: "Скорость только на первом участке.",
           kk: "Тек бірінші бөліктің жылдамдығы." } },
    hints: [{ en: "Never average speeds directly. Add the distances and add the times.",
              ru: "Никогда не усредняйте скорости напрямую. Сложите расстояния и время.",
              kk: "Жылдамдықтарды тікелей орташаламаңыз. Қашықтық пен уақытты қосыңыз." }],
    calculator: true, meta: M("m-rat-p07") },

  { id: "m-rat-p08", skillId: "m.psda.ratios", section: "math", difficulty: 2, type: "mcq",
    stem: "The ratio of a to b is 3 : 8. If b = 56, what is the value of a?",
    options: ["7", "21", "24", "149"],
    answer: "B",
    explanation: {
      en: "56 / 8 = 7 per ratio unit, so a = 3 &times; 7 = 21.",
      ru: "56 / 8 = 7 на долю, значит a = 3 · 7 = 21.",
      kk: "56 / 8 = 7 бір үлеске, демек a = 3 · 7 = 21." },
    hints: [{ en: "Work out what one part of the ratio is worth.",
              ru: "Определите, чему равна одна часть отношения.",
              kk: "Қатынастың бір бөлігі неге тең екенін анықтаңыз." }],
    calculator: true, meta: M("m-rat-p08") },

  { id: "m-rat-p09", skillId: "m.psda.ratios", section: "math", difficulty: 3, type: "spr",
    stem: "Two meshed gears have radii in the ratio 2 : 5. When the smaller gear makes 45 complete turns, how many complete turns does the larger gear make?",
    answer: ["18"],
    explanation: {
      en: "Meshed gears cover the same arc length, so turns are inversely proportional to radius: 2 &times; 45 = 5 &times; n gives n = 18.",
      ru: "Сцепленные шестерни проходят одинаковую длину дуги, поэтому число оборотов обратно пропорционально радиусу: 2 · 45 = 5 · n, значит n = 18.",
      kk: "Ілінген тісті дөңгелектер бірдей доға ұзындығын өтеді, сондықтан айналым саны радиусқа кері пропорционал: 2 · 45 = 5 · n, демек n = 18." },
    hints: [{ en: "A bigger gear turns fewer times, not more. The relationship is inverse.",
              ru: "Большая шестерня делает меньше оборотов, а не больше. Зависимость обратная.",
              kk: "Үлкен дөңгелек аз айналады, көп емес. Тәуелділік кері." }],
    calculator: true, meta: M("m-rat-p09") },

  { id: "m-rat-p10", skillId: "m.psda.ratios", section: "math", difficulty: 2, type: "mcq",
    stem: "A car consumes 7.5 litres of fuel per 100 kilometres. At this rate, how many litres does it consume over 340 kilometres?",
    options: ["22.7", "25.5", "45.3", "2,550"],
    answer: "B",
    explanation: {
      en: "7.5 &times; 3.4 = 25.5 litres.",
      ru: "7,5 · 3,4 = 25,5 литра.",
      kk: "7,5 · 3,4 = 25,5 литр." },
    hints: [{ en: "340 km is 3.4 times the 100 km the rate is given for.",
              ru: "340 км — это 3,4 от тех 100 км, для которых задан расход.",
              kk: "340 км — шығын берілген 100 км-дің 3,4 еселігі." }],
    calculator: true, meta: M("m-rat-p10") }

  ]);
})();

/* ---- m.psda.percentages (10) --------------------------------------------- */
(function () {
  var M = JTS.data.jtsMeta;
  JTS.data.addQuestions([

  { id: "m-pct-01", skillId: "m.psda.percentages", section: "math", difficulty: 2, type: "spr",
    stem: "The price of a phone was reduced by 20 percent, and the reduced price was then reduced by a further 15 percent. The final price is what percent of the original price? (Enter the value without the percent sign.)",
    answer: ["68"],
    explanation: {
      en: "0.80 &times; 0.85 = 0.68, so the final price is 68 percent of the original.",
      ru: "0,80 · 0,85 = 0,68, значит итоговая цена — 68% от исходной.",
      kk: "0,80 · 0,85 = 0,68, демек соңғы баға бастапқының 68%-ы." },
    hints: [{ en: "Percent changes multiply; they do not add.",
              ru: "Процентные изменения перемножаются, а не складываются.",
              kk: "Пайыздық өзгерістер көбейтіледі, қосылмайды." }],
    calculator: true, meta: M("m-pct-01") },

  { id: "m-pct-02", skillId: "m.psda.percentages", section: "math", difficulty: 1, type: "mcq",
    stem: "What is 15 percent of 240?",
    options: ["16", "36", "160", "1,600"],
    answer: "B",
    explanation: {
      en: "0.15 &times; 240 = 36.",
      ru: "0,15 · 240 = 36.",
      kk: "0,15 · 240 = 36." },
    hints: [{ en: "Convert the percent to a decimal, then multiply.",
              ru: "Переведите проценты в десятичную дробь и умножьте.",
              kk: "Пайызды ондық бөлшекке айналдырып, көбейтіңіз." }],
    calculator: true, meta: M("m-pct-02") },

  { id: "m-pct-03", skillId: "m.psda.percentages", section: "math", difficulty: 2, type: "mcq",
    stem: "The price of a product rose from 8,000 tenge to 9,200 tenge. What was the percent increase?",
    options: ["12", "13", "15", "20"],
    answer: "C",
    explanation: {
      en: "The increase is 1,200, and 1,200 / 8,000 = 0.15, which is 15 percent.",
      ru: "Прирост 1 200, и 1 200 / 8 000 = 0,15, то есть 15%.",
      kk: "Өсім 1 200, ал 1 200 / 8 000 = 0,15, яғни 15%." },
    distractors: {
      A: { en: "Divides the increase by the new price instead of the old one.",
           ru: "Делит прирост на новую цену вместо старой.",
           kk: "Өсімді ескі бағаға емес, жаңасына бөледі." },
      B: { en: "An approximation of the same error.",
           ru: "Приближение той же ошибки.",
           kk: "Сол қатенің жуықтауы." },
      D: { en: "Comes from dividing 1,200 by 6,000, which is not either price.",
           ru: "Получается делением 1 200 на 6 000 — это не одна из цен.",
           kk: "1 200-ді 6 000-ға бөлуден шығады — бұл бағалардың бірі емес." } },
    hints: [{ en: "Percent change is always measured against the original value.",
              ru: "Процентное изменение всегда считается от исходного значения.",
              kk: "Пайыздық өзгеріс әрқашан бастапқы мәннен есептеледі." }],
    calculator: true, meta: M("m-pct-03") },

  { id: "m-pct-04", skillId: "m.psda.percentages", section: "math", difficulty: 3, type: "mcq",
    stem: "After a discount of 25 percent, an item costs 13,500 tenge. What was its price, in tenge, before the discount?",
    options: ["10,125", "16,875", "18,000", "54,000"],
    answer: "C",
    explanation: {
      en: "13,500 is 75 percent of the original, so the original is 13,500 / 0.75 = 18,000.",
      ru: "13 500 — это 75% исходной цены, значит исходная равна 13 500 / 0,75 = 18 000.",
      kk: "13 500 — бастапқының 75%-ы, демек бастапқысы 13 500 / 0,75 = 18 000." },
    distractors: {
      A: { en: "Takes 25 percent off again instead of reversing the discount.",
           ru: "Снова снимает 25% вместо того, чтобы обратить скидку.",
           kk: "Жеңілдікті кері қайтарудың орнына тағы 25% алып тастайды." },
      B: { en: "Adds 25 percent of the discounted price, which is not the reverse operation.",
           ru: "Прибавляет 25% от сниженной цены, а это не обратная операция.",
           kk: "Жеңілдетілген бағаның 25%-ын қосады, бұл кері амал емес." },
      D: { en: "Divides by 0.25 instead of 0.75.",
           ru: "Делит на 0,25 вместо 0,75.",
           kk: "0,75-тің орнына 0,25-ке бөледі." } },
    hints: [{ en: "What fraction of the original price is left after a 25 percent discount?",
              ru: "Какая доля исходной цены остаётся после скидки 25%?",
              kk: "25% жеңілдіктен кейін бастапқы бағаның қандай үлесі қалады?" }],
    calculator: true, meta: M("m-pct-04") },

  { id: "m-pct-05", skillId: "m.psda.percentages", section: "math", difficulty: 2, type: "spr",
    stem: "A test has 40 questions. A student answers 34 of them correctly. What percent of the questions did the student answer correctly? (Enter the value without the percent sign.)",
    answer: ["85"],
    explanation: {
      en: "34 / 40 = 0.85, which is 85 percent.",
      ru: "34 / 40 = 0,85, то есть 85%.",
      kk: "34 / 40 = 0,85, яғни 85%." },
    hints: [{ en: "Divide the part by the whole, then multiply by 100.",
              ru: "Разделите часть на целое и умножьте на 100.",
              kk: "Бөлікті бүтінге бөліп, 100-ге көбейтіңіз." }],
    calculator: true, meta: M("m-pct-05") },

  { id: "m-pct-06", skillId: "m.psda.percentages", section: "math", difficulty: 3, type: "mcq",
    stem: "A quantity increases by 10 percent and then decreases by 10 percent. What is the overall percent change from its original value?",
    options: ["An increase of 1 percent", "No change", "A decrease of 1 percent", "A decrease of 10 percent"],
    answer: "C",
    explanation: {
      en: "1.10 &times; 0.90 = 0.99, so the quantity ends at 99 percent of its original value — a 1 percent decrease.",
      ru: "1,10 · 0,90 = 0,99, значит величина составляет 99% исходной — уменьшение на 1%.",
      kk: "1,10 · 0,90 = 0,99, демек шама бастапқының 99%-ы — 1% азаю." },
    distractors: {
      A: { en: "Right size, wrong direction.",
           ru: "Верная величина, неверное направление.",
           kk: "Шамасы дұрыс, бағыты қате." },
      B: { en: "The 10 percent decrease is taken from a larger base than the increase was.",
           ru: "Снижение на 10% берётся от большей базы, чем был прирост.",
           kk: "10% азаю өсімнен үлкенірек базадан алынады." },
      D: { en: "Ignores the increase entirely.",
           ru: "Полностью игнорирует прирост.",
           kk: "Өсімді мүлде елемейді." } },
    hints: [{ en: "The second percentage is taken from a different, larger amount.",
              ru: "Второй процент берётся от другой, большей величины.",
              kk: "Екінші пайыз басқа, үлкенірек шамадан алынады." }],
    calculator: true, meta: M("m-pct-06") },

  { id: "m-pct-07", skillId: "m.psda.percentages", section: "math", difficulty: 1, type: "mcq",
    stem: "30 is what percent of 120?",
    options: ["4", "25", "30", "400"],
    answer: "B",
    explanation: {
      en: "30 / 120 = 0.25, which is 25 percent.",
      ru: "30 / 120 = 0,25, то есть 25%.",
      kk: "30 / 120 = 0,25, яғни 25%." },
    hints: [{ en: "'What percent of' means divide by the number after 'of'.",
              ru: "«Сколько процентов от» значит делить на число после «от».",
              kk: "«Неше пайызы» дегені — «неден» кейінгі санға бөлу." }],
    calculator: true, meta: M("m-pct-07") },

  { id: "m-pct-08", skillId: "m.psda.percentages", section: "math", difficulty: 2, type: "mcq",
    stem: "A shop adds value-added tax of 12 percent to a pre-tax price of 25,000 tenge. What is the total price, in tenge?",
    options: ["25,012", "26,200", "28,000", "37,000"],
    answer: "C",
    explanation: {
      en: "25,000 &times; 1.12 = 28,000.",
      ru: "25 000 · 1,12 = 28 000.",
      kk: "25 000 · 1,12 = 28 000." },
    hints: [{ en: "Adding 12 percent means multiplying by 1.12.",
              ru: "Прибавить 12% — значит умножить на 1,12.",
              kk: "12% қосу — 1,12-ге көбейту." }],
    calculator: true, meta: M("m-pct-08") },

  { id: "m-pct-09", skillId: "m.psda.percentages", section: "math", difficulty: 3, type: "spr",
    stem: "The number of subscribers to a service grew from 1,250 to 1,500. By what percent did the number of subscribers increase? (Enter the value without the percent sign.)",
    answer: ["20"],
    explanation: {
      en: "The increase is 250, and 250 / 1,250 = 0.20, which is 20 percent.",
      ru: "Прирост 250, и 250 / 1 250 = 0,20, то есть 20%.",
      kk: "Өсім 250, ал 250 / 1 250 = 0,20, яғни 20%." },
    hints: [{ en: "Divide the change by the starting value, not the ending one.",
              ru: "Делите изменение на начальное значение, а не на конечное.",
              kk: "Өзгерісті соңғы емес, бастапқы мәнге бөліңіз." }],
    calculator: true, meta: M("m-pct-09") },

  { id: "m-pct-10", skillId: "m.psda.percentages", section: "math", difficulty: 2, type: "mcq",
    stem: "In a class, 60 percent of the students are girls. If there are 12 boys in the class, how many students are there in total?",
    options: ["20", "24", "30", "36"],
    answer: "C",
    explanation: {
      en: "Boys make up 40 percent, so 0.40n = 12 and n = 30.",
      ru: "Мальчики составляют 40%, значит 0,40n = 12 и n = 30.",
      kk: "Ұлдар 40%-ды құрайды, демек 0,40n = 12 және n = 30." },
    distractors: {
      A: { en: "Divides 12 by 0.6 instead of by 0.4.",
           ru: "Делит 12 на 0,6 вместо 0,4.",
           kk: "12-ні 0,4-тің орнына 0,6-ға бөледі." },
      B: { en: "Doubles the number of boys.",
           ru: "Удваивает число мальчиков.",
           kk: "Ұлдар санын екі есе арттырады." },
      D: { en: "Comes from treating 12 as 33 percent of the class.",
           ru: "Получается, если считать 12 равными 33% класса.",
           kk: "12-ні сыныптың 33%-ы деп есептеуден шығады." } },
    hints: [{ en: "The 12 boys correspond to the percentage that is not girls.",
              ru: "12 мальчиков соответствуют той доле, которая не девочки.",
              kk: "12 ұл — қыздар емес үлеске сәйкес келеді." }],
    calculator: true, meta: M("m-pct-10") }

  ]);
})();

/* ---- m.psda.units (10) --------------------------------------------------- */
(function () {
  var M = JTS.data.jtsMeta;
  JTS.data.addQuestions([

  { id: "m-un-01", skillId: "m.psda.units", section: "math", difficulty: 2, type: "mcq",
    stem: "A car travels at a constant speed of 25 metres per second. What is this speed in kilometres per hour?",
    options: ["6.9", "45", "90", "1,500"],
    answer: "C",
    explanation: {
      en: "25 m/s &times; 3,600 s/h = 90,000 m/h = 90 km/h.",
      ru: "25 м/с · 3 600 с/ч = 90 000 м/ч = 90 км/ч.",
      kk: "25 м/с · 3 600 с/сағ = 90 000 м/сағ = 90 км/сағ." },
    distractors: {
      A: { en: "Divides by 3.6 instead of multiplying.",
           ru: "Делит на 3,6 вместо умножения.",
           kk: "Көбейтудің орнына 3,6-ға бөледі." },
      B: { en: "Converts the seconds but not the metres.",
           ru: "Переводит секунды, но не метры.",
           kk: "Секундты түрлендіреді, метрді емес." },
      D: { en: "Converts to metres per minute and stops there.",
           ru: "Переводит в метры в минуту и останавливается.",
           kk: "Минутына метрге айналдырып тоқтайды." } },
    hints: [{ en: "Multiply by 3,600 to go from seconds to hours, then divide by 1,000 for kilometres.",
              ru: "Умножьте на 3 600 для перехода к часам, затем разделите на 1 000 для километров.",
              kk: "Сағатқа көшу үшін 3 600-ге көбейтіп, километрге 1 000-ға бөліңіз." }],
    calculator: true, meta: M("m-un-01") },

  { id: "m-un-02", skillId: "m.psda.units", section: "math", difficulty: 1, type: "mcq",
    stem: "How many cubic centimetres are there in 2.5 litres? (1 litre = 1,000 cubic centimetres)",
    options: ["25", "250", "2,500", "25,000"],
    answer: "C",
    explanation: {
      en: "2.5 &times; 1,000 = 2,500 cubic centimetres.",
      ru: "2,5 · 1 000 = 2 500 кубических сантиметров.",
      kk: "2,5 · 1 000 = 2 500 текше сантиметр." },
    hints: [{ en: "The conversion factor is given in the question.",
              ru: "Коэффициент перевода дан в условии.",
              kk: "Түрлендіру коэффициенті шартта берілген." }],
    calculator: true, meta: M("m-un-02") },

  { id: "m-un-03", skillId: "m.psda.units", section: "math", difficulty: 2, type: "spr",
    stem: "A tank holds 4,500 millilitres of water. How many litres does it hold?",
    answer: ["4.5", "9/2"],
    explanation: {
      en: "There are 1,000 millilitres in a litre, so 4,500 / 1,000 = 4.5 litres.",
      ru: "В литре 1 000 миллилитров, значит 4 500 / 1 000 = 4,5 литра.",
      kk: "Бір литрде 1 000 миллилитр, демек 4 500 / 1 000 = 4,5 литр." },
    hints: [{ en: "Going from a smaller unit to a larger one means dividing.",
              ru: "Переход от меньшей единицы к большей — это деление.",
              kk: "Кіші бірліктен үлкенге көшу — бөлу." }],
    calculator: true, meta: M("m-un-03") },

  { id: "m-un-04", skillId: "m.psda.units", section: "math", difficulty: 3, type: "mcq",
    stem: "A field has an area of 3.2 hectares. What is its area in square metres? (1 hectare = 10,000 square metres)",
    options: ["320", "3,200", "32,000", "320,000"],
    answer: "C",
    explanation: {
      en: "3.2 &times; 10,000 = 32,000 square metres.",
      ru: "3,2 · 10 000 = 32 000 квадратных метров.",
      kk: "3,2 · 10 000 = 32 000 шаршы метр." },
    hints: [{ en: "Multiply, since a hectare is much larger than a square metre.",
              ru: "Умножайте, поскольку гектар гораздо больше квадратного метра.",
              kk: "Көбейтіңіз, өйткені гектар шаршы метрден әлдеқайда үлкен." }],
    calculator: true, meta: M("m-un-04") },

  { id: "m-un-05", skillId: "m.psda.units", section: "math", difficulty: 2, type: "mcq",
    stem: "A printer produces 18 pages per minute. How many pages does it produce in one hour, at the same rate?",
    options: ["108", "180", "1,080", "1,800"],
    answer: "C",
    explanation: {
      en: "18 &times; 60 = 1,080 pages.",
      ru: "18 · 60 = 1 080 страниц.",
      kk: "18 · 60 = 1 080 бет." },
    hints: [{ en: "There are 60 minutes in an hour.",
              ru: "В часе 60 минут.",
              kk: "Бір сағатта 60 минут бар." }],
    calculator: true, meta: M("m-un-05") },

  { id: "m-un-06", skillId: "m.psda.units", section: "math", difficulty: 3, type: "spr",
    stem: "A pipe delivers water at a constant rate of 0.75 litres per second. How many litres does it deliver in 20 minutes?",
    answer: ["900"],
    explanation: {
      en: "20 minutes is 1,200 seconds, and 0.75 &times; 1,200 = 900 litres.",
      ru: "20 минут — это 1 200 секунд, и 0,75 · 1 200 = 900 литров.",
      kk: "20 минут — 1 200 секунд, ал 0,75 · 1 200 = 900 литр." },
    hints: [{ en: "Convert the time to seconds first, because the rate is per second.",
              ru: "Сначала переведите время в секунды, ведь расход задан в секунду.",
              kk: "Алдымен уақытты секундқа айналдырыңыз, өйткені шығын секундпен берілген." }],
    calculator: true, meta: M("m-un-06") },

  { id: "m-un-07", skillId: "m.psda.units", section: "math", difficulty: 1, type: "mcq",
    stem: "What is 2,400 grams expressed in kilograms?",
    options: ["0.24", "2.4", "24", "240"],
    answer: "B",
    explanation: {
      en: "There are 1,000 grams in a kilogram, so 2,400 / 1,000 = 2.4 kilograms.",
      ru: "В килограмме 1 000 граммов, значит 2 400 / 1 000 = 2,4 кг.",
      kk: "Бір килограмда 1 000 грамм, демек 2 400 / 1 000 = 2,4 кг." },
    hints: [{ en: "Divide by 1,000 to move from grams to kilograms.",
              ru: "Разделите на 1 000, чтобы перейти от граммов к килограммам.",
              kk: "Граммнан килограмға көшу үшін 1 000-ға бөліңіз." }],
    calculator: true, meta: M("m-un-07") },

  { id: "m-un-08", skillId: "m.psda.units", section: "math", difficulty: 2, type: "mcq",
    stem: "A recipe calls for <span class=\"frac\"><span>3</span><span>4</span></span> of a litre of milk. How many millilitres is this?",
    options: ["75", "340", "750", "1,333"],
    answer: "C",
    explanation: {
      en: "0.75 &times; 1,000 = 750 millilitres.",
      ru: "0,75 · 1 000 = 750 миллилитров.",
      kk: "0,75 · 1 000 = 750 миллилитр." },
    hints: [{ en: "Turn the fraction into a decimal, then multiply by 1,000.",
              ru: "Переведите дробь в десятичную и умножьте на 1 000.",
              kk: "Бөлшекті ондыққа айналдырып, 1 000-ға көбейтіңіз." }],
    calculator: true, meta: M("m-un-08") },

  { id: "m-un-09", skillId: "m.psda.units", section: "math", difficulty: 3, type: "mcq",
    stem: "A machine consumes 2.5 kilowatt-hours of electricity for each hour it runs. Electricity costs 28 tenge per kilowatt-hour. What is the cost, in tenge, of running the machine for 6 hours?",
    options: ["168", "420", "1,050", "4,200"],
    answer: "B",
    explanation: {
      en: "6 hours use 2.5 &times; 6 = 15 kilowatt-hours, and 15 &times; 28 = 420 tenge.",
      ru: "За 6 часов расход 2,5 · 6 = 15 кВт·ч, и 15 · 28 = 420 тенге.",
      kk: "6 сағатта 2,5 · 6 = 15 кВт·сағ жұмсалады, ал 15 · 28 = 420 теңге." },
    distractors: {
      A: { en: "Multiplies the hourly price by 6 without the 2.5 factor.",
           ru: "Умножает цену на 6 без коэффициента 2,5.",
           kk: "Бағаны 2,5 коэффициентінсіз 6-ға көбейтеді." },
      C: { en: "Multiplies 2.5 by 28 by 15, double-counting the hours.",
           ru: "Умножает 2,5 на 28 и на 15, дважды учитывая часы.",
           kk: "2,5-ті 28-ге және 15-ке көбейтеді, сағатты екі рет есептейді." },
      D: { en: "Off by a factor of ten in the final multiplication.",
           ru: "Ошибка в десять раз в последнем умножении.",
           kk: "Соңғы көбейтуде он есе қате." } },
    hints: [{ en: "Find the total energy in kilowatt-hours first, then apply the price.",
              ru: "Сначала найдите суммарную энергию в кВт·ч, затем примените цену.",
              kk: "Алдымен кВт·сағ-пен жалпы энергияны тауып, сосын бағаны қолданыңыз." }],
    calculator: true, meta: M("m-un-09") },

  { id: "m-un-10", skillId: "m.psda.units", section: "math", difficulty: 2, type: "spr",
    stem: "A runner covers 1,500 metres in 4 minutes. What is the runner's average speed in metres per second?",
    answer: ["6.25", "25/4"],
    explanation: {
      en: "4 minutes is 240 seconds, and 1,500 / 240 = 6.25 metres per second.",
      ru: "4 минуты — 240 секунд, и 1 500 / 240 = 6,25 м/с.",
      kk: "4 минут — 240 секунд, ал 1 500 / 240 = 6,25 м/с." },
    hints: [{ en: "The units you want tell you which conversion to do first.",
              ru: "Нужные единицы подсказывают, какой перевод сделать первым.",
              kk: "Қажет бірліктер қай түрлендіруді бірінші жасау керегін айтады." }],
    calculator: true, meta: M("m-un-10") }

  ]);
})();

/* ---- m.psda.statistics (10) ---------------------------------------------- */
(function () {
  var M = JTS.data.jtsMeta;
  JTS.data.addQuestions([

  { id: "m-stat-01", skillId: "m.psda.statistics", section: "math", difficulty: 3, type: "mcq",
    stem: "A researcher surveyed 400 randomly selected residents of a city of 250,000 people and found that 62 percent supported a new bus route, with a margin of error of 4 percentage points at the 95 percent confidence level. Which conclusion is best supported by these results?",
    options: [
      "Exactly 62 percent of the city's residents support the new bus route.",
      "It is plausible that between 58 percent and 66 percent of the city's residents support the new bus route.",
      "At least 66 percent of the city's residents support the new bus route.",
      "The result cannot be generalised because only 400 people were surveyed."],
    answer: "B",
    explanation: {
      en: "The margin of error gives a plausible interval around the sample estimate: 62 &plusmn; 4 percentage points.",
      ru: "Погрешность задаёт правдоподобный интервал вокруг выборочной оценки: 62 &plusmn; 4 процентных пункта.",
      kk: "Қателік шегі іріктеме бағасының айналасында ықтимал аралық береді: 62 &plusmn; 4 пайыздық тармақ." },
    distractors: {
      A: { en: "A sample never pins down an exact population value; that is what the margin of error rules out.",
           ru: "Выборка никогда не даёт точного значения по популяции — именно это исключает погрешность.",
           kk: "Іріктеме ешқашан дәл мәнді бермейді — қателік шегі дәл соны жоққа шығарады." },
      C: { en: "66 is the top of the interval, not a lower bound.",
           ru: "66 — верхняя граница интервала, а не нижняя.",
           kk: "66 — аралықтың жоғарғы шегі, төменгісі емес." },
      D: { en: "Random selection is exactly what licenses generalisation; the sample size is reflected in the margin of error.",
           ru: "Случайный отбор как раз и позволяет обобщать; размер выборки уже учтён в погрешности.",
           kk: "Кездейсоқ іріктеу дәл жалпылауға мүмкіндік береді; іріктеме көлемі қателік шегінде ескерілген." } },
    hints: [{ en: "The margin of error tells you how far either side of the estimate to go.",
              ru: "Погрешность говорит, насколько отступить от оценки в обе стороны.",
              kk: "Қателік шегі бағадан екі жаққа қаншалық шегіну керегін айтады." }],
    calculator: true, meta: M("m-stat-01") },

  { id: "m-stat-02", skillId: "m.psda.statistics", section: "math", difficulty: 1, type: "mcq",
    stem: "What is the median of the data set 4, 7, 9, 12, 15?",
    options: ["7", "9", "9.4", "11"],
    answer: "B",
    explanation: {
      en: "With five values in order, the median is the third one: 9.",
      ru: "При пяти упорядоченных значениях медиана — третье: 9.",
      kk: "Бес реттелген мәнде медиана — үшіншісі: 9." },
    distractors: {
      A: { en: "The second value, not the middle one.",
           ru: "Второе значение, а не среднее по положению.",
           kk: "Екінші мән, ортаңғысы емес." },
      C: { en: "That is the mean, not the median.",
           ru: "Это среднее арифметическое, а не медиана.",
           kk: "Бұл — орташа арифметикалық, медиана емес." },
      D: { en: "Not a value in the set and not the middle position.",
           ru: "Такого значения в наборе нет, и это не срединная позиция.",
           kk: "Жиында мұндай мән жоқ әрі ол ортаңғы орын емес." } },
    hints: [{ en: "The median is a position, not a calculation.",
              ru: "Медиана — это позиция, а не вычисление.",
              kk: "Медиана — орын, есептеу емес." }],
    calculator: true, meta: M("m-stat-02") },

  { id: "m-stat-03", skillId: "m.psda.statistics", section: "math", difficulty: 2, type: "mcq",
    stem: "What is the mean of the data set 12, 15, 18, 23, 27?",
    options: ["18", "19", "20", "23"],
    answer: "B",
    explanation: {
      en: "The sum is 95 and there are five values, so the mean is 95 / 5 = 19.",
      ru: "Сумма 95, значений пять, значит среднее 95 / 5 = 19.",
      kk: "Қосындысы 95, мәндер саны бес, демек орташасы 95 / 5 = 19." },
    hints: [{ en: "Add every value, then divide by how many there are.",
              ru: "Сложите все значения и разделите на их количество.",
              kk: "Барлық мәнді қосып, санына бөліңіз." }],
    calculator: true, meta: M("m-stat-03") },

  { id: "m-stat-04", skillId: "m.psda.statistics", section: "math", difficulty: 2, type: "spr",
    stem: "The mean of five numbers is 14. Four of the numbers are 10, 12, 15 and 18. What is the fifth number?",
    answer: ["15"],
    explanation: {
      en: "The five numbers total 5 &times; 14 = 70. The four given numbers total 55, so the fifth is 15.",
      ru: "Сумма пяти чисел равна 5 · 14 = 70. Четыре данных дают 55, значит пятое — 15.",
      kk: "Бес санның қосындысы 5 · 14 = 70. Берілген төртеуі 55, демек бесіншісі — 15." },
    hints: [{ en: "Turn the mean back into a total first.",
              ru: "Сначала превратите среднее обратно в сумму.",
              kk: "Алдымен орташаны қайта қосындыға айналдырыңыз." }],
    calculator: true, meta: M("m-stat-04") },

  { id: "m-stat-05", skillId: "m.psda.statistics", section: "math", difficulty: 3, type: "mcq",
    stem: "Data set A is 10, 10, 10, 10 and data set B is 5, 10, 10, 15. Which statement about the two sets is true?",
    options: [
      "A and B have the same mean and the same standard deviation.",
      "A and B have the same mean, and B has the greater standard deviation.",
      "B has the greater mean and the greater standard deviation.",
      "A has the greater standard deviation because it has more repeated values."],
    answer: "B",
    explanation: {
      en: "Both sets have mean 10. Every value of A equals the mean, so its standard deviation is 0, while B's values are spread out.",
      ru: "Среднее обоих наборов равно 10. Все значения A равны среднему, поэтому стандартное отклонение 0, а значения B разбросаны.",
      kk: "Екі жиынның да орташасы 10. A-ның барлық мәні орташаға тең, сондықтан стандартты ауытқуы 0, ал B шашыраңқы." },
    distractors: {
      A: { en: "A has zero spread and B does not, so the deviations differ.",
           ru: "У A нулевой разброс, у B нет, поэтому отклонения различаются.",
           kk: "A-ның шашырауы нөл, B-ныкі емес, сондықтан ауытқулар әртүрлі." },
      C: { en: "The means are equal: both sets sum to 40 over four values.",
           ru: "Средние равны: сумма обоих наборов 40 при четырёх значениях.",
           kk: "Орташалары тең: екі жиынның қосындысы да төрт мәнде 40." },
      D: { en: "Repeated values that all equal the mean produce the smallest possible spread, not the largest.",
           ru: "Повторяющиеся значения, равные среднему, дают наименьший разброс, а не наибольший.",
           kk: "Орташаға тең қайталанатын мәндер ең үлкен емес, ең кіші шашырау береді." } },
    hints: [{ en: "Standard deviation measures distance from the mean. How far is each value of A from 10?",
              ru: "Стандартное отклонение измеряет удалённость от среднего. Насколько значения A далеки от 10?",
              kk: "Стандартты ауытқу орташадан қашықтықты өлшейді. A мәндері 10-нан қаншалық алыс?" }],
    calculator: true, meta: M("m-stat-05") },

  { id: "m-stat-06", skillId: "m.psda.statistics", section: "math", difficulty: 2, type: "mcq",
    stem: "The value 200 is added to the data set 4, 5, 6, 7. Which statement best describes the effect on the mean and the median?",
    options: [
      "The mean changes much more than the median.",
      "The median changes much more than the mean.",
      "Both change by the same amount.",
      "Neither the mean nor the median changes."],
    answer: "A",
    explanation: {
      en: "The mean rises from 5.5 to 44.4 because it uses every value, while the median moves only from 5.5 to 6.",
      ru: "Среднее вырастает с 5,5 до 44,4, поскольку учитывает все значения, а медиана сдвигается лишь с 5,5 до 6.",
      kk: "Орташа 5,5-тен 44,4-ке өседі, өйткені барлық мәнді пайдаланады, ал медиана 5,5-тен 6-ға ғана жылжиды." },
    distractors: {
      B: { en: "Reverses the roles: the median is the measure that resists outliers.",
           ru: "Меняет роли: именно медиана устойчива к выбросам.",
           kk: "Рөлдерді ауыстырады: дәл медиана шектен тыс мәнге төзімді." },
      C: { en: "The changes are very different in size, 38.9 against 0.5.",
           ru: "Изменения сильно различаются: 38,9 против 0,5.",
           kk: "Өзгерістер қатты ерекшеленеді: 38,9-ға қарсы 0,5." },
      D: { en: "Adding a fifth value changes both, just by very different amounts.",
           ru: "Добавление пятого значения меняет оба, но на очень разную величину.",
           kk: "Бесінші мәнді қосу екеуін де өзгертеді, бірақ әртүрлі шамаға." } },
    hints: [{ en: "One of these measures uses the actual size of every number; the other only uses position.",
              ru: "Одна из мер использует величину каждого числа, другая — только позицию.",
              kk: "Бір өлшем әр санның шамасын пайдаланады, екіншісі тек орнын." }],
    calculator: true, meta: M("m-stat-06") },

  { id: "m-stat-07", skillId: "m.psda.statistics", section: "math", difficulty: 3, type: "mcq",
    stem: "In a study, 500 volunteers with mild insomnia were randomly assigned either to a new sleep programme or to a control group. The programme group slept, on average, 42 minutes longer per night. Which conclusion is best supported?",
    options: [
      "The programme causes longer sleep for all adults.",
      "The programme causes longer sleep among people similar to the volunteers in the study.",
      "People who sleep longer are more likely to volunteer for sleep studies.",
      "No causal conclusion can be drawn from this study."],
    answer: "B",
    explanation: {
      en: "Random assignment supports a causal claim, but the volunteers were not a random sample of all adults, so the conclusion extends only to people like them.",
      ru: "Случайное распределение позволяет говорить о причинности, но волонтёры не были случайной выборкой всех взрослых, поэтому вывод распространяется лишь на похожих людей.",
      kk: "Кездейсоқ бөлу себептілік туралы айтуға мүмкіндік береді, бірақ еріктілер барлық ересектердің кездейсоқ іріктемесі емес, сондықтан қорытынды соларға ұқсас адамдарға ғана таралады." },
    distractors: {
      A: { en: "Overreaches: the volunteers were self-selected and all had mild insomnia.",
           ru: "Слишком широко: волонтёры отобрали себя сами и все имели лёгкую бессонницу.",
           kk: "Тым кең: еріктілер өздерін өздері таңдады және барлығында жеңіл ұйқысыздық болды." },
      C: { en: "Says nothing about the programme and is not measured by the study.",
           ru: "Ничего не говорит о программе и не измеряется исследованием.",
           kk: "Бағдарлама туралы ештеңе айтпайды әрі зерттеуде өлшенбейді." },
      D: { en: "Too cautious: random assignment is precisely what licenses a causal claim.",
           ru: "Слишком осторожно: случайное распределение как раз и даёт право на причинный вывод.",
           kk: "Тым сақ: кездейсоқ бөлу дәл себептік қорытындыға құқық береді." } },
    hints: [{ en: "Random assignment gives causation; random sampling gives generalisation. Which one happened here?",
              ru: "Случайное распределение даёт причинность, случайная выборка — обобщение. Что было здесь?",
              kk: "Кездейсоқ бөлу себептілік береді, кездейсоқ іріктеу — жалпылау. Мұнда қайсысы болды?" }],
    calculator: true, meta: M("m-stat-07") },

  { id: "m-stat-08", skillId: "m.psda.statistics", section: "math", difficulty: 2, type: "spr",
    stem: "The mean of the four values 12, 15, x and 21 is 17. What is the value of x?",
    answer: ["20"],
    explanation: {
      en: "The four values total 4 &times; 17 = 68. The three known values total 48, so x = 20.",
      ru: "Сумма четырёх значений равна 4 · 17 = 68. Три известных дают 48, значит x = 20.",
      kk: "Төрт мәннің қосындысы 4 · 17 = 68. Белгілі үшеуі 48, демек x = 20." },
    hints: [{ en: "Multiply the mean by the count to recover the total.",
              ru: "Умножьте среднее на количество, чтобы получить сумму.",
              kk: "Қосындыны табу үшін орташаны санға көбейтіңіз." }],
    calculator: true, meta: M("m-stat-08") },

  { id: "m-stat-09", skillId: "m.psda.statistics", section: "math", difficulty: 1, type: "mcq",
    stem: "What is the range of the data set 3, 8, 12, 20?",
    options: ["8", "10", "17", "20"],
    answer: "C",
    explanation: {
      en: "The range is the largest value minus the smallest: 20 &minus; 3 = 17.",
      ru: "Размах — это наибольшее минус наименьшее: 20 &minus; 3 = 17.",
      kk: "Ауқым — ең үлкен мәннен ең кішісін азайту: 20 &minus; 3 = 17." },
    hints: [{ en: "Range uses only two of the four numbers.",
              ru: "Размах использует только два из четырёх чисел.",
              kk: "Ауқым төрт санның екеуін ғана пайдаланады." }],
    calculator: true, meta: M("m-stat-09") },

  { id: "m-stat-10", skillId: "m.psda.statistics", section: "math", difficulty: 3, type: "mcq",
    stem: "A company measured customer satisfaction by surveying people who clicked a link in a promotional email. Which of the following is the most serious limitation of the resulting conclusion?",
    options: [
      "The sample size was probably too small to be useful.",
      "The respondents were not randomly selected, so they may differ systematically from all customers.",
      "Satisfaction cannot be measured on a numerical scale.",
      "The survey should have been conducted by telephone instead."],
    answer: "B",
    explanation: {
      en: "People who open and click a promotional email are already more engaged than average, so the sample cannot stand in for all customers no matter how large it is.",
      ru: "Те, кто открывает и кликает рекламное письмо, уже более вовлечены, чем в среднем, поэтому выборка не представляет всех клиентов, каким бы ни был её размер.",
      kk: "Жарнамалық хатты ашып, сілтемені басатындар орташадан белсендірек, сондықтан іріктеме көлеміне қарамастан барлық клиентті білдірмейді." },
    distractors: {
      A: { en: "Size is not the problem; a large biased sample is still biased.",
           ru: "Дело не в размере: большая смещённая выборка остаётся смещённой.",
           kk: "Мәселе көлемде емес: үлкен ығысқан іріктеме бәрібір ығысқан." },
      C: { en: "Satisfaction is routinely measured on scales; that is not the flaw here.",
           ru: "Удовлетворённость обычно измеряют по шкале; проблема не в этом.",
           kk: "Қанағаттану әдетте шкаламен өлшенеді; мәселе онда емес." },
      D: { en: "Changing the medium does not fix self-selection.",
           ru: "Смена канала не устраняет самоотбор.",
           kk: "Арнаны ауыстыру өздігінен іріктелуді жоймайды." } },
    hints: [{ en: "Ask who had a chance to be in the sample, and who did not.",
              ru: "Спросите, у кого был шанс попасть в выборку, а у кого нет.",
              kk: "Іріктемеге кімнің түсу мүмкіндігі болғанын, кімнің болмағанын сұраңыз." }],
    calculator: true, meta: M("m-stat-10") }

  ]);
})();

/* ---- m.psda.probability (10) --------------------------------------------- */
(function () {
  var M = JTS.data.jtsMeta;
  /* Two-way table helper: cols = column headers, rows = [label, ...values]. */
  function twoWay(caption, cols, rows) {
    return '<figure><figcaption class="small muted" style="margin-bottom:6px">' + caption + '</figcaption>' +
      '<div class="table-wrap"><table class="table"><thead><tr><th></th>' +
      cols.map(function (c) { return '<th class="num">' + c + '</th>'; }).join('') +
      '</tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr><td><b>' + r[0] + '</b></td>' +
          r.slice(1).map(function (v) { return '<td class="num">' + v + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div></figure>';
  }

  JTS.data.addQuestions([

  { id: "m-prob-01", skillId: "m.psda.probability", section: "math", difficulty: 2, type: "mcq",
    stem: twoWay("Students by year group and transport to school", ["Bus", "Walk", "Total"],
      [["Year 10", "48", "32", "80"], ["Year 11", "36", "44", "80"], ["Total", "84", "76", "160"]]) +
      "<p>One of the 160 students is selected at random. What is the probability that the student travels by bus?</p>",
    options: ["<span class=\"frac\"><span>3</span><span>10</span></span>", "<span class=\"frac\"><span>21</span><span>40</span></span>", "<span class=\"frac\"><span>3</span><span>5</span></span>", "<span class=\"frac\"><span>19</span><span>40</span></span>"],
    answer: "B",
    explanation: {
      en: "84 of the 160 students travel by bus, and 84/160 simplifies to 21/40.",
      ru: "На автобусе ездят 84 из 160 учеников, и 84/160 сокращается до 21/40.",
      kk: "160 оқушының 84-і автобуспен жүреді, ал 84/160 = 21/40." },
    distractors: {
      A: { en: "Uses 48/160, only the Year 10 bus travellers.",
           ru: "Берёт 48/160 — только учеников 10 класса на автобусе.",
           kk: "48/160 алады — тек 10-сыныптың автобуспен жүретіндері." },
      C: { en: "Uses 48/80, the proportion within Year 10 only.",
           ru: "Берёт 48/80 — долю внутри 10 класса.",
           kk: "48/80 алады — тек 10-сынып ішіндегі үлес." },
      D: { en: "Uses the walkers, 76/160, instead of the bus travellers.",
           ru: "Берёт пешеходов 76/160 вместо ездящих на автобусе.",
           kk: "Автобуспен жүретіндердің орнына 76/160 жаяулықтарды алады." } },
    hints: [{ en: "The denominator is the total of all students because the choice is from all of them.",
              ru: "Знаменатель — общее число учеников, так как выбор идёт из всех.",
              kk: "Бөлім — барлық оқушы саны, өйткені таңдау солардың ішінен." }],
    calculator: true, meta: M("m-prob-01") },

  { id: "m-prob-02", skillId: "m.psda.probability", section: "math", difficulty: 1, type: "mcq",
    stem: "A bag contains 5 red marbles and 7 blue marbles and no others. One marble is drawn at random. What is the probability that it is red?",
    options: ["<span class=\"frac\"><span>5</span><span>7</span></span>", "<span class=\"frac\"><span>5</span><span>12</span></span>", "<span class=\"frac\"><span>7</span><span>12</span></span>", "<span class=\"frac\"><span>1</span><span>5</span></span>"],
    answer: "B",
    explanation: {
      en: "There are 12 marbles in total and 5 of them are red, so the probability is 5/12.",
      ru: "Всего 12 шариков, из них 5 красных, значит вероятность 5/12.",
      kk: "Барлығы 12 шарик, оның 5-і қызыл, демек ықтималдық 5/12." },
    hints: [{ en: "The denominator counts everything in the bag.",
              ru: "В знаменателе — всё содержимое мешка.",
              kk: "Бөлімде — қаптағының бәрі." }],
    calculator: true, meta: M("m-prob-02") },

  { id: "m-prob-03", skillId: "m.psda.probability", section: "math", difficulty: 2, type: "spr",
    stem: "In a class of 30 students, 18 study French. If one student is chosen at random, what is the probability that the student does not study French? Give your answer as a fraction or a decimal.",
    answer: ["2/5", "0.4", ".4"],
    explanation: {
      en: "12 of the 30 students do not study French, and 12/30 = 2/5 = 0.4.",
      ru: "12 из 30 учеников не изучают французский, и 12/30 = 2/5 = 0,4.",
      kk: "30 оқушының 12-і француз тілін оқымайды, ал 12/30 = 2/5 = 0,4." },
    hints: [{ en: "Count the students who are not in the group before dividing.",
              ru: "Перед делением посчитайте тех, кто не входит в группу.",
              kk: "Бөлмес бұрын топқа кірмейтіндерді санаңыз." }],
    calculator: true, meta: M("m-prob-03") },

  { id: "m-prob-04", skillId: "m.psda.probability", section: "math", difficulty: 3, type: "mcq",
    stem: twoWay("Survey respondents by age group and response", ["Agree", "Disagree", "Total"],
      [["Under 30", "90", "30", "120"], ["30 or over", "60", "120", "180"], ["Total", "150", "150", "300"]]) +
      "<p>One respondent who agreed is selected at random. What is the probability that this respondent is under 30?</p>",
    options: ["<span class=\"frac\"><span>3</span><span>10</span></span>", "<span class=\"frac\"><span>1</span><span>2</span></span>", "<span class=\"frac\"><span>3</span><span>5</span></span>", "<span class=\"frac\"><span>3</span><span>4</span></span>"],
    answer: "C",
    explanation: {
      en: "The condition restricts the selection to the 150 respondents who agreed, and 90 of those are under 30: 90/150 = 3/5.",
      ru: "Условие сужает выбор до 150 согласившихся, из них 90 моложе 30: 90/150 = 3/5.",
      kk: "Шарт таңдауды келіскен 150 адамға тарылтады, оның 90-ы 30-дан жас: 90/150 = 3/5." },
    distractors: {
      A: { en: "Uses 90/300, ignoring the condition that the respondent agreed.",
           ru: "Берёт 90/300, игнорируя условие, что респондент согласился.",
           kk: "Респондент келіскен шартты елемей, 90/300 алады." },
      B: { en: "Uses 150/300, the overall share who agreed, not the age split within that group.",
           ru: "Берёт 150/300 — общую долю согласившихся, а не возрастной состав внутри них.",
           kk: "150/300 алады — келіскендердің жалпы үлесі, олардың ішіндегі жас бөлінісі емес." },
      D: { en: "Uses 90/120, the share of under-30s who agreed — the reverse conditional probability.",
           ru: "Берёт 90/120 — долю согласившихся среди молодых, то есть обратную условную вероятность.",
           kk: "90/120 алады — жастар ішіндегі келісушілер үлесі, яғни кері шартты ықтималдық." } },
    hints: [{ en: "A condition in the question shrinks the denominator to one row or column.",
              ru: "Условие в вопросе сужает знаменатель до одной строки или столбца.",
              kk: "Сұрақтағы шарт бөлімді бір жолға немесе бағанға тарылтады." }],
    calculator: true, meta: M("m-prob-04") },

  { id: "m-prob-05", skillId: "m.psda.probability", section: "math", difficulty: 2, type: "mcq",
    stem: "A fair six-sided die with faces numbered 1 through 6 is rolled once. What is the probability that the result is a prime number?",
    options: ["<span class=\"frac\"><span>1</span><span>3</span></span>", "<span class=\"frac\"><span>1</span><span>2</span></span>", "<span class=\"frac\"><span>2</span><span>3</span></span>", "<span class=\"frac\"><span>5</span><span>6</span></span>"],
    answer: "B",
    explanation: {
      en: "The primes on the die are 2, 3 and 5, so the probability is 3/6 = 1/2.",
      ru: "Простые числа на кубике — 2, 3 и 5, значит вероятность 3/6 = 1/2.",
      kk: "Сүйектегі жай сандар — 2, 3 және 5, демек ықтималдық 3/6 = 1/2." },
    distractors: {
      A: { en: "Counts only two of the three primes.",
           ru: "Учитывает только два простых числа из трёх.",
           kk: "Үш жай санның екеуін ғана санайды." },
      C: { en: "Counts 1 as prime, which it is not.",
           ru: "Считает 1 простым числом, а это не так.",
           kk: "1-ді жай сан деп санайды, ол олай емес." },
      D: { en: "Counts every face except one.",
           ru: "Считает все грани, кроме одной.",
           kk: "Бір жақтан басқа барлығын санайды." } },
    hints: [{ en: "List the primes from 1 to 6. Remember that 1 is not prime.",
              ru: "Перечислите простые от 1 до 6. Помните, что 1 не простое.",
              kk: "1-ден 6-ға дейінгі жай сандарды тізіңіз. 1 жай сан емес." }],
    calculator: true, meta: M("m-prob-05") },

  { id: "m-prob-06", skillId: "m.psda.probability", section: "math", difficulty: 3, type: "spr",
    stem: twoWay("Devices sold by type and warranty status", ["With warranty", "No warranty", "Total"],
      [["Laptop", "120", "80", "200"], ["Tablet", "60", "140", "200"], ["Total", "180", "220", "400"]]) +
      "<p>One device is selected at random from those sold with a warranty. What is the probability that it is a laptop? Give your answer as a fraction or a decimal.</p>",
    answer: ["2/3", "0.666", "0.667", ".667"],
    explanation: {
      en: "Restricting to the 180 devices sold with a warranty, 120 are laptops: 120/180 = 2/3.",
      ru: "Ограничиваясь 180 устройствами с гарантией, 120 из них ноутбуки: 120/180 = 2/3.",
      kk: "Кепілдікпен сатылған 180 құрылғының 120-ы ноутбук: 120/180 = 2/3." },
    hints: [{ en: "'From those sold with a warranty' fixes your denominator at 180.",
              ru: "«Из проданных с гарантией» фиксирует знаменатель на 180.",
              kk: "«Кепілдікпен сатылғандардың ішінен» бөлімді 180-ге бекітеді." }],
    calculator: true, meta: M("m-prob-06") },

  { id: "m-prob-07", skillId: "m.psda.probability", section: "math", difficulty: 1, type: "mcq",
    stem: "A spinner is divided into 8 sectors of equal area, 3 of which are shaded. The spinner is spun once. What is the probability that it lands on a shaded sector?",
    options: ["<span class=\"frac\"><span>3</span><span>8</span></span>", "<span class=\"frac\"><span>3</span><span>5</span></span>", "<span class=\"frac\"><span>5</span><span>8</span></span>", "<span class=\"frac\"><span>1</span><span>3</span></span>"],
    answer: "A",
    explanation: {
      en: "Equal sectors mean each is equally likely, so the probability is 3/8.",
      ru: "Равные секторы равновероятны, поэтому вероятность 3/8.",
      kk: "Тең секторлардың ықтималдығы бірдей, сондықтан ықтималдық 3/8." },
    hints: [{ en: "Equal areas let you simply count sectors.",
              ru: "Равные площади позволяют просто посчитать секторы.",
              kk: "Аудандар тең болғанда секторларды жай санауға болады." }],
    calculator: true, meta: M("m-prob-07") },

  { id: "m-prob-08", skillId: "m.psda.probability", section: "math", difficulty: 2, type: "mcq",
    stem: "Events A and B cannot both occur. If the probability of A is 0.3 and the probability of B is 0.45, what is the probability that A or B occurs?",
    options: ["0.135", "0.15", "0.75", "1.0"],
    answer: "C",
    explanation: {
      en: "For events that cannot both occur, the probabilities add: 0.3 + 0.45 = 0.75.",
      ru: "Для несовместных событий вероятности складываются: 0,3 + 0,45 = 0,75.",
      kk: "Бірге бола алмайтын оқиғалар үшін ықтималдықтар қосылады: 0,3 + 0,45 = 0,75." },
    distractors: {
      A: { en: "Multiplying is for independent events occurring together, not for 'or'.",
           ru: "Умножение применяется для совместного наступления независимых событий, а не для «или».",
           kk: "Көбейту тәуелсіз оқиғалардың бірге болуына қолданылады, «немесе» үшін емес." },
      B: { en: "Subtracts instead of adding.",
           ru: "Вычитает вместо сложения.",
           kk: "Қосудың орнына азайтады." },
      D: { en: "Assumes the two events cover every possibility, which is not stated.",
           ru: "Предполагает, что события покрывают все исходы, чего в условии нет.",
           kk: "Оқиғалар барлық мүмкіндікті қамтиды деп болжайды, шартта ондай жоқ." } },
    hints: [{ en: "'Cannot both occur' means there is no overlap to subtract.",
              ru: "«Не могут произойти вместе» значит, что пересечения вычитать не нужно.",
              kk: "«Бірге бола алмайды» дегені — азайтатын қиылысу жоқ." }],
    calculator: true, meta: M("m-prob-08") },

  { id: "m-prob-09", skillId: "m.psda.probability", section: "math", difficulty: 3, type: "mcq",
    stem: "A box contains 10 cards, 4 of which are red. Two cards are drawn at random without replacement. What is the probability that both cards are red?",
    options: ["<span class=\"frac\"><span>4</span><span>25</span></span>", "<span class=\"frac\"><span>2</span><span>15</span></span>", "<span class=\"frac\"><span>2</span><span>5</span></span>", "<span class=\"frac\"><span>1</span><span>5</span></span>"],
    answer: "B",
    explanation: {
      en: "The first draw is red with probability 4/10; given that, the second is red with probability 3/9. The product is 12/90 = 2/15.",
      ru: "Первая карта красная с вероятностью 4/10; при этом вторая — с вероятностью 3/9. Произведение 12/90 = 2/15.",
      kk: "Бірінші карта қызыл болу ықтималдығы 4/10; содан кейін екіншісі 3/9. Көбейтіндісі 12/90 = 2/15." },
    distractors: {
      A: { en: "Treats the draws as if the card were replaced: (4/10)&sup2;.",
           ru: "Считает, будто карту вернули: (4/10)&sup2;.",
           kk: "Картаны қайтарғандай есептейді: (4/10)&sup2;." },
      C: { en: "The probability of a single red draw only.",
           ru: "Вероятность только одной красной карты.",
           kk: "Тек бір қызыл карта ықтималдығы." },
      D: { en: "Comes from 4/10 &times; 1/2, which is not the second draw's probability.",
           ru: "Получается из 4/10 · 1/2, а это не вероятность второго извлечения.",
           kk: "4/10 · 1/2-ден шығады, бұл екінші алудың ықтималдығы емес." } },
    hints: [{ en: "Without replacement, both the numerator and the denominator shrink for the second draw.",
              ru: "Без возвращения для второго извлечения уменьшаются и числитель, и знаменатель.",
              kk: "Қайтарусыз екінші алуда алым да, бөлім де азаяды." }],
    calculator: true, meta: M("m-prob-09") },

  { id: "m-prob-10", skillId: "m.psda.probability", section: "math", difficulty: 2, type: "spr",
    stem: twoWay("Members by membership type and gym attendance last week", ["Attended", "Did not attend", "Total"],
      [["Monthly", "75", "45", "120"], ["Annual", "105", "25", "130"], ["Total", "180", "70", "250"]]) +
      "<p>One member is selected at random from all 250 members. What is the probability that the member attended the gym last week? Give your answer as a fraction or a decimal.</p>",
    answer: ["18/25", "0.72", ".72"],
    explanation: {
      en: "180 of the 250 members attended, and 180/250 = 18/25 = 0.72.",
      ru: "Посещали 180 из 250 участников, и 180/250 = 18/25 = 0,72.",
      kk: "250 мүшенің 180-і келген, ал 180/250 = 18/25 = 0,72." },
    hints: [{ en: "The question selects from all members, so the denominator is the grand total.",
              ru: "Выбор идёт из всех участников, поэтому знаменатель — общий итог.",
              kk: "Таңдау барлық мүшеден жасалады, сондықтан бөлім — жалпы қосынды." }],
    calculator: true, meta: M("m-prob-10") }

  ]);
})();
