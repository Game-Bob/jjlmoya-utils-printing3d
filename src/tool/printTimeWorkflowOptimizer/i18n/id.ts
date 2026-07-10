import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = 'pengoptimal-waktu-cetak-3d';
const title = 'Pengoptimal Waktu Cetak 3D';
const description =
  'Bandingkan dua pengaturan cetak FDM secara berdampingan: jumlah lapisan, waktu terkoreksi, konsumsi filamen, biaya, trade-off kualitas, dan peringatan kecepatan perangkat keras.';

const faqData = [
  {
    question: 'Perbedaan dari kalkulator waktu sederhana?',
    answer:
      'Mencakup overhead kompleksitas, waktu retraksi per lapisan, volume isian, massa filamen, biaya dan perbandingan skenario.',
  },
  {
    question: 'Bisa menggantikan perkiraan slicer?',
    answer:
      'Tidak. Slicer mengetahui jalur alat eksak. Alat ini merencanakan sebelum slicing.',
  },
  {
    question: 'Apa yang diubah pengaturan kompleksitas?',
    answer:
      'Rendah/sedang/tinggi menerapkan koefisien overhead untuk gerakan, kerugian akselerasi, sudut dan pulau.',
  },
  {
    question: 'Kenapa alat memperingatkan di atas 100 mm/s?',
    answer:
      'Banyak printer bisa melampaui 100 mm/s tapi ekstrusi dan pendinginan membuat kecepatan tinggi berisiko tanpa kalibrasi.',
  },
];
const howToData = [
  { name: 'Masukkan ukuran dan volume model', text: 'Tambahkan tinggi dan volume dari CAD, pratinjau slicer atau perkiraan.' },
  { name: 'Sesuaikan skenario A', text: 'Pilih tinggi lapisan, kecepatan, lebar garis, isian, material, kompleksitas.' },
  { name: 'Sesuaikan skenario B', text: 'Sesuaikan konfigurasi kedua untuk perbandingan.' },
  { name: 'Baca dampak', text: 'Bandingkan waktu, filamen, biaya, lapisan, efisiensi, aliran.' },
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input alur kerja cetak',
    resultsAriaLabel: 'Hasil alur kerja cetak',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    currencyLabel: 'Mata uang',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Skenario A',
    scenarioBLabel: 'Skenario B',
    modelHeightLabel: 'Tinggi model',
    modelVolumeLabel: 'Perkiraan volume',
    layerHeightLabel: 'Tinggi lapisan',
    speedLabel: 'Kecepatan',
    lineWidthLabel: 'Lebar garis',
    infillLabel: 'Isian',
    complexityLabel: 'Kompleksitas',
    complexityTooltip: 'Memperkirakan waktu mati: akselerasi, sudut, retraksi, pulau, gerakan pendek.',
    pieceTypeLabel: 'Jenis bagian',
    solidPieceLabel: 'Padat kontinu',
    hollowPieceLabel: 'Berongga banyak rongga',
    materialLabel: 'Material',
    filamentPriceLabel: 'Harga filamen',
    lowComplexity: 'Rendah permukaan sederhana',
    mediumComplexity: 'Sedang geometri campuran',
    highComplexity: 'Tinggi banyak pulau',
    estimatedTimeLabel: 'Perkiraan waktu',
    filamentLabel: 'Filamen',
    costLabel: 'Biaya material',
    layersLabel: 'Lapisan',
    efficiencyLabel: 'Efisiensi',
    flowLabel: 'Aliran volumetric',
    flowTooltip: 'Di atas 10-12 mm3/s = risiko under-extrusion.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Trade-off kualitas',
    speedReductionLabel: '-10% kecepatan',
    speedReductionAddsLabel: 'menambah',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: '~8% permukaan lebih bersih',
    hardwareWarning: 'Kecepatan >100 mm/s. Periksa aliran hotend, pendinginan, akselerasi.',
    flowWarning: 'Aliran di atas zona nyaman hotend standar.',
    bestValueLabel: 'Nilai terbaik',
    timeDeltaLabel: 'Selisih waktu',
    costDeltaLabel: 'Selisih biaya',
    materialDeltaLabel: 'Selisih material',
    winnerBadge: 'Nilai terbaik',
    scenarioPrefix: 'Skenario',
    inScenarioLabel: 'di',
    fasterDirection: 'lebih cepat',
    cheaperDirection: 'lebih murah',
    lighterDirection: 'lebih ringan',
    criterionAlignedLabel: 'Selaras nilai terbaik',
    criterionTradeoffLabel: 'Trade-off nilai terbaik',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'min',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'Cara Memperkirakan Waktu Cetak 3D Sebelum Slicing', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Perkiraan waktu cetak 3D</strong> yang berguna tidak bisa hanya dengan membagi volume dengan kecepatan. Printer FDM menghabiskan waktu untuk mempercepat, melambat di sudut, menarik kembali filamen, bergerak antar pulau, mendinginkan lapisan kecil, dan memulihkan tekanan setelah perubahan arah. Pengoptimal ini memodelkan bagian sebagai volume cetak, lebar garis, tinggi lapisan, kecepatan, jumlah lapisan, dan koefisien kompleksitas sehingga perencanaan awal lebih dekat dengan keputusan alur kerja nyata.',
    },
    {
      type: 'paragraph',
      html: 'Waktu ekstrusi dasar dihitung dari volume dibagi throughput volumetrik: kecepatan dikalikan lebar garis dan tinggi lapisan. Kemudian alat ini menerapkan koefisien koreksi untuk kompleksitas model dan menambahkan kelonggaran retraksi tetap per lapisan. Ini tidak mengklaim presisi slicer, tetapi memberikan perbandingan yang lebih jujur antara pengaturan draf 0,20 mm dan pengaturan kualitas 0,12 mm daripada kalkulator linier.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Overhead kompleksitas rendah untuk blok sederhana dan bagian halus', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Overhead kompleksitas tinggi untuk banyak pulau dan retraksi', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Kelonggaran retraksi terencana ditambahkan per lapisan', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Ambang peringatan printer standar untuk risiko ekstrusi', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan volume slicer bila memungkinkan',
      html: '<p>Input volume terbaik adalah volume material dari slicer atau CAD untuk model tersebut, bukan bounding box luar. Bounding box mencakup udara kosong di sekitar kurva, lubang, gagang, dan rongga, sehingga dapat melebih-lebihkan waktu dan filamen.</p>',
    },
    { type: 'title', text: 'Mengapa Tinggi Lapisan Mengubah Waktu Secara Signifikan', level: 2 },
    {
      type: 'paragraph',
      html: 'Tinggi lapisan memengaruhi waktu cetak dua kali lipat. Pertama, ia mengubah throughput volumetrik: lapisan 0,12 mm pada kecepatan dan lebar yang sama mengekstrusi plastik 40% lebih sedikit per detik daripada lapisan 0,20 mm. Kedua, ia meningkatkan jumlah lapisan, sehingga overhead pergantian lapisan, retraksi, penstabilan tekanan, dan keputusan pendinginan terjadi lebih sering. Itulah sebabnya perubahan kosmetik kecil dapat mengubah cetakan lima jam menjadi cetakan delapan jam.',
    },
    {
      type: 'table',
      headers: ['Tinggi lapisan', 'Penggunaan umum', 'Konsekuensi alur kerja'],
      rows: [
        ['0,28-0,32 mm', 'Bagian draf, perlengkapan besar, pemeriksaan cepat', 'Jumlah lapisan rendah dan throughput tinggi, tetapi garis lapisan terlihat.'],
        ['0,18-0,22 mm', 'Cetakan PLA dan PETG umum', 'Waktu, kekuatan, dan kualitas permukaan seimbang untuk banyak printer desktop.'],
        ['0,10-0,14 mm', 'Miniatur, cangkang melengkung, bagian konsumen yang terlihat', 'Pekerjaan jauh lebih lama karena throughput turun dan jumlah lapisan naik.'],
        ['Di bawah 0,10 mm', 'Kasus penyelesaian khusus', 'Sering dibatasi oleh akurasi mesin, pendinginan, dan hasil visual yang menurun.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Lapisan halus bisa lebih lambat dari yang disarankan rumus',
      badge: 'Pendinginan dan waktu lapisan minimum',
      html: '<p>Model kecil mungkin mencapai waktu lapisan minimum di slicer. Ketika itu terjadi, printer melambat untuk membiarkan plastik mendingin, bahkan jika rumus volumetrik mengatakan mesin bisa bergerak lebih cepat.</p>',
    },
    {
      type: 'summary',
      title: 'Aturan tinggi lapisan',
      items: [
        'Tinggi lapisan lebih rendah mengurangi aliran per detik pada kecepatan yang sama.',
        'Lebih banyak lapisan menambah overhead berulang bahkan ketika volume model tidak berubah.',
        'Perbandingan terbaik berbasis skenario: profil draf versus profil kualitas.',
      ],
    },
    { type: 'title', text: 'Overhead Kompleksitas Model dan Waktu Mati', level: 2 },
    {
      type: 'paragraph',
      html: 'Waktu mati adalah celah antara ekstrusi teoretis dan jam kerja. Dinding lurus seperti vas memiliki sedikit pergerakan dan sedikit retraksi. Rumahan mekanis dengan banyak lubang, tonjolan, label, rusuk, dan pulau terpisah memaksa printer untuk memulai dan berhenti berkali-kali. Batas akselerasi berarti nosel mungkin tidak pernah mencapai kecepatan yang diperintahkan pada segmen pendek, sehingga kecepatan gerakan rata-rata nyata lebih rendah dari nilai penggeser.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Kompleksitas rendah', description: 'Model halus, kontur kontinu, sedikit pulau, dan pergerakan internal terbatas.', icon: 'mdi:shape-outline', points: ['Overhead lebih rendah', 'Kecepatan stabil', 'Sedikit retraksi'] },
        { title: 'Kompleksitas sedang', description: 'Bagian fungsional umum dengan lubang, kurva campuran, perubahan pengisi, dan pergerakan moderat.', icon: 'mdi:cog-outline', highlight: true, points: ['Default seimbang', 'Beberapa kehilangan pergerakan', 'Dasar kutipan berguna'] },
        { title: 'Kompleksitas tinggi', description: 'Permukaan bertekstur, banyak fitur terpisah, antarmuka pendukung, dan bagian dengan retraksi berat.', icon: 'mdi:transit-connection-variant', points: ['Overhead tinggi', 'Risiko stringing lebih besar', 'Waktu kerja nyata lebih lama'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Koefisien overhead', definition: 'Pengali yang memperkirakan pergerakan, kehilangan akselerasi, retraksi, dan waktu lain yang tidak tercakup oleh perhitungan ekstrusi tetap.' },
        { term: 'Aliran volumetrik', definition: 'Jumlah plastik yang didorong melalui nosel per detik, dihitung sebagai kecepatan dikali lebar garis dikali tinggi lapisan.' },
        { term: 'Jumlah lapisan', definition: 'Tinggi model dibagi tinggi lapisan, dibulatkan ke atas karena lapisan akhir parsial masih memerlukan satu lintasan.' },
        { term: 'Sub-ekstrusi', definition: 'Cacat di mana hotend atau ekstruder tidak dapat mengirimkan cukup plastik cair untuk kecepatan dan geometri garis yang diminta.' },
      ],
    },
    {
      type: 'message',
      title: 'Anggap kompleksitas sebagai kenop kalibrasi',
      ariaLabel: 'Catatan koefisien kompleksitas',
      html: '<p>Jika slicer Anda secara konsisten melaporkan waktu lebih lama dari pengoptimal ini untuk model serupa, naikkan kompleksitas. Jika printer direct-drive Anda dengan akselerasi yang disetel mengalahkan perkiraan, turunkan untuk perencanaan masa depan.</p>',
    },
    { type: 'title', text: 'Konsumsi Filamen, Biaya, dan Pengisi', level: 2 },
    {
      type: 'paragraph',
      html: 'Waktu hanyalah satu bagian dari keputusan alur kerja. Berat dan biaya filamen penting saat membuat kutipan bagian, merencanakan pekerjaan batch, atau memutuskan apakah profil detail halus layak mengikat printer. Pengoptimal memperkirakan volume cetak yang dikoreksi dengan mempertahankan bagian cangkang dan menskalakan wilayah internal berdasarkan persentase pengisi, kemudian mengalikan volume itu dengan densitas material.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gunakan PLA sekitar 1,24 g/cm³ dan PETG sekitar 1,27 g/cm³ untuk perencanaan material cepat.',
        'Naikkan volume estimasi ketika penyangga, brim, raft, atau struktur pembersih menjadi bagian dari pekerjaan.',
        'Pengisi yang lebih rendah mengurangi filamen dan waktu, tetapi dinding, lapisan atas, dan lapisan bawah tetap mengonsumsi material.',
        'Untuk batch produksi, bandingkan estimasi kalkulator dengan berat spul aktual yang digunakan dan sesuaikan kutipan masa depan.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Contoh keputusan alur kerja',
      html: '<p>Bagian PLA 120 cm³ pada lapisan 0,20 mm mungkin dapat diterima untuk jig bengkel, sementara versi 0,12 mm terlihat lebih baik tetapi mengikat printer lebih lama. Membandingkan waktu dan biaya material berdampingan membuat tradeoff terlihat sebelum mesin dikomitmenkan.</p>',
    },
    {
      type: 'proscons',
      title: 'Mengoptimalkan kecepatan versus kualitas',
      items: [
        { pro: 'Kecepatan lebih tinggi dapat membebaskan kapasitas printer untuk lebih banyak pekerjaan per hari.', con: 'Ini dapat mengekspos ringing, sudut lemah, pendinginan buruk, dan batas aliran hotend.' },
        { pro: 'Kecepatan lebih rendah sering meningkatkan hasil akhir permukaan dan konsistensi dimensi.', con: 'Ini meningkatkan waktu antrian dan dapat membuat bagian komersial kecil kurang menguntungkan.' },
        { pro: 'Tinggi lapisan lebih rendah meningkatkan permukaan melengkung dan miniatur.', con: 'Ini melipatgandakan jumlah lapisan dan overhead mesin berulang.' },
      ],
    },
    { type: 'title', text: 'Peringatan Perangkat Keras dan Batas Kecepatan Praktis', level: 2 },
    {
      type: 'paragraph',
      html: 'Nilai kecepatan slicer bukanlah jaminan bahwa nosel akan mempertahankan kecepatan itu di mana-mana. Printer Cartesian standar dengan tempat tidur bergerak, ekstruder Bowden lama, hotend zona leleh pendek, dan pendinginan bagian yang lemah bisa kesulitan di atas 100 mm/s kecuali akselerasi, jerk, pressure advance, suhu, dan kalibrasi aliran disetel. Peringatan tidak berarti cetakan akan gagal; itu berarti pengaturan yang diminta harus diperiksa terhadap perilaku perangkat keras.',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan penyebab', 'Respons perencanaan'],
      rows: [
        ['Dinding tipis atau celah', 'Hotend tidak bisa melelehkan cukup plastik atau ekstruder selip', 'Kurangi kecepatan, naikkan suhu dengan hati-hati, atau turunkan lebar garis/tinggi lapisan.'],
        ['Ringing di dekat sudut', 'Akselerasi dan getaran rangka mendominasi', 'Turunkan akselerasi atau kurangi kecepatan untuk dinding yang terlihat.'],
        ['Fitur kecil melengkung', 'Pendinginan tidak dapat mengimbangi', 'Kurangi kecepatan, tingkatkan kipas, atau cetak beberapa salinan.'],
        ['Stringing pada bagian kompleks', 'Banyak pergerakan dan retraksi', 'Tingkatkan overhead kompleksitas dan sesuaikan retraksi/suhu.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Aliran volumetrik adalah batas kecepatan sebenarnya',
      badge: 'Periksa mm³/s',
      html: '<p>Dua profil dengan kecepatan gerakan yang sama dapat menuntut tingkat leleh yang berbeda. Lapisan 0,30 mm dan garis 0,50 mm pada 80 mm/s membutuhkan lebih banyak plastik per detik daripada lapisan 0,12 mm dan garis 0,42 mm pada kecepatan yang sama.</p>',
    },
    {
      type: 'summary',
      title: 'Gunakan pengoptimal sebelum slicing',
      items: [
        'Bandingkan dua profil kandidat alih-alih menebak dari satu angka.',
        'Amati jumlah lapisan, aliran volumetrik, dan peringatan perangkat keras bersama-sama.',
        'Simpan interaksi terakhir secara lokal sehingga perencanaan berulang dapat berlanjut dari pengaturan sebelumnya.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
