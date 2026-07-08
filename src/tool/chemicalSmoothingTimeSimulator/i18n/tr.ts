import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'abs-pvb-kimyasal-duzeltme-suresi-hesaplayicisi',
  title: 'ABS Aseton ve PVB IPA Buhar Düzeltme Süresi Hesaplayıcısı',
  description: 'Oda hacmi, sıcaklık, parça hacmi ve yüzey detayına göre ABS\'nin asetonla veya PVB\'nin isopropil alkolle kimyasal buhar düzeltmesi için muhafazakar buhar maruziyeti ve kurutma süresini tahmin edin.',
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    materialLabel: 'Malzeme',
    absLabel: 'ABS + aseton',
    pvbLabel: 'PVB + IPA',
    chamberVolumeLabel: 'Buhar odası',
    chamberTemperatureLabel: 'Oda sıcaklığı',
    partVolumeLabel: 'Parça hacmi',
    surfaceDetailLabel: 'Yüzey detayı',
    fineDetailLabel: 'İnce detaylar',
    balancedDetailLabel: 'Dengeli',
    coarseDetailLabel: 'Kalın katman çizgileri',
    presetsLabel: 'Ön ayarlar',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Sergi parçası',
    enclosurePresetLabel: 'Büyük muhafaza',
    exposureLabel: 'Tahmini maruziyet',
    dryTimeLabel: 'Düzeltme sonrası kurutma',
    firstTrialLabel: 'İlk test çekişi',
    riskLabel: 'Detay riski',
    vaporMapLabel: 'Buhar yoğunluğu',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'dk',
    hoursUnit: 's',
    controlsAriaLabel: 'Kimyasal düzeltme girdileri',
    resultsAriaLabel: 'Kimyasal düzeltme sonuçları',
    recommendationGentle: 'hafif pencere',
    recommendationStandard: 'yakından izle',
    recommendationAggressive: 'yüksek detay kaybı riski',
    safetyNote: 'Bunu yalnızca muhafazakar bir planlama tahmini olarak kullanın. Çözücü buharı yanıcı ve tehlikelidir: ateşleme kaynaklarından uzak çalışın, havalandırma ve KKD kullanın ve kısa bir test maruziyetiyle başlayın.',
    copyButton: 'Düzeltme planını kopyala',
    copiedButton: 'Kopyalandı',
    copiedSummaryTemplate: 'Kimyasal düzeltme tahmini: {minutes} dk ({seconds} s) maruziyet, {trialSeconds} s\'de ilk test çekişi, yaklaşık {dryHours} s kurutma.',
  },
  seo: [
    { type: 'title', text: 'ABS Aseton Buhar Düzeltme Süresi Detayları Eritmeden Nasıl Tahmin Edilir', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS aseton buhar düzeltmesi kontrollü bir yüzey çözme işlemidir. Aseton buharı, ABS\'nin dış yüzeyini yumuşatarak görünür FDM katman çizgilerinin daha parlak bir yüzeye gevşemesini sağlar. Yararlı pencere dardır: çok az maruziyet katman çizgilerini değiştirmezken, çok fazla maruziyet kenarları yuvarlar, kabartma metinleri yumuşatır, küçük delikleri kapatır ve ince duvarların sarkmasına neden olabilir. Bu nedenle bir süre tahmini en iyi şekilde <strong>kısa test çekişleri için bir başlangıç penceresi</strong> olarak ele alınmalıdır, sabit bir tarif olarak değil.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı, düzeltme süresini güçlü bir şekilde etkileyen beş pratik değişken kullanır: polimer-çözücü çifti, oda hacmi, oda sıcaklığı, basılan parça hacmi ve yüzey detay seviyesi. Sıcaklık önemlidir çünkü buhar basıncı ve çözücü aktivitesi oda ısındıkça hızla yükselir. Parça boyutu önemlidir çünkü daha büyük parçalar daha fazla yüzey alanı ve termal kütle sunar. Detay seviyesi önemlidir çünkü minyatür bir dişli dişi, logo veya çıtçıp, basit dikdörtgen bir muhafaza üzerinde mükemmel görünen bir süre tarafından mahvolabilir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '%30-35', label: 'tahmini sürenin makul ilk test çekişi' },
        { value: 'ABS/PVB', label: 'buhar düzeltmesi için yaygın basılabilir polimerler' },
        { value: 'saat', label: 'kullanım veya montaj öncesi kurutma süresi' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Buhar düzeltmesi bir bitirme işlemidir, boyut kalibrasyon adımı değildir',
      html: 'Basılı bir parça bir rulman, diş, conta, çıtçıt veya pres geçme inserti tutacaksa, kritik alanı maskeleyin veya düzeltme işlemini kurban bir kopya üzerinde doğrulayın. Kimyasal düzeltme kenarları değiştirir ve fonksiyonel toleransları değiştirebilir.',
    },
    { type: 'title', text: 'ABS Aseton vs PVB IPA Buhar Düzeltmesi', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS genellikle asetonla düzeltilir çünkü aseton, akrilonitril bütadien stiren yüzeyi için etkili bir çözücüdür. Genellikle şeffaf veya parlak baskılar için tasarlanmış bir filament olarak satılan PVB, yaygın olarak isopropil alkolle düzeltilir. Görsel hedef benzerdir ancak süreç davranışı farklıdır. ABS asetonla, özellikle sıcak bir odada hızla parlak ve yuvarlak hale gelebilir. PVB IPA ile kademeli parlaklık gelişimi için genellikle daha affedicidir, ancak çok uzun süre maruz kalırsa yine de keskinliğini kaybedebilir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS aseton buharı ile',
          description: 'Oda sıcakken küçük metinleri, köşeleri, pimleri ve ince duvarları yumuşatma riski yüksek olan hızlı, güçlü düzeltme eylemi.',
          points: ['Görünür gövdeler ve aksesuarlar için en iyisi', 'Sıcaklığa duyarlı', 'Kapalı kullanımdan önce uzun gaz çıkışı gerektirir'],
        },
        {
          title: 'PVB IPA buharı ile',
          description: 'Daha yavaş, daha kontrol edilebilir bir düzeltme yanıtının istendiği parlak görsel parçalar ve yarı saydam baskılar için sıklıkla seçilir.',
          highlight: true,
          points: ['Sergi parçaları için kullanışlıdır', 'Kısa döngülerle detayı daha iyi koruyabilir', 'Parlatma veya paketlemeden önce iyice kurutun'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Malzeme', 'Tipik çözücü', 'Süreç karakteri', 'Ana hata modu'],
      rows: [
        ['ABS', 'Aseton', 'Hızlı yüzey yumuşatma ve güçlü parlaklık', 'Yuvarlak kenarlar, sarkan ince duvarlar, kapanmış delikler'],
        ['PVB', 'İsopropil alkol', 'Daha kademeli parlaklık ve pus azaltma', 'Yapışkan yüzey, bulaşmış doku, yumuşamış ince detay'],
        ['ASA', 'Aseton veya diğer çözücüler', 'ABS\'ye benzer aile ancak formülasyona bağlı', 'UV\'ye dayanıklı parçalar yine de keskin kenarları kaybedebilir'],
        ['PLA/PETG', 'Bu hesaplayıcı için uygun değil', 'Yaygın çözücüler ABS/PVB düzeltmesi gibi davranmaz', 'Kötü yüzey veya güvensiz çözücü deneyleri'],
      ],
    },
    {
      type: 'tip',
      title: 'Malzeme ayarını yalnızca bir plastik adı olarak değil, bir çözücü çifti olarak kullanın',
      html: 'Süreç aseton buhar düzeltmesi olduğunda ABS\'yi, IPA buhar düzeltmesi olduğunda PVB\'yi seçin. Farklı filament karışımları, katkı maddeleri, pigmentler ve tavlama geçmişi gerçek yanıtı değiştirebilir, bu nedenle son baskı için kullanılan makarayla test edin.',
    },
    { type: 'title', text: 'Oda Hacmi Kimyasal Düzeltme Süresini Neden Değiştirir', level: 2 },
    {
      type: 'paragraph',
      html: 'Oda hacmi, buhar konsantrasyonunun ne kadar hızlı oluştuğunu ve basılı parçayı ne kadar eşit şekilde sardığını etkiler. Küçük bir kavanoz hızla agresif hale gelebilir çünkü az miktarda çözücü küçük bir başlık boşluğu kaplar. Daha büyük bir oda genellikle aynı etkili buhar ortamına ulaşmak için daha fazla zamana ihtiyaç duyar, ancak çözücü kaynağı dağıtılmışsa ve parça sıvı temasının üzerine kaldırılmışsa daha tekdüze olabilir. Hesaplayıcı, oda hacmi büyüdükçe maruziyet süresini nazikçe artırır çünkü ilişki gerçektir ancak ev tipi bitirme düzeneklerinde mükemmel doğrusal değildir.',
    },
    {
      type: 'paragraph',
      html: 'Tekdüzelik, ortalama konsantrasyon kadar önemlidir. Çözücüye batırılmış bir beze, birikintiye veya ısıtılmış plakaya çok yakın yerleştirilen bir parça yönlü bir saldırı alabilir: bir yüz parlak ve yumuşak olurken karşı taraf mat kalır. Daha yüksek bir oda da, özellikle buhar kapakta yoğunlaşıp damlıyorsa, gradyanlar oluşturabilir. Bu nedenle hesaplanan bir sürenin en güvenli yorumu, planlanmış bir inceleme aralığıdır: parçayı çıkarın, ıslak parlaklığı inceleyin ve keskin özellikler akmaya başlamadan durun.',
    },
    {
      type: 'list',
      items: [
        'Parçayı çözücüye dayanıklı bir sehpa üzerine yükseltin, böylece asla sıvı çözücüye değmez.',
        'Tek taraflı aşırı maruziyeti önlemek için emici çözücü kaynaklarını model yüzeyinden uzak tutun.',
        'Buharın tüm görünür yüzeyler etrafında dolaşabileceği kadar büyük bir oda kullanın.',
        'Kapaktan damlayan yoğuşmadan kaçının; damlalar yara izleri, kraterler ve parlak noktalar oluşturur.',
        'Büyük bir odayı telafi etmek için çözücü miktarını sonsuza kadar artırmayın; konsantrasyon ve güvenlik riski birlikte artar.',
      ],
    },
    {
      type: 'card',
      title: 'Daha büyük bir oda otomatik olarak daha güvenli değildir',
      html: 'Büyük sızdırmaz hacimler daha fazla yanıcı buhar tutabilir. Daha büyük bir oda düzeltmeyi yavaşlatabilir, ancak daha büyük bir tehlikeli atmosfer de oluşturabilir. Parçaya boşluk ve eşit maruziyet sağlayan en küçük pratik odayı kullanın.',
    },
    { type: 'title', text: 'Sıcaklık, Buhar Basıncı ve Detay Kaybı', level: 2 },
    {
      type: 'paragraph',
      html: 'Sıcaklık en güçlü girdilerden biridir çünkü oda ısındıkça çözücü buharlaşması artar. Birkaç derece, yüzeyi yavaş saten düzeltmeden hızlı parlaklık ve kenar yuvarlamaya değiştirebilir. ABS etrafındaki sıcak aseton buharı özellikle affetmez: yüzey kısa bir sürede mattan ıslak görünüme ve yumuşamışa geçebilir. Hesaplayıcı, oda sıcaklığı yükseldikçe maruziyet süresini kısaltır ve sıcaklıklar normal oda sıcaklığı referansının üzerine çıktığında risk puanını yükseltir.',
    },
    {
      type: 'paragraph',
      html: 'Aktif ısıtma, birçok hobi düzeltme işleminin güvensiz hale geldiği noktadır. Aseton ve IPA buharları yanıcıdır ve doğaçlama ısıtıcılar, anahtarlar, röleler, kıvılcımlar, sıcak plakalar ve kötü sızdırmaz elektronikler ciddi yangın riski oluşturabilir. Sıcaklık kontrol edilecekse, tehlikeli buhar bağlamları için tasarlanmış ekipmanla yapılmalıdır, sızdırmaz bir kap içinde açıkta bir ısıtıcıyla değil. Çoğu kullanıcı için, kısa incelemelerle oda sıcaklığında düzeltme daha savunulabilir iş akışıdır.',
    },
    {
      type: 'table',
      headers: ['Oda koşulu', 'Beklenen davranış', 'Pratik yanıt'],
      rows: [
        ['18 °C altında serin oda', 'Yavaş buhar etkisi ve gecikmiş parlaklık', 'Daha uzun aralıklar kullanın ancak eşit olmayan yoğuşmayı kontrol edin'],
        ['Oda sıcaklığı 20-25 °C', 'Çoğu test için öngörülebilir temel', 'Hesaplayıcı tahmini ve ilk test çekişiyle başlayın'],
        ['Sıcak oda 26-32 °C', 'Daha hızlı yumuşama ve daha yüksek detay riski', 'Döngüleri kısaltın ve hassas fonksiyonel parçalardan kaçının'],
        ['Sıcak veya aktif ısıtmalı oda', 'Çok agresif buhar ortamı', 'Doğaçlama yapmayın; yangın ve aşırı maruziyet riski keskin bir şekilde artar'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Asla açık alev veya açıkta ısıtma elemanları kullanmayın',
      html: 'Aseton ve isopropil alkol buharları tutuşabilir. Düzeltme odalarını alevlerden, kıvılcımlardan, sıcak aletlerden, kıvılcım çıkaran anahtarlardan, fırçalı motorlardan, buhar hizmeti için derecelendirilmemiş ısıtıcılardan ve statiğe yatkın kullanımdan uzak tutun.',
    },
    { type: 'title', text: 'Parça Hacmi, Yüzey Alanı ve Geometri Hassasiyeti', level: 2 },
    {
      type: 'paragraph',
      html: 'Parça hacmi olarak etiketlenen girdi, genel parça boyutu için pratik bir göstergedir. Yüzey alanı için mükemmel bir ikame değildir, ancak dilimleyici istatistiklerinden tahmin etmesi kolaydır ve genellikle baskının küçük bir düğme, bir sergi heykelciği veya büyük bir muhafaza paneli olup olmadığını gösterir. Daha büyük parçalar genellikle eşit bir görsel yüzey geliştirmek için daha uzun maruziyete ihtiyaç duyar, ancak aynı zamanda eşit olmayan çözücü alımı gösterebilecek daha fazla kenar, köşe ve ince kesite sahiptir.',
    },
    {
      type: 'paragraph',
      html: 'Geometri sonuca hakim olabilir. Pürüzsüz silindirik bir vazo ve bir kafes braket aynı hacme ancak tamamen farklı düzeltme toleransına sahip olabilir. İnce kaburgalar, keskin kabartmalı yazılar, küçük delikler, iç kanallar, kırlangıç kuyrukları ve klipsler geniş düz yüzeylerden daha hızlı yumuşar. Parça kritik geometriye sahip olduğunda, katman çizgileri görünür olsa bile ince detay ayarını kullanın, ardından tek bir uzun maruziyet denemek yerine kısa döngüleri tekrarlayın.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Buhar düzeltme', definition: 'Çözücü buharının bir polimer baskının yalnızca dış yüzeyini yumuşattığı bir bitirme işlemi.' },
        { term: 'Aşırı maruziyet', definition: 'Detayları yuvarlamak, ince duvarları deforme etmek veya yapışkan bir yüzey bırakmak için yeterince uzun bir düzeltme aralığı.' },
        { term: 'Gaz çıkışı', definition: 'Düzeltme sonrası emilen çözücünün yumuşatılmış yüzeyden buharlaştığı dönem.' },
        { term: 'Yüzey detayı', definition: 'Düzeltme sırasında kaybolabilen metin, doku, delikler, çıkıntılar, klipsler ve keskin kenarlar gibi küçük geometri.' },
        { term: 'Kurban numune', definition: 'Gerçek parçayı bitirmeden önce çözücü yanıtını doğrulamak için aynı filament ve ayarlardan yapılmış küçük bir test baskısı.' },
      ],
    },
    {
      type: 'summary',
      title: 'Detay seviyesi seçimi için geometri kuralları',
      items: [
        'Metin, dişliler, küçük delikler, çıtçıtlar, dişler veya ince duvarlar için ince detay kullanın.',
        'Orta düzeyde katman çizgileri ve sıkı geçme olmayan dekoratif parçalar için dengeli kullanın.',
        'Yuvarlak kenarların kabul edilebilir olduğu basit şekiller için yalnızca kalın katman çizgileri kullanın.',
        'Yalnızca dış kabuğun parlaklığa ihtiyacı olduğunda karmaşık modelleri maskelenmiş ve maskelenmemiş bölgelere ayırın.',
      ],
    },
    { type: 'title', text: 'Hesaplayıcı Çıktılarını Okuma', level: 2 },
    {
      type: 'paragraph',
      html: 'Maruziyet çıktısı, muhafazakar bir ilk geçiş için tahmini toplam buhar süresidir. Dakika ve saniye olarak gösterilir çünkü kısa bitirme pencereleri bir zamanlayıcıyla yönetilmesi daha kolaydır. İlk test çekişi kasıtlı olarak daha kısadır, genellikle hesaplanan maruziyetin yaklaşık üçte biri kadardır. Parçayı erken çıkarmak, detay kaybı kalıcı hale gelmeden önce yüzeyin parlamaya başlayıp başlamadığını kontrol etmenizi sağlar.',
    },
    {
      type: 'paragraph',
      html: 'Kurutma süresi, baskının yakın kullanım, montaj, boyama, paketleme veya sızdırmazlık öncesinde ne kadar süre dinlenmesi gerektiğini tahmin eder. Kurutma sadece yüzeyin kuru hissetmesiyle ilgili değildir. Çözücü yumuşatılmış polimerde kalabilir ve uyum, koku, boya yapışması ve mekanik hissi etkilemeye devam edebilir. Asetonla düzeltilmiş ABS parçaları, özellikle parça kalın olduğunda veya maruziyet agresif olduğunda, IPA ile düzeltilmiş PVB parçalarından daha uzun gaz çıkışına ihtiyaç duyar.',
    },
    {
      type: 'proscons',
      title: 'Bir uzun maruziyet vs birkaç kısa döngü',
      items: [
        { pro: 'Tek bir maruziyet daha hızlı ve planlaması daha kolaydır.', con: 'İnce detaylar yumuşamadan önce çok az uyarı verir.' },
        { pro: 'Kısa döngüler saten veya yarı parlak bir yüzeyde durmayı kolaylaştırır.', con: 'Daha fazla kullanım ve tekrarlanan oda açma gerektirir.' },
        { pro: 'Birden fazla inceleme, tek seferlik bir baskıyı mahvetme şansını azaltır.', con: 'Parça döngüler arasında soğur veya kurursa yüzey biraz daha az tekdüze olabilir.' },
      ],
    },
    {
      type: 'message',
      title: 'Tahminin en iyi kullanımı',
      html: 'İlk test çekişi için bir zamanlayıcı ayarlayın, parçayı yandan gelen ışık altında inceleyin, ardından kısa artışlarla devam edin. Katman çizgileri hala zar zor görünürken durun; yüzey genellikle çıkarmadan sonra kısa bir süre daha gevşemeye devam eder.',
    },
    { type: 'title', text: 'ABS ve PVB Kimyasal Düzeltmesi için Güvenli İş Akışı', level: 2 },
    {
      type: 'paragraph',
      html: 'Güvenli bir iş akışı, çözücü açılmadan önce başlar. Aynı filament, katman yüksekliği, duvar sayısı ve soğutma ayarlarıyla küçük bir numune basın. Toz ve yağların yumuşatılmış derinin altında sıkışmaması için son parçayı temizleyin. Tepkisiz bir sehpa, zamanlayıcı, çözücüyle uyumlu eldivenler, göz koruması, havalandırma ve parçanın dokunulmadan kuruyabileceği bir yer hazırlayın. Odayı aktif olarak doldurmadığınızda çözücü kaplarını kapalı tutun.',
    },
    {
      type: 'list',
      items: [
        'Filamentin gerçekten ABS veya PVB olduğunu, PLA, PETG, PC karışımı veya bilinmeyen geri dönüştürülmüş malzeme olmadığını doğrulayın.',
        'Destekleri çıkarın ve yalnızca düzeltmeden önce zımparalayın; düzeltmeden sonra zımparalama parlaklığı eşit olmayan şekilde kesebilir.',
        'Boyutlar önemliyse delikleri, rulman yuvalarını, dişleri ve eşleşme yüzeylerini maskeleyin.',
        'İlk test çekişi süresiyle başlayın, ardından yüzey hala çok matsa kısa aralıklar ekleyin.',
        'Çözücü kokusu ve yapışkanlık gidene kadar parçayı havalandırılmış bir alanda kurutun.',
        'Çözücü bezlerini ve kontamine malzemeleri yerel tehlikeli atık kurallarına göre atın.',
      ],
    },
    {
      type: 'tip',
      title: 'Yüzey ıslakken yüzeyi değerlendirmeyin',
      html: 'Yeni maruz kalmış bir ABS veya PVB yüzeyi, kuruduktan sonra olacağından daha parlak görünebilir. Hem parlaklığı hem de geometriyi inceleyin: köşeler şişmiş görünüyorsa veya küçük metin yumuşuyorsa, katman çizgileri hala zayıf bir şekilde görünse bile durun.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Havalandırma, süreç süresinin bir parçasıdır',
      html: 'Düzeltme sonrası kurutma, buharların birikemeyeceği bir yerde yapılmalıdır. Hemen bir çekmeceye, nakliye torbasına, vitrine veya elektronik muhafazaya yerleştirilen bir parça, kokuyu ve çözücüyü beklenenden daha uzun süre tutabilir.',
    },
    { type: 'title', text: 'Yaygın Sorunlar ve Düzeltici Eylemler', level: 2 },
    {
      type: 'table',
      headers: ['Belirti', 'Olası neden', 'Sonraki ayar'],
      rows: [
        ['Katman çizgileri hala keskin', 'Maruziyet çok kısa veya oda çok soğuk', 'Süreyi ikiye katlamak yerine kısa artışlarla tekrarlayın'],
        ['Kenarlar yuvarlak veya metin bulanık', 'Detay seviyesi için aşırı maruziyet', 'İnce detay ayarı, daha düşük sıcaklık kullanın veya özellikleri maskeleyin'],
        ['Kuruduktan sonra yapışkan yüzey', 'Çok fazla çözücü emilmiş veya yetersiz havalandırma', 'Kurutma süresini uzatın ve gelecekteki maruziyeti azaltın'],
        ['Bir taraf diğerinden daha parlak', 'Eşit olmayan buhar kaynağı veya parça çözücüye çok yakın', 'Parçayı yükseltin, kaynağı dağıtın, yalnızca döngüler arasında döndürün'],
        ['Beyaz pus veya bulutlu lekeler', 'Yoğuşma, nem veya eşit olmayan buharlaşma', 'Oda doygunluğunu azaltın ve kapak damlalarından kaçının'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Bir parça yapışkan hale gelirse, hemen daha fazla buhar ekleyerek düzeltmeye çalışmayın. Daha fazla çözücü genellikle yumuşatılmış bölgeyi derinleştirir. Parçanın tamamen kurumasını bekleyin, ardından çok kısa bir takip döngüsünün riske değip değmeyeceğine karar verin. Kenarlar zaten akmışsa, şekil kurutma ile geri kazanılamaz. Kritik parçalar için daha güvenilir çözüm, ayarlanmış dilimleyici ayarlarıyla yeniden basmak ve daha kısa bir bitirme penceresi kullanmaktır.',
    },
    {
      type: 'card',
      title: 'Düzeltme süresini azaltan dilimleyici ayarları',
      html: 'Daha düşük katman yüksekliği, kararlı ekstrüzyon, kuru filament, uygun soğutma ve iyi ayarlanmış pressure advance, gerekli kimyasal iş miktarını azaltır. Kimyasal düzeltme bir baskıyı iyileştirmelidir, ciddi halkalanma, boşluklar, kabarcıklar, ıslak filament dokusu veya yetersiz ekstrüzyonu gizlememelidir.',
    },
    {
      type: 'summary',
      title: 'Pratik bitirme kontrol listesi',
      items: [
        'Tam malzeme, oda, sıcaklık, parça boyutu ve detay seviyesiyle maruziyeti tahmin edin.',
        'Son parçayı bitirmeden önce kurban bir numune veya ilk test çekişi yapın.',
        'Detay önemli olduğunda kısa döngüler kullanın ve yüzey keskinliğini kaybetmeden durun.',
        'Çözücü kokusu, yapışkanlık ve boyutsal yumuşaklığın kaybolması için yeterli kurutma süresi tanıyın.',
        'Yanıcı buhar kontrolünü isteğe bağlı bir kolaylık değil, bir güvenlik gereksinimi olarak ele alın.',
      ],
    },
  ],
  faq: [
    {
      question: 'ABS aseton buharında ne kadar kalmalı?',
      answer: 'Oda hacmi, sıcaklık, parça geometrisi ve filament formülasyonu önemli olduğu için evrensel bir süre yoktur. Hesaplayıcı tahminini başlangıç noktası olarak kullanın, ardından devam etmeden önce daha kısa olan ilk test çekişi süresinde inceleyin.',
    },
    {
      question: 'PVB isopropil alkol buharıyla düzeltilebilir mi?',
      answer: 'Evet, birçok PVB filament IPA düzeltmesi için tasarlanmıştır. Süreç genellikle ABS asetondan daha kademelidir, ancak aşırı maruziyet yüzeyi yapışkan hale getirebilir veya ince detayları bulanıklaştırabilir.',
    },
    {
      question: 'Daha sıcak bir oda düzeltme süresini azaltır mı?',
      answer: 'Evet. Daha sıcak çözücü buharı genellikle daha hızlı etki eder, ancak aynı zamanda yanıcılığı ve detay kaybı riskini artırır. Doğaçlama ısıtıcılardan kaçının ve buharı ateşleme kaynaklarından uzak tutun.',
    },
    {
      question: 'Düzeltilmiş bir parça ne kadar kurutulmalı?',
      answer: 'Dakikalar değil, saatler planlayın. Asetonla düzeltilmiş ABS, özellikle kalın parçalar veya agresif maruziyetler için, IPA ile düzeltilmiş PVB\'den daha uzun gaz çıkışına ihtiyaç duyar.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Malzeme ve çözücü çiftini seçin', text: 'Aseton buhar düzeltmesi için ABS\'yi veya IPA buhar düzeltmesi için PVB\'yi seçin.' },
    { name: 'Oda koşullarını girin', text: 'Buhar odası hacmini ve oda sıcaklığını metrik veya US birimleriyle ekleyin.' },
    { name: 'Parçayı tanımlayın', text: 'Yaklaşık parça hacmini girin ve en küçük özelliklere uygun bir yüzey detay seviyesi seçin.' },
    { name: 'İlk test çekişini kullanın', text: 'Tam tahmini maruziyeti gerçekleştirmeden önce parçayı daha kısa test süresinde inceleyin.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ABS Aseton ve PVB IPA Buhar Düzeltme Süresi Hesaplayıcısı',
      description: 'ABS aseton ve PVB IPA bitirme için kimyasal buhar düzeltme maruziyeti ve kurutma süresini tahmin edin.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'ABS aseton buharında ne kadar kalmalı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oda hacmi, sıcaklık, parça boyutu ve detay seviyesine dayalı muhafazakar bir tahmin kullanın, ardından daha kısa bir ilk test süresinde inceleyin.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'ABS veya PVB baskılar için kimyasal düzeltme süresi nasıl tahmin edilir',
      step: [
        { '@type': 'HowToStep', text: 'Asetonla ABS veya IPA ile PVB seçin.' },
        { '@type': 'HowToStep', text: 'Oda hacmini ve sıcaklığını girin.' },
        { '@type': 'HowToStep', text: 'Parça hacmini ve yüzey detay seviyesini girin.' },
        { '@type': 'HowToStep', text: 'İlk test çekişiyle başlayın ve yalnızca detay güvenli kalırsa devam edin.' },
      ],
    },
  ],
};
