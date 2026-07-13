import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'fil-ayagi-kompansasyon-hesaplayici';
const title = 'Fil Ayagi Kompansasyon Hesaplayici: Hassas Boyutsal Düzeltme';
const description = 'Ölçülen boyutsal hata, katman yüksekligi, Z-offset basinci ve yatak sicakligini kullanarak 3D baski ilk katmani için negatif yatay genisleme ve CAD pah derinligini hesaplayin.';

const faqData = [
  {
    question: 'En iyi fil ayagi kompansasyon degeri nedir?',
    answer: 'En iyi deger, ilk katman yüksekligi, efektif Z basinci ve yatak sicakligi için düzeltilmis ölçülen taban hatasidir. Bu hesaplayici, bunu negatif bir dilimleyici yatay genisleme degeri olarak raporlar.',
  },
  {
    question: 'Yatay genisleme mi yoksa CAD pahi mi kullanmaliyim?',
    answer: 'Hizli profil seviyesinde düzeltme için dilimleyici yatay genislemesini kullanin. Alt kenarin baska bir parçaya dokundugu, bir referans yüzeyine oturdugu veya dilimleyiciler arasinda tekrarlanabilir kalmasi gereken islevsel parçalar için bir CAD pahi kullanin.',
  },
  {
    question: 'Yatak sicakligi fil ayagini neden etkiler?',
    answer: 'Daha sicak bir yatak, alt polimeri daha uzun süre yumusak tutar. Yumusayan boncuk, nozul basinci altinda yatay olarak akabilir, bu nedenle hesaplayici, 60 °C referans noktasinin üzerinde düzeltmeyi artirir.',
  },
  {
    question: 'Fil ayagi asiri ekstrüzyon ile ayni midir?',
    answer: 'Hayir. Asiri ekstrüzyon birçok katmani etkiler. Fil ayagi, ilk katmanlarin yatak tarafindan sikistirildigi ve isitildigi tabanda yogunlasir, ancak asiri ekstrüzyon bunu kötülestirebilir.',
  },
];

const howToData = [
  { name: 'Bir test kuponu yazdirin', text: 'Üretim baskisiyla ayni malzemeyi, yatak sicakligini, ilk katman yüksekligini ve ilk katman ayarlarini kullanin.' },
  { name: 'Taban hatasini ölçün', text: 'Kararli üst duvar boyutundan en genis taban boyutunu çikarin.' },
  { name: 'Basinç ve sicakligi girin', text: 'Ilk katman yüksekligini, efektif Z basinç boslugunu ve yatak sicakligini saglayin.' },
  { name: 'Düzeltmeyi uygulayin', text: 'Dilimleyicide negatif yatay genisleme degerini kullanin veya önerilen 45 derecelik pahi CAD ile modelleyin.' },
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

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Fil ayagi kompansasyon girdileri',
    resultsAriaLabel: 'Fil ayagi düzeltme sonuçlari',
    canvasAriaLabel: 'Mevcut ve düzeltilmis fil ayagi profilinin kesit görsellestirmesi',
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'Imparatorluk',
    materialLabel: 'Malzeme ön ayari',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Özel',
    measuredErrorLabel: 'Ölçülen taban hatasi',
    layerHeightLabel: 'Ilk katman yüksekligi',
    zPressureLabel: 'Z-offset basinç boslugu',
    bedTemperatureLabel: 'Yatak sicakligi',
    targetToleranceLabel: 'Hedef tolerans',
    expansionLabel: 'Dilimleyici genislemesi',
    chamferLabel: 'CAD pahi',
    thermalFactorLabel: 'Termal faktör',
    verdictLabel: 'Boyutsal Dogruluk Hedefi',
    currentProfileLabel: 'Ölçülen fil ayagi',
    correctedProfileLabel: 'Düzeltilmis profil',
    slicerCommandLabel: 'Dilimleyici komutu',
    cadCommandLabel: 'CAD komutu',
    copyButton: 'Düzeltme raporunu kopyala',
    copiedButton: 'Kopyalandi',
    copyTemplate: 'Fil ayagi kompansasyonu: dilimleyici yatay genislemesi {expansion}, CAD pahi {chamfer} 45 derecede, termal faktör {phi}, karar: {verdict}.',
    slicerCommandTemplate: 'Yatay Genisleme: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_duz {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | Z basinç orani {ratio}',
    optimalVerdict: '< 0.05 mm tolerans: düzeltme istege bagli, kumpas ile dogrulayin.',
    watchVerdict: 'Kontrollü sapma: dilimleyici kompansasyonunu uygulayin ve kuponu yeniden yazdirin.',
    severeVerdict: 'Siddetli taban yayilmasi: dilimleyici ofsetine güvenmeden önce Z basincini düzeltin.',
    mmUnit: 'mm',
    inchUnit: 'in',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Boyutsal Dogruluk Sorunu Olarak Fil Ayagi Kompansasyonu', level: 2 },
    { type: 'paragraph', html: 'Fil ayagi, ilk basilan katmanlarin nominal CAD sinirinin ötesine disa dogru genislemesidir. Bir kalibrasyon küpünde taban dudagi olarak görünür. Mühendislik parçalarinda islevsel bir hata haline gelir: kirlangig kuyruklari sikisir, yapi plakasina yakin delikler kapanir, citcitlar bosluk kaybeder, birlestirme plakalari yükseltilmis bir kenarda sallanir ve mastar bloklari artik düz oturmaz. Bu nedenle kullanisli bir <strong>fil ayagi kompansasyon hesaplayicisi</strong> kozmetik bir akis ayari gibi ele alinamaz. Ölçülen bir boyutsal hatayi negatif bir yatay genisleme degerine ve mümkün oldugunda, sikistirilmis malzeme yolunu tasarimin kendisinden kaldiran bir CAD pahina dönüstürmelidir.' },
    { type: 'paragraph', html: 'Bu hesaplayici, kusuru güçlü bir sekilde etkileyen üç fiziksel girdiden düzeltmeyi modeller: ölçülen taban hatasi, ilk katman yüksekligi ve efektif Z basinç boslugu. Temel iliski <code>E_duz = Hata x (KatmanYüksekligi / ZOfsetBasinci) x phi_temp</code> seklindedir. Sicaklik çarpani <code>phi_temp</code>, 60 °C referans yataginin üzerinde artar çünkü daha sicak bir taban, polimeri daha uzun süre yumusak tutar ve nozul yükünün malzemeyi yana dogru itmesine izin verir. Sonuç, dilimleyici için negatif yatay genisleme ve CAD için 45 derecelik pah derinligi olarak raporlanir.' },
    { type: 'stats', columns: 3, items: [
      { value: '0.01 mm', label: 'boyutsal ayar için giris çözünürlügü' },
      { value: '45°', label: 'varsayilan CAD pah açisi' },
      { value: 'phi_temp', label: 'yatak sicakligi akis çarpani' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Hatayi ölçün, görsel dudagi degil', html: 'Kare veya dikdörtgen bir kupon yazdirin, tabanin üzerindeki nominal duvari veya dis boyutu ölçün, ardindan ayni boyutu ilk katmanlar boyunca ölçün. Bu iki ölçüm arasindaki fark, fil ayagi hatasidir. Bir fotograftan tahmin etmeyin; araç, kumpas verileri için tasarlanmistir.' },

    { type: 'title', text: 'Fil Ayagi Neden Olusur: Nozul Basinci, Isi ve Plastik Akisi', level: 2 },
    { type: 'paragraph', html: 'Ilk katman, filamentin yatagi islatmasi ve yapismasi için kasitli olarak sikistirilir. Bu sikistirma, nozulu küçük bir basinç uygulayicisina dönüstürür. Erimis polimer nozuldan çikar, nozul ve yapi yüzeyi arasinda sikistirilir ve mevcut hacmi isgal etmelidir. Z boslugu çok küçük oldugunda, komut verilen ekstrüzyon boncugu için yeterli dikey alan yoktur, bu nedenle malzeme yanal olarak akar. Baskinin geri kalani boyutsal olarak dogru olsa bile taban genisler.' },
    { type: 'paragraph', html: 'Yatak sicakligi siddeti degistirir. 60 °C PLA, cam geçis bölgesine yakin olabilir, 75 °C PETG yapiskan ve uyumlu kalir ve 100 °C yataktaki ABS veya ASA ilk birkaç katmanda sicak kalir. Daha sicak bir yatak yalnizca yapismayi iyilestirmekle kalmaz; ayni zamanda tabandaki katilasmayi da geciktirir. Bu nedenle bu hesaplayici bir termal faktör uygular: <strong>60 °C 1.00, her ek 5 °C için 0.05 eklenir</strong>. Bu nedenle 75 °C bir PETG yatagi, sikistirmadan önce yaklasik 1.15 bir faktör kullanir.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Z basinci baskın', description: 'Çok düsük bir nozul boslugu boncugu düzlestirir ve plastigi disari iter. Hata en çok ilk katmanda belirgindir ve Z-ofset düzeltmesinden sonra genellikle iyilesir.', points: ['Genis ilk çizgi', 'Parlak ezilmis yüzey', 'Brim benzeri kenar'] },
      { title: 'Termal baskın', description: 'Yatak veya oda sicakligi yüksek oldugu için taban yumusak kalir. Makul bir ilk katmanda bile dudak birkaç katman boyunca uzanabilir.', highlight: true, points: ['Yuvarlak alt kenar', 'PETG veya ABS yaygin', 'Yavas sogutma'] },
      { title: 'Akis baskın', description: 'Ekstrüzyon çarpani, filament çapi veya ilk katman akisi çok yüksek. Sadece çevre degil, tüm alt bölge asiri doldurulmus görünebilir.', points: ['Ilk katmanin pürüzlü üstü', 'Çok genis çizgiler', 'Kapali bosluklar'] },
    ] },
    { type: 'tip', title: 'Z ofseti tahmin degil, girdi olarak kullanin', html: 'Z basinç boslugu, boncugu yataga zorlayan efektif bosluktur. Dilimleyiciniz 0.20 mm bir ilk katman rapor ediyor ancak gerçek sikistirma 0.10 mm gibi davraniyorsa, daha küçük basinç boslugunu kullanin. Bu, hesaplanan kompansasyonu daha büyük yapar ve bu da daha sikistirilmis bir boncugun fizigiyle eslesir.' },

    { type: 'title', text: 'Hesaplayici için Taban Genislemesi Nasil Ölçülür', level: 2 },
    { type: 'paragraph', html: '20.00 mm, 30.00 mm veya 40.00 mm gibi bilinen bir dis boyuta sahip basit bir test kuponu kullanin. Kupon düz dikey kenarlara, en az 8 ila 12 mm yükseklige sahip olmali ve ilk testte pah içermemelidir. Fil ayaginin kayboldugu yatagin birkaç milimetre üzerindeki gövde boyutunu ölçün. Ardindan tabanin en genis kisminda ayni boyutu ölçün. Fark, bu eksen için toplam dis hatadir.' },
    { type: 'paragraph', html: '20.00 mm bir küp ortada 20.02 mm ancak tabanda 20.24 mm ölçüyorsa, kararli gövdeye göre taban hatasi 0.22 mm dir. Nominalden farki degil, 0.22 mm girin. Bu, fil ayagi hesaplamasindan ilgisiz büzülmeyi, XY adim hatasini veya dilimleyici çizgi genisligi yanliligini ortadan kaldirir. Tüm yaziciyi kalibre etmek yerine taban deformasyonunu izole ediyorsunuz.' },
    { type: 'list', items: [
      'Parça oda sicakligina soguduktan sonra ölçün, özellikle ABS, ASA, PETG ve büyük PLA parçalar için.',
      'Hafif kumpas basinci kullanin; yumusamis veya dokulu bir tabani sikmak gerçek dudagi gizleyebilir.',
      'X ve Y taraflarinda ölçüm alin çünkü yatak hareketi, fan yönü ve portal egriligi kusuru asimetrik yapabilir.',
      'Brim ve etek malzemesini yok sayin. Gerçek parça duvarini ölçmeden önce brimi temizleyin.',
      'Kompansasyonu uyguladiktan sonra ayni kuponu yeniden yazdirin, böylece bir sonraki ölçüm karsilastirilabilir olur.',
    ] },
    { type: 'table', headers: ['Gözlem', 'Olası neden', 'En iyi ilk eylem'], rows: [
      ['Taban daha genis ancak üst duvar dogru', 'Ilk katman basincindan fil ayagi', 'Bu hesaplayiciyi kullanin ve negatif yatay genisleme uygulayin.'],
      ['Her katman büyük', 'XY ölçegi, ekstrüzyon çarpani veya filament çapi hatasi', 'Fil ayagi kompansasyonundan önce akisi ve XY kalibre edin.'],
      ['Sadece köseler sisiyor', 'Basinç ilerlemesi, hiz veya sogutma sorunu', 'Basinç ilerlemesini veya köse hizini ayarlayin.'],
      ['Alt yüzey pürüzlü ve yari saydam', 'Nozul çok yakin veya ilk katman akisi çok yüksek', 'Kompansasyondan önce Z-ofseti yükseltin veya ilk katman akisini azaltin.'],
    ] },

    { type: 'title', text: 'Negatif Yatay Genisleme vs CAD Pahi', level: 2 },
    { type: 'paragraph', html: 'Dilimleyici yatay genislemesi, takim yolu olusturmadan önce çokgen sinirini içe veya disa kaydirir. Fil ayagi düzeltmesi için ayar normalde negatiftir: taban 0.20 mm çok genis ölçülürse, dilimleyici -0.20 mm yakin bir degere ihtiyaç duyabilir ve burada katman yüksekligi, Z basinci ve yatak sicakligi ile degistirilir. Bu hizlidir, tersine çevrilebilir ve her parçanin benzer bir ilk katman deformasyonu paylastigi partiler için kullanislidir.' },
    { type: 'paragraph', html: 'Bir CAD pahi, modelin kendisinden malzeme kaldirir. Hesaplayici, 45 derecelik bir pah derinligini <code>Hata x sqrt(2)</code> olarak raporlar; bu, yatay taban dudagini temizleyen bir diyagonal yüze karsilik gelir. CAD pahlari genellikle kritik arayüzler için daha iyidir çünkü amaçlanan üst duvar boyutlarini korurken ilk katmana kontrollü bir rahatlama yolu saglar. Ayrica geometri kompansasyonu tasidigi için dilimleyiciler arasinda daha tasinabilirdir.' },
    { type: 'proscons', title: 'Bir düzeltme yöntemi seçme', items: [
      { pro: 'Negatif yatay genisleme, malzeme veya yazici profili basina hizla degistirilebilir.', con: 'Küresel olarak uygulanirsa küçük metni, ince duvarlari, pimleri ve delikleri etkileyebilir.' },
      { pro: 'CAD pahlari, yapi plakasina yakin birlesme yüzeyleri için açik ve saglamdir.', con: 'Model düzenlemeleri gerektirir ve indirilen parçalar için uygun olmayabilir.' },
      { pro: 'Hafif bir dilimleyici ofseti ile küçük bir pahi birlestirmek, siddetli PETG veya ABS tabanlarini kontrol edebilir.', con: 'Yeniden ölçmeden düzeltmeleri yigmak parçayi küçültebilir.' },
    ] },
    { type: 'message', title: 'Körü körüne kompanse etmeyin', html: 'Ilk katman görünür sekilde asiri ezilmisse, önce Z-ofseti düzeltin. Kompansasyon, kalan öngörülebilir taban genislemesini kaldirmali, ilk katmani süren bir nozulu gizlememelidir.' },

    { type: 'title', text: 'Malzemeye Göre Önerilen Kompansasyon', level: 2 },
    { type: 'paragraph', html: 'Malzeme davranisi önemlidir çünkü yapisma sicakligi, cam geçisi, sogutma hizi ve viskozite, alt boncugun donmadan önce ne kadar uzaGA akabilecegini etkiler. PLA, Z-ofset makul olduktan sonra küçük bir negatif yatay genislemeye iyi yanit verir. PETG, genellikle yatakta daha sicak basildigi ve güçlü yapisma için ilk katmani ayarlandigi için daha büyük bir düzeltme gerektirebilir. ABS ve ASA, sicak yatak ve oda tabani daha uzun süre yumusak tuttugu için islevsel parçalarda CAD rahatlamasi gerektirebilir.' },
    { type: 'table', headers: ['Malzeme', 'Tipik yatak araligi', 'Baslangiç tolerans hedefi', 'Kompansasyon notlari'], rows: [
      ['PLA', '55-65 °C', '< 0.05 mm', 'Dogru Z-ofset ile baslayin, ardindan küçük negatif yatay genisleme kullanin. Basinçli tabanlar için pah kullanislidir.'],
      ['PETG', '70-85 °C', '< 0.07 mm', 'Daha yüksek bir termal faktör bekleyin. PETG yapiskAn yuvarlak bir dudak olusturabileceginden asiri ilk katman akisindan kacinin.'],
      ['ABS/ASA', '90-110 °C', '< 0.08 mm', 'Üretim parçalari için CAD pahlari kullanin. Oda isisi ilk katmanlari uyumlu tutabilir.'],
      ['TPU', '40-60 °C', 'uygulamaya özel', 'Esnek filament kumpas altinda deforme olabilir. Nazikçe ölçün ve agresif küresel ofsetler yerine geometrik rahatlamayi tercih edin.'],
    ] },
    { type: 'card', title: 'Tablonun bir baslangiç noktasi olmasi', html: 'Dokulu PEI levha, düz cam yatak, nozul çapi, çizgi genisligi, ilk katman hizi, sogutma gecikmesi, oda sicakligi ve filament markasi ölçülen hatayi degistirebilir. Tablo beklentileri belirler; hesaplayici sizin ölçülen kuponunuz tarafindan yönlendirilmelidir.' },
    { type: 'summary', title: 'Malzeme ayar öncelikleri', items: [
      'PLA: önce Z-ofseti düzeltin, ardindan küçük dilimleyici kompansasyonu kullanin.',
      'PETG: taban hareketli kaldigi için yatak sicakligini ve ilk katman akisini izleyin.',
      'ABS/ASA: üretim arayüzlerinde CAD pahlarini tercih edin ve oda isinmasindan sonra dogrulayin.',
      'Esnek malzemeler: taban kumpas çeneleri altinda sikisabildigi için ölçüm yöntemi önemlidir.',
    ] },

    { type: 'title', text: 'Fil Ayagi Kompansasyonu ile Etkilesime Giren Dilimleyici Ayarlari', level: 2 },
    { type: 'paragraph', html: 'Farkli dilimleyiciler ayari Yatay Genisleme, Ilk Katman Yatay Genislemesi, Fil Ayagi Kompansasyonu, XY Kompansasyonu veya ilk katman genislemesi gibi isimler altinda gösterir. Küresel bir yatay genisleme tüm parça konturunu degistirir. Yalnizca ilk katman ayari yalnizca alt katmanlari etkiler ve genellikle boyutsal dogruluk için daha güvenlidir. Bir dilimleyici her ikisini de desteklediginde, fil ayagi için ilk katman kompansasyonunu kullanin ve yükseklik boyunca devam eden kalibre edilmis boyut hatalari için küresel XY kompansasyonunu ayirin.' },
    { type: 'paragraph', html: 'Çizgi genisligi ve ilk katman akisi da düzeltme ile etkilesime girer. Çok genis bir ilk katman çizgisi yatak yapismasini iyilestirebilir ancak nozul altina sigmasi gereken hacmi artirir. Boncugun dikey olarak gidecek yeri yoksa yatay olarak yayilir. Ilk katman akisini yüzde 105den yüzde 100e düsürmek, Z-ofseti 0.02 mm yükseltmek veya yatak sicakligini 5 °C düsürmek, büyük bir ofset uygulamaktan daha temiz bir sekilde gerekli negatif genislemeyi azaltabilir.' },
    { type: 'glossary', items: [
      { term: 'Yatay genisleme', definition: 'Takim yollari olusturulmadan önce model konturlarini genisleten veya daraltan bir dilimleyici ofseti.' },
      { term: 'Ilk katman genislemesi', definition: 'Yalnizca ilk katmana veya alt katmanlara uygulanan bir varyant, fil ayagi için daha uygundur.' },
      { term: 'Z basinç boslugu', definition: 'Ilk boncugun ne kadar sikistirildigini belirleyen efektif nozul-yatak alani.' },
      { term: 'Termal faktör', definition: 'Yatak 60 °Cden daha sicak oldugunda artan yanal akisi temsil etmek için burada kullanilan bir çarpan.' },
      { term: 'CAD pahi', definition: 'Sikistirilmis ilk katman malzemesine geometrik bir rahatlama bölgesi veren modellenmis egimli kenar.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Büyük negatif genisleme küçük özellikleri bozabilir', html: '-0.35 mm gibi bir deger büyük bir kutunun dis tabanini düzeltebilir ancak küçük kabartma harfleri silebilir, dar kaburgalari azaltabilir ve küçük direklerin çapini degistirebilir. Gerekli düzeltme büyük oldugunda, Z-ofseti, ilk katman akisini veya yatak sicakligini yeniden gözden geçirmek için bir sinyal olarak degerlendirin.' },

    { type: 'title', text: 'Hassas Bir Fil Ayagi Düzeltmesi için Is Akisi', level: 2 },
    { type: 'list', items: [
      'Gerçek parça için kullanilan ayni malzeme, yatak sicakligi, ilk katman yüksekligi ve ilk katman hizi ile basit bir kalibrasyon kuponu yazdirin.',
      'Tabanin üzerindeki kararli gövde boyutunu ölçün, ardindan en genis taban boyutunu ölçün ve ikisini çikarin.',
      'Ölçülen hatayi, ilk katman yüksekligini, efektif Z basinç boslugunu, yatak sicakligini ve hedef toleransi girin.',
      'Dilimleyicide raporlanan negatif yatay genisleme degerini uygulayin veya CAD raporlanan 45 derecelik pahi ekleyin.',
      'Kuponu yeniden yazdirin ve sogutmadan sonra tekrar ölçün.',
      'Kalan hata toleransin üzerinde kalirsa, asiri bir küresel ofsete atlamak yerine yarim adimlarla ayarlayin.',
      'Yalnizca tekrarlanabilir iki kupon tolerans hedefiniz dahilinde eslestikten sonra ayari bir malzeme profiline kilitleyin.',
    ] },
    { type: 'tip', title: 'Üretimle ayni yatak durumunu kullanin', html: 'KalIn bir yataktaki ilk soguk baski, yatak 30 dakika isitildiktan sonraki besinci baskidan farkli davranabilir. Üretim isi isil islatmadan sonra çalisiyorsa, kupOnu da isil islatmadan sonra kalibre edin.' },
    { type: 'diagnostic', variant: 'success', title: 'Iyi düzeltme hedefi', html: 'Pratik FDM boyutsal çalismalari için, 0.05 mm altindaki bir taban sapmasi, montaj uyumunun fil ayagi dudagi yerine normal bosluk tasarimi tarafindan kontrol edilebilecek kadar küçüktür. Daha siki hedefler, sert makineler, kararli filament ve tekrarlanabilir ölçüm teknigi gerektirir.' },
    { type: 'summary', title: 'Kilit çikarimlar', items: [
      'Fil ayagi, yalnizca görsel bir kusur degil, bir basinç ve sicaklik deformasyonu sorunudur.',
      'Yalnizca nominal CAD boyutunu degil, kararli duvara göre ölçülen taban hatasini kullanin.',
      'Negatif yatay genisleme dilimleyici düzeltmesidir; 45 derecelik pah ise CAD düzeltmesidir.',
      'Yatak sicakligi termal faktörü artirir çünkü taban daha yumusak kalir ve yanal olarak daha uzun süre akar.',
      'Siddetli kompansasyon degerleri, üretim kullanimindan önce ilk katman Z ve akis kontrollerini tetiklemelidir.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
