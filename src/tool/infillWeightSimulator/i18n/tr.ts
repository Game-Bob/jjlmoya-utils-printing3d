import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-baski-agirlik-infill-yuzde-hesaplayici';
const title = '3D Baskı Ağırlık Infill Yüzde Hesaplayıcı';
const description =
  '%100 infill referans ağırlığından infill yüzdesini ve desenini değiştirirken parça ağırlığını, tasarruf edilen filament ve malzeme maliyetini tahmin edin.';

const faqData = [
  {
    question: '%100 infill ağırlığından 3D baskı ağırlığını tahmin edebilir miyim?',
    answer:
      'Evet, ancak tahmin, kabukları, duvarları, üst katmanları ve alt katmanları iç infill\'den ayırmalıdır. Dış çevre hala malzeme kullandığından, %0 infill\'de bir parça ağırlıksız hale gelmez.',
  },
  {
    question: 'İnfill deseni neden tahmini ağırlığı değiştiriyor?',
    answer:
      'Farklı desenler, aynı nominal yoğunlukta farklı takım yolu uzunlukları oluşturur. Çizgiler ve eşmerkezli desenler genellikle daha hafifken, petek, kübik ve üçgenler daha fazla iç duvar uzunluğu ekleme eğilimindedir.',
  },
  {
    question: 'Dilimleyici ağırlığı bu hesaplayıcıdan daha doğru mudur?',
    answer:
      'Bir dilimleyici, model, nozul, ekstrüzyon genişliği, duvar sayısı, üst katmanlar ve malzeme profili bilindiğinde daha doğrudur. Bu hesaplayıcı, birçok sürümü yeniden dilimlemeden önce hızlı planlama için tasarlanmıştır.',
  },
  {
    question: 'Hangi kabuk yüzdesini kullanmalıyım?',
    answer:
      'Birçok dekoratif veya orta boy FDM parçası için %20-35 kabuk payı pratik bir başlangıç aralığıdır. Küçük parçalar, ince nesneler ve çok sayıda deliği olan parçalar daha yüksek kabuk payına sahip olabilir.',
  },
];

const howToData = [
  {
    name: '%100 infill referansından başlayın',
    text: 'Aynı model için dilimleyicinizin %100 infill\'de bildirdiği ağırlığı kullanın veya bilinen tam yoğun bir referans baskıyı tartın.',
  },
  {
    name: 'Hedef infill ve deseni seçin',
    text: 'İnfill kaydırıcısını hareket ettirin ve kullanmayı planladığınız dilimleyici ayarına en yakın deseni seçin.',
  },
  {
    name: 'Kabuk ve atık varsayımlarını ayarlayın',
    text: 'İnce veya çevre ağırlıklı modeller için kabuk payını artırın, ardından temizleme, etek, kenar, destekler ve başarısız başlangıçlar için atık ekleyin.',
  },
  {
    name: 'Ağırlık ve maliyet tasarruflarını okuyun',
    text: 'Nihai tahmini ağırlığı %100 infill temel çizgisiyle karşılaştırarak malzeme tasarrufunun sertlik ödünleşimine değip değmediğine karar verin.',
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

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'İnfill ağırlık girdileri',
    resultsAriaLabel: 'Tahmini baskı ağırlığı sonuçları',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    currencyLabel: 'Para birimi',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
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
    fullWeightLabel: '%100 infill ağırlığı',
    fullWeightHint: 'Aynı model için tam yoğunluktaki dilimleyici değerini kullanın.',
    infillLabel: 'Hedef infill',
    patternLabel: 'İnfill deseni',
    patternOptions: [
      { value: 'lines', label: 'Çizgiler - hafif yollar' },
      { value: 'grid', label: 'Izgara - dilimleyici temeli' },
      { value: 'triangles', label: 'Üçgenler - sert hücreler' },
      { value: 'gyroid', label: 'Gyroid - pürüzsüz kafes' },
      { value: 'cubic', label: 'Kübik - 3D sertlik' },
      { value: 'honeycomb', label: 'Petek - yoğun duvarlar' },
      { value: 'concentric', label: 'Eşmerkezli - kontur takibi' },
    ],
    shellShareLabel: 'Kabuk payı',
    shellShareHint: 'İnfill ile ölçeklenmeyen duvarlar, üst katmanlar, alt katmanlar ve katı özellikler.',
    spoolPriceLabel: 'Filament fiyatı',
    wasteLabel: 'Atık',
    estimatedWeightLabel: 'Tahmini parça ağırlığı',
    filamentSavedLabel: 'Tasarruf edilen filament',
    materialCostLabel: 'Malzeme maliyeti',
    costSavedLabel: 'Tasarruf edilen maliyet',
    effectiveDensityLabel: 'Etkin yoğunluk',
    shellLabel: 'Kabuk',
    infillCoreLabel: 'İnfill çekirdeği',
    patternImpactLabel: 'Desen çarpanı',
    comparisonLabel: 'Temel çizgi karşılaştırması',
    fullInfillLabel: '%100 infill',
    targetInfillLabel: 'Hedef kurulum',
    insightLow: 'Çok düşük infill çok fazla filament tasarrufu sağlayabilir, ancak üst yüzeyler, vida bosajları, klipsler ve yük taşıyan bölgeler ek duvarlar veya yerel değiştiriciler gerektirebilir.',
    insightBalanced: 'Bu, birçok görsel ve hafif işlevsel baskı için dengeli bir planlama bölgesidir: kabuk şekli taşırken infill sertliği ve maliyeti kontrol eder.',
    insightHigh: 'Yüksek infill, tasarruf aralığını hızla daraltır. Her yerde yoğun infill kullanmadan önce daha fazla duvar, daha güçlü bir desen veya malzeme seçimini düşünün.',
  },
  seo: [
    { type: 'title', text: '3D Baskı Ağırlık İnfill Yüzde Hesaplayıcı Nasıl Çalışır', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir <strong>3D baskı ağırlık infill yüzde hesaplayıcı</strong>, bir model %100\'den az iç yoğunlukla basıldığında ne kadar plastik kaldığını tahmin eder. Önemli detay, FDM ağırlığının tam ağırlığın infill yüzdesiyle basit bir çarpımı olmamasıdır. %20 infill ile basılan bir model genellikle tam yoğun versiyonun %20\'si ağırlığında olmaz çünkü duvarlar, üst katmanlar, alt katmanlar, küçük katı bölgeler, kenarlar ve destek arayüzleri hala filament tüketir. Bu hesaplayıcı, %100 infill\'de bilinen veya dilimleyici tarafından bildirilen ağırlıkla başlar, yapılandırılabilir bir kabuk payı ayırır ve ardından hedef infill ve desen davranışına göre iç çekirdeği ölçeklendirir.',
    },
    {
      type: 'paragraph',
      html: 'Yöntem, bir dosyayı birçok kez yeniden dilimlemek için zaman harcamadan önce hızlı karşılaştırma için tasarlanmıştır. Tam yoğun bir PETG braketi 240 g olarak tahmin ediliyorsa, %20 gyroid\'e geçmek 48 g\'lık bir parça üretmeyebilir. %28 kabuk payı ile, iç yoğunluk sayılmadan önce çevre kütlesi zaten yaklaşık 67 g\'dır. İnfill çekirdeği daha sonra seçilen yoğunluğa ve desen çarpanına göre malzeme ekler. Sonuç, doğrusal infill matematiğinden daha gerçekçi ve yine de erken kararlar için yeterince hızlı bir planlama tahminidir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '%20-35', label: 'Birçok orta boy FDM parçası için tipik kabuk payı', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Eşmerkezli infill için hafif kontur çarpanı', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Petek planlaması için yoğun yol çarpanı', icon: 'mdi:hexagon-multiple' },
        { value: '%100', label: 'Tasarruflar için temel çizgi olarak kullanılan referans ağırlık', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Referans için aynı dilimleyici profilini kullanın',
      html: '<p>En temiz tahmin için, hedef baskı için kullanacağınız aynı nozul, ekstrüzyon genişliği, duvar sayısı, üst katmanlar, alt katmanlar, malzeme yoğunluğu ve destek ayarıyla %100 infill ağırlığını oluşturun. Bu ayarları değiştirmek kabuk kütlesini değiştirir, bu nedenle yalnızca infill karşılaştırması daha az anlamlı hale gelir.</p>',
    },

    { type: 'title', text: 'İnfill Ağırlığı Neden Doğrusal Değildir', level: 2 },
    {
      type: 'paragraph',
      html: '<em>İnfill yüzdesi</em> terimi doğrudan bir yoğunluk değeri gibi görünür, ancak dilimleyiciler bunu yalnızca çevreler ve katı yüzeyler oluşturulduktan sonra kalan iç bölgeye uygular. İki duvarlı ve altı üst katmanlı basit bir küp büyük bir iç hacme sahip olabilir, bu nedenle infill yüzdesi ağırlığı güçlü bir şekilde etkiler. İnce bir telefon standı, çok sayıda deliği olan bir dişli muhafazası veya dar uzuvları olan bir minyatür o kadar çok çevre geometrisine sahip olabilir ki infill\'i düşürmek beklenenden daha küçük bir tasarruf sağlar. Bu nedenle hesaplayıcı, kabuk payını gizlemek yerine gösterir.',
    },
    {
      type: 'table',
      headers: ['Model türü', 'Olası kabuk payı', 'Tasarruflar için anlamı'],
      rows: [
        ['Büyük dikdörtgen muhafaza', '%15-25', 'Kütlenin çoğu iç hacimdir, bu nedenle infill ağırlığı güçlü bir şekilde değiştirir.'],
        ['Dekoratif figür veya organik model', '%25-45', 'Birçok eğri ve dar bölge, çevre ağırlıklı geometri oluşturur.'],
        ['İnce braket veya panel', '%35-60', 'Duvarlar ve yüzeyler baskındır; infill azaltımı daha az plastik tasarrufu sağlayabilir.'],
        ['Küçük mekanik klips', '%45-70', 'Model yalnızca çevrelerden neredeyse katı olabilir.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tahmin çok ağır göründüğünde',
      badge: 'Kabuk payını kontrol edin',
      html: '<p>%10 infill ayarı hala yüksek bir tahmini ağırlık üretiyorsa, kabuk payı muhtemelen büyüktür. Bu, küçük veya ince parçalar için doğru olabilir. Duvar sayısını, üst ve alt kalınlığı ve modelin birçok ayrı adası veya dar nervürü olup olmadığını doğrulayın.</p>',
    },
    {
      type: 'summary',
      title: 'Pratik yorumlama',
      items: [
        'İnfill yüzdesi yalnızca iç çekirdeği etkiler, tüm baskıyı değil.',
        '%0 infill\'li bir parçada hala duvarlar, deriler, dikişler ve bazen küçük katı özellikler bulunur.',
        'Tam ağırlık referansı, kabuk payı, desen seçimi ve atık marjı birlikte daha iyi bir planlama sayısı üretir.',
      ],
    },

    { type: 'title', text: 'İnfill Desen Ağırlık Çarpanları', level: 2 },
    {
      type: 'paragraph',
      html: 'İki baskı da %25 infill\'e ayarlanabilir ve yine de farklı miktarlarda filament kullanabilir çünkü takım yolu geometrisi değişir. Çizgiler ve eşmerkezli desenler, bazı çapraz yapılardan kaçındıkları için genellikle daha hafif iç yollar üretir. Izgara, üçgenler, kübik, gyroid ve petek farklı miktarlarda örtüşme, yönlü takviye ve yol uzunluğu oluşturur. Hesaplayıcı bunu, tüm parçaya değil iç çekirdeğe uygulanan küçük bir <strong>desen çarpanı</strong> ile modeller.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Çizgiler ve eşmerkezli',
          description: 'Minimum ağırlık ve hızlı baskının tek tip sertlikten daha önemli olduğu durumlarda kullanışlıdır.',
          icon: 'mdi:format-line-spacing',
          points: ['Daha düşük yol yoğunluğu', 'Dekoratif parçalar için iyi', 'Yönlü dayanım eşit olmayabilir'],
        },
        {
          title: 'Izgara ve gyroid',
          description: 'Sertliğin önemli olduğu yaygın görsel ve işlevsel baskılar için dengeli seçimler.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Tahmin edilebilir dilimleyici temeli', 'İyi sertlik-ağırlık dengesi', 'Gyroid yükleri eşit dağıtır'],
        },
        {
          title: 'Kübik, üçgenler, petek',
          description: 'Sertliği artırabilen ancak filament tasarrufunu azaltan daha ağır planlama seçimleri.',
          icon: 'mdi:hexagon-outline',
          points: ['Daha fazla iç duvar uzunluğu', 'Daha iyi çok yönlü sertlik', 'Daha uzun baskı süresi yaygındır'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Desen seçimi ödünleşimleri',
      items: [
        { pro: 'Daha hafif desenler malzeme maliyetini düşürür ve baskı süresini kısaltabilir.', con: 'Daha zayıf yönler veya daha az üst yüzey desteği oluşturabilirler.' },
        { pro: 'Yoğun desenler sertlik hissini iyileştirir ve bükülmeyi azaltır.', con: 'Zayıf duvar tasarımını çözmeden daha yüksek infill maliyetine yaklaşabilirler.' },
        { pro: 'Gyroid yükleri birçok yönde eşit dağıtır.', con: 'Muhafazakar hızlanma ayarlarına sahip makinelerde daha yavaş basabilir.' },
      ],
    },
    {
      type: 'message',
      title: 'Desen çarpanları planlama varsayımlarıdır',
      ariaLabel: 'Desen çarpanı notu',
      html: '<p>Dilimleyici motorları desenleri farklı şekilde uygular. Çarpanı erken bir tahminci olarak ele alın, ardından önemli üretim işlerini gerçek bir dilimleyici ön izlemesi ve malzeme kullanım raporu ile onaylayın.</p>',
    },

    { type: 'title', text: 'Filament ve Maliyet Tasarruflarını Hesaplama', level: 2 },
    {
      type: 'paragraph',
      html: 'Malzeme maliyet tahmini, nihai gramları makara başına kilogram fiyatıyla çarpar. Hesaplayıcı 126 g\'lık bir baskı tahmin ediyorsa ve makara kg başına 24 $ ise, plastik kısmı makine süresi, elektrik, işçilik, paketleme ve başarısız baskılardan önce yaklaşık 3,02 . Tasarruf edilen maliyet, aynı atık yüzdesini kullanarak aynı modeli %100 infill temel çizgisiyle karşılaştırır. Bu, teklif verme, parti planlama ve daha ağır bir infill ayarının ekstra malzemeye değip değmediğine karar verme için kullanışlıdır.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Atık yüzdesini temizleme hatları, etekler, kenarlar, destekler, sallar, renk değişiklikleri ve kısa başarısız başlangıçlar için kullanın.',
        'Tek prototipler için %5-10 atık marjı genellikle sıfırdan daha gerçekçidir.',
        'Destekler veya aşındırıcı malzemeler içeren üretim partileri için, birkaç iş boyunca fiili kalan ve başarısız ağırlığı kaydedin.',
        'PLA, PETG, ABS, ASA, naylon ve dolgulu kompozitleri karşılaştırırken, genel bir ortalama değil, tam malzeme için makara fiyatını kullanın.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Örnek: yoğun prototipten üretim infill\'ine',
      html: '<p>%100 infill\'li bir prototip 240 g ağırlığındadır. %28 kabuk payı, %20 gyroid, %6 atık ve 24 $/kg filament ile tahmin, 48 g yerine düşük yüzlerce gram civarındadır. Bu fark, 40 kopya için teklif verirken önemlidir: parça başına küçük hatalar bütün makara plastik haline gelir.</p>',
    },
    {
      type: 'table',
      headers: ['Girdi', 'Neden önemlidir', 'Yaygın hata'],
      rows: [
        ['%100 ağırlık', 'Maksimum malzeme temel çizgisini tanımlar.', 'Hedef baskıdan farklı bir duvar sayısı kullanmak.'],
        ['Hedef infill', 'İç çekirdek yoğunluğunu kontrol eder.', '%20 infill\'in toplam parça ağırlığının %20\'si anlamına geldiğini varsaymak.'],
        ['Desen', 'Takım yolu uzunluğunu ve sertliğini değiştirir.', 'Dilimleyici ön ayarlarını karşılaştırırken deseni görmezden gelmek.'],
        ['Atık', 'Nihai parça dışında kullanılan gerçek filamenti ekler.', 'Destekleri ve başarısız başlangıçları unutmak.'],
      ],
    },

    { type: 'title', text: 'Zayıf Parçalar Olmadan Ağırlık Tasarrufu İçin İnfill Seçimi', level: 2 },
    {
      type: 'paragraph',
      html: 'Ağırlık tasarrufu, yalnızca parça işlevini yerine getiriyorsa değerlidir. Görsel modeller, sergi aksesuarları, cosplay parçaları ve kapaklar için yeterli üst katmanlara sahip düşük infill mükemmel olabilir. Braketler, fikstürler, vidalı muhafazalar, çıtçıtlı özellikler ve ısıya veya darbeye maruz kalan parçalar için en iyi iyileştirme genellikle küresel infill\'i yükseltmekten ziyade daha fazla duvar veya yerel takviyedir. Dört duvarlı ve %20 gyroid\'li bir parça, iki duvarlı ve %50 infill\'li bir parçadan doğru yerlerde daha güçlü olabilir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kabuk payı', definition: 'Tam yoğun ağırlığın duvarlara, üst katmanlara, alt katmanlara ve kaçınılmaz katı geometriye ait olan kısmı.' },
        { term: 'Nominal infill', definition: 'Kabuklar oluşturulduktan sonra dilimleyicide iç bölge için seçilen yüzde.' },
        { term: 'Etkin yoğunluk', definition: 'Kabuk payı, infill yüzdesi ve desen çarpanı birleştirildikten sonra bitmiş baskının tahmini toplam yoğunluğu.' },
        { term: 'Atık marjı', definition: 'Temizleme, kenar, destek, testler ve başarısız başlangıçlar gibi parça dışı malzeme için kullanılan ekstra filament.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ağırlık tasarrufunu tek tasarım kriteri olarak kullanmayın',
      badge: 'İşlevsel baskılar',
      html: '<p>Katman çizgileri boyunca yüklenen parçalar, dişli ek parçaları olan parçalar ve vida sıkıştırması olan parçalar ayrı mekanik düşünme gerektirir. İnfill yardımcı olur, ancak duvar kalınlığı, yönlendirme, malzeme, sıcaklık ve gerilim konsantrasyonu genellikle yoğunluktan daha önemlidir.</p>',
    },
    {
      type: 'summary',
      title: 'Hızlı karar kuralları',
      items: [
        'Dekoratif baskılar: önce infill\'i azaltın, ardından üst yüzey kalitesini doğrulayın.',
        'Hafif işlevsel baskılar: yüksek infill\'den önce dengeli bir desen ve yeterli duvar kullanın.',
        'Braketler ve fikstürler: delikleri, köşeleri ve yük yollarını yerel değiştiricilerle güçlendirin.',
        'Parti işleri: malzeme satın almadan önce nihai tahmini dilimleyici ile onaylayın.',
      ],
    },

    { type: 'title', text: 'Hesaplayıcıya Ne Zaman Güvenmeli ve Ne Zaman Yeniden Dilimlemeli', level: 2 },
    {
      type: 'paragraph',
      html: 'Bu hesaplayıcı, hızlı tahminler, erken teklifler, malzeme satın alma ve dilimleyiciyi tekrar tekrar açmadan birçok infill seçeneğini karşılaştırmak için en iyisidir. Boyutsal ayarlar değiştiğinde dilimleyicinin yerini tutmaz. Nozul çapını, ekstrüzyon genişliğini, duvar sayısını, üst kalınlığı, alt kalınlığı, uyarlamalı katmanları, destek stilini, ütülemeyi, vazo modunu veya malzeme yoğunluğunu değiştirirseniz, %100 temel çizgisi ve kabuk payı güncellenmelidir.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Model ve profil çoğunlukla sabit kaldığında ve yoğunluğu veya deseni keşfederken hesaplayıcıyı kullanın.',
        'Duvar sayısı, destek oluşturma, nozul boyutu veya malzeme profili değiştiğinde yeniden dilimleyin.',
        'Üretim düzeyinde maliyet kayıtları veya envanter tahminleri gerektiğinde bitmiş bir parçayı tartın.',
        'Tekrarlanan işler için fiili gramları kaydedin; gerçek veriler kabuk payı varsayımlarınızı hızla iyileştirecektir.',
      ],
    },
    {
      type: 'tip',
      title: 'Teklifler için güvenilir bir iş akışı',
      html: '<p>Tam yoğun bir dilimleyici referansı oluşturun, bu hesaplayıcı ile birkaç infill seçeneğini tahmin edin, en umut verici ikisini seçin ve ardından yalnızca bu iki nihai adayı yeniden dilimleyin. Bu, teklifleri hızlı tutarken nihai fiyatları dilimleyiciye özgü malzeme raporlarına dayandırır.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};