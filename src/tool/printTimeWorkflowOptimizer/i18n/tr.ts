import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-baski-suresi-is-aki-optimize-edici';
const title = '3D Bask Sresi Is Aki Optimize Edici';
const description =
  'Iki FDM baski kurulumunu yan yana karsilastirin: katman sayisi, duzeltilmis sure, filament tuketimi, maliyet, kalite odunu ve donanim hizi uyarilari.';

const faqData = [
  {
    question: 'Basit bir zaman hesaplayicisindan farki?',
    answer:
      'Karmasiklik yuku, katman basina geri cekme suresi, dolgu hacmi, filament kutlesi, maliyet ve senaryo karsilastirmasini icerir.',
  },
  {
    question: 'Slicer tahminlerinin yerini alabilir mi?',
    answer:
      'Hayir. Slicer hassas takim yollarini bilir. Bu arac slicing oncesi planlama icindir.',
  },
  {
    question: 'Karmasiklik ayari neyi degistirir?',
    answer:
      'Dusuk/orta/yuksek, hareketler, hizlanma kayiplari, koseler ve adalar icin yuk katsayilari uygular.',
  },
  {
    question: 'Arac neden 100 mm/s uzerinde uyariyor?',
    answer:
      'Bircok yazici 100 mm/s uzerine cikabilir ancak ekstruzyon ve sogutma, kalibrasyonsuz yuksek hizlari riskli yapar.',
  },
];
const howToData = [
  { name: 'Model boyutu ve hacmini girin', text: 'CAD, slicer on izleme veya yaklasik hacimden yukseklik ve hacim ekleyin.' },
  { name: 'Senaryo Ayarlayin', text: 'Katman yuksekligi, hiz, cizgi genisligi, dolgu, malzeme, karmasiklik secin.' },
  { name: 'Senaryo Byi ayarlayin', text: 'Karsilastirma icin ikinci konfigurasyonu ayarlayin.' },
  { name: 'Etkiyi okuyun', text: 'Sure, filament, maliyet, katman, verimlilik, akisi karsilastirin.' },
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Baski is akisi girdileri',
    resultsAriaLabel: 'Baski is akisi sonuclari',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    currencyLabel: 'Para birimi',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Senaryo A',
    scenarioBLabel: 'Senaryo B',
    modelHeightLabel: 'Model yuksekligi',
    modelVolumeLabel: 'Tahmini hacim',
    layerHeightLabel: 'Katman yuksekligi',
    speedLabel: 'Hiz',
    lineWidthLabel: 'Cizgi genisligi',
    infillLabel: 'Dolgu',
    complexityLabel: 'Karmasiklik',
    complexityTooltip: 'Olu zamani tahmin eder: hizlanmalar, koseler, geri cekmeler, adalar, kisa hareketler.',
    pieceTypeLabel: 'Parca turu',
    solidPieceLabel: 'Dolu surekli',
    hollowPieceLabel: 'Ic bos birkok bosluklu',
    materialLabel: 'Malzeme',
    filamentPriceLabel: 'Filament fiyati',
    lowComplexity: 'Dusuk basit yuzeyler',
    mediumComplexity: 'Orta karisik geometri',
    highComplexity: 'Yuksek bircok ada',
    estimatedTimeLabel: 'Tahmini sure',
    filamentLabel: 'Filament',
    costLabel: 'Malzeme maliyeti',
    layersLabel: 'Katmanlar',
    efficiencyLabel: 'Verimlilik',
    flowLabel: 'Hacimsel akis',
    flowTooltip: '10-12 mm3/s uzeri = dusuk ekstruzyon riski.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Kalite odunu',
    speedReductionLabel: '-10% hiz',
    speedReductionAddsLabel: 'ekler',
    speedReductionMinutesLabel: 'dk',
    qualityGainLabel: '~8% daha temiz yuzey',
    hardwareWarning: 'Hiz >100 mm/s. Hotend akis, sogutma, hizlanma kontrol edin.',
    flowWarning: 'Akis standart hotend konfor bolgesinin ustunde.',
    bestValueLabel: 'En iyi deger',
    timeDeltaLabel: 'Sure farki',
    costDeltaLabel: 'Maliyet farki',
    materialDeltaLabel: 'Malzeme farki',
    winnerBadge: 'En iyi deger',
    scenarioPrefix: 'Senaryo',
    inScenarioLabel: 'icinde',
    fasterDirection: 'daha hizli',
    cheaperDirection: 'daha ucuz',
    lighterDirection: 'daha hafif',
    criterionAlignedLabel: 'En iyi degerle uyumlu',
    criterionTradeoffLabel: 'En iyi deger icin odun',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 's',
    minuteUnit: 'dk',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'Dilimlemeden Once 3D Baski Suresi Nasil Tahmin Edilir', level: 2 },
    {
      type: 'paragraph',
      html: 'Kullanisli bir <strong>3D baski suresi tahmincisi</strong>, yalnizca hacmin hiza bolunmesinden ibaret olamaz. FDM yazicilar hizlanma, koselecede yavaslama, filament geri cekme, adalar arasinda hareket etme, kucuk katmanlari sogutma ve yon degisikliklerinden sonra basinci toparlama icin zaman harcar. Optimize edici, parcayi baskilabilir hacim, cizgi genisligi, katman yuksekligi, hiz, katman sayisi ve bir karmasiklik katsayisi olarak modeller, boylece erken planlama gercek is akisi kararlarina daha yakin olur.',
    },
    {
      type: 'paragraph',
      html: 'Temel ekstruzyon suresi, hacmin hacimsel verim bolunmesiyle hesaplanir: hiz ile cizgi genisligi ve katman yuksekliginin carpimi. Ardindan arac, model karmasikligi icin bir duzeltme katsayisi uygular ve katman basina sabit bir geri cekme payi ekler. Bu, dilimleyici hassasiyeti iddiasinda bulunmaz, ancak 0,20 mm taslak kurulumu ile 0,12 mm kalite kurulumu arasinda dogrusal bir hesap makinesinden daha dürüst bir karsilastirma saglar.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Basit bloklar ve duzgun parcalar icin dusuk karmasiklik ek yuku', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Cok sayida ada ve geri cekme icin yuksek karmasiklik ek yuku', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Katman basina eklenen planli geri cekme payi', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Ekstruzyon riski icin standart yazici uyari esigi', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Mumkun oldugunda dilimleyici hacmini kullanin',
      html: '<p>En iyi hacim girisi, model icin dilimleyici veya CAD malzeme hacmidir, dis cerceve kutusu degil. Cerceve kutulari, egrilerin, deliklerin, tutamaklarin ve bosluklarin etrafindaki bos havayi icerir, bu nedenle zaman ve filament miktarini abartabilirler.</p>',
    },
    { type: 'title', text: 'Katman Yuksekligi Zamani Neden Bu Kadar Guclu Degistirir', level: 2 },
    {
      type: 'paragraph',
      html: 'Katman yuksekligi baski suresini iki sekilde etkiler. Ilk olarak, hacimsel verimi degistirir: ayni hiz ve genislikte 0,12 mm\'lik bir katman, saniyede 0,20 mm\'lik bir katmandan %40 daha az plastik ekstrude eder. Ikinci olarak, katman sayisini artirir, bu nedenle katman degisim ek yuku, geri cekmeler, basinc yerlesmesi ve sogutma kararlari daha sik gerceklesir. Bu nedenle kucuk kozmetik degisiklikler bes saatlik bir baskiyi sekiz saatlik bir baskiya donusturebilir.',
    },
    {
      type: 'table',
      headers: ['Katman yuksekligi', 'Tipik kullanim', 'Is akisi sonucu'],
      rows: [
        ['0,28-0,32 mm', 'Taslak parcalar, buyuk aparatlar, hizli kontroller', 'Dusuk katman sayisi ve yuksek verim, ancak gorunur katman cizgileri.'],
        ['0,18-0,22 mm', 'Genel PLA ve PETG baski', 'Bircok masaustu yazici icin dengeli sure, dayaniklilik ve yuzey kalitesi.'],
        ['0,10-0,14 mm', 'Miniyaturler, egrilmis kabuklar, gorunur tuketici parcalari', 'Cok daha uzun isler cunku verim duser ve katman sayisi artar.'],
        ['0,10 mm alti', 'Ozel bitirme durumlari', 'Genellikle makine dogrulugu, sogutma ve azalan gorsel getiri ile sinirlidir.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ince katmanlar formulun onerdiginden daha yavas olabilir',
      badge: 'Sogutma ve minimum katman suresi',
      html: '<p>Kucuk modeller dilimleyicide minimum katman süresine ulasabilir. Bu oldugunda, yazici plastigin sogumasina izin vermek icin yavaslar, hacimsel formul makinenin daha hizli hareket edebilecegini soylese bile.</p>',
    },
    {
      type: 'summary',
      title: 'Katman yuksekligi kurallari',
      items: [
        'Daha dusuk katman yuksekligi, ayni hizda saniye basina akisi azaltir.',
        'Daha fazla katman, model hacmi degismese bile tekrarlanan ek yuk ekler.',
        'En iyi karsilastirma senaryo tabanlidir: taslak profil ve kalite profili.',
      ],
    },
    { type: 'title', text: 'Model Karmasikligi Ek Yuk ve Olu Zaman', level: 2 },
    {
      type: 'paragraph',
      html: 'Olu zaman, teorik ekstruzyon ile is saati arasindaki farktir. Duzen bir vazo benzeri duvar, az hareket ve az geri cekmeye sahiptir. Bircok delik, cikinti, etiket, kaburga ve ayrilmis adaya sahip mekanik bir muhafaza, yaziciyi bircok kez baslatip durmaya zorlar. Hizlanma sinirlari, nozulun kisa segmentlerde komut hizina hicbir zaman ulasamayabilecegi anlamina gelir, bu nedenle gercek ortalama hareket hizi, kaydirici degerinden daha dusuktur.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Dusuk karmasiklik', description: 'Pürüzsuz modeller, surekli konturlar, az ada ve sinirli ic hareket.', icon: 'mdi:shape-outline', points: ['Daha dusuk ek yuk', 'Stabil hiz', 'Az geri cekme'] },
        { title: 'Orta karmasiklik', description: 'Delikler, karisik egriler, dolgu degisiklikleri ve orta duzeyde hareket iceren yaygin fonksiyonel parcalar.', icon: 'mdi:cog-outline', highlight: true, points: ['Dengeli varsayilan', 'Biraz hareket kaybi', 'Faydali teklif tabani'] },
        { title: 'Yuksek karmasiklik', description: 'Dokulu yuzeyler, bircok ayrilmis ozellik, destek arayüzleri ve yogun geri cekmeli bolumler.', icon: 'mdi:transit-connection-variant', points: ['Yuksek ek yuk', 'Daha fazla sarkma riski', 'Daha uzun gercek saat'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ek yuk katsayisi', definition: 'Hareketleri, hizlanma kaybini, geri cekmeleri ve sabit ekstruzyon hesaplamasiyla yakalanamayan diger sureleri yaklasik olarak hesaplayan bir carpan.' },
        { term: 'Hacimsel akis', definition: 'Saniyede nozulden itilen plastik miktari, hiz ile cizgi genisligi ve katman yuksekliginin carpimi olarak hesaplanir.' },
        { term: 'Katman sayisi', definition: 'Model yuksekliginin katman yuksekligine bolunmesi, yukari yuvarlanir, cunku kismi son katmanlar hala bir gecis gerektirir.' },
        { term: 'Dusuk ekstruzyon', definition: 'Hotend veya ekstruderin istenen hiz ve cizgi geometrisi icin yeterli erimis plastik saglayamadigi bir kusur.' },
      ],
    },
    {
      type: 'message',
      title: 'Karmasikligi bir kalibrasyon dugmesi olarak ele alin',
      ariaLabel: 'Karmasiklik katsayisi notu',
      html: '<p>Dilimleyiciniz benzer modeller icin bu optimize ediciden surekli olarak daha uzun sureler bildiriyorsa, karmasikligi artirin. Ayarlanmis hizlanmaya sahip dogrudan suruslu yaziciniz tahmini geride birakiyorsa, gelecekteki planlama icin dusurun.</p>',
    },
    { type: 'title', text: 'Filament Tuketimi, Maliyet ve Dolgu', level: 2 },
    {
      type: 'paragraph',
      html: 'Zaman, is akisi kararinin yalnizca bir parcasidir. Filament agirligi ve maliyeti, parcalari fiyatlandirirken, toplu isler planlarken veya ince detayli bir profilin yaziciyi isgal etmeye deger olup olmadigina karar verirken onemlidir. Optimize edici, bir kabuk payini koruyarak ve ic bolgeyi dolgu yuzdesine gore olcekleyerek duzeltilmis baskilabilir hacmi tahmin eder, ardindan bu hacmi malzeme yogunlugu ile carpar.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Hizli malzeme planlamasi icin yaklasik 1,24 g/cm³ PLA ve 1,27 g/cm³ PETG kullanin.',
        'Destekler, kenarliklar, sallar veya temizleme yapilari isin bir parcasi oldugunda tahmini hacmi artirin.',
        'Daha dusuk dolgu filament ve zamani azaltir, ancak duvarlar, ust katmanlar ve alt katmanlar hala malzeme tuketir.',
        'Uretim partileri icin, hesap makinesi tahminlerini kullanilan gercek makara agirligi ile karsilastirin ve gelecekteki teklifleri ayarlayin.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Ornek is akisi karari',
      html: '<p>0,20 mm katmanlarda 120 cm³ PLA parcasi bir atolye aparati icin kabul edilebilirken, 0,12 mm versiyonu daha iyi gorunur ancak yaziciyi daha uzun sure isgal eder. Zaman ve malzeme maliyetini yan yana karsilastirmak, makine baglanmadan once dengenin gorunmesini saglar.</p>',
    },
    {
      type: 'proscons',
      title: 'Hiza karsi kaliteyi optimize etme',
      items: [
        { pro: 'Daha yuksek hiz, gunluk daha fazla is icin yazici kapasitesini serbest birakabilir.', con: 'Halkalama, zayif koseler, kotu sogutma ve hotend akis sinirlarini ortaya cikarabilir.' },
        { pro: 'Daha dusuk hiz genellikle yuzey kalitesini ve boyutsal tutarliligi iyilestirir.', con: 'Bekleme suresini artirir ve kucuk ticari parcalari daha az kârli hale getirebilir.' },
        { pro: 'Daha dusuk katman yuksekligi, egrilmis yuzeyleri ve miniyaturleri iyilestirir.', con: 'Katman sayisini ve tekrarlanan makine ek yukunu katlar.' },
      ],
    },
    { type: 'title', text: 'Donanim Uyarilari ve Pratik Hiz Sinirlari', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir dilimleyici hiz degeri, nozulun bu hizi her yerde surdureceginin garantisi degildir. Standart Kartezyen yatak firlaticilari, eski Bowden ekstruderler, kisa erime bolgeli hotendler ve zayif parca sogutmasi, hizlanma, jerk, pressure advance, sicaklik ve akis kalibrasyonu ayarlanmadigi surece 100 mm/s uzerinde zorlanabilir. Uyari, baskinin basarisiz olacagi anlamina gelmez; istenen kurulumun donanim davranisina karsi kontrol edilmesi gerektigi anlamina gelir.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olasi neden', 'Planlama yaniti'],
      rows: [
        ['Ince duvarlar veya bosluklar', 'Hotend yeterli plastik eritemiyor veya ekstruder kayiyor', 'Hizi azaltin, sicakligi dikkatlice yukseltin veya cizgi genisligini/katman yuksekligini dusurun.'],
        ['Koselerde halkalama', 'Hizlanma ve cerceve titresimi baskın', 'Gorunur duvarlar icin hizlanmayi veya hizi azaltin.'],
        ['Kivrilmis kucuk ozellikler', 'Sogutma yetisemiyor', 'Hizi azaltin, fanı artirin veya birden fazla kopya baskin.'],
        ['Karmasik parcalarda sarkma', 'Cok sayida hareket ve geri cekme', 'Karmasiklik ek yukunu artirin ve geri cekme/sicakligi ayarlayin.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hacimsel akis gercek hiz siniridir',
      badge: 'mm³/s kontrol edin',
      html: '<p>Ayni hareket hizina sahip iki profil, farkli erime oranlari talep edebilir. 80 mm/s\'de 0, 30 mm katman ve 0, 50 mm cizgi, ayni hizdaki 0, 12 mm katman ve 0, 42 mm cizgiden saniyede cok daha fazla plastik gerektirir.</p>',
    },
    {
      type: 'summary',
      title: 'Dilimlemeden once optimize ediciyi kullanin',
      items: [
        'Tek bir sayidan tahmin etmek yerine iki aday profili karsilastirin.',
        'Katman sayisini, hacimsel akisi ve donanim uyarilarini birlikte izleyin.',
        'Son etkilesimi yerel olarak saklayin, boylece tekrarlanan planlama onceki kurulumdan devam edebilir.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
