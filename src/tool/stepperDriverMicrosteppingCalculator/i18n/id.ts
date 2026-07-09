import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'kalkulator-microstepping-driver-motor-langkah-3d',
  title: 'Kalkulator Langkah per mm dan Microstepping untuk Motor Stepper',
  description: 'Hitung jumlah langkah tepat per mm (atau langkah per inci) dan resolusi mekanis teoretis untuk motor stepper printer 3D. Mendukung TMC2209, TMC2208, sabuk, dan sekrup pemandu.',
  ui: {
    title: 'Kalkulator Microstepping Driver Motor Stepper',
    presetsLabel: 'PRESET',
    presetBelt16: 'Sabuk GT2 & Katrol 16T (X/Y)',
    presetBelt20: 'Sabuk GT2 & Katrol 20T (X/Y)',
    presetZLead8: 'Sekrup Pemandu T8 Lead 8mm (Z)',
    presetZLead2: 'Sekrup Pemandu T8 Lead 2mm (Z)',
    unitSystemLabel: 'Sistem Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    configLabel: 'KONFIGURASI MOTOR DAN DRIVER',
    motorStepAngleLabel: 'Sudut Langkah Motor',
    driverMicrosteppingLabel: 'Microstepping Driver',
    transmissionModeLabel: 'Jenis Transmisi',
    transmissionBelt: 'Penggerak Sabuk',
    transmissionLeadScrew: 'Sekrup Pemandu / Batang Berulir',
    beltPitchLabel: 'Jarak Sabuk',
    pulleyTeethLabel: 'Gigi Katrol',
    leadScrewPitchLabel: 'Lead Sekrup Pemandu (Jarak per Putaran)',
    resultsLabel: 'KELUARAN YANG DIHITUNG',
    stepsPerUnitLabel: 'Konfigurasi Firmware (Langkah)',
    mechanicalResolutionLabel: 'Resolusi Teoretis',
    stepsPerUnitUnitMetric: 'langkah/mm',
    stepsPerUnitUnitImperial: 'langkah/inci',
    mechanicalResolutionUnitMetric: 'mikron/langkah',
    mechanicalResolutionUnitImperial: 'seperseribu/langkah',
    formulaLabel: 'RUMUS MATEMATIS',
    formulaStepsPerRevolution: 'Langkah/Putaran = 360 / Sudut Langkah',
    formulaMicrostepsPerRev: 'Langkah Mikro/Putaran = Langkah/Putaran * Langkah Mikro',
    formulaDistancePerRev: 'Jarak/Putaran = Gigi * Jarak (atau Lead Sekrup)',
    formulaStepsPerUnit: 'Langkah/Satuan = Langkah Mikro/Putaran / Jarak/Putaran',
    formulaResolution: 'Resolusi = Jarak/Putaran / Langkah Mikro/Putaran',
    explainResolutionLabel: 'Apa artinya ini?',
    explainResolutionText: 'Ini mewakili gerakan linier teoretis terkecil yang dapat dilakukan sumbu printer 3D Anda ketika driver memerintahkan satu langkah mikro tunggal.Nilai resolusi yang lebih rendah menunjukkan presisi pemosisian mekanis yang lebih halus.',
    copyButton: 'Salin Perintah Firmware',
    copiedButton: 'Disalin!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'gigi',
    stepAngle18: '1.8° (200 langkah/putaran)',
    stepAngle09: '0.9° (400 langkah/putaran)',
    stepAngle75: '7.5° (48 langkah/putaran)',
    stepAngle15: '15° (24 langkah/putaran)',
    microstep1: '1x (Langkah Penuh)',
    microstep2: '2x',
    microstep4: '4x',
    microstep8: '8x',
    microstep16: '16x',
    microstep32: '32x',
    microstep64: '64x',
    microstep128: '128x',
    microstep256: '256x',
  },
  seo: [
    {
      type: 'title',
      text: 'Panduan Kalibrasi Motor Stepper dan Konfigurasi Langkah per Milimeter di Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pada printer 3D konsumen dan profesional, kontrol gerakan presisi bergantung pada motor stepper, driver stepper, dan mekanisme transmisi linier. Motor stepper tidak berputar secara terus menerus; sebaliknya, mereka membagi satu putaran penuh menjadi sejumlah langkah diskrit yang tetap. Agar papan pengontrol printer 3D dapat menggerakkan kepala cetak atau alas cetak dengan jarak yang tepat, firmware harus mengetahui secara persis berapa banyak langkah motor (termasuk langkah mikro yang setara dengan satu unit jarak linier (milimeter atau inci). Nilai ini dikenal sebagai langkah per milimeter atau langkah per inci, dan merupakan pengaturan kritis yang disimpan dalam konfigurasi firmware seperti Marlin, Klipper, atau RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Jika konfigurasi ini sedikit saja salah, pergerakan fisik printer 3D tidak akan sesuai dengan instruksi digital yang dihasilkan oleh software slicer. Ketidaksesuaian ini menyebabkan ketidakakuratan dimensi pada objek cetakan, di mana bagian menjadi lebih besar atau lebih kecil dari yang diinginkan, lubang menjadi tidak sejajar, dan rakitan multi-bagian gagal menyatu. Memahami komponen fisik, karakteristik driver, dan rasio transmisi memungkinkan operator untuk menghitung nilai yang sempurna secara matematis daripada mengandalkan metode kalibrasi trial-and-error yang memasukkan kesalahan mekanis.',
    },
    {
      type: 'title',
      text: 'Perbandingan Spesifikasi Motor Stepper dan Atribut Mekanis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Motor stepper yang paling umum digunakan dalam pencetakan 3D adalah motor stepper hibrida dalam faktor bentuk NEMA 17. Motor-motor ini biasanya tersedia dalam dua variasi sudut langkah: 1,8 derajat per langkah dan 0,9 derajat per langkah. Motor stepper 1,8 derajat membutuhkan 200 langkah penuh untuk menyelesaikan satu putaran penuh 360 derajat. Motor stepper 0,9 derajat membutuhkan 400 langkah penuh untuk menyelesaikan putaran yang sama. Memilih di antara spesifikasi ini memengaruhi akurasi pemosisian, torsi maksimum, dan kebisingan operasional sistem pencetakan.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Motor Stepper 1,8 Derajat',
          description: 'Pilihan motor standar untuk sebagian besar printer 3D komersial. Menawarkan torsi yang kokoh pada kecepatan lebih tinggi dan hemat biaya.',
          points: [
            '200 langkah penuh per putaran',
            'Retensi torsi kecepatan tinggi yang lebih baik',
            'Persyaratan induktansi listrik yang lebih rendah',
            'Resolusi yang memadai untuk aplikasi FDM umum'
          ]
        },
        {
          title: 'Motor Stepper 0,9 Derajat',
          description: 'Pilihan motor presisi tinggi, populer untuk printer detail halus dan sistem ekstruder resolusi tinggi.',
          points: [
            '400 langkah penuh per putaran',
            'Resolusi mekanis dua kali lipat sebelum microstepping',
            'Kesalahan posisi berkurang dan getaran resonansi lebih rendah',
            'GGL balik lebih tinggi pada kecepatan tinggi mengurangi batas torsi'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Sementara motor 0,9 derajat menawarkan kemampuan pemosisian fisik ganda, ia memerlukan dua kali lebih banyak pulsa langkah dari mikrokontroler papan utama untuk mencapai kecepatan putaran yang sama. Pada platform pencetakan kecepatan tinggi yang berjalan pada mikrokontroler 8-bit lama, hal ini dapat memenuhi antrian pemrosesan dan menyebabkan kegagapan cetak atau batasan kecepatan. Pada kontroller 32-bit modern, keterbatasan ini jarang menjadi masalah, menjadikan motor 0,9 derajat sebagai peningkatan yang sangat baik untuk sumbu X dan Y di mana hasil akhir permukaan sangat penting.',
    },
    {
      type: 'title',
      text: 'Glosarium Terminologi Motor Stepper dan Driver',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Sudut Langkah',
          definition: 'Putaran sudut poros motor ketika satu urutan eksitasi kumparan langkah penuh terjadi, biasanya 1,8 atau 0,9 derajat.',
        },
        {
          term: 'Microstepping',
          definition: 'Metode yang dikendalikan oleh driver yang membagi satu langkah penuh menjadi sub-langkah yang lebih kecil dengan menyeimbangkan arus antara fase-fase motor, menghaluskan gerakan dan mengurangi getaran.',
        },
        {
          term: 'Jarak Sabuk',
          definition: 'Jarak antara pusat dua gigi yang berdekatan pada sabuk sinkron, biasanya 2,0 milimeter untuk sabuk GT2 yang digunakan dalam pencetakan 3D.',
        },
        {
          term: 'Lead Sekrup Pemandu',
          definition: 'Jarak linier yang ditempuh mur di sepanjang sekrup pemandu selama satu putaran penuh 360 derajat dari poros sekrup.',
        },
        {
          term: 'Torsi Penahan',
          definition: 'Jumlah torsi maksimum yang dapat diberikan motor pada poros stasioner ketika arus pengenal diterapkan pada kumparan.',
        },
        {
          term: 'Gaya Gerak Listrik Balik (GGL Balik)',
          definition: 'Tegangan yang dihasilkan oleh putaran kumparan motor di dalam medan magnet, yang melawan tegangan suplai dan membatasi kecepatan dan torsi maksimum.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Menghitung Langkah per Milimeter untuk Sabuk Bergigi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Untuk sumbu gerakan horizontal (biasanya X dan Y) dari printer 3D Cartesian, CoreXY, dan Delta, sabuk bergigi sinkron digunakan untuk mengubah gerakan rotasi dari motor stepper menjadi gerakan linier. Perhitungan mekanis sepenuhnya tergantung pada jarak sabuk dan jumlah gigi pada katrol penggerak yang dipasang ke poros motor. Profil gigi sabuk harus cocok dengan profil gigi katrol untuk mencegah serangan balik dan selip.',
    },
    {
      type: 'table',
      headers: ['Ukuran Katrol', 'Jenis Sabuk', 'Jarak Sabuk', 'Langkah/putaran (1,8°, 16x)', 'Langkah per mm (Metrik)', 'Langkah per Inci (Imperial)'],
      rows: [
        ['16 Gigi', 'GT2', '2,0 mm', '3200', '100,00 langkah/mm', '2540,00 langkah/in'],
        ['20 Gigi', 'GT2', '2,0 mm', '3200', '80,00 langkah/mm', '2032,00 langkah/in'],
        ['32 Gigi', 'GT2', '2,0 mm', '3200', '50,00 langkah/mm', '1270,00 langkah/in'],
        ['20 Gigi', 'GT3', '3,0 mm', '3200', '53,33 langkah/mm', '1354,67 langkah/in'],
        ['16 Gigi (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 langkah/mm', '5080,00 langkah/in'],
        ['20 Gigi (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 langkah/mm', '4064,00 langkah/in']
      ],
    },
    {
      type: 'tip',
      title: 'Pilihan Desain Praktis untuk Pemilihan Katrol',
      html: 'Memilih katrol 16 gigi daripada katrol 20 gigi meningkatkan resolusi mekanis sebesar 25 persen dan meningkatkan gaya linier yang diberikan pada gerbong. Namun, katrol yang lebih kecil memaksa sabuk bergigi untuk membelok di sekitar radius yang lebih rapat, yang dapat meningkatkan keausan sabuk seiring waktu dan memperkenalkan frekuensi getaran yang lebih tinggi. Untuk bangunan standar, katrol 20 gigi mewakili kompromi yang seimbang antara umur sabuk dan resolusi.',
    },
    {
      type: 'title',
      text: 'Realitas Microstepping: Kerugian Torsi dan Solusi Interpolasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Banyak operator percaya bahwa meningkatkan resolusi microstepping driver ke nilai tinggi seperti 64, 128, atau 256 akan meningkatkan akurasi printer 3D mereka secara tak terbatas. Ini adalah salah paham yang umum. Kenyataannya, torsi inkremental antara langkah mikro turun drastis seiring dengan meningkatnya pembagian microstepping. Arus listrik dibagi menjadi kurva sinus dan cosinus untuk memposisikan poros motor di antara kutub fisik. Jika gesekan eksternal atau beban pada sumbu melebihi torsi inkremental dari satu langkah mikro, poros motor tidak akan bergerak sampai beberapa pulsa langkah mikro terakumulasi.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Keterbatasan Torsi Microstepping Teoretis vs Fisik',
      html: 'Pada 16 langkah mikro, torsi inkremental per langkah mikro adalah sekitar 9,8 persen dari torsi penahan motor. Pada 256 langkah mikro, torsi inkremental turun menjadi hanya 0,6 persen dari torsi penahan. Setiap pengikatan mekanis kecil, ketidakseimbangan tegangan sabuk, atau gesekan gerbong akan dengan mudah mencegah gerakan fisik 1/256 langkah, hasrat bahwa microstepping asli yang tinggi tidak menjamin akurasi posisi nyata.',
    },
    {
      type: 'card',
      title: 'Fitur Interpolasi Driver Trinamic',
      html: 'Driver stepper modern seperti TMC2208, TMC2209, dan TMC5160 memecahkan masalah ini denga menerima perintah langkah pada resolusi 16 langkah mikro yang andal dan menginterpolasi langkah-langkah tersebut secara internal menjadi 256 langkah mikro sebelum menjalankan perubahan arus kumparan. Ini memberikan pengoperasin yang halus dan senyap dari 256 langkah mikro sambil mempertahankan torsi penahan yang andal dan overhead pemrosesan kontroller yang berkurang dari konfigurasi 16 langkah mikro. Dalam firmware, pertahankan konfigurasi Anda pada 16 langkah mikro dan biarkan driver menangangi interpolasi internal.',
    },
    {
      type: 'title',
      text: 'Menghitung Langkah per Milimeter untuk Sekrup Pemandu dan Batang Berulir Sumbu Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sumbu Z vertikal dari sebagian besar printer 3D desktop menggunakan sekrup pemandu atau batang berulir. Sekrup pemandu dirancang untuk transmisi daya dan memiliki profil ulir yang digerinda presisi yang meminimalkan serangan balik. Saat menghitung langkah per mm untuk sekrup pemandu, jarak ulir tidak boleh disamakan dengan lead. Lead adalah jarak linier sebenarnya yang ditempuh oleh mur sekrup pemandu selama satu putaran penuh 360 derajat sekrup. Lead dihitung dengan mengalikan jarak ulir dengan jumlah mulai ulir.',
    },
    {
      type: 'list',
      items: [
        'Sekrup pemandu mulai tunggal: Jarak ulir 2mm, jumlah mulai adalah 1. Lead adalah 2mm per putaran.',
        'Sekrup pemandu mulai ganda: Jarak ulir 2mm, jumlah mulai adalah 2. Lead adalah 4mm per putaran.',
        'Sekrup pemandu awal empat (T8x8 umum): Jarak ulir 2mm, jumlah mulai adalah 4. Lead adalah 8mm per putaran.',
        'Batang berulir metrik standar (mis. M8): Mulai tunggal. Lead sama dengan jarak metrik standar, yaitu 1,25mm per putaran.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Karena sekrup pemandu memiliki keuntungan mekanis dibandingkan sistem yang digerakkan sabuk, mereka mencapai nilai langkah per mm yang jauh lebih tinggi, menunjukkan nilai resolusi mekanis yang lebih kecil. Resolusi tinggi ini sangat penting untuk sumbu Z karena lapisan biasanya dicetak dengan kenaikan antara 0,1mm dan 0,3mm. Nilai langkah per mm yang lebih tinggi memungkinkan printer untuk menetapkan tinggi lapisan yang konsisten tanpa kesalahan pemosisian.',
    },
    {
      type: 'title',
      text: 'Ringkasan Langkah-langkah Kunci untuk Integrasi Driver dan Motor',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Langkah yang Dapat Ditindaklanjuti untuk Mengonfigurasi Firmware Printer Anda',
      items: [
        'Identifikasi sudut langkah motor dari lembar data pabrikan (biasanya 1,8 atau 0,9 derajat).',
        'Tentukan pengaturan microstepping driver yang dikonfigurasi melalui jumper fisik atau perintah UART perangkat lunak (16 direkomendasikan).',
        'Ukur atau cari jarak sabuk dan hitung gigi katrol untuk sumbu sabuk.',
        'Verikasi lead sekrup pemandu (jarak kali jumlah mulai) untuk sumbu Z.',
        'Masukkan parameter ini ke dalam kalkulator kami untuk mendapatkan nilai konfigurasi langkah/mm atau langkah/inci yang tepat.',
        'Tulis nilai yang dihitung ke file konfigura firmware Anda atau simpan menggunakan perintah terminal seperti M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Mengapa langkah/mm saya yang dihitung berbeda dari hasil kalibrasi manual saya?',
      answer: 'Langkah/mm yang dihitung secara matematis tepat berdasarkan geometri komponen fisik. Jika kalibrasi manual menyarankan nilai yang berbeda, biasanya karena operator mengukur filamen atau perjalanan sumbu dengan jangka sorong sementara permainan mekanis, peregangan sabuk, atau selipatan ekstruder memperkenalkan kesalahan. Anda harus selalu menggunakan nilai yang dihitung secara matematis untuk sumbu gerakan dan sebaliknya perbaiki masala mekanis yang mendasarinya.',
    },
    {
      question: 'Apa yang terjadi jika saya mengatur nilai microstepping terlalu tinggi di firmware?',
      answer: 'Mengatur microstepping ke 64, 128, atau 256 di firmware meningkatkan permintaan frekuensi pulsa pada papan kontrol Anda. Jika papan induk tidak dapat menghasilkan pulsa langkah cukup cepat, printer mungkin membeku, tersendat, atau membatasi kecepatan gerak maksimum. Sebaiknya gunakan 16 langkah mikro di firmware dengan interpolasi tingkat driver diaktifkan.',
    },
    {
      question: 'Bagaimana cara mengubah pengaturan langkah per mm pada printer 3D saya?',
      answer: 'Anda dapat mengubah nilai untuk sementara menggunakan perintah M92 diikuti oleh huruf sumbu dan nilainya (mis., M92 X80.00 Y80.00 Z400.00). Untuk membuat nilai ini permanen, kirim perintah M500 untuk menyimpannya ke EEPROM, or edit file Configuration.h di firmware Marlin dan flash ulang, atau edit file printer.cfg di Klipper.',
    },
    {
      question: 'Apa perbedaan antara jarak sabuk dan gigi katrol?',
      answer: 'Jarak sabuk adalah jarak antara dua gigi berurutan pada sabuk, diukur dari pusat ke pusat. Gigi katrol adalah jumlah total gigi fisik pada roda gigi yang terpasang pada poros motor. Mengalikan jumlah gigi dengan jarak memberikan total jarak linier yang ditempuh per putaran motor.',
    },
    {
      question: 'Bisakah saya menggunakan nilai microstepping yang berbeda untuk sumbu yang berbeda?',
      answer: 'Ya, Anda dapat mengkonfigurasi nilai microstepping yang berbeda untuk sumbu X, Y, Z, dan E. Misalnya, sangat umum untuk menjalankan X dan Y pada 16 langkah mikro, Z pada 16 langkah mikro, dan ekstruder pada 16 atau 32 langkah mikro tergantung pada rasio roda gigi dari rakitan ekstruder.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Tentukan Spesifikasi Motor dan Driver',
      text: 'Temukan sudut langkah motor Anda (biasanya 1,8 atau 0,9 derajat) dan nilai microstepping driver Anda (16 adalah standar).',
    },
    {
      name: 'Tentukan Detail Transmisi',
      text: 'Pilih antara penggerak sabuk (tentukan jarak sabuk dan gigi katrol) dan sekrup pemandu (tentukan lead sekrup).',
    },
    {
      name: 'Konfigurasikan Pengaturan Firmware',
      text: 'Masukkan nilai, pilih sistem satuan yang Anda inginkan, dan salin perintah konfigurasi langkah yang dihasilkan ke konfigurasi printer Anda.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mengapa langkah/mm yang saya dihitung berbeda dari hasil kalibrasi manual saya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Langkah/mm yang dihitung secara matematis didasarkan pada geometri komponen fisik. Kalibrasi manual sering menimbulkan kesalahan karena tegangan sabuk atau kompresi filamen.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Microstepping Driver Motor Stepper',
      description: 'Hitung nilai konfigurasi langkah dan batas resolusi fisik untuk motor dan driver printer 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara menghitung langkah per mm motor stepper',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Tentukan Spesifikasi Motor dan Driver',
        },
        {
          '@type': 'HowToStep',
          text: 'Tentukan Detail Transmisi',
        },
        {
          '@type': 'HowToStep',
          text: 'Konfigurasikan Pengaturan Firmware',
        },
      ],
    },
  ],
};