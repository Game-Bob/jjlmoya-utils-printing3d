import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = '3d-baski-sonrasi-islem-maliyet-hesaplayici';
const title = '3D Baskı Sonrası İşlem Maliyet Hesaplayıcı';
const description =
  '3D baskılı parçalar için manuel yüzey işleme, destek kaldırma, zımpalama, boyama, diğer işçilik, sarf malzemeleri ve dövize göre ayarlanmış son işlem maliyetini tahmin edin.';

const faqData = [
  {
    question: '3D baskı sonrası işlem maliyeti nasıl hesaplanır?',
    answer:
      'Tüm manuel son işlem dakikalarını toplayın, toplamı saatlik işçilik ücretinin 60\'a bölümüyle çarpın ve sarf malzemelerini ekleyin. Bu hesaplayıcı ayrıca her son işlem aşamasının maliyet payını da gösterir.',
  },
  {
    question: 'Sarf malzemeleri manuel son işlem maliyetine dahil edilmeli mi?',
    answer:
      'Evet. Zımpara kağıdı, dolgu astar, boya, eldiven, bant, IPA, reçine temizleme sıvısı, mendil ve küçük alet aşınması; bitmiş parçalar için teklifin değişmesine yol açacak kadar önemli olabilir.',
  },
  {
    question: 'Döviz dönüşümü maliyet formülünü değiştirir mi?',
    answer:
      'Hayır. Döviz yalnızca görüntülenen para birimini değiştirir. İşçilik formülü değişmez: dakika çarpı saatlik ücret bölü 60, artı sarf malzemeleri.',
  },
  {
    question: '3D baskı işçiliği için hangi saatlik ücreti kullanmalıyım?',
    answer:
      'Yalnızca net maaşı değil, atölyenin tüm yükler dahil saatlik ücretini kullanın. Maaşlar, işveren katkıları, ücretli faturalanmayan zaman, denetim ve kozmetik bitirme için gereken beceri düzeyini dahil edin.',
  },
];

const howToData = [
  { name: 'Son işlem dakikalarını girin', text: 'Destek kaldırma, zımpalama, boyama ve diğer manuel süreleri dakika olarak ekleyin.' },
  { name: 'Ücret ve sarf malzemelerini ayarlayın', text: 'Saatlik son işlem ücretinizi ve seçili döviz cinsinden doğrudan sarf malzeme maliyetini girin.' },
  { name: 'Döviz ve faktörü seçin', text: 'Semboller için döviz seçiciyi, teklif ayarlamaları için opsiyonel dönüşüm faktörünü kullanın.' },
  { name: 'Sonucu kopyalayın', text: 'Toplam, işçilik, sarf malzemeleri ve dakikaları bir teklife yapıştırmak için kopyala düğmesini kullanın.' },
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
    '3D baskı sonrası işlem maliyet hesaplayıcı',
    '3D baskı işçilik maliyeti tahmini',
    '3D baskı manuel yüzey işleme maliyeti',
    'son işlem saatlik ücret hesaplayıcı',
  ],
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Sonrası işlem maliyet girdileri',
    resultsAriaLabel: 'Sonrası işlem maliyet sonuçları',
    currencyLabel: 'Para birimi',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    currencyOptionSeparator: ' - ',
    supportLabel: 'Destek kaldırma',
    sandingLabel: 'Zımpalama',
    paintingLabel: 'Boyama',
    otherLabel: 'Diğer işçilik',
    hourlyRateLabel: 'Saatlik ücret',
    consumablesLabel: 'Sarf malzemeleri',
    conversionFactorLabel: 'Dönüşüm faktörü',
    conversionFactorUnit: 'x',
    conversionHint: 'Ücret zaten yerel para biriminde girildiyse 1\'de bırakın; global bir teklif çarpanı uygulamak için değiştirin.',
    minutesUnit: 'dak',
    hourUnit: 'sa',
    rateUnitSeparator: '/',
    totalLabel: 'Sonrası işlem toplamı',
    laborLabel: 'İşçilik',
    consumablesBreakdownLabel: 'Sarf malzemeleri',
    timeLabel: 'Manuel süre',
    effectiveRateLabel: 'Etkin ücret',
    breakdownLabel: 'Son işlem aşamasına göre maliyet payı',
    copyLabel: 'Sonucu kopyala',
    copiedLabel: 'Kopyalandı',
    copyTemplate: 'Sonrası işlem maliyeti: {total} ({minutes}; işçilik {labor}; sarf malzemeleri {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Bu 3D Baskı Sonrası İşlem Maliyet Hesaplayıcısı Neyi Ölçer', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir <strong>3D baskı sonrası işlem maliyet hesaplayıcısı</strong>, pratik bir fiyatlandırma sorusunu yanıtlamalıdır: yazıcı durduğunda ne kadar para harcanır? Baskılı parçanın zaten bir makine süresi ve malzeme maliyeti olabilir, ancak ödenen birçok iş destek kaldırma, zımpalama, dolgu, astar, boyama, temizlik, maskeleme, muayene ve yeniden işleme aşamalarında kazanılır ya da kaybedilir. Bu hesaplayıcı, manuel yüzey işleme görevlerini dakikalara böler, bunları saatlik son işlem ücreti ile çarpar ve doğrudan sarf malzemeleri ekler; böylece nihai rakam bir teklife yapıştırılabilir.',
    },
    {
      type: 'paragraph',
      html: "Temel formül kasıtlı olarak şeffaftır: <code>((destek + zımpalama + boyama + diğer dakikalar) x (saatlik ücret / 60)) + sarf malzemeleri</code>. Opsiyonel dönüşüm faktörü, bir atölye döviz dönüşümü, bölgesel fiyat listeleri, taşeron karı veya geçici bir ayarlama için değerleri ölçeklendirmek istediğinde saatlik ücreti ve sarf malzemelerini çarpar. Kullanıcı yerel bir işçilik ücretini doğrudan girerse faktör <code>1</code>'de kalmalı ve sonuç döviz kuru varsayımlarından bağımsız olmaya devam etmelidir.",
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'dak x ücret/60', label: 'İşçilik maliyeti formülü', icon: 'mdi:clock-outline' },
        { value: '5 aşama', label: 'Destek, zımpalama, boyama, diğer, sarf malzemeleri', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Varsayılan dönüşüm faktörü', icon: 'mdi:swap-horizontal' },
        { value: 'Anlık', label: 'Hesapla düğmesine gerek yok', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Yazıcıyı değil, kişiyi fiyatlandırın',
      html: '<p>Son işlem genellikle işçilik odaklıdır. Yavaş bir baskı tamamlanması ucuz olabilirken, kozmetik yüzeylerde destek bulunan küçük bir parça pahalı ve nitelikli müdahale gerektirebilir. <strong>3D baskı işçilik maliyeti tahminini</strong> malzeme karına gömmek yerine ayrı bir satır olarak değerlendirin.</p>',
    },
    { type: 'title', text: 'Destek Kaldırma: İlk Manuel Maliyet Sürücüsü', level: 2 },
    {
      type: 'paragraph',
      html: 'Destek kaldırma yalnızca plastik parçayı modelden ayırmak için gereken süre değildir. Kesme, ısıtma, eritme, durulama, kazıma, destek kalıntılarını budama, kırılgan elemanları koruma ve destek izlerinin ek yüzey işlemi gerektirip gerektirmediğini kontrol etmeyi de kapsayabilir. FDM ağaç destekleri, yoğun arayüz katmanları, SLA destek uçları ve SLS toz alma, farklı işçilik profilleri oluşturur. <strong>3D baskı manuel yüzey işleme maliyeti</strong> için güvenilir bir tahmin elde etmek amacıyla destek kaldırma süresi, baskı süresinden tahmin edilmek yerine karşılaştırılabilir işlerde ölçülmelidir.',
    },
    {
      type: 'table',
      headers: ['Destek durumu', 'Tipik süre davranışı', 'Teklif notu'],
      rows: [
        ['Kolayca kırılan destekler', 'Kısa ve öngörülebilir kaldırma', 'Parça başına sabit bir dakika ödeneği çoğunlukla uygundur.'],
        ['Yoğun destek arayüzü', 'Daha uzun budama ve yüzey temizliği', 'Maliyet sürücüsünün görünür kalması için zımpalama dakikalarını ayrı girin.'],
        ['Reçine minyatürleri veya hassas modeller', 'Hasarı önlemek için yavaş kesme', 'Nitelikli el işçiliği gerekiyorsa daha yüksek saatlik ücret kullanın.'],
        ['Çözünür destek', 'Daha az manuel kesme ama daha fazla işlem süresi', 'Operatör dahilse solüsyon kullanımı ve kurutmayı dahil edin.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Destek kaldırma maliyetini yalnızca dilimleyicideki destek hacmine göre hesaplamayın',
      badge: 'İşçilik riski',
      html: '<p>Destek hacmi küçük olabilirken erişim son derece zor olabilir. Dar bir özelliğin içine gizlenmiş küçük bir destek, temiz ayrılan büyük bir dış destekten daha fazla işçilik gerektirebilir.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Tekrarlayan parça aileleri için destek kaldırma dakikalarını kaydedin.',
        'Destek strateji kararlarını daha kolay karşılaştırabilmek için kaldırmayı zımpalamadan ayırın.',
        'Hassas geometri, ince pimler, minyatürler ve müşteriye bakan yüzeyler için tahmini artırın.',
        'Teklifin geri kalanıyla aynı para birimini ve saatlik ücret tabanını kullanın.',
      ],
    },
    { type: 'title', text: 'Zımpalama, Dolgu ve Yüzey Hazırlama', level: 2 },
    {
      type: 'paragraph',
      html: 'Zımpalama, yinelemeli niteliği nedeniyle bitmiş 3D baskılarda çoğunlukla en büyük gizli maliyettir. Operatör kaba zımpalama, macun, sertleşme veya kuruma süresi, ince zımpalama, nokta düzeltmesi ve eğik ışık altında muayene aşamalarından geçebilir. Katman yüksekliği, malzeme sertliği, destek izleri, istenen parlaklık düzeyi ve parça geometrisi, el işçiliği miktarını belirler. Fonksiyonel bir aparat beş dakika gerektirebilirken, boya açılmadan önce bir sergi prototipi bir saat gerektirebilir.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı zımpalamayı dakika çarpı saatlik son işlem ücreti olarak ele alır; çünkü bu süreç makineden çok operatör tarafından kısıtlanır. Aşındırıcılar, dolgu astarı, macun, tüysüz mendil ve maskeleme malzemeleri gibi sarf malzemeleri saatlik ücrete gömmek yerine sarf malzemeleri alanına girilmelidir. Bu, <strong>3D baskı bitirme maliyet analizini</strong> okunabilir tutar: işçilik zaman baskısını, sarf malzemeleri ise satın alınan girdileri gösterir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Fonksiyonel yüzey',
          description: 'Keskin kenarlar temizlendi, destekler kaldırıldı, kaba izler montaj için yeterince azaltıldı.',
          icon: 'mdi:wrench-outline',
          points: ['En az zımpalama süresi', 'Minimum sarf malzemesi', 'Muayene uyuma odaklı'],
        },
        {
          title: 'Sunum yüzeyi',
          description: 'Görünür yüzeyler düzgünleştirildi, seçici astar uygulandı, müşteri incelemesi için katman çizgileri azaltıldı.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Orta düzey zımpalama süresi', 'Astar ve macun muhtemelen gerekli', 'Kozmetik yüzeyler işçiliği artırır'],
        },
        {
          title: 'Boyamaya hazır yüzey',
          description: 'Renk katmanlarından önce aşamalı zımpalama, dolgu, maskeleme ve hata düzeltmesi.',
          icon: 'mdi:spray',
          points: ['En yüksek manuel süre', 'Sarf malzemeleri önemli', 'Yeniden işleme payı önerilir'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Aşındırıcılar sarf malzemesidir',
      ariaLabel: 'Sarf malzemeleri notu',
      html: '<p>Zımpara kağıdı, zımpara süngeri, iğne eğe, macun, eldiven ve mendiller ücretsiz değildir. İş bunların önemli bir bölümünü tükettiğinde doğrudan maliyetlerini ekleyin.</p>',
    },
    { type: 'title', text: 'Boyama ve Kaplama Maliyet Tahmini', level: 2 },
    {
      type: 'paragraph',
      html: 'Boyama dakikaları operatörün aktif süresini kapsamalıdır: maskeleme, karıştırma, püskürtme, fırça işçiliği, rötuş, maskeyi kaldırma, çalışma alanını temizleme ve muayene. Pasif kuruma veya sertleşme süresi yalnızca operatörü bloke ettiğinde ya da işçilik veya genel gider olarak tahsil edilen nadir kabin kapasitesi kullanıldığında eklenmelidir. Bu ayrım, <strong>son işlem saatlik ücret hesaplayıcısının</strong> kimse aktif olarak çalışmıyorken her bekleme saatini işçilik maliyetine çevirmesini engeller.',
    },
    {
      type: 'table',
      headers: ['Boyama görevi', 'İşçilik olarak kaydet?', 'Sarf malzemesi olarak kaydet?'],
      rows: [
        ['Maskeleme ve maske kaldırma', 'Evet, aktif dakikalar', 'Bant, folyo, tıpa ve şablon'],
        ['Boya veya reçine kaplama karıştırma', 'Evet, aktif dakikalar', 'Boya, tiner, bardak, filtre, eldiven'],
        ['Püskürtme veya fırça ile boyama', 'Evet, aktif dakikalar', 'Kaplama malzemesi ve temizleme çözücüsü'],
        ['Kuruma süresi', 'Yalnızca ücretli işçiliği veya kabin kapasitesini bloke ediyorsa', 'Isı veya lambalar ayrıca faturalanmadıkça genellikle doğrudan malzeme yok'],
      ],
    },
    {
      type: 'tip',
      title: 'Renk karmaşıklığını açıkça fiyatlandırın',
      html: '<p>Tek katman astar ve iki tonlu maskeli yüzey benzer malzeme maliyetine sahip ancak çok farklı işçilik maliyetine sahip olabilir. Marj uygulanmadan önce farkı ortaya koymak için boyama dakikaları alanını kullanın.</p>',
    },
    {
      type: 'proscons',
      title: 'Sabit son işlem ödeneği ile ölçülen son işlem dakikaları karşılaştırması',
      items: [
        { pro: 'Sabit ödenek, kararlı son işlem gereksinimleri olan tekrarlayan işler için hızlıdır.', con: 'İş değiştiğinde hangi aşamanın kârı tükettiğini gizler.' },
        { pro: 'Ölçülen dakikalar tahmini denetlenebilir ve güncellenmesi kolay kılar.', con: 'Atölyenin yaygın parça türleri için gerçek son işlem sürelerini takip etmesini gerektirir.' },
        { pro: 'Görsel maliyet çubuğu müşteriye yönelik tekliflerin dahili açıklamasını kolaylaştırır.', con: 'Kozmetik risk ve yeniden işleme olasılığına ilişkin yargının yerini almaz.' },
      ],
    },
    { type: 'title', text: 'Sarf Malzemeleri ve Son İşlem Genel Giderleri', level: 2 },
    {
      type: 'paragraph',
      html: 'Sarf malzemeleri, bitirme işlemi sırasında tüketilen doğrudan malzemelerdir. Zımpara kağıdı, astar, macun, boya, reçine yıkama sıvısı, IPA, kağıt havlu, nitril eldiven, bıçak, maskeleme bandı, koruyucu tıpa, tek kullanımlık bardak, filtre, cila ve vernik içerebilir. Bazı atölyeler bunları genel giderlere dahil eder; ancak alışılmadık yüzey standartları, büyük yüzey alanı, yoğun zımpalama veya çözücü yoğun iş akışları olan işler için bunları doğrudan alan olarak hesaplamak daha güvenlidir.',
    },
    {
      type: 'paragraph',
      html: 'Ayrı bir sarf malzemeleri alanı, <strong>son işlem genel gider hesaplayıcısı</strong> iş akışlarında da yardımcı olur. Genel giderler normalde sarf malzemelerinden daha geniştir: kira, egzoz, aydınlatma, hava filtrasyonu, kompresör kullanımı, bakım, yazılım, denetim ve idari süre. Bu hesaplayıcı, her genel gider satırını tahsis etme iddiasında değildir. Bunun yerine, genel giderlerin ve marjın daha sonra uygulandığı daha büyük bir teklif modeline beslenebilecek net bir doğrudan maliyet ara toplamı sunar.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'İşçilik ücreti', definition: 'Aktif manuel son işlem süresine atanan saatlik maliyet veya satış ücreti.' },
        { term: 'Sarf malzemeleri', definition: 'Son işlem sırasında tüketilen aşındırıcılar, kaplamalar, eldivenler ve temizlik sıvıları gibi doğrudan malzemeler.' },
        { term: 'Dönüşüm faktörü', definition: 'Döviz ölçeklendirmesi veya teklif ayarlamaları için para birimi girdilerine uygulanan global çarpan.' },
        { term: 'Doğrudan maliyet', definition: 'Bitirilen belirli parça veya partiyle ilişkilendirilebilen bir maliyet.' },
        { term: 'Genel gider', definition: 'Üretimi destekleyen ancak tek bir parça tarafından kolayca ölçülebilir bir miktarda tüketilmeyen iş maliyetleri.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Marjın yeri',
      html: '<p>Bu araç, bitirme maliyetini kârdan önce hesaplar. Malzeme, makine süresi, son işlem, risk ve genel giderler derlendikten sonra marjı uygulayın; aksi takdirde işçilik yoğun işler eksik fiyatlandırılabilir.</p>',
    },
    { type: 'title', text: 'Para Birimi Seçimi ve Dönüşüm Faktörü', level: 2 },
    {
      type: 'paragraph',
      html: 'Para birimi seçimi sembolü değiştirir ve pratik referans faktörleri kullanarak mevcut para girişlerini dönüştürebilir. Hesaplamanın kendisi para birimi açısından tarafsızdır: saat başına 30 ve sarf malzemelerinde 10, sembolün euro, dolar, sterlin, yen veya desteklenen başka bir para birimi olmasından bağımsız olarak aynı yapıyı üretir. Bu, uluslararası teklifler için faydalıdır; çünkü matematik kararlı kalırken sunum müşterinin veya atölyenin konumuyla eşleşir.',
    },
    {
      type: 'paragraph',
      html: 'Dönüşüm faktörü, kullanıcının otomatik döviz kuru dönüşümü istemediği ya da özel bir ticari çarpana ihtiyaç duyduğu durumlar için mevcuttur. <code>1</code> faktörü, saatlik ücret ve sarf malzemelerinin zaten seçilen yerel para biriminde girildiği anlamına gelir. <code>1,15</code> faktörü her iki para girişini yüzde on beş artırır. <code>0,92</code> faktörü bunları yüzde sekiz azaltır. Faktör dakikaları değil parayı etkilediğinden, görsel dağılım ayarlanan maliyetle orantılı kalmaya devam eder.',
    },
    {
      type: 'summary',
      title: 'Para birimi kuralları',
      items: [
        'Semboller ve yaygın para birimleri arasında uygun ölçeklendirme için seçiciyi kullanın.',
        'Girdiler zaten yerel para birimindeyse dönüşüm faktörünü 1\'de tutun.',
        'Bölgesel fiyat listeleri, taşeron karı veya geçici ticari ayarlamalar için özel faktör kullanın.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Döviz kurları muhasebe politikası değildir',
      badge: 'Fiyatlandırma notu',
      html: '<p>Resmi faturalar, vergiler veya muhasebe raporları için işletmenizin gerektirdiği döviz kurunu ve yuvarlama politikasını kullanın. Bu hesaplayıcı, üretim maliyeti tahmini ve teklif hazırlama amacıyla kullanılır.</p>',
    },
    { type: 'title', text: 'Kârı İyileştirmek İçin Görsel Dağılımı Kullanma', level: 2 },
    {
      type: 'paragraph',
      html: 'Orantılı çubuk bir dekordan fazlasıdır. Hangi son işlem aşamasının para harcadığını gösterir. Zımpalama baskın çıkıyorsa baskı yönünü, katman yüksekliğini, destek arayüzünü veya malzemeyi değiştirmek manuel süreyi azaltabilir. Boyama baskın çıkıyorsa teklifin ayrı bir son işlem kademesine ihtiyacı olabilir. Sarf malzemeleri baskın çıkıyorsa toplu satın alma veya farklı bir kaplama işlemi işçilik verimliliğinden daha önemli olabilir. Destek kaldırma baskın çıkıyorsa destek temas noktalarının yeniden tasarlanması en değerli müdahale olabilir.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Destek kaldırma en büyük bölümse destek stilini, yoğunluğunu, temas Z mesafesini ve yönünü gözden geçirin.',
        'Zımpalama en büyükse katman yüksekliğini, dikiş yerleşimini, dolgu stratejisini ve teklif edilen yüzeyin fiyata göre çok yüksek olup olmadığını gözden geçirin.',
        'Boyama en büyükse tek renkli, maskeli ve premium yüzey işlemlerini ayrı teklif kademelerine ayırın.',
        'Sarf malzemeleri en büyükse kaplamalar, reçine yıkama, aşındırıcılar ve maskeleme malzemelerinin israf edilip edilmediğini veya yetersiz tahsil edilip edilmediğini kontrol edin.',
      ],
    },
    {
      type: 'table',
      headers: ['Baskın maliyet', 'Olası neden', 'Fiyatlandırma yanıtı'],
      rows: [
        ['Destek kaldırma', 'Zor erişim, yoğun destekler, hassas detaylar', 'Destek karmaşıklığı ek ücreti ekleyin veya yönlendirmeyi gözden geçirin.'],
        ['Zımpalama', 'Yüksek kozmetik gereksinim, görünür katmanlar, destek izleri', 'Yüzey dereceleri oluşturun ve boyamaya hazır hazırlık için ücret talep edin.'],
        ['Boyama', 'Maskeleme, birden fazla renk, kabin temizliği', 'Boyamayı ayrı bir hizmet satırı olarak fiyatlandırın.'],
        ['Sarf malzemeleri', 'Kaplamalar, aşındırıcılar, çözücüler, koruyucu malzemeler', 'Doğrudan sarf malzemesi takibi veya minimum malzeme ücretleri kullanın.'],
      ],
    },
    {
      type: 'summary',
      title: 'Teklif iş akışı',
      items: [
        'Aşamaya göre aktif manuel dakikaları ölçün.',
        'Yükler dahil saatlik bir son işlem ücreti kullanın.',
        'Doğrudan sarf malzemelerini ayrıca ekleyin.',
        'Hesaplanan sonucu teklife kopyalayın, ardından tam fiyatlandırma modelinde genel giderleri ve marjı uygulayın.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
