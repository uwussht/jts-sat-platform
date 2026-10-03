/* Reading and Writing — Standard English Conventions. 421 SAT question-bank items. */
/*
   SAT subtopics in this file:
   - Boundaries (213)
   - Form, Structure, and Sense (208)

   This replaces the previous 20 original Standard English Conventions items.
   Source Question IDs, difficulty levels, answer choices, correct answers, and
   source rationales are preserved from the supplied SAT question-bank PDF.

   Language note: the source provides English explanations only. L() intentionally
   falls back to the English source explanation for EN/RU/KK instead of inventing translations.
*/

(function () {
  var M = JTS.data.jtsMeta;
  var STEM = "Which choice completes the text so that it conforms to the conventions of Standard English?";
  function L(en) { return { en: en, ru: en, kk: en }; }
  function SM(id, sourceQuestionId, sourcePage) {
    var base = {};
    try { base = (typeof M === "function" ? (M(id) || {}) : {}); } catch (e) { base = {}; }
    base.sourceQuestionId = sourceQuestionId;
    base.sourcePage = sourcePage;
    base.source = "SAT Question Bank PDF";
    return base;
  }

  /* ================= rw.sec.boundaries — Boundaries (213) ================= */
  JTS.data.addQuestions([
    {
      id: "rw-bd-de55ec71",
      sourceQuestionId: "de55ec71",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Generations of mystery and horror ______ have been influenced by the dark, gothic stories of celebrated American author Edgar Allan Poe (1809–1849).</p>",
      stem: STEM,
      options: ["writers", "writers,", "writers—", "writers;"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation between a subject and a verb. When, as in this case, a subject (“Generations of mystery and horror writers”) is immediately followed by a verb (“have been influenced”), no punctuation is needed."),
      distractors: {
        B: L("Choice B is incorrect because no punctuation is needed between the subject and the verb."),
        C: L("Choice C is incorrect because no punctuation is needed between the subject and the verb."),
        D: L("Choice D is incorrect because no punctuation is needed between the subject and the verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-de55ec71", "de55ec71", 1)
    },
    {
      id: "rw-bd-c3397d25",
      sourceQuestionId: "c3397d25",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Since the nineteenth century, Egyptologists have commonly divided ancient Egyptian history into three primary ______ Old Kingdom (2700–2200 BCE), the Middle Kingdom (2050–1800 BCE), and the New Kingdom (1550–1100 BCE). Some historians, however, criticize the names of these periods for revealing more about the culture of the mainly European Egyptologists than that of ancient Egypt itself.</p>",
      stem: STEM,
      options: ["periods. The", "periods: the", "periods; the", "periods, the"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between a main clause and an enumerated series. In this choice, a colon is correctly used after the main clause (“Since...periods”) to introduce the series identifying the three primary periods of ancient Egyptian history."),
      distractors: {
        A: L("Choice A is incorrect because placing a period after “periods” results in a rhetorically unacceptable sentence fragment beginning with “the Old Kingdom.”"),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to introduce a series. A semicolon is conventionally used to join two main clauses or to separate items in a complex series, neither of which is the case here."),
        D: L("Choice D is incorrect because a comma is not conventionally used to mark the boundary between the main clause (“Since...periods”) and an enumerated series (“the Old Kingdom...(1550–1100 BCE)”) that contains internal commas. Using a comma in this way creates ambiguity about which commas separate elements in the series and which mark other boundaries in the sentence, making the colon the best choice.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c3397d25", "c3397d25", 2)
    },
    {
      id: "rw-bd-89fbc3eb",
      sourceQuestionId: "89fbc3eb",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Mission 66 initiative, which was approved by Congress in 1956, represented a major investment in the infrastructure of overburdened national ______ it prioritized physical improvements to the parks’ roads, utilities, employee housing, and visitor facilities while also establishing educational programming for the public.</p>",
      stem: STEM,
      options: ["parks and", "parks", "parks;", "parks,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice uses a semicolon to correctly join the first main clause (“The Mission…parks”) and the second main clause that begins with “it.”"),
      distractors: {
        A: L("Choice A is incorrect. When coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        B: L("Choice B is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-89fbc3eb", "89fbc3eb", 4)
    },
    {
      id: "rw-bd-960dec02",
      sourceQuestionId: "960dec02",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A recent study tracked the number of bee species present in twenty-seven New York apple orchards over a ten-year period. ______ found that when wild growth near an orchard was cleared, the number of different bee species visiting the orchard decreased.</p>",
      stem: STEM,
      options: ["Entomologist Heather Grab:", "Entomologist, Heather Grab,", "Entomologist Heather Grab", "Entomologist Heather Grab,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between a name and title and between a subject and a verb. No punctuation is needed between the proper noun “Heather Grab” and “entomologist,” the title that describes Grab. Additionally, no punctuation is needed between the sentence’s subject (“Entomologist Heather Grab”) and the main verb (“found”) that indicates what Grab did."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the subject and the verb."),
        B: L("Choice B is incorrect because no punctuation is needed. Setting the entomologist’s name off with commas suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case."),
        D: L("Choice D is incorrect because no punctuation is needed between the subject and the verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-960dec02", "960dec02", 5)
    },
    {
      id: "rw-bd-4b0c7b62",
      sourceQuestionId: "4b0c7b62",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The algaita is a double reed wind instrument from West Africa. The reed of a wind instrument is the mouthpiece ______ A double reed contains two pieces of cane that vibrate and produce sound as air passes between them.</p>",
      stem: STEM,
      options: ["where sound is made?", "where is sound made.", "where sound is made.", "where is sound made?"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a period to punctuate a declarative sentence (\"the reed of a wind instrument is the mouthpiece\") that ends with a prepositional phrase (\"where sound is made\")."),
      distractors: {
        A: L("Choice A is incorrect. It’s unconventional to use a question mark to punctuate a declarative sentence."),
        B: L("Choice B is incorrect. The structure requires that the sentence continue as a declarative clause, not end with an interrogative clause."),
        D: L("Choice D is incorrect. The structure requires that the sentence continue as a declarative clause and end with a period, not end with an interrogative clause and a question mark.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-4b0c7b62", "4b0c7b62", 7)
    },
    {
      id: "rw-bd-7f226b4b",
      sourceQuestionId: "7f226b4b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In a 2023 study, researchers documented a fascinating behavior in the aquatic plant Elodea densa. When exposed to low levels of light, the plant’s ______ the cellular organs that generate energy from light—reshuffled to form a tightly packed, glass-like surface ideal for collecting more light.</p>",
      stem: STEM,
      options: ["chloroplasts", "chloroplasts;", "chloroplasts,", "chloroplasts—"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The dash after \"chloroplasts\" pairs with the dash after \"from light\" to separate the supplementary element \"the cellular organs that generate energy from light\" from the rest of the sentence. This supplementary element functions to define the term \"chloroplasts,\" and the pair of dashes indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because a semicolon can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because a comma can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-7f226b4b", "7f226b4b", 13)
    },
    {
      id: "rw-bd-74ce2f05",
      sourceQuestionId: "74ce2f05",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A study led by scientist Rebecca Kirby at the University of Wisconsin–Madison found that black bears that eat human food before hibernation have increased levels of a rare carbon isotope, ______ due to the higher 13 C levels in corn and cane sugar. Bears with these elevated levels were also found to have much shorter hibernation periods on average.</p>",
      stem: STEM,
      options: ["carbon-13, ( 13 C)", "carbon-13 ( 13 C)", "carbon-13, ( 13 C),", "carbon-13 ( 13 C),"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The comma after “(13C)” pairs with the comma after “isotope” to separate the supplementary element “carbon-13 (13C)” from the rest of the sentence. This supplementary element defines the “rare carbon isotope,” and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the supplementary element “carbon-13 (13C)” from the rest of the sentence."),
        B: L("Choice B is incorrect because it fails to use appropriate punctuation to separate the supplementary element “carbon-13 (13C)” from the rest of the sentence."),
        C: L("Choice C is incorrect because it fails to use appropriate punctuation to separate the supplementary element “carbon-13 (13C)” from the rest of the sentence. The comma after “carbon-13” isn’t necessary because the parentheses around “13C” already separate this element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-74ce2f05", "74ce2f05", 14)
    },
    {
      id: "rw-bd-a7c85001",
      sourceQuestionId: "a7c85001",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Researchers Amit Kumar and Nicholas Epley investigated how ______ In a series of experiments conducted in 2022, they found that people performing small acts of kindness underestimated the positive effect their actions had on others.</p>",
      stem: STEM,
      options: ["do people perceive acts of kindness.", "do people perceive acts of kindness?", "people perceive acts of kindness?", "people perceive acts of kindness."],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a period to punctuate a declarative sentence that asks an indirect question (\"Researchers Amit Kumar and Nicholas Epley investigated how people perceive acts of kindness\")."),
      distractors: {
        A: L("Choice A is incorrect. The structure of the sentence requires a declarative clause at the end of the sentence that states what Kumar and Epley did, not an interrogative clause that asks a direct question, such as \"how do people perceive acts of kindness.\""),
        B: L("Choice B is incorrect. The structure of the sentence requires a declarative clause at the end of the sentence that states what Kumar and Epley did, not an interrogative clause that asks a direct question, such as \"how do people perceive acts of kindness?\""),
        C: L("Choice C is incorrect. It’s unconventional to use a question mark in this way to punctuate a declarative sentence that asks an indirect question, such as \"Researchers…kindness.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a7c85001", "a7c85001", 16)
    },
    {
      id: "rw-bd-eb95235b",
      sourceQuestionId: "eb95235b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Limón technique, developed by Mexican-born dancer and choreographer Jose Limón, is known for its emphasis on breath control and its interplay of weight and ______ dancers may explore, for example, the moment of mid-air suspension at the top of a jump.</p>",
      stem: STEM,
      options: ["weightlessness", "weightlessness which", "weightlessness,", "weightlessness;"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (\"The Limón…weightlessness\") and the second main clause (\"dancers…jump\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect. The relative pronoun \"which\" can’t be used in this way to join two main clauses."),
        C: L("Choice C is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-eb95235b", "eb95235b", 17)
    },
    {
      id: "rw-bd-adf210e7",
      sourceQuestionId: "adf210e7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The haiku-like poems of Tomas Tranströmer, which present nature- and dream-influenced images in crisp, spare language, have earned the Swedish poet praise from leading contemporary ______ them Nigerian American essayist and novelist Teju Cole, who has written that Tranströmer’s works “contain a luminous simplicity.”</p>",
      stem: STEM,
      options: ["writers. Among", "writers among", "writers; among", "writers, among"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between a main clause and a supplementary phrase. This choice correctly uses a comma to mark the boundary between the main clause (“The haiku-like…writers”) and the supplementary phrase (“among… Cole”) that specifies a contemporary writer who has praised Tomas Tranströmer’s haiku-like poems."),
      distractors: {
        A: L("Choice A is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “among.”"),
        B: L("Choice B is incorrect because it fails to mark the boundary between the main clause and the supplementary phrase with appropriate punctuation."),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to join the main clause (“The haiku-like…writers”) and the supplementary phrase (“among…Cole”).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-adf210e7", "adf210e7", 18)
    },
    {
      id: "rw-bd-707461d8",
      sourceQuestionId: "707461d8",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 2021, Mexican biologist Martha Lydia Macías-Rubalcava led a review of the scientific literature related to endophytic fungi (i.e., fungi that live inside a host ______ researching 120 endophytic fungi–produced compounds, she found that their phytotoxicity can make them viable alternatives to chemical herbicides for controlling weeds.</p>",
      stem: STEM,
      options: ["plant). By", "plant), by", "plant) and by", "plant) by"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"In…plant\") and another (\"By…weeds\"). The prepositional phrase beginning with \"by\" modifies the subject of the next sentence, \"she,\" which refers to Macías-Rubalcava."),
      distractors: {
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to join two sentences."),
        C: L("Choice C is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join two sentences."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two sentences are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-707461d8", "707461d8", 21)
    },
    {
      id: "rw-bd-13fcf575",
      sourceQuestionId: "13fcf575",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Roughly 300 nights a year, when the cold air descending from the Andes Mountains meets the warm air rising from Venezuela’s coastal Lake Maracaibo, the result is a spectacular lightning storm, its strikes so bright, so localized, and so ______ that it has become known as “Maracaibo’s Lighthouse.”</p>",
      stem: STEM,
      options: ["dependable:", "dependable;", "dependable", "dependable,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of an integrated relative clause. No punctuation is needed before the relative clause beginning with \"that\" because the content of the relative clause (\"that...Lighthouse\") is integral to the meaning of the coordinated adjectival phrase (\"so bright, so localized, and so dependable\") that it modifies."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the coordinated adjectival phrase (\"so bright...dependable\") and the integrated relative clause that modifies it."),
        B: L("Choice B is incorrect because no punctuation is needed between the coordinated adjectival phrase (\"so bright...dependable\") and the integrated relative clause that modifies it."),
        D: L("Choice D is incorrect because no punctuation is needed between the coordinated adjectival phrase (\"so bright...dependable\") and the integrated relative clause that modifies it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-13fcf575", "13fcf575", 23)
    },
    {
      id: "rw-bd-940ff6f7",
      sourceQuestionId: "940ff6f7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Jamaican British artist Willard Wigan is known for his remarkable ______ so small that they are best viewed through a microscope, Wigan’s sculptures are made from tiny natural materials, such as spiderweb strands.</p>",
      stem: STEM,
      options: ["microsculptures creations", "microsculptures, creations", "microsculptures. Creations", "microsculptures and creations"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation between sentences. In this choice, the period is used to correctly mark the boundary between one sentence (\"Jamaican…microsculptures\") and another (\"Creations…strands\"). The noun phrase beginning with \"creations\" modifies the subject of the next sentence, \"Wigan’s sculptures.\""),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The sentences (\"Jamaican…microsculptures\" and \"Creations…strands\") are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-940ff6f7", "940ff6f7", 24)
    },
    {
      id: "rw-bd-333b2b65",
      sourceQuestionId: "333b2b65",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>While one requires oxygen and one does ______ and anaerobic respiration are both forms of cellular respiration—that is, they are processes by which cells break down glucose to use as energy.</p>",
      stem: STEM,
      options: ["not aerobic", "not. Aerobic", "not, aerobic", "not; aerobic"],
      answer: "C",
      explanation: L("Choice C is the best answer. A comma is the appropriate way to link the dependent clause “While...not” and the independent clause that follows."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a run-on sentence error. “While...not” is a dependent clause, which must be separated from the independent clause that follows with some sort of punctuation."),
        B: L("Choice B is incorrect. This choice creates a sentence fragment. “While one requires oxygen and one does not” isn’t an independent clause, so it can’t stand alone as a complete sentence."),
        D: L("Choice D is incorrect. This choice creates a punctuation error. “While one requires oxygen and one does not” isn’t an independent clause, so it can’t be linked to the clause that follows with a semicolon.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-333b2b65", "333b2b65", 25)
    },
    {
      id: "rw-bd-81f43b85",
      sourceQuestionId: "81f43b85",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>For the past 20 million years, Earth’s magnetic poles in the far north and far south have remained roughly where they are today. This has not always been the ______ throughout geologic history, Earth’s magnetic poles have swapped places several times through a process called polar wandering.</p>",
      stem: STEM,
      options: ["case, though", "case, though,", "case; though,", "case, though;"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. Placing the semicolon after the supplementary adverb “though” correctly indicates that the contrast in the text is between the information in the first sentence (that Earth’s magnetic poles have remained fixed for the past 20 million years) and the initial clause of the second sentence (“This has not always been the case”), rather than between the two clauses of the second sentence."),
      distractors: {
        A: L("Choice A is incorrect. Using the adverb “though” as the head of a subordinate clause illogically indicates that the information in the previous main clause (“This…case”) is contrary to the information in the subordinate clause. Instead, the information in the second clause (that Earth’s magnetic poles have swapped places several times) elaborates on the statement made in the previous clause (that Earth’s magnetic poles are not as fixed as they may seem)."),
        B: L("Choice B is incorrect because it results in a comma splice. Commas can’t be used in this way to punctuate a supplementary word or phrase between two main clauses."),
        C: L("Choice C is incorrect. Using a semicolon after “case” places the adverb “though” inside the second main clause (“throughout…wandering”), illogically indicating that the information in the previous main clause is contrary to the information in the second one. Instead, the information in the second main clause (that Earth’s magnetic poles have swapped places several times) elaborates on the statement made in the previous clause (that Earth’s magnetic poles are not as fixed as they may seem).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-81f43b85", "81f43b85", 26)
    },
    {
      id: "rw-bd-aaa1907f",
      sourceQuestionId: "aaa1907f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>To serve local families during the Great Depression, innovative New York City librarian Pura Belpré offered storytelling in both English and Spanish, an uncommon ______ celebrated el Día de los Tres Reyes Magos, an important community holiday; and put on puppet shows dramatizing Puerto Rican folktales.</p>",
      stem: STEM,
      options: ["practice, at the time", "practice at the time;", "practice, at the time,", "practice at the time,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of elements in a complex series. It’s conventional to use a semicolon to separate items in a complex series with internal punctuation, and in this choice, the semicolon after \"time\" is conventionally used to separate the first item (\"offered…time\") and the second (\"celebrated…holiday\") in the series of activities that librarian Pura Belpré offered. Moreover, the semicolon after \"time\" matches the semicolon used later to separate the second item (\"celebrated...holiday\") and the third (\"and...folktales\") in the series."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the first item and the second item in the complex series. Furthermore, a comma isn’t needed between the noun \"practice\" and the prepositional phrase \"at the time\" because the prepositional phrase is essential to the full meaning of the phrase \"an uncommon practice at the time.\""),
        C: L("Choice C is incorrect because a comma after \"time\" doesn’t match the semicolon used later to separate the second (\"celebrated...holiday\") and third (\"and...folktales\") items in the series. Furthermore, a comma isn’t needed between the noun \"practice\" and the prepositional phrase \"at the time\" because the prepositional phrase is essential to the full meaning of the phrase \"an uncommon practice at the time.\""),
        D: L("Choice D is incorrect because a comma after \"time\" doesn’t match the semicolon used later to separate the second (\"celebrated...holiday\") and third (\"and...folktales\") items in the series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-aaa1907f", "aaa1907f", 30)
    },
    {
      id: "rw-bd-7f48b098",
      sourceQuestionId: "7f48b098",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Photosynthesis, the mechanism by which plants use sunlight to turn carbon dioxide and water into ______ is fueled in part by an enzyme called Photosystem II that harvests energy-giving electrons from water molecules.</p>",
      stem: STEM,
      options: ["nutrients", "nutrients and", "nutrients,", "nutrients—"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The comma after “nutrients” pairs with the comma after “photosynthesis” to separate the supplementary element “the mechanism by which plants use sunlight to turn carbon dioxide and water into nutrients” from the rest of the sentence. This supplementary element functions to define the term “photosynthesis,” and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because a conjunction can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because a dash can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-7f48b098", "7f48b098", 31)
    },
    {
      id: "rw-bd-626a1642",
      sourceQuestionId: "626a1642",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>As a behavioral economist, Katy Milkman of the University of Pennsylvania recognizes that people sometimes make irrational economic decisions. Milkman’s research can thus address anomalies that neoclassical economic ______ assume that people are consistently rational decision-makers—cannot explain.</p>",
      stem: STEM,
      options: ["models—which", "models, which", "models which", "models which—"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. The dashes after \"models\" and \"decision- makers\" correctly separate the supplementary element \"which assume that people are consistently rational decision-makers\" from the rest of the sentence. This punctuation indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        B: L("Choice B is incorrect because a comma can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because it interrupts the sentence at an illogical and grammatically incoherent point. The dash should be placed before \"which,\" not after it, to mark the beginning of the supplementary element.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-626a1642", "626a1642", 32)
    },
    {
      id: "rw-bd-148be4da",
      sourceQuestionId: "148be4da",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Human-made (synthetic) fibers used in clothes and many other consumer products are more durable than most natural plant ______ the manufacture of synthetic fibers requires toxic chemical solvents that can pollute air and water.</p>",
      stem: STEM,
      options: ["fibers,", "fibers but", "fibers", "fibers, but"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction “but” to join the first main clause (“Human-made...fibers”) and the second main clause (“the manufacture...water”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        B: L("Choice B is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-148be4da", "148be4da", 35)
    },
    {
      id: "rw-bd-0f39b19c",
      sourceQuestionId: "0f39b19c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>After a spate of illnesses as a child, Wilma Rudolph was told she might never walk again. Defying all odds, Rudolph didn’t just walk, she ______ the 1960 Summer Olympics in Rome, she won both the 100- and 200-meter dashes and clinched first place for her team in the 4x100-meter relay, becoming the first US woman to win three gold medals in a single Olympics.</p>",
      stem: STEM,
      options: ["ran—fast—during", "ran—fast during", "ran—fast, during", "ran—fast. During"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (“Defying…fast”) and another sentence that begins with a supplementary phrase (“During…Olympics”)."),
      distractors: {
        A: L("Choice A is incorrect. When a dash is present in a sentence (“ran—fast”), it’s not conventional to use another dash (“fast—during”) to mark the boundary between sentences because it creates a potentially confusing sentence. In this context, a period, semicolon, or colon would be clear and more conventional."),
        B: L("Choice B is incorrect because it results in a run-on sentence. The sentences (“Defying…fast”) and (“during…Olympics”) are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-0f39b19c", "0f39b19c", 37)
    },
    {
      id: "rw-bd-f78997cf",
      sourceQuestionId: "f78997cf",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Recent analysis of 32532 Thereus—an outer solar system object orbiting the Sun between Jupiter and Saturn—has determined its color to be gray, suggesting an icy composition. Such interpretations are ultimately ______ the object’s gray coloration may be an incidental effect of radiation, solar wind, or collisions with other objects rather than evidence of its physical makeup.</p>",
      stem: STEM,
      options: ["speculative, though", "speculative, though;", "speculative; though", "speculative, though,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation in a sentence. This choice correctly uses a comma to separate the supplementary adverb \"though\" from the preceding main clause (\"Such interpretations are ultimately speculative\") and uses a semicolon to join the next main clause (\"the object’s...makeup\") to the rest of the sentence. Further, placing the semicolon after \"though\" indicates that the information in the preceding main clause (interpretations of an outer solar system object’s composition based on its color are ultimately speculative) is a qualification of the information in the previous sentence (the composition of an outer solar system object is suggested by its color)."),
      distractors: {
        A: L("Choice A is incorrect because it fails to mark the boundary between the two main clauses with appropriate punctuation."),
        C: L("Choice C is incorrect because placing the semicolon after \"speculative\" illogically indicates that the information in the next main clause (\"the object’s...makeup\") is a qualification of the information in the previous clause (\"Such...speculative\")."),
        D: L("Choice D is incorrect because it results in a comma splice. Commas can’t be used in this way to punctuate a supplementary word or phrase between two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-f78997cf", "f78997cf", 41)
    },
    {
      id: "rw-bd-4dcedc31",
      sourceQuestionId: "4dcedc31",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>For scientists to produce new iron nanoparticles of a specific size or strength, they must first be able to monitor reactions between oxygen and existing iron nanoparticles at a near-atomic level of detail. Fortunately, chemistry ______ and his colleagues at Temple University recently developed a new approach that does just that.</p>",
      stem: STEM,
      options: ["professor Yugang Sun", "professor Yugang Sun,", "professor, Yugang Sun,", "professor, Yugang Sun"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation between titles and proper nouns. No punctuation is needed between the proper noun “Yugang Sun” and the title that describes Sun, “chemistry professor.” Furthermore, no punctuation is needed after “Sun” because “chemistry professor Yugang Sun and his colleagues at Temple University” functions as the coordinated subject of the sentence, and together Sun and colleagues performed the action of developing a new approach to producing iron nanoparticles."),
      distractors: {
        B: L("Choice B is incorrect because no punctuation is needed between the proper noun “Yugang Sun” and the coordinated noun phrase “and his colleagues at Temple University.”"),
        C: L("Choice C is incorrect because no punctuation is needed before or after the proper noun “Yugang Sun.” Setting off the professor’s name with commas suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case."),
        D: L("Choice D is incorrect because no punctuation is needed between the title “chemistry professor” and the proper noun “Yugang Sun.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-4dcedc31", "4dcedc31", 51)
    },
    {
      id: "rw-bd-155239cf",
      sourceQuestionId: "155239cf",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>By analyzing ice cores from Greenland and Antarctica, a research team at Sweden’s Lund University discovered evidence of a solar storm that occurred 9,200 years ago. Scientists had previously thought the Sun to be in a relatively “quiet” phase at that ______ the Lund team’s finding suggests otherwise.</p>",
      stem: STEM,
      options: ["time but", "time, but", "time,", "time"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction \"but\" to join the first main clause (\"Scientists...time\") and the second main clause (\"the Lund...otherwise\")."),
      distractors: {
        A: L("Choice A is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-155239cf", "155239cf", 59)
    },
    {
      id: "rw-bd-82a76537",
      sourceQuestionId: "82a76537",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Key-value pairs are an important aspect of JavaScript Object Notation (JSON), an electronic file format for storing and transmitting data. Keys function as labels, while values contain the actual information. In a JSON file storing data about fire belly ______ instance, you could encounter a key such as “species” with the associated value of “Cynops orientalis.”</p>",
      stem: STEM,
      options: ["newts. For", "newts, for", "newts: for", "newts; for"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after “newts” pairs with the comma after “instance” to separate the supplementary element “for instance” from the rest of the sentence. The supplementary element appears between the prepositional phrase (“In…newts”) and the main clause of the sentence (“you…orientalis”) and signals that the sentence is presenting an example of how keys and values function in JSON files."),
      distractors: {
        A: L("Choice A is incorrect because it results in a sentence fragment (“In a JSON file storing data about fire belly newts”)."),
        C: L("Choice C is incorrect because a colon can’t be paired with a comma in this way to separate the supplementary element “for instance” from the rest of the sentence."),
        D: L("Choice D is incorrect because a semicolon can’t be paired with a comma in this way to separate the supplementary element “for instance” from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-82a76537", "82a76537", 60)
    },
    {
      id: "rw-bd-e2f77ae7",
      sourceQuestionId: "e2f77ae7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>That Chaucer’s Canterbury Tales inspired imitators is evident from the existence of three near-contemporary “continuations” of the collection: The Siege of Thebes, which purports to be a new tale told during the pilgrims’ ______ The Tale of Beryn, which depicts the pilgrims as tourists; and The Ploughman’s Tale, which features a minor character from the original work.</p>",
      stem: STEM,
      options: ["return.", "return", "return;", "return,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of elements in a complex series. It’s conventional to use a semicolon to separate items in a complex series with internal punctuation, and in this choice, the semicolon after “return” is conventionally used to separate the first item (“The Siege of Thebes...return”) and the second item (“The Tale of Beryn...tourists”) in the series of tales. Moreover, the semicolon after “return” matches the semicolon used later to separate the second item and the third item (“and The Ploughman’s Tale...work”) in the series."),
      distractors: {
        A: L("Choice A is incorrect because placing a period after “return” results in a rhetorically unacceptable sentence fragment beginning with “The Tale of Beryn.”"),
        B: L("Choice B is incorrect because it fails to use appropriate punctuation to separate the first item and the second item in the complex series."),
        D: L("Choice D is incorrect because a comma after “return” doesn’t match the semicolon used later to separate the second and third items in the series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e2f77ae7", "e2f77ae7", 61)
    },
    {
      id: "rw-bd-9091458d",
      sourceQuestionId: "9091458d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Emperor penguins don’t waddle out of the ocean. They launch themselves at such a high speed that they travel up to two meters before landing. How ______ A layer of microbubbles on their plumage reduces friction as the penguins speed to the surface.</p>",
      stem: STEM,
      options: ["they are able to move so fast!", "are they able to move so fast.", "they are able to move so fast.", "are they able to move so fast?"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a question mark to punctuate the interrogative sentence “how are they able to move so fast?” The interrogative sentence asks a direct question, and the next sentence answers it."),
      distractors: {
        A: L("Choice A is incorrect because the context requires an interrogative sentence. The exclamative sentence “how they are able to move so fast!” emphasizes the penguin’s high rate of speed, but it doesn’t set up the next sentence’s explanation of how the penguins achieve such speeds."),
        B: L("Choice B is incorrect because a period can’t be used in this way to punctuate an interrogative sentence."),
        C: L("Choice C is incorrect because the context requires an interrogative sentence. The exclamative sentence “how they are able to move so fast” emphasizes the penguin’s high rate of speed, but it doesn’t set up the next sentence’s explanation of how the penguins achieve such speeds.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-9091458d", "9091458d", 62)
    },
    {
      id: "rw-bd-ac5536c1",
      sourceQuestionId: "ac5536c1",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Beatrix Potter is perhaps best known for writing and illustrating children’s books such as The Tale of Peter Rabbit (1902), but she also dedicated herself to mycology, the study of ______ more than 350 paintings of the fungal species she observed in nature and submitting her research on spore germination to the Linnean Society of London.</p>",
      stem: STEM,
      options: ["fungi; producing", "fungi. Producing", "fungi producing", "fungi, producing"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between two supplementary phrases following the coordinate clause (“but she…mycology”). This choice correctly uses a comma to mark the boundary between the supplementary noun phrase (“the study of fungi”) that defines the term “mycology” and the supplementary participial phrase (“producing...London”) that provides additional information about the extent to which Potter dedicated herself to mycology."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to join two supplementary phrases following a coordinate clause."),
        B: L("Choice B is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “producing.”"),
        C: L("Choice C is incorrect. The lack of punctuation results in a sentence that illogically suggests that the study of fungi is producing more than 350 paintings.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-ac5536c1", "ac5536c1", 63)
    },
    {
      id: "rw-bd-5bed774c",
      sourceQuestionId: "5bed774c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Philosopher Peter Kivy was a leading figure in musical ______ evidenced by his belief that instead of evoking particular emotions, such as sadness or joy, compositions elicit a listener’s emotional response to the structure and artistry of the music itself, Kivy’s approach to the study of music was decidedly formalist.</p>",
      stem: STEM,
      options: ["aesthetics as", "aesthetics and as", "aesthetics, as", "aesthetics. As"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"Philosopher...aesthetics\") and another (\"As...formalist\"). The long adverbial element \"as evidenced...itself\" modifies the content in the following clause to support the claim that Kivy’s approach was formalist."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The sentences (\"Philosopher...aesthetics\" and \"As…formalist\") are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join sentences."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5bed774c", "5bed774c", 64)
    },
    {
      id: "rw-bd-9c3630b9",
      sourceQuestionId: "9c3630b9",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Using natural debris, such as dried ______ such as plastic bags; and more traditional art supplies, such as tree glue, Ghanaian artist Ed Franklin Gavua creates his striking Yiiiiikakaii African masks, which he hopes can help viewers rethink how waste is used in their communities.</p>",
      stem: STEM,
      options: ["leaves, man-made trash:", "leaves; man-made trash,", "leaves, man-made trash,", "leaves; man-made trash;"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of elements in a complex series. It’s conventional to use a semicolon to separate items in a complex series with internal punctuation, and in this choice, the semicolon after \"leaves\" is conventionally used to separate the first item (\"natural debris, such as dried leaves\") and the second item (\"man-made trash, such as plastic bags\") in the series of materials used by Gavua. Further, the comma after \"trash\" correctly separates the noun phrase \"man-made trash\" from the supplementary phrase (\"such as plastic bags\") that describes it."),
      distractors: {
        A: L("Choice A is incorrect because a comma after \"leaves\" doesn’t match the semicolon used later to separate the second and third items in the series (\"man-made...bags\" and \"and...glue\"). Additionally, it’s not conventional to use a colon in this way to separate a supplementary phrase (\"such as plastic bags\") from the noun phrase it modifies (\"man-made trash\")."),
        C: L("Choice C is incorrect because a comma after \"leaves\" doesn’t match the semicolon used later to separate the second and third items in the series (\"man-made...bags\" and \"and...glue\")."),
        D: L("Choice D is incorrect because it’s not conventional to use a semicolon in this way to separate a supplementary phrase (\"such as plastic bags\") from the noun phrase it modifies (\"man-made trash\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-9c3630b9", "9c3630b9", 66)
    },
    {
      id: "rw-bd-3a2d77d7",
      sourceQuestionId: "3a2d77d7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In the 1950s, novel audio technologies allowed the addition of another instrument to jazz and swing ______ relatively quiet instrument, its full range of sound was finally audible alongside the blaring brass instruments of the time, allowing flautists like Bennie Maupin and Bobbi Humphrey to perform with other jazz greats.</p>",
      stem: STEM,
      options: ["music, the flute, a", "music. The flute, a", "music; the flute, a", "music: the flute. A"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within and between sentences. In this choice, the colon correctly introduces the name of the instrument (the flute) that novel audio technologies allowed to be added to jazz and swing. In addition, the period is used to correctly mark the boundary between one sentence (\"In…flute\") and another (\"A relatively…greats\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. A comma can’t be used in this way to join two main clauses (\"In…quiet instrument\" and \"its…greats\")."),
        B: L("Choice B is incorrect. In standard English, it’s unconventional to form a sentence in this way with two uncoordinated subjects (\"the flute\" and \"its full range of sound\"), and the lack of a clear main subject results in an awkwardly constructed and confusing sentence."),
        C: L("Choice C is incorrect. In standard English, it’s unconventional to form an independent clause in this way with two uncoordinated subjects (\"the flute\" and \"its full range of sound\"), and the lack of a clear main subject results in an awkwardly constructed and confusing clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-3a2d77d7", "3a2d77d7", 70)
    },
    {
      id: "rw-bd-435809d8",
      sourceQuestionId: "435809d8",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>On March 23, 2021, a gust of wind wreaked havoc on global trade. Ever Given, an international shipping container vessel, became lodged in Egypt’s Suez Canal, a major shipping route between Europe and Asia. The vessel took six days to ______ it’s as heavy as two thousand blue whales when fully loaded.</p>",
      stem: STEM,
      options: ["dislodge in part due to its sheer size,", "dislodge, in part due to its sheer size:", "dislodge, in part due to its sheer size,", "dislodge, in part, due to its sheer size"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation between main clauses and a supplementary element. This choice correctly uses a comma to mark the boundary between the main clause (\"The vessel took six days to dislodge\") and the supplementary element (\"in part due to its sheer size\") that provides additional information on why the vessel was difficult to dislodge. Additionally, this choice correctly uses a colon to introduce another main clause that describes the vessel’s size (\"it’s as heavy as two thousand blue whales when fully loaded\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between two main clauses (\"The vessel…size\" and \"it’s…loaded\"). Additionally, it fails to mark the boundary between the main clause (\"The vessel took six days to dislodge\") and the supplementary element (\"in part due to its sheer size\")."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between two main clauses (\"The vessel…size\" and \"it’s…loaded\")."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses (\"The vessel…size\" and \"it’s…loaded\") are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-435809d8", "435809d8", 71)
    },
    {
      id: "rw-bd-b0115ef6",
      sourceQuestionId: "b0115ef6",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Technologies such as microphones and inkjet printers are made using piezoelectric materials, which generate an internal electric field when pressure is applied to them. The toxic nature of some of these materials recently led a team from the University of Sheffield to investigate how ______</p>",
      stem: STEM,
      options: ["could their use be better regulated?", "their use could be better regulated.", "their use could be better regulated?", "could their use be better regulated."],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a period to punctuate a declarative sentence that asks an indirect question (\"The toxic nature of some of these materials recently led a team from the University of Sheffield to investigate how their use could be better regulated\")."),
      distractors: {
        A: L("Choice A is incorrect because the structure requires a period and a declarative clause at the end of the sentence that states what the team investigated, not an interrogative clause that asks a direct question, such as \"how could their use be better regulated?\""),
        C: L("Choice C is incorrect because it’s unconventional to use a question mark in this way to punctuate a declarative sentence."),
        D: L("Choice D is incorrect because the structure requires a declarative clause at the end of the sentence that states what the team investigated, not an interrogative clause that asks a direct question, such as \"how could their use be better regulated?\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b0115ef6", "b0115ef6", 74)
    },
    {
      id: "rw-bd-83898524",
      sourceQuestionId: "83898524",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In addition to advocating for South America’s independence in two political treatises, the Cartagena Manifesto and the Letter from Jamaica, Simón Bolívar personally led armies against the Spanish, liberating three South American territories—New Granada (present-day Colombia and Panama), Venezuela, and Quito (present-day ______ from colonial rule.</p>",
      stem: STEM,
      options: ["Ecuador,)", "Ecuador)", "Ecuador),", "Ecuador)—"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The dash after “Ecuador” and the closing parenthesis pairs with the dash after “territories” to separate the supplementary element (“New…Ecuador”) from the rest of the sentence. The supplementary element specifies the three South American territories that Simón Bolívar liberated, and the pair of dashes indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence. Furthermore, punctuation isn’t needed between “Ecuador” and the closing parenthesis."),
        B: L("Choice B is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because a comma can’t be paired with a dash to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-83898524", "83898524", 76)
    },
    {
      id: "rw-bd-fba5d8d1",
      sourceQuestionId: "fba5d8d1",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In a 2016 study, Eastern Washington University psychologist Amani El-Alayli found that, among the study participants who experienced frisson (a physiological response akin to goosebumps or getting the chills) while listening to music, there was one personality trait that they scored particularly ______ openness to experience.</p>",
      stem: STEM,
      options: ["high. On", "high on;", "high on", "high on:"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between a main clause and a supplementary phrase. In this choice, a colon is correctly used to mark the boundary between the main clause (\"there...on\") and the supplementary phrase (\"openness to experience\") and to introduce the information that identifies which personality trait participants scored especially high on."),
      distractors: {
        A: L("Choice A is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"on\" and separates a necessary preposition from the clause beginning with \"there.\""),
        B: L("Choice B is incorrect because a semicolon can’t be used in this way to join the main clause (\"there...on\") and the supplementary phrase (\"openness to experience\"). A semicolon is conventionally used to join two main clauses, whereas a colon is conventionally used to introduce an element that explains or amplifies the information in the preceding clause, making the colon the better choice in this context."),
        C: L("Choice C is incorrect because it fails to mark the boundary between the main clause (\"there...on\") and the supplementary phrase (\"openness to experience\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-fba5d8d1", "fba5d8d1", 77)
    },
    {
      id: "rw-bd-6fece68e",
      sourceQuestionId: "6fece68e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Emperor Ashoka ruled the Maurya Empire in South Asia from roughly 270 to 232 BCE. He is known for enforcing a moral code called the Law of Piety, which established the sanctity of animal ______ the just treatment of the elderly, and the abolition of the slave trade.</p>",
      stem: STEM,
      options: ["life", "life;", "life:", "life,"],
      answer: "D",
      explanation: L("Choice D is the best answer. Notice that \"the sanctity of animal life\" is the first item in a list of three things. We must use a comma to separate the first two items in the list, just as a comma is used to separate \"the just treatment of the elderly\" and \"the abolition of the slave trade.\""),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a punctuation error. Notice that \"the sanctity of animal life\" is the first item in a list of three things. To appropriately format the list, we need punctuation to separate each item."),
        B: L("Choice B is incorrect. This choice creates a punctuation error. Notice that \"the sanctity of animal life\" is the first item in a list of three things. While semicolons are sometimes used to separate list items, this list uses commas to separate the other list items, and lists must use the same punctuation throughout."),
        C: L("Choice C is incorrect. This choice creates a punctuation error. Notice that \"the sanctity of animal life\" is the first item in a list of three things. While colons can be used to introduce lists, they can’t be used to separate items within a list.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6fece68e", "6fece68e", 80)
    },
    {
      id: "rw-bd-886dc9f9",
      sourceQuestionId: "886dc9f9",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>On July 23, 1854, a clipper ship called the Flying Cloud entered San Francisco ______ left New York Harbor under the guidance of Captain Josiah Perkins Creesy and his wife, navigator Eleanor Creesy, a mere 89 days and 8 hours earlier, the celebrated ship set a record that would stand for 135 years.</p>",
      stem: STEM,
      options: ["Bay and having", "Bay. Having", "Bay, having", "Bay having"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period after “Bay” is used correctly to mark the boundary between one sentence (“On…Bay”) and another sentence that begins with a supplementary phrase (“Having… years”). Here, the supplementary phrase beginning with “having” modifies the subject of the second sentence, “the celebrated ship.”"),
      distractors: {
        A: L("Choice A is incorrect. Without a comma preceding it, the conjunction “and” can’t be used in this way to join sentences."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to join two sentences."),
        D: L("Choice D is incorrect because it results in a run- on sentence. The sentences (“On…Bay” and “having…years”) are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-886dc9f9", "886dc9f9", 81)
    },
    {
      id: "rw-bd-59a246dc",
      sourceQuestionId: "59a246dc",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When external forces are applied to common glass made from silicates, energy builds up around minuscule defects in the material, resulting in fractures. Recently, engineer Erkka Frankberg of Tampere University in Finland used the chemical ______ to make a glassy solid that can withstand higher strain than silicate glass can before fracturing.</p>",
      stem: STEM,
      options: ["compound, aluminum oxide", "compound aluminum oxide,", "compound, aluminum oxide,", "compound aluminum oxide"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation around noun phrases. No punctuation is needed because the noun phrase “aluminum oxide” is a restrictive appositive, meaning that it provides essential identifying information about the noun phrase before it, “the chemical compound,” and thus doesn’t require punctuation around it."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed."),
        B: L("Choice B is incorrect because no punctuation is needed."),
        C: L("Choice C is incorrect because the noun phrase “aluminum oxide” is a restrictive appositive. Setting the phrase off with punctuation suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-59a246dc", "59a246dc", 83)
    },
    {
      id: "rw-bd-a153ad6a",
      sourceQuestionId: "a153ad6a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>While light is known as one of the fastest-moving substances, it slows down when passing through some types of matter. One such type of matter is a form of cooled, condensed gas called a Bose-Einstein condensate ______ Dutch physicist Lene Hau famously used a BEC to slow a beam of light to a complete halt.</p>",
      stem: STEM,
      options: ["(BEC),", "(BEC) and", "(BEC);", "(BEC)"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a semicolon to join the first main clause (\"One…(BEC)\") and the second main clause (\"Dutch…halt\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        B: L("Choice B is incorrect because it results in a run-on sentence. Without a comma preceding it, a conjunction can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a153ad6a", "a153ad6a", 84)
    },
    {
      id: "rw-bd-5ef9fc48",
      sourceQuestionId: "5ef9fc48",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In biology, many initially disordered systems will naturally move toward greater order according to the principle of self-organization, a conceptual framework for pattern ______ biologists believe can be used to explain a range of organic phenomena, from population dynamics to the sociality of bees and ants.</p>",
      stem: STEM,
      options: ["formation, that some", "formation. Some", "formation that some", "formation; some"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use and punctuation of an integrated relative clause. In this choice, the relative pronoun “that” is used to create an integrated relative clause that modifies the preceding noun phrase “a conceptual framework for pattern formation.” No punctuation is necessary between the noun phrase and the relative clause because the relative clause is supplying essential information about the framework."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the noun phrase (“a conceptual...formation”) and the integrated relative clause beginning with “that.”"),
        B: L("Choice B is incorrect because it results in a confusing and ungrammatical sentence."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. A semicolon is used to join two main clauses or items in a complex series, and what follows “formation” is neither of these.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5ef9fc48", "5ef9fc48", 88)
    },
    {
      id: "rw-bd-6e071432",
      sourceQuestionId: "6e071432",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 1986, conceptual artist Sophie Calle asked twenty-three people, all of whom had been born without sight, to describe “their image of beauty” in rich detail. Calle paired excerpts of these conversations with photographs—both of interviewees and the items they ______ to powerful effect in her exhibition The Blind.</p>",
      stem: STEM,
      options: ["described, from hair to grass to sculptures", "described, from hair to grass to sculptures—", "described—from hair to grass to sculptures,", "described: from hair to grass to sculptures"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of supplementary elements within a sentence. The comma after \"described\" separates the first supplementary element (\"both of interviewees and the items they described\") from the second supplementary element (\"from hair to grass to sculptures\"). Furthermore, the dash after \"sculptures\" pairs with the dash after \"photographs\" to separate these two supplementary elements from the rest of the sentence. The pair of dashes, which operate at a higher organizing level than the comma, indicates that the elements between the dashes function together—in this case, the second supplement (\"from…sculptures\") describes the range of items mentioned in the first supplement—and could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it fails to appropriately punctuate the supplementary elements in the sentence. A dash is needed after \"sculptures\" to separate the supplementary elements (\"both…sculptures\") from the rest of the sentence."),
        C: L("Choice C is incorrect because it fails to appropriately punctuate the supplementary elements in the sentence. The two supplementary elements \"both…described\" and \"from…sculptures\" function together to describe the photographs, and placing a dash between them would make this relationship less clear, suggesting that the supplement \"both...described\" is a standalone element that could be removed without affecting the grammatical coherence of the sentence, which isn’t the case."),
        D: L("Choice D is incorrect because it fails to appropriately punctuate the supplementary elements in the sentence. A colon isn’t conventionally used in this way to separate a supplementary element (\"from hair to grass to sculptures\") from the noun phrase it is modifying (\"items they described\"). Additionally, a dash is needed after \"sculptures\" to separate the supplementary elements (\"both…sculptures\") from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6e071432", "6e071432", 90)
    },
    {
      id: "rw-bd-77e06a09",
      sourceQuestionId: "77e06a09",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Between 322 and 184 BCE, the Maurya Empire established a complex economic system that, through trade and centralized ______ funded major infrastructure projects throughout the Indian subcontinent. This included the building of many roads, canals, and hospitals.</p>",
      stem: STEM,
      options: ["taxation:", "taxation,", "taxation—", "taxation"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after \"taxation\" pairs with the comma after \"that\" to separate the supplementary element \"through trade and centralized taxation\" from the rest of the sentence. This supplementary element functions to identify the funding source of the Mauryan economy, and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a colon can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because a dash can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-77e06a09", "77e06a09", 93)
    },
    {
      id: "rw-bd-6ea8c23f",
      sourceQuestionId: "6ea8c23f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 2018, a team of researchers led by Dr. Caitlin Whalen compiled every available measurement of ocean mixing rates from the past two decades. With this novel data set, the team was able to determine how current-driven mixing varies across ______ and what impact it has on the distribution of heat and nutrients in the ocean.</p>",
      stem: STEM,
      options: ["regions,", "regions:", "regions;", "regions"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation between coordinates in a sentence. The two elements \"how…regions\" and \"what…ocean\" work together as coordinates to complete the description of what the team was able to determine. Because there are only two coordinates in this case (as opposed to a series of three or more), no punctuation is needed between them."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the coordinates \"how…regions\" and \"what…ocean.\""),
        B: L("Choice B is incorrect because no punctuation is needed between the coordinates \"how…regions\" and \"what…ocean.\""),
        C: L("Choice C is incorrect because no punctuation is needed between the coordinates \"how…regions\" and \"what…ocean.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6ea8c23f", "6ea8c23f", 94)
    },
    {
      id: "rw-bd-aab74a3b",
      sourceQuestionId: "aab74a3b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Researcher Lin Zhi developed a process for increasing the tensile strength—measured in gigapascals, or GPa—of silkworm ______ dissolving and reweaving the silk in a solution of iron metal ions, zinc, and sugar, Zhi increased the amount of force required to stretch it from approximately 0.5 GPa to 2 GPa.</p>",
      stem: STEM,
      options: ["silk, by", "silk by", "silk and by", "silk. By"],
      answer: "D",
      explanation: L("Choice D is the best answer. The independent clauses \"researcher Lin Zhi…silk\" and \"by dissolving…2 GPa\" can be grammatically separated by a period. They can stand alone as sentences, and this is the only choice that lets them do that."),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a grammar error called a comma splice. \"Researcher Lin Zhi…silk\" and \"by dissolving…2 GPa\" are both independent clauses. They need to either be separated with punctuation like a period or a semicolon, or they need to be connected by a comma and a coordinating conjunction like \"and.\" A comma alone isn’t enough."),
        B: L("Choice B is incorrect. This choice results in a grammar error called a run- on sentence. \"Researcher Lin Zhi…silk\" and \"by dissolving…2 GPa\" are both independent clauses. They need to either be separated with punctuation like a period or a semicolon, or they need to be connected by a comma and a coordinating conjunction like \"and.\""),
        C: L("Choice C is incorrect. This choice results in a grammar error called a run-on sentence. \"Researcher Lin Zhi…silk\" and \"by dissolving…2 GPa\" are both independent clauses. The coordinating conjunction \"and\" isn’t enough to link them by itself. We need a comma, too.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-aab74a3b", "aab74a3b", 95)
    },
    {
      id: "rw-bd-1724dac2",
      sourceQuestionId: "1724dac2",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A subseasonal weather forecast attempts to predict weather conditions three to four weeks in ______ its predictions are therefore more short- term than those of the seasonal forecast, which attempts to predict the weather more than a month in advance.</p>",
      stem: STEM,
      options: ["advance,", "advance", "advance;", "advance and"],
      answer: "C",
      explanation: L("Choice C is the best answer. The clause “A subseasonal…advance” and the clause “its predictions…forecast” are both independent clauses, so using a semicolon to separate them is grammatically correct."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a run-on sentence error. The clause “A subseasonal…advance” and the clause “its predictions… forecast” are both independent clauses, so a comma is not enough to separate them."),
        B: L("Choice B is incorrect. This choice creates a run-on sentence error. The clause “A subseasonal…advance” and the clause “its predictions…forecast” are both independent clauses, so they need to be separated with specific punctuation (a period, a semi-colon, a colon, a dash, or a comma + a coordinating conjunction)."),
        D: L("Choice D is incorrect. This choice creates a run-on sentence error. The clause “A subseasonal…advance” and the clause “its predictions…forecast” are both independent clauses, so the word “and” by itself is not enough to separate them. There would need to be a comma before “and” for this choice to work.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-1724dac2", "1724dac2", 96)
    },
    {
      id: "rw-bd-e67f9967",
      sourceQuestionId: "e67f9967",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>For her film I Am Somebody (1970), a documentary about a successful months-long strike held by Black female hospital workers in Charleston, South Carolina, director Madeline Anderson chose a narrator who had participated in the ______ by allowing the narrative to be shaped by one of their own, amplified the agency and power the workers possessed.</p>",
      stem: STEM,
      options: ["protest. A decision that", "protest; a decision that,", "protest, a decision that,", "protest a decision that,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma after “protest” to mark the boundary between the main clause (“For...protest”) and the supplementary appositive (“a decision...possessed”) that provides additional information about Anderson’s choice of narrator. Furthermore, the comma after “that” pairs with the comma after “own” to separate the supplementary adverbial phrase “by allowing...own” from the rest of the appositive. This adverbial phrase functions to explain how Anderson’s choice of a narrator amplified the agency and power the hospital workers possessed, and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “a decision.”"),
        B: L("Choice B is incorrect because a semicolon can’t be used in this way to join the main clause (“For...protest”) and the supplementary appositive (“a decision...possessed”). A semicolon is conventionally used to join two main clauses, and “a decision...possessed” isn’t a main clause."),
        D: L("Choice D is incorrect because it fails to mark the boundary between the main clause (“For...protest”) and the supplementary appositive (“a decision...possessed”) with appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e67f9967", "e67f9967", 99)
    },
    {
      id: "rw-bd-1aa3f174",
      sourceQuestionId: "1aa3f174",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Mesoamerican city of Teotihuacan featured a uniquely egalitarian urban housing infrastructure. Built between the first and seventh centuries CE, Teotihuacan housed its residents (as many as 200,000, by some ______ in a complex of comfortable apartments of comparable size.</p>",
      stem: STEM,
      options: ["estimates)", "estimates),", "estimates—", "estimates"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly completes the parenthetical element \"as many as 200,000, by some estimates\" with a closing parenthesis, pairing with the opening parenthesis that appears earlier in the sentence. This parenthetical element functions to specify the number of residents, and the use of parentheses indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        B: L("Choice B is incorrect. While this choice completes the parenthetical element with a closing parenthesis, no comma is needed before the prepositional phrases (\"in...size\") that provide essential information about where the residents were housed."),
        C: L("Choice C is incorrect because a dash can’t be paired with an opening parenthesis in this way to separate the parenthetical element from the rest of the sentence."),
        D: L("Choice D is incorrect because it doesn’t close the parenthetical element that was opened earlier in the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-1aa3f174", "1aa3f174", 100)
    },
    {
      id: "rw-bd-a9e5b788",
      sourceQuestionId: "a9e5b788",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In discussing Mary Shelley’s 1818 epistolary novel Frankenstein, literary theorist Gayatri Spivak directs the reader’s attention to the character of Margaret Saville. As Spivak points out, Saville is not the protagonist of Shelley’s ______ as the recipient of the letters that frame the book’s narrative, she’s the “occasion” of it.</p>",
      stem: STEM,
      options: ["novel", "novel,", "novel; rather,", "novel, rather,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a semicolon to join a main clause (“Saville...novel”) and a second main clause (“she’s...it”) preceded by supplementary elements (“rather...narrative”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, the comma after “novel” can’t be used in this way to join the two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a9e5b788", "a9e5b788", 101)
    },
    {
      id: "rw-bd-cdbbbf94",
      sourceQuestionId: "cdbbbf94",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>As British scientist Peter Whibberley has observed, “the Earth is not a very good timekeeper.” Earth’s slightly irregular rotation rate means that measurements of time must be periodically adjusted. Specifically, an extra “leap second” (the 86,401st second of the day) is ______ time based on the planet’s rotation lags a full nine-tenths of a second behind time kept by precise atomic clocks.</p>",
      stem: STEM,
      options: ["added, whenever", "added; whenever", "added. Whenever", "added whenever"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation between a verb and a preposition. When, as in this case, a verb (“is added”) is immediately followed by a preposition (“whenever”), no punctuation is needed."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the verb and the preposition."),
        B: L("Choice B is incorrect because no punctuation is needed between the verb and the preposition."),
        C: L("Choice C is incorrect because no punctuation is needed between the verb and the preposition.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-cdbbbf94", "cdbbbf94", 102)
    },
    {
      id: "rw-bd-a3e87535",
      sourceQuestionId: "a3e87535",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Julia Alvarez’s 1994 novel In the Time of the Butterflies, a fictionalized account of the lives of the Mirabal ______ can serve as a starting point for those wanting to explore how the rule of dictator Rafael Trujillo has been represented in Dominican American literature.</p>",
      stem: STEM,
      options: ["sisters, and", "sisters and", "sisters,", "sisters"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The comma after \"sisters\" pairs with the comma after \"Butterflies\" to separate the supplementary element \"a fictionalized account of the lives of the Mirabal sisters\" from the rest of the sentence. This supplementary element functions to describe the novel In the Time of the Butterflies, and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a comma and conjunction can’t be used in this way to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a3e87535", "a3e87535", 103)
    },
    {
      id: "rw-bd-ffea47e1",
      sourceQuestionId: "ffea47e1",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The Kaiparowits Formation is a fossil-rich layer of sedimentary rock in the Grand Staircase, a colossal sequence of rock layers stretching from Utah’s Bryce Canyon to Arizona’s Grand Canyon. The sandstones and mudstones of the Kaiparowits Formation were deposited ______ the Late Cretaceous, preserving many species from that time.</p>",
      stem: STEM,
      options: ["during:", "during;", "during,", "during"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between a preposition and its complement. No punctuation is needed between the preposition “during” and its complement “the Late Cretaceous.” The complement completes the meaning of the preposition in the phrase “deposited during the Late Cretaceous,” and any punctuation between the two results in an ungrammatical sentence."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the preposition and its complement."),
        B: L("Choice B is incorrect because no punctuation is needed between the preposition and its complement."),
        C: L("Choice C is incorrect because no punctuation is needed between the preposition and its complement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-ffea47e1", "ffea47e1", 109)
    },
    {
      id: "rw-bd-a1e0c981",
      sourceQuestionId: "a1e0c981",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In her book The Woman Warrior: Memoirs of a Girlhood Among Ghosts, author Maxine Hong Kingston examines themes ______ childhood, womanhood, and Chinese American identity by intertwining autobiography and mythology.</p>",
      stem: STEM,
      options: ["of:", "of", "of—", "of,"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Themes of childhood” is one noun phrase, with “themes of” implicitly carrying over to the other items on the list (“themes of childhood, [themes of] womanhood, and [themes of] Chinese American identity”)."),
      distractors: {
        A: L("Choice A is incorrect. This choice inappropriately breaks up the introduction of a list. Also, “In her book…themes of” is not an independent clause, thanks to the dangling “of” at the end, so it can’t precede a colon."),
        C: L("Choice C is incorrect. This choice inappropriately breaks up the introduction of a list. Also, “In her book…themes of” is not an independent clause, thanks to the dangling “of” at the end, so it can’t precede a single dash."),
        D: L("Choice D is incorrect. This choice inappropriately breaks up the introduction of a list. “Themes of” implicitly carries over to each item on the list (“themes of childhood, [themes of] womanhood, and [themes of] Chinese American identity”), so we don’t want to use a comma to separate it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a1e0c981", "a1e0c981", 110)
    },
    {
      id: "rw-bd-b35cefb7",
      sourceQuestionId: "b35cefb7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The fine, powdery substance that covers the Moon’s surface is called regolith. Because regolith is both readily available and high in oxygen ______ scientists have wondered whether it could be used as a potential source of oxygen for future lunar settlements.</p>",
      stem: STEM,
      options: ["content and", "content,", "content", "content, and"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation between a subordinate clause and a main clause. This choice correctly uses a comma to mark the boundary between the subordinate clause (“Because...content”) and the main clause (“scientists...settlements”)."),
      distractors: {
        A: L("Choice A is incorrect. Joining the subordinate clause (“Because...content”) and the clause that follows (“scientists...settlements”) with the conjunction “and” results in an ungrammatical sentence that lacks a main clause."),
        C: L("Choice C is incorrect because it fails to mark the boundary between the subordinate clause and the main clause with appropriate punctuation."),
        D: L("Choice D is incorrect. Joining the subordinate clause (“Because...content”) and the clause that follows (“scientists...settlements”) with a comma and the conjunction “and” results in an ungrammatical sentence that lacks a main clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b35cefb7", "b35cefb7", 111)
    },
    {
      id: "rw-bd-e76e74e8",
      sourceQuestionId: "e76e74e8",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Over twenty years ago, in a landmark experiment in the psychology of choice, professor Sheena Iyengar set up a jam-tasting booth at a grocery store. The number of jams available for tasting ______ some shoppers had twenty-four different options, others only six. Interestingly, the shoppers with fewer jams to choose from purchased more jam.</p>",
      stem: STEM,
      options: ["varied:", "varied,", "varied, while", "varied while"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of a colon within a sentence. In this choice, the colon is used in a conventional way to introduce the following description of how the number of jams available varied."),
      distractors: {
        B: L("Choice B is incorrect because it creates a comma splice. A comma can’t be used in this way to join two main clauses (“the number…varied” and “some…six”)."),
        C: L("Choice C is incorrect because it results in an illogical and confusing sentence. Using the conjunction “while” to join the main clause (“the number…varied”) with the following clause’s description of the number of jams available suggests that the variation in the number of jams is in contrast to some shoppers having twenty-four options."),
        D: L("Choice D is incorrect because it results in an illogical and confusing sentence. Using “while” in this way suggests that the number of jams available varied during the time in which some shoppers had twenty-four options and others had six. The sentence makes clear, however, that what follows “varied” is a description of the variation, not a separate, simultaneous occurrence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e76e74e8", "e76e74e8", 112)
    },
    {
      id: "rw-bd-083a35dc",
      sourceQuestionId: "083a35dc",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Po’Pay was a Tewa leader from Ohkay Owingeh, a pueblo located about twenty-five miles north of present-day Santa Fe, New Mexico. He was instrumental in organizing the Pueblo Revolt of ______ as a result of his leadership, the Spanish colonizers were expelled from the region for a time.</p>",
      stem: STEM,
      options: ["1680", "1680 and", "1680,", "1680, and"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction “and” to join the first main clause (“He…1680”) and the second main clause (“as…time”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-083a35dc", "083a35dc", 118)
    },
    {
      id: "rw-bd-486f03da",
      sourceQuestionId: "486f03da",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The short story “Rogue Enchantments” by Isabel Iba ñ ez appears in Reclaim the ______ anthology of fantasy and science fiction written by authors of Latin American descent.</p>",
      stem: STEM,
      options: ["Stars. An", "Stars, while an", "Stars an", "Stars, an"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to mark the boundary between the main clause (\"The short...Stars\") and the supplementary element (\"an anthology...descent\") that provides additional information about what Reclaim the Stars is."),
      distractors: {
        A: L("Choice A is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"an anthology.\""),
        B: L("Choice B is incorrect. Joining the main clause and the following supplementary element with the conjunction \"while\" results in a confusing and ungrammatical sentence."),
        C: L("Choice C is incorrect because it fails to mark the boundary between the main clause and the supplementary element with appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-486f03da", "486f03da", 119)
    },
    {
      id: "rw-bd-aab78b25",
      sourceQuestionId: "aab78b25",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Psychophysicist Howard Moskowitz was hired by a soda company to determine how much artificial sweetener ______ After conducting consumer taste tests, he found that no such ideal existed: participants expressed a wide range of preferences for different blends of sweetener, carbonization, and flavoring.</p>",
      stem: STEM,
      options: ["do most people prefer in a diet drink?", "do most people prefer in a diet drink.", "most people prefer in a diet drink?", "most people prefer in a diet drink."],
      answer: "D",
      explanation: L("Choice D is the best answer. This sentence is a statement: “Moskowitz was hired by a soda company to determine how much artificial sweetener most people prefer in a diet drink.” So a period is the most appropriate punctuation mark."),
      distractors: {
        A: L("Choice A is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This sentence is not a question—it’s a statement. So a question mark is not the appropriate punctuation."),
        B: L("Choice B is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. We already have the verbs “was hired…to determine” in this sentence. The verb “do” is not needed and results in a confusing, ungrammatical sentence."),
        C: L("Choice C is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This sentence is not a question—it’s a statement. So a question mark is not the appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-aab78b25", "aab78b25", 121)
    },
    {
      id: "rw-bd-8b002b08",
      sourceQuestionId: "8b002b08",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Many Samoans enjoy a sport called kilikiti. This bat-and-ball game was derived from ______ kilikiti differs from cricket in a few key ways.</p>",
      stem: STEM,
      options: ["cricket but:", "cricket but,", "cricket, but", "cricket, but,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma before the coordinating conjunction \"but\" to join the first main clause (\"This bat-and-ball game was derived from cricket\") and the second main clause (\"kilikiti differs from cricket in a few key ways\")."),
      distractors: {
        A: L("Choice A is incorrect. When coordinating two main clauses such as these, it’s not conventional to use a colon in this way after the coordinating conjunction."),
        B: L("Choice B is incorrect. When coordinating two main clauses such as these, it’s not conventional to use a comma in this way after the coordinating conjunction."),
        D: L("Choice D is incorrect. When coordinating two main clauses such as these, it’s not conventional to use a comma in this way after the coordinating conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8b002b08", "8b002b08", 122)
    },
    {
      id: "rw-bd-145d5ca7",
      sourceQuestionId: "145d5ca7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Gathering accurate data on water flow in the United States is challenging because of the country’s millions of miles of ______ the volume and speed of water at any given location can vary drastically over time.</p>",
      stem: STEM,
      options: ["waterways and the fact that,", "waterways, and the fact that,", "waterways, and, the fact that", "waterways and the fact that"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation within two coordinated noun phrases. When, as in this case, a noun phrase (“the country’s millions of miles of waterways”) is coordinated with another noun phrase (“the fact”) followed by an integrated relative clause (“that the volume...time”), no punctuation is needed."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed."),
        B: L("Choice B is incorrect because no punctuation is needed."),
        C: L("Choice C is incorrect because no punctuation is needed.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-145d5ca7", "145d5ca7", 123)
    },
    {
      id: "rw-bd-be34a3df",
      sourceQuestionId: "be34a3df",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 2008, two years after the death of science fiction writer Octavia Butler, the Huntington Library in ______ received a collection of more than 8,000 items, including Butler’s private notes, research materials, manuscripts, photos, and drawings. Today, the Octavia E. Butler Collection is one of the most researched archives at the library.</p>",
      stem: STEM,
      options: ["California,", "California:", "California—", "California"],
      answer: "D",
      explanation: L("Choice D is the best answer. No punctuation should separate the subject of the sentence (“the Huntington Library in California”) from its verb (“received”)."),
      distractors: {
        A: L("Choice A is incorrect. No punctuation should separate the subject of the sentence (“the Huntington Library in California”) from its verb (“received”)."),
        B: L("Choice B is incorrect. No punctuation should separate the subject of the sentence (“the Huntington Library in California”) from its verb (“received”)."),
        C: L("Choice C is incorrect. No punctuation should separate the subject of the sentence (“the Huntington Library in California”) from its verb (“received”).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-be34a3df", "be34a3df", 127)
    },
    {
      id: "rw-bd-73a6603c",
      sourceQuestionId: "73a6603c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>On sunny days, dark rooftops absorb solar energy and convert it to unwanted heat, raising the surrounding air ______ a light-colored covering to an existing dark roof, either by attaching prefabricated reflective sheets or spraying on a paint-like coating, helps combat this effect.</p>",
      stem: STEM,
      options: ["temperature; by adding", "temperature, adding", "temperature. Adding", "temperature by adding"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between the first sentence (“On…temperature”) and the second sentence (“Adding…effect”). The gerund phrase beginning with “adding” is the subject of the second sentence, and the verb phrase “helps combat this effect” describes what adding a light-colored covering can do."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to join the sentence “On...temperature” and the supplementary phrases that follow. Doing so leaves the verb phrase “helps combat” without a subject and thus results in a grammatically unconventional sentence."),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect. This choice results in a confusing and illogical sentence that suggests that adding a light-colored covering to an existing dark roof raises the temperature of the surrounding air. Furthermore, it creates ambiguity by leaving the verb phrase “helps combat” without a subject (so it isn’t clear what helps combat the effect).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-73a6603c", "73a6603c", 129)
    },
    {
      id: "rw-bd-70ced8dc",
      sourceQuestionId: "70ced8dc",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Typically, underlines, scribbles, and notes left in the margins by a former owner lower a book’s ______ when the former owner is a famous poet like Walt Whitman, such markings, known as marginalia, can be a gold mine to literary scholars.</p>",
      stem: STEM,
      options: ["value, but", "value", "value,", "value but"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the coordination of independent clauses within a sentence. An independent clause is a phrase containing a subject and a verb that can stand on its own as a sentence. This choice uses a comma and the coordinating conjunction “but” to join the first independent clause (“underlines…lower a book’s value”) and the second independent clause (“such markings…can be a gold mine to scholars”) to create a compound sentence."),
      distractors: {
        B: L("Choice B is incorrect because it results in a run-on sentence. The two independent clauses are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between two independent clauses."),
        D: L("Choice D is incorrect because a comma is needed to mark the boundary between two coordinated independent clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-70ced8dc", "70ced8dc", 130)
    },
    {
      id: "rw-bd-6fac7f45",
      sourceQuestionId: "6fac7f45",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Butterfly is a 1988 painting by the Japanese artist Ay-O. Like many of Ay-O’s paintings, Butterfly, which portrays a swimmer performing the butterfly stroke, attempts to make use of the entire visual light ______ sporting rainbow-striped goggles, the rainbow-hued swimmer splashes through a wavy rainbow of water.</p>",
      stem: STEM,
      options: ["spectrum", "spectrum:", "spectrum while", "spectrum, while"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of a colon within a sentence. In this choice, the colon correctly introduces the following description of how the painting makes use of the entire visual light spectrum by depicting a rainbow-hued swimmer."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The main clauses (\"Like…spectrum\" and \"sporting…water\") are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The main clauses (\"Like…spectrum\" and \"while… water\") are fused without punctuation. Furthermore, the conjunction \"while\" fails to indicate that what follows is a description of how the painting makes use of the entire visual light spectrum."),
        D: L("Choice D is incorrect because it results in a logically confusing sentence. The conjunction \"while,\" which suggests that what follows is occurring at the same time as or despite what came before, fails to indicate that what follows is a description of how the painting makes use of the entire visual light spectrum.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6fac7f45", "6fac7f45", 132)
    },
    {
      id: "rw-bd-aecdb820",
      sourceQuestionId: "aecdb820",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Featuring works by the photographers Lola Álvarez Bravo and Else “Yva” Neuländer-Simon, the 2021 exhibition The New Woman Behind the Camera set out to provide a wide-ranging overview of photography by women in the 1920s through the ______ given the collection’s breadth of more than 120 photos, its efforts were largely successful.</p>",
      stem: STEM,
      options: ["1950s, and", "1950s and", "1950s", "1950s,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction \"and\" to join the first main clause (\"Featuring...1950s\") and the second main clause (\"given...successful\")."),
      distractors: {
        B: L("Choice B is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-aecdb820", "aecdb820", 133)
    },
    {
      id: "rw-bd-2c9c6ca9",
      sourceQuestionId: "2c9c6ca9",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The term “retroflex” derives from Latin and means “bent back,” an apt descriptor for the branch of consonants—retroflex consonants— pronounced with the tongue curling up and back in the mouth. In many languages, including English, these consonants are ______ in some dialects of Mandarin, however, four such consonants (“ch,” “sh,” “zh,” and “r”) are relatively common.</p>",
      stem: STEM,
      options: ["rare and", "rare,", "rare", "rare;"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (\"In many…rare\") and the second main clause (\"in some…common\") in this sentence."),
      distractors: {
        A: L("Choice A is incorrect. Joining the first main clause (\"In many…rare\") and the second main clause (\"in some...common\") with the conjunction \"and\" conflicts with the use of \"however\" later in the sentence, resulting in a confusing and illogical sentence."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-2c9c6ca9", "2c9c6ca9", 134)
    },
    {
      id: "rw-bd-8a3998f1",
      sourceQuestionId: "8a3998f1",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>After the United Kingdom began rolling out taxes equivalent to a few cents on single-use plastic grocery bags in 2011, plastic-bag consumption decreased by up to ninety ______ taxes are subject to what economists call the “rebound effect”: as the change became normalized, plastic-bag use started to creep back up.</p>",
      stem: STEM,
      options: ["percent, such", "percent and such", "percent. Such", "percent such"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period after “percent” is used correctly to mark the boundary between one sentence (“After…percent”) and another (“Such…up”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        B: L("Choice B is incorrect. Without a comma preceding it, the conjunction “and” can’t be used in this way to join sentences."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The sentences (“After…percent” and “Such…up”) are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8a3998f1", "8a3998f1", 135)
    },
    {
      id: "rw-bd-96953201",
      sourceQuestionId: "96953201",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In her two major series “Memory Test” and “Autobiography,” painter Howardena Pindell explored themes ______ healing, self-discovery, and memory by cutting and sewing back together pieces of canvas and inserting personal artifacts, such as postcards, into some of the paintings.</p>",
      stem: STEM,
      options: ["of", "of,", "of—", "of:"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation between a preposition and its complement. No punctuation is needed between the preposition “of” and its complement, the noun phrase “healing, self-discovery, and memory.”"),
      distractors: {
        B: L("Choice B is incorrect because no punctuation is needed between a preposition and its complement."),
        C: L("Choice C is incorrect because no punctuation is needed between a preposition and its complement."),
        D: L("Choice D is incorrect because no punctuation is needed between a preposition and its complement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-96953201", "96953201", 138)
    },
    {
      id: "rw-bd-6fdddabf",
      sourceQuestionId: "6fdddabf",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The part of a compound that determines the compound’s color is ______ the chromophore. One example of a chromophore is hemoglobin, which gives human blood its red color.</p>",
      stem: STEM,
      options: ["called,", "called", "called—", "called;"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between a verb and its complement. No punctuation is needed between the verb “is called” and its complement “the chromophore.”The complement helps complete the idea of the verb—in this case, it explains what the part of a compound that determines the compound’s color is called—and any punctuation between the two results in an ungrammatical sentence."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the verb and its complement."),
        C: L("Choice C is incorrect because no punctuation is needed between the verb and its complement."),
        D: L("Choice D is incorrect because no punctuation is needed between the verb and its complement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6fdddabf", "6fdddabf", 140)
    },
    {
      id: "rw-bd-8f6d6ae6",
      sourceQuestionId: "8f6d6ae6",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Archaeologists have estimated that the pre-Columbian Native American city of Cahokia, located across the Mississippi River from modern-day St. Louis, Missouri, had as many as 20,000 inhabitants in the year 1150 ______ it one of the largest cities in North America at the time.</p>",
      stem: STEM,
      options: ["CE making", "CE. Making", "CE, making", "CE; making"],
      answer: "C",
      explanation: L("Choice C is the best answer. The phrase “making…at the time” provides additional information about Cahokia that’s not required for the sentence to make sense or function grammatically. As a nonessential supplement, this phrase should be separated from the rest of the sentence with a comma."),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a run-on sentence. The nonessential descriptive aside “making…at the time” needs to be separated from the rest of the sentence with a comma."),
        B: L("Choice B is incorrect. This choice results in a sentence fragment. “Making…at the time” doesn’t have a subject and can’t stand on its own as a sentence. Thus, it can’t be separated from the rest of the sentence with a period."),
        D: L("Choice D is incorrect. This choice results in a punctuation error. “Making…at the time” doesn’t have a subject and can’t stand on its own as an independent clause. Since a semicolon can only link two independent clauses, using one here creates an error.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8f6d6ae6", "8f6d6ae6", 141)
    },
    {
      id: "rw-bd-26c8c88c",
      sourceQuestionId: "26c8c88c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>About 70,000 meteorites have been found on Earth. Although most meteorites are fragments of ______ hundred have been identified as being from the Moon or Mars.</p>",
      stem: STEM,
      options: ["asteroids. Several", "asteroids, several", "asteroids; several", "asteroids: several"],
      answer: "B",
      explanation: L("Choice B is the best answer. This choice uses a comma to correctly separate the dependent clause \"although…asteroids\" from the independent clause \"several hundred have been…Mars.\""),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a sentence fragment. \"Although…asteroids\" is a dependent clause. It can’t stand on its own as a sentence, which means it can’t end in a period."),
        C: L("Choice C is incorrect. This choice results in a punctuation error. \"Although…asteroids\" is a dependent clause and can’t be joined to the independent clause \"several hundred have been…Mars\" with a semicolon. A semicolon can only join two independent clauses."),
        D: L("Choice D is incorrect. This choice creates a punctuation error. A colon can only come after an independent clause, but \"although…asteroids\" is a dependent clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-26c8c88c", "26c8c88c", 142)
    },
    {
      id: "rw-bd-c06af4d8",
      sourceQuestionId: "c06af4d8",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Sociologist Alton Okinaka sits on the review board tasked with adding new sites to the Hawai‘i Register of Historic Places, which includes Pi‘ilanihale Heiau and the ‘Ōpaeka‘a Road Bridge. Okinaka doesn’t make such decisions ______ all historical designations must be approved by a group of nine other experts from the fields of architecture, archaeology, history, and Hawaiian culture.</p>",
      stem: STEM,
      options: ["single-handedly, however;", "single-handedly; however,", "single-handedly, however,", "single-handedly however"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the punctuation of a supplementary word or phrase between two main clauses. This choice correctly uses a comma to separate the supplementary adverb “however” from the preceding main clause (“Okinaka doesn’t…single- handedly”) and a semicolon to join the next main clause (“all…culture”) to the rest of the sentence. Further, placing the semicolon after “however” correctly indicates that the information in the preceding main clause (Okinaka doesn’t make such decisions single-handedly) is contrary to what might be assumed from the information in the previous sentence (Okinaka sits on the review board that adds new sites to the Hawaii Register of Historic Places)."),
      distractors: {
        B: L("Choice B is incorrect because placing the semicolon after “single-handedly” and the comma after “however” illogically indicates that the information in the next main clause (all historical designations must be approved by a group of experts) is contrary to the information in the previous clause (Okinaka doesn’t make such decisions single-handedly)."),
        C: L("Choice C is incorrect because it results in a comma splice. Commas can’t be used in this way to punctuate a supplementary word or phrase between two main clauses."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c06af4d8", "c06af4d8", 143)
    },
    {
      id: "rw-bd-e9aee0d8",
      sourceQuestionId: "e9aee0d8",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>On November 2, 1772, amid rising tensions with Great Britain, Boston colonists formed the Boston Committee of Correspondence. By 1774, what had started as a local means of mobilizing support for the Patriot cause had grown into something far more ______ network of such committees that, facilitating communication among the colonies, helped lay the groundwork for the Continental Congress.</p>",
      stem: STEM,
      options: ["extensive: a", "extensive; a", "extensive, it was a", "extensive. A"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of a colon within a sentence. In this choice, the colon is correctly used to introduce the following explanation of what the Patriot cause had grown into by 1774."),
      distractors: {
        B: L("Choice B is incorrect because a semicolon can’t be used in this way to join the main clause (\"what…extensive\") and the supplementary element (\"a network…Congress\"). A semicolon is conventionally used to join two main clauses, whereas a colon is conventionally used to introduce an element that explains or amplifies the information in the preceding clause, making the colon the better choice in this context."),
        C: L("Choice C is incorrect because it results in a comma splice. The addition of the pronoun and verb \"it was\" forms the start of a new main clause in the sentence, and a comma can’t be used in this way to mark the boundary between two main clauses."),
        D: L("Choice D is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"a network.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e9aee0d8", "e9aee0d8", 146)
    },
    {
      id: "rw-bd-d198997b",
      sourceQuestionId: "d198997b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Cy Twombly, a US painter and sculptor, created many large-scale abstract works, such as his 10-painting series Fifty Days at Iliam. In these works, Twombly’s artistic style is exemplified by his use of graffiti-like ______ often incorporate words or phrases from poetry and mythology.</p>",
      stem: STEM,
      options: ["scribbles: that", "scribbles that", "scribbles; that", "scribbles. That"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use and punctuation of a relative clause. This choice correctly uses the relative pronoun “that” and no punctuation to create an integrated relative clause that provides essential information about the noun phrase (“graffiti-like scribbles”) that it modifies."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the integrated relative clause beginning with “that often” and the noun phrase that it modifies (“graffiti-like scribbles”)."),
        C: L("Choice C is incorrect because no punctuation is needed between the integrated relative clause beginning with “that often” and the noun phrase that it modifies (“graffiti-like scribbles”)."),
        D: L("Choice D is incorrect because no punctuation is needed between the integrated relative clause beginning with “that often” and the noun phrase that it modifies (“graffiti-like scribbles”).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-d198997b", "d198997b", 148)
    },
    {
      id: "rw-bd-9579581e",
      sourceQuestionId: "9579581e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>As cheesemaking practices spread throughout Europe and Asia during and after the Neolithic, divergent strategies for preserving milk ______ whereas rennet-coagulated cheesemaking became key to milk preservation in Europe and Southwest Asia, acid-heat coagulation methods became common among nomadic herding populations of the northeastern Eurasian steppe.</p>",
      stem: STEM,
      options: ["emerged", "emerged and", "emerged:", "emerged,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use within a sentence. A colon can be used between two main clauses to signal that what follows is an elaboration of what came before. In this choice, the colon correctly introduces the following explanation of the divergent milk preservation strategies that emerged."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The main clause (\"As…emerged\") and the subordinate clause followed by another main clause (\"whereas…steppe\") are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join a main clause (\"As…emerged\") and a subordinate clause followed by another main clause (\"whereas…steppe\")."),
        D: L("Choice D is incorrect because it results in a comma splice. A comma can’t be used in this way to join a main clause (\"As… emerged\") and a subordinate clause followed by another main clause (\"whereas…steppe\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-9579581e", "9579581e", 149)
    },
    {
      id: "rw-bd-60713427",
      sourceQuestionId: "60713427",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Polyphenols are organic compounds ______ among their many roles, provide pigment that helps protect plants against ultraviolet radiation from sunlight.</p>",
      stem: STEM,
      options: ["that—", "that;", "that,", "that:"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The comma after “that” pairs with the comma after “roles” to separate the supplementary element “among their many roles” from the rest of the sentence. This supplementary element functions to clarify that polyphenols have many roles, and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a dash can’t be paired with a comma to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because a semicolon can’t be paired with a comma to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because a colon can’t be paired with a comma to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-60713427", "60713427", 150)
    },
    {
      id: "rw-bd-2b512e65",
      sourceQuestionId: "2b512e65",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Eli Eisenberg, a genetics expert at Tel Aviv University in Israel, recently discovered that ______ have a special genetic ability called RNA editing that confers evolutionary advantages.</p>",
      stem: STEM,
      options: ["cephalopods, ocean dwellers that include the squid, the octopus, and the cuttlefish", "cephalopods—ocean dwellers—that include the squid, the octopus, and the cuttlefish,", "cephalopods, ocean dwellers that include: the squid, the octopus, and the cuttlefish,", "cephalopods—ocean dwellers that include the squid, the octopus, and the cuttlefish—"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. In this choice, the dash after \"cephalopods\" pairs with the dash after \"cuttlefish\" to clearly separate the supplementary element \"ocean dwellers that include the squid, the octopus, and the cuttlefish\" from the rest of the sentence. This supplementary element functions to explain what cephalopods are, and the pair of dashes indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the supplementary element that explains what cephalopods are from the rest of the sentence."),
        B: L("Choice B is incorrect because it fails to use appropriate punctuation to separate the supplementary element that explains what cephalopods are from the rest of the sentence."),
        C: L("Choice C is incorrect because it fails to use appropriate punctuation to separate the supplementary element that explains what cephalopods are from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-2b512e65", "2b512e65", 156)
    },
    {
      id: "rw-bd-e41018de",
      sourceQuestionId: "e41018de",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 1977, legendary Puerto Rican performer Rita Moreno won an Emmy Award, making her one of the rare talents to earn the highest honors in television, music, film, and stage entertainment—the Emmy, Grammy, Oscar, and Tony ______ the achievement is known as “winning the EGOT .”</p>",
      stem: STEM,
      options: ["awards, respectively;", "awards; respectively", "awards, respectively—", "awards, respectively,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to separate the supplementary adverb “respectively” from the rest of the supplementary element introduced by the dash after “entertainment” (“the Emmy...awards”), and it uses a semicolon to join the first main clause (“In...respectively”) and the second main clause (“the achievement...EGOT’”)."),
      distractors: {
        B: L("Choice B is incorrect because placing the semicolon after “awards” illogically separates the supplementary adverb “respectively” from the supplementary element it belongs to (“the Emmy...awards”) and attaches it to the following main clause (“the achievement...EGOT’”), resulting in a confusing and ungrammatical sentence."),
        C: L("Choice C is incorrect. The dash after “respectively” pairs with the dash after “entertainment” to close the supplementary element (“the Emmy...respectively”), so it can’t also serve to mark the boundary between the two main clauses (“In...respectively” and “the achievement...EGOT’”). The result fails to mark that boundary with appropriate punctuation."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, the comma after “respectively” can’t be used in this way to join the first main clause (“In...respectively”) and the second main clause (“the achievement...EGOT’”).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e41018de", "e41018de", 157)
    },
    {
      id: "rw-bd-870ae7ec",
      sourceQuestionId: "870ae7ec",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Detroit natives Timothy Paule and Nicole Lindsey have combined their two passions, Detroit and beekeeping, to improve the health of their city’s flowers and other vegetation. In 2017, the couple converted a vacant lot in the city into an ______ in the years that followed they acquired nine additional lots and established more than 35 hives.</p>",
      stem: STEM,
      options: ["apiary,", "apiary, and", "apiary and", "apiary"],
      answer: "B",
      explanation: L("Choice B is the best answer. Both clauses in this sentence could stand alone as complete sentences, which means they are both independent clauses. This choice uses a comma plus a coordinating conjunction to link them together, which is one of the correct ways to link two independent clauses."),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a run-on sentence error. Both clauses in this sentence could stand alone as complete sentences, which means they are both independent clauses. A comma by itself is not enough punctuation to link two independent clauses."),
        C: L("Choice C is incorrect. This choice results in a run-on sentence error. Both clauses in this sentence could stand alone as complete sentences, which means they are both independent clauses. Independent clauses can only be linked in a few ways, including with a comma plus a coordinating conjunction. This choice uses the coordinating conjunction “and,” but it is missing the comma beforehand."),
        D: L("Choice D is incorrect. This choice results in a run-on sentence error. Both clauses in this sentence could stand alone as complete sentences, which means they are both independent clauses. Independent clauses need to have certain kinds of punctuation marks between them. This choice doesn’t use any punctuation between the two clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-870ae7ec", "870ae7ec", 159)
    },
    {
      id: "rw-bd-cfe23776",
      sourceQuestionId: "cfe23776",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>According to the original text of the US Constitution, written in 1787, the presidential candidate receiving the second-most Electoral College votes becomes vice president. The 12th amendment, ratified in ______ separated the elections for the two offices.</p>",
      stem: STEM,
      options: ["1804—", "1804,", "1804:", "1804"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after “1804” pairs with the comma after “amendment” to separate the supplementary element “ratified in 1804” from the rest of the sentence. This supplementary element functions to provide additional information on the term “12th amendment,” and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a dash can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because a colon can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the supplemental element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-cfe23776", "cfe23776", 160)
    },
    {
      id: "rw-bd-fcaff694",
      sourceQuestionId: "fcaff694",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The city of Pompeii, which was buried in ash following the eruption of Mount Vesuvius in 79 CE, continues to be studied by archaeologists. Unfortunately, as ______ attest, archaeological excavations have disrupted ash deposits at the site, causing valuable information about the eruption to be lost.</p>",
      stem: STEM,
      options: ["researchers, Roberto Scandone and Christopher Kilburn,", "researchers, Roberto Scandone and Christopher Kilburn", "researchers Roberto Scandone and Christopher Kilburn", "researchers Roberto Scandone, and Christopher Kilburn"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of a restrictive coordinated noun phrase. No punctuation is needed within or around the coordinated noun phrase “researchers Roberto Scandone and Christopher Kilburn” because it would create an illogical separation between the noun “researchers” and the coordinated noun phrase “Roberto Scandone and Christopher Kilburn.”"),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed. Placing a pair of commas around the coordinated noun phrase “Roberto Scandone and Christopher Kilburn” creates an illogical separation between the noun “researchers” and the aforementioned coordinated noun phrase. In this case, it illogically suggests that researchers in general bear the specific names Roberto Scandone and Christopher Kilburn."),
        B: L("Choice B is incorrect because no punctuation is needed between the noun “researchers” and the coordinated noun phrase “Roberto Scandone and Christopher Kilburn.”"),
        D: L("Choice D is incorrect because no punctuation is needed within the coordinated noun phrase “Roberto Scandone and Christopher Kilburn.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-fcaff694", "fcaff694", 165)
    },
    {
      id: "rw-bd-790fc366",
      sourceQuestionId: "790fc366",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Using satellite remote sensing, Dr. Catherine Nakalembe, director of NASA’s Harvest Africa initiative, gathers important data on crop health. Nakalembe doesn’t just compile the ______ she also shares her findings with African farmers, enabling them to make data-driven decisions about managing critical food crops.</p>",
      stem: STEM,
      options: ["information, though;", "information, though,", "information; though", "information though,"],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice uses a semicolon to join two independent clauses (\"Nakalembe doesn’t just…though\" and \"she also shares...\"). This choice also appropriately includes \"though\" in the first clause, where it logically belongs."),
      distractors: {
        B: L("Choice B is incorrect. This choice results in a grammar error called a comma splice. It incorrectly joins two independent clauses with only a comma instead of a comma and a coordinating conjunction like \"and\" or \"but.\" \"Though\" is a transition word, but it’s not a coordinating conjunction."),
        C: L("Choice C is incorrect. This choice results in a punctuation error. A semicolon can only be used to link two independent clauses. However, if \"though\" is included in the second clause, it turns the second clause into a dependent clause, so a semicolon can’t be used after \"information.\""),
        D: L("Choice D is incorrect. This choice results in a grammar error called a comma splice. It incorrectly joins two independent clauses with only a comma instead of a comma and a coordinating conjunction like \"and\" or \"but.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-790fc366", "790fc366", 168)
    },
    {
      id: "rw-bd-62120607",
      sourceQuestionId: "62120607",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>From afar, African American fiber artist Bisa Butler’s portraits look like paintings, their depictions of human faces, bodies, and clothing so intricate that it seems only a fine brush could have rendered them. When viewed up close, however, the portraits reveal themselves to be ______ stitching barely visible among the thousands of pieces of printed, microcut fabric.</p>",
      stem: STEM,
      options: ["quilts, and the", "quilts, the", "quilts; the", "quilts. The"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between a main clause and a supplementary phrase. This choice correctly uses a comma to mark the boundary between the main clause (“the portraits...quilts”) and the supplementary noun phrase (“the stitching...fabric”) that provides a further description of how the portraits can be identified as quilts."),
      distractors: {
        A: L("Choice A is incorrect. A comma and the conjunction “and” can’t be used in this way to join a main clause and a supplementary noun phrase."),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to join a main clause and a supplementary noun phrase."),
        D: L("Choice D is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “the stitching.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-62120607", "62120607", 169)
    },
    {
      id: "rw-bd-2bb7416a",
      sourceQuestionId: "2bb7416a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In paleontology, the term “Elvis taxon” gets applied to a newly identified living species that was once presumed to be extinct. Like an Elvis impersonator who might bear a striking resemblance to the late musical icon Elvis Presley himself, an Elvis taxon is not the real thing, ______ is a misidentified look-alike.</p>",
      stem: STEM,
      options: ["however but it", "however it", "however, it", "however. It"],
      answer: "D",
      explanation: L("Choice D is the best answer. The clause “Like an Elvis impersonator…real thing” and the clause “it is…look-alike” are both independent clauses, so making them into two separate sentences is grammatically correct."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a run-on sentence error. The clause “Like an Elvis impersonator…real thing” and the clause “it is…look- alike” are both independent clauses, so they need to be separated with at least a comma + a coordinating conjunction. This choice provides the coordinating conjunction “but,” but it’s missing a comma."),
        B: L("Choice B is incorrect. This choice creates a run-on sentence error. The clause “Like an Elvis impersonator…real thing” and the clause “it is…look-alike” are both independent clauses, so they need to be separated with a semicolon, a colon, a dash, a period, or a comma + a coordinating conjunction."),
        C: L("Choice C is incorrect. This choice creates a run-on sentence error. The clause “Like an Elvis impersonator…real thing” and the clause “it is…look-alike” are both independent clauses, so they need to be separated with at least a comma + a coordinating conjunction. This choice provides a comma, but it’s missing a coordinating conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-2bb7416a", "2bb7416a", 171)
    },
    {
      id: "rw-bd-a05cc490",
      sourceQuestionId: "a05cc490",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>With the development of new technologies that use natural resources more efficiently, the overall consumption of those resources might be expected to decrease. Economists have observed that improvements in efficiency often correlate negatively with resource ______ efficiency gains, lowering the cost of use, may increase demand to the extent that resource consumption ultimately rises.</p>",
      stem: STEM,
      options: ["conservation, though,", "conservation; though", "conservation, though;", "conservation, though"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to separate the supplementary adverb \"though\" from the preceding main clause (\"Economists…conservation\") and uses a semicolon to join the next main clause (\"efficiency gains…rises\") to the rest of the sentence. Further, placing the semicolon after \"though\" indicates that the information in the preceding main clause (\"improvements in efficiency often correlate negatively with resource conservation\") is contrary to what might be assumed from the information in the previous sentence (resource consumption would be expected to decrease with the development of new, more efficient technologies)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Commas can’t be used in this way to punctuate a supplementary word or phrase between two main clauses."),
        B: L("Choice B is incorrect because it fails to mark the boundary between the two main clauses (\"Economists...though\" and \"efficiency gains....rises\") with appropriate punctuation. Moreover, placing the semicolon after \"conservation\" illogically indicates that the information in the next clause (gains in efficiency may lead to an increase in resource consumption) is contrary to the information in the previous clause (\"improvements in efficiency often correlate negatively with resource conservation\")."),
        D: L("Choice D is incorrect because placing a comma after \"conservation\" illogically indicates that the information in the next clause (gains in efficiency may lead to an increase in resource consumption) is contrary to the information in the previous clause (\"improvements in efficiency often correlate negatively with resource conservation\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a05cc490", "a05cc490", 173)
    },
    {
      id: "rw-bd-89ab0d46",
      sourceQuestionId: "89ab0d46",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>After the printing press was introduced in 1440, handwritten manuscripts from Europe’s medieval period were often destroyed and the paper used for other purposes. In one instance, pages ______ a collection of Norse tales dating to 1270 were discovered lining a bishop’s miter (hat).</p>",
      stem: STEM,
      options: ["from:", "from,", "from", "from—"],
      answer: "C",
      explanation: L("Choice C is the best answer. The word “from” introduces a prepositional phrase that modifies the noun “pages” and provides essential information about their origin. No additional punctuation is needed after “from” in this context."),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a punctuation error, illogically separating the preposition “from” from the rest of the prepositional phrase with a colon. Also, a colon can only follow an independent clause, but what comes before the blank could not stand on its own as a complete sentence."),
        B: L("Choice B is incorrect. This choice results in a punctuation error, illogically separating the preposition “from” from the rest of the prepositional phrase with a comma."),
        D: L("Choice D is incorrect. This choice results in a punctuation error, illogically separating the preposition “from” from the rest of the prepositional phrase with a dash.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-89ab0d46", "89ab0d46", 174)
    },
    {
      id: "rw-bd-85b8b9c5",
      sourceQuestionId: "85b8b9c5",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Many mechanical calculators were powered by a notched cylinder mechanism called the Leibniz wheel. Leibniz wheel calculators were popular in the first half of the twentieth ______ these ingenious devices were eventually replaced by electronic calculators.</p>",
      stem: STEM,
      options: ["century", "century,", "century, but", "century that"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and a coordinating conjunction (\"but\") to join the first main clause (\"Leibniz...century\") and the second main clause (\"these ingenious...calculators\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because joining the two main clauses in this way with the subordinating conjunction \"that\" results in an ungrammatical and illogical sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-85b8b9c5", "85b8b9c5", 175)
    },
    {
      id: "rw-bd-b0a525be",
      sourceQuestionId: "b0a525be",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Santa Clara Pueblo artist Roxanne Swentzell’s sculpture Mud Woman Rolls On consists of five human figures made of clay and plant fiber and arranged in descending size; each figure holds the smaller one in front of it. The arrangement of the figures, according to ______ represents her idea that “we all come from the Earth, generation after generation.”</p>",
      stem: STEM,
      options: ["Swentzell", "Swentzell,", "Swentzell:", "Swentzell—"],
      answer: "B",
      explanation: L("Choice B is the best answer. The phrase “according to Swentzell” is an aside that interrupts the flow of the sentence, so it needs to be separated from the sentence with a pair of matching punctuation marks: two commas, two dashes, or a pair of parentheses. We already have a comma before “according,” so we must add a comma after “Swentzell.” ."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a punctuation error. The phrase “according to Swentzell” is an aside that interrupts the flow of the sentence, so it needs to be separated from the sentence with a pair of matching punctuation marks: one before and one after the phrase."),
        C: L("Choice C is incorrect. This choice creates a punctuation error. “The arrangement of the figures, according to Swentzell” is not an independent clause, so it can’t come before a colon."),
        D: L("Choice D is incorrect. This choice creates a punctuation error. The phrase “according to Swentzell” is an aside that interrupts the flow of the sentence, so it needs to be separated from the sentence with a pair of matching punctuation marks. We already have a comma at the beginning, so we have to use another comma here to match. We can’t just switch to a dash! .")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b0a525be", "b0a525be", 176)
    },
    {
      id: "rw-bd-eef91a50",
      sourceQuestionId: "eef91a50",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Nine months before Rosa Parks made history by refusing to comply with the segregated seating policy on a Montgomery, Alabama, bus, a fifteen-year-old Montgomery girl named Claudette Colvin was arrested for the same ______ to some historians, Colvin’s arrest led to Parks’s action and eventually to the desegregation of Montgomery’s bus system.</p>",
      stem: STEM,
      options: ["offense. According", "offense, according", "offense according", "offense and according"],
      answer: "A",
      explanation: L("Choice A is the best answer. “Nine months…offense” and “according to…system” are both independent clauses. Separating them with a period and turning them into their own sentences is the only grammatically correct choice among the provided options."),
      distractors: {
        B: L("Choice B is incorrect. This choice results in a comma splice error, which is a punctuation error that occurs when two independent clauses are joined by only a comma. “Nine months…offense” and “according to…system” are both independent clauses, so they need to be either joined by a semicolon, joined by a comma and a coordinating conjunction, or separated by a period."),
        C: L("Choice C is incorrect. This choice results in a run-on sentence, which occurs when two independent clauses are joined without punctuation. “Nine months…offense” and “according to…system” are both independent clauses, so they need to be either joined by a semicolon, joined by a comma and a coordinating conjunction, or separated by a period."),
        D: L("Choice D is incorrect. This choice results in a run-on sentence, which occurs when two independent clauses are joined without punctuation. “Nine months…offense” and “according to…system” are independent clauses, so we would need to put a comma before the coordinating conjunction “and” to join them properly.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-eef91a50", "eef91a50", 177)
    },
    {
      id: "rw-bd-01a32c84",
      sourceQuestionId: "01a32c84",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The first computerized spreadsheet, Dan Bricklin’s VisiCalc, improved financial recordkeeping not only by providing users with an easy means of adjusting data in spreadsheets but also by automatically updating all calculations that were dependent on these ______ to VisiCalc’s release, changing a paper spreadsheet often required redoing the entire sheet by hand, a process that could take days.</p>",
      stem: STEM,
      options: ["adjustments prior", "adjustments, prior", "adjustments. Prior", "adjustments and prior"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between the first sentence (“The...adjustments”) and the second sentence (“Prior...days”). Because the adverbial phrase beginning with “prior” indicates when changing a spreadsheet required redoing the sheet by hand, that phrase belongs with the second sentence."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. Two sentences are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect. Without a comma preceding it, the conjunction “and” can’t be used in this way to join the sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-01a32c84", "01a32c84", 178)
    },
    {
      id: "rw-bd-548f4956",
      sourceQuestionId: "548f4956",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>It is generally true that technological change is a linear process, in which once-useful technologies are replaced by new and better ______ the reawakening of interest in the steam engine (from advocates of carbon-neutral rail travel) reminds us that ostensibly obsolete technologies may be brought back into service to address society’s changing needs.</p>",
      stem: STEM,
      options: ["ones, even so;", "ones even so,", "ones; even so,", "ones, even so,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (“It is…ones”) and the second main clause (“even so…needs”). Furthermore, the placement of the semicolon after “ones” indicates that the supplementary phrase “even so” modifies the following clause (“the reawakening...needs”), resulting in the most logical and grammatically complete sentence. With this punctuation, the sentence logically indicates that the recent interest in an old technology like steam engines is despite the fact that technological change typically seeks out new technologies."),
      distractors: {
        A: L("Choice A is incorrect because it results in a confusing and illogical sentence. Placing the semicolon after “so” indicates that the supplementary element “even so” modifies the first clause of the sentence, which doesn’t make sense in this context."),
        B: L("Choice B is incorrect because it results in a run-on sentence. It fails to mark the boundary between the two main clauses with appropriate punctuation."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join the two main clauses of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-548f4956", "548f4956", 179)
    },
    {
      id: "rw-bd-9d4a701b",
      sourceQuestionId: "9d4a701b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Along with carbon dioxide concentration and temperature, light intensity affects the chemical reaction rate of ______ as light intensity increases, so does the rate at which the reactants (water and carbon dioxide) are converted into their products (glucose and oxygen).</p>",
      stem: STEM,
      options: ["photosynthesis and", "photosynthesis,", "photosynthesis:", "photosynthesis"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation in a sentence. In this choice, a colon is correctly used to mark the boundary between one main clause (\"Along with...photosynthesis\") and another main clause (\"as light...oxygen\") and to introduce the following explanation of how light intensity affects photosynthesis."),
      distractors: {
        A: L("Choice A is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction (\"and\")."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a coordinating conjunction following it, a comma can’t be used in this way to join two main clauses (\"Along with...photosynthesis\" and \"as light...oxygen\")."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses (\"Along with...photosynthesis\" and \"as light...oxygen\") are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-9d4a701b", "9d4a701b", 180)
    },
    {
      id: "rw-bd-2c84f96a",
      sourceQuestionId: "2c84f96a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 2017, artists Isabel and Ruben Toledo redesigned the costumes and sets for The Miami City Ballet’s production of The ______ to reviewers, the Toledos’ designs helped infuse the production with elements of Miami’s Latin American culture.</p>",
      stem: STEM,
      options: ["Nutcracker according,", "Nutcracker, according", "Nutcracker according", "Nutcracker. According"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (“In 2017...Nutcracker”) and another (“According...culture”). The supplementary element “according to reviewers” modifies the main clause of the second sentence (“the Toledos’...culture”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The sentences are fused without punctuation and/or a conjunction. Furthermore, no punctuation is needed within the supplementary element “according to reviewers.”"),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The sentences are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-2c84f96a", "2c84f96a", 181)
    },
    {
      id: "rw-bd-6181924a",
      sourceQuestionId: "6181924a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Fernando Palma Rodríguez creates robotic sculptures that combine mechanical elements with materials like feathers, soil, and seeds. The artist is from a rural farming community outside Mexico City, and he studied engineering in college. The natural and mechanical ______ highlight these two aspects of his background.</p>",
      stem: STEM,
      options: ["materials that Palma Rodríguez uses in his art,", "materials that Palma Rodríguez uses in his art", "materials, that Palma Rodríguez uses in his art,", "materials, that Palma Rodríguez uses in his art"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of an integrated relative clause within a sentence. No punctuation is needed between the noun phrase (“The natural and mechanical materials”) and the integrated relative clause (“that Palma Rodríguez uses in his art”). The integrated relative clause provides essential information about the materials, so no punctuation should separate it from the noun phrase it modifies. Additionally, no punctuation is needed between the sentence’s subject (“The natural and mechanical materials that Palma Rodríguez uses in his art”) and its main verb (“highlight”)."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the sentence’s subject (“The natural...art”) and its main verb (“highlight”)."),
        C: L("Choice C is incorrect because no punctuation is needed between the noun phrase (“The natural...materials”) and the integrated relative clause (“that...art”) that modifies it. Additionally, no punctuation is needed between the sentence’s subject (“The natural...art”) and its main verb (“highlight”)."),
        D: L("Choice D is incorrect because no punctuation is needed between the noun phrase (“The natural...materials”) and the integrated relative clause (“that...art”) that modifies it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6181924a", "6181924a", 182)
    },
    {
      id: "rw-bd-4ba99a6f",
      sourceQuestionId: "4ba99a6f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Seneca sculptor Marie Watt’s blanket art comes in a range of shapes and sizes. In 2004, Watt sewed strips of blankets together to craft a 10-by- 13-inch ______ in 2014, she arranged folded blankets into two large stacks and then cast them in bronze, creating two curving 18-foot-tall blue- bronze pillars.</p>",
      stem: STEM,
      options: ["sampler later,", "sampler;", "sampler,", "sampler, later,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (“In 2004…sampler”) and the second main clause (“in 2014…pillars”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses. The word “later” is an adverb and cannot be used to join two main clauses unless it is preceded by a conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses. The word “later” is an adverb and cannot be used to join two main clauses unless it is preceded by a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-4ba99a6f", "4ba99a6f", 185)
    },
    {
      id: "rw-bd-ce81d0b7",
      sourceQuestionId: "ce81d0b7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The life spans of rockfish vary greatly by species. For instance, the colorful calico rockfish (Sebastes dallii) can survive for a little over a ______ the rougheye rockfish (Sebastes aleutianus) boasts a maximum life span of about two centuries.</p>",
      stem: STEM,
      options: ["decade: while", "decade. While", "decade; while", "decade, while"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation between a main clause and a subordinate clause. This choice correctly uses a comma to mark the boundary between the main clause (\"the colorful…decade\") and the subordinate clause (\"while…centuries\") that provides contrasting information about the life span of rougheye rockfish."),
      distractors: {
        A: L("Choice A is incorrect because a colon can’t be used in this way to join a main clause and a subordinate clause."),
        B: L("Choice B is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"while.\""),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to join a main clause and a subordinate clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-ce81d0b7", "ce81d0b7", 186)
    },
    {
      id: "rw-bd-db24ecc9",
      sourceQuestionId: "db24ecc9",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Arctic-Alpine Botanic Garden in Norway and the Jardim Botânico of Rio de Janeiro in Brazil are two of many botanical gardens around the world dedicated to growing diverse plant ______ fostering scientific research; and educating the public about plant conservation.</p>",
      stem: STEM,
      options: ["species, both native and nonnative,", "species, both native and nonnative;", "species; both native and nonnative,", "species both native and nonnative,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of items in a complex series (a series including internal punctuation). The semicolon after “nonnative” is correctly used to separate the first item (“growing diverse plant species, both native and nonnative”) and the second item (“fostering scientific research”) in the series of things that botanical gardens are dedicated to. Further, the comma after “species” is correctly used to separate the noun phrase “diverse plant species” and the supplementary phrase “both native and nonnative” that modifies it."),
      distractors: {
        A: L("Choice A is incorrect because a comma (specifically, the comma after “nonnative”) can’t be used in this way to separate items in a complex series."),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to separate the noun phrase “diverse plant species” and the supplementary phrase “both native and nonnative” that modifies it. Further, a comma can’t be used in this way to separate items in a complex series."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the noun phrase “diverse plant species” and the supplementary phrase “both native and nonnative” that modifies it. Further, a comma can’t be used in this way to separate items in a complex series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-db24ecc9", "db24ecc9", 187)
    },
    {
      id: "rw-bd-0fa289a7",
      sourceQuestionId: "0fa289a7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 1955, Indian Bengali filmmaker Satyajit Ray released his first movie, Pather ______ quiet black-and-white drama about a family in rural India, Ray’s film was quite different from the loud, colorful action-romance movies that were popular at the time.</p>",
      stem: STEM,
      options: ["Panchali a", "Panchali, which was a", "Panchali, a", "Panchali. A"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"In…Panchali\") and another (\"A quiet…time\"). The phrase beginning with \"a quiet\" modifies the subject of the next sentence, \"Ray’s film.\""),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The sentences are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-0fa289a7", "0fa289a7", 189)
    },
    {
      id: "rw-bd-ace95f84",
      sourceQuestionId: "ace95f84",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>By analyzing the level of radioactive decay within a fossil specimen, scientists can establish the age of that fossil with a high degree of precision. When radioactive elements aren’t present, scientists turn to ______ analysis of Earth’s sediment layers (strata)—to estimate how old a fossil is based on the age of the strata in which the fossil is found.</p>",
      stem: STEM,
      options: ["stratigraphy—the", "stratigraphy (the", "stratigraphy: the", "stratigraphy, the"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. The dash after \"stratigraphy\" pairs with the dash after \"(strata)\" to separate the supplementary element \"the analysis of Earth’s sediment layers (strata)\" from the rest of the sentence. This supplementary element functions to define the term \"stratigraphy,\" and the pair of dashes indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        B: L("Choice B is incorrect because a parenthesis can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because a colon can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because a comma can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-ace95f84", "ace95f84", 191)
    },
    {
      id: "rw-bd-6df020e6",
      sourceQuestionId: "6df020e6",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A study showed that a solar park caused nearby land to cool, though the ecological impact of this temperature decrease isn’t yet known. Before the park’s construction, the surface temperature 30 meters outside of the park boundary was 0.1°C cooler than that of a control ______ construction, the temperature 30 meters outside of the boundary was 1.7°C cooler than that of the control area.</p>",
      stem: STEM,
      options: ["area after", "area after,", "area. After", "area, after"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used to correctly mark the boundary between one sentence (\"Before...area\") and another (\"After...area\"). The phrase \"After construction\" modifies the next sentence to indicate that the temperature was cooler after construction."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence that fuses the two sentences (\"Before...area\" and \"after...area\") without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a run-on sentence that connects the two sentences (\"Before...area\" and \"after...area\") without punctuation and/or a conjunction. Additionally, no punctuation is needed between \"after\" and \"construction.\""),
        D: L("Choice D is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between the two sentences (\"Before...area\" and \"after...area\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6df020e6", "6df020e6", 192)
    },
    {
      id: "rw-bd-f30a478e",
      sourceQuestionId: "f30a478e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A study published by Rice University geoscientist Ming Tang in 2019 offers a new explanation for the origin of Earth’s ______ structures called arcs, towering ridges that form when a dense oceanic plate subducts under a less dense continental plate, melts in the mantle below, and then rises and bursts through the continental crust above.</p>",
      stem: STEM,
      options: ["continents geological", "continents: geological", "continents; geological", "continents. Geological"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between a main clause and a supplementary phrase. In this choice, a colon is correctly used to mark the boundary between the main clause (“A study…continents”) and the supplementary phrase (“geological… above”) and to introduce the following explanation of the origin of Earth’s continents."),
      distractors: {
        A: L("Choice A is incorrect because it fails to mark the boundary between the main clause (“A study…continents”) and the supplementary phrase (“geological…above”) with appropriate punctuation."),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to join the main clause (“A study…continents”) and the supplementary phrase (“geological…above”). A semicolon is conventionally used to join two main clauses, whereas a colon is conventionally used to introduce an element that explains or amplifies the information in the preceding clause, making it the better choice in this context."),
        D: L("Choice D is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “geological.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-f30a478e", "f30a478e", 194)
    },
    {
      id: "rw-bd-67667d72",
      sourceQuestionId: "67667d72",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Humans were long thought to have begun occupying the Peruvian settlement of Machu Picchu between 1440 and 1450 CE. However, a team led by anthropologist Dr. Richard Burger used accelerator mass spectrometry to uncover evidence that it was occupied ______ 1420 CE, according to Burger, humans were likely inhabiting the area.</p>",
      stem: STEM,
      options: ["earlier. In", "earlier, in", "earlier, which in", "earlier in"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (“However...earlier”) and another (“In...area”). The supplementary phrase “in 1420 CE” modifies “humans,” the subject of the third sentence."),
      distractors: {
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences. Moreover, the subordinating conjunction “which” creates a confusing and illogical sentence that suggests that the supplementary phrase beginning with “in” modifies the previous information (“However...earlier”) rather than the information that follows."),
        D: L("Choice D is incorrect because it results in a run- on sentence. The sentences (“However...earlier” and “in...area”) are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-67667d72", "67667d72", 195)
    },
    {
      id: "rw-bd-80aa7690",
      sourceQuestionId: "80aa7690",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Austronesian language family includes Tagalog, Malagasy, and some 1,200 other languages throughout the Pacific, making it one of the largest language families in the world and of keen interest to ______ of the University of Toronto.</p>",
      stem: STEM,
      options: ["linguist, Diane Massam,", "linguist, Diane Massam", "linguist Diane Massam", "linguist: Diane Massam"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation between titles and proper nouns. No punctuation is needed to set off the proper noun \"Diane Massam\" from the title that describes Massam, \"linguist.\" Because \"Diane Massam\" is essential information identifying the \"linguist,\" no punctuation is necessary."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed before or after the proper noun \"Diane Massam.\" Setting the linguist’s name off with commas suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case."),
        B: L("Choice B is incorrect because no punctuation is needed."),
        D: L("Choice D is incorrect because no punctuation is needed.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-80aa7690", "80aa7690", 196)
    },
    {
      id: "rw-bd-75eb5242",
      sourceQuestionId: "75eb5242",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Many companies have simplified their products’ packaging designs in recent years, but ______ Researcher Lan Anh Nu Ton and her colleagues designed a research study to find out.</p>",
      stem: STEM,
      options: ["consumers actually do prefer this simpler style.", "do consumers actually prefer this simpler style?", "do consumers actually prefer this simpler style.", "consumers actually do prefer this simpler style?"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a question mark to punctuate the interrogative clause “do consumers actually prefer this simpler style,” which asks a direct question at the end of the sentence. This is the question that the researchers in the next sentence were trying to investigate."),
      distractors: {
        A: L("Choice A is incorrect because the context requires an interrogative clause. The declarative clause “consumers actually do prefer this simpler style” incorrectly indicates the consumers’ preference was already known, whereas the researchers had yet to find this out."),
        C: L("Choice C is incorrect because a period can’t be used in this way to punctuate an interrogative clause at the end of a sentence."),
        D: L("Choice D is incorrect because a question mark can’t be used in this way to punctuate a declarative clause, such as “consumers actually do prefer this simpler style,” at the end of a sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-75eb5242", "75eb5242", 199)
    },
    {
      id: "rw-bd-04bfd364",
      sourceQuestionId: "04bfd364",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The intense pressure found in the deep ocean can affect the structure of proteins in fish’s cells, distorting the proteins’ shape. The chemical trimethylamine N-oxide (TMAO) counters this effect, ensuring that proteins retain their original ______ is found in high concentrations in the cells of the deepest-dwelling fish.</p>",
      stem: STEM,
      options: ["configurations. TMAO", "configurations TMAO", "configurations, TMAO", "configurations and TMAO"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period after “configurations” is used correctly to mark the boundary between one sentence (“The intense…configurations”) and another (“TMAO…fish”). The supplementary phrase (“ensuring…configurations”) modifies the main clause of the first sentence (“The chemical…effect”), and “TMAO” is the subject of the second sentence."),
      distractors: {
        B: L("Choice B is incorrect because it results in a run-on sentence. The sentences (“The intense…configurations” and “TMAO…fish”) are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect. Without a comma preceding it, the conjunction “and” can’t be used in this way to join sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-04bfd364", "04bfd364", 204)
    },
    {
      id: "rw-bd-36868920",
      sourceQuestionId: "36868920",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Increasing the heat on an uncovered boiling pot of water does not increase the temperature of the water. What increases is the rate at which the water turns to ______ a pressure cooker pot, though, an airtight seal traps the vapor in the pot, creating pressure that allows the temperature of the water to increase past its boiling point.</p>",
      stem: STEM,
      options: ["vapor. With", "vapor with", "vapor, with", "vapor and with"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"What…vapor\") and another (\"With…point\")."),
      distractors: {
        B: L("Choice B is incorrect because it results in a run-on sentence. The sentences (\"What…vapor\" and \"with…point\") are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-36868920", "36868920", 206)
    },
    {
      id: "rw-bd-ea8f4658",
      sourceQuestionId: "ea8f4658",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When particles are suspended in liquid (like pollen in a water glass), they will zigzag randomly through the liquid and collide with one another in perpetuity. This type of random, continuous ______ is known as Brownian motion, can be observed throughout the natural world.</p>",
      stem: STEM,
      options: ["movement: which", "movement, which", "movement which", "movement. Which"],
      answer: "B",
      explanation: L("Choice B is the best answer. This choice correctly uses commas to set off the nonessential relative clause \"which is known as Brownian motion\" that provides extra information about the \"random, continuous movement\" that isn’t necessary for the function of the sentence."),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a punctuation error. The relative clause \"which is known as Brownian motion\" is a nonessential supplement. Nonessential supplements need to be set apart from the rest of the sentence with a pair of commas, dashes, or parentheses, so we can’t use a colon here. Also, notice that colons can only come after an independent clause, which isn’t the case here."),
        C: L("Choice C is incorrect. This choice results in a punctuation error. The relative clause \"which is known as Brownian motion\" is a nonessential supplement, so it should be separated from the rest of the sentence by a pair of matching punctuation marks. We already have a comma after \"motion,\" so we need to add a comma before \"which.\" This choice is missing that comma."),
        D: L("Choice D is incorrect. This choice results in a sentence fragment. \"This type of random, continuous movement\" is not an independent clause and can’t stand alone as a full sentence, so we can’t put a period here.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-ea8f4658", "ea8f4658", 209)
    },
    {
      id: "rw-bd-5670a657",
      sourceQuestionId: "5670a657",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>During the decades-long movement to codify the rights of Latinos in the US, certain events were pivotal: the founding of social justice group the League of United Latin American Citizens in ______ Katzenbach v. Morgan court decision in 1966, which affirmed the rights of Latino voters, is another such event.</p>",
      stem: STEM,
      options: ["1929. For one, the", "1929, for one, the", "1929 for one, the", "1929, for one. The"],
      answer: "D",
      explanation: L("Choice D is the best answer. The conventions being tested are punctuation use between sentences and the punctuation of a supplementary element. This choice correctly uses a period to mark the boundary between one sentence (\"During...one\") and another (\"The Katzenbach...event\") and uses a comma to separate the supplementary phrase \"for one\" from the preceding main clause. Further, placing the period after \"for one\" correctly indicates that the information in the preceding main clause (\"the founding...1929\") is the first example provided of a pivotal event in the Latino rights movement."),
      distractors: {
        A: L("Choice A is incorrect because placing the period after \"1929\" illogically indicates that the information in the next main clause (describing the Katzenbach v. Morgan court decision) is the first example provided of a pivotal event in the Latino rights movement; rather, it’s a second example."),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to join two main clauses."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to join two main clauses. Moreover, it fails to use appropriate punctuation to separate the supplementary element \"for one\" from the preceding main clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5670a657", "5670a657", 212)
    },
    {
      id: "rw-bd-b6560e5a",
      sourceQuestionId: "b6560e5a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Materials scientist Marie-Agathe Charpagne and her colleagues believed they could improve on the multicomponent alloy NiCoCr, an equal- proportions mixture of nickel (Ni), cobalt (Co), and chromium (Cr), by replacing chromium with ruthenium ______ the alloy that resulted, NiCoRu, turned out to be an unsuitable replacement for NiCoCr.</p>",
      stem: STEM,
      options: ["(Ru)", "(Ru) but", "(Ru),", "(Ru), but"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the coordination of main clauses. This choice correctly uses a comma and the coordinating conjunction “but” to join the first main clause (“Materials…Ru”) and the second main clause (“the alloy…NiCoCr”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b6560e5a", "b6560e5a", 213)
    },
    {
      id: "rw-bd-5aa171de",
      sourceQuestionId: "5aa171de",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Chondrites are stony meteorites that are undifferentiated—that is, their contents have not melted and separated into distinct layers. They are hardly ______ many chondrites experience aqueous alteration as a result of exposure to fluids, as well as fracturing, veining, and localized melting due to collisions with other objects.</p>",
      stem: STEM,
      options: ["pristine, though", "pristine, though;", "pristine; though", "pristine, though,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to separate the supplementary adverb \"though\" from the preceding main clause (\"They are hardly pristine\") and uses a semicolon to join the two main clauses (\"They…though\" and \"many…objects\"). Further, placing the semicolon after \"though\" indicates that the information in the preceding main clause (chondrites are far from pristine) is contrary to what might be assumed from the information in the previous sentence (chondrites have been generally unaltered by their environment)."),
      distractors: {
        A: L("Choice A is incorrect because placing the comma after \"pristine\" and using \"though\" as a subordinating conjunction illogically indicates that the information in the next main clause (many chondrites have experienced damage) is contrary to the information in the previous clause (chondrites are far from pristine)."),
        C: L("Choice C is incorrect because placing the semicolon after \"pristine\" illogically indicates that the information in the next main clause (many chondrites have experienced damage) is contrary to the information in the previous clause (chondrites are far from pristine)."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, the comma after \"though\" can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5aa171de", "5aa171de", 214)
    },
    {
      id: "rw-bd-432b1ede",
      sourceQuestionId: "432b1ede",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The forty-seven geothermal springs of Arkansas’ Hot Springs National Park are sourced via a process known as natural groundwater recharge, in which rainwater percolates downward through the earth—in this case, the porous rocks of the hills around Hot ______ collect in a subterranean basin.</p>",
      stem: STEM,
      options: ["Springs to", "Springs: to", "Springs—to", "Springs, to"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The dash after “Springs” pairs with the dash after “earth” to separate the supplementary element “in this case, the porous rocks of the hills around Hot Springs” from the rest of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because a colon can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because a comma can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-432b1ede", "432b1ede", 217)
    },
    {
      id: "rw-bd-c21df211",
      sourceQuestionId: "c21df211",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 1959, the film industry debuted Smell-O-Vision. Theaters were fitted with specialized vents that emitted odors at specific points in a ______ as the scent of roses when roses appeared in a scene. Smell-O-Vision failed to impress, however, with one reviewer declaring it “briefly weird and not very interesting.”</p>",
      stem: STEM,
      options: ["movie such", "movie; such", "movie. Such", "movie, such"],
      answer: "D",
      explanation: L("Choice D is the best answer. The comma appropriately separates the nonessential descriptive aside \"such as…scene\" from the independent clause \"Theaters were…movie.\" Since the descriptive example of roses isn’t necessary for the sentence to function, it needs to be set off with punctuation."),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a run-on sentence. Since the example of roses isn’t necessary for the sentence to function, the descriptive aside \"such as…scene\" needs to be separated from the preceding independent clause with some sort of punctuation."),
        B: L("Choice B is incorrect. This choice creates a punctuation error. A semicolon can only be used to separate two independent clauses, but \"such…scene\" is not an independent clause and couldn’t stand on its own as a sentence."),
        C: L("Choice C is incorrect. This choice results in a sentence fragment. The descriptive aside \"Such…scene\" is not an independent clause and can’t stand on its own as a sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c21df211", "c21df211", 218)
    },
    {
      id: "rw-bd-267a13e2",
      sourceQuestionId: "267a13e2",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 2010, archaeologist Noel Hidalgo Tan was visiting the twelfth-century temple of Angkor Wat in Cambodia when he noticed markings of red paint on the temple ______ the help of digital imaging techniques, he discovered the markings to be part of an elaborate mural containing over 200 paintings.</p>",
      stem: STEM,
      options: ["walls, with", "walls with", "walls so with", "walls. With"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period after “walls” is used correctly to mark the boundary between the first sentence (“In...walls”) and the second sentence (“With…techniques”), which starts with a supplementary phrase."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        B: L("Choice B is incorrect because it results in a run-on sentence. The sentences (“In...walls” and “with...paintings”) are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect. Without a comma preceding it, the conjunction “so” can’t be used in this way to join sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-267a13e2", "267a13e2", 220)
    },
    {
      id: "rw-bd-403d7bb5",
      sourceQuestionId: "403d7bb5",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>According to Naomi Nakayama of the University of Edinburgh, the reason seeds from a dying dandelion appear to float in the air while ______ is that their porous plumes enhance drag, allowing the seeds to stay airborne long enough for the wind to disperse them throughout the surrounding area.</p>",
      stem: STEM,
      options: ["falling,", "falling:", "falling;", "falling"],
      answer: "D",
      explanation: L("Choice D is the best answer. The word “falling” occurs in the middle of a clause and isn’t part of a supplement, so we don’t need any punctuation after it. We can see this more clearly if we simplify the rest of the sentence: “The reason seeds appear to float while falling is that their plumes enhance drag.” ."),
      distractors: {
        A: L("Choice A is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. The word “falling” occurs in the middle of a clause and isn’t part of a supplement, so we don’t need any punctuation after it. We can see this more clearly if we simplify the sentence: “The reason seeds appear to float while falling is that their plumes enhance drag.” ."),
        B: L("Choice B is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. The word “falling” occurs in the middle of a clause and isn’t part of a supplement, so we don’t need any punctuation after it. We can see this more clearly if we simplify the sentence: “The reason seeds appear to float while falling is that their plumes enhance drag.” ."),
        C: L("Choice C is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. The word “falling” occurs in the middle of a clause and isn’t part of a supplement, so we don’t need any punctuation after it. We can see this more clearly if we simplify the sentence: “The reason seeds appear to float while falling is that their plumes enhance drag.” .")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-403d7bb5", "403d7bb5", 221)
    },
    {
      id: "rw-bd-fcab3630",
      sourceQuestionId: "fcab3630",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In his Naturalis historia, Pliny the Elder praised Hipparchus’s star catalog, a second-century BCE list of roughly 850 different stars’ celestial positions. For centuries, scholars dreamed about locating a copy of this legendary lost ______ fantasy (partially) became reality in 2022, when researchers uncovered traces of the star catalog on a palimpsest, a reused parchment.</p>",
      stem: STEM,
      options: ["work, that", "work that", "work. That", "work and that"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"For…work\") and another (\"That…parchment\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        B: L("Choice B is incorrect because it results in a run-on sentence. The sentences (\"For…work\" and \"that…parchment\") are fused without punctuation and/or a conjunction."),
        D: L("Choice D is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-fcab3630", "fcab3630", 222)
    },
    {
      id: "rw-bd-a7fdf862",
      sourceQuestionId: "a7fdf862",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Azulejos, mosaics made of glazed ceramic tiles, can be found throughout Portugal. These mosaics beautify places such as ______ stations, and public squares.</p>",
      stem: STEM,
      options: ["libraries train", "libraries: train", "libraries—train", "libraries, train"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the punctuation of items in a simple series. The comma after \"libraries\" is used conventionally to separate the first and second items (\"libraries\" and \"train stations\") in the series."),
      distractors: {
        A: L("Choice A is incorrect because it fails to separate the first two items (\"libraries\" and \"train stations\") in the series."),
        B: L("Choice B is incorrect because a colon can’t be used in this way to separate items in a simple series."),
        C: L("Choice C is incorrect because a dash can’t be used in this way to separate items in a simple series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a7fdf862", "a7fdf862", 223)
    },
    {
      id: "rw-bd-21e58a83",
      sourceQuestionId: "21e58a83",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Jetties—long, narrow structures that extend from a landmass into the water—are often constructed to protect coastlines from erosion. Jetties can sometimes have the opposite ______ obstructing the natural flow of sand along the shore can lead to increased erosion in some areas.</p>",
      stem: STEM,
      options: ["effect, though;", "effect, though", "effect; though", "effect, though,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to separate the supplementary adverb \"though\" from the preceding main clause (\"Jetties can sometimes have the opposite effect\") and uses a semicolon to join the next main clause (\"obstructing…areas\") to the rest of the sentence. Further, placing the semicolon after \"though\" logically indicates that the information earlier in this sentence (that jetties can sometimes cause erosion) is contrary to what might be assumed from the information in the previous sentence (that jetties are often constructed for the purpose of protecting coastlines from erosion)."),
      distractors: {
        B: L("Choice B is incorrect because it fails to mark the boundary between the two main clauses with appropriate punctuation. With \"though…areas\" functioning as a subordinate clause following the comma, this choice illogically indicates that the following information (that obstructing the natural flow of sand along the shore can sometimes lead to erosion) is contrary to the information earlier in the sentence (that jetties can sometimes cause erosion). Instead, the information following \"though\" supports the previous claim about the erosive effects of jetties."),
        C: L("Choice C is incorrect because it’s not conventional to use a semicolon in this way to separate a main clause from a dependent clause. Further, it illogically indicates that the following information (that obstructing the natural flow of sand along the shore can sometimes lead to erosion) is contrary to the information earlier in the sentence (that jetties can sometimes cause erosion). Instead, the information following \"though\" supports the previous claim about the erosive effects of jetties."),
        D: L("Choice D is incorrect because it results in a comma splice. Commas can’t be used in this way to set off a supplementary word or phrase between two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-21e58a83", "21e58a83", 224)
    },
    {
      id: "rw-bd-6b49f5f1",
      sourceQuestionId: "6b49f5f1",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1727, dramatist Lewis Theobald presented a new play, Double Falsehood, at a London theater. Theobald claimed that his drama was based on a little-known play by William Shakespeare, Cardenio. Many, including poet Alexander Pope, were ______ historians have determined that Shakespeare’s company did perform a play called Cardenio in 1613.</p>",
      stem: STEM,
      options: ["skeptical but", "skeptical, but", "skeptical,", "skeptical"],
      answer: "B",
      explanation: L("Choice B is the best answer. There are two independent clauses in the sentence, each with a subject and a verb: \"many...were skeptical\" and \"historians have determined….\" These clauses can be grammatically joined by a comma and the coordinating conjunction \"but.\""),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a run-on sentence, which occurs when two independent clauses are joined without punctuation. Two independent clauses can’t be joined by just the coordinating conjunction \"but.\" A comma would also be required."),
        C: L("Choice C is incorrect. This choice creates a punctuation error called a comma splice. This sentence contains two independent clauses (\"Many…were skeptical\" and \"historians have determined… \"). A comma alone can’t join two independent clauses. That requires a comma and a coordinating conjunction."),
        D: L("Choice D is incorrect. This choice results in a run-on sentence, which occurs when two independent clauses are joined without punctuation. This sentence contains two independent clauses (\"Many…were skeptical\" and \"historians have determined… \"), which need to be either joined by a semicolon, joined by a comma and a coordinating conjunction, or separated by a period.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6b49f5f1", "6b49f5f1", 227)
    },
    {
      id: "rw-bd-577b09fa",
      sourceQuestionId: "577b09fa",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Robin Wall Kimmerer of the Citizen Potawatomi Nation is a bryologist, a plant scientist who specializes in mosses. To Kimmerer, mosses are Earth’s most adaptable plants: they can clone ______ enter a dormant state in times of drought, and grow in areas that don’t have soil.</p>",
      stem: STEM,
      options: ["themselves;", "themselves,", "themselves. And", "themselves"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of items in a series. The comma after “themselves” is used conventionally to separate the first item (“they can clone themselves”) and the second item (“enter a dormant state in times of drought”) in the series of things mosses can do."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to separate items in a simple series such as this."),
        C: L("Choice C is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “And enter.”"),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the first and second items in the series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-577b09fa", "577b09fa", 230)
    },
    {
      id: "rw-bd-59094d87",
      sourceQuestionId: "59094d87",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Tantaquidgeon Museum in Uncasville, Connecticut, was founded in 1931 with the goal of showcasing the culture and history of the Mohegan ______ today, nearly a century later, it is the oldest Native-owned and -operated museum in the country.</p>",
      stem: STEM,
      options: ["Tribe, and", "Tribe", "Tribe and", "Tribe,"],
      answer: "A",
      explanation: L("Choice A is the best answer. This choice uses a comma and a coordinating conjunction (“and”) to join two independent clauses (“The Tantaquidgeon…Tribe” and “Today…country”)."),
      distractors: {
        B: L("Choice B is incorrect. This choice results in a grammar error known as a run-on sentence. The clauses before and after “Tribe” are both independent, so they need to be separated with some sort of punctuation."),
        C: L("Choice C is incorrect. This choice results in a grammar error known as a run-on sentence. The clauses before and after “and” are both independent, so they can’t be linked with just a conjunction. A comma would also be required."),
        D: L("Choice D is incorrect. This choice results in a grammar error called a comma splice. The clauses before and after “Tribe” are both independent, so they can’t be linked with just a comma. A coordinating conjunction like “and” or “but” would also be required.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-59094d87", "59094d87", 231)
    },
    {
      id: "rw-bd-235c8338",
      sourceQuestionId: "235c8338",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>That the expansionist appetites of colonial European powers had their sights set on his country was evident to Siam’s King ______ deterring those ambitions through international diplomacy and domestic reform was perhaps his foremost achievement. Though his reign ended roughly twenty years before Siam became known by its modern name of Thailand, King Chulalongkorn is often credited with ushering the nation into modernity.</p>",
      stem: STEM,
      options: ["Chulalongkorn;", "Chulalongkorn that", "Chulalongkorn,", "Chulalongkorn"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (“That...Chulalongkorn”) and the second main clause (“deterring...achievement”)."),
      distractors: {
        B: L("Choice B is incorrect. Using the conjunction “that” to introduce “deterring...achievement” as a subordinate element of the main clause (“That...Chulalongkorn”) results in a confusing and ungrammatical sentence."),
        C: L("Choice C is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-235c8338", "235c8338", 232)
    },
    {
      id: "rw-bd-b771d175",
      sourceQuestionId: "b771d175",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Scala is referred to as a compiled programming language because it typically incorporates a compiler—a tool that translates lines of code into executable commands. Compiling isn’t exclusive to certain programming ______ any language can incorporate this tool.</p>",
      stem: STEM,
      options: ["languages. However,", "languages; however,", "languages, however,", "languages, however;"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to separate the supplementary adverb “however” from the preceding main clause (“Compiling...languages”) and uses a semicolon to join the next main clause (“any...tool”) to the rest of the sentence. Further, placing the semicolon after “however” indicates that the information in the preceding main clause (“compiling isn’t exclusive to certain programming languages”) is contrary to what might be assumed from the information in the previous sentence (Scala’s status as a compiled programming language might suggest that compiling is unique to certain languages)."),
      distractors: {
        A: L("Choice A is incorrect because placing a period after “languages” and starting a new sentence with “however” illogically indicates that the information in the next sentence (any language can incorporate a compiler) is contrary to the information in the previous sentence (“compiling isn’t exclusive to certain programming languages”). Instead, the information following “however” supports the previous claim."),
        B: L("Choice B is incorrect because placing the semicolon after “languages” illogically indicates that the information in the next main clause (any language can incorporate a compiler) is contrary to the information in the previous clause (“compiling isn’t exclusive to certain programming languages”). Instead, the information following “however” supports the previous claim."),
        C: L("Choice C is incorrect because it results in a comma splice. Commas can’t be used in this way to punctuate a supplementary word or phrase between two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b771d175", "b771d175", 233)
    },
    {
      id: "rw-bd-8772475b",
      sourceQuestionId: "8772475b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>For thousands of years, humans have used domesticated goats (Capra hircus) to clear land of unwanted vegetation. When it comes to their diets, goats are notoriously ______ they will devour all kinds of shrubs and weeds, leaving virtually no part of any plant unconsumed.</p>",
      stem: STEM,
      options: ["indiscriminate and", "indiscriminate,", "indiscriminate", "indiscriminate:"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between two main clauses. In this choice, a colon is correctly used to mark the boundary between one main clause (\"goats are notoriously indiscriminate\") and another main clause (\"they will devour all kinds of shrubs and weeds\") and to introduce the following explanation of goats’ nondiscriminatory behavior when it comes to what they eat."),
      distractors: {
        A: L("Choice A is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction. Furthermore, the conjunction \"and\" fails to indicate that what follows is an explanation of goats’ nondiscriminatory behavior when it comes to their diets."),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to join two main clauses (\"goats…indiscriminate\" and \"they…weeds\")."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two main clauses (\"goats…indiscriminate\" and \"they…weeds\") are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8772475b", "8772475b", 234)
    },
    {
      id: "rw-bd-83c9c503",
      sourceQuestionId: "83c9c503",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Nigerian American artist Toyin Ojih Odutola uses black-ink pens to create highly detailed drawings of human figures. Her portrait of novelist Zadie ______ is displayed in the National Portrait Gallery in London.</p>",
      stem: STEM,
      options: ["Smith:", "Smith—", "Smith", "Smith,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between a subject and a verb. No punctuation is needed when, as in this case, a subject (\"Her portrait of novelist Zadie Smith\") is immediately followed by a main verb (\"is displayed\")."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the subject and the verb."),
        B: L("Choice B is incorrect because no punctuation is needed between the subject and the verb."),
        D: L("Choice D is incorrect because no punctuation is needed between the subject and the verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-83c9c503", "83c9c503", 238)
    },
    {
      id: "rw-bd-05a14e18",
      sourceQuestionId: "05a14e18",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>While the ancient Celts—Iron Age peoples who inhabited parts of western and central Europe—weren’t a single unified group, their art often featured common elements. These included intricate patterns of interlocking spiral lines, which often held symbolic ______ of birds, horses, and other animals; and inlaid enamel accents.</p>",
      stem: STEM,
      options: ["significance; depictions", "significance, depictions", "significance: depictions", "significance. Depictions"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the punctuation of elements in a complex series. It’s conventional to use a semicolon to separate items in a complex series with internal punctuation, and in this choice, the semicolon after “significance” is conventionally used to separate the first item (“intricate...significance”) and the second item (“depictions...animals”) in the series of common elements found in Celtic art. Moreover, the semicolon after “significance” matches the semicolon used later to separate the second item (“depictions...animals”) and the third item (“and...accents”) in the series."),
      distractors: {
        B: L("Choice B is incorrect because a comma after “significance” doesn’t match the semicolon used later to separate the second and third items in the series (“depictions...animals” and “and...accents”)."),
        C: L("Choice C is incorrect because a colon can’t be used in this way to separate items in a complex series."),
        D: L("Choice D is incorrect because placing a period after “significance” results in a rhetorically unacceptable sentence fragment beginning with “depictions.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-05a14e18", "05a14e18", 239)
    },
    {
      id: "rw-bd-ba8ebf49",
      sourceQuestionId: "ba8ebf49",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The poem Beowulf begins with the word “hwæt,” which is an Old English ______ as “hark!” or “listen!” in some versions, the word was playfully rendered as “bro!” by Maria Dahvana Headley in her 2020 translation of the poem.</p>",
      stem: STEM,
      options: ["exclamation, translated", "exclamation and translated", "exclamation translated", "exclamation. Translated"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"The poem…exclamation\") and another sentence that begins with a supplementary element (\"Translated…poem\"). The supplementary element \"translated as ‘hark!’ or ‘listen!’ in some versions\" modifies the subject of the second sentence, \"the word\" (referring to hwæt)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice after \"exclamation.\" A comma can’t be used in this way to mark the boundary between sentences."),
        B: L("Choice B is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join sentences."),
        C: L("Choice C is incorrect because it results in a comma splice after \"versions.\" A comma can’t be used in this way to mark the boundary between sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-ba8ebf49", "ba8ebf49", 242)
    },
    {
      id: "rw-bd-a466679a",
      sourceQuestionId: "a466679a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1976, the Inuit rock group Sikumiut recorded the album People of the Ice. Though only their first record, it shows a band already skilled at the difficult task of making music that sounds easy and fun. On songs like “Utirumavunga,” Lucassie Koperqualuk’s guitar riffs effortlessly ______ Charlie Adams’s delightfully catchy vocal melodies.</p>",
      stem: STEM,
      options: ["blend, with", "blend. With", "blend; with", "blend with"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation between a verb and a prepositional phrase. No punctuation is needed between the verb “blend” and the prepositional phrase “with Charlie Adams’s delightfully catchy vocal melodies.” The prepositional phrase completes the idea of the sentence, explaining with what Koperqualuk’s guitar riffs blend."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the verb and the prepositional phrase."),
        B: L("Choice B is incorrect because no punctuation is needed between the verb and the prepositional phrase."),
        C: L("Choice C is incorrect because no punctuation is needed between the verb and the prepositional phrase.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a466679a", "a466679a", 245)
    },
    {
      id: "rw-bd-a8fa749a",
      sourceQuestionId: "a8fa749a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Nigerian author Buchi Emecheta’s celebrated literary oeuvre includes The Joys of Motherhood, a novel about the changing roles of women in 1950s ______ a television play about the private struggles of a newlywed couple in Nigeria; and Head Above Water, her autobiography.</p>",
      stem: STEM,
      options: ["Lagos, A Kind of Marriage,", "Lagos; A Kind of Marriage,", "Lagos, A Kind of Marriage:", "Lagos; A Kind of Marriage"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of items in a complex series (a series including internal punctuation). In this choice, the semicolon after “Lagos” is conventionally used to separate the first item (“The Joys…Lagos”) and the second item (“A Kind…Nigeria”) in the series. Further, the comma after “Marriage” correctly separates the title “A Kind of Marriage” from the supplementary phrase (“a television…Nigeria”) that describes it."),
      distractors: {
        A: L("Choice A is incorrect because the comma after “Lagos” doesn’t match the semicolon used later in the series to separate the second item (“A Kind…Nigeria”) from the third item (“and…autobiography”)."),
        C: L("Choice C is incorrect because the comma after “Lagos” doesn’t match the semicolon used later in the series to separate the second item (“A Kind…Nigeria”) from the third item (“and…autobiography”). Additionally, a colon can’t be used in this way to separate the title “A Kind of Marriage” from the supplementary phrase (“a television…Nigeria”) that describes it."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the title “A Kind of Marriage” from the supplementary phrase (“a television… Nigeria”) that describes it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a8fa749a", "a8fa749a", 246)
    },
    {
      id: "rw-bd-fa36d803",
      sourceQuestionId: "fa36d803",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Long attributed to Jacques-Louis David, the preeminent Neoclassical painter of his day, the 1801 painting Marie Joséphine Charlotte du Val d’Ognes gained fresh attention in the 1990s when art historians discovered that the painting—which depicts a solitary young woman sketching— was actually the work of little-known French portrait ______ Marie-Denise Villers (1774–1821).</p>",
      stem: STEM,
      options: ["artist—", "artist", "artist:", "artist,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation between titles and proper nouns. No punctuation is needed to set off the proper noun \"Marie-Denise Villers\" from the title that describes Villers, \"little-known French portrait artist.\""),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed."),
        C: L("Choice C is incorrect because no punctuation is needed."),
        D: L("Choice D is incorrect because no punctuation is needed.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-fa36d803", "fa36d803", 249)
    },
    {
      id: "rw-bd-84658166",
      sourceQuestionId: "84658166",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 1943, in the midst of World War II, mathematics professor Grace Hopper was recruited by the US military to help the war effort by solving complex equations. Hopper’s subsequent career would involve more than just ______ as a pioneering computer programmer, Hopper would help usher in the digital age.</p>",
      stem: STEM,
      options: ["equations, though:", "equations, though,", "equations. Though,", "equations though"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation to mark boundaries between supplements and clauses. The comma after “equations” is used to separate the independent clause (“Hopper’s…equation”) from the supplementary adverb phrase “though.” The colon after “though” is used to mark the boundary between the clause ending with “though” and the following clause (“as…age”). A colon used in this way introduces information that illustrates or explains information that has come before it. In this case, the colon after “though” introduces the following explanation of how Hopper’s subsequent career would involve more than just solving equations: she would become a pioneering computer programmer."),
      distractors: {
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to join two independent clauses (“Hopper’s… though” and “as…age”) such as these."),
        C: L("Choice C is incorrect because it results in an illogical sequence of sentences. Placing the period after “equations” and beginning the next sentence with “Though” illogically suggests that the following information (that Hopper would help usher in the digital age) is contrary to the information in the previous sentence (Hopper’s subsequent career would involve more than just solving equations). Instead, the information that follows supports the information from the previous sentence by explaining how her work and influence extended beyond solely solving equations."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two independent clauses (“Hopper’s…though” and “as…age”) are fused without punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-84658166", "84658166", 250)
    },
    {
      id: "rw-bd-e3c1b4f7",
      sourceQuestionId: "e3c1b4f7",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Digital artist Jung (Lulu) Chen primarily uses a suite of software tools to create illustrations for children’s books. To manifest the warm and welcoming atmospheres that are a signature of her ______ she occasionally relies on more traditional art techniques, such as painting with watercolors.</p>",
      stem: STEM,
      options: ["work, though,", "work, though", "work; though,", "work, though;"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after \"work\" pairs with the comma after \"though\" to separate the supplementary element \"though\" from the rest of the sentence. This supplementary element signals that what follows is an exception to Chen using software tools to create illustrations, and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        B: L("Choice B is incorrect because the comma after \"work\" must be paired with a comma after \"though\" to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because a semicolon can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because a semicolon can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e3c1b4f7", "e3c1b4f7", 252)
    },
    {
      id: "rw-bd-5cc85f01",
      sourceQuestionId: "5cc85f01",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A conceptual artist and designer embraced by both the art world and the fashion ______ Mary Ping was chosen to curate the exhibition Front Row: Chinese American Designers for the Museum of Chinese in America.</p>",
      stem: STEM,
      options: ["world", "world:", "world;", "world,"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation between a supplementary phrase and a main clause. This choice correctly uses a comma to mark the boundary between the supplementary phrase (“A conceptual artist…world”), which describes Mary Ping, and the main clause (“Mary…America”)."),
      distractors: {
        A: L("Choice A is incorrect because it fails to mark the boundary between the supplementary phrase (“A conceptual artist…world”) and the main clause (“Mary…America”) with appropriate punctuation."),
        B: L("Choice B is incorrect because a colon can’t be used in this way to join the supplementary phrase (“A conceptual artist…world”) and the main clause (“Mary…America”). In this context, the colon incorrectly suggests that the information in the supplementary phrase is an explanation or amplification of the information in the main clause (Mary Ping being chosen to curate the exhibition), which isn’t the case."),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to join the supplementary phrase (“A conceptual artist… world”) and the main clause (“Mary…America”). Semicolons are conventionally used to separate two main clauses or to separate items in a complex series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5cc85f01", "5cc85f01", 253)
    },
    {
      id: "rw-bd-cabe71d4",
      sourceQuestionId: "cabe71d4",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Both Sona Charaipotra, an Indian American, and Dhonielle Clayton, an African American, grew up frustrated by the lack of diverse characters in books for young people. In 2011, these two writers joined forces to found CAKE Literary, a book packaging ______ specializes in the creation and promotion of stories told from diverse perspectives for children and young adults.</p>",
      stem: STEM,
      options: ["company,", "company that", "company", "company, that"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use and punctuation of an integrated relative clause. This choice correctly uses the relative pronoun “that” and no punctuation to create an integrated relative clause that provides essential information about the noun phrase (“a book packaging company”) that it modifies."),
      distractors: {
        A: L("Choice A is incorrect because it doesn’t use a relative pronoun to link the verb phrase beginning with “specializes” to the noun phrase that it modifies (“a book packaging company”)."),
        C: L("Choice C is incorrect because it doesn’t use a relative pronoun to link the verb phrase beginning with “specializes” to the noun phrase that it modifies (“a book packaging company”)."),
        D: L("Choice D is incorrect because no punctuation is needed between the integrated relative clause beginning with “that specializes” and the noun phrase that it modifies (“a book packaging company”).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-cabe71d4", "cabe71d4", 256)
    },
    {
      id: "rw-bd-7b950fc2",
      sourceQuestionId: "7b950fc2",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 2000, Nora de Hoyos Comstock, herself an owner of a successful consulting firm, sought to increase Latina representation in corporate ______ founded Las Comadres para las Americas, an international community that for over two decades has served as a resource and information network for Latina business professionals.</p>",
      stem: STEM,
      options: ["settings she", "settings, she", "settings and she", "settings. She"],
      answer: "D",
      explanation: L("Choice D is the best answer. It appropriately uses a period to mark the end of one independent clause (\"In 2000…settings\") and the start of another (\"She founded…professionals\")."),
      distractors: {
        A: L("Choice A is incorrect. This choice results in a run-on sentence error. Both the clause before the blank (\"In 2000…settings\") and the clause after the blank (\"she…professionals\") are independent clauses, so they need to be separated by punctuation."),
        B: L("Choice B is incorrect. This choice results in a comma splice error. It incorrectly joins two independent clauses with just a comma. Linking two independent clauses with a comma also requires the use of a coordinating conjunction (like for, and, nor, but, or, yet, or so)."),
        C: L("Choice C is incorrect. This choice results in a run-on sentence, an error caused when two independent clauses are joined without punctuation or appropriate conjunctions. Since both the clause before the blank (\"In 2000…settings\") and the clause after the blank (\"she…professionals\") are independent, a comma would be required in addition to the coordinating conjunction \"and.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-7b950fc2", "7b950fc2", 260)
    },
    {
      id: "rw-bd-e7afd0a1",
      sourceQuestionId: "e7afd0a1",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The radial velocity method, a means of indirect planetary discovery, has detected previously unknown exoplanets at vast distances from ______ the gas giant 55 Cancri d; at 60 light-years away, the Neptune-like planet Pi Mensae d; and, as of 2023, over 1,000 other exoplanets that are too far away and dim to be observed directly.</p>",
      stem: STEM,
      options: ["Earth at 41 light-years away:", "Earth: at 41 light-years away,", "Earth, at 41 light-years away,", "Earth at 41 light-years away,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. In this choice, a colon is correctly used after the main clause (“The radial...Earth”) to introduce the complex series that follows. Furthermore, the comma after “away” is conventionally used to separate the supplementary phrase “at 41 light-years away” from the noun phrase it describes (“the gas giant 55 Cancri d”), the first item in the series."),
      distractors: {
        A: L("Choice A is incorrect because placing a colon after “away” illogically separates the supplementary phrase “at 41 light-years away” from the noun phrase it describes (“the gas giant 55 Cancri d”) and attaches it to the main clause (“The radial...away”), resulting in a confusing and illogical sentence."),
        C: L("Choice C is incorrect because a comma cannot be used in this way to mark the boundary between a main clause (“The radial...Earth”) and a complex series."),
        D: L("Choice D is incorrect because it fails to mark the boundary between the main clause (“The radial...Earth”) and the complex series that follows with appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e7afd0a1", "e7afd0a1", 266)
    },
    {
      id: "rw-bd-1b97cce9",
      sourceQuestionId: "1b97cce9",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Hegra is an archaeological site in present-day Saudi Arabia and was the second largest city of the Nabataean Kingdom (fourth century BCE to first century CE). Archaeologist Laila Nehmé recently traveled to Hegra to study its ancient ______ into the rocky outcrops of a vast desert, these burial chambers seem to blend seamlessly with nature.</p>",
      stem: STEM,
      options: ["tombs. Built", "tombs, built", "tombs and built", "tombs built"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period after “tombs” is used correctly to mark the boundary between one sentence (“Archaeologist...tombs”) and another (“Built...nature”)."),
      distractors: {
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        C: L("Choice C is incorrect. Without a comma preceding it, the conjunction “and” can’t be used in this way to join the two sentences."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The sentences (“Archaeologist...tombs” and “Built...nature”) are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-1b97cce9", "1b97cce9", 267)
    },
    {
      id: "rw-bd-952fd392",
      sourceQuestionId: "952fd392",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Alberto Gabriele, author of Reading Popular Culture in Victorian Print, tracks the transnational dissemination of works by author Mary Elizabeth Braddon via the magazine ______ from 1866 to 1899 and distributed throughout the Australian cities of Melbourne, Adelaide, and Hobart; the continental European cities of Brussels, Paris, and Turin; and cities in Turkey, India, and Jamaica, this magazine helped make Braddon’s serialized novels globally available.</p>",
      stem: STEM,
      options: ["Belgravia; published", "Belgravia. Published", "Belgravia published", "Belgravia, published"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between the first sentence (“Alberto...Belgravia”) and the second (“Published...available”). The participial phrase beginning with “published” contains a complex series punctuated with commas and semicolons (“the Australian cities of Melbourne, Adelaide, and Hobart; the continental European cities of Brussels, Paris, and Turin; and cities in Turkey, India, and Jamaica”), and this participial phrase modifies the subject of the second sentence, “this magazine.”"),
      distractors: {
        A: L("Choice A is incorrect. Using a semicolon to join two main clauses in this way in combination with the semicolons that separate the items in the complex series would result in an ambiguous and confusing sentence."),
        C: L("Choice C is incorrect because it results in a comma splice. With no punctuation after “Belgravia,” the participial phrase “published...Jamaica” reads as an integrated modifier within the noun phrase “the magazine Belgravia,” and the first main clause (“Alberto...Jamaica”) is then joined to a second main clause (“this...available”) using only a comma. A comma can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because it results in a comma splice. A comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-952fd392", "952fd392", 268)
    },
    {
      id: "rw-bd-40c3589d",
      sourceQuestionId: "40c3589d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Luci Tapahonso is the inaugural poet laureate of the Navajo Nation. Her book Sáanii Dahataal/The Women Are Singing—a combination of fiction and memoir, poetry and ______ serves as a testament to her versatility as a writer.</p>",
      stem: STEM,
      options: ["prose;", "prose", "prose,", "prose—"],
      answer: "D",
      explanation: L("Choice D is the best answer. “A combination of fiction and memoir, poetry and prose” is a nonessential supplement, so it needs to be set off from the rest of the sentence with a pair of matching punctuation marks. We already have a dash at the beginning of the supplement, so we need to add a dash at the end of the supplement to match."),
      distractors: {
        A: L("Choice A is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. “A combination of fiction and memoir, poetry and prose” is a nonessential supplement, so it needs to be set off from the rest of the sentence with a pair of matching punctuation marks. We already have a dash at the beginning of the supplement, so we need to add a dash at the end of the supplement to match."),
        B: L("Choice B is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. “A combination of fiction and memoir, poetry and prose” is a nonessential supplement, so it needs to be set off from the rest of the sentence with a pair of matching punctuation marks. We already have a dash at the beginning of the supplement, so we need to add a dash at the end of the supplement to match."),
        C: L("Choice C is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. “A combination of fiction and memoir, poetry and prose” is a nonessential supplement, so it needs to be set off from the rest of the sentence with a pair of matching punctuation marks. We already have a dash at the beginning of the supplement, so we need to add a dash at the end of the supplement to match.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-40c3589d", "40c3589d", 270)
    },
    {
      id: "rw-bd-b15724fc",
      sourceQuestionId: "b15724fc",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>American writer Edwidge Danticat, who emigrated from Haiti in 1981, has won acclaim for her powerful short stories, novels, and ______ her lyrical yet unflinching depictions of her native country’s turbulent history, writer Robert Antoni has compared Danticat to Nobel Prize–winning novelist Toni Morrison.</p>",
      stem: STEM,
      options: ["essays, praising", "essays and praising", "essays praising", "essays. Praising"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period after “essays” is used correctly to mark the boundary between one sentence (“American…essays”) and another (“praising…Morrison”). The participial phrase beginning with “Praising” modifies the subject of the second sentence, “writer Robert Antoni.”"),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        B: L("Choice B is incorrect. Without a comma preceding it, the conjunction “and” can’t be used in this way to join sentences."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The sentences (“American…essays” and “Praising…Morrison”) are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b15724fc", "b15724fc", 271)
    },
    {
      id: "rw-bd-72b3db98",
      sourceQuestionId: "72b3db98",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Mia Heavener’s 2019 novel Under Nushagak Bluff, which takes place in a mid-twentieth-century rural Alaskan fishing ______ the story of three Yup’ik women who grapple with the rise of commercial fisheries and other changes affecting their community.</p>",
      stem: STEM,
      options: ["village. Tells", "village tells", "village: tells", "village, tells"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after “village” pairs with the comma after “Under Nushagak Bluff” to separate the supplementary relative clause (“which...village”) from the rest of the sentence. This supplementary relative clause functions to provide additional information about the setting of Heavener’s novel, and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because it results in two rhetorically unacceptable sentence fragments, one beginning with “Mia” and the other beginning with “tells.”"),
        B: L("Choice B is incorrect because it fails to use appropriate punctuation to separate the supplementary relative clause (“which...village”) from the rest of the sentence."),
        C: L("Choice C is incorrect because a colon can’t be paired with a comma in this way to separate the supplementary relative clause (“which...village”) from the rest of the sentence. A colon can be used between two main clauses or a main clause and supplement, but here there is no main clause on either side of the colon.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-72b3db98", "72b3db98", 274)
    },
    {
      id: "rw-bd-a872c60a",
      sourceQuestionId: "a872c60a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The pedagogy of the Suzuki method is rooted in several central ______ by Japanese violinist Shinichi Suzuki, who sought to parallel the linguistic learning environment, the method emphasizes playing instruments from a very young age and teaches students as young as three to play simple classical pieces such as “March in G.”</p>",
      stem: STEM,
      options: ["tenets. Developed", "tenets developed", "tenets that, developed", "tenets, developed"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between sentences. This choice correctly uses a period to mark the boundary between one sentence (\"The pedagogy...tenets\") and another (\"Developed...‘March in G’\"). The participial phrase \"developed by Japanese violinist Shinichi Suzuki\" modifies the subject of the next sentence, \"the method.\""),
      distractors: {
        B: L("Choice B is incorrect because it results in a run-on sentence. The sentences (\"The pedagogy...tenets\" and \"Developed...‘March in G’\") are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect because it creates a confusing and illogical sentence structure. The relative pronoun \"that\" followed by a comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a872c60a", "a872c60a", 275)
    },
    {
      id: "rw-bd-615f001e",
      sourceQuestionId: "615f001e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Consider the mechanics of the pinhole camera: light passes through a small hole, resulting in a focused projected image. A ray diagram reveals how this ______ the hole’s small size restricts light to a single ray, all light passing through the hole can only arrive at a single destination, eliminating diffraction and ensuring a clear image.</p>",
      stem: STEM,
      options: ["works because", "works. Because", "works, it’s because", "works: it’s because"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used to correctly mark the boundary between one sentence (\"A ray...works\") and another (\"Because...image\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two sentences (\"A ray…works\" and \"Because…image\") are fused without punctuation and/or a conjunction."),
        C: L("Choice C is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect because it results in a comma splice. Since the contraction \"it’s\" creates a main clause, the comma after \"single ray\" can’t be used in this way to mark the boundary between two main clauses (\"it’s...ray\" and \"all light…image\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-615f001e", "615f001e", 276)
    },
    {
      id: "rw-bd-594b4a94",
      sourceQuestionId: "594b4a94",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The field of geological oceanography owes much to American ______ Marie Tharp, a pioneering oceanographic cartographer whose detailed topographical maps of the ocean floor and its multiple rift valleys helped garner acceptance for the theories of plate tectonics and continental drift.</p>",
      stem: STEM,
      options: ["geologist,", "geologist", "geologist;", "geologist:"],
      answer: "B",
      explanation: L("Choice B is the best answer. “Marie tharp” is essential information that completes the first clause — the first clause doesn’t function without it. So we don’t want to separate it with punctuation."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a punctuation error. “The field of geological oceanography owes much to American geologist” is unclear: which geologist are we talking about? We need the “Marie Tharp” for clarity, which means it’s essential information and should not be separated by a comma."),
        C: L("Choice C is incorrect. This choice creates a punctuation error. “The field of geological oceanography owes much to American geologist” is unclear: which geologist are we talking about? We need the “Marie Tharp” for clarity, which means it’s essential information and should not be separated by a semicolon."),
        D: L("Choice D is incorrect. This choice creates a punctuation error. “The field of geological oceanography owes much to American geologist” is unclear: which geologist are we talking about? We need the “Marie Tharp” for clarity, which means it’s essential information and should not be separated by a colon.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-594b4a94", "594b4a94", 277)
    },
    {
      id: "rw-bd-02871a0d",
      sourceQuestionId: "02871a0d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In her large-scale sculpture Casa-Isla, artist Edra Soto included references to her childhood in Puerto Rico. For example, the sculpture’s steel panels have a crisscrossing pattern inspired by the iron gates ______</p>",
      stem: STEM,
      options: ["Soto would see in her neighborhood?", "Soto would see in her neighborhood.", "would Soto see in her neighborhood.", "would Soto see in her neighborhood?"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a period to punctuate a declarative sentence (\"For example...neighborhood\")."),
      distractors: {
        A: L("Choice A is incorrect. It’s unconventional to use a question mark in this way to punctuate a declarative sentence."),
        C: L("Choice C is incorrect. The structure requires a declarative clause at the end of the sentence that states where Soto saw the steel panels, not an incomplete interrogative clause that asks a direct question, such as \"would Soto see in her neighborhood.\""),
        D: L("Choice D is incorrect. The structure requires a period and a declarative clause at the end of the sentence that states where Soto saw the steel panels, not an incomplete interrogative clause asking a direct question, such as \"would Soto see in her neighborhood?\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-02871a0d", "02871a0d", 279)
    },
    {
      id: "rw-bd-2fd05c15",
      sourceQuestionId: "2fd05c15",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In crafting her fantasy fiction, Nigerian-born British author Helen Oyeyemi has drawn inspiration from the classic nineteenth-century fairy tales of the Brothers Grimm. Her 2014 novel Boy, Snow, Bird, for instance, is a complex retelling of the story of Snow White, while her 2019 novel ______ offers a delicious twist on the classic tale of Hansel and Gretel.</p>",
      stem: STEM,
      options: ["­­ Gingerbread—", "­­ Gingerbread,", "Gingerbread", "­­ Gingerbread:"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation between a subject and a verb. When, as in this case, a subject (“her 2019 novel Gingerbread”) is immediately followed by a verb (“offers”), no punctuation is needed."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the subject and the verb."),
        B: L("Choice B is incorrect because no punctuation is needed between the subject and the verb."),
        D: L("Choice D is incorrect because no punctuation is needed between the subject and the verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-2fd05c15", "2fd05c15", 280)
    },
    {
      id: "rw-bd-c88d6301",
      sourceQuestionId: "c88d6301",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the 1980s, Latino filmmakers Luis Valdez, Gregory Nava, and Ramón Menéndez helped expand on-screen representation of Latino Americans with the films Zoot Suit ______ and Stand and Deliver (1988), respectively.</p>",
      stem: STEM,
      options: ["(1981) El Norte (1983),", "(1981)—El Norte (1983)—", "(1981), El Norte (1983),", "(1981) El Norte (1983)"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of items in a series. The comma after “(1981)” is used conventionally to separate the first and second items in the series, and the comma after “(1983)” is used conventionally to separate the second and third items in the series."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the first and second items in the series."),
        B: L("Choice B is incorrect because dashes can’t be used in this way to separate items in a simple series."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the items in the series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c88d6301", "c88d6301", 284)
    },
    {
      id: "rw-bd-aacddbd8",
      sourceQuestionId: "aacddbd8",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>As jazz singer Sarah Vaughan honed her vocal abilities—acquiring a sophisticated timbre and precise control over pitch, dynamics, and ______ she earned comparisons to opera icon Leontyne Price, one of her personal heroes. The comparisons highlight how Vaughan, a jazz star, had transcended genre boundaries with her singing prowess.</p>",
      stem: STEM,
      options: ["vibrato:", "vibrato,", "vibrato—", "vibrato"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation within a sentence. The dash after “vibrato” pairs with the dash after “abilities” to separate the supplementary element (“acquiring...vibrato”) from the rest of the sentence. This supplementary element functions to describe the vocal abilities Vaughan developed, and the pair of dashes indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a colon can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because a comma can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-aacddbd8", "aacddbd8", 285)
    },
    {
      id: "rw-bd-c8540a5b",
      sourceQuestionId: "c8540a5b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Swedish scientists Eva Engvall and Peter Perlmann developed a method for measuring the concentration of different proteins in a biological sample. Their ______ ELISA (enzyme-linked immunosorbent assay), is used to detect and measure proteins that indicate the presence of certain diseases.</p>",
      stem: STEM,
      options: ["method (called", "method—called", "method, called", "method called"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The comma after “method” pairs with the comma after the closing parenthesis to separate the supplementary element “called ELISA (enzyme-linked immunosorbent assay)” from the rest of the sentence. This supplementary element functions to identify the name of Engvall and Perlmann’s method, and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because an opening parenthesis can’t be paired with a comma to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because a dash can’t be paired with a comma to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c8540a5b", "c8540a5b", 287)
    },
    {
      id: "rw-bd-e15c50b2",
      sourceQuestionId: "e15c50b2",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>A standard Argo float, a type of autonomous robot, measures temperature and salinity in the upper regions of ice-free oceans. More advanced floats can measure a wider range of ______ and monitor seasonal ice zones.</p>",
      stem: STEM,
      options: ["variables: travel to greater depths", "variables, travel to greater depths,", "variables travel to greater depths,", "variables, travel to greater depths;"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the punctuation of items in a series. The comma after “variables” is used conventionally to separate the first and second items in the series, and the comma after “depths” is used conventionally to separate the second and third items."),
      distractors: {
        A: L("Choice A is incorrect because a colon can’t be used in this way to separate items in a simple series."),
        C: L("Choice C is incorrect because a comma is needed after “variables” to separate the first and second items in the series."),
        D: L("Choice D is incorrect because a semicolon can’t be used in this way to separate items in a simple series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-e15c50b2", "e15c50b2", 288)
    },
    {
      id: "rw-bd-261f4ca6",
      sourceQuestionId: "261f4ca6",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The capital city of the Aztec empire, Tenochtitlan, was built on an island in a lake. Because of the marshy conditions, the Aztec people ______ floating farms called “chinampas.”</p>",
      stem: STEM,
      options: ["created", "created:", "created,", "created;"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between a verb and its object. No punctuation is needed between the verb “created” and its object “floating farms called ‘chinampas.’”The object helps complete the idea of the verb—in this case, it explains what the Aztec people created—and any punctuation between the two results in an ungrammatical sentence."),
      distractors: {
        B: L("Choice B is incorrect because no punctuation is needed between the verb and its object."),
        C: L("Choice C is incorrect because no punctuation is needed between the verb and its object."),
        D: L("Choice D is incorrect because no punctuation is needed between the verb and its object.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-261f4ca6", "261f4ca6", 290)
    },
    {
      id: "rw-bd-96499989",
      sourceQuestionId: "96499989",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Fans of science fiction will ______ multiple references to classic sci-fi stories in Janelle Monáe’s song lyrics, including her recurring nods to the plot of the 1927 sci-fi film Metropolis.</p>",
      stem: STEM,
      options: ["appreciate the", "appreciate. The", "appreciate, the", "appreciate: the"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested here is punctuation between a verb and object. No punctuation is needed between the verb (\"appreciate\") and its object (\"the multiple references...\"). The object helps complete the idea of the verb—in this case, it explains what fans of science fiction will appreciate—and any punctuation between the two results in an ungrammatical sentence."),
      distractors: {
        B: L("Choice B is incorrect because no punctuation is needed between the verb and its object."),
        C: L("Choice C is incorrect because no punctuation is needed between the verb and its object."),
        D: L("Choice D is incorrect because no punctuation is needed between the verb and its object.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-96499989", "96499989", 291)
    },
    {
      id: "rw-bd-fdb16e20",
      sourceQuestionId: "fdb16e20",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Quantum particles of light—photons—provide an unhackable means of transmitting encryption keys over networks, as attempts to observe particles in quantum states will invariably alter the particles ______ dismantle any information they transmit.</p>",
      stem: STEM,
      options: ["and in the process,", "and, in the process,", "and in the process—", "and, in the process"],
      answer: "B",
      explanation: L("Choice B is the best answer. This choice uses paired punctuation in the form of two commas to set off the nonessential phrase \"in the process.\""),
      distractors: {
        A: L("Choice A is incorrect. The phrase \"in the process\" is a nonessential element and needs to be set off with paired punctuation. We need a comma after \"and\" to match the one after \"process.\""),
        C: L("Choice C is incorrect. The phrase \"in the process\" is a nonessential element and needs to be set off with paired punctuation, so we would need a dash after \"and\" to match the one following \"process.\""),
        D: L("Choice D is incorrect. The phrase \"in the process\" is a nonessential element and needs to be set off with paired punctuation. We would need a comma after \"process\" to match the one following \"and.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-fdb16e20", "fdb16e20", 292)
    },
    {
      id: "rw-bd-7e37affc",
      sourceQuestionId: "7e37affc",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>That the geographic center of North America lay in the state of North Dakota was conceded by all ______ establishing its precise coordinates proved more divisive.</p>",
      stem: STEM,
      options: ["involved:", "involved,", "involved", "involved;"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (\"That the...involved\") and the second main clause (\"establishing...divisive\"). Further, the semicolon is the most appropriate choice when joining two separate, parallel statements, such as here, where the information following the semicolon contrasts with the information before."),
      distractors: {
        A: L("Choice A is incorrect because placing a colon after \"involved\" illogically indicates that the information in the second main clause (the precise location was the subject of disagreement) explains or amplifies the information in the previous main clause (the general location was agreed upon by all). Instead, the information in the second clause contrasts with the previous information."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-7e37affc", "7e37affc", 293)
    },
    {
      id: "rw-bd-4565a53c",
      sourceQuestionId: "4565a53c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Lucía Michel of the University of Chile observed that alkaline soils contain an insoluble form of iron that blueberry plants cannot absorb, thus inhibiting blueberry growth. If these plants were grown in alkaline soil alongside grasses that aid in iron solubilization, ______ Michel was determined to find out.</p>",
      stem: STEM,
      options: ["could the blueberries thrive.", "the blueberries could thrive.", "the blueberries could thrive?", "could the blueberries thrive?"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a question mark to punctuate the interrogative clause “could the blueberries thrive,” which asks a direct question at the end of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a period can’t be used in this way to punctuate an interrogative clause, such as “could the blueberries thrive,” at the end of a sentence."),
        B: L("Choice B is incorrect because the context requires an interrogative clause. The declarative clause “the blueberries could thrive” incorrectly indicates that it was known that the blueberries could thrive in alkaline soil, whereas Michel had yet to find this out."),
        C: L("Choice C is incorrect because a question mark can’t be used in this way to punctuate a declarative clause, such as “the blueberries could thrive,” at the end of a sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-4565a53c", "4565a53c", 295)
    },
    {
      id: "rw-bd-91fbd59d",
      sourceQuestionId: "91fbd59d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Award-winning cinematographer James Wong Howe was known for his innovative filming techniques. While filming a boxing match for the movie Body and Soul ______ Howe had a handheld camera operator wear roller skates. This allowed the operator to move smoothly around actors in a boxing ring, creating an immersive experience for viewers.</p>",
      stem: STEM,
      options: ["(1947), and", "(1947),", "(1947) and", "(1947)"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation between a supplementary element and a main clause. This choice correctly uses a comma to mark the boundary between the supplementary phrase (“While...1947”), which indicates when the action occurred, and the main clause (“Howe had a handheld camera operator wear roller skates”)."),
      distractors: {
        A: L("Choice A is incorrect because a comma paired with the conjunction “and” can’t be used in this way to mark the boundary between the supplementary element (“While…1947”) and the main clause (“Howe…skates”)."),
        C: L("Choice C is incorrect because the conjunction “and” can’t be used in this way to join the supplementary element (“While…1947”) and the main clause (“Howe…skates”)."),
        D: L("Choice D is incorrect because it fails to mark the boundary between the supplementary element and the main clause with appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-91fbd59d", "91fbd59d", 298)
    },
    {
      id: "rw-bd-a421f749",
      sourceQuestionId: "a421f749",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In Puerto Rico, it’s not unusual for a city or town to be known by a nickname that corresponds to one of its notable features, like landscape, climate, famous residents, or chief export. For example, the Puerto Rican municipality of Aibonito is well known for its lush ______ this distinction has earned it the fitting nickname of “the Garden of Puerto Rico.”</p>",
      stem: STEM,
      options: ["greenery", "greenery,", "greenery and", "greenery;"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation between two main clauses. “Aibonito is well known for its lush greenery” and “this distinction has earned it the fitting nickname… ” are both complete main clauses; a semicolon correctly joins them while signaling a close logical connection."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        C: L("Choice C is incorrect. When coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a421f749", "a421f749", 299)
    },
    {
      id: "rw-bd-b1e8b87f",
      sourceQuestionId: "b1e8b87f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Winding through the ice atop Norway’s Jotunheim Mountains is the Lendbreen pass, an ancient route that was used by hunters, farmers, traders, and travelers in the Middle Ages before eventually falling into disuse. Recently, archeologists have ______ knives, horseshoes, wool tunics, and thousands of other artifacts from the icy pass.</p>",
      stem: STEM,
      options: ["unearthed:", "unearthed,", "unearthed—", "unearthed"],
      answer: "D",
      explanation: L("Choice D is the best answer. No punctuation should separate the verb \"unearthed\" and its objects (i.e, what was \"unearthed\"): \"knives, horseshoes, wool tunics, and thousands of other artifacts.\""),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a punctuation error, separating the verb \"unearthed\" from its objects (i.e, what was \"unearthed\") with a colon."),
        B: L("Choice B is incorrect. This choice creates a punctuation error, separating the verb \"unearthed\" from its objects (i.e, what was \"unearthed\") with a comma."),
        C: L("Choice C is incorrect. This choice creates a punctuation error, separating the verb \"unearthed\" from its objects (i.e, what was \"unearthed\") with a dash.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b1e8b87f", "b1e8b87f", 301)
    },
    {
      id: "rw-bd-f45ae404",
      sourceQuestionId: "f45ae404",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The city of Amsterdam partnered with consultants to develop Public Eye—an ethical AI-powered crowd-monitoring ______ video streamed from cameras in heavily touristed areas, the AI algorithm determines crowd sizes without, in the interest of protecting individuals’ privacy, retaining the footage.</p>",
      stem: STEM,
      options: ["system—analyzing", "system, analyzing", "system. Analyzing", "system analyzing"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"The city…system\") and another (\"Analyzing…footage\"). The participial phrase beginning with \"analyzing\" modifies the subject of the second sentence, \"the AI algorithm.\""),
      distractors: {
        A: L("Choice A is incorrect. Placing a dash before \"analyzing\" creates a confusing and ambiguous modifying element (\"analyzing...areas\") and a comma splice between \"areas\" and \"the AI algorithm.\" (A comma can’t be used in this way to mark the boundary between sentences.)"),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The sentences (\"The city…system\" and \"analyzing…footage\") are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-f45ae404", "f45ae404", 304)
    },
    {
      id: "rw-bd-1ee4485c",
      sourceQuestionId: "1ee4485c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Journalists have dubbed Gil Scott-Heron the “godfather of rap,” a title that has appeared in hundreds of articles about him since the 1990s. Scott- Heron himself resisted the godfather ______ feeling that it didn’t encapsulate his devotion to the broader African American blues music tradition as well as “bluesologist,” the moniker he preferred.</p>",
      stem: STEM,
      options: ["nickname, however", "nickname, however;", "nickname, however,", "nickname; however,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between a main clause and two supplementary elements. In this choice, the commas after “nickname” and “however” are correctly used to separate the supplementary adverb “however” from the main clause (“Scott-Heron…nickname”) on one side and the supplementary participial phrase (“feeling…bluesologist”) on the other."),
      distractors: {
        A: L("Choice A is incorrect because it fails to mark the boundary between the supplementary adverb “however” and the supplementary phrase (“feeling…bluesologist”)."),
        B: L("Choice B is incorrect because a semicolon can’t be used in this way to join the supplementary adverb “however” and the supplementary phrase (“feeling…bluesologist”)."),
        D: L("Choice D is incorrect because a semicolon can’t be used in this way to join the main clause (“Scott-Heron…nickname”) and the supplementary word and phrase (“however” and “feeling…bluesologist”). Moreover, placing the semicolon after “nickname” illogically signals that the following information (Scott-Heron’s feeling that the nickname didn’t encapsulate his devotion to the blues tradition) is contrary to the information in the previous clause (Scott-Heron’s resistance to the nickname).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-1ee4485c", "1ee4485c", 305)
    },
    {
      id: "rw-bd-8459dc2f",
      sourceQuestionId: "8459dc2f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When using a search engine, many people click just the first one or two results. Click restraint is the practice of scanning a search results page and evaluating what you see before deciding which link ______</p>",
      stem: STEM,
      options: ["should you choose.", "you should choose?", "should you choose?", "you should choose."],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a period to punctuate a declarative sentence that ends with an indirect question (“which link you should choose.”)"),
      distractors: {
        A: L("Choice A is incorrect. The structure requires a declarative clause that presents an indirect question about what is evaluated in click restraint, not an interrogative clause that presents a direct question, such as “which link should you choose.”"),
        B: L("Choice B is incorrect. It’s unconventional to use a question mark in this way to punctuate a declarative clause that presents an indirect question, such as “which link you should choose.”"),
        C: L("Choice C is incorrect. The structure requires a declarative clause that presents an indirect question about what is evaluated in click restraint, not an interrogative clause that presents a direct question, such as “which link should you choose.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8459dc2f", "8459dc2f", 307)
    },
    {
      id: "rw-bd-667a0587",
      sourceQuestionId: "667a0587",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In early 1700s England, it was legal for shops to sell prints of artists’ engravings without the artists’ permission. This changed in 1735 with the passage of the Engravers’ Copyright ______ gave engravers control over the distribution and sale of all prints made from their designs.</p>",
      stem: STEM,
      options: ["Act, which", "Act; which", "Act. Which", "Act"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation between a main clause and a supplementary element. In this choice, the comma is used correctly to mark the boundary between the main clause (\"This...Act\") and the supplementary relative clause (\"which...designs\") that provides additional information about the Engravers’ Copyright Act."),
      distractors: {
        B: L("Choice B is incorrect because a semicolon can’t be used in this way to mark the boundary between a main clause and a supplementary relative clause. A semicolon is conventionally used to join two main clauses, and \"which...designs\" isn’t a main clause."),
        C: L("Choice C is incorrect because it results in a rhetorically unacceptable sentence fragment."),
        D: L("Choice D is incorrect. Joining the main clause and the additional information about the Engravers’ Copyright Act (\"gave...designs\") without the comma and relative pronoun \"which\" results in a confusing and ungrammatical sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-667a0587", "667a0587", 309)
    },
    {
      id: "rw-bd-c101fc44",
      sourceQuestionId: "c101fc44",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>How do scientists determine what foods were eaten by extinct hominins such as Neanderthals? In the past, researchers were limited to studying the marks found on the fossilized teeth of skeletons, but in 2017 a team led by Laura Weyrich of the Australian Centre for Ancient DNA tried something ______ the DNA found in Neanderthals’ fossilized dental plaque.</p>",
      stem: STEM,
      options: ["new: sequencing", "new; sequencing", "new, sequencing:", "new. Sequencing"],
      answer: "A",
      explanation: L("Choice A is the best answer. “A team…tried something new” is an independent clause leading to an explanation of what the new thing was. A colon can only be used at the end of an independent clause, and typically introduces further explanation that expands upon the first clause, which makes a colon the perfect choice here."),
      distractors: {
        B: L("Choice B is incorrect. This choice results in a punctuation error. “Sequencing…dental plaque” can’t stand on its own as a sentence, and so it can’t be linked to the independent clause “a team…tried something new” with a semicolon. Only two independent clauses can be connected in this way."),
        C: L("Choice C is incorrect. This choice results in a punctuation error. If “sequencing” is included in the first clause, it can no longer stand on its own as a complete idea. Since a colon can only come at the end of an independent clause, using one in this way creates an error."),
        D: L("Choice D is incorrect. This choice results in a sentence fragment. “Sequencing…dental plaque” can’t stand on its own as a sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c101fc44", "c101fc44", 314)
    },
    {
      id: "rw-bd-dddfa043",
      sourceQuestionId: "dddfa043",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Before the Erie Canal was completed in 1825, transporting goods by wagon between New York City and the Midwest took up to forty-five days and cost one hundred dollars per ton. By linking the Hudson River to Lake ______ canal reduced transport time to nine days and cut costs to six dollars per ton.</p>",
      stem: STEM,
      options: ["Erie; the", "Erie (the", "Erie, the", "Erie: the"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation between a supplementary phrase and a main clause. This choice correctly uses a comma to mark the boundary between the introductory supplementary phrase (“By linking the Hudson River to Lake Erie”), which identifies how the canal reduced transport time, and the main clause (“the canal reduced transport time to nine days and cut costs to six dollars per ton”)."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to mark the boundary between a supplementary phrase (“By…Erie”) and the main clause (“the canal...ton”)."),
        B: L("Choice B is incorrect because an open parenthesis can’t be used in this way to mark the boundary between a supplementary phrase (“By…Erie”) and the main clause (“the canal...ton”)."),
        D: L("Choice D is incorrect because a colon can’t be used in this way to mark the boundary between an introductory supplementary phrase (“By…Erie”) and the main clause (“the canal...ton”).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-dddfa043", "dddfa043", 316)
    },
    {
      id: "rw-bd-be37d4ae",
      sourceQuestionId: "be37d4ae",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>During the English neoclassical period (1660–1789), many writers imitated the epic poetry and satires of ancient Greece and Rome. They were not the first in England to adopt the literary modes of classical ______ some of the most prominent figures of the earlier Renaissance period were also influenced by ancient Greek and Roman literature.</p>",
      stem: STEM,
      options: ["antiquity, however", "antiquity, however,", "antiquity, however;", "antiquity; however,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of a supplementary phrase following a clause. This choice uses a comma to separate the supplementary adverb phrase \"however\" from the independent clause it modifies (\"They...antiquity\") and uses a semicolon to join the first independent clause (\"They...antiquity\") and the second independent clause (\"some...literature\"). Further, placing the semicolon after \"however\" indicates that the information in the clause that this is part of (that neoclassical writers were not the first to adopt classical literary modes) is contrary to what might be assumed from the information in the previous sentence (that the neoclassical writers were unique in imitating classical epic poetry and satires)."),
      distractors: {
        A: L("Choice A is incorrect because it fails to mark the boundary after \"however\" between the two independent clauses with appropriate punctuation."),
        B: L("Choice B is incorrect because the comma after \"however\" can’t be used in this way to mark the boundary between the two independent clauses."),
        D: L("Choice D is incorrect because placing the semicolon after \"antiquity\" illogically indicates that the information in the clause that this is part of (that prominent Renaissance figures were also influenced by classical literature) is contrary to the information in the previous clause (that neoclassical writers were not the first to adopt classical literary modes).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-be37d4ae", "be37d4ae", 317)
    },
    {
      id: "rw-bd-b6de636f",
      sourceQuestionId: "b6de636f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>At 1,280 meters, the Golden Gate Bridge in the United States is one of the longest suspension bridges in the ______ the Tsing Ma Bridge in China, at 1,377 meters, is even longer.</p>",
      stem: STEM,
      options: ["world but", "world, but,", "world,", "world, but"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction “but” to join the first main clause (“At...world”) and the second main clause (“the...longer”)."),
      distractors: {
        A: L("Choice A is incorrect because when coordinating two main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        B: L("Choice B is incorrect because a comma isn’t needed after the conjunction “but.”"),
        C: L("Choice C is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b6de636f", "b6de636f", 320)
    },
    {
      id: "rw-bd-c15069eb",
      sourceQuestionId: "c15069eb",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Latin America is known to have dozens, if not hundreds, of popular dance forms. Only five of these dances are included in international ballroom dance ______ rumba, samba, cha-cha-cha, paso doble, and jive—the last of which is grouped with the other Latin dances despite not having Latin roots.</p>",
      stem: STEM,
      options: ["competitions, however:", "competitions, however,", "competitions, however;", "competitions; however,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the punctuation of supplementary elements within a sentence. This choice correctly uses a comma to separate the supplementary adverb \"however\" from the preceding main clause (\"only...competitions\"), and it uses a colon to introduce the list of dances that follows (\"rumba…jive\"). Further, placing the colon after \"however\" rather than before indicates that the information in the preceding main clause (only...competitions) is contrary to what might be assumed from the information in the previous sentence (Latin America has many more dance forms)."),
      distractors: {
        B: L("Choice B is incorrect. The comma after \"however\" can’t be used in this way to introduce a series (\"rumba...jive\")."),
        C: L("Choice C is incorrect because it isn’t conventional to use a semicolon in this way to introduce a series of items, such as the list of dances."),
        D: L("Choice D is incorrect because placing the semicolon after \"competitions\" illogically indicates that the following list of five Latin American dances (\"rumba...jive\") is contrary to the information in the previous clause (only five Latin American dances are included in international ballroom dance competitions).")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c15069eb", "c15069eb", 321)
    },
    {
      id: "rw-bd-5aae2475",
      sourceQuestionId: "5aae2475",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Stomata, tiny pore structures in a leaf that absorb gases needed for plant growth, open when guard cells surrounding each pore swell with water. In a pivotal 2007 article, plant cell ______ showed that lipid molecules called phosphatidylinositol phosphates are responsible for signaling guard cells to open stomata.</p>",
      stem: STEM,
      options: ["biologist, Yuree Lee", "biologist Yuree Lee,", "biologist Yuree Lee", "biologist, Yuree Lee,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation between titles and proper nouns. No punctuation is needed to offset the proper noun \"Yuree Lee\" from the title \"plant cell biologist\" that describes Lee."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed."),
        B: L("Choice B is incorrect because no punctuation is needed."),
        D: L("Choice D is incorrect because no punctuation is needed around the proper noun \"Yuree Lee.\" Setting the phrase off with punctuation suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5aae2475", "5aae2475", 322)
    },
    {
      id: "rw-bd-12013e06",
      sourceQuestionId: "12013e06",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In rural Minnesota, ecologist Leroy Walston conducted a study to determine whether seeding solar panel fields with wildflowers could bolster pollinator populations in nearby food crops. Walston’s findings indicate that—assuming solar panel installers’ ______ practice has the potential to increase the number of native bees in crops near solar fields throughout the Midwest by up to 20 percent.</p>",
      stem: STEM,
      options: ["cooperation, this", "cooperation—this", "cooperation: this", "cooperation this"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a dash after “cooperation” to pair with the dash after “that” to separate the supplementary element “assuming solar panel installers’ cooperation” from the rest of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a comma can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because a colon can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because it fails to use appropriate punctuation to separate the supplemental element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-12013e06", "12013e06", 327)
    },
    {
      id: "rw-bd-5cc69ee1",
      sourceQuestionId: "5cc69ee1",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Dong Lai and Diego J. Muñoz’s work on circumbinary disk accretion—a process in which, due to gravity, material from an orbiting disk spirals inward and accumulates onto two stars or black holes—relies heavily on simulations. Lai and Muñoz recognize the need for direct ______ recommending evolving binary star systems as a promising avenue for future study.</p>",
      stem: STEM,
      options: ["observation; however,", "observation, however,", "observation. However,", "observation, however;"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after “observation” pairs with the comma after “however” to separate the supplementary adverb “however” from the rest of the sentence, which consists of a main clause (“Lai...observation”) followed by a participial phrase (“recommending...study”)."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to join the main clause (“Lai...observation”) and the participial phrase (“recommending...study”) that follows the supplementary adverb “however.” A semicolon is conventionally used to join two main clauses, and “recommending...study” isn’t a main clause."),
        C: L("Choice C is incorrect because placing a period after “observation” results in a rhetorically unacceptable sentence fragment beginning with “however.”"),
        D: L("Choice D is incorrect because a semicolon can’t be used in this way to join the main clause (“Lai...however”) and the participial phrase (“recommending...study”) that follows. A semicolon is conventionally used to join two main clauses, and “recommending...study” isn’t a main clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5cc69ee1", "5cc69ee1", 330)
    },
    {
      id: "rw-bd-603755a5",
      sourceQuestionId: "603755a5",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 1959, marine biologist Dr. Albert Jones founded the Underwater Adventure Seekers, a scuba diving ______ that is the oldest club for Black divers in the United States and that has helped thousands of diving enthusiasts become certified in the field.</p>",
      stem: STEM,
      options: ["club", "club,", "club—", "club, and"],
      answer: "A",
      explanation: L("Choice A is the best answer. “That is…field” is an essential supplement, so we should not use punctuation to separate it from “scuba diving club.” ."),
      distractors: {
        B: L("Choice B is incorrect. This choice creates a punctuation error. “That is…field” is an essential supplement, so we should not use a comma (or any kind of punctuation) to separate it from “scuba diving club.” ."),
        C: L("Choice C is incorrect. This choice creates a punctuation error. “That is…field” is an essential supplement, so we should not use a dash (or any kind of punctuation) to separate it from “scuba diving club.” ."),
        D: L("Choice D is incorrect. This choice creates a run-on sentence. It makes “that is…United States” into an awkward independent clause, but it also makes “that has…field” into its own awkward independent clause without the correct punctuation separating it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-603755a5", "603755a5", 332)
    },
    {
      id: "rw-bd-8999c0c5",
      sourceQuestionId: "8999c0c5",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Choreographers George Balanchine and Martha Graham both contributed sections to the dance piece Episodes, which premiered at New York’s City Center of Music and Drama in 1959. This cross-genre collaboration brought together the distinct features of Balanchine’s neoclassical ballet and Graham’s modern ______ the stylistic diversity and creative innovation within the dance world.</p>",
      stem: STEM,
      options: ["dance, it showcased", "dance. Which showcased", "dance, showcasing", "dance. Showcasing"],
      answer: "C",
      explanation: L("Choice C is the best answer. The conventions being tested are the use of punctuation and verb forms within a sentence. This choice correctly uses a comma to mark the boundary between the main clause (“This...dance”) and the supplementary element (“showcasing...world”) that provides additional information about what the collaboration accomplished. Moreover, the nonfinite present participle “showcasing” is used correctly to form a supplementary element that modifies the main clause (“this...dance”), describing what the collaboration demonstrated about stylistic diversity and creative innovation in the dance world."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Adding the subject “it” and the finite verb “showcased” results in a second main clause (“it...world”), and a comma can’t be used in this way to join two main clauses."),
        B: L("Choice B is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “which.”"),
        D: L("Choice D is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “showcasing.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8999c0c5", "8999c0c5", 333)
    },
    {
      id: "rw-bd-ad046778",
      sourceQuestionId: "ad046778",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>To humans, it does not appear that the golden orb-weaver spider uses camouflage to capture its ______ the brightly colored arachnid seems to wait conspicuously in the center of its large circular web for insects to approach. Researcher Po Peng of the University of Melbourne has explained that the spider’s distinctive coloration may in fact be part of its appeal.</p>",
      stem: STEM,
      options: ["prey, rather,", "prey rather,", "prey, rather;", "prey; rather,"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the coordination of main clauses within a sentence. The semicolon is correctly used to join the first main clause (“To humans…prey”) and the second main clause (“rather…approach”). Further, the comma after the adverb “rather” is correctly used to separate the adverb from the main clause (“the brightly…approach”) it modifies, logically indicating that the information in this clause (how the spider’s behavior appears to humans) is contrary to the information in the previous clause (how the spider’s behavior does not appear to humans)."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        B: L("Choice B is incorrect because it results in a run-on sentence. The two main clauses are fused without appropriate punctuation and/or a conjunction."),
        C: L("Choice C is incorrect. Placing the comma between the first main clause “To humans…prey” and the adverb “rather” illogically indicates that the information in the first main clause is contrary to what came before, which doesn’t make sense in this context.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-ad046778", "ad046778", 334)
    },
    {
      id: "rw-bd-7ce4ee13",
      sourceQuestionId: "7ce4ee13",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>After immigrating from Mexico and obtaining U.S. citizenship, Octaviano Ambrosio Larrazolo entered politics, earning a reputation for being a fervent defender of Hispanic civil rights. In 1919 Larrazolo was elected governor of ______ in 1928 he became the nation’s first Hispanic U.S. Senator.</p>",
      stem: STEM,
      options: ["New Mexico and", "New Mexico,", "New Mexico, and", "New Mexico"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction \"and\" to join the first main clause (\"In 1919 Larrazolo was elected governor of New Mexico\") and the second main clause (\"in 1928 he became the nation’s first Hispanic US Senator\")."),
      distractors: {
        A: L("Choice A is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-7ce4ee13", "7ce4ee13", 335)
    },
    {
      id: "rw-bd-0a114526",
      sourceQuestionId: "0a114526",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 1937, Chinese American screen actor Anna May Wong, who had portrayed numerous villains and secondary characters but never a heroine, finally got a starring role in Paramount Pictures’ Daughter of Shanghai, a film that ______ “expanded the range of possibilities for Asian images on screen.”</p>",
      stem: STEM,
      options: ["critic, Stina Chyn, claims", "critic, Stina Chyn, claims,", "critic Stina Chyn claims", "critic Stina Chyn, claims,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The conventions being tested are punctuation use between titles and proper nouns and between verbs and integrated quotations. No punctuation is needed to set off the proper noun “Stina Chyn” from the title that describes Chyn, “critic.” Because “Stina Chyn” is essential information identifying the “critic,” no punctuation is necessary. Further, no punctuation is needed between the verb “claims” and the following quotation because the quotation is integrated into the structure of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed before or after the proper noun “Stina Chyn.” Setting the critic’s name off with commas suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case."),
        B: L("Choice B is incorrect because no punctuation is needed before or after the proper noun “Stina Chyn.” Setting the critic’s name off with commas suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case. Additionally, no punctuation is needed between “claims” and the integrated quotation."),
        D: L("Choice D is incorrect because no punctuation is needed between the verb “claims” and its subject, “critic Stina Chyn.” Additionally, no punctuation is needed between the verb “claims” and the integrated quotation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-0a114526", "0a114526", 337)
    },
    {
      id: "rw-bd-a2293b3f",
      sourceQuestionId: "a2293b3f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>A harpsichord may look just like a piano, but the difference between the two instruments is easy to hear. When a harpsichord’s keys are pressed, the strings inside the ______ are plucked, not struck.</p>",
      stem: STEM,
      options: ["instrument:", "instrument", "instrument—", "instrument,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between a subject and a verb. When, as in this case, a subject (\"the strings inside the instrument\") is immediately followed by a main verb (\"are plucked\"), no punctuation is needed."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the subject and the verb."),
        C: L("Choice C is incorrect because no punctuation is needed between the subject and the verb."),
        D: L("Choice D is incorrect because no punctuation is needed between the subject and the verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a2293b3f", "a2293b3f", 338)
    },
    {
      id: "rw-bd-5aa1fffd",
      sourceQuestionId: "5aa1fffd",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Where ______ Interestingly, it was invented by an author. It first appears in the novel Through the Looking Glass by English author Lewis Carroll.</p>",
      stem: STEM,
      options: ["did the word “chortle” come from.", "the word “chortle” did come from?", "did the word “chortle” come from?", "the word “chortle” come from."],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a question mark to punctuate the interrogative sentence \"where did the word ‘chortle’ come from,\" which asks a direct question."),
      distractors: {
        A: L("Choice A is incorrect because a period can’t be used in this way to punctuate an interrogative sentence, such as \"where did the word ‘chortle’ come from.\""),
        B: L("Choice B is incorrect because \"where the word ‘chortle’ did come from\" does not follow the conventional structure of a direct question in Standard English. It’s conventional in Standard English to follow the interrogative word \"where\" with an auxiliary verb (such as \"did\") when asking a direct question."),
        D: L("Choice D is incorrect because \"where the word ‘chortle’ come from\" does not follow the conventional structure of a direct question in Standard English. It’s conventional in Standard English to follow the interrogative word \"where\" with an auxiliary verb (such as \"did\") when asking a direct question. Furthermore, a period can’t be used in this way to punctuate an interrogative sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5aa1fffd", "5aa1fffd", 339)
    },
    {
      id: "rw-bd-a5079e0d",
      sourceQuestionId: "a5079e0d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Horsepower is a unit of measurement used to determine how much power a vehicle produces. The measurement is based on how much and how quickly weight can be ______ one unit of mechanical horsepower is equivalent to the amount of power it takes to lift 550 pounds one foot off the ground in one second.</p>",
      stem: STEM,
      options: ["moved, for example,", "moved,", "moved; for example,", "moved"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (\"The measurement...moved\") and the second main clause (\"for example...second\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Without a coordinating conjunction, a comma can’t be used in this way to join the two main clauses (\"The measurement…moved\" and \"for example…second\")."),
        B: L("Choice B is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join the two main clauses (\"The measurement…moved\" and \"one unit…second\")."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two main clauses (\"The measurement…moved\" and \"one unit…second\") are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a5079e0d", "a5079e0d", 340)
    },
    {
      id: "rw-bd-831b55ec",
      sourceQuestionId: "831b55ec",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Louise Bennett (1919–2006), also known as “Miss Lou,” was an influential Jamaican poet and folklorist. Her innovative poems ______ the use of Jamaican Creole (a spoken language) in literature.</p>",
      stem: STEM,
      options: ["popularized;", "popularized,", "popularized", "popularized:"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between a verb and an object. No punctuation is needed between the verb \"popularized\" and its object \"the use of Jamaican Creole.\" The object helps complete the idea of the verb—in this case, it explains what Louise Bennett popularized—and any punctuation between the two results in an ungrammatical sentence."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the verb and its object."),
        B: L("Choice B is incorrect because no punctuation is needed between the verb and its object."),
        D: L("Choice D is incorrect because no punctuation is needed between the verb and its object.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-831b55ec", "831b55ec", 341)
    },
    {
      id: "rw-bd-fa07bcb6",
      sourceQuestionId: "fa07bcb6",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Ganga is a folk singing tradition that originated in the Dinaric Alps in southern Europe. Ganga singers sing different melodies at the same time. The clashing notes can echo a long way across the mountains, which is why ______</p>",
      stem: STEM,
      options: ["ganga has been used as a communication method?", "ganga has been used as a communication method.", "has ganga been used as a communication method.", "has ganga been used as a communication method?"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a period to punctuate a declarative sentence ending with a relative clause that presents an indirect question (“why ganga has been used as a communication method.”)"),
      distractors: {
        A: L("Choice A is incorrect. It’s unconventional to use a question mark to punctuate a declarative sentence that presents an indirect question."),
        C: L("Choice C is incorrect. The structure requires a declarative clause at the end of the sentence, not an interrogative clause that asks a direct question, such as “has ganga been used as a communication method.”"),
        D: L("Choice D is incorrect. The structure requires a declarative clause at the end of the sentence, not an interrogative clause that asks a direct question, such as “has ganga been used as a communication method.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-fa07bcb6", "fa07bcb6", 343)
    },
    {
      id: "rw-bd-1f39ab8b",
      sourceQuestionId: "1f39ab8b",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the novel Things Fall Apart by Chinua Achebe, Okonkwo is a leader of Umuofia (a fictional Nigerian clan) and takes pride in his culture’s traditions. However, when the arrival of European missionaries brings changes to Umuofia, the novel asks a central question: How ______</p>",
      stem: STEM,
      options: ["Umuofia’s traditions will be affected.", "will Umuofia’s traditions be affected.", "Umuofia’s traditions will be affected?", "will Umuofia’s traditions be affected?"],
      answer: "D",
      explanation: L("Choice D is the best answer. The clause before the colon tells us that the novel “asks a question,” so the clause after the colon should be in the conventional form of a question: with the verb before the subject, and a question mark at the end."),
      distractors: {
        A: L("Choice A is incorrect. This choice ends the sentence with a period, which isn’t right. The clause before the colon tells us that the novel “asks a question,” so the clause after the colon should be that question."),
        B: L("Choice B is incorrect. This choice ends the sentence with a period, which isn’t right. The clause before the colon tells us that the novel “asks a question,” so the clause after the colon should be that question. In Standard English, questions place the verb before the subject and end with a question mark."),
        C: L("Choice C is incorrect. This choice doesn’t conform to the conventions of Standard English. In Standard English, questions place the verb before the subject.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-1f39ab8b", "1f39ab8b", 349)
    },
    {
      id: "rw-bd-f868d438",
      sourceQuestionId: "f868d438",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 2018, the innovative works of Congolese sculptor and architect Bodys Isek ______ were featured in City Dreams, a solo exhibition at New York’s Museum of Modern Art.</p>",
      stem: STEM,
      options: ["Kingelez;", "Kingelez,", "Kingelez", "Kingelez:"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation between a subject and a verb. No punctuation is needed when the subject of a sentence is immediately followed by a main verb. In this case, the sentence’s subject (“the innovative works of Congolese sculptor and architect Bodys Isek Kingelez”) is followed by the main verb “were featured,” and no punctuation should come between them."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the subject and the verb."),
        B: L("Choice B is incorrect because no punctuation is needed between the subject and the verb."),
        D: L("Choice D is incorrect because no punctuation is needed between the subject and the verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-f868d438", "f868d438", 352)
    },
    {
      id: "rw-bd-60dd03bc",
      sourceQuestionId: "60dd03bc",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Located in the northern United States, the Great Lakes Basin contains roughly 35,000 islands. Lake Superior has Grand Island, for example. Lake Michigan has Belle Isle. Lake Huron, though, is home ______ the largest island of them all: Manitoulin Island.</p>",
      stem: STEM,
      options: ["to;", "to—", "to", "to,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between a preposition and its complement. No punctuation is needed between the preposition \"to\" and its complement \"the largest island of them all.\" The complement completes the meaning of the preposition in the phrase \"home to the largest island of them all,\" and any punctuation within it results in an ungrammatical sentence."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the preposition and its complement."),
        B: L("Choice B is incorrect because no punctuation is needed between the preposition and its complement."),
        D: L("Choice D is incorrect because no punctuation is needed between the preposition and its complement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-60dd03bc", "60dd03bc", 353)
    },
    {
      id: "rw-bd-6d4b2e1e",
      sourceQuestionId: "6d4b2e1e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The 1977 play And the Soul Shall Dance depicts two Japanese American farming families in Depression-era Southern California. Critics have noted the way pioneering ______ compares the experiences of issei (Japanese nationals who emigrated to America) and nisei (their American- born children).</p>",
      stem: STEM,
      options: ["playwright, Wakako Yamauchi,", "playwright, Wakako Yamauchi", "playwright Wakako Yamauchi,", "playwright Wakako Yamauchi"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation between titles and proper nouns. No punctuation is needed to set off the proper noun \"Wakako Yamauchi\" from the title that describes Yamauchi, \"pioneering playwright.\" Because \"Wakako Yamauchi\" is essential information identifying the \"pioneering playwright,\" no punctuation is necessary."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed before or after the proper noun \"Wakako Yamauchi.\" Setting the playwright’s name off with commas suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case."),
        B: L("Choice B is incorrect because no punctuation is needed between the title \"pioneering playwright\" and the proper noun \"Wakako Yamauchi.\""),
        C: L("Choice C is incorrect because no punctuation is needed between the proper noun \"Wakako Yamauchi\" and the verb \"compares.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6d4b2e1e", "6d4b2e1e", 354)
    },
    {
      id: "rw-bd-39ac6498",
      sourceQuestionId: "39ac6498",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In forecasting weather events, meteorologists sometimes discuss the role of atmospheric rivers. What are atmospheric rivers, and how ______ Part of the water cycle, atmospheric rivers are narrow channels of moisture moving through the atmosphere. In certain conditions, these “rivers” can release some of their moisture as precipitation.</p>",
      stem: STEM,
      options: ["do they affect our weather.", "they do affect our weather.", "do they affect our weather?", "they do affect our weather?"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is end-of-sentence punctuation. This choice correctly uses a question mark to punctuate the coordinated interrogative clauses \"What are atmospheric rivers\" and \"how do they affect our weather,\" both of which ask direct questions."),
      distractors: {
        A: L("Choice A is incorrect because a period can’t be used in this way to punctuate an interrogative clause, such as \"how do they affect our weather,\" at the end of a sentence."),
        B: L("Choice B is incorrect because the structure requires an interrogative clause and a question mark at the end of the sentence."),
        D: L("Choice D is incorrect because the structure requires an interrogative clause at the end of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-39ac6498", "39ac6498", 357)
    },
    {
      id: "rw-bd-8d00cd7c",
      sourceQuestionId: "8d00cd7c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Within Earth’s biomes, there are four main types of desert: arid, semiarid, coastal, and cold. The roughly ______ is classified as an arid desert.</p>",
      stem: STEM,
      options: ["200,000 km 2 Puntland Desert,", "200,000 km 2 , Puntland Desert", "200,000 km 2 Puntland Desert", "200,000 km 2 , Puntland Desert,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation between a modifier and a noun and also between a subject and a verb. No punctuation is needed when, as in this case, a modifying phrase (“roughly 200,000 km 2 ”) precedes the noun phrase it modifies (“Puntland Desert”) to form the subject of the sentence. Additionally, no punctuation is needed between the subject (“The roughly...Desert”) and the main verb (“is classified”)."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the subject and the main verb."),
        B: L("Choice B is incorrect because no punctuation is needed between the modifier and the noun phrase."),
        D: L("Choice D is incorrect because no punctuation is needed between the modifier and the noun phrase, nor is it needed between the subject and the main verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8d00cd7c", "8d00cd7c", 358)
    },
    {
      id: "rw-bd-109d5bbb",
      sourceQuestionId: "109d5bbb",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>With some 16,000 in attendance, the Second World Black and African Festival of Arts and ______ or FESTAC ‘77, as the event was more commonly known—became the largest pan-African event on record. FESTAC drew people from around the world to Lagos, Nigeria, for a monthlong celebration of Black and African art, scholarship, and activism.</p>",
      stem: STEM,
      options: ["Culture:", "Culture—", "Culture,", "Culture"],
      answer: "B",
      explanation: L("Choice B is the best answer. The text uses a dash to introduce a nonessential element that explains the acronym FESTAC. The dash matches the dash that comes after “known,” ending the descriptive aside."),
      distractors: {
        A: L("Choice A is incorrect. A colon can only come after an independent clause, which isn’t the case here."),
        C: L("Choice C is incorrect. While punctuation is required to set off “or FESTAC…known” from the rest of the sentence, nonessential elements must be separated from the sentence with matching punctuation. Since a dash appears on the other side of the element, we can’t use a comma here."),
        D: L("Choice D is incorrect. The descriptive aside “or FESTAC…known” is a nonessential element that must be separated with punctuation from the rest of the sentence. This choice fails to add the necessary punctuation before the nonessential element.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-109d5bbb", "109d5bbb", 360)
    },
    {
      id: "rw-bd-b5ff8f8e",
      sourceQuestionId: "b5ff8f8e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The element carbon has the highest melting point ______ all the elements on the periodic table—3,500 degrees Celsius.</p>",
      stem: STEM,
      options: ["of", "of—", "of,", "of:"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between a preposition and its complement. No punctuation is needed between the preposition \"of\" and its complement \"all the elements on the periodic table.\" The complement completes the meaning of the preposition in the phrase \"the highest melting point of all the elements on the periodic table,\" and using punctuation to separate the complement from the preposition results in an ungrammatical sentence."),
      distractors: {
        B: L("Choice B is incorrect because no punctuation is needed between the preposition and its complement."),
        C: L("Choice C is incorrect because no punctuation is needed between the preposition and its complement."),
        D: L("Choice D is incorrect because no punctuation is needed between the preposition and its complement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-b5ff8f8e", "b5ff8f8e", 361)
    },
    {
      id: "rw-bd-3fee46f2",
      sourceQuestionId: "3fee46f2",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Sociologist Todd Gitlin co-opted the term “recombinant,” normally used in reference to genetic engineering, to describe serialized television shows of the 1980s. Gitlin’s use of the term referenced TV studios’ practice of repackaging successful narrative formulas as new ______ even shows that varied only slightly from other shows still attracted sizeable audiences.</p>",
      stem: STEM,
      options: ["content, in that era", "content; in that era,", "content in that era,", "content, in that era,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation within a sentence. This choice uses a semicolon in a conventional way to join the first main clause (\"Gitlin’s…content\") and the second main clause beginning with a supplementary phrase (\"in… audiences\"). Further, placing a comma after \"era\" separates the supplementary phrase \"in that era\" from the rest of the main clause that follows (\"even…audiences\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses. Further, this choice fails to mark the boundary between the supplementary phrase \"in that era\" and the rest of the main clause that follows (\"even…audiences\")."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two main clauses (\"Gitlin’s…content\" and \"in… audiences\") are fused without punctuation and/or a conjunction."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-3fee46f2", "3fee46f2", 365)
    },
    {
      id: "rw-bd-d073983d",
      sourceQuestionId: "d073983d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Known for her massive photorealistic paintings of African American figures floating or swimming in pools, Calida Garcia ______ was the logical choice to design the book cover for Ta-Nehisi Coates’s The Water Dancer, a novel about an African American man who can travel great distances through water.</p>",
      stem: STEM,
      options: ["Rawles—", "Rawles:", "Rawles,", "Rawles"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation between a subject and a verb. When, as in this case, a subject (“Calida Garcia Rawles”) is immediately followed by a verb (“was”), no punctuation is needed."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the subject and the verb."),
        B: L("Choice B is incorrect because no punctuation is needed between the subject and the verb."),
        C: L("Choice C is incorrect because no punctuation is needed between the subject and the verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-d073983d", "d073983d", 367)
    },
    {
      id: "rw-bd-c468db1c",
      sourceQuestionId: "c468db1c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A group of ecologists led by Axel Mithöfer at the Max Planck Institute for Chemical Ecology in Germany examined the defensive responses of two varieties of the sweet potato ______ TN57, which is known for its insect resistance, and TN66, which is much more susceptible to pests.</p>",
      stem: STEM,
      options: ["plant.", "plant;", "plant", "plant:"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between a main clause and a supplementary phrase. In this choice, a colon is correctly used to mark the boundary between the main clause (“A group…plant”) and the supplementary element (“TN57…pests”) and to introduce the following elaboration on the specific varieties of sweet potato plants that were examined."),
      distractors: {
        A: L("Choice A is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “TN57.”"),
        B: L("Choice B is incorrect because a semicolon can’t be used in this way to join the main clause (“A group…plant”) and the supplementary element (“TN57…pests”). A semicolon is conventionally used to join two main clauses, whereas a colon is conventionally used to introduce an element that explains or amplifies the information in the preceding clause."),
        C: L("Choice C is incorrect because it fails to mark the boundary between the main clause (“A group...plant”) and the supplementary element (“TN57...pests”) with appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c468db1c", "c468db1c", 370)
    },
    {
      id: "rw-bd-78e978b5",
      sourceQuestionId: "78e978b5",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Organisation for Economic Co-operation and Development (OECD) tracks comparative price list data for its thirty-eight member countries. For instance, in July 2021, a hypothetical basket of goods priced at 100 US dollars (USD) in the United States would have cost 62 USD and 110 USD in fellow OECD ______ and Luxembourg, respectively.</p>",
      stem: STEM,
      options: ["nations, Chile", "nations; Chile", "nations: Chile", "nations Chile"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation between titles and proper nouns. No punctuation is needed to set off the coordinated noun phrase \"Chile and Luxembourg\" from the title that describes the two countries, \"fellow OECD nations.\" Because the proper nouns \"Chile and Luxembourg\" are essential information identifying the \"fellow OECD nations,\" no punctuation is necessary."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the country names (\"Chile and Luxembourg\") and the title (\"fellow OECD nations\") describing them. Further, setting the countries’ names off with commas suggests that they could be removed without affecting the coherence of the sentence, which isn’t the case."),
        B: L("Choice B is incorrect because no punctuation is needed between the country names (\"Chile and Luxembourg\") and the title (\"fellow OECD nations\") describing them."),
        C: L("Choice C is incorrect because no punctuation is needed between the country names (\"Chile and Luxembourg\") and the title (\"fellow OECD nations\") describing them. Placing a colon after \"nations\" would confusingly suggest that these were the costs of the basket of goods for \"fellow OECD nations\" in general, not for Chile and Luxembourg specifically.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-78e978b5", "78e978b5", 374)
    },
    {
      id: "rw-bd-d4fe8f03",
      sourceQuestionId: "d4fe8f03",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Paintings by the renowned twentieth-century US ______ were featured in Artist to Artist, an exhibition at the Smithsonian Art Museum that paired the works of artists whose career trajectories intersected in meaningful ways.</p>",
      stem: STEM,
      options: ["artists: Thomas Hart Benton and Jackson Pollock,", "artists Thomas Hart Benton and Jackson Pollock", "artists Thomas Hart Benton, and Jackson Pollock,", "artists, Thomas Hart Benton and Jackson Pollock"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of punctuation around noun phrases. No punctuation is needed because the coordinated noun phrase \"Thomas Hart Benton and Jackson Pollock\" is a restrictive appositive, meaning that it provides essential identifying information about the noun phrase before it, \"the renowned twentieth-century US artists.\""),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the noun phrase \"the renowned twentieth-century US artists\" and the restrictive appositive \"Thomas Hart Benton and Jackson Pollock.\" Additionally, no punctuation is needed between the sentence’s subject (\"paintings by the renowned twentieth-century US artists Thomas Hart Benton and Jackson Pollock\") and the main verb (\"were featured\")."),
        C: L("Choice C is incorrect because no punctuation is needed between the coordinated elements \"Thomas Hart Benton\" and \"Jackson Pollock.\" Additionally, no punctuation is needed between the sentence’s subject (\"paintings by the renowned twentieth-century US artists Thomas Hart Benton and Jackson Pollock\") and the main verb (\"were featured\")."),
        D: L("Choice D is incorrect because no punctuation is needed between the noun phrase \"the renowned twentieth- century US artists\" and the restrictive appositive \"Thomas Hart Benton and Jackson Pollock.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-d4fe8f03", "d4fe8f03", 375)
    },
    {
      id: "rw-bd-bb4557cf",
      sourceQuestionId: "bb4557cf",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The relationship between genomes and epigenomes reveals how cells with identical DNA develop different ______ whereas the genome in each cell contains a complete DNA sequence, the epigenome consists of chemical compounds that determine which traits in the sequence will be expressed.</p>",
      stem: STEM,
      options: ["functions", "functions,", "functions and,", "functions:"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of a colon within a sentence. In this choice, the colon correctly introduces the following explanation of the different functions of genomes and epigenomes."),
      distractors: {
        A: L("Choice A is incorrect because it results in a run-on sentence. The two main clauses (\"The relationship…functions\" and \"whereas…expressed\") are fused without punctuation and/or a conjunction."),
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to join two main clauses (\"The relationship…functions\" and \"whereas…expressed\")."),
        C: L("Choice C is incorrect. Without a comma preceding it, the conjunction \"and\" can’t be used in this way to join two main clauses. Furthermore, \"and\" fails to indicate that what follows is an explanation of how cells with identical DNA develop different functions.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-bb4557cf", "bb4557cf", 378)
    },
    {
      id: "rw-bd-da53d726",
      sourceQuestionId: "da53d726",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In February 1919, following the end of the First World War, women from ten countries around the world convened the Inter-Allied Women’s Conference in Paris. The conference’s goals were ______ ensure women’s participation in the proceedings of the Paris Peace Conference, to secure the right of women to serve in the League of Nations, and to advocate for human rights.</p>",
      stem: STEM,
      options: ["threefold: to", "threefold. To", "threefold to", "threefold; to"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of punctuation within a sentence. In this choice, the colon correctly introduces the series of goals held by the 1919 Inter-Allied Women’s Conference."),
      distractors: {
        B: L("Choice B is incorrect because placing a period after \"threefold\" results in a rhetorically unacceptable sentence fragment beginning with \"To.\""),
        C: L("Choice C is incorrect because it results in a run-on sentence. The main clause (\"The conference’s goals were threefold\") and the series supplement (\"to…rights\") are fused without punctuation."),
        D: L("Choice D is incorrect because a semicolon can’t be used in this way to introduce a series. A semicolon is conventionally used to join two main clauses, whereas a colon is conventionally used to introduce a series, making the colon the better choice in this context.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-da53d726", "da53d726", 379)
    },
    {
      id: "rw-bd-f2eaaf5d",
      sourceQuestionId: "f2eaaf5d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>At eight paragraphs long, the preamble to the constitution of ______ country in Western Asia—is much longer than the one-paragraph preamble to the United States Constitution.</p>",
      stem: STEM,
      options: ["Bahrain—a", "Bahrain, a", "Bahrain a", "Bahrain: a"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the punctuation of a supplementary element within a sentence. The dash after “Bahrain” pairs with the dash after “Asia” to separate the supplementary element “a country in Western Asia” from the rest of the sentence."),
      distractors: {
        B: L("Choice B is incorrect because a comma can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence."),
        C: L("Choice C is incorrect because it fails to use appropriate punctuation to separate the supplementary element from the rest of the sentence."),
        D: L("Choice D is incorrect because a colon can’t be paired with a dash in this way to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-f2eaaf5d", "f2eaaf5d", 380)
    },
    {
      id: "rw-bd-0b005ae2",
      sourceQuestionId: "0b005ae2",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Recently unearthed Neronian tools in France dating to 54,000 years ago and attributed to Homo sapiens may provide evidence that interactions between Neanderthals and modern humans occurred 10,000 years earlier than was previously ______ finding that, if true, would overturn current theories about H. sapiens migration during the Upper Paleolithic.</p>",
      stem: STEM,
      options: ["supposed; a", "supposed. A", "supposed a", "supposed, a"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to mark the boundary between the main clause (\"Recently...supposed\") and the supplementary element (\"a finding...Paleolithic\") that provides additional information about the implications of the Neronian tool discovery."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to join the main clause (\"Recently...supposed\") and the supplementary element (\"a finding...Paleolithic\")."),
        B: L("Choice B is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"a finding.\""),
        C: L("Choice C is incorrect because it results in a run-on sentence. The main clause (\"Recently...supposed\") and the supplementary element (\"a finding...Paleolithic\") are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-0b005ae2", "0b005ae2", 382)
    },
    {
      id: "rw-bd-eb03096e",
      sourceQuestionId: "eb03096e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>According to the University of Hawai i at Mānoa, aloha āina is “a recognition, commitment, and practice sustaining the ea—or life breath” between the Hawaiian people and their natural environments. The concept has been proudly embodied ______ Native Hawaiians for generations, contributing to the lush flora and renowned beauty of the islands.</p>",
      stem: STEM,
      options: ["by;", "by:", "by,", "by"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is punctuation use between a preposition and its complement. No punctuation is needed between the preposition \"by\" and its complement \"Native Hawaiians.\" The complement completes the meaning of the preposition in the phrase \"proudly embodied by Native Hawaiians,\" and any punctuation within it results in an ungrammatical sentence."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the preposition and its complement."),
        B: L("Choice B is incorrect because no punctuation is needed between the preposition and its complement."),
        C: L("Choice C is incorrect because no punctuation is needed between the preposition and its complement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-eb03096e", "eb03096e", 385)
    },
    {
      id: "rw-bd-d75d57a0",
      sourceQuestionId: "d75d57a0",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>While many video game creators strive to make their graphics ever more ______ others look to the past, developing titles with visuals inspired by the “8-bit” games of the 1980s and 1990s. (The term “8-bit” refers to a console whose processor could only handle eight bits of data at once.)</p>",
      stem: STEM,
      options: ["lifelike but", "lifelike", "lifelike,", "lifelike, but"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation between a subordinate clause and a main clause. This choice correctly uses a comma to mark the boundary between the subordinate clause (“While…lifelike”) and the main clause (“others look to the past”)."),
      distractors: {
        A: L("Choice A is incorrect because it results in an incomplete sentence with no main clause."),
        B: L("Choice B is incorrect because it fails to mark the boundary between the subordinate clause (“While…lifelike”) and the main clause (“others…past”)."),
        D: L("Choice D is incorrect because it results in an incomplete sentence with no main clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-d75d57a0", "d75d57a0", 386)
    },
    {
      id: "rw-bd-a427a52c",
      sourceQuestionId: "a427a52c",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Lion Light system, developed by Kenyan inventor Richard Turere, consists of LED lights installed around the perimeter of livestock pastures. Powered with ______ the blinking LEDs keep lions away at night, thus protecting the livestock without risking harm to the endangered lions.</p>",
      stem: STEM,
      options: ["energy collected, by solar panels, during the day", "energy collected by solar panels during the day", "energy collected by solar panels during the day,", "energy, collected by solar panels during the day,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation between a supplementary phrase and a main clause. This choice correctly uses a comma to mark the boundary between the supplementary phrase (“powered…day”), which describes how the LEDs are powered, and the main clause (“the blinking…night”)."),
      distractors: {
        A: L("Choice A is incorrect because it fails to mark the boundary between the supplementary phrase and the main clause with appropriate punctuation. Furthermore, placing commas around the phrase “by solar panels” suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case."),
        B: L("Choice B is incorrect because it fails to mark the boundary between the supplementary phrase and the main clause with appropriate punctuation."),
        D: L("Choice D is incorrect. Placing commas around the phrase “collected by solar panels during the day″ suggests that it could be removed without affecting the coherence of the sentence, which isn’t the case.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a427a52c", "a427a52c", 387)
    },
    {
      id: "rw-bd-6997261f",
      sourceQuestionId: "6997261f",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 2009, researchers determined that pottery fragments from a cave in China were close to 18,000 years old. These are some of the oldest ______ of pottery ever found.</p>",
      stem: STEM,
      options: ["pieces:", "pieces,", "pieces", "pieces—"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between a noun and a prepositional phrase. No punctuation is needed between the noun \"pieces\" and the prepositional phrase \"of pottery.\" The prepositional phrase provides essential information about what kind of pieces were found, so it shouldn’t be separated from the rest of the noun phrase (\"some of the oldest pieces\") with punctuation."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the noun phrase \"some of the oldest pieces\" and the prepositional phrase \"of pottery.\""),
        B: L("Choice B is incorrect because no punctuation is needed between the noun phrase \"some of the oldest pieces\" and the prepositional phrase \"of pottery.\""),
        D: L("Choice D is incorrect because no punctuation is needed between the noun phrase \"some of the oldest pieces\" and the prepositional phrase \"of pottery.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-6997261f", "6997261f", 388)
    },
    {
      id: "rw-bd-5ee7fb04",
      sourceQuestionId: "5ee7fb04",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In modern plays, actors typically won’t acknowledge the ______ do so breaks the fourth wall, a metaphorical barrier between actors and audiences that allows viewers to suspend the knowledge that they’re watching a staged performance.</p>",
      stem: STEM,
      options: ["audience. As to", "audience to", "audience. To", "audience, to"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (\"In modern…audience\") and another (\"To do…performance\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"as.\""),
        B: L("Choice B is incorrect because it results in a run-on sentence. The sentences (\"In modern…audience\" and \"To do…performance\") are fused without punctuation and/or a conjunction."),
        D: L("Choice D is incorrect because it results in a comma splice. A comma can’t be used in this way to mark the boundary between sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-5ee7fb04", "5ee7fb04", 391)
    },
    {
      id: "rw-bd-a12e3b8a",
      sourceQuestionId: "a12e3b8a",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Customers who are satisfied with how a company resolves a service issue may regard that company more positively than they would if no such issue had occurred. This idea is known as the service recovery ______ research suggests that it has important implications for customer loyalty and retention.</p>",
      stem: STEM,
      options: ["paradox,", "paradox", "paradox, and", "paradox and,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction \"and\" to join the first main clause (\"This idea…paradox\") and the second main clause (\"research… retention\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses."),
        B: L("Choice B is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        D: L("Choice D is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction, not after it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-a12e3b8a", "a12e3b8a", 392)
    },
    {
      id: "rw-bd-c04e9136",
      sourceQuestionId: "c04e9136",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The 2022 Nobel Prize in Chemistry was awarded to three pioneers in the field of click chemistry: two-time Nobel laureate Barry Sharpless, who coined the term “click chemistry” in 1998; Carolyn Bertozzi, founder of the Bertozzi Group at ______ and Morten Meldal, a professor at the University of Copenhagen in Denmark.</p>",
      stem: STEM,
      options: ["Stanford", "Stanford,", "Stanford:", "Stanford;"],
      answer: "D",
      explanation: L("Choice D is the best answer. This choice correctly uses a semicolon to punctuate a complex list (which is made up of items that have commas in them)."),
      distractors: {
        A: L("Choice A is incorrect. This is a complex list, indicated by the semicolon between \"1998\" and \"Carolyn Bertozzi.\" What comes after the blank is a separate list item, so punctuation is needed after \"Stanford.\""),
        B: L("Choice B is incorrect. This is a complex list, indicated by the semicolon between \"1998\" and \"Carolyn Bertozzi.\" The items in this list have internal punctuation in the form of commas and must therefore be separated by semicolons to avoid confusion."),
        C: L("Choice C is incorrect. This is a complex list, indicated by the semicolon between \"1998\" and \"Carolyn Bertozzi.\" Colons aren’t used to separate items in a list.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c04e9136", "c04e9136", 393)
    },
    {
      id: "rw-bd-92f309b2",
      sourceQuestionId: "92f309b2",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Arms outstretched, right wrist over left with both hands dangling, South Korean musician Psy galloped from one foot to the other in the iconic dance of his 2012 international hit song “Gangnam Style.” Later, a statue depicting Psy’s arm-positioning during the dance was erected in the place that inspired the song’s ______ Gangnam District in Seoul, South Korea.</p>",
      stem: STEM,
      options: ["name;", "name.", "name", "name—"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a dash after the main clause (“Later...name”) to introduce the supplementary element (“Gangnam...Korea”) that identifies the place that inspired the song’s name."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to join the main clause (“Later...name”) and the supplementary element (“Gangnam...Korea”). A semicolon is conventionally used to join two main clauses."),
        B: L("Choice B is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “Gangnam.”"),
        C: L("Choice C is incorrect because it fails to mark the boundary between the main clause and the supplementary element with appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-92f309b2", "92f309b2", 395)
    },
    {
      id: "rw-bd-c49e946e",
      sourceQuestionId: "c49e946e",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>As the fourteenth US librarian of Congress, Carla Hayden has many responsibilities. These include overseeing the Library of Congress’s collections, which boast more than 162 million ______ the US Copyright Office, which registers copyright claims and advises Congress on copyright law; and appointing the US poet laureate.</p>",
      stem: STEM,
      options: ["items managing", "items, managing", "items; managing", "items. Managing"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of elements in a complex series. It’s conventional to use a semicolon to separate items in a complex series with internal punctuation, and in this choice, the semicolon after \"items\" is conventionally used to separate the first item (\"overseeing…items\") and the second item (\"managing…law\") in a list of Hayden’s responsibilities."),
      distractors: {
        A: L("Choice A is incorrect because it fails to use appropriate punctuation to separate the first item and the second item in the complex series."),
        B: L("Choice B is incorrect because a comma after \"items\" doesn’t match the semicolon used later to separate the second and third items in the series (\"managing…law\" and \"and appointing the US poet laureate\")."),
        D: L("Choice D is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"Managing.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-c49e946e", "c49e946e", 396)
    },
    {
      id: "rw-bd-fe41f258",
      sourceQuestionId: "fe41f258",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In ancient Greece, an Epicurean was a follower of Epicurus, a philosopher whose beliefs revolved around the pursuit of pleasure. Epicurus defined pleasure as “the absence of pain in the body and of trouble in the ______ that all life’s virtues derived from this absence.</p>",
      stem: STEM,
      options: ["soul,” positing", "soul”: positing", "soul”; positing", "soul.” Positing"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is punctuation use between a main clause and a participial phrase. This choice correctly uses a comma to mark the boundary between the main clause (“Epicurus… ‘soul’”) and the participial phrase (“positing…absence”) that provides additional information about how Epicurus defined pleasure."),
      distractors: {
        B: L("Choice B is incorrect because a colon can’t be used in this way to join a main clause and a participial phrase."),
        C: L("Choice C is incorrect because a semicolon can’t be used in this way to join a main clause and a participial phrase."),
        D: L("Choice D is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with “positing.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-fe41f258", "fe41f258", 398)
    },
    {
      id: "rw-bd-8790d061",
      sourceQuestionId: "8790d061",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>While constructing the Limyra Bridge, ancient Roman builders relied on temporary wooden beams to support the stone and brick structure. These temporary supports, a construction system known as ______ were removed when the bridge was completed.</p>",
      stem: STEM,
      options: ["falsework;", "falsework", "falsework,", "falsework:"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after \"falsework\" pairs with the comma after \"supports\" to separate the supplementary element \"a construction system known as falsework\" from the rest of the sentence. This supplementary element functions to clarify the term \"these temporary supports,\" and the pair of commas indicates that this element could be removed without affecting the grammatical coherence of the sentence."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence."),
        B: L("Choice B is incorrect because it fails to use appropriate punctuation to separate the supplemental element from the rest of the sentence."),
        D: L("Choice D is incorrect because a colon can’t be paired with a comma in this way to separate the supplementary element from the rest of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8790d061", "8790d061", 401)
    },
    {
      id: "rw-bd-8a264a54",
      sourceQuestionId: "8a264a54",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>With a blend of traditional design elements, such as arched Gothic ceilings, and modern ones, such as floor-to-ceiling ______ design splits the difference between old and new, a mixture that is increasingly seen in home interiors in the US.</p>",
      stem: STEM,
      options: ["windows; transitional", "windows—transitional", "windows. Transitional", "windows, transitional"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to mark the boundary between the introductory subordinate clause (\"With…windows\") and the main clause (\"transitional design splits the difference between old and new\")."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon can’t be used in this way to separate the subordinate clause (\"With…windows\") from the main clause (\"transitional…new\")."),
        B: L("Choice B is incorrect because a dash can’t be used in this way to separate the subordinate clause (\"With…windows\") from the main clause (\"transitional…new\")."),
        C: L("Choice C is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"with.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-8a264a54", "8a264a54", 402)
    },
    {
      id: "rw-bd-9902d2de",
      sourceQuestionId: "9902d2de",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The Alvarez theory, developed in 1980 by physicist Luis Walter Alvarez and his geologist son Walter Alvarez, maintained that the secondary effects of an asteroid impact caused many dinosaurs and other animals to die ______ it left unexplored the question of whether unrelated volcanic activity might have also contributed to the mass extinctions.</p>",
      stem: STEM,
      options: ["out but", "out, but", "out", "out,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the coordination of main clauses within a sentence. This choice correctly uses a comma and the coordinating conjunction “but” to join the first main clause (“the Alvarez…out”) and the second main clause (“it left…extinctions”)."),
      distractors: {
        A: L("Choice A is incorrect because when coordinating two longer main clauses such as these, it’s conventional to use a comma before the coordinating conjunction."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two main clauses are fused without punctuation and/or a conjunction."),
        D: L("Choice D is incorrect because it results in a comma splice. Without a conjunction following it, a comma can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-9902d2de", "9902d2de", 403)
    },
    {
      id: "rw-bd-64a40675",
      sourceQuestionId: "64a40675",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1953, a fellow performer tripped on legendary jazz musician Dizzy Gillespie’s trumpet, bending its bell upward. When Gillespie tested the damaged instrument, he realized that he ______ sound of a bent bell over that of a straight one.</p>",
      stem: STEM,
      options: ["preferred; the", "preferred the", "preferred, the", "preferred. The"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between a verb and its object. No punctuation is needed between the verb \"preferred\" and its object \"the sound of a bent bell over that of a straight one.\" The object helps complete the idea of the verb—in this case, it explains what type of sound Gillespie preferred—and any punctuation between the two results in an ungrammatical sentence."),
      distractors: {
        A: L("Choice A is incorrect because no punctuation is needed between the verb and its object."),
        C: L("Choice C is incorrect because no punctuation is needed between the verb and its object."),
        D: L("Choice D is incorrect because no punctuation is needed between the verb and its object.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-64a40675", "64a40675", 407)
    },
    {
      id: "rw-bd-4b424102",
      sourceQuestionId: "4b424102",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Balkan nation of Bosnia and Herzegovina does not have one president but ______ as members of the office of the presidency, one representing the nation’s Bosniaks, one its Serbs, and one its Croats, these elected officials take turns serving as the office’s chairperson.</p>",
      stem: STEM,
      options: ["three, known", "three. Known", "three who are known", "three, who are known"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is punctuation use between sentences. In this choice, the period is used correctly to mark the boundary between one sentence (“The Balkan...three”) and another (“Known...chairperson”). While the supplementary element (“known...Croats”) could logically be attached to either the first main clause (“The Balkan...three”) or the second main clause (“these elected...chairperson”), end-of-sentence punctuation is needed to indicate to which sentence the supplementary element belongs."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. In this choice, the first sentence, consisting of a main clause (“The Balkan...three”) and supplementary element (“known...Croats”), is incorrectly joined with a second main clause (“these elected...chairperson”) using a comma. A comma can’t be used in this way to join two sentences."),
        C: L("Choice C is incorrect because it results in a comma splice. In this choice, the first sentence, consisting of a main clause (“The Balkan...three”) and a relative clause (“who are...Croats”), is incorrectly joined with a second main clause (“these elected...chairperson”) using a comma. A comma can’t be used in this way to join two sentences. Additionally, this choice omits the comma needed after “three” to mark the beginning of the supplementary relative clause (“who are known...Croats”)."),
        D: L("Choice D is incorrect because it results in a comma splice. In this choice, the first sentence, consisting of a main clause (“The Balkan...three”) and a supplementary relative clause (“who are...Croats”), is incorrectly joined with a second main clause (“these elected...chairperson”) using a comma. A comma can’t be used in this way to join two sentences.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-4b424102", "4b424102", 411)
    },
    {
      id: "rw-bd-2c4cd76d",
      sourceQuestionId: "2c4cd76d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Researchers studying magnetosensation have determined why some soil-dwelling roundworms in the Southern Hemisphere move in the opposite direction of Earth’s magnetic field when searching for ______ in the Northern Hemisphere, the magnetic field points down, into the ground, but in the Southern Hemisphere, it points up, toward the surface and away from worms’ food sources.</p>",
      stem: STEM,
      options: ["food:", "food,", "food while", "food"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is colon use within a sentence. A colon used in this way introduces information that illustrates or explains information that has come before it. In this case, the colon introduces the following explanation of why some roundworms in the Southern Hemisphere move in the opposite direction of Earth’s magnetic field."),
      distractors: {
        B: L("Choice B is incorrect because it results in a comma splice. A comma can’t be used in this way to join two long independent clauses (“Researchers…food” and “in…sources”) such as these."),
        C: L("Choice C is incorrect because it results in a run-on sentence. The two clauses (“Researchers…food” and “in…sources”) are fused without punctuation. Furthermore, the conjunction “while” fails to indicate that what follows is an explanation of why some roundworms in the Southern Hemisphere move in the opposite direction of Earth’s magnetic field."),
        D: L("Choice D is incorrect because it results in a run-on sentence. The two clauses (“Researchers…food” and “in…sources”) are fused without punctuation and/or a conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-2c4cd76d", "2c4cd76d", 413)
    },
    {
      id: "rw-bd-3ed5ebb4",
      sourceQuestionId: "3ed5ebb4",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In her analysis of Edith Wharton’s The House of Mirth (1905), scholar Candace Waid observes that the novel depicts the upper classes of New York society as “consumed by the appetite of a soulless ______ an apt assessment given that The House of Mirth is set during the Gilded Age, a period marked by rapid industrialization, economic greed, and widening wealth disparities.</p>",
      stem: STEM,
      options: ["materialism”; and", "materialism” and", "materialism,”", "materialism”"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is punctuation between a main clause and a supplementary noun phrase. This choice correctly uses a comma to mark the boundary between the main clause (“scholar…materialism”) and the supplementary noun phrase (“an apt assessment”) that describes Waid’s observation about how The House of Mirth depicts the upper classes of New York society."),
      distractors: {
        A: L("Choice A is incorrect because a semicolon and the conjunction “and” can’t be used in this way to mark the boundary between a main clause and a supplementary noun phrase."),
        B: L("Choice B is incorrect. Joining the main clause (“scholar…materialism”) and the following noun phrase with the conjunction “and” results in a confusing and illogical sentence that suggests that the novel depicts the upper classes of New York society as “an apt assessment,” which doesn’t make sense in this context."),
        D: L("Choice D is incorrect because it fails to mark the boundary between the main clause and the supplementary noun phrase with appropriate punctuation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-3ed5ebb4", "3ed5ebb4", 415)
    },
    {
      id: "rw-bd-78b88c04",
      sourceQuestionId: "78b88c04",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Joshua Hinson, director of the language revitalization program of the Chickasaw Nation in Oklahoma, helped produce the world’s first Indigenous-language instructional app, Chickasaw ______ Chickasaw TV , in 2010; and a Rosetta Stone language course in Chickasaw, in 2015.</p>",
      stem: STEM,
      options: ["Basic; in 2009, an online television network;", "Basic; in 2009, an online television network,", "Basic, in 2009; an online television network,", "Basic, in 2009, an online television network,"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the punctuation of items in a complex series. It’s conventional to use a semicolon to separate items in a complex series with internal punctuation, and in this choice, the semicolon after “2009” is conventionally used to separate the first item (“the world’s…2009”) and the second item (“an online…2010”) in the series of things that Hinson helped create. Further, the comma after “Basic” correctly pairs with the comma after “app,” and the comma after “network” correctly pairs with the comma after “TV” to set off the supplemental elements (“Chickasaw Basic” and “Chickasaw TV”) that provide the names of the app and the TV network, respectively. Altogether, the punctuation in this choice results in a sentence that clearly indicates that Hinson helped make a language app in 2009, an online TV network in 2010, and a language course in 2015."),
      distractors: {
        A: L("Choice A is incorrect because it fails to punctuate the complex series in a way that makes clear that Hinson helped make a language app in 2009, an online TV network in 2010, and a language course in 2015."),
        B: L("Choice B is incorrect because it fails to punctuate the complex series in a way that makes clear that Hinson helped make a language app in 2009, an online TV network in 2010, and a language course in 2015."),
        D: L("Choice D is incorrect because the comma after “2009” doesn’t match the semicolon used to separate the second and third items in the complex series.")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-78b88c04", "78b88c04", 417)
    },
    {
      id: "rw-bd-9f0ac61d",
      sourceQuestionId: "9f0ac61d",
      skillId: "rw.sec.boundaries", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Dolores Huerta’s advocacy on behalf of farmworkers was rooted in her experience as a schoolteacher in Stockton, California, in the early 1950s. Hoping to help her students and their families outside the ______ Huerta left teaching to start the Stockton chapter of the Community Service Organization, a group focused on the needs of local farmworkers.</p>",
      stem: STEM,
      options: ["classroom.", "classroom;", "classroom,", "classroom"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation within a sentence. This choice correctly uses a comma to mark the boundary between the introductory participial phrase (\"Hoping…classroom\") and the main clause (\"Huerta…farmworkers\")."),
      distractors: {
        A: L("Choice A is incorrect because it results in a rhetorically unacceptable sentence fragment beginning with \"hoping.\""),
        B: L("Choice B is incorrect because a semicolon can’t be used in this way to mark the boundary between the participial phrase (\"Hoping…classroom\") and the main clause (\"Huerta… farmworkers\")."),
        D: L("Choice D is incorrect because it fails to mark the boundary between the participial phrase (\"Hoping…classroom\") and the main clause (\"Huerta…farmworkers\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-bd-9f0ac61d", "9f0ac61d", 419)
    }
  ]);

  /* ================= rw.sec.form-structure-sense — Form, Structure, and Sense (208) ================= */
  JTS.data.addQuestions([
    {
      id: "rw-fs-e38b3e4f",
      sourceQuestionId: "e38b3e4f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The radiation that ______ during the decay of radioactive atomic nuclei is known as gamma radiation.</p>",
      stem: STEM,
      options: ["occurs", "have occurred", "occur", "are occurring"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb \"occurs\" agrees in number with the singular subject \"radiation.\""),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"have occurred\" doesn’t agree in number with the singular subject \"radiation.\""),
        C: L("Choice C is incorrect because the plural verb \"occur\" doesn’t agree in number with the singular subject \"radiation.\""),
        D: L("Choice D is incorrect because the plural verb \"are occurring\" doesn’t agree in number with the singular subject \"radiation.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e38b3e4f", "e38b3e4f", 3)
    },
    {
      id: "rw-fs-37e5c794",
      sourceQuestionId: "37e5c794",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Despite being cheap, versatile, and easy to produce, ______ they are made from nonrenewable petroleum, and most do not biodegrade in landfills.</p>",
      stem: STEM,
      options: ["there are two problems associated with commercial plastics:", "two problems are associated with commercial plastics:", "commercial plastics’ two associated problems are that", "commercial plastics have two associated problems:"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-modifier placement. This choice ensures that the modifying phrase “despite being cheap, versatile, and easy to produce” appears immediately before the noun it modifies, “commercial plastics,” clearly establishing that the commercial plastics—and not another noun in the sentence—are being described as cheap, versatile, and easy to produce."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the function word “there” immediately after the modifying phrase illogically and confusingly suggests that “there” is cheap, versatile, and easy to produce."),
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun “two problems” immediately after the modifying phrase illogically suggests that the “problems” are cheap, versatile, and easy to produce."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “commercial plastics’ two associated problems” immediately after the modifying phrase illogically suggests that the “problems” are cheap, versatile, and easy to produce.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-37e5c794", "37e5c794", 6)
    },
    {
      id: "rw-fs-6f08641e",
      sourceQuestionId: "6f08641e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>On April 5, 1977, Kitty Cone and 150 other disability rights activists entered a San Francisco federal building. After pleading for years—to no effect—for the passage of key antidiscrimination legislation, ______ until their demands were addressed. Finally, on April 28, the legislation was signed.</p>",
      stem: STEM,
      options: ["pressure on lawmakers increased when the activists staged a sit-in protest", "a sit-in protest staged by the activists increased pressure on lawmakers", "lawmakers came under increased pressure when the activists staged a sit-in protest", "the activists increased pressure on lawmakers by staging a sit-in protest"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “the activists” the subject of the sentence and places it immediately after the modifying phrase “after...legislation.” In doing so, this choice clearly establishes that the activists—and not another noun in the sentence—were pleading for the passage of antidiscrimination legislation."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun phrase “pressure on lawmakers” immediately after the modifying phrase illogically suggests that the “pressure” was pleading for the passage of antidiscrimination legislation."),
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase “a sit-in protest” immediately after the modifying phrase illogically suggests that the “protest” was pleading for the passage of antidiscrimination legislation."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “lawmakers” immediately after the modifying phrase suggests that “lawmakers” were pleading for the passage of antidiscrimination legislation. While it’s possible for lawmakers to plead for the passage of legislation, the context strongly suggests that it’s the activists who pleaded for years for the passage of antidiscrimination legislation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-6f08641e", "6f08641e", 8)
    },
    {
      id: "rw-fs-3a1239d2",
      sourceQuestionId: "3a1239d2",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>If an animal can recognize itself in a reflective surface (“the mirror test”), it is considered to have self-awareness. In a recent study, scientists ______ for evidence of self-awareness in snakes, species that rely primarily on olfactory rather than visual processing, adapted the test to foreground smell, modifying the scent trails of North American eastern garter snakes and African ball pythons.</p>",
      stem: STEM,
      options: ["searched", "searching", "were searching", "have searched"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite present participle “searching” is correctly used to form a supplementary element that modifies the subject “scientists,” indicating that the scientists who adapted the test were looking for evidence of self-awareness in snakes."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The finite past tense verb “searched” can’t be used in this way to form a supplementary element that indicates what evidence the scientists who adapted the test were looking for."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The finite past progressive verb “were searching” can’t be used in this way to form a supplementary element that indicates what evidence the scientists who adapted the test were looking for."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite present perfect verb “have searched” can’t be used in this way to form a supplementary element that indicates what evidence the scientists who adapted the test were looking for.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-3a1239d2", "3a1239d2", 9)
    },
    {
      id: "rw-fs-3580533b",
      sourceQuestionId: "3580533b",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In recent years, economists around the world have created new tools that quantify the overall well-being of a country’s citizens. Economists in India, for example, use an Ease of Living Index. This tool ______ economic potential, sustainability, and citizens’ quality of life.</p>",
      stem: STEM,
      options: ["measures", "had measured", "would have measured", "will have been measuring"],
      answer: "A",
      explanation: L("Choice A is the best answer. The previous sentence tells us how economists in India \"use\" a certain tool, while this sentence describes general facts about that tool. To express general facts (and also to match the simple present tense of \"use\"), we should use the simple present tense form \"measures.\""),
      distractors: {
        B: L("Choice B is incorrect. This choice uses the past perfect tense, but the previous sentence tells us that the tool is currently used to measure things, so the past tense doesn’t make sense for this verb."),
        C: L("Choice C is incorrect. This choice uses the future perfect conditional tense, but the previous sentence tells us that the tool is currently used to measure things, so the future tense doesn’t make sense for this verb."),
        D: L("Choice D is incorrect. This choice uses the future perfect continuous tense, but the previous sentence tells us that the tool is currently used to measure things, so the future tense doesn’t make sense for this verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-3580533b", "3580533b", 10)
    },
    {
      id: "rw-fs-2c49940e",
      sourceQuestionId: "2c49940e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>French philosopher René Descartes doubted whether he could prove his own existence. Eventually, he found proof in his famous phrase “I think, therefore I am.” The ______ complexity: only those who exist would be able to ponder their existence.</p>",
      stem: STEM,
      options: ["phrases’ simplicity masks its", "phrases simplicity masks their", "phrase’s simplicity masks their", "phrase’s simplicity masks its"],
      answer: "D",
      explanation: L("Choice D is the best answer. The conventions being tested are the use of possessive nouns and the use of possessive determiners. The singular possessive noun \"phrase’s\" correctly indicates that there is only one simple phrase. The singular possessive determiner \"its\" agrees in number with the singular possessive noun \"phrase’s,\" reinforcing the idea that there is only one simple yet complex phrase."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the singular possessive noun \"phrase’s,\" not the plural possessive noun \"phrases’.\""),
        B: L("Choice B is incorrect because the context requires the singular possessive noun \"phrase’s\" and the corresponding singular possessive determiner \"its,\" not the plural noun \"phrases\" and the corresponding plural possessive determiner \"their.\""),
        C: L("Choice C is incorrect because the context requires the singular possessive determiner \"its,\" not the plural possessive determiner \"their.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2c49940e", "2c49940e", 11)
    },
    {
      id: "rw-fs-e62241b7",
      sourceQuestionId: "e62241b7",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>What is the correct pronunciation of Kiribati? In the Gilbertese language spoken by residents of the island nation, the letter combination -ti makes the -s sound; as a result, the country’s name ______ pronounced “Kiribas.”</p>",
      stem: STEM,
      options: ["are", "have been", "are being", "is"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"is\" agrees in number with the singular subject \"the country’s name.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"the country’s name.\""),
        B: L("Choice B is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"the country’s name.\""),
        C: L("Choice C is incorrect because the plural verb \"are being\" doesn’t agree in number with the singular subject \"the country’s name.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e62241b7", "e62241b7", 12)
    },
    {
      id: "rw-fs-a2816c7f",
      sourceQuestionId: "a2816c7f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>American abstract artist Richard ______ his installations to make passersby keenly aware of how one’s movements are affected by the physical features of one’s environment, assembles large-scale steel plates into sculptures that dominate the outdoor spaces they occupy.</p>",
      stem: STEM,
      options: ["Serra is intending", "Serra, intends", "Serra, intending", "Serra intends"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms within a sentence. This choice pairs the comma after \"Serra\" with the comma after \"environment\" and uses the nonfinite present participle \"intending\" to correctly form a supplementary phrase describing the reaction Serra intends his sculptures to provoke. This supplementary phrase appears between the noun phrase that it modifies (\"American abstract artist Richard Serra\") and the finite present tense verb (\"assembles\"), which functions as the sentence’s main verb and describes what Serra does."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The finite present continuous tense verb \"is intending\" can’t be used in this way in conjunction with the finite present tense verb \"assembles,\" which already functions as the main verb in the sentence."),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The finite present tense verb \"intends\" can’t be used in this way to supplement the noun phrase \"American abstract artist Richard Serra.\""),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite present tense verb \"intends\" can’t be used in this way in conjunction with the finite present tense verb \"assembles,\" which already functions as the main verb in the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-a2816c7f", "a2816c7f", 15)
    },
    {
      id: "rw-fs-b7363ba2",
      sourceQuestionId: "b7363ba2",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Mathematician and meteorologist Edward Lorenz used the metaphor of the “butterfly effect” to explain how seemingly minor events can have major impacts on future weather. According to Lorenz’s metaphor, the wind from a butterfly flapping ______ in Brazil might eventually grow into a storm elsewhere across the globe.</p>",
      stem: STEM,
      options: ["its wings", "its wings’", "it’s wing’s", "it’s wings’"],
      answer: "A",
      explanation: L("Choice A is the best answer. The conventions being tested are the use of possessive determiners and plural nouns. The singular possessive determiner \"its\" and the plural noun \"wings\" correctly indicate that the butterfly has multiple wings."),
      distractors: {
        B: L("Choice B is incorrect because the context requires the plural noun \"wings,\" not the plural possessive noun \"wings’.\""),
        C: L("Choice C is incorrect because the context requires the singular possessive determiner \"its\" and the plural noun \"wings,\" not the contraction \"it’s\" and the singular possessive noun \"wing’s.\""),
        D: L("Choice D is incorrect because the context requires the singular possessive determiner \"its\" and the plural noun \"wings,\" not the contraction \"it’s\" and the plural possessive noun \"wings’.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b7363ba2", "b7363ba2", 19)
    },
    {
      id: "rw-fs-908a76b8",
      sourceQuestionId: "908a76b8",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When a given industry—water and electricity are two well-known examples—carries high infrastructural start-up costs and other barriers that discourage competition, ______ of just one or two suppliers per municipality. Such industries are known as natural monopolies.</p>",
      stem: STEM,
      options: ["these often consist", "they often consist", "it often consists", "this often consists"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun \"it\" agrees in number with the singular antecedent \"industry\" and clearly indicates that the industry consists of just one or two suppliers per municipality."),
      distractors: {
        A: L("Choice A is incorrect. The plural pronoun \"these\" neither agrees in number with the singular antecedent \"industry\" nor clearly indicates that the industry—not another plural noun in the sentence, such as \"start-up costs\" or \"barriers\"—consists of just one or two suppliers per municipality."),
        B: L("Choice B is incorrect because the plural pronoun \"they\" doesn’t agree in number with the singular antecedent \"industry.\""),
        D: L("Choice D is incorrect because the singular pronoun \"this\" is ambiguous in this context; the resulting sentence leaves unclear what consists of just one or two suppliers per municipality.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-908a76b8", "908a76b8", 20)
    },
    {
      id: "rw-fs-1ee7b429",
      sourceQuestionId: "1ee7b429",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Bonnie Buratti of NASA’s Jet Propulsion Laboratory ______ data about Saturn’s rings collected by the Cassini spacecraft when she made an interesting discovery: the tiny moons embedded between and within Saturn’s rings are shaped by the buildup of ring material on the moons’ surfaces.</p>",
      stem: STEM,
      options: ["studies", "has been studying", "will study", "was studying"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the past progressive tense verb “was studying” is consistent with the other past tense verbs (e.g., “made” and “collected”) used to describe Buratti’s discovery. Further, the past progressive tense correctly indicates that an ongoing action in the past was occurring (she was studying) at the same time that another event occurred in the past (she made an interesting discovery)."),
      distractors: {
        A: L("Choice A is incorrect because the present tense verb “studies” isn’t consistent with the past tense verbs used to describe Buratti’s discovery."),
        B: L("Choice B is incorrect because the present perfect progressive tense verb “has been studying” isn’t consistent with the past tense verbs used to describe Buratti’s discovery."),
        C: L("Choice C is incorrect because the future tense verb “will study” isn’t consistent with the past tense verbs used to describe Buratti’s discovery.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1ee7b429", "1ee7b429", 22)
    },
    {
      id: "rw-fs-4c335aea",
      sourceQuestionId: "4c335aea",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In a recent analysis of lyrical trends in 350,000 songs, researchers cite increases in certain measures, such as the ratio of choruses to verses, as evidence music lyrics are becoming more repetitive. For instance, from 1970 to 2020, ______ chorus-to-verse ratios trended similarly, with each genre’s data indicating that relative to the number of unique verses, the number of repeated choruses in songs increased.</p>",
      stem: STEM,
      options: ["rocks and raps", "rock’s and rap’s", "rocks and rap’s", "rock and rap’s"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of possessive nouns. The singular possessive nouns \"rock’s\" and \"rap’s\" correctly indicate that the chorus-to-verse ratios belong to the genres of rock and rap."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the singular possessive nouns \"rock’s\" and \"rap’s,\" not the plural nouns \"rocks\" and \"raps.\""),
        C: L("Choice C is incorrect because the context requires the singular possessive noun \"rock’s,\" not the plural noun \"rocks.\""),
        D: L("Choice D is incorrect because the context requires the singular possessive noun \"rock’s,\" not the singular noun \"rock.\" This choice incorrectly suggests that there was a single chorus-to-verse ratio for rock and rap together, whereas the ratio was calculated for each genre individually.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4c335aea", "4c335aea", 27)
    },
    {
      id: "rw-fs-8b017d4e",
      sourceQuestionId: "8b017d4e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Supported by biochemical analyses of over 2,000 skeletons from the Middle Ages, ______</p>",
      stem: STEM,
      options: ["vegetables and grains were, a 2022 study found, the primary components of early medieval rulers’ diets.", "early medieval rulers’ diets were found, in a 2022 study, to have primarily consisted of vegetables and grains.", "the primary components of early medieval rulers’ diets were vegetables and grains, according to a 2022 study.", "findings from a 2022 study suggested that vegetables and grains were the primary components of early medieval rulers’ diets."],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase \"findings from a 2022 study\" the subject of the sentence and places it immediately after the modifying phrase \"supported...Ages.\" In doing so, this choice clearly establishes that the findings—and not another noun in the sentence—are supported by the biochemical analyses."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of \"vegetables and grains\" immediately after the modifying phrase illogically suggests that vegetables and grains are supported by biochemical analyses."),
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of \"early medieval rulers’ diets\" immediately after the modifying phrase illogically suggests that the rulers’ diets are supported by biochemical analyses."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of \"the primary components\" immediately after the modifying phrase illogically suggests that the primary components are supported by biochemical analyses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-8b017d4e", "8b017d4e", 28)
    },
    {
      id: "rw-fs-9127635a",
      sourceQuestionId: "9127635a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Star actress Kiki Omeili, who has appeared in 47 Nollywood films, is one of numerous luminaries to be pictured in Nigerian portraitist Iké Udé’s exhibition Nollywood Portraits. ______ referred to Nollywood—Nigeria’s $3 billion film industry—as “Africa’s vivid mirror par excellence,” honors its legacy with his vivid classical portraits of Omeili and her peers.</p>",
      stem: STEM,
      options: ["Udé, has", "Udé has", "Udé", "Udé, having"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms and punctuation within a sentence. The sentence’s subject is “Udé,” and its finite main verb is “honors.”This choice correctly uses the nonfinite participle “having referred” to form a supplementary element (“having...excellence”) describing Udé. The comma after “Udé” appropriately marks the boundary before that supplementary element."),
      distractors: {
        A: L("Choice A is incorrect because using the finite verb “has referred” creates an ungrammatical sentence. The sentence already has the finite main verb “honors,” so “has referred” can’t also function as a second main verb here without additional punctuation or conjunctions. Moreover, no punctuation is needed when a subject (“Udé”) is immediately followed by a finite verb (“has referred”)."),
        B: L("Choice B is incorrect because using the finite verb “has referred” creates an ungrammatical sentence. The sentence already has the finite main verb “honors,” so “has referred” can’t also function as a second main verb here without additional punctuation or conjunctions."),
        C: L("Choice C is incorrect because using the finite verb “referred” creates an ungrammatical sentence. The sentence already has the finite main verb “honors,” so “referred” can’t also function as a second main verb here without additional punctuation or conjunctions.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-9127635a", "9127635a", 29)
    },
    {
      id: "rw-fs-36e89f74",
      sourceQuestionId: "36e89f74",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>An imposing spire of igneous rock rising high above the Belle Fourche River in eastern Wyoming, Devils Tower (also known as Bear Lodge) is one of the most prominent examples of columnar jointing, a pattern of fracturing in rocks that ______ in parallel arrays of long polygonal prisms.</p>",
      stem: STEM,
      options: ["resulting", "were resulting", "results", "to result"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms within a sentence. Relative clauses, such as the one beginning with “that,” require a finite (tensed) verb, a verb that can function as the main verb of a clause. This choice correctly supplies the clause with the finite present tense verb “results.” Furthermore, the simple present tense verb “results” correctly indicates that the formation of parallel arrays of long polygonal prisms is an enduring property of this fracturing pattern."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The nonfinite participle “resulting” doesn’t supply the clause with a finite verb."),
        B: L("Choice B is incorrect because the past progressive tense verb “were resulting” doesn’t indicate that the formation of parallel arrays of long polygonal prisms is an enduring property of this fracturing pattern."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive “to result” doesn’t supply the clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-36e89f74", "36e89f74", 33)
    },
    {
      id: "rw-fs-035fd57e",
      sourceQuestionId: "035fd57e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The rough frog is a species of amphibian native to Australia. Currently, the frog’s range ______ parts of northern New South Wales and southeastern Queensland.</p>",
      stem: STEM,
      options: ["includes", "included", "will have included", "had included"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the present tense verb “includes,” used in conjunction with the word “currently,” correctly indicates that the frog’s current range includes parts of northern New South Wales and southeastern Queensland."),
      distractors: {
        B: L("Choice B is incorrect because the past tense verb “included” doesn’t indicate that the frog’s range currently includes parts of northern New South Wales and southeastern Queensland."),
        C: L("Choice C is incorrect because the future perfect tense “will have included” doesn’t indicate that the frog’s range currently includes parts of northern New South Wales and southeastern Queensland."),
        D: L("Choice D is incorrect because the past perfect tense “had included” doesn’t indicate that the frog’s range currently includes parts of northern New South Wales and southeastern Queensland.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-035fd57e", "035fd57e", 34)
    },
    {
      id: "rw-fs-9df6da04",
      sourceQuestionId: "9df6da04",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Entomologists Yash Sondhi and Samuel Fabian have tried to explain why moths fly erratically around light sources at night. Knowing that flying insects keep their backs pointed toward sunlight during the day, ______</p>",
      stem: STEM,
      options: ["the researchers theorize that moths, mistaking nighttime lights for the Sun, continually try to reorient their bodies while flying near such lights.", "the researchers’ theory is that moths mistake nighttime lights for the Sun, continually trying to reorient their bodies while flying near such lights.", "moths mistake nighttime lights for the Sun and continually try to reorient their bodies while flying near such lights, the researchers theorize.", "moths continually try to reorient their bodies while flying near nighttime lights, the researchers theorize, mistaking such lights for the Sun."],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase \"the researchers\" the subject of the sentence and places it immediately after the modifying phrase \"knowing…day.\" In doing so, this choice clearly establishes that the researchers—and not another noun in the sentence—know that flying insects keep their backs pointed toward sunlight during the day."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase \"the researchers’ theory\" immediately after the modifying phrase illogically suggests that the researchers’ theory knows that flying insects keep their backs pointed toward sunlight during the day."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun \"moths\" immediately after the modifying phrase illogically suggests that moths know that flying insects keep their backs pointed toward sunlight during the day."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun \"moths\" immediately after the modifying phrase illogically suggests that moths know that flying insects keep their backs pointed toward sunlight during the day.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-9df6da04", "9df6da04", 36)
    },
    {
      id: "rw-fs-ae439895",
      sourceQuestionId: "ae439895",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In her 1983 book The Managed Heart: Commercialization of Human Feeling, sociologist Arlie Russell Hochschild first explored at length her conception of a “sociology of emotions”—the idea that the various cultural and ideological frameworks a person has internalized (class, gender, political affiliation, etc.) ______ each emotional reaction that person has within a situation.</p>",
      stem: STEM,
      options: ["underlies", "is underlying", "underlie", "has been underlying"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-verb agreement. The plural verb \"underlie\" agrees in number with the plural subject \"frameworks.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"underlies\" doesn’t agree in number with the plural subject \"frameworks.\""),
        B: L("Choice B is incorrect because the singular verb \"is underlying\" doesn’t agree in number with the plural subject \"frameworks.\""),
        D: L("Choice D is incorrect because the singular verb \"has been underlying\" doesn’t agree in number with the plural subject \"frameworks.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-ae439895", "ae439895", 38)
    },
    {
      id: "rw-fs-83617355",
      sourceQuestionId: "83617355",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Each night in Gijón, Spain, a section of the city’s marina is bathed in a soft green glow. The source of the glow is the Árbol de la Sidra, a large sculpture made up of 3,200 recycled glass bottles. A lamp inside the tree-shaped structure ______ the green glass.</p>",
      stem: STEM,
      options: ["will be illuminating", "illuminates", "would illuminate", "illuminated"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the present tense verb \"illuminates\" is consistent with the other present tense verb (\"is\") used to describe the sculpture, correctly indicating that the sculpture habitually glows (\"each night\") and that the lamp inside is the source of its illumination."),
      distractors: {
        A: L("Choice A is incorrect because the future progressive tense verb \"will be illuminating\" isn’t consistent with the other present tense verb used to describe the sculpture and the source of its glow."),
        C: L("Choice C is incorrect because the modal \"would,\" which is used to indicate a typical behavior in the past, isn’t consistent with the other present tense verb used to describe the sculpture and the source of its glow."),
        D: L("Choice D is incorrect because the past tense verb \"illuminated\" isn’t consistent with the other present tense verb used to describe the sculpture and the source of its glow.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-83617355", "83617355", 39)
    },
    {
      id: "rw-fs-16740ab4",
      sourceQuestionId: "16740ab4",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>At the Chicxulub asteroid impact crater in Mexico, the presence of many fossilized microbacteria, which seem to have thrived there despite the extreme heat that persisted after the Chicxulub impact, ______ claims that bacteria are among the planet’s most resilient organisms.</p>",
      stem: STEM,
      options: ["have reinforced", "reinforces", "are reinforcing", "reinforce"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The singular verb “reinforces” agrees in number with the singular subject “the presence.”"),
      distractors: {
        A: L("Choice A is incorrect because the plural verb “have reinforced” doesn’t agree in number with the singular subject “the presence.”"),
        C: L("Choice C is incorrect because the plural verb “are reinforcing” doesn’t agree in number with the singular subject “the presence.”"),
        D: L("Choice D is incorrect because the plural verb “reinforce” doesn’t agree in number with the singular subject “the presence.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-16740ab4", "16740ab4", 40)
    },
    {
      id: "rw-fs-f0864217",
      sourceQuestionId: "f0864217",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Rabinal Achí is a precolonial Maya dance drama performed annually in Rabinal, a town in the Guatemalan highlands. Based on events that occurred when Rabinal was a city-state ruled by a king, ______ had once been an ally of the king but was later captured while leading an invading force against him.</p>",
      stem: STEM,
      options: ["Rabinal Achí tells the story of K’iche’ Achí, a military leader who", "K’iche’ Achí, the military leader in the story of Rabinal Achí,", "the military leader whose story is told in Rabinal Achí, K’iche’ Achí,", "there was a military leader, K’iche’ Achí, who in Rabinal Achí"],
      answer: "A",
      explanation: L("Choice A is the best answer. The modifier “Based on events…by a king,” is describing the drama “Rabinal Achí.” Modifiers need to be next to the subjects they describe, so “Rabinal Achí” needs to be the first word after the comma."),
      distractors: {
        B: L("Choice B is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. The modifier “Based on events…by a king,” is describing the drama “Rabinal Achí.” Modifiers need to be next to the subjects they describe, so “Rabinal Achí” needs to be the first word after the comma."),
        C: L("Choice C is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. The modifier “Based on events…by a king,” is describing the drama “Rabinal Achí.” Modifiers need to be next to the subjects they describe, so “Rabinal Achí” needs to be the first word after the comma."),
        D: L("Choice D is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. The modifier “Based on events…by a king,” is describing the drama “Rabinal Achí.” Modifiers need to be next to the subjects they describe, so “Rabinal Achí” needs to be the first word after the comma.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f0864217", "f0864217", 42)
    },
    {
      id: "rw-fs-c91ef0f0",
      sourceQuestionId: "c91ef0f0",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>During the American Civil War, Thomas Morris Chester braved the front lines as a war correspondent for the Philadelphia Press. Amplifying the voices and experiences of Black soldiers ______ of particular importance to Chester, who later became an activist and lawyer during the postwar Reconstruction period.</p>",
      stem: STEM,
      options: ["were", "have been", "are", "was"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"was\" agrees in number with the singular subject \"amplifying.\" Gerunds such as \"amplifying\" are always singular."),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"amplifying.\""),
        B: L("Choice B is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"amplifying.\""),
        C: L("Choice C is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"amplifying.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c91ef0f0", "c91ef0f0", 43)
    },
    {
      id: "rw-fs-7b419faf",
      sourceQuestionId: "7b419faf",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1903, environmentalist John Muir guided President Theodore Roosevelt on a scenic, sprawling trip through California’s Yosemite Valley. Upon returning from the three-day excursion, Roosevelt ______ to conserve the nation’s wilderness areas, a vow he upheld for his remaining six years in office.</p>",
      stem: STEM,
      options: ["is vowing", "vowed", "will vow", "vows"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the past tense verb “vowed” is consistent with the other past tense verbs (“guided” and “upheld”) used to narrate the events surrounding President Roosevelt’s decision to conserve the nation’s wilderness areas."),
      distractors: {
        A: L("Choice A is incorrect because the present progressive tense verb “is vowing” isn’t consistent with the past tense verbs used to narrate the events surrounding President Roosevelt’s decision to conserve the nation’s wilderness areas."),
        C: L("Choice C is incorrect because the future tense verb “will vow” isn’t consistent with the past tense verbs used to narrate the events surrounding President Roosevelt’s decision to conserve the nation’s wilderness areas."),
        D: L("Choice D is incorrect because the simple present tense verb “vows” isn’t consistent with the past tense verbs used to narrate the events surrounding President Roosevelt’s decision to conserve the nation’s wilderness areas.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-7b419faf", "7b419faf", 44)
    },
    {
      id: "rw-fs-29c9be28",
      sourceQuestionId: "29c9be28",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>To survive when water is scarce, embryos inside African turquoise killifish eggs ______ a dormant state known as diapause. In this state, embryonic development is paused for as long as two years—longer than the life span of an adult killifish.</p>",
      stem: STEM,
      options: ["enter", "to enter", "having entered", "entering"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is finite and nonfinite verb forms within a sentence. A main clause requires a finite verb to perform the action of the subject (in this case, “embryos”), and this choice supplies the clause with the finite present tense verb “enter” to indicate how the embryos achieve diapause."),
      distractors: {
        B: L("Choice B is incorrect because the nonfinite to-infinitive “to enter” doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because the nonfinite participle “having entered” doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because the nonfinite participle “entering” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-29c9be28", "29c9be28", 45)
    },
    {
      id: "rw-fs-983d33fa",
      sourceQuestionId: "983d33fa",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1637, the price of tulips skyrocketed in Amsterdam, with single bulbs of rare varieties selling for up to the equivalent of $200,000 in today’s US dollars. Some historians ______ that this “tulip mania” was the first historical instance of an asset bubble, which occurs when investors drive prices to highs not supported by actual demand.</p>",
      stem: STEM,
      options: ["claiming", "claim", "having claimed", "to claim"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of finite and nonfinite verb forms within a sentence. A main clause requires a finite verb to perform the action of the subject (in this case, “some historians”), and this choice supplies the finite present tense verb “claim” to indicate what some historians do."),
      distractors: {
        A: L("Choice A is incorrect because the nonfinite participle “claiming” doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because the nonfinite participle “having claimed” doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because the nonfinite to-infinitive “to claim” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-983d33fa", "983d33fa", 46)
    },
    {
      id: "rw-fs-6e193b19",
      sourceQuestionId: "6e193b19",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Professional American football player Fred Cox invented one of the world’s most popular toys. In the 1970s, he came up with the idea for the Nerf football, which ______ of the harder and heavier regulation football.</p>",
      stem: STEM,
      options: ["were a smaller, foam version", "are smaller, foam versions", "were smaller, foam versions", "is a smaller, foam version"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement and agreement between nouns. The singular verb “is” and the singular noun “version” both agree in number with the relative pronoun “which.” In this context, “which” functions as a singular subject because it refers to the singular noun “the Nerf football.”"),
      distractors: {
        A: L("Choice A is incorrect because the plural verb “were” doesn’t agree in number with the singular noun phrase “the Nerf football” that it’s modifying."),
        B: L("Choice B is incorrect because the plural verb “are” and the plural noun “versions” don’t agree in number with the singular noun phrase “the Nerf football” that they’re modifying."),
        C: L("Choice C is incorrect because the plural verb “were” and the plural noun “versions” don’t agree in number with the singular noun phrase “the Nerf football” that they’re modifying.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-6e193b19", "6e193b19", 47)
    },
    {
      id: "rw-fs-fced396a",
      sourceQuestionId: "fced396a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The Herfindahl-Hirschman Index (HHI), a commonly used measure of competition between companies in a particular market, ranges from a score of zero to 10,000 points. Compared with that of a highly concentrated market—that is, a market controlled by very few companies—______</p>",
      stem: STEM,
      options: ["a market that is less concentrated will have a much lower HHI score.", "the HHI score of a less concentrated market will be much lower.", "when a market is less concentrated, its HHI score will be much lower.", "a less concentrated market will have an HHI score that is much lower."],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase \"the HHI...market\" the subject of the sentence and places it immediately after the modifying phrase \"compared...market.\" In doing so, this choice clearly establishes that the HHI score of a less concentrated market—and not another noun in the sentence—is being compared with the HHI score of a highly concentrated market."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of \"a market that is less concentrated\" immediately after the modifying phrase illogically suggests that a market is being compared with an HHI score."),
        C: L("Choice C is incorrect because it results in a confusing, illogical sentence. The placement of the modifier \"when a market is less concentrated\" after \"a highly concentrated market\" is contradictory. Furthermore, it’s ambiguous what \"its\" is referring to in \"its HHI score,\" resulting in an illogical comparison."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of \"a less concentrated market\" immediately after the modifying phrase illogically suggests that a market is being compared with an HHI score.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-fced396a", "fced396a", 48)
    },
    {
      id: "rw-fs-e6f2dba6",
      sourceQuestionId: "e6f2dba6",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>According to the traditional RYB (red-yellow-blue) color model, yellow is a complementary color to purple. However, yellow ______ considered complementary to blue in modern color theory.</p>",
      stem: STEM,
      options: ["is", "having been", "to be", "being"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject (in this case, \"yellow\"), and this choice supplies the present tense verb \"is considered\" to indicate that yellow is considered a complementary color to blue in modern color theory."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"having been considered\" doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to be considered\" doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"being considered\" doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e6f2dba6", "e6f2dba6", 49)
    },
    {
      id: "rw-fs-52b61716",
      sourceQuestionId: "52b61716",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Formed in 1967 to foster political and economic stability within the Asia-Pacific region, the Association of Southeast Asian Nations was originally made up of five members: Thailand, the Philippines, Singapore, Malaysia, and Indonesia. By the end of the 1990s, the organization ______ its initial membership.</p>",
      stem: STEM,
      options: ["has doubled", "had doubled", "doubles", "will double"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the past perfect verb “had doubled” properly indicates that the doubling of the organization’s initial membership occurred during a specific period before the present (between the organization’s founding in 1967 and the end of the 1990s)."),
      distractors: {
        A: L("Choice A is incorrect because the present perfect verb “has doubled” doesn’t indicate that the organization’s doubling of its initial membership occurred during a specific period in the past."),
        C: L("Choice C is incorrect because the present tense verb “doubles” doesn’t indicate that the organization’s doubling of its initial membership occurred during a specific period in the past."),
        D: L("Choice D is incorrect because the future tense verb “will double” doesn’t indicate that the organization’s doubling of its initial membership occurred during a specific period in the past.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-52b61716", "52b61716", 50)
    },
    {
      id: "rw-fs-96c720af",
      sourceQuestionId: "96c720af",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Atoms in a synchrotron, a type of circular particle accelerator, travel faster and faster until they ______ a desired energy level, at which point they are diverted to collide with a target, smashing the atoms.</p>",
      stem: STEM,
      options: ["will reach", "reach", "had reached", "are reaching"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the present tense verb “reach” is consistent with the present tense verbs “travel” and “are diverted” used to describe how atoms move through the synchrotron."),
      distractors: {
        A: L("Choice A is incorrect because the future tense verb “will reach” is inconsistent with the present tense verbs used to describe how atoms move through the synchrotron. Though the atoms’ movement is a recurring action and “will reach” can also be used to indicate a habitual or recurring action, it creates a logical inconsistency in this sentence when paired with the present tense verbs “travel” and “are diverted.”"),
        C: L("Choice C is incorrect because the past perfect tense verb “had reached” is inconsistent with the present tense verbs used to describe how atoms move through the synchrotron."),
        D: L("Choice D is incorrect because the present progressive tense verb “are reaching” is inconsistent with the present tense verbs used to describe how atoms move through the synchrotron. While both verbs occur in the present, the present progressive tense suggests that the action is currently in progress. This creates a logical inconsistency when paired with the present tense verbs “travel” and “are diverted,” which offer a general description of the tendencies of the atoms’ movement, rather than a description of an action that is currently in progress.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-96c720af", "96c720af", 52)
    },
    {
      id: "rw-fs-dbd78791",
      sourceQuestionId: "dbd78791",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Led by Syrian American astronomer Shadia Habbal, the Solar Wind Sherpas are an intrepid team of scientists who travel the globe to study solar winds, the streams of particles emanating from the Sun that are only visible from certain locations during a total solar eclipse. When such an eclipse is imminent, the Sherpas pack up their telescopes and ______ ready.</p>",
      stem: STEM,
      options: ["get", "had gotten", "got", "were getting"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the present tense verb “get” is consistent with the other present tense verbs (“are,” “travel,” and “pack”) used to describe the Sherpas and their activities."),
      distractors: {
        B: L("Choice B is incorrect. The past perfect verb “had gotten” isn’t consistent with the other present tense verbs used to describe the Sherpas and their activities."),
        C: L("Choice C is incorrect. The past tense verb “got” isn’t consistent with the other present tense verbs used to describe the Sherpas and their activities."),
        D: L("Choice D is incorrect. The past progressive verb “were getting” isn’t consistent with the other present tense verbs used to describe the Sherpas and their activities.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-dbd78791", "dbd78791", 53)
    },
    {
      id: "rw-fs-819c443d",
      sourceQuestionId: "819c443d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In January 1776, Thomas Paine published Common Sense, an appeal for freedom from the British monarchy that famously helped ignite the desire for independence among the American colonists. After the colonies achieved their independence, Paine moved to Paris, where the provocative ______ would contribute to another revolution—the French Revolution.</p>",
      stem: STEM,
      options: ["authors political writings", "author’s political writings", "author’s political writing’s", "authors’ political writings’"],
      answer: "B",
      explanation: L("Choice B is the best answer. The conventions being tested are the use of plural and possessive nouns. The singular possessive noun \"author’s\" correctly indicates that the political writings are those of Thomas Paine, and the plural noun \"writings\" correctly indicates that multiple works by Paine are being discussed."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the singular possessive noun \"author’s,\" not the plural noun \"authors.\""),
        C: L("Choice C is incorrect because the context requires the plural noun \"writings,\" not the singular possessive noun \"writing’s.\""),
        D: L("Choice D is incorrect because the context requires the singular possessive noun \"author’s\" and the plural noun \"writings,\" not the plural possessive nouns \"authors’\" and \"writings’.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-819c443d", "819c443d", 54)
    },
    {
      id: "rw-fs-100269ad",
      sourceQuestionId: "100269ad",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Zydeco music originated in the French Creole community of southwest Louisiana. One instrument that gives zydeco its unique sound is the vest frottoir. The vest frottoir ______ a wearable washboard that is played by rubbing spoons or bottle openers against it.</p>",
      stem: STEM,
      options: ["have been", "is", "were", "are"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The singular verb \"is\" agrees in number with the singular subject \"vest frottoir.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"vest frottoir.\""),
        C: L("Choice C is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"vest frottoir.\""),
        D: L("Choice D is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"vest frottoir.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-100269ad", "100269ad", 55)
    },
    {
      id: "rw-fs-674e59a3",
      sourceQuestionId: "674e59a3",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Following her debut album release in 2002, Mexican singer-songwriter Natalia Lafourcade quickly shot to fame. By 2023, she ______ one of the most celebrated musicians in Latin America, having released twelve albums and won seventeen Latin Grammy awards—more than any other female artist in history.</p>",
      stem: STEM,
      options: ["will become", "becomes", "will have become", "had become"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense in a sentence. The past perfect tense indicates an action that was completed before another past action. In this choice, the past perfect verb “had become,” together with the supplemental phrase “by 2023,” indicates that Lafourcade earned her status as one of the most celebrated musicians in Latin America before 2023."),
      distractors: {
        A: L("Choice A is incorrect because the future tense “will become” doesn’t indicate that Lafourcade earned her celebrated status before 2023."),
        B: L("Choice B is incorrect because the present tense “becomes” doesn’t indicate that Lafourcade earned her celebrated status before 2023."),
        C: L("Choice C is incorrect because the future perfect tense “will have become” doesn’t indicate that Lafourcade earned her celebrated status by 2023.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-674e59a3", "674e59a3", 56)
    },
    {
      id: "rw-fs-0aebdf5f",
      sourceQuestionId: "0aebdf5f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>According to linguist Martin Joos, speakers of the English language ______ five main registers—frozen, formal, consultative, casual, and intimate —which they rotate between depending on the situation.</p>",
      stem: STEM,
      options: ["use", "is using", "uses", "has used"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The plural verb \"use\" agrees in number with the plural subject \"speakers.\""),
      distractors: {
        B: L("Choice B is incorrect because the singular verb \"is using\" doesn’t agree in number with the plural subject \"speakers.\""),
        C: L("Choice C is incorrect because the singular verb \"uses\" doesn’t agree in number with the plural subject \"speakers.\""),
        D: L("Choice D is incorrect because the singular verb \"has used\" doesn’t agree in number with the plural subject \"speakers.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-0aebdf5f", "0aebdf5f", 57)
    },
    {
      id: "rw-fs-f10b7ce4",
      sourceQuestionId: "f10b7ce4",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In the list “Adorable Things” from Sei Shōnagon’s Pillow Book, the author delights in baby sparrows, a face drawn on a melon, and a young courtier in ceremonial garb. So shrewd an observer is Shōnagon, a lady-in-waiting to Empress Teishi, that her book’s musings on tenth-century Japanese courtly life ______ readers a thousand years later.</p>",
      stem: STEM,
      options: ["fascinate", "has fascinated", "fascinates", "is fascinating"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The plural verb \"fascinate\" agrees in number with the plural subject \"musings.\""),
      distractors: {
        B: L("Choice B is incorrect because the singular verb \"has fascinated\" doesn’t agree in number with the plural subject \"musings.\""),
        C: L("Choice C is incorrect because the singular verb \"fascinates\" doesn’t agree in number with the plural subject \"musings.\""),
        D: L("Choice D is incorrect because the singular verb \"is fascinating\" doesn’t agree in number with the plural subject \"musings.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f10b7ce4", "f10b7ce4", 58)
    },
    {
      id: "rw-fs-4aa28ac3",
      sourceQuestionId: "4aa28ac3",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Nowadays, tug-of-war is usually seen as an informal game one might play at a picnic or in gym class. Surprisingly, the Olympic committee once decided ______ tug-of-war as an official Olympic event! Nations competed in the event at the Olympic Games from 1900 to 1920.</p>",
      stem: STEM,
      options: ["included", "including", "include", "to include"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite to-infinitive verb \"to include\" is correctly used to form a subordinate clause that indicates what the Olympic committee decided (to include tug-of-war as an Olympic event)."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The finite verb \"included\" can’t be used in this way to form a subordinate clause that indicates what the Olympic committee decided."),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"including\" can’t be used in this way to form a subordinate clause that indicates what the Olympic committee decided."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The finite verb \"include\" can’t be used in this way to form a subordinate clause that indicates what the Olympic committee decided.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4aa28ac3", "4aa28ac3", 65)
    },
    {
      id: "rw-fs-8df848c1",
      sourceQuestionId: "8df848c1",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When they were first introduced to western Europe from Byzantium in the eleventh century, table forks were met with much resistance. The Bishop of Ostia, St. Peter Damian, condemned the eating utensils because he considered ______ dangerous and unnecessary luxury items.</p>",
      stem: STEM,
      options: ["them", "this", "that", "it"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is pronoun-antecedent agreement. The plural pronoun \"them\" agrees in number with the plural antecedent \"utensils.\""),
      distractors: {
        B: L("Choice B is incorrect because the singular pronoun \"this\" doesn’t agree in number with the plural antecedent \"utensils.\""),
        C: L("Choice C is incorrect because the singular pronoun \"that\" doesn’t agree in number with the plural antecedent \"utensils.\""),
        D: L("Choice D is incorrect because the singular pronoun \"it\" doesn’t agree in number with the plural antecedent \"utensils.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-8df848c1", "8df848c1", 67)
    },
    {
      id: "rw-fs-77bf77cd",
      sourceQuestionId: "77bf77cd",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Farouk El-Baz, a geologist and space scientist, ______ part of the team that selected the lunar landing sites for the Apollo program during the 1960s and 1970s.</p>",
      stem: STEM,
      options: ["are", "was", "have been", "were"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The singular verb \"was\" agrees in number with the singular subject \"Farouk El-Baz.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"Farouk El-Baz.\""),
        C: L("Choice C is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"Farouk El-Baz.\""),
        D: L("Choice D is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"Farouk El-Baz.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-77bf77cd", "77bf77cd", 68)
    },
    {
      id: "rw-fs-74253458",
      sourceQuestionId: "74253458",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Cycads are palmlike plants with cones. ______ plants were abundant throughout the Mesozoic Era (66 to 252 million years ago).</p>",
      stem: STEM,
      options: ["These", "That", "Each", "This"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of determiners. The plural demonstrative determiner “these” agrees in number with the plural noun “plants” that it modifies. This choice clearly indicates that the plants, referring to cycads from the previous sentence, were abundant throughout the Mesozoic Era."),
      distractors: {
        B: L("Choice B is incorrect because the singular demonstrative determiner “that” doesn’t agree in number with the plural noun “plants.”"),
        C: L("Choice C is incorrect because the singular determiner “each” doesn’t agree in number with the plural noun “plants.”"),
        D: L("Choice D is incorrect because the singular demonstrative determiner “this” doesn’t agree in number with the plural noun “plants.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-74253458", "74253458", 69)
    },
    {
      id: "rw-fs-ea0aa676",
      sourceQuestionId: "ea0aa676",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In the 1970s, Janaki Ammal, a prominent botanist, emerged as a powerful voice in India’s environmental conservation movement. Her exhaustive chromosomal survey of plants in Silent Valley, a pristine tropical forest in Kerala, India, that is home to nearly 1,000 species of native flora (many of which are endangered), ______ instrumental in the government’s decision to preserve the forest.</p>",
      stem: STEM,
      options: ["are", "were", "have been", "was"],
      answer: "D",
      explanation: L("Choice D is the best answer. The subject \"survey\" is singular, and so is the verb \"was.\""),
      distractors: {
        A: L("Choice A is incorrect. The subject \"survey\" is singular, but the verb \"are\" is plural."),
        B: L("Choice B is incorrect. The subject \"survey\" is singular, but the verb \"were\" is plural."),
        C: L("Choice C is incorrect. The subject \"survey\" is singular, but the verb \"have been\" is plural.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-ea0aa676", "ea0aa676", 72)
    },
    {
      id: "rw-fs-353890a1",
      sourceQuestionId: "353890a1",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Water is constantly moving and changing forms on Earth and in the atmosphere. This process is called the water cycle, and it is typically thought to consist of evaporation, condensation, and precipitation. However, the National Oceanic and Atmospheric Administration seeks ______ understanding of the water cycle to include transpiration, sublimation, and other types of water movement.</p>",
      stem: STEM,
      options: ["is expanding", "to expand", "has expanded", "expands"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite to-infinitive verb “to expand” is correctly used to form a subordinate clause that indicates what the National Oceanic and Atmospheric Administration seeks to do."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The finite verb “is expanding” can’t be used in this way to form a subordinate clause that indicates what the National Oceanic and Atmospheric Administration seeks to do."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The finite verb “has expanded” can’t be used in this way to form a subordinate clause that indicates what the National Oceanic and Atmospheric Administration seeks to do."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite verb “expands” can’t be used in this way to form a subordinate clause that indicates what the National Oceanic and Atmospheric Administration seeks to do.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-353890a1", "353890a1", 73)
    },
    {
      id: "rw-fs-ee4aa2aa",
      sourceQuestionId: "ee4aa2aa",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>During a 2022 expedition led by research zoologist Andrea Quattrini, scientists discovered a new species of black coral off the coast of Puerto Rico. Like other black corals, the newly discovered species, which they named Aphanipathes puertoricoensis, has coiled branching structures that ______ it survive in the deep sea.</p>",
      stem: STEM,
      options: ["has helped", "helps", "helping", "help"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms within a sentence. The plural verb “help” provides the relative clause beginning with “that” with a finite verb and agrees in number with the plural subject “coiled branching structures.”"),
      distractors: {
        A: L("Choice A is incorrect because the singular verb “has helped” doesn’t agree in number with the plural subject “coiled branching structures.”"),
        B: L("Choice B is incorrect because the singular verb “helps” doesn’t agree in number with the plural subject “coiled branching structures.”"),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite participle “helping” doesn’t supply a finite verb to the relative clause beginning with “that.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-ee4aa2aa", "ee4aa2aa", 75)
    },
    {
      id: "rw-fs-57998dd3",
      sourceQuestionId: "57998dd3",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Obsidian is a kind of volcanic glass formed when lava cools so quickly that the atoms inside it cannot arrange themselves in a crystalline structure. You ______ more about obsidian’s structure, which is classified as amorphous, in a later chapter.</p>",
      stem: STEM,
      options: ["had learned", "had been learning", "will learn", "have learned"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the future tense verb “will learn,” used in conjunction with the phrase “in a later chapter,” correctly indicates that “you” (the reader) are going to learn about obsidian’s structure at some point in the future."),
      distractors: {
        A: L("Choice A is incorrect because the past perfect verb “had learned” doesn’t indicate that the subject is going to learn about obsidian’s structure in the future."),
        B: L("Choice B is incorrect because the past perfect progressive verb “had been learning” doesn’t indicate that the subject is going to learn about obsidian’s structure in the future."),
        D: L("Choice D is incorrect because the present perfect verb “have learned” doesn’t indicate that the subject is going to learn about obsidian’s structure in the future.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-57998dd3", "57998dd3", 78)
    },
    {
      id: "rw-fs-dc645172",
      sourceQuestionId: "dc645172",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The artistic talents of Barbara Chase-Riboud, most known for her 1979 historical novel Sally Hemings and the conversation it inspired, ______ limited to the realm of prose: she first excelled in sculpture, where her affinity for bronze—a material she described as “timeless” due to its use across eras and cultures—became part of her artistic identity.</p>",
      stem: STEM,
      options: ["hasn’t been", "wasn’t", "isn’t", "aren’t"],
      answer: "D",
      explanation: L("Choice D is the best answer. The subject \"talents\" is plural, and so is the verb \"aren’t\": \"the artistic talents…aren’t limited.\""),
      distractors: {
        A: L("Choice A is incorrect. The subject \"talents\" is plural, but the verb \"hasn’t been\" is singular."),
        B: L("Choice B is incorrect. The subject \"talents\" is plural, but the verb \"wasn’t\" is singular."),
        C: L("Choice C is incorrect. The subject \"talents\" is plural, but the verb \"isn’t\" is singular.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-dc645172", "dc645172", 79)
    },
    {
      id: "rw-fs-166efaa2",
      sourceQuestionId: "166efaa2",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Public-awareness campaigns about the need to reduce single-use plastics can be successful, says researcher Kim Borg of Monash University in Australia, when these campaigns give consumers a choice: for example, Japan achieved a 40 percent reduction in plastic-bag use after cashiers were instructed to ask customers whether ______ wanted a bag.</p>",
      stem: STEM,
      options: ["they", "one", "you", "it"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is pronoun–antecedent agreement. The plural pronoun “they” agrees in number with the plural antecedent “customers.”"),
      distractors: {
        B: L("Choice B is incorrect because the singular pronoun “one” doesn’t agree in number with the plural antecedent “customers.”"),
        C: L("Choice C is incorrect because the second person pronoun “you” isn’t conventional as a substitute for “customers.” It suggests that the audience (“you”) is the customer."),
        D: L("Choice D is incorrect because the singular pronoun “it” doesn’t agree in number with the plural antecedent “customers.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-166efaa2", "166efaa2", 82)
    },
    {
      id: "rw-fs-e060dd6b",
      sourceQuestionId: "e060dd6b",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Recordings of electrical activity in the brain, ______ increased activity in brain areas associated with suppressing motor functions.</p>",
      stem: STEM,
      options: ["electrograms show that while responding to hypothetical match scenarios, the most highly skilled soccer players have", "the most highly skilled soccer players responding to hypothetical match scenarios have electrograms that show", "responses to hypothetical match scenarios show that the most highly skilled soccer players have electrograms with", "hypothetical match scenario responses show that the most highly skilled soccer players captured in electrograms have"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun “electrograms” the subject of the sentence and places it immediately after the modifying phrase “recordings of electrical activity in the brain.” In doing so, this choice clearly establishes that electrograms—and not other nouns or noun phrases in the sentence—are recordings of electrical activity in the brain."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase “the most highly skilled soccer players” immediately after the modifying phrase illogically suggests that the players are recordings of electrical activity in the brain."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “responses to hypothetical match scenarios” immediately after the modifying phrase illogically suggests that these responses are recordings of electrical activity in the brain."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase “hypothetical match scenario responses” immediately after the opening phrase illogically suggests that these responses are recordings of electrical activity in the brain.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e060dd6b", "e060dd6b", 85)
    },
    {
      id: "rw-fs-35ae047d",
      sourceQuestionId: "35ae047d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1929, Edwin Herbert Land invented a polarizing filter that was featured in a number of products, from sunglasses to 3D movies. A decade later, Land ______ his technology to invent the world’s first instant camera, the Polaroid Land camera.</p>",
      stem: STEM,
      options: ["used", "to have used", "to use", "using"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject (in this case, Land), and this choice supplies the finite past tense verb \"used\" to indicate what Land did with the technology he had invented."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite perfect infinitive \"to have used\" doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to use\" doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"using\" doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-35ae047d", "35ae047d", 86)
    },
    {
      id: "rw-fs-9eb43963",
      sourceQuestionId: "9eb43963",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Water in the North Atlantic Ocean is pushed eastward by powerful winds, but the rotation of Earth and interference from nearby landmasses together cause ______ to swirl into a massive, churning whirlpool—also called the North Atlantic Gyre—that spins clockwise.</p>",
      stem: STEM,
      options: ["these", "those", "them", "it"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun \"it\" agrees in number with the singular antecedent \"water\" and clearly indicates that the water swirls into a whirlpool."),
      distractors: {
        A: L("Choice A is incorrect. The plural pronoun \"these\" neither agrees in number with the singular antecedent \"water\" nor clearly indicates that the water—not another plural noun in the sentence, such as \"landmasses\" or \"winds\"—swirls into a whirlpool."),
        B: L("Choice B is incorrect. The plural pronoun \"those\" neither agrees in number with the singular antecedent \"water\" nor clearly indicates that the water—not another plural noun in the sentence, such as \"landmasses\" or \"winds\"—swirls into a whirlpool."),
        C: L("Choice C is incorrect. The plural pronoun \"them\" neither agrees in number with the singular antecedent \"water\" nor clearly indicates that the water—not another plural noun in the sentence, such as \"landmasses\" or \"winds\"—swirls into a whirlpool.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-9eb43963", "9eb43963", 87)
    },
    {
      id: "rw-fs-eeb14722",
      sourceQuestionId: "eeb14722",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The soundtrack to Mira Nair’s 1991 film Mississippi Masala expressively captures the clashing of cultures that happens when ______ (a young Indian woman from Uganda and a young African American man from Mississippi) meet. Featured throughout the film are songs from Uganda’s Afrigo Band, the Indian composer L. Subramaniam, and the Mississippi blues musician Sam Chatmon.</p>",
      stem: STEM,
      options: ["it’s two protagonists", "its two protagonist’s", "it’s two protagonist’s", "its two protagonists"],
      answer: "D",
      explanation: L("Choice D is the best answer. The conventions being tested are the use of possessive determiners and the use of plural nouns. The singular possessive determiner \"its\"—which agrees in number with the singular noun phrase \"Mira Nair’s 1991 film Mississippi Masala\"—and the plural noun \"protagonists\" correctly indicate that Nair’s film has multiple protagonists."),
      distractors: {
        A: L("Choice A is incorrect because \"it’s\" is the contraction for \"it is,\" not a possessive determiner."),
        B: L("Choice B is incorrect because the context requires the plural noun \"protagonists,\" not the singular possessive noun \"protagonist’s.\""),
        C: L("Choice C is incorrect because the context requires the possessive determiner \"its\" and the plural noun \"protagonists,\" not the contraction \"it’s\" or the singular possessive noun \"protagonist’s.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-eeb14722", "eeb14722", 89)
    },
    {
      id: "rw-fs-db4e3819",
      sourceQuestionId: "db4e3819",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Midway through her 1968 jazz album A Monastic Trio, Alice Coltrane switches instruments, swapping the piano for the harp. With the same fluid style that Coltrane was famous for on piano, she ______ her fingers across the harp strings and creates a radiant sound.</p>",
      stem: STEM,
      options: ["sweep", "are sweeping", "were sweeping", "sweeps"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"sweeps\" agrees in number with the singular subject \"she,\" which refers to Alice Coltrane."),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"sweep\" doesn’t agree in number with the singular subject \"she.\""),
        B: L("Choice B is incorrect because the plural verb \"are sweeping\" doesn’t agree in number with the singular subject \"she.\""),
        C: L("Choice C is incorrect because the plural verb \"were sweeping\" doesn’t agree in number with the singular subject \"she.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-db4e3819", "db4e3819", 91)
    },
    {
      id: "rw-fs-20ea68b7",
      sourceQuestionId: "20ea68b7",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>It can take time for proposed amendments to the US Constitution to become law. For example, the Twenty-Second Amendment, which limits the number of ______ can serve, was first proposed in 1947 but wasn’t approved by the required three-fourths majority of state legislatures until 1951.</p>",
      stem: STEM,
      options: ["terms presidents", "term’s presidents", "term’s president’s", "terms president’s"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of plural nouns. The plural nouns \"terms\" and \"presidents\" correctly indicate that the amendment involves multiple terms and applies to presidents in general."),
      distractors: {
        B: L("Choice B is incorrect because the context requires the plural noun \"terms,\" not the singular possessive noun \"term’s.\""),
        C: L("Choice C is incorrect because the context requires the plural nouns \"terms\" and \"presidents,\" not the singular possessive nouns \"term’s\" and \"president’s.\""),
        D: L("Choice D is incorrect because the context requires the plural noun \"presidents,\" not the singular possessive noun \"president’s.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-20ea68b7", "20ea68b7", 92)
    },
    {
      id: "rw-fs-512f0ac9",
      sourceQuestionId: "512f0ac9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Working from an earlier discovery of Charpentier’s, chemists Emmanuelle Charpentier and Jennifer Doudna—winners of the 2020 Nobel Prize in Chemistry—re-created and then reprogrammed the so-called “genetic scissors” of a species of DNA-cleaving bacteria ______ a tool that is revolutionizing the field of gene technology.</p>",
      stem: STEM,
      options: ["to forge", "forging", "forged", "and forging"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of finite and nonfinite verb forms within a sentence. The nonfinite to-infinitive “to forge” is correctly used to form a nonfinite (infinitive) clause that explains why the chemists re-created and reprogrammed the DNA-cleaving bacteria."),
      distractors: {
        B: L("Choice B is incorrect. Without a comma separating the main clause (“chemists...bacteria”) from the participle “forging,” this choice illogically suggests that the bacteria are forging a tool, which doesn’t make sense."),
        C: L("Choice C is incorrect. Without a coordinating conjunction such as “and” placed before it, the finite past tense verb “forged” can’t be used in this way to describe the chemists’ actions."),
        D: L("Choice D is incorrect. If read as a finite verb, the present progressive verb “forging” isn’t consistent with the past tense verbs used in this sentence to describe the actions of the chemists. If read as a nonfinite verb, the participle “forging” can’t be used in this way because there is no following main clause for it to modify.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-512f0ac9", "512f0ac9", 97)
    },
    {
      id: "rw-fs-4320b4ad",
      sourceQuestionId: "4320b4ad",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>For decades after World War II, the women who had worked for the US military as wartime codebreakers ______ their vital efforts a secret.</p>",
      stem: STEM,
      options: ["to keep", "having kept", "keeping", "kept"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject (in this case, “the women”), and this choice supplies the finite past tense verb “kept” to indicate what the women did."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive “to keep” doesn’t supply the main clause with a finite verb."),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite perfect participle “having kept” doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite present participle “keeping” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4320b4ad", "4320b4ad", 98)
    },
    {
      id: "rw-fs-d47bb0a4",
      sourceQuestionId: "d47bb0a4",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Objects ranging from the Kikkoman soy sauce bottle to the Yamaha VMAX motorcycle to the Komachi bullet train ______ designed by twentieth- century industrial designer Kenji Ekuan.</p>",
      stem: STEM,
      options: ["was", "is", "has been", "were"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The plural verb \"were\" agrees in number with the plural subject \"objects.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"was\" doesn’t agree in number with the plural subject \"objects.\""),
        B: L("Choice B is incorrect because the singular verb \"is\" doesn’t agree in number with the plural subject \"objects.\""),
        C: L("Choice C is incorrect because the singular verb \"has been\" doesn’t agree in number with the plural subject \"objects.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-d47bb0a4", "d47bb0a4", 104)
    },
    {
      id: "rw-fs-e3b72630",
      sourceQuestionId: "e3b72630",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the historical novel The Surrender Tree, Cuban American author Margarita Engle uses poetry rather than prose ______ the true story of Cuban folk hero Rosa La Bayamesa.</p>",
      stem: STEM,
      options: ["tells", "told", "is telling", "to tell"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of finite and nonfinite verb forms within a sentence. The nonfinite to-infinitive “to tell” is correctly used to form a nonfinite (infinitive) clause that explains the reason Engle uses poetry in her novel."),
      distractors: {
        A: L("Choice A is incorrect because the finite present tense verb “tells” can’t be used in this way to explain the reason that Engle uses poetry in her novel."),
        B: L("Choice B is incorrect because the finite past tense verb “told” can’t be used in this way to explain the reason that Engle uses poetry in her novel."),
        C: L("Choice C is incorrect because the finite present progressive tense verb “is telling” can’t be used in this way to explain the reason that Engle uses poetry in her novel.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e3b72630", "e3b72630", 105)
    },
    {
      id: "rw-fs-0560b2b8",
      sourceQuestionId: "0560b2b8",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>“What stories like this do for us is make the world just a smidge bigger,” writes Stephen Graham Jones in the foreword to Never Whistle at Night: An Indigenous Dark Fiction Anthology. For Jones, dark fiction does more than entertain readers: ______ horror tropes to challenge familiar ways of knowing, blurring the “borders of the real.”</p>",
      stem: STEM,
      options: ["one uses", "we use", "they use", "it uses"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun “it” agrees in number with the singular antecedent “dark fiction” and clearly indicates that dark fiction uses horror tropes to challenge familiar ways of knowing."),
      distractors: {
        A: L("Choice A is incorrect because the singular pronoun “one” is ambiguous in this context; the resulting sentence leaves unclear who or what uses horror tropes to challenge familiar ways of knowing."),
        B: L("Choice B is incorrect because the first person plural pronoun “we” isn’t conventional as a substitute for “dark fiction.” It suggests that the readers, rather than dark fiction, use horror tropes to challenge familiar ways of knowing."),
        C: L("Choice C is incorrect because the plural pronoun “they” doesn’t agree in number with the singular antecedent “dark fiction.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-0560b2b8", "0560b2b8", 106)
    },
    {
      id: "rw-fs-d2b81427",
      sourceQuestionId: "d2b81427",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In assessing the films of Japanese director Akira Kurosawa, ______ have missed his equally deep engagement with Japanese artistic traditions such as Noh theater.</p>",
      stem: STEM,
      options: ["many critics have focused on Kurosawa’s use of Western literary sources but", "Kurosawa’s use of Western literary sources has been the focus of many critics, who", "there are many critics who have focused on Kurosawa’s use of Western literary sources, but they", "the focus of many critics has been on Kurosawa’s use of Western literary sources; they"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “many critics” the subject of the sentence and places it immediately after the modifying phrase “in assessing…Kurosawa.” In doing so, this choice clearly establishes that it is the critics—and not another noun in the sentence—who assess Kurosawa’s films."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase “Kurosawa’s…sources” immediately after the modifying phrase illogically suggests that his use of Western literary sources is what assesses Kurosawa’s films."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the function word “there” immediately after the modifying phrase illogically suggests that “there” is what assesses Kurosawa’s films."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase “the focus… critics” immediately after the modifying phrase illogically suggests that the critics’ focus is what assesses Kurosawa’s films.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-d2b81427", "d2b81427", 107)
    },
    {
      id: "rw-fs-56315bd0",
      sourceQuestionId: "56315bd0",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Solarpunk is an art movement that imagines renewable energy–powered technology infused complementarily into nature. In Paolo Bacigalupi’s solarpunk short story “Efficiency,” an artificial intelligence that absorbs sustainable energies, redistributing them through intricate networks of weights and generators, ______ Chicago’s energy grid.</p>",
      stem: STEM,
      options: ["have been powering", "power", "powers", "are powering"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-verb agreement. The singular verb \"powers\" agrees in number with the singular subject \"an artificial intelligence.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"have been powering\" doesn’t agree in number with the singular subject \"an artificial intelligence.\""),
        B: L("Choice B is incorrect because the plural verb \"power\" doesn’t agree in number with the singular subject \"an artificial intelligence.\""),
        D: L("Choice D is incorrect because the plural verb \"are powering\" doesn’t agree in number with the singular subject \"an artificial intelligence.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-56315bd0", "56315bd0", 108)
    },
    {
      id: "rw-fs-b74f676f",
      sourceQuestionId: "b74f676f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Classical composer Florence Price’s 1927 move to Chicago marked a turning point in her career. It was there that Price premiered her First Symphony—a piece that was praised for blending traditional Romantic motifs with aspects of Black folk music—and ______ supportive relationships with other Black artists.</p>",
      stem: STEM,
      options: ["developing", "developed", "to develop", "having developed"],
      answer: "B",
      explanation: L("Choice B is the best answer. The missing verb is part of the same clause as the verb \"premiered,\" and \"Price\" is the subject of both. So we need the past-tense form \"developed\" in order to match \"premiered.\""),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a verb form error. The missing verb is part of the same clause as the verb \"premiered,\" and \"Price\" is the subject of both. So we need the past-tense form \"developed\" in order to match \"premiered.\""),
        C: L("Choice C is incorrect. This choice creates a verb form error. The missing verb is part of the same clause as the verb \"premiered,\" and \"Price\" is the subject of both. So we need the past-tense form \"developed\" in order to match \"premiered.\""),
        D: L("Choice D is incorrect. This choice creates a verb form error. The missing verb is part of the same clause as the verb \"premiered,\" and \"Price\" is the subject of both. So we need the past-tense form \"developed\" in order to match \"premiered.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b74f676f", "b74f676f", 113)
    },
    {
      id: "rw-fs-1a61e2ae",
      sourceQuestionId: "1a61e2ae",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>English poet and Shakespeare contemporary John Donne’s ______ much admired during his lifetime (1572–1631) and in the decades that followed, had, at the time of their enthusiastic rediscovery by the early twentieth-century modernists, been essentially gathering dust for the intervening 250 years.</p>",
      stem: STEM,
      options: ["works were", "works, were", "works,", "works had been"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of punctuation and verb forms within a sentence. This choice leaves the verb \"admired\" in its nonfinite past participle form to function within a supplementary element (\"much…followed\"). Offset by commas after \"works\" and \"followed,\" this supplementary element interrupts the main clause (\"English poet and Shakespeare contemporary John Donne’s works…had… been essentially gathering dust…\") with additional information about the works’ reception during Donne’s lifetime."),
      distractors: {
        A: L("Choice A is incorrect because it fails to offset the supplementary element (\"much…followed\") with appropriate punctuation, and using the finite verb \"were much admired\" results in an ungrammatical sentence."),
        B: L("Choice B is incorrect because using the finite verb \"were much admired\" results in an ungrammatical sentence."),
        D: L("Choice D is incorrect because it fails to offset the supplementary element (\"much…followed\") with appropriate punctuation, and using the finite verb \"had been much admired\" results in an ungrammatical sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1a61e2ae", "1a61e2ae", 114)
    },
    {
      id: "rw-fs-2d6f8304",
      sourceQuestionId: "2d6f8304",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 2019, New Zealand produced 88,465 hectograms per hectare (hg/ha) of wheat, and Portugal produced 23,298 hg/ha. This is the type of information on global food production that the United Nations’ Food and Agriculture Organization ______ since 1945.</p>",
      stem: STEM,
      options: ["is collecting", "has collected", "will collect", "collects"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the present perfect tense verb “has collected,” used in conjunction with the phrase “since 1945,” correctly indicates that the Food and Agriculture Organization has collected this type of information in the past and continues to do so in the present."),
      distractors: {
        A: L("Choice A is incorrect because the present progressive tense verb “is collecting” is inconsistent with the phrase “since 1945,” which indicates that the action occurred in the past and continues into the present."),
        C: L("Choice C is incorrect because the future tense verb “will collect” is inconsistent with the phrase “since 1945,” which indicates that the action occurred in the past and continues into the present."),
        D: L("Choice D is incorrect because the present tense verb “collects” is inconsistent with the phrase “since 1945,” which indicates that the action occurred in the past and continues into the present.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2d6f8304", "2d6f8304", 115)
    },
    {
      id: "rw-fs-3a35ddd1",
      sourceQuestionId: "3a35ddd1",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Like other amphibians, the wood frog (Rana sylvatica) is unable to generate its own heat, so during periods of subfreezing temperatures, it ______ by producing large amounts of glucose, a sugar that helps prevent damaging ice from forming inside its cells.</p>",
      stem: STEM,
      options: ["had survived", "survived", "would survive", "survives"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the present tense verb “survives” correctly indicates that the wood frog regularly survives subfreezing temperatures by producing large amounts of glucose."),
      distractors: {
        A: L("Choice A is incorrect because the past perfect verb “had survived” doesn’t indicate that the wood frog regularly survives subfreezing temperatures by producing large amounts of glucose."),
        B: L("Choice B is incorrect because the past tense verb “survived” doesn’t indicate that the wood frog regularly survives subfreezing temperatures by producing large amounts of glucose."),
        C: L("Choice C is incorrect because the conditional verb “would survive” doesn’t indicate that the wood frog regularly survives subfreezing temperatures by producing large amounts of glucose.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-3a35ddd1", "3a35ddd1", 116)
    },
    {
      id: "rw-fs-69f031ab",
      sourceQuestionId: "69f031ab",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>While exploring Nevada’s Gypsum Cave in 1930, Seneca and Abenaki archaeologist Bertha Parker made her most famous discovery: the skull of a now-extinct ground sloth (Nothrotheriops shastensis) alongside human-made tools. Parker’s crucial finding was the first ______ humans in North America as far back as 10,000 years ago.</p>",
      stem: STEM,
      options: ["places", "placed", "place", "to place"],
      answer: "D",
      explanation: L("Choice D is the best answer. The object for the verb \"was\" is \"first,\" and \"to place\" is acting as a modifier for \"first.\" What was the finding? It was \"the first.\" The first to do what? The first \"to place humans in North America\" 10,000 years ago. When a verb serves as a modifier within a noun phrase, it must be nonfinite (i.e., not conjugated to a specific subject). The infinitive form \"to place\" is the only nonfinite option among the choices that makes sense in context."),
      distractors: {
        A: L("Choice A is incorrect. The object for the verb \"was\" is \"first,\" and \"places\" is acting as a modifier for \"first.\" What was the thing that Parker’s finding did? What was it the first to do? Place humans in North America 10,000 years ago. When a verb acts as a modifier, it must be nonfinite (i.e., not conjugated to a specific subject), but \"places\" is a finite form of the verb."),
        B: L("Choice B is incorrect. The object for the verb \"was\" is \"first,\" and \"placed\" is acting to modify \"first.\" What was it that Parker’s finding was the first to do? Place humans in North America 10,000 years ago. When a verb acts as a modifier, it must be nonfinite (i.e., not conjugated to a specific subject), but \"placed\" is a finite form. \"Placed\" can also be a past participle, but that wouldn’t make sense here because the meaning of \"the first placed humans\" would be unclear."),
        C: L("Choice C is incorrect. The object for the verb \"was\" is \"first,\" and \"place\" is modifying \"first.\" What was the thing that Parker’s finding did? What was it the first to do? Place humans in North America. When a verb acts as a modifier, it must be nonfinite (i.e., not conjugated to a specific subject), but \"place\" is a finite form of the verb. Additionally, \"place\" can’t serve as a noun here, because it results in an illogical sentence (the \"finding\" wasn’t \"the first place\").")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-69f031ab", "69f031ab", 117)
    },
    {
      id: "rw-fs-003f22c8",
      sourceQuestionId: "003f22c8",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Every last second of space shuttle mission STS-79, which lasted ten days and three hours, ______ carefully monitored by a team of experts.</p>",
      stem: STEM,
      options: ["have been", "are", "was", "were"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-verb agreement. The singular verb \"was\" agrees in number with the singular subject \"every last second.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"every last second.\""),
        B: L("Choice B is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"every last second.\""),
        D: L("Choice D is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"every last second.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-003f22c8", "003f22c8", 120)
    },
    {
      id: "rw-fs-843f92af",
      sourceQuestionId: "843f92af",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The sun never sets during the Arctic summer in the Far North. In response, reindeer in this region must change their sleep habits. Instead of resting when it gets dark, they rest when they need ______ their food.</p>",
      stem: STEM,
      options: ["digest", "will digest", "to digest", "digesting"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of nonfinite verb forms within a sentence. Working together with the finite verb \"need,\" the nonfinite to-infinitive verb \"to digest\" is correctly used to form a subordinate clause that describes what the reindeer need."),
      distractors: {
        A: L("Choice A is incorrect because the verb \"digest\" (in either its finite or nonfinite form) can’t be used in this way with the finite verb \"need.\""),
        B: L("Choice B is incorrect because the finite verb \"will digest\" can’t be used in this way with the finite verb \"need.\""),
        D: L("Choice D is incorrect because the nonfinite participle \"digesting\" can’t be used in this way with the finite verb \"need.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-843f92af", "843f92af", 124)
    },
    {
      id: "rw-fs-430d929a",
      sourceQuestionId: "430d929a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>British scientists James Watson and Francis Crick won the Nobel Prize in part for their 1953 paper announcing the double helix structure of DNA, but it is misleading to say that Watson and Crick discovered the double helix. ______ findings were based on a famous X-ray image of DNA fibers, “Photo 51,” developed by X-ray crystallographer Rosalind Franklin and her graduate student Raymond Gosling.</p>",
      stem: STEM,
      options: ["They’re", "It’s", "Their", "Its"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of possessive determiners. The plural possessive determiner “their” agrees in number with the plural conjoined noun phrase “Watson and Crick” and thus indicates that the findings were those of Watson and Crick."),
      distractors: {
        A: L("Choice A is incorrect because “they’re” is the contraction for “they are,” not a possessive determiner."),
        B: L("Choice B is incorrect because “it’s” is the contraction for “it is” or “it has,” not a possessive determiner."),
        D: L("Choice D is incorrect because the singular possessive determiner “its” doesn’t agree in number with the plural conjoined noun phrase “Watson and Crick.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-430d929a", "430d929a", 125)
    },
    {
      id: "rw-fs-1684b237",
      sourceQuestionId: "1684b237",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>One of the few African American global explorers during the turn of the 20th century, ______</p>",
      stem: STEM,
      options: ["Matthew Henson made several treks across Greenland between 1891 and 1909.", "1891 and 1909 were the years between which Matthew Henson made several treks across Greenland.", "Greenland was where Matthew Henson made several treks between 1891 and 1909.", "several treks across Greenland were made by Matthew Henson between 1891 and 1909."],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice makes the proper noun \"Matthew Henson\" the subject of the sentence and places it immediately after the modifying phrase \"one…century.\" In doing so, this choice clearly establishes that Matthew Henson—and not another noun in the sentence—is being described as one of the few African American global explorers during the turn of the 20th century."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase \"1891 and 1909\" immediately after the modifying phrase illogically suggests that those years were one of the few African American global explorers during the turn of the 20th century."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the proper noun \"Greenland\" immediately after the modifying phrase illogically suggests that Greenland was one of the few African American global explorers during the turn of the 20th century."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase \"several treks across Greenland\" immediately after the modifying phrase illogically suggests that the treks were one of the few African American global explorers during the turn of the 20th century.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1684b237", "1684b237", 126)
    },
    {
      id: "rw-fs-1f8cd95f",
      sourceQuestionId: "1f8cd95f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In the 1950s, a man named Joseph McVicker was struggling to keep his business afloat when his sister-in-law Kay Zufall advised him to repurpose the company’s product, a nontoxic, clay-like substance for removing soot from wallpaper, as a modeling putty for kids. In addition, Zufall ______ selling the product under a child-friendly name: Play-Doh.</p>",
      stem: STEM,
      options: ["suggested", "suggests", "had suggested", "was suggesting"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the simple past tense verb “suggested” properly indicates that Zufall offered her suggestion for the product’s name in the past. This verb tense is consistent with the previous sentence’s use of a simple past tense verb (“advised”) to describe Zufall’s advice to McVicker in the 1950s."),
      distractors: {
        B: L("Choice B is incorrect because the present tense verb “suggests” doesn’t indicate that Zufall offered her suggestion in the past."),
        C: L("Choice C is incorrect because the past perfect verb “had suggested” isn’t consistent with the previous sentence’s use of the simple past tense verb “advised” to describe Zufall’s advice to McVicker."),
        D: L("Choice D is incorrect because the past progressive verb “was suggesting” isn’t consistent with the previous sentence’s use of the simple past tense verb “advised” to describe Zufall’s advice to McVicker.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1f8cd95f", "1f8cd95f", 128)
    },
    {
      id: "rw-fs-3bceeb93",
      sourceQuestionId: "3bceeb93",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When they were first discovered in Australia in 1798, duck-billed, beaver-tailed platypuses so defied categorization that one scientist assigned them the name Ornithorhynchus paradoxus: “paradoxical bird-snout.”The animal, which lays eggs but also nurses ______ young with milk, has since been classified as belonging to the monotremes group.</p>",
      stem: STEM,
      options: ["they’re", "their", "its", "it’s"],
      answer: "C",
      explanation: L("Choice C is the best answer. The singular possessive pronoun \"its\" agrees with the singular antecedent \"the animal\" and indicates that the \"young\" belong to it."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a pronoun-antecedent agreement error. \"They’re\" is a contraction of \"they are,\" a plural pronoun and verb, but the antecedent \"the animal\" is singular. Also, we don’t need the extra verb \"are\" — we already have a main verb in this clause, so adding \"are\" would be confusing and ungrammatical."),
        B: L("Choice B is incorrect. This choice creates a pronoun-antecedent agreement error. \"Their\" is a plural pronoun, but the subject of the sentence is \"the animal,\" a singular noun."),
        D: L("Choice D is incorrect. This choice creates a confusing and ungrammatical sentence. \"It’s\" is a contraction for \"it is.\" We already have the verb \"nurses\" in this clause, so we shouldn’t add the verb \"is.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-3bceeb93", "3bceeb93", 131)
    },
    {
      id: "rw-fs-dab8b8ee",
      sourceQuestionId: "dab8b8ee",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Known as Earth’s “living skin,” biocrusts are thin layers of soil held together by surface-dwelling microorganisms such as fungi, lichens, and cyanobacteria. Fortifying soil in arid ecosystems against erosion, ______</p>",
      stem: STEM,
      options: ["a recent study’s estimate is that these crusts reduce global dust emissions by 60 percent each year.", "an estimated 60 percent reduction in global dust emissions each year is due to these crusts, according to a recent study.", "these crusts reduce global dust emissions by an estimated 60 percent each year, according to a recent study.", "a recent study has estimated that these crusts reduce global dust emissions by 60 percent each year."],
      answer: "C",
      explanation: L("Choice C is the best answer. The subject of the modifier \"fortifying soil in arid ecosystems against erosion\" is \"biocrusts.\" Subject-modifier placement requires a modifier and its subject to be next to each other, so \"biocrusts\" or some variant meaning \"biocrusts\" (in this case, \"these crusts\") must begin the missing clause."),
      distractors: {
        A: L("Choice A is incorrect. Modifiers and their subjects must go next to each other. The subject of the modifier \"fortifying soil in arid ecosystems against erosion\" is \"biocrusts,\" not \"a recent study’s estimate.\""),
        B: L("Choice B is incorrect. Modifiers and their subjects must go next to each other. The subject of the modifier \"fortifying soil in arid ecosystems against erosion\" is \"biocrusts,\" not \"an estimated 60 percent reduction.\""),
        D: L("Choice D is incorrect. Modifiers and their subjects must go next to each other. The subject of the modifier \"fortifying soil in arid ecosystems against erosion\" is \"biocrusts,\" not \"a recent study.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-dab8b8ee", "dab8b8ee", 136)
    },
    {
      id: "rw-fs-4bed4658",
      sourceQuestionId: "4bed4658",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In order to prevent nonnative fish species from moving freely between the Mediterranean and Red Seas, marine biologist Bella Galil has proposed that a saline lock system be installed along the Suez Canal in Egypt’s Great Bitter Lakes. The lock would increase the salinity of the lakes and ______ a natural barrier of water most marine creatures would be unable to cross.</p>",
      stem: STEM,
      options: ["creates", "create", "creating", "created"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of non-finite (untensed) verb forms in a sentence. The modal “would,” which indicates the future from a perspective in the past, should be accompanied by a non-finite plain form verb. In this choice, the non-finite plain form verb “create” is used correctly in conjunction with the non-finite plain form verb “increase” to describe what the lock would do."),
      distractors: {
        A: L("Choice A is incorrect because the finite present tense verb “creates” can’t be used in this way with the modal “would” to describe what the lock would do."),
        C: L("Choice C is incorrect because the present participle “creating” can’t be used in this way with the modal “would” to describe what the lock would do."),
        D: L("Choice D is incorrect because the finite past tense verb “created” can’t be used in this way with the modal “would” to describe what the lock would do.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4bed4658", "4bed4658", 137)
    },
    {
      id: "rw-fs-acf454af",
      sourceQuestionId: "acf454af",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>An online content creator who uses copyrighted songs without permission risks being demonetized (prohibited from including paid advertisements in content). The best way to avoid demonetization is to choose music from the public domain. Using one of these noncopyrighted songs ______ a creator won’t lose advertising revenue.</p>",
      stem: STEM,
      options: ["are ensuring", "have ensured", "ensure", "ensures"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"ensures\" agrees in number with the singular subject \"using.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are ensuring\" doesn’t agree in number with the singular subject \"using.\""),
        B: L("Choice B is incorrect because the plural verb \"have ensured\" doesn’t agree in number with the singular subject \"using.\""),
        C: L("Choice C is incorrect because the plural verb \"ensure\" doesn’t agree in number with the singular subject \"using.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-acf454af", "acf454af", 139)
    },
    {
      id: "rw-fs-f4fd123c",
      sourceQuestionId: "f4fd123c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The African Games Co-production Market, one of over 180 annual international conferences supporting video game development, ______ the growth of the African gaming industry by helping start-up studios in Africa find partners.</p>",
      stem: STEM,
      options: ["promote", "are promoting", "promotes", "have promoted"],
      answer: "C",
      explanation: L("Choice C is the best answer. The subject of the sentence is “The African Games Co-production Market.” That’s one market, so it’s a singular noun, which means it needs a singular verb. “Promotes” is the only singular verb among the choices."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a subject-verb agreement error. The subject “The African Games Co-production Market” is singular, but the verb “promote” is plural."),
        B: L("Choice B is incorrect. This choice creates a subject-verb agreement error. The subject “The African Games Co- production Market” is singular, but the verb “are promoting” is plural."),
        D: L("Choice D is incorrect. This choice creates a subject-verb agreement error. The subject “The African Games Co-production Market” is singular, but the verb “have promoted” is plural.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f4fd123c", "f4fd123c", 144)
    },
    {
      id: "rw-fs-e8926747",
      sourceQuestionId: "e8926747",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Eighteen letters written by Louisa May Alcott, author of the popular novel Little Women (1868), can be found at the New York Historical Society. ______ letters demonstrate Alcott’s keen business sense in her interactions with publishers.</p>",
      stem: STEM,
      options: ["One", "That", "This", "These"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of determiners in a sentence. The plural determiner \"these\" agrees in number with the plural noun \"letters\" that it modifies. This choice clearly indicates that the letters demonstrate Alcott’s business sense."),
      distractors: {
        A: L("Choice A is incorrect because the singular determiner \"one\" doesn’t agree in number with the plural noun \"letters.\""),
        B: L("Choice B is incorrect because the singular determiner \"that\" doesn’t agree in number with the plural noun \"letters.\""),
        C: L("Choice C is incorrect because the singular determiner \"this\" doesn’t agree in number with the plural noun \"letters.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e8926747", "e8926747", 145)
    },
    {
      id: "rw-fs-97df6650",
      sourceQuestionId: "97df6650",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The village of Panduyacu in Ecuador ______ one of the rare places in the world located almost directly on the equator.</p>",
      stem: STEM,
      options: ["are being", "have been", "is", "are"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-verb agreement. The singular verb \"is\" agrees in number with the singular subject \"village.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are being\" doesn’t agree in number with the singular subject \"village.\""),
        B: L("Choice B is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"village.\""),
        D: L("Choice D is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"village.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-97df6650", "97df6650", 147)
    },
    {
      id: "rw-fs-7f1df833",
      sourceQuestionId: "7f1df833",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 1966, Emmett Ashford became the first African American to umpire a Major League Baseball game. His energetic gestures announcing when a player had struck out and his habit of barreling after a hit ball to see if it would land out of ______ transform the traditionally solemn umpire role into a dynamic one.</p>",
      stem: STEM,
      options: ["bounds helped", "bounds, helping", "bounds that helped", "bounds to help"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is finite verb use in a main clause. A main clause requires a finite verb to perform the action of the subject (in this case, Ashford’s “gestures” and “habit”), and this choice supplies the finite past tense verb “helped” to indicate what Ashford’s gestures and habit helped accomplish."),
      distractors: {
        B: L("Choice B is incorrect because the non-finite participle “helping” doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because the relative clause “that helped” doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because the non-finite to-infinitive “to help” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-7f1df833", "7f1df833", 151)
    },
    {
      id: "rw-fs-2ee50d41",
      sourceQuestionId: "2ee50d41",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The classic children’s board game Chutes and Ladders is a version of an ancient Nepalese game, Paramapada Sopanapata. In both games, players encounter “good” or “bad” spaces while traveling along a path; landing on one of the good spaces ______ a player to skip ahead and arrive closer to the end goal.</p>",
      stem: STEM,
      options: ["allows", "are allowing", "have allowed", "allow"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject–verb agreement. The singular verb “allows” agrees in number with the singular subject “landing.”"),
      distractors: {
        B: L("Choice B is incorrect because the plural verb “are allowing” doesn’t agree in number with the singular subject “landing.”"),
        C: L("Choice C is incorrect because the plural verb “have allowed” doesn’t agree in number with the singular subject “landing.”"),
        D: L("Choice D is incorrect because the plural verb “allow” doesn’t agree in number with the singular subject “landing.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2ee50d41", "2ee50d41", 152)
    },
    {
      id: "rw-fs-15d6d837",
      sourceQuestionId: "15d6d837",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Literary agents estimate that more than half of all nonfiction books credited to a celebrity or other public figure are in fact written by ghostwriters, professional authors who are paid to write other ______ but whose names never appear on book covers.</p>",
      stem: STEM,
      options: ["people’s stories", "peoples story’s", "peoples stories", "people’s story’s"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of plural and possessive nouns. The plural possessive noun “people’s” and the plural noun “stories” correctly indicate that there are multiple stories from multiple people."),
      distractors: {
        B: L("Choice B is incorrect because the context requires the plural possessive noun “people’s” and the plural noun “stories,” not the plural noun “peoples” and the singular possessive noun “story’s.”"),
        C: L("Choice C is incorrect because the context requires the plural possessive noun “people’s,” not the plural noun “peoples.”"),
        D: L("Choice D is incorrect because the context requires the plural noun “stories,” not the singular possessive noun “story’s.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-15d6d837", "15d6d837", 153)
    },
    {
      id: "rw-fs-59209b6d",
      sourceQuestionId: "59209b6d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Based on genetic evidence, archaeologists have generally agreed that reindeer domestication began in the eleventh century CE. However, since uncovering fragments of a 2,000-year-old reindeer training harness in northern Siberia, ______ may have begun much earlier.</p>",
      stem: STEM,
      options: ["researcher Robert Losey has argued that domestication", "researcher Robert Losey’s argument is that domestication", "domestication, researcher Robert Losey has argued,", "the argument researcher Robert Losey has made is that domestication"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “researcher Robert Losey” the subject of the sentence and places it immediately after the modifying phrase “since…Siberia.” In doing so, this choice clearly establishes that researcher Robert Losey—and not another noun in the sentence—is who uncovered fragments of a 2,000-year-old reindeer training harness in northern Siberia."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase “researcher Robert Losey’s argument” immediately after the modifying phrase illogically suggests that the “argument” is what uncovered fragments of a 2,000-year-old reindeer training harness in northern Siberia."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun “domestication” immediately after the modifying phrase illogically suggests that “domestication” is what uncovered fragments of a 2,000-year-old reindeer training harness in northern Siberia."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase “the argument” immediately after the modifying phrase illogically suggests that the “argument” is what uncovered fragments of a 2,000-year-old reindeer training harness in northern Siberia.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-59209b6d", "59209b6d", 154)
    },
    {
      id: "rw-fs-a75d5984",
      sourceQuestionId: "a75d5984",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Several advantages—the ability to react strongly with chip components, to avoid interference from other waves, and to be confined within tiny circuits—______ acoustic waves as a promising alternative to electrical waves for transmitting data on computer chips; as a result, researchers are invested in developing more acoustic wave–based chips.</p>",
      stem: STEM,
      options: ["have positioned", "positioning", "by positioning", "having positioned"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject. In this case, the subject is \"several advantages,\" and the present perfect tense verb \"have positioned\" supplies the finite verb to indicate what has made acoustic waves a promising alternative to electrical waves."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"positioning\" doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The prepositional phrase \"by positioning\" doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"having positioned\" doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-a75d5984", "a75d5984", 155)
    },
    {
      id: "rw-fs-856b495d",
      sourceQuestionId: "856b495d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the early twentieth century, Joseph Kekuku and other Hawaiian ______ in the mainland United States to the bright and lilting sound of the kīkā kila, or Hawaiian steel guitar. The instrument soon became a fixture in American blues and country music.</p>",
      stem: STEM,
      options: ["musicians introduced audiences", "musicians’ introduced audiences’", "musician’s introduced audience’s", "musicians’ introduced audiences"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of plural nouns. The plural nouns \"musicians\" and \"audiences\" correctly indicate that there were multiple musicians introducing the music to multiple audiences."),
      distractors: {
        B: L("Choice B is incorrect because the context requires the plural nouns \"musicians\" and \"audiences,\" not the plural possessive nouns \"musicians’\" and \"audiences’.\""),
        C: L("Choice C is incorrect because the context requires the plural nouns \"musicians\" and \"audiences,\" not the singular possessive nouns \"musician’s\" and \"audience’s.\""),
        D: L("Choice D is incorrect because the context requires the plural noun \"musicians,\" not the plural possessive noun \"musicians’.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-856b495d", "856b495d", 158)
    },
    {
      id: "rw-fs-4f2ff5f2",
      sourceQuestionId: "4f2ff5f2",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Tortoises can be found in many works of literature. For example, in Tom Stoppard’s 1993 play Arcadia, there is a tortoise that ______ by two names (Plautus and Lightning) and appears in both of the play’s parallel timelines. As a character, the tortoise symbolizes the connection between the past and present.</p>",
      stem: STEM,
      options: ["goes", "will have gone", "went", "had gone"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the present tense verb \"goes\" is consistent with the other present tense verbs (\"appears\" and \"symbolizes\") used to describe the tortoise in Stoppard’s play. Furthermore, it’s conventional to use the present tense when discussing a literary work."),
      distractors: {
        B: L("Choice B is incorrect because the future perfect tense verb \"will have gone\" isn’t consistent with the other present tense verbs used to describe the tortoise in Stoppard’s play."),
        C: L("Choice C is incorrect because the past tense verb \"went\" isn’t consistent with the other present tense verbs used to describe the tortoise in Stoppard’s play."),
        D: L("Choice D is incorrect because the past perfect tense verb \"had gone\" isn’t consistent with the other present tense verbs used to describe the tortoise in Stoppard’s play.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4f2ff5f2", "4f2ff5f2", 161)
    },
    {
      id: "rw-fs-2784cbaf",
      sourceQuestionId: "2784cbaf",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>To fully describe the motion of an object requires knowing each of five ______ movement: displacement, time, initial velocity, final velocity, and acceleration. These are called kinematic variables.</p>",
      stem: STEM,
      options: ["variable’s that characterize objects’", "variables that characterize objects’", "variables that characterize object’s", "variables that characterize objects"],
      answer: "B",
      explanation: L("Choice B is the best answer. The conventions being tested are the use of plural and possessive nouns. The plural noun \"variables\" correctly indicates that there are multiple variables, and the plural possessive noun \"objects’\" correctly indicates that the movement of objects in general is being discussed."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the plural noun \"variables,\" not the singular possessive noun \"variable’s.\""),
        C: L("Choice C is incorrect because the context requires the plural possessive noun \"objects’,\" not the singular possessive noun \"object’s.\""),
        D: L("Choice D is incorrect because the context requires the plural possessive noun \"objects’,\" not the plural noun \"objects.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2784cbaf", "2784cbaf", 162)
    },
    {
      id: "rw-fs-863065c7",
      sourceQuestionId: "863065c7",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Legal scholars James Melton and Tom Ginsburg’s analysis of de jure judicial independence and its growth over decades ______ six constitutional features that enhance such independence, including judicial tenure and selection procedure. Albania’s constitution contains five of these features.</p>",
      stem: STEM,
      options: ["are identifying", "identify", "have identified", "identifies"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"identifies\" agrees in number with the singular subject \"analysis.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are identifying\" doesn’t agree in number with the singular subject \"analysis.\""),
        B: L("Choice B is incorrect because the plural verb \"identify\" doesn’t agree in number with the singular subject \"analysis.\""),
        C: L("Choice C is incorrect because the plural verb \"have identified\" doesn’t agree in number with the singular subject \"analysis.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-863065c7", "863065c7", 163)
    },
    {
      id: "rw-fs-872a002e",
      sourceQuestionId: "872a002e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The present-day city of Dushanbe, Tajikistan, was for years the capital of the Tajik Autonomous Soviet Socialist Republic, one of many nominally autonomous republics within the Soviet Union. Like ______ peer autonomous Soviet socialist republics, the Tajik Republic was established along ethnolinguistic lines: most of the republic’s residents spoke Persian.</p>",
      stem: STEM,
      options: ["their", "they’re", "its", "it’s"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of possessive determiners. The singular possessive determiner \"its\" agrees in number with the singular subject \"the Tajik Republic\" and thus indicates that the other republics were its peers."),
      distractors: {
        A: L("Choice A is incorrect because the plural possessive determiner \"their\" doesn’t agree in number with the singular subject \"the Tajik Republic.\""),
        B: L("Choice B is incorrect because \"they’re\" is the contraction for \"they are,\" not a possessive determiner."),
        D: L("Choice D is incorrect because \"it’s\" is the contraction for \"it is\" or \"it has,\" not a possessive determiner.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-872a002e", "872a002e", 164)
    },
    {
      id: "rw-fs-0fe5ce68",
      sourceQuestionId: "0fe5ce68",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Ten of William Shakespeare’s plays are classified as histories. Although each one of these plays, which include Henry V and Richard III, ______ on a single historical figure (specifically, an English king), some, such as Henry VI Part One and Henry VI Part Two, feature different episodes from the same monarch’s life.</p>",
      stem: STEM,
      options: ["focuses", "focus", "are focused", "were focused"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb \"focuses\" agrees in number with the singular subject \"each one of these plays,\" which refers to each play individually."),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"focus\" doesn’t agree in number with the singular subject \"each one of these plays.\""),
        C: L("Choice C is incorrect because the plural verb \"are focused\" doesn’t agree in number with the singular subject \"each one of these plays.\""),
        D: L("Choice D is incorrect because the plural verb \"were focused\" doesn’t agree in number with the singular subject \"each one of these plays.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-0fe5ce68", "0fe5ce68", 166)
    },
    {
      id: "rw-fs-b369d54c",
      sourceQuestionId: "b369d54c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Woven from recycled yarn and hand tufted using a carpet weaving technique passed down by the artist’s Turkish grandmother, ______ so lush and tactilely inviting that you are tempted to reach out and touch them.</p>",
      stem: STEM,
      options: ["the topological tapestries of Argentine textile artist Alexandra Kehayoglou are", "the Argentine textile artist Alexandra Kehayoglou creates topological tapestries that are", "when she creates her topological tapestries, Argentine textile artist Alexandra Kehayoglou makes them", "Alexandra Kehayoglou is an Argentine textile artist whose topological tapestries are"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase \"topological tapestries\" the subject of the sentence and places it immediately after the modifying phrase \"woven…grandmother.\" In doing so, this choice clearly establishes that the topological tapestries—and not another noun in the sentence—are being described as woven from recycled yarn and hand tufted."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase \"Argentine textile artist Alexandra Kehayoglou\" immediately after the modifying phrase illogically suggests that Kehayoglou is woven from recycled yarn and hand tufted."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the pronoun \"she\" and the noun phrase \"Argentine textile artist Alexandra Kehayoglou\" after the modifying phrase illogically suggests that Kehayoglou is woven from recycled yarn and hand tufted."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun \"Alexandra Kehayoglou\" immediately after the modifying phrase illogically suggests that Kehayoglou is woven from recycled yarn and hand tufted.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b369d54c", "b369d54c", 167)
    },
    {
      id: "rw-fs-c437dd53",
      sourceQuestionId: "c437dd53",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Wanting to celebrate the 100th anniversary of the Alaska Purchase, ______ up with a motto that best captured the state’s unique character. The commission selected “North to the Future,” submitted by Juneau journalist Richard Peter, as its winning entry.</p>",
      stem: STEM,
      options: ["a contest sponsored by the Alaska Centennial Commission would award $300 to an individual who came", "an award of $300 would go to an individual in a contest sponsored by the Alaska Centennial Commission for coming", "$300 would be awarded to an individual by the Alaska Centennial Commission in a contest for coming", "the Alaska Centennial Commission sponsored a contest that would award $300 to an individual who came"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase \"the Alaska Centennial Commission\" the subject of the sentence and places it immediately after the modifying phrase \"wanting…Purchase.\" In doing so, this choice clearly establishes that the Alaska Centennial Commission—and not another noun in the sentence—wanted to celebrate the 100th anniversary of the Alaska Purchase."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun phrase \"a contest\" immediately after the modifying phrase illogically suggests that the contest wanted to celebrate the 100th anniversary of the Alaska Purchase."),
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase \"an award of $300\" immediately after the modifying phrase illogically suggests that the award of $300 wanted to celebrate the 100th anniversary of the Alaska Purchase."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase \"$300\" immediately after the modifying phrase illogically suggests that the $300 wanted to celebrate the 100th anniversary of the Alaska Purchase.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c437dd53", "c437dd53", 170)
    },
    {
      id: "rw-fs-97b62fab",
      sourceQuestionId: "97b62fab",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Smaller than poppy seeds, tardigrades are tiny, but they are tough. These minuscule animals can survive for thirty years without food or water, and ______ can withstand extreme temperatures as low as minus 328 degrees and as high as 304 degrees Fahrenheit.</p>",
      stem: STEM,
      options: ["that", "it", "they", "he"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is pronoun-antecedent agreement. The plural pronoun \"they\" agrees in number with the plural antecedent \"animals,\" which refers to tardigrades."),
      distractors: {
        A: L("Choice A is incorrect because the singular pronoun \"that\" doesn’t agree in number with the plural antecedent \"animals.\""),
        B: L("Choice B is incorrect because the singular pronoun \"it\" doesn’t agree in number with the plural antecedent \"animals.\""),
        D: L("Choice D is incorrect because the singular pronoun \"he\" doesn’t agree in number with the plural antecedent \"animals.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-97b62fab", "97b62fab", 172)
    },
    {
      id: "rw-fs-d4f173ec",
      sourceQuestionId: "d4f173ec",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>To illustrate Albert Einstein’s special theory of relativity, picture two jugglers: one juggling on a steadily moving parade float, the other juggling while standing still on a sidewalk. The laws of physics are identical for both ______ motion relative to each other. But what, Einstein wondered, about the speed of light?</p>",
      stem: STEM,
      options: ["jugglers’, regardless of they’re", "jugglers, regardless of there", "juggler’s, regardless of their", "jugglers, regardless of their"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of plural nouns and possessive determiners. The plural noun \"jugglers\" and the plural possessive determiner \"their\" correctly indicate that there are multiple jugglers whose motion is being discussed."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the plural noun \"jugglers\" and the plural possessive determiner \"their,\" not the plural possessive noun \"jugglers’\" and the contraction \"they’re.\""),
        B: L("Choice B is incorrect because the context requires the plural possessive determiner \"their,\" not the word \"there,\" which means \"in that place.\""),
        C: L("Choice C is incorrect because the context requires the plural noun \"jugglers,\" not the singular possessive noun \"juggler’s.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-d4f173ec", "d4f173ec", 183)
    },
    {
      id: "rw-fs-dd6a0326",
      sourceQuestionId: "dd6a0326",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>African American Percy Julian was a scientist and entrepreneur whose work helped people around the world to see. Named in 1999 as one of the greatest achievements by a US chemist in the past hundred years, ______ led to the first mass-produced treatment for glaucoma.</p>",
      stem: STEM,
      options: ["Julian synthesized the alkaloid physostigmine in 1935; it", "in 1935 Julian synthesized the alkaloid physostigmine, which", "Julian’s 1935 synthesis of the alkaloid physostigmine", "the alkaloid physostigmine was synthesized by Julian in 1935 and"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “Julian’s 1935 synthesis” the subject of the sentence and places it immediately after the modifying phrase “named…years.” In doing so, this choice clearly establishes that Julian’s 1935 synthesis of the alkaloid physostigmine—and not another noun in the sentence—was named in 1999 as one of the greatest achievements by a US chemist in the past hundred years."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun “Julian” immediately after the modifying phrase illogically suggests that Julian himself was named as one of the greatest achievements by a US chemist in the past hundred years."),
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the prepositional phrase “in 1935” immediately after the modifying phrase illogically and confusingly suggests that “in 1935” was named as one of the greatest achievements by a US chemist in the past hundred years."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase “the alkaloid physostigmine” immediately after the modifying phrase illogically and confusingly suggests that the alkaloid physostigmine itself (not the synthesis of it) was named as one of the greatest achievements by a US chemist in the past hundred years.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-dd6a0326", "dd6a0326", 184)
    },
    {
      id: "rw-fs-35360da9",
      sourceQuestionId: "35360da9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The US Geological Survey wants to map every human-made structure in the United States, and it is asking volunteers to help. Cassie Tammy Wang and Ashish D’Souza are just two of the many volunteer map editors who ______ to the project since it began in 2012.</p>",
      stem: STEM,
      options: ["contribute", "will contribute", "have contributed", "will be contributing"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the present perfect tense verb “have contributed,” used in conjunction with the phrase “since it began in 2012,” correctly indicates that map editors have contributed in the past and continue to do so in the present."),
      distractors: {
        A: L("Choice A is incorrect because the present tense verb “contribute” is inconsistent with the phrase “since it began in 2012,” which suggests that the contributions occurred in the past and continue into the present."),
        B: L("Choice B is incorrect because the future tense verb “will contribute” is inconsistent with the phrase “since it began in 2012,” which suggests that the contributions occurred in the past and continue into the present."),
        D: L("Choice D is incorrect because the future tense verb “will be contributing” is inconsistent with the phrase “since it began in 2012,” which suggests that the contributions occurred in the past and continue into the present.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-35360da9", "35360da9", 188)
    },
    {
      id: "rw-fs-f0f9bf8f",
      sourceQuestionId: "f0f9bf8f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Félix González-Torres debuted his sculpture “Untitled” (USA Today) in New York City in 1990. The work consists of piled candy, a material González-Torres became known for. ______ created additional installations using a variety of sweets, like bubblegum, lollipops, and chocolates.</p>",
      stem: STEM,
      options: ["They all", "Those", "Both", "He"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun \"he\" agrees in number with the singular antecedent \"Félix González-Torres,\" and it clearly indicates that González-Torres created the additional installations."),
      distractors: {
        A: L("Choice A is incorrect because the plural noun phrase \"they all\" doesn’t agree in number with the singular antecedent \"Félix González-Torres,\" and it doesn’t clearly indicate that he (González-Torres) created the additional installations."),
        B: L("Choice B is incorrect because the plural pronoun \"those\" doesn’t agree in number with the singular antecedent \"Félix González-Torres,\" and it doesn’t clearly indicate that he (González-Torres) created the additional installations."),
        C: L("Choice C is incorrect because the plural pronoun \"both\" doesn’t agree in number with the singular antecedent \"Félix González-Torres,\" and it doesn’t clearly indicate that he (González-Torres) created the additional installations.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f0f9bf8f", "f0f9bf8f", 190)
    },
    {
      id: "rw-fs-684b8bd2",
      sourceQuestionId: "684b8bd2",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Far from being modern inventions, ______ more than 5,000 years ago.</p>",
      stem: STEM,
      options: ["Sumerians in ancient Mesopotamia used drinking straws", "drinking straws were used by Sumerians in ancient Mesopotamia", "the use of drinking straws by Sumerians in ancient Mesopotamia happened", "ancient Mesopotamia was home to Sumerians who used drinking straws"],
      answer: "B",
      explanation: L("Choice B is the best answer. Modifiers and their subjects must go next to each other. The modifier “far from being modern inventions” must be describing “drinking straws,” because those are the only possible inventions in this sentence."),
      distractors: {
        A: L("Choice A is incorrect. Modifiers and their subjects must go next to each other. The modifier “far from being modern inventions” can’t be describing “Sumerians,” because they are a group of people, not an invention."),
        C: L("Choice C is incorrect. Modifiers and their subjects must go next to each other. The modifier “far from being modern inventions” can’t be describing “the use of drinking straws,” because it is not “the use” of drinking straws that is an invention—it is the drinking straws themselves."),
        D: L("Choice D is incorrect. Modifiers and their subjects must go next to each other. The modifier “far from being modern inventions” can’t be describing “Ancient Mesopotamia,” because that is a place, not an invention.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-684b8bd2", "684b8bd2", 193)
    },
    {
      id: "rw-fs-cd4b1a7e",
      sourceQuestionId: "cd4b1a7e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>How did whales, once no bigger than seals, evolve to become the largest animals on Earth? Brazilian biologist Mariana Nery believes the answer might be found in whales’ DNA. In January 2023, Nery and her colleagues ______ a study showing changes over time in four whale genes associated with body size.</p>",
      stem: STEM,
      options: ["published", "publishing", "having published", "to publish"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject (in this case, Nery and her colleagues), and this choice supplies the finite past tense verb \"published\" to indicate that these biologists shared their findings about changes in whale genes associated with body size."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"publishing\" doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"having published\" doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to publish\" doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-cd4b1a7e", "cd4b1a7e", 197)
    },
    {
      id: "rw-fs-60a4c088",
      sourceQuestionId: "60a4c088",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>What makes the theremin a unique musical instrument? You play it without touching it. When you place your ______ the pitch will shift as your hands move through the air.</p>",
      stem: STEM,
      options: ["hand’s between the two antenna’s,", "hands between the two antennas,", "hands’ between the two antennas’,", "hands’ between the two antennas,"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of plural nouns in a sentence. The plural noun \"hands\" and the plural noun \"antennas\" correctly indicate that two hands are placed between two antennas when playing the theremin."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the plural nouns \"hands\" and \"antennas,\" not the singular possessive nouns \"hand’s\" and \"antenna’s.\""),
        C: L("Choice C is incorrect because the context requires the plural nouns \"hands\" and \"antennas,\" not the plural possessive nouns \"hands’\" and \"antennas’.\""),
        D: L("Choice D is incorrect because the context requires the plural noun \"hands,\" not the plural possessive noun \"hands’.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-60a4c088", "60a4c088", 198)
    },
    {
      id: "rw-fs-dd428136",
      sourceQuestionId: "dd428136",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Cheng Dang and her colleagues at the University of Washington recently ran simulations to determine the extent to which individual snow ______ affect the amount of light reflecting off a snowy surface.</p>",
      stem: STEM,
      options: ["grain’s physical properties’", "grains’ physical properties", "grains’ physical property’s", "grains physical properties"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of plural and possessive nouns. The plural possessive noun “grains’” and the plural noun “properties” correctly indicate that the simulations involved multiple snow grains and that those snow grains had several properties."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the plural possessive noun “grains’” and the plural noun “properties,” not the singular possessive noun “grain’s” and the plural possessive noun “properties’.”"),
        C: L("Choice C is incorrect because the context requires the plural noun “properties,” not the singular possessive noun “property’s.”"),
        D: L("Choice D is incorrect because the context requires the plural possessive noun “grains’,” not the plural noun “grains.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-dd428136", "dd428136", 200)
    },
    {
      id: "rw-fs-a94b7fd6",
      sourceQuestionId: "a94b7fd6",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>With residents from Mexico, China, El Salvador, and many other countries, Los Angeles has long been a city of cultural diversity. Even back in the 1860s, nearly 30% of the city’s population ______ from outside the United States.</p>",
      stem: STEM,
      options: ["is being", "was", "is", "will be"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the past tense verb \"was,\" used in conjunction with the prepositional phrase \"from outside the United States,\" correctly indicates that in the 1860s nearly 30% of the population in Los Angeles wasn’t from the US."),
      distractors: {
        A: L("Choice A is incorrect because the present progressive tense verb \"is being\" doesn’t indicate that the claim about Los Angeles’s population refers to the population back in the 1860s."),
        C: L("Choice C is incorrect because the present tense verb \"is\" doesn’t indicate that the claim about Los Angeles’s population refers to the population back in the 1860s."),
        D: L("Choice D is incorrect because the future tense verb \"will be\" doesn’t indicate that the claim about Los Angeles’s population refers to the population back in the 1860s.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-a94b7fd6", "a94b7fd6", 201)
    },
    {
      id: "rw-fs-c7cb5186",
      sourceQuestionId: "c7cb5186",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In a US national election, one might expect major-party campaigns to focus on the most populous states. However, if polls and past voting data suggest that the outcome in a given state is a foregone conclusion, a campaign will not invest its resources there. Ultimately, a state’s voting record and polling data, not its population size, ______ its importance to campaigns.</p>",
      stem: STEM,
      options: ["determines", "determining", "has determined", "determine"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms in a sentence. The plural verb “determine” supplies the main clause with a finite main verb and agrees in number with the plural subject “a state’s voting record and polling data.”"),
      distractors: {
        A: L("Choice A is incorrect because the singular verb “determines” doesn’t agree in number with the plural subject “a state’s voting record and polling data.”"),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle “determining” doesn’t supply the main clause with a finite plural verb."),
        C: L("Choice C is incorrect because the singular verb “has determined” doesn’t agree in number with the plural subject “a state’s voting record and polling data.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c7cb5186", "c7cb5186", 202)
    },
    {
      id: "rw-fs-6bc907c9",
      sourceQuestionId: "6bc907c9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Novelist Jane Austen greatly admired the work of Fanny Burney, a popular English author. In fact, scholars believe that a passage from the last chapter of Cecilia, a 1782 novel by Burney, likely inspired the title of one of ______ Pride and Prejudice.</p>",
      stem: STEM,
      options: ["Austen’s most famous novels,", "Austens’ most famous novels’,", "Austens most famous novels,", "Austen’s most famous novel’s,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of plural and possessive nouns. The singular possessive proper noun \"Austen’s\" and the plural noun \"novels\" correctly indicates that Austen wrote multiple novels that were famous."),
      distractors: {
        B: L("Choice B is incorrect because the context requires the singular possessive proper noun \"Austen’s\" and the plural noun \"novels,\" not the plural possessive nouns \"Austens’\" and \"novels’.\""),
        C: L("Choice C is incorrect because the context requires the singular possessive proper noun \"Austen’s,\" not the plural proper noun \"Austens.\""),
        D: L("Choice D is incorrect because the context requires the plural noun \"novels,\" not the singular possessive noun \"novel’s.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-6bc907c9", "6bc907c9", 203)
    },
    {
      id: "rw-fs-1e274153",
      sourceQuestionId: "1e274153",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>During World War II, codebreakers played an essential role in deciphering coded messages. In the US military, more than 10,000 women ______ as codebreakers, making up nearly half of all US codebreakers.</p>",
      stem: STEM,
      options: ["having served", "to serve", "served", "serving"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject (in this case, “more than 10,000 women”), and this choice supplies the finite past tense verb “served” to state what the women did."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The nonfinite participle “having served” doesn’t supply the main clause with a finite verb."),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive “to serve” doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite participle “serving” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1e274153", "1e274153", 205)
    },
    {
      id: "rw-fs-772835db",
      sourceQuestionId: "772835db",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Most of the ice found on Earth is ice Ih, distinguished by a crystalline structure in which molecules form a hexagonal pattern. Amorphous ice, on the other hand, constitutes most of the ice in the ultrafrigid environment of outer space. Defined by a disorganized molecular structure, ______</p>",
      stem: STEM,
      options: ["ice Ih contains crystals, whereas amorphous ice, which lacks the thermal energy to form them, does not.", "amorphous ice lacks the thermal energy to form the crystals found in ice Ih.", "the lack of thermal energy in amorphous ice explains its inability to form the crystals found in ice Ih.", "ice Ih differs from amorphous ice in that it possesses the thermal energy to form crystals."],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “amorphous ice” the subject of the sentence and places it immediately after the modifying phrase “defined…structure.” In doing so, this choice clearly establishes that amorphous ice—and not another noun in the sentence—is being described as having a disorganized molecular structure."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun “ice Ih” immediately after the modifying phrase illogically suggests that ice Ih has a disorganized molecular structure, whereas ice Ih is previously described as having molecules that form a hexagonal pattern."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “the lack of thermal energy” immediately after the modifying phrase illogically suggests that the lack of thermal energy has a disorganized molecular structure."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of “ice Ih” immediately after the modifying phrase illogically suggests that ice Ih has a disorganized molecular structure, whereas ice Ih is previously described as having molecules that form a hexagonal pattern.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-772835db", "772835db", 207)
    },
    {
      id: "rw-fs-f339ee39",
      sourceQuestionId: "f339ee39",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Multiple newspapers ______ the Spanish-speaking population of Washington, DC, including El Tiempo Latino and Washington Hispanic.</p>",
      stem: STEM,
      options: ["serve", "having served", "to serve", "serving"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject (in this case, \"multiple newspapers\"), and this choice supplies the finite present tense verb \"serve\" to indicate that there are multiple newspapers serving the Spanish-speaking population of Washington, DC."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"having served\" doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to serve\" doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"serving\" doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f339ee39", "f339ee39", 208)
    },
    {
      id: "rw-fs-f768090a",
      sourceQuestionId: "f768090a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Walt Whitman’s Leaves of Grass first appeared in 1855 as a slim collection of twelve poems, but Whitman would revise and expand it substantially over the next four decades. These extensive ______ the addition of hundreds of new poems, the removal of some existing ones, and the insertion of prefatory material, reflected the poet’s evolving literary perspective and experience of the US Civil War.</p>",
      stem: STEM,
      options: ["changes, including", "changes would include", "changes included", "changes, include"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite present participle \"including\" is correctly used to form a supplementary element that interrupts the main clause \"These extensive changes…reflected the poet’s evolving literary perspective and experience of the US Civil War.\" This supplementary element, offset by commas after \"changes\" and \"material,\" provides examples of the changes Whitman made to Leaves of Grass."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The finite modal verb \"would include\" can’t be used in this way to form a supplementary element within the main clause."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The finite past tense verb \"included\" can’t be used in this way to form a supplementary element within the main clause."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite present tense verb \"include\" can’t be used in this way to form a supplementary element within the main clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f768090a", "f768090a", 210)
    },
    {
      id: "rw-fs-775f3eb9",
      sourceQuestionId: "775f3eb9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In his groundbreaking book Bengali Harlem and the Lost Histories of South Asian America, Vivek Bald uses newspaper articles, census records, ships’ logs, and memoirs to tell the ______ who made New York City their home in the early twentieth century.</p>",
      stem: STEM,
      options: ["story’s of the South Asian immigrants", "story’s of the South Asian immigrants’", "stories of the South Asian immigrants", "stories’ of the South Asian immigrant’s"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of plural and possessive nouns. The plural nouns “stories” and “immigrants” correctly indicate that the memoir tells multiple stories of multiple immigrants."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the plural noun “stories,” not the singular possessive noun “story’s.”"),
        B: L("Choice B is incorrect because the context requires the plural nouns “stories” and “immigrants,” not the singular possessive noun “story’s” and the plural possessive noun “immigrants’.”"),
        D: L("Choice D is incorrect because the context requires the plural nouns “stories” and “immigrants,” not the plural possessive noun “stories’” and the singular possessive noun “immigrant’s.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-775f3eb9", "775f3eb9", 211)
    },
    {
      id: "rw-fs-5b8f9cf2",
      sourceQuestionId: "5b8f9cf2",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In the canon of North African literature, Moroccan author Driss Chraïbi’s 1954 novel The Simple Past (Le Passé simple) looms large. A coming-of- age story, a social meditation, and a sober gaze into the dark maw of French colonialism, ______ interrogates systemic power with memorable intensity.</p>",
      stem: STEM,
      options: ["Morocco gained its independence two years before the publication of Chraïbi’s debut novel, which", "Chraïbi’s debut novel, published two years before Morocco gained its independence,", "Chraïbi wrote a debut novel that, published two years before Morocco gained its independence,", "published two years before Morocco gained its independence, Chraïbi wrote a debut novel that"],
      answer: "B",
      explanation: L("Choice B is the best answer. Subject-modifier placement requires a modifier and its subject to be next to each other. The subject of the modifier \"a coming-of-age story…colonialism\" is Chraïbi’s novel The Simple Past, so the subject \"Chraïbi’s debut novel\" fits perfectly after this introductory modifying phrase."),
      distractors: {
        A: L("Choice A is incorrect. Modifiers and their subjects must go next to each other. The introductory modifier \"a coming-of-age story…colonialism\" is describing Chraïbi’s novel, not Morocco. However, this choice places Morocco directly next to that modifier."),
        C: L("Choice C is incorrect. Modifiers and their subjects must go next to each other. The introductory modifier \"a coming-of-age story…colonialism\" all describes Chraïbi’s novel, not Chraïbi himself. However, this choice places Chraïbi directly next to that modifier."),
        D: L("Choice D is incorrect. Modifiers and their subjects must go next to each other. The modifier \"a coming-of-age story…\" is describing Chraïbi’s novel, so that needs to be the subject immediately after the modifier. This choice adds another modifier that describes Chraïbi’s novel, but then puts \"Chraïbi\" himself—not the novel—right after that modifier, which doesn’t make sense. Chraïbi wasn’t \"published two years before\" Moroccan independence; his novel The Simple Past was.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-5b8f9cf2", "5b8f9cf2", 215)
    },
    {
      id: "rw-fs-b5b74c3f",
      sourceQuestionId: "b5b74c3f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>When writing The Other Black Girl (2021), novelist Zakiya Dalila Harris drew on her own experiences working at a publishing office. The award- winning book is Harris’s first novel, but her writing ______ honored before. At the age of twelve, she entered a contest to have a story published in American Girl magazine—and won.</p>",
      stem: STEM,
      options: ["were", "have been", "has been", "are"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-verb agreement. The singular verb “has been” agrees in number with the singular subject “writing.”"),
      distractors: {
        A: L("Choice A is incorrect because the plural verb “were” doesn’t agree in number with the singular subject “writing.”"),
        B: L("Choice B is incorrect because the plural verb “have been” doesn’t agree in number with the singular subject “writing.”"),
        D: L("Choice D is incorrect because the plural verb “are” doesn’t agree in number with the singular subject “writing.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b5b74c3f", "b5b74c3f", 216)
    },
    {
      id: "rw-fs-50445680",
      sourceQuestionId: "50445680",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In winter, the diets of Japanese macaques, also known as snow monkeys, are influenced more by food availability than by food preference. Although the monkeys prefer to eat vegetation and land-dwelling invertebrates, those food sources may become unavailable because of extensive snow and ice cover, ______ the monkeys to hunt for marine animals in any streams that have not frozen over.</p>",
      stem: STEM,
      options: ["forces", "to force", "forcing", "forced"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of finite and nonfinite verb forms within a sentence. The nonfinite present participle “forcing” is correctly used to form a participial phrase that supplements the main clause “those...cover,” describing the effects on monkeys of the lack of food sources."),
      distractors: {
        A: L("Choice A is incorrect because the finite present tense verb “forces” can’t be used in this way to supplement the main clause (“those...cover”)."),
        B: L("Choice B is incorrect. While the nonfinite to-infinitive “to force” could be used to form a subordinate clause that supplements the main clause (“those...cover”), to-infinitives conventionally express purpose, and nothing in the sentence suggests that the food sources become unavailable for the purpose of forcing monkeys to hunt marine animals."),
        D: L("Choice D is incorrect because the finite past tense verb “forced” can’t be used in this way to supplement the main clause (“those...cover”).")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-50445680", "50445680", 219)
    },
    {
      id: "rw-fs-de3dd17d",
      sourceQuestionId: "de3dd17d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Planetary scientist Briony Horgan and her colleagues have determined that as much as 25 percent of the sand on Mars is composed of impact spherules. These spherical bits of glass form when asteroids collide with the planet, ejecting bits of molten rock into the atmosphere that, after cooling and solidifying into glass, ______ back onto Mars’s surface.</p>",
      stem: STEM,
      options: ["to rain", "raining", "having rained", "rain"],
      answer: "D",
      explanation: L("Choice D is the best answer. \"That…[rain] back onto Mars’s surface\" is a relative clause that describes the \"bits of molten rock.\" Forming the clause requires a conjugated, finite verb, and this is the only choice that provides that."),
      distractors: {
        A: L("Choice A is incorrect. \"To rain\" is an infinitive and can’t serve as the main verb of a clause. A conjugated verb is needed here to form the main verb of the relative clause \"that…[rain] back onto Mars’s surface,\" which describes the \"bits of molten rock.\""),
        B: L("Choice B is incorrect. \"Raining\" is a present participle and, on its own, can’t serve as the main verb of a clause. A conjugated verb is needed here to form the main verb of the relative clause \"that…[rain] back onto Mars’s surface,\" which describes the \"bits of molten rock.\""),
        C: L("Choice C is incorrect. \"Having rained\" is a perfect participle and can’t serve as the main verb of a clause. A conjugated verb is needed here to form the main verb of the relative clause \"that…[rain] back onto Mars’s surface,\" which describes the \"bits of molten rock.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-de3dd17d", "de3dd17d", 225)
    },
    {
      id: "rw-fs-c102f9b0",
      sourceQuestionId: "c102f9b0",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Lê Lương Minh became the thirteenth secretary-general of the Association of Southeast Asian Nations (ASEAN) in January 2013, making ______ the first time the organization would appoint a Vietnamese leader.</p>",
      stem: STEM,
      options: ["these", "those", "this", "some"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun \"this\" agrees in number with the singular antecedent \"Lê Lương Minh became the thirteenth secretary-general of the Association of Southeast Asian Nations (ASEAN) in January 2013.\" The pronoun \"this\" is referring back to the singular event described earlier in the sentence in which Minh became secretary- general of ASEAN."),
      distractors: {
        A: L("Choice A is incorrect because the plural pronoun \"these\" doesn’t agree in number with the singular antecedent \"Lê Lương Minh became the thirteenth secretary-general of the Association of Southeast Asian Nations (ASEAN) in January 2013.\""),
        B: L("Choice B is incorrect because the plural pronoun \"those\" doesn’t agree in number with the singular antecedent \"Lê Lương Minh became the thirteenth secretary-general of the Association of Southeast Asian Nations (ASEAN) in January 2013.\""),
        D: L("Choice D is incorrect because the indefinite pronoun \"some\" is ambiguous in this context; the resulting sentence leaves unclear what marks the first time the organization appointed a Vietnamese leader.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c102f9b0", "c102f9b0", 226)
    },
    {
      id: "rw-fs-ecba68b5",
      sourceQuestionId: "ecba68b5",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Mathematician Grigori Perelman, sometimes in conjunction with mathematicians Richard S. Hamilton and Shing-Tung Yau, ______ credited with proving the Poincaré conjecture. Having built on Hamilton’s previous work to solve the proof, Perelman has insisted that Hamilton receive credit. Yau later found and closed gaps in Perelman’s proof, persuading some mathematicians that he deserves credit as well.</p>",
      stem: STEM,
      options: ["are", "have been", "are being", "is"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"is credited\" agrees in number with the singular subject \"mathematician Grigori Perelman.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are credited\" doesn’t agree in number with the singular subject \"mathematician Grigori Perelman.\""),
        B: L("Choice B is incorrect because the plural verb \"have been credited\" doesn’t agree in number with the singular subject \"mathematician Grigori Perelman.\""),
        C: L("Choice C is incorrect because the plural verb \"are being credited\" doesn’t agree in number with the singular subject \"mathematician Grigori Perelman.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-ecba68b5", "ecba68b5", 228)
    },
    {
      id: "rw-fs-2dd1b8bf",
      sourceQuestionId: "2dd1b8bf",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Compared to that of alumina glass, ______ silica glass atoms are so far apart that they are unable to re-form bonds after being separated.</p>",
      stem: STEM,
      options: ["silica glass is at a significant disadvantage due to its more dispersed atomic arrangement:", "silica glass has a more dispersed atomic arrangement, resulting in a significant disadvantage:", "a significant disadvantage of silica glass is that its atomic arrangement is more dispersed:", "silica glass’s atomic arrangement is more dispersed, resulting in a significant disadvantage:"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-modifier placement. This choice makes “silica glass’s atomic arrangement” the subject of the sentence and places it immediately after the modifying phrase “compared to that of alumina glass.” In doing so, this choice clearly establishes that silica glass’s atomic arrangement—and not another noun in the sentence—is being compared to the atomic arrangement (“that”) of alumina glass."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun phrase “silica glass” immediately after the modifying phrase illogically suggests that silica glass itself (rather than its atomic arrangement) is being compared to alumina glass’s atomic arrangement."),
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase “silica glass” immediately after the modifying phrase illogically suggests that silica glass itself (rather than its atomic arrangement) is being compared to alumina glass’s atomic arrangement."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “a significant disadvantage” immediately after the modifying phrase illogically suggests that “a significant disadvantage” is being compared to alumina glass’s atomic arrangement.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2dd1b8bf", "2dd1b8bf", 229)
    },
    {
      id: "rw-fs-eee7536f",
      sourceQuestionId: "eee7536f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>On March 27, 2004, after nine years as a professional boxer, Isra Girgrah retired. The Yemeni American athlete ______ her career with a record of twenty-eight wins, three losses, and two ties.</p>",
      stem: STEM,
      options: ["finish", "has been finishing", "finished", "will be finishing"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of a verb to express tense in a sentence. In this choice, the past tense verb “finished” is consistent with the other past tense verb (“retired”) used to refer to Girgrah’s retirement in 2004."),
      distractors: {
        A: L("Choice A is incorrect because the present tense verb “finish” isn’t consistent with the other past tense verb (“retired”) used to refer to Girgrah’s retirement in 2004. Furthermore, the plural verb “finish” doesn’t agree in number with the sentence’s singular subject “The Yemeni American athlete.”"),
        B: L("Choice B is incorrect because the present perfect progressive tense verb “has been finishing” isn’t consistent with the other past tense verb (“retired”) used to refer to Girgrah’s retirement in 2004."),
        D: L("Choice D is incorrect because the future progressive tense verb “will be finishing” isn’t consistent with the other past tense verb (“retired”) used to refer to Girgrah’s retirement in 2004.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-eee7536f", "eee7536f", 235)
    },
    {
      id: "rw-fs-0ff8477b",
      sourceQuestionId: "0ff8477b",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Food and the sensation of taste are central to Monique Truong’s novels. In The Book of Salt, for example, the exiled character of Bình connects to his native Saigon through the food he prepares, while in Bitter in the Mouth, the character of Linda ______ a form of synesthesia whereby the words she hears evoke tastes.</p>",
      stem: STEM,
      options: ["experienced", "had experienced", "experiences", "will be experiencing"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the present tense verb “experiences” is consistent with the other present tense verbs (e.g., “connects” and “prepares”) used to describe the events in Truong’s novels. Furthermore, it’s conventional to use the present tense when discussing a literary work."),
      distractors: {
        A: L("Choice A is incorrect because the past tense verb “experienced” isn’t consistent with the other present tense verbs used to describe the events in Truong’s novels."),
        B: L("Choice B is incorrect because the past perfect tense verb “had experienced” isn’t consistent with the other present tense verbs used to describe the events in Truong’s novels."),
        D: L("Choice D is incorrect because the future progressive tense verb “will be experiencing” isn’t consistent with the other present tense verbs used to describe the events in Truong’s novels.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-0ff8477b", "0ff8477b", 236)
    },
    {
      id: "rw-fs-b260c65a",
      sourceQuestionId: "b260c65a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Earth is not a perfect sphere. Due to the ______ gravitational pull, Earth bulges out on the sides closest to and farthest from the Moon. This distorting pull is known as a tidal force, and it is responsible for the changes in water levels that are called high and low tides.</p>",
      stem: STEM,
      options: ["Moon’s", "Moons", "Moons’", "Moon"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of possessive nouns. The singular possessive noun \"Moon’s\" correctly indicates that there is only one Moon, and it has a gravitational pull."),
      distractors: {
        B: L("Choice B is incorrect because the context requires the singular possessive noun \"Moon’s,\" not the plural noun \"Moons.\""),
        C: L("Choice C is incorrect because the context requires the singular possessive noun \"Moon’s,\" not the plural possessive noun \"Moons’.\""),
        D: L("Choice D is incorrect because the context requires the singular possessive noun \"Moon’s,\" not the singular noun \"Moon.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b260c65a", "b260c65a", 237)
    },
    {
      id: "rw-fs-9f737b2a",
      sourceQuestionId: "9f737b2a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In Death Valley National Park’s Racetrack Playa, a flat, dry lakebed, are 162 rocks—some weighing less than a pound but others almost 700 pounds—that move periodically from place to place, seemingly of their own volition. Racetrack-like trails in the ______ mysterious migration.</p>",
      stem: STEM,
      options: ["playas sediment mark the rock’s", "playa’s sediment mark the rocks", "playa’s sediment mark the rocks’", "playas’ sediment mark the rocks’"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of plural and possessive nouns. The singular possessive noun “playa’s” and the plural possessive noun “rocks’” correctly indicate that the sediment is that of one playa (the Racetrack Playa) and that there are multiple rocks that have mysteriously migrated across the sediment."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the singular possessive noun “playa’s” and the plural possessive noun “rocks’,” not the plural noun “playas” and the singular possessive noun “rock’s.”"),
        B: L("Choice B is incorrect because the context requires the plural possessive noun “rocks’,” not the plural noun “rocks.”"),
        D: L("Choice D is incorrect because the context requires the singular possessive noun “playa’s,” not the plural possessive noun “playas’.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-9f737b2a", "9f737b2a", 240)
    },
    {
      id: "rw-fs-c52652c9",
      sourceQuestionId: "c52652c9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The human brain is primed to recognize faces—so much so that, due to a perceptual tendency called pareidolia, ______ will even find faces in clouds, wooden doors, pieces of fruit, and other faceless inanimate objects. Researcher Susan Magsamen has focused her work on better understanding this everyday phenomenon.</p>",
      stem: STEM,
      options: ["she", "they", "it", "those"],
      answer: "C",
      explanation: L("Choice C is the best answer. \"It\" is a singular pronoun used to stand in for objects. Since the antecedent in this case is the singular noun phrase \"the human brain,\" \"it\" is a perfect pronoun to use here."),
      distractors: {
        A: L("Choice A is incorrect. Although \"she\" is a singular pronoun, it is reserved for people and animals, not objects like \"the human brain.\""),
        B: L("Choice B is incorrect. \"They\" is a plural pronoun, but we need a singular pronoun to represent the antecedent \"the human brain.\""),
        D: L("Choice D is incorrect. \"Those\" is a plural pronoun, but we need a singular pronoun to represent the antecedent \"the human brain.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c52652c9", "c52652c9", 241)
    },
    {
      id: "rw-fs-188f7e3c",
      sourceQuestionId: "188f7e3c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 2016, engineer Vanessa Galvez oversaw the installation of 164 bioswales, vegetated channels designed to absorb and divert stormwater, along the streets of Queens, New York. By reducing the runoff flowing into city sewers, ______</p>",
      stem: STEM,
      options: ["the mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved by bioswales.", "the bioswales have mitigated both street flooding and the resulting pollution of nearby waterways.", "the bioswales’ mitigation of both street flooding and the resulting pollution of nearby waterways has been achieved.", "both street flooding and the resulting pollution of nearby waterways have been mitigated by bioswales."],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “the bioswales” the subject of the sentence and places it immediately after the modifying phrase “By reducing…sewers.” In doing so, this choice clearly establishes that the bioswales—and not another noun in the sentence—are reducing runoff flowing into city sewers."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun phrase “the mitigation…waterways” immediately after the modifying phrase results in unclear modification. The resulting sentence makes it hard to determine what is responsible for “reducing the runoff”: the bioswales or some other noun in the sentence."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “the bioswales’ mitigation…waterways” immediately after the modifying phrase results in unclear modification. The resulting sentence makes it hard to determine what is responsible for “reducing the runoff”: the bioswales or some other noun in the sentence."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase “street flooding and the resulting pollution” immediately after the modifying phrase illogically suggests that the “flooding and pollution” are reducing runoff flowing into city sewers.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-188f7e3c", "188f7e3c", 243)
    },
    {
      id: "rw-fs-36944347",
      sourceQuestionId: "36944347",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Official measurements of the Mississippi River’s length vary: according to the US Geologic Survey, the river is 2,300 miles long, whereas the Environmental Protection Agency records its length as 2,320 miles. This disparity can be explained in part by the fact that rivers such as the Mississippi expand and contract as ______ sediment.</p>",
      stem: STEM,
      options: ["they accumulate", "one accumulates", "it accumulates", "we accumulate"],
      answer: "A",
      explanation: L("Choice A is the best answer. The noun that goes with \"expand and contract\" is \"rivers,\" a plural noun. \"They\" is a third-person plural pronoun, so it can correctly stand in for \"rivers.\""),
      distractors: {
        B: L("Choice B is incorrect. This choice creates a pronoun-antecedent agreement error. \"One\" is a singular pronoun, but the noun that goes with \"expand and contract\" is \"rivers,\" a plural noun."),
        C: L("Choice C is incorrect. This choice creates a pronoun-antecedent agreement error. \"It\" is a singular pronoun, but the noun that goes with \"expand and contract\" is \"rivers,\" a plural noun."),
        D: L("Choice D is incorrect. This choice creates a pronoun- antecedent agreement error. The noun that goes with \"expand and contract\" is the plural noun \"rivers.\" Rivers are not people, so \"we\" can’t be used to stand in for it.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-36944347", "36944347", 244)
    },
    {
      id: "rw-fs-898f182c",
      sourceQuestionId: "898f182c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Richard Spikes was a prolific African American inventor known for his contributions to automotive engineering. Between 1907 and 1946, he patented many inventions, ______ an automobile turn signal, a safety brake, and—most famously—the first automatic gearshift.</p>",
      stem: STEM,
      options: ["included", "includes", "including", "will include"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of nonfinite verb forms within a sentence. The nonfinite present participle \"including\" is correctly used to form a participial phrase that supplements the main clause \"he patented many inventions,\" listing several of Spikes’s patented inventions."),
      distractors: {
        A: L("Choice A is incorrect because the finite past tense verb \"included\" can’t be used in this way to supplement the main clause \"he patented many inventions.\""),
        B: L("Choice B is incorrect because the finite present tense verb \"includes\" can’t be used in this way to supplement the main clause \"he patented many inventions.\""),
        D: L("Choice D is incorrect because the finite future tense verb \"will include\" can’t be used in this way to supplement the main clause \"he patented many inventions.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-898f182c", "898f182c", 247)
    },
    {
      id: "rw-fs-6e5bf3a8",
      sourceQuestionId: "6e5bf3a8",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Even though bats prefer very sweet nectar, the plants that attract them have evolved to produce nectar that is only moderately sweet. A recent study ______ why: making sugar is energy-intensive, and it is more advantageous for plants to make a large amount of low-sugar nectar than a small amount of high-sugar nectar.</p>",
      stem: STEM,
      options: ["explains", "explaining", "having explained", "to explain"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of finite and nonfinite verb forms within a sentence. A main clause requires a finite verb to perform the action of the subject (in this case, “a recent study”), and this choice supplies the finite present tense verb “explains” to indicate that the study explains why plants that attract bats have evolved to produce moderately sweet nectar."),
      distractors: {
        B: L("Choice B is incorrect because the nonfinite participle “explaining” doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because the nonfinite participle “having explained” doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because the nonfinite to- infinitive “to explain” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-6e5bf3a8", "6e5bf3a8", 248)
    },
    {
      id: "rw-fs-7c48a6dd",
      sourceQuestionId: "7c48a6dd",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the late 1960s, inspired in part by the sight of laundry hanging on a clothesline, African American abstract painter Sam Gilliam began to create his iconic “Drape” paintings. He applied bold, saturated hues to large canvases and ______ them from ceilings or walls, causing the drooping fabric to cascade in dramatic loops and curves.</p>",
      stem: STEM,
      options: ["to have suspended", "suspending", "to suspend", "suspended"],
      answer: "D",
      explanation: L("Choice D is the best answer. The past tense of \"suspended\" matches the past tense of \"applied,\" which has the same subject (\"he\") and takes place in the same context: \"He applied…and [he] suspended.\""),
      distractors: {
        A: L("Choice A is incorrect. The perfect infinitive \"to have suspended\" doesn’t match the past tense of \"applied,\" and it can’t serve as a verb on its own. These are both verbs with the same subject and in the same context, so there’s no need to shift tenses."),
        B: L("Choice B is incorrect. The present participle \"suspending\" doesn’t match the past tense of \"applied,\" and it can’t serve as a verb on its own. These are both verbs with the same subject and in the same context, so there’s no need to shift tenses."),
        C: L("Choice C is incorrect. The infinitive \"to suspend\" doesn’t match the past tense of \"applied,\" and it can’t serve as a verb on its own. These are both verbs with the same subject and in the same context, so there’s no need to shift tenses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-7c48a6dd", "7c48a6dd", 251)
    },
    {
      id: "rw-fs-8d53e7a0",
      sourceQuestionId: "8d53e7a0",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Slam poet Elizabeth Acevedo’s debut novel The Poet X, winner of the 2018 National Book Award for Young People’s Literature, is composed of ______ protagonist, fifteen-year-old Xiomara Batista.</p>",
      stem: STEM,
      options: ["poems putatively written by the novel’s", "poem’s putatively written by the novel’s", "poem’s putatively written by the novels’", "poems putatively written by the novels’"],
      answer: "A",
      explanation: L("Choice A is the best answer. Nothing belongs to the “poems” in the sentence, so it should not be possessive—just a simple plural noun. The protagonist does belong to the novel—it’s the protagonist of the novel—so “novel” needs to be a singular possessive noun."),
      distractors: {
        B: L("Choice B is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This choice uses the singular possessive “poem’s,” but the text indicates that it should be the simple plural “poems”: there is more than one poem, and nothing belongs to the poems."),
        C: L("Choice C is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This choice uses the singular possessive “poem’s,” but the text indicates that it should be the simple plural “poems”: there is more than one poem, and nothing belongs to the poems. This choice also uses the plural possessive “novels’,” which is incorrect because there is only one novel."),
        D: L("Choice D is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This choice uses the plural possessive “novels’,” which is incorrect because there is only one novel, so it should be the singular possessive “novel’s.” .")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-8d53e7a0", "8d53e7a0", 254)
    },
    {
      id: "rw-fs-43b88827",
      sourceQuestionId: "43b88827",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In October of 1648, representatives from 96 different parties convened to sign the final treaties of the Peace of Westphalia. The treaties, which brought an end to the Thirty Years’ War, ______ signed in the cities of Osnabrück and Münster, both located in the Holy Roman Empire–controlled region of Westphalia.</p>",
      stem: STEM,
      options: ["were", "is", "was", "has been"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The plural verb “were signed” agrees in number with the plural subject “the treaties.”"),
      distractors: {
        B: L("Choice B is incorrect because the singular verb “is signed” doesn’t agree in number with the plural subject “the treaties.”"),
        C: L("Choice C is incorrect because the singular verb “was signed” doesn’t agree in number with the plural subject “the treaties.”"),
        D: L("Choice D is incorrect because the singular verb “has been signed” doesn’t agree in number with the plural subject “the treaties.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-43b88827", "43b88827", 255)
    },
    {
      id: "rw-fs-9994ae0d",
      sourceQuestionId: "9994ae0d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Artist Yto Barrada’s exhibition Ways to Baffle the Wind incorporates sculptures, textiles, and films. Barrada’s pieces, utilizing elements as disparate as plant-dyed fabrics, wire crab traps filled with stones, and cotton balls dangling above a fan, ______ the ways humans attempt to organize and regulate nature.</p>",
      stem: STEM,
      options: ["explore", "has explored", "explores", "exploring"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The plural verb “explore” agrees in number with the plural subject “Barrada’s pieces.”"),
      distractors: {
        B: L("Choice B is incorrect because the singular verb phrase “has explored” doesn’t agree in number with the plural subject “Barrada’s pieces.”"),
        C: L("Choice C is incorrect because the singular verb “explores” doesn’t agree in number with the plural subject “Barrada’s pieces.”"),
        D: L("Choice D is incorrect because the nonfinite participle “exploring” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-9994ae0d", "9994ae0d", 257)
    },
    {
      id: "rw-fs-99dedf36",
      sourceQuestionId: "99dedf36",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>When a given term—“self-fulfilling prophecies” and “role models” are two well-known examples—is generally accepted and frequently used, ______ susceptible to obliteration by incorporation (OBI). In cases of OBI, widely used terms are rarely, if at all, attributed to the individuals who coined them.</p>",
      stem: STEM,
      options: ["they often become", "these often become", "this often becomes", "it often becomes"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun “it” agrees in number with the singular antecedent “a given term” and clearly indicates that the term becomes susceptible to obliteration by incorporation."),
      distractors: {
        A: L("Choice A is incorrect because the plural pronoun “they” neither agrees in number with the singular antecedent “a given term” nor clearly indicates that the given term—not another plural noun in the sentence, such as “examples”—becomes susceptible to obliteration by incorporation."),
        B: L("Choice B is incorrect because the plural pronoun “these” neither agrees in number with the singular antecedent “a given term” nor clearly indicates that the given term—not another plural noun in the sentence, such as “examples”—becomes susceptible to obliteration by incorporation."),
        C: L("Choice C is incorrect because the singular pronoun “this” is ambiguous in this context, leaving unclear what exactly becomes susceptible to obliteration by incorporation.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-99dedf36", "99dedf36", 258)
    },
    {
      id: "rw-fs-61160f0a",
      sourceQuestionId: "61160f0a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Author Madeline L’Engle, ______ to create a suspenseful tone that draws the reader in, begins her novel A Wrinkle in Time with descriptions of “wraithlike shadows” and “the frenzied lashing of the wind.”</p>",
      stem: STEM,
      options: ["looked", "looks", "is looking", "looking"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite present participle verb “looking” is correctly used to form a subordinate clause that describes the intent behind how L’Engle begins her novel."),
      distractors: {
        A: L("Choice A is incorrect because the finite past tense verb “looked” can’t be used in this way to form a subordinate clause."),
        B: L("Choice B is incorrect because the finite present tense verb “looks” can’t be used in this way to form a subordinate clause."),
        C: L("Choice C is incorrect because the finite present progressive tense verb “is looking” can’t be used in this way to form a subordinate clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-61160f0a", "61160f0a", 259)
    },
    {
      id: "rw-fs-75f49353",
      sourceQuestionId: "75f49353",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Progressive Era in the United States witnessed the rise of numerous Black women’s clubs, local organizations that advocated for racial and gender equality. Among the clubs’ leaders ______ Josephine St. Pierre Ruffin, founder of the Women’s Era Club of Boston.</p>",
      stem: STEM,
      options: ["was", "were", "are", "have been"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested here is subject-verb agreement. The singular verb “was” agrees in number with the singular subject “Josephine St. Pierre Ruffin.”"),
      distractors: {
        B: L("Choice B is incorrect because the plural verb “were” doesn’t agree in number with the singular subject “Josephine St. Pierre Ruffin.”"),
        C: L("Choice C is incorrect because the plural verb “are” doesn’t agree in number with the singular subject “Josephine St. Pierre Ruffin.”"),
        D: L("Choice D is incorrect because the plural verb “have been” doesn’t agree in number with the singular subject “Josephine St. Pierre Ruffin.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-75f49353", "75f49353", 261)
    },
    {
      id: "rw-fs-20a6a4ed",
      sourceQuestionId: "20a6a4ed",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Anthropologist Lívia Barbosa, of the Universidade Federal Fluminense in Brazil, ______ food and sociability in contemporary Brazil—specifically, how foods such as cabidela (a rice and rabbit dish) and churrasco (a barbeque dish) function as central mechanisms in building social relationships, values, and identities.</p>",
      stem: STEM,
      options: ["studies", "are studying", "have studied", "study"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb \"studies\" agrees in number with the singular subject \"anthropologist Lívia Barbosa.\""),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"are studying\" doesn’t agree in number with the singular subject \"anthropologist Lívia Barbosa.\""),
        C: L("Choice C is incorrect because the plural verb \"have studied\" doesn’t agree in number with the singular subject \"anthropologist Lívia Barbosa.\""),
        D: L("Choice D is incorrect because the plural verb \"study\" doesn’t agree in number with the singular subject \"anthropologist Lívia Barbosa.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-20a6a4ed", "20a6a4ed", 262)
    },
    {
      id: "rw-fs-2cb1ee22",
      sourceQuestionId: "2cb1ee22",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In premodern Europe, one could sail from the east coast of England to the Netherlands or France faster than one could travel by land to England’s capital, London. In that era, historian Michael Pye argues in his 2015 book The Edge of the World: A Cultural History of the North Sea and the Transformation of Europe, the North Sea did more to link the various peoples, cultures, and economies on ______ shores than to divide them.</p>",
      stem: STEM,
      options: ["its", "it’s", "they’re", "their"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of possessive determiners. The singular possessive determiner “its” agrees in number with the singular noun “the North Sea” and thus indicates that the shores are those of the North Sea."),
      distractors: {
        B: L("Choice B is incorrect because “it’s” is the contraction for “it is” or “it has,” not a possessive determiner."),
        C: L("Choice C is incorrect because “they’re” is the contraction for “they are,” not a possessive determiner."),
        D: L("Choice D is incorrect because the plural possessive determiner “their” doesn’t agree in number with the singular noun “the North Sea.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2cb1ee22", "2cb1ee22", 263)
    },
    {
      id: "rw-fs-a03008de",
      sourceQuestionId: "a03008de",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The Proto-Nilotic language, common ancestor of fifty-five African languages with similar linguistic properties, ______ like all protolanguages, hypothetical: there’s no direct evidence these ancestral languages actually existed.</p>",
      stem: STEM,
      options: ["is,", "are,", "have been,", "were,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb \"is\" agrees in number with the singular subject \"the Proto-Nilotic language.\""),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"the Proto-Nilotic language.\""),
        C: L("Choice C is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"the Proto-Nilotic language.\""),
        D: L("Choice D is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"the Proto-Nilotic language.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-a03008de", "a03008de", 264)
    },
    {
      id: "rw-fs-c88ba1b7",
      sourceQuestionId: "c88ba1b7",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In the late nineteenth and early twentieth centuries, automobiles were commonly referred to as horseless carriages after the older technology they still resembled. Known as the Brass Era, this period in automotive design is remembered for its grandeur and artistry, its vehicles ______ by collectors for their ornate detailing and gleaming brass fittings.</p>",
      stem: STEM,
      options: ["are highly prized", "had been highly prized", "highly prized", "were highly prized"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms in a sentence. The nonfinite past participle phrase \"highly prized\" is correctly used to form a supplementary element that modifies the main clause \"this…artistry,\" describing memorable features of Brass Era automotive design."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Using the finite present tense verb phrase \"are highly prized\" creates a second main clause in the sentence, and two main clauses can’t be joined in this way with only a comma after \"artistry.\""),
        B: L("Choice B is incorrect because it results in a comma splice. Using the finite past perfect tense verb phrase \"had been highly prized\" creates a second main clause in the sentence, and two main clauses can’t be joined in this way with only a comma after \"artistry.\""),
        D: L("Choice D is incorrect because it results in a comma splice. Using the finite past tense verb phrase \"were highly prized\" creates a second main clause in the sentence, and two main clauses can’t be joined in this way with only a comma after \"artistry.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c88ba1b7", "c88ba1b7", 265)
    },
    {
      id: "rw-fs-fff4c7f4",
      sourceQuestionId: "fff4c7f4",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>American poet Emily Dickinson wrote many of her poems on scraps of paper, but she also took steps to collect these works. From 1858 to around 1864, for example, she copied more than 800 of ______ into forty homemade booklets (known as fascicles).</p>",
      stem: STEM,
      options: ["them", "this", "that", "it"],
      answer: "A",
      explanation: L("Choice A is the best answer. The pronoun \"them\" agrees with the plural antecedents \"poems\" and \"works.\""),
      distractors: {
        B: L("Choice B is incorrect. \"This\" is a singular pronoun, but its antecedents, \"poems\" and \"works,\" are plural."),
        C: L("Choice C is incorrect. \"That\" is a singular pronoun, but its antecedents, \"poems\" and \"works,\" are plural."),
        D: L("Choice D is incorrect. \"It\" is a singular pronoun, but its antecedents, \"poems\" and \"works,\" are plural.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-fff4c7f4", "fff4c7f4", 269)
    },
    {
      id: "rw-fs-c5d39bc7",
      sourceQuestionId: "c5d39bc7",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Scientists believe that, unlike most other species of barnacle, turtle barnacles (Chelonibia testudinari) can dissolve the cement-like secretions they use to attach ______ to a sea turtle shell, enabling the barnacles to move short distances across the shell’s surface.</p>",
      stem: STEM,
      options: ["it", "themselves", "them", "itself"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is pronoun-antecedent agreement. The plural reflexive pronoun “themselves” agrees in number with the plural antecedent “turtle barnacles,” correctly indicating what is attached to a sea turtle shell."),
      distractors: {
        A: L("Choice A is incorrect because the singular pronoun “it” doesn’t agree in number with the plural antecedent “turtle barnacles.”"),
        C: L("Choice C is incorrect because it results in an unclear and confusing sentence. In this context, it’s unclear what the plural pronoun “them” refers to."),
        D: L("Choice D is incorrect because the singular reflexive pronoun “itself” doesn’t agree in number with the plural antecedent “turtle barnacles.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c5d39bc7", "c5d39bc7", 272)
    },
    {
      id: "rw-fs-e2759b92",
      sourceQuestionId: "e2759b92",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Occupying a significant part of modern-day Nigeria, the Kingdom of Benin was one of the major powers in West Africa between the thirteenth and nineteenth centuries. It ______ ruled by Oba Ewuare I from 1440 to 1473.</p>",
      stem: STEM,
      options: ["is", "will be", "has been", "was"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the past tense verb “was ruled” correctly indicates that Oba Ewuare I ruled the Kingdom of Benin in the distant past (from 1440 to 1473). This past tense verb choice is consistent with the other past tense verb (“was”) used to describe the Kingdom of Benin."),
      distractors: {
        A: L("Choice A is incorrect because the present tense verb “is ruled” doesn’t indicate that Oba Ewuare I ruled the Kingdom of Benin in the distant past."),
        B: L("Choice B is incorrect because the future tense verb “will be ruled” doesn’t indicate that Oba Ewuare I ruled the Kingdom of Benin in the distant past."),
        C: L("Choice C is incorrect because the present perfect tense verb “has been ruled” doesn’t indicate that Oba Ewuare I ruled the Kingdom of Benin in the distant past.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e2759b92", "e2759b92", 273)
    },
    {
      id: "rw-fs-5ad2a12c",
      sourceQuestionId: "5ad2a12c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The First Folio, published in 1623, is the first collection of William Shakespeare’s plays. The collection ______ 18 plays that might otherwise have been lost, such as Julius Caesar and Macbeth.</p>",
      stem: STEM,
      options: ["to be including", "including", "to include", "includes"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms within a sentence. A main clause requires a finite (tensed) verb to perform the action of the subject (in this case, \"the collection\"), and this choice supplies the finite present tense verb \"includes\" to indicate what is in the collection."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to be including\" doesn’t supply the main clause with a finite verb."),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"including\" doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to include\" doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-5ad2a12c", "5ad2a12c", 278)
    },
    {
      id: "rw-fs-1448f43f",
      sourceQuestionId: "1448f43f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Unsupervised machine learning is an approach that computer scientists like Nina Miolane use to engineer artificial intelligence technologies. It involves training computer algorithms to organize unlabeled data sets. Multitask learning is another approach. ______ involves training computer models to perform multiple tasks at the same time.</p>",
      stem: STEM,
      options: ["Those", "They", "It", "Some"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun \"it\" agrees in number with the singular antecedent \"multitask learning\" and clearly indicates what multitask learning involves."),
      distractors: {
        A: L("Choice A is incorrect because the plural demonstrative pronoun \"those\" doesn’t agree in number with the singular antecedent \"multitask learning.\""),
        B: L("Choice B is incorrect because the plural pronoun \"they\" doesn’t agree in number with the singular antecedent \"multitask learning.\""),
        D: L("Choice D is incorrect because the indefinite pronoun \"some\" is ambiguous in this context; the resulting sentence leaves unclear what exactly \"involves training computer models.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1448f43f", "1448f43f", 281)
    },
    {
      id: "rw-fs-175df826",
      sourceQuestionId: "175df826",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the 2011 documentary The Barber of Birmingham, civil rights activist James Armstrong recounts how his barbershop in Birmingham, Alabama, ______ as a political hub for members of the Black community during the 1950s.</p>",
      stem: STEM,
      options: ["serving", "having served", "served", "to serve"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms within a sentence. Relative clauses, such as the one beginning with \"how,\" require a finite (tensed) verb, a verb that can function as the main verb of a clause. This choice correctly supplies the clause with the finite past tense verb \"served.\""),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"serving\" doesn’t supply the clause with a finite verb."),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"having served\" doesn’t supply the clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to serve\" doesn’t supply the clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-175df826", "175df826", 282)
    },
    {
      id: "rw-fs-bce9910f",
      sourceQuestionId: "bce9910f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Light of Truth is a bronze and marble sculpture by artist Richard Hunt. It honors civil rights icon Ida B. Wells. The sculpture ______ in a tree-lined plaza in Chicago, just a few blocks from where Wells lived.</p>",
      stem: STEM,
      options: ["are standing", "have been standing", "stands", "were standing"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-verb agreement. The singular verb \"stands\" agrees in number with the singular subject \"sculpture.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are standing\" doesn’t agree in number with the singular subject \"sculpture.\""),
        B: L("Choice B is incorrect because the plural verb \"have been standing\" doesn’t agree in number with the singular subject \"sculpture.\""),
        D: L("Choice D is incorrect because the plural verb \"were standing\" doesn’t agree in number with the singular subject \"sculpture.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-bce9910f", "bce9910f", 283)
    },
    {
      id: "rw-fs-97e7bedc",
      sourceQuestionId: "97e7bedc",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Oyster mushrooms typically get their nutrients from the damp logs on which they grow, but the fungi are also carnivorous, with the ability to kill and consume microscopic worms known as nematodes. As researcher Yen-Ping Hsueh has shown, the mushrooms release a toxin that is deadly to nematodes that ______ in contact with it.</p>",
      stem: STEM,
      options: ["has come", "comes", "is coming", "come"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The plural verb \"come\" agrees in number with the plural subject \"nematodes.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"has come\" doesn’t agree in number with the plural subject \"nematodes.\""),
        B: L("Choice B is incorrect because the singular verb \"comes\" doesn’t agree in number with the plural subject \"nematodes.\""),
        C: L("Choice C is incorrect because the singular verb \"is coming\" doesn’t agree in number with the plural subject \"nematodes.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-97e7bedc", "97e7bedc", 286)
    },
    {
      id: "rw-fs-988c78eb",
      sourceQuestionId: "988c78eb",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Former First Lady of the United States Eleanor Roosevelt and Indian activist and educator Hansa Mehta were instrumental in drafting the United Nations’ Universal Declaration of Human Rights, a document that ______ the basic freedoms to which all people are entitled.</p>",
      stem: STEM,
      options: ["have outlined", "were outlining", "outlines", "outline"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is subject-verb agreement. The singular verb “outlines” agrees in number with the singular subject “document.”"),
      distractors: {
        A: L("Choice A is incorrect because the plural verb “have outlined” doesn’t agree in number with the singular subject “document.”"),
        B: L("Choice B is incorrect because the plural verb “were outlining” doesn’t agree in number with the singular subject “document.”"),
        D: L("Choice D is incorrect because the plural verb “outline” doesn’t agree in number with the singular subject “document.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-988c78eb", "988c78eb", 289)
    },
    {
      id: "rw-fs-28166dc6",
      sourceQuestionId: "28166dc6",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In knot theory (the mathematical study of curved, closed loops), knots are characterized by their crossing numbers—that is, the number of times the knotted thread crosses over itself. The trefoil knot and the figure-eight knot, each with a crossing number below five, ______ among the simplest possible knots with the fewest number of crossings.</p>",
      stem: STEM,
      options: ["was", "are", "has been", "is"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The plural verb \"are\" agrees in number with the plural compound subject \"the trefoil knot and the figure-eight knot.\" The two types of knots joined by \"and\" function as a plural subject and thus require a plural verb."),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"was\" doesn’t agree in number with the plural compound subject \"the trefoil knot and the figure- eight knot.\""),
        C: L("Choice C is incorrect because the singular verb \"has been\" doesn’t agree in number with the plural compound subject \"the trefoil knot and the figure-eight knot.\""),
        D: L("Choice D is incorrect because the singular verb \"is\" doesn’t agree in number with the plural compound subject \"the trefoil knot and the figure-eight knot.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-28166dc6", "28166dc6", 294)
    },
    {
      id: "rw-fs-f40b447c",
      sourceQuestionId: "f40b447c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Featuring jagged peaks of black ink surrounded by hazy swirls of blue and green paint, Zhang Daqian’s 1983 painting Panorama of Mount Lu is inspired by the tradition of qinglü shanshui, a type of Chinese landscape painting ______ by the use of blue and green hues to depict ethereal, otherworldly landscapes.</p>",
      stem: STEM,
      options: ["has been characterized", "will be characterized", "characterized", "is characterized"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite past participle \"characterized\" is correctly used within a supplementary element that modifies the main clause \"Zhang...shanshui,\" defining qinglü shanshui and explaining some of its identifying traits."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. Using the finite present perfect tense verb \"has been characterized\" creates a second main clause in the sentence, and the two main clauses can’t be joined in this way by only the comma before \"a type.\""),
        B: L("Choice B is incorrect because it results in a comma splice. Using the finite future tense verb \"will be characterized\" creates a second main clause in the sentence, and the two main clauses can’t be joined in this way by only the comma before \"a type.\""),
        D: L("Choice D is incorrect because it results in a comma splice. Using the finite present tense verb \"is characterized\" creates a second main clause in the sentence, and the two main clauses can’t be joined in this way by only the comma before \"a type.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f40b447c", "f40b447c", 296)
    },
    {
      id: "rw-fs-7a0d9031",
      sourceQuestionId: "7a0d9031",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In many of her landscape paintings from the 1970s and 1980s, Lebanese American artist Etel Adnan worked to capture the essence of California’s fog-shrouded Mount Tamalpais region through abstraction, using splotches of color to represent the area’s features. Interestingly, the triangle representing the mountain itself ______ among the few defined figures in her paintings.</p>",
      stem: STEM,
      options: ["are", "have been", "were", "is"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject–verb agreement. The singular verb “is” agrees in number with the singular subject “the triangle.”"),
      distractors: {
        A: L("Choice A is incorrect because the plural verb “are” doesn’t agree in number with the singular subject “the triangle.”"),
        B: L("Choice B is incorrect because the plural verb “have been” doesn’t agree in number with the singular subject “the triangle.”"),
        C: L("Choice C is incorrect because the plural verb “were” doesn’t agree in number with the singular subject “the triangle.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-7a0d9031", "7a0d9031", 297)
    },
    {
      id: "rw-fs-d46ac7e7",
      sourceQuestionId: "d46ac7e7",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>A second-generation Japanese American, Wataru Misaka ______ in World War II (1941-45) and won two amateur national basketball championships at the University of Utah when he joined the New York Knicks for the 1947-48 season, becoming the first non-white basketball player in the US’s top professional league.</p>",
      stem: STEM,
      options: ["already served", "was already serving", "already serves", "had already served"],
      answer: "D",
      explanation: L("Choice D is the best answer. Misaka served in World War II before he joined the New York Knicks in 1947. To show that a past occurrence took place before another past occurrence, we need to use “had” + the past tense form of the verb. This is called the past perfect tense."),
      distractors: {
        A: L("Choice A is incorrect. Misaka served in World War II before he joined the Knicks. Both events are in the past, but his service in World War II happened earlier, so we need a verb that makes it clear that his service (and the two national championships) had ended by the time he joined the Knicks."),
        B: L("Choice B is incorrect. “Was already serving” forms the continuous past tense, which we use when we’re showing a past action that was ongoing. Misaka served in World War II before he joined the Knicks. Both events are in the past, but they’re not happening at the same time, so we shouldn’t use the continuous past tense here."),
        C: L("Choice C is incorrect. Misaka served in World War II in the past, so we shouldn’t use the present tense “serves.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-d46ac7e7", "d46ac7e7", 300)
    },
    {
      id: "rw-fs-2b6e1c06",
      sourceQuestionId: "2b6e1c06",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A government body officially known as the Althing, ______</p>",
      stem: STEM,
      options: ["the world’s oldest parliaments include one which first met in 930 CE, Iceland’s.", "Iceland’s parliament is one of the oldest in the world, first meeting in 930 CE.", "the first meeting of one of the oldest parliaments in the world, Iceland’s, was in 930 CE.", "930 CE was the year when Iceland’s parliament, one of the oldest parliaments in the world, first met."],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase \"Iceland’s parliament\" the subject of the sentence and places it immediately after the modifying phrase \"a government body officially known as the Althing.\" In doing so, this choice clearly establishes that Iceland’s parliament—and not another noun in the sentence—is the government body known as the Althing."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun phrase \"the world’s oldest parliaments\" immediately after the modifying phrase illogically suggests that the world’s oldest parliaments are a government body known as the Althing."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase \"the first meeting\" immediately after the modifying phrase illogically suggests that the first meeting of Iceland’s parliament was a government body known as the Althing."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase \"930 CE\" immediately after the modifying phrase illogically suggests that the year 930 CE is a government body known as the Althing.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2b6e1c06", "2b6e1c06", 302)
    },
    {
      id: "rw-fs-3595a991",
      sourceQuestionId: "3595a991",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 1930, Japanese American artist Chiura Obata depicted the natural beauty of Yosemite National Park in two memorable woodcuts: Evening at Carl Inn and Lake Basin in the High Sierra. In 2019, ______ exhibited alongside 150 of Obata’s other works in a single-artist show at the Smithsonian American Art Museum.</p>",
      stem: STEM,
      options: ["it was", "they were", "this was", "some were"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is pronoun–antecedent agreement. The plural pronoun “they” agrees in number with the plural antecedent “woodcuts” and clearly identifies what was exhibited at the Smithsonian American Art Museum."),
      distractors: {
        A: L("Choice A is incorrect because the singular pronoun “it” doesn’t agree in number with the plural antecedent “woodcuts.”"),
        C: L("Choice C is incorrect because the singular pronoun “this” doesn’t agree in number with the plural antecedent “woodcuts.”"),
        D: L("Choice D is incorrect because the plural pronoun “some” is illogical in this context (referring to “some” of two woodcuts).")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-3595a991", "3595a991", 303)
    },
    {
      id: "rw-fs-e31b0056",
      sourceQuestionId: "e31b0056",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Mary Madden of Ohio ______ a fierce advocate of women’s voting rights in the late 1800s. The dedication of Madden and her fellow activists was rewarded in 1920, when the Nineteenth Amendment to the US Constitution guaranteed American women the right to vote.</p>",
      stem: STEM,
      options: ["are", "was", "have been", "were"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The singular verb \"was\" agrees in number with the singular subject \"Mary Madden of Ohio.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"Mary Madden of Ohio.\""),
        C: L("Choice C is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"Mary Madden of Ohio.\""),
        D: L("Choice D is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"Mary Madden of Ohio.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e31b0056", "e31b0056", 306)
    },
    {
      id: "rw-fs-31362d2d",
      sourceQuestionId: "31362d2d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>If simple sugars such as ribose and glycolaldehyde ______ Earth from elsewhere and survived impact—a possibility astrophysicist Nicolle Zellner outlined in a 2020 study—the sugars could have reacted with other molecules that were already present on the planet to form the nucleotides that are the structural components of RNA and DNA.</p>",
      stem: STEM,
      options: ["reach", "had reached", "will reach", "are reaching"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the past perfect verb “had reached” is used correctly to describe a past action that was completed before another action in the past. Specifically, in this hypothetical scenario about the origins of RNA and DNA on Earth, the simple sugars had to have reached Earth before they could react with other molecules on the planet."),
      distractors: {
        A: L("Choice A is incorrect because the present tense verb “reach” doesn’t indicate that the simple sugars reached Earth before reacting with other molecules on the planet."),
        C: L("Choice C is incorrect because the future tense verb “will reach” doesn’t indicate that the simple sugars reached Earth before reacting with other molecules on the planet."),
        D: L("Choice D is incorrect because the present progressive verb “are reaching” doesn’t indicate that the simple sugars reached Earth before reacting with other molecules on the planet.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-31362d2d", "31362d2d", 308)
    },
    {
      id: "rw-fs-d2cf0e11",
      sourceQuestionId: "d2cf0e11",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Inventor John Friedman created a prototype of the first flexible straw by inserting a screw into a paper straw and, using dental floss, binding the straw tightly around the ______ When the floss and screw were removed, the resulting corrugations in the paper allowed the straw to bend easily over the edge of a glass.</p>",
      stem: STEM,
      options: ["screw’s thread’s.", "screws’ threads.", "screw’s threads.", "screws threads’."],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of plural and possessive nouns. The singular possessive noun “screw’s” and the plural noun “threads” correctly indicate that there is only one screw and it has multiple threads."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the plural noun “threads,” not the singular possessive noun “thread’s.”"),
        B: L("Choice B is incorrect because the context requires the singular possessive noun “screw’s,” not the plural possessive noun “screws’.”"),
        D: L("Choice D is incorrect because the context requires the singular possessive noun “screw’s” and the plural noun “threads,” not the plural noun “screws” or the plural possessive noun “threads.’”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-d2cf0e11", "d2cf0e11", 310)
    },
    {
      id: "rw-fs-1d971f75",
      sourceQuestionId: "1d971f75",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Photographer Ansel Adams’s landscape portraits are iconic pieces of American art. However, many of the ______ of landscapes were intended not as art but as marketing; a concessions company at Yosemite National Park had hired Adams to take pictures of the park for restaurant menus and brochures.</p>",
      stem: STEM,
      options: ["photographer’s early photo’s", "photographers early photo’s", "photographer’s early photos", "photographers early photos"],
      answer: "C",
      explanation: L("Choice C is the best answer. There’s only one photographer (Adams), and the photos are his, so the singular possessive \"photographer’s\" is correct. There’s more than one photo, and nothing belongs to the photos, so the simple plural \"photos\" is correct."),
      distractors: {
        A: L("Choice A is incorrect. This choice uses the singular possessive \"photo’s,\" which isn’t correct. There’s more than one photo, and they don’t possess anything, so the noun should be the simple plural \"photos.\""),
        B: L("Choice B is incorrect. This choice uses the simple plural \"photographers\" and the singular possessive \"photo’s,\" which aren’t correct. There’s only one photographer (Adams) and there’s more than one photo."),
        D: L("Choice D is incorrect. This choice uses the simple plural \"photographers,\" which isn’t correct. There’s only one photographer (Adams).")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1d971f75", "1d971f75", 311)
    },
    {
      id: "rw-fs-2bca654a",
      sourceQuestionId: "2bca654a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Forming extensive networks via mycorrhizal association—that is, a symbiotic relationship between plants and fungi—______</p>",
      stem: STEM,
      options: ["it is the entanglement of pine trees’ roots and the fungus Tricholoma matsutake’s fungal hyphae that makes nutrient transport possible.", "the transport of nutrients is possible through the entanglement of pine trees’ roots and the fungus Tricholoma matsutake’s fungal hyphae.", "nutrients can be transported through the entanglement of pine trees’ roots and the fungus Tricholoma matsutake’s fungal hyphae.", "pine trees and the fungus Tricholoma matsutake can transport nutrients through their entangled tree roots and fungal hyphae."],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase \"pine trees and the fungus Tricholoma matsutake\" the subject of the sentence and places it immediately after the modifying phrase \"forming…association.\" In doing so, this choice clearly establishes that the pine trees and fungus—and not another noun in the sentence—are forming the networks."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the it-cleft \"it is\" immediately after the modifying phrase illogically and confusingly suggests that \"it\" is forming extensive networks. Furthermore, it’s not conventional to follow a long introductory modifying element with an it-cleft construction because it results in an unnecessarily wordy and confusing sentence, such as this."),
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of \"the transport of nutrients\" immediately after the modifying phrase illogically suggests that the transport of nutrients is forming extensive networks."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of \"nutrients\" immediately after the modifying phrase illogically suggests that nutrients are forming extensive networks.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-2bca654a", "2bca654a", 312)
    },
    {
      id: "rw-fs-f40ca576",
      sourceQuestionId: "f40ca576",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Each year in the fall, when the weather starts to cool in the northern hemisphere, millions of North American monarch butterflies journey south. Searching for food and warmer habitats, they ______ thousands of miles—from as far north as Canada all the way down to Mexico—on this annual migration.</p>",
      stem: STEM,
      options: ["flew", "were flying", "had flown", "fly"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the present tense verb “fly” is consistent with the other present tense verb ( “journey”) used to describe the butterflies’ yearly migration. Together, these simple present tense verbs correctly indicate that the migration is a current, yearly occurrence."),
      distractors: {
        A: L("Choice A is incorrect. The simple past tense verb “flew” isn’t consistent with the other present tense verb used to describe the butterflies’ yearly migration."),
        B: L("Choice B is incorrect. The past progressive tense verb “were flying” isn’t consistent with the other present tense verb used to describe the butterflies’ yearly migration."),
        C: L("Choice C is incorrect. The past perfect tense verb “had flown” isn’t consistent with the other present tense verb used to describe the butterflies’ yearly migration.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f40ca576", "f40ca576", 313)
    },
    {
      id: "rw-fs-0bcb4417",
      sourceQuestionId: "0bcb4417",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Oglala Lakota poet Layli Long Soldier’s star quilt poems offer an unusually open-ended reading experience. With ______ eight panels of text stitched together in the shape of a traditional eight-pointed Lakota star quilt, the poems present viewers with a seemingly infinite number of ways to read them.</p>",
      stem: STEM,
      options: ["their", "it’s", "they’re", "its"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of possessive determiners. The plural possessive determiner \"their\" agrees in number with the plural noun \"the poems,\" thus indicating that the poems had eight panels of text stitched together in the shape of a traditional eight-pointed Lakota star quilt."),
      distractors: {
        B: L("Choice B is incorrect because \"it’s\" is the contraction for \"it is\" or \"it has,\" not a possessive determiner."),
        C: L("Choice C is incorrect because \"they’re\" is the contraction for \"they are,\" not a possessive determiner."),
        D: L("Choice D is incorrect because the singular possessive determiner \"its\" doesn’t agree in number with the plural noun \"the poems.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-0bcb4417", "0bcb4417", 315)
    },
    {
      id: "rw-fs-94de423a",
      sourceQuestionId: "94de423a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In a rural area along the border between Oklahoma and Texas, amateur astronomers gather each year to observe the night sky at the Okie-Tex Star Party. Like most star parties, Okie-Tex takes place in an area with low light pollution, ______ dark skies and ideal stargazing conditions.</p>",
      stem: STEM,
      options: ["ensuring", "this will ensure", "ensures", "it ensures"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite present participle \"ensuring\" is correctly used to form a supplementary element that modifies the main clause \"Okie-Tex takes place in an area with low light pollution,\" describing the viewing conditions of the star party."),
      distractors: {
        B: L("Choice B is incorrect because it results in a comma splice. The pronoun \"this\" and the finite future tense verb \"will ensure\" would add an additional main clause to this sentence, and the comma after \"pollution\" can’t be used in this way to join two main clauses."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The finite present tense verb \"ensures\" can’t be used in this way to form a supplementary element to modify the main clause."),
        D: L("Choice D is incorrect because it results in a comma splice. The pronoun \"it\" and the finite present tense verb \"ensures\" would add an additional main clause to this sentence, and the comma after \"pollution\" can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-94de423a", "94de423a", 318)
    },
    {
      id: "rw-fs-c8607bdf",
      sourceQuestionId: "c8607bdf",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>“Praise Song for the Day,” Elizabeth Alexander’s 2009 inaugural poem, asserts that “We cross dirt roads and highways…to see what’s on the other side.” Alexander’s use of “we” ______ Americans’ collective efforts and shared desire to seek new opportunity.</p>",
      stem: STEM,
      options: ["evokes", "are evoking", "have evoked", "evoke"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb \"evokes\" agrees in number with the singular subject \"Alexander’s use.\""),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"are evoking\" doesn’t agree in number with the singular subject \"Alexander’s use.\""),
        C: L("Choice C is incorrect because the plural verb \"have evoked\" doesn’t agree in number with the singular subject \"Alexander’s use.\""),
        D: L("Choice D is incorrect because the plural verb \"evoke\" doesn’t agree in number with the singular subject \"Alexander’s use.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c8607bdf", "c8607bdf", 319)
    },
    {
      id: "rw-fs-db2e480a",
      sourceQuestionId: "db2e480a",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>By the time Hawaiian king Kamehameha III ______ the throne, the number of longhorn cattle, first introduced to the islands in 1793, had drastically increased, and so too had the need for paniolo (Hawaiian cowboys) to manage the wild herds that then roamed throughout the volcanic terrain.</p>",
      stem: STEM,
      options: ["ascended", "will ascend", "ascends", "is ascending"],
      answer: "A",
      explanation: L("Choice A is the best answer. \"Ascended\" is in the simple past tense. Since Kamehameha became king in the past, this makes the most sense."),
      distractors: {
        B: L("Choice B is incorrect. \"Will ascend\" is in the future tense, but we wouldn’t know about Kamehameha III’s ascent if it hadn’t happened yet. The information in the sentence, as well as the tense of other verbs, tells us that the events described happened in the past."),
        C: L("Choice C is incorrect. \"Ascends\" is in the simple present tense. However, the information in the sentence, as well as the tense of other verbs, tells us that the events described happened in the past."),
        D: L("Choice D is incorrect. \"Is ascending\" is in the continuous present tense, which we use to show that something is ongoing, but this doesn’t make sense here—the information in the sentence, as well as the tense of other verbs, tells us that the events described happened in the past.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-db2e480a", "db2e480a", 323)
    },
    {
      id: "rw-fs-4c9a2aee",
      sourceQuestionId: "4c9a2aee",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Wanda Diaz-Merced is an astrophysicist who lost her sight when she was young. Diaz-Merced’s condition inspired her to develop software that can translate scientific data into sound. Sound-based tools ______ scientists to detect subtle patterns in data. Such patterns may not be evident in traditional graphs.</p>",
      stem: STEM,
      options: ["has enabled", "enable", "is enabling", "enables"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The plural verb \"enable\" agrees in number with the plural subject \"sound-based tools.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"has enabled\" doesn’t agree in number with the plural subject \"sound-based tools.\""),
        C: L("Choice C is incorrect because the singular verb \"is enabling\" doesn’t agree in number with the plural subject \"sound-based tools.\""),
        D: L("Choice D is incorrect because the singular verb \"enables\" doesn’t agree in number with the plural subject \"sound-based tools.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4c9a2aee", "4c9a2aee", 324)
    },
    {
      id: "rw-fs-b0fb36ad",
      sourceQuestionId: "b0fb36ad",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Unique among animal species, humans use our vocal apparatuses primarily for two separate communicative purposes: to talk and to sing. The question of what cross-cultural traits distinguish these distinct modes, and secondarily what pressures led humans to develop them in the first place, ______ neuropsychologist Daniela Sammler’s 2024 study “Signatures of Speech and Song: ‘Universal’ Links despite Cultural Diversity.”</p>",
      stem: STEM,
      options: ["animates", "have animated", "animate", "animating"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb \"animates\" agrees in number with the singular subject \"question.\""),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"have animated\" doesn’t agree in number with the singular subject \"question.\""),
        C: L("Choice C is incorrect because the plural verb \"animate\" doesn’t agree in number with the singular subject \"question.\""),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite participle \"animating\" doesn’t supply the clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b0fb36ad", "b0fb36ad", 325)
    },
    {
      id: "rw-fs-a30567fd",
      sourceQuestionId: "a30567fd",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Nuhād al-Ḥaddād, known as Fairuz, was one of the most beloved Lebanese singers of the twentieth century. Her broad singing repertoire—which included traditional forms, such as the Arabic qasida and maqam, alongside modern pop and jazz styles—lent Fairuz a timeless, cross- generational appeal, ______ her the moniker “the soul of Lebanon.”</p>",
      stem: STEM,
      options: ["earned", "had earned", "earning", "earn"],
      answer: "C",
      explanation: L("Choice C is the best answer. The word \"earning\" is being used to introduce an additional modifying phrase, which describes how Fairuz’s repertoire lent her cross-generational appeal. When a verb ends in -ing and doesn’t have a helper verb like \"is\" before it, it can be used to modify a noun or verb. This is appropriate here."),
      distractors: {
        A: L("Choice A is incorrect. The underlined verb is being used to introduce additional descriptive information, which is set off from the rest of the sentence by a comma. Because there is no subject here, a finite form of the verb (like \"earned\") creates an error. We need another form of the verb that doesn’t require a subject and can introduce descriptive information."),
        B: L("Choice B is incorrect. The underlined verb is being used to introduce additional descriptive information, which is set off from the rest of the sentence by a comma. Because there is no subject here, a finite form of the verb (like \"had earned\") creates an error. We need another form of the verb that doesn’t require a subject and can introduce descriptive information."),
        D: L("Choice D is incorrect. The underlined verb is being used to introduce additional descriptive information, which is set off from the rest of the sentence by a comma. Because there is no subject here, a finite form of the verb (like \"earn\") creates an error. We need another form of the verb that doesn’t require a subject and can introduce descriptive information.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-a30567fd", "a30567fd", 326)
    },
    {
      id: "rw-fs-f1c5157d",
      sourceQuestionId: "f1c5157d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Established in 1936 by African American novelist Richard Wright, ______ it would become a vital part of the creative movement known as the Chicago Black Renaissance.</p>",
      stem: STEM,
      options: ["the South Side Writers Group provided a valuable forum for Chicago writers to share ideas;", "Chicago writers in the South Side Writers Group had a valuable forum for sharing ideas;", "writers shared ideas at a valuable forum known as the South Side Writers Group in Chicago;", "Chicago was where the South Side Writers Group provided a valuable forum for writers to share ideas;"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “the South Side Writers Group” the subject of the sentence and places it immediately after the modifying phrase “established in 1936 by African American novelist Richard Wright.” In doing so, this choice clearly indicates that the South Side Writers Group—and not another noun in the sentence—was established in 1936 by Richard Wright."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase “Chicago writers” immediately after the modifying phrase illogically suggests that the Chicago writers were established in 1936 by Richard Wright."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “writers” immediately after the modifying phrase illogically suggests that the writers were established in 1936 by Richard Wright."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase “Chicago” immediately after the modifying phrase illogically suggests that Chicago was established in 1936 by Richard Wright.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f1c5157d", "f1c5157d", 328)
    },
    {
      id: "rw-fs-96a904c5",
      sourceQuestionId: "96a904c5",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The musical scores of Japanese composer Hiroyuki Sawano are famous for their mysterious titles. Laden with emojis and seemingly meaningless words, and driven largely by Sawano’s “personal feeling and mood,” ______</p>",
      stem: STEM,
      options: ["the listener can approach each piece free from expectations because of the titles.", "the titles allow the listener to approach each piece free from expectations.", "each piece can be approached by the listener free from expectations because of the titles.", "the listener’s approach to each piece because of the titles can be free from expectations."],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “the titles” the subject of the sentence and places it immediately after the modifying phrases “laden with emojis and seemingly meaningless words, and driven largely by Sawano’s ‘personal feeling and mood.’” In doing so, this choice clearly establishes that the titles—and not another noun in the sentence —are being described as laden with emojis and driven by Sawano’s personal feeling."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of “the listener” immediately after the modifying phrases illogically suggests that the listener, rather than the titles, is laden with emojis and driven by Sawano’s personal feeling."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of “each piece” (i.e., musical score) immediately after the modifying phrases illogically suggests that the pieces, rather than the titles of the pieces, are laden with emojis and driven by Sawano’s personal feeling."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of “the listener’s approach” immediately after the modifying phrases illogically suggests that the listener’s approach, rather than the titles, is laden with emojis and driven by Sawano’s personal feeling.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-96a904c5", "96a904c5", 329)
    },
    {
      id: "rw-fs-329255db",
      sourceQuestionId: "329255db",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Bengali author Toru Dutt’s A Sheaf Gleaned in French Fields (1876), a volume of English translations of French poems, ______ scholars’ understanding of the transnational and multilingual contexts in which Dutt lived and worked.</p>",
      stem: STEM,
      options: ["has enhanced", "are enhancing", "have enhanced", "enhance"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb “has enhanced” agrees in number with the singular subject “A Sheaf Gleaned in French Fields,” which is the title of a book of poems."),
      distractors: {
        B: L("Choice B is incorrect because the plural verb “are enhancing” doesn’t agree in number with the singular subject “A Sheaf Gleaned in French Fields.”"),
        C: L("Choice C is incorrect because the plural verb “have enhanced” doesn’t agree in number with the singular subject “A Sheaf Gleaned in French Fields.”"),
        D: L("Choice D is incorrect because the plural verb “enhance” doesn’t agree in number with the singular subject “A Sheaf Gleaned in French Fields.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-329255db", "329255db", 331)
    },
    {
      id: "rw-fs-aa443c4b",
      sourceQuestionId: "aa443c4b",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Recent pollen analyses of the Aran Islands have led some researchers to propose that the now treeless islands were once wooded. This hypothesis ______ that certain trees, such as P . sylvestris, survived without interruption or human intervention throughout the Holocene cannot stand, researchers Michael O’Connell and Karen Molloy counter, unless other explanations can first be ruled out.</p>",
      stem: STEM,
      options: ["suggesting", "suggested", "suggests", "has suggested"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite present participle \"suggesting\" is correctly used to form a restrictive participial phrase (\"suggesting...Holocene\") within the main clause (\"This hypothesis...cannot stand...\"). This participial phrase functions as part of the sentence’s subject (\"This...Holocene\"), providing essential identifying information about what the hypothesis states—namely, that certain trees survived without interruption or human intervention throughout the Holocene."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The finite verb \"suggested\" can’t be used in this way within the subject of the sentence."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The finite verb \"suggests\" can’t be used in this way within the subject of the sentence."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite verb \"has suggested\" can’t be used in this way within the subject of the sentence.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-aa443c4b", "aa443c4b", 336)
    },
    {
      id: "rw-fs-42cc9236",
      sourceQuestionId: "42cc9236",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>If you try on one of artist Nick Cave’s signature Soundsuits, you can expect to swish, rustle, or clang every time you move. Cave makes his suits out of found objects, everything from ceramic birds to broken record players. He carefully considers the sound an object makes before using ______ in a suit.</p>",
      stem: STEM,
      options: ["this", "that", "these", "it"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested here is pronoun-antecedent agreement. The singular pronoun \"it\" agrees in number with the singular antecedent \"object.\""),
      distractors: {
        A: L("Choice A is incorrect. The singular pronoun \"this\" is used to refer to a specific thing, but here there is no specific object being referred to. Instead, the sentence is referring back to a hypothetical object that Cave might use in a Soundsuit."),
        B: L("Choice B is incorrect. The singular pronoun \"that\" is used to refer to a specific thing, but here there is no specific object being referred to. Instead, the sentence is referring back to a hypothetical object that Cave might use in a Soundsuit."),
        C: L("Choice C is incorrect because the plural pronoun \"these\" doesn’t agree in number with the singular antecedent \"object.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-42cc9236", "42cc9236", 342)
    },
    {
      id: "rw-fs-81ac953e",
      sourceQuestionId: "81ac953e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1899, Swedish chemist Svante Arrhenius developed an equation to answer a long-standing question: why do chemical reactions speed up at higher temperatures? The Arrhenius equation, named for its creator, ______ an important concept in modern chemistry.</p>",
      stem: STEM,
      options: ["have remained", "remain", "remains", "are remaining"],
      answer: "C",
      explanation: L("Choice C is the best answer. This choice uses the singular verb \"remains\" to match the singular subject \"equation.\""),
      distractors: {
        A: L("Choice A is incorrect. The singular noun \"equation\" doesn’t match with the plural verb conjugation \"have remained.\""),
        B: L("Choice B is incorrect. The singular noun \"equation\" doesn’t match with the plural verb conjugation \"remain.\""),
        D: L("Choice D is incorrect. The singular noun \"equation\" doesn’t match with the plural verb conjugation \"are remaining.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-81ac953e", "81ac953e", 344)
    },
    {
      id: "rw-fs-b32eab9f",
      sourceQuestionId: "b32eab9f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Increased gender diversity is revitalizing the field of economics, according to Harvard’s Claudia Goldin. The trailblazing accomplishments of Goldin, winner of the 2023 Nobel Prize in Economics for her work on women in the labor force, ______ to the value of scholars of diverse backgrounds in spurring research into previously unexplored, but vitally important, topics.</p>",
      stem: STEM,
      options: ["attests", "has attested", "is attesting", "attest"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The plural verb \"attest\" agrees in number with the plural subject \"trailblazing accomplishments.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"attests\" doesn’t agree in number with the plural subject \"trailblazing accomplishments.\""),
        B: L("Choice B is incorrect because the singular verb \"has attested\" doesn’t agree in number with the plural subject \"trailblazing accomplishments.\""),
        C: L("Choice C is incorrect because the singular verb \"is attesting\" doesn’t agree in number with the plural subject \"trailblazing accomplishments.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b32eab9f", "b32eab9f", 345)
    },
    {
      id: "rw-fs-50801257",
      sourceQuestionId: "50801257",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1994, almost 200 years after the death of Wang Zhenyi, the International Astronomical ______ the contributions of the barrier-breaking 18th- century astronomer and author of “Dispute of the Procession of the Equinoxes,” naming a crater on Venus after her.</p>",
      stem: STEM,
      options: ["Union would finally acknowledge", "Union to finally acknowledge", "Union, having finally acknowledged", "Union, finally acknowledging"],
      answer: "A",
      explanation: L("Choice A is the best answer. It’s the only choice that offers a form of the verb “acknowledge” that can go with the subject “International Astronomical Union” to make a complete sentence. This might seem like an odd use of “would,” but when speaking from a point of view in the past, we can actually use “would” to express something that happened later. That’s the case here: 200 years after Wang Zhenyi’s death, the IAU would finally acknowledge her contributions."),
      distractors: {
        B: L("Choice B is incorrect. This choice creates a sentence fragment. There’s no main verb elsewhere in the sentence, so we need a form of the verb “acknowledge” that can go with the subject “the International Astronomical Union” and serve as that main verb. “To acknowledge” can’t do that."),
        C: L("Choice C is incorrect. This choice creates a sentence fragment. There’s no main verb elsewhere in the sentence, so we need a form of the verb “acknowledge” that can go with the subject “the International Astronomical Union” and serve as that main verb. “Having acknowledged” can’t do that."),
        D: L("Choice D is incorrect. This choice creates a sentence fragment. There’s no main verb elsewhere in the sentence, so we need a form of the verb “acknowledge” that can go with the subject “the International Astronomical Union” and serve as that main verb. The “-ing” form can’t do that.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-50801257", "50801257", 346)
    },
    {
      id: "rw-fs-028752cd",
      sourceQuestionId: "028752cd",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The Dust Bowl was a period of severe drought that plagued the Great Plains of the US during the 1930s. During this time, dust storms ______ over 100 million acres of land. They even reached as far east as New York City.</p>",
      stem: STEM,
      options: ["are affecting", "will have affected", "will affect", "affected"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense in a sentence. In this choice, the past tense verb \"affected,\" used in conjunction with the phrase \"during this time,\" correctly indicates that the dust storms occurred in the 1930s."),
      distractors: {
        A: L("Choice A is incorrect because the present progressive tense verb \"are affecting\" doesn’t indicate that the dust storms occurred in the 1930s."),
        B: L("Choice B is incorrect because the future perfect tense verb \"will have affected\" doesn’t indicate that the dust storms occurred in the 1930s."),
        C: L("Choice C is incorrect because the future tense verb \"will affect\" doesn’t indicate that the dust storms occurred in the 1930s.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-028752cd", "028752cd", 347)
    },
    {
      id: "rw-fs-c9a677e9",
      sourceQuestionId: "c9a677e9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In his 2011 book, historian Sebouh David Aslanian quantifies the reading patterns of early modern Armenian merchants from New Julfa. Aslanian’s macroanalysis ______ nearly 1,000 book titles published between 1512 and 1800 shows not only the steady popularity of religious texts but also a broadening interest in secular books, especially those on history and geography.</p>",
      stem: STEM,
      options: ["examined", "examines", "had examined", "examining"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms within a sentence. The sentence’s subject is “Aslanian’s macroanalysis,” and its finite main verb is “shows.” This choice correctly uses the nonfinite present participle “examining” to form an integrated participial phrase (“examining...1800”) that describes the macroanalysis, indicating what it examined."),
      distractors: {
        A: L("Choice A is incorrect because using the finite verb “examined” creates an ungrammatical sentence. The sentence already has the finite main verb “shows,” so “examined” can’t also function as a second main verb here without additional punctuation or conjunctions."),
        B: L("Choice B is incorrect because using the finite verb “examines” creates an ungrammatical sentence. The sentence already has the finite main verb “shows,” so “examines” can’t also function as a second main verb here without additional punctuation or conjunctions."),
        C: L("Choice C is incorrect because using the finite verb “had examined” creates an ungrammatical sentence. The sentence already has the finite main verb “shows,” so “had examined” can’t also function as a second main verb here without additional punctuation or conjunctions.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-c9a677e9", "c9a677e9", 348)
    },
    {
      id: "rw-fs-a14eef71",
      sourceQuestionId: "a14eef71",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>In 2015, a team led by materials scientists Anirudha Sumant and Diana Berman succeeded in reducing the coefficient of friction (COF) between two surfaces to the lowest possible level—superlubricity. A nearly frictionless (and, as its name suggests, extremely slippery) state, ______</p>",
      stem: STEM,
      options: ["when their COF drops below 0.01, two surfaces reach superlubricity.", "two surfaces, when their COF drops below 0.01, reach superlubricity.", "reaching superlubricity occurs when two surfaces’ COF drops below 0.01.", "superlubricity is reached when two surfaces’ COF drops below 0.01."],
      answer: "D",
      explanation: L("Choice D is the best answer. The subject of the modifier “a nearly frictionless state” is “superlubricity.” Subject-modifier placement requires a modifier and its subject to be next to one another, so “superlubricity” must be the first word in the missing clause."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a subject-modifier placement error. The subject of the modifier “a nearly frictionless state” is “superlubricity.” Subject-modifier placement requires a modifier and its subject to be next to one another, so “superlubricity” must be the first word in the missing clause."),
        B: L("Choice B is incorrect. This choice creates a subject-modifier placement error. The subject of the modifier “a nearly frictionless state” is “superlubricity.” Subject-modifier placement requires a modifier and its subject to be next to one another, so “superlubricity” must be the first word in the missing clause."),
        C: L("Choice C is incorrect. This choice creates a subject-modifier placement error. The subject of the modifier “a nearly frictionless state” is “superlubricity.” Subject-modifier placement requires a modifier and its subject to be next to one another, so “superlubricity” must be the first word in the missing clause.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-a14eef71", "a14eef71", 350)
    },
    {
      id: "rw-fs-5fd86f4b",
      sourceQuestionId: "5fd86f4b",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>The ghazal, a poetic form originating in seventh-century Arabic poetry, has an intricate structure. The twentieth-century Kashmiri American poet Agha Shahid Ali explains that each one of a ghazal’s couplets, while adhering to the patterns of rhyme (qafia) and refrain (radif) established in the poem’s opening lines (matla), ______ thematically and logically autonomous, resulting in a poem with “a stringently formal disunity.”</p>",
      stem: STEM,
      options: ["is", "were", "have been", "are"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. The singular verb \"is\" agrees in number with the singular subject \"each one of a ghazal’s couplets.\" While the prepositional phrase \"of a ghazal’s couplets\" within the subject contains a plural noun, the head of the subject (\"each one\") is singular, indicating that each individual couplet (not the couplets as a group) is \"thematically and logically autonomous,\" or self-standing."),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"each one of a ghazal’s couplets.\""),
        C: L("Choice C is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"each one of a ghazal’s couplets.\""),
        D: L("Choice D is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"each one of a ghazal’s couplets.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-5fd86f4b", "5fd86f4b", 351)
    },
    {
      id: "rw-fs-6205f7e4",
      sourceQuestionId: "6205f7e4",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A worker cooperative is a business that is owned and operated by its workers. This model stands in contrast to traditional models in which a smaller group of owners controls a company. Because the profits made by a cooperative are shared by all workers—who are also owners—the workers ______ directly from its success.</p>",
      stem: STEM,
      options: ["benefit", "benefited", "were benefiting", "had benefited"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the present tense verb “benefit” is consistent with the other present tense verbs (“is,” “stands,” and “are shared”) used to describe worker cooperatives and how they function."),
      distractors: {
        B: L("Choice B is incorrect because the past tense verb “benefited” isn’t consistent with the other present tense verbs used to describe worker cooperatives and how they function."),
        C: L("Choice C is incorrect because the past progressive tense verb “were benefiting” isn’t consistent with the other present tense verbs used to describe worker cooperatives and how they function."),
        D: L("Choice D is incorrect because the past perfect tense verb “had benefited” isn’t consistent with the other present tense verbs used to describe worker cooperatives and how they function.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-6205f7e4", "6205f7e4", 355)
    },
    {
      id: "rw-fs-7c766ceb",
      sourceQuestionId: "7c766ceb",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A popular suite of mapping and spatial analysis software, ArcGIS enables cartographers like Karachi Cartography founder Namra Khalid ______ maps by analyzing and arranging raw geospatial data.</p>",
      stem: STEM,
      options: ["create", "to create", "creating", "created"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite to-infinitive verb “to create” is correctly used to form a subordinate clause that expresses how ArcGIS facilitates the creation of maps (by analyzing and arranging certain data)."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The finite verb “create” can’t be used in this way to form a subordinate clause that expresses how ArcGIS facilitates the creation of maps."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite participle “creating” can’t be used in this way to form a subordinate clause that expresses how ArcGIS facilitates the creation of maps."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite verb “created” can’t be used in this way to form a subordinate clause that expresses how ArcGIS facilitates the creation of maps.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-7c766ceb", "7c766ceb", 356)
    },
    {
      id: "rw-fs-b85c19ed",
      sourceQuestionId: "b85c19ed",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>The violins handmade in the seventeenth century by Italian craftsman Antonio Stradivari have been celebrated as some of the finest in the world. In close collaboration with musicians, Stradivari introduced changes to the shape of a traditional violin, flattening some of the instrument’s curves and making ______ lighter overall.</p>",
      stem: STEM,
      options: ["those", "one", "them", "it"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is pronoun–antecedent agreement. The singular pronoun “it” agrees in number with the singular antecedent “violin” and thus indicates that the traditional violin (and not its curves) was made lighter."),
      distractors: {
        A: L("Choice A is incorrect because the plural pronoun “those” doesn’t agree in number with the singular antecedent “violin.”"),
        B: L("Choice B is incorrect because the singular pronoun “one” is ambiguous in this context; the resulting sentence leaves unclear what Stradivari made lighter."),
        C: L("Choice C is incorrect because the plural pronoun “them” doesn’t agree in number with the singular antecedent “violin.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b85c19ed", "b85c19ed", 359)
    },
    {
      id: "rw-fs-505054e3",
      sourceQuestionId: "505054e3",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In the eastern Chinese city of Suzhou, known as a hub for silk manufacturing, a unique tradition of embroidery ______ back over two thousand years—one that includes iconic double-sided stitching with different images on each side—remains popular with modern audiences, preserving the city’s cultural heritage.</p>",
      stem: STEM,
      options: ["dates", "date", "dating", "has dated"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms within a sentence. The sentence’s subject is “a unique tradition of embroidery,” and its finite main verb is “remains.”This choice correctly uses the nonfinite present participle “dating” to form an integrated participial phrase (“dating...years”) that modifies the subject, providing additional information about how far back the tradition goes."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. Using the finite present tense verb “dates” creates a second finite verb in the main clause, which already has the finite verb “remains” as its main verb."),
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. Using the finite present tense verb “date” creates a second finite verb in the main clause, which already has the finite verb “remains” as its main verb. Furthermore, the plural verb “date” doesn’t agree in number with the singular subject, “a unique tradition of embroidery.”"),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. Using the finite present perfect tense verb “has dated” creates a second finite verb in the main clause, which already has the finite verb “remains” as its main verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-505054e3", "505054e3", 362)
    },
    {
      id: "rw-fs-18382e67",
      sourceQuestionId: "18382e67",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In Marisol’s 1968 sculpture Mi Mama y Yo, gone are the types of pop culture references that made the Parisian-born Venezuelan American artist a star at the height of the pop art movement. In ______ place is a far more personal subject: a sculptural depiction of the artist as a young girl with her mother.</p>",
      stem: STEM,
      options: ["its", "they’re", "their", "it’s"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of possessive determiners. The plural possessive determiner \"their\" agrees in number with the plural noun \"types\" and thus indicates that the more personal subject matter of Marisol’s 1968 sculpture takes the place of those types of pop culture references that made Marisol a star."),
      distractors: {
        A: L("Choice A is incorrect because the singular possessive determiner \"its\" doesn’t agree in number with the plural noun \"types.\""),
        B: L("Choice B is incorrect because \"they’re\" is the contraction for \"they are,\" not a possessive determiner."),
        D: L("Choice D is incorrect because \"it’s\" is the contraction for \"it is\" or \"it has,\" not a possessive determiner.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-18382e67", "18382e67", 363)
    },
    {
      id: "rw-fs-56770dda",
      sourceQuestionId: "56770dda",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In his 1963 exhibition Exposition of Music—Electronic Television, Korean American artist Nam June Paik showed how television images could be manipulated to express an artist’s perspective. Today, Paik ______ considered the first video artist.</p>",
      stem: STEM,
      options: ["will be", "had been", "was", "is"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the present tense verb \"is,\" used in conjunction with the word \"today,\" correctly indicates that Paik is currently considered the first video artist."),
      distractors: {
        A: L("Choice A is incorrect because the future tense verb \"will be\" doesn’t indicate that Paik is currently considered the first video artist."),
        B: L("Choice B is incorrect because the past perfect tense verb \"had been\" doesn’t indicate that Paik is currently considered the first video artist."),
        C: L("Choice C is incorrect because the past tense verb \"was\" doesn’t indicate that Paik is currently considered the first video artist.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-56770dda", "56770dda", 364)
    },
    {
      id: "rw-fs-6174a5b6",
      sourceQuestionId: "6174a5b6",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Many folktales that originate in the Czech language start with a phrase that roughly translates to “there was, there was not.” Many tales that originate in English use “once upon a time.” Such phrases, known as story starters, ______ from language to language.</p>",
      stem: STEM,
      options: ["vary", "has varied", "varies", "is varying"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The plural verb “vary” agrees in number with the plural subject “such phrases.” The supplementary phrase “known as story starters,” set off by commas, doesn’t change the subject’s number."),
      distractors: {
        B: L("Choice B is incorrect. The singular verb phrase “has varied” doesn’t agree in number with the plural subject “such phrases.”"),
        C: L("Choice C is incorrect. The singular verb “varies” doesn’t agree in number with the plural subject “such phrases.”"),
        D: L("Choice D is incorrect. The singular verb phrase “is varying” doesn’t agree in number with the plural subject “such phrases.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-6174a5b6", "6174a5b6", 366)
    },
    {
      id: "rw-fs-02913383",
      sourceQuestionId: "02913383",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>“He was just the man for such a place, and it was just the place for such a man.” This line is from Frederick Douglass’s autobiography Narrative of the Life of Frederick Douglass (1845). It’s an example of antimetabole, a writing technique that ______ emphasis by repeating a statement in a reversed order.</p>",
      stem: STEM,
      options: ["create", "are creating", "have created", "creates"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"creates\" agrees in number with the singular subject \"technique.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"create\" doesn’t agree in number with the singular subject \"technique.\""),
        B: L("Choice B is incorrect because the plural verb \"are creating\" doesn’t agree in number with the singular subject \"technique.\""),
        C: L("Choice C is incorrect because the plural verb \"have created\" doesn’t agree in number with the singular subject \"technique.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-02913383", "02913383", 368)
    },
    {
      id: "rw-fs-e92a7ad3",
      sourceQuestionId: "e92a7ad3",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In the Inca Empire (1438–1533), ayllus ______ family clans that ranged in size from small groups to thousands of people.</p>",
      stem: STEM,
      options: ["is", "was", "has been", "were"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The plural verb \"were\" agrees in number with the plural subject \"ayllus,\" which are described as plural \"family clans.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"is\" doesn’t agree in number with the plural subject \"ayllus.\""),
        B: L("Choice B is incorrect because the singular verb \"was\" doesn’t agree in number with the plural subject \"ayllus.\""),
        C: L("Choice C is incorrect because the singular verb \"has been\" doesn’t agree in number with the plural subject \"ayllus.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e92a7ad3", "e92a7ad3", 369)
    },
    {
      id: "rw-fs-ac7b8d04",
      sourceQuestionId: "ac7b8d04",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Tracy Fullerton’s Walden, a game, an unlikely fusion of the writings of nineteenth-century transcendentalist Henry David Thoreau with today’s open-world video games, ______ players to explore a digital version of Walden Pond, the idyllic natural setting featured in Thoreau’s book Walden.</p>",
      stem: STEM,
      options: ["invites", "invite", "are inviting", "have invited"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb “invites” agrees in number with the singular subject “Tracy Fullerton’s Walden, a game.”"),
      distractors: {
        B: L("Choice B is incorrect because the plural verb “invite” doesn’t agree in number with the singular subject “Tracy Fullerton’s Walden, a game.”"),
        C: L("Choice C is incorrect because the plural verb “are inviting” doesn’t agree in number with the singular subject “Tracy Fullerton’s Walden, a game.”"),
        D: L("Choice D is incorrect because the plural verb “have invited” doesn’t agree in number with the singular subject “Tracy Fullerton’s Walden, a game.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-ac7b8d04", "ac7b8d04", 371)
    },
    {
      id: "rw-fs-8a9d2f4e",
      sourceQuestionId: "8a9d2f4e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Researchers studying the “terra-cotta army,” the thousands of life-size statues of warriors found interred near the tomb of Emperor Qin Shi Huang of China, were shocked to realize that the shape of each statue’s ears, like the shape of each person’s ears, ______ unique.</p>",
      stem: STEM,
      options: ["are", "is", "were", "have been"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The singular verb \"is\" agrees in number with the singular subject \"the shape.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are\" doesn’t agree in number with the singular subject \"the shape.\""),
        C: L("Choice C is incorrect because the plural verb \"were\" doesn’t agree in number with the singular subject \"the shape.\""),
        D: L("Choice D is incorrect because the plural verb \"have been\" doesn’t agree in number with the singular subject \"the shape.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-8a9d2f4e", "8a9d2f4e", 372)
    },
    {
      id: "rw-fs-576b2c70",
      sourceQuestionId: "576b2c70",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>A member of the Cherokee Nation, Mary Golda Ross is renowned for her contributions to NASA’s Planetary Flight Handbook, which ______ detailed mathematical guidance for missions to Mars and Venus.</p>",
      stem: STEM,
      options: ["provided", "having provided", "to provide", "providing"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of finite verbs in a relative clause. Relative clauses, such as the one beginning with “which,” require a finite verb, a verb that can function as the main verb of a clause. This choice correctly supplies the clause with the finite past tense verb “provided.”"),
      distractors: {
        B: L("Choice B is incorrect because the non-finite participle “having provided” doesn’t supply the clause with a finite verb."),
        C: L("Choice C is incorrect because the non-finite to-infinitive “to provide” doesn’t supply the clause with a finite verb."),
        D: L("Choice D is incorrect because the non-finite participle “providing” doesn’t supply the clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-576b2c70", "576b2c70", 373)
    },
    {
      id: "rw-fs-dfbf5d33",
      sourceQuestionId: "dfbf5d33",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>In 1453, English King Henry VI became unfit to rule after falling gravely ill. As a result, Parliament appointed Richard, Third Duke of York, who had a strong claim to the English throne, to rule as Lord Protector. Upon recovering two years later, ______ forcing an angered Richard from the royal court and precipitating a series of battles later known as the Wars of the Roses.</p>",
      stem: STEM,
      options: ["Henry resumed his reign,", "the reign of Henry resumed,", "Henry’s reign resumed,", "it was Henry who resumed his reign,"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-modifier placement. This choice ensures that the introductory phrase “upon recovering two years later” appears immediately before the noun it modifies (“Henry”), clearly establishing that Henry recovered two years later."),
      distractors: {
        B: L("Choice B is incorrect because it results in a dangling modifier. The placement of the noun phrase “the reign of Henry” immediately after the introductory phrase illogically suggests that the reign of Henry recovered two years later."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the noun phrase “Henry’s reign” immediately after the introductory phrase illogically suggests that Henry’s reign recovered two years later."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the function word “it” immediately after the introductory phrase illogically suggests that “it” recovered two years later.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-dfbf5d33", "dfbf5d33", 376)
    },
    {
      id: "rw-fs-cf08e2fd",
      sourceQuestionId: "cf08e2fd",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>From 1912 to 1951, Charlotta Bass owned and operated the newspaper The California Eagle. While it was under Bass’s leadership, The Eagle ______ one of the US’s most influential Black-owned newspapers.</p>",
      stem: STEM,
      options: ["will become", "became", "is becoming", "to become"],
      answer: "B",
      explanation: L("Choice B is the best answer. The conventions being tested are the use of verbs to express tense and the use of verb forms within a sentence. In this choice, the past tense verb \"became\" is consistent with the other past tense verbs (\"owned,\" \"operated,\" and \"was\") used to indicate that, at a period of time in the past, Bass’s leadership resulted in her newspaper becoming one of the most influential Black-owned newspapers in the US. In addition, \"became\" supplies the main clause with a finite (tensed) verb, which is required to perform the action of the subject (in this case, \"The Eagle\")."),
      distractors: {
        A: L("Choice A is incorrect because the future tense verb \"will become\" isn’t consistent with the other past tense verbs used to discuss Bass and her newspaper."),
        C: L("Choice C is incorrect because the present progressive verb \"is becoming\" isn’t consistent with the other past tense verbs used to discuss Bass and her newspaper."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive \"to become\" doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-cf08e2fd", "cf08e2fd", 377)
    },
    {
      id: "rw-fs-ec08463d",
      sourceQuestionId: "ec08463d",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Botanists recognize over fifty different species of sunflower. One species, the silverleaf sunflower, ______ both an early-flowering ecotype that tends to grow in coastal areas and a late-flowering ecotype that grows inland.</p>",
      stem: STEM,
      options: ["having included", "including", "to include", "includes"],
      answer: "D",
      explanation: L("Choice D is the best answer. This verb needs to function as the main verb in the sentence, with the subject “one species,” so it needs to be conjugated. This choice gives us the singular present tense “includes,” which is the only conjugated form of the verb among the choices."),
      distractors: {
        A: L("Choice A is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This verb needs to function as the main verb in the sentence, with the subject “one species,” so it needs to be conjugated. “Having included” is a participle form of the verb: it’s not conjugated and doesn’t function like a normal verb."),
        B: L("Choice B is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This verb needs to function as the main verb in the sentence, with the subject “one species,” so it needs to be conjugated. “Including” is the gerund form of the verb: it’s not conjugated and doesn’t function like a normal verb."),
        C: L("Choice C is incorrect. This doesn’t complete the text in a way that conforms to the conventions of Standard English. This verb needs to function as the main verb in the sentence, with the subject “one species,” so it needs to be conjugated. “To include” is the infinitive form of the verb: it’s not conjugated.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-ec08463d", "ec08463d", 381)
    },
    {
      id: "rw-fs-4a90a978",
      sourceQuestionId: "4a90a978",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1990, California native and researcher Ellen Ochoa left her position as chief of the Intelligent Systems Technology Branch at a NASA research center ______ the space agency’s astronaut training program.</p>",
      stem: STEM,
      options: ["to join", "is joining", "joined", "joins"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of nonfinite verb forms in a sentence. The nonfinite to-infinitive verb \"to join\" is correctly used to form a subordinate clause that expresses why Ochoa left her position (to join the training program)."),
      distractors: {
        B: L("Choice B is incorrect because the finite verb \"is joining\" can’t be used in this way to indicate Ochoa’s action of joining the training program. A conjunction such as \"and\" would be needed to coordinate \"is joining\" with the previous finite verb, \"left.\""),
        C: L("Choice C is incorrect because the finite verb \"joined\" can’t be used in this way to indicate Ochoa’s action of joining the training program. A conjunction such as \"and\" would be needed to coordinate \"joined\" with the previous finite verb, \"left.\""),
        D: L("Choice D is incorrect because the finite verb \"joins\" can’t be used in this way to indicate Ochoa’s action of joining the training program. A conjunction such as \"and\" would be needed to coordinate \"joins\" with the previous finite verb, \"left.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4a90a978", "4a90a978", 383)
    },
    {
      id: "rw-fs-59e41600",
      sourceQuestionId: "59e41600",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Why are Rome’s famous concrete structures, such as the Colosseum, still standing after 2,000-plus years, when modern concrete may not even last for fifty? Scientists ______ that the secret to Roman concrete’s durability was its unique blend of ingredients, which included volcanic ash and seawater.</p>",
      stem: STEM,
      options: ["explain", "having explained", "explaining", "to explain"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. The main clause of a sentence requires a finite (tensed) verb, and this choice supplies the finite present tense verb “explain” to indicate what the scientists do."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The nonfinite participle “having explained” doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite participle “explaining” doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The nonfinite to-infinitive “to explain” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-59e41600", "59e41600", 384)
    },
    {
      id: "rw-fs-3daf126e",
      sourceQuestionId: "3daf126e",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A model created by biologist Luis Valente predicts that the rate of speciation—the rate at which new species form—on an isolated island located approximately 5,000 kilometers from the nearest mainland ______ triple the rate of speciation on an island only 500 kilometers from the mainland.</p>",
      stem: STEM,
      options: ["being", "to be", "to have been", "will be"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is finite and nonfinite verb forms within a sentence. Relative clauses, such as the one beginning with “that,” require a finite verb, a verb that can function as the main verb of a clause. This choice correctly supplies the clause with the finite future tense verb “will be.”"),
      distractors: {
        A: L("Choice A is incorrect because the nonfinite participle “being” doesn’t supply the clause with a finite verb."),
        B: L("Choice B is incorrect because the nonfinite to-infinitive “to be” doesn’t supply the clause with a finite verb."),
        C: L("Choice C is incorrect because the nonfinite to-infinitive “to have been” doesn’t supply the clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-3daf126e", "3daf126e", 389)
    },
    {
      id: "rw-fs-975eda7c",
      sourceQuestionId: "975eda7c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>For thousands of years, people in the Americas ______ the bottle gourd, a large bitter fruit with a thick rind, to make bottles, other types of containers, and even musical instruments. Oddly, there is no evidence that any type of bottle gourd is native to the Western Hemisphere; either the fruit or its seeds must have somehow been carried from Asia or Africa.</p>",
      stem: STEM,
      options: ["to use", "have used", "having used", "using"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is finite and nonfinite verb forms within a sentence. A main clause requires a finite verb to perform the action of the subject (in this case, “people in the Americas”), and this choice supplies the finite past perfect tense verb “have used” to indicate what people in the Americas used the gourd for."),
      distractors: {
        A: L("Choice A is incorrect because the nonfinite to-infinitive “to use” doesn’t supply the main clause with a finite verb."),
        C: L("Choice C is incorrect because the nonfinite participle “having used” doesn’t supply the main clause with a finite verb."),
        D: L("Choice D is incorrect because the nonfinite participle “using” doesn’t supply the main clause with a finite verb.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-975eda7c", "975eda7c", 390)
    },
    {
      id: "rw-fs-588887b9",
      sourceQuestionId: "588887b9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>In 1881, French chemist Camille Faure redesigned the rechargeable lead-acid battery. Faure’s design greatly increased the amount of electricity that the original battery, which the French physicist Gaston Planté ______ fifteen years earlier, could hold.</p>",
      stem: STEM,
      options: ["is inventing", "will invent", "invents", "had invented"],
      answer: "D",
      explanation: L("Choice D is the best answer. Faure redesigned the battery in 1881, and the original battery was invented “fifteen years earlier.” Notice that this is the only choice in the past tense. To indicate that a past occurrence took place before another past occurrence, we need to use “had” + the past tense form of the verb. This is called the “past perfect” tense."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a tense error. Planté invented the original battery in the past, so we shouldn’t use the present tense “is inventing.”"),
        B: L("Choice B is incorrect. This choice creates a tense error. Planté invented the original battery in the past, so we shouldn’t use the future tense “will invent.”"),
        C: L("Choice C is incorrect. This choice creates a tense error. Planté invented the original battery in the past, so we shouldn’t use the present tense “invents.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-588887b9", "588887b9", 394)
    },
    {
      id: "rw-fs-6d247c13",
      sourceQuestionId: "6d247c13",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The Boston Saloon was one of the most popular African American–owned establishments in nineteenth-century Nevada. ______ by businessman William A.G. Brown, the saloon was known to offer elegant accommodations and an inclusive environment.</p>",
      stem: STEM,
      options: ["Created", "Creates", "Creating", "Create"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite past participle \"created\" is correctly used to form a supplementary element that modifies the noun phrase \"the saloon,\" identifying who established the Boston Saloon."),
      distractors: {
        B: L("Choice B is incorrect because it results in an ungrammatical sentence. The finite present tense verb \"creates\" can’t be used in this way to form a supplementary element to modify the noun phrase \"the saloon.\""),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The nonfinite present participle \"creating\" can’t be used in this way to form a supplementary element to modify the noun phrase \"the saloon.\""),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite present tense verb \"create\" can’t be used in this way to form a supplementary element to modify the noun phrase \"the saloon.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-6d247c13", "6d247c13", 397)
    },
    {
      id: "rw-fs-4c06427b",
      sourceQuestionId: "4c06427b",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Interest in mechanotransduction, the mechanism by which cells sense and convert mechanical stimuli into biochemical signals, is expanding because of innovative work by biomedical scientists—many of whom, like neuroscience and biophysics expert Elba Serrano, ______ this mechanism to better understand how the body’s neurological and biomechanical systems interact.</p>",
      stem: STEM,
      options: ["is studying", "has studied", "study", "studies"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verb forms within a sentence. The plural verb \"study\" agrees in number with the plural subject \"many.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"is studying\" doesn’t agree in number with the plural subject \"many.\""),
        B: L("Choice B is incorrect because the singular verb \"has studied\" doesn’t agree in number with the plural subject \"many.\""),
        D: L("Choice D is incorrect because the singular verb \"studies\" doesn’t agree in number with the plural subject \"many.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-4c06427b", "4c06427b", 399)
    },
    {
      id: "rw-fs-81f09e07",
      sourceQuestionId: "81f09e07",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Instead of sleeping on soft pillows, ancient Egyptians slept on hard, elevated headrests, their design ______ airflow, protection from insects, and hairstyle maintenance over comfort.</p>",
      stem: STEM,
      options: ["had prioritized", "was prioritizing", "prioritized", "prioritizing"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite present participle “prioritizing” is correctly used to form a supplementary element that modifies “their design,” describing what the headrests’ design prioritized."),
      distractors: {
        A: L("Choice A is incorrect because it results in a comma splice. The finite past perfect verb “had prioritized” creates a second main clause in the sentence, and the comma after “headrests” can’t be used in this way to join two main clauses."),
        B: L("Choice B is incorrect because it results in a comma splice. The finite past progressive verb “was prioritizing” creates a second main clause in the sentence, and the comma after “headrests” can’t be used in this way to join two main clauses."),
        C: L("Choice C is incorrect because it results in a comma splice. The finite past tense verb “prioritized” creates a second main clause in the sentence, and the comma after “headrests” can’t be used in this way to join two main clauses.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-81f09e07", "81f09e07", 400)
    },
    {
      id: "rw-fs-1c65db8f",
      sourceQuestionId: "1c65db8f",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>A species of Byropsis algae produces toxins to avoid being eaten by predators. However, in some cases, the toxins the organism uses to protect itself from predation actually ______ its attractiveness to predators. The Hawaiian sea slug, for example, not only tolerates Byropsis toxins but actually uses them for protection in the same way the algae does.</p>",
      stem: STEM,
      options: ["is increasing", "increase", "increases", "has increased"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-verb agreement. The plural verb \"increase\" agrees in number with the plural subject \"toxins.\""),
      distractors: {
        A: L("Choice A is incorrect because the singular verb \"is increasing\" doesn’t agree in number with the plural subject \"toxins.\""),
        C: L("Choice C is incorrect because the singular verb \"increases\" doesn’t agree in number with the plural subject \"toxins.\""),
        D: L("Choice D is incorrect because the singular verb \"has increased\" doesn’t agree in number with the plural subject \"toxins.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-1c65db8f", "1c65db8f", 404)
    },
    {
      id: "rw-fs-cd2443c0",
      sourceQuestionId: "cd2443c0",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>A pioneer in the field of taphonomy (the study of how organic remains become fossils), ______ may be just as prevalent in the fossil record as those of thick-shelled organisms.</p>",
      stem: STEM,
      options: ["fossils of thin-shelled organisms, Anna Behrensmeyer demonstrated in a 2005 analysis,", "Anna Behrensmeyer demonstrated in a 2005 analysis that fossils of thin-shelled organisms", "it was demonstrated in a 2005 analysis by Anna Behrensmeyer that fossils of thin-shelled organisms", "a 2005 analysis—by Anna Behrensmeyer—demonstrated that fossils of thin-shelled organisms"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is subject-modifier placement. This choice makes the noun phrase “Anna Behrensmeyer” the subject of the sentence and places it immediately after the modifying phrase “a pioneer…fossils.” In doing so, this choice clearly establishes that Anna Behrensmeyer—and not another noun in the sentence—is a pioneer in the field of taphonomy."),
      distractors: {
        A: L("Choice A is incorrect because it results in a dangling modifier. The placement of the noun phrase “fossils of thin-shelled organisms” immediately after the modifying phrase illogically suggests that the “fossils” are a pioneer in the field of taphonomy."),
        C: L("Choice C is incorrect because it results in a dangling modifier. The placement of the pronoun “it” immediately after the modifying phrase illogically suggests that “it” is a pioneer in the field of taphonomy."),
        D: L("Choice D is incorrect because it results in a dangling modifier. The placement of the noun phrase “a 2005 analysis” immediately after the modifying phrase illogically suggests that “a 2005 analysis” is a pioneer in the field of taphonomy.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-cd2443c0", "cd2443c0", 405)
    },
    {
      id: "rw-fs-e44db0a0",
      sourceQuestionId: "e44db0a0",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Because a cycle of lunar phases ______ 29.5 days to complete, it’s possible to observe two full moons in a single month, one at the beginning and one at the end.</p>",
      stem: STEM,
      options: ["are taking", "have taken", "take", "takes"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is subject-verb agreement. The singular verb \"takes\" agrees in number with the singular subject \"a cycle of lunar phases.\""),
      distractors: {
        A: L("Choice A is incorrect because the plural verb \"are taking\" doesn’t agree in number with the singular subject \"a cycle of lunar phases.\""),
        B: L("Choice B is incorrect because the plural verb \"have taken\" doesn’t agree in number with the singular subject \"a cycle of lunar phases.\""),
        C: L("Choice C is incorrect because the plural verb \"take\" doesn’t agree in number with the singular subject \"a cycle of lunar phases.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-e44db0a0", "e44db0a0", 406)
    },
    {
      id: "rw-fs-b8e13a74",
      sourceQuestionId: "b8e13a74",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Josephine Paddock and Florence Esté were among the 300 artists who exhibited at the 1913 Armory Show, a groundbreaking New York City art exhibition that introduced modernism to American audiences. Though shocking at the time, an abstract cubist painting exhibited by Marcel Duchamp—one of several works that received scorn from critics—______ the Western art canon more than a century later.</p>",
      stem: STEM,
      options: ["has entered", "have entered", "were entering", "enter"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is subject-verb agreement. The singular verb \"has entered\" agrees in number with the singular subject \"an abstract cubist painting.\""),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"have entered\" doesn’t agree in number with the singular subject \"an abstract cubist painting.\""),
        C: L("Choice C is incorrect because the plural verb \"were entering\" doesn’t agree in number with the singular subject \"an abstract cubist painting.\""),
        D: L("Choice D is incorrect because the plural verb \"enter\" doesn’t agree in number with the singular subject \"an abstract cubist painting.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-b8e13a74", "b8e13a74", 408)
    },
    {
      id: "rw-fs-265e7f4c",
      sourceQuestionId: "265e7f4c",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The Globe Theatre in London is a reconstruction of the famed venue where many of Shakespeare’s plays were first performed. In 1613, a prop cannon ______ during a performance and ignited the Globe’s thatched roof. No one was hurt, but in two hours the original Globe was gone.</p>",
      stem: STEM,
      options: ["malfunctions", "will malfunction", "has malfunctioned", "malfunctioned"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of verbs to express tense. In this choice, the past tense verb \"malfunctioned\" is consistent with the other past tense verbs (\"ignited\" and \"was\") used to describe the destruction of the original Globe Theatre."),
      distractors: {
        A: L("Choice A is incorrect because the present tense verb \"malfunctions\" isn’t consistent with the other past tense verbs used to describe the destruction of the original Globe Theatre."),
        B: L("Choice B is incorrect because the future tense verb \"will malfunction\" isn’t consistent with the other past tense verbs used to describe the destruction of the original Globe Theatre."),
        C: L("Choice C is incorrect because the present perfect tense verb \"has malfunctioned\" isn’t consistent with the other past tense verbs used to describe the destruction of the original Globe Theatre.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-265e7f4c", "265e7f4c", 409)
    },
    {
      id: "rw-fs-d222f7d9",
      sourceQuestionId: "d222f7d9",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 3, type: "mcq",
      passage: "<p>Helical ______ widely understood to confer stability and efficiency in the locomotion of a variety of microscopic organisms—including bacteria, eukaryotic algae, and ciliates—bestows similar advantages, albeit via different propulsive modes, to larger oceanic macroplanktons, such as salps.</p>",
      stem: STEM,
      options: ["swimming, is", "swimming is", "swimming has been", "swimming,"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of punctuation within a sentence. The comma after “swimming” pairs with the dash after “ciliates” to offset the supplementary element (“widely…ciliates”) that interrupts the main clause of the sentence."),
      distractors: {
        A: L("Choice A is incorrect. Adding the verb “is” here creates an ungrammatical sentence structure with two main verbs (“is” and “bestows”) without appropriate punctuation and/or conjunction."),
        B: L("Choice B is incorrect because it fails to offset the supplementary element with appropriate punctuation. Furthermore, adding the verb “is” here creates an ungrammatical sentence that has two finite verbs (“is” and “bestows”) without appropriate punctuation and/or conjunction."),
        C: L("Choice C is incorrect because it fails to offset the supplementary element with appropriate punctuation. Furthermore, adding the verb “has been” here creates an ungrammatical sentence that has two finite verbs (“has been” and “bestows”) without appropriate punctuation and/or conjunction.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-d222f7d9", "d222f7d9", 410)
    },
    {
      id: "rw-fs-96e5da01",
      sourceQuestionId: "96e5da01",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>The alga species Chlorella vulgaris is very efficient at making oxygen. For this reason, scientists are currently exploring ways to use this species in space. C. vulgaris might be used, for example, to build future biological air exchange systems that ______ oxygen for astronauts.</p>",
      stem: STEM,
      options: ["are producing", "produced", "produce", "have produced"],
      answer: "C",
      explanation: L("Choice C is the best answer. The convention being tested is the use of verbs to express tense. Simple present tense verbs can be used to describe actions that tend to occur, including in a hypothetical or future scenario. In this case, the simple present tense verb “produce” indicates what the air exchange systems might be able to do in the future (produce oxygen for astronauts)."),
      distractors: {
        A: L("Choice A is incorrect. The present progressive tense verb “are producing” suggests that the oxygen is currently being produced, not that it might be produced in the future."),
        B: L("Choice B is incorrect because the past tense verb “produced” suggests that the oxygen was produced in the past, not that it might be produced in the future."),
        D: L("Choice D is incorrect because the present perfect tense verb “have produced” suggests that the oxygen has been produced from a point in the past up to the present, not that it might be produced in the future.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-96e5da01", "96e5da01", 412)
    },
    {
      id: "rw-fs-12bd5b75",
      sourceQuestionId: "12bd5b75",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>With its towering, six-spired exterior of granitelike quartz monzonite, the Salt Lake Temple is one of the most instantly recognizable structures in the state of Utah. However, many people do not know that ______ built over the course of forty years, with construction beginning in 1853 and ending in 1893.</p>",
      stem: STEM,
      options: ["it was", "one was", "they were", "both were"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is pronoun-antecedent agreement. The singular pronoun \"it\" agrees in number with the singular antecedent \"the Salt Lake Temple.\""),
      distractors: {
        B: L("Choice B is incorrect because the singular pronoun \"one\" is ambiguous in this context; the resulting sentence leaves unclear whether there is only one Salt Lake temple or multiple."),
        C: L("Choice C is incorrect because the plural pronoun \"they\" doesn’t agree in number with the singular antecedent \"the Salt Lake Temple.\""),
        D: L("Choice D is incorrect because the plural pronoun \"both\" doesn’t agree in number with the singular antecedent \"the Salt Lake Temple.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-12bd5b75", "12bd5b75", 414)
    },
    {
      id: "rw-fs-67614549",
      sourceQuestionId: "67614549",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>After winning the 1860 presidential election, Abraham Lincoln appointed Edward Bates, Salmon P . Chase, and William H. Seward to his cabinet. Lincoln’s decision was surprising, since each of these men had run against him, but historians have praised it, noting that Lincoln ______ his rivals’ diverse talents to strengthen his administration.</p>",
      stem: STEM,
      options: ["has leveraged", "is leveraging", "will leverage", "leveraged"],
      answer: "D",
      explanation: L("Choice D is the best answer. The subject of the verb is “Lincoln,” and the first sentence tells us that we’re talking about something that Abraham Lincoln did in 1860. So the simple past tense “leveraged” fits the logic of the text."),
      distractors: {
        A: L("Choice A is incorrect. This choice creates a tense issue. “Has leveraged” is the present perfect tense, which is used for an action that began in the past and continues into the present. Lincoln started leveraging his rivals’ talents in 1860—it’s definitely not still happening today. So the present perfect tense isn’t appropriate."),
        B: L("Choice B is incorrect. This choice creates a tense issue. “Is leveraging” is the present tense, but Lincoln leveraged his rivals’ talents in 1860, so the present tense isn’t appropriate."),
        C: L("Choice C is incorrect. This choice creates a tense issue. “Will leverage” is the future tense, but Lincoln leveraged his rivals’ talents in 1860, so the future tense isn’t appropriate.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-67614549", "67614549", 416)
    },
    {
      id: "rw-fs-d1482e27",
      sourceQuestionId: "d1482e27",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>One of the earliest known maps is a Babylonian clay tablet thought to be almost 4,500 years old. The map ______ the area of a plot of land, shows a river valley, and includes the cardinal directions.</p>",
      stem: STEM,
      options: ["describes", "describe", "have described", "are describing"],
      answer: "A",
      explanation: L("Choice A is the best answer. The convention being tested is the use of verb forms within a sentence. The singular verb \"describes\" agrees in number with the singular subject \"map.\""),
      distractors: {
        B: L("Choice B is incorrect because the plural verb \"describe\" doesn’t agree in number with the singular subject \"map.\""),
        C: L("Choice C is incorrect because the plural verb \"have described\" doesn’t agree in number with the singular subject \"map.\""),
        D: L("Choice D is incorrect because the plural verb \"are describing\" doesn’t agree in number with the singular subject \"map.\"")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-d1482e27", "d1482e27", 418)
    },
    {
      id: "rw-fs-bd11fe93",
      sourceQuestionId: "bd11fe93",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 1, type: "mcq",
      passage: "<p>Dr. Rocío Paola Caballero-Gill is a paleoceanographer. This means that Dr. Caballero-Gill doesn’t just study oceans as they are today. She uses chemistry and fossil evidence ______ oceans as they were in the past.</p>",
      stem: STEM,
      options: ["has studied", "to study", "studied", "studies"],
      answer: "B",
      explanation: L("Choice B is the best answer. The convention being tested is the use of verb forms within a sentence. The nonfinite to-infinitive verb “to study” is correctly used to form a subordinate clause that indicates what Dr. Caballero-Gill uses chemistry and fossil evidence for (to study oceans as they were in the past)."),
      distractors: {
        A: L("Choice A is incorrect because it results in an ungrammatical sentence. The finite verb “has studied” can’t be used in this way to form a subordinate clause that indicates what Dr. Caballero-Gill uses the evidence for."),
        C: L("Choice C is incorrect because it results in an ungrammatical sentence. The finite verb “studied” can’t be used in this way to form a subordinate clause that indicates what Dr. Caballero-Gill uses the evidence for."),
        D: L("Choice D is incorrect because it results in an ungrammatical sentence. The finite verb “studies” can’t be used in this way to form a subordinate clause that indicates what Dr. Caballero-Gill uses the evidence for.")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-bd11fe93", "bd11fe93", 420)
    },
    {
      id: "rw-fs-f570cece",
      sourceQuestionId: "f570cece",
      skillId: "rw.sec.form-structure-sense", section: "rw", difficulty: 2, type: "mcq",
      passage: "<p>Both Arteaga, in the state of Coahuila, and Lagos de Moreno, in the state of Jalisco, have been designated by Mexico as pueblos mágicos (magical villages) to celebrate these ______ natural beauty and unique cultural traditions.</p>",
      stem: STEM,
      options: ["town", "town’s", "towns", "towns’"],
      answer: "D",
      explanation: L("Choice D is the best answer. The convention being tested is the use of possessive nouns. The plural possessive noun “towns’” correctly indicates that the natural beauty and unique cultural traditions belong to both Arteaga and Lagos de Moreno."),
      distractors: {
        A: L("Choice A is incorrect because the context requires the plural possessive noun “towns’,” not the singular noun “town.”"),
        B: L("Choice B is incorrect because the context requires the plural possessive noun “towns’,” not the singular possessive noun “town’s.”"),
        C: L("Choice C is incorrect because the context requires the plural possessive noun “towns’,” not the plural noun “towns.”")
      },
      hints: [], calculator: false,
      meta: SM("rw-fs-f570cece", "f570cece", 421)
    }
  ]);

})();
