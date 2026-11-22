import type { BiologyQuestionSeed } from '../types.ts';

export const topic4Virus: BiologyQuestionSeed[] = [
  // =========================================================================
  // 1. MUDAH (C1 - C2) : 10 SOAL (BIO10-T4-MUD-001 s.d. BIO10-T4-MUD-010)
  // =========================================================================
  {
    code: 'BIO10-T4-MUD-001',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ilmuwan Amerika Serikat yang pada tahun 1935 berhasil mengkristalkan partikel penyebab penyakit mosaik pada daun tembakau (Tobacco Mosaic Virus / TMV) dan membuktikan bahwa virus dapat dikristalkan seperti benda mati adalah…',
    options: [
      { key: 'A', text: "Dmitri Ivanovsky" },
      { key: 'B', text: "Martinus Beijerinck" },
      { key: 'C', text: "Wendell Meredith Stanley" },
      { key: 'D', text: "Adolf Mayer" },
      { key: 'E', text: "Louis Pasteur" }
    ],
    correct_answer: 'C',
    hint: 'Mayer, Ivanovsky, dan Beijerinck meneliti filtrat getah tembakau, namun kristalisasi TMV dilakukan pada tahun 1935.',
    explanation:
      'Wendell Meredith Stanley (1935) berhasil mengisolasi dan mengkristalkan Tobacco Mosaic Virus (TMV). Meskipun telah dikristalkan, partikel tersebut tetap mampu menginfeksi tanaman tembakau sehat ketika dilarutkan kembali.',
    tags: ['sejarah-virus', 'wendell-stanley', 'tmv']
  },
  {
    code: 'BIO10-T4-MUD-002',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Virus tidak dimasukkan ke dalam salah satu dari lima kingdom makhluk hidup karena virus bersifat aseluler (bukan sel). Ciri struktural yang membuktikan bahwa virus BUKAN merupakan sebuah sel adalah…',
    options: [
      { key: 'A', text: "Mampu memperbanyak diri di dalam jaringan inang yang hidup" },
      { key: 'B', text: "Tidak memiliki sitoplasma, membran sel, ribosom, maupun organel metabolisme penghasil energi" },
      { key: 'C', text: "Memiliki asam nukleat berupa DNA atau RNA" },
      { key: 'D', text: "Dapat mengalami mutasi genetik pada selubung proteinnya" },
      { key: 'E', text: "Berukuran sangat kecil dan hanya dapat dilihat dengan mikroskop elektron" }
    ],
    correct_answer: 'B',
    hint: 'Syarat minimal sebuah sel hidup adalah memiliki membran plasma, sitoplasma, ribosom, dan materi genetik.',
    explanation:
      'Virus disebut partikel aseluler (metaorganisme/peralihan) karena hanya tersusun atas asam nukleat (DNA atau RNA saja) yang diselubungi kapsid protein, tanpa sitoplasma, membran plasma sejati, maupun ribosom untuk sintesis protein mandiri.',
    tags: ['ciri-virus', 'aseluler', 'struktur-virus']
  },
  {
    code: 'BIO10-T4-MUD-003',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Selubung protein luar yang membungkus dan melindungi materi genetik (asam nukleat) pada partikel virus serta memberi bentuk geometris pada tubuh virus disebut…',
    options: [
      { key: 'A', text: "Peptidoglikan" },
      { key: 'B', text: "Kapsid" },
      { key: 'C', text: "Nukleoid" },
      { key: 'D', text: "Endospora" },
      { key: 'E', text: "Plasmid" }
    ],
    correct_answer: 'B',
    hint: 'Selubung ini tersusun atas subunit-subunit protein yang disebut kapsomer.',
    explanation:
      'Kapsid adalah selubung protein virus yang tersusun atas subunit protein bernama kapsomer. Kapsid berfungsi melindungi asam nukleat dari kerusakan enzim nuklease dan memberi bentuk tubuh virus (heliks, ikosahedral, atau kompleks).',
    tags: ['struktur-virus', 'kapsid', 'kapsomer']
  },
  {
    code: 'BIO10-T4-MUD-004',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Urutan tahapan replikasi virus pada daur litik (siklus litik) dari awal penempelan hingga pecahnya sel inang yang tepat adalah…',
    options: [
      { key: 'A', text: "Adsorpsi – Penetrasi – Sintesis (Eklifase) – Perakitan – Lisis" },
      { key: 'B', text: "Adsorpsi – Penetrasi – Penggabungan Profag – Pembelahan Sel – Lisis" },
      { key: 'C', text: "Penetrasi – Adsorpsi – Perakitan – Sintesis – Lisis" },
      { key: 'D', text: "Adsorpsi – Sintesis – Penetrasi – Lisis – Perakitan" },
      { key: 'E', text: "Sintesis – Adsorpsi – Penetrasi – Perakitan – Lisis" }
    ],
    correct_answer: 'A',
    hint: 'Virus harus menempel (adsorpsi) terlebih dahulu sebelum menyuntikkan materi genetiknya (penetrasi).',
    explanation:
      'Lima tahap daur litik secara berurutan adalah: (1) Adsorpsi (penempelan serabut ekor pada reseptor spesifik inang), (2) Penetrasi (injeksi asam nukleat), (3) Sintesis/Eklifase (replikasi genom dan pembuatan protein kapsid), (4) Perakitan/Assembling (penyusunan virion baru), dan (5) Lisis (pecahnya dinding sel inang dengan enzim lisozim).',
    tags: ['daur-litik', 'replikasi-virus', 'konsep-dasar']
  },
  {
    code: 'BIO10-T4-MUD-005',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pada daur lisogenik bakteriofag, asam nukleat virus yang telah menyisip dan bergabung menyatu dengan kromosom (DNA) bakteri inang tanpa langsung menghancurkan sel bakteri disebut…',
    options: [
      { key: 'A', text: "Virion" },
      { key: 'B', text: "Viroid" },
      { key: 'C', text: "Prion" },
      { key: 'D', text: "Profag (Prophage)" },
      { key: 'E', text: "Kapsomer" }
    ],
    correct_answer: 'D',
    hint: 'Materi genetik virus laten ini akan ikut mengganda setiap kali sel bakteri membelah diri.',
    explanation:
      'Profag adalah DNA bakteriofag yang berintegrasi ke dalam kromosom sel bakteri pada siklus lisogenik. Setiap kali bakteri membelah secara biner, profag ikut tereplikasi dan diwariskan ke sel anakan bakteri.',
    tags: ['daur-lisogenik', 'profag', 'bakteriofag']
  },
  {
    code: 'BIO10-T4-MUD-006',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Virus yang menyerang dan menginfeksi sel bakteri (seperti faga T4 yang menginfeksi bakteri Escherichia coli) memiliki bentuk tubuh kompleks menyerupai huruf T dan disebut sebagai…',
    options: [
      { key: 'A', text: "Rhabdovirus" },
      { key: 'B', text: "Adenovirus" },
      { key: 'C', text: "Retrovirus" },
      { key: 'D', text: "Baculovirus" },
      { key: 'E', text: "Bakteriofag" }
    ],
    correct_answer: 'E',
    hint: 'Istilah ini berasal dari kata "bacteria" dan bahasa Yunani "phagein" yang berarti memakan.',
    explanation:
      'Bakteriofag (atau faga) adalah virus yang secara spesifik menginfeksi bakteri. Struktur bakteriofag T4 berbentuk kompleks terdiri atas kepala ikosahedral berisi DNA, leher, selubung ekor kontraktil, lempeng dasar, dan serabut ekor.',
    tags: ['bakteriofag', 'struktur-virus', 'konsep-dasar']
  },
  {
    code: 'BIO10-T4-MUD-007',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Kelompok penyakit pada manusia di bawah ini yang SELURUHNYA disebabkan oleh infeksi virus adalah…',
    options: [
      { key: 'A', text: "Demam Berdarah Dengue (DBD), Polio, Rabies, dan Campak (Morbili)" },
      { key: 'B', text: "Rabies, AIDS, Antraks, dan Pneumonia bakterial" },
      { key: 'C', text: "Tuberkulosis (TBC), Kolera, Tifus, dan Influenza" },
      { key: 'D', text: "Cacar air (Varisela), Hepatitis B, Difteri, dan Sifilis" },
      { key: 'E', text: "Malaria, Demam Berdarah, Covid-19, dan Tetanus" }
    ],
    correct_answer: 'A',
    hint: 'Eliminasi pilihan yang memuat TBC, kolera, tifus, tetanus, difteri, sifilis, atau antraks (bakteri) serta malaria (protozoa Plasmodium).',
    explanation:
      'DBD (Virus Dengue / Flavivirus), Polio (Poliovirus), Rabies (Rhabdovirus / Lyssavirus), dan Campak (Morbillivirus) semuanya disebabkan oleh virus. Adapun TBC, kolera, tifus, tetanus, difteri, sifilis, dan antraks disebabkan oleh bakteri.',
    tags: ['penyakit-virus', 'patogen-manusia', 'peranan-virus']
  },
  {
    code: 'BIO10-T4-MUD-008',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Penyakit kerdil dan perubahan warna daun padi menjadi kuning-oranye yang ditularkan melalui perantara serangga vektor wereng hijau (Nephotettix virescens) disebabkan oleh infeksi…',
    options: [
      { key: 'A', text: "Bean Golden Mosaic Virus" },
      { key: 'B', text: "Citrus Vein Phloem Degeneration (CVPD)" },
      { key: 'C', text: "Virus Tungro (RTBV dan RTSV)" },
      { key: 'D', text: "Potato Yellow Dwarf Virus (PYDV)" },
      { key: 'E', text: "Tobacco Mosaic Virus (TMV)" }
    ],
    correct_answer: 'C',
    hint: 'Penyakit ini merupakan salah satu ancaman utama tanaman padi (Oryza sativa) di Asia Tenggara.',
    explanation:
      'Virus Tungro (kombinasi Rice Tungro Bacilliform Virus dan Rice Tungro Spherical Virus) menyerang tanaman padi sehingga tanaman tumbuh kerdil, anakan berkurang, dan daun menguning-oranye. Vektor penularnya adalah wereng hijau.',
    tags: ['virus-tumbuhan', 'tungro', 'peranan-merugikan']
  },
  {
    code: 'BIO10-T4-MUD-009',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Tidak semua virus merugikan manusia. Salah satu pemanfaatan virus yang menguntungkan dalam bidang kedokteran pencegahan adalah…',
    options: [
      { key: 'A', text: "Pembuatan vaksin dari virus yang dilemahkan (attenuated) atau bagian antigen kapsid/mRNA virus untuk memicu kekebalan aktif tubuh" },
      { key: 'B', text: "Penghasil antibiotik penisilin untuk membunuh jamur kulit" },
      { key: 'C', text: "Fermentasi kedelai menjadi tempe dan kecap" },
      { key: 'D', text: "Pengikat nitrogen bebas dari udara pada bintil akar kacang-kacangan" },
      { key: 'E', text: "Pengurai sampah plastik di tempat pembuangan akhir" }
    ],
    correct_answer: 'A',
    hint: 'Pikirkan bagaimana sistem imun manusia dilatih mengenali patogen virus sebelum terinfeksi virus ganas yang sebenarnya.',
    explanation:
      'Virus atau komponen antigeniknya dimanfaatkan untuk memproduksi vaksin (vaksin virus dilemahkan/live-attenuated, vaksin inaktif, subunit protein, atau vektor viral) yang merangsang limfosit membentuk antibodi dan sel memori spesifik.',
    tags: ['manfaat-virus', 'vaksin', 'imunisasi']
  },
  {
    code: 'BIO10-T4-MUD-010',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Virus disebut sebagai "parasit intraseluler obligat" karena…',
    options: [
      { key: 'A', text: "Virus dapat hidup bebas di air sungai maupun di dalam tanah tanpa sel inang" },
      { key: 'B', text: "Virus hanya menginfeksi permukaan luar kulit tanpa pernah masuk ke dalam sel" },
      { key: 'C', text: "Virus dapat dibiakkan pada medium agar kaldu nutrisi mati tanpa kehadiran sel hidup" },
      { key: 'D', text: "Virus mampu memproduksi ATP sendiri di luar sel inang menggunakan mitokondria" },
      { key: 'E', text: "Virus mutlak hanya dapat bereplikasi/memperbanyak diri ketika berada di dalam sel inang yang hidup dengan membajak mesin metabolisme inang" }
    ],
    correct_answer: 'E',
    hint: 'Kata "obligat" berarti wajib/mutlak, dan "intraseluler" berarti di dalam sel.',
    explanation:
      'Parasit intraseluler obligat berarti virus wajib berada di dalam sel hidup untuk melakukan sintesis asam nukleat dan protein kapsidnya, karena virus tidak memiliki ribosom, enzim metabolisme energi, maupun prekursor nukleotida/asam amino sendiri.',
    tags: ['parasit-intraseluler-obligat', 'sifat-virus', 'konsep-dasar']
  },

  // =========================================================================
  // 2. MEDIUM (C3) : 10 SOAL (BIO10-T4-MED-011 s.d. BIO10-T4-MED-020)
  // =========================================================================
  {
    code: 'BIO10-T4-MED-011',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Mengapa seorang peneliti virologi TIDAK dapat membiakkan virus Influenza pada medium agar nutrisi (Nutrient Agar) di dalam cawan Petri seperti saat membiakkan bakteri, melainkan harus menginokulasikannya ke dalam telur ayam berembrio (bertunas) atau kultur jaringan sel hidup?',
    options: [
      { key: 'A', text: "Karena agar-agar mengandung antibiotik alami yang langsung menghancurkan kapsid virus" },
      { key: 'B', text: "Karena telur ayam berembrio tidak memiliki membran sel sehingga mudah ditembus virus" },
      { key: 'C', text: "Karena medium agar nutrisi tidak mengandung sel hidup beserta ribosom dan ATP yang mutlak dibutuhkan virus untuk melakukan translasi protein kapsid dan replikasi genom" },
      { key: 'D', text: "Karena ukuran cawan Petri terlalu kecil untuk menampung koloni virus Influenza" },
      { key: 'E', text: "Karena virus Influenza hanya dapat bereplikasi pada suhu di atas 100°C" }
    ],
    correct_answer: 'C',
    hint: 'Bakteri adalah sel lengkap yang bisa menyerap nutrisi terlarut dari agar-agar, sedangkan virus tidak memiliki ribosom maupun mesin metabolisme.',
    explanation:
      'Nutrient Agar hanya menyediakan molekul nutrisi mati (pepton, glukosa, mineral). Karena virus bersifat aseluler dan tidak memiliki ribosom maupun enzim penghasil ATP, virus hanya dapat dikultur di dalam sistem yang memiliki sel hidup aktif seperti telur ayam berembrio (embryonated chicken egg) atau kultur sel in-vitro.',
    tags: ['kultur-virus', 'telur-berembrio', 'aplikasi-virologi']
  },
  {
    code: 'BIO10-T4-MED-012',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Virus Hepatitis B hanya menginfeksi sel hati (hepatosit), virus Rabies menginfeksi sel saraf (neuron), sedangkan HIV menginfeksi sel limfosit T-helper (CD4+). Spesifisitas jaringan target yang sangat tinggi pada masing-masing virus tersebut ditentukan oleh…',
    options: [
      { key: 'A', text: "Kecepatan aliran darah di sekitar organ hati dan otak" },
      { key: 'B', text: "Kemampuan virus memilih organ secara sadar menggunakan sistem saraf virus" },
      { key: 'C', text: "Ukuran diameter inti sel inang yang harus lebih kecil daripada ukuran kapsid virus" },
      { key: 'D', text: "Perbedaan suhu organ hati, otak, dan darah yang mencapai selisih 15°C" },
      { key: 'E', text: "Kesesuaian spesifik (lock and key) antara glikoprotein permukaan/serabut ekor virus dengan molekul reseptor protein pada permukaan membran sel inang pada tahap adsorpsi" }
    ],
    correct_answer: 'E',
    hint: 'Ingat syarat mutlak pada tahap pertama replikasi virus (Adsorpsi).',
    explanation:
      'Tropisme (spesifisitas sel inang) virus ditentukan oleh kecocokan molekuler antara ligan virus (glikoprotein spike/sampul atau serabut ekor) dengan reseptor spesifik pada permukaan membran sel inang (misalnya protein gp120 HIV hanya cocok berikatan dengan reseptor CD4 dan koreseptor CCR5/CXCR4 pada sel limfosit T-helper).',
    tags: ['tropisme-virus', 'adsorpsi', 'reseptor-sel']
  },
  {
    code: 'BIO10-T4-MED-013',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Human Immunodeficiency Virus (HIV) dan SARS-CoV-2 termasuk ke dalam kelompok virus bersampul (enveloped virus) yang memiliki selubung tambahan dari lapisan ganda fosfolipid (lipoprotein) di luar kapsidnya. Mengapa mencuci tangan dengan sabun atau cairan antiseptik berbahan alkohol 70% sangat efektif melumpuhkan virus bersampul tersebut?',
    options: [
      { key: 'A', text: "Karena alkohol 70% membekukan sitoplasma dan mitokondria di dalam tubuh virus" },
      { key: 'B', text: "Karena molekul sabun bersifat amfipatik (memiliki ujung hidrofilik dan ekor hidrofobik) yang melarutkan lapisan lipid sampul virus sehingga glikoprotein penempelnya rusak dan virion hancur" },
      { key: 'C', text: "Karena busa sabun menutup pori-pori pernapasan pada kapsid virus" },
      { key: 'D', text: "Karena sabun mengubah genom RNA virus menjadi molekul DNA untai ganda yang tidak berbahaya" },
      { key: 'E', text: "Karena sabun berfungsi sebagai antibiotik yang menghambat pembentukan peptidoglikan virus" }
    ],
    correct_answer: 'B',
    hint: 'Sampul (envelope) virus tersusun atas lemak (fosfolipid bilayer) yang berasal dari membran sel inang, sedangkan sabun adalah pelarut lemak.',
    explanation:
      'Virus bersampul (enveloped virus) bergantung pada keutuhan sampul lipidnya tempat tertanamnya glikoprotein spike untuk menempel pada sel inang. Sabun dan alkohol 70% melarutkan ikatan hidrofobik lapisan lipid sampul tersebut, menyebabkan disintegrasi partikel virus dan inaktivasi kemampuan infeksinya.',
    tags: ['virus-bersampul', 'mekanisme-sabun', 'aplikasi-kesehatan']
  },
  {
    code: 'BIO10-T4-MED-014',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Seorang pasien menderita flu dan pilek akibat infeksi Rhinovirus. Pasien tersebut meminta dokter meresepkan antibiotik Amoksisilin dosis tinggi agar flunya cepat sembuh, namun dokter menolak memberikan antibiotik dan hanya memberikan obat pereda gejala serta menyarankan istirahat.',
    question_text:
      'Alasan biomedis yang paling tepat mengapa antibiotik seperti Amoksisilin atau Penisilin TIDAK efektif digunakan untuk mengobati infeksi virus murni adalah…',
    options: [
      { key: 'A', text: "Karena virus memiliki enzim beta-laktamase di dalam mitokondrianya yang menghancurkan antibiotik" },
      { key: 'B', text: "Karena Amoksisilin hanya bekerja terhadap jamur multiseluler dan cacing parasit" },
      { key: 'C', text: "Karena virus memiliki dinding sel kitin yang terlalu tebal untuk ditembus oleh molekul Amoksisilin" },
      { key: 'D', text: "Karena antibiotik bekerja menghambat sintesis dinding sel peptidoglikan atau ribosom 70S milik bakteri, sedangkan virus bersifat aseluler dan tidak memiliki dinding peptidoglikan maupun ribosom" },
      { key: 'E', text: "Karena antibiotik justru menjadi sumber nutrisi karbohidrat yang mempercepat pembelahan biner virus" }
    ],
    correct_answer: 'D',
    hint: 'Pikirkan target sasaran mekanisme kerja antibiotik (dinding sel peptidoglikan, ribosom bakteri, enzim metabolisme bakteri) dan bandingkan dengan struktur virus.',
    explanation:
      'Antibiotik dirancang untuk menarget struktur atau jalur metabolisme spesifik sel bakteri (seperti sintesis peptidoglikan dinding sel oleh penisilin/amoksisilin atau translasi pada ribosom 70S). Karena virus tidak memiliki dinding sel maupun ribosom dan menggunakan mesin sel inang eukariotik, antibiotik sama sekali tidak berefek pada virus.',
    tags: ['antibiotik-vs-virus', 'edukasi-kesehatan', 'struktur-virus']
  },
  {
    code: 'BIO10-T4-MED-015',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pada bakteriofag, enzim lisozim memainkan peran penting pada dua tahap yang berbeda dalam daur litik, yaitu pada tahap…',
    options: [
      { key: 'A', text: "Transkripsi balik RNA menjadi DNA dan Integrasi ke dalam nukleus" },
      { key: 'B', text: "Adsorpsi (menempelkan serabut ekor) dan Sintesis (menggandakan untai RNA virus)" },
      { key: 'C', text: "Sintesis (membentuk protein kapsomer) dan Perakitan (menyusun kepala ikosahedral)" },
      { key: 'D', text: "Penetrasi (melubangi dinding sel bakteri agar DNA virus masuk) dan Lisis (menghancurkan dinding sel bakteri dari dalam agar virion baru keluar)" },
      { key: 'E', text: "Penggabungan profag dan Pembelahan biner sel bakteri" }
    ],
    correct_answer: 'D',
    hint: 'Fungsi enzim lisozim adalah menghidrolisis ikatan glikosidik pada peptidoglikan dinding sel bakteri.',
    explanation:
      'Enzim lisozim pada bakteriofag bekerja dua kali: (1) Saat Penetrasi, sedikit lisozim di ujung ekor faga melubangi lapisan peptidoglikan bakteri untuk jalan masuk DNA; (2) Saat Lisis (tahap akhir), gen virus memproduksi lisozim dalam jumlah besar untuk meruntuhkan dinding sel bakteri sehingga ratusan virion baru terbebas.',
    tags: ['enzim-lisozim', 'daur-litik', 'bakteriofag']
  },
  {
    code: 'BIO10-T4-MED-016',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'HIV tergolong ke dalam kelompok Retrovirus yang memiliki genom berupa RNA untai tunggal. Agar materi genetik HIV dapat berintegrasi ke dalam kromosom DNA sel limfosit T manusia, HIV membawa enzim khusus di dalam kapsidnya yang berfungsi mencetak DNA dari cetakan RNA, yaitu enzim…',
    options: [
      { key: 'A', text: "Enzim Helikase Bakteri" },
      { key: 'B', text: "Enzim Amilase" },
      { key: 'C', text: "Enzim Katalase" },
      { key: 'D', text: "Enzim Restriksi Endonuklease" },
      { key: 'E', text: "Enzim Transkriptase Balik (Reverse Transcriptase)" }
    ],
    correct_answer: 'E',
    hint: 'Proses aliran informasi genetik dari RNA kembali menjadi cDNA berkebalikan arah dengan transkripsi normal.',
    explanation:
      'Retrovirus (seperti HIV) memiliki enzim Reverse Transcriptase (Transkriptase Balik) yang mengubah genom RNA virus menjadi DNA komplementer (cDNA) untai ganda, yang kemudian disisipkan ke dalam genom DNA inang oleh enzim Integrase.',
    tags: ['retrovirus', 'hiv', 'reverse-transcriptase']
  },
  {
    code: 'BIO10-T4-MED-017',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam pengendalian hama pertanian ramah lingkungan (biopestisida), kelompok virus Baculovirus (seperti Nuclear Polyhedrosis Virus / NPV) dimanfaatkan oleh petani karena…',
    options: [
      { key: 'A', text: "Membunuh seluruh jenis cacing tanah dan bakteri pengikat nitrogen di sawah" },
      { key: 'B', text: "Mempercepat pematangan buah melalui pelepasan gas etilen" },
      { key: 'C', text: "Mengubah tanaman jagung menjadi kebal terhadap kekeringan ekstrem" },
      { key: 'D', text: "Menghasilkan nektar buatan untuk mengundang lebah penyerbuk" },
      { key: 'E', text: "Menginfeksi secara spesifik ulat/larva serangga hama Lepidoptera hingga mati tanpa meracuni tanaman, mamalia, maupun manusia" }
    ],
    correct_answer: 'E',
    hint: 'Baculovirus adalah virus patogen serangga (entomopatogen) yang memiliki inang sangat spesifik.',
    explanation:
      'Baculovirus (NPV) digunakan sebagai bioinsektisida/agen pengendali hayati karena ketika kristal polihedralnya termakan oleh ulat hama (Lepidoptera), virus melisiskan jaringan pencernaan ulat hingga mati, namun sangat aman (tidak menginfeksi) tumbuhan, burung, ikan, maupun manusia.',
    tags: ['manfaat-virus', 'baculovirus', 'biopestisida']
  },
  {
    code: 'BIO10-T4-MED-018',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ketika sel manusia terinfeksi oleh virus, sel yang terinfeksi tersebut akan memproduksi dan mensekresikan protein sinyal khusus ke sel-sel tetangga yang masih sehat agar sel tetangga memproduksi enzim antivirus yang menghambat sintesis protein virus. Protein pertahanan alami tersebut dinamakan…',
    options: [
      { key: 'A', text: "Aktin dan Miosin" },
      { key: 'B', text: "Interferon" },
      { key: 'C', text: "Fibrinogen" },
      { key: 'D', text: "Hemoglobin" },
      { key: 'E', text: "Insulin" }
    ],
    correct_answer: 'B',
    hint: 'Nama protein sitokin ini berasal dari kemampuannya "menginterferensi" (mengganggu) replikasi virus di sel-sel sekitarnya.',
    explanation:
      'Interferon (IFN-α dan IFN-β) adalah glikoprotein sitokin yang dilepaskan oleh sel inang yang terinfeksi virus untuk memberi "peringatan dini" kepada sel-sel sehat di sekitarnya agar mengaktifkan enzim pendegradasi mRNA virus dan penghambat translasi protein virus.',
    tags: ['interferon', 'imunitas-antivirus', 'manfaat-biomedis']
  },
  {
    code: 'BIO10-T4-MED-019',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Selain virus, terdapat agen infeksius subviral yang jauh lebih sederhana. Perbedaan struktural yang tepat antara Viroid dan Prion adalah…',
    options: [
      { key: 'A', text: "Viroid adalah molekul RNA sirkuler pendek telanjang tanpa kapsid yang menginfeksi tumbuhan, sedangkan Prion adalah molekul protein salah lipat (tanpa asam nukleat) yang menyebabkan penyakit neurodegeneratif seperti Sapi Gila" },
      { key: 'B', text: "Viroid adalah bakteri berukuran kerdil, sedangkan Prion adalah jamur mikroskopis" },
      { key: 'C', text: "Viroid hanya menginfeksi otak mamalia, sedangkan Prion hanya menginfeksi daun kelapa" },
      { key: 'D', text: "Viroid memiliki kapsid dan sampul lipid lengkap, sedangkan Prion memiliki genom DNA untai ganda" },
      { key: 'E', text: "Keduanya memiliki ribosom dan mitokondria lengkap untuk membelah diri" }
    ],
    correct_answer: 'A',
    hint: 'Viroid = RNA saja tanpa protein; Prion (Proteinaceous infectious particle) = Protein saja tanpa asam nukleat.',
    explanation:
      'Viroid adalah agen infeksius berupa rantai RNA sirkuler tunggal yang sangat pendek tanpa selubung kapsid protein (umumnya menyerang tanaman seperti kentang dan kelapa). Adapun Prion (PrP^Sc) adalah partikel protein infeksius yang mengalami salah pelipatan (misfolding) dan tidak memiliki DNA maupun RNA sama sekali (penyebab penyakit Mad Cow / BSE dan Creutzfeldt-Jakob).',
    tags: ['viroid', 'prion', 'agen-subviral']
  },
  {
    code: 'BIO10-T4-MED-020',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pada kondisi tertentu (misalnya ketika sel bakteri terpapar sinar ultraviolet atau zat kimia mutagenik), profag yang semula tenang di dalam kromosom bakteri pada daur lisogenik dapat melepaskan diri dari kromosom bakteri dan beralih memasuki tahap sintesis, perakitan, hingga melisiskan sel bakteri. Peristiwa peralihan dari daur lisogenik ke daur litik ini menunjukkan bahwa…',
    options: [
      { key: 'A', text: "Bakteri yang mengandung profag langsung berubah menjadi virus raksasa" },
      { key: 'B', text: "Daur litik selalu terjadi sebelum tahap adsorpsi dan penetrasi" },
      { key: 'C', text: "Daur lisogenik bersifat permanen dan tidak pernah dapat menyebabkan kematian sel bakteri" },
      { key: 'D', text: "Gen-gen litik pada profag hanya mengalami represi (penekanan) sementara dan dapat terinduksi aktif kembali ketika sel inang mengalami stres/kerusakan DNA" },
      { key: 'E', text: "Sinar ultraviolet mengubah DNA bakteriofag menjadi ribosom bakteri" }
    ],
    correct_answer: 'D',
    hint: 'Saat bakteri inang terancam mati karena kerusakan DNA akibat radiasi UV, profag "menyelamatkan diri" dengan segera memproduksi virion baru dan keluar dari sel.',
    explanation:
      'Dalam siklus lisogenik, protein represor faga menjaga gen-gen litik tetap tidak aktif. Ketika sel bakteri terpapar sinar UV atau stres yang merusak DNA inang, protein represor terdegradasi (proses induksi), sehingga profag memotong diri (eksisi) dari kromosom bakteri dan beralih ke siklus litik.',
    tags: ['induksi-profag', 'lisogenik-ke-litik', 'replikasi-virus']
  },

  // =========================================================================
  // 3. SULIT / HOTS (C4 - C5) : 12 SOAL (BIO10-T4-SUL-021 s.d. BIO10-T4-SUL-032)
  //    (Termasuk 6 soal dengan stimulus_type: 'table' dan 'svg')
  // =========================================================================
  {
    code: 'BIO10-T4-SUL-021',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#EFF6FF;color:#1E3A8A;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Isolat Virus</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Basa Adenin (A)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Basa Timin (T)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Basa Гуanin (G)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Basa Sitosin (C)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Basa Urasil (U)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Virus I</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">28%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">28%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">22%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">22%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0%</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Virus II</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">31%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">19%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">27%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">23%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0%</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Virus III</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">24%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">26%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">26%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">24%</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Virus IV</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">34%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">21%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">17%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">28%</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan analisis komposisi persentase basa nitrogen dan Aturan Pasangan Basa Chargaff (%A = %T atau %U, dan %G = %C pada molekul untai ganda) pada tabel di atas, identifikasi tipe genom asam nukleat untuk Virus I, Virus II, Virus III, dan Virus IV yang paling akurat adalah…',
    options: [
      { key: 'A', text: "Virus I = RNA untai ganda; Virus II = RNA untai tunggal; Virus III = DNA untai ganda; Virus IV = DNA untai tunggal" },
      { key: 'B', text: "Keempat virus tersebut memiliki genom berupa campuran DNA dan RNA di dalam satu kapsid yang sama" },
      { key: 'C', text: "Virus I = DNA untai ganda (dsDNA); Virus II = DNA untai tunggal (ssDNA); Virus III = RNA untai ganda (dsRNA); Virus IV = RNA untai tunggal (ssRNA)" },
      { key: 'D', text: "Virus I dan II = DNA untai ganda; Virus III dan IV = RNA untai ganda" },
      { key: 'E', text: "Virus I = DNA untai tunggal; Virus II = DNA untai ganda; Virus III = RNA untai tunggal; Virus IV = RNA untai ganda" }
    ],
    correct_answer: 'C',
    hint: 'Langkah 1: Cek keberadaan Timin (DNA) vs Urasil (RNA). Langkah 2: Cek apakah persentase A sama dengan T/U dan G sama dengan C (jika sama = untai ganda/double-stranded; jika tidak sama = untai tunggal/single-stranded).',
    explanation:
      'Analisis Chargaff: (1) Virus I mengandung Timin (DNA) dan %A=%T (28%=28%) serta %G=%C (22%=22%) → dsDNA; (2) Virus II mengandung Timin (DNA) namun %A≠%T (31%≠19%) dan %G≠%C (27%≠23%) → ssDNA; (3) Virus III mengandung Urasil (RNA) dan %A=%U (24%=24%) serta %G=%C (26%=26%) → dsRNA; (4) Virus IV mengandung Urasil (RNA) namun %A≠%U (34%≠28%) → ssRNA.',
    tags: ['hots', 'analisis-tabel', 'genom-virus', 'aturan-chargaff', 'klasifikasi-baltimore']
  },
  {
    code: 'BIO10-T4-SUL-022',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #CBD5E1;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Eksperimen Rekonstitusi Hibrida Virus Mosaik Tembakau (Fraenkel-Conrat &amp; Singer)</text>
        <!-- Strain A & Strain B -->
        <rect x="20" y="45" width="140" height="55" rx="8" fill="#DBEAFE" stroke="#2563EB"/>
        <text x="30" y="66" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A">Virus Galur A</text>
        <text x="30" y="84" font-family="sans-serif" font-size="10" fill="#1E40AF">Diambil: Kapsid Protein A</text>

        <rect x="20" y="112" width="140" height="55" rx="8" fill="#FEE2E2" stroke="#DC2626"/>
        <text x="30" y="133" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991B1B">Virus Galur B</text>
        <text x="30" y="151" font-family="sans-serif" font-size="10" fill="#B91C1C">Diambil: Inti RNA B</text>

        <!-- Hybrid Virus -->
        <line x1="160" y1="72" x2="205" y2="100" stroke="#475569" stroke-width="2"/>
        <line x1="160" y1="140" x2="205" y2="112" stroke="#475569" stroke-width="2"/>
        <rect x="205" y="78" width="135" height="55" rx="10" fill="#F3E8FF" stroke="#7C3AED" stroke-width="2"/>
        <text x="215" y="100" font-family="sans-serif" font-size="11" font-weight="bold" fill="#581C87">Virus Hibrida</text>
        <text x="215" y="118" font-family="sans-serif" font-size="10" fill="#6B21A8">(Kapsid A + RNA B)</text>

        <!-- Infection Result -->
        <line x1="340" y1="105" x2="375" y2="105" stroke="#475569" stroke-width="2"/>
        <rect x="375" y="55" width="130" height="100" rx="10" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
        <text x="387" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46">Diinfeksikan ke</text>
        <text x="387" y="94" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46">Daun Tembakau:</text>
        <text x="387" y="118" font-family="sans-serif" font-size="10" fill="#047857">Virion Anakan = ???</text>
      </svg>
    `,
    question_text:
      'Perhatikan skema eksperimen Heinz Fraenkel-Conrat dan Beatrice Singer pada diagram di atas. Peneliti merakit "Virus Hibrida" yang tersusun atas selubung Kapsid Protein dari TMV Galur A dan asam nukleat RNA dari TMV Galur B, lalu menginfeksikannya ke daun tembakau sehat. Karakteristik virion anakan baru yang diproduksi di dalam sel daun tembakau tersebut adalah…',
    options: [
      { key: 'A', text: "Memiliki Kapsid Protein Galur B dan RNA Galur B, karena RNA Galur B yang masuk ke dalam sel mengode sintesis protein kapsid baru sesuai informasi genetik Galur B." },
      { key: 'B', text: "Memiliki Kapsid Protein Galur B dan RNA Galur A akibat pertukaran gen dengan kloroplas tembakau." },
      { key: 'C', text: "Tetap berupa Virus Hibrida (Kapsid A + RNA B) pada seluruh keturunannya selamanya." },
      { key: 'D', text: "Memiliki Kapsid Protein Galur A dan RNA Galur A, karena kapsid merupakan pembawa sifat keturunan." },
      { key: 'E', text: "Tidak menghasilkan virion anakan sama sekali karena virus tidak dapat memiliki materi genetik berupa RNA." }
    ],
    correct_answer: 'A',
    hint: 'Komponen manakah yang berfungsi sebagai cetak biru genetik (pembawa kode sintesis protein kapsid baru) di dalam ribosom sel inang: kapsid luar atau RNA di dalamnya?',
    explanation:
      'Eksperimen Fraenkel-Conrat & Singer (1957) membuktikan bahwa RNA adalah materi genetik pembawa informasi hereditas pada virus RNA. Kapsid A pada virus hibrida hanya berfungsi mengantarkan RNA B masuk ke sel tembakau. Setelah di dalam sel, RNA Galur B mengarahkan ribosom inang untuk mensintesis Kapsid Protein Galur B dan menggandakan RNA Galur B.',
    tags: ['hots', 'eksperimen-fraenkel-conrat', 'svg', 'materi-genetik-virus']
  },
  {
    code: 'BIO10-T4-SUL-023',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 205" width="100%" height="205" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #CBD5E1;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Dinamika Jumlah Sel Limfosit T-CD4+ dan Viral Load HIV Tanpa Terapi ARV</text>
        <line x1="50" y1="175" x2="485" y2="175" stroke="#475569" stroke-width="1.5"/>
        <line x1="50" y1="35" x2="50" y2="175" stroke="#475569" stroke-width="1.5"/>
        <!-- CD4 Curve (Blue) -->
        <path d="M 55 50 L 110 110 L 150 75 L 340 120 L 465 168" fill="none" stroke="#2563EB" stroke-width="3"/>
        <text x="175" y="82" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1D4ED8">Jumlah Sel T-CD4+ (sel/mm³)</text>
        <!-- HIV Viral Load (Red) -->
        <path d="M 55 165 L 110 45 L 155 135 L 340 125 L 465 42" fill="none" stroke="#DC2626" stroke-width="3" stroke-dasharray="6,4"/>
        <text x="330" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C">Viral Load HIV (kopi RNA/mL)</text>
        <!-- Phases -->
        <text x="62" y="193" font-family="sans-serif" font-size="10" fill="#334155">Fase Akut (Bulan 1–3)</text>
        <text x="195" y="193" font-family="sans-serif" font-size="10" fill="#334155">Fase Laten Klinis (Tahun 1–8)</text>
        <text x="380" y="193" font-family="sans-serif" font-size="10" font-weight="bold" fill="#991B1B">Fase AIDS (Tahun 9+)</text>
      </svg>
    `,
    question_text:
      'Berdasarkan grafik perjalanan klinis infeksi HIV di atas, mengapa pada "Fase AIDS (Tahun 9+)" pasien dapat meninggal dunia akibat infeksi jamur Candida atau bakteri Mycobacterium tuberculosis yang sebenarnya jarang mematikan pada orang sehat?',
    options: [
      { key: 'A', text: "Karena lonjakan replikasi HIV menghancurkan populasi sel Limfosit T-helper (CD4+) hingga di bawah batas kritis (<200 sel/mm³), sehingga koordinasi imunitas adaptif lumpuh dan tubuh tidak mampu melawan infeksi oportunistik." },
      { key: 'B', text: "Karena pada Fase AIDS jumlah sel Limfosit T-CD4+ meningkat terlalu tinggi sehingga menyerang jaringan paru-paru." },
      { key: 'C', text: "Karena HIV secara langsung memproduksi toksin kimia yang membekukan plasma darah pasien." },
      { key: 'D', text: "Karena pada Fase Laten Klinis (Tahun 1–8) virus HIV sudah mati seluruhnya di dalam tubuh pasien." },
      { key: 'E', text: "Karena partikel HIV berubah wujud menjadi bakteri Mycobacterium tuberculosis di dalam paru-paru." }
    ],
    correct_answer: 'A',
    hint: 'Perhatikan persilangan kurva biru (Sel T-CD4+ merosot tajam mendekati nol) dan kurva merah (Viral Load HIV melonjak tinggi) pada Fase AIDS.',
    explanation:
      'Sel Limfosit T-helper (CD4+) adalah "komandan" sistem imun spesifik yang mengaktivasi sel B pembentuk antibodi dan sel T sitotoksik. Ketika viral load HIV melonjak dan melisiskan sel T-CD4+ hingga <200 sel/mm³ (Fase AIDS), sistem kekebalan tubuh runtuh sehingga mikroba komensal/lemah memicu Infeksi Oportunistik yang fatal.',
    tags: ['hots', 'interpretasi-grafik', 'svg', 'hiv-aids', 'imunologi']
  },
  {
    code: 'BIO10-T4-SUL-024',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#FEF3C7;color:#92400E;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Karakteristik Molekuler</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Virus DNA (misal: Herpesvirus)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Virus RNA (misal: Influenzavirus)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Enzim Replikasi Genom</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">DNA Polimerase</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">RNA-dependent RNA Polymerase (RdRp)</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Fitur Proofreading (Koreksi Kesalahan Basa)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ada (Aktivitas Eksonuklease 3'→5')</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tidak ada</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Laju Mutasi per Nukleotida per Siklus</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">10⁻⁸ s.d. 10⁻⁶ (Sangat Rendah)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">10⁻⁴ s.d. 10⁻³ (Sangat Tinggi)</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan data perbandingan biologi molekuler pada tabel di atas, mengapa vaksin untuk virus Influenza harus diperbarui formulanya hampir setiap tahun, sedangkan vaksin untuk virus DNA (seperti vaksin Cacar/Smallpox atau Hepatitis B) dapat memberikan perlindungan jangka panjang?',
    options: [
      { key: 'A', text: "Karena aktivitas proofreading pada virus DNA justru mempercepat laju mutasi hingga seribu kali lipat." },
      { key: 'B', text: "Karena vaksin Influenza disuntikkan ke dalam otot sedangkan vaksin Hepatitis B diminum melalui mulut." },
      { key: 'C', text: "Karena virus DNA tidak memiliki kapsid protein sehingga tidak dapat dikenali oleh antibodi manusia." },
      { key: 'D', text: "Karena sistem imun manusia tidak mampu membentuk sel memori terhadap virus yang memiliki genom RNA." },
      { key: 'E', text: "Karena enzim RdRp pada virus RNA tidak memiliki mekanisme koreksi kesalahan (proofreading), sehingga mutasi titik terakumulasi cepat mengubah struktur antigen permukaan (antigenic drift) dan membuat antibodi lama tidak lagi mengenali varian baru." }
    ],
    correct_answer: 'E',
    hint: 'Hubungkan ketiadaan fitur proofreading pada enzim replikasi virus RNA dengan laju mutasi (10⁻⁴) dan perubahan bentuk glikoprotein permukaan virus.',
    explanation:
      'Enzim RNA-dependent RNA Polymerase (RdRp) pada virus RNA umumnya tidak memiliki fungsi proofreading (eksonuklease 3\'→5\' pengoreksi salah pasang basa). Akibatnya, laju mutasi virus RNA ribuan kali lebih tinggi daripada virus DNA, memicu perubahan cepat pada epitop antigen permukaan (antigenic drift pada Hemaglutinin/Neuraminidase Influenza) sehingga lolos dari netralisasi antibodi vaksin tahun sebelumnya.',
    tags: ['hots', 'mutasi-virus-rna', 'proofreading', 'analisis-tabel', 'vaksin']
  },
  {
    code: 'BIO10-T4-SUL-025',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#EFF6FF;border-radius:14px;border:1px solid #BFDBFE;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1E3A8A">Kurva Pertumbuhan Satu Langkah (One-Step Growth Curve) Bakteriofag</text>
        <line x1="55" y1="165" x2="480" y2="165" stroke="#475569" stroke-width="1.5"/>
        <line x1="55" y1="35" x2="55" y2="165" stroke="#475569" stroke-width="1.5"/>
        <!-- Eclipse Phase Zone -->
        <rect x="55" y="35" width="160" height="130" fill="#FEF3C7" fill-opacity="0.6"/>
        <text x="72" y="60" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E">Fase Eklips (Menit 0–15)</text>
        <text x="72" y="76" font-family="sans-serif" font-size="10" fill="#B45309">Virion Infeksius = 0</text>
        <!-- Growth Curve -->
        <path d="M 55 162 L 215 162 C 250 162, 265 50, 320 48 L 465 48" fill="none" stroke="#2563EB" stroke-width="3"/>
        <text x="330" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1D4ED8">Fase Lisis / Burst Size</text>
        <text x="330" y="84" font-family="sans-serif" font-size="10" fill="#1E40AF">(Lonjakan Ratusan Virion Baru)</text>
        <text x="195" y="183" font-family="sans-serif" font-size="11" fill="#334155">Waktu Setelah Infeksi (Menit ke-0 s.d. Menit ke-35)</text>
      </svg>
    `,
    question_text:
      'Perhatikan grafik "One-Step Growth Curve" replikasi bakteriofag di atas. Selama "Fase Eklips (Menit 0–15)" setelah virus menginfeksi bakteri, apabila sel bakteri dipecah secara buatan di laboratorium, peneliti TIDAK menemukan satu pun partikel virus utuh yang infeksius. Apa penjelasan molekuler yang terjadi di dalam sel bakteri selama Fase Eklips tersebut?',
    options: [
      { key: 'A', text: "Virus telah mati seluruhnya dicerna oleh enzim lisosom milik sel bakteri." },
      { key: 'B', text: "Kapsid virus tertinggal di luar sel dan asam nukleat virus di dalam sel sedang berada dalam bentuk terurai untuk melakukan replikasi genom serta sintesis subunit protein (belum dirakit menjadi virion utuh)." },
      { key: 'C', text: "Sel bakteri membelah diri seratus kali sebelum mengizinkan virus menempel." },
      { key: 'D', text: "Virus sedang keluar meninggalkan sel bakteri untuk mencari nutrisi di medium agar." },
      { key: 'E', text: "Bakteriofag sedang tidur dalam bentuk endospora berdinding tebal." }
    ],
    correct_answer: 'B',
    hint: 'Ingat apa yang terjadi setelah tahap Penetrasi namun sebelum tahap Perakitan (Assembling).',
    explanation:
      'Pada Fase Eklips (eklifase), bakteriofag telah menyuntikkan asam nukleatnya sementara selubung kapsid kosong (ghost) tertinggal di luar. Di dalam sitoplasma bakteri, genom virus sedang ditranskripsi, direplikasi, dan ditranslasi menjadi komponen-komponen terpisah (DNA dan protein kapsomer belum dirakit menjadi partikel virion utuh), sehingga belum terdeteksi sebagai virion infeksius.',
    tags: ['hots', 'fase-eklips', 'kurva-pertumbuhan-virus', 'svg']
  },
  {
    code: 'BIO10-T4-SUL-026',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#ECFDF5;color:#065F46;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Kandidat Obat Antivirus</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Target Mekanisme Molekuler</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Senyawa P (Enfuvirtide)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Menghambat fusi sampul gp41 HIV dengan membran sel T-CD4+</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Senyawa Q (Zidovudine / AZT)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Menghambat kerja enzim Reverse Transcriptase</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Senyawa R (Raltegravir)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Menghambat kerja enzim Integrase di dalam nukleus</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Senyawa S (Ritonavir)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Menghambat enzim Protease pemotong poliprotein saat pematangan virion baru</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan tabel mekanisme kerja empat obat antiretroviral (ARV) di atas, apabila seorang peneliti memberikan HANYA "Senyawa R (Inhibitor Integrase)" pada kultur sel T-CD4+ yang dipaparkan HIV, tahap manakah yang tetap berhasil berlangsung dan tahap manakah yang terhenti?',
    options: [
      { key: 'A', text: "Seluruh tahapan replikasi berjalan normal hingga menghasilkan virion matang yang infeksius." },
      { key: 'B', text: "Virus berhasil masuk ke dalam sel dan RNA-nya berhasil diubah menjadi cDNA oleh Reverse Transcriptase, namun cDNA virus gagal menyisip (berintegrasi) ke dalam kromosom DNA sel inang." },
      { key: 'C', text: "Senyawa R langsung menghancurkan ribosom dan mitokondria sel manusia sebelum virus menempel." },
      { key: 'D', text: "Virus gagal menempel pada reseptor CD4 sehingga RNA virus tetap berada di luar sel." },
      { key: 'E', text: "RNA virus gagal diubah menjadi DNA, tetapi tetap berhasil menyisip ke dalam kromosom manusia." }
    ],
    correct_answer: 'B',
    hint: 'Urutkan siklus hidup HIV: (1) Adsorpsi & Fusi [Senyawa P] → (2) Transkripsi Balik RNA jadi cDNA [Senyawa Q] → (3) Integrasi cDNA ke kromosom inang [Senyawa R] → (4) Translasi & Pemotongan Protease [Senyawa S].',
    explanation:
      'Karena yang diberikan hanya Senyawa R (penghambat enzim Integrase), maka tahap sebelumnya yaitu penempelan/fusi membran dan transkripsi balik RNA menjadi cDNA oleh Reverse Transcriptase tetap berlangsung. Namun, cDNA virus yang terbentuk gagal disisipkan ke dalam DNA kromosom sel T-CD4+ sehingga provirus tidak terbentuk.',
    tags: ['hots', 'farmakologi-antivirus', 'siklus-hiv', 'analisis-tabel']
  },
  {
    code: 'BIO10-T4-SUL-027',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Bakteri Corynebacterium diphtheriae galur normal di alam sebenarnya bersifat jinak dan tidak mampu memproduksi eksotoksin penyebab penyakit difteri yang mematikan. Namun, setelah bakteri tersebut terinfeksi oleh bakteriofag-beta (β-phage) melalui daur lisogenik, bakteri tersebut mendadak berubah menjadi patogen ganas penghasil toksin difteri.',
    question_text:
      'Analisis genetik yang paling tepat menjelaskan mengapa infeksi virus melalui daur lisogenik tersebut mengubah sifat fenotipe bakteri inang menjadi ganas (konversi lisogenik) adalah…',
    options: [
      { key: 'A', text: "Karena daur lisogenik menghapus seluruh kromosom asli milik bakteri." },
      { key: 'B', text: "Karena bakteriofag-beta melisiskan seluruh sel bakteri sehingga pecahan dinding selnya berubah menjadi toksin." },
      { key: 'C', text: "Karena genom profag bakteriofag-beta yang berintegrasi ke dalam kromosom bakteri membawa gen penyandi toksin (gen tox) yang kemudian ikut diekspresikan oleh mesin transkripsi-translasi bakteri." },
      { key: 'D', text: "Karena bakteri memakan kapsid virus sebagai sumber energi untuk membelah diri." },
      { key: 'E', text: "Karena bakteriofag mengubah bakteri Corynebacterium menjadi sel eukariotik bermembran inti." }
    ],
    correct_answer: 'C',
    hint: 'Pada daur lisogenik, DNA virus (profag) menyisip ke dalam kromosom bakteri. Apa jadinya jika profag tersebut membawa gen tambahan?',
    explanation:
      'Fenomena ini disebut Konversi Lisogenik (Lysogenic Conversion) atau transduksi profag: genom bakteriofag-beta mengandung gen tox (penyandi eksotoksin difteri). Ketika DNA faga menyisip sebagai profag di dalam kromosom Corynebacterium diphtheriae, bakteri inang mengekspresikan gen tox tersebut dan menyekresikan toksin difteri.',
    tags: ['hots', 'konversi-lisogenik', 'profag', 'difteri']
  },
  {
    code: 'BIO10-T4-SUL-028',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Sel babi memiliki reseptor asam sialat pada saluran pernapasannya yang unik karena dapat diinfeksi oleh virus Influenza burung (Avian Influenza H5N1) maupun virus Influenza manusia (H1N1) secara bersamaan di dalam satu sel yang sama.',
    question_text:
      'Mengapa ahli virologi menganggap hewan babi sebagai "bejana pencampur" (mixing vessel) yang sangat berbahaya dalam memicu munculnya pandemi galur virus Influenza baru (Antigenic Shift)?',
    options: [
      { key: 'A', text: "Karena babi tidak memiliki sistem kekebalan tubuh maupun sel darah putih sama sekali." },
      { key: 'B', text: "Karena suhu tubuh babi menghancurkan kapsid virus sehingga RNA telanjangnya menular lewat udara." },
      { key: 'C', text: "Karena genom virus Influenza terdiri atas 8 segmen RNA terpisah; ketika satu sel babi terinfeksi ganda oleh flu burung dan flu manusia, segmen-segmen RNA keduanya dapat bertukar acak (reassortment) saat perakitan, melahirkan subtipe virus hibrida baru yang dapat menular antarmanusia." },
      { key: 'D', text: "Karena virus flu burung dan flu manusia akan melakukan pembelahan meiosis di dalam darah babi." },
      { key: 'E', text: "Karena di dalam sel babi virus Influenza akan berubah menjadi bakteri patogen yang tahan terhadap semua antibiotik." }
    ],
    correct_answer: 'C',
    hint: 'Bedakan mutasi titik bertahap (Antigenic Drift) dengan pertukaran segmen genom RNA utuh saat koinfeksi dua galur berbeda (Antigenic Shift / Genetic Reassortment).',
    explanation:
      'Genom virus Influenza A bersegmen (8 segmen ssRNA). Jika satu sel inang perantara (seperti sel epitel pernapasan babi) mengalami koinfeksi oleh galur flu burung dan galur flu manusia secara simultan, pada tahap perakitan (assembling) dapat terjadi pengemasan silang segmen RNA (genetic reassortment / Antigenic Shift). Hasilnya adalah galur pandemi baru yang memiliki antigen permukaan baru (manusia belum punya imunitas) namun sudah mampu menular efisien antarmanusia.',
    tags: ['hots', 'antigenic-shift', 'reassortment', 'pandemi-influenza']
  },
  {
    code: 'BIO10-T4-SUL-029',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Dalam terapi gen modern untuk mengobati penyakit kelainan genetik bawaan pada manusia (seperti defisiensi imun SCID atau hemofilia), ilmuwan menggunakan Adenovirus atau Lentivirus sebagai "vektor" untuk mengantarkan gen normal yang sehat ke dalam sel target pasien.',
    question_text:
      'Rekayasa genetika krusial apakah yang WAJIB dilakukan terhadap genom virus vektor tersebut sebelum disuntikkan ke tubuh pasien agar terapi gen berlangsung aman?',
    options: [
      { key: 'A', text: "Memanaskan virus vektor hingga suhu 200°C agar protein kapsidnya terdenaturasi sebelum disuntikkan." },
      { key: 'B', text: "Menambahkan gen penghasil enzim lisozim dosis tinggi agar seluruh sel tubuh pasien mengalami lisis." },
      { key: 'C', text: "Mengganti seluruh kapsid protein virus dengan dinding sel selulosa tumbuhan." },
      { key: 'D', text: "Memotong dan menghapus gen-gen virulensi serta gen replikasi litik milik virus, lalu menggantinya dengan kaset gen terapeutik manusia, sehingga virus tetap mampu masuk ke sel target tetapi tidak dapat bereplikasi maupun menyebabkan penyakit." },
      { key: 'E', text: "Mencampurkan virus vektor dengan antibiotik penisilin agar virus membelah diri di dalam darah." }
    ],
    correct_answer: 'D',
    hint: 'Kita membutuhkan kemampuan virus sebagai "kurir" untuk masuk ke dalam sel (adsorpsi & penetrasi), tetapi kita harus mematikan kemampuannya untuk merusak/melisiskan sel (replication-deficient).',
    explanation:
      'Agar virus aman digunakan sebagai vektor terapi gen (viral vector), genom virus direkayasa menjadi replication-incompetent (tidak mampu bereplikasi sendiri) dengan cara menghapus gen-gen patogenik/virulensi dan gen replikasi litiknya, sembari mempertahankan struktur kapsid/glikoprotein penempel serta menyisipkan gen fungsional manusia yang ingin diterapi.',
    tags: ['hots', 'terapi-gen', 'vektor-virus', 'bioteknologi-medis']
  },
  {
    code: 'BIO10-T4-SUL-030',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Daging sapi yang terkontaminasi Prion (penyebab penyakit Bovine Spongiform Encephalopathy / Sapi Gila) telah dimasak hingga mendidih pada suhu 100°C dan disinari dengan radiasi sinar ultraviolet (UV) yang biasanya efektif mematikan bakteri dan virus. Namun, daging tersebut ternyata masih tetap menularkan penyakit neurodegeneratif ketika dikonsumsi.',
    question_text:
      'Mengapa perlakuan radiasi sinar UV (yang bekerja merusak ikatan asam nukleat DNA/RNA) dan pemanasan 100°C gagal menginaktivasi partikel Prion?',
    options: [
      { key: 'A', text: "Karena Prion dilindungi oleh cangkang endospora kalsium dipikolinat seperti pada bakteri Bacillus." },
      { key: 'B', text: "Karena Prion memiliki enzim perbaikan DNA (DNA repair) yang paling canggih di alam semesta." },
      { key: 'C', text: "Karena Prion merupakan virus bersampul lipid ganda yang tahan terhadap api." },
      { key: 'D', text: "Karena Prion sama sekali tidak memiliki asam nukleat (DNA/RNA) sehingga kebal terhadap radiasi UV perusak DNA, serta struktur lipatan beta-sheet (β-sheet) abnormalnya sangat stabil terhadap pemanasan biasa dan enzim protease." },
      { key: 'E', text: "Karena pemanasan 100°C justru mempercepat pembelahan mitosis sel Prion." }
    ],
    correct_answer: 'D',
    hint: 'Radiasi UV membunuh mikroba dengan cara membentuk dimer pirimidin pada DNA/RNA. Apakah Prion memiliki DNA/RNA?',
    explanation:
      'Prion (PrP^Sc) murni hanya terdiri atas protein yang mengalami perubahan konformasi dari alfa-heliks normal menjadi lembaran beta (β-sheet) yang sangat padat dan hidrofobik, tanpa adanya DNA maupun RNA. Oleh sebab itu, radiasi UV (yang menarget asam nukleat) tidak berefek sama sekali, dan agregat amiloid β-sheet Prion tahan terhadap pendidihan 100°C maupun enzim protease pencernaan.',
    tags: ['hots', 'prion', 'resistensi-uv', 'biologi-molekuler']
  },
  {
    code: 'BIO10-T4-SUL-031',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Sebuah sel bakteri Escherichia coli diinfeksi oleh satu partikel bakteriofag T4 yang menjalani daur litik dengan waktu siklus 30 menit dan menghasilkan rata-rata 100 virion baru (burst size = 100) setiap kali satu sel bakteri lisis. Apabila di dalam kultur terdapat cukup bakteri inang dan setiap virion baru langsung menginfeksi satu sel bakteri baru, berapa jumlah total partikel bakteriofag yang dihasilkan setelah 90 menit (3 siklus litik)?',
    options: [
      { key: 'A', text: "10.000 partikel virion" },
      { key: 'B', text: "300 partikel virion" },
      { key: 'C', text: "1.000.000 (10⁶) partikel virion" },
      { key: 'D', text: "9.000 partikel virion" },
      { key: 'E', text: "8 partikel virion" }
    ],
    correct_answer: 'C',
    hint: 'Berbeda dengan bakteri yang membelah biner (2ⁿ), satu virus dalam satu siklus litik menghasilkan 100 virion sekaligus (100ⁿ). Hitung jumlah siklus dalam 90 menit!',
    explanation:
      'Jumlah siklus litik dalam 90 menit = 90 menit / 30 menit = 3 siklus. Karena setiap 1 virion menghasilkan 100 virion per siklus (burst size = 100), maka jumlah virion mengikuti deret eksponensial N = (Burst Size)ⁿ = 100³ = 100 × 100 × 100 = 1.000.000 (10⁶) partikel virion.',
    tags: ['hots', 'perhitungan-replikasi-virus', 'burst-size', 'daur-litik']
  },
  {
    code: 'BIO10-T4-SUL-032',
    subject: 'Biologi Kelas X',
    topic_slug: 'virus',
    topic_name: 'Virus & Peranannya',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Seorang petani jeruk mendapati daun tanaman jeruknya menguning pada tulang daun dan buahnya mengecil masam akibat infeksi penyakit CVPD (dan virus tristeza jeruk) yang sudah menyebar sistemik di pembuluh floem pohon induk. Petani tersebut ingin memperbanyak bibit jeruk baru dari pohon induk unggul tersebut yang BEBAS VIRUS.',
    question_text:
      'Bagian jaringan manakah dari pohon induk yang harus diambil sebagai eksplan kultur jaringan agar diperoleh bibit jeruk baru yang bebas dari infeksi virus beserta alasan anatomisnya?',
    options: [
      { key: 'A', text: "Serangga vektor kutu loncat (Diaphorina citri) yang menempel pada tangkai daun." },
      { key: 'B', text: "Kultur meristem apikal (ujung pucuk tunas ukuran 0,1–0,5 mm), karena jaringan meristem apikal aktif membelah sangat cepat dan belum memiliki jaringan pembuluh angkut (xilem/floem) sempurna sehingga partikel virus belum sempat mencapai ujung meristem." },
      { key: 'C', text: "Kulit batang bagian bawah yang mengandung pembuluh floem dewasa." },
      { key: 'D', text: "Akar cabang yang terendam air tanah karena virus tidak dapat hidup di bawah tanah." },
      { key: 'E', text: "Daun tua yang sudah menguning, karena kandungan virus di daun tua sudah melemah." }
    ],
    correct_answer: 'B',
    hint: 'Virus tumbuhan menyebar secara sistemik melalui aliran pembuluh floem dan plasmodesmata. Bagian pucuk manakah yang belum terdiferensiasi menjadi pembuluh floem?',
    explanation:
      'Kultur Meristem Apikal (Apical Meristem Culture) adalah teknik baku menghasilkan bibit bebas virus (virus-free plantlets) dari tanaman induk yang terinfeksi. Hal ini dimungkinkan karena kubah meristem apikal belum memiliki berkas pembuluh vaskular (floem/xilem), laju pembelahan selnya melampaui laju pergerakan virus lewat plasmodesmata, serta tingginya aktivitas metabolisme auksin/RNA silencing di pucuk meristem.',
    tags: ['hots', 'kultur-meristem', 'tanaman-bebas-virus', 'bioteknologi-pertanian']
  }
];
