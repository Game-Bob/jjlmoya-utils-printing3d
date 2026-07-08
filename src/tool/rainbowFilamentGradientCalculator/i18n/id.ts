import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'kalkulator-transisi-filamen-pelangi',
  title: 'Kalkulator Panjang Transisi Filamen Pelangi untuk Cetakan 3D',
  description: 'Perkirakan siklus warna filamen pelangi, penggunaan gulungan, dan di mana transisi gradien akan muncul sepanjang tinggi Z cetakan 3D yang di-slicing.',
  ui: {
    unitMetric: 'Metrik',
    unitImperial: 'US',
    cycleLength: 'Panjang siklus warna',
    partWeight: 'Berat bagian yang di-slicing',
    density: 'Densitas',
    diameter: 'Diameter filamen',
    partHeight: 'Tinggi Z cetakan',
    startOffset: 'Offset awal pada gulungan',
    presets: 'Prasetel material',
    pla: 'PLA pelangi',
    petg: 'Campuran PETG',
    silk: 'Sutra multiwarna',
    usedFilament: 'Filamen terpakai',
    cyclesInPart: 'Siklus dalam bagian',
    heightPerCycle: 'Z per siklus',
    gramsPerCycle: 'Massa per siklus',
    zMap: 'Peta transisi Z',
    transitionBands: 'Pita transisi terlihat',
    phaseWindow: 'Fase siklus',
    copySummary: 'Salin ringkasan gradien',
    reset: 'Atur ulang',
    emptyValue: '0',
    copyTemplate: 'Perkiraan filamen pelangi',
    copyCycles: 'siklus warna',
    copyUsed: 'terpakai',
    copyZCycle: 'per siklus',
  },
  seo: [
    { type: 'title', text: 'Cara Kerja Kalkulator Panjang Transisi Filamen Pelangi', level: 2 },
    { type: 'paragraph', html: 'Kalkulator panjang transisi filamen pelangi menghubungkan dua angka slicer yang biasanya dilihat terpisah: <strong>massa model</strong> dan <strong>tinggi cetakan</strong>. Slicer memberi tahu Anda berapa gram material yang akan dikonsumsi bagian tersebut, sementara produsen filamen atau pengukuran manual memberi tahu berapa meter yang dibutuhkan gulungan untuk menyelesaikan satu siklus warna penuh. Setelah nilai-nilai itu berada dalam model aliran material yang sama, Anda dapat memperkirakan berapa banyak siklus warna yang muncul dalam objek dan di mana setiap pita warna berada pada sumbu Z.' },
    { type: 'paragraph', html: 'Konversi intinya bersifat fisik, bukan visual. Bagian yang di-slicing seberat 180 g tidak otomatis mengonsumsi panjang filamen yang sama pada setiap gulungan, karena panjangnya tergantung pada densitas dan diameter. PLA, PETG, PLA sutra, campuran terisi, dan campuran tembus pandang dapat memiliki densitas yang berbeda. Filamen nominal 1,75 mm juga memiliki variasi toleransi, jadi kalkulator harus memungkinkan penyesuaian diameter daripada selalu mengasumsikan nilai default.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'diameter filamen FDM umum', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'densitas PLA tipikal untuk perkiraan', icon: 'mdi:flask' },
      { value: '30 m', label: 'contoh siklus warna pelangi penuh', icon: 'mdi:palette' },
      { value: 'Sumbu Z', label: 'tempat panjang siklus menjadi terlihat', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Ukur satu siklus nyata sebelum mempercayai pratinjau', html: 'Produsen sering mendeskripsikan filamen pelangi sebagai transisi cepat, sedang, atau panjang, tetapi input yang berguna adalah jarak terukur dari satu warna kembali ke warna yang sama. Buka gulungan sampel kecil hanya jika aman untuk gulungan, atau cetak menara pembersih tipis dan hitung mundur panjang filamen yang dikonsumsi dari perkiraan slicer.' },

    { type: 'title', text: 'Mengapa Berat Bagian Memprediksi Perubahan Warna Lebih Baik daripada Waktu Cetak', level: 2 },
    { type: 'paragraph', html: 'Waktu cetak adalah prediktor yang buruk untuk penggunaan warna gulungan pelangi. Vas dekoratif mungkin memakan waktu berjam-jam dalam mode spiral sambil mengonsumsi sedikit material, dan braket mekanis yang padat dapat mengonsumsi banyak filamen dengan cepat. Gulungan berubah warna sesuai dengan <strong>panjang filamen yang ditarik melalui extruder</strong>, bukan berdasarkan menit yang berlalu, jarak perpindahan, atau jumlah lapisan.' },
    { type: 'paragraph', html: 'Berat slicer berguna karena sudah mencakup dinding, infill, lapisan atas dan bawah, penyangga (jika diaktifkan), brim, skirt, dan struktur pembersihan. Berat itu dapat diubah menjadi volume dengan membaginya dengan densitas material. Volume kemudian dapat dibagi dengan luas penampang filamen untuk memperkirakan total panjang filamen. Inilah sebabnya STL yang sama dapat menunjukkan perilaku gradien yang berbeda saat Anda mengubah infill, jumlah dinding, pengaturan penyangga, atau skala.' },
    { type: 'table', headers: ['Perubahan Slicer', 'Efek pada Penggunaan Filamen', 'Efek pada Gradien Pelangi'], rows: [
      ['Lebih banyak infill', 'Menaikkan gram dan meter total', 'Lebih banyak kemajuan siklus warna dalam tinggi Z yang sama'],
      ['Lebih banyak dinding', 'Menaikkan penggunaan di sebagian besar lapisan', 'Transisi memampat secara vertikal dan menjadi lebih sering'],
      ['Model lebih tinggi dengan massa sama', 'Meter serupa di lebih banyak tinggi Z', 'Transisi meregang lebih jauh'],
      ['Penyangga diaktifkan', 'Menghabiskan warna di luar bagian yang terlihat', 'Fase terlihat mungkin bergeser dibandingkan model tanpa penyangga'],
      ['Brim atau rakit besar', 'Menghabiskan filamen sebelum lapisan pertama yang terlihat', 'Warna awal bergerak maju pada gulungan'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Gunakan perkiraan slicer setelah pengaturan akhir', badge: 'Penting', html: 'Lakukan perhitungan setelah memilih tinggi lapisan, jumlah dinding, infill, penyangga, brim, dan skala. Perkiraan siklus warna gulungan pelangi yang dibuat sebelum pembuatan penyangga bisa terlihat salah karena material penyangga mengonsumsi sebagian urutan warna sebelum dan selama objek.' },

    { type: 'title', text: 'Memahami Panjang Siklus Warna pada Gulungan Filamen Pelangi', level: 2 },
    { type: 'paragraph', html: 'Panjang siklus warna adalah jarak filamen yang diperlukan agar urutan berulang. Pada gulungan pelangi enam warna, satu siklus mungkin berjalan merah, oranye, kuning, hijau, biru, ungu, lalu kembali ke merah. Siklusnya mungkin cukup pendek untuk beberapa transisi dalam patung kecil, atau cukup panjang sehingga cetakan sedang hanya menunjukkan satu perubahan lambat. <strong>Kalkulator siklus warna gulungan pelangi</strong> paling berguna ketika angka ini realistis.' },
    { type: 'paragraph', html: 'Tidak semua filamen transisi memiliki zona warna yang sama. Beberapa produk berbaur secara bertahap dengan gradien panjang, sementara yang lain memiliki blok yang lebih kuat. Kalkulator memperlakukan siklus penuh sebagai pita warna yang terdistribusi merata karena itu adalah perkiraan paling praktis dari data slicer saja. Jika gulungan Anda memiliki bagian yang tidak merata, gunakan peta Z sebagai panduan fase dan harapkan campuran visual yang sebenarnya lebih lembut atau asimetris.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Pelangi siklus pendek', description: 'Terbaik untuk miniatur, ornamen, vas kecil, dan papan nama. Beberapa perubahan warna dengan lebih sedikit material.', icon: 'mdi:weather-sunset-up', points: ['Transisi terlihat cepat', 'Bisa terlihat ramai pada permukaan datar besar'] },
      { title: 'Pelangi siklus sedang', description: 'Pilihan seimbang untuk objek meja dan patung sedang. Biasanya menghasilkan satu hingga tiga transisi utama.', icon: 'mdi:palette-swatch', highlight: true, points: ['Dapat diprediksi pada cetakan umum', 'Baik untuk objek 100-300 g'] },
      { title: 'Pelangi siklus panjang', description: 'Lebih baik untuk vas tinggi, naga besar, lampu, dan cetakan dinding tunggal yang membutuhkan gradien lambat dan halus.', icon: 'mdi:palette-outline', points: ['Perjalanan warna yang halus', 'Model kecil mungkin tetap satu warna'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Siklus warna', definition: 'Panjang filamen yang diperlukan agar urutan warna lengkap berulang dari warna awal kembali ke warna yang sama.' },
      { term: 'Fase', definition: 'Posisi saat ini di dalam siklus warna pada saat bagian yang terlihat mulai dicetak.' },
      { term: 'Pita transisi', definition: 'Wilayah vertikal dari objek cetak di mana segmen warna yang diperkirakan berubah sepanjang sumbu Z.' },
      { term: 'Offset awal', definition: 'Panjang filamen yang sudah dikonsumsi sebelum model dimulai, termasuk cetakan sebelumnya, pembersihan, skirt, brim, atau pemotongan manual.' },
    ] },

    { type: 'title', text: 'Cara Memperkirakan Posisi Transisi Warna Sepanjang Sumbu Z', level: 2 },
    { type: 'paragraph', html: 'Peta Z adalah alat perkiraan, bukan simulator slicer. Ini mengasumsikan konsumsi material terdistribusi secara proporsional sepanjang tinggi cetakan. Itu adalah model orde pertama yang baik untuk banyak cetakan mode vas, patung dengan penampang tetap, dan objek dekoratif. Ini menjadi kurang akurat ketika model memiliki dasar yang berat, bagian tengah yang berlubang, bagian atas yang padat, atau penyangga besar yang mengonsumsi material secara tidak merata di seluruh tinggi.' },
    { type: 'paragraph', html: 'Untuk model dengan penampang yang sebagian besar seragam, membagi tinggi cetakan dengan siklus warna memberikan jawaban intuitif: jika objek 160 mm menggunakan dua siklus warna penuh, setiap siklus menempati sekitar 80 mm tinggi Z. Jika hanya menggunakan 0,4 siklus, cetakan akan menunjukkan kurang dari setengah urutan pelangi. Jika menggunakan 4 siklus, warna berulang sering dan dapat menciptakan tampilan bergaris daripada gradien halus tunggal.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Gunakan tinggi Z cetakan, bukan tinggi perjalanan mesin total.',
      'Sertakan konsumsi brim atau rakit sebagai offset awal jika fitur tersebut dicetak sebelum objek.',
      'Untuk pelat multi-objek, hitung berat slicing gabungan jika objek dicetak secara berurutan per lapisan.',
      'Untuk pencetakan berurutan, hitung setiap objek secara terpisah dan majukan offset awal untuk objek berikutnya.',
      'Untuk menara pembersih atau struktur limbah multiwarna, tambahkan massa perkiraannya ke offset atau total penggunaan tergantung kapan dicetak.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Mengapa bagian bawah mungkin tidak cocok dengan warna pertama yang diprediksi', html: 'Banyak printer membersihkan, menggambar garis prime, mencetak skirt, atau mencetak brim sebelum dinding pertama yang terlihat. Fitur-fitur tersebut mengonsumsi filamen dan menggeser fase awal. Jika lapisan pertama yang terlihat harus berwarna tertentu, ukur atau perkirakan konsumsi pra-cetak tersebut dan masukkan sebagai offset awal.' },

    { type: 'title', text: 'Densitas, Diameter, dan Mengapa Dua Cetakan 180 g Dapat Menggunakan Panjang Filamen Berbeda', level: 2 },
    { type: 'paragraph', html: 'Massa yang sama dapat mewakili panjang filamen yang berbeda karena densitas mengubah volume per gram. PLA sering diperkirakan sekitar 1,24 g/cm3, PETG sekitar 1,27 g/cm3, dan beberapa campuran sutra atau terisi dapat berbeda cukup untuk memindahkan transisi beberapa milimeter pada cetakan tinggi.' },
    { type: 'paragraph', html: 'Tidak semua filamen transisi memiliki zona warna yang sama. Kalkulator memperlakukan siklus penuh sebagai pita warna yang terdistribusi merata. Jika gulungan Anda memiliki bagian yang tidak merata, gunakan peta Z sebagai panduan.' },
    { type: 'table', headers: ['Keluarga Material', 'Densitas Perencanaan', 'Catatan Perencanaan Gradien'], rows: [
      ['PLA pelangi', '1,24 g/cm3', 'Default yang baik untuk sebagian besar gulungan pelangi standar'],
      ['Sutra PLA', '1,18-1,24 g/cm3', 'Pigmen dan aditif bervariasi; periksa data merek jika tersedia'],
      ['PETG multiwarna', '1,25-1,29 g/cm3', 'Sedikit lebih padat, jadi gram yang sama mungkin menggunakan lebih sedikit panjang'],
      ['PLA terisi', 'Bervariasi luas', 'Aditif kayu, logam, batu, atau glitter dapat menggeser perkiraan'],
    ] },
    { type: 'proscons', title: 'Menggunakan berat slicer sebagai input utama', items: [
      { pro: 'Ini mencakup pengaturan cetak nyata seperti dinding, infill, penyangga, dan skala.', con: 'Ini tergantung pada profil densitas slicer yang cukup akurat.' },
      { pro: 'Lebih cepat daripada menjumlahkan secara manual gerakan ekstrusi dari G-code.', con: 'Ini tidak mengungkapkan distribusi material yang tidak merata di setiap lapisan.' },
      { pro: 'Ini berfungsi di berbagai model dan slicer dengan entri data minimal.', con: 'Garis prime, pembersihan, dan awal yang gagal harus diperhitungkan secara terpisah.' },
    ] },

    { type: 'title', text: 'Cara Menggunakan Kalkulator untuk Cetakan Filamen Pelangi Nyata', level: 2 },
    { type: 'paragraph', html: 'Mulailah dengan melakukan slicing model dengan pengaturan akhir. Salin perkiraan berat filamen dari slicer, lalu masukkan densitas material dan diameter filamen. Masukkan panjang siklus warna yang diukur atau diiklankan. Terakhir, masukkan tinggi Z cetakan model. Kalkulator mengembalikan filamen yang digunakan, jumlah siklus dalam bagian, gram per siklus warna penuh, dan perkiraan jarak Z per siklus.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Jika siklus dalam bagian di bawah 0,25, harapkan perubahan warna yang halus daripada objek pelangi.',
      'Jika siklus dalam bagian sekitar 1,0, model dapat menunjukkan satu sapuan lengkap melalui palet gulungan.',
      'Jika siklus dalam bagian antara 2,0 dan 4,0, objek akan menunjukkan pita warna berulang.',
      'Jika Z per siklus lebih besar dari tinggi model, tingkatkan skala, tambah massa, atau pilih gulungan transisi lebih cepat.',
      'Jika Z per siklus sangat kecil, kurangi infill atau pilih gulungan transisi lebih panjang untuk gradien yang lebih halus.',
    ] },
    { type: 'summary', title: 'Aturan perencanaan cepat', items: [
      'Lebih banyak gram dalam tinggi yang sama memampatkan pelangi secara vertikal.',
      'Lebih banyak tinggi dengan gram yang sama meregangkan gradien.',
      'Panjang siklus warna yang lebih pendek menciptakan lebih banyak transisi.',
      'Offset awal mengontrol bagian pelangi mana yang muncul pertama.',
    ] },
    { type: 'message', title: 'Untuk bagian pajangan', ariaLabel: 'Saran perencanaan bagian pajangan', html: 'Ketika batas warna harus jatuh pada fitur tertentu, cetak kolom uji vertikal kecil dengan profil slicer yang sama. Bandingkan tinggi pita yang diukur dengan perkiraan, lalu sesuaikan panjang siklus atau offset awal sebelum melanjutkan ke cetakan penuh.' },

    { type: 'title', text: 'Pertanyaan Umum tentang Perencanaan Warna Gulungan Pelangi', level: 2 },
    { type: 'paragraph', html: '<strong>Berapa banyak filamen pelangi yang saya butuhkan untuk satu siklus warna penuh?</strong> Kalikan panjang siklus dengan gram per meter untuk diameter dan densitas filamen Anda. Untuk PLA standar 1,75 mm, satu meter kira-kira 3 g, jadi siklus 30 m mendekati 90 g. Kalkulator melakukan konversi ini secara langsung karena densitas dan diameter nyata mengubah jawabannya.' },
    { type: 'paragraph', html: '<strong>Mengapa cetakan saya sebagian besar tetap satu warna?</strong> Bagian tersebut mungkin menggunakan kurang dari satu fraksi berarti dari siklus gulungan. Model kecil, infill rendah, dan filamen pelangi transisi sangat panjang dapat tetap dalam satu atau dua warna tetangga. Memperbesar model, mencetak beberapa objek sekaligus, menambah dinding, atau memilih gulungan siklus lebih cepat dapat membuat transisi lebih terlihat.' },
    { type: 'paragraph', html: '<strong>Bisakah saya memaksa warna tertentu di bagian atas model?</strong> Anda dapat memperkirakannya dengan offset awal, tetapi penempatan yang tepat membutuhkan pengetahuan tentang fase gulungan saat ini. Jika bagian atas harus biru, misalnya, Anda mungkin perlu memajukan filamen dengan mencetak objek pembersih, mulai dari warna terlihat yang diketahui, atau memilih skala model yang berbeda.' },
    { type: 'diagnostic', variant: 'warning', title: 'Perubahan geometri besar mengurangi akurasi peta Z', badge: 'Bentuk model', html: 'Pedestal yang berat dan patung atas yang tipis dapat mengonsumsi sebagian besar material di dekat bagian bawah, sehingga transisi nyata akan mengelompok lebih rendah dari perkiraan Z proporsional. Untuk model tersebut, gunakan kalkulator untuk jumlah siklus total, lalu periksa pratinjau lapisan slicer untuk memahami di mana volume ekstrusi terkonsentrasi.' },
  ],
  faq: [
    {
      question: 'Apa itu panjang transisi filamen pelangi?',
      answer: 'Ini adalah jumlah filamen, biasanya diukur dalam meter atau kaki, yang diperlukan gulungan untuk bergerak melalui satu urutan warna lengkap dan kembali ke warna awal.',
    },
    {
      question: 'Mengapa kalkulator meminta berat bagian daripada waktu cetak?',
      answer: 'Perubahan warna tergantung pada panjang filamen yang dikonsumsi oleh extruder. Berat slicer dapat dikonversi menjadi volume dan kemudian menjadi panjang filamen, sementara waktu cetak tidak secara langsung menggambarkan penggunaan material.',
    },
    {
      question: 'Seberapa akurat peta transisi Z?',
      answer: 'Ini adalah perkiraan perencanaan. Paling akurat untuk model dengan distribusi material yang cukup merata di seluruh tinggi, dan kurang akurat untuk bentuk dengan dasar padat, bagian berlubang, penyangga, atau struktur pembersihan besar.',
    },
    {
      question: 'Bisakah saya menggunakan ini untuk sutra PLA atau filamen pelangi PETG?',
      answer: 'Ya. Pilih prasetel material atau masukkan densitas dari lembar data gulungan. Densitas mengubah perkiraan panjang filamen dan karenanya jumlah siklus warna yang diprediksi.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Slicing model', text: 'Gunakan pengaturan slicer akhir dan salin perkiraan berat bagian.' },
    { name: 'Masukkan data gulungan', text: 'Atur panjang siklus warna, densitas, diameter filamen, dan offset awal jika ada.' },
    { name: 'Baca peta Z', text: 'Gunakan siklus, Z per siklus, dan pita terlihat untuk memutuskan apakah gradien akan halus, lengkap, atau berulang.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Panjang Transisi Filamen Pelangi',
      description: 'Perkirakan penggunaan siklus warna filamen pelangi dan posisi transisi di sepanjang sumbu Z cetakan 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apa itu panjang transisi filamen pelangi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ini adalah jumlah filamen yang diperlukan gulungan untuk bergerak melalui satu urutan warna lengkap dan kembali ke warna awal.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Kalkulator Panjang Transisi Filamen Pelangi untuk Cetakan 3D',
      description: 'Perkirakan siklus warna filamen pelangi, penggunaan gulungan, dan di mana transisi gradien akan muncul sepanjang tinggi Z cetakan 3D yang di-slicing.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Slicing model', text: 'Gunakan pengaturan slicer akhir dan salin perkiraan berat bagian.' },
        { '@type': 'HowToStep', position: 2, name: 'Masukkan data gulungan', text: 'Atur panjang siklus warna, densitas, diameter filamen, dan offset awal jika ada.' },
        { '@type': 'HowToStep', position: 3, name: 'Baca peta Z', text: 'Gunakan siklus, Z per siklus, dan pita terlihat untuk memutuskan apakah gradien akan halus, lengkap, atau berulang.' }
      ],
    },
  ],
};
