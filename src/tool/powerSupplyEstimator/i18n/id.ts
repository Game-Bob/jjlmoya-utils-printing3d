import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: 'kalkulator-ukuran-catu-daya-printer-3d',
  title: 'Kalkulator Ukuran Catu Daya Printer 3D untuk Hotend, Heated Bed, Motor, dan Upgrade 12V ke 24V',
  description: 'Perkirakan watt PSU dan arus maksimum untuk upgrade printer 3D dengan menambahkan heated bed, kartrid hotend, motor stepper, beban tambahan, dan margin keamanan.',
  ui: {
    systemVoltageLabel: 'Tegangan sistem',
    bedPowerLabel: 'Heated bed',
    hotendPowerLabel: 'Kartrid hotend',
    motorsLabel: 'Motor',
    motorPowerLabel: 'Per motor',
    auxiliaryPowerLabel: 'Beban tambahan',
    safetyMarginLabel: 'Margin keamanan',
    totalLoadLabel: 'Beban langsung',
    psuRequiredLabel: 'PSU dibutuhkan',
    currentRequiredLabel: 'Arus maksimum',
    recommendedPsuLabel: 'PSU standar terdekat',
    utilizationLabel: 'beban pada ukuran terpilih',
    thermalMapLabel: 'Peta daya termal',
    bedSegmentLabel: 'Bed',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motor',
    auxiliarySegmentLabel: 'Tambahan',
    headroomSegmentLabel: 'Cadangan',
    scenarioLabel: 'Preset',
    scenarioBedSlinger: 'Bed slinger',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Format besar',
    copyButton: 'Salin ringkasan',
    copiedButton: 'Tersalin',
    controlsAriaLabel: 'Input catu daya',
    resultsAriaLabel: 'Hasil catu daya',
    copiedSummaryTemplate: 'PSU printer 3D: {requiredWatts} W dibutuhkan, {currentAmps} A pada {voltage} V, direkomendasikan {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Cara Menentukan Ukuran Catu Daya Printer 3D Tanpa Menebak', level: 2 },
    {
      type: 'paragraph',
      html: 'Catu daya printer 3D diukur dari beban yang dapat aktif secara bersamaan: heated bed, kartrid pemanas hotend, motor stepper, papan pengontrol, kipas, LED, probe, relai pemanas ruang, dan elektronik tambahan apa pun. Hubungan listrik dasarnya sederhana: <strong>watt sama dengan volt dikalikan ampere</strong>. Printer yang membutuhkan 420 W pada sistem 24 V dapat menarik sekitar 17,5 A sebelum ada tambahan untuk start, rugi regulasi, atau upgrade masa depan.',
    },
    {
      type: 'paragraph',
      html: 'Kesalahan yang menyebabkan banyak build printer tidak stabil adalah menggunakan konsumsi pencetakan rata-rata alih-alih beban terkontrol maksimum. Selama pencetakan PLA normal, bed mungkin bersiklus pada daya parsial setelah mencapai suhu, tetapi selama pemanasan, bed dan hotend dapat berjalan 100% secara bersamaan. Jika PSU diukur hanya dari pembacaan smart plug saat pencetakan berlangsung, PSU dapat terlihat memadai padahal masih marginal selama pemanasan, penggunaan enclosure ABS, atau siklus pemulihan ruang dingin.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'rumus ukuran inti' },
        { value: '20-35%', label: 'cadangan praktis tipikal' },
        { value: '24V', label: 'arus lebih rendah dari 12V untuk watt yang sama' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jangan perlakukan watt PSU sebagai izin untuk membebani konektor',
      html: 'Catu daya 500 W tidak membuat setiap terminal, jejak PCB, konektor XT, jack barrel, atau blok sekrup aman untuk 500 W. Arus harus diperiksa pada level kabel dan konektor, terutama untuk heated bed dan pemanas ruang.',
    },
    { type: 'title', text: 'Beban Apa yang Harus Disertakan dalam Perhitungan Watt PSU?', level: 2 },
    {
      type: 'paragraph',
      html: 'Untuk printer FDM, heated bed biasanya merupakan beban daya dominan. Bed umum 220 x 220 mm mungkin sekitar 180-250 W, sedangkan bed lebih besar 300 x 300 mm dapat mencapai 300-500 W tergantung tegangan dan konstruksi. Bed AC berbeda karena daya pemanasnya tidak disuplai oleh PSU DC printer; dalam kasus itu, sertakan hanya elektronik kontrol DC, kipas, hotend, motor, dan arus kecil yang digunakan oleh input solid-state relay.',
    },
    {
      type: 'paragraph',
      html: 'Kartrid pemanas hotend adalah beban berikutnya yang jelas. Kartrid standar seringkali 30 W atau 40 W, hotend aliran tinggi sering menggunakan 50 W atau 60 W, dan beberapa pengaturan suhu tinggi menggunakan 80 W atau lebih. Kartrid dengan watt lebih tinggi tidak secara otomatis mengonsumsi daya itu secara konstan, tetapi PSU harus mendukung rating penuh karena firmware dapat memerintahkan duty cycle 100% selama pemanasan atau pemulihan setelah permintaan ekstrusi besar.',
    },
    {
      type: 'list',
      items: [
        'Watt heated bed dari spesifikasi bed atau tegangan dan resistansi terukur.',
        'Watt kartrid hotend dari rating-nya, bukan dari duty cycle rata-rata.',
        'Cadangan motor stepper berdasarkan jumlah motor dan pengaturan arus driver.',
        'Daya tambahan untuk pengontrol, kipas, Raspberry Pi, LED, probe, relai, dan papan toolhead.',
        'Margin keamanan untuk beban transien, penuaan kapasitor, panas enclosure, dan upgrade masa depan.',
      ],
    },
    {
      type: 'table',
      headers: ['Komponen', 'Rentang tipikal', 'Catatan ukuran'],
      rows: [
        ['Heated bed 220 mm', '180-250 W', 'Seringkali beban DC terbesar pada printer desktop.'],
        ['Heated bed 300 mm', '300-500 W', 'Periksa ukuran kabel dan jalur MOSFET bed dengan cermat.'],
        ['Kartrid hotend', '30-80 W', 'Gunakan rating kartrid, bukan daya rata-rata yang diamati.'],
        ['Motor stepper', '6-15 W masing-masing', 'Tergantung pada batas arus, tegangan, mode driver, dan arus penahan.'],
        ['Kipas dan elektronik', '10-60 W', 'Papan toolhead, LED, dan komputer papan tunggal bertambah dengan cepat.'],
      ],
    },
    { type: 'title', text: 'Kebutuhan Catu Daya 12V vs 24V', level: 2 },
    {
      type: 'paragraph',
      html: 'Untuk watt yang sama, printer 24 V membutuhkan setengah arus dari printer 12 V. Beban 360 W menarik 30 A pada 12 V tetapi hanya 15 A pada 24 V. Arus yang lebih rendah mengurangi drop tegangan pada kabel, mengurangi panas pada konektor, dan memberi sirkuit bed dan hotend lebih banyak ruang praktis. Inilah sebabnya banyak printer 3D modern dan papan upgrade lebih memilih 24 V untuk pemanas dan elektronik gerakan.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sistem 12V',
          description: 'Berguna untuk printer lama dan aksesori gaya otomotif, tetapi daya bed tinggi dapat memerlukan arus sangat tinggi.',
          points: ['Amper lebih tinggi untuk watt yang sama', 'Lebih sensitif terhadap resistansi konektor', 'Umum pada mesin era RepRap lama'],
        },
        {
          title: 'Sistem 24V',
          description: 'Disukai untuk banyak printer modern karena daya pemanas yang sama dikirim dengan arus lebih rendah.',
          highlight: true,
          points: ['Amper lebih rendah untuk watt yang sama', 'Lebih sedikit drop tegangan pada kabel', 'Lebih cocok untuk heated bed DC besar'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan arus sebagai pemeriksaan realitas kabel',
      html: 'Setelah menghitung watt yang dibutuhkan, bagi dengan tegangan untuk mendapatkan arus maksimum. Angka ampere tersebut adalah nilai yang penting untuk terminal PSU, sekering, sakelar, ukuran kabel, konektor bed, dan rating input papan.',
    },
    {
      type: 'proscons',
      title: 'Mengganti tegangan selama upgrade',
      items: [
        { pro: 'Beralih dari 12 V ke 24 V dapat mengurangi arus dan pemanasan konektor untuk daya bed yang sama.', con: 'Kipas, LED, pompa, dan beberapa papan kontrol mungkin perlu penggantian atau buck converter.' },
        { pro: 'Hotend dan bed 24 V sering mencapai suhu lebih cepat bila dispesifikasikan dengan benar.', con: 'Pemanas 12 V yang salah dipasangkan pada 24 V dapat menjadi sangat berbahaya karena kelebihan daya.' },
        { pro: 'Sistem driver dan gerakan sering berperilaku lebih baik dengan elektronik 24 V modern.', con: 'Setiap tegangan aksesori harus diaudit sebelum penyalaan pertama.' },
      ],
    },
    { type: 'title', text: 'Berapa Banyak Margin Keamanan yang Harus Dimiliki PSU Printer 3D?', level: 2 },
    {
      type: 'paragraph',
      html: 'Margin keamanan bukanlah kapasitas yang terbuang; ini adalah ruang operasi. Catu daya switching paling nyaman ketika tidak didorong secara permanen pada rating nameplate-nya dalam enclosure yang hangat. PSU printer yang dipasang di bawah ruang berpemanas, di samping rantai kabel bed, atau di dalam dasar yang berventilasi buruk dapat berjalan lebih panas daripada catu daya yang sama di bangku terbuka. Panas memperpendek umur kapasitor dan dapat memicu shutdown di bawah beban.',
    },
    {
      type: 'paragraph',
      html: 'Untuk printer desktop tipikal, 20% cadangan adalah minimum yang wajar ketika estimasi beban akurat. Untuk bed besar, hotend aliran tinggi, kipas ruang, pencahayaan LED, atau upgrade toolhead masa depan, 30-35% lebih nyaman. Untuk printer eksperimental, mesin suhu tinggi, atau build yang mungkin menambah hotend kedua, kontrol pemanasan ruang aktif, atau banyak aksesori, memilih satu langkah PSU standar di atas persyaratan yang dihitung biasanya merupakan pilihan teknik yang lebih tenang.',
    },
    {
      type: 'table',
      headers: ['Margin', 'Kasus penggunaan', 'Makna praktis'],
      rows: [
        ['10%', 'Beban yang diketahui ketat, rangka terbuka, PSU berkualitas', 'Hanya berfungsi ketika setiap beban dan jalur kabel sudah diverifikasi.'],
        ['20%', 'Printer desktop normal', 'Baseline yang baik untuk build stabil bergaya stok.'],
        ['30%', 'Bed yang di-upgrade, hotend aliran tinggi, elektronik tertutup', 'Kenyamanan termal lebih baik dan fleksibilitas masa depan.'],
        ['40%+', 'Printer format besar atau eksperimental', 'Berguna ketika asumsi beban mungkin berubah nanti.'],
      ],
    },
    {
      type: 'card',
      title: 'Mengapa PSU lebih besar tidak memaksa lebih banyak daya ke printer',
      html: 'Catu daya DC teregulasi menawarkan tegangan; beban yang terhubung menarik arus sesuai resistansi, duty cycle, dan elektronik kontrol. Catu daya 600 W pada printer yang membutuhkan 300 W tidak mendorong 600 W ke bed. Ia hanya memiliki kapasitas yang cukup untuk menyediakan arus tanpa beroperasi pada batasnya.',
    },
    { type: 'title', text: 'Konsumsi Daya Heated Bed dan Perilaku Termal', level: 2 },
    {
      type: 'paragraph',
      html: 'Heated bed adalah beban resistif, jadi daya teoritisnya dapat diperkirakan dari tegangan dan resistansi menggunakan <code>P = V^2 / R</code>. Jika bed 24 V memiliki resistansi 2,4 ohm, itu kira-kira bed 240 W. Daya nyata bervariasi dengan tegangan suplai, rugi kabel, resistansi MOSFET, dan suhu bed karena resistansi dapat berubah sedikit saat pemanas memanas.',
    },
    {
      type: 'paragraph',
      html: 'Bed yang bersiklus pada duty cycle 35% selama pencetakan PLA stabil masih dapat menuntut duty cycle 100% saat startup. Untuk ukuran PSU, gunakan rating pemanas penuh. Untuk estimasi biaya listrik, duty cycle rata-rata lebih berguna. Mencampur dua pertanyaan tersebut adalah sumber umum PSU yang kurang ukuran: konsumsi energi selama pencetakan dua jam tidak sama dengan kapasitas listrik sesaat.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pengecualian bed AC',
      html: 'Jika printer menggunakan heated bed AC bertenaga listrik utama, jangan sertakan watt bed dalam beban PSU DC. Sebagai gantinya, ukur kabel AC, sekering, relai, strain relief, grounding, dan perlindungan termal secara terpisah. PSU DC tetap memberi daya pada pengontrol, hotend, motor, dan aksesori.',
    },
    {
      type: 'list',
      items: [
        'Bagian bawah bed diisolasi: lebih sedikit kehilangan panas dan duty cycle rata-rata lebih rendah setelah pemanasan.',
        'Pelat aluminium tool tebal: pemanasan lebih lambat tetapi distribusi panas lebih merata.',
        'Pelat kaca besar: lebih banyak massa termal, seringkali pemanasan lebih lama pada watt yang sama.',
        'Ruangan dingin atau rangka terbuka: lebih banyak daya pemulihan diperlukan untuk mempertahankan suhu.',
      ],
    },
    { type: 'title', text: 'Hotend, Motor, Kipas, dan Beban Tambahan', level: 2 },
    {
      type: 'paragraph',
      html: 'Motor stepper sering ditaksir terlalu tinggi atau terlalu rendah karena perilaku listriknya tidak sesederhana menambahkan tegangan dan arus nameplate. Driver chopper modern mengatur arus belitan, dan daya yang diambil dari PSU tergantung pada pengaturan driver, kecepatan motor, pengurangan arus penahan, dan beban mekanis. Untuk ukuran PSU, cadangan praktis 8-15 W per stepper aktif seringkali memadai untuk printer desktop umum, tetapi motor arus sangat tinggi atau banyak motor Z layak mendapatkan perhitungan langsung dari konfigurasi driver.',
    },
    {
      type: 'paragraph',
      html: 'Beban tambahan mudah dilupakan karena setiap item kecil: kipas hotend, kipas pendingin bagian, kipas pengontrol, kipas sirkulasi ruang, LED, sensor filamen, probe, mainboard, layar, papan toolhead, Raspberry Pi, kamera, hub USB, dan rugi buck converter. Printer dengan komputer papan tunggal dan pencahayaan enclosure dapat menambah 20-40 W tanpa terasa seperti perubahan listrik besar.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Rating kontinu', definition: 'Beban yang dimaksudkan untuk diberikan oleh catu daya selama periode lama dalam kondisi pendinginan dan suhu yang ditentukan.' },
        { term: 'Beban puncak', definition: 'Permintaan jangka pendek yang bisa lebih tinggi dari beban rata-rata, seperti pemanasan atau pemulihan pemanas simultan.' },
        { term: 'Drop tegangan', definition: 'Tegangan yang hilang di kabel dan konektor karena konduktor nyata memiliki resistansi.' },
        { term: 'Duty cycle', definition: 'Persentase waktu pemanas terkontrol dinyalakan selama periode kontrol.' },
        { term: 'Cadangan', definition: 'Kapasitas ekstra di atas beban terhitung yang menjaga PSU menjauh dari batasnya.' },
      ],
    },
    {
      type: 'summary',
      title: 'Daftar periksa beban tambahan',
      items: [
        'Tambahkan semua kipas pada watt terukurnya atau tegangan kali arus.',
        'Sertakan komputer papan tunggal dan kamera jika ditenagai dari PSU printer.',
        'Cadangkan daya untuk strip LED, papan toolhead, relai, probe, dan rugi buck converter.',
        'Hitung ulang setelah menambahkan pemanas enclosure, ekstruder ekstra, atau pendinginan bagian arus tinggi.',
      ],
    },
    { type: 'title', text: 'Membaca Output Kalkulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Beban langsung adalah jumlah dari input bed, hotend, motor, dan tambahan sebelum cadangan. Nilai PSU yang dibutuhkan menambahkan margin keamanan yang dipilih. Nilai arus maksimum membagi persyaratan tersebut dengan tegangan sistem, sehingga menjawab pertanyaan kabel praktis: berapa ampere yang harus dibawa dengan aman oleh catu daya dan jalur input pada tegangan yang dipilih?',
    },
    {
      type: 'paragraph',
      html: 'Ukuran PSU yang direkomendasikan membulatkan ke atas ke kelas watt umum. Jika nilai yang dibutuhkan adalah 382 W, catu daya 400 W mungkin tampak cukup secara matematis, tetapi model 450 W atau 500 W mungkin lebih disukai bila memiliki pendinginan lebih baik, terminal lebih baik, sertifikasi keamanan yang diakui, atau rating kontinu yang lebih jujur. Watt label hanyalah satu bagian dari kualitas PSU.',
    },
    {
      type: 'table',
      headers: ['Output', 'Digunakan untuk', 'Tanda peringatan'],
      rows: [
        ['Watt dibutuhkan', 'Memilih kapasitas PSU', 'Nilai dalam beberapa watt dari label PSU.'],
        ['Arus maksimum', 'Pemeriksaan kabel, sekering, dan konektor', 'Arus melebihi rating papan atau terminal.'],
        ['Ukuran direkomendasikan', 'Daftar pendek belanja', 'PSU murah tanpa merek mengklaim watt tinggi dengan terminal kecil.'],
        ['Utilisasi', 'Estimasi kenyamanan termal', 'Beban kontinu di atas sekitar 80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Aturan praktis pembelian',
      html: 'Pilih ukuran PSU berkualitas pertama di atas persyaratan yang dihitung, lalu verifikasi tegangan output, rating arus, orientasi pendinginan, ventilasi enclosure, grounding pelindung, strategi sekering, dan rating konektor sebelum instalasi.',
    },
    { type: 'title', text: 'Kesalahan Umum Ukuran PSU dalam Upgrade Printer 3D', level: 2 },
    {
      type: 'list',
      items: [
        'Menggunakan watt smart-plug rata-rata alih-alih beban pemanas DC maksimum.',
        'Lupa bahwa sistem 12 V membutuhkan dua kali arus sistem 24 V pada watt yang sama.',
        'Menambahkan bed lebih besar tetapi mempertahankan konektor input papan dan ukuran kabel asli.',
        'Memasang kartrid hotend watt tinggi tanpa memeriksa MOSFET, sekering, dan perlindungan termal firmware.',
        'Menyuplai Raspberry Pi, kamera, LED, dan kipas dari printer tanpa menambahkan beban tambahan.',
        'Membeli PSU berdasarkan watt puncak yang diiklankan alih-alih rating kontinu dan sertifikasi keamanan.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Berhenti jika kabel atau konektor memanas',
      html: 'Kabel hangat, terminal kecokelatan, housing meleleh, reset sesekali, atau penurunan suhu bed selama gerakan bukanlah masalah tuning. Ini adalah gejala listrik yang memerlukan inspeksi sebelum mencetak lebih lanjut.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator memperkirakan kapasitas PSU; ia tidak mensertifikasi seluruh sistem listrik. Printer yang aman juga membutuhkan grounding yang benar, strain relief, sekering, ferrule yang sesuai, konektor crimp yang dinilai untuk arus aktual, perlindungan thermal runaway firmware, dan tata letak kabel yang memisahkan tegangan listrik dari elektronik tegangan rendah.',
    },
    {
      type: 'card',
      title: 'Kapan membagi catu daya',
      html: 'Printer besar terkadang menggunakan catu daya terpisah untuk bed, elektronik gerakan, dan aksesori. Membagi dapat mengurangi arus melalui satu papan dan menyederhanakan servis, tetapi ground, logika switching, sekering, dan perilaku berhenti darurat harus dirancang dengan sengaja.',
    },
    { type: 'title', text: 'Contoh Kerja: Printer Stok, Upgrade CoreXY, dan Bed Besar', level: 2 },
    {
      type: 'paragraph',
      html: 'Bed-slinger ringkas dengan bed 220 W, hotend 40 W, empat motor pada 10 W, dan 25 W elektronik memiliki beban langsung 325 W. Dengan cadangan 25%, kapasitas PSU yang dibutuhkan sekitar 406 W. Pada 24 V itu sekitar 16,9 A, jadi PSU 24 V berkualitas 450 W atau 500 W adalah target yang masuk akal tergantung pada tata letak konektor dan pendinginan.',
    },
    {
      type: 'paragraph',
      html: 'Upgrade CoreXY dengan bed 300 W, hotend aliran tinggi 60 W, lima motor pada 12 W, dan beban tambahan 45 W total 465 W sebelum margin. Dengan cadangan 30%, dibutuhkan sekitar 605 W, atau 25,2 A pada 24 V. Build itu termasuk dalam kelas 600-750 W, dan kabel bed harus diperlakukan sebagai jalur arus utama, bukan sebagai pemikiran belakangan.',
    },
    {
      type: 'paragraph',
      html: 'Printer format besar dengan bed DC 600 W, hotend 80 W, enam motor pada 14 W, dan beban tambahan 80 W mencapai 844 W sebelum margin. Dengan cadangan 35%, persyaratannya sekitar 1139 W. Pada titik itu, banyak pembangun mempertimbangkan bed AC atau arsitektur daya terpisah karena arus DC, kabel, sekering, dan manajemen panas menjadi kendala desain utama.',
    },
    {
      type: 'summary',
      title: 'Alur kerja ukuran akhir',
      items: [
        'Daftar setiap beban yang dapat berjalan selama pemanasan atau pemulihan.',
        'Hitung watt langsung, lalu tambahkan cadangan realistis.',
        'Konversi watt ke ampere pada tegangan sistem aktual.',
        'Pilih PSU kontinu berkualitas di atas hasilnya.',
        'Verifikasi kabel, konektor, sekering, rating papan, dan pendinginan sebelum menyalakan printer.',
      ],
    },
  ],
  faq: [
    {
      question: 'Berapa watt yang dibutuhkan catu daya printer 3D saya?',
      answer: 'Tambahkan heated bed, kartrid hotend, motor, elektronik, kipas, dan aksesori, lalu tambahkan cadangan keamanan. Banyak printer desktop 24 V yang di-upgrade berada antara 400 W dan 600 W, sedangkan bed besar dapat memerlukan lebih banyak lagi.',
    },
    {
      question: 'Apakah 24V lebih baik daripada 12V untuk PSU printer 3D?',
      answer: 'Untuk watt yang sama, 24 V menggunakan setengah arus 12 V. Arus lebih rendah biasanya berarti lebih sedikit drop tegangan dan lebih sedikit pemanasan konektor, tetapi semua pemanas, kipas, papan, dan aksesori harus kompatibel dengan tegangan yang dipilih.',
    },
    {
      question: 'Haruskah saya menyertakan heated bed dalam perhitungan PSU DC?',
      answer: 'Sertakan jika itu adalah heated bed DC yang ditenagai oleh PSU printer. Jangan sertakan bed AC listrik utama dalam watt PSU DC; ukur kabel listrik, relai, sekering, dan perlindungan keamanannya secara terpisah.',
    },
    {
      question: 'Margin keamanan apa yang harus saya gunakan untuk cadangan PSU?',
      answer: 'Gunakan setidaknya 20% untuk build yang dikenal normal. Gunakan 30-35% untuk bed yang di-upgrade, hotend aliran tinggi, elektronik tertutup, atau aksesori masa depan.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Masukkan beban pemanas', text: 'Tambahkan watt terukur dari heated bed dan kartrid hotend.' },
    { name: 'Tambahkan gerakan dan aksesori', text: 'Masukkan jumlah motor, cadangan per motor, kipas, papan, LED, dan beban tambahan lainnya.' },
    { name: 'Pilih tegangan dan margin', text: 'Pilih 12 V atau 24 V dan tetapkan margin keamanan yang sesuai dengan risiko build.' },
    { name: 'Periksa watt dan ampere', text: 'Gunakan watt yang dibutuhkan untuk pemilihan PSU dan ampere maksimum untuk pemeriksaan kabel, sekering, dan konektor.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Ukuran Catu Daya Printer 3D',
      description: 'Perkirakan watt dan arus PSU printer 3D dari beban bed, hotend, motor, tambahan, dan cadangan.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Berapa watt yang dibutuhkan catu daya printer 3D saya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tambahkan heated bed, kartrid hotend, motor, elektronik, kipas, dan aksesori, lalu tambahkan cadangan keamanan.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara menentukan ukuran catu daya printer 3D',
      step: [
        { '@type': 'HowToStep', text: 'Masukkan beban pemanas.' },
        { '@type': 'HowToStep', text: 'Tambahkan beban gerakan dan aksesori.' },
        { '@type': 'HowToStep', text: 'Pilih tegangan sistem dan margin keamanan.' },
        { '@type': 'HowToStep', text: 'Pilih PSU berkualitas di atas persyaratan yang dihitung.' },
      ],
    },
  ],
};
