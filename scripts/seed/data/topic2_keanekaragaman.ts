import type { BiologyQuestionSeed } from '../types.ts';

export const topic2Keanekaragaman: BiologyQuestionSeed[] = [
  // =========================================================================
  // 1. MUDAH (C1 - C2) : 10 SOAL (BIO10-T2-MUD-001 s.d. BIO10-T2-MUD-010)
  // =========================================================================
  {
    code: 'BIO10-T2-MUD-001',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Adanya variasi warna mahkota bunga (merah, putih, merah muda, dan kuning) pada tanaman mawar yang berasal dari satu spesies Rosa hybrida merupakan contoh keanekaragaman hayati tingkat…',
    options: [
      { key: 'A', text: "Jenis (Spesies)" },
      { key: 'B', text: "Familia" },
      { key: 'C', text: "Gen" },
      { key: 'D', text: "Genus" },
      { key: 'E', text: "Ekosistem" }
    ],
    correct_answer: 'C',
    hint: 'Perhatikan bahwa seluruh tanaman mawar tersebut masih berada dalam satu spesies yang sama.',
    explanation:
      'Keanekaragaman tingkat gen adalah variasi susunan faktor genetik (alel) yang terjadi di antara individu-individu dalam satu spesies yang sama (Rosa hybrida), sehingga menghasilkan varietas atau ras dengan fenotipe berbeda.',
    tags: ['keanekaragaman-gen', 'tingkat-kehati', 'konsep-dasar']
  },
  {
    code: 'BIO10-T2-MUD-002',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Kelompok tumbuhan berikut yang menunjukkan keanekaragaman hayati tingkat jenis (spesies) dalam satu famili Arecaceae (palem-paleman) adalah…',
    options: [
      { key: 'A', text: "Mangga gadung, mangga manalagi, mangga arumanis, dan mangga golek" },
      { key: 'B', text: "Ekosistem hutan bakau, ekosistem padang lamun, dan ekosistem terumbu karang" },
      { key: 'C', text: "Kucing anggora, kucing persia, kucing siam, dan kucing kampung" },
      { key: 'D', text: "Padi IR-64, padi Rojolele, padi Pandan Wangi, dan padi Ciherang" },
      { key: 'E', text: "Kelapa (Cocos nucifera), lontar (Borassus flabellifer), aren (Arenga pinnata), dan pinang (Areca catechu)" }
    ],
    correct_answer: 'E',
    hint: 'Keanekaragaman tingkat jenis ditunjukkan oleh organisme yang berbeda spesies namun berada dalam satu genus atau famili yang sama.',
    explanation:
      'Kelapa, lontar, aren, dan pinang merupakan empat spesies berbeda yang tergolong dalam satu famili yang sama yaitu Arecaceae (Palmae). Sementara itu, kelompok mangga, padi, dan kucing pada opsi lain merupakan varietas/ras dalam satu spesies (tingkat gen).',
    tags: ['keanekaragaman-jenis', 'arecaceae', 'tingkat-kehati']
  },
  {
    code: 'BIO10-T2-MUD-003',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Garis khayal biogeografi yang memisahkan wilayah persebaran fauna Indonesia bagian Barat (tipe Asiatis/Oriental) dengan wilayah Indonesia bagian Tengah (tipe Peralihan/Wallacea) adalah…',
    options: [
      { key: 'A', text: "Garis Wallace" },
      { key: 'B', text: "Garis Khatulistiwa" },
      { key: 'C', text: "Garis Bujur Timur" },
      { key: 'D', text: "Garis Weber" },
      { key: 'E', text: "Garis Lydekker" }
    ],
    correct_answer: 'A',
    hint: 'Garis ini membentang dari Selat Lombok ke utara melalui Selat Makassar.',
    explanation:
      'Garis Wallace (dikemukakan oleh Alfred Russel Wallace) membatasi fauna tipe Asiatis (Sumatera, Jawa, Kalimantan, Bali) dengan fauna zona Peralihan (Sulawesi, Nusa Tenggara). Adapun Garis Weber dan Garis Lydekker berada di sebelah timur zona Peralihan menuju tipe Australis.',
    tags: ['biogeografi', 'garis-wallace', 'fauna-indonesia']
  },
  {
    code: 'BIO10-T2-MUD-004',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Manakah di antara kelompok satwa berikut yang seluruhnya merupakan fauna endemik zona Peralihan (Wallacea) di Indonesia?',
    options: [
      { key: 'A', text: "Anoa, babirusa, burung maleo, dan komodo" },
      { key: 'B', text: "Gajah sumatera, tapir, dan bekantan" },
      { key: 'C', text: "Harimau sumatera, orangutan kalimantan, dan badak jawa" },
      { key: 'D', text: "Kanguru pohon, burung cenderawasih, dan kasuari" },
      { key: 'E', text: "Walabi, kuskus bertutul, dan burung kakaktua raja" }
    ],
    correct_answer: 'A',
    hint: 'Zona Peralihan meliputi Pulau Sulawesi, Kepulauan Maluku sebagian, dan Kepulauan Nusa Tenggara.',
    explanation:
      'Fauna khas daerah Peralihan (Wallacea) tidak ditemukan di Paparan Sunda maupun Paparan Sahul, antara lain anoa (Bubalus depressicornis), babirusa (Babyrousa babyrussa), burung maleo (Macrocephalon maleo), tarsius di Sulawesi, serta komodo (Varanus komodoensis) di NTT.',
    tags: ['fauna-peralihan', 'wallacea', 'endemik']
  },
  {
    code: 'BIO10-T2-MUD-005',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Upaya pelestarian keanekaragaman hayati yang dilakukan langsung di dalam habitat aslinya agar populasi spesies tetap berinteraksi dengan ekosistem alaminya disebut konservasi…',
    options: [
      { key: 'A', text: "Domestikasi" },
      { key: 'B', text: "Kriopreservasi" },
      { key: 'C', text: "In-situ" },
      { key: 'D', text: "In-vitro" },
      { key: 'E', text: "Ex-situ" }
    ],
    correct_answer: 'C',
    hint: 'Contoh bentuk pelestarian ini adalah Taman Nasional Ujung Kulon untuk melindungi badak jawa.',
    explanation:
      'Konservasi in-situ adalah pelestarian flora dan fauna di dalam habitat aslinya (misalnya Cagar Alam, Suaka Margasatwa, dan Taman Nasional). Sebaliknya, konservasi ex-situ dilakukan di luar habitat aslinya (Kebun Raya, Kebun Binatang, Taman Safari).',
    tags: ['konservasi', 'in-situ', 'pelestarian']
  },
  {
    code: 'BIO10-T2-MUD-006',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ciri khas flora kawasan Malesiana bagian timur (Papua dan pulau-pulau di sekitarnya) yang membedakannya dari hutan hujan Paparan Sunda (Sumatera dan Kalimantan) adalah…',
    options: [
      { key: 'A', text: "Didominasi oleh pohon famili Dipterocarpaceae (meranti, keruing) yang sangat tinggi" },
      { key: 'B', text: "Didominasi oleh hutan jati meranggas sepanjang tahun" },
      { key: 'C', text: "Hanya ditumbuhi oleh lumut kerak dan rumput tundra kutub" },
      { key: 'D', text: "Banyak ditemukan tumbuhan sagu (Metroxylon sagu), matoa (Pometia pinnata), dan jenis Eucalyptus" },
      { key: 'E', text: "Merupakan habitat asli bunga Rafflesia arnoldii dan Amorphophallus titanum" }
    ],
    correct_answer: 'D',
    hint: 'Flora Papua memiliki kemiripan biogeografis dengan flora benua Australia.',
    explanation:
      'Flora kawasan Paparan Sahul (Papua) bercorak Australis yang kaya akan matoa (Pometia pinnata), sagu (Metroxylon sagu), pala (Myristica fragrans), dan kayu putih (Eucalyptus), sedangkan Paparan Sunda didominasi Dipterocarpaceae dan Rafflesia.',
    tags: ['flora-malesiana', 'paparan-sahul', 'biogeografi']
  },
  {
    code: 'BIO10-T2-MUD-007',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Berikut ini yang merupakan contoh fasilitas konservasi ex-situ (di luar habitat asli) di Indonesia adalah…',
    options: [
      { key: 'A', text: "Taman Nasional Way Kambas di Lampung" },
      { key: 'B', text: "Kebun Raya Bogor dan Taman Safari Cisarua" },
      { key: 'C', text: "Taman Nasional Komodo di Nusa Tenggara Timur" },
      { key: 'D', text: "Cagar Alam Lorentz di Papua" },
      { key: 'E', text: "Suaka Margasatwa Buton Utara di Sulawesi Tenggara" }
    ],
    correct_answer: 'B',
    hint: 'Cari tempat pelestarian yang sengaja mengoleksi dan memelihara tumbuhan/hewan dari berbagai daerah di luar tempat tumbuh alaminya.',
    explanation:
      'Kebun Raya Bogor, Kebun Raya Purwodadi, Taman Safari, dan Kebun Binatang Ragunan merupakan bentuk konservasi ex-situ karena memelihara koleksi spesies di luar ekosistem asalnya untuk tujuan riset, edukasi, dan rehabilitasi.',
    tags: ['konservasi', 'ex-situ', 'kebun-raya']
  },
  {
    code: 'BIO10-T2-MUD-008',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pemanfaatan tanaman mengkudu (Morinda citrifolia), temulawak (Curcuma xanthorrhiza), dan sambiloto sebagai bahan baku obat herbal fitofarmaka menunjukkan nilai manfaat keanekaragaman hayati di bidang…',
    options: [
      { key: 'A', text: "Pertambangan mineral" },
      { key: 'B', text: "Energi fosil" },
      { key: 'C', text: "Sandang (pakaian)" },
      { key: 'D', text: "Kesehatan dan farmasi" },
      { key: 'E', text: "Papan (konstruksi bangunan)" }
    ],
    correct_answer: 'D',
    hint: 'Istilah fitofarmaka merujuk pada sediaan obat bahan alam yang telah teruji secara klinis.',
    explanation:
      'Indonesia memiliki ribuan spesies tumbuhan obat (apotek hidup) seperti temulawak (mengandung kurkuminoid hepatoprotektor) dan mengkudu yang memberikan nilai manfaat kesehatan dan farmasi.',
    tags: ['manfaat-kehati', 'tanaman-obat', 'farmasi']
  },
  {
    code: 'BIO10-T2-MUD-009',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Perbedaan komponen abiotik (iklim, curah hujan, salinitas, jenis tanah) dan komponen biotik antara hutan hujan tropis, sabana, stepa, serta hutan bakau menciptakan keanekaragaman hayati tingkat…',
    options: [
      { key: 'A', text: "Varietas" },
      { key: 'B', text: "Jenis" },
      { key: 'C', text: "Alel" },
      { key: 'D', text: "Ekosistem" },
      { key: 'E', text: "Gen" }
    ],
    correct_answer: 'D',
    hint: 'Variasi ini melibatkan interaksi antara komunitas makhluk hidup yang berbeda dengan kondisi lingkungan fisik (abiotik) yang berbeda pula.',
    explanation:
      'Keanekaragaman tingkat ekosistem terbentuk akibat perbedaan kondisi faktor abiotik (intensitas cahaya, curah hujan, tanah, salinitas) yang berinteraksi dengan komunitas flora dan fauna spesifik di setiap bentang alam.',
    tags: ['keanekaragaman-ekosistem', 'tingkat-kehati', 'ekologi']
  },
  {
    code: 'BIO10-T2-MUD-010',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ciri utama fauna tipe Australis yang ditemukan di wilayah Papua dan Kepulauan Aru dibandingkan dengan fauna tipe Asiatis adalah…',
    options: [
      { key: 'A', text: "Didominasi oleh mamalia plasental berukuran besar seperti gajah, badak, dan harimau" },
      { key: 'B', text: "Hanya dihuni oleh reptilia air tawar tanpa adanya spesies burung endemik" },
      { key: 'C', text: "Burung-burungnya memiliki warna bulu kusam namun bersuara sangat merdu" },
      { key: 'D', text: "Banyak ditemukan berbagai spesies kera, gibon, dan orangutan di tajuk hutan" },
      { key: 'E', text: "Banyak ditemukan mamalia berkantung (Marsupialia) dan burung berbulu warna-warni mencolok, serta tidak ditemukan kera/primata asli" }
    ],
    correct_answer: 'E',
    hint: 'Ingat ciri satwa benua Australia seperti kanguru, walabi, kuskus, dan burung cenderawasih.',
    explanation:
      'Fauna tipe Australis (Paparan Sahul) dicirikan oleh banyaknya mamalia berkantung (Marsupialia: kanguru pohon, kuskus, walabi), burung berbulu indah (cenderawasih, kasuari), sedikit mamalia besar berplasenta, dan tidak dijumpai primata asli.',
    tags: ['fauna-australis', 'marsupialia', 'biogeografi']
  },

  // =========================================================================
  // 2. MEDIUM (C3) : 10 SOAL (BIO10-T2-MED-011 s.d. BIO10-T2-MED-020)
  // =========================================================================
  {
    code: 'BIO10-T2-MED-011',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Perhatikan daftar organisme yang diamati di sebuah lahan pertanian terpadu:\n(1) Pisang ambon (Musa paradisiaca var. sapientum)\n(2) Pisang tanduk (Musa paradisiaca var. corniculata)\n(3) Jeruk nipis (Citrus aurantifolia)\n(4) Jeruk keprok (Citrus reticulata)\n(5) Jeruk bali (Citrus maxima)',
    question_text:
      'Berdasarkan daftar organisme di atas, pengelompokan tingkat keanekaragaman hayati yang tepat adalah…',
    options: [
      { key: 'A', text: "Seluruh tanaman (1) sampai (5) merupakan keanekaragaman tingkat gen karena sama-sama tumbuhan berbiji" },
      { key: 'B', text: "(1) dan (2) menunjukkan keanekaragaman tingkat gen, sedangkan (3), (4), dan (5) menunjukkan keanekaragaman tingkat jenis dalam satu genus Citrus" },
      { key: 'C', text: "(1) dan (3) menunjukkan keanekaragaman tingkat gen dalam satu spesies yang sama" },
      { key: 'D', text: "(1) dan (2) menunjukkan keanekaragaman tingkat jenis, sedangkan (3), (4), dan (5) menunjukkan keanekaragaman tingkat gen" },
      { key: 'E', text: "(3), (4), dan (5) menunjukkan keanekaragaman tingkat ekosistem karena rasanya berbeda" }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan nama ilmiahnya: Musa paradisiaca memiliki nama spesies yang sama (berbeda varietas), sedangkan Citrus aurantifolia, Citrus reticulata, dan Citrus maxima memiliki penunjuk spesies yang berbeda.',
    explanation:
      'Pisang ambon dan pisang tanduk memiliki nama spesies yang sama (Musa paradisiaca) sehingga variasinya merupakan keanekaragaman tingkat gen. Adapun jeruk nipis, jeruk keprok, dan jeruk bali adalah tiga spesies berbeda dalam satu marga (genus Citrus), sehingga merupakan keanekaragaman tingkat jenis.',
    tags: ['keanekaragaman-gen-jenis', 'taksonomi-terapan', 'identifikasi']
  },
  {
    code: 'BIO10-T2-MED-012',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Perhatikan perbandingan karakteristik kawasan konservasi di Indonesia. Perbedaan mendasar antara Taman Nasional dan Cagar Alam menurut UU Konservasi Sumber Daya Alam Hayati adalah…',
    options: [
      { key: 'A', text: "Cagar Alam dikelola untuk produksi kayu industri, sedangkan Taman Nasional untuk perkebunan sawit" },
      { key: 'B', text: "Taman Nasional memiliki sistem zonasi yang memungkinkan pemanfaatan terbatas untuk penelitian, pendidikan, dan wisata alam, sedangkan Cagar Alam dibiarkan berkembang secara alami dan tertutup bagi wisata umum" },
      { key: 'C', text: "Di dalam Cagar Alam diperbolehkan membangun hotel komersial, sedangkan di Taman Nasional dilarang" },
      { key: 'D', text: "Taman Nasional merupakan konservasi ex-situ di tengah kota, sedangkan Cagar Alam merupakan konservasi in-situ di hutan" },
      { key: 'E', text: "Taman Nasional hanya melindungi hewan laut, sedangkan Cagar Alam hanya melindungi burung" }
    ],
    correct_answer: 'B',
    hint: 'Ingat bahwa Taman Nasional memiliki zona inti, zona rimba, dan zona pemanfaatan (ekowisata).',
    explanation:
      'Taman Nasional adalah kawasan pelestarian alam yang dikelola dengan sistem zonasi (zona inti, rimba, pemanfaatan) untuk tujuan penelitian, ilmu pengetahuan, pendidikan, penunjang budidaya, dan pariwisata alam. Sebaliknya, Cagar Alam memiliki kekhasan tumbuhan/ekosistem yang perkembangannya diserahkan sepenuhnya pada alam dan tidak dibuka untuk rekreasi/wisata umum.',
    tags: ['taman-nasional', 'cagar-alam', 'regulasi-konservasi']
  },
  {
    code: 'BIO10-T2-MED-013',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Masuknya ikan Arapaima gigas dari Sungai Amazon dan keong mas (Pomacea canaliculata) ke perairan tawar Indonesia tanpa pengawasan karantina telah menyebabkan penurunan drastis populasi ikan lokal dan kerusakan tanaman padi.',
    question_text:
      'Dalam kajian konservasi keanekaragaman hayati, kedua spesies asing tersebut dikategorikan sebagai ancaman serius karena berperan sebagai…',
    options: [
      { key: 'A', text: "Spesies kunci (Keystone species) yang menstabilkan ekosistem asli" },
      { key: 'B', text: "Dekomposer utama yang mempercepat pelapukan lumpur sawah" },
      { key: 'C', text: "Spesies asing invasif (Invasive Alien Species) yang mendominasi relung, memangsa spesies asli, dan tidak memiliki predator alami" },
      { key: 'D', text: "Produsen primer yang meningkatkan kadar oksigen terlarut di sungai" },
      { key: 'E', text: "Spesies endemik lokal yang memperkaya plasma nutfah Nusantara" }
    ],
    correct_answer: 'C',
    hint: 'Spesies yang diintroduksi dari luar habitat alaminya dan merusak keseimbangan komunitas lokal disebut IAS.',
    explanation:
      'Invasive Alien Species (spesies asing invasif) seperti Arapaima gigas, ikan sapu-sapu, keong mas, dan eceng gondok berkembang biak cepat tanpa musuh alami di habitat baru, sehingga menggeser, memangsa, atau memenangkan kompetisi atas spesies asli (native/endemik).',
    tags: ['spesies-invasif', 'ancaman-kehati', 'ekologi']
  },
  {
    code: 'BIO10-T2-MED-014',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Mengapa kepulauan Sulawesi dan Nusa Tenggara (kawasan Wallacea) memiliki persentase spesies endemik yang jauh lebih tinggi dibandingkan Pulau Sumatera dan Kalimantan?',
    options: [
      { key: 'A', text: "Karena seluruh hewan di Sulawesi sengaja dibawa oleh pelaut Eropa pada abad ke-18" },
      { key: 'B', text: "Karena pulau-pulau di kawasan Wallacea pernah bersatu dengan benua Eropa pada zaman Es" },
      { key: 'C', text: "Karena Pulau Sumatera dan Kalimantan tidak memiliki hutan hujan tropis" },
      { key: 'D', text: "Karena kawasan Wallacea tidak pernah menerima curah hujan sama sekali sepanjang tahun" },
      { key: 'E', text: "Karena kawasan Wallacea dikelilingi palung laut dalam dan terisolasi secara geografis selama jutaan tahun (tidak pernah menyatu dengan daratan Asia maupun Australia saat permukaan laut turun)" }
    ],
    correct_answer: 'E',
    hint: 'Pikirkan dampak isolasi geografis oleh selat dan laut dalam (seperti Selat Makassar) terhadap proses spesiasi (pembentukan spesies baru).',
    explanation:
      'Ketika permukaan air laut turun pada zaman Glasial (Pleistosen), Sumatera, Jawa, dan Kalimantan menyatu dengan benua Asia (Paparan Sunda), sedangkan Papua menyatu dengan Australia (Paparan Sahul). Sebaliknya, Sulawesi dan Nusa Tenggara tetap terpisah oleh laut dalam, sehingga isolasi geografis jangka panjang memicu evolusi spesies endemik yang unik.',
    tags: ['wallacea', 'isolasi-geografis', 'endemisme']
  },
  {
    code: 'BIO10-T2-MED-015',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Kebijakan pertanian modern yang mengganti ratusan varietas padi lokal Nusantara dengan hanya satu varietas padi hibrida unggul di seluruh wilayah secara serentak (monokultur) berisiko tinggi menurunkan keanekaragaman hayati tingkat…',
    options: [
      { key: 'A', text: "Biosfer atmosferik" },
      { key: 'B', text: "Bioma tundra dan taiga" },
      { key: 'C', text: "Kelas Mammalia" },
      { key: 'D', text: "Gen (erosi plasma nutfah varietas lokal)" },
      { key: 'E', text: "Filum dan Kingdom" }
    ],
    correct_answer: 'D',
    hint: 'Varietas padi lokal dan padi hibrida masih berada dalam satu spesies Oryza sativa, namun memiliki kekayaan alel (plasma nutfah) yang berbeda.',
    explanation:
      'Penyeragaman varietas tanaman pertanian (monokultur varietas tunggal) menyebabkan hilangnya varietas-varietas padi lokal yang menyimpan gen ketahanan alami terhadap kekeringan atau penyakit. Fenomena ini disebut erosi genetik (penurunan keanekaragaman tingkat gen/plasma nutfah).',
    tags: ['erosi-genetik', 'plasma-nutfah', 'monokultur']
  },
  {
    code: 'BIO10-T2-MED-016',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ekosistem terumbu karang, hutan bakau (mangrove), dan padang lamun di wilayah pesisir saling berinteraksi. Apabila ekosistem hutan bakau di muara sungai ditebang habis untuk dijadikan tambak intensif, dampak langsung yang akan dialami oleh ekosistem terumbu karang di lepas pantainya adalah…',
    options: [
      { key: 'A', text: "Terumbu karang tumbuh semakin cepat karena mendapat limpahan lumpur dari sungai" },
      { key: 'B', text: "Lumpur dan sedimen dari sungai langsung menutupi polip karang sehingga menghalangi penetrasi cahaya matahari bagi fotosintesis zooxanthellae" },
      { key: 'C', text: "Suhu air laut turun hingga titik beku akibat hilangnya pohon bakau" },
      { key: 'D', text: "Salinitas air laut di sekitar terumbu karang meningkat menjadi 100 ppt" },
      { key: 'E', text: "Ikan-ikan karang memperoleh tempat pemijahan yang lebih aman di dasar tambak beton" }
    ],
    correct_answer: 'B',
    hint: 'Salah satu fungsi ekologis akar mangrove adalah menjadi perangkap sedimen (sediment trap) dari aliran sungai sebelum masuk ke laut.',
    explanation:
      'Hutan mangrove berfungsi menahan lumpur dan polutan dari muara sungai. Jika mangrove rusak, terjadi sedimentasi dan kekeruhan tinggi di perairan pantai yang menutupi permukaan karang serta menghambat cahaya matahari yang dibutuhkan alga endosimbion zooxanthellae untuk berfotosintesis.',
    tags: ['interaksi-ekosistem', 'mangrove-karang', 'dampak-lingkungan']
  },
  {
    code: 'BIO10-T2-MED-017',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pasangan Taman Nasional di Indonesia beserta spesies satwa langka utama yang dilindungi secara in-situ di dalamnya yang tepat adalah…',
    options: [
      { key: 'A', text: "Taman Nasional Baluran (Jawa Timur) – Burung Cenderawasih (Paradisaea apoda)" },
      { key: 'B', text: "Taman Nasional Lorentz (Papua) – Badak Jawa (Rhinoceros sondaicus)" },
      { key: 'C', text: "Taman Nasional Ujung Kulon (Banten) – Komodo (Varanus komodoensis)" },
      { key: 'D', text: "Taman Nasional Lore Lindu (Sulawesi Tengah) – Harimau Sumatera (Panthera tigris sumatrae)" },
      { key: 'E', text: "Taman Nasional Tanjung Puting (Kalimantan Tengah) – Orangutan (Pongo pygmaeus)" }
    ],
    correct_answer: 'E',
    hint: 'Cocokkan letak geografis pulau Taman Nasional tersebut dengan persebaran biogeografi satwanya.',
    explanation:
      'Taman Nasional Tanjung Puting di Kalimantan Tengah merupakan kawasan konservasi in-situ utama bagi Orangutan kalimantan (Pongo pygmaeus) dan bekantan. TN Ujung Kulon melindungi badak jawa, TN Baluran melindungi banteng jawa, TN Lore Lindu melindungi anoa/maleo, dan TN Lorentz melindungi fauna Australis Papua.',
    tags: ['taman-nasional', 'konservasi-insitu', 'fauna-langka']
  },
  {
    code: 'BIO10-T2-MED-018',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Tumbuhan kayu cendana (Santalum album) dari Nusa Tenggara Timur dan gaharu (Aquilaria malaccensis) memiliki nilai ekonomi sangat tinggi sehingga mengalami eksploitasi berlebih di alam. Nilai manfaat utama dari kedua spesies tumbuhan tersebut bagi industri adalah…',
    options: [
      { key: 'A', text: "Penghasil minyak atsiri aromatik, bahan baku parfum, kosmetik, dan dupa bernilai tinggi" },
      { key: 'B', text: "Penghasil logam mulia melalui proses fitoremediasi" },
      { key: 'C', text: "Penghasil serat tekstil sintetis untuk pakaian olahraga" },
      { key: 'D', text: "Penghasil lateks karet alam untuk ban kendaraan berat" },
      { key: 'E', text: "Penghasil karbohidrat pokok pengganti beras" }
    ],
    correct_answer: 'A',
    hint: 'Kayu teras cendana dan resin gubal gaharu terkenal karena aroma harumnya yang khas.',
    explanation:
      'Kayu cendana (Santalum album) menghasilkan minyak santalol aromatik dan gaharu (Aquilaria malaccensis) menghasilkan resin gubal wangi yang dimanfaatkan sebagai bahan baku parfum mewah, aromaterapi, kosmetik, obat tradisional, dan perlengkapan ritual keagamaan.',
    tags: ['manfaat-ekonomi', 'flora-nusantara', 'cendana-gaharu']
  },
  {
    code: 'BIO10-T2-MED-019',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Untuk menyelamatkan spesies tumbuhan langka yang bijinya bersifat rekalsitran (cepat rusak jika dikeringkan) serta sulit diperbanyak secara generatif di habitat aslinya, metode bioteknologi konservasi ex-situ yang paling efektif diterapkan di laboratorium adalah…',
    options: [
      { key: 'A', text: "Persilangan dengan tanaman gulma invasif di lahan terbuka" },
      { key: 'B', text: "Kultur jaringan in-vitro dan kriopreservasi jaringan meristem dalam nitrogen cair (-196°C)" },
      { key: 'C', text: "Pengeringan biji di bawah terik matahari selama tiga bulan" },
      { key: 'D', text: "Penebangan pohon induk agar tumbuh tunas akar secara alami di hutan" },
      { key: 'E', text: "Pemberian herbisida kimia pada tanah tempat tumbuhnya" }
    ],
    correct_answer: 'B',
    hint: 'Biji rekalsitran tidak tahan disimpan di bank biji kering biasa, sehingga perlu perbanyakan aseptik dari jaringan vegetatif.',
    explanation:
      'Bagi tumbuhan langka berbiji rekalsitran atau berdaya kecambah rendah, konservasi ex-situ modern memanfaatkan kultur jaringan (mikropropagasi in-vitro) serta penyimpanan jangka panjang (kriopreservasi) eksplan tunas/embrio somatik di dalam nitrogen cair bersuhu -196°C.',
    tags: ['konservasi-exsitu', 'kriopreservasi', 'kultur-jaringan']
  },
  {
    code: 'BIO10-T2-MED-020',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ekosistem hutan hujan tropis dataran rendah di Kalimantan memiliki keanekaragaman spesies tumbuhan dan hewan yang jauh lebih tinggi dibandingkan ekosistem tundra di kutub. Faktor abiotik utama yang mendukung tingginya produktivitas primer dan biodiversitas hutan hujan tropis Indonesia adalah…',
    options: [
      { key: 'A', text: "Tidak adanya aktivitas mikroorganisme pengurai di lantai hutan" },
      { key: 'B', text: "Kadar garam tanah yang sangat tinggi di atas 45 ppt di seluruh pegunungan" },
      { key: 'C', text: "Penyinaran matahari yang stabil sepanjang tahun, curah hujan tinggi (>2.000 mm/tahun), dan kelembapan udara tinggi" },
      { key: 'D', text: "Suhu rata-rata di bawah 0°C dan lapisan tanah permafrost abadi" },
      { key: 'E', text: "Musim kemarau ekstrem selama 11 bulan dengan curah hujan di bawah 100 mm/tahun" }
    ],
    correct_answer: 'C',
    hint: 'Posisi geografis Indonesia di garis khatulistiwa memberikan iklim tropis basah yang mendukung fotosintesis sepanjang tahun.',
    explanation:
      'Iklim tropis khatulistiwa memiliki intensitas cahaya matahari yang konstan sepanjang tahun, suhu hangat (~25–28°C), dan curah hujan tahunan tinggi. Kondisi ini memaksimalkan laju fotosintesis produsen dan menciptakan stratifikasi tajuk hutan (kanopi) yang menyediakan ribuan relung ekologi (niche).',
    tags: ['hutan-hujan-tropis', 'faktor-abiotik', 'megabiodiversitas']
  },

  // =========================================================================
  // 3. SULIT / HOTS (C4 - C5) : 12 SOAL (BIO10-T2-SUL-021 s.d. BIO10-T2-SUL-032)
  //    (Termasuk 6 soal dengan stimulus_type: 'table' dan 'svg')
  // =========================================================================
  {
    code: 'BIO10-T2-SUL-021',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#ECFDF5;color:#065F46;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Spesies Pohon</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Jumlah Individu di Komunitas Hutan A</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Jumlah Individu di Komunitas Hutan B</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Meranti Merah (Shorea leprosula)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">25 pohon</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">91 pohon</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Keruing (Dipterocarpus grandiflorus)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">25 pohon</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">3 pohon</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ulin (Eusideroxylon zwageri)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">25 pohon</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">3 pohon</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Kamper (Dryobalanops aromatica)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">25 pohon</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">3 pohon</td>
          </tr>
          <tr style="background:#F8FAFC;font-weight:bold;">
            <td style="padding:8px;border:1px solid #CBD5E1;">Total Individu &amp; Kekayaan Spesies (S)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">100 pohon (4 spesies)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">100 pohon (4 spesies)</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Kedua komunitas hutan pada tabel di atas sama-sama memiliki total 100 pohon dan 4 spesies yang sama (kekayaan jenis / species richness identik). Namun, ahli ekologi menetapkan bahwa Komunitas Hutan A memiliki indeks keanekaragaman Shannon-Wiener (H\') dan stabilitas ekosistem yang JAUH LEBIH TINGGI daripada Komunitas Hutan B. Analisis ekologis yang tepat untuk menjelaskan ketetapan tersebut adalah…',
    options: [
      { key: 'A', text: "Komunitas Hutan A dan B memiliki indeks keanekaragaman yang sama persis karena jumlah total pohonnya sama-sama 100." },
      { key: 'B', text: "Komunitas Hutan B lebih stabil karena didominasi mutlak oleh satu spesies (Meranti Merah 91%) sehingga tahan terhadap semua penyakit." },
      { key: 'C', text: "Komunitas Hutan B memiliki kemerataan spesies lebih tinggi karena jumlah pohon Ulin dan Kamper hanya 3 individu." },
      { key: 'D', text: "Indeks keanekaragaman hayati hanya ditentukan oleh tinggi pohon, bukan oleh distribusi jumlah individu tiap spesies." },
      { key: 'E', text: "Komunitas Hutan A memiliki kemerataan spesies (species evenness) yang maksimum (masing-masing 25%), sehingga jika terjadi wabah patogen spesifik pada satu spesies pohon, struktur fungsi hutan tidak langsung runtuh." }
    ],
    correct_answer: 'E',
    hint: 'Keanekaragaman komunitas ditentukan oleh dua komponen: kekayaan spesies (richness) dan kemerataan kelimpahan individu tiap spesies (evenness).',
    explanation:
      'Indeks keanekaragaman jenis (seperti Shannon-Wiener H\') dipengaruhi oleh kekayaan jenis (S) dan kemerataan (evenness). Meskipun S sama-sama 4 spesies, Komunitas A memiliki kemerataan sempurna (25:25:25:25), sedangkan Komunitas B didominasi 91% oleh satu spesies (mendekati monokultur) yang rentan kolaps jika spesies dominan tersebut terserang hama spesifik.',
    tags: ['hots', 'analisis-tabel', 'indeks-keanekaragaman', 'species-evenness']
  },
  {
    code: 'BIO10-T2-SUL-022',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#F0FDF4;border-radius:14px;border:1px solid #BBF7D0;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#064E3B">Perbandingan Desain Kawasan Konservasi: Skenario I (Fragmentasi) vs Skenario II (Koridor)</text>
        <!-- Skenario I: Terfragmentasi oleh Jalan Tol -->
        <rect x="20" y="45" width="95" height="55" rx="10" fill="#86EFAC" stroke="#16A34A" stroke-width="2"/>
        <text x="35" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#064E3B">Blok Hutan 1</text>
        <rect x="122" y="45" width="20" height="125" fill="#94A3B8"/>
        <text x="127" y="110" font-family="sans-serif" font-size="9" fill="#FFF" transform="rotate(-90 127,110)">JALAN TOL</text>
        <rect x="150" y="45" width="95" height="55" rx="10" fill="#86EFAC" stroke="#16A34A" stroke-width="2"/>
        <text x="165" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#064E3B">Blok Hutan 2</text>
        <text x="45" y="128" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C">Skenario I: 15 Harimau + 15 Harimau</text>
        <text x="45" y="144" font-family="sans-serif" font-size="10" fill="#7F1D1D">(Terisolasi Total Tanpa Penyeberangan)</text>

        <!-- Skenario II: Dihubungkan Koridor Ekologis -->
        <rect x="280" y="45" width="95" height="55" rx="10" fill="#86EFAC" stroke="#16A34A" stroke-width="2"/>
        <text x="295" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#064E3B">Blok Hutan A</text>
        <rect x="375" y="60" width="35" height="25" fill="#22C55E" stroke="#15803D" stroke-width="2"/>
        <text x="377" y="76" font-family="sans-serif" font-size="9" font-weight="bold" fill="#FFF">KORIDOR</text>
        <rect x="410" y="45" width="95" height="55" rx="10" fill="#86EFAC" stroke="#16A34A" stroke-width="2"/>
        <text x="425" y="75" font-family="sans-serif" font-size="11" font-weight="bold" fill="#064E3B">Blok Hutan B</text>
        <text x="300" y="128" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Skenario II: Jembatan Satwa (Wildlife Corridor)</text>
        <text x="300" y="144" font-family="sans-serif" font-size="10" fill="#065F46">(Aliran Gen Antarblok Terjaga)</text>
      </svg>
    `,
    question_text:
      'Perhatikan diagram perbandingan Skenario I (hutan terfragmentasi jalan tol menjadi dua subpopulasi kecil @15 ekor harimau) dan Skenario II (dua blok hutan dihubungkan oleh koridor satwa/jembatan hijau). Mengapa Skenario I sangat berisiko mempercepat kepunahan harimau meskipun luas total hutannya sama dengan Skenario II?',
    options: [
      { key: 'A', text: "Karena harimau hanya dapat bereproduksi apabila jumlah populasinya kurang dari 5 ekor di dalam satu pulau kecil." },
      { key: 'B', text: "Karena koridor satwa pada Skenario II berfungsi untuk mencegah harimau melakukan perkawinan silang." },
      { key: 'C', text: "Karena pada Skenario I harimau akan berubah menjadi hewan herbivora pemakan rumput di tepi jalan tol." },
      { key: 'D', text: "Karena fragmentasi habitat pada Skenario I mengurangi efek tepi (edge effect) dan meningkatkan kelembapan inti hutan." },
      { key: 'E', text: "Karena isolasi subpopulasi kecil pada Skenario I menghentikan aliran gen (gene flow) dan memicu perkawinan sedarah (inbreeding depression) yang menurunkan variasi genetik serta ketahanan terhadap penyakit." }
    ],
    correct_answer: 'E',
    hint: 'Hubungkan konsep fragmentasi habitat dengan ukuran populasi efektif, aliran gen (gene flow), dan risiko perkawinan kerabat dekat (inbreeding).',
    explanation:
      'Fragmentasi habitat (Skenario I) memecah populasi besar menjadi subpopulasi kecil yang terisolasi. Tanpa koridor ekologis (Skenario II), aliran gen (gene flow) terputus sehingga terjadi perkawinan sedarah (inbreeding depression), peningkatan homozigositas alel resesif merugikan, penurunan keanekaragaman tingkat gen, serta peningkatan kerentanan terhadap kepunahan lokal.',
    tags: ['hots', 'fragmentasi-habitat', 'koridor-satwa', 'svg', 'konservasi']
  },
  {
    code: 'BIO10-T2-SUL-023',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#EFF6FF;border-radius:14px;border:1px solid #BFDBFE;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1E3A8A">Penampang Biogeografi Kepulauan Indonesia &amp; Kedalaman Paparan Benua</text>
        <!-- Paparan Sunda -->
        <rect x="20" y="45" width="145" height="115" rx="10" fill="#DBEAFE" stroke="#2563EB"/>
        <text x="32" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A">Zona I: Paparan Sunda</text>
        <text x="32" y="88" font-family="sans-serif" font-size="10" fill="#1E40AF">Sumatera, Jawa, Kalimantan</text>
        <text x="32" y="106" font-family="sans-serif" font-size="10" fill="#1E40AF">Laut Dangkal (&lt;100 m)</text>
        <text x="32" y="124" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1D4ED8">Mamalia Plasental Besar</text>

        <!-- Garis Wallace -->
        <line x1="175" y1="40" x2="175" y2="170" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="5,4"/>
        <text x="148" y="185" font-family="sans-serif" font-size="10" font-weight="bold" fill="#DC2626">Garis Wallace</text>

        <!-- Zona Wallacea -->
        <rect x="185" y="45" width="145" height="115" rx="10" fill="#FEF3C7" stroke="#D97706"/>
        <text x="197" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E">Zona II: Wallacea</text>
        <text x="197" y="88" font-family="sans-serif" font-size="10" fill="#B45309">Sulawesi, NTB, NTT, Maluku</text>
        <text x="197" y="106" font-family="sans-serif" font-size="10" fill="#B45309">Palung Laut Dalam (&gt;1.000 m)</text>
        <text x="197" y="124" font-family="sans-serif" font-size="10" font-weight="bold" fill="#B45309">Endemisme Sangat Tinggi</text>

        <!-- Garis Lydekker -->
        <line x1="340" y1="40" x2="340" y2="170" stroke="#7C3AED" stroke-width="2.5" stroke-dasharray="5,4"/>
        <text x="310" y="185" font-family="sans-serif" font-size="10" font-weight="bold" fill="#7C3AED">Garis Weber/Lydekker</text>

        <!-- Paparan Sahul -->
        <rect x="350" y="45" width="150" height="115" rx="10" fill="#DCFCE7" stroke="#16A34A"/>
        <text x="362" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46">Zona III: Paparan Sahul</text>
        <text x="362" y="88" font-family="sans-serif" font-size="10" fill="#047857">Papua &amp; Kepulauan Aru</text>
        <text x="362" y="106" font-family="sans-serif" font-size="10" fill="#047857">Laut Dangkal (&lt;100 m)</text>
        <text x="362" y="124" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857">Marsupialia &amp; Aves Eksotis</text>
      </svg>
    `,
    question_text:
      'Berdasarkan penampang biogeografi dan sejarah geologi pleistosen pada diagram di atas, mengapa di Pulau Kalimantan (Zona I) ditemukan orangutan dan gajah kerdil namun sama sekali TIDAK ditemukan secara alami di Pulau Sulawesi (Zona II), padahal jarak kedua pulau tersebut hanya dipisahkan oleh Selat Makassar?',
    options: [
      { key: 'A', text: "Karena iklim di Pulau Sulawesi terlalu dingin seperti kutub sehingga primata besar tidak dapat bertahan hidup." },
      { key: 'B', text: "Karena Pulau Kalimantan dahulu menyatu dengan benua Australia sedangkan Pulau Sulawesi menyatu dengan benua Afrika." },
      { key: 'C', text: "Karena seluruh populasi orangutan di Sulawesi telah bermutasi menjadi burung maleo dan komodo." },
      { key: 'D', text: "Karena Selat Makassar merupakan palung laut dalam (>1.000 m) yang tetap menjadi penghalang air (water barrier) saat zaman Es, sehingga mamalia darat besar dari Paparan Sunda tidak dapat menyeberang ke Sulawesi." },
      { key: 'E', text: "Karena di Pulau Sulawesi tidak terdapat pohon berkayu maupun buah-buahan hutan." }
    ],
    correct_answer: 'D',
    hint: 'Perhatikan kedalaman laut antara Zona I (<100 m) dan Zona II (>1.000 m) ketika permukaan air laut global turun sekitar 120 meter pada puncak zaman Es.',
    explanation:
      'Pada puncak zaman Glasial (Pleistosen), permukaan laut turun ~120 meter sehingga laut dangkal (<100 m) di Paparan Sunda mengering menjadi jembatan darat yang menghubungkan Asia dengan Sumatera, Jawa, dan Kalimantan. Namun, Selat Makassar (tempat lewatnya Garis Wallace) memiliki kedalaman >1.000 meter sehingga tetap berupa selat laut dalam yang tidak dapat diseberangi mamalia darat besar.',
    tags: ['hots', 'biogeografi', 'garis-wallace', 'svg', 'sejarah-geologi']
  },
  {
    code: 'BIO10-T2-SUL-024',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#FEF2F2;color:#991B1B;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Spesies Satwa</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Estimasi Populasi Liar</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Sebaran Habitat</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Laju Reproduksi Induk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Badak Jawa (Rhinoceros sondaicus)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">~76 individu</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Hanya 1 lokasi (TN Ujung Kulon, dekat Gunung Anak Krakatau)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 anak tiap 4–5 tahun</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Rusa Timor (Rusa timorensis)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&gt;10.000 individu</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tersebar di banyak pulau &amp; penangkaran</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1–2 anak tiap tahun</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan data ekologi populasi pada tabel di atas, Badak Jawa berstatus Critically Endangered (Kritis). Mengapa keberadaan seluruh populasi Badak Jawa yang hanya terkonsentrasi di satu lokasi tunggal (TN Ujung Kulon) menjadi kekhawatiran terbesar para ahli biologi konservasi, dan strategi mitigasi apa yang paling mendesak?',
    options: [
      { key: 'A', text: "Karena Rusa Timor merupakan predator karnivora yang memangsa Badak Jawa; solusinya adalah memusnahkan seluruh rusa." },
      { key: 'B', text: "Karena Badak Jawa memiliki laju reproduksi terlalu cepat sehingga menyebabkan ledakan populasi; solusinya adalah sterilisasi." },
      { key: 'C', text: "Karena TN Ujung Kulon berada di kawasan perkotaan padat; solusinya adalah memindahkan seluruh badak ke akuarium laut." },
      { key: 'D', text: "Karena satu bencana alam tunggal (seperti tsunami erupsi Anak Krakatau) atau satu wabah penyakit menular di Ujung Kulon dapat memusnahkan 100% spesies tersebut; solusinya adalah membangun habitat kedua (second habitat / translokasi metapopulasi)." },
      { key: 'E', text: "Karena Badak Jawa hanya memakan rumput laut; solusinya adalah mengeruk seluruh hutan hujan Ujung Kulon." }
    ],
    correct_answer: 'D',
    hint: 'Bayangkan risiko "menaruh seluruh telur dalam satu keranjang" ketika keranjang tersebut berada tepat di dekat gunung api laut aktif.',
    explanation:
      'Populasi tunggal (single population) dengan jumlah ~76 ekor dan laju reproduksi lambat sangat rentan terhadap kepunahan total akibat kejadian stokastik (bencana tsunami Gunung Anak Krakatau atau epidemi penyakit dari ternak). Strategi konservasi prioritas adalah program Javan Rhino Study and Conservation Area (JRSCA) dan pembentukan populasi kedua (second habitat) yang aman.',
    tags: ['hots', 'konservasi-badak-jawa', 'analisis-tabel', 'evaluasi-risiko']
  },
  {
    code: 'BIO10-T2-SUL-025',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#EFF6FF;color:#1E3A8A;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Parameter Pengamatan</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Hutan Hujan Primer (Alami)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Perkebunan Kelapa Sawit Monokultur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Jumlah Spesies Pohon per Hektare</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">180 – 240 spesies</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 spesies (Elaeis guineensis)</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Stratifikasi Tajuk (Kanopi)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">5 lapisan (A, B, C, D, E)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 lapisan seragam</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Jumlah Spesies Burung &amp; Mamalia</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">142 spesies</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">11 spesies (didominasi tikus &amp; burung pemakan serangga umum)</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Sebagian pihak berpendapat bahwa "Mengubah hutan hujan primer menjadi perkebunan kelapa sawit tidak merusak lingkungan karena sama-sama berwarna hijau dan terdiri atas ribuan pohon". Berdasarkan data tabel perbandingan di atas, sanggahan ilmiah yang paling akurat dari sudut pandang ekologi dan keanekaragaman hayati adalah…',
    options: [
      { key: 'A', text: "Konversi hutan primer menjadi monokultur sawit menghilangkan stratifikasi tajuk 5 lapis dan memangkas >90% relung ekologi (niche), sehingga jaring-jaring makanan kompleks runtuh dan memicu ledakan hama seperti tikus." },
      { key: 'B', text: "Hutan hujan primer memiliki jumlah pohon yang lebih sedikit dibandingkan perkebunan sawit sehingga tidak menghasilkan oksigen." },
      { key: 'C', text: "Stratifikasi tajuk 5 lapisan pada hutan primer justru menghalangi seluruh hewan untuk mencari makan." },
      { key: 'D', text: "Penurunan spesies burung dari 142 menjadi 11 spesies disebabkan oleh pohon kelapa sawit yang memancarkan gas beracun." },
      { key: 'E', text: "Perkebunan kelapa sawit tidak pernah melakukan fotosintesis sama sekali karena daunnya tidak mengandung klorofil." }
    ],
    correct_answer: 'A',
    hint: 'Bandingkan kompleksitas struktur vertikal (5 lapisan kanopi vs 1 lapisan) dan dampaknya terhadap ketersediaan mikrohabitat/relung ekologi bagi satwa.',
    explanation:
      'Perkebunan monokultur bukan pengganti ekosistem hutan hujan primer. Hilangnya keragaman tumbuhan (240 spesies → 1 spesies) dan hilangnya stratifikasi tajuk (5 lapisan → 1 lapisan) memusnahkan variasi sumber pakan serta mikrohabitat, menyederhanakan jaring-jaring makanan secara ekstrem, dan menurunkan stabilitas ekosistem.',
    tags: ['hots', 'deforestasi', 'monokultur', 'analisis-tabel', 'ekosistem']
  },
  {
    code: 'BIO10-T2-SUL-026',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Burung rangkong gading (Rhinoplax vigil) di hutan Kalimantan dijuluki sebagai "petani hutan" karena memakan buah pohon ara (Ficus) dan buah-buahan hutan berbiji besar, lalu menyebarkan biji tersebut melalui kotorannya hingga puluhan kilometer sambil terbang di atas kanopi.',
    question_text:
      'Apabila perburuan liar menyebabkan kepunahan lokal rangkong gading di suatu kawasan hutan Kalimantan, dampak berantai (trophic cascade) yang paling mungkin terjadi pada struktur vegetasi hutan dalam jangka panjang adalah…',
    options: [
      { key: 'A', text: "Seluruh pohon di hutan Kalimantan langsung beralih melakukan penyerbukan dan penyebaran biji dengan bantuan ikan sungai." },
      { key: 'B', text: "Kepunahan rangkong gading hanya memengaruhi populasi burung, tanpa berdampak sedikit pun pada komunitas tumbuhan." },
      { key: 'C', text: "Biji pohon hutan yang jatuh tepat di bawah pohon induk seluruhnya akan tumbuh subur tanpa kompetisi cahaya maupun serangan jamur." },
      { key: 'D', text: "Pohon-pohon hutan berbiji besar gagal melakukan dispersi (penyebaran biji) jarak jauh, sehingga regenerasi hutan terhambat dan komposisi flora hutan mengalami penurunan keanekaragaman." },
      { key: 'E', text: "Pohon ara (Ficus) akan tumbuh seratus kali lebih cepat karena buahnya tidak lagi dimakan burung rangkong." }
    ],
    correct_answer: 'D',
    hint: 'Rangkong gading berperan sebagai spesies kunci (keystone seed disperser) bagi pohon-pohon hutan hujan berbuah besar.',
    explanation:
      'Rangkong gading adalah agen frugivora pemencar biji (seed disperser) kunci di hutan hujan tropis. Tanpa burung rangkong, biji pohon berukuran besar jatuh menumpuk tepat di bawah pohon induk (mengalami kompetisi intraspesifik tinggi dan serangan patogen), sehingga regenerasi spasial dan keanekaragaman pohon hutan menurun drastis.',
    tags: ['hots', 'keystone-species', 'rangkong-gading', 'interaksi-ekologis']
  },
  {
    code: 'BIO10-T2-SUL-027',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Pemanasan global memicu kenaikan suhu rata-rata di lereng Gunung Jayawijaya (Papua) dan Gunung Kinabalu. Para peneliti menemukan bahwa sejumlah spesies tumbuhan alpin dan serangga pegunungan tinggi yang beradaptasi pada suhu dingin terpaksa menggeser rentang habitatnya semakin naik ke arah puncak gunung.',
    question_text:
      'Berdasarkan fenomena ekologis di atas, mengapa spesies endemik yang hidup khusus di zona puncak gunung tertinggi (zona alpin tropis) menghadapi risiko kepunahan paling fatal akibat pemanasan global?',
    options: [
      { key: 'A', text: "Karena spesies zona puncak mengalami efek \"eskalator menuju kepunahan\" (escalator to extinction): ketika suhu di puncak menghangat, tidak ada lagi daratan yang lebih tinggi untuk tempat bermigrasi sementara spesies dataran lebih rendah mendesak naik." },
      { key: 'B', text: "Karena di puncak gunung tidak pernah terjadi perubahan suhu udara meskipun terjadi pemanasan global." },
      { key: 'C', text: "Karena tumbuhan zona alpin tidak membutuhkan karbon dioksida maupun air untuk hidup." },
      { key: 'D', text: "Karena pemanasan global menyebabkan puncak gunung bertambah tinggi 500 meter setiap tahun." },
      { key: 'E', text: "Karena di puncak gunung terdapat terlalu banyak predator laut yang naik dari pantai." }
    ],
    correct_answer: 'A',
    hint: 'Ke mana lagi organisme spesialis suhu dingin di titik puncak tertinggi dapat berpindah jika puncak itu sendiri sudah menjadi terlalu hangat?',
    explanation:
      'Fenomena "escalator to extinction" terjadi pada ekosistem pegunungan tinggi: seiring kenaikan garis isoterm suhu, spesies bawah bergerak naik mendesak spesies di atasnya, sedangkan spesies endemik di puncak gunung kehilangan habitat bersuhu dinginnya sama sekali karena tidak ada lagi elevasi yang lebih tinggi untuk dituju.',
    tags: ['hots', 'pemanasan-global', 'kepunahan-alpin', 'studi-kasus']
  },
  {
    code: 'BIO10-T2-SUL-028',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Di sebuah kawasan pesisir, nelayan menggunakan bom ikan (bahan peledak) dan racun potasium sianida (KCN) untuk menangkap ikan hias dan ikan kerapu karang demi memperoleh hasil tangkapan instan dalam jumlah besar.',
    question_text:
      'Evaluasi dampak jangka panjang praktik penangkapan destruktif tersebut terhadap keanekaragaman hayati laut dan ekonomi nelayan sendiri adalah…',
    options: [
      { key: 'A', text: "Potasium sianida berfungsi sebagai pupuk cair yang menyuburkan alga zooxanthellae di dalam jaringan karang." },
      { key: 'B', text: "Kerusakan terumbu karang hanya berdampak pada keindahan wisata selam dan sama sekali tidak memengaruhi populasi ikan konsumsi." },
      { key: 'C', text: "Bom ikan dan sianida hanya mematikan ikan tua sehingga justru mempercepat pertumbuhan koloni karang baru dalam waktu satu minggu." },
      { key: 'D', text: "Gelombang kejut bom ikan membantu membersihkan lumpur dari permukaan terumbu karang tanpa merusak polip." },
      { key: 'E', text: "Ledakan bom menghancurkan struktur fisik kerangka kalsium karbonat terumbu karang yang butuh puluhan tahun untuk tumbuh, sedangkan sianida mematikan polip karang dan larva biota, sehingga tempat pemijahan ikan musnah dan hasil tangkapan nelayan anjlok di masa depan." }
    ],
    correct_answer: 'E',
    hint: 'Terumbu karang tumbuh sangat lambat (hanya sekitar 1–2 cm per tahun) dan merupakan rumah asuhan (nursery ground) bagi ribuan spesies ikan.',
    explanation:
      'Penangkapan ikan dengan bahan peledak meruntuhkan arsitektur tiga dimensi terumbu karang (CaCO3), sementara sianida meracuni enzim pernapasan seluler polip karang (memicu kematian karang) dan membunuh organisme juvenil non-target. Akibatnya, fungsi terumbu karang sebagai spawning dan nursery ground hilang, menghancurkan stok perikanan secara permanen.',
    tags: ['hots', 'konservasi-laut', 'terumbu-karang', 'evaluasi-dampak']
  },
  {
    code: 'BIO10-T2-SUL-029',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Padi liar (Oryza rufipogon) yang tumbuh di rawa-rawa alami memiliki bulir gabah yang sedikit dan mudah rontok sehingga tidak disukai petani untuk dipanen langsung. Namun, para pemulia tanaman di balai penelitian pertanian tetap melestarikan populasi padi liar tersebut di bank plasma nutfah.',
    question_text:
      'Mengapa pelestarian plasma nutfah spesies liar kerabat tanaman budidaya (seperti Oryza rufipogon) sangat vital bagi ketahanan pangan nasional di masa depan?',
    options: [
      { key: 'A', text: "Karena padi liar dapat langsung dipanen menghasilkan 20 ton beras per hektare tanpa perawatan." },
      { key: 'B', text: "Karena keberadaan padi liar berfungsi untuk menggantikan seluruh tanaman sayur dan buah di Indonesia." },
      { key: 'C', text: "Karena spesies kerabat liar menyimpan cadangan gen (alel) ketahanan alami terhadap hama baru, penyakit, salinitas, dan genangan ekstrem yang dapat disilangkan ke varietas padi budidaya modern." },
      { key: 'D', text: "Karena padi liar tidak membutuhkan air maupun tanah untuk tumbuh di dalam gudang penyimpanan." },
      { key: 'E', text: "Karena padi liar merupakan satu-satunya tumbuhan yang tidak memiliki materi genetik DNA." }
    ],
    correct_answer: 'C',
    hint: 'Varietas padi modern sering diseleksi hanya untuk rasa dan hasil panen tinggi, tetapi kehilangan gen ketahanan terhadap cekaman lingkungan ekstrem.',
    explanation:
      'Kerabat liar tanaman budidaya (Crop Wild Relatives) telah melewati seleksi alam ribuan tahun sehingga memiliki kekayaan genetik (alel resistensi terhadap virus tungro, wereng, kekeringan, dan tanah asam) yang sangat berharga sebagai sumber donor gen dalam pemuliaan tanaman ketahanan pangan.',
    tags: ['hots', 'plasma-nutfah', 'pemuliaan-tanaman', 'ketahanan-pangan']
  },
  {
    code: 'BIO10-T2-SUL-030',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #CBD5E1;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Hubungan Luas Pulau (Log Area) terhadap Jumlah Spesies (Teori Biogeografi Pulau)</text>
        <line x1="55" y1="165" x2="480" y2="165" stroke="#475569" stroke-width="1.5"/>
        <line x1="55" y1="35" x2="55" y2="165" stroke="#475569" stroke-width="1.5"/>
        <!-- Line Island Near Mainland -->
        <line x1="75" y1="145" x2="450" y2="48" stroke="#2563EB" stroke-width="3"/>
        <text x="275" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1D4ED8">Pulau Dekat Benua Utama</text>
        <!-- Line Remote Island -->
        <line x1="75" y1="160" x2="450" y2="95" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6,4"/>
        <text x="295" y="118" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B45309">Pulau Terpencil Jauh dari Benua</text>
        <text x="195" y="184" font-family="sans-serif" font-size="11" fill="#334155">Luas Area Pulau / Cagar Alam (km²)</text>
        <text x="16" y="125" font-family="sans-serif" font-size="11" fill="#334155" transform="rotate(-90 16,125)">Jumlah Spesies</text>
      </svg>
    `,
    question_text:
      'Berdasarkan grafik Teori Biogeografi Pulau (MacArthur & Wilson) di atas yang juga diterapkan dalam merancang luas kawasan Cagar Alam, kesimpulan dan implikasi perencanaan konservasi yang paling tepat adalah…',
    options: [
      { key: 'A', text: "Luas wilayah habitat sama sekali tidak berpengaruh terhadap jumlah spesies flora maupun fauna." },
      { key: 'B', text: "Memperkecil ukuran cagar alam menjadi 10% dari luas semula akan meningkatkan jumlah spesies mamalia besar hingga dua kali lipat." },
      { key: 'C', text: "Semakin luas area cagar alam dan semakin dekat jaraknya dengan ekosistem sumber (hutan utama), semakin tinggi kekayaan spesies yang dapat dipertahankan karena laju imigrasi tinggi dan laju kepunahan lokal rendah." },
      { key: 'D', text: "Pulau yang dekat dengan benua utama selalu memiliki jumlah spesies lebih sedikit daripada pulau terpencil di tengah samudra." },
      { key: 'E', text: "Pulau atau cagar alam yang berukuran kecil dan terpencil jauh dari hutan utama mampu menampung jumlah spesies paling banyak." }
    ],
    correct_answer: 'C',
    hint: 'Perhatikan kemiringan kedua garis (semakin ke kanan/luas area bertambah, jumlah spesies naik) serta posisi garis biru (dekat benua) yang berada di atas garis oranye (terpencil).',
    explanation:
      'Grafik Species-Area Relationship dan Biogeografi Pulau MacArthur-Wilson menunjukkan dua prinsip: (1) Semakin luas area pulau/cagar alam, semakin beragam habitat dan semakin besar populasi yang didukung sehingga laju kepunahan rendah; (2) Semakin dekat dengan ekosistem sumber (daratan utama), semakin tinggi laju kolonisasi/imigrasi spesies.',
    tags: ['hots', 'biogeografi-pulau', 'desain-cagar-alam', 'svg']
  },
  {
    code: 'BIO10-T2-SUL-031',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Program pelepasliaran (reintroduksi) orangutan hasil rehabilitasi dari pusat konservasi ex-situ ke hutan Taman Nasional sering mengalami kegagalan apabila dilakukan tanpa kajian daya dukung habitat dan pemeriksaan kesehatan yang ketat.',
    question_text:
      'Analisis faktor biologis yang paling krusial untuk diverifikasi sebelum melepasliarkan satwa hasil rehabilitasi ex-situ kembali ke habitat in-situ adalah…',
    options: [
      { key: 'A', text: "Memastikan satwa bebas dari patogen menular manusia (seperti TBC/hepatitis), mampu mencari pakan alami dan membuat sarang secara mandiri, serta ketersediaan pohon pakan di hutan tujuan belum melampaui daya dukung (carrying capacity)." },
      { key: 'B', text: "Memastikan satwa sudah jinak dan terbiasa meminta makanan dari wisatawan di pintu masuk hutan." },
      { key: 'C', text: "Memotong taring dan kuku satwa agar tidak dapat memanjat pohon tinggi di hutan." },
      { key: 'D', text: "Melepasliarkan satwa tepat di tengah perkebunan warga agar mudah diawasi dari jalan raya." },
      { key: 'E', text: "Memberikan pakan makanan cepat saji setiap hari di dalam hutan selamanya." }
    ],
    correct_answer: 'A',
    hint: 'Reintroduksi satwa liar menuntut kemandirian perilaku bertahan hidup di alam serta pencegahan penularan penyakit ke populasi liar asli.',
    explanation:
      'Protokol reintroduksi IUCN mewajibkan: (1) Skrining medis ketat agar satwa eks-rehabilitasi tidak menularkan zoonosis/penyakit manusia (misal tuberkulosis) ke populasi liar; (2) Kesiapan etologis (kemampuan memanjat, membuat sarang, mengenali buah hutan dan predator); (3) Analisis daya dukung (carrying capacity) dan kepadatan populasi orangutan liar di lokasi rilis.',
    tags: ['hots', 'reintroduksi-satwa', 'in-situ-ex-situ', 'konservasi']
  },
  {
    code: 'BIO10-T2-SUL-032',
    subject: 'Biologi Kelas X',
    topic_slug: 'keanekaragaman-hayati',
    topic_name: 'Keanekaragaman Hayati & Konservasi',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Sebuah perusahaan farmasi asing mengambil sampel mikroorganisme ekstremofil dari sumber air panas vulkanik di Indonesia, mematenkan enzim tahan panas (thermostable polymerase) yang diisolasi dari mikroba tersebut, dan menjualnya secara komersial ke seluruh dunia tanpa izin riset maupun pembagian keuntungan dengan pemerintah atau masyarakat lokal Indonesia.',
    question_text:
      'Dalam hukum konservasi keanekaragaman hayati internasional (Protokol Nagoya dan Konvensi Keanekaragaman Hayati / CBD), tindakan perusahaan asing tersebut dikategorikan sebagai pelanggaran…',
    options: [
      { key: 'A', text: "Restorasi ekosistem hutan gambut melalui penanaman kembali" },
      { key: 'B', text: "Biopiracy (pembajakan sumber daya hayati/genetik) karena mengeksploitasi dan mematenkan plasma nutfah negara berkembang tanpa Persetujuan Atas Dasar Informasi Awal (PIC) serta tanpa Pembagian Keuntungan yang Adil danSeimbang (Access and Benefit Sharing)" },
      { key: 'C', text: "Bioremediasi lingkungan yang sah dan patut diberikan subsidi pemerintah" },
      { key: 'D', text: "Konservasi in-situ sukarela yang menguntungkan masyarakat adat di sekitar kawah vulkanik" },
      { key: 'E', text: "Domestikasi satwa liar untuk keperluan peternakan lokal" }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan istilah untuk pengambilan dan pematenan sumber daya genetik/pengetahuan tradisional suatu negara secara ilegal tanpa bagi hasil.',
    explanation:
      'Biopiracy adalah praktik pengambilan, komersialisasi, dan pematenan sumber daya genetik (plasma nutfah) atau pengetahuan tradisional suatu negara tanpa izin resmi (Prior Informed Consent / PIC) dan tanpa mekanisme pembagian keuntungan yang adil (Access and Benefit Sharing / ABS) sebagaimana diatur dalam Protokol Nagoya yang telah diratifikasi Indonesia.',
    tags: ['hots', 'biopiracy', 'protokol-nagoya', 'hukum-konservasi']
  }
];
