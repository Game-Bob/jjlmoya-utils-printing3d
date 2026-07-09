import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = 'kalkulator-persen-berat-infill-3d';
const title = 'Kalkulator Persen Berat Infill Cetakan 3D';
const description =
  'Perkirakan berat bagian, filamen yang dihemat, dan biaya material saat mengubah persentase dan pola infill dari berat referensi infill 100%.';

const faqData = [
  {
    question: 'Bisakah saya memperkirakan berat cetakan 3D dari berat infill 100%?',
    answer:
      'Ya, tetapi perkiraan harus menjaga cangkang, dinding, lapisan atas, dan lapisan bawah tetap terpisah dari infill internal. Bagian tidak menjadi tanpa berat pada infill 0% karena perimeter luar masih menggunakan material.',
  },
  {
    question: 'Mengapa pola infill mengubah perkiraan berat?',
    answer:
      'Pola yang berbeda menciptakan panjang jalur alat yang berbeda pada kepadatan nominal yang sama. Pola garis dan konsentris biasanya lebih ringan, sementara sarang lebah, kubik, dan segitiga cenderung menambah panjang dinding internal lebih banyak.',
  },
  {
    question: 'Apakah berat slicer lebih akurat daripada kalkulator ini?',
    answer:
      'Slicer lebih akurat setelah model, nosel, lebar ekstrusi, jumlah dinding, lapisan atas, dan profil material diketahui. Kalkulator ini dirancang untuk perencanaan cepat sebelum melakukan slicing ulang banyak versi.',
  },
  {
    question: 'Berapa persentase cangkang yang harus saya gunakan?',
    answer:
      'Untuk banyak bagian FDM dekoratif atau berukuran sedang, 20-35% bagian cangkang adalah kisaran awal yang praktis. Bagian kecil, objek tipis, dan bagian dengan banyak lubang dapat memiliki bagian cangkang yang lebih tinggi.',
  },
];

const howToData = [
  {
    name: 'Mulai dari referensi infill 100%',
    text: 'Gunakan berat yang dilaporkan slicer Anda untuk model yang sama pada infill 100%, atau timbang cetakan referensi padat penuh yang diketahui.',
  },
  {
    name: 'Pilih infill target dan pola',
    text: 'Gerakkan penggeser infill dan pilih pola yang paling mendekati pengaturan slicer yang Anda rencanakan.',
  },
  {
    name: 'Sesuaikan asumsi cangkang dan limbah',
    text: 'Tingkatkan bagian cangkang untuk model tipis atau berat-perimeter, lalu tambahkan limbah untuk purge, skirt, brim, penyangga, dan awal gagal.',
  },
  {
    name: 'Baca penghematan berat dan biaya',
    text: 'Bandingkan perkiraan berat akhir dengan baseline infill 100% untuk memutuskan apakah penghematan material sebanding dengan pengorbanan kekakuan.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Masukan berat infill',
    resultsAriaLabel: 'Hasil perkiraan berat cetakan',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    currencyLabel: 'Mata uang',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    fullWeightLabel: 'Berat infill 100%',
    fullWeightHint: 'Gunakan nilai slicer untuk model yang sama pada kepadatan penuh.',
    infillLabel: 'Infill target',
    patternLabel: 'Pola infill',
    patternOptions: [
      { value: 'lines', label: 'Garis - jalur ringan' },
      { value: 'grid', label: 'Kisi - dasar slicer' },
      { value: 'triangles', label: 'Segitiga - sel kaku' },
      { value: 'gyroid', label: 'Gyroid - kisi halus' },
      { value: 'cubic', label: 'Kubik - kekakuan 3D' },
      { value: 'honeycomb', label: 'Sarang lebah - dinding padat' },
      { value: 'concentric', label: 'Konsentris - mengikuti kontur' },
    ],
    shellShareLabel: 'Bagian cangkang',
    shellShareHint: 'Dinding, lapisan atas, lapisan bawah, dan fitur padat yang tidak berskala dengan infill.',
    spoolPriceLabel: 'Harga filamen',
    wasteLabel: 'Limbah',
    estimatedWeightLabel: 'Perkiraan berat bagian',
    filamentSavedLabel: 'Filamen dihemat',
    materialCostLabel: 'Biaya material',
    costSavedLabel: 'Biaya dihemat',
    effectiveDensityLabel: 'Kepadatan efektif',
    shellLabel: 'Cangkang',
    infillCoreLabel: 'Inti infill',
    patternImpactLabel: 'Pengali pola',
    comparisonLabel: 'Perbandingan dasar',
    fullInfillLabel: 'Infill 100%',
    targetInfillLabel: 'Pengaturan target',
    insightLow: 'Infill sangat rendah dapat menghemat banyak filamen, tetapi permukaan atas, bos sekrup, klip, dan zona penahan beban mungkin memerlukan dinding tambahan atau pengubah lokal.',
    insightBalanced: 'Ini adalah zona perencanaan yang seimbang untuk banyak cetakan visual dan fungsional ringan: cangkang membawa bentuk sementara infill mengontrol kekakuan dan biaya.',
    insightHigh: 'Infill tinggi mempersempit celah penghematan dengan cepat. Pertimbangkan lebih banyak dinding, pola yang lebih kuat, atau pilihan material sebelum menggunakan infill padat di mana-mana.',
  },
  seo: [
    { type: 'title', text: 'Cara Kerja Kalkulator Persen Berat Infill Cetakan 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah <strong>kalkulator persen berat infill cetakan 3D</strong> memperkirakan berapa banyak plastik yang tersisa ketika model dicetak dengan kepadatan internal kurang dari 100%. Detail pentingnya adalah bahwa berat FDM bukan sekadar perkalian sederhana dari berat penuh dengan persentase infill. Model yang dicetak pada infill 20% biasanya tidak memiliki berat 20% dari versi padat penuh, karena dinding, lapisan atas, lapisan bawah, area padat kecil, brim, dan antarmuka penyangga masih mengonsumsi filamen. Kalkulator ini dimulai dengan berat yang diketahui atau dilaporkan slicer pada infill 100%, memisahkan bagian cangkang yang dapat dikonfigurasi, lalu menskalakan inti internal berdasarkan infill target dan perilaku pola.',
    },
    {
      type: 'paragraph',
      html: 'Metode ini dirancang untuk perbandingan cepat sebelum Anda menghabiskan waktu melakukan slicing ulang file berkali-kali. Jika braket PETG padat penuh diperkirakan 240 g, beralih ke 20% gyroid mungkin tidak menghasilkan bagian 48 g. Dengan bagian cangkang 28%, massa perimeter sudah sekitar 67 g sebelum kepadatan internal dihitung. Inti infill kemudian menambahkan material sesuai dengan kepadatan dan pengali pola yang dipilih. Hasilnya adalah perkiraan perencanaan yang lebih realistis daripada matematika infill linier sambil tetap cukup cepat untuk keputusan awal.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Bagian cangkang tipikal untuk banyak bagian FDM sedang', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Pengali kontur ringan untuk infill konsentris', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Pengali jalur padat untuk perencanaan sarang lebah', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Berat referensi digunakan sebagai dasar penghematan', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan profil slicer yang sama untuk referensi',
      html: '<p>Untuk perkiraan yang paling bersih, hasilkan berat infill 100% dengan nosel, lebar ekstrusi, jumlah dinding, lapisan atas, lapisan bawah, kepadatan material, dan pengaturan penyangga yang sama yang akan Anda gunakan untuk cetakan target. Mengubah pengaturan tersebut mengubah massa cangkang, sehingga perbandingan hanya infill menjadi kurang bermakna.</p>',
    },

    { type: 'title', text: 'Mengapa Berat Infill Tidak Linier', level: 2 },
    {
      type: 'paragraph',
      html: 'Istilah <em>persentase infill</em> terdengar seperti nilai kepadatan langsung, tetapi slicer menerapkannya hanya ke area internal yang tersisa setelah perimeter dan permukaan padat dibuat. Kubus sederhana dengan dua dinding dan enam lapisan atas mungkin memiliki volume internal yang besar, sehingga persentase infill sangat memengaruhi berat. Dudukan telepon tipis, rumah gear dengan banyak lubang, atau miniatur dengan anggota tubuh sempit mungkin memiliki begitu banyak geometri perimeter sehingga menurunkan infill menghasilkan penghematan yang lebih kecil dari yang diharapkan. Inilah mengapa kalkulator mengekspos <strong>bagian cangkang</strong> alih-alih menyembunyikannya.',
    },
    {
      type: 'table',
      headers: ['Tipe model', 'Perkiraan bagian cangkang', 'Artinya bagi penghematan'],
      rows: [
        ['Enklosur persegi besar', '15-25%', 'Sebagian besar massa adalah volume internal, sehingga infill mengubah berat secara signifikan.'],
        ['Figur dekoratif atau model organik', '25-45%', 'Banyak kurva dan area sempit menciptakan geometri berat-perimeter.'],
        ['Braket atau panel tipis', '35-60%', 'Dinding dan permukaan mendominasi; pengurangan infill mungkin menghemat lebih sedikit plastik.'],
        ['Klip mekanis kecil', '45-70%', 'Model mungkin hampir padat dari perimeter saja.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ketika perkiraan tampak terlalu berat',
      badge: 'Periksa bagian cangkang',
      html: '<p>Jika pengaturan infill 10% masih menghasilkan perkiraan berat tinggi, bagian cangkang mungkin besar. Itu bisa benar untuk bagian kecil atau tipis. Verifikasi jumlah dinding, ketebalan atas dan bawah, dan apakah model memiliki banyak pulau terpisah atau rusuk sempit.</p>',
    },
    {
      type: 'summary',
      title: 'Interpretasi praktis',
      items: [
        'Persentase infill hanya memengaruhi inti internal, bukan seluruh cetakan.',
        'Bagian dengan infill 0% masih memiliki dinding, kulit, jahitan, dan kadang fitur padat kecil.',
        'Referensi berat penuh, bagian cangkang, pilihan pola, dan margin limbah bersama-sama menghasilkan angka perencanaan yang lebih baik.',
      ],
    },

    { type: 'title', text: 'Pengali Berat Pola Infill', level: 2 },
    {
      type: 'paragraph',
      html: 'Dua cetakan sama-sama dapat diatur ke infill 25% dan tetap menggunakan jumlah filamen yang berbeda karena geometri jalur alat berubah. Pola garis dan konsentris sering menghasilkan jalur internal yang lebih ringan karena menghindari beberapa struktur persilangan. Kisi, segitiga, kubik, gyroid, dan sarang lebah menciptakan jumlah tumpang tindih, penguatan arah, dan panjang jalur yang berbeda. Kalkulator memodelkan ini dengan <strong>pengali pola</strong> kecil yang diterapkan pada inti internal, bukan pada seluruh bagian.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Garis dan konsentris',
          description: 'Berguna ketika berat minimum dan pencetakan cepat lebih penting daripada kekakuan seragam.',
          icon: 'mdi:format-line-spacing',
          points: ['Kepadatan jalur lebih rendah', 'Baik untuk bagian dekoratif', 'Kekuatan arah bisa tidak merata'],
        },
        {
          title: 'Kisi dan gyroid',
          description: 'Pilihan seimbang untuk cetakan visual dan fungsional umum di mana kekakuan penting.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Dasar slicer yang dapat diprediksi', 'Kompromi kekakuan-berat yang baik', 'Gyroid mendistribusikan beban secara merata'],
        },
        {
          title: 'Kubik, segitiga, sarang lebah',
          description: 'Pilihan perencanaan yang lebih berat yang dapat meningkatkan kekakuan tetapi mengurangi penghematan filamen.',
          icon: 'mdi:hexagon-outline',
          points: ['Lebih banyak panjang dinding internal', 'Kekakuan multi-arah yang lebih baik', 'Waktu cetak lebih lama adalah umum'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Kompromi pemilihan pola',
      items: [
        { pro: 'Pola lebih ringan mengurangi biaya material dan dapat mempersingkat waktu cetak.', con: 'Mereka dapat menciptakan arah yang lebih lemah atau dukungan permukaan atas yang lebih sedikit.' },
        { pro: 'Pola padat meningkatkan kekakuan bagian dan mengurangi lentur.', con: 'Mereka dapat mendekati biaya infill lebih tinggi tanpa menyelesaikan desain dinding yang lemah.' },
        { pro: 'Gyroid mendistribusikan beban secara merata ke banyak arah.', con: 'Ini dapat mencetak lebih lambat pada mesin dengan pengaturan akselerasi konservatif.' },
      ],
    },
    {
      type: 'message',
      title: 'Pengali pola adalah asumsi perencanaan',
      ariaLabel: 'Catatan pengali pola',
      html: '<p>Mesin slicer mengimplementasikan pola secara berbeda. Perlakukan pengali sebagai estimator awal, lalu konfirmasikan pekerjaan produksi penting dengan pratinjau slicer nyata dan laporan penggunaan material.</p>',
    },

    { type: 'title', text: 'Menghitung Penghematan Filamen dan Biaya', level: 2 },
    {
      type: 'paragraph',
      html: 'Perkiraan biaya material mengalikan gram akhir dengan harga spul per kilogram. Jika kalkulator memprediksi cetakan 126 g dan spul berharga $24 per kg, bagian plastiknya sekitar $3,02 sebelum waktu mesin, listrik, tenaga kerja, pengemasan, dan cetakan gagal. Biaya yang dihemat membandingkan model yang sama dengan baseline infill 100%, menggunakan persentase limbah yang sama. Ini berguna untuk penawaran, perencanaan batch, dan memutuskan apakah pengaturan infill yang lebih berat sepadan dengan material tambahan.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Gunakan persentase limbah untuk garis purge, skirt, brim, penyangga, rakit, perubahan warna, dan awal gagal pendek.',
        'Untuk prototipe tunggal, margin limbah 5-10% biasanya lebih realistis daripada nol.',
        'Untuk batch produksi dengan penyangga atau bahan abrasif, catat berat sisa dan gagal aktual selama beberapa pekerjaan.',
        'Saat membandingkan PLA, PETG, ABS, ASA, nilon, dan komposit terisi, gunakan harga spul untuk material yang tepat, bukan rata-rata generik.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Contoh: dari prototipe padat ke infill produksi',
      html: '<p>Prototipe infill 100% memiliki berat 240 g. Dengan bagian cangkang 28%, 20% gyroid, 6% limbah, dan filamen $24/kg, perkiraannya berada di kisaran ratusan rendah gram daripada 48 g. Perbedaan itu penting saat menawar 40 eksemplar: kesalahan kecil per bagian menjadi spul plastik utuh.</p>',
    },
    {
      type: 'table',
      headers: ['Masukan', 'Mengapa penting', 'Kesalahan umum'],
      rows: [
        ['Berat 100%', 'Menentukan baseline material maksimum.', 'Menggunakan jumlah dinding yang berbeda dari cetakan target.'],
        ['Infill target', 'Mengontrol kepadatan inti internal.', 'Menganggap infill 20% berarti 20% berat total bagian.'],
        ['Pola', 'Mengubah panjang jalur alat dan kekakuan.', 'Mengabaikan pola saat membandingkan prasetel slicer.'],
        ['Limbah', 'Menambahkan filamen nyata yang digunakan di luar bagian akhir.', 'Melupakan penyangga dan awal gagal.'],
      ],
    },

    { type: 'title', text: 'Memilih Infill untuk Penghematan Berat Tanpa Bagian Lemah', level: 2 },
    {
      type: 'paragraph',
      html: 'Penghematan berat hanya berharga jika bagian masih menjalankan fungsinya. Untuk model visual, properti pameran, bagian cosplay, dan penutup, infill rendah dengan lapisan atas yang cukup bisa sempurna. Untuk braket, perlengkapan, enklosur dengan sekrup, fitur jepret, dan bagian yang terpapar panas atau benturan, peningkatan terbaik seringkali lebih banyak dinding atau penguatan lokal daripada sekadar menaikkan infill global. Bagian dengan empat dinding dan 20% gyroid bisa lebih kuat di tempat yang tepat daripada bagian dengan dua dinding dan 50% infill.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Bagian cangkang', definition: 'Porsi dari berat padat penuh yang menjadi milik dinding, lapisan atas, lapisan bawah, dan geometri padat yang tak terhindarkan.' },
        { term: 'Infill nominal', definition: 'Persentase yang dipilih dalam slicer untuk area internal setelah cangkang dibuat.' },
        { term: 'Kepadatan efektif', definition: 'Perkiraan total kepadatan cetakan jadi setelah bagian cangkang, persentase infill, dan pengali pola digabungkan.' },
        { term: 'Margin limbah', definition: 'Filamen ekstra yang digunakan untuk material non-bagian seperti purge, brim, penyangga, tes, dan awal gagal.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jangan gunakan penghematan berat sebagai satu satunya kriteria desain',
      badge: 'Cetakan fungsional',
      html: '<p>Bagian yang dibebani melintasi garis lapisan, bagian dengan sisipan berulir, dan bagian dengan kompresi sekrup memerlukan pemikiran mekanis terpisah. Infill membantu, tetapi ketebalan dinding, orientasi, material, suhu, dan konsentrasi tegangan seringkali lebih penting daripada kepadatan saja.</p>',
    },
    {
      type: 'summary',
      title: 'Aturan keputusan cepat',
      items: [
        'Cetakan dekoratif: kurangi infill dulu, lalu verifikasi kualitas permukaan atas.',
        'Cetakan fungsional ringan: gunakan pola seimbang dan dinding yang cukup sebelum infill tinggi.',
        'Braket dan perlengkapan: perkuat lubang, sudut, dan jalur beban dengan pengubah lokal.',
        'Pekerjaan batch: konfirmasikan perkiraan akhir dengan slicer sebelum membeli material.',
      ],
    },

    { type: 'title', text: 'Kapan Mempercayai Kalkulator dan Kapan Melakukan Slicing Ulang', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkulator ini terbaik untuk perkiraan cepat, penawaran awal, pembelian material, dan membandingkan banyak opsi infill tanpa membuka slicer berulang kali. Ini bukan pengganti slicer ketika pengaturan dimensional berubah. Jika Anda mengubah diameter nosel, lebar ekstrusi, jumlah dinding, ketebalan atas, ketebalan bawah, lapisan adaptif, gaya penyangga, ironing, mode vas, atau kepadatan material, baseline 100% dan bagian cangkang harus diperbarui.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Gunakan kalkulator ketika model dan profil sebagian besar tetap dan Anda mengeksplorasi kepadatan atau pola.',
        'Lakukan slicing ulang ketika jumlah dinding, generasi penyangga, ukuran nosel, atau profil material berubah.',
        'Timbang bagian jadi ketika Anda memerlukan catatan biaya tingkat produksi atau perkiraan inventaris.',
        'Catat gram aktual untuk pekerjaan berulang; data nyata akan segera meningkatkan asumsi bagian cangkang Anda.',
      ],
    },
    {
      type: 'tip',
      title: 'Alur kerja yang andal untuk penawaran',
      html: '<p>Buat referensi slicer padat penuh, perkirakan beberapa opsi infill dengan kalkulator ini, pilih dua yang paling menjanjikan, lalu lakukan slicing ulang hanya dua kandidat akhir tersebut. Ini menjaga penawaran tetap cepat sambil tetap mendasarkan harga akhir pada laporan material spesifik slicer.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
