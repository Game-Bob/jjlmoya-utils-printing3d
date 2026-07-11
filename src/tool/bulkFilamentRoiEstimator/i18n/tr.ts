import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'dokum-filamenti-ro-hesaplayicisi';
const title = 'Döküm Filamenti ROI Hesaplayıcısı';
const description = '1kg filament makaralarını 3kg, 5kg veya özel döküm makaralarıyla nem riski, gerçek tasarruf ve yerel para birimi biçimlendirmesiyle karşılaştırın.';

const faqData = [
  {
    question: '5kg filament makarası her zaman beş 1kg makara satın almaktan daha mı ucuzdur?',
    answer: 'Hayır. Yalnızca gram başına maliyet daha düşükse ve nem maruziyeti baskı kalitesini düşürmeden önce malzemeyi tüketebiliyorsanız daha ucuzdur. Yavaş tüketim, döküm indirimini israfa dönüştürebilir.',
  },
  {
    question: 'Hesap makinesi neden risk cezası düşüyor?',
    answer: 'Ceza, beklenen tüketim süreniz güvenli depolama pencerenizden daha uzun olduğunda kaybedilen değeri tahmin eder. Bu bir döviz kuru dönüşümü veya laboratuvar nem modeli değildir; bir planlama risk ayarlamasıdır.',
  },
  {
    question: 'Canlı döviz kurlarına ihtiyacım var mı?',
    answer: 'Hayır. Araç, para birimini değiştirdiğinizde görünen fiyatları dönüştürmek için yerel yaklaşık kur tablosu kullanır. Bir sunucuya başvurmadan denkliği korur, bu nedenle nihai satın alma kararları yine de mağazanızın veya bankanızın gösterdiği fiyatı kullanmalıdır.',
  },
  {
    question: 'PLA, PETG, TPU veya Nylon için hangi güvenli depolama süresini girmeliyim?',
    answer: 'Özel malzemeyi ortamınızda kuru tutabileceğiniz süreyi kullanın. PLA, Nylon veya TPU\'dan daha uzun depolamaya dayanabilir, ancak açık bir oda, nemli iklim veya kötü torba kapatması güvenli pencereyi önemli ölçüde kısaltabilir.',
  },
];

const howToData = [
  {
    name: 'Standart makara fiyatını girin',
    text: 'Normalde satın alacağınız 1kg makaranın fiyatını yazın. Tedarikçiniz başka bir format kullanıyorsa standart makara ağırlığı ayarlanabilir.',
  },
  {
    name: 'Döküm teklifini girin',
    text: '3kg, 5kg veya özel bir ağırlık seçin ve o büyük makaranın tam fiyatını aynı para biriminde yazın.',
  },
  {
    name: 'Depolama riskini modelleyin',
    text: 'Aylık tüketiminizi ve nem, gevreklik veya kurutma çabası gerçek bir maliyet haline gelmeden önce güvendiğiniz maksimum depolama süresini ekleyin.',
  },
  {
    name: 'Gerçek tasarrufu okuyun',
    text: 'Gerçek tasarruf sayısını satın alma sinyali olarak kullanın çünkü hem döküm indirimini hem de bozulma cezasını içerir.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Para birimi',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'Imperial',
    standardTitle: 'Standart makara',
    bulkTitle: 'Döküm makara',
    consumptionTitle: 'Tüketim ve depolama',
    standardWeightLabel: 'Standart ağırlık',
    standardPriceLabel: 'Standart makara fiyatı',
    bulkWeightLabel: 'Döküm ağırlığı',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6.6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Diğer',
    bulkPriceLabel: 'Döküm makara fiyatı',
    customWeightLabel: 'Özel döküm ağırlığı',
    monthlyUseLabel: 'Aylık tüketim',
    safeStorageLabel: 'Güvenli depolama penceresi',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'ay',
    realSavingsLabel: 'Risk sonrası gerçek tasarruf',
    grossSavingsLabel: 'Brüt tasarruf',
    riskPenaltyLabel: 'Nem riski cezası',
    breakEvenLabel: 'Tüketim süresi',
    viabilityLabel: 'Yapılabilirlik',
    tableMetricLabel: 'Metrik',
    tableStandardLabel: '1kg makara',
    tableStandardImperialLabel: '2.2lb makara',
    tableBulkLabel: 'Döküm makara',
    costPerGramMetric: 'Gram başına maliyet',
    costPerOunceMetric: 'Ons başına maliyet',
    totalSpoolMetric: 'Makara fiyatı',
    usableWindowMetric: 'Tüketim penceresi',
    profitableLabel: 'Kârlı',
    neutralLabel: 'Nötr',
    poorLabel: 'Düşük değer',
    humidityWarningTitle: 'Nem bozulması riski',
    humidityWarning: 'Bozulma riski: Bir kurutma sisteminiz veya hava geçirmez depolamanız yoksa bu makarayı satın almak para kaybına yol açabilir.',
    safeMessage: 'Depolama riski seçtiğiniz güvenli pencerenin içindedir. Beklenen tasarrufu korumak için makarayı kapalı ve kuru tutun.',
  },
  seo: [
    {
      type: 'title',
      text: 'Döküm filamentin gerçekten daha ucuz olup olmadığına nasıl karar verilir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3kg veya 5kg filament makarası çekici görünür çünkü kilogram başına fiyatı genellikle tek bir 1kg makaradan daha düşüktür. Hata, yalnızca kasa toplamını karşılaştırmaktır. Doğru bir karşılaştırma, her iki teklifi de <strong>gram başına maliyete</strong> göre normalize eder, farkı gerçekte satın alacağınız malzeme miktarıyla çarpar ve ardından malzemenin bitene kadar yazdırılabilir kalıp kalmayacağını sorgular.',
    },
    {
      type: 'paragraph',
      html: 'Temel formül basittir: her makara fiyatını gram cinsinden ağırlığına bölün. 1kg makara 24.99 ve 5kg makara 89.99 ise, 1kg makaranın gramı 0.02499 ve döküm makaranın gramı 0.017998 tutar. Görünür tasarruf, gram farkının 5000 gram ile çarpımıdır. Bu sayı kullanışlıdır ancak makara aylarca açık kalacaksa hala eksiktir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Yaygın bir masaüstü filament makarası için referans kütle' },
        { value: '3-5kg', label: 'İndirimlerin görünür hale geldiği tipik döküm formatı' },
        { value: '0 API', label: 'Para birimi denkliği, canlı sunucu çağrısı yerine yerel yaklaşık oranları kullanır' },
      ],
    },
    {
      type: 'table',
      headers: ['Soru', 'Ne girilmeli', 'Neden önemli'],
      rows: [
        ['Normalde ne satın alıyorum?', '1kg makara fiyatı', 'Bu, gram başına temel maliyeti belirler.'],
        ['Döküm teklifi nedir?', 'Toplam fiyat ve döküm ağırlığı', 'Bu, indirimli gram başına maliyeti oluşturur.'],
        ['Ne kadar hızlı baskı yapıyorum?', 'Aylık tüketilen kg', 'Bu, makaranın ne kadar süre depoda kalacağını tahmin eder.'],
        ['Depolamam ne kadar iyi?', 'Bozulma öncesi güvenli ay', 'Bu, risk cezasının ne zaman başladığını tanımlar.'],
      ],
    },
    {
      type: 'title',
      text: 'Nem neden ROI hesaplamasını değiştirir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Filament, rafta güvenle duran bir nakit eşdeğeri değildir. Birçok polimer havadaki nemi emer ve ıslak filament, kabarcıklar, ip gibi çekme, kırılgan ekstrüzyon, bulanık yüzeyler, zayıf katman yapışması ve tutarsız akışla baskı yapabilir. Tam hız, malzemeye, neme, paketlemeye ve makaranın kuru bir kutuda, kapalı bir torbada veya açık bir tutucuda saklanmasına bağlıdır.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gizli döküm makara başarısızlık modu',
      badge: 'Planlama riski',
      html: '5kg makara, gram başına fiyat mükemmel olsa bile kötü bir satın alma olabilir. Yazıcınız ayda 0.5kg tüketiyorsa ve güvenli depolama pencereniz 3 ay ise, o makaranın tükenmesi yaklaşık 10 ay sürer. İndirim, ek kurutma, kapama, başarısız baskı veya atılan malzeme riskini karşılayacak kadar büyük olmalıdır.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hızlı kullanıcı',
          description: 'Küçük bir baskı çiftliği, cosplay yapımcısı veya parti üretimi 3kg ila 5kg\'i hızla tüketebilir. Depolama süresi kısa olduğu için döküm filament genellikle mantıklıdır.',
          points: ['Yüksek aylık kullanım', 'Düşük raf maruziyeti', 'İndirim gerçek para tasarrufuna dönüşür'],
        },
        {
          title: 'Ara sıra hobi kullanıcısı',
          description: 'Hafta sonları baskı yapan veya ara sıra onarım yapan bir kullanıcının büyük bir makarayı bitirmesi aylar sürebilir. Nem riski indirimi silebilir.',
          points: ['Düşük aylık kullanım', 'Uzun açık makara ömrü', 'Kuru depolama daha önemlidir'],
        },
        {
          title: 'Teknik malzeme kullanıcısı',
          description: 'Nylon, TPU, PC karışımları ve bazı PETG sınıfları gibi malzemeler genellikle daha sıkı kurutma disiplini gerektirir. Döküm alımları depolama ekipmanıyla eşleştirilmelidir.',
          points: ['Daha yüksek nem hassasiyeti', 'Kuru kutu önerilir', 'Ceza eşiği ihtiyatlı olmalı'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Gerçek tasarruf sayısının anlamı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Araç önce brüt tasarrufu gösterir, ardından tahmini tüketim süresi güvenli depolama penceresini aştığında bir bozulma cezası düşer. Bu ceza, bir laboratuvar tahmininden ziyade kasten ihtiyatlıdır. Islak veya yaşlanmış filamentin genellikle bariz olmayan maliyetler yarattığı ekonomik gerçeğini temsil eder: kurutma elektriği, ekstra kullanım, başarısız baskılar, nozul tıkanıklıkları, yüzey kusurları ve makaranın bir kısmının görünür veya yapısal çalışmalar için uygunsuz hale gelme olasılığı.',
    },
    {
      type: 'list',
      items: [
        'Pozitif gerçek tasarruf, döküm indiriminin depolama riski ayarlamasından kurtulduğu anlamına gelir.',
        'Nötr, kararın kolaylık, renk bulunabilirliği, nakliye ve halihazırda kuru bir kutuya sahip olup olmadığınıza bağlı olduğu anlamına gelir.',
        'Düşük değer, döküm makaranın gram başına daha ucuz olmadığı veya riske göre ayarlanmış tasarrufun negatif olduğu anlamına gelir.',
        'Uyarı mesajı, tüketim ayları girdiğiniz güvenli depolama penceresinden büyük olduğunda görünür.',
      ],
    },
    {
      type: 'proscons',
      title: 'Döküm filament satın alma tavizleri',
      items: [
        { pro: 'Yüksek hacimli baskı için gram başına düşük maliyet.', con: 'Tek bir malzeme, renk ve tedarikçi partisinde daha fazla sermaye kilitli.' },
        { pro: 'Uzun üretim koşulları sırasında daha az makara değişimi.', con: 'Daha büyük bir açık kütle tüketilmeden bozulabilir.' },
        { pro: 'Kilogram başına daha az ambalaj atığı.', con: 'Büyük makaralar daha güçlü tutucular veya harici makara standları gerektirebilir.' },
        { pro: 'Tekrarlayan çiftlik işleri ve parti üretimi için kullanışlı.', con: 'Nadir renkler, deneysel malzemeler veya yavaş hobi kullanımı için kötü uyum.' },
      ],
    },
    {
      type: 'title',
      text: 'Güvenli depolama penceresi nasıl seçilir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Güvenli depolama penceresi evrensel bir malzeme sabiti değildir. Filamentin depolama koşullarınız altında yazdırılabilir kalacağına kişisel olarak güvendiğiniz süre miktarıdır. Kuru bir odada taze kurutucuyla kapalı bir torba, nemli bir garajda bir yazıcının yanındaki açık bir makaradan çok farklıdır. İhtiyatlı bir satın alma kararı için, önemli baskılar önce makarayı kurutmaya başlayacağınız ay sayısını girin.',
    },
    {
      type: 'table',
      headers: ['Durum', 'Önerilen planlama davranışı', 'Neden'],
      rows: [
        ['Nemli odada açık makara tutucu', 'Kısa güvenli pencere kullanın', 'Nem maruziyeti süreklidir.'],
        ['Kurutuculu hava geçirmez kutu', 'Daha uzun güvenli pencere kullanın', 'Makara baskılar arasında korunur.'],
        ['Yazıcıyı besleyen kuru kutu', 'Daha uzun ama gerçekçi pencere kullanın', 'Baskı ve depolamanın her ikisi de kontrollüdür.'],
        ['Nylon, TPU, PC veya çözünür destek', 'İhtiyatlı olun', 'Bu malzemeler ıslakken hızla baskı sorunlu hale gelebilir.'],
        ['Kaba prototipler için kullanılan PLA', 'Risk toleransı daha yüksek olabilir', 'Küçük kozmetik sorunlar kritik olmayan parçalar için kabul edilebilir olabilir.'],
      ],
    },
    {
      type: 'tip',
      title: 'İndirim bitmeden önce hesaplayıcıyı kullanın',
      html: 'Anlık indirimler genellikle döküm makaralarının acil görünmesine neden olur. İndirimli fiyatı, mümkünse nakliye dahil fiyatı ve gerçekçi aylık kullanımınızı girin. Tüketim süresi depolama pencerenizden daha uzunsa, indirim ek riski karşılayacak kadar güçlü olmalıdır.',
    },
    {
      type: 'title',
      text: 'Kur API\'si olmadan para birimi dönüşümü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu hesaplayıcı bilinçli olarak istemci tarafında çalışır. Canlı döviz kurlarını getirmez, ancak para birimi seçici, kullanıcı para birimini değiştirdiğinde yine de yerel bir dönüşüm çarpanı uygular. Bu, 24.99 EUR olarak girilen bir makaranın, yalnızca sembolü değiştirmek yerine USD, GBP, JPY veya desteklenen başka bir para biriminde yaklaşık bir eşdeğer haline geldiği anlamına gelir. Kurlar planlama tahminleridir, bu nedenle kasa fiyatları, kart ücretleri, vergiler ve pazara özel dönüşüm farkları satın almadan önce kontrol edilmelidir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gram başına maliyet', definition: 'Makara fiyatının toplam filament gramına bölünmesi. Adil karşılaştırma için kullanılan normalleştirilmiş birim.' },
        { term: 'Brüt tasarruf', definition: 'Nem veya depolama riski dikkate alınmadan önceki fiyat avantajı.' },
        { term: 'Risk cezası', definition: 'Makaranın güvenli depolama penceresinden daha uzun sürede tüketilmesi durumunda uygulanan planlama kesintisi.' },
        { term: 'Gerçek tasarruf', definition: 'Brüt tasarruf eksi risk cezası. Bu, ana satın alma sinyalidir.' },
        { term: 'Tüketim penceresi', definition: 'Döküm makara ağırlığının tahmini aylık kullanıma bölünmesi.' },
      ],
    },
    {
      type: 'summary',
      title: 'Pratik satın alma kuralı',
      items: [
        'Gerçek tasarruf açıkça pozitif olduğunda ve tüketim penceresi depolama düzeninize uyduğunda döküm satın alın.',
        'Bir projeden sonra atıl kalacak nadir bir renk alırken dökümden kaçının.',
        'Kurutma ekipmanını neme duyarlı polimerler için isteğe bağlı bir lüks olarak değil, döküm filament sisteminin bir parçası olarak ele alın.',
        'Makara boyutları arasında nakliye farklı olduğunda, yalnızca ürün sayfası fiyatlarını değil, teslim fiyatlarını karşılaştırın.',
      ],
    },
    {
      type: 'message',
      title: 'Alt çizgi',
      html: 'Bir döküm makara, üç koşulun bir araya gelmesiyle kârlı olur: gram başına düşük maliyet, yeterli aylık tüketim ve filamentin yazdırılabilir kalmasını sağlayan depolama. Bir koşul başarısız olursa, görünür indirim gizli bir malzeme kaybına dönüşebilir.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
