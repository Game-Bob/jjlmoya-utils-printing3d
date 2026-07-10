import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'kalkulator-biaya-resin-nyata-sla-dlp';
const title = 'Kalkulator Biaya Resin Nyata untuk Cetakan SLA dan DLP';
const description = 'Hitung biaya resin teoretis dan nyata dengan konversi densitas, volume slicer, dan koreksi limbah 10 hingga 15 persen untuk komponen SLA dan DLP yang kompleks.';

const faqData = [
  {
    question: 'Mengapa biaya resin nyata lebih tinggi daripada biaya slicer?',
    answer: 'Slicer biasanya hanya melaporkan resin yang diawetkan bersih pada model dan penyangga. Ini tidak selalu memperhitungkan resin yang tertinggal di platform cetak, terperangkap di dalam dinding berongga, kehilangan karena pencucian, penyangga yang gagal, atau residu yang tidak dapat dituang kembali dengan bersih.',
  },
  {
    question: 'Haruskah saya memasukkan gram atau mililiter?',
    answer: 'Gunakan apa yang diekspor oleh slicer Anda. Jika melaporkan dalam gram, masukkan densitas resin dari botol atau lembar teknis sehingga kalkulator dapat mengonversi massa menjadi volume sebelum menghitung harga cetakan.',
  },
  {
    question: 'Faktor kompleksitas mana yang harus saya gunakan?',
    answer: 'Gunakan rendah untuk bagian padat dengan penyangga sederhana, sedang untuk miniatur tipikal dan bagian resin fungsional, dan tinggi untuk bagian berongga, penyangga padat, rongga, dan bagian yang menahan resin cair setelah pencetakan.',
  },
  {
    question: 'Apakah ini termasuk alkohol, sarung tangan, filter, atau waktu mesin?',
    answer: 'Tidak. Alat ini mengisolasi biaya material resin. Bahan habis pakai, tenaga kerja, energi pasca-pengeringan, kegagalan, dan depresiasi mesin harus ditambahkan dalam penawaran pekerjaan yang lebih luas.',
  },
];

const howToData = [
  {
    name: 'Masukkan data botol',
    text: 'Tambahkan harga bersih botol, volume nominal dalam mililiter, dan densitas yang tertera pada lembar data atau label resin.',
  },
  {
    name: 'Tempel penggunaan slicer',
    text: 'Masukkan penggunaan resin model yang diekspor oleh Lychee, Chitubox, PrusaSlicer, atau slicer lainnya, lalu pilih gram atau mililiter.',
  },
  {
    name: 'Pilih kompleksitas',
    text: 'Pilih kompleksitas rendah, sedang, atau tinggi untuk menerapkan koreksi limbah 10, 12,5, atau 15 persen pada volume slicer.',
  },
  {
    name: 'Bandingkan biaya teoretis dan nyata',
    text: 'Gunakan biaya teoretis untuk perbandingan slicer dan biaya nyata yang telah dikoreksi untuk penawaran, pengelompokan batch, dan perencanaan stok resin.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Botol resin',
    modelPanel: 'Model slicer',
    resultPanel: 'Biaya resin nyata',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    currencyLabel: 'Mata uang',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
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
    bottlePriceLabel: 'Harga botol',
    bottleVolumeLabel: 'Volume botol',
    resinPresetLabel: 'Prasetel resin',
    resinPresetOptions: [
      { label: 'Kustom / densitas manual', density: '' },
      { label: 'Resin standar generik - 1,10 g/cm3', density: '1.10' },
      { label: 'Resin cuci air generik - 1,08 g/cm3', density: '1.08' },
      { label: 'Resin mirip ABS generik - 1,10 g/cm3', density: '1.10' },
      { label: 'Resin tangguh generik - 1,12 g/cm3', density: '1.12' },
      { label: 'Resin fleksibel generik - 1,05 g/cm3', density: '1.05' },
      { label: 'Resin suhu tinggi generik - 1,15 g/cm3', density: '1.15' },
      { label: 'Resin cor generik - 1,12 g/cm3', density: '1.12' },
      { label: 'Resin isi keramik generik - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Densitas resin (g/cm3)',
    modelAmountLabel: 'Jumlah slicer',
    unitLabel: 'Satuan jumlah',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Kompleksitas bagian',
    lowComplexity: 'Rendah',
    mediumComplexity: 'Sedang',
    highComplexity: 'Tinggi',
    lowHint: 'Bagian padat, penyangga ringan, +10%',
    mediumHint: 'Pekerjaan resin tipikal, +12,5%',
    highHint: 'Bagian berongga atau penyangga padat, +15%',
    theoreticalCostLabel: 'Biaya slicer',
    realCostLabel: 'Biaya nyata',
    wasteCostLabel: 'Koreksi limbah',
    correctedVolumeLabel: 'Volume terkoreksi',
    costPerMlLabel: 'Biaya per ml',
    bottlePrintsLabel: 'Cetakan per botol',
    savedSettingsLabel: 'Faktor limbah',
    hollowPartTip: 'Bagian berongga dengan lubang drainase dapat melebihi 15 persen limbah karena resin tertinggal di dinding dalam, rongga, penyangga, dan dalam proses pencucian.',
    conversionLabel: 'Volume bersih slicer',
    netFromSlicerLabel: 'bersih dari slicer',
    persistenceNote: 'Harga botol, volume botol, dan densitas disimpan secara lokal di browser ini.',
  },
  seo: [
    {
      type: 'title',
      text: 'Mengapa biaya resin SLA dan DLP memerlukan koreksi limbah',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jumlah resin yang ditampilkan oleh slicer adalah titik awal yang berguna, tetapi tidak sama dengan jumlah resin yang hilang dari botol selama pencetakan nyata. Pencetakan SLA, MSLA, LCD, dan DLP semuanya menggunakan wadah berisi fotopolimer cair. Bagian tersebut mengeras lapis demi lapis, tetapi resin yang tidak mengeras masih melapisi model, penyangga, platform cetak, film wadah, dan rongga internal yang terbuka ke kolam resin. Kalkulator yang mengalikan volume slicer dengan harga per mililiter botol memberikan angka teoretis yang bersih. Namun, kutipan bengkel membutuhkan angka yang telah dikoreksi.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator ini memisahkan <strong>biaya slicer</strong> dari <strong>biaya resin nyata</strong>. Biaya slicer adalah resin bersih yang dilaporkan oleh perangkat lunak. Biaya nyata menerapkan faktor limbah terkendali sebesar 10 hingga 15 persen. Kisaran ini sengaja dibuat sempit: cukup tinggi untuk mencakup kerugian penanganan resin yang umum, tetapi tidak terlalu tinggi sehingga menyembunyikan kegagalan, tenaga kerja, alkohol, sarung tangan, filter, atau pasca-pengeringan di bawah garis material. Hasilnya adalah biaya material variabel yang praktis untuk satu cetakan atau batch.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Koreksi rendah untuk bagian padat dan penyangga ringan' },
        { value: '12,5%', label: 'Koreksi default untuk pekerjaan resin normal' },
        { value: '15%', label: 'Koreksi tinggi untuk rongga dan penyangga padat' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Jangan campur biaya material dengan biaya pekerjaan',
      html: 'Angka yang dikembalikan di sini hanya material resin. Harga jual lengkap juga harus mencakup cetakan gagal, alkohol pembersih, sarung tangan nitril, tisu, filter, waktu pasca-pengeringan, kemasan, keausan mesin, waktu desain, dan margin.',
    },
    {
      type: 'title',
      text: 'Rumus di balik kalkulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Langkah pertama adalah harga botol per mililiter: <code>biaya_per_ml = harga_botol / volume_botol_ml</code>. Botol 1000 ml yang dibeli seharga 42 EUR memiliki biaya dasar 0,042 EUR per ml. Jika slicer mengatakan bahwa miniatur menghabiskan 38 ml, biaya resin teoretis adalah 38 x 0,042, atau 1,60 EUR. Angka itu berguna untuk membandingkan orientasi, pelubangan, strategi penyangga, dan batch di dalam slicer, tetapi mengasumsikan bahwa setiap mililiter yang dilaporkan oleh slicer adalah satu-satunya resin yang dikonsumsi.',
    },
    {
      type: 'paragraph',
      html: 'Langkah kedua menerapkan volume terkoreksi: <code>volume_nyata = volume_slicer x (1 + faktor_limbah)</code>. Dengan faktor default 12,5 persen, model 38 ml menjadi 42,75 ml. Biaya material nyata menjadi 42,75 x 0,042 EUR, atau 1,80 EUR. Perbedaannya kecil pada satu model kecil, tetapi menjadi terlihat saat mengutip satu nampan miniatur, model gigi, master perhiasan, prototipe teknik, atau perlengkapan produksi.',
    },
    {
      type: 'table',
      headers: ['Volume slicer', 'Biaya botol', 'Faktor', 'Biaya teoretis', 'Biaya nyata'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan volume batch, bukan volume bagian, untuk produksi massal',
      html: 'Jika Anda mengisi platform cetak dengan banyak salinan, hitung dari volume slicer untuk seluruh platform. Menara penyangga, struktur penyangga bersama, dan perubahan orientasi dapat membuat batch lebih efisien daripada mengalikan satu bagian terisolasi dengan jumlah salinan.',
    },
    {
      type: 'title',
      text: 'Memilih faktor kompleksitas yang tepat',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Kompleksitas rendah',
          description: 'Gunakan 10 persen untuk bagian padat, braket sederhana, potongan kalibrasi, buah catur, dan model dengan sedikit penyangga.',
          points: ['Sedikit retensi internal', 'Kepadatan penyangga rendah', 'Mudah menetes kembali ke wadah'],
        },
        {
          title: 'Kompleksitas sedang',
          description: 'Gunakan 12,5 persen untuk miniatur normal, model gigi, bagian tabletop, dan potongan fungsional dengan penyangga sedang.',
          points: ['Kehilangan pasca-pemrosesan tipikal', 'Beberapa resin pada penyangga', 'Faktor kutipan default yang baik'],
          highlight: true,
        },
        {
          title: 'Kompleksitas tinggi',
          description: 'Gunakan 15 persen untuk cangkang berongga, rongga, hutan penyangga padat, struktur kisi, dan bagian yang meninggalkan residu berat setelah pengeringan.',
          points: ['Lebih banyak cairan terperangkap', 'Lebih banyak kehilangan pencucian', 'Ketidakpastian penanganan lebih tinggi'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Faktor kompleksitas bukanlah hukuman untuk slicing yang buruk. Ini adalah koreksi untuk bagaimana resin cair berperilaku. Balok padat sederhana yang dimiringkan dengan benar dapat mengering hampir sepenuhnya setelah beberapa menit. Patung berongga dengan lubang drainase kecil dapat mempertahankan lapisan resin di dalam dinding, di sekitar penyangga, dan di dekat cangkir hisap. Basis penyangga padat juga menahan resin di antara pilar. Bahkan ketika Anda membiarkan bagian tersebut menetes di atas wadah, resin yang mencapai wadah pencuci, sarung tangan, tisu, dan filter adalah bagian dari material nyata yang dikonsumsi oleh pekerjaan.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ketika 15 persen tidak cukup',
      html: 'Jika model berongga memiliki drainase yang buruk, rongga buta, penyangga internal tebal, atau interior bertekstur, limbah dapat melebihi 15 persen. Dalam kasus itu, anggap kalkulator ini sebagai garis dasar resin dan tambahkan tunjangan risiko terpisah untuk kutipan.',
    },
    {
      type: 'summary',
      title: 'Pemilihan faktor cepat',
      items: [
        'Pilih 10 persen ketika model padat, kompak, dan mudah dikeringkan.',
        'Pilih 12,5 persen ketika Anda tidak yakin atau mencetak nampan campuran.',
        'Pilih 15 persen ketika bagian berongga, banyak penyangga, atau secara geometris berantakan.',
        'Tambahkan tunjangan kegagalan terpisah saat mencetak resin baru, orientasi baru, atau bagian klien yang rapuh.',
      ],
    },
    {
      type: 'title',
      text: 'Menggunakan densitas saat slicer melaporkan dalam gram',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Banyak slicer dapat melaporkan penggunaan resin dalam mililiter, gram, atau keduanya. Botol resin biasanya dijual berdasarkan volume nominal, umumnya 500 ml, 1000 ml, atau 1 liter. Jika slicer mengekspor dalam gram, kalkulator mengonversi massa ke volume menggunakan densitas: <code>volume_ml = gram / densitas</code>. Densitas resin biasanya ditulis dalam g/cm3, dan 1 cm3 sama dengan 1 ml. Resin dengan densitas 1,10 g/cm3 berarti 110 g kira-kira setara dengan 100 ml.',
    },
    {
      type: 'table',
      headers: ['Massa slicer', 'Densitas', 'Volume terkonversi', 'Mengapa itu penting'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Perkiraan resin standar umum'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Densitas lebih rendah berarti lebih banyak volume'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Resin berisi keramik bisa lebih padat'],
      ],
    },
    {
      type: 'tip',
      title: 'Temukan densitas di lembar data teknis',
      html: 'Gunakan katalog prasetel untuk resin umum, lalu perlakukan input densitas sebagai sumber kebenaran akhir. Jika resin, warna, atau batch Anda berbeda dari prasetel, timpa bidang dengan nilai dari lembar data teknis pabrikan. Jangan asumsikan semua resin adalah 1,00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Densitas', definition: 'Massa per satuan volume. Dalam penetapan biaya resin, ini memungkinkan Anda mengonversi gram dari slicer menjadi mililiter dari botol.' },
        { term: 'Biaya teoretis', definition: 'Volume bersih slicer dikalikan dengan biaya botol per mililiter, sebelum koreksi limbah.' },
        { term: 'Volume terkoreksi', definition: 'Volume model setelah menambahkan faktor limbah yang dipilih sebesar 10, 12,5, atau 15 persen.' },
        { term: 'Lubang drainase', definition: 'Sebuah lubang pada bagian resin berongga yang memungkinkan resin yang tidak mengeras meninggalkan bagian dalam sebelum pencucian dan pengeringan.' },
      ],
    },
    {
      type: 'title',
      text: 'Mengapa cetakan resin berongga seringkali lebih mahal dari perkiraan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Melubangi model besar dapat mengurangi volume resin yang diawetkan secara dramatis, tetapi tidak membuat cetakan bebas dari biaya tersembunyi. Dinding berongga membutuhkan lubang drainase, geometri internal harus dapat dicuci, dan resin yang tidak mengeras yang terperangkap di dalam model dapat bocor kemudian, meretakkan bagian, atau mengganggu pengeringan akhir. Slicer mungkin menunjukkan volume bersih yang jauh lebih rendah setelah pelubangan, tetapi proses penanganan menjadi lebih sensitif. Itulah mengapa kompleksitas tinggi menggunakan 15 persen secara default.',
    },
    {
      type: 'proscons',
      title: 'Pelubangan dan kontrol biaya',
      items: [
        { pro: 'Model pajangan besar dapat menggunakan lebih sedikit resin yang diawetkan.', con: 'Drainase buruk dapat menyimpan resin cair di dalam bagian.' },
        { pro: 'Gaya kupas yang lebih rendah dapat meningkatkan keberhasilan pada penampang besar.', con: 'Lubang tambahan, sumbat, dan waktu pembersihan dapat meningkatkan tenaga kerja.' },
        { pro: 'Model yang lebih ringan lebih mudah dikirim dan dipasang.', con: 'Dinding tipis dapat gagal jika ketebalan dinding dan eksposur tidak disetel.' },
      ],
    },
    {
      type: 'card',
      title: 'Aturan praktis cetakan berongga',
      html: 'Jika bagian berongga keluar dari printer dan masih menetes setelah pengeringan normal, gunakan faktor tinggi dan periksa tata letak drainase Anda. Jika masih bocor setelah pencucian, masalahnya bukan hanya biaya; ini bisa menjadi masalah kualitas dan keselamatan karena resin yang tidak mengeras tetap berada di dalam objek.',
    },
    {
      type: 'title',
      text: 'Membaca perkiraan slicer tanpa underquoting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer, dan slicer resin lainnya memperkirakan penggunaan resin dari mesh, penyangga, pelubangan, dan terkadang profil resin. Perkiraan ini cukup baik untuk membandingkan versi pekerjaan yang sama. Perkiraan ini lebih lemah sebagai kutipan akhir karena tidak mengetahui alur kerja Anda. Bengkel yang menyaring resin setelah setiap pekerjaan kehilangan jumlah yang berbeda dibandingkan dengan hobiis yang menyimpan resin yang sama di wadah. Pengguna yang mencuci dalam dua tahap IPA kehilangan jumlah yang berbeda dibandingkan dengan yang menggunakan stasiun cuci tertutup dan membiarkan bagian menetes sepenuhnya sebelum memindahkannya.',
    },
    {
      type: 'list',
      items: [
        'Masukkan perkiraan pelat penuh setelah penyangga, bukan volume mesh asli tanpa penyangga.',
        'Gunakan mata uang yang sama untuk harga botol dan kutipan akhir; kalkulator dapat mengonversi harga botol yang terlihat antara mata uang umum dengan faktor pertukaran perkiraan.',
        'Perbarui harga botol saat membeli resin khusus, karena resin cor, fleksibel, gigi, dan suhu tinggi dapat berbiaya beberapa kali lipat lebih mahal dari resin standar.',
        'Gunakan konversi densitas ketika massa slicer dan volume botol tidak menggunakan satuan yang sama.',
        'Pisahkan tingkat kegagalan, terutama saat mencetak miniatur rapuh, cangkang gigi tipis, atau strategi penyangga baru.',
      ],
    },
    {
      type: 'message',
      title: 'Kebiasaan mengutip yang lebih baik',
      html: 'Simpan data botol resin umum Anda, tempel perkiraan slicer, pilih kompleksitas, dan catat kedua angka tersebut. Biaya teoretis menjelaskan perkiraan slicer; biaya nyata melindungi inventaris material Anda.',
    },
    {
      type: 'title',
      text: 'Apa yang tidak termasuk dalam kalkulator ini',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cetakan resin memiliki lebih banyak biaya daripada resin. Alat ini sengaja berfokus pada konsumsi resin variabel karena itu adalah angka yang paling sering diremehkan saat membandingkan output slicer dengan penggunaan botol nyata. Ini tidak termasuk penggantian alkohol, deterjen, pengolahan air, tisu, sarung tangan sekali pakai, keausan film FEP atau pelepas, penuaan layar LCD, depresiasi printer, listrik, waktu pasca-pengeringan, pengamplasan, priming, pelepasan penyangga, kemasan, atau biaya pasar.',
    },
    {
      type: 'table',
      headers: ['Item biaya', 'Termasuk di sini?', 'Di mana memperhitungkannya'],
      rows: [
        ['Resin cair yang digunakan oleh cetakan', 'Ya', 'Kalkulator ini'],
        ['Residu resin dan limbah penanganan normal', 'Ya', 'Faktor kompleksitas'],
        ['Cetakan gagal', 'Tidak', 'Tambahkan tunjangan kegagalan berdasarkan material dan risiko model'],
        ['IPA, sarung tangan, handuk, filter', 'Tidak', 'Baris bahan habis pakai'],
        ['Pe lepasan penyangga dan pengamplasan', 'Tidak', 'Baris tenaga kerja atau penyelesaian'],
        ['Depresiasi printer', 'Tidak', 'Tarif mesin per jam'],
      ],
    },
    {
      type: 'summary',
      title: 'Alur kerja biaya resin yang andal',
      items: [
        'Hitung harga per mililiter dari botol yang benar-benar Anda beli.',
        'Konversi gram ke mililiter dengan densitas resin saat diperlukan.',
        'Gunakan output slicer setelah penyangga dan pelubangan.',
        'Terapkan koreksi 10 hingga 15 persen berdasarkan geometri dan kehilangan penanganan.',
        'Pisahkan kegagalan, tenaga kerja, bahan habis pakai, dan margin dari angka material resin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
