/* ==========================================================================
   Paper 02 — "JTS Practice Paper 2". 98 original questions, four modules,
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
  id: 'jts-p2',
  questionPrefix: 'p2',   /* question ids are p2.rw1.01, p2.m2.22 … */
  title: 'JTS Practice Paper 2',
  year: 2026,
  modules: [
    {
      key: 'rw1', section: 'rw',
      questions: [
        {
          "question_type": "words_in_context",
          "difficulty": "easy",
          "stimulus": "The village ferry kept so ______ a schedule that people on both banks set their watches by its morning horn.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "erratic",
            "B": "dependable",
            "C": "costly",
            "D": "seasonal"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "easy",
          "stimulus": "Although most of her first hives failed, the beekeeper remained ______, rebuilding each one to a new design the following spring.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "discouraged",
            "B": "indifferent",
            "C": "persistent",
            "D": "careless"
          },
          "answer": "C"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "medium",
          "stimulus": "Historian Dina Seitkali argues that the merchants’ letters, long dismissed as routine business correspondence, in fact ______ a great deal about daily life in the trading town, recording prices, weather and quarrels between neighbours.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "conceal",
            "B": "dispute",
            "C": "simplify",
            "D": "reveal"
          },
          "answer": "D"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "<p>The drought <u>arrested</u> the growth of the young orchard: the trees survived the summer, but they added barely a centimetre of new wood.</p>",
          "question": "As used in the text, what does the word \"arrested\" most nearly mean?",
          "choices": {
            "A": "Seized",
            "B": "Halted",
            "C": "Captured",
            "D": "Charged"
          },
          "answer": "B"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "medium",
          "stimulus": "<p><u>Many visitors to old churches have been told that the window glass is thicker at the bottom because, over the centuries, it has slowly flowed downward.</u> The explanation is appealing but wrong. Medieval glassmakers could not produce panes of even thickness, and glaziers usually set the heavier edge at the bottom so that the pane would sit more securely in its frame.</p>",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": {
            "A": "It presents a widely held explanation that the text goes on to reject.",
            "B": "It offers evidence that supports the text’s main claim.",
            "C": "It describes a technique used by medieval glassmakers.",
            "D": "It summarises the results of a laboratory experiment."
          },
          "answer": "A"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "medium",
          "stimulus": "Composer Almas Serkebayev begins each piece not at the piano but on long walks, humming phrases into a small recorder. Only after weeks of this does he sit down to write, and he discards most of what he recorded. The phrases that survive, he explains, are the ones he could not stop hearing.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": {
            "A": "It contrasts the methods of two composers.",
            "B": "It argues that walking improves creativity in general.",
            "C": "It describes an artist’s working process and explains how he chooses among his ideas.",
            "D": "It traces the history of a musical form."
          },
          "answer": "C"
        },
        {
          "question_type": "cross_text_connections",
          "difficulty": "hard",
          "stimulus": "<p><b>Text 1</b></p><p>Two years after the city painted protected bicycle lanes on forty of its busiest streets, traffic injuries on those streets had fallen by 30 percent. The lanes, city officials concluded, have made the streets safer for everyone.</p><p><b>Text 2</b></p><p>In the same month that the lanes were painted, the city lowered its speed limit on all streets from 60 to 50 kilometres per hour. Over the following two years, injuries fell by a similar share on streets that received no lanes at all.</p>",
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?",
          "choices": {
            "A": "By agreeing that the bicycle lanes reduced injuries, and arguing that more should be built.",
            "B": "By arguing that the injury figures were recorded incorrectly.",
            "C": "By claiming that bicycle lanes make streets more dangerous.",
            "D": "By suggesting that another change may account for the decline described in Text 1."
          },
          "answer": "D"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "medium",
          "stimulus": "For decades, the tallest wheat varieties were thought to be the hardiest, since their deep roots could reach water that other plants could not. Field trials in northern Kazakhstan now complicate that picture: shorter varieties, which spend less energy growing stems, produced more grain in dry years than the tall ones did, even though their roots were shallower.",
          "question": "Which choice best states the main idea of the text?",
          "choices": {
            "A": "Recent trials suggest that shorter wheat varieties may cope with dry conditions better than was assumed.",
            "B": "Wheat grown in northern Kazakhstan has become shorter over the past century.",
            "C": "Deep roots are the most important feature of any drought-resistant crop.",
            "D": "Farmers in dry regions have stopped growing wheat."
          },
          "answer": "A"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "easy",
          "stimulus": "Before the museum’s new wing was designed, staff spent a month recording how visitors moved through the old galleries. They found that most people turned right as they entered and never reached the rooms on the left. The entrance to the new wing was therefore placed on the left side of the building.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": {
            "A": "To argue that museums should build more entrances.",
            "B": "To explain how a study of visitors shaped the design of a building.",
            "C": "To describe the artworks displayed in a museum’s new wing.",
            "D": "To compare the popularity of two galleries."
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "medium",
          "stimulus": "The petals of a small desert flower open for only a few hours at a time. Botanist Aigerim Nurlanova hypothesises that the flower opens in response to rising humidity rather than to light.",
          "question": "Which finding, if true, would most directly support Nurlanova’s hypothesis?",
          "choices": {
            "A": "The flowers opened at the same time each morning, whatever the weather.",
            "B": "Flowers exposed to strong light opened more widely than flowers kept in shade.",
            "C": "Flowers kept in complete darkness opened when the air around them was made more humid.",
            "D": "Flowers growing near water were larger than flowers growing farther away."
          },
          "answer": "C"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "medium",
          "stimulus": "In a short story, the narrator, Saule, is preparing to cross a high mountain pass for the first time. The story makes clear that Saule is anxious about the crossing.",
          "question": "Which quotation from the story most effectively illustrates the claim?",
          "choices": {
            "A": "\"The road climbed gently through orchards of apricot trees.\"",
            "B": "\"I checked the ropes three times before dawn and still could not sleep.\"",
            "C": "\"Our guide sang the whole way, in a language I did not know.\"",
            "D": "\"By noon the valley below us was hidden by cloud.\""
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "A researcher found that students who take lecture notes by hand remember the material better than students who type. She explains the difference this way: because writing by hand is slow, students are forced to summarise the lecture in their own words, while typists tend to copy it word for word.",
          "question": "Which finding, if true, would most directly weaken the researcher’s explanation?",
          "choices": {
            "A": "Students who typed their notes wrote down more words than students who wrote by hand.",
            "B": "A week after the lecture, students who wrote by hand remembered more of it than students who typed.",
            "C": "Handwritten and typed notes contained the same share of word-for-word copying, yet the students who wrote by hand still remembered more.",
            "D": "Some students in the study had never taken notes by hand before."
          },
          "answer": "C"
        },
        {
          "question_type": "evidence_quantitative",
          "difficulty": "medium",
          "stimulus": "<p>A school fitted low-flow taps at the start of the winter term but removed them at the start of the spring term after complaints. The data suggest that the taps reduced the school’s water use: ______</p><table><tr><th>Term</th><th>Students</th><th>Water used (thousand litres)</th></tr><tr><td>Autumn</td><td>800</td><td>240</td></tr><tr><td>Winter</td><td>820</td><td>205</td></tr><tr><td>Spring</td><td>790</td><td>237</td></tr></table>",
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": {
            "A": "the number of students rose from 800 in the autumn term to 820 in the winter term.",
            "B": "water use fell from 240 thousand litres in the autumn term to 205 thousand in the winter term, then rose to 237 thousand in the spring term.",
            "C": "water use was highest in the autumn term, when there were 800 students.",
            "D": "the school used 237 thousand litres of water in the spring term, when it had 790 students."
          },
          "answer": "B"
        },
        {
          "question_type": "inferences",
          "difficulty": "medium",
          "stimulus": "Sea otters eat sea urchins, and sea urchins graze on kelp. Where otters were hunted almost to extinction along parts of the Pacific coast, urchin numbers rose sharply and the kelp thinned. Where otters later returned, kelp forests expanded within a decade. This pattern suggests that ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "kelp forests provide otters with their main source of food.",
            "B": "urchins disappear entirely from areas where otters live.",
            "C": "otters returned to the coast because the kelp forests had expanded.",
            "D": "otters help kelp forests by limiting the number of urchins that feed on them."
          },
          "answer": "D"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "At one settlement, pottery changed abruptly around 900 CE: bowls became thinner and were fired at higher temperatures. The clay came from the same riverbank before and after the change, and the new bowls appear in every household at the same level of the excavation rather than spreading from house to house over time. These findings suggest that ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "the new way of making bowls was introduced all at once, rather than developed gradually by the site’s own potters.",
            "B": "the potters began to use a different source of clay around 900 CE.",
            "C": "thin bowls were less durable than thick ones.",
            "D": "the settlement was abandoned shortly after 900 CE."
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "easy",
          "stimulus": "The glacier has retreated nearly two kilometres since ______ scientists expect it to lose another half kilometre by 2050.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "1950 and",
            "B": "1950. and",
            "C": "1950, and",
            "D": "1950 and,"
          },
          "answer": "C"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "Tickets for the festival’s opening concert sold out within an ______ the closing night still had empty seats a week before it began.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "hour,",
            "B": "hour;",
            "C": "hour",
            "D": "hour that"
          },
          "answer": "B"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "The painter Zarina Abenova ______ spent the last decade of her career working only in watercolour.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": ", who trained first as an architect—",
            "B": "—who trained first as an architect,",
            "C": "who trained first as an architect—",
            "D": "—who trained first as an architect—"
          },
          "answer": "D"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "The engineers’ report traced the bridge’s closure to a single ______ its steel cables had corroded far faster than the original designers had predicted.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "cause:",
            "B": "cause,",
            "C": "cause",
            "D": "cause and"
          },
          "answer": "A"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "easy",
          "stimulus": "The collection of hand-painted maps ______ displayed in the library’s east reading room.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "were",
            "B": "are",
            "C": "is",
            "D": "have been"
          },
          "answer": "C"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "The two city libraries merged their catalogues so that readers at either branch could search both of ______ collections at once.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "their",
            "B": "its",
            "C": "it’s",
            "D": "they’re"
          },
          "answer": "A"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "Last spring, the city council ______ a plan to plant ten thousand trees, and the first saplings arrived in October.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "approves",
            "B": "approved",
            "C": "will approve",
            "D": "is approving"
          },
          "answer": "B"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "Built in the fourteenth century from sun-dried brick, ______",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "there have been many restorations of the mausoleum.",
            "B": "restorers have worked on the mausoleum many times.",
            "C": "the mausoleum has been restored many times.",
            "D": "the mausoleum’s restoration has happened many times."
          },
          "answer": "C"
        },
        {
          "question_type": "transitions",
          "difficulty": "easy",
          "stimulus": "Many desert animals avoid the heat by resting during the day. ______ the fennec fox stays in its burrow until sunset and hunts only at night.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "For example,",
            "B": "However,",
            "C": "Instead,",
            "D": "Finally,"
          },
          "answer": "A"
        },
        {
          "question_type": "transitions",
          "difficulty": "medium",
          "stimulus": "The first version of the app was widely praised for its clean design. ______ many users complained that it drained their phone batteries within hours.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Similarly,",
            "B": "Thus,",
            "C": "However,",
            "D": "For instance,"
          },
          "answer": "C"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "medium",
          "stimulus": "<p>While researching a topic, a student took the following notes:</p><ul><li>Lake Balkhash is in southeastern Kazakhstan.</li><li>It is about 600 kilometres long.</li><li>Its western part holds fresh water.</li><li>Its eastern part is salty.</li></ul><p>The student wants to emphasise an unusual feature of the lake.</p>",
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "Lake Balkhash is in southeastern Kazakhstan.",
            "B": "Lake Balkhash is about 600 kilometres long.",
            "C": "Located in southeastern Kazakhstan, Lake Balkhash is a large lake.",
            "D": "Lake Balkhash is unusual: its western part is fresh water, while its eastern part is salty."
          },
          "answer": "D"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "<p>While researching a topic, a student took the following notes:</p><ul><li>In 2022, a school moved its start time from 8:00 to 9:00.</li><li>Before the change, students slept an average of 7.1 hours on school nights.</li><li>After the change, they slept an average of 7.9 hours.</li><li>The study surveyed 640 students.</li></ul><p>The student wants to emphasise the effect of the later start time.</p>",
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "The study, which surveyed 640 students, looked at how long students slept on school nights.",
            "B": "After the school moved its start time from 8:00 to 9:00, students’ average sleep on school nights rose from 7.1 to 7.9 hours.",
            "C": "In 2022, a school moved its start time from 8:00 to 9:00.",
            "D": "Students at the school slept an average of 7.9 hours on school nights."
          },
          "answer": "B"
        }
      ]
    },
    {
      key: 'rw2', section: 'rw',
      questions: [
        {
          "question_type": "words_in_context",
          "difficulty": "medium",
          "stimulus": "Early reviewers found the novel’s structure ______: its chapters jump between three decades without warning, and several of its characters share the same name.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "bewildering",
            "B": "predictable",
            "C": "conventional",
            "D": "effortless"
          },
          "answer": "A"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "Although the committee’s final report was ______ in tone, avoiding any direct criticism of the ministry, its tables of missed deadlines made the committee’s judgement unmistakable.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "scathing",
            "B": "measured",
            "C": "frivolous",
            "D": "emphatic"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "<p>Lacking proper instruments, the stranded crew <u>fashioned</u> a working compass from a sewing needle, a piece of cork and a bowl of water.</p>",
          "question": "As used in the text, what does the word \"fashioned\" most nearly mean?",
          "choices": {
            "A": "Popularised",
            "B": "Styled",
            "C": "Made",
            "D": "Preferred"
          },
          "answer": "C"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "The historian’s account of the uprising is ______: it rests on a single diary whose author, by his own admission, arrived in the city a week after the events he describes.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "authoritative",
            "B": "exhaustive",
            "C": "impartial",
            "D": "tenuous"
          },
          "answer": "D"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "hard",
          "stimulus": "<p>Octopuses can change colour in a fraction of a second, matching rock, sand or coral. <u>Oddly, most octopus species appear to be colour-blind: their eyes contain only one type of light-sensitive cell.</u> Some researchers have proposed that the animals sense colour through light-sensitive proteins in their skin, though this remains unconfirmed.</p>",
          "question": "Which choice best describes the function of the underlined sentence in the text as a whole?",
          "choices": {
            "A": "It gives an example that supports the claim in the first sentence.",
            "B": "It describes the method researchers used to study octopuses.",
            "C": "It presents a puzzle for which the final sentence offers a possible explanation.",
            "D": "It rejects a hypothesis stated earlier in the text."
          },
          "answer": "C"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "hard",
          "stimulus": "Economists long assumed that people value a sum of money equally whether they gain it or lose it. Experiments beginning in the 1970s showed otherwise: losing a sum typically feels about twice as bad as gaining the same sum feels good. That imbalance now helps to explain behaviour once dismissed as simply irrational, such as investors holding on to falling shares for too long.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": {
            "A": "It defines a technical term and then gives several examples of it.",
            "B": "It describes an assumption, presents evidence against it, and notes a consequence of the new understanding.",
            "C": "It compares two competing theories and explains why one was abandoned.",
            "D": "It describes a historical event and then evaluates its causes."
          },
          "answer": "B"
        },
        {
          "question_type": "cross_text_connections",
          "difficulty": "hard",
          "stimulus": "<p><b>Text 1</b></p><p>Some languages divide colours more finely than others. In one study, speakers of a language with separate basic words for light blue and dark blue sorted shades of blue faster than speakers of a language with a single word. The researchers concluded that the language a person speaks shapes how that person perceives colour.</p><p><b>Text 2</b></p><p>In a follow-up study, participants sorted the same shades while silently repeating a string of numbers, a task that keeps them from naming things to themselves. Under those conditions, the speed advantage disappeared entirely.</p>",
          "question": "Based on the texts, how would the author of Text 2 most likely respond to the conclusion in Text 1?",
          "choices": {
            "A": "By arguing that the speakers in the study were not typical of speakers of their language.",
            "B": "By denying that the speed advantage described in Text 1 exists.",
            "C": "By claiming that language has no connection to how people handle colour.",
            "D": "By suggesting that the speed advantage may come from using words during the task rather than from a difference in perception."
          },
          "answer": "D"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "hard",
          "stimulus": "Most people picture a forest fire as pure destruction, and for a single season it is. But in the lodgepole pine forests of western North America, many of the trees’ cones stay sealed with resin until the heat of a fire melts them open. Within a few years of a burn, the blackened ground is often crowded with seedlings, growing in sunlight that the old canopy had blocked.",
          "question": "Which choice best states the main idea of the text?",
          "choices": {
            "A": "For some forests, fire is part of the process by which they renew themselves.",
            "B": "Lodgepole pines are more likely than other trees to catch fire.",
            "C": "Forest fires in western North America have become more frequent.",
            "D": "Seedlings grow best in soil that has never been burned."
          },
          "answer": "A"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "medium",
          "stimulus": "Ice cores drilled from the Antarctic ice sheet contain tiny bubbles of air, trapped as falling snow was pressed into ice. Because each layer of ice formed at a known time, the bubbles serve as samples of the ancient atmosphere, allowing scientists to measure how much carbon dioxide the air held hundreds of thousands of years ago.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": {
            "A": "To argue that drilling in Antarctica should be limited.",
            "B": "To describe the difficulties of working in polar conditions.",
            "C": "To explain how a natural record allows scientists to study conditions in the past.",
            "D": "To compare the atmosphere today with the atmosphere of other planets."
          },
          "answer": "C"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "Urban foxes approach people far more readily than rural foxes do. A team of ecologists claims that this is because urban foxes have grown used to people during their lives, not because bolder foxes were more likely to move into cities in the first place.",
          "question": "Which finding, if true, would most directly support the ecologists’ claim?",
          "choices": {
            "A": "Urban foxes live longer, on average, than rural foxes.",
            "B": "Rural fox cubs raised in cities became as bold as urban foxes, while urban cubs raised in the countryside became as cautious as rural ones.",
            "C": "Records show that the first foxes to settle in cities were unusually bold.",
            "D": "Urban foxes eat more food discarded by people than rural foxes do."
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "In a play, Arman is a retired engineer who cannot leave anything broken alone, even when no one has asked for his help.",
          "question": "Which quotation from the play most effectively illustrates the claim?",
          "choices": {
            "A": "\"I haven’t set foot in the workshop since spring.\"",
            "B": "\"My daughter says I ought to travel more.\"",
            "C": "\"The bridge I designed in 1979 is still standing.\"",
            "D": "\"Leave the radio—I’ll have it working by supper, and the kettle after that.\""
          },
          "answer": "D"
        },
        {
          "question_type": "evidence_quantitative",
          "difficulty": "hard",
          "stimulus": "<p>The table shows the share of electricity that three countries generated from solar power. Although country Y had the largest share of the three in 2015, its share grew the most slowly afterward, and ______</p><table><tr><th>Country</th><th>2015 (%)</th><th>2020 (%)</th><th>2024 (%)</th></tr><tr><td>X</td><td>2</td><td>6</td><td>14</td></tr><tr><td>Y</td><td>5</td><td>7</td><td>8</td></tr><tr><td>Z</td><td>1</td><td>1</td><td>9</td></tr></table>",
          "question": "Which choice most effectively uses data from the table to complete the statement?",
          "choices": {
            "A": "by 2024 its share, 8 percent, was lower than the shares of both country X and country Z.",
            "B": "by 2020 it had been overtaken by country Z.",
            "C": "its share fell between 2020 and 2024.",
            "D": "country X’s share had tripled by 2020."
          },
          "answer": "A"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "Birds that nest on islands without predators tend, over many generations, to stop defending their nests. On one predator-free island, however, petrels still attack intruders near their nests, much as mainland petrels do. Genetic evidence shows that the petrels reached the island only about 300 years ago, whereas the island’s other bird species have lived there for tens of thousands of years. This suggests that ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "the island has predators that researchers have not yet identified.",
            "B": "petrels on the mainland have lost their defensive behaviour.",
            "C": "the petrels may not have lived on the island long enough to lose their defensive behaviour.",
            "D": "petrels defend their nests more fiercely than other island birds because they are larger."
          },
          "answer": "C"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "Ejective consonants are sounds made with a sharp burst of air from the throat. In a survey of several hundred languages, linguists found that languages spoken at high altitude use ejectives more often than others, and some proposed that thinner air makes the sounds easier to produce. Yet several languages spoken at high altitude lack ejectives entirely, while some lowland languages use them often. Therefore, ______",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "ejective consonants are becoming less common around the world.",
            "B": "altitude alone cannot fully explain which languages use ejective consonants.",
            "C": "the high-altitude languages once had ejective consonants and later lost them.",
            "D": "lowland languages borrowed ejective consonants from mountain languages."
          },
          "answer": "B"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "Kazakhstan’s nature reserves protect a wide range of ______ snow leopards in the Altai mountains, saiga antelope on the steppe and flamingos on Lake Tengiz.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "species:",
            "B": "species,",
            "C": "species;",
            "D": "species"
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "Engineer Li Wei’s ______ reduces the weight of the bridge deck by nearly a third.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "design, which uses hollow steel ribs,",
            "B": "design, which uses hollow steel ribs",
            "C": "design which uses hollow steel ribs,",
            "D": "design—which uses hollow steel ribs,"
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "The first printed map of the region appeared in ______ earlier maps, drawn by hand, had circulated among merchants for more than a century.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "1570, however,",
            "B": "1570 however",
            "C": "1570; however,",
            "D": "1570, however"
          },
          "answer": "C"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "Visitors to the observatory can view Saturn’s rings through the main ______ on clear nights, the staff also set up smaller telescopes in the car park.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "telescope,",
            "B": "telescope;",
            "C": "telescope",
            "D": "telescope, and,"
          },
          "answer": "B"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "The three ______ proposals for the new station were reviewed together at the council’s March meeting.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "architect’s",
            "B": "architects",
            "C": "architects’s",
            "D": "architects’"
          },
          "answer": "D"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "The results of the survey, which asked more than two thousand residents about their daily journeys, ______ that most people would switch to buses if the service were more frequent.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "suggests",
            "B": "suggest",
            "C": "has suggested",
            "D": "was suggesting"
          },
          "answer": "B"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "By the time the rescue team reached the summit, the storm ______ for nearly six hours.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "has raged",
            "B": "rages",
            "C": "had been raging",
            "D": "will have raged"
          },
          "answer": "C"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "hard",
          "stimulus": "Walking through the old quarter of Bukhara, ______",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "visitors can see blue domes from almost every street.",
            "B": "the blue domes are visible from almost every street.",
            "C": "blue domes appear above almost every street.",
            "D": "there are blue domes visible from almost every street."
          },
          "answer": "A"
        },
        {
          "question_type": "transitions",
          "difficulty": "medium",
          "stimulus": "The desert tortoise can survive a year or more without drinking. ______ it stores water in its bladder and reabsorbs it when it needs to.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "In contrast,",
            "B": "Otherwise,",
            "C": "Nevertheless,",
            "D": "To do so,"
          },
          "answer": "D"
        },
        {
          "question_type": "transitions",
          "difficulty": "hard",
          "stimulus": "Critics of the time dismissed the painter’s late works as unfinished sketches. ______ many of those same works hang in the national gallery and are considered her finest.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Today, however,",
            "B": "For example,",
            "C": "As a result,",
            "D": "Likewise,"
          },
          "answer": "A"
        },
        {
          "question_type": "transitions",
          "difficulty": "hard",
          "stimulus": "The drug lowered blood pressure in nearly every patient in the trial. ______ it caused dizziness in a third of them, and regulators asked for a second trial before approving it.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Consequently,",
            "B": "In other words,",
            "C": "Still,",
            "D": "Furthermore,"
          },
          "answer": "C"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "<p>While researching a topic, a student took the following notes:</p><ul><li>The northern wheatear is a small songbird.</li><li>It weighs about 25 grams.</li><li>Some northern wheatears breed in Alaska and spend the winter in sub-Saharan Africa.</li><li>Their round trip is about 30,000 kilometres.</li></ul><p>The student wants to emphasise how far the bird travels relative to its size.</p>",
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "The northern wheatear is a small songbird that weighs about 25 grams.",
            "B": "Some northern wheatears breed in Alaska.",
            "C": "Although it weighs only about 25 grams, the northern wheatear can fly a round trip of about 30,000 kilometres between Alaska and Africa.",
            "D": "The northern wheatear flies between Alaska and sub-Saharan Africa."
          },
          "answer": "C"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "<p>While researching a topic, a student took the following notes:</p><ul><li>Researcher Madina Omarova studied whether reading aloud helps memory.</li><li>Participants were given a list of 80 words.</li><li>Half of the participants read the list aloud; the other half read it silently.</li><li>A week later, those who had read aloud recalled 14 percent more words.</li></ul><p>The student wants to describe the study’s method.</p>",
          "question": "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "Omarova found that reading aloud helped participants recall 14 percent more words.",
            "B": "Omarova gave participants a list of 80 words, had half of them read it aloud and half read it silently, and tested their recall a week later.",
            "C": "According to Omarova, reading aloud may help memory.",
            "D": "Omarova, a researcher, studied memory."
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
          "question": "<p>If 4<i>x</i> &minus; 7 = 21, what is the value of <i>x</i>?</p>",
          "choices": {
            "A": "3.5",
            "B": "7",
            "C": "14",
            "D": "28"
          },
          "answer": "B"
        },
        {
          "question_type": "linear",
          "difficulty": "easy",
          "question": "<p>A gym charges a $30 joining fee plus $15 per month. Which expression gives the total cost, in dollars, of joining the gym and paying for <i>m</i> months?</p>",
          "choices": {
            "A": "15<i>m</i> + 30",
            "B": "30<i>m</i> + 15",
            "C": "45<i>m</i>",
            "D": "15(<i>m</i> + 30)"
          },
          "answer": "A"
        },
        {
          "question_type": "percentages",
          "difficulty": "easy",
          "question": "<p>What is 35% of 240?</p>",
          "choices": {
            "A": "64",
            "B": "76",
            "C": "84",
            "D": "96"
          },
          "answer": "C"
        },
        {
          "question_type": "linear",
          "difficulty": "medium",
          "question": "<p>A line in the <i>xy</i>-plane passes through the points (2, 5) and (6, 17). What is the slope of the line?</p>",
          "choices": {
            "A": "1/3",
            "B": "3",
            "C": "4",
            "D": "12"
          },
          "answer": "B"
        },
        {
          "question_type": "systems",
          "difficulty": "medium",
          "question": "<p><i>x</i> + <i>y</i> = 14<br><i>x</i> &minus; <i>y</i> = 4</p><p>If (<i>x</i>, <i>y</i>) is the solution to the system of equations above, what is the value of <i>x</i>?</p>",
          "answer": "9"
        },
        {
          "question_type": "inequalities",
          "difficulty": "medium",
          "question": "<p>Which of the following values of <i>x</i> satisfies the inequality 3<i>x</i> + 2 &gt; 17?</p>",
          "choices": {
            "A": "3",
            "B": "4",
            "C": "5",
            "D": "6"
          },
          "answer": "D"
        },
        {
          "question_type": "linear",
          "difficulty": "medium",
          "question": "<p>At which point does the graph of <i>y</i> = &minus;2<i>x</i> + 9 cross the <i>y</i>-axis?</p>",
          "choices": {
            "A": "(0, &minus;2)",
            "B": "(9, 0)",
            "C": "(0, 9)",
            "D": "(&minus;2, 9)"
          },
          "answer": "C"
        },
        {
          "question_type": "quadratics",
          "difficulty": "medium",
          "question": "<p>What are the solutions of <i>x</i><sup>2</sup> &minus; 5<i>x</i> &minus; 14 = 0?</p>",
          "choices": {
            "A": "<i>x</i> = 7 and <i>x</i> = &minus;2",
            "B": "<i>x</i> = &minus;7 and <i>x</i> = 2",
            "C": "<i>x</i> = 14 and <i>x</i> = &minus;1",
            "D": "<i>x</i> = 5 and <i>x</i> = &minus;14"
          },
          "answer": "A"
        },
        {
          "question_type": "exponential",
          "difficulty": "medium",
          "question": "<p>A population of bacteria doubles every 3 hours. If there are 500 bacteria now, how many will there be 12 hours from now?</p>",
          "choices": {
            "A": "2,000",
            "B": "4,000",
            "C": "6,000",
            "D": "8,000"
          },
          "answer": "D"
        },
        {
          "question_type": "polynomials",
          "difficulty": "medium",
          "question": "<p>Which expression is equivalent to (2<i>x</i> + 3)(<i>x</i> &minus; 4)?</p>",
          "choices": {
            "A": "2<i>x</i><sup>2</sup> &minus; 5<i>x</i> &minus; 12",
            "B": "2<i>x</i><sup>2</sup> + 5<i>x</i> &minus; 12",
            "C": "2<i>x</i><sup>2</sup> &minus; 11<i>x</i> &minus; 12",
            "D": "2<i>x</i><sup>2</sup> &minus; 5<i>x</i> + 12"
          },
          "answer": "A"
        },
        {
          "question_type": "quadratics",
          "difficulty": "medium",
          "question": "<p>The function <i>f</i> is defined by <i>f</i>(<i>x</i>) = <i>x</i><sup>2</sup> &minus; 3<i>x</i> + 5. What is the value of <i>f</i>(4)?</p>",
          "answer": "9"
        },
        {
          "question_type": "radicals",
          "difficulty": "medium",
          "question": "<p>Which of the following is equal to &radic;50 &minus; &radic;8?</p>",
          "choices": {
            "A": "&radic;42",
            "B": "3&radic;2",
            "C": "7&radic;2",
            "D": "3"
          },
          "answer": "B"
        },
        {
          "question_type": "ratios",
          "difficulty": "medium",
          "question": "<p>A recipe uses 3 cups of flour for every 2 cups of sugar. If a baker uses 12 cups of flour, how many cups of sugar are needed?</p>",
          "choices": {
            "A": "6",
            "B": "9",
            "C": "8",
            "D": "18"
          },
          "answer": "C"
        },
        {
          "question_type": "statistics",
          "difficulty": "medium",
          "question": "<p>What is the mean of the data set 4, 7, 7, 9, 13?</p>",
          "choices": {
            "A": "7",
            "B": "9",
            "C": "8",
            "D": "13"
          },
          "answer": "C"
        },
        {
          "question_type": "units",
          "difficulty": "medium",
          "question": "<p>A car travels at a constant speed of 72 kilometres per hour. How many metres does it travel each second?</p>",
          "choices": {
            "A": "12",
            "B": "72",
            "C": "200",
            "D": "20"
          },
          "answer": "D"
        },
        {
          "question_type": "probability",
          "difficulty": "medium",
          "question": "<p>A bag contains 5 red, 3 blue and 7 green marbles. If one marble is chosen at random, what is the probability that it is blue?</p>",
          "choices": {
            "A": "1/5",
            "B": "1/3",
            "C": "3/7",
            "D": "1/15"
          },
          "answer": "A"
        },
        {
          "question_type": "percentages",
          "difficulty": "medium",
          "question": "<p>A jacket originally priced at $80 is on sale for 15% off. What is the sale price, in dollars?</p>",
          "answer": "68"
        },
        {
          "question_type": "triangles",
          "difficulty": "medium",
          "question": "<p>The legs of a right triangle have lengths 9 and 12. What is the length of the hypotenuse?</p>",
          "choices": {
            "A": "13",
            "B": "15",
            "C": "17",
            "D": "21"
          },
          "answer": "B"
        },
        {
          "question_type": "circles",
          "difficulty": "medium",
          "question": "<p>A circle has a circumference of 18&pi;. What is the area of the circle?</p>",
          "choices": {
            "A": "9&pi;",
            "B": "18&pi;",
            "C": "36&pi;",
            "D": "81&pi;"
          },
          "answer": "D"
        },
        {
          "question_type": "area_volume",
          "difficulty": "medium",
          "question": "<p>A rectangular box is 5 centimetres long, 4 centimetres wide and 3 centimetres high. What is the volume of the box, in cubic centimetres?</p>",
          "answer": "60"
        },
        {
          "question_type": "systems",
          "difficulty": "hard",
          "question": "<p>At a caf&eacute;, 2 coffees and 3 muffins cost $13, and 4 coffees and 1 muffin cost $16. What is the cost of one muffin?</p>",
          "choices": {
            "A": "$2.00",
            "B": "$2.50",
            "C": "$3.00",
            "D": "$3.50"
          },
          "answer": "A"
        },
        {
          "question_type": "linear",
          "difficulty": "hard",
          "question": "<p>A line in the <i>xy</i>-plane passes through the point (1, 4) and is parallel to the line <i>y</i> = 3<i>x</i> &minus; 2. What is the <i>y</i>-coordinate of the <i>y</i>-intercept of the line?</p>",
          "answer": "1"
        }
      ]
    },
    {
      key: 'm2', section: 'math',
      questions: [
        {
          "question_type": "linear",
          "difficulty": "medium",
          "question": "<p>What is the solution to the equation 3(<i>x</i> &minus; 2) + 4 = 5<i>x</i> &minus; 10?</p>",
          "choices": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "6"
          },
          "answer": "C"
        },
        {
          "question_type": "systems",
          "difficulty": "hard",
          "question": "<p>2<i>x</i> + 3<i>y</i> = 7<br>4<i>x</i> + <i>ky</i> = 10</p><p>In the system of equations above, <i>k</i> is a constant. For what value of <i>k</i> does the system have no solution?</p>",
          "choices": {
            "A": "3",
            "B": "6",
            "C": "7",
            "D": "14"
          },
          "answer": "B"
        },
        {
          "question_type": "inequalities",
          "difficulty": "hard",
          "question": "<p>A delivery van can carry at most 1,200 kilograms. The driver weighs 80 kilograms, and each box weighs 35 kilograms. What is the greatest number of boxes the van can carry along with the driver?</p>",
          "choices": {
            "A": "31",
            "B": "33",
            "C": "34",
            "D": "32"
          },
          "answer": "D"
        },
        {
          "question_type": "absolute_value",
          "difficulty": "hard",
          "question": "<p>What is the sum of the solutions of |2<i>x</i> &minus; 5| = 9?</p>",
          "choices": {
            "A": "&minus;2",
            "B": "5",
            "C": "7",
            "D": "9"
          },
          "answer": "B"
        },
        {
          "question_type": "linear",
          "difficulty": "hard",
          "question": "<p>For the linear function <i>f</i>, <i>f</i>(2) = 11 and <i>f</i>(5) = 20. What is the value of <i>f</i>(10)?</p>",
          "answer": "35"
        },
        {
          "question_type": "quadratics",
          "difficulty": "hard",
          "question": "<p>In the <i>xy</i>-plane, the graph of <i>y</i> = <i>x</i><sup>2</sup> &minus; 6<i>x</i> + <i>c</i>, where <i>c</i> is a constant, touches the <i>x</i>-axis at exactly one point. What is the value of <i>c</i>?</p>",
          "choices": {
            "A": "3",
            "B": "6",
            "C": "9",
            "D": "36"
          },
          "answer": "C"
        },
        {
          "question_type": "quadratics",
          "difficulty": "hard",
          "question": "<p>The function <i>f</i> is defined by <i>f</i>(<i>x</i>) = &minus;2(<i>x</i> &minus; 3)<sup>2</sup> + 8. What is the maximum value of <i>f</i>?</p>",
          "choices": {
            "A": "&minus;2",
            "B": "3",
            "C": "6",
            "D": "8"
          },
          "answer": "D"
        },
        {
          "question_type": "polynomials",
          "difficulty": "hard",
          "question": "<p>The polynomial <i>p</i> is defined by <i>p</i>(<i>x</i>) = <i>x</i><sup>3</sup> + <i>ax</i> &minus; 6, where <i>a</i> is a constant. If <i>x</i> &minus; 2 is a factor of <i>p</i>(<i>x</i>), what is the value of <i>a</i>?</p>",
          "choices": {
            "A": "&minus;3",
            "B": "&minus;1",
            "C": "1",
            "D": "3"
          },
          "answer": "B"
        },
        {
          "question_type": "exponential",
          "difficulty": "hard",
          "question": "<p>A car is worth $25,000 today, and its value decreases by 12% each year. Which expression gives the value of the car, in dollars, <i>t</i> years from today?</p>",
          "choices": {
            "A": "25,000(0.88)<sup><i>t</i></sup>",
            "B": "25,000(0.12)<sup><i>t</i></sup>",
            "C": "25,000(1.12)<sup><i>t</i></sup>",
            "D": "25,000 &minus; 0.12<i>t</i>"
          },
          "answer": "A"
        },
        {
          "question_type": "rational",
          "difficulty": "hard",
          "question": "<p>If 3/(<i>x</i> &minus; 1) = 6/(<i>x</i> + 2), what is the value of <i>x</i>?</p>",
          "choices": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "answer": "C"
        },
        {
          "question_type": "exponential",
          "difficulty": "hard",
          "question": "<p>If 2<sup><i>x</i> + 3</sup> = 64, what is the value of <i>x</i>?</p>",
          "answer": "3"
        },
        {
          "question_type": "radicals",
          "difficulty": "hard",
          "question": "<p>What is the solution to the equation &radic;(<i>x</i> + 7) = <i>x</i> &minus; 5?</p>",
          "answer": "9"
        },
        {
          "question_type": "statistics",
          "difficulty": "hard",
          "question": "<p>The 20 students in a class have a mean test score of 72. Five more students, whose mean score is 82, join the class. What is the mean score of all 25 students?</p>",
          "choices": {
            "A": "73",
            "B": "75",
            "C": "77",
            "D": "74"
          },
          "answer": "D"
        },
        {
          "question_type": "statistics",
          "difficulty": "hard",
          "question": "<p>Data set A: 10, 20, 30, 40, 50<br>Data set B: 28, 29, 30, 31, 32</p><p>Which statement about the two data sets is true?</p>",
          "choices": {
            "A": "The data sets have equal means, and data set A has the larger standard deviation.",
            "B": "The data sets have equal means, and data set B has the larger standard deviation.",
            "C": "Data set A has both the larger mean and the larger standard deviation.",
            "D": "The data sets have equal standard deviations."
          },
          "answer": "A"
        },
        {
          "question_type": "percentages",
          "difficulty": "hard",
          "question": "<p>A town’s population grew from 40,000 to 46,000 and then decreased by 10%. The final population is what percent of the original 40,000?</p>",
          "choices": {
            "A": "96.5%",
            "B": "100%",
            "C": "103.5%",
            "D": "105%"
          },
          "answer": "C"
        },
        {
          "question_type": "ratios",
          "difficulty": "hard",
          "question": "<p>Pipe A alone can fill a tank in 6 hours, and pipe B alone can fill it in 3 hours. Working together at these rates, how long do the two pipes take to fill the empty tank?</p>",
          "choices": {
            "A": "2 hours",
            "B": "1.5 hours",
            "C": "4.5 hours",
            "D": "9 hours"
          },
          "answer": "A"
        },
        {
          "question_type": "probability",
          "difficulty": "hard",
          "question": "<p>Of 200 students surveyed, 90 play a sport. Of the students who play a sport, 60 also play a musical instrument. Of the students who do not play a sport, 30 play a musical instrument. If a student who plays a musical instrument is chosen at random, what is the probability that the student also plays a sport?</p>",
          "choices": {
            "A": "1/3",
            "B": "3/10",
            "C": "2/3",
            "D": "3/4"
          },
          "answer": "C"
        },
        {
          "question_type": "units",
          "difficulty": "hard",
          "question": "<p>A tank holds 2.4 cubic metres of water. The water drains at a constant rate of 8 litres per minute. How many minutes does it take the full tank to empty? (1 cubic metre = 1,000 litres)</p>",
          "answer": "300"
        },
        {
          "question_type": "triangles",
          "difficulty": "hard",
          "question": "<p>In triangle <i>ABC</i>, the measure of angle <i>A</i> is 60&deg;, and the measure of angle <i>B</i> is twice the measure of angle <i>C</i>. What is the measure of angle <i>C</i>?</p>",
          "choices": {
            "A": "30&deg;",
            "B": "60&deg;",
            "C": "80&deg;",
            "D": "40&deg;"
          },
          "answer": "D"
        },
        {
          "question_type": "trig_ratios",
          "difficulty": "hard",
          "question": "<p>In right triangle <i>PQR</i>, the right angle is at <i>R</i>, and tan <i>P</i> = 5/12. What is sin <i>Q</i>?</p>",
          "choices": {
            "A": "5/13",
            "B": "12/13",
            "C": "5/12",
            "D": "12/5"
          },
          "answer": "B"
        },
        {
          "question_type": "circles",
          "difficulty": "hard",
          "question": "<p>A circle in the <i>xy</i>-plane has equation <i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> &minus; 8<i>x</i> + 6<i>y</i> = 11. What is the radius of the circle?</p>",
          "answer": "6"
        },
        {
          "question_type": "radians",
          "difficulty": "hard",
          "question": "<p>A circle has radius 10. What is the length of an arc of this circle that has a central angle of 3&pi;/5 radians?</p>",
          "choices": {
            "A": "3&pi;",
            "B": "10&pi;",
            "C": "6&pi;",
            "D": "60&pi;"
          },
          "answer": "C"
        }
      ]
    }
  ]
});
