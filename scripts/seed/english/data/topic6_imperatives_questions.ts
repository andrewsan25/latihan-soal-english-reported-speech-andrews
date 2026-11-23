import type { EnglishQuestionSeed } from '../types.ts';

export const topic6ImperativesQuestions: EnglishQuestionSeed[] = [
  // =========================================================================
  // SOURCE SAS X ITEMS (Q36-40 + Q50 = 6 ITEMS: IQ-001 .. IQ-006)
  // =========================================================================
  {
    code: 'ENG10-IQ-001',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content:
      'Next week, our school will host an international cultural exchange fair in the auditorium. Many guests from partner schools will visit our booths. Therefore, … when greeting the visitors and explaining our local traditions. Stand tall, make eye contact, and speak clearly.',
    question_text: 'Which is the correct imperative form to complete the paragraph above?',
    options: [
      { key: 'A', text: "You are polite" },
      { key: 'B', text: "Must be polite" },
      { key: 'C', text: "Be polite" },
      { key: 'D', text: "Being polite" },
      { key: 'E', text: "To be polite" }
    ],
    correct_answer: 'C',
    hint: 'An imperative sentence with an adjective ("polite") starts directly with the bare infinitive "Be."',
    explanation: 'Imperatives using adjectives use the base verb "Be" without a subject ("Be polite"), matching "Stand tall, make eye contact, and speak clearly."',
    tags: ['imperatives', 'positive-imperative', 'sas-x'],
  },
  {
    code: 'ENG10-IQ-002',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content:
      'Hiking in a national park is an exhilarating outdoor activity. While walking along the forest trail, … plastic wrappers or bottles on the ground because litter harms local wildlife. In addition, … on the marked wooden pathways so you do not damage rare plants.',
    question_text: 'Which is the correct imperative form to complete the paragraph above?',
    options: [
      { key: 'A', text: "don't leaving – stayed" },
      { key: 'B', text: "no leaving – you stay" },
      { key: 'C', text: "not leave – staying" },
      { key: 'D', text: "do not leave – stay" },
      { key: 'E', text: "to not leave – to stay" }
    ],
    correct_answer: 'D',
    hint: 'Negative imperatives take "do not + V1", while positive imperatives take bare "V1".',
    explanation: 'Use "do not leave" for the negative command and the base verb "stay" for the positive command.',
    tags: ['imperatives', 'negative-imperative', 'sas-x'],
  },
  {
    code: 'ENG10-IQ-003',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'html',
    stimulus_content:
      'Last Sunday afternoon, my cousins and I visited the city planetarium. We explored the space exhibition and touched a real meteorite. <u class="eng-underline">At three o\'clock</u>, we entered the dome theater to watch a documentary about black holes. Afterward, we bought space-themed souvenirs at the gift shop.',
    question_text: 'Which question correctly asks for the underlined information?',
    options: [
      { key: 'A', text: "What did you do inside the dome theater at three o’clock?" },
      { key: 'B', text: "When did you enter the dome theater to watch a documentary?" },
      { key: 'C', text: "When do you enter the dome theater to watch a documentary?" },
      { key: 'D', text: "Where did you enter the dome theater to watch a documentary?" },
      { key: 'E', text: "Who entered the dome theater with you last Sunday afternoon?" }
    ],
    correct_answer: 'B',
    hint: '"At three o\'clock" is a time phrase ("When"), and the action occurred "Last Sunday afternoon" (Simple Past auxiliary "did").',
    explanation: '"At three o’clock" specifies time ("When"), and Simple Past requires auxiliary "did" + base verb "enter."',
    tags: ['wh-questions', 'simple-past', 'sas-x'],
  },
  {
    code: 'ENG10-IQ-004',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'html',
    stimulus_content:
      'Kevin is organizing his studio desk for an upcoming illustration commission. He wants all his art supplies within easy reach. He has arranged <u class="eng-underline">two dozen watercolor brushes</u> inside a ceramic jar. He is excited to start painting the book cover tonight.',
    question_text: 'Which question correctly asks for the underlined information?',
    options: [
      { key: 'A', text: "Where has Kevin arranged two dozen watercolor brushes?" },
      { key: 'B', text: "Who has arranged two dozen watercolor brushes in a jar?" },
      { key: 'C', text: "What has Kevin arranged inside a ceramic jar?" },
      { key: 'D', text: "Why has Kevin arranged two dozen watercolor brushes?" },
      { key: 'E', text: "When has Kevin arranged two dozen watercolor brushes?" }
    ],
    correct_answer: 'C',
    hint: '"Two dozen watercolor brushes" is the object ("What"), and the sentence uses Present Perfect ("has arranged").',
    explanation: 'Asking for the object ("two dozen watercolor brushes") uses "What" while preserving Present Perfect inversion ("has Kevin arranged").',
    tags: ['wh-questions', 'present-perfect', 'sas-x'],
  },
  {
    code: 'ENG10-IQ-005',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content:
      'Look at the indoor swimming pool during the morning training session right now. Several coaches are standing beside the lanes holding stopwatches.\n…\nYes, the varsity swimmers are practicing their butterfly strokes. Their teammates are encouraging them from the poolside.',
    question_text: 'Which question correctly completes the dialogue above?',
    options: [
      { key: 'A', text: "Do the varsity swimmers practice their butterfly strokes?" },
      { key: 'B', text: "Can the varsity swimmers practice their butterfly strokes?" },
      { key: 'C', text: "Have the varsity swimmers practiced their butterfly strokes?" },
      { key: 'D', text: "Are the varsity swimmers practicing their butterfly strokes?" },
      { key: 'E', text: "Did the varsity swimmers practice their butterfly strokes?" }
    ],
    correct_answer: 'D',
    hint: 'Match both tense ("are practicing") and affirmative reply structure.',
    explanation: 'The reply "Yes, the varsity swimmers are practicing..." confirms a Present Continuous Yes/No question starting with "Are the varsity swimmers practicing...?".',
    tags: ['yes-no-questions', 'present-continuous', 'sas-x'],
  },
  {
    code: 'ENG10-IQ-006',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'html',
    stimulus_content:
      'Desert cacti survive prolonged droughts <u class="eng-underline">by storing large amounts of water inside their thick stems</u>.',
    question_text: 'Which question uses the underlined phrase above as its exact answer?',
    options: [
      { key: 'A', text: "Why do desert cacti store large amounts of water?" },
      { key: 'B', text: "What do desert cacti avoid during dry winter months?" },
      { key: 'C', text: "When did desert cacti store large amounts of water?" },
      { key: 'D', text: "Where do desert cacti grow during prolonged droughts?" },
      { key: 'E', text: "How do desert cacti survive prolonged droughts?" }
    ],
    correct_answer: 'E',
    hint: '"By + V-ing" answers a question about method or manner ("How"). Notice plural Simple Present "survive."',
    explanation: 'Prepositional phrases starting with "by + V-ing" explain method ("How"), and Simple Present plural "desert cacti" uses auxiliary "do" + V1 ("survive").',
    tags: ['wh-questions', 'simple-present', 'hots', 'sas-x'],
  },

  // =========================================================================
  // NEW QUESTIONS: IMPERATIVES (8 ITEMS: IQ-007 .. IQ-014)
  // =========================================================================
  {
    code: 'ENG10-IQ-007',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content:
      'When transferring fragile antique manuscripts inside the school archive room, … cotton gloves first so natural skin oils do not stain the paper.',
    question_text: 'Which imperative form correctly completes the instruction?',
    options: [
      { key: 'A', text: "put on" },
      { key: 'B', text: "putting on" },
      { key: 'C', text: "you putting on" },
      { key: 'D', text: "to put on" },
      { key: 'E', text: "puts on" }
    ],
    correct_answer: 'A',
    hint: 'Direct procedural commands start with a base verb (V1).',
    explanation: 'Positive imperatives use the bare infinitive without "to" or -s/-ing endings: "put on."',
    tags: ['imperatives', 'positive-imperative'],
  },
  {
    code: 'ENG10-IQ-008',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content:
      'When thunder echoes across the soccer field during afternoon practice, … under tall isolated metal flagpoles, and … calmly into the brick gymnasium building.',
    question_text: 'Which imperative pair accurately completes the safety rule?',
    options: [
      { key: 'A', text: "to not stand – walked" },
      { key: 'B', text: "do not stand – walk" },
      { key: 'C', text: "not standing – walking" },
      { key: 'D', text: "no stand – to walk" },
      { key: 'E', text: "does not stand – walks" }
    ],
    correct_answer: 'B',
    hint: 'First warn against standing under flagpoles ("do not + V1"), then tell students calmly to enter ("V1").',
    explanation: 'Negative command "do not stand" followed by affirmative command "walk" keeps parallel imperative structure.',
    tags: ['imperatives', 'negative-imperative'],
  },
  {
    code: 'ENG10-IQ-009',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content:
      'Public speaking beginners often speak far too quickly when nervous. Therefore, … a deep breath before beginning your presentation, and … afraid to pause briefly after key statistics.',
    question_text: 'Which imperative pair best completes the advice?',
    options: [
      { key: 'A', text: "taking – are not" },
      { key: 'B', text: "take – do not be" },
      { key: 'C', text: "takes – be not to" },
      { key: 'D', text: "took – never to be" },
      { key: 'E', text: "to take – not be" }
    ],
    correct_answer: 'B',
    hint: 'For negative imperatives with adjective "afraid," place "do not" before "be."',
    explanation: 'Use base verb "take" for the first action and "do not be" before the adjective "afraid."',
    tags: ['imperatives', 'be-imperative'],
  },
  {
    code: 'ENG10-IQ-010',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'To brew crisp pour-over coffee cleanly, … boiling water slowly in circular motion over the grounds, and … the paper filter until all water finishes dripping.',
    question_text: 'Which imperative pair accurately completes the brewing steps?',
    options: [
      { key: 'A', text: "pours – not lift" },
      { key: 'B', text: "to pour – don’t to lift" },
      { key: 'C', text: "poured – never lifted" },
      { key: 'D', text: "pouring – do not lifting" },
      { key: 'E', text: "pour – do not lift" }
    ],
    correct_answer: 'E',
    hint: 'Instructions require bare V1 ("pour") and "do not + V1" ("do not lift").',
    explanation: 'Imperative recipes use direct base verbs ("pour") and "do not + base verb" ("do not lift").',
    tags: ['imperatives', 'procedure'],
  },
  {
    code: 'ENG10-IQ-011',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'When working near active 3D-printer nozzles in the engineering lab, … careful not to touch hot aluminum beds, and always … protective heat-resistant gloves when removing finished models.',
    question_text: 'Which imperative verb pair accurately completes both safety rules?',
    options: [
      { key: 'A', text: "are – wearing" },
      { key: 'B', text: "being – wears" },
      { key: 'C', text: "must – must wear" },
      { key: 'D', text: "be – wear" },
      { key: 'E', text: "to be – to wear" }
    ],
    correct_answer: 'D',
    hint: 'Adjective imperatives ("___ careful") require the bare infinitive "be," paired with base verb "wear."',
    explanation: 'In direct imperative instructions, adjectives take bare "be" ("be careful") and actions take V1 ("wear").',
    tags: ['imperatives', 'be-imperative'],
  },
  {
    code: 'ENG10-IQ-012',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Before locking the chemistry lab after fifth period, remember the closing checklist: … every Bunsen burner valve tightly, and … used beakers unwashed inside the sink.',
    question_text: 'Which imperative pair correctly completes the laboratory checklist?',
    options: [
      { key: 'A', text: "shut off – never leave" },
      { key: 'B', text: "shut off – never to leave" },
      { key: 'C', text: "shuts off – did not leave" },
      { key: 'D', text: "to shut off – do not leaving" },
      { key: 'E', text: "shutting off – not leave" }
    ],
    correct_answer: 'A',
    hint: 'Both "shut off" (V1) and "never leave" ("never + V1") form standard direct commands.',
    explanation: 'Positive imperative uses "shut off," and strong negative imperative uses "never + bare infinitive" ("never leave").',
    tags: ['imperatives', 'negative-imperative'],
  },
  {
    code: 'ENG10-IQ-013',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Read these five sign notices posted at a botanical park:\n1. Please do not feed the wild monkeys along the bridge.\n2. Visitors to keep quiet inside the butterfly greenhouse.\n3. Let us check the weather forecast before climbing.\n4. Always wearing life jackets when kayaking on the lake.\n5. Never pick rare orchids from the forest floor.',
    question_text: 'Which notice number contains a grammatical error in its imperative structure?',
    options: [
      { key: 'A', text: "Notice 3 (\"Let us check...\") and Notice 5 (\"Never pick...\")" },
      { key: 'B', text: "Notice 1 and Notice 2 only" },
      { key: 'C', text: "Notice 1 (\"Please do not feed...\") and Notice 5 (\"Never pick...\")" },
      { key: 'D', text: "Notice 1 (\"Please do not feed...\") and Notice 3 (\"Let us check...\")" },
      { key: 'E', text: "Notice 2 (\"Visitors to keep...\") and Notice 4 (\"Always wearing...\")" }
    ],
    correct_answer: 'E',
    hint: 'Imperatives never use "to + V1" without a subject verb or standalone "-ing" verbs ("wearing").',
    explanation: 'Notice 2 wrongly puts a bare to-infinitive ("Visitors to keep") instead of "Keep quiet," and Notice 4 uses "-ing" ("wearing") instead of bare "Always wear."',
    tags: ['imperatives', 'error-analysis', 'hots'],
  },
  {
    code: 'ENG10-IQ-014',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'When installing software updates on school Chromebooks, … patient if the progress bar pauses at eighty percent, and … the power button mid-installation.',
    question_text: 'Which imperative pair accurately completes the IT guide?',
    options: [
      { key: 'A', text: "be – do not press" },
      { key: 'B', text: "being – never pressing" },
      { key: 'C', text: "keep being – don’t pressing" },
      { key: 'D', text: "to be – not to press" },
      { key: 'E', text: "are – should not press" }
    ],
    correct_answer: 'A',
    hint: 'Pair adjective "patient" with "Be" and prohibit pressing the button with "do not + V1."',
    explanation: '"Be patient" uses base "be" + adjective, and "do not press" provides the negative command.',
    tags: ['imperatives', 'be-imperative', 'negative-imperative'],
  },

  // =========================================================================
  // NEW QUESTIONS: UNDERLINED WH-QUESTIONS (8 ITEMS: IQ-015 .. IQ-022)
  // =========================================================================
  {
    code: 'ENG10-IQ-015',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'html',
    stimulus_content:
      '<u class="eng-underline">Two Grade 10 biology students</u> discovered an unusual bioluminescent mushroom behind the school greenhouse yesterday.',
    question_text: 'Which WH-question correctly asks for the underlined subject?',
    options: [
      { key: 'A', text: "Who was discovered an unusual bioluminescent mushroom behind the school greenhouse yesterday?" },
      { key: 'B', text: "Who did discover an unusual bioluminescent mushroom behind the school greenhouse yesterday?" },
      { key: 'C', text: "Whom discovered an unusual bioluminescent mushroom behind the school greenhouse yesterday?" },
      { key: 'D', text: "Who discovered an unusual bioluminescent mushroom behind the school greenhouse yesterday?" },
      { key: 'E', text: "Which discovered an unusual bioluminescent mushroom behind the school greenhouse yesterday?" }
    ],
    correct_answer: 'D',
    hint: 'When asking about the SUBJECT of a Simple Past verb, do NOT add the auxiliary "did"—put "Who" straight before the V2 verb.',
    explanation: 'Subject questions omit do/does/did auxiliaries: "Who discovered ...?" directly replaces the subject phrase.',
    tags: ['wh-questions', 'subject-question', 'hots'],
  },
  {
    code: 'ENG10-IQ-016',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'html',
    stimulus_content:
      'Dr. Ratna has been mentoring the national physics Olympiad squad <u class="eng-underline">for six consecutive months</u>.',
    question_text: 'Which question accurately asks for the underlined duration?',
    options: [
      { key: 'A', text: "When has Dr. Ratna been mentoring the national physics Olympiad squad?" },
      { key: 'B', text: "How many times has Dr. Ratna been mentoring the national physics Olympiad squad?" },
      { key: 'C', text: "How long has Dr. Ratna been mentoring the national physics Olympiad squad?" },
      { key: 'D', text: "How long Dr. Ratna has been mentoring the national physics Olympiad squad?" },
      { key: 'E', text: "How often did Dr. Ratna mentor the national physics Olympiad squad?" }
    ],
    correct_answer: 'C',
    hint: '"For six consecutive months" asks about time span ("How long"), and the verb uses Present Perfect Continuous inversion ("has Dr. Ratna been mentoring").',
    explanation: '"How long" targets duration ("for six months"), followed by inverted auxiliary "has Dr. Ratna been mentoring."',
    tags: ['wh-questions', 'present-perfect-continuous'],
  },
  {
    code: 'ENG10-IQ-017',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'html',
    stimulus_content:
      'The municipal water agency tests reservoir samples <u class="eng-underline">twice every week</u> to verify drinking safety.',
    question_text: 'Which question accurately asks for the underlined frequency?',
    options: [
      { key: 'A', text: "How often tests the municipal water agency reservoir samples?" },
      { key: 'B', text: "How long does the municipal water agency test reservoir samples?" },
      { key: 'C', text: "When did the municipal water agency test reservoir samples?" },
      { key: 'D', text: "How many does the municipal water agency test reservoir samples?" },
      { key: 'E', text: "How often does the municipal water agency test reservoir samples?" }
    ],
    correct_answer: 'E',
    hint: '"Twice every week" asks about frequency ("How often"), and singular Simple Present takes "does ... test."',
    explanation: 'Frequency expressions like "twice every week" answer "How often," inverted with "does" + base verb "test."',
    tags: ['wh-questions', 'simple-present'],
  },
  {
    code: 'ENG10-IQ-018',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'html',
    stimulus_content:
      'The student filmmakers stayed late at the auditorium <u class="eng-underline">because the stage spotlights needed recalibration</u>.',
    question_text: 'Which question accurately asks for the underlined reason?',
    options: [
      { key: 'A', text: "Why did the student filmmakers stay late at the auditorium?" },
      { key: 'B', text: "How did the student filmmakers stay late at the auditorium?" },
      { key: 'C', text: "Why were the student filmmakers stay late at the auditorium?" },
      { key: 'D', text: "Why do the student filmmakers stayed late at the auditorium?" },
      { key: 'E', text: "What did the student filmmakers stay late at the auditorium?" }
    ],
    correct_answer: 'A',
    hint: 'Clauses starting with "because..." answer "Why," and past verb "stayed" takes "did + stay."',
    explanation: '"Why" asks for the reason, paired properly with Simple Past "did ... stay."',
    tags: ['wh-questions', 'simple-past'],
  },
  {
    code: 'ENG10-IQ-019',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'html',
    stimulus_content:
      'Volunteers planted <u class="eng-underline">three hundred mangrove saplings</u> along the northern lagoon yesterday morning.',
    question_text: 'Which question accurately asks for the underlined countable quantity?',
    options: [
      { key: 'A', text: "How many mangrove saplings volunteers planted along the northern lagoon yesterday morning?" },
      { key: 'B', text: "How many mangrove saplings did volunteers plant along the northern lagoon yesterday morning?" },
      { key: 'C', text: "How much mangrove saplings did volunteers plant along the northern lagoon yesterday morning?" },
      { key: 'D', text: "What many mangrove saplings did volunteers plant along the northern lagoon yesterday morning?" },
      { key: 'E', text: "How long did volunteers plant mangrove saplings along the northern lagoon yesterday morning?" }
    ],
    correct_answer: 'B',
    hint: '"Saplings" is plural countable ("How many"), followed by past auxiliary "did" + V1 ("plant").',
    explanation: 'Use "How many" with plural countable nouns ("saplings"), then invert "did volunteers plant."',
    tags: ['wh-questions', 'quantifiers', 'simple-past'],
  },
  {
    code: 'ENG10-IQ-020',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'html',
    stimulus_content:
      'Coach Bima accidentally picked up <u class="eng-underline">Tari\'s</u> bright orange stopwatch near the track bench.',
    question_text: 'Which question asks specifically for the underlined possessive owner?',
    options: [
      { key: 'A', text: "Whose bright orange stopwatch did Coach Bima accidentally pick up near the track bench?" },
      { key: 'B', text: "Whose bright orange stopwatch Coach Bima picked up near the track bench?" },
      { key: 'C', text: "Which Coach Bima accidentally picked up bright orange stopwatch near the track bench?" },
      { key: 'D', text: "Whom bright orange stopwatch did Coach Bima accidentally pick up near the track bench?" },
      { key: 'E', text: "Who bright orange stopwatch did Coach Bima accidentally pick up near the track bench?" }
    ],
    correct_answer: 'A',
    hint: 'To ask about ownership ("Tari\'s"), use "Whose + noun phrase" followed by "did Coach Bima ... pick up."',
    explanation: '"Whose + noun" asks about possession, and past object questions invert with "did" + bare infinitive "pick up."',
    tags: ['wh-questions', 'possessive', 'hots'],
  },
  {
    code: 'ENG10-IQ-021',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'html',
    stimulus_content:
      'The astronomy club will set up three solar telescopes <u class="eng-underline">on the school rooftop observatory</u> tomorrow morning.',
    question_text: 'Which question asks for the underlined location?',
    options: [
      { key: 'A', text: "What will the astronomy club set up on the rooftop tomorrow morning?" },
      { key: 'B', text: "When will the astronomy club set up three solar telescopes tomorrow morning?" },
      { key: 'C', text: "Where does the astronomy club setting up three solar telescopes tomorrow morning?" },
      { key: 'D', text: "Where the astronomy club will set up three solar telescopes tomorrow morning?" },
      { key: 'E', text: "Where will the astronomy club set up three solar telescopes tomorrow morning?" }
    ],
    correct_answer: 'E',
    hint: '"On the school rooftop observatory" answers "Where" with future modal inversion ("will the astronomy club set up").',
    explanation: 'Location questions begin with "Where" and invert the modal "will" before the subject ("will the astronomy club set up").',
    tags: ['wh-questions', 'future-will'],
  },
  {
    code: 'ENG10-IQ-022',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'html',
    stimulus_content:
      'The robotics mentor handed the bronze medal <u class="eng-underline">to our team captain</u> after the final run.',
    question_text: 'Which question asks for the underlined recipient in correct standard English?',
    options: [
      { key: 'A', text: "What did the robotics mentor hand to our team captain after the final run?" },
      { key: 'B', text: "Whose did the robotics mentor hand the bronze medal after the final run?" },
      { key: 'C', text: "Who did the robotics mentor hand the bronze medal to after the final run?" },
      { key: 'D', text: "Who handed the robotics mentor the bronze medal after the final run?" },
      { key: 'E', text: "Whom handed the bronze medal to our team captain after the final run?" }
    ],
    correct_answer: 'C',
    hint: 'Here "our team captain" is the object of the preposition "to," NOT the subject—so keep "did" + V1 ("hand") and retain "to."',
    explanation: 'Object-of-preposition question keeps "to" at the end with inverted past auxiliary: "Who (or Whom) did the robotics mentor hand the bronze medal to...?".',
    tags: ['wh-questions', 'object-question', 'hots'],
  },

  // =========================================================================
  // NEW QUESTIONS: YES/NO QUESTION COMPLETION (3 ITEMS: IQ-023 .. IQ-025)
  // =========================================================================
  {
    code: 'ENG10-IQ-023',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'text',
    stimulus_content:
      'Noah: I heard the archaeology club went to Sangiran last weekend.\n…\nTara: Yes, they examined several fossil exhibits inside the museum pavilion.',
    question_text: 'Which Yes/No question correctly completes Noah’s turn?',
    options: [
      { key: 'A', text: "Do they examine fossil exhibits inside the museum last weekend?" },
      { key: 'B', text: "Were they visit the museum displays inside Sangiran last weekend?" },
      { key: 'C', text: "Did they found the trip informative and visited the museum displays?" },
      { key: 'D', text: "Did they find the trip informative and visit the museum displays?" },
      { key: 'E', text: "Have they examined the museum displays last weekend?" }
    ],
    correct_answer: 'D',
    hint: 'Use "Did + subject + base verb (V1)" for a past Yes/No question.',
    explanation: 'Simple Past questions start with "Did" followed by base verbs ("find" and "visit"), never V2.',
    tags: ['yes-no-questions', 'simple-past'],
  },
  {
    code: 'ENG10-IQ-024',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Farah: You look relieved holding that thick folder.\n…\nRendra: Yes, I have already submitted my complete scholarship essay to the registrar.',
    question_text: 'Which Yes/No question logically leads to Rendra’s reply?',
    options: [
      { key: 'A', text: "Are you submit your complete scholarship essay yet?" },
      { key: 'B', text: "Did you have submitted your complete scholarship essay yet?" },
      { key: 'C', text: "Have you submitted your complete scholarship essay yet?" },
      { key: 'D', text: "Do you already submitted your complete scholarship essay?" },
      { key: 'E', text: "Had you submit your complete scholarship essay right now?" }
    ],
    correct_answer: 'C',
    hint: 'Match Present Perfect ("have already submitted") with Present Perfect question inversion using "yet."',
    explanation: 'Rendra answers using "have already submitted," matching "Have you submitted ... yet?".',
    tags: ['yes-no-questions', 'present-perfect'],
  },
  {
    code: 'ENG10-IQ-025',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'imperatives-questions',
    topic_name: 'Imperatives & Question Formation',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Officer: We noticed the auditorium roof leaking during yesterday’s storm.\n…\nJanitor: No, nobody was rehearsing inside when the rain broke the skylight.',
    question_text: 'Which Yes/No question accurately prompts the janitor’s response?',
    options: [
      { key: 'A', text: "Is anyone rehearsed inside the auditorium yesterday during the storm?" },
      { key: 'B', text: "Was anyone rehearsing inside the auditorium when the rain broke the skylight?" },
      { key: 'C', text: "Does anyone rehearse inside the auditorium during yesterday’s storm?" },
      { key: 'D', text: "Had anyone was rehearsing inside the auditorium when the rain broke the skylight?" },
      { key: 'E', text: "Did anyone rehearsing inside the auditorium when the rain broke the skylight?" }
    ],
    correct_answer: 'B',
    hint: 'Match Past Continuous ("nobody was rehearsing") with "Was + singular pronoun anyone + V-ing."',
    explanation: 'Past Continuous Yes/No questions invert "was" before "anyone" ("Was anyone rehearsing..."), matching "No, nobody was rehearsing...".',
    tags: ['yes-no-questions', 'past-continuous'],
  },
];
