/* ==========================================================================
   Paper 02 — "JTS Practice Paper 2". 54 Reading & Writing questions, two modules.
   No explanations, no hints: this is the exam, not a lesson.
   One object per question, in the order they are sat:
     question_type  the skill
     difficulty     easy | medium | hard
     stimulus       the passage, when there is one
     question       what is asked
     choices        A–D
     answer         the correct letter
   ========================================================================== */
JTS.data.addPaper({
  id: 'jts-p2',
  questionPrefix: 'p2',
  title: 'June 2025 INT V1',
  year: 2025,
  modules: [
    {
      key: 'rw1', section: 'rw',
      questions: [
        {
          "question_type": "words_in_context",
          "difficulty": "easy",
          "stimulus": "Portable video game consoles and other small electronic devices tend to _____ batteries that can't be easily taken out and swapped for new ones. Environmental policy researcher Carl Dalhammar warns that when these internal batteries stop working, the devices are usually thrown away, becoming harmful waste.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "contain",
            "B": "prepare",
            "C": "imagine",
            "D": "discover"
          },
          "answer": "A"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "easy",
          "stimulus": "A team of archaeologists examined 150 spherically shaped limestone rocks called spheroids that date back about 1.4 million years, concluding that early hominins intentionally chipped away at rocks to form these spheroids over time. The fact that their attempt to make the stones as round as possible was _____ suggests that early hominins may have been more cognitively sophisticated than previously thought.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "concerning",
            "B": "comparable",
            "C": "sympathetic",
            "D": "deliberate"
          },
          "answer": "D"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "easy",
          "stimulus": "The following text is adapted from George Bernard Shaw's 1905 play Major Barbara.\n\nLADY BRITOMART: You must learn to face life seriously, Stephen. I really cannot bear the whole burden of our family affairs any longer. You must advise me: you must assume the responsibility.\nSTEPHEN: I!\nLADY BRITOMART: Yes, you, of course. You were 24 last June.",
          "question": "As used in the text, what does the word “assume” most nearly mean?",
          "choices": {
            "A": "Infer",
            "B": "Mimic",
            "C": "Undertake",
            "D": "Presuppose"
          },
          "answer": "C"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "easy",
          "stimulus": "The following text is from Jerome K. Jerome's 1889 novel Three Men in a Boat (To Say Nothing of the Dog). The narrator and two friends are taking a boat down the River Thames in England.\n\nIn a boat, I have always noticed that it is the fixed idea of each member of the crew that he is doing everything. Harris's notion was, that it was he alone who had been working, and that both George and I had been imposing upon him. George, on the other hand, ridiculed the idea of Harris's having done anything more than eat and sleep, and had a cast-iron opinion that it was he—George himself—who had done all the labour worth speaking of.",
          "question": "Which choice best describes the main purpose of the text?",
          "choices": {
            "A": "To give an overview of a particular situation that the narrator finds startling",
            "B": "To examine how the narrator and his friends each contributed to navigating a challenge",
            "C": "To present the narrator's generalization along with supporting examples from a specific situation",
            "D": "To convey the narrator's confidence that he understands the role expected of him in a group"
          },
          "answer": "C"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "easy",
          "stimulus": "Saturn is the first planet in our solar system to be discovered to have more than 100 moons orbiting around it. A team of astronomers using the Canada-France-Hawaii Telescope (CFHT) in Hawaii detected 62 undiscovered moons that were previously too small or too dim to see. Saturn now outranks Jupiter as the planet in our solar system with the most observed moons.",
          "question": "Which choice best states the main purpose of the text?",
          "choices": {
            "A": "To note a new finding about the number of Saturn's moons",
            "B": "To explain how the CFHT works",
            "C": "To describe the atmospheric conditions of Jupiter",
            "D": "To discuss the history of Hawaii"
          },
          "answer": "A"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "medium",
          "stimulus": "The following text is from George Eliot's 1857 short story “The Sad Fortunes of the Rev. Amos Barton.” In the text, the narrator addresses the reader directly and alludes to a discussion among Rev. Amos Barton's neighbors.\n\nIt was happy for the Rev. Amos Barton that he did not, like us, overhear the conversation recorded in the last chapter: indeed, what mortal is there of us, who would find his satisfaction enhanced by an opportunity of comparing the picture he presents to himself of his own doings, with the picture they make on the mental retina of his neighbours? We are poor plants buoyed up by the air-vessels of our own conceit: alas for us, if we get a few pinches that empty us of that windy self-subsistence! The very capacity for good would go out of us.",
          "question": "Which choice best states the overall structure of the text?",
          "choices": {
            "A": "The narrator expresses relief that a disagreement was resolved more expediently than expected and then indicates how the situation might have gone differently.",
            "B": "The narrator comments on the fact that a character remains unaware of how he is viewed by others and then generalizes about the problem of learning others' opinions of one's own actions.",
            "C": "The narrator summarizes an earlier event involving a specific character and then anticipates the later significance it will have for that character.",
            "D": "The narrator implies that a character is not well liked by his neighbors and then uses an extended comparison to demonstrate why their negative opinion of him is largely justified."
          },
          "answer": "B"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "medium",
          "stimulus": "Allison Q. Byrne and colleagues relied on historical DNA (hDNA)—genomic data incidentally preserved in specimens housed in collections such as those at the Smithsonian National Museum of Natural History—to investigate the evolutionary origins of a pathogen affecting amphibians. Although this approach can yield many insights about the biological past, it remains a relatively underutilized resource in part because DNA is often to some extent degraded, a situation not easily remediable under current methodological paradigms and with extant DNA extraction and analysis technologies.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": {
            "A": "It presents a scientific study that relied on a particular approach, then describes a barrier to the widespread adoption of that approach.",
            "B": "It evaluates a research methodology used in a particular study, then explains how scientists may overcome difficulties inherent to that methodology.",
            "C": "It summarizes the findings of a scientific study, then discusses the possibility of other researchers replicating those findings in future studies.",
            "D": "It exemplifies a common method of genomic data analysis, then details the difficulties in adapting that method to new circumstances."
          },
          "answer": "A"
        },
        {
          "question_type": "cross_text_connections",
          "difficulty": "medium",
          "stimulus": "Text 1\nYale University and the investment bank JPMorgan Chase are two of the many institutions offering training programs in entrepreneurship. But what results do such programs produce? In a study of college students in Sweden, researcher Ove Hansemark addressed this question and found that participants showed strong belief in their entrepreneurial capabilities after receiving entrepreneurial training.\n\nText 2\nWhile studies of entrepreneurial training typically report positive results, a close look at these studies reveals widespread methodological shortcomings. For instance, a 1988 study by Ove Hansemark found benefits of entrepreneurial education for Swedish college students, but the study used a very small sample of only 19 students, making it difficult to say whether the training actually had an effect.",
          "question": "Based on the texts, how would the author of Text 2 most likely answer the underlined question in Text 1?",
          "choices": {
            "A": "Although the programs may seem to produce positive results, close analysis of studies of the programs shows that they produce negative results just as frequently.",
            "B": "It is unknown what results the programs produce because studies of them are often designed in ways that do not allow for definitive conclusions.",
            "C": "Most of the programs do not actually produce positive results even though program participants tend to regard them as beneficial.",
            "D": "The programs tend to produce inconsistent results because they vary substantially in their methods and aims."
          },
          "answer": "B"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "medium",
          "stimulus": "The 2020 novel The Only Good Indians confirmed that Stephen Graham Jones is one of the most talented writers of horror fiction today. By featuring main characters who are Blackfeet, the Jones himself, the novel also helped to ensure that Indigenous people have a place within the horror genre. But Jones is hardly the only Indigenous voice in horror: Métis author Cherie Dimaline has also written in the genre. Her acclaimed 2019 novel Empire of Wild is set in a Métis community in southern Canada.",
          "question": "According to the text, Stephen Graham Jones and Cherie Dimaline are similar in what way?",
          "choices": {
            "A": "Both have published fictional works featuring main characters who are Blackfeet.",
            "B": "Both are citizens of the Blackfeet Nation.",
            "C": "Both are Indigenous authors who have written horror fiction.",
            "D": "Both have said that they don't like reading horror fiction even though they write it."
          },
          "answer": "C"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "medium",
          "stimulus": "Spanning the 1920s to the 1980s, Mexican architect Luis Barragán's prolific career evolved through distinct phases. After traveling to the United States and Europe in the early 1930s and immersing himself in an international architectural discourse, Barragán began incorporating principles derived from functionalism and modernism in his work, as seen in the Chávez Peón de Ochoa House, whose unadorned geometric forms contrast with the historically inspired architecture found in the Aguilar House, one of Barragán's early projects in Guadalajara.",
          "question": "Which choice best states the main idea of the text?",
          "choices": {
            "A": "Barragán's designs of the Chávez Peón de Ochoa House and the Aguilar House are considered paragons of a functionalist and modernist aesthetic.",
            "B": "A notable shift in Barragán's design aesthetic reflects the influence of his time abroad.",
            "C": "Barragán's early work shows an initial dedication to a modernist aesthetic that he later abandoned.",
            "D": "Barragán's design of the Aguilar House is considered more experimental than his design for the Chávez Peón de Ochoa House."
          },
          "answer": "B"
        },
        {
          "question_type": "evidence_quantitative",
          "difficulty": "medium",
          "stimulus": "Hydroelectric Plants\n\nPlant | State | Mode | Generators in plant | Average power generation (MWh/yr) | Water source\nWoodruff | Florida | peaking | 3 | 133,864 | Lake Seminole Reservoir\nSuperior Falls | Michigan | run-of-river | 2 | 10,693 | Montreal River\nNorway | Indiana | run-of-river | 4 | 19,751 | Tippecanoe River\nWhite River | Wisconsin | run-of-river | 2 | 3,999 | White River\n\nIn 2021, Rocio Uría-Martínez, Megan M. Johnson, and Rui Shan published a report on hydroelectric power plants operating in the US as recently as 2019, and data from their report are shown in the table. Of the plants in the table, the plant with the lowest average power generated per year in 2019 was located in the state of _____.",
          "question": "Which choice most effectively uses data from the table to complete the assertion?",
          "choices": {
            "A": "Wisconsin.",
            "B": "Michigan.",
            "C": "Florida.",
            "D": "Indiana."
          },
          "answer": "A"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "medium",
          "stimulus": "When a company has a new product, it has to decide when to tell people about it. Companies usually announce a new product before it is released and available for purchase. Those announcements can increase consumer excitement, which can mean that more people will buy the product. But the effect fades quickly, so companies need to be careful in timing the announcement and the release of a new product.",
          "question": "Which finding, if true, would most directly support the underlined claim?",
          "choices": {
            "A": "Consumers tend to prefer new products over older products.",
            "B": "Consumers are more likely to buy a new product when they already use products from the company making the new product.",
            "C": "Consumer surveys show low excitement for new products that were announced a long time before they were released.",
            "D": "The kind of information a company provides about a new product helps determine how likely consumers are to buy the product."
          },
          "answer": "C"
        },
        {
          "question_type": "evidence_quantitative",
          "difficulty": "medium",
          "stimulus": "Individual | Site | Sex | Total number of peering events observed | Proportion of peering events directed at permanent residents of immature orangutans' home region\n1 | Suaq | female | 17 | 0.59\n13 | Tuanan | male | 27 | 0.15\n15 | Tuanan | male | 15 | 0.00\n6 | Tuanan | female | 6 | 0.67\n\nOne way that young orangutans acquire foraging skills is through a behavior scientists call peering—closely watching older orangutans as they engage in an activity that the young have not yet mastered. Since female orangutans typically remain in the same area from youth through adulthood and males do not, Beatrice Ehmann and her colleagues hypothesized that it is more advantageous for immature females than males to devote attention to orangutans who are permanent residents of the immature individual's home region, and this should be reflected in sex-specific differences in peering behavior.",
          "question": "Which choice best describes data from the table that support Ehmann and colleagues' hypothesis?",
          "choices": {
            "A": "Individual 6 and individual 1 directed a higher proportion of peering events at permanent residents of their home regions than did individual 13 and individual 15.",
            "B": "The proportion of peering events directed at permanent residents of the immature orangutans' home regions ranged from a low of 0.00 to a high of 0.67.",
            "C": "Individual 6 directed a higher proportion of peering events at permanent residents of its home region than did individual 1, and individual 13 directed a higher proportion of peering events at permanent residents of its home region than did individual 15.",
            "D": "Individual 13 engaged in 27 peering events, more than either individual 6 or individual 1."
          },
          "answer": "A"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "Founded in 1965 and originally established as a cultural extension of the United Farm Workers—a union representing many Mexican American agricultural workers at the time—the theater troupe El Teatro Campesino has achieved recognition as a source of inspiration for subsequent Chicano theater companies and as a contributor to the dramatic arts. In an article about the company, a theater historian posits that a significant stylistic influence on El Teatro's early performances was the audience-mediated slapstick comedy of some theater regularly popular in Mexico and the US Southwest in the 1920s and '30s.",
          "question": "Which quotation from the article would best illustrate the theater historian's claim?",
          "choices": {
            "A": "“The members of the company, which in addition to founder Luis Valdez consisted entirely of nonprofessional actors, traveled into farm fields, where they, with minimal props and costumes, performed comedy in the form of brief humorous vignettes.”",
            "B": "“The company was focused on the reality of the present situation and discovered that humor was often found in that reality; consequently, comedy became a tool to convey social critique while entertaining and inspiring audiences.”",
            "C": "“The company relied heavily on satire, humor, and references to contemporary popular culture as well as a make-do aesthetic—often referred to as rasquache—that reflected not only the troupe's limited financial resources but also its sociopolitical message.”",
            "D": "“The company presented actos, short comedy sketches, that often relied on exaggerated physical humor to groups of agricultural workers, whose reactions—enthusiastic cheers of appreciation and, occasionally, loud boos of disapproval—prompted performers to adjust the timing and delivery of the scenes.”"
          },
          "answer": "D"
        },
        {
          "question_type": "inferences",
          "difficulty": "medium",
          "stimulus": "In Switzerland, the white fuzzy mountain flowers known as edelweiss are widely treated as a symbol of strength and courage. Although edelweiss can thrive in extreme conditions, they aren't notably tougher or harder to reach than other mountain flowers growing in the Swiss Alps. Historian Tobias Scheidegger has shown that the popular view of the flowers originated in the mid-1800s when mountain climbing became popular in Switzerland. Mountain climbers spread the idea that the flowers grew only in steep, icy terrains that were dangerous to climb to. Scheidegger says that these claims were self-interested. He suggests that mountain climbers presented edelweiss in this way in order to _____.",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "share their observations about the unusual characteristics of edelweiss with scientists.",
            "B": "encourage more flower enthusiasts to explore the Swiss Alps.",
            "C": "make themselves appear brave and strong for being able to climb to difficult places where edelweiss supposedly grew.",
            "D": "prove that edelweiss were more common in the Swiss Alps than in other mountain regions in Europe."
          },
          "answer": "C"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "easy",
          "stimulus": "A number of scientific phenomena have been named after nineteenth-century Czech physiologist Jan Evangelista Purkinje, including the Purkinje effect, which _____ the eye's tendency to perceive objects as blue tinted in low-light conditions.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "has been",
            "B": "will have been",
            "C": "was",
            "D": "is"
          },
          "answer": "D"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "The fibularis longus and the _____ move the fibula and humerus, respectively.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "brachialis are cylindrical in shape, which are skeletal muscles, and help",
            "B": "brachialis are cylindrical in shape and help, which are skeletal muscles,",
            "C": "brachialis, which are skeletal muscles, are cylindrical in shape and help",
            "D": "brachialis are cylindrical, which are skeletal muscles, in shape and help"
          },
          "answer": "C"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "It was April of 1885 when Vincent van Gogh completed _____ of dozens to be featured in the upcoming exhibition, is an important part of Van Gogh's body of work.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "Study of Two Peasants, the drawing, one",
            "B": "Study of Two Peasants. The drawing, one",
            "C": "Study of Two Peasants, the drawing. One",
            "D": "Study of Two Peasants the drawing, one"
          },
          "answer": "B"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "Fernando Palma Rodríguez creates robotic sculptures that combine mechanical elements with materials like feathers, soil, and seeds. The artist is from a rural farming community outside Mexico City, and he studied engineering in college. The natural and mechanical _____ highlight these two aspects of his background.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "materials, that Palma Rodríguez uses in his art",
            "B": "materials that Palma Rodríguez uses in his art",
            "C": "materials that Palma Rodríguez uses in his art,",
            "D": "materials, that Palma Rodríguez uses in his art,"
          },
          "answer": "B"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "Exemplars of Stigler's law _____ there is the Argand diagram in astronomy, the Casegrain reflector, and in physics, the Fermi paradox. All the aforementioned share the trait of being named after individuals who were not their initial discoverers or inventors.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "abound, in mathematics,",
            "B": "abound in mathematics:",
            "C": "abound: in mathematics,",
            "D": "abound in mathematics;"
          },
          "answer": "B"
        },
        {
          "question_type": "transitions",
          "difficulty": "easy",
          "stimulus": "The eruption of Rusty Geyser in Yellowstone National Park is caused by a sequence of events. First, water seeps down through narrow channels in the bedrock. _____ magma heats the water and turns it into steam. Finally, that steam builds up enough pressure in the narrow channels to force the water above it to burst out of the ground.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Similarly,",
            "B": "On the contrary,",
            "C": "First of all,",
            "D": "Next,"
          },
          "answer": "D"
        },
        {
          "question_type": "transitions",
          "difficulty": "easy",
          "stimulus": "In the West African country of Sierra Leone, the percentage of the population living in cities rose from 40.6% to 42.9% between 2015 and 2020. _____ urbanization rates climbed across West Africa as a whole, rising 3.2 percentage points in that five-year period.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Concurrently,",
            "B": "For example,",
            "C": "In other words,",
            "D": "Eventually,"
          },
          "answer": "A"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "medium",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• Igneous rock is one of the three main types of rock.\n• It is formed when molten rock, known as magma or lava, cools.\n• Intrusive igneous rock forms when molten rock cools deep within Earth's crust.\n• Extrusive igneous rock forms when molten rock exits Earth's crust and cools on the surface.\n• Acadia National Park in Maine contains examples of intrusive igneous rock.\n• Crater Lake National Park in Oregon contains examples of extrusive igneous rock.",
          "question": "The student wants to contrast how the igneous rock at the two national parks formed. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "Acadia National Park contains examples of intrusive igneous rock; the other type of igneous rock is called extrusive igneous rock.",
            "B": "Acadia National Park's igneous rock formed from molten rock that cooled deep within Earth's crust, whereas Crater Lake National Park's igneous rock formed from molten rock that cooled after it exited Earth's crust.",
            "C": "Acadia National Park and Crater Lake National Park both contain igneous rock, which is formed when molten rock cools.",
            "D": "Two types of igneous rock, which is formed when molten rock cools, are intrusive igneous rock and extrusive igneous rock, both of which can be found in national parks."
          },
          "answer": "B"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "medium",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• Morning Haiku (2010) is a book of poetry by African American poet Sonia Sanchez.\n• Each poem in the book is a sequence of haiku.\n• According to the book's publisher, Penguin Random House, the book “celebrates the gifts of life and mourns the deaths of revered African American figures.”\n• The poem “15 haiku (for Toni Morrison)” is written as a sequence of fifteen haiku.\n• The poem “7 haiku (for Ray Brown)” is written as a sequence of seven haiku.",
          "question": "The student wants to contrast the number of haiku in each poem. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "The poem “15 haiku (for Toni Morrison)” consists of fifteen haiku, whereas the poem “7 haiku (for Ray Brown)” consists of seven.",
            "B": "Both “15 haiku (for Toni Morrison)” and “7 haiku (for Ray Brown)” can be found in Sanchez's 2010 collection Morning Haiku.",
            "C": "While “15 haiku (for Toni Morrison)” is about writer Toni Morrison, “7 haiku (for Ray Brown)” is about bassist Ray Brown.",
            "D": "The poems in Morning Haiku celebrate the lives or mourn the deaths of “revered African American figures,” according to the book's publisher, Penguin Random House."
          },
          "answer": "A"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "medium",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• The Japanese Ministry of the Environment made a list of 100 soundscapes of Japan.\n• Each soundscape on the list was selected for its cultural significance to Japan.\n• The sound of crickets on the banks of the Todo River is on the list.\n• The sound of water flowing over Nachi Falls is on the list.",
          "question": "The student wants to indicate that both soundscapes are on the list. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "Both the sound of crickets on the banks of the Todo River and the sound of water flowing over Nachi Falls are on the list.",
            "B": "The sound of water flowing over Nachi Falls is on the list.",
            "C": "The Japanese Ministry of the Environment made a list of 100 culturally significant soundscapes of Japan.",
            "D": "Each soundscape on the list, including the sound of crickets on the banks of the Todo River, was selected for its cultural significance to Japan."
          },
          "answer": "A"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• Maya Lin is an American artist known for her memorials and works of installation art.\n• She completed the Vietnam Veterans Memorial in 1982.\n• It is a memorial sculpture consisting of two 246-foot granite walls, and it is designed to commemorate veterans of the Vietnam War.\n• She completed Untitled (Topographic Landscape) in 1997.\n• It is an installation composed of wood that fills an entire gallery room.",
          "question": "The student wants to describe Untitled (Topographic Landscape) to a new audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "Artist Maya Lin is well known for her installation art, such as Untitled (Topographic Landscape) (1997), and for her memorials.",
            "B": "Though Maya Lin's Untitled (Topographic Landscape) (1997) is not a memorial, its gallery-filling scale may call to mind the imposing Vietnam Veterans Memorial, which consists of two 246-foot granite walls.",
            "C": "Maya Lin's Vietnam Veterans Memorial is a granite memorial sculpture that commemorates veterans of the Vietnam War, while Untitled (Topographic Landscape) is an installation artwork.",
            "D": "Completed in 1997, Maya Lin's Untitled (Topographic Landscape) is a large-scale installation artwork composed of wood that fills an entire gallery room."
          },
          "answer": "D"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• Australian ecologist Alison Lullfitz studied the distribution of Plantago debilis, a small shrub with edible tubers.\n• Lullfitz found that yorluk plants gathered at sites across southwest Australia had very similar DNA despite differences in soil conditions.\n• Lullfitz hypothesized that humans had transported the plant throughout the region.\n• Lullfitz consulted Shandell Cummings and Lynette Knapp, members of the area's Noongar Aboriginal group.\n• Cummings and Knapp confirmed that their ancestors carried yorluk when traveling across the region.",
          "question": "The student wants to explain Cummings and Knapp's contribution to Lullfitz's study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "Lullfitz found that Cummings and Knapp had information relevant to her study of Plantago debilis distribution.",
            "B": "Cummings and Knapp confirmed that DNA sequences from the Plantago debilis plants Lullfitz had gathered were in fact very similar.",
            "C": "Lullfitz consulted Cummings and Knapp, members of the Noongar Aboriginal group, who assisted with her study of Plantago debilis, a small shrub with edible tubers.",
            "D": "By indicating that their ancestors transported Plantago debilis, Cummings and Knapp provided information that supported Lullfitz's hypothesis."
          },
          "answer": "D"
        }
      ]
    },
    {
      key: 'rw2', section: 'rw',
      questions: [
        {
          "question_type": "words_in_context",
          "difficulty": "medium",
          "stimulus": "Some pieces of music might have _____ meanings—the compositions of Rosa Guraieb lend themselves to as many different interpretations as there are people to listen to them—and so as long as a listener's interpretation isn't willfully absurd or the result of inattention, it is difficult to justify the claim that the listener has misunderstood the piece.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "superficial",
            "B": "myriad",
            "C": "deficient",
            "D": "untenable"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "medium",
          "stimulus": "The following text is adapted from Neera's 1866 novel Teresa, translated by Martha King in 1998.\n\nBeyond the [porch] extended a piece of land, with some exaggeration called a garden. In truth, it had some flower beds that at first sight confirmed the illusion, particularly at that time of year, since the pansies were in bloom with their infinite shades, with the intense velvet of their dark leaves and the luminous silk of their pale leaves.",
          "question": "As used in the text, what does the word “confirmed” most nearly mean?",
          "choices": {
            "A": "Necessitated",
            "B": "Substantiated",
            "C": "Designated",
            "D": "Promised"
          },
          "answer": "B"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "If confirmed by other researchers, a newly reported measurement of W boson's mass could _____ the dominant theory of particle physics, the standard model, as the new measurement differs significantly from the standard model's prediction of the elementary particle's mass.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "satisfy",
            "B": "simplify",
            "C": "overtake",
            "D": "undermine"
          },
          "answer": "D"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "Theater and film scholars often draw parallels between the lives of performers and aspects of roles they've played; however, the most insightful of these discussions, such as Linda Costanzo Cahir's consideration of resemblances between actor Vivien Leigh and the character Blanche DuBois, maintain a rigid distinction between the actor and the character, taking care never to _____ them.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "conflate",
            "B": "epitomize",
            "C": "lambaste",
            "D": "overshadow"
          },
          "answer": "A"
        },
        {
          "question_type": "words_in_context",
          "difficulty": "hard",
          "stimulus": "Some social scientists argue that while a belief in the importance of freedom and progress is key to democracy, the public's understanding of history is also central to its subsequent comprehension of a state's politics, and if an electorate is to function, historical issues cannot remain the dominion only of academics. History is too _____ to leave to historians alone.",
          "question": "Which choice completes the text with the most logical and precise word or phrase?",
          "choices": {
            "A": "accessible",
            "B": "complex",
            "C": "critical",
            "D": "respectable"
          },
          "answer": "C"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "hard",
          "stimulus": "In Muscogee, an Indigenous language from the southeastern region of what is now the United States, hafki means “white,” whereas hafkifi is used to refer to two or more white things. This phenomenon, in which an element of a root word is repeated, sometimes with modification, within another word that is related to the root word, is called reduplication. In this case, the element “fi” in hafki gets repeated in hafkifi. There are many examples of this type of reduplication in Muscogee.",
          "question": "Which choice best describes the overall structure of the text?",
          "choices": {
            "A": "It identifies the most frequently occurring words in Muscogee, explains why it is difficult to translate these words into English, and then provides examples of languages other than English into which those words can be translated.",
            "B": "It explains the phenomenon of reduplication, discusses why reduplication has been controversial among scholars, and then argues that an analysis of Muscogee could help resolve that controversy.",
            "C": "It describes the relationship between Muscogee and several other languages, raises a question about the nature of that relationship, and then answers that question.",
            "D": "It presents some specific words in Muscogee, describes the general linguistic phenomenon exemplified by those words, and then states that this phenomenon occurs frequently in Muscogee."
          },
          "answer": "D"
        },
        {
          "question_type": "text_structure_purpose",
          "difficulty": "hard",
          "stimulus": "Benjamin Prud'homme and colleagues have explored how convergent evolution—a phenomenon that occurs when the same trait evolves independently in two reproductively separate lineages—can result from a genetic mechanism shared by both lineages. Meanwhile, Cynthia C. Steiner and colleagues have investigated how convergence occurs through different genetic mechanisms. However, the relative prevalence of convergence through shared and different genetic processes is still poorly understood. This motivated biologists Delbert A. Green II and Cassandra G. Extavour to evaluate both types of convergence in a single study for their 2012 paper.",
          "question": "Which choice best states the function of the underlined sentence in the text as a whole?",
          "choices": {
            "A": "It introduces researchers who will be discussed in greater detail later in the text.",
            "B": "It gives an example of how some scientists had studied a phenomenon before another study mentioned later in the text was conducted.",
            "C": "It outlines a study that was influenced by the researchers mentioned later in the text.",
            "D": "It clarifies a concept that is unclear in some of the studies mentioned in the text."
          },
          "answer": "B"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "The blue shark and the striped marlin are ectothermic (cold-blooded) fish, whereas the salmon shark and the Pacific bluefin tuna are regional endotherms—they retain metabolic heat resulting in body temperatures above the ambient water temperature. Unlike those of ectotherms, regional endotherms' hearts have a relatively high proportion (greater than 30%) of compact myocardial tissue, which is needed to maintain these animals' blood pressure. In a 2023 study, Haley R. Dolton and colleagues found that basking sharks—planktivorous filter-feeders that were classified as full ectotherms at the time—have hearts consisting of 47% compact myocardial tissue, thereby undermining that classification.",
          "question": "According to the text, which choice most accurately describes the importance of the percentage of compact myocardial tissue in the basking shark's heart?",
          "choices": {
            "A": "It is insufficient to establish that the basking shark should be categorized as Dolton and colleagues suggest.",
            "B": "It is higher than that of the salmon shark, a regional endotherm, despite the basking shark being a full ectotherm.",
            "C": "It is higher than that of the Pacific bluefin tuna, a regional endotherm, which calls into question the basking shark's status as a regional endotherm.",
            "D": "It is by itself sufficient to invalidate how the basking shark has been categorized in the past."
          },
          "answer": "D"
        },
        {
          "question_type": "central_ideas",
          "difficulty": "hard",
          "stimulus": "Philosophers note that many people have an intuitive sense that while we ought not to lie, there may be circumstances in which lying is permissible. If this intuition is correct and we lack an inviolable duty to speak truthfully, what grounds opposition to lying in the first place? Japa Pallikkathayil has advanced one answer by appealing to a duty to respect others' agential interests: the possession of false beliefs constrains agency, and thus we ought not to impede the formation of true beliefs unless doing so prevents a greater constraint on someone's agency or an otherwise impermissible end.",
          "question": "Which choice best states the main idea of the text?",
          "choices": {
            "A": "Pallikkathayil's argument suggests that if we have a duty to respect other people's agential interests and if possession of false beliefs constrains agency, then we have an inviolable duty to speak truthfully.",
            "B": "Pallikkathayil's argument shows that if our intuition that circumstances may make lying permissible is correct, then it is unclear whether there are any grounds for an opposition to lying in the first place.",
            "C": "One potential means of justifying opposition to lying is Pallikkathayil's argument that we have an obligation to respect other people's agency that entails a commitment to truthfulness except in certain circumstances.",
            "D": "Many people have an intuitive sense that lying is permissible in some circumstances but lack a principled way to identify those circumstances, and Pallikkathayil's argument may provide a means of resolving that problem."
          },
          "answer": "C"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "To detect information about water flow, fish have sensors running from the snout up down the sides of the head. Yuzo R. Yanagitsu, Otar Akanyeti, and James C. Liao conducted tests to find where the difference in pressure is greatest between two adjacent sensors because, according to the researchers, as these pressure differences increase, so does the amount of information available to the fish. Using the ratio of head width to length, they found that the greatest pressure difference is closer to the snout for narrower heads (lower ratio of width to length) and farther from the snout for wider heads (higher ratio of width to length). Based on this finding, a second team of researchers has hypothesized that the sensors where information is greatest are likely more sensitive than the rest.",
          "question": "Which finding, if true, would most directly support the second research team's hypothesis?",
          "choices": {
            "A": "The longnose gar (Lepisosteus osseus) has a much narrower head than the devil catfish (Bagarius bagarius), and the most sensitive sensors of the longnose gar are closer to the snout than are those of the devil catfish.",
            "B": "The longnose gar (Lepisosteus osseus) has a much narrower head than the devil catfish (Bagarius bagarius), and the most sensitive sensors for both are very close to their snouts.",
            "C": "The longnose gar (Lepisosteus osseus) has a much narrower head than the devil catfish (Bagarius bagarius), and while the sensors nearest the snout for the longnose gar are more sensitive than the others, for the devil catfish all sensors are equally sensitive.",
            "D": "The longnose gar (Lepisosteus osseus) has a much narrower head than the devil catfish (Bagarius bagarius), and the most sensitive sensors for the devil catfish are closer to the snout than are those for the longnose gar."
          },
          "answer": "C"
        },
        {
          "question_type": "evidence_quantitative",
          "difficulty": "hard",
          "stimulus": "Electricity Capacity Trends (in megawatts) for Four Renewable Technologies in Indonesia (2017–2020)\n\nEnergy | 2017 | 2018 | 2019 | 2020\nGeothermal | 1,808 | 1,948 | 2,131 | 2,131\nRenewable hydropower | 5,703 | 5,773 | 5,976 | 6,141\nSolar | 97.4 | 65.5 | 155 | 185.3\nWind | 1.5 | 143.5 | 154.3 | 154.3\n\nIndonesia is trying to increase its electricity capacity (the maximum amount of electricity that can be generated) for renewable energy in order to reduce dependence on fossil fuels, which can be costly financially and environmentally. From 2017 to 2020, Indonesia's use of four renewable technologies has trended upward, but not uniformly; the electricity capacity of solar power fell from 97.4 megawatts in 2017 to 65.5 megawatts in 2018, and the electricity capacity of _____.",
          "question": "Which choice most effectively uses data from the graph to complete the assertion?",
          "choices": {
            "A": "both geothermal and wind neither increased nor decreased from 2019 to 2020.",
            "B": "both wind and solar never surpassed that of renewable hydropower throughout the four-year period.",
            "C": "wind was much lower in 2017 than it was in 2018, 2019, or 2020.",
            "D": "renewable hydropower was much higher than that of solar for all four years."
          },
          "answer": "A"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "In a series of experiments, Julio Sevilla and Claudia Townsend showed that manipulating the space between products in store displays can influence consumers' views of those products. Participants in several of the experiments regarded the same products in the same (generic) retail settings as significantly more valuable when the product-to-space ratio was low than when it was high. But in one of the experiments, Sevilla and Townsend arranged the same jewelry with different levels of intervening space at an upscale retailer (Tiffany & Co.) and a relatively inexpensive retailer (Forever 21). The result of this experiment suggests that a store context associated with inexpensive products may moderate the effect Sevilla and Townsend observed in their other experiments.",
          "question": "Which finding from the experiment would best support the researchers' conclusion?",
          "choices": {
            "A": "At both Tiffany & Co. and Forever 21, participants judged jewelry spaced far apart to be less valuable than jewelry spaced close together, but the difference in perceived value was significantly greater at Tiffany & Co. than at Forever 21.",
            "B": "When jewelry was spaced far apart, participants judged the jewelry at Tiffany & Co. to be more valuable than the jewelry at Forever 21, but when jewelry was spaced close together, participants judged the jewelry at Tiffany & Co. to be less valuable than the jewelry at Forever 21.",
            "C": "At Tiffany & Co., participants judged jewelry spaced far apart to be substantially more valuable than jewelry spaced close together, but at Forever 21, participants judged jewelry spaced far apart to be only slightly more valuable than jewelry spaced close together.",
            "D": "Participants judged jewelry spaced far apart at Tiffany & Co. to be similar in value to jewelry spaced far apart at Forever 21, but participants judged jewelry spaced close together at Tiffany & Co. to be more valuable than jewelry spaced close together at Forever 21."
          },
          "answer": "C"
        },
        {
          "question_type": "evidence_textual",
          "difficulty": "hard",
          "stimulus": "The Clouds is a 423 BCE play by Aristophanes, originally written in ancient Greek. At the time, professional intellectuals called sophists taught paying customers a variety of subjects and sometimes engaged in what would now be described as research. Aristophanes satirizes sophists' practices and views as foolish, as seen when the character _____.",
          "question": "Which choice most effectively uses a quotation from a translation of The Clouds to illustrate the claim?",
          "choices": {
            "A": "Strepsiades, after taking lessons from a sophist, says to his son, “Approach, that you may know more; and I will tell you a thing, by learning which you will be a man. But see that you do not teach this to any one.”",
            "B": "Socrates, a sophist, says to a potential customer, “I wish to briefly learn from you if you are possessed of a good memory.”",
            "C": "Strepsiades encourages his son to learn to be a sophist, saying, “If you have any concern for your father's patrimony, become one of them.”",
            "D": "Socrates, a sophist, explains why he studies astronomy while sitting in a basket hanging a few feet off the ground, saying, “I should not have rightly discovered things celestial if I had not suspended the intellect, and mixed the thought in a subtle form with its kindred air.”"
          },
          "answer": "D"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "The single origin hypothesis of iron metallurgy posits that the craft originated in Anatolia (West Asia) circa 2200–2000 BCE before diffusing to other parts of the world, including Africa. Some proponents of the hypothesis argue that iron production technologies first arrived in North Africa through Carthage, where the earliest evidence of ironworking dates to approximately 800–600 BCE, before these technologies spread to sub-Saharan Africa over the following centuries. However, excavation of multiple sites on the Adamawa plateau in Central Africa conducted by Étienne Zangato and Augustin Holl uncovered evidence of iron workshops that may have been in operation as late as 900–750 BCE in Gbabiri and as early as 2300–1900 BCE in Oboui and Gbatoro. These findings suggest that _____.",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "iron production may have originated in Anatolia much earlier than the available evidence currently indicates.",
            "B": "iron production technologies were likely transmitted from Anatolia to Central Africa via an alternate route than the one suggested by some proponents of the single origin hypothesis.",
            "C": "iron production technologies found in Gbabiri likely derived directly from technologies transmitted from Anatolia, but those found in Oboui and Gbatoro did not.",
            "D": "iron production may have developed independently and relatively simultaneously in Anatolia and parts of Central Africa."
          },
          "answer": "D"
        },
        {
          "question_type": "inferences",
          "difficulty": "hard",
          "stimulus": "Exclusively inhabiting tropical countries such as Ghana, wild chimpanzees lack adaptations to seasonal variations in ultraviolet B (UVB) irradiance from sunlight; since UVB exposure enables vertebrates to synthesize vitamin D, Sophie Moittié and colleagues studied zoo chimpanzees in Spain and other mid-latitude countries to see how vitamin D levels are affected by the seasonal variations in UVB irradiance that occur in those locations. They found the chimpanzees' vitamin D level were significantly lower in autumn than in summer and appeared unaffected by oral supplementation of vitamin D administered by zookeepers. Moittié and colleagues point out, however, that supplementation was rare, highly varied, and poorly tracked, and therefore _____.",
          "question": "Which choice most logically completes the text?",
          "choices": {
            "A": "the effect of supplemental vitamin D on zoo chimpanzees in Spain and other mid-latitude countries can more clearly be observed in summer than in autumn.",
            "B": "the possibility that zoo chimpanzees in Spain and other mid-latitude countries would benefit from supplemental vitamin D during autumn cannot be excluded.",
            "C": "vitamin D levels in zoo chimpanzees in Spain and other mid-latitude countries may be higher during autumn than Moittié and colleagues' data appear to indicate.",
            "D": "differences in vitamin D supplementation likely explain none of the difference in vitamin D levels across zoo chimpanzees in Spain and other mid-latitude countries than seasonal differences in UVB irradiation do."
          },
          "answer": "B"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "Established in 1936 by African American novelist Richard Wright, _____ it would become a vital part of the creative movement known as the Chicago Black Renaissance.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "the South Side Writers Group provided a valuable forum for Chicago writers to share ideas;",
            "B": "writers shared ideas at a valuable forum known as the South Side Writers Group in Chicago;",
            "C": "Chicago was where the South Side Writers Group provided a valuable forum for writers to share ideas;",
            "D": "Chicago writers in the South Side Writers Group had a valuable forum for sharing ideas;"
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "medium",
          "stimulus": "The 1948 founding of the American GI Forum and the 1946 Mendez v. Westminster court decision are regarded as important events in US civil rights _____ former establishing a Latino rights advocacy group and the latter legally affirming the rights of Latino students.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "history, the",
            "B": "history, as the",
            "C": "history; the",
            "D": "history. The"
          },
          "answer": "A"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "Trisyllabic words _____ as dactyls in English metrical verse, such as “article” and “sleeper,” consist of one stressed syllable followed by two unstressed syllables.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "have been classified",
            "B": "are classified",
            "C": "can be classified",
            "D": "classified"
          },
          "answer": "D"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "Scheme is referred to as a compiled programming language because it typically incorporates a compiler—a tool that translates lines of code into executable commands. Compiling isn't exclusive to certain programming _____ any language can incorporate this tool.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "languages; however,",
            "B": "languages, however;",
            "C": "languages. However,",
            "D": "languages, however"
          },
          "answer": "A"
        },
        {
          "question_type": "boundaries",
          "difficulty": "hard",
          "stimulus": "Reena Esmail, an Indian American classical composer, incorporates Indian musical elements into her work. Esmail's 2013 violin and piano composition Jhula Jhule intertwines the melodies of two Indian folk _____ in TāReKiTa, a 2016 choral composition, Esmail features onomatopoeic notes imitating the sounds of the tabla, a type of Indian drum.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "songs, for instance,",
            "B": "songs. For instance, while",
            "C": "songs; for instance,",
            "D": "songs, for instance, while"
          },
          "answer": "C"
        },
        {
          "question_type": "form_structure_sense",
          "difficulty": "medium",
          "stimulus": "The Museum of Modern Art's vast collection of oil paintings, which includes James Ensor's Tribulations of Saint Anthony and Taso Kounellis's Self-Portrait as a Golf Player, _____ among its most captivating offerings.",
          "question": "Which choice completes the text so that it conforms to the conventions of Standard English?",
          "choices": {
            "A": "remain",
            "B": "have remained",
            "C": "remains",
            "D": "have been remaining"
          },
          "answer": "C"
        },
        {
          "question_type": "transitions",
          "difficulty": "easy",
          "stimulus": "The traditional process of Turkish paper marbling (ebru) generally proceeds like this: First, the artisan fills a shallow tray with a water bath solution. Next, the artisan adds inks or paints to the solution, which can then be manipulated into intricate designs. _____ the artisan slips paper in and out of the liquid, transferring the design onto the paper.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Nevertheless,",
            "B": "Therefore,",
            "C": "Actually,",
            "D": "Finally,"
          },
          "answer": "D"
        },
        {
          "question_type": "transitions",
          "difficulty": "medium",
          "stimulus": "In the early 1900s, sculptor and collector Gertrude Whitney was one of the foremost champions of avant-garde art, helping many US avant-garde artists gain publicity and exposure. _____ Whitney offered to donate more than 500 avant-garde works to be displayed at a leading New York museum, but the museum said no—so she opened her own, the Whitney Museum of American Art.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "To this end,",
            "B": "In other words,",
            "C": "In contrast,",
            "D": "Granted,"
          },
          "answer": "A"
        },
        {
          "question_type": "transitions",
          "difficulty": "hard",
          "stimulus": "The geologic principle of cross-cutting relationships states that an intrusion is younger than the rocks through which it cuts. _____ geophysicists analyzing a given rock formation can ascertain that an igneous intrusion that bisects a layer of 358.5-million-year-old Tournaisian rock but not the 303.7-million-year-old Gzhelian rock above it is younger than the former but older than the latter.",
          "question": "Which choice completes the text with the most logical transition?",
          "choices": {
            "A": "Accordingly,",
            "B": "Moreover,",
            "C": "To this end,",
            "D": "That being said,"
          },
          "answer": "A"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• 1926: The US Congress gave the US Commerce Department authority to regulate safety standards in the fledgling commercial airline industry.\n• 1938: Congress transferred this authority to a new independent government agency called the Civil Aeronautics Authority (CAA).\n• 1958: Congress transferred authority from the CAA to the newly established Federal Aviation Administration (FAA).\n• The FAA's first administrator, Elwood R. Quesada, updated safety standards and technologies for the era of commercial jets.\n• The FAA remains the regulatory authority for airline safety.",
          "question": "The student wants to specify the order in which different government entities were given the authority to regulate airline safety in the US. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "The authority to regulate US airline safety transferred from the US Commerce Department to the CAA in 1938, then from the CAA to the FAA in 1958.",
            "B": "The CAA had the authority to regulate safety for US airlines from 1938 until 1958, at which point authority was transferred to the US Commerce Department by Elwood R. Quesada.",
            "C": "The FAA, CAA, and the US Commerce Department all had the authority to regulate US airline safety, but they possessed this authority at different times.",
            "D": "The FAA has regulated airline safety since it was established by the US Congress in 1958."
          },
          "answer": "A"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• R. Oleksy, L. Giuggioli, and T.J. McKetterick published a study in 2017.\n• In it, the researchers found that ingestion by bats had a positive effect on the germination of Ficus grevei plant seeds.\n• Jorge E. López and C. Vaughan published a study in 2004.\n• In it, the researchers found that ingestion by bats had a neutral effect on the germination of Sema platyceps plant seeds.\n• J.M. Palmeirim, D.L. Gorchov, and S. Stoleson published a study in 1989.\n• In it, the researchers found that ingestion by bats had a negative effect on the germination of Piper friedrichsthalii plant seeds.",
          "question": "The student wants to make a generalization about the germination of seeds ingested by bats. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
          "choices": {
            "A": "Seed ingestion by bats can have varying effects on seed germination.",
            "B": "Over the years, researchers have studied the effect that seed germination has had on ingestion by bats.",
            "C": "As was found in the 2017 study, ingestion by bats has a negative effect on the germination of plant seeds.",
            "D": "Bat ingestion has consistently been found to have a positive effect on seed germination."
          },
          "answer": "A"
        },
        {
          "question_type": "rhetorical_synthesis",
          "difficulty": "hard",
          "stimulus": "While researching a topic, a student has taken the following notes:\n• Linguists use phonemes to represent the smallest possible units of sound within a word.\n• In English, the phoneme /p/ has bilabial articulation, which means it is produced using one or both lips, such as in the word “pan.”\n• The phoneme /l/ has alveolar articulation, which means it is produced by placing the tongue against or near the roof of the mouth, such as in the word “zoo.”\n• /p/ is plosive, a term used for sounds in which air flow is at first fully blocked.\n• /l/ is fricative, a term used for sounds in which air flow is partially blocked.",
          "question": "Which choice most effectively uses information from the given sentences to explain plosive phonemes?",
          "choices": {
            "A": "The phoneme /l/, a unit of sound in which air flow is at first fully blocked, has labial articulation.",
            "B": "The phoneme /p/ in the word “pan” is plosive and is produced using both lips.",
            "C": "The linguistic term of fricative is used for units of sound in which air flow is partially blocked.",
            "D": "In linguistics, plosive is a term used for units of sound in which air flow is at first fully blocked."
          },
          "answer": "D"
        }
      ]
    }
  ]
});