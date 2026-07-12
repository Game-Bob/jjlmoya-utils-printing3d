import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { KinematicRingingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<KinematicRingingCalculatorUI> = {
  slug: '3d-yazici-hizlanma-jerk-ve-ringing-hesaplayici',
  title: '3D Yazıcı Hızlanma, Jerk ve Kare Köşe Hızı Ringing Hesaplayıcı',
  description: 'Taşıyıcı kafa kütlesi, tabla kütlesi, hedef hız, yazıcı kinematiği ve çerçeve rijitliğinden güvenli X/Y hızlanma ve jerk veya Klipper kare köşe hızı tahmini.',
  ui: {
    controlsAriaLabel: 'Kinematik ringing hesaplayıcı girdileri',
    resultsAriaLabel: 'Kinematik ringing hesaplayıcı sonuçları',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'Emparyal',
    presetLabel: 'Tipik yazıcı ön ayarları',
    enderPreset: 'Ender 3 stili',
    prusaPreset: 'Prusa MK4',
    voronV0Preset: 'Voron V0.2',
    voronPreset: 'Voron 2.4 stili',
    customPreset: 'Özel',
    massPresetLabel: 'Önerilen kütle profilleri',
    toolheadMassLabel: 'Taşıyıcı kafa kütlesi',
    bedMassLabel: 'Tabla kütlesi',
    targetSpeedLabel: 'Hedef baskı hızı',
    kinematicsLabel: 'Kinematik',
    cartesianLabel: 'Kartezyen bedslinger',
    corexyLabel: 'CoreXY',
    deltaLabel: 'Delta',
    rigidityLabel: 'Yapısal rijitlik',
    lowRigidityLabel: 'Düşük',
    mediumRigidityLabel: 'Orta',
    highRigidityLabel: 'Yüksek',
    firmwareLabel: 'Donanım yazılımı çıktısı',
    klipperLabel: 'Klipper',
    marlinLabel: 'Marlin',
    accelerationLabel: 'Önerilen hızlanma',
    transitionLabel: 'Yön değiştirme sınırı',
    effectiveMassLabel: 'Etkin hareketli kütle',
    theoreticalLabel: 'Teorik tavan',
    safetyLabel: 'Güvenlik katsayısı',
    expertModeLabel: 'Uzman güvenlik geçersiz kılma',
    manualSafetyLabel: 'Manuel güvenlik katsayısı',
    maxAccelToDecelLabel: 'max_accel_to_decel ekle',
    axisLabel: 'Sınırlayıcı hareket grubu',
    noteLabel: 'Kütle ve hızlanma notu',
    copyButton: 'Yapılandırma metnini kopyala',
    copiedButton: 'Kopyalandı',
    copyTemplate: 'Önerilen hızlanma: {accel} mm/s2\n{transitionName}: {transition} mm/s\nEtkin hareketli kütle: {mass} g\n\n{config}',
    invalidMassMessage: 'Pozitif kütle ve hız değerleri kullanın. Sıfır kütle fiziksel olarak geçerli değildir.',
    toolheadMassHelp: 'X/Y yönünde hareket eden hotend, fanlar, prob, taşıyıcı, ekstrüder, kanallar ve taşıyıcı kafa kablolarının kütlesi.',
    bedMassHelp: 'Hareketli tabla düzeneğinin kütlesi: plaka, ısıtıcı, çelik yaylı levha veya cam, klipsler ve bedslinger\'larda temsili bir baskı parçası.',
    transitionHelp: 'Klipper buna Kare Köşe Hızı der. Marlin kullanıcıları genellikle eşdeğerini jerk benzeri X/Y yön değiştirme hızı olarak ayarlar.',
    effectiveMassHelp: 'Hesaplayıcı, kinematiğinizi X/Y ringing\'ini tetikleme olasılığı en yüksek olan kütleye dönüştürür.',
    safetyHelp: 'Teorik motor-kuvvet sınırının altına uygulanan çarpan. Düşük değerler daha fazla tork ve sertlik marjı sağlar.',
    maxAccelToDecelHelp: 'İsteğe bağlı Klipper planlayıcı parametresi. Muhafazakâr bir başlangıç noktası max_accel\'in yarısıdır.',
    gUnit: 'g',
    ozUnit: 'oz',
    mmSUnit: 'mm/s',
    mmS2Unit: 'mm/s2',
    percentUnit: '%',
    noteTemplate: '{mass} g etkin hareketli kütleyle bu yapılandırma, {limitName} yükseltilmeden önce {acceleration} mm/s2 civarında kalmalıdır. Daha yüksek değerler, input shaping ve gövde rijitliği doğrulanmadıkça ringing etkisini artırabilir.',
  },
  seo: [
    { type: 'title', text: 'Bu 3D Yazıcı Ringing Hesaplayıcısı Hızlanmayı Nasıl Tahmin Eder', level: 2 },
    { type: 'paragraph', html: '3D baskıda ringing ve ghosting, mekanik titreşimin görünür yankılarıdır. Genellikle keskin bir köşe, kabartmalı harf, delik veya ani dolgu yön değişikliğinden sonra tekrarlanan dalgalanmalar olarak ortaya çıkarlar. Yazıcı bir köşeye ulaşır, hareket sistemi yön değiştirir ve kayışlarda, raylarda, çerçeve elemanlarında, motor montajlarında, taşıyıcı kafa plakalarında ve tabla desteklerinde depolanan enerji, komut çoktan ilerlemiş olmasına rağmen salınmaya devam eder. Bu hesaplayıcı, en önemli birinci dereceden değişken olan hareketli kütleyi muhafazakâr bir hızlanma önerisine dönüştürür.' },
    { type: 'paragraph', html: 'Başlangıç noktası Newton mekaniğidir: <strong>a = F / m</strong>. Bir step motor ve kayış sistemi, tork düşmeden, kayışlar esnemeden, kasnaklar kaymadan veya adım atlamadan önce yalnızca sınırlı bir yatay kuvvet oluşturabilir. Hesaplayıcı muhafazakâr bir NEMA 17 sınıfı kuvvet varsayımı kullanır, seçilen hareketli kütleyi kilograma dönüştürür, teorik bir hızlanma tavanı hesaplar ve ardından yapısal bir güvenlik katsayısı uygular. Bu katsayı, gerçek yazıcılar rijit laboratuvar eksenleri olmadığı için teorik sınırın yüzde 20 ila 30\'unu kasıtlı olarak çıkarır.' },
    {
      type: 'stats', columns: 3, items: [
        { value: '20-30%', label: 'teorik kuvvet sınırından güvenlik indirimi' },
        { value: 'a = F / m', label: 'temel kütle ve hızlanma ilişkisi' },
        { value: '3-24 mm/s', label: 'sınırlandırılmış jerk veya kare köşe hızı çıktı aralığı' },
      ]
    },
    { type: 'diagnostic', variant: 'warning', title: 'Bu muhafazakâr bir başlangıç noktasıdır, input shaper yedeği değildir', html: 'Klipper input shaping, ivmeölçer ölçümleri ve baskı tabanlı ringing kuleleri, kütle tahmininden daha yüksek hızlanmaya izin verebilir. Makul olmayan başlangıç değerlerinden kaçınmak için bu hesaplayıcıyı kullanın, ardından gerçek hareket testleriyle doğrulayın.' },

    { type: 'title', text: 'Kartezyen, CoreXY ve Delta Yazıcılarda Hangi Kütle Önemlidir', level: 2 },
    { type: 'paragraph', html: 'Bir yazıcı her eksende her zaman aynı parçaları hızlandırmaz. Kartezyen bir bedslinger\'da X ekseni genellikle taşıyıcı kafayı hareket ettirirken Y ekseni tablayı, ısıtıcıyı, manyetik levha veya cam plakayı, klipsleri, baskı parçalarını ve bazen kablo zincirini hareket ettirir. Y ekseni tabla kütlesi ringing\'de baskın olabileceğinden, bu hesaplayıcı taşıyıcı kafayı bir tabla yük faktörüyle karşılaştırır ve daha ağır olan etkin grubu sınırlayıcı hareket kütlesi olarak kullanır.' },
    { type: 'paragraph', html: 'CoreXY bir yazıcıda tabla normalde yalnızca Z yönünde hareket eder, bu nedenle X/Y ringing\'i esas olarak taşıyıcı kafa, gantry taşıyıcısı, kayış yolu ve iki motordan gelen paylaşımlı kayış kuvvetleri tarafından sürülür. Hesaplayıcı, CoreXY için taşıyıcı kafa kütlesini biraz artırır çünkü kayış yolu ve taşıyıcı yapısı, motor kuvvetini tek bir düz X kayışından daha dolaylı hale getirir. Delta yazıcıda hareketli efektör hafiftir, ancak üç kolon yön değişikliklerini paylaşır, bu nedenle hesaplayıcı efektörü birincil atalet yükü olarak ele alır ve sonucu muhafazakâr tutar.' },
    {
      type: 'table', headers: ['Kinematik türü', 'Hesaplayıcının vurguladığı kütle', 'Neden önemlidir'], rows: [
        ['Kartezyen bedslinger', 'Taşıyıcı kafa veya düşürülmüş tabla kütlesi, hangisi büyükse', 'Y tablası hotend\'den çok daha ağır olabilir ve çerçeve sallanmasını tetikleyebilir.'],
        ['CoreXY', 'Kayış paylaşım faktörü ile taşıyıcı kafa kütlesi', 'X/Y hareketleri iki motor ve gantry boyunca uzun bir kayış yolu tarafından üretilir.'],
        ['Delta', 'Delta faktörü ile efektör kütlesi', 'Efektör hafiftir, ancak yön değişiklikleri üç kolon üzerinden birleştirilir.'],
      ]
    },
    { type: 'tip', title: 'Bedslinger\'lar için yüklü tablayı ölçün', html: 'Kartezyen bir Y tablası için baskı plakasını, ısıtıcıyı, manyetik levhayı, klipsleri, PEI plakasını, kullanılıyorsa camı ve normalde büyük parçaları yüksek hızda basıyorsanız temsili bir baskıyı dahil edin. Gerçek ringing yükü, yön değiştiren kütledir.' },

    { type: 'title', text: 'Hızlanma, Jerk ve Kare Köşe Hızı İlişkilidir Ancak Aynı Değildir', level: 2 },
    { type: 'paragraph', html: 'Hızlanma, hızın zaman içinde ne kadar hızlı değiştiğini sınırlar. Dilimleyici ve donanım yazılımı ayarlarında, daha yüksek hızlanma köşelerdeki yavaşlamaları kısaltır ve dolgu, seyahat hareketleri ve kısa segmentlerin daha hızlı basılmasını sağlar. Ayrıca motorlar ve kayışlardan talep edilen kuvveti artırır. Hızlanma, hareketli kütle ve çerçeve sertliği için çok yüksek olduğunda, yazıcı adım atlayabilir, daha sert motor sesi çıkarabilir veya detaylardan sonra ringing gösterebilir.' },
    { type: 'paragraph', html: 'Klasik Marlin jerki, milimetre/saniye cinsinden ifade edilen bir yön değiştirme eşiğidir. Planlayıcının hızlanma sınırlaması uygulamadan önce izin verdiği anlık hız değişimini kontrol eder. Klipper, benzer bir köşe hızı konsepti için genellikle SCV olarak kısaltılan <code>square_corner_velocity</code> kullanır. Birimler de milimetre/saniyedir, ancak planlama modeli farklıdır. Bu nedenle bu araç, Klipper seçildiğinde değere jerk demek yerine çıktı etiketini değiştirir.' },
    {
      type: 'comparative', columns: 3, items: [
        { title: 'Hızlanma', description: 'Ana hız-kuvvet sınırı. Yazıcının hız değişimleri sırasında kütleyi ne kadar zorladığını belirler.', highlight: true, points: ['mm/s2', 'Motor kuvvet talebini artırır', 'Ringing üzerinde güçlü etki'] },
        { title: 'Marlin jerki', description: 'Marlin tarzı planlayıcılar tarafından çok küçük hız değişimlerinde yavaşlamayı önlemek için kullanılan köşe geçiş eşiği.', points: ['mm/s', 'Donanım yazılımına özgü davranış', 'Çok yüksekse köşeleri sert yapabilir'] },
        { title: 'Klipper SCV', description: 'Klipper tarafından yön değişiklikleri yoluyla köşe hızını modellemek için kullanılan kare köşe hızı.', points: ['mm/s', 'Bu araçta SCV olarak gösterilir', 'Genellikle input shaping ile ayarlanır'] },
      ]
    },
    { type: 'message', title: 'Donanım yazılımı terminolojisi önemlidir', html: 'Sonucu Klipper\'a kopyalarsanız <code>square_corner_velocity</code> kullanın. Marlin ayarlarına kopyalarsanız X jerk ve Y jerk gibi jerk ile ilgili alanları kullanın. Hesaplayıcı sayısal sonucu muhafazakâr tutar ancak seçilen donanım yazılımına göre etiketler.' },

    { type: 'title', text: 'Yapısal Rijitlik Güvenlik Katsayısını Nasıl Değiştirir', level: 2 },
    { type: 'paragraph', html: 'Aynı taşıyıcı kafa kütlesine sahip iki yazıcı, çerçeve ve hareket sisteminin farklı miktarlarda enerji depolaması nedeniyle farklı hızlanma gerektirebilir. Hafif bir konsol tabla, gevşek V-slot tekerlekler, uzun desteksiz çubuklar, ince plastik motor montajları ve esnek taşıyıcı kafa plakaları kullanılabilir hızlanmayı düşürür. Destekli alüminyum çerçeve, lineer raylar, kısa kayış açıklıkları, rijit avara istifleri ve kompakt bir taşıyıcı kafa, aynı kütle görünür ringing üretmeden önce daha fazla hızlanmaya tolerans gösterebilir.' },
    { type: 'paragraph', html: 'Rijitlik seçici bu nedenle kozmetik değildir. Düşük rijitlik en güçlü indirimi uygular, orta rijitlik tipik iyi bakılmış bir masaüstü yazıcıyı temsil eder ve yüksek rijitlik teorik kuvvet sınırının daha fazlasını kullanılabilir bırakır. Yüksek ayar bile, kayış esnemesi, hızda motor torku düşüşü, akım limitleri, mikro adımlama ve kasnak kavraması gerçek makinelerin tam ideal <code>F / m</code> sayısını güvenilir bir şekilde kullanmasını engellediği için bir indirim tutar.' },
    {
      type: 'table', headers: ['Rijitlik ayarı', 'Tipik makine durumu', 'Hesaplayıcı davranışı'], rows: [
        ['Düşük', 'Gevşek tekerlekler, uzun çerçeve, esnek tabla desteği, ağır direkt-tahrik dönüşümü', 'En muhafazakâr hızlanma ve daha düşük geçiş hızı.'],
        ['Orta', 'Makul ölçüde sıkı hareket bileşenlerine sahip stok veya ayarlı masaüstü yazıcı', 'Günlük ayarlama için dengeli indirim.'],
        ['Yüksek', 'Rijit CoreXY, destekli çerçeve, lineer raylar, kompakt taşıyıcı kafa, doğrulanmış kayışlar', 'Adım kaybı marjını korurken daha yüksek hızlanma.'],
      ]
    },
    {
      type: 'proscons', title: 'Hesaplayıcı sonucundan sonra hızlanmayı artırma', items: [
        { pro: 'Daha yüksek hızlanma, birçok kısa hareketi olan küçük parçalarda baskı süresini azaltabilir.', con: 'Aynı artış, harfler, delikler ve köşeler etrafında ringing\'i daha görünür hale getirebilir.' },
        { pro: 'Rijit bir çerçeve ve input shaping, basit bir kütle tahmininden daha yüksek limitleri destekleyebilir.', con: 'Gevşek kasnaklar, kayışlar veya tabla montajları mütevazı hızlanmayı bile kötü gösterebilir.' },
        { pro: 'Kontrollü artışlarla test yapmak, kalitenin nerede bozulmaya başladığını gösterir.', con: 'Doğrudan çok yüksek sayılara atlamak adım atlamasına ve kafa karıştırıcı artefaktlara neden olabilir.' },
      ]
    },

    { type: 'title', text: 'Sonuç Tablosunu Okuma', level: 2 },
    { type: 'paragraph', html: 'Önerilen hızlanma, donanım yazılımına veya dilimleyici profillerine kopyalanacak ana değerdir. Saniye kare başına milimetre cinsinden ifade edilir. Teorik tavan ayrı olarak gösterilir, böylece güvenlik katsayısı ve hedef hız cezası tarafından ne kadar marj kaldırıldığını görebilirsiniz. Teorik ve önerilen arasında büyük bir fark normaldir çünkü hesaplayıcı, mutlak adım kaybı sınırını bulmak için değil, baskı kalitesi ayarlaması için tasarlanmıştır.' },
    { type: 'paragraph', html: 'Etkin hareketli kütle, hesaplayıcının X/Y ringing için en önemli olduğunu düşündüğü kütledir. Bir bedslinger\'da bu, hotend\'den ziyade tabladan etkilenebilir. CoreXY veya delta\'da genellikle taşıyıcı kafa veya efektör değerine daha yakın olacaktır. Sınırlayıcı hareket grubu, kinematiğin hangi parçasının tahmini yönlendirdiğini söyler; bu, taşıyıcı kafayı hafifletmeye, tabla plakasını değiştirmeye, çerçeveyi sertleştirmeye veya donanım yazılımında yalnızca bir ekseni düşürmeye karar verirken kullanışlıdır.' },
    {
      type: 'glossary', items: [
        { term: 'Etkin hareketli kütle', definition: 'X/Y hareket sisteminin yön değişiklikleri sırasında tersine çevirmesi gereken tahmini atalet yükü.' },
        { term: 'Teorik tavan', definition: 'Güvenlik ve rijitlik indirimlerinden önce varsayılan motor kuvvetinden tahmin edilen hızlanma.' },
        { term: 'Güvenlik katsayısı', definition: 'Adım kaybını ve ringing\'i azaltmak için tork ve sertlik marjı ayıran 1.0\'ın altında bir çarpan.' },
        { term: 'Ringing riski', definition: 'Hızlanma ve kütle tarafından ima edilen kuvvet darbesine dayalı nitel bir gösterge.' },
        { term: 'SCV', definition: 'Klipper kare köşe hızı, saniyede milimetre cinsinden ifade edilen bir köşe hızı parametresidir.' },
      ]
    },
    {
      type: 'summary', title: 'Sonuç yorumlama kontrol listesi', items: [
        'Önerilen hızlanmayı ilk donanım yazılımı veya dilimleyici sınırı olarak kullanın.',
        'Klipper için SCV, Marlin tarzı yapılandırma için jerk kullanın.',
        'Etkin kütle tabla kaynaklıysa, Kartezyen bir yazıcıda önce Y hızlanmasını düşürün.',
        'Sonuç düşük geliyorsa, sayıyı basitçe yükseltmeden önce gevşek mekaniği inceleyin.',
        'Bir ringing kulesi, keskin köşe testi veya ivmeölçer input-shaper ölçümü ile doğrulayın.',
      ]
    },

    { type: 'title', text: 'Çok Fazla Hız Kaybetmeden Ghosting\'i Azaltmak İçin Pratik İş Akışı', level: 2 },
    { type: 'paragraph', html: 'Dürüst kütle değerleriyle başlayın. Hotend düzeneğini, fanları, probu, ekstrüderi, plastik koruyucuyu, kablo gerilim gidericiyi ve taşıyıcı kafa kartını tartın. Tabla için Y yönünde hareket eden her şeyi dahil edin. Tartma uygun değilse, Ender ve Voron tarzı ön ayarları makul yer tutucular olarak kullanın, ardından sonucu daha sonra iyileştirin. Ön ayarlar kasıtlı olarak sıradandır, en iyi durum pazarlama değerleri değildir.' },
    { type: 'paragraph', html: 'Hesaplayıcı sonucunu donanım yazılımı veya dilimleyici sınırlarına uygulayın, ardından hedef hızda keskin metin, dikey delikler ve kare köşeler içeren küçük bir nesne basın. Her köşeden sonra sabit mesafede tekrarlanan ringing, mekanik rezonansı gösterir. Ringing iyileşirse ancak baskı süresi kabul edilemez hale gelirse, hızlanmayı her seferinde yüzde 10 gibi küçük adımlarla artırın. Ringing önerinin altında bile güçlü kalıyorsa, kayış gevşekliği, gevşek kasnak set skrewleri, hareketli kablolar, esnek tabla yayları, aşınmış tekerlekler, ray ön yük sorunları veya hotend sallanması arayın.' },
    {
      type: 'list', items: [
        'Donanım yazılımını değiştirmeden önce taşıyıcı kafa ve tabla kütlesini ölçün veya tahmin edin.',
        'Hareketli X/Y mimarisine uyan kinematik türünü seçin.',
        'Ağır direkt-tahrik kafaları veya görünür şekilde esnek çerçeveleri olan modifiye bedslinger\'lar için düşük rijitlik kullanın.',
        'Yüksek rijitliği yalnızca kayışlar, kasnaklar, raylar ve çerçeve vidaları zaten doğrulanmışsa kullanın.',
        'Donanım yazılımı seçiciyi kullanarak oluşturulan metni Klipper veya Marlin\'e kopyalayın.',
        'Bir doğrulama modeli basın ve yalnızca yüzey parlaklığını değil, ringing mesafesi ve genliğini karşılaştırın.',
        'Köşe şişkinliği ringing ile karıştırılabileceğinden pressure advance\'i ayrıca ayarlayın.',
        'Donanım yazılımı desteklediğinde son yüksek hız kurulumu için input shaping kullanın.',
      ]
    },
    { type: 'card', title: 'Kütle azaltma neden güçlüdür', html: 'Hızlanma kuvveti kütle ile doğrudan ölçeklenir. Taşıyıcı kafadan 100 g çıkarmak, motor kuvveti eklemek veya hızlanma talebini azaltmakla aynı birinci dereceden etkiye sahip olabilir. Bu nedenle kompakt taşıyıcı kafalar, daha hafif fanlar, kısa kanallar ve uzaktan tahrikli ekstrüderler, herhangi bir donanım yazılımı hilesi uygulanmadan önce ringing davranışını iyileştirebilir.' },

    { type: 'title', text: 'Hızlanma ve Jerk Ayarlarken Sık Yapılan Hatalar', level: 2 },
    { type: 'paragraph', html: 'En yaygın hata, başka bir yazıcıdan kopyalanan tek bir sayıya göre ayar yapmaktır. Bir Voron, Ender, Prusa tarzı bedslinger, delta ve kapalı özel CoreXY\'nin tümü 150 mm/s\'de baskı yapabilir, ancak güvenli hızlanmaları birkaç kat farklılık gösterebilir. Baskı hızı tek başına hareket stresini tanımlamaz. Kısa detaylar nadiren tam hıza ulaşır, bu nedenle hızlanma ve köşe parametreleri, nominal dilimleyici hızından daha fazla yüzey kalitesini kontrol eder.' },
    { type: 'paragraph', html: 'Bir başka hata, jerk veya SCV\'yi zayıf hızlanma ayarlarını gizlemenin bir yolu olarak görmektir. Çok yüksek bir geçiş değeri köşeleri hareket halinde daha keskin gösterebilir, ancak aynı zamanda çerçeveye ani yön değişiklikleri enjekte edebilir ve yankılar oluşturabilir. Çok düşük bir değer, yazıcıyı köşelerde yavaş ve yuvarlak hale getirebilir. En iyi sonuç genellikle makul bir hızlanma limiti, orta düzeyde köşe hızı, sıkı kayışlar, mekanik olarak sıkı eksenler, pressure advance ve mevcutsa input shaping ile gelir.' },
    { type: 'diagnostic', variant: 'error', title: 'Sıfır veya negatif kütle kullanmayın', html: 'Sıfır kütle, <code>F / m</code> formülünden hızlanma sonsuza yaklaşacağı için fiziği tanımsız yapar. Arayüz saçma değerleri engeller ve hesaplama, sonucu kullanılabilir tutmak için girdileri sınırlar.' },
    {
      type: 'table', headers: ['Belirti', 'Olası hareket ayarı sorunu', 'Mekanik kontroller'], rows: [
        ['Köşelerden sonra tekrarlanan dalgalanmalar', 'Kütle ve sertlik için hızlanma çok yüksek', 'Kayışlar, çerçeve vidaları, taşıyıcı kafa sallanması, input shaping.'],
        ['Hızlı seyahat sırasında katman kayması', 'Hızlanma veya jerk/SCV çok agresif', 'Kasnak set skrewleri, motor akımı, kayış diş kavraması.'],
        ['Yuvarlak köşeler ve yavaş küçük detaylar', 'Hızlanma veya köşe hızı çok düşük', 'Planlayıcı limitleri, dilimleyici minimum katman süresi, pressure advance.'],
        ['X ve Y\'de farklı ringing', 'Bir eksen daha yüksek hareketli kütleye veya daha düşük sertliğe sahip', 'Tabla kütlesi, ray ön yükü, kayış yolu, gantry kareliği.'],
      ]
    },

    { type: 'title', text: 'Değerleri Klipper veya Marlin\'e Dışa Aktarma', level: 2 },
    { type: 'paragraph', html: 'Kopyala düğmesi, sonucun bir yazıcı yapılandırma notuna, bir Klipper <code>printer.cfg</code> bölümüne veya bir Marlin ayar kaydına yapıştırılabilmesi için düz metin üretir. Klipper için çıktı <code>max_accel</code> ve <code>square_corner_velocity</code> kullanır. Marlin için çıktı hızlanma ve X/Y jerk tarzı değerler kullanır. Kopyalanan bloğu bir başlangıç yapılandırması olarak ele alın, ardından donanım yazılımı dosyanız kart veya sürüme özgü bir format kullanıyorsa adları uyarlayın.' },
    { type: 'paragraph', html: 'Yazıcınız eksen başına hızlanmayı destekliyorsa, Kartezyen bir bedslinger genellikle X\'ten daha düşük bir Y hızlanmasından faydalanır çünkü tabla daha ağırdır ve baskı parçası iş sırasında kütle ekler. CoreXY yazıcılar genellikle paylaşımlı bir X/Y hızlanma değeri kullanır, ancak bireysel mekanik kusurlar yine de bir yönün daha güçlü çınlamasına neden olabilir. Delta yazıcılar büyük ölçüde kolon sertliğine ve efektör ağırlığına bağlıdır, bu nedenle ivmeölçer tabanlı doğrulama özellikle değerlidir.' },
    {
      type: 'summary', title: 'Güvenli ayar sırası', items: [
        'Kütle ve kinematikten muhafazakâr bir hızlanma ve köşe hızı hesaplayın.',
        'Oluşturulan Klipper veya Marlin metnini başlangıç noktası olarak uygulayın.',
        'Hedef hızda bir ringing testi basın ve keskin detayları karşılaştırın.',
        'Notlar alırken hızlanmayı küçük artışlarla yükseltin veya düşürün.',
        'Mekanik temel stabil olduktan sonra input shaping veya rezonans kompanzasyonu çalıştırın.',
      ]
    },
  ],
  faq: [
    { question: 'Bu hesaplayıcı input shaping\'in yerini alır mı?', answer: 'Hayır. Kütle, kinematik ve rijitlikten muhafazakâr bir başlangıç hızlanması tahmin eder. Input shaping veya rezonans testi, gerçek yazıcıda nihai değeri iyileştirebilir.' },
    { question: 'Klipper neden jerk yerine Kare Köşe Hızı gösteriyor?', answer: 'Klipper köşe davranışı için square_corner_velocity kullanırken, Marlin genellikle jerk tarzı ayarları gösterir. Birimler benzerdir, ancak donanım yazılımı modelleri farklıdır.' },
    { question: 'Baskı parçasını tabla kütlesine dahil etmeli miyim?', answer: 'Büyük bedslinger baskıları için evet. Ağır bir parça Y tablasında taşınır ve yön değişiklikleri sırasında atalet yükünü artırır.' },
    { question: 'Öneri neden çevrimiçi gördüğüm değerlerden daha düşük?', answer: 'Hesaplayıcı yüzde 20 ila 30 güvenlik marjı uygular ve gerçek kayışların ve çerçevelerin esnediğini varsayar. Input shaping ile iyi ayarlanmış makineler, doğrulamadan sonra genellikle daha yüksek çalıştırabilir.' },
  ],
  bibliography,
  howTo: [
    { name: 'Hareketli kütleleri girin', text: 'Taşıyıcı kafa ve tabla kütlesini ölçün veya tahmin edin, ön ayarları yalnızca yer tutucu olarak kullanın.' },
    { name: 'Kinematik seçin', text: 'Hesaplayıcının hareketli eksenleri doğru şekilde ağırlıklandırması için Kartezyen, CoreXY veya Delta seçin.' },
    { name: 'Rijitlik ve donanım yazılımını ayarlayın', text: 'Yapısal sertlik seviyesini seçin ve Klipper veya Marlin çıktı etiketlerini belirleyin.' },
    { name: 'Kopyalayın ve doğrulayın', text: 'Oluşturulan yapılandırma metnini kopyalayın ve bir ringing test baskısı ile doğrulayın.' },
  ],
  schemas: [
    { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: '3D Yazıcı Hızlanma ve Ringing Hesaplayıcı', description: 'Hareketli kütle ve kinematikten 3D yazıcı hızlanması, jerki ve Klipper kare köşe hızını tahmin edin.', applicationCategory: 'UtilityApplication', operatingSystem: 'All' },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [
        { '@type': 'Question', name: 'Bu hesaplayıcı input shaping\'in yerini alır mı?', acceptedAnswer: { '@type': 'Answer', text: 'Hayır. Kütle, kinematik ve rijitlikten muhafazakâr bir başlangıç hızlanması tahmin eder. Input shaping nihai değeri iyileştirebilir.' } },
        { '@type': 'Question', name: 'Klipper neden jerk yerine Kare Köşe Hızı gösteriyor?', acceptedAnswer: { '@type': 'Answer', text: 'Klipper köşe davranışı için square_corner_velocity kullanırken, Marlin genellikle jerk tarzı ayarları gösterir.' } },
      ]
    },
    {
      '@context': 'https://schema.org', '@type': 'HowTo', name: 'Daha az ringing için 3D yazıcı hızlanması nasıl tahmin edilir', step: [
        { '@type': 'HowToStep', text: 'Taşıyıcı kafa ve tabla kütlesini girin.' },
        { '@type': 'HowToStep', text: 'Yazıcı kinematiğini ve yapısal rijitliği seçin.' },
        { '@type': 'HowToStep', text: 'Klipper veya Marlin çıktısını seçin.' },
        { '@type': 'HowToStep', text: 'Yapılandırmayı kopyalayın ve bir ringing test baskısı ile doğrulayın.' },
      ]
    },
  ],
};
