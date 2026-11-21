import type { BiologyQuestionSeed } from '../types.ts';

export const topic5Bakteri: BiologyQuestionSeed[] = [
  // =========================================================================
  // 1. MUDAH (C1 - C2) : 10 SOAL (BIO10-T5-MUD-001 s.d. BIO10-T5-MUD-010)
  // =========================================================================
  {
    code: 'BIO10-T5-MUD-001',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Bakteri dikelompokkan sebagai organisme prokariotik karena memiliki ciri utama berupa…',
    options: [
      { key: 'A', text: 'Tidak memiliki dinding sel dan tidak memiliki ribosom' },
      { key: 'B', text: 'Materi genetik (DNA) terkonsentrasi di daerah nukleoid dan tidak diselubungi oleh membran inti sel (karioteka)' },
      { key: 'C', text: 'Memiliki mitokondria, badan Golgi, dan retikulum endoplasma yang lengkap' },
      { key: 'D', text: 'Hanya dapat bereproduksi di dalam sel inang yang hidup seperti virus' },
      { key: 'E', text: 'Seluruh anggotanya bersifat multiseluler dan membentuk jaringan sejati' }
    ],
    correct_answer: 'B',
    hint: 'Istilah "prokariotik" berasal dari kata Yunani "pro" (sebelum) dan "karyon" (inti/nukleus).',
    explanation:
      'Sel prokariotik (Bacteria dan Archaea) adalah sel yang tidak memiliki membran inti (karioteka), sehingga kromosom DNA sirkulernya terletak bebas di daerah sitoplasma yang disebut nukleoid, serta tidak memiliki organel bermembran (seperti mitokondria atau kloroplas).',
    tags: ['prokariotik', 'struktur-bakteri', 'konsep-dasar']
  },
  {
    code: 'BIO10-T5-MUD-002',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Komponen makromolekul khas penyusun dinding sel Eubacteria (bakteri sejati) yang memberikan bentuk kaku pada sel dan menjadi pembeda antara bakteri Gram-positif dan Gram-negatif adalah…',
    options: [
      { key: 'A', text: 'Selulosa dan hemiselulosa' },
      { key: 'B', text: 'Peptidoglikan (Murein)' },
      { key: 'C', text: 'Kitin (Chitin)' },
      { key: 'D', text: 'Kolesterol murni' },
      { key: 'E', text: 'Lignin dan suberin' }
    ],
    correct_answer: 'B',
    hint: 'Senyawa ini tersusun atas polimer gula amino (NAG dan NAM) yang diikat silang oleh rantai peptida pendek.',
    explanation:
      'Dinding sel Eubacteria tersusun atas peptidoglikan (murein). Bakteri Gram-positif memiliki lapisan peptidoglikan yang tebal, sedangkan bakteri Gram-negatif memiliki lapisan peptidoglikan tipis yang berada di ruang periplasma di bawah membran luar lipopolisakarida.',
    tags: ['peptidoglikan', 'dinding-sel-bakteri', 'struktur-bakteri']
  },
  {
    code: 'BIO10-T5-MUD-003',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Berdasarkan bentuk morfologi selnya, bakteri yang berbentuk bulat dan tersusun berantai memanjang seperti untaian kalung mutiara disebut…',
    options: [
      { key: 'A', text: 'Staphylococcus' },
      { key: 'B', text: 'Streptococcus' },
      { key: 'C', text: 'Sarcina' },
      { key: 'D', text: 'Streptobacillus' },
      { key: 'E', text: 'Spirillum' }
    ],
    correct_answer: 'B',
    hint: 'Kata "strepto" berarti berantai, sedangkan "coccus" berarti bulat (bola).',
    explanation:
      'Streptococcus adalah bakteri berbentuk bulat (kokus) yang membelah pada satu bidang dan tetap bergandengan membentuk rantai (contoh: Streptococcus lactis, Streptococcus pyogenes). Staphylococcus berbentuk bulat bergerombol seperti buah anggur, sedangkan Streptobacillus berbentuk batang berantai.',
    tags: ['bentuk-bakteri', 'streptococcus', 'morfologi-bakteri']
  },
  {
    code: 'BIO10-T5-MUD-004',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Untaian DNA sirkuler berukuran kecil di luar kromosom utama (ekstrakromosomal) pada sitoplasma bakteri yang sering membawa gen ketahanan terhadap antibiotik dan sering digunakan sebagai vektor dalam rekayasa genetika disebut…',
    options: [
      { key: 'A', text: 'Mesosom' },
      { key: 'B', text: 'Plasmid' },
      { key: 'C', text: 'Kapsul' },
      { key: 'D', text: 'Fimbria' },
      { key: 'E', text: 'Klorosom' }
    ],
    correct_answer: 'B',
    hint: 'Molekul DNA cincin kecil ini dapat berpindah dari satu bakteri ke bakteri lain saat peristiwa konjugasi.',
    explanation:
      'Plasmid adalah molekul DNA sirkuler ganda ekstrakromosomal yang dapat bereplikasi secara otonom di dalam sitoplasma bakteri. Plasmid (seperti R-plasmid) sering menyandi gen resistensi antibiotik dan dimanfaatkan sebagai vektor kloning gen.',
    tags: ['plasmid', 'struktur-bakteri', 'genetika-bakteri']
  },
  {
    code: 'BIO10-T5-MUD-005',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C1',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Cara reproduksi aseksual (vegetatif) utama pada bakteri untuk memperbanyak jumlah selnya secara cepat tanpa melalui pembentukan benang spindel mitosis adalah…',
    options: [
      { key: 'A', text: 'Konjugasi' },
      { key: 'B', text: 'Transduksi' },
      { key: 'C', text: 'Transformasi' },
      { key: 'D', text: 'Pembelahan biner (Binary fission)' },
      { key: 'E', text: 'Fragmentasi sporangium' }
    ],
    correct_answer: 'D',
    hint: 'Konjugasi, transduksi, dan transformasi adalah rekombinasi genetik (paraseksual) yang tidak menambah jumlah sel.',
    explanation:
      'Bakteri berkembang biak secara aseksual melalui Pembelahan Biner (amitosis / binary fission), di mana satu sel induk membelah langsung menjadi dua sel anakan yang identik secara genetik.',
    tags: ['pembelahan-biner', 'reproduksi-bakteri', 'konsep-dasar']
  },
  {
    code: 'BIO10-T5-MUD-006',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Berdasarkan jumlah dan letak bulu cambuk (flagela) pada tubuhnya, bakteri yang memiliki banyak flagela yang tersebar merata di seluruh permukaan dinding selnya disebut bakteri…',
    options: [
      { key: 'A', text: 'Atrik' },
      { key: 'B', text: 'Monotrik' },
      { key: 'C', text: 'Lofotrik' },
      { key: 'D', text: 'Amfitrik' },
      { key: 'E', text: 'Peritrik' }
    ],
    correct_answer: 'E',
    hint: 'Awalan "peri-" berarti di sekeliling atau di seluruh permukaan (contohnya pada Escherichia coli dan Salmonella typhi).',
    explanation:
      'Klasifikasi flagela bakteri: Atrik (tidak berflagela), Monotrik (1 flagela di satu ujung), Lofotrik (seberkas flagela di satu ujung), Amfitrik (flagela di kedua kutub ujung), dan Peritrik (flagela tersebar di seluruh permukaan tubuh).',
    tags: ['flagela-bakteri', 'peritrik', 'morfologi-bakteri']
  },
  {
    code: 'BIO10-T5-MUD-007',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Ketika kondisi lingkungan sangat ekstrem (kekeringan, suhu tinggi, atau miskin nutrisi), beberapa bakteri Gram-positif seperti Bacillus dan Clostridium membentuk struktur istirahat berdinding sangat tebal di dalam selnya untuk mempertahankan kelangsungan hidup yang disebut…',
    options: [
      { key: 'A', text: 'Kista amuba' },
      { key: 'B', text: 'Endospora' },
      { key: 'C', text: 'Zoospora' },
      { key: 'D', text: 'Konidiospora' },
      { key: 'E', text: 'Basidiospora' }
    ],
    correct_answer: 'B',
    hint: 'Struktur ini BUKAN alat perkembangbiakan untuk menambah jumlah individu, melainkan bentuk pertahanan diri dorman.',
    explanation:
      'Endospora adalah struktur dorman berdinding tebal (mengandung asam dipikolinat dan ion kalsium) yang dibentuk di dalam sel bakteri tertentu (seperti Bacillus anthracis dan Clostridium tetani) agar tahan terhadap panas mendidih, radiasi, dan desinfektan.',
    tags: ['endospora', 'pertahanan-bakteri', 'bacillus-clostridium']
  },
  {
    code: 'BIO10-T5-MUD-008',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Pasangan bakteri menguntungkan beserta produk pangan hasil fermentasinya yang tepat di bawah ini adalah…',
    options: [
      { key: 'A', text: 'Acetobacter xylinum – pembuatan Nata de Coco dari air kelapa' },
      { key: 'B', text: 'Mycobacterium tuberculosis – pembuatan keju dan mentega' },
      { key: 'C', text: 'Vibrio cholerae – pembuatan yoghurt dan kefir' },
      { key: 'D', text: 'Treponema pallidum – pembuatan cuka makan (asam asetat)' },
      { key: 'E', text: 'Salmonella typhi – pembuatan nata de soya dan yakult' }
    ],
    correct_answer: 'A',
    hint: 'Eliminasi bakteri patogen penyebab TBC, kolera, sifilis, dan tifus pada pilihan B sampai E.',
    explanation:
      'Acetobacter xylinum (Komagataeibacter xylinus) mengubah glukosa dalam air kelapa menjadi lapisan serat selulosa murni yang dikenal sebagai Nata de Coco. Pembuatan yoghurt menggunakan Lactobacillus bulgaricus dan Streptococcus thermophilus.',
    tags: ['peranan-bakteri', 'acetobacter-xylinum', 'bioteknologi-pangan']
  },
  {
    code: 'BIO10-T5-MUD-009',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Bakteri Rhizobium leguminosarum yang hidup bersimbiosis mutualisme membentuk bintil-bintil pada sistem perakaran tanaman kacang-kacangan (Leguminosae) memberikan manfaat besar di bidang pertanian, yaitu…',
    options: [
      { key: 'A', text: 'Menghasilkan racun untuk membunuh belalang pemakan daun' },
      { key: 'B', text: 'Menambat (fiksasi) gas nitrogen bebas (N2) dari udara menjadi senyawa amonium/nitrat yang menyuburkan tanah' },
      { key: 'C', text: 'Mengubah nitrat di dalam tanah kembali menjadi gas nitrogen ke atmosfer (denitrifikasi)' },
      { key: 'D', text: 'Mempercepat pembusukan akar tanaman kacang hingga layu' },
      { key: 'E', text: 'Menyerap seluruh cadangan air tanah sehingga tanaman lain kekeringan' }
    ],
    correct_answer: 'B',
    hint: 'Tumbuhan tidak dapat menyerap gas N2 langsung dari udara tanpa bantuan enzim nitrogenase milik bakteri fiksasi nitrogen.',
    explanation:
      'Rhizobium leguminosarum bersimbiosis pada bintil akar tanaman polong-polongan (Leguminosae) untuk memfiksasi N2 bebas dari udara menjadi ion amonium (NH4+) yang dapat langsung dimanfaatkan tanaman untuk sintesis asam amino dan protein.',
    tags: ['rhizobium', 'fiksasi-nitrogen', 'manfaat-pertanian']
  },
  {
    code: 'BIO10-T5-MUD-010',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'mudah',
    cognitive_level: 'C2',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Bakteri patogen berbentuk seperti tanda koma (vibrio) yang menginfeksi saluran usus halus manusia melalui air atau makanan tercemar dan menyebabkan diare hebat berwujud seperti air cucian beras adalah…',
    options: [
      { key: 'A', text: 'Clostridium tetani' },
      { key: 'B', text: 'Vibrio cholerae' },
      { key: 'C', text: 'Neisseria gonorrhoeae' },
      { key: 'D', text: 'Diplococcus pneumoniae' },
      { key: 'E', text: 'Bacillus anthracis' }
    ],
    correct_answer: 'B',
    hint: 'Nama genus bakteri ini sama dengan nama bentuk morfologinya (koma/vibrio) dan menyebabkan penyakit kolera.',
    explanation:
      'Vibrio cholerae adalah bakteri Gram-negatif berbentuk batang melengkung seperti tanda koma dengan flagela monotrik yang menghasilkan enterotoksin kolera di usus halus, memicu keluarnya cairan dan elektrolit secara masif (diare kolera).',
    tags: ['vibrio-cholerae', 'bakteri-patogen', 'penyakit-bakteri']
  },

  // =========================================================================
  // 2. MEDIUM (C3) : 10 SOAL (BIO10-T5-MED-011 s.d. BIO10-T5-MED-020)
  // =========================================================================
  {
    code: 'BIO10-T5-MED-011',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam prosedur Pewarnaan Gram (Gram Staining) yang menggunakan urutan reagen Kristal Violet (ungu), Lugol (iodin), Alkohol 95% (pemucat), dan Safranin (merah), mengapa bakteri Gram-positif tampak berwarna UNGU sedangkan bakteri Gram-negatif tampak berwarna MERAH MUDA di bawah mikroskop?',
    options: [
      { key: 'A', text: 'Karena bakteri Gram-positif menolak zat warna kristal violet dan hanya menyerap safranin di akhir pewarnaan' },
      { key: 'B', text: 'Karena dinding peptidoglikan bakteri Gram-positif sangat tebal sehingga mengikat kompleks Kristal Violet-Iodin dan tidak luntur saat dibilas alkohol, sedangkan pada Gram-negatif alkohol melarutkan membran luar lipid dan melunturkan warna ungu sehingga sel menyerap warna merah Safranin' },
      { key: 'C', text: 'Karena bakteri Gram-negatif memiliki lapisan peptidoglikan sepuluh kali lebih tebal daripada bakteri Gram-positif' },
      { key: 'D', text: 'Karena bakteri Gram-positif memiliki klorofil ungu untuk berfotosintesis di bawah cahaya mikroskop' },
      { key: 'E', text: 'Karena alkohol 95% bereaksi dengan safranin menghasilkan warna biru tua pada inti sel bakteri' }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan efek pencucian alkohol 95% terhadap pori-pori peptidoglikan tebal (Gram +) vs membran luar lipid dan peptidoglikan tipis (Gram -).',
    explanation:
      'Pada bakteri Gram-positif, pembilasan alkohol mendehidrasi lapisan peptidoglikan yang tebal sehingga pori-porinya mengecil dan menjebak kompleks Kristal Violet-Iodin (tetap ungu). Pada bakteri Gram-negatif, alkohol melarutkan membran luar lipopolisakarida dan peptidoglikannya yang tipis gagal menahan warna ungu (menjadi bening), sehingga saat diberi pewarna tandingan Safranin akan berwarna merah/merah muda.',
    tags: ['pewarnaan-gram', 'gram-positif-negatif', 'praktikum-mikrobiologi']
  },
  {
    code: 'BIO10-T5-MED-012',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Bakteri dapat melakukan rekombinasi genetik (pertukaran materi genetik) melalui tiga mekanisme paraseksual. Perbedaan yang tepat antara Transformasi, Transduksi, dan Konjugasi adalah…',
    options: [
      { key: 'A', text: 'Transformasi = perpindahan DNA melalui jembatan pilus seks; Transduksi = penyerapan DNA bebas dari lingkungan; Konjugasi = diperantarai bakteriofag' },
      { key: 'B', text: 'Transformasi = penyerapan fragmen DNA bebas dari lingkungan oleh sel kompeten; Transduksi = pemindahan DNA antar-bakteri melalui perantara virus bakteriofag; Konjugasi = pemindahan plasmid DNA melalui kontak langsung jembatan pilus seks' },
      { key: 'C', text: 'Ketiga mekanisme tersebut diawali dengan peleburan sel sperma dan sel ovum bakteri' },
      { key: 'D', text: 'Transformasi hanya terjadi pada virus, sedangkan Konjugasi hanya terjadi pada tumbuhan lumut' },
      { key: 'E', text: 'Konjugasi selalu menghasilkan empat sel anakan haploid melalui pembelahan meiosis' }
    ],
    correct_answer: 'B',
    hint: 'Ingat kata kuncinya: Transformasi = fragmen DNA bebas di medium; Transduksi = kurir virus/faga; Konjugasi = jembatan kontak pilus seks.',
    explanation:
      'Tiga cara rekombinasi genetik bakteri: (1) Transformasi: sel bakteri menyerap fragmen DNA telanjang dari medium sekitarnya (seperti eksperimen Griffith pada Pneumococcus); (2) Transduksi: DNA bakteri dipindahkan ke bakteri lain oleh bakteriofag; (3) Konjugasi: transfer plasmid (misal faktor F) secara langsung dari sel donor (F+) ke resipien (F-) melalui jembatan pilus seks.',
    tags: ['rekombinasi-genetik', 'transformasi-transduksi-konjugasi', 'bakteri']
  },
  {
    code: 'BIO10-T5-MED-013',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Dalam siklus biogeokimia nitrogen di dalam tanah, amonia (NH3 / NH4+) hasil penguraian sisa organisme harus diubah terlebih dahulu menjadi nitrit (NO2-) dan selanjutnya menjadi nitrat (NO3-) agar dapat diserap secara optimal oleh perakaran tanaman.',
    question_text:
      'Pasangan bakteri kemoautotrof nitrifikasi yang berperan mengubah amonia menjadi nitrit (nitritasi) dan mengubah nitrit menjadi nitrat (nitratasi) secara berurutan adalah…',
    options: [
      { key: 'A', text: 'Nitrosomonas / Nitrosococcus (nitritasi) dan Nitrobacter (nitratasi)' },
      { key: 'B', text: 'Nitrobacter (nitritasi) dan Nitrosomonas (nitratasi)' },
      { key: 'C', text: 'Pseudomonas denitrificans dan Clostridium tetani' },
      { key: 'D', text: 'Lactobacillus bulgaricus dan Acetobacter aceti' },
      { key: 'E', text: 'Escherichia coli dan Treponema pallidum' }
    ],
    correct_answer: 'A',
    hint: 'Ingat awalan "Nitroso-" (mengubah amonia menjadi ion nitros/nitrit NO2-) dan "Nitro-" (mengubah nitrit menjadi nitrat NO3-).',
    explanation:
      'Proses Nitrifikasi berlangsung dua tahap aerobik oleh bakteri kemoautotrof: (1) Nitritasi: oksidasi amonia (NH3) menjadi nitrit (NO2-) oleh Nitrosomonas dan Nitrosococcus; (2) Nitratasi: oksidasi nitrit (NO2-) menjadi nitrat (NO3-) oleh Nitrobacter.',
    tags: ['siklus-nitrogen', 'nitrifikasi', 'nitrosomonas-nitrobacter', 'kemoautotrof']
  },
  {
    code: 'BIO10-T5-MED-014',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Bakteri Clostridium tetani hanya dapat tumbuh dan membelah diri di dalam jaringan luka tusuk yang dalam dan tertutup (miskin oksigen), serta akan mati apabila terpapar gas oksigen bebas (O2) di udara terbuka. Berdasarkan kebutuhan oksigen untuk respirasinya, Clostridium tetani tergolong bakteri…',
    options: [
      { key: 'A', text: 'Aerob obligat' },
      { key: 'B', text: 'Anaerob obligat' },
      { key: 'C', text: 'Anaerob fakultatif' },
      { key: 'D', text: 'Mikroaerofilik' },
      { key: 'E', text: 'Fotoautotrof aerob' }
    ],
    correct_answer: 'B',
    hint: 'Oksigen justru bersifat toksik bagi bakteri ini karena tidak memiliki enzim katalase dan superoksida dismutase (SOD).',
    explanation:
      'Bakteri anaerob obligat (seperti Clostridium tetani dan Clostridium botulinum) mutlak hidup tanpa oksigen. Kehadiran O2 bebas menghasilkan radikal superoksida dan hidrogen peroksida yang mematikan selnya karena bakteri ini tidak memiliki enzim superoksida dismutase dan katalase. Oleh karena itu, luka tusuk paku berkarat harus dibuka dan dibersihkan dengan H2O2.',
    tags: ['anaerob-obligat', 'clostridium-tetani', 'respirasi-bakteri']
  },
  {
    code: 'BIO10-T5-MED-015',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Kelompok Archaebacteria (Domain Archaea) mampu hidup di habitat ekstrem yang mematikan bagi organisme lain. Pasangan kelompok Archaea beserta habitat ekstremnya yang tepat adalah…',
    options: [
      { key: 'A', text: 'Metanogen (rawa anaerobik & rumen sapi penghasil CH4), Halofil ekstrem (Danau Laut Mati berkadar garam tinggi), dan Termoasidofil (kawah hidrotermal vulkanik bersuhu >80°C dan pH asam)' },
      { key: 'B', text: 'Metanogen (permukaan daun hijau kaya oksigen), Halofil (air hujan tawar), dan Termoasidofil (lemari pendingin 0°C)' },
      { key: 'C', text: 'Metanogen (kawah gunung api), Halofil (usus halus manusia), dan Termoasidofil (air kelapa)' },
      { key: 'D', text: 'Ketiga kelompok Archaea tersebut hanya dapat hidup sebagai parasit di dalam darah burung' },
      { key: 'E', text: 'Archaea tidak dapat bertahan hidup pada suhu di atas 30°C maupun kadar garam di atas 1%' }
    ],
    correct_answer: 'A',
    hint: 'Perhatikan arti kata "metano-" (gas metana CH4), "halo-" (garam), serta "termo-asido-" (panas dan asam).',
    explanation:
      'Tiga kelompok utama Archaea ekstremofil: (1) Metanogen (Methanobacterium): anaerob obligat pereduksi CO2 menjadi CH4 di lumpur rawa dan saluran cerna ruminansia; (2) Halofil ekstrem (Halobacterium): hidup pada salinitas sangat tinggi (20–30% NaCl); (3) Termoasidofil (Sulfolobus): hidup di mata air panas belerang bersuhu 80–105°C dan pH < 2.',
    tags: ['archaebacteria', 'ekstremofil', 'metanogen-halofil-termoasidofil']
  },
  {
    code: 'BIO10-T5-MED-016',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Satu sel bakteri Escherichia coli ditempatkan pada medium nutrisi optimum dengan waktu generasi (waktu pembelahan biner) setiap 20 menit sekali. Jika pembelahan berlangsung eksponensial tanpa kematian sel, berapakah jumlah sel bakteri yang terbentuk setelah inkubasi selama 2 jam?',
    options: [
      { key: 'A', text: '6 sel' },
      { key: 'B', text: '12 sel' },
      { key: 'C', text: '32 sel' },
      { key: 'D', text: '64 sel' },
      { key: 'E', text: '128 sel' }
    ],
    correct_answer: 'D',
    hint: '2 jam = 120 menit. Hitung berapa kali pembelahan (n = 120 / 20), lalu gunakan rumus pembelahan biner N = N0 × 2ⁿ.',
    explanation:
      'Dalam waktu 2 jam (120 menit) dengan waktu generasi 20 menit, bakteri mengalami pembelahan sebanyak n = 120 / 20 = 6 kali. Jumlah sel akhir N = N0 × 2ⁿ = 1 × 2⁶ = 64 sel bakteri.',
    tags: ['perhitungan-pembelahan-biner', 'waktu-generasi', 'pertumbuhan-bakteri']
  },
  {
    code: 'BIO10-T5-MED-017',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Cyanobacteria (seperti Anabaena azollae dan Nostoc) memiliki kemampuan unik di dunia prokariota karena mampu melakukan dua proses biokimia penting sekaligus di dalam koloninya, yaitu…',
    options: [
      { key: 'A', text: 'Fotosintesis oksigenik (pada sel vegetatif berklorofil-a) dan Fiksasi nitrogen N2 (pada sel khusus berdinding tebal bernama Heterokista)' },
      { key: 'B', text: 'Kemosintesis besi dan Pembentukan endospora tahan api' },
      { key: 'C', text: 'Fagositosis amuba dan Fermentasi alkohol' },
      { key: 'D', text: 'Denitrifikasi tanah dan Produksi toksin botulinum' },
      { key: 'E', text: 'Transkripsi balik RNA dan Pembelahan meiosis' }
    ],
    correct_answer: 'A',
    hint: 'Anabaena azollae bersimbiosis dengan paku air Azolla pinnata di sawah sebagai pupuk hijau alami.',
    explanation:
      'Cyanobacteria berfilamen seperti Anabaena memiliki sel vegetatif yang mengandung klorofil-a dan fikosianin untuk fotosintesis penghasil O2, serta sel khusus berdinding tebal bernama Heterokista (heterocyst) yang menjaga kondisi anaerobik agar enzim nitrogenase dapat menambat N2 bebas dari udara.',
    tags: ['cyanobacteria', 'anabaena', 'heterokista', 'fiksasi-nitrogen']
  },
  {
    code: 'BIO10-T5-MED-018',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Dalam pengolahan susu segar di industri, metode Pasteurisasi (pemanasan pada suhu ~72°C selama 15 detik lalu segera didinginkan) lebih dipilih dibandingkan merebus susu hingga mendidih lama pada suhu >120°C karena…',
    options: [
      { key: 'A', text: 'Pasteurisasi bertujuan mematikan bakteri patogen vegetatif (seperti Mycobacterium bovis, Salmonella, dan Listeria) tanpa merusak protein, vitamin, maupun cita rasa alami susu' },
      { key: 'B', text: 'Suhu 72°C berfungsi untuk mempercepat pertumbuhan bakteri pembusuk di dalam kemasan susu' },
      { key: 'C', text: 'Merebus susu pada suhu 120°C justru membuat bakteri patogen menjadi semakin kebal' },
      { key: 'D', text: 'Pasteurisasi mengubah laktosa susu menjadi alkohol murni' },
      { key: 'E', text: 'Susu yang dipasteurisasi tidak perlu disimpan di tempat dingin meskipun kemasannya sudah dibuka selama sebulan' }
    ],
    correct_answer: 'A',
    hint: 'Pemanasan terlalu tinggi merusak nilai gizi protein kasein/whey dan vitamin susu.',
    explanation:
      'Pasteurisasi (dikembangkan oleh Louis Pasteur; metode HTST 72°C selama 15 detik atau LTLT 63°C selama 30 menit) dirancang untuk membunuh sel vegetatif bakteri patogen berbahaya dan menekan jumlah mikroba pembusuk, sambil tetap mempertahankan struktur protein, vitamin, dan kualitas organoleptik susu.',
    tags: ['pasteurisasi', 'pengawetan-pangan', 'mikrobiologi-industri']
  },
  {
    code: 'BIO10-T5-MED-019',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'text',
    stimulus_content:
      'Ketika terjadi kecelakaan tumpahan minyak mentah (crude oil) dari kapal tanker di perairan laut, tim pemulihan lingkungan menyebarkan biakan bakteri Pseudomonas putida dan Alcanivorax borkumensis beserta nutrisi fosfat-nitrogen untuk menguraikan rantai hidrokarbon minyak menjadi CO2 dan H2O yang tidak berbahaya.',
    question_text:
      'Teknik pemanfaatan mikroorganisme untuk membersihkan dan menetralkan polutan pencemar lingkungan seperti pada kasus di atas disebut…',
    options: [
      { key: 'A', text: 'Biomagnifikasi' },
      { key: 'B', text: 'Bioremediasi' },
      { key: 'C', text: 'Eutrofikasi' },
      { key: 'D', text: 'Bioleaching' },
      { key: 'E', text: 'Pasteurisasi' }
    ],
    correct_answer: 'B',
    hint: 'Gabungan kata "bio" (makhluk hidup) dan "remediate" (memulihkan/menyembuhkan lingkungan).',
    explanation:
      'Bioremediasi adalah penggunaan mikroorganisme (seperti bakteri hidrokarbonoklastik Pseudomonas putida) atau enzimnya untuk mendegradasi dan mendetoksifikasi limbah pencemar lingkungan (tumpahan minyak bumi, pestisida, limbah organik) menjadi senyawa ramah lingkungan.',
    tags: ['bioremediasi', 'pseudomonas-putida', 'manfaat-lingkungan']
  },
  {
    code: 'BIO10-T5-MED-020',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'medium',
    cognitive_level: 'C3',
    stimulus_type: 'none',
    stimulus_content: null,
    question_text:
      'Bakteri Streptococcus pneumoniae galur yang memiliki lapisan Kapsul lendir polisakarida tebal di bagian luar dinding selnya bersifat virulen (menyebabkan pneumonia mematikan), sedangkan galur mutan yang tidak berkapsul bersifat tidak ganas (avirulen). Mengapa keberadaan Kapsul sangat meningkatkan keganasan (virulensi) bakteri patogen di dalam tubuh inang?',
    options: [
      { key: 'A', text: 'Karena kapsul berfungsi sebagai alat gerak aktif untuk berenang melawan aliran darah' },
      { key: 'B', text: 'Karena lapisan kapsul yang licin melindungi bakteri dari pengenalan dan penelanan (fagositosis) oleh sel darah putih (leukosit makrofag/neutrofil) sistem imun inang' },
      { key: 'C', text: 'Karena kapsul mengandung ribosom tambahan untuk mensintesis DNA manusia' },
      { key: 'D', text: 'Karena kapsul merupakan organ fotosintesis bakteri di dalam jaringan paru-paru' },
      { key: 'E', text: 'Karena kapsul berfungsi sebagai jembatan konjugasi antar-sel darah merah' }
    ],
    correct_answer: 'B',
    hint: 'Ingat eksperimen Frederick Griffith mengenai bakteri Pneumococcus galur S (Smooth/berkapsul) vs galur R (Rough/tak berkapsul).',
    explanation:
      'Kapsul (lapisan glikokaliks padat dari polisakarida/polipeptida di luar dinding sel) merupakan faktor virulensi utama karena permukaannya yang licin dan bermuatan menghalangi opsonisasi serta mencegah sel fagosit (makrofag dan neutrofil) menelan dan menghancurkan bakteri tersebut.',
    tags: ['kapsul-bakteri', 'faktor-virulensi', 'fagositosis']
  },

  // =========================================================================
  // 3. SULIT / HOTS (C4 - C5) : 12 SOAL (BIO10-T5-SUL-021 s.d. BIO10-T5-SUL-032)
  //    (Termasuk 6 soal dengan stimulus_type: 'table' dan 'svg')
  // =========================================================================
  {
    code: 'BIO10-T5-SUL-021',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 205" width="100%" height="205" xmlns="http://www.w3.org/2000/svg" style="background:#F8FAFC;border-radius:14px;border:1px solid #CBD5E1;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0F172A">Kurva Pertumbuhan Populasi Bakteri dalam Kultur Sistem Tertutup (Batch Culture)</text>
        <line x1="55" y1="172" x2="485" y2="172" stroke="#475569" stroke-width="1.5"/>
        <line x1="55" y1="35" x2="55" y2="172" stroke="#475569" stroke-width="1.5"/>
        <!-- 4 Phases Curve -->
        <path d="M 55 150 L 125 150 C 160 150, 185 52, 240 50 L 365 50 L 470 145" fill="none" stroke="#2563EB" stroke-width="3.5"/>
        <!-- Phase Dividers -->
        <line x1="125" y1="35" x2="125" y2="172" stroke="#94A3B8" stroke-dasharray="4,4"/>
        <line x1="240" y1="35" x2="240" y2="172" stroke="#94A3B8" stroke-dasharray="4,4"/>
        <line x1="365" y1="35" x2="365" y2="172" stroke="#94A3B8" stroke-dasharray="4,4"/>

        <text x="68" y="135" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A">Fase I</text>
        <text x="64" y="164" font-family="sans-serif" font-size="9" fill="#475569">(Lag/Adaptasi)</text>

        <text x="155" y="95" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">Fase II</text>
        <text x="148" y="110" font-family="sans-serif" font-size="9" fill="#065F46">(Log/Eksponensial)</text>

        <text x="278" y="44" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B45309">Fase III</text>
        <text x="275" y="68" font-family="sans-serif" font-size="9" fill="#92400E">(Stasioner)</text>

        <text x="395" y="85" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C">Fase IV</text>
        <text x="392" y="100" font-family="sans-serif" font-size="9" fill="#991B1B">(Kematian)</text>

        <text x="210" y="192" font-family="sans-serif" font-size="11" fill="#334155">Waktu Inkubasi (Jam)</text>
        <text x="16" y="135" font-family="sans-serif" font-size="10" fill="#334155" transform="rotate(-90 16,135)">Log Jumlah Sel Hidup</text>
      </svg>
    `,
    question_text:
      'Berdasarkan grafik kurva pertumbuhan bakteri pada kultur tertutup di atas, pada fase manakah bakteri PALING SENSITIF (paling mudah dimatikan) oleh pemberian antibiotik Penisilin (yang bekerja menghambat pembentukan ikatan silang peptidoglikan dinding sel baru), serta apa yang terjadi pada Fase III?',
    options: [
      { key: 'A', text: 'Paling sensitif pada Fase IV (Kematian); pada Fase III seluruh bakteri berhenti bernapas dan berubah menjadi virus.' },
      { key: 'B', text: 'Paling sensitif pada Fase II (Logaritmik/Eksponensial) karena bakteri sedang aktif membelah biner dan mensintesis dinding sel peptidoglikan baru dengan laju maksimum; pada Fase III laju pembelahan sel sama dengan laju kematian sel akibat menipisnya nutrisi dan akumulasi limbah metabolit.' },
      { key: 'C', text: 'Paling sensitif pada Fase I (Lag) karena bakteri belum melakukan sintesis RNA maupun enzim.' },
      { key: 'D', text: 'Paling sensitif pada Fase III (Stasioner) karena pada fase tersebut bakteri sama sekali tidak membentuk endospora maupun metabolit sekunder.' },
      { key: 'E', text: 'Penisilin bekerja sama efektifnya pada semua fase karena langsung membakar DNA bakteri tanpa dipengaruhi pembelahan sel.' }
    ],
    correct_answer: 'B',
    hint: 'Penisilin hanya merusak dinding sel yang sedang aktif disintesis/dibangun saat sel membelah diri.',
    explanation:
      'Antibiotik golongan beta-laktam (Penisilin) menghambat enzim transpeptidase saat sintesis peptidoglikan dinding sel baru. Oleh karena itu, bakteri paling rentan terhadap Penisilin pada Fase II (Logaritmik/Eksponensial) ketika pembelahan biner dan sintesis dinding sel berlangsung sangat cepat. Pada Fase III (Stasioner), nutrisi menipis dan limbah toksik menumpuk sehingga laju pembelahan = laju kematian (N hidup konstan) serta bakteri mulai membentuk endospora atau metabolit sekunder.',
    tags: ['hots', 'kurva-pertumbuhan-bakteri', 'svg', 'mekanisme-penisilin']
  },
  {
    code: 'BIO10-T5-SUL-022',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#FEF2F2;color:#991B1B;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Jenis Antibiotik</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Standar Resisten (&le; mm)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Standar Sensitif (&ge; mm)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Zona Hambat pada Isolat Pasien (mm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ampisilin (10 µg)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&le; 13 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&ge; 17 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-weight:bold;color:#DC2626;">6,0 mm (Tidak ada zona)</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Tetrasiklin (30 µg)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&le; 14 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&ge; 19 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-weight:bold;color:#DC2626;">9,5 mm</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Siprofloksasin (5 µg)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&le; 15 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&ge; 21 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-weight:bold;color:#D97706;">17,0 mm</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Meropenem (10 µg)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&le; 19 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&ge; 23 mm</td>
            <td style="padding:8px;border:1px solid #CBD5E1;font-weight:bold;color:#059669;">28,5 mm</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Tabel di atas merupakan hasil uji kepekaan antibiotik metode difusi cakram Kirby-Bauer terhadap isolat bakteri Klebsiella pneumoniae dari pasien infeksi saluran kemih yang sering mengonsumsi antibiotik warung tanpa resep dokter dan selalu menghentikan minum obat setelah 1 hari. Berdasarkan data tabel tersebut, rekomendasi klinis dan penjelasan genetika bakteri yang paling tepat adalah…',
    options: [
      { key: 'A', text: 'Berikan Ampisilin karena zona hambat 6,0 mm menunjukkan obat bekerja paling kuat di sekitar cakram.' },
      { key: 'B', text: 'Isolat bakteri telah mengalami Multidrug Resistance (resisten terhadap Ampisilin dan Tetrasiklin, serta intermediet terhadap Siprofloksasin) akibat seleksi galur pembawa R-plasmid; hanya Meropenem (28,5 mm ≥ 23 mm) yang masih berstatus Sensitif dan efektif digunakan.' },
      { key: 'C', text: 'Berikan Tetrasiklin karena nilai 9,5 mm lebih kecil dari batas resisten 14 mm sehingga bakteri sangat peka.' },
      { key: 'D', text: 'Keempat antibiotik tidak boleh diberikan karena semakin besar diameter zona hambat berarti bakteri semakin kebal.' },
      { key: 'E', text: 'Hentikan semua pengobatan karena kebiasaan minum antibiotik 1 hari saja justru mencegah terjadinya mutasi pada bakteri.' }
    ],
    correct_answer: 'B',
    hint: 'Bandingkan kolom terakhir (Zona Hambat Isolat Pasien) terhadap batas "Standar Sensitif (≥ mm)" pada setiap baris antibiotik!',
    explanation:
      'Pada uji Kirby-Bauer, suatu antibiotik hanya dinyatakan Sensitif (efektif membunuh bakteri) jika diameter zona beningnya melampaui ambang Standar Sensitif: Ampisilin (6,0 ≤ 13 → Resisten), Tetrasiklin (9,5 ≤ 14 → Resisten), Siprofloksasin (17,0 berada di antara 15 dan 21 → Intermediet), dan hanya Meropenem (28,5 ≥ 23 → Sensitif). Penggunaan antibiotik tidak tuntas memicu seleksi alam bakteri pembawa R-plasmid (Multidrug Resistance).',
    tags: ['hots', 'antibiogram-kirby-bauer', 'resistensi-antibiotik', 'analisis-tabel']
  },
  {
    code: 'BIO10-T5-SUL-023',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#ECFDF5;border-radius:14px;border:1px solid #A7F3D0;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#064E3B">Posisi Pertumbuhan 4 Jenis Bakteri dalam Tabung Medium Agar Tegak Thioglycollate</text>
        <!-- Tube 1: Obligate Aerobe -->
        <rect x="35" y="45" width="70" height="115" rx="8" fill="#FFF" stroke="#059669" stroke-width="2"/>
        <rect x="37" y="48" width="66" height="22" fill="#10B981"/>
        <text x="48" y="176" font-family="sans-serif" font-size="11" font-weight="bold" fill="#064E3B">Tabung P</text>

        <!-- Tube 2: Obligate Anaerobe -->
        <rect x="155" y="45" width="70" height="115" rx="8" fill="#FFF" stroke="#059669" stroke-width="2"/>
        <rect x="157" y="135" width="66" height="22" fill="#EF4444"/>
        <text x="168" y="176" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991B1B">Tabung Q</text>

        <!-- Tube 3: Facultative Anaerobe -->
        <rect x="275" y="45" width="70" height="115" rx="8" fill="#FFF" stroke="#059669" stroke-width="2"/>
        <rect x="277" y="48" width="66" height="24" fill="#3B82F6"/>
        <circle cx="295" cy="90" r="3" fill="#3B82F6"/><circle cx="320" cy="105" r="3" fill="#3B82F6"/>
        <circle cx="305" cy="125" r="3" fill="#3B82F6"/><circle cx="290" cy="145" r="3" fill="#3B82F6"/>
        <text x="288" y="176" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1E3A8A">Tabung R</text>

        <!-- Tube 4: Microaerophile -->
        <rect x="395" y="45" width="70" height="115" rx="8" fill="#FFF" stroke="#059669" stroke-width="2"/>
        <rect x="397" y="74" width="66" height="16" fill="#F59E0B"/>
        <text x="408" y="176" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E">Tabung S</text>
      </svg>
    `,
    question_text:
      'Medium cair Thioglycollate memiliki gradien konsentrasi oksigen dari permukaan atas (kaya O2) hingga dasar tabung (0% O2 / anaerob). Berdasarkan pola zonasi pertumbuhan bakteri pada Tabung P, Q, R, dan S di atas, penjelasan fisiologi respirasi untuk bakteri pada "Tabung R" adalah…',
    options: [
      { key: 'A', text: 'Bakteri Tabung R adalah Anaerob Obligat yang mati jika terkena oksigen di permukaan atas.' },
      { key: 'B', text: 'Bakteri Tabung R adalah Anaerob Fakultatif (seperti Escherichia coli): dapat tumbuh di seluruh bagian tabung (baik ada maupun tanpa O2), namun tumbuh paling rapat di permukaan atas karena respirasi aerob menghasilkan ATP jauh lebih banyak (~36–38 ATP) dibandingkan fermentasi/anaerob.' },
      { key: 'C', text: 'Bakteri Tabung R adalah Aerob Obligat yang sama sekali tidak mampu bertahan hidup di dasar tabung.' },
      { key: 'D', text: 'Bakteri Tabung R adalah Mikroaerofil yang hanya mampu hidup pada kadar oksigen tipis di bawah permukaan.' },
      { key: 'E', text: 'Tabung R terkontaminasi oleh empat spesies virus yang berbeda.' }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan bahwa pada Tabung R koloni tersebar dari atas sampai dasar tabung, tetapi paling padat di permukaan atas yang kaya oksigen.',
    explanation:
      'Analisis Tabung Thioglycollate: Tabung P (hanya di puncak atas) = Aerob Obligat; Tabung Q (hanya di dasar bebas O2) = Anaerob Obligat; Tabung R (tumbuh di seluruh tabung namun terkonsentrasi rapat di atas) = Anaerob Fakultatif (mengutamakan respirasi aerob karena menghasilkan ATP paling besar, namun tetap bisa melakukan fermentasi/respirasi anaerob di bagian dasar); Tabung S (pita tipis sedikit di bawah permukaan) = Mikroaerofil.',
    tags: ['hots', 'respirasi-bakteri', 'thioglycollate', 'svg', 'anaerob-fakultatif']
  },
  {
    code: 'BIO10-T5-SUL-024',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#EFF6FF;color:#1E3A8A;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Karakteristik Toksin</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Eksotoksin (misal: Clostridium botulinum)</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Endotoksin (misal: Salmonella typhi)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Asal &amp; Pelepasan</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Disekresikan keluar oleh sel bakteri hidup</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Komponen struktural membran luar; baru lepas saat sel bakteri lisis/mati</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Komposisi Kimia</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Protein terlarut (Polipeptida)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Lipopolisakarida (Bagian Lipid A)</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Ketahanan Panas (Suhu &gt;60–80°C)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Labil (Rusak/terdenaturasi oleh pemanasan)</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Stabil (Tahan pemanasan tinggi)</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Kelompok Bakteri Penghasil</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Dominan Gram-Positif &amp; sebagian Gram-Negatif</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">Khusus Bakteri Gram-Negatif</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Berdasarkan perbandingan biokimia Eksotoksin dan Endotoksin pada tabel di atas, mengapa pada pasien yang mengalami bakteremia berat akibat infeksi bakteri Gram-negatif, pemberian antibiotik bakterisidal (pemecah sel bakteri) dosis sangat tinggi secara mendadak justru dapat memicu syok septik dan lonjakan demam ekstrem?',
    options: [
      { key: 'A', text: 'Karena antibiotik bereaksi secara kimiawi dengan oksigen darah membentuk gas sianida.' },
      { key: 'B', text: 'Karena lisis (pecahnya) jutaan sel bakteri Gram-negatif secara serentak di dalam pembuluh darah melepaskan komponen Endotoksin (Lipid A lipopolisakarida) dari membran luarnya secara masif, yang memicu badai sitokin, vasodilatasi ekstrem, dan syok endotoksik.' },
      { key: 'C', text: 'Karena bakteri Gram-negatif akan langsung membelah diri seribu kali lebih cepat ketika dinding selnya pecah.' },
      { key: 'D', text: 'Karena Endotoksin tersusun atas protein enzim yang hanya aktif pada suhu dingin.' },
      { key: 'E', text: 'Karena bakteri Gram-positif di dalam usus langsung berubah menjadi bakteri Gram-negatif.' }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan baris pertama pada kolom Endotoksin: "Komponen struktural membran luar; baru lepas saat sel bakteri lisis/mati".',
    explanation:
      'Endotoksin adalah bagian Lipid A dari molekul Lipopolisakarida (LPS) yang menyusun membran luar dinding sel bakteri Gram-negatif. Ketika antibiotik bakterisidal melisiskan jutaan bakteri Gram-negatif sekaligus di aliran darah, endotoksin lepas secara masif dan merangsang makrofag melepaskan sitokin inflamasi (TNF-α, IL-1) berlebihan yang memicu demam tinggi, penurunan tekanan darah drastis, dan syok septik.',
    tags: ['hots', 'eksotoksin-vs-endotoksin', 'syok-septik', 'analisis-tabel', 'gram-negatif']
  },
  {
    code: 'BIO10-T5-SUL-025',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'svg',
    stimulus_content: `
      <svg viewBox="0 0 520 190" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#FFFBEB;border-radius:14px;border:1px solid #FDE68A;padding:8px;">
        <text x="18" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#78350F">Bagan Siklus Nitrogen &amp; Peran Bakteri Tanah (Tahap I, II, III, dan IV)</text>
        <rect x="20" y="45" width="100" height="45" rx="8" fill="#DBEAFE" stroke="#2563EB"/>
        <text x="35" y="72" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1E3A8A">Gas N2 Udara</text>

        <line x1="120" y1="67" x2="165" y2="67" stroke="#334155" stroke-width="2"/>
        <text x="128" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1D4ED8">[I]</text>

        <rect x="165" y="45" width="95" height="45" rx="8" fill="#FEF3C7" stroke="#D97706"/>
        <text x="176" y="72" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400E">Amonium (NH4+)</text>

        <line x1="260" y1="67" x2="305" y2="67" stroke="#334155" stroke-width="2"/>
        <text x="268" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">[II]</text>

        <rect x="305" y="45" width="85" height="45" rx="8" fill="#DCFCE7" stroke="#16A34A"/>
        <text x="318" y="72" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065F46">Nitrit (NO2-)</text>

        <line x1="390" y1="67" x2="425" y2="67" stroke="#334155" stroke-width="2"/>
        <text x="396" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">[III]</text>

        <rect x="425" y="45" width="80" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/>
        <text x="435" y="72" font-family="sans-serif" font-size="11" font-weight="bold" fill="#064E3B">Nitrat (NO3-)</text>

        <!-- Denitrification return path [IV] -->
        <path d="M 465 90 L 465 148 L 70 148 L 70 90" fill="none" stroke="#DC2626" stroke-width="2.5" stroke-dasharray="5,4"/>
        <text x="180" y="140" font-family="sans-serif" font-size="11" font-weight="bold" fill="#B91C1C">[IV] Proses Denitrifikasi (Kondisi Tanah Tergenang/Anaerob)</text>
      </svg>
    `,
    question_text:
      'Perhatikan bagan siklus biogeokimia nitrogen di atas. Apabila lahan pertanian terus-menerus tergenang air tanpa drainase maupun penggemburan (aerasi) tanah yang baik, kesuburan tanah justru menurun karena nitrat (NO3-) hilang kembali ke udara menjadi gas N2 melalui "Tahap [IV]". Mengapa penggenangan tanah memicu kerugian tersebut?',
    options: [
      { key: 'A', text: 'Karena kondisi tanah tergenang yang miskin oksigen (anaerob) mematikan bakteri aerob nitrifikasi [II & III] dan mengaktifkan bakteri denitrifikasi anaerob (seperti Pseudomonas denitrificans) yang menggunakan ion Nitrat (NO3-) sebagai akseptor elektron pengganti O2 lalu mengubahnya menjadi gas N2.' },
      { key: 'B', text: 'Karena air genangan mengubah bakteri Rhizobium [I] menjadi virus pemakan akar tanaman.' },
      { key: 'C', text: 'Karena bakteri Nitrosomonas [II] dan Nitrobacter [III] hanya dapat hidup di dalam tanah yang tergenang air pekat tanpa oksigen.' },
      { key: 'D', text: 'Karena gas N2 di udara hanya dapat diikat oleh tanaman apabila tanah berada dalam kondisi kering kerontang.' },
      { key: 'E', text: 'Karena pada Tahap [IV] tanaman menyerap terlalu banyak nitrat sehingga tanah mengalami keracunan oksigen.' }
    ],
    correct_answer: 'A',
    hint: 'Bandingkan kebutuhan oksigen bakteri Nitrifikasi (Tahap II & III: aerob) dengan bakteri Denitrifikasi (Tahap IV: anaerob).',
    explanation:
      'Bakteri nitrifikasi (Nitrosomonas pada [II] dan Nitrobacter pada [III]) adalah bakteri kemoautotrof aerob yang membutuhkan aerasi (oksigen tanah). Sebaliknya, ketika tanah tergenang air dan menjadi anaerob (miskin O2), bakteri denitrifikasi (seperti Pseudomonas denitrificans dan Thiobacillus denitrificans) melakukan respirasi anaerob dengan mereduksi Nitrat (NO3-) kembali menjadi gas N2O dan N2 yang lepas ke atmosfer (Tahap [IV]), sehingga tanah kehilangan hara nitrogen.',
    tags: ['hots', 'siklus-nitrogen', 'denitrifikasi', 'svg', 'aerasi-tanah']
  },
  {
    code: 'BIO10-T5-SUL-026',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'table',
    stimulus_content: `
      <table style="width:100%;border-collapse:collapse;font-size:13px;margin:8px 0;">
        <thead>
          <tr style="background:#ECFDF5;color:#065F46;text-align:left;">
            <th style="padding:8px;border:1px solid #CBD5E1;">Sampel Air Sumur</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">MPN Total Coliform / 100 mL</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Uji E. coli (Fecal Coliform) / 100 mL</th>
            <th style="padding:8px;border:1px solid #CBD5E1;">Jarak Sumur ke Septic Tank</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Baku Mutu Permenkes Air Minum</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 / 100 mL</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 / 100 mL</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">&ge; 10 meter</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Sumur Warga X</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 / 100 mL</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">0 / 100 mL</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">14 meter</td>
          </tr>
          <tr>
            <td style="padding:8px;border:1px solid #CBD5E1;">Sumur Warga Y</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">240 / 100 mL</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">95 / 100 mL</td>
            <td style="padding:8px;border:1px solid #CBD5E1;">3,5 meter</td>
          </tr>
        </tbody>
      </table>
    `,
    question_text:
      'Dalam pengujian mikrobiologi kualitas air minum pada tabel di atas, keberadaan bakteri Escherichia coli dijadikan sebagai bioindikator utama pencemaran air. Mengapa ditemukannya E. coli sebanyak 95 MPN/100 mL pada Sumur Warga Y menunjukkan bahaya kesehatan serius, meskipun sebagian besar galur E. coli sendiri sebenarnya merupakan flora normal usus besar manusia?',
    options: [
      { key: 'A', text: 'Karena E. coli secara alami terbentuk dari reaksi kimia antara air tanah dan batu kapur.' },
      { key: 'B', text: 'Karena habitat asli E. coli adalah kolon (usus besar) manusia/hewan berdarah panas, sehingga kehadirannya di air sumur membuktikan adanya rembesan kontaminasi tinja (feses) dari septic tank yang berpotensi besar membawa patogen enterik berbahaya lain seperti Salmonella typhi, Vibrio cholerae, atau Rotavirus.' },
      { key: 'C', text: 'Karena jarak septic tank 3,5 meter sudah sangat aman dan mampu menyaring seluruh bakteri.' },
      { key: 'D', text: 'Karena E. coli merupakan bakteri fotoautotrof yang menghasilkan racun sianida saat terkena sinar matahari.' },
      { key: 'E', text: 'Karena air minum yang sehat menurut standar Permenkes wajib mengandung minimal 100 E. coli per 100 mL.' }
    ],
    correct_answer: 'B',
    hint: 'Perhatikan hubungan antara habitat asli E. coli (saluran cerna/feses), jarak sumur Y ke septic tank (3,5 m < 10 m), dan risiko masuknya patogen pencernaan lainnya.',
    explanation:
      'Escherichia coli digunakan sebagai indikator biologis pencemaran fekal (fecal contamination indicator) karena secara spesifik hidup dalam jumlah besar di usus besar manusia/mamalia. Terdeteksinya E. coli pada Sumur Y (yang berjarak hanya 3,5 m dari septic tank) membuktikan terjadinya rembesan limbah tinja ke air tanah, yang membuka jalur penularan penyakit bawaan air (waterborne diseases) seperti tifus, kolera, disentri, dan hepatitis A.',
    tags: ['hots', 'indikator-ecoli', 'kualitas-air', 'analisis-tabel', 'kesehatan-lingkungan']
  },
  {
    code: 'BIO10-T5-SUL-027',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Seorang ibu membeli makanan daging kornet dalam kaleng yang bagian tutup kalengnya sudah tampak menggembung cembung ke luar. Ketika kaleng dibuka, tercium bau agak tengik, namun ibu tersebut berpikir bahwa "Jika daging kaleng ini dimasak sebentar selama 3 menit, seluruh bakteri di dalamnya pasti mati sehingga aman dimakan".',
    question_text:
      'Evaluasi mikrobiologi pangan yang paling tepat mengenai bahaya fatal dari mengonsumsi makanan kaleng yang sudah menggembung tersebut adalah…',
    options: [
      { key: 'A', text: 'Kaleng menggembung menandakan daging di dalamnya telah berfermentasi menjadi probiotik yang menyehatkan usus.' },
      { key: 'B', text: 'Kaleng yang menggembung mengindikasikan aktivitas bakteri anaerob obligat pembentuk endospora Clostridium botulinum; endospora tahan terhadap pemanasan singkat 3 menit dan neurotoksin botulinum yang dihasilkannya dapat memicu kelumpuhan otot pernapasan (botulisme) yang mematikan.' },
      { key: 'C', text: 'Kaleng menggembung disebabkan oleh pertumbuhan bakteri aerob obligat Nitrosomonas yang menghasilkan oksigen murni.' },
      { key: 'D', text: 'Pemanasan selama 3 menit pada suhu 70°C sudah mampu menghancurkan seluruh jenis endospora bakteri hingga tuntas.' },
      { key: 'E', text: 'Bakteri di dalam makanan kaleng tidak pernah menghasilkan gas maupun senyawa toksik.' }
    ],
    correct_answer: 'B',
    hint: 'Di dalam kaleng yang tertutup rapat tidak ada oksigen (kondisi anaerob). Bakteri berspora manakah yang tumbuh di makanan kaleng yang kurang sempurna sterilisasinya?',
    explanation:
      'Makanan kaleng berasam rendah yang menggembung (swell) merupakan tanda klasik kontaminasi bakteri anaerob obligat Clostridium botulinum yang endosporanya selamat dari proses pengalengan yang tidak mencapai suhu sterilisasi komersial (121°C). Selama penyimpanan anaerob, endospora berkecambah menghasilkan gas dan neurotoksin botulinum (racun paling mematikan yang menghambat pelepasan asetilkolin di sinapsis saraf-otot).',
    tags: ['hots', 'clostridium-botulinum', 'keamanan-pangan', 'endospora', 'botulisme']
  },
  {
    code: 'BIO10-T5-SUL-028',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Teknik PCR (Polymerase Chain Reaction) yang digunakan di seluruh dunia untuk menggandakan DNA (termasuk tes diagnostik molekuler dan forensik) membutuhkan siklus pemanasan berulang hingga suhu 94–95°C untuk memisahkan untai ganda DNA (denaturasi). Pada suhu setinggi itu, enzim DNA polimerase dari manusia atau bakteri Escherichia coli biasa akan langsung rusak (terdenaturasi).',
    question_text:
      'Bagaimana para ilmuwan bioteknologi memecahkan masalah kerusakan enzim pada suhu 95°C tersebut dengan memanfaatkan keanekaragaman prokariota?',
    options: [
      { key: 'A', text: 'Dengan menggunakan enzim Taq polimerase yang diisolasi dari bakteri termofil ekstrem Thermus aquaticus (atau Pfu polimerase dari Archaea Pyrococcus furiosus) yang hidup alami di sumber air panas geotermal sehingga ikatan struktur protein enzimnya tetap stabil pada suhu 95°C.' },
      { key: 'B', text: 'Dengan mengganti enzim DNA polimerase menggunakan minyak goreng yang tahan suhu panas.' },
      { key: 'C', text: 'Dengan melakukan proses PCR di dalam lemari pembeku bersuhu -80°C tanpa pemanasan sama sekali.' },
      { key: 'D', text: 'Dengan mengisolasi enzim dari virus Influenza yang hidup di saluran napas manusia.' },
      { key: 'E', text: 'Dengan menambahkan antibiotik tetrasiklin ke dalam tabung PCR agar enzim E. coli tidak rusak.' }
    ],
    correct_answer: 'A',
    hint: 'Ingat asal-usul nama enzim "Taq" (T = Thermus, aq = aquaticus) yang ditemukan oleh Thomas Brock di mata air panas Yellowstone.',
    explanation:
      'Inovasi PCR oleh Kary Mullis menjadi otomatis berkat penggunaan enzim Taq polymerase yang diisolasi dari prokariota termofilik Thermus aquaticus (serta Pfu polymerase dari Archaea hipertermofil Pyrococcus furiosus). Karena beradaptasi di mata air panas vulkanik (70–100°C), struktur protein enzimnya memiliki ikatan hidrofobik dan jembatan garam internal yang kuat sehingga tidak terdenaturasi pada tahap pemanasan PCR 95°C.',
    tags: ['hots', 'taq-polimerase', 'thermus-aquaticus', 'ekstremofil', 'pcr']
  },
  {
    code: 'BIO10-T5-SUL-029',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Ketika limbah pupuk NPK pertanian dan limbah detergen rumah tangga mengalir masuk secara berlebihan ke sebuah waduk air tawar yang tenang, dalam waktu beberapa minggu permukaan waduk tertutup rapat oleh lapisan tebal berwarna hijau kebiruan dari ledakan populasi (blooming) Cyanobacteria seperti Microcystis aeruginosa. Beberapa hari kemudian, ribuan ikan di dalam waduk ditemukan mati mengambang, terutama pada dini hari hingga pagi hari.',
    question_text:
      'Rangkaian analisis kausalitas ekologis yang paling tepat menjelaskan mengapa ledakan populasi Cyanobacteria (yang notabene merupakan organisme fotosintetik penghasil oksigen) justru menyebabkan kematian massal ikan di waduk tersebut adalah…',
    options: [
      { key: 'A', text: 'Cyanobacteria memakan ikan-ikan besar di waduk secara fagositosis pada malam hari.' },
      { key: 'B', text: 'Limpahan fosfat dan nitrat memicu eutrofikasi; hamparan tebal Cyanobacteria di permukaan menghalangi cahaya ke dasar, melepaskan hepatotoksin (mikrosistin), dan ketika biomassa alga yang mati diuraikan secara besar-besaran oleh bakteri dekomposer aerob (ditambah respirasi malam hari), kadar oksigen terlarut (DO) air terkuras habis (hipoksia/anoksia).' },
      { key: 'C', text: 'Cyanobacteria menghasilkan terlalu banyak gas oksigen di malam hari sehingga insang ikan terbakar oleh oksigen.' },
      { key: 'D', text: 'Pupuk NPK secara langsung membekukan air waduk sehingga ikan mati kedinginan.' },
      { key: 'E', text: 'Ikan-ikan di waduk mati karena kekurangan karbon dioksida untuk bernapas.' }
    ],
    correct_answer: 'B',
    hint: 'Apa yang terjadi pada kadar oksigen terlarut (Dissolved Oxygen / DO) di air pada malam hari (saat fotosintesis berhenti tetapi respirasi tetap jalan) dan saat jutaan sel Cyanobacteria mati lalu dibusukkan oleh bakteri pengurai aerob?',
    explanation:
      'Fenomena ini adalah Eutrofikasi (Harmful Algal Blooms): (1) Pengayaan nitrat & fosfat memicu ledakan Microcystis; (2) Pada malam/dini hari, fotosintesis berhenti namun respirasi seluler terus menyedot O2; (3) Ketika massa Cyanobacteria mati, bakteri dekomposer aerob mengonsumsi hampir seluruh oksigen terlarut (DO jatuh < 2 mg/L, BOD melonjak) untuk menguraikan bangkai alga, ditambah pelepasan sianotoksin (mikrosistin), sehingga ikan mati lemas (anoksia).',
    tags: ['hots', 'eutrofikasi', 'cyanobacteria-blooming', 'ekologi-perairan']
  },
  {
    code: 'BIO10-T5-SUL-030',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Dalam eksperimen klasik Frederick Griffith (1928), bakteri Streptococcus pneumoniae Galur R (tidak berkapsul, jinak) yang masih hidup dicampurkan dengan bakteri Galur S (berkapsul, ganas) yang SUDAH DIMATIKAN dengan pemanasan, lalu disuntikkan ke tubuh tikus. Hasilnya mengejutkan: tikus tersebut mati, dan dari darah tikus ditemukan bakteri Galur S berkapsul yang HIDUP.',
    question_text:
      'Mekanisme rekombinasi genetik apakah yang terjadi di dalam campuran tersebut sehingga bakteri Galur R yang jinak berubah secara permanen menjadi Galur S yang berkapsul dan ganas?',
    options: [
      { key: 'A', text: 'Konjugasi melalui jembatan pilus seks dari bakteri Galur S yang sudah mati.' },
      { key: 'B', text: 'Transformasi, di mana sel bakteri Galur R yang hidup menyerap fragmen DNA penyandi pembentukan kapsul yang terlepas dari sel bakteri Galur S yang telah lisis akibat pemanasan, lalu mengintegrasikannya ke dalam kromosomnya.' },
      { key: 'C', text: 'Transduksi yang diperantarai oleh virus Influenza milik tikus.' },
      { key: 'D', text: 'Bakteri Galur S yang sudah mati hidup kembali secara ajaib (abiogenesis) di dalam darah tikus.' },
      { key: 'E', text: 'Sel darah putih tikus berubah wujud menjadi bakteri Galur S.' }
    ],
    correct_answer: 'B',
    hint: 'Bakteri Galur S sudah mati (tidak bisa membentuk pilus konjugasi dan tidak ada virus faga). Namun, molekul DNA lebih tahan panas dibandingkan protein enzim.',
    explanation:
      'Eksperimen Griffith (yang kemudian dibuktikan oleh Avery, MacLeod, dan McCarty pada 1944) mendemonstrasikan peristiwa Transformasi Bakteri: pemanasan mematikan sel Galur S, namun fragmen DNA kromosom penyandi sintesis kapsul polisakarida keluar ke medium dan diserap oleh sel Galur R hidup yang kompeten. Galur R mengalami rekombinasi genetik dan mengekspresikan kapsul (berubah menjadi Galur S virulen).',
    tags: ['hots', 'eksperimen-griffith', 'transformasi-bakteri', 'genetika-molekuler']
  },
  {
    code: 'BIO10-T5-SUL-031',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C5',
    stimulus_type: 'text',
    stimulus_content:
      'Untuk mensterilkan alat-alat bedah logam dan medium kultur mikrobiologi di laboratorium dari kontaminasi bakteri pembentuk endospora (seperti Bacillus stearothermophilus dan Clostridium), teknisi laboratorium menggunakan alat Autoklaf (uap air bertekanan 2 atm / 15 psi pada suhu 121°C selama 15–20 menit), bukan sekadar merebusnya dalam air mendidih 100°C.',
    question_text:
      'Mengapa perebusan biasa pada suhu 100°C tidak cukup untuk menjamin sterilisasi mutlak, dan mengapa penggunaan uap bertekanan pada autoklaf mampu mematikan endospora?',
    options: [
      { key: 'A', text: 'Karena pada suhu 100°C molekul air belum bergerak sama sekali.' },
      { key: 'B', text: 'Karena korteks endospora dilindungi oleh kompleks kalsium-asam dipikolinat dan kadar air inti yang sangat rendah sehingga tahan suhu 100°C; tekanan uap 2 atm pada autoklaf menaikkan titik didih uap air mencapai 121°C yang mampu menembus, menghidrasi, dan mendenaturasi protein inti endospora secara tuntas.' },
      { key: 'C', text: 'Karena autoklaf menggunakan gelombang radioaktif untuk menghancurkan logam alat bedah.' },
      { key: 'D', text: 'Karena endospora justru membelah biner semakin cepat pada suhu 100°C.' },
      { key: 'E', text: 'Karena tekanan 2 atm berfungsi untuk mengubah endospora menjadi sel tumbuhan.' }
    ],
    correct_answer: 'B',
    hint: 'Pada tekanan atmosfer normal (1 atm), air mendidih maksimum pada 100°C, sedangkan endospora baru mengalami denaturasi protein inti pada uap jenuh ~121°C.',
    explanation:
      'Endospora bakteri memiliki ketahanan termal ekstrem karena protoplas intinya mengalami dehidrasi berat dan distabilkan oleh kelat Kalsium-Asam Dipikolinat (Ca-DPA) serta protein pengikat DNA (SASP), sehingga tidak mati pada perebusan 100°C. Autoklaf menggunakan tekanan 15 psi (2 atm) untuk menghasilkan uap air jenuh bersuhu 121°C yang memiliki entalpi kondensasi tinggi untuk menghidrasi korteks dan mengkoagulasi protein vital endospora.',
    tags: ['hots', 'sterilisasi-autoklaf', 'endospora', 'mikrobiologi-laboratorium']
  },
  {
    code: 'BIO10-T5-SUL-032',
    subject: 'Biologi Kelas X',
    topic_slug: 'bakteri',
    topic_name: 'Bakteri (Prokariota / Monera)',
    difficulty: 'sulit',
    cognitive_level: 'C4',
    stimulus_type: 'text',
    stimulus_content:
      'Pasien tuberkulosis (TBC) yang disebabkan oleh infeksi bakteri Mycobacterium tuberculosis diwajibkan menjalani pengobatan kombinasi beberapa antibiotik (seperti Rifampisin, Isoniazid, Pirazinamid, dan Etambutol) secara disiplin selama minimal 6 bulan tanpa putus, meskipun gejala batuknya sudah hilang pada minggu ke-3.',
    question_text:
      'Mengapa bakteri Mycobacterium tuberculosis begitu sulit diberantas dalam waktu singkat dan apa risiko biologis apabila pasien menghentikan minum obat sendiri pada minggu ke-3?',
    options: [
      { key: 'A', text: 'Karena M. tuberculosis adalah virus RNA yang tidak dapat dibunuh oleh antibiotik.' },
      { key: 'B', text: 'Karena dinding sel M. tuberculosis mengandung lapisan lilin asam mikolat (mycolic acid) yang sangat tebal dan hidrofobik serta laju pembelahannya lambat; penghentian obat pada minggu ke-3 menyisakan subpopulasi bakteri persisten yang bermutasi menjadi galur kebal obat ganda (MDR-TB / Multi-Drug Resistant TB).' },
      { key: 'C', text: 'Karena obat TBC harus diminum 6 bulan untuk mengubah sel paru-paru menjadi jaringan tulang rawan.' },
      { key: 'D', text: 'Karena pada minggu ke-3 jumlah bakteri di dalam paru-paru sudah 0 sel, namun obat tetap diminum hanya sebagai vitamin penambah nafsu makan.' },
      { key: 'E', text: 'Karena M. tuberculosis melakukan fotosintesis di dalam alveolus paru-paru.' }
    ],
    correct_answer: 'B',
    hint: 'Ingat struktur khas dinding sel bakteri tahan asam (BTA) Mycobacterium yang kaya akan lipid lilin asam mikolat serta bahaya MDR-TB.',
    explanation:
      'Mycobacterium tuberculosis adalah Bakteri Tahan Asam (BTA) yang dinding selnya dilapisi asam mikolat (lilin hidrofobik tebal) sehingga sulit ditembus obat biasa dan memiliki fase dorman/pembelahan lambat di dalam makrofag (tuberkel). Ketika gejala mereda di minggu ke-3, bakteri yang paling lemah baru mati sedangkan bakteri dorman/persisten masih hidup. Penghentian obat prematur menyeleksi mutan yang kebal terhadap Rifampisin dan Isoniazid (MDR-TB).',
    tags: ['hots', 'mycobacterium-tuberculosis', 'mdr-tb', 'asam-mikolat', 'kesehatan']
  }
];
