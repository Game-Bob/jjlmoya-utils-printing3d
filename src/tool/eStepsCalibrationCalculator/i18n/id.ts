import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'kalkulator-kalibrasi-e-steps',
  title: 'Kalkulator Kalibrasi E steps dan Asisten Diagnostik Ekstruder',
  description: 'Hitung E-steps ekstruder yang dikoreksi dari tes ekstrusi yang diukur dan tandai penyimpangan di atas 5% sebelum menyembunyikan masalah mekanis.',
  ui: {
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    inputGroupLabel: 'Tes ekstrusi',
    currentEStepsLabel: 'E-steps saat ini',
    requestedLengthLabel: 'Panjang ekstrusi yang diminta',
    actualLengthLabel: 'Panjang ekstrusi yang diukur',
    newEStepsLabel: 'E-steps baru',
    errorLabel: 'Kesalahan terdeteksi',
    commandLabel: 'Perintah konsol',
    copyCommandLabel: 'Salin perintah M92',
    copiedLabel: 'Disalin',
    normalStatusLabel: 'Rentang kalibrasi',
    criticalStatusLabel: 'Penyimpangan kritis',
    normalMessage: 'Penyimpangan yang diukur berada dalam 5%. Terapkan nilai hanya setelah memastikan jalur filamen bersih dan ulangi tes sekali.',
    criticalMessage: 'Peringatan kritis: Penyimpangan di atas 5%. Kemungkinan besar ada masalah mekanis: tersumbat, selip ekstruder, atau tegangan pegas idler yang salah. Periksa perangkat keras sebelum menerapkan E-steps baru ini.',
    diagnosticTitle: 'Pemeriksaan mekanis sebelum menyimpan firmware',
    diagnosticOne: 'Panaskan nosel ke suhu pencetakan nyata dan ekstrusi perlahan dengan hotend bersih.',
    diagnosticTwo: 'Periksa roda gigi penggerak, tegangan idler, bekas gigitan filamen, dan hambatan gulungan sebelum mempercayai angka tersebut.',
    diagnosticThree: 'Ulangi tes 100 mm setelah pembersihan atau perubahan tegangan; jangan menyetel firmware di sekitar ekstruder yang selip.',
    referenceTitle: 'Aturan keputusan',
    formulaLabel: 'Rumus',
    formulaText: 'E-steps saat ini x diminta / diukur',
    safeBandLabel: 'Kesalahan 0-5%',
    safeBandText: 'Terapkan hanya setelah satu tes yang dapat diulang.',
    criticalBandLabel: 'Kesalahan > 5%',
    criticalBandText: 'Periksa penyumbatan, selip, tegangan, dan hambatan terlebih dahulu.',
    repeatTestLabel: 'Setelah M92',
    repeatTestText: 'Lakukan tes ekstrusi yang sama lagi sebelum menyimpan.',
    mmUnit: 'mm',
    inchUnit: 'in',
    stepsUnit: 'langkah/mm',
    controlsAriaLabel: 'Input kalibrasi E-steps',
    resultsAriaLabel: 'Hasil kalibrasi E-steps',
  },
  seo: [
    { type: 'title', text: 'Apa yang Sebenarnya Diukur oleh Kalibrasi E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps menentukan berapa banyak langkah motor stepper yang dikirim firmware ekstruder untuk satu milimeter pergerakan filamen. Di Marlin nilai biasanya disimpan dengan <code>M92 E...</code>, sementara Klipper sering mengekspresikan hubungan fisik yang sama melalui jarak rotasi. Pengukurannya sederhana: perintahkan panjang ekstrusi yang diketahui, ukur secara fisik berapa banyak filamen yang bergerak, lalu koreksi nilai firmware dengan rasio antara gerakan yang diminta dan aktual. Rumusnya adalah <code>E-steps baru = E-steps saat ini * panjang diminta / panjang aktual</code>.',
    },
    {
      type: 'paragraph',
      html: 'Bagian berbahayanya adalah interpretasi. Kalkulator dapat menghasilkan angka dari pengukuran apa pun, termasuk yang buruk. Jika ekstruder menggiling filamen, jika nosel tersumbat sebagian, atau jika pegas idler terlalu longgar, panjang ekstrusi yang diukur akan rendah. Menaikkan E-steps mungkin tampak memperbaiki tes 100 mm, tetapi tidak memperbaiki perangkat keras. Ini memaksa motor mendorong lebih keras atau lebih lama melalui masalah yang sama, yang dapat membuat cetakan nyata menjadi tidak konsisten.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'panjang permintaan umum untuk tes ekstruder yang dapat diulang' },
        { value: '5%', label: 'ambang diagnostik di mana pemeriksaan perangkat keras harus didahulukan' },
        { value: 'M92', label: 'perintah Marlin yang digunakan untuk mengatur langkah per unit' },
        { value: '2 desimal', label: 'presisi output yang digunakan untuk perintah sumbu-E yang disalin' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jangan Kalibrasi di Sekitar Masalah Mekanis',
      html: 'Penyimpangan di atas 5% cukup besar sehingga printer mungkin mengalami under-extruding atau over-extruding karena alasan yang bukan matematika firmware. Periksa jalur ekstruder sebelum menyimpan nilai baru dengan <code>M500</code> atau mengedit konfigurasi Klipper.',
    },
    { type: 'title', text: 'Cara Melakukan Tes Ekstrusi 100 mm yang Bersih', level: 2 },
    {
      type: 'paragraph',
      html: 'Tes E-steps yang andal dimulai dengan nosel panas dan jalur filamen yang stabil. Panaskan hotend ke suhu pencetakan normal untuk filamen, karena perlindungan ekstrusi dingin ada karena suatu alasan dan karena tekanan balik plastik cair mengubah beban pada ekstruder. Tandai filamen pada jarak yang diketahui di atas lubang masuk ekstruder, perintahkan ekstrusi lambat 100 mm, dan ukur jarak yang tersisa untuk menentukan berapa banyak filamen yang benar-benar bergerak.',
    },
    {
      type: 'list',
      items: [
        'Gunakan kecepatan umpan ekstrusi lambat agar hotend dapat melelehkan bahan tanpa membangun tekanan abnormal.',
        'Buat tanda filamen dengan jangka sorong atau spidol halus daripada memperkirakan dengan mata.',
        'Biarkan gulungan berputar bebas sehingga hambatan gulungan tidak terlihat seperti kesalahan E-steps.',
        'Lakukan tes dengan diameter dan jenis filamen yang sama yang biasa kamu cetak.',
        'Ulangi pengukuran setelah mengubah ketegangan roda gigi penggerak, kondisi nosel, atau suhu hotend.',
      ],
    },
    {
      type: 'table',
      headers: ['Hasil terukur', 'Kesalahan', 'Interpretasi pertama', 'Tindakan selanjutnya terbaik'],
      rows: [
        ['98 hingga 102 mm', '0 hingga 2%', 'Penyebaran pengukuran normal kecil', 'Ulangi sekali dan rata-ratakan jika perlu'],
        ['95 hingga 105 mm', '2 hingga 5%', 'Koreksi firmware mungkin wajar', 'Periksa jalur, lalu terapkan nilai yang dihitung'],
        ['Di bawah 95 mm', 'Di atas 5%', 'Kemungkinan selip, tersumbat, hambatan, atau masalah tekanan', 'Periksa mekanik sebelum firmware'],
        ['Di atas 105 mm', 'Di atas 5%', 'Nilai sebelumnya salah atau masalah pengaturan pengukuran', 'Verifikasi satuan dan ulangi tes'],
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan satu variabel bersih',
      html: 'Jangan mengubah laju aliran, pengali ekstrusi, pressure advance, dan E-steps secara bersamaan. E-steps harus menggambarkan gerakan motor-ke-filamen, sementara aliran dan pengali ekstrusi menyetel keluaran material slicer untuk filamen dan profil cetak tertentu.',
    },
    { type: 'title', text: 'Mengapa Peringatan 5% Itu Penting', level: 2 },
    {
      type: 'paragraph',
      html: 'Kesalahan ekstrusi 5% berarti perintah 100 mm menghasilkan kurang dari 95 mm atau lebih dari 105 mm gerakan nyata. Itu bukan masalah pembulatan kecil. Dengan filamen 1,75 mm yang tipikal, 5 mm umpan yang hilang dalam tes pendek mewakili defisit material yang terlihat. Dalam cetakan nyata, ini dapat terlihat sebagai dinding lemah, permukaan atas jarang, lapisan pertama tidak konsisten, dan keandalan dimensi yang buruk. Yang lebih penting, under-ekstrusi pada skala ini sering memiliki penyebab fisik.',
    },
    {
      type: 'paragraph',
      html: 'Asisten diagnostik menandai ambang itu karena koreksi firmware dapat menyembunyikan gejala. Jika roda gigi berkerut dipenuhi debu plastik, motor mungkin melompat hanya selama gerakan cepat. Jika nosel tersumbat sebagian, tes lambat mungkin lulus setelah koreksi besar tetapi printer masih akan gagal selama infill aliran tinggi. Jika tegangan idler terlalu tinggi, filamen dapat berubah bentuk dan macet di hilir; jika terlalu rendah, dapat selip. Perbaikan yang tepat adalah mekanis, bukan angka sumbu-E yang lebih besar.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kesalahan kalibrasi sehat',
          description: 'Ketidakcocokan kecil yang disebabkan oleh nilai firmware sebelumnya, toleransi diameter roda gigi, atau kebisingan pengukuran.',
          points: ['Biasanya dalam 5%', 'Dapat diulang dalam dua tes', 'Tidak ada bunyi klik atau debu filamen', 'Koreksi tetap sederhana'],
        },
        {
          title: 'Kesalahan ekstrusi akibat kerusakan',
          description: 'Ketidakcocokan besar yang disebabkan oleh ekstruder yang gagal menggerakkan filamen sesuai perintah.',
          highlight: true,
          points: ['Di atas 5%', 'Berubah antara tes berulang', 'Klik, gerinda, atau bekas gigitan', 'Sering lebih buruk pada kecepatan lebih tinggi'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Sebelum menerima koreksi kritis',
      items: [
        'Periksa nosel untuk penyumbatan parsial dan bersihkan atau ganti jika ekstrusi bergelombang atau berdenyut.',
        'Sikat gigi roda gigi penggerak dan hilangkan debu filamen.',
        'Atur tegangan idler sehingga roda gigi mencengkeram tanpa meratakan filamen.',
        'Periksa hambatan gulungan, dudukan tabung Bowden, dan gesekan jalur filamen.',
        'Lakukan pengukuran yang sama lagi sebelum mengubah firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500, dan Jarak Rotasi Klipper', level: 2 },
    {
      type: 'paragraph',
      html: 'Pada firmware gaya Marlin, <code>M92 E...</code> mengatur langkah ekstruder per milimeter untuk sesi saat ini. Banyak printer memerlukan <code>M500</code> setelahnya untuk menyimpan nilai ke EEPROM, jika tidak pengaturan dapat hilang setelah reboot. Beberapa build firmware yang terkunci atau dimodifikasi vendor mungkin mengabaikan penyimpanan EEPROM atau memerlukan perubahan konfigurasi sumber firmware sebagai gantinya. Selalu verifikasi nilai setelah reboot dengan <code>M503</code> jika printer mendukungnya.',
    },
    {
      type: 'paragraph',
      html: 'Klipper biasanya menggunakan <code>rotation_distance</code> daripada E-steps di printer.cfg. Ide kalibrasi fisiknya sama, tetapi arah numeriknya terbalik karena jarak rotasi menggambarkan berapa banyak filamen bergerak per putaran motor, bukan berapa banyak langkah yang diperlukan per milimeter. Alat ini menghasilkan perintah <code>M92</code> karena dimaksudkan untuk digunakan langsung di konsol Marlin dan antarmuka firmware yang kompatibel. Pengguna Klipper masih dapat menggunakan kesalahan terukur sebagai sinyal diagnostik sebelum menghitung ulang jarak rotasi.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Jumlah langkah motor yang dikirim firmware untuk menggerakkan satu milimeter filamen pada sumbu ekstruder.' },
        { term: 'M92', definition: 'Perintah G-code yang digunakan oleh firmware Marlin untuk mengatur langkah per unit untuk satu atau lebih sumbu.' },
        { term: 'M500', definition: 'Perintah Marlin yang menyimpan pengaturan saat ini ke EEPROM jika didukung oleh printer.' },
        { term: 'Jarak rotasi', definition: 'Pengaturan Klipper yang mewakili perjalanan filamen per putaran motor penuh.' },
        { term: 'Pengali ekstrusi', definition: 'Skala aliran tingkat slicer untuk profil material, terpisah dari E-steps mesin.' },
      ],
    },
    {
      type: 'card',
      title: 'Alur kerja perintah konsol',
      html: 'Kirim perintah <code>M92 E...</code> yang disalin, ulangi tes ekstrusi, dan hanya simpan nilai setelah panjang yang diukur dapat diulang. Satu angka yang baik adalah bukti yang lebih lemah daripada dua pengukuran yang konsisten.',
    },
    { type: 'title', text: 'Masalah Mekanis yang Terlihat Seperti E-steps Buruk', level: 2 },
    {
      type: 'paragraph',
      html: 'Nosel yang tersumbat sebagian adalah jebakan yang paling umum. Motor ekstruder dapat berputar dengan jumlah yang benar sementara tekanan menumpuk di hotend, menyebabkan roda gigi penggerak mengunyah filamen alih-alih memajukannya. Panjang ekstrusi yang diukur menjadi pendek, rumus menaikkan E-steps, dan cetakan berikutnya mungkin masih under-extrude karena penyumbatan nosel tetap ada. Jika filamen yang diekstrusi bergelombang tajam, berdenyut, keluar tipis, atau berubah arah saat meninggalkan nosel, bersihkan hotend sebelum mengkalibrasi.',
    },
    {
      type: 'paragraph',
      html: 'Selip ekstruder dapat berasal dari kesalahan tegangan yang berlawanan. Terlalu sedikit gaya pegas memungkinkan roda gigi berputar melawan filamen. Terlalu banyak gaya pegas dapat membuat filamen lunak menjadi oval, meningkatkan gesekan di tabung Bowden, atau membuat bekas gigitan dalam yang macet di pintu masuk heat break. Filamen fleksibel sangat sensitif. Ambang diagnostik ada untuk membuat pengguna berhenti dan memeriksa kondisi ini sebelum mengubah masalah traksi menjadi angka firmware.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Gejala kritis selama tes',
      html: 'Berhenti dan periksa perangkat keras jika ekstruder berbunyi klik, debu filamen muncul, motor menjadi sangat panas, ekstrusi keluar dalam denyutan, atau panjang yang diukur berubah beberapa milimeter antara tes 100 mm yang diulang.',
    },
    {
      type: 'proscons',
      title: 'Memperbaiki E steps setelah kesalahan besar',
      items: [
        { pro: 'Dapat mengembalikan umpan filamen yang akurat ketika nilai firmware lama benar-benar salah.', con: 'Dapat menyembunyikan roda gigi penggerak yang selip atau nosel tersumbat bila digunakan tanpa pemeriksaan.' },
        { pro: 'Perintah sederhana mudah diterapkan dan diulang.', con: 'Nilai yang disimpan salah mempengaruhi setiap profil slicer dan setiap material.' },
        { pro: 'Berguna setelah mengubah rasio gigi ekstruder atau perangkat keras motor.', con: 'Bukan pengganti untuk kalibrasi aliran pada dinding cetakan.' },
      ],
    },
    { type: 'title', text: 'E-steps vs Kalibrasi Aliran', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalibrasi E-steps termasuk ke dalam lapisan mesin. Ini menanyakan apakah mekanisme ekstruder menggerakkan panjang filamen mentah yang diminta. Kalibrasi aliran termasuk ke dalam lapisan profil cetak. Ini menanyakan apakah filamen, suhu, nosel, lebar garis, dan strategi slicer tertentu menghasilkan ketebalan dinding dan kualitas permukaan yang diinginkan. Mencampur keduanya membuat profil membingungkan: printer dapat lulus tes E-steps 100 mm dan masih memerlukan pengali ekstrusi 0,96 untuk satu merek PETG.',
    },
    {
      type: 'paragraph',
      html: 'Kalibrasi E-steps setelah mengubah perangkat keras ekstruder, langkah motor, microstepping, rasio gigi, atau diameter roda gigi penggerak. Kalibrasi aliran setelah mengubah merek filamen, warna, ukuran nosel, suhu, atau lebar garis slicer. Pressure advance, linear advance, dan retraksi adalah alat kontrol tekanan terpisah dan harus disetel setelah gerakan ekstrusi dasar dapat dipercaya.',
    },
    {
      type: 'table',
      headers: ['Kalibrasi', 'Lapisan', 'Berubah ketika', 'Jangan gunakan untuk memperbaiki'],
      rows: [
        ['E-steps', 'Firmware atau konfig mesin', 'Perangkat keras ekstruder atau pengaturan motor berubah', 'Filamen basah, sumbatan nosel, aliran slicer'],
        ['Pengali aliran', 'Profil material slicer', 'Merek, warna, nosel, suhu filamen berubah', 'Rasio gigi salah atau ekstruder selip'],
        ['Pressure advance', 'Dinamika firmware', 'Jalur, kecepatan, akselerasi, material ekstruder berubah', 'Under-ekstrusi statis'],
        ['Retraksi', 'Perilaku perjalanan slicer', 'Stringing, oozing, artefak perjalanan berubah', 'Kesalahan jarak umpan dasar'],
      ],
    },
    {
      type: 'message',
      title: 'Aturan teknisi dukungan',
      html: 'Jika nilai kalibrasi berubah secara dramatis, anggap pengukuran itu memberi tahu tentang mesin. Periksa dulu, hitung kedua, simpan terakhir.',
    },
    { type: 'title', text: 'Pengulangan dan Kualitas Pengukuran', level: 2 },
    {
      type: 'paragraph',
      html: 'Hasil E-steps yang baik dapat diulang. Jika satu tes mengukur 94 mm, berikutnya 99 mm, dan berikutnya 96 mm, rata-rata kurang penting daripada penyebarannya. Hasil yang bervariasi menunjukkan masalah traksi, suhu, tekanan, atau teknik pengukuran. Sebelum menyimpan nilai baru, ulangi ekstrusi setidaknya dua kali setelah perubahan mekanis. Kedua hasil harus cukup dekat sehingga nomor firmware baru tidak mengejar kebisingan.',
    },
    {
      type: 'tip',
      title: 'Ukur di atas ekstruder bila memungkinkan',
      html: 'Menandai filamen sebelum memasuki ekstruder menghindari kebingungan dari filamen melengkung yang keluar dari nosel. Ukur jarak dari titik referensi tetap ke tanda sebelum dan sesudah perintah.',
    },
    {
      type: 'summary',
      title: 'Urutan kalibrasi yang andal',
      items: [
        'Panaskan nosel dan bersihkan material lama.',
        'Tandai filamen dengan jarak referensi yang presisi.',
        'Ekstrusi 100 mm perlahan dan ukur gerakan aktual.',
        'Gunakan kalkulator dan periksa kesalahan di atas 5%.',
        'Terapkan <code>M92 E...</code>, uji ulang, lalu simpan hanya jika dapat diulang.',
      ],
    },
  ],
  faq: [
    {
      question: 'Rumus apa yang digunakan kalkulator E-steps ini?',
      answer: 'Ini menggunakan E-steps baru = E-steps saat ini * panjang ekstrusi diminta / panjang ekstrusi diukur.',
    },
    {
      question: 'Mengapa alat ini memperingatkan kesalahan di atas 5%?',
      answer: 'Penyimpangan di atas 5% cukup besar untuk menunjukkan masalah mekanis seperti selip ekstruder, penyumbatan parsial, hambatan gulungan, atau tegangan idler yang salah. Periksa perangkat keras sebelum menyimpan nilai firmware baru.',
    },
    {
      question: 'Dapatkah saya menggunakan perintah M92 di Klipper?',
      answer: 'Perintah M92 yang disalin ditujukan untuk firmware yang kompatibel dengan Marlin. Klipper biasanya menggunakan rotation_distance, tetapi kesalahan terukur yang sama masih berguna untuk mendiagnosis ekstruder.',
    },
    {
      question: 'Haruskah saya menyimpan nilai baru segera?',
      answer: 'Tidak. Terapkan untuk sementara, ulangi tes ekstrusi, dan simpan hanya setelah gerakan yang diukur dapat diulang.',
    },
    {
      question: 'Apakah kalibrasi E-steps sama dengan kalibrasi aliran?',
      answer: 'Tidak. E-steps mengkalibrasi gerakan mesin. Aliran atau pengali ekstrusi mengkalibrasi keluaran material slicer untuk filamen dan profil cetak tertentu.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Masukkan E-steps saat ini', text: 'Baca langkah ekstruder saat ini per milimeter dari firmware atau pengaturan printer.' },
    { name: 'Lakukan tes ekstrusi', text: 'Perintahkan panjang yang diketahui, biasanya 100 mm, dengan hotend pada suhu pencetakan.' },
    { name: 'Ukur gerakan aktual', text: 'Masukkan gerakan filamen yang diukur secara fisik dan tinjau kesalahan yang terdeteksi.' },
    { name: 'Periksa jika perlu', text: 'Jika kesalahan di atas 5%, periksa perangkat keras sebelum menerapkan perintah M92.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Kalibrasi E-steps dan Asisten Diagnostik Ekstruder',
      description: 'Hitung E-steps ekstruder printer 3D yang dikoreksi dan tandai penyimpangan besar dengan risiko mekanis.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Rumus apa yang digunakan kalkulator E-steps ini?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ini menggunakan E-steps baru = E-steps saat ini * panjang ekstrusi diminta / panjang ekstrusi diukur.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara mengkalibrasi E-steps ekstruder printer 3D',
      step: [
        { '@type': 'HowToStep', text: 'Masukkan nilai E-steps saat ini.' },
        { '@type': 'HowToStep', text: 'Perintahkan panjang ekstrusi yang diketahui, biasanya 100 mm.' },
        { '@type': 'HowToStep', text: 'Ukur pergerakan filamen nyata dan hitung koreksinya.' },
        { '@type': 'HowToStep', text: 'Periksa perangkat keras terlebih dahulu jika kesalahan terdeteksi di atas 5%.' },
      ],
    },
  ],
};
