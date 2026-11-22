import type { BiologyQuestionSeed } from '../types.ts';

export const topic1RuangLingkup: BiologyQuestionSeed[] = [
  // =========================================================================
  // 1. MUDAH (C1 - C2) : 10 SOAL (BIO10-T1-MUD-001 s.d. BIO10-T1-MUD-010)
  // =========================================================================
  {
    code: 'BIO10-T1-MUD-001',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Urutan tingkat organisasi kehidupan dari tingkat paling sederhana (molekuler) hingga tingkat paling kompleks di permukaan bumi yang tepat adalah…',
    options: [
      { key: 'A', text: "Atom – Sel – Organ – Jaringan – Sistem Organ – Populasi – Individu – Komunitas – Ekosistem – Biosfer – Bioma" },
      { key: 'B', text: "Molekul – Sel – Jaringan – Organ – Sistem Organ – Individu – Populasi – Komunitas – Ekosistem – Bioma – Biosfer" },
      { key: 'C', text: "Molekul – Jaringan – Sel – Organ – Sistem Organ – Individu – Komunitas – Populasi – Ekosistem – Bioma – Biosfer" },
      { key: 'D', text: "Sel – Molekul – Jaringan – Sistem Organ – Organ – Individu – Populasi – Komunitas – Bioma – Ekosistem – Biosfer" },
      { key: 'E', text: "Molekul – Organel – Jaringan – Sel – Organ – Individu – Populasi – Ekosistem – Komunitas – Bioma – Biosfer" }
    ],
    correct_answer: 'B',
    hint: 'Ingat bahwa kumpulan sel membentuk jaringan, dan kumpulan populasi di suatu wilayah membentuk komunitas sebelum berinteraksi dengan faktor abiotik.',
    explanation:
      'Hierarki organisasi kehidupan secara berurutan dari terendah ke tertinggi adalah: Molekul (DNA/protein) → Organel → Sel (unit struktural/fungsional terkecil) → Jaringan → Organ → Sistem Organ → Individu (organisme) → Populasi → Komunitas → Ekosistem → Bioma → Biosfer.',
    tags: ['organisasi-kehidupan', 'hierarki-biologi', 'konsep-dasar']
  },
  {
    code: 'BIO10-T1-MUD-002',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Cabang ilmu biologi yang secara khusus mempelajari struktur mikroskopis serta fungsi jaringan penyusun organ tubuh makhluk hidup adalah…',
    options: [
      { key: 'A', text: "Anatomi" },
      { key: 'B', text: "Sitologi" },
      { key: 'C', text: "Histologi" },
      { key: 'D', text: "Morfologi" },
      { key: 'E', text: "Embriologi" }
    ],
    correct_answer: 'C',
    hint: 'Istilah ini berasal dari bahasa Yunani "histos" yang berarti jaringan atau tenunan.',
    explanation:
      'Histologi adalah cabang biologi yang mengkaji struktur dan fungsi jaringan secara mikroskopis. Sitologi mempelajari sel, Anatomi mempelajari struktur organ bagian dalam, Morfologi mempelajari bentuk luar tubuh, dan Embriologi mempelajari perkembangan embrio.',
    tags: ['cabang-biologi', 'histologi', 'jaringan']
  },
  {
    code: 'BIO10-T1-MUD-003',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Sekelompok burung jalak bali (Leucopsar rothschildi) yang hidup dan berkembang biak di kawasan hutan Taman Nasional Bali Barat pada tahun 2026 merupakan objek kajian biologi pada tingkat…',
    options: [
      { key: 'A', text: "Ekosistem" },
      { key: 'B', text: "Individu" },
      { key: 'C', text: "Bioma" },
      { key: 'D', text: "Populasi" },
      { key: 'E', text: "Komunitas" }
    ],
    correct_answer: 'D',
    hint: 'Perhatikan bahwa objek yang disebutkan hanya terdiri atas satu spesies yang sama pada ruang dan waktu tertentu.',
    explanation:
      'Populasi adalah kumpulan individu dari satu spesies yang sama (Leucopsar rothschildi) yang menempati suatu habitat tertentu pada waktu yang sama dan dapat melakukan perkawinan silang (interbreeding).',
    tags: ['populasi', 'tingkat-organisasi', 'ekologi']
  },
  {
    code: 'BIO10-T1-MUD-004',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam metode ilmiah, jawaban sementara terhadap rumusan masalah yang disusun berdasarkan landasan teori dan masih harus diuji kebenarannya melalui eksperimen disebut…',
    options: [
      { key: 'A', text: "Kesimpulan" },
      { key: 'B', text: "Teori ilmiah" },
      { key: 'C', text: "Hipotesis" },
      { key: 'D', text: "Variabel kontrol" },
      { key: 'E', text: "Observasi" }
    ],
    correct_answer: 'C',
    hint: 'Tahap ini berada tepat setelah perumusan masalah dan kajian pustaka, sebelum peneliti merancang percobaan.',
    explanation:
      'Hipotesis adalah dugaan atau jawaban sementara terhadap masalah penelitian yang disusun secara deduktif berdasarkan teori ilmiah dan wajib diuji secara empiris melalui eksperimen atau observasi terstruktur.',
    tags: ['metode-ilmiah', 'hipotesis', 'penelitian']
  },
  {
    code: 'BIO10-T1-MUD-005',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Simbol keselamatan kerja laboratorium (K3) bergambar tengkorak manusia dengan dua tulang bersilang di belakangnya menunjukkan bahwa bahan kimia di dalam botol tersebut bersifat…',
    options: [
      { key: 'A', text: "Mudah terbakar (Flammable)" },
      { key: 'B', text: "Memancarkan radiasi pengion (Radioactive)" },
      { key: 'C', text: "Korosif terhadap jaringan kulit (Corrosive)" },
      { key: 'D', text: "Mudah meledak karena guncangan (Explosive)" },
      { key: 'E', text: "Beracun dan mematikan jika tertelan atau terhirup (Toxic)" }
    ],
    correct_answer: 'E',
    hint: 'Lambang tengkorak dan tulang bersilang digunakan secara internasional untuk zat seperti sianida, merkuri, dan arsenik.',
    explanation:
      'Simbol tengkorak dan tulang bersilang menandakan bahan bersifat Toxic (beracun akut) yang dapat menyebabkan keracunan serius hingga kematian apabila terhirup, tertelan, atau terserap melalui kulit.',
    tags: ['keselamatan-laboratorium', 'simbol-bahaya', 'k3-biologi']
  },
  {
    code: 'BIO10-T1-MUD-006',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pasangan cabang ilmu biologi beserta objek kajiannya yang tepat di bawah ini adalah…',
    options: [
      { key: 'A', text: "Ornitologi – mempelajari kehidupan ikan dan ekosistem perairan" },
      { key: 'B', text: "Entomologi – mempelajari kehidupan serangga dan peranannya" },
      { key: 'C', text: "Mikologi – mempelajari struktur dan klasifikasi tumbuhan lumut" },
      { key: 'D', text: "Ikhtiologi – mempelajari kehidupan burung dan migrasinya" },
      { key: 'E', text: "Virologi – mempelajari bakteri menguntungkan dan patogen" }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan akar kata "entomon" (serangga), "mykes" (jamur), "ornis" (burung), dan "ichthys" (ikan).',
    explanation:
      'Entomologi adalah cabang zoologi yang mempelajari serangga (Insecta). Mikologi mempelajari jamur (Fungi), Ornitologi mempelajari burung (Aves), Ikhtiologi mempelajari ikan (Pisces), dan Bakteriologi mempelajari bakteri.',
    tags: ['cabang-biologi', 'entomologi', 'zoologi']
  },
  {
    code: 'BIO10-T1-MUD-007',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Seorang peneliti selalu mencantumkan data hasil pengamatan apa adanya sesuai pengukuran di lapangan meskipun hasil tersebut menolak hipotesis awalnya. Sikap ilmiah yang ditunjukkan peneliti tersebut adalah…',
    options: [
      { key: 'A', text: "Tertutup terhadap kritik dari peneliti lain" },
      { key: 'B', text: "Skeptis terhadap seluruh alat ukur laboratorium" },
      { key: 'C', text: "Jujur dan objektif terhadap fakta empiris" },
      { key: 'D', text: "Subjektif dan dogmatis" },
      { key: 'E', text: "Mengutamakan opini pribadi di atas data eksperimen" }
    ],
    correct_answer: 'C',
    hint: 'Seorang ilmuwan tidak boleh memanipulasi data agar sesuai dengan keinginannya.',
    explanation:
      'Sikap jujur dan objektif menuntut peneliti melaporkan data empiris secara faktual tanpa rekayasa, sekalipun hasil eksperimen tidak mendukung hipotesis yang diajukan.',
    tags: ['sikap-ilmiah', 'etika-penelitian', 'metode-ilmiah']
  },
  {
    code: 'BIO10-T1-MUD-008',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pemanfaatan bakteri Escherichia coli transgenik yang telah disisipi gen manusia untuk memproduksi hormon insulin bagi penderita diabetes melitus merupakan contoh kontribusi biologi dalam bidang…',
    options: [
      { key: 'A', text: "Pertanian konvensional" },
      { key: 'B', text: "Konservasi satwa liar ex-situ" },
      { key: 'C', text: "Taksonomi tumbuhan tingkat tinggi" },
      { key: 'D', text: "Paleontologi dan geologi" },
      { key: 'E', text: "Kedokteran dan bioteknologi farmasi" }
    ],
    correct_answer: 'E',
    hint: 'Produk yang dihasilkan berupa obat/hormon terapi bagi penyakit gangguan endokrin manusia.',
    explanation:
      'Teknik rekayasa genetika (DNA rekombinan) untuk menghasilkan hormon insulin manusia menggunakan plasmid bakteri E. coli merupakan terobosan biologi molekuler di bidang kedokteran dan bioteknologi farmasi.',
    tags: ['manfaat-biologi', 'bioteknologi', 'kedokteran']
  },
  {
    code: 'BIO10-T1-MUD-009',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Data pengamatan biologi yang dinyatakan dalam bentuk deskripsi ciri kualitas (bukan angka hasil pengukuran), seperti perubahan warna daun menjadi kekuningan atau tekstur permukaan biji yang berkerut, disebut data…',
    options: [
      { key: 'A', text: "Kualitatif" },
      { key: 'B', text: "Koefisien korelasi" },
      { key: 'C', text: "Kuantitatif diskrit" },
      { key: 'D', text: "Kuantitatif kontinu" },
      { key: 'E', text: "Statistik parametrik" }
    ],
    correct_answer: 'A',
    hint: 'Bandingkan istilah untuk data berbasis kualitas/sifat dengan data berbasis kuantitas/angka.',
    explanation:
      'Data kualitatif adalah data hasil pengamatan panca indra atau instrumen yang dinyatakan dalam bentuk kata-kata atau deskripsi sifat (warna, aroma, tekstur, bentuk), sedangkan data kuantitatif dinyatakan dalam angka hasil pengukuran.',
    tags: ['metode-ilmiah', 'data-kualitatif', 'observasi']
  },
  {
    code: 'BIO10-T1-MUD-010',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ketika terjadi tumpahan larutan asam kuat (HCl pekat) pada kulit tangan saat praktikum di laboratorium biologi, tindakan pertolongan pertama yang paling tepat dilakukan adalah…',
    options: [
      { key: 'A', text: "Menggosok kulit dengan kertas saring kering sekuat tenaga" },
      { key: 'B', text: "Menutup luka rapat-rapat dengan plester kedap udara tanpa dicuci" },
      { key: 'C', text: "Menyiramkan larutan basa kuat NaOH pekat secara langsung ke atas kulit" },
      { key: 'D', text: "Membilas bagian kulit yang terkena di bawah air mengalir terus-menerus selama minimal 10–15 menit" },
      { key: 'E', text: "Mengoleskan mentega atau minyak tanah pada bagian kulit yang terkena asam" }
    ],
    correct_answer: 'D',
    hint: 'Jangan pernah menetralkan asam kuat di atas kulit dengan basa kuat karena reaksi netralisasinya bersifat eksoterm (menghasilkan panas tinggi).',
    explanation:
      'Prosedur K3 standar untuk paparan bahan kimia korosif pada kulit adalah segera mengguyur area terdampak dengan air bersih yang mengalir selama 10–15 menit untuk mengencerkan dan membuang sisa zat kimia serta menyerap panas reaksi.',
    tags: ['keselamatan-laboratorium', 'p3k-laboratorium', 'k3-biologi']
  },

  // =========================================================================
  // 2. MEDIUM (C3) : 10 SOAL (BIO10-T1-MED-011 s.d. BIO10-T1-MED-020)
  // =========================================================================
  {
    code: 'BIO10-T1-MED-011',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Seorang siswa kelas X melakukan percobaan berjudul "Pengaruh Konsentrasi Pupuk Organik Cair (POC) Kulit Pisang terhadap Pertambahan Tinggi Tanaman Cabai Rawit (Capsicum frutescens) selama 28 Hari". Siswa tersebut menyiapkan 4 kelompok pot dengan konsentrasi POC 0%, 5%, 10%, dan 15%, sementara volume air penyiraman, jenis tanah, dan intensitas cahaya matahari dibuat sama pada seluruh pot.',
    question_text:
      'Berdasarkan rancangan percobaan di atas, identifikasi variabel bebas, variabel terikat, dan variabel kontrol yang tepat secara berurutan adalah…',
    options: [
      { key: 'A', text: "Variabel bebas: volume air dan cahaya; Variabel terikat: konsentrasi POC; Variabel kontrol: tinggi tanaman cabai" },
      { key: 'B', text: "Variabel bebas: tanaman cabai rawit; Variabel terikat: lama waktu 28 hari; Variabel kontrol: konsentrasi POC 0%" },
      { key: 'C', text: "Variabel bebas: pertambahan tinggi tanaman; Variabel terikat: konsentrasi POC; Variabel kontrol: jenis tanah dan cahaya" },
      { key: 'D', text: "Variabel bebas: konsentrasi POC kulit pisang; Variabel terikat: pertambahan tinggi tanaman cabai; Variabel kontrol: volume air, jenis tanah, dan cahaya" },
      { key: 'E', text: "Variabel bebas: jenis tanah; Variabel terikat: volume air penyiraman; Variabel kontrol: pertambahan tinggi tanaman" }
    ],
    correct_answer: 'D',
    hint: 'Variabel bebas adalah faktor yang sengaja diubah-ubah oleh peneliti, sedangkan variabel terikat adalah hasil yang diukur akibat perubahan tersebut.',
    explanation:
      'Variabel bebas (manipulasi) adalah konsentrasi POC (0%, 5%, 10%, 15%). Variabel terikat (respon) adalah pertambahan tinggi tanaman cabai rawit. Variabel kontrol adalah faktor lain yang dibuat seragam (volume air, media tanah, cahaya) agar tidak membiaskan hasil.',
    tags: ['variabel-penelitian', 'metode-ilmiah', 'eksperimen']
  },
  {
    code: 'BIO10-T1-MED-012',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pada penelitian tentang pengaruh konsentrasi pupuk terhadap pertumbuhan tanaman, kelompok pot yang hanya disiram air murni (konsentrasi pupuk 0%) berfungsi sebagai…',
    options: [
      { key: 'A', text: "Pengganti variabel terikat apabila tanaman pada pot lain mati" },
      { key: 'B', text: "Variabel pengganggu yang harus dibuang sebelum analisis statistik" },
      { key: 'C', text: "Kelompok perlakuan utama untuk mempercepat pembungaan" },
      { key: 'D', text: "Kelompok pembanding (kontrol negatif) untuk mengetahui pertumbuhan alami tanaman tanpa pemberian pupuk" },
      { key: 'E', text: "Penentu nilai rata-rata suhu udara di sekitar rumah kaca" }
    ],
    correct_answer: 'D',
    hint: 'Tanpa kelompok 0% ini, peneliti tidak bisa membuktikan apakah tanaman tumbuh tinggi karena pupuk atau memang tumbuh secara alami.',
    explanation:
      'Kelompok kontrol (perlakuan 0% / tanpa zat uji) berfungsi sebagai tolok ukur pembanding (baseline) untuk memastikan bahwa perbedaan pertumbuhan pada kelompok perlakuan benar-benar disebabkan oleh variabel bebas (pupuk), bukan faktor lingkungan lain.',
    tags: ['kelompok-kontrol', 'desain-eksperimen', 'metode-ilmiah']
  },
  {
    code: 'BIO10-T1-MED-013',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Di sebuah rumah sakit ditemukan kasus pasien yang mengalami kegagalan fungsi pemompaan darah akibat penyumbatan plak lemak pada pembuluh arteri koronaria serta kerusakan jaringan otot miokardium.',
    question_text:
      'Permasalahan medis yang dialami pasien pada kasus di atas dikaji secara spesifik pada tingkat organisasi kehidupan…',
    options: [
      { key: 'A', text: "Molekul dan Populasi" },
      { key: 'B', text: "Organel sel dan Bioma" },
      { key: 'C', text: "Jaringan, Organ, dan Sistem Organ" },
      { key: 'D', text: "Individu, Komunitas, dan Ekosistem" },
      { key: 'E', text: "Komunitas dan Biosfer" }
    ],
    correct_answer: 'C',
    hint: 'Perhatikan objek yang mengalami gangguan: otot miokardium (jaringan), jantung & pembuluh koroner (organ), serta peredaran darah (sistem organ).',
    explanation:
      'Kerusakan otot miokardium berada pada tingkat Jaringan, gangguan jantung dan arteri koronaria berada pada tingkat Organ, serta kegagalan sirkulasi darah ke seluruh tubuh berada pada tingkat Sistem Organ (sistem kardiovaskular).',
    tags: ['tingkat-organisasi', 'jaringan-organ', 'studi-kasus']
  },
  {
    code: 'BIO10-T1-MED-014',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Seorang peneliti ingin menguji apakah pemberian ekstrak daun sirsak berpengaruh terhadap mortalitas (kematian) larva nyamuk Aedes aegypti. Rumusan hipotesis nol (H0) yang tepat untuk penelitian tersebut adalah…',
    options: [
      { key: 'A', text: "Tidak terdapat pengaruh pemberian ekstrak daun sirsak terhadap tingkat mortalitas larva nyamuk Aedes aegypti." },
      { key: 'B', text: "Pemberian ekstrak daun sirsak berpengaruh signifikan meningkatkan kematian larva nyamuk Aedes aegypti." },
      { key: 'C', text: "Ekstrak daun sirsak lebih efektif dibandingkan bubuk abate sintetis dalam membunuh nyamuk dewasa." },
      { key: 'D', text: "Semakin tinggi konsentrasi ekstrak daun sirsak, semakin cepat larva Aedes aegypti berubah menjadi pupa." },
      { key: 'E', text: "Bagaimanakah pengaruh ekstrak daun sirsak terhadap kematian larva nyamuk Aedes aegypti?" }
    ],
    correct_answer: 'A',
    hint: 'Hipotesis nol (H0) selalu menyatakan tidak adanya pengaruh atau perbedaan antara variabel bebas dan variabel terikat.',
    explanation:
      'Dalam statistika penelitian ilmiah, Hipotesis Nol (H0) menyatakan tidak ada hubungan atau pengaruh antara variabel bebas (ekstrak daun sirsak) terhadap variabel terikat (mortalitas larva), sedangkan Hipotesis Alternatif (H1/Ha) menyatakan adanya pengaruh.',
    tags: ['hipotesis-nol', 'metode-ilmiah', 'perumusan-hipotesis']
  },
  {
    code: 'BIO10-T1-MED-015',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Saat mengamati preparat penampang melintang daun Rhoeo discolor menggunakan mikroskop cahaya dengan lensa okuler 10× dan lensa objektif 40×, bayangan sel tampak masih agak buram. Bagian mikroskop yang harus diputar secara perlahan agar bayangan menjadi tajam tanpa merusak kaca preparat adalah…',
    options: [
      { key: 'A', text: "Pemutar kasar (Makrometer) ke arah bawah dengan cepat" },
      { key: 'B', text: "Revolver untuk mengganti lensa objektif ke perbesaran 100× tanpa minyak imersi" },
      { key: 'C', text: "Pemutar halus (Mikrometer) secara perlahan" },
      { key: 'D', text: "Kaki mikroskop dan lengan mikroskop" },
      { key: 'E', text: "Penjepit kaca benda (klip preparat)" }
    ],
    correct_answer: 'C',
    hint: 'Pada perbesaran kuat (40×), jarak antara ujung lensa objektif dan kaca penutup sangat dekat.',
    explanation:
      'Pada perbesaran objektif kuat (40× atau 100×), pemfokusan akhir wajib menggunakan mikrometer (pemutar halus). Penggunaan makrometer (pemutar kasar) pada perbesaran kuat berisiko membuat lensa objektif menekan dan memecahkan kaca preparat.',
    tags: ['mikroskop', 'keterampilan-laboratorium', 'praktikum']
  },
  {
    code: 'BIO10-T1-MED-016',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Jika seorang siswa mengamati sel epitel rongga mulut menggunakan mikroskop dengan perbesaran lensa okuler 15× dan lensa objektif 40×, maka perbesaran total bayangan objek yang terlihat adalah…',
    options: [
      { key: 'A', text: "150 kali" },
      { key: 'B', text: "1.500 kali" },
      { key: 'C', text: "55 kali" },
      { key: 'D', text: "400 kali" },
      { key: 'E', text: "600 kali" }
    ],
    correct_answer: 'E',
    hint: 'Perbesaran total mikroskop majemuk merupakan hasil kali perbesaran lensa okuler dengan perbesaran lensa objektif.',
    explanation:
      'Rumus perbesaran total mikroskop cahaya majemuk adalah: M_total = M_okuler × M_objektif = 15 × 40 = 600 kali.',
    tags: ['mikroskop', 'perhitungan-perbesaran', 'alat-laboratorium']
  },
  {
    code: 'BIO10-T1-MED-017',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Fenomena pemutihan karang (coral bleaching) massal di perairan Bali utara berkaitan erat dengan kenaikan suhu permukaan laut, lepasnya simbion mikroalga dari jaringan polip, serta penurunan populasi ikan karang yang bergantung pada terumbu tersebut.',
    question_text:
      'Untuk meneliti fenomena di atas secara komprehensif, kombinasi cabang ilmu biologi yang paling relevan dilibatkan adalah…',
    options: [
      { key: 'A', text: "Ekologi, Biologi Kelautan, Fisiologi, dan Ikhtiologi" },
      { key: 'B', text: "Virologi, Osteologi Mamalia, dan Miologi" },
      { key: 'C', text: "Embriologi Manusia, Neurologi, dan Kardiologi" },
      { key: 'D', text: "Pteridologi, Dendrologi, dan Agronomi Daratan" },
      { key: 'E', text: "Ornitologi, Entomologi, Paleontologi, dan Bryologi" }
    ],
    correct_answer: 'A',
    hint: 'Pilih cabang biologi yang mengkaji interaksi ekosistem laut, fungsi jaringan karang-mikroalga, dan kehidupan ikan.',
    explanation:
      'Kajian pemutihan karang dan dampaknya terhadap ikan melibatkan Ekologi (interaksi suhu abiotik dan komunitas karang), Biologi Kelautan (ekosistem bahari), Fisiologi (mekanisme stres termal endosimbion), dan Ikhtiologi (biologi ikan karang).',
    tags: ['cabang-biologi', 'ekologi-laut', 'aplikasi-konsep']
  },
  {
    code: 'BIO10-T1-MED-018',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Seorang peneliti menemukan urutan langkah kerja yang teracak dalam catatan laboratoriumnya:\n(1) Merumuskan hipotesis\n(2) Mengumpulkan dan menganalisis data eksperimen\n(3) Mengidentifikasi dan merumuskan masalah dari hasil observasi\n(4) Menarik kesimpulan dan menyusun laporan\n(5) Merancang dan melaksanakan eksperimen terkontrol\nUrutan tahapan metode ilmiah yang sistematis adalah…',
    options: [
      { key: 'A', text: "(2) – (3) – (1) – (5) – (4)" },
      { key: 'B', text: "(3) – (5) – (1) – (2) – (4)" },
      { key: 'C', text: "(1) – (3) – (5) – (2) – (4)" },
      { key: 'D', text: "(5) – (1) – (3) – (4) – (2)" },
      { key: 'E', text: "(3) – (1) – (5) – (2) – (4)" }
    ],
    correct_answer: 'E',
    hint: 'Metode ilmiah selalu diawali dengan kepekaan menemukan masalah melalui observasi awal.',
    explanation:
      'Tahapan baku metode ilmiah dimulai dari: Observasi & Perumusan Masalah (3) → Penyusunan Kerangka Teori & Hipotesis (1) → Pelaksanaan Eksperimen (5) → Pengolahan/Analisis Data (2) → Penarikan Kesimpulan & Publikasi (4).',
    tags: ['metode-ilmiah', 'tahapan-penelitian', 'aplikasi']
  },
  {
    code: 'BIO10-T1-MED-019',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam praktikum uji kandungan amilum dan glukosa pada bahan makanan, siswa perlu memanaskan tabung reaksi berisi larutan Benedict hingga mendidih. Prosedur keselamatan kerja yang benar saat memanaskan cairan di dalam tabung reaksi di atas pembakar spiritus adalah…',
    options: [
      { key: 'A', text: "Mengarahkan mulut tabung reaksi lurus ke wajah sendiri untuk mengamati perubahan warna dari dekat" },
      { key: 'B', text: "Memegang dinding tabung reaksi langsung dengan jari tangan agar mudah merasakan suhunya" },
      { key: 'C', text: "Menggunakan penjepit kayu/logam, memiringkan tabung sekitar 45°, dan mengarahkan mulut tabung ke tempat yang tidak ada orang" },
      { key: 'D', text: "Mengisi tabung reaksi hingga penuh sampai ke bibir atas tabung" },
      { key: 'E', text: "Menyumbat mulut tabung reaksi rapat-rapat dengan gabus karet agar uap tidak keluar" }
    ],
    correct_answer: 'C',
    hint: 'Cairan yang mendidih di dalam tabung sempit dapat memercik tiba-tiba (bumping) keluar dari mulut tabung.',
    explanation:
      'Saat memanaskan cairan dalam tabung reaksi, volume cairan maksimal hanya 1/3–1/2 tabung, dijepit dengan penjepit tabung, dimiringkan ~45° sambil digoyang perlahan, dan mulut tabung wajib diarahkan menjauhi wajah sendiri maupun orang lain untuk menghindari semburan cairan panas.',
    tags: ['keselamatan-laboratorium', 'praktikum-biologi', 'k3']
  },
  {
    code: 'BIO10-T1-MED-020',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pada teknik kultur jaringan tumbuhan (mikropropagasi) untuk menghasilkan ribuan bibit anggrek unggul yang seragam dalam waktu singkat, sifat dasar sel tumbuhan yang dimanfaatkan sehingga satu sel somatik mampu tumbuh menjadi individu utuh adalah…',
    options: [
      { key: 'A', text: "Plasmolisis" },
      { key: 'B', text: "Totipotensi" },
      { key: 'C', text: "Apoptosis" },
      { key: 'D', text: "Partenogenesis" },
      { key: 'E', text: "Fagositosis" }
    ],
    correct_answer: 'B',
    hint: 'Konsep ini dikemukakan oleh G. Haberlandt dan F.C. Steward melalui percobaan eksplan empulur wortel.',
    explanation:
      'Totipotensi (total genetic potential) adalah kemampuan setiap sel tumbuhan hidup yang memiliki informasi genetik lengkap untuk membelah dan berdiferensiasi menjadi individu tanaman lengkap apabila ditumbuhkan pada medium kultur yang sesuai.',
    tags: ['kultur-jaringan', 'totipotensi', 'manfaat-biologi']
  },

  // =========================================================================
  // 3. SULIT / HOTS (C4 - C5) : 12 SOAL (BIO10-T1-SUL-021 s.d. BIO10-T1-SUL-032)
  //    (Termasuk 6 soal dengan stimulus_type: 'table' dan 'svg')
  // =========================================================================
  {
    code: 'BIO10-T1-SUL-021',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#EFF6FF;color:#1E3A8A;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Kelompok Perlakuan</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Intensitas Cahaya</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Rerata Tinggi Kecambah Hari ke-7 (cm)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Kondisi Morfologi Daun &amp; Batang</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Pot A (Tempat Gelap)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 lux</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">18,4 cm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Daun kuning pucat, batang tipis melengkung dan rapuh</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Pot B (Tempat Teduh)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">500 lux</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">12,1 cm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Daun hijau muda, batang cukup tegak</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Pot C (Cahaya Terang)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">5.000 lux</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">8,6 cm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Daun hijau segar lebar, batang kokoh dan tebal</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan data tabel eksperimen perkecambahan kacang hijau (Vigna radiata) di atas, seorang siswa menyimpulkan bahwa "Tanaman yang ditanam di tempat gelap tumbuh paling sehat dan subur karena paling tinggi". Evaluasi ilmiah manakah yang paling tepat untuk mengoreksi kesimpulan siswa tersebut?',
    options: [
      { key: 'A', text: "Kesimpulan siswa keliru karena cahaya matahari 5.000 lux bersifat racun yang mematikan seluruh jaringan meristem apikal." },
      { key: 'B', text: "Kesimpulan siswa sudah tepat karena satu-satunya indikator kesehatan tanaman adalah panjang batang." },
      { key: 'C', text: "Pot A tumbuh paling tinggi karena di tempat gelap laju fotosintesis berlangsung tiga kali lebih cepat daripada di tempat terang." },
      { key: 'D', text: "Kesimpulan siswa keliru karena pertambahan tinggi ekstrem di tempat gelap merupakan gejala etiolasi akibat hormon auksin tidak terurai cahaya, namun klorofil gagal terbentuk sehingga batang lemah." },
      { key: 'E', text: "Data tabel tidak valid karena tanaman tidak mungkin bertambah tinggi sama sekali tanpa adanya cahaya matahari." }
    ],
    correct_answer: 'D',
    hint: 'Analisis hubungan antara data kuantitatif (tinggi 18,4 cm) dengan data kualitatif (daun kuning pucat, batang rapuh) serta sifat hormon auksin terhadap cahaya.',
    explanation:
      'Pertumbuhan cepat di tempat gelap (18,4 cm) bukan pertanda tanaman subur, melainkan fenomena etiolasi. Tanpa cahaya, hormon auksin bekerja maksimum memanjangkan sel batang untuk mencari cahaya, tetapi sintesis klorofil terhambat (klorosis) sehingga daun kuning pucat dan batang rapuh.',
    tags: ['hots', 'analisis-tabel', 'etiolasi', 'metode-ilmiah']
  },
  {
    code: 'BIO10-T1-SUL-022',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#FEF3C7;color:#92400E;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Gelas Kimia</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Suhu Air (°C)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">pH Air</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Kadar Detergen (ppm)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Frekuensi Bukaan Operkulum Ikan/Menit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">I</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">25°C</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">7,0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 ppm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">62 kali/menit</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">II</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">30°C</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">5,5</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">10 ppm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">98 kali/menit</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">III</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">35°C</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">4,0</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">25 ppm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">134 kali/menit</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Seorang peneliti ingin membuktikan hipotesis bahwa "Semakin tinggi kadar detergen, semakin cepat frekuensi pernapasan ikan nila". Ketika rancangan eksperimen pada tabel di atas diperiksa oleh tim penguji, eksperimen tersebut dinyatakan CACAT METODOLOGIS. Apa penyebab utama ketidakvalidan desain eksperimen pada tabel tersebut?',
    options: [
      { key: 'A', text: "Ikan nila merupakan organisme air tawar yang tidak memiliki operkulum (tutup insang)." },
      { key: 'B', text: "Gelas kimia I menggunakan kadar detergen 0 ppm sehingga merusak perhitungan rata-rata." },
      { key: 'C', text: "Frekuensi bukaan operkulum ikan seharusnya menurun ketika kadar polutan meningkat." },
      { key: 'D', text: "Peneliti tidak menyertakan satuan menit pada kolom frekuensi bukaan operkulum ikan." },
      { key: 'E', text: "Terdapat tiga variabel bebas yang diubah secara bersamaan (suhu, pH, dan kadar detergen), sehingga tidak dapat dipastikan faktor mana yang menyebabkan kenaikan frekuensi operkulum." }
    ],
    correct_answer: 'E',
    hint: 'Dalam eksperimen terkontrol yang valid, hanya boleh ada SATU variabel bebas yang dimanipulasi pada satu rangkaian uji.',
    explanation:
      'Prinsip utama eksperimen terkontrol adalah hanya mengubah satu variabel bebas (kadar detergen) sembari menjaga variabel kontrol (suhu dan pH air) tetap konstan di seluruh gelas kimia. Mengubah suhu, pH, dan detergen sekaligus menimbulkan variabel perancu (confounding variables).',
    tags: ['hots', 'evaluasi-metodologi', 'variabel-perancu', 'analisis-tabel']
  },
  {
    code: 'BIO10-T1-SUL-023',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 220" width="100%" height="220" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #E2E8F0;padding:8px;">
        <text x="20" y="26" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Grafik Aktivitas Enzim X dan Enzim Y terhadap Perubahan pH</text>
        <line x1="50" y1="180" x2="480" y2="180" stroke="#475569" stroke-width="1.5"/>
        <line x1="50" y1="40" x2="50" y2="180" stroke="#475569" stroke-width="1.5"/>
        <!-- Curve Enzim X (peak at pH 2) -->
        <path d="M 65 180 Q 115 35 165 180" fill="none" stroke="#EF4444" stroke-width="3"/>
        <text x="95" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#DC2626">Enzim X (Optimum pH 2)</text>
        <!-- Curve Enzim Y (peak at pH 8) -->
        <path d="M 240 180 Q 330 35 420 180" fill="none" stroke="#3B82F6" stroke-width="3"/>
        <text x="290" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563EB">Enzim Y (Optimum pH 8)</text>
        <!-- X Axis Labels -->
        <text x="110" y="198" font-family="sans-serif" font-size="11" fill="#334155">pH 2</text>
        <text x="220" y="198" font-family="sans-serif" font-size="11" fill="#334155">pH 5</text>
        <text x="325" y="198" font-family="sans-serif" font-size="11" fill="#334155">pH 8</text>
        <text x="430" y="198" font-family="sans-serif" font-size="11" fill="#334155">pH 11</text>
        <text x="15" y="115" font-family="sans-serif" font-size="11" fill="#334155" transform="rotate(-90 15,115)">Laju Reaksi</text>
      </svg>
    `,
    question_text:
      'Perhatikan grafik hubungan pH terhadap laju reaksi dua jenis enzim pencernaan manusia pada diagram di atas. Apabila seorang peneliti biokimia mengisolasi Enzim X lalu memasukkannya ke dalam larutan penyangga bersuasana basa (pH 8), apa yang akan terjadi beserta penjelasan tingkat molekuler yang tepat?',
    options: [
      { key: 'A', text: "Enzim X dan Enzim Y akan bergabung membentuk koenzim baru yang bekerja optimal pada pH netral 7." },
      { key: 'B', text: "Enzim X akan berubah struktur kimianya dari molekul protein menjadi molekul polisakarida." },
      { key: 'C', text: "Laju reaksi Enzim X meningkat dua kali lipat karena pH 8 menyediakan lebih banyak ion hidroksida." },
      { key: 'D', text: "Enzim X akan beradaptasi dan menggeser puncak aktivitas optimumnya mengikuti Enzim Y pada pH 8." },
      { key: 'E', text: "Enzim X mengalami denaturasi akibat perubahan muatan ionik gugus R asam amino pada pH 8, sehingga konformasi sisi aktifnya berubah dan tidak dapat mengikat substrat." }
    ],
    correct_answer: 'E',
    hint: 'Enzim X bekerja di lingkungan sangat asam seperti lambung (pepsin). Perhatikan kurva merah pada saat nilai pH melewati angka 5.',
    explanation:
      'Grafik menunjukkan Enzim X (seperti pepsin lambung) memiliki pH optimum ~2 dan kehilangan seluruh aktivitasnya di atas pH 5. Pada pH 8, konsentrasi ion H+ yang sangat rendah mengubah ikatan ionik dan hidrogen penyusun struktur tersier protein enzim (denaturasi), sehingga sisi aktifnya rusak.',
    tags: ['hots', 'interpretasi-grafik', 'svg', 'biokimia-enzim']
  },
  {
    code: 'BIO10-T1-SUL-024',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #E2E8F0;padding:8px;">
        <text x="20" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Diagram Alir Hirarki Kajian Penyakit Malaria</text>
        <rect x="20" y="55" width="105" height="90" rx="10" fill="#DBEAFE" stroke="#3B82F6"/>
        <text x="32" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A">Level 1: Molekul</text>
        <text x="30" y="110" font-family="sans-serif" font-size="10" fill="#1E40AF">Mutasi Gen</text>
        <text x="30" y="124" font-family="sans-serif" font-size="10" fill="#1E40AF">Hemoglobin S</text>

        <rect x="148" y="55" width="105" height="90" rx="10" fill="#DCFCE7" stroke="#10B981"/>
        <text x="160" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46">Level 2: Sel</text>
        <text x="158" y="110" font-family="sans-serif" font-size="10" fill="#047857">Lisis Eritrosit</text>
        <text x="158" y="124" font-family="sans-serif" font-size="10" fill="#047857">oleh Plasmodium</text>

        <rect x="276" y="55" width="105" height="90" rx="10" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="288" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E">Level 3: Organ</text>
        <text x="286" y="110" font-family="sans-serif" font-size="10" fill="#B45309">Pembengkakan</text>
        <text x="286" y="124" font-family="sans-serif" font-size="10" fill="#B45309">Limpa &amp; Hati</text>

        <rect x="404" y="55" width="100" height="90" rx="10" fill="#FCE7F3" stroke="#EC4899"/>
        <text x="414" y="90" font-family="sans-serif" font-size="11" font-weight="bold" fill="#831843">Level 4: ???</text>
        <text x="414" y="110" font-family="sans-serif" font-size="10" fill="#9D174D">Rawa, Curah Hujan</text>
        <text x="414" y="124" font-family="sans-serif" font-size="10" fill="#9D174D">&amp; Vektor Anopheles</text>
      </svg>
    `,
    question_text:
      'Perhatikan diagram alir kajian terpadu penyakit malaria di atas. Jika seorang ahli epidemiologi mengkaji "Level 4" yang mencakup interaksi antara genangan air rawa (abiotik), suhu udara, kerapatan vegetasi, populasi nyamuk Anopheles, dan populasi manusia, maka Level 4 beserta strategi intervensi yang tepat adalah…',
    options: [
      { key: 'A', text: "Tingkat Organel Sel; intervensinya berupa pemberian antibiotik penghambat sintesis dinding sel peptidoglikan." },
      { key: 'B', text: "Tingkat Ekosistem; intervensinya berupa pengelolaan lingkungan fisik (drainase rawa) dan pengendalian biologis larva Anopheles dengan ikan pemakan jentik." },
      { key: 'C', text: "Tingkat Jaringan; intervensinya berupa pemberian transfusi trombosit di ruang operasi." },
      { key: 'D', text: "Tingkat Komunitas; intervensinya hanya mengukur keasaman air rawa tanpa memperhatikan organisme hidup." },
      { key: 'E', text: "Tingkat Populasi; intervensinya berupa penyuntingan sekuens basa DNA manusia dengan CRISPR." }
    ],
    correct_answer: 'B',
    hint: 'Level 4 melibatkan komponen biotik (manusia, nyamuk, vegetasi) sekaligus komponen abiotik (genangan air rawa, curah hujan, suhu).',
    explanation:
      'Interaksi timbal balik antara komunitas makhluk hidup (manusia, vektor nyamuk Anopheles, vegetasi) dengan faktor abiotik lingkungannya (air rawa, curah hujan, suhu) merupakan kajian tingkat Ekosistem. Intervensi tingkat ekosistem meliputi rekayasa habitat abiotik dan biokontrol predator alami.',
    tags: ['hots', 'diagram-svg', 'organisasi-kehidupan', 'epidemiologi']
  },
  {
    code: 'BIO10-T1-SUL-025',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#ECFDF5;color:#065F46;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Kelompok</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Perlakuan Ekstrak Bawang Putih</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Jumlah Sampel Cawan Petri</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Diameter Zona Hambat Bakteri (mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">A</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Akuades Steril (0%)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 cawan</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0,0 mm</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">B</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ekstrak 25%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 cawan</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">8,5 mm</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">C</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ekstrak 50%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 cawan</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">14,2 mm</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">D</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Kloramfenikol (Antibiotik Standar)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 cawan</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">22,0 mm</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Perhatikan tabel hasil uji daya hambat ekstrak bawang putih (Allium sativum) terhadap bakteri Staphylococcus aureus di atas. Apa fungsi dari Kelompok D (Kloramfenikol) serta kelemahan utama dari desain jumlah sampel pada tabel tersebut?',
    options: [
      { key: 'A', text: "Kelompok D adalah variabel bebas utama; kelemahannya adalah menggunakan akuades steril pada Kelompok A." },
      { key: 'B', text: "Kelompok D adalah kontrol positif untuk memvalidasi prosedur uji dan membandingkan efektivitas ekstrak terhadap obat standar; kelemahannya adalah tidak adanya ulangan (replikasi hanya 1 cawan per perlakuan) sehingga rawan galat acak." },
      { key: 'C', text: "Kelompok D berfungsi membunuh bawang putih; kelemahannya adalah bakteri Staphylococcus aureus tidak dapat tumbuh di cawan Petri." },
      { key: 'D', text: "Kelompok D adalah variabel pengganggu; kelemahannya adalah diameter zona hambat diukur dalam satuan milimeter." },
      { key: 'E', text: "Kelompok D adalah kontrol negatif; kelemahannya adalah terlalu banyak menggunakan konsentrasi ekstrak." }
    ],
    correct_answer: 'B',
    hint: 'Bedakan peran Akuades Steril (kontrol negatif) dengan Antibiotik Standar yang sudah pasti menghasilkan zona hambat (kontrol positif), lalu perhatikan kolom Jumlah Sampel.',
    explanation:
      'Dalam eksperimen mikrobiologi/farmakologi, Kelompok A (akuades) adalah kontrol negatif, sedangkan Kelompok D (kloramfenikol) adalah kontrol positif untuk memastikan metode uji bekerja dan menjadi acuan standar efektivitas. Kelemahan desainnya adalah jumlah sampel hanya 1 cawan tanpa pengulangan (replikasi minimal 3 kali / triplo) untuk uji signifikansi statistik.',
    tags: ['hots', 'kontrol-positif', 'replikasi-eksperimen', 'analisis-tabel']
  },
  {
    code: 'BIO10-T1-SUL-026',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBEB;border-radius:14px;border:1px solid #FDE68A;padding:8px;">
        <text x="20" y="25" font-family="sans-serif" font-size="13" font-weight="bold" fill="#78350F">Tata Letak Penyimpanan Bahan Kimia di Lemari Laboratorium Siswa</text>
        <rect x="25" y="45" width="220" height="125" rx="10" fill="#FEF2F2" stroke="#EF4444" stroke-width="2"/>
        <text x="40" y="68" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991B1B">Rak Atas (Dekat Jendela &amp; Pembakar)</text>
        <text x="40" y="92" font-family="sans-serif" font-size="11" fill="#7F1D1D">• Etanol 96% (Mudah Terbakar)</text>
        <text x="40" y="112" font-family="sans-serif" font-size="11" fill="#7F1D1D">• Aseton &amp; Dietil Eter</text>
        <text x="40" y="132" font-family="sans-serif" font-size="11" fill="#7F1D1D">• Kalium Permanganat (Oksidator Kuat)</text>

        <rect x="270" y="45" width="225" height="125" rx="10" fill="#EFF6FF" stroke="#3B82F6" stroke-width="2"/>
        <text x="285" y="68" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1E3A8A">Rak Bawah (Lantai Kayu Terbuka)</text>
        <text x="285" y="92" font-family="sans-serif" font-size="11" fill="#1E40AF">• Asam Sulfat Pekat H2SO4 (2,5 Liter)</text>
        <text x="285" y="112" font-family="sans-serif" font-size="11" fill="#1E40AF">• Natrium Hidroksida NaOH Pekat</text>
        <text x="285" y="132" font-family="sans-serif" font-size="11" fill="#1E40AF">• Disimpan berdampingan tanpa baki</text>
      </svg>
    `,
    question_text:
      'Seorang auditor keselamatan laboratorium (K3) menemukan tata letak penyimpanan bahan kimia seperti pada gambar di atas. Evaluasi risiko bahaya paling fatal beserta rekomendasi perbaikan yang wajib dilakukan adalah…',
    options: [
      { key: 'A', text: "Pelarut mudah terbakar (etanol, eter) yang disatukan dengan oksidator kuat di dekat sumber panas berisiko memicu kebakaran/ledakan, sedangkan asam kuat (H2SO4) dan basa kuat (NaOH) harus dipisahkan dalam baki sekunder tahan korosi." },
      { key: 'B', text: "Penyimpanan sudah sesuai standar internasional karena bahan dikelompokkan berdasarkan abjad." },
      { key: 'C', text: "Asam sulfat pekat dan natrium hidroksida pekat sebaiknya dicampur di dalam satu wadah besar untuk menghemat ruang rak." },
      { key: 'D', text: "Botol kaca asam sulfat pekat berukuran 2,5 liter seharusnya dipindahkan ke rak paling atas setinggi di atas kepala agar tidak dijangkau tikus." },
      { key: 'E', text: "Etanol 96% dan dietil eter seharusnya dipanaskan terlebih dahulu sebelum disimpan di lemari tertutup." }
    ],
    correct_answer: 'A',
    hint: 'Perhatikan interaksi segitiga api antara bahan Flammable + Oxidizer + Sumber Panas di Rak Atas, serta bahaya korosif Asam vs Basa di Rak Bawah.',
    explanation:
      'Terdapat dua pelanggaran K3 fatal: (1) Bahan mudah terbakar (etanol, aseton, eter) dilarang disimpan bersama oksidator kuat (KMnO4) apalagi di dekat sumber api/sinar matahari langsung karena berisiko meledak; (2) Asam kuat pekat dan basa kuat pekat tidak boleh disimpan berdampingan tanpa baki penampung sekunder (secondary containment) karena jika botol pecah akan bereaksi eksotermik hebat.',
    tags: ['hots', 'k3-laboratorium', 'svg', 'manajemen-bahan-kimia']
  },
  {
    code: 'BIO10-T1-SUL-027',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#F3E8FF;color:#581C87;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Rentang Tahun</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Dosis Pestisida Sintetik (mL/L)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Persentase Kematian Hama Wereng (%)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Populasi Laba-laba Predator Alami (ekor/m²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tahun ke-1</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">2,0 mL/L</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">94%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">18 ekor/m²</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tahun ke-3</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">4,0 mL/L</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">61%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">5 ekor/m²</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tahun ke-5</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">8,0 mL/L</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">22%</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">1 ekor/m²</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan data pemantauan agroekosistem sawah selama 5 tahun pada tabel di atas, terjadi penurunan drastis persentase kematian hama wereng meskipun dosis pestisida dinaikkan empat kali lipat, diikuti ledakan populasi wereng (resurgensi). Analisis biologis lintas tingkat organisasi yang paling tepat menjelaskan fenomena tersebut adalah…',
    options: [
      { key: 'A', text: "Pada tingkat populasi terjadi seleksi alam terhadap alel resisten pestisida pada wereng, sementara pada tingkat komunitas terjadi kepunahan lokal predator alami (laba-laba) sehingga kendali hayati runtuh." },
      { key: 'B', text: "Laba-laba predator mengalami mutasi menjadi hama pemakan daun padi pada tahun ke-5." },
      { key: 'C', text: "Pestisida berubah menjadi pupuk nitrogen yang menyuburkan tanaman padi sehingga wereng tidak lagi memakan padi." },
      { key: 'D', text: "Wereng coklat berkembang biak secara vegetatif melalui pembelahan biner ketika terpapar pestisida." },
      { key: 'E', text: "Dosis 8,0 mL/L terlalu encer dibandingkan dosis 2,0 mL/L sehingga tidak mampu menembus kutikula serangga." }
    ],
    correct_answer: 'A',
    hint: 'Hubungkan fenomena genetika populasi (wereng yang bertahan hidup mewariskan gen kebal) dengan interaksi rantai makanan di tingkat komunitas (hilangnya predator laba-laba).',
    explanation:
      'Penggunaan pestisida dosis tinggi secara terus-menerus memicu dua dampak: (1) Tingkat molekul/populasi: individu wereng yang memiliki mutasi gen resisten bertahan hidup dan berkembang biak mendominasi populasi; (2) Tingkat komunitas/ekosistem: musuh alami (laba-laba predator) ikut terbunuh (18 → 1 ekor/m²), menyebabkan resurgensi (ledakan populasi hama).',
    tags: ['hots', 'analisis-tabel', 'agroekosistem', 'resistensi-hama']
  },
  {
    code: 'BIO10-T1-SUL-028',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Di sebuah desa sekitar kawasan industri peleburan baterai bekas, warga melaporkan peningkatan kasus anemia kronis, gangguan saraf tepi pada anak-anak, serta kematian ikan di sungai. Tim peneliti gabungan diturunkan untuk melakukan investigasi menyeluruh mulai dari pemeriksaan enzim darah warga, analisis histopatologi insang ikan, hingga pemetaan rantai makanan akuatik.',
    question_text:
      'Berdasarkan ruang lingkup kajian biologi, pasangan cabang ilmu dan objek tingkat organisasi yang diteliti oleh tim investigasi tersebut adalah…',
    options: [
      { key: 'A', text: "Toksikologi & Biokimia (tingkat molekul: inhibisi enzim oleh timbal), Histologi (tingkat jaringan: kerusakan epitel insang), serta Ekotoksikologi (tingkat ekosistem: bioakumulasi logam berat)." },
      { key: 'B', text: "Fisiologi tumbuhan (tingkat jaringan), Entomologi (tingkat organ), serta Geologi (tingkat komunitas)." },
      { key: 'C', text: "Morfologi tumbuhan (tingkat organel), Genetika Mendel (tingkat populasi), serta Bryologi (tingkat jaringan)." },
      { key: 'D', text: "Taksonomi (tingkat bioma), Paleontologi (tingkat fosil), serta Astronomi (tingkat biosfer)." },
      { key: 'E', text: "Virologi (tingkat molekul), Mikologi (tingkat sel), serta Ornitologi (tingkat individu)." }
    ],
    correct_answer: 'A',
    hint: 'Peleburan baterai bekas melepaskan logam berat Timbal (Pb) yang menghambat enzim sintesis hemoglobin, merusak jaringan insang, dan terakumulasi di ekosistem sungai.',
    explanation:
      'Kasus keracunan logam berat timbal (Pb) mengintegrasikan: Biokimia/Toksikologi pada tingkat molekul (penghambatan enzim sintesis heme penyebab anemia), Histologi/Patologi pada tingkat jaringan (kerusakan jaringan epitel insang ikan), dan Ekologi/Ekotoksikologi pada tingkat ekosistem (biomagnifikasi di sungai).',
    tags: ['hots', 'integrasi-cabang-biologi', 'studi-kasus', 'toksikologi']
  },
  {
    code: 'BIO10-T1-SUL-029',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Seorang peneliti mengklaim menemukan minuman herbal X yang "100% menyembuhkan demam berdarah dalam 2 hari". Klaim tersebut didasarkan pada percobaan terhadap 5 orang pasien DBD yang diberi minuman herbal X sambil tetap mendapatkan perawatan infus cairan dan obat standar di rumah sakit, tanpa adanya kelompok pasien pembanding.',
    question_text:
      'Ditinjau dari prinsip metode ilmiah yang ketat, mengapa klaim peneliti tersebut TIDAK dapat diterima sebagai kesimpulan ilmiah yang sahih?',
    options: [
      { key: 'A', text: "Karena peneliti melakukan pengamatan di rumah sakit, bukan di hutan hujan tropis." },
      { key: 'B', text: "Karena seluruh pasien sembuh sehingga data kuantitatif tidak dapat dihitung." },
      { key: 'C', text: "Karena demam berdarah disebabkan oleh bakteri yang hanya bisa sembuh dalam waktu 30 hari." },
      { key: 'D', text: "Karena penelitian bidang kedokteran tidak boleh menggunakan metode ilmiah maupun hipotesis." },
      { key: 'E', text: "Karena ukuran sampel sangat kecil (5 orang), tidak ada kelompok kontrol (plasebo/perawatan standar saja), serta efek kesembuhan terbaur dengan terapi infus rumah sakit." }
    ],
    correct_answer: 'E',
    hint: 'Apakah peneliti dapat membedakan apakah pasien sembuh karena minuman herbal X, karena terapi infus rumah sakit, atau karena fase penyembuhan alami sistem imun?',
    explanation:
      'Klaim tersebut cacat secara metodologis karena: (1) Tanpa kelompok kontrol pembanding (pasien yang hanya menerima terapi standar tanpa herbal X), peneliti tidak dapat mengisolasi efek variabel bebas; (2) Terapi infus medis menjadi variabel perancu (confounding variable); (3) Ukuran sampel (n=5) terlalu kecil untuk generalisasi statistik.',
    tags: ['hots', 'evaluasi-klaim-ilmiah', 'uji-klinis', 'metode-ilmiah']
  },
  {
    code: 'BIO10-T1-SUL-030',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Pengembangan tanaman jagung Bt (Bacillus thuringiensis) yang tahan terhadap hama penggerek batang berhasil meningkatkan hasil panen petani hingga 35% dan mengurangi penyemprotan insektisida kimia. Namun, sejumlah ahli ekologi mengkhawatirkan serbuk sari jagung Bt yang terbawa angin dapat mematikan larva kupu-kupu Monarch non-target di sekitar lahan serta memicu munculnya populasi hama super yang kebal toksin Bt.',
    question_text:
      'Berdasarkan wacana di atas, sikap dan tindakan ilmiah yang paling bertanggung jawab secara bioetika dalam menyikapi dilema penerapan bioteknologi tersebut adalah…',
    options: [
      { key: 'A', text: "Memusnahkan seluruh kupu-kupu di sekitar lahan pertanian agar tidak terkena serbuk sari jagung Bt." },
      { key: 'B', text: "Mengabaikan peringatan ahli ekologi karena keuntungan ekonomi jangka pendek lebih penting daripada keseimbangan rantai makanan." },
      { key: 'C', text: "Melarang seluruh penelitian biologi molekuler dan kembali menggunakan pestisida kimia dosis tinggi." },
      { key: 'D', text: "Melakukan uji keamanan hayati (biosafety) jangka panjang, menerapkan zona penyangga (refugia) tanaman non-Bt untuk mencegah resistensi hama, dan memantau populasi serangga non-target secara berkala." },
      { key: 'E', text: "Menanam jagung Bt di seluruh kawasan hutan lindung tanpa perlu melakukan analisis mengenai dampak lingkungan." }
    ],
    correct_answer: 'D',
    hint: 'Bioetika menuntut keseimbangan antara pemanfaatan inovasi bioteknologi (kesejahteraan manusia) dan prinsip kehati-hatian ekologis (kelestarian lingkungan).',
    explanation:
      'Dalam perspektif bioetika dan manajemen agroekosistem, inovasi transgenik seperti jagung Bt harus disertai uji keamanan hayati (biosafety), penerapan strategi refugia (menanam jalur tanaman non-Bt di sekitar lahan agar alel rentan pada hama tetap terpelihara dan menghambat evolusi hama resisten), serta pemantauan serangga polinator non-target.',
    tags: ['hots', 'bioetika', 'bioteknologi', 'dampak-biologi']
  },
  {
    code: 'BIO10-T1-SUL-031',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Seorang peneliti mengamati sebuah sel tumbuhan menggunakan mikroskop cahaya. Pada perbesaran lensa okuler 10× dan lensa objektif 10×, diameter bidang pandang mikroskop terukur sebesar 1,6 mm (1.600 µm) dan tampak 8 sel epidermis berderet memanjang memenuhi garis tengah bidang pandang. Apabila peneliti memutar revolver ke lensa objektif 40×, berapakah perkiraan ukuran panjang satu sel epidermis dan berapa jumlah sel yang kini tampak dalam satu garis tengah bidang pandang?',
    options: [
      { key: 'A', text: "Panjang satu sel = 200 µm; jumlah sel yang tampak pada objektif 40× = 2 sel" },
      { key: 'B', text: "Panjang satu sel = 800 µm; jumlah sel yang tampak pada objektif 40× = 4 sel" },
      { key: 'C', text: "Panjang satu sel = 50 µm; jumlah sel yang tampak pada objektif 40× = 8 sel" },
      { key: 'D', text: "Panjang satu sel = 400 µm; jumlah sel yang tampak pada objektif 40× = 16 sel" },
      { key: 'E', text: "Panjang satu sel = 200 µm; jumlah sel yang tampak pada objektif 40× = 32 sel" }
    ],
    correct_answer: 'A',
    hint: 'Ukuran asli sel tidak berubah. Ketika perbesaran lensa objektif dinaikkan 4 kali lipat (dari 10× ke 40×), diameter bidang pandang menyempit menjadi 1/4 kalinya.',
    explanation:
      'Pada objektif 10×, diameter bidang pandang = 1.600 µm memuat 8 sel, sehingga panjang rata-rata 1 sel = 1.600 µm / 8 = 200 µm. Saat lensa objektif diganti ke 40× (perbesaran naik 4 kali), diameter bidang pandang menyempit 4 kali menjadi 1.600 µm / 4 = 400 µm. Maka jumlah sel yang tampak berderet adalah 400 µm / 200 µm = 2 sel.',
    tags: ['hots', 'mikroskop', 'perhitungan-mikrometri', 'praktikum']
  },
  {
    code: 'BIO10-T1-SUL-032',
    subject: 'Biologi Kelas X',
    topic_slug: 'ruang-lingkup',
    topic_name: 'Ruang Lingkup Biologi & Metode Ilmiah',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #CBD5E1;padding:8px;">
        <text x="20" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Kurva Pertumbuhan Populasi Paramecium caudatum dan Paramecium aurelia</text>
        <line x1="50" y1="170" x2="480" y2="170" stroke="#475569" stroke-width="1.5"/>
        <line x1="50" y1="35" x2="50" y2="170" stroke="#475569" stroke-width="1.5"/>
        <!-- P. aurelia (survives and reaches carrying capacity) -->
        <path d="M 55 165 C 120 155, 160 60, 260 52 L 460 50" fill="none" stroke="#10B981" stroke-width="3"/>
        <text x="275" y="44" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">P. aurelia (Kultur Campuran)</text>
        <!-- P. caudatum (declines due to competitive exclusion) -->
        <path d="M 55 165 C 110 150, 150 95, 200 100 C 260 108, 330 158, 450 168" fill="none" stroke="#EF4444" stroke-width="3" stroke-dasharray="6,4"/>
        <text x="235" y="130" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C">P. caudatum (Kultur Campuran)</text>
        <text x="220" y="190" font-family="sans-serif" font-size="11" fill="#334155">Waktu Inkubasi (Hari ke-0 s.d. Hari ke-16)</text>
      </svg>
    `,
    question_text:
      'Grafik di atas merepresentasikan eksperimen klasik G.F. Gause ketika dua spesies protozoa (Paramecium aurelia dan Paramecium caudatum) dikultur bersama dalam satu tabung dengan sumber makanan bakteri yang terbatas. Berdasarkan grafik tersebut, kesimpulan ilmiah dan tingkat organisasi biologi yang dikaji adalah…',
    options: [
      { key: 'A', text: "Tingkat Bioma; kedua spesies mengalami mutasi spontan menjadi alga multiseluler pada hari ke-16." },
      { key: 'B', text: "Tingkat Komunitas; terjadi prinsip eksklusi kompetitif (Competitive Exclusion Principle) di mana dua spesies dengan relung ekologi (niche) identik tidak dapat hidup berdampingan secara stabil karena P. aurelia lebih efisien memanfaatkan nutrisi." },
      { key: 'C', text: "Tingkat Seluler; Paramecium aurelia merupakan predator karnivora yang menelan Paramecium caudatum secara fagositosis." },
      { key: 'D', text: "Tingkat Populasi tunggal; kedua spesies bersimbiosis mutualisme sehingga keduanya mencapai daya dukung maksimum." },
      { key: 'E', text: "Tingkat Jaringan; kematian Paramecium caudatum disebabkan oleh suhu inkubator yang mendidih pada hari ke-6." }
    ],
    correct_answer: 'B',
    hint: 'Interaksi kompetisi terjadi antarpopulasi dua spesies berbeda (tingkat komunitas) yang memperebutkan sumber daya yang sama.',
    explanation:
      'Eksperimen Gause mengkaji interaksi antarpopulasi dua spesies berbeda (tingkat Komunitas). Grafik membuktikan Hukum Eksklusi Kompetitif Gause: ketika dua spesies menempati relung ekologi (niche) yang sama persis dengan sumber pakan terbatas, spesies yang lebih efisien bereproduksi (P. aurelia) akan mengeliminasi pesaingnya (P. caudatum).',
    tags: ['hots', 'interpretasi-grafik', 'svg', 'kompetisi-gause', 'komunitas']
  }
];
