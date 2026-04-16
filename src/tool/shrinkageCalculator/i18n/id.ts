import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = 'kalkulator-penyusutan-cetak-3d';
const title = 'Kalkulator Penyusutan 3D: Faktor Skala dan Penyusutan';
const description = 'Hitung seberapa besar Anda harus menskalakan desain 3D Anda berdasarkan material (ABS, Nylon, ASA) untuk mengompensasi penyusutan termal dan mendapatkan pengukuran yang tepat.';

const faqData = [
  {
    question: 'Mengapa ABS menyusut lebih banyak daripada PLA?',
    answer: 'ABS adalah polimer amorf yang membutuhkan suhu lebih tinggi untuk diekstraksi. Saat mendingin dari 250°C ke suhu kamar, gradien termalnya lebih besar, menyebabkan molekul-molekul berkumpul lebih agresif daripada PLA.',
  },
  {
    question: 'Kapan saya harus menggunakan kalibrasi manual?',
    answer: 'Anda harus menggunakannya kapan pun Anda mengganti merek filamen atau saat Anda membutuhkan toleransi mekanis di bawah 0,1 mm. Koefisien penyusutan bervariasi bahkan antara warna yang berbeda dari merek yang sama.',
  },
  {
    question: 'Apakah infill memengaruhi penyusutan?',
    answer: 'Ya. Semakin tinggi kerapatan infill, semakin besar jumlah material yang mengerahkan gaya ke arah pusat bagian saat mendingin. Bagian padat cenderung menyusut sedikit lebih banyak daripada bagian berlubang.',
  },
];

const howToData = [
  {
    name: 'Pilih material Anda',
    text: 'Pilih dari pilihan material yang telah disetel (ABS, ASA, Nylon, dll.) untuk menerapkan koefisien standar industri.',
  },
  {
    name: 'Kalibrasi dengan bagian nyata',
    text: 'Jika Anda membutuhkan presisi total, cetaklah kubus 100mm, ukur saat sudah dingin, dan masukkan datanya dalam mode kalibrasi.',
  },
  {
    name: 'Salin faktornya ke Slicer',
    text: 'Salin persentase skala yang dihasilkan dan terapkan ke sumbu yang sesuai pada perangkat lunak slicer Anda (Cura, PrusaSlicer).',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Pengaturan Material',
    tabCalibration: 'Kalibrasi Manual',
    labelDefaultMaterial: 'Material Default',
    labelEstimatedShrinkage: 'Estimasi Penyusutan',
    unitPercent: '%',
    labelDesignSize: 'Ukuran Desain (Slicer)',
    labelRealSize: 'Ukuran Bagian Cetakan (Nyata)',
    unitMm: 'mm',
    labelAxesCompensation: 'Kompensasi Sumbu',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* Sumbu Z biasanya menyusut lebih sedikit karena daya rekat antarlapisan.',
    labelRecommendationTitle: 'Rekomendasi Teknis',
    labelResultSlicerScale: 'PERSENTASE SKALA (SLICER)',
    labelResultFactor: 'FAKTOR PENGALI',
    btnCopy: 'Salin Persentase',
    btnCopied: 'Disalin!',
    recommendations: {
      'ABS': 'Suhu chamber minimal 40°C disarankan untuk meminimalkan lengkungan tambahan akibat penyusutan.',
      'ASA': 'Ketahanan UV yang sangat baik. Kurangi pendinginan lapisan untuk meningkatkan daya rekat struktural.',
      'Nylon': 'Material yang sangat higroskopis. Keringkan pada suhu 80°C selama 6-8 jam sebelum mencetak untuk menghindari gelembung.',
      'PETG': 'Penyusutan lebih sedikit. Gunakan pengali aliran (flow) 95-98% jika Anda mengalami over-extrusion pada bagian yang padat.',
      'PLA': 'Penyusutan minimal. Pastikan aliran udara yang baik (kipas lapisan 100%) untuk detail halus.'
    }
  },
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Penyusutan Cetak 3D: Akurasi Dimensional',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda adalah penggemar <strong>cetak 3D</strong>, Anda mungkin pernah menghadapi masalah ini: Anda mendesain sebuah bagian dengan ukuran sempurna (misalnya, kubus 20x20x20 mm), Anda mencetaknya, dan saat diukur dengan jangka sorong, Anda mendapati ukurannya 19,7 mm. Apa yang terjadi? Jawabannya adalah <strong>penyusutan material</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Penyusutan adalah fenomena fisik yang tak terelakkan yang terjadi ketika termoplastik berubah dari keadaan cairnya (suhu tinggi) menjadi keadaan padat pada suhu kamar. Saat mendingin, molekul-molekulnya menata ulang dan "mengencang", mengurangi volume total bagian tersebut. <strong>Kalkulator penyusutan</strong> kami dirancang untuk membantu Anda memprediksi perubahan ini dan menyesuaikan skala di slicer Anda sehingga bagian-bagian Anda pas pada percobaan pertama.',
    },
    {
      type: 'title',
      text: 'Mengapa plastik menyusut?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam pencetakan FDM (Fused Deposition Modeling), kita mendepositkan lapisan plastik panas (antara 200°C dan 300°C) ke sebuah permukaan. Saat material mendingin, ia mengalami apa yang dikenal sebagai <strong>koefisien ekspansi termal</strong>. Pada dasarnya, energi termal menjaga molekul-molekul tetap berjauhan; ketika energi itu menghilang, gaya antarmolekul menariknya lebih dekat satu sama lain.',
    },
    {
      type: 'paragraph',
      html: 'Tidak semua material berperilaku sama. Plastik amorf (seperti PLA) memiliki struktur tidak teratur yang cenderung menyusut lebih sedikit. Sebaliknya, plastik yang cenderung mengkristal atau membutuhkan suhu sangat tinggi (seperti ABS atau Nylon) memiliki penyusutan yang jauh lebih agresif dan sulit dikendalikan.',
    },
    {
      type: 'title',
      text: 'Material Umum dan Rentang Penyusutannya',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrylonitrile Butadiene Styrene): 0,8% – 2,0%. Ini adalah salah satu material tersulit karena penyusutannya yang tinggi, yang sering menyebabkan "warping" (deformasi pada sudut-sudutnya).',
        'ASA: 0,5% – 0,9%. Alternatif ABS yang tahan UV dengan penyusutan yang agak lebih terkendali.',
        'Nylon (PA): 0,7% – 2,5%. Tergantung pada apakah material tersebut memiliki campuran serat karbon atau kaca, penyusutannya dapat bervariasi secara drastis.',
        'PETG: 0,2% – 0,5%. Sangat stabil secara dimensional, ideal untuk bagian mekanis yang tidak memerlukan ketahanan termal ABS.',
        'PLA: 0,1% – 0,3%. Standar emas untuk kemudahan penggunaan; penyusutannya hampir dapat diabaikan untuk sebagian besar penggunaan.',
      ],
    },
    {
      type: 'title',
      text: 'Cara menghitung Faktor Skala',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Banyak pengguna melakukan kesalahan dengan hanya "menambahkan persentase" (jika kurang 2%, mereka menskalakan ke 102%). Namun, secara matematis untuk mengompensasi kerugian, skalanya harus sedikit berbeda. Rumus yang benar yang digunakan oleh kalkulator kami adalah: <br><strong>Faktor Skala = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Di mana <strong>S</strong> adalah persentase penyusutan yang dinyatakan dalam desimal (misal 0,02 untuk 2%). Sebagai contoh, untuk material yang menyusut 2%, faktor skalanya adalah 1,0204, yang berarti di slicer (Cura, PrusaSlicer, Bambu Studio) kita harus mengatur skala ke <strong>102,04%</strong>.',
    },
    {
      type: 'title',
      text: 'Kalibrasi Manual: Ukuran yang Diinginkan vs. Ukuran Nyata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Proses kalibrasi balik cukup mudah: cetak objek uji dengan ukuran yang diketahui (misal kubus kalibrasi 100mm). Setelah benar-benar dingin (menunggu minimal 30 menit adalah krusial), ukur bagian tersebut dengan jangka sorong digital. Masukkan kedua nilai ke dalam kalkulator dan alat ini akan memberi Anda persentase penyesuaian yang tepat untuk gulungan filamen tersebut.',
    },
    {
      type: 'title',
      text: 'Penyusutan Tidak Seragam: Masalah Sumbu X, Y, dan Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam cetak 3D, fisikan tidak sama di semua arah. Karena lapisan didepositkan di atas satu sama lain, <strong>daya rekat antarlapisan</strong> pada sumbu Z biasanya membatasi penyusutan vertikal. Biasanya, Anda akan mendapati bahwa pengukuran pada bidang horizontal (sumbu X dan Y) memerlukan lebih banyak kompensasi daripada tinggi (sumbu Z).',
    },
    {
      type: 'tip',
      title: 'Kiat Pro',
      html: '<p>Jika Anda bekerja dengan nylon atau material teknis, selalu ukur bagian tersebut 24 jam setelah pencetakan. Beberapa plastik menyerap kelembapan lingkungan dan dapat sedikit "mengembang" setelah dingin, mengubah ukuran akhir.</p>',
    },
    {
      type: 'title',
      text: 'Faktor yang memengaruhi akurasi akhir',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Suhu Extruder: Pada suhu yang lebih tinggi, material masuk dalam keadaan lebih ekspansif namun juga biasanya mengalami pendinginan yang lebih mendadak.',
        'Suhu Bed: Bed yang panas mencegah bagian dasar menyusut lebih cepat daripada bagian atas, mengurangi warping.',
        'Kerapatan Infill: Bagian yang sangat rapat memiliki massa plastik yang lebih banyak yang mengerahkan gaya penyusutan internal ke arah pusat.',
        'Kipas Lapisan: Pada material seperti ABS, kipas yang terlalu kuat dapat menyebabkan retakan dan penyusutan yang berlebihan dan tidak teratur.',
      ],
    },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'Simplify3D: Akurasi Dimensional dan Penyusutan',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Tabel Material dan Faktor Penyusutan',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Memahami Penyusutan Material Cetak 3D',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
