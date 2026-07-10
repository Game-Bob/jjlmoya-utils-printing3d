import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = 'estimator-waktu-cetak-3d-berdasarkan-tinggi-lapis-dan-kecepatan';
const title = 'Estimator Waktu Cetak 3D berdasarkan Tinggi Lapis dan Kecepatan';
const description =
  'Perkirakan durasi cetak 3D tanpa membuka slicer dengan menggabungkan tinggi model, tinggi lapis, kecepatan cetak, infill, kompleksitas, overhead pergerakan, dan penggunaan filamen.';

const faqData = [
  {
    question: 'Berapa lama cetak 3D saya tanpa slicer?',
    answer:
      'Anda dapat memperkirakannya dari jumlah total lapisan, perkiraan volume material, kecepatan cetak rata-rata, infill, dan margin untuk pergerakan serta perubahan arah. Slicer tetap lebih akurat untuk pekerjaan akhir.',
  },
  {
    question: 'Mengapa tinggi lapis sangat memengaruhi waktu cetak?',
    answer:
      'Tinggi lapis mengubah jumlah lapisan Z. Profil 0,12 mm menghasilkan jauh lebih banyak lapisan daripada profil 0,28 mm untuk tinggi model yang sama, sehingga printer mengulangi perimeter, infill, dan overhead perubahan lapis berkali-kali lipat.',
  },
  {
    question: 'Mengapa waktu cetak nyata lebih lama daripada kecepatan dibagi jarak?',
    answer:
      'Printer jarang mempertahankan kecepatan yang diminta di sudut, segmen pendek, detail kecil, retraksi, gerakan Z, dan jalur pergerakan. Batas akselerasi dan overhead membuat durasi nyata lebih lama daripada perhitungan gerakan ideal.',
  },
  {
    question: 'Apakah ini lebih akurat daripada perkiraan slicer?',
    answer:
      'Tidak. Kalkulator ini untuk perencanaan awal, pembuatan kutipan, dan perbandingan eksploratif. Slicer dapat memeriksa geometri tepat, penyangga, jahitan, pengaturan akselerasi, lebar ekstrusi, dan urutan jalur alat.',
  },
];

const howToData = [
  { name: 'Masukkan tinggi model', text: 'Gunakan tinggi Z model atau objek tertinggi dalam pekerjaan cetak yang direncanakan.' },
  { name: 'Pilih tinggi lapis', text: 'Gunakan nilai profil cetak sebenarnya, misalnya 0,20 mm untuk pengaturan kualitas draf FDM umum.' },
  { name: 'Tambahkan kecepatan, jejak, dan infill', text: 'Gunakan kecepatan cetak rata-rata, perkiraan luas jejak XY, dan persentase infill target.' },
  { name: 'Sesuaikan kompleksitas dan overhead', text: 'Tingkatkan kompleksitas untuk detail sangat kecil dan tingkatkan overhead untuk banyak pergerakan, penyangga, atau retraksi.' },
  { name: 'Bandingkan skenario kecepatan', text: 'Gunakan baris 40, 60, dan 80 mm/s untuk melihat apakah kecepatan cetak yang lebih tinggi mengubah total durasi pekerjaan secara berarti.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Input estimator waktu cetak 3D',
    resultsAriaLabel: 'Hasil perkiraan waktu cetak 3D',
    unitSystemLabel: 'Satuan',
    metricLabel: 'Metrik',
    imperialLabel: 'AS',
    modelHeightLabel: 'Tinggi model',
    modelHeightHint: 'Dimensi Z tertinggi dari cetakan.',
    layerHeightLabel: 'Tinggi lapis',
    speedLabel: 'Kecepatan cetak rata-rata',
    footprintLabel: 'Perkiraan luas jejak',
    footprintHint: 'Perkiraan luas XY yang digunakan sebagai proksi volume.',
    infillLabel: 'Kepadatan infill',
    complexityLabel: 'Faktor kompleksitas',
    complexityHint: '0,80 untuk bentuk sederhana, 1,20 untuk detail kecil dan segmen pendek.',
    overheadLabel: 'Overhead pergerakan',
    filamentDiameterLabel: 'Diameter filamen',
    densityLabel: 'Kepadatan material',
    timeLabel: 'Perkiraan waktu cetak',
    layersLabel: 'Total lapisan',
    materialLabel: 'Perkiraan material',
    filamentLabel: 'Panjang filamen',
    effectiveSpeedLabel: 'Kecepatan efektif',
    baseTimeLabel: 'Waktu ekstrusi',
    overheadTimeLabel: 'Waktu overhead',
    comparisonLabel: 'Perbandingan kecepatan',
    minutesUnit: 'mnt',
    hoursUnit: 'j',
    layersUnit: 'lapis',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Perkiraan pendek: overhead slicer, pemanasan alas, dan pendinginan dapat menjadi bagian besar dari waktu nyata yang berlalu.',
    balancedInsight: 'Perkiraan seimbang: perubahan kecepatan penting, tetapi jumlah lapisan dan overhead masih membentuk durasi akhir.',
    highInsight: 'Perkiraan panjang: pertimbangkan lapisan lebih tebal, infill lebih rendah, lebih sedikit penyangga, atau membagi model sebelum sekadar menaikkan kecepatan.',
  },
  seo: [
    { type: 'title', text: 'Cara Memperkirakan Waktu Cetak 3D dari Tinggi Lapis dan Kecepatan', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Estimator waktu cetak 3D berdasarkan tinggi lapis dan kecepatan</strong> berguna ketika Anda membutuhkan angka perencanaan sebelum membuka slicer, membandingkan beberapa profil cetak, atau membuat kutipan bagian dari dimensi kasar. Gagasan intinya sederhana: tinggi model dibagi tinggi lapis memberikan jumlah lapisan, dan perkiraan jumlah jalur yang diekstrusi dibagi kecepatan rata-rata memberikan waktu gerakan. Bagian sulitnya adalah pencetakan FDM nyata bukanlah ban berjalan yang bersih. Nosel melambat di sudut, retraksi mengganggu ekstrusi, pergerakan menambah jarak non-cetak, dan segmen pendek jarang mencapai kecepatan yang diperintahkan.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator ini sengaja melampaui formula paling dasar. Alih-alih mengasumsikan bahwa <code>tinggi / tinggi lapis / kecepatan</code> sudah cukup, ia menggabungkan perkiraan volume model, kepadatan infill, lebar garis ekstrusi, faktor kompleksitas, waktu perubahan lapis, dan persentase overhead pergerakan. Hasilnya tetap merupakan perkiraan, bukan pengganti slicer, tetapi menjawab pertanyaan praktis yang dicari pengguna: <strong>berapa lama cetak 3D saya</strong> jika saya mengubah tinggi lapis, infill, atau kecepatan.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Tinggi lapis FDM umum untuk cetakan seimbang', icon: 'mdi:layers-outline' },
        { value: '15-20%', label: 'Kisaran awal berguna untuk overhead pergerakan dan gerakan', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Kecepatan perbandingan umum untuk printer desktop', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Diameter filamen umum untuk menghitung panjang material', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan kecepatan rata rata, bukan kecepatan tertinggi',
      html: '<p>Jika profil slicer Anda menunjukkan 120 mm/s tetapi dinding luar berjalan pada 40 mm/s, perimeter kecil pada 25 mm/s, dan infill pada 90 mm/s, kecepatan cetak rata-rata bukanlah 120 mm/s. Untuk perencanaan, kecepatan rata-rata yang realistis sering memberikan perkiraan yang lebih baik daripada gerakan tercepat dalam profil.</p>',
    },

    { type: 'title', text: 'Mengapa Tinggi Lapis Memiliki Efek Besar pada Durasi', level: 2 },
    {
      type: 'paragraph',
      html: 'Tinggi lapis mengontrol berapa kali printer harus mengulangi urutan dasar yang sama: perimeter, struktur internal, permukaan atas dan bawah, pergerakan ke pulau berikutnya, dan gerakan Z ke lapisan berikutnya. Model setinggi 80 mm membutuhkan 400 lapis pada 0,20 mm, tetapi sekitar 667 lapis pada 0,12 mm. Meskipun setiap lapis tipis menggunakan sedikit lebih sedikit plastik per lintasan, printer melakukan lebih banyak transisi lapis, lebih banyak kontur berulang, dan lebih banyak peluang untuk gerakan lambat yang dibatasi akselerasi.',
    },
    {
      type: 'table',
      headers: ['Tinggi model', 'Tinggi lapis', 'Jumlah lapisan', 'Interpretasi perencanaan'],
      rows: [
        ['80 mm', '0,28 mm', '286 lapis', 'Profil draf cepat dengan garis lapis terlihat.'],
        ['80 mm', '0,20 mm', '400 lapis', 'Kualitas dan durasi seimbang untuk banyak bagian.'],
        ['80 mm', '0,12 mm', '667 lapis', 'Profil detail halus yang dapat menambah banyak jam.'],
        ['160 mm', '0,20 mm', '800 lapis', 'Bagian tinggi menjadi berat durasi bahkan pada kecepatan normal.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ketika tinggi lapis menjadi hambatan nyata',
      badge: 'Periksa lapisan',
      html: '<p>Jika menambah kecepatan cetak hampir tidak mengubah perkiraan, pekerjaan mungkin didominasi oleh jumlah lapisan, segmen pendek, dan overhead. Dalam hal ini, beralih dari 0,12 mm ke 0,20 mm dapat menghemat lebih banyak waktu daripada menaikkan printer dari 60 mm/s ke 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Aturan keputusan tinggi lapis',
      items: [
        'Gunakan lapisan lebih tebal untuk prototipe, braket, perlengkapan, dan bagian yang finishing permukaan Z tidak kritis.',
        'Gunakan lapisan lebih tipis untuk kurva landai, teks kecil, miniatur, dan permukaan kosmetik.',
        'Untuk bagian tinggi, perubahan tinggi lapis bertambah dengan cepat karena setiap lapisan tambahan mengulangi overhead.',
      ],
    },

    { type: 'title', text: 'Kecepatan Cetak, Akselerasi, dan Faktor Kompleksitas', level: 2 },
    {
      type: 'paragraph',
      html: 'Nilai kecepatan cetak adalah target, bukan janji. Printer harus mempercepat ke kecepatan itu, memperlambat sebelum sudut, mematuhi batas jerk atau junction deviation, dan terkadang melambat untuk pendinginan, jembatan, overhang, waktu lapis minimum, dan pulau kecil. Inilah sebabnya mengapa <strong>kalkulator kecepatan cetak ke waktu cetak</strong> membutuhkan faktor kompleksitas. Kotak bersih dengan garis infill lurus panjang dapat bekerja mendekati kecepatan yang diminta. Figur detail, logo, kisi, bagian berulir, atau patung organik dapat menghabiskan sebagian besar waktu pada segmen pendek di mana batas akselerasi lebih penting daripada kecepatan maksimum.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Geometri sederhana',
          description: 'Kotak, panel, dan jalur infill panjang dapat menggunakan pengali kompleksitas lebih rendah.',
          icon: 'mdi:cube-outline',
          points: ['Jalur kontinu lebih panjang', 'Lebih sedikit pulau', 'Lebih sedikit overhead retraksi'],
        },
        {
          title: 'Geometri campuran',
          description: 'Sebagian besar braket, penutup, alat peraga, dan bagian rumah tangga mendekati pengali default.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Perimeter dan infill sama-sama penting', 'Pergerakan moderat', 'Kerugian akselerasi seimbang'],
        },
        {
          title: 'Geometri detail',
          description: 'Fitur kecil, teks, kisi, penyangga, dan permukaan melengkung organik membutuhkan pengali lebih tinggi.',
          icon: 'mdi:vector-polyline',
          points: ['Segmen pendek mendominasi', 'Lebih banyak mulai dan berhenti', 'Lebih banyak retraksi dan pergerakan'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Menaikkan kecepatan cetak: apa yang membaik dan apa yang tidak',
      items: [
        { pro: 'Garis infill panjang selesai lebih cepat saat kecepatan dinaikkan.', con: 'Dinding luar dan detail kecil mungkin masih dibatasi oleh batas profil.' },
        { pro: 'Prototipe besar dengan detail rendah dapat mendapat manfaat dari gerakan lebih cepat.', con: 'Akselerasi, dering, aliran ekstrusi, dan pendinginan dapat membatasi kecepatan yang berguna.' },
        { pro: 'Tabel perbandingan kecepatan dengan cepat menunjukkan potensi penghematan.', con: 'Tidak dapat memprediksi perlambatan khusus slicer seperti waktu lapis minimum.' },
      ],
    },
    {
      type: 'message',
      title: 'Perkiraan kecepatan paling berguna untuk perbandingan relatif',
      ariaLabel: 'Catatan perkiraan kecepatan',
      html: '<p>Gunakan baris 40, 60, dan 80 mm/s untuk perbandingan directional. Jika 80 mm/s hanya menghemat sedikit, cetakan mungkin dibatasi oleh lapisan, overhead, atau kompleksitas, bukan oleh kecepatan mentah.</p>',
    },

    { type: 'title', text: 'Infill, Volume, dan Waktu Material', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalkulator menggunakan luas jejak dan tinggi model sebagai proksi volume kasar, lalu menskalakan volume tersebut dengan rasio padatan efektif. Ini tidak seakurat membaca geometri mesh, tetapi menangkap kebenaran fisik penting: dinding dan kulit tidak hilang saat infill dikurangi. Bagian yang dicetak dengan infill 15% masih memiliki perimeter, lapisan atas, lapisan bawah, fitur padat kecil, dan terkadang antarmuka penyangga. Kalkulator mempertahankan bagian cangkang dalam perkiraan sehingga infill rendah tidak secara tidak realistis meruntuhkan waktu cetak hingga hampir tidak ada.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Tingkatkan luas jejak untuk objek lebar, kotak, pelat datar, baki, dan penutup besar.',
        'Kurangi luas jejak untuk menara sempit, figurin tipis, braket kecil, dan bingkai terbuka.',
        'Gunakan persentase infill sebagai kontrol perencanaan, bukan sebagai kepadatan total bagian.',
        'Ingat bahwa penyangga, brim, raft, menara pembersih, dan limbah multi-warna menambah waktu di luar model itu sendiri.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Contoh: mengapa infill 20% bukan 20% waktu cetak',
      html: '<p>Penutup setinggi 80 mm mungkin memiliki empat dinding, enam lapisan bawah, enam lapisan atas, bos sekrup, dan rongga internal besar. Menurunkan infill dari 40% ke 20% mengurangi panjang jalur internal, tetapi dinding dan kulit masih dicetak pada setiap lapisan. Untuk model dengan banyak perimeter, mengubah jumlah dinding atau tinggi lapis dapat memengaruhi waktu lebih dari sekadar mengubah infill.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Luas jejak', definition: 'Perkiraan luas XY yang ditempati model, digunakan di sini sebagai input volume kasar.' },
        { term: 'Rasio padatan efektif', definition: 'Campuran perencanaan material cangkang dan material infill yang digunakan untuk memperkirakan volume ekstrusi.' },
        { term: 'Manik ekstrusi', definition: 'Manik plastik yang diletakkan oleh nosel; penampangnya tergantung pada tinggi lapis dan lebar ekstrusi.' },
        { term: 'Panjang filamen', definition: 'Panjang filamen mentah yang diperlukan untuk memasok perkiraan volume plastik.' },
      ],
    },

    { type: 'title', text: 'Overhead Pergerakan: Bagian yang Hilang dalam Kalkulator Sederhana', level: 2 },
    {
      type: 'paragraph',
      html: 'Perkiraan durasi sederhana sering mengabaikan gerakan non-ekstrusi. Printer nyata bergerak antar pulau, menarik dan mempriming filamen, menyeka, melompat di Z, menghindari bagian yang sudah dicetak, mengubah arah, dan terkadang berhenti untuk pendinginan. Tindakan ini tidak menciptakan material yang terlihat, tetapi menghabiskan waktu nyata. Persentase overhead tetap adalah cara praktis untuk memperhitungkan pergerakan ketika Anda tidak memiliki jalur alat slicer lengkap. Kisaran default 15-20% adalah titik awal yang berguna untuk bagian FDM material tunggal biasa.',
    },
    {
      type: 'table',
      headers: ['Kondisi cetak', 'Overhead yang disarankan', 'Alasan'],
      rows: [
        ['Satu bagian sederhana', '10-15%', 'Sedikit pulau, lebih sedikit retraksi, sebagian besar jalur kontinu.'],
        ['Bagian fungsional tipikal', '15-22%', 'Perimeter, infill, dan pergerakan moderat.'],
        ['Banyak bagian kecil di satu piring', '22-35%', 'Pergerakan sering antar objek dan mulai berulang.'],
        ['Penyangga atau permukaan detail', '25-40%', 'Antarmuka penyangga, segmen pendek, dan retraksi menambah waktu.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pemanasan alas tidak termasuk',
      badge: 'Total waktu pekerjaan',
      html: '<p>Perkiraan berfokus pada waktu gerakan dan ekstrusi. Tambahkan waktu terpisah untuk pemanasan alas dan nosel, probing, leveling mesh, pemuatan filamen, pendinginan, dan pelepasan bagian saat merencanakan hunian mesin nyata.</p>',
    },
    {
      type: 'tip',
      title: 'Kalibrasi overhead dari satu cetakan nyata',
      html: '<p>Ambil satu pekerjaan selesai, bandingkan durasi slicer atau stopwatch dengan kalkulator ini, lalu sesuaikan overhead dan kompleksitas hingga perkiraan cocok. Kalibrasi lokal itu akan meningkatkan perencanaan masa depan lebih daripada menggunakan nilai generik selamanya.</p>',
    },

    { type: 'title', text: 'Kapan Mempercayai Kalkulator Ini dan Kapan Menggunakan Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Alat ini paling kuat untuk perkiraan awal, percakapan kutipan, demonstrasi kelas, dan membandingkan tinggi lapis versus kecepatan sebelum berkomitmen pada profil. Ini sangat berguna ketika STL yang tepat belum tersedia, ketika pelanggan hanya memberikan dimensi perkiraan, atau ketika Anda ingin tahu apakah suatu perubahan layak diselidiki. Ini tidak dirancang untuk menggantikan perkiraan slicer untuk pekerjaan produksi yang kritis, karena slicer memeriksa geometri mesh yang tepat, kecepatan per fitur, jalur penyangga, urutan dinding, permukaan atas dan bawah, penempatan jahitan, kontrol akselerasi, dan perilaku firmware khusus mesin.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Gunakan kalkulator ini untuk membandingkan profil lapis 0,12 mm, 0,20 mm, dan 0,28 mm dengan cepat.',
        'Gunakan untuk memperkirakan apakah model tinggi terbatas jumlah lapisan sebelum mengubah kecepatan.',
        'Gunakan untuk mendapatkan perkiraan volume material, panjang filamen, dan berat dari dimensi perkiraan.',
        'Gunakan slicer sebelum membeli material, memesan waktu mesin, atau menjanjikan tanggal pengiriman.',
      ],
    },
    {
      type: 'table',
      headers: ['Pertanyaan', 'Jawaban kalkulator', 'Jawaban slicer'],
      rows: [
        ['Akankah lapisan lebih tebal menghemat waktu?', 'Perkiraan directional baik dari jumlah lapisan.', 'Hasil tepat untuk jalur dan permukaan spesifik.'],
        ['Akankah 80 mm/s jauh lebih cepat dari 60 mm/s?', 'Perbandingan skenario kecepatan berguna.', 'Perilaku tepat per fitur kecepatan dan akselerasi.'],
        ['Berapa banyak filamen yang mungkin saya butuhkan?', 'Perkiraan volume, panjang, dan berat.', 'Laporan material spesifik profil.'],
        ['Bisakah saya mengutip pekerjaan produksi ini?', 'Hanya untuk penyaringan awal.', 'Diperlukan untuk kutipan akhir dan perencanaan.'],
      ],
    },
    {
      type: 'summary',
      title: 'Alur kerja terbaik',
      items: [
        'Mulai dengan estimator ini untuk mempersempit pilihan tinggi lapis, kecepatan, dan infill.',
        'Sesuaikan kompleksitas dan overhead menggunakan satu cetakan yang diketahui dari mesin Anda sendiri.',
        'Slice ulang profil kandidat akhir sebelum berkomitmen pada biaya, waktu, atau pengiriman.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
