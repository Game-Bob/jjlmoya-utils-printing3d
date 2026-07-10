import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'gercek-recine-maliyeti-hesaplayici-sla-dlp';
const title = 'SLA ve DLP Baskılar için Gerçek Reçine Maliyet Hesaplayıcı';
const description = 'Yoğunluk dönüşümü, dilimleyici hacmi ve karmaşık SLA ve DLP parçaları için yüzde 10 ila 15 oranında atık düzeltmesi ile teorik ve gerçek reçine maliyetini hesaplayın.';

const faqData = [
  {
    question: 'Gerçek reçine maliyeti neden dilimleyici maliyetinden daha yüksek?',
    answer: 'Dilimleyici genellikle yalnızca model ve desteklerdeki net kürlenmiş reçineyi rapor eder. Yapı plakasında kalan, içi boş duvarlarda sıkışan, yıkama kayıpları, başarısız destekler veya temizce geri dökülemeyen artıkları her zaman hesaba katmaz.',
  },
  {
    question: 'Gram mı yoksa mililitre mi girmeliyim?',
    answer: 'Dilimleyicinizin dışa aktardığı birimi kullanın. Gram olarak rapor ediyorsa, hesap makinesinin baskı fiyatını hesaplamadan önce kütleyi hacme dönüştürebilmesi için şişe veya teknik sayfadaki reçine yoğunluğunu girin.',
  },
  {
    question: 'Hangi karmaşıklık faktörünü kullanmalıyım?',
    answer: 'Basit destekli katı parçalar için düşük, tipik minyatürler ve işlevsel reçine parçaları için orta, içi boş parçalar, yoğun destekler, boşluklar ve baskı sonrası sıvı reçine tutan parçalar için yüksek kullanın.',
  },
  {
    question: 'Bu alkol, eldiven, filtre veya makine süresini içeriyor mu?',
    answer: 'Hayır. Bu araç yalnızca reçine malzeme maliyetini izole eder. Sarf malzemeleri, işçilik, son kürleme enerjisi, başarısızlıklar ve makine amortismanı daha geniş bir iş teklifine eklenmelidir.',
  },
];

const howToData = [
  {
    name: 'Şişe verilerini girin',
    text: 'Şişenin net fiyatını, nominal hacmini mililitre cinsinden ve reçine veri sayfası veya etiketinde gösterilen yoğunluğu ekleyin.',
  },
  {
    name: 'Dilimleyici kullanımını yapıştırın',
    text: 'Lychee, Chitubox, PrusaSlicer veya başka bir dilimleyici tarafından dışa aktarılan model reçine kullanımını girin, ardından gram veya mililitre seçin.',
  },
  {
    name: 'Karmaşıklığı seçin',
    text: 'Dilimleyici hacmine yüzde 10, 12,5 veya 15 oranında atık düzeltmesi uygulamak için düşük, orta veya yüksek karmaşıklık seçin.',
  },
  {
    name: 'Teorik ve gerçek maliyeti karşılaştırın',
    text: 'Dilimleyici karşılaştırması için teorik maliyeti, teklif verme, parti oluşturma ve reçine stok planlaması için gerçek düzeltilmiş maliyeti kullanın.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Reçine şişesi',
    modelPanel: 'Dilimleyici modeli',
    resultPanel: 'Gerçek reçine maliyeti',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
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
    bottlePriceLabel: 'Şişe fiyatı',
    bottleVolumeLabel: 'Şişe hacmi',
    resinPresetLabel: 'Reçine ön ayarı',
    resinPresetOptions: [
      { label: 'Özel / manuel yoğunluk', density: '' },
      { label: 'Genel standart reçine - 1,10 g/cm3', density: '1.10' },
      { label: 'Genel suyla yıkanabilir reçine - 1,08 g/cm3', density: '1.08' },
      { label: 'Genel ABS benzeri reçine - 1,10 g/cm3', density: '1.10' },
      { label: 'Genel dayanıklı reçine - 1,12 g/cm3', density: '1.12' },
      { label: 'Genel esnek reçine - 1,05 g/cm3', density: '1.05' },
      { label: 'Genel yüksek sıcaklık reçinesi - 1,15 g/cm3', density: '1.15' },
      { label: 'Genel döküm reçinesi - 1,12 g/cm3', density: '1.12' },
      { label: 'Genel seramik dolgulu reçine - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Reçine yoğunluğu (g/cm3)',
    modelAmountLabel: 'Dilimleyici miktarı',
    unitLabel: 'Miktar birimi',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Parça karmaşıklığı',
    lowComplexity: 'Düşük',
    mediumComplexity: 'Orta',
    highComplexity: 'Yüksek',
    lowHint: 'Katı parçalar, hafif destekler, +10%',
    mediumHint: 'Tipik reçine işi, +%12,5',
    highHint: 'İçi boş parçalar veya yoğun destekler, +15%',
    theoreticalCostLabel: 'Dilimleyici maliyeti',
    realCostLabel: 'Gerçek maliyet',
    wasteCostLabel: 'Atık düzeltmesi',
    correctedVolumeLabel: 'Düzeltilmiş hacim',
    costPerMlLabel: 'ml başına maliyet',
    bottlePrintsLabel: 'Şişe başına baskı',
    savedSettingsLabel: 'Atık faktörü',
    hollowPartTip: 'Tahliye delikleri olan içi boş parçalar, reçinenin iç duvarlarda, boşluklarda, desteklerde ve yıkama işlemi sırasında kalması nedeniyle yüzde 15\'in üzerinde atık oluşturabilir.',
    conversionLabel: 'Net dilimleyici hacmi',
    netFromSlicerLabel: 'dilimleyiciden net',
    persistenceNote: 'Şişe fiyatı, şişe hacmi ve yoğunluk bu tarayıcıda yerel olarak kaydedilir.',
  },
  seo: [
    {
      type: 'title',
      text: 'SLA ve DLP reçine maliyetinin neden atık düzeltmesine ihtiyacı var',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir dilimleyici tarafından gösterilen reçine miktarı yararlı bir başlangıç noktasıdır, ancak gerçek bir baskı sırasında şişeden kaybolan reçine miktarıyla aynı değildir. SLA, MSLA, LCD ve DLP baskılarının tümü, sıvı fotopolimerle dolu bir tekne kullanır. Parça katman katman kürlenir, ancak kürlenmemiş reçine hala modeli, destekleri, yapı plakasını, tekne filmini ve reçine havuzuna açık herhangi bir iç boşluğu kaplar. Dilimleyici hacmini şişenin mililitre başına fiyatıyla çarpan bir hesap makinesi temiz bir teorik sayı verir. Ancak bir atölye teklifi, düzeltilmiş sayıya ihtiyaç duyar.',
    },
    {
      type: 'paragraph',
      html: 'Bu hesap makinesi, <strong>dilimleyici maliyetini</strong> <strong>gerçek reçine maliyetinden</strong> ayırır. Dilimleyici maliyeti, yazılım tarafından rapor edilen net reçinedir. Gerçek maliyet, yüzde 10 ila 15 arasında kontrollü bir atık faktörü uygular. Bu aralık kasıtlı olarak dardır: yaygın reçine taşıma kayıplarını içerecek kadar yüksek, ancak başarısızlıkları, işçiliği, alkolü, eldivenleri, filtreleri veya son kürlemeyi malzeme satırının altında gizleyecek kadar yüksek değildir. Sonuç, tek bir baskı veya parti için pratik bir değişken malzeme maliyetidir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '%10', label: 'Katı parçalar ve hafif destekler için düşük düzeltme' },
        { value: '%12,5', label: 'Normal reçine işleri için varsayılan düzeltme' },
        { value: '%15', label: 'Boşluklar ve yoğun destekler için yüksek düzeltme' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Malzeme maliyeti ile iş maliyetini karıştırmayın',
      html: 'Burada döndürülen sayı yalnızca reçine malzemesidir. Tam bir satış fiyatı ayrıca başarısız baskılar, temizlik alkolü, nitril eldivenler, kağıt havlular, filtreler, son kürleme süresi, paketleme, makine aşınması, tasarım süresi ve kar marjını da içermelidir.',
    },
    {
      type: 'title',
      text: 'Hesap makinesinin arkasındaki formül',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İlk adım, mililitre başına şişe fiyatıdır: <code>ml_başına_maliyet = şişe_fiyatı / şişe_hacmi_ml</code>. 42 EUR\'ya satın alınan 1000 ml\'lik bir şişenin ml başına temel maliyeti 0,042 EUR\'dur. Dilimleyici bir minyatürün 38 ml tükettiğini söylüyorsa, teorik reçine maliyeti 38 x 0,042 = 1,60 EUR\'dur. Bu sayı, dilimleyici içinde yönlendirmeyi, oyma işlemini, destek stratejilerini ve partileri karşılaştırmak için kullanışlıdır, ancak dilimleyici tarafından bildirilen her mililitrenin tüketilen tek reçine olduğunu varsayar.',
    },
    {
      type: 'paragraph',
      html: 'İkinci adım, düzeltilmiş hacmi uygular: <code>gerçek_hacim = dilimleyici_hacmi x (1 + atık_faktörü)</code>. Varsayılan yüzde 12,5 faktörüyle, 38 ml\'lik bir model 42,75 ml olur. Gerçek malzeme maliyeti 42,75 x 0,042 EUR = 1,80 EUR olur. Küçük bir modelde fark küçüktür, ancak bir tepsi minyatür, diş modeli, mücevher ustası, mühendislik prototipi veya üretim fikstürü teklif edilirken belirgin hale gelir.',
    },
    {
      type: 'table',
      headers: ['Dilimleyici hacmi', 'Şişe maliyeti', 'Faktör', 'Teorik maliyet', 'Gerçek maliyet'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '%10', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '%12,5', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '%15', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '%15', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Üretim serileri için parça hacmini değil, parti hacmini kullanın',
      html: 'Yapı plakasını birden çok kopyayla dolduruyorsanız, tüm plaka için dilimleyici hacminden hesaplayın. Destek kuleleri, paylaşılan destek yapıları ve yönlendirme değişiklikleri, partiyi tek bir parçayı kopya sayısıyla çarpmaktan daha verimli hale getirebilir.',
    },
    {
      type: 'title',
      text: 'Doğru karmaşıklık faktörünü seçme',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Düşük karmaşıklık',
          description: 'Katı parçalar, basit braketler, kalibrasyon parçaları, satranç taşları ve az destekli modeller için yüzde 10 kullanın.',
          points: ['Az iç tutma', 'Düşük destek yoğunluğu', 'Tekneye kolay damlama'],
        },
        {
          title: 'Orta karmaşıklık',
          description: 'Normal minyatürler, diş modelleri, masa üstü parçalar ve orta düzeyde destekli işlevsel parçalar için yüzde 12,5 kullanın.',
          points: ['Tipik son işlem kaybı', 'Desteklerde biraz reçine', 'İyi varsayılan teklif faktörü'],
          highlight: true,
        },
        {
          title: 'Yüksek karmaşıklık',
          description: 'İçi boş kabuklar, boşluklar, yoğun destek ormanları, kafes yapılar ve boşaltma sonrası ağır kalıntı bırakan parçalar için yüzde 15 kullanın.',
          points: ['Daha fazla sıkışmış sıvı', 'Daha fazla yıkama kaybı', 'Daha yüksek işleme belirsizliği'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Karmaşıklık faktörü, kötü dilimleme için bir ceza değildir. Sıvı reçinenin nasıl davrandığına yönelik bir düzeltmedir. Doğru eğilmiş basit bir katı blok, birkaç dakika sonra neredeyse tamamen damlayabilir. Küçük tahliye delikleri olan içi boş bir heykel, duvarın içinde, desteklerin etrafında ve emme kaplarının yakınında bir reçine filmi tutabilir. Yoğun destek tabanları ayrıca sütunlar arasında reçine tutar. Parçayı teknenin üzerinde damlamaya bıraktığınızda bile, yıkama kabına, eldivenlere, kağıt havluya ve filtreye ulaşan reçine, iş tarafından tüketilen gerçek malzemenin bir parçasıdır.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yüzde 15\'in yeterli olmadığı durumlar',
      html: 'İçi boş bir modelin drenajı zayıfsa, kör boşlukları varsa, kalın iç destekleri varsa veya dokulu bir iç kısma sahipse, atık yüzde 15\'i aşabilir. Bu durumda, bu hesap makinesini reçine taban çizgisi olarak ele alın ve teklife ayrı bir risk payı ekleyin.',
    },
    {
      type: 'summary',
      title: 'Hızlı faktör seçimi',
      items: [
        'Model katı, kompakt ve boşaltılması kolay olduğunda yüzde 10\'u seçin.',
        'Emin olmadığınızda veya karışık bir tepsi yazdırıyorsanız yüzde 12,5\'u seçin.',
        'Parça içi boş, yoğun destekli veya geometrik olarak karmaşık olduğunda yüzde 15\'i seçin.',
        'Yeni bir reçine, yeni bir yönlendirme veya kırılgan bir müşteri parçası yazdırırken ayrı bir başarısızlık payı ekleyin.',
      ],
    },
    {
      type: 'title',
      text: 'Dilimleyici gram olarak rapor verdiğinde yoğunluk kullanma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Birçok dilimleyici, reçine kullanımını mililitre, gram veya her ikisi olarak raporlayabilir. Reçine şişeleri genellikle nominal hacimle satılır, yaygın olarak 500 ml, 1000 ml veya 1 litre. Dilimleyici gram olarak dışa aktarıyorsa, hesap makinesi yoğunluğu kullanarak kütleyi hacme dönüştürür: <code>hacim_ml = gram / yoğunluk</code>. Reçine yoğunluğu normalde g/cm3 olarak yazılır ve 1 cm3, 1 ml ile aynı hacimdir. Yoğunluğu 1,10 g/cm3 olan bir reçine, 110 g\'ın yaklaşık 100 ml\'ye eşit olduğu anlamına gelir.',
    },
    {
      type: 'table',
      headers: ['Dilimleyici kütlesi', 'Yoğunluk', 'Dönüştürülen hacim', 'Neden önemli'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Yaygın standart reçine tahmini'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Daha düşük yoğunluk daha fazla hacim anlamına gelir'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Dolgulu veya seramik reçineler daha yoğun olabilir'],
      ],
    },
    {
      type: 'tip',
      title: 'Teknik veri sayfasında yoğunluğu bulun',
      html: 'Yaygın reçineler için ön ayar kataloğunu kullanın, ardından yoğunluk girişini nihai doğruluk kaynağı olarak ele alın. Tam reçineniz, renginiz veya partiniz ön ayardan farklıysa, alanı üreticinin teknik veri sayfasındaki değerle geçersiz kılın. Tüm reçinelerin 1,00 g/ml olduğunu varsaymayın.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Yoğunluk', definition: 'Birim hacim başına kütle. Reçine maliyetlendirmesinde, dilimleyicideki gramı şişedeki mililitreye dönüştürmenizi sağlar.' },
        { term: 'Teorik maliyet', definition: 'Atık düzeltmesinden önce, temiz dilimleyici hacminin şişenin mililitre başına maliyetiyle çarpılması.' },
        { term: 'Düzeltilmiş hacim', definition: 'Seçilen yüzde 10, 12,5 veya 15 atık faktörü eklendikten sonraki model hacmi.' },
        { term: 'Tahliye deliği', definition: 'Yıkama ve kürlemeden önce kürlenmemiş reçinenin iç kısmı terk etmesini sağlayan, içi boş reçine parçadaki bir açıklık.' },
      ],
    },
    {
      type: 'title',
      text: 'İçi boş reçine baskılar neden genellikle beklenenden daha pahalıdır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Büyük bir modeli oymak, kürlenmiş reçine hacmini önemli ölçüde azaltabilir, ancak baskıyı gizli maliyetlerden arındırmaz. İçi boş duvarların tahliye deliklerine ihtiyacı vardır, iç geometri yıkanabilir olmalıdır ve modelin içinde sıkışan kürlenmemiş reçine daha sonra sızabilir, parçada çatlağa neden olabilir veya son kürlemeye müdahale edebilir. Dilimleyici, oyma işleminden sonra çok daha düşük bir net hacim gösterebilir, ancak işleme süreci daha hassas hale gelir. Bu nedenle yüksek karmaşıklık varsayılan olarak yüzde 15 kullanır.',
    },
    {
      type: 'proscons',
      title: 'Oyulma ve maliyet kontrolü',
      items: [
        { pro: 'Büyük teşhir modelleri çok daha az kürlenmiş reçine kullanabilir.', con: 'Zayıf tahliye, parçanın içinde sıvı reçine tutabilir.' },
        { pro: 'Daha düşük sıyırma kuvvetleri büyük kesitlerde başarıyı artırabilir.', con: 'Ekstra delikler, tapalar ve temizlik süresi işçiliği artırabilir.' },
        { pro: 'Daha hafif bir modelin nakliyesi ve montajı daha kolaydır.', con: 'Duvar kalınlığı ve pozlama ayarlanmazsa ince duvarlar başarısız olabilir.' },
      ],
    },
    {
      type: 'card',
      title: 'Pratik içi boş baskı kuralı',
      html: 'İçi boş bir parça yazıcıdan çıktıktan sonra normal boşaltmaya rağmen damlamaya devam ediyorsa, yüksek faktörü kullanın ve tahliye deliği düzeninizi inceleyin. Yıkamadan sonra sızmaya devam ediyorsa, sorun yalnızca maliyet değildir; kürlenmemiş reçine nesnenin içinde kaldığı için kalite ve güvenlik sorunu haline gelebilir.',
    },
    {
      type: 'title',
      text: 'Düşük teklif vermeden dilimleyici tahminlerini okuma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer ve diğer reçine dilimleyiciler, ağ, destekler, oyma ve bazen reçine profilinden reçine kullanımını tahmin eder. Bu tahminler aynı işin sürümlerini karşılaştırmak için yeterince iyidir. Nihai teklif olarak daha zayıftırlar çünkü iş akışınızı bilmezler. Her işten sonra reçineyi filtreleyen bir atölye, aynı reçineyi teknesinde tutan bir hobiciden farklı miktarda kaybeder. İki IPA aşamasında yıkayan bir kullanıcı, kapalı bir yıkama istasyonu kullanan ve parçaları taşımadan önce tamamen damlamaya bırakan bir kullanıcıdan farklı miktarda kaybeder.',
    },
    {
      type: 'list',
      items: [
        'Desteklerden sonra tam plaka tahminini girin, desteksiz orijinal ağ hacmini değil.',
        'Şişe fiyatı ve nihai teklif için aynı para birimini kullanın; hesap makinesi, görünen şişe fiyatını yaklaşık döviz kuru faktörleriyle yaygın para birimleri arasında dönüştürebilir.',
        'Özel reçine satın alırken şişe fiyatını güncelleyin, çünkü döküm, esnek, diş ve yüksek sıcaklık reçineleri standart reçineden birkaç kat daha pahalı olabilir.',
        'Dilimleyici kütlesi ve şişe hacmi aynı birimi paylaşmadığında yoğunluk dönüşümünü kullanın.',
        'Özellikle kırılgan minyatürler, ince diş kabukları veya yeni destek stratejileri yazdırırken başarısızlık oranını ayrı tutun.',
      ],
    },
    {
      type: 'message',
      title: 'Daha iyi teklif verme alışkanlığı',
      html: 'Yaygın reçine şişesi verilerinizi kaydedin, dilimleyici tahminini yapıştırın, karmaşıklığı seçin ve her iki sayıyı da not edin. Teorik maliyet dilimleyici tahminini açıklar; gerçek maliyet malzeme envanterinizi korur.',
    },
    {
      type: 'title',
      text: 'Bu hesap makinesinin içermedikleri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Reçine baskısının reçineden daha fazla maliyeti vardır. Bu araç, dilimleyici çıktısını gerçek şişe kullanımıyla karşılaştırırken en sık eksik tahmin edilen sayı olduğu için kasıtlı olarak değişken reçine tüketimine odaklanır. Alkol değişimi, deterjan, su arıtma, kağıt havlular, tek kullanımlık eldivenler, FEP veya serbest bırakma filmi aşınması, LCD ekran yaşlanması, yazıcı amortismanı, elektrik, son kürleme süresi, zımparalama, astarlama, destek kaldırma, paketleme veya pazar yeri ücretlerini içermez.',
    },
    {
      type: 'table',
      headers: ['Maliyet kalemi', 'Burada dahil mi?', 'Nerede muhasebeleştirilmeli'],
      rows: [
        ['Baskıda kullanılan sıvı reçine', 'Evet', 'Bu hesap makinesi'],
        ['Reçine kalıntısı ve normal işleme atığı', 'Evet', 'Karmaşıklık faktörü'],
        ['Başarısız baskılar', 'Hayır', 'Malzeme ve model riskine göre başarısızlık payı ekleyin'],
        ['IPA, eldiven, havlu, filtre', 'Hayır', 'Sarf malzemeleri kalemi'],
        ['Destek kaldırma ve zımparalama', 'Hayır', 'İşçilik veya bitirme kalemi'],
        ['Yazıcı amortismanı', 'Hayır', 'Saatlik makine ücreti'],
      ],
    },
    {
      type: 'summary',
      title: 'Güvenilir reçine maliyeti iş akışı',
      items: [
        'Fiilen satın aldığınız şişeden mililitre başına fiyatı hesaplayın.',
        'Gerektiğinde reçine yoğunluğu ile gramı mililitreye dönüştürün.',
        'Destekler ve oyma işleminden sonra dilimleyici çıktısını kullanın.',
        'Geometri ve işleme kaybına göre yüzde 10 ila 15 arasında bir düzeltme uygulayın.',
        'Başarısızlıkları, işçiliği, sarf malzemelerini ve marjı reçine malzeme sayısının dışında tutun.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
