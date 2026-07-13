import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'cok-malzemeli-tahliye-hesaplayici';
const title = 'Çok Malzemeli Tahliye Hesaplayıcı: Filaman Atığını Analiz Edin ve Optimize Edin';
const description = 'Bir pigment yoğunluk matrisi ile renk değişimleri için AMS ve MMU tahliye kulesi hacmini, israf edilen filaman kütlesini ve geçiş maliyetini tahmin edin.';

const faqData = [
  {
    question: 'Siyah-beyaz geçişine neden beyaz-siyahtan daha yüksek bir tahliye faktörü atanıyor?',
    answer: 'Koyu pigmentler açık polimerleri, açık pigmentlerin koyu polimerleri kirlettiğinden daha belirgin şekilde kirletir. Bu nedenle hesaplayıcı, siyah-beyazı yüksek faktörlü bir geçiş, beyaz-siyahı ise daha düşük faktörlü bir geçiş olarak modeller.',
  },
  {
    question: 'Bu hesaplayıcı, dilimleyici temizleme hacimlerinin yerini alır mı?',
    answer: 'Hayır. Dilimleme veya bütçeleme öncesinde tahliye ekonomisini tahmin eden tanısal bir planlayıcıdır. Son makineye özel ayar için dilimleyici kalibrasyon sonucunu kullanın.',
  },
  {
    question: 'Hangi tahliye oranını çok yüksek olarak değerlendirmeliyim?',
    answer: 'Araç, toplam ekstrüde hacmin yüzde 30\'unun üzerindeki yüksek atık oranını işaretler. Bu eşik genellikle renk sırası, gruplama, dolguya tahliye veya model bölmenin gözden geçirilmesi gerektiği anlamına gelir.',
  },
  {
    question: 'Sadece renk değişimleri için değil, malzeme değişimleri için de kullanabilir miyim?',
    answer: 'Mevcut matris, pigment kirlenmesine odaklanır. Karışık polimerler, çözünebilir destekler, aşındırıcı malzemeler ve sıcaklık değişimleri, renk faktörünün ötesinde ekstra tahliye gerektirebilir.',
  },
];

const howToData = [
  {
    name: 'Nesne ve temel tahliye hacmini girin',
    text: 'Gerçek model hacmini ve AMS veya MMU profilinizin normal bir filaman değişimi için kullandığı standart tahliye hacmini yazın.',
  },
  {
    name: 'Kaynak ve hedef renkleri seçin',
    text: 'Her geçiş için dairesel renk seçicileri kullanın. Geçiş faktörü, pigment matrisinden anında güncellenir.',
  },
  {
    name: 'Geçiş sayılarını ayarlayın',
    text: 'Her renk çiftinin işte kaç kez geçtiğini girin. Tekrarlanan karanlıktan aydınlığa geçişler, toplam tahliye tahminine hakim olacaktır.',
  },
  {
    name: 'Oran, kütle ve maliyeti okuyun',
    text: 'Baskının üretimden önce yeniden düzenlenip düzenlenmeyeceğine karar vermek için nesne-tahliye çubuğunu, atık kütlesini ve maliyet sonucunu kullanın.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'Empryal',
    currencyLabel: 'Para Birimi',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Maliyet modeli',
    objectVolumeLabel: 'Nesne hacmi',
    basePurgeLabel: 'Değişim başına temel tahliye',
    densityLabel: 'Yoğunluk g/cm3',
    priceLabel: 'Kg başına fiyat',
    transitionsTitle: 'Pigment geçiş matrisi',
    fromLabel: 'Kimden',
    toLabel: 'Kime',
    colorLabels: {
      white: 'Beyaz',
      natural: 'Doğal',
      yellow: 'Sar',
      red: 'Kırmız',
      blue: 'Mav',
      green: 'Yeşil',
      gray: 'Gr',
      black: 'Siyah',
    },
    countLabel: 'Değişim',
    objectLabel: 'Nesne gerçek plastiği',
    purgeTowerLabel: 'Tahliye kulesi atığı',
    totalWasteLabel: 'Tahliye hacmi',
    wasteCostLabel: 'Atık maliyeti',
    purgeRatioLabel: 'Tahliye oran',
    massLabel: 'Atık kütlesi',
    loadbarAriaLabel: 'Nesne hacminin tahliye kulesi hacmiyle karşılaştırılması',
    alertTitle: 'Yüksek atık oranı tespit edildi',
    alertText: 'Yüksek atık oranı tespit edildi: Benzer renklerin gruplandırılması önerilir.',
    efficientText: 'Tahliye oranı planlama sınırı içinde.',
    factorGuideTitle: 'Geçişe Göre Tahliye Faktörü Kılavuzu',
    transitionLabel: 'Geçiş',
    factorLabel: 'Faktör',
    volumeLabel: 'Tahliye hacmi',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'AMS ve MMU tahliye atığı nasıl gerçek bir üretim maliyetine dönüşür',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çok malzemeli bir baskı, filamanı yalnızca görünür nesnede tüketmez. Her renk veya malzeme değişimi, hotend, eriyik bölgesi, nozul ve bazen bir sonraki ekstrüzyon yolunun başlangıcında erimiş polimer bırakır. Yazıcı, bir sonraki görünür yüzey temizlenene kadar bu yoldan yeterince yeni filaman itmelidir. AMS, MMU, kafa değiştirici ve palet tarzı iş akışlarında, bu temizlik ekstrüzyonu genellikle bir tahliye kulesi, tahliye bloğu, tahliye hattı veya atık kanalı birikintisi haline gelir. Önemli ekonomik nokta basittir: kulenin hacmi, kütlesi ve malzeme maliyeti olduğu için diğer parçalar gibi fiyatlandırılabilir.',
    },
    {
      type: 'paragraph',
      html: 'Genel hesaplayıcılar genellikle değişim sayısını sabit bir temizleme hacmiyle çarpar. Bu kaba bir bütçe için kullanışlıdır, ancak renkli baskıdaki en pahalı hata modunu gözden kaçırır: <strong>asimetrik kirlenme</strong>. Beyazdan siyaha geçiş, siyahtan beyaza geçişle aynı temizliği gerektirmez. Beyaz PLA, PETG veya ABS\'ye taşınan az miktarda siyah pigment hızla görünürken, siyaha taşınan az miktarda beyaz genellikle daha koyu pigment yükü tarafından gizlenir. Bu araç, her yönün kendi çarpanına sahip olması için bir geçiş matrisi kullanır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Gösterge paneli tarafından kullanılan yüksek tahliye oranı uyarı eşiği' },
        { value: '1.6x', label: 'Siyah-beyaz varsayılan geçiş çarpan' },
        { value: '0.8x', label: 'Beyaz-siyah varsayılan geçiş çarpan' },
        { value: '0 düğme', label: 'Düzenleme sırasında tüm hesaplamalar anında güncellenir' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'İzlenmesi gereken pahalı belirti',
      badge: 'Atık denetimi',
      html: 'Tahliye kulesi, birleşik nesne ve tahliye hacminin yüzde 30\'unu aştığında, iş artık sadece renkli bir baskı değildir. Satın alınan filamanın büyük bir kısmının ürün dışı çıktı haline geldiği bir malzeme dönüşüm sürecidir. Makine başlamadan önce renk sıralaması, model bölme, dolguya tahliye ve toplu işlemenin dikkate alınması gereken nokta budur.',
    },
    {
      type: 'title',
      text: 'Hesaplayıcının arkasındaki geçiş matrisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Temel model <code>Vtoplam = toplam(Vtaban x Ka,b)</code> şeklindedir. <code>Vtaban</code>, bir standart filaman değişimi için temel tahliye hacmidir. <code>Ka,b</code>, <code>a</code> renginden <code>b</code> rengine geçiş faktörüdür. 1\'in altındaki bir faktör, geçişin genellikle taban çizgisinden daha kolay olduğu anlamına gelir. 1\'in üzerindeki bir faktör, sonraki rengin kirlenmeye duyarlı olduğu veya önceki rengin güçlü pigment taşımasına sahip olduğu anlamına gelir. Sonuç, filaman yoğunluğu kullanılarak kütleye dönüştürülen santimetreküp cinsinden bir tahliye hacmidir.',
    },
    {
      type: 'paragraph',
      html: 'Maliyet formülü <code>Catik = ((Vtoplam x yoğunluk) / 1000) x fiyatKg</code> şeklindedir. Tahliye kulesi 1,24 g/cm3\'te 80 cm3 PLA kullanıyorsa, 99,2 g filaman tüketir. Kilogram başına 24\'te, bu kule elektrik, makine süresi, başarısız renk geçişleri veya son işleme dikkate alınmadan önce malzemede 2,38\'e mal olur. Bir hobi baskısı için bu kabul edilebilir olabilir. Tekrarlanan üretim için bu bir maliyet kalemidir.',
    },
    {
      type: 'table',
      headers: ['Geçiş', 'Varsayılan faktör', 'Neden bu şekilde ağırlıklandırıldı'],
      rows: [
        ['Beyaz-siyah', '0.80x', 'Siyah, küçük açık kalıntıları gizler, bu nedenle görünür kirlenme toleransı daha yüksektir.'],
        ['Siyah-beyaz', '1.60x', 'Beyazdaki koyu kalıntı hemen görünür ve genellikle daha uzun bir temizleme gerektirir.'],
        ['Doğal-beyaz', '1.15x', 'Yarı saydam veya doğal malzeme, eriyik yolu temizlenene kadar opak beyazı renklendirebilir.'],
        ['Sar-beyaz', '1.35x', 'Sarı pigmentler, siyah kadar şiddetli olmamakla birlikte açık yüzeyleri ısıtabilir veya lekeleyebilir.'],
        ['Kırmızı-sarı', '1.08x', 'Kırmızı taşınması, sarı ve turuncuya yakın renklerde rengi güçlü bir şekilde değiştirir.'],
        ['Gri-siyah', '0.72x', 'Gri kalıntı genellikle siyah pigment tarafından gizlenir, bu nedenle tahliye daha düşük olabilir.'],
      ],
    },
    {
      type: 'tip',
      title: 'Temel hacim olarak dilimleyici kalibrasyonunuzu kullanın',
      html: 'Önce yazıcınız için satıcı veya topluluk temizleme kalibrasyonunu çalıştırın, ardından bu sonucu temel tahliye hacmi olarak girin. Matris, nozul çapı, hotend hacmi, filaman yolu uzunluğu ve dilimleyici davranışı için makineye özel ayarın yerini almak değil, bilinen bir taban çizgisini ölçeklendirmelidir.',
    },
    {
      type: 'title',
      text: 'Polimer opaklığı neden gerekli tahliye hacmini değiştirir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opaklık, önceki renk kirlenmesinin bir sonraki malzemede ne kadar görünür olduğunu kontrol eder. Opak beyaz zorlayıcıdır çünkü ışığı güçlü bir şekilde yansıtır ve yüzeye yakın daha koyu parçacıkları veya çizgileri gösterir. Doğal ve yarı saydam filamanlar farklı davranır: daha az kütle gizleyebilir ancak özellikle ince duvarlarda veya arkadan aydınlatmalı parçalarda derinlik yoluyla renk tonu gösterebilir. Kırmızı ve mavi gibi doygun renkler de sonraki açık renkleri lekeleyebilir çünkü güçlü kroma için gereken pigment konsantrasyonu düşük kalıntı seviyelerinde görünür kalır.',
    },
    {
      type: 'paragraph',
      html: 'Yazıcı renk bilimini bilmez. Yalnızca bir uzunluk veya hacim ekstrüde eder. Kullanıcı, görünür sonucun kozmetik saflık, işlevsel ayrım veya yalnızca kaba bir renk değişimi gerektirip gerektirmediğine karar vermelidir. Bir oyuncak, logo, tabela yüzü, litofan çerçevesi veya müşteriye yönelik bir muhafaza agresif tahliye gerektirebilir. Gizli bir iç destek, taslak prototip veya bir fikstürün arka tarafı daha fazla taşınmaya tolerans gösterebilir. Hesaplayıcı, geçiş yönü daha zor olduğunda tahliye kulesini büyüterek bu takası gösterir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Açık hedef',
          description: 'Beyaz, doğal, sarı ve açık gri hassas hedeflerdir. Koyu veya doygun önceki renkler, bu renkler temiz görünmeden önce daha uzun tahliye gerektirir.',
          points: ['Daha yüksek faktörler kullanın', 'Açık bölümleri bir arada gruplayın', 'Siyah-beyaz arasında tekrar tekrar dönüş yapmaktan kaçının'],
        },
        {
          title: 'Koyu hedef',
          description: 'Siyah, lacivert, koyu yeşil ve koyu gri, açık renklerden gelen kalıntıları gizleyebilir. Bu geçişler genellikle daha küçük çarpanlar kullanabilir.',
          points: ['Daha düşük görünür risk', 'Açık renklerden sonra iyi hedef', 'Bir dizide kullanışlı son renk'],
        },
        {
          title: 'Benzer renk tonu geçişi',
          description: 'İlgili renkler arasında geçiş yapmak genellikle karanlıktan aydınlığa geçmekten daha az maliyetlidir. Kırmızı-turuncu veya gri-siyah normalde mavi-sarıdan daha kolaydır.',
          points: ['Renk sıralaması önemlidir', 'Renk tonu aileleri atığı azaltır', 'Benzer nesneleri bir arada toplayın'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Temel tahliye hacmi', definition: 'Matris ölçeklemesinden önce dilimleyicinizin veya kalibrasyon profilinizin sıradan bir filaman değişimi için ekstrüde ettiği normal hacim.' },
        { term: 'Geçiş faktörü', definition: 'Siyah-beyaz veya beyaz-siyah gibi bir renk değişiminin bir yönüne atanan çarpan.' },
        { term: 'Tahliye oran', definition: 'Hem nesne hem de tahliye kulesi dahil olmak üzere toplam ekstrüde edilmiş hacme bölünen tahliye hacmi.' },
        { term: 'Pigment taşınması', definition: 'Hotendde kalan ve bir sonraki ekstrüzyonda görünen önceki filaman renginin görünür kalıntısı.' },
        { term: 'Dolguya tahliye', definition: 'Bazı temizlik ekstrüzyonlarını bir kule veya atık kanalı yerine gizli dolguya yönlendiren bir dilimleyici stratejisi.' },
      ],
    },
    {
      type: 'title',
      text: 'Renk kalitesini bozmadan AMS filaman atığı nasıl azaltılır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İlk optimizasyon renk sırasıdır. Bir model bölünebilir, gruplar halinde basılabilir veya karanlıktan aydınlığa geçişlerin daha az gerçekleşeceği şekilde düzenlenebilirse, tahliye kulesi önemli ölçüde küçülebilir. Tekrarlanan siyah-beyaz değişimleri pahalıdır çünkü her döngü, yazıcının hassas bir hedeften önce güçlü bir pigmenti çıkarmasını ister. Aynı görsel tasarım bir kez beyaz-siyah olarak veya daha sonra birleştirilecek ayrı parçalar olarak basılabilirse, malzeme bütçesi hemen değişir.',
    },
    {
      type: 'paragraph',
      html: 'İkinci optimizasyon hedef seçimidir. Birkaç renk isteğe bağlı olduğunda, açık bölgelerden sonra görünen ayrıntılar için koyu bir son renk seçin. Örneğin, beyaz bir plaket üzerinde siyah metin genellikle siyah bir plaket üzerinde beyaz metinden daha ucuzdur çünkü ikincisi yazıcıyı her beyaz segmentten önce koyu kalıntıları temizlemeye zorlar. Bu sadece estetik bir karar değildir; hotendden itilmesi gereken polimerin fiziksel miktarını değiştirir.',
    },
    {
      type: 'list',
      items: [
        'İlgili renk tonlarının geçişleri paylaşması için modelde veya baskı kuyruğunda benzer renkleri gruplayın.',
        'Dahili renk kirlenmesinin kabul edilebilir olduğu ve parçanın yeterli dolgu hacmine sahip olduğu durumlarda dolguya tahliye kullanın.',
        'Rozetleri, logoları, etiketleri veya dekoratif ekleri ayrı basılı parçalara bölerek renk değişimlerini azaltın.',
        'Tasarım izin verdiğinde açık renklerden sonra daha koyu renkler kullanın.',
        'Temizleme çarpanlarını yalnızca dilimleyici varsayılanlarıyla değil, fiziksel örneklerle ayarlayın.',
        'Dekoratif çok renkli işlerin düşük fiyatlandırılmaması için müşteri tekliflerinde tahliye maliyetini ayrı olarak bütçeleyin.',
      ],
    },
    {
      type: 'proscons',
      title: 'Optimizasyon ödünleşimleri',
      items: [
        { pro: 'Daha düşük tahliye faktörleri, kule kütlesini ve filaman maliyetini azaltır.', con: 'Çok az tahliye, çizgiler, renklenme veya kabul edilemez müşteriye yönelik yüzeyler oluşturabilir.' },
        { pro: 'Modelleri bölmek birçok renk değişimini ortadan kaldırabilir.', con: 'Montaj, işçilik, tolerans yönetimi, tutkal, bağlantı elemanları veya görünür dikişler ekler.' },
        { pro: 'Dolguya tahliye, bazı atıkları kullanışlı iç plastiğe dönüştürür.', con: 'Yalnızca nesnenin yeterli gizli hacme sahip olduğu ve kirlenmenin yapısal olarak kabul edilebilir olduğu durumlarda en iyi şekilde çalışır.' },
        { pro: 'Benzer renklerin toplu işlenmesi, baskı çiftliği ekonomisini iyileştirir.', con: 'Belirli bir renk sırası gerektiren acil tek seferlik işleri geciktirebilir.' },
      ],
    },
    {
      type: 'title',
      text: 'Müşteriler ve baskı çiftlikleri için çok malzemeli baskıları bütçeleme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Yalnızca nihai nesne hacmini fiyatlandıran bir baskı teklifi, AMS ve MMU işleri için yanlıştır. Müşteri üretim sürecini satın alıyor ve süreç, ürün dışı ekstrüzyonu içeriyor. Birçok katman katman renk değişimine sahip küçük bir anahtarlık, daha büyük tek renkli bir braketten daha fazla malzeme israf edebilir. Hesaplayıcı, atığı tek bir sayının içinde gizlemek yerine nesne hacmini ve tahliye kulesi hacmini rekabet eden iki blok olarak karşılaştırarak bunu görünür kılar.',
    },
    {
      type: 'paragraph',
      html: 'Bir çiftlik için tahliye oranı aynı zamanda bir planlama sinyalidir. Yüksek tahliyeli işler, filamanı kule plastiğine dönüştürürken yazıcıyı meşgul eder, bu nedenle ekonomik kayıp yalnızca malzeme değildir. Filaman değiştirme, kesme, yükleme, silme ve basıncı yeniden oluşturma için harcanan makine süresi, satılabilir hacim üretmek için harcanmayan süredir. Tahliye oranı yüksek olduğunda, öğenin çok renkli bir ek ücret taşıması gerekip gerekmediğini, renklerin sınırlandırılması gerekip gerekmediğini veya boyalı, baskı etiketli veya monte edilmiş bir çözümün daha ucuz olup olmadığını değerlendirin.',
    },
    {
      type: 'card',
      title: 'Çok renkli işler için teklif kural',
      html: 'Nesneyi fiyatlandırın, ardından tahliye kulesini ayrı bir atık kalemi olarak fiyatlandırın. Müşteri iki renkten dört renge geçerse veya birçok katmanda küçük izole ayrıntılar eklerse, görünür model hacmi neredeyse hiç hareket etmese bile geçiş sayısı değiştiği için teklifi güncelleyin.',
    },
    {
      type: 'table',
      headers: ['Tahliye oran', 'Yorum', 'Önerilen eylem'],
      rows: [
        ['%15\'in altında', 'Verimli çok renkli iş', 'Normal teklif varsayımları genellikle kabul edilebilir.'],
        ['%15 ila %30', 'Malzeme kaybı görünür', 'Geçişleri gözden geçirin ve dolguya tahliyenin yardımcı olup olmadığını kontrol edin.'],
        ['%30\'un üzerinde', 'Yüksek atık oran', 'Renkleri gruplayın, modeli bölün, teklifi yükseltin veya renk düzenini yeniden tasarlayın.'],
        ['%50\'nin üzerinde', 'Kule ekonomiye hakim', 'Baskıyı rutin bir nesne baskısı olarak değil, özel bir üretim işi olarak ele alın.'],
      ],
    },
    {
      type: 'title',
      text: 'Gösterge paneli sonuçlarını okuma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İki yatay blok kasıtlı olarak ciddidir. Yeşil, gerçek nesne hacmidir. Çizgili tahliye bloğu, görünür ürün haline gelmeyen malzemedir. Çizgili blok, nesne bloğuyla fiziksel olarak karşılaştırılabilir görünmeye başlarsa, baskı incelemeyi hak ediyordur. Bu görsel oran, gram veya para biriminden genellikle daha ikna edicidir çünkü kullanıcıya temizliğe ne kadar plastik ayrıldığını tam olarak gösterir.',
    },
    {
      type: 'paragraph',
      html: 'Kütle sonucu, hacmin yoğunlukla çarpılmasından gelir. PLA genellikle yaklaşık 1,24 g/cm3, PETG yaygın olarak yaklaşık 1,27 g/cm3, ABS daha düşüktür ve doldurulmuş filamanlar büyük farklılıklar gösterir. Fiyat sonucu, kilogram başına seçilen fiyatı kullanır. Özel ipek PLA, karbon fiber karışımları, çözünebilir destek veya mühendislik filamanı kullanıyorsanız, varsayılan fiyatı ve yoğunluğu değiştirin. Aynı tahliye hacmi, malzemeye bağlı olarak çok farklı ekonomik ağırlığa sahip olabilir.',
    },
    {
      type: 'summary',
      title: 'Karar kontrol listesi',
      items: [
        'Temel hacim olarak ölçülen dilimleyici tahliye kalibrasyonunu kullanın.',
        'AMS veya MMU\'ya yüklenen renklerin sayısını değil, tekrarlanan geçişleri sayın.',
        'Önce siyah-beyaz, doygun-açık ve yarı saydam hedef geçişlerine dikkat edin.',
        'Yüzde 30\'un üzerindeki bir tahliye oranını yeniden tasarım veya teklif uyarısı olarak değerlendirin.',
        'Malzeme bütçelemesi için maliyet sonucunu ve hızlı tasarım incelemesi için görsel çubuğu kullanın.',
      ],
    },
    {
      type: 'message',
      title: 'Pratik alt satır',
      html: 'Renk değişimleri, tahliye kulesi nesneye göre küçük kalacak şekilde düzenlendiğinde çok malzemeli bir baskı verimlidir. Kule yüzde 30 uyarı çizgisini geçerse, en ucuz optimizasyon genellikle yeni bir makara veya daha hızlı bir profil değil, daha iyi bir renk stratejisidir.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
