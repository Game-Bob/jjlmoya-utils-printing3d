import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'gokkusagi-filament-gecis-uzunlugu-hesaplayicisi',
  title: '3D Baskılar için Gökkuşağı Filamenti Geçiş Uzunluğu Hesaplayıcısı',
  description: 'Gökkuşağı filamenti renk döngülerini, makara kullanımını ve dilimlenmiş bir 3D baskının Z yüksekliği boyunca gradyan geçişlerinin nerede görüneceğini tahmin edin.',
  ui: {
    unitMetric: 'Metrik',
    unitImperial: 'US',
    cycleLength: 'Renk döngüsü uzunluğu',
    partWeight: 'Dilimlenmiş parça ağırlığı',
    density: 'Yoğunluk',
    diameter: 'Filament çapı',
    partHeight: 'Basılan Z yüksekliği',
    startOffset: 'Makara üzerinde başlangıç ofseti',
    presets: 'Malzeme ön ayarları',
    pla: 'PLA gökkuşağı',
    petg: 'PETG karışımı',
    silk: 'İpek çok renkli',
    usedFilament: 'Kullanılan filament',
    cyclesInPart: 'Parçadaki döngüler',
    heightPerCycle: 'Döngü başına Z',
    gramsPerCycle: 'Döngü başına kütle',
    zMap: 'Z geçiş haritası',
    transitionBands: 'Görünür geçiş bantları',
    phaseWindow: 'Döngü fazı',
    copySummary: 'Gradyan özetini kopyala',
    reset: 'Sıfırla',
    emptyValue: '0',
    copyTemplate: 'Gökkuşağı filament tahmini',
    copyCycles: 'renk döngüsü',
    copyUsed: 'kullanıldı',
    copyZCycle: 'döngü başına',
  },
  seo: [
    { type: 'title', text: 'Gökkuşağı Filamenti Geçiş Uzunluğu Hesaplayıcısı Nasıl Çalışır', level: 2 },
    { type: 'paragraph', html: 'Bir gökkuşağı filamenti geçiş uzunluğu hesaplayıcısı, genellikle ayrı ayrı görüntülenen iki dilimleyici sayısını birbirine bağlar: <strong>model kütlesi</strong> ve <strong>baskı yüksekliği</strong>. Dilimleyici, parçanın kaç gram malzeme tüketeceğini söylerken, filament üreticisi veya manuel bir ölçüm, makaranın tam bir renk döngüsünü tamamlamak için kaç metreye ihtiyacı olduğunu söyler. Bu değerler aynı malzeme akışı modelinde olduğunda, nesnede kaç renk döngüsü göründüğünü ve her renk bandının Z ekseninde nereye düştüğünü tahmin edebilirsiniz.' },
    { type: 'paragraph', html: 'Temel dönüşüm görselden ziyade fizikseldir. 180 g ağırlığındaki dilimlenmiş bir parça, her makarada otomatik olarak aynı filament uzunluğunu tüketmez çünkü uzunluk yoğunluğa ve çapa bağlıdır. PLA, PETG, ipek PLA, dolgulu karışımlar ve yarı saydam karışımlar farklı yoğunluklara sahip olabilir. Nominal 1,75 mm filament de tolerans değişimine sahiptir, bu nedenle bir hesaplayıcı, varsayılanı her zaman varsaymak yerine çapı ayarlamanıza izin vermelidir.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,75 mm', label: 'yaygın FDM filament çapı', icon: 'mdi:circle-slice-8' },
      { value: '1,24 g/cm3', label: 'tahminler için kullanılan tipik PLA yoğunluğu', icon: 'mdi:flask' },
      { value: '30 m', label: 'tam gökkuşağı renk döngüsü örneği', icon: 'mdi:palette' },
      { value: 'Z ekseni', label: 'döngü uzunluğunun görünür hale geldiği yer', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Önizlemeye güvenmeden önce gerçek bir döngüyü ölçün', html: 'Üreticiler genellikle gökkuşağı filamentini hızlı, orta veya uzun geçiş olarak tanımlar, ancak kullanışlı girdi, bir rengin aynı renge dönmesinden itibaren ölçülen mesafedir. Yalnızca makara için güvenliyse küçük bir numuneyi çözün veya ince bir temizleme kulesi yazdırın ve dilimleyici tahminlerinden tüketilen filament uzunluğunu geriye doğru hesaplayın.' },

    { type: 'title', text: 'Parça Ağırlığı Neden Renk Değişimlerini Baskı Süresinden Daha İyi Tahmin Eder', level: 2 },
    { type: 'paragraph', html: 'Baskı süresi, gökkuşağı makarası renk kullanımı için zayıf bir tahmincidir. Dekoratif bir vazo, spiral modda saatlerce sürebilirken az malzeme tüketebilir ve yoğun bir mekanik braket hızla büyük miktarda filament tüketebilir. Makara, <strong>ekstrüderden çekilen filament uzunluğuna</strong> göre renk değiştirir, geçen dakikalara, hareket mesafesine veya katman sayısına göre değil.' },
    { type: 'paragraph', html: 'Dilimleyici ağırlığı kullanışlıdır çünkü zaten duvarları, dolguyu, üst ve alt katmanları, destekleri (etkinleştirilmişse), brimleri, etekleri ve temizleme yapılarını içerir. Bu ağırlık, malzeme yoğunluğuna bölünerek hacme dönüştürülebilir. Hacim daha sonra filamentin kesit alanına bölünerek toplam filament uzunluğu tahmin edilebilir. Bu nedenle aynı STL, dolgu, duvar sayısı, destek ayarları veya ölçeği değiştirdiğinizde farklı gradyan davranışı gösterebilir.' },
    { type: 'table', headers: ['Dilimleyici Değişikliği', 'Filament Kullanımına Etkisi', 'Gökkuşağı Gradyanına Etkisi'], rows: [
      ['Daha fazla dolgu', 'Toplam gram ve metreleri artırır', 'Aynı Z yüksekliği içinde daha fazla renk döngüsü ilerlemesi'],
      ['Daha fazla duvar', 'Çoğu katmanda kullanımı artırır', 'Geçişler dikey olarak sıkışır ve daha sık hale gelir'],
      ['Aynı kütleyle daha yüksek model', 'Daha fazla Z yüksekliğinde benzer metre', 'Geçişler daha da uzar'],
      ['Destekler etkin', 'Görünür parçanın dışındaki renkleri tüketir', 'Görünür faz, desteksiz modele kıyasla kayabilir'],
      ['Büyük brim veya sal', 'İlk görünür katmandan önce filament tüketir', 'Başlangıç rengi makarada ileri kayar'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Son ayarlardan sonra dilimleyici tahminini kullanın', badge: 'Önemli', html: 'Katman yüksekliği, duvar sayısı, dolgu, destekler, brim ve ölçeği seçtikten sonra hesaplamayı yapın. Destek oluşturmadan önce yapılan bir gökkuşağı makarası renk döngüsü tahmini, destek malzemesi nesneden önce ve nesne sırasında renk dizisinin bir kısmını tükettiği için gözle görülür şekilde yanlış olabilir.' },

    { type: 'title', text: 'Gökkuşağı Filament Makaralarında Renk Döngüsü Uzunluğunu Anlama', level: 2 },
    { type: 'paragraph', html: 'Renk döngüsü uzunluğu, dizinin tekrarlanması için gereken filament mesafesidir. Altı renkli bir gökkuşağı makarasında, bir döngü kırmızı, turuncu, sarı, yeşil, mavi, mor arasında gidip tekrar kırmızıya dönebilir. Döngü, küçük bir heykelcikte birden fazla geçiş için yeterince kısa veya orta boy bir baskının yalnızca bir yavaş değişim göstermesi için yeterince uzun olabilir. Bir <strong>gökkuşağı makarası renk döngüsü hesaplayıcısı</strong>, bu sayı gerçekçi olduğunda en kullanışlıdır.' },
    { type: 'paragraph', html: 'Tüm geçiş filamentleri eşit renk bölgelerine sahip değildir. Bazı ürünler uzun solmalarla kademeli olarak karışırken, diğerleri daha güçlü bloklara sahiptir. Hesaplayıcı, tam döngüyü eşit dağıtılmış renk bantları olarak ele alır çünkü bu, yalnızca dilimleyici verilerinden en pratik tahmindir. Makaranızda eşit olmayan bölümler varsa, Z haritasını faz kılavuzu olarak kullanın ve gerçek görsel karışımın daha yumuşak veya asimetrik olmasını bekleyin.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Kısa döngülü gökkuşağı', description: 'Miniatürler, süs eşyaları, küçük vazolar ve isim plakaları için en iyisi. Daha az malzemeyle birden çok renk değişimi.', icon: 'mdi:weather-sunset-up', points: ['Hızlı görünür geçişler', 'Büyük düz yüzeylerde karmaşık görünebilir'] },
      { title: 'Orta döngülü gökkuşağı', description: 'Masa nesneleri ve orta boy heykeller için dengeli bir seçim. Genellikle bir ila üç ana geçiş üretir.', icon: 'mdi:palette-swatch', highlight: true, points: ['Yaygın baskılarda tahmin edilebilir', '100-300 g nesneler için iyi'] },
      { title: 'Uzun döngülü gökkuşağı', description: 'Yavaş, akıcı gradyanlar gerektiren uzun vazolar, büyük ejderhalar, lambalar ve tek duvarlı baskılar için daha iyi.', icon: 'mdi:palette-outline', points: ['Yumuşak renk geçişi', 'Küçük modeller tek renk kalabilir'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Renk döngüsü', definition: 'Tam renk dizisinin bir başlangıç renginden aynı renge tekrarlanması için gereken filament uzunluğu.' },
      { term: 'Faz', definition: 'Görünür parçanın basılmaya başladığı anda renk döngüsü içindeki mevcut konum.' },
      { term: 'Geçiş bandı', definition: 'Tahmini renk bölümünün Z ekseni boyunca değiştiği basılı nesnenin dikey bölgesi.' },
      { term: 'Başlangıç ofseti', definition: 'Model başlamadan önce zaten tüketilmiş filament uzunluğu (önceki baskılar, temizleme, etek, brim veya manuel düzeltme dahil).' },
    ] },

    { type: 'title', text: 'Z Ekseni Boyunca Renk Geçiş Pozisyonu Nasıl Tahmin Edilir', level: 2 },
    { type: 'paragraph', html: 'Z haritası bir tahmin aracıdır, bir dilimleyici simülatörü değildir. Malzeme tüketiminin baskı yüksekliği boyunca orantılı olarak dağıtıldığını varsayar. Bu, birçok vazo modu baskı, sabit kesitli heykeller ve dekoratif nesneler için iyi bir birinci derece modeldir. Modelin ağır bir tabanı, içi boş bir ortası, yoğun bir üstü veya yükseklik boyunca dengesiz malzeme tüketen büyük destekleri olduğunda daha az doğru hale gelir.' },
    { type: 'paragraph', html: 'Çoğunlukla tekdüze kesitli bir model için, baskı yüksekliğini renk döngülerine bölmek sezgisel bir cevap verir: 160 mm\'lik bir nesne iki tam renk döngüsü kullanıyorsa, her döngü yaklaşık 80 mm Z yüksekliği kaplar. Yalnızca 0,4 döngü kullanıyorsa, baskı gökkuşağı dizisinin yarısından azını gösterecektir. 4 döngü kullanıyorsa, renkler sık sık tekrarlanır ve tek bir düzgün gradyan yerine çizgili bir görünüm oluşturabilir.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Toplam makine hareket yüksekliğini değil, basılan Z yüksekliğini kullanın.',
      'Bu özellikler nesneden önce basılıyorsa, brim veya sal tüketimini başlangıç ofseti olarak dahil edin.',
      'Çoklu nesne plakaları için, nesneler katman katman sıralı olarak basılıyorsa birleşik dilimlenmiş ağırlığı hesaplayın.',
      'Sıralı baskı için her nesneyi ayrı ayrı hesaplayın ve bir sonraki nesne için başlangıç ofsetini ilerletin.',
      'Bir temizleme kulesi veya çok renkli atık yapısı için, ne zaman basıldığına bağlı olarak tahmini kütlesini ofsete veya toplam kullanıma ekleyin.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Alt kısmın tahmin edilen ilk renkle eşleşmeme nedeni', html: 'Birçok yazıcı, ilk görünür duvardan önce temizler, bir prim çizgisi çizer, bir etek veya brim basar. Bu özellikler filament tüketir ve başlangıç fazını kaydırır. İlk görünür katman belirli bir renk olması gerekiyorsa, bu baskı öncesi tüketimi ölçün veya tahmin edin ve başlangıç ofseti olarak girin.' },

    { type: 'title', text: 'Yoğunluk, Çap ve İki 180 g Baskının Neden Farklı Filament Uzunlukları Kullanabileceği', level: 2 },
    { type: 'paragraph', html: 'Aynı kütle, yoğunluk gram başına hacmi değiştirdiği için farklı filament uzunluklarını temsil edebilir. PLA genellikle yaklaşık 1,24 g/cm3, PETG yaklaşık 1,27 g/cm3 olarak tahmin edilir ve bazı ipek veya dolgulu karışımlar, yüksek baskılarda geçişleri birkaç milimetre kaydıracak kadar farklı olabilir.' },
    { type: 'paragraph', html: 'Tüm geçiş filamentleri eşit renk bölgelerine sahip değildir. Hesaplayıcı, tam döngüyü eşit dağıtılmış renk bantları olarak ele alır. Makaranızda eşit olmayan bölümler varsa, Z haritasını kılavuz olarak kullanın.' },
    { type: 'table', headers: ['Malzeme Ailesi', 'Planlama Yoğunluğu', 'Gradyan Planlama Notu'], rows: [
      ['PLA gökkuşağı', '1,24 g/cm3', 'Çoğu standart gökkuşağı makarası için iyi varsayılan'],
      ['İpek PLA', '1,18-1,24 g/cm3', 'Pigmentler ve katkı maddeleri değişir; mevcutsa marka verilerini kontrol edin'],
      ['PETG çok renkli', '1,25-1,29 g/cm3', 'Biraz daha yoğun, bu nedenle aynı gramlar daha az uzunluk kullanabilir'],
      ['Dolgulu PLA', 'Büyük ölçüde değişir', 'Ahşap, metal, taş veya sim katkı maddeleri tahmini değiştirebilir'],
    ] },
    { type: 'proscons', title: 'Ana girdi olarak dilimleyici ağırlığını kullanma', items: [
      { pro: 'Duvarlar, dolgu, destekler ve ölçek gibi gerçek baskı ayarlarını içerir.', con: 'Dilimleyicinin yoğunluk profilinin makul ölçüde doğru olmasına bağlıdır.' },
      { pro: 'G-kodundan ekstrüzyon hareketlerini manuel olarak toplamaktan daha hızlıdır.', con: 'Her katmandaki dengesiz malzeme dağılımını ortaya çıkarmaz.' },
      { pro: 'Minimum veri girişiyle farklı modeller ve dilimleyicilerle çalışır.', con: 'Prim çizgileri, temizleme ve başarısız başlangıçlar ayrıca muhasebeleştirilmelidir.' },
    ] },

    { type: 'title', text: 'Gerçek Bir Gökkuşağı Filamenti Baskısı için Hesaplayıcı Nasıl Kullanılır', level: 2 },
    { type: 'paragraph', html: 'Modeli son ayarlarla dilimleyerek başlayın. Dilimleyiciden tahmini filament ağırlığını kopyalayın, ardından malzeme yoğunluğunu ve filament çapını girin. Ölçülen veya reklamı yapılan renk döngüsü uzunluğunu girin. Son olarak, modelin basılan Z yüksekliğini girin. Hesaplayıcı, kullanılan filament, parçadaki döngü sayısı, tam renk döngüsü başına gram ve döngü başına tahmini Z mesafesini döndürür.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'Parçadaki döngüler 0,25\'in altındaysa, gökkuşağı nesnesi yerine ince bir renk tonu değişikliği bekleyin.',
      'Parçadaki döngüler yaklaşık 1,0 ise, model makara paletinde tam bir tarama gösterebilir.',
      'Parçadaki döngüler 2,0 ile 4,0 arasındaysa, nesne tekrarlanan renk bantları gösterecektir.',
      'Döngü başına Z, model yüksekliğinden büyükse, ölçeği artırın, kütle ekleyin veya daha hızlı geçişli bir makara seçin.',
      'Döngü başına Z çok küçükse, daha yumuşak gradyanlar için dolguyu azaltın veya daha uzun geçişli bir makara seçin.',
    ] },
    { type: 'summary', title: 'Hızlı planlama kuralı', items: [
      'Aynı yükseklikte daha fazla gram, gökkuşağını dikey olarak sıkıştırır.',
      'Aynı gramlarla daha fazla yükseklik, gradyanı uzatır.',
      'Daha kısa renk döngüsü uzunluğu daha fazla geçiş oluşturur.',
      'Başlangıç ofseti, gökkuşağının hangi bölümünün önce görüneceğini kontrol eder.',
    ] },
    { type: 'message', title: 'Sergileme parçaları için', ariaLabel: 'Sergileme parçası planlama tavsiyesi', html: 'Renk sınırı belirli bir özelliğe düşmesi gerektiğinde, aynı dilimleyici profiliyle küçük bir dikey test sütunu yazdırın. Ölçülen bant yüksekliklerini tahminle karşılaştırın, ardından tam baskıya başlamadan önce döngü uzunluğunu veya başlangıç ofsetini ayarlayın.' },

    { type: 'title', text: 'Gökkuşağı Makarası Renk Planlaması Hakkında Sık Sorulan Sorular', level: 2 },
    { type: 'paragraph', html: '<strong>Tam bir renk döngüsü için ne kadar gökkuşağı filamentine ihtiyacım var?</strong> Filament çapınız ve yoğunluğunuz için döngü uzunluğunu metre başına gram ile çarpın. Standart 1,75 mm PLA için bir metre yaklaşık 3 g\'dır, bu nedenle 30 m\'lik bir döngü yaklaşık 90 g\'a yakındır. Hesaplayıcı bu dönüşümü doğrudan gerçekleştirir çünkü gerçek yoğunluk ve çap cevabı değiştirir.' },
    { type: 'paragraph', html: '<strong>Baskım neden çoğunlukla tek renk kaldı?</strong> Parça muhtemelen makara döngüsünün anlamlı bir kısmından daha azını kullanmıştır. Küçük modeller, düşük dolgu ve çok uzun geçişli gökkuşağı filament, bir veya iki komşu renk içinde kalabilir. Modeli büyütmek, aynı anda birden çok nesne basmak, duvarları artırmak veya daha hızlı döngülü bir makara seçmek geçişleri daha görünür hale getirebilir.' },
    { type: 'paragraph', html: '<strong>Modelin üstünde belirli bir rengi zorlayabilir miyim?</strong> Bunu başlangıç ofseti ile tahmin edebilirsiniz, ancak kesin yerleştirme mevcut makara fazının bilinmesini gerektirir. Örneğin üst kısmın mavi olması gerekiyorsa, bir temizleme nesnesi basarak filament ilerletmeniz, bilinen görünür bir renkten başlamanız veya farklı bir model ölçeği seçmeniz gerekebilir.' },
    { type: 'diagnostic', variant: 'warning', title: 'Büyük geometri değişiklikleri Z haritası doğruluğunu azaltır', badge: 'Model şekli', html: 'Ağır bir kaide ve ince üst heykel, malzemenin çoğunu tabana yakın tüketebilir, bu nedenle gerçek geçişler orantılı bir Z tahmininin önerdiğinden daha aşağıda kümelenir. Bu modeller için hesaplayıcıyı toplam döngü sayısı için kullanın, ardından ekstrüzyon hacminin nerede yoğunlaştığını anlamak için dilimleyici katman önizlemesini inceleyin.' },
  ],
  faq: [
    {
      question: 'Gökkuşağı filament geçiş uzunluğu nedir?',
      answer: 'Makaranın tam bir renk dizisinden geçip başlangıç rengine dönmesi için gereken filament miktarıdır ve genellikle metre veya fit cinsinden ölçülür.',
    },
    {
      question: 'Hesaplayıcı neden baskı süresi yerine parça ağırlığı soruyor?',
      answer: 'Renk değişimleri, ekstrüder tarafından tüketilen filament uzunluğuna bağlıdır. Dilimleyici ağırlığı hacme ve ardından filament uzunluğuna dönüştürülebilirken, baskı süresi malzeme kullanımını doğrudan tanımlamaz.',
    },
    {
      question: 'Z geçiş haritası ne kadar doğrudur?',
      answer: 'Bir planlama tahminidir. Yükseklik boyunca oldukça eşit malzeme dağılımına sahip modeller için en doğrudur ve yoğun tabanlı, içi boş kesitli, destekli veya büyük temizleme yapılı şekiller için daha az doğrudur.',
    },
    {
      question: 'Bunu ipek PLA veya PETG gökkuşağı filament için kullanabilir miyim?',
      answer: 'Evet. Bir malzeme ön ayarı seçin veya makara veri sayfasından yoğunluğu girin. Yoğunluk, tahmini filament uzunluğunu ve dolayısıyla tahmin edilen renk döngüsü sayısını değiştirir.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Modeli dilimleyin', text: 'Son dilimleyici ayarlarını kullanın ve tahmini parça ağırlığını kopyalayın.' },
    { name: 'Makara verilerini girin', text: 'Renk döngüsü uzunluğunu, yoğunluğu, filament çapını ve varsa başlangıç ofsetini ayarlayın.' },
    { name: 'Z haritasını okuyun', text: 'Döngüler, döngü başına Z ve görünür bantları kullanarak gradyanın ince, tam veya tekrarlı olacağına karar verin.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Gökkuşağı Filamenti Geçiş Uzunluğu Hesaplayıcısı',
      description: 'Gökkuşağı filamentinin renk döngüsü kullanımını ve 3D baskının Z ekseni boyunca geçiş konumlarını tahmin edin.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Gökkuşağı filament geçiş uzunluğu nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Makaranın tam bir renk dizisinden geçip başlangıç rengine dönmesi için gereken filament miktarıdır.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '3D Baskılar için Gökkuşağı Filamenti Geçiş Uzunluğu Hesaplayıcısı',
      description: 'Gökkuşağı filamenti renk döngülerini, makara kullanımını ve dilimlenmiş bir 3D baskının Z yüksekliği boyunca gradyan geçişlerinin nerede görüneceğini tahmin edin.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Modeli dilimleyin', text: 'Son dilimleyici ayarlarını kullanın ve tahmini parça ağırlığını kopyalayın.' },
        { '@type': 'HowToStep', position: 2, name: 'Makara verilerini girin', text: 'Renk döngüsü uzunluğunu, yoğunluğu, filament çapını ve varsa başlangıç ofsetini ayarlayın.' },
        { '@type': 'HowToStep', position: 3, name: 'Z haritasını okuyun', text: 'Döngüler, döngü başına Z ve görünür bantları kullanarak gradyanın ince, tam veya tekrarlı olacağına karar verin.' }
      ],
    },
  ],
};
