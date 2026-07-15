import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = '3d-yazici-ciftligi-roi-hesaplayici';
const title = '3D Yazıcı Çiftliği ROI Hesaplayıcı';
const description =
  'Kullanım oranı, hata oranı, elektrik, genel giderler och değişken saatlik maliyetleri kullanarak bir 3D baskı çiftliği için aylık kârlılığı, geri ödeme süresini ve yıllık ROI yi simüle edin.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Bir 3D yazıcı çiftliği için ROI nasıl hesaplanır?',
    answer:
      'Üretken aylık saatleri tahmin edin, bunları makine saati başına satış fiyatıyla çarpın, sabit, elektrik ve değişken saatlik maliyetleri çıkarın ve ardından yıllık kârı ilk yatırımla karşılaştırın.',
  },
  {
    question: 'Başarı oranı neden yazıcı çiftliğinin geri ödemesini etkiler?',
    answer:
      'Başarısız baskılar faturalandırılabilir saatler üretmeden makine kapasitesini, malzemeyi, nozulları, enerjiyi ve operatörün zamanını tüketir. Daha düşük bir başarı oranı gerçek üretken saatleri azaltır ve geri ödemeyi geciktirir.',
  },
  {
    question: 'Saatlik değişken maliyete neler dahil edilmelidir?',
    answer:
      'Filaman veya reçine tüketimini, nozul aşınmasını, baskı yüzeyi aşınmasını, rutin bakım parçalarını, sarf malzemelerini ve gerçek başarılı üretim süresiyle değişen saatlik payları dahil edin.',
  },
  {
    question: 'Geri ödeme süresi ile ROI aynı şey midir?',
    answer:
      'Hayır. Geri ödeme süresi, ilk yatırımın aylık net kârdan ne kadar ayda geri kazanılacağını tahmin eder. ROI, yıllık kârı ilk yatırımla yüzde olarak karşılaştırır.',
  },
];

const howToData = [
  { name: 'Çiftlik ölçeğini girin', text: 'Aktif yazıcı sayısını ve makineler, kurulum, çalışma istasyonları ve devreye alma için ilk yatırım tutarını ekleyin.' },
  { name: 'Aylık işletme maliyetlerini ekleyin', text: 'Sabit genel giderleri ve elektriği aylık maliyetler olarak girin, ardından üretken makine saati başına değişken maliyeti ekleyin.' },
  { name: 'Kullanım ve başarı oranını ayarlayın', text: 'Modelin boşta kalma süresini ve başarısız baskıları düşmesi için gerçekçi kullanım ve başarı yüzdeleri belirleyin.' },
  { name: 'Kârlılık çıktılarını okuyun', text: 'Aylık geliri maliyetlerle karşılaştırın, ardından yatırımın uygulanabilirliğini değerlendirmek için geri ödeme aylarını ve yıllık ROI yi kullanın.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    '3D yazıcı çiftliği ROI hesaplayıcı',
    '3D baskı geri ödeme simülatörü',
    'Yazıcı çiftliği kârlılık hesaplayıcı',
    'Kullanım ve başarısız baskı ayarı',
    'Çoklu para birimli işletme maliyeti modeli',
  ],
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Yazıcı çiftliği ROI girdileri',
    resultsAriaLabel: 'Yazıcı çiftliği ROI sonuçları',
    currencyLabel: 'Para Birimi',
    currencyOptions,
    printerCountLabel: 'Yazıcı sayısı',
    initialInvestmentLabel: 'İlk yatırım',
    fixedMonthlyCostLabel: 'Sabit aylık maliyet',
    electricityMonthlyCostLabel: 'Elektrik aylık maliyeti',
    hourlyRateLabel: 'Saat başına satış ücreti',
    occupancyLabel: 'Ortalama kullanım',
    successRateLabel: 'Başarı oranı',
    variableCostLabel: 'Saat başına değişken maliyet',
    averageHoursPerPartLabel: 'Parça başına ortalama saat',
    paybackLabel: 'Geri ödeme süresi',
    netProfitLabel: 'Aylık net kâr',
    annualRoiLabel: 'Yıllık ROI',
    productiveHoursLabel: 'Gerçek üretken saatler',
    revenueLabel: 'Gelir',
    costsLabel: 'Maliyetler',
    fixedCostShortLabel: 'Sabit',
    electricityShortLabel: 'Elektrik',
    variableCostShortLabel: 'Değişken',
    marginLabel: 'Net marj',
    breakEvenPartsLabel: 'Başabaş parçaları',
    breakEvenHoursLabel: 'Başabaş saatleri',
    stressScenarioLabel: 'En kötü durum senaryosu',
    exportSummaryLabel: 'Özeti indir',
    chartLabel: 'Aylık gelir ve işletme maliyetleri karşılaştırması',
    monthsUnit: 'ay',
    hoursUnit: 'saat',
    percentUnit: '%',
    notViableLabel: 'Uygulanamaz',
    positiveInsight: 'Aylık kâr; kullanım, başarı oranı ve işletme maliyetleri uygulandıktan sonra pozitiftir.',
    negativeInsight: 'İşletme maliyetleri ayarlanmış geliri aşıyor; ölçeklendirmeden önce kullanımı, fiyatlandırmayı veya hata oranını iyileştirin.',
    currencySymbol: '₺',
    defaultCurrencyCode: 'TRY',
    pendingLabel: '-',
    partsUnit: 'parça/ay',
    reportFilename: 'yazici-ciftligi-roi-ozeti.csv',
    reportTitle: '3D Yazıcı Çiftliği ROI Uygulanabilirlik Raporu',
    reportCurrencyLabel: 'Para Birimi',
  },
  seo: [
    { type: 'title', text: 'Bu 3D Yazıcı Çiftliği ROI Hesaplayıcı Nasıl Çalışır', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir <strong>3D yazıcı çiftliği ROI hesaplayıcı</strong>, belirli bir yatırım sorusuna yanıt vermelidir: bir grup yazıcı, kurulum maliyetini sermaye, alan, bakım ve operasyonel riski haklı çıkaracak kadar hızlı geri kazanacak mı? Bu simülatör, bu soruyu aylık makine kapasitesinden modeller. Her yazıcı, standart 30 günlük bir ayda 720 brüt saat katkıda bulunur, ardından model bu saatleri kullanım ve baskı başarı oranına göre düşer. Sonuç teorik kapasite değil; boşta kalan süreler, iş kuyrukları, başarısız baskılar, yeniden baskılar, kalibrasyon ve pratik duruş sürelerinden sonra geriye kalan faturalandırılabilir üretim süresidir.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplama zinciri kasıtlı olarak şeffaftır. Aylık brüt saatler <code>yazıcılar x 720</code> ye eşittir. Gerçek üretken saatler, brüt saatlerin ortalama kullanım ve başarı oranıyla çarpılmasına eşittir. Aylık gelir, üretken saatlerin müşteriye yönelik saatlik ücretle çarpılmasıyla bulunur. İşletme maliyetleri sabit aylık genel giderleri, elektriği ve değişken saatlik maliyetleri birleştirir. Aylık net kâr, gelirden bu işletme maliyetlerinin çıkarılmasıyla elde edilir. Geri ödeme süresi ilk yatırımı aylık net kâra bölerken, Yıllık ROI on iki aylık net kârı ilk yatırımla karşılaştırır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 saat', label: 'Yazıcı başına aylık brüt kapasite', icon: 'mdi:clock-outline' },
        { value: 'K x B', label: 'Kullanım ve başarı ayarlaması', icon: 'mdi:percent-outline' },
        { value: 'Gelir - maliyet', label: 'Aylık net kâr', icon: 'mdi:finance' },
        { value: 'Yatırım / kâr', label: 'Geri ödeme süresi', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Yatırım kararları için temkinli girdiler kullanın',
      html: '<p>İlk aşamada, pazarlama geliştikten sonra ulaşmayı umduğunuz kullanımı değil, mevcut taleple savunabileceğiniz kullanımı girin. Yalnızca iyimser kullanım oranlarında çalışan bir çiftlik henüz sağlam bir yatırım değildir.</p>',
    },
    { type: 'title', text: 'Kullanım Oranı Yazıcı Çiftliği Kârlılığını Neden Değiştirir', level: 2 },
    {
      type: 'paragraph',
      html: 'Kullanım oranı, kullanılabilir makine süresinin gerçekten ücretli veya satılabilir işlerin basılması için harcanan yüzdesidir. İlk yatırım sabit olduğu için birçok küçük çiftlik modelinde en güçlü kaldıraçtır. Üretim için satın alınan bir yazıcı, günde sekiz saat veya yirmi saat rezerve edilmiş olsun, aynı maliyete sahiptir. Daha yüksek kullanım oranı; kira, kurulum, yedek parça envanteri, yazılım ve makine amortismanını daha fazla faturalandırılabilir saate yayar.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı, kullanımı brüt kapasite üzerinde doğrudan bir çarpan olarak ele alır. On yazıcı ayda 7200 brüt makine saati oluşturur. %40 kullanımda, başarı oranı ayarlamasından önce gelir modeline yalnızca 2880 saat girer. %75 kullanımda, modele 5400 saat girer. Aradaki fark, geri ödemenin aylar mı yoksa yıllar mı süreceğini veya hiç gerçekleşmeyeceğini belirleyebilir.',
    },
    {
      type: 'table',
      headers: ['Kullanım seviyesi', 'Operasyonel anlamı', 'ROI etkisi'],
      rows: [
        ['%30 un altında', 'Makineler ayın çoğunu siparişler, dosyalar, operatörler veya bakım bekleyerek geçiriyor.', 'Saatlik fiyatlandırma yüksek olmadıkça ilk yatırımı geri kazanmak zordur.'],
        ['%30-55', 'Karışık talep ve manuel işlem sunan çiftlikler için yaygın erken aşama aralığı.', 'Kârlılık büyük ölçüde sabit genel giderlere ve hata oranına bağlıdır.'],
        ['%55-75', 'Acil işler, bakım ve kurulum değişiklikleri için yer bırakan sağlıklı rezervasyon seviyesi.', 'Genellikle geri ödemenin gerçekçi hale geldiği ilk aralıktır.'],
        ['%75 in üzerinde', 'Güvenilir zamanlama, malzeme akışı ve önleyici bakım gerektiren yüksek kullanım.', 'Güçlü ROI potansiyeli ancak arızalara veya operatör darboğazlarına karşı az tolerans.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yüksek kullanım oranı yüksek kârla aynı şey değildir',
      badge: 'Fiyatlandırma riski',
      html: '<p>Saatlik ücret çok düşükse, yeniden baskılar sık yapılıyorsa, malzeme atığı yüksekse veya sabit genel giderler hafife alınmışsa, bir çiftlik meşgul olabilir ve yine de para kaybedebilir. Kullanımı her zaman yalnızca gelirle değil, marjla karşılaştırın.</p>',
    },
    { type: 'title', text: 'Başarısız Baskıları ve Yeniden Baskıları Hesaba Katmak', level: 2 },
    {
      type: 'paragraph',
      html: 'Girilen başarı oranı, bu 3D baskı geri ödeme simülatörünü basit bir kapasite hesaplayıcıdan ayıran şeydir. Başarısız baskılar, başarılı baskılarla aynı takvim süresini tüketir ancak satılabilir çıktı oluşturmaz. Ayrıca filaman, reçine, baskı plakaları, nozullar, elektrik, emek ve müşteri memnuniyetini tüketebilirler. %90 başarı oranına sahip bir çiftlik, gelir sayılmadan önce her on potansiyel üretim bloğundan birini kaybeder.',
    },
    {
      type: 'paragraph',
      html: 'Başarı oranı benzer işler üzerinden ölçülmelidir. Sürekli PLA aparatları basan bir çiftlik, süreç ayarından sonra çok yüksek bir başarı oranını koruyabilir. Tek seferlik müşteri modelleri, yüksek parçalar, teknik polimerler, reçine minyatürler veya çok malzemeli işler üreten bir çiftliğin daha düşük bir varsayıma ihtiyacı olabilir. Basit ve riskli işleri karıştırıyorsanız, hesaplayıcıyı iki kez çalıştırın: biri standart üretim, diğeri ise özel işler için.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tekrarlanan üretim',
          description: 'Bilinen parça geometrisi, ayarlanmış profiller, öngörülebilir malzemeler ve kararlı talep.',
          icon: 'mdi:repeat',
          points: ['Daha yüksek başarı varsayımı', 'Daha düşük kurulum belirsizliği', 'Daha iyi geri ödeme güveni'],
        },
        {
          title: 'Özel baskı hizmeti',
          description: 'Dosyalar müşteriye, geometriye, destek stratejisine ve kalite beklentisine göre değişir.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Orta düzey başarı varsayımı', 'Tekliflerde daha fazla değişkenlik', 'Yeniden baskı payı gerektirir'],
        },
        {
          title: 'Deneysel malzemeler',
          description: 'Mühendislik polimerleri, esnek malzemeler, katkılı filamanlar ve reçine süreci ayarı.',
          icon: 'mdi:flask-outline',
          points: ['Daha düşük başarı varsayımı', 'Daha yüksek sarf malzemesi aşınması', 'Temkinli ROI girdileri kullanın'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Hata oranı finansal modelde yer almalıdır',
      ariaLabel: 'Hata oranı muhasebesi notu',
      html: '<p>Yeniden baskıları belirsiz genel giderlerin içine gizlemeyin. Görünür bir başarı oranı girdisi, yatırım senaryosunun sorgulanmasını, iyileştirilmesini ve açıklanmasını kolaylaştırır.</p>',
    },
    { type: 'title', text: 'Güvenilir Bir Aylık Maliyet Modeli Oluşturmak', level: 2 },
    {
      type: 'paragraph',
      html: 'İşletme maliyetinin bu araçta üç katmanı vardır. Sabit aylık maliyet, yazıcılar boşta kaldığında bile var olan giderleri kapsar: kira, internet, sigorta, yazılım, muhasebe, depolama, temel iş gücü kapsamı ve diğer genel giderler. Aylık elektrik maliyeti, yazıcılar ve doğrudan ilgili üretim ekipmanı tarafından kullanılan enerjiyi yakalar. Saatlik değişken maliyet, filaman, reçine, nozullar, PTFE tüpler, baskı plakası aşınması, filtreler, yağlayıcı, bakım parçaları ve temizlik sarf malzemeleri gibi üretken makine süresiyle ölçeklenen maliyetleri kapsar.',
    },
    {
      type: 'paragraph',
      html: 'Elektriği ayrı bir aylık girdi olarak tutmak çiftlikler için yararlıdır çünkü güç tüketimi genellikle baskı başına hesaplanmak yerine faturalardan veya alt sayaçlardan izlenir. PETG, ASA, ABS veya naylon üreten ısıtmalı yataklı bir çiftlik, aynı odadaki bir PLA çiftliğinden çok farklı bir enerji profiline sahip olabilir. Elektriği zaten makine saati başına hesaplıyorsanız, bu rakamı saat başına değişken maliyete dahil edebilir ve aylık elektrik alanını sıfırlayabilirsiniz.',
    },
    {
      type: 'table',
      headers: ['Maliyet girdisi', 'Dahil et', 'Kaçın'],
      rows: [
        ['Sabit aylık maliyet', 'Kira, sigorta, internet, yazılım, temel personel, depolama.', 'Yalnızca yazıcılar çalışırken kullanılan malzeme.'],
        ['Elektrik aylık maliyeti', 'Yazıcı enerjisi, kurutucular, yıkama istasyonları, kürleme, havalandırma, iklim payı.', 'İlişkisiz ev veya ofis elektriği.'],
        ['Saat başına değişken maliyet', 'Filaman, reçine, nozullar, bakım sarf malzemeleri, saatlik aşınma payı.', 'Tek seferlik makine satın alma maliyeti.'],
        ['İlk yatırım', 'Yazıcılar, raflar, kurulum, aletler, kurutucular, çiftlik yönetim donanımı.', 'Lansmandan sonra tekrarlayan aylık maliyetler.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Aylık brüt saatler', definition: 'Kullanım oranı ve başarısız baskı ayarlamalarından önceki teorik makine kapasitesi.' },
        { term: 'Gerçek üretken saatler', definition: 'Kullanım ve başarı oranı uygulandıktan sonra kalan kapasite.' },
        { term: 'Geri ödeme süresi', definition: 'Aylık net kârın ilk yatırımı geri kazanması için gereken aylar.' },
        { term: 'Yıllık ROI', definition: 'On iki aylık net kârın ilk yatırıma bölünmesiyle elde edilen oran.' },
        { term: 'Değişken saatlik maliyet', definition: 'Üretken baskı süresiyle ölçeklenen sarf malzemesi ve bakım payı.' },
      ],
    },
    { type: 'title', text: 'Makine Saati Başına Satış Ücretinin Belirlenmesi', level: 2 },
    {
      type: 'paragraph',
      html: 'Saat başına satış ücreti, üretken bir makine saati için müşteriden tahsil edilen tutardır. Doğrudan tekliflerde gösterilebilir veya malzeme, iş gücü, bitirme, paketleme ve marjı da içeren bir fiyat formülünün içine gömülebilir. Önemli olan tutarlılıktır: saatlik ücretin malzemeyi içermesi amaçlanıyorsa, aynı malzemeyi saat başına değişken maliyet olarak tekrar eklemeyin. Saatlik ücret yalnızca makine süresiyse, malzeme ve iş gücünün iş modelinin başka bir yerinde temsil edildiğinden emin olun.',
    },
    {
      type: 'paragraph',
      html: 'Saatlik ücretin tekli işlerde rekabetçi görünmesi, çiftlik ölçeğinde başarısız olabilir. Uzun baskılar, diğer işlere hizmet edebilecek kapasiteyi işgal eder. İnce katman yükseklikleri, yavaş malzemeler, yüksek parçalar och yoğun destek gerektiren geometriler verimi azaltır. Bu nedenle, bir **yazıcı çiftliği kârlılık hesaplayıcı**, gerçek teklif verileriyle birlikte kullanılmalıdır: ortalama iş süresi, ortalama ödenen saatlik eşdeğer, müşteri kabul oranı ve aylık sipariş hacmi.',
    },
    {
      type: 'proscons',
      title: 'Bir yazıcı çiftliğinde saatlik fiyatlandırma',
      items: [
        { pro: 'Makine doluluğunu görünür kılar ve uzun baskıların düşük fiyatlandırılmasını önler.', con: 'Hafif bir parça saatler sürdüğünde müşterilerin açıklamaya ihtiyacı olabilir.' },
        { pro: 'Dahili ROI planlaması ve kapasite kararları için iyi çalışır.', con: 'Malzeme, iş gücü, bitirme ve risk fiyatlandırmasının yerini almaz.' },
        { pro: 'Yazıcı türleri ve kullanım senaryoları arasında hızlı karşılaştırma sağlar.', con: 'Hata oranı ve kuyruk süresi göz ardı edilirse yanıltıcı olabilir.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Fiyatlandırma kontrol noktası',
      html: '<p>Saatlik ücretteki küçük bir değişiklik geri ödemeyi tamamen değiştiriyorsa, yatırım piyasa fiyatlandırmasına duyarlıdır. Daha fazla yazıcı satın almadan önce ücreti gerçek müşteri talebine karşı doğrulayın.</p>',
    },
    { type: 'title', text: 'Geri Ödeme Süresini ve Yıllık ROI yi Yorumlama', level: 2 },
    {
      type: 'paragraph',
      html: 'Geri ödeme süresinin anlaşılması kolaydır çünkü ay olarak ifade edilir. İlk yatırım 18000 ve aylık net kâr 3000 ise geri ödeme süresi altı aydır. Aylık net kâr sıfır veya negatifse, çiftlik mevcut varsayımlar altında yatırımı asla geri kazanamayacağı için geri ödeme uygulanabilir değildir. Geri ödeme; nakit planlaması, ekipman finansmanı ve genişlemenin şimdi mi yoksa talep düzeldikten sonra mı yapılması gerektiğine karar vermek için kullanışlıdır.',
    },
    {
      type: 'paragraph',
      html: 'Yıllık ROI daha katıdır çünkü bir yıllık net kârı ilk yatırımla karşılaştırır. Geri ödeme yavaşsa bir çiftlik aylık pozitif kâra sahip olabilir ancak yine de zayıf bir yıllık ROI gösterebilir. Örneğin, 24000 lik bir yatırımda maliyetlerden sonra ayda 1000 kazanan bir çiftlik, ilk yatırım dikkate alınmadan önce yılda 12000 üretir, bu nedenle ilk yıl ROI si negatif kalır. Bu durum işin kötü olduğu anlamına gelmez, ancak yatırımcının daha uzun bir vadeye ihtiyacı olduğunu gösterir.',
    },
    {
      type: 'summary',
      title: 'Karar kuralları',
      items: [
        'Nakit geri kazanım hızını anlamak için geri ödemeyi kullanın.',
        'Çiftliği diğer sermaye kullanımlarıyla karşılaştırmak için yıllık ROI yi kullanın.',
        'Genişlemeyi taahhüt etmeden önce modeli daha düşük kullanım ve başarı oranıyla yeniden çalıştırın.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Senaryo testi gerçek değerdir',
      badge: 'Planlama',
      html: '<p>Bir temel durum, bir temkinli durum ve bir stresli durum çalıştırın. En iyi yatırım, yalnızca iyimser senaryoda harika görünen değil; talep, hatalar veya elektrik maliyetleri aleyhinize hareket ettiğinde bile anlaşılır kalan yatırımdır.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
