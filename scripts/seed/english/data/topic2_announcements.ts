import type { EnglishQuestionSeed } from '../types.ts';

const ANN_TRANSIT = `METRO CITY TRANSIT AUTHORITY — SERVICE ADVISORY: WEEKEND RAIL TRACK MAINTENANCE

Dear Commuters,

Please be advised that Blue Line subway service between Central Station and Harbor View Terminal will be temporarily suspended this weekend due to essential signal upgrades and track resurfacing.

• Dates: Saturday, November 14 – Sunday, November 15, 2026
• Time: 6:00 AM to 10:00 PM daily
• Affected Stations: Central Station, Museum Plaza, Riverfront, and Harbor View Terminal

Free shuttle buses will operate every 15 minutes between all affected stations during service hours. Regular train operations will resume on Monday, November 16, at 5:00 AM. We appreciate your patience as we work to improve your daily commute. For live updates, call our hotline at 555-0194.`;

const ANN_GLOBAL_TECH = `GLOBAL TECH ACADEMY × NORDIC UNIVERSITY OF TECHNOLOGY

ANNOUNCING THE FAST-TRACK B.SC. IN DATA SCIENCE PATHWAY

We are excited to launch an exclusive academic partnership with Nordic University of Technology, Stockholm, offering a direct Bachelor of Science degree pathway for Global Tech Academy diploma holders.

• Students who have completed our 2-Year Applied Computing Diploma can now earn an accredited bachelor's degree in just 12 months.
• Delivered 100% online through practical capstone projects with no traditional written final exams.
• Affordable tuition fee of €1,800 – €2,200 for the entire final year, with flexible monthly installment plans.

Designed for working professionals and ambitious graduates, this pathway bridges practical coding skills with internationally recognized academic credentials. Applications for the Spring Intake close on December 15. Visit globaltechacademy.edu for details.`;

const ANN_LIBRARY = `CIVIC PUBLIC LIBRARY — DIGITAL CATALOG & READING HALL NOTICE

Notice to All Library Members:

To install faster fiber-optic Wi-Fi routers and migrate our book reservation database, the Main Reading Hall and online e-book portal will undergo scheduled maintenance next week.

• Closure Period: Tuesday, December 1 – Thursday, December 3, 2026
• Affected Facilities: Second-Floor Reading Hall, Print Catalog Terminals, and Mobile App Borrowing
• Book Return Drop-Box: Remains open 24 hours at the East Courtyard entrance

Due dates for all borrowed physical books falling between December 1 and December 3 will be automatically extended to Monday, December 7 without late fines. Printed newspapers will remain accessible inside the ground-floor lobby cafe from 8:00 AM to 4:00 PM. Inquiries may be directed to support@civiclibrary.org.`;

const ANN_SCIENCE_FAIR = `ARCHIPELAGO YOUTH SCIENCE & INNOVATION FAIR 2027

CALL FOR HIGH SCHOOL FINALIST SUBMISSIONS

We invite students in Grades 10–12 across Indonesia to register innovative prototypes in Sustainable Energy, Biotechnology, or Civic Robotics for our annual showcase at Jakarta Convention Hall.

• Early-Bird Abstract Deadline: February 20, 2027 (Registration fee waived for public school teams)
• Team Composition: 2–3 students accompanied by one certified science mentor
• Prizes: National research grants worth IDR 45,000,000 and full sponsorship for top two teams to attend the Tokyo Youth Science Symposium

All projects must include a three-minute demonstration video and an original data logbook verified by the school principal. Late entries submitted after March 5 will not be reviewed by the jury panel. Apply online at youthsif.id.`;

const ANN_BOTANICAL = `BOGOR TROPICAL CONSERVATORY — NOCTURNAL RAINFOREST GUIDED TOUR

Dear Nature Enthusiasts,

Discover how rainforest flora and nocturnal wildlife come alive after sunset! Join our trained botanists and park rangers for a special small-group evening walking expedition this month.

• Schedule: Every Friday & Saturday evening, 6:30 PM – 8:45 PM
• Meeting Point: Orchid Pavilion Main Gate (please arrive 20 minutes early for safety briefing)
• Group Limit: Maximum 18 visitors per session (minimum age 10 years)
• Fee: IDR 75,000 per participant (includes reusable red-light headlamp and herbal tea)

For animal safety, flash photography and bright white smartphone flashlights are strictly prohibited along forest trails. Closed-toe walking shoes are mandatory. Reserve tickets online at bogorconservatory.id.`;

const ANN_AIRWAYS = `PACIFIC CREST AIRLINES — PASSENGER BOARDING & TERMINAL RELOCATION NOTICE

Attention Travelers on Flight PC-408 (Surabaya to Singapore):

Due to international concourse expansion at Juanda Airport, please note an updated check-in counter and boarding gate assignment effective immediately for all weekend departures.

• Relocated Check-In Zone: Terminal 2, Row C Counters 12–16 (moved from Row A)
• Revised Boarding Gate: Gate B4 (upper departure level)
• Check-In Cutoff: Closes strictly 45 minutes prior to the 10:15 AM scheduled departure

Passengers who have completed online mobile check-in without checked luggage may proceed directly through security toward Gate B4 after scanning their digital boarding pass. Complimentary luggage-trolley assistance is stationed outside Door 3 for elderly passengers and families with infants.`;

const ANN_SCHOLARSHIP = `NUSANTARA GREEN CAMPUS × ALPINE INSTITUTE OF SUSTAINABILITY

MERIT SCHOLARSHIP FOR CLEAN ENERGY ENGINEERING TRACK

Applications are now open for ten full-tuition fellowships supporting outstanding high school seniors entering the Undergraduate Clean Energy & Hydrology Track.

• Award Coverage: 100% four-year tuition waiver, campus dormitory housing, and an annual laboratory book allowance
• Academic Eligibility: Minimum cumulative grade average of 88/100 in Mathematics and Physics, plus English proficiency equivalent to B2 (IELTS 6.0)
• Selection Timeline: Shortlisted applicants will complete an online problem-solving interview on May 12

Interested candidates must upload two recommendation letters and a 600-word essay proposing a practical solar or water-conservation solution for their home district by April 25. Incomplete files cannot be considered.`;

const ANN_BLOOD_DRIVE = `HARAPAN COMMUNITY HOSPITAL — WEEKEND BLOOD DONATION & HEALTH CHECK DRIVE

Be a Lifesaver This Saturday!

Harapan Community Hospital, together with the Regional Red Cross Unit, invites healthy community members to join our semi-annual blood donation campaign to replenish city hospital reserves before the holiday travel season.

• Date & Venue: Saturday, December 12, 2026 | 8:30 AM – 2:30 PM | Hospital West Wing Atrium
• Donor Requirements: Aged 17–60 years, body weight at least 48 kg, and well rested (minimum 5 hours of sleep)
• Complimentary Benefits: Free blood pressure screening, iron-level check, nutritious recovery meal box, and a digital donor badge

Walk-in donors are welcome, though booking a 30-minute time slot via harapancare.org/donate helps eliminate waiting time. Please bring a valid national ID or student ID card and eat a light meal beforehand.`;

const ANN_WATER_WORKS = `METROPOLITAN WATER WORKS — SCHEDULED PIPELINE FLUSHING & PRESSURE TEST

Customer Advisory for Southern District Neighborhoods:

To maintain safe drinking water quality, technicians will perform high-pressure sediment flushing across main underground supply lines next Monday night.

• Maintenance Window: Monday, November 30, 11:00 PM through Tuesday, December 1, 4:30 AM
• Impacted Areas: Sukajaya, Taman Mawar, and Kebon Agung blocks 1–12
• Expected Impact: Temporary drop in tap water pressure or brief cloudy appearance immediately after service restoration

We advise households to store enough clean water in advance for nighttime use. Once service resumes at 4:30 AM, let cold-water faucets run for two to three minutes until the water clears completely before running washing machines. Emergency water tankers can be requested via 1500-288.`;

const ANN_CYBER = `CODECRAFT BOOTCAMP × ZURICH SOFTWARE POLYTECHNIC

LAUNCHING THE APPLIED CYBERSECURITY CERTIFICATE-TO-DIPLOMA BRIDGE

Experienced IT practitioners and vocational school graduates can now convert hands-on security credentials into an accredited European Applied Diploma without quitting their day jobs.

• Accelerated Track: Complete 4 specialized lab modules in 9 months rather than the standard 18 months
• Assessment Format: Real-time simulated network defense labs and peer code audits—zero timed multiple-choice midterms
• Program Cost: CHF 1,450 per term, including virtual cloud-lab server access and an optional 0% employer sponsorship invoice plan

Graduates receive dual verification credentials recognized across partner firms in Europe and Southeast Asia. Enrollment for the Winter Cohort closes January 10. Explore the syllabus at codecraft.io/zurich.`;

export const topic2Announcements: EnglishQuestionSeed[] = [
  // =========================================================================
  // SOURCE ANNOUNCEMENT 1: METRO CITY TRANSIT (Q21-22 + Q41 SAS X)
  // =========================================================================
  {
    code: 'ENG10-AN-001',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_TRANSIT,
    question_text: 'Why is Metro City Transit Authority suspending Blue Line train service this weekend?',
    options: [
      { key: 'A', text: "To upgrade railway signals and resurface the train tracks." },
      { key: 'B', text: "To reduce electricity consumption across downtown stations." },
      { key: 'C', text: "To train new subway drivers for the upcoming holiday season." },
      { key: 'D', text: "To test new high-speed express buses along the harbor route." },
      { key: 'E', text: "To repair flood damage caused by heavy storms at Central Station." }
    ],
    correct_answer: 'A',
    hint: 'Read the opening sentence starting with "Please be advised...".',
    explanation: 'The notice explicitly states that service is suspended "due to essential signal upgrades and track resurfacing."',
    tags: ['announcement', 'detail', 'transit'],
  },
  {
    code: 'ENG10-AN-002',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_TRANSIT,
    question_text: 'What is the primary purpose of the announcement above?',
    options: [
      { key: 'A', text: "To announce a permanent ticket price increase for Blue Line commuters." },
      { key: 'B', text: "To warn residents about traffic congestion near Harbor View Terminal." },
      { key: 'C', text: "To recruit experienced engineers for the city's railway maintenance team." },
      { key: 'D', text: "To invite the public to the grand opening of Museum Plaza Station." },
      { key: 'E', text: "To inform passengers about a scheduled subway closure and alternative shuttles." }
    ],
    correct_answer: 'E',
    hint: 'Consider both the Blue Line suspension details and the free shuttle buses offered.',
    explanation: 'The transit advisory alerts commuters about the weekend Blue Line suspension and informs them of the free 15-minute replacement shuttle buses.',
    tags: ['announcement', 'main-idea', 'purpose'],
  },
  {
    code: 'ENG10-AN-003',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'announcement',
    stimulus_content: ANN_TRANSIT,
    question_text:
      'Which combination of three statements accurately reflects the Metro City Transit advisory?\n(1) The track maintenance will take place every weekend throughout November 2026.\n(2) Blue Line train service will be paused between 6:00 AM and 10:00 PM over the weekend.\n(3) Passengers must purchase special shuttle passes at Central Station before boarding.\n(4) Complimentary shuttle buses will run every fifteen minutes to serve affected stations.\n(5) Normal subway schedules will restart on Monday morning at 5:00 AM.',
    options: [
      { key: 'A', text: "Statements (1), (3), and (5)" },
      { key: 'B', text: "Statements (1), (2), and (4)" },
      { key: 'C', text: "Statements (2), (4), and (5)" },
      { key: 'D', text: "Statements (3), (4), and (5)" },
      { key: 'E', text: "Statements (2), (3), and (4)" }
    ],
    correct_answer: 'C',
    hint: 'Eliminate "every weekend" (only Nov 14–15) and paid shuttle passes ("Free shuttle buses").',
    explanation: 'Statements (2), (4), and (5) match the announcement directly. Statement (1) wrongly expands a single weekend into every weekend, and (3) contradicts "Free shuttle buses."',
    tags: ['announcement', 'complex-mcq', 'hots'],
  },

  // =========================================================================
  // SOURCE ANNOUNCEMENT 2: GLOBAL TECH ACADEMY × NORDIC UNIV (Q23-24 + Q42 SAS X)
  // =========================================================================
  {
    code: 'ENG10-AN-004',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_GLOBAL_TECH,
    question_text: "A student has finished the 2-Year Applied Computing Diploma at Global Tech Academy and wants a bachelor's degree. Based on the notice, what option is available?",
    options: [
      { key: 'A', text: "Receive a master's degree automatically without completing any capstone projects." },
      { key: 'B', text: "Enroll in a three-year on-campus engineering program in Stockholm free of charge." },
      { key: 'C', text: "Take traditional written exams at Global Tech Academy to earn university credits." },
      { key: 'D', text: "Apply for a full government scholarship covering all living expenses in Sweden." },
      { key: 'E', text: "Complete an accredited bachelor's degree online in one year through Nordic University." }
    ],
    correct_answer: 'E',
    hint: 'Read the first two bullet points detailing duration ("12 months") and delivery format ("100% online").',
    explanation: 'Diploma holders can earn an accredited Bachelor of Science degree through Nordic University in just 12 months (one year), delivered 100% online.',
    tags: ['announcement', 'application', 'global-tech'],
  },
  {
    code: 'ENG10-AN-005',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_GLOBAL_TECH,
    question_text: 'Which of the following is a reasonable expectation for a student enrolling in this pathway?',
    options: [
      { key: 'A', text: "They will graduate without paying any tuition fees for the final year." },
      { key: 'B', text: "They will be assessed through practical projects rather than written final exams." },
      { key: 'C', text: "They are required to retake their diploma courses before starting the degree." },
      { key: 'D', text: "They must spend at least three additional years completing coursework." },
      { key: 'E', text: "They must relocate to Stockholm to attend daily laboratory lectures." }
    ],
    correct_answer: 'B',
    hint: 'Look carefully at the second bullet point mentioning "capstone projects" and exams.',
    explanation: 'The second bullet confirms the degree is "Delivered 100% online through practical capstone projects with no traditional written final exams."',
    tags: ['announcement', 'inference', 'global-tech'],
  },
  {
    code: 'ENG10-AN-006',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'announcement',
    stimulus_content: ANN_GLOBAL_TECH,
    question_text:
      'Which three statements accurately match the details in the Global Tech Academy partnership announcement?\n(1) Diploma graduates can complete an accredited bachelor’s degree within 12 months.\n(2) All applicants are guaranteed a 50% merit scholarship from Nordic University.\n(3) The program is conducted entirely online and evaluates students via capstone projects.\n(4) Students must travel to Stockholm at the end of the year to sit for written exams.\n(5) Tuition for the final year ranges between €1,800 and €2,200 with installment options.',
    options: [
      { key: 'A', text: "Statements (1), (3), and (5)" },
      { key: 'B', text: "Statements (2), (3), and (4)" },
      { key: 'C', text: "Statements (3), (4), and (5)" },
      { key: 'D', text: "Statements (1), (4), and (5)" },
      { key: 'E', text: "Statements (1), (2), and (5)" }
    ],
    correct_answer: 'A',
    hint: 'Eliminate mentions of a guaranteed 50% scholarship (not stated) and traveling for written exams ("no traditional written final exams").',
    explanation: 'Statements (1), (3), and (5) come straight from the three bullet points in the announcement.',
    tags: ['announcement', 'complex-mcq', 'hots'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 3: CIVIC PUBLIC LIBRARY (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-007',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_LIBRARY,
    question_text: 'Why is Civic Public Library temporarily closing the Second-Floor Reading Hall and e-book portal?',
    options: [
      { key: 'A', text: "To upgrade Wi-Fi routers to fiber-optic speed and migrate the reservation system." },
      { key: 'B', text: "To clean water damage caused by a burst roof pipe above the print terminals." },
      { key: 'C', text: "To host a three-day community book auction in the East Courtyard." },
      { key: 'D', text: "To replace all printed newspapers with digital tablets before January." },
      { key: 'E', text: "To renovate the ground-floor lobby cafe and add seating areas." }
    ],
    correct_answer: 'A',
    hint: 'Read the opening sentence of the notice to library members.',
    explanation: 'The closure is scheduled "to install faster fiber-optic Wi-Fi routers and migrate our book reservation database."',
    tags: ['announcement', 'detail', 'library'],
  },
  {
    code: 'ENG10-AN-008',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_LIBRARY,
    question_text: 'If a library member has a borrowed hardcover book due on Wednesday, December 2, 2026, what should they know based on the notice?',
    options: [
      { key: 'A', text: "The book is automatically extended to Monday, December 7 without any fine, or they can drop it in the 24-hour East Courtyard box." },
      { key: 'B', text: "They must log into the mobile app on December 2 to request a manual extension." },
      { key: 'C', text: "They must pay a standard daily late fee because mobile borrowing is offline." },
      { key: 'D', text: "They have to hand the book directly to the ground-floor cafe barista before 4:00 PM." },
      { key: 'E', text: "Their library membership will be suspended until December 10 unless they email support first." }
    ],
    correct_answer: 'A',
    hint: 'Check the paragraph right below the bullet points and the third bullet point.',
    explanation: 'Due dates between Dec 1–3 automatically extend to Monday, Dec 7 without late fees, while the 24-hour drop-box at East Courtyard stays open.',
    tags: ['announcement', 'application', 'library'],
  },
  {
    code: 'ENG10-AN-009',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'announcement',
    stimulus_content: ANN_LIBRARY,
    question_text:
      'Which three statements are TRUE according to the Civic Public Library notice?\n(1) The maintenance shutdown lasts from Tuesday, December 1 through Thursday, December 3.\n(2) Readers cannot return physical books anywhere on the premises during those three days.\n(3) Visitors can still read printed newspapers in the ground-floor lobby cafe from 8:00 AM to 4:00 PM.\n(4) Both the online e-book portal and the Second-Floor Reading Hall will be affected.\n(5) Borrowers whose books are due on December 2 must pay a fine unless they extend early.',
    options: [
      { key: 'A', text: "Statements (1), (4), and (5)" },
      { key: 'B', text: "Statements (2), (3), and (5)" },
      { key: 'C', text: "Statements (3), (4), and (5)" },
      { key: 'D', text: "Statements (1), (2), and (4)" },
      { key: 'E', text: "Statements (1), (3), and (4)" }
    ],
    correct_answer: 'E',
    hint: 'Remember the East Courtyard drop-box remains open 24 hours and due dates automatically extend without fines.',
    explanation: 'Statements (1), (3), and (4) accurately reflect the text; (2) and (5) directly contradict the 24-hour drop-box and automatic fine-free extension.',
    tags: ['announcement', 'complex-mcq', 'hots'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 4: ARCHIPELAGO YOUTH SCIENCE FAIR (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-010',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_SCIENCE_FAIR,
    question_text: 'Who is eligible to enter projects in the Archipelago Youth Science & Innovation Fair 2027?',
    options: [
      { key: 'A', text: "Undergraduate engineering students at Indonesian public universities." },
      { key: 'B', text: "Solo middle school inventors competing without teacher supervision." },
      { key: 'C', text: "Any adult resident residing in Jakarta who submits an essay by March 10." },
      { key: 'D', text: "Science teachers submitting commercial patents developed in Tokyo." },
      { key: 'E', text: "Teams of two or three high school students in Grades 10–12 guided by a certified mentor." }
    ],
    correct_answer: 'E',
    hint: 'Combine the introductory invitation with the second bullet point.',
    explanation: 'The call invites high school students in Grades 10–12 forming teams of 2–3 students with one certified science mentor.',
    tags: ['announcement', 'detail', 'science-fair'],
  },
  {
    code: 'ENG10-AN-011',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_SCIENCE_FAIR,
    question_text: 'What would likely happen if a student team uploaded its prototype abstract on March 7 without a principal-verified data logbook?',
    options: [
      { key: 'A', text: "Their science mentor would be disqualified from teaching at public schools." },
      { key: 'B', text: "Their submission would not be reviewed by the jury panel." },
      { key: 'C', text: "They would still qualify for the Tokyo symposium sponsorship." },
      { key: 'D', text: "They would be asked to submit only a 30-second video instead." },
      { key: 'E', text: "They would receive an automatic early-bird fee waiver." }
    ],
    correct_answer: 'B',
    hint: 'Note both the cutoff date ("after March 5") and the mandatory project documents.',
    explanation: 'Both missing the March 5 final cutoff and omitting the principal-verified logbook prevent review by the jury panel.',
    tags: ['announcement', 'inference', 'science-fair'],
  },
  {
    code: 'ENG10-AN-012',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_SCIENCE_FAIR,
    question_text: 'What is the primary purpose of this announcement?',
    options: [
      { key: 'A', text: "To announce winners from the previous Tokyo Science Symposium." },
      { key: 'B', text: "To sell exhibition tickets to visitors planning to attend Jakarta Convention Hall." },
      { key: 'C', text: "To invite Indonesian high school student teams to register research prototypes for a national competition." },
      { key: 'D', text: "To cancel early-bird registration for teams focusing on Civic Robotics." },
      { key: 'E', text: "To recruit volunteer science mentors for public high schools in 2027." }
    ],
    correct_answer: 'C',
    hint: 'Focus on the heading ("Call for High School Finalist Submissions") and opening sentence.',
    explanation: 'The notice serves as a formal call for high school students (Grades 10–12) to submit eligible STEM innovation prototypes.',
    tags: ['announcement', 'purpose', 'science-fair'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 5: BOGOR NOCTURNAL TOUR (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-013',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_BOTANICAL,
    question_text: 'At what time should reserved participants arrive at the Orchid Pavilion Main Gate for the tour?',
    options: [
      { key: 'A', text: "Promptly at 6:30 PM when the forest gates open." },
      { key: 'B', text: "At 7:00 PM after having dinner at the botanical cafe." },
      { key: 'C', text: "At 8:45 PM when park rangers finish counting visitors." },
      { key: 'D', text: "Every Sunday morning twenty minutes before sunrise." },
      { key: 'E', text: "No later than 6:10 PM so they can attend the safety briefing." }
    ],
    correct_answer: 'E',
    hint: 'Calculate 20 minutes prior to the 6:30 PM schedule.',
    explanation: 'The tour begins at 6:30 PM and asks visitors to "arrive 20 minutes early for safety briefing," which is 6:10 PM.',
    tags: ['announcement', 'detail', 'conservatory'],
  },
  {
    code: 'ENG10-AN-014',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_BOTANICAL,
    question_text: 'Why are flash photography and bright white smartphone lights strictly banned during the nocturnal walking expedition?',
    options: [
      { key: 'A', text: "To avoid interfering with city subway signals outside the garden." },
      { key: 'B', text: "To encourage visitors to purchase professional DSLR cameras at the gate." },
      { key: 'C', text: "To prevent visitors from seeing open-toed sandals along the paths." },
      { key: 'D', text: "To protect nocturnal wildlife from disturbance or distress." },
      { key: 'E', text: "To conserve smartphone batteries for emergency calls on the trail." }
    ],
    correct_answer: 'D',
    hint: 'Notice the opening words of the final paragraph: "For animal safety..."',
    explanation: 'Bright white light and camera flashes disrupt nocturnal animals; hence only provided red-light headlamps are allowed ("For animal safety...").',
    tags: ['announcement', 'cause-effect', 'conservatory'],
  },
  {
    code: 'ENG10-AN-015',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'announcement',
    stimulus_content: ANN_BOTANICAL,
    question_text:
      'Which three statements are supported by the Bogor Tropical Conservatory tour notice?\n(1) Each Friday or Saturday night session is capped at 18 participants.\n(2) Children aged eight are permitted to walk if wearing sandals.\n(3) The IDR 75,000 fee includes a reusable red-light headlamp and herbal tea.\n(4) Closed-toe walking shoes are required for everyone joining the trail.\n(5) Tickets must be purchased strictly in cash at the Orchid Gate with zero online booking.',
    options: [
      { key: 'A', text: "Statements (3), (4), and (5)" },
      { key: 'B', text: "Statements (1), (3), and (5)" },
      { key: 'C', text: "Statements (1), (3), and (4)" },
      { key: 'D', text: "Statements (2), (4), and (5)" },
      { key: 'E', text: "Statements (1), (2), and (3)" }
    ],
    correct_answer: 'C',
    hint: 'Check minimum age (10 years), mandatory footwear, and online reservation link.',
    explanation: 'Statements (1), (3), and (4) match the announcement verbatim; minimum age is 10 (not 8) and reservations are online at bogorconservatory.id.',
    tags: ['announcement', 'complex-mcq', 'hots'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 6: PACIFIC CREST AIRLINES (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-016',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_AIRWAYS,
    question_text: 'Where should passengers on weekend Flight PC-408 now check in their baggage at Juanda Airport?',
    options: [
      { key: 'A', text: "Terminal 1, Row A Counters 1–5." },
      { key: 'B', text: "Terminal 2, Row A Counters 12–16." },
      { key: 'C', text: "Outside Door 3 at the complimentary luggage station." },
      { key: 'D', text: "Gate B4 directly inside the upper departure hall." },
      { key: 'E', text: "Terminal 2, Row C Counters 12–16." }
    ],
    correct_answer: 'E',
    hint: 'Read the first bullet point under "Relocated Check-In Zone."',
    explanation: 'The relocated check-in zone is "Terminal 2, Row C Counters 12–16 (moved from Row A)."',
    tags: ['announcement', 'detail', 'airways'],
  },
  {
    code: 'ENG10-AN-017',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_AIRWAYS,
    question_text: 'What is the latest time a passenger with check-in luggage may complete check-in for Flight PC-408?',
    options: [
      { key: 'A', text: "10:00 AM" },
      { key: 'B', text: "9:30 AM" },
      { key: 'C', text: "10:15 AM" },
      { key: 'D', text: "9:45 AM" },
      { key: 'E', text: "9:00 AM" }
    ],
    correct_answer: 'B',
    hint: 'Subtract 45 minutes from the scheduled 10:15 AM departure.',
    explanation: 'Check-in closes strictly 45 minutes before 10:15 AM, which is 9:30 AM.',
    tags: ['announcement', 'calculation', 'airways'],
  },
  {
    code: 'ENG10-AN-018',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_AIRWAYS,
    question_text: 'Which travelers are permitted to head straight through security to Gate B4 without stopping at Row C counters?',
    options: [
      { key: 'A', text: "All weekend travelers arriving at Door 3 after 9:50 AM." },
      { key: 'B', text: "Travelers who checked in on their phones and carry no checked bags." },
      { key: 'C', text: "Transit passengers arriving from Singapore without boarding passes." },
      { key: 'D', text: "Families borrowing luggage trolleys outside Terminal 2." },
      { key: 'E', text: "Passengers carrying oversized sports luggage who paid online." }
    ],
    correct_answer: 'B',
    hint: 'Read the first sentence of the final paragraph.',
    explanation: 'Passengers who completed online mobile check-in "without checked luggage" can go directly through security toward Gate B4.',
    tags: ['announcement', 'detail', 'airways'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 7: GREEN CAMPUS SCHOLARSHIP (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-019',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_SCHOLARSHIP,
    question_text: 'Which financial benefits are included in the Clean Energy Engineering fellowship?',
    options: [
      { key: 'A', text: "Full four-year tuition, campus dormitory housing, and an annual lab book allowance." },
      { key: 'B', text: "A 50% tuition reduction paired with free laptop repairs." },
      { key: 'C', text: "Guaranteed paid internships in Stockholm without academic grade rules." },
      { key: 'D', text: "Only a one-semester discount on off-campus apartment rentals." },
      { key: 'E', text: "Monthly cash stipends strictly for international airline tickets." }
    ],
    correct_answer: 'A',
    hint: 'Check the first bullet point labeled "Award Coverage."',
    explanation: 'The fellowship covers a 100% four-year tuition waiver, campus dormitory housing, and an annual laboratory book allowance.',
    tags: ['announcement', 'detail', 'scholarship'],
  },
  {
    code: 'ENG10-AN-020',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_SCHOLARSHIP,
    question_text: 'A senior with a 91/100 average in Math and Physics and IELTS 6.5 uploads one recommendation letter plus a 600-word solar proposal on April 20. Will their application be reviewed?',
    options: [
      { key: 'A', text: "Yes, provided they pass the online interview on April 25 instead of May 12." },
      { key: 'B', text: "Yes, because their grades and IELTS score exceed minimum requirements." },
      { key: 'C', text: "Yes, as long as they pay the initial laboratory book fee in cash." },
      { key: 'D', text: "No, because applicants must upload two recommendation letters for a complete file." },
      { key: 'E', text: "No, because the essay must propose nuclear engineering rather than solar." }
    ],
    correct_answer: 'D',
    hint: 'Compare what the student uploaded against the final paragraph requirements.',
    explanation: 'The final paragraph states applicants must upload TWO recommendation letters by April 25 and warns that "Incomplete files cannot be considered."',
    tags: ['announcement', 'application', 'hots', 'scholarship'],
  },
  {
    code: 'ENG10-AN-021',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_SCHOLARSHIP,
    question_text: 'What takes place on May 12 according to the scholarship timeline?',
    options: [
      { key: 'A', text: "Ten tuition waivers are replaced by installment tuition bills." },
      { key: 'B', text: "Shortlisted candidates participate in an online problem-solving interview." },
      { key: 'C', text: "Final application portals open for high school sophomores." },
      { key: 'D', text: "Applicants submit a revised 1,200-word research thesis by email." },
      { key: 'E', text: "Selected freshmen move into campus dormitories for summer orientation." }
    ],
    correct_answer: 'B',
    hint: 'Check the third bullet point ("Selection Timeline").',
    explanation: 'The third bullet specifies: "Shortlisted applicants will complete an online problem-solving interview on May 12."',
    tags: ['announcement', 'detail', 'scholarship'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 8: BLOOD DONATION DRIVE (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-022',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_BLOOD_DRIVE,
    question_text: 'Why are Harapan Community Hospital and the Regional Red Cross holding the weekend drive?',
    options: [
      { key: 'A', text: "To charge walk-in visitors for mandatory iron-level tests." },
      { key: 'B', text: "To replace national identity cards with digital health badges." },
      { key: 'C', text: "To replenish city hospital blood supplies ahead of the holiday travel season." },
      { key: 'D', text: "To train medical interns in setting up outdoor mobile clinics." },
      { key: 'E', text: "To celebrate the opening of a new cafeteria inside the East Wing." }
    ],
    correct_answer: 'C',
    hint: 'Read the opening sentence following "Be a Lifesaver This Saturday!".',
    explanation: 'The campaign aims "to replenish city hospital reserves before the holiday travel season."',
    tags: ['announcement', 'purpose', 'hospital'],
  },
  {
    code: 'ENG10-AN-023',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_BLOOD_DRIVE,
    question_text: 'Who among the following individuals fails to meet the stated eligibility requirements to donate blood?',
    options: [
      { key: 'A', text: "A 17-year-old student weighing 52 kg who slept 7 hours and ate breakfast." },
      { key: 'B', text: "A 58-year-old nurse weighing 60 kg bringing her official ID card." },
      { key: 'C', text: "A 45-year-old parent weighing 65 kg who rested 6 hours and had light toast." },
      { key: 'D', text: "A 24-year-old engineer weighing 45 kg who booked a 9:00 AM slot online." },
      { key: 'E', text: "A 30-year-old teacher weighing 55 kg arriving as a walk-in with her national ID." }
    ],
    correct_answer: 'D',
    hint: 'Compare each candidate’s age, weight ("at least 48 kg"), and sleep against the requirements.',
    explanation: 'Donors must weigh at least 48 kg; a person weighing 45 kg does not meet the minimum weight criterion.',
    tags: ['announcement', 'application', 'hospital'],
  },
  {
    code: 'ENG10-AN-024',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_BLOOD_DRIVE,
    question_text: 'What advantage does pre-booking a 30-minute time slot online offer donors?',
    options: [
      { key: 'A', text: "It enables nurses to collect donations directly at the donor’s home." },
      { key: 'B', text: "It lowers the minimum body weight rule to 42 kilograms." },
      { key: 'C', text: "It waives the requirement to carry an identification card." },
      { key: 'D', text: "It prevents donors from having to wait long at the venue." },
      { key: 'E', text: "It doubles the number of recovery meal boxes handed out." }
    ],
    correct_answer: 'D',
    hint: 'Read the opening sentence of the final paragraph.',
    explanation: 'Although walk-ins are welcome, booking a slot via the link "helps eliminate waiting time."',
    tags: ['announcement', 'detail', 'hospital'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 9: WATER PIPELINE MAINTENANCE (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-025',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_WATER_WORKS,
    question_text: 'Why is Metropolitan Water Works conducting maintenance from late Monday night until early Tuesday morning?',
    options: [
      { key: 'A', text: "To install new residential electric water heaters before December." },
      { key: 'B', text: "To shut off water permanently across Taman Mawar blocks 1–12." },
      { key: 'C', text: "To repair a broken surface bridge inside Kebon Agung." },
      { key: 'D', text: "To flush underground supply pipes and protect drinking water quality." },
      { key: 'E', text: "To sell emergency water tankers to commercial laundromats." }
    ],
    correct_answer: 'D',
    hint: 'Read the opening sentence of the customer advisory.',
    explanation: 'Technicians are performing high-pressure sediment flushing across underground supply lines "to maintain safe drinking water quality."',
    tags: ['announcement', 'detail', 'utilities'],
  },
  {
    code: 'ENG10-AN-026',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_WATER_WORKS,
    question_text: 'What precaution should residents in impacted blocks take right after water service resumes at 4:30 AM before using washing machines?',
    options: [
      { key: 'A', text: "Run cold-water taps for two to three minutes until the water clears completely." },
      { key: 'B', text: "Drain all hot water tanks and call 1500-288 immediately." },
      { key: 'C', text: "Keep all faucets tightly shut for twenty-four hours to preserve pressure." },
      { key: 'D', text: "Wait until 11:00 PM Tuesday night before opening any kitchen faucet." },
      { key: 'E', text: "Boil every liter of laundry water before pouring it into the machine." }
    ],
    correct_answer: 'A',
    hint: 'Check the instruction in the second sentence of the last paragraph.',
    explanation: 'Because temporary cloudiness may appear right after restoration, customers are told to "let cold-water faucets run for two to three minutes until the water clears completely before running washing machines."',
    tags: ['announcement', 'application', 'utilities'],
  },
  {
    code: 'ENG10-AN-027',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'announcement',
    stimulus_content: ANN_WATER_WORKS,
    question_text:
      'Which combination of three facts is stated in the Water Works advisory?\n(1) Flushing runs for 5.5 hours overnight from November 30 to December 1.\n(2) Only commercial factories in Northern District will notice lower pressure.\n(3) Households are recommended to store adequate clean water before 11:00 PM.\n(4) Tap water may briefly look cloudy right after restoration.\n(5) Residents must pay an extra surcharge if they request an emergency water tanker.',
    options: [
      { key: 'A', text: "Statements (1), (2), and (3)" },
      { key: 'B', text: "Statements (3), (4), and (5)" },
      { key: 'C', text: "Statements (1), (4), and (5)" },
      { key: 'D', text: "Statements (1), (3), and (4)" },
      { key: 'E', text: "Statements (2), (4), and (5)" }
    ],
    correct_answer: 'D',
    hint: 'Verify the exact time window (11:00 PM to 4:30 AM = 5.5 hours) and affected neighborhoods (Southern District).',
    explanation: '11:00 PM to 4:30 AM is 5.5 hours (1); storing clean water is advised (3); brief cloudy appearance may happen (4). Southern District households are impacted (not Northern factories), and no tanker surcharge is mentioned.',
    tags: ['announcement', 'complex-mcq', 'hots'],
  },

  // =========================================================================
  // NEW ANNOUNCEMENT 10: CODECRAFT × ZURICH BRIDGE (3 Qs)
  // =========================================================================
  {
    code: 'ENG10-AN-028',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'announcement',
    stimulus_content: ANN_CYBER,
    question_text: 'How long does the accelerated Applied Cybersecurity Diploma bridge take compared with the standard schedule?',
    options: [
      { key: 'A', text: "12 months instead of 24 months." },
      { key: 'B', text: "18 months instead of 36 months." },
      { key: 'C', text: "9 months instead of 18 months." },
      { key: 'D', text: "24 months instead of 48 months." },
      { key: 'E', text: "4 months instead of 9 months." }
    ],
    correct_answer: 'C',
    hint: 'Check the first bullet point ("Accelerated Track").',
    explanation: 'Participants "complete 4 specialized lab modules in 9 months rather than the standard 18 months."',
    tags: ['announcement', 'detail', 'cybersecurity'],
  },
  {
    code: 'ENG10-AN-029',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'announcement',
    stimulus_content: ANN_CYBER,
    question_text: 'What kind of evaluation method replaces traditional timed multiple-choice midterms in this program?',
    options: [
      { key: 'A', text: "In-person oral defenses held exclusively at Zurich airport lounges." },
      { key: 'B', text: "Live simulated network defense labs and peer code audits." },
      { key: 'C', text: "Weekly vocabulary quizzes conducted without server access." },
      { key: 'D', text: "Handwritten essays graded twice a year on European history." },
      { key: 'E', text: "Unpaid full-time summer apprenticeships requiring job resignation." }
    ],
    correct_answer: 'B',
    hint: 'Look at the second bullet point labeled "Assessment Format."',
    explanation: 'Students are assessed through "real-time simulated network defense labs and peer code audits" with zero timed multiple-choice midterms.',
    tags: ['announcement', 'detail', 'cybersecurity'],
  },
  {
    code: 'ENG10-AN-030',
    subject: 'Bahasa Inggris Kelas X',
    topic_slug: 'announcements',
    topic_name: 'Announcements & Service Advisories',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'announcement',
    stimulus_content: ANN_CYBER,
    question_text:
      'Which combination of three details accurately summarizes the CodeCraft × Zurich announcement?\n(1) Working IT staff must resign from their current jobs to enroll.\n(2) Tuition of CHF 1,450 per term covers virtual cloud-lab server access.\n(3) Employers may sponsor tuition through an optional 0% installment/invoice plan.\n(4) Applications for the Winter Cohort close on January 10.\n(5) Certificates are valid solely inside Swiss municipal offices.',
    options: [
      { key: 'A', text: "Statements (1), (2), and (4)" },
      { key: 'B', text: "Statements (1), (3), and (5)" },
      { key: 'C', text: "Statements (2), (3), and (4)" },
      { key: 'D', text: "Statements (3), (4), and (5)" },
      { key: 'E', text: "Statements (2), (4), and (5)" }
    ],
    correct_answer: 'C',
    hint: 'Check "without quitting their day jobs" and "recognized across partner firms in Europe and Southeast Asia."',
    explanation: 'Statements (2), (3), and (4) are explicitly confirmed in the bullet points and closing paragraph.',
    tags: ['announcement', 'complex-mcq', 'hots'],
  },
];
