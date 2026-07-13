import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'hacimsel-akis-hizi-sinir-hesaplayicisi';
const title = 'Hacimsel Akış Hızı Hesaplayıcısı: Hassas Hotend Sınırları';
const description =
  '3D baskı hacimsel akışını mm3/s cinsinden hesaplayın, hotend erime kapasitesiyle karşılaştırın ve hız, çizgi genişliği ve katman yüksekliğinin ne zaman under-extrusiona neden olacağını belirleyin.';

const faqData = [
  {
    question: '3D baskida hacimsel akis hizi nedir?',
    answer:
      'Hacimsel akis hizi, her saniye hotendden talep edilen plastik hacmidir. Cizgi genisligi carpi katman yuksekligi carpi baski hizi olarak hesaplanir ve mm3/s cinsinden sonuc verir.',
  },
  {
    question: 'Hacimsel akis hotend sinirini asarsa ne olur?',
    answer:
      'Hotend, talep edilen hizda plastigi tamamen eritemez. Basinc yukselir, ekstruzyon tutarsiz hale gelir ve baskida under-extrusion, zayif duvarlar, mat puruzlu yuzeyler veya atlanmis ekstruder adimlari gorulebilir.',
  },
  {
    question: 'Bir V6 gercekten 15 mm3/s ile sinirli mi?',
    answer:
      '15 mm3/s, iyi ayarlanmis standart bir erime bolgeli hotend icin pratik bir planlama sabitidir. Gercek degerler filament, sicaklik, nozul, isitici gucu, ekstruder tutusu ve kabul edilebilir gorsel kalite kaybi miktarina baglidir.',
  },
  {
    question: 'Katman yuksekligini artirmak neden guvenli hizi azaltir?',
    answer:
      'Katman yuksekligi, akis denkleminde dogrudan bir carpandir. Cizgi genisligi ve hotend kapasitesi ayni kalirsa, katman yuksekligini iki katina cikarmak, hotend erime sinirina ulasmadan once maksimum hizi yaklasik yariya indirir.',
  },
];

const howToData = [
  { name: 'Bir hotend mimarisi secin', text: 'Erime kapasitesi sabitini ayarlamak icin standart V6, Volcano, Bambu yuksek akis veya ultra yuksek akis on ayari secin.' },
  { name: 'Cizgi geometrisini ayarlayin', text: 'Kullanmayi planladiginiz dilimleyici profiliyle eslesmesi icin cizgi genisligini ve katman yuksekligini ayarlayin.' },
  { name: 'Baski hizini ayarlayin', text: 'Ince hiz kaydiricisini kullanarak yuk gostergesinin %70, %90 ve kritik akis bolgelerine yaklasmasini izleyin.' },
  { name: 'Guvenli hiz ve rezervi okuyun', text: 'Mevcut mm3/s degerini maksimum guvenli hiz ve kalan erime hizi rezerviyle karsilastirin.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Hacimsel akis hizi siniri girdileri',
    resultsAriaLabel: 'Hacimsel akis hizi siniri sonuclari',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'ABD',
    hotendLabel: 'Hotend mimarisi',
    lineWidthLabel: 'Cizgi genisligi',
    layerHeightLabel: 'Katman yuksekligi',
    speedLabel: 'Baski hizi',
    flowLabel: 'Hacimsel akis',
    loadLabel: 'Termal yuk',
    maxSpeedLabel: 'Maks. guvenli hiz',
    reserveLabel: 'Erime rezervi',
    stateLabel: 'Sistem durumu',
    idealState: 'IDEAL AKIS',
    limitState: 'VISKOZITE SINIRI',
    criticalState: 'KRITIK AKIS',
    idealHint: 'Hotend, kararli erime basinci ve tutarli ekstruzyon icin yeterli termal paya sahiptir.',
    limitHint: 'Profil viskozite sinirina yakindir. Kucuk malzeme veya sicaklik degisiklikleri under-extrusionu ortaya cikarabilir.',
    criticalHint: 'Talep edilen akis, guvenilir erime penceresini asiyor. Hizi, cizgi genisligini veya katman yuksekligini azaltin.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Maksimum Hacimsel Akis Hizi Hesaplayicisi Nasil Calisir', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Maksimum hacimsel akis hizi hesaplayicisi</strong>, basit bir hiz hesaplayicisindan daha kullanisli bir soruyu yanitlar: hotend, dilimleyicinin talep ettigi plastik miktarini eritebilir mi? Hareket sistemleri yuksek hareket hizlari bildirebilir, ancak ekstruzyon isil transfer, erime bolgesi uzunlugu, nozul basinci, filament viskozitesi, isitici kararliligi ve ekstruder tutusu ile sinirlidir. Hesaplayici, talep edilen erime hizini <code>Vf = cizgi genisligi x katman yuksekligi x hiz</code> olarak modeller ve sonucu <code>mm3/s</code> cinsinden gosterir.',
    },
    {
      type: 'paragraph',
      html: 'Arac, anlik akisi secilen bir hotend kapasitesiyle karsilastirir. Standart V6 tarzi hotendler dusuk bir erime hizi sabitiyle, Volcano gibi daha uzun erime bolgeli mimariler daha yuksek bir sabitle ve modern yuksek akisli hotendler daha buyuk degerlerle temsil edilir. Amac, evrensel bir laboratuvar siniri vaat etmek degildir; donanimin guvenilir bir sekilde eritebileceginden daha fazla plastik talep etmeden once hizli bir muhendislik kontrolu saglamaktir.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Hotend erime kapasitesi icin kullanilan birim', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Kararli uretim profilleri icin konfor bolgesi siniri', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Hatalarin hassaslastigi viskozite siniri', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Under-extrusion riskinin baskin oldugu kritik akis', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Nozul capi yerine dilimleyici cizgi genisligini kullanin',
      html: "<p>Akis denklemi, dilimleyiciden gelen ekstruzyon cizgi genisligini kullanir. 0.4 mm'lik bir nozul genellikle 0.42-0.48 mm'lik bir cizgi basar. Hesaplayici cizgi genisligi yerine nozul capini kullanirsa, akis talebini oldugundan dusuk gosterebilir ve halihazirda hotend sinirina yakin olan bir profili gizleyebilir.</p>",
    },
    { type: 'title', text: 'Hiz ve Erime Hizi Neden Ayni Sinir Degildir', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir yazici 300 mm/s hizla hareket edebilir ancak ekstruzyon hacmi cok yuksekse 90 mm/s\'de basarisiz olabilir. Hiz, yalnizca cizgi genisligi ve katman yuksekligi dahil edildiginde anlamli hale gelir. 0.20 mm katmanlarda 0.45 mm cizgi ve 150 mm/s hizla basmak 13.5 mm3/s talep eder. 0.30 mm katmanlarda 0.60 mm cizgi ve ayni hizla basmak 27 mm3/s talep eder. Hareket hizi aynidir, ancak ikinci profil hotendden saniyede iki kat daha fazla plastik eritmesini ister.',
    },
    {
      type: 'table',
      headers: ['Cizgi genisligi', 'Katman yuksekligi', 'Hiz', 'Talep edilen akis'],
      rows: [
        ['0.42 mm', '0.16 mm', '120 mm/s', '8.06 mm3/s'],
        ['0.45 mm', '0.20 mm', '150 mm/s', '13.50 mm3/s'],
        ['0.50 mm', '0.25 mm', '180 mm/s', '22.50 mm3/s'],
        ['0.60 mm', '0.30 mm', '150 mm/s', '27.00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Under extrusion genellikle bir ayar sorunu gibi gorunur',
      badge: 'Akis tavani',
      html: '<p>Bir profil erime kapasitesini astiginda, kullanicilar genellikle retraksiyon, pressure advance, sicaklik veya E-adimlarini duzeltmeye calisir. Bu ayarlar onemlidir, ancak kisa bir erime bolgesinin sinirsiz plastik islemesini saglayamazlar. Once talep edilen mm3/s degerinin hotend kapasite penceresi icinde oldugunu dogrulayin.</p>',
    },
    {
      type: 'summary',
      title: 'Akis denklemi kurallari',
      items: [
        'Cizgi genisligi, katman yuksekligi ve hiz dogrudan carpilir.',
        'Iki geometri ayarindaki kucuk bir artis, hiz mutevazi gorunse bile bir hotendi zorlayabilir.',
        'Maksimum guvenli hiz, hotend sinirinin cizgi genisligi ve katman yuksekligine bolumudur.',
      ],
    },
    { type: 'title', text: 'Hotend Mimarilerine Gore Termal Performans Karsilastirmalari', level: 2 },
    {
      type: 'paragraph',
      html: 'Hotend mimarisi, filamentin isitilmis bolgede ne kadar kaldigini ve isinin filamentin cekirdegine ne kadar verimli aktarildigini kontrol eder. Kompakt bir V6 tarzi erime bolgesi duyarli ve hafiftir, ancak pratik akis tavani uzun bir Volcano tarzi erime bolgesinden daha dusuktur. Yuksek akisli seramik ve ultra yuksek akisli tasarimlar, daha yuksek ekstruzyon oranlarini surdurmek icin isitici temasini, erime yolu uzunlugunu veya ic yuzey alanini artirir.',
    },
    {
      type: 'table',
      headers: ['Hotend mimarisi', 'Planlama kapasitesi', 'En iyi kullanim alani', 'Muhendislik uyarisi'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Kalite profilleri, orta PLA/PETG hizi, standart masaustu yazicilar', 'Genis cizgiler veya yuksek katmanlarla hizla basinc sinirlarina ulasabilir.'],
        ['Revo High Flow', '18 mm3/s', 'Kompakt form faktorlu yuksek akisli yukseltme', 'Hala sicaklik ve malzeme dogrulamasi gerektirir.'],
        ['Volcano', '25 mm3/s', 'Buyuk nozullar, kalin katmanlar, islevsel parcalar, hizli taslak profilleri', 'Uzun erime bolgeleri daha fazla damlayabilir ve retraksiyon ayari gerektirir.'],
        ['Bambu HF', '32 mm3/s', 'Kapali yazicilar icin yuksek hiz profilleri ve hizli PLA uretimi', 'Profil degerleri sogutma ve filament davranisina guclu sekilde baglidir.'],
        ['Rapido UHF / benzer', '45 mm3/s', 'Asiri akis, buyuk ekstruzyon genislikleri, uretim verimi', 'Ekstruder torku, isitici gucu ve nozul geometrisi sinirlayici faktorler haline gelir.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Kisa erime bolgesi', description: 'Kompakt, duyarli, daha hafif arac basligi, dusuk isil depolama.', icon: 'mdi:thermometer-low', points: ['Iyi detay kontrolu', 'Dusuk akis tavani', 'Daha az isil atalet'] },
        { title: 'Uzun erime bolgesi', description: 'Filamentin nozula ulasmadan once isiyi emmesi icin daha fazla temas suresi.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Daha yuksek mm3/s', 'Daha iyi kalin katman ciktisi', 'Daha fazla damlama yonetimi'] },
        { title: 'Yuksek akisli cekirdek', description: 'Modern geometri, basitce uzunlugu uzatmadan temas alanini veya isitici birlestirmesini artirir.', icon: 'mdi:heat-wave', points: ['Hizli yanit', 'Yuksek verim', 'Ayarlanmis profiller gerektirir'] },
      ],
    },
    {
      type: 'message',
      title: 'Karsilastirma degerleri planlama sabitleridir',
      ariaLabel: 'Hotend karsilastirma notu',
      html: '<p>On tanimli limitler, bilincli olarak tutucu planlama sabitleridir. Gercek erime kapasitesi filament formulu, nozul capi, isitici kartusu, termistor konumu, ekstruzyon sicakligi ve parcanin tolere edebilecegi kalite kaybi miktarina gore degisir.</p>',
    },
    { type: 'title', text: 'Yuk Gostergesi Bolgelerini Okuma', level: 2 },
    {
      type: 'paragraph',
      html: "Yuk gostergesi, akis matematigini gorsel bir calisma durumuna cevirir. %70 yukun altinda, hotendin normal filament degisimi, kucuk sicaklik dalgalanmalari ve takim yolu boyunca hiz degisiklikleri icin payi vardir. %70 ile %90 arasinda ekstruzyon basarili kalabilir ancak profil hassaslasir. %90'in uzerinde, baski erime tavanina o kadar yakindir ki malzeme parti degisimi, nem veya hafif soguk bir nozul, bunu gorunur under-extrusiona itebilir.",
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: Tekrarlanabilir parcalar ve normal malzeme degisimi icin iyi uretim payi.',
        '70-90%: Hiz testi icin kullanisli, ancak duvarlari, ust yuzeyleri ve infill yapisini dogrulayin.',
        '90%+: Filament ve hotend bir akis kulesiyle olculmedikce kritik bolge olarak ele alin.',
        '%100\'un uzerinde: Ilgisiz dilimleyici ayarlarini degistirmeden once hizi, cizgi genisligini veya katman yuksekligini azaltin.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Gosterge neden bir uyari kutusundan daha iyi olabilir',
      html: '<p>Bir uyari kutusu, kullaniciya bir esigi gectikten sonra neyin yanlis gittigini soyler. Bir yuk gostergesi, bu esige yaklasimi gosterir. Bu, profil zaten kararsiz hale geldikten sonra tepki vermek yerine planli bir isletme marjinda durmayi kolaylastirir.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Kritik akis yalnizca bir yuzey kalitesi sorunu degildir',
      badge: 'Mekanik dayanim',
      html: '<p>Az erimis filament, yollar ve katmanlar arasinda zayif baglanabilir. Dis duvar kabul edilebilir gorunse bile, akis hizi erime kapasitesini asarsa infill baglantisi, cevre yapismasi ve darbe dayanimi zarar gorebilir.</p>',
    },
    { type: 'title', text: 'Hesaplayici Bir Dilimleyici Profiliyle Nasil Kullanilir', level: 2 },
    {
      type: 'paragraph',
      html: 'Dilimleyiciden alinan gercek cizgi genisligi, katman yuksekligi ve dis duvar veya genel baski hizi degerleriyle baslayin. En yakin hotend mimarisini secin. Yuk gostergesi tercih ettiginiz yuke ulasana kadar hiz kaydiricisini hareket ettirin. Goruntulenen maksimum guvenli hiz, mevcut cizgi geometrisi icin hotend sinirina tam olarak ulasacak hizdir. Uretim calismalari icin matematiksel maksimumdan daha dusuk bir deger kullanin.',
    },
    {
      type: 'paragraph',
      html: 'Yuk gostergesi kritik bolgeye girerse, akisi azaltmanin uc dogrudan yolu vardir: hizi dusurmek, cizgi genisligini azaltmak veya katman yuksekligini azaltmak. Sicaklik, bazi malzemeler icin pratik akisi artirabilir ancak parlakligi, koprulemeyi, sarkma davranisini, ipliklesmeyi ve boyutsal dogrulugu da degistirir. Hesaplayici, bilincli olarak geometri ve donanim kapasitesine odaklanir, cunku bunlar en seffaf kollardir.',
    },
    {
      type: 'proscons',
      title: 'Akis talebini dusurme yollari',
      items: [
        { pro: 'Hizi dusurmek cizgi geometrisini ve boyutsal amaci korur.', con: 'Baski suresini artirir ve uretim verimini azaltabilir.' },
        { pro: 'Katman yuksekligini azaltmak yuzey kalitesini iyilestirir ve mm3/s\'yi azaltir.', con: 'Katman sayisini artirir ve dusuk akisa ragmen isi uzatabilir.' },
        { pro: 'Cizgi genisligini azaltmak basinci dusurebilir ve ince detaylari iyilestirebilir.', con: 'Seyrek duvarlari zayiflatabilir ve takim yolu sayisini artirabilir.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bir akis kulesiyle dogrulayin',
      html: '<p>Hesaplayiciyi gercekci bir hiz araligi secmek icin kullanin, ardindan belirli filament ve sicaklik icin bir akis hizi test kulesi baskin. En iyi uretim limiti, hala kararli duvarlar, tutarli parlaklik, iyi katman yapismasi ve ekstruder atlamasi olmadan en yuksek akisi veren degerdir.</p>',
    },
    { type: 'title', text: 'Hotend Erime Kapasitesini Asma Belirtileri', level: 2 },
    {
      type: 'paragraph',
      html: 'Hotend erime sinirinin otesindeki bir profil kademeli olarak basarisiz olabilir. Ilk olarak, ust yuzeyler ince izler veya kucuk bosluklar gosterebilir. Ardindan infill cizgileri tutarsiz hale gelir, cevreler parlakligini kaybeder ve koseler zayif basinc toparlamasi gosterir. Daha siddetli durumlarda ekstruder tiklar, filamenti ogutur, adim atlar veya nozula giren filament tamamen yumusamadigi icin gevrek bolumler birakir.',
    },
    {
      type: 'table',
      headers: ['Gozlemlenen belirti', 'Olasi akisla ilgili neden', 'Hesaplayici yaniti'],
      rows: [
        ['Yuksek hizda ince duvarlar', 'Talep edilen mm3/s, uzun duz hareketlerde erime kapasitesini asiyor', 'Yuk %90\'in altina donene kadar hizi azaltin.'],
        ['Purutulu mat ekstruzyon', 'Filament cekirdekten tamamen isitilmamis', 'O malzeme icin akisi azaltin veya sicakligi dikkatlice yukseltin.'],
        ['Ekstruder tiklama', 'Geri basinc, ekstruder tutusunu veya motor torkunu asiyor', 'Akisi hemen azaltin ve filament surme gerilimini inceleyin.'],
        ['Zayif infill yapisi', 'Malzeme cok soguk veya tutarsiz erimis cikiyor', 'Yapisal parcalar icin daha fazla termal pay kullanin.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volumetric flow', definition: 'Hotendden saniyede talep edilen plastik hacmi, mm3/s cinsinden ifade edilir.' },
        { term: 'Melt rate capacity', definition: 'Bir hotendin baski kalitesini korurken tutarli sekilde eritebilecegi pratik filament miktari.' },
        { term: 'Line width', definition: 'Dilimleyicide ekstrude edilen bir yolun genisligi, genellikle nozul capindan biraz daha buyuk.' },
        { term: 'Layer height', definition: 'Her basili katmanin dikey kalinligi; akis talebinde dogrudan bir carpan.' },
        { term: 'Flow reserve', definition: 'Hotend kapasitesi ile mevcut talep edilen akis arasindaki fark.' },
      ],
    },
    {
      type: 'summary',
      title: 'Pratik akis is akisi',
      items: [
        'Hizi artirmadan once talep edilen akisi hesaplayin.',
        'Testle dogrulanmadikca uretim profillerini kritik bolgenin altinda tutun.',
        'Hotend on ayarlarini planlama sabitleri olarak kullanin, ardindan malzemeye ozel kalibrasyonla iyilestirin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
