import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'makine-saatlik-ucret-uretim-maliyeti-hesaplayici';
const title = 'Makine Saatlik Ücreti ve Üretim Maliyeti Hesaplayıcı';
const description =
  'Bir 3D yazıcının gerçek işletme maliyetini güç tüketimi, elektrik tarifesi, satın alma fiyatı, kullanım ömrü ve baskı süresine göre hesaplayın.';

const faqData = [
  {
    question: 'Bir 3D yazıcının saatlik maliyetini nasıl hesaplarım?',
    answer:
      'Saatlik elektrik maliyetini saatlik amortisman maliyetine ekleyin. Elektrik, watt bölü 1000 çarpı elektrik tarifesidir. Amortisman, satın alma fiyatının kullanım ömrü saatine bölünmesidir.',
  },
  {
    question: '3D baskı fiyatlandırmasında amortisman neden önemlidir?',
    answer:
      'Amortisman, parça üretirken tüketilen makine değerini temsil eder. Bunu görmezden gelmek, yazıcı sessizce yeniden satış değerini, güvenilirliğini ve değiştirme kapasitesini kaybederken baskının karlı görünmesine neden olabilir.',
  },
  {
    question: 'Bir masaüstü 3D yazıcı için hangi kullanım ömrünü kullanmalıyım?',
    answer:
      '5000 saatlik bir referans değeri, birçok masaüstü yazıcı için pratik bir başlangıç noktasıdır, ancak üretim çiftlikleri bunu bakım geçmişi, beklenen değiştirme döngüsü ve gerçek çalışma süresi verileriyle değiştirmelidir.',
  },
  {
    question: 'Bu, tam bir 3D baskı teklifiyle aynı mı?',
    answer:
      'Hayır. Bu hesaplayıcı makine elektriğini ve donanım amortismanını kapsar. Tam bir teklif ayrıca filament veya reçine, işçilik, başarısız baskılar, son işleme, paketleme, genel giderler ve kar marjını da içermelidir.',
  },
];

const howToData = [
  { name: 'Ölçülen yazıcı gücünü girin', text: 'Yalnızca güç kaynağı derecesini değil, karşılaştırılabilir bir baskı sırasındaki ortalama watt değerini kullanın.' },
  { name: 'Baskı süresini ayarlayın', text: 'Süre kaydırıcısını iş veya üretim partisi için beklenen makine süresine getirin.' },
  { name: 'Enerji ve varlık verilerini ekleyin', text: 'Elektrik tarifesini, makine satın alma fiyatını ve çalışma saati cinsinden tahmini kullanım ömrünü girin.' },
  { name: 'Maliyet dağılımını okuyun', text: 'Makine süresini fiyatlandırmak için toplam maliyeti, saatlik ücreti ve elektrik ile amortisman arasındaki bileşimi kullanın.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  featureList: [
    '3D yazıcı güç tüketimi hesaplayıcı',
    'Makine saatlik amortisman hesaplayıcı',
    '3D baskı işletme maliyeti tahmincisi',
    'Elektrik ve amortisman maliyet bileşimi',
  ],
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Makine saatlik ücret girdileri',
    resultsAriaLabel: 'Makine saatlik ücret sonuçları',
    settingsLabel: 'Teklif ayarları',
    currencyLabel: 'Para birimi',
    currencyOptions: [
      { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
      { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
      { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
      { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
    ],
    durationLabel: 'Üretim süresi',
    powerLabel: 'Ortalama güç',
    tariffLabel: 'Elektrik tarifesi',
    purchasePriceLabel: 'Makine satın alma fiyatı',
    usefulLifeLabel: 'Tahmini kullanım ömrü',
    totalCostLabel: 'İşletme maliyeti',
    hourlyRateLabel: 'Makine saatlik ücreti',
    electricityLabel: 'Elektrik',
    depreciationLabel: 'Amortisman',
    electricityPerHourLabel: 'Saat başına enerji maliyeti',
    depreciationPerHourLabel: 'Saat başına varlık maliyeti',
    compositionLabel: 'Elektrik ve amortisman maliyet bileşimi',
    insightLabel: 'Karlılık görüşü',
    utilizationLabel: 'Kullanım baskısı',
    utilizationValueLabel: 'Kullanım ömrü tüketildi',
    utilizationHint: 'Bu iş, tahmini makine ömrünün gösterilen payını tüketir.',
    batchLabel: 'Parti işletme maliyeti',
    energyUsedLabel: 'Kullanılan enerji',
    costDriverLabel: 'Ana faktör',
    energyDriverLabel: 'Enerji',
    assetDriverLabel: 'Varlık',
    balancedDriverLabel: 'Dengeli',
    electricityDominant: 'İş enerji odaklıdır: tarife, ısıtmalı yatak boyutu, hazne sıcaklığı ve boşta ısınma süresi, teklifi satın alma fiyatından daha fazla etkileyecektir.',
    depreciationDominant: 'İş varlık odaklıdır: makine fiyatı ve kullanım ömrü baskındır, bu nedenle kullanılmayan her saat bu yazıcının ekonomisini zayıflatır.',
    balancedDominant: 'Elektrik ve amortisman, birini kâr marjı içinde gizlemek yerine her ikisinin de atölye saatlik ücretinde görünmesi için yeterince yakındır.',
    hoursUnit: 's',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ba',
  },
  seo: [
    { type: 'title', text: '3D Baskıda Makine Saatlik Ücreti Ne Anlama Gelir', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Makine saatlik ücreti</strong>, malzeme, işçilik, son işleme, paketleme ve kâr eklenmeden önce bir yazıcıyı bir saat boyunca üretken bir şekilde meşgul tutmanın maliyetidir. 3D baskıda bu sayı genellikle hafife alınır çünkü filament gibi görünen maliyetler, elektrik ve donanım amortismanı gibi gizli maliyetlerden daha kolay fark edilir. Bir masaüstü yazıcı saatte yalnızca birkaç kuruş elektrik tüketebilirken, birkaç bin euroya mal olan profesyonel bir makine, değerini sınırlı bir kullanım ömrü boyunca geri kazanmalıdır. Bu hesaplayıcı, bu iki makine maliyetini ayırarak üretim teklifinin ölçülebilir bir temelle başlamasını sağlar.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı iki şeffaf formül kullanır. Elektrik maliyeti <code>(W / 1000) x T x tarife</code>\'dir; burada <code>W</code> ortalama watt, <code>T</code> saat cinsinden baskı süresi ve tarife, kilovatsaat başına elektrik fiyatıdır. Amortisman maliyeti <code>(satın alma fiyatı / kullanım ömrü saati) x T</code>\'dir. Toplam işletme maliyeti her ikisinin toplamıdır. Her iki terim de zamanla ölçeklendiğinden, aynı formüller aynı zamanda saat başına elektrik artı saat başına amortisman olmak üzere net bir saatlik ücret de üretir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Watı kilowata dönüştürür', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Enerji faturalama birimi', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Saat başına doğrusal makine maliyeti', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Toplam işletme maliyeti', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Ölçülen ortalama watt değerini kullanın',
      html: '<p>Güç kaynağı etiketi maksimum kapasitedir, yazıcının gerçek bir iş sırasındaki tüketimi değildir. Daha iyi bir <strong>3D yazıcı güç tüketimi hesaplayıcı girdisi</strong> için, bir duvar ölçer ile temsili bir baskı ölçün ve ısınma, baskı, fan, yatak ve bekleme aşamalarının ortalamasını alın.</p>',
    },
    { type: 'title', text: 'Elektrik Maliyeti: Wattı Üretim Maliyetine Dönüştürmek', level: 2 },
    {
      type: 'paragraph',
      html: 'Elektrik maliyeti, yalnızca yazıcının anma gücüne değil, ortalama güç tüketimine bağlıdır. 350 W güç kaynağına sahip bir makine, ısınmadan sonra küçük bir PLA işinde ortalama 90 W tüketebilirken, ısıtmalı yataklı ve hazneli büyük bir kapalı yazıcı, mühendislik polimerleri için çok daha yüksek kalabilir. Isıtmalı yatak alanı, hazne sıcaklığı, nozul sıcaklığı, ortam sıcaklığı, fan döngüsü ve parça çıkarmadan önceki boşta kalma süresinin tümü etkin gücü değiştirebilir.',
    },
    {
      type: 'paragraph',
      html: 'Kilovatsaat dönüşümü basit ancak önemlidir. 8 saat boyunca çalışan 180 W\'lık bir yazıcı <code>0,18 kW x 8 sa = 1,44 kWh</code> tüketir. kWh başına 0,25 TL\'de, işin bu kısmı 0,36 TL\'ye mal olur. Bu küçük görünebilir, ancak birçok makineye, uzun PETG veya ASA işlerine, ısıtmalı kurutma dolaplarına ve iklim kontrolüne sahip çiftlikler, küçük saatlik farklılıkları önemli bir aylık faturaya dönüştürebilir.',
    },
    {
      type: 'table',
      headers: ['Girdi', 'Ne girilmeli', 'Yaygın hata'],
      rows: [
        ['Ortalama güç', 'Tüm baskı döngüsü boyunca ölçülen watt', 'Güç kaynağı derecesini veya ısınma zirvesini kullanmak.'],
        ['Süre', 'Saat cinsinden makine meşguliyet süresi', 'Ön ısıtma, soğutma veya kuyruk bekleme süresini görmezden gelmek.'],
        ['Tarife', 'Faturadaki kWh başına gerçek fiyat', 'Atölye tarifesi yerine güncel olmayan ulusal ortalamayı kullanmak.'],
        ['Para birimi', 'Teklif modelinizde kullanılan para birimi', 'Avro donanım maliyeti ile dolar enerji varsayımlarını karıştırmak.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Enerji maliyeti, ölçek onu görünür kılana kadar düşüktür',
      badge: 'Çiftlik planlaması',
      html: '<p>Küçük bir yazıcı, ayrıntılı enerji muhasebesini haklı çıkarmayabilir. Her gün uzun işler yapan yirmi yazıcı haklı çıkarır. Aynı elektrik formülü, yalnızca süre değiştirilerek iş başına, yazıcı başına, hücre başına veya ay başına kullanılabilir.</p>',
    },
    { type: 'title', text: 'Amortisman: Yazıcı Karlılığının Arkasındaki Gizli Maliyet', level: 2 },
    {
      type: 'paragraph',
      html: 'Amortisman, bir yazıcının kullanımla tüketildiğinin finansal olarak kabul edilmesidir. Kılavuzlar aşınır, fanlar yaşlanır, yataklar düzlüğünü kaybeder, hotendler tıkanır, elektronik eskimeye başlar ve makinenin sonunda değiştirilmesi gerekir. Bir yazıcı 900 TL\'ye mal oluyorsa ve atölye 5000 saat kullanım ömrü bekliyorsa, makine her üretken saatte 0,18 TL varlık değeri tüketir. On saatlik bir iş bu nedenle malzeme veya işçilik düşünülmeden önce 1,80 TL donanım maliyeti taşır.',
    },
    {
      type: 'paragraph',
      html: 'Doğrusal amortisman burada bilinçli olarak pratiktir. Vergi yasasını, yeniden satış değerini, finansmanı veya bakım olaylarını modellemeye çalışmaz. Bunun yerine, üretim fiyatlandırma sorusunu yanıtlar: Bu makine satın alımının ne kadarı her çalışma saatine atanmalıdır? Bu sayı, <strong>3D yazıcı saatlik amortisman oranı</strong> aramalarının ve yazıcı ekonomik ömrünün sonuna ulaştığında değiştirme parasının var olmasını isteyen her çiftliğin temelidir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hobi masaüstü yazıcı',
          description: 'Düşük satın alma fiyatı ve düzensiz kullanım. Elektrik, ısıtmalı yatak işlerinde görünebilir, ancak parçalar satılıyorsa amortisman yine de önemlidir.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Daha düşük sermaye maruziyeti', 'Kullanım ömrü genellikle belirsiz', 'Manuel işçilik genellikle tekliflerde baskındır'],
        },
        {
          title: 'Prosumer çiftlik yazıcısı',
          description: 'Orta düzey satın alma fiyatı, yüksek çalışma süresi, tekrarlanan malzemeler ve birçok özdeş iş, saatlik amortismanı önemli bir teklif girdisi haline getirir.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['3000-8000 saatlik ömür varsayımları için iyi uyum', 'Gerçek onarımları takip edin', 'Makine süresini işçilikten ayırın'],
        },
        {
          title: 'Endüstriyel sistem',
          description: 'Yüksek sermaye maliyeti, amortismanın baskın olabileceği anlamına gelir. Servis sözleşmeleri, yapı odası ortamı ve kalifikasyon süresi ek maliyet kalemleri gerektirebilir.',
          icon: 'mdi:domain',
          points: ['Sermaye maliyeti baskın', 'Arıza süresi pahalıdır', 'Servis ve tesis genel giderlerini ekleyin'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Kullanım ömrü girdisi dikkat gerektirir',
      ariaLabel: 'Kullanım ömrü notu',
      html: '<p>Varsayılan 5000 saat bir başlangıç noktasıdır, evrensel bir gerçek değildir. Hafif kullanılan bir hobi makinesi bu sayıya ulaşmadan eskimeye uğrayabilirken, iyi bakılmış bir çiftlik makinesi bu sayıyı aşabilir. Değiştirme politikanıza uygun sayıyı kullanın.</p>',
    },
    { type: 'title', text: 'Kullanım Ömrü Saatlerini Tahmin Olmadan Seçme', level: 2 },
    {
      type: 'paragraph',
      html: 'Kullanım ömrü, amortisman formülünün paydasında yer aldığı için bu hesaplayıcıdaki en hassas muhasebe varsayımıdır. Aynı 900 TL\'lik yazıcıya 3000 saat kullanım ömrü atanırsa, amortisman saatte 0,30 TL\'dir. 9000 saat kullanım ömründe saatte 0,10 TL\'ye düşer. Yazıcı değişmedi, ancak iş beklentisi değişti. Bu nedenle bir teklif, genel bir kâr marjına gömmek yerine seçilen ömür varsayımını belgelemelidir.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Mevcut olduğunda bakım günlüklerini kullanın: nozul değişimleri, fan arızaları, kılavuz aşınması, kayışlar, kartlar, hotendler ve yatak yüzeyleri gerçek maliyet eğrisini ortaya çıkarır.',
        'Yazıcı ailelerini ayırın. Küçük bir bedslinger, bir CoreXY üretim makinesi ve bir reçine yazıcısı tek bir kullanım ömrü numarasını paylaşmamalıdır.',
        'Başarısız ayar, malzeme testleri veya müşteriye özel doğrulama için saatler harcayan deneysel makineler için daha düşük kullanım ömrü.',
        'Yalnızca çalışma süresi, önleyici bakım, yedek parçalar ve değiştirme geçmişi varsayımı desteklediğinde kullanım ömrünü artırın.',
        'Büyük yükseltmelerden sonra varsayımı gözden geçirin çünkü yeni bir hareket sistemi, muhafaza veya hotend varlığın ekonomik ömrünü değiştirebilir.',
      ],
    },
    {
      type: 'table',
      headers: ['Kullanım ömrü varsayımı', 'En iyi uyum', 'Fiyatlandırma sonucu'],
      rows: [
        ['2000-3000 sa', 'Deneysel, düşük maliyetli, kötü belgelenmiş veya ağır kullanımlı makineler', 'Daha yüksek saatlik amortisman, değiştirme nakitini korur.'],
        ['4000-6000 sa', 'Düzenli üretim kullanımı olan standart masaüstü veya prosumer makineler', 'Birçok küçük çiftlik için dengeli başlangıç aralığı.'],
        ['7000-10000 sa', 'Bakım verileri ve kontrollü malzemelerle istikrarlı yazıcı filosu', 'Daha düşük saatlik varlık maliyeti ancak çalışma süresine güven gerektirir.'],
        ['10000 sa üzeri', 'Belgelenmiş yaşam döngüsüne sahip endüstriyel veya ağır bakımlı varlıklar', 'Yalnızca servis ve arıza süresi ayrı ayrı muhasebeleştirildiğinde kullanışlıdır.'],
      ],
    },
    {
      type: 'summary',
      title: 'Kullanım ömrü kontrol listesi',
      items: [
        'Kullanım ömrünü genel bir internet numarasına değil, yazıcı sınıfına göre ayarlayın.',
        'Varsayımı belgeleyin, böylece teklifler aylar sonra açıklanabilir kalır.',
        'Makine hobi kullanımından ücretli üretime dönüştürüldüğünde yeniden hesaplayın.',
      ],
    },
    { type: 'title', text: 'Elektrik ve Amortisman Arasındaki Bölünmeyi Okuma', level: 2 },
    {
      type: 'paragraph',
      html: 'Bileşim çubuğu, bir işin enerji odaklı mı yoksa varlık odaklı mı olduğunu gösterir. Enerji odaklı işler, elektrik tarifesine, ısıtmalı yatak stratejisine, hazne sıcaklığına, ısınma davranışına ve oda koşullarına güçlü tepki verir. Varlık odaklı işler, satın alma fiyatına, kullanım ömrüne ve kullanıma daha güçlü tepki verir. Dengeli bir bölünme, hiçbir satırın göz ardı edilmemesi gerektiği anlamına gelir; her ikisi de temel makine saatlik ücretine aittir.',
    },
    {
      type: 'paragraph',
      html: 'Bu bölünme kullanışlıdır çünkü aynı toplam maliyetin farklı çözümleri olabilir. Elektrik baskınsa, yatak sıcaklığını düşürmek, tekrarlanan ısınmayı önlemek için parçaları gruplamak, bir muhafazayı yalıtmak veya daha düşük tarife saatlerinde baskı yapmak yardımcı olabilir. Amortisman baskınsa, daha iyi kaldıraç kullanımdır: yazıcıyı karlı işlerle meşgul tutun, atıl sermayeden kaçının ve kullanılmayan kapasite satın almak yerine makine boyutunu dikkatlice seçin.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Elektrik maliyeti', definition: 'Seçilen süre boyunca yazıcı tarafından tüketilen faturalanan enerji.' },
        { term: 'Amortisman', definition: 'İş tarafından kullanılan saatlere atanan makine satın alma fiyatının payı.' },
        { term: 'Kullanım ömrü', definition: 'Yazıcının ekonomik olarak değiştirilmesinden önce beklenen üretken çalışma saati sayısı.' },
        { term: 'Makine saatlik ücreti', definition: 'Malzeme, işçilik, genel gider ve kârdan önce saat başına elektrik maliyeti artı saat başına amortisman maliyeti.' },
        { term: 'İşletme maliyeti', definition: 'Üretimi belirli bir süre çalışır durumda tutmak için yapılan makine maliyeti.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Bu hesaplayıcının içerdikleri ve hariç tuttukları',
      items: [
        { pro: 'Ölçülen güç tüketimi, elektrik tarifesi, süre, satın alma fiyatı ve kullanım ömrünü içerir.', con: 'Filament, reçine, destekler, başarısız baskılar, işçilik, kira, yazılım, paketleme veya marjı içermez.' },
        { pro: 'Kullanıcıların ana ekonomik faktörü belirlemesi için maliyet dağılımını gösterir.', con: 'Doğrusal amortisman kullanır, bu nedenle vergi amortisman programlarını veya yeniden satış değerini modellemez.' },
        { pro: 'Süreyi değiştirerek bir baskı, bir parti veya aylık üretim bloğu için çalışır.', con: 'Yanlış hassasiyeti önlemek için dürüst güç ve kullanım ömrü varsayımları gerektirir.' },
      ],
    },
    { type: 'title', text: 'Sonucu Kârlı Bir Saatlik Fiyat Belirlemek İçin Kullanma', level: 2 },
    {
      type: 'paragraph',
      html: 'Hesaplanan saatlik ücret, makine süresi için tabandır, nihai satış fiyatı değildir. Tam bir 3D baskı teklifi normalde malzeme, destek atığı, temizleme atığı, operatör işçiliği, dilimleme ve hazırlık süresi, başarısız baskı toleransı, bakım sarf malzemeleri, kira, yazılım, ödeme ücretleri, vergiler ve hedef marjı ekler. Makine saatlik ücreti yine de önemlidir çünkü yazıcının kendisinin ücretsiz olarak ele alınmasını önler.',
    },
    {
      type: 'paragraph',
      html: 'Örneğin, hesaplayıcı makine saati başına 0,225 TL döndürürse ve bir iş yazıcıyı 14 saat meşgul ederse, makine işletme maliyeti 3,15 TL\'dir. Malzeme 4,80 TL, işçilik tahsisi 6,00 TL, hata toleransı 1,20 TL ise ve ardından marj uygulanırsa, teklif finansal olarak izlenebilir hale gelir. Bir müşteri uzun bir baskının neden plastik ağırlığının önerdiğinden daha pahalı olduğunu sorduğunda, makine süresi açıklanabilir bir kalem haline gelir.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Karlılık görüşü',
      html: '<p>Bu hesaplama, herhangi bir baskı çiftliğinin <strong>saatlik fiyatını</strong> tanımlamanın temelidir. Makine saati başına maliyet bilindiğinde, atölye makine süresini doğrudan faturalandırmaya, malzeme kâr marjına dahil etmeye veya yazıcıları ve malzemeleri karşılaştırmak için dahili olarak kullanmaya karar verebilir.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yalnızca grama göre teklif vermeyin',
      badge: 'Gizli maliyet',
      html: '<p>Yazıcıyı 20 saat meşgul eden hafif bir parça, hızlı basılan ağır bir parçadan daha fazla makine kapasitesi tüketebilir. Makine süresi olmadan ağırlığa dayalı fiyatlandırma, genellikle yavaş, uzun, ince katmanlı veya düşük akışlı işleri düşük fiyatlandırır.</p>',
    },
    { type: 'title', text: '3D Baskı İşletme Maliyeti Tahminleri İçin Pratik Örnekler', level: 2 },
    {
      type: 'paragraph',
      html: 'Ayarlanmış bir PLA masaüstü işi ortalama 120 W tüketebilir, 6 saat çalışabilir, 0,22 TL/kWh tarife kullanabilir ve 5000 saat kullanım ömrüne sahip 600 TL\'lik bir yazıcıda durabilir. Elektrik yalnızca 0,158 TL iken, amortisman 0,720 TL\'dir. Toplam makine işletme maliyeti yaklaşık 0,878 TL ve saatlik ücret yaklaşık 0,146 TL\'dir. Bu durumda iş açıkça varlık odaklıdır: daha iyi makine kullanımı, küçük güç değişikliklerinden daha fazla karlılığı etkiler.',
    },
    {
      type: 'paragraph',
      html: 'Daha büyük kapalı bir yazıcıdaki ASA işi, 0,30 TL/kWh\'de 18 saat boyunca ortalama 420 W tüketebilir. Yazıcı 1800 TL\'ye mal oluyorsa ve kullanım ömrü 4500 saat ise, elektrik 2,268 TL ve amortisman 7,200 TL olup toplam makine maliyeti 9,468 TL\'dir. Enerji kullanımı çok daha yüksek olmasına rağmen, sermaye maliyeti ve uzun makine meşguliyeti önemli olduğu için amortisman hala baskındır.',
    },
    {
      type: 'paragraph',
      html: 'Bir reçine yazıcısı farklı bir hikaye anlatabilir. Yazıcı mütevazı güç tüketebilir, ancak hesaplama yine de makine meşguliyeti için geçerlidir. 4000 saat kullanım ömrü üretmesi beklenen 2500 TL\'lik bir makinede bir yapı 9 saat sürerse, yalnızca amortisman 5,625 TL\'dir. Bu sayı, reçine, eldiven, IPA veya yıkama sıvısı, son kürleme, destekler ve temizlik işçiliği eklenmeden önce teklifte yer almalıdır.',
    },
    {
      type: 'summary',
      title: 'Karar kuralları',
      items: [
        'Elektrik doğruluğu için ölçülen ortalama watt değerini kullanın.',
        'Varlık geri kazanımı için gerçekçi kullanım ömrü saatleri kullanın.',
        'Sonucu makine süresi tabanı olarak ele alın, ardından malzeme, işçilik, genel gider, risk ve marjı ekleyin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
