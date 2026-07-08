import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'kalkulator-waktu-penghalusan-kimia-abs-pvb',
  title: 'Kalkulator Waktu Penghalusan Kimia dengan Uap Aseton untuk ABS dan Isopropil Alkohol untuk PVB',
  description: 'Perkirakan waktu paparan uap dan pengeringan yang konservatif untuk penghalusan kimia ABS dengan aseton atau PVB dengan isopropil alkohol berdasarkan volume ruang, suhu, volume bagian, dan detail permukaan.',
  ui: {
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    materialLabel: 'Bahan',
    absLabel: 'ABS + aseton',
    pvbLabel: 'PVB + IPA',
    chamberVolumeLabel: 'Ruang uap',
    chamberTemperatureLabel: 'Suhu ruang',
    partVolumeLabel: 'Volume bagian',
    surfaceDetailLabel: 'Detail permukaan',
    fineDetailLabel: 'Detail halus',
    balancedDetailLabel: 'Seimbang',
    coarseDetailLabel: 'Garis lapisan tebal',
    presetsLabel: 'Prasetel',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Bagian pajangan',
    enclosurePresetLabel: 'Enklosur besar',
    exposureLabel: 'Paparan diperkirakan',
    dryTimeLabel: 'Pengeringan setelah penghalusan',
    firstTrialLabel: 'Uji coba pertama',
    riskLabel: 'Risiko detail',
    vaporMapLabel: 'Intensitas uap',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 'd',
    minutesUnit: 'mnt',
    hoursUnit: 'j',
    controlsAriaLabel: 'Input penghalusan kimia',
    resultsAriaLabel: 'Hasil penghalusan kimia',
    recommendationGentle: 'jendela lembut',
    recommendationStandard: 'awasi dengan saksama',
    recommendationAggressive: 'risiko kehilangan detail tinggi',
    safetyNote: 'Gunakan ini hanya sebagai perkiraan perencanaan yang konservatif. Uap pelarut mudah terbakar dan berbahaya: bekerja jauh dari sumber api, gunakan ventilasi dan APD, dan mulailah dengan paparan uji pendek.',
    copyButton: 'Salin rencana penghalusan',
    copiedButton: 'Disalin',
    copiedSummaryTemplate: 'Perkiraan penghalusan kimia: {minutes} mnt ({seconds} d) paparan, uji coba pertama pada {trialSeconds} d, keringkan selama sekitar {dryHours} j.',
  },
  seo: [
    { type: 'title', text: 'Cara Memperkirakan Waktu Penghalusan Uap Aseton untuk ABS Tanpa Melelehkan Detail', level: 2 },
    {
      type: 'paragraph',
      html: 'Penghalusan uap aseton untuk ABS adalah proses pelarutan permukaan yang terkontrol. Uap aseton melunakkan kulit luar ABS, memungkinkan tanda lapisan FDM yang terlihat mengendur menjadi permukaan yang lebih mengilap. Jendela yang berguna sempit: paparan terlalu sedikit meninggalkan garis lapisan tidak berubah, sementara paparan terlalu banyak membulatkan tepi, melunakkan teks timbul, menutup lubang kecil, dan dapat membuat dinding tipis melengkung. Perkiraan waktu oleh karena itu sebaiknya diperlakukan sebagai <strong>jendela awal untuk uji coba pendek</strong>, bukan sebagai resep tetap.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator menggunakan lima variabel praktis yang sangat memengaruhi durasi penghalusan: pasangan polimer-pelarut, volume ruang, suhu ruang, volume bagian cetakan, dan tingkat detail permukaan. Suhu penting karena tekanan uap dan aktivitas pelarut meningkat pesat saat ruang memanas. Ukuran bagian penting karena bagian yang lebih besar memiliki lebih banyak luas permukaan dan massa termal. Tingkat detail penting karena gigi roda gigi miniatur, logo, atau tab jepret dapat rusak oleh waktu yang terlihat sempurna pada enklosur persegi panjang sederhana.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'uji coba pertama yang masuk akal dari perkiraan waktu' },
        { value: 'ABS/PVB', label: 'polimer cetak umum untuk penghalusan uap' },
        { value: 'jam', label: 'waktu pengeringan sebelum penanganan atau perakitan' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Penghalusan uap adalah operasi penyelesaian, bukan langkah kalibrasi dimensional',
      html: 'Jika bagian cetakan harus menahan bantalan, ulir, segel, jepretan tekan, atau sisipan, topeng area kritis atau validasi proses penghalusan pada salinan kurban. Penghalusan kimia mengubah tepi dan dapat mengubah toleransi fungsional.',
    },
    { type: 'title', text: 'ABS dengan Aseton vs PVB dengan IPA untuk Penghalusan Uap', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS biasanya dihaluskan dengan aseton karena aseton adalah pelarut yang efektif untuk permukaan akrilonitril butadiena stirena. PVB, sering dijual sebagai filamen yang ditujukan untuk cetakan transparan atau mengilap, biasanya dihaluskan dengan isopropil alkohol. Tujuan visualnya serupa, tetapi perilaku prosesnya berbeda. ABS dengan aseton dapat menjadi mengilap dan membulat dengan cepat, terutama di ruang yang hangat. PVB dengan IPA seringkali lebih toleran untuk pengembangan kilap bertahap, tetapi masih bisa kehilangan ketajaman jika terpapar terlalu lama.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS dengan uap aseton',
          description: 'Aksi penghalusan cepat dan kuat dengan risiko tinggi melunakkan teks kecil, sudut, pin, dan dinding tipis saat ruang hangat.',
          points: ['Terbaik untuk cangkang dan alat peraga yang terlihat', 'Sensitif terhadap suhu', 'Membutuhkan pengeluaran gas lama sebelum penggunaan di ruang tertutup'],
        },
        {
          title: 'PVB dengan uap IPA',
          description: 'Sering dipilih untuk bagian visual mengilap dan cetakan tembus pandang di mana respons penghalusan yang lebih lambat dan lebih terkontrol diinginkan.',
          highlight: true,
          points: ['Berguna untuk bagian pajangan', 'Dapat mempertahankan detail lebih baik dengan siklus pendek', 'Keringkan sepenuhnya sebelum memoles atau mengemas'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Bahan', 'Pelarut umum', 'Karakter proses', 'Mode kegagalan utama'],
      rows: [
        ['ABS', 'Aseton', 'Pelunakan permukaan cepat dan kilap kuat', 'Tepi membulat, dinding tipis melengkung, lubang tertutup'],
        ['PVB', 'Isopropil alkohol', 'Kilap lebih bertahap dan pengurangan kabut', 'Permukaan lengket, tekstur luntur, detail halus melunak'],
        ['ASA', 'Aseton atau pelarut lain', 'Keluarga mirip ABS tetapi tergantung pada formulasi', 'Bagian tahan UV masih bisa kehilangan tepi tajam'],
        ['PLA/PETG', 'Tidak cocok untuk kalkulator ini', 'Pelarut umum tidak berperilaku seperti penghalusan ABS/PVB', 'Hasil akhir buruk atau eksperimen pelarut berbahaya'],
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan pengaturan bahan sebagai pasangan pelarut, bukan hanya nama plastik',
      html: 'Pilih ABS saat prosesnya adalah penghalusan uap aseton dan PVB saat prosesnya adalah penghalusan uap IPA. Campuran filamen, aditif, pigmen, dan sejarah anil yang berbeda dapat mengubah respons sebenarnya, jadi ujilah dengan gulungan persis yang digunakan untuk cetakan akhir.',
    },
    { type: 'title', text: 'Mengapa Volume Ruang Mengubah Durasi Penghalusan Kimia', level: 2 },
    {
      type: 'paragraph',
      html: 'Volume ruang memengaruhi seberapa cepat konsentrasi uap terbentuk dan seberapa merata ia mengelilingi bagian cetakan. Sebuah stoples kecil bisa menjadi agresif dengan cepat karena sejumlah kecil pelarut menempati ruang kepala yang kecil. Ruang yang lebih besar biasanya membutuhkan lebih banyak waktu untuk mencapai lingkungan uap efektif yang sama, tetapi bisa lebih seragam jika sumber pelarut didistribusikan dan bagian dinaikkan di atas kontak cairan. Kalkulator meningkatkan waktu paparan secara perlahan seiring bertambahnya volume ruang, karena hubungannya nyata tetapi tidak sepenuhnya linier dalam pengaturan penyelesaian rumahan.',
    },
    {
      type: 'paragraph',
      html: 'Keseragaman sama pentingnya dengan konsentrasi rata-rata. Bagian yang ditempatkan terlalu dekat dengan handuk yang direndam pelarut, genangan, atau piring panas dapat menerima serangan terarah: satu sisi menjadi mengilap dan lembut sementara sisi yang berlawanan tetap kusam. Ruang yang lebih tinggi juga dapat membuat gradien, terutama jika uap mengembun pada tutupnya dan menetes. Interpretasi paling aman dari waktu yang dihitung karena itu adalah interval inspeksi terjadwal: keluarkan bagian, periksa kilap basah, dan berhenti sebelum fitur tajam mulai mengalir.',
    },
    {
      type: 'list',
      items: [
        'Angkat bagian pada dudukan tahan pelarut sehingga tidak pernah menyentuh pelarut cair.',
        'Jauhkan sumber pelarut penyerap dari permukaan model untuk menghindari paparan berlebih sepihak.',
        'Gunakan ruang yang cukup besar sehingga uap dapat bersirkulasi di sekitar semua sisi yang terlihat.',
        'Hindari kondensasi yang menetes dari tutupnya; tetesan menciptakan bekas luka, kawah, dan titik mengilap.',
        'Jangan tingkatkan jumlah pelarut tanpa batas untuk mengimbangi ruang besar; konsentrasi dan risiko keselamatan meningkat bersama.',
      ],
    },
    {
      type: 'card',
      title: 'Ruang yang lebih besar tidak otomatis lebih aman',
      html: 'Volume tertutup besar dapat menampung lebih banyak uap yang mudah terbakar. Ruang yang lebih besar dapat memperlambat penghalusan, tetapi juga dapat menciptakan atmosfer berbahaya yang lebih besar. Gunakan ruang praktis terkecil yang memberikan ruang bebas dan paparan merata pada bagian.',
    },
    { type: 'title', text: 'Suhu, Tekanan Uap, dan Kehilangan Detail', level: 2 },
    {
      type: 'paragraph',
      html: 'Suhu adalah salah satu input terkuat karena penguapan pelarut meningkat saat ruang memanas. Beberapa derajat dapat mengubah hasil akhir dari penghalusan satin lambat menjadi kilap cepat dan pembulatan tepi. Uap aseton hangat di sekitar ABS sangat tidak kenal ampun: permukaan dapat berubah dari kusam menjadi tampak basah menjadi melunak dalam interval pendek. Kalkulator memperpendek waktu paparan saat suhu ruang naik dan meningkatkan skor risiko saat suhu naik di atas referensi suhu ruang normal.',
    },
    {
      type: 'paragraph',
      html: 'Pemanasan aktif adalah di mana banyak proses penghalusan hobi menjadi tidak aman. Uap aseton dan IPA mudah terbakar, dan pemanas improvisasi, sakelar, relai, percikan api, piring panas, dan elektronik yang tersegel buruk dapat menciptakan risiko kebakaran serius. Jika suhu dikendalikan sama sekali, itu harus dilakukan dengan peralatan yang dirancang untuk konteks uap berbahaya, bukan dengan pemanas terbuka di dalam wadah tertutup. Untuk sebagian besar pengguna, penghalusan suhu ruang dengan inspeksi singkat adalah alur kerja yang lebih dapat dipertahankan.',
    },
    {
      type: 'table',
      headers: ['Kondisi ruang', 'Perilaku yang diharapkan', 'Respons praktis'],
      rows: [
        ['Ruangan sejuk di bawah 18 °C', 'Aksi uap lambat dan kilap tertunda', 'Gunakan interval lebih panjang tetapi periksa kondensasi tidak merata'],
        ['Suhu ruang 20-25 °C', 'Garis dasar yang dapat diprediksi untuk sebagian besar pengujian', 'Mulai dengan perkiraan kalkulator dan uji coba pertama'],
        ['Ruang hangat 26-32 °C', 'Pelunakan lebih cepat dan risiko detail lebih tinggi', 'Perpendek siklus dan hindari bagian fungsional yang rumit'],
        ['Ruang panas atau dipanaskan aktif', 'Lingkungan uap yang sangat agresif', 'Jangan improviasi; risiko kebakaran dan paparan berlebih meningkat tajam'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Jangan pernah menggunakan api terbuka atau elemen pemanas yang terbuka',
      html: 'Uap aseton dan isopropil alkohol dapat menyala. Jauhkan ruang penghalusan dari api, percikan api, alat panas, sakelar yang memercikkan api, motor sikat, pemanas yang tidak dinilai untuk layanan uap, dan penanganan yang rentan terhadap listrik statis.',
    },
    { type: 'title', text: 'Volume Bagian, Luas Permukaan, dan Sensitivitas Geometri', level: 2 },
    {
      type: 'paragraph',
      html: 'Input yang diberi label volume bagian adalah indikator praktis untuk ukuran bagian secara keseluruhan. Ini bukan pengganti sempurna untuk luas permukaan, tetapi mudah diperkirakan dari statistik slicer dan biasanya menunjukkan apakah cetakannya adalah kenop kecil, patung pajangan, atau panel enklosur besar. Bagian yang lebih besar seringkali membutuhkan paparan lebih lama untuk mengembangkan hasil akhir visual yang merata, tetapi mereka juga memiliki lebih banyak tepi, sudut, dan bagian tipis yang dapat menunjukkan penyerapan pelarut yang tidak merata.',
    },
    {
      type: 'paragraph',
      html: 'Geometri dapat mendominasi hasilnya. Vas silinder halus dan braket kisi dapat memiliki volume yang sama tetapi toleransi penghalusan yang sama sekali berbeda. Tulang rusuk tipis, huruf timbul yang tajam, lubang kecil, saluran internal, pas, dan klip melunak lebih cepat daripada permukaan datar yang lebar. Ketika bagian memiliki geometri kritis, gunakan pengaturan detail halus bahkan jika garis lapisan terlihat, lalu ulangi siklus pendek daripada mencoba satu paparan panjang.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Penghalusan uap', definition: 'Proses penyelesaian di mana uap pelarut melunakkan hanya permukaan luar cetakan polimer.' },
        { term: 'Paparan berlebih', definition: 'Interval penghalusan yang cukup panjang untuk membulatkan detail, merusak dinding tipis, atau meninggalkan permukaan yang lengket.' },
        { term: 'Pengeluaran gas', definition: 'Periode setelah penghalusan ketika pelarut yang diserap menguap dari permukaan yang melunak.' },
        { term: 'Detail permukaan', definition: 'Geometri kecil seperti teks, tekstur, lubang, tonjolan, klip, dan tepi tajam yang bisa hilang selama penghalusan.' },
        { term: 'Kupon kurban', definition: 'Cetakan uji kecil yang dibuat dari filamen dan pengaturan yang sama untuk memvalidasi respons pelarut sebelum menyelesaikan bagian sebenarnya.' },
      ],
    },
    {
      type: 'summary',
      title: 'Aturan geometri untuk memilih tingkat detail',
      items: [
        'Gunakan detail halus untuk teks, roda gigi, lubang kecil, jepretan, ulir, atau dinding tipis.',
        'Gunakan seimbang untuk bagian dekoratif dengan garis lapisan sedang dan tanpa pasangan yang ketat.',
        'Gunakan garis lapisan tebal hanya untuk bentuk sederhana di mana tepi membulat dapat diterima.',
        'Bagi model kompleks menjadi zona yang ditopeng dan tidak ditopeng ketika hanya cangkang luar yang membutuhkan kilap.',
      ],
    },
    { type: 'title', text: 'Membaca Keluaran Kalkulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Keluaran paparan adalah perkiraan total waktu uap untuk lintasan pertama yang konservatif. Ini ditampilkan dalam menit dan detik karena jendela penyelesaian pendek lebih mudah dikelola dengan pengatur waktu. Uji coba pertama sengaja dibuat lebih pendek, biasanya sekitar sepertiga dari paparan yang dihitung. Mengeluarkan bagian lebih awal memungkinkan Anda memeriksa apakah permukaan mulai mengilap sebelum kehilangan detail menjadi permanen.',
    },
    {
      type: 'paragraph',
      html: 'Waktu pengeringan memperkirakan berapa lama cetakan harus didiamkan sebelum penanganan dekat, perakitan, pengecatan, pengemasan, atau penyegelan. Pengeringan bukan hanya tentang permukaan yang terasa kering. Pelarut dapat tetap berada di polimer yang melunak dan terus memengaruhi kesesuaian, bau, daya rekat cat, dan rasa mekanis. Bagian ABS yang dihaluskan dengan aseton seringkali membutuhkan pengeluaran gas lebih lama daripada bagian PVB yang dihaluskan dengan IPA, terutama ketika bagian tersebut tebal atau paparannya agresif.',
    },
    {
      type: 'proscons',
      title: 'Satu paparan panjang vs beberapa siklus pendek',
      items: [
        { pro: 'Paparan tunggal lebih cepat dan lebih mudah dijadwalkan.', con: 'Ini memberikan sedikit peringatan sebelum fitur halus melunak.' },
        { pro: 'Siklus pendek memudahkan berhenti pada hasil akhir satin atau semi-mengilap.', con: 'Mereka membutuhkan lebih banyak penanganan dan pembukaan ruang berulang.' },
        { pro: 'Beberapa inspeksi mengurangi kemungkinan merusak cetakan satu kali.', con: 'Hasil akhir mungkin sedikit kurang seragam jika bagian mendingin atau mengering di antara siklus.' },
      ],
    },
    {
      type: 'message',
      title: 'Penggunaan terbaik dari perkiraan',
      html: 'Atur pengatur waktu untuk uji coba pertama, periksa bagian di bawah cahaya menyamping, lalu lanjutkan dalam peningkatan pendek. Berhenti saat garis lapisan masih hampir tidak terlihat; permukaan sering terus mengendur untuk waktu singkat setelah pengeluaran.',
    },
    { type: 'title', text: 'Alur Kerja Aman untuk Penghalusan Kimia ABS dan PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Alur kerja yang aman dimulai sebelum pelarut dibuka. Cetak kupon kecil dengan filamen, tinggi lapisan, jumlah dinding, dan pengaturan pendinginan yang sama. Bersihkan bagian akhir sehingga debu dan minyak tidak terperangkap di bawah kulit yang melunak. Siapkan dudukan non-reaktif, pengatur waktu, sarung tangan yang kompatibel dengan pelarut, pelindung mata, ventilasi, dan tempat di mana bagian dapat mengering tanpa disentuh. Jaga wadah pelarut tetap tertutup saat tidak secara aktif mengisi ruang.',
    },
    {
      type: 'list',
      items: [
        'Konfirmasi bahwa filamen benar-benar ABS atau PVB, bukan PLA, PETG, campuran PC, atau bahan daur ulang yang tidak dikenal.',
        'Lepaskan penyangga dan amplas hanya sebelum penghalusan; mengamplas setelah penghalusan dapat memotong kilap secara tidak merata.',
        'Topeng lubang, dudukan bantalan, ulir, dan permukaan kawin jika dimensi penting.',
        'Mulai dengan waktu uji coba pertama, lalu tambahkan interval pendek jika hasil akhir masih terlalu kusam.',
        'Keringkan bagian di area berventilasi sampai bau pelarut dan kelengketan hilang.',
        'Buang lap pelarut dan bahan yang terkontaminasi sesuai dengan aturan limbah berbahaya setempat.',
      ],
    },
    {
      type: 'tip',
      title: 'Jangan menilai hasil akhir saat permukaan basah',
      html: 'Permukaan ABS atau PVB yang baru terpapar bisa terlihat lebih mengilap daripada setelah dikeringkan. Periksa baik kilap maupun geometri: jika sudut terlihat bengkak atau teks kecil menjadi lunak, berhenti bahkan jika garis lapisan masih terlihat samar.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ventilasi adalah bagian dari waktu proses',
      html: 'Pengeringan pasca-penghalusan harus terjadi di mana uap tidak dapat menumpuk. Bagian yang segera ditempatkan ke dalam laci, tas pengiriman, etalase, atau enklosur elektronik dapat mempertahankan bau dan pelarut lebih lama dari yang diharapkan.',
    },
    { type: 'title', text: 'Masalah Umum dan Tindakan Perbaikan', level: 2 },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan penyebab', 'Penyesuaian selanjutnya'],
      rows: [
        ['Garis lapisan masih tajam', 'Paparan terlalu pendek atau ruang terlalu dingin', 'Ulangi dengan peningkatan pendek daripada menggandakan waktu'],
        ['Tepi membulat atau teks buram', 'Paparan berlebih untuk tingkat detail', 'Gunakan pengaturan detail halus, suhu lebih rendah, atau topeng fitur'],
        ['Permukaan lengket setelah pengeringan', 'Terlalu banyak pelarut diserap atau ventilasi tidak memadai', 'Perpanjang waktu pengeringan dan kurangi paparan di masa depan'],
        ['Satu sisi lebih mengilap dari yang lain', 'Sumber uap tidak merata atau bagian terlalu dekat dengan pelarut', 'Angkat bagian, distribusikan sumber, putar hanya di antara siklus'],
        ['Kabut putih atau bintik keruh', 'Kondensasi, kelembaban, atau penguapan tidak merata', 'Kurangi kejenuhan ruang dan hindari tetesan tutup'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Jika bagian menjadi lengket, jangan mencoba memperbaikinya dengan segera menambahkan lebih banyak uap. Lebih banyak pelarut biasanya memperdalam zona yang melunak. Biarkan bagian mengering sepenuhnya, lalu putuskan apakah siklus tindak lanjut yang sangat singkat sepadan dengan risikonya. Jika tepi sudah mengalir, bentuknya tidak dapat dipulihkan dengan pengeringan. Untuk bagian yang kritis, solusi yang lebih andal adalah mencetak ulang dengan pengaturan slicer yang disesuaikan dan menggunakan jendela penyelesaian yang lebih pendek.',
    },
    {
      type: 'card',
      title: 'Pengaturan slicer yang mengurangi waktu penghalusan',
      html: 'Tinggi lapisan lebih rendah, ekstrusi stabil, filamen kering, pendinginan yang sesuai, dan pressure advance yang disetel dengan baik mengurangi jumlah pekerjaan kimia yang diperlukan. Penghalusan kimia harus menyempurnakan cetakan, bukan menyembunyikan ringing parah, celah, gumpalan, tekstur filamen basah, atau ekstrusi kurang.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa penyelesaian praktis',
      items: [
        'Perkirakan paparan dengan bahan, ruang, suhu, ukuran bagian, dan tingkat detail yang tepat.',
        'Jalankan kupon kurban atau uji coba pertama sebelum menyelesaikan bagian akhir.',
        'Gunakan siklus pendek ketika detail penting dan berhenti sebelum permukaan kehilangan ketajaman.',
        'Berikan waktu pengeringan yang cukup agar bau pelarut, kelengketan, dan kelembutan dimensi hilang.',
        'Perlakukan kontrol uap yang mudah terbakar sebagai persyaratan keselamatan, bukan kenyamanan opsional.',
      ],
    },
  ],
  faq: [
    {
      question: 'Berapa lama ABS harus berada dalam uap aseton?',
      answer: 'Tidak ada waktu universal karena volume ruang, suhu, geometri bagian, dan formulasi filamen berpengaruh. Gunakan perkiraan kalkulator sebagai titik awal, lalu periksa pada waktu uji coba pertama yang lebih pendek sebelum melanjutkan.',
    },
    {
      question: 'Bisakah PVB dihaluskan dengan uap isopropil alkohol?',
      answer: 'Ya, banyak filamen PVB dirancang untuk penghalusan IPA. Prosesnya biasanya lebih bertahap daripada ABS dengan aseton, tetapi paparan berlebih masih dapat membuat permukaan lengket atau mengaburkan detail halus.',
    },
    {
      question: 'Apakah ruang yang lebih hangat mengurangi waktu penghalusan?',
      answer: 'Ya. Uap pelarut yang lebih hangat biasanya bertindak lebih cepat, tetapi juga meningkatkan sifat mudah terbakar dan risiko kehilangan detail. Hindari pemanas improvisasi dan jaga uap dari sumber api.',
    },
    {
      question: 'Berapa lama bagian yang dihaluskan harus dikeringkan?',
      answer: 'Rencanakan berjam-jam, bukan beberapa menit. ABS yang dihaluskan dengan aseton seringkali membutuhkan pengeluaran gas lebih lama daripada PVB yang dihaluskan dengan IPA, terutama untuk bagian tebal atau paparan agresif.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Pilih pasangan bahan dan pelarut', text: 'Pilih ABS untuk penghalusan uap aseton atau PVB untuk penghalusan uap IPA.' },
    { name: 'Masukkan kondisi ruang', text: 'Tambahkan volume ruang uap dan suhu ruang menggunakan satuan metrik atau US.' },
    { name: 'Jelaskan bagiannya', text: 'Masukkan perkiraan volume bagian dan pilih tingkat detail permukaan yang cocok dengan fitur terkecil.' },
    { name: 'Gunakan uji coba pertama', text: 'Periksa bagian pada waktu uji yang lebih pendek sebelum menjalankan paparan penuh yang diperkirakan.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Waktu Penghalusan Kimia dengan Uap Aseton untuk ABS dan Isopropil Alkohol untuk PVB',
      description: 'Perkirakan paparan uap kimia dan waktu pengeringan untuk penyelesaian ABS aseton dan PVB IPA.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Berapa lama ABS harus berada dalam uap aseton?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gunakan perkiraan konservatif berdasarkan volume ruang, suhu, ukuran bagian, dan tingkat detail, lalu periksa pada waktu uji coba pertama yang lebih pendek.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara memperkirakan waktu penghalusan kimia untuk cetakan ABS atau PVB',
      step: [
        { '@type': 'HowToStep', text: 'Pilih ABS dengan aseton atau PVB dengan IPA.' },
        { '@type': 'HowToStep', text: 'Masukkan volume dan suhu ruang.' },
        { '@type': 'HowToStep', text: 'Masukkan volume bagian dan tingkat detail permukaan.' },
        { '@type': 'HowToStep', text: 'Mulai dengan uji coba pertama dan lanjutkan hanya jika detail tetap aman.' },
      ],
    },
  ],
};
