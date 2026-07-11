import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'pengoptimal-perimeter-dan-dinding',
  title: 'Pengoptimal Perimeter dan Dinding',
  description: 'Hitung jumlah perimeter yang tepat dan lebar garis yang aman sehingga ketebalan dinding cetakan sesuai dengan model CAD tanpa celah internal.',
  ui: {
    controlsAriaLabel: 'Masukan pengoptimal perimeter dinding',
    resultsAriaLabel: 'Hasil pengoptimal perimeter dinding',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    tooltipLabel: 'Informasi lebih lanjut',
    nozzleLabel: 'Diameter nozzle',
    nozzleHelp: 'Diameter lubang nozzle fisik. Lebar garis aman dibatasi hingga 80-120% dari nilai ini.',
    lineWidthLabel: 'Lebar garis',
    lineWidthHelp: 'Lebar ekstrusi slicer untuk dinding eksternal dan internal.',
    cadThicknessLabel: 'Ketebalan dinding CAD',
    cadThicknessHelp: 'Ketebalan dinding yang dirancang yang harus direproduksi oleh perimeter utuh.',
    commonNozzlesLabel: 'Ukuran nozzle umum',
    infillStrategyLabel: 'Strategi pengisian dinding',
    perimeterFirstLabel: 'Perimeter dulu',
    solidInfillFallbackLabel: 'Irisan padat cadangan',
    solidInfillTip: 'Tip: jika Anda lebih suka tidak menambah perimeter, gunakan isian padat atau gap fill yang andal di dinding tipis agar slicer tidak meninggalkan rongga internal.',
    copySolidInfillNote: 'Jika Anda mempertahankan lebih sedikit perimeter, gunakan isian padat atau gap fill terverifikasi untuk interior dinding tipis.',
    visualLabel: 'Potongan melintang menunjukkan perimeter yang dikemas di dalam ketebalan dinding CAD',
    cadEnvelopeLabel: 'Amplop dinding CAD',
    lineLabel: 'Garis ekstrusi',
    recommendedPerimetersLabel: 'Perimeter yang direkomendasikan',
    realThicknessLabel: 'Ketebalan nyata',
    residualLabel: 'Kesalahan sisa',
    verdictLabel: 'Vonis presisi',
    exactLabel: 'Tepat',
    adjustLabel: 'Memerlukan penyesuaian lebar garis',
    impossibleLabel: 'Tidak mungkin dengan nozzle ini',
    adjustedWidthLabel: 'Lebar garis yang disesuaikan',
    noAdjustmentLabel: 'Tidak ada penyesuaian',
    slicerBlockLabel: 'Konfigurasi slicer',
    perimetersUnitLabel: 'perimeter',
    copyLabel: 'Salin pengaturan',
    copiedLabel: 'Blok slicer disalin.',
    safeRangeLabel: 'Rentang lebar garis aman',
    compareLabel: 'Opsi perimeter terdekat',
    perimetersColumn: 'Perimeter',
    lineWidthColumn: 'Lebar garis',
    realThicknessColumn: 'Ketebalan nyata',
    errorColumn: 'Kesalahan',
    messageExact: 'Lebar garis yang dipilih berada dalam jarak 0,05 mm dari dinding CAD. Ini adalah dinding yang baik yang hanya terdiri dari perimeter.',
    messageAdjust: 'Lebar saat ini meninggalkan celah yang terukur. Gunakan lebar garis yang disesuaikan untuk menutup dinding secara tepat dengan perimeter utuh.',
    messageTooThin: 'Dinding CAD lebih tipis dari diameter nozzle. Desain ulang dinding, gunakan nozzle yang lebih kecil, atau terima fitur garis tunggal non-struktural.',
    messageOutsideRange: 'Tidak ada penyesuaian dalam rentang aman 80-120% diameter nozzle yang dapat menutup dinding ini secara tepat. Desain ulang dinding CAD atau ubah ukuran nozzle.',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Mengapa Ketebalan Dinding Harus Sesuai dengan Perimeter Utuh', level: 2 },
    {
      type: 'paragraph',
      html: 'Slicer FDM membangun dinding dari jalur ekstrusi diskrit. Dinding CAD 1,20 mm bukanlah instruksi padat yang kontinu; ia menjadi satu, dua, tiga, atau lebih perimeter tergantung pada lebar garis, diameter nozzle, dan aturan slicer. Jika perhitungan tidak tepat, slicer harus memilih antara meninggalkan celah internal yang sempit, menyisipkan jalur gap fill tipis, mengekstrusi berlebih pada suatu daerah, atau secara diam-diam mengubah urutan jalur alat. Bagian fungsional menderita karena dinding yang tampak padat di CAD dapat mengandung jahitan lemah atau manik yang tidak konsisten di dalam penampang.',
    },
    {
      type: 'paragraph',
      html: 'Persamaan yang berguna sederhana: <strong>ketebalan dinding nyata = jumlah perimeter × lebar garis</strong>. Kesulitannya adalah memilih nilai yang tetap dapat dicetak. Lebar garis biasanya dapat bergerak sedikit di bawah atau di atas diameter nozzle, tetapi tidak bisa sembarangan. Pengoptimal ini mencari jumlah perimeter bilangan bulat, mengukur kesalahan sisa terhadap ketebalan CAD, dan mengusulkan penyesuaian lebar garis hanya ketika lebar yang tepat tetap berada dalam rentang nozzle 80-120% yang konservatif.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'ambang presisi yang digunakan untuk vonis' },
        { value: '80-120%', label: 'pita lebar garis aman di sekitar diameter nozzle' },
        { value: 'n × lebar', label: 'persamaan inti ketebalan dinding' },
        { value: '2 desimal', label: 'presisi slicer praktis minimum' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perimeter adalah geometri bilangan bulat',
      html: 'Slicer tidak dapat mencetak 2,6 perimeter normal. Jika dinding terlalu lebar untuk dua garis dan terlalu sempit untuk tiga, ia memerlukan perilaku gap fill atau dimensi CAD yang dikoreksi.',
    },
    { type: 'title', text: 'Cara Memilih Ketebalan Dinding CAD untuk Nozzle 0,4 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Nozzle 0,4 mm biasanya menggunakan lebar garis sekitar 0,40-0,48 mm. Dengan lebar garis 0,42 mm, dua perimeter menghasilkan 0,84 mm, tiga perimeter menghasilkan 1,26 mm, dan empat perimeter menghasilkan 1,68 mm. Dinding yang dirancang 1,20 mm terlihat masuk akal di CAD, tetapi terpaut 0,06 mm dari tiga perimeter 0,42 mm. Itu dekat, tetapi tidak tepat. Pengoptimal mungkin menyarankan 3 perimeter pada 0,40 mm, yang menutup dinding dengan sempurna dan tetap tepat pada diameter nozzle.',
    },
    {
      type: 'paragraph',
      html: 'Untuk bagian mekanis, sering kali lebih baik merancang dinding sebagai kelipatan dari lebar garis yang dimaksud daripada memaksa slicer untuk memperbaikinya. Target dinding CAD umum untuk nozzle 0,4 mm adalah sekitar 0,8 mm untuk cangkang ringan, 1,2 mm untuk dinding fungsional normal, 1,6 mm untuk rumah yang lebih kuat, dan 2,0 mm atau lebih untuk fitur penahan beban. Nilai yang tepat harus mengikuti lebar garis slicer, bukan hanya diameter nozzle nominal.',
    },
    {
      type: 'table',
      headers: ['Nozzle', 'Rentang lebar garis aman', 'Target 2 dinding yang baik', 'Target 3 dinding yang baik'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Desain dari profil slicer ke belakang',
      html: 'Sebelum membuat model snap fit, rusuk, bos, atau dinding penutup, tentukan nozzle dan lebar garis. Kemudian atur dimensi dinding ke kelipatan bersih agar slicer tidak membuat jalur gap fill di area kritis.',
    },
    { type: 'title', text: 'Batas Lebar Garis: Mengapa 80 hingga 120 Persen Adalah Pita Aman', level: 2 },
    {
      type: 'paragraph',
      html: 'Nozzle dapat meletakkan manik yang sedikit lebih lebar dari lubangnya karena plastik ditekan ke lapisan sebelumnya dan diratakan menjadi jalur oval. Ia juga dapat mencetak garis yang sedikit lebih sempit, tetapi terlalu sempit meminta printer untuk membuat manik terkendali dengan dukungan lateral yang terbatas. Kedua ekstrem memiliki konsekuensi. Garis yang sangat lebar dapat menekan hot end secara berlebihan, mengotori sudut, menyembunyikan fitur kecil, dan mengurangi akurasi dimensi. Garis yang sangat sempit dapat mengisi dinding secara kurang, melemahkan ikatan, dan membuat konsistensi ekstrusi lebih sensitif terhadap pressure advance dan diameter filamen.',
    },
    {
      type: 'paragraph',
      html: 'Rentang 80-120% yang digunakan di sini sengaja dibuat konservatif. Banyak slicer mengizinkan nilai yang lebih lebar untuk mode khusus, pencetakan vas, atau nozzle kasar, dan pengguna berpengalaman dapat melampaui rentang ini setelah pengujian. Alat ini ditujukan untuk perencanaan dinding mekanis yang andal, di mana rekomendasi harus cukup aman untuk disalin ke profil normal tanpa menyebabkan under-extrusion atau over-extrusion yang jelas. Jika kecocokan yang tepat memerlukan lebar garis di luar rentang, alat melaporkan desain sebagai tidak praktis daripada berpura-pura bahwa slicer dapat menyelesaikannya dengan bersih.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Terlalu sempit', description: 'Manik mungkin tidak menekan cukup material ke dalam penampang dinding.', points: ['Ikatan antar garis lemah', 'Celah terlihat', 'Dinding tipis rapuh'] },
        { title: 'Rentang aman', description: 'Manik tetap dekat dengan perilaku nozzle fisik.', highlight: true, points: ['Ekstrusi dapat diprediksi', 'Kontrol dimensi yang baik', 'Profil yang dapat digunakan kembali'] },
        { title: 'Terlalu lebar', description: 'Nozzle mungkin mendorong lebih banyak plastik daripada yang dapat diterima jalur.', points: ['Sudut menggembung', 'Punggungan permukaan', 'Tekanan balik lebih tinggi'] },
      ],
    },
    {
      type: 'message',
      title: 'Aman tidak berarti terkalibrasi',
      html: 'Bahkan lebar yang sempurna secara matematis memerlukan laju aliran yang terkalibrasi. Jika pengali ekstrusi salah, dinding fisik masih dapat terukur tebal atau tipis dengan jangka sorong.',
    },
    { type: 'title', text: 'Mendiagnosis Celah Dinding Internal di Pratinjau Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Cara tercepat untuk mengidentifikasi ketidakcocokan perimeter adalah dengan memeriksa pratinjau lapis demi lapis. Cari garis pucat di antara dinding luar dan dalam, satu garis gap fill yang mengembara, atau area di mana slicer bergantian antara dua dan tiga garis di sepanjang fitur yang sama. Pola-pola ini umum terjadi pada dinding penutup, bos, klip, dan rusuk tipis karena dimensi CAD sering dipilih secara visual daripada sebagai kelipatan dari lebar ekstrusi.',
    },
    {
      type: 'paragraph',
      html: 'Celah dinding tidak selalu terlihat di bagian luar cetakan. Bagian mungkin tampak bersih sementara bagian dalamnya mengandung rongga sempit yang mengurangi kekakuan. Ini penting untuk bos sekrup, pin tekan, braket, bingkai drone, roda gigi, dan bagian apa pun di mana beban bergerak melalui dinding. Jika celah berada di antara perimeter, dinding dapat lebih mudah terbelah karena jalur beban melintasi material yang terikat lemah atau hilang alih-alih jalur kontinu.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap fill adalah perbaikan, bukan rencana dinding',
      html: 'Slicer modern dapat menyisipkan jalur gap fill tipis, tetapi jalur tersebut sering dicetak dengan kecepatan, aliran, dan pendinginan yang berbeda. Untuk geometri penahan beban, kelipatan perimeter yang bersih lebih dapat diprediksi.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa pratinjau',
      items: [
        'Beralih ke pratinjau jenis garis atau fitur, bukan hanya pratinjau warna solid.',
        'Periksa dinding di lubang, rusuk, bos, dan tab tipis.',
        'Periksa apakah jalur gap fill muncul di daerah struktural.',
        'Bandingkan ketebalan dinding CAD dengan kelipatan utuh dari lebar garis.',
        'Gunakan lebar garis yang disesuaikan hanya jika tetap dalam rentang aman nozzle.',
      ],
    },
    { type: 'title', text: 'Saat Hasil Tepat, Memerlukan Penyesuaian, atau Tidak Mungkin', level: 2 },
    {
      type: 'paragraph',
      html: 'Vonis menggunakan ambang sisa 0,05 mm karena sebagian besar sistem FDM desktop memiliki variasi praktis dari aliran, diameter filamen, ekspansi termal, kalibrasi gerakan, dan teknik pengukuran. Jika pengaturan saat ini berada dalam pita itu, alat menyebut hasilnya tepat. Ini tidak berarti setiap sampel cetakan akan terukur sempurna hingga mikron; ini berarti geometri slicer itu sendiri sejajar cukup dekat sehingga kesalahan yang tersisa kemungkinan adalah kalibrasi atau perilaku material daripada aritmetika perimeter.',
    },
    {
      type: 'paragraph',
      html: 'Memerlukan penyesuaian berarti lebar garis saat ini meninggalkan sisa yang lebih besar, tetapi jumlah perimeter yang sama dapat menutup dinding dengan lebar yang aman. Misalnya, dinding 1,20 mm dengan lebar garis 0,42 mm memberikan tiga garis pada 1,26 mm. Menyesuaikan ke 0,40 mm membuat tiga garis tepat 1,20 mm. Tidak mungkin berarti dinding lebih tipis dari diameter nozzle atau lebar garis tepat yang diperlukan akan jatuh di luar pita nozzle yang aman. Dalam hal ini, mendesain ulang dinding atau mengubah ukuran nozzle lebih baik daripada memaksa slicer.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perimeter', definition: 'Lingkaran dinding yang dihasilkan oleh slicer di sekitar garis bentuk lapisan.' },
        { term: 'Lebar garis', definition: 'Lebar yang diperintahkan dari satu jalur ekstrusi, kadang disebut lebar ekstrusi.' },
        { term: 'Sisa', definition: 'Perbedaan mutlak antara ketebalan dinding CAD dan ketebalan yang dihasilkan oleh perimeter utuh.' },
        { term: 'Gap fill', definition: 'Jalur yang dihasilkan slicer yang digunakan untuk mengisi ruang sisa yang tidak diisi secara bersih oleh perimeter normal.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Menyesuaikan lebar garis versus mengedit CAD',
      items: [
        { pro: 'Penyesuaian lebar garis cepat dan dapat mempertahankan file model.', con: 'Ini mempengaruhi setiap dinding yang menggunakan profil tersebut kecuali dibatasi dengan hati-hati.' },
        { pro: 'Pengeditan CAD membuat maksud desain eksplisit untuk cetakan masa depan.', con: 'Ini memakan waktu lebih lama ketika banyak fitur sudah dibatasi.' },
        { pro: 'Mengubah ukuran nozzle dapat menyelamatkan dinding yang sangat tipis atau sangat tebal.', con: 'Ini mengubah resolusi detail, waktu cetak, dan volume ekstrusi.' },
      ],
    },
    { type: 'title', text: 'Menerapkan Output di Cura, PrusaSlicer, dan Slicer Serupa', level: 2 },
    {
      type: 'paragraph',
      html: 'Blok salin sengaja hanya berisi dua nilai yang penting: jumlah perimeter dan lebar garis. Di Cura, jumlah perimeter dipetakan ke jumlah garis dinding, dan lebar garis dipetakan ke lebar garis dinding atau lebar garis global tergantung pada struktur profil. Di PrusaSlicer dan turunannya, gunakan perimeters untuk jumlah lingkaran dan extrusion width untuk lebar garis. Jika slicer memiliki lebar perimeter eksternal dan internal yang terpisah, pertahankan agar sama untuk dinding yang dioptimalkan kecuali Anda memahami bagaimana slicer menggabungkannya.',
    },
    {
      type: 'paragraph',
      html: 'Setelah mengubah pengaturan slicer, potong ulang dan periksa dinding yang sama di pratinjau. Pratinjau visual harus menunjukkan jumlah jalur yang diharapkan mengisi amplop CAD tanpa saluran sempit yang tersisa. Kemudian cetak kupon uji kecil yang menyertakan ketebalan dinding yang sama dan ukur setelah pendinginan. Jika kupon secara konsisten meleset tetapi pratinjau benar, sesuaikan aliran atau ekspansi horizontal secara terpisah; jangan gunakan jumlah perimeter untuk mengkompensasi kesalahan kalibrasi.',
    },
    {
      type: 'card',
      title: 'Alur kerja toleransi mekanis',
      html: 'Gunakan urutan ini untuk bagian fungsional: pilih nozzle, pilih lebar garis aman, modelkan kelipatan dinding, potong tanpa celah internal, cetak kupon, ukur dinding sebenarnya, lalu sesuaikan aliran atau kompensasi dimensional. Melewatkan langkah geometri membuat kalibrasi mengejar target yang bergerak.',
    },
    {
      type: 'table',
      headers: ['Konsep Slicer', 'Nama bidang umum', 'Apa yang dimasukkan'],
      rows: [
        ['Jumlah lingkaran', 'Jumlah garis dinding / Perimeter', 'Bilangan bulat perimeter yang direkomendasikan'],
        ['Lebar jalur ekstrusi', 'Lebar garis / Lebar ekstrusi', 'Lebar garis yang direkomendasikan atau disesuaikan'],
        ['Jalur perbaikan tipis', 'Gap fill / Isi celah antar dinding', 'Hindari mengandalkannya untuk dinding struktural'],
        ['Koreksi dimensi', 'Ekspansi horizontal / Kompensasi XY', 'Sesuaikan hanya setelah matematika dinding bersih'],
      ],
    },
    { type: 'title', text: 'Kasus Khusus: Dinding Tipis, Rusuk, Bos, dan Fitur Toleransi', level: 2 },
    {
      type: 'paragraph',
      html: 'Dinding tipis di bawah diameter nozzle bukanlah dinding perimeter normal. Slicer dapat mencetaknya dengan deteksi dinding tipis, garis ekstrusi tunggal, atau lebar garis variabel, tetapi hasilnya biasanya kosmetik atau ringan. Untuk rusuk struktural, rancang rusuk cukup tebal untuk setidaknya dua garis stabil atau terima bahwa ia berperilaku seperti jaring fleksibel. Untuk bos sekrup, gunakan perimeter yang cukup sehingga beban sekrup bergerak melalui lingkaran kontinu daripada cincin yang diisi gap fill.',
    },
    {
      type: 'paragraph',
      html: 'Fitur toleransi memerlukan perhatian ekstra karena koreksi dinding dapat berinteraksi dengan ukuran lubang dan kecocokan. Jika klip atau fitur jepret dirancang sebagai dinding 0,9 mm dan profil menggunakan garis 0,45 mm, dua perimeter bersih. Jika klip yang sama berukuran 1,0 mm, slicer dapat menambahkan jalur tengah kecil yang mengubah kekakuan dan kecocokan. Dinding yang lebih bersih secara matematis sering membuat fitur pegas lebih dapat diulang karena setiap salinan menggunakan jumlah jalur kontinu yang sama.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Jangan paksa geometri tipis yang tidak mungkin',
      html: 'Jika dinding CAD di bawah diameter nozzle, perbaikan yang benar biasanya nozzle yang lebih kecil, fitur yang lebih tebal, atau metode manufaktur yang berbeda. Memaksa nozzle lebar ke dalam dinding di bawah nozzle menciptakan bentuk manik yang tidak dapat diprediksi.',
    },
    {
      type: 'list',
      items: [
        'Gunakan setidaknya dua garis bersih untuk rusuk yang menahan beban lentur.',
        'Gunakan tiga atau lebih perimeter di sekitar bos sekrup jika ruang memungkinkan.',
        'Hindari saluran sisa di klip karena menjadi pemula retakan.',
        'Validasi tekan pas dengan lebar garis yang sama yang digunakan di bagian akhir.',
      ],
    },
  ],
  faq: [
    {
      question: 'Berapa banyak perimeter yang harus digunakan dinding 1,2 mm dengan nozzle 0,4 mm?',
      answer: 'Biasanya tiga perimeter. Dengan lebar garis 0,40 mm, tiga perimeter sama dengan 1,20 mm tepat. Dengan lebar garis 0,42 mm, ketebalan nyata adalah 1,26 mm.',
    },
    {
      question: 'Mengapa kalkulator membatasi lebar garis hingga 80-120% dari diameter nozzle?',
      answer: 'Rentang itu menjaga rekomendasi tetap di zona cetak konservatif. Nilai yang lebih lebar atau lebih sempit dapat berfungsi dalam kasus khusus, tetapi kurang andal untuk perencanaan dinding mekanis.',
    },
    {
      question: 'Haruskah saya mengubah ketebalan CAD atau lebar garis slicer?',
      answer: 'Jika penyesuaiannya kecil dan dalam rentang aman, mengubah lebar garis cepat. Untuk bagian produksi berulang, mengedit CAD ke kelipatan bersih biasanya lebih mudah dirawat.',
    },
    {
      question: 'Apakah vonis tepat menjamin bagian cetakan akan terukur tepat?',
      answer: 'Tidak. Ini berarti geometri slicer menutup dengan bersih. Kalibrasi aliran, penyusutan material, suhu, dan kompensasi XY masih mempengaruhi pengukuran fisik.',
    },
    {
      question: 'Apa yang harus saya lakukan ketika hasilnya tidak mungkin?',
      answer: 'Gunakan nozzle yang lebih kecil, desain ulang ketebalan dinding sebagai kelipatan dari lebar garis aman, atau terima bahwa fitur tersebut akan menjadi jalur dinding tipis non-struktural.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Masukkan diameter nozzle', text: 'Pilih ukuran nozzle umum atau ketik diameter nozzle yang diukur.' },
    { name: 'Atur lebar garis', text: 'Masukkan lebar garis dinding slicer; alat membatasinya ke rentang nozzle yang aman.' },
    { name: 'Masukkan ketebalan dinding CAD', text: 'Gunakan ketebalan dinding yang dirancang dari model.' },
    { name: 'Salin pengaturan slicer', text: 'Terapkan jumlah perimeter yang direkomendasikan dan lebar garis yang disesuaikan jika diperlukan.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Pengoptimal Perimeter dan Dinding',
      description: 'Hitung jumlah perimeter FDM dan lebar garis aman untuk ketebalan dinding CAD yang tepat.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Berapa banyak perimeter yang harus digunakan dinding 1,2 mm dengan nozzle 0,4 mm?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Biasanya tiga perimeter. Dengan lebar garis 0,40 mm, tiga perimeter sama dengan 1,20 mm tepat.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara mengoptimalkan ketebalan dinding FDM untuk perimeter utuh',
      step: [
        { '@type': 'HowToStep', text: 'Masukkan diameter nozzle.' },
        { '@type': 'HowToStep', text: 'Masukkan lebar garis slicer.' },
        { '@type': 'HowToStep', text: 'Masukkan ketebalan dinding CAD.' },
        { '@type': 'HowToStep', text: 'Terapkan perimeter dan lebar garis yang direkomendasikan.' },
      ],
    },
  ],
};
