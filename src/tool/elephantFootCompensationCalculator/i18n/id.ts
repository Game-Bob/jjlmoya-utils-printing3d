import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'kalkulator-kompensasi-kaki-gajah';
const title = 'Kalkulator Kompensasi Kaki Gajah: Koreksi Dimensional Presisi';
const description = 'Hitung ekspansi horizontal negatif dan kedalaman chamfer CAD untuk lapisan pertama cetak 3D menggunakan kesalahan dimensional terukur, tinggi lapisan, tekanan Z-offset, dan suhu alas.';

const faqData = [
  {
    question: 'Apa nilai kompensasi kaki gajah terbaik?',
    answer: 'Nilai terbaik adalah kesalahan dasar terukur yang dikoreksi untuk tinggi lapisan pertama, tekanan Z efektif, dan suhu alas. Kalkulator ini melaporkannya sebagai nilai ekspansi horizontal negatif slicer.',
  },
  {
    question: 'Haruskah saya menggunakan ekspansi horizontal atau chamfer CAD?',
    answer: 'Gunakan ekspansi horizontal slicer untuk koreksi tingkat profil yang cepat. Gunakan chamfer CAD untuk bagian fungsional di mana tepi bawah menyentuh bagian lain, duduk di permukaan referensi, atau harus tetap dapat diulang di seluruh slicer.',
  },
  {
    question: 'Mengapa suhu alas memengaruhi kaki gajah?',
    answer: 'Alas yang lebih panas menjaga polimer bawah lebih lunak lebih lama. Manik yang melunak dapat mengalir secara horizontal di bawah tekanan nosel, sehingga kalkulator meningkatkan koreksi di atas titik referensi 60 °C.',
  },
  {
    question: 'Apakah kaki gajah sama dengan over-ekstrusi?',
    answer: 'Tidak. Over-ekstrusi memengaruhi banyak lapisan. Kaki gajah terkonsentrasi di dasar di mana lapisan pertama dikompresi dan dipanaskan oleh alas, meskipun over-ekstrusi dapat memperburuknya.',
  },
];

const howToData = [
  { name: 'Cetak kupon', text: 'Gunakan material, suhu alas, tinggi lapisan pertama, dan pengaturan lapisan pertama yang sama dengan cetakan produksi.' },
  { name: 'Ukur kesalahan dasar', text: 'Kurangi dimensi dinding atas yang stabil dari dimensi dasar terlebar.' },
  { name: 'Masukkan tekanan dan suhu', text: 'Berikan tinggi lapisan pertama, celah tekanan Z efektif, dan suhu alas.' },
  { name: 'Terapkan koreksi', text: 'Gunakan nilai ekspansi horizontal negatif di slicer atau buat model chamfer 45 derajat yang disarankan.' },
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

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Input kompensasi kaki gajah',
    resultsAriaLabel: 'Hasil koreksi kaki gajah',
    canvasAriaLabel: 'Visualisasi penampang profil kaki gajah saat ini dan yang telah dikoreksi',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    materialLabel: 'Prasetel material',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Kustom',
    measuredErrorLabel: 'Kesalahan dasar terukur',
    layerHeightLabel: 'Tinggi lapisan pertama',
    zPressureLabel: 'Celah tekanan Z-offset',
    bedTemperatureLabel: 'Suhu alas',
    targetToleranceLabel: 'Toleransi target',
    expansionLabel: 'Ekspansi slicer',
    chamferLabel: 'Chamfer CAD',
    thermalFactorLabel: 'Faktor termal',
    verdictLabel: 'Target Akurasi Dimensional',
    currentProfileLabel: 'Kaki gajah terukur',
    correctedProfileLabel: 'Profil terkoreksi',
    slicerCommandLabel: 'Perintah slicer',
    cadCommandLabel: 'Perintah CAD',
    copyButton: 'Salin laporan koreksi',
    copiedButton: 'Tersalin',
    copyTemplate: 'Kompensasi kaki gajah: ekspansi horizontal slicer {expansion}, chamfer CAD {chamfer} pada 45 derajat, faktor termal {phi}, vonis: {verdict}.',
    slicerCommandTemplate: 'Ekspansi Horizontal: {expansion} {unit}',
    cadCommandTemplate: '45 derajat x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_korr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | rasio tekanan Z {ratio}',
    optimalVerdict: '< 0.05 mm toleransi: koreksi opsional, verifikasi dengan jangka sorong.',
    watchVerdict: 'Deviasi terkendali: terapkan kompensasi slicer dan cetak ulang kupon.',
    severeVerdict: 'Penyebaran dasar parah: koreksi tekanan Z sebelum mengandalkan offset slicer.',
    mmUnit: 'mm',
    inchUnit: 'in',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Kompensasi Kaki Gajah sebagai Masalah Akurasi Dimensional', level: 2 },
    { type: 'paragraph', html: 'Kaki gajah adalah ekspansi ke luar dari lapisan cetak pertama di luar batas CAD nominal. Pada kubus kalibrasi, ia tampak sebagai bibir dasar. Pada bagian teknik, ia menjadi kesalahan fungsional: pas ekor merpati macet, lubang dekat platform bangunan menutup, jepretan kehilangan kelonggaran, pelat penyambung bergoyang di tepi yang terangkat, dan blok pengukur tidak lagi duduk rata. Oleh karena itu, <strong>kalkulator kompensasi kaki gajah</strong> yang berguna tidak dapat diperlakukan seperti penyesuaian aliran kosmetik. Ia harus mengubah kesalahan dimensional terukur menjadi nilai ekspansi horizontal negatif dan, bila memungkinkan, menjadi chamfer CAD yang menghilangkan jalur material terkompresi dari desain itu sendiri.' },
    { type: 'paragraph', html: 'Kalkulator ini memodelkan koreksi dari tiga input fisik yang sangat memengaruhi cacat: kesalahan dasar terukur, tinggi lapisan pertama, dan celah tekanan Z efektif. Hubungan intinya adalah <code>E_korr = Kesalahan x (TinggiLapisan / TekananZOffset) x phi_temp</code>. Pengganda suhu <code>phi_temp</code> meningkat di atas alas referensi 60 °C karena alas yang lebih panas menjaga polimer tetap lebih lunak lebih lama dan memungkinkan beban nosel mendorong material ke samping. Hasilnya dilaporkan sebagai ekspansi horizontal negatif untuk slicer dan sebagai kedalaman chamfer 45 derajat untuk CAD.' },
    { type: 'stats', columns: 3, items: [
      { value: '0.01 mm', label: 'resolusi input untuk penyesuaian dimensional' },
      { value: '45°', label: 'sudut chamfer CAD default' },
      { value: 'phi_temp', label: 'pengganda aliran suhu alas' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Ukur kesalahan, bukan bibir visual', html: 'Cetak kupon persegi atau persegi panjang, ukur dinding nominal atau dimensi luar di atas dasar, lalu ukur dimensi yang sama di seluruh lapisan pertama. Perbedaan antara kedua pengukuran tersebut adalah kesalahan kaki gajah. Jangan memperkirakan dari foto; alat ini dirancang untuk data jangka sorong.' },

    { type: 'title', text: 'Mengapa Kaki Gajah Terjadi: Tekanan Nosel, Panas, dan Aliran Plastik', level: 2 },
    { type: 'paragraph', html: 'Lapisan pertama sengaja dikompresi agar filamen membasahi alas dan merekat. Kompresi itu mengubah nosel menjadi aplikator tekanan kecil. Polimer cair keluar dari nosel, ditekan di antara nosel dan permukaan bangunan, dan harus menempati volume yang tersedia. Ketika celah Z terlalu kecil, tidak ada cukup ruang vertikal untuk manik ekstrusi yang diperintahkan, sehingga material mengalir ke samping. Dasar menjadi lebih lebar bahkan ketika sisa cetakan akurat secara dimensional.' },
    { type: 'paragraph', html: 'Suhu alas mengubah tingkat keparahan. PLA pada 60 °C mungkin dekat dengan daerah transisi gelasnya, PETG pada 75 °C tetap lengket dan patuh, dan ABS atau ASA pada alas 100 °C tetap hangat di beberapa lapisan pertama. Alas yang lebih panas tidak hanya meningkatkan daya rekat; ia juga menunda pemadatan di dasar. Itulah sebabnya kalkulator ini menerapkan faktor termal: <strong>1.00 pada 60 °C, ditambah 0.05 untuk setiap 5 °C tambahan</strong>. Alas PETG 75 °C karena itu menggunakan faktor sekitar 1.15 sebelum pembatasan.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Didominasi tekanan Z', description: 'Celah nosel yang sangat rendah meratakan manik dan mendorong plastik ke luar. Kesalahan paling tajam di lapisan pertama dan sering membaik setelah koreksi Z-offset.', points: ['Garis pertama lebar', 'Permukaan hancur mengkilap', 'Tepi seperti brim'] },
      { title: 'Didominasi termal', description: 'Dasar tetap lunak karena panas alas atau ruang tinggi. Bibir dapat meluas melalui beberapa lapisan bahkan dengan lapisan pertama yang wajar.', highlight: true, points: ['Tepi bawah membulat', 'Umum pada PETG atau ABS', 'Pendinginan lambat'] },
      { title: 'Didominasi aliran', description: 'Pengganda ekstrusi, diameter filamen, atau aliran lapisan pertama terlalu tinggi. Seluruh daerah bawah mungkin terlihat terlalu penuh, tidak hanya perimeter.', points: ['Bagian atas lapisan pertama kasar', 'Garis terlalu lebar', 'Celah tertutup'] },
    ] },
    { type: 'tip', title: 'Gunakan Z offset sebagai input, bukan tebakan', html: 'Celah tekanan Z adalah jarak bebas efektif yang memaksa manik ke dalam alas. Jika slicer Anda melaporkan lapisan pertama 0.20 mm tetapi remasan aktual berperilaku seperti 0.10 mm, gunakan celah tekanan yang lebih kecil. Itu membuat kompensasi yang dihitung lebih besar, yang sesuai dengan fisika manik yang lebih terkompresi.' },

    { type: 'title', text: 'Cara Mengukur Ekspansi Dasar untuk Kalkulator', level: 2 },
    { type: 'paragraph', html: 'Gunakan kupon uji sederhana dengan dimensi luar yang diketahui, seperti 20.00 mm, 30.00 mm, atau 40.00 mm. Kupon harus memiliki sisi vertikal lurus, setidaknya 8 hingga 12 mm tinggi, dan tanpa chamfer pada pengujian pertama. Ukur dimensi badan beberapa milimeter di atas alas di mana kaki gajah telah hilang. Kemudian ukur dimensi yang sama di bagian terlebar dari dasar. Perbedaannya adalah kesalahan luar total untuk sumbu itu.' },
    { type: 'paragraph', html: 'Jika kubus 20.00 mm berukuran 20.02 mm di tengah tetapi 20.24 mm di dasar, kesalahan dasar relatif terhadap badan yang stabil adalah 0.22 mm. Masukkan 0.22 mm daripada perbedaan dari nominal. Ini menghilangkan penyusutan yang tidak terkait, kesalahan langkah XY, atau bias lebar garis slicer dari perhitungan kaki gajah. Anda mengisolasi deformasi dasar, bukan mengkalibrasi seluruh printer.' },
    { type: 'list', items: [
      'Ukur setelah bagian mendingin hingga suhu kamar, terutama untuk ABS, ASA, PETG, dan bagian PLA besar.',
      'Gunakan tekanan jangka sorong ringan; menekan dasar yang melunak atau bertekstur dapat menyembunyikan bibir sejati.',
      'Lakukan pengukuran pada sisi X dan Y karena gerakan alas, arah kipas, dan kemiringan gantry dapat membuat cacat menjadi asimetris.',
      'Abaikan material brim dan rok. Bersihkan brim sebelum mengukur dinding bagian yang sebenarnya.',
      'Cetak ulang kupon yang sama setelah menerapkan kompensasi sehingga pengukuran berikutnya dapat dibandingkan.',
    ] },
    { type: 'table', headers: ['Pengamatan', 'Kemungkinan penyebab', 'Tindakan pertama terbaik'], rows: [
      ['Dasar lebih lebar tetapi dinding atas akurat', 'Kaki gajah dari tekanan lapisan pertama', 'Gunakan kalkulator ini dan terapkan ekspansi horizontal negatif.'],
      ['Setiap lapisan kebesaran', 'Skala XY, pengganda ekstrusi, atau kesalahan diameter filamen', 'Kalibrasi aliran dan XY sebelum kompensasi kaki gajah.'],
      ['Hanya sudut yang menggembung', 'Tekanan lanjutan, kecepatan, atau masalah pendinginan', 'Setel tekanan lanjutan atau kecepatan sudut.'],
      ['Bagian bawah kasar dan tembus pandang', 'Nosel terlalu dekat atau aliran lapisan pertama terlalu tinggi', 'Naikkan Z-offset atau kurangi aliran lapisan pertama sebelum mengompensasi.'],
    ] },

    { type: 'title', text: 'Ekspansi Horizontal Negatif vs Chamfer CAD', level: 2 },
    { type: 'paragraph', html: 'Ekspansi horizontal slicer menggeser batas poligon ke dalam atau ke luar sebelum pembuatan jalur alat. Untuk koreksi kaki gajah, pengaturan biasanya negatif: jika dasar berukuran 0.20 mm terlalu lebar, slicer mungkin memerlukan nilai mendekati -0.20 mm, dimodifikasi di sini oleh tinggi lapisan, tekanan Z, dan suhu alas. Ini cepat, dapat dibalik, dan berguna untuk batch di mana setiap bagian memiliki deformasi lapisan pertama yang serupa.' },
    { type: 'paragraph', html: 'Chamfer CAD menghilangkan material dari model itu sendiri. Kalkulator melaporkan kedalaman chamfer 45 derajat sebagai <code>Kesalahan x sqrt(2)</code>, yang sesuai dengan wajah diagonal yang membersihkan bibir dasar horizontal. Chamfer CAD sering lebih baik untuk antarmuka kritis karena mempertahankan dimensi dinding atas yang dimaksudkan sambil memberikan lapisan pertama jalur relief yang terkendali. Mereka juga lebih portabel di seluruh slicer karena geometri membawa kompensasi.' },
    { type: 'proscons', title: 'Memilih metode koreksi', items: [
      { pro: 'Ekspansi horizontal negatif dapat diubah dengan cepat per profil material atau printer.', con: 'Ini dapat memengaruhi teks kecil, dinding tipis, pin, dan lubang jika diterapkan secara global.' },
      { pro: 'Chamfer CAD eksplisit dan kokoh untuk permukaan penyambung dekat platform bangunan.', con: 'Mereka memerlukan edit model dan mungkin tidak nyaman untuk bagian yang diunduh.' },
      { pro: 'Menggabungkan offset slicer ringan dengan chamfer kecil dapat mengontrol dasar PETG atau ABS yang parah.', con: 'Menumpuk koreksi tanpa mengukur ulang dapat memperkecil ukuran bagian.' },
    ] },
    { type: 'message', title: 'Jangan kompensasi secara membabi buta', html: 'Jika lapisan pertama terlihat terlalu hancur, perbaiki Z-offset terlebih dahulu. Kompensasi harus menghilangkan ekspansi dasar yang dapat diprediksi yang tersisa, bukan menyembunyikan nosel yang membajak lapisan pertama.' },

    { type: 'title', text: 'Kompensasi yang Disarankan berdasarkan Material', level: 2 },
    { type: 'paragraph', html: 'Perilaku material penting karena suhu adhesi, transisi gelas, laju pendinginan, dan viskositas memengaruhi seberapa jauh manik bawah dapat mengalir sebelum membeku. PLA sering merespons dengan baik terhadap ekspansi horizontal negatif kecil setelah Z-offset wajar. PETG mungkin memerlukan koreksi yang lebih besar karena biasanya dicetak lebih panas di alas dan dengan lapisan pertama yang disetel untuk daya rekat kuat. ABS dan ASA dapat memerlukan relief CAD pada bagian fungsional karena alas panas dan ruang menjaga dasar tetap lunak lebih lama.' },
    { type: 'table', headers: ['Material', 'Kisaran alas tipikal', 'Target toleransi awal', 'Catatan kompensasi'], rows: [
      ['PLA', '55-65 °C', '< 0.05 mm', 'Mulai dengan Z-offset akurat, lalu gunakan ekspansi horizontal negatif kecil. Chamfer berguna untuk dasar tekan.'],
      ['PETG', '70-85 °C', '< 0.07 mm', 'Harapkan faktor termal yang lebih tinggi. Hindari aliran lapisan pertama berlebihan karena PETG dapat membentuk bibir bulat lengket.'],
      ['ABS/ASA', '90-110 °C', '< 0.08 mm', 'Gunakan chamfer CAD untuk bagian produksi. Panas ruang dapat menjaga lapisan pertama tetap patuh.'],
      ['TPU', '40-60 °C', 'khusus aplikasi', 'Filamen fleksibel dapat berdeformasi di bawah jangka sorong. Ukur dengan lembut dan pilih relief geometris daripada offset global agresif.'],
    ] },
    { type: 'card', title: 'Mengapa tabel adalah titik awal', html: 'Lembar PEI bertekstur, alas kaca halus, diameter nosel, lebar garis, kecepatan lapisan pertama, penundaan pendinginan, suhu ruang, dan merek filamen semuanya dapat mengubah kesalahan terukur. Tabel menetapkan ekspektasi; kalkulator harus didorong oleh kupon terukur Anda.' },
    { type: 'summary', title: 'Prioritas penyesuaian material', items: [
      'PLA: koreksi Z-offset terlebih dahulu, lalu gunakan kompensasi slicer kecil.',
      'PETG: perhatikan suhu alas dan aliran lapisan pertama karena dasar tetap bergerak.',
      'ABS/ASA: pilih chamfer CAD pada antarmuka produksi dan verifikasi setelah pemanasan ruang.',
      'Material fleksibel: metode pengukuran penting karena dasar dapat terkompresi di bawah rahang jangka sorong.',
    ] },

    { type: 'title', text: 'Pengaturan Slicer yang Berinteraksi dengan Kompensasi Kaki Gajah', level: 2 },
    { type: 'paragraph', html: 'Slicer yang berbeda mengekspos pengaturan dengan nama seperti Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation, atau ekspansi lapisan pertama. Ekspansi horizontal global mengubah seluruh kontur bagian. Pengaturan hanya-lapisan-pertama hanya memengaruhi lapisan bawah dan biasanya lebih aman untuk akurasi dimensional. Ketika slicer mendukung keduanya, gunakan kompensasi lapisan pertama untuk kaki gajah dan cadangkan kompensasi XY global untuk kesalahan ukuran terkalibrasi yang bertahan di seluruh ketinggian.' },
    { type: 'paragraph', html: 'Lebar garis dan aliran lapisan pertama juga berinteraksi dengan koreksi. Garis lapisan pertama yang sangat lebar dapat meningkatkan daya rekat alas tetapi meningkatkan volume yang harus muat di bawah nosel. Jika manik tidak memiliki tempat untuk pergi secara vertikal, ia menyebar secara horizontal. Menurunkan aliran lapisan pertama dari 105 persen menjadi 100 persen, menaikkan Z-offset sebesar 0.02 mm, atau mengurangi suhu alas sebesar 5 °C dapat mengurangi ekspansi negatif yang diperlukan lebih bersih daripada menerapkan offset besar.' },
    { type: 'glossary', items: [
      { term: 'Ekspansi horizontal', definition: 'Offset slicer yang memperluas atau mengontraksikan kontur model sebelum menghasilkan jalur alat.' },
      { term: 'Ekspansi lapisan awal', definition: 'Varian yang hanya berlaku untuk lapisan pertama atau lapisan bawah, membuatnya lebih cocok untuk kaki gajah.' },
      { term: 'Celah tekanan Z', definition: 'Ruang efektif nosel-ke-alas yang menentukan seberapa banyak manik pertama dikompresi.' },
      { term: 'Faktor termal', definition: 'Pengganda yang digunakan di sini untuk mewakili peningkatan aliran lateral ketika alas lebih panas dari 60 °C.' },
      { term: 'Chamfer CAD', definition: 'Tepi miring yang dimodelkan yang memberikan material lapisan pertama terkompresi zona relief geometris.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Ekspansi negatif besar dapat merusak fitur kecil', html: 'Nilai seperti -0.35 mm dapat memperbaiki dasar luar kotak besar tetapi menghapus huruf timbul kecil, mengurangi rusuk sempit, dan mengubah diameter tiang kecil. Ketika koreksi yang diperlukan besar, perlakukan sebagai sinyal untuk meninjau kembali Z-offset, aliran lapisan pertama, atau suhu alas.' },

    { type: 'title', text: 'Alur Kerja untuk Perbaikan Kaki Gajah Presisi', level: 2 },
    { type: 'list', items: [
      'Cetak kupon kalibrasi polos dengan material, suhu alas, tinggi lapisan pertama, dan kecepatan lapisan pertama yang sama dengan bagian asli.',
      'Ukur dimensi badan stabil di atas dasar, lalu ukur dimensi dasar terlebar dan kurangi keduanya.',
      'Masukkan kesalahan terukur, tinggi lapisan pertama, celah tekanan Z efektif, suhu alas, dan toleransi target.',
      'Terapkan ekspansi horizontal negatif yang dilaporkan di slicer, atau tambahkan chamfer 45 derajat yang dilaporkan di CAD.',
      'Cetak ulang kupon dan ukur lagi setelah pendinginan.',
      'Jika kesalahan residual tetap di atas toleransi, sesuaikan dalam setengah langkah alih-alih melompat ke offset global yang ekstrem.',
      'Kunci pengaturan ke dalam profil material hanya setelah dua kupon yang dapat direproduksi setuju dalam target toleransi Anda.',
    ] },
    { type: 'tip', title: 'Gunakan keadaan alas yang sama dengan produksi', html: 'Cetakan pertama dingin di atas alas tebal dapat berperilaku berbeda dari cetakan kelima setelah alas direndam selama 30 menit. Jika pekerjaan produksi berjalan setelah perendaman panas, kalibrasi kupon juga setelah perendaman panas.' },
    { type: 'diagnostic', variant: 'success', title: 'Target koreksi yang baik', html: 'Untuk pekerjaan dimensional FDM praktis, deviasi dasar di bawah 0.05 mm seringkali cukup kecil sehingga kesesuaian perakitan dikendalikan oleh desain kelonggaran normal daripada oleh bibir kaki gajah. Target yang lebih ketat memerlukan mesin yang kaku, filamen yang stabil, dan teknik pengukuran yang dapat diulang.' },
    { type: 'summary', title: 'Kesimpulan utama', items: [
      'Kaki gajah adalah masalah deformasi tekanan dan suhu, bukan hanya cacat visual.',
      'Gunakan kesalahan dasar terukur relatif terhadap dinding yang stabil, bukan ukuran CAD nominal saja.',
      'Ekspansi horizontal negatif adalah koreksi slicer; chamfer 45 derajat adalah koreksi CAD.',
      'Suhu alas meningkatkan faktor termal karena dasar tetap lebih lunak dan mengalir ke samping lebih lama.',
      'Nilai kompensasi parah harus memicu pemeriksaan Z dan aliran lapisan pertama sebelum penggunaan produksi.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
