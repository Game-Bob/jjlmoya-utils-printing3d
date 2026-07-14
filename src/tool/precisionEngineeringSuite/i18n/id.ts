import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrecisionEngineeringSuiteUI } from '../ui';

const slug = 'suite-rekayasa-presisi-cetak-3d';
const title = 'Suite Rekayasa Presisi untuk Pencetakan 3D FDM';
const description = 'Suite diagnostik reaktif untuk kalkulasi biaya FDM, margin, tenaga kerja, ROI, toleransi CAD gaya ISO, pengeringan filamen, dan limbah purga AMS/MMU.';

const faqData = [
  {
    question: 'Mengapa setiap hasil yang ditampilkan menggunakan tepat dua desimal?',
    answer: 'Suite ini mempertahankan presisi floating point JavaScript penuh secara internal dan menerapkan pemformatan dua desimal hanya saat nilai ditampilkan atau disalin. Ini mencegah output yang ambigu dan sesuai dengan cara banyak alur kerja CAD dan kalkulasi mendokumentasikan dimensi dan uang.',
  },
  {
    question: 'Apakah modul ulir ISO merupakan pengganti tabel standar ulir?',
    answer: 'Tidak. Ini adalah bantuan perencanaan CAD untuk jarak bebas FDM dan geometri yang digerakkan oleh pitch. Gambar produksi akhir harus tetap merujuk pada kelas toleransi ISO yang relevan dan data kalibrasi printer yang diukur.',
  },
  {
    question: 'Mengapa rasio purga dianggap kritis di atas 30 persen?',
    answer: 'Di atas 30 persen, sebagian besar polimer yang diekstrusi bukan lagi volume produk. Hal itu biasanya mengubah kalkulasi biaya, pengelompokan batch, urutan warna, dan apakah purga-ke-infill atau pembagian model harus digunakan.',
  },
  {
    question: 'Bagaimana waktu pengeringan filamen harus ditafsirkan?',
    answer: 'Waktu pengeringan adalah estimasi diagnostik berdasarkan beban kelembapan, sensitivitas bahan, massa filamen, dan suhu pengering. Waktu ini harus divalidasi dengan gejala cetak nyata seperti bunyi meletup, variasi kilap, stringing (rambut-rambut tipis), dan pergeseran dimensi.',
  },
];

const howToData = [
  { name: 'Pilih modul diagnostik', text: 'Pilih kalkulasi biaya, margin, tenaga kerja, ROI, ulir, kesesuaian, pengeringan, atau purga untuk mengubah penjelasan telemetri sambil menjaga model proses bersama tetap aktif.' },
  { name: 'Edit input proses', text: 'Ubah waktu mesin, bahan, tenaga kerja, toleransi, kelembapan, atau nilai purga. Hasil langsung diperbarui tanpa menekan tombol hitung.' },
  { name: 'Baca kembaran digital', text: 'Gunakan kembaran poros dan lubang SVG serta kanvas telemetri untuk melihat apakah prosesnya nominal, tingkat pengawasan, atau kritis.' },
  { name: 'Salin ringkasan rekayasa', text: 'Gunakan tombol papan klip untuk mengekspor string parameter bertanda kurung siku terstandardisasi untuk penawaran, tiket, atau catatan CAD.' },
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
  keywords: 'kalkulator penawaran FDM, kalkulator margin cetak 3D, kalkulator ROI farm printer 3D, kalkulator toleransi ulir ISO, kalkulator kesesuaian mekanis FDM, kalkulator pengeringan filamen, kalkulator limbah purga AMS, kalkulator biaya purga MMU',
};

export const content: ToolLocaleContent<PrecisionEngineeringSuiteUI> = {
  slug,
  title,
  description,
  ui: {
    modules: [
      { id: 'quote', label: 'Pembuat penawaran PDF' },
      { id: 'margin', label: 'PVP dan margin' },
      { id: 'labor', label: 'Tenaga kerja pasca-proses' },
      { id: 'roi', label: 'ROI Farm' },
      { id: 'threads', label: 'Ulir ISO CAD' },
      { id: 'fits', label: 'Kesesuaian mekanis' },
      { id: 'drying', label: 'Pengeringan filamen' },
      { id: 'purge', label: 'Purga AMS/MMU' },
    ],
    inputs: [
      { key: 'materialCost', label: 'Biaya bahan', unit: '€' },
      { key: 'printHours', label: 'Waktu cetak', unit: 'h' },
      { key: 'machineRate', label: 'Tarif mesin', unit: '€/h' },
      { key: 'energyPrice', label: 'Harga energi', unit: '€/kWh' },
      { key: 'failureRate', label: 'Tingkat kegagalan', unit: '%' },
      { key: 'marginPercent', label: 'Margin target', unit: '%' },
      { key: 'laborMinutes', label: 'Tenaga kerja', unit: 'min' },
      { key: 'laborRate', label: 'Tarif tenaga kerja', unit: '€/h' },
      { key: 'postProcessMinutes', label: 'Pasca-proses', unit: 'min' },
      { key: 'postProcessRate', label: 'Tarif pasca-proses', unit: '€/h' },
      { key: 'farmPrinters', label: 'Printer farm', unit: 'pcs' },
      { key: 'printerCost', label: 'Biaya printer', unit: '€' },
      { key: 'monthlyOrders', label: 'Pesanan bulanan', unit: 'pcs' },
      { key: 'avgSalePrice', label: 'Harga jual rata-rata', unit: '€' },
      { key: 'threadNominalMm', label: 'Ulir nominal', unit: 'mm' },
      { key: 'threadPitchMm', label: 'Pitch', unit: 'mm' },
      { key: 'shaftNominalMm', label: 'Poros nominal', unit: 'mm' },
      { key: 'holeAllowanceMm', label: 'Toleransi lubang', unit: 'mm' },
      { key: 'filamentMassG', label: 'Massa filamen', unit: 'g' },
      { key: 'ambientHumidity', label: 'Kelembapan', unit: '%RH' },
      { key: 'dryingTemperatureC', label: 'Suhu kering', unit: 'C' },
      { key: 'objectVolumeCm3', label: 'Volume objek', unit: 'cm3' },
      { key: 'purgeVolumeCm3', label: 'Volume purga', unit: 'cm3' },
    ],
    kpis: {
      quoteCost: 'Biaya kalkulasi',
      recommendedPvp: 'PVP rekomendasi',
      grossMargin: 'Margin kotor',
      roi: 'ROI',
      threadMinor: 'Ulir minor',
      fitClearance: 'Kelonggaran kesesuaian',
      dryingTime: 'Waktu pengeringan',
      purgeRatio: 'Rasio purga',
    },
    statusTexts: {
      nominal: 'Telemetri di dalam batas operasional.',
      watch: 'Batas pengawasan: telemetri dapat digunakan tetapi memerlukan peninjauan proses sebelum produksi.',
      critical: 'Batas kritis: rasio purga di atas 30%, risiko kelembapan tinggi, atau kelonggaran kesesuaian negatif terdeteksi.',
    },
    physicsCopy: {
      quote: 'Rekayasa penawaran menggabungkan bahan langsung, amortisasi mesin, paparan tenaga kerja, energi, dan sisa cetak yang diharapkan. Tingkat kegagalan dimodelkan sebagai koreksi hasil sehingga harga jual menanggung biaya komponen yang ditolak.',
      margin: 'Margin dihitung dari harga jual, bukan markup pada biaya. Margin kotor saat ini adalah {margin}, sehingga setiap perubahan harga menggeser laba dan penyangga risiko.',
      labor: 'Biaya pasca-pemrosesan adalah waktu dikalikan dengan tarif bengkel. Beban tenaga kerja saat ini ditambah penyelesaian akhir adalah {laborCost}.',
      roi: 'ROI mengonversi capex printer menjadi bulan pemulihan produksi. Laba bulanan negatif disaturasi dalam tampilan karena farm tidak pernah memulihkan biaya perangkat keras berdasarkan asumsi tersebut.',
      threads: 'Geometri ulir metrik ISO diperkirakan dari kedalaman pitch. Diameter minor dan jarak bebas yang digerakkan oleh pitch membantu pengguna CAD menghindari ulir internal yang menyatu setelah pembengkakan bead FDM.',
      fits: 'Jarak kelonggaran kesesuaian mekanis membandingkan batas lubang tercetak dengan batas poros tercetak. Kelonggaran negatif memprediksi interferensi; kelonggaran positif memprediksi kesesuaian slip atau running.',
      drying: 'Waktu pengeringan mengikuti akselerasi gaya Arrhenius yang disederhanakan: suhu yang lebih tinggi meningkatkan laju difusi sementara kelembapan dan faktor polimer meningkatkan beban kelembapan.',
      purge: 'Rasio purga AMS/MMU adalah volume purga dibagi dengan total volume ekstrusi. Di atas 30.00% pekerjaan ditandai karena limbah mulai menjadi pendorong biaya produksi.',
    },
    chartLabels: ['BIAYA', 'PVP', 'MARGIN', 'ROI', 'H2O', 'PURGA'],
    copyFields: {
      quoteCost: 'Biaya kalkulasi',
      pvp: 'PVP',
      currency: 'Mata uang',
      margin: 'Margin',
      roi: 'ROI',
      threadMinor: 'Ulir minor',
      fitClearance: 'Kelonggaran kesesuaian',
      drying: 'Pengeringan',
      purgeRatio: 'Rasio purga',
    },
    displayUnits: {
      months: 'bln',
      millimeter: 'mm',
      inch: 'in',
      hour: 'h',
      clearance: 'kelonggaran',
    },
    copyLabel: 'Salin telemetri',
    copiedLabel: 'Disalin',
    unitSystemLabel: 'Unit',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    currencyLabel: 'Mata uang',
    currencyOptions: [
      { code: 'EUR', label: '€ Euro' },
      { code: 'USD', label: '$ Dolar AS' },
      { code: 'GBP', label: '£ Poundsterling' },
      { code: 'CAD', label: 'C$ Dolar Kanada' },
      { code: 'AUD', label: 'A$ Dolar Australia' },
      { code: 'CHF', label: 'Fr Franc Swiss' },
      { code: 'MXN', label: '$ Peso Meksiko' },
      { code: 'BRL', label: 'R$ Real Brasil' },
      { code: 'ARS', label: '$ Peso Argentina' },
      { code: 'CLP', label: '$ Peso Cile' },
      { code: 'COP', label: '$ Peso Kolombia' },
      { code: 'PEN', label: 'S/ Sol Peru' },
      { code: 'JPY', label: '¥ Yen Jepang' },
      { code: 'CNY', label: '¥ Yuan China' },
      { code: 'KRW', label: '₩ Won Korea Selatan' },
      { code: 'INR', label: '₹ Rupee India' },
      { code: 'PLN', label: 'zł Zloty Polandia' },
      { code: 'RUB', label: '₽ Rubel Rusia' },
      { code: 'SEK', label: 'kr Krona Swedia' },
      { code: 'NOK', label: 'kr Krone Norwegia' },
      { code: 'DKK', label: 'kr Krone Denmark' },
      { code: 'TRY', label: '₺ Lira Turki' },
    ],
    criticalLabel: 'Kritis',
    watchLabel: 'Pengawasan',
    nominalLabel: 'Nominal',
    inputsTitle: 'Input Proses',
    telemetryTitle: 'Telemetri Visual',
    outputTitle: 'Output Terhitung',
    physicsTitle: 'Fisika dan Model Proses',
    modulesAriaLabel: 'Modul suite presisi',
    telemetryAriaLabel: 'Grafik telemetri reaktif',
    twinAriaLabel: 'Kembaran digital mekanis',
  },
  seo: [
    { type: 'title', text: 'Mengapa pencetakan FDM presisi memerlukan suite diagnostik daripada kalkulator terisolasi', level: 2 },
    { type: 'paragraph', html: 'Keputusan produksi FDM jarang gagal karena rumusnya tidak diketahui. Keputusan tersebut gagal karena biaya, toleransi, pengeringan, limbah purga, tenaga kerja, dan pemanfaatan mesin diperlakukan sebagai obrolan terpisah. Penawaran harga pelanggan dapat terlihat menguntungkan sampai menit pasca-proses dimasukkan. Ulir CAD dapat terlihat benar sampai pembengkakan bead dan kelonggaran dipertimbangkan. Pekerjaan multiwarna dapat terlihat kecil sampai volume purga dihargai sebagai filamen yang dibeli. Suite ini menyatukan hubungan-hubungan tersebut ke dalam satu model reaktif sehingga pengguna melihat batas proses, bukan satu angka terputus.' },
    { type: 'paragraph', html: 'Antarmuka ini sengaja menggunakan output dua desimal tetap karena kalkulasi penawaran dan tinjauan CAD memerlukan nilai yang tidak ambigu. Secara internal, kalkulasi tetap berupa nilai floating point sampai lapisan tampilan memformatnya. Perbedaan itu penting: membulatkan terlalu dini dapat menggeser kelonggaran kecil, persentase margin, atau ambang batas purga yang cukup untuk membuat keputusan yang salah. Output yang disalin mengikuti format parameter bertanda kurung siku terstandardisasi sehingga nilai dapat ditempelkan ke tiket pekerjaan, catatan pelanggan, dan log perubahan CAD tanpa pemisah ribuan atau kejutan lokal.' },
    { type: 'stats', columns: 4, items: [
      { value: '8', label: 'Diagnostik produksi terkait' },
      { value: '2.00', label: 'Desimal tetap pada setiap output yang ditampilkan' },
      { value: '30.00%', label: 'Ambang batas rasio purga kritis' },
      { value: '0', label: 'Tombol hitung yang diperlukan' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Suite ini dibuat untuk peninjauan proses', badge: 'Alur kerja rekayasa', html: 'Gunakan sebelum laminasi (slicing), kalkulasi harga, atau merilis CAD. Model ini sengaja dirancang untuk diagnostik: modul ini menyoroti apakah pekerjaan layak mendapatkan pemeriksaan lebih mendalam, kalibrasi fisik, penetapan harga ulang pelanggan, atau perubahan desain sebelum waktu printer digunakan.' },

    { type: 'title', text: 'Pembuatan penawaran harga dan biaya tersembunyi dari tingkat kegagalan', level: 2 },
    { type: 'paragraph', html: 'Penawaran harga cetak 3D profesional tidak boleh hanya menilai plastik yang terlihat. Basis biaya langsung mencakup bahan, waktu cetak, tarif jam mesin, energi, tenaga kerja, pasca-pemrosesan, dan sisa cetak yang diharapkan. Tingkat kegagalan sangat penting karena mengubah hasil. Jika suatu pekerjaan memiliki ekspektasi kegagalan 8 persen, bagian yang diterima harus menanggung biaya dari upaya yang ditolak. Oleh karena itu, model ini membagi biaya langsung dengan hasil yang dapat digunakan, bukan menambahkan baris kontingensi yang tidak jelas.' },
    { type: 'paragraph', html: 'Modul penawaran ini berguna untuk pencarian seperti <strong>kalkulator penawaran FDM dengan tingkat kegagalan</strong>, <strong>kalkulator harga cetak 3D untuk usaha kecil</strong>, dan <strong>menghitung biaya pekerjaan cetak 3D dengan tenaga kerja</strong>. Pencarian tersebut biasanya datang dari pengguna yang sudah menjual cetakan atau berencana untuk melakukannya. Mereka membutuhkan angka yang bertahan dalam produksi nyata, bukan perkiraan hobi yang hanya didasarkan pada gram PLA.' },
    { type: 'table', headers: ['Penggerak biaya', 'Mengapa ini penting', 'Kesalahan umum'], rows: [
      ['Bahan', 'Mencakup polimer yang dikonsumsi oleh objek, support, rakit (raft), pinggiran (brim), purga, dan benda uji.', 'Hanya menilai massa model akhir.'],
      ['Tarif mesin', 'Mewakili depresiasi, pemeliharaan, keausan nosel, permukaan bed, dan biaya peluang.', 'Menganggap waktu printer gratis karena operator tidak hadir.'],
      ['Energi', 'Kecil per pekerjaan tetapi terlihat pada produksi skala farm.', 'Mengabaikan ruang berpemanas atau bahan bersuhu bed tinggi.'],
      ['Tenaga kerja', 'Termasuk penyiapan, pelepasan, inspeksi, pengemasan, dan komunikasi pelanggan.', 'Hanya mengenakan biaya untuk durasi cetak.'],
      ['Hasil', 'Bagian yang ditolak harus dipulihkan oleh penjualan yang diterima.', 'Menambahkan markup acak alih-alih memodelkan probabilitas sisa cetak.']
    ] },
    { type: 'tip', title: 'Berikan penawaran harga dari data bengkel yang diukur', html: 'Ganti default dengan tarif listrik Anda sendiri, rata-rata waktu intervensi, persentase pekerjaan yang gagal, dan menit pasca-pemrosesan. Bengkel kecil dengan pembersihan manual yang lambat dapat memiliki biaya riil yang lebih tinggi daripada farm dengan mesin yang lebih cepat dan perlengkapan berulang.' },

    { type: 'title', text: 'PVP, margin, dan perbedaan antara markup dan laba', level: 2 },
    { type: 'paragraph', html: 'Margin dihitung sebagai laba dibagi dengan harga jual, bukan sebagai persentase sederhana yang ditambahkan ke biaya. Perbedaan ini sangat penting saat menawarkan suku cadang cetak 3D yang menghadap pelanggan. Markup 40 persen pada biaya tidak menghasilkan margin 40 persen; ini menghasilkan margin yang lebih rendah karena penyebutnya adalah harga jual akhir. Suite ini menggunakan penetapan harga berbasis margin karena begitulah cara banyak bengkel mengevaluasi apakah lini produk dapat membayar suku cadang pengganti, pengemasan, cetakan gagal, dan waktu administrasi.' },
    { type: 'paragraph', html: 'Untuk komponen dengan biaya 10.00 EUR dan target margin 40.00%, harga yang dibutuhkan adalah 16.67 EUR. Menjualnya seharga 14.00 EUR karena seseorang menambahkan markup 40 persen hanya menyisakan margin 28.57%. Perbedaan tersebut terlihat kecil pada satu item tetapi menjadi signifikan di ratusan pesanan. Farm dengan margin tipis bisa sibuk dan tetap kehilangan uang ketika kegagalan, tenaga kerja, dan purga diabaikan.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Pemikiran markup', description: 'Menambahkan persentase ke biaya. Cepat untuk estimasi kasar tetapi lemah untuk perencanaan profitabilitas.', points: ['Matematika mental yang mudah', 'Dapat meremehkan PVP yang dibutuhkan', 'Tidak secara langsung menyatakan bagi hasil laba'] },
      { title: 'Pemikiran margin', description: 'Menetapkan harga jual sehingga laba menjadi pangsa target pendapatan. Lebih baik untuk produksi berulang.', points: ['Sesuai dengan pelaporan bisnis', 'Melindungi pemulihan biaya overhead', 'Berguna untuk penetapan harga katalog'] },
    ] },
    { type: 'proscons', title: 'Target margin agresif', items: [
      { pro: 'Melindungi bengkel dari cetak ulang, dukungan pelanggan, dan pembersihan lambat.', con: 'Dapat mematok harga cetakan komoditas sederhana di atas pesaing lokal.' },
      { pro: 'Membuat pekerjaan khusus bervolume rendah layak secara finansial.', con: 'Membutuhkan penjelasan mengapa desain, kesesuaian, dan keandalan memiliki nilai.' },
      { pro: 'Mendanai perlengkapan, pengering, nosel, dan kontrol kualitas yang lebih baik.', con: 'Dapat mengurangi konversi untuk bagian dekoratif murni berisiko rendah.' },
    ] },

    { type: 'title', text: 'Tenaga kerja dan pasca-pemrosesan sebagai variabel rekayasa', level: 2 },
    { type: 'paragraph', html: 'Pasca-pemrosesan bukanlah kategori penyelesaian akhir yang samar. Ini adalah proses waktu dengan tarif, repetibilitas, dan mode kegagalan tersendiri. Melepaskan support dari PETG, mengampelas garis lapisan, pemasangan insert berulir panas, penghalusan uap, pembersihan resin untuk bengkel hibrida, pengemasan, dan pengukuran semuanya menyita perhatian terampil. Jika menit-menit itu tidak dihargai, printer farm menyubsidi pelanggan dengan tenaga kerja tidak dibayar.' },
    { type: 'paragraph', html: 'Modul tenaga kerja memisahkan penanganan umum dari penyelesaian akhir sehingga pengguna dapat memodelkan dua tarif bengkel yang berbeda. Operator mesin yang memulai pekerjaan mungkin tidak memiliki biaya yang sama dengan teknisi yang membuat ulir lubang, memeriksa kesesuaian, memasang insert berulir, atau melakukan penyelesaian kosmetik. Dasbor membuat menit-menit tersebut terlihat di samping material dan waktu mesin sehingga penawaran tidak terlihat sehat sementara pekerjaan bench diam-diam menghabiskan laba.' },
    { type: 'list', items: [
      'Lacak waktu penyiapan secara terpisah dari waktu penyelesaian untuk setidaknya sepuluh pekerjaan berulang.',
      'Sertakan waktu inspeksi ketika kesesuaian mekanis atau dimensi penting pelanggan terlibat.',
      'Naikkan tarif pasca-pemrosesan untuk pekerjaan yang membutuhkan kontrol debu, pelarut, alat panas, atau pengukuran presisi.',
      'Gunakan perlengkapan khusus dan operasi batch ketika biaya tenaga kerja lebih tinggi daripada biaya bahan.',
      'Tambahkan tenaga kerja ke templat penawaran bahkan ketika pelanggan menyediakan file yang siap cetak.',
    ] },
    { type: 'card', title: 'Maksud pencarian yang dicakup', html: 'Pengguna yang mencari <strong>kalkulator biaya tenaga kerja cetak 3D</strong>, <strong>biaya pasca pemrosesan untuk cetakan FDM</strong>, dan <strong>cara menetapkan harga komponen cetak 3D dengan tenaga kerja</strong> biasanya mencoba berhenti menetapkan harga terlalu rendah pada pekerjaan manual. Kalkulator memunculkan tenaga kerja sebagai angka utama, bukan catatan di bawah perkiraan bahan.' },

    { type: 'title', text: 'ROI print farm dan pemulihan kapasitas', level: 2 },
    { type: 'paragraph', html: 'Pengembalian investasi (ROI) untuk sebuah print farm bergantung pada kontribusi bulanan setelah biaya variabel, bukan pada pendapatan kotor. Delapan printer dapat terlihat mengesankan, tetapi jika harga pesanan rata-rata rendah dan biaya penawaran tinggi, periode pemulihan perangkat keras merenggang atau tidak pernah tercapai. Modul ROI mengonversi jumlah printer, biaya printer, pesanan bulanan, harga jual rata-rata, dan model biaya penawaran langsung menjadi bulan untuk memulihkan modal perangkat keras.' },
    { type: 'paragraph', html: 'Detail penting adalah bahwa ROI digabungkan dengan model proses saat ini. Jika tingkat kegagalan, tenaga kerja, purga, atau pasca-pemrosesan meningkat, biaya penawaran naik dan laba bulanan turun. Hal itu membuat ROI menjadi hasil diagnostik, bukan sel rencana bisnis yang statis. Ketika laba bulanan negatif, alat ini menampilkan tak terhingga karena tidak ada pengembalian di bawah asumsi tersebut.' },
    { type: 'table', headers: ['Gejala ROI', 'Kemungkinan penyebab', 'Respons operasional'], rows: [
      ['Pengembalian di bawah 6 bulan', 'Harga yang kuat atau pemanfaatan tinggi dengan tenaga kerja yang terkendali.', 'Lindungi pengulangan dan hindari mengambil pekerjaan khusus berharga rendah.'],
      ['Pengembalian 6 hingga 18 bulan', 'Rentang pemulihan farm kecil yang normal.', 'Tingkatkan pengelompokan batch, templat penawaran, dan pelacakan kegagalan.'],
      ['Pengembalian di atas 18 bulan', 'Perangkat keras menganggur atau pekerjaan dihargai terlalu rendah.', 'Tinjau bauran produk, beban support, dan tarif jam mesin.'],
      ['Pengembalian tak terbatas', 'Biaya variabel melebihi pendapatan penjualan.', 'Hentikan penskalaan perangkat keras hingga harga atau ekonomi proses berubah.'],
    ] },
    { type: 'summary', title: 'Daftar periksa tinjauan ROI', items: [
      'Gunakan pesanan yang diterima, bukan pertanyaan, sebagai jumlah pesanan bulanan.',
      'Sertakan penggantian nosel, bed, ekstruder, pengering, dan suku cadang dalam biaya perangkat keras jika memungkinkan.',
      'Periksa apakah pekerjaan singkat bermargin tinggi mengalahkan pekerjaan dekoratif panjang dengan harga jual rendah.',
      'Modelkan tingkat kegagalan nyata setelah penyetelan, bukan perkiraan optimis minggu pertama.'
    ] },

    { type: 'title', text: 'Perencanaan ulir metrik ISO untuk CAD FDM', level: 2 },
    { type: 'paragraph', html: 'Standar ulir metrik menentukan geometri dan kelas toleransi, tetapi FDM menambahkan lebar bead, penyusutan termal, tekanan lapisan pertama, kompensasi slicer, dan rayapan bahan. Ulir CAD yang secara matematis benar dapat tercetak terlalu rapat karena filamen yang diekstrusi bukanlah alat pemotong yang sangat tajam. Suite ini memperkirakan diameter minor yang digerakkan oleh pitch dan faktor kelonggaran yang dapat dikonfigurasi sehingga desainer dapat melihat apakah ulir internal layak mendapatkan kelonggaran ekstra sebelum mencetak.' },
    { type: 'paragraph', html: 'Model ini bukan pengganti tabel ISO 965. Ini adalah diagnostik pra-CAD untuk pengguna yang mencari <strong>kalkulator toleransi ulir ISO cetak 3D</strong>, <strong>jarak bebas ulir cetak 3D M12</strong>, atau <strong>kelonggaran CAD ulir internal FDM</strong>. Pengguna tersebut perlu memutuskan apakah akan memodelkan ulir secara langsung, mengejarnya dengan tap ulir, menggunakan insert berulir panas, atau mencetak lubang pilot untuk pemesinan pasca-cetak.' },
    { type: 'glossary', items: [
      { term: 'Pitch', definition: 'Jarak aksial antara puncak ulir. Pitch yang lebih besar umumnya meningkatkan kedalaman ulir dan mengubah diameter minor yang dapat dicetak.' },
      { term: 'Diameter minor', definition: 'Diameter internal yang lebih kecil dari profil ulir. Dalam FDM, diameter ini sensitif terhadap pembengkakan bead dan urutan dinding slicer.' },
      { term: 'Faktor kelonggaran', definition: 'Kelonggaran praktis yang dinyatakan sebagai fraksi pitch untuk mengompensasi perilaku plastik tercetak.' },
      { term: 'Kelas toleransi', definition: 'Penunjukan kesesuaian terstandarisasi untuk ulir manufaktur. Plastik tercetak biasanya membutuhkan penyesuaian empiris di sekitar kelas tersebut.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Ulir adalah masalah pengukuran', badge: 'Perhatian CAD', html: 'Cetak satu kupon kalibrasi per bahan, nosel, dan keluarga tinggi lapisan. Ulir yang berfungsi dalam PLA kering pada lapisan 0.20 mm dapat mengikat di PETG, nilon, atau filamen basah karena tekstur permukaan dan elastisitas polimer berubah.' },

    { type: 'title', text: 'Kesesuaian poros dan lubang: melihat kelonggaran sebelum cetak gagal', level: 2 },
    { type: 'paragraph', html: 'Kesesuaian mekanis dalam FDM dikendalikan oleh ukuran CAD dan kesalahan proses. Lubang cenderung tercetak berukuran lebih kecil karena perimeter dalam mendekati lingkaran dengan lebar bead terbatas dan karena penyusutan plastik saat mendingin dapat menarik ke dalam. Poros dapat tercetak berukuran lebih besar dari aliran ekstrusi, penempatan kelim (seam), atau tekanan kaki gajah (elephant foot) di bed. Suite ini memvisualisasikan batas lubang dan poros sehingga kelonggaran negatif menjadi jelas sebelum komponen dicetak.' },
    { type: 'paragraph', html: 'Untuk bagian fungsional, pertanyaannya bukan hanya apakah poros pas di dalam lubang. Ini adalah apakah kesesuaiannya cocok dengan kasus penggunaan: slip fit, running fit, push fit, press fit, atau dudukan bantalan (bearing seat) yang ditahan. Anisotropi FDM, tonjolan lapisan, dan pergeseran dimensi berarti kelonggaran positif yang kecil secara matematis masih bisa terasa rapat. Kembaran digital memperlakukan kelonggaran negatif sebagai kritis dan kelonggaran positif kecil sebagai sesuatu yang harus divalidasi dengan kupon uji.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Slip fit', description: 'Komponen dirakit dengan tangan dengan resistansi minimal. Berguna untuk penutup yang dapat dilepas, jig, dan pin penyelarasan.', points: ['Membutuhkan kelonggaran positif', 'Sensitif terhadap tekstur permukaan', 'Seringkali paling mudah disetel'] },
      { title: 'Running fit', description: 'Komponen bergerak relatif satu sama lain setelah perakitan. Berguna untuk pivot dan rol.', points: ['Membutuhkan kelonggaran lebih banyak', 'Pelumasan dapat membantu', 'Kebulatan itu penting'] },
      { title: 'Press fit', description: 'Komponen sengaja berinterferensi. Berguna hanya jika elastisitas bahan, tebal dinding, dan beban dikendalikan.', points: ['Risiko retak', 'Orientasi cetak penting', 'Diperlukan pengujian kupon'] },
    ] },
    { type: 'tip', title: 'Gunakan kelonggaran, bukan harapan', html: 'Jika lubang tercetak harus menerima pasak, bantalan, sekrup, atau sisipan yang dibeli, ukur fitur tercetak dan komponen yang dibeli. Sesuaikan kelonggaran CAD dari kesalahan yang diukur daripada menerapkan offset universal ke setiap bahan.' },

    { type: 'title', text: 'Pengeringan filamen: difusi, adsorpsi, dan gejala cetak', level: 2 },
    { type: 'paragraph', html: 'Filamen higroskopis tidak hanya basah di permukaan. Kelembapan diadsorbsi ke permukaan polimer dan dapat berdifusi ke dalam filamen seiring waktu. Selama ekstrusi, air tersebut dapat berkedip menjadi uap, menghasilkan letupan, gelembung, ekstrusi tidak konsisten, ikatan lapisan lemah, petak permukaan buram atau berawan, stringing, dan derau dimensi. Nilon, TPU, PVA, PC, dan beberapa komposit terisi bisa sangat sensitif, sementara PLA bervariasi menurut formulasi dan riwayat penyimpanan.' },
    { type: 'paragraph', html: 'Modul pengeringan menggunakan beban kelembapan, massa filamen, faktor bahan, dan suhu sebagai model diagnostik. Suhu yang lebih tinggi mempercepat pembuangan kelembapan, tetapi setiap polimer memiliki rentang pengeringan yang aman. Suhu yang terlalu rendah membuang waktu; suhu yang terlalu tinggi dapat merusak spul, menganil filamen, melunakkan polimer, atau menyatukan gulungan. Maksud dari kalkulasi ini bukan untuk mengklaim kadar kelembapan laboratorium, melainkan memperkirakan kapan pengeringan kemungkinan besar diperlukan sebelum pekerjaan presisi.' },
    { type: 'table', headers: ['Perilaku bahan', 'Gejala cetak', 'Respons proses'], rows: [
      ['Kelembapan ringan', 'Stringing ringan atau perubahan kilap kecil.', 'Keringkan sebelum pekerjaan kosmetik dan tuning retrack.'],
      ['Kelembapan sedang', 'Letupan, dinding kasar, atau lebar ekstrusi tidak konsisten.', 'Keringkan spul dan ulangi kalibrasi aliran.'],
      ['Kelembapan parah', 'Busa, lapisan lemah, output rapuh, atau support gagal.', 'Keringkan lebih lama, simpan dalam keadaan tersegel, dan buang bagian yang rusak jika diperlukan.'],
      ['Pengeringan terlalu panas', 'Filamen oval atau deformasi spul.', 'Turunkan suhu dan verifikasi panduan produsen.'],
    ] },
    { type: 'message', title: 'Kelembapan dan toleransi berinteraksi', html: 'Filamen basah dapat membuat bagian mekanis terlihat seperti masalah CAD atau aliran karena ekstrusi menjadi tidak konsisten. Oleh karena itu, pengeringan adalah bagian dari kontrol dimensi, bukan hanya pemeliharaan kualitas permukaan.' },

    { type: 'title', text: 'Rasio purga AMS dan MMU sebagai peringatan produksi', level: 2 },
    { type: 'paragraph', html: 'Pencetakan multi-bahan mengubah perubahan warna menjadi ekonomi bahan. Menara purga, wipe block, atau ekstrusi saluran tidak gratis; itu adalah filamen yang dibeli dan diubah menjadi volume non-produk. Objek dekoratif kecil dengan banyak lapisan bergantian dapat membuang lebih banyak bahan daripada braket warna tunggal yang lebih besar. Suite ini menghitung rasio purga sebagai volume purga dibagi dengan total volume ekstrusi sehingga pangsa limbah terlihat segera.' },
    { type: 'paragraph', html: 'Ambang batas 30.00% sengaja dibuat ketat. Ketika hampir sepertiga dari polimer yang diekstrusi adalah purga, pekerjaan tersebut harus ditinjau untuk urutan warna, purga-ke-infill, pembagian model, pengelompokan batch, atau penawaran harga yang lebih tinggi. Dalam istilah print-farm, purga juga memakan waktu mesin dan meningkatkan keausan akibat pergantian filamen. Penawaran harga yang mengabaikan purga dapat mengubah bagian multiwarna yang mengesankan secara visual menjadi pekerjaan bermargin rendah.' },
    { type: 'list', items: [
      'Kelompokkan warna yang sama untuk mengurangi transisi kontaminasi tinggi.',
      'Hindari pertukaran gelap-ke-terang berulang kali saat desain dapat ditata ulang.',
      'Gunakan purga-ke-infill hanya jika kontaminasi tersembunyi dapat diterima secara struktural.',
      'Biayakan bahan purga secara terpisah pada penawaran pelanggan untuk pekerjaan multiwarna dekoratif.',
      'Jalankan kalibrasi slicer untuk setiap keluarga bahan sebelum mengurangi purga secara agresif.',
    ] },
    { type: 'diagnostic', variant: 'error', title: 'Kondisi purga kritis', badge: '30.00%+', html: 'Rasio purga di atas 30.00% berarti printer menghabiskan sebagian besar material untuk pembersihan. Perlakukan ini sebagai pemicu desain ulang, pengelompokan batch, atau penetapan harga sebelum menerima produksi run.' },

    { type: 'title', text: 'Cara menggunakan output papan klip di catatan produksi', level: 2 },
    { type: 'paragraph', html: 'Setiap kalkulator dalam suite mengekspor format parameter bertanda kurung siku yang sama: <code>[Parameter: Nilai | Parameter: Nilai]</code>. Ini sengaja berupa teks polos karena dapat bertahan di email, tiket bengkel, spreadsheet, pesan pelanggan, dan komentar CAD tanpa dependensi pemformatan. Ini juga mencegah pemisah ribuan tersembunyi atau pengelompokan desimal khusus lokal masuk ke dalam penawaran atau catatan gambar.' },
    { type: 'paragraph', html: 'Gunakan baris yang disalin sebagai rekam jepret dari status keputusan. Misalnya, lampirkan ke revisi penawaran ketika pelanggan menambahkan perubahan warna, atau tempelkan ke masalah CAD ketika kelonggaran poros bergeser dari positif ke negatif. Karena setiap nilai yang terlihat ditetapkan ke dua desimal, catatan tersebut dapat dibaca oleh masinis, desainer, dan operator bengkel tanpa pemformatan ulang.' },
    { type: 'summary', title: 'Ringkasan alur kerja produksi', items: [
      'Mulai dengan penawaran dan margin untuk memverifikasi bahwa pekerjaan dapat membiayai dirinya sendiri.',
      'Tinjau tenaga kerja dan pasca-pemrosesan sebelum menjanjikan waktu pengiriman.',
      'Periksa ROI saat membeli printer atau menerima kontrak berulang.',
      'Gunakan modul ulir dan kesesuaian sebelum merilis CAD fungsional.',
      'Keringkan bahan higroskopis sebelum menyalahkan pengaturan slicer.',
      'Perlakukan rasio purga tinggi sebagai peringatan desain dan harga.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
