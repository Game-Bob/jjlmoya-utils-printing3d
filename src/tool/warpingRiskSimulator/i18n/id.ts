import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'simulator-risiko-warping-cetak-3d';
const title = 'Simulator Risiko Warping untuk Cetak 3D';
const description = 'Perkirakan pengangkatan lapisan pertama dan risiko warping dari penyusutan material, area tapak, diagonal terpanjang, suhu bed, suhu ruangan, dan kondisi ruang tertutup.';

const faqData = [
  {
    question: 'Mengapa diagonal terpanjang lebih memengaruhi warping daripada area tapak?',
    answer: 'Diagonal terpanjang mewakili jalur penyusutan kontinu terbesar. Bagian yang panjang dapat mengakumulasi penyusutan linier yang cukup untuk mengangkat sudut meskipun area kontak total tampak besar.',
  },
  {
    question: 'Apakah simulator ini menjamin cetakan saya tidak akan melengkung?',
    answer: 'Tidak. Ini adalah perkiraan risiko. Filamen lembap, platform cetak kotor, tinggi lapisan pertama, aliran udara, geometri bagian, dan pilihan pendinginan slicer dapat mengubah hasil.',
  },
  {
    question: 'Material mana yang paling membutuhkan ruang tertutup?',
    answer: 'ABS, ASA, Nylon, dan PC adalah yang paling sensitif terhadap ruang tertutup dalam model ini karena menggabungkan suhu pemrosesan yang lebih tinggi, penyusutan yang lebih kuat, dan tegangan pendinginan yang lebih besar.',
  },
  {
    question: 'Bagaimana lebar brim diperkirakan?',
    answer: 'Simulator mulai dari lima persen dari diagonal terpanjang dan menskalakannya berdasarkan risiko yang dihitung, kemudian menjepit hasilnya ke nilai slicer yang praktis.',
  },
];

const howToData = [
  { name: 'Pilih material', text: 'Pilih PLA, PETG, ABS, ASA, Nylon, PC, atau TPU agar simulator dapat menerapkan kelas penyusutan.' },
  { name: 'Masukkan tapak dan diagonal', text: 'Gunakan luas permukaan yang menyentuh bed dan jarak sudut-ke-sudut terpanjang dari bagian tersebut.' },
  { name: 'Atur lingkungan termal', text: 'Masukkan suhu bed dan ruangan, lalu tunjukkan apakah printer memiliki ruang tertutup.' },
  { name: 'Salin pengaturan slicer', text: 'Gunakan brim, adhesi, pendinginan, dan pengaturan ruang yang disarankan sebagai profil awal.' },
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Sistem satuan',
    unitMetric: 'Metrik',
    unitImperial: 'Imperial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    material: 'Material',
    footprintArea: 'Area tapak',
    footprintHelp: 'Area yang benar-benar menyentuh platform cetak, bukan total permukaan model.',
    diagonal: 'Diagonal terpanjang',
    diagonalHelp: 'Jarak sudut-ke-sudut terpanjang dari lapisan pertama. Ini adalah vektor tegangan termal utama.',
    bedTemperature: 'Suhu bed',
    bedTemperatureWarning: 'Peringatan suhu',
    ambientTemperature: 'Suhu ruangan',
    chamber: 'Ruang tertutup',
    chamberOn: 'Tertutup atau terlindung secara aktif',
    chamberOff: 'Printer terbuka',
    riskLow: 'Rendah',
    riskMedium: 'Sedang',
    riskHigh: 'Tinggi',
    riskCritical: 'Kritis',
    riskIndex: 'Indeks risiko',
    thermalIndex: 'Indeks tegangan termal',
    deltaT: 'Delta T',
    brimRecommendation: 'Rekomendasi brim',
    adhesionDiagnosis: 'Diagnosis adhesi',
    adhesionStrength: 'Tangga kekuatan adhesi',
    criticalWarnings: 'Peringatan kritis',
    whyDiagonalMatters: 'Mengapa diagonal penting',
    recommendedSettings: 'Pengaturan slicer yang disarankan',
    copySettings: 'Salin pengaturan',
    copied: 'Tersalin',
    simulatorNotice: 'Ini adalah perkiraan risiko, bukan jaminan keberhasilan. Kelembaban filamen, kontaminasi bed, Z offset, aliran udara, dan perubahan pendinginan tetap menjadi variabel eksternal.',
    warnings: {
      openTechnicalMaterial: '{material} tanpa ruang tertutup adalah kondisi warping yang parah.',
      bedTemperatureHigh: 'Suhu bed untuk {material} di atas kisaran yang disarankan {min}-{max} {unit}. Perkirakan pelunakan, elephant foot, atau artefak adhesi.',
      bedTemperatureLow: 'Suhu bed untuk {material} di bawah kisaran yang disarankan {min}-{max} {unit}. Cengkeraman lapisan pertama mungkin terlalu lemah untuk geometri ini.',
      narrowFootprint: 'Tapaknya sempit dibandingkan dengan diagonal, sehingga pengangkatan sudut dapat terakumulasi dengan cepat.',
      highDeltaT: 'Kesenjangan suhu bed ke ruangan sangat tinggi; kendalikan aliran udara dan laju pendinginan.',
    },
    diagnosis: {
      critical: 'Brim wajib digunakan. Gunakan permukaan adhesi khusus dan hindari mencetak material ini di udara terbuka.',
      highEnclosed: 'Brim lebar dan perekat sangat disarankan.',
      highOpen: 'Gunakan brim, perekat, dan ruang tertutup sebelum memulai.',
      mediumEasyMaterial: 'Gunakan permukaan PEI yang bersih; brim opsional untuk sudut tajam.',
      medium: 'Gunakan brim atau mouse ears di sudut dan verifikasi adhesi bed.',
      low: 'Aman dalam kondisi lapisan pertama normal.',
    },
    adhesionOptions: {
      low: ['PEI bersih atau lembaran bertekstur: cengkeraman normal, pelepasan paling mudah.'],
      medium: ['Lem batang atau lapisan pelepas PVA: cengkeraman ekstra ringan dan pelepasan PETG yang lebih aman.', 'Mouse ears: cengkeraman lokal untuk sudut tanpa brim penuh.'],
      high: ['Brim lebar plus lem batang: dukungan mekanis luas dengan pembersihan sedang.', 'Magigoo atau perekat serupa: cengkeraman lebih kuat untuk ABS, ASA, PETG, dan varian Nylon.'],
      criticalDefault: ['Brim lebar penuh: tapak lapisan pertama maksimum.', 'Perekat berkekuatan tinggi: gunakan PEI plus perekat berkekuatan tinggi.', 'Ruang tertutup: diperlukan agar perekat bekerja secara konsisten.'],
      criticalTechnical: ['Brim lebar penuh: tapak lapisan pertama maksimum.', 'Perekat berkekuatan tinggi: gunakan perekat khusus material yang cocok untuk Nylon atau PC.', 'Ruang tertutup: diperlukan agar perekat bekerja secara konsisten.'],
    },
    slicerSettings: {
      brimWidth: 'Lebar brim: {value}',
      bedAdhesion: 'Adhesi bed: {value}',
      lowAdhesion: 'PEI bersih atau lembaran bertekstur',
      highAdhesion: 'PEI plus lem batang, Magigoo, atau perekat khusus material',
      cooling: 'Pendinginan: {value}',
      normalCooling: 'Pendinginan bagian normal setelah lapisan 3',
      technicalCooling: 'Pendinginan bagian dimatikan untuk 5-8 lapisan pertama',
      enclosedChamber: 'Jaga ruang tertutup sampai bagian mendingin di bawah kisaran transisi kaca',
      openChamber: 'Lindungi printer dari aliran udara dan aliran udara ruangan',
      skirtEnough: '0 mm, skirt sudah cukup',
    },
    diagonalExplanation: 'Diagonal terpanjang berperilaku seperti vektor tegangan utama: saat bagian mendingin, penyusutan terakumulasi di sepanjang bentangan itu dan membebani sudut bahkan ketika area tapak terlihat besar.',
  },
  seo: [
    { type: 'title', text: 'Cara memperkirakan risiko warping sebelum slicing cetakan 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Warping bukan hanya masalah material dan bukan hanya masalah adhesi bed. Ini terjadi ketika lapisan yang dicetak mendingin, menyusut, dan menciptakan tegangan internal yang cukup untuk mengatasi cengkeraman lapisan pertama. Braket ABS kecil bisa gagal karena polimernya menyusut kuat; tanda PLA besar bisa gagal karena diagonalnya cukup panjang untuk mengakumulasi penyusutan di seluruh bentangan yang luas. Pertanyaan yang berguna bukanlah <strong>apakah material ini akan melengkung?</strong> melainkan <strong>apakah geometri dan lingkungan termal ini menciptakan lebih banyak gaya tarik daripada yang dapat ditahan oleh platform cetak?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Simulator ini menggunakan Indeks Tegangan Termal heuristik: <strong>faktor penyusutan material dikali diagonal terpanjang dikali perbedaan suhu bed-ke-ruangan, dibagi dengan area tapak</strong>. Rumusnya sengaja dibuat praktis. Ini tidak mengaku sebagai analisis elemen hingga, tetapi menggabungkan variabel yang dapat diukur operator sebelum mencetak: keluarga material, area kontak, bentangan linier terpanjang, suhu bed, suhu ruangan, dan apakah printer tertutup.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gunakan hasilnya sebagai sinyal pencegahan',
      badge: 'Perkiraan',
      html: 'Skor rendah berarti cetakan tidak mungkin terangkat jika lapisan pertama bersih dan disetel dengan baik. Skor tinggi atau kritis berarti profil slicer harus diubah sebelum mencetak: brim lebih lebar, perekat, lebih sedikit pendinginan, perlindungan aliran udara, atau material yang berbeda. Simulator tidak dapat melihat filamen lembap, PEI berminyak, nozzle yang terlalu jauh dari bed, atau bagian yang memiliki titik kontak sudut yang kecil.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'lebar brim awal sebagai pecahan dari diagonal terpanjang', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'pengganda ruang terbuka parah untuk ABS, ASA, Nylon, dan PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'skala risiko yang dipetakan dari Indeks Tegangan Termal', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Mengapa diagonal terpanjang bisa lebih berbahaya daripada area', level: 2 },
    {
      type: 'paragraph',
      html: 'Area tapak menunjukkan berapa banyak permukaan yang tersedia untuk adhesi. Diagonal menunjukkan seberapa jauh penyusutan termal dapat terakumulasi sebelum mencapai sudut atau ujung tipis. Dua bagian dapat memiliki area yang sama dan berperilaku sangat berbeda: bantalan persegi kompak memiliki jalur penyusutan pendek ke segala arah, sementara strip panjang sempit memusatkan penyusutan di sepanjang satu garis dan mencoba terkelupas di ujungnya.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tapak kompak',
          description: 'Basis persegi atau bundar mendistribusikan penyusutan melalui banyak jalur pendek. Sudut lebih dekat ke pusat, sehingga tuas untuk pengangkatan lebih kecil.',
          icon: 'mdi:crop-square',
          points: ['Pembagian beban lebih baik', 'Pengungkit sudut lebih rendah', 'Brim sering opsional pada material mudah'],
        },
        {
          title: 'Tapak diagonal panjang',
          description: 'Persegi panjang panjang, bingkai, bilah, panel penutup, atau rel memungkinkan penyusutan membangun di sepanjang satu arah dominan. Ujung dan sudut menerima gaya kupas tertinggi.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Tegangan terakumulasi lebih tinggi', 'Sudut terangkat terlebih dahulu', 'Brim atau mouse ears sering diperlukan'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Cara mengukur diagonal dengan cepat',
      html: 'Di pratinjau slicer, lihat lapisan pertama dari atas dan ukur jarak sudut-ke-sudut terpanjang dari bagian yang menyentuh bed. Untuk tapak persegi panjang, gunakan diagonal persegi panjang, bukan hanya panjang X atau Y. Untuk bagian yang tidak beraturan, gunakan bentangan lurus terpanjang antara dua titik luar.',
    },
    {
      type: 'table',
      headers: ['Pola geometri', 'Gejala khas', 'Tindakan pencegahan'],
      rows: [
        ['Rel panjang tipis', 'Ujung terangkat sementara bagian tengah tetap menempel', 'Gunakan brim atau mouse ears di kedua ujung'],
        ['Panel datar besar', 'Sudut melengkung ke atas secara bertahap', 'Gunakan ruang tertutup, pendinginan lebih lambat, dan perekat'],
        ['Bagian kecil tinggi', 'Basis tetap menempel tetapi menara goyah', 'Warping bukan risiko utama; tingkatkan stabilitas'],
        ['Bingkai terbuka', 'Sudut dalam menarik ke dalam', 'Tambahkan brim, tingkatkan lebar lapisan pertama, kurangi kipas'],
      ],
    },
    { type: 'title', text: 'Kelas penyusutan material yang digunakan simulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Termoplastik yang berbeda menyusut dalam jumlah yang berbeda saat mendingin dari suhu ekstrusi ke suhu ruangan. PLA dan TPU umumnya mudah dimaafkan karena mencetak pada suhu yang lebih rendah dan menghasilkan lebih sedikit tegangan pendinginan. PETG berada di tengah: ia melekat kuat tetapi masih dapat menarik sudut tajam. ABS, ASA, Nylon, dan PC diperlakukan sebagai material teknis berisiko tinggi karena menggabungkan suhu ekstrusi yang lebih tinggi, penyusutan yang lebih kuat, dan kebutuhan yang lebih besar akan ruang yang hangat dan stabil.',
    },
    {
      type: 'table',
      headers: ['Material', 'Kelas penyusutan', 'Strategi bed umum', 'Sensitivitas ruang'],
      rows: [
        ['PLA', 'Rendah', 'PEI bersih, bed sedang', 'Rendah'],
        ['TPU', 'Rendah', 'Lembaran bersih, hindari tekanan berlebih', 'Rendah'],
        ['PETG', 'Sedang', 'PEI bertekstur atau lapisan pelepas', 'Sedang'],
        ['ABS', 'Tinggi', 'PEI plus perekat atau lumpur ABS jika sesuai', 'Sangat tinggi'],
        ['ASA', 'Tinggi', 'PEI plus perekat, pendinginan terkontrol', 'Sangat tinggi'],
        ['Nylon', 'Tinggi', 'Perekat khusus material, filamen kering', 'Sangat tinggi'],
        ['PC', 'Tinggi', 'Bed suhu tinggi dan perekat', 'Sangat tinggi'],
      ],
    },
    {
      type: 'proscons',
      title: 'Mengganti material sebagai alternatif melawan warping',
      items: [
        { pro: 'Beralih dari ABS ke ASA dapat meningkatkan daya tahan luar sambil mempertahankan perilaku termal yang serupa.', con: 'ASA masih membutuhkan disiplin ruang dan dapat melengkung pada bagian yang panjang.' },
        { pro: 'Beralih dari ABS ke PETG mengurangi penyusutan dan seringkali cukup untuk braket dan rumah.', con: 'PETG memiliki ketahanan panas yang lebih rendah dan kekakuan yang berbeda dari ABS atau PC.' },
        { pro: 'Nylon yang diisi serat dapat mengurangi beberapa jalur penyusutan dan meningkatkan kekakuan.', con: 'Ini membutuhkan pengeringan, nozzle tahan abrasi, dan kontrol adhesi yang kuat.' },
      ],
    },
    { type: 'title', text: 'Delta T: mengapa suhu bed dan suhu ruangan sama-sama penting', level: 2 },
    {
      type: 'paragraph',
      html: 'Simulator menggunakan <strong>Delta T</strong> sebagai suhu bed dikurangi suhu ruangan. Ini tidak sama dengan suhu nozzle, tetapi ini adalah proksi yang berguna untuk gradien termal yang dialami bagian bawah bagian. Bed panas mengurangi penyusutan awal di antarmuka, tetapi ruangan yang sangat dingin atau aliran udara yang kuat masih dapat menarik panas dari lapisan atas dan menciptakan gradien tegangan antara dasar yang tertambat dan tubuh bagian yang mendingin.',
    },
    {
      type: 'paragraph',
      html: 'Untuk PLA, Delta T sedang mungkin tidak berbahaya karena material berkontraksi kurang agresif. Untuk ABS, ASA, Nylon, dan PC, geometri yang sama pada suhu bed yang sama dapat gagal jika printer terbuka terhadap aliran udara. Itulah sebabnya perhitungan menerapkan pengganda yang parah ketika material teknis tersebut dicetak tanpa ruang tertutup.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Printer terbuka dengan ABS, ASA, Nylon, atau PC',
      badge: 'Kondisi kritis',
      html: 'Jika ruang terbuka, cetakan terpapar pendinginan lokal, pergerakan pintu, aliran udara HVAC, dan perubahan suhu lapisan yang cepat. Lapisan pertama mungkin terlihat sempurna selama dua puluh menit pertama dan tetap terangkat nanti saat bagian menyimpan lebih banyak tegangan penyusutan.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Ruang yang lebih hangat mengurangi perbedaan suhu antara lapisan baru dan lapisan yang lebih lama.',
        'Ruang tertutup juga memperlambat pendinginan setelah pencetakan, yang mengurangi pengelupasan sudut mendadak.',
        'Pelindung aliran udara membantu, tetapi tidak setara dengan ruang berpemanas yang stabil untuk PC atau Nylon.',
        'Meningkatkan suhu bed saja dapat meningkatkan cengkeraman, tetapi juga dapat meningkatkan elephant foot pada material lunak.',
      ],
    },
    { type: 'title', text: 'Bagaimana Indeks Tegangan Termal ditafsirkan', level: 2 },
    {
      type: 'paragraph',
      html: 'Indeks Tegangan Termal adalah skor relatif, bukan gaya yang diukur dalam newton. Ini naik ketika faktor penyusutan, diagonal, atau Delta T naik. Ini turun ketika area tapak meningkat karena lebih banyak area kontak dapat mendistribusikan beban tarik yang sama. Nilainya kemudian dipetakan ke persentase risiko 0-100 sehingga pengaturan cetak yang berbeda dapat dibandingkan dengan cepat.',
    },
    {
      type: 'table',
      headers: ['Rentang risiko', 'Arti', 'Respons yang disarankan'],
      rows: [
        ['0-31%', 'Rendah', 'Bersihkan bed, periksa lapisan pertama, tidak perlu adhesi khusus untuk sebagian besar bentuk'],
        ['32-57%', 'Sedang', 'Gunakan brim di sudut tajam, kurangi kipas awal, periksa kontak tapak'],
        ['58-81%', 'Tinggi', 'Gunakan brim lebar, perekat, ruang tertutup jika material membutuhkannya, hindari aliran udara'],
        ['82-100%', 'Kritis', 'Anggap kemungkinan melengkung kecuali geometri, material, atau lingkungan berubah'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Mengapa dibagi dengan area tapak?',
      html: 'Tapak yang lebih besar memberi bed lebih banyak kesempatan untuk menahan gaya kupas. Model ini menghargai bagian dengan kontak lebar dan berkelanjutan serta menghukum basis sempit, kaki kecil, dan bagian panjang yang hanya memiliki strip tipis menyentuh permukaan.',
    },
    { type: 'title', text: 'Lebar brim, mouse ears, dan pilihan perekat', level: 2 },
    {
      type: 'paragraph',
      html: 'Rekomendasi brim dimulai dari <strong>Diagonal x 0,05</strong>. Diagonal 180 mm karena itu dimulai mendekati 9 mm sebelum penskalaan risiko. Dalam praktiknya, brim tidak boleh dipilih berdasarkan material saja. Kubus PLA pendek mungkin tidak memerlukan brim, sementara pedang, tanda, atau rel PLA panjang dapat memperoleh manfaat dari brim sederhana karena diagonal adalah jalur tegangan dominan.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Pilihan serba guna terbaik untuk meningkatkan kontak lapisan pertama di seluruh bagian.', icon: 'mdi:border-outside', points: ['Mudah dilepas pada PLA', 'Sangat berguna di sudut ABS'] },
        { title: 'Mouse ears', description: 'Bantalan melingkar lokal ditempatkan di sudut atau ujung tipis tempat pengangkatan dimulai.', icon: 'mdi:circle-outline', points: ['Lebih sedikit pembersihan', 'Baik untuk rel dan bingkai'] },
        { title: 'Perekat', description: 'Meningkatkan cengkeraman kimia atau mekanis antara polimer dan permukaan cetak.', icon: 'mdi:water-plus', points: ['Berguna untuk Nylon dan PC', 'Pilihan khusus permukaan itu penting'] },
      ],
    },
    {
      type: 'tip',
      title: 'Jangan hanya mengandalkan brim sebagai perbaikan',
      html: 'Jika simulator melaporkan risiko kritis, brim yang lebih lebar dapat menunda kegagalan tetapi tidak menghilangkan tegangan yang mendasarinya. Kombinasikan brim dengan ruang tertutup, pendinginan awal yang lebih lambat, bed yang lebih bersih, dan perubahan geometri seperti sudut membulat atau bagian yang terpisah.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Deformasi ke atas yang disebabkan oleh penyusutan pendinginan yang mengalahkan adhesi bed.' },
        { term: 'Area tapak', definition: 'Area model yang menyentuh platform cetak pada lapisan pertama.' },
        { term: 'Diagonal terpanjang', definition: 'Bentangan lurus terpanjang melintasi bentuk kontak lapisan pertama.' },
        { term: 'Delta T', definition: 'Perbedaan suhu antara bed dan udara ruangan di sekitarnya.' },
        { term: 'Brim', definition: 'Lingkaran perimeter lapisan pertama ekstra yang dicetak di sekitar bagian untuk meningkatkan adhesi.' },
      ],
    },
    { type: 'title', text: 'Pengaturan slicer praktis untuk bagian berisiko tinggi', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Tingkatkan lebar garis lapisan pertama untuk menciptakan lebih banyak kontak, tetapi hindari Z squish berlebihan yang menyebabkan tonjolan.',
        'Gunakan lapisan pertama yang lebih lambat sehingga polimer merekat ke bed sebelum lapisan berikutnya menariknya.',
        'Nonaktifkan atau kurangi pendinginan bagian untuk ABS, ASA, Nylon, dan PC selama lapisan pertama.',
        'Tambahkan brim yang cukup lebar untuk melampaui sudut tajam dan ujung sempit.',
        'Hindari menempatkan bagian material teknis besar di dekat pintu ruang, ventilasi, atau panel sisi dingin.',
      ],
    },
    {
      type: 'message',
      title: 'Perubahan geometri yang mengurangi risiko',
      ariaLabel: 'Ide mitigasi geometri',
      html: 'Bulatkan sudut tajam, bagi panel yang sangat panjang menjadi bagian yang lebih pendek, tambahkan tab sementara ke ujung tipis, orientasikan bagian sehingga jalur tegangan terpanjang lebih pendek, atau tambahkan bantalan pengorbanan yang dapat dipangkas setelah pencetakan. Perubahan ini sering bekerja lebih baik daripada sekadar menaikkan suhu bed.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa interpretasi cepat',
      items: [
        'Material penyusutan tinggi plus ruang terbuka adalah tanda peringatan terkuat.',
        'Diagonal panjang plus tapak kecil berarti sudut dan ujung layak mendapatkan brim atau mouse ears.',
        'Suhu bed tinggi tidak membatalkan ruangan dingin atau lingkungan berangin.',
        'Hasilnya adalah perkiraan perencanaan; kalibrasi lapisan pertama dan kondisi filamen masih menentukan cetakan akhir.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
