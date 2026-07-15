import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'kalkulator-biaya-pasca-cetak-3d';
const title = 'Kalkulator Biaya Pasca Cetak 3D';
const description =
  'Estimasi biaya finishing manual, pelepasan support, pengamplasan, pengecatan, pekerjaan lain, bahan habis pakai, dan biaya pasca-cetak yang disesuaikan dengan mata uang untuk komponen cetak 3D.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung biaya pasca-cetak 3D?',
    answer:
      'Jumlahkan semua menit finishing manual, kalikan totalnya dengan tarif upah per jam dibagi 60, lalu tambahkan biaya bahan habis pakai. Kalkulator ini juga menampilkan porsi biaya dari setiap fase finishing.',
  },
  {
    question: 'Apakah bahan habis pakai perlu dimasukkan ke dalam biaya finishing manual?',
    answer:
      'Ya. Amplas, cat dasar pengisi, cat, sarung tangan, selotip masking, IPA, cairan pembersih resin, lap, dan keausan alat kecil bisa cukup signifikan untuk mengubah penawaran harga untuk komponen yang sudah selesai.',
  },
  {
    question: 'Apakah konversi mata uang mengubah rumus biaya?',
    answer:
      'Tidak. Mata uang hanya mengubah skala tampilan angka. Rumus tenaga kerja tetap sama: menit dikalikan tarif per jam dibagi 60, ditambah bahan habis pakai.',
  },
  {
    question: 'Tarif per jam berapa yang harus digunakan untuk tenaga kerja cetak 3D?',
    answer:
      'Gunakan tarif tenaga kerja bengkel yang sudah mencakup semua beban, bukan hanya gaji bersih. Sertakan upah, tunjangan, waktu tidak tertagih yang dibayar, pengawasan, dan tingkat keahlian yang diperlukan untuk finishing kosmetik.',
  },
];

const howToData = [
  { name: 'Masukkan menit finishing', text: 'Tambahkan waktu pelepasan support, pengamplasan, pengecatan, dan pekerjaan manual lainnya dalam menit.' },
  { name: 'Tetapkan tarif dan bahan habis pakai', text: 'Masukkan tarif finishing per jam dan biaya langsung bahan habis pakai dalam mata uang yang dipilih.' },
  { name: 'Pilih mata uang dan faktor', text: 'Gunakan pemilih mata uang untuk simbol dan faktor konversi opsional untuk penyesuaian penawaran.' },
  { name: 'Salin hasilnya', text: 'Gunakan tombol salin untuk menempelkan total, tenaga kerja, bahan habis pakai, dan menit ke dalam dokumen penawaran.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'kalkulator biaya pasca-cetak 3D',
    'estimasi biaya tenaga kerja cetak 3D',
    'biaya finishing manual cetak 3D',
    'kalkulator tarif per jam pasca-cetak',
  ],
  inLanguage: 'id',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input biaya pasca-cetak',
    resultsAriaLabel: 'Hasil biaya pasca-cetak',
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
    currencyOptionSeparator: ' - ',
    supportLabel: 'Pelepasan support',
    sandingLabel: 'Pengamplasan',
    paintingLabel: 'Pengecatan',
    otherLabel: 'Pekerjaan lainnya',
    hourlyRateLabel: 'Tarif per jam',
    consumablesLabel: 'Bahan habis pakai',
    conversionFactorLabel: 'Faktor konversi',
    conversionFactorUnit: 'x',
    conversionHint: 'Biarkan di angka 1 jika tarif sudah dimasukkan dalam mata uang lokal; ubah untuk menerapkan pengali penawaran global.',
    minutesUnit: 'mnt',
    hourUnit: 'j',
    rateUnitSeparator: '/',
    totalLabel: 'Total pasca-cetak',
    laborLabel: 'Tenaga kerja',
    consumablesBreakdownLabel: 'Bahan habis pakai',
    timeLabel: 'Waktu manual',
    effectiveRateLabel: 'Tarif efektif',
    breakdownLabel: 'Porsi biaya per fase finishing',
    copyLabel: 'Salin hasil',
    copiedLabel: 'Tersalin',
    copyTemplate: 'Biaya pasca-cetak: {total} ({minutes}; tenaga kerja {labor}; bahan habis pakai {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Apa yang Diukur Kalkulator Biaya Pasca-Cetak 3D Ini', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah <strong>kalkulator biaya pasca-cetak 3D</strong> harus menjawab pertanyaan penawaran yang praktis: berapa banyak biaya yang terpakai setelah printer berhenti? Komponen yang sudah dicetak mungkin sudah memiliki biaya waktu mesin dan biaya material, tetapi banyak pekerjaan berbayar yang ditentukan di fase pelepasan support, pengamplasan, pengisian, primer, pengecatan, pembersihan, masking, inspeksi, dan pengerjaan ulang. Kalkulator ini memisahkan tugas finishing manual tersebut ke dalam menit, mengalikannya dengan tarif per jam pasca-cetak, lalu menambahkan bahan habis pakai langsung agar angka akhirnya bisa langsung ditempelkan ke dalam penawaran.',
    },
    {
      type: 'paragraph',
      html: 'Rumus dasarnya sengaja dibuat transparan: <code>((support + amplas + cat + menit lainnya) x (tarif per jam / 60)) + bahan habis pakai</code>. Faktor konversi opsional mengalikan tarif per jam dan bahan habis pakai ketika sebuah bengkel ingin menskalakan nilai untuk konversi mata uang, daftar harga regional, markup subkontraktor, atau penyesuaian sementara. Jika pengguna memasukkan tarif tenaga kerja lokal secara langsung, faktor tersebut sebaiknya tetap di <code>1</code> dan hasilnya tetap independen dari asumsi nilai tukar.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mnt x tarif/60', label: 'Rumus biaya tenaga kerja', icon: 'mdi:clock-outline' },
        { value: '5 fase', label: 'Support, amplas, cat, lainnya, bahan habis pakai', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Faktor konversi default', icon: 'mdi:swap-horizontal' },
        { value: 'Langsung', label: 'Tanpa tombol hitung', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Hitung orangnya, bukan printernya',
      html: '<p>Pasca-cetak biasanya didominasi oleh tenaga kerja. Cetakan yang lama bisa murah untuk difinishing, sementara komponen visual kecil dengan support di permukaan kosmetik bisa membutuhkan penanganan terampil yang mahal. Perlakukan <strong>estimasi biaya tenaga kerja cetak 3D</strong> sebagai baris tersendiri daripada menyembunyikannya di dalam markup material.</p>',
    },
    { type: 'title', text: 'Pelepasan Support: Pendorong Biaya Manual Pertama', level: 2 },
    {
      type: 'paragraph',
      html: 'Pelepasan support bukan sekadar waktu yang dibutuhkan untuk melepas plastik dari model. Ini bisa mencakup pemotongan, pemanasan, pelarutan, pembilasan, pengikisan, pemangkasan bekas support, perlindungan fitur yang rapuh, dan pemeriksaan apakah bekas support memerlukan pekerjaan permukaan tambahan. Support pohon FDM, lapisan interface yang rapat, ujung support SLA, dan depowdering SLS semuanya menghasilkan profil tenaga kerja yang berbeda. Untuk estimasi <strong>biaya finishing manual cetak 3D</strong> yang andal, waktu pelepasan support sebaiknya diukur dari pekerjaan serupa, bukan ditebak dari durasi cetak.',
    },
    {
      type: 'table',
      headers: ['Situasi support', 'Perilaku waktu tipikal', 'Catatan penawaran'],
      rows: [
        ['Support mudah dilepas', 'Pelepasan singkat dan dapat diprediksi', 'Sering cocok dengan alokasi menit tetap per komponen.'],
        ['Interface support rapat', 'Pemangkasan lebih lama dan pembersihan permukaan', 'Tambahkan menit pengamplasan secara terpisah agar pendorong biaya tetap terlihat.'],
        ['Miniatur resin atau model halus', 'Pemotongan lambat untuk menghindari kerusakan', 'Gunakan tarif tenaga kerja lebih tinggi jika pekerjaan manual terampil dibutuhkan.'],
        ['Support larut', 'Lebih sedikit pemotongan manual tetapi lebih banyak waktu proses', 'Sertakan penanganan larutan dan pengeringan jika operator terlibat.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jangan hitung biaya pelepasan support hanya dari volume support di slicer',
      badge: 'Risiko tenaga kerja',
      html: '<p>Volume support bisa kecil sementara aksesnya sangat sulit. Support kecil yang tersembunyi di dalam fitur sempit bisa membutuhkan lebih banyak tenaga kerja daripada support besar di bagian luar yang lepas dengan bersih.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Catat menit pelepasan support untuk keluarga komponen yang berulang.',
        'Pisahkan pelepasan dari pengamplasan agar keputusan strategi support lebih mudah dibandingkan.',
        'Naikkan estimasi untuk geometri rapuh, pin tipis, miniatur, dan permukaan yang menghadap pelanggan.',
        'Gunakan basis mata uang dan tarif per jam yang sama dengan penawaran lainnya.',
      ],
    },
    { type: 'title', text: 'Pengamplasan, Pengisian, dan Persiapan Permukaan', level: 2 },
    {
      type: 'paragraph',
      html: 'Pengamplasan sering menjadi biaya tersembunyi terbesar pada cetakan 3D yang sudah selesai karena bersifat iteratif. Operator mungkin melewati pengamplasan kasar, pengisi, waktu curing atau pengeringan, pengamplasan halus, koreksi titik, dan inspeksi di bawah cahaya miring. Ketinggian lapisan, kekerasan material, bekas support, tingkat kilap yang dibutuhkan, dan geometri komponen semuanya mengubah jumlah pekerjaan tangan. Dudukan fungsional mungkin hanya butuh lima menit; prototipe pameran mungkin butuh satu jam sebelum cat bahkan dibuka.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator memperlakukan pengamplasan sebagai menit dikalikan tarif finishing per jam karena prosesnya dibatasi oleh operator lebih dari mesin. Bahan habis pakai seperti abrasif, cat dasar pengisi, dempul, kain bebas debu, dan material masking sebaiknya dimasukkan ke kolom bahan habis pakai, bukan dikubur dalam tarif tenaga kerja. Ini membuat <strong>analisis biaya finishing cetak 3D</strong> tetap terbaca: tenaga kerja menunjukkan tekanan waktu, bahan habis pakai menunjukkan input yang dibeli.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Finishing fungsional',
          description: 'Tepi tajam dibersihkan, support dilepas, dan bekas kasar dikurangi cukup untuk perakitan.',
          icon: 'mdi:wrench-outline',
          points: ['Waktu amplas paling sedikit', 'Bahan habis pakai minimal', 'Inspeksi fokus pada kesesuaian'],
        },
        {
          title: 'Finishing presentasi',
          description: 'Wajah yang terlihat dihaluskan, primer digunakan secara selektif, dan garis lapisan dikurangi untuk tinjauan pelanggan.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Waktu amplas sedang', 'Primer dan pengisi kemungkinan dibutuhkan', 'Permukaan kosmetik mendorong biaya tenaga kerja'],
        },
        {
          title: 'Finishing siap cat',
          description: 'Pengamplasan bertahap, pengisian, masking, dan koreksi cacat sebelum lapisan warna.',
          icon: 'mdi:spray',
          points: ['Waktu manual tertinggi', 'Bahan habis pakai penting', 'Alokasi pengerjaan ulang disarankan'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Abrasif adalah bahan habis pakai',
      ariaLabel: 'Catatan bahan habis pakai',
      html: '<p>Kertas amplas, spons amplas, kikir jarum, dempul, sarung tangan, dan lap bukan gratis. Tambahkan biaya langsungnya ketika pekerjaan mengonsumsi sebagian bermakna dari bahan tersebut.</p>',
    },
    { type: 'title', text: 'Estimasi Biaya Pengecatan dan Pelapisan', level: 2 },
    {
      type: 'paragraph',
      html: 'Menit pengecatan harus mencakup waktu aktif operator: masking, pencampuran, penyemprotan, kerja kuas, sentuhan akhir, pelepasan masking, pembersihan area kerja, dan inspeksi. Waktu pengeringan atau curing pasif sebaiknya hanya ditambahkan jika memblokir operator atau menempati kapasitas booth langka yang ditagihkan sebagai tenaga kerja atau overhead. Perbedaan ini mencegah <strong>kalkulator tarif per jam pasca-cetak</strong> mengubah setiap jam tunggu menjadi biaya tenaga kerja padahal tidak ada yang bekerja aktif pada komponen tersebut.',
    },
    {
      type: 'table',
      headers: ['Tugas pengecatan', 'Catat sebagai tenaga kerja?', 'Catat sebagai bahan habis pakai?'],
      rows: [
        ['Masking dan pelepasan masking', 'Ya, menit aktif', 'Selotip, film, sumbat, dan stensil'],
        ['Mencampur cat atau lapisan resin', 'Ya, menit aktif', 'Cat, thinner, gelas, filter, sarung tangan'],
        ['Penyemprotan atau pengecatan kuas', 'Ya, menit aktif', 'Material pelapis dan pelarut pembersih'],
        ['Waktu pengeringan', 'Hanya jika memblokir tenaga kerja berbayar atau kapasitas booth', 'Biasanya tidak ada material langsung kecuali panas atau lampu ditagihkan terpisah'],
      ],
    },
    {
      type: 'tip',
      title: 'Tagihkan kompleksitas warna secara eksplisit',
      html: '<p>Satu lapisan primer dan finishing dua warna yang dimasking bisa memiliki biaya material yang serupa tetapi biaya tenaga kerja yang sangat berbeda. Gunakan kolom menit pengecatan untuk menampilkan perbedaannya sebelum margin diterapkan.</p>',
    },
    {
      type: 'proscons',
      title: 'Alokasi finishing tetap vs menit finishing terukur',
      items: [
        { pro: 'Alokasi tetap cepat untuk pekerjaan berulang dengan persyaratan finishing yang stabil.', con: 'Menyembunyikan fase mana yang mengonsumsi profit ketika pekerjaan berubah.' },
        { pro: 'Menit terukur membuat estimasi dapat diaudit dan mudah diperbarui.', con: 'Membutuhkan bengkel untuk melacak waktu finishing nyata untuk jenis komponen umum.' },
        { pro: 'Bar biaya visual membuat penawaran kepada pelanggan lebih mudah dijelaskan secara internal.', con: 'Tidak menggantikan pertimbangan tentang risiko kosmetik dan kemungkinan pengerjaan ulang.' },
      ],
    },
    { type: 'title', text: 'Bahan Habis Pakai dan Overhead Pasca-Cetak', level: 2 },
    {
      type: 'paragraph',
      html: 'Bahan habis pakai adalah material langsung yang dikonsumsi selama finishing. Bisa mencakup kertas amplas, primer, dempul, cat, cairan pencuci resin, IPA, handuk, sarung tangan nitril, pisau, selotip masking, sumbat pelindung, gelas sekali pakai, filter, senyawa poles, dan cat pernis. Beberapa bengkel memasukkannya ke dalam overhead, tetapi menghitungnya sebagai kolom langsung lebih aman untuk pekerjaan dengan standar finishing yang tidak biasa, permukaan besar, pengamplasan agresif, atau alur kerja yang banyak menggunakan pelarut.',
    },
    {
      type: 'paragraph',
      html: 'Kolom bahan habis pakai yang terpisah juga membantu dengan alur kerja <strong>kalkulator overhead pasca-cetak</strong>. Overhead biasanya lebih luas dari bahan habis pakai: sewa, ekstraksi, pencahayaan, filtrasi udara, penggunaan kompresor, perawatan, perangkat lunak, pengawasan, dan waktu administratif. Kalkulator ini tidak berpura-pura mengalokasikan setiap baris overhead. Sebaliknya, ia memberikan subtotal biaya langsung yang bersih yang dapat dimasukkan ke model penawaran yang lebih besar di mana overhead dan margin diterapkan sesudahnya.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Tarif tenaga kerja', definition: 'Biaya per jam atau tarif jual yang ditetapkan untuk waktu finishing manual aktif.' },
        { term: 'Bahan habis pakai', definition: 'Material langsung yang habis selama pasca-cetak, seperti abrasif, pelapis, sarung tangan, dan cairan pembersih.' },
        { term: 'Faktor konversi', definition: 'Pengali global yang diterapkan pada input uang untuk penskalaan mata uang atau penyesuaian penawaran.' },
        { term: 'Biaya langsung', definition: 'Biaya yang dapat dikaitkan dengan komponen atau batch tertentu yang sedang difinishing.' },
        { term: 'Overhead', definition: 'Biaya bisnis yang mendukung produksi tetapi tidak dikonsumsi oleh satu komponen dalam jumlah yang mudah diukur.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Ke mana margin harus diletakkan',
      html: '<p>Alat ini menghitung biaya finishing sebelum profit. Terapkan margin setelah material, waktu mesin, pasca-cetak, risiko, dan overhead sudah terangkum, karena jika tidak, pekerjaan padat tenaga kerja bisa dihargai terlalu murah.</p>',
    },
    { type: 'title', text: 'Pemilihan Mata Uang dan Faktor Konversi', level: 2 },
    {
      type: 'paragraph',
      html: 'Pemilihan mata uang mengubah simbol dan dapat mengonversi input uang yang sudah ada menggunakan faktor referensi praktis. Kalkulasi itu sendiri bersifat netral terhadap mata uang: tarif 30 per jam dan 10 dalam bahan habis pakai menghasilkan struktur yang sama baik simbolnya euro, dolar, pound, yen, maupun mata uang lain yang didukung. Ini berguna untuk penawaran internasional karena matematikanya tetap stabil sementara tampilannya menyesuaikan dengan lokasi pelanggan atau bengkel.',
    },
    {
      type: 'paragraph',
      html: 'Faktor konversi ada untuk kasus di mana pengguna tidak menginginkan konversi nilai tukar otomatis atau membutuhkan pengali komersial khusus. Faktor <code>1</code> berarti tarif per jam dan bahan habis pakai sudah dimasukkan dalam mata uang lokal yang dipilih. Faktor <code>1,15</code> meningkatkan kedua input uang sebesar lima belas persen. Faktor <code>0,92</code> menguranginya delapan persen. Karena faktor memengaruhi uang dan bukan menit, rincian visual tetap proporsional terhadap biaya yang disesuaikan.',
    },
    {
      type: 'summary',
      title: 'Aturan mata uang',
      items: [
        'Gunakan selektor untuk simbol dan penskalaan praktis antara mata uang umum.',
        'Pertahankan faktor konversi di 1 ketika input sudah dalam mata uang lokal.',
        'Gunakan faktor kustom untuk buku harga regional, markup subkontraktor, atau penyesuaian komersial sementara.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Nilai tukar bukan kebijakan akuntansi',
      badge: 'Catatan harga',
      html: '<p>Untuk faktur resmi, pajak, atau laporan akuntansi, gunakan nilai tukar dan kebijakan pembulatan yang diwajibkan oleh bisnis Anda. Kalkulator ini untuk memperkirakan biaya produksi dan persiapan penawaran.</p>',
    },
    { type: 'title', text: 'Menggunakan Rincian Visual untuk Meningkatkan Profit', level: 2 },
    {
      type: 'paragraph',
      html: 'Bar proporsional lebih dari sekadar dekorasi. Ia menunjukkan fase finishing mana yang mengonsumsi uang. Jika pengamplasan mendominasi, mengubah orientasi cetak, ketinggian lapisan, antarmuka support, atau material dapat mengurangi waktu manual. Jika pengecatan mendominasi, penawaran mungkin perlu tingkat finishing terpisah. Jika bahan habis pakai mendominasi, pembelian massal atau proses pelapisan yang berbeda mungkin lebih berdampak daripada efisiensi tenaga kerja. Jika pelepasan support mendominasi, mendesain ulang titik kontak support mungkin menjadi intervensi yang paling bernilai.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Ketika pelepasan support adalah bagian terbesar, tinjau gaya support, kepadatan, jarak Z kontak, dan orientasi.',
        'Ketika pengamplasan terbesar, tinjau ketinggian lapisan, penempatan sambungan, strategi pengisian, dan apakah finishing yang ditawarkan terlalu tinggi untuk harganya.',
        'Ketika pengecatan terbesar, pisahkan finishing satu warna, dimasking, dan premium ke dalam tingkat penawaran terpisah.',
        'Ketika bahan habis pakai terbesar, periksa apakah pelapis, pencuci resin, abrasif, dan bahan masking sedang terbuang atau kurang diperhitungkan.',
      ],
    },
    {
      type: 'table',
      headers: ['Biaya dominan', 'Kemungkinan penyebab', 'Respons harga'],
      rows: [
        ['Pelepasan support', 'Akses sulit, support rapat, detail rapuh', 'Tambahkan biaya tambahan kompleksitas support atau revisi orientasi.'],
        ['Pengamplasan', 'Persyaratan kosmetik tinggi, lapisan terlihat, bekas support', 'Buat kelas finishing dan tagihkan persiapan siap cat.'],
        ['Pengecatan', 'Masking, banyak warna, pembersihan booth', 'Tawarkan pengecatan sebagai baris layanan terpisah.'],
        ['Bahan habis pakai', 'Pelapis, abrasif, pelarut, perlengkapan pelindung', 'Gunakan pelacakan bahan habis pakai langsung atau biaya material minimum.'],
      ],
    },
    {
      type: 'summary',
      title: 'Alur kerja penawaran',
      items: [
        'Ukur menit manual aktif per fase.',
        'Gunakan tarif finishing per jam yang sudah mencakup semua beban.',
        'Tambahkan bahan habis pakai langsung secara terpisah.',
        'Salin hasil yang dihitung ke dalam penawaran, lalu terapkan overhead dan margin dalam model penetapan harga lengkap.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
