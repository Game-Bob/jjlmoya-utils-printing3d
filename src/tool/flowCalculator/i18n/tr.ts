import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'hacimsel-akis-hesaplama',
  title: 'Hacimsel Akış: 3D Yazıcınızın Gerçek Hız Limitlerini Anlamak',
  description: '3D yazıcınızın maksimum hacimsel akış hızını hesaplayın. Hotend\'inizin gerçek donanım limitlerini anlayın.',
  ui: {
    title: 'Hacimsel Akış Hesaplayıcı',
    autoAdjust: '%120 OTOMATİK AYARLA',
    configLabel: 'YAPILANDIRMA',
    nozzleLabel: 'NOZZLE',
    lineWidthLabel: 'ÇİZGİ GENİŞLİĞİ',
    layerHeightLabel: 'KATMAN YÜKSEKLİĞİ',
    speedLabel: 'HIZ',
    temperatureLabel: 'SICAKLIK',
    materialLabel: 'MALZEME',
    hotendLimitLabel: 'HOTEND LİMİTİ',
    hotendTooltip: 'Malzeme veya sıcaklık dikkate alınmadan donanımın temel eritme kapasitesi.',
    presetEnder: 'Standart MK8/V6. Kısa eritme bölgesi.',
    presetBambu: 'Yüksek hızlı seramik hotend.',
    presetVolcano: '21 mm ekstra uzun eritme bölgesi.',
    presetHF: 'Özel ultra yüksek performanslı ekstrüderler.',
    baseLimitLabel: 'TEMEL LİMİT',
    resetButton: 'Değerleri sıfırla',
    volumetricFlowLabel: 'GERÇEK HACİMSEL AKIŞ',
    maxSpeedLabel: 'MAKSİMUM HIZ',
    statusLabel: 'DURUM',
    safeStatus: 'GÜVENLİ',
    stratifiedLabel: 'KATMANLI PERFORMANS',
    chartHeightLabel: 'KATMAN YÜKSEKLİĞİ (MM)',
    chartSpeedLabel: 'HIZ LİMİTİ (MM/S)',
    chartSafeLabel: 'GÜVENLİ ARALIK',
    copyButton: 'ETKİN LİMİTİ KOPYALA',
  },
  seo: [
    {
      type: 'title',
      text: 'Hacimsel Akış: 3D Yazıcınızın Gerçek Hız Limitlerini Anlamak',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FDM 3D baskıda, <strong>hacimsel akış</strong>, donanımınız arızalanmadan önce ne kadar hızlı basabileceğinizi belirleyen faktördür. Motor hızları etkileyici görünse de, gerçekten önemli olan hotend\'inizin plastiği tutarlı bir şekilde eritme yeteneğidir.',
    },
    {
      type: 'title',
      text: 'Hacimsel Akış (mm³/s) Nedir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saniyede ekstrüde edilen toplam filament hacmidir. Üç temel değişkenin çarpılmasıyla hesaplanır: baskı hızı, çizgi genişliği ve katman yüksekliği. Eğer ısıtıcı bloğunuzun eritebileceğinden daha fazla plastik ekstrüde etmeye çalışırsanız, korkulan <strong>eksik ekstrüzyon (underextrusion)</strong> ile karşılaşırsınız.',
    },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Referanslar',
  faq: [
    {
      question: 'Yazıcımın maksimum akışı nedir?',
      answer: 'Tamamen hotend\'inize bağlıdır. Standart bir hotend (V6 tipi) tipik olarak 10 ile 12 mm³/s arasında eritme yapar. Volcano veya Revo High Flow gibi yüksek akışlı modeller 30-35 mm³/s değerlerine ulaşır.',
    },
    {
      question: 'PETG neden PLA\'dan daha yavaş akar?',
      answer: 'PETG erimiş haldeyken çok daha yüksek viskoziteye sahiptir. Bu, nozülden geçerken daha fazla direnç gösterdiği anlamına gelir, bu nedenle etkin akış sınırı tipik olarak aynı sıcaklıktaki PLA\'dan %15 daha düşüktür.',
    },
    {
      question: 'Çizgi genişliği akışı nasıl etkiler?',
      answer: 'Çizgi genişliği, katman yüksekliği ile birlikte en doğrudan çarpandır. Aynı hızda 0,4 mm\'den 0,6 mm genişliğe geçerseniz, ekstrüderinizden %50 daha fazla akış talep etmiş olursunuz.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Akış hızı ve hız limitleri',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: Kalibrasyon',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Akış Hızı Kalibrasyonu',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Donanımınızı yapılandırın',
      text: 'Nozül çapınızı seçin ve popüler bir hotend ön ayarını belirleyin.',
    },
    {
      name: 'Parametrelerinizi ayarlayın',
      text: 'Çizgi genişliği, katman yüksekliği ve baskı hızı için sürgüleri hareket ettirin.',
    },
    {
      name: 'Değeri kopyalayın',
      text: 'Maksimum akış değerini kopyalayın ve dilimleyicinizde kullanın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Yazıcımın maksimum akışı nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tamamen hotend\'inize bağlıdır. Standart bir hotend tipik olarak 10 ile 12 mm³/s arasında eritme yapabilir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Hacimsel Akış Hesaplayıcı',
      description: '3D yazıcınızın maksimum hacimsel akış hızını hesaplayın.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hacimsel akış nasıl hesaplanır',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Donanımınızı yapılandırın',
        },
        {
          '@type': 'HowToStep',
          text: 'Parametrelerinizi ayarlayın',
        },
      ],
    },
  ],
};
