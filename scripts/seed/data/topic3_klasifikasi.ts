import type { BiologyQuestionSeed } from '../types.ts';

export const topic3Klasifikasi: BiologyQuestionSeed[] = [
  // =========================================================================
  // 1. MUDAH (C1 - C2) : 10 SOAL (BIO10-T3-MUD-001 s.d. BIO10-T3-MUD-010)
  // =========================================================================
  {
    code: 'BIO10-T3-MUD-001',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Tokoh biologi yang meletakkan dasar sistem tata nama ganda (Binomial Nomenclature) dan dijuluki sebagai Bapak Taksonomi Modern adalah…',
    options: [
      { key: 'A', text: 'Charles Robert Darwin' },
      { key: 'B', text: 'Carolus Linnaeus' },
      { key: 'C', text: 'Robert H. Whittaker' },
      { key: 'D', text: 'Gregor Johann Mendel' },
      { key: 'E', text: 'Ernst Haeckel' }
    ],
    correct_answer: 'B',
    hint: 'Ilmuwan asal Swedia ini menulis buku Species Plantarum dan Systema Naturae pada abad ke-18.',
    explanation:
      'Carolus Linnaeus (Carl von Linné) mempelopori pengelompokan makhluk hidup secara hierarkis (takson) dan membakukan sistem tata nama ilmiah dua kata (Binomial Nomenclature).',
    tags: ['taksonomi', 'carolus-linnaeus', 'binomial-nomenclature']
  },
  {
    code: 'BIO10-T3-MUD-002',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Urutan tingkatan takson pada tumbuhan dari tingkat tertinggi (paling umum) hingga tingkat terendah (paling spesifik) yang benar adalah…',
    options: [
      { key: 'A', text: 'Kingdom – Filum – Kelas – Ordo – Famili – Genus – Spesies' },
      { key: 'B', text: 'Kingdom – Divisi – Kelas – Ordo – Famili – Genus – Spesies' },
      { key: 'C', text: 'Kingdom – Divisi – Ordo – Kelas – Famili – Genus – Spesies' },
      { key: 'D', text: 'Divisi – Kingdom – Kelas – Famili – Ordo – Genus – Spesies' },
      { key: 'E', text: 'Spesies – Genus – Famili – Ordo – Kelas – Divisi – Kingdom' }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan bahwa pada tumbuhan digunakan istilah "Divisi" (Divisio), sedangkan pada hewan digunakan istilah "Filum" (Phylum).',
    explanation:
      'Urutan hierarki takson tumbuhan dari tertinggi ke terendah adalah: Kingdom (Regnum) → Divisi (Divisio) → Kelas (Classis) → Ordo (Bangsa) → Famili (Suku) → Genus (Marga) → Spesies (Jenis).',
    tags: ['urutan-takson', 'taksonomi-tumbuhan', 'konsep-dasar']
  },
  {
    code: 'BIO10-T3-MUD-003',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Penulisan nama ilmiah tanaman padi menurut aturan Binomial Nomenclature yang benar pada teks cetak adalah…',
    options: [
      { key: 'A', text: 'Oryza Sativa' },
      { key: 'B', text: 'oryza sativa' },
      { key: 'C', text: 'Oryza sativa (dicetak miring)' },
      { key: 'D', text: 'ORYZA SATIVA (digarisbawahi bersama)' },
      { key: 'E', text: 'oryza Sativa (dicetak tebal)' }
    ],
    correct_answer: 'C',
    hint: 'Kata pertama adalah nama genus (huruf awal kapital), kata kedua adalah penunjuk spesies (huruf kecil seluruhnya), dan wajib dicetak miring.',
    explanation:
      'Kaidah Binomial Nomenclature: (1) Terdiri atas dua kata bahasa Latin/dilatinkan; (2) Kata pertama menunjukkan Genus (diawali huruf kapital); (3) Kata kedua menunjukkan penunjuk spesies/epithet spesifik (huruf kecil semua); (4) Dicetak miring (Oryza sativa) atau digarisbawahi terpisah per kata jika ditulis tangan.',
    tags: ['binomial-nomenclature', 'nama-ilmiah', 'aturan-penulisan']
  },
  {
    code: 'BIO10-T3-MUD-004',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam sistem klasifikasi Lima Kingdom yang dikemukakan oleh Robert H. Whittaker (1969), seluruh organisme dikelompokkan menjadi…',
    options: [
      { key: 'A', text: 'Plantae, Animalia, Protista, Virus, dan Prion' },
      { key: 'B', text: 'Monera, Protista, Fungi, Plantae, dan Animalia' },
      { key: 'C', text: 'Archaebacteria, Eubacteria, Virus, Fungi, dan Plantae' },
      { key: 'D', text: 'Bryophyta, Pteridophyta, Spermatophyta, Vertebrata, dan Invertebrata' },
      { key: 'E', text: 'Prokariota, Eukariota, Autotrof, Heterotrof, dan Dekomposer' }
    ],
    correct_answer: 'B',
    hint: 'Whittaker memisahkan jamur (Fungi) dari tumbuhan (Plantae) berdasarkan cara memperoleh makanannya.',
    explanation:
      'Sistem 5 Kingdom Robert H. Whittaker (1969) mengelompokkan makhluk hidup berdasarkan tipe sel (prokariotik/eukariotik), organisasi sel (uniseluler/multiseluler), dan tipe nutrisi menjadi: Monera, Protista, Fungi, Plantae, dan Animalia.',
    tags: ['lima-kingdom', 'whittaker', 'sejarah-klasifikasi']
  },
  {
    code: 'BIO10-T3-MUD-005',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Alasan ilmiah utama Robert H. Whittaker mengeluarkan kelompok jamur (Fungi) dari Kingdom Plantae dan menempatkannya ke dalam kingdom tersendiri adalah…',
    options: [
      { key: 'A', text: 'Jamur bersifat prokariotik karena tidak memiliki membran inti sel' },
      { key: 'B', text: 'Jamur tidak memiliki klorofil (bersifat heterotrof absorptif) dan dinding selnya tersusun atas zat kitin, bukan selulosa' },
      { key: 'C', text: 'Jamur dapat bergerak aktif berpindah tempat menggunakan kaki semu (pseudopodia)' },
      { key: 'D', text: 'Jamur tidak memiliki dinding sel sama sekali seperti sel hewan' },
      { key: 'E', text: 'Jamur hanya dapat bereproduksi di dalam sel hidup seperti virus' }
    ],
    correct_answer: 'B',
    hint: 'Bandingkan cara tumbuhan hijau membuat makanan (fotosintesis) dan komposisi dinding selnya (selulosa) dengan cara hidup jamur.',
    explanation:
      'Meskipun jamur tampak tidak berpindah tempat seperti tumbuhan, jamur tidak memiliki kloroplas/klorofil sehingga bersifat heterotrof (menyerap nutrisi organik dari lingkungan secara saprofit/parasit) dan dinding selnya tersusun atas kitin (chitin), bukan selulosa.',
    tags: ['kingdom-fungi', 'kingdom-plantae', 'dasar-klasifikasi']
  },
  {
    code: 'BIO10-T3-MUD-006',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pengelompokan tumbuhan menjadi kelompok tanaman obat, tanaman sayur, tanaman hias, dan tanaman pelindung jalan oleh masyarakat sehari-hari merupakan contoh sistem klasifikasi…',
    options: [
      { key: 'A', text: 'Sistem Filogenetik berdasarkan analisis sekuens rRNA' },
      { key: 'B', text: 'Sistem Artifisial (Buatan / Praktis) berdasarkan kegunaan atau manfaat bagi manusia' },
      { key: 'C', text: 'Sistem Kladistik berdasarkan nenek moyang bersama' },
      { key: 'D', text: 'Sistem Tiga Domain Carl Woese' },
      { key: 'E', text: 'Sistem Kemotaksonomi molekuler' }
    ],
    correct_answer: 'B',
    hint: 'Sistem ini tidak melihat hubungan kekerabatan evolusi, melainkan kemudahan pemanfaatan praktis.',
    explanation:
      'Klasifikasi sistem praktis/artifisial (buatan) mengelompokkan makhluk hidup berdasarkan kegunaan praktis bagi manusia (tanaman obat, pangan, hias) atau ciri morfologi/habitat yang mudah diamati sekilas.',
    tags: ['sistem-klasifikasi', 'klasifikasi-buatan', 'konsep-dasar']
  },
  {
    code: 'BIO10-T3-MUD-007',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Semakin rendah tingkatan takson yang dimiliki bersama oleh dua organisme (misalnya berada dalam satu Genus yang sama dibandingkan hanya satu Kelas yang sama), maka…',
    options: [
      { key: 'A', text: 'Semakin sedikit persamaan ciri yang dimiliki dan semakin banyak jumlah anggotanya' },
      { key: 'B', text: 'Semakin banyak persamaan ciri morfologi-genetiknya dan semakin dekat hubungan kekerabatannya' },
      { key: 'C', text: 'Semakin jauh hubungan kekerabatan evolusinya' },
      { key: 'D', text: 'Kedua organisme tersebut tidak memiliki persamaan struktur anatomi sama sekali' },
      { key: 'E', text: 'Jumlah spesies di dalam takson tersebut menjadi tak terhingga' }
    ],
    correct_answer: 'B',
    hint: 'Bandingkan tingkat kemiripan antara singa dan harimau (satu genus Panthera) dengan singa dan katak (hanya satu filum Chordata).',
    explanation:
      'Dalam hierarki taksonomi, semakin ke bawah (menuju tingkat Spesies): jumlah anggota takson semakin sedikit, namun jumlah persamaan ciri semakin banyak dan hubungan kekerabatan antaranggota semakin dekat.',
    tags: ['hierarki-takson', 'hubungan-kekerabatan', 'taksonomi']
  },
  {
    code: 'BIO10-T3-MUD-008',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam sistem klasifikasi Tiga Domain yang diusulkan oleh Carl Woese berdasarkan analisis urutan basa rRNA subunit kecil (16S/18S rRNA), seluruh makhluk hidup di bumi dibagi menjadi tiga domain utama, yaitu…',
    options: [
      { key: 'A', text: 'Monera, Protista, dan Eukarya' },
      { key: 'B', text: 'Bacteria, Archaea, dan Eukarya' },
      { key: 'C', text: 'Plantae, Animalia, dan Fungi' },
      { key: 'D', text: 'Virus, Prokarya, dan Metazoa' },
      { key: 'E', text: 'Autotrof, Heterotrof, dan Kemoautotrof' }
    ],
    correct_answer: 'B',
    hint: 'Carl Woese memisahkan prokariota menjadi dua domain berbeda karena perbedaan struktur membran lipid dan sekuens rRNA.',
    explanation:
      'Carl Woese (1977, 1990) membagi kehidupan menjadi 3 Domain di atas tingkat Kingdom: Domain Bacteria (Eubacteria), Domain Archaea (Archaebacteria), dan Domain Eukarya (mencakup Protista, Fungi, Plantae, dan Animalia).',
    tags: ['tiga-domain', 'carl-woese', 'klasifikasi-modern']
  },
  {
    code: 'BIO10-T3-MUD-009',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Alat bantu identifikasi taksonomi yang terdiri atas serangkaian pasangan pernyataan berlawanan (kuplet 1a–1b, 2a–2b, dst.) mengenai ciri morfologi untuk menentukan nama kelompok atau spesies suatu spesimen disebut…',
    options: [
      { key: 'A', text: 'Pohon filogenetik molekuler' },
      { key: 'B', text: 'Kunci determinasi dikotomis' },
      { key: 'C', text: 'Tabel periodik unsur biologis' },
      { key: 'D', text: 'Herbarium basah' },
      { key: 'E', text: 'Peta kromosom (Kariotipe)' }
    ],
    correct_answer: 'B',
    hint: 'Istilah "dikotomis" berarti bercabang menjadi dua pilihan yang saling bertolak belakang pada setiap nomor.',
    explanation:
      'Kunci determinasi dikotomis adalah daftar pasangan pernyataan ciri yang berlawanan (misalnya 1a. Bertulang belakang vs 1b. Tidak bertulang belakang) yang memandu peneliti mengidentifikasi takson suatu organisme secara bertahap.',
    tags: ['kunci-determinasi', 'identifikasi', 'taksonomi']
  },
  {
    code: 'BIO10-T3-MUD-010',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Akhiran baku (sufiks) yang digunakan untuk menandai tingkatan takson Famili (Suku) pada klasifikasi tumbuhan menurut Kode Internasional Tata Nama Tumbuhan adalah…',
    options: [
      { key: 'A', text: '-ophyta' },
      { key: 'B', text: '-opsida' },
      { key: 'C', text: '-ales' },
      { key: 'D', text: '-aceae' },
      { key: 'E', text: '-idae' }
    ],
    correct_answer: 'D',
    hint: 'Contoh nama famili tumbuhan adalah Solanaceae, Fabaceae, Poaceae, dan Arecaceae.',
    explanation:
      'Dalam tata nama takson tumbuhan: Divisi berakhiran -ophyta (Spermatophyta), Kelas berakhiran -opsida/-inae, Ordo berakhiran -ales (Zingiberales), dan Famili berakhiran -aceae (Zingiberaceae, Poaceae). Adapun -idae adalah akhiran famili untuk hewan (Felidae).',
    tags: ['akhiran-takson', 'famili-tumbuhan', 'tata-nama']
  },

  // =========================================================================
  // 2. MEDIUM (C3) : 10 SOAL (BIO10-T3-MED-011 s.d. BIO10-T3-MED-020)
  // =========================================================================
  {
    code: 'BIO10-T3-MED-011',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Perhatikan kunci determinasi sederhana berikut:\n1a. Tubuh memiliki tulang belakang (Vertebrata) ........................................... lanjut ke no. 2\n1b. Tubuh tidak memiliki tulang belakang (Invertebrata) ............................... lanjut ke no. 5\n2a. Suhu tubuh tetap / homoioterm (berdarah panas) ..................................... lanjut ke no. 3\n2b. Suhu tubuh berubah mengikuti lingkungan / poikiloterm ........................ lanjut ke no. 4\n3a. Tubuh ditutupi rambut dan memiliki kelenjar susu (glandula mammae) ... Kelas Mammalia\n3b. Tubuh ditutupi bulu dan anggota gerak depan berupa sayap ...................... Kelas Aves\n4a. Kulit bersisik kering dari zat tanduk dan bernapas dengan paru-paru ...... Kelas Reptilia\n4b. Kulit tipis selalu lembap berlendir dan mengalami metamorfosis .............. Kelas Amphibia',
    question_text:
      'Seorang siswa mengamati seekor Trenggiling (Manis javanica) yang memiliki sisik pelindung di punggungnya namun melahirkan anak, menyusui anaknya dengan kelenjar susu, dan memiliki rambut di bagian perut. Urutan nomor kunci determinasi yang tepat untuk Trenggiling adalah…',
    options: [
      { key: 'A', text: '1a – 2b – 4a (Kelas Reptilia)' },
      { key: 'B', text: '1a – 2a – 3a (Kelas Mammalia)' },
      { key: 'C', text: '1a – 2a – 3b (Kelas Aves)' },
      { key: 'D', text: '1b – 2b – 4b (Kelas Amphibia)' },
      { key: 'E', text: '1a – 2b – 3a (Kelas Mammalia)' }
    ],
    correct_answer: 'B',
    hint: 'Jangan terkecoh dengan sisik keratin trenggiling! Perhatikan bahwa trenggiling berdarah panas (homoioterm), berambut, dan memiliki kelenjar susu.',
    explanation:
      'Trenggiling (Manis javanica) adalah hewan bertulang belakang (1a), bersifat homoioterm/berdarah panas (2a), serta memiliki rambut dan kelenjar susu untuk menyusui anaknya (3a), sehingga tergolong Kelas Mammalia (bukan Reptilia).',
    tags: ['kunci-determinasi', 'identifikasi-hewan', 'mammalia']
  },
  {
    code: 'BIO10-T3-MED-012',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Perhatikan daftar nama ilmiah empat spesies tanaman berikut:\n(1) Solanum tuberosum (Kentang)\n(2) Solanum lycopersicum (Tomat)\n(3) Capsicum frutescens (Cabai rawit)\n(4) Cyperus rotundus (Rumput teki)\nDiketahui tanaman (1), (2), dan (3) berada dalam satu suku terung-terungan (Solanaceae).',
    question_text:
      'Berdasarkan informasi taksonomi di atas, pernyataan hubungan kekerabatan yang paling tepat adalah…',
    options: [
      { key: 'A', text: 'Tanaman (1) dan (2) memiliki kekerabatan paling dekat karena berada dalam satu Genus yang sama (Solanum)' },
      { key: 'B', text: 'Tanaman (2) dan (4) memiliki kekerabatan paling dekat karena penunjuk spesiesnya sama-sama berakhiran -um' },
      { key: 'C', text: 'Tanaman (1), (2), dan (3) berada dalam satu Spesies yang sama namun berbeda Famili' },
      { key: 'D', text: 'Tanaman (1) dan (3) berada dalam satu Genus yang sama yaitu Solanaceae' },
      { key: 'E', text: 'Keempat tanaman tersebut memiliki tingkat kekerabatan yang sama persis' }
    ],
    correct_answer: 'A',
    hint: 'Perhatikan kata pertama dari nama ilmiah (nama Genus) pada kentang dan tomat.',
    explanation:
      'Kentang (Solanum tuberosum) dan tomat (Solanum lycopersicum) berada dalam satu Genus yang sama (Solanum), sehingga kekerabatannya paling dekat. Cabai rawit (Capsicum frutescens) berbeda genus namun masih satu Famili (Solanaceae) dengan kentang dan tomat.',
    tags: ['hubungan-kekerabatan', 'binomial-nomenclature', 'solanaceae']
  },
  {
    code: 'BIO10-T3-MED-013',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam sistem klasifikasi filogenetik, sayap kelelawar, sirip dada paus, dan tangan manusia digunakan sebagai dasar pengelompokan ketiganya ke dalam Kelas Mammalia karena ketiga organ tersebut bersifat…',
    options: [
      { key: 'A', text: 'Analog (asal-usul struktur dasar berbeda, tetapi fungsinya sama untuk terbang)' },
      { key: 'B', text: 'Homolog (memiliki struktur anatomi dasar dan asal-usul embriologis yang sama dari nenek moyang bersama meskipun fungsinya berbeda)' },
      { key: 'C', text: 'Vestigial (organ sisa yang sudah tidak memiliki tulang maupun jaringan otot)' },
      { key: 'D', text: 'Identik secara fungsi lokomosi di udara' },
      { key: 'E', text: 'Hasil evolusi konvergen antara serangga dan mamalia' }
    ],
    correct_answer: 'B',
    hint: 'Bandingkan struktur tulang humerus, radius, ulna, karpal, dan falang pada tangan manusia, sirip paus, dan sayap kelelawar.',
    explanation:
      'Organ homolog adalah organ yang memiliki struktur dasar anatomi dan asal-usul evolusi/embriologi yang sama (pola tulang anggota gerak depan tetrapoda), meskipun telah beradaptasi untuk fungsi berbeda (memegang, berenang, terbang). Klasifikasi filogenetik didasarkan pada homologi, bukan analogi.',
    tags: ['homologi', 'sistem-filogenetik', 'evolusi']
  },
  {
    code: 'BIO10-T3-MED-014',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Saat praktikum lapangan di hutan lembap, seorang siswa menemukan tumbuhan dengan ciri-ciri:\n- Memiliki akar, batang, dan daun sejati (kormus) beserta pembuluh angkut xilem dan floem\n- Daun muda menggulung di ujungnya (circinate vernation)\n- Tidak menghasilkan bunga maupun biji, melainkan berkembang biak dengan spora yang terletak di dalam sorus di permukaan bawah daun',
    question_text:
      'Berdasarkan ciri-ciri morfologi dan anatomi tersebut, tumbuhan yang ditemukan siswa harus diklasifikasikan ke dalam divisi…',
    options: [
      { key: 'A', text: 'Bryophyta (Tumbuhan Lumut)' },
      { key: 'B', text: 'Pteridophyta (Tumbuhan Paku)' },
      { key: 'C', text: 'Gymnospermae (Tumbuhan Berbiji Terbuka)' },
      { key: 'D', text: 'Angiospermae (Tumbuhan Berbiji Tertutup)' },
      { key: 'E', text: 'Basidiomycota (Jamur Makroskopis)' }
    ],
    correct_answer: 'B',
    hint: 'Tumbuhan ini sudah berpembuluh (Tracheophyta) tetapi belum menghasilkan biji, dan ciri khas daun mudanya menggulung.',
    explanation:
      'Divisi Pteridophyta (tumbuhan paku) memiliki ciri kunci: sudah berupa kormus sejati berpembuluh (xilem-floem), daun muda menggulung (circinate vernation), dan bereproduksi dengan spora (terkumpul dalam sorus di bawah daun troposporofil). Bryophyta belum berpembuluh, sedangkan Spermatophyta menghasilkan biji.',
    tags: ['pteridophyta', 'identifikasi-tumbuhan', 'plantae']
  },
  {
    code: 'BIO10-T3-MED-015',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Seorang peneliti menemukan organisme mikroskopis uniseluler di air kolam yang memiliki membran inti sel (eukariotik), bergerak aktif menggunakan bulu cambuk (flagela), serta memiliki kloroplas untuk berfotosintesis saat ada cahaya maupun menyerap bahan organik saat gelap. Dalam sistem Lima Kingdom Whittaker, organisme ini dimasukkan ke dalam Kingdom…',
    options: [
      { key: 'A', text: 'Monera' },
      { key: 'B', text: 'Protista' },
      { key: 'C', text: 'Fungi' },
      { key: 'D', text: 'Plantae' },
      { key: 'E', text: 'Animalia' }
    ],
    correct_answer: 'B',
    hint: 'Organisme ini adalah Euglena viridis yang bersifat eukariotik uniseluler.',
    explanation:
      'Kingdom Protista mencakup organisme eukariotik (memiliki membran inti) yang umumnya uniseluler atau multiseluler sederhana (belum terdiferensiasi menjadi jaringan sejati). Euglena termasuk Protista mirip tumbuhan/hewan (miksotrof).',
    tags: ['kingdom-protista', 'euglena', 'lima-kingdom']
  },
  {
    code: 'BIO10-T3-MED-016',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam kaidah penulisan taksonomi, kadang ditemukan penulisan nama ilmiah dengan tiga kata (Trinomial Nomenclature) seperti Oryza sativa glutinosa (ketan) atau Panthera tigris sumatrae (harimau sumatera). Kata ketiga pada penulisan tersebut menunjukkan tingkatan takson di bawah spesies, yaitu…',
    options: [
      { key: 'A', text: 'Nama Genus kedua dari hasil mutasi' },
      { key: 'B', text: 'Varietas (pada tumbuhan) atau Subspesies/Ras geografis (pada hewan)' },
      { key: 'C', text: 'Nama Famili dan Ordo asal organisme tersebut' },
      { key: 'D', text: 'Nama penemu yang membiayai ekspedisi penelitian' },
      { key: 'E', text: 'Nama habitat ekosistem tempat organisme tersebut punah' }
    ],
    correct_answer: 'B',
    hint: 'Harimau sumatera, harimau benggala, dan harimau siberia masih satu spesies Panthera tigris, tetapi berbeda subspesies.',
    explanation:
      'Sistem Trinomial Nomenclature (tata nama tiga kata) digunakan untuk menamai takson intraspesifik (di bawah tingkat spesies), yaitu Subspesies pada hewan (Panthera tigris sumatrae) atau Varietas pada tumbuhan (Oryza sativa var. glutinosa).',
    tags: ['trinomial-nomenclature', 'subspesies', 'varietas']
  },
  {
    code: 'BIO10-T3-MED-017',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Perhatikan ciri-ciri dua kelompok tumbuhan berbiji tertutup (Angiospermae):\nKelompok P: Akar serabut, tulang daun sejajar, batang tidak berkambium (berkas pengangkut tersebar), bagian mahkota bunga berkelipatan 3.\nKelompok Q: Akar tunggang, tulang daun menyirip/menjari, batang berkambium (berkas pengangkut kolateral terbuka tersusun melingkar), bagian mahkota bunga berkelipatan 4 atau 5.',
    question_text:
      'Pasangan contoh tumbuhan yang tepat untuk Kelompok P dan Kelompok Q secara berurutan adalah…',
    options: [
      { key: 'A', text: 'Kelompok P: Mangga dan Kacang tanah; Kelompok Q: Padi dan Jagung' },
      { key: 'B', text: 'Kelompok P: Jagung (Zea mays) dan Kelapa (Cocos nucifera); Kelompok Q: Mangga (Mangifera indica) dan Kacang tanah (Arachis hypogaea)' },
      { key: 'C', text: 'Kelompok P: Pakis haji dan Melinjo; Kelompok Q: Lumut hati dan Paku suplir' },
      { key: 'D', text: 'Kelompok P: Pinus dan Damar; Kelompok Q: Anggrek dan Pisang' },
      { key: 'E', text: 'Kelompok P: Jamur tiram dan Ragi; Kelompok Q: Padi dan Gandum' }
    ],
    correct_answer: 'B',
    hint: 'Kelompok P adalah ciri khas kelas Monokotil (Liliopsida), sedangkan Kelompok Q adalah ciri khas kelas Dikotil (Magnoliopsida).',
    explanation:
      'Kelompok P memiliki ciri khas Monokotil (akar serabut, daun sejajar, tak berkambium, bunga kelipatan 3) seperti jagung, padi, kelapa, dan anggrek. Kelompok Q memiliki ciri khas Dikotil (akar tunggang, daun menyirip/menjari, berkambium, bunga kelipatan 4/5) seperti mangga, kacang tanah, dan jambu.',
    tags: ['monokotil-dikotil', 'angiospermae', 'klasifikasi-tumbuhan']
  },
  {
    code: 'BIO10-T3-MED-018',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pada penulisan nama ilmiah jagung, tertulis Zea mays L. Huruf "L." yang dicantumkan dengan huruf tegak di belakang nama spesies tersebut memiliki arti…',
    options: [
      { key: 'A', text: 'Menunjukkan bahwa jagung berasal dari kawasan Amerika Latin' },
      { key: 'B', text: 'Singkatan nama author/deskripsi pertama spesies tersebut, yaitu Carolus Linnaeus' },
      { key: 'C', text: 'Kode laboratorium tempat benih jagung tersebut dimodifikasi secara genetik' },
      { key: 'D', text: 'Menandakan bahwa spesies tersebut termasuk tumbuhan langka yang dilindungi' },
      { key: 'E', text: 'Menunjukkan ukuran biji jagung berukuran lebar (Large)' }
    ],
    correct_answer: 'B',
    hint: 'Dalam publikasi taksonomi formal, nama orang yang pertama kali memublikasikan deskripsi valid suatu spesies dicantumkan di belakang epithet spesifik.',
    explanation:
      'Sitasi nama author (seperti "L." untuk Carolus Linnaeus pada Zea mays L. atau Oryza sativa L.) ditulis dengan huruf tegak di belakang nama ilmiah untuk merujuk pada ilmuwan yang pertama kali mendeskripsikan dan menerbitkan nama spesies tersebut secara sah.',
    tags: ['sitasi-author', 'binomial-nomenclature', 'linnaeus']
  },
  {
    code: 'BIO10-T3-MED-019',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pakis haji (Cycas rumphii), melinjo (Gnetum gnemon), dan pinus (Pinus merkusii) dikelompokkan bersama ke dalam subdivisi Gymnospermae karena ketiganya memiliki persamaan ciri utama berupa…',
    options: [
      { key: 'A', text: 'Bakal biji tidak tertutup oleh daun buah (karpel/ovarium) dan alat reproduksinya berupa runjung (strobilus)' },
      { key: 'B', text: 'Mengalami pembuahan ganda yang menghasilkan endosperma triploid (3n) di dalam buah sejati' },
      { key: 'C', text: 'Tidak memiliki jaringan pembuluh xilem maupun floem' },
      { key: 'D', text: 'Berkembang biak menggunakan spora haploid di permukaan bawah daun' },
      { key: 'E', text: 'Memiliki mahkota bunga berwarna mencolok untuk menarik serangga penyerbuk' }
    ],
    correct_answer: 'A',
    hint: 'Istilah Gymnospermae berasal dari kata Yunani "gymnos" (telanjang/terbuka) dan "sperma" (biji).',
    explanation:
      'Tumbuhan Gymnospermae (berbiji terbuka) memiliki bakal biji yang terbuka (tidak terbungkus bakal buah/ovarium), tidak memiliki bunga sejati melainkan organ reproduksi berbentuk strobilus (runjung), dan umumnya mengalami pembuahan tunggal.',
    tags: ['gymnospermae', 'strobilus', 'klasifikasi-tumbuhan']
  },
  {
    code: 'BIO10-T3-MED-020',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam pembuatan kunci determinasi dikotomis untuk 5 spesies hewan berbeda yang akan dipisahkan satu per satu hingga tuntas, berapakah jumlah minimal pasangan pernyataan (kuplet bernomor) yang diperlukan?',
    options: [
      { key: 'A', text: '2 kuplet' },
      { key: 'B', text: '4 kuplet' },
      { key: 'C', text: '5 kuplet' },
      { key: 'D', text: '10 kuplet' },
      { key: 'E', text: '25 kuplet' }
    ],
    correct_answer: 'B',
    hint: 'Setiap 1 kuplet percabangan dikotomis memisahkan minimal 1 takson hingga tersisa takson terakhir; gunakan rumus (N - 1).',
    explanation:
      'Secara matematis pada pohon biner/kunci dikotomis, untuk memisahkan N takson/spesies secara tuntas diperlukan tepat (N - 1) titik percabangan (kuplet). Untuk 5 spesies diperlukan 5 - 1 = 4 kuplet pasangan pernyataan (kuplet 1, 2, 3, dan 4).',
    tags: ['kunci-determinasi', 'perhitungan-kuplet', 'taksonomi']
  },

  // =========================================================================
  // 3. SULIT / HOTS (C4 - C5) : 12 SOAL (BIO10-T3-SUL-021 s.d. BIO10-T3-SUL-032)
  //    (Termasuk 6 soal dengan stimulus_type: 'table' dan 'svg')
  // =========================================================================
  {
    code: 'BIO10-T3-SUL-021',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 210" width="100%" height="210" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #CBD5E1;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Kladogram Evolusi Vertebrata &amp; Kemunculan Karakter Turunan (Sinapomorfi)</text>
        <!-- Main Trunk -->
        <line x1="40" y1="175" x2="430" y2="35" stroke="#334155" stroke-width="3"/>
        <!-- Branches -->
        <line x1="95" y1="155" x2="65" y2="55" stroke="#334155" stroke-width="2.5"/>
        <text x="40" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">Lamprey</text>

        <line x1="175" y1="126" x2="145" y2="55" stroke="#334155" stroke-width="2.5"/>
        <text x="125" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">Ikan Hiu</text>

        <line x1="255" y1="98" x2="225" y2="55" stroke="#334155" stroke-width="2.5"/>
        <text x="200" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">Salamander</text>

        <line x1="335" y1="69" x2="305" y2="55" stroke="#334155" stroke-width="2.5"/>
        <text x="285" y="45" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">Kadal</text>

        <text x="410" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1D4ED8">Harimau</text>

        <!-- Character Ticks -->
        <circle cx="135" cy="141" r="5" fill="#DC2626"/>
        <text x="142" y="156" font-family="sans-serif" font-size="10" font-weight="bold" fill="#B91C1C">(1) Rahang Berengsel</text>

        <circle cx="215" cy="112" r="5" fill="#DC2626"/>
        <text x="222" y="127" font-family="sans-serif" font-size="10" font-weight="bold" fill="#B91C1C">(2) Empat Tungkai</text>

        <circle cx="295" cy="83" r="5" fill="#DC2626"/>
        <text x="302" y="98" font-family="sans-serif" font-size="10" font-weight="bold" fill="#B91C1C">(3) Telur Amniotik</text>

        <circle cx="375" cy="55" r="5" fill="#DC2626"/>
        <text x="382" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#B91C1C">(4) Rambut &amp; Susu</text>
      </svg>
    `,
    question_text:
      'Berdasarkan analisis kladogram vertebrata di atas, pernyataan yang PALING TEPAT mengenai hubungan kekerabatan filogenetik dan kepemilikan karakter turunan bersama (sinapomorfi) adalah…',
    options: [
      { key: 'A', text: 'Salamander memiliki kekerabatan lebih dekat dengan Ikan Hiu dibandingkan dengan Kadal karena sama-sama hidup di dekat air.' },
      { key: 'B', text: 'Kadal dan Harimau membentuk satu klad (kelompok monofiletik Amniota) yang berbagi nenek moyang bersama paling dekat dengan karakter sinapomorfi berupa rahang, empat tungkai, dan telur amniotik.' },
      { key: 'C', text: 'Karakter telur amniotik (3) dimiliki oleh Lamprey, Ikan Hiu, dan Salamander, tetapi hilang pada Harimau.' },
      { key: 'D', text: 'Ikan Hiu tidak memiliki rahang berengsel karena cabangnya muncul setelah titik karakter (1).' },
      { key: 'E', text: 'Harimau hanya memiliki karakter rambut & kelenjar susu (4), tanpa mewarisi karakter (1), (2), dan (3).' }
    ],
    correct_answer: 'B',
    hint: 'Pada kladogram, setiap titik karakter merah diwariskan kepada seluruh cabang yang berada di sebelah atas/kanan titik tersebut.',
    explanation:
      'Dalam analisis kladistik, takson yang berada setelah suatu titik karakter mewarisi seluruh karakter tersebut. Kadal dan Harimau berbagi titik percabangan (nenek moyang bersama) paling akhir setelah munculnya karakter (3) Telur Amniotik, sehingga keduanya memiliki rahang (1), empat tungkai (2), dan membran amniotik (3), sedangkan Harimau memiliki tambahan karakter (4) Rambut & Kelenjar Susu.',
    tags: ['hots', 'kladogram', 'svg', 'filogenetik', 'sinapomorfi']
  },
  {
    code: 'BIO10-T3-SUL-022',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#EFF6FF;color:#1E3A8A;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Spesies Primata / Mamalia</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Urutan Asam Amino Sitokrom-c (Posisi 58–66)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Jumlah Perbedaan Asam Amino terhadap Manusia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Manusia (Homo sapiens)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-family:monospace;">Ile - Thr - Gly - Glu - Asp - Thr - Leu - Met - Glu</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 (Acuan)</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Spesies P (Pan troglodytes)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-family:monospace;">Ile - Thr - Gly - Glu - Asp - Thr - Leu - Met - Glu</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 perbedaan</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Spesies Q (Macaca mulatta)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-family:monospace;">Thr - Thr - Gly - Glu - Asp - Thr - Leu - Met - Glu</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 perbedaan</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Spesies R (Equus caballus)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-family:monospace;">Thr - Lys - Gly - Glu - Glu - Thr - Leu - Met - Glu</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">12 perbedaan (total rantai)</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Spesies S (Thunnus alalunga)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-family:monospace;">Val - Asn - Gly - Ala - Glu - Thr - Leu - Arg - Glu</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">21 perbedaan (total rantai)</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Tabel di atas menampilkan perbandingan sekuens asam amino protein respirasi Sitokrom-c pada lima spesies vertebrata. Berdasarkan prinsip taksonomi molekuler, urutan spesies dari yang memiliki hubungan kekerabatan evolusi PALING JAUH hingga PALING DEKAT terhadap Manusia adalah…',
    options: [
      { key: 'A', text: 'Spesies P – Spesies Q – Spesies R – Spesies S' },
      { key: 'B', text: 'Spesies S – Spesies R – Spesies Q – Spesies P' },
      { key: 'C', text: 'Spesies R – Spesies S – Spesies P – Spesies Q' },
      { key: 'D', text: 'Spesies Q – Spesies P – Spesies S – Spesies R' },
      { key: 'E', text: 'Keempat spesies memiliki jarak kekerabatan yang sama karena sama-sama memiliki protein Sitokrom-c' }
    ],
    correct_answer: 'B',
    hint: 'Semakin banyak jumlah mutasi/perbedaan asam amino pada protein homolog, semakin awal garis evolusi kedua spesies tersebut berpisah.',
    explanation:
      'Dalam filogenetik molekuler, jumlah perbedaan residu asam amino pada protein Sitokrom-c berbanding lurus dengan jarak waktu divergensi evolusi dari nenek moyang bersama. Urutan dari kekerabatan paling jauh (perbedaan terbanyak) ke paling dekat (perbedaan paling sedikit) terhadap manusia adalah: Spesies S (21 perbedaan) → Spesies R (12 perbedaan) → Spesies Q (1 perbedaan) → Spesies P (0 perbedaan).',
    tags: ['hots', 'taksonomi-molekuler', 'sitokrom-c', 'analisis-tabel']
  },
  {
    code: 'BIO10-T3-SUL-023',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#FEF3C7;color:#92400E;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Karakter Biokimia &amp; Seluler</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Kelompok X</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Kelompok Y</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Kelompok Z</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Membran Inti (Karioteka)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tidak ada</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tidak ada</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ada</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Peptidoglikan pada Dinding Sel</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ada</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tidak ada (Pseudomurein)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tidak ada</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ikatan Lipid Membran Sel</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ester rantai lurus</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Eter rantai bercabang</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ester rantai lurus</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Asam Amino Inisiator Translasi</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Formil-Metionin</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Metionin</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Metionin</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Sensitivitas terhadap Streptomisin</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Terhambat (Sensitif)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tidak terhambat (Resisten)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tidak terhambat (Resisten)</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan matriks perbandingan biokimia molekuler pada tabel di atas, mengapa Carl Woese merombak sistem 5 Kingdom Whittaker (yang menyatukan Kelompok X dan Y dalam satu Kingdom Monera) menjadi sistem 3 Domain, serta simpulan kekerabatan manakah yang paling mengejutkan dari data tersebut?',
    options: [
      { key: 'A', text: 'Kelompok X adalah Archaea dan Kelompok Y adalah Bacteria; keduanya sama-sama memiliki dinding peptidoglikan.' },
      { key: 'B', text: 'Meskipun Kelompok Y (Archaea) tidak memiliki membran inti seperti Kelompok X (Bacteria), mekanisme genetik dan biokimia Kelompok Y (inisiator Metionin, resistensi streptomisin, tanpa peptidoglikan) justru berkerabat lebih dekat dengan Domain Eukarya (Kelompok Z).' },
      { key: 'C', text: 'Kelompok Z adalah Virus yang tidak memiliki ribosom sehingga tidak dapat dihambat oleh antibiotik streptomisin.' },
      { key: 'D', text: 'Kelompok X dan Kelompok Z harus digabungkan ke dalam satu Kingdom Monera karena sama-sama memiliki lipid ikatan ester.' },
      { key: 'E', text: 'Tabel tersebut membuktikan bahwa seluruh organisme prokariotik memiliki struktur biokimia yang 100% identik.' }
    ],
    correct_answer: 'B',
    hint: 'Bandingkan baris Peptidoglikan, Asam Amino Inisiator Translasi, dan Sensitivitas Streptomisin antara Kelompok Y (Archaea) dan Kelompok Z (Eukarya).',
    explanation:
      'Kelompok X adalah Domain Bacteria, Kelompok Y adalah Domain Archaea, dan Kelompok Z adalah Domain Eukarya. Data biokimia menunjukkan bahwa Archaea tidak memiliki peptidoglikan, memiliki lipid ikatan eter bercabang (tahan suhu/asam ekstrem), dan mesin transkripsi-translasinya (inisiator Metionin, RNA polimerase, ketahanan terhadap streptomisin) justru lebih mirip Eukarya dibandingkan Bacteria.',
    tags: ['hots', 'tiga-domain', 'archaea-bacteria-eukarya', 'analisis-tabel']
  },
  {
    code: 'BIO10-T3-SUL-024',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#ECFDF5;color:#065F46;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Takson</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Tulang Belakang</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Rangka Tulang Sejati</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Empat Tungkai</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Kantung Amnion</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Bulu &amp; Paruh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Lancelet (Outgroup)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ikan Pari</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ikan Mas</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Katak Pohon</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Kura-kura</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Elang Jawa</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Dalam rekonstruksi pohon filogenetik menggunakan matriks karakter biner (0 = tidak ada, 1 = ada) di atas, apa fungsi diikutsertakannya "Lancelet (Branchiostoma)" yang memiliki skor 0 pada seluruh karakter, dan mengapa Ikan Mas ditempatkan berkerabat lebih dekat dengan Katak Pohon dibandingkan dengan Ikan Pari?',
    options: [
      { key: 'A', text: 'Lancelet berfungsi sebagai ingroup utama; Ikan Mas lebih dekat ke Katak Pohon karena keduanya bernapas dengan paru-paru.' },
      { key: 'B', text: 'Lancelet berfungsi sebagai kelompok luar (outgroup) untuk membedakan karakter leluhur (plesiomorfi) dari karakter turunan baru (apomorfi); Ikan Mas dan Katak Pohon berbagi karakter turunan "Rangka Tulang Sejati (Osteichthyes)" yang belum dimiliki Ikan Pari (Chondrichthyes).' },
      { key: 'C', text: 'Lancelet merupakan hasil evolusi terakhir dari Elang Jawa yang mengalami kemunduran organ.' },
      { key: 'D', text: 'Ikan Mas dan Ikan Pari tidak memiliki tulang belakang sama sekali sehingga harus digabung dengan Lancelet.' },
      { key: 'E', text: 'Katak Pohon lebih dekat kekerabatannya dengan Ikan Pari dibandingkan dengan Kura-kura.' }
    ],
    correct_answer: 'B',
    hint: 'Dalam kladistik, outgroup digunakan sebagai titik acuan awal percabangan, sedangkan kedekatan kekerabatan dilihat dari kepemilikan karakter turunan bersama (angka 1) yang paling akhir.',
    explanation:
      'Kelompok luar (outgroup) seperti Lancelet digunakan sebagai pembanding dasar untuk menentukan polaritas evolusi karakter (mana ciri primitif dan mana ciri turunan/apomorfi). Meskipun Ikan Pari dan Ikan Mas sama-sama hidup di air, Ikan Mas (Osteichthyes) berbagi sinapomorfi "Rangka Tulang Sejati" dengan Tetrapoda (Katak, Kura-kura, Elang), sedangkan Ikan Pari masih berangka tulang rawan (Chondrichthyes).',
    tags: ['hots', 'matriks-kladistik', 'outgroup', 'analisis-tabel']
  },
  {
    code: 'BIO10-T3-SUL-025',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBEB;border-radius:14px;border:1px solid #FDE68A;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#78350F">Bagan Kunci Determinasi Tumbuhan Berpembuluh (A, B, C, dan D)</text>
        <rect x="20" y="42" width="135" height="44" rx="8" fill="#FEF3C7" stroke="#D97706"/>
        <text x="30" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E">Tracheophyta</text>
        <text x="30" y="76" font-family="sans-serif" font-size="10" fill="#B45309">(Berpembuluh Xilem-Floem)</text>

        <!-- Branch Berspora vs Berbiji -->
        <line x1="155" y1="64" x2="205" y2="45" stroke="#B45309" stroke-width="2"/>
        <rect x="205" y="30" width="130" height="32" rx="8" fill="#DCFCE7" stroke="#16A34A"/>
        <text x="215" y="50" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46">Berspora → Takson A</text>

        <line x1="155" y1="64" x2="205" y2="105" stroke="#B45309" stroke-width="2"/>
        <rect x="205" y="88" width="110" height="32" rx="8" fill="#DBEAFE" stroke="#2563EB"/>
        <text x="218" y="108" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A">Berbiji</text>

        <!-- Branch Biji Terbuka vs Tertutup -->
        <line x1="315" y1="104" x2="355" y2="75" stroke="#2563EB" stroke-width="2"/>
        <rect x="355" y="58" width="145" height="32" rx="8" fill="#E0E7FF" stroke="#4F46E5"/>
        <text x="363" y="78" font-family="sans-serif" font-size="11" font-weight="bold" fill="#312E81">Strobilus → Takson B</text>

        <line x1="315" y1="104" x2="355" y2="138" stroke="#2563EB" stroke-width="2"/>
        <rect x="355" y="122" width="145" height="52" rx="8" fill="#FCE7F3" stroke="#DB2777"/>
        <text x="363" y="142" font-family="sans-serif" font-size="10" font-weight="bold" fill="#831843">Berbunga Sejati:</text>
        <text x="363" y="156" font-family="sans-serif" font-size="10" fill="#9D174D">• 1 Kotiledon → Takson C</text>
        <text x="363" y="169" font-family="sans-serif" font-size="10" fill="#9D174D">• 2 Kotiledon → Takson D</text>
      </svg>
    `,
    question_text:
      'Perhatikan bagan pohon determinasi tumbuhan berpembuluh (Tracheophyta) di atas. Apabila seorang siswa memiliki empat spesimen tumbuhan yaitu: (1) Paku tanduk rusa (Platycerium bifurcatum), (2) Anggrek bulan (Phalaenopsis amabilis), (3) Pakis haji (Cycas rumphii), dan (4) Jambu biji (Psidium guajava), maka penempatan keempat spesimen tersebut pada Takson A, B, C, dan D yang tepat adalah…',
    options: [
      { key: 'A', text: 'Takson A = Pakis haji; Takson B = Paku tanduk rusa; Takson C = Anggrek bulan; Takson D = Jambu biji' },
      { key: 'B', text: 'Takson A = Paku tanduk rusa; Takson B = Pakis haji; Takson C = Anggrek bulan; Takson D = Jambu biji' },
      { key: 'C', text: 'Takson A = Paku tanduk rusa; Takson B = Anggrek bulan; Takson C = Pakis haji; Takson D = Jambu biji' },
      { key: 'D', text: 'Takson A = Anggrek bulan; Takson B = Pakis haji; Takson C = Jambu biji; Takson D = Paku tanduk rusa' },
      { key: 'E', text: 'Takson A = Jambu biji; Takson B = Pakis haji; Takson C = Paku tanduk rusa; Takson D = Anggrek bulan' }
    ],
    correct_answer: 'B',
    hint: 'Jangan tertukar antara "Paku tanduk rusa" (Pteridophyta berspora) dengan "Pakis haji" (Gymnospermae berstrobilus)!',
    explanation:
      'Meskipun bernama lokal "pakis", Pakis haji (Cycas rumphii) BUKAN tumbuhan paku melainkan tumbuhan berbiji terbuka (Gymnospermae) yang menghasilkan strobilus (Takson B). Paku tanduk rusa adalah Pteridophyta berspora (Takson A). Anggrek bulan adalah Angiospermae Monokotil/1 kotiledon (Takson C), dan Jambu biji adalah Angiospermae Dikotil/2 kotiledon (Takson D).',
    tags: ['hots', 'bagan-determinasi', 'svg', 'tracheophyta', 'pengecoh-nama']
  },
  {
    code: 'BIO10-T3-SUL-026',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 185" width="100%" height="185" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #CBD5E1;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Evaluasi Pengelompokan Kladistik: "Kelas Reptilia Klasik" Tanpa Menyertakan Aves</text>
        <!-- Highlight Box excluding Aves -->
        <rect x="155" y="38" width="230" height="105" rx="12" fill="#FEE2E2" stroke="#EF4444" stroke-width="2" stroke-dasharray="5,4"/>
        <text x="168" y="56" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C">Kelompok "Reptilia Klasik" (Tanpa Burung)</text>

        <!-- Tree Lines -->
        <line x1="60" y1="160" x2="185" y2="115" stroke="#334155" stroke-width="2.5"/>
        <line x1="185" y1="115" x2="210" y2="75" stroke="#334155" stroke-width="2.5"/>
        <text x="185" y="70" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">Kura-kura</text>

        <line x1="185" y1="115" x2="280" y2="115" stroke="#334155" stroke-width="2.5"/>
        <line x1="280" y1="115" x2="290" y2="75" stroke="#334155" stroke-width="2.5"/>
        <text x="260" y="70" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">Kadal &amp; Ular</text>

        <line x1="280" y1="115" x2="365" y2="115" stroke="#334155" stroke-width="2.5"/>
        <line x1="365" y1="115" x2="355" y2="75" stroke="#334155" stroke-width="2.5"/>
        <text x="338" y="70" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E293B">Buaya</text>

        <line x1="365" y1="115" x2="445" y2="75" stroke="#2563EB" stroke-width="2.5"/>
        <text x="415" y="68" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1D4ED8">Burung (Aves)</text>
      </svg>
    `,
    question_text:
      'Perhatikan pohon filogenetik Archosauria pada diagram di atas. Buaya memiliki nenek moyang bersama paling dekat dengan Burung (Aves) dibandingkan dengan Kadal maupun Kura-kura. Apabila seorang taksonom membuat kelompok "Reptilia Klasik" (kotak merah putus-putus) yang mencakup Kura-kura, Kadal, dan Buaya namun SENGAJA mengeluarkan Burung (Aves), maka kelompok tersebut dalam taksonomi kladistik dinilai tidak valid secara filogenetik karena bersifat…',
    options: [
      { key: 'A', text: 'Monofiletik (mencakup nenek moyang bersama beserta seluruh keturunannya secara utuh)' },
      { key: 'B', text: 'Parafiletik (mencakup nenek moyang bersama, tetapi mengecualikan salah satu cabang keturunannya yaitu Aves)' },
      { key: 'C', text: 'Polifiletik (menggabungkan spesies dari Kingdom Plantae dan Kingdom Animalia)' },
      { key: 'D', text: 'Artifisial berdasarkan kesamaan habitat hidup di dalam air laut' },
      { key: 'E', text: 'Homolog sempurna karena Buaya tidak memiliki hubungan evolusi dengan Burung' }
    ],
    correct_answer: 'B',
    hint: 'Ingat tiga istilah kladistik: Monofiletik (leluhur + semua keturunan), Parafiletik (leluhur + sebagian keturunan, ada cabang yang dikeluarkan), dan Polifiletik (tanpa leluhur bersama langsung).',
    explanation:
      'Dalam sistematika filogenetik (kladistik), suatu takson hanya diakui sebagai klad sejati apabila bersifat Monofiletik (mencakup leluhur bersama dan seluruh keturunannya). Mengelompokkan Kura-kura, Kadal, dan Buaya tanpa menyertakan Aves (padahal Buaya dan Aves berbagi leluhur Archosauria terakhir) menghasilkan kelompok Parafiletik.',
    tags: ['hots', 'kladistik', 'parafiletik-monofiletik', 'svg', 'filogenetik']
  },
  {
    code: 'BIO10-T3-SUL-027',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Lumba-lumba (Delphinus delphis) dan ikan hiu (Carcharodon carcharias) sama-sama memiliki bentuk tubuh torpedo (streamlined) yang hidrodinamis serta sirip punggung dan sirip dada untuk berenang cepat di laut.',
    question_text:
      'Mengapa ahli taksonomi modern TIDAK menempatkan lumba-lumba dan ikan hiu ke dalam kelas yang sama, meskipun bentuk luar (morfologi) tubuh keduanya tampak sangat mirip?',
    options: [
      { key: 'A', text: 'Karena lumba-lumba hidup di air tawar sedangkan ikan hiu hanya hidup di air laut.' },
      { key: 'B', text: 'Karena kemiripan bentuk torpedo keduanya merupakan sifat analog akibat evolusi konvergen (adaptasi terhadap lingkungan air yang sama), padahal secara anatomi dan filogenetik lumba-lumba adalah Mammalia (berparu-paru, berplasenta, menyusui) sedangkan hiu adalah Chondrichthyes.' },
      { key: 'C', text: 'Karena ikan hiu termasuk kelompok hewan homoioterm berdarah panas sedangkan lumba-lumba poikiloterm.' },
      { key: 'D', text: 'Karena lumba-lumba berkembang biak dengan bertelur (ovipar) di pantai berpasir seperti penyu.' },
      { key: 'E', text: 'Karena sirip dada lumba-lumba tidak memiliki kerangka tulang sama sekali.' }
    ],
    correct_answer: 'B',
    hint: 'Bedakan kemiripan akibat adaptasi lingkungan yang sama (evolusi konvergen / analogi) dengan kemiripan akibat warisan leluhur (homologi).',
    explanation:
      'Kemiripan bentuk tubuh torpedo pada hiu (ikan bertulang rawan) dan lumba-lumba (mamalia laut) adalah hasil Evolusi Konvergen (struktur analog) karena tekanan seleksi hidrodinamika lingkungan laut yang sama. Secara filogenetik dan anatomis, lumba-lumba memiliki paru-paru, jantung 4 ruang, kelenjar susu, dan tulang jari di dalam sirip dadanya (Kelas Mammalia).',
    tags: ['hots', 'evolusi-konvergen', 'analogi-vs-homologi', 'klasifikasi-filogenetik']
  },
  {
    code: 'BIO10-T3-SUL-028',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Seorang peternak mengawinkan Kuda betina (Equus caballus, 2n = 64 kromosom) dengan Keledai jantan (Equus asinus, 2n = 62 kromosom) dan berhasil menghasilkan keturunan hidup yang kuat bernama Bagal (Mule, 2n = 63 kromosom). Namun, ketika sesama Bagal dikawinkan, tidak pernah dihasilkan keturunan.',
    question_text:
      'Berdasarkan Konsep Spesies Biologis (Biological Species Concept) yang dikemukakan oleh Ernst Mayr, apakah Kuda dan Keledai dapat digabungkan menjadi satu spesies yang sama karena berhasil kawin dan melahirkan Bagal?',
    options: [
      { key: 'A', text: 'Ya, karena syarat satu spesies hanya ditentukan oleh kemampuan melakukan kopulasi dan melahirkan anak hidup.' },
      { key: 'B', text: 'Tidak, karena menurut Konsep Spesies Biologis dua individu baru dinyatakan satu spesies apabila hasil perkawinannya mampu menghasilkan keturunan yang FERTIL (subur), sedangkan Bagal (2n = 63 ganjil) bersifat steril akibat gagal melakukan sinapsis kromosom saat meiosis.' },
      { key: 'C', text: 'Ya, karena Kuda dan Keledai memiliki jumlah kromosom yang sama persis di dalam sel gametnya.' },
      { key: 'D', text: 'Tidak, karena Kuda dan Keledai berasal dari dua Famili dan dua Ordo yang berbeda.' },
      { key: 'E', text: 'Ya, karena Bagal merupakan spesies baru yang dapat berkembang biak secara vegetatif.' }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan jumlah kromosom Bagal (63, ganjil) ketika harus berpasangan secara homolog saat pembelahan meiosis pembentukan sel kelamin.',
    explanation:
      'Menurut Konsep Spesies Biologis (Ernst Mayr), satu spesies adalah kelompok populasi alam yang mampu saling kawin (interbreeding) dan menghasilkan keturunan yang FERTIL (subur). Kuda (n=32) dan Keledai (n=31) adalah dua spesies berbeda dalam satu genus Equus karena hibridanya (Bagal, 2n=63) bersifat steril (mandul) akibat isolasi reproduksi pascazigotik (kegagalan pasangan kromosom homolog saat meiosis).',
    tags: ['hots', 'konsep-spesies-biologis', 'isolasi-reproduksi', 'hibrida-steril']
  },
  {
    code: 'BIO10-T3-SUL-029',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Jamur lendir (Myxomycota) dan jamur air (Oomycota seperti Phytophthora infestans penyebab busuk kentang) pada awalnya diklasifikasikan ke dalam Kingdom Fungi karena membentuk struktur mirip hifa dan menghasilkan spora. Namun, dalam sistem klasifikasi modern keduanya dipindahkan ke dalam Kingdom Protista.',
    question_text:
      'Bukti biologi seluler dan biokimia manakah yang mendasari pemindahan Oomycota dan Myxomycota dari Kingdom Fungi ke dalam Kingdom Protista?',
    options: [
      { key: 'A', text: 'Keduanya memiliki kloroplas hijau dan melakukan fotosintesis seperti tumbuhan tingkat tinggi.' },
      { key: 'B', text: 'Dinding sel Oomycota tersusun atas selulosa (bukan kitin seperti Fungi sejati), memiliki fase spora kembar berflagela (zoospora), sedangkan Myxomycota memiliki fase vegetatif amoeboid yang menelan makanan secara fagositosis.' },
      { key: 'C', text: 'Keduanya tidak memiliki membran inti sel (prokariotik) sehingga harus digabungkan dengan bakteri.' },
      { key: 'D', text: 'Keduanya memiliki jaringan pembuluh xilem dan floem untuk mengangkut spora.' },
      { key: 'E', text: 'Fungi sejati selalu bersifat uniseluler, sedangkan Oomycota selalu bersifat multiseluler.' }
    ],
    correct_answer: 'B',
    hint: 'Ingat ciri mutlak Kingdom Fungi sejati: dinding sel dari zat kitin, heterotrof absorptif (tidak pernah fagositosis), dan tidak memiliki sel berflagela pada fase hidupnya.',
    explanation:
      'Oomycota dan Myxomycota dikeluarkan dari Kingdom Fungi karena menyimpang dari karakter sinapomorfi Fungi sejati: (1) Dinding sel Oomycota tersusun atas selulosa (bukan kitin) dan menghasilkan zoospora berflagela; (2) Myxomycota pada fase plasmodiumnya tidak berdinding sel, bergerak amoeboid, dan makan secara fagositosis (holozoik), bukan absorptif.',
    tags: ['hots', 'protista-mirip-jamur', 'fungi', 'revisi-taksonomi']
  },
  {
    code: 'BIO10-T3-SUL-030',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Dalam pengawasan perdagangan satwa liar di bandara, petugas karantina sering menemukan penyelundupan daging fillet atau sirip ikan yang sudah dipotong-potong sehingga seluruh ciri morfologi luarnya hilang dan tidak dapat diidentifikasi menggunakan kunci determinasi morfologi.',
    question_text:
      'Metode taksonomi modern apakah yang paling akurat digunakan oleh laboratorium forensik biologi untuk mengidentifikasi spesies dari potongan jaringan tersebut hingga tingkat spesies?',
    options: [
      { key: 'A', text: 'Menimbang berat potongan daging dan mencocokkannya dengan buku kunci determinasi Linnaeus.' },
      { key: 'B', text: 'DNA Barcoding menggunakan amplifikasi PCR dan sekuensing gen penanda standar (seperti gen mitokondria Cytochrome c Oxidase I / COI pada hewan), lalu mencocokkannya dengan basis data GenBank/BOLD.' },
      { key: 'C', text: 'Mengamati warna darah pada potongan daging menggunakan kaca pembesar (lup).' },
      { key: 'D', text: 'Menanam potongan daging tersebut pada medium agar miring agar tumbuh menjadi hewan utuh.' },
      { key: 'E', text: 'Memasak potongan daging tersebut untuk menguji aroma dan teksturnya secara organoleptik.' }
    ],
    correct_answer: 'B',
    hint: 'Setiap spesies hewan memiliki "kode batang" urutan basa nukleotida yang unik pada gen mitokondria COI.',
    explanation:
      'Ketika karakter morfologi rusak atau hilang (seperti pada potongan sirip hiu langka, daging satwa dilindungi, atau serbuk tanaman obat), identifikasi taksonomi menggunakan teknik DNA Barcoding (mengamplifikasi segmen gen mitokondria COI ~650 bp pada hewan atau gen kloroplas rbcL/matK pada tumbuhan) dan membandingkan sekuensnya dengan basis data referensi global.',
    tags: ['hots', 'dna-barcoding', 'taksonomi-forensik', 'biologi-molekuler']
  },
  {
    code: 'BIO10-T3-SUL-031',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Di Pulau Jawa, masyarakat menyebut buah Carica papaya dengan nama "pepaya", di Jawa Barat disebut "gedang", sedangkan di Jawa Tengah kata "gedang" justru merujuk pada buah pisang (Musa paradisiaca). Fenomena kebahasaan ini membuktikan urgensi penggunaan sistem Binomial Nomenclature dalam komunikasi ilmiah karena…',
    options: [
      { key: 'A', text: 'Bahasa daerah lebih mudah dipahami oleh seluruh ilmuwan di dunia dibandingkan bahasa Latin.' },
      { key: 'B', text: 'Nama lokal (vernacular name) bersifat полиsemik dan berbeda-beda antarwilayah sehingga memicu ambiguitas, sedangkan nama ilmiah Latin bersifat universal, stabil, memiliki satu nama unik untuk satu spesies, dan menunjukkan hubungan kekerabatan genus.' },
      { key: 'C', text: 'Pepaya dan pisang sebenarnya merupakan satu spesies yang sama karena sama-sama disebut gedang.' },
      { key: 'D', text: 'Bahasa Latin masih digunakan sebagai bahasa percakapan sehari-hari oleh petani di seluruh benua.' },
      { key: 'E', text: 'Nama ilmiah sengaja dibuat rumit agar masyarakat umum tidak dapat mempelajari biologi.' }
    ],
    correct_answer: 'B',
    hint: 'Mengapa Linnaeus memilih bahasa Latin (bahasa mati yang tidak berubah maknanya) dan sistem nama ganda yang diatur oleh kode internasional?',
    explanation:
      'Nama daerah (vernacular name) tidak memiliki standar global: satu kata yang sama ("gedang") dapat merujuk pada dua spesies berbeda di daerah berbeda, atau satu spesies memiliki puluhan nama lokal. Binomial Nomenclature mengatasi ambiguitas tersebut karena bersifat universal, diatur kode internasional (ICN/ICZN), menggunakan bahasa Latin yang statis, serta menginformasikan takson Genus.',
    tags: ['hots', 'urgensi-binomial', 'tata-nama-ilmiah', 'analisis-kasus']
  },
  {
    code: 'BIO10-T3-SUL-032',
    subject: 'Biologi Kelas X',
    topic_slug: 'klasifikasi',
    topic_name: 'Klasifikasi Makhluk Hidup',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Seorang peneliti menemukan dua populasi katak pohon di hutan Sumatera yang memiliki warna kulit, ukuran tubuh, dan bentuk kaki yang tampak 100% identik secara morfologi. Namun, setelah dilakukan analisis suara panggilan kawin (akustik) dan sekuensing DNA, ternyata kedua populasi tersebut memiliki frekuensi suara kawin yang sangat berbeda, tidak pernah saling kawin di alam, dan memiliki divergensi genetik sebesar 8%.',
    question_text:
      'Dalam taksonomi modern, fenomena ditemukannya dua atau lebih spesies berbeda yang dulunya dianggap sebagai satu spesies tunggal karena morfologi luarnya sangat mirip disebut sebagai…',
    options: [
      { key: 'A', text: 'Spesies Kriptik (Cryptic species) yang terungkap melalui pendekatan taksonomi integratif (molekuler, bioakustik, dan isolasi perilaku)' },
      { key: 'B', text: 'Varietas pertanian hasil domestikasi buatan manusia' },
      { key: 'C', text: 'Mutasi somatik sementara akibat perbedaan makanan di laboratorium' },
      { key: 'D', text: 'Polimorfisme seksual antara katak jantan dan katak betina dalam satu keluarga' },
      { key: 'E', text: 'Kegagalan alat sekuensing DNA karena morfologi luar adalah satu-satunya penentu spesies' }
    ],
    correct_answer: 'A',
    hint: 'Istilah ini berasal dari kata Yunani "kryptos" yang berarti tersembunyi.',
    explanation:
      'Spesies kriptik (cryptic species) adalah dua atau lebih spesies berbeda yang terisolasi secara reproduktif dan genetik, namun secara morfologi luar tampak hampir tidak dapat dibedakan. Taksonomi integratif modern menggabungkan bukti morfologi, molekuler (DNA), perilaku/bioakustik (suara panggilan kawin sebagai isolasi reproduksi prazigotik), dan ekologi untuk memisahkan spesies kriptik.',
    tags: ['hots', 'cryptic-species', 'taksonomi-integratif', 'isolasi-perilaku']
  }
];
