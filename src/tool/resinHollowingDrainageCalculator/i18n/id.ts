import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'kalkulator-pelubangan-drainase-resin-sla';
const title = 'Kalkulator Pelubangan dan Drainase Resin SLA';
const description = 'Hitung ketebalan dinding konservatif, diameter lubang pembuangan, jumlah ventilasi minimum, dan penghematan resin yang disesuaikan dengan kompleksitas untuk cetakan resin SLA dan DLP berongga.';

const faqData = [
  { question: 'Mengapa kalkulator selalu merekomendasikan setidaknya dua lubang pembuangan?', answer: 'Cetakan resin berongga membutuhkan satu jalur untuk keluarnya resin cair dan jalur lain untuk masuknya udara. Dua lubang juga membantu menghilangkan efek cangkir hisap terhadap film pelepas selama proses pengelupasan.' },
  { question: 'Mengapa penghematan resin lebih rendah daripada volume berongga teoritis?', answer: 'Resin cair tetap menempel pada dinding internal, rusuk, sudut, penyangga, dan celah kecil. Kalkulator mengurangi 5, 10, atau 15 persen dari volume berongga teoritis berdasarkan kompleksitas geometri.' },
  { question: 'Apakah ketebalan dinding 1,5 mm selalu cukup?', answer: 'Tidak. Ini adalah batas keamanan minimum untuk sebagian besar cetakan resin desktop. Bagian yang tinggi, berat, beban teknik, lingkungan panas, atau pengamplasan agresif mungkin memerlukan dinding yang lebih tebal.' },
  { question: 'Di mana lubang pembuangan harus ditempatkan?', answer: 'Tempatkan lubang sedekat mungkin ke sisi pelat cetak dan titik pengumpulan resin terendah dalam orientasi pencetakan, lalu verifikasi bahwa tidak ada rongga tertutup yang tersisa di slicer.' },
];

const howToData = [
  { name: 'Masukkan volume dan tinggi model', text: 'Gunakan volume slicer setelah penyangga dan orientasi, lalu masukkan tinggi bagian dalam orientasi pencetakan.' },
  { name: 'Pilih kompleksitas geometris', text: 'Pilih kompleksitas sederhana, sedang, atau tinggi sehingga resin yang terperangkap dikurangi dari penghematan berongga teoritis.' },
  { name: 'Pilih jenis resin', text: 'Pilih resin standar, tangguh, atau teknik. Resin yang lebih kental mendapatkan rekomendasi diameter pembuangan yang lebih besar.' },
  { name: 'Periksa rekomendasi dinding dan pembuangan', text: 'Gunakan ketebalan dinding, diameter pembuangan, jumlah lubang, dan daftar periksa sebelum melakukan slicing file akhir.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

const seoData = [
    {
      type: 'title',
      text: 'Apa yang Dilakukan Kalkulator Rongga dan Drainase Resin SLA?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Alat ini memecahkan salah satu tantangan paling kritis dalam pencetakan 3D resin SLA, DLP, dan LCD: mengoptimalkan model berongga. Mencetak bagian resin padat itu mahal, berat, dan meningkatkan gaya kelupas selama proses pencetakan. Membuat model menjadi berongga mengurangi penggunaan bahan, tetapi memasukkan rongga kosong tanpa drainase yang tepat menyebabkan resin yang tidak terawat terperangkap dan kegagalan cetak akibat gaya vakum. Kalkulator ini menghitung ketebalan dinding yang ideal, menyarankan diameter dan jumlah lubang pembuangan yang tepat, dan memperkirakan penghematan resin yang sebenarnya dengan memperhitungkan resin cair yang pasti tetap terperangkap di dinding internal bagian yang dicetak.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: 'Ketebalan dinding minimum yang direkomendasikan untuk SLA desktop'
          },
          {
            value: '2 lubang',
            label: 'Jumlah minimum lubang udara yang diperlukan untuk memecah vakum'
          },
          {
            value: '10-15%',
            label: 'Pengurangan volume resin karena retensi permukaan internal'
          },
          {
            value: '30-70%',
            label: 'Rata-rata pengurangan berat total yang dicapai dengan membuat rongga'
          }
        ]
    },
    {
      type: 'title',
      text: 'Bagaimana Ketebalan Dinding Mempengaruhi Penghematan Resin',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Ketebalan dinding adalah variabel utama yang menentukan jumlah resin yang dihemat. Dinding yang lebih tebal meningkatkan kekuatan struktural tetapi dengan cepat mengonsumsi lebih banyak resin, mengurangi efisiensi pembuatan rongga. Sebaliknya, dinding yang terlalu tipis akan rapuh, rentan melengkung saat penyembuhan,  dan mungkin gagal menahan gaya kelupas mekanis saat printer memisahkan setiap lapisan dari film FEP. Tujuannya adalah untuk encontrar titik optimal di mana model mempertahankan bentuk dan kegunaannya sekaligus memaksimalkan penghematan bahan.'
    },
    {
      type: 'proscons',
      title: 'Kelebihan dan Kekurangan Membuat Rongga pada Cetakan Resin',
      items: [
          {
            pro: 'Pengurangan besar dalam biaya bahan dan berat cetakan secara keseluruhan',
            con: 'Memerlukan pemrosesan pasca-cetak untuk mencuci dan menyembuhkan rongga internal'
          },
          {
            pro: 'Luas permukaan yang lebih rendah per lapisan mengurangi gaya kelupas pada film FEP',
            con: 'Lubang yang ditempatkan secara tidak tepat dapat merusak estetika visual model'
          },
          {
            pro: 'Mengurangi tekanan termal dan warping selama penyembuhan pasca-cetak',
            con: 'Risiko resin cair yang terperangkap menyebabkan bagian tersebut retak di kemudian hari'
          }
        ]
    },
    {
      type: 'title',
      text: 'Memahami Efek Cangkir Hisap dalam Cetakan Resin Berongga',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Ketika model berongga dicetak, ia membentuk ruang tertutup saat dicelupkan ke dalam wadah. Jika ruang ini tidak memiliki lubang ventilasi, setiap siklus pengangkatan menciptakan vakum parsial yang kuat (efek cangkir hisap) antara lapisan yang disembuhkan dan film pelepas. Gaya ini menarik cetakan, menyebabkan pemisahan lapisan, garis lapisan, kegagalan penyangga, atau bahkan merobek model sepenuhnya dari pelat cetak. Menambahkan lubang ventilasi memungkinkan udara masuk, menetralkan perbedaan tekanan dan memastikan siklus pengelupasan yang lancar.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bahaya Ruang Berongga yang Tertutup Rapat',
      html: 'Jangan pernah membiarkan ruang berongga tertutup rapat. Resin cair yang terperangkap di dalam bagian yang dicetak perlahan-lahan akan merusak dinding yang disembuhkan seiring waktu, yang akhirnya menyebabkan model retak, membocorkan resin beracun, atau hancur sepenuhnya. Selalu sertakan setidaknya dua lubang untuk mencuci bagian dalam dan menyembuhkannya dengan sumber cahaya UV internal.'
    },
    {
      type: 'title',
      text: 'Praktik Terbaik Penempatan Lubang Pembuangan',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Tempatkan lubang pembuangan sedekat mungkin dengan pelat cetak untuk memungkinkan resin keluar lebih awal durante pencetakan.',
          'Selalu gunakan setidaknya dua lubang: satu untuk membiarkan resin cair mengalir keluar dan satu lagi untuk membiarkan udara masuk.',
          'Arahkan lubang pada permukaan yang tidak terlihat, seperti bagian bawah alas atau di belakang sambungan, untuk menjaga estetika.',
          'Pastikan setiap ruang internal atau kantong yang terisolasi memiliki set lubang pembuangannya sendiri.'
        ]
    },
    {
      type: 'title',
      text: 'Bagaimana Kalkulator Menyesuaikan Kompleksitas Geometris',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Geometri Sederhana',
            description: 'Model detail rendah, bola, lubang veya balok. Menjebak resin minimal (sekitar 5%) pada permukaan interior yang datar.'
          },
          {
            title: 'Geometri Sedang',
            description: 'Model karakter atau bagian mekanis standar. Penyangga internal dan lekukan menahan resin sedang (sekitar 10%).',
            highlight: true
          },
          {
            title: 'Kompleksitas Tinggi',
            description: 'Miniatur yang sangat detail, struktur kisi, atau saluran berongga yang kompleks. Menahan resin yang signifikan (sekitar 15%+) karena aksi kapiler.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Memahami Viskositas Resin dan Ukuran Lubang Pembuangan',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Kelas Resin',
          'Tingkat Viskositas',
          'Min Diameter Lubang',
          'Penempatan yang Direkomendasikan'
        ],
      rows: [
          [
              'Resin Standar',
              'Rendah-Sedang',
              '2.0 - 3.0 mm',
              'Alas atau permukaan datar tersembunyi'
            ],
          [
              'Tangguh / Fleksibel',
              'Sedang-Tinggi',
              '3.0 - 4.5 mm',
              'Sudut dan sambungan untuk menghindari pengelupasan'
            ],
          [
              'Teknik / Castable',
              'Sangat Tinggi',
              '4.5 - 6.0 mm',
              'Garis pandang langsung untuk drainase gravitasi'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Kapan Harus Meningkatkan Ketebalan Dinding Melebihi 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'Skala dan Fungsi menentukan ketebalan dinding',
      html: 'Meskipun 1,5 mm adalah batas minimum yang andal untuk figur pajangan kecil, Anda harus memperbesar ketebalan dinding untuk cetakan yang lebih besar. Untuk bagian yang lebih tinggi dari 150 mm, targetkan dinding 2,0 mm hingga 2,5 mm. Untuk komponen mekanis penahan beban atau bagian yang dicetak dengan resin fleksibel/elastomer, dinding harus setebal 3,0 mm or lebih untuk prevenir keruntuhan struktural di bawah beban.'
    },
    {
      type: 'title',
      text: 'Glosarium Teknis untuk Pencetakan SLA Berongga',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'Rongga SLA',
            definition: 'Proses mengubah model 3D padat menjadi cangkang berongga dengan ketebalan dinding tertentu untuk menghemat resin & waktu cetak.'
          },
          {
            term: 'Efek Cangkir Hisap',
            definition: 'Gaya vakum yang tercipta saat rongga berongga tertutup ditarik dari film pelepas selama pencetakan.'
          },
          {
            term: 'Gaya Kelupas',
            definition: 'Tegangan mekanis yang dialami oleh model & penyangga saat lapisan yang disembuhkan dipisahkan dari bagian bawah wadah.'
          },
          {
            term: 'Perangkapan Resin',
            definition: 'Penahanan resin cair yang tidak terawat di dalam sudut internal, penyangga & tekstur karena tegangan permukaan.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Daftar Periksa Ringkasan untuk Keberhasilan Cetakan Berongga',
      level: 2
    },
    {
      type: 'summary',
      title: 'Daftar Periksa SLA Pra Iris',
      items: [
          'Verifikasi ketebalan rongga sesuai untuk skala model.',
          'Konfirmasikan setidaknya dos lubang pembuangan ditempatkan pada titik pencetakan terendah.',
          'Periksa rongga internal terisolasi yang tidak memiliki ventilasi.',
          'Rencanakan pencucian internal dengan IPA & penyembuhan LED UV internal.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Unit',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    modelInputsLabel: 'Input Model',
    volumeLabel: 'Volume Total Model',
    heightLabel: 'Tinggi Bagian',
    complexityLabel: 'Kompleksitas Geometris',
    resinTypeLabel: 'Jenis Resin',
    simpleLabel: 'Sederhana',
    moderateLabel: 'Sedang',
    highLabel: 'Tinggi',
    standardLabel: 'Standar',
    toughLabel: 'Tangguh',
    engineeringLabel: 'Teknik',
    resultsLabel: 'Hasil Pelubangan dan Drainase',
    wallThicknessLabel: 'Dinding yang Direkomendasikan',
    drainDiameterLabel: 'Diameter Pembuangan',
    drainHoleCountLabel: 'Lubang Minimum',
    adjustedSavingLabel: 'Perkiraan Penghematan Resin',
    adjustedSavingNote: 'Disesuaikan dengan kompleksitas untuk memperhitungkan resin cair yang tersisa pada permukaan internal.',
    trapFactorLabel: 'Faktor Resin Terperangkap',
    trapFactorHelp: 'Faktor ini berubah sesuai kompleksitas geometris untuk mengompensasi tegangan permukaan resin kental pada rongga tertutup.',
    theoreticalSavingLabel: 'Volume Berongga Teoritis',
    trappedAllowanceLabel: 'Toleransi Resin Terperangkap',
    savingUnitLabel: 'Penghematan',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Catatan: Lubang pembuangan harus ditempatkan di dekat sisi pelat cetak dan titik pengumpulan resin terendah dalam orientasi pencetakan.',
    vacuumWarning: 'Bagian berongga selalu membutuhkan setidaknya dua lubang pembuangan untuk menghilangkan vakum pada film pelepas.',
    trappedResinWarning: 'Geometri yang kompleks menjebak resin cair di dalamnya; perhitungan ini memperkirakan toleransinya.',
    checklistTitle: 'Daftar Periksa Sebelum Slicing',
    checklistItems: ['Pastikan lubang pembuangan berada di area dekat pelat cetak.', 'Verifikasi bahwa ketebalan dinding tidak kurang dari 1,5 mm.', 'Pastikan tidak ada pulau resin tertutup atau rongga kosong dalam model.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
