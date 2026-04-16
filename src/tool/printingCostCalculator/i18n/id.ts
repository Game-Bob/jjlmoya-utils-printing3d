import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = 'kalkulator-biaya-cetak-3d';
const title = 'Kalkulator Biaya Cetak 3D: Filamen dan Energi';
const description = 'Hitung harga nyata dari cetakan 3D Anda. Termasuk biaya material, listrik, amortisasi mesin, dan tenaga kerja.';

const faqData = [
  {
    question: 'Mengapa biaya listrik sangat bervariasi?',
    answer: 'Konsumsi tertinggi berasal dari menjaga agar bed tetap panas. Material seperti ABS (100°C) mengonsumsi jauh lebih banyak daripada PLA (60°C). Apakah printer terbuka atau tertutup juga berpengaruh.',
  },
  {
    question: 'Bagaimana cara mengetahui berapa watt yang dikonsumsi printer saya?',
    answer: 'Kebanyakan printer rumahan mengonsumsi rata-rata 100-150W selama pengoperasian. Anda dapat mengukurnya secara akurat menggunakan smart plug atau wattmeter.',
  },
  {
    question: 'Apa itu margin limbah?',
    answer: 'Ini adalah filamen yang bukan bagian dari bagian akhir: penyangga (support), raft, skirt, dan pembersihan awal (purging). Kami merekomendasikan minimal 5% agar realistis.',
  },
];

const howToData = [
  {
    name: 'Masukkan data teknis',
    text: 'Tulis berat bagian tersebut (diberikan oleh perangkat lunak slicer seperti Cura), waktu pencetakan, dan konsumsi mesin Anda.',
  },
  {
    name: 'Konfigurasi biaya ekonomi',
    text: 'Sesuaikan harga spool Anda, tarif listrik Anda, dan berapa nilai jam kerja manual Anda.',
  },
  {
    name: 'Analisis keuntungan',
    text: 'Geser slider margin untuk melihat harga eceran yang disarankan dan tinjau diagram lingkaran untuk melihat ke mana uang itu pergi.',
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

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Material',
    partWeightLabel: 'Berat bagian (neto)',
    gramsUnit: 'gram',
    spoolPriceLabel: 'Harga spool (1kg)',
    spoolPriceUnit: 'Rp/kg',
    wasteMarginLabel: 'Margin limbah: ',
    energyTitle: 'Energi dan Waktu',
    printTimeLabel: 'Waktu cetak',
    hoursUnit: 'jam',
    averagePowerLabel: 'Konsumsi rata-rata',
    wattsUnit: 'watt',
    electricityRateLabel: 'Tarif listrik',
    kwhPriceUnit: 'Rp/kWh',
    amortizationTitle: 'Amortisasi dan Tenaga Kerja',
    machineCostHourLabel: 'Biaya mesin per jam',
    priceHourUnit: 'Rp/jam',
    laborCostHourLabel: 'Tenaga kerja (manual)',
    minutesUnit: 'menit',
    manufacturingCostLabel: 'Biaya Manufaktur',
    suggestedPriceLabel: 'Harga yang Disarankan (+{margin}%)',
    costBreakdownTitle: 'Rincian Biaya',
    plasticLabel: 'Plastik',
    electricityLabel: 'Listrik',
    machineLabel: 'Mesin',
    laborLabel: 'Tenaga Kerja',
    proTip: 'Tahukah Anda bahwa memanaskan bed hingga 100°C untuk ABS dapat menggandakan biaya listrik dibandingkan dengan PLA? Jangan lupa hitung kegagalan: jika 10% bagian Anda gagal, biaya nyata Anda 10% lebih tinggi.',
  },
  seo: [
    {
      type: 'title',
      text: 'Menghitung Biaya Nyata Cetak 3D: Lebih dari Sekadar Filamen',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Saat kita memulai di dunia manufaktur aditif, sudah umum untuk berpikir bahwa satu-satunya biaya adalah plastik yang keluar dari nozzle. Namun, jika Anda ingin menjadikannya bisnis atau sekadar mengelola hobi Anda dengan lebih baik, Anda harus memahami bahwa <strong>profitabilitas</strong> terletak pada detail yang tidak terlihat pada pandangan pertama.',
    },
    {
      type: 'title',
      text: '4 Pilar Biaya dalam Cetak 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kalkulator kami merinci harga akhir menjadi empat area fundamental:',
    },
    {
      type: 'summary',
      items: [
        'Material dan Limbah: Termasuk berat bagian, tetapi juga plastik yang digunakan dalam support, skirt, dan purge. Kami selalu menyarankan untuk menambahkan margin 5-10% untuk kemungkinan kegagalan cetak.',
        'Konsumsi Listrik: Printer 3D tidak menghabiskan daya yang sama saat mencetak PLA (bed di 60°C) dibandingkan ABS atau Nylon (bed di 100°C+). Harga kWh dapat menjadi pembeda pada bagian yang besar.',
        'Amortisasi Mesin: Setiap jam printer berjalan, komponennya (belt, kipas, nozzle) aus. Menyertakan biaya per jam yang kecil akan memungkinkan Anda membayar untuk perbaikan di masa depan.',
        'Tenaga Kerja: Waktu Anda adalah yang paling berharga. Menyiapkan file, membersihkan bed, dan pasca-pemrosesan bagian harus diperhitungkan.',
      ],
    },
    {
      type: 'title',
      text: 'Bagaimana cara menghitung amortisasi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cara sederhana adalah dengan membagi harga beli printer Anda dengan perkiraan masa pakainya dalam jam. Misalnya, jika sebuah printer harganya Rp 4.000.000 dan Anda memperkirakannya akan bekerja setidaknya 2000 jam sebelum renovasi besar, biaya amortisasinya adalah <strong>Rp 2.000 per jam</strong>.',
    },
    {
      type: 'tip',
      title: 'Hemat Listrik',
      html: '<p>Jika Anda mencetak banyak, pertimbangkan untuk menutup printer Anda dengan enclosure. Ini tidak hanya membantu mencetak material teknis tetapi juga menahan panas dan membuat heated bed mengonsumsi energi jauh lebih sedikit untuk menjaga suhu.</p>',
    },
    {
      type: 'title',
      text: 'Strategi Harga Jual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Setelah Anda mengetahui biaya dasar Anda, Anda harus memutuskan margin Anda. Dalam dunia cetak 3D on-demand, margin 50-100% di atas total biaya adalah hal yang umum untuk menutupi risiko kegagalan tak terduga dan keuntungan komersial. Jika bagian tersebut memerlukan banyak pekerjaan pengamplasan dan pengecatan manual, margin tersebut harus lebih tinggi.',
    },
    {
      type: 'summary',
      items: [
        'Harga berdasarkan waktu: Ideal untuk layanan pencetakan murni.',
        'Harga berdasarkan gram: Umum untuk bagian yang masif namun sederhana.',
        'Harga berdasarkan nilai: Jika desainnya unik, harga tidak boleh didasarkan hanya pada biaya, melainkan pada apa yang bersedia dibayar oleh klien.',
      ],
    },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan tentang Biaya 3D',
  faq: faqData,
  bibliographyTitle: 'Bibliografi dan Sumber Daya',
  bibliography: [
    {
      name: 'PrusaPrinters: Menghitung biaya cetak 3D',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Estimasi Material dan Biaya',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Panduan biaya manufaktur aditif',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
