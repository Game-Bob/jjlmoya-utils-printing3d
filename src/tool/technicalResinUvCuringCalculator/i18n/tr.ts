import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'teknik-recine-uv-sertlestirme-suresi-hesaplayici';
const title = 'Teknik Reçine UV Sertleştirme Süresi Hesaplayıcı';
const description = 'Reçine türüne, maksimum duvar kalınlığına, yıkama ve sertleştirme istasyonu gücüne ve UV dalga boyuna göre güvenli SLA reçine son sertleştirme süresini tahmin edin.';

const faqData = [
  { question: 'SLA reçine baskıları ne kadar süreyle sertleştirilmelidir?', answer: 'Doğru süre; reçine türüne, duvar kalınlığına, sertleştirme istasyonu gücüne, dalga boyuna ve maruziyet geometrisine bağlıdır. Küçük standart reçine parçalar sadece birkaç dakika gerektirebilirken, kalın teknik reçine parçalar daha uzun süre gerektirir ancak bir güvenlik sınırına uymalıdır.' },
  { question: 'Çok fazla UV sertleştirme reçineyi kırılgan yapabilir mi?', answer: 'Evet. Aşırı UV maruziyeti, birçok fotopolimer reçine parçasını kırılgan, sarı veya daha az esnek hale getirebilir. Hesaplayıcı, kaba tahmin bir bozulma bölgesine girdiğinde süreyi sınırlar.' },
  { question: 'Reçine baskılar sertleştirmeden önce kuru olmalı mı?', answer: 'Evet. Reçine baskılar UV sertleştirmeden önce temiz ve tamamen kuru olmalıdır. Alkol kalıntıları beyazlamaya, sıkışmış kirlenmeye ve tutarsız son sertleştirme sonuçlarına neden olabilir.' },
  { question: 'Reçine sertleştirme için 385 nm mi yoksa 405 nm mi daha iyidir?', answer: 'Hiçbiri evrensel olarak daha iyi değildir. En iyi dalga boyu, reçinenin foto-başlatıcı sistemi ve sertleştirme istasyonu ile eşleşen dalga boyudur. Birçok masaüstü reçine 405 nm için optimize edilmiştir, bazı teknik reçineler ise 385 nm\'ye iyi yanıt verir.' },
];

const howToData = [
  { name: 'Reçine ön ayarını seçin', text: 'Reçine şişesine veya amaçlanan kullanıma göre standart, esnek, sert/dayanıklı, dökülebilir veya yakılabilir seçeneğini belirleyin.' },
  { name: 'En kalın duvarı girin', text: 'UV son sertleştirmesi alması gereken maksimum duvar kalınlığını ölçün.' },
  { name: 'İstasyon parametrelerini girin', text: 'UV odanıza uyacak şekilde sertleştirme istasyonu gücünü ve dalga boyunu ayarlayın.' },
  { name: 'Güvenlik kontrol listesini izleyin', text: 'Parçayı kurutun, her yüzü maruz bırakın, gölge oluşturan destekleri çıkarın ve maksimum güvenli zamanlayıcı değerine uyun.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

const seoData = [
  { type: 'title', text: 'SLA Reçine Son Sertleştirme Süresi Nasıl Seçilir', level: 2 },
  {
    type: 'paragraph',
    html: 'Son sertleştirme, bir reçine baskı yıkandıktan sonra uygulanan kontrollü UV maruziyetidir. Amaç sadece yüzeyi kuru hissettirmek değildir. Doğru şekilde son sertleştirilmiş bir SLA veya MSLA parça, polimer ağı içindeki reaktif grupların daha iyi dönüşümüne ulaşır, bu da sertliği, ısı direncini, boyutsal kararlılığı ve kullanım güvenliğini artırır. Az sertleştirme, yapışkan, zayıf veya kimyasal olarak aktif yüzeyler bırakır. Aşırı sertleştirme, malzemeyi kırılganlaşmaya, görünür sararmaya ve uzama kaybına itebilir. Kullanışlı bir <strong>SLA reçine UV sertleştirme süresi tahmin aracı</strong> bu nedenle reçine kimyasını, duvar kalınlığını, ışık yoğunluğunu, dalga boyunu, sıcaklığı ve maruziyet geometrisini dengelemelidir.',
  },
  {
    type: 'paragraph',
    html: 'Hesaplayıcı, farklı reçine aileleri aynı şekilde yanıt vermediği için reçine ön ayarlarını kullanır. Standart bir masaüstü reçinesi genellikle esnek bir üretan benzeri formülasyondan daha hızlı sertleşir. Dayanıklı veya sert mühendislik reçinesi genellikle daha uzun maruziyet ve bazen veri sayfası özelliklerine yaklaşmak için hafif ısı gerektirir. Dökülebilir ve yakılabilir reçineler hassastır çünkü aşırı sertleştirme kırılganlığı veya külle ilgili süreç sorunlarını artırabilir. Sonuç, önerilen bir zamanlayıcı değeri, güvenli bir üst sınır, isteğe bağlı bir sıcaklık hedefi ve pratik bir ışık mesafesidir.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'yaygın masaüstü reçine sertleştirme dalga boyları' },
      { value: '1-22 dk', label: 'tipik sınırlı hesaplayıcı çıktısı' },
      { value: '0,4-12 mm', label: 'duvar kalınlığı model aralığı' },
      { value: '6-120 W', label: 'sertleştirme istasyonu güç aralığı' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Islak reçine baskıları asla sertleştirmeyin',
    html: 'Parça üzerinde kalan alkol, sertleşmemiş kalıntıları hapsedebilir, yüzeyleri beyazlatabilir, sertleştirme odasını kirletebilir ve UV dozu ile nihai malzeme davranışı arasındaki ilişkiyi bozabilir. Önce yıkayın, parçanın tamamen kurumasını bekleyin, ardından sertleştirin.',
  },
  { type: 'title', text: 'Duvar Kalınlığı UV Sertleştirme Süresini Neden Değiştirir', level: 2 },
  {
    type: 'paragraph',
    html: 'İnce bir minyatür kabuk ve kalın bir işlevsel braket aynı reçineyi kullanabilir ancak farklı son sertleştirme davranışı gerektirir. UV ışığı pigmentler, dolgu maddeleri, foto-başlatıcılar ve polimerin kendisi tarafından emilir ve saçılır. Yüzey en güçlü dozu alırken, daha derin malzeme daha az enerji alır. Bu nedenle hesaplayıcı, toplam yükseklik veya toplam kütle yerine <strong>maksimum duvar kalınlığını</strong> sorar. En kalın optik olarak ilgili kesit, dış taraf zaten bitmiş göründüğünde az sertleşmiş kalma olasılığı en yüksek olan kısımdır.',
  },
  {
    type: 'paragraph',
    html: 'Artış orantılıdır ancak mükemmel doğrusal değildir. Duvar kalınlığını iki katına çıkarmak her zaman tam olarak iki kat zamanlayıcı değeri gerektirmez çünkü parça döndürüldüğünde sertleştirme birden çok yüzden devam eder ve birçok reçine baskı içi boştur. Model, reçineye özgü bir üs kullanır: dayanıklı reçineler kalınlıkla daha agresif ölçeklenirken, dökülebilir profiller daha sıkı bir güvenlik sınırı altında kalır. Çok kalın katı parçalar için daha iyi çözüm genellikle tek bir uzun maruziyet yerine oyma, drenaj, döndürme ve aşamalı sertleştirmedir.',
  },
  {
    type: 'table',
    headers: ['Geometri durumu', 'Sertleştirme etkisi', 'Pratik eylem'],
    rows: [
      ['İnce kozmetik kabuk', 'Düşük iç sertleştirme talebi', 'Ekstra dakika eklemeden hesaplanan süreyi kullanın.'],
      ['Kalın katı çıkıntı', 'Daha yüksek az sertleşmiş çekirdek riski', 'Ortalama kabuk kalınlığını değil, yerel maksimum duvar kalınlığını girin.'],
      ['Drenaj delikleri olan içi boş parça', 'Işık dışarıya ulaşır; iç kısım gölgeli kalabilir', 'Önce dış yüzü sertleştirin, geometri izin veriyorsa iç yüzü maruz bırakın.'],
      ['Opak veya koyu reçine', 'Daha düşük nüfuziyet ve daha fazla saçılma', 'Üretici talimatlarına yakın durun ve daha sık döndürün.'],
    ],
  },
  {
    type: 'tip',
    title: 'En kalın yapısal duvarı ölçün',
    html: 'İçi boş bir reçine baskı için en kalın kabuğu veya takviye nervürünü kullanın. Katı bir mühendislik parçası için nihai mekanik özelliklere ulaşması gereken en kalın katı bölümü kullanın.',
  },
  { type: 'title', text: 'İstasyon Gücü, Mesafe ve UV Dozu', level: 2 },
  {
    type: 'paragraph',
    html: '40 W olarak derecelendirilmiş bir yıkama ve sertleştirme istasyonu, parçanın her santimetrekaresine 40 W kullanılabilir UV enerjisi iletmez. Nominal güç, elektriksel ve optik kayıpları, LED düzenini, oda yansıtıcılığını, döner tabla kapsamını ve ışık kaynağına olan mesafeyi içerir. Yine de güç kullanışlı bir tahmin aracıdır: yüksek güçlü bir istasyon genellikle zayıf bir tırnak lambası tipi sertleştirme kutusundan daha kısa bir zamanlayıcı gerektirir. Hesaplayıcı, istasyon gücü arttıkça zamanlayıcının azalması için ters bir güç faktörü uygular.',
  },
  {
    type: 'paragraph',
    html: 'Mesafe önemlidir çünkü ışınım, parça LED\'lerden uzaklaştıkça düşer ve çok yakın yerleştirme sıcak noktalar oluşturabilir. Bir LED bankasına çok yakın yerleştirilen bir parça, bir yüzü agresif bir şekilde sertleştirebilirken köşeler veya girintili yüzeyler yumuşak kalır. Çok uzağa yerleştirilen bir parça daha uzun maruziyet gerektirebilir, ancak süre eklemek zaten aydınlatılmış yüzeyleri aşırı sertleştirebilir. Bu nedenle çıktı, santimetre veya inç cinsinden önerilen bir mesafe içerir. Bu bir geometri kontrolüdür, sadece bir kolaylık değeri değildir.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Çok yakın',
        description: 'Yüksek yerel yoğunluk, eşit olmayan doz ve yüzey gerilimi oluşturur.',
        points: ['Maruz kalan yüzeylerde sararma', 'Kırılgan ince detaylar', 'Gölgeli boşluklar az sertleşmiş kalır'],
      },
      {
        title: 'Dengeli',
        description: 'Orta mesafe, oda ve döner tablanın UV\'yi daha eşit dağıtmasını sağlar.',
        highlight: true,
        points: ['Daha temiz mekanik sonuç', 'Daha az sıcak nokta riski', 'Daha iyi tekrarlanabilirlik'],
      },
      {
        title: 'Çok uzak',
        description: 'Düşük ışınım, kullanıcıları aşırı süre ile telafi etmeye teşvik eder.',
        points: ['Uzun çevrimler', 'Tutarsız sertleştirme', 'Kuru yüzeylerden yanlış güven'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Oda tüm yüzeyleri maruz bırakmadığında döndürün',
    html: 'Bir parçanın derin girintileri, alttan kesikleri veya geniş düz kenarları varsa, maruziyeti daha kısa çevrimlere bölün ve parçayı döndürün. Tek tip bir doz genellikle tek bir uzun statik sertleştirmeden daha iyidir.',
  },
  { type: 'title', text: 'Reçine Sertleştirmede 385 nm ve 405 nm Karşılaştırması', level: 2 },
  {
    type: 'paragraph',
    html: 'Tüketici MSLA yazıcılarının ve sertleştirme istasyonlarının çoğu 405 nm LED kullanır çünkü bu dalga boyu birçok masaüstü foto-başlatıcı sistemiyle eşleşir ve uygun fiyatlı LED dizileri için verimlidir. Bazı teknik reçineler ayrıca UV-A aralığına daha yakın olan daha kısa bir dalga boyu olan 385 nm\'ye de güçlü yanıt verir. Fark otomatik olarak daha iyi veya daha kötü değildir. 405 nm için formüle edilmiş bir reçine, spektrum eşleşmiyorsa 385 nm altında daha fazla süre gerektirebilir; başka bir reçine 385 nm\'de verimli bir şekilde sertleşebilir. Hesaplayıcı, dalga boyunu reçineye bağlı bir çarpan olarak ele alır.',
  },
  {
    type: 'paragraph',
    html: 'Önemli kullanıcı eylemi tutarlılıktır. Bir reçine üreticisi belirli bir sertleştirme ünitesi, dalga boyu ve sıcaklık için bir son sertleştirme programı belirtiyorsa, bu programı referans olarak kullanın. Reçine jenerik olduğunda, istasyon gücü referans makineden farklı olduğunda veya baskı geometrisi basit bir kalibrasyon kuponundan daha kalın olduğunda bu hesaplayıcıyı kullanın. Maruziyet varsayımlarını ayarlamadan endüstriyel bir 385 nm programını 405 nm masaüstü istasyonuyla karıştırmayın.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Foto-başlatıcı', definition: 'Işığı emen ve polimerizasyon reaksiyonlarını başlatan bir reçine bileşeni.' },
      { term: 'UV dozu', definition: 'Sertleştirme sırasında parça tarafından alınan, ışınım ve süreden etkilenen birikmiş ışık enerjisi.' },
      { term: 'Son sertleştirme', definition: 'Yıkamadan sonra malzeme özelliklerini basılı durumun ötesine iyileştiren UV ve bazen ısıl işlem.' },
      { term: 'Aşırı sertleştirme', definition: 'Bir reçine parçasını kırılgan, sarı, deforme olmuş veya darbeye daha az dayanıklı hale getirebilen aşırı maruziyet.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Dokunulduğunda kuru olmak tamamen sertleşmiş anlamına gelmez',
    html: 'Bir reçine yüzeyi, iç ağ amaçlanan mekanik davranışa ulaşmadan önce yapışkan hissetmeyi bırakabilir. Yüzey hissi yerine geometri, reçine türü ve istasyon gücü kullanın.',
  },
  { type: 'title', text: 'Reçine Ön Ayarları ve Mekanik Risk', level: 2 },
  {
    type: 'paragraph',
    html: 'Standart reçineler genellikle kolay baskı ve hızlı son işlem için optimize edilmiştir. Hesaplayıcıdaki en affedici kategoridir. Esnek reçineler daha dikkatli kullanım gerektirir çünkü istenen özellik maksimum sertlik değil uzamadır. Çok fazla UV esnekliği azaltabilir ve yumuşak bir parçayı daha erken çatlayan bir şeye dönüştürebilir. Sert ve dayanıklı reçineler genellikle mukavemet geliştirmek için daha fazla doz gerektirir, ancak ek sertleştirmenin artık performansı iyileştirmediği ve bunun yerine kırılganlığı artırdığı bir üst sınırları da vardır.',
  },
  {
    type: 'paragraph',
    html: 'Dökülebilir ve yakılabilir reçinelerin farklı bir önceliği vardır. Nihai kullanımları hassas döküm veya temiz yakma içerebilir, bu nedenle yüzey kalitesi, kül davranışı ve boyutsal kararlılık önemlidir. Çok sert aşırı sertleştirilmiş dökülebilir bir parça, kullanım sırasında kırılgan hale gelebilir veya sonraki proses adımlarında kötü performans gösterebilir. Hesaplayıcı, bu kategorilere daha sıkı bir sınır uygular çünkü en güvenli iş akışı maksimum maruziyet değil, kontrollü sertleştirmedir.',
  },
  {
    type: 'table',
    headers: ['Reçine ön ayarı', 'Ana hedef', 'Aşırı sertleştirme belirtisi', 'Hesaplayıcı davranışı'],
    rows: [
      ['Standart', 'Genel sertlik ve güvenli kullanım', 'Sararma ve kırılgan ince detaylar', 'Orta düzey temel süre ve orta sınır.'],
      ['Esnek', 'Yapışkanlığı giderirken uzamayı korumak', 'Esneklik kaybı ve yırtılma', 'Daha uzun temel süre ve ihtiyatlı doz hassasiyeti.'],
      ['Sert / Dayanıklı', 'Mühendislik sertliği ve mukavemetine ulaşmak', 'Dayanıklı arıza yerine kırılgan kırılma', 'Daha yüksek temel süre ve isteğe bağlı sıcak sertleştirme.'],
      ['Dökülebilir', 'Döküm işleminden önce temiz kullanım', 'Kırılgan desenler ve yüzey kararması', 'Agresif maruziyeti önlemek için daha düşük güvenlik sınırı.'],
      ['Yakılabilir', 'Termal yakmadan önce kontrollü sertleştirme', 'Yonga veya boyutsal stres', 'Tutucu sınırla orta düzey süre.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Hesaplayıcıdan sonra ekstra dakika eklemek',
    items: [
      { pro: 'Kısa bir çevrim sırasında bir yüz gölgeliyse yardımcı olabilir.', con: 'Parça döndürülmediğinde zaten maruz kalmış yüzeyleri bozabilir.' },
      { pro: 'Çok kalın veya koyu parçalarda yapışkanlığı azaltabilir.', con: 'Dayanıklı ve esnek reçinelerin daha kırılgan olmasına neden olabilir.' },
      { pro: 'Denetimden sonra ikinci kısa çevrim olarak kullanışlıdır.', con: 'Güvenlik sınırını kontrol etmeden rutin alışkanlık olarak güvensizdir.' },
    ],
  },
  { type: 'title', text: 'Teknik Reçine Son Sertleştirmede Sıcaklık', level: 2 },
  {
    type: 'paragraph',
    html: 'Bazı mühendislik reçineleri, ısı moleküler hareketliliği artırdığı ve polimer ağının amaçlanan özelliklerine ulaşmasına yardımcı olduğu için yüksek son sertleştirme sıcaklığı belirtir. Sıcak sertleştirme, uyumlu malzemeler için ısı sehim sıcaklığını, modülü ve nihai mukavemeti iyileştirebilir. Her reçineye körü körüne uygulanmamalıdır. Standart reçinede basılmış bir minyatür hiç ısı gerektirmeyebilirken, dayanıklı bir mühendislik reçinesi üretici verilerine bağlı olarak 40-60 °C\'den faydalanabilir. Bu nedenle hesaplayıcı, ısının varsayılmadığı reçine aileleri için oda sıcaklığı ve yararlı olduğu yerde mütevazı bir sıcaklık hedefi döndürür.',
  },
  {
    type: 'paragraph',
    html: 'Sıcaklık kontrolü aynı zamanda bir güvenlik meselesidir. Çok fazla ısı ince bölümleri deforme edebilir, destek izlerini yumuşatabilir veya sararmayı hızlandırabilir. Isıtmalı odası olmayan bir yıkama ve sertleştirme istasyonu, laboratuvar fırınına eşdeğer olarak ele alınmamalıdır. Reçine veri sayfası kesin bir termal çevrim belirtiyorsa, bu veri sayfası geçerlidir. Hesaplayıcı, yaygın masaüstü iş akışları için pratik bir tahmin aracıdır, sertifikalı tıbbi, dişçilik, havacılık veya döküm proses validasyonunun yerini almaz.',
  },
  {
    type: 'card',
    title: 'Çıktı oda sıcaklığı dediğinde',
    html: 'Oda sıcaklığı, hesaplayıcının bu reçine ön ayarı için ısıtmalı bir son sertleştirme gerektirmediği anlamına gelir. Parçanın soğuk, ıslak veya hava akımı olan bir atölyede sertleştirilebileceği anlamına gelmez. Parçayı kuru tutun ve maruziyetten önce reçinenin normal bir iç ortam sıcaklığına ulaşmasını bekleyin.',
  },
  {
    type: 'tip',
    title: 'IPA çıkarmasından hemen sonra sertleştirmekten kaçının',
    html: 'Yıkamadan sonra alkolün deliklerden, boşluklardan ve kabartma yazılardan buharlaşmasına izin verin. On ila otuz dakikalık kurutma, bir dakika daha UV eklemekten daha önemli olabilir.',
  },
  { type: 'title', text: 'Az ve Aşırı Sertleştirilmiş Reçine Parçalarının Teşhisi', level: 2 },
  {
    type: 'paragraph',
    html: 'Az sertleştirilmiş reçine parçalar genellikle yapışkan yüzeyler, zayıf küçük özellikler, kalıcı koku, yumuşak kenarlar veya eldivenlere geçen kalıntılar gösterir. Bu belirtiler en çok parça iyice yıkanmadığında, ıslak sertleştirildiğinde, büyük duvar kalınlığına sahip olduğunda veya odanın içinde gölgede kaldığında yaygındır. Aşırı sertleştirilmiş parçalar farklı belirtiler gösterir: kırılgan kırılma, sararma, tebeşirimsi yüzeyler, kıvrılmış ince kenarlar veya esneklik kaybı. Çözüm belirtiye bağlıdır. Daha fazla UV her reçine baskı sorununun cevabı değildir.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Kırılgan ve sarı, maruziyet eklemeyi bırakın anlamına gelir',
    html: 'Bir parça zaten kırılgan veya gözle görülür şekilde sararmışsa, ekstra sertleştirme tokluğu geri getirmez. Yeniden yazdırın, zamanlayıcı değerini azaltın, döndürmeyi iyileştirin ve sınıra uyun.',
  },
  {
    type: 'summary',
    title: 'Sorun giderme sırası',
    items: [
      'Parçanın sertleştirmeden önce yıkandığını ve kurutulduğunu onaylayın.',
      'Desteklerin veya model yönünün UV gölgeleri oluşturup oluşturmadığını kontrol edin.',
      'Ortalama model boyutunu değil, en kalın duvarı girin.',
      'Kaba tahmin çok uzun olduğunda güvenlik sınırını kullanın.',
      'Statik bir maruziyeti uzatmak yerine karmaşık parçaları döndürün.',
    ],
  },
  {
    type: 'table',
    headers: ['Belirti', 'Olası neden', 'Düzeltme'],
    rows: [
      ['Sertleştirmeden sonra yapışkan yüzey', 'Kalıntı reçine veya IPA, yetersiz doz veya gölgeli yüz', 'Kirlenmişse tekrar yıkayın, tamamen kurutun, ardından kısa bir döner çevrim uygulayın.'],
      ['İnce özellikler kolayca kırılır', 'Aşırı sertleştirme veya doğası gereği kırılgan reçine', 'Zamanlayıcıyı azaltın ve yakın LED yerleşiminden kaçının.'],
      ['Bir taraf sarı, diğer taraf yumuşak', 'Eşit olmayan oda maruziyeti', 'Mesafeyi artırın ve sertleştirme sırasında döndürün.'],
      ['Esnek reçine sertleşir', 'Elastomerik davranış için doz çok yüksek', 'Daha az süre kullanın ve yapışkan olmayan kullanımda durun.'],
    ],
  },
  { type: 'title', text: 'Bu UV Yıkama ve Sertleştirme İstasyonu Süre Hesaplayıcısı Nasıl Kullanılır', level: 2 },
  {
    type: 'paragraph',
    html: 'Malzeme etiketine en yakın reçine ön ayarıyla başlayın. Şişe dayanıklı, sert, ABS benzeri, mühendislik veya yüksek darbe diyorsa, sert/dayanıklı ön ayarını kullanın. Elastik, bükülebilir veya kauçuk benzeriyse, esnek kullanın. Hassas döküm veya külsüz iş akışları için dökülebilir veya yakılabilir kullanın. Ardından maksimum duvar kalınlığını ölçün. Sertleştirme istasyonunun nominal gücünü girin ve istasyon veya reçine dokümantasyonuna göre 385 nm veya 405 nm seçin. Çıktı zamanlayıcı değeri, çalıştırmanız gereken ilk çevrimdir.',
  },
  {
    type: 'paragraph',
    html: 'Başlat düğmesine basmadan önce kontrol listesini kullanın. Parça kuru, birden çok açıdan görünür ve gölge oluşturan destek yapılarından arınmış olmalıdır. Model karmaşıksa, önerilen sürenin bir kısmı kadar sertleştirin, döndürün ve çevrimin geri kalanını tamamlayın. Hesaplayıcı güvenlik sınırının uygulandığı konusunda uyarırsa, tek bir uzun maruziyetle geçersiz kılmayın. Sınır vardır çünkü bu reçine kategorisinin bu noktanın ötesinde iyileşmektense bozulma olasılığı daha yüksektir.',
  },
  {
    type: 'list',
    items: [
      'Bir reçine veri sayfası doğrulanmış bir son sertleştirme çevrimi verdiğinde üretici talimatlarını kullanın.',
      'İstasyon gücü, dalga boyu veya parça kalınlığı referans iş akışından farklı olduğunda bu hesaplayıcıyı kullanın.',
      'Güçlü solvent kokan veya drenaj deliklerinde sıvı bulunan parçaları sertleştirmeyin.',
      'Daha güçlü ışığın daha güvenli olduğunu varsaymayın; daha hızlı lokal aşırı sertleştirme oluşturabilir.',
      'Başarılı süreleri reçine, renk, duvar kalınlığı ve istasyon modeline göre kaydedin.',
    ],
  },
  {
    type: 'summary',
    title: 'Güvenli son sertleştirme kuralı',
    items: [
      'Önce temizleyin.',
      'Tamamen kurutun.',
      'Hesaplanan pencere içinde sertleştirin.',
      'Kapsama için döndürün.',
      'Reçine kırılgan, sarı veya deforme olmadan durun.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Teknik reçine UV sertleştirme giriş kontrolleri',
    resultsAriaLabel: 'Önerilen reçine son sertleştirme parametreleri',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    resinGroupLabel: 'Reçine ön ayarı',
    stationGroupLabel: 'Sertleştirme istasyonu',
    preparationLabel: 'Sertleştirmeden önce',
    resinTypeLabel: 'Reçine türü',
    standardLabel: 'Standart',
    flexibleLabel: 'Esnek',
    toughLabel: 'Sert / Dayanıklı',
    castableLabel: 'Dökülebilir',
    burnoutLabel: 'Yakılabilir',
    wallThicknessLabel: 'Maksimum duvar kalınlığı',
    wallThicknessHelp: 'UV ışığının sertleştirmek için geçmesi gereken en kalın katı duvarı veya kabuğu kullanın.',
    stationPowerLabel: 'İstasyon gücü',
    stationPowerHelp: 'Sertleştirme istasyonunun veya UV lamba dizisinin nominal elektrik gücü.',
    wavelengthLabel: 'Dalga boyu',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'Parça UV maruziyetinden önce temiz ve mükemmel şekilde kuru olmalıdır. Hala alkol taşıyan parçaları sertleştirmeyin.',
    dryCheckLabel: 'Parça tamamen kuru ve alkol kalıntısından arınmış mı?',
    exposureCheckLabel: 'Parça, ışığın her yüze ulaşacağı şekilde konumlandırılmış mı?',
    supportsCheckLabel: 'Parça gölge oluşturabilecek desteklerden arınmış mı?',
    degradationWarning: 'Aşırı sertleştirme süresi parçayı kırılgan ve sarı yapar. Teknik sınırlara uyun.',
    recommendedTimeLabel: 'Zamanlayıcı ayarı',
    temperatureLabel: 'Sertleştirme sıcaklığı',
    noTemperatureLabel: 'Oda sıcaklığı',
    ambientTemperatureNoteMetric: 'Oda sıcaklığında (18-25 °C) sertleştirin. Bu ön ayar için ısıtmalı oda gerekmez.',
    ambientTemperatureNoteImperial: 'Oda sıcaklığında (64-77 °F) sertleştirin. Bu ön ayar için ısıtmalı oda gerekmez.',
    distanceLabel: 'Işık mesafesi',
    maxSafeLabel: 'Güvenlik sınırı',
    doseIndexLabel: 'UV doz indeksi',
    safetySafeLabel: 'Güvenli pencerede',
    safetyCautionLabel: 'Üst sınıra yakın',
    safetyLimitLabel: 'Güvenlik sınırı uygulandı',
    limitMessage: 'İstenen maruziyet reçine güvenlik sınırını aşar. Sınırlı zamanlayıcı değerini kullanın ve yüzeyler gölgeli ise parçayı çevrimler arasında döndürün.',
    cautionMessage: 'Öneri teknik olarak kullanılabilir ancak bozulma bölgesine yakındır. Parçayı kuru tutun, döndürün ve alışkanlıktan ekstra dakika eklemekten kaçının.',
    safeMessage: 'Öneri, bu reçine profili ve istasyon gücü için normal son sertleştirme penceresi içindedir.',
    timerUnit: 'dk',
    mmUnit: 'mm',
    inchUnit: 'inç',
    cmUnit: 'cm',
    inUnit: 'inç',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
