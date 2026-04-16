import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'kalkulator-aliran-volumetrik',
  title: 'Aliran Volumetrik: Memahami Batas Kecepatan Nyata Printer 3D Anda',
  description: 'Hitung laju aliran volumetrik maksimum printer 3D Anda. Pahami batasan perangkat keras nyata dari hotend Anda.',
  ui: {
    title: 'Kalkulator Aliran Volumetrik',
    autoAdjust: 'PENYESUAIAN OTOMATIS 120%',
    configLabel: 'KONFIGURASI',
    nozzleLabel: 'NOZZLE',
    lineWidthLabel: 'LEBAR GARIS',
    layerHeightLabel: 'TINGGI LAPISAN',
    speedLabel: 'KECEPATAN',
    temperatureLabel: 'SUHU',
    materialLabel: 'MATERIAL',
    hotendLimitLabel: 'BATAS HOTEND',
    hotendTooltip: 'Kapasitas leleh dasar perangkat keras tanpa mempertimbangkan material atau suhu.',
    presetEnder: 'Standar MK8/V6. Melt zone pendek.',
    presetBambu: 'Hotend keramik berkecepatan tinggi.',
    presetVolcano: 'Melt zone ekstra panjang 21mm.',
    presetHF: 'Ekstruder performa ultra-tinggi kustom.',
    baseLimitLabel: 'BATAS DASAR',
    resetButton: 'Reset nilai',
    volumetricFlowLabel: 'ALIRAN VOLUMETRIK NYATA',
    maxSpeedLabel: 'KECEPATAN MAKSIMUM',
    statusLabel: 'STATUS',
    safeStatus: 'AMAN',
    stratifiedLabel: 'PERFORMA TERSTRATIFIKASI',
    chartHeightLabel: 'TINGGI LAPISAN (MM)',
    chartSpeedLabel: 'BATAS KECEPATAN (MM/S)',
    chartSafeLabel: 'RENTANG AMAN',
    copyButton: 'SALIN BATAS EFEKTIF',
  },
  seo: [
    {
      type: 'title',
      text: 'Aliran Volumetrik: Memahami Batas Kecepatan Nyata Printer 3D Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam pencetakan 3D FDM, <strong>aliran volumetrik</strong> adalah faktor yang menentukan seberapa cepat Anda dapat mencetak sebelum perangkat keras Anda gagal. Meskipun kecepatan motor mungkin terdengar mengesankan, kemampuan hotend Anda untuk melelehkan plastik secara konsisten adalah hal yang benar-benar penting.',
    },
    {
      type: 'title',
      text: 'Apa itu Aliran Volumetrik (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah volume total filamen yang diekstrusi per detik. Dihitung dengan mengalikan tiga variabel kunci: kecepatan cetak, lebar garis, dan tinggi lapisan. Jika Anda mencoba mengekstrusi lebih banyak plastik daripada yang bisa dilelehkan oleh blok pemanas, Anda akan menghadapi <strong>underextrusion</strong>.',
    },
  ],
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  bibliographyTitle: 'Referensi',
  faq: [
    {
      question: 'Berapa aliran maksimum printer saya?',
      answer: 'Itu sepenuhnya tergantung pada hotend Anda. Hotend standar (tipe V6) biasanya melelehkan antara 10 dan 12 mm³/s. Model high-flow seperti Volcano atau Revo High Flow mencapai 30-35 mm³/s.',
    },
    {
      question: 'Mengapa PETG mengalir lebih lambat daripada PLA?',
      answer: 'PETG memiliki viskositas yang jauh lebih tinggi saat meleleh. Ini berarti ia menawarkan lebih banyak resistensi saat melewati nozzle, sehingga batas aliran efektifnya biasanya 15% lebih rendah daripada PLA pada suhu yang sama.',
    },
    {
      question: 'Bagaimana lebar garis memengaruhi aliran?',
      answer: 'Lebar garis adalah pengali paling langsung bersama dengan tinggi lapisan. Jika Anda mengubah lebar dari 0,4mm ke 0,6mm pada kecepatan yang sama, Anda menuntut aliran 50% lebih banyak dari ekstruder Anda.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Laju aliran dan batas kecepatan',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Kalibrasi',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Kalibrasi Laju Aliran',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Konfigurasi perangkat keras Anda',
      text: 'Pilih diameter nozzle dan pilih preset hotend yang populer.',
    },
    {
      name: 'Sesuaikan parameter Anda',
      text: 'Geser slider untuk lebar garis, tinggi lapisan, dan kecepatan cetak.',
    },
    {
      name: 'Salin nilainya',
      text: 'Salin nilai aliran maksimum dan gunakan di slicer Anda.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Berapa aliran maksimum printer saya?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Itu sepenuhnya tergantung pada hotend Anda. Hotend standar biasanya melelehkan antara 10 dan 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kalkulator Aliran Volumetrik',
      description: 'Hitung laju aliran volumetrik maksimum printer 3D Anda.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Cara menghitung aliran volumetrik',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Konfigurasi perangkat keras Anda',
        },
        {
          '@type': 'HowToStep',
          text: 'Sesuaikan parameter Anda',
        },
      ],
    },
  ],
};
