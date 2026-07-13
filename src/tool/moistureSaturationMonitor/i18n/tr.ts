import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'filament-dehidrasyon-tahmincisi';
const title = 'Filament Dehidrasyon Tahmincisi: Termal Rejenerasyon Kılavuzu';
const description = 'Üstel adsorpsiyon kinetiği, neme maruz kalma süresi, polimer türü ve kurutma odası sıcaklığı ile higroskopik filament doygunluğunu modeller.';

const faqData = [
  {
    question: 'Filament dehidrasyon tahmincisi nem doygunluğunu nasıl hesaplar?',
    answer: 'Üstel bir doygunluk modeli kullanır: maksimum malzeme emilimi, bir eksi e üzeri eksi kinetik katsayı çarpı maruz kalma süresi ile çarpılır ve ardından ortam bağıl nemine göre ölçeklendirilir.',
  },
  {
    question: 'Nylon neden PLA\'dan daha fazla kurutmaya ihtiyaç duyar?',
    answer: 'Nylon, PLA\'ya kıyasla daha yüksek nem kapasitesine ve daha hızlı bir adsorpsiyon katsayısına sahiptir; bu nedenle aynı nem ve maruz kalma süresi altında zarar verici bir su içeriğine daha çabuk ulaşır.',
  },
  {
    question: 'Daha yüksek bir kurutma sıcaklığı her zaman daha güvenli bir kurutma anlamına mı gelir?',
    answer: 'Hayır. Yüksek sıcaklık dehidrasyonu hızlandırır, ancak her polimerin güvenli bir oda sıcaklığı aralığı vardır. Bu aralığın aşılması filamenti yumuşatabilir, makarayı deforme edebilir veya baskı davranışını değiştirebilir.',
  },
  {
    question: 'Hidroliz riski göstergesi ne anlama geliyor?',
    answer: 'Tahmini su içeriğini malzemenin kritik eşiğiyle karşılaştırır ve emilen nem, baloncuklanma, stringing (ipliklenme), zayıf katmanlar veya polimer zinciri hasarını artıracak kadar yüksek olduğunda uyarı verir.',
  },
];

const howToData = [
  { name: 'Polimeri seçin', text: 'Modelin doğru denge kapasitesini ve kinetik katsayısını yükleyebilmesi için PLA, PETG, ABS, ASA, TPU, Nylon, PC veya PVA\'yı seçin.' },
  { name: 'Depolama nemini girin', text: 'Oda, kutu veya atölye nem ölçümünü kullanarak makaranın maruz kaldığı bağıl nemi ayarlayın.' },
  { name: 'Maruz kalma süresini ayarlayın', text: 'Filamentin sızdırmaz bir kuru kutunun veya aktif kurutucunun dışında geçirdiği gün sayısını girin.' },
  { name: 'Kurutma sıcaklığını seçin', text: 'Polimer ve makara malzemesi için güvenli aralıkta bir oda sıcaklığı kullanın.' },
  { name: 'Kurutma döngüsünü başlatın', text: 'Kaydedilen kurutma zamanlayıcısını başlatın, ardından tahmini nem yükü uzaklaştırıldıkça oda görselleştirmesinin kademeli olarak boşalmasını izleyin.' },
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

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'İmparatorluk',
    materialLabel: 'Polimer',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polikarbonat',
    materialPvaLabel: 'PVA destek',
    humidityLabel: 'Bağıl nem',
    exposureLabel: 'Maruz kalma süresi',
    dryTempLabel: 'Kurutma odası',
    spoolMassLabel: 'Makara kütlesi',
    calculateLabel: 'Kurutma döngüsünü başlat',
    pauseCycleLabel: 'Döngüyü duraklat',
    resumeCycleLabel: 'Döngüyü sürdür',
    resetCycleLabel: 'Döngüyü sıfırla',
    saturationLabel: 'Nem içeriği',
    absorbedLabel: 'Emilen su',
    dryingTimeLabel: 'Kurutma döngüsü',
    remainingTimeLabel: 'Kalan süre',
    cycleProgressLabel: 'Döngü ilerlemesi',
    hydrolysisLabel: 'Hidroliz riski',
    stableLabel: 'Kararlı',
    watchLabel: 'İzleme bölgesi',
    criticalLabel: 'Kritik',
    chamberReadyLabel: 'Oda hazır',
    chamberRunningLabel: 'Kurutma döngüsü çalışıyor',
    chamberCompleteLabel: 'Nem tahliye edildi',
    curveLabel: 'Adsorpsiyon eğrisi',
    kineticLabel: 'Doygunluk kinetiği',
    equilibriumLabel: 'Denge doygunluğuna üstel yaklaşım',
    daysUnit: 'gün',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'sa',
    minutesUnit: 'dk',
    secondsUnit: 'sn',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Adsorpsiyon kinetiğini anlamak: Nylon neden PLA gibi davranmaz?', level: 2 },
    { type: 'paragraph', html: 'Ciddi bir <strong>3D filament kurutma süresi tahmincisi</strong> neme doğrusal bir çizgi gibi davranamaz. Higroskopik polimerler her gün sonsuza kadar aynı oranda su emmezler. Denge durumuna yaklaşırlar: başlangıçta hızlı, doygunluğa yakın daha yavaş og ortam bağıl nemine güçlü bir şekilde bağlı olarak. Bu yüzden bağıl nemi %70 olan bir yerde iki gün bırakılan bir makara, dört gün bırakılan bir makaranın sadece yarı neminde değildir. Maruz kalmanın ilk kısmı, özellikle Nylon, TPU, PVA ve su moleküllerini çeken polar gruplara sahip diğer malzemelerde genellikle en dik nem artışını üretir.' },
    { type: 'paragraph', html: 'Bu araç, nem içeriğini <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code> ile modeller. <code>S_max</code> polimerin denge emme kapasitesidir, <code>k</code> adsorpsiyon hızıdır, <code>t</code> maruz kalma süresidir og <code>RH</code> sonucu depolama ortamına göre ölçeklendirir. Elde edilen çıktı bir laboratuvar sertifikası değildir; aynı atölyede PLA basılabilir durumda kalırken Nylon\'un neden cızırdayıp kabarcıklar çıkardığını, stringing yaptığını ve katman gücünü kaybettiğini açıklayan bir mühendislik planlama modelidir.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'PLA için planlanan denge kapasitesi' },
      { value: '3.2%', label: 'Nylon PA için planlanan denge kapasitesi' },
      { value: '5.8%', label: 'PVA destek filamenti için planlanan denge kapasitesi' },
      { value: 'RH ölçekli', label: 'Ortam nemi doygunluk eğrisini çarpar' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Nem belirtileri proses belirtileridir', badge: 'Baskı ipucu', html: 'Çatırdama sesleri, buhar kabarcıkları, satenden mat-pürüzlüye yüzey değişiklikleri, aşırı stringing, zayıf duvarlar ve bulanık ekstrüzyon rastgele slicer sorunları değildir. Genellikle suyun erime bölgesinde aniden buhara dönüştüğünü veya hidrolizin birikimden önce polimer zincir uzunluğunu kısalttığını gösterir.' },

    { type: 'title', text: 'Üstel doygunluk modeli kurutma kararlarını nasıl değiştirir?', level: 2 },
    { type: 'paragraph', html: 'Doğrusal hesaplayıcılar genellikle bir malzeme ister ve sabit bir saat sayısı döndürür. Bu, hızlı bir hatırlatma için işe yarar ancak asıl soruyu gizler: filament gerçekte ne kadar nem emdi? %15 bağıl nemde sızdırmaz bir kuru kutuda üç hafta saklanan bir makaranın rejenerasyona ihtiyacı çok az olabilir veya hiç olmayabilir. Nemli bir garajda bir hafta sonu açıkta kalan aynı polimerin tam bir oda döngüsüne ihtiyacı olabilir. Doygunluk modellemesi, her makarayı eşit derecede ıslak kabul etmek yerine kurutma önerisini maruz kalma geçmişine bağlar.' },
    { type: 'table', headers: ['Giriş', 'Fiziksel anlam', 'Tahmine etkisi'], rows: [
      ['Bağıl nem', 'Makara etrafındaki su aktivitesi', 'Daha yüksek RH, denge hedefini ve nihai emilen yüzdeyi yükseltir.'],
      ['Maruz kalma süresi', 'Difüzyonun ilerlemesine ne kadar süre izin verildiği', 'İlk günler en önemlisidir; doygunluğa yaklaştıkça eğri yavaşlar.'],
      ['Malzeme katsayısı', 'Bir polimerin dengeye ne kadar hızlı yaklaştığı', 'Nylon ve PVA, PLA veya ASA\'dan daha hızlı hareket eder.'],
      ['Kurutma sıcaklığı', 'Desorpsiyon için mevcut termal enerji', 'Daha yüksek güvenli oda sıcaklığı tahmini döngüyü kısaltır.'],
      ['Makara kütlesi', 'Mevcut polimer miktarı', 'Yüzde malzeme durumudur; emilen gramlar makara kütlesiyle ölçeklenir.'],
    ] },
    { type: 'tip', title: 'Hava durumu uygulamasını değil, depolama ortamını tahmin edin', html: 'Filamentin fiilen durduğu depolama kutusu, yazıcı kabini veya atölye içindeki nemi kullanın. Yerel bir hava durumu raporu, ısıtılmış bir yazıcının yanındaki nemden, bir bodrum rafından veya kurutuculu sızdırmaz bir kaptan büyük ölçüde farklı olabilir.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Halka ilerlemesi doygunluğa yakın neden yavaşlar', html: 'Görsel halka denklemle aynı üstel davranışı izler. Polimer kuru olduğunda nem gradyanı güçlü olduğu için hızla dolar. Dengeye yakın gradyan zayıflar, bu nedenle görünür dolum hızı yavaşlar. Bu yavaşlama bir animasyon hilesi değil, fiziğin kendisidir.' },

    { type: 'title', text: 'Malzemeye göre filament dehidrasyon hesaplayıcı aralıkları', level: 2 },
    { type: 'paragraph', html: 'Kurutma önerileri polimere ve makaraya saygı duymalıdır. PLA aşırı ısındığında yumuşayabilir veya sünme (creep) yapabilir. PETG daha fazla ısıya dayanabilir ancak yine de muhafazakar oda kontrolünden faydalanır. Nylon normalde daha fazla su emdiği ve onu daha agresif tuttuğu için daha sıcak ve daha uzun bir döngü gerektirir. PVA neme karşı son derece hassastır ve açıkta bırakılırsa basılamaz hale gelebilir. PC, gözle görülür şekilde ıslak görünmediğinde bile kurutulduktan sonra genellikle daha iyi basar. Tahminci, genel bir <strong>filament dehidrasyon hesaplayıcısını</strong> malzemeye özel bir kılavuza dönüştürmek için bu farklılıkları kullanır.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Düşük ila orta higroskopik yanıt', description: 'PLA, ABS ve ASA genellikle daha az ve daha yavaş su emer, ancak uzun süreli nemli maruz kalmadan sonra yine de kalite kaybına uğrarlar.', points: ['Daha kısa kurutma döngüleri', 'Daha düşük denge nemi', 'Belirtiler kademeli olarak ortaya çıkabilir'] },
      { title: 'Yüksek higroskopik yanıt', description: 'Nylon, TPU, PVA ve bazı PC sınıfları daha aktif depolama ve daha disiplinli rejenerasyon gerektirir.', points: ['Daha yüksek emilen su kütlesi', 'Daha hızlı erken doygunluk', 'Daha yüksek kabarcıklanma ve zayıf katman riski'] },
    ] },
    { type: 'table', headers: ['Malzeme', 'Tipik oda hedefi', 'Planlama notu'], rows: [
      ['PLA', '40-55 C', 'Aşırı ısıdan kaçının çünkü PLA ve bazı makara göbekleri deforme olabilir.'],
      ['PETG', '55-70 C', 'Genellikle birkaç saat sonra yüzey tutarlılığını iyileştirir ve ipliklenmeyi azaltır.'],
      ['ABS / ASA', '65-85 C', 'Nylon\'dan daha düşük emilim ancak kuru depolamadan yararlanır.'],
      ['TPU', '45-60 C', 'Esnek sınıflar köpürmeye veya ipliklenmeye yetecek kadar nem emebilir.'],
      ['Nylon PA', '70-90 C', 'Genellikle kritik fonksiyonel baskılardan önce aktif kurutma gerektirir.'],
      ['PVA', '40-55 C', 'Neme duyarlı destek malzemesi; kullandıktan sonra hemen sızdırmaz şekilde saklayın.'],
    ] },
    { type: 'proscons', title: 'Sabit kurutma tablosu vs doygunluk monitörü', items: [
      { pro: 'Sabit bir tablo, yalnızca varsayılan bir döngüye ihtiyacınız olduğunda hızlıdır.', con: 'Kuru kutu makarası ile nemli açık hava makarasını ayırt edemez.' },
      { pro: 'Doygunluk modellemesi, erken maruz kalmanın neden ciddi olabileceğini açıklar.', con: 'Hala yaklaşık malzeme katsayılarına ve depolama geçmişine bağlıdır.' },
      { pro: 'Kurutma sıcaklığı girişi, gerçek oda kurulumunu yansıtır.', con: 'Filament üreticisinin sağladığı güvenli sıcaklık sınırlarının yerini almaz.' },
      { pro: 'Emilen gramlar, tam ve kısmi makaralar için sonucu somutlaştırır.', con: 'Makara kütlesi, dış sargıların çekirdekten daha ıslak olup olmadığını ortaya çıkarmaz.' },
    ] },

    { type: 'title', text: 'Hidroliz riski: ıslak filament hasarlı filament haline geldiğinde', level: 2 },
    { type: 'paragraph', html: 'Nem sadece bir baskı kalitesi sorunu değildir. Ekstrüzyon sıcaklıklarında emilen su, hassas polimerlerde hidrolize katkıda bulunabilir. Hidroliz moleküler zincirleri kırarak tokluğu, uzamayı ve güvenilirliği azaltır. Bu etki braketler, fikstürler, dişliler, kanallar ve yük taşıyan parçalarda kullanılan mühendislik malzemeleri için özellikle önemlidir. Islak bir makara hala ekstrüde edilebilir, ancak işlem sırasında polimer kimyasal olarak bozulduğu için parça daha erken kırılabilir.' },
    { type: 'glossary', items: [
      { term: 'Higroskopi', definition: 'Bir malzemenin çevredeki havadan su çekme ve tutma eğilimi.' },
      { term: 'Denge nemi', definition: 'Belirli bir nemde yeterli süreden sonra bir polimerin yaklaştığı nem içeriği.' },
      { term: 'Adsorpsiyon katsayısı', definition: 'Doygunluk eğrisinin ne kadar hızlı yükseleceğini kontrol eden basitleştirilmiş bir kinetik değer.' },
      { term: 'Desorpsiyon', definition: 'Ters işlem: ısıtmalı kurutma sırasında suyun polimeri terk etmesi.' },
      { term: 'Hidroliz', definition: 'Isı altında suyun neden olduğu, birkaç mühendislik polimerini ilgilendiren kimyasal zincir kırılması.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Kuru bir yüzey kuru bir çekirdeği garanti etmez', badge: 'Difüzyon sınırı', html: 'Filament dıştan içe doğru kurur. Kısa bir sıcak hava üflemesi yüzeyi iyileştirebilirken, yoğun bir makaranın iç sargıları nemli kalır. Büyük makaralar, karton kenarlar ve sıkıca sarılmış filament rejenerasyonu yavaşlatabilir.' },
    { type: 'message', title: 'Görsel kural', html: 'Halka temiz maviden mat gri-mavi bir duruma geçtiğinde, araç normal nem yönetiminden hidroliz izleme bölgesine geçişi işaret eder. Burası, kurutmanın sadece kozmetik bir temizlik değil, kalite kontrolün bir parçası haline geldiği noktadır.' },

    { type: 'title', text: 'Güvenilir bir filament kurutma iş akışı oluşturmak', level: 2 },
    { type: 'paragraph', html: 'Kullanışlı bir <strong>higroskopik malzeme doygunluk kılavuzu</strong> tahmin ile rutini birleştirir. Depolama nemini ölçün, makaraları açılış tarihleriyle etiketleyin, hassas polimerleri sızdırmaz kutularda tutun, kurutucuyu doymadan önce yenileyin ve mekanik performansın önemli olduğu baskılardan önce kurutun. En iyi iş akışı, tekrarlanan ıslak-kuru döngülerini önler çünkü gereksiz her ısı döngüsü malzemeyi yaşlandırabilir, makaraları bükebilir veya üretim süresini boşa harcayabilir.' },
    { type: 'list', items: [
      'Depolama geçmişi belirsiz olduğunda uzun baskılardan önce Nylon, PVA, TPU ve PC\'yi kurutun.',
      'PLA ve PETG\'yi de sızdırmaz tutun; daha düşük emilim sıfır emilim anlamına gelmez.',
      'Ekran sıcaklıkları iyimser olabileceğinden kurutucunun içinde bağımsız bir termometre kullanın.',
      'Nemli odalarda çok saatlik baskılar sırasında filamentin doğrudan kuru bir kutudan beslenmesini sağlayın.',
      'İndikatör boncukları veya nem sensörleri kutunun yükseldiğini gösterdiğinde kurutucuyu değiştirin veya yenileyin.',
      'Filamentin ve makaranın camsı geçiş veya yumuşama aralığının üzerinde kurutmaktan kaçının.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'Kurutma odası bir rejenerasyon sistemidir', html: 'Oda kararlı ısı, hava akışı ve nemin çıkması için bir yol sağlamalıdır. Havalandırma veya kurutucu olmadan sızdırmaz bir kutu ısıtmak, suyu filamentten oda havasına ve tekrar geri taşıyabilir.' },
    { type: 'summary', title: 'Pratik yorumlama kontrol listesi', items: [
      'Nem yüzdesi malzeme durumunu tanımlar; emilen gramlar makaradaki su yükünü tanımlar.',
      'Yüksek nem ve hızlı malzemeler dik bir erken doygunluk yaratır.',
      'Kurutma süresi doygunlukla artmalı ve güvenli oda sıcaklığıyla azalmalıdır.',
      'Hidroliz riski en çok yüksek sıcaklıkta ekstrüzyon ve fonksiyonel parçalar için önemlidir.',
      'Üretici veri sayfası her türlü genel kurutma tahmininden önce gelir.'
    ] },

    { type: 'title', text: 'SEO yanıtı: 3D yazıcı filamenti ne kadar süre kurutulmalı?', level: 2 },
    { type: 'paragraph', html: 'Doğru kurutma süresi malzemeye, neme maruz kalma geçmişine, makara kütlesine ve oda sıcaklığına bağlıdır. PLA orta derecede maruz kalmadan sonra sadece birkaç saate ihtiyaç duyabilir, PETG ve TPU genellikle daha uzun süreye ihtiyaç duyar ve Nylon veya PVA nemli depolamadan sonra önemli bir rejenerasyon döngüsü gerektirebilir. Güçlü bir <strong>3D baskıda nem içeriği</strong> iş akışı önce emilen suyu tahmin eder, ardından güvenli bir kurutucu sıcaklığı ve desorpsiyon için yeterli süreyi seçer. Bu, her polimere tek bir evrensel sayı uygulamaktan daha güvenilirdir.', },
    { type: 'diagnostic', variant: 'success', title: 'Bu monitör için en iyi kullanım durumu', badge: 'Mühendislik uçuş öncesi', html: 'Tahminciyi kritik baskılardan, üretim partilerinden, pahalı mühendislik polimerlerinden veya başarısız bir yüzeyin, kırılgan katmanın veya yetersiz mukavemetteki bir parçanın kurutma döngüsünden daha pahalıya mal olacağı herhangi bir işten önce kullanın.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
