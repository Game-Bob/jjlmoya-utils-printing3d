import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = 'kalkulator-harga-cetak-3d';
const title = 'Kalkulator Harga Cetak 3D: Margin, Markup, dan Posisi Pasar';
const description =
  'Hitung harga jual eceran (PVP) cetak 3D berdasarkan biaya produksi, target margin keuntungan, markup, dan harga pesaing dengan formula finansial yang akurat.';

const currencyOptions = [
  { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
  { code: 'USD', label: '$', symbol: '$' },
  { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
  { code: 'CAD', label: 'C$', symbol: 'C$' },
  { code: 'AUD', label: 'A$', symbol: 'A$' },
  { code: 'CHF', label: 'Fr', symbol: 'Fr' },
  { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
  { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
  { code: 'BRL', label: 'R$', symbol: 'R$' },
  { code: 'MXN', label: '$', symbol: '$' },
  { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
  { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
  { code: 'SEK', label: 'kr', symbol: 'kr' },
  { code: 'NOK', label: 'kr', symbol: 'kr' },
  { code: 'DKK', label: 'kr', symbol: 'kr' },
  { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
  { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
];

const faqData = [
  {
    question: 'Apa perbedaan antara margin dan markup dalam cetak 3D?',
    answer:
      'Margin adalah keuntungan dibagi dengan harga jual. Markup adalah keuntungan dibagi dengan biaya produksi. Markup 50% pada biaya 40,00 menghasilkan harga jual 60,00 dan margin riil sebesar 33,33%, bukan 50%.',
  },
  {
    question: 'Mengapa target margin harus di bawah 100%?',
    answer:
      'Formula margin membagi biaya produksi dengan satu dikurangi tingkat margin. Pada margin 100%, penyebut menjadi nol, sehingga tidak ada harga jual yang terhingga.',
  },
  {
    question: 'Apakah harga pesaing harus menentukan penawaran cetak 3D saya?',
    answer:
      'Harga pesaing adalah sinyal posisi pasar, bukan pengganti perhitungan biaya. Jika harga kalkulasi Anda di atas pasar, tinjau kembali biaya, tingkat finishing, waktu pengerjaan, dan nilai tambah sebelum memberikan diskon.',
  },
  {
    question: 'Apakah kalkulator ini mencakup pajak atau PPN?',
    answer:
      'Tidak. Kalkulator ini menghitung harga eceran sebelum pajak. Tambahkan PPN, pajak penjualan, biaya platform, atau biaya pemrosesan pembayaran sesuai dengan aturan faktur lokal Anda.',
  },
];

const howToData = [
  { name: 'Masukkan total biaya produksi', text: 'Gunakan biaya penuh dari pekerjaan tersebut, termasuk biaya tetap, biaya variabel, bahan, waktu mesin, tenaga kerja, dan pasca-pemrosesan.' },
  { name: 'Pilih mode margin atau markup', text: 'Pilih apakah PVP yang direkomendasikan harus menggunakan formula target margin atau formula markup.' },
  { name: 'Tetapkan harga referensi pesaing', text: 'Masukkan harga pasar yang sebanding untuk melihat apakah penawaran Anda berada di atas, di bawah, atau setara dengan pesaing.' },
  { name: 'Salin harga yang direkomendasikan', text: 'Gunakan tombol salin untuk mentransfer PVP, laba bersih, margin riil, dan perbandingan pasar ke dalam penawaran atau faktur.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'kalkulator harga cetak 3d',
    'kalkulator margin keuntungan cetak 3d',
    'markup vs margin cetak 3d',
    'kalkulator harga jual cetak 3d',
    'indikator posisi pasar',
  ],
  inLanguage: 'id',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input harga cetak 3D',
    resultsAriaLabel: 'Hasil harga cetak 3D',
    currencyLabel: 'Mata Uang',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Total biaya produksi',
    competitorLabel: 'Harga referensi pesaing',
    marginLabel: 'Target margin',
    markupLabel: 'Target markup',
    conversionFactorLabel: 'Faktor konversi global',
    conversionFactorUnit: 'x',
    conversionHint: 'Biarkan di angka 1 ketika biaya yang dimasukkan sudah dalam mata uang terpilih. Gunakan ini untuk konversi mata uang atau penyesuaian tarif.',
    modeLabel: 'Metode PVP',
    marginModeLabel: 'Margin',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'PVP yang direkomendasikan',
    netProfitLabel: 'Keuntungan bersih',
    realMarginLabel: 'Margin riil',
    marketComparisonLabel: 'Vs. pesaing',
    marketPositionLabel: 'Posisi pasar',
    aboveMarketLabel: 'Di atas harga pasar',
    belowMarketLabel: 'Di bawah harga pasar',
    atMarketLabel: 'Sesuai harga pasar',
    pvpByMarginLabel: 'PVP berdasarkan margin',
    pvpByMarkupLabel: 'PVP berdasarkan markup',
    formulaMarginLabel: 'PVP_margin = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Salin harga',
    copiedLabel: 'Disalin',
    copyTemplate: 'PVP direkomendasikan: {pvp}; laba bersih: {profit}; margin riil: {margin}; perbandingan pasar: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Cara Kerja Kalkulator Harga Cetak 3D Ini', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah <strong>kalkulator harga cetak 3d</strong> yang andal harus dimulai dari total biaya produksi, bukan dari berat filamen saja. Nilai biaya produksi tersebut harus mencakup alokasi biaya tetap, biaya variabel mesin, bahan, toleransi kegagalan cetak, tenaga kerja, pasca-pemrosesan (post-processing), pengemasan, dan semua pengeluaran langsung pekerjaan tersebut. Setelah biaya itu diketahui, harga jual dapat dihitung dengan target margin keuntungan atau markup. Kedua metode ini tidak dapat dipertukarkan, dan membingungkan keduanya adalah salah satu cara tercepat bagi layanan cetak 3D untuk membuat penawaran yang tampaknya menguntungkan tetapi sebenarnya tidak memenuhi target margin yang direncanakan.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator ini menggunakan formula ketat: <code>PVP_margin = C / (1 - M / 100)</code> dan <code>PVP_markup = C x (1 + U / 100)</code>. Laba bersih selalu <code>PVP - C</code>. Margin riil adalah keuntungan dibagi dengan harga akhir, bukan dengan biaya produksi. Slider target margin dibatasi di bawah 100 karena margin 100% membutuhkan biaya nol atau harga tak terhingga. Hasil keluaran selalu menggunakan dua angka desimal tetap dan tanpa pemisah ribuan agar angka tersebut dapat disalin dengan rapi ke faktur, spreadsheet, sistem ERP, atau penawaran pelanggan.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Validasi margin yang ketat', icon: 'mdi:shield-check-outline' },
        { value: '2 desimal', label: 'Keluaran uang tetap', icon: 'mdi:calculator-variant-outline' },
        { value: 'Live', label: 'Kalkulasi instan dengan slider', icon: 'mdi:flash-outline' },
        { value: 'Pasar', label: 'Konfigurasi posisi pesaing', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan satu bahasa harga di dalam bisnis Anda',
      html: '<p>Tentukan apakah percakapan penjualan menggunakan margin, markup, atau keduanya dengan label yang jelas. Penawaran yang menyatakan "40%" tanpa menyebutkan basisnya dapat merujuk pada dua harga yang sangat berbeda.</p>',
    },
    { type: 'title', text: 'Margin vs. Markup dalam Cetak 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Perbandingan <strong>markup vs margin cetak 3d</strong> biasanya muncul ketika pemilik usaha cetak menyadari bahwa markup 30% pada biaya produksi tidak menghasilkan margin keuntungan sebesar 30%. Markup dihitung berdasarkan biaya produksi. Margin dihitung berdasarkan harga jual. Jika cetakan membutuhkan biaya 50,00 dan dijual seharga 75,00, laba bersihnya adalah 25,00. Markup-nya adalah 50,00% karena 25,00 dibagi 50,00 sama dengan 0,50. Margin-nya adalah 33,33% karena 25,00 dibagi 75,00 sama dengan 0,3333. Keduanya benar, tetapi menjawab pertanyaan bisnis yang berbeda.',
    },
    {
      type: 'table',
      headers: ['Biaya', 'Target', 'Formula', 'PVP', 'Laba Bersih', 'Margin Riil'],
      rows: [
        ['50.00', '50% markup', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% margin', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% markup', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% margin', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Markup tinggi masih bisa menghasilkan margin yang sedang',
      badge: 'Presisi finansual',
      html: '<p>Markup 100% melipatgandakan biaya, tetapi margin keuntungan yang diperoleh adalah 50%. Jika bisnis Anda memerlukan margin riil 60% untuk menutup biaya operasional dan pertumbuhan, markup 100% tidaklah cukup.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Harga jual eceran yang direkomendasikan sebelum pajak kecuali kebijakan penawaran menentukan lain.' },
        { term: 'Biaya C', definition: 'Total biaya produksi yang dialokasikan untuk pekerjaan sebelum laba ditambahkan.' },
        { term: 'Margin M', definition: 'Laba bersih dibagi dengan harga jual, dinyatakan dalam persentase.' },
        { term: 'Markup U', definition: 'Laba bersih dibagi dengan biaya produksi, dinyatakan dalam persentase.' },
        { term: 'Keuntungan Bersih', definition: 'Harga jual dikurangi biaya produksi sebelum penyesuaian pajak dan pembiayaan.' },
      ],
    },
    { type: 'title', text: 'Apa yang Termasuk dalam Total Biaya Produksi', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah <strong>kalkulator harga jual cetak 3d</strong> hanya seakurat biaya yang dimasukkan ke dalamnya. Untuk penawaran profesional, biaya tidak boleh hanya berarti berat filamen dikalikan dengan harga spool. Biaya harus mencakup bahan baku, listrik mesin, keausan nozzle dan film FEP, kehilangan resin, persiapan build plate, waktu operator untuk slicing, pelepasan support, pengamplasan, pengecatan, inspeksi kualitas, pengemasan, biaya transaksi, dan margin kegagalan cetak yang wajar. Kalkulator mengasumsikan biaya input yang dimasukkan telah menyerap hal-hal tersebut.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Sertakan biaya bahan variabel: filamento, resin, serbuk, material support, pembersihan sisa (purge), dan rakitan (raft).',
        'Sertakan biaya waktu mesin berdasarkan depresiasi, pemeliharaan, energi, dan masa pakai mesin.',
        'Sertakan tenaga kerja untuk persiapan, pemantauan, pasca-pemrosesan, pengepakan, penawaran, dan komunikasi pelanggan.',
        'Sertakan bahan pasca-pemrosesan langsung seperti primer, cat, ampelas, IPA, sarung tangan, lakban, dan kompon poles.',
        'Sertakan toleransi kegagalan cetak terukur untuk geometri berisiko tinggi, toleransi ketat, atau cetak overnight.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hanya biaya bahan',
          description: 'Cepat untuk estimasi hobi tetapi terlalu sempit untuk pekerjaan komersial.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Mengabaikan tenaga kerja', 'Mengabaikan keausan mesin', 'Meremehkan bagian yang selesai'],
        },
        {
          title: 'Biaya produksi',
          description: 'Input terbaik untuk margin dan markup karena mewakili pekerjaan sebelum laba.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Termasuk waktu mesin', 'Termasuk tenaga kerja', 'Mendukung penawaran berulang'],
        },
        {
          title: 'Harga terisi penuh',
          description: 'Mungkin sudah termasuk biaya overhead dan laba, jadi menambahkan margin lagi dapat menyebabkan penghitungan ganda.',
          icon: 'mdi:receipt-text-outline',
          points: ['Berguna untuk audit', 'Berisiko sebagai input kalkulator', 'Butuh kebijakan akuntansi yang jelas'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'Kalkulator tidak menebak biaya',
      html: '<p>Kalkulator ini mengubah biaya yang diketahui menjadi harga yang direkomendasikan. Jika biaya tidak pasti, buat model biaya terlebih dahulu untuk bahan, waktu, tenaga kerja, dan finishing, lalu gunakan alat ini untuk margin dan posisi pasar.</p>',
    },
    { type: 'title', text: 'Cara Menentukan Harga Cetak 3D dengan Target Margin', level: 2 },
    {
      type: 'paragraph',
      html: 'Banyak orang yang mencari <strong>cara menentukan harga cetak 3d</strong> memulai dengan pengali tetap karena terasa sederhana. Penentuan harga berdasarkan margin lebih baik ketika bisnis memiliki target profitabilitas yang jelas. Jika margin yang dibutuhkan adalah 40% dan biaya produksi adalah 60,00, rumusnya adalah <code>60,00 / (1 - 0,40)</code>, yang sama dengan 100,00. Keuntungannya adalah 40,00, dan margin riilnya adalah 40,00%. Metode ini umum digunakan saat bengkel ingin setiap lini produk menyumbang kontribusi laba yang konsisten.',
    },
    {
      type: 'paragraph',
      html: 'Aturan utamanya adalah margin tidak dapat mencapai 100%. Pada margin 99%, biaya 10,00 menjadi harga 1000,00. Pada 99,99%, biaya yang sama menjadi 100000,00. Perilaku matematis ini bukan bug; melainkan menunjukkan mengapa target margin harus realistis secara komersial. Target margin yang sangat tinggi biasanya berarti estimasi biaya terlalu rendah, produk memiliki nilai luar biasa, atau pangsa pasar sangat khusus.',
    },
    {
      type: 'table',
      headers: ['Target Margin', 'Pengali Terhadap Biaya', 'Biaya 40.00 Menjadi', 'Contoh Kasus'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Pencetakan komoditas yang sangat kompetitif dengan beban layanan rendah.'],
        ['35%', '1.5385x', '61.54', 'Pekerjaan profesional rutin dengan biaya overhead normal.'],
        ['50%', '2.0000x', '80.00', 'Layanan khusus, pengerjaan finishing, pesanan mendesak, atau batch kecil.'],
        ['70%', '3.3333x', '133.33', 'Nilai khusus, pekerjaan sulit, atau posisi pasar premium.'],
      ],
    },
    {
      type: 'summary',
      title: 'Daftar periksa penentuan harga berdasarkan margin',
      items: [
        'Gunakan total biaya produksi sebagai basis.',
        'Jaga target margin tetap di bawah 100%.',
        'Bandingkan PVP yang dihasilkan dengan harga pesaing sebelum mengirim penawaran.',
        'Jika harga terlalu tinggi, periksa kembali elemen biaya sebelum memangkas keuntungan.',
      ],
    },
    { type: 'title', text: 'Cara Menggunakan Markup Tanpa Mengacaukannya dengan Margin', level: 2 },
    {
      type: 'paragraph',
      html: 'Penentuan harga dengan markup berguna ketika bengkel menerapkan pengali langsung pada kategori biaya. Misalnya, menambahkan markup 80% pada cetakan standar, markup 120% pada prototipe yang difinishing, dan markup 200% pada pekerjaan kecil yang mendesak. Formula markup sangat sederhana: biaya produksi dikalikan dengan satu ditambah tingkat markup. Biaya 35,00 dengan markup 80% menjadi 63,00. Laba bersihnya adalah 28,00, tetapi margin riilnya adalah 44,44%, bukan 80%.',
    },
    {
      type: 'proscons',
      title: 'Metode margin vs metode markup',
      items: [
        { pro: 'Metode margin selaras langsung dengan keuntungan sebagai bagian dari pendapatan.', con: 'Tim penjualan harus memahami mengapa target margin tinggi menghasilkan kenaikan harga non-linear.' },
        { pro: 'Metode markup cepat dan mudah diterapkan pada daftar biaya.', con: 'Dapat menyembunyikan margin riil jika staf membaca persentase markup sebagai profitabilitas total.' },
        { pro: 'Menampilkan kedua formula memaparkan dampak keuangan yang sebenarnya.', con: 'Bisnis tetap memerlukan kebijakan tertulis mengenai angka mana yang akan menjadi PVP penawaran.' },
      ],
    },
    {
      type: 'message',
      title: 'Kapan markup praktis digunakan',
      ariaLabel: 'Panduan markup',
      html: '<p>Markup bekerja dengan baik untuk aturan internal yang sederhana: tambahkan 60% untuk cetak FDM berulang, 90% untuk miniatur resin, atau 150% untuk pesanan kilat. Gunakan nilai margin riil untuk memvalidasi apakah aturan tersebut memenuhi target bisnis.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Markup tidaklah salah',
      badge: 'Catatan metode',
      html: '<p>Markup adalah bahasa harga yang valid jika semua pihak memahami dasarnya. Masalahnya bukan pada metode markup itu sendiri, tetapi pada penyebutan markup sebagai "margin" dalam kutipan penawaran atau spreadsheet.</p>',
    },
    { type: 'title', text: 'Harga Pesaing dan Posisi Pasar', level: 2 },
    {
      type: 'paragraph',
      html: 'Harga referensi pesaing mengubah kalkulator ini menjadi alat keputusan komersial, bukan sekadar lembar rumus biasa. Jika PVP yang direkomendasikan berada di atas harga pesaing, hasilnya akan ditampilkan dengan warna peringatan yang lembut. Hal itu tidak berarti penawaran Anda salah. Harga yang lebih tinggi dapat dibenarkan oleh waktu pengerjaan yang lebih cepat, keterlacakan bahan yang lebih baik, hasil akhir permukaan yang lebih kuat, dukungan teknik, inspeksi dimensi, pengambilan lokal, atau risiko yang lebih rendah. Namun, tenaga penjualan harus mengetahui alasan tersebut sebelum mengirimkannya kepada pelanggan.',
    },
    {
      type: 'paragraph',
      html: 'Perbandingan pesaing harus menggunakan referensi yang setara. Bagian FDM mentah dengan lapisan yang terlihat tidaklah sama dengan prototipe yang diamplas, diberi primer, dan dicat. Iklan marketplace dengan bahan baku tidak menentu, toleransi longgar, dan pengiriman lama tidak sama dengan layanan rekayasa lokal yang meninjau file CAD dan menjamin kecocokan. Masukkan harga pesaing yang paling sesuai dengan material, proses pengerjaan, kuantitas, dan janji pengiriman yang serupa.',
    },
    {
      type: 'table',
      headers: ['Posisi Pasar', 'Interpretasi', 'Tindakan Komersial'],
      rows: [
        ['Di bawah harga pesaing', 'Penawaran menarik tetapi Anda mungkin melewatkan potensi keuntungan.', 'Periksa apakah target margin terlalu rendah atau pesaing memberikan layanan yang lebih sedikit.'],
        ['Dekat dengan pesaing', 'Harga selaras secara komersial dengan referensi pasar.', 'Gunakan kualitas layanan, kecepatan waktu, dan keandalan untuk membedakan diri.'],
        ['Di atas harga pesaing', 'Penawaran memerlukan pembenaran atau tinjauan biaya.', 'Periksa kembali pemicu biaya, cakupan finishing, urgensi, dan nilai tambah sebelum memberikan diskon.'],
      ],
    },
    {
      type: 'tip',
      title: 'Jangan berlomba menawarkan harga paling murah',
      html: '<p>Bengkel dengan tenaga kerja terampil, mesin terkalibrasi, material terdokumentasi, dan keahlian pasca-pemrosesan tidak boleh otomatis menyamakan harga referensi yang rendah. Bersainglah pada nilai yang dapat diverifikasi pelanggan.</p>',
    },
    { type: 'title', text: 'Selektor Mata Uang dan Faktor Konversi Global', level: 2 },
    {
      type: 'paragraph',
      html: 'Penawaran internasional membutuhkan pengelolaan uang yang konsisten. Selektor mata uang mengubah simbol dan menyesuaikan input uang dengan faktor referensi yang sama di seluruh paket aplikasi. Faktor konversi global adalah pengali komersial yang terpisah. Gunakan faktor <code>1</code> jika biaya produksi dan harga pesaing sudah dimasukkan dalam mata uang terpilih. Gunakan faktor kustom jika perusahaan ingin menerapkan daftar harga regional, cadangan fluktuasi nilai tukar, atau penyesuaian distributor.',
    },
    {
      type: 'paragraph',
      html: 'Faktor ini diterapkan pada nilai uang, bukan pada persentase margin atau markup. Hal ini penting agar persentase tetap mempertahankan maknanya di seluruh mata uang. Margin 35% dalam euro tetap menjadi margin 35% dalam dolar setelah biaya dan referensi pesaing dikonversi. Hasil keluaran tetap menggunakan dua desimal dan tanpa pemisah ribuan agar dapat disalin dengan bersih tanpa kesalahan.',
    },
    {
      type: 'summary',
      title: 'Aturan mata uang dan faktor',
      items: [
        'Pilih mata uang pelanggan sebelum menyalin harga.',
        'Pertahankan faktor di angka 1 untuk penawaran mata uang lokal standar.',
        'Gunakan faktor konversi untuk penyesuaian tarif komersial secara terkontrol, bukan untuk mengubah arti margin.',
        'Kelola pajak dan pembulatan faktur di luar kalkulasi PVP sebelum pajak ini.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pajak dan biaya platform dihitung terpisah',
      badge: 'Kebijakan penawaran',
      html: '<p>Jika PPN, pajak penjualan, komisi pembayaran, biaya platform, atau asuransi pengiriman harus ditanggung, tambahkan setelah menghitung PVP produksi sesuai kebijakan bisnis.</p>',
    },
    { type: 'title', text: 'Membangun Strategi Penentuan Harga Layanan Cetak 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Strategi <strong>penentuan harga layanan cetak 3d</strong> yang kuat menggabungkan akurasi biaya, disiplin keuntungan, dan kesadaran pasar. Akurasi biaya mencegah penjualan di bawah modal produksi. Disiplin keuntungan mencegah diskon sewenang-wenang merusak margin. Kesadaran pasar mencegah layanan terputus dari apa yang dapat dibandingkan oleh pelanggan. Kalkulator ini berada tepat di titik pertemuan ketiga elemen tersebut.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Buat target margin terpisah untuk cetak standar komoditas, prototipe fungsional, model estetika, pesanan kilat, dan batch produksi massal.',
        'Gunakan aturan markup hanya jika staf juga dapat memantau margin nyata yang dihasilkan dari aturan tersebut.',
        'Lacak persentase keberhasilan penawaran berdasarkan posisi pasar agar penawaran di atas pasar dapat dijelaskan dengan data, bukan tebakan.',
        'Tinjau laba pekerjaan setelah pengiriman dan perbarui model biaya jika tenaga kerja, kegagalan cetak, atau pasca-pemrosesan diremehkan.',
        'Terapkan harga minimum order untuk pekerjaan kecil di mana setup, penawaran, dan komunikasi mendominasi biaya produksi.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Hitung keuntungan cetak 3D setelah pekerjaan selesai',
      html: '<p>Rencana keuntungan bersih berguna sebelum mengajukan penawaran, tetapi keuntungan aktual yang terealisasi adalah apa yang meningkatkan sistem harga Anda. Bandingkan estimasi biaya dengan biaya riil dan sesuaikan target margin masa depan.</p>',
    },
    {
      type: 'summary',
      title: 'Alur kerja siap penawaran',
      items: [
        'Estimasi total biaya produksi.',
        'Pilih margin atau markup secara sengaja.',
        'Periksa margin riil dan laba bersih.',
        'Bandingkan dengan harga pesaing yang setara.',
        'Salin PVP ke penawaran dan kelola pajak secara terpisah.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
