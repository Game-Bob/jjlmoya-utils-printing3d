import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'kalkulator-biaya-produksi-tarif-per-jam-mesin';
const title = 'Kalkulator Tarif Per Jam Mesin & Biaya Produksi';
const description =
  'Hitung biaya operasional nyata dari printer 3D berdasarkan konsumsi daya, tarif listrik, harga beli, masa pakai, dan durasi cetak.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung biaya per jam printer 3D?',
    answer:
      'Jumlahkan biaya listrik per jam dengan biaya penyusutan per jam. Listrik adalah watt dibagi 1000 dikalikan tarif listrik. Penyusutan adalah harga beli dibagi jam masa pakai.',
  },
  {
    question: 'Mengapa penyusutan penting dalam penetapan harga cetak 3D?',
    answer:
      'Penyusutan mewakili nilai mesin yang dikonsumsi saat memproduksi bagian. Mengabaikannya dapat membuat cetakan terlihat menguntungkan sementara printer diam-diam kehilangan nilai jual kembali, keandalan, dan kapasitas penggantian.',
  },
  {
    question: 'Masa pakai apa yang harus saya gunakan untuk printer 3D desktop?',
    answer:
      'Tolok ukur 5000 jam adalah titik awal yang praktis untuk banyak printer desktop, tetapi peternakan produksi harus menggantinya dengan riwayat perawatan, siklus penggantian yang diharapkan, dan data waktu kerja aktual.',
  },
  {
    question: 'Apakah ini sama dengan kutipan cetak 3D lengkap?',
    answer:
      'Tidak. Kalkulator ini mencakup listrik mesin dan amortisasi perangkat keras. Kutipan lengkap juga harus mencakup filamen atau resin, tenaga kerja, cetakan gagal, pasca-pemrosesan, pengemasan, biaya overhead, dan margin.',
  },
];

const howToData = [
  { name: 'Masukkan daya printer yang diukur', text: 'Gunakan watt rata-rata selama cetakan yang sebanding, bukan hanya rating catu daya.' },
  { name: 'Atur durasi cetak', text: 'Gerakkan penggeser durasi ke waktu mesin yang diharapkan untuk pekerjaan atau batch produksi.' },
  { name: 'Tambahkan data energi dan aset', text: 'Masukkan tarif listrik, harga beli mesin, dan perkiraan masa pakai dalam jam operasi.' },
  { name: 'Baca pembagian biaya', text: 'Gunakan biaya total, tarif per jam, dan komposisi antara listrik dan penyusutan untuk memberi harga waktu mesin.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  featureList: [
    'Kalkulator konsumsi daya printer 3D',
    'Kalkulator penyusutan per jam mesin',
    'Perkiraan biaya operasional cetak 3D',
    'Komposisi biaya listrik versus amortisasi',
  ],
  inLanguage: 'id',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input tarif per jam mesin',
    resultsAriaLabel: 'Hasil tarif per jam mesin',
    settingsLabel: 'Pengaturan kutipan',
    currencyLabel: 'Mata uang',
    currencyOptions: [
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
    ],
    durationLabel: 'Waktu produksi',
    powerLabel: 'Daya rata-rata',
    tariffLabel: 'Tarif listrik',
    purchasePriceLabel: 'Harga beli mesin',
    usefulLifeLabel: 'Perkiraan masa pakai',
    totalCostLabel: 'Biaya operasional total',
    hourlyRateLabel: 'Tarif per jam mesin',
    electricityLabel: 'Listrik',
    depreciationLabel: 'Amortisasi',
    electricityPerHourLabel: 'Biaya energi per jam',
    depreciationPerHourLabel: 'Biaya aset per jam',
    compositionLabel: 'Komposisi biaya listrik versus amortisasi',
    insightLabel: 'Wawasan profitabilitas',
    utilizationLabel: 'Tekanan utilisasi',
    utilizationValueLabel: 'Masa pakai terpakai',
    utilizationHint: 'Pekerjaan ini mengonsumsi bagian yang ditunjukkan dari perkiraan umur mesin.',
    batchLabel: 'Biaya operasional batch',
    energyUsedLabel: 'Energi terpakai',
    costDriverLabel: 'Pendorong utama',
    energyDriverLabel: 'Energi',
    assetDriverLabel: 'Aset',
    balancedDriverLabel: 'Seimbang',
    electricityDominant: 'Pekerjaan dipimpin energi: tarif, ukuran alas panas, suhu ruang, dan waktu pemanasan diam akan memengaruhi kutipan lebih dari harga beli.',
    depreciationDominant: 'Pekerjaan dipimpin aset: harga mesin dan masa pakai mendominasi, sehingga setiap jam yang tidak digunakan memperlemah ekonomi printer ini.',
    balancedDominant: 'Listrik dan amortisasi cukup dekat sehingga keduanya harus muncul dalam tarif per jam bengkel daripada menyembunyikan salah satunya di dalam margin.',
    hoursUnit: 'jam',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: 'Rp',
  },
  seo: [
    { type: 'title', text: 'Apa Arti Tarif Per Jam Mesin dalam Cetak 3D', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Tarif per jam mesin</strong> adalah biaya menjaga printer tetap sibuk secara produktif selama satu jam sebelum material, tenaga kerja, pasca-pemrosesan, pengemasan, dan laba ditambahkan. Dalam cetak 3D, angka ini sering diremehkan karena biaya yang terlihat seperti filamen lebih mudah diperhatikan daripada biaya tersembunyi seperti listrik dan penyusutan perangkat keras. Printer desktop mungkin hanya mengonsumsi beberapa sen listrik per jam, namun mesin profesional yang berharga beberapa ribu euro harus memulihkan nilainya selama masa pakai yang terbatas. Kalkulator ini mengisolasi dua biaya mesin tersebut sehingga kutipan produksi dimulai dengan dasar yang terukur.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator menggunakan dua formula transparan. Biaya listrik adalah <code>(W / 1000) x T x tarif</code>, di mana <code>W</code> adalah watt rata-rata, <code>T</code> adalah durasi cetak dalam jam, dan tarif adalah harga listrik per kilowatt-jam. Biaya amortisasi adalah <code>(harga beli / jam masa pakai) x T</code>. Total biaya operasional adalah jumlah keduanya. Karena kedua istilah berskala dengan waktu, formula yang sama juga menghasilkan tarif per jam yang bersih: listrik per jam ditambah penyusutan per jam.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Mengubah watt ke kilowatt', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Unit penagihan energi', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Biaya mesin linear per jam', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Total biaya operasional', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan watt rata rata yang diukur',
      html: '<p>Label catu daya adalah kapasitas maksimum, bukan konsumsi printer selama pekerjaan nyata. Untuk <strong>masukan kalkulator konsumsi daya printer 3D</strong> yang lebih baik, ukur cetakan representatif dengan meteran dinding dan rata-ratakan fase pemanasan, pencetakan, kipas, alas, dan siaga.</p>',
    },
    { type: 'title', text: 'Biaya Listrik: Mengubah Watt Menjadi Biaya Produksi', level: 2 },
    {
      type: 'paragraph',
      html: 'Biaya listrik tergantung pada konsumsi daya rata-rata, bukan hanya wattase nominal printer. Mesin dengan catu daya 350 W mungkin rata-rata 90 W pada pekerjaan PLA kecil setelah pemanasan, sementara printer tertutup besar dengan alas panas dan ruang dapat tetap jauh lebih tinggi untuk polimer teknis. Luas alas panas, suhu ruang, suhu nosel, suhu ruangan, siklus kipas, dan waktu idle sebelum pelepasan bagian semuanya dapat mengubah daya efektif.',
    },
    {
      type: 'paragraph',
      html: 'Konversi kilowatt-jam sederhana namun penting. Printer 180 W yang berjalan selama 8 jam menggunakan <code>0,18 kW x 8 jam = 1,44 kWh</code>. Pada Rp250 per kWh, bagian pekerjaan itu berbiaya Rp360. Itu mungkin terdengar kecil, tetapi peternakan dengan banyak mesin, pekerjaan PETG atau ASA yang panjang, lemari pengering berpemanas, dan kontrol iklim dapat mengubah perbedaan jam kecil menjadi tagihan bulanan yang signifikan.',
    },
    {
      type: 'table',
      headers: ['Input', 'Apa yang dimasukkan', 'Kesalahan umum'],
      rows: [
        ['Daya rata-rata', 'Watt terukur di seluruh siklus cetak', 'Menggunakan rating catu daya atau puncak pemanasan.'],
        ['Durasi', 'Waktu okupasi mesin dalam jam', 'Mengabaikan waktu pemanasan awal, pendinginan, atau antrian.'],
        ['Tarif', 'Harga aktual per kWh dari tagihan', 'Menggunakan rata-rata nasional usang alih-alih tarif bengkel.'],
        ['Mata uang', 'Mata uang yang digunakan dalam model kutipan Anda', 'Mencampur biaya perangkat keras euro dengan asumsi energi dolar.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Biaya energi rendah sampai skala membuatnya terlihat',
      badge: 'Perencanaan peternakan',
      html: '<p>Satu printer kecil mungkin tidak memerlukan akuntansi energi yang rumit. Dua puluh printer yang menjalankan pekerjaan panjang setiap hari memerlukannya. Formula listrik yang sama dapat digunakan per pekerjaan, per printer, per sel, atau per bulan dengan hanya mengubah durasi.</p>',
    },
    { type: 'title', text: 'Amortisasi: Biaya Tersembunyi di Balik Profitabilitas Printer', level: 2 },
    {
      type: 'paragraph',
      html: 'Amortisasi adalah pengakuan finansial bahwa printer dikonsumsi oleh penggunaan. Rel aus, kipas menua, alas kehilangan kerataan, hotend tersumbat, elektronik menjadi usang, dan mesin pada akhirnya perlu diganti. Jika printer berharga Rp900.000 dan bengkel mengharapkan 5000 jam operasi yang berguna, mesin mengonsumsi Rp180 nilai aset setiap jam produktif. Pekerjaan sepuluh jam karena itu membawa Rp1.800 biaya perangkat keras sebelum material atau tenaga kerja dipertimbangkan.',
    },
    {
      type: 'paragraph',
      html: 'Penyusutan garis lurus sengaja dibuat praktis di sini. Ia tidak mencoba memodelkan hukum pajak, nilai jual kembali, pembiayaan, atau peristiwa perawatan. Sebaliknya, ia menjawab pertanyaan penetapan harga produksi: berapa banyak dari pembelian mesin ini yang harus dialokasikan ke setiap jam kerja? Angka itu adalah dasar untuk pencarian <strong>tingkat penyusutan per jam printer 3D</strong> dan untuk peternakan mana pun yang ingin uang pengganti ada ketika printer mencapai akhir masa ekonomisnya.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Printer desktop hobi',
          description: 'Harga beli rendah dan penggunaan tidak teratur. Listrik mungkin terlihat pada pekerjaan alas panas, tetapi amortisasi tetap penting jika bagian dijual.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Eksposur modal lebih rendah', 'Masa pakai sering tidak pasti', 'Tenaga kerja manual biasanya mendominasi kutipan'],
        },
        {
          title: 'Printer peternakan prosumer',
          description: 'Harga beli moderat, waktu kerja tinggi, material berulang, dan banyak pekerjaan identik membuat penyusutan per jam menjadi input kutipan kunci.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Cocok untuk asumsi umur 3000-8000 jam', 'Lacak perbaikan aktual', 'Pisahkan waktu mesin dari tenaga kerja'],
        },
        {
          title: 'Sistem industri',
          description: 'Biaya modal tinggi berarti amortisasi dapat mendominasi. Kontrak layanan, lingkungan ruang bangun, dan waktu kualifikasi mungkin memerlukan jalur biaya tambahan.',
          icon: 'mdi:domain',
          points: ['Biaya modal mendominasi', 'Waktu henti mahal', 'Tambahkan layanan dan overhead fasilitas'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Input masa pakai layak mendapat perhatian',
      ariaLabel: 'Catatan masa pakai',
      html: '<p>Standar 5000 jam adalah titik awal, bukan kebenaran universal. Mesin hobi yang jarang digunakan mungkin usang sebelum mencapai angka itu, sementara mesin peternakan yang terawat baik dapat melampauinya. Gunakan angka yang sesuai dengan kebijakan penggantian Anda.</p>',
    },
    { type: 'title', text: 'Memilih Jam Masa Pakai Tanpa Tebak-Tebakan', level: 2 },
    {
      type: 'paragraph',
      html: 'Masa pakai adalah asumsi akuntansi paling sensitif dalam kalkulator ini karena berada di penyebut rumus amortisasi. Jika printer Rp900.000 yang sama diberi 3000 jam masa pakai, penyusutan adalah Rp300 per jam. Pada 9000 jam masa pakai, turun menjadi Rp100 per jam. Printer tidak berubah, tetapi harapan bisnis berubah. Itulah sebabnya kutipan harus mendokumentasikan asumsi umur yang dipilih daripada menguburnya dalam markup generik.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gunakan log perawatan saat tersedia: penggantian nosel, kegagalan kipas, keausan rel, sabuk, papan, hotend, dan permukaan alas mengungkapkan kurva biaya nyata.',
        'Pisahkan keluarga printer. Bedslinger kecil, mesin produksi CoreXY, dan printer resin tidak boleh berbagi satu nomor masa pakai.',
        'Masa pakai lebih rendah untuk mesin eksperimental yang menghabiskan banyak jam dalam penyetelan gagal, pengujian material, atau validasi khusus pelanggan.',
        'Naikkan masa pakai hanya ketika waktu kerja, perawatan preventif, suku cadang, dan riwayat penggantian mendukung asumsi.',
        'Tinjau asumsi setelah peningkatan besar karena sistem gerak, wadah, atau hotend baru dapat mengubah umur ekonomis aset.',
      ],
    },
    {
      type: 'table',
      headers: ['Asumsi masa pakai', 'Kesesuaian terbaik', 'Konsekuensi harga'],
      rows: [
        ['2000-3000 jam', 'Mesin eksperimental, murah, terdokumentasi buruk, atau penggunaan berat', 'Penyusutan per jam lebih tinggi melindungi uang pengganti.'],
        ['4000-6000 jam', 'Mesin desktop standar atau prosumer dengan penggunaan produksi reguler', 'Kisaran awal seimbang untuk banyak peternakan kecil.'],
        ['7000-10000 jam', 'Armada printer stabil dengan data perawatan dan material terkontrol', 'Biaya aset per jam lebih rendah tetapi membutuhkan kepercayaan pada waktu kerja.'],
        ['Di atas 10000 jam', 'Aset industri atau yang dirawat berat dengan siklus hidup terdokumentasi', 'Berguna hanya ketika layanan dan waktu henti diperhitungkan secara terpisah.'],
      ],
    },
    {
      type: 'summary',
      title: 'Daftar periksa masa pakai',
      items: [
        'Sesuaikan masa pakai dengan kelas printer, bukan dengan nomor internet generik.',
        'Dokumentasikan asumsi agar kutipan tetap dapat dijelaskan berbulan-bulan kemudian.',
        'Hitung ulang ketika mesin dialihkan dari penggunaan hobi ke produksi berbayar.',
      ],
    },
    { type: 'title', text: 'Membaca Pembagian Listrik vs Amortisasi', level: 2 },
    {
      type: 'paragraph',
      html: 'Batang komposisi menunjukkan apakah pekerjaan dipimpin energi atau dipimpin aset. Pekerjaan yang dipimpin energi merespons kuat terhadap tarif listrik, strategi alas panas, suhu ruang, perilaku pemanasan, dan kondisi ruangan. Pekerjaan yang dipimpin aset merespons lebih kuat terhadap harga beli, masa pakai, dan utilisasi. Pembagian yang seimbang berarti tidak ada jalur yang boleh diabaikan; keduanya termasuk dalam tarif per jam dasar mesin.',
    },
    {
      type: 'paragraph',
      html: 'Pembagian ini berguna karena total biaya yang sama dapat memiliki solusi berbeda. Jika listrik mendominasi, menurunkan suhu alas, mengelompokkan bagian untuk menghindari pemanasan berulang, mengisolasi wadah, atau mencetak selama jendela tarif lebih rendah dapat membantu. Jika amortisasi mendominasi, tuas yang lebih baik adalah utilisasi: jaga printer sibuk dengan pekerjaan menguntungkan, hindari modal menganggur, dan pilih ukuran mesin dengan hati-hati daripada membeli kapasitas yang tidak terpakai.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Biaya listrik', definition: 'Energi tertagih yang dikonsumsi printer selama durasi yang dipilih.' },
        { term: 'Amortisasi', definition: 'Bagian harga beli mesin yang dialokasikan ke jam yang digunakan oleh pekerjaan.' },
        { term: 'Masa pakai', definition: 'Jumlah jam operasi produktif yang diharapkan sebelum printer diganti secara ekonomis.' },
        { term: 'Tarif per jam mesin', definition: 'Biaya listrik per jam ditambah biaya penyusutan per jam sebelum material, tenaga kerja, overhead, dan laba.' },
        { term: 'Biaya operasional', definition: 'Biaya mesin yang dikeluarkan untuk menjaga produksi tetap berjalan selama durasi tertentu.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Apa yang termasuk dan tidak termasuk dalam kalkulator ini',
      items: [
        { pro: 'Termasuk konsumsi daya terukur, tarif listrik, durasi, harga beli, dan masa pakai.', con: 'Tidak termasuk filamen, resin, dukungan, cetakan gagal, tenaga kerja, sewa, perangkat lunak, kemasan, atau margin.' },
        { pro: 'Menunjukkan pembagian biaya sehingga pengguna dapat mengidentifikasi pendorong ekonomi utama.', con: 'Menggunakan penyusutan garis lurus, sehingga tidak memodelkan jadwal penyusutan pajak atau nilai jual kembali.' },
        { pro: 'Berfungsi untuk satu cetakan, satu batch, atau blok produksi bulanan dengan mengubah durasi.', con: 'Membutuhkan asumsi daya dan masa pakai yang jujur untuk menghindari presisi palsu.' },
      ],
    },
    { type: 'title', text: 'Menggunakan Hasil untuk Menetapkan Harga Per Jam yang Menguntungkan', level: 2 },
    {
      type: 'paragraph',
      html: 'Tarif per jam yang dihitung adalah lantai untuk waktu mesin, bukan harga jual akhir. Kutipan cetak 3D lengkap biasanya menambahkan material, limbah dukungan, limbah pembersihan, tenaga kerja operator, waktu slicing dan persiapan, tunjangan cetak gagal, bahan habis pakai perawatan, sewa, perangkat lunak, biaya pembayaran, pajak, dan margin target. Tarif per jam mesin tetap penting karena mencegah printer itu sendiri diperlakukan sebagai gratis.',
    },
    {
      type: 'paragraph',
      html: 'Misalnya, jika kalkulator mengembalikan Rp225 per jam mesin dan pekerjaan menempati printer selama 14 jam, biaya operasional mesin adalah Rp3.150. Jika material Rp4.800, alokasi tenaga kerja Rp6.000, tunjangan kegagalan Rp1.200, dan margin diterapkan setelahnya, kutipan menjadi dapat dilacak secara finansial. Ketika pelanggan bertanya mengapa cetakan panjang lebih mahal dari yang disarankan berat plastik, waktu mesin menjadi item baris yang dapat dijelaskan.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Wawasan profitabilitas',
      html: '<p>Perhitungan ini adalah dasar untuk menentukan <strong>harga per jam</strong> dari peternakan cetak mana pun. Setelah biaya mesin per jam diketahui, bengkel dapat memutuskan apakah akan menagih waktu mesin langsung, memasukkannya ke dalam markup material, atau menggunakannya secara internal untuk membandingkan printer dan material.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jangan hanya mengutip berdasarkan gram',
      badge: 'Biaya tersembunyi',
      html: '<p>Bagian ringan yang menempati printer selama 20 jam dapat mengonsumsi lebih banyak kapasitas mesin daripada bagian berat yang dicetak cepat. Penetapan harga berbasis berat tanpa waktu mesin sering kali menetapkan harga terlalu rendah untuk pekerjaan lambat, tinggi, lapisan halus, atau aliran rendah.</p>',
    },
    { type: 'title', text: 'Contoh Praktis untuk Perkiraan Biaya Operasional Cetak 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Pekerjaan PLA desktop yang disetel mungkin rata-rata 120 W, berjalan selama 6 jam, menggunakan tarif Rp250/kWh, dan berada di printer Rp600.000 dengan masa pakai 5000 jam. Listrik hanya Rp158, sementara amortisasi Rp720. Total biaya operasional mesin sekitar Rp878, dan tarif per jam sekitar Rp146. Dalam kasus ini, pekerjaan jelas dipimpin aset: utilisasi mesin yang lebih baik memengaruhi profitabilitas lebih dari perubahan daya kecil.',
    },
    {
      type: 'paragraph',
      html: 'Pekerjaan ASA pada printer tertutup yang lebih besar mungkin rata-rata 420 W selama 18 jam pada Rp300/kWh. Jika printer berharga Rp1.800.000 dan masa pakai 4500 jam, listrik Rp2.268 dan amortisasi Rp7.200, dengan total biaya mesin Rp9.468. Meskipun penggunaan energi jauh lebih tinggi, penyusutan masih mendominasi karena biaya modal dan okupasi mesin yang lama cukup besar.',
    },
    {
      type: 'paragraph',
      html: 'Printer resin dapat menceritakan kisah berbeda. Printer mungkin mengonsumsi daya sederhana, tetapi perhitungannya masih berlaku untuk okupasi mesin. Jika pembangunan memakan waktu 9 jam pada mesin Rp2.500.000 yang diharapkan menghasilkan 4000 jam masa pakai, amortisasi saja Rp5.625. Angka itu termasuk dalam kutipan sebelum resin, sarung tangan, IPA atau cairan pencuci, pasca-pengerasan, dukungan, dan tenaga kerja pembersihan ditambahkan.',
    },
    {
      type: 'summary',
      title: 'Aturan keputusan',
      items: [
        'Gunakan watt rata-rata terukur untuk akurasi listrik.',
        'Gunakan jam masa pakai realistis untuk pemulihan aset.',
        'Perlakukan hasil sebagai lantai waktu mesin, lalu tambahkan material, tenaga kerja, overhead, risiko, dan margin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
