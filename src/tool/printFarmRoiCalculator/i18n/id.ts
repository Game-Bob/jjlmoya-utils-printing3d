import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = 'kalkulator-roi-peternakan-cetak-3d';
const title = 'Kalkulator ROI Peternakan Cetak 3D';
const description =
  'Simulasikan profitabilitas bulanan, periode pengembalian modal, dan ROI tahunan untuk peternakan cetak 3D menggunakan okupansi, tingkat kegagalan, listrik, biaya tetap, dan biaya variabel per jam.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Bagaimana cara menghitung ROI untuk peternakan cetak 3D?',
    answer:
      'Perkirakan jam produktif bulanan, kalikan dengan harga jual per jam mesin, kurangi biaya tetap, listrik, dan biaya variabel per jam, lalu bandingkan laba tahunan dengan investasi awal.',
  },
  {
    question: 'Mengapa tingkat keberhasilan memengaruhi pengembalian modal peternakan cetak?',
    answer:
      'Cetakan yang gagal menghabiskan kapasitas mesin, material, nosel, energi, dan perhatian operator tanpa menghasilkan jam tagihan. Tingkat keberhasilan yang lebih rendah mengurangi jam produktif nyata dan menunda pengembalian modal.',
  },
  {
    question: 'Apa saja yang harus dimasukkan dalam biaya variabel per jam?',
    answer:
      'Masukkan konsumsi filamen atau resin, keausan nosel, keausan permukaan cetak, suku cadang perawatan rutin, habis pakai, dan alokasi per jam yang bervariasi sesuai dengan waktu produksi sukses yang sebenarnya.',
  },
  {
    question: 'Apakah pengembalian modal sama dengan ROI?',
    answer:
      'Tidak. Pengembalian modal memperkirakan berapa bulan yang dibutuhkan untuk memulihkan investasi awal dari laba bersih bulanan. ROI membandingkan laba tahunan dengan investasi awal dalam bentuk persentase.',
  },
];

const howToData = [
  { name: 'Masukkan skala peternakan', text: 'Tambahkan jumlah printer aktif dan investasi awal untuk mesin, pengaturan, stasiun kerja, dan komisioning.' },
  { name: 'Tambahkan biaya operasional bulanan', text: 'Masukkan biaya tetap bulanan dan listrik sebagai biaya bulanan, lalu tambahkan biaya variabel per jam mesin produktif.' },
  { name: 'Atur okupansi dan tingkat keberhasilan', text: 'Gunakan persentase okupansi dan keberhasilan yang realistis agar model mengurangi waktu tunggu dan cetakan gagal.' },
  { name: 'Baca hasil profitabilitas', text: 'Bandingkan pendapatan bulanan dengan biaya, lalu gunakan bulan pengembalian modal dan ROI tahunan untuk menilai kelayakan investasi.' },
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
    'Kalkulator ROI peternakan cetak 3D',
    'Simulator pengembalian investasi pencetakan 3D',
    'Kalkulator profitabilitas peternakan cetak',
    'Penyesuaian okupansi dan cetakan gagal',
    'Model biaya operasional multivariabel',
  ],
  inLanguage: 'id',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input ROI peternakan cetak',
    resultsAriaLabel: 'Hasil ROI peternakan cetak',
    currencyLabel: 'Mata Uang',
    currencyOptions,
    printerCountLabel: 'Jumlah printer',
    initialInvestmentLabel: 'Investasi awal',
    fixedMonthlyCostLabel: 'Biaya bulanan tetap',
    electricityMonthlyCostLabel: 'Biaya listrik bulanan',
    hourlyRateLabel: 'Harga tarif per jam',
    occupancyLabel: 'Okupansi rata-rata',
    successRateLabel: 'Tingkat keberhasilan',
    variableCostLabel: 'Biaya variabel per jam',
    averageHoursPerPartLabel: 'Jam rata-rata per bagian',
    paybackLabel: 'Periode pengembalian',
    netProfitLabel: 'Laba bersih bulanan',
    annualRoiLabel: 'ROI tahunan',
    productiveHoursLabel: 'Jam produktif nyata',
    revenueLabel: 'Pendapatan',
    costsLabel: 'Biaya',
    fixedCostShortLabel: 'Tetap',
    electricityShortLabel: 'Listrik',
    variableCostShortLabel: 'Variabel',
    marginLabel: 'Margin bersih',
    breakEvenPartsLabel: 'Bagian impas',
    breakEvenHoursLabel: 'Jam impas',
    stressScenarioLabel: 'Skenario terburuk',
    exportSummaryLabel: 'Unduh ringkasan',
    chartLabel: 'Pendapatan bulanan versus biaya operasional',
    monthsUnit: 'bulan',
    hoursUnit: 'j',
    percentUnit: '%',
    notViableLabel: 'Tidak layak',
    positiveInsight: 'Laba bulanan positif setelah memperhitungkan okupansi, tingkat keberhasilan, dan biaya operasional.',
    negativeInsight: 'Biaya operasional melebihi pendapatan yang disesuaikan; tingkatkan okupansi, harga, atau tingkat kegagalan sebelum memperluas skala.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'bagian/bulan',
    reportFilename: 'ringkasan-roi-peternakan-cetak.csv',
    reportTitle: 'Laporan Kelayakan ROI Peternakan Cetak 3D',
    reportCurrencyLabel: 'Mata Uang',
  },
  seo: [
    { type: 'title', text: 'Cara Kerja Kalkulator ROI Peternakan Cetak 3D Ini', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah <strong>kalkulator ROI peternakan cetak 3D</strong> harus menjawab pertanyaan investasi yang spesifik: apakah sekelompok printer akan memulihkan biaya pengaturannya dengan cukup cepat untuk membenarkan modal, ruang, pemeliharaan, dan risiko operasional? Simulator ini memodelkan pertanyaan tersebut dari kapasitas mesin bulanan. Setiap printer berkontribusi 720 jam kotor dalam sebulan standar 30 hari, kemudian model memotong jam-jam tersebut berdasarkan okupansi dan tingkat keberhasilan cetak. Hasilnya bukanlah kapasitas teoritis; ini adalah waktu produksi berbayar yang tersisa setelah periode menganggur, antrean pekerjaan, cetakan gagal, cetak ulang, kalibrasi, dan waktu henti praktis.',
    },
    {
      type: 'paragraph',
      html: 'Rantai perhitungan sengaja dibuat transparan. Jam kotor bulanan sama dengan <code>printer x 720</code>. Jam produktif nyata sama dengan jam kotor dikalikan dengan okupansi rata-rata dan tingkat keberhasilan. Pendapatan bulanan sama dengan jam produktif dikalikan dengan tarif per jam yang dikenakan kepada pelanggan. Biaya operasional menggabungkan biaya tetap bulanan, listrik, dan biaya variabel per jam. Laba bersih bulanan adalah pendapatan dikurangi biaya operasional tersebut. Periode pengembalian modal membagi investasi awal dengan laba bersih bulanan, sedangkan ROI tahunan membandingkan dua belas bulan laba bersih dengan investasi awal.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 j', label: 'Kapasitas kotor bulanan per printer', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Penyesuaian okupansi dan keberhasilan', icon: 'mdi:percent-outline' },
        { value: 'Pendapatan - biaya', label: 'Laba bersih bulanan', icon: 'mdi:finance' },
        { value: 'Investasi / laba', label: 'Periode pengembalian', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan input konservatif untuk keputusan investasi',
      html: '<p>Untuk langkah awal, masukkan okupansi yang dapat Anda pertahankan dengan permintaan saat ini, bukan okupansi yang Anda harapkan capai setelah pemasaran membaik. Peternakan yang hanya berfungsi pada okupansi optimis bukanlah investasi yang kuat.</p>',
    },
    { type: 'title', text: 'Mengapa Okupansi Mengubah Profitabilitas Peternakan Cetak', level: 2 },
    {
      type: 'paragraph',
      html: 'Okupansi adalah persentase waktu mesin tersedia yang benar-benar digunakan untuk mencetak pekerjaan berbayar atau dapat dijual. Ini adalah tuas terkuat dalam banyak model peternakan kecil karena investasi awal bersifat tetap. Printer yang dibeli untuk produksi memiliki biaya yang sama baik dipesan delapan jam per hari atau dua puluh jam per jam. Okupansi yang lebih tinggi menyebarkan sewa, pengaturan, persediaan suku cadang, perangkat lunak, dan depresiasi mesin ke lebih banyak jam tagihan.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator memperlakukan okupansi sebagai pengganda langsung pada kapasitas kotor. Sepuluh printer menghasilkan 7200 jam mesin kotor per bulan. Pada okupansi 40%, hanya 2880 jam yang masuk ke model pendapatan sebelum penyesuaian tingkat keberhasilan. Pada okupansi 75%, 5400 jam masuk ke model. Perbedaannya dapat menentukan apakah pengembalian modal membutuhkan waktu bulanan, tahunan, atau tidak pernah terjadi.',
    },
    {
      type: 'table',
      headers: ['Tingkat okupansi', 'Arti operasional', 'Implikasi ROI'],
      rows: [
        ['Di bawah 30%', 'Mesin menghabiskan sebagian besar bulan menunggu pesanan, file, operator, atau perawatan.', 'Investasi awal sulit dipulihkan kecuali tarif per jam tinggi.'],
        ['30-55%', 'Rentang tahap awal yang umum untuk peternakan dengan permintaan campuran dan penanganan manual.', 'Profitabilitas sangat tergantung pada biaya tetap bulanan dan tingkat kegagalan.'],
        ['55-75%', 'Tingkat pemesanan yang sehat dengan ruang untuk pekerjaan mendesak, pemeliharaan, dan perubahan pengaturan.', 'Seringkali menjadi rentang pertama di mana pengembalian modal menjadi realistis.'],
        ['Di atas 75%', 'Okupansi tinggi yang membutuhkan penjadwalan handal, aliran material, dan perawatan preventif.', 'Potensi ROI yang kuat tetapi sedikit toleransi untuk kerusakan or operator bottleneck.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Okupansi tinggi tidak sama dengan laba tinggi',
      badge: 'Risiko harga',
      html: '<p>Peternakan bisa sibuk tetapi tetap rugi jika tarif per jam terlalu rendah, cetak ulang sering terjadi, pemborosan material tinggi, atau biaya operasional tetap diremehkan. Selalu bandingkan okupansi dengan margin, bukan hanya pendapatan.</p>',
    },
    { type: 'title', text: 'Memperhitungkan Cetakan Gagal dan Cetak Ulang', level: 2 },
    {
      type: 'paragraph',
      html: 'Input tingkat keberhasilan adalah apa yang membedakan simulator pengembalian modal investasi pencetakan 3D ini dari kalkulator kapasitas biasa. Cetakan yang gagal menghabiskan waktu kalender yang sama dengan cetakan yang berhasil tetapi tidak menghasilkan keluaran yang dapat dijual. Mereka juga dapat mengonsumsi filamen, resin, alas cetak, nosel, listrik, tenaga kerja, dan nama baik pelanggan. Peternakan dengan tingkat keberhasilan 90% kehilangan satu dari setiap sepuluh blok produksi potensial sebelum pendapatan dihitung.',
    },
    {
      type: 'paragraph',
      html: 'Tingkat keberhasilan harus diukur atas pekerjaan yang sebanding. Peternakan yang mencetak perlengkapan PLA berulang kali dapat mempertahankan tingkat keberhasilan yang sangat tinggi setelah penyetelan proses. Peternakan yang memproduksi model pelanggan satu kali, bagian tinggi, polimer teknis, miniatur resin, atau pekerjaan multi-material mungkin memerlukan asumsi yang lebih rendah. Jika Anda mencampur pekerjaan sederhana dan berisiko, jalankan kalkulator dua kali: sekali untuk produksi standar dan sekali untuk pekerjaan khusus.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Produksi berulang',
          description: 'Geometri bagian yang diketahui, profil yang disetel, material yang dapat diprediksi, dan permintaan stabil.',
          icon: 'mdi:repeat',
          points: ['Asumsi keberhasilan lebih tinggi', 'Ketidakpastian pengaturan lebih rendah', 'Keyakinan pengembalian modal lebih baik'],
        },
        {
          title: 'Layanan cetak kustom',
          description: 'File bervariasi berdasarkan pelanggan, geometri, strategi dukungan, dan harapan kualitas.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Asumsi keberhasilan moderat', 'Lebih banyak variasi penawaran', 'Butuh alokasi cetak ulang'],
        },
        {
          title: 'Material eksperimental',
          description: 'Polimer rekayasa, material fleksibel, filamen berisi, dan penyetelan proses resin.',
          icon: 'mdi:flask-outline',
          points: ['Asumsi keberhasilan lebih rendah', 'Keausan bahan habis pakai lebih tinggi', 'Gunakan input ROI yang hati-hati'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Tingkat kegagalan termasuk dalam model keuangan',
      ariaLabel: 'Catatan perhitungan cetak gagal',
      html: '<p>Jangan sembunyikan cetak ulang di dalam biaya overhead yang tidak jelas. Input tingkat keberhasilan yang terlihat membuat kasus investasi lebih mudah ditantang, ditingkatkan, dan dijelaskan.</p>',
    },
    { type: 'title', text: 'Membangun Model Biaya Bulanan yang Handal', level: 2 },
    {
      type: 'paragraph',
      html: 'Biaya operasional memiliki tiga lapisan dalam alat ini. Biaya tetap bulanan mencakup pengeluaran yang ada bahkan saat printer menganggur: sewa, internet, asuransi, perangkat lunak, akuntansi, penyimpanan, cakupan tenaga kerja dasar, dan biaya overhead lainnya. Biaya listrik bulanan mencakup energi yang digunakan oleh printer dan peralatan produksi terkait langsung. Biaya variabel per jam mencakup biaya yang berskala dengan waktu mesin produktif, seperti filamen, resin, nosel, tabung PTFE, keausan permukaan cetak, filter, pelumas, suku cadang perawatan, dan bahan habis pakai pembersih.',
    },
    {
      type: 'paragraph',
      html: 'Menjaga listrik sebagai input bulanan terpisah berguna untuk peternakan karena konsumsi daya sering kali dilacak dari tagihan atau submetering daripada dihitung cetak per cetak. Peternakan dengan alas cetak berpemanas yang memproduksi PETG, ASA, ABS, atau nilon dapat memiliki profil energi yang sangat berbeda dari peternakan PLA di ruangan yang sama. Jika Anda sudah menghitung listrik per jam mesin, Anda dapat memasukkan angka tersebut ke dalam biaya variabel per jam dan mengatur bidang listrik bulanan ke nol.',
    },
    {
      type: 'table',
      headers: ['Input biaya', 'Sertakan', 'Hindari'],
      rows: [
        ['Biaya bulanan tetap', 'Sewa, asuransi, internet, perangkat lunak, staf dasar, penyimpanan.', 'Material yang digunakan hanya saat printer berjalan.'],
        ['Biaya listrik bulanan', 'Energi printer, pengering, stasiun pencucian, curing, ventilasi, bagian iklim.', 'Listrik rumah tangga atau kantor yang tidak terkait.'],
        ['Biaya variabel per jam', 'Filamen, resin, nosel, bahan habis pakai perawatan, alokasi keausan per jam.', 'Biaya pembelian mesin satu kali.'],
        ['Investasi awal', 'Printer, rak, pengaturan, alat, pengering, perangkat keras manajemen peternakan.', 'Biaya bulanan yang berulang setelah peluncuran.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Jam kotor bulanan', definition: 'Kapasitas mesin teoritis sebelum penyesuaian okupansi dan cetakan gagal.' },
        { term: 'Jam produktif nyata', definition: 'Kapasitas yang tersisa setelah menerapkan okupansi dan tingkat keberhasilan.' },
        { term: 'Periode pengembalian', definition: 'Bulan yang dibutuhkan agar laba bersih bulanan dapat memulihkan investasi awal.' },
        { term: 'ROI tahunan', definition: 'Laba bersih dua belas bulan dibagi dengan investasi awal.' },
        { term: 'Biaya variabel per jam', definition: 'Bahan habis pakai dan alokasi perawatan yang berskala dengan waktu cetak produktif.' },
      ],
    },
    { type: 'title', text: 'Menetapkan Tarif Penjualan per Jam Mesin', level: 2 },
    {
      type: 'paragraph',
      html: 'Tarif penjualan per jam adalah jumlah yang dibebankan kepada pelanggan untuk satu jam mesin produktif. Ini dapat ditunjukkan secara langsung pada penawaran harga atau tertanam di dalam formula harga yang juga mencakup material, tenaga kerja, penyelesaian, pengemasan, dan margin. Kuncinya adalah konsistensi: jika tarif per jam dimaksudkan untuk mencakup material, jangan tambahkan material yang sama lagi sebagai biaya variabel per jam. Jika tarif per jam hanya waktu mesin, pastikan material dan tenaga kerja diwakili di tempat lain dalam model bisnis.',
    },
    {
      type: 'paragraph',
      html: 'Tarif yang terlihat kompetitif pada pekerjaan tunggal dapat gagal pada skala peternakan. Cetakan yang panjang menempati kapasitas yang seharusnya dapat melayani pekerjaan lain. Tinggi lapisan yang halus, material yang lambat, bagian yang tinggi, dan geometri yang padat dukungan semuanya mengurangi keluaran. Oleh karena itu, kalkulator profitabilitas peternakan cetak harus digunakan bersama dengan data penawaran harga yang sebenarnya: durasi rata-rata pekerjaan, setara bayaran per jam rata-rata, tingkat penerimaan pelanggan, dan volume pesanan bulanan.',
    },
    {
      type: 'proscons',
      title: 'Penetapan harga per jam di peternakan cetak',
      items: [
        { pro: 'Membuat okupansi mesin terlihat dan melindungi cetakan panjang agar tidak dinilai terlalu murah.', con: 'Pelanggan mungkin memerlukan penjelasan ketika bagian yang ringan membutuhkan waktu berjam-jam.' },
        { pro: 'Berfungsi dengan baik untuk perencanaan ROI internal dan keputusan kapasitas.', con: 'Tidak menggantikan penetapan harga material, tenaga kerja, penyelesaian akhir, dan risiko.' },
        { pro: 'Memungkinkan perbandingan cepat antara jenis printer dan skenario okupansi.', con: 'Dapat menyesatkan jika tingkat kegagalan dan waktu tunggu diabaikan.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Titik pemeriksaan harga',
      html: '<p>Jika perubahan kecil pada tarif per jam sepenuhnya mengubah pengembalian modal, investasi tersebut sensitif terhadap harga pasar. Validasi tarif terhadap permintaan pelanggan yang sebenarnya sebelum membeli lebih banyak printer.</p>',
    },
    { type: 'title', text: 'Menafsirkan Periode Pengembalian Modal dan ROI Tahunan', level: 2 },
    {
      type: 'paragraph',
      html: 'Periode pengembalian modal mudah dipahami karena dinyatakan dalam bulan. Jika investasi awal adalah 18000 dan laba bersih bulanan adalah 3000, pengembalian modal adalah enam bulan. Jika laba bersih bulanan nol atau negatif, pengembalian modal tidak layak karena peternakan tidak pernah memulihkan investasi di bawah asumsi saat ini. Pengembalian modal berguna untuk perencanaan kas, pembiayaan peralatan, dan memutuskan apakah ekspansi harus terjadi sekarang or setelah permintaan membaik.',
    },
    {
      type: 'paragraph',
      html: 'ROI tahunan lebih ketat karena membandingkan satu tahun laba bersih dengan investasi awal. Peternakan dapat memiliki laba bulanan yang positif tetapi tetap menunjukkan ROI tahunan yang lemah jika pengembalian modal lambat. Misalnya, peternakan yang menghasilkan 1000 per bulan setelah biaya pada investasi 24000 menghasilkan 12000 per tahun sebelum mempertimbangkan investasi awal, sehingga ROI tahun pertama tetap negatif. Itu tidak berarti bisnisnya buruk, tetapi itu berarti investor membutuhkan jangka waktu yang lebih lama.',
    },
    {
      type: 'summary',
      title: 'Aturan keputusan',
      items: [
        'Gunakan pengembalian modal untuk memahami kecepatan pemulihan kas.',
        'Gunakan ROI tahunan untuk membandingkan peternakan dengan penggunaan modal lainnya.',
        'Jalankan kembali model dengan okupansi dan tingkat keberhasilan yang lebih rendah sebelum berkomitmen pada ekspansi.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pengujian skenario adalah nilai yang sebenarnya',
      badge: 'Perencanaan',
      html: '<p>Jalankan kasus dasar, kasus konservatif, dan kasus stres. Investasi terbaik bukanlah investasi yang terlihat bagus hanya dalam skenario optimis; itu adalah investasi yang tetap dapat dimengerti ketika permintaan, kegagalan, atau biaya listrik bergerak melawan Anda.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
