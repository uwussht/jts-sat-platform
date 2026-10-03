/* Reading and Writing — Expression of Ideas. 398 SAT question-bank items. */
/*
   SAT subtopics in this file:
   - Rhetorical Synthesis (204)
   - Transitions (194)

   This replaces the previous 20 original Expression of Ideas items.
   Source Question IDs, difficulty levels, answer choices, correct answers, and
   source rationales are preserved from the supplied SAT question-bank PDF.

   Language note: the source provides English explanations only. L() intentionally
   falls back to the English source explanation for EN/RU/KK instead of inventing translations.
*/

(function () {
  var M = JTS.data.jtsMeta;
  function L(en) { return { en: en, ru: en, kk: en }; }
  function SM(id, sourceQuestionId, sourcePage) {
    var base = {};
    try { base = (typeof M === "function" ? (M(id) || {}) : {}); } catch (e) { base = {}; }
    base.sourceQuestionId = sourceQuestionId;
    base.sourcePage = sourcePage;
    base.source = "SAT Question Bank PDF";
    return base;
  }

  /* ================= rw.ei.rhetorical-synthesis — Rhetorical Synthesis (204) ================= */
  JTS.data.addQuestions([
    {
      id: "rw-rs-afec1a70",
      sourceQuestionId: "afec1a70",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">As engineered structures, many bird nests are uniquely flexible yet cohesive.</li><li style=\"margin:.25em 0\">A research team led by Yashraj Bhosale wanted to better understand the mechanics behind these structural properties.</li><li style=\"margin:.25em 0\">Bhosale’s team used laboratory models that simulated the arrangement of flexible sticks into nest-like structures.</li><li style=\"margin:.25em 0\">The researchers analyzed the points where sticks touched one another.</li><li style=\"margin:.25em 0\">When pressure was applied to the model nests, the number of contact points between the sticks increased, making the structures stiffer.</li></ul>",
      stem: "The student wants to present the primary aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Bhosale’s team wanted to better understand the mechanics behind bird nests’ uniquely flexible yet cohesive structural properties.", "The researchers used laboratory models that simulated the arrangement of flexible sticks and analyzed the points where sticks touched one another.", "After analyzing the points where sticks touched, the researchers found that the structures became stiffer when pressure was applied.", "As analyzed by Bhosale’s team, bird nests are uniquely flexible yet cohesive engineered structures."],
      answer: "A",
      explanation: L("Choice A is the best answer. It describes the reason Bhosale’s team wanted to study the structures of bird nests—that is to say, the study’s primary aim."),
      distractors: {
        B: L("Choice B is incorrect. This choice doesn’t present the primary aim of the research study. It describes how the study worked, but not why it was done."),
        C: L("Choice C is incorrect. This choice doesn’t present the primary aim of the research study. It describes a result of the experiment, but not why it was carried out."),
        D: L("Choice D is incorrect. This choice doesn’t present the primary aim of the research study.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-afec1a70", "afec1a70", 2)
    },
    {
      id: "rw-rs-39ccb463",
      sourceQuestionId: "39ccb463",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Atlantic Monthly magazine was first published in 1857.</li><li style=\"margin:.25em 0\">The magazine focused on politics, art, and literature.</li><li style=\"margin:.25em 0\">In 2019, historian Cathryn Halverson published the book Faraway Women and the “Atlantic Monthly.”</li><li style=\"margin:.25em 0\">Its subject is female authors whose autobiographies appeared in the magazine in the early 1900s.</li><li style=\"margin:.25em 0\">One of the authors discussed is Juanita Harrison.</li></ul>",
      stem: "The student wants to introduce Cathryn Halverson’s book to an audience already familiar with the Atlantic Monthly. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Cathryn Halverson’s Faraway Women and the “Atlantic Monthly” discusses female authors whose autobiographies appeared in the magazine in the early 1900s.", "A magazine called the Atlantic Monthly, referred to in Cathryn Halverson’s book title, was first published in 1857.", "Faraway Women and the “Atlantic Monthly” features contributors to the Atlantic Monthly, first published in 1857 as a magazine focusing on politics, art, and literature.", "An author discussed by Cathryn Halverson is Juanita Harrison, whose autobiography appeared in the Atlantic Monthly in the early 1900s."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence effectively introduces Cathryn Halverson’s book to an audience already familiar with the Atlantic Monthly, noting the title of Halverson’s book and describing its content without providing background information about the Atlantic Monthly."),
      distractors: {
        B: L("Choice B is incorrect. The sentence introduces the Atlantic Monthly and mentions that it’s referred to in Cathryn Halverson’s book title; it doesn’t effectively introduce Halverson’s book."),
        C: L("Choice C is incorrect. The sentence assumes that the audience is unfamiliar with the Atlantic Monthly, providing background information about the magazine; it doesn’t effectively introduce Halverson’s book to an audience already familiar with the Atlantic Monthly."),
        D: L("Choice D is incorrect. While the sentence assumes that the audience is familiar with the Atlantic Monthly, it doesn’t effectively introduce Cathryn Halverson’s book.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-39ccb463", "39ccb463", 7)
    },
    {
      id: "rw-rs-af76771f",
      sourceQuestionId: "af76771f",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Sue is the nickname of a dinosaur fossil specimen housed at the Field Museum of Natural History.</li><li style=\"margin:.25em 0\">The Field Museum of Natural History is located in Chicago, Illinois.</li><li style=\"margin:.25em 0\">Sue is a member of the genus Tyrannosaurus.</li><li style=\"margin:.25em 0\">Big Mike is the nickname of a dinosaur fossil specimen housed at the Museum of the Rockies.</li><li style=\"margin:.25em 0\">The Museum of the Rockies is located in Bozeman, Montana.</li><li style=\"margin:.25em 0\">Big Mike is a member of the genus Tyrannosaurus.</li></ul>",
      stem: "The student wants to emphasize a similarity between the two specimens. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Field Museum of Natural History, where Sue is housed, is located in Chicago, Illinois.", "Big Mike is the nickname of a Tyrannosaurus fossil specimen housed at the Museum of the Rockies in Bozeman, Montana.", "The dinosaur fossil specimens Sue and Big Mike are both members of the genus Tyrannosaurus.", "While Sue is housed at the Field Museum of Natural History, Big Mike is housed at the Museum of the Rockies."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes a similarity between the two specimens, noting that Sue and Big Mike are members of the same genus: Tyrannosaurus."),
      distractors: {
        A: L("Choice A is incorrect. The sentence only provides information about where one of the specimens (Sue) can be found; it doesn’t emphasize a similarity between the two specimens."),
        B: L("Choice B is incorrect. The sentence only provides information about one specimen (Big Mike); it doesn’t emphasize a similarity between the two specimens."),
        D: L("Choice D is incorrect. The sentence contrasts the locations of Sue and Big Mike; it doesn’t emphasize a similarity between the two specimens.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-af76771f", "af76771f", 8)
    },
    {
      id: "rw-rs-064c8999",
      sourceQuestionId: "064c8999",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Haber-Bosch process is an industrial process used to manufacture ammonia (NH 3).</li><li style=\"margin:.25em 0\">It was invented by chemists Fritz Haber and Carl Bosch in 1910.</li><li style=\"margin:.25em 0\">The process’s primary reaction combines nitrogen (N 2) from the air with hydrogen (H 2).</li><li style=\"margin:.25em 0\">It requires an iron catalyst and high temperatures and pressures.</li><li style=\"margin:.25em 0\">Most of the ammonia produced by this process is used in fertilizers.</li></ul>",
      stem: "The student wants to provide an overview of the Haber-Bosch process. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Haber-Bosch process needs nitrogen, hydrogen, and an iron catalyst.", "The Haber-Bosch process uses an iron catalyst along with high temperatures and pressures to manufacture ammonia from nitrogen and hydrogen.", "Chemists Fritz Haber and Carl Bosch invented an industrial process to manufacture ammonia to be used in fertilizers.", "In 1910, chemists Fritz Haber and Carl Bosch invented the Haber-Bosch process, which requires high temperatures and pressures."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence provides an overview of the Haber-Bosch process, explaining that it uses an iron catalyst, high temperatures, and high pressures to manufacture ammonia from nitrogen and hydrogen."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence identifies some of the process’s required components (nitrogen, hydrogen, and an iron catalyst), the overview is incomplete; it doesn’t explain what the process does (produces ammonia) or mention the conditions needed for it to function (high temperatures and pressures)."),
        C: L("Choice C is incorrect. While the sentence indicates who invented the process (Fritz Haber and Carl Bosch) and that it produces ammonia, the overview is incomplete; it doesn’t mention any of the necessary ingredients or conditions."),
        D: L("Choice D is incorrect. While the sentence mentions the inventors of the process along with the required conditions (high temperatures and pressures), it doesn’t explain that the process produces ammonia or indicate what components are needed.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-064c8999", "064c8999", 9)
    },
    {
      id: "rw-rs-b46e0c8a",
      sourceQuestionId: "b46e0c8a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Organisms release cellular material into their environment by shedding substances such as hair or skin.</li><li style=\"margin:.25em 0\">The DNA in these substances is known as environmental DNA, or eDNA.</li><li style=\"margin:.25em 0\">Researchers collect and analyze eDNA to detect the presence of species that are difficult to observe.</li><li style=\"margin:.25em 0\">Geneticist Sara Oyler-McCance’s research team analyzed eDNA in water samples from the Florida Everglades to detect invasive constrictor snake species in the area.</li><li style=\"margin:.25em 0\">The study determined a 91% probability of detecting Burmese python eDNA in a given location.</li></ul>",
      stem: "The student wants to present the study to an audience already familiar with environmental DNA. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Sara Oyler-McCance’s researchers analyzed eDNA in water samples from the Florida Everglades for evidence of invasive constrictor snakes, which are difficult to observe.", "An analysis of eDNA can detect the presence of invasive species that are difficult to observe, such as constrictor snakes.", "Researchers found Burmese python eDNA, or environmental DNA, in water samples; eDNA is the DNA in released cellular materials, such as shed skin cells.", "Sara Oyler-McCance’s researchers analyzed environmental DNA (eDNA)—that is, DNA from cellular materials released by organisms—in water samples from the Florida Everglades."],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice presents the study in a way that assumes the audience is already familiar with eDNA."),
      distractors: {
        B: L("Choice B is incorrect. This choice doesn’t present the study. It only states a general fact about eDNA analysis."),
        C: L("Choice C is incorrect. This choice isn’t suited for an audience already familiar with eDNA. A familiar audience wouldn’t need to have the term defined or explained."),
        D: L("Choice D is incorrect. This choice isn’t suited for an audience already familiar with eDNA. A familiar audience wouldn’t need to have the term defined or explained. It also doesn’t present the study.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-b46e0c8a", "b46e0c8a", 10)
    },
    {
      id: "rw-rs-48d0bb34",
      sourceQuestionId: "48d0bb34",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Sam Maloof (1916–2009) was an American woodworker and furniture designer.</li><li style=\"margin:.25em 0\">He was the son of Lebanese immigrants.</li><li style=\"margin:.25em 0\">He received a “genius grant” from the John D. and Catherine T . MacArthur Foundation in 1985.</li><li style=\"margin:.25em 0\">The Museum of Fine Arts in Boston, Massachusetts, owns a rocking chair that Maloof made from walnut wood.</li><li style=\"margin:.25em 0\">The armrests and the seat of the chair are sleek and contoured, and the back consists of seven spindle-like slats.</li></ul>",
      stem: "The student wants to describe the rocking chair to an audience unfamiliar with Sam Maloof. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["With its sleek, contoured armrests and seat, the walnut rocking chair in Boston’s Museum of Fine Arts is just one piece of furniture created by American woodworker Sam Maloof.", "Sam Maloof was born in 1916 and died in 2009, and during his life, he made a chair that you can see if you visit the Museum of Fine Arts in Boston.", "Furniture designer Sam Maloof was a recipient of one of the John D. and Catherine T . MacArthur Foundation’s “genius grants. ”", "The rocking chair is made from walnut, and it has been shaped such that its armrests and seat are sleek and contoured."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence effectively describes the rocking chair to an audience unfamiliar with Sam Maloof, noting its sleek, contoured armrests and seat and explaining that Sam Maloof (the walnut chair’s creator) was an American woodworker."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence explains who Sam Maloof was and mentions a chair, it doesn’t describe the chair."),
        C: L("Choice C is incorrect. While the sentence explains who Sam Maloof was, it doesn’t describe the rocking chair."),
        D: L("Choice D is incorrect. While the sentence describes the rocking chair, it doesn’t explain who Sam Maloof was.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-48d0bb34", "48d0bb34", 11)
    },
    {
      id: "rw-rs-aa7e10d0",
      sourceQuestionId: "aa7e10d0",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Species belonging to the Orchidaceae (orchid) family can be found in both tropical and temperate environments.</li><li style=\"margin:.25em 0\">Orchidaceae species diversity has not been well studied in temperate forests, such as those in Oaxaca, Mexico.</li><li style=\"margin:.25em 0\">Arelee Estefanía Muñoz-Hernández led a study to determine how many different Orchidaceae species are present in the forests of Oaxaca.</li><li style=\"margin:.25em 0\">Muñoz-Hernández and her team collected orchids each month for a year at a site in Oaxaca.</li><li style=\"margin:.25em 0\">Seventy-four Orchidaceae species were present at the site.</li></ul>",
      stem: "The student wants to present the study and its findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A study led by Arelee Estefanía Muñoz-Hernández identified a total of 74 Orchidaceae species in the temperate forests of Oaxaca, Mexico.", "There are orchids in many environments, but there are 74 Orchidaceae species in Oaxaca, Mexico.", "Oaxaca, Mexico, is home to temperate forests containing 74 Orchidaceae species.", "Arelee Estefanía Muñoz-Hernández and her team wanted to know how many different Orchidaceae species are present in the forests of Oaxaca, Mexico, so they conducted a study to collect orchids."],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice most effectively presents the study and its findings. It opens with the study and names its lead researcher, then tells us its finding: that they identified 74 Orchidaceae species in the temperate forests of Oaxaca, Mexico."),
      distractors: {
        B: L("Choice B is incorrect. This choice doesn’t include the study’s findings, so it fails to achieve the goal. It doesn’t mention that there was a study at all."),
        C: L("Choice C is incorrect. This choice doesn’t present the study, so it fails to achieve the goal. It doesn’t mention that there was a study at all."),
        D: L("Choice D is incorrect. This choice doesn’t include the study’s findings, so it fails to achieve the goal.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-aa7e10d0", "aa7e10d0", 12)
    },
    {
      id: "rw-rs-264e7415",
      sourceQuestionId: "264e7415",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Philadelphia and Lancaster Turnpike was a road built between 1792 and 1794.</li><li style=\"margin:.25em 0\">It was the first private turnpike in the United States.</li><li style=\"margin:.25em 0\">It connected the cities of Philadelphia and Lancaster in the state of Pennsylvania.</li><li style=\"margin:.25em 0\">It was sixty-two miles long.</li></ul>",
      stem: "The student wants to emphasize the distance covered by the Philadelphia and Lancaster Turnpike. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The sixty-two-mile-long Philadelphia and Lancaster Turnpike connected the Pennsylvania cities of Philadelphia and Lancaster.", "The Philadelphia and Lancaster Turnpike was the first private turnpike in the United States.", "The Philadelphia and Lancaster Turnpike, which connected two Pennsylvania cities, was built between 1792 and 1794.", "A historic Pennsylvania road, the Philadelphia and Lancaster Turnpike was completed in 1794."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the distance covered by the Philadelphia and Lancaster Turnpike, noting that the turnpike, which connected the two Pennsylvania cities in its name, was sixty-two miles long."),
      distractors: {
        B: L("Choice B is incorrect. The sentence emphasizes the significance of the turnpike; it doesn’t emphasize the distance that the turnpike covered."),
        C: L("Choice C is incorrect. While the sentence mentions that the turnpike connected two Pennsylvania cities, it doesn’t emphasize the specific distance covered by the turnpike."),
        D: L("Choice D is incorrect. The sentence emphasizes when the turnpike was built; it doesn’t emphasize the distance that the turnpike covered.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-264e7415", "264e7415", 14)
    },
    {
      id: "rw-rs-25a197dd",
      sourceQuestionId: "25a197dd",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The human body requires magnesium for over 300 essential processes.</li><li style=\"margin:.25em 0\">Magnesium is a mineral present in many foods.</li><li style=\"margin:.25em 0\">Peanuts contain 49 milligrams per ounce (mg/oz) of magnesium.</li><li style=\"margin:.25em 0\">Almonds contain 80 mg/oz.</li><li style=\"margin:.25em 0\">Chia seeds contain 150 mg/oz.</li></ul>",
      stem: "The student wants to identify which of the three foods has the highest magnesium content. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["At 80 mg/oz, almonds contain more magnesium than peanuts (49 mg/oz).", "Chia seeds contain 150 mg/oz of magnesium, which is more than peanuts and almonds.", "Magnesium is present in many foods, including peanuts, almonds, and chia seeds.", "Peanuts contain 49 mg/oz of magnesium, a mineral the human body requires for over 300 essential processes."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence identifies chia seeds as having the highest magnesium content of the three foods, noting that they contain 150 mg/oz, which is more than both peanuts and almonds."),
      distractors: {
        A: L("Choice A is incorrect. The sentence compares the magnesium content of almonds and peanuts; it doesn’t identify which of the three foods has the highest magnesium content."),
        C: L("Choice C is incorrect. The sentence merely mentions the three foods; it doesn’t identify which one has the highest magnesium content."),
        D: L("Choice D is incorrect. The sentence identifies the magnesium content of peanuts; it doesn’t identify which of the three foods has the highest magnesium content.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-25a197dd", "25a197dd", 15)
    },
    {
      id: "rw-rs-e3bbf2bf",
      sourceQuestionId: "e3bbf2bf",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In World War I, US soldiers who were members of the Choctaw Nation in Oklahoma participated in the Choctaw Code Talkers program.</li><li style=\"margin:.25em 0\">The Choctaw Code Talkers were trained to relay coded military information in their native language.</li><li style=\"margin:.25em 0\">In World War II, the US Army recruited Navajo (Diné) soldiers to transmit coded messages in their native language.</li><li style=\"margin:.25em 0\">These soldiers were known as the Navajo Code Talkers.</li></ul>",
      stem: "The student wants to emphasize a similarity between the Choctaw Code Talkers and the Navajo Code Talkers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["US soldiers who were members of the Choctaw Nation in Oklahoma used their native language to relay coded information.", "In World War II, one group of Navajo (Diné) soldiers was known as the Navajo Code Talkers.", "Both the Choctaw Code Talkers and the Navajo Code Talkers transmitted coded military messages in the soldiers’ native languages.", "The Choctaw Code Talkers, not the Navajo Code Talkers, served in World War I."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes a similarity between the Choctaw Code Talkers and the Navajo Code Talkers by explaining that both groups used their native languages to transmit coded messages for the military."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes the Choctaw Code Talkers; it doesn’t emphasize a similarity between the Choctaw Code Talkers and the Navajo Code Talkers."),
        B: L("Choice B is incorrect. The sentence introduces the Navajo Code Talkers; it doesn’t emphasize a similarity between the Choctaw Code Talkers and the Navajo Code Talkers."),
        D: L("Choice D is incorrect. The sentence emphasizes a difference between the Choctaw Code Talkers and the Navajo Code Talkers; it doesn’t emphasize a similarity.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e3bbf2bf", "e3bbf2bf", 19)
    },
    {
      id: "rw-rs-4c43bf61",
      sourceQuestionId: "4c43bf61",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The International Center for the Arts of the Americas (ICAA) is directed by Mari Carmen Ramírez.</li><li style=\"margin:.25em 0\">Ramírez oversaw an initiative to create an online archive of historical documents related to the history of Latin American and Latino visual art.</li><li style=\"margin:.25em 0\">The ICAA digitized over 10,000 documents, including the writings of Latin American and Latino artists and critics.</li><li style=\"margin:.25em 0\">The creation of the archive didn’t require historical documents to be removed from their countries of origin.</li><li style=\"margin:.25em 0\">Scholars now have more access to these documents.</li></ul>",
      stem: "The student wants to explain an advantage of the ICAA’s archive being digital. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Over 10,000 documents related to the history of Latin American and Latino visual art are part of the ICAA archive.", "By offering online versions of historical documents, the ICAA’s archive provides more access to these materials without removing them from their countries of origin.", "Among the historical documents in the ICAA’s archive are the writings of Latin American and Latino artists and critics.", "The ICAA’s director, Mari Carmen Ramírez, oversaw the creation of an online archive of historical documents related to Latin American and Latino visual art."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence explains an advantage of the ICAA’s archive being digital, noting that the archive provides more access to historical documents since they don’t have to be removed from their countries of origin."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes the number of documents in the ICAA archive; it doesn’t explain an advantage of the archive being digital."),
        C: L("Choice C is incorrect. The sentence notes the types of historical documents the ICAA’s archive contains; it doesn’t explain an advantage of the archive being digital."),
        D: L("Choice D is incorrect. The sentence identifies who oversaw the creation of the ICAA’s online archive; it doesn’t explain an advantage of the archive being digital.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-4c43bf61", "4c43bf61", 23)
    },
    {
      id: "rw-rs-16631d34",
      sourceQuestionId: "16631d34",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Million Song Dataset (MSD) includes main audio features and descriptive tags for popular songs.</li><li style=\"margin:.25em 0\">Audio features include acoustic traits such as loudness and pitch intervals.</li><li style=\"margin:.25em 0\">Many algorithms use these audio features to predict a new song’s popularity.</li><li style=\"margin:.25em 0\">These algorithms may fail to accurately identify main audio features of a song with varying acoustic traits.</li><li style=\"margin:.25em 0\">Algorithms based on descriptive tags that describe fixed traits such as genre are more reliable predictors of song popularity.</li></ul>",
      stem: "The student wants to explain a disadvantage of relying on audio features to predict a song’s popularity. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Many popularity-predicting algorithms are based on a song’s audio features, such as loudness and pitch intervals.", "Algorithms based on audio features may misidentify the main features of a song with varying acoustic traits, making such algorithms less reliable predictors of popularity than those based on fixed traits.", "Audio features describe acoustic traits such as pitch intervals, which may vary within a song, whereas descriptive tags describe fixed traits such as genre, which are reliable predictors of popularity.", "The MSD’s descriptive tags are reliable predictors of a song’s popularity, as the traits they describe are fixed."],
      answer: "B",
      explanation: L("Choice B is the best answer. This choice uses relevant information from the notes to explain a disadvantage of relying on audio features to predict a song’s popularity—namely, that it may misidentify features of certain songs. It also contrasts audio features with descriptive tags, which are more reliable predictors."),
      distractors: {
        A: L("Choice A is incorrect. This choice only states a fact about the algorithms without evaluating their reliability or accuracy."),
        C: L("Choice C is incorrect. This choice only describes the difference between audio features and descriptive tags without indicating why this difference matters for predicting popularity."),
        D: L("Choice D is incorrect. This choice only mentions descriptive tags, which are not the focus of the student’s rhetorical goal.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-16631d34", "16631d34", 24)
    },
    {
      id: "rw-rs-e2693197",
      sourceQuestionId: "e2693197",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Oracles of the Pink Universe was a 2021 exhibition at the Denver Museum of Art in Colorado.</li><li style=\"margin:.25em 0\">It featured eight artworks by South African artist Simphiwe Ndzube.</li><li style=\"margin:.25em 0\">One of these works is a painting titled Assertion of Will.</li><li style=\"margin:.25em 0\">Assertion of Will depicts three standing figures.</li><li style=\"margin:.25em 0\">The figures wear clothing made of fabric pieces stitched to the painting’s canvas.</li></ul>",
      stem: "The student wants to describe how fabric is used in Assertion of Will. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In Assertion of Will, the figures’ clothing is made of fabric pieces stitched to the painting’s canvas.", "The exhibition Oracles of the Pink Universe featured artworks by artist Simphiwe Ndzube.", "Depicting three standing, clothed figures, Assertion of Will is a painting by Simphiwe Ndzube.", "Simphiwe Ndzube’s Assertion of Will was one of eight artworks exhibited in Oracles of the Pink Universe at the Denver Museum of Art."],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice directly describes how fabric is used in Assertion of Will, by explaining that the fabric pieces are part of the painting itself."),
      distractors: {
        B: L("Choice B is incorrect. This choice provides contextual information about the exhibition, but it doesn’t mention anything about the painting or the fabric."),
        C: L("Choice C is incorrect. This choice mentions that the figures are clothed, but it doesn’t explain how the fabric is integrated into the painting."),
        D: L("Choice D is incorrect. This choice provides contextual information about the painting, but it doesn’t mention anything about the fabric or how it is used.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e2693197", "e2693197", 26)
    },
    {
      id: "rw-rs-1d79a59d",
      sourceQuestionId: "1d79a59d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Leaders of the Province of Guatemala proclaimed independence for Central America from the Spanish Empire on September 15, 1821.</li><li style=\"margin:.25em 0\">The accompanying Declaration of Independence was written by Honduran scholar and politician José Cecilio del Valle.</li><li style=\"margin:.25em 0\">The 1812 Spanish Constitution had provided some degree of independence for Central America, but it was repealed by the Spanish king in 1814.</li><li style=\"margin:.25em 0\">Valle, a loyal advisor to the Spanish Empire’s administrators in Central America, had long opposed independence.</li><li style=\"margin:.25em 0\">He changed his mind after Colonel Rafael del Riego’s 1820 revolt, which demanded the return of rights lost in 1814.</li></ul>",
      stem: "The student wants to place the 1821 Declaration of Independence in the context of Valle’s changing political beliefs. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Colonel Riego’s revolt was the inspiration that Valle, a long-standing opponent of Central American independence, needed to change his political beliefs.", "Long an opponent of Central American independence, Valle changed his mind after an 1820 revolt and wrote the 1821 declaration.", "A change in Valle’s political beliefs that occurred when the Spanish king repealed the 1812 constitution led to Valle writing Central America’s Declaration of Independence.", "The writing of Central America’s Declaration of Independence may not have happened were it not for Colonel Riego’s 1820 revolt."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence places the Declaration of Independence in the context of Valle’s changing political beliefs, noting that Valle was long an opponent of Central American independence but changed his mind after an 1820 revolt and then wrote the Declaration of Independence in 1821."),
      distractors: {
        A: L("Choice A is incorrect. The sentence states that Valle’s political beliefs changed after Riego’s revolt but doesn’t indicate how these changed beliefs provide context for the 1821 Declaration of Independence."),
        C: L("Choice C is incorrect because it misrepresents information from the notes. Valle’s political beliefs changed after Riego’s 1820 revolt, not when the Spanish king repealed the 1812 constitution."),
        D: L("Choice D is incorrect. While the sentence indicates a relationship between Colonel Riego’s 1820 revolt and Central America’s Declaration of Independence, it doesn’t mention Valle’s changing political beliefs.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-1d79a59d", "1d79a59d", 29)
    },
    {
      id: "rw-rs-54227b8e",
      sourceQuestionId: "54227b8e",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The mountain pygmy possum is a mammal species.</li><li style=\"margin:.25em 0\">Up until 1966, it was believed to be extinct.</li><li style=\"margin:.25em 0\">That year, a live mountain pygmy possum was identified in the wild in Australia.</li><li style=\"margin:.25em 0\">The mountain pygmy possum is considered a Lazarus species.</li><li style=\"margin:.25em 0\">“Lazarus species” is a term for living species of organisms that were once believed to be extinct.</li></ul>",
      stem: "The student wants to define the term “Lazarus species” and provide an example of one. Which choice most effectively uses relevant information from the notes to accomplish these goals?",
      options: ["The term “Lazarus species” describes a living species of organism, such as the mountain pygmy possum, that was once believed to be extinct.", "One example of a Lazarus species is the mountain pygmy possum, a mammal species that was identified in the wild in Australia in 1966.", "The mountain pygmy possum, a species of mammal, was identified in the wild in 1966.", "Sometimes, a species once believed to be extinct is later found living in the wild."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence defines the term \"Lazarus species\" and provides an example of one, explaining that a Lazarus species is a living organism that was once believed to be extinct and providing the mountain pygmy possum as an example."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence provides an example of a Lazarus species, it doesn’t define the term \"Lazarus species. \""),
        C: L("Choice C is incorrect. The sentence provides information about the mountain pygmy possum; it doesn’t define the term \"Lazarus species\" or explicitly identify the mountain pygmy possum as a Lazarus species."),
        D: L("Choice D is incorrect. While the sentence describes the concept of a Lazarus species, it doesn’t define the term or provide an example of a Lazarus species.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-54227b8e", "54227b8e", 31)
    },
    {
      id: "rw-rs-84e108cf",
      sourceQuestionId: "84e108cf",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Platinum is a rare and expensive metal.</li><li style=\"margin:.25em 0\">It is used as a catalyst for chemical reactions.</li><li style=\"margin:.25em 0\">Platinum catalysts typically require a large amount of platinum to be effective.</li><li style=\"margin:.25em 0\">Researcher Jianbo Tang and his colleagues created a platinum catalyst that combines platinum with liquid gallium.</li><li style=\"margin:.25em 0\">Their catalyst was highly effective and required only trace amounts of platinum (0.0001% of the atoms in the mixture).</li></ul>",
      stem: "The student wants to explain an advantage of the new platinum catalyst developed by Jianbo Tang and his colleagues. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Researcher Jianbo Tang and his colleagues created a platinum catalyst that combines platinum, a rare and expensive metal, with liquid gallium.", "Like other platinum catalysts, the new platinum catalyst requires a particular amount of the metal to be effective.", "Platinum is a rare and expensive metal that is used as a catalyst for chemical reactions; however, platinum catalysts typically require a large amount of platinum to be effective.", "While still highly effective, the new platinum catalyst requires far less of the rare and expensive metal than do other platinum catalysts."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence explains an advantage of Tang and his colleagues’ platinum catalyst, noting that it requires far less platinum (which is rare and expensive) than other platinum catalysts do."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes the platinum catalyst that Tang and his colleagues created; it doesn’t explain an advantage of their platinum catalyst."),
        B: L("Choice B is incorrect. The sentence emphasizes a similarity between the new platinum catalyst and other platinum catalysts; it doesn’t explain an advantage of the new platinum catalyst."),
        C: L("Choice C is incorrect. The sentence connects the metal platinum to the functioning of platinum catalysts, noting that large amounts of platinum are typically required for platinum catalysts to be effective; it doesn’t explain an advantage of Tang and his colleagues’ platinum catalyst.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-84e108cf", "84e108cf", 33)
    },
    {
      id: "rw-rs-ca4ff52d",
      sourceQuestionId: "ca4ff52d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Muslins are woven cotton fabrics with a variety of uses.</li><li style=\"margin:.25em 0\">Dhaka muslin is a handmade fabric produced in Dhaka, Bangladesh.</li><li style=\"margin:.25em 0\">It has an extremely fine weave and is primarily used to make luxury clothing.</li><li style=\"margin:.25em 0\">Sheeting muslin is a machine-made fabric produced in factories.</li><li style=\"margin:.25em 0\">It has a coarse weave and is primarily used to upholster furniture and create backdrops for theater sets.</li></ul>",
      stem: "The student wants to emphasize a difference between the two muslins. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Dhaka muslin is a handmade fabric with an extremely fine weave, while sheeting muslin is machine made with a coarse weave.", "Dhaka muslin and sheeting muslin are two different types of woven cotton fabrics.", "Muslins can be used in a variety of ways, from making luxury clothing to upholstering furniture and creating backdrops for theater sets.", "Sheeting muslin is machine made, has a coarse weave, and is used for furniture and theater sets."],
      answer: "A",
      explanation: L("Choice A is the best answer. The difference between the two different kinds of muslin is emphasized."),
      distractors: {
        B: L("Choice B is incorrect. This choice lists two kinds of muslins, but does not say how they are different from one another."),
        C: L("Choice C is incorrect. This choice does not emphasize a difference between the two muslins."),
        D: L("Choice D is incorrect. This choice does not emphasize a difference between the two muslins. It only describes sheeting muslin.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ca4ff52d", "ca4ff52d", 40)
    },
    {
      id: "rw-rs-7298633c",
      sourceQuestionId: "7298633c",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Grimanesa Amoros is a Peruvian American artist well known for her LED light sculptures.</li><li style=\"margin:.25em 0\">Her sculpture Uros Island is made of smooth multicolored LED domes.</li><li style=\"margin:.25em 0\">It occupies 335 cubic feet of space.</li><li style=\"margin:.25em 0\">Her sculpture Fortuna is made of entangled blue and white LED tubes.</li><li style=\"margin:.25em 0\">It occupies 19,950 cubic feet of space.</li></ul>",
      stem: "The student wants to emphasize a similarity between Uros Island and Fortuna. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The smooth LED domes of Grimanesa Amoros’s Uros Island stand in contrast to the tangled LED tubes of Fortuna.", "At 19,950 cubic feet in size, Grimanesa Amoros’s Fortuna cuts a larger figure than the 335-cubic-foot Uros Island.", "Grimanesa Amoros is the artist behind Uros Island—a sculpture made of smooth multicolored LED domes.", "Uros Island is an LED light sculpture made by Grimanesa Amoros, as is Fortuna."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes a similarity between the sculptures, noting that both Uros Island and Fortuna are LED light sculptures created by Grimanesa Amoros."),
      distractors: {
        A: L("Choice A is incorrect. Noting that Uros Island’s smooth LED domes contrast with Fortuna’s tangled LED tubes, the sentence emphasizes a difference between the two sculptures rather than a similarity."),
        B: L("Choice B is incorrect. Contrasting the respective sizes of Uros Island and Fortuna, the sentence emphasizes a difference between the two sculptures rather than a similarity."),
        C: L("Choice C is incorrect. While the sentence describes Uros Island, it doesn’t mention Fortuna or emphasize any similarity between the two sculptures.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7298633c", "7298633c", 41)
    },
    {
      id: "rw-rs-441f0505",
      sourceQuestionId: "441f0505",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A lever is a simple machine consisting of a rigid beam and a fulcrum.</li><li style=\"margin:.25em 0\">The fulcrum is the point about which the beam pivots.</li><li style=\"margin:.25em 0\">The input force (effort) is the force applied to the lever.</li><li style=\"margin:.25em 0\">The output force (load) is the force that the lever exerts on another object.</li><li style=\"margin:.25em 0\">In first-class levers, the fulcrum is located between the effort and the load.</li><li style=\"margin:.25em 0\">In second-class levers, the load is located between the effort and the fulcrum.</li></ul>",
      stem: "The student wants to contrast first-class levers and second-class levers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In levers, the effort is the force applied to the lever; the load, in contrast, is the force that the lever exerts on another object.", "In first-class and second-class levers, the fulcrum and the load are in different locations.", "First-class levers are simple machines consisting of a rigid beam and a fulcrum, but then again, the same is true of second-class levers.", "In first-class levers, the fulcrum is located between the effort and the load, but in second-class levers, the load is located between the effort and the fulcrum."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence contrasts first-class levers and second-class levers, explaining that the fulcrum in a first-class lever is between the effort and the load, whereas in a second-class lever the load is between the effort and the fulcrum."),
      distractors: {
        A: L("Choice A is incorrect. The sentence defines two terms associated with levers; it doesn’t contrast first-class levers and second-class levers."),
        B: L("Choice B is incorrect. While the sentence seems to acknowledge a general difference in fulcrum and load locations between first-class and second-class levers, it does not specify what this difference is. Moreover, the sentence could be read as emphasizing a similarity—that in both types of levers, the fulcrum and load are in different locations. The sentence thus fails to effectively contrast the two types of levers."),
        C: L("Choice C is incorrect. The sentence describes a similarity between first-class and second-class levers; it doesn’t contrast them.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-441f0505", "441f0505", 42)
    },
    {
      id: "rw-rs-6c9df5d1",
      sourceQuestionId: "6c9df5d1",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Some powerful works of literature have so influenced readers that new legislation has been passed as a result.</li><li style=\"margin:.25em 0\">The Interesting Narrative of the Life of Olaudah Equiano (1789) is the autobiography of a man who endured slavery on both sides of the Atlantic.</li><li style=\"margin:.25em 0\">Equiano’s book contributed to the passage of the Slave Trade Act of 1807.</li><li style=\"margin:.25em 0\">The Jungle (1906) is a fictional work by Upton Sinclair that describes unsanitary conditions in US meatpacking plants.</li><li style=\"margin:.25em 0\">Sinclair’s book contributed to the passage of the Pure Food and Drug Act in 1906.</li></ul>",
      stem: "The student wants to emphasize a difference between the two books. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Although both are powerful works of literature that contributed to new legislation, Equiano’s book is an autobiography, while Sinclair’s is fictional.", "They may have written about different topics, but Equiano and Sinclair both influenced readers.", "The 1807 Slave Trade Act resulted in part from a book by Equiano, while the 1906 Pure Food and Drug Act resulted in part from a book by Sinclair.", "The Interesting Narrative of the Life of Olaudah Equiano and The Jungle are two works of literature that contributed to new legislation (concerning the slave trade and food safety, respectively)."],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice emphasizes a difference between the two books by using relevant information from the notes to contrast their genres."),
      distractors: {
        B: L("Choice B is incorrect. This choice mentions a difference between the books (their different topics), but it emphasizes a similarity between the books (their influence on readers)."),
        C: L("Choice C is incorrect. This choice provides information about the books that reflects both a similarity (both resulted in new laws) and a difference (the specific laws that resulted), without emphasizing either."),
        D: L("Choice D is incorrect. This choice doesn’t emphasize a difference between the two books. Instead, it emphasizes a similarity.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-6c9df5d1", "6c9df5d1", 43)
    },
    {
      id: "rw-rs-4b99b481",
      sourceQuestionId: "4b99b481",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Scientists have developed a “freeze-thaw” battery that can retain 92% of its charge after twelve weeks.</li><li style=\"margin:.25em 0\">The battery contains molten salt (a type of salt that liquifies when heated and solidifies at room temperature).</li><li style=\"margin:.25em 0\">When the salt is in a liquid state, energy flows through the battery.</li><li style=\"margin:.25em 0\">When the salt is in a solid state, energy stops flowing and is stored in the battery.</li><li style=\"margin:.25em 0\">The stored (frozen) energy can be used by reheating (thawing) the battery.</li></ul>",
      stem: "The student wants to specify how the salt enables energy storage. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Scientists have developed a freeze-thaw battery that contains molten salt, which liquifies when heated and solidifies at room temperature.", "The stored energy in a freeze-thaw battery, which contains molten salt, can be used by reheating the battery.", "When the molten salt in a freeze-thaw battery solidifies at room temperature, energy stops flowing and can be stored in the battery.", "Molten salt allows a freeze-thaw battery to retain 92% of its charge after twelve weeks."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence specifies how the salt in a freeze-thaw battery enables energy storage, explaining that energy stops flowing and can be stored when the salt solidifies at room temperature."),
      distractors: {
        A: L("Choice A is incorrect. The sentence explains some properties of molten salt; it doesn’t specify how that salt enables energy storage."),
        B: L("Choice B is incorrect. The sentence indicates how the energy in a freeze-thaw battery can be released; it doesn’t specify how the salt in the battery enables energy storage."),
        D: L("Choice D is incorrect. The sentence specifies how much charge the freeze-thaw battery retains when storing energy; it doesn’t specify how the salt in the battery enables energy storage.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-4b99b481", "4b99b481", 46)
    },
    {
      id: "rw-rs-a4366255",
      sourceQuestionId: "a4366255",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Musicians around the world have used protest songs to raise awareness about human rights violations.</li><li style=\"margin:.25em 0\">US folk singer Aunt Molly Jackson released the protest song “Poor Miner’s Farewell” in 1932.</li><li style=\"margin:.25em 0\">It exposed the unlivable wages and dangerous working conditions coal miners faced in Kentucky during the 1920s and 1930s.</li><li style=\"margin:.25em 0\">South African singer-songwriter Hugh Masekela released the protest song “Bring Him Back Home” in 1987.</li><li style=\"margin:.25em 0\">It called on the South African government to free Nelson Mandela, an anti-apartheid leader who’d been unjustly imprisoned.</li></ul>",
      stem: "The student wants to contrast the song “Poor Miner’s Farewell” with the song “Bring Him Back Home. ” Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The songs “Poor Miner’s Farewell” and “Bring Him Back Home” both raised awareness about human rights violations.", "While both are protest songs, “Poor Miner’s Farewell” is about coal miners in Kentucky, whereas “Bring Him Back Home” is about the anti-apartheid leader Nelson Mandela.", "Hugh Masekela’s song “Bring Him Back Home, ” released in 1987, called on the South African government to free Nelson Mandela.", "Released in 1932 by Aunt Molly Jackson, the song “Poor Miner’s Farewell” was a protest against the unlivable wages and dangerous working conditions faced by Kentucky coal miners."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence contrasts the two songs, noting that \"Poor Miner’s Farewell\" is about coal miners in Kentucky, whereas \"Bring Him Back Home\" is about Nelson Mandela."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes a similarity between \"Poor Miner’s Farewell\" and \"Bring Him Back Home\"; it doesn’t contrast the two songs."),
        C: L("Choice C is incorrect. While the sentence provides a description of the song \"Bring Him Back Home, \" it doesn’t mention \"Poor Miner’s Farewell\" or contrast the two songs."),
        D: L("Choice D is incorrect. While the sentence provides a description of the song \"Poor Miner’s Farewell, \" it doesn’t mention \"Bring Him Back Home\" or contrast the two songs.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-a4366255", "a4366255", 48)
    },
    {
      id: "rw-rs-296801d2",
      sourceQuestionId: "296801d2",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Azores is a group of islands about 870 miles off the coast of Portugal.</li><li style=\"margin:.25em 0\">Historians have long believed that in the fifteenth century Portuguese mariners were the first humans to populate the Azores.</li><li style=\"margin:.25em 0\">A 2015 study coauthored by Sofia Gabriel and Maria da Luz Mathias found that Vikings from Scandinavia may have populated the Azores as early as the ninth century.</li><li style=\"margin:.25em 0\">The researchers found a genetic connection between house mice in the Azores and house mice in Scandinavia.</li><li style=\"margin:.25em 0\">House mice may have traveled from Scandinavia to the Azores on Viking ships.</li></ul>",
      stem: "The student wants to specify who may have first populated the Azores, according to the 2015 study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Historians have long believed that the first humans to populate the Azores, a group of islands about 870 miles off the coast of Portugal, arrived in the fifteenth century.", "Portuguese mariners may not have been the first humans to populate the Azores.", "In their 2015 study, the researchers found a genetic connection between house mice in the Azores and those in Scandinavia.", "According to a 2015 study, the first humans to populate the Azores may have been Vikings from Scandinavia, not mariners from Portugal as previously believed."],
      answer: "D",
      explanation: L("Choice D is the best answer. This choice effectively specifies who may have first populated the Azores, according to the 2015 study: the Vikings."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t effectively specify who may have first populated the Azores, according to the 2015 study. It only mentions the historical belief that the Portuguese were first. The 2015 study drew a different conclusion."),
        B: L("Choice B is incorrect. This choice casts doubt on the Portuguese claim but doesn’t name the group of people who may have arrived before the Portuguese."),
        C: L("Choice C is incorrect. This choice mentions the evidence that the researchers found but not the conclusion they drew from it. It doesn’t name the possible group of people who may have arrived before the Portuguese.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-296801d2", "296801d2", 49)
    },
    {
      id: "rw-rs-7d5c32e6",
      sourceQuestionId: "7d5c32e6",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The fifth Solvay Conference on Physics was held in 1927.</li><li style=\"margin:.25em 0\">It brought together twenty-nine of the era’s preeminent scientists to discuss the emerging field of quantum theory.</li><li style=\"margin:.25em 0\">The conference famously featured a debate between physicists Albert Einstein and Niels Bohr.</li><li style=\"margin:.25em 0\">Bohr proposed that subatomic entities like electrons had only probable realities until they were observed.</li><li style=\"margin:.25em 0\">Einstein argued that subatomic entities like electrons had a reality independent of observation.</li><li style=\"margin:.25em 0\">Bohr’s position, later called the Copenhagen interpretation, remains the most widely accepted theory of quantum mechanics.</li></ul>",
      stem: "The student wants to place Einstein’s argument within its historical context. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["During the dawn of quantum theory, Einstein maintained the independent reality of some subatomic entities, although Bohr’s opposing interpretation would become the widely accepted view.", "At the 1927 Solvay Conference on Physics, Einstein disagreed with Bohr’s argument that subatomic entities like electrons had a reality independent of observation.", "The attendees of the 1927 Solvay Conference were among the preeminent scientists of their era, including Einstein, who opposed Bohr’s proposal.", "In 1927, Einstein and Bohr engaged in a famous debate; Bohr’s argument, later called the Copenhagen interpretation, would remain popular decades after."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence places Einstein’s argument within the historical context of the development of quantum theory, noting that his argument—made during the dawn of the field—conflicted with Bohr’s argument, which became the widely accepted view."),
      distractors: {
        B: L("Choice B is incorrect. The sentence misrepresents information from the notes, attributing the argument that electrons had a reality independent of observation to Bohr, not Einstein. In addition, while the sentence provides the date of the conference, it doesn’t place Einstein’s argument in the context of the development of quantum theory."),
        C: L("Choice C is incorrect. The sentence indicates that Einstein attended the 1927 Solvay Conference; it doesn’t identify Einstein’s argument or place it in the historical context of the development of quantum theory."),
        D: L("Choice D is incorrect. The sentence explains that Einstein and Bohr had a famous debate in 1927 and that Bohr’s argument remained popular decades afterward; it doesn’t identify Einstein’s argument or place it in the context of the development of quantum theory.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7d5c32e6", "7d5c32e6", 53)
    },
    {
      id: "rw-rs-883493d5",
      sourceQuestionId: "883493d5",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Allan Houser was a Chiricahua Warm Springs Apache sculptor, illustrator, and painter.</li><li style=\"margin:.25em 0\">Many of his sculptures featured Native American figures.</li><li style=\"margin:.25em 0\">He depicted this subject matter using abstract, modernist forms, developing a distinctive style that influenced many other artists.</li><li style=\"margin:.25em 0\">His well-known sculpture Sacred Rain Arrow was pictured on the State of Oklahoma license plate.</li></ul>",
      stem: "The student wants to describe the distinctive style of Houser’s sculptures. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A sculptor, illustrator, and painter, Houser developed a distinctive style for portraying Native American figures.", "Houser’s sculptures employ abstract, modernist forms to depict Native American figures.", "Many other artists have been influenced by the style of Houser’s sculptures.", "The sculpture Sacred Rain Arrow is a well-known example of Houser’s style."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence describes the distinctive style of Houser’s sculptures, explaining that the sculptures use abstract, modernist forms to depict Native American figures."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence indicates that Houser developed a distinctive style for portraying Native American figures, it doesn’t describe this style."),
        C: L("Choice C is incorrect. While the sentence states that other artists have been influenced by the style of Houser’s sculptures, it doesn’t describe this style."),
        D: L("Choice D is incorrect. While the sentence mentions the name of a sculpture that’s a well-known example of Houser’s style, it doesn’t describe the sculpture’s style.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-883493d5", "883493d5", 55)
    },
    {
      id: "rw-rs-b07a7634",
      sourceQuestionId: "b07a7634",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Digital Light Synthesis (DLS) is a form of additive manufacturing that utilizes light to rapidly cure liquid resin into high-quality, 3D objects.</li><li style=\"margin:.25em 0\">Step 1: Ultraviolet (UV) light images are projected up into a pool of liquid resin, where the object’s first layer takes shape.</li><li style=\"margin:.25em 0\">Step 2: The partially cured resin object is raised, leaving a thin space (a “dead zone”) beneath it for oxygen and liquid resin to flow through.</li><li style=\"margin:.25em 0\">Step 3: The UV light passes through the dead zone—maintaining the flow of resin—and partially cures additional layers of the object.</li><li style=\"margin:.25em 0\">Step 4: When the resin object is complete, it is baked in an oven to complete the curing.</li></ul>",
      stem: "The student wants to describe how DLS cures 3D objects. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["DLS is a form of additive manufacturing that creates a “dead zone” in which UV light solidifies layer by layer before being baked in an oven, creating a high-quality, 3D object.", "DLS cures 3D objects by passing through a “dead zone, ” adding layers to the object, then curing the object in an oven.", "In DLS, UV light images are projected into a liquid resin pool to cure a 3D object layer by layer; once solidified, the object is baked in an oven.", "In DLS, UV light is projected into layers of liquid resin until the resin solidifies and passes through a “dead zone, ” wherein the curing is completed."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence describes how DLS cures 3D objects, noting that UV light is projected into resin to cure the object in layers, after which the object is baked to complete the curing process."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does describe some elements of the curing process, the description misrepresents information in the notes; this sentence suggests that the UV light, rather than the 3D object, is baked in an oven."),
        B: L("Choice B is incorrect. While the sentence does describe some elements of the curing process, the description misrepresents information in the notes: the UV light, not DLS, passes through the dead zone."),
        D: L("Choice D is incorrect. While the sentence does describe some elements of the curing process, the description misrepresents information in the notes. This sentence suggests that curing is complete when the already-solidified resin passes through the dead zone; rather, liquid resin passes through the dead zone and is solidified in layers, after which curing is completed in the oven.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-b07a7634", "b07a7634", 58)
    },
    {
      id: "rw-rs-539abc58",
      sourceQuestionId: "539abc58",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Ukiyo-e woodblock prints were a popular artistic form in Japan from the 1600s through the 1800s.</li><li style=\"margin:.25em 0\">Ukiyo-e prints were produced by teams of artisans that included artists, wood-carvers, printers, and publishers.</li><li style=\"margin:.25em 0\">Sōsaku-hanga was a popular Japanese printmaking movement that emerged in the early 1900s.</li><li style=\"margin:.25em 0\">Sōsaku-hanga prioritized individual artistic expression.</li><li style=\"margin:.25em 0\">An artist working in this style typically handled all aspects of print creation, from drawing to wood carving to printing.</li></ul>",
      stem: "The student wants to contrast ukiyo-e and sōsaku-hanga production methods. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["One notable distinction between ukiyo-e and sōsaku-hanga prints is sōsaku-hanga’s emphasis on individual artistic expression.", "Ukiyo-e prints were popular in Japan from the 1600s through the 1800s, while sōsaku-hanga prints emerged later, in the early 1900s.", "Teams of artisans produced ukiyo-e prints, whereas individual artists typically handled all aspects of sōsaku-hanga printmaking themselves.", "In contrast to ukiyo-e prints, sōsaku-hanga prints were produced using methods such as drawing and wood carving."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence contrasts the two production methods, noting that ukiyo-e prints are produced by teams of artisans, whereas sōsaku-hanga prints are typically produced by an individual artist."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates a difference between the two styles, noting that sōsaku-hanga emphasizes individual artistic expression, but it doesn’t provide sufficient information about ukiyo-e prints to contrast the two styles’ production methods."),
        B: L("Choice B is incorrect. The sentence contrasts when the two styles were popular; it doesn’t contrast their production methods."),
        D: L("Choice D is incorrect. The sentence mischaracterizes information from the notes: both styles include drawing and wood carving in their production, not just sōsaku-hanga.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-539abc58", "539abc58", 59)
    },
    {
      id: "rw-rs-3fa48bf3",
      sourceQuestionId: "3fa48bf3",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">British scholar Robert Plot described fossilized dinosaur bones in his 1676 book The Natural History of Oxfordshire.</li><li style=\"margin:.25em 0\">Plot earned a reputation for being the first person to have discovered dinosaur remains.</li><li style=\"margin:.25em 0\">In 1990, archaeologists in Lesotho, in southern Africa, discovered a fossilized phalanx of a Massospondylus carinatus dinosaur in a cave once inhabited by humans.</li><li style=\"margin:.25em 0\">Indigenous Khoesan and Basotho peoples had inhabited the cave beginning around 1100 CE.</li><li style=\"margin:.25em 0\">According to paleontologist Julien Benoit, these peoples may have found the phalanx and brought it to the cave centuries before Plot’s descriptions.</li></ul>",
      stem: "The student wants to emphasize the significance of the 1990 discovery to Plot’s reputation. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Benoit challenged Plot’s reputation for being the first person to have discovered M. carinatus remains.", "Evidence that Khoesan and Basotho peoples may have found an M. carinatus phalanx as long ago as 1100 CE suggests that Plot may not have been the first person to have discovered dinosaur remains.", "According to Benoit’s analysis of the 1990 discovery, Indigenous peoples in southern Africa may have brought the fossilized phalanx to the cave as long ago as 1100 CE.", "In 1990, more than three centuries after Plot claimed in his book that he had found fossilized dinosaur bones, archaeologists uncovered evidence in southern Africa that disproved his claims."],
      answer: "B",
      explanation: L("Choice B is the best answer. Noting that the evidence suggests Indigenous peoples may have found dinosaur remains in 1100 CE, the sentence emphasizes how the 1990 discovery challenged Plot’s reputation as the first person to discover dinosaur remains."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does emphasize that Benoit challenged Plot’s reputation, it misrepresents information in the notes; Plot was reputed to be the first person to discover dinosaur remains in general, not the first person to discover M. carinatus remains specifically."),
        C: L("Choice C is incorrect. The sentence only partially explains the significance of the 1990 discovery, noting that it suggests Indigenous people brought dinosaur remains to the cave in 1100 CE; it doesn’t explain the discovery’s significance to Plot’s reputation."),
        D: L("Choice D is incorrect. While the sentence does emphasize that the discovery challenged Plot’s reputation, it misrepresents information in the notes. The notes don’t indicate that the 1990 discovery cast any doubt on Plot’s claims to have found fossilized dinosaur bones; rather, the discovery challenged Plot’s reputation for being the first to discover dinosaur bones.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-3fa48bf3", "3fa48bf3", 66)
    },
    {
      id: "rw-rs-2bf05ae9",
      sourceQuestionId: "2bf05ae9",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In the midst of the US Civil War, Susie Taylor escaped slavery and fled to Union-army-occupied St. Simons Island off the Georgia coast.</li><li style=\"margin:.25em 0\">She began working for an all-Black army regiment as a nurse and teacher.</li><li style=\"margin:.25em 0\">In 1902, she published a book about the time she spent with the regiment.</li><li style=\"margin:.25em 0\">Her book was the only Civil War memoir to be published by a Black woman.</li><li style=\"margin:.25em 0\">It is still available to readers in print and online.</li></ul>",
      stem: "The student wants to emphasize the uniqueness of Taylor’s accomplishment. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Taylor fled to St. Simons Island, which was then occupied by the Union army, for whom she began working.", "After escaping slavery, Taylor began working for an all-Black army regiment as a nurse and teacher.", "The book Taylor wrote about the time she spent with the regiment is still available to readers in print and online.", "Taylor was the only Black woman to publish a Civil War memoir."],
      answer: "D",
      explanation: L("Choice D is the best answer. By indicating that Taylor’s book was the only Civil War memoir published by a Black woman, this sentence emphasizes the uniqueness, or one-of-a-kind nature, of Taylor’s accomplishment."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence describes some of Taylor’s accomplishments, it doesn’t emphasize the uniqueness of them."),
        B: L("Choice B is incorrect. While the sentence describes some of Taylor’s accomplishments, it doesn’t emphasize that they were unique."),
        C: L("Choice C is incorrect. While the sentence provides information about Taylor’s book, it doesn’t emphasize what made the book unique.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-2bf05ae9", "2bf05ae9", 67)
    },
    {
      id: "rw-rs-e876e395",
      sourceQuestionId: "e876e395",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The melting rate of glaciers varies based on air temperature.</li><li style=\"margin:.25em 0\">In the warm summer months, massive glaciers on the coast of Greenland melt into the surrounding water.</li><li style=\"margin:.25em 0\">The melting glaciers contribute to rising sea levels each summer.</li><li style=\"margin:.25em 0\">Huge icebergs also break off Greenland’s glaciers into the water and melt.</li><li style=\"margin:.25em 0\">In 2017, geoscientist Twila Moon found that the iceberg melting rate depends not on air temperature but on water temperature.</li><li style=\"margin:.25em 0\">Because water temperature is consistent, melting icebergs contribute to rising sea levels all year.</li></ul>",
      stem: "The student wants to emphasize a similarity between glaciers and icebergs in Greenland. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Because icebergs break off Greenland’s glaciers into the water, their melting rate depends on water temperature.", "Greenland’s glaciers and icebergs both melt during the year, contributing to rising sea levels.", "Geoscientist Twila Moon found that the melting rate of Greenland’s icebergs, unlike that of glaciers, does not depend on air temperature.", "Glaciers on the coast of Greenland melt during the warm summer months into the surrounding water, the temperature of which remains consistent throughout the year."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes a similarity between glaciers and icebergs in Greenland, noting that both melt and thereby contribute to rising sea levels."),
      distractors: {
        A: L("Choice A is incorrect. The sentence provides information about the melting rate of icebergs in Greenland; it doesn’t emphasize a similarity between glaciers and icebergs in Greenland."),
        C: L("Choice C is incorrect. The sentence emphasizes a difference between glaciers and icebergs in Greenland, noting that their melting rates depend on different factors; it doesn’t emphasize a similarity."),
        D: L("Choice D is incorrect. The sentence explains the conditions under which glaciers in Greenland melt; it doesn’t emphasize a similarity between glaciers and icebergs in Greenland.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e876e395", "e876e395", 70)
    },
    {
      id: "rw-rs-8fe4f4ab",
      sourceQuestionId: "8fe4f4ab",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">One of history’s greatest libraries was the House of Wisdom in Baghdad, Iraq.</li><li style=\"margin:.25em 0\">It was founded in the eighth century with the goal of preserving all the world’s knowledge.</li><li style=\"margin:.25em 0\">Scholars at the House of Wisdom collected ancient and contemporary texts from Greece, India, and elsewhere and translated them into Arabic.</li><li style=\"margin:.25em 0\">Writings included those of the Greek philosopher Aristotle and the Indian mathematician Aryabhata.</li><li style=\"margin:.25em 0\">The House of Wisdom used Chinese papermaking technology to create paper versions to be studied and shared.</li></ul>",
      stem: "The student wants to explain how the House of Wisdom preserved the world’s knowledge. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The House of Wisdom was known for bringing together knowledge from around the world, including from Greece, India, and China.", "Founded in Iraq in the eighth century, the House of Wisdom employed many scholars as translators.", "Writings from the Greek philosopher Aristotle and the Indian mathematician Aryabhata were preserved at the House of Wisdom.", "The House of Wisdom collected writings from different countries and created paper versions in Arabic to be studied and shared."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence explains how the House of Wisdom preserved the world’s knowledge, noting that the library collected, translated, and printed writings from different countries."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence indicates that the House of Wisdom was known for bringing together knowledge from around the world, it doesn’t explain how the library preserved this knowledge."),
        B: L("Choice B is incorrect. The sentence makes a generalization about the scholars who were employed by the House of Wisdom; it doesn’t explain how the library preserved the world’s knowledge."),
        C: L("Choice C is incorrect. The sentence identifies two authors whose writings were preserved at the House of Wisdom; it doesn’t explain how the library preserved the world’s knowledge.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-8fe4f4ab", "8fe4f4ab", 71)
    },
    {
      id: "rw-rs-bb275f0d",
      sourceQuestionId: "bb275f0d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Cities tend to have a wide range of flowering vegetation in parks, yards, and gardens.</li><li style=\"margin:.25em 0\">This vegetation provides a varied diet for honeybees, strengthening bees’ immune systems.</li><li style=\"margin:.25em 0\">On average, 62.5 percent of bees in an urban area will survive a harsh winter.</li><li style=\"margin:.25em 0\">Rural areas are often dominated by monoculture crops such as corn or wheat.</li><li style=\"margin:.25em 0\">On average, only 40 percent of honeybees in a rural area will survive a harsh winter.</li></ul>",
      stem: "The student wants to make and support a generalization about honeybees. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Cities tend to have a wider range of flowering vegetation than do rural areas, which are often dominated by monoculture crops.", "In urban areas, over 60 percent of honeybees, on average, will survive a harsh winter, whereas in rural areas, only 40 percent will.", "The strength of honeybees’ immune systems depends on what the bees eat, and a varied diet is more available to bees in an urban area than to those in a rural area.", "Honeybees are more likely to thrive in cities than in rural areas because the varied diet available in urban areas strengthens the bees’ immune systems."],
      answer: "D",
      explanation: L("Choice D is the best answer because the sentence makes and supports a generalization about honeybees. It claims that honeybees living in urban areas are more likely to thrive than rural bees, and it supports the claim with information about the effect of a varied diet on urban bees’ immune systems."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence makes a generalization, it doesn’t mention honeybees."),
        B: L("Choice B is incorrect. While the sentence provides data about honeybee survival, it doesn’t make a generalization about honeybees based on this information."),
        C: L("Choice C is incorrect. While the sentence makes a generalization about honeybees’ diets and immune systems, it doesn’t provide adequate support for this generalization.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-bb275f0d", "bb275f0d", 72)
    },
    {
      id: "rw-rs-6249b173",
      sourceQuestionId: "6249b173",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 2018 researchers Adwait Deshpande, Shreejata Gupta, and Anindya Sinha were observing wild macaques in India’s Bandipur National Park.</li><li style=\"margin:.25em 0\">They saw macaques calling out to and gesturing at humans who were eating or carrying food.</li><li style=\"margin:.25em 0\">They designed a study to find out if the macaques were intentionally communicating to try to persuade the humans to share their food.</li><li style=\"margin:.25em 0\">In the study trials, macaques frequently called out to and gestured at humans holding food.</li><li style=\"margin:.25em 0\">In the study trials, macaques called out to and gestured at empty-handed humans less frequently.</li></ul>",
      stem: "The student wants to present the study’s results. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Macaques in the study called out to and gestured more frequently at humans holding food than at empty-handed humans.", "In 2018, researchers who had observed macaques in India’s Bandipur National Park calling out to and gesturing at humans designed a study.", "The researchers hoped to find out if the macaques were intentionally communicating to try to persuade humans to share their food.", "The researchers studied how macaques behaved around both humans holding food and empty-handed humans."],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice presents the study’s results from the last two bullet points."),
      distractors: {
        B: L("Choice B is incorrect. This choice describes the background and motivation of the study but not the outcome or findings."),
        C: L("Choice C is incorrect. This choice describes the research question or hypothesis of the study but not the evidence or conclusion."),
        D: L("Choice D is incorrect. This choice describes the method or design of the study but not the actual results.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-6249b173", "6249b173", 75)
    },
    {
      id: "rw-rs-a3204ab0",
      sourceQuestionId: "a3204ab0",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Yellowstone is a national park in the northwest United States.</li><li style=\"margin:.25em 0\">In 1995, gray wolves were reintroduced into the park.</li><li style=\"margin:.25em 0\">Since then, the number of gray wolves in the park has stabilized at roughly 100.</li><li style=\"margin:.25em 0\">This number is believed to be the park’s carrying capacity.</li><li style=\"margin:.25em 0\">Carrying capacity describes the maximum number of a species that a specific environment’s resources can sustain over time.</li></ul>",
      stem: "The student wants to specify the number of gray wolves in Yellowstone. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Gray wolves were reintroduced into Yellowstone, a national park in the northwest United States, in 1995.", "As of 1995, there were gray wolves living in Yellowstone, a national park in the northwest United States.", "The carrying capacity of an environment, such as Yellowstone, describes the maximum number of species that the environment can sustain over time.", "Yellowstone is a national park that has roughly 100 gray wolves living in it."],
      answer: "D",
      explanation: L("Choice D is the best answer. This choice uses relevant information from the third bullet point to state the approximate number of gray wolves in Yellowstone."),
      distractors: {
        A: L("Choice A is incorrect. This choice mentions the year gray wolves in Yellowstone were reintroduced but not how many there are currently."),
        B: L("Choice B is incorrect. This choice mentions the year gray wolves in Yellowstone were reintroduced but not how many there are currently."),
        C: L("Choice C is incorrect. This choice defines the term carrying capacity but doesn’t connect it to the specific number of gray wolves currently living in Yellowstone.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-a3204ab0", "a3204ab0", 77)
    },
    {
      id: "rw-rs-3b02e88a",
      sourceQuestionId: "3b02e88a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The ancient Arab dhow was a sailing vessel distinguishable by its triangular sails and stitched hull construction.</li><li style=\"margin:.25em 0\">Dhows were used primarily for trade along the coasts of Arab, South Asian, and East African countries.</li><li style=\"margin:.25em 0\">Contemporary shipbuilders in Oman use a mix of modern and traditional materials to build replicas of ancient dhows.</li><li style=\"margin:.25em 0\">Most of the materials used are traditional.</li><li style=\"margin:.25em 0\">Replica hulls are stitched together using the same traditional coconut palm fiber rope used on the hulls of ancient dhows.</li></ul>",
      stem: "The student wants to make a generalization about the materials used in dhow replicas. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A traditional material that was used to stitch together the hulls of ancient dhows, coconut palm fiber rope is still used by shipbuilders.", "The ancient Arab dhow was a sailing vessel used primarily for trade and distinguishable by its triangular sails.", "Although most materials used in dhow replicas are traditional, some modern materials are used.", "Contemporary shipbuilders in Oman build replicas of the dhow, which was an ancient sailing vessel with a stitched hull construction."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence makes a generalization about the materials used in dhow replicas, noting that while some modern materials are used, most of the materials are traditional."),
      distractors: {
        A: L("Choice A is incorrect. The sentence provides an example of a traditional material used in ancient dhows; it doesn’t indicate that the material is used in dhow replicas or make any other generalization about materials used in those replicas."),
        B: L("Choice B is incorrect. The sentence explains what an ancient dhow was; it doesn’t make a generalization about materials used to make dhow replicas."),
        D: L("Choice D is incorrect. The sentence introduces the construction of dhow replicas to an audience unfamiliar with the vessel; it doesn’t make a generalization about the materials used in those replicas.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-3b02e88a", "3b02e88a", 79)
    },
    {
      id: "rw-rs-bc930940",
      sourceQuestionId: "bc930940",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Chiura Obata was a Japanese American artist who lived in California.</li><li style=\"margin:.25em 0\">Yosemite Falls is a notable painting by Obata.</li><li style=\"margin:.25em 0\">It uses a Japanese method of black ink painting called sumi-e.</li><li style=\"margin:.25em 0\">This painting was completed in 1930.</li></ul>",
      stem: "The student wants to indicate the year Yosemite Falls was completed. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["While living in California, Obata created black ink paintings.", "Obata, a Japanese American artist, created a notable painting.", "Yosemite Falls was completed in 1930.", "Obata used a Japanese painting method called sumi-e."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence indicates the year Yosemite Falls was completed, stating that it was completed in 1930."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates where Obata created black ink paintings; it doesn’t indicate when the painting was completed."),
        B: L("Choice B is incorrect. While the sentence identifies Obata as an artist who created a notable painting, it doesn’t indicate when that painting was completed."),
        D: L("Choice D is incorrect. The sentence identifies the method Obata used; it doesn’t indicate when the painting was completed.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-bc930940", "bc930940", 81)
    },
    {
      id: "rw-rs-c6645cab",
      sourceQuestionId: "c6645cab",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Dr. Sunil Bajpai studies dinosaurs at the Indian Institute of Technology.</li><li style=\"margin:.25em 0\">Bajpai’s research team recently found a 167-million-year-old dicraeosaurid fossil.</li><li style=\"margin:.25em 0\">It is the oldest fossil from the dicraeosaurid dinosaur group ever recovered.</li><li style=\"margin:.25em 0\">It was found in the Thar Desert in western India.</li></ul>",
      stem: "The student wants to indicate where the dicraeosaurid fossil was found. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The dicraeosaurid fossil was found in western India’s Thar Desert.", "Bajpai’s team recently found the oldest dicraeosaurid fossil ever recovered.", "Dr. Sunil Bajpai, of the Indian Institute of Technology, is part of a research team.", "The fossil, which is from the dicraeosaurid dinosaur group, is 167 million years old."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence indicates where the dicraeosaurid fossil was found: western India’s Thar Desert."),
      distractors: {
        B: L("Choice B is incorrect. The sentence states that Bajpai’s team discovered the dicraeosaurid fossil; it doesn’t specify where they found it."),
        C: L("Choice C is incorrect. The sentence provides information about Dr. Sunil Bajpai; it doesn’t indicate where the fossil was found."),
        D: L("Choice D is incorrect. While the sentence provides information about the fossil, it doesn’t indicate where the fossil was found.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-c6645cab", "c6645cab", 83)
    },
    {
      id: "rw-rs-63a4fa29",
      sourceQuestionId: "63a4fa29",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 2013, archaeologists studied cat bone fragments they had found in the ruins of Quanhucun, a Chinese farming village.</li><li style=\"margin:.25em 0\">The fragments were estimated to be 5,300 years old.</li><li style=\"margin:.25em 0\">A chemical analysis of the fragments revealed that the cats had consumed large amounts of grain.</li><li style=\"margin:.25em 0\">The grain consumption is evidence that the Quanhucun cats may have been domesticated.</li></ul>",
      stem: "The student wants to present the Quanhucun study and its conclusions. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["As part of a 2013 study of cat domestication, a chemical analysis was conducted on cat bone fragments found in Quanhucun, China.", "A 2013 analysis of cat bone fragments found in Quanhucun, China, suggests that cats there may have been domesticated 5,300 years ago.", "In 2013, archaeologists studied what cats in Quanhucun, China, had eaten more than 5,000 years ago.", "Cat bone fragments estimated to be 5,300 years old were found in Quanhucun, China, in 2013."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence presents the study, describing it as a 2013 analysis of Quanhucun cat bone fragments, and its conclusions, indicating what the analysis suggests about cat domestication in Quanhucun."),
      distractors: {
        A: L("Choice A is incorrect because the sentence focuses on the study’s methodology; it doesn’t present conclusions from the study."),
        C: L("Choice C is incorrect. While the sentence provides a general overview of the study, it doesn’t present conclusions from the study."),
        D: L("Choice D is incorrect. The sentence describes a finding from the study; it doesn’t present conclusions from the study.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-63a4fa29", "63a4fa29", 85)
    },
    {
      id: "rw-rs-00460c13",
      sourceQuestionId: "00460c13",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Novelist Willa Cather grew up in Nebraska and attended the University of Nebraska-Lincoln.</li><li style=\"margin:.25em 0\">Some of Cather’s best-known novels are set in Nebraska.</li><li style=\"margin:.25em 0\">Two such novels are O Pioneers! (1913) and My Ántonia (1918).</li><li style=\"margin:.25em 0\">Cather’s novels describe the experiences of immigrants who settled in the Great Plains.</li><li style=\"margin:.25em 0\">The student wants to identify the setting of Cather’s novel My Ántonia.</li></ul>",
      stem: "Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["My Ántonia is set in Nebraska, where Cather grew up.", "Cather, author of My Ántonia, described the experiences of immigrants in her novels.", "Among Cather’s best-known novels are O Pioneers! (1913) and My Ántonia (1918).", "Cather attended the University of Nebraska-Lincoln and set some of her novels in Nebraska."],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice directly identifies the setting of Cather’s novel My Ántonia as Nebraska."),
      distractors: {
        B: L("Choice B is incorrect. This choice mentions that Cather wrote about immigrants, but it doesn’t indicate where they lived."),
        C: L("Choice C is incorrect. This choice mentions that My Ántonia is one of Cather’s best-known novels but doesn’t state where it takes place."),
        D: L("Choice D is incorrect. This choice mentions that some of Cather’s novels are set in Nebraska, but it doesn’t specify which ones, so we can’t be certain that My Ántonia is one of them. It also includes irrelevant information about Cather’s education.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-00460c13", "00460c13", 88)
    },
    {
      id: "rw-rs-dd11e5ab",
      sourceQuestionId: "dd11e5ab",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Muckrakers were journalists who sought to expose corruption in US institutions during the Progressive Era (1897–1920).</li><li style=\"margin:.25em 0\">Ida Tarbell was a muckraker who investigated the Standard Oil Company.</li><li style=\"margin:.25em 0\">She interviewed Standard Oil Company executives, oil industry workers, and public officials.</li><li style=\"margin:.25em 0\">She examined thousands of pages of the company’s internal communications, including letters and financial records.</li><li style=\"margin:.25em 0\">Her book The History of the Standard Oil Company (1904) exposed the company’s unfair business practices.</li></ul>",
      stem: "The student wants to emphasize the thoroughness of Ida Tarbell’s investigation of the Standard Oil Company. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Ida Tarbell not only interviewed Standard Oil executives, oil industry workers, and public officials but also examined thousands of pages of the company’s internal communications.", "Ida Tarbell, who investigated the Standard Oil Company, was a muckraker (a journalist who sought to expose corruption in US institutions during the Progressive Era, 1897–1920).", "As part of her investigation of the Standard Oil Company, muckraker Ida Tarbell conducted interviews.", "Published in 1904, muckraker Ida Tarbell’s book The History of the Standard Oil Company exposed the company’s unfair business practices."],
      answer: "A",
      explanation: L("Choice A is the best answer. It describes Tarbell’s investigation and the lengths she went to complete it."),
      distractors: {
        B: L("Choice B is incorrect. This choice doesn’t describe how thorough Tarbell was. Instead, it gives a biographical sketch."),
        C: L("Choice C is incorrect. This choice doesn’t describe how thorough Tarbell was. Tarbell didn’t only conduct interviews—she also “examined thousands of pages of the company’s internal communications. ”"),
        D: L("Choice D is incorrect. This choice doesn’t describe how thorough Tarbell was. It describes her book but doesn’t include anything about her investigation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-dd11e5ab", "dd11e5ab", 89)
    },
    {
      id: "rw-rs-964c6055",
      sourceQuestionId: "964c6055",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Two opposing theories of vision divided scholars for many centuries.</li><li style=\"margin:.25em 0\">The ancient Greek mathematician Euclid (circa 300 BCE) supported the extramission theory.</li><li style=\"margin:.25em 0\">This theory held that the eyes emit a form of radiation that illuminates objects in its range.</li><li style=\"margin:.25em 0\">The ancient Greek philosopher Aristotle (384–322 BCE) supported the intromission theory.</li><li style=\"margin:.25em 0\">This theory held that objects emit a form of radiation that reaches the eyes.</li><li style=\"margin:.25em 0\">In the eleventh century, Arab mathematician Ibn al-Haytham (965–1040 CE) largely settled the debate with the first conclusive experiments supporting intromission.</li></ul>",
      stem: "The student wants to provide a historical overview of the two theories. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Scholars were divided between the extramission and intromission theories of vision until Ibn al-Haytham’s eleventh-century experiments largely settled the debate in support of intromission.", "Through two opposing theories of vision—extramission and intromission—Euclid, Aristotle, and Ibn al-Haytham held that a form of radiation is emitted either from objects or from the eyes.", "While Ibn al-Haytham largely settled the debate in the eleventh century, Aristotle supported the theory of intromission centuries before.", "Before the eleventh century, the ancient Greek philosopher Aristotle supported the intromission theory, which held that objects emit a form of radiation that reaches the eyes."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence provides a historical overview of the two theories, noting that scholars were divided between them before Ibn al-Haytham’s experiments supporting intromission largely settled the debate in the eleventh century."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence identifies the two theories and the scholars that supported them, it doesn’t provide a historical overview of the theories."),
        C: L("Choice C is incorrect. While the sentence indicates Aristotle supported intromission theory centuries before Ibn al-Haytham settled the debate, it doesn’t mention extramission theory or provide a historical overview of both theories."),
        D: L("Choice D is incorrect. The sentence provides information about intromission theory but doesn’t mention extramission theory or provide a historical overview of both theories.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-964c6055", "964c6055", 91)
    },
    {
      id: "rw-rs-74149724",
      sourceQuestionId: "74149724",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">John Carver was one of the 41 signatories of the Mayflower Compact.</li><li style=\"margin:.25em 0\">The Mayflower Compact was a legal agreement among the pilgrims that immigrated to Plymouth Colony.</li><li style=\"margin:.25em 0\">It was created in 1620 to establish a common government.</li><li style=\"margin:.25em 0\">It states that the pilgrims who signed it wanted to “plant the first colony in the northern parts of Virginia” under King James.</li><li style=\"margin:.25em 0\">Carver became the first governor of Plymouth Colony.</li></ul>",
      stem: "The student wants to specify the reason the Mayflower Compact was created. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Stating that its signatories wanted to “plant the first colony in the northern parts of Virginia, ” the Mayflower Compact was a legal agreement among the pilgrims that immigrated to Plymouth Colony.", "Created in 1620, the Mayflower Compact states that the pilgrims wanted to “plant the first colony in the northern parts of Virginia. ”", "The Mayflower Compact was created to establish a common government among the pilgrims that immigrated to Plymouth Colony.", "The Mayflower Compact had 41 signatories, including John Carver, the first governor of Plymouth Colony."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence specifies the reason the Mayflower Compact was created, noting that it was created to establish a common government among the pilgrims that immigrated to Plymouth Colony."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence provides background information about the Mayflower Compact and notes the signatories’ goal for the colony, it doesn’t specify why the compact was created."),
        B: L("Choice B is incorrect. While the sentence provides background information about the Mayflower Compact and notes the signatories’ goal for the colony, it doesn’t specify why the compact was created."),
        D: L("Choice D is incorrect. The sentence specifies the number of pilgrims that signed the Mayflower Compact; it doesn’t specify the reason the compact was created.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-74149724", "74149724", 93)
    },
    {
      id: "rw-rs-f1d8550e",
      sourceQuestionId: "f1d8550e",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Jordan Bennett is a Mi’Kmaq visual artist.</li><li style=\"margin:.25em 0\">The Mi’Kmaq are a First Nations people in North America.</li><li style=\"margin:.25em 0\">Bennett’s paintings pay homage to traditional Mi’Kmaq craftsmanship and have been displayed in over 75 exhibitions.</li><li style=\"margin:.25em 0\">His 2017 exhibition Wije’wi was held at the Grenfell Art Gallery.</li><li style=\"margin:.25em 0\">His 2018 exhibition Ketu’elmita’jik was held at the Art Gallery of Nova Scotia.</li></ul>",
      stem: "The student wants to emphasize the order in which two of Jordan Bennett’s exhibitions were held. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Jordan Bennett’s 2017 exhibition Wije’wi was followed a year later by his exhibition Ketu’elmita’jik.", "Jordan Bennett’s paintings, some of which appeared in 2017 and 2018 exhibitions, pay homage to traditional Mi’Kmaq craftsmanship.", "Mi’Kmaq visual artist Jordan Bennett has displayed his work in over 75 exhibitions, including Wije’wi and Ketu’elmita’jik.", "Jordan Bennett’s 2018 exhibition Ketu’elmita’jik was held at the Art Gallery of Nova Scotia; another was held at the Grenfell Art Gallery."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the order in which two of Jordan Bennett’s exhibitions were held, indicating that Wije’wi took place in 2017 and Ketu’elmita’jik took place a year later (2018)."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence mentions that exhibitions of Jordan Bennett’s paintings took place in 2017 and 2018, it doesn’t identify the exhibitions or emphasize the order in which they were held."),
        C: L("Choice C is incorrect. While the sentence mentions two of Jordan Bennett’s exhibitions, it doesn’t indicate the order in which they were held."),
        D: L("Choice D is incorrect. While the sentence mentions two of Jordan Bennett’s exhibitions and specifies when one of them was held, it doesn’t state when the exhibition at the Grenfell Art Gallery occurred. Thus, the order in which the two exhibitions were held isn’t clearly established in the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-f1d8550e", "f1d8550e", 98)
    },
    {
      id: "rw-rs-ff8d2125",
      sourceQuestionId: "ff8d2125",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Crown shyness is a phenomenon in which the tops (crowns) of neighboring trees grow close together but don’t overlap.</li><li style=\"margin:.25em 0\">To explain how this happens, Australian forester M.R. Jacobs proposes the mutual abrasion theory.</li><li style=\"margin:.25em 0\">According to Jacobs’s theory, when trees brush against one another, branches break off.</li><li style=\"margin:.25em 0\">Malaysian scholar Francis S.P . Ng posits the mutual shade avoidance theory.</li><li style=\"margin:.25em 0\">According to Ng’s theory, when tree branches detect shade from nearby trees’ branches, they stop growing.</li></ul>",
      stem: "The student wants to compare the causes of crown shyness proposed in the two theories. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["While Jacobs proposes that crown shyness is caused by neighboring tree branches brushing against one another, Ng posits that it occurs when branches detect shade from nearby trees’ branches.", "Both Jacobs and Ng have proposed theories to explain what causes crown shyness.", "Ng posits the mutual shade avoidance theory, whereas Jacobs proposes an alternative theory.", "Jacobs’s mutual abrasion theory proposes that when neighboring trees brush against one another, branches break off, resulting in a phenomenon in which the tops of trees grow close together but don’t overlap."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence compares the two proposed causes of crown shyness, noting the theories’ differences: Jacobs cites branches brushing against one another as the cause, while Ng cites branches detecting shade from other branches as the cause."),
      distractors: {
        B: L("Choice B is incorrect. The sentence merely identifies the existence of two theories for crown shyness; it doesn’t compare the causes proposed by each theory."),
        C: L("Choice C is incorrect. The sentence merely indicates that there are two different theories for crown shyness; it doesn’t compare the causes proposed by each theory."),
        D: L("Choice D is incorrect. The sentence merely explains one theory for crown shyness; it doesn’t compare two theories.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ff8d2125", "ff8d2125", 99)
    },
    {
      id: "rw-rs-5a2a4b36",
      sourceQuestionId: "5a2a4b36",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Pauline Hopkins (1859-1930) was an African American writer.</li><li style=\"margin:.25em 0\">In her career, she created many genre-defining stories.</li><li style=\"margin:.25em 0\">Her serialized novel Hagar’s Daughter was published from 1901 to 1902 in The Colored American Magazine.</li><li style=\"margin:.25em 0\">It is considered the first African American mystery novel.</li></ul>",
      stem: "The student wants to introduce Pauline Hopkins to an audience unfamiliar with her career. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Pauline Hopkins is the author of Hagar’s Daughter, a serialized novel published from 1901 to 1902.", "African American writer Pauline Hopkins created many genre-defining stories during her career, including the first African American mystery novel, Hagar’s Daughter.", "Published in The Colored American Magazine from 1901 to 1902, Hagar’s Daughter is a serialized novel by Pauline Hopkins.", "Hagar’s Daughter by Pauline Hopkins is considered the first African American mystery novel."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence introduces Pauline Hopkins to an audience unfamiliar with her career, identifying her as a genre-defining African American writer and noting a career accomplishment."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes that Pauline Hopkins wrote a serialized novel but doesn’t introduce Hopkins to an audience unfamiliar with her career."),
        C: L("Choice C is incorrect. The sentence introduces Hopkins’s novel; it doesn’t introduce Hopkins."),
        D: L("Choice D is incorrect. The sentence explains that a novel written by Hopkins is considered the first African American mystery novel; it doesn’t introduce Hopkins to an audience unfamiliar with her career.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5a2a4b36", "5a2a4b36", 100)
    },
    {
      id: "rw-rs-8b2636ee",
      sourceQuestionId: "8b2636ee",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Angana Chaudhuri is a scientist.</li><li style=\"margin:.25em 0\">Chaudhuri studies sedimentary rocks.</li><li style=\"margin:.25em 0\">A scientist who studies sedimentary rocks is called a sedimentologist.</li><li style=\"margin:.25em 0\">Shale, chalk, and sandstone are examples of sedimentary rocks.</li></ul>",
      stem: "The student wants to identify what type of scientist Chaudhuri is. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Chalk is a type of sedimentary rock.", "Some scientists study shale, chalk, and sandstone.", "There are scientists who study sedimentary rocks.", "Chaudhuri is a sedimentologist."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence identifies the type of scientist Chaudhuri is, noting that she is a sedimentologist."),
      distractors: {
        A: L("Choice A is incorrect. The sentence provides an example of a type of sedimentary rock; it doesn’t identify what type of scientist Chaudhuri is."),
        B: L("Choice B is incorrect. The sentence indicates types of rock that some scientists study; it doesn’t identify what type of scientist Chaudhuri is."),
        C: L("Choice C is incorrect. While the sentence states that some scientists study sedimentary rocks, it doesn’t identify Chaudhuri as this type of scientist.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-8b2636ee", "8b2636ee", 101)
    },
    {
      id: "rw-rs-79c6a01e",
      sourceQuestionId: "79c6a01e",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The engineer Robert Fulton designed the Clermont steamboat in 1807.</li><li style=\"margin:.25em 0\">He designed it in New York City.</li><li style=\"margin:.25em 0\">Clermont was the world’s first commercially successful steamboat.</li><li style=\"margin:.25em 0\">The city of Fulton, Missouri, is named after Robert Fulton.</li><li style=\"margin:.25em 0\">New York City’s Fulton Street is named after him.</li></ul>",
      stem: "The student wants to indicate how Fulton, Missouri, got its name. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Fulton, Missouri, shares its name with Fulton Street in New York City.", "Fulton Street is in New York City, where the steamboat Clermont was designed in 1807.", "Designed in 1807 in New York City, Clermont was the first commercially successful steamboat.", "Fulton, Missouri, is named after Robert Fulton, designer of the first commercially successful steamboat."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence indicates how Fulton, Missouri, got its name, noting that the city was named after the designer of the first commercially successful steamboat, Robert Fulton."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates that Fulton, Missouri, has the same name as a street in New York City; it doesn’t indicate how the city of Fulton got its name."),
        B: L("Choice B is incorrect. The sentence indicates that Fulton Street is in New York City; it doesn’t indicate how Fulton, Missouri, got its name."),
        C: L("Choice C is incorrect. The sentence provides details about Fulton’s steamboat; it doesn’t indicate how Fulton, Missouri, got its name.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-79c6a01e", "79c6a01e", 103)
    },
    {
      id: "rw-rs-23da9791",
      sourceQuestionId: "23da9791",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Scientists have long sought to determine the origin of glass in Chile’s Atacama Desert.</li><li style=\"margin:.25em 0\">A 2017 study concluded that ancient grass fires had melted the area’s sandy soil into glass.</li><li style=\"margin:.25em 0\">In 2021, a different study revealed that the mineral signatures of glass samples were consistent with the mineral signatures of comet samples collected by NASA.</li><li style=\"margin:.25em 0\">That study concluded that the glass had formed as a result of a cometary explosion close to the desert’s surface.</li></ul>",
      stem: "The student wants to describe how scientific understanding about the glass’s origin has evolved. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Scientists have long sought to determine the origin of the glass, with one study concluding that it formed when ancient grass fires melted the area’s sandy soil.", "Studies in 2017 and 2021 offered different explanations for the origin of the glass.", "Mineral signatures of glass samples are consistent with those of comet samples collected by NASA, according to new research.", "A 2017 study concluded that ancient grass fires had caused the glass’s formation, but new research suggests that the glass formed as a result of a cometary explosion close to the desert’s surface."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence describes how scientific understanding of the glass’s origin has evolved, explaining that new research suggests the glass formed as a result of a cometary explosion instead of being caused by grass fires (as was previously believed)."),
      distractors: {
        A: L("Choice A is incorrect. The sentence explains the conclusion of the older study; it doesn’t describe how scientific understanding of the glass’s origin has evolved."),
        B: L("Choice B is incorrect. While the sentence indicates that the two studies provided different explanations, it doesn’t describe how scientific understanding of the glass’s origin has evolved."),
        C: L("Choice C is incorrect. The sentence references a recent finding but doesn’t effectively describe how scientific understanding of the glass’s origin has evolved.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-23da9791", "23da9791", 104)
    },
    {
      id: "rw-rs-878f835a",
      sourceQuestionId: "878f835a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Some atoms contain an excess of neutrons.</li><li style=\"margin:.25em 0\">Often, these neutrons form a “skin” on the atom’s surface.</li><li style=\"margin:.25em 0\">An atom of lead-208 has a neutron skin.</li><li style=\"margin:.25em 0\">The thickness of its neutron skin is approximately 0.28 trillionths of a millimeter.</li></ul>",
      stem: "The student wants to emphasize the thickness of lead-208’s neutron skin. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The neutron skin surrounding an atom of lead-208 measures about 0.28 trillionths of a millimeter.", "Atoms with excess neutrons will often acquire a neutron skin.", "An atom of lead-208, like some other atoms, is surrounded by a neutron skin.", "Neutrons surround the surface of an atom of lead-208."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the thickness of lead-208’s neutron skin, noting that it is about 0.28 trillionths of a millimeter thick."),
      distractors: {
        B: L("Choice B is incorrect. The sentence makes a generalization about atoms, stating that atoms with excess neutrons will often acquire a neutron skin; it doesn’t emphasize the thickness of lead-208’s neutron skin."),
        C: L("Choice C is incorrect. The sentence states that lead-208 has a neutron skin; it doesn’t emphasize the thickness of that skin."),
        D: L("Choice D is incorrect. The sentence indicates that lead-208 is surrounded by neutrons; it doesn’t emphasize the thickness of lead-208’s neutron skin.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-878f835a", "878f835a", 106)
    },
    {
      id: "rw-rs-31ac4d2c",
      sourceQuestionId: "31ac4d2c",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Hina Hanta is an online archive curated by the Choctaw Nation of Oklahoma.</li><li style=\"margin:.25em 0\">Hina Hanta means “bright path” in Choctaw.</li><li style=\"margin:.25em 0\">It features images of cultural artifacts relevant to the history of the Choctaw people.</li><li style=\"margin:.25em 0\">It includes a fanner basket (ufko tapushik in Choctaw) made from cane.</li><li style=\"margin:.25em 0\">It includes a robe (nita anchi) made from bear fur.</li></ul>",
      stem: "The student wants to specify the fanner basket’s name in Choctaw. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Hina Hanta archive features cultural artifacts, such as a fanner basket and a robe, that are relevant to the history of the Choctaw people.", "The cane fanner basket, which is included in the Hina Hanta online archive, is called an ufko tapushik in Choctaw.", "Hina Hanta, which means “bright path” in Choctaw, includes a fanner basket in its archive.", "The name of the online archive Hina Hanta means “bright path” in Choctaw."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence specifies the fanner basket’s name in Choctaw, noting that it’s called ufko tapushik."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence mentions the fanner basket, it doesn’t specify its name in Choctaw."),
        C: L("Choice C is incorrect. While the sentence mentions the fanner basket, it doesn’t specify its name in Choctaw."),
        D: L("Choice D is incorrect. The sentence doesn’t mention the fanner basket or specify its name in Choctaw.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-31ac4d2c", "31ac4d2c", 108)
    },
    {
      id: "rw-rs-8432a140",
      sourceQuestionId: "8432a140",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Marine biologist Camille Jazmin Gaynus studies coral reefs.</li><li style=\"margin:.25em 0\">Coral reefs are vital underwater ecosystems that provide habitats to 25% of all marine species.</li><li style=\"margin:.25em 0\">Reefs can include up to 8,000 species of fish, such as toadfish, seahorses, and clown triggerfish.</li><li style=\"margin:.25em 0\">The Amazon Reef is a coral reef in Brazil.</li><li style=\"margin:.25em 0\">It is one of the largest known reefs in the world.</li></ul>",
      stem: "The student wants to introduce the scientist and her field of study to a new audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Located in Brazil, the Amazon Reef is one of the largest known coral reefs in the world.", "Marine biologist Camille Jazmin Gaynus studies coral reefs, vital underwater ecosystems that provide homes to 25% of all marine species.", "Providing homes to 25% of all marine species, including up to 8,000 species of fish, coral reefs are vital underwater ecosystems and thus of great interest to marine biologists.", "As Camille Jazmin Gaynus knows well, coral reefs are vital underwater ecosystems, providing homes to thousands of species of fish."],
      answer: "B",
      explanation: L("Choice B is the best answer. We’re asked to select the sentence that \"introduce[s] the scientist and her field of study. \" This choice introduces scientist Camille Jazmin Gaynus as a marine biologist and explains what marine life she studies."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t mention Camille Jazmin Gaynus, so it fails to \"introduce the scientist. \""),
        C: L("Choice C is incorrect. This choice doesn’t mention Camille Jazmin Gaynus, so it fails to \"introduce the scientist. \""),
        D: L("Choice D is incorrect. This choice mentions Camille Jazmin Gaynus, but it doesn’t identify her as a marine biologist. It says she \"knows well\" about coral reefs, but doesn’t identify her expertise as a \"field of study. \"")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-8432a140", "8432a140", 110)
    },
    {
      id: "rw-rs-94f48106",
      sourceQuestionId: "94f48106",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 2022, University of Miami researchers discovered brine pools in the Gulf of Aqaba.</li><li style=\"margin:.25em 0\">A brine pool is an underwater lake that sits on the ocean floor.</li><li style=\"margin:.25em 0\">The water in brine pools is three to eight times saltier than the surrounding ocean.</li><li style=\"margin:.25em 0\">The extreme saltiness of this water makes it toxic to most sea life.</li><li style=\"margin:.25em 0\">Some forms of bacteria are able to survive in brine pools.</li></ul>",
      stem: "The student wants to explain why brine pools are toxic to most sea life. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Though brine pools are toxic to most sea life, some bacteria can survive there.", "The water in brine pools is toxic to most sea life because it is three to eight times saltier than the surrounding ocean.", "The brine pools in the Gulf of Aqaba are toxic to most sea life and were discovered by researchers in 2022.", "Brine pools are salty underwater lakes that sit on the ocean floor."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence explains why brine pools are toxic to most sea life, noting that the water in the pools is three to eight times saltier than the surrounding ocean."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence states that brine pools are toxic to most sea life, it doesn’t explain why the pools are toxic."),
        C: L("Choice C is incorrect. While the sentence states that brine pools are toxic to most sea life, it doesn’t explain why the pools are toxic."),
        D: L("Choice D is incorrect because the sentence describes brine pools, mentioning that they are salty, but doesn’t explain why they are toxic to most sea life.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-94f48106", "94f48106", 114)
    },
    {
      id: "rw-rs-146233fc",
      sourceQuestionId: "146233fc",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Lighthouses send out crucial light signals to help ships and other watercraft navigate at night.</li><li style=\"margin:.25em 0\">Before automation, lighthouses were run by lighthouse keepers.</li><li style=\"margin:.25em 0\">Maria Younghans was the lighthouse keeper at Biloxi Light in Mississippi.</li><li style=\"margin:.25em 0\">She held this position from 1867 to 1918.</li><li style=\"margin:.25em 0\">Flora McNeil was the lighthouse keeper at Bridgeport Breakwater Light in Connecticut.</li><li style=\"margin:.25em 0\">She held this position from 1904 to 1920.</li></ul>",
      stem: "The student wants to emphasize the order in which the two lighthouse keepers began their careers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["From 1867 to 1918, the nighttime waters of Mississippi were more navigable thanks to lighthouse keepers Flora McNeil and Maria Younghans.", "Before automation, lighthouse keepers like Maria Younghans and Flora McNeil were crucial to ensuring safe navigation for watercraft.", "Flora McNeil began her career as a lighthouse keeper years after Maria Younghans did.", "Maria Younghans’s career as a lighthouse keeper ended in 1918, whereas Flora McNeil’s ended in 1920."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes the order in which the two lighthouse keepers began their careers, noting that McNeil, who became the keeper at Bridgeport Breakwater Light in 1904, began her career years after Younghans, who became the keeper at Biloxi Light in 1867."),
      distractors: {
        A: L("Choice A is incorrect because it makes a generalization about the effects of McNeil’s and Younghans’s work; it doesn’t emphasize the order in which the two keepers began their careers. In addition, the sentence misrepresents information from the notes; McNeil was the keeper at a lighthouse in Connecticut from 1904 to 1920, not at a lighthouse in Mississippi from 1867 to 1918."),
        B: L("Choice B is incorrect. The sentence claims that Younghans and McNeil were crucial to ensuring the safety of watercraft before lighthouses became automated; it doesn’t emphasize the order in which the two keepers began their careers."),
        D: L("Choice D is incorrect. The sentence emphasizes when the lighthouse keepers’ respective careers ended; it doesn’t emphasize the order in which the two keepers began their careers.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-146233fc", "146233fc", 115)
    },
    {
      id: "rw-rs-c3b854fa",
      sourceQuestionId: "c3b854fa",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Researchers Gwangsu Kim et al. sought to explore the relationship between the brain’s ability to process natural sounds and its ability to process music.</li><li style=\"margin:.25em 0\">They used an artificial deep neural network (DNN) that models how the brain processes auditory information.</li><li style=\"margin:.25em 0\">The DNN had been trained to detect natural sounds (excluding music).</li><li style=\"margin:.25em 0\">Finding: The DNN spontaneously developed neurons that responded to music but not to other auditory stimuli.</li><li style=\"margin:.25em 0\">Conclusion: The brain’s ability to process music may arise as a by-product of natural sound processing.</li></ul>",
      stem: "The student wants to present the aim of the study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In their study, the researchers evaluated whether an artificial deep neural network could model how the brain processes auditory information.", "By training an artificial deep neural network, the researchers aimed to establish that the brain’s ability to process natural sounds arises as a by-product of processing music.", "The researchers used an artificial deep neural network, which spontaneously developed neurons that responded to music but not to other auditory stimuli.", "Using an artificial deep neural network, the researchers sought to explore the relationship between the brain’s ability to process natural sounds and its ability to process music."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence presents the aim of the study, noting that the researchers sought to explore the relationship between the brain’s ability to process natural sounds and its ability to process music."),
      distractors: {
        A: L("Choice A is incorrect. The researchers used the DNN to achieve their aim of exploring the relationship between the brain’s ability to process natural sounds and its ability to process music; evaluating the DNN itself was not their aim."),
        B: L("Choice B is incorrect. The sentence misrepresents the researchers’ conclusion as their aim and also misrepresents that conclusion. The researchers’ aim was to explore the relationship between the brain’s ability to process natural sounds and its ability to process music; their conclusion was that the brain’s ability to process music arises as a by-product of natural sound processing, not the other way around."),
        C: L("Choice C is incorrect. The sentence merely describes a finding from the study; it doesn’t present the aim of the study.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-c3b854fa", "c3b854fa", 116)
    },
    {
      id: "rw-rs-64e88c58",
      sourceQuestionId: "64e88c58",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1971, experimental musician Pauline Oliveros created Sonic Meditations.</li><li style=\"margin:.25em 0\">Sonic Meditations is not music but rather a series of sound-based exercises called meditations.</li><li style=\"margin:.25em 0\">Each meditation consists of instructions for participants to make, imagine, listen to, or remember sounds.</li><li style=\"margin:.25em 0\">The instructions for Meditation V state, “walk so silently that the bottoms of your feet become ears.”</li><li style=\"margin:.25em 0\">Those for Meditation XVIII state, “listen to a sound until you no longer recognize it.”</li></ul>",
      stem: "The student wants to provide an explanation and an example of Oliveros’s Sonic Meditations. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Sonic Meditations is not music but rather a series of sound-based meditations that consist of instructions; Meditation XVIII, for instance, instructs participants to “listen to a sound until you no longer recognize it. ”", "In 1971, Oliveros created Sonic Meditations, a series of meditations that consist of instructions for participants to make, imagine, listen to, or remember sounds.", "“Walk so silently that the bottoms of your feet become ears” is one example of the instructions found in Oliveros’s Sonic Meditations.", "While both meditations consist of instructions, Meditation XVIII instructs participants to “listen, ” whereas Meditation V instructs participants to “walk. ”"],
      answer: "A",
      explanation: L("Choice A is the best answer. It describes what a “Sonic Meditation” is, and then gives an example in the form of Meditation XVIII."),
      distractors: {
        B: L("Choice B is incorrect. This choice describes what a “Sonic Meditation” is, but doesn’t give an example of one."),
        C: L("Choice C is incorrect. This choice gives an example of a “Sonic Meditation, ” but doesn’t explain what the meditations are."),
        D: L("Choice D is incorrect. This choice doesn’t describe what a “Sonic Meditation” is.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-64e88c58", "64e88c58", 118)
    },
    {
      id: "rw-rs-2c61e0b9",
      sourceQuestionId: "2c61e0b9",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">British musicians John Lennon and Paul McCartney shared writing credit for numerous Beatles songs.</li><li style=\"margin:.25em 0\">Many Lennon-McCartney songs were actually written by either Lennon or McCartney, not by both.</li><li style=\"margin:.25em 0\">The exact authorship of specific parts of many Beatles songs, such as the verse for “In My Life,” is disputed.</li><li style=\"margin:.25em 0\">Mark Glickman, Jason Brown, and Ryan Song used statistical methods to analyze the musical content of Beatles songs.</li><li style=\"margin:.25em 0\">They concluded that there is 18.9% probability that McCartney wrote the verse for “In My Life,” stating that the verse is “consistent with Lennon’s songwriting style.”</li></ul>",
      stem: "The student wants to make a generalization about the kind of study conducted by Glickman, Brown, and Song. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Based on statistical analysis, Glickman, Brown, and Song claim that John Lennon wrote the verse of “In My Life. ”", "There is only an 18.9% probability that Paul McCartney wrote the verse for “In My Life”; John Lennon is the more likely author.", "It is likely that John Lennon, not Paul McCartney, wrote the verse for “In My Life. ”", "Researchers have used statistical methods to address questions of authorship within the field of music."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence uses information from the notes to make a generalization about the kind of study Glickman, Brown, and Song conducted. Specifically, the sentence indicates that the study was of a kind that used statistical methods to address questions of authorship within the field of music."),
      distractors: {
        A: L("Choice A is incorrect because the sentence summarizes the methodology and findings of a particular analysis of a single song; it doesn’t make a generalization about the kind of study conducted."),
        B: L("Choice B is incorrect because the sentence mentions the data and conclusion of a particular analysis of a single song; it doesn’t make a generalization about the kind of study conducted."),
        C: L("Choice C is incorrect because the sentence focuses on a specific conclusion from a particular analysis of a single song; it doesn’t make a generalization about the kind of study conducted.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-2c61e0b9", "2c61e0b9", 119)
    },
    {
      id: "rw-rs-a1955620",
      sourceQuestionId: "a1955620",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Edmonia Lewis (1844–1907) was an African American and Mississauga Ojibwe sculptor.</li><li style=\"margin:.25em 0\">Forever Free (1867) is a marble sculpture by Lewis.</li><li style=\"margin:.25em 0\">It depicts a male figure and a female figure gazing upward.</li><li style=\"margin:.25em 0\">It commemorates the 1863 Emancipation Proclamation.</li><li style=\"margin:.25em 0\">The phrase “forever free” from the text of the Emancipation Proclamation is inscribed on the sculpture’s base.</li><li style=\"margin:.25em 0\">Art historian Kirsten Buick describes the sculpture as a “celebration of liberty.”</li></ul>",
      stem: "The student wants to explain the sculpture’s specific historical context. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["According to art historian Kirsten Buick, Forever Free, which depicts a male figure and a female figure gazing upward, is a “celebration of liberty. ”", "The base of Edmonia Lewis’s 1867 marble sculpture is inscribed with a historically significant phrase: “forever free. ”", "Completed in 1867, Lewis’s sculpture Forever Free commemorates the Emancipation Proclamation, which had been issued four years previously.", "Forever Free (1867) is a marble sculpture by Edmonia Lewis, an African American and Mississauga Ojibwe sculptor who lived from 1844 to 1907."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence explains the specific historical context of Lewis’s sculpture, noting that it commemorates the Emancipation Proclamation, which was issued four years before the sculpture was completed in 1867."),
      distractors: {
        A: L("Choice A is incorrect. The sentence quotes an art historian’s general interpretation of the sculpture’s meaning; it doesn’t explain the sculpture’s specific historical context."),
        B: L("Choice B is incorrect. While the sentence mentions a historically significant phrase on the sculpture’s base, it doesn’t explain the specific historical context of the phrase or the sculpture."),
        D: L("Choice D is incorrect. The sentence provides biographical information about Lewis; it doesn’t explain the specific historical context of the sculpture.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-a1955620", "a1955620", 120)
    },
    {
      id: "rw-rs-14037904",
      sourceQuestionId: "14037904",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Heartbeat of Wounded Knee: Native America from 1890 to the Present is a history book by Ojibwe author David Treuer.</li><li style=\"margin:.25em 0\">In a review, a critic for The Economist noted that “Treuer’s storytelling skills shine” and that the book is an “elegant handling of [a] complex narrative.”</li><li style=\"margin:.25em 0\">A critic for O, The Oprah Magazine called it “a marvel of research and storytelling.”</li><li style=\"margin:.25em 0\">A critic for the Missoulian dubbed it “a monumental achievement.”</li></ul>",
      stem: "The student wants to emphasize a similarity in how critics responded to Treuer’s book. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Treuer’s book, which was widely reviewed, focuses on Native American history from 1890 to the present.", "Dubbed “a monumental achievement” by the Missoulian, Treuer’s book documents over a century of Native American history.", "Critics praised Treuer’s book for its compelling narrative, with O, The Oprah Magazine calling it “a marvel of research and storytelling” and The Economist likewise writing that “Treuer’s storytelling skills shine” and that the book is an “elegant handling of [a] complex narrative. ”", "While the Missoulian focused on the book’s broader achievement, The Economist zeroed in on Treuer’s storytelling skills."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes a similarity in how critics responded to Treuer’s book, noting that the critics for O, The Oprah Magazine and The Economist both praised the book’s storytelling."),
      distractors: {
        A: L("Choice A is incorrect. The sentence provides background information about Treuer’s book; it doesn’t emphasize a similarity in how critics responded to it."),
        B: L("Choice B is incorrect. The sentence cites a single critic’s response to Treuer’s book; it doesn’t emphasize a similarity in the responses of multiple critics."),
        D: L("Choice D is incorrect. The sentence emphasizes a difference, not a similarity, in how two critics responded to Treuer’s book.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-14037904", "14037904", 121)
    },
    {
      id: "rw-rs-113f16da",
      sourceQuestionId: "113f16da",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Some animals have evolved to physically resemble another animal, plant, or object.</li><li style=\"margin:.25em 0\">This is known as mimicry.</li><li style=\"margin:.25em 0\">Crab spiders mimic the appearance of flowers.</li><li style=\"margin:.25em 0\">This helps crab spiders ambush their prey.</li><li style=\"margin:.25em 0\">Katydids mimic the appearance of leaves.</li><li style=\"margin:.25em 0\">This helps katydids hide from their predators.</li></ul>",
      stem: "The student wants to emphasize a difference in how katydids and crab spiders use mimicry. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Katydids mimic the appearance of flowers, and crab spiders mimic that of leaves.", "Katydids and crab spiders are two examples of animals that use mimicry.", "Unlike crab spiders, which use mimicry to ambush prey, katydids use mimicry to hide from predators.", "Animals that use mimicry have evolved to resemble another animal, plant, or object."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence uses \"unlike\" to emphasize a difference in how katydids and crab spiders use mimicry, noting that crab spiders use mimicry to ambush prey while katydids use it to hide from predators."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does contrast katydids and crab spiders, it misrepresents the information in the notes. Katydids mimic the appearance of leaves (not flowers), whereas crab spiders mimic the appearance of flowers (not leaves)."),
        B: L("Choice B is incorrect. While the sentence indicates that katydids and crab spiders use mimicry, it doesn’t emphasize a difference in how they use it."),
        D: L("Choice D is incorrect. The sentence describes what mimicry is; it doesn’t emphasize a difference in how katydids and crab spiders specifically use mimicry.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-113f16da", "113f16da", 125)
    },
    {
      id: "rw-rs-d436a2b2",
      sourceQuestionId: "d436a2b2",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Komodo dragons are the largest lizards in the world.</li><li style=\"margin:.25em 0\">They live on four islands in Komodo National Park, Indonesia.</li><li style=\"margin:.25em 0\">The park has a total of twenty-nine islands.</li></ul>",
      stem: "The student wants to emphasize how many islands in Komodo National Park have Komodo dragons living on them. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Komodo dragons, the world’s largest lizards, live on islands in Komodo National Park, Indonesia.", "The largest lizards in the world are found in Komodo National Park.", "Only four of the twenty-nine islands in Komodo National Park have Komodo dragons living on them.", "There are twenty-nine islands in Indonesia’s Komodo National Park."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes the number of islands in Komodo National Park that have Komodo dragons living on them, noting that four of the park’s twenty-nine islands have Komodo dragons."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does explain that Komodo dragons live on the islands of Komodo National Park, it doesn’t emphasize how many of those islands Komodo dragons live on."),
        B: L("Choice B is incorrect. The sentence explains that Komodo National Park contains the world’s largest lizards; it doesn’t identify these lizards as Komodo dragons or emphasize how many of the park’s islands the lizards live on."),
        D: L("Choice D is incorrect. The sentence specifies the total number of islands in Komodo National Park; it doesn’t emphasize how many of those islands have Komodo dragons.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d436a2b2", "d436a2b2", 129)
    },
    {
      id: "rw-rs-f4b63a04",
      sourceQuestionId: "f4b63a04",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 2013, paleontology professor Hesham Sallam and his students from Mansoura University in Egypt made a discovery.</li><li style=\"margin:.25em 0\">The team found a partial dinosaur skeleton at a site in Egypt’s Dakhla Oasis.</li><li style=\"margin:.25em 0\">The skeleton belonged to a dinosaur species that lived approximately 80 million years ago.</li><li style=\"margin:.25em 0\">The new species was named Mansourasaurus to recognize the team that discovered it.</li></ul>",
      stem: "The student wants to explain the origin of the species’ name. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Mansourasaurus, a new species discovered in Egypt in 2013, lived approximately 80 million years ago.", "A partial dinosaur skeleton found in Egypt’s Dakhla Oasis belonged to a species named Mansourasaurus.", "Mansourasaurus, a species that lived approximately 80 million years ago, was discovered in 2013 by Egyptian paleontologist Hesham Sallam and a team of university students.", "The new species was named Mansourasaurus to recognize the team that discovered it, a professor and students from Mansoura University."],
      answer: "D",
      explanation: L("Choice D is the best answer. It explains where the dinosaur’s name came from."),
      distractors: {
        A: L("Choice A is incorrect. This choice does not explain the origin of the dinosaur’s name."),
        B: L("Choice B is incorrect. This choice does not explain the origin of the dinosaur’s name."),
        C: L("Choice C is incorrect. This choice does not explain the origin of the dinosaur’s name.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-f4b63a04", "f4b63a04", 132)
    },
    {
      id: "rw-rs-af88c47a",
      sourceQuestionId: "af88c47a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Freddie Wong (born 1985) is a director and special effects artist from the United States.</li><li style=\"margin:.25em 0\">He is best known for the action-comedy web series Video Game High School (VGHS).</li><li style=\"margin:.25em 0\">VGHS premiered in 2012 on RocketJump, a YouTube channel that Wong cocreated.</li><li style=\"margin:.25em 0\">The series was celebrated for its inventive video game–centric world and high-quality special effects.</li><li style=\"margin:.25em 0\">VGHS was nominated for a Producers Guild Award for Outstanding Digital Series.</li></ul>",
      stem: "The student wants to begin a narrative about Wong’s award-nominated web series. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In 2012, director and visual effects artist Freddie Wong launched a new action-comedy web series: Video Game High School.", "Video Game High School was celebrated for its inventive video game–centric world and high-quality special effects, and it was nominated for a Producer’s Guild Award for Outstanding Digital Series.", "Wong, cocreator of the YouTube channel RocketJump, would go on to see his web series be nominated for a Producers Guild Award.", "In 2012, Video Game High School premiered on RocketJump; it would later be nominated for an award."],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice introduces Wong and VGHS in an active and specific way, as if to an audience unfamiliar with the series. It also sets up the time and genre of the web series, which are useful ways to introduce the series of events in a narrative."),
      distractors: {
        B: L("Choice B is incorrect. This choice isn’t suited for beginning a narrative. A narrative is a story that follows a sequence of events and creates interest and suspense for the reader. This choice jumps to the end, explaining the success of VGHS without explaining what it is."),
        C: L("Choice C is incorrect. This choice isn’t suited for beginning a narrative. It doesn’t actually introduce the web series by name. It just jumps to later in the story without sufficient explanation."),
        D: L("Choice D is incorrect. This choice is not very effective for beginning a narrative. It doesn’t explain what VGHS is, and it doesn’t mention Wong.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-af88c47a", "af88c47a", 133)
    },
    {
      id: "rw-rs-d6dec50e",
      sourceQuestionId: "d6dec50e",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 2019, Emily Shepard and colleagues in the UK and Germany studied the effect of wind on auks’ success in landing at cliffside nesting sites.</li><li style=\"margin:.25em 0\">They found as wind conditions intensified, the birds needed more attempts in order to make a successful landing.</li><li style=\"margin:.25em 0\">When the wind was still, almost 100% of landing attempts were successful.</li><li style=\"margin:.25em 0\">In a strong breeze, approximately 40% of attempts were successful.</li><li style=\"margin:.25em 0\">In near-gale conditions, only around 20% of attempts were successful.</li></ul>",
      stem: "The student wants to summarize the study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["For a 2019 study, researchers from the UK and Germany collected data on auks’ attempts to land at cliffside nesting sites in different wind conditions.", "Emily Shepard and her colleagues wanted to know the extent to which wind affected auks’ success in landing at cliffside nesting sites, so they conducted a study.", "Knowing that auks often need multiple attempts to land at their cliffside nesting sites, Emily Shepard studied the birds’ success rate, which was only around 20% in some conditions.", "Emily Shepard’s 2019 study of auks’ success in landing at cliffside nesting sites showed that as wind conditions intensified, the birds’ success rate decreased."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence effectively summarizes the study, noting who conducted it, when it was conducted, and what its results showed: that auks’ landing success rate decreased as wind conditions intensified."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence presents the methodology of the study—that is, the approach taken by the researchers—it fails to summarize the study as a whole."),
        B: L("Choice B is incorrect. While the sentence presents the aim, or goal, of the study, it fails to summarize the study as a whole."),
        C: L("Choice C is incorrect. While the sentence indicates what Shepard studied, it fails to mention a key factor: the effect of wind. It thus fails to summarize the study as a whole.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d6dec50e", "d6dec50e", 134)
    },
    {
      id: "rw-rs-94cb8720",
      sourceQuestionId: "94cb8720",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 2020, theater students at Radford and Virginia Tech chose an interactive, online format to present a play about woman suffrage activists.</li><li style=\"margin:.25em 0\">Their “Women and the Vote” website featured an interactive digital drawing of a Victorian-style house.</li><li style=\"margin:.25em 0\">Audiences were asked to focus on a room of their choice and select from that room an artifact related to the suffrage movement.</li><li style=\"margin:.25em 0\">One click took them to video clips, songs, artwork, and texts associated with the artifact.</li><li style=\"margin:.25em 0\">The play was popular with audiences because the format allowed them to control the experience.</li></ul>",
      stem: "The student wants to explain an advantage of the “Women and the Vote” format. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["“Women and the Vote” featured a drawing of a Victorian-style house with several rooms, each containing suffrage artifacts.", "To access video clips, songs, artwork, and texts, audiences had to first click on an artifact.", "The “Women and the Vote” format appealed to audiences because it allowed them to control the experience.", "Using an interactive format, theater students at Radford and Virginia Tech created “Women and the Vote, ” a play about woman suffrage activists."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence explains an advantage of the “Women and the Vote” format, noting that the format appealed to audiences because it allowed them to control the experience."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes a digital drawing on the “Women and the Vote” website; it doesn’t explain an advantage of the play’s format."),
        B: L("Choice B is incorrect. The sentence explains how audiences interacted with the “Women and the Vote” website; it doesn’t explain an advantage of the play’s format."),
        D: L("Choice D is incorrect. While the sentence mentions that “Women and the Vote” had an interactive format, it doesn’t explain what advantage this format might have.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-94cb8720", "94cb8720", 135)
    },
    {
      id: "rw-rs-9551ef8b",
      sourceQuestionId: "9551ef8b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The magnificent frigatebird (fregata magnificens) is a species of seabird that feeds mainly on fish, tuna, squid, and other small sea animals.</li><li style=\"margin:.25em 0\">It is unusual among seabirds in that it doesn’t dive into the water for prey.</li><li style=\"margin:.25em 0\">One way it acquires food is by using its hook-tipped bill to snatch prey from the surface of the water.</li><li style=\"margin:.25em 0\">Another way it acquires food is by taking it from weaker birds by force.</li><li style=\"margin:.25em 0\">This behavior is known as kleptoparasitism.</li></ul>",
      stem: "The student wants to emphasize a similarity between the two ways a magnificent frigatebird acquires food. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A magnificent frigatebird never dives into the water, instead using its hook-tipped bill to snatch prey from the surface.", "Neither of a magnificent frigatebird’s two ways of acquiring food requires the bird to dive into the water.", "Of the magnificent frigatebird’s two ways of acquiring food, only one is known as kleptoparasitism.", "In addition to snatching prey from the water with its hook-tipped bill, a magnificent frigatebird takes food from other birds by force."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes a similarity between the two ways a magnificent frigatebird acquires food, noting that neither way requires the seabird to dive into the water."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes how a magnificent frigatebird captures prey without diving into water; it doesn’t emphasize a similarity between the two ways the seabird acquires food."),
        C: L("Choice C is incorrect. The sentence notes the term used to describe one of the two ways that magnificent frigatebirds acquire food; it doesn’t emphasize a similarity between the two ways."),
        D: L("Choice D is incorrect. The sentence describes the two ways that a magnificent frigatebird acquires food; it doesn’t emphasize a similarity between the two ways.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-9551ef8b", "9551ef8b", 138)
    },
    {
      id: "rw-rs-6de02dfa",
      sourceQuestionId: "6de02dfa",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">​ Thailand’s annual Songkran Water Festival is held each April.</li><li style=\"margin:.25em 0\">It marks Songkran, the traditional Thai New Year.</li><li style=\"margin:.25em 0\">People splash and spray each other for fun at the festival’s community-wide water fights.</li><li style=\"margin:.25em 0\">In Bangkok, thousands gather along Silom Road for the city’s largest water fight.</li><li style=\"margin:.25em 0\">In Chiang Mai, thousands gather at a historical monument called the Tha Phae Gate for the city’s largest water fight.</li></ul>",
      stem: "The student wants to emphasize a similarity in how people in Bangkok and Chiang Mai celebrate Songkran. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The largest water fight in Bangkok takes place along a city street, whereas the largest water fight in Chiang Mai takes place at a historical monument.", "In both Bangkok and Chiang Mai, thousands gather to celebrate Songkran with water fights.", "People in both Bangkok and Chiang Mai celebrate Songkran, but they don’t do so in exactly the same way.", "Each April, people in Thailand celebrate Songkran, the traditional Thai New Year."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes a similarity in how people in Bangkok and Chiang Mai celebrate Songkran, indicating that people in both cities gather to celebrate with water fights."),
      distractors: {
        A: L("Choice A is incorrect. The sentence notes the different locations of the largest water fight in Bangkok and the largest water fight in Chiang Mai; it doesn’t emphasize a similarity in how people in Bangkok and Chiang Mai celebrate Songkran."),
        C: L("Choice C is incorrect. The sentence indicates that people in Bangkok and Chiang Mai don’t celebrate Songkran in exactly the same way; it doesn’t emphasize a similarity in how people in the two cities celebrate Songkran."),
        D: L("Choice D is incorrect. The sentence explains when people in Thailand celebrate Songkran; it doesn’t emphasize a similarity in how people in Bangkok and Chiang Mai celebrate Songkran.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-6de02dfa", "6de02dfa", 143)
    },
    {
      id: "rw-rs-c92ea686",
      sourceQuestionId: "c92ea686",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Ramayana is a Sanskrit epic poem from ancient India.</li><li style=\"margin:.25em 0\">In The Ramayana, the character Kaikeyi is often portrayed as a villain.</li><li style=\"margin:.25em 0\">Kaikeyi is a 2022 novel by Vaishnavi Patel.</li><li style=\"margin:.25em 0\">The novel is a retelling of the epic poem from Kaikeyi’s point of view.</li><li style=\"margin:.25em 0\">It often portrays Kaikeyi as heroic.</li></ul>",
      stem: "The student wants to emphasize whose point of view the novel is told from. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["From the point of view of The Ramayana, the character Kaikeyi is often a villain.", "Vaishnavi Patel often portrays the character as heroic.", "Kaikeyi is a retelling of The Ramayana from the character Kaikeyi’s point of view.", "The Ramayana is an epic poem that features the character Kaikeyi."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes whose point of view the novel Kaikeyi is told from: the character Kaikeyi’s."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does discuss point of view, it focuses on that of the epic poem rather than the novel."),
        B: L("Choice B is incorrect. While the sentence seems to be referring to Patel’s novel, it doesn’t establish whose point of view the novel is told from."),
        D: L("Choice D is incorrect. The sentence discusses the character Kaikeyi in the context of the epic poem; it doesn’t discuss the novel’s point of view.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-c92ea686", "c92ea686", 144)
    },
    {
      id: "rw-rs-1bb4aec8",
      sourceQuestionId: "1bb4aec8",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Meteorites found on Earth are divided into two categories.</li><li style=\"margin:.25em 0\">A meteorite that was observed falling to Earth before being recovered is known as a meteorite fall.</li><li style=\"margin:.25em 0\">All other meteorites found on Earth are known as meteorite finds.</li><li style=\"margin:.25em 0\">There have been about 1,200 recorded meteorite falls.</li><li style=\"margin:.25em 0\">There have been over 60,000 recorded meteorite finds.</li></ul>",
      stem: "The student wants to contrast the number of meteorite falls with the number of meteorite finds. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A meteorite that was observed falling to Earth before being recovered is known as a meteorite fall; all others are known as meteorite finds.", "Meteorites found on Earth are divided into two categories: meteorite falls and meteorite finds.", "There have been about 1,200 recorded meteorite falls, or meteorites observed falling to Earth.", "While there have been only about 1,200 recorded meteorite falls, there have been over 60,000 meteorite finds."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence contrasts the number of meteorite falls with the number of meteorite finds, noting that there have been over 60,000 meteorite finds but only about 1,200 recorded meteorite falls."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence explains the difference between meteorite falls and meteorite finds, it doesn’t contrast the number of meteorite falls and meteorite finds."),
        B: L("Choice B is incorrect. The sentence indicates the two categories of meteorites found on Earth; it doesn’t contrast the number of meteorite falls and meteorite finds."),
        C: L("Choice C is incorrect. While the sentence notes the number of recorded meteorite falls, it doesn’t contrast this with the number of meteorite finds.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-1bb4aec8", "1bb4aec8", 150)
    },
    {
      id: "rw-rs-85c0c0f0",
      sourceQuestionId: "85c0c0f0",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Texture analysis and historical analysis are two approaches to art criticism.</li><li style=\"margin:.25em 0\">Texture analysis examines how surfaces are visually represented in an artwork.</li><li style=\"margin:.25em 0\">Such an analysis of Giorgione’s Youth Holding an Arrow might consider how the painting’s blended colors make the subject’s skin appear smooth in texture.</li><li style=\"margin:.25em 0\">Historical analysis considers the historical context in which a work was created.</li><li style=\"margin:.25em 0\">Such an analysis of Diego Velázquez’s Las Meninas might consider how the painting’s depiction of the artist with King Philip IV symbolizes art’s historical ties to power.</li></ul>",
      stem: "The student wants to present historical analysis to an audience unfamiliar with the concept. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A texture analysis of Youth Holding an Arrow might consider how the painting’s blended colors make the subject’s skin appear smooth in texture.", "Texture analysis differs from historical analysis in that texture analysis examines how surfaces are visually represented in an artwork.", "An approach to art criticism, historical analysis considers the historical context in which a work was created.", "Las Meninas’s depiction of the artist with King Philip IV symbolizes art’s historical ties to power."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence presents historical analysis to an audience unfamiliar with the concept by defining it as an approach to art criticism that considers the historical context in which a work was created."),
      distractors: {
        A: L("Choice A is incorrect because it provides an example of texture analysis; it doesn’t present historical analysis to an audience unfamiliar with the concept."),
        B: L("Choice B is incorrect. The sentence explains a difference between texture analysis and historical analysis; it doesn’t present historical analysis to an audience unfamiliar with the concept."),
        D: L("Choice D is incorrect. It provides an example of historical analysis; it doesn’t present historical analysis to an audience unfamiliar with the concept.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-85c0c0f0", "85c0c0f0", 152)
    },
    {
      id: "rw-rs-1792fa73",
      sourceQuestionId: "1792fa73",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The tundra is a type of environment characterized by especially harsh winter conditions.</li><li style=\"margin:.25em 0\">Winter temperatures in the tundra average a frigid −30 degrees Fahrenheit.</li><li style=\"margin:.25em 0\">Animals that have adapted to these conditions can survive tundra winters.</li><li style=\"margin:.25em 0\">During the tundra’s short growing season, average temperatures can reach a relatively mild 54 degrees Fahrenheit.</li><li style=\"margin:.25em 0\">Around 1,700 different kinds of plants are able to grow in the tundra.</li></ul>",
      stem: "The student wants to emphasize how harsh the conditions can be in the tundra. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Winters in the tundra are especially harsh, with temperatures averaging a frigid −30 degrees Fahrenheit.", "Animals that have adapted to harsh winter conditions can survive tundra winters.", "There are around 1,700 different kinds of plants that can live in the tundra, where average temperatures can reach a mild 54 degrees Fahrenheit.", "Along with animals that have adapted to the tundra’s conditions, around 1,700 different kinds of plants can live in the tundra."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes how harsh the conditions in the tundra can be, noting that the winters are especially harsh and describing the average temperatures as “frigid. ”"),
      distractors: {
        B: L("Choice B is incorrect because the sentence explains that some animals can survive harsh tundra winters; it doesn’t emphasize how harsh the conditions can be."),
        C: L("Choice C is incorrect because the sentence specifies how many different kinds of plants can live in the tundra; it doesn’t emphasize how harsh the conditions in the tundra can be."),
        D: L("Choice D is incorrect because the sentence explains that both plants and animals can survive in the tundra; it doesn’t emphasize how harsh the conditions in the tundra can be.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-1792fa73", "1792fa73", 153)
    },
    {
      id: "rw-rs-be3363dd",
      sourceQuestionId: "be3363dd",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Suzanne K. Birner led a study analyzing rocks on the seafloor to better understand the history of Earth’s mantle.</li><li style=\"margin:.25em 0\">Rock samples were collected from two seafloor ridges.</li><li style=\"margin:.25em 0\">The researchers determined the samples’ period of formation (the Archean eon) and oxidation level (extremely low).</li><li style=\"margin:.25em 0\">High temperatures in the Archean likely caused the rocks’ low oxidation.</li><li style=\"margin:.25em 0\">Birner’s team suggests the oxidation of Earth’s mantle has remained stable over time, contrary to previous theories.</li><li style=\"margin:.25em 0\">The findings help explain the unique conditions that allowed life to develop on Earth.</li></ul>",
      stem: "The student wants to present the study’s research methods. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Birner led a study to better understand the history of Earth’s mantle and explain the conditions that allowed life to develop.", "To further analyze the origins of Earth’s unique conditions, researchers focused on rocks from the Archean eon, when Earth’s temperatures were extremely high.", "By studying these ancient rocks, the team aimed to challenge previous theories about changes in Earth’s mantle over time.", "Birner’s team analyzed the age and oxidation levels of rock samples collected from two seafloor ridges."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence presents the study’s research methods, explaining that Birner’s team analyzed the age and oxidation levels of rock samples collected from two seafloor ridges."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes the purpose of the study (to understand the history of Earth’s mantle and explain conditions for life); it doesn’t present the study’s research methods."),
        B: L("Choice B is incorrect. The sentence notes the study’s focus on rocks from the Archean eon and a characteristic of the eon; it doesn’t present the study’s research methods."),
        C: L("Choice C is incorrect. The sentence indicates the goal of the study (to challenge previous theories); it doesn’t present the study’s research methods.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-be3363dd", "be3363dd", 155)
    },
    {
      id: "rw-rs-58281fc4",
      sourceQuestionId: "58281fc4",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Soo Sunny Park is a Korean American artist who uses light as her primary medium of expression.</li><li style=\"margin:.25em 0\">She created her work Unwoven Light in 2013.</li><li style=\"margin:.25em 0\">Unwoven Light featured a chain-link fence fitted with iridescent plexiglass tiles.</li><li style=\"margin:.25em 0\">When light passed through the fence, colorful prisms formed.</li></ul>",
      stem: "The student wants to describe Unwoven Light to an audience unfamiliar with Soo Sunny Park. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Park’s 2013 installation Unwoven Light, which included a chain-link fence and iridescent tiles made from plexiglass, featured light as its primary medium of expression.", "Korean American light artist Soo Sunny Park created Unwoven Light in 2013.", "The chain-link fence in Soo Sunny Park’s Unwoven Light was fitted with tiles made from iridescent plexiglass.", "In Unwoven Light, a 2013 work by Korean American artist Soo Sunny Park, light formed colorful prisms as it passed through a fence Park had fitted with iridescent tiles."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence effectively describes Unwoven Light to an audience unfamiliar with Park, noting that Soo Sunny Park is a Korean American artist and that the 2013 work consists of colorful prisms formed by light passing through iridescent tiles."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes aspects of Unwoven Light but doesn’t mention who Park is; it thus doesn’t effectively describe the work to an audience unfamiliar with Park."),
        B: L("Choice B is incorrect. Although the sentence indicates when the work was created and who Park is, it lacks descriptive details and thus doesn’t effectively describe Unwoven Light."),
        C: L("Choice C is incorrect. The sentence mentions Park and describes an aspect of Unwoven Light—the chain-link fence—but doesn’t effectively describe the overall work to an audience unfamiliar with the artist.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-58281fc4", "58281fc4", 157)
    },
    {
      id: "rw-rs-17ec916d",
      sourceQuestionId: "17ec916d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Bharati Mukherjee was an Indian-born author of novels and short stories.</li><li style=\"margin:.25em 0\">She published the novel The Holder of the World in 1993.</li><li style=\"margin:.25em 0\">A central character in the novel is a woman living in twentieth-century United States.</li><li style=\"margin:.25em 0\">Another central character is a woman living in seventeenth-century India.</li></ul>",
      stem: "The student wants to introduce the novel The Holder of the World to an audience already familiar with Bharati Mukherjee. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Bharati Mukherjee’s settings include both twentieth-century United States and seventeenth-century India.", "In addition to her novel The Holder of the World, which was published in 1993, Indian-born author Bharati Mukherjee wrote other novels and short stories.", "Bharati Mukherjee’s novel The Holder of the World centers around two women, one living in twentieth-century United States and the other in seventeenth-century India.", "The Holder of the World was not the only novel written by Indian-born author Bharati Mukherjee."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence effectively introduces The Holder of the World to an audience already familiar with Mukherjee, explaining that the novel centers around two women and mentioning the author without providing any other identifying information."),
      distractors: {
        A: L("Choice A is incorrect. The sentence provides a detail about Mukherjee’s settings; it doesn’t introduce, or even mention, the novel."),
        B: L("Choice B is incorrect. The sentence provides introductory information about Mukherjee; it doesn’t effectively introduce her novel to an audience already familiar with the author."),
        D: L("Choice D is incorrect. The sentence provides introductory information about Mukherjee; it doesn’t effectively introduce her novel to an audience already familiar with the author.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-17ec916d", "17ec916d", 159)
    },
    {
      id: "rw-rs-459df2ba",
      sourceQuestionId: "459df2ba",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Modularity of mind is the notion that the mind is at least partly composed of innate neural structures (modules) that perform fast, necessary tasks.</li><li style=\"margin:.25em 0\">1983: cognitive scientist Jerry A. Fodor hypothesized that low-level cognitive systems (e.g., perception, language) are modular.</li><li style=\"margin:.25em 0\">In Fodorian modularity, high-level systems (e.g., reasoning) are not modular.</li><li style=\"margin:.25em 0\">2003: cognitive scientist Peter Carruthers proposed the massive modularity hypothesis (MMH).</li><li style=\"margin:.25em 0\">MMH expands modularity to include all cognitive systems.</li></ul>",
      stem: "The student wants to compare Fodor’s hypothesis with Carruthers’s. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In considering some but not all cognitive systems modular, Fodorian modularity is not as expansive in its definition of modularity as MMH is.", "Following Fodor’s 1983 hypothesis, Carruthers proposed that modularity of mind includes all cognitive systems.", "The hypotheses of Fodor and Carruthers differ in whether they consider low-level cognitive systems, such as perception and language, modular.", "In 2003, Carruthers proposed the massive modularity hypothesis, disagreeing with Fodor’s earlier hypothesis that the mind is composed of innate neural structures."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence compares Fodor’s hypothesis with Carruthers’s, noting that because Fodorian modularity considers some but not all cognitive systems modular, it is not as expansive in its definition of modularity as Carruthers’s MMH, which includes all cognitive systems."),
      distractors: {
        B: L("Choice B is incorrect. The sentence describes Carruthers’s hypothesis—that modularity of mind includes all cognitive systems—but indicates only that this hypothesis followed Fodor’s 1983 hypothesis rather than making a comparison between the hypotheses."),
        C: L("Choice C is incorrect. The sentence misrepresents a difference between Fodor’s and Carruthers’s hypotheses. According to the information in the notes, both Fodor and Carruthers consider low-level cognitive systems modular, and their difference lies in whether they also consider high-level systems modular."),
        D: L("Choice D is incorrect. The sentence misrepresents a difference between Fodor’s and Carruthers’s hypotheses. According to the information in the notes, both Fodor and Carruthers consider the mind to be at least partly composed of innate neural structures (modules). Their difference lies in whether they consider high-level systems modular.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-459df2ba", "459df2ba", 160)
    },
    {
      id: "rw-rs-d8aa8ba2",
      sourceQuestionId: "d8aa8ba2",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In astronomy, the mass of stars can be described in units called solar masses.</li><li style=\"margin:.25em 0\">One solar mass is roughly equal to the mass of the Sun.</li><li style=\"margin:.25em 0\">The mass of the star Proxima Centauri is 0.122 solar masses.</li><li style=\"margin:.25em 0\">The mass of the star Sirius A is 2.063 solar masses.</li></ul>",
      stem: "The student wants to emphasize the mass of Sirius A. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The mass of stars, like Proxima Centauri, can be described in units called solar masses.", "In astronomy, the mass of stars can be described in units called solar masses, and one solar mass is roughly equal to the mass of the Sun.", "The Sun is more massive than Proxima Centauri, which has a mass of 0.122 solar masses.", "With a mass of 2.063 solar masses, Sirius A is more massive than the Sun."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes the mass of Sirius A, noting that it has a mass of 2.063 solar masses and that it is larger than the Sun."),
      distractors: {
        A: L("Choice A is incorrect. The sentence makes a generalization about how the mass of stars can be measured; it doesn’t emphasize the mass of Sirius A."),
        B: L("Choice B is incorrect. The sentence introduces solar masses as a unit of measurement; it doesn’t emphasize the mass of Sirius A."),
        C: L("Choice C is incorrect. The sentence emphasizes the mass of Proxima Centauri, not the mass of Sirius A.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d8aa8ba2", "d8aa8ba2", 161)
    },
    {
      id: "rw-rs-24014c3f",
      sourceQuestionId: "24014c3f",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Severo Ochoa discovered the enzyme PNPase in 1955.</li><li style=\"margin:.25em 0\">PNPase is involved in both the creation and degradation of mRNA.</li><li style=\"margin:.25em 0\">Ochoa incorrectly hypothesized that PNPase provides the genetic blueprints for mRNA.</li><li style=\"margin:.25em 0\">The discovery of PNPase proved critical to deciphering the human genetic code.</li><li style=\"margin:.25em 0\">Deciphering the genetic code has led to a better understanding of how genetic variations affect human health.</li></ul>",
      stem: "The student wants to emphasize the significance of Ochoa’s discovery. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Ochoa’s 1955 discovery of PNPase proved critical to deciphering the human genetic code, leading to a better understanding of how genetic variations affect human health.", "Ochoa first discovered PNPase, an enzyme that he hypothesized contained the genetic blueprints for mRNA, in 1955.", "In 1955, Ochoa discovered the PNPase enzyme, which is involved in both the creation and degradation of mRNA.", "Though his discovery of PNPase was critical to deciphering the human genetic code, Ochoa incorrectly hypothesized that the enzyme was the source of mRNA’s genetic blueprints."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the significance of Ochoa’s discovery, noting that it proved critical to deciphering the human genetic code, which resulted in a better understanding of how genetic variations affect human health."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence explains what Ochoa discovered, it doesn’t emphasize the significance of the discovery."),
        C: L("Choice C is incorrect. While the sentence explains what Ochoa discovered, it doesn’t emphasize the significance of the discovery."),
        D: L("Choice D is incorrect. While the sentence mentions that Ochoa’s discovery was crucial, it emphasizes Ochoa’s incorrect hypothesis, not the significance of the discovery.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-24014c3f", "24014c3f", 162)
    },
    {
      id: "rw-rs-3067723b",
      sourceQuestionId: "3067723b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Seikan Tunnel is a rail tunnel in Japan.</li><li style=\"margin:.25em 0\">It connects the island of Honshu to the island of Hokkaido.</li><li style=\"margin:.25em 0\">It is roughly 33 miles long.</li><li style=\"margin:.25em 0\">The Channel Tunnel is a rail tunnel in Europe.</li><li style=\"margin:.25em 0\">It connects Folkestone, England, to Coquelles, France.</li><li style=\"margin:.25em 0\">It is about 31 miles long.</li></ul>",
      stem: "The student wants to compare the lengths of the two rail tunnels. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Some of the world’s rail tunnels, including one tunnel that extends from Folkestone, England, to Coquelles, France, are longer than 30 miles.", "The Seikan Tunnel is roughly 33 miles long, while the slightly shorter Channel Tunnel is about 31 miles long.", "The Seikan Tunnel, which is roughly 33 miles long, connects the Japanese islands of Honshu and Hokkaido.", "Both the Seikan Tunnel, which is located in Japan, and the Channel Tunnel, which is located in Europe, are examples of rail tunnels."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence compares the lengths of the two rail tunnels, noting that the Channel Tunnel (about 31 miles long) is slightly shorter than the Seikan Tunnel (roughly 33 miles long)."),
      distractors: {
        A: L("Choice A is incorrect. The sentence makes a generalization about the length of some rail tunnels; it doesn’t compare the lengths of the two rail tunnels."),
        C: L("Choice C is incorrect. The sentence describes a single rail tunnel; it doesn’t compare the lengths of the two rail tunnels."),
        D: L("Choice D is incorrect. While the sentence mentions the two rail tunnels, it doesn’t compare their lengths.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-3067723b", "3067723b", 163)
    },
    {
      id: "rw-rs-8e9e473d",
      sourceQuestionId: "8e9e473d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A 2024 study analyzed the facial expressions of wolves and domestic dogs.</li><li style=\"margin:.25em 0\">In the study, facial expressions were coded under 46 different facial actions.</li><li style=\"margin:.25em 0\">The “ears rotator” facial action is seen in wolves.</li><li style=\"margin:.25em 0\">Dog breeds with erect (wolf-like) ears can produce the “ears rotator” facial action.</li><li style=\"margin:.25em 0\">Dog breeds with flopped or semi-flopped (non-wolf-like) ears cannot produce the “ears rotator” facial action.</li></ul>",
      stem: "The student wants to compare dog breeds with wolf-like ears to dog breeds with non-wolf-like ears. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In a 2024 study, dog breeds with non-wolf-like ears were able to produce the same facial movements that wolves could.", "One difference between dog breeds with wolf-like ears and dog breeds without them is that wolf-like breeds cannot produce the “ears rotator” facial action.", "Non-wolf-like ears are flopped or semi-flopped, but wolf-like ears are different: they are erect and can produce the “ears rotator” facial action.", "Like wolves, dog breeds with erect ears can produce the “ears rotator” facial action, while those with flopped or semi-flopped ears cannot."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence compares dog breeds with wolf-like (erect) and non-wolf-like (flopped or semi-flopped) ears, noting that breeds with erect ears are able to produce the same “ears rotator” facial action as wolves, while breeds with flopped or semi-flopped ears cannot."),
      distractors: {
        A: L("Choice A is incorrect. The sentence compares dog breeds with non-wolf-like ears to wolves, not to other dog breeds. It also misrepresents information from the notes: breeds with non-wolf-like ears cannot produce the “ears rotator” facial action."),
        B: L("Choice B is incorrect. While the sentence appears to compare dog breeds with wolf-like and non-wolf-like ears, it misrepresents information from the notes: breeds with wolf-like ears can produce the “ears rotator” facial action."),
        C: L("Choice C is incorrect. While the sentence compares the physical characteristics of the two ear types, it doesn’t compare the dog breeds that have these ear types.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-8e9e473d", "8e9e473d", 164)
    },
    {
      id: "rw-rs-07456405",
      sourceQuestionId: "07456405",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Malapportionment is the over-or underrepresentation (relative to population size) of electoral districts in a governing body.</li><li style=\"margin:.25em 0\">It is a common feature of representative governments.</li><li style=\"margin:.25em 0\">There are 169 seats in Norway’s supreme legislature (the Storting).</li><li style=\"margin:.25em 0\">Seats are distributed by a formula that awards 1 point per resident and 1.8 points per unit of land.</li><li style=\"margin:.25em 0\">Less populated rural districts with large tracts of land receive a disproportionate number of seats compared to smaller but more populated urban districts.</li></ul>",
      stem: "The student wants to refute a claim that malapportionment in the Storting favors small urban districts. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Less populated rural districts are disproportionally underrepresented in the Storting, creating an unfair advantage for smaller but more populated urban districts.", "It’s untrue that malapportionment in the 169-seat Storting favors small urban districts; rather, the formula for distributing seats overrepresents more populated districts.", "A common feature of representative governments, malapportionment occurs when electoral districts are over-or underrepresented.", "Awarding more points per unit of land than points per resident, the formula for distributing Storting seats overrepresents less populated rural districts with large tracts of land."],
      answer: "D",
      explanation: L("Choice D is the best answer. By noting that the formula for distributing Storting seats overrepresents less populated rural districts, the sentence effectively refutes a claim that malapportionment in the Storting favors small urban districts."),
      distractors: {
        A: L("Choice A is incorrect because the sentence claims that malapportionment in the Storting favors small urban districts; it doesn’t refute such a claim. Moreover, it misrepresents information in the notes. According to the notes, the formula for distributing seats overrepresents less populated, not more populated, districts."),
        B: L("Choice B is incorrect. While the sentence appears to refute a claim that malapportionment in the Storting favors small urban districts, it misrepresents information in the notes. According to the notes, the formula for distributing seats overrepresents less populated, not more populated, districts."),
        C: L("Choice C is incorrect. The sentence explains what malapportionment is but doesn’t address malapportionment in the Storting specifically.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-07456405", "07456405", 165)
    },
    {
      id: "rw-rs-e2d97f10",
      sourceQuestionId: "e2d97f10",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Pterosaurs were flying reptiles that existed millions of years ago.</li><li style=\"margin:.25em 0\">In a 2021 study, Anusuya Chinsamy-Turan analyzed fragments of pterosaur jawbones located in the Sahara Desert.</li><li style=\"margin:.25em 0\">She was initially unsure if the bones belonged to juvenile or adult pterosaurs.</li><li style=\"margin:.25em 0\">She used advanced microscope techniques to determine that the bones had few growth lines relative to the bones of fully grown pterosaurs.</li><li style=\"margin:.25em 0\">She concluded that the bones belonged to juveniles.</li></ul>",
      stem: "The student wants to present the study and its findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In 2021, Chinsamy-Turan studied pterosaur jawbones and was initially unsure if the bones belonged to juveniles or adults.", "Pterosaur jawbones located in the Sahara Desert were the focus of a 2021 study.", "In a 2021 study, Chinsamy-Turan used advanced microscope techniques to analyze the jawbones of pterosaurs, flying reptiles that existed millions of years ago.", "In a 2021 study, Chinsamy-Turan determined that pterosaur jawbones located in the Sahara Desert had few growth lines relative to the bones of fully grown pterosaurs and thus belonged to juveniles."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence presents both the study and its findings, noting the study’s date and the researcher’s name as well as describing what the researcher determined about the jawbones and how she determined it."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence describes the study and the researcher’s initial assessment, it doesn’t present the study’s findings."),
        B: L("Choice B is incorrect. While the sentence describes the study and its focus, it doesn’t present the study’s findings or the name of the researcher who conducted it."),
        C: L("Choice C is incorrect. While the sentence mentions the study’s methodology and provides information about pterosaurs, it doesn’t present the study’s findings.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e2d97f10", "e2d97f10", 166)
    },
    {
      id: "rw-rs-bce57278",
      sourceQuestionId: "bce57278",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Some US reformers sought to improve society in the 1800s by building utopias.</li><li style=\"margin:.25em 0\">A utopia is a community intended to represent a perfect society based on a specific set of principles.</li><li style=\"margin:.25em 0\">One such community was Brook Farm near Boston, Massachusetts.</li><li style=\"margin:.25em 0\">It was founded in 1841 by writer George Ripley.</li><li style=\"margin:.25em 0\">Ripley wrote in a letter that his goal for Brook Farm was “to guarantee the highest mental freedom, by providing all with labor, adapted to their tastes and talents, and securing to them the fruits of their industry.”</li></ul>",
      stem: "The student wants to explain the goal of Brook Farm using a quotation from George Ripley. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In a letter, writer George Ripley explained his goal to “guarantee the highest mental freedom. ”", "Utopias, such as Brook Farm, founded by George Ripley in 1841, were based on a specific set of principles intended to create a perfect society.", "Founded by George Ripley near Boston, Massachusetts, Brook Farm was part of a trend in the 1800s, when reformers in the United States built utopias.", "Established in 1841, Brook Farm was a utopian community created to “guarantee the highest mental freedom, by providing all with labor... [and] the fruits of their industry, ” according to founder George Ripley."],
      answer: "D",
      explanation: L("Choice D is the best answer. This choice explains the goal of Brook Farm—to provide mental freedom to all by engaging individuals in labor suited to their interests—using a quotation from George Ripley."),
      distractors: {
        A: L("Choice A is incorrect. This choice only mentions part of Ripley’s goal, and it doesn’t mention Brook Farm at all."),
        B: L("Choice B is incorrect. This choice defines what a utopia is but doesn’t use Ripley’s words to describe his vision for Brook Farm."),
        C: L("Choice C is incorrect. This choice provides some background information about Brook Farm, but it doesn’t explain its goals or include Ripley’s words.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-bce57278", "bce57278", 168)
    },
    {
      id: "rw-rs-2b89bfe5",
      sourceQuestionId: "2b89bfe5",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1999, astronomer Todd Henry studied the differences in surface temperature between the Sun and nearby stars.</li><li style=\"margin:.25em 0\">His team mapped all stars within 10 parsecs (approximately 200 trillion miles) of the Sun.</li><li style=\"margin:.25em 0\">The surface temperature of the Sun is around 9,800°F , which classifies it as a G star.</li><li style=\"margin:.25em 0\">327 of the 357 stars in the study were classified as K or M stars, with surface temperatures under 8,900°F (cooler than the Sun).</li><li style=\"margin:.25em 0\">11 of the 357 stars in the study were classified as A or F stars, with surface temperatures greater than 10,300°F (hotter than the Sun).</li></ul>",
      stem: "The student wants to emphasize how hot the Sun is relative to nearby stars. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["At around 9,800°F , which classifies it as a G star, the Sun is hotter than most but not all of the stars within 10 parsecs of it.", "Astronomer Todd Henry determined that the Sun, at around 9,800°F , is a G star, and several other stars within a 10-parsec range are A or F stars.", "Of the 357 stars within ten parsecs of the Sun, 327 are classified as K or M stars, with surface temperatures under 8,900°F .", "While most of the stars within 10 parsecs of the Sun are classified as K, M, A, or F stars, the Sun is classified as a G star due to its surface temperature of 9,800°F ."],
      answer: "A",
      explanation: L("Choice A is the best answer. Noting that the Sun (9,800°F) is hotter than most stars within 10 parsecs of it, the sentence emphasizes how hot the Sun is relative to nearby stars."),
      distractors: {
        B: L("Choice B is incorrect. The sentence explains that astronomer Todd Henry determined the classifications for the Sun and several other stars nearby; it doesn’t emphasize how hot the Sun is relative to nearby stars."),
        C: L("Choice C is incorrect. The sentence explains that the majority of stars near the Sun are classified as K or M stars; it doesn’t indicate the Sun’s temperature or emphasize how hot it is relative to nearby stars."),
        D: L("Choice D is incorrect. While the sentence indicates that the Sun is classified differently than most nearby stars due to its surface temperature, it doesn’t emphasize how hot the Sun is relative to nearby stars.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-2b89bfe5", "2b89bfe5", 169)
    },
    {
      id: "rw-rs-7572131d",
      sourceQuestionId: "7572131d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Elizabeth Catlett’s sculpture Recognition (1970) shows two African American figures with rounded, indistinct features.</li><li style=\"margin:.25em 0\">The figures reach out to each other in a pose that symbolizes a close, supportive relationship.</li><li style=\"margin:.25em 0\">Her sculpture Students Aspire (1978) shows two African American figures with sharply defined features.</li><li style=\"margin:.25em 0\">The figures hold an equal sign above their heads with one hand and embrace each other with the other hand.</li><li style=\"margin:.25em 0\">This pose symbolizes their support for each other in the pursuit of equality.</li></ul>",
      stem: "The student wants to emphasize a similarity between the two sculptures. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Catlett’s Students Aspire depicts two figures supporting each other in the pursuit of equality.", "Recognition and Students Aspire both show African American figures in poses that symbolize supportive relationships.", "Catlett completed Recognition in 1970 and Students Aspire in 1978.", "The figures in Recognition have features that are rounded and indistinct, while the figures in Students Aspire have sharply defined features."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes a similarity between the sculptures Recognition and Students Aspire, noting that both sculptures show African American figures in poses that symbolize supportive relationships."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes one of the sculptures; it doesn’t emphasize a similarity between the two sculptures."),
        C: L("Choice C is incorrect. The sentence specifies the different years the sculptures were completed in; it doesn’t emphasize a similarity between the two sculptures."),
        D: L("Choice D is incorrect. The sentence emphasizes a difference between the two sculptures, noting that the figures in the sculptures have different feature definition; it doesn’t emphasize a similarity between the two sculptures.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7572131d", "7572131d", 170)
    },
    {
      id: "rw-rs-54c1b2dd",
      sourceQuestionId: "54c1b2dd",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1851, German American artist Emanuel Leutze painted Washington Crossing the Delaware.</li><li style=\"margin:.25em 0\">His huge painting (149 × 255 inches) depicts the first US president crossing a river with soldiers in the Revolutionary War.</li><li style=\"margin:.25em 0\">In 2019, Cree artist Kent Monkman painted mistikôsiwak (Wooden Boat People): Resurgence of the People.</li><li style=\"margin:.25em 0\">Monkman’s huge painting (132 × 264 inches) was inspired by Leutze’s.</li><li style=\"margin:.25em 0\">It portrays Indigenous people in a boat rescuing refugees.</li></ul>",
      stem: "The student wants to emphasize a similarity between the two paintings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Monkman, a Cree artist, finished his painting in 2019; Leutze, a German American artist, completed his in 1851.", "Although Monkman’s painting was inspired by Leutze’s, the people and actions the two paintings portray are very different.", "Leutze’s and Monkman’s paintings are both huge, measuring 149 × 255 inches and 132 × 264 inches, respectively.", "Leutze’s painting depicts Revolutionary War soldiers, while Monkman’s depicts Indigenous people and refugees."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes a similarity between the two paintings, noting that Leutze’s painting (which measures 149 × 255 inches) and Monkman’s painting (which measures 132 × 264 inches) are both very large."),
      distractors: {
        A: L("Choice A is incorrect. The sentence mentions that Monkman’s painting was completed in 2019 and Leutze’s was completed in 1851; it doesn’t emphasize a similarity between the two paintings."),
        B: L("Choice B is incorrect. While the sentence acknowledges that one painting was inspired by the other, it emphasizes differences between the two paintings; it doesn’t emphasize a similarity between them."),
        D: L("Choice D is incorrect. The sentence mentions a difference between the two paintings; it doesn’t emphasize a similarity between them.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-54c1b2dd", "54c1b2dd", 172)
    },
    {
      id: "rw-rs-5fa51c86",
      sourceQuestionId: "5fa51c86",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Ulaanbaatar is the capital of Mongolia.</li><li style=\"margin:.25em 0\">The city’s population is 907,802.</li><li style=\"margin:.25em 0\">Ulaanbaatar contains 31.98 percent of Mongolia’s population.</li><li style=\"margin:.25em 0\">Hanoi is the capital of Vietnam.</li><li style=\"margin:.25em 0\">The city’s population is 7,781,631.</li><li style=\"margin:.25em 0\">Hanoi contains 8.14 percent of Vietnam’s population.</li></ul>",
      stem: "The student wants to emphasize the relative sizes of the two capitals’ populations. Which choice most effectively uses information from the given sentences to emphasize the relative sizes of the two capitals’ populations?",
      options: ["Mongolia’s capital is Ulaanbaatar, which has 907,802 people, and Vietnam’s capital is Hanoi, which has 7,781,631 people.", "Comparing Vietnam and Mongolia, 7,781,631 is 8.14 percent of Vietnam’s population, and 907,802 is 31.98 percent of Mongolia’s.", "Even though Hanoi (population 7,781,631) is larger than Ulaanbaatar (population 907,802), Ulaanbaatar accounts for more of its country’s population.", "The populations of the capitals of Mongolia and Vietnam are 907,802 (Ulaanbaatar) and 7,781,631 (Hanoi), respectively."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes the relative sizes of the capital cities’ populations, noting that even though Hanoi has more people overall, Ulaanbaatar accounts for a larger percentage of the people in its country."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence indicates the population size of each capital, it fails to emphasize their sizes relative to each other or to their countries’ overall population sizes."),
        B: L("Choice B is incorrect. The sentence emphasizes the population sizes of the two countries; it fails to mention the capitals."),
        D: L("Choice D is incorrect. While the sentence indicates the population size of each capital, it fails to emphasize their sizes relative to each other or to their countries’ overall population sizes.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5fa51c86", "5fa51c86", 173)
    },
    {
      id: "rw-rs-4e063114",
      sourceQuestionId: "4e063114",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Georeferencing is the process of assigning geographic coordinates to an image.</li><li style=\"margin:.25em 0\">This process enables mapping software to place the image in its real-world location.</li><li style=\"margin:.25em 0\">A 2017 project by Tania López Marrero and colleagues georeferenced a set of aerial photographs of Puerto Rico’s coastline taken in 1930.</li><li style=\"margin:.25em 0\">These photographs are the earliest known aerial photographs of Puerto Rico.</li><li style=\"margin:.25em 0\">López Marrero’s project provided data that can help researchers analyze changes in Puerto Rico’s coastline.</li></ul>",
      stem: "The student wants to define the term “georeferencing. ” Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A 2017 project by Tania López Marrero and colleagues assigned geographic coordinates to photographs of Puerto Rico’s coastline and also used georeferencing.", "Tania López Marrero and colleagues used georeferencing in their analysis of the earliest known aerial photographs of Puerto Rico.", "Georeferenced aerial photographs from 1930 can help researchers analyze changes in Puerto Rico’s coastline.", "Georeferencing is the process of assigning geographic coordinates to an image so that mapping software can place it in its real-world location."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence defines the term \"georeferencing, \" stating that it is the process of assigning geographic coordinates to an image so that mapping software can place the image in its real-world location."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes López Marrero’s team’s 2017 project; it doesn’t provide a definition of the term \"georeferencing. \" Moreover, it misrepresents the information in the notes by characterizing the team’s assignment of geographic coordinates to photographs as a process distinct from georeferencing."),
        B: L("Choice B is incorrect. The sentence states that López Marrero’s team used georeferencing, but it doesn’t provide a definition of the term."),
        C: L("Choice C is incorrect. The sentence explains why a particular group of georeferenced aerial photographs is potentially useful for researchers; it doesn’t provide a definition of the term \"georeferencing. \"")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-4e063114", "4e063114", 174)
    },
    {
      id: "rw-rs-5d3177aa",
      sourceQuestionId: "5d3177aa",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In the early 1960s, the US had a strict national-origins quota system for immigrants.</li><li style=\"margin:.25em 0\">The number of new immigrants allowed from a country each year was based on how many people from that country lived in the US in 1890.</li><li style=\"margin:.25em 0\">This system favored immigrants from northern Europe.</li><li style=\"margin:.25em 0\">Almost 70% of slots were reserved for immigrants from Great Britain, Ireland, and Germany.</li><li style=\"margin:.25em 0\">The 1965 Hart-Celler Act abolished the national-origins quota system.</li></ul>",
      stem: "The student wants to present the significance of the Hart-Celler Act to an audience unfamiliar with the history of US immigration. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Almost 70% of slots were reserved for immigrants from Great Britain, Ireland, and Germany at the time the Hart-Celler Act was proposed.", "Prior to the Hart-Celler Act, new immigration quotas were based on how many people from each country lived in the US in 1890.", "The quota system in place in the early 1960s was abolished by the 1965 Hart-Celler Act.", "The 1965 Hart-Celler Act abolished the national-origins quota system, which favored immigrants from northern Europe."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence presents the significance of the Hart-Celler Act to an audience unfamiliar with the history of US immigration, noting that the 1965 act abolished the national-origins quota system and explaining why that mattered, historically: because the old quota system had favored immigrants from northern Europe."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes an aspect of immigration policy at the time the Hart-Celler Act was proposed; it doesn’t present the significance of the Hart-Celler Act to an audience unfamiliar with the history of US immigration."),
        B: L("Choice B is incorrect. The sentence describes an aspect of immigration policy before the Hart-Celler Act; it doesn’t describe or present the significance of the act to an audience unfamiliar with the history of US immigration."),
        C: L("Choice C is incorrect. While the sentence indicates that the Hart-Celler Act abolished the old quota system, it doesn’t explain the act or the quota system to an audience unfamiliar with the history of US immigration.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5d3177aa", "5d3177aa", 176)
    },
    {
      id: "rw-rs-7c9d0e38",
      sourceQuestionId: "7c9d0e38",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Roughly 96% of Australia’s estimated 200,000 animal species are invertebrates.</li><li style=\"margin:.25em 0\">Invertebrates of the order Hymenoptera, which consists of sawflies, wasps, bees, and ants, are estimated to total 14,800 species in Australia.</li><li style=\"margin:.25em 0\">Invertebrates of the order Coleoptera, which consists of beetles and weevils, are estimated to total 28,200 species in Australia.</li><li style=\"margin:.25em 0\">Some of these invertebrates’ populations are threatened by invasive bird and fish species.</li></ul>",
      stem: "The student wants to emphasize the different orders in which Australia’s invertebrate animals are classified. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In Australia, 28,200 species are estimated to be beetles and weevils, both classified as invertebrates of the order Coleoptera.", "Among Australia’s many invertebrates, sawflies, wasps, bees, and ants belong to the order Hymenoptera, while beetles and weevils belong to the order Coleoptera.", "Many sawflies, wasps, bees, and ants of the order Hymenoptera are threatened by some of Australia’s invasive bird and fish species.", "The order Hymenoptera is estimated to make up 14,800 of Australia’s 200,000 animal species."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes the different orders that Australia’s invertebrates belong to, specifying that sawflies, wasps, bees, and ants belong to the order Hymenoptera, whereas beetles and weevils belong to the order Coleoptera."),
      distractors: {
        A: L("Choice A is incorrect. The sentence only mentions one order, Coleoptera; it doesn’t emphasize the different orders that Australia’s invertebrates belong to."),
        C: L("Choice C is incorrect. The sentence only mentions one order, Hymenoptera; it doesn’t emphasize the different orders that Australia’s invertebrates belong to."),
        D: L("Choice D is incorrect. The sentence only mentions one order, Hymenoptera; it doesn’t emphasize the different orders that Australia’s invertebrates belong to.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7c9d0e38", "7c9d0e38", 177)
    },
    {
      id: "rw-rs-ff3865b3",
      sourceQuestionId: "ff3865b3",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A wok is a cooking pan that originated in China during the Han dynasty (206 BCE–220 CE).</li><li style=\"margin:.25em 0\">The wok’s round, wide base helps to cook food evenly.</li><li style=\"margin:.25em 0\">The wok’s high, angled sides help to contain oil splatters.</li><li style=\"margin:.25em 0\">Grace Young is a cook and culinary historian.</li><li style=\"margin:.25em 0\">Her book The Breath of a Wok (2004) traces the history of the wok.</li></ul>",
      stem: "The student wants to describe the wok’s shape. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Grace Young’s 2004 book, The Breath of a Wok, traces the history of the cooking pan.", "Able to cook food evenly and contain oil splatters, the wok is the subject of Grace Young’s 2004 book.", "A wok is a cooking pan with a round, wide base and high, angled sides.", "The design of a wok, a type of cooking pan that originated in China during the Han dynasty, helps the pan cook food evenly and contain oil splatters."],
      answer: "C",
      explanation: L("Choice C is the best answer. It summarizes the information that describes the wok’s shape from the second and third bullet points."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t describe the shape of a wok."),
        B: L("Choice B is incorrect. This choice doesn’t describe the shape of a wok, just some of its features."),
        D: L("Choice D is incorrect. This choice doesn’t describe the shape of a wok, only some of its benefits or functions.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ff3865b3", "ff3865b3", 178)
    },
    {
      id: "rw-rs-35507eba",
      sourceQuestionId: "35507eba",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Pointillism is a painting technique in which small, distinct dots of color are applied in patterns to form an image.</li><li style=\"margin:.25em 0\">Betty Acquah is an artist from Ghana who uses pointillism in her work.</li><li style=\"margin:.25em 0\">“By extending dabs of color in the subject matter into the background and vice-versa, an illusion of movement is created,” she says about pointillism.</li><li style=\"margin:.25em 0\">Her work often portrays Ghanaian women, whom she sees as the “unsung heroines of the Ghanaian Republic.”</li><li style=\"margin:.25em 0\">Her pointillist painting “Exquisite” (2016) features five dancing women twirling their skirts.</li></ul>",
      stem: "The student wants to provide a quotation from Acquah that explains why she used pointillism in “Exquisite. ” Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In painting “Exquisite, ” Acquah applied pointillism to create what she called an “illusion of movement” within the painting’s five dancing women and their twirling skirts.", "Pointillism, the technique used in Acquah’s “Exquisite, ” involves the application of small, distinct dots of color.", "In “Exquisite, ” Acquah uses a technique that she says involves “extending dabs of color in the subject matter into the background and vice-versa. ”", "“Exquisite” portrays Acquah’s fellow Ghanaian women as she sees them: the “unsung heroes of the Ghanaian Republic. ”"],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence provides Acquah’s quotation about pointillism’s \"illusion of movement\" to explain that she used pointillism to create the illusion of movement in her painting of women dancing."),
      distractors: {
        B: L("Choice B is incorrect. The sentence explains pointillism and indicates that Acquah used the technique in her painting, but it doesn’t provide a quotation or explain why."),
        C: L("Choice C is incorrect. While the sentence provides a quotation from Acquah about pointillism, the quotation merely describes a specific aspect of the technique; the sentence doesn’t explain why Acquah used pointillism in her painting."),
        D: L("Choice D is incorrect. While the sentence provides a quotation from Acquah, the quotation illustrates Acquah’s views on Ghanaian women; the sentence doesn’t explain why Acquah used pointillism in her painting.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-35507eba", "35507eba", 179)
    },
    {
      id: "rw-rs-f1631638",
      sourceQuestionId: "f1631638",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Gaspar Enriquez is an artist.</li><li style=\"margin:.25em 0\">He specializes in portraits of Mexican Americans.</li><li style=\"margin:.25em 0\">A portrait is an artistic representation of a person.</li><li style=\"margin:.25em 0\">Enriquez completed a painting of the sculptor Luis Jimenez in 2003.</li><li style=\"margin:.25em 0\">He completed a drawing of the writer Rudolfo Anaya in 2016.</li></ul>",
      stem: "The student wants to emphasize a difference between the two portraits. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The portraits, or artistic representations, of Luis Jimenez and Rudolfo Anaya were both completed by Enriquez in the early 2000s.", "Enriquez has completed portraits of numerous Mexican Americans, including sculptor Luis Jimenez and writer Rudolfo Anaya.", "While both are by Enriquez, the 2003 portrait of Luis Jimenez is a painting, and the 2016 portrait of Rudolfo Anaya is a drawing.", "Luis Jimenez was a Mexican American sculptor, and Rudolfo Anaya was a Mexican American writer."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes a difference between the portraits, noting that one is a painting and the other is a drawing."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes a similarity between the two portraits rather than a difference."),
        B: L("Choice B is incorrect. The sentence makes a generalization about Enriquez’s portraits; it doesn’t emphasize a difference between the portraits of Jimenez and Anaya."),
        D: L("Choice D is incorrect. While the sentence notes a difference between Jimenez and Anaya, it doesn’t emphasize a difference between, or even mention, their portraits.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-f1631638", "f1631638", 181)
    },
    {
      id: "rw-rs-fdd9a360",
      sourceQuestionId: "fdd9a360",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The popular wood-wide web theory posits that trees can communicate and exchange resources with one another via common mycorrhizal networks (CMNs) of fungi.</li><li style=\"margin:.25em 0\">Ecologist Dr. Suzanne Simard first suggested this theory in 1997.</li><li style=\"margin:.25em 0\">She described trees as “super-cooperators.”</li><li style=\"margin:.25em 0\">In the 2022 study “The Decay of the Wood-Wide Web?,” mycologist Dr. Justine Karst and colleagues evaluated dozens of CMN studies.</li><li style=\"margin:.25em 0\">They write that CMNs “have captured the interest of broad audiences. We are concerned, however, that recent claims about CMNs in forests are disconnected from evidence.”</li></ul>",
      stem: "The student wants to use a quotation to emphasize a potential problem with the wood-wide web theory. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Describing trees as “super-cooperators, ” Simard first suggested that trees can exchange resources with one another in 1997.", "In “The Decay of the Wood-Wide Web?, ” Karst and colleagues note that common mycorrhizal networks “have captured the interest of broad audiences. ”", "After evaluating dozens of CMN studies, Karst and colleagues expressed concern that recent claims about common mycorrhizal networks are “disconnected from evidence. ”", "Despite the concerns expressed in the 2022 study “The Decay of the Wood-Wide Web?, ” the wood-wide web theory remains popular."],
      answer: "C",
      explanation: L("Choice C is the best answer. This choice uses a quotation to convey the authors’ criticism and challenge to the wood-wide web theory due to an absence of evidence."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t emphasize a potential problem with the wood-wide web theory. It uses a quotation to introduce the theory and its originator. It doesn’t mention any criticism or challenge to the theory."),
        B: L("Choice B is incorrect. This choice uses a quotation, but it doesn’t emphasize a potential problem with the wood-wide web theory. It uses a quotation to describe the appeal and interest of the theory, but it doesn’t indicate why the authors are concerned or what evidence they have."),
        D: L("Choice D is incorrect. This choice doesn’t use a quotation at all. It paraphrases the main idea of the 2022 study, but it doesn’t include any specific words or phrases from the notes. It also doesn’t emphasize a potential problem with the theory, but rather its popularity.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-fdd9a360", "fdd9a360", 183)
    },
    {
      id: "rw-rs-1b94a80a",
      sourceQuestionId: "1b94a80a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Wool is a natural—and economically important—fiber that is obtained from animals like sheep.</li><li style=\"margin:.25em 0\">Australia is a leading producer of wool.</li><li style=\"margin:.25em 0\">The thickness of wool fibers varies across sheep breeds.</li><li style=\"margin:.25em 0\">Merino sheep produce fine wool that is used for apparel.</li><li style=\"margin:.25em 0\">Rambouillet sheep produce fine wool that is used for apparel.</li><li style=\"margin:.25em 0\">Romney sheep produce thick wool that is used for rugs and blankets.</li></ul>",
      stem: "The student wants to emphasize how Romney wool differs from Merino and Rambouillet wool. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Romney wool is just one of the many kinds of wools, each originating from a different breed of sheep.", "Sheep wool varies from breed to breed, so Romney wool will be different than other kinds of wool.", "The fine wool produced by Merino and Rambouillet sheep is used for apparel, whereas the thicker wool of Romney sheep is used in rugs and blankets.", "Wool is an economically important fiber—especially in Australia—that can be used to make apparel or even rugs and blankets."],
      answer: "C",
      explanation: L("Choice C is the best answer. This choice most effectively emphasizes how Romney wool differs from Merino and Rambouillet wool. It describes the difference in thickness and the difference in what they’re used for."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t emphasize how Romney wool differs from Merino and Rambouillet wool. It doesn’t mention Merino or Rambouillet wool at all."),
        B: L("Choice B is incorrect. This choice doesn’t emphasize how Romney wool differs from Merino and Rambouillet wool. It doesn’t mention Merino or Rambouillet wool at all."),
        D: L("Choice D is incorrect. This choice doesn’t emphasize how Romney wool differs from Merino and Rambouillet wool. It doesn’t mention Romney, Merino or Rambouillet wool at all.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-1b94a80a", "1b94a80a", 184)
    },
    {
      id: "rw-rs-88308a39",
      sourceQuestionId: "88308a39",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Shaun Tan is an Australian author.</li><li style=\"margin:.25em 0\">In 2008, he published Tales from Outer Suburbia, a book of fifteen short stories.</li><li style=\"margin:.25em 0\">The stories describe surreal events occurring in otherwise ordinary suburban neighborhoods.</li><li style=\"margin:.25em 0\">In 2018, he published Tales from the Inner City, a book of twenty-five short stories.</li><li style=\"margin:.25em 0\">The stories describe surreal events occurring in otherwise ordinary urban settings.</li></ul>",
      stem: "The student wants to emphasize a similarity between the two books by Shaun Tan. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Shaun Tan’s book Tales from Outer Suburbia, which describes surreal events occurring in otherwise ordinary places, contains fewer short stories than Tales from the Inner City does.", "Tales from Outer Suburbia was published in 2008, and Tales from the Inner City was published in 2018.", "Unlike Tales from the Inner City, Shaun Tan’s book Tales from Outer Suburbia is set in suburban neighborhoods.", "Shaun Tan’s books Tales from Outer Suburbia and Tales from the Inner City both describe surreal events occurring in otherwise ordinary places."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence uses “both” to emphasize a thematic similarity between Tan’s two books, noting that both Tales from Outer Suburbia and Tales from the Inner City describe surreal events occurring in otherwise ordinary places."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes a difference (one contains fewer stories than the other), not a similarity, between the two books."),
        B: L("Choice B is incorrect. The sentence indicates that Tan’s books were published ten years apart; it doesn’t emphasize a similarity between the two books."),
        C: L("Choice C is incorrect. The sentence uses “unlike” to emphasize a difference between Tales from Outer Suburbia and Tales from the Inner City; it doesn’t emphasize a similarity between the two books.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-88308a39", "88308a39", 185)
    },
    {
      id: "rw-rs-a0da8114",
      sourceQuestionId: "a0da8114",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Tibetan mastiffs are large dogs native to the Himalayas.</li><li style=\"margin:.25em 0\">A mutation in their EPAS1 gene prevents excess hemoglobin production.</li><li style=\"margin:.25em 0\">A mutation in their HBB gene boosts hemoglobin’s oxygen-carrying ability.</li><li style=\"margin:.25em 0\">These mutations enable the dogs to withstand hypoxic (low-oxygen) conditions at high altitudes.</li><li style=\"margin:.25em 0\">In a 2016 study, Zhen Wang and colleagues noted that Tibetan wolves’ DNA has the same EPAS1 and HBB mutations.</li><li style=\"margin:.25em 0\">Wang and colleagues determined that the dogs first acquired these mutations by interbreeding with Tibetan wolves around 24,000 years ago.</li></ul>",
      stem: "The student wants to present the conclusion of Zhen Wang and colleagues’ 2016 study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Like Tibetan mastiffs, Tibetan wolves can withstand hypoxic conditions at high altitudes.", "Both Tibetan mastiffs and Tibetan wolves have mutations in their EPAS1 and HBB genes, which prevent excess hemoglobin production and boost hemoglobin’s oxygen-carrying ability, respectively.", "In addition to preventing excess hemoglobin production, a mutation in Tibetan mastiffs’ HBB gene boosts hemoglobin’s oxygen-carrying ability.", "By interbreeding with Tibetan wolves around 24,000 years ago, Tibetan mastiffs acquired the genetic mutations that enable them to withstand hypoxic conditions."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence presents the conclusion of Zhen Wang and colleagues’ 2016 study: Tibetan mastiffs are able to withstand hypoxic conditions due to their interbreeding with Tibetan wolves 24,000 years ago (which allowed the mastiffs to acquire the necessary genetic mutations)."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes a similarity between Tibetan mastiffs and Tibetan wolves; it doesn’t present the conclusions of the 2016 study."),
        B: L("Choice B is incorrect. The sentence emphasizes a similarity between the genes of Tibetan mastiffs and Tibetan wolves; it doesn’t present the conclusions of the 2016 study."),
        C: L("Choice C is incorrect. The sentence misrepresents information from the notes by indicating that a mutation in mastiffs’ HBB gene prevents excess hemoglobin production; moreover, it doesn’t present the conclusions of the 2016 study.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-a0da8114", "a0da8114", 186)
    },
    {
      id: "rw-rs-0fab0c90",
      sourceQuestionId: "0fab0c90",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Gullah are a group of African Americans who have lived in parts of the southeastern United States since the 18th century.</li><li style=\"margin:.25em 0\">Gullah culture is influenced by West African and Central African traditions.</li><li style=\"margin:.25em 0\">Louise Miller Cohen is a Gullah historian, storyteller, and preservationist.</li><li style=\"margin:.25em 0\">She founded the Gullah Museum of Hilton Head Island, South Carolina, in 2003.</li><li style=\"margin:.25em 0\">Vermelle Rodrigues is a Gullah historian, artist, and preservationist.</li><li style=\"margin:.25em 0\">She founded the Gullah Museum of Georgetown, South Carolina, in 2003.</li></ul>",
      stem: "The student wants to emphasize the duration and purpose of Cohen’s and Rodrigues’s work. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["At the Gullah Museums in Hilton Head Island and Georgetown, South Carolina, visitors can learn more about the Gullah people who have lived in the region for centuries.", "Louise Miller Cohen and Vermelle Rodrigues have worked to preserve the culture of the Gullah people, who have lived in the United States since the 18th century.", "Since 2003, Louise Miller Cohen and Vermelle Rodrigues have worked to preserve Gullah culture through their museums.", "Influenced by the traditions of West and Central Africa, Gullah culture developed in parts of the southeastern United States in the 18th century."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes both the duration (the length of time) and the purpose of Cohen’s and Rodrigues’s work by noting that the women have been working since 2003 to preserve Gullah culture."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence emphasizes what visitors to Cohen’s and Rodrigues’s museums can learn, it doesn’t mention the duration or purpose of the women’s work."),
        B: L("Choice B is incorrect. While the sentence emphasizes the purpose of Cohen’s and Rodrigues’s work, it doesn’t mention the duration of that work (the length of time the women have been working to preserve Gullah culture)."),
        D: L("Choice D is incorrect. While the sentence emphasizes where and when Gullah culture developed, it doesn’t mention the duration or purpose of Cohen’s and Rodrigues’s work.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-0fab0c90", "0fab0c90", 187)
    },
    {
      id: "rw-rs-56cad44a",
      sourceQuestionId: "56cad44a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Mexican tetras are a fish species with two distinct populations.</li><li style=\"margin:.25em 0\">Surface-dwelling tetras live on the surface and are able to see.</li><li style=\"margin:.25em 0\">Cave-dwelling tetras live in total darkness and have lost the ability to see.</li><li style=\"margin:.25em 0\">Cave-dwelling tetras have asymmetrical skulls with more sensory receptors on one side than the other.</li><li style=\"margin:.25em 0\">These receptors help cave-dwelling tetras navigate in darkness.</li></ul>",
      stem: "The student wants to emphasize a difference between surface-dwelling and cave-dwelling tetras. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Surface-dwelling and cave-dwelling tetras may belong to the same species, but they are quite different.", "Cave-dwelling tetras can no longer see but use sensory receptors on their skulls to navigate.", "Mexican tetras are a fish species with two distinct populations: surface-dwelling tetras and cave-dwelling tetras.", "Surface-dwelling tetras can see, whereas cave-dwelling tetras cannot."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes a difference between surface-dwelling and cave-dwelling tetras, noting that while surface-dwelling tetras can see, cave-dwelling tetras can’t."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence notes that surface-dwelling and cave-dwelling tetras are different, it doesn’t emphasize any difference between the two populations of tetras."),
        B: L("Choice B is incorrect because the sentence explains that cave-dwelling tetras use sensory receptors on their skulls to navigate; it doesn’t emphasize a difference between surface-dwelling and cave-dwelling tetras."),
        C: L("Choice C is incorrect. While the sentence notes that there are two different populations of Mexican tetras, it doesn’t emphasize any difference between the two populations.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-56cad44a", "56cad44a", 189)
    },
    {
      id: "rw-rs-d2b52c50",
      sourceQuestionId: "d2b52c50",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">On January 3, 1959, Alaska became the 49th state to join the US.</li><li style=\"margin:.25em 0\">On August 21, 1959, Hawaii became the 50th state to join the US.</li><li style=\"margin:.25em 0\">A new 50-star US flag was unveiled the same day.</li></ul>",
      stem: "The student wants to emphasize the order in which Alaska and Hawaii became US states. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Alaska, the 49th US state, became a state several months before Hawaii, the 50th state, did.", "On August 21, 1959, a new 50-star US flag was unveiled.", "The 49th and 50th states to join the US did so in the same year.", "The same day that Hawaii became a US state—August 21, 1959—a new US flag was unveiled."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the order in which Alaska and Hawaii became US states, noting that Alaska became a US state several months before Hawaii did."),
      distractors: {
        B: L("Choice B is incorrect. The sentence specifies when the 50-star US flag was unveiled; it doesn’t emphasize the order in which Alaska and Hawaii became US states."),
        C: L("Choice C is incorrect. While the sentence indicates that the 49th and 50th states became US states in the same year, it doesn’t identify which state was the 49th and which was the 50th; as a result, it doesn’t emphasize the order in which Alaska and Hawaii became states."),
        D: L("Choice D is incorrect. The sentence indicates that a new US flag was unveiled when Hawaii became a US state; it doesn’t emphasize the order in which Alaska and Hawaii became states.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d2b52c50", "d2b52c50", 194)
    },
    {
      id: "rw-rs-10cd0327",
      sourceQuestionId: "10cd0327",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A thermal inversion is a phenomenon where a layer of atmosphere is warmer than the layer beneath it.</li><li style=\"margin:.25em 0\">In 2022, a team of researchers studied the presence of thermal inversions in twenty-five gas giants.</li><li style=\"margin:.25em 0\">Gas giants are planets largely composed of helium and hydrogen.</li><li style=\"margin:.25em 0\">The team found that gas giants featuring a thermal inversion were also likely to contain heat-absorbing metals.</li><li style=\"margin:.25em 0\">One explanation for this relationship is that these metals may reside in a planet’s upper atmosphere, where their absorbed heat causes an increase in temperature.</li></ul>",
      stem: "The student wants to present the study’s findings to an audience already familiar with thermal inversions. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Heat-absorbing metals may reside in a planet’s upper atmosphere.", "The team studied thermal inversions in twenty-five gas giants, which are largely composed of helium and hydrogen.", "Researchers found that gas giants featuring a thermal inversion were likely to contain heat-absorbing metals, which may reside in the planets’ upper atmospheres.", "Gas giants were likely to contain heat-absorbing metals when they featured a layer of atmosphere warmer than the layer beneath it, researchers found; this phenomenon is known as a thermal inversion."],
      answer: "C",
      explanation: L("Choice C is the best answer. It describes the study’s findings in a way that assumes the audience is already familiar with thermal inversions."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t fully describe the findings of the study, because it doesn’t include anything about thermal inversions."),
        B: L("Choice B is incorrect. This choice doesn’t describe the study’s findings."),
        D: L("Choice D is incorrect. This choice isn’t suited for an audience already familiar with thermal inversion. A familiar audience wouldn’t need to have the term defined.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-10cd0327", "10cd0327", 196)
    },
    {
      id: "rw-rs-4b376902",
      sourceQuestionId: "4b376902",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">NASA uses rovers, large remote vehicles with wheels, to explore the surface of Mars.</li><li style=\"margin:.25em 0\">NASA’s rovers can’t explore regions inaccessible to wheeled vehicles.</li><li style=\"margin:.25em 0\">Rovers are also heavy, making them difficult to land on the planet’s surface.</li><li style=\"margin:.25em 0\">Microprobes, robotic probes that weigh as little as 50 milligrams, could be deployed virtually anywhere on the surface of Mars.</li><li style=\"margin:.25em 0\">Microprobes have been proposed as an alternative to rovers.</li></ul>",
      stem: "The student wants to explain an advantage of microprobes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Despite being heavy, NASA’s rovers can land successfully on the surface of Mars.", "Microprobes, which weigh as little as 50 milligrams, could explore areas of Mars that are inaccessible to NASA’s heavy, wheeled rovers.", "NASA currently uses its rovers on Mars, but microprobes have been proposed as an alternative.", "Though they are different sizes, both microprobes and rovers can be used to explore the surface of Mars."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence explains an advantage of microprobes, noting that because microprobes weigh as little as 50 milligrams, they can explore areas inaccessible to rovers."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates that rovers can land successfully on Mars despite their weight; it doesn’t explain an advantage of microprobes."),
        C: L("Choice C is incorrect. While the sentence mentions that microprobes have been proposed as an alternative to rovers, it doesn’t explain an advantage of microprobes."),
        D: L("Choice D is incorrect. The sentence emphasizes a similarity between microprobes and rovers; it doesn’t explain an advantage of microprobes.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-4b376902", "4b376902", 199)
    },
    {
      id: "rw-rs-dede8260",
      sourceQuestionId: "dede8260",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">When medical students mention their patients on social media, they may violate patient confidentiality.</li><li style=\"margin:.25em 0\">Terry Kind led a study to determine how many medical schools have student policies that mention social media use.</li><li style=\"margin:.25em 0\">Kind and her team reviewed 132 medical school websites, examining publicly available student policies.</li><li style=\"margin:.25em 0\">Only thirteen medical schools had guidelines that explicitly mention social media, and only five defined what constitutes acceptable social media use.</li></ul>",
      stem: "The student wants to emphasize the study’s methodology. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The student policies of 132 medical schools can be found online, according to research by Terry Kind.", "To find out how many medical schools have guidelines about student social media use, Terry Kind and her team examined the student policies of 132 medical schools.", "Out of 132 medical schools, only thirteen had student policies that mentioned social media, and only five specified what use was acceptable.", "Terry Kind and her team wanted to know how many medical schools have student social media policies in place about protecting patient confidentiality."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence effectively emphasizes Kind’s methodology: examining the student policies of 132 medical schools for guidelines about student social media use."),
      distractors: {
        A: L("Choice A is incorrect. The sentence specifies how many medical schools’ student policies are available online; it doesn’t emphasize the study’s methodology."),
        C: L("Choice C is incorrect. The sentence emphasizes the study’s results, not the study’s methodology."),
        D: L("Choice D is incorrect. The sentence emphasizes the aim of the study, not the study’s methodology.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-dede8260", "dede8260", 200)
    },
    {
      id: "rw-rs-ee51ad04",
      sourceQuestionId: "ee51ad04",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The nautical mile (6,076 feet) is the measure of distance used in seafaring navigation.</li><li style=\"margin:.25em 0\">A nautical mile directly correlates to one minute (1/60th of a degree) of latitude.</li><li style=\"margin:.25em 0\">The curvature of Earth affects the accurate measurement of long distances when using flat maps.</li><li style=\"margin:.25em 0\">Measuring distances with latitude and longitude coordinates takes into account Earth’s curvature.</li><li style=\"margin:.25em 0\">Mariners use nautical charts marked with latitude and longitude to quickly calculate distances and positions.</li></ul>",
      stem: "The student wants to explain why nautical miles are used to measure distances in seafaring navigation. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Nautical miles are a measure of distance equal to one minute of latitude, which is a feature nautical charts use to calculate distances and positions.", "Since they directly correlate to the coordinates on nautical charts, which take into account Earth’s curvature, nautical miles are an efficient way to calculate distances at sea.", "Using nautical miles for navigation at sea takes Earth’s curvature into account, whereas measuring distances with latitude and longitude coordinates does not.", "Nautical charts use latitude and longitude to measure long distances; these charts are more accurate than flat maps for measuring distances in seafaring navigation because they account for Earth’s curvature."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence explains why nautical miles are used to measure distances in seafaring navigation, noting that they directly correlate to the coordinates on nautical charts that take into account Earth’s curvature, making them an efficient way to calculate distances at sea."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence describes what nautical miles are and their relationship to nautical charts, it doesn’t explain why nautical miles are used to measure distances in seafaring navigation."),
        C: L("Choice C is incorrect. While the sentence indicates a reason why nautical miles are used, it misrepresents information from the notes: measuring distances with latitude and longitude does in fact account for Earth’s curvature."),
        D: L("Choice D is incorrect. The sentence explains why nautical charts are more accurate than flat maps; it doesn’t explain why nautical miles specifically are used to measure distances in seafaring navigation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ee51ad04", "ee51ad04", 201)
    },
    {
      id: "rw-rs-81315093",
      sourceQuestionId: "81315093",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A marathon is a long-distance running race that is 26.2 miles long.</li><li style=\"margin:.25em 0\">An ultramarathon is a long-distance running race of more than 26.2 miles.</li><li style=\"margin:.25em 0\">The Kepler Challenge is a one-day, 37.3-mile ultramarathon in New Zealand.</li><li style=\"margin:.25em 0\">The Spreelauf is a six-day, 261-mile ultramarathon in Germany.</li></ul>",
      stem: "The student wants to make a generalization about ultramarathons. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Examples of ultramarathons include the 37.3-mile Kepler Challenge in New Zealand and the 261-mile Spreelauf in Germany.", "A marathon is 26.2 miles long, but the Spreelauf ultramarathon, at 261 miles, is far longer.", "Ultramarathons range widely in length, from a few dozen miles to a few hundred.", "While the Kepler Challenge is a one-day ultramarathon, the Spreelauf is a six-day ultramarathon."],
      answer: "C",
      explanation: L("Choice C is the best answer. This is the only choice that makes a generalization about ultramarathons."),
      distractors: {
        A: L("Choice A is incorrect. This choice gives specific examples of ultramarathons but doesn’t say anything about them as a category."),
        B: L("Choice B is incorrect. This choice compares marathons in general to one specific ultramarathon but doesn’t say anything about ultramarathons as a category."),
        D: L("Choice D is incorrect. This choice contrasts two specific ultramarathons but doesn’t say anything about them as a category.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-81315093", "81315093", 202)
    },
    {
      id: "rw-rs-1773fa73",
      sourceQuestionId: "1773fa73",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A commodity chain is the series of links connecting the production and purchase of a commodity on the world market.</li><li style=\"margin:.25em 0\">Chinese American anthropologist Anna Tsing studies the contemporary commodity chain of matsutake mushrooms.</li><li style=\"margin:.25em 0\">At one end of the matsutake chain are mushroom pickers in Oregon.</li><li style=\"margin:.25em 0\">At the other end are wealthy consumers who buy the costly matsutake in Japan.</li><li style=\"margin:.25em 0\">According to Tsing, “Japanese traders began importing matsutake in the 1980s, when the scarcity of matsutake in Japan first became clear.”</li></ul>",
      stem: "The student wants to provide an overview of the matsutake commodity chain. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The contemporary matsutake commodity chain has its origins in the 1980s when, according to Tsing, “the scarcity of matsutake in Japan first became clear. ”", "Commodity chains include the linked production and purchase of commodities, such as the matsutake mushroom, on the world market.", "Decades after the Japanese import of matsutake began, a commodity chain now links matsutake pickers in Oregon with wealthy consumers of the costly mushrooms in Japan.", "Wealthy consumers who buy the costly mushrooms in Japan are at one end of the matsutake commodity chain."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence provides an overview of the matsutake commodity chain, connecting the Oregon mushroom pickers at one end to the Japanese consumers at the other."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence mentions the matsutake commodity chain, it focuses only on its origins; it does not provide an overview."),
        B: L("Choice B is incorrect. The sentence provides a general definition of commodity chains, not an overview of the matsutake chain."),
        D: L("Choice D is incorrect. While the sentence mentions the matsutake commodity chain, it focuses only on one end of the chain (the consumers); it does not provide an overview.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-1773fa73", "1773fa73", 203)
    },
    {
      id: "rw-rs-6b5bc97d",
      sourceQuestionId: "6b5bc97d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Sasanian Empire lasted about 400 years (AD 224 to AD 651).</li><li style=\"margin:.25em 0\">The Sasanians controlled an area spanning 1.4 million square miles.</li><li style=\"margin:.25em 0\">This area included present-day Iran and Iraq.</li><li style=\"margin:.25em 0\">The empire’s capital was the ancient city of Ctesiphon.</li><li style=\"margin:.25em 0\">Ctesiphon was located near present-day Baghdad, Iraq.</li></ul>",
      stem: "The student wants to specify the location of Ctesiphon. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Sasanian Empire began in AD 224 and ended in AD 651.", "The capital of the Sasanian Empire, which spanned 1.4 million square miles, was Ctesiphon.", "The Sasanians controlled an area of 1.4 million square miles, including present-day Iran and Iraq.", "Ctesiphon, the capital of the Sasanian Empire, was located near present-day Baghdad, Iraq."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence specifies the location of Ctesiphon, noting that it was located near present-day Baghdad, Iraq."),
      distractors: {
        A: L("Choice A is incorrect because the sentence explains when the Sasanian Empire began and ended; it doesn’t specify the location of Ctesiphon."),
        B: L("Choice B is incorrect because the sentence emphasizes that Ctesiphon was the capital of the Sasanian Empire; it doesn’t specify Ctesiphon’s location."),
        C: L("Choice C is incorrect because it emphasizes the size of the Sasanian Empire; it doesn’t specify the location of Ctesiphon.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-6b5bc97d", "6b5bc97d", 204)
    },
    {
      id: "rw-rs-5b8b69a2",
      sourceQuestionId: "5b8b69a2",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Archaeologist Jon Erlandson and colleagues argue that humans first arrived in the Americas by sea.</li><li style=\"margin:.25em 0\">They propose that humans traveled between Pacific Ocean islands and coastlines from northeast Asia to the Americas.</li><li style=\"margin:.25em 0\">Many of these islands and coastal zones were later submerged as glaciers melted and sea levels rose.</li><li style=\"margin:.25em 0\">The researchers think that “a coastal route, including kelp forests and estuaries, would have provided a rich mix of marine, estuarine, riverine, and terrestrial resources” such as seaweeds, fish, and birds.</li><li style=\"margin:.25em 0\">This proposed scenario is known as the kelp highway hypothesis.</li></ul>",
      stem: "The student wants to summarize the kelp highway hypothesis. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Pacific Ocean islands and coastlines likely contained “a rich mix of marine, estuarine, riverine, and terrestrial resources” such as seaweeds, fish, and birds, according to researchers.", "One argument about how humans first arrived in the Americas is the kelp highway hypothesis proposed by Jon Erlandson and colleagues.", "Humans may have first arrived in the Americas by sea, traveling between Pacific Ocean islands and coastlines and subsisting on a variety of resources.", "As glaciers melted and sea levels rose, many Pacific Ocean islands and coastal zones were submerged."],
      answer: "C",
      explanation: L("Choice C is the best answer. This choice summarizes the main idea of the kelp highway hypothesis, providing a high-level overview of how the hypothesis explains human migration to the Americas."),
      distractors: {
        A: L("Choice A is incorrect. This choice describes one aspect of the proposed scenario but doesn’t discuss human migration, which is the main focus of the kelp highway hypothesis."),
        B: L("Choice B is incorrect. This choice introduces the kelp highway hypothesis but doesn’t explain what it entails."),
        D: L("Choice D is incorrect. This choice describes one element of the proposed scenario but doesn’t discuss human migration, which is the main focus of the kelp highway hypothesis.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5b8b69a2", "5b8b69a2", 205)
    },
    {
      id: "rw-rs-49fe306b",
      sourceQuestionId: "49fe306b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">From Earth, all the meteors in a meteor shower appear to originate from a single spot in the sky.</li><li style=\"margin:.25em 0\">This spot is called the meteor shower’s radiant.</li><li style=\"margin:.25em 0\">The Perseid meteor shower is visible in the northern hemisphere in July and August.</li><li style=\"margin:.25em 0\">Like many meteor showers, it is named for the location of its radiant.</li><li style=\"margin:.25em 0\">Its radiant is located within the constellation Perseus.</li></ul>",
      stem: "The student wants to explain the origin of the Perseid meteor shower’s name. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Perseid meteor shower is named for the constellation Perseus, the location of the meteor shower’s radiant.", "A meteor shower’s name may be linked to a single spot in the sky.", "The Perseid meteor shower, which has a radiant, is visible in the northern hemisphere in July and August.", "From Earth, all the meteors in a meteor shower appear to originate from a radiant, such as the one within Perseus."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence explains the origin of the Perseid meteor shower’s name: the constellation Perseus, where the meteor shower’s radiant is located."),
      distractors: {
        B: L("Choice B is incorrect. The sentence makes a claim about meteor shower names in general; it doesn’t explain the origin of the Perseid meteor shower’s name specifically."),
        C: L("Choice C is incorrect. The sentence indicates when and where the Perseid meteor shower is visible; it doesn’t explain the origin of the meteor shower’s name."),
        D: L("Choice D is incorrect. The sentence discusses meteor showers in general; it doesn’t explain the origin of the Perseid meteor shower’s name.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-49fe306b", "49fe306b", 207)
    },
    {
      id: "rw-rs-b5cd28a7",
      sourceQuestionId: "b5cd28a7",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Samuel Delany is a US writer known for his science fiction.</li><li style=\"margin:.25em 0\">Delany’s science fiction novel Babel-17 was published in 1966.</li><li style=\"margin:.25em 0\">The novel won a Nebula Award in 1967.</li><li style=\"margin:.25em 0\">The Nebula Awards are given each year to the best works of science fiction published in the US.</li></ul>",
      stem: "The student wants to indicate the title of a novel that won a Nebula Award. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Babel-17, by Samuel Delany, won a Nebula Award in 1967.", "Samuel Delany published a science fiction novel in 1966.", "Samuel Delany is an award-winning US writer known for his science fiction.", "One of Samuel Delany’s novels was among the best works of science fiction published in the US."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence indicates the title of a novel that won a Nebula Award, noting that Babel-17 by Samuel Delany won the award in 1967."),
      distractors: {
        B: L("Choice B is incorrect because the sentence identifies the year that Samuel Delany published a science fiction novel; it doesn’t indicate the novel’s title or that it won a Nebula Award."),
        C: L("Choice C is incorrect because the sentence provides an introduction of Samuel Delany; it doesn’t indicate the title of a novel that has won a Nebula Award."),
        D: L("Choice D is incorrect because the sentence indicates that one of Samuel Delany’s novels met the qualification for a Nebula Award; it doesn’t indicate the novel’s title or that it won an award.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-b5cd28a7", "b5cd28a7", 208)
    },
    {
      id: "rw-rs-5888712f",
      sourceQuestionId: "5888712f",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Physicist Muluneh Abebe was working on a garment suited for both warm and cold conditions.</li><li style=\"margin:.25em 0\">He analyzed the emissivity, or ability to emit heat, of the materials he planned to use.</li><li style=\"margin:.25em 0\">Abebe found that reflective metal fibers emitted almost no heat and had an emissivity of 0.02.</li><li style=\"margin:.25em 0\">He found that silicon carbide fibers absorbed large amounts of heat and had an emissivity of 0.74.</li><li style=\"margin:.25em 0\">The amount of heat a material absorbs is equal to the amount of heat it emits.</li></ul>",
      stem: "The student wants to contrast the emissivity of reflective metal fibers with that of silicon carbide fibers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The ability of reflective metal fibers and silicon carbide fibers to emit heat was determined by an analysis of each material’s emissivity.", "The amount of heat a material absorbs is equal to the amount it emits, as evidenced in Abebe’s analyses.", "Though the reflective metal fibers and silicon carbide fibers had different rates of emissivity, Abebe planned to use both in a garment.", "Whereas the reflective metal fibers had an emissivity of just 0.02, the silicon carbide fibers absorbed large amounts of heat, resulting in an emissivity of 0.74."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence uses “whereas” to contrast the emissivities of the two fibers, noting that the emissivity of the reflective metal fibers was just 0.02, far lower than that of the silicon carbide fibers (0.74)."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes the ability of reflective metal fibers and silicon carbide fibers to emit heat; it doesn’t contrast the emissivities of the two fibers."),
        B: L("Choice B is incorrect. The sentence states a law of thermodynamics: the amount of heat a material absorbs is equal to the amount it emits. The sentence doesn’t contrast the emissivity of reflective metal fibers with that of silicon carbide fibers."),
        C: L("Choice C is incorrect. While the sentence includes a generalization about the emissivities of reflective metal fibers and silicon carbide fibers, it emphasizes Abebe’s plans for their use in a garment; it doesn’t contrast the emissivities of the two fibers.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5888712f", "5888712f", 210)
    },
    {
      id: "rw-rs-0acc26b2",
      sourceQuestionId: "0acc26b2",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Astronomers estimate that the number of comets orbiting the Sun is in the billions.</li><li style=\"margin:.25em 0\">81P/Wild is one of many comets whose orbit has changed over time.</li><li style=\"margin:.25em 0\">81P/Wild’s orbit once lay between the orbits of Uranus and Jupiter.</li><li style=\"margin:.25em 0\">The comet’s orbit is now positioned between the orbits of Jupiter and Mars.</li></ul>",
      stem: "The student wants to make and support a generalization about the orbits of comets. Which choice most effectively uses relevant information from the notes to accomplish these goals?",
      options: ["Astronomers estimate that the number of comets orbiting the Sun is in the billions; the comets’ orbits may change over time.", "Like Uranus, Jupiter, and Mars, billions of comets orbit the Sun.", "One example of a comet is 81P/Wild, whose orbit around the Sun once lay between Uranus’s and Jupiter’s orbits but is now positioned between those of Jupiter and Mars.", "A comet’s orbit around the Sun may change over time: the orbit of comet 81P/Wild once lay between the orbits of Uranus and Jupiter but is now positioned between those of Jupiter and Mars."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence makes a generalization—that a comet’s orbit around the Sun may change over time—and supports the generalization with the example of the orbit of comet 81P/Wild, which once lay between the orbits of Uranus and Jupiter but is now positioned between the orbits of Jupiter and Mars."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes the number of comets orbiting the Sun and makes a generalization about their orbits, but it doesn’t support the generalization with an example."),
        B: L("Choice B is incorrect. The sentence makes a generalization about comets and compares them to the planets Uranus, Jupiter, and Mars; it doesn’t make and support a generalization about comets’ orbits."),
        C: L("Choice C is incorrect. While the sentence provides an example of a comet whose orbit has changed, it doesn’t make a generalization about the orbits of comets.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-0acc26b2", "0acc26b2", 211)
    },
    {
      id: "rw-rs-9336f63b",
      sourceQuestionId: "9336f63b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A small number of US Navy sailors of Filipino descent served during the US Civil War (1861–1865).</li><li style=\"margin:.25em 0\">Stephen Amos was born in the Philippines around 1830.</li><li style=\"margin:.25em 0\">He enlisted in the US Navy in November 1863.</li><li style=\"margin:.25em 0\">Raphael Ignases was born in the Philippines around 1834.</li><li style=\"margin:.25em 0\">He enlisted in the US Navy in July 1861.</li></ul>",
      stem: "The student wants to emphasize the historical significance of Stephen Amos’s enlistment date. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Both Stephen Amos and Raphael Ignases were US Navy sailors of Filipino descent, but Amos enlisted in the Navy in 1863, two years later than Ignases.", "Stephen Amos was a US Navy sailor of Filipino descent, along with Raphael Ignases, who was born in the Philippines around 1834.", "Stephen Amos enlisted in the US Navy in 1863, making him one of the few sailors of Filipino descent to serve in the US Civil War (1861–1865).", "When Stephen Amos enlisted in the US Navy in November 1863, he joined sailors such as Raphael Ignases, who had been born in the Philippines around 1834."],
      answer: "C",
      explanation: L("Choice C is the best answer. Noting the time frame of the US Civil War and the fact that Amos enlisted during this time frame, the sentence emphasizes that Amos’s enlistment date places him among the historically significant group of US Navy sailors of Filipino descent who served during the Civil War."),
      distractors: {
        A: L("Choice A is incorrect. The sentence identifies Amos and Ignases and notes that Amos’s enlistment date was later than Ignases’s; the sentence doesn’t explain the historical significance of the date."),
        B: L("Choice B is incorrect. The sentence identifies Amos and Ignases as US Navy sailors of Filipino descent, noting Ignases’s birth year; the sentence doesn’t provide Amos’s enlistment date or its historical significance."),
        D: L("Choice D is incorrect. The sentence provides Amos’s enlistment date and mentions that he served alongside a sailor of Filipino descent; it doesn’t explain the historical significance of the date.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-9336f63b", "9336f63b", 215)
    },
    {
      id: "rw-rs-9922b364",
      sourceQuestionId: "9922b364",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Ibn Sina was a Persian philosopher and physician.</li><li style=\"margin:.25em 0\">His book The Canon of Medicine recorded the most advanced medical knowledge of his time.</li><li style=\"margin:.25em 0\">It was published in the year 1025 CE.</li><li style=\"margin:.25em 0\">It was used as a medical textbook in Middle Eastern and European universities for centuries.</li></ul>",
      stem: "The student wants to identify the year that The Canon of Medicine was published. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Ibn Sina’s book The Canon of Medicine was published in the year 1025 CE.", "A Persian philosopher and physician wrote a medical textbook called The Canon of Medicine.", "The Canon of Medicine was a medical textbook used by Middle Eastern and European universities for centuries.", "Ibn Sina recorded the most advanced medical knowledge of his time in his book The Canon of Medicine."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence identifies the year in which the book was published."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence provides information about the book’s author, it doesn’t identify the year in which the book was published."),
        C: L("Choice C is incorrect. While the sentence provides information about the book’s historical use, it doesn’t identify the year in which the book was published."),
        D: L("Choice D is incorrect. While the sentence provides information about the book’s contents, it doesn’t identify the year in which the book was published.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-9922b364", "9922b364", 216)
    },
    {
      id: "rw-rs-04397a63",
      sourceQuestionId: "04397a63",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Haudenosaunee Confederacy is a nearly 1,000-year-old alliance of six Native nations in the northeastern US.</li><li style=\"margin:.25em 0\">The members are bound by a centuries-old agreement known as the Great Law of Peace.</li><li style=\"margin:.25em 0\">Historian Bruce Johansen is one of several scholars who believe that the principles of the Great Law of Peace influenced the US Constitution.</li><li style=\"margin:.25em 0\">This theory is called the influence theory.</li><li style=\"margin:.25em 0\">Johansen cites the fact that Benjamin Franklin and Thomas Jefferson both studied the Haudenosaunee Confederacy.</li></ul>",
      stem: "The student wants to present the influence theory to an audience unfamiliar with the Haudenosaunee Confederacy. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Historian Bruce Johansen believes that the Great Law of Peace was very influential.", "The influence theory is supported by the fact that Benjamin Franklin and Thomas Jefferson both studied the Haudenosaunee Confederacy.", "The influence theory holds that the principles of the Great Law of Peace, a centuries-old agreement binding six Native nations in the northeastern US, influenced the US Constitution.", "Native people, including the members of the Haudenosaunee Confederacy, influenced the founding of the US in many different ways."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence effectively presents the influence theory to an audience unfamiliar with the Haudenosaunee Confederacy, explaining the theory’s position that the Great Law of Peace influenced the US Constitution while avoiding mention of the Haudenosaunee Confederacy itself."),
      distractors: {
        A: L("Choice A is incorrect. The sentence broadly emphasizes Johansen’s ideas about the Great Law of Peace; it doesn’t identify the influence theory or effectively present it."),
        B: L("Choice B is incorrect. The sentence emphasizes one fact that supports the influence theory; it doesn’t effectively present the theory to an audience unfamiliar with the Haudenosaunee Confederacy."),
        D: L("Choice D is incorrect. The sentence makes a broad generalization about Native people’s influence on the founding of the US; it doesn’t effectively present the influence theory.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-04397a63", "04397a63", 217)
    },
    {
      id: "rw-rs-de01ccef",
      sourceQuestionId: "de01ccef",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The background colors of US and UK road signs are used to denote each sign’s purpose.</li><li style=\"margin:.25em 0\">Directional signs are a type of sign containing information such as route names, distance to a destination, etc.</li><li style=\"margin:.25em 0\">Highways, major roadways, and minor roadways in the US generally use green for directional signs.</li><li style=\"margin:.25em 0\">Highways in the UK generally use blue for directional signs.</li><li style=\"margin:.25em 0\">Major roadways in the UK generally use green for directional signs.</li></ul>",
      stem: "The student wants to contrast how green backgrounds are used in US and UK road signs. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Blue backgrounds are generally used on directional highway signs in the UK, in contrast to the green highway signs used in the US.", "In the US, green signs indicate directional information on both highways and major roadways, but in the UK, directional signs of this color generally appear only on major roadways.", "Green road signs are used in both the US and UK to denote directional information on major roadways, like distance to a destination or route names.", "Both the UK and the US use directional signs, which include information on route names and distance to a destination."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence contrasts how green backgrounds are used in US and UK road signs, noting that the US uses them for both highways and major roadways while the UK uses them only for major roadways."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does contrast US and UK road signs, the contrast focuses on the use of blue versus green backgrounds rather than on the use of green backgrounds specifically."),
        C: L("Choice C is incorrect. The sentence indicates a similarity between the uses of green road signs in the US and the UK rather than contrasting them."),
        D: L("Choice D is incorrect. The sentence indicates a similarity between road signs in the US and those in the UK; it doesn’t contrast how green backgrounds are used in each country’s signs.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-de01ccef", "de01ccef", 218)
    },
    {
      id: "rw-rs-164a32e7",
      sourceQuestionId: "164a32e7",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Claude McKay (1889–1948) was a Jamaican American writer.</li><li style=\"margin:.25em 0\">Songs of Jamaica (1912) and Constab Ballads (1912) are two acclaimed poetry collections that McKay published while living in Jamaica.</li><li style=\"margin:.25em 0\">McKay moved to Harlem in New York City in 1914.</li><li style=\"margin:.25em 0\">He is best known as a poet and novelist of the Harlem Renaissance, a literary and cultural movement of the 1920s and 1930s.</li><li style=\"margin:.25em 0\">His most famous works include the poetry collection Harlem Shadows (1922) and the novel Home to Harlem (1928).</li></ul>",
      stem: "The student wants to emphasize Claude McKay’s accomplishments before moving to Harlem. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Jamaican American writer Claude McKay is the author of works such as Songs of Jamaica (1912), Constab Ballads (1912), Harlem Shadows (1922), and Home to Harlem (1928).", "Although he is best known as a Harlem Renaissance writer, Claude McKay had published two acclaimed poetry collections in 1912 while living in Jamaica: Songs of Jamaica and Constab Ballads.", "In 1914, Claude McKay moved to Harlem, where he would become known as a poet and novelist of the Harlem Renaissance (a literary and cultural movement of the 1920s and 1930s).", "Before moving to Harlem, Claude McKay—author of the poetry collection Harlem Shadows (1922) and the novel Home to Harlem (1928)—lived in Jamaica."],
      answer: "B",
      explanation: L("Choice B is the best answer. This choice contrasts McKay’s fame as a Harlem Renaissance writer with his earlier achievements as a Jamaican poet, and it names the two collections he published before moving to Harlem."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t emphasize McKay’s accomplishments before moving to Harlem. It lists some of his works but doesn’t distinguish between those he wrote in Jamaica and those he wrote in Harlem."),
        C: L("Choice C is incorrect. This choice doesn’t emphasize McKay’s accomplishments before moving to Harlem. It only mentions the year he moved and what he would become known for afterwards."),
        D: L("Choice D is incorrect. This choice doesn’t emphasize McKay’s accomplishments before moving to Harlem. It mentions that he lived in Jamaica, but it doesn’t name any of the works he published there.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-164a32e7", "164a32e7", 219)
    },
    {
      id: "rw-rs-fbffb352",
      sourceQuestionId: "fbffb352",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Archaeologist Dr. Sada Mire founded the Horn Heritage Foundation to preserve the cultural history of regions in the Horn of Africa.</li><li style=\"margin:.25em 0\">Horn Heritage has overseen a preservation project to create 3D digital scans of ancient rock art in Somaliland.</li><li style=\"margin:.25em 0\">Paintings found at the Laas Geel caves are included in the scans.</li><li style=\"margin:.25em 0\">The Laas Geel paintings feature human figures and animals.</li><li style=\"margin:.25em 0\">Paintings found at the Dhagah Nabi Galay caves are included in the scans.</li><li style=\"margin:.25em 0\">The Dhagah Nabi Galay caves feature what are thought to be the earliest examples of writing in East Africa.</li></ul>",
      stem: "The student wants to emphasize a similarity between the Laas Geel paintings and the Dhagah Nabi Galay paintings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The earliest examples of writing in East Africa are thought to be featured in the paintings at the Dhagah Nabi Galay caves in Somaliland.", "The paintings at the Dhagah Nabi Galay caves feature examples of writing, while those at the Laas Geel caves feature humans and animals.", "In Somaliland, the paintings in the Laas Geel caves feature human figures and animals.", "The Laas Geel paintings and the Dhagah Nabi Galay paintings are both examples of ancient rock art found in Somaliland."],
      answer: "D",
      explanation: L("Choice D is the best answer. This choice compares the Laas Geel paintings and the Dhagah Nabi Galay paintings to one another and emphasizes what they have in common: they are both ancient rock art found in the same region."),
      distractors: {
        A: L("Choice A is incorrect. This choice only mentions the Dhagah Nabi Galay paintings. It doesn’t compare them to the Laas Geel paintings."),
        B: L("Choice B is incorrect. This choice doesn’t emphasize a similarity between the two paintings. Instead, it emphasizes a difference: the type of content they depict."),
        C: L("Choice C is incorrect. This choice only mentions the Laas Geel paintings. It doesn’t compare them to the Dhagah Nabi Galay paintings.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-fbffb352", "fbffb352", 221)
    },
    {
      id: "rw-rs-cfade68d",
      sourceQuestionId: "cfade68d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Marcela Guerrero is a curator at the Whitney Museum of American Art in New York.</li><li style=\"margin:.25em 0\">She curated the Whitney’s 2018 exhibition Pacha, Llaqta, Wasichay: Indigenous Space, Modern Architecture, New Art.</li><li style=\"margin:.25em 0\">This exhibition featured works by seven emerging Latino artists.</li><li style=\"margin:.25em 0\">She curated the Whitney’s 2020 exhibition Vida Americana: Mexican Muralists Remake American Art, 1925–1945.</li><li style=\"margin:.25em 0\">This exhibition included nearly 200 works by twentieth-century Latino and Mexican artists.</li></ul>",
      stem: "The student wants to describe the exhibition that Guerrero curated in 2018. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Held at the Whitney Museum of American Art, the exhibition Vida Americana: Mexican Muralists Remake American Art, 1925–1945 included nearly 200 works by twentieth-century Mexican and Latino artists.", "Pacha, Llaqta, Wasichay: Indigenous Space, Modern Architecture, New Art, an exhibition at the Whitney Museum of American Art, featured works by seven emerging Latino artists.", "In both 2018 and 2020, Marcela Guerrero curated exhibitions at the Whitney Museum of American Art in New York.", "While one exhibition that Marcela Guerrero curated featured works by emerging artists, another included works by twentieth-century artists."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence describes the 2018 exhibition Guerrero curated, noting that the exhibition, which was titled Pacha, Llaqta, Wasichay: Indigenous Space, Modern Architecture, New Art, featured the works of seven emerging Latino artists."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes the exhibition Guerrero curated in 2020; it doesn’t describe her 2018 exhibition."),
        C: L("Choice C is incorrect. The sentence emphasizes a similarity between the two exhibitions Guerrero curated; it doesn’t describe her 2018 exhibition."),
        D: L("Choice D is incorrect. The sentence emphasizes a difference between the two exhibitions Guerrero curated; it doesn’t describe her 2018 exhibition.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-cfade68d", "cfade68d", 223)
    },
    {
      id: "rw-rs-804928b6",
      sourceQuestionId: "804928b6",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Mary Kang is a Korean American portrait photographer.</li><li style=\"margin:.25em 0\">She is based in New York City and in Austin, Texas.</li><li style=\"margin:.25em 0\">One of Kang’s photographs features artist Dominique Fung.</li><li style=\"margin:.25em 0\">In the portrait, Fung is seated on the floor.</li><li style=\"margin:.25em 0\">Five of Fung’s paintings are resting against the wall behind her.</li></ul>",
      stem: "The student wants to describe where Fung is in the photograph to an audience already familiar with Kang and Fung. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Dominique Fung is in a photograph by Mary Kang, a portrait photographer based in New York City and Austin, Texas.", "Mary Kang is a photographer based in both New York City and Austin, Texas.", "Five paintings by artist Dominique Fung can be seen in the background of Mary Kang’s photograph.", "In Kang’s portrait of her, Fung is seated on the floor, with five of her paintings resting against the wall behind her."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence describes Fung’s location in Kang’s photograph, noting that Fung is seated on the floor. Additionally, because the sentence is intended for an audience already familiar with the artists, it omits the artists’ first names and other biographical information about them."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates that Fung appears in Kang’s photograph; it doesn’t describe Fung’s location in Kang’s photograph."),
        B: L("Choice B is incorrect. The sentence identifies Kang and where she is based; it doesn’t describe Fung’s location in Kang’s photograph."),
        C: L("Choice C is incorrect. The sentence describes the background of Kang’s photograph; it doesn’t describe Fung’s location in Kang’s photograph.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-804928b6", "804928b6", 228)
    },
    {
      id: "rw-rs-3c925481",
      sourceQuestionId: "3c925481",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Pineapple is a fruit that contains ascorbic acid, an essential nutrient for humans.</li><li style=\"margin:.25em 0\">Every 100 grams (g) of pineapple contains 48 milligrams (mg) of ascorbic acid.</li><li style=\"margin:.25em 0\">Many animals can make ascorbic acid in their bodies, but humans cannot.</li><li style=\"margin:.25em 0\">Humans must get ascorbic acid from foods, including fruits and vegetables.</li><li style=\"margin:.25em 0\">Ascorbic acid is also known as vitamin C.</li></ul>",
      stem: "The student wants to provide an example of a fruit that contains vitamin C. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Humans cannot make ascorbic acid in their bodies, but they can get it from foods, such as fruits, for example.", "Vitamin C, also known as ascorbic acid, can be found in pineapple as well as other fruits.", "Since humans cannot make vitamin C in their bodies, they must get it from food.", "Many animals can make ascorbic acid, which is also known as vitamin C, in their bodies, but humans cannot."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence provides an example of a fruit that contains vitamin C, noting that vitamin C (also known as ascorbic acid) can be found in pineapple as well as other fruits."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does explain that humans can get vitamin C from fruits, it doesn’t provide an example of a specific fruit that contains vitamin C."),
        C: L("Choice C is incorrect. The sentence explains why humans must get vitamin C from foods; it doesn’t provide an example of a fruit that contains vitamin C."),
        D: L("Choice D is incorrect. The sentence compares vitamin C production in animals with vitamin C production in humans; it doesn’t provide an example of a fruit that contains vitamin C.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-3c925481", "3c925481", 229)
    },
    {
      id: "rw-rs-25755def",
      sourceQuestionId: "25755def",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Generally, an object will heat up when twisted.</li><li style=\"margin:.25em 0\">The twisting of an object is known as torsion.</li><li style=\"margin:.25em 0\">A 2019 study led by Zunfeng Liu and Ray Baughman tested the torsional heating of various fibers.</li><li style=\"margin:.25em 0\">When a 3-millimeter-thick sample of thermoplastic polyurethane (TPU) fiber was twisted, its average surface temperature increased by 6°C.</li><li style=\"margin:.25em 0\">When a 4-millimeter-thick sample of styrene-ethylene-butylene-styrene (SEBS) rubber fiber was twisted, its average surface temperature increased by 3.5°C.</li></ul>",
      stem: "The student wants to contrast the two samples. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["When the fibers were twisted as part of the 2019 study, the surface temperature of both samples increased.", "In 2019, researchers studied the effect of torsional heating on various fibers, including samples of SEBS rubber and TPU.", "Twisting an object will generally cause its temperature to increase, a process known as torsional heating.", "The SEBS rubber sample used in the 2019 study was thicker than the TPU sample."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence contrasts the two samples, noting that the SEBS rubber sample, at 4 millimeters thick, was thicker than the TPU sample, which was 3 millimeters thick."),
      distractors: {
        A: L("Choice A is incorrect because the sentence mentions a similarity between the TPU fiber and the SEBS rubber; it doesn’t contrast the two samples."),
        B: L("Choice B is incorrect because the sentence indicates that both the SEBS rubber and TPU samples were part of the 2019 study; it doesn’t contrast the two samples."),
        C: L("Choice C is incorrect because the sentence describes the process of torsional heating; it doesn’t contrast the two samples.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-25755def", "25755def", 231)
    },
    {
      id: "rw-rs-5222ffab",
      sourceQuestionId: "5222ffab",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Neuroscientists Krishnan Padmanabhan and Zhen Chen sought to better understand the workings of the brain’s olfactory system.</li><li style=\"margin:.25em 0\">They devised a study using mathematical models.</li><li style=\"margin:.25em 0\">They found that certain fibers allow the brain to toggle from one method of processing smells to another.</li><li style=\"margin:.25em 0\">In one method, cells in the piriform cortex (where the perception of odor forms) capture olfactory information at a given moment.</li><li style=\"margin:.25em 0\">In the other, the cells track changes in olfactory information over time.</li></ul>",
      stem: "The student wants to summarize the study’s findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["To arrive at these findings, which describe dual methods of processing smells in the piriform cortex, Padmanabhan and Chen devised a study using mathematical models.", "Padmanabhan and Chen showed that olfactory information is captured by cells in the piriform cortex, where the perception of odor forms.", "Using mathematical models, Padmanabhan and Chen devised a study to better understand the workings of the brain’s olfactory system.", "According to Padmanabhan and Chen, the brain can toggle between capturing olfactory information at a given moment and tracking changes in that information over time."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence effectively summarizes the study’s findings, explaining what Padmanabhan and Chen found: that the brain can toggle between one method of processing smells (capturing information at a given moment) and another (tracking changes in information over time)."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence mentions findings, it mainly focuses on Padmanabhan and Chen’s methodology. It doesn’t effectively summarize the study’s findings."),
        B: L("Choice B is incorrect. The sentence notes a fact about the olfactory system—that the perception of odor forms in the piriform cortex—but doesn’t summarize the findings of Padmanabhan and Chen’s study."),
        C: L("Choice C is incorrect. The sentence presents the goal of Padmanabhan and Chen’s study; it doesn’t summarize the study’s findings.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5222ffab", "5222ffab", 232)
    },
    {
      id: "rw-rs-4223d4a6",
      sourceQuestionId: "4223d4a6",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1965, Yale University historians claimed that a world map called the Vinland Map was drawn in the fifteenth century.</li><li style=\"margin:.25em 0\">Since that time, the map’s age has been the subject of debate.</li><li style=\"margin:.25em 0\">In 2021, researchers conducted a study to analyze the elemental composition of the map’s ink.</li><li style=\"margin:.25em 0\">Their analysis revealed that the ink contains a titanium compound not used in inks until the 1920s.</li><li style=\"margin:.25em 0\">The researchers concluded that the map was drawn in the twentieth century.</li></ul>",
      stem: "The student wants to present the study and its findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Given the debate about the Vinland Map’s age, researchers in 2021 conducted a study to analyze the elemental composition of the map’s ink.", "A 2021 study of the Vinland Map’s ink revealed that it contains a titanium compound not used in inks until the 1920s, indicating that the map was drawn in the twentieth century.", "The Vinland Map, believed by some to have been drawn in the fifteenth century, was the focus of a 2021 study.", "Aware that a certain titanium compound was not used in inks until the 1920s, researchers in 2021 studied the elemental composition of the Vinland Map’s ink."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence effectively presents the study and its findings, providing relevant information: a 2021 study of the Vinland Map found that the map’s ink contains a compound not used in inks until the twentieth century."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence introduces the study, it does not present the study’s findings."),
        C: L("Choice C is incorrect. While the sentence mentions the study, it does not effectively present the study or its findings."),
        D: L("Choice D is incorrect. While the sentence introduces the study, it does not present the study’s findings.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-4223d4a6", "4223d4a6", 233)
    },
    {
      id: "rw-rs-7aac173e",
      sourceQuestionId: "7aac173e",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Architect Julian Abele studied Gregorian and neo-Gothic architecture in Europe.</li><li style=\"margin:.25em 0\">Abele worked for an architecture firm that was hired in 1924 to design buildings for Duke University’s new campus.</li><li style=\"margin:.25em 0\">Most of the buildings on Duke’s campus were designed in the Gregorian or neo-Gothic architectural styles.</li><li style=\"margin:.25em 0\">At the time, Abele was not formally credited with designing the buildings.</li><li style=\"margin:.25em 0\">Based on the buildings’ architectural styles, historians believe Abele designed most of the campus buildings.</li></ul>",
      stem: "The student wants to specify why historians believe Abele designed most of Duke’s campus buildings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Given that most of the buildings on Duke’s campus feature architectural styles that Abele had studied in Europe, historians believe Abele is the one who designed them.", "Though Abele wasn’t formally credited at the time, historians believe he designed most of the buildings on Duke’s campus.", "Most of Duke’s campus buildings, which were designed by a firm Abele worked for, were designed in the Gregorian and neo-Gothic architectural styles.", "Abele, an architect who studied Gregorian and neo-Gothic architecture in Europe, is believed to have designed most of the buildings on Duke’s campus."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence specifies why historians believe Abele designed most of Duke’s campus buildings, noting that most of the buildings feature architectural styles that Abele had studied."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence explains that historians believe Abele designed most of Duke’s campus buildings, it doesn’t specify why historians hold that belief."),
        C: L("Choice C is incorrect because the sentence emphasizes the architectural styles of Duke’s campus buildings; it doesn’t specify why historians believe Abele designed the buildings."),
        D: L("Choice D is incorrect. While the sentence explains that Abele is believed to have designed most of the buildings on Duke’s campus, it doesn’t specify why historians believe that he designed the buildings.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7aac173e", "7aac173e", 234)
    },
    {
      id: "rw-rs-72ae9bca",
      sourceQuestionId: "72ae9bca",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In the early 1900s, suffragists organized marches for women’s voting rights.</li><li style=\"margin:.25em 0\">Suffragists in the United Kingdom marched from Edinburgh to London.</li><li style=\"margin:.25em 0\">This march began on October 12, 1912, and ended on November 16, 1912.</li><li style=\"margin:.25em 0\">Suffragists in the United States marched from New York City to Albany, New York.</li><li style=\"margin:.25em 0\">This march began on December 16, 1912, and ended on December 28, 1912.</li></ul>",
      stem: "The student wants to emphasize the order in which the two marches occurred. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["After suffragists in the UK marched from Edinburgh to London, suffragists in the US marched from New York City to Albany, New York.", "In the early 1900s, suffragists in the UK and the US marched for women’s voting rights.", "A march from New York City to Albany, New York, was followed by one that began in Edinburgh and ended in London.", "From October 12 to November 16, 1912, suffragists in the UK marched from Edinburgh to London."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the order in which the two marches occurred, correctly indicating that the US march (December 16 to December 28, 1912) occurred after the march in the UK (October 12 to November 16, 1912)."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence mentions that both marches took place in the early 1900s, it doesn’t emphasize the order in which the two marches occurred."),
        C: L("Choice C is incorrect. While the sentence does emphasize the order in which the two marches occurred, the order is incorrect. The UK march took place from October 12 to November 16, 1912, which was before the US march (December 1912)."),
        D: L("Choice D is incorrect. While the sentence specifies the dates of the UK march, it doesn’t mention the US march or emphasize the order in which the two marches occurred.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-72ae9bca", "72ae9bca", 235)
    },
    {
      id: "rw-rs-742695d7",
      sourceQuestionId: "742695d7",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Spiders are classified as arachnids.</li><li style=\"margin:.25em 0\">There are other types of arachnids besides spiders.</li><li style=\"margin:.25em 0\">Harvestmen are a type of arachnid.</li><li style=\"margin:.25em 0\">Harvestmen are also known as daddy longlegs.</li><li style=\"margin:.25em 0\">Harvestmen are not spiders.</li></ul>",
      stem: "The student wants to explain what harvestmen are. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Spiders, also known as harvestmen, are classified as arachnids.", "There are other types of arachnids besides spiders, such as daddy longlegs.", "The spiders known as daddy longlegs are classified as harvestmen.", "Harvestmen, also known as daddy longlegs, are arachnids but not spiders."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence explains what harvestmen are, noting that they are also known as daddy longlegs and that they are arachnids but not spiders."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence does mention harvestmen, its main focus is on spiders. Moreover, it misrepresents information from the notes: harvestmen are not spiders."),
        B: L("Choice B is incorrect. The sentence focuses on the broader point that arachnids include more than just spiders; it doesn’t mention harvestmen directly or explain what they are."),
        C: L("Choice C is incorrect. The sentence focuses on how daddy longlegs are classified; it doesn’t explain what harvestmen are. Moreover, it misrepresents information from the notes. The notes indicate that harvestmen are not spiders, and “harvestmen” is presented in the notes as an alternate name for “daddy longlegs, ” not a category in which daddy longlegs belong.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-742695d7", "742695d7", 237)
    },
    {
      id: "rw-rs-3dcc7140",
      sourceQuestionId: "3dcc7140",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Nissologists are scientists who study islands.</li><li style=\"margin:.25em 0\">Some nissologists define an island as any piece of land surrounded by water.</li><li style=\"margin:.25em 0\">Using that definition, they determined that Sweden has 221,000 islands.</li><li style=\"margin:.25em 0\">Other nissologists define an island as being 1 kilometer square, a certain distance from the mainland, and having at least 50 permanent residents.</li><li style=\"margin:.25em 0\">Using that definition, they determined that Sweden has 24 islands.</li></ul>",
      stem: "The student wants to make and support a generalization about nissologists’ definition of an island. Which choice most effectively uses relevant information from the notes to accomplish these goals?",
      options: ["The definition of an island as any piece of land surrounded by water is supported by some nissologists, scientists who study islands.", "Multiple counts of Sweden’s islands have been based on different definitions of an island.", "Based on a recent count, Sweden has a relatively small number of islands with at least 50 permanent residents.", "Nissologists’ different definitions can result in huge disparities in counts of islands, as the example of Sweden shows."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence makes a generalization about nissologists’ definition of an island—specifically, that the use of one definition rather than another can result in huge disparities in the number of islands counted—and supports that generalization by citing Sweden as an example."),
      distractors: {
        A: L("Choice A is incorrect. The sentence introduces one definition of an island to an audience unfamiliar with nissologists; it doesn’t make a generalization about nissologists’ definition of an island."),
        B: L("Choice B is incorrect. While the sentence synthesizes information from the notes about counts of Sweden’s islands, it doesn’t make and support a generalization about nissologists’ definition of an island."),
        C: L("Choice C is incorrect. The sentence makes an inference about islands in Sweden; it doesn’t mention nissologists’ definition of an island or make a generalization about it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-3dcc7140", "3dcc7140", 240)
    },
    {
      id: "rw-rs-45eaf7fb",
      sourceQuestionId: "45eaf7fb",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Tecozautla is a municipality in the state of Hidalgo, Mexico.</li><li style=\"margin:.25em 0\">Municipalities are governmental regions responsible for providing many public services to their residents.</li><li style=\"margin:.25em 0\">One service they provide is street lighting.</li><li style=\"margin:.25em 0\">Tecozautla covers an area of roughly 535 km².</li><li style=\"margin:.25em 0\">Hidalgo is divided into 84 municipalities.</li></ul>",
      stem: "The student wants to emphasize the size of Tecozautla. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The municipality of Tecozautla in Hidalgo, Mexico, covers an area of roughly 535 km².", "Providing street lighting is just one example of the public services that municipalities provide.", "Tecozautla is one of 84 governmental regions, known as municipalities, across Hidalgo.", "Tecozautla—a governmental region in the state of Hidalgo, Mexico—provides many public services to its residents."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the size of Tecozautla, noting that it covers an area of roughly 535 km²."),
      distractors: {
        B: L("Choice B is incorrect. The sentence gives an example of a public service that municipalities provide; it doesn’t emphasize the size of Tecozautla."),
        C: L("Choice C is incorrect. While the sentence provides information about Tecozautla, it doesn’t emphasize Tecozautla’s size."),
        D: L("Choice D is incorrect. While the sentence provides information about Tecozautla, it doesn’t emphasize Tecozautla’s size.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-45eaf7fb", "45eaf7fb", 244)
    },
    {
      id: "rw-rs-a1ca7ec4",
      sourceQuestionId: "a1ca7ec4",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Cecilia Vicuña is a multidisciplinary artist.</li><li style=\"margin:.25em 0\">In 1971, her first solo art exhibition, Pinturas, poemas y explicaciones, was shown at the Museo Nacional de Bellas Artes in Santiago, Chile.</li><li style=\"margin:.25em 0\">Her poetry collection Precario/Precarious was published in 1983 by Tanam Press.</li><li style=\"margin:.25em 0\">Her poetry collection Instan was published in 2002 by Kelsey St. Press.</li><li style=\"margin:.25em 0\">She lives part time in Chile, where she was born, and part time in New York.</li></ul>",
      stem: "The student wants to introduce the artist’s 1983 poetry collection. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Before she published the books Precario/Precarious (1983) and Instan (2002), Cecilia Vicuña exhibited visual art at the Museo Nacional de Bellas Artes in Santiago, Chile.", "Cecilia Vicuña is a true multidisciplinary artist whose works include numerous poetry collections and visual art exhibitions.", "Published in 1983 by Tanam Press, Precario/Precarious is a collection of poetry by the multidisciplinary artist Cecilia Vicuña.", "In 1971, Cecilia Vicuña exhibited her first solo art exhibition, Pinturas, poemas y explicaciones, in Chile, her country of birth."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence effectively introduces the poetry collection Precario/Precarious, noting that it is a collection by Vicuña that was published in 1983 by Tanam Press."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence mentions the 1983 poetry collection Precario/Precarious, it focuses mainly on Vicuña’s visual art."),
        B: L("Choice B is incorrect. The sentence doesn’t introduce the 1983 poetry collection Precario/Precarious; instead, it introduces Vicuña."),
        D: L("Choice D is incorrect. The sentence emphasizes the location of Vicuña’s 1971 exhibition Pinturas, poemas y explicaciones; it doesn’t introduce the 1983 poetry collection Precario/Precarious.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-a1ca7ec4", "a1ca7ec4", 246)
    },
    {
      id: "rw-rs-b98b8f64",
      sourceQuestionId: "b98b8f64",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">1926: The US Congress gave the US Commerce Department authority to regulate safety standards in the fledgling commercial airline industry.</li><li style=\"margin:.25em 0\">1938: Congress transferred this authority to a new independent government agency called the Civil Aeronautics Authority (CAA).</li><li style=\"margin:.25em 0\">1958: Congress transferred authority from the CAA to the newly established Federal Aviation Administration (F AA).</li><li style=\"margin:.25em 0\">The F AA’s first administrator, Elwood R. Quesada, updated safety standards and technologies for the era of commercial jets.</li><li style=\"margin:.25em 0\">The F AA remains the regulatory authority for airline safety.</li></ul>",
      stem: "The student wants to specify the order in which different government entities were given the authority to regulate airline safety in the US. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The CAA had the authority to regulate safety for US airlines from 1938 until 1958, at which point authority was transferred to the US Commerce Department by Elwood R. Quesada.", "The F AA, CAA, and the US Commerce Department all had the authority to regulate US airline safety, but they possessed this authority at different times.", "The F AA has regulated airline safety since it was established by the US Congress in 1958.", "The authority to regulate US airline safety transferred from the US Commerce Department to the CAA in 1938, then from the CAA to the F AA in 1958."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence specifies the order in which different government entities were given the authority to regulate US airline safety, noting that this role shifted from the US Commerce Department to the CAA in 1938, then from the CAA to the F AA in 1958."),
      distractors: {
        A: L("Choice A is incorrect because it misrepresents information from the notes. The authority to regulate airline safety was transferred to the F AA in 1958, not to the US Commerce Department. Moreover, the sentence misrepresents Quesada’s role as described in the notes."),
        B: L("Choice B is incorrect. While the sentence mentions that all three entities had the authority to regulate US airline safety at different times, it doesn’t specify the chronological order in which they held that authority."),
        C: L("Choice C is incorrect. The sentence only mentions when the F AA began regulating US airline safety; it doesn’t specify the order in which different government entities held that authority.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-b98b8f64", "b98b8f64", 248)
    },
    {
      id: "rw-rs-4c26f18a",
      sourceQuestionId: "4c26f18a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">By interlocking their bodies, ants can form bridges to help fellow ants cross gaps.</li><li style=\"margin:.25em 0\">In 2020, Yasemin Ozkan-Aydin was inspired by ant behavior to design collaborative quadruped robots.</li><li style=\"margin:.25em 0\">Over the course of a year, she designed, built, tested, and refined her robots.</li><li style=\"margin:.25em 0\">Each robot is programmed to send a signal to another robot upon encountering a gap in a path.</li><li style=\"margin:.25em 0\">The signaled robot connects to the back of the signaler robot via magnetic sensors and pushes it across the gap.</li></ul>",
      stem: "The student wants to begin a narrative about the creation of the robots. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["When one of Yasemin Ozkan-Aydin’s robots encounters a gap in its path, it sends a signal to another robot; the signaled robot connects to the back of the signaler and pushes it across the gap.", "After a year, Yasemin Ozkan-Aydin had designed, built, tested, and refined her robots.", "Inspired by ants, which form bridges with their interlocked bodies to help fellow ants cross gaps, Yasemin Ozkan-Aydin set out to design quadruped robots capable of similarly collaborative behavior.", "Ants, which have inspired the design of robots, form bridges by interlocking their bodies."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence effectively begins a narrative about the creation of the robots, explaining that ants’ gap-crossing technique inspired Yasemin Ozkan-Aydin to \"set out to design\" robots that could collaborate in a similar manner."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes how the robots work together to cross gaps; it doesn’t effectively begin a narrative about the creation of the robots."),
        B: L("Choice B is incorrect. The sentence provides an overview of the steps Ozkan-Aydin took in creating the robots; it doesn’t effectively begin a narrative about their creation."),
        D: L("Choice D is incorrect. The sentence explains how ants form bridges; it doesn’t effectively begin a narrative about the creation of the robots.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-4c26f18a", "4c26f18a", 250)
    },
    {
      id: "rw-rs-d7c5388f",
      sourceQuestionId: "d7c5388f",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Planetary scientists classify asteroids based on their composition.</li><li style=\"margin:.25em 0\">C-type asteroids are composed primarily of carbon.</li><li style=\"margin:.25em 0\">They account for roughly 75 percent of known asteroids.</li><li style=\"margin:.25em 0\">S-type asteroids are primarily made up of silicate minerals.</li><li style=\"margin:.25em 0\">They account for roughly 17 percent of known asteroids.</li></ul>",
      stem: "The student wants to emphasize a difference between C-type and S-type asteroids. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Planetary scientists classify asteroids into types, two of which are the C-type and the S-type.", "Planetary scientists consider an asteroid’s composition (such as whether the asteroid is composed mainly of silicate minerals or carbon) when classifying it.", "Roughly 17 percent of known asteroids are classified as S-type asteroids; another percentage is classified as C-type asteroids.", "C-type asteroids are mainly composed of carbon, whereas S-type asteroids are primarily made up of silicate minerals."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes a difference between C-type and S-type asteroids, noting that C-type asteroids are mainly composed of carbon, while S-type asteroids are mainly composed of silicate minerals."),
      distractors: {
        A: L("Choice A is incorrect. The sentence states that C-type and S-type are two types of asteroids, but it doesn’t emphasize a difference between them."),
        B: L("Choice B is incorrect because it doesn’t directly mention C-type or S-type asteroids."),
        C: L("Choice C is incorrect. While the sentence mentions that 17 percent of known asteroids are S-type asteroids, it doesn’t identify the percentage of asteroids that are C-type. Therefore, the sentence doesn’t emphasize a difference between the two types.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d7c5388f", "d7c5388f", 252)
    },
    {
      id: "rw-rs-0778b4ac",
      sourceQuestionId: "0778b4ac",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Chromosomes are cellular structures that contain genes.</li><li style=\"margin:.25em 0\">Genes carry critical instructions for determining an organism’s physical traits.</li><li style=\"margin:.25em 0\">Members of the same species typically have the same number of chromosomes.</li><li style=\"margin:.25em 0\">The pineapple (Ananas comosus) and the melon (Cucumis melo) are species of fruits.</li><li style=\"margin:.25em 0\">The pineapple has fifty chromosomes.</li><li style=\"margin:.25em 0\">The melon has twenty-four chromosomes.</li></ul>",
      stem: "The student wants to specify how many chromosomes the pineapple has. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The pineapple’s chromosomes contain genes, which are critical to determining an organism’s physical traits.", "The pineapple (Ananas comosus) has fifty chromosomes.", "The pineapple (Ananas comosus) and the melon (Cucumis melo) both have chromosomes, but the pineapple has more than the melon does.", "The melon, a species of fruit, has twenty-four structures called chromosomes."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence directly specifies how many chromosomes the pineapple has, as indicated in the notes: fifty."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence mentions the pineapple’s chromosomes, it doesn’t specify how many it has."),
        C: L("Choice C is incorrect. The sentence indicates that the pineapple has more chromosomes than the melon; it doesn’t specify the exact number of chromosomes the pineapple has."),
        D: L("Choice D is incorrect. The sentence specifies how many chromosomes the melon has, not how many the pineapple has.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-0778b4ac", "0778b4ac", 257)
    },
    {
      id: "rw-rs-622a351d",
      sourceQuestionId: "622a351d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1978, Sámi activists staged protests to block the construction of a dam on the Alta River in Norway.</li><li style=\"margin:.25em 0\">The dam would disrupt Sámi fishing and reindeer herding.</li><li style=\"margin:.25em 0\">The dam was ultimately built, but the Alta conflict had a lasting impact.</li><li style=\"margin:.25em 0\">It brought international attention to the issue of Sámi rights.</li><li style=\"margin:.25em 0\">It led to a set of 2005 legal protections establishing Sámi rights to lands, waters, and resources.</li></ul>",
      stem: "The student wants to make and support a generalization about the Alta conflict. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["During the Alta conflict, Sámi activists staged protests to block the construction of a dam on the Alta River in Norway that would disrupt local fishing and reindeer herding.", "Although the dam that the Sámi activists had protested was ultimately built, the Alta conflict had a lasting impact.", "Sámi rights to lands, waters, and resources received international attention and legal protections as a result of the Alta conflict.", "The Alta conflict had a lasting impact, resulting in international attention and legal protections for Sámi rights to lands, waters, and resources."],
      answer: "D",
      explanation: L("Choice D is the best answer. It makes a generalization—the conflict had a lasting impact—and then supports it with evidence—the attention and protections were results of the conflict."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t make a generalization about the conflict. It describes a specific event from the conflict."),
        B: L("Choice B is incorrect. This choice makes a generalization about the Alta conflict, but doesn’t support it."),
        C: L("Choice C is incorrect. This choice makes a statement about the aftermath of the conflict, but doesn’t support it. The statement is also a little too specific to be a generalization.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-622a351d", "622a351d", 258)
    },
    {
      id: "rw-rs-efa2be4f",
      sourceQuestionId: "efa2be4f",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The meter of a poem is the rhythmic structure or pattern of accents in its lines.</li><li style=\"margin:.25em 0\">Alliterative meter is structured by a pattern of repeated sounds.</li><li style=\"margin:.25em 0\">Quantitative meter is structured by a pattern of long and short syllables.</li><li style=\"margin:.25em 0\">The Old English poem Widsith uses an alliterative meter.</li><li style=\"margin:.25em 0\">The Sanskrit poem Meghadūta uses a quantitative meter.</li></ul>",
      stem: "The student wants to emphasize a difference between the meters of the two poems. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The poem Widsith is written in Old English, but Meghadūta is written in Sanskrit.", "Alliterative meter is a pattern of repeated sounds, but quantitative meter is a rhythmic structure or pattern of accents.", "The Sanskrit poem Meghadūta uses a quantitative meter, while the meter of the Old English poem Widsith uses a pattern of long and short syllables.", "The lines of the poem Meghadūta use a pattern of long and short syllables, whereas Widsith’s lines use a pattern of repeated sounds."],
      answer: "D",
      explanation: L("Choice D is the best answer. Noting that Meghadūta uses a pattern of long and short syllables in its lines (quantitative meter) and Widsith uses a pattern of repeated sounds in its lines (alliterative meter), and signaling a contrast with “whereas, ” the sentence emphasizes a difference between the meters of the two poems."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates that the two poems were written in different languages; it doesn’t emphasize a difference between the meters of the two poems."),
        B: L("Choice B is incorrect. The sentence mentions the meters of the two poems but misrepresents information from the notes; the overall definition of a meter (the rhythmic structure or pattern of accents in a poem’s lines) applies to both alliterative and quantitative meters, not just quantitative."),
        C: L("Choice C is incorrect. While the sentence emphasizes a difference between the meters of the two poems, it misrepresents information from the notes; Widsith uses an alliterative meter, which is structured by a pattern of repeated sounds, not a pattern of long and short syllables.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-efa2be4f", "efa2be4f", 259)
    },
    {
      id: "rw-rs-5645f119",
      sourceQuestionId: "5645f119",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In a 2023 study, environmental scientist Jazmin Locke-Rodriguez and colleagues tested the use of floating treatment wetlands (FTWs) in Florida.</li><li style=\"margin:.25em 0\">FTWs are artificial floating platforms of plants used to remediate polluted or nutrient-imbalanced water.</li><li style=\"margin:.25em 0\">Finding: FTWs using marigold flowers removed 52% more total phosphorus than the control.</li><li style=\"margin:.25em 0\">Finding: The test yielded 65 market-quality blooms per square meter.</li><li style=\"margin:.25em 0\">The authors concluded marigolds showed “promising potential as a commercially viable remediating crop cultivated on FTWs in South Florida.”</li></ul>",
      stem: "The student wants to present the findings of the study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The authors concluded that marigolds grown on FTWs were “commercially viable, ” having produced 65 blooms per square meter of market-quality blooms in a 2023 study.", "In a 2023 study, Locke-Rodriguez and colleagues found that marigolds cultivated on FTWs produced 52% more market-quality flower blooms than the control.", "Locke-Rodriguez and colleagues found that FTWs using marigolds not only helped remove phosphorus from the water but also yielded market-quality blooms.", "FTWs using marigolds, Locke-Rodriguez and colleagues found, yielded 65 flower blooms and removed 52% of phosphorus from the water."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence presents both findings from the study, noting that FTWs using marigolds both removed phosphorus from the water and yielded market-quality blooms."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence presents a finding from the study, the presentation is incomplete; the study found that marigolds cultivated on FTWs both removed phosphorus from the water and yielded market-quality blooms."),
        B: L("Choice B is incorrect. The sentence misrepresents information in the notes. The figure of 52% refers to the amount of phosphorus removed by FTWs using marigolds when compared to the control; the marigolds’ bloom yield was 65 market-quality blooms per square meter, and it was not compared to the control."),
        D: L("Choice D is incorrect. The sentence misrepresents information in the notes. The FTWs using marigolds removed 52% more phosphorus from the water than did the control, not 52% of the total phosphorus. Additionally, the bloom figure is incomplete; the figure is 65 market-quality flower blooms per square meter.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5645f119", "5645f119", 261)
    },
    {
      id: "rw-rs-34e1124f",
      sourceQuestionId: "34e1124f",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In geology, an Aeolian landform is one that has been created by the wind.</li><li style=\"margin:.25em 0\">In Greek mythology, Aeolus is the keeper of the winds.</li><li style=\"margin:.25em 0\">Aeolian landforms are created when the wind erodes, transports, or deposits material.</li><li style=\"margin:.25em 0\">A mushroom rock is a rock formation in which the top is wider than the base.</li><li style=\"margin:.25em 0\">A mushroom rock can be formed when the wind erodes the base and the top at different rates.</li></ul>",
      stem: "The student wants to provide an explanation and an example of Aeolian landforms. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Aeolian landforms are created by different wind-based processes; for example, some are created by wind erosion.", "Aeolian landforms—landforms created by the wind—include the mushroom rock, a rock formation in which the wind erodes the base of the rock faster than the top.", "Erosion, transportation, and deposition are three examples of how the wind can create Aeolian landforms and mushroom rocks.", "A mushroom rock is a rock formation that owes its shape to the wind, a natural force associated with Aeolus in Greek mythology."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence provides an explanation and an example of Aeolian landforms, explaining that they are landforms created by wind and offering the mushroom rock as an example."),
      distractors: {
        A: L("Choice A is incorrect. The sentence explains that Aeolian landforms are created by wind but does not provide an example of any specific Aeolian landforms. Rather, the example it provides is of a wind-based process."),
        C: L("Choice C is incorrect. While the sentence provides a partial explanation of Aeolian landforms, noting that they are created by the wind, it does not effectively provide an example. The sentence seems to indicate that mushroom rocks, rather than being an example of Aeolian landforms, are distinct from them."),
        D: L("Choice D is incorrect. While the sentence provides an explanation of a mushroom rock, which is a specific example of an Aeolian landform, it doesn’t provide an explanation of Aeolian landforms in general.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-34e1124f", "34e1124f", 265)
    },
    {
      id: "rw-rs-7fd39a42",
      sourceQuestionId: "7fd39a42",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Circular particle accelerators known as synchrotrons radiate energy in the form of light.</li><li style=\"margin:.25em 0\">Synchrotron light is among the brightest light ever produced.</li><li style=\"margin:.25em 0\">Synchrotron light is an ideal tool for researchers investigating the structure of matter.</li><li style=\"margin:.25em 0\">The first synchrotron created for the purpose of providing synchrotron light was built in 1968.</li><li style=\"margin:.25em 0\">It was called Tantalus and was housed near the University of Wisconsin–Madison.</li></ul>",
      stem: "The student wants to emphasize the location of the first synchrotron built to provide synchrotron light. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Tantalus, the first synchrotron created for the purpose of providing synchrotron light, was built in 1968.", "Circular particle accelerators known as synchrotrons radiate energy in the form of light, and this light is an ideal tool for researchers investigating the structure of matter.", "The first synchrotron created for the purpose of providing synchrotron light, Tantalus, was housed near the University of Wisconsin–Madison.", "Synchrotron light is among the brightest light ever produced, making it an ideal tool for researchers investigating the structure of matter."],
      answer: "C",
      explanation: L("Choice C is the best answer. After identifying Tantalus as the first synchrotron built to provide light, the sentence emphasizes its location."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence identifies Tantalus as the first synchrotron built to provide light, it doesn’t emphasize (or mention) its location."),
        B: L("Choice B is incorrect. The sentence describes synchrotrons and how researchers use them; it doesn’t emphasize (or mention) the location of Tantalus."),
        D: L("Choice D is incorrect. The sentence describes synchrotron light and how researchers use it; the sentence doesn’t emphasize (or mention) the location of Tantalus.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7fd39a42", "7fd39a42", 266)
    },
    {
      id: "rw-rs-96a86bce",
      sourceQuestionId: "96a86bce",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Cambodia’s Angkor Wat was built in the 1100s to honor the Hindu god Vishnu.</li><li style=\"margin:.25em 0\">It has been a Buddhist temple since the sixteenth century.</li><li style=\"margin:.25em 0\">Decorrelation stretch analysis is a novel digital imaging technique that enhances the contrast between colors in a photograph.</li><li style=\"margin:.25em 0\">Archaeologist Noel Hidalgo Tan applied decorrelation stretch analysis to photographs he had taken of Angkor Wat’s plaster walls.</li><li style=\"margin:.25em 0\">Tan’s analysis revealed hundreds of images unknown to researchers.</li></ul>",
      stem: "The student wants to present Tan’s research to an audience unfamiliar with Angkor Wat. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Tan photographed Angkor Wat’s plaster walls and then applied decorrelation stretch analysis to the photographs.", "Decorrelation stretch analysis is a novel digital imaging technique that Tan used to enhance the contrast between colors in a photograph.", "Using a novel digital imaging technique, Tan revealed hundreds of images hidden on the walls of Angkor Wat, a Cambodian temple.", "Built to honor a Hindu god before becoming a Buddhist temple, Cambodia’s Angkor Wat concealed hundreds of images on its plaster walls."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence effectively presents Tan’s research to an audience unfamiliar with Angkor Wat, explaining the results of the research and identifying Angkor Wat as a temple in Cambodia."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence presents Tan’s research, it fails to explain what Angkor Wat is for an audience unfamiliar with the temple."),
        B: L("Choice B is incorrect. The sentence emphasizes the role that decorrelation stretch analysis played in Tan’s research; it doesn’t present the research, which would require specifying where it was conducted."),
        D: L("Choice D is incorrect. While the sentence explains what Angkor Wat is, it fails to present Tan’s research.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-96a86bce", "96a86bce", 267)
    },
    {
      id: "rw-rs-db3ad406",
      sourceQuestionId: "db3ad406",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Stars form in a galaxy when gravity causes a massive cloud of dust and gas to collapse.</li><li style=\"margin:.25em 0\">A galaxy in a phase of rapid star formation is called a starburst galaxy.</li><li style=\"margin:.25em 0\">Quenching is a process in which a galaxy loses star-forming gas.</li><li style=\"margin:.25em 0\">A galaxy that no longer forms stars is called a quenched galaxy.</li><li style=\"margin:.25em 0\">A quenched galaxy has entered the poststarburst phase.</li></ul>",
      stem: "The student wants to explain what a quenched galaxy is. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Before quenching, a starburst galaxy will form stars at a rapid rate.", "When it becomes quenched, a starburst galaxy enters the poststarburst phase.", "Having entered the poststarburst phase, a quenched galaxy is one that no longer forms stars.", "A starburst galaxy will lose star-forming gas and eventually become quenched."],
      answer: "C",
      explanation: L("Choice C is the best answer. This choice defines a quenched galaxy as “one that no longer forms stars. ”"),
      distractors: {
        A: L("Choice A is incorrect. This choice only describes what happens before quenching."),
        B: L("Choice B is incorrect. This choice only describes what happens after quenching."),
        D: L("Choice D is incorrect. This choice only describes what causes quenching.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-db3ad406", "db3ad406", 268)
    },
    {
      id: "rw-rs-973632d2",
      sourceQuestionId: "973632d2",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In North America, woodlands have expanded into areas that were once grasslands.</li><li style=\"margin:.25em 0\">Thomas Rogers and F . Leland Russell of Wichita State University investigated whether woodland expansion is related to changes in climate.</li><li style=\"margin:.25em 0\">Rogers and Russell analyzed core samples from oak trees on a site that was not wooded in the past and indexed the age of the trees with historical climate data to see if tree populations and climate were correlated.</li><li style=\"margin:.25em 0\">Tree population growth was associated with dry intervals.</li><li style=\"margin:.25em 0\">Droughts may have played a role in woodland expansion.</li></ul>",
      stem: "The student wants to emphasize the aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Thomas Rogers and F . Leland Russell, researchers at Wichita State University, wanted to know if woodland expansion is related to changes in climate.", "Thanks to the work done by Thomas Rogers and F . Leland Russell, we now know that droughts may have played a role in woodland expansion.", "Wichita State University researchers have determined that tree population growth was associated with dry intervals.", "Thomas Rogers and F . Leland Russell analyzed core samples from oak trees on a site that was not wooded in the past, indexing the age of the trees with historical climate data."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence effectively emphasizes the aim, or goal, of the research study (in other words, what the researchers hoped to learn from the study): Rogers and Russell wanted to know if woodland expansion is related to changes in climate."),
      distractors: {
        B: L("Choice B is incorrect. The sentence emphasizes the researchers’ findings; it doesn’t emphasize the aim of the study."),
        C: L("Choice C is incorrect. The sentence emphasizes the results of the study; it doesn’t emphasize the aim."),
        D: L("Choice D is incorrect. The sentence emphasizes the methodology of the study; it doesn’t emphasize the aim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-973632d2", "973632d2", 270)
    },
    {
      id: "rw-rs-d9d314d9",
      sourceQuestionId: "d9d314d9",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Pinnipeds, which include seals, sea lions, and walruses, live in and around water.</li><li style=\"margin:.25em 0\">Pinnipeds are descended not from sea animals but from four-legged, land-dwelling carnivores.</li><li style=\"margin:.25em 0\">Canadian paleobiologist Natalia Rybczynski recently found a fossil with four legs, webbed toes, and the skull and teeth of a seal.</li><li style=\"margin:.25em 0\">Rybczynski refers to her rare find as a “transitional fossil.”</li><li style=\"margin:.25em 0\">The fossil illustrates an early stage in the evolution of pinnipeds from their land-dwelling ancestors.</li></ul>",
      stem: "The student wants to emphasize the fossil’s significance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Canadian paleobiologist Natalia Rybczynski’s fossil has the skull and teeth of a seal, which, like sea lions and walruses, is a pinniped.", "Pinnipeds are descended from four-legged, land-dwelling carnivores; a fossil that resembles both was recently found.", "Having four legs but the skull and teeth of a seal, the rare fossil illustrates an early stage in the evolution of pinnipeds from their land-dwelling ancestors.", "A “transitional fossil” was recently found by paleobiologist Natalia Rybczynski."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence effectively emphasizes the fossil’s significance, explaining that the fossil is rare and illustrates an early stage in the evolution of pinnipeds from their land-dwelling ancestors."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes the fossil Rybczynski found; it doesn’t emphasize the fossil’s significance."),
        B: L("Choice B is incorrect. The sentence mentions that a fossil resembling both pinnipeds and their ancestors was found; it doesn’t emphasize the fossil’s significance."),
        D: L("Choice D is incorrect. The sentence notes a term used to describe the fossil Rybczynski found; it doesn’t emphasize the fossil’s significance.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d9d314d9", "d9d314d9", 274)
    },
    {
      id: "rw-rs-ce282575",
      sourceQuestionId: "ce282575",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">J.R.R. Tolkien’s 1937 novel The Hobbit features two maps.</li><li style=\"margin:.25em 0\">The novel opens with a reproduction of the map that the characters use on their quest.</li><li style=\"margin:.25em 0\">This map introduces readers to the fictional world they are about to enter.</li><li style=\"margin:.25em 0\">The novel closes with a map depicting every stop on the characters’ journey.</li><li style=\"margin:.25em 0\">That map allows readers to reconstruct the story they have just read.</li></ul>",
      stem: "The student wants to contrast the purposes of the two maps in The Hobbit. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Hobbit’s opening map introduces readers to the fictional world they are about to enter, while the closing map allows them to reconstruct the story they have just read.", "The Hobbit, a novel published by J.R.R. Tolkien in 1937, features a reproduction of a map that the characters use on their quest, as well as a map that appears at the end of the novel.", "The Hobbit’s two maps, one opening and one closing the novel, each serve a purpose for readers.", "In 1937, author J.R.R. Tolkien published The Hobbit, a novel featuring both an opening and a closing map."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence contrasts the purposes of the two maps in The Hobbit, noting that the opening map introduces readers to the book’s fictional world, while the closing map helps readers reconstruct the story. The word “while” helps signal a contrast between the purposes of the maps."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence mentions the two maps, it doesn’t contrast the maps’ purposes."),
        C: L("Choice C is incorrect. While the sentence mentions the two maps and notes that each has a purpose, it doesn’t specify what those purposes are or how they contrast."),
        D: L("Choice D is incorrect. While the sentence mentions the two maps, it doesn’t contrast the maps’ purposes.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ce282575", "ce282575", 280)
    },
    {
      id: "rw-rs-e98b1690",
      sourceQuestionId: "e98b1690",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Bike-share programs provide bicycles for shared use.</li><li style=\"margin:.25em 0\">In docked bike sharing, riders rent a bike and return it to designated docking stations.</li><li style=\"margin:.25em 0\">Docked programs are orderly and offer consistency to riders but require significant space and money to implement.</li><li style=\"margin:.25em 0\">In dockless bike sharing, riders locate a bike and leave it wherever they choose.</li><li style=\"margin:.25em 0\">Dockless programs are relatively simple and inexpensive to implement and offer flexibility to riders.</li><li style=\"margin:.25em 0\">Dockless programs can be disorganized.</li></ul>",
      stem: "The student wants to compare some disadvantages of docked and dockless bike-share programs. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Dockless programs can be disorganized; docked programs, on the other hand, offer order and consistency.", "Worth noting is that while dockless programs are relatively easy and inexpensive to implement, they are less flexible than docked programs.", "Docked programs are more resource-intensive than dockless programs, but they avoid some of the latter’s organizational challenges.", "Though dockless programs offer flexibility, docked bike-share programs provide bicycles for shared use."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence compares some disadvantages of docked and dockless bike-share programs, explaining that while docked programs are more resource-intensive (requiring significant space and money), dockless programs have greater organizational challenges."),
      distractors: {
        A: L("Choice A is incorrect. The sentence compares dockless programs to docked programs, noting an advantage of docked programs: they offer order and consistency. It doesn’t compare disadvantages of the two types of programs."),
        B: L("Choice B is incorrect. The sentence compares dockless programs to docked programs, noting an advantage of dockless programs: they are easy and inexpensive to implement. However, it misrepresents information from the notes, stating that dockless programs are less flexible than docked programs. In addition, it doesn’t compare disadvantages of the two types of programs."),
        D: L("Choice D is incorrect. The sentence emphasizes an advantage of dockless programs, then makes a general statement that applies to both types of programs; it doesn’t compare disadvantages of the two types of programs.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e98b1690", "e98b1690", 285)
    },
    {
      id: "rw-rs-1469d23a",
      sourceQuestionId: "1469d23a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Etel Adnan was a Lebanese American poet and artist known for making many leporellos.</li><li style=\"margin:.25em 0\">A leporello is an artist’s book that is folded accordion style.</li><li style=\"margin:.25em 0\">When the book is expanded, the artist’s work is revealed, and its zigzag shape allows it to stand on its own.</li><li style=\"margin:.25em 0\">Her leporello December from My Window (1993) features a panoramic landscape.</li><li style=\"margin:.25em 0\">It is painted using ink and watercolor.</li></ul>",
      stem: "The student wants to describe Adnan’s December from My Window to an audience already familiar with leporellos. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Featuring a panoramic landscape, the 1993 work is one of Adnan’s many leporellos, which are accordion-style folded books that when expanded reveal the artist’s work.", "When expanded, Adnan’s 1993 leporello December from My Window reveals a panoramic landscape painted in ink and watercolor.", "Known for making many other accordion-style folded books called leporellos, Adnan created December from My Window in 1993.", "A leporello, such as Adnan’s December from My Window, is folded accordion style, and due to its zigzag shape it is able to stand on its own when fully expanded."],
      answer: "B",
      explanation: L("Choice B is the best answer. This choice describes Adnan’s December from My Window in a way that assumes the audience is already familiar with leporellos and focuses on the specific features of the work—its content and medium."),
      distractors: {
        A: L("Choice A is incorrect. This choice isn’t suited for an audience already familiar with leporellos. A familiar audience wouldn’t need to have the term defined or explained."),
        C: L("Choice C is incorrect. This choice doesn’t describe Adnan’s December from My Window. It mentions the year and the type of work but not the content or the medium. In addition, it provides a simple definition of leporellos, making this an inappropriate choice for an audience already familiar with leporellos."),
        D: L("Choice D is incorrect. This choice isn’t suited for an audience already familiar with leporellos. A familiar audience wouldn’t need to have the term defined.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-1469d23a", "1469d23a", 291)
    },
    {
      id: "rw-rs-1c60119d",
      sourceQuestionId: "1c60119d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Jacob Lawrence was a US painter best known for The Migration Series (1940–41).</li><li style=\"margin:.25em 0\">The Migration Series portrays scenes from the Great Migration of African Americans from the rural South to cities in the North and Midwest.</li><li style=\"margin:.25em 0\">The series consists of 60 colorful semiabstract paintings, numbered 1 through 60.</li><li style=\"margin:.25em 0\">The odd-numbered paintings are on display at the Phillips Collection in Washington, DC.</li><li style=\"margin:.25em 0\">The even-numbered paintings are on display at the Museum of Modern Art in New York City.</li><li style=\"margin:.25em 0\">Painting #12 depicts people buying tickets in a crowded train station.</li></ul>",
      stem: "The student wants to indicate where to go to view Painting #12 from Lawrence’s Migration Series. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Depicting a crowded train station, Painting #12 from The Migration Series is on display at the Museum of Modern Art in New York City.", "In Painting #12 and the other works of The Migration Series, Lawrence painted African Americans going from the rural South to cities in the North and Midwest.", "To view an even-numbered painting from Lawrence’s Migration Series, such as the one that depicts people buying train tickets, one must go to Washington, DC.", "The 60 colorful semiabstract paintings of Lawrence’s series can be viewed in two places: the Phillips Collection in Washington, DC, and the Museum of Modern Art in New York City."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence indicates where to go to view Painting #12 from Lawrence’s Migration Series, noting that this even-numbered painting is on display at the Museum of Modern Art in New York City."),
      distractors: {
        B: L("Choice B is incorrect. The sentence describes the subject matter of The Migration Series; it doesn’t indicate where to go to view Painting #12."),
        C: L("Choice C is incorrect. The sentence misrepresents information from the notes: even-numbered paintings, such as Painting #12, are on display at the Museum of Modern Art in New York City, not in Washington, DC."),
        D: L("Choice D is incorrect. While the sentence mentions both locations where paintings from the series are displayed, it doesn’t indicate where to go to view Painting #12 specifically.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-1c60119d", "1c60119d", 292)
    },
    {
      id: "rw-rs-19b08ead",
      sourceQuestionId: "19b08ead",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Producing the nutrient-rich cyanobacterium L. maxima at industrial scale requires high-quality samples of L. maxima DNA.</li><li style=\"margin:.25em 0\">Yirlis Yadeth Pineda-Rodriguez and a team of researchers at the University of Córdoba, Colombia, evaluated the quantity and purity of L. maxima DNA extracted using three different DNA extraction kits.</li><li style=\"margin:.25em 0\">CTAB 2X (kit 1) had a DNA yield of 2,134 nanograms per microliter (ng/µL) and a purity ratio of 2.2.</li><li style=\"margin:.25em 0\">Pbact (kit 2) had a DNA yield of 157 ng/µL and a purity ratio of 1.6.</li><li style=\"margin:.25em 0\">Pplant (kit 3) had a DNA yield of 12.5 ng/µL and a purity ratio of 1.5.</li><li style=\"margin:.25em 0\">According to the researchers, Pbact was the most effective because it was the only one with both a sufficiently high yield and a purity rate close to the ideal of 1.8.</li></ul>",
      stem: "The student wants to emphasize the significance of a similarity between two of the kits. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Due to their insufficient yield or purity, CTAB 2X and Pplant were deemed by the researchers to be less effective than Pbact.", "Compared to CTAB 2X, which had a DNA yield of 2,134 ng/µL, both Pbact and Pplant had insufficient yields; Pplant, in particular, was ineffective due to its low yield.", "CTAB 2X and Pplant both had a DNA yield above 10 and a purity ratio above 1.4.", "With the ideal purity ratio being 1.8, CTAB 2X and Pbact were equal in purity, according to the researchers."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the significance of a similarity between CTAB 2X and Pplant, noting that both were deemed less effective than Pbact due to their insufficient yield or purity. According to the notes, the researchers concluded that Pbact was the most effective kit because it was the only one with both a sufficiently high yield and a purity ratio close to 1.8. Since Pbact was the only kit to meet both criteria, it follows that CTAB 2X and Pplant each fell short on at least one critical measure."),
      distractors: {
        B: L("Choice B is incorrect. The sentence presents a similarity between two of the kits (Pbact and Pplant), but in doing so, it misrepresents information from the notes. The researchers deemed Pbact the most effective kit overall, not one with an insufficient yield."),
        C: L("Choice C is incorrect. While the sentence identifies a similarity between CTAB 2X and Pplant (that both had a DNA yield above 10 and a purity ratio above 1.4), it doesn’t emphasize the significance of that similarity."),
        D: L("Choice D is incorrect. The sentence presents a similarity between the CTAB 2X and Pbact kits, but in doing so, it misrepresents information from the notes. CTAB 2X had a purity ratio of 2.2, while Pbact had a purity ratio of 1.6, so they were not equal in purity.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-19b08ead", "19b08ead", 294)
    },
    {
      id: "rw-rs-3ea7372e",
      sourceQuestionId: "3ea7372e",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In the art world, the term biennial traditionally refers to an art exhibition that takes place every two years in a single location.</li><li style=\"margin:.25em 0\">Such biennials are held in New York, Berlin, and Venice.</li><li style=\"margin:.25em 0\">In 2006, artists Ed Gomez and Luis Hernandez founded the unconventional MexiCali Biennial.</li><li style=\"margin:.25em 0\">The MexiCali Biennial hosts exhibitions in different venues on both sides of the US-Mexico border.</li><li style=\"margin:.25em 0\">The MexiCali Biennial has taken place on an uneven schedule, with exhibitions in 2006, 2009–10, 2013, and 2018–20.</li></ul>",
      stem: "The student wants to emphasize a difference between the MexiCali Biennial and traditional biennials. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In 2006, artists Ed Gomez and Luis Hernandez founded the MexiCali Biennial, which has taken place in 2006, 2009–10, 2013, and 2018–20.", "Unlike traditional biennials, the MexiCali Biennial hosts exhibitions in different venues on an uneven schedule.", "The term biennial traditionally refers to an art exhibition that takes place every two years in a single location, not to exhibitions hosted at a variety of times and venues.", "Biennial exhibitions have been held in New York, Berlin, and Venice but also on both sides of the US-Mexico border."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence effectively emphasizes a difference between the MexiCali Biennial and traditional biennials, stating that the MexiCali Biennial is unlike traditional biennials because it hosts exhibitions in different venues on an uneven schedule."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates who founded the MexiCali Biennial and the years this biennial has taken place; it doesn’t emphasize a difference between the MexiCali Biennial and traditional biennials."),
        C: L("Choice C is incorrect. While the sentence clarifies the traditional meaning of biennial with language that could apply to the MexiCali Biennial, it doesn’t mention the MexiCali Biennial by name. Therefore, the sentence doesn’t effectively emphasize a difference between the MexiCali Biennial and traditional biennials."),
        D: L("Choice D is incorrect. The sentence notes locations where various biennial exhibitions have been held; it doesn’t emphasize a difference between the MexiCali Biennial and traditional biennials.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-3ea7372e", "3ea7372e", 295)
    },
    {
      id: "rw-rs-54f29331",
      sourceQuestionId: "54f29331",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The green iguana is a species of reptile.</li><li style=\"margin:.25em 0\">It can be found in Central America and Brazil.</li><li style=\"margin:.25em 0\">The green iguana primarily eats leaves and fruit.</li><li style=\"margin:.25em 0\">It has an average length of 4.8 feet.</li></ul>",
      stem: "The student wants to specify the average length of the green iguana. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The green iguana can be found in Central America.", "The green iguana has an average length of 4.8 feet.", "One species of reptile found in Brazil primarily eats leaves and fruit.", "The green iguana is a reptile that primarily eats leaves and fruit."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence specifies the average length of the green iguana: 4.8 feet."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence provides information about the green iguana, it doesn’t specify the green iguana’s average length."),
        C: L("Choice C is incorrect. The sentence describes the diet of a species of reptile in Brazil; it doesn’t specify the green iguana’s average length."),
        D: L("Choice D is incorrect. While the sentence provides information about the green iguana, it doesn’t specify the green iguana’s average length.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-54f29331", "54f29331", 299)
    },
    {
      id: "rw-rs-28a46cb0",
      sourceQuestionId: "28a46cb0",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The international Slow Food movement was founded in 1989 with the signing of the “Slow Food Manifesto.”</li><li style=\"margin:.25em 0\">The movement promotes universal access to healthy, high-quality food.</li><li style=\"margin:.25em 0\">It calls for sustainable food production practices that protect local environments, ecosystems, and biodiversity.</li><li style=\"margin:.25em 0\">It advocates for fair treatment of and compensation for food production workers.</li><li style=\"margin:.25em 0\">The Slow Food USA organization was founded in 2000.</li></ul>",
      stem: "The student wants to introduce the Slow Food movement to a new audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The international Slow Food movement, founded in 1989, promotes universal access to healthy, high-quality food that is produced sustainably by workers who are treated and compensated fairly.", "The signing of the “Slow Food Manifesto” in 1989 marked the founding of the international Slow Food movement, while the Slow Food USA organization was founded in 2000.", "The Slow Food movement advocates for food production workers.", "Goals of the movement include universal access to healthy, high-quality food and sustainable food practices."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence effectively introduces the Slow Food movement to a new audience, explaining that the movement, which was founded in 1989, promotes universal access to high-quality and healthy food that is produced sustainably by workers who are treated fairly."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence indicates when the international Slow Food movement and the Slow Food USA organization were founded, it doesn’t effectively introduce the movement to a new audience."),
        C: L("Choice C is incorrect. While the sentence notes that the Slow Food movement includes advocacy for food production workers, it doesn’t effectively introduce the movement to a new audience."),
        D: L("Choice D is incorrect. While the sentence describes some of the goals of the Slow Food movement, it doesn’t effectively introduce the movement to a new audience.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-28a46cb0", "28a46cb0", 300)
    },
    {
      id: "rw-rs-259d16ac",
      sourceQuestionId: "259d16ac",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1859, the novel Adam Bede was published in England.</li><li style=\"margin:.25em 0\">According to the novel’s title page, the author’s name was George Eliot.</li><li style=\"margin:.25em 0\">George Eliot was widely assumed to be a pseudonym.</li><li style=\"margin:.25em 0\">A pseudonym is a fake name used to conceal an author’s identity.</li><li style=\"margin:.25em 0\">A woman named Mary Ann Evans later revealed herself as the novel’s real author.</li></ul>",
      stem: "The student wants to identify the real author of Adam Bede. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The real author of Adam Bede was Mary Ann Evans, who published the novel using the pseudonym George Eliot.", "George Eliot, which Adam Bede’s title page indicated was the name of the novel’s author, was widely assumed to be a pseudonym.", "The title page of the novel Adam Bede indicated that the author’s name was George Eliot.", "A woman who had used a pseudonym to conceal her identity later revealed herself as the real author of Adam Bede."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence identifies the novel’s real author, explaining that Mary Ann Evans published the novel under the pseudonym of George Eliot."),
      distractors: {
        B: L("Choice B is incorrect. The sentence explains that George Eliot was assumed to be a pseudonym; it doesn’t identify the novel’s real author."),
        C: L("Choice C is incorrect. The sentence specifies the pseudonym used on the novel’s title page; it doesn’t identify the novel’s real author."),
        D: L("Choice D is incorrect. While the sentence indicates that the novel’s real author used a pseudonym, it doesn’t identify that author as Mary Ann Evans.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-259d16ac", "259d16ac", 301)
    },
    {
      id: "rw-rs-f2f6009b",
      sourceQuestionId: "f2f6009b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Little is known about the life of Wong Fei-hung (1847–1925).</li><li style=\"margin:.25em 0\">He was born near Foshan, China, and gained local recognition as a physician and Hung Ga (also known as Hung Gar) Kung Fu master.</li><li style=\"margin:.25em 0\">He achieved many incredible martial arts feats—some confirmed and some rumored.</li><li style=\"margin:.25em 0\">He has become an internationally known folk hero thanks to his depiction in over a hundred films, television shows, and other media.</li><li style=\"margin:.25em 0\">In the 1991 film Once Upon a Time in China, actor Jet Li portrays Wong Fei-hung using superhuman kung fu abilities to save his community.</li></ul>",
      stem: "The student wants to emphasize the effect media had on building Wong Fei-hung’s legacy. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Thanks to his depiction in over a hundred pieces of media, Wong Fei-hung was locally known as a successful physician and Hung Ga Kung Fu master.", "Though he was known locally during his lifetime, Wong Fei-hung’s later depiction in television, film, and other media has turned him into an internationally known folk hero.", "Various media have depicted Wong Fei-hung, the successful physician and kung fu master who became an internationally known folk hero.", "Wong Fei-hung’s abilities as a kung fu master are depicted in many media, including the 1991 film Once Upon a Time in China."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes the effect media had on building Wong Fei-hung’s legacy, noting that media depictions after his lifetime turned Wong Fei-hung into an internationally known folk hero."),
      distractors: {
        A: L("Choice A is incorrect. While it appears to emphasize the effect of media depictions of Wong Fei-hung, the sentence misrepresents information from the notes. According to the notes, media depictions resulted in Wong Fei-hung becoming an internationally known folk hero, not a locally known physician and kung fu master."),
        C: L("Choice C is incorrect. The sentence discusses Wong Fei-hung’s legacy, noting that he became an internationally known folk hero, but it doesn’t emphasize the effect media had on building that legacy."),
        D: L("Choice D is incorrect. The sentence indicates that Wong Fei-hung has been depicted in many media but doesn’t emphasize the effect of these media depictions on building his legacy.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-f2f6009b", "f2f6009b", 302)
    },
    {
      id: "rw-rs-8d1ddd1b",
      sourceQuestionId: "8d1ddd1b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Ducklings expend up to 62.8% less energy when swimming in a line behind their mother than when swimming alone.</li><li style=\"margin:.25em 0\">The physics behind this energy savings hasn’t always been well understood.</li><li style=\"margin:.25em 0\">Naval architect Zhiming Yuan used computer simulations to study the effect of the mother duck’s wake.</li><li style=\"margin:.25em 0\">The study revealed that ducklings are pushed in a forward direction by the wake’s waves.</li><li style=\"margin:.25em 0\">Yuan determined this push reduces the effect of wave drag on the ducklings by 158%.</li></ul>",
      stem: "The student wants to present the study and its methodology. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["A study revealed that ducklings, which expend up to 62.8% less energy when swimming in a line behind their mother, also experience 158% less drag.", "Seeking to understand how ducklings swimming in a line behind their mother save energy, Zhiming Yuan used computer simulations to study the effect of the mother duck’s wake.", "Zhiming Yuan studied the physics behind the fact that by being pushed in a forward direction by waves, ducklings save energy.", "Naval architect Zhiming Yuan discovered that ducklings are pushed in a forward direction by the waves of their mother’s wake, reducing the effect of drag by 158%."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence presents both the study and its methodology (that is, the researcher’s approach to the problem), explaining that Yuan used computer simulations to study the effect of the mother duck’s wake on the ducklings’ energy expenditure."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes the findings of Yuan’s study; it doesn’t present the study and its methodology."),
        C: L("Choice C is incorrect. While the sentence provides general information about Yuan’s study, it doesn’t present the study’s methodology."),
        D: L("Choice D is incorrect. The sentence describes the findings of Yuan’s study; it doesn’t present the study and its methodology.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-8d1ddd1b", "8d1ddd1b", 303)
    },
    {
      id: "rw-rs-ba263620",
      sourceQuestionId: "ba263620",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1897, African American inventor Andrew Beard invented an automatic coupler.</li><li style=\"margin:.25em 0\">It improved on the existing design of train car couplers.</li><li style=\"margin:.25em 0\">It made the job of connecting train cars safer.</li><li style=\"margin:.25em 0\">In 1938, African American inventor Frederick Jones invented a mobile refrigeration system.</li><li style=\"margin:.25em 0\">It improved on the existing design of food transport trucks.</li><li style=\"margin:.25em 0\">It enabled trucks to carry perishable foods farther.</li></ul>",
      stem: "The student wants to emphasize a similarity between Beard’s invention and Jones’s invention. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Beard’s automatic coupler and Jones’s mobile refrigeration system both improved on existing designs.", "In 1897, Beard invented an automatic coupler, which made the job of connecting train cars safer.", "Beard’s invention made the job of connecting train cars safer, whereas Jones’s invention enabled food transport trucks to carry perishables farther.", "Jones’s mobile refrigeration system, which he invented in 1938, made it possible for food transport trucks to carry perishable foods farther."],
      answer: "A",
      explanation: L("Choice A is the best answer. It compares Beard’s and Jones’s inventions to one another, and emphasizes what they have in common."),
      distractors: {
        B: L("Choice B is incorrect. This choice doesn’t emphasize a similarity. It only mentions Beard’s invention. It doesn’t compare it to Jones’s invention."),
        C: L("Choice C is incorrect. This choice doesn’t emphasize a similarity between the two inventions. Instead, it emphasizes a difference."),
        D: L("Choice D is incorrect. This choice doesn’t emphasize a similarity. It only mentions Jones’s invention. It doesn’t compare it to Beard’s invention.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ba263620", "ba263620", 308)
    },
    {
      id: "rw-rs-b44141cf",
      sourceQuestionId: "b44141cf",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Researchers in a 2021 study wanted to determine the rate at which 17 languages conveyed both information and syllables.</li><li style=\"margin:.25em 0\">They calculated the bits of information conveyed per second (the IR, or information rate).</li><li style=\"margin:.25em 0\">The IR was found to be approximately consistent across the 17 languages (an average of 39 bits per second).</li><li style=\"margin:.25em 0\">They calculated the number of syllables spoken per second (the SR, or syllable rate).</li><li style=\"margin:.25em 0\">Spanish had the second-fastest SR (7.7 syllables per second).</li><li style=\"margin:.25em 0\">Vietnamese had the sixteenth-fastest SR (5.3 syllables per second).</li></ul>",
      stem: "The student wants to present an overview of the study’s findings. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The 2021 study determined the information rate (IR) of 17 languages in bits of information conveyed per second.", "Researchers found that information was conveyed more quickly in Spanish, at 7.7 syllables per second, than in Vietnamese, at 5.3 syllables per second.", "Vietnamese had the sixteenth-fastest syllable rate, lower than that of Spanish, which had the second-fastest; however, Spanish had the lower information rate of the two.", "Though some of the languages differed in number of syllables spoken per second, all 17 conveyed information at roughly the same rate."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence presents an overview of the study’s findings, noting that, for some of the languages (the examples of Spanish and Vietnamese are given in the notes), the number of syllables spoken per second varied, while the amount of information conveyed per second remained roughly constant across all 17 languages."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence describes one of the metrics the study assessed, it doesn’t present any of the study’s findings."),
        B: L("Choice B is incorrect. While the sentence compares specific findings about two of the languages studied, it doesn’t provide an overview of the study’s findings across all 17 languages."),
        C: L("Choice C is incorrect. The sentence compares specific findings about two of the languages studied; it doesn’t provide an overview of the study’s findings across all 17 languages. It also misrepresents the information from the notes about Spanish’s information rate.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-b44141cf", "b44141cf", 313)
    },
    {
      id: "rw-rs-c34d6bff",
      sourceQuestionId: "c34d6bff",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">African American women played prominent roles in the Civil Rights Movement, including at the famous 1963 March on Washington.</li><li style=\"margin:.25em 0\">Civil rights activist Anna Hedgeman, one of the march’s organizers, was a political adviser who had worked for President Truman.</li><li style=\"margin:.25em 0\">Civil rights activist Daisy Bates was a well-known journalist and advocate for school desegregation.</li><li style=\"margin:.25em 0\">Hedgeman worked behind the scenes to make sure a woman was included in the lineup of speakers at the march.</li><li style=\"margin:.25em 0\">Bates was the sole woman to speak, delivering a brief but memorable address to the cheering crowd.</li></ul>",
      stem: "The student wants to compare the two women’s contributions to the March on Washington. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Hedgeman and Bates contributed to the march in different ways; Bates, for example, delivered a brief but memorable address.", "Hedgeman worked in politics and helped organize the march, while Bates was a journalist and school desegregation advocate.", "Although Hedgeman worked behind the scenes to make sure a woman speaker was included, Bates was the sole woman to speak at the march.", "Many African American women, including Bates and Hedgeman, fought for civil rights, but only one spoke at the march."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence compares the two women’s contributions to the march: Hedgeman worked behind the scenes to make sure a woman speaker was included, whereas Bates actually spoke at the event."),
      distractors: {
        A: L("Choice A is incorrect. While it acknowledges that the two women both contributed to the march, it doesn’t indicate what Hedgeman did, so no comparison is made."),
        B: L("Choice B is incorrect. While the sentence provides information about the two women, it doesn’t mention anything about Bates’s contribution to the march."),
        D: L("Choice D is incorrect. While the sentence indicates that the two women both fought for civil rights, it doesn’t compare their individual contributions to the march.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-c34d6bff", "c34d6bff", 314)
    },
    {
      id: "rw-rs-ed80971c",
      sourceQuestionId: "ed80971c",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Pueblo of Zuni is located about 150 miles west of Albuquerque, New Mexico.</li><li style=\"margin:.25em 0\">It is the traditional home of the A:shiwi (Zuni) people.</li><li style=\"margin:.25em 0\">The A:shiwi A:wan Museum and Heritage Center was established by tribal members in 1992.</li><li style=\"margin:.25em 0\">Its mission is stated on its website: “As a tribal museum and heritage center for the Zuni people and by the Zuni people we work to provide learning experiences that emphasize A:shiwi ways of knowing, as well as exploring modern concepts of knowledge and the transfer of knowledge.”</li></ul>",
      stem: "The student wants to emphasize how long the museum has existed. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Pueblo of Zuni is home to the A:shiwi A:wan Museum and Heritage Center, which was founded by tribal members.", "The A:shiwi A:wan Museum and Heritage Center has served the Pueblo of Zuni since 1992.", "According to its website, the A:shiwi A:wan Museum and Heritage Center (founded in the 1990s) works to “emphasize A:shiwi ways of knowing. ”", "Knowledge has been one of the central themes of the A:shiwi A:wan Museum and Heritage Center from its founding."],
      answer: "B",
      explanation: L("Choice B is the best answer. This choice effectively uses information from the notes to emphasize how long the museum has existed. It says that the museum has existed since 1992."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t emphasize how long the museum has existed. It doesn’t say when the museum was founded."),
        C: L("Choice C is incorrect. This choice doesn’t emphasize how long the museum has existed. It doesn’t say the exact date of the museum’s founding. Rather, it emphasizes the museum’s mission."),
        D: L("Choice D is incorrect. This choice doesn’t emphasize how long the museum has existed. It doesn’t say when the museum was founded.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ed80971c", "ed80971c", 320)
    },
    {
      id: "rw-rs-114bbce6",
      sourceQuestionId: "114bbce6",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Earthquakes start at a point called a “focus” and spread out from there as seismic waves.</li><li style=\"margin:.25em 0\">The two types of seismic waves that travel beneath Earth’s surface are primary waves (P waves) and secondary waves (S waves).</li><li style=\"margin:.25em 0\">P waves travel more quickly beneath Earth’s surface than do S waves.</li><li style=\"margin:.25em 0\">P waves compress and expand the ground, causing it to move backward and forward.</li><li style=\"margin:.25em 0\">S waves cause the ground to move from side to side.</li></ul>",
      stem: "The student wants to emphasize a similarity between P waves and S waves. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["P waves and S waves both travel beneath Earth’s surface, causing the ground to move.", "P waves travel away from an earthquake’s starting point at a higher rate of speed than do S waves.", "Spreading out from the focus of an earthquake, P waves move the ground backward and forward.", "Although P waves and S waves start at the same point, they behave very differently."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes a similarity between P waves and S waves, noting that they both travel beneath Earth’s surface, thereby causing the ground to move."),
      distractors: {
        B: L("Choice B is incorrect. The sentence emphasizes a difference between P waves and S waves, noting that P waves travel faster than S waves; it doesn’t emphasize a similarity between the two types of waves."),
        C: L("Choice C is incorrect. The sentence emphasizes how P waves move; it doesn’t emphasize a similarity between P waves and S waves."),
        D: L("Choice D is incorrect. While the sentence acknowledges that P waves and S waves start at the same point, it doesn’t emphasize a similarity; instead, the sentence emphasizes a difference between the two types of waves, noting that they behave very differently.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-114bbce6", "114bbce6", 322)
    },
    {
      id: "rw-rs-13f36b03",
      sourceQuestionId: "13f36b03",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Jon Ching is a Los Angeles-based painter.</li><li style=\"margin:.25em 0\">He uses the term “flauna” to describe the plant-animal hybrids that he depicts in his surreal paintings.</li><li style=\"margin:.25em 0\">“Flauna” is a combination of the words “flora” and “fauna.”</li><li style=\"margin:.25em 0\">His painting Nectar depicts a parrot with leaves for feathers.</li><li style=\"margin:.25em 0\">His painting Primaveral depicts a snow leopard whose fur sprouts flowers.</li></ul>",
      stem: "The student wants to provide an explanation and example of “flauna. ” Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The term “flauna, ” used by Los Angeles-based painter Jon Ching, is a combination of the words “flora” and “fauna. ”", "Jon Ching uses the term “flauna, ” a combination of the words “flora” and “fauna, ” to describe the subjects of his surreal paintings: plant-animal hybrids such as a parrot with leaves for feathers.", "Jon Ching, who created Nectar, refers to the subjects of his paintings as “flauna. ”", "The subjects of Nectar and Primaveral are types of “flauna, ” a term that the paintings’ creator, Jon Ching, uses when describing his surreal artworks."],
      answer: "B",
      explanation: L("Choice B is the best answer because it provides both an explanation and an example of “flauna. ” The sentence explains that flauna, a combination of the words “flora” and “fauna, ” is a term used by Jon Ching to describe the plant-animal hybrids in his paintings. The sentence also mentions an example of Ching’s flauna: a parrot with leaves for feathers."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence partially explains what “flauna” is, it doesn’t provide a full explanation or specific example of Ching’s flauna."),
        C: L("Choice C is incorrect. While the sentence partially explains what “flauna” is and includes a title of a Ching painting, it doesn’t provide a full explanation or specific example of Ching’s flauna."),
        D: L("Choice D is incorrect. While the sentence partially explains what “flauna” is and includes the titles of two Ching paintings, it doesn’t provide a full explanation of Ching’s flauna.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-13f36b03", "13f36b03", 324)
    },
    {
      id: "rw-rs-ec03f090",
      sourceQuestionId: "ec03f090",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">A sestina is a thirty-nine-line poetic form.</li><li style=\"margin:.25em 0\">Each line of the poem ends with one of six end words, which alternate according to a set pattern.</li><li style=\"margin:.25em 0\">“Forage Sestina” is a sestina by Marilyn Hacker.</li><li style=\"margin:.25em 0\">Its end words are words, structure, wire, beam, wall, and room.</li><li style=\"margin:.25em 0\">“Towards Autumn” is a sestina by Marilyn Hacker.</li><li style=\"margin:.25em 0\">Its end words are daughter, friend, bread, mother, lover, and myself.</li></ul>",
      stem: "The student wants to use one of the poems to illustrate the sestina form. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Hacker employs the sestina, a poetic form with thirty-nine lines and six end words, in both “Forage Sestina” and “Towards Autumn. ”", "As a sestina, “Towards Autumn” contains thirty-nine lines and six end words—in this case, daughter, friend, bread, mother, lover, and myself— that alternate in a set pattern.", "The thirty-nine-line sestina form uses the words daughter, friend, bread, mother, lover, and myself, which are found in the poem “Forage Sestina. ”", "Hacker has used the sestina form multiple times, as in “Towards Autumn, ” which contains these six words: words, structure, wire, beam, wall, and room."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence uses the poem \"Towards Autumn\" to illustrate the form of a sestina, explaining that a sestina’s thirty-nine lines all end in one of six alternating words and showcasing that poem’s specific end words."),
      distractors: {
        A: L("Choice A is incorrect. The sentence identifies both of Hacker’s poems as sestinas; it doesn’t use one of the poems to illustrate the form of a sestina."),
        C: L("Choice C is incorrect. While the sentence appears to use the poem \"Forage Sestina\" to illustrate a feature of the sestina form, it misrepresents the information in the notes. According to the notes, \"Forage Sestina\" doesn’t use these six end words; it uses six other words instead."),
        D: L("Choice D is incorrect. While the sentence uses the poem \"Towards Autumn\" as an example of one of Hacker’s sestinas, it misrepresents the information in the notes. According to the notes, \"Towards Autumn\" doesn’t use these six end words; it uses six other words instead.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-ec03f090", "ec03f090", 325)
    },
    {
      id: "rw-rs-a86c0b1b",
      sourceQuestionId: "a86c0b1b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Ancient Native American and Australian Aboriginal cultures described the Pleiades star cluster as having seven stars.</li><li style=\"margin:.25em 0\">It was referred to as the Seven Sisters in the mythology of ancient Greece.</li><li style=\"margin:.25em 0\">Today, the cluster appears to have only six stars.</li><li style=\"margin:.25em 0\">Two of the stars have moved so close together that they now appear as one.</li></ul>",
      stem: "The student wants to specify the reason the Pleiades’ appearance changed. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Ancient Native American and Australian Aboriginal cultures described the Pleiades, which was referred to in Greek mythology as the Seven Sisters, as having seven stars.", "Although once referred to as the Seven Sisters, the Pleiades appears to have only six stars today.", "In the time since ancient cultures described the Pleiades as having seven stars, two of the cluster’s stars have moved so close together that they now appear as one.", "The Pleiades has seven stars, but two are so close together that they appear to be a single star."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence specifies the reason the Pleiades’ appearance changed, noting that two of the cluster’s stars have moved so close together that they now appear as one star."),
      distractors: {
        A: L("Choice A is incorrect. The sentence specifies how ancient Native American and Australian Aboriginal cultures described the Pleiades; it doesn’t specify the reason the Pleiades’ appearance changed."),
        B: L("Choice B is incorrect. The sentence describes the appearance of the Pleiades today; it doesn’t specify the reason the Pleiades’ appearance changed."),
        D: L("Choice D is incorrect. The sentence explains why two of the Pleiades’ stars appear to be a single star; it doesn’t specify the reason the Pleiades’ appearance changed.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-a86c0b1b", "a86c0b1b", 327)
    },
    {
      id: "rw-rs-eaded344",
      sourceQuestionId: "eaded344",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The painter Frida Kahlo is one of the most influential artists of the twentieth century.</li><li style=\"margin:.25em 0\">She was born in Coyoacán, Mexico, in 1907.</li><li style=\"margin:.25em 0\">She is best known for her vivid and richly symbolic self-portraits.</li><li style=\"margin:.25em 0\">The Two Fridas (1939) features two versions of Kahlo sitting together.</li><li style=\"margin:.25em 0\">One version wears a European-style dress and the other a traditional Tehuana dress.</li></ul>",
      stem: "The student wants to introduce Kahlo to an audience unfamiliar with the artist. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Known for being vivid and richly symbolic, Frida Kahlo’s self-portraits include The Two Fridas (1939).", "The 1939 painting The Two Fridas is one example of a self-portrait by Frida Kahlo.", "One painting by Frida Kahlo features two versions of herself, with one version wearing a European-style dress and the other a traditional Tehuana dress.", "One of the most influential artists of the twentieth century, Mexican painter Frida Kahlo is best known for her self-portraits, which are vivid and richly symbolic."],
      answer: "D",
      explanation: L("Choice D is the best answer. By identifying Kahlo as an influential artist from Mexico, and by describing the work she’s best known for, this choice provides the background information necessary to introduce Kahlo to an unfamiliar audience."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t effectively introduce Kahlo. It doesn’t include any background information about who Kahlo is or where she’s from. It simply identifies one of her paintings."),
        B: L("Choice B is incorrect. This choice doesn’t effectively introduce Kahlo. It doesn’t include any background information about who Kahlo is or where she’s from. It simply identifies one of her paintings."),
        C: L("Choice C is incorrect. This choice doesn’t effectively introduce Kahlo. It doesn’t include any background information about who Kahlo is or where she’s from. Instead, it describes one of her paintings in detail.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-eaded344", "eaded344", 328)
    },
    {
      id: "rw-rs-e2eb70b9",
      sourceQuestionId: "e2eb70b9",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Traditionally, manufacturers have dyed denim jeans blue by dipping them in a solution containing indigo powder.</li><li style=\"margin:.25em 0\">Indigo doesn’t dissolve in just water, so manufacturers must mix hazardous chemicals with water to dissolve the powder.</li><li style=\"margin:.25em 0\">Textile researcher Smriti Rai discovered a process for dyeing blue jeans without chemicals.</li><li style=\"margin:.25em 0\">Rai added indigo powder to a hydrogel containing nanocellulose and produced a dye that could be spread directly onto the denim.</li><li style=\"margin:.25em 0\">Nanocellulose is a natural, plant-based substance that separates the molecules of indigo powder.</li></ul>",
      stem: "The student wants to emphasize a difference between the two approaches to dyeing blue jeans. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Though created using a different process, Rai’s dye contains the same ingredient as the dye produced by blue jean manufacturers.", "Nanocellulose is a natural, plant-based substance that separates the molecules of indigo powder, which doesn’t dissolve in water.", "The traditional approach to dyeing blue jeans is to dip them in a solution containing hazardous chemicals.", "Rai’s approach substitutes a natural, plant-based substance for the hazardous chemicals that manufacturers have traditionally used."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes a difference between the two approaches to dyeing blue jeans, noting that Rai’s approach uses a natural, plant-based substance in place of hazardous chemicals."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes a similarity between the dyes used in the two approaches, noting that the dyes contain the same ingredient; it doesn’t emphasize a difference between the two approaches to dyeing blue jeans."),
        B: L("Choice B is incorrect. The sentence explains what nanocellulose is; it doesn’t emphasize a difference between the two approaches to dyeing blue jeans."),
        C: L("Choice C is incorrect. The sentence explains the traditional approach to dyeing blue jeans; it doesn’t emphasize a difference between the traditional approach and Rai’s approach.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e2eb70b9", "e2eb70b9", 329)
    },
    {
      id: "rw-rs-c40a1964",
      sourceQuestionId: "c40a1964",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Leigh Torres is a marine ecologist.</li><li style=\"margin:.25em 0\">She conducted a study of blue whales in New Zealand’s South Taranaki Bight region.</li><li style=\"margin:.25em 0\">She wanted to know how ocean temperature affects where the whales forage for krill in that region.</li><li style=\"margin:.25em 0\">She found that during a marine heat wave, the whales foraged farther offshore than they had during cooler periods.</li><li style=\"margin:.25em 0\">The offshore waters, which were colder than areas closer to shore, had a higher relative abundance of krill.</li></ul>",
      stem: "The student wants to emphasize the aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Analyzing ocean temperature data, Torres found that during a marine heat wave, blue whales foraged farther offshore than they had during cooler periods.", "In her study, Torres sought to determine how ocean temperature affects where blue whales forage for krill in the South Taranaki Bight region.", "Torres’s study revealed that blue whales were attracted to offshore waters with a relatively high abundance of krill.", "Torres, a marine ecologist, studied blue whales in the South Taranaki Bight region, where the whales forage."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes the aim, or goal, of the research study, noting that Torres sought to determine how ocean temperature affects where blue whales forage for krill."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes the results of the study, noting what Torres found at the end; it doesn’t emphasize the aim, or goal, of the study, which is what Torres sought at the beginning."),
        C: L("Choice C is incorrect. The sentence makes a claim about the study’s results; it doesn’t emphasize the aim, or goal, of the study."),
        D: L("Choice D is incorrect. The sentence indicates the location of Torres’s study; it doesn’t emphasize the aim, or goal, of the study.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-c40a1964", "c40a1964", 330)
    },
    {
      id: "rw-rs-86b78078",
      sourceQuestionId: "86b78078",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Samuel Selvon was a Trinidadian author.</li><li style=\"margin:.25em 0\">The Lonely Londoners is one of his most celebrated novels.</li><li style=\"margin:.25em 0\">Selvon published the novel in 1956.</li><li style=\"margin:.25em 0\">It is about a group of men who emigrate from the Caribbean to Great Britain after World War II.</li><li style=\"margin:.25em 0\">Some of The Lonely Londoners’ characters also appear in Selvon’s later novel Moses Ascending.</li></ul>",
      stem: "The student wants to introduce Samuel Selvon and his novel The Lonely Londoners to a new audience. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In 1956, Trinidadian author Samuel Selvon published one of his most celebrated novels, The Lonely Londoners, which is about a group of men who emigrate from the Caribbean to Great Britain after World War II.", "Samuel Selvon wrote the novel Moses Ascending after he wrote The Lonely Londoners.", "The Lonely Londoners, a celebrated novel that was published in 1956, depicts post–World War II Caribbean migration from the perspective of a Trinidadian author.", "Some of the characters who appear in Samuel Selvon’s Moses Ascending also appear in The Lonely Londoners."],
      answer: "A",
      explanation: L("Choice A is the best answer. By noting that Selvon is a Trinidadian author and indicating that The Lonely Londoners, published in 1956, is about a group of men who emigrate from the Caribbean to Great Britain after World War II, the sentence effectively introduces Samuel Selvon and his novel to a new audience."),
      distractors: {
        B: L("Choice B is incorrect. The sentence indicates the order in which two of Selvon’s novels were written; it doesn’t introduce Samuel Selvon and The Lonely Londoners to a new audience."),
        C: L("Choice C is incorrect. While the sentence describes the novel The Lonely Londoners, it doesn’t mention its author, Samuel Selvon, by name and thus doesn’t effectively introduce him to a new audience."),
        D: L("Choice D is incorrect. The sentence indicates that two of Selvon’s novels include the same characters; it doesn’t introduce Samuel Selvon and The Lonely Londoners to a new audience.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-86b78078", "86b78078", 332)
    },
    {
      id: "rw-rs-4f9ee1dc",
      sourceQuestionId: "4f9ee1dc",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Seven species of sea turtle exist today.</li><li style=\"margin:.25em 0\">Five sea turtle species can be found in the Atlantic Ocean.</li><li style=\"margin:.25em 0\">One of those species is the Kemp’s ridley sea turtle.</li><li style=\"margin:.25em 0\">Its scientific name is Lepidochelys kempii.</li><li style=\"margin:.25em 0\">Another of those species is the olive ridley sea turtle.</li><li style=\"margin:.25em 0\">Its scientific name is Lepidochelys olivacea.</li></ul>",
      stem: "The student wants to emphasize a similarity between the two sea turtle species. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Among the seven species of sea turtle is the olive ridley sea turtle, which can be found in the Atlantic Ocean.", "The Kemp’s ridley sea turtle is referred to as Lepidochelys kempii, while the olive ridley sea turtle is referred to as Lepidochelys olivacea.", "Both the Kemp’s ridley sea turtle and the olive ridley sea turtle can be found in the Atlantic Ocean.", "The Kemp’s ridley sea turtle (Lepidochelys kempii) and the olive ridley sea turtle (Lepidochelys olivacea) are different species."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes a similarity between the two sea turtle species: both can be found in the Atlantic Ocean."),
      distractors: {
        A: L("Choice A is incorrect. The sentence indicates that the olive ridley sea turtle is one of seven species of sea turtle; it fails to mention the Kemp’s ridley sea turtle."),
        B: L("Choice B is incorrect. The sentence emphasizes a difference between the two sea turtle species rather than a similarity."),
        D: L("Choice D is incorrect. The sentence emphasizes a difference between the two sea turtle species rather than a similarity.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-4f9ee1dc", "4f9ee1dc", 333)
    },
    {
      id: "rw-rs-bb43fc3c",
      sourceQuestionId: "bb43fc3c",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Pedestrian malls are outdoor streets in a city or town where vehicle traffic is prohibited.</li><li style=\"margin:.25em 0\">Many pedestrian malls were built in the 19th and 20th centuries in Europe and Asia.</li><li style=\"margin:.25em 0\">Qianmen Dajie is a famous pedestrian mall in Beijing.</li><li style=\"margin:.25em 0\">It has existed since the Ming dynasty (1368–1644 CE).</li><li style=\"margin:.25em 0\">Rue Mouffetard is a famous pedestrian mall in Paris.</li><li style=\"margin:.25em 0\">It has existed since the mid-Roman Empire (117–235 CE).</li></ul>",
      stem: "The student wants to emphasize a similarity between the ages of the malls. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Qianmen Dajie pedestrian mall has roots as far back as the Ming dynasty; likewise, Rue Mouffetard has existed for centuries.", "Both Qianmen Dajie and Rue Mouffetard are famous pedestrian malls, the former in Beijing and the latter in Paris.", "Qianmen Dajie and Rue Mouffetard are pedestrian malls, outdoor streets closed to vehicle traffic.", "Qianmen Dajie and Rue Mouffetard are examples of pedestrian malls, which proliferated in Europe in the 19th and 20th centuries."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes a similarity between the ages of the two pedestrian malls, noting that both are relatively old—Qianmen Dajie has roots that go back hundreds of years and Rue Mouffetard has existed for centuries."),
      distractors: {
        B: L("Choice B is incorrect. The sentence emphasizes that both locations are famous pedestrian malls and notes that they are in different locations; it doesn’t emphasize a similarity in their ages."),
        C: L("Choice C is incorrect. While the sentence emphasizes that both locations are pedestrian malls, it doesn’t emphasize a similarity in their ages."),
        D: L("Choice D is incorrect. The sentence explains that Qianmen Dajie and Rue Mouffetard are examples of pedestrian malls and gives information about pedestrian malls in general; it doesn’t emphasize a similarity in the ages of these two malls specifically.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-bb43fc3c", "bb43fc3c", 339)
    },
    {
      id: "rw-rs-2c7dced2",
      sourceQuestionId: "2c7dced2",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Sister Rosetta Tharpe (1915–1973) was a gospel musician.</li><li style=\"margin:.25em 0\">She was known for her passionate vocals and electric guitar performances.</li><li style=\"margin:.25em 0\">In 2018, Tharpe was inducted into the Rock and Roll Hall of Fame for her major impact on the genre.</li><li style=\"margin:.25em 0\">According to songwriter Roxie Moore, “[Tharpe] would sing until you cried and then she would sing until you danced for joy.”</li><li style=\"margin:.25em 0\">According to guitarist Celisse Henderson, “Tharpe is the unquestioned founding mother of rock ’n’ roll.”</li></ul>",
      stem: "The student wants to use a quotation to support a claim about Tharpe’s contribution to rock ’n’ roll. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Gospel musician Sister Rosetta Tharpe had a major impact on rock ’n’ roll, and she was known for her passionate electric guitar performances.", "Celisse Henderson believes that Sister Rosetta Tharpe had a major impact on the development of rock ’n’ roll.", "Sister Rosetta Tharpe had such a major impact on rock ’n’ roll that Celisse Henderson called her “the unquestioned founding mother” of the genre.", "A gospel musician, Sister Rosetta Tharpe had the ability to “sing until you cried” and also “until you danced for joy, ” according to Roxie Moore."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence uses the quotation from Henderson to support a claim about Tharpe’s contribution to rock ’n’ roll, noting that the impact Tharpe had on the genre led Henderson to call her \"the unquestioned founding mother of rock ’n’ roll. \""),
      distractors: {
        A: L("Choice A is incorrect. While the sentence makes the claim that Tharpe had a major impact on rock ’n’ roll, it doesn’t use a quotation to support this claim."),
        B: L("Choice B is incorrect. The sentence presents Henderson’s opinion that Tharpe had a major impact on rock ’n’ roll, but it doesn’t use a quotation to support this claim."),
        D: L("Choice D is incorrect. While the sentence includes a quotation about audience reactions to Tharpe’s music, the sentence describes Tharpe as a gospel musician; it doesn’t support a claim about her contribution to rock ’n’ roll.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-2c7dced2", "2c7dced2", 340)
    },
    {
      id: "rw-rs-b0620764",
      sourceQuestionId: "b0620764",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Phobetor, a name drawn from Greek mythology, is an exoplanet that orbits the star PSR B1257+12, also known as Lich.</li><li style=\"margin:.25em 0\">Phobetor’s mass is 0.01 times that of Jupiter, or 0.01 Jupiter masses.</li><li style=\"margin:.25em 0\">Mastika, which means “gem” or “jewel” in Malay, is an exoplanet that orbits the star HD 179949, also known as Gumala.</li><li style=\"margin:.25em 0\">Mastika’s mass is 0.92 Jupiter masses.</li></ul>",
      stem: "The student wants to make and support a generalization about exoplanets. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Exoplanets that are named Phobetor orbit Lich, and those that are named Mastika orbit Gumala.", "Even though Phobetor and Mastika are both exoplanets, their masses are different: Phobetor’s mass is 0.01 Jupiter masses, and Mastika’s is 0.92 Jupiter masses.", "Many stars have both a designation and a proper name; for instance, PSR B1257+12 is also known as Lich, and HD 179949 is also known as Gumala.", "Exoplanet names have diverse origins, a fact that can be seen in the cases of Phobetor, a name drawn from Greek mythology, and Mastika, which means “gem” or “jewel” in Malay."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence makes and supports a generalization about exoplanets, noting that the names of exoplanets have diverse origins and supporting this with the examples of the origins of \"Phobetor\" and \"Mastika. \""),
      distractors: {
        A: L("Choice A is incorrect. The sentence misrepresents information from the notes, implying that there are multiple exoplanets with the same names. Additionally, the sentence provides no support for its generalization."),
        B: L("Choice B is incorrect. The sentence contrasts the masses of two specific exoplanets; it doesn’t make and support a generalization about exoplanets."),
        C: L("Choice C is incorrect. The sentence makes and supports a generalization about stars, not exoplanets.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-b0620764", "b0620764", 341)
    },
    {
      id: "rw-rs-e3484c07",
      sourceQuestionId: "e3484c07",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Bioluminescence is the emission of light by living organisms.</li><li style=\"margin:.25em 0\">This light is produced by chemical reactions in organisms’ cells.</li><li style=\"margin:.25em 0\">Jellyfish emit flashes of blue light.</li><li style=\"margin:.25em 0\">This behavior serves to startle predators.</li><li style=\"margin:.25em 0\">Black dragonfish emit a steady red light.</li><li style=\"margin:.25em 0\">This behavior helps them locate prey in deep waters.</li></ul>",
      stem: "The student wants to emphasize a difference between the behavior of jellyfish and that of black dragonfish. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Both jellyfish and black dragonfish are organisms that emit light, which is produced by chemical reactions in these organisms’ cells.", "Black dragonfish emit a steady red light, which helps them locate prey in deep waters.", "Bioluminescence, the emission of light by living organisms, results from chemical reactions in organisms’ cells.", "Jellyfish emit light to startle predators, whereas black dragonfish do so to locate prey."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes a difference between the behavior of jellyfish and that of black dragonfish, noting that jellyfish and black dragonfish emit light as part of different behaviors (protection and predation, respectively)."),
      distractors: {
        A: L("Choice A is incorrect. The sentence emphasizes a similarity between jellyfish and black dragonfish; it doesn’t emphasize a difference between the behavior of the two animals."),
        B: L("Choice B is incorrect. The sentence emphasizes the type of bioluminescence exhibited by black dragonfish, noting that it’s used in predation; it doesn’t emphasize a difference between the behavior of the two animals."),
        C: L("Choice C is incorrect. The sentence defines bioluminescence and explains how it works; the sentence doesn’t mention either animal or emphasize a difference between them.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e3484c07", "e3484c07", 342)
    },
    {
      id: "rw-rs-e887dab1",
      sourceQuestionId: "e887dab1",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">“Organ 2 /ASLSP (As Slow as Possible)” is a musical piece by avant-garde composer John Cage.</li><li style=\"margin:.25em 0\">A specially designed automated organ in St. Burchardi Church in Halberstadt, Germany, began playing the piece in 2001.</li><li style=\"margin:.25em 0\">It is scheduled to stop playing the piece in 2640.</li><li style=\"margin:.25em 0\">The performance will last 639 years.</li><li style=\"margin:.25em 0\">It will be the longest continuous musical performance in history.</li></ul>",
      stem: "The student wants to indicate how long John Cage’s musical piece will last. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["John Cage is the composer of the musical piece “Organ 2 /ASLSP (As Slow as Possible). ”", "“Organ 2 /ASLSP (As Slow as Possible)” is a musical piece currently being played in St. Burchardi Church in Halberstadt, Germany.", "Lasting 639 years, John Cage’s musical piece will be the longest continuous musical performance in history.", "An organ in St. Burchardi Church in Halberstadt, Germany, began playing a musical piece by avant-garde composer John Cage."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence indicates how long John Cage’s musical piece will last, noting that it will last 639 years and be the longest continuous musical performance in history."),
      distractors: {
        A: L("Choice A is incorrect. The sentence identifies John Cage as the composer and provides the name of the musical piece; it doesn’t indicate how long the piece will last."),
        B: L("Choice B is incorrect. The sentence provides the name of the musical piece and where it is currently being played; it doesn’t indicate how long the piece will last."),
        D: L("Choice D is incorrect. The sentence mentions where the musical piece is being played and identifies John Cage as the composer; it doesn’t indicate how long the piece will last.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e887dab1", "e887dab1", 344)
    },
    {
      id: "rw-rs-5a5e22b5",
      sourceQuestionId: "5a5e22b5",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Gravitational waves are powerful ripples that originate in deep space and eventually pass through Earth.</li><li style=\"margin:.25em 0\">The Laser Interferometer Gravitational Wave Observatory (LIGO) is a physics study that began in 2002.</li><li style=\"margin:.25em 0\">LIGO’s goal is to detect and analyze gravitational waves.</li><li style=\"margin:.25em 0\">LIGO uses a pair of massive gravitational wave detectors called interferometers that are thousands of miles apart.</li><li style=\"margin:.25em 0\">In 2015, for the first time in history, LIGO researchers detected a gravitational wave passing through Earth.</li></ul>",
      stem: "The student wants to present LIGO’s aim and methodology. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In 2015, LIGO’s massive interferometers detected a powerful ripple that originated in deep space and eventually passed through Earth.", "Though the physics study LIGO began in 2002, its massive interferometers didn’t detect a gravitational wave until 2015.", "To achieve its aims, LIGO uses a pair of massive interferometers that are thousands of miles apart.", "A physics study designed to detect and analyze gravitational waves, LIGO uses a pair of massive interferometers that are thousands of miles apart."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence effectively presents the LIGO study’s aim, noting that it is designed to detect and analyze gravitational waves, and its methodology (it uses two interferometers to detect the waves)."),
      distractors: {
        A: L("Choice A is incorrect. The sentence describes a finding from the LIGO study; it doesn’t effectively present the study’s aim or its methodology."),
        B: L("Choice B is incorrect. The sentence provides background information about the LIGO study’s timeline; it doesn’t effectively present the study’s aim or its methodology."),
        C: L("Choice C is incorrect. The sentence touches on LIGO’s methodology, noting that it uses two interferometers, but doesn’t indicate what the study’s aims are.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5a5e22b5", "5a5e22b5", 345)
    },
    {
      id: "rw-rs-bc56170b",
      sourceQuestionId: "bc56170b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Most, but not all, of the Moon’s oxygen comes from the Sun, via solar wind.</li><li style=\"margin:.25em 0\">Cosmochemist Kentaro Terada from Osaka University wondered if some of the unaccounted-for oxygen could be coming from Earth.</li><li style=\"margin:.25em 0\">In 2008, he analyzed data from the Japanese satellite Kaguya.</li><li style=\"margin:.25em 0\">Kaguya gathered data about gases and particles it encountered while orbiting the Moon.</li><li style=\"margin:.25em 0\">Based on the Kaguya data, Terada confirmed his suspicion that Earth is sending oxygen to the Moon.</li></ul>",
      stem: "The student wants to emphasize the aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["As it orbited the Moon, the Kaguya satellite collected data that was later analyzed by cosmochemist Kentaro Terada.", "Before 2008, Kentaro Terada wondered if the Moon was receiving some of its oxygen from Earth.", "Cosmochemist Kentaro Terada set out to determine whether some of the Moon’s oxygen was coming from Earth.", "Kentaro Terada’s study determined that Earth is sending a small amount of oxygen to the Moon."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes the aim, or goal, of the research study, noting what Terada set out to do: determine whether some of the Moon’s oxygen was coming from Earth."),
      distractors: {
        A: L("Choice A is incorrect. The sentence focuses on how the Kaguya satellite collected data; it doesn’t emphasize the aim of the research study."),
        B: L("Choice B is incorrect. While the sentence mentions what Terada was curious about before conducting the research study, it doesn’t emphasize his study’s aim."),
        D: L("Choice D is incorrect. The sentence presents the research study’s conclusion; it doesn’t emphasize the study’s aim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-bc56170b", "bc56170b", 346)
    },
    {
      id: "rw-rs-d7f31e68",
      sourceQuestionId: "d7f31e68",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Annie Wu is a prominent American flutist who graduated from the New England Conservatory.</li><li style=\"margin:.25em 0\">She has won multiple national flute competitions.</li><li style=\"margin:.25em 0\">She is best known for a 2011 YouTube video that has been viewed over two million times.</li><li style=\"margin:.25em 0\">The video shows her performing Three Beats for Beatbox Flute, an original work by composer Greg Pattillo.</li><li style=\"margin:.25em 0\">Wu combines flute playing and beatboxing in the video.</li></ul>",
      stem: "The student wants to emphasize Wu’s most well-known achievement. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Annie Wu, who has won multiple national flute competitions, has also combined flute playing and beatboxing.", "Among her many achievements, prominent American flutist Annie Wu graduated from the New England Conservatory and has won multiple national flute competitions.", "Annie Wu is best known for a 2011 YouTube video performance of Three Beats for Beatbox Flute that has been viewed over two million times.", "Composer Greg Pattillo’s original work Three Beats for Beatbox Flute combines flute playing and beatboxing."],
      answer: "C",
      explanation: L("Choice C is the best answer. This describes the achievement for which Wu is best known."),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t emphasize Wu’s most well-known achievement. It mentions some of her general achievements, but not the one for which she is “best known. ”"),
        B: L("Choice B is incorrect. This choice doesn’t emphasize Wu’s most well-known achievement—it describes several of her achievements equally."),
        D: L("Choice D is incorrect. This choice doesn’t emphasize Wu’s most well-known achievement. It describes a piece of music featured in her most well-known achievement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d7f31e68", "d7f31e68", 347)
    },
    {
      id: "rw-rs-6351062d",
      sourceQuestionId: "6351062d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In the late 1890s, over 14,000 unique varieties of apples were grown in the US.</li><li style=\"margin:.25em 0\">The rise of industrial agriculture in the mid-1900s narrowed the range of commercially grown crops.</li><li style=\"margin:.25em 0\">Thousands of apple varieties considered less suitable for commercial growth were lost.</li><li style=\"margin:.25em 0\">Today, only 15 apple varieties dominate the market, making up 90% of apples purchased in the US.</li><li style=\"margin:.25em 0\">The Lost Apple Project, based in Washington State, attempts to find and grow lost apple varieties.</li></ul>",
      stem: "The student wants to emphasize the decline in unique apple varieties in the US and specify why this decline occurred. Which choice most effectively uses relevant information from the notes to accomplish these goals?",
      options: ["The Lost Apple Project is dedicated to finding some of the apple varieties lost following a shift in agricultural practices in the mid-1900s.", "While over 14,000 apple varieties were grown in the US in the late 1890s, only 15 unique varieties make up most of the apples sold today.", "Since the rise of industrial agriculture, US farmers have mainly grown the same few unique apple varieties, resulting in the loss of thousands of varieties less suitable for commercial growth.", "As industrial agriculture rose to prominence in the mid-1900s, the number of crops selected for cultivation decreased dramatically."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence emphasizes the decline in unique apple varieties in the US and specifies why this decline occurred, noting that thousands of apple varieties were lost because US farmers started mainly growing the same few unique varieties."),
      distractors: {
        A: L("Choice A is incorrect. The sentence introduces the Lost Apple Project; it doesn’t emphasize the decline in unique apple varieties in the US and specify why this decline occurred."),
        B: L("Choice B is incorrect. While the sentence emphasizes the decline in unique apple varieties in the US, it doesn’t explain why this decline occurred."),
        D: L("Choice D is incorrect. The sentence emphasizes the general decline of crop varieties in the mid-1900s; it doesn’t emphasize the specific decline in unique apple varieties in the US.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-6351062d", "6351062d", 348)
    },
    {
      id: "rw-rs-5bb7dc03",
      sourceQuestionId: "5bb7dc03",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Started in 1925, the Scripps National Spelling Bee is a US-based spelling competition.</li><li style=\"margin:.25em 0\">The words used in the competition have diverse linguistic origins.</li><li style=\"margin:.25em 0\">In 2008, Sameer Mishra won by correctly spelling the word “guerdon.”</li><li style=\"margin:.25em 0\">“Guerdon” derives from the Anglo-French word “guerdun.”</li><li style=\"margin:.25em 0\">In 2009, Kavya Shivashankar won by correctly spelling the word “Laodicean.”</li><li style=\"margin:.25em 0\">“Laodicean” derives from the ancient Greek word “Laodíkeia.”</li></ul>",
      stem: "The student wants to emphasize a difference in the origins of the two words. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["“Guerdon, ” the final word of the 2008 Scripps National Spelling Bee, is of Anglo-French origin, while the following year’s final word, “Laodicean, ” derives from ancient Greek.", "In 2008, Sameer Mishra won the Scripps National Spelling Bee by correctly spelling the word “guerdon”; however, the following year, Kavya Shivashankar won based on spelling the word “Laodicean. ”", "Kavya Shivashankar won the 2009 Scripps National Spelling Bee by correctly spelling “Laodicean, ” which derives from the ancient Greek word “Laodíkeia.”", "The Scripps National Spelling Bee uses words from diverse linguistic origins, such as “guerdon” and “Laodicean. ”"],
      answer: "A",
      explanation: L("Choice A is the best answer. Noting that “guerdon” is of Anglo-French origin and “Laodicean” is of ancient Greek origin, the sentence uses “while” to emphasize a difference in the origins of the two words."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence emphasizes two words used in the Scripps National Spelling Bee, it doesn’t emphasize (or mention) the words’ linguistic origins."),
        C: L("Choice C is incorrect. While the sentence specifies the linguistic origin of one word used in the Scripps National Spelling Bee, it doesn’t mention the other word or emphasize a difference in the two words’ origins."),
        D: L("Choice D is incorrect. While the sentence makes a generalization about words used in the Scripps National Spelling Bee, it doesn’t emphasize a difference in the words’ origins.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-5bb7dc03", "5bb7dc03", 349)
    },
    {
      id: "rw-rs-e6b57c9b",
      sourceQuestionId: "e6b57c9b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Iranian scholar Abu Rayhan al-Biruni studied Earth’s physical features.</li><li style=\"margin:.25em 0\">He theorized that a large landmass existed west of Europe and east of Asia.</li><li style=\"margin:.25em 0\">Al-Biruni published his landmass theory in 1037 CE.</li></ul>",
      stem: "The student wants to specify when al-Biruni published his landmass theory. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["In 1037 CE, al-Biruni published his theory that a large landmass existed west of Europe and east of Asia.", "Al-Biruni, who studied Earth’s physical features, published a theory about a large landmass.", "Al-Biruni was an Iranian scholar who studied Earth’s physical features.", "An Iranian scholar who studied Earth’s physical features, al-Biruni theorized that a large landmass existed west of Europe and east of Asia."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence specifies when al-Biruni published his landmass theory, indicating that it was published in the year 1037 CE."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence notes that al-Biruni published a landmass theory, it doesn’t specify when the theory was published."),
        C: L("Choice C is incorrect. The sentence identifies al-Biruni as a scholar of Earth’s physical features; it doesn’t specify when he published his landmass theory."),
        D: L("Choice D is incorrect. The sentence describes al-Biruni’s landmass theory; it doesn’t specify when the theory was published.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e6b57c9b", "e6b57c9b", 350)
    },
    {
      id: "rw-rs-9e2d4ef7",
      sourceQuestionId: "9e2d4ef7",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Abdulrazak Gurnah was awarded the 2021 Nobel Prize in Literature.</li><li style=\"margin:.25em 0\">Gurnah was born in Zanzibar in East Africa and currently lives in the United Kingdom.</li><li style=\"margin:.25em 0\">Many readers have singled out Gurnah’s 1994 book Paradise for praise.</li><li style=\"margin:.25em 0\">Paradise is a historical novel about events that occurred in colonial East Africa.</li></ul>",
      stem: "The student wants to introduce Paradise to an audience unfamiliar with the novel and its author. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Abdulrazak Gurnah, who wrote Paradise and later was awarded the Nobel Prize in Literature, was born in Zanzibar in East Africa and currently lives in the United Kingdom.", "Many readers have singled out Abdulrazak Gurnah’s 1994 book Paradise, a historical novel about colonial East Africa, for praise.", "A much-praised historical novel about colonial East Africa, Paradise (1994) was written by Abdulrazak Gurnah, winner of the 2021 Nobel Prize in Literature.", "Paradise is a historical novel about events that occurred in colonial East Africa, Abdulrazak Gurnah’s homeland."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence effectively introduces Paradise to an audience unfamiliar with the novel and its author, describing Paradise as a historical novel about colonial East Africa and its author as the winner of the 2021 Nobel Prize in Literature."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence introduces Abdulrazak Gurnah to an audience unfamiliar with the author, it doesn’t effectively introduce Paradise."),
        B: L("Choice B is incorrect. While the sentence provides background information about Paradise, it doesn’t effectively introduce the novel to an audience unfamiliar with its author."),
        D: L("Choice D is incorrect. While the sentence provides background information about Paradise, it doesn’t effectively introduce the novel to an audience unfamiliar with its author.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-9e2d4ef7", "9e2d4ef7", 351)
    },
    {
      id: "rw-rs-94f4eecb",
      sourceQuestionId: "94f4eecb",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Las sergas de Esplandián was a novel popular in sixteenth-century Spain.</li><li style=\"margin:.25em 0\">The novel featured a fictional island inhabited solely by Black women and known as California.</li><li style=\"margin:.25em 0\">That same century, Spanish explorers learned of an “island” off the west coast of Mexico.</li><li style=\"margin:.25em 0\">They called it California after the island in the novel.</li><li style=\"margin:.25em 0\">The “island” was actually the peninsula now known as Baja California (“Lower California”), which lies to the south of the US state of California.</li></ul>",
      stem: "The student wants to emphasize the role a misconception played in the naming of a place. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The novel Las sergas de Esplandián featured a fictional island known as California.", "To the south of the US state of California lies Baja California (“Lower California”), originally called California after a fictional place.", "In the sixteenth century, Spanish explorers learned of a peninsula off the west coast of Mexico and called it California.", "Thinking it was an island, Spanish explorers called a peninsula California after an island in a popular novel."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes the role a misconception played in the naming of a place, explaining that Spanish explorers mistook a peninsula for an island and, as a result, named the peninsula after a fictional island, California."),
      distractors: {
        A: L("Choice A is incorrect. The sentence mentions a novel that featured a fictional island, California; it doesn’t emphasize the role a misconception played in the naming of a place."),
        B: L("Choice B is incorrect. The sentence notes that Baja California was originally named after a fictional place; it doesn’t emphasize the role a misconception—specifically, the Spanish explorers’ mistaken belief that the peninsula was an island—played in the naming of a place."),
        C: L("Choice C is incorrect. The sentence indicates when Spanish explorers learned of the peninsula they called California; it doesn’t emphasize the role a misconception played in the naming of a place.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-94f4eecb", "94f4eecb", 356)
    },
    {
      id: "rw-rs-7f5715e4",
      sourceQuestionId: "7f5715e4",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The farm-size transition hypothesis predicts that economic pressures associated with modernization result in smaller farms amalgamating into larger-scale commercial farms.</li><li style=\"margin:.25em 0\">Masters et al. (2013): The average farm size in Asia “already has or will soon begin to rise.”</li><li style=\"margin:.25em 0\">Promkhambut et al. (2023) argue that small rice farms in Thailand have adopted modern farming methods without a significant scaling- up of farm size.</li><li style=\"margin:.25em 0\">Promkhambut et al.: “The persistence of [small] rice farms [in Thailand] does not represent a ‘failure’ to modernize...or a ‘truncated’ transition—it is a response to modernization.”</li></ul>",
      stem: "The student wants to make and support a claim regarding the applicability of the farm-size transition hypothesis to Thailand. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Taken together, the studies by Masters et al. and Promkhambut et al. suggest that rice farms in Thailand have responded to the economic pressures associated with modernization by expanding in size.", "Masters et al. report that the average farm size “already has or will soon begin to rise” in Asia, a finding that is consistent with the farm-size transition hypothesis.", "The predicted shift to large-scale commercial farming may not hold true for rice farms in Thailand, where, according to Promkhambut et al., rice farms have remained small as they’ve modernized.", "Although the farm-size transition hypothesis may be applicable to some countries in Asia, it is inconsistent with the development of rice farming in Thailand."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence makes a claim about the applicability of the farm-size transition hypothesis—the prediction that smaller farms will amalgamate into larger-scale commercial farms as a response to the economic pressures of modernization—to Thailand, noting that the hypothesis may not hold true for Thailand. It supports the claim with the argument from Promkhambut et al. that Thailand’s rice farms have remained small despite modernizing."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence makes a claim about the applicability of the farm-size transition hypothesis to Thailand, it mischaracterizes information from the notes: Promkhambut et al. argue that, despite modernizing in response to economic pressures, rice farms in Thailand have not expanded in size."),
        B: L("Choice B is incorrect. The sentence connects a claim from Masters et al. to the farm-size transition hypothesis; it doesn’t make and support a claim about the applicability of the hypothesis to Thailand, specifically."),
        D: L("Choice D is incorrect. While the sentence makes a claim about the applicability of the farm-size transition hypothesis to Thailand, it doesn’t support the claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7f5715e4", "7f5715e4", 357)
    },
    {
      id: "rw-rs-00bb356a",
      sourceQuestionId: "00bb356a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Miguel Luciano is a multimedia visual artist.</li><li style=\"margin:.25em 0\">One of his sculptures is Double Phantom/EntroP .R. (2017).</li><li style=\"margin:.25em 0\">The work consists of two red Schwinn Phantom bicycles that he fused together.</li><li style=\"margin:.25em 0\">The bicycles face opposite directions.</li><li style=\"margin:.25em 0\">The bicycles share the same rear wheel.</li></ul>",
      stem: "The student wants to describe how the bicycles in Double Phantom/EntroP .R. are fused together. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["To create the sculpture Double Phantom/EntroP .R., Miguel Luciano fused together two Schwinn Phantom bicycles.", "There are two red Schwinn Phantom bicycles in the sculpture Double Phantom/EntroP .R.", "The two red bicycles in Double Phantom/EntroP .R. are fused together so that they share the same rear wheel while facing opposite directions.", "Double Phantom/EntroP .R. is a sculpture created by multimedia visual artist Miguel Luciano."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence correctly describes how the bicycles in the sculpture are fused together: they share the same rear wheel while facing opposite directions."),
      distractors: {
        A: L("Choice A is incorrect. The sentence states that the bicycles are fused together but doesn’t describe how they are fused."),
        B: L("Choice B is incorrect. The sentence states that there are two bicycles in the sculpture without indicating that they are fused together or describing how they are fused."),
        D: L("Choice D is incorrect. It identifies the artist who created the sculpture but doesn’t describe how the bicycles are fused together.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-00bb356a", "00bb356a", 358)
    },
    {
      id: "rw-rs-99183985",
      sourceQuestionId: "99183985",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Some sandstone arches in Utah’s Arches National Park have been defaced by tourists’ carvings.</li><li style=\"margin:.25em 0\">Park rangers can smooth away some carvings using power grinders.</li><li style=\"margin:.25em 0\">For deep carvings, power grinding is not always feasible because it can greatly alter or damage the rock.</li><li style=\"margin:.25em 0\">Park rangers can use an infilling technique, which involves filling in carvings with ground sandstone and a bonding agent.</li><li style=\"margin:.25em 0\">This technique is minimally invasive.</li></ul>",
      stem: "The student wants to explain an advantage of the infilling technique. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["To remove carvings from sandstone arches in Utah’s Arches National Park, power grinding is not always feasible.", "Filling in carvings with ground sandstone and a bonding agent is less invasive than smoothing them away with a power grinder, which can greatly alter or damage the sandstone arches.", "Park rangers can use a power grinding technique to smooth away carvings or fill them in with ground sandstone and a bonding agent.", "As methods for removing carvings from sandstone, power grinding and infilling differ in their level of invasiveness."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence effectively explains an advantage of infilling: it’s less invasive than using a power grinder."),
      distractors: {
        A: L("Choice A is incorrect. The sentence identifies a disadvantage of power grinding; it doesn’t explain an advantage of infilling."),
        C: L("Choice C is incorrect. The sentence identifies the two techniques park rangers use; it doesn’t explain an advantage of infilling."),
        D: L("Choice D is incorrect. The sentence indicates that power grinding and infilling are different in one aspect; it fails to explain an advantage of infilling.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-99183985", "99183985", 360)
    },
    {
      id: "rw-rs-70538b9a",
      sourceQuestionId: "70538b9a",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In the 1930s, the Imperial Sugar Cane Institute in India sought to limit the country’s dependence on imported sugarcane.</li><li style=\"margin:.25em 0\">The institute enlisted botanist Janaki Ammal to breed a local variety of sugarcane.</li><li style=\"margin:.25em 0\">She crossbred the imported sugarcane species Saccharum officinarum with grasses native to India.</li><li style=\"margin:.25em 0\">She succeeded in creating sugarcane hybrids well suited to India’s climate.</li></ul>",
      stem: "The student wants to emphasize Janaki Ammal’s achievement. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["By crossbreeding the imported sugarcane species Saccharum officinarum with grasses native to India, Ammal succeeded in creating sugarcane hybrids well suited to India’s climate.", "In the 1930s, the Imperial Sugar Cane Institute, which enlisted Ammal, sought to limit dependence on imported sugarcane.", "Ammal was enlisted by the Imperial Sugar Cane Institute at a time when a local variety of sugarcane needed to be produced.", "As part of efforts to breed a local variety of sugarcane, an imported sugarcane species called Saccharum officinarum was crossbred with grasses native to India."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes Janaki Ammal’s achievement, explaining that she successfully created sugarcane hybrids that are well suited to India’s climate by crossbreeding an imported sugarcane species with grasses native to India."),
      distractors: {
        B: L("Choice B is incorrect. The sentence emphasizes the goal of the Imperial Sugar Cane Institute in the 1930s; it doesn’t emphasize Janaki Ammal’s achievement."),
        C: L("Choice C is incorrect. While the sentence mentions Ammal, it doesn’t emphasize her achievement of successfully creating sugarcane hybrids."),
        D: L("Choice D is incorrect. While the sentence mentions the achievement of crossbreeding imported sugarcane species with grasses native to India, it doesn’t emphasize the achievement as belonging to Janaki Ammal.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-70538b9a", "70538b9a", 361)
    },
    {
      id: "rw-rs-25adba4e",
      sourceQuestionId: "25adba4e",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 1897, twenty Black US Army infantrymen rode bicycles from Montana to Missouri.</li><li style=\"margin:.25em 0\">The 1,900-mile journey took forty-one days.</li><li style=\"margin:.25em 0\">The goal was to test the idea of forming a military bicycle corps.</li><li style=\"margin:.25em 0\">In 2022, Erick Cedeño, a Black long-distance cyclist, reenacted the journey.</li><li style=\"margin:.25em 0\">Cedeño wanted to honor the infantrymen on the journey’s 125th anniversary.</li></ul>",
      stem: "The student wants to emphasize how far the infantrymen traveled. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The US infantrymen rode their bicycles from Montana to Missouri—traveling a total of 1,900 miles.", "The 125th anniversary of the infantrymen’s journey was in 2022.", "The goal of the 1897 journey was to test the idea of forming a military bicycle corps.", "Over a century later, Erick Cedeño honored the infantrymen by reenacting their 1897 journey."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes how far the infantrymen traveled, indicating that they rode their bicycles from Montana to Missouri, a total of 1,900 miles."),
      distractors: {
        B: L("Choice B is incorrect because the sentence mentions when the anniversary of the journey occurred; it doesn’t emphasize how far the infantrymen traveled."),
        C: L("Choice C is incorrect because the sentence discusses the goal of the journey; it doesn’t emphasize how far the infantrymen traveled."),
        D: L("Choice D is incorrect because the sentence notes that Cedeño honored the infantrymen by reenacting their journey; it doesn’t emphasize how far the infantrymen traveled.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-25adba4e", "25adba4e", 367)
    },
    {
      id: "rw-rs-0f64ded3",
      sourceQuestionId: "0f64ded3",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Albert Einstein’s theory of general relativity allows for potential shortcuts through spacetime.</li><li style=\"margin:.25em 0\">These hypothetical spacetime tunnels are known as wormholes.</li><li style=\"margin:.25em 0\">For matter to travel through a wormhole, it would need to have negative energy density.</li><li style=\"margin:.25em 0\">Negative energy density means that the matter would have less energy than empty space.</li><li style=\"margin:.25em 0\">Such matter has not been shown to exist.</li></ul>",
      stem: "The student wants to acknowledge a complication affecting travel through wormholes. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Einstein’s theory of general relativity allows for potential spacetime shortcuts called wormholes but does not explain how matter with negative energy density could travel through them.", "For matter to travel through a wormhole, the matter would need to have less energy than empty space; such matter has not been shown to exist.", "The hypothetical tunnels known as wormholes would be potential shortcuts through spacetime were it not for one complication: they have less energy than empty space.", "For wormholes to be possible, according to Einstein’s theory of general relativity, they would have to allow for potential shortcuts through spacetime."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence acknowledges a complication affecting travel through wormholes, noting that the matter traveling through a wormhole would need to have less energy than empty space and that such matter has not been shown to exist."),
      distractors: {
        A: L("Choice A is incorrect. The sentence notes that Einstein’s theory doesn’t explain how matter with negative energy density can travel through wormholes; it doesn’t acknowledge a complication affecting travel through wormholes."),
        C: L("Choice C is incorrect. While the sentence acknowledges a complication affecting travel through wormholes, it misrepresents information from the notes; matter traveling through wormholes, not the wormholes themselves, would need to have negative energy density."),
        D: L("Choice D is incorrect. The sentence presents a misleading interpretation of Einstein’s theory (confusing the definition of a wormhole with a condition a wormhole must fulfill); it doesn’t acknowledge a complication affecting travel through wormholes.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-0f64ded3", "0f64ded3", 370)
    },
    {
      id: "rw-rs-fb3abe38",
      sourceQuestionId: "fb3abe38",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In a 2020 study, researchers in California investigated how many potential nesting sites female wood ducks visited during the nesting season.</li><li style=\"margin:.25em 0\">The researchers placed nest boxes throughout the survey area and tagged 138 female wood ducks with radio frequency ID trackers.</li><li style=\"margin:.25em 0\">These trackers recorded how many nest boxes each duck visited.</li><li style=\"margin:.25em 0\">67 ducks (48.5%) visited only one nest box.</li><li style=\"margin:.25em 0\">18 ducks (13.0%) visited 10 or more nest boxes.</li><li style=\"margin:.25em 0\">Younger ducks were more likely to visit multiple nest boxes.</li></ul>",
      stem: "The student wants to present the methods used in the 2020 study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["By recording how many nest boxes each duck visited, the researchers discovered that only a relatively small percentage (13.0%) of the ducks visited 10 or more nest boxes.", "After tracking how many nest boxes the 138 wood ducks visited, the researchers found that the younger ducks tended to visit more nest boxes than the older ducks.", "The researchers tagged 138 female wood ducks with radio frequency ID trackers and recorded how many nest boxes each duck visited during the nesting season.", "The researchers investigated each nesting site for signs that it had been visited by the female wood ducks."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence presents the methods used in the study, noting that researchers tagged 138 female wood ducks with radio frequency ID trackers and recorded the number of nest boxes each duck visited."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence mentions an aspect of the study’s design (that the researchers recorded the number of nest boxes the wood ducks visited), it primarily focuses on a finding of the study rather than the methods the researchers used."),
        B: L("Choice B is incorrect. While the sentence mentions an aspect of the study’s design (that the researchers tracked the number of nest boxes the wood ducks visited), it primarily focuses on a finding of the study rather than the methods the researchers used."),
        D: L("Choice D is incorrect. The sentence misrepresents information from the notes. The researchers used radio frequency ID trackers to record the ducks’ visits; they didn’t investigate each site to look for evidence that it had been visited.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-fb3abe38", "fb3abe38", 371)
    },
    {
      id: "rw-rs-d4b07ce6",
      sourceQuestionId: "d4b07ce6",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Shanawdithit (1801–1829) was a Beothuk cartographer (mapmaker).</li><li style=\"margin:.25em 0\">Her maps of Newfoundland’s Beothuk Lake outline both the lake and various points around the lake where encounters between the Indigenous Beothuk people and British colonists occurred.</li><li style=\"margin:.25em 0\">Her maps are notable for depicting the experiences the Beothuk had within the landscape.</li><li style=\"margin:.25em 0\">Contemporary Potawatomi cartographer Margaret Pearce: Indigenous cartography emphasizes “experienced space, or place, as opposed to the Western convention of depicting space as universal, homogenized, and devoid of human experience.”</li><li style=\"margin:.25em 0\">Pearce: “Indigenous cartographies are as diverse as Indigenous cultures, from Hawaiian performative cartographies to Navajo verbal maps and sand paintings.”</li></ul>",
      stem: "The student wants to describe Shanawdithit’s approach and explain its significance. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Shanawdithit’s maps are part of a broader tradition of Indigenous cartography that, according to Pearce, ranges from “Hawaiian performative cartographies to Navajo verbal maps and sand paintings. ”", "Shanawdithit mapped Beothuk Lake through significant encounters that occurred there, an approach described as “depicting space as universal [and] homogenized. ”", "According to Pearce, Indigenous cartography, such as Shanawdithit’s maps of Beothuk Lake, emphasizes “experienced space, or place, ” with a variety of approaches that reflect the diversity of Indigenous cultures.", "By depicting experiences of the Beothuk that occurred around Beothuk Lake, Shanawdithit’s maps reflect Indigenous cartography’s emphasis on “experienced space, or place” rather than the landscape alone."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence accomplishes both parts of the goal. It describes Shanawdithit’s approach by noting that she depicted experiences of the Beothuk that occurred around Beothuk Lake, and it explains the significance of that approach by connecting it to Indigenous cartography’s emphasis on “experienced space, or place. ”"),
      distractors: {
        A: L("Choice A is incorrect. While the sentence places Shanawdithit’s maps within the broader tradition of Indigenous cartography, it doesn’t describe her specific approach to mapmaking or explain its significance."),
        B: L("Choice B is incorrect. While the sentence does describe Shanawdithit’s approach to mapmaking, it misrepresents information in the notes when explaining the significance of that approach. “Depicting space as universal [and] homogenized” is described as a Western convention, not a convention of Indigenous cartography."),
        C: L("Choice C is incorrect. While the sentence mentions Shanawdithit’s maps as an example of Indigenous cartography, it focuses primarily on the broader tradition rather than describing Shanawdithit’s specific approach and explaining its significance.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-d4b07ce6", "d4b07ce6", 374)
    },
    {
      id: "rw-rs-7f2781fd",
      sourceQuestionId: "7f2781fd",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Certhidea olivacea is a perching bird that can be found on the Galápagos Island of Pinzón.</li><li style=\"margin:.25em 0\">Creagrus furcatus is a seabird that can be found on the Galápagos Island of Darwin.</li><li style=\"margin:.25em 0\">Conservation organizations evaluate the risk that species will become extinct in the near future.</li><li style=\"margin:.25em 0\">C. olivacea faces a high risk of extinction.</li><li style=\"margin:.25em 0\">C. furcatus faces little risk of becoming extinct in the near future.</li></ul>",
      stem: "The student wants to compare the extinction risk faced by C. olivacea with that faced by C. furcatus. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["According to conservation organizations, C. olivacea has a higher risk of becoming extinct in the near future than C. furcatus.", "C. furcatus faces a high risk of extinction, while C. olivacea faces little risk of becoming extinct in the near future.", "Conservation organizations have evaluated both C. furcatus’s and C. olivacea’s risk of becoming extinct in the near future.", "C. olivacea is a perching bird that faces a high risk of extinction."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence compares the extinction risks of the two species, noting that C. olivacea has a higher risk of becoming extinct in the near future than C. furcatus."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence does compare the extinction risks of the two species, it misrepresents information from the notes; C. olivacea faces a higher risk of becoming extinct in the near future than C. furcatus, not the other way around."),
        C: L("Choice C is incorrect. While the sentence mentions that conservation organizations have evaluated both species for extinction risk, it doesn’t compare the extinction risks of the two species."),
        D: L("Choice D is incorrect. While the sentence states that C. olivacea faces a high risk of extinction, it doesn’t mention C. furcatus or compare the extinction risks of the two species.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7f2781fd", "7f2781fd", 376)
    },
    {
      id: "rw-rs-570dd854",
      sourceQuestionId: "570dd854",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Here I Have Returned is a sculpture by Egyptian American artist Sherin Guirguis.</li><li style=\"margin:.25em 0\">It is a large, curved strip of wood inspired by the shape of a sistrum.</li><li style=\"margin:.25em 0\">A sistrum is a curved musical instrument played by ancient Egyptian priestesses in ceremonies.</li><li style=\"margin:.25em 0\">Guirguis says that the sculpture symbolizes “women who have lifted and supported Egyptian society and culture.”</li><li style=\"margin:.25em 0\">Overall, Guirguis wants her works to “engage audiences in a dialogue about power, agency, and social transformation.”</li></ul>",
      stem: "The student wants to use a quotation from Guirguis to explain what the sculpture represents. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Guirguis, whose works include a sculpture that is a large, curved strip of wood, has explained that she wants her work to create a dialogue with audiences.", "Inspired by the sistrum played by Egyptian priestesses, Here I Have Returned symbolizes “women who have lifted and supported Egyptian society and culture, ” according to Guirguis.", "According to Guirguis, the curved strip of wood used in Here I Have Returned was inspired by the sistrum, a musical instrument played by ancient Egyptian priestesses in ceremonies.", "Guirguis, the sculptor of Here I Have Returned, wants her works to “engage audiences in a dialogue about power, agency, and social transformation. ”"],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence uses a quotation from Guirguis to explain what Here I Have Returned represents, noting that Guirguis said the sculpture symbolizes \"women who have lifted and supported Egyptian society and culture. \""),
      distractors: {
        A: L("Choice A is incorrect. The sentence explains what Guirguis says she wants her work to achieve and provides an example of her work; it doesn’t use a quotation to explain what the sculpture represents."),
        C: L("Choice C is incorrect. The sentence mentions the instrument whose shape inspired the sculpture but doesn’t use a quotation to explain what the sculpture represents."),
        D: L("Choice D is incorrect. While the sentence does use a quotation from Guirguis, the quotation explains what she hopes her works in general achieve, not what the sculpture in particular represents.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-570dd854", "570dd854", 378)
    },
    {
      id: "rw-rs-3150021d",
      sourceQuestionId: "3150021d",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The Royal Alcázar of Seville is a historic royal palace in Andalucía, Spain.</li><li style=\"margin:.25em 0\">The palace is famous for its intricate tilework.</li><li style=\"margin:.25em 0\">The palace features majolica and arista tiles.</li><li style=\"margin:.25em 0\">In the majolica style, designs are painted directly on the ceramic tiles.</li><li style=\"margin:.25em 0\">In the arista style, designs are stamped into the ceramic tiles.</li></ul>",
      stem: "The student wants to contrast the two styles of tiles. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Tiles in the majolica and arista styles can be found in the Royal Alcázar of Seville in Andalucía, Spain.", "Featuring tiles in the majolica and arista styles, the Royal Alcázar of Seville in Spain is famous for its intricate tilework.", "In the arista style, designs are stamped into the ceramic tiles, whereas in the majolica style, the designs are painted directly on them.", "Among the famous tilework of the Royal Alcázar of Seville are majolica style tiles, made by painting designs directly on the ceramic tiles."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence contrasts the two styles of tiles, noting that tiles in the arista style have designs stamped into them, whereas tiles in the majolica style have designs painted directly on them."),
      distractors: {
        A: L("Choice A is incorrect because the sentence indicates that the two styles of tile can be found in the same location; it doesn’t contrast the two styles of tile."),
        B: L("Choice B is incorrect because the sentence indicates that the Royal Alcázar of Seville features tiles in both the majolica and arista styles; it doesn’t contrast the two styles of tile."),
        D: L("Choice D is incorrect because the sentence indicates that the tilework of the Royal Alcázar of Seville includes tiles in the majolica style; it doesn’t contrast tiles in the majolica style with tiles in the arista style.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-3150021d", "3150021d", 379)
    },
    {
      id: "rw-rs-02527f43",
      sourceQuestionId: "02527f43",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">“Raymond’s Run” is a short story.</li><li style=\"margin:.25em 0\">It was written by African American author Toni Cade Bambara.</li><li style=\"margin:.25em 0\">It was first published in her book Gorilla, My Love in 1972.</li><li style=\"margin:.25em 0\">It is told from a first person perspective.</li><li style=\"margin:.25em 0\">It takes place in Harlem.</li></ul>",
      stem: "The student wants to indicate where the short story takes place. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["“Raymond’s Run” takes place in Harlem.", "“Raymond’s Run” was published in Gorilla, My Love.", "“Raymond’s Run” is told from a first person perspective.", "“Raymond’s Run” was written by Toni Cade Bambara."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence indicates where \"Raymond’s Run\" takes place, stating that it takes place in Harlem."),
      distractors: {
        B: L("Choice B is incorrect. The sentence identifies the book in which the story \"Raymond’s Run\" was published; it doesn’t indicate where the story takes place."),
        C: L("Choice C is incorrect. The sentence indicates the point of view used in \"Raymond’s Run\"; it doesn’t indicate where the story takes place."),
        D: L("Choice D is incorrect. The sentence identifies the author of \"Raymond’s Run\"; it doesn’t indicate where the story takes place.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-02527f43", "02527f43", 381)
    },
    {
      id: "rw-rs-e8494245",
      sourceQuestionId: "e8494245",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Political scientist Graham Allison is known for his Thucydides trap theory.</li><li style=\"margin:.25em 0\">Allison’s theory states that whenever “a rising power is threatening to displace a ruling power,” conflict is likely.</li><li style=\"margin:.25em 0\">The theory is based on Thucydides’s explanation of the conflict between Athens and Sparta.</li><li style=\"margin:.25em 0\">Thucydides wrote that “the rise of Athens and the fear this instilled in Sparta” made conflict “inevitable.”</li><li style=\"margin:.25em 0\">History professor Edmund Stewart recently challenged the historical basis of the theory.</li><li style=\"margin:.25em 0\">Stewart claimed that Athens was not a rising power and that the rivals experienced a “clash of cultures” instead.</li></ul>",
      stem: "The student wants to use a quotation to challenge Thucydides’s explanation of the conflict between Athens and Sparta. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["According to Allison’s Thucydides trap theory, whenever “a rising power is threatening to displace a ruling power, ” conflict is likely.", "Thucydides wrote that conflict between the two powers was “inevitable, ” although Stewart later challenged the historical basis of this claim.", "According to Stewart, a “clash of cultures” between Athens and Sparta caused the conflict, not Athens’s rise.", "Thucydides explained that conflict was caused by “the rise of Athens and the fear this instilled in Sparta, ” but Allison disagreed, seeing the conflict as an example of the Thucydides trap."],
      answer: "C",
      explanation: L("Choice C is the best answer. Using a quotation from Stewart, the sentence challenges Thucydides’s explanation that the rise of Athens caused the conflict, suggesting that it was instead caused by a \"clash of cultures. \""),
      distractors: {
        A: L("Choice A is incorrect. While the sentence uses a quotation, the quotation doesn’t challenge Thucydides’s explanation of the conflict."),
        B: L("Choice B is incorrect. While the sentence mentions that Stewart challenged Thucydides’s explanation of the conflict, it doesn’t use a quotation to challenge Thucydides’s explanation: the quoted word \"inevitable\" is from Thucydides."),
        D: L("Choice D is incorrect. While the sentence appears to refute Thucydides’s explanation, it does so in a way that misrepresents the information in the notes; Allison’s Thucydides trap theory is based on Thucydides’s explanation of the conflict. Thus, Allison’s theory affirms, rather than challenges, Thucydides’s explanation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e8494245", "e8494245", 382)
    },
    {
      id: "rw-rs-efc19153",
      sourceQuestionId: "efc19153",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Just like states have state flags, some cities have city flags.</li><li style=\"margin:.25em 0\">Over one hundred US cities have redesigned their flags since 2015.</li><li style=\"margin:.25em 0\">The city of Pocatello, Idaho, redesigned its flag after it was named the most poorly designed flag in North America.</li><li style=\"margin:.25em 0\">Pocatello’s new flag better represents the city’s mountainous geography and civic priorities.</li><li style=\"margin:.25em 0\">Residents consider the new flag to be a meaningful symbol of civic pride.</li></ul>",
      stem: "The student wants to make and support a generalization about the effect of redesigning a city flag. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Over one hundred US cities have redesigned their flags, including Pocatello, whose flag had been named the most poorly designed flag in North America.", "Pocatello is just one of over one hundred US cities that have redesigned their flags.", "After it was named the most poorly designed flag in North America, the flag of Pocatello was redesigned to better represent the city’s geography and civic priorities.", "Redesigning a poorly designed city flag can create a meaningful symbol of civic pride, as was the case when Pocatello redesigned its original flag to better represent its geography and civic priorities."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence makes and supports a generalization about the effect of redesigning a city flag, noting that redesigning a city flag can create a meaningful symbol of civic pride, as was the case when the city of Pocatello redesigned its flag."),
      distractors: {
        A: L("Choice A is incorrect because the sentence explains that many US cities have redesigned their flags and provides an example; it doesn’t make and support a generalization about the effect of redesigning a city flag."),
        B: L("Choice B is incorrect because the sentence provides an example of a city that redesigned its flag; it doesn’t make and support a generalization about the effect of redesigning a city flag."),
        C: L("Choice C is incorrect because the sentence emphasizes why the flag of Pocatello was redesigned; it doesn’t make and support a generalization about the effect of redesigning a city flag.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-efc19153", "efc19153", 383)
    },
    {
      id: "rw-rs-eae29760",
      sourceQuestionId: "eae29760",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The calendar used by most of the world (the Gregorian calendar) has 365 days.</li><li style=\"margin:.25em 0\">Because 365 days can’t be divided evenly by 7 (the number of days in a week), calendar dates fall on a different day of the week each year.</li><li style=\"margin:.25em 0\">The Hanke-Henry permanent calendar, developed as an alternative to the Gregorian calendar, has 364 days.</li><li style=\"margin:.25em 0\">Because 364 can be divided evenly by 7, calendar dates fall on the same day of the week each year, which supports more predictable scheduling.</li></ul>",
      stem: "The student wants to explain an advantage of the Hanke-Henry calendar. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The Gregorian calendar has 365 days, which is one day longer than the Hanke-Henry permanent calendar.", "Adopting the Hanke-Henry permanent calendar would help solve a problem with the Gregorian calendar.", "Designed so calendar dates would occur on the same day of the week each year, the Hanke-Henry calendar supports more predictable scheduling than does the Gregorian calendar.", "The Hanke-Henry permanent calendar was developed as an alternative to the Gregorian calendar, which is currently the most-used calendar in the world."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence explains an advantage of the Hanke-Henry calendar, noting that it supports more predictable scheduling than does the Gregorian calendar and describing how it does so (by having calendar dates occur on the same day each year)."),
      distractors: {
        A: L("Choice A is incorrect. The sentence compares the number of days in the Gregorian and Hanke-Henry calendars; it doesn’t explain an advantage of the Hanke-Henry calendar."),
        B: L("Choice B is incorrect. While the sentence refers to a possible reason to adopt the Hanke-Henry calendar—that doing so would help solve a problem with the Gregorian calendar—it doesn’t identify the problem or the solution and thus doesn’t explain the advantage of the Hanke-Henry calendar."),
        D: L("Choice D is incorrect. The sentence describes the origins of the Hanke-Henry calendar; it doesn’t explain an advantage of it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-eae29760", "eae29760", 384)
    },
    {
      id: "rw-rs-835b101b",
      sourceQuestionId: "835b101b",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Minnesota defines a lake as an inland body of water of at least 10 acres.</li><li style=\"margin:.25em 0\">Wisconsin’s definition of a lake doesn’t take size into account.</li><li style=\"margin:.25em 0\">By its own definition, Wisconsin has over 15,000 lakes, many smaller than 10 acres.</li><li style=\"margin:.25em 0\">By Minnesota’s definition, Wisconsin has only about 6,000 lakes.</li></ul>",
      stem: "The student wants to contrast Minnesota’s definition of a lake with Wisconsin’s. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Wisconsin, which doesn’t take size into account in defining a lake, claims that it has over 15,000 lakes.", "Because its definition of a lake is different from Minnesota’s, it is unclear how many lakes Wisconsin really has.", "According to Minnesota’s definition of a lake—an inland body of water of at least 10 acres—Wisconsin has about 6,000 lakes.", "Minnesota’s definition of a lake—an inland body of water of at least 10 acres—is more restrictive than Wisconsin’s, which doesn’t take size into account."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence contrasts Minnesota’s definition of a lake with Wisconsin’s, explaining that Minnesota’s definition (which takes size into account) is more restrictive than Wisconsin’s definition (which doesn’t)."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence notes that Wisconsin’s definition of a lake doesn’t take size into account, it doesn’t contrast Minnesota’s definition with Wisconsin’s."),
        B: L("Choice B is incorrect. The sentence states that Wisconsin’s definition of a lake is different from Minnesota’s, but it doesn’t clarify how they differ. In other words, it doesn’t contrast Minnesota’s definition with Wisconsin’s."),
        C: L("Choice C is incorrect. The sentence indicates how many lakes Wisconsin has according to Minnesota’s definition of a lake, but it doesn’t clarify how the states’ definitions differ. In other words, it doesn’t contrast Minnesota’s definition with Wisconsin’s.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-835b101b", "835b101b", 385)
    },
    {
      id: "rw-rs-aec8d3e8",
      sourceQuestionId: "aec8d3e8",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Chemical leavening agents cause carbon dioxide to be released within a liquid batter, making the batter rise as it bakes.</li><li style=\"margin:.25em 0\">Baking soda and baking powder are chemical leavening agents.</li><li style=\"margin:.25em 0\">Baking soda is pure sodium bicarbonate.</li><li style=\"margin:.25em 0\">To produce carbon dioxide, baking soda needs to be mixed with liquid and an acidic ingredient such as honey.</li><li style=\"margin:.25em 0\">Baking powder is a mixture of sodium bicarbonate and an acid.</li><li style=\"margin:.25em 0\">To produce carbon dioxide, baking powder needs to be mixed with liquid but not with an acidic ingredient.</li></ul>",
      stem: "The student wants to emphasize a difference between baking soda and baking powder. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["To make batters rise, bakers use chemical leavening agents such as baking soda and baking powder.", "Baking soda and baking powder are chemical leavening agents that, when mixed with other ingredients, cause carbon dioxide to be released within a batter.", "Baking soda is pure sodium bicarbonate, and honey is a type of acidic ingredient.", "To produce carbon dioxide within a liquid batter, baking soda needs to be mixed with an acidic ingredient, whereas baking powder does not."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence emphasizes a difference between baking soda and baking powder, noting that baking soda needs to be mixed with an acidic ingredient to produce carbon dioxide but baking powder doesn’t."),
      distractors: {
        A: L("Choice A is incorrect. The sentence focuses on what bakers use to make batters rise; it doesn’t emphasize a difference between baking soda and baking powder."),
        B: L("Choice B is incorrect. The sentence provides a general description of baking soda and baking powder; it doesn’t emphasize a difference between them."),
        C: L("Choice C is incorrect. The sentence explains what baking soda and honey are; it doesn’t emphasize a difference between baking soda and baking powder.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-aec8d3e8", "aec8d3e8", 388)
    },
    {
      id: "rw-rs-61c0f7b3",
      sourceQuestionId: "61c0f7b3",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In 2017, a research team led by Mary Caswell Stoddard determined the average lengths of eggs produced by various bird species.</li><li style=\"margin:.25em 0\">Gygis alba is a species of bird in the order Charadriiformes.</li><li style=\"margin:.25em 0\">Gygis alba eggs had an average length of 4.46 cm.</li><li style=\"margin:.25em 0\">Gavia stellata is a species of bird in the order Gaviiformes.</li><li style=\"margin:.25em 0\">Gavia stellata eggs had an average length of 7.22 cm.</li></ul>",
      stem: "Which choice most effectively uses information from the given sentences to emphasize a difference between the eggs of the two species?",
      options: ["A 2017 study compared the lengths of eggs produced by an array of different bird species, such as Gygis alba and Gavia stellata.", "A 2017 study found that Gygis alba eggs had an average length of 4.46 cm, whereas Gavia stellata eggs were longer, with an average length of 7.22 cm.", "The bird species Gygis alba, which belongs to the order Charadriiformes, and Gavia stellata, of the order Gaviiformes, were included in a 2017 study that compared the average lengths of their eggs.", "Mary Caswell Stoddard led a research study that determined the average lengths of eggs, including those of Gygis alba birds (4.46 cm) and Gavia stellata birds (7.22 cm)."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence emphasizes a difference between the eggs of the two species, directly contrasting the shorter average length of Gygis alba eggs (4.46 cm) with the longer average length of Gavia stellata eggs (7.22 cm)."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence mentions both bird species, it doesn’t emphasize a difference between their eggs."),
        C: L("Choice C is incorrect. While the sentence provides information about the two bird species, it doesn’t emphasize a difference between their eggs."),
        D: L("Choice D is incorrect. While the sentence provides the average lengths of both species’ eggs, it doesn’t explicitly emphasize the difference between them.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-61c0f7b3", "61c0f7b3", 390)
    },
    {
      id: "rw-rs-77e3b3b3",
      sourceQuestionId: "77e3b3b3",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">2024: Spain and Portugal sponsored a workshop to address recent encounters between Iberian orcas and marine vessels off the Iberian Peninsula.</li><li style=\"margin:.25em 0\">Many of the 637 documented incidents involved pods of orcas damaging vessels by ramming, nudging, or biting the rudders.</li><li style=\"margin:.25em 0\">Studies of Iberian orcas suggest recent increases in tuna populations have reduced the time the orcas spend hunting by 99%.</li><li style=\"margin:.25em 0\">Researchers believe this shift has increased the number of interactions between marine vessels and understimulated orcas.</li><li style=\"margin:.25em 0\">The workshop advised mariners to avoid orcas pending further testing of the efficacy of TAST , a harmless acoustic deterrent.</li></ul>",
      stem: "The student wants to make and support a claim about Iberian orca behavior. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The recent destructive behavior of Iberian orcas may be the result of understimulation, given that orcas’ interactions with marine vessels have increased as the orcas have spent less time hunting.", "As supported by the workshop’s analysis of 637 encounters between vessels and Iberian orcas, TAST is a harmless and effective acoustic deterrent.", "In 2024, Spain and Portugal sponsored a workshop that addressed incidents where pods of Iberian orcas were ramming, nudging, or biting the rudders of vessels.", "Tuna populations have increased by approximately 99% off the Iberian Peninsula due to changes in the hunting behavior of Iberian orcas."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence makes and supports a claim about Iberian orca behavior, claiming that the orcas’ destructive behavior may be the result of understimulation and citing as support the fact that as orcas have spent less time hunting (a stimulating activity), encounters with vessels have increased."),
      distractors: {
        B: L("Choice B is incorrect. While the sentence makes a claim about an orca deterrent, it misrepresents information from the notes. The workshop advised avoiding orcas pending further testing of TAST’s efficacy; it didn’t claim that TAST was effective."),
        C: L("Choice C is incorrect. The sentence describes a workshop that addressed the orcas’ behavior; it doesn’t make or support a claim about their behavior."),
        D: L("Choice D is incorrect. While the sentence does make a claim about orcas’ hunting behavior, it misrepresents information from the notes; the notes state that increased tuna populations have reduced orcas’ hunting time by 99%, not that tuna populations have increased by 99% because of the orcas’ behavior.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-77e3b3b3", "77e3b3b3", 391)
    },
    {
      id: "rw-rs-7fa2b1ee",
      sourceQuestionId: "7fa2b1ee",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">In meteorology, an air mass is a large body of air with generally uniform humidity and temperature.</li><li style=\"margin:.25em 0\">Air masses are commonly classified by two-letter names.</li><li style=\"margin:.25em 0\">The first letter indicates the humidity of the air mass, while the second letter indicates the temperature. cA (continental arctic) means dry and cold, for example. mT (maritime tropical) means moist and warm.</li><li style=\"margin:.25em 0\">This classification system is based on the work of a Swedish meteorologist named Tor Bergeron (1891–1977).</li></ul>",
      stem: "The student wants to provide an example of an air mass. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Air masses are large bodies of air with generally uniform humidity and temperature.", "The air mass classification system uses two-letter names and is based on the work of Tor Bergeron, a Swedish meteorologist.", "Air masses are commonly classified by a two-letter name that indicates humidity and temperature.", "One type of air mass is known as a cA, or continental arctic, air mass because it is dry and cold."],
      answer: "D",
      explanation: L("Choice D is the best answer. The sentence provides an example of an air mass: the cA, or continental arctic, air mass."),
      distractors: {
        A: L("Choice A is incorrect. The sentence provides a general definition of air masses; it doesn’t provide an example of a specific air mass."),
        B: L("Choice B is incorrect. The sentence describes the system used to classify air masses; it doesn’t provide an example of a specific air mass."),
        C: L("Choice C is incorrect. The sentence explains how air masses are classified; it doesn’t provide an example of a specific air mass.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-7fa2b1ee", "7fa2b1ee", 392)
    },
    {
      id: "rw-rs-56b000d0",
      sourceQuestionId: "56b000d0",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The factors that affect clutch size (the number of eggs laid at one time) have been well studied in birds but not in lizards.</li><li style=\"margin:.25em 0\">A team led by Shai Meiri of Tel Aviv University investigated which factors influence lizard clutch size.</li><li style=\"margin:.25em 0\">Meiri’s team obtained clutch-size and habitat data for over 3,900 lizard species and analyzed the data with statistical models.</li><li style=\"margin:.25em 0\">Larger clutch size was associated with environments in higher latitudes that have more seasonal change.</li><li style=\"margin:.25em 0\">Lizards in higher-latitude environments may lay larger clutches to take advantage of shorter windows of favorable conditions.</li></ul>",
      stem: "The student wants to emphasize the aim of the research study. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Researchers wanted to know which factors influence lizard egg clutch size because such factors have been well studied in birds but not in lizards.", "After they obtained data for over 3,900 lizard species, researchers determined that larger clutch size was associated with environments in higher latitudes that have more seasonal change.", "We now know that lizards in higher-latitude environments may lay larger clutches to take advantage of shorter windows of favorable conditions.", "Researchers obtained clutch-size and habitat data for over 3,900 lizard species and analyzed the data with statistical models."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence emphasizes the aim of the research study by highlighting what the researchers conducting the study wanted to know—specifically, which factors influence clutch size among lizards."),
      distractors: {
        B: L("Choice B is incorrect because the sentence emphasizes what researchers determined at the end of the study, not what the study’s aim was."),
        C: L("Choice C is incorrect because the sentence emphasizes a finding from the research study, not the aim of the study."),
        D: L("Choice D is incorrect because the sentence emphasizes the research study’s methodology, not its aim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-56b000d0", "56b000d0", 393)
    },
    {
      id: "rw-rs-f6d454c1",
      sourceQuestionId: "f6d454c1",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">If a moon orbiting a planet comes close enough to that planet, tidal forces can cause the moon to break apart.</li><li style=\"margin:.25em 0\">In a 2022 study, researchers proposed that Saturn was once orbited by a large moon they named Chrysalis.</li><li style=\"margin:.25em 0\">Their simulations indicated that Chrysalis would likely have come very close to Saturn around 160 million years ago.</li><li style=\"margin:.25em 0\">At that distance, Chrysalis would have been broken apart by tidal forces.</li><li style=\"margin:.25em 0\">The researchers hypothesized that the resulting debris formed Saturn’s rings.</li></ul>",
      stem: "The student wants to recount the sequence of events proposed by the researchers. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["According to researchers’ simulations, two events likely occurred around 160 million years ago: first, Chrysalis came very close to Saturn, and second, debris from Saturn’s rings caused the moon to break apart.", "If a moon orbiting a planet (like Saturn) comes close enough to that planet, tidal forces can cause the moon to break apart.", "Around 160 million years ago, a large moon (Chrysalis) came close enough to Saturn that tidal forces broke the moon apart; its debris then formed the planet’s rings.", "First, researchers proposed that Saturn was orbited by a large moon (Chrysalis); next, they conducted simulations; and, finally, they formed a hypothesis."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence recounts the sequence of events proposed by the researchers: a large moon orbiting Saturn came close enough to the planet that it was broken apart by tidal forces, and the resulting debris formed Saturn’s rings."),
      distractors: {
        A: L("Choice A is incorrect because the sentence misrepresents information from the notes; according to the notes, tidal forces, not debris, caused the moon to break apart."),
        B: L("Choice B is incorrect. The sentence offers information relevant to the 2022 study but doesn’t recount the sequence of events proposed by the researchers."),
        D: L("Choice D is incorrect. The sentence recounts a sequence, but it’s a sequence of the researchers’ activities, not the sequence of events proposed by the researchers.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-f6d454c1", "f6d454c1", 394)
    },
    {
      id: "rw-rs-92dec236",
      sourceQuestionId: "92dec236",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Maika’i Tubbs is a Native Hawaiian sculptor and installation artist.</li><li style=\"margin:.25em 0\">His work has been shown in the United States, Canada, Japan, and Germany, among other places.</li><li style=\"margin:.25em 0\">Many of his sculptures feature discarded objects.</li><li style=\"margin:.25em 0\">His work Erasure (2008) includes discarded audiocassette tapes and magnets.</li><li style=\"margin:.25em 0\">His work Home Grown (2009) includes discarded pushpins, plastic plates and forks, and wood.</li></ul>",
      stem: "The student wants to emphasize a similarity between the two works. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Erasure (2008) uses discarded objects such as audiocassette tapes and magnets; Home Grown (2009), however, includes pushpins, plastic plates and forks, and wood.", "Tubbs’s work, which often features discarded objects, has been shown both within the United States and abroad.", "Like many of Tubbs’s sculptures, both Erasure and Home Grown include discarded objects: Erasure uses audiocassette tapes, and Home Grown uses plastic forks.", "Tubbs completed Erasure in 2008 and Home Grown in 2009."],
      answer: "C",
      explanation: L("Choice C is the best answer. This choice most effectively emphasizes \"a similarity\" by identifying a trait the works share: \"both Erasure and Home Grown include discarded objects. \""),
      distractors: {
        A: L("Choice A is incorrect. This choice doesn’t \"emphasize a similarity. \" Instead, this choice shows how the materials used in the two works are different. Notice the use of the contrast word \"however. \""),
        B: L("Choice B is incorrect. This choice doesn’t \"emphasize a similarity between the two works. \" While it says that Tubbs’s work \"often features discarded objects, \" it doesn’t provide details about the two works in question."),
        D: L("Choice D is incorrect. This choice doesn’t \"emphasize a similarity. \" Instead, this choice shows how the works were produced at different times.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-92dec236", "92dec236", 395)
    },
    {
      id: "rw-rs-e1453c88",
      sourceQuestionId: "e1453c88",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">1914: British explorer Ernest Shackleton and a small crew embarked on an expedition to Antarctica.</li><li style=\"margin:.25em 0\">1915: Shackleton’s ship Endurance became stuck in ice before eventually breaking apart and sinking.</li><li style=\"margin:.25em 0\">1916: After more harrowing sea-ice adventures, the entire crew was rescued.</li><li style=\"margin:.25em 0\">1959: Historian Alfred Lansing wrote a book called Endurance: Shackleton’s Incredible Voyage.</li><li style=\"margin:.25em 0\">2001: Filmmaker George Butler released a documentary called The Endurance: Shackleton’s Legendary Antarctic Expedition.</li><li style=\"margin:.25em 0\">2022: The wreckage of Endurance was discovered at the bottom of Antarctica’s Weddell Sea.</li></ul>",
      stem: "The student wants to provide a historical overview of the Shackleton expedition. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["Leaving in 1914 for Antarctica, Shackleton and his crew underwent many harrowing sea-ice adventures, including losing their ship in 1915, before being rescued in 1916.", "In 1914, the Shackleton expedition sailed to Antarctica, where, in 1916, they rescued the crew of a ship that had sunk, Endurance (the wreckage of which was discovered in 2022).", "Shackleton’s expedition has inspired a 1959 book, a 2001 film, and a 2022 discovery.", "Alfred Lansing wrote about the history of Shackleton’s 1914–16 expedition in the book Endurance: Shackleton’s Incredible Voyage (1959); years later, in 2001, George Butler released a documentary about the expedition."],
      answer: "A",
      explanation: L("Choice A is the best answer. The sentence provides a historical overview of the Shackleton expedition, noting that the explorers left for Antarctica in 1914, lost their ship in 1915, and were rescued in 1916."),
      distractors: {
        B: L("Choice B is incorrect. The sentence misrepresents information from the notes; Shackleton and his crew were themselves rescued in 1916—they weren’t rescuing others."),
        C: L("Choice C is incorrect. The sentence provides examples of works and discoveries inspired by the expedition; it doesn’t provide an overview of the expedition itself."),
        D: L("Choice D is incorrect. The sentence provides examples of works made about the expedition; it doesn’t provide an overview of the expedition itself.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-e1453c88", "e1453c88", 396)
    },
    {
      id: "rw-rs-bfad4508",
      sourceQuestionId: "bfad4508",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">Brass is a metal alloy composed primarily of zinc and copper.</li><li style=\"margin:.25em 0\">Alpha brass contains less than 35% zinc.</li><li style=\"margin:.25em 0\">It is more malleable than beta brass and can be manipulated at room temperature.</li><li style=\"margin:.25em 0\">Beta brass contains more than 45% zinc.</li><li style=\"margin:.25em 0\">It is harder and stronger than alpha brass but is more difficult to work with because it requires heat to manipulate.</li></ul>",
      stem: "The student wants to specify an advantage of alpha brass. Which choice most effectively uses information from the notes to accomplish this goal?",
      options: ["As a metal alloy composed primarily of zinc and copper, alpha brass has a notable advantage over beta brass.", "Unlike beta brass, which requires heat to manipulate, alpha brass can be shaped at room temperature.", "Alpha brass contains less than 35% zinc, whereas beta brass contains more than 45% zinc.", "With its higher zinc content, alpha brass is a stronger material than beta brass."],
      answer: "B",
      explanation: L("Choice B is the best answer. The sentence specifies an advantage of alpha brass, noting that unlike beta brass, which requires heat to manipulate, alpha brass can be shaped at room temperature."),
      distractors: {
        A: L("Choice A is incorrect. While the sentence indicates that alpha brass has an advantage over beta brass, it doesn’t specify what that advantage is. Both alpha brass and beta brass are metal alloys composed primarily of zinc and copper."),
        C: L("Choice C is incorrect. The sentence contrasts the zinc content of alpha and beta brass; it doesn’t specify an advantage of alpha brass."),
        D: L("Choice D is incorrect. While the sentence does specify an advantage, it misrepresents information from the notes: beta brass, not alpha brass, has the higher zinc content and is the stronger material.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-bfad4508", "bfad4508", 397)
    },
    {
      id: "rw-rs-87d34a39",
      sourceQuestionId: "87d34a39",
      skillId: "rw.ei.rhetorical-synthesis", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p class=\"small muted\">While researching a topic, a student has taken the following notes.</p><ul style=\"list-style:disc;padding-left:20px\"><li style=\"margin:.25em 0\">The National Congress of American Indians (NCAI) was founded in 1944 by representatives of fifty tribal governments.</li><li style=\"margin:.25em 0\">The NCAI was created to protect the sovereignty of Indigenous tribes.</li><li style=\"margin:.25em 0\">Napoleon B. Johnson (Cherokee) was the NCAI’s first president.</li><li style=\"margin:.25em 0\">In 1975, the US Congress passed the Indian Self-Determination and Education Assistance Act (Public Law 96-638).</li><li style=\"margin:.25em 0\">This legislation formally acknowledged tribes’ right to self-governance.</li><li style=\"margin:.25em 0\">The advocacy of the NCAI was a key factor in the law’s passing.</li></ul>",
      stem: "The student wants to identify an accomplishment of the NCAI. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
      options: ["The NCAI, founded by representatives of fifty tribal governments, had Napoleon B. Johnson (Cherokee) as its first president.", "Founded in 1944, the NCAI was created by representatives of tribal governments from fifty sovereign Indigenous tribes.", "The NCAI’s advocacy was key to the passing of Public Law 96-638, legislation formally acknowledging Indigenous tribes’ right to self-governance.", "In 1975, the NCAI passed the Indian Self-Determination and Education Assistance Act, which was created to protect the sovereignty of Indigenous tribes."],
      answer: "C",
      explanation: L("Choice C is the best answer. The sentence directly identifies an accomplishment of the NCAI: that its advocacy was key to the passing of Public Law 96-638, which formally acknowledged Indigenous tribes’ right to self-governance."),
      distractors: {
        A: L("Choice A is incorrect. The sentence provides information about the NCAI’s founding and its first president, but it doesn’t identify an accomplishment of the organization."),
        B: L("Choice B is incorrect. The sentence describes the NCAI’s founding, but it doesn’t identify an accomplishment of the organization."),
        D: L("Choice D is incorrect. The sentence misrepresents the information in the notes: the US Congress, not the NCAI, passed the Indian Self-Determination and Education Assistance Act.")
      },
      hints: [], calculator: false,
      meta: SM("rw-rs-87d34a39", "87d34a39", 398)
    }
  ]);

  /* ================= rw.ei.transitions — Transitions (194) ================= */
  JTS.data.addQuestions([
    {
      id: "rw-tr-2b08f514",
      sourceQuestionId: "2b08f514",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The prime meridian, the global indicator of zero degrees longitude established in 1884, was originally determined using astronomically derived coordinates. ______ as decades passed, new calculations would reveal increasingly precise coordinates, yet the prime meridian remained unchanged; it wasn’t until the 1980s that, spurred by improved geodetic data, the prime meridian was officially moved—roughly one hundred meters east.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Specifically,", "To that end,", "Again and again,", "Granted,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Again and again\" logically signals that the information in this sentence—that new calculations revealed increasingly precise coordinates for the location of the prime meridian—refers to events that occurred multiple times in the decades after the establishment of the prime meridian in 1884 (which is described in the preceding sentence)."),
      distractors: {
        A: L("Choice A is incorrect because \"specifically\" illogically signals that the information in this sentence provides specific, precise details elaborating on the description of the prime meridian’s establishment in the previous sentence. Instead, the sentence indicates that increasingly precise coordinates were revealed on multiple occasions in the decades following the meridian’s establishment."),
        B: L("Choice B is incorrect because \"to that end\" illogically signals that the information in this sentence is a means of accomplishing a goal established in the previous sentence about the prime meridian’s establishment. Instead, the sentence indicates that increasingly precise coordinates were revealed on multiple occasions in the decades following the meridian’s establishment."),
        D: L("Choice D is incorrect because \"granted\" illogically signals that the information in this sentence is in opposition to the information about the prime meridian’s establishment in the previous sentence. Instead, the sentence indicates that increasingly precise coordinates were revealed on multiple occasions in the decades following the meridian’s establishment.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-2b08f514", "2b08f514", 1)
    },
    {
      id: "rw-tr-e0bd4f8a",
      sourceQuestionId: "e0bd4f8a",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1942, the 1,500-mile Alaska Highway was constructed in under nine months, largely due to the skilled work of nearly 4,000 African American soldiers from US Army engineering regiments. The soldiers’ contribution was overlooked for decades. ______ in 2017, lawmakers declared October 25 a day of recognition—“Alaska Highway Day”—for the troops who helped build this critical roadway.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Lastly,", "Then,", "Similarly,", "For example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Then\" logically signals that the event described in this sentence—lawmakers’ 2017 declaration of Alaska Highway Day—is part of a chronological sequence of events, occurring after the decades-long period in which the soldiers’ contribution was overlooked."),
      distractors: {
        A: L("Choice A is incorrect because \"lastly\" illogically signals that this sentence presents the last of a series of points or reasons. Instead, it describes a later event occurring in a chronological sequence of events."),
        C: L("Choice C is incorrect because \"similarly\" illogically signals that the information in this sentence is similar to the previous information about the soldiers’ contribution being overlooked for decades. Instead, it describes an event occurring after that decades-long period."),
        D: L("Choice D is incorrect because \"for example\" illogically signals that this sentence provides an example illustrating the previous information about the soldiers’ contribution being overlooked for decades. Instead, it describes an event occurring after that decades-long period.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e0bd4f8a", "e0bd4f8a", 3)
    },
    {
      id: "rw-tr-660d50dc",
      sourceQuestionId: "660d50dc",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Samuel Coleridge-Taylor was a prominent classical music composer from England who toured the US three times in the early 1900s. The child of a West African father and an English mother, Coleridge-Taylor emphasized his mixed-race ancestry. For example, he referred to himself as Anglo-African. ______ he incorporated the sounds of traditional African music into his classical music compositions.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In addition,", "Actually,", "However,", "Regardless,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “In addition” logically signals that the detail in this sentence—that Coleridge-Taylor included traditional African music in his classical compositions—adds to the information in the previous sentence. Specifically, the previous sentence indicates one way in which Coleridge-Taylor emphasized his mixed-race ancestry, and the claim that follows indicates a second, additional way."),
      distractors: {
        B: L("Choice B is incorrect because “actually” illogically signals that the detail in this sentence is surprising in light of the information in the previous sentence. Instead, the detail adds to the information, indicating a second, additional way in which Coleridge-Taylor emphasized his mixed-race ancestry."),
        C: L("Choice C is incorrect because “however” illogically signals that the detail in this sentence contrasts with the information in the previous sentence. Instead, the detail adds to the information, indicating a second, additional way in which Coleridge-Taylor emphasized his mixed-race ancestry."),
        D: L("Choice D is incorrect because “regardless” illogically signals that the detail in this sentence is true despite the information in the previous sentence. Instead, the detail adds to the information, indicating a second, additional way in which Coleridge-Taylor emphasized his mixed-race ancestry.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-660d50dc", "660d50dc", 4)
    },
    {
      id: "rw-tr-4d2736f0",
      sourceQuestionId: "4d2736f0",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In her poetry collection Thomas and Beulah, Rita Dove interweaves the titular characters’ personal stories with broader historical narratives. She places Thomas’s journey from the American South to the Midwest in the early 1900s within the larger context of the Great Migration. ______ Dove sets events from Beulah’s personal life against the backdrop of the US Civil Rights Movement.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Specifically,", "Thus,", "Regardless,", "Similarly,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Similarly” logically signals that the information in the sentence—that Dove situates Beulah’s life in the context of the US Civil Rights Movement—is similar to the previous information about Thomas and the Great Migration. Both sentences support the first sentence’s claim that Dove portrays her characters in the context of broader historical narratives."),
      distractors: {
        A: L("Choice A is incorrect because “specifically” illogically signals that the information about Beulah in this sentence provides specific details elaborating on the previous information about Thomas. Instead, it’s similar to the previous information about Thomas."),
        B: L("Choice B is incorrect because “thus” illogically signals that the information about Beulah in this sentence is a result or consequence of the previous information about Thomas. Instead, it’s similar to the previous information about Thomas."),
        C: L("Choice C is incorrect because “regardless” illogically signals that the information about Beulah in this sentence is true despite the previous information about Thomas. Instead, it’s similar to the previous information about Thomas.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-4d2736f0", "4d2736f0", 5)
    },
    {
      id: "rw-tr-d3b7d7a3",
      sourceQuestionId: "d3b7d7a3",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Many historical accounts of the 1930s focus on the widespread movement of people from dust bowl–ravaged Great Plains states to faraway California. However, a 2016 study of 1940 census data complicates this popular narrative; ______ researchers determined, migrants in states hardest hit by prolonged droughts and dust storms—Colorado, Kansas, Oklahoma, and Texas—merely relocated within the region.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["for this reason,", "more often,", "additionally,", "nevertheless,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “More often” logically signals that the historical outcome in this clause—dust bowl migrants’ relocation within the Great Plains region—was more common than the movement to California described in many historical accounts."),
      distractors: {
        A: L("Choice A is incorrect because “for this reason” illogically signals that the historical outcome in this clause was caused by either the narrative about widespread movement to California or the 2016 study’s complication of that narrative. Instead, dust bowl migrants’ regional relocation was found to be more common than the movement to California described in many historical accounts."),
        C: L("Choice C is incorrect because “additionally” illogically signals that the historical outcome in this clause merely adds to either the narrative about widespread movement to California or the 2016 study’s complication of that narrative. Instead, dust bowl migrants’ regional relocation was found to be more common than the movement to California described in many historical accounts."),
        D: L("Choice D is incorrect because “nevertheless” illogically signals that the historical outcome in this clause is true despite either the narrative about widespread movement to California or the 2016 study’s complication of that narrative. While the findings about dust bowl migrants’ regional relocation did challenge the previous narrative, they did not challenge the study’s findings, and this choice creates a confusing ambiguity. Instead, dust bowl migrants’ regional relocation was found to be more common than the movement to California described in many historical accounts.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-d3b7d7a3", "d3b7d7a3", 6)
    },
    {
      id: "rw-tr-be44fea0",
      sourceQuestionId: "be44fea0",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>While studying jorō spiders, a large species originally from East Asia, University of Georgia researchers wondered if the spiders’ rapid spread throughout the southeastern US was a result of aggressive behavior. ______ they discovered that jorō spiders are gentle giants who react to even minor disturbances by “freezing” in place for an hour or more.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Therefore,", "Instead,", "For example,", "In other words,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Instead” logically signals that the information about the researchers’ discovery in this sentence—that jorō spiders are gentle giants who “freeze” in place when disturbed—contradicts their initial hypothesis about the spiders’ aggressiveness described in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because “therefore” illogically signals that the discovery about jorō spiders’ gentleness is a result of the initial hypothesis about their aggressive behavior. Instead, the sentence presents information that contradicts the initial hypothesis."),
        C: L("Choice C is incorrect because “for example” illogically signals that the discovery about jorō spiders’ gentleness exemplifies the initial hypothesis about their aggressive behavior. Instead, the sentence presents information that contradicts the initial hypothesis."),
        D: L("Choice D is incorrect because “in other words” illogically signals that the discovery about jorō spiders’ gentleness is merely restating or rephrasing the initial hypothesis about their aggressive behavior. Instead, the sentence presents information that contradicts the initial hypothesis.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-be44fea0", "be44fea0", 13)
    },
    {
      id: "rw-tr-e3edc138",
      sourceQuestionId: "e3edc138",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In a heated debate in biogeography, the field is divided between dispersalists and vicariancists. ______ there are those who argue that dispersal is the most crucial determining factor in a species’ distribution, and those who insist that vicariance (separation due to geographic barriers) is. Biogeographer Isabel Sanmartín counts herself among neither.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Furthermore,", "By contrast,", "Similarly,", "That is,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “That is” logically signals that the information in this sentence, which explains the difference between the dispersalists’ position and the vicariancists’ position, clarifies the terms of the debate between dispersalists and vicariancists introduced in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because “furthermore” illogically signals that the information in this sentence is merely additional to (and separate from) the information in the previous sentence about the debate between dispersalists and vicariancists. Instead, the sentence clarifies the terms of the debate, explaining the difference between the dispersalists’ position and the vicariancists’ position."),
        B: L("Choice B is incorrect because “by contrast” illogically signals that the information in this sentence contrasts with the information in the previous sentence. Instead, the sentence clarifies the terms of the debate between dispersalists and vicariancists introduced in the previous sentence."),
        C: L("Choice C is incorrect because “similarly” illogically signals that the information in this sentence is merely similar to (and separate from) the information in the previous sentence about the debate between dispersalists and vicariancists. Instead, the sentence clarifies the terms of the debate, explaining the difference between the dispersalists’ position and the vicariancists’ position.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e3edc138", "e3edc138", 16)
    },
    {
      id: "rw-tr-cf11282b",
      sourceQuestionId: "cf11282b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Scientists were able to isolate a relatively pure sample of selenium in 1817, the same year they first discovered the element’s existence. ______ the isolation process took longer for molybdenum, which was isolated in its pure form three years after scientists first discovered it.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["By contrast,", "Thus,", "Similarly,", "For instance,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"By contrast\" logically signals that the information in this sentence—that isolating molybdenum was a relatively long process—contrasts with the previous information that isolating selenium was a short process."),
      distractors: {
        B: L("Choice B is incorrect because \"thus\" illogically signals that the information in this sentence is a result of the previous information about selenium’s short isolation process. Instead, the sentence presents contrasting information about molybdenum’s longer isolation process."),
        C: L("Choice C is incorrect because \"similarly\" illogically signals that the information in this sentence is similar to the previous information about selenium’s short isolation process. Instead, the sentence presents contrasting information about molybdenum’s longer isolation process."),
        D: L("Choice D is incorrect because \"for instance\" illogically signals that the information in this sentence exemplifies the previous information about selenium’s short isolation process. Instead, the sentence presents contrasting information about molybdenum’s longer isolation process.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-cf11282b", "cf11282b", 17)
    },
    {
      id: "rw-tr-a40c7aa3",
      sourceQuestionId: "a40c7aa3",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Most of the planets that have been discovered outside our solar system orbit G-type stars, like our Sun. In 2014, ______ researchers identified a planet orbiting KEL T -9, a B-type star more than twice as massive and nearly twice as hot as the Sun. Called KEL T -9b, it is one of the hottest planets ever discovered.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["likewise,", "however,", "therefore,", "for example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The word “however” logically signals that the information in this sentence about the planet KEL T -9b—that it orbits a B-type star—contrasts with the previous information about planets discovered outside our solar system. Most of these planets orbit G-type stars, not B-type stars."),
      distractors: {
        A: L("Choice A is incorrect because “likewise” illogically signals that the information about the planet KEL T -9b is similar to the previous information about most planets outside our solar system. Instead, it contrasts with that information."),
        C: L("Choice C is incorrect because “therefore” illogically signals that the information about the planet KEL T -9b is a result of the previous information about most planets outside our solar system. Instead, it contrasts with that information."),
        D: L("Choice D is incorrect because “for example” illogically signals that the information about the planet KEL T -9b is an example of the previous information about most planets outside our solar system. Instead, it contrasts with that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a40c7aa3", "a40c7aa3", 18)
    },
    {
      id: "rw-tr-00221c00",
      sourceQuestionId: "00221c00",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1815, while in exile in Jamaica, Venezuelan revolutionary Simón Bolívar penned a letter praising England’s republican government and expressing hope that Latin American nations seeking independence from Spain might achieve something similar. The letter was addressed to a local merchant, Henry Cullen; ______ though, Bolívar’s goal was to persuade political leaders from England and Europe to support his cause.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["additionally,", "ultimately,", "accordingly,", "consequently,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Ultimately” means “in the long run” or “at the highest level. ” Although Bolívar wrote to a local merchant, his ultimate goal was to send a message to political leaders in Europe. Therefore, “ultimately” fits perfectly in this context."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a transition that indicates the addition of an agreeing idea. However, the second part of the sentence actually disagrees with the first part. Bolívar addressed the letter to Cullen, but he was really sending a message to someone else. Notice how the contrast word “though” also acts as a transition between these ideas."),
        C: L("Choice C is incorrect. This choice uses a cause-and-effect transition. Bolívar’s writing of the letter to Cullen would not cause him to have a goal of persuading European powers to support him."),
        D: L("Choice D is incorrect. This choice uses a cause-and-effect transition. Bolívar’s writing of the letter to Cullen would not cause him to have a goal of persuading European powers to support him.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-00221c00", "00221c00", 20)
    },
    {
      id: "rw-tr-8a1ad52b",
      sourceQuestionId: "8a1ad52b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A research team led by Gal Badihi has discovered that chimpanzees communicate through exchanges of gestures occurring at a pace similar to that of human conversations. ______ chimpanzee gesture exchanges have short pauses of about 120 milliseconds between communications, comparable to the 200-millisecond average pause between turns in human speech.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "Specifically,", "By contrast,", "Nevertheless,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Specifically” logically signals that the information in this sentence—that pauses between chimpanzee gestures average about 120 milliseconds, comparable to the 200-millisecond average pause in human speech—provides specific, precise details elaborating on the previous sentence’s claim about the pace of chimpanzee communication being similar to that of human conversations."),
      distractors: {
        A: L("Choice A is incorrect because “as a result” illogically signals that this sentence presents a result or consequence of the claim about chimpanzee communication described in the previous sentence. Instead, the sentence provides specific details elaborating on that claim."),
        C: L("Choice C is incorrect because “by contrast” illogically signals that the information about chimpanzee gesture exchanges in this sentence contrasts with the previous sentence’s claim about the pace of chimpanzee communication being similar to that of human conversations. Instead, the sentence provides specific details elaborating on that claim."),
        D: L("Choice D is incorrect because “nevertheless” illogically signals that the information about chimpanzee gesture exchanges in this sentence is true despite the previous claim about the pace of chimpanzee communication. Instead, the sentence provides specific details elaborating on that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-8a1ad52b", "8a1ad52b", 21)
    },
    {
      id: "rw-tr-af89fa02",
      sourceQuestionId: "af89fa02",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Babylonian king Hammurabi achieved much during his forty-year reign. He conquered all of Mesopotamia and built Babylon into one of the most powerful cities of the ancient world. Today, ______ he is mainly remembered for a code of laws inscribed on a seven-foot-tall block of stone: the Code of Hammurabi.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["therefore,", "likewise,", "however,", "for instance,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “However” logically signals that the information in this sentence—that Hammurabi is mainly remembered for just a single achievement, the Code of Hammurabi—is contrary to what might be assumed from the previous information about Hammurabi’s many achievements."),
      distractors: {
        A: L("Choice A is incorrect because “therefore” illogically signals that the information in this sentence is a result of the previous information about Hammurabi’s many achievements. Instead, this sentence makes a point that is contrary to what might be assumed from the previous information."),
        B: L("Choice B is incorrect because “likewise” illogically signals that the information in this sentence is similar to the previous information about Hammurabi’s many achievements. Instead, this sentence makes a point that is contrary to what might be assumed from the previous information."),
        D: L("Choice D is incorrect because “for instance” illogically signals that this sentence exemplifies the previous information about Hammurabi’s many achievements. Instead, this sentence makes a point that is contrary to what might be assumed from the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-af89fa02", "af89fa02", 22)
    },
    {
      id: "rw-tr-d9dad012",
      sourceQuestionId: "d9dad012",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Inca of South America used intricately knotted string devices called quipus to record countable information, like population data and payments. ______ they may have used quipus to record more complex information, like stories and myths, according to researchers.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "In other words,", "In addition,", "For example,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"In addition\" logically signals that the claim in this sentence—that the Inca of South America may have used quipus to record more complex information—is an additional point related to the previous statement about the Inca using quipus to record countable information."),
      distractors: {
        A: L("Choice A is incorrect because \"as a result\" illogically signals that the claim in the sentence is a consequence or result of the previous statement about the Inca using quipus to record countable information. Instead, the possibility that the Inca used quipus to record more complex information is an additional point about how the quipus were used."),
        B: L("Choice B is incorrect because \"in other words\" illogically signals that the claim in the sentence is merely a paraphrase or restatement of the previous statement about the Inca using quipus to record countable information. Instead, the possibility that the Inca used quipus to record more complex information is an additional point about how the quipus were used."),
        D: L("Choice D is incorrect because \"for example\" illogically signals that the claim in the sentence exemplifies the previous statement about the Inca using quipus to record countable information. Instead, the possibility that the Inca used quipus to record more complex information is an additional point about how the quipus were used.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-d9dad012", "d9dad012", 25)
    },
    {
      id: "rw-tr-601b9d18",
      sourceQuestionId: "601b9d18",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Some members of the US Supreme Court have resisted calls to televise the court’s oral arguments, concerned that the participants would be tempted to perform for the cameras (and thus lower the quality of the discourse). ______ the justices worry that most viewers would not even watch the full deliberations, only short clips that could be misinterpreted and mischaracterized.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "Additionally,", "In comparison,", "For example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Additionally” logically signals that the claim in this sentence—that some Supreme Court justices worry that viewers (of televised court arguments) would watch only short, misleading clips—adds to the information in the previous sentence. Specifically, the previous sentence indicates one concern raised by those opposed to televising the court’s oral arguments, and the claim that follows indicates a second, additional concern."),
      distractors: {
        A: L("Choice A is incorrect because “however” illogically signals that the claim in this sentence contrasts with the information in the previous sentence. Instead, the claim adds to the information, indicating a second, additional concern that some Supreme Court justices have about televising the court’s arguments."),
        C: L("Choice C is incorrect because “in comparison” illogically signals that the claim in this sentence is being compared to the information in the previous sentence. Instead, the claim adds to the information, indicating a second, additional concern that some Supreme Court justices have about televising the court’s arguments."),
        D: L("Choice D is incorrect because “for example” illogically signals that the claim in this sentence exemplifies the information in the previous sentence. Instead, the claim adds to the information, indicating a second, additional concern that some Supreme Court justices have about televising the court’s arguments.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-601b9d18", "601b9d18", 27)
    },
    {
      id: "rw-tr-60917233",
      sourceQuestionId: "60917233",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In the 1880s, inventor Lewis Latimer improved upon Thomas Edison’s design for the electric light bulb. ______ Latimer made the light bulb more durable by placing cardboard around its carbon filament. With this innovation, Latimer became the first Black inventor to contribute to the electrification of the world.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Soon,", "Regardless,", "However,", "Specifically,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Specifically\" logically signals that the information in this sentence—Latimer making the light bulb more durable— provides a specific detail elaborating on the more general claim in the previous sentence that Latimer improved the light bulb."),
      distractors: {
        A: L("Choice A is incorrect because \"soon\" illogically signals that the information in this sentence occurred shortly after Latimer improved the light bulb. Instead, Latimer making the bulb more durable was the specific improvement."),
        B: L("Choice B is incorrect because \"regardless\" illogically signals that the information in this sentence is true despite the previous claim about Latimer. Instead, the information about Latimer making the bulb more durable provides a specific detail elaborating on that claim."),
        C: L("Choice C is incorrect because \"however\" illogically signals that the information in this sentence contrasts with the previous claim about Latimer. Instead, the information about Latimer making the bulb more durable provides a specific detail elaborating on that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-60917233", "60917233", 28)
    },
    {
      id: "rw-tr-ec3d7605",
      sourceQuestionId: "ec3d7605",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Award-winning travel writer Linda Watanabe McFerrin considers the background research she conducts on destinations featured in her travel books to be its own reward. ______ McFerrin admits to finding the research phase of her work just as fascinating and engaging as exploring a location in person.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["By contrast,", "Likewise,", "Besides,", "In fact,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “In fact” logically signals that the information in this sentence—that McFerrin finds the research phase of her work to be just as fascinating as travel—emphasizes and elaborates on the previous sentence’s point that McFerrin regards background research as a rewarding activity."),
      distractors: {
        A: L("Choice A is incorrect because “by contrast” illogically signals that the information in this sentence contrasts with the previous sentence’s point about McFerrin’s attitude toward background research. Instead, it emphasizes and elaborates on that point."),
        B: L("Choice B is incorrect because “likewise” illogically signals that this sentence merely adds a second, similar point to the previous sentence’s point about McFerrin’s attitude toward background research. Instead, it emphasizes and elaborates on that point."),
        C: L("Choice C is incorrect because “besides” illogically signals that this sentence provides a separate point in addition to, or apart from, the previous sentence’s point about McFerrin’s attitude toward background research. Instead, it emphasizes and elaborates on that point.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-ec3d7605", "ec3d7605", 30)
    },
    {
      id: "rw-tr-a819d8b6",
      sourceQuestionId: "a819d8b6",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 1873, Spanish scientist Santiago Ramón y Cajal observed that brain fibers have distinct boundaries with clear end points, a finding that went against earlier assumptions about the brain. ______ scientists had assumed that the brain was a continuous web of fused fibers, not a vast network of distinct, individual cells.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "Previously,", "As a result,", "Likewise,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Previously” logically signals that the fused fiber theory came before Ramón y Cajal’s discovery."),
      distractors: {
        A: L("Choice A is incorrect. “However” illogically signals that the fused fiber theory in this sentence contrasts with the information in the previous sentence. While this theory does contrast with Ramón y Cajal’s discovery, the previous sentence concludes by stating that his discovery went against prior assumptions about the brain. The fact that the fused fiber theory was one of those earlier assumptions makes “however” an illogical choice."),
        C: L("Choice C is incorrect because “as a result” illogically signals that the fused fiber theory in this sentence was a result of the discovery in the previous sentence. Instead, the fused fiber theory came before Ramón y Cajal’s discovery."),
        D: L("Choice D is incorrect because “likewise” illogically signals that the fused fiber theory in this sentence was similar to the discovery in the previous sentence. Instead, the fused fiber theory, which came before Ramón y Cajal’s discovery, was very different from it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a819d8b6", "a819d8b6", 32)
    },
    {
      id: "rw-tr-42e6cc83",
      sourceQuestionId: "42e6cc83",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In hindsight, given the ideas about the natural world circulating among British scientists in the 1800s, the theory of natural selection was an obvious next step. It may not have been a coincidence, ______ that Charles Darwin and Alfred Wallace arrived at the concept independently. Indeed, contrary to the popular myth of the lone genius, theirs is not the first paradigm-shifting theory to have emerged from multiple scholars working in parallel.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["however,", "then,", "moreover,", "for example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Then\" signals that this sentence’s claim about Darwin and Wallace follows logically from the previous information. In other words, both scientists independently arriving at the theory of natural selection was, arguably, an expected outcome of the circumstances mentioned in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because \"however\" illogically signals that the claim in this sentence contrasts with the previous information about the ideas circulating among British scientists in the 1800s. Instead, this claim follows logically from that information."),
        C: L("Choice C is incorrect because \"moreover\" illogically signals that the claim in this sentence merely adds to the previous information about the ideas circulating among British scientists in the 1800s. Instead, this claim follows logically from that information."),
        D: L("Choice D is incorrect because \"for example\" illogically signals that this sentence provides an example supporting the previous information about the ideas circulating among British scientists in the 1800s. Instead, it presents a claim that follows logically from that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-42e6cc83", "42e6cc83", 34)
    },
    {
      id: "rw-tr-326017ce",
      sourceQuestionId: "326017ce",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>For years, biologists have experimented with using grime-eating bacteria rather than harsh chemicals to clean artworks, and results have been impressive overall. ______ these bacterial strains—which can metabolize centuries’ worth of oil, glue, dirt, and other surface impurities without creating harmful byproducts—have proven more effective than traditional chemical cleaning methods.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "In many cases,", "As a result,", "Additionally,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “In many cases” logically links the information that follows to the previous sentence’s claim that the results of bacterial cleaning “have been impressive overall. ” This sentence supports that claim by indicating that the bacteria “have proven more effective than traditional chemical cleaning methods. ” Noting that this is true “in many cases” appropriately frames the information in the sentence and thus completes the text with the most logical transition."),
      distractors: {
        A: L("Choice A is incorrect because “however” illogically signals that the information in this sentence contrasts with the previous information. Instead, this sentence supports the previous sentence’s claim that the results of bacterial cleaning “have been impressive overall, ” noting that the bacteria “have proven more effective than traditional chemical cleaning methods. ”"),
        C: L("Choice C is incorrect because “as a result” illogically signals that the information in this sentence is a consequence of the claim about the results of bacterial cleaning. Instead, this sentence supports the previous sentence’s claim that the results of bacterial cleaning “have been impressive overall, ” noting that the bacteria “have proven more effective than traditional chemical cleaning methods. ”"),
        D: L("Choice D is incorrect because “additionally” illogically signals that the information in this sentence is merely additional to (and separate from) the previous information about the results of bacterial cleaning. Instead, this sentence supports the previous sentence’s claim that the results of bacterial cleaning “have been impressive overall, ” noting that the bacteria “have proven more effective than traditional chemical cleaning methods. ”")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-326017ce", "326017ce", 35)
    },
    {
      id: "rw-tr-c78620ba",
      sourceQuestionId: "c78620ba",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1968, US Congressman John Conyers introduced a bill to establish a national holiday in honor of Dr. Martin Luther King Jr. The bill didn’t make it to a vote, but Conyers was determined. He teamed up with Shirley Chisholm, the first Black woman to be elected to Congress, and they resubmitted the bill every session for the next fifteen years. ______ in 1983, the bill passed.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Instead,", "Likewise,", "Finally,", "Additionally,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Finally” logically signals that the bill passing—following many attempts between 1968 and 1983—is the final, concluding event in the sequence described in the previous sentences."),
      distractors: {
        A: L("Choice A is incorrect because “instead” illogically signals that the bill passing is an alternative to one of the events described in the previous sentences. Instead, it is the final event in the sequence."),
        B: L("Choice B is incorrect because “likewise” illogically signals that the bill passing is similar to one of the events described in the previous sentences. Instead, it is the final event in the sequence."),
        D: L("Choice D is incorrect because “additionally” illogically signals that the bill passing is merely another event described along with the events of the previous sentences. Instead, it is the final, concluding event in the sequence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-c78620ba", "c78620ba", 36)
    },
    {
      id: "rw-tr-20733eac",
      sourceQuestionId: "20733eac",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>It has long been thought that humans first crossed a land bridge into the Americas approximately 13,000 years ago. ______ based on radiocarbon dating of samples uncovered in Mexico, a research team recently suggested that humans may have arrived more than 30,000 years ago—much earlier than previously thought.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "Similarly,", "However,", "In conclusion,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “However” logically signals that the theory discussed in this sentence—that humans may have arrived in the Americas over 30,000 years ago—contrasts with the previously discussed theory that humans arrived around 13,000 years ago."),
      distractors: {
        A: L("Choice A is incorrect because “as a result” illogically signals that the theory in this sentence is the result of the theory discussed in the previous sentence. Instead, this theory contrasts with the previous one."),
        B: L("Choice B is incorrect because “similarly” illogically signals that the theory in this sentence is similar to the theory discussed in the previous sentence. Instead, this theory contrasts with the previous one."),
        D: L("Choice D is incorrect because “in conclusion” illogically signals that the theory in this sentence concludes or summarizes the discussion of the previous theory. Instead, this theory contrasts with the previous one.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-20733eac", "20733eac", 37)
    },
    {
      id: "rw-tr-94c9788e",
      sourceQuestionId: "94c9788e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Brain imaging research led by neuroscientist Dwaynica Greaves found that actors showed suppressed responses in the left anterior prefrontal cortex (the portion of the brain associated with self-awareness) when their names were called during performances; ______ the actors’ responses were normal in nonacting contexts. These findings suggest that when embodying characters, performers may temporarily set aside their personal identities.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["specifically,", "conversely,", "likewise,", "thus,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Conversely” logically signals that the information in this sentence—that the actors’ responses were normal in nonacting contexts—presents the opposite of the previous finding that actors showed suppressed responses when their names were called during performances."),
      distractors: {
        A: L("Choice A is incorrect because “specifically” illogically signals that the information about the actors’ normal responses in nonacting contexts provides specific details elaborating on the previous finding of suppressed responses during performances. Instead, the sentence presents the responses as opposites."),
        C: L("Choice C is incorrect because “likewise” illogically signals that the actors’ normal responses in nonacting contexts are similar to the suppressed responses observed during performances. Instead, the sentence presents the responses as opposites."),
        D: L("Choice D is incorrect because “thus” illogically signals that the actors’ normal responses in nonacting contexts are a result or consequence of the suppressed responses observed during performances. Instead, the sentence presents the responses as opposites.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-94c9788e", "94c9788e", 38)
    },
    {
      id: "rw-tr-e1079609",
      sourceQuestionId: "e1079609",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1845, the United States District Court for the state of Iowa was established. Initially, the court’s jurisdiction was a single district that encompassed the entire state, but as Iowa’s population grew, this single district began to struggle to serve the needs of everyone in the state. ______ the court’s jurisdiction was subdivided into two districts, each with its own district court.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Nevertheless,", "Ultimately,", "Additionally,", "For example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Ultimately” logically signals that the information in this sentence—that the court’s jurisdiction was subdivided into two districts—was the eventual outcome or resolution of the previously described struggle of the single district to serve the needs of everyone in the state."),
      distractors: {
        A: L("Choice A is incorrect because “nevertheless” illogically signals that the information in the sentence is true despite the single district’s struggle to serve the state’s needs. Instead, the sentence describes the eventual resolution of that struggle."),
        C: L("Choice C is incorrect because “additionally” illogically signals that the information in the sentence is merely an additional fact related to the single district’s struggle. Instead, the sentence describes the eventual resolution of that struggle."),
        D: L("Choice D is incorrect because “for example” illogically signals that the information in the sentence provides a specific example of the single district’s struggle to serve the state’s needs. Instead, the sentence describes the eventual resolution of that struggle.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e1079609", "e1079609", 39)
    },
    {
      id: "rw-tr-e6b1e12c",
      sourceQuestionId: "e6b1e12c",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Long thought to be sessile (immobile), adult Chelonibia testudinaria, barnacles that adhere to sea turtle shells, have been observed to shift slightly in position over time—a phenomenon that has been attributed to the barnacles’ passive displacement by water currents. ______ a research team found that adult C. testudinaria moved toward the heads of their sea turtle hosts and thus against the prevailing water flow, behavior consistent with self-initiated locomotion.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Contrary to this phenomenon,", "Undermining this explanation,", "Drawing a similar conclusion,", "Confirming this hypothesis,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Undermining this explanation” logically signals that the information in this sentence—that adult Chelonibia testudinaria showed behavior consistent with self-initiated locomotion—undermines or weakens the previous explanation that barnacle movement was a result of passive displacement by water currents."),
      distractors: {
        A: L("Choice A is incorrect because “contrary to this phenomenon” illogically signals that the information in this sentence about barnacles exhibiting behavior consistent with self-initiated locomotion opposes the previous information about barnacles shifting slightly in position over time. Instead, the sentence undermines or weakens the previous claim about passive displacement. That is, the sentence doesn’t oppose the fact that the barnacles shifted position: it challenges the previous sentence’s explanation for the movement."),
        C: L("Choice C is incorrect because “drawing a similar conclusion” illogically signals that the information in this sentence about barnacles exhibiting behavior consistent with self-initiated locomotion is similar to the previous conclusion that barnacle movement is the result of passive displacement. Instead, the sentence undermines or weakens the previous sentence’s explanation for how the barnacles moved."),
        D: L("Choice D is incorrect because “confirming this hypothesis” illogically signals that the information in this sentence about barnacles exhibiting behavior consistent with self-initiated locomotion confirms the hypothesis in the previous sentence that the barnacle movement was the result of passive displacement. Instead, the sentence undermines or weakens the previous sentence’s explanation for how the barnacles moved.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e6b1e12c", "e6b1e12c", 44)
    },
    {
      id: "rw-tr-f07570bb",
      sourceQuestionId: "f07570bb",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Researchers believe that pieces of hull found off Oregon’s coast are from a Spanish cargo ship that was lost in 1697. Stories passed down among the area’s Confederated Tribes of Siletz Indians support this belief. ______ Siletz stories describe how blocks of beeswax, an item the ship had been carrying, began washing ashore after the ship was lost.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For this reason,", "For example,", "However,", "Likewise,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “For example” logically signals that the Siletz beeswax stories mentioned in this sentence are examples consistent with the previous claim that Siletz stories support the shipwreck theory."),
      distractors: {
        A: L("Choice A is incorrect because “for this reason” illogically signals that the Siletz stories about the beeswax were caused by the previous claim that Siletz stories support the shipwreck theory. Instead, the beeswax stories are examples consistent with the claim."),
        C: L("Choice C is incorrect because “however” illogically signals that the Siletz stories about the beeswax contrast with the previous claim that Siletz stories support the shipwreck theory. Instead, the beeswax stories are examples consistent with the claim."),
        D: L("Choice D is incorrect because “likewise” illogically signals that the Siletz stories about the beeswax are similar to the previous claim that Siletz stories support the shipwreck theory. Instead, the beeswax stories are examples consistent with the claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f07570bb", "f07570bb", 45)
    },
    {
      id: "rw-tr-221ecf0f",
      sourceQuestionId: "221ecf0f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Alexander Lawrence Posey (1873–1908) varied his focus and tone depending on the genre in which he was writing. In his poetry, he used heartfelt language to evoke the beauty and peacefulness of his natural surroundings; in his journalism, ______ he employed humor and satire to comment on political issues affecting his Muskogee Creek community.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["that is,", "granted,", "similarly,", "by contrast,"],
      answer: "D",
      explanation: L("Choice D is the best answer. This sentence compares two examples of Posey’s tone: the “heartfelt language” he used in his poetry versus the “humor and satire” he used in his journalism. We know from these descriptions and from the claim in the previous sentence that the two tones are very different from each other. So the transition “by contrast” fits the context perfectly."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a transition that indicates a restatement of the same idea in other words. But the text isn’t restating the first example here. Instead, it’s offering a second, totally different example."),
        B: L("Choice B is incorrect. This choice uses a transition that means “admittedly. ” But the text isn’t admitting or conceding anything here. Instead, these two examples work together to support the claim made in the first sentence."),
        C: L("Choice C is incorrect. This choice uses a transition that indicates the addition of an agreeing idea. But these two examples are intentionally very different from each other, so “similarly” doesn’t make sense here.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-221ecf0f", "221ecf0f", 47)
    },
    {
      id: "rw-tr-92fe0ed7",
      sourceQuestionId: "92fe0ed7",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Geoscientists have long considered Hawaii’s Mauna Loa volcano to be Earth’s largest shield volcano by volume, measuring approximately 74,000 cubic kilometers. ______ according to a 2020 study by local geoscientist Michael Garcia, Hawaii’s Pūhāhonu shield volcano is significantly larger, boasting a volume of about 148,000 cubic kilometers.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Secondly,", "Consequently,", "Moreover,", "However,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “However” logically signals that this sentence, which indicates that the Pūhāhonu volcano may be larger than the Mauna Loa volcano, offers a contrast to or refutation of the previous assumption that Mauna Loa is the largest shield volcano."),
      distractors: {
        A: L("Choice A is incorrect because “secondly” illogically signals that this sentence merely offers an additional or secondary point concerning the previous assumption that Mauna Loa is the largest shield volcano. Instead, the sentence offers a contrast to or refutation of that assumption."),
        B: L("Choice B is incorrect because “consequently” illogically signals that this sentence offers a result or consequence of the previous assumption that Mauna Loa is the largest shield volcano. Instead, the sentence offers a contrast to or refutation of that assumption."),
        C: L("Choice C is incorrect because “moreover” illogically signals that this sentence merely adds to the previous assumption that Mauna Loa is the largest shield volcano. Instead, the sentence offers a contrast to or refutation of that assumption.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-92fe0ed7", "92fe0ed7", 50)
    },
    {
      id: "rw-tr-a965c6ed",
      sourceQuestionId: "a965c6ed",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A turtle shell appears external to the animal, protecting its body like armor. ______ the shell is often incorrectly assumed to be an exoskeleton, a rigid outer casing like that of a crustacean or an insect, when in fact it is an endoskeleton, a part of the turtle’s internal bone structure, more akin to a spine or a pair of ribs.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["That being said,", "However,", "For instance,", "Hence,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Hence\" logically signals that the information in this sentence about turtle shells—that people incorrectly assume they are exoskeletons—is a consequence of the shells appearing external to the animal."),
      distractors: {
        A: L("Choice A is incorrect because \"that being said\" illogically signals that this sentence qualifies or contrasts with the previous information about turtle shells appearing external to the animal. Instead, it presents a consequence of that information."),
        B: L("Choice B is incorrect because \"however\" illogically signals that this sentence contrasts with the previous information about turtle shells appearing external to the animal. Instead, it presents a consequence of that information."),
        C: L("Choice C is incorrect because \"for instance\" illogically signals that this sentence provides an example supporting the previous information about turtle shells appearing external to the animal. Instead, it presents a consequence of that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a965c6ed", "a965c6ed", 51)
    },
    {
      id: "rw-tr-97e2e364",
      sourceQuestionId: "97e2e364",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Okot p’Bitek’s poem Song of Lawino (1966) explores postcolonial Ugandan life through the eyes of a woman living in a rural village. With its vibrant imagery, bitingly satiric tone, and dexterous use of traditional Acholi song and phraseology, the poem inspired a generation of East African writers. ______ those who adopted its style are often referred to as Okot School poets.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Nevertheless,", "Fittingly,", "By comparison,", "Instead,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Fittingly” is a transition that means “appropriately” or “suitably, ” and it is appropriate that writers who adopted their style from Okot p’Bitek would be known as the Okot School poets."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a disagreement transition. But this sentence is not disagreeing with anything—rather, it’s discussing how it makes sense for those writers who adopted Okot’s style to be known as the Okot School poets."),
        C: L("Choice C is incorrect. This choice uses a transition that compares two ideas. But this sentence is not comparing the Okot School poets and their style to Okot’s style."),
        D: L("Choice D is incorrect. This choice uses a disagreement transition. But this sentence is not disagreeing with anything—rather, it’s discussing how it makes sense for those writers who adopted Okot’s style to be known as the Okot School poets.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-97e2e364", "97e2e364", 52)
    },
    {
      id: "rw-tr-01c8c433",
      sourceQuestionId: "01c8c433",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Before the 1847 introduction of the US postage stamp, the cost of postage was usually paid by the recipient of a letter rather than the sender, and recipients were not always able or willing to pay promptly. ______ collecting this fee could be slow and arduous, and heaps of unpaid-for, undeliverable mail piled up in post offices.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Regardless,", "On the contrary,", "Consequently,", "For example,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Consequently” logically signals that the postal problems described in this sentence (slow fee collection, heaps of undeliverable mail) were a consequence of the fee system described in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because “regardless” illogically signals that the postal problems described in this sentence occurred despite the fee system described in the previous sentence. Instead, they were a consequence of that system."),
        B: L("Choice B is incorrect because “on the contrary” illogically signals that the postal problems described in this sentence contrast with the fee system described in the previous sentence. Instead, they were a consequence of that system."),
        D: L("Choice D is incorrect because “for example” illogically signals that the postal problems described in this sentence are an example of the fee system described in the previous sentence. Instead, they were a consequence of that system.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-01c8c433", "01c8c433", 54)
    },
    {
      id: "rw-tr-1e655377",
      sourceQuestionId: "1e655377",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Denali National Park and Preserve is an important tourist destination in Alaska. Many visitors assume that its $15 entry fee is charged per vehicle. ______ that fee is charged per person.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Consequently,", "Second,", "Moreover,", "Actually,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Actually” logically signals that the information in this sentence—that the entry fee is charged per person—corrects the assumption described in the previous sentence that the fee is charged per vehicle."),
      distractors: {
        A: L("Choice A is incorrect because “consequently” illogically signals that the fee being charged per person is a consequence of visitors assuming the fee is charged per vehicle. Instead, the sentence corrects that assumption."),
        B: L("Choice B is incorrect because “second” illogically signals that the fee being charged per person is a second point in a series following the previous information about what visitors assume. Instead, the sentence corrects that assumption."),
        C: L("Choice C is incorrect because “moreover” illogically signals that the fee being charged per person is merely an additional fact related to the previous information about what visitors assume. Instead, the sentence corrects that assumption.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1e655377", "1e655377", 56)
    },
    {
      id: "rw-tr-b88dad9d",
      sourceQuestionId: "b88dad9d",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Al-Andalus, the historical region of the Iberian Peninsula that includes most of modern-day Spain, was ruled by various Arabic-speaking Muslim states between the eighth and fifteenth centuries. ______ many Arabic words, such as “alacrán”—meaning “scorpion”—made their way into the Spanish language.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "Instead,", "Specifically,", "Consequently,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Consequently” logically signals that the information in this sentence—that many Arabic words entered the Spanish language—is a result or consequence of the previous information about Arabic-speaking Muslim states ruling Al-Andalus for centuries."),
      distractors: {
        A: L("Choice A is incorrect because “for example” illogically signals that the information about Arabic words entering Spanish exemplifies the Arabic-speaking history of Al-Andalus mentioned in the previous sentence. Instead, Arabic words entering Spanish is a consequence of that history."),
        B: L("Choice B is incorrect because “instead” illogically signals that the information about Arabic words entering Spanish provides an alternative to the Arabic-speaking history of Al-Andalus mentioned in the previous sentence. The information about Arabic words entering Spanish is a consequence of that history."),
        C: L("Choice C is incorrect because “specifically” illogically signals that the information about Arabic words entering Spanish provides specific details elaborating on the Arabic-speaking history of Al-Andalus mentioned in the previous sentence. Instead, Arabic words entering Spanish is a consequence of that history.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b88dad9d", "b88dad9d", 57)
    },
    {
      id: "rw-tr-db8fe023",
      sourceQuestionId: "db8fe023",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>A potter choosing which type of clay to use for a piece considers two key factors: the desired look of the piece and its intended use. ______ earthenware clay is often used for decorative pieces because of its rustic look. This type of clay is not often used in industrial settings, though, because it is less durable than other clays.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "Regardless,", "In conclusion,", "For example,"],
      answer: "D",
      explanation: L("Choice D is the best answer. The previous sentence tells us that potters think about the look and use of a piece when selecting clay. This sentence provides a specific example of a type of clay selected for its appearance, so the transition \"for example\" fits perfectly."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a transition that indicates a restatement of the same idea. But this sentence does more than just restate the previous idea. Instead, it provides a more specific example of the idea presented in the first sentence."),
        B: L("Choice B is incorrect. This choice uses a disagreement transition. But this sentence actually agrees with the previous sentence. Both sentences suggest that desired look plays a role in the selection of clay types for pottery pieces."),
        C: L("Choice C is incorrect. This choice uses a concluding transition. But this sentence doesn’t sum up the previous sentence. Instead, it gives a specific example of the idea presented in the previous sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-db8fe023", "db8fe023", 60)
    },
    {
      id: "rw-tr-04ad68ca",
      sourceQuestionId: "04ad68ca",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In Gothic architecture, flying buttresses are large arches that help support a building’s exterior walls. Before the Gothic era, cathedrals’ heavy ceilings had to be supported by thick, short walls, but the invention of flying buttresses eliminated this need. ______ Gothic cathedrals could be built with thinner, higher walls.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "For instance,", "Nevertheless,", "As a result,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “As a result” logically signals that the thinner, higher walls in this sentence were a result of the invention of flying buttresses in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because “similarly” illogically signals that the thinner, higher walls in this sentence are similar to the invention of flying buttresses in the previous sentence. Instead, the walls were a result of that invention."),
        B: L("Choice B is incorrect because “for instance” illogically signals that the thinner, higher walls in this sentence are an example supporting the statement about the invention of flying buttresses in the previous sentence. Instead, the walls were a result of that invention."),
        C: L("Choice C is incorrect because “nevertheless” illogically signals that the thinner, higher walls in this sentence occurred despite the invention of flying buttresses in the previous sentence. Instead, the walls were a result of that invention.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-04ad68ca", "04ad68ca", 61)
    },
    {
      id: "rw-tr-fc2bcc79",
      sourceQuestionId: "fc2bcc79",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Tyrian purple was a highly prized dye among the Phoenicians (an ancient civilization located in present-day Lebanon). The Phoenicians were famous for using this natural dye to color their clothes a distinctive purple. ______ the name “Phoenicia” itself, some historians claim, may have originally meant “land of purple. ”</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In fact,", "Regardless,", "Lastly,", "On the contrary,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “In fact” logically signals that the claim in this sentence—Phoenicia being named after the color purple—emphasizes and supports the previous claim that Phoenicians were famous for using purple dye."),
      distractors: {
        B: L("Choice B is incorrect because “regardless” illogically signals that the claim about Phoenicia’s name contrasts with the previous claim that Phoenicians were famous for using purple dye. Instead, the naming emphasizes and supports this claim."),
        C: L("Choice C is incorrect because “lastly” illogically signals that the claim about Phoenicia’s name is the final step in a process or sequence. Instead, the naming emphasizes and supports the previous claim that Phoenicians were famous for using purple dye."),
        D: L("Choice D is incorrect because “on the contrary” illogically signals that the claim about Phoenicia’s name directly opposes the previous claim that Phoenicians were famous for using purple dye. Instead, the naming emphasizes and supports this claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-fc2bcc79", "fc2bcc79", 62)
    },
    {
      id: "rw-tr-f735493e",
      sourceQuestionId: "f735493e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Celebrated Tewa potter Maria Martinez (1887–1980) made her signature all-black ceramic vessels using a heating technique called reduction firing. This technique involves smothering the flame surrounding the clay vessel. ______ the vessel takes on a shiny, black hue.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["On the contrary,", "For example,", "Previously,", "As a result,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"As a result\" logically signals that the information in this sentence—the vessel turning black—is a result of the heating technique discussed in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because \"on the contrary\" illogically signals that the information in this sentence directly opposes the heating technique in the previous sentence. Instead, the vessel turns black as a result of that technique."),
        B: L("Choice B is incorrect because \"for example\" illogically signals that the information in this sentence is an example of the heating technique in the previous sentence. Instead, the vessel turns black as a result of that technique."),
        C: L("Choice C is incorrect because \"previously\" illogically signals that the information in this sentence occurs earlier in a chronological series of events than does the heating technique discussed in the first two sentences. Instead, the vessel turns black as a result of that technique.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f735493e", "f735493e", 63)
    },
    {
      id: "rw-tr-57bcd0d6",
      sourceQuestionId: "57bcd0d6",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Etched into Peru’s Nazca Desert are line drawings so large that they can only be fully seen from high above. Archaeologists have known of the lines since the 1920s, when a researcher spotted some from a nearby foothill, and they have been studying the markings ever since. ______ archaeologists’ efforts are aided by drones that capture high-resolution aerial photographs of the lines.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Currently,", "In comparison,", "Still,", "However,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Currently” logically signals that the archaeologists’ use of drones (a current technology) to photograph the lines is the present-day continuation of the ongoing archaeological research described in the previous sentence."),
      distractors: {
        B: L("Choice B is incorrect because “in comparison” illogically signals that the action described in this sentence offers a comparison to the ongoing archaeological research described in the previous sentence. Instead, the use of drones is the present-day continuation of that research."),
        C: L("Choice C is incorrect because “still” illogically signals that the action described in this sentence occurs despite the ongoing archaeological research described in the previous sentence. Instead, the use of drones is the present-day continuation of that research."),
        D: L("Choice D is incorrect because “however” illogically signals that the action described in this sentence occurs either despite or in contrast to the ongoing archaeological research described in the previous sentence. Instead, the use of drones is the present-day continuation of that research.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-57bcd0d6", "57bcd0d6", 64)
    },
    {
      id: "rw-tr-11df9b99",
      sourceQuestionId: "11df9b99",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Because an achiral molecule is symmetrical, flipping it yields a structurally identical molecule. A flipped chiral molecule, ______ can be compared to a glove that has been turned inside out: it produces a structurally inverted molecule rather than an identical one.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in other words,", "by contrast,", "for example,", "similarly,"],
      answer: "B",
      explanation: L("Choice B is the best answer. This sentence compares a chiral molecule to an achiral one. It discusses how when a chiral molecule is flipped, it results in something very different than when an achiral molecule is flipped. So the transition \"by contrast\" fits the context perfectly."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a transition that indicates a restatement of the same idea in different words. But this sentence doesn’t restate the same idea as the previous sentence. Instead, it makes a new point about a different type of molecule (chiral instead of achiral)."),
        C: L("Choice C is incorrect. This choice uses a transition that introduces an example, which doesn’t make sense here. The second sentence isn’t an example of the first sentence’s claim about achiral molecules: it actually introduces an entirely different idea that focuses on chiral molecules."),
        D: L("Choice D is incorrect. This choice uses a transition that indicates the addition of an agreeing idea. But this sentence shows a contrast with the first sentence—namely, that a chiral molecule acts very differently from an achiral molecule when flipped.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-11df9b99", "11df9b99", 65)
    },
    {
      id: "rw-tr-335bbe3e",
      sourceQuestionId: "335bbe3e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In his painting At the Cycle-Race Track, Jean Metzinger aims to depict a bike race in four-dimensional space. Of course, Metzinger’s painting doesn’t technically represent a fourth dimension; humans can only see in three dimensions. ______ by depicting the race through multiple, simultaneous perspectives, Metzinger offers a fascinating glimpse at what this other universe might look like.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Moreover,", "That said,", "In other words,", "For example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"That said\" logically signals that the statement in this sentence—that Metzinger offers a glimpse of four-dimensional space by depicting multiple, simultaneous perspectives—is true despite the point in the previous sentence (that Metzinger’s painting doesn’t technically represent a fourth dimension because humans can only see in three dimensions)."),
      distractors: {
        A: L("Choice A is incorrect because \"moreover\" illogically signals that the information in this sentence merely adds to the previous point about Metzinger’s painting. Instead, it provides information that is true despite that previous point."),
        C: L("Choice C is incorrect because \"in other words\" illogically signals that the information in this sentence is a paraphrase or restatement of the previous point about Metzinger’s painting. Instead, it provides information that is true despite that previous point."),
        D: L("Choice D is incorrect because \"for example\" illogically signals that the information in this sentence provides an example that supports the previous point about Metzinger’s painting. Instead, it provides information that is true despite that previous point.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-335bbe3e", "335bbe3e", 68)
    },
    {
      id: "rw-tr-827afb27",
      sourceQuestionId: "827afb27",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Most conifers (trees belonging to the phylum Coniferophyta) are evergreen. That is, they keep their green leaves or needles year-round. However, not all conifer species are evergreen. Larch trees, ______ lose their needles every fall.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["for instance,", "nevertheless,", "meanwhile,", "in addition,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “For instance” logically signals that the information in this sentence—that larch trees lose their needles every fall—is an example supporting the claim in the previous sentence (that not all conifer species keep their leaves or needles year-round)."),
      distractors: {
        B: L("Choice B is incorrect because “nevertheless” illogically signals that the information in this sentence is true in spite of the claim about conifer species in the previous sentence. Instead, it’s an example supporting that claim."),
        C: L("Choice C is incorrect because “meanwhile” illogically signals that the information in this sentence is separate from (while occurring simultaneously with) the claim about conifer species in the previous sentence. Instead, it’s an example supporting that claim."),
        D: L("Choice D is incorrect because “in addition” illogically signals that the information in this sentence is merely an additional fact related to the claim about conifer species in the previous sentence. Instead, it’s an example supporting that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-827afb27", "827afb27", 69)
    },
    {
      id: "rw-tr-30438650",
      sourceQuestionId: "30438650",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Jhumpa Lahiri’s story collection Interpreter of Maladies features multiple stories about romantic relationships. In “This Blessed House, ” newlyweds argue over whether to replace items left by the previous owners of their new home. ______ in “A Temporary Matter, ” a husband and wife attempt to rekindle their relationship during a four-night blackout.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Granted,", "For example,", "Likewise,", "Hence,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Likewise\" is a transition that indicates the addition of a new but related idea. In this sentence, the author is providing another similar example to that discussed in the previous sentence. Therefore, \"likewise\" works best in this context."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a transition that means \"admittedly. \" But the text isn’t admitting or conceding anything here. Instead, these two examples work together to support the claim made in the first sentence."),
        B: L("Choice B is incorrect. This choice uses an exemplification transition, which doesn’t make sense here. The second story is not an example of the story in the previous sentence—it’s another, similar story. And while both stories exemplify the first sentence in the text, the transition we’re looking for isn’t actually connected to that sentence."),
        D: L("Choice D is incorrect. This choice uses a cause-and-effect transition, which doesn’t make sense here. The first story didn’t result in the events of the second story.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-30438650", "30438650", 73)
    },
    {
      id: "rw-tr-a773f069",
      sourceQuestionId: "a773f069",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Small, flat structures called spatulae are found at the tips of the hairs on a spider’s leg. These spatulae temporarily bond with the atoms of whatever they touch. ______ spiders are able to cling to and climb almost any surface.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For instance,", "However,", "Similarly,", "As a result,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “As a result” logically signals that the claim in this sentence—that spiders can cling to and climb almost any surface —is because of the previous information about the bonding properties of spiders’ spatulae."),
      distractors: {
        A: L("Choice A is incorrect because “for instance” illogically signals that the claim in this sentence exemplifies the information in the previous sentences. Instead, the claim is because of the previous information about the bonding properties of spiders’ spatulae."),
        B: L("Choice B is incorrect because “however” illogically signals that the claim in this sentence contrasts with the information in the previous sentences. Instead, the claim is because of the previous information about the bonding properties of spiders’ spatulae."),
        C: L("Choice C is incorrect because “similarly” illogically signals that the claim in this sentence is similar to, but separate from, the information in the previous sentences. Instead, the claim is because of the previous information about the bonding properties of spiders’ spatulae.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a773f069", "a773f069", 74)
    },
    {
      id: "rw-tr-1b219d14",
      sourceQuestionId: "1b219d14",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>As a young historian in the 1950s, Alixa Naff began interviewing fellow Arab American immigrants about their experiences straddling two cultures. Over the next few decades, Naff conducted more than 450 such interviews, also known as oral histories. ______ she collected photographs and other artifacts that represented her subjects’ experiences.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "On the contrary,", "In addition,", "Today,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"In addition\" logically signals that Naff’s artifact collecting was separate from, and in addition to, her interviewing."),
      distractors: {
        A: L("Choice A is incorrect because \"in other words\" illogically signals that the information about Naff’s artifact collecting restates the previous information about her interviewing. Instead, Naff collected artifacts in addition to conducting interviews."),
        B: L("Choice B is incorrect because \"on the contrary\" illogically signals that Naff’s artifact collecting was contrary to her interviewing. Instead, Naff collected artifacts in addition to conducting interviews."),
        D: L("Choice D is incorrect because \"today\" illogically signals that Naff’s artifact collecting is occurring in the present day. Instead, this activity occurred in the past, as indicated by the past tense verb \"collected. \"")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1b219d14", "1b219d14", 76)
    },
    {
      id: "rw-tr-6a5939c2",
      sourceQuestionId: "6a5939c2",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Paleontologists once thought that early apes lived in tropical forests, but recent research suggests that they may have actually lived in savannas. Tropical forests are humid and have many trees spaced close together. ______ savannas are drier, and their trees are spaced further apart.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For instance,", "In comparison,", "Firstly,", "In conclusion,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"In comparison\" logically signals that the description of savannas in this sentence—that they are drier and their trees are spaced further apart—forms a comparison with the description of tropical forests in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because \"for instance\" illogically signals that the description of savannas in this sentence exemplifies the description of tropical forests in the previous sentence. Instead, this description forms a comparison with the description of tropical forests."),
        C: L("Choice C is incorrect because \"firstly\" illogically signals that the description of savannas in this sentence indicates the first in a series of things. Instead, this description forms a comparison with the description of tropical forests in the previous sentence."),
        D: L("Choice D is incorrect because \"in conclusion\" illogically signals that the description of savannas in this sentence concludes or summarizes information in the previous sentences. Instead, this description forms a comparison with the description of tropical forests in the previous sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-6a5939c2", "6a5939c2", 78)
    },
    {
      id: "rw-tr-fd24f48f",
      sourceQuestionId: "fd24f48f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Before California’s 1911 election to approve a proposition granting women the right to vote, activists across the state sold tea to promote the cause of suffrage. In San Francisco, the Woman’s Suffrage Party sold Equality Tea at local fairs. ______ in Los Angeles, activist Nancy Tuttle Craig, who ran one of California’s largest grocery store firms, distributed Votes for Women Tea.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "To conclude,", "Similarly,", "In other words,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Similarly” logically signals that the activity described in this sentence (Nancy Tuttle Craig distributing Votes for Women Tea in her Los Angeles grocery stores) is like the activity described in the previous sentence (the Woman’s Suffrage Party selling Equality Tea at fairs in San Francisco). Together, the two examples support the preceding claim that “activists across the state sold tea to promote the cause of suffrage. ”"),
      distractors: {
        A: L("Choice A is incorrect because “for example” illogically signals that the activity described in this sentence exemplifies the activity described in the previous sentence. Instead, the two activities are similar, and both support the preceding claim about selling tea to promote women’s right to vote."),
        B: L("Choice B is incorrect because “to conclude” illogically signals that the activity described in this sentence concludes or summarizes the information in the previous sentences. Instead, the activity is similar to the one described in the previous sentence, and both support the preceding claim about selling tea to promote women’s right to vote."),
        D: L("Choice D is incorrect because “in other words” illogically signals that the activity described in this sentence paraphrases the activity described in the previous sentence. Instead, the two activities are similar, and both support the preceding claim about selling tea to promote women’s right to vote.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-fd24f48f", "fd24f48f", 80)
    },
    {
      id: "rw-tr-28c7a762",
      sourceQuestionId: "28c7a762",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>As the Proto-Indo-European language split into different languages, many words evolved to sound very different than they had in their proto-language—but this wasn’t always the case. ______ words retained much of their original sound. The word “father, ” for instance, sounds similar in Italian (padre), Latin (pater), and Sanskrit (pitar), three Proto-Indo-European descendants.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "Moreover,", "Thus,", "Sometimes,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Sometimes” logically signals that the information in this sentence—that words retained much of their original sound—describes an occasional exception, elaborating on the previous statement that the evolution of words to sound very different from their proto-language origins “wasn’t always the case. ”"),
      distractors: {
        A: L("Choice A is incorrect because “however” illogically signals that the information about words retaining much of their original sound contrasts with the previous statement. Instead, the sentence describes an occasional exception, elaborating on the previous statement that the evolution of words to sound very different from their proto-language origins “wasn’t always the case. ”"),
        B: L("Choice B is incorrect because “moreover” illogically signals that the information about words retaining much of their original sound merely adds to the previous statement. Instead, the sentence describes an occasional exception, elaborating on the previous statement that the evolution of words to sound very different from their proto-language origins “wasn’t always the case. ”"),
        C: L("Choice C is incorrect because “thus” illogically signals that the information about words retaining much of their original sound is a result or consequence of the previous statement. Instead, the sentence describes an occasional exception, elaborating on the previous statement that the evolution of words to sound very different from their proto-language origins “wasn’t always the case. ”")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-28c7a762", "28c7a762", 82)
    },
    {
      id: "rw-tr-1a8126aa",
      sourceQuestionId: "1a8126aa",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 2019, researcher Patricia Jurado Gonzalez and food historian Nawal Nasrallah prepared a stew from a 4,000-year-old recipe found on a Mesopotamian clay tablet. When they tasted the dish, known as pašrūtum (“unwinding”), they found that it had a mild taste and inspired a sense of calm. ______ the researchers, knowing that dishes were sometimes named after their intended effects, theorized that the dish’s name, “unwinding, ” referred to its function: to help ancient diners relax.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Therefore,", "Alternately,", "Nevertheless,", "Likewise,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"Therefore\" logically signals that the action described in this sentence—the researchers theorizing that the dish was named for its effect on diners—is a result or consequence of the previous observation that the dish had a calming effect."),
      distractors: {
        B: L("Choice B is incorrect because \"alternately\" illogically signals that the action described in this sentence offers an alternative or contrast to the previous observation that the dish had a calming effect. Instead, the action is a result or consequence of that observation."),
        C: L("Choice C is incorrect because \"nevertheless\" illogically signals that the action described in this sentence occurs despite the previous observation that the dish had a calming effect. Instead, the action is a result or consequence of that observation."),
        D: L("Choice D is incorrect because \"likewise\" illogically signals that this sentence merely adds a second, similar detail to the previous observation that the dish had a calming effect. Instead, this sentence describes an action that is a result or consequence of that observation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1a8126aa", "1a8126aa", 84)
    },
    {
      id: "rw-tr-42301836",
      sourceQuestionId: "42301836",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In her 2012 analysis of tree rings from Japan’s Yaku Island, cosmic ray physicist Fusa Miyake noted an anomalous carbon-14 spike dating to 774–775 CE, indicating that a massive burst of radiation reached Earth during that time. ______ this unprecedented radiocarbon surge was dubbed a “Miyake event” in honor of its discoverer.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Fittingly,", "Similarly,", "However,", "In other words,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"Fittingly\" logically signals that the naming of an unprecedented radiocarbon surge for Fusa Miyake is appropriate to the situation, since Miyake is the person who identified the surge (through her Yaku Island tree-ring analysis)."),
      distractors: {
        B: L("Choice B is incorrect because \"similarly\" illogically signals that the information in this sentence is similar to the previous information about Miyake’s identification of a massive radiation burst through tree-ring analysis. Instead, the naming of the event for its discoverer is a fitting and appropriate outcome."),
        C: L("Choice C is incorrect because \"however\" illogically signals that the information in this sentence contrasts with the previous information about Miyake’s identification of a massive radiation burst through tree-ring analysis. Instead, the naming of the event for its discoverer is a fitting and appropriate outcome."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the information in this sentence is a paraphrase or restatement of the previous information about Miyake’s identification of a massive radiation burst through tree-ring analysis. Instead, the naming of the event for its discoverer is a fitting and appropriate outcome.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-42301836", "42301836", 86)
    },
    {
      id: "rw-tr-0d3ebdce",
      sourceQuestionId: "0d3ebdce",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Neuroscientist Karen Konkoly wanted to determine whether individuals can understand and respond to questions during REM sleep. She first taught volunteers eye movements they would use to respond to basic math problems while asleep (a single left-right eye movement indicated the number one). ______ she attached electrodes to the volunteers’ faces to record their eye movements during sleep.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Specifically,", "Next,", "For instance,", "In sum,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Next” logically signals that the action described in this sentence—Konkoly recording participants’ eye movements— is the next step in Konkoly’s experiment."),
      distractors: {
        A: L("Choice A is incorrect because “specifically” illogically signals that this sentence specifies or elaborates on an aspect of the action described in the previous sentence. Instead, it describes the next step in Konkoly’s experiment."),
        C: L("Choice C is incorrect because “for instance” illogically signals that the action described in this sentence is an example of the action described in the previous sentence. Instead, it is the next step in Konkoly’s experiment."),
        D: L("Choice D is incorrect because “in sum” illogically signals that this sentence summarizes or concludes the action described in the previous sentence. Instead, it describes the next step in Konkoly’s experiment.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0d3ebdce", "0d3ebdce", 87)
    },
    {
      id: "rw-tr-8112b7e3",
      sourceQuestionId: "8112b7e3",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Ugandan American professor Peter Nazareth believed that Elvis Presley’s music is best understood not as a homogeneous collection but as an anthology (because Elvis showcased the contributions of a wide range of gospel, blues, and rock artists). ______ Nazareth entitled his college course on Elvis and his music, which focused on Elvis’s many musical influences, “Elvis as Anthology. ”</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["To that end,", "In sum,", "That is,", "In addition,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"To that end\" logically signals that the activity described in this sentence—Nazareth titling his course \"Elvis as Anthology\"—is meant to further Nazareth’s goal of helping others understand Presley’s music as an anthology with a wide range of influences."),
      distractors: {
        B: L("Choice B is incorrect. \"In sum\" illogically signals that the activity described in this sentence summarizes Nazareth’s view of Presley’s music as an anthology. Instead, titling his course \"Elvis as Anthology\" is a way for him to promote this view."),
        C: L("Choice C is incorrect. \"That is\" illogically signals that the activity described in this sentence is a clarification or interpretation of Nazareth’s view of Presley’s music as an anthology. Instead, titling his course \"Elvis as Anthology\" is a way for him to promote this view."),
        D: L("Choice D is incorrect. \"In addition\" illogically signals that the activity described in this sentence is merely an additional fact about Nazareth. Instead, titling his course \"Elvis as Anthology\" is a way for him to promote his view of Presley’s music as an anthology.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-8112b7e3", "8112b7e3", 90)
    },
    {
      id: "rw-tr-fb56b593",
      sourceQuestionId: "fb56b593",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Despite its great distance from Earth—it is 570 light-years away—the star Shaula is one of the brightest stars in the sky, ranking 23rd. Although not as bright as Shaula, the star Alkaid also ranks among the 50 brightest stars (40th, to be exact). ______ Alkaid’s brightness is likely due to the star’s relative proximity: Alkaid is only 100 light-years from Earth.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Indeed,", "As a result,", "Granted,", "Similarly,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Granted” logically signals that the information in this sentence—that Alkaid’s brightness is likely due to its relative proximity to Earth—is a concession acknowledging that the star likely appears bright for different reasons than the faraway star to which it is compared, Shaula."),
      distractors: {
        A: L("Choice A is incorrect because “indeed” illogically signals that the information in this sentence offers additional emphasis in support of the previous information about Alkaid ranking among the 50 brightest stars. Instead, the sentence concedes that the most likely reason Alkaid is counted among the sky’s brightest stars is its relative proximity to Earth."),
        B: L("Choice B is incorrect because “as a result” illogically signals that Alkaid’s brightness is caused by the previous information about Alkaid ranking among the 50 brightest stars. Instead, the sentence concedes that the most likely reason Alkaid is counted among the sky’s brightest stars is its relative proximity to Earth."),
        D: L("Choice D is incorrect because “similarly” illogically signals that the information in this sentence is similar to the previous information about Alkaid ranking among the 50 brightest stars. Instead, the sentence concedes that the most likely reason Alkaid is counted among the sky’s brightest stars is its relative proximity to Earth.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-fb56b593", "fb56b593", 92)
    },
    {
      id: "rw-tr-080a7b51",
      sourceQuestionId: "080a7b51",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Imagine a magazine that a reader has thrown away. This magazine is post-consumer waste, as it became waste after reaching the consumer. ______ the paper scraps left over from printing the magazine are pre-consumer waste, as they became waste before reaching the consumer.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["By contrast,", "For example,", "As a result,", "Specifically,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “By contrast” logically signals that the information in this sentence—that paper scraps left over from printing a magazine are pre-consumer waste—contrasts with the previous information about magazines being post-consumer waste."),
      distractors: {
        B: L("Choice B is incorrect because “for example” illogically signals that the information in this sentence exemplifies the previous information about post-consumer waste. Instead, the paper scraps being pre-consumer waste contrasts with the previous information."),
        C: L("Choice C is incorrect because “as a result” illogically signals that the information in this sentence is a result or consequence of the previous information about post-consumer waste. Instead, the paper scraps being pre-consumer waste contrasts with the previous information."),
        D: L("Choice D is incorrect because “specifically” illogically signals that the information in this sentence provides specific, precise details elaborating on the previous information about post-consumer waste. Instead, the paper scraps being pre-consumer waste contrasts with the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-080a7b51", "080a7b51", 94)
    },
    {
      id: "rw-tr-25361ec6",
      sourceQuestionId: "25361ec6",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Scientists long debated the origins of chondrules, tiny glass beads that formed in meteors billions of years ago. For decades, different theories were proposed, from lightning strikes to powerful rock collisions, but none had sufficient evidentiary support. ______ scientists found strong evidence that chondrules were formed by shock waves in nearby nebulae.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "Therefore,", "Similarly,", "Finally,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Finally\" logically signals that the information in this sentence—that scientists found evidence that chondrules were formed by shock waves in nearby nebulae—indicates a conclusion to the scientific debate mentioned in the previous sentences."),
      distractors: {
        A: L("Choice A is incorrect because \"for example\" illogically signals that the information about the evidence for chondrule formation in this sentence exemplifies the information about the scientific debate regarding chondrule formation in the previous sentences. Instead, it indicates a conclusion to the debate."),
        B: L("Choice B is incorrect because \"therefore\" illogically signals that the information in this sentence is a result of the previous information about the scientific debate regarding chondrule formation. Instead, it indicates a conclusion to the debate."),
        C: L("Choice C is incorrect because \"similarly\" illogically signals that the information that follows is similar to the information about the scientific debate regarding chondrule formation in the previous sentences. Instead, it indicates a conclusion to the debate.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-25361ec6", "25361ec6", 95)
    },
    {
      id: "rw-tr-7ce14583",
      sourceQuestionId: "7ce14583",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In Asiya Wadud’s 2022 poem “Shorn, Treaded Red, ” the poet contemplates a painting that has inspired her: Etel Adnan’s 2020 work Satellites 27. The painting, which features overlapping geometric shapes, fuels the poem’s exploration of temporality and identity. ______ in responding to Adnan’s artwork, Wadud’s poem reflects on the relationship between poetry and other art forms.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "For instance,", "What’s more,", "Conversely,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"What’s more\" logically signals that this sentence introduces an additional aspect of Wadud’s poem beyond what was previously discussed. While the previous sentence establishes that Adnan’s painting has inspired \"the poem’s exploration of temporality and identity, \" this sentence provides a separate, additional claim about the poem: that it reflects on poetry’s relationship to other art forms."),
      distractors: {
        A: L("Choice A is incorrect because \"in other words\" illogically signals that the information in this sentence is a paraphrase or restatement of the previous point about how Adnan’s painting has inspired \"the poem’s exploration of temporality and identity. \" Instead, the sentence provides a separate, additional claim about the poem."),
        B: L("Choice B is incorrect because \"for instance\" illogically signals that the information in this sentence supports the previous point about \"the poem’s exploration of temporality and identity\" by providing an example. Instead, the sentence provides a separate, additional claim about the poem."),
        D: L("Choice D is incorrect because \"conversely\" illogically signals that the information in this sentence is contrary to the previous point about how Adnan’s painting has inspired \"the poem’s exploration of temporality and identity. \" Instead, the sentence provides a separate, additional claim about the poem.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-7ce14583", "7ce14583", 96)
    },
    {
      id: "rw-tr-3fd0ab63",
      sourceQuestionId: "3fd0ab63",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Voting members of the 2002 Latin Grammys were impressed by Banda Cuisillos’s album Puras Rancheras Con Cuisillos and its contribution to the banda genre, a form of regional Mexican music featuring large ensembles of wind instruments and drums that first developed in southern and central Mexico in the mid-nineteenth century. ______ they awarded the group the Best Banda Album award.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In contrast,", "Meanwhile,", "Nevertheless,", "Accordingly,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Accordingly\" logically signals that the information in this sentence—that the voting members awarded Banda Cuisillos the Best Banda Album award—is in accordance with, or results from, the previous information about the voters being impressed by Banda Cuisillos’s album."),
      distractors: {
        A: L("Choice A is incorrect because \"in contrast\" illogically signals that the information in this sentence contrasts with the previous information about voting members being impressed by Banda Cuisillos’s album. Instead, the voters’ decision to give the group the Best Banda Album award is in accordance with, or results from, that information."),
        B: L("Choice B is incorrect because \"meanwhile\" illogically signals that the information in this sentence is separate from (while occurring simultaneously with) the previous information about the voting members being impressed by Banda Cuisillos’s album. Instead, the voters’ decision to give the group the Best Banda Album award is in accordance with, or results from, that information."),
        C: L("Choice C is incorrect because \"nevertheless\" illogically signals that the information that follows is despite the information about the voting members being impressed by Banda Cuisillos’s album. Instead, the voters’ decision to give the group the Best Banda Album award is in accordance with, or results from, that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-3fd0ab63", "3fd0ab63", 97)
    },
    {
      id: "rw-tr-47547d07",
      sourceQuestionId: "47547d07",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In June, female loggerhead sea turtles will swim back to the sandy beaches where they were born to lay eggs of their own. First, the turtle will dig her nest in the sand. ______ she will lay up to 100 eggs in the nest. Finally, she will cover it all with sand, before returning to the ocean.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["By contrast,", "Similarly,", "Next,", "For example,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Next” logically signals that the egg laying in this sentence is the next step in the sequence of events described in the other sentences."),
      distractors: {
        A: L("Choice A is incorrect because “by contrast” illogically signals that the egg laying in this sentence contrasts with the nest digging in the previous sentence. Instead, the egg laying follows the nest digging as the next step in the sequence of events."),
        B: L("Choice B is incorrect because “similarly” illogically signals that the egg laying in this sentence is similar to the nest digging in the previous sentence. Though the two actions are related, they are not similar. Instead, the egg laying follows the nest digging as the next step in the sequence of events."),
        D: L("Choice D is incorrect because “for example” illogically signals that the egg laying in this sentence is an example of the nest digging in the previous sentence. Instead, the egg laying follows the nest digging as the next step in the sequence of events.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-47547d07", "47547d07", 102)
    },
    {
      id: "rw-tr-9f7ac40d",
      sourceQuestionId: "9f7ac40d",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In ArtMed inSight, a series of art-based medical education classes taught by Anne Willieme, medical students learn to use techniques more often associated with the arts, such as slowing down interpretation and considering multiple perspectives. ______ Willieme’s students develop better observational skills, enhancing their ability to understand and diagnose patients effectively.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["By contrast,", "In doing so,", "For example,", "Nevertheless,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “In doing so” logically signals that the information in this sentence—that the medical students develop better observational skills—is an outcome of the action described in the previous sentence (the students learning art-based techniques)."),
      distractors: {
        A: L("Choice A is incorrect because “by contrast” illogically signals that the students developing better observational skills contrasts with the previous information about learning art-based techniques. Instead, the students’ improved skills are a direct result of learning those techniques."),
        C: L("Choice C is incorrect because “for example” illogically signals that the students developing better observational skills is a specific example of learning art-based techniques. Instead, the students’ improved skills are a direct result of learning those techniques."),
        D: L("Choice D is incorrect because “nevertheless” illogically signals that the students develop better observational skills despite the previous information about learning art-based techniques. Instead, the students’ improved skills are a direct result of learning those techniques.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9f7ac40d", "9f7ac40d", 105)
    },
    {
      id: "rw-tr-8e9677e6",
      sourceQuestionId: "8e9677e6",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 2009, the Craft and Folk Art Museum in Los Angeles hosted a special exhibition, Sueños/Yume, showcasing the works of local sculptor Dora de Larios. As suggested by the show’s title (sueños and yume mean “dreams” in Spanish and Japanese, respectively), de Larios’s art reflects a mix of cultural influences. ______ her work is grounded in the artistic traditions of both Mexico and Japan.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In addition,", "In contrast,", "Specifically,", "Therefore,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Specifically” logically signals that this sentence provides specific, precise details elaborating on the previous sentence’s claim that de Larios’s art reflects a mix of cultures. This sentence specifies which cultures the previous sentence is referring to: the artistic traditions of both Mexico and Japan."),
      distractors: {
        A: L("Choice A is incorrect because “in addition” illogically signals that the information in this sentence is a separate point that follows the previous claim about de Larios’s art. Instead, it provides specific details elaborating on that claim."),
        B: L("Choice B is incorrect because “in contrast” illogically signals that the information in this sentence contrasts with the previous claim about de Larios’s art. Instead, it provides specific details elaborating on that claim."),
        D: L("Choice D is incorrect because “therefore” illogically signals that the information in this sentence is a result of the previous claim about de Larios’s art. Instead, it provides specific details elaborating on that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-8e9677e6", "8e9677e6", 107)
    },
    {
      id: "rw-tr-7dbcb7f4",
      sourceQuestionId: "7dbcb7f4",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Karel Čapek’s 1920 play R.U.R. (Rossum’s Universal Robots), in which artificial workers overthrow their masters, left an indelible mark on the science fiction genre, and the English language, by introducing the term “robot” (derived from the Czech word robota, meaning “indentured labor” or “drudgery”). ______ Čapek’s play also contributed to a venerable literary and mythological tradition: using artificial beings as mirrors and foils for humanity.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Beyond the simple coining of a term,", "By achieving such a lofty goal,", "Ultimately limited in its lasting influence,", "Despite its creation of such an iconic trope,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Beyond the simple coining of a term” logically signals that the information in this sentence—that Čapek’s play contributed to a literary and mythological tradition of using artificial beings as mirrors and foils for humanity—describes contributions that extend beyond the previously described achievement of introducing the term “robot” to the English language."),
      distractors: {
        B: L("Choice B is incorrect because “by achieving such a lofty goal” illogically signals that the play’s contribution to a literary and mythological tradition was accomplished through the means of the previously described achievement of introducing the term “robot. ” Instead, the sentence describes an additional contribution that goes beyond that achievement."),
        C: L("Choice C is incorrect because “ultimately limited in its lasting influence” illogically minimizes the play’s influence, which is inconsistent with the text’s other claims about the play. Instead, the sentence describes contributions that go beyond the previously described achievement of introducing the term “robot. ”"),
        D: L("Choice D is incorrect because “despite its creation of such an iconic trope” illogically signals that the play’s contribution to a literary and mythological tradition is surprising given the play’s creation of an iconic trope. Instead, the sentence describes contributions that go beyond the previously described achievement of introducing the term “robot. ”")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-7dbcb7f4", "7dbcb7f4", 109)
    },
    {
      id: "rw-tr-4b7a84b0",
      sourceQuestionId: "4b7a84b0",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Mountain climbing routes that incorporate metal rungs and cables are known as via ferratas, from the Italian phrase for “iron path. ” As climbing these routes has shifted from a mode of travel to a sporting activity, modern via ferratas are rarely designed to simply reach a summit. ______ new routes favor recreation over utility, aiming to provide a challenging climb or showcase dramatic scenery.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Additionally,", "On the other hand,", "More often,", "Nonetheless,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"More often\" logically signals that the claim in this sentence—that new via ferratas favor recreation over utility— explains a difference between the new \"sporting activity\" routes and the older \"mode of travel\" routes. In so doing, it emphasizes and reinforces the previous claim (\"modern via ferratas are rarely designed to simply reach a summit\")."),
      distractors: {
        A: L("Choice A is incorrect because \"additionally\" illogically signals that this sentence’s claim about new via ferratas adds a new, separate point to the previous claim (\"modern via ferratas are rarely designed to simply reach a summit\"). Instead, the second claim—that new routes favor recreation over utility—emphasizes and reinforces the previous one."),
        B: L("Choice B is incorrect because \"on the other hand\" illogically signals that this sentence’s claim about new via ferratas contrasts with or opposes the previous claim (\"modern via ferratas are rarely designed to simply reach a summit\"). Instead, the second claim—that new routes favor recreation over utility—emphasizes and reinforces the previous one."),
        D: L("Choice D is incorrect because \"nonetheless\" illogically signals that this sentence’s claim about new via ferratas is true despite the previous claim (\"modern via ferratas are rarely designed to simply reach a summit\"). Instead, the second claim—that new routes favor recreation over utility—emphasizes and reinforces the previous one.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-4b7a84b0", "4b7a84b0", 111)
    },
    {
      id: "rw-tr-f5959727",
      sourceQuestionId: "f5959727",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Modernista architects championed nature in their designs. ______ the wavy staircase and ornate floral tilework of Hospital de Sant Pau, a Modernista hospital designed by Lluís Domènech i Montaner, couldn’t exactly grow in a forest. Still, one sees natural influences in Domènech i Montaner’s penchant for curves (rather than right angles) and plant-and animal-inspired flourishes.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Furthermore,", "Similarly,", "Of course,", "Thus,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Of course\" logically signals that the information in this sentence—that \"the wavy staircase and ornate floral tilework\" of the Modernista hospital couldn’t actually grow in a forest—acknowledges an obvious limitation of, or qualification to, the previous claim that Modernista architects championed nature in their designs."),
      distractors: {
        A: L("Choice A is incorrect because \"furthermore\" illogically signals that the information in this sentence merely adds to the previous claim that Modernista architects championed nature in their designs. Instead, the sentence acknowledges an obvious limitation in how literally that natural influence was expressed in the hospital’s features."),
        B: L("Choice B is incorrect because \"similarly\" illogically signals that the information in this sentence is similar to the previous claim that Modernista architects championed nature in their designs. Instead, the sentence acknowledges an obvious limitation in how literally that natural influence was expressed in the hospital’s features."),
        D: L("Choice D is incorrect because \"thus\" illogically signals that the information in this sentence is a result of the previous claim that Modernista architects championed nature in their designs. Instead, the sentence acknowledges an obvious limitation in how literally that natural influence was expressed in the hospital’s features.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f5959727", "f5959727", 112)
    },
    {
      id: "rw-tr-6e0c60da",
      sourceQuestionId: "6e0c60da",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When one looks at the dark craggy vistas in Hitoshi Fugo’s evocative photo series, one’s mind might wander off to the cratered surfaces of faraway planets. ______ it’s the series’ title, Flying Frying Pan, that brings one back to Earth, reminding the viewer that each photo is actually a close-up view of a familiar household object: a frying pan.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Consequently,", "Alternatively,", "Ultimately,", "Additionally,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The first sentence describes an experience that the viewer has when they’re looking at the photos: they imagine other planets. This sentence describes an experience that the viewer has afterward: the title reminds them that the photos are of frying pans, bringing them back to reality. “Ultimately” is a transition that means “eventually” or “in the end, ” so it fits the context perfectly."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a cause-and-effect transition, which doesn’t make sense here. The viewer imagining other planets when they’re looking at the photos doesn’t cause the title to bring them back to reality."),
        B: L("Choice B is incorrect. This choice uses a transition that indicates another option or possibility, which doesn’t make sense here. Rather, the viewer has both experiences: first the viewer imagines that they’re looking at another planet, and then the title reminds them that it’s just a frying pan."),
        D: L("Choice D is incorrect. This choice uses a transition that indicates the addition of an agreeing idea. But the viewer’s experience in the second sentence is actually the opposite of the viewer’s experience in the first sentence. In the first sentence, the viewer is imagining that they’re seeing a landscape from another planet. In the second sentence, the viewer is reminded that they’re looking at a frying pan.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-6e0c60da", "6e0c60da", 113)
    },
    {
      id: "rw-tr-7f20374f",
      sourceQuestionId: "7f20374f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The 435 state districts in the US House of Representatives are designed to be roughly equal in population. These districts average around 760,000 people in size. However, only about 730,000 people live in the state of Alaska. ______ Alaska has just one House district, encompassing the entire state.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "Instead,", "Finally,", "For instance,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"As a result\" logically signals that the information in the sentence—that, in the US House of Representatives, the entire state of Alaska has just one district—is the result or consequence of Alaska having only about 730,000 people. This is slightly below the average for House districts, which are designed to have roughly equal populations."),
      distractors: {
        B: L("Choice B is incorrect because \"instead\" illogically signals that Alaska having just one state district is an alternative to the information about the state’s population in the previous sentence. Rather, the fact that Alaska has just one district is a result or consequence of the entire state having slightly fewer people than an average-sized district."),
        C: L("Choice C is incorrect because \"finally\" illogically signals that the information in this sentence about Alaska having just one district indicates a last step in a process or a concluding summary. Instead, the fact that Alaska has just one district is a result or consequence of the entire state having slightly fewer people than an average-sized district."),
        D: L("Choice D is incorrect because \"for instance\" illogically signals that the information in this sentence about Alaska having just one district exemplifies the information about the state’s population in the previous sentence. Instead, the fact that Alaska has just one district is a result or consequence of the entire state having slightly fewer people than an average-sized district.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-7f20374f", "7f20374f", 117)
    },
    {
      id: "rw-tr-9d4f331c",
      sourceQuestionId: "9d4f331c",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When sculptor Frédéric Auguste Bartholdi was designing the Statue of Liberty, he sought the advice of engineer Gustave Eiffel. Eiffel suggested that he make the statue’s arm thick and position it straight above the figure’s head. ______ Bartholdi decided to slim the arm and tilt it out at an angle.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Additionally,", "Instead,", "Thus,", "For example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Instead\" logically signals that the information in this sentence—that Bartholdi decided to slim and tilt out the arm of the Statue of Liberty—contrasts with Eiffel’s design suggestions for the statue."),
      distractors: {
        A: L("Choice A is incorrect because \"additionally\" illogically suggests that the information in this sentence is merely an additional fact related to Eiffel’s design suggestions in the previous sentence. Instead, it contrasts with those suggestions."),
        C: L("Choice C is incorrect because \"thus\" illogically signals that the information that follows is a result of Eiffel’s design suggestions in the previous sentence. Instead, it contrasts with those suggestions."),
        D: L("Choice D is incorrect because \"for example\" illogically signals that the information about Bartholdi’s design decisions in this sentence exemplifies Eiffel’s design suggestions in the previous sentence. Instead, it contrasts with those suggestions.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9d4f331c", "9d4f331c", 122)
    },
    {
      id: "rw-tr-29ae4d48",
      sourceQuestionId: "29ae4d48",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In the early 1970s, Albert Popa took up graffiti art, spraying his work onto what was at the time an unconventional surface: concrete. ______ Albert’s son David has chosen an unusual canvas for his new art project, Fractured. In this remarkable work, the artist draws charcoal faces onto fragmented ice floes in Finland, creating the visual effect of a face slowly fracturing.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "Indeed,", "Second,", "Likewise,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Likewise\" logically signals that the information about Albert’s son David is similar to the previous information about Albert Popa. Both artists have used unconventional surfaces for their work: Albert used concrete, and David is using ice floes."),
      distractors: {
        A: L("Choice A is incorrect because \"however\" illogically signals that the information about David contrasts with the previous information about Albert Popa. Instead, it is similar to the previous information about Albert Popa."),
        B: L("Choice B is incorrect because \"indeed\" illogically signals that the information about David emphasizes or strengthens the previous point about Albert Popa. Instead, it is similar to the previous information; it highlights a similarity between father and son."),
        C: L("Choice C is incorrect because \"second\" illogically signals that the information about David is a second point or reason separate from the previous information about Albert Popa. Instead, it is similar to the previous information; it highlights a similarity between father and son.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-29ae4d48", "29ae4d48", 123)
    },
    {
      id: "rw-tr-9dc4e640",
      sourceQuestionId: "9dc4e640",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The mineral mtorolite is most commonly found in Zimbabwe. Mtorolite is cryptocrystalline, meaning that its crystalline structure is so fine that the individual crystals cannot be distinguished by the naked eye or even under a microscope. The crystals in microcrystalline minerals are also not visible to the naked eye; ______ they can usually be seen under a microscope.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["thus,", "for example,", "that said,", "similarly,"],
      answer: "C",
      explanation: L("Choice C is the best answer because \"that said\" logically signals that the information that follows—that the crystals of microcrystalline minerals can be seen with a microscope—is an exception to the previous information about the crystalline structure of minerals not being visible under a microscope."),
      distractors: {
        A: L("Choice A is incorrect because \"thus\" illogically signals that the information that follows is a direct result or consequence of the fact that the crystals of microcrystalline minerals aren’t visible to the naked eye. Instead, the fact that they can be seen under a microscope is an exception to the previous information about crystalline minerals."),
        B: L("Choice B is incorrect because \"for example\" illogically signals that the information that follows exemplifies the fact that the crystals of microcrystalline minerals aren’t visible to the naked eye. Instead, the fact that they can be seen under a microscope is an exception to the previous information about crystalline minerals."),
        D: L("Choice D is incorrect because \"similarly\" illogically signals that the information that follows is similar or comparable to the fact that the crystals of microcrystalline minerals aren’t visible to the naked eye. Instead, the fact that they can be seen under a microscope is an exception to the previous information about crystalline minerals.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9dc4e640", "9dc4e640", 124)
    },
    {
      id: "rw-tr-6081831f",
      sourceQuestionId: "6081831f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When Chinese director Chloé Zhao accepted the Oscar in 2021 for her film Nomadland, she made Academy Award history. ______ only one other woman, Kathryn Bigelow of the United States, had been named best director at the Oscars, making Zhao the second woman and the first Asian woman to win the award.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "Previously,", "However,", "Likewise,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Previously” logically signals that the event described in this sentence—Bigelow being named best director— occurred before Zhao’s win. The fact that only one other woman had won the award before puts Zhao’s win in perspective."),
      distractors: {
        A: L("Choice A is incorrect because “as a result” illogically signals that the event described in this sentence occurred as a result or consequence of Zhao’s win. Instead, it occurred before Zhao was named best director and puts Zhao’s win in perspective."),
        C: L("Choice C is incorrect because “however” illogically signals that the event described in this sentence occurred in spite of or in contrast to Zhao’s win. Instead, it occurred before Zhao was named best director and puts Zhao’s win in perspective."),
        D: L("Choice D is incorrect because “likewise” illogically signals that this sentence merely adds a second, similar piece of information to the information about Zhao’s win. Instead, the fact that only one other woman had won the award before puts Zhao’s win in perspective.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-6081831f", "6081831f", 126)
    },
    {
      id: "rw-tr-0c0d50e1",
      sourceQuestionId: "0c0d50e1",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Coastal Virginia Offshore Wind project is anticipated to generate 2.6 gigawatts of energy, enough to power almost one million homes. As its name indicates, the project—currently in development—consists of wind turbines located off the Virginia coast. ______ the project plan calls for 176 large turbines to be placed at a site 27 miles east of Virginia Beach.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["To be exact,", "In conclusion,", "As a result,", "In contrast,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"To be exact\" logically signals that this sentence about the Coastal Virginia Offshore Wind project plan provides specific, precise details—number of turbines, location of site—elaborating on the more general information about the project in the previous sentence."),
      distractors: {
        B: L("Choice B is incorrect because \"in conclusion\" illogically signals that the information in this sentence about the Coastal Virginia Offshore Wind project plan concludes or summarizes the discussion of the project in the previous sentences. Instead, the sentence provides specific, precise details elaborating on the previous information."),
        C: L("Choice C is incorrect because \"as a result\" illogically signals that the information in this sentence about the Coastal Virginia Offshore Wind project plan is caused by, or occurs as a result of, the information about the project in the previous sentence. Instead, the sentence provides specific, precise details elaborating on the previous information."),
        D: L("Choice D is incorrect because \"in contrast\" illogically signals that the information in this sentence about the Coastal Virginia Offshore Wind project plan contrasts with information about the project in the previous sentence. Instead, the sentence provides specific, precise details elaborating on the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0c0d50e1", "0c0d50e1", 127)
    },
    {
      id: "rw-tr-f5149550",
      sourceQuestionId: "f5149550",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A staunch supporter of women’s voting rights, Wilhelmina Kekelaokalaninui Widemann Dowsett sought to coordinate the efforts of suffragists in her native Hawai‘i. ______ in 1912, she founded the National Women’s Equal Suffrage Association of Hawai‘i, an organization that lobbied for women’s voting rights in the US territory.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "Conversely,", "To that end,", "Alternatively,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “To that end” logically signals that the information in this sentence—that Dowsett founded the National Women’s Equal Suffrage Association of Hawai‘i—describes an action Dowsett took to achieve the goal stated in the previous sentence: to coordinate the efforts of suffragists in Hawai‘i."),
      distractors: {
        A: L("Choice A is incorrect because “in other words” illogically signals that the information in this sentence about Dowsett founding a women’s suffrage association is a paraphrase or restatement of the previous information about Dowsett seeking to coordinate suffragists’ efforts. Instead, the sentence describes a specific action Dowsett took to achieve this goal."),
        B: L("Choice B is incorrect because “conversely” illogically signals that the information in this sentence about Dowsett founding a women’s suffrage association contrasts with the previous information about Dowsett seeking to coordinate suffragists’ efforts. Instead, the sentence describes a specific action Dowsett took to achieve this goal."),
        D: L("Choice D is incorrect because “alternatively” illogically signals that the information in this sentence about Dowsett founding a women’s suffrage association presents an alternative to her seeking to coordinate suffragists’ efforts. Instead, the sentence describes a specific action Dowsett took to achieve this goal.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f5149550", "f5149550", 128)
    },
    {
      id: "rw-tr-20e4ff59",
      sourceQuestionId: "20e4ff59",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Famous for its four-degree tilt, the leaning Garisenda Tower is a popular attraction in Bologna’s city center. However, measurements taken in 2023 showed that the tower was rotating in a concerning way. ______ city officials closed the area around the tower so experts could explore solutions to stabilize the historical twelfth-century structure.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "As a result,", "For example,", "In comparison,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"As a result\" logically signals that the action described in this sentence—closing the area around Garisenda Tower to explore stabilization solutions—occurred as a consequence or result of measurements revealing the tower’s concerning rotation."),
      distractors: {
        A: L("Choice A is incorrect because \"similarly\" illogically signals that the action of closing the tower area is similar to the discovery of concerning rotation described in the previous sentence. Instead, closing the area around the tower to explore solutions occurred as a result of the measurements revealing the rotation."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that the action of closing the tower area serves as an example of the tower’s concerning rotation described in the previous sentence. Instead, closing the area around the tower to explore solutions occurred as a result of the measurements revealing the rotation."),
        D: L("Choice D is incorrect because \"in comparison\" illogically signals that the action of closing the tower area is being compared to the discovery of concerning rotation described in the previous sentence. Instead, closing the area around the tower to explore solutions occurred as a result of the measurements revealing the rotation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-20e4ff59", "20e4ff59", 130)
    },
    {
      id: "rw-tr-129089b5",
      sourceQuestionId: "129089b5",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 1933, the Twentieth Amendment to the US Constitution was ratified. The amendment mandates that presidential inaugurations be held on January 20, approximately ten weeks after the November election. ______ this amendment requires newly elected US senators and representatives to be sworn into their respective offices on January 3.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Instead,", "For instance,", "Specifically,", "In addition,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “In addition” logically signals that the information in this sentence—that the Twentieth Amendment requires newly elected US senators and representatives to be sworn in on January 3—is separate from and additional to the amendment’s mandate concerning presidential inaugurations."),
      distractors: {
        A: L("Choice A is incorrect because “instead” illogically signals that the information in the sentence presents an alternative to or substitute for the Twentieth Amendment’s mandate concerning presidential inaugurations. Rather, the sentence presents a separate requirement in addition to that one."),
        B: L("Choice B is incorrect because “for instance” illogically signals that the information in the sentence exemplifies the Twentieth Amendment’s mandate concerning presidential inaugurations. Instead, the sentence presents a separate requirement in addition to that one."),
        C: L("Choice C is incorrect because “specifically” illogically signals that the sentence provides specific, precise details elaborating on the Twentieth Amendment’s mandate concerning presidential inaugurations. Instead, the sentence presents a separate requirement in addition to that one.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-129089b5", "129089b5", 131)
    },
    {
      id: "rw-tr-ddb77846",
      sourceQuestionId: "ddb77846",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>My interest in old public libraries has led me to seek them out whenever I visit a new part of the United States. ______ I could visit every state in the US and still not find the oldest public library in the Western Hemisphere. That library, the Biblioteca Palafoxiana, is located in Puebla, Mexico.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "Nevertheless,", "Earlier,", "In other words,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Nevertheless\" logically signals that the claim in the sentence—that the speaker could visit every state in the US and not find the oldest public library in the Western Hemisphere—is true despite the previous claim about the speaker seeking out old public libraries."),
      distractors: {
        A: L("Choice A is incorrect because \"as a result\" illogically signals that the claim in the sentence is a consequence of the previous claim about the speaker seeking out old public libraries. Instead, the claim is true despite the previous claim."),
        C: L("Choice C is incorrect because \"earlier\" illogically signals that the claim in the sentence occurs earlier in a chronological sequence of events than the previous claim about the speaker seeking out old public libraries. Instead, the claim is true despite the previous claim."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the claim in the sentence is merely a paraphrase or restatement of the previous claim about the speaker seeking out old public libraries. Instead, the claim is true despite the previous claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-ddb77846", "ddb77846", 136)
    },
    {
      id: "rw-tr-a266d876",
      sourceQuestionId: "a266d876",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Upper-atmospheric jets—phenomena whereby electrical discharges cause narrow cones of blue light to briefly burst upward from the tops of thunderclouds—have been observed reaching the ionosphere. The extreme altitudes involved (the ionosphere begins about 80 km above Earth) mark these gigantic jets as outliers; ______ the majority of jets reach heights of only 20 to 50 km.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["nevertheless,", "consequently,", "indeed,", "in addition,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Indeed” logically signals that the information that follows—that the majority of jets reach heights of only 20 to 50 km—offers additional emphasis in support of the previous claim that jets reaching the ionosphere (about 80 km above Earth) are outliers."),
      distractors: {
        A: L("Choice A is incorrect because “nevertheless” illogically signals that the information about most jets reaching heights of only 20 to 50 km contrasts with the previous claim that jets reaching the ionosphere are outliers. Instead, it provides additional emphasis in support of that claim."),
        B: L("Choice B is incorrect because “consequently” illogically signals that the information about most jets reaching heights of only 20 to 50 km is a consequence, or result, of some jets being outliers. Instead, it offers additional emphasis in support of the claim that jets reaching the ionosphere are outliers."),
        D: L("Choice D is incorrect because “in addition” illogically signals that the information about most jets reaching heights of only 20 to 50 km merely adds to the previous claim that jets reaching the ionosphere are considered outliers. Instead, it provides additional emphasis in support of that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a266d876", "a266d876", 137)
    },
    {
      id: "rw-tr-9fe7315b",
      sourceQuestionId: "9fe7315b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Few New Yorkers have heard Thelma Pollard’s name. ______ many have seen her work in the famous Broadway musical The Phantom of the Opera. As the musical’s longtime makeup supervisor, Pollard put the iconic makeup on the face of the Phantom himself.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "Therefore,", "For example,", "However,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"However\" logically signals that the claim in this sentence—that many New Yorkers have seen Pollard’s work in a famous Broadway musical—is true despite the previous information that few New Yorkers have heard Pollard’s name."),
      distractors: {
        A: L("Choice A is incorrect because \"similarly\" illogically signals that the claim in this sentence is similar to the previous information that few New Yorkers have heard Pollard’s name. Instead, the claim that many New Yorkers have seen Pollard’s work is true despite the previous information."),
        B: L("Choice B is incorrect because \"therefore\" illogically signals that the claim in this sentence is a result of the previous information that few New Yorkers have heard Pollard’s name. Instead, the claim that many New Yorkers have seen Pollard’s work is true despite the previous information."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that the claim in this sentence exemplifies the previous information that few New Yorkers have heard Pollard’s name. Instead, the claim that many New Yorkers have seen Pollard’s work is true despite the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9fe7315b", "9fe7315b", 139)
    },
    {
      id: "rw-tr-fc5e83cc",
      sourceQuestionId: "fc5e83cc",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When following musical scores, professional opera singers like soprano Ana María Martínez take vocal directions from descriptive notations, typically in Italian, that appear alongside the musical notes. ______ these descriptive terms might guide the performer to sing giocoso (playfully) or lento (at a slow tempo).</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["On the other hand,", "All the same,", "For example,", "In the second place,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"For example\" logically signals that this sentence supports the previous information about the descriptive notations opera singers use by providing specific examples of these notations: giocoso (playfully) and lento (at a slow tempo)."),
      distractors: {
        A: L("Choice A is incorrect because \"on the other hand\" illogically signals that the information in this sentence contrasts with the previous information about the descriptive notations opera singers use. Instead, the sentence provides examples of these notations."),
        B: L("Choice B is incorrect because \"all the same\" illogically signals that the information in this sentence is true despite the previous information about the descriptive notations opera singers use. Instead, the sentence provides examples of these notations."),
        D: L("Choice D is incorrect because \"in the second place\" illogically signals that the information in this sentence is a second point that is separate from the previous information about the descriptive notations opera singers use. Instead, the sentence provides examples of these notations.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-fc5e83cc", "fc5e83cc", 140)
    },
    {
      id: "rw-tr-911c7a87",
      sourceQuestionId: "911c7a87",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>After appropriate permissions are granted, a typical archaeological dig begins with a surveyor making a detailed grid of the excavation site. Then, the site is carefully dug, and any artifacts found are recorded and mapped onto the site grid. ______ the artifacts are removed, cataloged, and analyzed in a laboratory.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For instance,", "On the contrary,", "Earlier,", "Finally,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Finally\" logically signals that the actions in this sentence—the removal, cataloging, and analysis of artifacts—are the next and final steps in a process, following the previous actions of surveying, digging, recording, and mapping."),
      distractors: {
        A: L("Choice A is incorrect because \"for instance\" illogically signals that the actions in this sentence are an example of the actions in the previous sentence. Instead, the removal, cataloging, and analysis of artifacts are the next and final steps in a process."),
        B: L("Choice B is incorrect because \"on the contrary\" illogically signals that the actions in this sentence are directly opposed to the actions in the previous sentence. Instead, the removal, cataloging, and analysis of artifacts are the next and final steps in a process."),
        C: L("Choice C is incorrect because \"earlier\" illogically signals that the actions in this sentence occur before the actions in the previous sentence. Instead, the removal, cataloging, and analysis of artifacts are the next and final steps in a process.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-911c7a87", "911c7a87", 141)
    },
    {
      id: "rw-tr-9502ec65",
      sourceQuestionId: "9502ec65",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When soil becomes contaminated by toxic metals, it can be removed from the ground and disposed of in a landfill. ______ contaminated soil can be detoxified via phytoremediation: plants that can withstand high concentrations of metals absorb the pollutants and store them in their shoots, which are then cut off and safely disposed of, preserving the health of the plants.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Alternatively,", "Specifically,", "For example,", "As a result,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Alternatively” logically signals that the soil decontamination method described in this sentence—removing toxic metals from the soil via phytoremediation—offers an alternative to the previously described method (removing the contaminated soil from the ground)."),
      distractors: {
        B: L("Choice B is incorrect because “specifically” illogically signals that the soil decontamination method described in this sentence specifies or elaborates on an aspect of the previously described method (removing the contaminated soil from the ground). Instead, phytoremediation is an alternative to that method."),
        C: L("Choice C is incorrect because “for example” illogically signals that the soil decontamination method described in this sentence is an example of the previously described method (removing the contaminated soil from the ground). Instead, phytoremediation is an alternative to that method."),
        D: L("Choice D is incorrect because “as a result” illogically signals that the soil decontamination method described in this sentence is a result or consequence of the previously described method (removing the contaminated soil from the ground). Instead, phytoremediation is an alternative to that method.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9502ec65", "9502ec65", 142)
    },
    {
      id: "rw-tr-2df7b582",
      sourceQuestionId: "2df7b582",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Plato believed material objects to be crude representations of unseen ideal forms. In his view, such abstract, nonmaterial forms are the ultimate source of knowledge. Aristotle disagreed, positing that knowledge is best obtained through direct engagement with the material world; ______ sensory experience of the material is the ultimate source of knowledge.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["regardless,", "admittedly,", "in other words,", "meanwhile,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “In other words” logically signals that the claim about sensory experience that follows—that sensory experience is the source of knowledge—is a restatement of Aristotle’s theory from earlier in the sentence."),
      distractors: {
        A: L("Choice A is incorrect because “regardless” illogically signals that the claim about sensory experience that follows is true in spite of Aristotle’s theory from earlier in the sentence. Instead, this claim is a restatement of his theory."),
        B: L("Choice B is incorrect because “admittedly” illogically signals that the claim about sensory experience that follows is an exception to Aristotle’s theory from earlier in the sentence. Instead, this claim is a restatement of his theory."),
        D: L("Choice D is incorrect because “meanwhile” illogically signals that the claim about sensory experience that follows is separate from (while occurring simultaneously with) Aristotle’s theory from earlier in the sentence. Instead, this claim is a restatement of his theory.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-2df7b582", "2df7b582", 145)
    },
    {
      id: "rw-tr-f8c4591b",
      sourceQuestionId: "f8c4591b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>With their distinctive cone shapes and steeply sloping sides, the volcanoes Hverfjall (Iceland) and Toliman (Guatemala) may look similar from afar. Tehnuka Ilanko and other volcanologists, ______ can tell by how each was formed that Hverfjall is a cinder cone volcano, while Toliman is a composite volcano.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["for example,", "in addition,", "therefore,", "though,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Though\" logically signals that the information in this sentence—that volcanologists can distinguish the two volcanoes by how they were formed—presents a qualification or exception to the previous statement that the volcanoes look similar. The volcanoes are actually of two different types."),
      distractors: {
        A: L("Choice A is incorrect because \"for example\" illogically signals that the information in this sentence exemplifies the previous information about the volcanoes looking similar. Instead, the sentence presents a qualification to that apparent similarity—the volcanoes are actually of two different types."),
        B: L("Choice B is incorrect because \"in addition\" illogically signals that the information in this sentence merely adds to the previous information about the volcanoes looking similar. Instead, the sentence presents a qualification to that apparent similarity—the volcanoes are actually of two different types."),
        C: L("Choice C is incorrect because \"therefore\" illogically signals that the information in this sentence is a result of the previous information about the volcanoes looking similar. Instead, the sentence presents a qualification to that apparent similarity—the volcanoes are actually of two different types.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f8c4591b", "f8c4591b", 146)
    },
    {
      id: "rw-tr-42870a4e",
      sourceQuestionId: "42870a4e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Marcel Duchamp intended his 1917 so-called ready-made sculpture Fountain to challenge then-prevailing conceptions about the nature of art. ______ Duchamp’s Fountain did just that, raising the question of whether displaying any object in an art gallery could be said to transform the object—even, as Duchamp’s sculpture was, a urinal—into a legitimate work of art.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "Indeed,", "Instead,", "In addition,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Indeed\" logically signals that the information in this sentence—that the sculpture raised the question of whether displaying any object in an art gallery transforms the object into a work of art—offers emphasis in support of the claim in the previous sentence that the sculpture was intended to challenge conceptions about the nature of art."),
      distractors: {
        A: L("Choice A is incorrect because \"similarly\" illogically signals that information in this sentence is similar to the claim about the sculptor’s intention in the previous sentence. Instead, the information about the question raised by the sculpture offers emphasis in support of that claim."),
        C: L("Choice C is incorrect because \"instead\" illogically signals that the information in this sentence is an alternative to the claim about the sculptor’s intention in the previous sentence. Rather, the information about the question raised by the sculpture offers emphasis in support of that claim."),
        D: L("Choice D is incorrect because \"in addition\" illogically signals that the information in this sentence is merely an additional fact related to the claim about the sculptor’s intention in the previous sentence. Instead, the information about the question raised by the sculpture offers emphasis in support of that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-42870a4e", "42870a4e", 147)
    },
    {
      id: "rw-tr-49ecf985",
      sourceQuestionId: "49ecf985",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>On March 3, 1991, Switzerland’s government lowered the minimum voting age for its citizens from 20 to 18 years old. ______ many people in Switzerland gained a new opportunity to participate in their country’s political process.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Nevertheless,", "As a result,", "By contrast,", "Similarly,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"As a result\" logically signals that the information in this sentence—that many people in Switzerland gained a new opportunity to participate in their country’s political process—is a result or consequence of the previous information about the Swiss government lowering the voting age."),
      distractors: {
        A: L("Choice A is incorrect because \"nevertheless\" illogically signals that the information that follows is despite the information in the previous sentence about the Swiss government lowering the voting age. Instead, people gained a new opportunity to participate in Switzerland’s political process as a result or consequence of that change."),
        C: L("Choice C is incorrect because \"by contrast\" illogically signals that the information in this sentence contrasts with the information in the previous sentence about the Swiss government lowering the voting age. Instead, people gained a new opportunity to participate in Switzerland’s political process as a result or consequence of that change."),
        D: L("Choice D is incorrect because \"similarly\" illogically signals that the information in this sentence is similar to the information about the Swiss government lowering the voting age in the previous sentence. Instead, people gained a new opportunity to participate in Switzerland’s political process as a result or consequence of that change.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-49ecf985", "49ecf985", 148)
    },
    {
      id: "rw-tr-64bcdf3d",
      sourceQuestionId: "64bcdf3d",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Giant dust plumes from the Sahara Desert that blow across the Atlantic Ocean can have complex and opposing effects on tropical cyclones. On one hand, the dust can enhance the formation of ice clouds in the cyclone’s core, increasing precipitation. ______ the dust can lower sea surface temperatures around the cyclone’s core, weakening the storm.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Previously,", "In other words,", "For example,", "On the other hand,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “On the other hand” logically signals that the information in this sentence—that dust can lower sea surface temperatures, weakening the storm—presents an opposing effect to the one described in the previous sentence, in which dust enhances ice cloud formation and increases precipitation."),
      distractors: {
        A: L("Choice A is incorrect because “previously” illogically signals that the information in this sentence is an event that occurred before the dust-enhanced ice cloud formation mentioned in the previous sentence. Instead, the dust lowering surface temperatures—and weakening the storm— is an opposing effect."),
        B: L("Choice B is incorrect because “in other words” illogically signals that the information in this sentence is a paraphrase or restatement of the previous information about dust enhancing ice cloud formation. Instead, the dust lowering surface temperatures—and weakening the storm—is an opposing effect."),
        C: L("Choice C is incorrect because “for example” illogically signals that the information in this sentence is an example of the previous information about dust enhancing ice cloud formation. Instead, the dust lowering surface temperatures—and weakening the storm—is an opposing effect.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-64bcdf3d", "64bcdf3d", 149)
    },
    {
      id: "rw-tr-c7e85c0a",
      sourceQuestionId: "c7e85c0a",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The envelope-shaped paper bags common in the US 150 years ago were impractical for carrying goods. ______ because they were the only paper bags that could be mass-produced, these bags dominated the market. That all changed in the 1870s, when industrial designer Margaret Knight patented a machine to make flat-bottomed, foldable paper bags.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "For instance,", "Thus,", "In other words,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “However” logically signals that the information in this sentence—that envelope-shaped bags dominated the market —contrasts with the previous claim that these bags were impractical for carrying goods."),
      distractors: {
        B: L("Choice B is incorrect because “for instance” illogically signals that the information in this sentence is an example supporting the previous claim that envelope-shaped bags were impractical for carrying goods. Instead, the sentence contrasts with the previous claim about the bags."),
        C: L("Choice C is incorrect because “thus” illogically signals that the information in this sentence is a result of the previous claim that envelope-shaped bags were impractical for carrying goods. Instead, the sentence contrasts with the previous claim about the bags."),
        D: L("Choice D is incorrect because “in other words” illogically signals that the information in this sentence is a paraphrase of the previous claim that envelope-shaped bags were impractical for carrying goods. Instead, the sentence contrasts with the previous claim about the bags.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-c7e85c0a", "c7e85c0a", 151)
    },
    {
      id: "rw-tr-f33f0892",
      sourceQuestionId: "f33f0892",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Although novels and poems are considered distinct literary forms, many authors have created hybrid works that incorporate elements of both. Bernardine Evaristo’s The Emperor’s Babe, ______ is a verse novel, a book-length narrative complete with characters and a plot but conveyed in short, crisp lines of poetry rather than prose.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["by contrast,", "consequently,", "secondly,", "for example,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “For example” logically signals that the information in this sentence—that The Emperor’s Babe is a novel conveyed in lines of poetry—exemplifies the claim in the previous sentence about hybrid works that incorporate elements of both novels and poems."),
      distractors: {
        A: L("Choice A is incorrect because “by contrast” illogically signals that the information in this sentence contrasts with the claim about hybrid works in the previous sentence. Instead, the information demonstrates that Evaristo’s novel is an example of a hybrid work."),
        B: L("Choice B is incorrect because “consequently” illogically signals that the information in this sentence is a consequence, or result, of the claim about hybrid works in the previous sentence. Instead, the information demonstrates that Evaristo’s novel is an example of a hybrid work."),
        C: L("Choice C is incorrect because “secondly” illogically signals that the information in this sentence is a second, separate claim from the previous sentence’s claim about hybrid works. Instead, the information demonstrates that Evaristo’s novel is an example of a hybrid work.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f33f0892", "f33f0892", 154)
    },
    {
      id: "rw-tr-7d56630a",
      sourceQuestionId: "7d56630a",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In studying whether jellyfish sleep, researchers Michael Abrams, Claire Bedbrook, and Ravi Nath attempted to answer three questions. ______ is there a period each day when the pulse rates of jellyfish decline? Second, do jellyfish respond more slowly to stimuli during that period? Finally, if prevented from sleeping, are jellyfish adversely affected?</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "First,", "Additionally,", "However,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “First” logically signals that the question in this sentence—whether there is a daily period during which jellyfish pulse rates decline—is the first in a sequence of three questions the researchers attempted to answer about jellyfish sleep behavior."),
      distractors: {
        A: L("Choice A is incorrect because “as a result” illogically signals that the question in this sentence is a result of the three questions the researchers attempted to answer. Instead, it is the first of those three questions."),
        C: L("Choice C is incorrect because “additionally” illogically signals that the question in this sentence is an additional question related to the three questions the researchers attempted to answer. Instead, it is the first of those three questions."),
        D: L("Choice D is incorrect because “however” illogically signals that the question in this sentence contrasts with the three questions the researchers attempted to answer. Instead, it is the first of those three questions.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-7d56630a", "7d56630a", 156)
    },
    {
      id: "rw-tr-a6155e60",
      sourceQuestionId: "a6155e60",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Every chemical compound has a spectroscopic fingerprint, a pattern of reflected light unique to that compound. ______ upon analyzing the light reflected by the bright regions on the surface of the dwarf planet Ceres, Maria Cristina De Sanctis of Rome’s National Institute of Astrophysics was able to determine that the regions contain large amounts of the compound sodium carbonate.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Regardless,", "Meanwhile,", "Thus,", "In comparison,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Thus” logically signals that the action described in this sentence—the researcher being able to determine the chemical makeup of the planet’s bright regions based on how they reflect light—is a result or consequence of the previous information about spectroscopic fingerprints."),
      distractors: {
        A: L("Choice A is incorrect because “regardless” illogically signals that the action described in this sentence occurs despite the previous information about spectroscopic fingerprints. Instead, the finding in this sentence is a result or consequence of that information."),
        B: L("Choice B is incorrect because “meanwhile” illogically signals that the action described in this sentence either occurs at the same time as or offers an alternative to the previous information about spectroscopic fingerprints. Instead, the finding in this sentence is a result or consequence of that information."),
        D: L("Choice D is incorrect because “in comparison” illogically signals that the action described in this sentence is being compared with the previous information about spectroscopic fingerprints. Instead, the finding in this sentence is a result or consequence of that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a6155e60", "a6155e60", 158)
    },
    {
      id: "rw-tr-e1b00a70",
      sourceQuestionId: "e1b00a70",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The more diverse and wide ranging an animal’s behaviors, the larger and more energy demanding the animal’s brain tends to be. ______ from an evolutionary perspective, animals that perform only basic actions should allocate fewer resources to growing and maintaining brain tissue. The specialized subtypes of ants within colonies provide an opportunity to explore this hypothesis.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Subsequently,", "Besides,", "Nevertheless,", "Thus,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Thus” logically signals that the claim in this sentence—that animals performing only basic actions should allocate relatively few resources to their brain tissue—is a consequence of the previous sentence’s claim about the energy demands of animal brains (namely, that the more diverse an animal’s behaviors, the more energy its brain needs)."),
      distractors: {
        A: L("Choice A is incorrect because “subsequently” illogically signals that the claim in this sentence occurs later in a chronological sequence of events than the previous sentence’s claim about the energy demands of animal brains. Instead, the second claim is a consequence of the first."),
        B: L("Choice B is incorrect because “besides” illogically signals that the claim in this sentence provides a separate point in addition to, or apart from, the previous sentence’s claim about the energy demands of animal brains. Instead, the second claim is a consequence of the first."),
        C: L("Choice C is incorrect because “nevertheless” illogically signals that the claim in this sentence is true in spite of the previous sentence’s claim about the energy demands of animal brains. Instead, the second claim is a consequence of the first.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e1b00a70", "e1b00a70", 167)
    },
    {
      id: "rw-tr-74028acf",
      sourceQuestionId: "74028acf",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Topographic maps show the elevation of landforms above sea level. Bathymetric maps, ______ show the elevation of landforms below the sea, providing valuable information to marine geophysicists like Claudia Flores, who studies seismic data from the northeastern Caribbean.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in conclusion,", "for example,", "by contrast,", "afterward,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “By contrast” logically signals that the information about bathymetric maps in this sentence—that they show landforms’ elevation below the sea—presents a direct contrast to the previous information about topographic maps showing landforms’ elevation above sea level."),
      distractors: {
        A: L("Choice A is incorrect because “in conclusion” illogically signals that the information about bathymetric maps in this sentence concludes or summarizes the previous information about topographic maps. Instead, the sentence provides contrasting information about bathymetric maps."),
        B: L("Choice B is incorrect because “for example” illogically signals that the information about bathymetric maps in this sentence exemplifies the previous information about topographic maps. Instead, the sentence provides contrasting information about bathymetric maps."),
        D: L("Choice D is incorrect because “afterward” illogically signals that this sentence describes an event that chronologically follows the previous information about topographic maps. Instead, the sentence provides contrasting information about bathymetric maps.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-74028acf", "74028acf", 171)
    },
    {
      id: "rw-tr-08be6347",
      sourceQuestionId: "08be6347",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In his 1925 book The Morphology of Landscape, US geographer Carl Sauer challenged prevailing views about how natural landscapes influence human cultures. ______ Sauer argued that instead of being shaped entirely by their natural surroundings, cultures play an active role in their own development by virtue of their interactions with the environment.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "Finally,", "Therefore,", "Specifically,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Specifically” logically signals that the information in this sentence about Sauer’s argument—that, according to Sauer, cultures play a role in their own development, as opposed to being shaped solely by natural surroundings—provides specific, precise details elaborating on the more general information in the previous sentence about how Sauer challenged prevailing views about how natural landscapes influence human cultures."),
      distractors: {
        A: L("Choice A is incorrect because “similarly” illogically signals that the information in this sentence about Sauer’s argument is similar to, but separate from, the more general information in the previous sentence. Instead, it provides specific, precise details elaborating on that information."),
        B: L("Choice B is incorrect because “finally” illogically signals that the information in this sentence about Sauer’s argument indicates a last step in a process or a concluding summary. Instead, it provides specific, precise details elaborating on the general information in the previous sentence."),
        C: L("Choice C is incorrect because “therefore” illogically signals that the information in this sentence about Sauer’s argument is a result of the more general information in the previous sentence. Instead, it provides specific, precise details elaborating on that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-08be6347", "08be6347", 175)
    },
    {
      id: "rw-tr-3a715eca",
      sourceQuestionId: "3a715eca",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In retrospect, one of the lessons of the 2003 Human Genome Project is that a gene is affected by many factors, not the least of which is its interactions with the protein products of other genes. ______ rather than just focusing on the human genome, efforts to better understand gene mutations related to disease have begun to consider the human proteome, the complete set of proteins expressed by human genes.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "That said,", "For example,", "Accordingly,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Accordingly\" logically signals that this sentence states a result or consequence of the previous information about the 2003 Human Genome Project. Taking into account an important lesson of the 2003 project (that a gene is affected by interactions with the protein products of other genes), research has begun to consider the human proteome instead of just the genome."),
      distractors: {
        A: L("Choice A is incorrect because \"in other words\" illogically signals that the information in this sentence is a paraphrase or restatement of the previous information about the 2003 Human Genome Project. Instead, this sentence states a result or consequence of that information."),
        B: L("Choice B is incorrect because \"that said\" illogically signals that the information in this sentence qualifies or contrasts with the previous information about the 2003 Human Genome Project. Instead, this sentence states a result or consequence of that information."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that this sentence provides an example supporting the previous information about the 2003 Human Genome Project. Instead, this sentence states a result or consequence of that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-3a715eca", "3a715eca", 180)
    },
    {
      id: "rw-tr-d10e46a2",
      sourceQuestionId: "d10e46a2",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The ancient Spartans were known for their bitingly concise—or laconic—wit, a quality they maintained even in the face of great peril. ______ when Philip II of Macedon threatened Laconia (the region of Greece containing Sparta), he said, “If I invade Laconia, I shall turn you out. ” The Spartans replied with a single word: “If. ”</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Rather,", "In other words,", "That said,", "For instance,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"For instance\" logically signals that the concise, witty exchange between Philip II and the Spartans is an example supporting the previous claim—that the Spartans employed wit even in the face of peril."),
      distractors: {
        A: L("Choice A is incorrect because \"rather\" illogically signals that the exchange between Philip II and the Spartans contrasts with the previous claim about the Spartans’ wit. Instead, the exchange is an example of their wit."),
        B: L("Choice B is incorrect because \"in other words\" illogically signals that the exchange between Philip II and the Spartans is a restatement of the previous claim about the Spartans’ wit. Instead, the exchange is an example of their wit."),
        C: L("Choice C is incorrect because \"that said\" illogically signals that the exchange between Philip II and the Spartans is an exception to the previous claim about the Spartans’ wit. Instead, the exchange is an example of their wit.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-d10e46a2", "d10e46a2", 182)
    },
    {
      id: "rw-tr-00e0170f",
      sourceQuestionId: "00e0170f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Magnetic levitation (maglev) trains are suspended above a track by powerful electromagnets, reducing friction and thus allowing for much faster speeds. Though maglev advocates in the US have long imagined these trains crisscrossing the country, their dream remains unrealized. ______ of the handful of maglev trains currently in operation, all are in Asia.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In fact,", "To that end,", "Nevertheless,", "That said,"],
      answer: "A",
      explanation: L("Choice A is the best answer. This sentence emphasizes just how far maglev advocates’ dreams are from coming true. “In fact” is a transition used to emphasize the truth of a statement that modifies the previous statement and therefore fits perfectly in this context."),
      distractors: {
        B: L("Choice B is incorrect. This choice uses a cause-and-effect transition, which doesn’t make sense here. Maglev advocates’ dream remaining unrealized would not cause there to be only a few maglev trains, all located in Asia."),
        C: L("Choice C is incorrect. This choice uses a disagreement transition, which doesn’t make sense here. In fact, this sentence agrees with the previous sentence—both talk about how maglev trains are far from becoming common in the US."),
        D: L("Choice D is incorrect. This choice uses a disagreement transition, which doesn’t make sense here. In fact, this sentence agrees with the previous sentence—both talk about how maglev trains are far from becoming common in the US.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-00e0170f", "00e0170f", 188)
    },
    {
      id: "rw-tr-c071eca2",
      sourceQuestionId: "c071eca2",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Iraqi artist Nazik Al-Malaika, celebrated as the first Arabic poet to write in free verse, didn’t reject traditional forms entirely; her poem “Elegy for a Woman of No Importance” consists of two ten-line stanzas and a standard number of syllables. Even in this superficially traditional work, ______ Al-Malaika was breaking new ground by memorializing an anonymous woman rather than a famous man.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["therefore,", "in fact,", "moreover,", "though,"],
      answer: "D",
      explanation: L("Choice D is the best answer. The first sentence tells us that Al-Malaika sometimes used \"traditional forms\". The second tells us that even when she used traditional forms, Al-Malaika was \"breaking new ground\". To connect these ideas, we need a contrast word like \"but. \" \"Though\" is a contrast word similar to \"but. \""),
      distractors: {
        A: L("Choice A is incorrect. This isn’t a logical transition. The first sentence tells us that Al-Malaika sometimes used \"traditional forms\". The second tells us that even when she used traditional forms, Al-Malaika was \"breaking new ground\". To connect these ideas, we need a contrast word like \"but. \" \"Therefore\" doesn’t show contrast; it shows cause and effect."),
        B: L("Choice B is incorrect. This isn’t a logical transition. The first sentence tells us that Al-Malaika sometimes used \"traditional forms\". The second tells us that even when she used traditional forms, Al-Malaika was \"breaking new ground\". To connect these ideas, we need a contrast word like \"but. \" \"In fact\" is a phrase that usually emphasizes the truth of the previous statement."),
        C: L("Choice C is incorrect. This isn’t a logical transition. The first sentence tells us that Al-Malaika sometimes used \"traditional forms\". The second tells us that even when she used traditional forms, Al-Malaika was \"breaking new ground\". To connect these ideas, we need a contrast word like \"but. \" \"Moreover\" doesn’t show contrast—it introduces additional information that continues or supports the previous idea.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-c071eca2", "c071eca2", 190)
    },
    {
      id: "rw-tr-a7a944ed",
      sourceQuestionId: "a7a944ed",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In astrophysics, a ring of debris orbiting a larger object within the object’s Roche limit is expected to persist as a ring, whereas a ring of debris orbiting outside this limit would likely accrete into a satellite (e.g., a moon). Bruno Morgado and colleagues, ______ detected a dense ring of material orbiting the trans-Neptunian object Quaoar at a distance of 2,500 miles, well outside the calculated Roche limit of 1,100 miles, that has remained intact.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["though,", "for example,", "fittingly,", "likewise,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Though” logically signals that the information in this sentence—that Morgado and colleagues detected a dense ring orbiting outside the Roche limit that remained intact—presents an exception to the previous sentence’s claim about debris orbiting outside an object’s Roche limit. Such debris would be expected to accrete into a satellite, not remain intact as a ring."),
      distractors: {
        B: L("Choice B is incorrect because “for example” illogically signals that the information about Morgado’s discovery exemplifies the previous sentence’s claim about debris orbiting outside an object’s Roche limit. Instead, the sentence presents an exception to the claim."),
        C: L("Choice C is incorrect because “fittingly” illogically signals that the information about Morgado’s discovery aligns with the previous sentence’s claim about debris orbiting outside an object’s Roche limit. Instead, the sentence presents an exception to the claim."),
        D: L("Choice D is incorrect because “likewise” illogically signals that the information about Morgado’s discovery is similar to the previous sentence’s claim about debris orbiting outside an object’s Roche limit. Instead, the sentence presents an exception to the claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a7a944ed", "a7a944ed", 191)
    },
    {
      id: "rw-tr-b5ed1a8b",
      sourceQuestionId: "b5ed1a8b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In his 2023 collection The Diaspora Sonnets, Filipino American poet Oliver de la Paz leverages the sonnet form’s “diamond-like quality of precision, ” as he describes it. The poems often adhere scrupulously to the form’s centuries-old conventions, such as its characteristic fourteen-line length. In the twelve-line poem “Diaspora Sonnet at the Feeders Before the Freeze, ” ______ de la Paz playfully subverts sonnet conventions, the poem’s truncated length conveying a sense of abruptness.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["fittingly,", "similarly,", "for example,", "by contrast,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “By contrast” logically signals that the information in this sentence—that one of de la Paz’s poems subverts sonnet conventions—contrasts with the previous information that his poems often adhere to sonnet conventions."),
      distractors: {
        A: L("Choice A is incorrect because “fittingly” illogically signals that the information in this sentence is an appropriate or expected outcome of the previous information about de la Paz’s adherence to sonnet conventions. Instead, de la Paz’s subversion of sonnet conventions contrasts with that information."),
        B: L("Choice B is incorrect because “similarly” illogically signals that the information in this sentence is similar to the previous information about de la Paz’s adherence to sonnet conventions. Instead, de la Paz’s subversion of sonnet conventions contrasts with that information."),
        C: L("Choice C is incorrect because “for example” illogically signals that the information in this sentence exemplifies the previous information about de la Paz’s adherence to sonnet conventions. Instead, de la Paz’s subversion of sonnet conventions contrasts with that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b5ed1a8b", "b5ed1a8b", 192)
    },
    {
      id: "rw-tr-feb1e6da",
      sourceQuestionId: "feb1e6da",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Biographer Michael Gorra notes that the novelist Henry James “lived in a world of second thoughts, ” frequently tinkering with his novels and stories after their initial publication. However, the differences between the 1881 first edition and the 1908 edition of his novel A Portrait of a Lady are extreme, even by James’s standards; ______ some critics regard the two editions as two different novels altogether.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["by contrast,", "in fact,", "nevertheless,", "in other words,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"In fact\" logically signals that the critics’ claim at the end of this sentence—that the two editions are essentially two different novels altogether—offers additional emphasis in support of the previous claim that the differences between the editions are extreme."),
      distractors: {
        A: L("Choice A is incorrect because \"by contrast\" illogically signals that the claim at the end of this sentence contrasts with the previous claim about the differences between the editions. Instead, the critics’ opinion offers additional emphasis in support of that claim."),
        C: L("Choice C is incorrect because \"nevertheless\" illogically signals that the claim at the end of this sentence is true despite the previous claim about the differences between the two editions. Instead, the critics’ opinion offers additional emphasis in support of that claim."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the claim at the end of this sentence is merely paraphrasing the previous claim about the differences between the two editions. The critics’ opinion adds new information to the previous claim rather than simply paraphrasing it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-feb1e6da", "feb1e6da", 193)
    },
    {
      id: "rw-tr-176edca6",
      sourceQuestionId: "176edca6",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A 2017 study of sign language learners tested the role of iconicity—the similarity of a sign to the thing it represents—in language acquisition. The study found that the greater the iconicity of a sign, the more likely it was to have been learned. ______ the correlation between acquisition and iconicity was lower than that between acquisition and another factor studied: sign frequency.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In fact,", "In other words,", "Granted,", "As a result,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Granted” logically signals that the information in this sentence—that iconicity is not as highly correlated with acquisition as sign frequency is—is true in spite of the information in the previous sentence about the positive correlation between iconicity and acquisition."),
      distractors: {
        A: L("Choice A is incorrect because “in fact” illogically signals that this sentence either emphasizes or refutes the information in the previous sentence about the positive correlation between acquisition and iconicity. Instead, it provides information about a different correlation—that between acquisition and sign frequency."),
        B: L("Choice B is incorrect because “in other words” illogically signals that this sentence merely restates the information in the previous sentence about the positive correlation between acquisition and iconicity. Instead, this sentence provides information about a different correlation—that between acquisition and sign frequency."),
        D: L("Choice D is incorrect because “as a result” illogically signals that this sentence is a consequence of the information in the previous sentence about the positive correlation between acquisition and iconicity. Instead, this sentence provides information about a different correlation—that between acquisition and sign frequency.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-176edca6", "176edca6", 195)
    },
    {
      id: "rw-tr-4105f5ac",
      sourceQuestionId: "4105f5ac",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>When, in 2017, Cambridge University students Lucy Moss and Toby Marlow decided they wanted to develop a musical together, one of their goals was for their female actor friends to have good parts to play. ______ they created the show Six, a retelling of the history of King Henry VIII’s wives in which each of the six queens has a starring role.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "In summary,", "For example,", "To that end,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"To that end\" logically signals that the information in this sentence—the students’ creation of a show with six starring female roles—is the product of a goal or desire in the previous sentence (the students’ wish to develop a musical with roles for female actors)."),
      distractors: {
        A: L("Choice A is incorrect because \"in other words\" illogically signals that the information in this sentence is a paraphrase or restatement of the previous information about the students’ wish to develop a musical with roles for female actors. Instead, the students’ show is the product of that desire."),
        B: L("Choice B is incorrect because \"in summary\" illogically signals that the information in this sentence summarizes the previous information about the students’ wish to develop a musical with roles for female actors. Instead, the students’ show is the product of that desire."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that the information in this sentence is merely an example of the previous information about the students’ wish to develop a musical with roles for female actors. Instead, the students’ show is the direct product of that desire.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-4105f5ac", "4105f5ac", 197)
    },
    {
      id: "rw-tr-388b45aa",
      sourceQuestionId: "388b45aa",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Establishing Coordinated Universal Time (UTC) is no easy task. Each month, readings of a single second from atomic clocks around the world are taken and sent to the International Bureau of Weights and Measures (BIPM) in France. ______ BIPM metrologists perform the meticulous work of assembling these minutely disparate readings into a globally shared time standard.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["There,", "In particular,", "For example,", "Conversely,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"There\" indicates that the work of calculating Coordinated Universal Time takes place at the International Bureau of Weights and Measures in France. Because \"there\" indicates a location, it fits the context perfectly."),
      distractors: {
        B: L("Choice B is incorrect. This choice uses an exemplification transition, which doesn’t make sense here. This sentence is describing where the work of coordinating Coordinated Universal Time takes place, not giving an example of the work described in the previous sentence."),
        C: L("Choice C is incorrect. This choice uses an exemplification transition, which doesn’t make sense here. This sentence is describing where the work of coordinating Coordinated Universal Time takes place, not giving an example of the work described in the previous sentence."),
        D: L("Choice D is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous sentence. They both describe the work involved in calculating Coordinated Universal Time.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-388b45aa", "388b45aa", 198)
    },
    {
      id: "rw-tr-37ec26e7",
      sourceQuestionId: "37ec26e7",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In order to create the Global Positioning System (GPS), scientists had to develop an accurate mathematical model of Earth’s shape that accounted for various forces, such as tides. ______ it was mathematician Gladys West who wrote the computer program that could perform these necessary calculations.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Ultimately,", "In other words,", "Secondly,", "In addition,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"Ultimately\" logically signals that West’s completion of the computer program was the conclusion of the process described in the previous sentence, in which scientists working on GPS sought to develop a mathematical model of Earth."),
      distractors: {
        B: L("Choice B is incorrect because \"in other words\" illogically signals that the information about West’s program is a restatement of the information about the scientists’ efforts to develop a mathematical model of Earth. Instead, West’s program was the conclusion of those efforts."),
        C: L("Choice C is incorrect because \"secondly\" illogically signals that West’s completion of the computer program was merely the next step in the scientists’ efforts to develop a mathematical model of Earth. Instead, West’s program was the conclusion of those efforts."),
        D: L("Choice D is incorrect because \"in addition\" illogically signals that West’s completion of the computer program was merely additional information related to the scientists’ work on GPS. Instead, West’s program was the conclusion of the scientists’ efforts to develop a mathematical model of Earth.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-37ec26e7", "37ec26e7", 206)
    },
    {
      id: "rw-tr-290a5d77",
      sourceQuestionId: "290a5d77",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Guard cells are specialized cells that are part of a plant’s pores. These cells help regulate the amount of carbon dioxide a plant takes in. ______ they help regulate a plant’s water loss.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Additionally,", "Previously,", "In conclusion,", "Instead,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"Additionally\" logically signals that guard cells’ role in regulating water loss is an additional function of these specialized plant cells that is separate from the function of regulating carbon dioxide intake."),
      distractors: {
        B: L("Choice B is incorrect because \"previously\" illogically signals that the activity described in this sentence occurs earlier in a chronological sequence of events than the regulation of carbon dioxide intake described in the previous sentence. Instead, regulating water loss is an additional function of guard cells that is separate from the function of regulating carbon dioxide intake."),
        C: L("Choice C is incorrect because \"in conclusion\" illogically signals that the description of guard cells’ role in regulating water loss concludes or summarizes the information about guard cells provided in the previous sentences. Instead, regulating water loss is one of the two distinct functions of guard cells described in the text."),
        D: L("Choice D is incorrect because \"instead\" illogically signals that the activity described in this sentence happens in place of the activity of regulating carbon dioxide intake described in the previous sentence. Rather, regulating water loss is an additional function of guard cells.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-290a5d77", "290a5d77", 209)
    },
    {
      id: "rw-tr-1c6e1d55",
      sourceQuestionId: "1c6e1d55",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Historically, most conductors of major orchestras and opera companies have been European men, but a new, more diverse generation of artists is stepping up to the podium. Mexico’s Alondra de la Parra took over as conductor for the Queensland Symphony Orchestra in 2017, ______ and Colombia’s Lina Gonzalez-Granados did the same for the Los Angeles Opera in 2022.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in addition,", "lastly,", "granted,", "for instance,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “For instance” logically signals that the details in this sentence—that Mexican conductor Alondra de la Parra and Colombian conductor Lina Gonzalez-Granados took new conducting positions—are examples supporting the previous claim about the new generation of artists."),
      distractors: {
        A: L("Choice A is incorrect because “in addition” illogically signals that the details in this sentence about de la Parra and Gonzalez-Granados are merely additional facts related to the previous claim about the new generation of artists. Instead, they are examples supporting that claim."),
        B: L("Choice B is incorrect because “lastly” illogically signals that the details in this sentence about de la Parra and Gonzalez-Granados are the last step or a concluding summary of the previous claim about the new generation of artists. Instead, they are examples supporting that claim."),
        C: L("Choice C is incorrect because “granted” illogically signals that the details in this sentence about de la Parra and Gonzalez-Granados are exceptions to the previous claim about the new generation of artists. Instead, they are examples supporting that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1c6e1d55", "1c6e1d55", 212)
    },
    {
      id: "rw-tr-991e849a",
      sourceQuestionId: "991e849a",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Mary Anning (1799–1847), one of the world’s first paleontologists, lived in Lyme Regis along the Jurassic Coast of southern England. ______ she made several important discoveries, including some of the first documented ichthyosaur and plesiosaur skeletons. Indeed, Anning’s groundbreaking work secured the Jurassic Coast a place in the annals of paleontology.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "Likewise,", "There,", "Later,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “There” logically signals where the events described in this sentence (Anning making several important discoveries) occurred: in Lyme Regis along the Jurassic Coast of southern England, which the previous sentence indicates is where she lived."),
      distractors: {
        A: L("Choice A is incorrect because “for example” illogically signals that the information in this sentence about Anning’s discoveries exemplifies the previous information about her living in Lyme Regis. Instead, the sentence refers to the discoveries Anning made while living there—as the information in the third sentence makes clear."),
        B: L("Choice B is incorrect because “likewise” illogically signals that the information about Anning’s discoveries is similar to the previous information about her living in Lyme Regis. Instead, the sentence refers to the discoveries Anning made while living there—as the information in the third sentence makes clear."),
        D: L("Choice D is incorrect because “later” illogically signals that the information in this sentence about Anning’s discoveries occurred after she lived in Lyme Regis, as described in the previous sentence. Instead, the sentence refers to the discoveries Anning made while living there—as the information in the third sentence makes clear.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-991e849a", "991e849a", 213)
    },
    {
      id: "rw-tr-8622320e",
      sourceQuestionId: "8622320e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Earth’s auroras—colorful displays of light seen above the northern and southern poles—result, broadly speaking, from the Sun’s activity. ______ the Sun releases charged particles that are captured by Earth’s magnetic field and channeled toward the poles. These particles then collide with atoms in the atmosphere, causing the atoms to emit auroral light.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Specifically,", "Similarly,", "Nevertheless,", "Hence,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Specifically” logically signals that the information in this sentence—that the Sun releases charged particles that later collide with atoms, resulting in auroral light—provides specific, precise details about how auroras result from the Sun’s activity."),
      distractors: {
        B: L("Choice B is incorrect because “similarly” illogically signals that the information in this sentence is similar to the general information about auroras in the previous sentence. Instead, this sentence provides specific, precise details about how auroras form."),
        C: L("Choice C is incorrect because “nevertheless” illogically signals that the information in this sentence is despite the general information about auroras in the previous sentence. Instead, this sentence provides specific, precise details about how auroras form."),
        D: L("Choice D is incorrect because “hence” illogically signals that the information in this sentence is a result of the general information about auroras in the previous sentence. Instead, this sentence provides specific, precise details about how auroras form.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-8622320e", "8622320e", 214)
    },
    {
      id: "rw-tr-0d088ae0",
      sourceQuestionId: "0d088ae0",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Observing that a fire in a closed container soon went out, leading eighteenth-century scientists did not conclude that fresh air (specifically, oxygen) is necessary for combustion; instead, many theorized that the container’s air had become saturated with a substance called phlogiston. ______ when Joseph Priestley first isolated oxygen gas in 1774, he termed it “dephlogisticated air. ”</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "For this reason,", "Alternatively,", "Nevertheless,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"For this reason\" logically signals that the reason Joseph Priestley termed oxygen \"dephlogisticated air\" was that he accepted the theory mentioned in the previous sentence—that the presence of phlogiston, rather than the absence of oxygen, causes fire in a closed container to go out."),
      distractors: {
        A: L("Choice A is incorrect because \"in other words\" illogically signals that the information about Priestley terming oxygen \"dephlogisticated air\" is a restatement of the previous theory concerning phlogiston. Instead, Priestley chose the term as a result of this theory."),
        C: L("Choice C is incorrect because \"alternatively\" illogically signals that Priestley termed oxygen \"dephlogisticated air\" as an alternative to the previous theory concerning phlogiston. Instead, Priestley chose the term as a result of this theory."),
        D: L("Choice D is incorrect because \"nevertheless\" illogically signals that Priestley termed oxygen \"dephlogisticated air\" despite the previous theory concerning phlogiston. Instead, Priestley chose the term as a result of this theory.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0d088ae0", "0d088ae0", 220)
    },
    {
      id: "rw-tr-249508d9",
      sourceQuestionId: "249508d9",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>With his room-sized installation Unicorn/My Private Sky, Norwegian artist Børre Sæthre succeeds in creating a whimsical yet perplexing experience. ______ when visitors set foot inside the fantastically blue room and encounter the life-sized stuffed unicorn preening at the far end of it, they are both dazzled and confused—as if stepping into a strange and enchanting new world.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Second,", "Instead,", "Indeed,", "Nevertheless,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Indeed\" logically signals that the description of the art installation in this sentence—its blue room and preening unicorn that leave visitors \"dazzled and confused\"—offers additional emphasis in support of the previous sentence’s claim about the installation’s \"whimsical yet perplexing experience. \""),
      distractors: {
        A: L("Choice A is incorrect because \"second\" illogically signals that the description in this sentence is a second, separate claim from the previous sentence’s claim about the installation’s \"whimsical yet perplexing experience. \" Instead, the specific details describing the installation emphasize and support the previous claim."),
        B: L("Choice B is incorrect because \"instead\" illogically signals that the description in this sentence is an alternative to the previous sentence’s claim about the installation’s \"whimsical yet perplexing experience. \" Rather, the specific details describing the installation emphasize and support that claim."),
        D: L("Choice D is incorrect because \"nevertheless\" illogically signals that the description in this sentence is true despite the previous sentence’s claim about the installation’s \"whimsical yet perplexing experience. \" Instead, the specific details describing the installation emphasize and support that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-249508d9", "249508d9", 222)
    },
    {
      id: "rw-tr-d3725911",
      sourceQuestionId: "d3725911",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the search for extraterrestrial life, astrobiologists Stuart Bartlett and Michael L. Wong propose that scientists avoid using the term “life. ” ______ researchers should use another word: “lyfe. ” This new term, they argue, could be used to draw distinctions between the known characteristics of life on Earth and the potentially differing characteristics of lyfe on other planets.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Previously,", "Regardless,", "There,", "Instead,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Instead\" logically signals that the idea in this sentence—that researchers should use the word \"lyfe\"—is an alternative to the idea mentioned in the previous sentence (scientists’ use of the word \"life\")."),
      distractors: {
        A: L("Choice A is incorrect because \"previously\" illogically signals that the idea in this sentence occurs before the action in the first sentence. Instead, the use of \"lyfe\" is an alternative to the previously mentioned use of \"life. \""),
        B: L("Choice B is incorrect because \"regardless\" illogically signals that the idea in this sentence is true despite the information in the first sentence. Instead, the use of \"lyfe\" is an alternative to the previously mentioned use of \"life. \""),
        C: L("Choice C is incorrect because \"there\" illogically signals that the idea in this sentence occurs in a place mentioned in the previous sentence. Instead, the use of \"lyfe\" is an alternative to the previously mentioned use of \"life. \"")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-d3725911", "d3725911", 224)
    },
    {
      id: "rw-tr-9f1a0d91",
      sourceQuestionId: "9f1a0d91",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>“Tulip mania”—the rapid rise and sudden fall of the price of tulip bulbs in seventeenth-century Amsterdam—is often cited as an example of the perils of rampant market speculation. However, recent research has demonstrated that the episode was neither as frenzied nor as disastrous as has been thought. The popular myth surrounding it, ______ should be regarded with some skepticism.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["for example,", "by contrast,", "nevertheless,", "therefore,"],
      answer: "D",
      explanation: L("Choice D is the best answer. This sentence is arguing that new evidence contradicting popular beliefs about “tulip mania” should cast doubt on those beliefs. “Therefore” is a cause-and-effect transition, which fits perfectly in this context."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses an exemplification transition, which doesn’t make sense here. Skepticism about the popular beliefs is not an example of recent evidence contradicting those beliefs—rather, skepticism is an effect of that recent evidence."),
        B: L("Choice B is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous sentence. Instead, it connects a cause from the previous sentence (new evidence that tulip mania was not as disastrous as thought) to an effect (that we should look with skepticism upon the myth about its disastrousness)."),
        C: L("Choice C is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous sentence. Instead, it connects a cause from the previous sentence (new evidence that tulip mania was not as disastrous as thought) to an effect (that we should look with skepticism upon the myth about its disastrousness).")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9f1a0d91", "9f1a0d91", 225)
    },
    {
      id: "rw-tr-e225cf02",
      sourceQuestionId: "e225cf02",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A team of ornithologists documented patterns of conspecific brood parasitism among wood ducks (Aix sponsa) in California. The researchers observed several female wood ducks visiting dozens of nesting sites and laying eggs to be incubated by other nesting A. sponsa. Subject 7F64B, ______ visited a select few nesting sites before laying and incubating her eggs herself.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in particular,", "alternatively,", "for example,", "similarly,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Alternatively” logically signals that the information in this sentence—that Subject 7F64B incubated her own eggs— describes a contrasting alternative to the brood parasitism behavior described in the previous sentence, in which female wood ducks laid eggs to be incubated by other nesting ducks."),
      distractors: {
        A: L("Choice A is incorrect because “in particular” illogically signals that Subject 7F64B’s behavior provides a specific, focused detail about, or example of, the brood parasitism behavior described in the previous sentence. Instead, Subject 7F64B’s behavior represents a contrasting alternative to that brood parasitism."),
        C: L("Choice C is incorrect because “for example” illogically signals that Subject 7F64B’s behavior provides a specific example of the brood parasitism behavior described in the previous sentence. Instead, Subject 7F64B’s behavior represents a contrasting alternative to that brood parasitism."),
        D: L("Choice D is incorrect because “similarly” illogically signals that Subject 7F64B’s behavior is similar to the brood parasitism behavior described in the previous sentence. Instead, Subject 7F64B’s behavior represents a contrasting alternative to that brood parasitism.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e225cf02", "e225cf02", 226)
    },
    {
      id: "rw-tr-a2bff07e",
      sourceQuestionId: "a2bff07e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Economist Elinor Ostrom’s studies of communities around the world have empirically demonstrated that common pool resources, such as grazing lands, can be sustainably managed by the people who use them (rather than through private entities or centralized governments). ______ Ostrom’s work is a repudiation of the “tragedy of the commons, ” the view that individuals will inevitably overexploit a finite shared resource if given unfettered access to it.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["By contrast,", "For example,", "That said,", "As such,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"As such\" correctly signals that the claim in this sentence—that Ostrom’s work is a repudiation of the \"tragedy of the commons\" view—follows logically from the information about Ostrom’s studies in the previous sentence. According to that sentence, Ostrom’s studies demonstrate that common pool resources can in fact be sustainably managed by the people who use them."),
      distractors: {
        A: L("Choice A is incorrect because \"by contrast\" illogically signals that the information in this sentence contrasts with the information about Ostrom’s studies in the previous sentence. Instead, the claim that Ostrom’s work repudiates the \"tragedy of the commons\" view follows logically from that information."),
        B: L("Choice B is incorrect because \"for example\" illogically signals that the claim in this sentence exemplifies the information about Ostrom’s studies in the previous sentence. Instead, the claim that Ostrom’s work repudiates the \"tragedy of the commons\" view follows logically from that information."),
        C: L("Choice C is incorrect because \"that said\" illogically signals that the information in this sentence is an exception or caveat to the information about Ostrom’s studies in the previous sentence. Instead, the claim that Ostrom’s work repudiates the \"tragedy of the commons\" view follows logically from that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a2bff07e", "a2bff07e", 227)
    },
    {
      id: "rw-tr-17e49403",
      sourceQuestionId: "17e49403",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>When, in the 1800s, geologists first realized that much of Earth had once been covered by great sheets of ice, some theorized that the phenomenon was cyclical, occurring at regular intervals. Each Ice Age is so destructive, though, that it largely erases the geological evidence of its predecessor. ______ geologists were unable to confirm the theory of cyclical Ice Ages until the 1960s.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Hence,", "Moreover,", "Nevertheless,", "Next,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Hence” logically signals that the information in this sentence—that geologists couldn’t confirm the theory of cyclical Ice Ages until the 1960s—is a consequence of the previous information about the destructiveness of each Ice Age and the erasure of necessary geological evidence."),
      distractors: {
        B: L("Choice B is incorrect because “moreover” illogically signals that the information in this sentence is merely additional to the previous information about the destructiveness of each Ice Age. Instead, the sentence identifies a specific consequence of that information."),
        C: L("Choice C is incorrect because “nevertheless” illogically signals that the information in this sentence is true despite the previous information about the destructiveness of each Ice Age. Instead, the sentence identifies a specific consequence of that information."),
        D: L("Choice D is incorrect because “next” illogically signals that the information in this sentence is the next step in a process. Instead, the sentence identifies a specific consequence of the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-17e49403", "17e49403", 230)
    },
    {
      id: "rw-tr-edf30612",
      sourceQuestionId: "edf30612",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In the late twentieth century, scholars directed much discussion toward issues of spatiality. Adherents to quantitative analytical approaches delineated space with the use of GIS spatial technologies; ______ cultural geographer Doreen Massey defined space as the product of “an ever-shifting social geometry of power and signification, ” focusing instead on socio-political forces.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["for example,", "by contrast,", "as such,", "likewise,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"By contrast\" logically signals that the information about how Massey defined space—by focusing on socio-political forces—contrasts with the information in the previous clause, which discusses quantitative analytical approaches and spatial technologies."),
      distractors: {
        A: L("Choice A is incorrect because \"for example\" illogically signals that the information that follows in the sentence exemplifies the quantitative analytical approaches to defining space described previously. Instead, the information about Massey’s socio-political focus presents a contrasting approach."),
        C: L("Choice C is incorrect because \"as such\" illogically signals that the information that follows in the sentence is a direct result or logical consequence of the quantitative analytical approaches to defining space described previously. Instead, the information about Massey’s socio-political focus presents a contrasting approach."),
        D: L("Choice D is incorrect because \"likewise\" illogically signals that the information that follows in the sentence is similar to the quantitative analytical approaches to defining space described previously. Instead, the information about Massey’s socio-political focus presents a contrasting approach.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-edf30612", "edf30612", 236)
    },
    {
      id: "rw-tr-0a9b36f9",
      sourceQuestionId: "0a9b36f9",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Introduced in 2001, Luis von Ahn’s reCAPTCHA security software distinguished human users from autonomous spamming programs, or bots, by prompting a website’s visitors to read distorted text and type it in a box. Over time, though, bots became capable of deciphering distorted text. ______ a version of reCAPTCHA that could detect humans by analyzing cursor movements was released in 2014.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "In other words,", "In response,", "Indeed,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “In response” logically signals that the information in this sentence—that a new version of reCAPTCHA capable of analyzing cursor movements was released in 2014—was a direct response to the previously described issue of bots becoming capable of deciphering distorted text."),
      distractors: {
        A: L("Choice A is incorrect because “for example” illogically signals that the information in this sentence exemplifies the previously described issue of bots deciphering distorted text. Instead, the release of the new version of reCAPTCHA was a direct response to that issue."),
        B: L("Choice B is incorrect because “in other words” illogically signals that the information in this sentence is a paraphrase or restatement of the previously described issue of bots deciphering distorted text. Instead, the release of the new version of reCAPTCHA was a direct response to that issue."),
        D: L("Choice D is incorrect because “indeed” illogically signals that the information in this sentence offers additional emphasis in support of the previously described issue of bots deciphering distorted text. Instead, the release of the new version of reCAPTCHA was a direct response to that issue.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0a9b36f9", "0a9b36f9", 238)
    },
    {
      id: "rw-tr-974b5a8c",
      sourceQuestionId: "974b5a8c",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Madison is a type of line dance that involves neat rows of dancers performing a repeated sequence of steps in unison. ______ many other dances are also defined by order, repetition, and synchronicity, but the Madison is distinguished by its extreme uniformity; when an auditorium full of dancers performs the Madison, one almost gets the impression of a military march.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "Of course,", "Specifically,", "Moreover,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Of course\" logically signals that the information that follows—about many dances being \"defined by order, repetition, and synchronicity\"—acknowledges an obvious similarity between these dances and the previous description of the Madison. The sentence then goes on to emphasize a distinguishing feature of the Madison."),
      distractors: {
        A: L("Choice A is incorrect because \"however\" illogically signals that the information that follows contrasts with the previous description of the Madison. Instead, the information about many dances’ features acknowledges an obvious similarity between these dances and the Madison. The sentence then goes on to emphasize a distinguishing feature of the Madison."),
        C: L("Choice C is incorrect because \"specifically\" illogically signals that the information that follows specifies or elaborates on the previous description of the Madison. Instead, the information about many dances’ features acknowledges an obvious similarity between these dances and the Madison. The sentence then goes on to emphasize a distinguishing feature of the Madison."),
        D: L("Choice D is incorrect because \"moreover\" illogically signals that the information that follows adds to or expands on the previous description of the Madison. Instead, the information about many dances’ features acknowledges an obvious similarity between these dances and the Madison. The sentence then goes on to emphasize a distinguishing feature of the Madison.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-974b5a8c", "974b5a8c", 239)
    },
    {
      id: "rw-tr-b7571c0a",
      sourceQuestionId: "b7571c0a",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Practical movie effects, such as the use of actual locations in a film, provide a more realistic visual experience than computer-generated imagery (CGI) does, but giving audiences the “real thing” can be prohibitively expensive. ______ many filmmakers use a blended approach, employing practical effects whenever possible and CGI elements as necessary to control costs.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "For this reason,", "Furthermore,", "In other words,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The first sentence tells us that practical effects are more realistic but also more expensive than CGI. The second sentence tells us that many filmmakers use both kinds of effects, balancing realism with cost. To connect these ideas, we need a cause-and-effect transition, like “therefore. ” “For this reason” has the same meaning as “therefore. ” ."),
      distractors: {
        A: L("Choice A is incorrect. This isn’t a logical transition. The first sentence tells us that practical effects are more realistic but also more expensive than CGI. The second sentence tells us that many filmmakers use both kinds of effects, balancing realism with cost. To connect these ideas, we need a cause-and-effect transition, like “therefore. ” “Similarly” doesn’t show cause and effect: it shows the addition of another agreeing idea."),
        C: L("Choice C is incorrect. This isn’t a logical transition. The first sentence tells us that practical effects are more realistic but also more expensive than CGI. The second sentence tells us that many filmmakers use both kinds of effects, balancing realism with cost. To connect these ideas, we need a cause-and-effect transition, like “therefore. ” “Furthermore” doesn’t show cause and effect: it shows the addition of another agreeing idea."),
        D: L("Choice D is incorrect. This isn’t a logical transition. The first sentence tells us that practical effects are more realistic but also more expensive than CGI. The second sentence tells us that many filmmakers use both kinds of effects, balancing realism with cost. To connect these ideas, we need a cause-and-effect transition, like “therefore. ” “In other words” doesn’t show cause and effect: it shows a restatement of the same idea in different words.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b7571c0a", "b7571c0a", 241)
    },
    {
      id: "rw-tr-1e31470f",
      sourceQuestionId: "1e31470f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>To perform a quad axel, a figure skater must leap into the air and complete four and a half rotations before landing, an extreme feat. ______ in 2022, when 17-year-old Ilia Malinin landed the first quad axel—considered the most difficult quad jump—in a high-level competition, the audience was left awestruck.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Moreover,", "Fittingly,", "Next,", "However,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Fittingly\" logically signals that the information in this sentence—that the audience was amazed when Malinin landed the first quad axel—describes a suitable or appropriate reaction to the completion of this extremely difficult jump."),
      distractors: {
        A: L("Choice A is incorrect. \"Moreover\" illogically signals that the information in this sentence merely adds to the previous information about the difficulty of completing a quad axel. Instead, the audience’s amazement is a suitable or appropriate reaction to this accomplishment."),
        C: L("Choice C is incorrect. \"Next\" illogically signals that the information in this sentence is simply the next step in a process. Instead, the audience’s amazement is a suitable or appropriate reaction to the accomplishment."),
        D: L("Choice D is incorrect. \"However\" illogically signals that the information in this sentence is in contrast or an exception to the difficulty of completing a quad axel. Instead, the audience’s amazement is a suitable or appropriate reaction to this accomplishment.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1e31470f", "1e31470f", 242)
    },
    {
      id: "rw-tr-1ccfcea4",
      sourceQuestionId: "1ccfcea4",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The French directors Colas Koola and Vivien Mermet-Guyenet (known as Koola and Viv) founded the video game studio BlueTwelve. They also love cats. ______ they created an award-winning cat video game, Stray (2021), that lets the player explore a dystopian city from the perspective of a clever orange house cat.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Intermittently,", "On the other hand,", "In fact,", "Nevertheless,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"In fact\" logically signals that the information in this sentence about the creation of the video game offers additional emphasis in support of the previous claim that video game studio founders Koola and Viv love cats."),
      distractors: {
        A: L("Choice A is incorrect because \"intermittently\" illogically signals that the information in this sentence occurs sporadically or in intervals. Instead, the creation of the video game offers additional emphasis in support of the previous claim about Koola and Viv."),
        B: L("Choice B is incorrect because \"on the other hand\" illogically signals that the information in this sentence contrasts with the previous claim about Koola and Viv. Instead, the creation of the video game offers additional emphasis in support of that claim."),
        D: L("Choice D is incorrect because \"nevertheless\" illogically signals that the information in this sentence is true despite the previous claim that Koola and Viv love cats. Instead, the creation of the video game offers additional emphasis in support of that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1ccfcea4", "1ccfcea4", 243)
    },
    {
      id: "rw-tr-d54e16ee",
      sourceQuestionId: "d54e16ee",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Originally coined by economist Joan Robinson to refer to markets with multiple sellers of a product but only one buyer, the term “monopsony” can also refer to markets where demand for labor is limited. In a product monopsony, the single buyer can force sellers to lower their prices. ______ in a labor monopsony, employers can force workers to accept lower wages.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Earlier,", "Instead,", "Similarly,", "In particular,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Similarly” logically signals that the information in this sentence about a labor monopsony is similar to the information in the previous sentence about a product monopsony. In both types of markets, one party (an employer or a buyer) has the power to force another party (a worker or seller) to accept less money (for labor or products)."),
      distractors: {
        A: L("Choice A is incorrect because “earlier” illogically signals that the information in this sentence about a labor monopsony occurs earlier (in a chronological sequence) than the information about a product monopsony. Instead, it is similar to the information about a product monopsony."),
        B: L("Choice B is incorrect because “instead” illogically signals that the information in this sentence about a labor monopsony is an alternative to the previous information about a product monopsony. Instead, it is similar to the information about a product monopsony."),
        D: L("Choice D is incorrect because “in particular” illogically signals that the information in this sentence about a labor monopsony provides specific details elaborating on the previous information about a product monopsony. Instead, it is similar to the information about a product monopsony.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-d54e16ee", "d54e16ee", 245)
    },
    {
      id: "rw-tr-47e238be",
      sourceQuestionId: "47e238be",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Seismologists Kaiqing Yuan and Barbara Romanowicz have proposed that the magma fueling Iceland’s more than 30 active volcano systems emerges from deep within Earth. The great depths involved—nearly 3,000 km—mark Iceland’s volcanoes as extreme outliers; ______ many of Earth’s volcanoes are fed by shallow pockets of magma found less than 15 km below the surface.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["indeed,", "nevertheless,", "in addition,", "consequently,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The second part of the sentence says that many volcanoes use shallow pockets of magma. This is an elaboration of the same underlying idea from the first part of the sentence, which says that the super deep magma of Icelandic volcanoes’ makes them outliers. “Indeed” is a transition used for elaborating on the same idea, so it fits the context perfectly."),
      distractors: {
        B: L("Choice B is incorrect. This choice uses a disagreement transition. But these two parts of the sentence agree with each other, so “nevertheless” doesn’t make sense."),
        C: L("Choice C is incorrect. This choice uses a transition that indicates the addition of a new idea. But the second part of the sentence isn’t adding a new idea: it’s elaborating on the same idea expressed in the first part of the sentence."),
        D: L("Choice D is incorrect. This choice uses a cause-and-effect transition, which doesn’t make sense here. The fact that Iceland’s deep-magma volcanoes are outliers doesn’t cause many other volcanoes to get fed by shallow pockets of magma.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-47e238be", "47e238be", 247)
    },
    {
      id: "rw-tr-072666a3",
      sourceQuestionId: "072666a3",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The tiny transistors that control the flow of electricity in modern devices may one day be made of wood. Researchers in Switzerland have found a way to use heat and chemicals to widen the grooves in dry pieces of balsa wood. ______ these grooves become wide enough that electrical conductors can be passed through them.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "Previously,", "In contrast,", "As a result,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “As a result” logically signals that the information in this sentence—that the widened grooves in balsa wood can accommodate electrical conductors—is a direct consequence of the researchers’ method described in the previous sentence (using heat and chemicals to widen the grooves)."),
      distractors: {
        A: L("Choice A is incorrect because “for example” illogically signals that this sentence provides an example of the researchers’ method described in the previous sentence. Instead, the sentence indicates a consequence of that method."),
        B: L("Choice B is incorrect because “previously” illogically signals that this sentence describes an event that occurred before the researchers’ development of the method described in the previous sentence. Instead, the sentence indicates a consequence of that method."),
        C: L("Choice C is incorrect because “in contrast” illogically signals that the information in this sentence contrasts with the previous sentence’s description of the researchers’ method. Instead, the sentence indicates a consequence of that method.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-072666a3", "072666a3", 249)
    },
    {
      id: "rw-tr-a064955f",
      sourceQuestionId: "a064955f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In most deer species, males grow antlers, and females don’t. ______ reindeer are different. They are the only deer species in which the females grow antlers, too.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "Next,", "However,", "Thus,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"However\" logically signals that the claim about reindeer in this sentence contrasts with the information about most deer species in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because \"similarly\" illogically signals that the claim in this sentence is similar to the previous information about most deer species. Instead, it contrasts with that information."),
        B: L("Choice B is incorrect because \"next\" illogically signals that the claim about reindeer in this sentence is the next step in a process. Instead, it contrasts with the previous information about most deer species."),
        D: L("Choice D is incorrect because \"thus\" illogically signals that the claim in this sentence results from the previous information about most deer species. Instead, it contrasts with that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a064955f", "a064955f", 251)
    },
    {
      id: "rw-tr-dd087f31",
      sourceQuestionId: "dd087f31",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Chimamanda Ngozi Adichie’s 2013 novel Americanah chronicles the divergent experiences of Ifemelu and Obinze, a young Nigerian couple, after high school. Ifemelu moves to the United States to attend a prestigious university. ______ Obinze travels to London, hoping to start a career there. However, frustrated with the lack of opportunities, he soon returns to Nigeria.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Meanwhile,", "Nevertheless,", "Secondly,", "In fact,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Meanwhile” logically signals that the action described in this sentence (Obinze’s move to London to pursue a career) is simultaneous with the action described in the previous sentence (Ifemelu’s move to the United States). The first sentence establishes that the actions take place around the same time, referring to the characters’ “divergent experiences” following high school."),
      distractors: {
        B: L("Choice B is incorrect because “nevertheless” illogically signals that the information in this sentence about Obinze’s move to London is true despite the previous information about Ifemelu’s move to the United States. Instead, as the first sentence establishes, Obinze’s move and Ifemelu’s move are related, parallel experiences that occur around the same time."),
        C: L("Choice C is incorrect because “secondly” illogically signals that the information in this sentence is a second point or reason separate from the previous information about Ifemelu’s move to the United States. Instead, as the first sentence establishes, Obinze’s move and Ifemelu’s move are related, parallel experiences that occur around the same time."),
        D: L("Choice D is incorrect because “in fact” illogically signals that the information in this sentence emphasizes, modifies, or contradicts the previous information about Ifemelu’s move to the United States. Instead, as the first sentence establishes, Obinze’s move and Ifemelu’s move are related, parallel experiences that occur around the same time.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-dd087f31", "dd087f31", 253)
    },
    {
      id: "rw-tr-6d883838",
      sourceQuestionId: "6d883838",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>According to Duverger’s law, countries with single-ballot majoritarian elections for single-member districts tend to polarize into two-party systems, wherein dueling political parties consistently dominate the political system. ______ countries with proportional-representation electoral systems tend to support multi-partyism, under which power gets distributed among many political parties.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Subsequently,", "Conversely,", "For instance,", "In other words,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Conversely\" logically signals that the information in this sentence—that countries with proportional-representation electoral systems tend toward multi-partyism—contrasts with the previous information about countries with single-ballot majoritarian elections, which tend to have two-party systems."),
      distractors: {
        A: L("Choice A is incorrect because \"subsequently\" illogically signals that the information in this sentence about countries with proportional-representation electoral systems occurs later in a chronological sequence of events than the information in the previous sentence. Instead, it contrasts with the previous information."),
        C: L("Choice C is incorrect because \"for instance\" illogically signals that the information in this sentence about countries with proportional-representation electoral systems is an example supporting the previous statement about countries with single-ballot majoritarian elections. Instead, it contrasts with the previous statement."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the information in this sentence about countries with proportional-representation electoral systems is a paraphrase or restatement of the previous information about countries with single-ballot majoritarian elections. Instead, it contrasts with the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-6d883838", "6d883838", 254)
    },
    {
      id: "rw-tr-e965fd73",
      sourceQuestionId: "e965fd73",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Preston Singletary is a Tlingit glass artist who often collaborates with other artists. ______ he has worked with Tewa pottery artist Jody Naranjo several times. Together, Singletary and Naranjo have created pottery-inspired glass pieces such as Sunset Stampede and Kiva Steps.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In conclusion,", "For example,", "However,", "In comparison,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"For example\" logically signals that this sentence—noting Singletary’s work with Jody Naranjo—provides an example supporting the previous point about Singletary’s collaborations with other artists."),
      distractors: {
        A: L("Choice A is incorrect because \"in conclusion\" illogically signals that the information in this sentence concludes or summarizes the previous point about Singletary’s collaborations with other artists. Instead, it provides an example in support of that point."),
        C: L("Choice C is incorrect because \"however\" illogically signals that the information in this sentence contrasts with the previous point about Singletary’s collaborations with other artists. Instead, it provides an example in support of that point."),
        D: L("Choice D is incorrect because \"in comparison\" illogically signals that the information in this sentence is being compared to the previous point about Singletary’s collaborations with other artists. Instead, it provides an example in support of that point.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e965fd73", "e965fd73", 255)
    },
    {
      id: "rw-tr-5c58cec0",
      sourceQuestionId: "5c58cec0",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>To guarantee the validity of experimental results, scientists rely on precise, unchanging standards of measurement. ______ metrologists (scientists who study measurement) developed the SI, or International System of Units. The SI’s units of measurement are based on unchanging values in nature, such as the mass of an electron or the speed of light.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In contrast,", "Regardless,", "In addition,", "For this reason,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"For this reason\" logically signals that the information that follows—that metrologists developed the SI based on unchanging values in nature—is a result of the previous claim that scientists rely on precise, unchanging standards of measurement to guarantee the validity of experimental results."),
      distractors: {
        A: L("Choice A is incorrect because \"in contrast\" illogically signals that the information that follows contrasts with the previous claim that scientists rely on precise, unchanging standards of measurement. Instead, the information that metrologists developed the SI based on unchanging values in nature is a result of that claim."),
        B: L("Choice B is incorrect because \"regardless\" illogically signals that the information that follows is true despite the previous claim that scientists rely on precise, unchanging standards of measure. Instead, the information that metrologists developed the SI based on unchanging values in nature is a result of that claim."),
        C: L("Choice C is incorrect because \"in addition\" illogically signals that the information that follows is merely an additional fact related to the previous claim that scientists rely on precise, unchanging standards of measurement. Instead, the information that metrologists developed the SI based on unchanging values in nature is a result of that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-5c58cec0", "5c58cec0", 256)
    },
    {
      id: "rw-tr-b4123d99",
      sourceQuestionId: "b4123d99",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>For millennia, acorns were a staple food for the Tongva people, the Indigenous inhabitants of what is now the Los Angeles basin. Raw acorns have an extremely bitter taste, though, due to their high tannin levels. ______ it was necessary to process the acorns—which involved grinding, rinsing, and shaping the nuts into a dough—before eating them.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Therefore,", "Similarly,", "Afterward,", "However,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Therefore” logically signals that the information in this sentence—that it was necessary to process the acorns before eating them—is a result or consequence of the previous information about raw acorns having an extremely bitter taste due to high tannin levels."),
      distractors: {
        B: L("Choice B is incorrect because “similarly” illogically signals that the need to process acorns is similar to the previous information about their bitter taste. Instead, the need to process the acorns is a result or consequence of their bitter taste."),
        C: L("Choice C is incorrect because “afterward” illogically signals that the need to process acorns is an event that occurred later in a chronological sequence than the acorns’ bitter taste. Instead, the need to process the acorns is a result or consequence of their bitter taste."),
        D: L("Choice D is incorrect because “however” illogically signals that the need to process acorns contrasts with the previous information about their bitter taste. Instead, the need to process the acorns is a result or consequence of their bitter taste.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b4123d99", "b4123d99", 260)
    },
    {
      id: "rw-tr-0c13dea9",
      sourceQuestionId: "0c13dea9",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The chemical trimethylamine N-oxide not only gives fish their fishy smell but also protects them from crushing hydrostatic pressure in deep waters. Trimethylamine N-oxide strengthens the bonds between water molecules in a fish’s body. ______ these water molecules maintain their linked structure at extreme depths, thus preventing pressure-related damage.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Nevertheless,", "As a result,", "However,", "For instance,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “As a result” indicates that water molecules maintaining their linked structure at high pressures is caused by the strengthening of these water molecules by trimethylamine N-oxide. So the transition “as a result” fits the context perfectly."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous one—rather, it’s describing an effect of the phenomenon described in the previous sentence."),
        C: L("Choice C is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous one; it actually expands on the previous sentence by describing an effect of the strengthened molecules."),
        D: L("Choice D is incorrect. This choice uses an exemplification transition, which doesn’t make sense here. The second sentence doesn’t provide an example or instance of the idea in the previous sentence. Instead, it explores the effects of the previous idea in more depth.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0c13dea9", "0c13dea9", 262)
    },
    {
      id: "rw-tr-4fde4454",
      sourceQuestionId: "4fde4454",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>One poll taken after the first 1960 presidential debate suggested that John Kennedy lost badly: only 21 percent of those who listened on the radio rated him the winner. ______ the debate was ultimately considered a victory for the telegenic young senator, who rated higher than his opponent, Vice President Richard Nixon, among those watching on the new medium of television.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "Therefore,", "Likewise,", "Nevertheless,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Nevertheless” logically signals that the claim in this sentence—that the telegenic Kennedy was ultimately considered the winner of the debate—is true despite the previous information about the poll of radio listeners."),
      distractors: {
        A: L("Choice A is incorrect because “in other words” illogically signals that the claim in this sentence is a paraphrase of the previous information about the poll of radio listeners. Instead, Kennedy was ultimately considered the winner despite what that poll suggested about his performance."),
        B: L("Choice B is incorrect because “therefore” illogically signals that the claim in this sentence is a result of the previous information about the poll of radio listeners. Instead, Kennedy was ultimately considered the winner despite what that poll suggested about his performance."),
        C: L("Choice C is incorrect because “likewise” illogically signals that the claim in this sentence is similar to the previous information about the poll of radio listeners. Instead, Kennedy was ultimately considered the winner despite what that poll suggested about his performance.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-4fde4454", "4fde4454", 263)
    },
    {
      id: "rw-tr-1872cd6d",
      sourceQuestionId: "1872cd6d",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When printing paper money for the colony of Pennsylvania in the 1730s, Benjamin Franklin—then a Philadelphia shop owner—took steps to combat the circulation of counterfeit notes, such as weaving blue threads and muscovite (a reflective mineral) into the paper he used. ______ he stamped the notes with detailed imprints of sage leaves that proved difficult for forgers to replicate.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Specifically,", "That said,", "For example,", "Moreover,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Moreover\" logically signals that the information in this sentence—that Franklin stamped imprints on paper money to make forgery more difficult—adds to the previous information by describing Franklin’s other strategy for combatting forgers: weaving materials into the paper used for printing money."),
      distractors: {
        A: L("Choice A is incorrect because \"specifically\" illogically signals that the information in this sentence provides specific, precise details elaborating on the previous information about Franklin’s other strategy for combatting forgers (weaving materials into paper). Instead, this information about stamping imprints on money adds new information."),
        B: L("Choice B is incorrect because \"that said\" illogically signals that the information in this sentence is an exception to the previous information about Franklin’s other strategy for combatting forgers (weaving materials into paper). Instead, this information about stamping imprints on money adds new information."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that the information in this sentence serves as an example of the previous information about Franklin’s other strategy for combatting forgers (weaving materials into paper). Instead, this information about stamping imprints on money adds new information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1872cd6d", "1872cd6d", 264)
    },
    {
      id: "rw-tr-0fd4df40",
      sourceQuestionId: "0fd4df40",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The Alaska Native Language Archive (ANLA) is known for its impressive audio collection. ______ the ANLA has more than 5,000 audio recordings of Native Alaskan languages dating as far back as 1943.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In fact,", "After,", "Regardless,", "Instead,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"In fact\" logically signals that the information in this sentence about the large number of recordings in ANLA’s collection emphasizes and supports the previous claim that ANLA is known for its impressive audio collection."),
      distractors: {
        B: L("Choice B is incorrect because \"after\" illogically signals that the information in this sentence occurs later in a sequence of events than the previous claim about ANLA’s impressive audio collection. Instead, the information about the large number of recordings emphasizes and supports that claim."),
        C: L("Choice C is incorrect because \"regardless\" illogically signals that the information in this sentence is true despite the previous claim about ANLA’s impressive audio collection. Instead, the information about the large number of recordings emphasizes and supports that claim."),
        D: L("Choice D is incorrect because \"instead\" illogically signals that the information in this sentence presents an alternative to the previous claim about ANLA’s impressive audio collection. Rather, the information about the large number of recordings emphasizes and supports that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0fd4df40", "0fd4df40", 269)
    },
    {
      id: "rw-tr-e268c452",
      sourceQuestionId: "e268c452",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The traditional process of Turkish paper marbling (ebru) generally proceeds like this: First, the artisan fills a shallow tray with a water bath solution. Next, the artisan adds inks or paints to the solution, which can then be manipulated into intricate designs. ______ the artisan slips paper in and out of the liquid, transferring the design onto the paper.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Actually,", "Therefore,", "Nevertheless,", "Finally,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Finally” logically signals that the information in this sentence—that the artisan slips paper in and out of the liquid to transfer the design onto paper—is the final step in the process of Turkish paper marbling, which began with what happens “first” (filling a tray with a solution) and continued with what happens “next” (adding inks or paints to the solution)."),
      distractors: {
        A: L("Choice A is incorrect because “actually” illogically signals that the information in this sentence about slipping paper in and out of liquid to transfer a design onto paper is unexpected in light of the previously described steps. Instead, the sentence describes the final step in the process of Turkish paper marbling."),
        B: L("Choice B is incorrect because “therefore” illogically signals that the information in this sentence about slipping paper in and out of liquid to transfer a design onto paper is a consequence of the previously described steps. Instead, the sentence describes the final step in the process of Turkish paper marbling."),
        C: L("Choice C is incorrect because “nevertheless” illogically signals that the information in this sentence about slipping paper in and out of liquid to transfer a design onto paper contrasts with the previously described steps. Instead, the sentence describes the final step in the process of Turkish paper marbling.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-e268c452", "e268c452", 271)
    },
    {
      id: "rw-tr-f114cbf0",
      sourceQuestionId: "f114cbf0",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A firefly uses specialized muscles to draw oxygen into its lower abdomen through narrow tubes, triggering a chemical reaction whereby the oxygen combines with chemicals in the firefly’s abdomen to produce a glow. ______ when the firefly stops drawing in oxygen, the reaction—and the glow—cease.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For instance,", "By contrast,", "Specifically,", "In conclusion,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “By contrast” logically signals that the information in this sentence—that a firefly’s glow ceases when it stops drawing in oxygen—contrasts with the previous sentence’s discussion of the processes that cause a firefly to begin to glow."),
      distractors: {
        A: L("Choice A is incorrect because “for instance” illogically signals that the information in the sentence exemplifies the previous sentence’s discussion of how a firefly begins to glow. Instead, it contrasts with the previous sentence’s discussion."),
        C: L("Choice C is incorrect because “specifically” illogically signals that the information in the sentence provides specific details elaborating on the previous sentence’s discussion of how a firefly begins to glow. Instead, it contrasts with the previous sentence’s discussion."),
        D: L("Choice D is incorrect because “in conclusion” illogically signals that the information in the sentence sums up the previous sentence’s discussion of how a firefly begins to glow. Instead, it contrasts with the previous sentence’s discussion.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f114cbf0", "f114cbf0", 272)
    },
    {
      id: "rw-tr-b7c404d1",
      sourceQuestionId: "b7c404d1",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>With her room-sized installation The Interstitium, Iranian American artist Laleh Mehran succeeded in creating a space that felt, as intended, both “familiar and distant. ” ______ with a video screen placed at the far end of the coal slag-encrusted room, her installation was reminiscent of a typical movie theater—albeit one found in a subterranean coal mine.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Next,", "Nevertheless,", "Indeed,", "Instead,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Indeed\" logically signals that the information in this sentence—that Laleh Mehran’s installation resembled both a typical movie theater and a coal mine—supports the previous sentence’s claim that the space Mehran created felt both \"familiar and distant. \""),
      distractors: {
        A: L("Choice A is incorrect because \"next\" illogically signals that the description of Laleh Mehran’s installation in this sentence is the next step in a process. Rather, it supports the previous sentence’s claim about Mehran’s installation."),
        B: L("Choice B is incorrect because \"nevertheless\" illogically signals that the information in this sentence is true despite the claim about Laleh Mehran’s installation in the previous sentence. Rather, it supports that claim."),
        D: L("Choice D is incorrect because \"instead\" illogically signals that this sentence presents an alternative to the previous sentence’s claim about Laleh Mehran’s installation. Rather, it supports that claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b7c404d1", "b7c404d1", 273)
    },
    {
      id: "rw-tr-ad729337",
      sourceQuestionId: "ad729337",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>With its clichéd imagery of suburban lawns and power lines, John Ashbery’s 2004 poem “Ignorance of the Law Is No Excuse” may seem barren terrain for critical analysis. ______ cultural critic Lauren Berlant finds fertile ground in just its first two stanzas, devoting most of a book chapter to deciphering the “weight of the default space” Ashbery creates in this poem.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Likewise,", "Nonetheless,", "In turn,", "That is,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Nonetheless” is a transition that indicates disagreement. The first sentence describes the unlikelihood of finding much for critical analysis in Ashbery’s poem (“barren terrain”), while the second sentence describes how Berlant did in fact find much to analyze in Ashbery’s poem (“fertile ground”), so the transition “nonetheless” fits perfectly."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a transition that indicates the addition of a new but similar idea, which doesn’t make sense here. The idea in this sentence directly contradicts the idea in the previous sentence."),
        C: L("Choice C is incorrect. This choice uses a cause-and-effect transition, which doesn’t make sense in this context—a poem seemingly having little opportunity for critical analysis would not cause someone to write an extensive critical analysis (in fact, we might expect the opposite)."),
        D: L("Choice D is incorrect. This choice uses a transition that indicates a restatement of the same idea in other words. But the text isn’t restating the first idea here. Instead, it’s offering a contradiction to the idea expressed in the first sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-ad729337", "ad729337", 275)
    },
    {
      id: "rw-tr-5e93039f",
      sourceQuestionId: "5e93039f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Roughly once an hour, a torrent of boiling water shoots up 100 feet or more from Yellowstone’s Old Faithful geyser before plunging back to the surface—a cycle seemingly inhospitable to life. ______ as microbiologist Eric Boyd attests, “the geyser is…almost like a cradle for biodiversity, ” home to numerous bacteria species that thrive in its sulfurous waters.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Thus,", "Specifically,", "Still,", "In other words,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Still\" logically signals that the information in this sentence about Old Faithful’s thriving bacteria species is true despite the previous claim that conditions at the geyser seem as if they would be inhospitable to life."),
      distractors: {
        A: L("Choice A is incorrect because \"thus\" illogically signals that the information in this sentence is a result or consequence of the previous claim about Old Faithful’s seemingly inhospitable conditions. Instead, this information about the geyser’s many thriving bacteria species is true despite the previous claim."),
        B: L("Choice B is incorrect because \"specifically\" illogically signals that the information in this sentence provides specific, precise details elaborating on the previous claim about Old Faithful’s seemingly inhospitable conditions. Instead, this information about the geyser’s many thriving bacteria species is true despite the previous claim."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the information in this sentence serves as a paraphrase or restatement of the previous claim about Old Faithful’s seemingly inhospitable conditions. Instead, this information about the geyser’s many thriving bacteria species is true despite the previous claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-5e93039f", "5e93039f", 276)
    },
    {
      id: "rw-tr-0f9ed134",
      sourceQuestionId: "0f9ed134",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 1974, Mexican chemist Mario Molina and US chemist F . Sherwood Rowland discovered that chemicals called CFCs were harmful to the ozone layer. Their research was extremely influential in the fight against CFCs. ______ it laid the foundation for a 1987 treaty that phased out the use of CFCs across the globe.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Regardless,", "Specifically,", "However,", "Earlier,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Specifically\" logically signals that the information in this sentence—that Molina and Rowland’s research laid the foundation for a later treaty—provides specific, precise details elaborating on the previous sentence’s more general claim about the influence of the research."),
      distractors: {
        A: L("Choice A is incorrect because \"regardless\" illogically signals that the information in this sentence is true despite the previous sentence’s claim about the influence of Molina and Rowland’s research. Instead, this information—that the research laid the foundation for a later treaty—provides specific details elaborating on the previous claim."),
        C: L("Choice C is incorrect because \"however\" illogically signals that the information in this sentence contrasts with the previous sentence’s claim about the influence of Molina and Rowland’s research. Instead, this information—that the research laid the foundation for a later treaty—provides specific details elaborating on the previous claim."),
        D: L("Choice D is incorrect because \"earlier\" illogically signals that the information in this sentence occurred at a time before Molina and Rowland’s research influenced the fight against CFCs. Instead, this information—that the research laid the foundation for a later treaty—provides specific details elaborating on the previous claim about the research’s influence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0f9ed134", "0f9ed134", 277)
    },
    {
      id: "rw-tr-9e3a215b",
      sourceQuestionId: "9e3a215b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A 2022 study by researchers Hala Altamimi and Qiaozhen Liu investigated the relationship between nonprofit arts organizations’ spending and performance. ______ the researchers examined the correlation between how much 22,328 US arts nonprofits spent on overhead—operational costs such as equipment and fundraising—and how many people attended their events (a measure of overall success).</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Thus,", "In addition,", "By comparison,", "Specifically,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Specifically\" logically signals that the information in this sentence—that the researchers examined the overhead costs and attendance at events of 22,328 nonprofits—provides specific, precise details elaborating on how the researchers investigated the relationship between nonprofits’ spending and performance."),
      distractors: {
        A: L("Choice A is incorrect. \"Thus\" illogically signals that the information in this sentence is a result or consequence of the researchers’ investigation of nonprofits’ spending and performance. Instead, it specifies how they examined that correlation."),
        B: L("Choice B is incorrect. \"In addition\" illogically signals that the information in this sentence is merely an additional fact about the researchers’ investigation of nonprofits’ spending and performance. Instead, it specifies how they examined that correlation."),
        C: L("Choice C is incorrect. \"By comparison\" illogically signals that the information in this sentence is being compared to the researchers’ investigation of nonprofits’ spending and performance. Instead, it specifies how they examined that correlation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9e3a215b", "9e3a215b", 278)
    },
    {
      id: "rw-tr-70c19cf6",
      sourceQuestionId: "70c19cf6",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>One proposed boundary between Earth’s atmosphere and outer space is the Kármán line, 100 km above sea level. Based on the work of physicist Theodore von Kármán, this line marks the theoretical height at which an aircraft no longer remains aloft using the force of lift. ______ an aircraft sustains flight past this altitude primarily by its velocity, reaching a speed sufficient to maintain an orbit but not to generate enough lift from the thin air.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For instance,", "Instead,", "Granted,", "Regardless,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Instead” logically signals that the information in this sentence—that an aircraft sustains flight past the Kármán line primarily by its velocity—is an alternative means of sustaining flight past this line, which the previous sentence indicates is the theoretical height at which an aircraft no longer remains aloft by using the force of lift."),
      distractors: {
        A: L("Choice A is incorrect because “for instance” illogically signals that the information about an aircraft sustaining flight by velocity exemplifies the previous information about the Kármán line marking the theoretical height at which an aircraft no longer remains aloft using lift. Rather, the sentence describes an alternative means of sustaining flight past this line."),
        C: L("Choice C is incorrect because “granted” illogically signals that the information about an aircraft sustaining flight by velocity is a concession or acknowledgment that qualifies the previous information about the Kármán line marking the theoretical height at which an aircraft no longer remains aloft using lift. Rather, the sentence describes an alternative means of sustaining flight past this line."),
        D: L("Choice D is incorrect because “regardless” illogically signals that the information about an aircraft sustaining flight by velocity is true despite the previous information about the Kármán line marking the theoretical height at which an aircraft no longer remains aloft using lift. Rather, the sentence describes an alternative means of sustaining flight past this line.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-70c19cf6", "70c19cf6", 279)
    },
    {
      id: "rw-tr-0ee64efc",
      sourceQuestionId: "0ee64efc",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the 1850s, William Still was instrumental in helping nearly 1,000 people escape from slavery, earning him the moniker “the Father of the Underground Railroad. ” ______ despite the fame of his contributions during his lifetime, Still is discussed far less today than other prominent Black abolitionists from his era, such as Frederick Douglass and Harriet Tubman.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "However,", "Specifically,", "Similarly,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “However” logically signals that the information in this sentence—that Still is discussed less frequently today than other famous Black abolitionists—contrasts with the information in the previous sentence, which indicates that Still was once so prominent that he was called “the Father of the Underground Railroad. ”"),
      distractors: {
        A: L("Choice A is incorrect because “for example” illogically signals that this sentence provides an example supporting the information about Still’s accomplishments. Instead, the sentence indicates that Still is discussed less frequently today than other famous Black abolitionists."),
        C: L("Choice C is incorrect because “specifically” illogically signals that this sentence provides a specific example supporting the information about Still’s accomplishments. Instead, the sentence indicates that Still is discussed less frequently today than other famous Black abolitionists."),
        D: L("Choice D is incorrect because “similarly” illogically signals that this sentence provides similar information to the information about Still’s accomplishments. Instead, the sentence indicates that Still is discussed less frequently today than other famous Black abolitionists.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0ee64efc", "0ee64efc", 281)
    },
    {
      id: "rw-tr-b8eec031",
      sourceQuestionId: "b8eec031",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Researchers Helena Mihaljević-Brandt, Lucía Santamaría, and Marco Tullney report that while mathematicians may have traditionally worked alone, evidence points to a shift in the opposite direction. ______ mathematicians are choosing to collaborate with their peers—a trend illustrated by a rise in the number of mathematics publications credited to multiple authors.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "For this reason,", "Furthermore,", "Increasingly,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Increasingly” logically signals that the claim in this sentence—that mathematicians are collaborating with their peers—marks a change relative to what was traditionally done. As the previous sentence explains, while mathematicians may have traditionally worked alone, evidence points to a shift in the opposite direction. The claim describes the shift: a rise in collaboration."),
      distractors: {
        A: L("Choice A is incorrect because “similarly” illogically signals that the claim in this sentence is similar to, but separate from, the previous claim about the shift away from mathematicians working alone. Instead, the claim about the rise in collaboration elaborates on the previous claim, describing the shift."),
        B: L("Choice B is incorrect because “for this reason” illogically signals that the claim in this sentence is caused by the previous claim about the shift away from mathematicians working alone. Instead, the claim about the rise in collaboration elaborates on the previous claim, describing the shift."),
        C: L("Choice C is incorrect because “furthermore” illogically signals that the claim in this sentence is in addition to the previous claim about the shift away from mathematicians working alone. Instead, the claim about the rise in collaboration elaborates on the previous claim, describing the shift.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b8eec031", "b8eec031", 282)
    },
    {
      id: "rw-tr-56336696",
      sourceQuestionId: "56336696",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When using sumac for dyeing cloth, textile artists first soak it in water to release its color. Then, they add the cloth to the dyebath and simmer it for hours, perhaps even days. ______ they will remove the cloth, at which point it will have turned a vibrant red color.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Nevertheless,", "Likewise,", "Eventually,", "In other words,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Eventually\" logically signals that the information in this sentence—that textile artists will remove the cloth when it has turned red—is the final step in the chronological sequence of the dyeing process described in the previous sentences."),
      distractors: {
        A: L("Choice A is incorrect because \"nevertheless\" illogically signals that the information in this sentence is true despite the previous information about simmering the cloth in the dyebath. Instead, the removal of the cloth is the final step in the dyeing process."),
        B: L("Choice B is incorrect because \"likewise\" illogically signals that the information in this sentence is similar to the previous information about simmering the cloth in the dyebath. Instead, the removal of the cloth is the final step in the dyeing process."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the information in this sentence is a paraphrase or restatement of the previous information about simmering the cloth in the dyebath. Instead, the removal of the cloth is the final step in the dyeing process.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-56336696", "56336696", 283)
    },
    {
      id: "rw-tr-273c2f12",
      sourceQuestionId: "273c2f12",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Jeffrey Gibson’s sculptural object KNOW YOUR MAGIC, BABY , an Everlast-brand exercise bag embroidered with multicolored beads and a fringe associated with the dances of the Ojibwe people, stitches together—literally and figuratively—recognizable symbols from both Native and non-Native cultures. ______ Gibson’s piece also blurs the distinction between contemporary art and traditional crafts.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Conversely,", "In so doing,", "For instance,", "In particular,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"In so doing\" logically signals that the information in this sentence about Gibson’s piece—that it blurs the distinction between contemporary art and traditional crafts—is a result or consequence of the piece’s blending of particular Native and non-Native cultural symbols."),
      distractors: {
        A: L("Choice A is incorrect. \"Conversely\" illogically signals that the information in this sentence contrasts with the previous information about the blending of particular cultural symbols in Gibson’s piece. Instead, it presents a result or consequence of that information."),
        C: L("Choice C is incorrect. \"For instance\" illogically signals that this sentence provides an example supporting the previous information about the blending of particular cultural symbols in Gibson’s piece. Instead, it presents a result or consequence of that information."),
        D: L("Choice D is incorrect. \"In particular\" illogically signals that this sentence provides specific details elaborating on the previous information about the blending of particular cultural symbols in Gibson’s piece. Instead, it presents a result or consequence of that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-273c2f12", "273c2f12", 284)
    },
    {
      id: "rw-tr-9e34720b",
      sourceQuestionId: "9e34720b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Although those who migrated to California in 1849 dreamed of finding gold nuggets in streambeds, the state’s richest deposits were buried deeply in rock, beyond the reach of individual prospectors. ______ by 1852, many had given up their fortune-hunting dreams and gone to work for one of the large companies capable of managing California’s complex mining operations.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Furthermore,", "Still,", "Consequently,", "Next,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Consequently” logically signals that the information in this sentence—that many individual gold prospectors gave up their fortune-hunting dreams and became employees of mining companies—is a result or consequence of the previous information about the inaccessibility of the state’s gold deposits."),
      distractors: {
        A: L("Choice A is incorrect because “furthermore” illogically signals that the information in this sentence merely adds to the previous information about the inaccessibility of the state’s gold deposits. Instead, it’s a result or consequence of that information."),
        B: L("Choice B is incorrect because “still” illogically signals that the information in this sentence offers a contrast or exception to the previous information about the inaccessibility of the state’s gold deposits. Instead, it’s a result or consequence of that information."),
        D: L("Choice D is incorrect because “next” illogically signals that the information in this sentence is the next step in a process. Instead, it’s a result or consequence of the previous information about the inaccessibility of the state’s gold deposits.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9e34720b", "9e34720b", 286)
    },
    {
      id: "rw-tr-6036ad0e",
      sourceQuestionId: "6036ad0e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 2014, Nestor Gomez won his first-ever storytelling competition, relating a tale about his life as a Guatemalan immigrant living in Chicago. ______ in 2017, Gomez created the show 80 Minutes Around the World as a platform for others to share stories about their immigration experiences.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Instead,", "For example,", "Later,", "In other words,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"Later\" logically signals that the information in the sentence—that in 2017 Gomez created a platform for others to share stories about their immigration experiences—occurs later in a chronological series of events than the previous information about Gomez winning his first storytelling competition in 2014."),
      distractors: {
        A: L("Choice A is incorrect because \"instead\" illogically signals that Gomez created a platform for others to share stories about their immigration experiences as an alternative to winning his first storytelling competition. Rather, Gomez created the platform later—in a chronological series of events—than when he won the competition."),
        B: L("Choice B is incorrect because \"for example\" illogically signals that the information about Gomez creating a platform for others to share stories exemplifies his winning his first storytelling competition. Rather, Gomez created the platform later —in a chronological series of events—than when he won the competition."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the information about Gomez creating a platform for others to share stories is merely a paraphrase or restatement of the previous information about Gomez winning his first storytelling competition. Rather, Gomez created the platform later—in a chronological series of events—than when he won the competition.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-6036ad0e", "6036ad0e", 287)
    },
    {
      id: "rw-tr-63c73b50",
      sourceQuestionId: "63c73b50",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 2018, Kurt Luther and Vikram Mohanty created the web-based tool Civil War Photo Sleuth (CWPS). A user uploading an unknown Civil War soldier’s photograph to CWPS first tags the photo with all known information. ______ CWPS’s facial-recognition software analyzes twenty-seven different physical features and looks for matches to tagged images already in the database.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Then,", "In fact,", "Likewise,", "For example,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Then” indicates that the events in this sentence took place after the events in the previous sentence. Only after users upload images of unknown soldiers can those images be analyzed."),
      distractors: {
        B: L("Choice B is incorrect. This transition is used to emphasize the truth of a statement that modifies the previous statement. But this sentence doesn’t modify the step described in the previous statement: instead, it introduces an entirely new step in the process. So “in fact” wouldn’t make sense here."),
        C: L("Choice C is incorrect. This choice uses a transition that indicates the addition of a new but related idea, which doesn’t make sense here. Analyzing the physical features in the uploaded photographs isn’t a similar idea, but rather the next step in the process."),
        D: L("Choice D is incorrect. This choice uses an exemplification transition, which doesn’t make sense here. Analyzing physical features is not an example of uploading and tagging an image.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-63c73b50", "63c73b50", 288)
    },
    {
      id: "rw-tr-3831f2d7",
      sourceQuestionId: "3831f2d7",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Arkansas aviator Louise Thaden was already a record breaker when she won the inaugural National Women’s Air Derby, a race from California to Ohio, in August of 1929. ______ in December of 1928, Thaden had set an aviation record when she reached an altitude of 20,269 feet in a Travel Air biplane.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Earlier,", "However,", "Next,", "As a result,"],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice uses a transition that indicates a shift back in time. Since the first sentence talks about Thaden’s race win in 1929 and the second shifts back to talking about her record in 1928, this makes the most sense here."),
      distractors: {
        B: L("Choice B is incorrect. This choice uses a disagreement transition. But this sentence actually agrees with and expands on the previous sentence by describing the earlier record that Thaden had \"already\" held."),
        C: L("Choice C is incorrect. This choice uses a transition that indicates a shift forward in time, which doesn’t make sense here. A record in 1928 didn’t come after Thaden’s race win in 1929."),
        D: L("Choice D is incorrect. This choice uses a cause-and-effect transition, which doesn’t make sense in this context—an event in 1929 can’t cause something in 1928.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-3831f2d7", "3831f2d7", 289)
    },
    {
      id: "rw-tr-c4f7f726",
      sourceQuestionId: "c4f7f726",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Many butterfly species have bold, brightly colored wings. ______ some butterfly species have wings that are almost completely colorless and transparent. Glasswing butterflies, for example, have see-through wings that make them nearly invisible.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Similarly,", "Previously,", "In other words,", "However,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"However\" logically signals that the information in this sentence about butterfly species—that some have colorless, transparent wings—contrasts with the previous information about butterfly species with bold, colorful wings."),
      distractors: {
        A: L("Choice A is incorrect because \"similarly\" illogically signals that the information in this sentence is similar to the previous information about butterfly species. Instead, it contrasts with the previous information."),
        B: L("Choice B is incorrect because \"previously\" illogically signals that this sentence describes an event that occurred before another event. Instead, the sentence provides information about butterfly species that contrasts with the information in the first sentence."),
        C: L("Choice C is incorrect because \"in other words\" illogically signals that the information in this sentence is a paraphrase or restatement of the previous information about butterfly species. Instead, it contrasts with the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-c4f7f726", "c4f7f726", 290)
    },
    {
      id: "rw-tr-2b5e0731",
      sourceQuestionId: "2b5e0731",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>With darkness falling, a mother elephant loses sight of her calf and wants to make sure it is safe. ______ she releases an infrasonic call for the calf to hear. Infrasonic sound is below the range of human hearing, but many animals can hear these sounds from several miles away.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "For this reason,", "Nowadays,", "Similarly,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"For this reason\" is a cause-and-effect transition. The cause in this case is that the mother elephant wants to know that her calf is safe, so the effect is that she lets out an infrasonic call for the calf to hear. Therefore, \"for this reason\" fits perfectly in this context."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a transition that introduces an example of a previous idea. But the second sentence doesn’t provide an example of the events described in the first sentence. Instead, it describes what happens next: the mother elephant calls for her calf."),
        C: L("Choice C is incorrect. This choice uses a transition that indicates a shift from the past to the current time, which doesn’t make sense here. Both sentences use the present tense, as they’re describing the same time period."),
        D: L("Choice D is incorrect. This choice uses a transition that indicates commonality or agreement between two ideas. But this sentence isn’t similar to the events in the first sentence. Instead, it describes the events that happen next.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-2b5e0731", "2b5e0731", 293)
    },
    {
      id: "rw-tr-1c36e3e1",
      sourceQuestionId: "1c36e3e1",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The number of dark spots that appear on the Sun, known as sunspots, can vary greatly. For example, there were about 180 sunspots in November 2001. ______ there were only about 2 sunspots in December 2008.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In other words,", "Similarly,", "Therefore,", "By comparison,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “By comparison” logically signals that the information in this sentence about the number of sunspots in December 2008 offers a point of comparison with the previous sentence, which indicates the number of sunspots in November 2001. The two sentences work together to support the claim that the number of these spots “can vary greatly. ”"),
      distractors: {
        A: L("Choice A is incorrect because “in other words” illogically signals that this sentence restates the information in the previous sentence. Instead, this sentence presents new information, offering a point of comparison to the previous sentence."),
        B: L("Choice B is incorrect because “similarly” illogically signals that the example in this sentence is similar to the example in the previous sentence. In fact, the examples of numbers of sunspots are very different."),
        C: L("Choice C is incorrect because “therefore” illogically signals that this sentence has a cause-and-effect relationship to the previous sentence. Instead, this sentence presents new information, offering a point of comparison to the previous sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1c36e3e1", "1c36e3e1", 296)
    },
    {
      id: "rw-tr-0839a4b9",
      sourceQuestionId: "0839a4b9",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Coastal Futures Conservatory in Virginia is known for creating aural representations of ecological data. One such effort combines underwater audio recorded in seagrass beds with data that track rising carbon levels in the seagrass. As carbon levels increase, the audio is correspondingly distorted; ______ listeners can “hear” the changes in the carbon levels.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["furthermore,", "by comparison,", "for instance,", "thus,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Thus\" logically signals that the information in this clause—that listeners can \"hear\" carbon levels increasing—is a result of the previous information about the audio distorting as carbon levels increase."),
      distractors: {
        A: L("Choice A is incorrect because \"furthermore\" illogically signals that the information in this clause merely adds to the previous information about the audio distorting as carbon levels rise. Instead, the listeners’ ability to \"hear\" carbon levels increasing is a result of that distortion."),
        B: L("Choice B is incorrect because \"by comparison\" illogically signals that the information in this clause is being compared to the information about the audio distorting as carbon levels rise. Instead, the listeners’ ability to \"hear\" carbon levels increasing is a result of that distortion."),
        C: L("Choice C is incorrect because \"for instance\" illogically signals that the information in this clause is an example of how the audio distorts as carbon levels rise. Instead, the audio was distorted for the express purpose of representing ecological data; the listeners’ ability to \"hear\" carbon levels increasing is a direct, intended result of the distortion, not merely an example of it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0839a4b9", "0839a4b9", 297)
    },
    {
      id: "rw-tr-ab1f424a",
      sourceQuestionId: "ab1f424a",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Working together with the Navajo Nation Department of Water Resources, Dr. Lani Tsinnajinnie analyzed data about snowpack levels in the Chuska Mountains. She found that the snowpack (the amount of snow on the ground) was deepest in early March at lower elevations. At higher elevations, ______ the snowpack was deepest in mid-March.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in other words,", "for instance,", "on the other hand,", "in summary,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"On the other hand\" logically signals that the information in the sentence—that the snowpack at higher elevations in the Chuska Mountains was deepest in mid-March—contrasts with the previous information about the snowpack at lower elevations being deepest in early March."),
      distractors: {
        A: L("Choice A is incorrect because \"in other words\" illogically signals that information in the sentence is merely a paraphrase or restatement of the previous information about the snowpack at lower elevations. Instead, the information about the snowpack at higher elevations contrasts with that information."),
        B: L("Choice B is incorrect because \"for instance\" illogically signals that the information in the sentence exemplifies the previous information about the snowpack at lower elevations. Instead, the information about the snowpack at higher elevations contrasts with that information."),
        D: L("Choice D is incorrect because \"in summary\" illogically signals that the information in the sentence summarizes the previous information about the snowpack at lower elevations. Instead, the information about the snowpack at higher elevations contrasts with that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-ab1f424a", "ab1f424a", 298)
    },
    {
      id: "rw-tr-ff1a2e5e",
      sourceQuestionId: "ff1a2e5e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Historians agree that the jazz pianist Jelly Roll Morton was exaggerating when he claimed to have invented jazz music. No one can deny, ______ that Morton’s innovative compositions and remarkable improvisational skills helped shape jazz as a genre during its early years.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["therefore,", "in the second place,", "in other words,", "though,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Though\" logically signals that the claim in the sentence—that Morton’s improvisational skills helped shape jazz as a genre during its early years (\"No one can deny\" it)—is true despite the previous information about Morton’s exaggerated claim to have invented jazz."),
      distractors: {
        A: L("Choice A is incorrect because \"therefore\" illogically signals that the claim in the sentence is a result of the previous information about Morton’s claim to have invented jazz. Instead, the sentence states that Morton helped to shape jazz—even if his claim was an exaggeration."),
        B: L("Choice B is incorrect because \"in the second place\" illogically signals that the claim in the sentence is a second, separate point in addition to Morton’s claim to have invented jazz. Instead, the sentence states that Morton helped to shape jazz—even if his claim was an exaggeration."),
        C: L("Choice C is incorrect because \"in other words\" illogically signals that the claim in the sentence is merely a paraphrase or restatement of the previous information about Morton’s claim to have invented jazz. Instead, the sentence states that Morton helped to shape jazz—even if his claim was an exaggeration.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-ff1a2e5e", "ff1a2e5e", 304)
    },
    {
      id: "rw-tr-b5972710",
      sourceQuestionId: "b5972710",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Niger ratified the Outer Space Treaty, an international agreement with over 100 signing nations that acts as the foundation for the laws of space, on February 1, 1967. Jordan, ______ has yet to officially ratify the treaty; it only signed it.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in contrast,", "specifically,", "for example,", "similarly,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"In contrast\" logically signals that the information in this sentence—that Jordan has yet to officially ratify the treaty— contrasts with the previous information about Niger having already ratified the treaty."),
      distractors: {
        B: L("Choice B is incorrect because \"specifically\" illogically signals that the information in this sentence specifies or elaborates on the previous information about Niger ratifying the treaty. Instead, the sentence changes subjects from Niger to Jordan, presenting contrasting information about Jordan’s treaty status."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that the information in this sentence exemplifies the previous information about Niger ratifying the treaty. Instead, the sentence explains that Jordan has yet to ratify the treaty."),
        D: L("Choice D is incorrect because \"similarly\" illogically signals that the information in this sentence is similar to the previous information about Niger ratifying the treaty. Instead, the sentence presents contrasting information that Jordan has yet to ratify the treaty.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b5972710", "b5972710", 305)
    },
    {
      id: "rw-tr-82ec9628",
      sourceQuestionId: "82ec9628",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Archaeologist Sue Brunning explains why the seventh-century ship burial site at Sutton Hoo in England was likely the tomb of a king. First, the gold artifacts inside the ship suggest that the person buried with them was a wealthy and respected leader. ______ the massive effort required to bury the ship would likely only have been undertaken for a king.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Instead,", "Still,", "Specifically,", "Second,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Second” logically signals that the information in this sentence—that the effort to bury the ship would likely only have been made for a king—joins the information in the previous sentence (“first… ”) in supporting Brunning’s claim that the burial site was likely the tomb of a king."),
      distractors: {
        A: L("Choice A is incorrect because “instead” illogically signals that the information in this sentence presents an alternative or substitute to the previous information about the gold artifacts inside the ship. Rather, this sentence presents a second piece of information that supports Brunning’s claim."),
        B: L("Choice B is incorrect because “still” illogically signals that the information in this sentence exists in contrast to or despite the previous information about the gold artifacts inside the ship. Instead, this sentence presents a second piece of information that supports Brunning’s claim."),
        C: L("Choice C is incorrect because “specifically” illogically signals that the information in this sentence specifies or elaborates on the previous information about the gold artifacts inside the ship. Instead, this sentence presents a second piece of information that supports Brunning’s claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-82ec9628", "82ec9628", 306)
    },
    {
      id: "rw-tr-7c3f0145",
      sourceQuestionId: "7c3f0145",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In a 2022 analysis of 200 terms, researchers found a broad pattern of valence-dependent mutation for which negative words saw a faster rate of cognate replacement—______ the rate at which a word will be replaced over time with a noncognate form. Adjectives (e.g., “afraid”) saw the largest effect; nouns (e.g., “attack”), meanwhile, saw the smallest.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["for example,", "likewise,", "in addition,", "that is,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"That is\" logically signals that the information that follows in the sentence clarifies a term used in the previous discussion of the researchers’ findings: cognate replacement."),
      distractors: {
        A: L("Choice A is incorrect because \"for example\" illogically signals that the information that follows in the sentence provides a specific example of the research findings described earlier. Instead, it clarifies a term introduced earlier in the sentence."),
        B: L("Choice B is incorrect because \"likewise\" illogically signals that the information that follows in the sentence is similar to the previous information about the researchers’ findings. Instead, it clarifies a term introduced earlier in the sentence."),
        C: L("Choice C is incorrect because \"in addition\" illogically signals that the information that follows in the sentence merely adds to the previous information about the researchers’ findings. Instead, it clarifies a term introduced earlier in the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-7c3f0145", "7c3f0145", 307)
    },
    {
      id: "rw-tr-4f2710ab",
      sourceQuestionId: "4f2710ab",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Organisms have evolved a number of surprising adaptations to ensure their survival in adverse conditions. Tadpole shrimp (Triops longicaudatus) embryos, ______ can pause development for over ten years during extended periods of drought.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in contrast,", "for example,", "meanwhile,", "consequently,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “For example” logically signals that the information in this sentence—that tadpole shrimp embryos can pause development during extended periods of drought—exemplifies the previous sentence’s claim that organisms have evolved surprising adaptations to survive in adverse conditions."),
      distractors: {
        A: L("Choice A is incorrect because “in contrast” illogically signals that the information in this sentence contrasts with the claim about organisms in the previous sentence. Instead, it exemplifies this claim."),
        C: L("Choice C is incorrect because “meanwhile” illogically signals that the information in this sentence is separate from (while occurring simultaneously with) the claim about organisms in the previous sentence. Instead, it exemplifies this claim."),
        D: L("Choice D is incorrect because “consequently” illogically signals that the information in this sentence is a consequence, or result, of the claim about organisms in the previous sentence. Instead, it exemplifies this claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-4f2710ab", "4f2710ab", 309)
    },
    {
      id: "rw-tr-480ade7e",
      sourceQuestionId: "480ade7e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In response to adverse environmental conditions, many plants produce abscisic acid (ABA), a stress hormone. ABA triggers a slowdown in the biological processes of most plants. ______ when the mustard plant Schrenkiella parvula produces ABA in response to an environmental stressor, the hormone triggers accelerated growth.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Moreover,", "In contrast,", "For example,", "Thus,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “In contrast” logically signals that the information in this sentence—that ABA triggers accelerated growth in the mustard plant Schrenkiella parvula—contrasts with the previous information about ABA triggering a slowdown in most plants’ biological processes."),
      distractors: {
        A: L("Choice A is incorrect because “moreover” illogically signals that the information in this sentence about the mustard plant merely adds to the previous information about the effects of ABA. Instead, it contrasts with that information."),
        C: L("Choice C is incorrect because “for example” illogically signals that the information in this sentence about the mustard plant provides an example consistent with the previous information about the effects of ABA. Instead, it contrasts with that information."),
        D: L("Choice D is incorrect because “thus” illogically signals that the information in this sentence about the mustard plant is a consequence, or result, of the previous information about the effects of ABA. Instead, it contrasts with that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-480ade7e", "480ade7e", 310)
    },
    {
      id: "rw-tr-c61fb134",
      sourceQuestionId: "c61fb134",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>As Iestyn Barr and his team of researchers discovered when establishing the glacial timeline of Antarctica, the Transantarctic Mountains—a 3,500-km mountain range spanning the continent—are home to glaciers of at least 60 million years in age. ______ the researchers concluded, Antarctica had glaciers long before the formation of its continent-wide ice sheet 34 million years ago.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["By contrast,", "Thus,", "Nevertheless,", "Even so,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Thus” logically signals that the information in this sentence—that the researchers concluded that Antarctica had glaciers long before the formation of its continent-wide ice sheet—is a result of the previous information about the discovery that Antarctica’s glaciers are at least 60 million years old, whereas its continent-wide ice sheet formed just 34 million years ago."),
      distractors: {
        A: L("Choice A is incorrect because “by contrast” illogically signals that the researchers’ conclusion about Antarctica having glaciers before its ice sheet formed contrasts with the previous finding about the age of Antarctica’s glaciers. Instead, the conclusion is a result of that finding."),
        C: L("Choice C is incorrect because “nevertheless” illogically signals that the researchers’ conclusion about Antarctica having glaciers before its ice sheet formed is true despite the previous finding about the age of Antarctica’s glaciers. Instead, the conclusion is a result of that finding."),
        D: L("Choice D is incorrect because “even so” illogically signals that the researchers’ conclusion about Antarctica having glaciers before its ice sheet formed is true despite the previous finding about the age of Antarctica’s glaciers. Instead, the conclusion is a result of that finding.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-c61fb134", "c61fb134", 311)
    },
    {
      id: "rw-tr-34a5ba1c",
      sourceQuestionId: "34a5ba1c",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>By 1936, Spanish Romani dancer Carmen Amaya was known all over Spain for her powerful style of flamenco dancing. However, in July of that year, the outbreak of the Spanish Civil War made it difficult for her to perform in her home country. ______ Amaya left Spain to perform abroad, dancing for audiences across North and South America.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In comparison,", "As a result,", "First of all,", "For example,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “As a result” logically signals that the information in this sentence about Amaya leaving Spain to perform abroad is a result of the previous information about the Spanish Civil War."),
      distractors: {
        A: L("Choice A is incorrect because “in comparison” illogically signals that the information in this sentence is being compared to the previous information about the Spanish Civil War. Instead, Amaya leaving Spain is a result of that war."),
        C: L("Choice C is incorrect because “first of all” illogically signals that the information in this sentence is the beginning of a sequence of events. Instead, Amaya leaving Spain is a result of the event (the outbreak of war) described in the previous sentence."),
        D: L("Choice D is incorrect because “for example” illogically signals that the information in this sentence is an example supporting the previous statement about the Spanish Civil War. Instead, Amaya leaving Spain is a result of that war.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-34a5ba1c", "34a5ba1c", 312)
    },
    {
      id: "rw-tr-ac8eb085",
      sourceQuestionId: "ac8eb085",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>“O2 Arena, ” an award-winning science fiction story by Nigerian author Oghenechovwe Donald Ekpeki, takes place in an alternate version of Nigeria where breathable air is a rare commodity that is owned and sold by companies. ______ people must purchase it with currency called O2 credits.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["As a result,", "In any case,", "Nevertheless,", "Earlier,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The second sentence describes a consequence of the system laid out in the first sentence: because air is owned and sold by companies in this world, people have to buy it."),
      distractors: {
        B: L("Choice B is incorrect. This choice uses a transition that means “no matter what happens” or “whatever the situation is, ” which doesn’t make sense here. There’s only one situation described in the text: a fictional world in which companies own all the breathable air, forcing people to buy it."),
        C: L("Choice C is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous sentence. They both describe the same fictional situation."),
        D: L("Choice D is incorrect. This choice uses a transition that indicates a shift back in time, which doesn’t make sense here. Both sentences use the present tense, as they’re describing the same fictional time period.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-ac8eb085", "ac8eb085", 315)
    },
    {
      id: "rw-tr-37957752",
      sourceQuestionId: "37957752",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>As biologist Terrie Williams has documented, deep dives present a challenge for seals and other marine mammals. A seal must exert enough energy to propel itself hundreds of meters downward, while keeping its heart rate low enough that it doesn’t run out of oxygen while underwater. ______ a seal moves its flippers as little as possible on a deep dive, gliding to conserve energy.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In the first place,", "On the other hand,", "For this reason,", "In comparison,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “For this reason” logically signals that the behavior described in this sentence is a consequence of the information about seals in the previous sentence. That is, a seal moves its flippers as little as possible during a deep dive because it needs to keep its heart rate low enough that it does not run out of oxygen."),
      distractors: {
        A: L("Choice A is incorrect because “in the first place” illogically signals that this sentence is the first point in a discussion. Instead, the sentence describes a behavior that is a consequence of the previous information about seals."),
        B: L("Choice B is incorrect because “on the other hand” illogically signals that the behavior described in this sentence contrasts with the previous information about seals. Instead, it is a consequence of that information."),
        D: L("Choice D is incorrect because “in comparison” illogically signals that the behavior described in this sentence is being compared to the previous information about seals. Instead, it is a consequence of that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-37957752", "37957752", 316)
    },
    {
      id: "rw-tr-2b5f4bdc",
      sourceQuestionId: "2b5f4bdc",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In the early 1900s, Jovita Idár fought injustice on both sides of the Mexico–United States border. As a reporter for the Texas newspaper La Crónica, she voiced support for the Mexican people’s revolt against authoritarian rule. ______ she founded the League of Mexican Women, a group that advocated for the rights of Mexican Americans.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Additionally,", "In conclusion,", "For example,", "Rather,"],
      answer: "A",
      explanation: L("Choice A is the best answer because “additionally” logically signals that the information in this sentence—that Idár founded the League of Mexican Women—is another instance of Idár fighting injustice, this time advocating for the rights of Mexican Americans."),
      distractors: {
        B: L("Choice B is incorrect because “in conclusion” illogically signals that the information in this sentence sums up or concludes the discussion of Idár’s support for the Mexican people’s revolt. Instead, the founding of the League of Mexican Women is a separate instance of Idár fighting injustice."),
        C: L("Choice C is incorrect because “for example” illogically signals that the information in this sentence is an example of how, as a newspaper reporter, Idár voiced support for the Mexican people’s revolt. Instead, the founding of the League of Mexican Women is a separate instance of Idár fighting injustice, this time in support of Mexican Americans."),
        D: L("Choice D is incorrect because “rather” illogically signals that the information in this sentence offers a contrast or exception to the previous information about Idár’s support for the Mexican people’s revolt. Instead, the founding of the League of Mexican Women is a separate instance of Idár fighting injustice.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-2b5f4bdc", "2b5f4bdc", 317)
    },
    {
      id: "rw-tr-90117366",
      sourceQuestionId: "90117366",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>To explore how blinking affects social interactions, Dutch researchers observed interactions between human speakers and “listeners” (animated human faces on a screen). The researchers found that when the listeners blinked slowly, the speakers tended to talk for less time. ______ quicker blinks were associated with longer talking times.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "Specifically,", "Firstly,", "By contrast,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “By contrast” logically signals that the finding described in this sentence contrasts with the finding described in the previous sentence. That is, quicker blinks were associated with longer talking times, whereas slower blinks were associated with shorter talking times."),
      distractors: {
        A: L("Choice A is incorrect because “for example” illogically signals that the finding described in this sentence is an example of the finding described in the previous sentence. Instead, it contrasts with that finding."),
        B: L("Choice B is incorrect because “specifically” illogically signals that this sentence provides specific, precise details about the finding described in the previous sentence. Instead, it presents information that contrasts with that finding."),
        C: L("Choice C is incorrect because “firstly” illogically signals that the finding described in this sentence is a first point or occurs first in a chronological sequence of events. Instead, it contrasts with the finding described in the previous sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-90117366", "90117366", 318)
    },
    {
      id: "rw-tr-a204d618",
      sourceQuestionId: "a204d618",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1949, Frank Zamboni developed an ice rink resurfacing machine. As Zamboni’s machine moved along the rink’s surface, it first scraped off the top layer of ice. ______ it sprayed water into the deep grooves left behind by customers’ skates. Lastly, it smoothed over the newly formed ice.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "Next,", "Similarly,", "In contrast,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Next\" logically signals that the action in this sentence—the water spraying—is the next step in the resurfacing process, following the ice scraping mentioned in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because \"for example\" illogically signals that the action in this sentence is an example of the action in the previous sentence. Instead, the water spraying is the next step in a process that begins with the ice scraping."),
        C: L("Choice C is incorrect because \"similarly\" illogically signals that the action in this sentence is similar to the action in the previous sentence. Instead, the water spraying is the next step in a process that begins with the ice scraping."),
        D: L("Choice D is incorrect because \"in contrast\" illogically signals that the action in this sentence contrasts with the action in the previous sentence. Instead, the water spraying is the next step in a process that begins with the ice scraping.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a204d618", "a204d618", 319)
    },
    {
      id: "rw-tr-8fbf206d",
      sourceQuestionId: "8fbf206d",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In Color Charts: A History (2024), anthropologist Anne Varichon uses vivid prose to describe various systems and tools that have been used over the past few centuries for categorizing colors. ______ Varichon’s book features many high-quality images of these color presentation tools—from fanlike arrangements of hued fabric swatches to clusters of dyed feathers.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Consequently,", "Additionally,", "That said,", "Specifically,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Additionally” logically signals that the information in this sentence—that Varichon’s book features many high-quality images of color presentation tools—is an additional feature of the book, supplementing the vivid prose descriptions of these tools mentioned in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because “consequently” illogically signals that the information about the book’s high-quality images is a result or consequence of the previous statement about Varichon’s vivid prose descriptions. Instead, the images are an additional feature of the book."),
        C: L("Choice C is incorrect because “that said” illogically signals that the information about the book’s high-quality images is an exception to or qualification of the previous statement about Varichon’s vivid prose descriptions. Instead, the images are an additional feature of the book."),
        D: L("Choice D is incorrect because “specifically” illogically signals that the information about the book’s high-quality images provides specific, precise details about the vivid prose descriptions mentioned in the previous sentence. Instead, the images are an additional feature of the book.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-8fbf206d", "8fbf206d", 321)
    },
    {
      id: "rw-tr-b6ebadf6",
      sourceQuestionId: "b6ebadf6",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>There are three basic steps you should follow when planning a scientific inquiry. First, thoroughly research the question you wish to answer. ______ come up with a prediction (also called a hypothesis) about the answer to your question. Third, develop an experiment that can test the accuracy of your hypothesis.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Therefore,", "Instead,", "For example,", "Second,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Second\" logically signals that the activity described in this sentence—coming up with a prediction—is the next step in the three-part sequence of steps described in the text."),
      distractors: {
        A: L("Choice A is incorrect because \"therefore\" illogically signals that coming up with a prediction is a result or consequence of the activity described in the previous sentence: researching a question. While a prediction may be influenced by prior research, these activities are distinct steps in planning a scientific inquiry. Coming up with a prediction is the next step in the three-part sequence of steps described in the text."),
        B: L("Choice B is incorrect because \"instead\" illogically signals that coming up with a prediction is an alternative to the activity described in the previous sentence: researching a question. Rather, coming up with a prediction is the next step in the three-part sequence of steps described in the text."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that coming up with a prediction is an example of the activity described in the previous sentence: researching a question. Instead, coming up with a prediction is the next step in the three-part sequence of steps described in the text.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b6ebadf6", "b6ebadf6", 323)
    },
    {
      id: "rw-tr-52b31d7b",
      sourceQuestionId: "52b31d7b",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In November 1934, Amrita Sher-Gil was living in what must have seemed like the ideal city for a young artist: Paris. She was studying firsthand the color-saturated style of France’s modernist masters and beginning to make a name for herself as a painter. ______ Sher-Gil longed to return to her childhood home of India; only there, she believed, could her art truly flourish.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Still,", "Therefore,", "Indeed,", "Furthermore,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Still” logically signals that the information about Sher-Gil in this sentence—that she longed to leave Paris and return to India—contrasts with what one would expect after reading about Sher-Gil’s experiences in Paris in the previous sentences."),
      distractors: {
        B: L("Choice B is incorrect because “therefore” illogically signals that the information about Sher-Gil in this sentence is a result or consequence of the descriptions in the previous sentences. Instead, this information contrasts with what one would expect after reading about Sher-Gil’s experiences in Paris."),
        C: L("Choice C is incorrect because “indeed” illogically signals that the information about Sher-Gil in this sentence offers additional emphasis in support of the descriptions in the previous sentences. Instead, this information contrasts with what one would expect after reading about Sher-Gil’s experiences in Paris."),
        D: L("Choice D is incorrect because “furthermore” illogically signals that the information about Sher-Gil in this sentence offers additional support for or confirmation of the descriptions in the previous sentences. Instead, this information contrasts with what one would expect after reading about Sher-Gil’s experiences in Paris.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-52b31d7b", "52b31d7b", 326)
    },
    {
      id: "rw-tr-bfab730e",
      sourceQuestionId: "bfab730e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Paleontologists Jordan C. Mallon and David W.E. Hone used computer models to produce detailed Tyrannosaurus rex size estimates, incorporating factors such as growth rate, lifespan, and the size of available fossils. ______ the researchers determined that the largest T . rex possible could have been 70% heavier than the current largest-known specimens.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In addition to these factors,", "Despite these estimates,", "Further complicating these issues,", "Based on these models,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Based on these models” logically signals that the research finding described in this sentence—that the largest T . rex could have been 70% heavier than the current largest-known specimens—is derived from the computer models described in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because “in addition to these factors” illogically signals that the research finding about T . rex size presented in this sentence introduces factors beyond those noted in the previous sentence (growth rate, lifespan, and the size of available fossils). Instead, the finding is derived from the researchers’ models, which incorporated those factors."),
        B: L("Choice B is incorrect because “despite these estimates” illogically signals that the research finding about T . rex size presented in this sentence is true despite the previous information about the researchers’ model-generated size estimates. Instead, the finding is derived from the researchers’ models."),
        C: L("Choice C is incorrect because “further complicating these issues” illogically signals that the previous information about the researchers’ computer models presents difficulties and that the research finding about T . rex size presented in this sentence adds to those difficulties. Instead, the finding is simply derived from the researchers’ use of the models.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-bfab730e", "bfab730e", 331)
    },
    {
      id: "rw-tr-1996c104",
      sourceQuestionId: "1996c104",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The liquid metals in Earth’s core circulate constantly, and this circulation generates electrical currents that flow between Earth’s North and South magnetic poles. These electrical currents, ______ create a barrier around Earth that protects us from radiation and charged particles coming from space.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in turn,", "likewise,", "nevertheless,", "in reality,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"In turn\" logically signals that the information in the sentence—that the electrical currents create a protective barrier around Earth—is a result or consequence of the previous information about the circulation of liquid metals generating electrical currents that flow between Earth’s magnetic poles."),
      distractors: {
        B: L("Choice B is incorrect because \"likewise\" illogically signals that the information in the sentence is similar to the previous information about the circulation of liquid metals generating electrical currents that flow between Earth’s magnetic poles. Instead, the new information about the electrical currents is a direct result or consequence of the previous information."),
        C: L("Choice C is incorrect because \"nevertheless\" illogically signals that the information in the sentence is true despite the previous information about the circulation of liquid metals generating electrical currents that flow between Earth’s magnetic poles. Instead, the new information about the electrical currents is a direct result or consequence of the previous information."),
        D: L("Choice D is incorrect because \"in reality\" illogically signals that the information in the sentence contradicts the previous information about the circulation of liquid metals generating electrical currents that flow between Earth’s magnetic poles. Instead, the new information about the electrical currents is a direct result or consequence of the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-1996c104", "1996c104", 334)
    },
    {
      id: "rw-tr-bfb4e85e",
      sourceQuestionId: "bfb4e85e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Ballet dancer Misty Copeland has accomplished a lot. She has appeared on Broadway, toured with Prince, and even served on the President’s Council on Sports, Fitness &amp; Nutrition. ______ according to Copeland, nothing in her career matches the honor of being the first African American woman named principal dancer at the prestigious American Ballet Theatre.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Thus,", "However,", "For example,", "Second of all,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"However\" logically signals that the information in this sentence—that nothing in Copeland’s career matches her accomplishment of being the first African American woman named principal dancer at the American Ballet Theatre—offers a contrast or exception to the previous information about Copeland’s accomplishments."),
      distractors: {
        A: L("Choice A is incorrect because \"thus\" illogically signals that the information that follows is a result of the previous information about Copeland’s accomplishments. Instead, the statement that nothing in Copeland’s career matches this accomplishment offers a contrast or exception to that information."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that Copeland’s statement about her greatest accomplishment exemplifies the claim about her accomplishments in the previous sentence. Instead, it offers a contrast or exception to that information."),
        D: L("Choice D is incorrect because \"second of all\" illogically signals that the information in this sentence is a second, separate claim from the previous sentence’s information about her accomplishments. Instead, the statement that nothing in Copeland’s career matches this accomplishment offers a contrast or exception to that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-bfb4e85e", "bfb4e85e", 335)
    },
    {
      id: "rw-tr-f5a00eff",
      sourceQuestionId: "f5a00eff",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>If the formation of Earth’s mantle had been purely a product of core differentiation—whereby heavier elements sink toward the core and lighter elements rise—the upper mantle would be depleted of heavy siderophile elements. Siderophiles are much more abundant in the mantle than predicted in that model, however. ______ extraterrestrial material containing siderophiles, likely from asteroid or comet impacts, almost certainly accreted to Earth following core differentiation.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["That said,", "Hence,", "For example,", "Likewise,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"Hence\" correctly signals that the claim in this sentence regarding extraterrestrial material follows logically from the information in the previous sentences. The previous sentences establish that siderophile elements in the mantle are more abundant than predicted in the core-differentiation model. This sentence claims, logically, that these elements came from extraterrestrial material that accreted to Earth after core differentiation."),
      distractors: {
        A: L("Choice A is incorrect because \"that said\" illogically signals that the information in this sentence regarding extraterrestrial material is an exception to the previous information about siderophiles’ abundance in the mantle. Instead, it is a new claim that follows logically from the previous information."),
        C: L("Choice C is incorrect because \"for example\" illogically signals that the information in this sentence regarding extraterrestrial material exemplifies the previous information about siderophiles’ abundance in the mantle. Instead, it is a new claim that follows logically from the previous information."),
        D: L("Choice D is incorrect because \"likewise\" illogically signals that the information in this sentence regarding extraterrestrial material is merely similar to the previous information about siderophiles’ abundance in the mantle. Instead, it is a new claim that follows logically from the previous information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-f5a00eff", "f5a00eff", 336)
    },
    {
      id: "rw-tr-2bda9edb",
      sourceQuestionId: "2bda9edb",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1885, Chinese-born California resident Mary Tape became a hero of the Asian American civil rights movement. In January of that year, she won an antidiscrimination case in the California Supreme Court. ______ in April, she wrote an open letter criticizing her local board of education for discrimination. Both actions are remembered today as historic stands against racism.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Later,", "For instance,", "In other words,", "Rather,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Later” logically signals that the letter-writing discussed in this sentence occurred later in a chronological sequence of events than did the antidiscrimination case discussed in the previous sentence."),
      distractors: {
        B: L("Choice B is incorrect because “for instance” illogically signals that the letter-writing discussed in this sentence is an example of the antidiscrimination case discussed in the previous sentence. Instead, the letter-writing is an event that occurred after the court case."),
        C: L("Choice C is incorrect because “in other words” illogically signals that the letter-writing discussed in this sentence is a paraphrase or restatement of the antidiscrimination case discussed in the previous sentence. Instead, the letter-writing is an event that occurred after the court case."),
        D: L("Choice D is incorrect because “rather” illogically signals that the letter-writing discussed in this sentence is an alternative to the antidiscrimination case discussed in the previous sentence. Instead, the letter-writing is an event that occurred after the court case.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-2bda9edb", "2bda9edb", 337)
    },
    {
      id: "rw-tr-332e75bf",
      sourceQuestionId: "332e75bf",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In Annie Dillard’s Pilgrim at Tinker Creek—where, early on, the author marvels at a single goldfish’s delicate fins but later winces when imagining a horde of goldfish laying and eating their own eggs—Dillard struggles to reconcile the complicated juxtapositions of the natural world. ______ nature’s mesmerizing intricacy and pitiless harshness prove inextricably linked for Dillard, like “two branches of the same creek. ”</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["To that end,", "Ultimately,", "Moreover,", "Hence,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Ultimately” logically signals that the information in this sentence—that, for Dillard, nature’s mesmerizing intricacy and pitiless harshness are inextricably linked—is the final conclusion or realization reached after her struggle to reconcile the juxtapositions of the natural world mentioned in the previous sentence."),
      distractors: {
        A: L("Choice A is incorrect because “to that end” illogically signals that linking nature’s intricacy and harshness was Dillard’s deliberate goal or purpose in struggling to reconcile nature’s juxtapositions. Instead, the sentence presents her final realization after that struggle."),
        C: L("Choice C is incorrect because “moreover” illogically signals that the information in this sentence merely adds to Dillard’s struggle to reconcile nature’s juxtapositions mentioned in the previous sentence. Instead, the sentence presents her final realization after that struggle."),
        D: L("Choice D is incorrect because “hence” illogically signals that nature’s intricacy and harshness being linked is a direct consequence of Dillard’s struggle to reconcile the juxtapositions mentioned in the previous sentence. Instead, the sentence presents her final realization after that struggle.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-332e75bf", "332e75bf", 338)
    },
    {
      id: "rw-tr-fc95a352",
      sourceQuestionId: "fc95a352",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When designing costumes for film, American artist Suttirat Larlarb typically custom fits the garments to each actor. ______ for the film Sunshine, in which astronauts must reignite a dying Sun, she designed a golden spacesuit and had a factory reproduce it in a few standard sizes; lacking a tailor-made quality, the final creations reflected the ungainliness of actual spacesuits.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Nevertheless,", "Thus,", "Likewise,", "Moreover,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Nevertheless” logically signals that the information in this sentence—that the spacesuits Suttirat Larlarb designed for the film Sunshine were made in standard sizes in a factory—presents a notable exception to Larlarb’s typical approach of custom-fitting garments to actors, which is described in the previous sentence."),
      distractors: {
        B: L("Choice B is incorrect because “thus” illogically signals that the information in this sentence is a result or consequence of the previous information about Larlarb’s typical approach of custom-fitting garments to actors. Instead, it presents a notable exception to Larlarb’s typical approach."),
        C: L("Choice C is incorrect because “likewise” illogically signals that the information in this sentence is similar to the previous information about Larlarb’s typical approach of custom-fitting garments to actors. Instead, it presents a notable exception to Larlarb’s typical approach."),
        D: L("Choice D is incorrect because “moreover” illogically signals that the information in this sentence merely adds to the previous information about Larlarb’s typical approach of custom-fitting garments to actors. Instead, it presents a notable exception to Larlarb’s typical approach.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-fc95a352", "fc95a352", 343)
    },
    {
      id: "rw-tr-42d92dea",
      sourceQuestionId: "42d92dea",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Before it unveiled a massive new gallery in 2009, the Art Institute of Chicago was only able to display about 5% of its art collection. ______ the museum is able to display close to 30% of its collection.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Additionally,", "For example,", "Nevertheless,", "Today,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Today\" logically signals that the information in the sentence—that the museum is able to display close to 30% of its collection—is true of the Art Institute of Chicago as it exists in the present day after the previously mentioned unveiling of the massive new gallery in 2009."),
      distractors: {
        A: L("Choice A is incorrect because \"additionally\" illogically signals that the information in the sentence is merely an additional fact related to the information about the museum before the new gallery opened. Instead, the sentence is about the museum in the present day after the new gallery opened."),
        B: L("Choice B is incorrect because \"for example\" illogically signals that the information in the sentence exemplifies the previous information about the museum before the new gallery opened. Instead, the sentence is about the museum in the present day after the new gallery opened."),
        C: L("Choice C is incorrect because \"nevertheless\" illogically signals that the information in the sentence is true despite the previous information about the museum before the new gallery opened. Instead, the sentence is about the museum in the present day after the new gallery opened.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-42d92dea", "42d92dea", 352)
    },
    {
      id: "rw-tr-5803befc",
      sourceQuestionId: "5803befc",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Resins play several important roles in maintaining the health of conifers and many other kinds of trees. ______ resins quickly seal wounds, which helps prevent harmful insects and fungi from entering trees. These sticky substances also help trees retain water that is needed for them to survive.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "Regardless,", "Next,", "For example,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “For example” logically signals that the information in this sentence—that resins quickly seal wounds to help prevent harmful insects and fungi from entering trees—provides a specific example to support the previous sentence’s claim about resins playing several important roles in maintaining tree health."),
      distractors: {
        A: L("Choice A is incorrect because “however” illogically signals that the information in this sentence contrasts with the previous claim about resins playing several important roles in maintaining tree health. Instead, the sentence provides a specific example of one such role."),
        B: L("Choice B is incorrect because “regardless” illogically signals that the information in this sentence is true despite the previous claim about resins playing several important roles in maintaining tree health. Instead, the sentence provides a specific example of one such role."),
        C: L("Choice C is incorrect because “next” illogically signals that the information in this sentence is the next step in a process. Instead, the sentence provides a specific example to support the previous claim that resins play several important roles in maintaining tree health.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-5803befc", "5803befc", 353)
    },
    {
      id: "rw-tr-87d8a2ff",
      sourceQuestionId: "87d8a2ff",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>During a 2021 launch, Rocket Labs’ Electron rocket experienced an unexpected failure: its second-stage booster shut down suddenly after ignition. ______ instead of downplaying the incident, Rocket Labs’ CEO publicly acknowledged what happened and apologized for the loss of the rocket’s payload, which had consisted of two satellites.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Afterward,", "Additionally,", "Indeed,", "Similarly,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Afterward” logically signals that the events described in this sentence—the CEO’s public acknowledgment and apology—occurred after the rocket booster’s failure and are part of a chronological sequence of events."),
      distractors: {
        B: L("Choice B is incorrect because “additionally” illogically signals that the events described in this sentence merely occurred in addition to the rocket booster’s failure. Instead, they occurred after the rocket booster’s failure and are part of a chronological sequence of events."),
        C: L("Choice C is incorrect because “indeed” illogically signals that the events described in this sentence emphasize or strengthen a statement made in the previous sentence. Instead, they occurred after the rocket booster’s failure and are part of a chronological sequence of events."),
        D: L("Choice D is incorrect because “similarly” illogically signals that the events described in this sentence are similar to the rocket booster’s failure. Instead, they occurred after the rocket booster’s failure and are part of a chronological sequence of events.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-87d8a2ff", "87d8a2ff", 354)
    },
    {
      id: "rw-tr-855247c7",
      sourceQuestionId: "855247c7",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Mary Ellen Pleasant, a successful entrepreneur during the gold rush era, earned the moniker “Mother of Human Rights in California” after successfully challenging discrimination in the state. ______ in 1866, she sued a streetcar company for denying her and other Black riders service, a suit she eventually won when the California Supreme Court declared it illegal for carriers to exclude passengers based on race.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For this reason,", "Then,", "In addition,", "Specifically,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Specifically\" logically signals that the information about Pleasant’s 1866 lawsuit provides specific, precise details elaborating on the previous point that Pleasant successfully challenged discrimination in California."),
      distractors: {
        A: L("Choice A is incorrect because \"for this reason\" illogically signals that Pleasant’s 1866 lawsuit was a result of her successful challenge to discrimination in California. Instead, this sentence provides specific details elaborating on her challenge to discrimination in the state."),
        B: L("Choice B is incorrect because \"then\" illogically signals that Pleasant’s 1866 lawsuit was subsequent to or resulted from her successful challenge to discrimination in California. Instead, this sentence provides specific, precise details elaborating on how she challenged discrimination in the state."),
        C: L("Choice C is incorrect because \"in addition\" illogically signals that the information about Pleasant’s 1866 lawsuit is merely additional to the previous point that Pleasant successfully challenged discrimination in California. Instead, this sentence provides specific details elaborating on how she did so.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-855247c7", "855247c7", 355)
    },
    {
      id: "rw-tr-a3bf0a9d",
      sourceQuestionId: "a3bf0a9d",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 2021, a model developed by astrophysicist Catherine Zucker and her research team revealed that the same supernovas responsible for the creation and ongoing expansion of the Local Bubble—a 14-million-year-old cavity in the Milky Way—are likely responsible for the formation of new stars. ______ this model detailed how the bubble’s expansion trapped interstellar clouds of gas and dust that became stars upon their eventual collapse.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Hence,", "However,", "Admittedly,", "Specifically,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Specifically\" logically signals that the information in this sentence—that the Local Bubble’s expansion trapped clouds of gas and dust that formed new stars—provides specific, precise details elaborating on the more general information in the previous sentence about the relationship between the Local Bubble’s expansion and the formation of new stars."),
      distractors: {
        A: L("Choice A is incorrect because \"hence\" illogically signals that the information in this sentence is a result of the information in the previous sentence about the relationship between the Local Bubble’s expansion and the formation of new stars. Instead, this sentence provides specific, precise details elaborating on that information."),
        B: L("Choice B is incorrect because \"however\" illogically signals that the information in this sentence contrasts with the information in the previous sentence about the relationship between the Local Bubble’s expansion and the formation of new stars. Instead, this sentence provides specific, precise details elaborating on that information."),
        C: L("Choice C is incorrect because \"admittedly\" illogically signals that the information in this sentence provides an exception or caveat to the previous information about the relationship between the Local Bubble’s expansion and the formation of new stars. Instead, this sentence provides specific, precise details elaborating on that information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-a3bf0a9d", "a3bf0a9d", 359)
    },
    {
      id: "rw-tr-4154a7a3",
      sourceQuestionId: "4154a7a3",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1891, dancer and choreographer Loie Fuller first performed her celebrated Serpentine Dance, artfully twirling her long, flowing skirt to create striking visual effects. ______ in 1896, cinema pioneers Auguste and Louis Lumière made a groundbreaking short film of Fuller’s dance.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["However,", "In conclusion,", "Later,", "In other words,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Later” logically signals that the event discussed in this sentence—the creation of the short film featuring Fuller’s dance—is a related event that occurred after the event discussed in the previous sentence (the 1891 debut of the dance)."),
      distractors: {
        A: L("Choice A is incorrect because “however” illogically signals that the information in this sentence contrasts with the information in the previous sentence. Instead, the creation of the short film is a related event that followed the event discussed in the previous sentence."),
        B: L("Choice B is incorrect because “in conclusion” illogically signals that the information in this sentence concludes or summarizes the information in the previous sentence. Instead, the creation of the short film is a related event that followed the event discussed in the previous sentence."),
        D: L("Choice D is incorrect because “in other words” illogically signals that the information in this sentence is a paraphrase or restatement of the information in the previous sentence. Instead, the creation of the short film is a related event that followed the event discussed in the previous sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-4154a7a3", "4154a7a3", 362)
    },
    {
      id: "rw-tr-4703eafb",
      sourceQuestionId: "4703eafb",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Following the American Revolutionary War, North American foodways underwent a radical transformation, fueled in large part by spiking consumer demand for certain grains. The cultivation, trade, and transportation of maize and wheat, ______ reconfigured the continent’s existing regional foodways into a globally oriented food system.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in particular,", "alternatively,", "by comparison,", "second of all,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"In particular\" logically signals that the information in this sentence—that maize and wheat supply chains transformed North American foodways into a global food system—provides specific, precise details elaborating on the more general information in the previous sentence about the transformation of North American foodways (with maize and wheat the \"certain grains\" at the center of it)."),
      distractors: {
        B: L("Choice B is incorrect because \"alternatively\" illogically signals that the information in this sentence is an alternative option to the previous information about the transformation of North American foodways. Instead, the roles of maize and wheat in creating a global food system are specific, precise details elaborating on that information."),
        C: L("Choice C is incorrect because \"by comparison\" illogically signals that the information in this sentence is being compared to the previous information about the transformation of North American foodways. Instead, the roles of maize and wheat in creating a global food system are specific, precise details elaborating on that information."),
        D: L("Choice D is incorrect because \"second of all\" illogically signals that the information in this sentence is a second, separate claim from the previous claim that North American foodways were transformed. Instead, the roles of maize and wheat in creating a global food system are specific, precise details elaborating on that information, rather than a separate claim.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-4703eafb", "4703eafb", 363)
    },
    {
      id: "rw-tr-b5a399f1",
      sourceQuestionId: "b5a399f1",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Following the Mata Ortiz pottery technique, Mexican sculptor Juan Quezada Celado starts by creating the base of the pot with a slab of clay. ______ he builds the pot walls by layering coils of clay around the perimeter of the base. Celado then smooths out the pot’s walls with a hacksaw blade. At last, the pot is ready to be painted.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For example,", "However,", "By contrast,", "Next,"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"Next\" logically signals that the information in this sentence—which explains how Celado builds the pot’s walls—is the next step in Celado’s pot creation process. The sentences that follow further signal this information by completing the process."),
      distractors: {
        A: L("Choice A is incorrect because \"for example\" illogically signals that the information about Celado building pot walls in this sentence exemplifies the information in the previous sentence about how Celado’s pot creation process begins. Instead, it is the next step in this process."),
        B: L("Choice B is incorrect because \"however\" illogically signals that the information in this sentence contrasts with the information in the previous sentence about how Celado’s pot creation process begins. Instead, it is the next step in this process."),
        C: L("Choice C is incorrect because \"by contrast\" illogically signals that the information in this sentence contrasts with the information in the previous sentence about how Celado’s pot creation process begins. Instead, it is the next step in this process.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b5a399f1", "b5a399f1", 364)
    },
    {
      id: "rw-tr-9c78f702",
      sourceQuestionId: "9c78f702",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Phytoplankton play a crucial role in the ocean’s uptake of carbon from the atmosphere. When alive, these tiny marine organisms absorb atmospheric carbon via photosynthesis. ______ after they die, the phytoplankton sink to the seafloor, where the carbon in their cells gets stored in sediment, preventing it from cycling back into the atmosphere.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Specifically,", "By contrast,", "Nevertheless,", "Then,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Then” logically signals that the event described in this sentence—carbon in phytoplankton cells being trapped in sediment after the organisms have died—occurs later in a chronological sequence than the event described in the previous sentence (phytoplankton absorbing carbon while alive)."),
      distractors: {
        A: L("Choice A is incorrect because “specifically” illogically signals that the information that follows provides specific, precise details elaborating on the previous information about what phytoplankton do when alive. Instead, this sentence explains what happens after phytoplankton die—a later step in the chronological sequence of events."),
        B: L("Choice B is incorrect because “by contrast” illogically signals that the information that follows contrasts with the previous information about what phytoplankton do when alive. Instead, this sentence explains what happens after phytoplankton die—a later step in the chronological sequence of events. There is no contrast: in both life and death, phytoplankton contribute to the ocean’s carbon uptake."),
        C: L("Choice C is incorrect because “nevertheless” illogically signals that the information that follows is in spite of the previous information about what phytoplankton do when alive. Instead, this sentence explains what happens after phytoplankton die—a later step in the chronological sequence of events. There is no contrast: in both life and death, phytoplankton contribute to the ocean’s carbon uptake.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-9c78f702", "9c78f702", 365)
    },
    {
      id: "rw-tr-2ba97187",
      sourceQuestionId: "2ba97187",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Upon first approaching artist Kurt Wenner’s Dies Irae, a colorful scene painted on the surface of a cobblestone street in Mantua, Italy, one might assume a deep hole filled with life-sized, classically styled sculptures had opened up in the street. ______ by expertly applying the principles of perspective, Wenner created merely the illusion of depth.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Additionally,", "On the contrary,", "As a result,", "Next,"],
      answer: "B",
      explanation: L("Choice B is the best answer. \"On the contrary\" logically signals that the information in this sentence—that Dies Irae’s appearance of depth is merely an illusion—contrasts with the previous statement about a viewer’s possible assumption regarding the street painting."),
      distractors: {
        A: L("Choice A is incorrect because \"additionally\" illogically signals that this sentence is simply additional information about a viewer’s possible assumption regarding the street painting. Instead, the information about how Wenner achieved the illusion of depth contrasts with the previous sentence’s description of the illusion."),
        C: L("Choice C is incorrect because \"as a result\" illogically signals that the information in this sentence is a result of, or caused by, a viewer’s possible assumption regarding the street painting. Instead, the information about how Wenner achieved the illusion of depth contrasts with the previous sentence’s description of the illusion."),
        D: L("Choice D is incorrect because \"next\" illogically signals that the information in this sentence is the next step in a process. Instead, the information about how Wenner achieved the illusion of depth contrasts with the previous sentence’s description of the illusion.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-2ba97187", "2ba97187", 366)
    },
    {
      id: "rw-tr-b6d9068e",
      sourceQuestionId: "b6d9068e",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>On a chilly spring morning in a Virginia park, as sunlight crested the treetops, Kathrin Swoboda raised her Nikon D500 camera and captured an image that would win the Grand Prize in the 2019 Audubon Photography Awards: a red-winged blackbird, exhaling what appeared to be rings of smoke. ______ the “smoke” was actually the blackbird’s breath hitting the cold morning air as the bird sang.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Furthermore,", "For example,", "Therefore,", "Of course,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Of course” logically signals that the information in this sentence—that the smokelike effect in the image was actually the blackbird’s breath hitting the cold morning air—is an expected or self-evident clarification of the previous description of the bird appearing to exhale rings of smoke."),
      distractors: {
        A: L("Choice A is incorrect because “furthermore” illogically signals that the information in this sentence about the smokelike effect merely adds to the previous description of the image. Instead, the sentence clarifies what produced the smokelike effect in the image."),
        B: L("Choice B is incorrect because “for example” illogically signals that the information in this sentence about the smokelike effect provides a specific example of the previous description of the image. Instead, the sentence clarifies what produced the smokelike effect in the image."),
        C: L("Choice C is incorrect because “therefore” illogically signals that the information in this sentence about the smokelike effect is a result or consequence of the previous description of the image. Instead, the sentence clarifies what produced the smokelike effect in the image.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-b6d9068e", "b6d9068e", 368)
    },
    {
      id: "rw-tr-d3898d32",
      sourceQuestionId: "d3898d32",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Riley Black—the author of critically acclaimed books such as My Beloved Brontosaurus (2013)—is best known for writing about dinosaurs, but she has also conducted hands-on fieldwork. ______ her fieldwork has included paleontological digs in Utah, Montana, and Wyoming, and her dinosaur fossil discoveries can be seen at places such as the Carnegie Museum of Natural History.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Regardless,", "Subsequently,", "Specifically,", "Conversely,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The second sentence provides more specific information about the fieldwork mentioned in the first sentence—that the paleontological digs took place in Utah, Montana, and Wyoming. Therefore, “specifically” fits perfectly in this context."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous sentence. Rather, this sentence agrees with and elaborates on the last sentence by providing more specifics about the fieldwork Black does."),
        B: L("Choice B is incorrect. This choice uses a transition that indicates that an event took place after another event. But the two sentences are not describing different events— instead, this sentence gives more details about the fieldwork discussed in the first sentence."),
        D: L("Choice D is incorrect. This choice uses a disagreement transition. But this sentence doesn’t disagree with the previous sentence. Rather, this sentence agrees with and elaborates on the last sentence by providing more specifics about the fieldwork Black does.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-d3898d32", "d3898d32", 369)
    },
    {
      id: "rw-tr-de0bcf4f",
      sourceQuestionId: "de0bcf4f",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Spanish surrealist Oscar Dominguez, like many of his contemporaries, wanted to incorporate elements of chance and randomness in his artistic process. ______ he employed techniques that produced random, unpredictable results, such as decalcomania, which involved pressing a blank canvas onto a paint-covered surface to generate abstract patterns.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["With this in mind,", "On the contrary,", "In conclusion,", "Regardless,"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"With this in mind\" logically signals that the activity described in this sentence—Dominguez’s use of techniques like decalcomania to produce unpredictable abstract patterns—is a result of his desire to include random elements in his art."),
      distractors: {
        B: L("Choice B is incorrect. \"On the contrary\" illogically signals that the activity in this sentence opposes or is contrary to Dominguez’s desire to use random elements in his art. Instead, his use of decalcomania is a result of that desire."),
        C: L("Choice C is incorrect. \"In conclusion\" illogically signals that the activity in this sentence is a conclusion or summary of Dominguez’s desire to use random elements in his art. Instead, his use of decalcomania is a result of that desire."),
        D: L("Choice D is incorrect. \"Regardless\" illogically signals that the activity in this sentence occurs despite Dominguez’s desire to use random elements in his art. Instead, his use of decalcomania is a result of that desire.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-de0bcf4f", "de0bcf4f", 372)
    },
    {
      id: "rw-tr-ecb31049",
      sourceQuestionId: "ecb31049",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Sun and other stars are powered by nuclear fusion reactions, in which two atoms collide to form a single heavier atom, releasing energy. Scientists have long believed that fusion has the potential to meet humanity’s clean energy needs. ______ prior to December 2022, no fusion reaction in a laboratory setting had ever generated a net energy gain.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For this reason,", "Moreover,", "Specifically,", "That said,"],
      answer: "D",
      explanation: L("Choice D is the best answer. Scientists believe in fusion’s potential as an energy source, but have struggled to actually make it work—in other words, there is a contradiction between scientists’ beliefs and their reality. “That said” is a disagreement transition that works perfectly in this context."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses a cause-and-effect transition, which doesn’t make sense here. Scientists not being able to generate extra energy from lab fusion reactions isn’t an effect of them believing in fusion’s potential."),
        B: L("Choice B is incorrect. This transition indicates the addition of another supporting point. But this sentence is not adding a supporting point to the previous sentence—scientists not being able to successfully generate energy from fusion isn’t another point in favor of fusion meeting humanity’s clean energy needs."),
        C: L("Choice C is incorrect. This choice uses a transition that introduces or elaborates on a particular example. But this sentence doesn’t give an example of scientists’ belief in fusion’s potential to meet humanity’s clean energy needs—in fact, it contrasts that optimistic belief with the reality of past failures to successfully employ fusion for energy production.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-ecb31049", "ecb31049", 373)
    },
    {
      id: "rw-tr-578ca79a",
      sourceQuestionId: "578ca79a",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Charles Demuth’s 1931 painting Chimney and Water Tower is a classic Precisionist work. The Precisionists strove for cold, machine-like perfection, with crisp lines, geometric shapes, and smooth, brushstroke-free surfaces. ______ Precisionist works often feature skyscrapers, bridges, and factories, highlighting these angular structures’ engineered symmetry.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Accordingly,", "In the end,", "That said,", "However,"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Accordingly” logically signals that the information in this sentence—that Precisionist works often feature angular, symmetrical structures, such as skyscrapers, bridges, and factories—is in accordance with the previous claim about the Precisionist style of “cold, machine-like perfection, with crisp lines, geometric shapes, and smooth, brushstroke-free surfaces. ”"),
      distractors: {
        B: L("Choice B is incorrect because “in the end” illogically signals that the information in this sentence is a final conclusion or summary of the previous claim about the Precisionist style. Instead, the sentence describes features in Precisionist works that are in accordance with that style."),
        C: L("Choice C is incorrect because “that said” illogically signals that the information in this sentence is an exception to or qualification of the previous claim about the Precisionist style. Instead, the sentence describes features in Precisionist works that are in accordance with that style."),
        D: L("Choice D is incorrect because “however” illogically signals that the information in this sentence contrasts with the previous claim about the Precisionist style. Instead, the sentence describes features in Precisionist works that are in accordance with that style.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-578ca79a", "578ca79a", 375)
    },
    {
      id: "rw-tr-eea351c4",
      sourceQuestionId: "eea351c4",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>“Wishcycling”—putting nonrecyclable items into recycling bins under the mistaken belief that those items can be recycled—ultimately does more harm than good. Nonrecyclable items, such as greasy pizza boxes, can contaminate recyclable materials, rendering entire batches unusable. ______ nonrecyclable products can damage recycling plants’ machinery.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Fittingly,", "On the contrary,", "Moreover,", "Nevertheless,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “Moreover” logically signals that the information in this sentence—that nonrecyclable products can damage machinery—adds to the information in the previous sentence to support the claim in the first sentence of the text. The first sentence indicates that “wishcycling” is harmful, the second sentence gives an example, and this sentence gives another example."),
      distractors: {
        A: L("Choice A is incorrect because “fittingly, ” which means “appropriately, ” illogically signals that it is fitting or appropriate that nonrecyclable products can damage machinery, which doesn’t make sense in this context. Instead, this sentence adds another example of the potential harm caused by “wishcycling. ”"),
        B: L("Choice B is incorrect because “on the contrary” illogically signals that this sentence provides information contrary to the information in the previous sentence. Instead, this sentence adds another example of the potential harm caused by “wishcycling. ”"),
        D: L("Choice D is incorrect because “nevertheless” illogically signals that this sentence provides information that is true in spite of the information in the previous sentence. Instead, this sentence adds another example of the potential harm caused by “wishcycling. ”")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-eea351c4", "eea351c4", 377)
    },
    {
      id: "rw-tr-0205e563",
      sourceQuestionId: "0205e563",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>At two weeks old, the time their critical socialization period begins, wolves can smell but cannot yet see or hear. Domesticated dogs, ______ can see, hear, and smell by the end of two weeks. This relative lack of sensory input may help explain why wolves behave so differently around humans than dogs do: from a very young age, wolves are more wary and less exploratory.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["in other words,", "for instance,", "by contrast,", "accordingly,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “By contrast” logically signals that the information in this sentence—that dogs can see, hear, and smell by the end of two weeks—contrasts with the preceding information (that wolves can smell but not see or hear at the same age)."),
      distractors: {
        A: L("Choice A is incorrect because “in other words” illogically signals that the information about domesticated dogs in this sentence paraphrases the information about wolves in the previous sentence. Instead, the information about dogs contrasts with what came before."),
        B: L("Choice B is incorrect because “for instance” illogically signals that the information about domesticated dogs in this sentence exemplifies the information about wolves in the previous sentence. Instead, the information about dogs contrasts with what came before."),
        D: L("Choice D is incorrect because “accordingly” illogically signals that the information about domesticated dogs in this sentence is in accordance with, or results from, the information about wolves in the previous sentence. Instead, the information about dogs contrasts with what came before.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-0205e563", "0205e563", 380)
    },
    {
      id: "rw-tr-39d1a519",
      sourceQuestionId: "39d1a519",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>To discover which fruit varieties were grown in Italy’s Umbria region before the introduction of industrial farming, botanist Isabella Dalla Ragione often turns to centuries-old lists of cooking ingredients. ______ she analyzes Renaissance paintings of Umbria, as they can provide accurate representations of fruits that were grown there long ago.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["In sum,", "Instead,", "Thus,", "Additionally,"],
      answer: "D",
      explanation: L("Choice D is the best answer. “Additionally” logically signals that the painting analysis discussed in this sentence is an additional part of the botany research discussed in the previous sentence. That is, to research which fruits Umbrians grew in the past, the botanist analyzes old paintings in addition to looking at old lists of ingredients."),
      distractors: {
        A: L("Choice A is incorrect because “in sum” illogically signals that the painting analysis discussed in this sentence is a concluding summary of the botany research discussed in the previous sentence. Instead, the painting analysis is an additional part of that research."),
        B: L("Choice B is incorrect because “instead” illogically signals that the painting analysis discussed in this sentence is an alternative to the botany research discussed in the previous sentence. Rather, the painting analysis is an additional part of that research."),
        C: L("Choice C is incorrect because “thus” illogically signals that the painting analysis discussed in this sentence is a result of the botany research discussed in the previous sentence. Instead, the painting analysis is an additional part of that research.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-39d1a519", "39d1a519", 386)
    },
    {
      id: "rw-tr-420dea42",
      sourceQuestionId: "420dea42",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>A blend of gabardine and wool, the material for Elvis Presley’s Gold Vine jumpsuit was flexible enough to allow the singer to perform his signature dance moves. ______ the added weight of the suit’s swirling vines made of gold rhinestones likely limited Elvis’s mobility to some degree.</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["For this reason,", "Firstly,", "However,", "In other words,"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"However\" logically signals that the claim in this sentence—that the weight of the gold rhinestones likely limited Elvis’s mobility—contrasts with the previous information about the material being flexible enough for Elvis’s dance moves."),
      distractors: {
        A: L("Choice A is incorrect because \"for this reason\" illogically signals that the claim in this sentence is caused by the previous information about the material being flexible enough for Elvis’s dance moves. Instead, the claim that the weight of the suit’s rhinestones limited movement contrasts with the previous information about the jumpsuit’s flexibility."),
        B: L("Choice B is incorrect because \"firstly\" illogically signals that the claim in this sentence is the first in a series of claims about the jumpsuit being flexible enough for Elvis’s dance moves. Instead, the claim that the weight of the suit’s rhinestones limited movement contrasts with the previous information about the jumpsuit’s flexibility."),
        D: L("Choice D is incorrect because \"in other words\" illogically signals that the claim in this sentence is a paraphrase or restatement of the previous information about the material being flexible enough for Elvis’s dance moves. Instead, the claim that the weight of the suit’s rhinestones limited movement contrasts with the previous information about the jumpsuit’s flexibility.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-420dea42", "420dea42", 387)
    },
    {
      id: "rw-tr-6916c8e5",
      sourceQuestionId: "6916c8e5",
      skillId: "rw.ei.transitions", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Laetitia Ky’s hair is her art. Inspired by hairstyles from various African tribes, the Ivorian artist uses wire and thread to sculpt her hair into all kinds of shapes. ______ she once made her hair into the shape of the continent of Africa—including the island of Madagascar!</p>",
      stem: "Which choice completes the text with the most logical transition?",
      options: ["Soon,", "Elsewhere,", "For example,", "However,"],
      answer: "C",
      explanation: L("Choice C is the best answer. “For example” logically signals that the following information about Ky—that she once shaped her hair to look like Africa—is an example supporting the previous statement that she makes different shapes with her hair."),
      distractors: {
        A: L("Choice A is incorrect because “soon” illogically signals that the event described in this sentence occurred soon after the statement about Ky making different shapes with her hair. Instead, the sentence provides an example of one of these shapes."),
        B: L("Choice B is incorrect because “elsewhere” illogically signals that the event described in this sentence occurred in a different place than the statement about Ky making different shapes with her hair. Instead, the sentence provides an example of one of these shapes."),
        D: L("Choice D is incorrect because “however” illogically signals that the information in this sentence contrasts with the statement that Ky makes different shapes with her hair. Instead, the sentence provides an example of one of these shapes.")
      },
      hints: [], calculator: false,
      meta: SM("rw-tr-6916c8e5", "6916c8e5", 389)
    }
  ]);

})();
