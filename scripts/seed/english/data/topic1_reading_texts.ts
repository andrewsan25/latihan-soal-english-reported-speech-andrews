import type { EnglishQuestionSeed } from '../types.ts';

const PASSAGE_TOBA = `The Legend of Lake Toba

Long ago, a young farmer named Toba lived alone in a quiet valley in North Sumatra. One afternoon, he went fishing in the river and caught a magnificent golden fish. To his amazement, when he brought it home, the fish transformed into a beautiful woman. She agreed to marry him under one strict condition: Toba must never tell anyone that she was once a fish. Toba promised to keep the secret forever.

Years passed, and they had a lively son named Samosir. However, Samosir grew up to be quite lazy and always felt hungry. One hot afternoon, his mother asked him to deliver lunch to his father in the rice field. On the way, Samosir got hungry and ate almost all the food, leaving only a few scraps.

When Toba opened the lunch basket and saw the leftovers, he lost his temper. He shouted furiously at his son, "You careless boy! You act just like the child of a fish!" Samosir cried and ran home to tell his mother what his father had said. Heartbroken that Toba had broken his sacred promise, the woman told Samosir to run to the highest hill immediately. Suddenly, dark clouds covered the sky, and heavy rain fell non-stop. Water overflowed from the river, flooding the entire valley and turning it into a vast lake, with the hill remaining as an island in the center.`;

const PASSAGE_PAINTING = `The Mystery of the Missing Painting

Late one rainy evening, Detective Clara Vance was called to the Blackwood Art Museum. The curator, Mr. Sterling, looked pale and anxious. "Detective, our most valuable 18th-century painting, The Crimson Rose, has vanished from the main gallery!" he exclaimed. "The security cameras were turned off at 9:00 PM, and all the doors were locked from the inside."

Clara walked into the silent gallery with her assistant, Leo. She ignored the empty frame on the wall and immediately inspected the polished marble floor. "Look at these faint muddy footprints leading toward the ventilation shaft," Clara pointed out. "And notice that the window latch is completely dry, even though it has been pouring outside since dusk."

Clara turned to the museum staff standing near the entrance. "The thief did not break in from outside," she announced calmly. "Whoever took the painting was already inside the building before the rain started, and they used the maintenance shaft to hide the canvas." She walked straight to the janitor's closet, opened the metal vent cover, and pulled out the rolled-up painting. Mr. Sterling's assistant, who had muddy boots hidden under his desk, immediately confessed to the crime.`;

const PASSAGE_MACHU = `The Rise and Fall of Machu Picchu

Machu Picchu is a 15th-century Inca citadel located high in the Andes Mountains of Peru, standing over 2,400 meters above sea level. Built around 1450 during the reign of the Inca emperor Pachacuti, the site served as a royal estate and a sacred religious center. The Inca engineers constructed the city using polished dry-stone walls without mortar, allowing the buildings to withstand frequent earthquakes in the region.

Roughly a century after its construction, Machu Picchu was abandoned around the time of the Spanish conquest of the Inca Empire. Because of its remote location hidden among steep mountain ridges and dense cloud forests, Spanish conquistadors never found the citadel. As a result, Machu Picchu escaped the destruction that befell many other Inca settlements, remaining largely unknown to the outside world for centuries.

In 1911, American historian Hiram Bingham was guided to the site by local indigenous farmers, bringing Machu Picchu to international attention. Subsequent archaeological studies revealed temples, terraces, and water channels that demonstrated the advanced urban planning of the Inca civilization. Today, Machu Picchu is a UNESCO World Heritage Site and stands as one of the most iconic historical landmarks in South America.`;

const PASSAGE_BOGOR = `Last month, our school organized an annual three-day science and technology camp at a botanical research center in Bogor. As a member of the school science club, I was thrilled to join the trip, even though I had never camped away from home before.

On Friday morning, we arrived at the camp and set up our tents near a pine forest. After a brief orientation by the park rangers, we attended an outdoor workshop on water quality testing. My team collected water samples from a nearby stream and analyzed their pH levels using portable digital sensors. It was fascinating to see how clean mountain water differed from tap water.

On Saturday, we participated in a solar-car building challenge. Each group was given a small photovoltaic panel, a tiny motor, and recycled cardboard to design a miniature vehicle. My group spent hours adjusting the wheel alignment so our car could run straight. During the afternoon race on the paved courtyard, our car finished in second place! Later that night, we gathered around a campfire to observe constellations through astronomical telescopes.

On Sunday morning, we planted fifty native tree saplings along a sloped hillside to support local reforestation efforts. Before boarding the bus back to school, the camp instructors awarded certificates to every participant. Joining the science camp was truly rewarding. It strengthened my teamwork skills, deepened my appreciation for environmental science, and gave me memories I will cherish forever.`;

const PASSAGE_TENGGER = `The Legend of Mount Tengger and Roro Anteng

Long ago in East Java, Princess Roro Anteng of the Majapahit heritage fell in love with Joko Seger, a noble youth of humble spirit. Together, they established a peaceful highland community near Mount Bromo and ruled kindly over the Tengger region. Despite their prosperity, years went by without them having any children, which filled their hearts with quiet sorrow.

Determined to pray for an heir, the couple climbed to the crater rim of Mount Bromo and meditated deeply for days. Moved by their devotion, the mountain spirits promised to bless them with twenty-five children under one sacred vow: the youngest child must one day be offered back into the volcanic crater as a symbol of gratitude. Joyfully, Roro Anteng and Joko Seger accepted the condition.

True to the spirits' promise, the couple had twenty-five sons and daughters. Yet when the time came to fulfill their oath regarding Kusuma, the twenty-fifth and youngest son, parental love overwhelmed them and they hid Kusuma away. Enraged by the broken vow, Mount Bromo erupted violently, shaking the entire valley. Knowing the danger threatening his family and villagers, brave Kusuma stepped toward the crater willingly so peace would return. Ever since, the Tengger people hold the annual Kasada ceremony, throwing offerings into the crater to honor Kusuma's noble sacrifice.`;

const PASSAGE_VIOLIN = `The Vanished Violin of Conservatory Hall

Five minutes before the annual autumn concert at Conservatory Hall, panic struck backstage. Maestro Julian Ortega opened his velvet instrument case only to discover that his 200-year-old Italian violin had disappeared. Only three people had backstage access after the evening soundcheck: Elena the stage manager, Marcus the lighting technician, and Lucas the piano tuner.

Inspector Maya Lin arrived within ten minutes and examined the dressing room calmly. The tall sash window facing the garden was slightly cracked open, yet the thick layer of dust on the outer stone ledge remained completely undisturbed. Near the dressing table, Maya noticed a single smudge of black rosin dust beside a cup of freshly brewed herbal tea that was still warm.

"No intruder climbed through the garden window," Maya stated firmly, pointing to the untouched ledge. "Furthermore, the concert violin emits traces of rare pine rosin when wrapped hastily in cloth." Turning toward Lucas, who claimed he had been locked inside the storage basement for two hours sorting sheet music, Maya asked why fresh pine rosin dust coated the cuff of his woolen coat and why the warm mug next to his tuning toolkit smelled of chamomile. Facing clear physical evidence, Lucas admitted concealing the violin inside the grand piano bench out of jealousy.`;

const PASSAGE_BOROBUDUR = `The Ancient Engineering of Borobudur Temple

Located in Magelang, Central Java, Borobudur is the world's largest Buddhist monument, constructed between the late eighth and ninth centuries under the Sailendra Dynasty. Built from roughly two million volcanic andesite stone blocks fitted without cement or mortar, the nine-level stepped pyramid rises harmoniously to overlook fertile valleys and distant volcanoes.

Rather than relying on chemical adhesives, ancient Javanese architects engineered interlocking stone joints—known as dovetail and mortise-and-tenon connections—allowing massive wall panels to stay securely aligned. Even more remarkably, they installed over one hundred carved stone gargoyle spouts called jaladwara along every terrace to channel heavy tropical monsoon rain out of the monument core, preventing soil erosion and structural collapse inside the earthen hill base.

Abandoned and buried beneath volcanic ash and dense tropical jungle for centuries, Borobudur was brought back to global attention in 1814 through survey efforts initiated under Thomas Stamford Raffles and later restored by UNESCO engineers during the 1970s. Today, millions of scholars and travelers marvel at its 2,672 intricate relief panels illustrating classical cosmology and everyday life in ancient Java.`;

const PASSAGE_PETRA = `The Rose-Red City of Petra

Carved directly into towering pink sandstone cliffs in southern Jordan, the ancient city of Petra served as the thriving capital of the Nabataean Kingdom as early as the fourth century BCE. Because it lay at the crossroads of major Arabian spice and silk trade routes connecting Egypt, Syria, and the Mediterranean, Petra grew extraordinarily wealthy from caravan taxes and trade protection.

Although situated in a harsh desert canyon plagued by seasonal drought and sudden flash floods, the Nabataeans mastered desert hydraulic engineering. They built rock-cut dams, hillside cisterns, and miles of ceramic clay pipelines that captured rare winter rainstorms, storing fresh water year-round for gardens, public baths, and thousands of inhabitants while protecting the narrow Siq entrance canyon from flooding.

After earthquakes in 363 CE severely damaged its buildings and water conduits, combined with shifting maritime trade routes, Petra gradually fell into obscurity for nearly five hundred years. Rediscovered for Western scholarship by Swiss explorer Johann Ludwig Burckhardt in 1812, Petra is celebrated today as both a UNESCO World Heritage Site and one of the New Seven Wonders of the World.`;

const PASSAGE_KARIMUNJAWA = `Three Days at the Karimunjawa Marine Conservation Camp

During the school holiday in June, twenty students from our environmental club sailed across the Java Sea to Karimunjawa National Park for a coastal ecology workshop. Although the morning ferry rocked strongly against the waves, everyone cheered the moment emerald lagoons and white mangrove islets appeared on the horizon.

On our first day after checking into the eco-lodge, marine biologists taught us how to measure coral bleaching coverage along shallow reefs using waterproof underwater slates and quadrats. Snorkeling above vibrant brain corals and parrotfish made classroom biology feel alive, though we quickly noticed areas damaged by rising sea temperatures.

On the second day, our team worked alongside local island rangers to transplant sixty healthy staghorn coral fragments onto underwater nursery frames. Later that evening, village elders invited us to inspect a coastal mangrove nursery and shared stories about how intact mangrove roots had shielded their wooden boats during severe storms.

Before returning to Jepara on Sunday afternoon, every student recorded reflection notes and received a Youth Ocean Steward badge. The expedition taught me that marine conservation depends equally on scientific monitoring and respectful partnership with local coastal communities.`;

const PASSAGE_ROBOTICS = `Our First National Robotics Olympiad in Surabaya

Last October, four teammates and I represented our high school at the National Youth Robotics Olympiad hosted inside an exhibition hall in Surabaya. For six months prior, we had stayed after classes almost every afternoon programming sensors and soldering wiring harnesses inside the physics workshop.

When qualification trials began on Saturday morning, our autonomous line-following robot veered sharply off a curved track because harsh overhead spotlights confused its infrared color sensors. Instead of panicking during the thirty-minute repair window, our team recalibrated the sensor threshold values and added a matte black cardboard hood over the sensor array to block stray ceiling glare.

Thanks to that quick adjustment, our robot completed three consecutive obstacle runs without a single penalty during the afternoon finals. Even though we narrowly finished third behind teams from Bandung and Yogyakarta, stepping onto the podium holding our bronze trophy felt unforgettable. More importantly, troubleshooting a real mechanical failure under time pressure proved how valuable calm teamwork truly is.`;

export const topic1ReadingTexts: EnglishQuestionSeed[] = [
  // =========================================================================
  // SOURCE PASSAGE 1: THE LEGEND OF LAKE TOBA (Q1-3 SAS X + 1 EXTRA)
  // =========================================================================
  {
    code: 'ENG10-RD-001',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TOBA,
    question_text: 'Why did Toba become furious at his son in the rice field?',
    options: [
      { key: 'A', text: "Samosir refused to help him plant the rice seeds." },
      { key: 'B', text: "Samosir arrived late because he fell asleep on the hill." },
      { key: 'C', text: "Samosir lost the lunch basket inside the deep river." },
      { key: 'D', text: "Samosir told the villagers about his mother's secret." },
      { key: 'E', text: "Samosir ate almost all of the lunch meant for him." }
    ],
    correct_answer: 'E',
    hint: 'Read the end of the second paragraph carefully to see what happened on the way to the rice field.',
    explanation: 'The second paragraph states: "On the way, Samosir got hungry and ate almost all the food, leaving only a few scraps." Seeing the leftovers made Toba lose his temper.',
    tags: ['narrative', 'reading-comprehension', 'lake-toba'],
  },
  {
    code: 'ENG10-RD-002',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TOBA,
    question_text: 'What was the main cause of the valley flooding into a giant lake?',
    options: [
      { key: 'A', text: "A powerful earthquake shook the mountains of North Sumatra." },
      { key: 'B', text: "Toba broke his promise by revealing his wife's true origin." },
      { key: 'C', text: "The golden fish returned to the river to summon a terrible storm." },
      { key: 'D', text: "The villagers forgot to build barriers before the rainy season." },
      { key: 'E', text: "Samosir accidentally blocked the main river with large stones." }
    ],
    correct_answer: 'B',
    hint: 'Focus on the strict condition given at the start and Toba’s shout in the third paragraph.',
    explanation: 'When Toba yelled "You act just like the child of a fish!", he violated his sacred vow never to reveal her fish origin, triggering the relentless storm that flooded the valley.',
    tags: ['narrative', 'cause-effect', 'lake-toba'],
  },
  {
    code: 'ENG10-RD-003',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TOBA,
    question_text: 'The synonym of the word "furiously" in the phrase "He shouted furiously at his son" is ….',
    options: [
      { key: 'A', text: "angrily" },
      { key: 'B', text: "patiently" },
      { key: 'C', text: "cheerfully" },
      { key: 'D', text: "silently" },
      { key: 'E', text: "nervously" }
    ],
    correct_answer: 'A',
    hint: 'Notice the sentence right before it says "he lost his temper."',
    explanation: '"Furiously" means in an extremely angry manner, which matches "angrily."',
    tags: ['vocabulary', 'synonym', 'lake-toba'],
  },
  {
    code: 'ENG10-RD-004',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TOBA,
    question_text: 'Why did the mother instruct Samosir to climb to the highest hill right after learning what Toba had said?',
    options: [
      { key: 'A', text: "She asked Samosir to search for fresh rice seedlings for his father." },
      { key: 'B', text: "She wanted Samosir to stay safe above the valley before a massive flood submerged the area." },
      { key: 'C', text: "She wanted Samosir to hide the empty lunch basket from the neighbors." },
      { key: 'D', text: "She wanted Samosir to catch more golden fish from a highland spring." },
      { key: 'E', text: "She expected Samosir to apologize to his father from the hilltop." }
    ],
    correct_answer: 'B',
    hint: 'Look at what happened immediately after Samosir ran to the highest hill.',
    explanation: 'Non-stop rain flooded the valley and turned it into a vast lake while leaving the hill as an island in the center, saving Samosir from drowning.',
    tags: ['narrative', 'inference', 'lake-toba'],
  },

  // =========================================================================
  // SOURCE PASSAGE 2: THE MYSTERY OF THE MISSING PAINTING (Q4-6 SAS X + 1 EXTRA)
  // =========================================================================
  {
    code: 'ENG10-RD-005',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_PAINTING,
    question_text: 'What did Detective Clara discover when she examined the gallery floor?',
    options: [
      { key: 'A', text: "Broken glass scattered beneath the main gallery window." },
      { key: 'B', text: "A torn piece of canvas stuck inside the empty wooden frame." },
      { key: 'C', text: "A spare key dropped near the security camera control room." },
      { key: 'D', text: "Wet drops of rainwater trailing from the front entrance door." },
      { key: 'E', text: "Faint muddy footprints leading toward the ventilation shaft." }
    ],
    correct_answer: 'E',
    hint: 'Check what Clara pointed out on the polished marble floor in the second paragraph.',
    explanation: 'In paragraph 2, Clara inspected the polished marble floor and said, "Look at these faint muddy footprints leading toward the ventilation shaft."',
    tags: ['narrative', 'mystery', 'detail'],
  },
  {
    code: 'ENG10-RD-006',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_PAINTING,
    question_text: 'How did Clara deduce that the thief was an insider rather than an external burglar?',
    options: [
      { key: 'A', text: "The window latch was dry despite the heavy rain outside." },
      { key: 'B', text: "The security cameras recorded the assistant entering the closet." },
      { key: 'C', text: "The front doors had been unlocked using the curator's personal key." },
      { key: 'D', text: "The muddy footprints matched the exact size of Mr. Sterling's shoes." },
      { key: 'E', text: "The thief left a written confession inside the maintenance shaft." }
    ],
    correct_answer: 'A',
    hint: 'Look at the contrast Clara noticed between the weather outside and the state of the window latch.',
    explanation: 'Because the window latch was completely dry even though it had been pouring since dusk (and all doors were locked from inside), nobody entered from outdoors.',
    tags: ['narrative', 'mystery', 'deduction'],
  },
  {
    code: 'ENG10-RD-007',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_PAINTING,
    question_text: '"Whoever took the painting was already inside the building before the rain started, and they used the maintenance shaft..." The word "they" in the sentence refers to ….',
    options: [
      { key: 'A', text: "Mr. Sterling and his assistant" },
      { key: 'B', text: "the security guards" },
      { key: 'C', text: "the thief" },
      { key: 'D', text: "the museum staff" },
      { key: 'E', text: "Clara and Leo" }
    ],
    correct_answer: 'C',
    hint: 'Read the subject "Whoever took the painting" in the first half of the same sentence.',
    explanation: 'Singular "they" is used right after the indefinite pronoun phrase "Whoever took the painting," meaning the unknown thief.',
    tags: ['pronoun-reference', 'mystery'],
  },
  {
    code: 'ENG10-RD-008',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_PAINTING,
    question_text: 'Where was the stolen painting, The Crimson Rose, eventually found?',
    options: [
      { key: 'A', text: "Hidden underneath the security camera console desk." },
      { key: 'B', text: "Wrapped inside a raincoat outside the garden window." },
      { key: 'C', text: "Placed inside Mr. Sterling's locked office safe." },
      { key: 'D', text: "Suspended behind the original wooden frame in the main gallery." },
      { key: 'E', text: "Rolled up inside a metal vent cover in the janitor’s closet." }
    ],
    correct_answer: 'E',
    hint: 'Follow Detective Clara’s final steps in the third paragraph.',
    explanation: 'Clara walked straight to the janitor’s closet, opened the metal vent cover, and pulled out the rolled-up painting.',
    tags: ['narrative', 'mystery', 'detail'],
  },

  // =========================================================================
  // SOURCE PASSAGE 3: MACHU PICCHU (Q7-9 SAS X + Q44 TRUE/FALSE + 2 EXTRA)
  // =========================================================================
  {
    code: 'ENG10-RD-009',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_MACHU,
    question_text: 'What does the passage state about how Machu Picchu survived earthquakes?',
    options: [
      { key: 'A', text: "Local farmers continuously repaired the cracked stone walls every year." },
      { key: 'B', text: "Its buildings were constructed using fitted dry-stone walls without mortar." },
      { key: 'C', text: "Spanish engineers rebuilt the foundations using modern cement techniques." },
      { key: 'D', text: "The Inca builders reinforced the roofs with heavy wooden beams." },
      { key: 'E', text: "The city was built inside a deep cave protected from mountain tremors." }
    ],
    correct_answer: 'B',
    hint: 'Check the last sentence of the first paragraph.',
    explanation: 'The text states: "The Inca engineers constructed the city using polished dry-stone walls without mortar, allowing the buildings to withstand frequent earthquakes in the region."',
    tags: ['historical-text', 'detail', 'machu-picchu'],
  },
  {
    code: 'ENG10-RD-010',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_MACHU,
    question_text: 'Why was Machu Picchu spared from destruction during the Spanish conquest?',
    options: [
      { key: 'A', text: "Local villagers disguised the stone temples as natural forest cliffs." },
      { key: 'B', text: "The Inca army successfully defended the citadel against Spanish soldiers." },
      { key: 'C', text: "Its isolated location in the high mountains kept it hidden from the Spanish." },
      { key: 'D', text: "Thick volcanic ash covered the city before the Spanish arrived in Peru." },
      { key: 'E', text: "The Spanish conquistadors decided to preserve it as a royal palace." }
    ],
    correct_answer: 'C',
    hint: 'Read the second paragraph explaining why Spanish conquistadors never found it.',
    explanation: 'Because of its remote location hidden among steep mountain ridges and dense cloud forests, Spanish conquistadors never found or destroyed Machu Picchu.',
    tags: ['historical-text', 'cause-effect', 'machu-picchu'],
  },
  {
    code: 'ENG10-RD-011',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_MACHU,
    question_text: 'The synonym of the word "deserted" that can be found in the second paragraph is ….',
    options: [
      { key: 'A', text: "escaped" },
      { key: 'B', text: "constructed" },
      { key: 'C', text: "abandoned" },
      { key: 'D', text: "revealed" },
      { key: 'E', text: "hidden" }
    ],
    correct_answer: 'C',
    hint: 'Look at the first sentence of the second paragraph.',
    explanation: '"Machu Picchu was abandoned around the time of the Spanish conquest" uses "abandoned," which means left empty or deserted.',
    tags: ['vocabulary', 'synonym', 'machu-picchu'],
  },
  {
    code: 'ENG10-RD-012',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_MACHU,
    question_text:
      'Determine whether each statement (1–5) is TRUE or FALSE based on the text:\n1) Spanish conquistadors occupied Machu Picchu and destroyed most of its stone temples.\n2) Machu Picchu was constructed during the rule of Emperor Pachacuti around 1450.\n3) Archaeological research showed that the Incas lacked knowledge of water channel systems.\n4) The dry-stone masonry technique helped the citadel endure frequent seismic activity.\n5) Local indigenous farmers guided historian Hiram Bingham to the site in 1911.',
    options: [
      { key: 'A', text: "True – False – True – False – True" },
      { key: 'B', text: "False – True – False – True – True" },
      { key: 'C', text: "False – True – True – True – False" },
      { key: 'D', text: "False – False – False – True – True" },
      { key: 'E', text: "True – True – False – False – True" }
    ],
    correct_answer: 'B',
    hint: 'Remember: the Spanish never found Machu Picchu (statement 1), and studies revealed Inca water channels (statement 3).',
    explanation: 'Statement 1 is False (never found/destroyed), 2 is True (~1450 under Pachacuti), 3 is False (studies revealed water channels), 4 is True (dry-stone walls withstood earthquakes), and 5 is True (guided by local indigenous farmers in 1911).',
    tags: ['true-false', 'hots', 'machu-picchu'],
  },
  {
    code: 'ENG10-RD-013',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_MACHU,
    question_text: 'What do the archaeological findings mentioned in the final paragraph primarily prove about the Inca civilization?',
    options: [
      { key: 'A', text: "They designed Machu Picchu strictly as a temporary military camp." },
      { key: 'B', text: "They learned temple construction techniques from Hiram Bingham." },
      { key: 'C', text: "They avoided building irrigation systems in high mountain elevations." },
      { key: 'D', text: "They possessed sophisticated architectural and urban planning expertise." },
      { key: 'E', text: "They abandoned the Andes mainly due to a shortage of stone materials." }
    ],
    correct_answer: 'D',
    hint: 'Look at the second sentence of the third paragraph mentioning temples, terraces, and water channels.',
    explanation: 'The passage states that temples, terraces, and water channels "demonstrated the advanced urban planning of the Inca civilization."',
    tags: ['historical-text', 'inference', 'machu-picchu'],
  },
  {
    code: 'ENG10-RD-014',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_MACHU,
    question_text: 'Approximately how old was Machu Picchu when it was abandoned during the era of the Spanish conquest?',
    options: [
      { key: 'A', text: "About five hundred years old." },
      { key: 'B', text: "Less than five years old." },
      { key: 'C', text: "Roughly two decades old." },
      { key: 'D', text: "About one hundred years old." },
      { key: 'E', text: "Over one thousand years old." }
    ],
    correct_answer: 'D',
    hint: 'Look at the opening words of the second paragraph: "Roughly a century after its construction..."',
    explanation: 'A century equals 100 years; paragraph 2 states the citadel was abandoned "roughly a century after its construction."',
    tags: ['historical-text', 'vocabulary', 'machu-picchu'],
  },

  // =========================================================================
  // SOURCE PASSAGE 4: SCIENCE CAMP IN BOGOR (Q10-12 SAS X + Q43 TRUE/FALSE + 2 EXTRA)
  // =========================================================================
  {
    code: 'ENG10-RD-015',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOGOR,
    question_text: "What did the writer's group do on Sunday morning before returning to school?",
    options: [
      { key: 'A', text: "They tested water samples from a mountain stream." },
      { key: 'B', text: "They raced miniature solar-powered cars in the courtyard." },
      { key: 'C', text: "They set up camping tents near the pine forest area." },
      { key: 'D', text: "They planted native tree saplings on a sloped hillside." },
      { key: 'E', text: "They observed stars and constellations through telescopes." }
    ],
    correct_answer: 'D',
    hint: 'Check the first sentence of the final paragraph.',
    explanation: 'Paragraph 4 explicitly notes: "On Sunday morning, we planted fifty native tree saplings along a sloped hillside to support local reforestation efforts."',
    tags: ['recount', 'detail', 'science-camp'],
  },
  {
    code: 'ENG10-RD-016',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOGOR,
    question_text: 'Why did the writer consider the science camp a rewarding experience?',
    options: [
      { key: 'A', text: "It taught them how to build full-sized vehicles from metal scraps." },
      { key: 'B', text: "It allowed them to win first place in the solar-car building race." },
      { key: 'C', text: "It gave them a chance to become a certified park ranger in Bogor." },
      { key: 'D', text: "It helped them avoid taking regular science exams at school." },
      { key: 'E', text: "It improved their teamwork skills and deepened their love for science." }
    ],
    correct_answer: 'E',
    hint: 'Read the very last sentence of the recount text.',
    explanation: 'The writer explains that joining the camp "strengthened my teamwork skills, deepened my appreciation for environmental science, and gave me memories I will cherish forever."',
    tags: ['recount', 'main-idea', 'science-camp'],
  },
  {
    code: 'ENG10-RD-017',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOGOR,
    question_text: 'The word "It" in the sentence "It strengthened my teamwork skills..." in the final paragraph refers to ….',
    options: [
      { key: 'A', text: "boarding the bus back to school" },
      { key: 'B', text: "receiving a participation certificate" },
      { key: 'C', text: "adjusting the wheel alignment" },
      { key: 'D', text: "joining the science camp" },
      { key: 'E', text: "planting fifty native tree saplings" }
    ],
    correct_answer: 'D',
    hint: 'Look at the gerund subject of the preceding sentence: "Joining the science camp was truly rewarding."',
    explanation: '"It" refers directly to the subject of the immediately preceding sentence: "Joining the science camp."',
    tags: ['pronoun-reference', 'recount', 'science-camp'],
  },
  {
    code: 'ENG10-RD-018',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOGOR,
    question_text:
      'State whether the following statements (1–5) are TRUE or FALSE based on the text:\n1) The participants pitched their tents near a pine forest upon arriving on Friday morning.\n2) The science camp lasted for five full days at a botanical center in Bogor.\n3) The writer’s team tested stream water using portable digital pH sensors.\n4) The writer’s solar-powered miniature car won first place in the Saturday race.\n5) Every student received a certificate from the camp instructors before going home.',
    options: [
      { key: 'A', text: "True – True – True – False – True" },
      { key: 'B', text: "True – False – True – True – True" },
      { key: 'C', text: "True – False – False – False – True" },
      { key: 'D', text: "True – False – True – False – True" },
      { key: 'E', text: "False – False – True – True – False" }
    ],
    correct_answer: 'D',
    hint: 'Check the exact trip duration ("three-day") and the Saturday car race placement ("second place").',
    explanation: 'Statements 1, 3, and 5 match the text (True). Statement 2 is False (it was a three-day camp, not five days), and Statement 4 is False (the car finished in second place, not first).',
    tags: ['true-false', 'hots', 'science-camp'],
  },
  {
    code: 'ENG10-RD-019',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOGOR,
    question_text: 'Why did the writer’s team spend hours modifying their miniature car’s wheel alignment on Saturday?',
    options: [
      { key: 'A', text: "To replace broken solar cells with heavy steel batteries." },
      { key: 'B', text: "To ensure the miniature solar car could travel straight during the race." },
      { key: 'C', text: "To turn the cardboard vehicle into a waterproof boat for stream testing." },
      { key: 'D', text: "To match the exact wheel size used by the park rangers’ buses." },
      { key: 'E', text: "To make the car light enough to carry up the hillside on Sunday." }
    ],
    correct_answer: 'B',
    hint: 'Look at the third sentence of paragraph 3.',
    explanation: 'The text states: "My group spent hours adjusting the wheel alignment so our car could run straight."',
    tags: ['recount', 'purpose', 'science-camp'],
  },
  {
    code: 'ENG10-RD-020',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOGOR,
    question_text: 'Which statement accurately describes the writer’s personal background and feelings before the camp began?',
    options: [
      { key: 'A', text: "The writer worried mostly about losing the astronomical telescope contest." },
      { key: 'B', text: "The writer felt excited to join despite never having camped away from home previously." },
      { key: 'C', text: "The writer was reluctant to go because they had attended many overnight camps." },
      { key: 'D', text: "The writer joined only because every science club member was required to teach pH testing." },
      { key: 'E', text: "The writer already worked part-time at the Bogor botanical research center." }
    ],
    correct_answer: 'B',
    hint: 'Read the second sentence of the opening paragraph closely.',
    explanation: 'The writer writes: "I was thrilled to join the trip, even though I had never camped away from home before." ("Thrilled" means excited.)',
    tags: ['recount', 'inference', 'science-camp'],
  },

  // =========================================================================
  // NEW PASSAGE 5: LEGEND OF MOUNT TENGGER & RORO ANTENG (4 Qs)
  // =========================================================================
  {
    code: 'ENG10-RD-021',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TENGGER,
    question_text: 'Under what condition did the mountain spirits agree to grant Roro Anteng and Joko Seger twenty-five children?',
    options: [
      { key: 'A', text: "They were required to sacrifice the youngest child to the crater in the future." },
      { key: 'B', text: "They must prohibit villagers from farming on the mountain slopes." },
      { key: 'C', text: "They could never mention the names of their Majapahit ancestors." },
      { key: 'D', text: "They had to relocate their entire kingdom away from East Java." },
      { key: 'E', text: "They had to build twenty-five stone temples around Mount Bromo." }
    ],
    correct_answer: 'A',
    hint: 'Read the third sentence of the second paragraph detailing the sacred vow.',
    explanation: 'The mountain spirits stipulated "one sacred vow: the youngest child must one day be offered back into the volcanic crater as a symbol of gratitude."',
    tags: ['narrative', 'legend', 'tengger'],
  },
  {
    code: 'ENG10-RD-022',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TENGGER,
    question_text: 'Why did Mount Bromo erupt violently according to the legend?',
    options: [
      { key: 'A', text: "Joko Seger refused to let villagers celebrate the harvest festival." },
      { key: 'B', text: "Roro Anteng forgot to meditate on the mountain top before winter." },
      { key: 'C', text: "Nearby kingdoms attacked the Tengger highland settlement." },
      { key: 'D', text: "Kusuma accidentally dropped a flaming torch near the crater rim." },
      { key: 'E', text: "The couple broke their solemn vow by hiding their twenty-fifth child." }
    ],
    correct_answer: 'E',
    hint: 'Check why the mountain spirits became enraged in the third paragraph.',
    explanation: 'Out of parental love, Roro Anteng and Joko Seger hid Kusuma instead of keeping their promise, and Mount Bromo erupted because of "the broken vow."',
    tags: ['narrative', 'cause-effect', 'tengger'],
  },
  {
    code: 'ENG10-RD-023',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C1',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TENGGER,
    question_text: 'The word "prosperity" in the first paragraph ("Despite their prosperity, years went by without them having any children...") is closest in meaning to ….',
    options: [
      { key: 'A', text: "anger" },
      { key: 'B', text: "poverty" },
      { key: 'C', text: "hesitation" },
      { key: 'D', text: "wealth and well-being" },
      { key: 'E', text: "loneliness" }
    ],
    correct_answer: 'D',
    hint: 'Consider how a peaceful, kindly ruled highland community usually thrives.',
    explanation: '"Prosperity" refers to flourishing success, abundance, and material well-being.',
    tags: ['vocabulary', 'synonym', 'tengger'],
  },
  {
    code: 'ENG10-RD-024',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_TENGGER,
    question_text: 'Which moral value is most strongly highlighted by Kusuma’s final action in the story?',
    options: [
      { key: 'A', text: "Avoiding highland regions prevents natural disasters from occurring." },
      { key: 'B', text: "Power is only preserved through strict silence during royal ceremonies." },
      { key: 'C', text: "Selfless courage and sacrifice for the safety of one’s family and community." },
      { key: 'D', text: "Accumulating personal wealth is more important than keeping promises." },
      { key: 'E', text: "Parents should always conceal difficult truths from their youngest children." }
    ],
    correct_answer: 'C',
    hint: 'Reflect on why the Tengger community still honors Kusuma every year during the Kasada ceremony.',
    explanation: 'Kusuma stepped willingly toward the crater "knowing the danger threatening his family and villagers," demonstrating selflessness and bravery for the community.',
    tags: ['narrative', 'moral-value', 'hots', 'tengger'],
  },

  // =========================================================================
  // NEW PASSAGE 6: THE VANISHED VIOLIN OF CONSERVATORY HALL (4 Qs)
  // =========================================================================
  {
    code: 'ENG10-RD-025',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_VIOLIN,
    question_text: 'How did Inspector Maya Lin rule out the possibility that an outsider broke in through the dressing room window?',
    options: [
      { key: 'A', text: "The thick layer of dust on the outside stone ledge was completely undisturbed." },
      { key: 'B', text: "Security guards stood directly beneath the window throughout soundcheck." },
      { key: 'C', text: "The window frame was too narrow for a violin case to pass through." },
      { key: 'D', text: "The garden window was bolted shut from the exterior wall." },
      { key: 'E', text: "Heavy rain had washed away any footprints on the wooden stage floor." }
    ],
    correct_answer: 'A',
    hint: 'Examine what Maya observed right outside the slightly opened sash window.',
    explanation: 'Although the window was slightly open, the untouched thick dust on the outer ledge proved nobody had climbed over it.',
    tags: ['narrative', 'mystery', 'deduction'],
  },
  {
    code: 'ENG10-RD-026',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_VIOLIN,
    question_text: 'Which pair of physical clues contradicted Lucas’s alibi of staying locked inside the basement for two hours?',
    options: [
      { key: 'A', text: "A bent basement key and empty candle holders backstage." },
      { key: 'B', text: "Fresh pine rosin on his woolen coat cuff and warm chamomile tea beside his toolkit." },
      { key: 'C', text: "Fingerprints on the garden window ledge and missing sheet music." },
      { key: 'D', text: "Torn concert tickets in his pocket and muddy footprints near the garden." },
      { key: 'E', text: "Broken piano strings and velvet cloth torn from the maestro’s case." }
    ],
    correct_answer: 'B',
    hint: 'Read the final paragraph where Inspector Maya confronts Lucas.',
    explanation: 'Warm herbal/chamomile tea meant someone had just been in the dressing room, and fresh pine rosin on Lucas’s coat linked him directly to hastily wrapping the violin.',
    tags: ['narrative', 'mystery', 'evidence'],
  },
  {
    code: 'ENG10-RD-027',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_VIOLIN,
    question_text: 'Why did Lucas hide Maestro Ortega’s violin inside the grand piano bench?',
    options: [
      { key: 'A', text: "He wanted to protect the fragile wood from winter humidity." },
      { key: 'B', text: "He mistook the instrument case for his own sheet-music bag." },
      { key: 'C', text: "He acted out of jealousy toward the celebrated musician." },
      { key: 'D', text: "He planned to tune the strings before the autumn concert began." },
      { key: 'E', text: "He was asked by Elena the stage manager to clean the velvet case." }
    ],
    correct_answer: 'C',
    hint: 'Check the closing sentence of the story.',
    explanation: 'The final sentence explains that "Lucas admitted concealing the violin inside the grand piano bench out of jealousy."',
    tags: ['narrative', 'mystery', 'detail'],
  },
  {
    code: 'ENG10-RD-028',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C1',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_VIOLIN,
    question_text: 'The word "concealing" in the last sentence ("Lucas admitted concealing the violin...") means ….',
    options: [
      { key: 'A', text: "displaying publicly" },
      { key: 'B', text: "returning immediately" },
      { key: 'C', text: "repairing carefully" },
      { key: 'D', text: "tuning properly" },
      { key: 'E', text: "hiding intentionally" }
    ],
    correct_answer: 'E',
    hint: 'Think about what Lucas did by putting the missing violin inside the piano bench.',
    explanation: '"Concealing" means keeping something out of sight or hiding it deliberately.',
    tags: ['vocabulary', 'synonym', 'mystery'],
  },

  // =========================================================================
  // NEW PASSAGE 7: BOROBUDUR ENGINEERING (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-RD-029',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOROBUDUR,
    question_text: 'How did Sailendra architects hold Borobudur’s two million stone blocks together without using cement?',
    options: [
      { key: 'A', text: "By binding the perimeter walls with thick teakwood timber beams." },
      { key: 'B', text: "By hammering long iron rods vertically down every terrace." },
      { key: 'C', text: "By carving interlocking dovetail and mortise-and-tenon stone joints." },
      { key: 'D', text: "By applying pine resin mixed with volcanic clay between stones." },
      { key: 'E', text: "By melting limestone mortar over the surface with torches." }
    ],
    correct_answer: 'C',
    hint: 'Read the opening sentence of the second paragraph.',
    explanation: 'Paragraph 2 explains that ancient Javanese architects engineered interlocking stone joints (dovetail and mortise-and-tenon connections) instead of chemical adhesives.',
    tags: ['historical-text', 'detail', 'borobudur'],
  },
  {
    code: 'ENG10-RD-030',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOROBUDUR,
    question_text: 'What crucial engineering problem did the carved jaladwara spouts solve for Borobudur?',
    options: [
      { key: 'A', text: "They kept volcanic ash from settling onto the upper stupas." },
      { key: 'B', text: "They stored drinking water for pilgrims visiting during the dry season." },
      { key: 'C', text: "They drained tropical monsoon water away so the earthen hill core would not erode and collapse." },
      { key: 'D', text: "They channeled sunlight into the lower dark relief galleries." },
      { key: 'E', text: "They amplified sacred chants across the surrounding valleys of Magelang." }
    ],
    correct_answer: 'C',
    hint: 'Look at the structural consequence mentioned right after jaladwara in paragraph 2.',
    explanation: 'The jaladwara spouts channeled heavy monsoon rain out of the monument core, preventing soil erosion and internal structural collapse.',
    tags: ['historical-text', 'hots', 'borobudur'],
  },
  {
    code: 'ENG10-RD-031',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_BOROBUDUR,
    question_text:
      'Evaluate statements (1–5) about Borobudur:\n1) Borobudur was constructed in Central Java by the Sailendra Dynasty.\n2) The builders relied on modern waterproof mortar to join limestone bricks.\n3) Over one hundred jaladwara spouts served as an ancient drainage system.\n4) UNESCO led restoration efforts on the temple during the 1970s.\n5) The monument contains fewer than 500 carved relief panels.\nWhich TRUE / FALSE sequence is correct?',
    options: [
      { key: 'A', text: "True – False – True – True – False" },
      { key: 'B', text: "False – True – False – True – True" },
      { key: 'C', text: "True – True – True – False – False" },
      { key: 'D', text: "False – False – True – True – True" },
      { key: 'E', text: "True – False – False – True – False" }
    ],
    correct_answer: 'A',
    hint: 'Check statement 2 ("without cement or mortar") and statement 5 ("2,672 intricate relief panels").',
    explanation: 'Statements 1, 3, and 4 are True; 2 is False (fitted without cement/mortar using interlocking stones) and 5 is False (it has 2,672 relief panels, far more than 500).',
    tags: ['true-false', 'hots', 'borobudur'],
  },

  // =========================================================================
  // NEW PASSAGE 8: THE ROSE-RED CITY OF PETRA (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-RD-032',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_PETRA,
    question_text: 'What enabled the Nabataean Kingdom to accumulate immense wealth in Petra?',
    options: [
      { key: 'A', text: "Mining rare gemstones inside northern European mountains." },
      { key: 'B', text: "Selling sandstone sculptures directly to modern tourists." },
      { key: 'C', text: "Receiving annual tribute gifts from Swiss explorers." },
      { key: 'D', text: "Charging levies and safeguarding caravans along ancient spice and silk trade crossroads." },
      { key: 'E', text: "Exporting wooden ships built in southern Jordan harbors." }
    ],
    correct_answer: 'D',
    hint: 'Read the second sentence of the opening paragraph.',
    explanation: 'Located at the crossroads of major spice and silk routes, Petra prospered from caravan taxes and trade protection.',
    tags: ['historical-text', 'detail', 'petra'],
  },
  {
    code: 'ENG10-RD-033',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_PETRA,
    question_text: 'Why did the Nabataeans construct dams, rock-cut cisterns, and ceramic clay pipelines across Petra?',
    options: [
      { key: 'A', text: "To capture scarce seasonal winter rainwater for year-round supply while preventing canyon flash floods." },
      { key: 'B', text: "To generate hydroelectric power for desert workshops and public baths." },
      { key: 'C', text: "To divert melted glacier water away from agricultural valleys in Syria." },
      { key: 'D', text: "To wash away red sandstone dust from temple carvings before festivals." },
      { key: 'E', text: "To transport hot mineral oil beneath the sandstone cliffs toward Egypt." }
    ],
    correct_answer: 'A',
    hint: 'Look at how paragraph 2 addresses both "seasonal drought" and "sudden flash floods."',
    explanation: 'Their hydraulic system solved two desert extremes at once: harvesting rare winter rain for year-round use and shielding the narrow Siq canyon from flash floods.',
    tags: ['historical-text', 'inference', 'petra'],
  },
  {
    code: 'ENG10-RD-034',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C1',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_PETRA,
    question_text: 'The phrase "fell into obscurity" in the third paragraph implies that Petra ….',
    options: [
      { key: 'A', text: "gained instant popularity throughout Europe during the fifth century." },
      { key: 'B', text: "was completely submerged under seawater after 363 CE." },
      { key: 'C', text: "was transformed into an international center for clay manufacturing." },
      { key: 'D', text: "became largely forgotten and unknown to the outside world." },
      { key: 'E', text: "expanded rapidly into the busiest port on the Mediterranean coast." }
    ],
    correct_answer: 'D',
    hint: 'Consider what happened before Johann Ludwig Burckhardt "rediscovered" it in 1812.',
    explanation: '"Fell into obscurity" means fading from wider historical awareness until its 1812 rediscovery.',
    tags: ['vocabulary', 'inference', 'petra'],
  },

  // =========================================================================
  // NEW PASSAGE 9: KARIMUNJAWA MARINE CAMP RECOUNT (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-RD-035',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_KARIMUNJAWA,
    question_text: 'What conservation activity did the students carry out underwater on the second day of the camp?',
    options: [
      { key: 'A', text: "Guiding village elders on how to repair wooden ferry hulls." },
      { key: 'B', text: "Planting fifty mangrove saplings inside the village wooden boathouse." },
      { key: 'C', text: "Transplanting sixty healthy staghorn coral fragments onto nursery frames." },
      { key: 'D', text: "Measuring river pH levels near a pine forest mountain trail." },
      { key: 'E', text: "Building miniature solar boats out of recycled plastic bottles." }
    ],
    correct_answer: 'C',
    hint: 'Check the first sentence of the third paragraph.',
    explanation: 'On day two, students worked with island rangers to transplant sixty healthy staghorn coral fragments onto underwater nursery frames.',
    tags: ['recount', 'detail', 'karimunjawa'],
  },
  {
    code: 'ENG10-RD-036',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_KARIMUNJAWA,
    question_text: 'Why did the village elders value keeping coastal mangrove forests intact?',
    options: [
      { key: 'A', text: "Mangroves stopped marine biologists from entering shallow coral zones." },
      { key: 'B', text: "Dense mangrove root networks had protected their wooden boats during severe storms." },
      { key: 'C', text: "Mangrove leaves lowered the ocean temperature around parrotfish reefs." },
      { key: 'D', text: "Tourists paid entrance fees solely to camp inside the mangrove nursery." },
      { key: 'E', text: "Mangrove trunks provided lumber for constructing the eco-lodge ferry." }
    ],
    correct_answer: 'B',
    hint: 'Read the final sentence of paragraph 3.',
    explanation: 'Village elders shared how "intact mangrove roots had shielded their wooden boats during severe storms."',
    tags: ['recount', 'cause-effect', 'karimunjawa'],
  },
  {
    code: 'ENG10-RD-037',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_KARIMUNJAWA,
    question_text: 'What main insight did the writer gain by the conclusion of the Karimunjawa expedition?',
    options: [
      { key: 'A', text: "Rough ferry crossings prevent high school clubs from studying coral bleaching." },
      { key: 'B', text: "Marine conservation works only when island residents are banned from beaches." },
      { key: 'C', text: "Underwater quadrats can completely reverse global ocean warming overnight." },
      { key: 'D', text: "Artificial plastic reefs grow faster than natural staghorn coral nurseries." },
      { key: 'E', text: "Effective ocean protection requires both scientific data gathering and cooperation with local coastal people." }
    ],
    correct_answer: 'E',
    hint: 'Read the concluding sentence of the text closely.',
    explanation: 'The writer concludes that marine conservation "depends equally on scientific monitoring and respectful partnership with local coastal communities."',
    tags: ['recount', 'main-idea', 'hots', 'karimunjawa'],
  },

  // =========================================================================
  // NEW PASSAGE 10: ROBOTICS OLYMPIAD IN SURABAYA (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-RD-038',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_ROBOTICS,
    question_text: 'What unexpected problem caused the team’s robot to veer off the curved track during qualification trials?',
    options: [
      { key: 'A', text: "Bright overhead spotlights interfered with the infrared sensors." },
      { key: 'B', text: "Dead batteries drained overnight inside the physics workshop." },
      { key: 'C', text: "A cardboard wheel jammed during the thirty-minute repair window." },
      { key: 'D', text: "The Bandung team accidentally switched frequency channels nearby." },
      { key: 'E', text: "Loose solder joints snapped when the robot hit the exhibition floor." }
    ],
    correct_answer: 'A',
    hint: 'Look at the first sentence of the second paragraph.',
    explanation: 'The robot veered off course "because harsh overhead spotlights confused its infrared color sensors."',
    tags: ['recount', 'detail', 'robotics'],
  },
  {
    code: 'ENG10-RD-039',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_ROBOTICS,
    question_text: 'In paragraph 3, the phrase "that quick adjustment" refers to ….',
    options: [
      { key: 'A', text: "recalibrating the sensor thresholds and adding a matte black cardboard hood" },
      { key: 'B', text: "practicing after school every afternoon for six months prior" },
      { key: 'C', text: "stepping onto the podium in third place behind Bandung and Yogyakarta" },
      { key: 'D', text: "asking event organizers to turn off all spotlights in the Surabaya hall" },
      { key: 'E', text: "replacing their infrared sensor array with a copper wiring harness" }
    ],
    correct_answer: 'A',
    hint: 'Look back at the second sentence of paragraph 2 immediately preceding "Thanks to that quick adjustment."',
    explanation: 'In the thirty-minute repair window, they recalibrated sensor threshold values and fitted a matte black cardboard hood over the sensors to block glare.',
    tags: ['pronoun-reference', 'recount', 'robotics'],
  },
  {
    code: 'ENG10-RD-040',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'reading-narrative-recount',
    topic_name: 'Reading: Narrative, Mystery, Historical & Recount',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content: PASSAGE_ROBOTICS,
    question_text: 'Which character trait of the writer’s team contributed most directly to winning the bronze medal after their initial setback?',
    options: [
      { key: 'A', text: "Spending zero preparation time before October so they felt relaxed." },
      { key: 'B', text: "Copying the obstacle program built by the Surabaya exhibition committee." },
      { key: 'C', text: "Arguing with the judges about the brightness of the exhibition lights." },
      { key: 'D', text: "Refusing to test their robot during Saturday qualification runs." },
      { key: 'E', text: "Remaining calm under pressure and collaborating effectively to diagnose a hardware glitch." }
    ],
    correct_answer: 'E',
    hint: 'Notice what the writer highlights in paragraphs 2 and 3 ("Instead of panicking... calm teamwork").',
    explanation: 'Instead of panicking when the sensors failed under spotlights, the team stayed calm during the 30-minute window and worked together to fix the optical interference.',
    tags: ['recount', 'inference', 'hots', 'robotics'],
  },
];
