import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'e-steps-kalibrasyon-hesaplayici',
  title: 'E steps Kalibrasyon Hesaplayıcı ve Ekstrüder Teşhis Asistanı',
  description: 'Ölçülen bir ekstrüzyon testinden düzeltilmiş ekstrüder E-steps değerlerini hesaplayın ve mekanik bir sorunu gizlemeden önce %5 in üzerindeki sapmaları işaretleyin.',
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    inputGroupLabel: 'Ekstrüzyon testi',
    currentEStepsLabel: 'Mevcut E-steps',
    requestedLengthLabel: 'Istenen ekstrüzyon uzunlugu',
    actualLengthLabel: 'Olculen ekstrüzyon uzunlugu',
    newEStepsLabel: 'Yeni E-steps',
    errorLabel: 'Tespit edilen hata',
    commandLabel: 'Konsol komutu',
    copyCommandLabel: 'M92 komutunu kopyala',
    copiedLabel: 'Kopyalandı',
    normalStatusLabel: 'Kalibrasyon araligi',
    criticalStatusLabel: 'Kritik sapma',
    normalMessage: 'Olculen sapma %5 icindedir. Degerini yalnizca filament yolunun temiz oldugunu onayladiktan sonra uygulayin ve testi bir kez tekrarlayin.',
    criticalMessage: 'Kritik uyarı: Sapma %5in uzerinde. Mekanik bir ariza olası: tıkanma, ekstrüder kayması veya yanlış idler yayı gerginligi. Bu yeni E-steps degerlerini uygulamadan once donanimi inceleyin.',
    diagnosticTitle: 'Firmware kaydetmeden once mekanik kontroller',
    diagnosticOne: 'Nozülü gerçek baskı sicakligina ısıtın ve hotend bosken yavaşça ekstrüzyon yapin.',
    diagnosticTwo: 'Sayiya guvenmeden once tahrik dislisini, idler gerginligini, filament isirik izlerini ve makara direncini kontrol edin.',
    diagnosticThree: 'Temizlik veya gerginlik degisikliklerinden sonra 100 mm testini tekrarlayin; kayan bir ekstrüder etrafinda firmware ayarlamayin.',
    referenceTitle: 'Karar kuralı',
    formulaLabel: 'Formul',
    formulaText: 'mevcut E-steps x istenen / olculen',
    safeBandLabel: '%0-5 hata',
    safeBandText: 'Yalnizca tekrarlanabilir bir testten sonra uygulayin.',
    criticalBandLabel: '> %5 hata',
    criticalBandText: 'Once tıkanma, kayma, gerginlik ve direnci inceleyin.',
    repeatTestLabel: 'M92 sonrası',
    repeatTestText: 'Kaydetmeden once aynı ekstrüzyon testini tekrar calistirin.',
    mmUnit: 'mm',
    inchUnit: 'inc',
    stepsUnit: 'adim/mm',
    controlsAriaLabel: 'E-steps kalibrasyon girdileri',
    resultsAriaLabel: 'E-steps kalibrasyon sonucları',
  },
  seo: [
    { type: 'title', text: 'E-steps Kalibrasyonu Aslinda Neyi Olcer', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps, ekstrüder firmwareinin bir milimetre filament hareketi icin step motoruna gonderdigi adim sayisini tanimlar. Marlinde deger genellikle <code>M92 E...</code> ile saklanirken, Klipper aynı fiziksel iliskiyi genellikle donus mesafesı araciligiyla ifade eder. Olcum basittir: bilinen bir ekstrüzyon uzunlugu komutlayin, ne kadar filament hareket ettigini fiziksel olarak olcun, ardindan istenen ve gerçek hareket arasindakı oranla firmware degerini duzeltin. Formul: <code>yeni E-steps = mevcut E-steps * istenen uzunluk / gerçek uzunluk</code>.',
    },
    {
      type: 'paragraph',
      html: 'Tehlikeli kisim yorumlamadir. Bir hesaplayıcı, kotu olanlar da dahil olmak uzere herhangı bir olcumden bir sayı uretebilir. Ekstrüder filamenti ogutuyorsa, nozül kismen tikaliysa veya idler yayı cok gevsekse, olculen ekstrüzyon uzunlugu dusuk olacaktir. E-stepsi yukseltmek 100 mm testini duzeltmis gibi gorunebilir, ancak donanimi duzeltmez. Aynı ariza boyunca motoru daha sert veya daha uzun sure itmeye zorlar, bu da gerçek baskilarini tutarsiz hale getirebilir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'tekrarlanabilir bir ekstrüder testi icin yaygin istenen uzunluk' },
        { value: '%5', label: 'donanim incelemesinin once gelmesi gereken tanı esigi' },
        { value: 'M92', label: 'birim basina adim ayarlamak icin kullanilan Marlin komutu' },
        { value: '2 ondalik', label: 'kopyalanan E-ekseni komutu icin kullanilan çıktı hassasiyeti' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mekanik Bir Ariza Etrafinda Kalibrasyon Yapmayin',
      html: '%5in uzerindeki bir sapma, yazicinin firmware matematigi olmayan bir nedenle az veya cok ekstrüzyon yapıyor olabilecegi kadar buyuktur. <code>M500</code> ile yeni bir deger kaydetmeden veya bir Klipper yapilandirmasini duzenlemeden once ekstrüder yolunu inceleyin.',
    },
    { type: 'title', text: 'Temiz Bir 100 mm Ekstrüzyon Testi Nasil Yapılır', level: 2 },
    {
      type: 'paragraph',
      html: 'Guvenilir bir E-steps testi, sıcak bir nozül ve kararlı bir filament yolu ile baslar. Hotendi filament icin normal bir baskı sicakligina ısıtın, cunku soguk ekstrüzyon koruması bir nedenden dolayı vardir ve erimis plastik geri basinci ekstrüder uzerindeki yuku degistirir. Filamenti ekstrüder girisinin uzerinde bilinen bir mesafede isaretleyin, yavas bir 100 mm ekstrüzyon komutlayin ve gercekte ne kadar filament hareket ettigini belirlemek icin kalan mesafeyi olcun.',
    },
    {
      type: 'list',
      items: [
        'Hotendin anormal basinc olusturmadan malzemeyi eritebilmesi icin yavas bir ekstrüzyon besleme hizi kullanin.',
        'Gozle tahmin etmek yerine filament isaretini kumpas veya ince bir kalemle yapin.',
        'Makara direnci bir E-steps hatası gibi gorunmemesi icin makaranin serbestce donmesini saglayin.',
        'Testi normalde baskı yaptiginiz filament capı ve malzeme turu ile gerceklestirin.',
        'Tahrik dislisi gerginligini, nozül durumunu veya hotend sicakligini degistirdikten sonra olcumu tekrarlayin.',
      ],
    },
    {
      type: 'table',
      headers: ['Olculen sonuç', 'Hata', 'Ilk yorum', 'En iyi sonrakı eylem'],
      rows: [
        ['98 ila 102 mm', '%0 ila 2', 'Küçük normal olcum dagilimi', 'Bir kez tekrarlayin ve gerekirse ortalamasini alin'],
        ['95 ila 105 mm', '%2 ila 5', 'Firmware duzeltmesi makul olabilir', 'Yolu kontrol edin, ardindan hesaplanan degeri uygulayin'],
        ['95 mm altı', '%5 uzeri', 'Kayma, tıkanma, direnc veya basinc sorunu olası', 'Firmwareden once mekanigi inceleyin'],
        ['105 mm uzeri', '%5 uzeri', 'Yanlış onceki deger veya olcum kurulumu sorunu', 'Birimleri dogrulayin ve testi tekrarlayin'],
      ],
    },
    {
      type: 'tip',
      title: 'Tek bir temiz degisken kullanin',
      html: 'Akis hizini, ekstrüzyon carpanini, pressure advance ve E-stepsi aynı anda degistirmeyin. E-steps motor-filament hareketini tanimlamalidir; akis ve ekstrüzyon carpanı ise belirli bir filament ve baskı profili icin dilimleyici malzeme ciktisini ayarlar.',
    },
    { type: 'title', text: '%5 Uyarisı Neden Onemlidir', level: 2 },
    {
      type: 'paragraph',
      html: '%5lik bir ekstrüzyon hatası, 100 mm lik bir komutun 95 mmden az veya 105 mmden fazla gerçek hareket urettigi anlamina gelir. Bu küçük bir yuvarlama sorunu degildir. Tipik 1,75 mm filament ile, kisa bir testte 5 mm eksik besleme, gorunur bir malzeme acigini temsil eder. Gerçek baskilarinda zayif duvarlar, seyrek ust yuzeyler, tutarsiz ilk katmanlar ve zayif boyutsal guvenilirlik olarak gorulebilir. Daha da onemlisi, bu olcekteki az ekstruzyonun genellikle fiziksel bir nedeni vardir.',
    },
    {
      type: 'paragraph',
      html: 'Teşhis asistanı bu esigi isaretler cunku firmware duzeltmesi semptomları gizleyebilir. Tirtilli dişli plastik tozuyla doluysa, motor yalnizca hizli hareketler sirasinda atlayabilir. Nozül kismen tikaliysa, buyuk bir duzeltmeden sonra yavas bir test gecebilir ancak yazici yüksek akisli dolgu sirasinda yine de basarisiz olur. Idler gerginligi cok yuksekse filament deforme olabilir ve asagı akista sikisabilir; cok dusukse kayabilir. Doğru onarim mekaniktir, daha buyuk bir E-ekseni numarası degildir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Saglikli kalibrasyon hatası',
          description: 'Onceki firmware degeri, dişli cap toleransı veya olcum gurultusunden kaynaklanan küçük uyusmazlik.',
          points: ['Genellikle %5 icinde', 'Ikı testte tekrarlanabilir', 'Tiklama veya filament tozu yok', 'Düzeltme mutevazı kalir'],
        },
        {
          title: 'Ariza kaynaklı ekstrüzyon hatası',
          description: 'Ekstruderin filamentu komut edildigi gibi hareket ettirememesinden kaynaklanan buyuk uyusmazlik.',
          highlight: true,
          points: ['%5 uzeri', 'Tekrarlanan testler arasinda degisir', 'Tiklama, ogutme veya isirik izleri', 'Genellikle yüksek hizda daha kotu'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Kritik bir duzeltmeyi kabul etmeden once',
      items: [
        'Nozülü kismi tıkanma acisindan inceleyin ve ekstrüzyon dalgalanıyor veya nabiz atıyorsa temizleyin veya degistirin.',
        'Tahrik dislisi dislerini fircalayin ve filament tozunu temizleyin.',
        'Dişli filamentu duzlestirmeden kavrayacak sekilde idler gerginligini ayarlayin.',
        'Makara direncini, Bowden tupu oturmasini ve filament yolu sureklenmesini kontrol edin.',
        'Firmwareı degistirmeden once aynı olcumu tekrar yapin.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 ve Klipper Donus Mesafesı', level: 2 },
    {
      type: 'paragraph',
      html: 'Marlin tarzı firmwarede, <code>M92 E...</code> mevcut oturum icin ekstrüder adimlarini milimetre basina ayarlar. Bircok yazici, degeri EEPROMa kaydetmek icin sonrasinda <code>M500</code> gerektirir, aksı takdirde ayar yeniden baslatmadan sonra kaybolabilir. Kilitli veya satici tarafindan degistirilmis bazı firmware yapiları EEPROM kaydetmeyi yok sayabilir veya bunun yerine firmware kaynak yapilandirmasinin degistirilmesini gerektirebilir. Yazici destekliyorsa, yeniden baslatmadan sonra degeri her zaman <code>M503</code> ile dogrulayin.',
    },
    {
      type: 'paragraph',
      html: 'Klipper, printer.cfgde E-steps yerine yaygin olarak <code>rotation_distance</code> kullanir. Fiziksel kalibrasyon fikri aynidir, ancak sayisal yon ters cevrilmistir cunku donus mesafesı, milimetre basina kac adim gerektigini degil, motor donusu basina ne kadar filament hareket ettigini tanimlar. Bu arac bir <code>M92</code> komutu ciktilar cunku Marlin konsollarinda ve uyumlu firmware arayuzlerinde dogrudan kullanilabilir olması amaclanmistir. Klipper kullaniciları, donus mesafesini yeniden hesaplamadan once olculen hatayı bir teşhis sinyalı olarak kullanmaya devam edebilir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Firmwarein ekstrüder ekseninde bir milimetre filament hareket ettirmek icin gonderdigi motor adim sayisı.' },
        { term: 'M92', definition: 'Marlin firmware tarafindan bir veya daha fazla eksen icin birim basina adim ayarlamak uzere kullanilan bir G-kod komutu.' },
        { term: 'M500', definition: 'Yazici tarafindan desteklendiginde mevcut ayarları EEPROMA kaydeden bir Marlin komutu.' },
        { term: 'Donus mesafesı', definition: 'Tam motor donusu basina filament hareketini temsil eden Klipper ayarı.' },
        { term: 'Ekstrüzyon carpanı', definition: 'Makine E-stepsiinden ayrı olarak, belirli bir filament ve baskı profili icin dilimleyici seviyesinde akis olcekleme.' },
      ],
    },
    {
      type: 'card',
      title: 'Konsol komutu is akisı',
      html: 'Kopyalanan <code>M92 E...</code> komutunu gonderin, ekstrüzyon testini tekrarlayin ve yalnizca olculen uzunluk tekrarlanabilir olduktan sonra degeri kaydedin. Tek bir iyi sayı, iki tutarlı olcumden daha zayif kanittir.',
    },
    { type: 'title', text: 'Kotu E-steps Gibi Gorunen Mekanik Sorunlar', level: 2 },
    {
      type: 'paragraph',
      html: 'Kismen tikalı bir nozül en yaygin tuzaktir. Ekstrüder motoru doğru miktarda donarken hotendde basinc birikerek tahrik dislisinin filamentu ilerletmek yerine cignemesine neden olur. Olculen ekstrüzyon uzunlugu kisalir, formul E-stepsi yukseltir ve nozül tikankligi devam ettigi icin sonrakı baskı yine az ekstrüzyon yapabilir. Ekstrude edilen filament keskin bir sekilde dalgalanıyorsa, nabiz atıyorsa, ince cikiyorsa veya nozuldan cikarken yon degistiriyorsa, kalibrasyondan once hotendi temizleyin.',
    },
    {
      type: 'paragraph',
      html: 'Ekstrüder kayması, zit gerginlik hatalarindan gelebilir. Cok az yay kuvveti, dislinin filamente karsı donmesine izin verir. Cok fazla yay kuvveti, yumusak filamentu ovallestirebilir, bir Bowden tupunde sureklenmeyi artirabilir veya heat break girisinde sikisan derin isirik izleri olusturabilir. Esnek filament ozellikle hassastir. Teşhis esigi, kullanicinin durup bu kosulları incelemesini saglamak icin vardir, boylece bir cekme sorunu firmware numarasina donusturulmeden once onlem alinir.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Test sirasinda kritik belirtiler',
      html: 'Ekstrüder tikliyorsa, filament tozu gorunuyorsa, motor alisilmadik sekilde isiniyorsa, ekstrüzyon nabiz seklinde cikiyorsa veya olculen uzunluk tekrarlanan 100 mm testleri arasinda birkac milimetre degisiyorsa durun ve donanimi inceleyin.',
    },
    {
      type: 'proscons',
      title: 'Buyuk bir hatadan sonra E steps düzeltme',
      items: [
        { pro: 'Onceki firmware degeri gercekten yanlış oldugunda doğru filament beslemesini geri yukleyebilir.', con: 'Inceleme yapilmadan kullanildiginda kayan bir tahrik dislisini veya tikalı nozülü gizleyebilir.' },
        { pro: 'Basit komut uygulaması ve tekrarlaması kolaydir.', con: 'Yanlış kaydedilen deger her dilimleyici profilini ve her malzemeyi etkiler.' },
        { pro: 'Ekstrüder dişli oranini veya motor donanimini degistirdikten sonra kullanislidir.', con: 'Basili duvarlarda akis kalibrasyonunun yerini almaz.' },
      ],
    },
    { type: 'title', text: 'E-steps vs Akis Kalibrasyonu', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps kalibrasyonu makine katmanina aittir. Ekstrüder mekanizmasinin istenen uzunlukta ham filamentu hareket ettirip ettirmedigini sorar. Akis kalibrasyonu baskı profili katmanina aittir. Belirli bir filament, sicaklik, nozül, cizgi genisligi ve dilimleyici stratejisinin amaclanan duvar kalinligini ve yüzey kalitesini uretip uretmedigini sorar. Ikisini karistirmak kafa karistirici profiller olusturur: bir yazici 100 mm E-steps testini gecebilir ve yine de bir PETG markası icin 0,96 ekstrüzyon carpanina ihtiyac duyabilir.',
    },
    {
      type: 'paragraph',
      html: 'Ekstrüder donanimini, motor adimlarini, mikro adimlamayı, dişli oranini veya tahrik dislisi capini degistirdikten sonra E-stepsi kalibre edin. Filament markasini, rengini, nozül boyutunu, sicakligi veya dilimleyici cizgi genisligini degistirdikten sonra akisı kalibre edin. Pressure advance, linear advance ve retraction ayrı basinc kontrol aracları ve temel ekstrüzyon hareketi guvenilir hale geldikten sonra ayarlanmalidir.',
    },
    {
      type: 'table',
      headers: ['Kalibrasyon', 'Katman', 'Ne zaman degisir', 'Duzeltmek icin kullanmayin'],
      rows: [
        ['E-steps', 'Firmware veya makine yapilandirması', 'Ekstrüder donanimi veya motor kurulumu degisir', 'Nemli filament, nozül tiklanmaları, dilimleyici akisı'],
        ['Akis carpanı', 'Dilimleyici malzeme profili', 'Filament markası, rengi, nozülü, sicakligi degisir', 'Yanlış dişli oranı veya kayan ekstrüder'],
        ['Pressure advance', 'Firmware dinamigi', 'Ekstrüder yolu, hizi, ivmesi, malzemesi degisir', 'Statik az ekstrüzyon'],
        ['Retraction', 'Dilimleyici hareket davranisı', 'Sarkma, sizma, hareket yapaylikları degisir', 'Temel besleme mesafesı hataları'],
      ],
    },
    {
      type: 'message',
      title: 'Destek teknisyeni kuralı',
      html: 'Bir kalibrasyon degeri carpici bicimde degisirse, olcumun size makine hakkinda bir sey soyledigini varsayin. Once inceleyin, sonra hesaplayin, en son kaydedin.',
    },
    { type: 'title', text: 'Tekrarlanabilirlik ve Olcum Kalitesi', level: 2 },
    {
      type: 'paragraph',
      html: 'Iyibir E-steps sonucu tekrarlanabilirdir. Bir test 94 mm, sonrakı 99 mm ve bir sonrakı 96 mm olcerse, ortalama dagilimdan daha az onemlidir. Degisken sonuclar cekme, sicaklik, basinc veya olcum teknigine isaret eder. Yeni bir deger kaydetmeden once, herhangı bir mekanik degisiklikten sonra ekstruzyonu en az iki kez tekrarlayin. Ikı sonuç, yeni firmware numarasinin gurultuyu kovalamayacagı kadar yakin olmalidir.',
    },
    {
      type: 'tip',
      title: 'Mumkun oldugunda ekstruderin uzerinde olcun',
      html: 'Filamenti ekstrudere girmeden once isaretlemek, nozuldan cikan kavisli filamentten kaynaklanan karisikligi onler. Sabit bir referans noktasindan isarete olan mesafeyi komuttan once ve sonra olcun.',
    },
    {
      type: 'summary',
      title: 'Guvenilir kalibrasyon sirası',
      items: [
        'Nozülü ısıtın ve eski malzemeyi temizleyin.',
        'Filamenti hassas bir referans mesafesiyle isaretleyin.',
        'Yavaşça 100 mm ekstrude edin ve gerçek hareketi olcun.',
        'Hesaplayiciyi kullanin ve %5in uzerindeki hataları inceleyin.',
        '<code>M92 E...</code> uygulayin, yeniden test edin ve yalnizca tekrarlanabilirse kaydedin.',
      ],
    },
  ],
  faq: [
    {
      question: 'Bu E-steps hesaplayıcı hangı formulu kullanir?',
      answer: 'Yeni E-steps = mevcut E-steps * istenen ekstrüzyon uzunlugu / olculen ekstrüzyon uzunlugu formulunu kullanir.',
    },
    {
      question: 'Arac neden %5in uzerindeki hatada uyarir?',
      answer: '%5in uzerindeki bir sapma, ekstrüder kayması, kismi tıkanma, makara direnci veya yanlış idler gerginligi gibi mekanik bir soruna isaret edecek kadar buyuktur. Yeni bir firmware degeri kaydetmeden once donanimi inceleyin.',
    },
    {
      question: 'M92 komutunu Klipperda kullanabilir miyim?',
      answer: 'Kopyalanan M92 komutu Marlin uyumlu firmware icindir. Klipper genellikle rotation_distance kullanir, ancak aynı olculen hata ekstrüder teshisi icin hala kullanislidir.',
    },
    {
      question: 'Yeni degeri hemen kaydetmeli miyim?',
      answer: 'Hayir. Gecici olarak uygulayin, ekstrüzyon testini tekrarlayin ve yalnizca olculen hareket tekrarlanabilir olduktan sonra kaydedin.',
    },
    {
      question: 'E-steps kalibrasyonu akis kalibrasyonu ile aynı midir?',
      answer: 'Hayir. E-steps makine hareketini kalibre eder. Akis veya ekstrüzyon carpanı, belirli bir filament ve baskı profili icin dilimleyici malzeme ciktisini kalibre eder.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Mevcut E-steps degerini girin', text: 'Firmware veya yazici ayarlarindan mevcut ekstrüder adimlarini milimetre basina okuyun.' },
    { name: 'Bir ekstrüzyon testi yapin', text: 'Hotend baskı sicakligindayken bilinen bir uzunluk, normalde 100 mm, komutlayin.' },
    { name: 'Gerçek hareketi olcun', text: 'Fiziksel olarak olculen filament hareketini girin ve tespit edilen hatayı inceleyin.' },
    { name: 'Gerekirse inceleyin', text: 'Hata %5in uzerindeyse, M92 komutunu uygulamadan once donanimi kontrol edin.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'E-steps Kalibrasyon Hesaplayıcı ve Ekstrüder Teşhis Asistanı',
      description: 'Düzeltilmiş 3D yazici ekstrüder E-steps degerlerini hesaplayin ve mekanik risk tasiyan buyuk sapmaları isaretleyin.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Bu E-steps hesaplayıcı hangı formulu kullanir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yeni E-steps = mevcut E-steps * istenen ekstrüzyon uzunlugu / olculen ekstrüzyon uzunlugu formulunu kullanir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '3D yazici ekstrüder E-steps nasil kalibre edilir',
      step: [
        { '@type': 'HowToStep', text: 'Mevcut E-steps degerini girin.' },
        { '@type': 'HowToStep', text: 'Bilinen bir ekstrüzyon uzunlugu, genellikle 100 mm, komutlayin.' },
        { '@type': 'HowToStep', text: 'Gerçek filament hareketini olcun ve duzeltmeyi hesaplayin.' },
        { '@type': 'HowToStep', text: 'Tespit edilen hata %5in uzerindeyse once donanimi inceleyin.' },
      ],
    },
  ],
};
