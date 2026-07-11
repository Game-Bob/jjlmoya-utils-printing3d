import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'warping-risk-simulator-3d-baski';
const title = '3D Baskı için Warping Riski Simülatörü';
const description = 'Malzeme büzülmesi, ayak izi alanı, en uzun köşegen, yatak sıcaklığı, oda sıcaklığı ve kapalı hazne koşullarına göre ilk katman kalkmasını ve warping riskini tahmin edin.';

const faqData = [
  {
    question: 'Neden en uzun köşegen, ayak izi alanından warpingle daha fazla etkiliyor?',
    answer: 'En uzun köşegen, en büyük sürekli büzülme yolunu temsil eder. Uzun bir parça, toplam temas alanı büyük görünse bile köşeleri kaldıracak kadar doğrusal büzülme biriktirebilir.',
  },
  {
    question: 'Bu simülatör baskımın eğrilmeyeceğini garanti eder mi?',
    answer: 'Hayır. Bu bir risk tahminidir. Nemli filament, kirli baskı tablası, ilk katman yüksekliği, hava akımları, parça geometrisi ve dilimleyici soğutma seçimleri sonucu değiştirebilir.',
  },
  {
    question: 'Hangi malzemeler en çok kapalı hazneye ihtiyaç duyar?',
    answer: 'ABS, ASA, Nylon ve PC, daha yüksek işlem sıcaklıklarını, daha güçlü büzülmeyi ve daha büyük soğutma gerilimini birleştirdikleri için bu modelde hazneye en duyarlı olanlardır.',
  },
  {
    question: 'Brim genişliği nasıl tahmin edilir?',
    answer: 'Simülatör, en uzun köşegenin yüzde beşinden başlar ve hesaplanan riske göre ölçeklendirir, ardından sonucu pratik dilimleyici değerlerine sabitler.',
  },
];

const howToData = [
  { name: 'Malzemeyi seçin', text: 'Simülatörün bir büzülme sınıfı uygulayabilmesi için PLA, PETG, ABS, ASA, Nylon, PC veya TPU seçin.' },
  { name: 'Ayak izini ve köşegeni girin', text: 'Yatağa temas eden yüzey alanını ve parçanın en uzun köşeden köşeye mesafesini kullanın.' },
  { name: 'Termal ortamı ayarlayın', text: 'Yatak ve oda sıcaklığını girin ve yazıcının kapalı bir haznesi olup olmadığını belirtin.' },
  { name: 'Dilimleyici ayarlarını kopyalayın', text: 'Önerilen brim, yapışma, soğutma ve hazne ayarlarını başlangıç profili olarak kullanın.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Birim sistemi',
    unitMetric: 'Metrik',
    unitImperial: 'Imperial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    materialLabels: {
      PLA: 'PLA',
      PETG: 'PETG',
      ABS: 'ABS',
      ASA: 'ASA',
      Nylon: 'Naylon',
      PC: 'PC',
      TPU: 'TPU',
    },
    material: 'Malzeme',
    footprintArea: 'Ayak izi alanı',
    footprintHelp: 'Baskı tablasına gerçekten temas eden alan, modelin toplam yüzey alanı değil.',
    diagonal: 'En uzun köşegen',
    diagonalHelp: 'İlk katmanın en uzun köşeden köşeye mesafesi. Bu ana termal gerilim vektörüdür.',
    bedTemperature: 'Yatak sıcaklığı',
    bedTemperatureWarning: 'Sıcaklık uyarısı',
    ambientTemperature: 'Oda sıcaklığı',
    chamber: 'Kapalı hazne',
    chamberOn: 'Kapalı veya aktif olarak korumalı',
    chamberOff: 'Açık yazıcı',
    riskLow: 'Düşük',
    riskMedium: 'Orta',
    riskHigh: 'Yüksek',
    riskCritical: 'Kritik',
    riskIndex: 'Risk indeksi',
    thermalIndex: 'Termal gerilim indeksi',
    deltaT: 'Delta T',
    brimRecommendation: 'Brim önerisi',
    adhesionDiagnosis: 'Yapışma teşhisi',
    adhesionStrength: 'Yapışma gücü merdiveni',
    criticalWarnings: 'Kritik uyarılar',
    whyDiagonalMatters: 'Köşegen neden önemlidir',
    recommendedSettings: 'Önerilen dilimleyici kurulumu',
    copySettings: 'Ayarları kopyala',
    copied: 'Kopyalandı',
    simulatorNotice: 'Bu bir risk tahminidir, başarı garantisi değildir. Filament nemi, yatak kirliliği, Z ofseti, hava akımları ve soğutma değişiklikleri dışsal değişkenler olmaya devam eder.',
    warnings: {
      openTechnicalMaterial: '{material} kapalı hazne olmadan ciddi bir warping durumudur.',
      bedTemperatureHigh: '{material} için yatak sıcaklığı önerilen {min}-{max} {unit} aralığının üzerinde. Yumuşama, fil ayağı veya yapışma kusurları bekleyin.',
      bedTemperatureLow: '{material} için yatak sıcaklığı önerilen {min}-{max} {unit} aralığının altında. İlk katman tutuşu bu geometri için çok zayıf olabilir.',
      narrowFootprint: 'Ayak izi köşegene kıyasla dar, bu nedenle köşe kalkması hızla birikebilir.',
      highDeltaT: 'Yatak ve oda sıcaklığı arasındaki fark çok yüksek; hava akışını ve soğutma hızını kontrol edin.',
    },
    diagnosis: {
      critical: 'Brim zorunludur. Özel bir yapışma yüzeyi kullanın ve bu malzemeyi açık havada basmaktan kaçının.',
      highEnclosed: 'Geniş brim ve yapıştırıcı şiddetle önerilir.',
      highOpen: 'Başlamadan önce brim, yapıştırıcı ve kapalı hazne kullanın.',
      mediumEasyMaterial: 'Temiz bir PEI yüzeyi kullanın; keskin köşeler için brim isteğe bağlıdır.',
      medium: 'Köşelerde brim veya mouse ears kullanın ve yatak yapışmasını doğrulayın.',
      low: 'Normal ilk katman koşullarında güvenlidir.',
    },
    adhesionOptions: {
      low: ['Temiz PEI veya dokulu yüzey: normal tutuş, en kolay çıkarma.'],
      medium: ['Yapıştırıcı çubuk veya PVA ayırma tabakası: hafif ekstra tutuş ve daha güvenli PETG çıkarma.', 'Mouse ears: tam brim olmadan köşeler için yerel tutuş.'],
      high: ['Geniş brim artı yapıştırıcı çubuk: orta düzeyde temizlikle geniş mekanik destek.', 'Magigoo veya benzeri yapıştırıcı: ABS, ASA, PETG ve Nylon varyantları için daha güçlü tutuş.'],
      criticalDefault: ['Tam genişlikte brim: maksimum ilk katman ayak izi.', 'Yüksek mukavemetli yapıştırıcı: PEI artı yüksek mukavemetli yapıştırıcı kullanın.', 'Kapalı hazne: yapıştırıcının tutarlı çalışması için gerekli.'],
      criticalTechnical: ['Tam genişlikte brim: maksimum ilk katman ayak izi.', 'Yüksek mukavemetli yapıştırıcı: Nylon veya PC için malzemeye özel yapıştırıcı kullanın.', 'Kapalı hazne: yapıştırıcının tutarlı çalışması için gerekli.'],
    },
    slicerSettings: {
      brimWidth: 'Brim genişliği: {value}',
      bedAdhesion: 'Yatak yapışması: {value}',
      lowAdhesion: 'Temiz PEI veya dokulu yüzey',
      highAdhesion: 'PEI artı yapıştırıcı çubuk, Magigoo veya malzemeye özel yapıştırıcı',
      cooling: 'Soğutma: {value}',
      normalCooling: 'Katman 3\'ten sonra normal parça soğutması',
      technicalCooling: 'İlk 5-8 katman için parça soğutması kapalı',
      enclosedChamber: 'Parça camsı geçiş aralığının altına soğuyana kadar hazneyi kapalı tutun',
      openChamber: 'Yazıcıyı hava akımlarından ve oda hava akışından koruyun',
      skirtEnough: '0 mm, etek yeterlidir',
    },
    diagonalExplanation: 'En uzun köşegen, ana gerilim vektörü gibi davranır: parça soğudukça, büzülme bu açıklık boyunca birikir ve ayak izi alanı cömert görünse bile köşeleri yükler.',
  },
  seo: [
    { type: 'title', text: '3D baskıyı dilimlemeden önce warping riski nasıl tahmin edilir', level: 2 },
    {
      type: 'paragraph',
      html: 'Warping yalnızca bir malzeme sorunu değildir ve yalnızca bir yatak yapışması sorunu değildir. Baskı katmanı soğuduğunda, büzüldüğünde ve ilk katmanın tutuşunu aşacak kadar iç gerilim oluşturduğunda ortaya çıkar. Küçük bir ABS braketi, polimer güçlü bir şekilde büzüldüğü için başarısız olabilir; büyük bir PLA tabelası, köşegen geniş bir açıklıkta büzülme biriktirecek kadar uzun olduğu için başarısız olabilir. Bu nedenle yararlı soru basitçe <strong>bu malzeme eğrilir mi?</strong> değil, <strong>bu geometri ve termal ortam, baskı tablasının dayanabileceğinden daha fazla çekme kuvveti mi oluşturuyor?</strong> olmalıdır.',
    },
    {
      type: 'paragraph',
      html: 'Bu simülatör, sezgisel bir Termal Gerilim İndeksi kullanır: <strong>malzeme büzülme faktörü çarpı en uzun köşegen çarpı yatak-oda sıcaklık farkı, bölü ayak izi alanı</strong>. Formül bilinçli olarak pratiktir. Sonlu eleman analizi olduğunu iddia etmez, ancak operatörlerin baskıdan önce ölçebileceği değişkenleri birleştirir: malzeme ailesi, temas alanı, en uzun doğrusal açıklık, yatak sıcaklığı, oda sıcaklığı ve yazıcının kapalı olup olmadığı.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sonucu önleyici bir sinyal olarak kullanın',
      badge: 'Tahmin',
      html: 'Düşük bir puan, ilk katman temiz ve iyi ayarlanmışsa baskının kalkmasının olası olmadığı anlamına gelir. Yüksek veya kritik bir puan, baskıdan önce dilimleyici profilinin değiştirilmesi gerektiği anlamına gelir: daha geniş brim, yapıştırıcı, daha az soğutma, hava akımı koruması veya farklı bir malzeme. Simülatör, nemli filament, yağlı PEI, yataktan çok uzak bir nozul veya köşelerde küçük temas noktaları olan bir parçayı göremez.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '%5', label: 'en uzun köşegenin bir kesri olarak başlangıç brim genişliği', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'ABS, ASA, Nylon ve PC için ciddi açık hazne çarpanı', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'Termal Gerilim İndeksinden eşlenen risk ölçeği', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'En uzun köşegen neden alandan daha tehlikeli olabilir', level: 2 },
    {
      type: 'paragraph',
      html: 'Ayak izi alanı, yapışma için ne kadar yüzey bulunduğunu gösterir. Köşegen, termal büzülmenin bir köşeye veya ince uca ulaşmadan önce ne kadar birikebileceğini gösterir. Aynı alana sahip iki parça çok farklı davranabilir: kompakt bir kare taban, her yönde kısa büzülme yollarına sahiptir; uzun dar bir şerit ise büzülmeyi tek bir hat boyunca yoğunlaştırır ve uçlarda kalkmaya çalışır.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kompakt ayak izi',
          description: 'Kare veya yuvarlak bir taban, büzülmeyi birçok kısa yol boyunca dağıtır. Köşeler merkeze daha yakındır, bu nedenle kaldırma için kaldıraç kolu daha küçüktür.',
          icon: 'mdi:crop-square',
          points: ['Daha iyi yük dağılımı', 'Daha düşük köşe kaldıracı', 'Kolay malzemelerde brim genellikle isteğe bağlıdır'],
        },
        {
          title: 'Uzun köşegen ayak izi',
          description: 'Uzun bir dikdörtgen, çerçeve, bıçak, hazne paneli veya ray, büzülmenin tek bir baskın yön boyunca birikmesine izin verir. Uçlar ve köşeler en yüksek soyma kuvvetini alır.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Daha yüksek birikmiş gerilim', 'Köşeler önce kalkar', 'Brim veya mouse ears genellikle gerekli'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Köşegen hızlıca nasıl ölçülür',
      html: 'Dilimleyici önizlemesinde, ilk katmana yukarıdan bakın ve yatağa temas eden parçanın en uzun köşeden köşeye mesafesini ölçün. Dikdörtgen bir ayak izi için, yalnızca X veya Y uzunluğunu değil, dikdörtgenin köşegenini kullanın. Düzensiz bir parça için, iki dış nokta arasındaki en uzun düz açıklığı kullanın.',
    },
    {
      type: 'table',
      headers: ['Geometri deseni', 'Tipik belirti', 'Önleyici eylem'],
      rows: [
        ['Uzun ince ray', 'Orta bağlı kalırken uçlar kalkar', 'Her iki uçta brim veya mouse ears kullanın'],
        ['Büyük düz panel', 'Köşeler kademeli olarak yukarı kıvrılır', 'Kapalı hazne, yavaş soğutma ve yapıştırıcı kullanın'],
        ['Küçük uzun parça', 'Taban bağlı kalır ancak kule sallanır', 'Warping ana risk değil; stabiliteyi iyileştirin'],
        ['Açık çerçeve', 'İç köşeler içe doğru çeker', 'Brim ekleyin, ilk katman genişliğini artırın, fanı azaltın'],
      ],
    },
    { type: 'title', text: 'Simülatör tarafından kullanılan malzeme büzülme sınıfları', level: 2 },
    {
      type: 'paragraph',
      html: 'Farklı termoplastikler, ekstrüzyon sıcaklığından oda sıcaklığına soğurken farklı miktarlarda büzülür. PLA ve TPU genellikle affedicidir çünkü daha düşük sıcaklıklarda baskı yaparlar ve daha az soğutma gerilimi oluştururlar. PETG ortadadır: güçlü bir şekilde yapışır ancak yine de keskin köşeleri çekebilir. ABS, ASA, Nylon ve PC, daha yüksek ekstrüzyon sıcaklıklarını, daha güçlü büzülmeyi ve sıcak, sabit bir hazneye daha fazla ihtiyacı birleştirdikleri için yüksek riskli teknik malzemeler olarak ele alınır.',
    },
    {
      type: 'table',
      headers: ['Malzeme', 'Büzülme sınıfı', 'Yaygın yatak stratejisi', 'Hazne duyarlılığı'],
      rows: [
        ['PLA', 'Düşük', 'Temiz PEI, ılımlı yatak', 'Düşük'],
        ['TPU', 'Düşük', 'Temiz yüzey, aşırı sıkıştırmadan kaçının', 'Düşük'],
        ['PETG', 'Orta', 'Dokulu PEI veya ayırma tabakası', 'Orta'],
        ['ABS', 'Yüksek', 'PEI artı yapıştırıcı veya ABS bulamacı', 'Çok yüksek'],
        ['ASA', 'Yüksek', 'PEI artı yapıştırıcı, kontrollü soğutma', 'Çok yüksek'],
        ['Nylon', 'Yüksek', 'Malzemeye özel yapıştırıcı, kuru filament', 'Çok yüksek'],
        ['PC', 'Yüksek', 'Yüksek sıcaklık yatağı ve yapıştırıcı', 'Çok yüksek'],
      ],
    },
    {
      type: 'proscons',
      title: 'Warpingle mücadele etmek yerine malzeme değiştirme',
      items: [
        { pro: 'ABS\'den ASA\'ya geçmek, benzer termal davranışı korurken dış dayanıklılığı artırabilir.', con: 'ASA hala hazne disiplini gerektirir ve uzun parçalarda eğrilebilir.' },
        { pro: 'ABS\'den PETG\'ye geçmek büzülmeyi azaltır ve braketler ile muhafazalar için genellikle yeterlidir.', con: 'PETG, ABS veya PC\'den daha düşük ısı direncine ve farklı sertliğe sahiptir.' },
        { pro: 'Lif dolgulu Nylon, bazı büzülme yollarını azaltabilir ve sertliği iyileştirebilir.', con: 'Kurutma, aşınmaya dayanıklı nozullar ve güçlü yapışma kontrolü gerektirir.' },
      ],
    },
    { type: 'title', text: 'Delta T: yatak sıcaklığı ve oda sıcaklığının neden ikisi de önemlidir', level: 2 },
    {
      type: 'paragraph',
      html: 'Simülatör, <strong>Delta T</strong>\'yi yatak sıcaklığı eksi oda sıcaklığı olarak kullanır. Bu, nozul sıcaklığı ile aynı değildir, ancak parçanın alt kısmının deneyimlediği termal gradyan için yararlı bir temsilcidir. Sıcak bir yatak, ara yüzeydeki erken büzülmeyi azaltır, ancak çok soğuk bir oda veya güçlü hava akışı, üst katmanlardan yine de ısı çekebilir ve sabitlenmiş taban ile soğuyan parça gövdesi arasında bir gerilim gradyanı oluşturabilir.',
    },
    {
      type: 'paragraph',
      html: 'PLA için, ılımlı bir Delta T zararsız olabilir çünkü malzeme daha az agresif bir şekilde büzülür. ABS, ASA, Nylon ve PC için, aynı yatak sıcaklığındaki aynı geometri, yazıcı hava akımlarına açıksa başarısız olabilir. Bu nedenle, bu teknik malzemeler kapalı hazne olmadan basıldığında hesaplama ciddi bir çarpan uygular.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'ABS, ASA, Nylon veya PC ile açık yazıcı',
      badge: 'Kritik durum',
      html: 'Hazne açıksa, baskı yerel soğutma, kapı hareketi, HVAC hava akışı ve hızlı katman sıcaklığı değişikliklerine maruz kalır. İlk katman ilk yirmi dakika mükemmel görünebilir ve parça daha fazla büzülme gerilimi depoladıkça daha sonra yine de kalkabilir.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Daha sıcak bir hazne, yeni katmanlar ile eski katmanlar arasındaki sıcaklık farkını azaltır.',
        'Kapalı bir hazne, baskıdan sonra soğumayı da yavaşlatarak ani köşe kalkmasını azaltır.',
        'Hava akımı kalkanları yardımcı olur, ancak PC veya Nylon için sabit bir ısıtmalı hazneye eşdeğer değildir.',
        'Yalnızca yatak sıcaklığını artırmak tutuşu iyileştirebilir, ancak yumuşak malzemelerde fil ayağını artırabilir.',
      ],
    },
    { type: 'title', text: 'Termal Gerilim İndeksinin yorumlanması', level: 2 },
    {
      type: 'paragraph',
      html: 'Termal Gerilim İndeksi, newton cinsinden ölçülen bir kuvvet değil, göreceli bir puandır. Büzülme faktörü, köşegen veya Delta T yükseldiğinde yükselir. Daha fazla temas alanı aynı çekme yükünü dağıtabileceğinden, ayak izi alanı arttığında düşer. Değer daha sonra 0-100 arasında bir risk yüzdesine eşlenir, böylece farklı baskı kurulumları hızlıca karşılaştırılabilir.',
    },
    {
      type: 'table',
      headers: ['Risk aralığı', 'Anlamı', 'Önerilen yanıt'],
      rows: [
        ['0-31%', 'Düşük', 'Yatağı temizleyin, ilk katmanı doğrulayın, çoğu şekil için özel yapışma gerekmez'],
        ['32-57%', 'Orta', 'Keskin köşelerde brim kullanın, erken fanı azaltın, ayak izi temasını inceleyin'],
        ['58-81%', 'Yüksek', 'Geniş brim, yapıştırıcı, malzeme gerektiriyorsa kapalı hazne kullanın, hava akımlarından kaçının'],
        ['82-100%', 'Kritik', 'Geometri, malzeme veya ortam değişmediği sürece eğrilme olasılığı yüksek olarak ele alın'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Neden ayak izi alanına bölünür?',
      html: 'Daha büyük bir ayak izi, yatağa soyma kuvvetine direnme fırsatı verir. Model, geniş ve sürekli teması olan parçaları ödüllendirir ve dar tabanları, küçük ayakları ve yüzeye yalnızca ince bir şerit temas eden uzun parçaları cezalandırır.',
    },
    { type: 'title', text: 'Brim genişliği, mouse ears ve yapıştırıcı seçimleri', level: 2 },
    {
      type: 'paragraph',
      html: 'Brim önerisi <strong>Köşegen x 0,05</strong> ile başlar. Bu nedenle 180 mm\'lik bir köşegen, risk ölçeklendirmesinden önce 9 mm civarında başlar. Pratikte brim yalnızca malzemeye göre seçilmemelidir. Kısa bir PLA küpü brim gerektirmeyebilirken, uzun bir PLA kılıcı, tabelası veya rayı, köşegen baskın gerilim yolu olduğu için mütevazı bir brimden faydalanabilir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Tüm parça etrafında ilk katman temasını artırmak için en iyi çok amaçlı seçim.', icon: 'mdi:border-outside', points: ['PLA\'da çıkarması kolay', 'ABS köşelerde çok kullanışlı'] },
        { title: 'Mouse ears', description: 'Kalkmanın başladığı köşelere veya ince uçlara yerleştirilen yerel dairesel pedler.', icon: 'mdi:circle-outline', points: ['Daha az temizlik', 'Raylar ve çerçeveler için iyi'] },
        { title: 'Yapıştırıcı', description: 'Polimer ve baskı yüzeyi arasındaki kimyasal veya mekanik tutuşu iyileştirir.', icon: 'mdi:water-plus', points: ['Nylon ve PC için kullanışlı', 'Yüzeye özel seçim önemlidir'] },
      ],
    },
    {
      type: 'tip',
      title: 'Brimi tek çözüm yapmayın',
      html: 'Simülatör kritik risk bildiriyorsa, daha geniş bir brim başarısızlığı geciktirebilir ancak altta yatan gerilimi ortadan kaldırmaz. Brimi kapalı hazne, daha yavaş başlangıç soğutması, daha temiz bir yatak ve yuvarlatılmış köşeler veya bölünmüş parçalar gibi geometri değişiklikleriyle birleştirin.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Soğuma büzülmesinin yatak yapışmasını aşmasıyla oluşan yukarı doğru deformasyon.' },
        { term: 'Ayak izi alanı', definition: 'İlk katmanda baskı tablasına temas eden modelin alanı.' },
        { term: 'En uzun köşegen', definition: 'İlk katman temas şekli boyunca en uzun düz açıklık.' },
        { term: 'Delta T', definition: 'Yatak ile çevredeki oda havası arasındaki sıcaklık farkı.' },
        { term: 'Brim', definition: 'Yapışmayı artırmak için parçanın etrafına basılan ek ilk katman çevre döngüleri.' },
      ],
    },
    { type: 'title', text: 'Yüksek riskli parçalar için pratik dilimleyici ayarları', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Daha fazla temas oluşturmak için ilk katman çizgi genişliğini artırın, ancak sırtlara neden olan aşırı Z sıkıştırmasından kaçının.',
        'Sonraki katmanlar çekmeden önce polimerin yatağa yapışması için daha yavaş bir ilk katman kullanın.',
        'İlk katmanlar sırasında ABS, ASA, Nylon ve PC için parça soğutmasını devre dışı bırakın veya azaltın.',
        'Keskin köşelerin ve dar uçların ötesine ulaşacak kadar geniş bir brim ekleyin.',
        'Büyük teknik malzeme parçalarını hazne kapıları, havalandırma delikleri veya soğuk yan panellerin yakınına yerleştirmekten kaçının.',
      ],
    },
    {
      type: 'message',
      title: 'Riski azaltan geometri değişiklikleri',
      ariaLabel: 'Geometri hafifletme fikirleri',
      html: 'Keskin köşeleri yuvarlayın, çok uzun panelleri daha kısa bölümlere ayırın, ince uçlara geçici çıkıntılar ekleyin, en uzun gerilim yolunun daha kısa olması için parçayı yönlendirin veya baskıdan sonra kesilebilecek fedakar pedler ekleyin. Bu değişiklikler genellikle yalnızca yatak sıcaklığını yükseltmekten daha iyi çalışır.',
    },
    {
      type: 'summary',
      title: 'Hızlı yorum kontrol listesi',
      items: [
        'Yüksek büzülmeli malzeme artı açık hazne en güçlü uyarı işaretidir.',
        'Uzun köşegen artı küçük ayak izi, köşelerin ve uçların brim veya mouse ears hak ettiği anlamına gelir.',
        'Yüksek yatak sıcaklığı, soğuk bir odayı veya hava akımlı bir ortamı iptal etmez.',
        'Sonuç bir planlama tahminidir; ilk katman kalibrasyonu ve filament durumu nihai baskıyı belirler.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
