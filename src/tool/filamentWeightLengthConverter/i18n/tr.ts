import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-agirlik-uzunluk-donusturucu';
const title = 'Filament Ağırlık Uzunluk Dönüştürücü: Hassas Malzeme Hesaplama';
const description = 'Filament gramını yoğunluk, 1,75 mm veya 2,85 mm çap ve anlık makara yeterlilik kontrolü ile metre ve hacme dönüştürün.';

const faqData = [
  {
    question: 'Filament gramı metreye nasıl çevrilir?',
    answer: 'Kütleyi malzeme yoğunluğuna bölerek hacmi bulun, bu hacmi santimetreküpten milimetreküpe dönüştürün, ardından filament çapının dairesel kesit alanına bölün.',
  },
  {
    question: 'Filament malzeme yoğunluğu neden önemlidir?',
    answer: 'PLA, PETG, ABS, TPU veya dolgulu filamentlerin aynı ağırlığı, her polimerin farklı bir yoğunluğu olduğu için farklı hacim kaplar. Uzunluk, hacmin filament alanına bölümüdür, bu nedenle yoğunluk metre tahminini doğrudan etkiler.',
  },
  {
    question: '1,75 mm filament her zaman kilogram başına aynı uzunlukta mıdır?',
    answer: 'Hayır. Çap toleransı, malzeme yoğunluğu, katkı maddeleri ve nem oranı gerçek uzunluğu değiştirir. Hesaplayıcı, nominal çap ve yoğunluğa dayalı bir planlama tahmini sunar.',
  },
  {
    question: 'Hesaplayıcıyı 2,85 mm filament için kullanabilir miyim?',
    answer: 'Evet. 2,85 mm girin veya emperyal birimlere geçip eşdeğer çapı girin. Kesit alanı anında güncellenir.',
  },
];

const howToData = [
  { name: 'Filament kütlesini girin', text: 'Dilimleyicinin bildirdiği filament miktarını, makarada kalan ağırlığı veya dönüştürmek istediğiniz herhangi bir gram değerini yazın.' },
  { name: 'Malzemeyi seçin', text: 'PLA, PETG, ABS, TPU, Nylon, PC veya dolgulu bir karışım seçerek hesaplayıcının doğru yoğunluğu kullanmasını sağlayın.' },
  { name: 'Filament çapını ayarlayın', text: '1,75 mm, 2,85 mm kullanın veya uzunluk tahmininin belirli bir makarayı yansıtmasını istiyorsanız ölçülmüş bir çap girin.' },
  { name: 'Makara yeterliliğini kontrol edin', text: 'İsteğe bağlı olarak kalan makara ağırlığını girerek yeterli malzemeniz olup olmadığını ve tam fazla veya eksiği görün.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'Emperyal',
    inputsTitle: 'Malzeme stoğu tahmini',
    materialLabel: 'Malzeme',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polikarbonat',
    materialWoodLabel: 'Ahşap dolgulu PLA',
    materialCarbonLabel: 'Karbon fiber karışım',
    materialMetalLabel: 'Metal dolgulu PLA',
    densityLabel: 'Yoğunluk',
    densityUnit: 'g/cm3',
    weightLabel: 'Filament ağırlığı',
    weightSliderLabel: 'Baskı ağırlığı sürgüsü',
    diameterLabel: 'Filament çapı',
    stockLabel: 'Kalan makara ağırlığı',
    stockPlaceholder: 'İsteğe bağlı stok kontrolü',
    spoolStateLabel: 'Makara durumu',
    spoolScaleLabel: 'Tüketilen / mevcut kütle',
    cutLineLabel: 'Filaman bitiş çizgisi',
    resultLengthLabel: 'Tahmini filament uzunluğu',
    resultVolumeLabel: 'Polimer hacmi',
    resultAreaLabel: 'Kesit alanı',
    resultGramsMeterLabel: 'Doğrusal kütle',
    enoughLabel: 'Yeterli makara',
    shortLabel: 'Yetersiz makara',
    noStockLabel: 'Stok kontrolü devre dışı',
    surplusLabel: 'Fazla',
    missingLabel: 'Eksik',
    formulaLabel: 'Hesaplama yolu',
    formulaText: 'hacim = kütle / yoğunluk -> uzunluk = hacim / kesit alanı',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Yoğunluk temelli filament gram-metre hesaplayıcısı neden daha hassastır', level: 2 },
    { type: 'paragraph', html: 'Bir filament ağırlık-uzunluk dönüştürücü, arkasındaki malzeme modeli kadar iyidir. Sıradan bir hesaplayıcı genellikle her filamentin aynı hacmi kapladığını varsayar, oysa FFF filament kütle olarak satılırken ekstrüder silindirik bir teli uzunluk olarak tüketir. Bu iki ölçüm arasındaki köprü <strong>yoğunluk</strong>tur. Yaklaşık 1,24 g/cm3 olan PLA, 1,27 g/cm3 civarındaki PETG, 1,04 g/cm3 yakınındaki ABS ve 1,21 g/cm3 dolaylarındaki TPU, makara ağırlığı ve çap aynı olsa bile aynı metre sayısına dönüşmez.' },
    { type: 'paragraph', html: 'Hesaplama kütle ile başlar. Gramı yoğunluğa bölmek, hacmi santimetreküp cinsinden verir. Bu hacim daha sonra milimetreküpe dönüştürülür çünkü filament çapı normalde milimetre ile ölçülür. Kesit alanı bir dairenin alanıdır: pi çarpı yarıçapın karesi. Son olarak, hacim alana bölündüğünde milimetre cinsinden bir uzunluk elde edilir ve bu metre veya feete dönüştürülebilir. Sonuç, dilimleyicinin bildirdiği malzemenin makarada mevcut stoktan basılıp basılamayacağını kontrol etmek için pratik bir tahmindir.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'PLA için tipik yoğunluk (g/cm3)' },
      { value: '2,405', label: '1,75 mm nominal çap için mm2 cinsinden alan' },
      { value: '6,379', label: '2,85 mm nominal çap için mm2 cinsinden alan' },
      { value: '3 girdi', label: 'Kütle, yoğunluk ve çap dönüşümü belirler' },
    ] },
    { type: 'table', headers: ['Malzeme', 'Planlama yoğunluğu', 'Bu sayı neden önemli'], rows: [
      ['PLA', '1,24 g/cm3', 'Masaüstü baskı için yaygın referans ve prototipler için iyi bir temel.'],
      ['PETG', '1,27 g/cm3', 'PLA\'dan biraz daha yoğun olduğu için aynı gram miktarı daha az uzunluk üretir.'],
      ['ABS', '1,04 g/cm3', 'Düşük yoğunluk, aynı çapta PLA\'ya göre gram başına daha fazla uzunluk anlamına gelir.'],
      ['TPU', '1,21 g/cm3', 'Esnek filament PLA\'ya yakındır ancak yine de ayrı olarak modellenmeye değer.'],
      ['Dolgulu karışımlar', 'Değişken', 'Ahşap, karbon fiber, metal ve cam katkıları yoğunluğu temel polimerden çok uzağa taşıyabilir.'],
    ] },
    { type: 'title', text: 'Filament stok tahmini için kesin dönüşüm formülleri', level: 2 },
    { type: 'paragraph', html: 'Matematiksel model kasıtlı olarak küçük tutulmuştur çünkü her terimin fiziksel bir anlamı vardır. Kesit alanı <code>pi x (çap / 2)^2</code> şeklindedir. Hacim <code>ağırlık / yoğunluk</code> formülüyle bulunur. Uzunluk, hacim cm3 ve kesit alanı mm2 iken <code>hacim x 1000 / kesit alanı</code> formülüyle hesaplanır; sonuç milimetredir, ardından metre için 1000\'e bölünür. Bu, dilimleyicilerde ekstrüzyon hacmi, maksimum akış hızı ve malzeme kullanımını değerlendirmek için kullanılan geometrinin aynısıdır.' },
    { type: 'diagnostic', variant: 'info', title: 'Çap toleransı günlük hayattaki en büyük belirsizliktir', badge: 'Ölçüm notu', html: 'Nominal 1,75 mm\'lik bir makara, tüm rulo boyunca tam olarak 1,75 mm olmayabilir. Alan yarıçapın karesine bağlı olduğundan, küçük bir çap farkı hesaplanan uzunluğu ve gerçek ekstrüzyon hacmini değiştirir. Normal stok kontrolleri için nominal çap yeterlidir. Kalibrasyon için birkaç noktada kumpas kullanın ve ortalama çapı girin.' },
    { type: 'list', items: [
      'PrusaSlicer, Cura, Bambu Studio veya OrcaSlicer gibi dilimleyicilerden malzeme kullanımını kopyalarken gram kullanın.',
      'Güvenilir bir yeterlilik kontrolü istiyorsanız, boş makara darasını çıkardıktan sonra kalan makara ağırlığını ölçün.',
      'Özel kompozitler basarken üretici veri sayfasındaki yoğunluğu kullanın.',
      'Makine daha büyük filament besliyorsa 1,75 mm yerine 2,85 mm kullanın, çünkü kesit alanı önemli ölçüde farklıdır.',
    ] },
    { type: 'tip', title: 'Kalan stoğa boş makara darasını dahil etmeyin', html: 'Terazi üzerindeki bir makara plastik veya karton çekirdek ağırlığını içerir. Boş makara 180g ve terazi 430g gösteriyorsa, kullanılabilir filament tahmini 250g olmalıdır. Brüt makara ağırlığı girmek yeşil yeterlilik sinyalini gereğinden iyimser yapar.' },
    { type: 'title', text: 'Aynı ağırlıktan 1,75 mm ve 2,85 mm filament uzunluğu', level: 2 },
    { type: 'paragraph', html: 'Çap, birçok kullanıcının beklediğinden daha büyük bir etkiye sahiptir. 2,85 mm\'lik bir tel, 1,75 mm\'lik bir telin kesit alanının iki katından fazlasına sahiptir, bu nedenle bir kilogram çok daha az metre eder. Bu, bir çapın tek başına daha ekonomik olduğu anlamına gelmez; her ikisi de aynı parça hacmini basabilir. Stok uzunluğu rakamının çap bağlamı olmadan karşılaştırılamayacağı anlamına gelir. Bir dilimleyici gram bildirdiğinde, malzeme kullanımını kütleye göre normalleştiriyordur; bir yazıcı filament bitiş sensörü veya manuel makara tahmini metre cinsinden düşündüğünde ise çap merkezi hale gelir.' },
    { type: 'comparative', columns: 2, items: [
      { title: '1,75 mm filament', description: 'Kilogram başına daha uzun tel uzunluğu ve mevcut masaüstü yazıcılar için baskın format.', points: ['Kompakt ekstrüderler için kullanışlı', 'Aynı makara kütlesinde daha fazla metre', 'Nominal alan yaklaşık 2,405 mm2'] },
      { title: '2,85 mm filament', description: 'Kilogram başına daha kısa tel uzunluğu ve daha büyük besleme kesiti, genellikle eski veya profesyonel makinelerde görülür.', points: ['Nominal alan yaklaşık 6,379 mm2', 'Bazı düzeneklerde besleyici sıkıştırmasına karşı daha az hassas', '1,75 mm varsayımları kullanılmamalıdır'] },
    ] },
    { type: 'table', headers: ['Senaryo', 'Ne değişir', 'Planlama sonucu'], rows: [
      ['Aynı polimer, daha büyük çap', 'Alan artar', 'Aynı gram için metre azalır.'],
      ['Aynı çap, düşük yoğunluk', 'Hacim artar', 'Aynı gram için metre artar.'],
      ['Aynı gram, dolgulu filament', 'Yoğunluk artabilir', 'Metre beklenenden kısa olabilir.'],
      ['Nemli filament', 'Ölçülen kütle hafifçe artar', 'Makara, faydalı kuru polimer eklemeden daha ağır görünebilir.'],
    ] },
    { type: 'title', text: 'Uzun bir baskıya başlamadan önce makara yeterlilik kontrolü nasıl kullanılır', level: 2 },
    { type: 'paragraph', html: 'İsteğe bağlı kalan stok alanı, dönüştürücüyü bir geçit veya durdurma panosuna dönüştürür. İş için gereken kütleyi filament ağırlığı olarak girin, ardından mevcut makarada kalan kullanılabilir filamenti girin. Çıktı gramları doğrudan karşılaştırır ve ayrıca aynı malzeme ve çap modelini kullanarak farkı metre veya feete dönüştürür. Yeşil, makarada yeterli stok olduğu anlamına gelir; kırmızı, işin eksik olduğunu ve tam farkı gösterir.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Gram ve metre neden birlikte gösterilir', html: 'Gram, satın alma ve dilimleyici dilidir. Metre, bazı donanım yazılımı ekranları, filament bitiş tahminleri ve manuel makara hesaplamaları tarafından kullanılan tel uzunluğu dilidir. Her ikisini de göstermek yaygın bir planlama hatasını önler: bir yoğunluk varsayımı altında yeterli uzunluğa sahip olmak ancak gerçek malzeme altında yeterli kütleye sahip olmamak.' },
    { type: 'proscons', title: 'Stok doğrulama yöntemleri', items: [
      { pro: 'Makara tartımı hızlıdır ve rulo kısmen kullanılmış olsa bile çalışır.', con: 'Boş makara darasını bilmeli veya tahmin etmelisiniz.' },
      { pro: 'Dilimleyici gramlarını kullanmak genellikle malzeme satın alma ağırlığıyla tutarlıdır.', con: 'Dilimleyici tahminleri püskürtme hacmi, destekler, etek ve değiştirici meshlerle değişebilir.' },
      { pro: 'Uzunluk, filament yollarını ve bitiş mesafelerini karşılaştırırken sezgiseldir.', con: 'Uzunluk yoğunluk ve çapla değiştiği için malzemeler arasında evrensel değildir.' },
      { pro: 'Yoğunluk tabanlı dönüşüm PLA, PETG, ABS, TPU ve kompozitleri daha iyi yönetir.', con: 'Üreticiye özgü katkılar özel bir yoğunluk değeri gerektirebilir.' },
    ] },
    { type: 'title', text: 'Kompozit ve özel filamentler özel yoğunluk değerleri gerektirir', level: 2 },
    { type: 'paragraph', html: 'Dolgulu filamentler, ciddi bir malzeme tahmin aracının yoğunluğu gizlemek yerine göstermesinin ana nedenidir. Ahşap dolgulu PLA, karbon fiber nylon, metal dolgulu PLA, fosforlu filament, cam dolgulu mühendislik malzemeleri ve seramik benzeri karışımlar temel polimerden keskin bir şekilde sapabilir. Metal dolgulu bir filament yoğunluğu yüksek olduğu için ağır gelebilir; aynı 500g, standart PLA\'dan çok daha az hacim ve uzunluk anlamına gelebilir. Pahalı bir mühendislik baskısı için bu fark akademik değildir. Baskının son yüzde onunun tamamlanıp tamamlanmayacağını belirleyebilir.' },
    { type: 'glossary', items: [
      { term: 'Yoğunluk', definition: 'Birim hacim başına kütle, burada santimetreküp başına gram olarak ifade edilir.' },
      { term: 'Kesit alanı', definition: 'Filament telinin çaptan hesaplanan dairesel alanı.' },
      { term: 'Doğrusal kütle', definition: 'Seçilen malzeme ve çap için bir metre veya bir feet filamentin kaç gram olduğu.' },
      { term: 'Dara ağırlığı', definition: 'Terazi okumasından çıkarılması gereken boş makara ağırlığı.' },
      { term: 'Nominal çap', definition: 'Gerçek tolerans ölçülmeden önceki reklamı yapılan filament boyutu, genellikle 1,75 mm veya 2,85 mm.' },
    ] },
    { type: 'message', title: 'Üretici verisi kazanır', html: 'Makara veya teknik veri sayfası yoğunluğu belirttiğinde bu değeri kullanın. Genel yoğunluk ön ayarları planlama için faydalıdır, ancak tedarikçiye özgü formüller, pigment yükleri ve takviyeler bu sayıyı değiştirebilir.' },
    { type: 'title', text: '3B baskı malzeme tahmini için pratik örnekler', level: 2 },
    { type: 'paragraph', html: 'Bir dilimleyicinin PETG braket için 186g bildirdiğini ve kısmen kullanılmış bir makaranız olduğunu düşünün. 1,27 g/cm3 PETG ve 1,75 mm filament yaklaşık altmış bir metreye dönüşür. Dara sonrası kullanılabilir makara ağırlığı 220g ise, gösterge 34g fazla olduğunu bildirir ve bu marjı yaklaşık on bir metreye dönüştürür. Bu marj bir püskürtme hattı ve küçük bir etek için yeterli olabilir, ancak büyük bir destek hatası için yeterli olmayabilir. Stok kontrolü, kullanıcıyı baskıyı gözetimsiz bırakmadan önce gerçekçi bir tampon eklemeye teşvik eder.' },
    { type: 'paragraph', html: 'Şimdi ABS\'yi karşılaştırın. ABS, PETG\'den daha az yoğun olduğu için aynı 186g, aynı 1,75 mm çapta daha fazla hacim ve dolayısıyla daha fazla uzunluk anlamına gelir. Bu, ABS parçayı tek başına daha ucuz yapmaz çünkü kilogram başına fiyat ve baskı ayarları da önemlidir; ancak bir malzemeden kopyalanan kalan metre tahmininin neden diğerini yanıltabileceğini açıklar. Envanter kontrolü için kütle sabit başlangıç noktasıdır ve yoğunluk uzunluğa köprü oluşturur.' },
    { type: 'summary', title: 'Güvenilir malzeme planlama kontrol listesi', items: [
      'Kalan stoğu girmeden önce boş makara darasını çıkarın.',
      'Dolgulu, takviyeli veya premium filamentler için gerçek malzeme yoğunluğunu kullanın.',
      'Herhangi bir uzunluk rakamına güvenmeden önce makinenizin 1,75 mm veya 2,85 mm filament kullanıp kullanmadığını kontrol edin.',
      'Püskürtme, destekler, etekler, başarısız ilk katmanlar ve dilimleyici profil değişiklikleri için bir marj bırakın.',
      'Yeşil yeterlilik durumunu bir garanti değil, bir planlama kontrolü olarak değerlendirin.',
    ] },
    { type: 'title', text: 'SEO odaklı yanıt: filament ağırlık-uzunluk dönüşümü tek cümlede', level: 2 },
    { type: 'paragraph', html: '3B yazıcı filament ağırlığını uzunluğa dönüştürmek için gram cinsinden ağırlığı malzeme yoğunluğuna bölerek hacmi bulun, cm3\'ü mm3\'e çevirmek için 1000 ile çarpın, <code>pi x (çap / 2)^2</code> formülüne bölün, ardından metre okumak için 1000\'e bölün. Bu yoğunluk bilinçli yöntem, sabit bir gram-metre tablosundan daha doğrudur çünkü PLA, PETG, ABS, TPU, Nylon, PC ve kompozit filamentlerin tümü farklı yoğunluk değerlerine sahiptir.' },
    { type: 'diagnostic', variant: 'success', title: 'Tahminin en güvenilir olduğu durumlar', badge: 'En iyi uygulama', html: 'Sonuç, dilimleyici ağırlığı kesin olduğunda, kalan makara ağırlığı darası çıkarılmış olduğunda, çap ölçülmüş veya biliniyorsa ve yoğunluk üreticiden geldiğinde en güçlüdür. Bu koşullar altında dönüştürücü, uzun baskılar, üretim partileri ve pahalı teknik polimerler için pratik bir ön uçuş kontrolü haline gelir.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
