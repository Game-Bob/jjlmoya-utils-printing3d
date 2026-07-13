import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'kalkulator-efisiensi-produksi-aditif';
const title = 'Kalkulator Efisiensi Produksi Aditif';
const description =
  'Bandingkan pencetakan batch vs pencetakan berurutan dengan waktu cetak, overhead pemanasan awal, transisi perpindahan, waktu pembersihan, risiko kegagalan statistik, dan rekomendasi kelayakan otomatis.';

const faqData = [
  {
    question: 'Kapan pencetakan batch lebih cepat daripada pencetakan berurutan?',
    answer:
      'Pencetakan batch biasanya lebih cepat ketika pemanasan awal signifikan, komponen muat dengan aman di atas platform cetak, jarak perpindahan antar komponen moderat, dan tingkat kegagalan historis cukup rendah sehingga risiko batch gabungan tetap di bawah ambang kritis.',
  },
  {
    question: 'Mengapa pencetakan berurutan bisa direkomendasikan meskipun memakan waktu lebih lama?',
    answer:
      'Pencetakan berurutan membatasi kerugian dari satu komponen yang gagal. Jika risiko batch yang dihitung sebagai 1 - (1 - tingkat kegagalan)^N melebihi ambang kritis, kalkulator merekomendasikan pencetakan berurutan untuk melindungi antrean produksi.',
  },
  {
    question: 'Apakah kalkulator ini menggantikan estimasi slicer?',
    answer:
      'Tidak. Slicer mengetahui jalur alat yang tepat, akselerasi, lebar ekstrusi, pendinginan, dan jarak bebas tabrakan. Kalkulator ini untuk perencanaan produksi sebelum slicing, terutama ketika membandingkan satu pekerjaan satu platform penuh dengan pekerjaan satu bagian berulang.',
  },
  {
    question: 'Tingkat kegagalan apa yang harus saya masukkan?',
    answer:
      'Gunakan riwayat toko Anda sendiri untuk material, printer, geometri, dan kondisi operator yang serupa. Jika Anda belum mencatatnya, mulailah secara konservatif dengan 2-5% untuk produksi FDM yang telah disetel dan naikkan untuk material baru, pekerjaan panjang, atau perlengkapan yang kurang divalidasi.',
  },
];

const howToData = [
  { name: 'Masukkan jumlah', text: 'Tetapkan jumlah total komponen yang diperlukan untuk proses produksi.' },
  { name: 'Tambahkan input waktu', text: 'Masukkan waktu cetak per komponen, waktu pemanasan awal, jarak transisi, kecepatan perpindahan, dan waktu pembersihan atau stabilisasi.' },
  { name: 'Atur risiko historis', text: 'Gunakan persentase kegagalan dari pekerjaan sebanding dan pilih risiko batch maksimum yang dapat diterima.' },
  { name: 'Baca rekomendasi', text: 'Bandingkan total waktu, waktu yang dihemat, efisiensi relatif, overhead transisi, dan risiko batch statistik.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input efisiensi produksi aditif',
    resultsAriaLabel: 'Hasil efisiensi produksi aditif',
    visualizerAriaLabel: 'Visualisasi risiko generatif dan tata letak platform',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    piecesLabel: 'Komponen',
    unitPrintTimeLabel: 'Waktu cetak per komponen (mnt)',
    preheatTimeLabel: 'Waktu pemanasan awal (mnt)',
    transitionDistanceLabel: 'Transisi rata-rata',
    travelSpeedLabel: 'Kecepatan perpindahan',
    failureRateLabel: 'Tingkat kegagalan historis',
    purgeTimeLabel: 'Pembersihan / stabilisasi (mnt)',
    criticalRiskLabel: 'Risiko batch kritis',
    batchLabel: 'Pencetakan batch',
    sequentialLabel: 'Pencetakan berurutan',
    recommendationLabel: 'Strategi yang direkomendasikan',
    savingsLabel: 'Penghematan waktu absolut',
    efficiencyLabel: 'Efisiensi relatif',
    riskLabel: 'Risiko kegagalan batch',
    layoutLabel: 'Koreografi platform cetak',
    transitionLabel: 'Overhead transisi',
    batchWinsLabel: 'Batch',
    sequentialWinsLabel: 'Berurutan',
    riskOverrideLabel: 'pengesampingan risiko',
    fasterLabel: 'dihemat',
    slowerLabel: 'tambahan',
    lowRiskLabel: 'Risiko batch rendah',
    moderateRiskLabel: 'Risiko batch sedang',
    criticalRiskStatusLabel: 'Risiko batch kritis',
    minutesUnit: 'mnt',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/dtk',
    imperialSpeedUnit: 'in/dtk',
  },
  seo: [
    { type: 'title', text: 'Pencetakan Batch vs Pencetakan Berurutan: Apa yang Diukur oleh Kalkulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Memilih antara <strong>pencetakan batch vs pencetakan berurutan</strong> bukan hanya soal mengisi platform cetak. Batch satu platform penuh dapat menghemat waktu pemanasan dan mengurangi intervensi operator, tetapi memusatkan risiko produksi ke dalam satu jendela paparan yang panjang. Pencetakan berurutan mengulang overhead penyiapan, namun mengisolasi kegagalan sehingga satu bagian yang buruk tidak secara otomatis mencemari nilai seluruh platform cetak. Kalkulator ini mengubah pertukaran tersebut menjadi angka: total menit, transisi perpindahan, efisiensi relatif, dan risiko batch statistik.',
    },
    {
      type: 'paragraph',
      html: 'Rumus batch adalah <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. Rumus berurutan adalah <code>Tseq = N x (Tc + Tp + Tpurge)</code>. Rumus risiko adalah <code>Riskbatch = 1 - (1 - Pfailure)^N</code>. Persamaan-persamaan ini sengaja dibuat transparan karena perencanaan produksi lebih mudah ketika alasan di balik rekomendasi terlihat daripada disembunyikan dalam kotak hitam.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Siklus pemanasan dalam mode batch', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Siklus pemanasan dalam mode berurutan', icon: 'mdi:repeat' },
        { value: '60', label: 'Detik yang digunakan untuk menormalkan perpindahan ke menit', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Model kegagalan batch majemuk', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan satu definisi kegagalan yang konsisten',
      html: '<p>Tingkat kegagalan hanya berguna jika toko mendefinisikan kegagalan secara konsisten. Putuskan apakah itu mencakup penolakan kosmetik, penyimpangan dimensi, bekas penyangga, kegagalan lapisan pertama, kusut spul, gangguan listrik, dan pengangkatan oleh operator. Mencampur definisi membuat model risiko terlihat presisi sementara memberinya data yang bising.</p>',
    },
    { type: 'title', text: 'Bagaimana Pencetakan Batch Menghemat Waktu', level: 2 },
    {
      type: 'paragraph',
      html: 'Pencetakan batch biasanya menang dalam pemanfaatan mesin ketika waktu pemanasan awal besar dibandingkan dengan waktu cetak satu bagian. Memanaskan alas dan nosel sekali untuk proses 24 bagian dapat menghindari 23 siklus pemanasan berulang. Dalam lingkungan farm, ini penting karena pemanasan adalah kapasitas mati: printer menghabiskan waktu kalender, energi, dan perhatian operator sebelum geometri yang dapat dijual diproduksi.',
    },
    {
      type: 'paragraph',
      html: 'Faktor perpindahan mencegah model berpura-pura bahwa tata letak batch gratis. Setiap bagian dapat menambah transisi non-pencetakan di mana nosel melintasi platform, menghindari pulau, melakukan gerakan menyisir, atau bergerak ke batas objek berikutnya. Kalkulator menggunakan jarak transisi rata-rata dan kecepatan perpindahan untuk memperkirakan overhead ini dalam menit. Faktor ini kecil pada tata letak kompak dan lebih terlihat ketika bagian tersebar di platform besar.',
    },
    {
      type: 'table',
      headers: ['Variabel batch', 'Makna produksi', 'Kesalahan perencanaan yang dicegah'],
      rows: [
        ['N', 'Total bagian dalam proses', 'Memperlakukan platform sepuluh bagian seperti sepuluh pekerjaan terisolasi tanpa pemanasan bersama.'],
        ['Tp', 'Waktu cetak satu bagian lengkap', 'Menggunakan waktu lapisan hanya dari fitur kecil alih-alih estimasi bagian jadi.'],
        ['Tc', 'Waktu pemanasan alas dan nosel', 'Mengabaikan waktu sebelum ekstrusi dimulai saat mengutip kapasitas antrean.'],
        ['Dtrans', 'Jarak rata-rata antar bagian', 'Mengasumsikan platform yang padat tidak memiliki penalti gerakan non-ekstrusi.'],
        ['Vtravel', 'Kecepatan perpindahan kepala', 'Melupakan bahwa profil perpindahan lambat membuat susunan yang menyebar kurang efisien.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Waktu batch paling sensitif terhadap pemanasan awal dan kuantitas',
      badge: 'Perencanaan kapasitas',
      html: '<p>Jika pemanasan awal 12 menit dan pekerjaan berisi 30 bagian, mode berurutan menghabiskan 360 menit hanya untuk mengulang pemanasan. Mode batch menghabiskan 12 menit itu sekali. Itulah mengapa printer yang sama bisa terlihat jauh lebih produktif ketika bagian-bagian kecil ditempatkan dengan hati-hati.</p>',
    },
    { type: 'title', text: 'Mengapa Pencetakan Berurutan Masih Menang dalam Pekerjaan Berisiko', level: 2 },
    {
      type: 'paragraph',
      html: 'Pencetakan berurutan bisa terlihat lebih lambat karena printer mengulangi pemanasan awal dan waktu pembersihan atau stabilisasi untuk setiap unit. Keuntungannya adalah penahanan. Jika bagian 17 gagal dalam rencana berurutan, 16 bagian sebelumnya mungkin sudah selesai dan diangkat. Jika bagian 17 gagal dalam batch karena tarikan nosel, kehilangan adhesi, creep termal, atau masalah material, objek yang gagal dapat menabrak bagian tetangga atau menyebabkan operator membuang seluruh platform.',
    },
    {
      type: 'paragraph',
      html: 'Model risiko menggabungkan probabilitas kegagalan historis di seluruh jumlah bagian. Tingkat kegagalan satu bagian 3% tidak berarti batch 24 bagian memiliki risiko 3%. Probabilitas bahwa setiap bagian berhasil adalah <code>(1 - 0,03)^24</code>, dan probabilitas bahwa setidaknya satu bagian gagal adalah komplemennya. Ini membuat batch besar kurang menarik ketika prosesnya tidak stabil.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pencetakan batch',
          description: 'Terbaik ketika proses stabil, bagian memiliki adhesi kuat, tata letak platform aman dari tabrakan, dan waktu pemanasan awal mendominasi jadwal.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Satu siklus pemanasan', 'Throughput tinggi', 'Paparan kegagalan bersama yang lebih tinggi'],
        },
        {
          title: 'Pencetakan berurutan',
          description: 'Terbaik ketika penolakan mahal, pekerjaan tinggi, material sensitif, atau pengguna ingin mengisolasi setiap bagian dari yang lain.',
          icon: 'mdi:format-list-numbered',
          points: ['Penahanan kegagalan', 'Lebih banyak overhead berulang', 'Memerlukan perencanaan jarak bebas'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Pertukaran risiko produksi',
      items: [
        { pro: 'Pencetakan batch mengurangi waktu pemanasan idle dan dapat menyelesaikan bagian kecil berulang dalam satu proses tanpa pengawasan.', con: 'Satu kegagalan adhesi atau ekstrusi dapat mengancam seluruh platform dan menghabiskan waktu pemulihan operator yang panjang.' },
        { pro: 'Pencetakan berurutan memudahkan validasi satu unit, mengeluarkannya, dan melanjutkan dengan kerugian kumulatif yang lebih kecil.', con: 'Pemanasan dan stabilisasi berulang dapat menghabiskan lebih banyak waktu daripada geometri aktual pada bagian kecil.' },
        { pro: 'Batch dapat menyederhanakan pengemasan karena semua bagian selesai bersamaan.', con: 'Batch panjang mengekspos setiap unit pada penyimpangan lingkungan, masalah spul, atau periode degradasi termal yang sama.' },
      ],
    },
    { type: 'title', text: 'Memilih Ambang Risiko Batch Kritis', level: 2 },
    {
      type: 'paragraph',
      html: 'Ambang risiko kritis adalah garis di mana kalkulator mengalihkan rekomendasi dari optimasi waktu ke perlindungan kelayakan. Toko prototipe mungkin mentolerir risiko batch 45% jika material murah dan operator sedang bereksperimen. Farm produksi yang mengirimkan bagian pelanggan dapat menggunakan 15-25% untuk material umum dan ambang lebih rendah untuk pekerjaan semalam, polimer teknik yang mahal, atau bagian dengan biaya pasca-pemrosesan tinggi.',
    },
    {
      type: 'table',
      headers: ['Ambang', 'Kasus penggunaan yang baik', 'Interpretasi'],
      rows: [
        ['10-20%', 'Bagian mahal, pekerjaan semalam, pesanan pelanggan bernilai tinggi', 'Melindungi keandalan bahkan ketika mode batch menghemat waktu.'],
        ['25-35%', 'Produksi FDM normal yang telah disetel dengan material yang dikenal', 'Ambang seimbang untuk penghematan waktu dan paparan penolakan.'],
        ['40-60%', 'Prototipe internal atau perlengkapan murah', 'Menerima lebih banyak risiko untuk membebaskan kapasitas printer lebih cepat.'],
        ['Di atas 60%', 'Eksplorasi saja', 'Berguna untuk melihat potensi waktu, tetapi lemah sebagai aturan kelayakan produksi.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Cara memperkirakan tingkat kegagalan awal Anda',
      html: '<p>Tinjau 50 hingga 200 cetakan sebanding terakhir pada keluarga printer yang sama. Hitung pekerjaan yang memerlukan cetak ulang, penyelamatan manual, atau penolakan pelanggan. Bagi kegagalan dengan total percobaan, lalu pisahkan berdasarkan material dan geometri ketika data yang cukup tersedia. Braket PLA, klip PETG, rumah ASA, dan gasket TPU seharusnya tidak berbagi satu angka risiko generik.</p>',
    },
    {
      type: 'summary',
      title: 'Aturan ambang risiko',
      items: [
        'Turunkan ambang ketika material, tenggat waktu, atau biaya pasca-pemrosesan tinggi.',
        'Naikkan hanya ketika bagian yang gagal murah dan antrean mendapat manfaat dari pengelompokan agresif.',
        'Hitung ulang setelah perubahan proses seperti permukaan alas baru, nosel, pemasok filamen, atau suhu ruang tertutup.',
      ],
    },
    { type: 'title', text: 'Transisi Perpindahan, Gerakan Kepala, dan Efisiensi Tata Letak', level: 2 },
    {
      type: 'paragraph',
      html: 'Transisi perpindahan adalah biaya tersembunyi dari efisiensi cetak di tempat. Slicer dapat melompat dari satu bagian ke bagian lain berkali-kali per lapisan, terutama ketika beberapa objek berbagi ketinggian Z yang sama. Jarak transisi rata-rata tidak harus sempurna; ia hanya perlu mewakili apakah tata letaknya kompak, cukup berjarak, atau tersebar di seluruh permukaan cetak. Susunan kompak dengan transisi rata-rata 25 mm berperilaku sangat berbeda dari pengaturan platform penuh dengan lompatan 180 mm.',
    },
    {
      type: 'paragraph',
      html: 'Kecepatan perpindahan harus mencerminkan profil nyata, bukan maksimum iklan mesin. Batas akselerasi, pengaturan firmware, opsi hindari-melintasi-perimeter, Z-hop, dan strategi menyisir dapat membuat perpindahan efektif lebih lambat daripada yang disarankan bidang slicer. Jika mesin menggunakan perpindahan konservatif untuk lapisan pertama yang rapuh atau bagian tinggi, turunkan nilainya untuk menghindari perkiraan efisiensi batch yang berlebihan.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Pencetakan batch', definition: 'Mencetak banyak salinan atau objek dalam satu pekerjaan bersama di platform cetak.' },
        { term: 'Pencetakan berurutan', definition: 'Mencetak satu objek pada satu waktu sebelum beralih ke objek berikutnya, seringkali dengan batasan jarak bebas di sekitar kepala alat.' },
        { term: 'Jarak transisi', definition: 'Jarak perpindahan non-ekstrusi rata-rata yang diperlukan untuk bergerak antar bagian atau zona cetak.' },
        { term: 'Waktu pembersihan atau stabilisasi', definition: 'Waktu tambahan per unit berurutan untuk priming, penyesuaian termal, pembersihan, atau perilaku mulai ulang yang aman bagi operator.' },
        { term: 'Risiko kritis', definition: 'Probabilitas maksimum yang dapat diterima bahwa setidaknya satu bagian dalam batch gagal.' },
      ],
    },
    {
      type: 'message',
      title: 'Jarak bebas tabrakan penting dalam mode berurutan sejati',
      ariaLabel: 'Peringatan jarak bebas pencetakan berurutan',
      html: '<p>Banyak slicer membatasi pencetakan berurutan karena hotend, saluran kipas, gantri X, atau klip alas dapat bertabrakan dengan bagian yang sudah jadi. Gunakan kalkulator ini untuk perencanaan, lalu verifikasi jarak bebas berurutan di dalam slicer sebelum menjalankan pekerjaan.</p>',
    },
    { type: 'title', text: 'Cara Menggunakan Hasil untuk Optimasi Manufaktur Aditif', level: 2 },
    {
      type: 'paragraph',
      html: 'Penghematan waktu absolut menunjukkan berapa menit yang diperoleh atau hilang mode batch dibandingkan mode berurutan. Persentase efisiensi relatif menormalkan perbedaan tersebut terhadap waktu berurutan, yang berguna ketika membandingkan pekerjaan dengan ukuran berbeda. Menghemat 20 menit pada proses 40 menit sangat besar secara operasional; menghemat 20 menit pada proses 30 jam mungkin tidak membenarkan risiko yang lebih tinggi.',
    },
    {
      type: 'paragraph',
      html: 'Rekomendasi menggabungkan kecepatan dan kelayakan. Jika batch lebih cepat dan risiko di bawah ambang, alat merekomendasikan batch. Jika risiko batch melebihi ambang, berurutan direkomendasikan meskipun lebih lambat. Jika batch lebih lambat karena overhead transisi besar atau pemanasan awal kecil, berurutan menang dalam waktu tanpa memerlukan pengesampingan risiko.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gunakan kalkulator sebelum menata platform besar sehingga rencana produksi didasarkan pada waktu antrean dan paparan kegagalan.',
        'Jalankan perbandingan skenario dengan tingkat kegagalan lebih rendah setelah kalibrasi untuk melihat bagaimana perbaikan proses mengubah strategi.',
        'Tingkatkan waktu pembersihan ketika pekerjaan berurutan memerlukan pembersihan, priming, inspeksi alas, atau intervensi operator antar unit.',
        'Turunkan kecepatan perpindahan saat menggunakan Z-hop, hindari-melintasi-perimeter, bagian tinggi yang rapuh, atau batas akselerasi firmware.',
        'Catat hasil proses aktual dan perbarui tingkat kegagalan alih-alih mengandalkan aturan praktis generik.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jangan optimasi hanya untuk waktu jam tercepat',
      badge: 'Biaya operasional',
      html: '<p>Batch 12 jam yang gagal bisa memakan biaya lebih dari yang ditunjukkan pada tampilan mesin. Sertakan material, listrik, diagnosis operator, slot antrean yang hilang, keterlambatan pasca-pemrosesan, dan dampak tenggat waktu pelanggan saat memutuskan apakah penghematan waktu sebanding dengan risiko majemuk.</p>',
    },
    { type: 'title', text: 'Contoh Praktis untuk Alur Kerja Kalkulator Waktu Cetak 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Untuk klip PLA kecil dengan waktu cetak satu bagian 20 menit dan pemanasan 10 menit, pencetakan batch sering mendominasi. Pemanasan bersama menghemat sebagian besar pekerjaan, dan penempatan kompak menjaga overhead transisi tetap rendah. Jika toko memiliki tingkat kegagalan 1-2%, risikonya mungkin tetap dapat diterima untuk kuantitas moderat. Ini adalah kasus penggunaan klasik bervolume tinggi untuk pencetakan batch.',
    },
    {
      type: 'paragraph',
      html: 'Untuk braket PETG tinggi dengan adhesi marginal, pencetakan berurutan mungkin lebih aman. Bahkan jika batch menghemat dua jam, satu sudut melengkung dapat menyebabkan benturan nosel, pergeseran lapisan, atau pelepasan objek yang merusak bagian tetangga. Kalkulator memperlihatkan perbedaan antara penghematan waktu yang menggoda dan profil risiko yang tidak lagi sesuai dengan tujuan produksi.',
    },
    {
      type: 'paragraph',
      html: 'Untuk keputusan efisiensi cetak di tempat, jalankan bagian yang sama dua kali: sekali dengan tingkat kegagalan saat ini dan sekali dengan tingkat target setelah kalibrasi. Jika mengurangi kegagalan dari 6% menjadi 2% mengubah rekomendasi dari berurutan menjadi batch, investasi terbaik mungkin adalah pembersihan alas, penyetelan lapisan pertama, filamen kering, stabilitas ruang tertutup, atau strategi brim yang divalidasi daripada membeli printer lain.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa keputusan',
      items: [
        'Batch ketika pemanasan awal besar, tata letak kompak, dan tingkat kegagalan historis rendah.',
        'Berurutan ketika setiap penolakan mahal, tinggi, berisiko, atau cenderung merusak tetangga.',
        'Setel proses ketika pengurangan kecil tingkat kegagalan membuka efisiensi batch yang signifikan.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
