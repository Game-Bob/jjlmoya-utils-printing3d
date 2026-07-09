import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'kalkulator-kepadatan-penyangga-pohon',
  title: 'Kalkulator Kepadatan Penyangga Pohon',
  description: 'Perkirakan diameter kanopi, volume penyangga, jumlah cabang, diameter kontak, dan stabilitas penyangga pohon dari tinggi titik penyangga, sudut cabang, kepadatan cabang, dan diameter batang dasar.',
  ui: {
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    presetsLabel: 'Prasetel',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Seimbang',
    tallPresetLabel: 'Tinggi',
    supportHeightLabel: 'Tinggi titik penyangga',
    branchAngleLabel: 'Sudut cabang',
    branchDensityLabel: 'Kepadatan cabang',
    baseTrunkDiameterLabel: 'Diameter batang dasar',
    canopyDiameterLabel: 'Diameter kanopi atas',
    supportVolumeLabel: 'Volume penyangga',
    stabilityLabel: 'Stabilitas',
    filamentMassLabel: 'Massa filamen',
    branchCountLabel: 'Jumlah cabang',
    contactDiameterLabel: 'Diameter kontak',
    trunkVolumeLabel: 'Volume batang',
    branchVolumeLabel: 'Volume cabang',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'stabilitas rendah',
    stabilityBalanced: 'stabilitas seimbang',
    stabilityHigh: 'stabilitas tinggi',
    controlsAriaLabel: 'Input kepadatan penyangga pohon',
    resultsAriaLabel: 'Hasil kepadatan penyangga pohon',
    copyButton: 'Salin pengaturan penyangga',
    copiedButton: 'Tersalin',
    copiedSummaryTemplate: 'Estimasi penyangga pohon: kanopi {canopy}, volume {volume}, stabilitas {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'in',
    cubicCentimetersUnit: 'cm3',
    cubicInchesUnit: 'in3',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Bagaimana Kepadatan Penyangga Pohon Mengubah Penggunaan Filamen dan Stabilitas', level: 2 },
    {
      type: 'paragraph',
      html: 'Penyangga pohon efisien karena membagi pekerjaan menjadi <strong>jalur beban</strong> dan <strong>pola kontak</strong>. Batang menanggung sebagian besar beban vertikal dari alas cetak, sementara cabang-cabang kecil menjulur ke bagian menjorok hanya di tempat yang membutuhkan kontak. Kalkulator kepadatan penyangga pohon berguna karena kontrol slicer yang paling terlihat, seperti sudut cabang dan kepadatan cabang, saling berinteraksi dengan tinggi titik penyangga dan diameter batang dasar. Kepadatan cabang yang rendah dapat menghemat filamen, tetapi juga mengurangi jumlah jalur yang menahan goyangan. Sudut cabang yang curam dapat menjangkau fitur tinggi dengan sebaran horizontal yang lebih sedikit, tetapi memusatkan beban di dekat batang dan bisa gagal pada penyangga tinggi dan sempit.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator ini memperkirakan tiga nilai yang sulit dinilai secara kasatmata di pratinjau slicer: diameter kanopi atas, volume penyangga, dan skor stabilitas. Diameter kanopi atas memberi tahu seberapa lebar mahkota cabang di dekat model. Volume penyangga memperkirakan material cetak yang diperlukan untuk batang dan cabang. Stabilitas menggabungkan sudut, kepadatan, diameter dasar, tinggi, dan sebaran kanopi menjadi skor yang praktis. Tujuannya bukan menggantikan mesin slicer; tujuannya adalah memilih nilai awal sebelum slicing sehingga Anda lebih sedikit waktu mengulang pratinjau penyangga.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'rentang sudut cabang umum untuk jangkauan dan kekuatan yang seimbang' },
        { value: '25-55%', label: 'rentang kepadatan cabang yang praktis untuk banyak cetakan FDM' },
        { value: '2-8 mm', label: 'rentang diameter batang dasar tipikal untuk penyangga pohon printer hobi' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ini adalah kalkulator perencanaan, bukan ekspor geometri slicer',
      html: 'Setiap slicer menghasilkan penyangga pohon secara berbeda. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer, dan alat lainnya menggunakan nama dan algoritma yang berbeda untuk pembuatan cabang, penghindaran tabrakan, antarmuka penyangga, dan titik kontak. Gunakan keluaran sebagai arah penyesuaian, lalu konfirmasi geometri akhir di pratinjau slicer sebelum mencetak.',
    },
    { type: 'title', text: 'Sudut Cabang: Jangkauan, Jalur Beban, dan Risiko Kegagalan', level: 2 },
    {
      type: 'paragraph',
      html: 'Sudut cabang mengontrol seberapa agresif penyangga pohon menyebar dari batang menuju model. Sudut yang lebih rendah menjaga cabang tetap vertikal, yang biasanya meningkatkan kekakuan dan mengurangi goyangan lateral. Sudut yang lebih tinggi menjangkau lebih jauh di atas ruang kosong, yang dapat mengurangi jumlah batang yang diperlukan, tetapi meningkatkan beban lentur dan dapat menciptakan segmen cabang panjang yang tidak ditopang. Untuk penyangga tinggi, perubahan kecil dari 50 derajat menjadi 60 derajat dapat mengubah pohon yang stabil menjadi struktur fleksibel yang bergetar ketika nosel menyentuhnya.',
    },
    {
      type: 'paragraph',
      html: 'Sudut cabang terbaik tergantung pada tinggi titik penyangga. Pohon pendek di bawah menjorok kecil dapat menggunakan sudut yang lebih lebar karena panjang cabang terbatas. Titik penyangga tinggi membutuhkan sudut yang lebih konservatif, terutama dengan material fleksibel, gerakan travel cepat, atau permukaan alas yang melepaskan penyangga dengan mudah. Jika titik penyangga tinggi dan sudut cabang lebar, perbesar diameter batang dasar atau kepadatan agar mahkota cabang tidak ditopang oleh kolom tipis.',
    },
    {
      type: 'table',
      headers: ['Sudut cabang', 'Penggunaan terbaik', 'Risiko jika berlebihan', 'Penyesuaian'],
      rows: [
        ['20-35°', 'Penyangga tinggi dan menara sempit', 'Mungkin memerlukan lebih banyak batang karena jangkauan terbatas', 'Tingkatkan kepadatan hanya jika cakupan kontak buruk'],
        ['36-50°', 'Penyesuaian penyangga pohon umum', 'Biasanya seimbang, tetapi tetap tergantung tinggi', 'Mulai di sini untuk sebagian besar cetakan PLA dan PETG'],
        ['51-65°', 'Tonjolan lebar dengan tinggi sedang', 'Cabang bisa melentur selama travel atau kontak', 'Gunakan batang dasar lebih tebal dan kepadatan sedang'],
        ['66-75°', 'Kasus khusus dengan jangkauan sangat lebar', 'Beban lentur tinggi dan akar cabang lemah', 'Pratinjau dengan hati-hati dan perlambat cetakan penyangga'],
      ],
    },
    {
      type: 'tip',
      title: 'Jangan andalkan sudut saja untuk jangkauan',
      html: 'Jika cabang harus menjangkau jauh, coba tambahkan batang ekstra atau tingkatkan kepadatan kanopi sebelum mendorong sudut ke batas atas. Batang kedua di dekatnya sering menggunakan lebih sedikit material daripada satu pohon yang terlalu menjulur yang membutuhkan dasar berat untuk bertahan.',
    },
    { type: 'title', text: 'Kepadatan Cabang: Cakupan Kontak Tanpa Bekas Penyangga', level: 2 },
    {
      type: 'paragraph',
      html: 'Kepadatan cabang menggambarkan seberapa banyak struktur cabang yang tercipta di dekat area yang ditopang. Kepadatan rendah mengurangi filamen dan memudahkan pelepasan, tetapi dapat meninggalkan tepi menjorok yang kurang ditopang. Kepadatan tinggi meningkatkan cakupan dan mendistribusikan beban ke lebih banyak kontak, tetapi menambah waktu cetak, bekas kontak, dan kemungkinan penyangga menyatu dengan permukaan halus. Kepadatan yang tepat bukanlah angka tertinggi yang terlihat aman; melainkan angka terendah yang menjaga agar tonjolan tidak melengkung sambil mempertahankan kekakuan yang cukup.',
    },
    {
      type: 'paragraph',
      html: 'Untuk model dekoratif, kepadatan sering dapat dikurangi karena tekstur bawah yang sedikit mungkin dapat diterima. Untuk bagian mekanis, kepadatan perlu lebih diperhatikan karena lubang yang tidak ditopang, chamfer, dan permukaan pasangan dapat memengaruhi kecocokan. Material juga berpengaruh. PLA dapat mentolerir penyangga yang lebih ringan karena kaku dan mencetak jembatan yang bersih. PETG seringkali membutuhkan celah udara lebih besar dan diameter kontak yang hati-hati karena merekat kuat ke penyangga. TPU dan filamen fleksibel membutuhkan geometri konservatif karena cabang tipis dapat melentur alih-alih menahan tonjolan pada posisinya.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Kepadatan rendah',
          description: 'Terbaik saat kualitas pelepasan dan penghematan filamen lebih penting daripada hasil akhir bawah yang sempurna.',
          points: ['Cetak penyangga tercepat', 'Cakupan kontak terlemah', 'Berguna untuk miniatur organik'],
        },
        {
          title: 'Kepadatan seimbang',
          description: 'Nilai awal praktis untuk geometri campuran di mana tonjolan perlu ditopang tetapi permukaan model harus tetap bersih.',
          highlight: true,
          points: ['Efisiensi material baik', 'Upaya pelepasan sedang', 'Cocok untuk banyak pekerjaan PLA dan PETG'],
        },
        {
          title: 'Kepadatan tinggi',
          description: 'Berguna untuk tonjolan berat, titik penyangga tinggi, dan daerah kontak rapuh, tetapi meningkatkan bekas.',
          points: ['Distribusi beban terbaik', 'Lebih banyak volume dan waktu cetak', 'Risiko kontak menyatu lebih tinggi'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Meningkatkan kepadatan cabang',
      items: [
        { pro: 'Lebih banyak titik kontak mengurangi lengkungan pada tonjolan melengkung.', con: 'Lebih banyak titik kontak dapat meninggalkan bekas yang lebih terlihat setelah pelepasan.' },
        { pro: 'Kanopi yang lebih rapat menyebarkan beban ke beberapa cabang.', con: 'Slicer mungkin menghasilkan mahkota besar yang lebih sulit dijangkau dengan pemotong flush.' },
        { pro: 'Penyangga tinggi menjadi kurang sensitif terhadap sentuhan nosel.', con: 'Waktu cetak dan penggunaan filamen meningkat cepat saat kepadatan dikombinasikan dengan kanopi besar.' },
      ],
    },
    { type: 'title', text: 'Diameter Batang Dasar dan Mengapa Penyangga Pohon Tinggi Gagal', level: 2 },
    {
      type: 'paragraph',
      html: 'Diameter batang dasar adalah fondasi pohon. Batang tipis mungkin cukup memadai untuk penyangga pendek, tetapi diameter yang sama menjadi berisiko saat titik yang ditopang tinggi. Tinggi meningkatkan daya ungkit: benturan nosel kecil, sapuan travel, atau getaran kipas pendingin menghasilkan lebih banyak gerakan di kanopi. Jika batang terlalu tipis untuk tingginya, penyangga mungkin tidak langsung patah; ia dapat miring perlahan, menggeser titik kontak, atau terlepas dari alas sebelum tonjolan selesai.',
    },
    {
      type: 'paragraph',
      html: 'Diameter batang yang lebih besar meningkatkan kekakuan dan daya rekat ke alas, tetapi juga menghabiskan material. Kalkulator memperlakukan diameter batang sebagai input stabilitas, bukan pengaturan kosmetik. Jika skor stabilitas rendah, memperbesar diameter seringkali lebih efektif daripada meningkatkan kepadatan cabang karena memperkuat jalur beban dari alas cetak. Jika skor sudah tinggi, batang yang lebih besar hanya akan mempersulit pelepasan dan membuang filamen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Tinggi titik penyangga', definition: 'Jarak vertikal dari alas cetak ke area model yang membutuhkan penyangga.' },
        { term: 'Sudut cabang', definition: 'Sudut yang digunakan cabang saat menyebar dari batang menuju titik kontak penyangga.' },
        { term: 'Kepadatan cabang', definition: 'Jumlah relatif struktur cabang dan cakupan kontak yang tercipta di dekat area yang ditopang.' },
        { term: 'Diameter batang dasar', definition: 'Perkiraan diameter kolom utama penyangga pohon saat mulai di atas alas cetak.' },
        { term: 'Diameter kanopi', definition: 'Perkiraan lebar mahkota cabang atas di dekat tonjolan model.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Kanopi tinggi di atas batang tipis adalah modus kegagalan klasik penyangga pohon',
      html: 'Jika diameter kanopi berkali-kali lipat lebih besar dari diameter batang, penyangga berperilaku seperti struktur berat di atas. Tambahkan batang lain, kurangi sudut cabang, atau perbesar diameter dasar sebelum sekadar menambah kepadatan cabang lebih banyak.',
    },
    { type: 'title', text: 'Diameter Kanopi Atas dan Ruang Bebas Model', level: 2 },
    {
      type: 'paragraph',
      html: 'Diameter kanopi atas penting karena penyangga pohon harus muat di sekitar model, menghindari tabrakan, dan tetap dapat dilepas. Kanopi besar mungkin menopang tonjolan dengan baik, tetapi juga dapat membungkus detail, masuk ke rongga, atau menciptakan cabang yang sulit dipatahkan. Kanopi kecil lebih mudah dilepas, tetapi dapat memusatkan gaya kontak pada beberapa titik dan memungkinkan tepi melengkung. Kalkulator memperkirakan diameter kanopi dari tinggi penyangga, sudut cabang, kepadatan, dan diameter dasar sehingga Anda dapat memprediksi apakah mahkota penyangga yang dihasilkan akan kompak atau menyebar luas.',
    },
    {
      type: 'paragraph',
      html: 'Pratinjau slicer sangat penting untuk celah kanopi. Perhatikan cabang yang melewati lubang kecil, di bawah teks timbul, di sekitar jari figurin, atau di antara fitur mekanis. Jika cabang dapat mencapai suatu area, ia juga bisa terperangkap di sana. Kepadatan lebih rendah, diameter kontak lebih kecil, pemblokir penyangga yang lebih ketat, atau pengecatan manual dapat mencegah penyangga pohon menjadi lebih sulit dilepas daripada penyangga kisi standar.',
    },
    {
      type: 'table',
      headers: ['Perilaku kanopi', 'Kemungkinan penyebab', 'Konsekuensi cetak', 'Perbaikan'],
      rows: [
        ['Kanopi terlalu sempit', 'Sudut dan kepadatan konservatif', 'Tepi tonjolan melengkung di antara titik kontak', 'Tingkatkan kepadatan atau tambahkan titik penyangga manual'],
        ['Kanopi lebar tapi tidak stabil', 'Sudut tinggi pada penyangga tinggi', 'Sentuhan nosel dapat mengguncang struktur', 'Kurangi sudut atau tambah diameter batang'],
        ['Kanopi melingkupi detail', 'Kepadatan tinggi di sekitar geometri kompleks', 'Bekas pelepasan terlihat di permukaan', 'Gunakan pemblokir penyangga atau kurangi kepadatan'],
        ['Kanopi menyentuh dinding samping model', 'Jarak bebas penyangga terlalu kecil', 'Cabang dapat menyatu dengan bagian', 'Perbesar jarak X/Y atau kurangi diameter kontak'],
      ],
    },
    {
      type: 'card',
      title: 'Diameter kanopi adalah peringatan pratinjau',
      html: 'Perkiraan kanopi besar tidak otomatis buruk. Artinya pratinjau slicer perlu perhatian karena mahkota penyangga dapat menjadi tantangan pelepasan yang dominan.',
    },
    { type: 'title', text: 'Volume Penyangga, Panjang Filamen, dan Waktu Cetak', level: 2 },
    {
      type: 'paragraph',
      html: 'Volume penyangga adalah biaya praktis dari pengaturan yang dipilih. Penyangga pohon bisa tampak ringan di pratinjau, tetapi kanopi rapat dan batang tebal tetap dapat menghabiskan filamen yang signifikan. Kalkulator melaporkan perkiraan volume dalam sentimeter kubik. Ini membantu membandingkan pengaturan sebelum slicing, terutama saat Anda memutuskan apakah batang lebih tinggi, kepadatan lebih tinggi, atau jangkauan cabang tambahan sepadan dengan materialnya.',
    },
    {
      type: 'paragraph',
      html: 'Volume tidak sepenuhnya sesuai dengan waktu cetak karena slicer menggunakan lebar garis, jumlah dinding, pola infill, batas akselerasi, dan kecepatan penyangga yang berbeda. Namun, volume tetap merupakan indikator yang kuat. Jika dua pengaturan menghasilkan stabilitas serupa tetapi satu menggunakan volume yang jauh lebih sedikit, pengaturan volume yang lebih rendah biasanya merupakan titik awal yang lebih baik. Jika pengaturan volume yang lebih rendah juga menghasilkan skor stabilitas rendah, penghematan mungkin hilang saat cetakan gagal atau bagian bawah perlu diperbaiki.',
    },
    {
      type: 'summary',
      title: 'Cara mengurangi volume penyangga dengan aman',
      items: [
        'Turunkan kepadatan cabang terlebih dahulu saat skor stabilitas sudah tinggi.',
        'Kurangi sudut cabang saat kanopi sangat lebar dan berat di atas.',
        'Gunakan batang dasar lebih kecil hanya pada penyangga pendek dengan beban tonjolan ringan.',
        'Pisahkan satu pohon besar menjadi dua pohon lebih kecil saat jangkauan menciptakan mahkota yang besar.',
        'Setel diameter kontak secara terpisah agar bekas permukaan tidak memaksa kepadatan yang tidak diperlukan.',
      ],
    },
    {
      type: 'message',
      title: 'Penghematan material hanya berguna jika penyangga bertahan',
      html: 'Penyangga yang gagal biasanya menghabiskan lebih banyak filamen daripada yang sedikit lebih kuat. Perlakukan persentase penghematan besar sebagai ajakan untuk mempratinjau dengan hati-hati, bukan sebagai bukti bahwa penyangga paling ringan otomatis benar.',
    },
    { type: 'title', text: 'Diameter Kontak Penyangga Pohon dan Kualitas Permukaan', level: 2 },
    {
      type: 'paragraph',
      html: 'Diameter kontak mengontrol seberapa banyak penyangga pohon menyentuh model. Kontak kecil lepas bersih dan mengurangi bekas, tetapi dapat terlepas dari tonjolan berat atau panas. Kontak lebih besar menahan lebih baik dan mendistribusikan panas, tetapi dapat menyatu dengan PETG, meninggalkan titik timbul di PLA, atau merusak detail permukaan seperti resin pada cetakan dekoratif. Kalkulator ini memperkirakan diameter kontak dari diameter cabang dan kepadatan sehingga hasilnya tetap terhubung dengan struktur penyangga, bukan diperlakukan sebagai nilai kosmetik yang terisolasi.',
    },
    {
      type: 'paragraph',
      html: 'Pengaturan kontak harus disetel bersamaan dengan jarak Z atas dan perilaku antarmuka. Jika celah vertikal terlalu kecil, kontak sekecil apa pun dapat merekat kuat. Jika celah vertikal terlalu besar, kontak lebar sekalipun tetap dapat gagal menopang tonjolan karena filamen memiliki ruang untuk melengkung. Untuk bagian fungsional, uji diameter kontak pada tonjolan kalibrasi yang terbuat dari material, ukuran nozzle, tinggi lapisan, dan pengaturan pendinginan yang sama dengan model asli.',
    },
    {
      type: 'list',
      items: [
        'Gunakan diameter kontak lebih kecil pada permukaan kosmetik yang terlihat.',
        'Gunakan kontak lebih besar di bawah jembatan berat, tonjolan tebal, atau material suhu tinggi.',
        'Tingkatkan jarak Z atas sebelum menyalahkan kepadatan pohon saat penyangga sulit dilepas.',
        'Turunkan kecepatan antarmuka penyangga jika titik kontak terlepas selama pencetakan.',
        'Periksa apakah slicer menyebutnya diameter kontak, diameter ujung, atau kontak antarmuka penyangga.',
      ],
    },
    {
      type: 'tip',
      title: 'PETG membutuhkan kewaspadaan ekstra',
      html: 'PETG merekat secara agresif ke material penyangga yang dicetak dari filamen yang sama. Kepadatan pohon sedang dengan jarak Z yang hati-hati seringkali lebih baik daripada kanopi sangat rapat dengan kontak besar.',
    },
    { type: 'title', text: 'Alur Kerja Awal yang Direkomendasikan untuk Penyangga Pohon di Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Mulailah dengan memasukkan tinggi titik penyangga tertinggi, bukan tinggi total model. Model bisa tinggi sementara area yang ditopang dekat dengan bed, atau pendek sementara tonjolan kritis berada tinggi di atas pulau sempit. Kemudian pilih sudut cabang yang seimbang dan atur kepadatan cabang sesuai kualitas permukaan yang dibutuhkan. Terakhir, atur diameter batang dasar berdasarkan tinggi dan beban yang diharapkan. Kalkulator akan menunjukkan apakah kombinasi tersebut efisien volume, stabil, atau berisiko.',
    },
    {
      type: 'paragraph',
      html: 'Setelah menghitung, beralihlah ke pratinjau slicer dan periksa penyangga pohon yang dihasilkan dari lapisan penyangga pertama hingga kontak akhir. Cari awal terapung, akar cabang yang sangat tipis, cabang yang terlalu dekat dengan model, dan pulau menjorok yang tidak ditopang. Jika penyangga tidak stabil di kalkulator dan terlihat jarang di pratinjau, perkutkan batang atau kurangi sudut cabang. Jika penyangga stabil tetapi terlihat besar, kurangi kepadatan dan periksa apakah pola kontak masih menutupi tonjolan.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Pengaturan penyangga pohon yang baik terlihat biasa saja di pratinjau',
      html: 'Pratinjau harus menunjukkan batang yang jelas, jalur cabang pendek, kontak yang cukup di bawah tonjolan, dan ruang terbuka di sekitar detail. Jika pohon tampak dramatis secara visual, mungkin pohon tersebut melakukan terlalu banyak hal.',
    },
    {
      type: 'summary',
      title: 'Urutan penyesuaian cepat',
      items: [
        'Masukkan tinggi titik penyangga, bukan hanya tinggi model.',
        'Mulai di sekitar 45-50° untuk sudut cabang.',
        'Gunakan 30-45% kepadatan untuk cetakan PLA umum, lalu sesuaikan dari pratinjau.',
        'Perbesar diameter batang sebelum membuat penyangga tinggi menjadi sangat rapat.',
        'Konfirmasi diameter kontak dan jarak bebas pada pratinjau slicer.',
      ],
    },
    { type: 'title', text: 'Kapan Penyangga Pohon Lebih Baik daripada Penyangga Normal', level: 2 },
    {
      type: 'paragraph',
      html: 'Penyangga pohon paling kuat saat penyangga diperlukan di daerah terisolasi: lengan figurin, helm, tanduk makhluk, patung organik, lengkungan dekoratif, dan tonjolan melengkung. Penyangga pohon menghindari mengisi seluruh area di bawah model, sehingga sering menggunakan lebih sedikit filamen dan meninggalkan lebih sedikit bekas daripada penyangga kisi yang berbentuk kotak. Penyangga pohon juga berguna ketika penyangga standar akan menciptakan dinding besar yang sulit dilepas dari permukaan melengkung.',
    },
    {
      type: 'paragraph',
      html: 'Penyangga standar masih bisa lebih baik untuk tonjolan teknis datar, rak horizontal lebar, dan permukaan yang membutuhkan antarmuka penyangga yang konsisten. Kanopi penyangga pohon menyentuh titik-titik tertentu, sementara penyangga normal dapat menyediakan bidang yang seragam. Jika bagian bawah harus akurat secara dimensional, bandingkan kedua pendekatan. Pohon rapat mungkin menggunakan lebih banyak material daripada penyangga rectilinear sederhana jika tonjolannya lebar dan datar.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Penyangga pohon',
          description: 'Terbaik untuk geometri organik, area kontak jarang, dan model di mana akses pelepasan penting.',
          highlight: true,
          points: ['Material lebih rendah pada tonjolan terisolasi', 'Akses lebih bersih di sekitar bentuk melengkung', 'Sensitif terhadap sudut cabang dan kekakuan batang'],
        },
        {
          title: 'Penyangga normal',
          description: 'Terbaik untuk tonjolan datar lebar, antarmuka yang dapat diprediksi, dan permukaan mekanis sederhana.',
          points: ['Cakupan bawah seragam', 'Seringkali lebih mudah dipahami', 'Dapat menggunakan lebih banyak filamen di bawah model kompleks'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Gunakan kedua jenis penyangga jika model membutuhkannya',
      html: 'Banyak slicer memungkinkan pengecatan penyangga, pemblokir, atau mesh pengubah. Sebuah model dapat menggunakan penyangga pohon untuk fitur organik dan penyangga normal untuk satu permukaan teknik datar.',
    },
  ],
  faq: [
    {
      question: 'Apa sudut cabang yang baik untuk penyangga pohon?',
      answer: 'Rentang awal yang praktis adalah sekitar 40-50°. Gunakan sudut yang lebih rendah untuk penyangga tinggi dan sudut yang lebih tinggi hanya saat Anda membutuhkan jangkauan lebih dan batang cukup kuat.',
    },
    {
      question: 'Apakah kepadatan penyangga pohon yang lebih tinggi selalu meningkatkan kualitas cetak?',
      answer: 'Tidak. Kepadatan yang lebih tinggi meningkatkan cakupan kontak dan stabilitas, tetapi juga meningkatkan filamen, waktu cetak, dan bekas penyangga. Gunakan kepadatan terendah yang menopang tonjolan secara andal.',
    },
    {
      question: 'Bagaimana cara memilih diameter batang dasar?',
      answer: 'Perbesar diameter batang dasar seiring naiknya tinggi titik penyangga. Penyangga tinggi membutuhkan jalur beban yang lebih kuat, sementara penyangga pendek sering dapat menggunakan batang yang lebih kecil untuk menghemat material.',
    },
    {
      question: 'Mengapa diameter kanopi itu penting?',
      answer: 'Diameter kanopi memprediksi seberapa lebar mahkota cabang atas menjadi. Kanopi lebar dapat menopang dengan baik, tetapi dapat bertabrakan dengan detail, menjebak dirinya di rongga, atau menjadi sulit dilepas.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Masukkan tinggi titik penyangga', text: 'Gunakan jarak vertikal dari alas cetak ke area model yang membutuhkan penyangga.' },
    { name: 'Atur sudut dan kepadatan cabang', text: 'Pilih nilai sudut cabang dan kepadatan cabang yang direncanakan di slicer.' },
    { name: 'Tambahkan diameter batang dasar', text: 'Masukkan perkiraan diameter batang pohon utama yang digunakan oleh slicer.' },
    { name: 'Tinjau stabilitas dan volume', text: 'Bandingkan skor stabilitas, diameter kanopi, dan perkiraan volume penyangga sebelum slicing.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Kepadatan Penyangga Pohon',
      description: 'Optimalkan kepadatan penyangga pohon, sudut cabang, diameter batang dasar, diameter kanopi, volume penyangga, dan stabilitas untuk cetakan 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Apa sudut cabang yang baik untuk penyangga pohon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Rentang awal praktis adalah sekitar 40-50°, dengan sudut lebih rendah untuk penyangga tinggi dan sudut lebih lebar hanya saat jangkauan ekstra diperlukan.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara mengatur kepadatan penyangga pohon untuk cetakan 3D',
      step: [
        { '@type': 'HowToStep', text: 'Masukkan tinggi titik penyangga.' },
        { '@type': 'HowToStep', text: 'Atur sudut cabang, kepadatan cabang, dan diameter batang dasar.' },
        { '@type': 'HowToStep', text: 'Tinjau diameter kanopi, volume penyangga, dan skor stabilitas.' },
        { '@type': 'HowToStep', text: 'Terapkan nilai di pratinjau slicer dan sesuaikan pengaturan kontak.' },
      ],
    },
  ],
};