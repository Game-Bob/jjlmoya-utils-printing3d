import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'baski-yatagi-termal-atalet-stabilizasyon-hesaplayici',
  title: 'Baskı Yatağı Termal Atalet Stabilizasyon Hesaplayıcı',
  description: 'Plaka malzemesi, kalınlık, hedef sıcaklık, ısıtıcı gücü ve yatak boyutunu kullanarak, ısıtmalı bir 3D yazıcı yatağının ayar noktasına ulaştıktan sonra ne kadar dinlenmeye bırakılması gerektiğini tahmin edin.',
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    materialLabel: 'Plaka malzemesi',
    borosilicateGlassLabel: 'Borosilikat cam',
    peiSpringSteelLabel: 'PEI yay çeliği',
    aluminumLabel: 'Alüminyum işleme plakası',
    thicknessLabel: 'Plaka kalınlığı',
    targetTemperatureLabel: 'Hedef yatak sıcaklığı',
    heaterPowerLabel: 'Isıtıcı gücü',
    bedSizeLabel: 'Isıtılan alan',
    presetsLabel: 'Hazır ayarlar',
    enderPresetLabel: 'Cam 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Alüminyum 350',
    recommendedDelayLabel: 'Baskı başlangıç gecikmesi',
    delayMarkerLabel: 'Gecikme',
    warmupTimeLabel: 'İdeal ısınma',
    plateMassLabel: 'Plaka kütlesi',
    energyStoredLabel: 'Depolanan ısı',
    conductionLagLabel: 'Plaka içi gecikme',
    conductivityLabel: 'İletkenlik',
    readinessLabel: 'Hazırlık',
    readinessQuick: 'hızlı ıslatma',
    readinessBalanced: 'normal ıslatma',
    readinessSlow: 'uzun ıslatma',
    controlsAriaLabel: 'Isıtmalı yatak termal atalet girdileri',
    resultsAriaLabel: 'Isıtmalı yatak stabilizasyon sonuçları',
    copyButton: 'Yatak gecikmesini kopyala',
    copiedButton: 'Kopyalandı',
    copiedSummaryTemplate: 'Yatak stabilizasyon tahmini: ayar noktasından sonra {delay} sn ({minutes} dk) bekle; ideal ısınma yaklaşık {warmup} dk, hazırlık {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 'sn',
    minutesUnit: 'dk',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Isıtmalı Bir Yatağın Ayar Noktasına Ulaştıktan Sonra Neden Stabilizasyona İhtiyacı Vardır', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir yazıcı ekranı genellikle termistörün yakınında ölçülen sıcaklığı gösterir, üst baskı yüzeyinin tam sıcaklığını değil. Birçok makinede termistör ısıtıcının altına yapıştırılır, yatak taşıyıcısına gömülür veya ilk katmanın başladığı alandan uzağa yerleştirilir. Kontrolör <strong>60 °C</strong> gösterirken kalın bir cam plakanın üst kısmı hala yetişmeye çalışıyor olabilir. Bu gecikme termal atalettir: plaka ısı depolar, ısıyı kalınlığı boyunca hareket ettirir ve aynı anda havaya ısı kaybeder.',
    },
    {
      type: 'paragraph',
      html: 'İlk katman bu gecikmeye olağandışı derecede duyarlıdır çünkü yapışma, polimer viskozitesine, yüzey enerjisine ve temas basıncına bağlıdır. Yüzeyi hala ısınmakta olan bir yatak, köşelerin kalkmasına, etek çizgilerinin kuru görünmesine veya mesh ve nozul yüksekliği doğru olsa bile Z ofsetinin tutarsız görünmesine neden olabilir. Yatak ayar noktasına ulaştıktan sonra hesaplanmış bir ısı ıslatma aralığı beklemek, ayar noktasını rastgele yükseltmekten genellikle daha tekrarlanabilirdir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK tipik borosilikat cam iletkenliği' },
        { value: '16', label: 'W/mK yaklaşık yay çeliği iletkenliği' },
        { value: '205', label: 'W/mK yaklaşık alüminyum iletkenliği' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gecikme bir yüzey tahminidir, PID otomatik ayarının yerine geçmez',
      html: 'PID ayarı, ısıtıcının termistörü nasıl takip ettiğini kontrol eder. Termal stabilizasyon, baskı yüzeyinin termistör kontrollü ayar noktasına yaklaşması için gereken süreyi tahmin eder. İyi ayarlanmış bir PID döngüsü bile, plaka kalın, zayıf iletken veya ısıtıcıya gevşek bağlı olduğunda bir ısı ıslatma gecikmesine ihtiyaç duyabilir.',
    },
    { type: 'title', text: 'Malzeme Seçimi Yatak Termal Ataletini Belirler', level: 2 },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı, cam, PEI yay çeliği ve alüminyum birbirinin yerine kullanılabilir termal sistemler olmadığından malzemeyi katı bir girdi olarak ele alır. Borosilikat cam düşük termal iletkenliğe ve önemli bir ısı kapasitesine sahiptir, bu nedenle üst yüzey ısıtıcı tarafının gerisinde kayda değer bir süre kalabilir. Yay çeliği camdan daha incedir ve daha iyi iletir, bu nedenle çelik yoğun olmasına rağmen genellikle daha hızlı eşitlenir. Alüminyum ısıyı son derece iyi iletir, bu nedenle dökme veya işlenmiş alüminyum yataklar daha büyük yazıcılarda tercih edilir, ancak kalın bir alüminyum plaka yine de çok fazla enerji depolayabilir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Borosilikat cam',
          description: 'Düşük iletkenlik ve orta düzeyde ısı kapasitesi, özellikle 3-5 mm kalınlıkta en uzun yüzey gecikmesini yaratır.',
          points: ['İyi desteklendiğinde iyi düzlük', 'Yavaş yüzey tepkisi', 'Klemlere ve yerel ısıtıcı temasına duyarlı'],
        },
        {
          title: 'PEI yay çeliği',
          description: 'İnce çelik saclar daha hızlı tepki verir ve genellikle daha az dinlenme süresi gerektirir, ancak manyetik tabanlar ve yapıştırıcı katmanları temas direnci ekler.',
          highlight: true,
          points: ['Hızlı pratik ıslatma', 'Kolay yüzey değişimi', 'Mıknatıs ve yapıştırıcı yığını hala önemlidir'],
        },
        {
          title: 'Alüminyum plaka',
          description: 'Yüksek iletkenlik, ısıyı yatak boyunca hızla yayar; kalınlık ve ısıtıcı gücü ana gecikme faktörleri haline gelir.',
          points: ['Mükemmel yanal ısı yayılımı', 'Büyük yataklarda yüksek depolanmış enerji', 'Isıtıcı kapsamı eşit olduğunda en iyisi'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Baskı yüzeyi', 'Termal davranış', 'Tipik stabilizasyon sorunu', 'Pratik ilk katman tepkisi'],
      rows: [
        ['4 mm borosilikat cam', 'Kalınlık boyunca yavaş iletim', 'Yüzey termistörün gerisinde kalır', 'Prob veya baskıdan önce daha uzun bekleyin'],
        ['0,4-0,6 mm PEI yay çeliği', 'İnce iletken sac', 'Mıknatıs/yapıştırıcı arayüzü gecikmeyi kontrol eder', 'Kısa ısı ıslatma genellikle yeterlidir'],
        ['5-8 mm alüminyum', 'Hızlı iletim ancak yüksek depolanmış ısı', 'Büyük kütle dengeye ulaşmak için zaman alır', 'Büyük yataklarda sabit ısı ıslatma kullanın'],
        ['Kompozit yığınlar', 'Katman arayüzleri baskındır', 'Hava boşlukları ve yapıştırıcılar termal direnç ekler', 'Mümkünse gerçek yüzey sıcaklığını ölçün'],
      ],
    },
    {
      type: 'tip',
      title: 'Cam gecikmesini yay çeliği için kullanmayın',
      html: '4 mm borosilikat plaka için doğru olan bir gecikme, 0,5 mm PEI yay çeliği sacı için aşırı olabilir. Tersine, bir PEI sac gecikmesi cam için çok kısa olabilir ve ilk katmanı bir Z ofset sorunu gibi gösterebilir.',
    },
    { type: 'title', text: 'Kalınlık Isınma Süresini ve Yüzey Gecikmesini Nasıl Değiştirir', level: 2 },
    {
      type: 'paragraph',
      html: 'Kalınlık, sürecin iki farklı bölümünü etkiler. Birincisi, daha kalın bir plaka daha fazla kütleye sahiptir, bu nedenle ortalama sıcaklığını yükseltmek için daha fazla enerji gerekir. İkincisi, yüzey ısıtıcı tarafını takip etmeden önce ısının daha uzun bir yoldan difüze olması gerekir. Hesaplayıcı, hem ideal ısınma enerjisini hem de plaka boyunca bir difüzyon gecikmesini tahmin eder, ardından yazıcı yatağın ayar noktasına ulaştığını bildirdikten sonra bunları önerilen bir gecikmede birleştirir.',
    },
    {
      type: 'paragraph',
      html: 'Yüzey gecikmesi için ilişki doğrusal değildir. Difüzyon süresi kalınlığın karesiyle artar, bu nedenle camda 3 mm\'den 4 mm\'ye küçük bir değişiklik beklenenden daha fazla fark yaratabilir. Çok ince bir çelik sac hızla eşitlenebilir, ancak manyetik taban, yapışkan film, PEI kaplama ve sıkışmış hava gerçek aktarımı yine de yavaşlatabilir. Alüminyum yataklarda, plakanın kendisi ısıyı hızla yayar, ancak ısıtıcı kapsamı düzensizse veya plaka büyükse yatak küresel olarak kararsız kalabilir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Termal atalet', definition: 'Bir plakanın kütlesi ve ısı kapasitesi olduğu için sıcaklık değişimine direnme eğilimi.' },
        { term: 'Termal yayınım', definition: 'Sıcaklık değişikliklerinin içinde ne kadar hızlı hareket ettiğini tanımlamak için iletkenlik, yoğunluk ve ısı kapasitesini birleştiren bir malzeme özelliği.' },
        { term: 'Isı ıslatma', definition: 'Baskı yüzeyi, ısıtıcı, taşıyıcı ve yatak yığınının daha kararlı bir duruma yaklaşması için ayar noktasına ulaştıktan sonra kasıtlı bir bekleme.' },
        { term: 'Temas direnci', definition: 'Kusurlu temas, yapıştırıcı katmanları, mıknatıslar, klemler, hava boşlukları veya eğrilmiş yüzeylerin neden olduğu ek termal direnç.' },
        { term: 'Ayar noktası aşımı', definition: 'Termistör sıcaklığının stabilize olmadan önce hedefin üzerine çıktığı, genellikle yüzey sıcaklığıyla ilgisi olmayan bir kontrol olayı.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Kalınlıkla ilgili pratik kurallar',
      items: [
        'İnce PEI yay çeliği sacları, ısıtıcı ve manyetik taban ısındıktan sonra genellikle hızla stabilize olur.',
        '3 mm\'nin üzerindeki cam plakalar, ilk katman hareketleri başlamadan önce gerçek bir gecikmeyi hak eder.',
        'Büyük alüminyum plakalar, iletim mükemmel olsa bile toplam kütle nedeniyle ısı ıslatmaya ihtiyaç duyabilir.',
        'Çıkarılabilir yüzeylerin altındaki hava boşlukları hesaplamaya hakim olabilir; temas yüzeylerini temizleyin ve plakayı tutarlı bir şekilde oturtun.',
      ],
    },
    { type: 'title', text: 'Isıtıcı Gücü, Yatak Boyutu ve Depolanan Isı', level: 2 },
    {
      type: 'paragraph',
      html: 'Isıtıcı gücü, enerjinin yatak yığınına ne kadar hızlı girebileceğini belirler. 235 mm cam yatağın altındaki 220 W\'lık bir ısıtıcı, 300 mm alüminyum plakanın altındaki 600 W\'lık bir silikon ısıtıcıdan çok farklı bir güç yoğunluğuna sahiptir. Hesaplayıcı, ideal ısınma süresini tahmin etmek için gücü, hedef sıcaklığı, yatak alanını ve plaka kütlesini kullanır. Ardından, termistör kontrollü sistem ilk kez hedefe ulaştıktan sonra yüzey genellikle değişmeye devam ettiği için bir stabilizasyon bileşeni uygular.',
    },
    {
      type: 'paragraph',
      html: 'Güç, zayıf ısı dağılımı için bir tedavi değildir. Güçlü bir ısıtıcı, kenarlar, klemler veya desteklenmeyen bölgeler geride kalırken termistörü hızla yükseltebilir. Büyük yazıcılar, ısıtıcı kapsamını, yalıtımı, yatak montajını, hazne sıcaklığını ve problamanın ayar noktası olayından hemen sonra başlayıp başlamadığını dikkate almalıdır. ABS, ASA, naylon ve diğer sıcak malzemeler için, sabit bir yatak ve hazne, genellikle yüksek bir sayısal yatak sıcaklığına ulaşmaktan daha önemlidir.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası termal neden', 'Denenecek ayar'],
      rows: [
        ['İlk etek çizgileri mat veya neredeyse hiç yapışmıyor', 'Yüzey hala termistörden daha soğuk', 'İlk katmandan önce stabilizasyon gecikmesini artırın'],
        ['Merkez yapışıyor ancak köşeler kalkıyor', 'Düzensiz yatak yüzey sıcaklığı veya kenar kayıpları', 'Yalıtım ekleyin, ısıtıcı kapsamını kontrol edin, daha uzun bekleyin'],
        ['Soğuk ve sıcak çalıştırmalar arasında prob mesh değişiyor', 'Yatak yığını hala genleşiyor veya gevşiyor', 'Sadece baskıdan önce değil, problamadan önce de ıslatma yapın'],
        ['PID grafiği sabit görünüyor ancak yapışma değişiyor', 'Denetleyici sensörde sabit, baskı yüzeyinde değil', 'Bir yüzey gecikmesi kullanın ve bir temas termometresi ile doğrulayın'],
      ],
    },
    {
      type: 'card',
      title: 'Çıktının ayar noktasından sonra bir gecikme olmasının nedeni',
      html: 'Yazıcı zaten hedef sıcaklığa yükselmeyi yönetir. Bu hesaplayıcı daha dar bir ilk katman sorusunu yanıtlar: ekran yatağın hazır olduğunu söyledikten sonra, ekstrüzyon başlamadan önce yüzey kaç ek saniye dinlenmelidir?',
    },
    { type: 'title', text: 'PID Otomatik Ayarı ve Gerçek Yatak Yüzey Stabilizasyonu', level: 2 },
    {
      type: 'paragraph',
      html: 'Yatak PID otomatik ayarı, ölçülen sensörde salınımı azalttığı için değerlidir. Kalın veya düşük iletkenlikli bir plakanın fiziğini ortadan kaldıramaz. Alt taraftaki sensör sabit görünürken bir cam yüzey hala gecikebilir. Bir yay çeliği sacı hızla sabit görünebilir, ancak soğuk bir manyetik taban ondan ısı çekmeye devam edebilir. En tekrarlanabilir iş akışı, denetleyiciyi ayarlamak, makul bir yatak gecikmesi kullanmak ve yatak yığını termal olarak tekrarlanabilir hale geldikten sonra ilk katman kalibrasyonuna başlamaktır.',
    },
    {
      type: 'proscons',
      title: 'Hemen başlamak vs stabilizasyon beklemek',
      items: [
        { pro: 'Hemen başlamak toplam baskı süresini azaltır.', con: 'İlk katman, amaçlanan sıcaklığın altındaki bir yüzeye basılabilir.' },
        { pro: 'Hesaplanmış bir gecikme, baskılar arasında tekrarlanabilirliği artırır.', con: 'Özellikle cam ve büyük alüminyum yataklarda boşta kalma süresi ekler.' },
        { pro: 'Problamadan önce ısı ıslatma, mesh kaymasını azaltabilir.', con: 'Seçilen malzeme gerektirmiyorsa çok uzun ıslatmalar enerji israfına neden olabilir.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Termal gecikmeyi aşırı sıkıştırmayla gizlemeyin',
      html: 'İlk katman yalnızca Z ofseti agresif bir şekilde düşük olduğunda yapışıyorsa, yatak yüzeyi beklenenden daha soğuk olabilir. Aşırı sıkıştırma, filiz ayağına, nozul sürtünmesine ve pürüzlü yüzey dokusuna neden olurken termal sorunu maskeleyebilir.',
    },
    {
      type: 'message',
      title: 'En iyi kalibrasyon sırası',
      html: 'Yatağı ısıtın, hesaplanan gecikmeyi bekleyin, mesh problamayı çalıştırın (yazıcınız sıcak prob yapıyorsa), ardından ilk katman yüksekliğini ayarlayın. Kararsız bir yatak yığınında Z ofsetini kalibre etmek, hiçbir mekanik ayar değiştirilmemiş olsa bile bir sonraki baskının tutarsız hissettirmesine neden olur.',
    },
    { type: 'title', text: 'Başlangıç G-kodunda Stabilizasyon Süresi Nasıl Kullanılır', level: 2 },
    {
      type: 'paragraph',
      html: 'Önerilen gecikme manuel olarak kullanılabilir veya başlangıç G-koduna eklenebilir. Basit bir iş akışı, yatağı <code>M190</code> ile ısıtmak, bir bekleme komutuyla hesaplanan saniye sayısını beklemek, ardından problamaya, nozul ısıtmaya, temizlemeye ve baskıya devam etmektir. Bazı kullanıcılar önce yatağı ısıtmayı, ıslatma sırasında hazne ısıtmasına veya nozul ön ısıtmasına başlamayı ve yatak kayması durduktan sonra problamayı tercih eder.',
    },
    {
      type: 'list',
      items: [
        'Filamentleri karşılaştırırken aynı gecikmeyi kullanın, böylece yapışma testleri adil olur.',
        'Cam, yüksek yatak sıcaklıkları, büyük plakalar veya soğuk odalar için daha uzun gecikmeler uygulayın.',
        'Manyetik taban zaten sıcakken ince yay çeliği saclar için daha kısa gecikmeler uygulayın.',
        'Mesh\'iniz sıcaklıkla değişiyorsa, ısı ıslatmadan sonra prob yapın.',
        'Plaka malzemesini, kalınlığı, ısıtıcı gücünü veya yatak boyutunu değiştirdikten sonra yeniden hesaplayın.',
      ],
    },
    {
      type: 'tip',
      title: 'Günün ilk baskısını referans durumu olarak kullanın',
      html: 'Bitmiş bir işin hemen ardından başlatılan ikinci bir baskı, sıcak bir yatak yığınıyla başlar ve daha az bekleme gerektirebilir. Kalibrasyon için gecikmeyi soğuk bir yazıcıdan değerlendirin, çünkü bu durum termal gecikmeyi ortaya çıkarma olasılığı en yüksek olan durumdur.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'İyi bir gecikme, ilk katman ayarını sıkıcı hale getirir',
      html: 'Isı ıslatma doğru olduğunda, etek şekli, çizgi parlaklığı, köşe yapışması ve mesh kompanzasyonu baskıdan baskıya daha tekrarlanabilir hale gelir. Makine soğuk başladığında her seferinde Z ofsetinin peşinden koşmak zorunda kalmamalısınız.',
    },
    { type: 'title', text: 'Gerçek Yatak Stabilizasyonunu Ölçme ve İyileştirme', level: 2 },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı kasıtlı olarak pratiktir, ancak en iyi doğrulama bir yüzey ölçümüdür. Baskı yüzeyine bantlanmış bir temas termokupl, kurban bir sacın altında ince bir prob veya bilinen emisiviteye sahip kalibre edilmiş bir kızılötesi termometre, yüzeyin stabilize olmasının ne kadar sürdüğünü ortaya çıkarabilir. Cam, PEI ve parlak metaldeki kızılötesi okumalar yanıltıcı olabilir, bu nedenle tutarlı ölçüm noktaları kullanın ve farklı yüzey kaplamalarını aynı emisiviteye sahipmiş gibi karşılaştırmaktan kaçının.',
    },
    {
      type: 'paragraph',
      html: 'Termal performans genellikle ürün yazılımını değiştirmeden iyileştirilebilir. Alt tarafı yalıtmak ısı kaybını azaltır ve ısınmayı kısaltır. Manyetik sacı ve esnek plakayı temizlemek teması iyileştirir. Zayıf klemleri değiştirmek, eğrilmiş plakaları düzleştirmek ve kısmi ısıtıcı temasından kaçınmak düzensiz sıcaklık alanlarını azaltır. Kapalı yazıcılar daha sıcak bir hazneden yararlanır, ancak hazne ısısı kayışları, portal bileşenlerini ve prob davranışını da değiştirir, bu nedenle termal rutinler doğaçlama olmaktan ziyade tekrarlanabilir olmalıdır.',
    },
    {
      type: 'table',
      headers: ['İyileştirme veya alışkanlık', 'Stabilizasyon üzerindeki etkisi', 'Dikkat'],
      rows: [
        ['Alt taraf yalıtımı', 'Daha az ısı kaybı ve daha hızlı denge', 'Kablolama ve yapıştırıcıların yatak sıcaklığına uygun olduğundan emin olun'],
        ['Daha iyi ısıtıcı kapsamı', 'Daha homojen yüzey sıcaklığı', 'Kabarcıklardan ve zayıf silikon ısıtıcı yapışmasından kaçının'],
        ['Tutarlı çıkarılabilir plaka oturması', 'Daha düşük temas direnci değişimi', 'Toz veya filament kırıntıları yerel soğuk noktalar oluşturabilir'],
        ['Islatma sonrası sıcak mesh probu', 'Mesh genişlemiş yatak şeklini yansıtır', 'Prob tutucusu ve takım kafası da termal olarak kararlı olmalıdır'],
      ],
    },
    {
      type: 'summary',
      title: 'Pratik stabilizasyon kontrol listesi',
      items: [
        'Gerçek plaka malzemesini seçin; cam, çelik ve alüminyum farklı gecikmeler gerektirir.',
        'Yazıcı model adlarına güvenmek yerine kalınlık ve ısıtıcı gücünü girin.',
        'Yatak ayar noktasını bildirdikten sonra, özellikle ilk katman kalibrasyonundan önce hesaplanan gecikmeyi kullanın.',
        'Sabit bir PID grafiğine rağmen yapışma sorunları devam ediyorsa yüzeyi ölçün.',
        'Plakaları, mıknatısları, yalıtımı, ısıtıcıları veya yatak boyutunu değiştirdikten sonra gecikmeyi yeniden kontrol edin.',
      ],
    },
  ],
  faq: [
    {
      question: 'Yatak hedef sıcaklığa ulaştıktan sonra neden beklemeli?',
      answer: 'Termistör, üst baskı yüzeyi tamamen ısınmadan ayar noktasına ulaşabilir. Beklemek, plakanın, kaplamanın, manyetik tabanın ve ısıtıcı yığınının daha kararlı bir sıcaklığa yaklaşmasını sağlar.',
    },
    {
      question: 'Cam, PEI yay çeliğinden daha fazla stabilizasyon süresi gerektirir mi?',
      answer: 'Genellikle evet. Borosilikat cam çok daha düşük termal iletkenliğe sahiptir ve genellikle daha kalındır, bu nedenle yüzey ince bir PEI kaplı yay çeliği sacından daha fazla gecikir.',
    },
    {
      question: 'Bu, PID otomatik ayarıyla aynı şey midir?',
      answer: 'Hayır. PID otomatik ayarı, ısıtıcının sensördeki davranışını kontrol eder. Bu hesaplayıcı, sensör kontrollü yatak ayar noktasına ulaştıktan sonra gerçek baskı yüzeyinin ne kadar dinlenmesi gerektiğini tahmin eder.',
    },
    {
      question: 'Isı ıslatmadan önce mi yoksa sonra mı prob yapmalıyım?',
      answer: 'Mesh\'iniz yatak ısındığında değişiyorsa, yatak stabilize olduktan sonra prob yapın. Bu, mesh\'i ilk katman sırasında kullanılan şekle daha yakın hale getirir.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Plaka malzemesini seçin', text: 'Hesaplamanın doğru iletkenlik ve ısı kapasitesini kullanması için borosilikat cam, PEI yay çeliği veya alüminyum seçin.' },
    { name: 'Fiziksel yatak yığınını girin', text: 'Plaka kalınlığı, ısıtılan alan, hedef sıcaklık ve ısıtıcı gücünü ekleyin.' },
    { name: 'Önerilen gecikmeyi okuyun', text: 'Yazıcı yatağın ayar noktasına ulaştığını bildirdikten sonra baskı başlangıç gecikmesini kullanın.' },
    { name: 'Tutarlı bir şekilde uygulayın', text: 'Tekrarlanabilir sonuçlar için prob veya ilk katman kalibrasyonundan önce aynı ısı ıslatma gecikmesini kullanın.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Baskı Yatağı Termal Atalet Stabilizasyon Hesaplayıcı',
      description: 'Plaka malzemesi, kalınlık, sıcaklık, ısıtıcı gücü ve yatak boyutundan ısıtmalı bir 3D yazıcı yatağı yüzeyinin stabilizasyon gecikmesini tahmin edin.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Yatak hedef sıcaklığa ulaştıktan sonra neden beklemeli?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Termistör, üst baskı yüzeyi tamamen ısınmadan ayar noktasına ulaşabilir, bu nedenle bir ısı ıslatma gecikmesi ilk katman tekrarlanabilirliğini artırır.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '3D yazıcı yatağı stabilizasyon gecikmesi nasıl tahmin edilir',
      step: [
        { '@type': 'HowToStep', text: 'Plaka malzemesini seçin.' },
        { '@type': 'HowToStep', text: 'Kalınlık, hedef sıcaklık, ısıtıcı gücü ve yatak boyutunu girin.' },
        { '@type': 'HowToStep', text: 'Yatak ayar noktasına ulaştıktan sonra önerilen gecikmeyi bekleyin.' },
        { '@type': 'HowToStep', text: 'Yatak yığını stabilize olduktan sonra prob yapın veya yazdırın.' },
      ],
    },
  ],
};
