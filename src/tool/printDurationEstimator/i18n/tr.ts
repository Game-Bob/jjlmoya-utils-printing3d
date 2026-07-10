import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = '3d-baski-suresi-tahmin-edici-katman-yuksekligi-ve-hiz';
const title = 'Katman Yüksekliği ve Hıza Göre 3D Baskı Süresi Tahmin Edici';
const description =
  'Model yüksekliği, katman yüksekliği, baskı hızı, doluluk, karmaşıklık, hareket ek yükü ve filament kullanımını birleştirerek bir dilimleyici açmadan 3D baskı süresini tahmin edin.';

const faqData = [
  {
    question: 'Dilimleyici olmadan 3D baskım ne kadar sürer?',
    answer:
      'Toplam katman sayısı, yaklaşık malzeme hacmi, ortalama baskı hızı, doluluk ve hareketler ile yön değişiklikleri için bir paydan tahmin edebilirsiniz. Nihai işler için bir dilimleyici daha doğrudur.',
  },
  {
    question: 'Katman yüksekliği baskı süresini neden bu kadar değiştirir?',
    answer:
      'Katman yüksekliği Z katman sayısını değiştirir. 0,12 mm profil, aynı model yüksekliği için 0,28 mm profilden çok daha fazla katman oluşturur, bu nedenle yazıcı çevre hatlarını, dolguyu ve katman değiştirme ek yükünü çok daha fazla tekrarlar.',
  },
  {
    question: 'Gerçek baskı süresi neden hız bölü mesafeden daha uzun?',
    answer:
      'Yazıcılar köşelerde, kısa segmentlerde, küçük detaylarda, geri çekmelerde, Z hareketlerinde ve seyahat yollarında istenen hızı nadiren korur. Hızlanma sınırları ve ek yük, gerçek süreyi ideal hareket hesaplamasından daha uzun yapar.',
  },
  {
    question: 'Bu, bir dilimleyici tahmininden daha doğru mu?',
    answer:
      'Hayır. Bu hesaplayıcı erken planlama, teklif verme ve karşılaştırmalı analiz içindir. Bir dilimleyici tam geometriyi, destekleri, dikişleri, hızlanma ayarlarını, ekstrüzyon genişliğini ve takım yolu sırasını inceleyebilir.',
  },
];

const howToData = [
  { name: 'Model yüksekliğini girin', text: 'Modelin veya planlanan baskı işindeki en yüksek nesnenin Z yüksekliğini kullanın.' },
  { name: 'Katman yüksekliğini seçin', text: 'Gerçek baskı profili değerini kullanın, örneğin tipik bir FDM taslak kalite ayarı için 0,20 mm.' },
  { name: 'Hız, ayak izi ve doluluk ekleyin', text: 'Ortalama baskı hızını, yaklaşık bir XY ayak izi alanını ve hedef doluluk yüzdesini kullanın.' },
  { name: 'Karmaşıklık ve ek yükü ayarlayın', text: 'Çok küçük detaylar için karmaşıklığı artırın ve çok sayıda hareket, destek veya geri çekme için ek yükü artırın.' },
  { name: 'Hız senaryolarını karşılaştırın', text: '40, 60 ve 80 mm/s satırlarını kullanarak daha hızlı baskı hızının toplam iş süresini anlamlı şekilde değiştirip değiştirmediğini görün.' },
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D baskı süresi tahmin edici girdileri',
    resultsAriaLabel: 'Tahmini 3D baskı süresi sonuçları',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    modelHeightLabel: 'Model yüksekliği',
    modelHeightHint: 'Baskının en yüksek Z boyutu.',
    layerHeightLabel: 'Katman yüksekliği',
    speedLabel: 'Ortalama baskı hızı',
    footprintLabel: 'Tahmini ayak izi alanı',
    footprintHint: 'Hacim vekili olarak kullanılan yaklaşık XY alanı.',
    infillLabel: 'Doluluk yoğunluğu',
    complexityLabel: 'Karmaşıklık faktörü',
    complexityHint: 'Basit şekiller için 0,80, küçük detaylar ve kısa segmentler için 1,20.',
    overheadLabel: 'Hareket ek yükü',
    filamentDiameterLabel: 'Filament çapı',
    densityLabel: 'Malzeme yoğunluğu',
    timeLabel: 'Tahmini baskı süresi',
    layersLabel: 'Toplam katman',
    materialLabel: 'Malzeme tahmini',
    filamentLabel: 'Filament uzunluğu',
    effectiveSpeedLabel: 'Etkin hız',
    baseTimeLabel: 'Ekstrüzyon süresi',
    overheadTimeLabel: 'Ek yük süresi',
    comparisonLabel: 'Hız karşılaştırması',
    minutesUnit: 'dk',
    hoursUnit: 's',
    layersUnit: 'katman',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Kısa tahmin: dilimleyici ek yükü, yatak ısıtması ve soğutma, gerçek geçen sürenin büyük bir kısmını oluşturabilir.',
    balancedInsight: 'Dengeli tahmin: hız değişiklikleri önemlidir, ancak katman sayısı ve ek yük nihai süreyi hâlâ şekillendirir.',
    highInsight: 'Uzun tahmin: sadece hızı artırmadan önce daha kalın katmanlar, daha düşük doluluk, daha az destek veya modeli bölmeyi düşünün.',
  },
  seo: [
    { type: 'title', text: 'Katman Yüksekliği ve Hızdan 3D Baskı Süresi Nasıl Tahmin Edilir', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Katman yüksekliği ve hıza göre 3D baskı süresi tahmin edici</strong>, bir dilimleyici açmadan önce bir planlama sayısına ihtiyaç duyduğunuzda, birden fazla baskı profilini karşılaştırırken veya kaba boyutlardan bir parça teklifi verirken kullanışlıdır. Temel fikir basittir: model yüksekliğinin katman yüksekliğine bölümü katman sayısını verir ve tahmini ekstrüde edilmiş yol miktarının ortalama hıza bölümü hareket süresini verir. Zor kısım, gerçek FDM baskının temiz bir konveyör bant olmamasıdır. Nozul köşelerde yavaşlar, geri çekmeler ekstrüzyonu kesintiye uğratır, hareketler baskı yapmayan mesafe ekler ve kısa segmentler nadiren komutlanan hıza ulaşır.',
    },
    {
      type: 'paragraph',
      html: 'Bu hesaplayıcı kasıtlı olarak en temel formülün ötesine geçer. <code>yükseklik / katman yüksekliği / hız</code>ın yeterli olduğunu varsaymak yerine, yaklaşık bir model hacmi, doluluk yoğunluğu, ekstrüzyon çizgi genişliği, bir karmaşıklık faktörü, katman değiştirme süresi ve bir hareket ek yükü yüzdesini birleştirir. Sonuç hâlâ bir tahmindir, bir dilimleyici yerine geçmez, ancak kullanıcıların aradığı pratik soruyu yanıtlar: <strong>katman yüksekliğini, doluluğu veya hızı değiştirirsem 3D baskım ne kadar sürer</strong>.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Dengeli baskılar için yaygın FDM katman yüksekliği', icon: 'mdi:layers-outline' },
        { value: '%15-20', label: 'Faydalı hareket ve seyahat ek yükü başlangıç aralığı', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Masaüstü yazıcılar için tipik karşılaştırma hızları', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Malzeme uzunluğu hesaplaması için yaygın filament çapı', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Maksimum hızı değil, ortalama hızı kullanın',
      html: '<p>Dilimleyici profiliniz 120 mm/s diyorsa ancak dış duvarlar 40 mm/s, küçük çevre hatları 25 mm/s ve dolgu 90 mm/s çalışıyorsa, ortalama baskı hızı 120 mm/s değildir. Planlama için gerçekçi bir ortalama hız, profildeki en hızlı hareketten genellikle daha iyi bir tahmin sağlar.</p>',
    },

    { type: 'title', text: 'Katman Yüksekliğinin Süre Üzerinde Neden Bu Kadar Büyük Etkisi Var', level: 2 },
    {
      type: 'paragraph',
      html: 'Katman yüksekliği, yazıcının aynı temel diziyi kaç kez tekrarlaması gerektiğini kontrol eder: çevre hattı, iç yapı, üst ve alt yüzeyler, sonraki adaya hareket ve sonraki katmana Z hareketi. 80 mm yüksekliğindeki bir model 0,20 mm\'de 400 katmana ihtiyaç duyar, ancak 0,12 mm\'de yaklaşık 667 katmana ihtiyaç duyar. Her ince katman geçiş başına biraz daha az plastik kullansa bile, yazıcı çok daha fazla katman geçişi, daha fazla tekrarlanan kontur ve daha fazla yavaş hızlanma sınırlı hareket fırsatı gerçekleştirir.',
    },
    {
      type: 'table',
      headers: ['Model yüksekliği', 'Katman yüksekliği', 'Katman sayısı', 'Planlama yorumu'],
      rows: [
        ['80 mm', '0,28 mm', '286 katman', 'Görünür katman çizgileri olan hızlı taslak profili.'],
        ['80 mm', '0,20 mm', '400 katman', 'Birçok parça için dengeli kalite ve süre.'],
        ['80 mm', '0,12 mm', '667 katman', 'Birçok saat ekleyebilen ince detay profili.'],
        ['160 mm', '0,20 mm', '800 katman', 'Yüksek parçalar normal hızlarda bile süre yoğun hale gelir.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Katman yüksekliği gerçek darboğaz olduğunda',
      badge: 'Katmanları kontrol et',
      html: '<p>Baskı hızını artırmak tahmini neredeyse değiştirmiyorsa, iş katman sayısı, kısa segmentler ve ek yük tarafından domine ediliyor olabilir. Bu durumda, 0,12 mm\'den 0,20 mm\'ye geçmek, yazıcıyı 60 mm/s\'den 80 mm/s\'ye çıkarmaktan daha fazla zaman kazandırabilir.</p>',
    },
    {
      type: 'summary',
      title: 'Katman yüksekliği karar kuralları',
      items: [
        'Z yüzey kalitesinin kritik olmadığı prototipler, braketler, fikstürler ve parçalar için daha kalın katmanlar kullanın.',
        'Yumuşak eğriler, küçük metin, minyatürler ve kozmetik yüzeyler için daha ince katmanlar kullanın.',
        'Yüksek parçalarda, her ek katman ek yükü tekrarladığından katman yüksekliği değişiklikleri hızla birikir.',
      ],
    },

    { type: 'title', text: 'Baskı Hızı, Hızlanma ve Karmaşıklık Faktörü', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir baskı hızı değeri bir hedeftir, bir vaat değildir. Yazıcı o hıza hızlanmalı, köşelerden önce yavaşlamalı, jerk veya junction deviation sınırlarına uymalı ve bazen soğutma, köprüler, çıkıntılar, minimum katman süresi ve küçük adalar için yavaşlamalıdır. Bu nedenle bir <strong>baskı hızından baskı süresine hesaplayıcı</strong>nın bir karmaşıklık faktörüne ihtiyacı vardır. Temiz bir kutu ve uzun düz dolgu çizgileri istenen hıza yakın çalışabilir. Detaylı bir figür, logo, kafes, dişli parça veya organik heykel, zamanının çoğunu hızlanma sınırlarının maksimum hızdan daha önemli olduğu kısa segmentlerde geçirebilir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Basit geometri',
          description: 'Kutular, paneller ve uzun dolgu yolları daha düşük bir karmaşıklık çarpanı kullanabilir.',
          icon: 'mdi:cube-outline',
          points: ['Daha uzun sürekli yollar', 'Daha az ada', 'Daha az geri çekme ek yükü'],
        },
        {
          title: 'Karma geometri',
          description: 'Çoğu braket, muhafaza, aksesuar ve ev parçası varsayılan çarpana yakındır.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Çevre hatları ve dolgu önemlidir', 'Orta düzeyde hareketler', 'Dengeli hızlanma kayıpları'],
        },
        {
          title: 'Detaylı geometri',
          description: 'Küçük özellikler, metin, kafesler, destekler ve organik kavisli yüzeyler daha yüksek bir çarpan gerektirir.',
          icon: 'mdi:vector-polyline',
          points: ['Kısa segmentler baskın', 'Daha fazla başlatma ve durdurma', 'Daha fazla geri çekme ve hareket'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Baskı hızını artırmak: ne iyileşir ve ne iyileşmez',
      items: [
        { pro: 'Uzun dolgu çizgileri hız arttığında daha hızlı bitebilir.', con: 'Dış duvarlar ve küçük detaylar hâlâ profil sınırlamalarıyla kısıtlanabilir.' },
        { pro: 'Büyük, düşük detaylı prototipler daha hızlı hareketten faydalanabilir.', con: 'Hızlanma, çınlama, ekstrüzyon akışı ve soğutma kullanılabilir hızı sınırlayabilir.' },
        { pro: 'Hız karşılaştırma tablosu potansiyel tasarrufu hızla gösterir.', con: 'Minimum katman süresi gibi dilimleyiciye özgü yavaşlamaları tahmin edemez.' },
      ],
    },
    {
      type: 'message',
      title: 'Hız tahminleri göreceli karşılaştırma için en kullanışlıdır',
      ariaLabel: 'Hız tahmini notu',
      html: '<p>Yönlü karşılaştırma için 40, 60 ve 80 mm/s satırlarını kullanın. 80 mm/s yalnızca küçük bir miktar tasarruf sağlıyorsa, baskı muhtemelen ham hızdan çok katmanlar, ek yük veya karmaşıklık tarafından sınırlanıyordur.</p>',
    },

    { type: 'title', text: 'Doluluk, Hacim ve Malzeme Süresi', level: 2 },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı, ayak izi alanını ve model yüksekliğini kaba bir hacim vekili olarak kullanır ve ardından bu hacmi etkin bir katı oranıyla ölçeklendirir. Bu, ağ geometrisini okumak kadar kesin değildir, ancak önemli bir fiziksel gerçeği yakalar: doluluk azaltıldığında duvarlar ve deriler kaybolmaz. %15 dolulukla basılan bir parçanın hâlâ çevre hatları, üst katmanlar, alt katmanlar, küçük katı özellikler ve bazen destek arayüzleri vardır. Hesaplayıcı, tahminde bir kabuk payı tutar, böylece düşük doluluk baskı süresini gerçekçi olmayan bir şekilde neredeyse sıfıra düşürmez.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Geniş nesneler, kutular, düz plakalar, tepsiler ve büyük muhafazalar için ayak izi alanını artırın.',
        'Dar kuleler, ince figürler, küçük braketler ve açık çerçeveler için ayak izi alanını azaltın.',
        'Doluluk yüzdesini toplam parça yoğunluğu olarak değil, bir planlama kontrolü olarak kullanın.',
        'Desteklerin, kenarların, salların, temizleme kulelerinin ve çok renkli atıkların modelin kendisi dışında süre eklediğini unutmayın.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Örnek: %20 doluluk neden %20 baskı süresi değildir',
      html: '<p>80 mm yüksekliğindeki bir muhafaza dört duvara, altı alt katmana, altı üst katmana, vida bosslarına ve büyük bir iç boşluğa sahip olabilir. Doluluğu %40\'tan %20\'ye düşürmek iç yol uzunluğunu azaltır, ancak duvarlar ve deriler her katmanda hâlâ basılır. Çok sayıda çevre hattına sahip modellerde, duvar sayısını veya katman yüksekliğini değiştirmek, yalnızca doluluğu değiştirmekten süreyi daha fazla etkileyebilir.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ayak izi alanı', definition: 'Modelin kapladığı yaklaşık XY alanı, burada kaba bir hacim girişi olarak kullanılır.' },
        { term: 'Etkin katı oranı', definition: 'Tahmini ekstrüde hacmi hesaplamak için kullanılan kabuk malzemesi ve dolgu malzemesinin planlama karışımı.' },
        { term: 'Ekstrüzyon boncuğu', definition: 'Nozul tarafından yerleştirilen plastik boncuk; kesiti katman yüksekliğine ve ekstrüzyon genişliğine bağlıdır.' },
        { term: 'Filament uzunluğu', definition: 'Tahmini plastik hacmini sağlamak için gereken ham filament uzunluğu.' },
      ],
    },

    { type: 'title', text: 'Hareket Ek Yükü: Basit Hesaplayıcılarda Eksik Parça', level: 2 },
    {
      type: 'paragraph',
      html: 'Basit bir süre tahmini genellikle ekstrüzyon yapmayan hareketi görmezden gelir. Gerçek yazıcılar adalar arasında hareket eder, filament geri çeker ve doldurur, siler, Z\'de zıplar, basılı parçalardan kaçınır, yön değiştirir ve bazen soğutma için duraklar. Bu eylemler görünür malzeme oluşturmaz, ancak gerçek zaman tüketir. Sabit bir ek yük yüzdesi, tam bir dilimleyici takım yolunuz olmadığında hareketleri hesaba katmanın pratik bir yoludur. Varsayılan %15-20 aralığı, sıradan tek malzemeli FDM parçaları için kullanışlı bir başlangıç noktasıdır.',
    },
    {
      type: 'table',
      headers: ['Baskı koşulu', 'Önerilen ek yük', 'Neden'],
      rows: [
        ['Tek basit parça', '%10-15', 'Az ada, daha az geri çekme, çoğunlukla sürekli yollar.'],
        ['Tipik işlevsel parça', '%15-22', 'Orta düzeyde çevre hatları, dolgu ve hareketler.'],
        ['Bir plakada çok sayıda küçük parça', '%22-35', 'Nesneler arasında sık hareket ve tekrarlanan başlangıçlar.'],
        ['Destekler veya detaylı yüzeyler', '%25-40', 'Destek arayüzleri, kısa segmentler ve geri çekmeler süre ekler.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yatak ısıtması dahil değildir',
      badge: 'Toplam iş süresi',
      html: '<p>Tahmin, hareket ve ekstrüzyon süresine odaklanır. Gerçek makine kullanımını planlarken yatak ısıtması, nozul ısıtması, algılama, mesh seviyeleme, filament yükleme, soğutma ve parça çıkarma için ayrı süre ekleyin.</p>',
    },
    {
      type: 'tip',
      title: 'Ek yükü gerçek bir baskıdan kalibre edin',
      html: '<p>Tamamlanmış bir işi alın, dilimleyici veya kronometre süresini bu hesaplayıcıyla karşılaştırın, ardından tahmin eşleşene kadar ek yükü ve karmaşıklığı ayarlayın. Bu yerel kalibrasyon, sonsuza kadar genel değerler kullanmaktan gelecekteki planlamayı daha fazla iyileştirecektir.</p>',
    },

    { type: 'title', text: 'Bu Hesaplayıcıya Ne Zaman Güvenmeli ve Ne Zaman Bir Dilimleyici Kullanmalı', level: 2 },
    {
      type: 'paragraph',
      html: 'Bu araç, erken tahminler, teklif görüşmeleri, sınıf gösterimleri ve bir profile bağlanmadan önce katman yüksekliğine karşı hızı karşılaştırmak için en güçlüdür. Tam STL henüz mevcut olmadığında, bir müşteri yalnızca yaklaşık boyutlar sağladığında veya bir değişikliği araştırmaya değer olup olmadığını bilmek istediğinizde özellikle kullanışlıdır. Üretim kritik işler için dilimleyici tahminlerinin yerini alması için tasarlanmamıştır, çünkü dilimleyiciler tam ağ geometrisini, özellik bazlı hızları, destek yollarını, duvar sırasını, üst ve alt yüzeyleri, dikiş yerleşimini, hızlanma kontrolünü ve makineye özel ürün yazılımı davranışını inceler.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        '0,12 mm, 0,20 mm ve 0,28 mm katman profillerini hızlıca karşılaştırmak için bu hesaplayıcıyı kullanın.',
        'Hızı değiştirmeden önce yüksek bir modelin katman sayısıyla sınırlı olup olmadığını tahmin etmek için kullanın.',
        'Yaklaşık boyutlardan kaba bir malzeme hacmi, filament uzunluğu ve ağırlığı elde etmek için kullanın.',
        'Malzeme satın almadan, makine süresi ayırmadan veya teslim tarihi sözü vermeden önce bir dilimleyici kullanın.',
      ],
    },
    {
      type: 'table',
      headers: ['Soru', 'Hesaplayıcı yanıtı', 'Dilimleyici yanıtı'],
      rows: [
        ['Daha kalın katmanlar zaman kazandırır mı?', 'Katman sayısından iyi yönsel tahmin.', 'Belirli yol ve yüzey için kesin sonuç.'],
        ['80 mm/s, 60 mm/s\'den çok daha hızlı olur mu?', 'Yararlı hız senaryosu karşılaştırması.', 'Hız ve hızlanma özelliği başına kesin davranış.'],
        ['Ne kadar filament gerekebilir?', 'Yaklaşık hacim, uzunluk ve ağırlık.', 'Profile özel malzeme raporu.'],
        ['Bu üretim işini teklif edebilir miyim?', 'Yalnızca ön tarama için.', 'Nihai teklif ve planlama için gerekli.'],
      ],
    },
    {
      type: 'summary',
      title: 'En iyi iş akışı',
      items: [
        'Bu tahmin ediciyle katman yüksekliği, hız ve doluluk seçeneklerini daraltarak başlayın.',
        'Kendi makinenizden bilinen bir baskı kullanarak karmaşıklığı ve ek yükü ayarlayın.',
        'Maliyet, süre veya teslimata bağlanmadan önce nihai aday profili yeniden dilimleyin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
