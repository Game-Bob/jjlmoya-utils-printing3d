import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'katmanli-uretim-verimliligi-hesaplayicisi';
const title = 'Katmanlı Üretim Verimliliği Hesaplayıcısı';
const description =
  'Parti baskı ile sıralı baskıyı; baskı süresi, ön ısıtma süresi, geçiş mesafeleri, temizleme süresi, istatistiksel hata riski ve otomatik uygulanabilirlik önerisi ile karşılaştırın.';

const faqData = [
  {
    question: 'Parti baskı ne zaman sıralı baskıdan daha hızlıdır?',
    answer:
      'Parti baskı genellikle ön ısıtma süresi önemli olduğunda, parçalar baskı tablasına güvenli bir şekilde sığdığında, parçalar arasındaki geçiş mesafesi makul olduğunda ve geçmiş hata oranı, birleşik parti riskini kritik eşiğin altında tutacak kadar düşük olduğunda daha hızlıdır.',
  },
  {
    question: 'Sıralı baskı daha uzun sürse bile neden önerilebilir?',
    answer:
      'Sıralı baskı, tek bir hatalı parçadan kaynaklanan kaybı sınırlar. 1 - (1 - hata oranı)^N olarak hesaplanan parti riski kritik eşiği aşarsa, hesaplayıcı üretim kuyruğunu korumak için sıralı baskıyı önerir.',
  },
  {
    question: 'Hesaplayıcı dilimleyici tahminlerinin yerini alır mı?',
    answer:
      'Hayır. Bir dilimleyici tam takım yollarını, hızlanmaları, ekstrüzyon genişliklerini, soğutmayı ve çarpışma payını bilir. Bu hesaplayıcı, dilimleme öncesi üretim planlaması içindir; özellikle tek bir tam tabla işini tekrarlanan tek parça işleriyle karşılaştırırken kullanışlıdır.',
  },
  {
    question: 'Hangi hata oranını girmeliyim?',
    answer:
      'Benzer malzeme, yazıcı, geometri ve operatör koşulları için kendi atölye geçmişinizi kullanın. Henüz takip etmiyorsanız, ayarlanmış FDM üretimi için %2-5 ile başlayın ve yeni malzemeler, uzun işler veya zayıf doğrulanmış fikstürler için oranı yükseltin.',
  },
];

const howToData = [
  { name: 'Miktarı girin', text: 'Üretim partisi için gereken toplam parça sayısını ayarlayın.' },
  { name: 'Süre bilgilerini ekleyin', text: 'Tek parça baskı süresi, ön ısıtma süresi, geçiş mesafesi, hareket hızı ve temizleme veya stabilizasyon süresini girin.' },
  { name: 'Geçmiş riski ayarlayın', text: 'Karşılaştırılabilir işlerden bir hata yüzdesi kullanın ve kabul edilebilir maksimum parti riskini seçin.' },
  { name: 'Öneriyi okuyun', text: 'Toplam süre, kazanılan süre, bağıl verimlilik, geçiş yükü ve istatistiksel parti riskini karşılaştırın.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Katmanlı üretim verimliliği girdileri',
    resultsAriaLabel: 'Katmanlı üretim verimliliği sonuçları',
    visualizerAriaLabel: 'Risk ve tabla yerleşimi görselleştirmesi',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    piecesLabel: 'Parça',
    unitPrintTimeLabel: 'Parça başına baskı süresi (dk)',
    preheatTimeLabel: 'Ön ısıtma süresi (dk)',
    transitionDistanceLabel: 'Ortalama geçiş',
    travelSpeedLabel: 'Hareket hızı',
    failureRateLabel: 'Geçmiş hata oranı',
    purgeTimeLabel: 'Temizleme / stabilizasyon (dk)',
    criticalRiskLabel: 'Kritik parti riski',
    batchLabel: 'Parti baskı',
    sequentialLabel: 'Sıralı baskı',
    recommendationLabel: 'Önerilen strateji',
    savingsLabel: 'Mutlak süre tasarrufu',
    efficiencyLabel: 'Bağıl verimlilik',
    riskLabel: 'Parti hata riski',
    layoutLabel: 'Tabla yerleşim koreografisi',
    transitionLabel: 'Geçiş yükü',
    batchWinsLabel: 'Parti',
    sequentialWinsLabel: 'Sıralı',
    riskOverrideLabel: 'risk baskılaması',
    fasterLabel: 'tasarruf',
    slowerLabel: 'ek süre',
    lowRiskLabel: 'Düşük parti riski',
    moderateRiskLabel: 'Orta parti riski',
    criticalRiskStatusLabel: 'Kritik parti riski',
    minutesUnit: 'dk',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
  },
  seo: [
    { type: 'title', text: 'Parti Baskı vs Sıralı Baskı: Hesap Makinesi Neyi Ölçer', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Parti baskı ile sıralı baskı</strong> arasında seçim yapmak yalnızca tabla doluluğu meselesi değildir. Tam tabla partisi ısınma süresinden tasarruf sağlayabilir ve operatör müdahalesini azaltabilir, ancak üretim riskini tek bir uzun maruziyet penceresinde yoğunlaştırır. Sıralı baskı hazırlık yükünü tekrarlar, ancak hataları izole eder, böylece kötü bir parça tüm tabla değerini otomatik olarak etkilemez. Bu hesaplayıcı, bu dengeyi sayılara döker: toplam dakikalar, geçiş hareketleri, bağıl verimlilik ve istatistiksel parti riski.',
    },
    {
      type: 'paragraph',
      html: 'Parti formülü <code>Tparti = Tı + (N x Tp) + ((N x Dgeçiş) / (Vhareket x 60))</code> şeklindedir. Sıralı formül <code>Tsıra = N x (Tı + Tp + Ttemiz)</code> şeklindedir. Risk formülü ise <code>Riskparti = 1 - (1 - Phata)^N</code> olarak hesaplanır. Bu denklemler bilinçli olarak şeffaftır çünkü bir önerinin ardındaki mantık görünür olduğunda üretim planlaması daha kolaydır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Parti modunda ön ısıtma döngüsü', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Sıralı modda ön ısıtma döngüsü', icon: 'mdi:repeat' },
        { value: '60', label: 'Hareket süresini dakikaya çeviren saniye', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Bileşik parti hata modeli', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Tutarlı bir hata tanımı kullanın',
      html: '<p>Bir hata oranı, ancak atölye hatayı tutarlı şekilde tanımlarsa kullanışlıdır. Görsel kusurlar, boyutsal aykırı değerler, destek izleri, ilk katman hataları, makara dolaşmaları, elektrik kesintileri ve operatör müdahalelerinin dahil edilip edilmeyeceğine karar verin. Tanımları karıştırmak, risk modelini hassas gösterirken aslında gürültülü verilerle beslemenize neden olur.</p>',
    },
    { type: 'title', text: 'Parti Baskı Zaman Tasarrufu Nasıl Sağlar', level: 2 },
    {
      type: 'paragraph',
      html: 'Parti baskı, ön ısıtma süresi tek parça baskı süresine kıyasla büyük olduğunda genellikle makine kullanımında kazanır. 24 parçalık bir iş için tablayı ve nozulu bir kez ısıtmak, 23 tekrarlanan ısınma döngüsünü önleyebilir. Bir üretim çiftliği ortamında bu önemlidir çünkü ısınma ölü kapasitedir: yazıcı, satılabilir herhangi bir geometri üretilmeden önce takvim süresi, enerji ve operatör dikkati tüketir.',
    },
    {
      type: 'paragraph',
      html: 'Hareket terimi, modelin parti düzenlerinin bedelsiz olduğunu varsaymasını engeller. Her parça, nozulun tabla üzerinde geçtiği, adaları atladığı, tarama hareketleri yaptığı veya bir sonraki nesne sınırına gittiği, baskı yapılmayan bir geçiş ekleyebilir. Hesaplayıcı, bu yükü dakika cinsinden tahmin etmek için ortalama geçiş mesafesini ve hareket hızını kullanır. Bu terim kompakt düzenlerde küçük, parçalar geniş bir tablaya yayıldığında ise daha belirgindir.',
    },
    {
      type: 'table',
      headers: ['Parti değişkeni', 'Üretim anlamı', 'Önlediği planlama hatası'],
      rows: [
        ['N', 'İşteki toplam parça sayısı', 'On parçalık bir tablayı, paylaşılan ön ısıtma olmadan on ayrı iş gibi ele almak.'],
        ['Tp', 'Bir parçanın tam baskı süresi', 'Yalnızca küçük bir özelliğin katman süresini kullanmak yerine bitmiş parça tahmini kullanmak.'],
        ['Tı', 'Tabla ve nozul ısınma süresi', 'Kuyruk kapasitesini hesaplarken ekstrüzyon başlamadan önceki süreyi göz ardı etmek.'],
        ['Dgeçiş', 'Parçalar arası ortalama mesafe', 'Sıkı bir düzenin ekstrüzyonsuz hareket cezası olmadığını varsaymak.'],
        ['Vhareket', 'Kafa hareket hızı', 'Yavaş hareket profillerinin dağınık dizilimleri daha az verimli hale getirdiğini unutmak.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Parti süresi en çok ön ısıtma ve miktardan etkilenir',
      badge: 'Kapasite planlaması',
      html: '<p>Ön ısıtma 12 dakikaysa ve iş 30 parça içeriyorsa, sıralı mod ısınmayı tekrarlayarak 360 dakika harcar. Parti modu bu 12 dakikayı yalnızca bir kez harcar. Bu nedenle, küçük parçalar dikkatlice yerleştirildiğinde aynı yazıcı çok daha üretken görünebilir.</p>',
    },
    { type: 'title', text: 'Riskli İşlerde Sıralı Baskı Neden Hala Kazanır', level: 2 },
    {
      type: 'paragraph',
      html: 'Sıralı baskı, yazıcının her birim için ön ısıtma, temizleme ve stabilizasyon süresini tekrarlaması nedeniyle daha yavaş görünebilir. Avantajı sınırlamadır. Sıralı bir planda 17. parça başarısız olursa, önceki 16 parça tamamlanmış ve çıkarılmış olabilir. Partide 17. parça nozul sürtmesi, yapışma kaybı, termal sürüklenme veya malzeme sorunu nedeniyle başarısız olursa, hatalı nesne komşu parçalara çarpabilir veya operatörün tüm tablayı hurdaya ayırmasına neden olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Risk modeli, geçmiş hata olasılığını parça sayısı boyunca birleştirir. %3\'lük tek parça hata oranı, 24 parçalık bir partinin %3 risk taşıdığı anlamına gelmez. Her parçanın başarılı olma olasılığı <code>(1 - 0,03)^24</code> ve en az bir parçanın başarısız olma olasılığı bunun tümleyenidir. Bu, süreç istikrarlı olmadığında büyük partileri daha az cazip hale getirir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Parti baskı',
          description: 'Süreç istikrarlı olduğunda, parçalar güçlü yapışmaya sahip olduğunda, tabla düzeni çarpışma güvenli olduğunda ve ön ısıtma süresi programa hakim olduğunda en iyisidir.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Tek ısınma döngüsü', 'Yüksek verim', 'Daha yüksek ortak hata maruziyeti'],
        },
        {
          title: 'Sıralı baskı',
          description: 'Reddedilen parçalar pahalı olduğunda, işler uzun olduğunda, malzemeler hassas olduğunda veya kullanıcı her parçayı diğerinden ayırmak istediğinde en iyisidir.',
          icon: 'mdi:format-list-numbered',
          points: ['Hata sınırlaması', 'Daha fazla tekrarlanan yük', 'Paylaşımlı yerleşim planlaması gerektirir'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Üretim riski dengesi',
      items: [
        { pro: 'Parti baskı, boş ısınma süresini azaltır ve küçük tekrar parçalarını tek bir gözetimsiz çalıştırmada bitirebilir.', con: 'Tek bir yapışma veya ekstrüzyon hatası tüm tablayı tehdit edebilir ve uzun bir operatör kurtarma süresi gerektirebilir.' },
        { pro: 'Sıralı baskı, bir birimi doğrulamayı, çıkarmayı ve daha az birikmiş kayıpla devam etmeyi kolaylaştırır.', con: 'Tekrarlanan ısınma ve stabilizasyon, küçük parçalarda gerçek geometriden daha fazla zaman tüketebilir.' },
        { pro: 'Parti, tüm parçalar birlikte bittiği için paketlemeyi basitleştirebilir.', con: 'Uzun bir parti, her birimi aynı çevresel sapmaya, makara sorununa veya termal bozulma süresine maruz bırakır.' },
      ],
    },
    { type: 'title', text: 'Kritik Parti Riski Eşiği Seçimi', level: 2 },
    {
      type: 'paragraph',
      html: 'Kritik risk eşiği, hesaplayıcının önerisini zaman optimizasyonundan uygulanabilirlik korumasına geçirdiği çizgidir. Bir prototip atölyesi, malzeme ucuzsa ve operatör deneme yapıyorsa %45 parti riskini tolere edebilir. Müşteri parçaları gönderen bir üretim çiftliği, yaygın malzemeler için %15-25 kullanabilir ve gece işleri, pahalı mühendislik polimerleri veya yüksek işleme sonrası emek gerektiren parçalar için daha düşük eşikler belirleyebilir.',
    },
    {
      type: 'table',
      headers: ['Eşik', 'İyi kullanım senaryosu', 'Yorum'],
      rows: [
        ['%10-20', 'Pahalı parçalar, gece işleri, yüksek değerli müşteri siparişleri', 'Parti modu zaman kazandırsa bile güvenilirliği koruyun.'],
        ['%25-35', 'Bilinen malzemeyle normal ayarlanmış FDM üretimi', 'Zaman tasarrufu ve reddedilme riski arasında dengeli eşik.'],
        ['%40-60', 'İç prototipler veya ucuz fikstürler', 'Yazıcı kapasitesini daha hızlı boşaltmak için daha fazla risk kabul eder.'],
        ['%60 üzeri', 'Yalnızca keşif amaçlı', 'Zaman potansiyelini görmek için yararlı, ancak üretim uygulanabilirlik kuralı olarak zayıf.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Başlangıç hata oranınızı nasıl tahmin edersiniz',
      html: '<p>Aynı yazıcı ailesindeki son 50 ila 200 karşılaştırılabilir baskıyı inceleyin. Yeniden baskı, manuel kurtarma veya müşteri reddi gerektiren işleri sayın. Hataları toplam deneme sayısına bölün, ardından yeterli veri olduğunda malzeme ve geometriye göre ayırın. PLA braketler, PETG klipsler, ASA muhafazalar ve TPU contalar tek bir genel risk numarasını paylaşmamalıdır.</p>',
    },
    {
      type: 'summary',
      title: 'Risk eşiği kuralları',
      items: [
        'Malzeme, teslim tarihi veya işleme sonrası maliyet yüksek olduğunda eşiği düşürün.',
        'Yalnızca hatalı parçalar ucuzsa ve kuyruk agresif partilemeden fayda sağlıyorsa eşiği yükseltin.',
        'Yeni tabla yüzeyi, nozul, filament tedarikçisi veya muhafaza sıcaklığı gibi süreç değişikliklerinden sonra yeniden hesaplama yapın.',
      ],
    },
    { type: 'title', text: 'Geçiş Hareketleri, Kafa Hareketi ve Yerleşim Verimliliği', level: 2 },
    {
      type: 'paragraph',
      html: 'Geçiş hareketleri, yerinde baskı verimliliğinin gizli maliyetidir. Bir dilimleyici, özellikle birden çok nesne aynı Z yüksekliğini paylaştığında, katman başına bir parçadan diğerine birçok kez atlayabilir. Ortalama geçiş mesafesinin mükemmel olması gerekmez; yalnızca yerleşimin kompakt, orta derecede aralıklı veya tabla yüzeyine yayılmış olup olmadığını temsil etmesi yeterlidir. 25 mm ortalama geçişe sahip kompakt bir dizi, 180 mm sıçramalı tam tabla düzeninden çok farklı davranır.',
    },
    {
      type: 'paragraph',
      html: 'Hareket hızı, makinenin reklam maksimumunu değil, gerçek profili yansıtmalıdır. Hızlanma limitleri, donanım yazılımı ayarları, çevreleri geçmekten kaçınma seçenekleri, Z-atlama ve tarama stratejisi, etkili hareketi dilimleyici alanının önerdiğinden daha yavaş hale getirebilir. Bir makine kırılgan ilk katmanlar veya uzun parçalar için muhafazakar hareket kullanıyorsa, parti verimliliğini olduğundan fazla tahmin etmemek için değeri düşürün.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Parti baskı', definition: 'Baskı tablasında paylaşılan bir işte birden çok kopya veya nesnenin basılması.' },
        { term: 'Sıralı baskı', definition: 'Bir sonraki nesneye geçmeden önce her seferinde bir nesne basılması; genellikle kafa etrafında paylaşımlı yerleşim kısıtlamaları bulunur.' },
        { term: 'Geçiş mesafesi', definition: 'Parçalar veya baskı bölgeleri arasında hareket etmek için gereken ortalama ekstrüzyonsuz hareket mesafesi.' },
        { term: 'Temizleme veya stabilizasyon süresi', definition: 'Sıralı birim başına astarlama, termal dengeleme, silme veya operatör güvenli yeniden başlatma davranışı için ek süre.' },
        { term: 'Kritik risk', definition: 'Partide en az bir parçanın başarısız olma olasılığı için kabul edilebilir maksimum değer.' },
      ],
    },
    {
      type: 'message',
      title: 'Gerçek sıralı modda çarpışma payı önemlidir',
      ariaLabel: 'Sıralı baskı çarpışma uyarısı',
      html: '<p>Birçok dilimleyici, sıcak uç, fan kanalı, X gantry veya tabla klipsleri bitmiş parçalarla çarpışabileceği için sıralı baskıyı kısıtlar. Planlama için bu hesaplayıcıyı kullanın, ardından işe başlamadan önce dilimleyicide sıralı payı doğrulayın.</p>',
    },
    { type: 'title', text: 'Sonuçlar Eklemeli İmalat Optimizasyonu İçin Nasıl Kullanılır', level: 2 },
    {
      type: 'paragraph',
      html: 'Mutlak süre tasarrufu, parti modunun sıralı moda karşı kaç dakika kazandığını veya kaybettiğini gösterir. Bağıl verimlilik yüzdesi, bu farkı sıralı süreye göre normalleştirir; bu, farklı boyutlardaki işleri karşılaştırırken kullanışlıdır. 40 dakikalık bir işte 20 dakika tasarruf etmek operasyonel olarak büyük bir kazançtır; 30 saatlik bir işte 20 dakika tasarruf etmek daha yüksek riski haklı çıkarmayabilir.',
    },
    {
      type: 'paragraph',
      html: 'Öneri, hız ve uygulanabilirliği birleştirir. Parti daha hızlıysa ve risk eşiğin altındaysa, araç partiyi önerir. Parti riski eşiği aşarsa, daha yavaş olsa bile sıralı baskı önerilir. Geçiş yükü büyük veya ön ısıtma küçük olduğu için parti daha yavaşsa, sıralı baskı risk baskılamasına gerek kalmadan zaman açısından kazanır.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Üretim planı kuyruk süresi ve hata maruziyetine dayansın diye büyük bir tablayı yerleştirmeden önce hesaplayıcıyı kullanın.',
        'Kalibrasyon sonrası daha düşük hata oranıyla bir varsayımsal karşılaştırma yaparak süreç iyileştirmesinin stratejiyi nasıl değiştirdiğini görün.',
        'Sıralı işler birimler arasında temizlik, astarlama, tabla incelemesi veya operatör müdahalesi gerektirdiğinde temizleme süresini artırın.',
        'Z-atlama, çevreleri geçmekten kaçınma, kırılgan uzun parçalar veya donanım yazılımı hızlanma limitleri kullanıldığında hareket hızını düşürün.',
        'Gerçek çalıştırma sonuçlarını kaydedin ve genel bir kurala güvenmek yerine hata oranını güncelleyin.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yalnızca en hızlı saat süresi için optimize etmeyin',
      badge: 'Operasyonel maliyet',
      html: '<p>Başarısız 12 saatlik bir parti, makine ekranında görünenden daha fazlasına mal olabilir. Zaman tasarrufunun birleşik riske değip değmediğine karar verirken malzeme, elektrik, operatör teşhisi, kaybedilen kuyruk sırası, işleme sonrası gecikme ve müşteri teslim tarihi etkisini dahil edin.</p>',
    },
    { type: 'title', text: '3D Baskı Süresi Hesaplayıcı İş Akışları İçin Pratik Örnekler', level: 2 },
    {
      type: 'paragraph',
      html: '20 dakikalık tek parça baskı süresi ve 10 dakikalık ısınma süresi olan küçük PLA klipsler için parti baskı genellikle baskındır. Paylaşılan ön ısıtma işin büyük bir kısmından tasarruf sağlar ve kompakt yerleşim geçiş yükünü düşük tutar. Atölyenin %1-2 hata oranı varsa, risk orta miktarlar için kabul edilebilir kalabilir. Bu, parti baskı için klasik yüksek verimli kullanım senaryosudur.',
    },
    {
      type: 'paragraph',
      html: 'Zayıf yapışmaya sahip uzun PETG braketler için sıralı baskı daha güvenli olabilir. Parti iki saat tasarruf sağlasa bile, kıvrık bir köşe nozul çarpmasına, katman kaymasına veya komşu parçaları mahveden nesne kopmasına neden olabilir. Hesaplayıcı, cazip bir zaman tasarrufu ile üretim amacına artık uymayan bir risk profili arasındaki farkı gözler önüne serer.',
    },
    {
      type: 'paragraph',
      html: 'Yerinde baskı verimliliği kararları için aynı parçayı iki kez çalıştırın: bir kez mevcut hata oranıyla ve bir kez kalibrasyon sonrası hedef oranla. Hataları %6\'dan %2\'ye düşürmek öneriyi sıralıdan partiye çeviriyorsa, en iyi yatırım başka bir yazıcı satın almak yerine tabla temizliği, ilk katman ayarı, kuru filament, muhafaza kararlılığı veya doğrulanmış bir brim stratejisi olabilir.',
    },
    {
      type: 'summary',
      title: 'Karar kontrol listesi',
      items: [
        'Ön ısıtma büyük, yerleşim kompakt ve geçmiş hata oranı düşük olduğunda parti yapın.',
        'Her reddedilen parça pahalı, uzun, riskli veya komşulara zarar verme olasılığı yüksek olduğunda sıralı yapın.',
        'Küçük bir hata oranı düşüşü büyük parti verimliliği sağladığında süreci iyileştirin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
