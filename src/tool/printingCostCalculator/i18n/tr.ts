import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = '3d-yazici-maliyet-hesaplama';
const title = '3D Yazıcı Maliyet Hesaplama: Filament ve Enerji';
const description = '3D baskılarınızın gerçek fiyatını hesaplayın. Malzeme maliyeti, elektrik, makine amortismanı ve işçilik dahildir.';

const faqData = [
  {
    question: 'Elektrik maliyeti neden bu kadar çok değişiyor?',
    answer: 'En yüksek tüketim, yatağı sıcak tutmaktan kaynaklanır. ABS (100°C) gibi malzemeler PLA\'dan (60°C) çok daha fazla tüketir. Yazıcının açık veya kapalı kasa olması da maliyeti etkiler.',
  },
  {
    question: 'Yazıcımın kaç watt tükettiğini nasıl anlarım?',
    answer: 'Çoğu ev tipi yazıcı çalışma sırasında ortalama 100-150W tüketir. Akıllı priz veya vatmetre kullanarak hassas ölçüm yapabilirsiniz.',
  },
  {
    question: 'Fire (waste) marjı nedir?',
    answer: 'Son parçanın parçası olmayan filamenttir: destekler (supports), raft, skirt ve başlangıç temizliği (purging). Gerçekçi olması için en az %5 öneriyoruz.',
  },
];

const howToData = [
  {
    name: 'Teknik verileri girin',
    text: 'Dilimleme yazılımının (Cura gibi) verdiği parça ağırlığını, baskı süresini ve makinenizin tüketimini yazın.',
  },
  {
    name: 'Ekonomik maliyetleri yapılandırın',
    text: 'Makara fiyatınızı, elektrik tarifenizi ve manuel işçilik saatinize verdiğiniz değeri ayarlayın.',
  },
  {
    name: 'Kâr analizi yapın',
    text: 'Önerilen perakende fiyatını görmek için marj kaydırıcısını hareket ettirin ve paranın nereye gittiğini görmek için pasta grafiğini inceleyin.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Malzeme',
    partWeightLabel: 'Parça ağırlığı (net)',
    gramsUnit: 'gram',
    spoolPriceLabel: 'Makara fiyatı (1kg)',
    spoolPriceUnit: '₺/kg',
    wasteMarginLabel: 'Fire marjı: ',
    energyTitle: 'Enerji ve Zaman',
    printTimeLabel: 'Baskı süresi',
    hoursUnit: 'saat',
    averagePowerLabel: 'Ortalama tüketim',
    wattsUnit: 'watt',
    electricityRateLabel: 'Elektrik tarifesi',
    kwhPriceUnit: '₺/kWh',
    amortizationTitle: 'Amortisman ve İşçilik',
    machineCostHourLabel: 'Saatlik makine maliyeti',
    priceHourUnit: '₺/s',
    laborCostHourLabel: 'İşçilik (manuel)',
    minutesUnit: 'dakika',
    manufacturingCostLabel: 'Üretim Maliyeti',
    suggestedPriceLabel: 'Önerilen Fiyat (+{margin}%)',
    costBreakdownTitle: 'Maliyet Dağılımı',
    plasticLabel: 'Plastik',
    electricityLabel: 'Elektrik',
    machineLabel: 'Makine',
    laborLabel: 'İşçilik',
    proTip: 'ABS için yatağı 100°C\'ye ısıtmanın, PLA\'ya kıyasla elektrik maliyetini iki katına çıkarabileceğini biliyor muydunuz? Hataları saymayı unutmayın: Parçalarınızın %10\'u başarısız olursa, gerçek maliyetiniz %10 daha yüksektir.',
  },
  seo: [
    {
      type: 'title',
      text: '3D Baskının Gerçek Maliyetini Hesaplamak: Filamentin Ötesi',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Eklemeli imalat dünyasına başladığımızda, tek maliyetin lüleden çıkan plastik olduğunu düşünmek yaygındır. Ancak bunu bir iş haline getirmek veya hobinizi daha iyi yönetmek istiyorsanız, <strong>kârlılığın</strong> ilk bakışta görünmeyen detaylarda yattığını anlamalısınız.',
    },
    {
      type: 'title',
      text: '3D Baskıda Maliyetin 4 Temel Taşı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcımız nihai fiyatı dört temel alana ayırır:',
    },
    {
      type: 'summary',
      items: [
        'Malzeme ve Fire: Parçanın ağırlığını değil, aynı zamanda desteklerde, skirtlerde ve temizleme işlemlerinde kullanılan plastiği de içerir. Olası baskı hataları için her zaman %5-10 marj eklemenizi öneririz.',
        'Elektrik Tüketimi: 3D yazıcı PLA (yatak 60°C) basarken ABS veya Naylon (yatak 100°C+) basarken harcadığı enerjiyi harcamaz. kWh fiyatı büyük parçalarda fark yaratabilir.',
        'Makine Amortismanı: Yazıcının çalıştığı her saat, bileşenleri (kayışlar, fanlar, lüleler) aşınır. Küçük bir saatlik maliyet eklemek, gelecekteki onarımlar için kaynak oluşturmanızı sağlar.',
        'İşçilik: Zamanınız en değerli şeydir. Dosyanın hazırlanması, yatağın temizlenmesi ve parçanın son işlemleri hesaba katılmalıdır.',
      ],
    },
    {
      type: 'title',
      text: 'Amortisman nasıl hesaplanır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basit bir yol, yazıcınızın satın alma fiyatını saat bazında tahmini kullanım ömrüne bölmektir. Örneğin, bir yazıcı 10.000 ₺ ise ve büyük bir yenileme öncesinde en az 2000 saat çalışmasını bekliyorsanız, amortisman maliyeti <strong>saat başına 5,00 ₺</strong> olur.',
    },
    {
      type: 'tip',
      title: 'Elektrikten Tasarruf Edin',
      html: '<p>Çok baskı alıyorsanız, yazıcınızı bir kabinle (enclosure) kapatmayı düşünün. Bu sadece teknik malzemeleri basmaya yardımcı olmakla kalmaz, aynı zamanda ısıyı hapseder ve ısıtıcı yatağın sıcaklığı korumak için çok daha az enerji harcamasını sağlar.</p>',
    },
    {
      type: 'title',
      text: 'Satış Fiyatı Stratejileri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Temel maliyetinizi öğrendikten sonra marjınıza karar vermelisiniz. Talebe göre 3D baskı dünyasında, beklenmedik hata riskini ve ticari kârı karşılamak için toplam maliyetin %50-100 üzerinde bir marj yaygındır. Parça çok fazla manuel zımparalama ve boyama işi gerektiriyorsa, bu marj daha yüksek olmalıdır.',
    },
    {
      type: 'summary',
      items: [
        'Süreye göre fiyatlandırma: Saf baskı hizmetleri için idealdir.',
        'Grama göre fiyatlandırma: Büyük ama basit parçalar için yaygındır.',
        'Değere göre fiyatlandırma: Tasarım benzersizse, fiyat sadece maliyete değil, müşterinin ödemeye razı olduğu değere dayanmalıdır.',
      ],
    },
  ],
  faqTitle: '3D Maliyetleri Hakkında Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça ve Kaynaklar',
  bibliography: [
    {
      name: 'PrusaPrinters: 3D baskı maliyetlerini hesaplama',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Malzeme ve Maliyet Tahmini',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Eklemeli imalat maliyet kılavuzu',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
