/* ==========================================================================
   Paper 01 — "JTS Practice Paper 1". 98 original questions, four modules,
   written to the published Digital SAT blueprint. No explanations, no hints:
   this is the exam, not a lesson. See js/data/papers.js.

   One object per question, in the order they are sat:
     question_type  the skill (words_in_context, boundaries, quadratics, …)
     difficulty     easy | medium | hard
     stimulus       the passage, when there is one
     question       what is asked
     choices        A–D (left out for a grid-in Math question)
     answer         the letter, or for a grid-in the value or every accepted form
   The full list of question types is in js/data/papers.js.
   ========================================================================== */
JTS.data.addPaper({
  id: 'jts-p1',
  questionPrefix: 'p1',   /* question ids are p1.rw1.01, p1.m2.22 … */
  title: 'JTS Practice Paper 1',
  year: 2026,
  modules: [
    {
      key: 'rw1', section: 'rw',
      questions: [
        {
          "question_type": "words_in_context",
          "difficulty": "easy",
          "stimulus": "When the city opened its first night library in 2019, critics expected it to sit empty. Instead, borrowing rose by a third within a year, and the same critics ______ the experiment in print.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "tolerated",
            "B": "praised",
            "C": "disputed",
            "D": "ignored"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "easy",
          "stimulus": "Conservators handle seventeenth-century paper with gloved hands. Centuries of acid in the pulp leave the sheets so ______ that a careless page-turn can break a corner away.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "fragile",
            "B": "ordinary",
            "C": "recent",
            "D": "costly"
          },
          "answer": "A"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "medium",
          "stimulus": "<p>The following text is adapted from a 1911 account of a glacier survey.</p><p>For three summers the ice had crept forward a yard each week. Then, in the dry autumn of 1908, its advance was <u>arrested</u>, and the front stood in the same place until the snows returned.</p>",
          "question": "As used in the text, what does the word \"arrested\" most nearly mean?",
          "choices": {
            "A": "Captured",
            "B": "Halted",
            "C": "Charged",
            "D": "Seized"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "<p>In the pottery of the lower valley, the heavy geometric banding of the earlier period <u>gave way to</u> thin spiral work after about 300 BCE. Nothing in the clay itself changed; only the hand that decorated it did.</p>",
          "question": "As used in the text, what does the phrase \"gave way to\" most nearly mean?",
          "choices": {
            "A": "Collapsed under",
            "B": "Was replaced by",
            "C": "Surrendered to",
            "D": "Made room beside"
          },
          "answer": "B"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "medium",
          "stimulus": "<p>Urban trees cool the streets around them by more than shade alone. <u>A single mature plane tree in Seville was found to move about four hundred litres of water into the air on a July afternoon, drawing heat out of the surrounding pavement as it did so.</u> The effect falls off sharply more than ten metres from the trunk.</p>",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": {
            "A": "It concedes a limitation of the study described.",
            "B": "It offers an example that illustrates the claim made before it.",
            "C": "It introduces a competing explanation the researchers rejected.",
            "D": "It restates the question the study was designed to answer."
          },
          "answer": "B"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "medium",
          "stimulus": "For most of the twentieth century, cave paintings were read as hunting magic: pictures of prey, drawn to bring prey. The reading fitted the animals but not the hands. In several caves the handprints stencilled beside the animals are small, and the proportions of the fingers suggest that many of them belonged to women and children rather than to the hunters the theory assumed.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": {
            "A": "It describes a long-held belief and then presents evidence that complicates it.",
            "B": "It defines a technical term and then traces its history.",
            "C": "It lists several causes of an event and then ranks them.",
            "D": "It presents a prediction and then explains why it was made."
          },
          "answer": "A"
        },
        {
          "question_type": "cross_text_connections",
          "difficulty": "hard",
          "stimulus": "<p><b>Text 1</b></p><p>Six months after the levy on single-use bags came into force, shops in the region reported handing out 70 percent fewer of them. The levy, plainly, changed what shoppers were willing to take.</p><p><b>Text 2</b></p><p>Bag use in the region had been falling since the previous spring, when two of the largest chains moved their bags behind the counter and began asking customers whether they wanted one. By the month the levy arrived, the decline was already most of the way to the figure later credited to it.</p>",
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?",
          "choices": {
            "A": "By agreeing that the tax worked, but arguing that its effect was temporary.",
            "B": "By pointing out that the drop began before the tax took effect.",
            "C": "By questioning whether bag use was measured consistently.",
            "D": "By noting that the tax raised less revenue than expected."
          },
          "answer": "B"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "medium",
          "stimulus": "Bakers trade sourdough cultures like heirlooms, and some carry names and dates going back a century. When researchers moved fifteen such cultures into one kitchen and fed them the same flour on the same schedule, the populations of bacteria in them converged within weeks. Sent home again, each drifted back towards what it had been. Whatever a culture is, it is less a lineage than a reading of the room it lives in.",
          "question": "Which choice best states the main idea of the text?",
          "choices": {
            "A": "Sourdough cultures are more difficult to maintain than commercial yeast.",
            "B": "The flavour of a sourdough loaf comes mostly from the flour it is made with.",
            "C": "A sourdough culture reflects the place it is kept rather than the place it came from.",
            "D": "Bakeries in different cities produce loaves of noticeably different quality."
          },
          "answer": "C"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "easy",
          "stimulus": "When the north wall of the old granary had to be rebuilt, the team mixed lime mortar rather than cement. Cement is stronger, and that is the problem: it is stiffer than the soft stone around it, so the stone, not the joint, takes the movement and crumbles. Lime is weak on purpose. It gives first, and it can be raked out and replaced without touching the stone at all.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": {
            "A": "To explain why a particular material was chosen for a repair.",
            "B": "To argue that traditional building methods are superior to modern ones.",
            "C": "To describe the damage an earthquake caused to a historic building.",
            "D": "To compare the cost of two approaches to conservation."
          },
          "answer": "A"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "medium",
          "stimulus": "Ravens are quick with puzzle boxes, but it is not clear how much of that speed is private invention and how much is picked up from other birds. One team hypothesised that ravens learn the solution socially — by watching a bird that already has it — rather than each working it out alone.",
          "question": "Which finding, if true, would most directly support the researchers’ hypothesis?",
          "choices": {
            "A": "Ravens that had watched the box being baited solved it no faster than ravens that had not.",
            "B": "Ravens that had watched another raven open the box solved it faster than ravens that had not.",
            "C": "Ravens solved the box faster on their second attempt than on their first.",
            "D": "Ravens that were hungrier attempted the box more often."
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "medium",
          "stimulus": "The following text is adapted from a short story.\n\nThe trunk had been packed for a week. Her aunt had written twice to say the room was ready. The station was a twenty-minute walk, downhill all the way. She checked the timetable again, though she had it by heart.",
          "question": "Which quotation from the passage most effectively illustrates the claim that the narrator is reluctant to leave?",
          "choices": {
            "A": "\"The trunk had been packed for a week.\"",
            "B": "\"She checked the timetable again, though she had it by heart.\"",
            "C": "\"The station was a twenty-minute walk, downhill all the way.\"",
            "D": "\"Her aunt had written twice to say the room was ready.\""
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "Members were told the structure was beyond economical repair. The bridge carried four hundred vehicles a day. The report noted that the deck had been resurfaced in 1981. An independent survey that year put the cost of repair at a third of replacement.",
          "question": "Which quotation from the text most directly undercuts the committee’s stated reason?",
          "choices": {
            "A": "\"The bridge carried four hundred vehicles a day.\"",
            "B": "\"The report noted that the deck had been resurfaced in 1981.\"",
            "C": "\"Members were told the structure was beyond economical repair.\"",
            "D": "\"An independent survey that year put the cost of repair at a third of replacement.\""
          },
          "answer": "D"
        },
        {
          "question_type": "evidence_quantitative",
          "difficulty": "medium",
          "stimulus": "<p>The Aral Theatre publishes its programme figures each season. A visitor comparing the three years shown would notice that the theatre ______</p><table><tr><th>Year</th><th>Performances</th><th>Tickets sold</th></tr><tr><td>2021</td><td>140</td><td>21,000</td></tr><tr><td>2022</td><td>120</td><td>24,000</td></tr><tr><td>2023</td><td>155</td><td>23,250</td></tr></table>",
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": {
            "A": "sold the fewest tickets in the year it staged the most performances.",
            "B": "staged fewer performances in 2022 than in 2021 but sold more tickets.",
            "C": "sold more tickets per performance in 2021 than in any other year.",
            "D": "increased both performances and tickets sold every year shown."
          },
          "answer": "B"
        },
        {
          "question_type": "inferences",
          "difficulty": "medium",
          "stimulus": "Seeds of the shrub had long been assumed to need the heat of a fire to germinate. In one trial, seeds warmed to fire temperatures in a dry oven germinated no more often than untreated seeds; seeds left overnight in cool smoke, with no heating at all, germinated at seven times the untreated rate. The results suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "the seeds must be buried deeper than was previously thought.",
            "B": "fire is not necessary for the seeds to germinate.",
            "C": "smoke, and not heat, is what breaks the seeds’ dormancy.",
            "D": "the species will disappear from areas where fires are suppressed."
          },
          "answer": "C"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "The inscriptions run in a continuous band along the wall, breaking mid-word at three points where a block has been replaced. At each break the text resumes on the next original block exactly where it left off, and the replacement blocks are blank. It follows that ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "the inscriptions were carved by more than one hand.",
            "B": "the inscriptions were carved later than the wall itself.",
            "C": "the wall was rebuilt at least once after the inscriptions were made.",
            "D": "the carvers worked from a written copy rather than from memory."
          },
          "answer": "C"
        },
        {
          "question_type": "boundaries",
          "difficulty": "easy",
          "stimulus": "The ferry leaves from the old ______ has been in use since the 1890s.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "harbour, which",
            "B": "harbour which",
            "C": "harbour. Which",
            "D": "harbour; which"
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "The orchestra plays forty concerts a ______ rehearses for almost none of them.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "season, it",
            "B": "season it",
            "C": "season; it",
            "D": "season and it"
          },
          "answer": "C"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "The mill closed in ______ the last of its machinery was sold two winters later.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "1947, and",
            "B": "1947 and",
            "C": "1947; and",
            "D": "1947, and,"
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "The 1830 lute in the collection has never been ______ the 1912 copy beside it is played every week.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "restrung;",
            "B": "restrung,",
            "C": "restrung:",
            "D": "restrung"
          },
          "answer": "A"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "easy",
          "stimulus": "Each of the four samples taken from the riverbed ______ been dated twice.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "have",
            "B": "has",
            "C": "having",
            "D": "to have"
          },
          "answer": "B"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "The committee published ______ findings a month after the hearing ended.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "their",
            "B": "its",
            "C": "it’s",
            "D": "there"
          },
          "answer": "B"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "Neither the curator nor the two assistants ______ told that the loan had been cancelled.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "was",
            "B": "were",
            "C": "is",
            "D": "being"
          },
          "answer": "B"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "The hill fort above the river had never been excavated before 2021. ______",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "Having surveyed the site for three seasons, the report was written by the team.",
            "B": "Having surveyed the site for three seasons, the team wrote the report.",
            "C": "Having surveyed the site for three seasons, it was the team who wrote the report.",
            "D": "The report, having surveyed the site for three seasons, was written by the team."
          },
          "answer": "B"
        },
        {
          "question_type": "transitions",
          "difficulty": "easy",
          "stimulus": "Most of the tools in the hoard were made of bronze. ______ the two finest, a chisel and a small saw, were iron, and they are the earliest iron objects known from the valley.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "For example,",
            "B": "However,",
            "C": "In addition,",
            "D": "Therefore,"
          },
          "answer": "B"
        },
        {
          "question_type": "transitions",
          "difficulty": "medium",
          "stimulus": "The new timetable moved the first train an hour earlier. ______ the number of passengers boarding before seven in the morning nearly doubled within a month.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Similarly,",
            "B": "Nevertheless,",
            "C": "As a result,",
            "D": "Meanwhile,"
          },
          "answer": "C"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "medium",
          "stimulus": "<p>While researching a village co-operative, a student took these notes:</p><ul><li>2019 harvest: brought in by hand, eleven days.</li><li>2020 harvest: brought in by hand, nine days.</li><li>An early frost cut the 2020 season short.</li><li>Both years the crop was picked by the same twelve families.</li></ul><p>The student wants to emphasise the difference between the two harvests. Which choice most effectively uses the relevant information from the notes?</p>",
          "question": "Which choice most effectively uses the notes to emphasise the difference between the two harvests?",
          "choices": {
            "A": "The 2019 harvest lasted eleven days, and the 2020 harvest lasted nine.",
            "B": "Both harvests were brought in by hand, as they had been for generations.",
            "C": "The 2019 harvest took eleven days to bring in; the 2020 harvest, hit by an early frost, took nine.",
            "D": "Although the 2020 harvest was affected by an early frost, it was still brought in by hand over nine days."
          },
          "answer": "C"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "<p>While preparing a programme note, a student took these notes:</p><ul><li>The zhetygen is a Kazakh string instrument.</li><li>It has seven strings and rests flat on the player’s lap or on a table.</li><li>It appears in three of the field recordings made in 1932.</li><li>Scholars disagree about when it reached the steppe.</li></ul><p>The student wants to introduce the instrument to an audience that has never heard of it. Which choice most effectively uses the relevant information from the notes?</p>",
          "question": "Which choice most effectively introduces the instrument to an audience unfamiliar with it?",
          "choices": {
            "A": "The zhetygen has seven strings and is laid flat while played.",
            "B": "The zhetygen, unlike the dombyra, is not plucked but struck.",
            "C": "Scholars disagree about when the zhetygen reached the steppe.",
            "D": "The zhetygen appears in three of the recordings made in 1932."
          },
          "answer": "A"
        }
      ]
    },
    {
      key: 'rw2', section: 'rw',
      questions: [
        {
          "question_type": "words_in_context",
          "difficulty": "medium",
          "stimulus": "The first catalogue of the collection was printed while crates were still arriving. Its compiler called it ______, and within four years he had replaced it twice.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "exhaustive",
            "B": "provisional",
            "C": "conventional",
            "D": "lavish"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "Later restorers meant well. By varnishing the panel to bring up its colour, they ______ the underdrawing that infrared photography would reveal only in 1994.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "obscured",
            "B": "confirmed",
            "C": "preserved",
            "D": "exaggerated"
          },
          "answer": "A"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "<p>Critics of the period praised the poet’s <u>economy</u>: a stanza of hers carries no word that another word is already doing the work of.</p>",
          "question": "As used in the text, what does the word \"economy\" most nearly mean?",
          "choices": {
            "A": "Wealth",
            "B": "Restraint",
            "C": "Trade",
            "D": "Efficiency of cost"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "<p>The committee gave the proposal its <u>qualified</u> support: it approved the route but refused to fund the second station until traffic figures were repeated.</p>",
          "question": "As used in the text, what does the word \"qualified\" most nearly mean?",
          "choices": {
            "A": "Certified",
            "B": "Limited",
            "C": "Suitable",
            "D": "Described"
          },
          "answer": "B"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "hard",
          "stimulus": "<p>A hummingbird’s wing does not flap so much as trace a figure of eight, generating lift on the upstroke as well as the down. <u>The ruby-throated hummingbird completes that figure about fifty-three times a second.</u> No other bird of comparable size holds a hover for as long.</p>",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": {
            "A": "It supplies a measurement that makes the preceding comparison concrete.",
            "B": "It raises an objection that the rest of the text answers.",
            "C": "It shifts the discussion from one species to another.",
            "D": "It acknowledges that the method described is no longer used."
          },
          "answer": "A"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "hard",
          "stimulus": "Why do desert plants so often have small leaves? The usual answer is water: a small leaf loses less of it. That is true, and it is not the whole story. A small leaf also sheds heat faster, because it sits closer to the moving air around it than a broad leaf does — which is why small leaves appear on wet tropical mountains too, where water is the last thing in short supply.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": {
            "A": "It poses a question, answers it, and then qualifies the answer.",
            "B": "It describes a problem and then proposes a solution.",
            "C": "It contrasts two periods and then explains what caused the change.",
            "D": "It defines a method and then lists its applications."
          },
          "answer": "A"
        },
        {
          "question_type": "cross_text_connections",
          "difficulty": "hard",
          "stimulus": "<p><b>Text 1</b></p><p>Streets that were given trees in 2016 saw reported crime fall by a fifth over the following decade, while untreed streets in the same town saw no change. Planting, it appears, makes a street safer.</p><p><b>Text 2</b></p><p>The 2016 planting was not distributed at random. Streets qualified for it by petition, and a street that can organise a petition is a street where neighbours already know one another. Whether it was the trees or the petitioners who changed the figures, the study as designed cannot say.</p>",
          "question": "Based on the texts, the author of Text 2 would most likely characterise the conclusion in Text 1 as",
          "choices": {
            "A": "well supported, because the correlation is strong.",
            "B": "premature, because an untested explanation fits the same data.",
            "C": "mistaken, because the trend described did not occur.",
            "D": "irrelevant, because the two towns are not comparable."
          },
          "answer": "B"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "hard",
          "stimulus": "The bowl has carried four labels. In 1881 it was \"Persian, ancient\". In 1912 it became \"Islamic, probably 12th century\". In 1969 a curator added a findspot and a question mark. The current label gives a kiln, a range of fifty years, and a footnote about the question mark. The bowl has not changed. Read in order, the labels are a record of what the museum believed it was able to know.",
          "question": "Which choice best states the main idea of the text?",
          "choices": {
            "A": "Museums should return objects whose origins cannot be documented.",
            "B": "The label on an object records the museum’s history as much as the object’s.",
            "C": "Nineteenth-century collectors were careless about provenance.",
            "D": "Catalogue entries are rewritten more often than visitors realise."
          },
          "answer": "B"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "medium",
          "stimulus": "A city’s \"average commute\" is reported to the minute, and it hides more than it reports. Averages are pulled up by a long tail of very long journeys and say nothing about who makes them. Two cities with the same average can differ entirely: in one, almost everyone travels half an hour; in the other, most travel fifteen minutes and a tenth travel two hours.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": {
            "A": "To explain why a common measurement is misleading.",
            "B": "To describe how a piece of equipment works.",
            "C": "To argue for more funding for a kind of research.",
            "D": "To compare two competing units of measurement."
          },
          "answer": "A"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "Seedlings planted into soil carrying an established fungal network grew faster than seedlings planted into sterilised soil. The researchers concluded that the seedlings were drawing sugars from neighbouring trees through the fungi.",
          "question": "Which finding, if true, would most directly weaken the researchers’ conclusion?",
          "choices": {
            "A": "Fungi in the plots grew more slowly in the second year than in the first.",
            "B": "Seedlings grown in sterilised soil with added nutrients grew as well as those in fungal soil.",
            "C": "The fungal network extended further than the researchers had mapped.",
            "D": "Older trees in the plots carried more fungal connections than younger ones."
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "The following text is adapted from an excavation report.\n\nThree of the houses had been re-roofed the year before. A loom stood strung in the second house, half a metre of cloth on it. The well was silted to within a metre of the top. No burials later than 1361 were found in the churchyard.",
          "question": "Which quotation from the passage most effectively illustrates the claim that the village had been abandoned in haste?",
          "choices": {
            "A": "\"Three of the houses had been re-roofed the year before.\"",
            "B": "\"A loom stood strung in the second house, half a metre of cloth on it.\"",
            "C": "\"The well was silted to within a metre of the top.\"",
            "D": "\"No burials later than 1361 were found in the churchyard.\""
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_quantitative",
          "difficulty": "hard",
          "stimulus": "<p>Rainfall totals alone do not describe a climate; how the rain arrives matters as much. Of the three stations below, the one whose figures best illustrate that point is ______</p><table><tr><th>Station</th><th>Wet days</th><th>Annual rainfall (mm)</th></tr><tr><td>A</td><td>180</td><td>620</td></tr><tr><td>B</td><td>120</td><td>700</td></tr><tr><td>C</td><td>62</td><td>940</td></tr></table>",
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": {
            "A": "Station C, where the highest rainfall coincided with the lowest number of wet days.",
            "B": "Station A, where rain fell on the most days but totalled the least.",
            "C": "Station B, where both figures were between those of the other two stations.",
            "D": "Station C, where rain fell on the fewest days and totalled the least."
          },
          "answer": "A"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "At four points the text breaks off and resumes several lines later. At each break the scribe left exactly the space the missing lines would have filled, ruled and unwritten, and continued in the same hand and the same ink. It can reasonably be inferred that ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "the copyist worked from an exemplar that was already damaged.",
            "B": "the manuscript was copied by two scribes working in turn.",
            "C": "the missing lines were removed deliberately after copying.",
            "D": "the manuscript is a later forgery."
          },
          "answer": "A"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "When adult starlings were captured mid-migration and released hundreds of kilometres to the east, they corrected their course and reached the usual wintering grounds. First-year birds released alongside them flew the original compass bearing and wintered in a region the species does not normally use. The results suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "the birds navigate by the stars rather than by landmarks.",
            "B": "first-year birds inherit a direction but not a destination.",
            "C": "the population is splitting into two migratory routes.",
            "D": "displaced birds are unable to complete the migration."
          },
          "answer": "B"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "______ at the foot of the Trans-Ili Alatau mountains.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "Almaty, the largest city in Kazakhstan, sits",
            "B": "Almaty the largest city in Kazakhstan sits",
            "C": "Almaty, the largest city in Kazakhstan sits",
            "D": "Almaty the largest city in Kazakhstan, sits"
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "The first two furnaces were rebuilt and returned to ______ the third was left as it had been found.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "work, however,",
            "B": "work; however,",
            "C": "work however",
            "D": "work, however"
          },
          "answer": "B"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "The wall is built from three ______",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "materials: clay, straw, and dung.",
            "B": "materials, clay, straw, and dung.",
            "C": "materials; clay, straw, and dung.",
            "D": "materials clay, straw and dung."
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "The observatory recorded its first spectrum in ______ the dome was still unfinished.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "1902, when",
            "B": "1902 when",
            "C": "1902; when",
            "D": "1902. When"
          },
          "answer": "A"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "The engineer ______ drawings survive is not named in any of the surviving contracts.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "who",
            "B": "whom",
            "C": "which",
            "D": "whose"
          },
          "answer": "D"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "The number of manuscripts attributed to the workshop ______ still disputed.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "is",
            "B": "are",
            "C": "were",
            "D": "have been"
          },
          "answer": "A"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "The rainfall recorded at the upper station is more reliable ______ the valley, where the gauge was moved twice.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "than those of",
            "B": "than",
            "C": "then those of",
            "D": "than that of"
          },
          "answer": "D"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "By the time the gauges were read at dawn, the river ______ almost two metres.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "had risen",
            "B": "has risen",
            "C": "rises",
            "D": "is rising"
          },
          "answer": "A"
        },
        {
          "question_type": "transitions",
          "difficulty": "medium",
          "stimulus": "Cast iron is strong when squeezed and brittle when pulled, which makes it a good column and a poor beam. ______ wrought iron bends long before it breaks, and the century’s great train sheds are built of it.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "In other words,",
            "B": "By contrast,",
            "C": "For instance,",
            "D": "Consequently,"
          },
          "answer": "B"
        },
        {
          "question_type": "transitions",
          "difficulty": "hard",
          "stimulus": "The technique dates every sample it is given and dates them quickly. ______ it cannot be used on anything that has been heated above 400 degrees, which rules out most of the material recovered from the kiln site.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Admittedly,",
            "B": "Likewise,",
            "C": "In short,",
            "D": "Instead,"
          },
          "answer": "A"
        },
        {
          "question_type": "transitions",
          "difficulty": "hard",
          "stimulus": "Every copy of the treaty was destroyed in the fire of 1698. ______ its terms are known almost in full, because three of the signatories described them in letters that survive.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Therefore,",
            "B": "Nonetheless,",
            "C": "For example,",
            "D": "Previously,"
          },
          "answer": "B"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "<p>While preparing a conference paper, a student took these notes:</p><ul><li>The hoard was found by a farmer in 1974.</li><li>It contained 412 silver coins.</li><li>38 of them were struck in Samarkand.</li><li>Samarkand is about 900 km from the findspot.</li></ul><p>The student wants to present the finding to an audience of specialists. Which choice most effectively uses the relevant information from the notes?</p>",
          "question": "Which choice most effectively uses the notes to present the finding to an audience of specialists?",
          "choices": {
            "A": "The hoard is interesting because the coins in it come from many places.",
            "B": "The hoard contained 412 coins, and some of them were minted a long way away.",
            "C": "Of the 412 coins in the hoard, 38 were struck in Samarkand, 900 kilometres from the findspot.",
            "D": "The hoard, which contained 412 coins, was found by a farmer in 1974."
          },
          "answer": "C"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "<p>While writing a review, a student took these notes:</p><ul><li>The survey was conducted in 2023.</li><li>It covered 2,000 households across four districts.</li><li>Only households with a landline telephone were contacted.</li><li>About 60 percent of households in the districts have a landline.</li></ul><p>The student wants to emphasise the limitation of the survey. Which choice most effectively uses the relevant information from the notes?</p>",
          "question": "Which choice most effectively emphasises the limitation of the survey?",
          "choices": {
            "A": "The survey covered 2,000 households across four districts.",
            "B": "The survey covered four districts but reached only households with a landline, about 60 percent of the total.",
            "C": "The survey, conducted in 2023, covered four districts and 2,000 households.",
            "D": "Households without a landline were not included in the survey of four districts."
          },
          "answer": "B"
        }
      ]
    },
    {
      key: 'm1', section: 'math',
      questions: [
        {
          "question_type": "linear",
          "difficulty": "easy",
          "question": "<p>If <i>3x</i> + 7 = 25, what is the value of <i>x</i>?</p>",
          "choices": {
            "A": "4",
            "B": "6",
            "C": "9",
            "D": "12"
          },
          "answer": "B"
        },
        {
          "question_type": "linear",
          "difficulty": "easy",
          "question": "<p>A line passes through (0, 5) and (4, 13). What is its slope?</p>",
          "choices": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "8"
          },
          "answer": "A"
        },
        {
          "question_type": "linear",
          "difficulty": "medium",
          "question": "<p>The function <i>f</i> is defined by <i>f</i>(<i>x</i>) = 12 &minus; 4<i>x</i>. For what value of <i>x</i> does <i>f</i>(<i>x</i>) = &minus;8?</p>",
          "choices": {
            "A": "&minus;5",
            "B": "1",
            "C": "5",
            "D": "20"
          },
          "answer": "C"
        },
        {
          "question_type": "systems",
          "difficulty": "medium",
          "question": "<p>If 2<i>x</i> + <i>y</i> = 11 and <i>x</i> &minus; <i>y</i> = 1, what is the value of <i>x</i>?</p>",
          "choices": {
            "A": "3",
            "B": "4",
            "C": "5",
            "D": "6"
          },
          "answer": "B"
        },
        {
          "question_type": "inequalities",
          "difficulty": "medium",
          "question": "<p>Which of the following is equivalent to 5 &minus; 2<i>x</i> &gt; 13?</p>",
          "choices": {
            "A": "<i>x</i> &gt; &minus;4",
            "B": "<i>x</i> &lt; &minus;4",
            "C": "<i>x</i> &gt; 4",
            "D": "<i>x</i> &lt; 4"
          },
          "answer": "B"
        },
        {
          "question_type": "linear",
          "difficulty": "medium",
          "question": "<p>A taxi charges a fixed 400 tenge plus 90 tenge per kilometre. Which equation gives the cost <i>C</i>, in tenge, of a ride of <i>k</i> kilometres?</p>",
          "choices": {
            "A": "<i>C</i> = 400<i>k</i> + 90",
            "B": "<i>C</i> = 90<i>k</i> + 400",
            "C": "<i>C</i> = 490<i>k</i>",
            "D": "<i>C</i> = 90(<i>k</i> + 400)"
          },
          "answer": "B"
        },
        {
          "question_type": "systems",
          "difficulty": "medium",
          "question": "<p>If 4<i>a</i> + 3<i>b</i> = 22 and <i>a</i> = 2<i>b</i>, what is the value of <i>b</i>?</p>",
          "answer": "2"
        },
        {
          "question_type": "quadratics",
          "difficulty": "medium",
          "question": "<p>What are the solutions of <i>x</i><sup>2</sup> &minus; 7<i>x</i> + 12 = 0?</p>",
          "choices": {
            "A": "&minus;3 and &minus;4",
            "B": "3 and 4",
            "C": "&minus;3 and 4",
            "D": "2 and 6"
          },
          "answer": "B"
        },
        {
          "question_type": "quadratics",
          "difficulty": "medium",
          "question": "<p>The graph of <i>y</i> = (<i>x</i> &minus; 3)<sup>2</sup> &minus; 5 has its vertex at which point?</p>",
          "choices": {
            "A": "(&minus;3, &minus;5)",
            "B": "(3, 5)",
            "C": "(3, &minus;5)",
            "D": "(&minus;3, 5)"
          },
          "answer": "C"
        },
        {
          "question_type": "exponential",
          "difficulty": "medium",
          "question": "<p>A culture starts with 300 cells and doubles every 4 hours. Which function gives the number of cells after <i>t</i> hours?</p>",
          "choices": {
            "A": "<i>N</i>(<i>t</i>) = 300 &middot; 2<sup><i>t</i></sup>",
            "B": "<i>N</i>(<i>t</i>) = 300 &middot; 2<sup><i>t</i>/4</sup>",
            "C": "<i>N</i>(<i>t</i>) = 300 &middot; 4<sup><i>t</i>/2</sup>",
            "D": "<i>N</i>(<i>t</i>) = 300 + 2<i>t</i>"
          },
          "answer": "B"
        },
        {
          "question_type": "polynomials",
          "difficulty": "medium",
          "question": "<p>If <i>p</i>(<i>x</i>) = <i>x</i><sup>3</sup> &minus; 2<i>x</i> + 1, what is <i>p</i>(&minus;2)?</p>",
          "choices": {
            "A": "&minus;3",
            "B": "&minus;1",
            "C": "1",
            "D": "5"
          },
          "answer": "A"
        },
        {
          "question_type": "quadratics",
          "difficulty": "hard",
          "question": "<p>The equation <i>x</i><sup>2</sup> + <i>kx</i> + 36 = 0 has exactly one solution, and <i>k</i> &gt; 0. What is the value of <i>k</i>?</p>",
          "answer": "12"
        },
        {
          "question_type": "radicals",
          "difficulty": "medium",
          "question": "<p>If &radic;(<i>x</i> + 7) = 5, what is the value of <i>x</i>?</p>",
          "choices": {
            "A": "&minus;2",
            "B": "12",
            "C": "18",
            "D": "32"
          },
          "answer": "C"
        },
        {
          "question_type": "percentages",
          "difficulty": "easy",
          "question": "<p>A coat priced at 24,000 tenge is reduced by 15 percent. What is the sale price, in tenge?</p>",
          "choices": {
            "A": "20,400",
            "B": "20,800",
            "C": "21,600",
            "D": "22,400"
          },
          "answer": "A"
        },
        {
          "question_type": "ratios",
          "difficulty": "medium",
          "question": "<p>A recipe uses flour and sugar in the ratio 5 : 2. If 350 g of flour is used, how many grams of sugar are needed?</p>",
          "choices": {
            "A": "70",
            "B": "120",
            "C": "140",
            "D": "175"
          },
          "answer": "C"
        },
        {
          "question_type": "statistics",
          "difficulty": "medium",
          "question": "<p>The five values 4, 9, 9, 11, 17 have mean <i>m</i> and median <i>d</i>. What is <i>m</i> &minus; <i>d</i>?</p>",
          "choices": {
            "A": "&minus;1",
            "B": "0",
            "C": "1",
            "D": "2"
          },
          "answer": "C"
        },
        {
          "question_type": "units",
          "difficulty": "medium",
          "question": "<p>A pump moves 45 litres per minute. How many litres does it move in 2 hours?</p>",
          "choices": {
            "A": "900",
            "B": "2,700",
            "C": "5,400",
            "D": "9,000"
          },
          "answer": "C"
        },
        {
          "question_type": "probability",
          "difficulty": "medium",
          "question": "<p>A box holds 8 red, 5 blue and 7 green counters. One counter is drawn at random. What is the probability that it is not blue?</p>",
          "choices": {
            "A": "1/4",
            "B": "1/3",
            "C": "3/4",
            "D": "7/20"
          },
          "answer": "C"
        },
        {
          "question_type": "percentages",
          "difficulty": "medium",
          "question": "<p>A number increased by 20 percent gives 54. What is the number?</p>",
          "answer": "45"
        },
        {
          "question_type": "triangles",
          "difficulty": "medium",
          "question": "<p>A right triangle has legs of length 9 and 12. What is the length of its hypotenuse?</p>",
          "choices": {
            "A": "13",
            "B": "15",
            "C": "18",
            "D": "21"
          },
          "answer": "B"
        },
        {
          "question_type": "circles",
          "difficulty": "medium",
          "question": "<p>A circle has circumference 18&pi;. What is its area?</p>",
          "choices": {
            "A": "9&pi;",
            "B": "18&pi;",
            "C": "81&pi;",
            "D": "324&pi;"
          },
          "answer": "C"
        },
        {
          "question_type": "area_volume",
          "difficulty": "medium",
          "question": "<p>A rectangular tank is 40 cm long, 25 cm wide and 30 cm deep. What is its volume, in cubic centimetres?</p>",
          "answer": "30000"
        }
      ]
    },
    {
      key: 'm2', section: 'math',
      questions: [
        {
          "question_type": "linear",
          "difficulty": "medium",
          "question": "<p>The line <i>y</i> = <i>mx</i> + 4 passes through (6, 1). What is the value of <i>m</i>?</p>",
          "choices": {
            "A": "&minus;1/2",
            "B": "&minus;2",
            "C": "1/2",
            "D": "2"
          },
          "answer": "A"
        },
        {
          "question_type": "systems",
          "difficulty": "hard",
          "question": "<p>For which value of <i>c</i> does the system 3<i>x</i> &minus; <i>y</i> = 7 and 6<i>x</i> &minus; 2<i>y</i> = <i>c</i> have infinitely many solutions?</p>",
          "choices": {
            "A": "7",
            "B": "14",
            "C": "21",
            "D": "&minus;14"
          },
          "answer": "B"
        },
        {
          "question_type": "systems",
          "difficulty": "hard",
          "question": "<p>The system 2<i>x</i> + 5<i>y</i> = 9 and 4<i>x</i> + 10<i>y</i> = <i>k</i> has no solution. Which of the following cannot be the value of <i>k</i>?</p>",
          "choices": {
            "A": "0",
            "B": "9",
            "C": "18",
            "D": "36"
          },
          "answer": "C"
        },
        {
          "question_type": "inequalities",
          "difficulty": "hard",
          "question": "<p>A van carries crates weighing 34 kg each and must stay under 1,200 kg of cargo. What is the greatest number of crates it can carry?</p>",
          "choices": {
            "A": "33",
            "B": "34",
            "C": "35",
            "D": "36"
          },
          "answer": "C"
        },
        {
          "question_type": "absolute_value",
          "difficulty": "hard",
          "question": "<p>How many solutions does |2<i>x</i> &minus; 5| = 9 have, and what are they?</p>",
          "choices": {
            "A": "One: <i>x</i> = 7",
            "B": "Two: <i>x</i> = 7 and <i>x</i> = &minus;2",
            "C": "Two: <i>x</i> = 7 and <i>x</i> = 2",
            "D": "None"
          },
          "answer": "B"
        },
        {
          "question_type": "linear",
          "difficulty": "hard",
          "question": "<p>The function <i>g</i> is linear, <i>g</i>(2) = 11 and <i>g</i>(6) = 27. What is <i>g</i>(0)?</p>",
          "answer": "3"
        },
        {
          "question_type": "quadratics",
          "difficulty": "hard",
          "question": "<p>The parabola <i>y</i> = <i>x</i><sup>2</sup> &minus; 6<i>x</i> + 5 crosses the <i>x</i>-axis at two points. What is the distance between them?</p>",
          "choices": {
            "A": "2",
            "B": "4",
            "C": "5",
            "D": "6"
          },
          "answer": "B"
        },
        {
          "question_type": "quadratics",
          "difficulty": "hard",
          "question": "<p>If <i>x</i><sup>2</sup> + 10<i>x</i> + <i>c</i> = (<i>x</i> + 5)<sup>2</sup> &minus; 9 for all <i>x</i>, what is the value of <i>c</i>?</p>",
          "choices": {
            "A": "&minus;9",
            "B": "9",
            "C": "16",
            "D": "25"
          },
          "answer": "C"
        },
        {
          "question_type": "polynomials",
          "difficulty": "hard",
          "question": "<p>The polynomial <i>p</i>(<i>x</i>) = <i>x</i><sup>3</sup> &minus; 4<i>x</i><sup>2</sup> + <i>x</i> + 6 has <i>p</i>(3) = 0. Which of the following is a factor of <i>p</i>(<i>x</i>)?</p>",
          "choices": {
            "A": "<i>x</i> + 3",
            "B": "<i>x</i> &minus; 3",
            "C": "<i>x</i> &minus; 6",
            "D": "3<i>x</i> &minus; 1"
          },
          "answer": "B"
        },
        {
          "question_type": "exponential",
          "difficulty": "hard",
          "question": "<p>A sample of 800 g decays to 100 g in 21 years. What is its half-life, in years?</p>",
          "choices": {
            "A": "3",
            "B": "5.25",
            "C": "7",
            "D": "10.5"
          },
          "answer": "C"
        },
        {
          "question_type": "rational",
          "difficulty": "hard",
          "question": "<p>For what value of <i>x</i> is the expression (<i>x</i> + 2)/(<i>x</i><sup>2</sup> &minus; 9) undefined and the numerator non-zero?</p>",
          "choices": {
            "A": "<i>x</i> = &minus;2 only",
            "B": "<i>x</i> = 3 only",
            "C": "<i>x</i> = 3 and <i>x</i> = &minus;3",
            "D": "<i>x</i> = 9"
          },
          "answer": "C"
        },
        {
          "question_type": "radicals",
          "difficulty": "hard",
          "question": "<p>If &radic;(3<i>x</i> &minus; 2) = <i>x</i> and <i>x</i> &gt; 1, what is the value of <i>x</i>?</p>",
          "answer": "2"
        },
        {
          "question_type": "exponential",
          "difficulty": "hard",
          "question": "<p>If 2<sup><i>x</i></sup> = 32, what is the value of <i>x</i>?</p>",
          "answer": "5"
        },
        {
          "question_type": "statistics",
          "difficulty": "hard",
          "question": "<p>Seven measurements have a mean of 12. One measurement, 30, is removed. What is the mean of the remaining six?</p>",
          "choices": {
            "A": "9",
            "B": "10",
            "C": "11",
            "D": "14"
          },
          "answer": "A"
        },
        {
          "question_type": "percentages",
          "difficulty": "hard",
          "question": "<p>A price rises by 25 percent and then falls by 20 percent. Compared with the original price, the final price is</p>",
          "choices": {
            "A": "5 percent lower.",
            "B": "the same.",
            "C": "5 percent higher.",
            "D": "4 percent higher."
          },
          "answer": "B"
        },
        {
          "question_type": "ratios",
          "difficulty": "hard",
          "question": "<p>Two machines fill jars at a constant rate. Machine A fills 180 jars in 4 hours; machine B fills 150 jars in 3 hours. Working together, how many jars do they fill in 2 hours?</p>",
          "choices": {
            "A": "165",
            "B": "190",
            "C": "200",
            "D": "230"
          },
          "answer": "B"
        },
        {
          "question_type": "probability",
          "difficulty": "hard",
          "question": "<p>Of 200 students surveyed, 120 study Kazakh and 95 study German; 40 study both. How many study neither?</p>",
          "choices": {
            "A": "15",
            "B": "25",
            "C": "40",
            "D": "65"
          },
          "answer": "B"
        },
        {
          "question_type": "units",
          "difficulty": "hard",
          "question": "<p>A car uses 7.5 litres of fuel per 100 km. How many litres does it use on a 420 km journey?</p>",
          "answer": [
            "31.5",
            "63/2"
          ]
        },
        {
          "question_type": "triangles",
          "difficulty": "hard",
          "question": "<p>Two triangles are similar. The sides of the smaller are 6, 8 and 10; the longest side of the larger is 25. What is the perimeter of the larger triangle?</p>",
          "choices": {
            "A": "40",
            "B": "48",
            "C": "60",
            "D": "75"
          },
          "answer": "C"
        },
        {
          "question_type": "trig_ratios",
          "difficulty": "hard",
          "question": "<p>In a right triangle, the angle &theta; satisfies sin &theta; = 3/5. What is cos &theta;, given that &theta; is acute?</p>",
          "choices": {
            "A": "3/4",
            "B": "4/5",
            "C": "5/4",
            "D": "5/3"
          },
          "answer": "B"
        },
        {
          "question_type": "circles",
          "difficulty": "hard",
          "question": "<p>A circle has equation (<i>x</i> &minus; 4)<sup>2</sup> + (<i>y</i> + 3)<sup>2</sup> = 49. What is its radius?</p>",
          "answer": "7"
        },
        {
          "question_type": "area_volume",
          "difficulty": "hard",
          "question": "<p>A cylinder has radius 5 cm and volume 200&pi; cubic centimetres. What is its height, in centimetres?</p>",
          "answer": "8"
        }
      ]
    }
  ]
});
