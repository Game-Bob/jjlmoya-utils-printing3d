import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'kalkulator-roi-filamen-curah';
const title = 'Kalkulator ROI Filamen Curah';
const description = 'Bandingkan spul filamen 1kg dengan spul curah 3kg, 5kg, atau khusus dengan risiko kelembapan, penghematan nyata, dan format mata uang lokal.';

const faqData = [
  {
    question: 'Apakah spul filamen 5kg selalu lebih murah daripada membeli lima spul 1kg?',
    answer: 'Tidak. Spul tersebut lebih murah hanya jika biaya per gram lebih rendah dan Anda bisa menghabiskan material sebelum paparan kelembapan menurunkan kualitas cetak. Konsumsi lambat bisa mengubah diskon curah menjadi pemborosan.',
  },
  {
    question: 'Mengapa kalkulator mengurangi penalti risiko?',
    answer: 'Penalti ini memperkirakan nilai yang hilang ketika perkiraan waktu konsumsi lebih lama dari jendela penyimpanan aman Anda. Ini bukan konversi nilai tukar atau model kelembapan laboratorium; ini adalah penyesuaian risiko perencanaan.',
  },
  {
    question: 'Apakah saya perlu kurs mata uang langsung?',
    answer: 'Tidak. Alat ini menggunakan tabel kurs perkiraan lokal untuk mengonversi harga yang terlihat saat Anda mengganti mata uang. Perhitungan ini menjaga kesetaraan tanpa menghubungi server, sehingga keputusan pembelian akhir tetap harus menggunakan harga yang ditampilkan toko atau bank Anda.',
  },
  {
    question: 'Berapa lama penyimpanan aman yang harus saya masukkan untuk PLA, PETG, TPU, atau Nylon?',
    answer: 'Gunakan periode di mana Anda bisa menjaga material tersebut tetap kering di lingkungan Anda. PLA mungkin bisa disimpan lebih lama daripada Nylon atau TPU, tetapi ruangan terbuka, iklim lembap, atau segel kantong yang buruk dapat mempersingkat jendela aman secara drastis.',
  },
];

const howToData = [
  {
    name: 'Masukkan harga spul standar',
    text: 'Ketik harga spul 1kg yang biasanya Anda beli. Berat spul standar dapat disesuaikan jika pemasok Anda menggunakan format lain.',
  },
  {
    name: 'Masukkan penawaran curah',
    text: 'Pilih 3kg, 5kg, atau berat khusus dan ketik harga penuh spul yang lebih besar tersebut dalam mata uang yang sama.',
  },
  {
    name: 'Modelkan risiko penyimpanan',
    text: 'Tambahkan konsumsi bulanan Anda dan waktu penyimpanan maksimum yang Anda percaya sebelum kelembapan, kerapuhan, atau upaya pengeringan menjadi biaya nyata.',
  },
  {
    name: 'Baca penghematan nyata',
    text: 'Gunakan angka penghematan nyata sebagai sinyal pembelian karena angka tersebut mencakup diskon curah dan penalti degradasi.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Mata uang',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    standardTitle: 'Spul standar',
    bulkTitle: 'Spul curah',
    consumptionTitle: 'Konsumsi dan penyimpanan',
    standardWeightLabel: 'Berat standar',
    standardPriceLabel: 'Harga spul standar',
    bulkWeightLabel: 'Berat curah',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Lainnya',
    bulkPriceLabel: 'Harga spul curah',
    customWeightLabel: 'Berat curah khusus',
    monthlyUseLabel: 'Konsumsi bulanan',
    safeStorageLabel: 'Jendela penyimpanan aman',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'bulan',
    realSavingsLabel: 'Penghematan nyata setelah risiko',
    grossSavingsLabel: 'Penghematan kotor',
    riskPenaltyLabel: 'Penalti risiko kelembapan',
    breakEvenLabel: 'Waktu konsumsi',
    viabilityLabel: 'Kelayakan',
    tableMetricLabel: 'Metrik',
    tableStandardLabel: 'Spul 1kg',
    tableStandardImperialLabel: 'Spul 2,2lb',
    tableBulkLabel: 'Spul curah',
    costPerGramMetric: 'Biaya per gram',
    costPerOunceMetric: 'Biaya per ons',
    totalSpoolMetric: 'Harga spul',
    usableWindowMetric: 'Jendela konsumsi',
    profitableLabel: 'Menguntungkan',
    neutralLabel: 'Netral',
    poorLabel: 'Nilai buruk',
    humidityWarningTitle: 'Risiko degradasi kelembapan',
    humidityWarning: 'Risiko degradasi: membeli spul ini bisa merugikan jika Anda tidak memiliki sistem pengeringan atau penyimpanan kedap udara.',
    safeMessage: 'Risiko penyimpanan masih dalam jendela aman yang dipilih. Jaga spul tetap tersegel dan kering untuk mempertahankan penghematan yang diharapkan.',
  },
  seo: [
    {
      type: 'title',
      text: 'Cara memutuskan apakah filamen curah benar-benar lebih murah',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spul filamen 3kg atau 5kg terlihat menarik karena harga per kilogram yang tertera biasanya lebih rendah daripada spul 1kg. Kesalahannya adalah hanya membandingkan total di kasir. Perbandingan yang benar menormalkan kedua penawaran ke <strong>biaya per gram</strong>, mengalikan selisihnya dengan jumlah material yang sebenarnya akan Anda beli, lalu menanyakan apakah material tersebut akan tetap dapat dicetak hingga habis.',
    },
    {
      type: 'paragraph',
      html: 'Rumus intinya sederhana: bagi harga setiap spul dengan beratnya dalam gram. Jika spul 1kg harganya 24.99 dan spul 5kg harganya 89.99, biaya spul 1kg adalah 0.02499 per gram dan spul curah 0.017998 per gram. Penghematan tampak adalah selisih gram dikalikan 5000 gram. Angka itu berguna, tetapi masih belum lengkap jika spul akan dibiarkan terbuka selama berbulan-bulan.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Massa referensi untuk spul filamen desktop umum' },
        { value: '3-5kg', label: 'Format curah tipikal di mana diskon mulai terlihat' },
        { value: '0 API', label: 'Kesetaraan mata uang menggunakan kurs perkiraan lokal, bukan panggilan server langsung' },
      ],
    },
    {
      type: 'table',
      headers: ['Pertanyaan', 'Apa yang dimasukkan', 'Mengapa penting'],
      rows: [
        ['Apa yang biasa saya beli?', 'Harga spul 1kg', 'Ini menetapkan biaya dasar per gram.'],
        ['Apa penawaran curahnya?', 'Total harga dan berat curah', 'Ini menciptakan biaya per gram yang didiskon.'],
        ['Seberapa cepat saya mencetak?', 'Kg yang dikonsumsi per bulan', 'Ini memperkirakan berapa lama spul akan disimpan.'],
        ['Seberapa baik penyimpanan saya?', 'Bulan aman sebelum degradasi', 'Ini menentukan kapan penalti risiko dimulai.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa kelembapan mengubah perhitungan ROI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Filamen bukanlah padanan uang tunai yang duduk aman di rak. Banyak polimer menyerap kelembapan dari udara, dan filamen lembap dapat mencetak dengan gelembung, stringing, ekstrusi rapuh, permukaan keruh, adhesi lapisan lemah, dan aliran tidak konsisten. Kecepatan pastinya tergantung pada material, kelembapan, kemasan, dan apakah spul disimpan di kotak kering, kantong tersegel, atau dudukan terbuka.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mode kegagalan tersembunyi spul curah',
      badge: 'Risiko perencanaan',
      html: 'Spul 5kg bisa menjadi pembelian yang buruk meskipun harga per gramnya sangat baik. Jika printer Anda mengonsumsi 0,5kg per bulan dan jendela penyimpanan aman Anda adalah 3 bulan, spul tersebut membutuhkan sekitar 10 bulan untuk habis. Diskon harus cukup besar untuk menutupi biaya tambahan pengeringan, penyegelan, cetakan gagal, atau risiko material terbuang.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Pengguna cepat',
          description: 'Peternakan cetak kecil, pembuat cosplay, atau produksi batch dapat menghabiskan 3kg hingga 5kg dengan cepat. Filamen curah biasanya masuk akal karena waktu penyimpanannya singkat.',
          points: ['Penggunaan bulanan tinggi', 'Paparan rak rendah', 'Diskon menjadi uang sungguhan yang dihemat'],
        },
        {
          title: 'Pengguna hobi intermiten',
          description: 'Pengguna yang mencetak di akhir pekan atau untuk perbaikan sesekali mungkin membutuhkan waktu berbulan-bulan untuk menghabiskan spul besar. Risiko kelembapan dapat menghilangkan diskon.',
          points: ['Penggunaan bulanan rendah', 'Masa pakai spul terbuka lama', 'Penyimpanan kering lebih penting'],
        },
        {
          title: 'Pengguna material teknis',
          description: 'Material seperti Nylon, TPU, campuran PC, dan beberapa grade PETG seringkali memerlukan disiplin pengeringan yang lebih ketat. Pembelian curah harus dipasangkan dengan peralatan penyimpanan.',
          points: ['Sensitivitas kelembapan lebih tinggi', 'Kotak kering disarankan', 'Ambang penalti harus konservatif'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Apa arti angka penghematan nyata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini menunjukkan penghematan kotor terlebih dahulu, lalu mengurangi penalti degradasi ketika perkiraan waktu konsumsi melebihi jendela penyimpanan aman. Penalti ini sengaja dibuat konservatif, bukan prediksi laboratorium. Ini mewakili realitas ekonomi bahwa filamen lembap atau terlalu tua sering menimbulkan biaya tidak jelas: listrik pengeringan, penanganan ekstra, cetakan gagal, nosel tersumbat, cacat permukaan, dan kemungkinan sebagian spul menjadi tidak layak untuk pekerjaan yang terlihat atau struktural.',
    },
    {
      type: 'list',
      items: [
        'Penghematan nyata positif berarti diskon curah bertahan setelah penyesuaian risiko penyimpanan.',
        'Netral berarti keputusan tergantung pada kenyamanan, ketersediaan warna, pengiriman, dan apakah Anda sudah memiliki kotak kering.',
        'Nilai buruk berarti spul curah tidak lebih murah per gram atau penghematan yang disesuaikan dengan risiko negatif.',
        'Pesan peringatan muncul ketika bulan konsumsi lebih besar dari jendela penyimpanan aman yang Anda masukkan.',
      ],
    },
    {
      type: 'proscons',
      title: 'Pertimbangan pembelian filamen curah',
      items: [
        { pro: 'Biaya per gram lebih rendah untuk pencetakan volume tinggi.', con: 'Lebih banyak modal terikat pada satu material, warna, dan batch pemasok.' },
        { pro: 'Lebih sedikit penggantian spul selama produksi panjang.', con: 'Massa terbuka yang lebih besar dapat terdegradasi sebelum habis.' },
        { pro: 'Lebih sedikit limbah kemasan per kilogram.', con: 'Spul besar mungkin memerlukan dudukan yang lebih kuat atau dudukan eksternal.' },
        { pro: 'Berguna untuk pekerjaan peternakan berulang dan produksi batch.', con: 'Cocok untuk warna langka, material eksperimental, atau penggunaan hobi lambat.' },
      ],
    },
    {
      type: 'title',
      text: 'Cara memilih jendela penyimpanan aman',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jendela penyimpanan aman bukanlah konstanta material universal. Ini adalah jumlah waktu yang secara pribadi Anda percaya filamen akan tetap dapat dicetak dalam kondisi penyimpanan Anda. Kantong tersegel dengan desikan segar di ruangan kering sangat berbeda dengan spul terbuka di samping printer di garasi lembap. Untuk keputusan pembelian yang konservatif, masukkan jumlah bulan setelahnya Anda akan mulai mengeringkan spul sebelum cetakan penting.',
    },
    {
      type: 'table',
      headers: ['Situasi', 'Perilaku perencanaan yang disarankan', 'Alasan'],
      rows: [
        ['Dudukan spul terbuka di ruangan lembap', 'Gunakan jendela aman pendek', 'Paparan kelembapan terjadi terus-menerus.'],
        ['Kotak kedap udara dengan desikan', 'Gunakan jendela aman lebih panjang', 'Spul terlindungi di antara cetakan.'],
        ['Kotak kering yang memberi makan printer', 'Gunakan jendela lebih panjang tapi realistis', 'Pencetakan dan penyimpanan keduanya terkontrol.'],
        ['Nylon, TPU, PC, atau support larut', 'Bersikaplah konservatif', 'Material ini bisa menjadi bermasalah saat dicetak ketika basah.'],
        ['PLA digunakan untuk prototipe kasar', 'Toleransi risiko bisa lebih tinggi', 'Masalah kosmetik ringan mungkin dapat diterima untuk bagian yang tidak kritis.'],
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan kalkulator sebelum diskon berakhir',
      html: 'Diskon kilat sering membuat spul curah terasa mendesak. Masukkan harga diskon, harga termasuk pengiriman jika memungkinkan, dan penggunaan bulanan realistis Anda. Jika waktu konsumsi lebih lama dari jendela penyimpanan Anda, diskon harus cukup besar untuk menutupi risiko tambahan.',
    },
    {
      type: 'title',
      text: 'Konversi mata uang tanpa API kurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Estimator ini dirancang untuk berjalan di sisi klien. Ia tidak mengambil kurs langsung, tetapi pemilih mata uang tetap menerapkan pengali konversi lokal saat pengguna mengganti mata uang. Artinya, spul yang dimasukkan sebagai 24.99 EUR menjadi setara perkiraan dalam USD, GBP, JPY, atau mata uang lain yang didukung, bukan sekadar mengganti simbol. Kurs tersebut adalah estimasi perencanaan, jadi harga checkout, biaya kartu, pajak, dan selisih konversi spesifik pasar harus tetap diperiksa sebelum membeli.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Biaya per gram', definition: 'Harga spul dibagi total gram filamen. Ini adalah unit yang dinormalisasi yang digunakan untuk perbandingan yang adil.' },
        { term: 'Penghematan kotor', definition: 'Keuntungan harga sebelum mempertimbangkan kelembapan atau risiko penyimpanan.' },
        { term: 'Penalti risiko', definition: 'Pengurangan perencanaan yang diterapkan ketika spul membutuhkan waktu lebih lama untuk dikonsumsi daripada jendela penyimpanan aman.' },
        { term: 'Penghematan nyata', definition: 'Penghematan kotor dikurangi penalti risiko. Ini adalah sinyal pembelian utama.' },
        { term: 'Jendela konsumsi', definition: 'Berat spul curah dibagi perkiraan penggunaan bulanan.' },
      ],
    },
    {
      type: 'summary',
      title: 'Aturan pembelian praktis',
      items: [
        'Beli curah ketika penghematan nyata jelas positif dan jendela konsumsi sesuai dengan pengaturan penyimpanan Anda.',
        'Hindari curah ketika Anda membeli warna langka yang akan menganggur setelah satu proyek.',
        'Anggap peralatan pengeringan sebagai bagian dari sistem filamen curah, bukan kemewahan opsional untuk polimer yang sensitif terhadap kelembapan.',
        'Bandingkan harga antar, bukan hanya harga halaman produk, ketika biaya pengiriman berbeda antar ukuran spul.',
      ],
    },
    {
      type: 'message',
      title: 'Intinya',
      html: 'Spul curah menguntungkan ketika tiga kondisi terpenuhi: biaya per gram lebih rendah, konsumsi bulanan cukup, dan penyimpanan yang menjaga filamen tetap dapat dicetak. Jika satu kondisi gagal, diskon yang tampak bisa menjadi kerugian material yang tersamar.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
