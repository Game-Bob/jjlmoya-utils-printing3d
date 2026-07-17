import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = '3d-yazici-fiyat-hesaplama';
const title = '3D Yazıcı Fiyat Hesaplama: Marj, Markup ve Pazar Pozisyonu';
const description =
  'Üretim maliyeti, hedef kâr marjı, fiyat artış oranı (markup) ve rakip fiyatlarına göre 3D baskı perakende satış fiyatını (PVP) finansal formüllerle hesaplayın.';

const currencyOptions = [
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
];

const faqData = [
  {
    question: '3D baskıda marj ve markup (fiyat artışı) arasındaki fark nedir?',
    answer:
      'Marj, kârın satış fiyatına bölünmesiyle hesaplanır. Markup ise kârın maliyete bölünmesidir. 40,00 maliyete sahip bir işe %50 markup eklenirse fiyat 60,00 olur ve gerçek marj %50 değil, %33,33 olarak gerçekleşir.',
  },
  {
    question: 'Hedef kâr marjı neden %100\'ün altında olmalıdır?',
    answer:
      'Marj formülü, maliyeti (1 - marj oranı) ifadesine böler. %100 marjda payda sıfır olacağından, matematiksel olarak sonlu bir satış fiyatı oluşamaz.',
  },
  {
    question: 'Rakip fiyatları 3D baskı teklifimi belirlemeli mi?',
    answer:
      'Rakip fiyatı bir konumlandırma göstergesidir, maliyet hesabının yerini tutmaz. Hesaplanan fiyatınız pazarın üzerindeyse, indirim yapmadan önce maliyetleri, yüzey kalitesini, teslim süresini ve sunduğunuz katma değeri gözden geçirin.',
  },
  {
    question: 'Hesaplama aracı vergi veya KDV içeriyor mu?',
    answer:
      'Hayır. Araç, vergiler hariç tavsiye edilen satış fiyatını hesaplar. Yerel faturalandırma kurallarınıza göre KDV, satış vergisi, platform komisyonları veya ödeme işlem ücretlerini ayrıca eklemeniz gerekir.',
  },
];

const howToData = [
  { name: 'Toplam üretim maliyetini girin', text: 'Sabit maliyetler, değişkenler, malzeme, makine süresi, işçilik ve post-processing dahil olmak üzere işin tam maliyetini kullanın.' },
  { name: 'Marj veya markup modunu seçin', text: 'Tavsiye edilen satış fiyatının (PVP) hedef marj formülünü mü yoksa markup formülünü mü kullanacağını belirleyin.' },
  { name: 'Rakip referans fiyatını girin', text: 'Teklifinizin rakip fiyatların altında mı, üstünde mi yoksa pazar seviyesinde mi olduğunu görmek için karşılaştırılabilir bir fiyat girin.' },
  { name: 'Önerilen satış fiyatını kopyalayın', text: 'Satış fiyatını, net kârı, gerçek marjı ve pazar karşılaştırmasını teklif veya faturaya aktarmak için kopyalama butonunu kullanın.' },
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
    '3d yazici fiyat hesaplama',
    '3d yazici kar marji hesaplama',
    'markup vs marj 3d baski',
    '3d baski satis fiyati hesaplama',
    'pazar konumlandirma gostergesi',
  ],
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D baskı fiyatlandırma girdileri',
    resultsAriaLabel: '3D baskı fiyatlandırma sonuçları',
    currencyLabel: 'Para Birimi',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Toplam üretim maliyeti',
    competitorLabel: 'Rakip referans fiyatı',
    marginLabel: 'Hedef marj',
    markupLabel: 'Hedef markup',
    conversionFactorLabel: 'Küresel dönüşüm katsayısı',
    conversionFactorUnit: 'x',
    conversionHint: 'Maliyetler seçilen para birimi cinsinden girilmişse 1 olarak bırakın. Fiyat listesi ölçeklendirme veya kur uyarlaması için kullanın.',
    modeLabel: 'Satış Fiyatı Yöntemi',
    marginModeLabel: 'Marj',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'Önerilen PVP',
    netProfitLabel: 'Net kâr',
    realMarginLabel: 'Gerçek marj',
    marketComparisonLabel: 'Rakiplere karşı',
    marketPositionLabel: 'Pazar pozisyonu',
    aboveMarketLabel: 'Pazarın üzerinde',
    belowMarketLabel: 'Pazarın altında',
    atMarketLabel: 'Pazar fiyatında',
    pvpByMarginLabel: 'Marja göre PVP',
    pvpByMarkupLabel: 'Markup\'a göre PVP',
    formulaMarginLabel: 'PVP_marj = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Fiyatı kopyala',
    copiedLabel: 'Kopyalandı',
    copyTemplate: 'Önerilen PVP: {pvp}; net kâr: {profit}; gerçek marj: {margin}; pazar karşılaştırması: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Bu 3D Yazıcı Fiyat Hesaplama Aracı Nasıl Çalışır?', level: 2 },
    {
      type: 'paragraph',
      html: 'Güvenilir bir <strong>3d yazıcı fiyat hesaplama</strong> yöntemi, yalnızca filament ağırlığı üzerinden değil, toplam üretim maliyeti üzerinden başlatılmalıdır. Maliyet değeri; sabit maliyetlerin paylaştırılmasını, makine amortismanını, elektriği, fire ve başarısız baskı payını, işçilik süresini (slicing ve destek temizleme dahil), post-processing işlemlerini, paketlemeyi ve doğrudan işe bağlı giderleri içermelidir. Bu maliyet belirlendikten sonra, satış fiyatı hedef kâr marjı veya markup yöntemlerinden biriyle hesaplanabilir. Bu iki yöntem birbirinin yerine kullanılamaz; bunları karıştırmak, 3D baskı hizmeti veren işletmelerin kârlı görünen ancak aslında hedef marjı karşılamayan işler teklif etmesine yol açar.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplama aracı şu formülleri kullanır: <code>PVP_marj = C / (1 - M / 100)</code> ve <code>PVP_markup = C x (1 + U / 100)</code>. Net kâr her zaman <code>PVP - C</code> olarak hesaplanır. Gerçek marj, kârın maliyete değil, nihai satış fiyatına bölünmesiyle bulunur. Hedef marj sürgüsü %100\'ün altında sınırlandırılmıştır çünkü %100 marj sıfır maliyet ya da sonsuz bir fiyat gerektirir. Sonuç her zaman faturaya, tablolara veya ERP sistemine sorunsuz kopyalanabilmesi için binlik ayırıcı kullanılmadan iki sabit ondalık basamakla gösterilir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Sıkı marj doğrulaması', icon: 'mdi:shield-check-outline' },
        { value: '2 ondalık', label: 'Sabit para formatı', icon: 'mdi:calculator-variant-outline' },
        { value: 'Canlı', label: 'Sürgüyle anlık hesaplama', icon: 'mdi:flash-outline' },
        { value: 'Pazar', label: 'Rakip fiyat konumlandırma', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'İşletme içinde tek bir fiyat dili kullanın',
      html: '<p>Satış görüşmelerinde marj mı yoksa markup mı kullanıldığını açıkça belirleyin. Temeli belirtilmeden sunulan %40 oranı, iki çok farklı satış fiyatına yol açabilir.</p>',
    },
    { type: 'title', text: '3D Baskıda Marj ve Markup Karşılaştırması', level: 2 },
    {
      type: 'paragraph',
      html: 'Genellikle <strong>markup vs marj 3d baski</strong> konusu, bir atölye sahibinin maliyetlerin üzerine eklediği %30 markup oranının neden %30 net kâr marjı yaratmadığını fark etmesiyle gündeme gelir. Markup maliyete göre ölçülür, marj ise satış fiyatına göre ölçülür. Bir parçanın maliyeti 50,00 ve satış fiyatı 75,00 ise net kâr 25,00 olur. Bu durumda markup %50,00\'dir (25,00 / 50,00). Gerçek marj ise %33,33\'tür (25,00 / 75,00). Her iki oran da doğrudur ancak farklı iş sorularına cevap verir.',
    },
    {
      type: 'table',
      headers: ['Maliyet', 'Hedef', 'Formül', 'PVP', 'Net Kâr', 'Gerçek Marj'],
      rows: [
        ['50.00', '%50 markup', '50.00 x 1.50', '75.00', '25.00', '%33.33'],
        ['50.00', '%50 marj', '50.00 / 0.50', '100.00', '50.00', '%50.00'],
        ['80.00', '%25 markup', '80.00 x 1.25', '100.00', '20.00', '%20.00'],
        ['80.00', '%25 marj', '80.00 / 0.75', '106.67', '26.67', '%25.00'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yüksek bir markup mütevazı bir marj üretebilir',
      badge: 'Finansal hassasiyet',
      html: '<p>%100 markup maliyeti ikiye katlar ancak gerçek marjı %50 yapar. İşletmenizin genel giderleri karşılamak ve büyümek için %60 gerçek marja ihtiyacı varsa, %100 markup yeterli olmayacaktır.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Teklif politikası aksini belirtmedikçe, vergi öncesi tavsiye edilen satış fiyatı.' },
        { term: 'Maliyet C', definition: 'Kâr eklenmeden önce işe atanan toplam üretim maliyeti.' },
        { term: 'Marj M', definition: 'Kârın satış fiyatına bölünmesiyle elde edilen yüzde oranı.' },
        { term: 'Markup U', definition: 'Kârın üretim maliyetine bölünmesiyle elde edilen yüzde oranı.' },
        { term: 'Net Kâr', definition: 'Vergi ve finansman düzeltmelerinden önceki satış fiyatından üretim maliyetinin çıkarılmasıyla kalan tutar.' },
      ],
    },
    { type: 'title', text: 'Toplam Üretim Maliyetine Neler Dahildir?', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir <strong>3d baski satis fiyati hesaplama</strong> işleminde doğruluk, girilen maliyet değerinin doğruluğu kadardır. Profesyonel tekliflendirme için maliyet yalnızca filament ağırlığının bobin fiyatıyla çarpılmasıyla kalmamalıdır. Elektrik tüketimi, nozül ve FEP film aşınması, reçine kaybı, tabla hazırlığı, dilimleme süresi, destek temizleme, zımparalama, boyama, kalite kontrolü, paketleme, doğrudan işlem ücretleri ve makul bir fire/tekrar baskı payı hesaba dahil edilmelidir. Hesaplayıcı, girilen girdi maliyetinin bu kalemleri zaten içerdiğini varsayar.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Filament, reçine, toz, destek malzemeleri ve temizleme firesi dahil değişken malzeme maliyetlerini ekleyin.',
        'Amortisman, bakım, enerji ve beklenen kullanım ömrüne göre makine saati maliyetini hesaplayın.',
        'Hazırlık, izleme, post-processing, paketleme ve işe özel müşteri iletişim işçiliğini dahil edin.',
        'Astar, boya, zımpara kağıdı, IPA, eldiven, bant ve polisaj macunları gibi doğrudan sarf malzemelerini ekleyin.',
        'Riskli geometriler, dar toleranslar veya uzun gece baskıları için fire/tekrar baskı payı ekleyin.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Yalnızca malzeme maliyeti',
          description: 'Hobi tahminleri için hızlıdır ancak ticari işler için çok dar kapsamlıdır.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['İşçiliği yok sayar', 'Makine aşınmasını yok sayar', 'Bitmiş parça değerini az gösterir'],
        },
        {
          title: 'Üretim maliyeti',
          description: 'Kâr eklenmeden önceki işi temsil ettiği için marj ve markup hesapları için en iyi girdidir.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Makine süresini içerir', 'İşçiliği içerir', 'Tekrarlanabilir teklifleri destekler'],
        },
        {
          title: 'Tam yüklü fiyat',
          description: 'Genel giderleri ve kârı zaten içerebilir, bu nedenle tekrar marj eklemek mükerrer hesaba yol açar.',
          icon: 'mdi:receipt-text-outline',
          points: ['Denetimler için yararlıdır', 'Girdi olarak risklidir', 'Net bir muhasebe politikası gerektirir'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'Hesaplama aracı maliyetinizi tahmin etmez',
      html: '<p>Bilinen bir maliyeti önerilen bir satış fiyatına dönüştürür. Maliyet net değilse, önce malzeme, zaman, işçilik ve bitirme için bir maliyet modeli oluşturun, ardından kâr ve pazar konumlandırması için bu aracı kullanın.</p>',
    },
    { type: 'title', text: 'Hedef Marj ile 3D Baskı Fiyatı Nasıl Belirlenir?', level: 2 },
    {
      type: 'paragraph',
      html: '3D baskı fiyatlandırma araştırmalarında basit olduğu için genellikle sabit çarpanlar aranır. Ancak işletmenin net bir kârlılık hedefi varsa marj bazlı fiyatlandırma daha doğrudur. Gerekli marj %40 ve üretim maliyeti 60,00 ise satış fiyatı <code>60,00 / (1 - 0,40)</code> yani 100,00 olur. Kâr 40,00 ve gerçek marj %40,00\'tır. Bu yöntem, bir atölyenin her ürün grubunun maliyet sonrasında gelire tutarlı bir kâr katkısı yapmasını istediğinde yaygın olarak kullanılır.',
    },
    {
      type: 'paragraph',
      html: 'Ana kural, marjın %100\'e ulaşamayacağıdır. %99 hedef marjda 10,00 maliyet 1000,00 fiyata dönüşür. %99,99\'da aynı maliyet 100000,00 olur. Bu matematiksel davranış bir hata değildir; marj hedeflerinin ticari olarak gerçekçi olması gerektiğini gösterir. Çok yüksek marj hedefleri genellikle maliyet modelinin çok düşük tutulduğunu veya ürünün benzersiz bir katma değere sahip olduğunu gösterir.',
    },
    {
      type: 'table',
      headers: ['Hedef Marj', 'Maliyet Çarpanı', '40.00 Maliyetin Dönüşümü', 'Örnek Kullanım'],
      rows: [
        ['%20', '1.2500x', '50.00', 'Düşük servis yüklü, yüksek rekabetli standart baskı işleri.'],
        ['%35', '1.5385x', '61.54', 'Normal genel giderlere sahip rutin profesyonel işler.'],
        ['%50', '2.0000x', '80.00', 'Ekstra işçilik gerektiren, post-processing uygulanan, acil veya küçük serili işler.'],
        ['%70', '3.3333x', '133.33', 'Özel mühendislik değeri, zorlu projeler veya premium konumlandırma.'],
      ],
    },
    {
      type: 'summary',
      title: 'Marj fiyatlandırma kontrol listesi',
      items: [
        'Baz olarak toplam üretim maliyetini kullanın.',
        'Hedef marjı %100\'ün altında tutun.',
        'Teklifi göndermeden önce çıkan PVP fiyatını rakip fiyatıyla karşılaştırın.',
        'Fiyat yüksekse, kârı düşürmeden önce maliyet etkenlerini inceleyin.',
      ],
    },
    { type: 'title', text: 'Markup Oranını Marj ile Karıştırmadan Kullanma', level: 2 },
    {
      type: 'paragraph',
      html: 'Markup fiyatlandırması, bir atölye belirli maliyet kategorilerine sabit bir çarpan uyguladığında pratiktir. Örneğin, standart FDM baskılara %80, bitmiş prototiplere %120 ve acil küçük işlere %200 markup eklenebilir. Markup formülü basittir: maliyet değeri (1 + markup oranı) ile çarpılır. %80 markup ile 35,00 maliyet 63,00 olur. Net kâr 28,00\'dir ancak gerçek marj %80 değil, %44,44 olarak gerçekleşir.',
    },
    {
      type: 'proscons',
      title: 'Marj yöntemi vs markup yöntemi',
      items: [
        { pro: 'Marj yöntemi, kârı doğrudan cironun bir yüzdesi olarak gösterir.', con: 'Satış ekiplerinin yüksek marjların neden doğrusal olmayan fiyat artışları yarattığını anlaması gerekir.' },
        { pro: 'Markup yöntemini maliyet listelerine uygulamak hızlı ve kolaydır.', con: 'Personel markup oranını kârlılık oranı olarak okursa gerçek kâr marjını maskeleyebilir.' },
        { pro: 'Her iki formülün birden gösterilmesi gerçek finansal etkiyi ortaya koyar.', con: 'İşletmenin teklif edilen PVP\'nin hangi hesapla yapılacağına dair net bir politikası olmalıdır.' },
      ],
    },
    {
      type: 'message',
      title: 'Markup ne zaman pratiktir',
      ariaLabel: 'Markup kılavuzu',
      html: '<p>Markup basit iç kurallar için iyi çalışır: tekrarlanan FDM işlerine %60, reçine figürlere %90 veya acil parçalara %150 ekleyin. Bu kuralların iş hedeflerini karşılayıp karşılamadığını kontrol etmek için gerçek marj çıktısını takip edin.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Markup yanlış bir yöntem değildir',
      badge: 'Yöntem notu',
      html: '<p>Herkes temeli anladığında markup geçerli bir fiyatlandırma dilidir. Sorun markup uygulamasında değil, tekliflerde veya tablolarda markup oranına "marj" denmesindedir.</p>',
    },
    { type: 'title', text: 'Rakip Fiyatı ve Pazar Konumlandırması', level: 2 },
    {
      type: 'paragraph',
      html: 'Rakip referans fiyatı, bu hesaplayıcıyı sadece formül uygulayan bir araçtan ticari bir karar destek aracına dönüştürür. Önerilen PVP rakip fiyatının üzerindeyse, sonuç uyarı rengiyle gösterilir. Bu durum teklifin yanlış olduğu anlamına gelmez. Daha yüksek bir fiyat; daha hızlı teslim süresi, daha iyi malzeme izlenebilirliği, üstün yüzey kalitesi, mühendislik desteği, boyutsal kontrol veya daha düşük risk ile haklı çıkarılabilir. Ancak satış sorumlusu teklifi göndermeden önce fiyatın neden pazarın üzerinde olduğunu bilmelidir.',
    },
    {
      type: 'paragraph',
      html: 'Rakiplerle karşılaştırma yapılırken eşdeğer referanslar kullanılmalıdır. Katman izleri belirgin, ham bir FDM parça ile zımparalanmış, astarlanmış ve boyanmış bir prototip aynı değerde değildir. Malzemesi belirsiz, toleransları gevşek ve uzun sürede kargolanan bir pazar yeri ilanı ile CAD dosyasını inceleyen ve uyum garantisi veren yerel bir mühendislik hizmeti aynı değildir. Karşılaştırmaya malzeme, proses, yüzey kalitesi, adet ve teslimat şartları en çok benzeyen rakip fiyatını girin.',
    },
    {
      type: 'table',
      headers: ['Konum', 'Yorumlama', 'Ticari Eylem'],
      rows: [
        ['Rakibin altında', 'Teklif caziptir ancak kâr marjından feragat ediliyor olabilir.', 'Hedef marjın çok düşük olup olmadığını veya rakibin daha az hizmet sunup sunmadığını kontrol edin.'],
        ['Rakibe yakın', 'Fiyat, referans pazarla ticari olarak uyumludur.', 'Fark yaratmak için hizmet kalitesini, teslim süresini ve güvenilirliğinizi kullanın.'],
        ['Rakibin üstünde', 'Teklifin gerekçelendirilmesi veya maliyetlerin gözden geçirilmesi gerekir.', 'İndirim yapmadan önce maliyetleri, bitirme kapsamını, aciliyeti ve müşteri katma değerini inceleyin.'],
      ],
    },
    {
      type: 'tip',
      title: 'En ucuz teklifi verme yarışına girmeyin',
      html: '<p>Gerçek işçilik, kalibre edilmiş makineler, belgelenmiş malzemeler ve post-processing uzmanlığı sunan bir atölye, ucuz fiyatları otomatik olarak eşleştirmeye çalışmamalıdır. Müşterinin doğrulayabileceği değer üzerinden rekabet edin.</p>',
    },
    { type: 'title', text: 'Para Birimi ve Küresel Dönüşüm Katsayısı', level: 2 },
    {
      type: 'paragraph',
      html: 'Uluslararası tekliflendirme tutarlı para yönetimini gerektirir. Para birimi seçimi simgeyi değiştirir ve girdileri dönüştürür. Küresel dönüşüm katsayısı ise ayrı bir ticari çarpandır. Maliyet ve rakip fiyatı zaten seçilen para birimi cinsinden girilmişse katsayıyı <code>1</code> olarak bırakın. Şirket bölgesel fiyat listesi, kur dalgalanma payı veya distribütör ayarlaması uygulamak istiyorsa özel bir katsayı girin.',
    },
    {
      type: 'paragraph',
      html: 'Katsayı marj veya markup yüzdelerine değil, para tutarlarına uygulanır. Bu durum önemlidir çünkü yüzdeler farklı para birimlerinde de aynı anlamı korumalıdır. Maliyet ve rakip referansı dönüştürüldükten sonra Euro cinsinden %35 marj, Dolar cinsinden de %35 marj olmaya devam eder. Çıktı, fatura alanlarına ve tablolara temiz kopyalanabilmesi için binlik ayırıcı olmadan iki ondalık basamakta sabit kalır.',
    },
    {
      type: 'summary',
      title: 'Para birimi ve katsayı kuralları',
      items: [
        'Fiyatı kopyalamadan önce müşterinin para birimini seçin.',
        'Yerel para tekliflerinde katsayıyı 1 olarak tutun.',
        'Katsayıyı ticari ölçeklendirme için kullanın, marj veya markup anlamını değiştirmek için kullanmayın.',
        'Vergileri ve fatura yuvarlamalarını vergi öncesi fiyat hesaplamasının dışında yönetin.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Vergiler ve platform komisyonları ayrıdır',
      badge: 'Teklif politikası',
      html: '<p>KDV, satış vergisi, ödeme işlem komisyonları veya kargo sigortası gibi giderlerin tahsil edilmesi gerekiyorsa, bunları üretim satış fiyatını (PVP) hesapladıktan sonra ekleyin.</p>',
    },
    { type: 'title', text: '3D Baskı Hizmeti Fiyatlandırma Stratejisi Oluşturma', level: 2 },
    {
      type: 'paragraph',
      html: 'Güçlü bir <strong>3d yazici fiyatlandirma</strong> stratejisi; maliyet doğruluğunu, kâr disiplinini ve pazar farkındalığını birleştirir. Maliyet doğruluğu maliyetin altında satışı önler. Kâr disiplini rastgele indirimlerin işletmeyi eritmesini önler. Pazar farkındalığı ise hizmetin pazar gerçeklerinden kopmasını engeller. Bu hesaplayıcı, bu üç girdinin (maliyet, marj/markup ve rakip fiyatı) kesiştiği yerde konumlanmıştır.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Standart baskılar, teknik prototipler, görsel modeller, acil işler ve seri üretimler için ayrı marj hedefleri belirleyin.',
        'Markup kurallarını yalnızca personel bu kuralların ürettiği gerçek marjı görebildiğinde uygulayın.',
        'Pazar pozisyonuna göre teklif kazanma oranını takip edin, böylece pazar üstü tekliflerinizi verilerle açıklayabilirsiniz.',
        'İş teslim edildikten sonra gerçekleşen kârı inceleyin; işçilik, fire veya post-processing süreleri hafife alınmışsa maliyet modelini güncelleyin.',
        'Teklif hazırlama, hazırlık ve iletişimin maliyeti aştığı küçük işler için minimum sipariş tutarı belirleyin.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Baskı kârlılığını iş kapandıktan sonra hesaplayın',
      html: '<p>Planlanan net kâr teklif öncesinde yararlıdır ancak fiyatlandırma sistemini geliştiren gerçekleşen kârdır. Tahmini maliyet ile gerçekleşen maliyeti karşılaştırın ve parça gruplarına göre marj hedeflerini güncelleyin.</p>',
    },
    {
      type: 'summary',
      title: 'Teklife hazır iş akışı',
      items: [
        'Toplam üretim maliyetini tahmin edin.',
        'Marj veya markup yöntemini bilinçli olarak seçin.',
        'Gerçek marjı ve net kârı kontrol edin.',
        'Benzer nitelikteki rakip fiyatıyla karşılaştırın.',
        'Önerilen PVP\'yi teklife kopyalayın, vergileri faturada ayrıca yönetin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
