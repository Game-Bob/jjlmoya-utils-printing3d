import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'konverter-berat-panjang-filamen';
const title = 'Konverter Berat ke Panjang Filamen: Estimasi Material yang Akurat';
const description = 'Konversi gram filamen ke meter dan volume dengan densitas material, diameter 1,75 mm atau 2,85 mm, dan pemeriksaan kecukupan spool instan.';

const faqData = [
  {
    question: 'Bagaimana cara mengubah gram filamen menjadi meter?',
    answer: 'Bagi massa dengan densitas material untuk mendapatkan volume, konversi volume tersebut dari sentimeter kubik ke milimeter kubik, lalu bagi dengan luas penampang lingkaran dari diameter filamen.',
  },
  {
    question: 'Mengapa densitas material filamen itu penting?',
    answer: 'Berat yang sama dari PLA, PETG, ABS, TPU, atau filamen isian menghasilkan volume yang berbeda karena setiap polimer memiliki densitas yang berbeda. Panjang adalah volume dibagi luas filamen, sehingga densitas secara langsung mengubah estimasi meter.',
  },
  {
    question: 'Apakah filamen 1,75 mm selalu memiliki panjang yang sama per kilogram?',
    answer: 'Tidak. Toleransi diameter, densitas material, aditif, dan kadar kelembapan semuanya mengubah panjang sebenarnya. Kalkulator ini memberikan estimasi perencanaan berdasarkan diameter nominal dan densitas.',
  },
  {
    question: 'Bisakah saya menggunakan kalkulator ini untuk filamen 2,85 mm?',
    answer: 'Ya. Masukkan 2,85 mm, atau beralih ke satuan imperial dan masukkan diameter yang setara. Luas penampang akan langsung diperbarui.',
  },
];

const howToData = [
  { name: 'Masukkan massa filamen', text: 'Ketik jumlah filamen yang dibutuhkan oleh slicer, berat yang tersisa pada spool, atau nilai gram apa pun yang ingin Anda konversi.' },
  { name: 'Pilih material', text: 'Pilih PLA, PETG, ABS, TPU, Nylon, PC, atau campuran isian agar kalkulator dapat menggunakan densitas yang tepat.' },
  { name: 'Atur diameter filamen', text: 'Gunakan 1,75 mm, 2,85 mm, atau diameter hasil ukur jika Anda ingin estimasi panjang mencerminkan spool tertentu.' },
  { name: 'Periksa kecukupan spool', text: 'Opsional, masukkan sisa berat spool untuk melihat apakah material Anda mencukupi serta kelebihan atau kekurangan pastinya.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    inputsTitle: 'Estimasi stok material',
    materialLabel: 'Material',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polikarbonat',
    materialWoodLabel: 'PLA isian kayu',
    materialCarbonLabel: 'Campuran serat karbon',
    materialMetalLabel: 'PLA isian logam',
    densityLabel: 'Densitas',
    densityUnit: 'g/cm3',
    weightLabel: 'Berat filamen',
    weightSliderLabel: 'Penggeser berat cetak',
    diameterLabel: 'Diameter filamen',
    stockLabel: 'Sisa berat spool',
    stockPlaceholder: 'Pemeriksaan stok opsional',
    spoolStateLabel: 'Status spool',
    spoolScaleLabel: 'Massa terpakai / tersedia',
    cutLineLabel: 'Garis henti kehabisan',
    resultLengthLabel: 'Perkiraan panjang filamen',
    resultVolumeLabel: 'Volume polimer',
    resultAreaLabel: 'Luas penampang',
    resultGramsMeterLabel: 'Massa linear',
    enoughLabel: 'Spool mencukupi',
    shortLabel: 'Spool tidak mencukupi',
    noStockLabel: 'Pemeriksaan stok nonaktif',
    surplusLabel: 'Kelebihan',
    missingLabel: 'Kekurangan',
    formulaLabel: 'Jalur perhitungan',
    formulaText: 'volume = massa / densitas -> panjang = volume / luas penampang',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/kaki',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'kaki',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Mengapa kalkulator gram ke meter filamen berbasis densitas lebih akurat', level: 2 },
    { type: 'paragraph', html: 'Konverter berat ke panjang filamen hanya sebagus model material di belakangnya. Kalkulator generik sering menganggap bahwa satu kilogram setiap filamen menempati volume yang sama, tetapi filamen FFF dijual berdasarkan massa sementara ekstruder mengonsumsi untaian silindris berdasarkan panjang. Jembatan antara dua pengukuran tersebut adalah <strong>densitas</strong>. PLA sekitar 1,24 g/cm3, PETG sekitar 1,27 g/cm3, ABS mendekati 1,04 g/cm3, dan TPU sekitar 1,21 g/cm3 tidak terkonversi ke jumlah meter yang sama, bahkan ketika berat spool dan diameternya identik.' },
    { type: 'paragraph', html: 'Perhitungan dimulai dari massa. Membagi gram dengan densitas menghasilkan volume dalam sentimeter kubik. Volume tersebut kemudian dikonversi ke milimeter kubik karena diameter filamen biasanya diukur dalam milimeter. Luas penampang adalah luas lingkaran: pi dikali jari-jari kuadrat. Terakhir, volume dibagi luas menghasilkan panjang dalam milimeter, yang dapat dikonversi ke meter atau kaki. Hasilnya adalah estimasi praktis untuk memeriksa apakah material yang dilaporkan oleh slicer dapat dicetak dari stok yang tersisa pada spool.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Densitas khas PLA dalam g/cm3' },
      { value: '2,405', label: 'Luas dalam mm2 untuk filamen nominal 1,75 mm' },
      { value: '6,379', label: 'Luas dalam mm2 untuk filamen nominal 2,85 mm' },
      { value: '3 input', label: 'Massa, densitas, dan diameter menentukan konversi' },
    ] },
    { type: 'table', headers: ['Material', 'Densitas perencanaan', 'Mengapa angka ini penting'], rows: [
      ['PLA', '1,24 g/cm3', 'Referensi umum untuk pencetakan desktop dan dasar yang baik untuk purwarupa.'],
      ['PETG', '1,27 g/cm3', 'Sedikit lebih padat dari PLA, sehingga jumlah gram yang sama menghasilkan panjang yang lebih pendek.'],
      ['ABS', '1,04 g/cm3', 'Densitas lebih rendah berarti panjang per gram lebih banyak daripada PLA pada diameter yang sama.'],
      ['TPU', '1,21 g/cm3', 'Filamen fleksibel mendekati PLA tetapi tetap perlu dimodelkan secara terpisah.'],
      ['Campuran isian', 'Bervariasi', 'Aditif kayu, serat karbon, logam, dan kaca dapat menggeser densitas jauh dari polimer dasar.'],
    ] },
    { type: 'title', text: 'Rumus konversi pasti untuk estimasi stok filamen', level: 2 },
    { type: 'paragraph', html: 'Model matematika ini sengaja dibuat sederhana karena setiap istilah memiliki makna fisik. Luas penampang adalah <code>pi x (diameter / 2)^2</code>. Volume adalah <code>berat / densitas</code>. Panjang adalah <code>volume x 1000 / luas penampang</code> ketika volume dalam cm3 dan luas penampang dalam mm2; hasilnya dalam milimeter, lalu dibagi 1000 untuk meter. Ini adalah geometri yang sama yang digunakan untuk menghitung volume ekstrusi, laju aliran maksimum, dan penggunaan material di slicer.' },
    { type: 'diagnostic', variant: 'info', title: 'Toleransi diameter adalah ketidakpastian terbesar sehari hari', badge: 'Catatan pengukuran', html: 'Spool nominal 1,75 mm mungkin tidak persis 1,75 mm di seluruh gulungan. Karena luas tergantung pada kuadrat jari-jari, perbedaan diameter kecil mengubah panjang yang dihitung dan volume ekstrusi nyata. Untuk pemeriksaan stok normal, diameter nominal sudah memadai. Untuk kalibrasi, gunakan jangka sorong di beberapa titik dan masukkan diameter rata-rata.' },
    { type: 'list', items: [
      'Gunakan gram saat menyalin penggunaan material dari slicer seperti PrusaSlicer, Cura, Bambu Studio, atau OrcaSlicer.',
      'Gunakan sisa berat spool terukur setelah mengurangi berat spool kosong jika Anda menginginkan pemeriksaan kecukupan yang andal.',
      'Gunakan densitas dari lembar data pabrikan saat mencetak komposit khusus.',
      'Gunakan 2,85 mm, bukan 1,75 mm, jika mesin menggunakan filamen yang lebih besar, karena luas penampangnya sangat berbeda.',
    ] },
    { type: 'tip', title: 'Jangan sertakan berat spool kosong dalam sisa stok', html: 'Spool di timbangan mencakup berat inti plastik atau karton. Jika spool kosong berbobot 180g dan timbangan menunjukkan 430g, estimasi filamen yang dapat digunakan seharusnya 250g. Memasukkan berat spool kotor membuat indikasi kecukupan hijau menjadi terlalu optimistis.' },
    { type: 'title', text: 'Panjang filamen 1,75 mm vs 2,85 mm dari berat yang sama', level: 2 },
    { type: 'paragraph', html: 'Diameter memiliki dampak yang lebih besar dari yang diperkirakan banyak pengguna. Untaian 2,85 mm memiliki luas penampang lebih dari dua kali lipat dibandingkan untaian 1,75 mm, sehingga satu kilogram menjadi jauh lebih sedikit meter. Ini tidak berarti satu diameter lebih ekonomis dengan sendirinya; keduanya dapat mencetak volume bagian yang sama. Artinya, angka panjang stok tidak dapat dibandingkan tanpa konteks diameter. Ketika slicer melaporkan gram, itu sudah menormalisasi penggunaan material berdasarkan massa; ketika sensor kehabisan printer atau estimasi spool manual berpikir dalam meter, diameter menjadi sentral.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Filamen 1,75 mm', description: 'Panjang untaian lebih panjang per kilogram dan format dominan untuk printer desktop saat ini.', points: ['Berguna untuk ekstruder kompak', 'Lebih banyak meter pada massa spool yang sama', 'Luas nominal sekitar 2,405 mm2'] },
      { title: 'Filamen 2,85 mm', description: 'Panjang untaian lebih pendek per kilogram dengan penampang umpan yang lebih besar, sering ditemukan pada mesin lama atau profesional.', points: ['Luas nominal sekitar 6,379 mm2', 'Kurang sensitif terhadap kompresi pengumpan di beberapa pengaturan', 'Tidak boleh menggunakan asumsi 1,75 mm'] },
    ] },
    { type: 'table', headers: ['Skenario', 'Apa yang berubah', 'Konsekuensi perencanaan'], rows: [
      ['Polimer sama, diameter lebih besar', 'Luas bertambah', 'Meter berkurang untuk gram yang sama.'],
      ['Diameter sama, densitas lebih rendah', 'Volume bertambah', 'Meter bertambah untuk gram yang sama.'],
      ['Gram sama, filamen isian', 'Densitas dapat meningkat', 'Meter mungkin lebih pendek dari perkiraan.'],
      ['Filamen lembap', 'Massa terukur sedikit meningkat', 'Spool terlihat lebih berat tanpa menambah polimer kering yang berguna.'],
    ] },
    { type: 'title', text: 'Cara menggunakan pemeriksaan kecukupan spool sebelum memulai cetakan panjang', level: 2 },
    { type: 'paragraph', html: 'Bidang sisa stok opsional mengubah konverter menjadi dasbor lolos atau tidak lolos. Masukkan massa yang dibutuhkan oleh pekerjaan sebagai berat filamen, lalu masukkan filamen yang dapat digunakan yang tersisa pada spool saat ini. Output membandingkan gram secara langsung dan juga mengonversi selisihnya menjadi meter atau kaki menggunakan model material dan diameter yang sama. Hijau berarti spool memiliki stok yang cukup; merah berarti pekerjaan kekurangan dan menunjukkan celah pastinya.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Mengapa gram dan meter keduanya ditampilkan', html: 'Gram adalah bahasa pembelian dan slicer. Meter adalah bahasa panjang untaian yang digunakan oleh beberapa layar firmware, estimasi kehabisan, dan perhitungan spool manual. Menampilkan keduanya mencegah kesalahan perencanaan umum: memiliki panjang yang cukup dengan asumsi densitas yang satu tetapi tidak memiliki massa yang cukup di bawah material yang sebenarnya.' },
    { type: 'proscons', title: 'Metode validasi stok', items: [
      { pro: 'Menimbang spool cepat dan berfungsi bahkan ketika gulungan sudah sebagian terpakai.', con: 'Anda harus mengetahui atau memperkirakan berat spool kosong.' },
      { pro: 'Menggunakan gram slicer biasanya konsisten dengan berat pembelian material.', con: 'Estimasi slicer dapat berubah dengan volume purge, penyangga, brim, dan mesh pengubah.' },
      { pro: 'Panjang bersifat intuitif saat membandingkan jalur filamen dan jarak kehabisan.', con: 'Panjang berubah dengan densitas dan diameter, sehingga tidak universal di semua material.' },
      { pro: 'Konversi berbasis densitas menangani PLA, PETG, ABS, TPU, dan komposit dengan lebih baik.', con: 'Aditif khusus pabrikan dapat memerlukan nilai densitas kustom.' },
    ] },
    { type: 'title', text: 'Filamen komposit dan khusus memerlukan nilai densitas kustom', level: 2 },
    { type: 'paragraph', html: 'Filamen isian adalah alasan utama mengapa estimator material yang serius harus menampilkan densitas, bukan menyembunyikannya. PLA isian kayu, nilon serat karbon, PLA isian logam, filamen glow, material rekayasa isian kaca, dan campuran mirip keramik dapat menyimpang tajam dari polimer dasar. Filamen isian logam mungkin terasa berat karena densitasnya tinggi; 500g yang sama dapat mewakili volume dan panjang yang jauh lebih sedikit daripada PLA standar. Untuk cetakan rekayasa yang mahal, perbedaan itu bukan sekadar akademis. Ini dapat menentukan apakah sepuluh persen terakhir dari cetakan selesai atau kehabisan material.' },
    { type: 'glossary', items: [
      { term: 'Densitas', definition: 'Massa per satuan volume, di sini dinyatakan sebagai gram per sentimeter kubik.' },
      { term: 'Luas penampang', definition: 'Luas lingkaran untaian filamen yang dihitung dari diameter.' },
      { term: 'Massa linear', definition: 'Berapa gram satu meter atau satu kaki filamen untuk material dan diameter yang dipilih.' },
      { term: 'Berat tare', definition: 'Berat spool kosong yang harus dikurangi dari pembacaan timbangan.' },
      { term: 'Diameter nominal', definition: 'Ukuran filamen yang diiklankan, biasanya 1,75 mm atau 2,85 mm, sebelum mengukur toleransi sebenarnya.' },
    ] },
    { type: 'message', title: 'Data pabrikan adalah yang terbaik', html: 'Ketika spool atau lembar data teknis mencantumkan densitas, gunakan nilai tersebut. Prasetel densitas generik berguna untuk perencanaan, tetapi formula khusus pemasok, muatan pigmen, dan penguat dapat mengubah angka tersebut.' },
    { type: 'title', text: 'Contoh praktis untuk estimasi material pencetakan 3D', level: 2 },
    { type: 'paragraph', html: 'Bayangkan sebuah slicer melaporkan bahwa braket PETG membutuhkan 186g dan Anda memiliki spool yang sebagian terpakai. PETG pada 1,27 g/cm3 dengan filamen 1,75 mm terkonversi menjadi sekitar enam puluh satu meter. Jika berat spool yang dapat digunakan setelah tare adalah 220g, dasbor melaporkan kelebihan 34g dan mengonversi margin tersebut menjadi sekitar sebelas meter. Margin itu mungkin cukup untuk garis purge dan brim kecil, tetapi tidak untuk kesalahan penyangga yang besar. Pemeriksaan stok mendorong pengguna untuk menambahkan buffer realistis sebelum meninggalkan cetakan tanpa pengawasan.' },
    { type: 'paragraph', html: 'Sekarang bandingkan ABS. Karena ABS kurang padat dibandingkan PETG, 186g yang sama menghasilkan lebih banyak volume dan karenanya lebih banyak panjang pada diameter 1,75 mm yang sama. Itu tidak berarti bagian ABS lebih murah dengan sendirinya, karena harga per kilogram dan pengaturan cetak juga berperan, tetapi ini menjelaskan mengapa estimasi meter tersisa yang disalin dari satu material dapat menyesatkan untuk material lain. Untuk kontrol inventaris, massa adalah titik awal yang stabil dan densitas menciptakan jembatan menuju panjang.' },
    { type: 'summary', title: 'Daftar periksa perencanaan material yang andal', items: [
      'Kurangi berat spool kosong sebelum memasukkan sisa stok.',
      'Gunakan densitas material yang sebenarnya untuk filamen isian, diperkuat, atau premium.',
      'Periksa apakah mesin Anda menggunakan filamen 1,75 mm atau 2,85 mm sebelum mempercayai angka panjang apa pun.',
      'Sisihkan margin untuk purge, penyangga, brim, lapisan pertama yang gagal, dan perubahan profil slicer.',
      'Anggap status kecukupan hijau sebagai pemeriksaan perencanaan, bukan jaminan terhadap macet atau kerusakan sensor kehabisan.',
    ] },
    { type: 'title', text: 'Jawaban fokus SEO: berat ke panjang filamen dalam satu kalimat', level: 2 },
    { type: 'paragraph', html: 'Untuk mengonversi berat filamen printer 3D ke panjang, bagi berat dalam gram dengan densitas material untuk mendapatkan volume, kalikan dengan 1000 untuk mengubah cm3 ke mm3, bagi dengan <code>pi x (diameter / 2)^2</code>, lalu bagi dengan 1000 untuk membaca meter. Metode sadar-densitas ini lebih akurat daripada bagan gram-ke-meter tetap karena PLA, PETG, ABS, TPU, Nylon, PC, dan filamen komposit semuanya memiliki nilai densitas yang berbeda.' },
    { type: 'diagnostic', variant: 'success', title: 'Kapan estimasi paling dapat diandalkan', badge: 'Praktik terbaik', html: 'Hasilnya paling kuat ketika berat slicer sudah final, sisa berat spool telah dikurangi tare, diameter terukur atau diketahui, dan densitas berasal dari pabrikan. Dalam kondisi tersebut, konverter menjadi pemeriksaan pra-cetak yang praktis untuk cetakan panjang, batch produksi, dan polimer teknis yang mahal.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
