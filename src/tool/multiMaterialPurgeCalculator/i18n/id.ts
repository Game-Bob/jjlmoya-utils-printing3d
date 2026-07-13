import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'kalkulator-purge-multi-material';
const title = 'Kalkulator Purge Multi Material: Analisis & Optimasi Limbah Filamen';
const description = 'Perkirakan volume menara purge AMS dan MMU, massa filamen terbuang, dan biaya transisi dengan matriks intensitas pigmen untuk perubahan warna.';

const faqData = [
  {
    question: 'Mengapa hitam ke putih diberi faktor purge yang lebih tinggi daripada putih ke hitam?',
    answer: 'Pigmen gelap mengontaminasi polimer pucat lebih terlihat daripada pigmen pucat mengontaminasi polimer gelap. Kalkulator karena itu memodelkan hitam-ke-putih sebagai transisi faktor tinggi dan putih-ke-hitam sebagai transisi faktor lebih rendah.',
  },
  {
    question: 'Apakah kalkulator ini pengganti volume pembilasan slicer?',
    answer: 'Tidak. Ini adalah perencana diagnostik yang memperkirakan ekonomi purge sebelum slicing atau penganggaran. Gunakan hasil kalibrasi slicer untuk penyesuaian akhir spesifik-mesin.',
  },
  {
    question: 'Rasio purge apa yang harus saya anggap terlalu tinggi?',
    answer: 'Alat ini menandai rasio limbah tinggi di atas 30 persen dari total volume ekstrusi. Ambang itu biasanya berarti urutan warna, pengelompokan, purge-to-infill, atau pemisahan model harus ditinjau.',
  },
  {
    question: 'Bisakah saya menggunakannya untuk perubahan material, bukan hanya perubahan warna?',
    answer: 'Matriks saat ini berfokus pada kontaminasi pigmen. Polimer campuran, support larut, material abrasif, dan perubahan suhu mungkin memerlukan purge tambahan di luar faktor warna.',
  },
];

const howToData = [
  {
    name: 'Masukkan volume objek dan purge dasar',
    text: 'Ketik volume model nyata dan volume purge standar yang digunakan profil AMS atau MMU Anda untuk satu perubahan filamen normal.',
  },
  {
    name: 'Pilih warna asal dan tujuan',
    text: 'Gunakan pemilih warna melingkar untuk setiap transisi. Faktor transisi diperbarui segera dari matriks pigmen.',
  },
  {
    name: 'Atur jumlah transisi',
    text: 'Masukkan berapa kali setiap pasangan warna terjadi dalam pekerjaan. Pertukaran gelap-ke-terang berulang akan mendominasi perkiraan purge total.',
  },
  {
    name: 'Baca rasio, massa, dan biaya',
    text: 'Gunakan bilah objek versus purge, massa limbah, dan hasil biaya untuk memutuskan apakah cetakan perlu diatur ulang sebelum produksi.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    currencyLabel: 'Mata Uang',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Model biaya',
    objectVolumeLabel: 'Volume objek',
    basePurgeLabel: 'Purge dasar per perubahan',
    densityLabel: 'Massa jenis g/cm3',
    priceLabel: 'Harga per kg',
    transitionsTitle: 'Matriks transisi pigmen',
    fromLabel: 'Dari',
    toLabel: 'Ke',
    colorLabels: {
      white: 'Putih',
      natural: 'Natural',
      yellow: 'Kuning',
      red: 'Merah',
      blue: 'Biru',
      green: 'Hijau',
      gray: 'Abu-abu',
      black: 'Hitam',
    },
    countLabel: 'Perubahan',
    objectLabel: 'Plastik nyata objek',
    purgeTowerLabel: 'Limbah menara purge',
    totalWasteLabel: 'Volume purge',
    wasteCostLabel: 'Biaya limbah',
    purgeRatioLabel: 'Rasio purge',
    massLabel: 'Massa limbah',
    loadbarAriaLabel: 'Volume objek dibandingkan dengan volume menara purge',
    alertTitle: 'Rasio limbah tinggi terdeteksi',
    alertText: 'Rasio limbah tinggi terdeteksi: Pengelompokan warna serupa disarankan.',
    efficientText: 'Rasio purge dalam batas perencanaan.',
    factorGuideTitle: 'Panduan Faktor Purge berdasarkan Transisi',
    transitionLabel: 'Transisi',
    factorLabel: 'Faktor',
    volumeLabel: 'Volume purge',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Bagaimana limbah purge AMS dan MMU menjadi biaya produksi nyata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cetakan multi-material tidak hanya mengonsumsi filamen pada objek yang terlihat. Setiap perubahan warna atau material meninggalkan polimer cair di hotend, zona leleh, nozzle, dan terkadang di awal jalur ekstrusi berikutnya. Printer harus mendorong cukup filamen baru melalui jalur itu sebelum permukaan terlihat berikutnya bersih. Dalam alur kerja AMS, MMU, toolhead changer, dan palette, ekstrusi pembersihan itu sering menjadi menara purge, blok purge, garis purge, atau endapan saluran limbah. Poin ekonomi pentingnya sederhana: menara dapat dihargai seperti bagian lainnya karena memiliki volume, massa, dan biaya material.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator generik sering mengalikan jumlah pertukaran dengan satu volume pembilasan tetap. Itu berguna untuk anggaran kasar, tetapi melewatkan mode kegagalan paling mahal dalam pencetakan warna: <strong>kontaminasi asimetris</strong>. Putih ke hitam tidak memerlukan pembersihan yang sama seperti hitam ke putih. Sejumlah kecil pigmen hitam yang terbawa ke dalam PLA, PETG, atau ABS putih akan terlihat dengan cepat, sementara sejumlah kecil putih yang terbawa ke hitam biasanya tersembunyi oleh muatan pigmen yang lebih gelap. Alat ini menggunakan matriks transisi sehingga setiap arah memiliki pengalinya sendiri.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Ambang peringatan rasio purge tinggi yang digunakan oleh dasbor' },
        { value: '1.6x', label: 'Pengali transisi hitam ke putih default' },
        { value: '0.8x', label: 'Pengali transisi putih ke hitam default' },
        { value: '0 tombol', label: 'Semua perhitungan diperbarui secara instan saat mengedit' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gejala mahal yang perlu diperhatikan',
      badge: 'Audit limbah',
      html: 'Ketika menara purge melebihi 30 persen dari gabungan volume objek dan purge, pekerjaan itu bukan lagi sekadar cetakan berwarna. Itu adalah proses konversi material di mana sebagian besar filamen yang dibeli menjadi keluaran non-produk. Itulah titik di mana urutan warna, pemisahan model, purge-to-infill, dan pengelompokan layak mendapat perhatian sebelum mesin dinyalakan.',
    },
    {
      type: 'title',
      text: 'Matriks transisi di balik kalkulator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Model intinya adalah <code>Vtotal = jumlah(Vdasar x Ka,b)</code>. <code>Vdasar</code> adalah volume purge dasar untuk satu perubahan filamen standar. <code>Ka,b</code> adalah faktor untuk berpindah dari warna <code>a</code> ke warna <code>b</code>. Faktor di bawah 1 berarti transisi biasanya lebih mudah daripada garis dasar. Faktor di atas 1 berarti warna berikutnya sensitif terhadap kontaminasi atau warna sebelumnya memiliki bawaan pigmen yang kuat. Hasilnya adalah volume purge dalam sentimeter kubik, yang kemudian dikonversi ke massa menggunakan massa jenis filamen.',
    },
    {
      type: 'paragraph',
      html: 'Rumus biayanya adalah <code>Cbiaya = ((Vtotal x massa jenis) / 1000) x hargaKg</code>. Jika menara purge menggunakan 80 cm3 PLA pada 1,24 g/cm3, ia mengonsumsi 99,2 g filamen. Pada 24 per kilogram, menara itu menghabiskan biaya 2,38 untuk material sebelum listrik, waktu mesin, transisi warna yang gagal, atau pasca-pemrosesan diperhitungkan. Untuk cetakan hobi, itu mungkin dapat diterima. Untuk produksi berulang, itu adalah item baris.',
    },
    {
      type: 'table',
      headers: ['Transisi', 'Faktor default', 'Mengapa dibobot seperti itu'],
      rows: [
        ['Putih ke hitam', '0.80x', 'Hitam menyembunyikan residu pucat kecil, sehingga toleransi kontaminasi visual lebih tinggi.'],
        ['Hitam ke putih', '1.60x', 'Residu gelap di putih langsung terlihat dan biasanya memerlukan pembilasan lebih lama.'],
        ['Natural ke putih', '1.15x', 'Material tembus pandang atau natural dapat mewarnai putih buram hingga jalur leleh lebih bersih.'],
        ['Kuning ke putih', '1.35x', 'Pigmen kuning dapat menghangatkan atau menodai permukaan pucat meskipun tidak separah hitam.'],
        ['Merah ke kuning', '1.08x', 'Bawaan merah mengubah rona secara kuat pada kuning dan warna yang berdekatan dengan oranye.'],
        ['Abu-abu ke hitam', '0.72x', 'Residu abu-abu biasanya tersembunyi oleh pigmen hitam, sehingga purge bisa lebih rendah.'],
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan kalibrasi slicer Anda sebagai volume dasar',
      html: 'Jalankan kalibrasi pembilasan vendor atau komunitas untuk printer Anda terlebih dahulu, lalu masukkan hasil itu sebagai volume purge dasar. Matriks harus menskalakan garis dasar yang diketahui, bukan menggantikan penyesuaian spesifik-mesin untuk diameter nozzle, volume hotend, panjang jalur filamen, dan perilaku slicer.',
    },
    {
      type: 'title',
      text: 'Mengapa opasitas polimer mengubah volume purge yang diperlukan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opasitas mengontrol seberapa banyak kontaminasi warna sebelumnya terlihat di material berikutnya. Putih buram menuntut karena memantulkan cahaya dengan kuat dan menunjukkan partikel atau goresan lebih gelap di dekat permukaan. Filamen natural dan tembus pandang berperilaku berbeda: mereka mungkin menyembunyikan lebih sedikit massa tetapi menunjukkan corak melalui kedalaman, terutama di dinding tipis atau bagian yang diberi cahaya dari belakang. Warna jenuh seperti merah dan biru juga dapat menodai warna pucat berikutnya karena konsentrasi pigmen yang diperlukan untuk kroma kuat tetap terlihat pada tingkat residu rendah.',
    },
    {
      type: 'paragraph',
      html: 'Printer tidak memahami ilmu warna. Ia hanya mengekstrusi panjang atau volume. Pengguna harus memutuskan apakah hasil yang terlihat memerlukan kemurnian kosmetik, pemisahan fungsional, atau hanya perubahan warna kasar. Mainan, logo, muka papan nama, bingkai lithophane, atau penutup yang berhadapan dengan pelanggan mungkin memerlukan purge agresif. Support internal tersembunyi, prototipe draf, atau sisi belakang jig mungkin mentolerir lebih banyak bawaan. Kalkulator mengekspos trade-off itu dengan membuat menara purge bertambah ketika arah transisi lebih sulit.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tujuan terang',
          description: 'Putih, natural, kuning, dan abu-abu pucat adalah tujuan yang sensitif. Warna sebelumnya yang gelap atau jenuh memerlukan purge lebih lama sebelum warna-warna ini terlihat bersih.',
          points: ['Gunakan faktor yang lebih tinggi', 'Kelompokkan bagian terang bersama-sama', 'Hindari kembali dari hitam ke putih berulang kali'],
        },
        {
          title: 'Tujuan gelap',
          description: 'Hitam, biru tua, hijau tua, dan abu-abu gelap dapat menyembunyikan residu dari warna yang lebih terang. Transisi ini sering dapat menggunakan pengali yang lebih kecil.',
          points: ['Risiko terlihat lebih rendah', 'Target yang baik setelah warna pucat', 'Warna akhir yang berguna dalam suatu urutan'],
        },
        {
          title: 'Transisi rona serupa',
          description: 'Bergerak antara warna yang terkait biasanya lebih murah daripada melintasi dari gelap ke pucat. Merah ke oranye atau abu-abu ke hitam biasanya lebih mudah daripada biru ke kuning.',
          points: ['Urutan warna itu penting', 'Keluarga rona mengurangi limbah', 'Kelompokkan objek serupa bersama-sama'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volume purge dasar', definition: 'Volume normal yang diekstrusi slicer atau profil kalibrasi Anda untuk satu perubahan filamen biasa sebelum penskalaan matriks.' },
        { term: 'Faktor transisi', definition: 'Sebuah pengali yang ditetapkan ke satu arah perubahan warna, seperti hitam ke putih atau putih ke hitam.' },
        { term: 'Rasio purge', definition: 'Volume purge dibagi dengan total volume ekstrusi, termasuk objek dan menara purge.' },
        { term: 'Bawaan pigmen', definition: 'Residu terlihat dari warna filamen sebelumnya yang tersisa di hotend dan muncul di ekstrusi berikutnya.' },
        { term: 'Purge-to-infill', definition: 'Strategi slicer yang mengarahkan sebagian ekstrusi pembersihan ke dalam infill tersembunyi, bukan ke menara atau saluran limbah.' },
      ],
    },
    {
      type: 'title',
      text: 'Cara mengurangi limbah filamen AMS tanpa merusak kualitas warna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Optimasi pertama adalah urutan warna. Jika sebuah model dapat dipisahkan, dicetak dalam kelompok, atau diatur sehingga transisi gelap-ke-terang terjadi lebih sedikit kali, menara purge dapat menyusut secara dramatis. Perubahan hitam ke putih berulang mahal karena setiap siklus meminta printer untuk menghilangkan pigmen kuat sebelum tujuan yang sensitif. Jika desain visual yang sama dapat dicetak sebagai putih-ke-hitam sekali, atau sebagai bagian terpisah yang dirakit nanti, anggaran material berubah segera.',
    },
    {
      type: 'paragraph',
      html: 'Optimasi kedua adalah pilihan tujuan. Ketika beberapa warna bersifat opsional, pilih warna akhir gelap untuk detail yang muncul setelah daerah pucat. Misalnya, teks hitam di atas plakat putih biasanya lebih murah daripada teks putih di atas plakat hitam karena yang terakhir memaksa printer untuk membersihkan residu gelap sebelum setiap segmen putih. Ini bukan hanya keputusan estetika; ini mengubah jumlah fisik polimer yang harus didorong melalui hotend.',
    },
    {
      type: 'list',
      items: [
        'Kelompokkan warna serupa dalam model atau antrian cetak sehingga rona terkait berbagi transisi.',
        'Gunakan purge-to-infill ketika kontaminasi warna internal dapat diterima dan bagian memiliki volume infill yang cukup.',
        'Kurangi pertukaran warna dengan memisahkan lencana, logo, label, atau sisipan dekoratif menjadi potongan cetakan terpisah.',
        'Gunakan warna lebih gelap setelah warna lebih terang ketika desain memungkinkannya.',
        'Sesuaikan pengali pembilasan dengan contoh fisik, bukan hanya default slicer.',
        'Anggarkan biaya purge secara terpisah untuk kutipan pelanggan sehingga pekerjaan multi-warna dekoratif tidak dijual dengan harga terlalu rendah.',
      ],
    },
    {
      type: 'proscons',
      title: 'Trade off optimasi',
      items: [
        { pro: 'Faktor purge yang lebih rendah mengurangi massa menara dan biaya filamen.', con: 'Terlalu sedikit purge dapat menciptakan goresan, corak, atau permukaan berhadapan pelanggan yang tidak dapat diterima.' },
        { pro: 'Memisahkan model dapat menghilangkan banyak perubahan warna.', con: 'Perakitan menambah tenaga kerja, manajemen toleransi, lem, pengencang, atau jahitan terlihat.' },
        { pro: 'Purge-to-infill mengubah sebagian limbah menjadi plastik internal yang berguna.', con: 'Ini bekerja paling baik hanya ketika objek memiliki volume tersembunyi yang cukup dan kontaminasi dapat diterima secara struktural.' },
        { pro: 'Pengelompokan warna serupa meningkatkan ekonomi print-farm.', con: 'Ini dapat menunda pekerjaan satu-off mendesak yang memerlukan urutan warna tertentu.' },
      ],
    },
    {
      type: 'title',
      text: 'Menganggarkan cetakan multi-material untuk pelanggan dan print-farm',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kutipan cetak yang hanya memberi harga volume objek akhir adalah salah untuk pekerjaan AMS dan MMU. Pelanggan membeli proses manufaktur, dan prosesnya mencakup ekstrusi non-produk. Sebuah gantungan kunci kecil dengan banyak pertukaran warna layer-by-layer dapat menyia-nyiakan lebih banyak material daripada braket satu warna yang lebih besar. Kalkulator membuatnya terlihat dengan membandingkan volume objek dan volume menara purge sebagai dua blok yang bersaing, bukan menyembunyikan limbah di dalam satu angka.',
    },
    {
      type: 'paragraph',
      html: 'Untuk sebuah farm, rasio purge juga merupakan sinyal penjadwalan. Pekerjaan purge tinggi mengisi printer saat mengubah filamen menjadi plastik menara, sehingga kerugian ekonomi bukan hanya material. Waktu mesin yang dihabiskan untuk mengganti filamen, memotong, memuat, menyeka, dan membangun kembali tekanan adalah waktu yang tidak dihabiskan untuk memproduksi volume yang dapat dijual. Ketika rasio purge tinggi, pertimbangkan apakah barang tersebut harus dikenakan biaya tambahan multi-warna, apakah warna harus dibatasi, atau apakah solusi yang dicat, berlabel cetak, atau dirakit lebih murah.',
    },
    {
      type: 'card',
      title: 'Aturan kutipan untuk pekerjaan multi warna',
      html: 'Beri harga objek, lalu beri harga menara purge sebagai baris limbah terpisah. Jika klien berubah dari dua warna menjadi empat warna, atau menambahkan detail terisolasi kecil di banyak lapisan, perbarui kutipan karena jumlah transisi berubah bahkan ketika volume model terlihat hampir tidak bergerak.',
    },
    {
      type: 'table',
      headers: ['Rasio purge', 'Interpretasi', 'Tindakan yang disarankan'],
      rows: [
        ['Di bawah 15%', 'Pekerjaan multi-warna yang efisien', 'Asumsi kutipan normal biasanya dapat diterima.'],
        ['15% hingga 30%', 'Kehilangan material terlihat', 'Tinjau transisi dan periksa apakah purge-to-infill membantu.'],
        ['Di atas 30%', 'Rasio limbah tinggi', 'Kelompokkan warna, pisahkan model, naikkan kutipan, atau desain ulang tata letak warna.'],
        ['Di atas 50%', 'Menara mendominasi ekonomi', 'Perlakukan cetakan sebagai pekerjaan produksi khusus, bukan cetakan objek rutin.'],
      ],
    },
    {
      type: 'title',
      text: 'Membaca hasil dasbor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kedua blok horizontal sengaja dibuat tegas. Hijau adalah volume objek nyata. Blok purge bergaris adalah material yang tidak menjadi produk terlihat. Jika blok bergaris mulai terlihat secara fisik sebanding dengan blok objek, cetakan layak diteliti. Rasio visual ini seringkali lebih meyakinkan daripada gram atau mata uang karena menunjukkan kepada pengguna dengan tepat berapa banyak plastik yang dialokasikan untuk pembersihan.',
    },
    {
      type: 'paragraph',
      html: 'Hasil massa berasal dari volume dikalikan massa jenis. PLA biasanya sekitar 1,24 g/cm3, PETG umumnya mendekati 1,27 g/cm3, ABS lebih rendah, dan filamen terisi sangat bervariasi. Hasil harga menggunakan harga per kilogram yang dipilih. Jika Anda menggunakan PLA sutra khusus, campuran serat karbon, support larut, atau filamen teknik, ganti harga dan massa jenis default. Volume purge yang sama dapat memiliki bobot ekonomi yang sangat berbeda tergantung pada materialnya.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa keputusan',
      items: [
        'Gunakan kalibrasi purge slicer terukur sebagai volume dasar.',
        'Hitung transisi berulang, bukan hanya jumlah warna yang dimuat di AMS atau MMU.',
        'Perhatikan transisi hitam ke putih, jenuh ke pucat, dan tujuan tembus pandang terlebih dahulu.',
        'Perlakukan rasio purge di atas 30 persen sebagai peringatan desain ulang atau kutipan.',
        'Gunakan hasil biaya untuk penganggaran material dan bilah visual untuk tinjauan desain cepat.',
      ],
    },
    {
      type: 'message',
      title: 'Inti praktis',
      html: 'Cetakan multi-material efisien ketika perubahan warna diatur sehingga menara purge tetap kecil relatif terhadap objek. Jika menara melewati garis peringatan 30 persen, optimasi termurah biasanya bukan gulungan baru atau profil yang lebih cepat; itu adalah strategi warna yang lebih baik.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
