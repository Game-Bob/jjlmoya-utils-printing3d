import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'duvar-perimetre-optimizasyonu',
  title: 'Duvar ve Perimetre Optimize Edici',
  description: 'Baskı duvar kalınlığının CAD modeliyle iç boşluk olmadan eşleşmesi için tam perimetre sayısını ve güvenli bir çizgi genişliğini hesaplayın.',
  ui: {
    controlsAriaLabel: 'Duvar perimetre optimize edici girdileri',
    resultsAriaLabel: 'Duvar perimetre optimize edici sonuçları',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    tooltipLabel: 'Daha fazla bilgi',
    nozzleLabel: 'Nozul çapı',
    nozzleHelp: 'Fiziksel nozul delik çapı. Güvenli çizgi genişliği bu değerin %80-120\'si ile sınırlıdır.',
    lineWidthLabel: 'Çizgi genişliği',
    lineWidthHelp: 'Dış ve iç duvarlar için dilimleyici ekstrüzyon genişliği.',
    cadThicknessLabel: 'CAD duvar kalınlığı',
    cadThicknessHelp: 'Tam perimetrelerle yeniden üretilmesi gereken tasarlanmış duvar kalınlığı.',
    commonNozzlesLabel: 'Yaygın nozul boyutları',
    infillStrategyLabel: 'Duvar doldurma stratejisi',
    perimeterFirstLabel: 'Önce perimetreler',
    solidInfillFallbackLabel: 'Katı dolgu yedeği',
    solidInfillTip: 'İpucu: daha fazla perimetre eklemek istemiyorsanız, ince duvarlarda katı dolgu veya güvenilir gap fill kullanın, böylece dilimleyici iç boşluk bırakmaz.',
    copySolidInfillNote: 'Daha az perimetre tutarsanız, ince duvar iç kısımları için katı dolgu veya doğrulanmış gap fill kullanın.',
    visualLabel: 'CAD duvar kalınlığı içinde paketlenmiş perimetreleri gösteren kesit',
    cadEnvelopeLabel: 'CAD duvar zarfı',
    lineLabel: 'Ekstrüzyon çizgisi',
    recommendedPerimetersLabel: 'Önerilen perimetreler',
    realThicknessLabel: 'Gerçek kalınlık',
    residualLabel: 'Kalan hata',
    verdictLabel: 'Hassasiyet kararı',
    exactLabel: 'Tam',
    adjustLabel: 'Çizgi genişliği ayarı gerektirir',
    impossibleLabel: 'Bu nozulla imkansız',
    adjustedWidthLabel: 'Ayarlanmış çizgi genişliği',
    noAdjustmentLabel: 'Ayar gerekmez',
    slicerBlockLabel: 'Dilimleyici yapılandırması',
    perimetersUnitLabel: 'perimetre',
    copyLabel: 'Ayarları kopyala',
    copiedLabel: 'Dilimleyici bloğu kopyalandı.',
    safeRangeLabel: 'Güvenli çizgi genişliği aralığı',
    compareLabel: 'En yakın perimetre seçenekleri',
    perimetersColumn: 'Perimetre',
    lineWidthColumn: 'Çizgi genişliği',
    realThicknessColumn: 'Gerçek kalınlık',
    errorColumn: 'Hata',
    messageExact: 'Seçilen çizgi genişliği CAD duvarına 0,05 mm içinde yaklaşır. Bu, yalnızca perimetrelerden oluşan iyi bir duvardır.',
    messageAdjust: 'Mevcut genişlik ölçülebilir bir boşluk bırakır. Duvarı tam perimetrelerle tam olarak kapatmak için ayarlanmış çizgi genişliğini kullanın.',
    messageTooThin: 'CAD duvarı nozul çapından daha incedir. Duvarı yeniden tasarlayın, daha küçük bir nozul kullanın veya yapısal olmayan tek çizgili bir özelliği kabul edin.',
    messageOutsideRange: 'Nozul çapının %80-120\'si güvenli aralığındaki hiçbir ayar bu duvarı tam olarak kapatamaz. CAD duvarını yeniden tasarlayın veya nozul boyutunu değiştirin.',
    mmUnit: 'mm',
    inchUnit: 'inç',
  },
  seo: [
    { type: 'title', text: 'Duvar Kalınlığı Neden Tam Perimetrelerle Eşleşmelidir', level: 2 },
    {
      type: 'paragraph',
      html: 'FDM dilimleyiciler, ayrık ekstrüzyon yollarından bir duvar oluşturur. 1,20 mm\'lik bir CAD duvarı sürekli bir katı talimat değildir; çizgi genişliğine, nozul çapına ve dilimleyici kurallarına bağlı olarak bir, iki, üç veya daha fazla perimetre haline gelir. Matematik kapanmazsa, dilimleyici dar bir iç boşluk bırakmak, ince bir gap fill yolu eklemek, bir bölgeyi aşırı ekstrüde etmek veya takım yolu sırasını sessizce değiştirmek arasında seçim yapmalıdır. Fonksiyonel parçalar zarar görür çünkü CAD\'de katı görünen duvar, kesit içinde zayıf bir dikiş veya tutarsız bir boncuk içerebilir.',
    },
    {
      type: 'paragraph',
      html: 'Yararlı denklem basittir: <strong>gerçek duvar kalınlığı = perimetre sayısı × çizgi genişliği</strong>. Zorluk, yazdırılabilir kalan değerleri seçmektir. Bir çizgi genişliği genellikle nozul çapının biraz altına veya üstüne hareket edebilir, ancak keyfi olamaz. Bu optimize edici, tam sayı perimetreleri arar, CAD kalınlığına karşı kalan hatayı ölçer ve yalnızca tam genişlik %80-120 nozul aralığı gibi tutucu bir aralıkta kaldığında bir çizgi genişliği ayarı önerir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'karar için kullanılan hassasiyet eşiği' },
        { value: '%80-120', label: 'nozul çapı etrafında güvenli çizgi genişliği bandı' },
        { value: 'n × genişlik', label: 'temel duvar kalınlığı denklemi' },
        { value: '2 ondalık', label: 'minimum pratik dilimleyici hassasiyeti' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perimetreler tam sayı geometrisidir',
      html: 'Bir dilimleyici 2,6 normal perimetre yazdıramaz. Bir duvar iki çizgi için çok geniş ve üç çizgi için çok darsa, gap fill davranışına veya düzeltilmiş bir CAD boyutuna ihtiyaç duyar.',
    },
    { type: 'title', text: '0,4 mm Nozul İçin CAD Duvar Kalınlığı Nasıl Seçilir', level: 2 },
    {
      type: 'paragraph',
      html: '0,4 mm\'lik bir nozul genellikle 0,40-0,48 mm civarında bir çizgi genişliği kullanır. 0,42 mm çizgi genişliği ile iki perimetre 0,84 mm, üç perimetre 1,26 mm ve dört perimetre 1,68 mm üretir. 1,20 mm\'lik tasarlanmış bir duvar CAD\'de makul görünür, ancak üç adet 0,42 mm perimetreden 0,06 mm uzaktadır. Bu yakın, ancak tam değil. Optimize edici, duvarı mükemmel şekilde kapatan ve tam nozul çapında kalan 0,40 mm\'de 3 perimetre önerebilir.',
    },
    {
      type: 'paragraph',
      html: 'Mekanik parçalar için, duvarları dilimleyiciyi onarmaya zorlamak yerine amaçlanan çizgi genişliğinin katları olarak tasarlamak genellikle daha iyidir. 0,4 mm nozul için yaygın CAD duvar hedefleri, hafif kabuklar için yaklaşık 0,8 mm, normal işlevsel duvarlar için 1,2 mm, daha güçlü muhafazalar için 1,6 mm ve yük taşıyan özellikler için 2,0 mm veya daha fazlasıdır. Kesin değerler, yalnızca nominal nozul çapını değil, dilimleyici çizgi genişliğini takip etmelidir.',
    },
    {
      type: 'table',
      headers: ['Nozul', 'Güvenli çizgi genişliği aralığı', 'İyi 2-duvar hedefleri', 'İyi 3-duvar hedefleri'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Dilimleyici profilinden geriye doğru tasarlayın',
      html: 'Geçmeli bağlantıları, kaburgaları, bossları veya muhafaza duvarlarını modellemeden önce nozul ve çizgi genişliğine karar verin. Ardından duvar boyutlarını temiz katlara ayarlayın, böylece dilimleyici kritik alanlarda gap fill yolları icat etmez.',
    },
    { type: 'title', text: 'Çizgi Genişliği Sınırları: Yüzde 80 ila 120 Neden Güvenli Bir Banttır', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir nozul, plastik bir önceki katmana bastırılıp oval bir yol haline getirildiği için deliğinden biraz daha geniş bir boncuk döşeyebilir. Ayrıca biraz daha dar bir çizgi yazdırabilir, ancak çok dar, yazıcıdan sınırlı yanal destekle kontrollü bir boncuk oluşturmasını ister. Her iki uç noktanın da ödünleşimleri vardır. Çok geniş çizgiler hotend\'i aşırı basınçlandırabilir, köşeleri bozabilir, küçük özellikleri gizleyebilir ve boyutsal doğruluğu azaltabilir. Çok dar çizgiler duvarları yetersiz doldurabilir, bağlanmayı zayıflatabilir ve ekstrüzyon tutarlılığını pressure advance ve filament çapına karşı daha hassas hale getirebilir.',
    },
    {
      type: 'paragraph',
      html: 'Burada kullanılan %80-120 aralığı kasıtlı olarak tutucudur. Birçok dilimleyici, özel modlar, vazo baskısı veya kaba nozullar için daha geniş değerlere izin verir ve deneyimli kullanıcılar test yaptıktan sonra bu aralığın ötesine geçebilir. Bu araç, önerinin belirgin bir aşırı veya yetersiz ekstrüzyona neden olmadan normal bir profile kopyalanamayacak kadar güvenli olması gereken güvenilir mekanik duvar planlamasını hedefler. Tam bir eşleşme aralık dışında bir çizgi genişliği gerektiriyorsa, araç dilimleyicinin bunu temiz bir şekilde çözebileceğini iddia etmek yerine tasarımı pratik olmadığı için bildirir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Çok dar', description: 'Boncuk, duvar kesitine yeterli malzemeyi bastıramayabilir.', points: ['Zayıf çizgiler arası bağ', 'Görünür boşluklar', 'Kırılgan ince duvarlar'] },
        { title: 'Güvenli aralık', description: 'Boncuk, fiziksel nozul davranışına yakın kalır.', highlight: true, points: ['Tahmin edilebilir ekstrüzyon', 'İyi boyutsal kontrol', 'Yeniden kullanılabilir profiller'] },
        { title: 'Çok geniş', description: 'Nozul, yolun kabul edebileceğinden daha fazla plastik itebilir.', points: ['Şişkin köşeler', 'Yüzey çıkıntıları', 'Daha yüksek geri basınç'] },
      ],
    },
    {
      type: 'message',
      title: 'Güvenli kalibre edilmiş anlamına gelmez',
      html: 'Matematiksel olarak mükemmel bir genişlik bile kalibre edilmiş bir akış hızına ihtiyaç duyar. Ekstrüzyon çarpanı yanlışsa, fiziksel duvar kumpasla hala kalın veya ince ölçülebilir.',
    },
    { type: 'title', text: 'Dilimleyici Önizlemesinde İç Duvar Boşluklarını Teşhis Etme', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir perimetre uyumsuzluğunu belirlemenin en hızlı yolu, önizlemeyi katman katman incelemektir. Dış ve iç duvarlar arasında soluk bir şerit, tek bir gezici gap fill çizgisi veya dilimleyicinin aynı özellik boyunca iki ve üç çizgi arasında geçiş yaptığı bir alan arayın. Bu desenler, CAD boyutu genellikle ekstrüzyon genişliğinin bir katı olarak değil görsel olarak seçildiği için muhafaza duvarlarında, bosslarda, klipslerde ve ince kaburgalarda yaygındır.',
    },
    {
      type: 'paragraph',
      html: 'Bir duvar boşluğu her zaman baskının dışında görünmez. Parça temiz görünebilirken iç kısmı sertliği azaltan dar bir boşluk içerebilir. Bu, vida bossları, pres geçmeli pimler, braketler, drone çerçeveleri, dişliler ve yükün duvardan geçtiği her parça için önemlidir. Boşluk perimetreler arasında yer alıyorsa, yük yolu sürekli yollar yerine zayıf bağlanmış veya eksik malzemeyi geçtiği için duvar daha kolay çatlayabilir.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap fill bir onarımdır, duvar planı değil',
      html: 'Modern dilimleyiciler ince gap fill yolları ekleyebilir, ancak bu yollar genellikle farklı hız, akış ve soğutma davranışıyla yazdırılır. Yük taşıyan geometri için, temiz bir perimetre katı daha öngörülebilirdir.',
    },
    {
      type: 'summary',
      title: 'Önizleme kontrol listesi',
      items: [
        'Yalnızca düz renk önizlemesine değil, çizgi türü veya özellik önizlemesine geçin.',
        'Duvarları deliklerde, kaburgalarda, bosslarda ve ince çıkıntılarda inceleyin.',
        'Yapısal bölgelerde gap fill yollarının görünüp görünmediğini kontrol edin.',
        'CAD duvar kalınlığını çizgi genişliğinin tam katlarıyla karşılaştırın.',
        'Ayarlanmış çizgi genişliğini yalnızca nozul güvenli aralığında kaldığında kullanın.',
      ],
    },
    { type: 'title', text: 'Sonuç Tam Olduğunda, Ayar Gerektirdiğinde veya İmkansız Olduğunda', level: 2 },
    {
      type: 'paragraph',
      html: 'Karar, 0,05 mm\'lik bir kalan eşik kullanır çünkü çoğu masaüstü FDM sistemi akış, filament çapı, termal genleşme, hareket kalibrasyonu ve ölçüm tekniğinden pratik varyasyona sahiptir. Mevcut ayarlar bu banda düşerse, araç sonucu tam olarak adlandırır. Bu, basılan her numunenin mikrona kadar mükemmel ölçüleceği anlamına gelmez; dilimleyici geometrisinin, kalan hatanın perimetre aritmetiğinden ziyade muhtemelen kalibrasyon veya malzeme davranışı olacağı kadar yakın hizalandığı anlamına gelir.',
    },
    {
      type: 'paragraph',
      html: 'Ayar gerektirir, mevcut çizgi genişliğinin daha büyük bir kalan bıraktığı, ancak aynı perimetre sayısının duvarı güvenli bir genişlikle kapatabileceği anlamına gelir. Örneğin, 0,42 mm çizgi genişliğinde 1,20 mm\'lik bir duvar, 1,26 mm\'de üç çizgi verir. 0,40 mm\'ye ayarlamak, üç çizgiyi tam olarak 1,20 mm yapar. İmkansız, duvarın nozul çapından daha ince olduğu veya gereken tam çizgi genişliğinin güvenli nozul bandının dışına düşeceği anlamına gelir. Bu durumda, dilimleyiciyi zorlamaktansa duvarı yeniden tasarlamak veya nozul boyutunu değiştirmek daha iyidir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perimetre', definition: 'Dilimleyici tarafından bir katmanın ana hattı etrafında oluşturulan duvar döngüsü.' },
        { term: 'Çizgi genişliği', definition: 'Ekstrüde edilmiş bir yolun komutlu genişliği, bazen ekstrüzyon genişliği olarak da adlandırılır.' },
        { term: 'Kalan', definition: 'CAD duvar kalınlığı ile tam perimetreler tarafından üretilen kalınlık arasındaki mutlak fark.' },
        { term: 'Gap fill', definition: 'Normal perimetrelerin temiz bir şekilde doldurmadığı kalan alanı işgal etmek için kullanılan dilimleyici tarafından oluşturulan yol.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Çizgi genişliğini ayarlama ve CAD\'i düzenleme',
      items: [
        { pro: 'Çizgi genişliği ayarı hızlıdır ve model dosyasını koruyabilir.', con: 'Dikkatlice kapsamlandırılmadığı sürece bu profili kullanan her duvarı etkiler.' },
        { pro: 'CAD düzenleme, gelecekteki baskılar için tasarım amacını açık hale getirir.', con: 'Birçok özellik zaten kısıtlanmışken daha uzun sürer.' },
        { pro: 'Nozul boyutunu değiştirmek çok ince veya çok kalın duvarları kurtarabilir.', con: 'Detay çözünürlüğünü, baskı süresini ve ekstrüzyon hacmini değiştirir.' },
      ],
    },
    { type: 'title', text: 'Çıktıyı Cura, PrusaSlicer ve Benzer Dilimleyicilerde Uygulama', level: 2 },
    {
      type: 'paragraph',
      html: 'Kopyalama bloğu kasıtlı olarak yalnızca önemli olan iki değeri içerir: perimetre sayısı ve çizgi genişliği. Cura\'da, perimetre sayısı duvar çizgi sayısına, çizgi genişliği ise profil yapısına bağlı olarak duvar çizgi genişliğine veya genel çizgi genişliğine eşlenir. PrusaSlicer ve türevlerinde, döngü sayısı için perimeters ve çizgi genişliği için extrusion width kullanın. Dilimleyicinin ayrı dış ve iç perimetre genişlikleri varsa, dilimleyicinin bunları nasıl birleştirdiğini anlamadığınız sürece optimize edilen duvar için bunları eşit tutun.',
    },
    {
      type: 'paragraph',
      html: 'Dilimleyici ayarlarını değiştirdikten sonra, yeniden dilimleyin ve aynı duvarı önizlemede inceleyin. Görsel önizleme, dar bir kalan kanal olmadan CAD zarfını dolduran beklenen sayıda yolu göstermelidir. Ardından aynı duvar kalınlığını içeren küçük bir test kuponu yazdırın ve soğuduktan sonra ölçün. Kupon sürekli olarak hatalıysa ancak önizleme doğruysa, akışı veya yatay genişlemeyi ayrı ayrı ayarlayın; bir kalibrasyon hatasını telafi etmek için perimetre sayısını kullanmayın.',
    },
    {
      type: 'card',
      title: 'Mekanik tolerans iş akışı',
      html: 'Fonksiyonel parçalar için bu sırayı kullanın: nozul seçin, güvenli çizgi genişliği seçin, duvar katlarını modelleyin, iç boşluksuz dilimleyin, bir kupon yazdırın, gerçek duvarı ölçün, ardından akış veya boyutsal kompanzasyonu ayarlayın. Geometri adımını atlamak, kalibrasyonun hareketli bir hedefi kovalamasına neden olur.',
    },
    {
      type: 'table',
      headers: ['Dilimleyici konsepti', 'Tipik alan adı', 'Ne girilecek'],
      rows: [
        ['Döngü sayısı', 'Duvar çizgi sayısı / Perimetreler', 'Önerilen tam sayı perimetre'],
        ['Ekstrüzyon yol genişliği', 'Çizgi genişliği / Ekstrüzyon genişliği', 'Önerilen veya ayarlanmış çizgi genişliği'],
        ['İnce onarım yolları', 'Gap fill / Duvarlar arası boşlukları doldur', 'Yapısal duvarlar için buna güvenmekten kaçının'],
        ['Boyutsal düzeltme', 'Yatay genişleme / XY kompanzasyonu', 'Yalnızca duvar matematiği temiz olduktan sonra ayarlayın'],
      ],
    },
    { type: 'title', text: 'Özel Durumlar: İnce Duvarlar, Kaburgalar, Bosslar ve Tolerans Özellikleri', level: 2 },
    {
      type: 'paragraph',
      html: 'Nozul çapının altındaki ince duvarlar normal perimetre duvarları değildir. Dilimleyiciler bunları ince duvar algılama, tek ekstrüzyon çizgileri veya değişken çizgi genişliği ile yazdırabilir, ancak sonuç genellikle kozmetik veya hafif yüklüdür. Yapısal bir kaburga için, kaburgayı en az iki sabit çizgi için yeterince kalın tasarlayın veya esnek bir ağ gibi davrandığını kabul edin. Vida bossları için, vida yükünün gap fill dolu bir halka yerine sürekli döngülerden geçmesi için yeterli perimetre kullanın.',
    },
    {
      type: 'paragraph',
      html: 'Tolerans özellikleri, duvar düzeltmesi delik boyutu ve uyumu ile etkileşime girebileceğinden ekstra özen gerektirir. Bir klip veya geçmeli özellik 0,9 mm duvar olarak tasarlanmışsa ve profil 0,45 mm çizgiler kullanıyorsa, iki perimetre temizdir. Aynı klip 1,0 mm ise, dilimleyici sertlik ve uyumu değiştiren küçük bir orta yol ekleyebilir. Matematiksel olarak daha temiz bir duvar, her kopya aynı sayıda sürekli yol kullandığından yay özelliklerini genellikle daha tekrarlanabilir hale getirir.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'İmkansız ince geometriyi zorlamayın',
      html: 'CAD duvarı nozul çapının altındaysa, doğru düzeltme genellikle daha küçük bir nozul, daha kalın bir özellik veya farklı bir üretim yöntemidir. Geniş bir nozulu nozul altı bir duvara zorlamak, öngörülemeyen boncuk şekli oluşturur.',
    },
    {
      type: 'list',
      items: [
        'Eğilme yükü taşıyan kaburgalar için en az iki temiz çizgi kullanın.',
        'Alan izin verdiğinde vida bossları etrafında üç veya daha fazla perimetre kullanın.',
        'Klipslerde kalan kanallardan kaçının çünkü çatlak başlatıcı haline gelirler.',
        'Pres geçmeleri, nihai parçada kullanılan aynı çizgi genişliği ile doğrulayın.',
      ],
    },
  ],
  faq: [
    {
      question: '0,4 mm nozul ile 1,2 mm\'lik bir duvar kaç perimetre kullanmalıdır?',
      answer: 'Genellikle üç perimetre. 0,40 mm çizgi genişliği ile üç perimetre tam olarak 1,20 mm\'ye eşittir. 0,42 mm çizgi genişliği ile gerçek kalınlık 1,26 mm\'dir.',
    },
    {
      question: 'Hesap makinesi çizgi genişliğini neden nozul çapının %80-120\'si ile sınırlar?',
      answer: 'Bu aralık, önerileri tutucu bir yazdırılabilir bölgede tutar. Daha geniş veya daha dar değerler özel durumlarda çalışabilir, ancak mekanik duvar planlaması için daha az güvenilirdir.',
    },
    {
      question: 'CAD kalınlığını mı yoksa dilimleyici çizgi genişliğini mi değiştirmeliyim?',
      answer: 'Ayar küçükse ve güvenli aralık içindeyse, çizgi genişliğini değiştirmek hızlıdır. Tekrarlanan üretim parçaları için, CAD\'i temiz katlara düzenlemek genellikle daha sürdürülebilirdir.',
    },
    {
      question: 'Tam bir karar, basılan parçanın tam ölçüleceğini garanti eder mi?',
      answer: 'Hayır. Dilimleyici geometrisinin temiz bir şekilde kapandığı anlamına gelir. Akış kalibrasyonu, malzeme büzülmesi, sıcaklık ve XY kompanzasyonu fiziksel ölçümü hala etkiler.',
    },
    {
      question: 'Sonuç imkansız olduğunda ne yapmalıyım?',
      answer: 'Daha küçük bir nozul kullanın, duvar kalınlığını güvenli bir çizgi genişliğinin katı olarak yeniden tasarlayın veya özelliğin yapısal olmayan bir ince duvar yolu olacağını kabul edin.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Nozul çapını girin', text: 'Yaygın bir nozul boyutu seçin veya ölçülen nozul çapını yazın.' },
    { name: 'Çizgi genişliğini ayarlayın', text: 'Dilimleyici duvar çizgi genişliğini girin; araç bunu güvenli bir nozul aralığına sınırlar.' },
    { name: 'CAD duvar kalınlığını girin', text: 'Modelden tasarlanmış duvar kalınlığını kullanın.' },
    { name: 'Dilimleyici ayarlarını kopyalayın', text: 'Önerilen perimetre sayısını ve gerekirse ayarlanmış çizgi genişliğini uygulayın.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Duvar ve Perimetre Optimize Edici',
      description: 'Tam CAD duvar kalınlığı için FDM perimetre sayısını ve güvenli çizgi genişliğini hesaplayın.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '0,4 mm nozul ile 1,2 mm\'lik bir duvar kaç perimetre kullanmalıdır?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Genellikle üç perimetre. 0,40 mm çizgi genişliği ile üç perimetre tam olarak 1,20 mm\'ye eşittir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Tam perimetreler için FDM duvar kalınlığı nasıl optimize edilir',
      step: [
        { '@type': 'HowToStep', text: 'Nozul çapını girin.' },
        { '@type': 'HowToStep', text: 'Dilimleyici çizgi genişliğini girin.' },
        { '@type': 'HowToStep', text: 'CAD duvar kalınlığını girin.' },
        { '@type': 'HowToStep', text: 'Önerilen perimetreleri ve çizgi genişliğini uygulayın.' },
      ],
    },
  ],
};
