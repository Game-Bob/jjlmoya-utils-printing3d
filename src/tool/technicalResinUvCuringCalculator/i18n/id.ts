import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'kalkulator-waktu-pengeringan-uv-resin-teknis';
const title = 'Kalkulator Waktu Pengeringan UV Resin Teknis';
const description = 'Perkirakan waktu pasca-pengeringan resin SLA yang aman berdasarkan jenis resin, ketebalan dinding maksimum, daya stasiun pencuci dan pengeringan, serta panjang gelombang UV.';

const faqData = [
  { question: 'Berapa lama saya harus mengeringkan cetakan resin SLA?', answer: 'Waktu yang tepat tergantung pada jenis resin, ketebalan dinding, daya stasiun pengeringan, panjang gelombang, dan geometri eksposur. Bagian resin standar kecil mungkin hanya perlu beberapa menit, sementara bagian resin teknis tebal membutuhkan waktu lebih lama tetapi harus menghormati batas keamanan.' },
  { question: 'Terlalu banyak pengeringan UV dapat membuat resin rapuh?', answer: 'Ya. Eksposur UV yang berlebihan dapat membuat banyak bagian resin fotopolimer menjadi rapuh, kuning, atau kurang fleksibel. Kalkulator membatasi waktu ketika perkiraan kasar memasuki wilayah degradasi.' },
  { question: 'Haruskah cetakan resin dikeringkan sebelum pengeringan?', answer: 'Ya. Cetakan resin harus bersih dan benar-benar kering sebelum pengeringan UV. Residu alkohol dapat menyebabkan pemutihan, kontaminasi terperangkap, dan hasil pasca-pengeringan yang tidak konsisten.' },
  { question: 'Apakah 385 nm atau 405 nm lebih baik untuk pengeringan resin?', answer: 'Tidak ada yang secara universal lebih baik. Panjang gelombang terbaik adalah yang sesuai dengan sistem foto-inisiator resin dan stasiun pengeringan. Banyak resin desktop dioptimalkan untuk 405 nm, sementara beberapa resin teknis merespons dengan baik pada 385 nm.' },
];

const howToData = [
  { name: 'Pilih prasetel resin', text: 'Pilih standar, fleksibel, kaku/kuat, dapat dicor, atau dapat dibakar sesuai dengan botol resin atau penggunaan yang dimaksudkan.' },
  { name: 'Masukkan dinding paling tebal', text: 'Ukur ketebalan dinding maksimum yang harus menerima pasca-pengeringan UV.' },
  { name: 'Masukkan parameter stasiun', text: 'Atur daya stasiun pengeringan dan panjang gelombang agar sesuai dengan ruang UV Anda.' },
  { name: 'Ikuti daftar periksa keselamatan', text: 'Keringkan bagian, ekspos setiap sisi, lepaskan penyangga yang menimbulkan bayangan, dan hormati nilai timer aman maksimum.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

const seoData = [
  { type: 'title', text: 'Bagaimana Waktu Pasca-Pengeringan Resin SLA Dipilih', level: 2 },
  {
    type: 'paragraph',
    html: 'Pasca-pengeringan adalah eksposur UV terkendali yang diterapkan setelah cetakan resin dicuci. Tujuannya bukan sekadar membuat permukaan terasa kering. Bagian SLA atau MSLA yang dikeringkan dengan benar mencapai konversi yang lebih baik dari kelompok reaktif di dalam jaringan polimer, yang meningkatkan kekakuan, ketahanan panas, stabilitas dimensi, dan keamanan penanganan. Pengeringan yang kurang meninggalkan permukaan lengket, lemah, atau aktif secara kimia. Pengeringan berlebihan dapat mendorong material menuju kerapuhan, menguning terlihat, dan hilangnya perpanjangan. <strong>Perkiraan waktu pengeringan UV resin SLA</strong> yang berguna karena itu perlu menyeimbangkan kimia resin, ketebalan dinding, intensitas cahaya, panjang gelombang, suhu, dan geometri eksposur.',
  },
  {
    type: 'paragraph',
    html: 'Kalkulator menggunakan prasetel resin karena keluarga resin yang berbeda tidak merespons secara identik. Resin desktop standar biasanya mengering lebih cepat daripada formulasi fleksibel seperti uretan. Resin rekayasa yang kuat atau kaku sering membutuhkan eksposur lebih lama dan kadang-kadang panas ringan untuk mendekati sifat lembar datanya. Resin yang dapat dicor dan dapat dibakar sensitif karena pengeringan berlebihan dapat meningkatkan kerapuhan atau masalah terkait abu. Hasilnya adalah nilai timer yang direkomendasikan, batas atas yang aman, target suhu opsional, dan jarak cahaya yang praktis.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'panjang gelombang pengeringan resin desktop umum' },
      { value: '1-22 mnt', label: 'keluaran kalkulator terbatas yang khas' },
      { value: '0,4-12 mm', label: 'rentang model ketebalan dinding' },
      { value: '6-120 W', label: 'rentang daya stasiun pengeringan' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Jangan pernah mengeringkan cetakan resin basah',
    html: 'Alkohol yang tertinggal di bagian dapat menjebak residu yang tidak mengering, memutihkan permukaan, mengontaminasi ruang pengeringan, dan mendistorsi hubungan antara dosis UV dan perilaku material akhir. Cuci dulu, biarkan bagian benar-benar kering, lalu keringkan.',
  },
  { type: 'title', text: 'Mengapa Ketebalan Dinding Mengubah Waktu Pengeringan UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Cangkang miniatur tipis dan braket fungsional tebal dapat menggunakan resin yang sama tetapi membutuhkan perilaku pasca-pengeringan yang berbeda. Cahaya UV diserap dan dihamburkan oleh pigmen, pengisi, foto-inisiator, dan polimer itu sendiri. Permukaan menerima dosis terkuat, sementara material yang lebih dalam menerima lebih sedikit energi. Inilah sebabnya kalkulator menanyakan <strong>ketebalan dinding maksimum</strong> daripada tinggi total atau massa total. Bagian yang paling tebal secara optik relevan adalah bagian yang paling mungkin tetap kurang kering ketika bagian luar sudah terlihat selesai.',
  },
  {
    type: 'paragraph',
    html: 'Peningkatannya proporsional tetapi tidak sepenuhnya linier. Menggandakan ketebalan dinding tidak selalu membutuhkan persis dua kali nilai timer karena pengeringan juga berlanjut dari beberapa sisi ketika bagian diputar dan karena banyak cetakan resin berlubang. Model menggunakan eksponen spesifik resin: resin yang kuat berskala lebih agresif dengan ketebalan, sementara profil yang dapat dicor tetap di bawah batas keamanan yang lebih ketat. Untuk bagian padat yang sangat tebal, solusi yang lebih baik seringkali adalah melubangi, mengalirkan, memutar, dan pengeringan bertahap daripada satu eksposur panjang.',
  },
  {
    type: 'table',
    headers: ['Kondisi geometri', 'Implikasi pengeringan', 'Tindakan praktis'],
    rows: [
      ['Cangkang kosmetik tipis', 'Permintaan pengeringan internal rendah', 'Gunakan waktu yang dihitung tanpa menambahkan menit ekstra.'],
      ['Tonjolan atau lug padat tebal', 'Risiko inti kurang kering lebih tinggi', 'Masukkan ketebalan dinding maksimum lokal, bukan ketebalan cangkang rata-rata.'],
      ['Bagian berlubang dengan lubang drainase', 'Cahaya mencapai luar; bagian dalam mungkin tetap teduh', 'Keringkan luar terlebih dahulu, lalu ekspos bagian dalam jika geometri memungkinkan.'],
      ['Resin buram atau gelap', 'Penetrasi lebih rendah dan lebih banyak hamburan', 'Tetap dekat dengan panduan pabrikan dan putar lebih sering.'],
    ],
  },
  {
    type: 'tip',
    title: 'Ukur dinding struktural paling tebal',
    html: 'Untuk cetakan resin berlubang, gunakan cangkang paling tebal atau rusuk penguat. Untuk bagian rekayasa padat, gunakan bagian padat paling tebal yang harus mencapai sifat mekanik akhir.',
  },
  { type: 'title', text: 'Daya Stasiun, Jarak, dan Dosis UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Stasiun pencuci dan pengeringan yang diberi nilai 40 W tidak mengirimkan 40 W energi UV yang berguna ke setiap sentimeter persegi bagian. Daya nominal mencakup kerugian listrik dan optik, susunan LED, reflektivitas ruang, cakupan meja putar, dan jarak dari sumber cahaya. Namun, daya adalah perkiraan yang berguna: stasiun daya tinggi biasanya membutuhkan timer yang lebih pendek daripada kotak pengeringan lemah tipe lampu kuku. Kalkulator menerapkan faktor daya terbalik sehingga timer berkurang seiring bertambahnya daya stasiun.',
  },
  {
    type: 'paragraph',
    html: 'Jarak penting karena iradians menurun saat bagian menjauh dari LED, dan karena penempatan yang sangat dekat dapat membuat titik panas. Bagian yang ditempatkan terlalu dekat dengan satu bank LED dapat mengeringkan satu sisi secara agresif sementara sudut atau permukaan tersembunyi tetap lunak. Bagian yang ditempatkan terlalu jauh mungkin memerlukan eksposur lebih lama, tetapi menambahkan waktu dapat mengeringkan berlebihan sisi yang sudah diterangi. Inilah sebabnya keluaran mencakup jarak yang direkomendasikan dalam sentimeter atau inci. Ini adalah kontrol geometri, bukan sekadar nilai kenyamanan.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Terlalu dekat',
        description: 'Intensitas lokal tinggi menciptakan dosis tidak merata dan stres permukaan.',
        points: ['Menguning pada sisi yang terekspos', 'Detail tipis rapuh', 'Rongga teduh tetap kurang kering'],
      },
      {
        title: 'Seimbang',
        description: 'Jarak moderat memungkinkan ruang dan meja putar mendistribusikan UV lebih merata.',
        highlight: true,
        points: ['Hasil mekanik lebih bersih', 'Lebih sedikit risiko titik panas', 'Pengulangan lebih baik'],
      },
      {
        title: 'Terlalu jauh',
        description: 'Iradians rendah mendorong pengguna untuk berkompensasi dengan waktu berlebihan.',
        points: ['Siklus panjang', 'Pengeringan tidak konsisten', 'Keyakinan palsu dari permukaan kering'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Putar ketika ruang tidak mengekspos semua sisi',
    html: 'Jika bagian memiliki ceruk dalam, potongan bawah, atau sisi datar lebar, bagi eksposur menjadi siklus yang lebih pendek dan putar bagian. Dosis seragam biasanya lebih baik daripada satu pengeringan statis panjang.',
  },
  { type: 'title', text: '385 nm Versus 405 nm dalam Pengeringan Resin', level: 2 },
  {
    type: 'paragraph',
    html: 'Sebagian besar printer MSLA konsumen dan stasiun pengeringan menggunakan LED 405 nm karena panjang gelombang itu cocok dengan banyak sistem foto-inisiator desktop dan efisien untuk susunan LED yang terjangkau. Beberapa resin teknis juga merespon kuat pada 385 nm, panjang gelombang lebih pendek lebih dekat ke kisaran UV-A. Perbedaannya tidak secara otomatis lebih baik atau lebih buruk. Resin yang diformulasikan untuk 405 nm mungkin membutuhkan lebih banyak waktu di bawah 385 nm jika spektrumnya tidak cocok; resin lain dapat mengering secara efisien pada 385 nm. Kalkulator memperlakukan panjang gelombang sebagai pengganda tergantung resin.',
  },
  {
    type: 'paragraph',
    html: 'Tindakan penting pengguna adalah konsistensi. Jika pabrikan resin menentukan jadwal pasca-pengeringan untuk unit pengeringan, panjang gelombang, dan suhu tertentu, gunakan jadwal itu sebagai referensi. Gunakan kalkulator ini ketika resin bersifat generik, ketika daya stasiun berbeda dari mesin referensi, atau ketika geometri cetakan lebih tebal dari kupon kalibrasi sederhana. Jangan mencampur jadwal industri 385 nm dengan stasiun desktop 405 nm tanpa menyesuaikan asumsi eksposur.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Foto-inisiator', definition: 'Komponen resin yang menyerap cahaya dan memulai reaksi polimerisasi.' },
      { term: 'Dosis UV', definition: 'Energi cahaya terakumulasi yang diterima bagian selama pengeringan, dipengaruhi oleh iradians dan waktu.' },
      { term: 'Pasca-pengeringan', definition: 'Perlakuan UV dan kadang-kadang panas setelah pencucian yang meningkatkan sifat material melampaui keadaan cetakan.' },
      { term: 'Pengeringan berlebihan', definition: 'Eksposur berlebihan yang dapat membuat bagian resin rapuh, kuning, berubah bentuk, atau kurang tahan benturan.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Kering saat disentuh tidak sama dengan sepenuhnya kering',
    html: 'Permukaan resin bisa berhenti terasa lengket sebelum jaringan internal mencapai perilaku mekanis yang dimaksudkan. Gunakan geometri, jenis resin, dan daya stasiun daripada sensasi permukaan.',
  },
  { type: 'title', text: 'Prasetel Resin dan Risiko Mekanis', level: 2 },
  {
    type: 'paragraph',
    html: 'Resin standar biasanya dioptimalkan untuk kemudahan cetak dan pasca-pemrosesan cepat. Mereka adalah kategori yang paling memaafkan di kalkulator. Resin fleksibel membutuhkan penanganan lebih hati-hati karena sifat yang diinginkan adalah perpanjangan, bukan kekerasan maksimum. Terlalu banyak UV dapat mengurangi fleksibilitas dan mengubah bagian lunak menjadi sesuatu yang retak lebih awal. Resin kaku dan kuat sering membutuhkan lebih banyak dosis untuk mengembangkan kekuatan, tetapi mereka juga memiliki batas atas di mana pengeringan tambahan tidak lagi meningkatkan kinerja dan sebaliknya meningkatkan kerapuhan.',
  },
  {
    type: 'paragraph',
    html: 'Resin yang dapat dicor dan dapat dibakar memiliki prioritas berbeda. Penggunaan akhir mereka mungkin melibatkan pengecoran investasi atau pembakaran bersih, sehingga kualitas permukaan, perilaku abu, dan stabilitas dimensi penting. Bagian yang dapat dicor yang sangat kering berlebihan bisa menjadi rapuh selama penanganan atau berkinerja buruk dalam langkah proses hilir. Kalkulator menerapkan batas lebih ketat pada kategori ini karena alur kerja teraman adalah pengeringan terkendali, bukan eksposur maksimum.',
  },
  {
    type: 'table',
    headers: ['Prasetel resin', 'Tujuan utama', 'Gejala pengeringan berlebihan', 'Perilaku kalkulator'],
    rows: [
      ['Standar', 'Kekerasan umum dan penanganan aman', 'Menguning dan detail tipis rapuh', 'Waktu dasar moderat dan batas sedang.'],
      ['Fleksibel', 'Mempertahankan perpanjangan sambil menghilangkan lengket', 'Kehilangan fleksibilitas dan sobek', 'Waktu dasar lebih panjang dengan sensitivitas dosis hati-hati.'],
      ['Kaku / Kuat', 'Mencapai kekakuan dan kekuatan rekayasa', 'Patah rapuh bukan kegagalan kuat', 'Waktu dasar lebih tinggi dan pengeringan hangat opsional.'],
      ['Dapat dicor', 'Penanganan bersih sebelum proses pengecoran', 'Pola rapuh dan penggelapan permukaan', 'Batas keamanan lebih rendah untuk menghindari eksposur agresif.'],
      ['Dapat dibakar', 'Pengeringan terkendali sebelum pembakaran termal', 'Pengelupasan atau stres dimensi', 'Waktu moderat dengan batas konservatif.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Menambahkan menit ekstra setelah kalkulator',
    items: [
      { pro: 'Dapat membantu jika satu sisi teduh selama siklus pendek.', con: 'Dapat menurunkan sisi yang sudah terekspos ketika bagian tidak diputar.' },
      { pro: 'Dapat mengurangi lengket pada bagian sangat tebal atau gelap.', con: 'Dapat membuat resin kuat dan fleksibel lebih rapuh.' },
      { pro: 'Berguna sebagai siklus pendek kedua setelah inspeksi.', con: 'Tidak aman sebagai kebiasaan rutin tanpa memeriksa batas keamanan.' },
    ],
  },
  { type: 'title', text: 'Suhu Selama Pasca-Pengeringan Resin Teknis', level: 2 },
  {
    type: 'paragraph',
    html: 'Beberapa resin rekayasa menentukan suhu pasca-pengeringan tinggi karena panas meningkatkan mobilitas molekul dan membantu jaringan polimer mencapai sifat yang dimaksudkan. Pengeringan hangat dapat meningkatkan suhu defleksi panas, modulus, dan kekuatan akhir untuk material yang kompatibel. Ini tidak boleh diterapkan secara buta pada setiap resin. Miniatur yang dicetak dalam resin standar mungkin tidak memerlukan panas sama sekali, sementara resin rekayasa kuat dapat memperoleh manfaat dari 40-60 °C tergantung pada data pabrikan. Kalkulator karena itu mengembalikan suhu kamar untuk keluarga resin di mana panas tidak diasumsikan, dan target suhu sederhana di mana itu berguna.',
  },
  {
    type: 'paragraph',
    html: 'Kontrol suhu juga masalah keamanan. Terlalu banyak panas dapat merusak bentuk bagian tipis, melunakkan bekas penyangga, atau mempercepat menguning. Stasiun pencuci dan pengeringan tanpa ruang berpemanas tidak boleh diperlakukan setara dengan oven laboratorium. Jika lembar data resin menentukan siklus termal yang tepat, lembar data itu yang menang. Kalkulator adalah perkiraan praktis untuk alur kerja desktop umum, bukan pengganti validasi proses medis, gigi, kedirgantaraan, atau pengecoran bersertifikat.',
  },
  {
    type: 'card',
    title: 'Ketika keluaran mengatakan suhu kamar',
    html: 'Suhu kamar berarti kalkulator tidak memerlukan pasca-pengeringan berpemanas untuk prasetel resin itu. Itu tidak berarti bagian dapat dikeringkan dalam keadaan dingin, basah, atau di bengkel berangin. Jaga bagian tetap kering dan biarkan resin mencapai suhu dalam ruangan normal sebelum eksposur.',
  },
  {
    type: 'tip',
    title: 'Hindari pengeringan segera setelah penghilangan IPA',
    html: 'Setelah pencucian, biarkan alkohol menguap dari lubang, rongga, dan teks timbul. Sepuluh hingga tiga puluh menit pengeringan bisa lebih penting daripada menambahkan satu menit UV lagi.',
  },
  { type: 'title', text: 'Diagnosis Bagian Resin Kurang Kering dan Kelebihan Kering', level: 2 },
  {
    type: 'paragraph',
    html: 'Bagian resin yang kurang kering biasanya menunjukkan permukaan lengket, fitur kecil lemah, bau menetap, tepi lunak, atau residu yang berpindah ke sarung tangan. Gejala ini paling umum ketika bagian tidak dicuci bersih, dikeringkan dalam keadaan basah, memiliki ketebalan dinding besar, atau berada dalam bayangan di dalam ruang. Bagian yang kelebihan kering menunjukkan gejala berbeda: patah rapuh, menguning, permukaan kapur, tepi tipis melengkung, atau kehilangan fleksibilitas. Solusinya tergantung pada gejalanya. Lebih banyak UV bukanlah jawaban untuk setiap masalah cetakan resin.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Rapuh dan kuning berarti berhenti menambahkan eksposur',
    html: 'Jika bagian sudah menjadi rapuh atau terlihat kuning, pengeringan ekstra tidak akan memulihkan ketangguhan. Cetak ulang, kurangi nilai timer, tingkatkan rotasi, dan hormati batas.',
  },
  {
    type: 'summary',
    title: 'Urutan pemecahan masalah',
    items: [
      'Konfirmasi bahwa bagian dicuci dan dikeringkan sebelum pengeringan.',
      'Periksa apakah penyangga atau orientasi model menciptakan bayangan UV.',
      'Masukkan dinding paling tebal, bukan ukuran model rata-rata.',
      'Gunakan batas keamanan ketika perkiraan kasar akan terlalu panjang.',
      'Putar bagian kompleks daripada memperpanjang eksposur statis.',
    ],
  },
  {
    type: 'table',
    headers: ['Gejala', 'Kemungkinan penyebab', 'Koreksi'],
    rows: [
      ['Permukaan lengket setelah pengeringan', 'Residu resin atau IPA, dosis tidak cukup, atau sisi teduh', 'Cuci ulang jika terkontaminasi, keringkan sepenuhnya, lalu terapkan siklus pendek yang diputar.'],
      ['Fitur tipis mudah patah', 'Pengeringan berlebihan atau resin rapuh secara inheren', 'Kurangi timer dan hindari penempatan LED dekat.'],
      ['Satu sisi kuning, sisi lain lunak', 'Eksposur ruang tidak merata', 'Tingkatkan jarak dan putar selama pengeringan.'],
      ['Resin fleksibel menjadi kaku', 'Dosis terlalu tinggi untuk perilaku elastomer', 'Gunakan lebih sedikit waktu dan berhenti saat sentuhan tidak lengket.'],
    ],
  },
  { type: 'title', text: 'Cara Menggunakan Kalkulator Waktu Stasiun Pencuci dan Pengeringan UV Ini', level: 2 },
  {
    type: 'paragraph',
    html: 'Mulai dengan prasetel resin yang paling dekat dengan label material. Jika botol mengatakan kuat, kaku, mirip ABS, rekayasa, atau dampak tinggi, gunakan prasetel kaku/kuat. Jika elastis, lentur, atau mirip karet, gunakan fleksibel. Untuk pengecoran investasi atau alur kerja bebas abu, gunakan dapat dicor atau dapat dibakar. Kemudian ukur ketebalan dinding maksimum. Masukkan daya nominal stasiun pengeringan dan pilih 385 nm atau 405 nm sesuai dengan dokumentasi stasiun atau resin. Nilai timer keluaran adalah siklus pertama yang harus Anda jalankan.',
  },
  {
    type: 'paragraph',
    html: 'Sebelum menekan mulai, gunakan daftar periksa. Bagian harus kering, terlihat dari beberapa sudut, dan bebas dari struktur penyangga yang menimbulkan bayangan. Jika model kompleks, keringkan selama sebagian waktu yang direkomendasikan, putar, dan selesaikan sisa siklus. Jika kalkulator memperingatkan bahwa batas keamanan telah diterapkan, jangan menggantinya dengan satu eksposur panjang. Batas itu ada karena kategori resin itu lebih mungkin menurun daripada membaik di luar titik itu.',
  },
  {
    type: 'list',
    items: [
      'Gunakan instruksi pabrikan ketika lembar data resin memberikan siklus pasca-pengeringan yang divalidasi.',
      'Gunakan kalkulator ini ketika daya stasiun, panjang gelombang, atau ketebalan bagian berbeda dari alur kerja referensi.',
      'Jangan mengeringkan bagian yang berbau kuat pelarut atau memiliki cairan terperangkap di lubang drainase.',
      'Jangan menganggap cahaya yang lebih kuat lebih aman; itu dapat menciptakan pengeringan berlebihan lokal lebih cepat.',
      'Catat waktu yang berhasil menurut resin, warna, ketebalan dinding, dan model stasiun.',
    ],
  },
  {
    type: 'summary',
    title: 'Aturan pasca pengeringan yang aman',
    items: [
      'Bersihkan dulu.',
      'Keringkan sepenuhnya.',
      'Keringkan dalam jendela yang dihitung.',
      'Putar untuk cakupan.',
      'Berhenti sebelum resin menjadi rapuh, kuning, atau berubah bentuk.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Kontrol input pengeringan UV resin teknis',
    resultsAriaLabel: 'Parameter pasca-pengeringan resin yang direkomendasikan',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    resinGroupLabel: 'Prasetel resin',
    stationGroupLabel: 'Stasiun pengeringan',
    preparationLabel: 'Sebelum pengeringan',
    resinTypeLabel: 'Jenis resin',
    standardLabel: 'Standar',
    flexibleLabel: 'Fleksibel',
    toughLabel: 'Kaku / Kuat',
    castableLabel: 'Dapat dicor',
    burnoutLabel: 'Dapat dibakar',
    wallThicknessLabel: 'Ketebalan dinding maksimum',
    wallThicknessHelp: 'Gunakan dinding padat atau cangkang paling tebal yang harus ditembus cahaya UV untuk mengeringkan.',
    stationPowerLabel: 'Daya stasiun',
    stationPowerHelp: 'Daya listrik nominal stasiun pengeringan atau susunan lampu UV.',
    wavelengthLabel: 'Panjang gelombang',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'Bagian harus bersih dan benar-benar kering sebelum eksposur UV. Jangan mengeringkan bagian yang masih mengandung alkohol.',
    dryCheckLabel: 'Apakah bagian benar-benar kering dan bebas dari residu alkohol?',
    exposureCheckLabel: 'Apakah bagian diposisikan sehingga cahaya mencapai setiap sisi?',
    supportsCheckLabel: 'Apakah bagian bebas dari penyangga yang dapat menimbulkan bayangan?',
    degradationWarning: 'Waktu pengeringan berlebihan membuat bagian rapuh dan kuning. Hormati batas teknis.',
    recommendedTimeLabel: 'Pengaturan timer',
    temperatureLabel: 'Suhu pengeringan',
    noTemperatureLabel: 'Ruangan',
    ambientTemperatureNoteMetric: 'Keringkan pada suhu kamar (18-25 °C). Tidak diperlukan ruang berpemanas untuk prasetel ini.',
    ambientTemperatureNoteImperial: 'Keringkan pada suhu kamar (64-77 °F). Tidak diperlukan ruang berpemanas untuk prasetel ini.',
    distanceLabel: 'Jarak cahaya',
    maxSafeLabel: 'Batas keamanan',
    doseIndexLabel: 'Indeks dosis UV',
    safetySafeLabel: 'Di dalam jendela aman',
    safetyCautionLabel: 'Dekat batas atas',
    safetyLimitLabel: 'Batas keamanan diterapkan',
    limitMessage: 'Eksposur yang diminta akan melebihi batas keamanan resin. Gunakan nilai timer terbatas dan putar bagian di antara siklus jika sisi teduh.',
    cautionMessage: 'Rekomendasi secara teknis dapat digunakan tetapi dekat dengan wilayah degradasi. Jaga bagian tetap kering, putar, dan hindari menambahkan menit ekstra karena kebiasaan.',
    safeMessage: 'Rekomendasi berada dalam jendela pasca-pengeringan normal untuk profil resin dan daya stasiun ini.',
    timerUnit: 'mnt',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
