import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: '3d-yazici-guc-kaynagi-boyut-hesaplayici',
  title: '3D Yazıcı Güç Kaynağı Boyutu Hesaplayıcı: Hotendler, Isıtmalı Tablalar, Motorlar ve 12V/24V Yükseltmeleri',
  description: 'Isıtmalı tabla, hotend kartuşu, step motor, yardımcı yük ve güvenlik payı ekleyerek bir 3D yazıcı yükseltmesi için gerekli PSU watt değerini ve maksimum akımı tahmin edin.',
  ui: {
    systemVoltageLabel: 'Sistem voltajı',
    bedPowerLabel: 'Isıtmalı tabla',
    hotendPowerLabel: 'Hotend kartuşu',
    motorsLabel: 'Motorlar',
    motorPowerLabel: 'Motor başına',
    auxiliaryPowerLabel: 'Yardımcı yük',
    safetyMarginLabel: 'Güvenlik payı',
    totalLoadLabel: 'Doğrudan yük',
    psuRequiredLabel: 'Gerekli PSU',
    currentRequiredLabel: 'Maksimum akım',
    recommendedPsuLabel: 'en yakın standart PSU',
    utilizationLabel: 'seçilen boyuttaki yük',
    thermalMapLabel: 'Termal güç haritası',
    bedSegmentLabel: 'Tabla',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motorlar',
    auxiliarySegmentLabel: 'Yardımcı',
    headroomSegmentLabel: 'Pay',
    scenarioLabel: 'Hazır ayarlar',
    scenarioBedSlinger: 'Tabla sallamalı',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Büyük format',
    copyButton: 'Özeti kopyala',
    copiedButton: 'Kopyalandı',
    controlsAriaLabel: 'Güç kaynağı girdileri',
    resultsAriaLabel: 'Güç kaynağı sonuçları',
    copiedSummaryTemplate: '3D yazıcı PSU\'su: {requiredWatts} W gerekli, {voltage} V\'ta {currentAmps} A, önerilen {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: '3D Yazıcı Güç Kaynağı Nasıl Tahmin Yürütmeden Boyutlandırılır', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir 3D yazıcı güç kaynağı, aynı anda aktif olabilen yüklerden boyutlandırılır: ısıtmalı tabla, hotend ısıtıcı kartuşu, step motorlar, kontrolör kartı, fanlar, LED\'ler, problar, oda ısıtıcı röleleri ve herhangi bir yardımcı elektronik. Temel elektriksel ilişki basittir: <strong>watt, volt çarpı ampere eşittir</strong>. 24 V sistemde 420 W\'a ihtiyaç duyan bir yazıcı, başlatma, regülasyon kayıpları veya gelecekteki yükseltmeler için herhangi bir ekstra pay eklenmeden önce yaklaşık 17,5 A çekebilir.',
    },
    {
      type: 'paragraph',
      html: 'Birçok dengesiz yazıcı yapımına neden olan hata, maksimum kontrollü yük yerine ortalama baskı tüketimini kullanmaktır. Normal bir PLA baskısı sırasında tabla, sıcaklığa ulaştıktan sonra kısmi güçte çevrim yapabilir, ancak ısınma sırasında tabla ve hotend aynı anda %100 çalışabilir. PSU yalnızca baskı ortasında alınan akıllı priz okumasından boyutlandırılırsa, ısınma sırasında, ABS kutu kullanımında veya soğuk oda kurtarma döngüsünde hala yetersiz kalabilir.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'temel boyutlandırma formülü' },
        { value: '20-35%', label: 'tipik pratik pay' },
        { value: '24V', label: 'aynı watt için 12V\'dan daha düşük akım' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'PSU watt değerini konektörleri aşırı yüklemek için izin olarak görmeyin',
      html: '500 W\'lık bir güç kaynağı, her terminali, PCB izini, XT konektörünü, fişi veya vidalı bloğu 500 W için güvenli yapmaz. Akım, özellikle ısıtmalı tablalar ve oda ısıtıcıları için kablo ve konektör seviyesinde kontrol edilmelidir.',
    },
    { type: 'title', text: 'PSU Watt Hesabına Hangi Yükler Dahil Edilmelidir?', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir FDM yazıcı için ısıtmalı tabla genellikle baskın güç yüküdür. Yaygın 220 x 220 mm tabla yaklaşık 180-250 W olabilirken, daha büyük 300 x 300 mm tabla voltaj ve yapıya bağlı olarak 300-500 W\'a ulaşabilir. AC tablalar farklıdır çünkü ısıtıcı güçleri yazıcının DC PSU\'su tarafından sağlanmaz; bu durumda yalnızca DC kontrol elektroniğini, fanları, hotendi, motorları ve katı hal röle girişinin kullandığı küçük akımı dahil edin.',
    },
    {
      type: 'paragraph',
      html: 'Hotend ısıtıcı kartuşu bir sonraki bariz yüktür. Standart kartuşlar genellikle 30 W veya 40 W\'tır, yüksek akışlı hotendler sıklıkla 50 W veya 60 W kullanır ve bazı yüksek sıcaklık kurulumları 80 W veya daha fazlasını kullanır. Daha yüksek watt\'lı bir kartuş otomatik olarak bu gücü sürekli tüketmez, ancak PSU tam nominal değeri desteklemelidir çünkü bellenim, ısınma veya büyük bir ekstrüzyon talebinden sonra kurtarma sırasında %100 görev döngüsü emredebilir.',
    },
    {
      type: 'list',
      items: [
        'Tabla özelliğinden veya ölçülen voltaj ve dirençten ısıtmalı tabla watt değeri.',
        'Ortalama görev döngüsünden değil, derecesinden hotend kartuşu watt değeri.',
        'Motor sayısı ve sürücü akım ayarlarına dayalı step motor payı.',
        'Kontrolör, fanlar, Raspberry Pi, LED\'ler, problar, röleler ve kafa kartları için yardımcı güç.',
        'Geçici yük, kapasitör yaşlanması, kutu ısısı ve gelecekteki yükseltmeler için güvenlik payı.',
      ],
    },
    {
      type: 'table',
      headers: ['Bileşen', 'Tipik aralık', 'Boyutlandırma notu'],
      rows: [
        ['220 mm ısıtmalı tabla', '180-250 W', 'Genellikle masaüstü yazıcıdaki en büyük DC yükü.'],
        ['300 mm ısıtmalı tabla', '300-500 W', 'Kablo kalınlığını ve tabla MOSFET yolunu dikkatlice kontrol edin.'],
        ['Hotend kartuşu', '30-80 W', 'Gözlemlenen ortalama gücü değil, kartuş derecesini kullanın.'],
        ['Step motorlar', 'Her biri 6-15 W', 'Akım sınırına, voltaja, sürücü moduna ve tutma akımına bağlıdır.'],
        ['Fanlar ve elektronik', '10-60 W', 'Kafa kartları, LED\'ler ve tek kartlı bilgisayarlar hızla eklenir.'],
      ],
    },
    { type: 'title', text: '12V ve 24V Güç Kaynağı İhtiyaçları', level: 2 },
    {
      type: 'paragraph',
      html: 'Aynı watt için 24 V\'luk bir yazıcı, 12 V\'luk bir yazıcının yarısı kadar akıma ihtiyaç duyar. 360 W\'lık bir yük 12 V\'ta 30 A çekerken 24 V\'ta yalnızca 15 A çeker. Daha düşük akım, kablolardaki voltaj düşüşünü azaltır, konektörlerdeki ısıyı azaltır ve tabla ile hotend devrelerine daha pratik bir pay verir. Bu nedenle birçok modern 3D yazıcı ve yükseltme kartı, ısıtıcılar ve hareket elektroniği için 24 V\'u tercih eder.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '12V sistemleri',
          description: 'Eski yazıcılar ve otomotiv tarzı aksesuarlar için kullanışlıdır, ancak yüksek tabla gücü çok yüksek akım gerektirebilir.',
          points: ['Aynı watt için daha yüksek amper', 'Konektör direncine daha duyarlı', 'Eski RepRap dönemi makinelerde yaygın'],
        },
        {
          title: '24V sistemleri',
          description: 'Aynı ısıtıcı gücü daha düşük akımla iletildiği için birçok modern yazıcı için tercih edilir.',
          highlight: true,
          points: ['Aynı watt için daha düşük amper', 'Kablolamada daha az voltaj düşüşü', 'Daha büyük DC ısıtmalı tablalar için daha uygun'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Akımı pratik kablolama kontrolü olarak kullanın',
      html: 'Gerekli watt\'ı hesapladıktan sonra, maksimum akımı elde etmek için voltaja bölün. Bu amper değeri, PSU terminalleri, sigortalar, anahtarlar, kablo kalınlığı, tabla konektörleri ve kart giriş değerleri için önemli olan değerdir.',
    },
    {
      type: 'proscons',
      title: 'Yükseltme sırasında voltajı değiştirme',
      items: [
        { pro: '12 V\'tan 24 V\'a geçmek, aynı tabla gücü için akımı ve konektör ısınmasını azaltabilir.', con: 'Fanlar, LED\'ler, pompalar ve bazı kontrol kartları değiştirme veya buck dönüştürücü gerektirebilir.' },
        { pro: 'Doğru şekilde belirtildiğinde 24 V hotendler ve tablalar genellikle sıcaklığa daha hızlı ulaşır.', con: '24 V\'a yanlış takılan 12 V\'luk bir ısıtıcı tehlikeli şekilde aşırı güç alabilir.' },
        { pro: 'Sürücü ve hareket sistemleri genellikle modern 24 V elektronikle daha iyi çalışır.', con: 'İlk çalıştırmadan önce her aksesuar voltajı denetlenmelidir.' },
      ],
    },
    { type: 'title', text: 'Bir 3D Yazıcı PSU\'sunun Ne Kadar Güvenlik Payı Olmalıdır?', level: 2 },
    {
      type: 'paragraph',
      html: 'Güvenlik marjı boşa harcanmış kapasite değildir; çalışma alanıdır. Anahtarlamalı güç kaynakları, sıcak bir kutuda kalıcı olarak nominal değerlerinde çalıştırılmadıklarında en rahattır. Isıtılmış bir odanın altına, tabla kablo zincirinin yanına veya kötü havalandırılan bir tabanın içine monte edilen bir yazıcı PSU\'su, açık bir tezgahtaki aynı güç kaynağından daha sıcak çalışabilir. Isı, kapasitör ömrünü kısaltır ve yük altında kapanmaları tetikleyebilir.',
    },
    {
      type: 'paragraph',
      html: 'Tipik bir masaüstü yazıcı için, yük tahmini doğru olduğunda %20 pay makul bir minimumdur. Büyük tablalar, yüksek akışlı hotendler, oda fanları, LED aydınlatma veya gelecekteki kafa yükseltmeleri için %30-35 daha rahattır. Deneysel yazıcılar, yüksek sıcaklık makineleri veya ikinci bir hotend, aktif oda ısıtma kontrolleri veya birçok aksesuar ekleyebilecek yapılar için, hesaplanan gereksinimin üzerinde bir standart PSU kademesi seçmek genellikle daha sakin bir mühendislik tercihidir.',
    },
    {
      type: 'table',
      headers: ['Marj', 'Kullanım durumu', 'Pratik anlamı'],
      rows: [
        ['%10', 'Kesin olarak bilinen yükler, açık çerçeve, kaliteli PSU', 'Yalnızca her yük ve kablo yolu zaten doğrulanmışsa çalışır.'],
        ['%20', 'Normal masaüstü yazıcı', 'Kararlı bir standart yapı için iyi temel.'],
        ['%30', 'Yükseltilmiş tabla, yüksek akışlı hotend, kapalı elektronik', 'Daha iyi termal konfor ve gelecek esnekliği.'],
        ['%40+', 'Büyük format veya deneysel yazıcı', 'Yük varsayımları daha sonra değişebileceğinde kullanışlı.'],
      ],
    },
    {
      type: 'card',
      title: 'Daha büyük bir PSU neden yazıcıya daha fazla güç vermez',
      html: 'Düzenlenmiş bir DC güç kaynağı voltaj sağlar; bağlı yükler dirence, görev döngüsüne ve kontrol elektroniğine göre akım çeker. 300 W\'a ihtiyaç duyan bir yazıcıdaki 600 W\'lık bir PSU, 600 W\'ı tablaya itmez. Sadece sınırında çalışmadan akımı sağlamak için yeterli kapasiteye sahiptir.',
    },
    { type: 'title', text: 'Isıtmalı Tabla Güç Tüketimi ve Termal Davranış', level: 2 },
    {
      type: 'paragraph',
      html: 'Isıtmalı tablalar dirençli yüklerdir, bu nedenle teorik güçleri <code>P = V² / R</code> kullanılarak voltaj ve dirençten tahmin edilebilir. 24 V\'luk bir tablanın 2,4 ohm direnci varsa, yaklaşık 240 W\'lık bir tabladır. Gerçek güç, ısıtıcı ısındıkça direnç hafifçe değişebileceğinden, besleme voltajına, kablo kayıplarına, MOSFET direncine ve tabla sıcaklığına göre değişir.',
    },
    {
      type: 'paragraph',
      html: 'Kararlı bir PLA baskısı sırasında %35 görev döngüsünde çalışan bir tabla, başlangıçta yine de %100 talep edebilir. PSU boyutlandırması için tam ısıtıcı derecesini kullanın. Elektrik maliyeti tahmini için ortalama görev döngüsü daha kullanışlıdır. Bu iki soruyu karıştırmak, yetersiz boyutlu PSU\'ların yaygın bir nedenidir: iki saatlik bir baskı sırasındaki enerji tüketimi, anlık elektrik kapasitesi ile aynı şey değildir.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'AC tabla istisnası',
      html: 'Yazıcı şebeke beslemeli AC ısıtmalı tabla kullanıyorsa, tabla watt değerini DC PSU yüküne dahil etmeyin. Bunun yerine, AC kablolamayı, sigortayı, röleyi, gerilim gidermeyi, topraklamayı ve termal korumayı ayrı ayrı boyutlandırın. DC PSU yine de kontrolörü, hotendi, motorları ve aksesuarları besler.',
    },
    {
      type: 'list',
      items: [
        'Yalıtımlı tabla alt tarafı: daha az ısı kaybı ve ısındıktan sonra daha düşük ortalama görev döngüsü.',
        'Kalın alüminyum işleme plakası: daha yavaş ısınma ancak daha eşit ısı dağılımı.',
        'Büyük cam plaka: daha fazla termal kütle, aynı watt\'ta genellikle daha uzun ısınma.',
        'Soğuk oda veya açık çerçeve: sıcaklığı korumak için daha fazla kurtarma gücü gerekir.',
      ],
    },
    { type: 'title', text: 'Hotend, Motorlar, Fanlar ve Yardımcı Yükler', level: 2 },
    {
      type: 'paragraph',
      html: 'Step motorlar genellikle fazla veya az tahmin edilir çünkü elektriksel davranışları nominal voltaj ve akımı eklemek kadar basit değildir. Modern kıyıcı sürücüler sargı akımını düzenler ve PSU\'dan alınan güç, sürücü ayarlarına, motor hızına, tutma akımı azaltmasına ve mekanik yüke bağlıdır. PSU boyutlandırması için, aktif step başına 8-15 W\'lık pratik bir pay genellikle yaygın masaüstü yazıcılar için yeterlidir, ancak çok yüksek akımlı motorlar veya birçok Z motoru, sürücü yapılandırmasından doğrudan hesaplama gerektirir.',
    },
    {
      type: 'paragraph',
      html: 'Yardımcı yükleri unutmak kolaydır çünkü her öğe küçüktür: hotend fanı, parça soğutma fanı, kontrolör fanı, oda sirkülasyon fanları, LED\'ler, filament sensörü, prob, ana kart, ekran, kafa kartı, Raspberry Pi, kamera, USB hub ve buck dönüştürücü kayıpları. Tek kartlı bilgisayar ve kutu aydınlatması olan bir yazıcı, büyük bir elektriksel değişiklik gibi hissettirmeden 20-40 W ekleyebilir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Sürekli değer', definition: 'Bir güç kaynağının belirtilen soğutma ve sıcaklık koşulları altında uzun süreler boyunca sağlamak üzere tasarlandığı yük.' },
        { term: 'Tepe yükü', definition: 'Isınma veya eşzamanlı ısıtıcı kurtarma gibi ortalama yükten daha yüksek olabilen kısa süreli talep.' },
        { term: 'Voltaj düşüşü', definition: 'Gerçek iletkenlerin direnci olduğu için kablolar ve konektörler arasında kaybedilen voltaj.' },
        { term: 'Görev döngüsü', definition: 'Bir kontrol periyodu sırasında kontrollü bir ısıtıcının açık olduğu sürenin yüzdesi.' },
        { term: 'Pay', definition: 'PSU\'yu sınırından uzak tutan hesaplanan yükün üzerindeki ekstra kapasite.' },
      ],
    },
    {
      type: 'summary',
      title: 'Yardımcı yük kontrol listesi',
      items: [
        'Tüm fanları nominal watt değerlerinde veya voltaj çarpı akım olarak ekleyin.',
        'Yazıcı PSU\'sundan besleniyorsa tek kartlı bilgisayarları ve kameraları dahil edin.',
        'LED şeritler, kafa kartları, röleler, problar ve buck dönüştürücü kayıpları için güç ayırın.',
        'Kutu ısıtıcıları, ekstra ekstrüderler veya yüksek akımlı parça soğutması ekledikten sonra yeniden hesaplayın.',
      ],
    },
    { type: 'title', text: 'Hesaplayıcı Çıktılarını Okuma', level: 2 },
    {
      type: 'paragraph',
      html: 'Doğrudan yük, paydan önce tabla, hotend, motorlar ve yardımcı girişlerin toplamıdır. Gerekli PSU değeri, seçilen güvenlik payını ekler. Maksimum akım değeri, bu gereksinimi sistem voltajına bölerek pratik kablolama sorusunu yanıtlar: seçilen voltajda PSU ve giriş yolu kaç amperi güvenle taşımalıdır?',
    },
    {
      type: 'paragraph',
      html: 'Önerilen PSU boyutu, yaygın bir watt sınıfına yuvarlanır. Gerekli değer 382 W ise, 400 W\'lık bir güç kaynağı matematiksel olarak yeterli görünebilir, ancak daha iyi soğutmaya, daha iyi terminallere, tanınmış güvenlik sertifikalarına veya daha dürüst bir sürekli dereceye sahip olduğunda 450 W veya 500 W\'lık bir model tercih edilebilir. Etiket watt değeri, PSU kalitesinin yalnızca bir parçasıdır.',
    },
    {
      type: 'table',
      headers: ['Çıktı', 'Şunun için kullan', 'Uyarı işareti'],
      rows: [
        ['Gerekli watt', 'PSU kapasitesi seçimi', 'Değer PSU etiketinin birkaç watt yakınında.'],
        ['Maksimum akım', 'Kablo, sigorta ve konektör kontrolleri', 'Akım kart veya terminal değerlerini aşıyor.'],
        ['Önerilen boyut', 'Alışveriş kısa listesi', 'Küçük terminallerle yüksek watt vaat eden ucuz markasız PSU.'],
        ['Kullanım', 'Termal konfor tahmini', 'Sürekli yük yaklaşık %80-85\'in üzerinde.'],
      ],
    },
    {
      type: 'message',
      title: 'Pratik satın alma kuralı',
      html: 'Hesaplanan gereksinimin üzerindeki ilk kaliteli PSU boyutunu seçin, ardından kurulumdan önce çıkış voltajını, akım değerini, soğutma yönünü, kutu havalandırmasını, koruyucu topraklamayı, sigorta stratejisini ve konektör değerlerini doğrulayın.',
    },
    { type: 'title', text: '3D Yazıcı Yükseltmelerinde Yaygın PSU Boyutlandırma Hataları', level: 2 },
    {
      type: 'list',
      items: [
        'Maksimum DC ısıtıcı yükü yerine ortalama akıllı priz watt\'ını kullanmak.',
        '12 V sistemlerin aynı watt\'ta 24 V sistemlerin iki katı akıma ihtiyaç duyduğunu unutmak.',
        'Orijinal kart giriş konektörünü ve kablo kalınlığını koruyarak daha büyük bir tabla eklemek.',
        'MOSFET, sigorta ve bellenim termal korumalarını kontrol etmeden yüksek watt\'lı hotend kartuşu takmak.',
        'Yardımcı yük eklemeden Raspberry Pi, kamera, LED ve fanları yazıcıdan beslemek.',
        'Sürekli değer ve güvenlik sertifikası yerine reklamı yapılan tepe watt\'ına göre PSU satın almak.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kablolar veya konektörler ısınırsa durun',
      html: 'Sıcak kablolar, kararmış terminaller, erimiş gövdeler, aralıklı sıfırlamalar veya hareket sırasında tabla sıcaklığı düşüşleri ayar sorunları değildir. Bunlar, daha fazla baskı yapmadan önce inceleme gerektiren elektriksel belirtilerdir.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı PSU kapasitesini tahmin eder; tüm elektrik sistemini onaylamaz. Güvenli bir yazıcı ayrıca doğru topraklama, gerilim giderme, sigortalar, uygun yerde pabuçlar, gerçek akım için derecelendirilmiş kıvrımlı konektörler, bellenim termal kaçak koruması ve şebeke voltajını düşük voltajlı elektronikten ayrı tutan bir kablo düzeni gerektirir.',
    },
    {
      type: 'card',
      title: 'Güç kaynakları ne zaman bölünmeli',
      html: 'Büyük yazıcılar bazen tabla, hareket elektroniği ve aksesuarlar için ayrı güç kaynakları kullanır. Bölme, tek bir karttan geçen akımı azaltabilir ve servisi basitleştirebilir, ancak topraklar, anahtarlama mantığı, sigortalar ve acil durdurma davranışı bilinçli olarak tasarlanmalıdır.',
    },
    { type: 'title', text: 'Çalışılmış Örnekler: Stok Yazıcı, CoreXY Yükseltmesi ve Büyük Tabla', level: 2 },
    {
      type: 'paragraph',
      html: '220 W tabla, 40 W hotend, 10 W\'ta dört motor ve 25 W elektronik içeren kompakt bir tabla sallamalı yazıcının doğrudan yükü 325 W\'tır. %25 pay ile gerekli PSU kapasitesi yaklaşık 406 W\'tır. 24 V\'ta bu yaklaşık 16,9 A\'dir, bu nedenle konektör düzenine ve soğutmaya bağlı olarak kaliteli bir 450 W veya 500 W 24 V PSU mantıklı bir hedeftir.',
    },
    {
      type: 'paragraph',
      html: '300 W tabla, 60 W yüksek akışlı hotend, 12 W\'ta beş motor ve 45 W yardımcı yük ile bir CoreXY yükseltmesi, marj öncesi toplam 465 W\'tır. %30 pay ile yaklaşık 605 W veya 24 V\'ta 25,2 A gerekir. Bu yapı 600-750 W sınıfına aittir ve tabla kablolaması sonradan akla gelen bir şey değil, ana akım yolu olarak ele alınmalıdır.',
    },
    {
      type: 'paragraph',
      html: '600 W DC tabla, 80 W hotend, 14 W\'ta altı motor ve 80 W yardımcı yük ile büyük formatlı bir yazıcı, marj öncesi 844 W\'a ulaşır. %35 pay ile gereksinim yaklaşık 1139 W\'tır. Bu noktada birçok yapıcı AC tabla veya ayrı güç mimarisi düşünür çünkü DC akım, kablolama, sigortalar ve ısı yönetimi merkezi tasarım kısıtlamaları haline gelir.',
    },
    {
      type: 'summary',
      title: 'Nihai boyutlandırma iş akışı',
      items: [
        'Isınma veya kurtarma sırasında çalışabilecek her yükü listeleyin.',
        'Doğrudan watt\'ı hesaplayın, ardından gerçekçi bir pay ekleyin.',
        'Gerçek sistem voltajında watt\'ı ampere dönüştürün.',
        'Sonucun üzerinde kaliteli sürekli dereceli bir PSU seçin.',
        'Yazıcıya güç vermeden önce kabloları, konektörleri, sigortaları, kart değerlerini ve soğutmayı doğrulayın.',
      ],
    },
  ],
  faq: [
    {
      question: '3D yazıcı güç kaynağımın kaç watt olması gerekir?',
      answer: 'Isıtmalı tablayı, hotend kartuşunu, motorları, elektroniği, fanları ve aksesuarları toplayın, ardından güvenlik payı ekleyin. Yükseltilmiş birçok masaüstü 24 V yazıcı 400 W ile 600 W arasındayken, büyük tablalar çok daha fazlasını gerektirebilir.',
    },
    {
      question: '3D yazıcı PSU\'su için 24V, 12V\'dan daha mı iyidir?',
      answer: 'Aynı watt için 24 V, 12 V\'un yarısı kadar akım kullanır. Daha düşük akım genellikle daha az voltaj düşüşü ve daha az konektör ısınması anlamına gelir, ancak tüm ısıtıcılar, fanlar, kartlar ve aksesuarlar seçilen voltajla uyumlu olmalıdır.',
    },
    {
      question: 'Isıtmalı tablayı DC PSU hesabına dahil etmeli miyim?',
      answer: 'Yazıcı PSU\'sundan beslenen bir DC ısıtmalı tablaya ise dahil edin. Şebeke AC tablayı DC PSU watt\'ına dahil etmeyin; şebeke kablolamasını, röleyi, sigortayı ve güvenlik korumalarını ayrı ayrı boyutlandırın.',
    },
    {
      question: 'PSU payı için hangi güvenlik marjını kullanmalıyım?',
      answer: 'Normal bilinen bir yapı için en az %20 kullanın. Yükseltilmiş tablalar, yüksek akışlı hotendler, kapalı elektronik veya gelecekteki aksesuarlar için %30-35 kullanın.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Isıtıcı yüklerini girin', text: 'Isıtmalı tabla ve hotend kartuşunun nominal watt değerini ekleyin.' },
    { name: 'Hareket ve aksesuarları ekleyin', text: 'Motor sayısını, motor başına payı, fanları, kartları, LED\'leri ve diğer yardımcı yükleri girin.' },
    { name: 'Voltaj ve marj seçin', text: '12 V veya 24 V seçin ve yapı riskine uygun bir güvenlik payı belirleyin.' },
    { name: 'Watt ve amperi kontrol edin', text: 'PSU seçimi için gerekli watt\'ı, kablo, sigorta ve konektör kontrolleri için maksimum amperi kullanın.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '3D Yazıcı Güç Kaynağı Boyutu Hesaplayıcı',
      description: 'Tabla, hotend, motor, yardımcı ve pay yüklerinden 3D yazıcı PSU watt ve akımını tahmin edin.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '3D yazıcı güç kaynağımın kaç watt olması gerekir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Isıtmalı tablayı, hotend kartuşunu, motorları, elektroniği, fanları ve aksesuarları toplayın, ardından güvenlik payı ekleyin.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '3D yazıcı güç kaynağı nasıl boyutlandırılır',
      step: [
        { '@type': 'HowToStep', text: 'Isıtıcı yüklerini girin.' },
        { '@type': 'HowToStep', text: 'Hareket ve aksesuar yüklerini ekleyin.' },
        { '@type': 'HowToStep', text: 'Sistem voltajını ve güvenlik payını seçin.' },
        { '@type': 'HowToStep', text: 'Hesaplanan gereksinimin üzerinde kaliteli bir PSU seçin.' },
      ],
    },
  ],
};
