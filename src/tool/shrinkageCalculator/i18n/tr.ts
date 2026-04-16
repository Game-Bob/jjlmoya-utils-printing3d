import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = '3d-yazici-cehme-hesaplama';
const title = '3D Çekme Hesaplama: Ölçek Faktörü ve Çekme';
const description = 'Termal çekmeyi telafi etmek ve tam ölçüm sonuçları almak için 3D tasarımlarınızı malzemeye (ABS, Naylon, ASA) göre ne kadar ölçeklendirmeniz gerektiğini hesaplayın.';

const faqData = [
  {
    question: 'ABS neden PLA\'dan daha fazla çeker?',
    answer: 'ABS, ekstrüzyon için daha yüksek sıcaklıklar gerektiren amorf bir polimerdir. 250°C\'den oda sıcaklığına soğurken termal gradyan daha büyüktür, bu da moleküllerin PLA\'ya göre daha agresif bir şekilde bir araya toplanmasına neden olur.',
  },
  {
    question: 'Manuel kalibrasyonu ne zaman kullanmalıyım?',
    answer: 'Filament markasını değiştirdiğinizde veya 0,1 mm\'nin altındaki mekanik toleranslara ihtiyaç duyduğunuzda kullanmalısınız. Çekme katsayısı, aynı markanın farklı renkleri arasında bile değişkenlik gösterebilir.',
  },
  {
    question: 'Doluluk oranı (infill) çekmeyi etkiler mi?',
    answer: 'Evet. Doluluk oranı ne kadar yüksekse, parça soğurken merkeze doğru kuvvet uygulayan malzeme miktarı o kadar fazladır. Dolu parçalar boş parçalara göre biraz daha fazla çekme eğilimindedir.',
  },
];

const howToData = [
  {
    name: 'Malzemenizi seçin',
    text: 'Sektör standardı katsayıları uygulamak için önceden ayarlanmış malzemelerden (ABS, ASA, Naylon vb.) seçim yapın.',
  },
  {
    name: 'Gerçek bir parça ile kalibre edin',
    text: 'Tam hassasiyet gerekiyorsa 100 mm\'lik bir küp bastırın, soğuduktan sonra ölçün ve verileri kalibrasyon moduna girin.',
  },
  {
    name: 'Faktörü Slicer\'a kopyalayın',
    text: 'Elde edilen ölçek yüzdesini kopyalayın ve dilimleme yazılımınızın (Cura, PrusaSlicer) ilgili eksenlerine uygulayın.',
  },
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Malzeme Ayarları',
    tabCalibration: 'Manuel Kalibrasyon',
    labelDefaultMaterial: 'Varsayılan Malzeme',
    labelEstimatedShrinkage: 'Tahmini Çekme',
    unitPercent: '%',
    labelDesignSize: 'Tasarım Ölçüsü (Slicer)',
    labelRealSize: 'Basılan Parça Ölçüsü (Gerçek)',
    unitMm: 'mm',
    labelAxesCompensation: 'Eksen Telafisi',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* Z ekseni, katmanlar arası yapışma nedeniyle genellikle daha az çeker.',
    labelRecommendationTitle: 'Teknik Tavsiye',
    labelResultSlicerScale: 'ÖLÇEK YÜZDESİ (SLICER)',
    labelResultFactor: 'ÇARPAN FAKTÖRÜ',
    btnCopy: 'Yüzdeyi Kopyala',
    btnCopied: 'Kopyalandı!',
    recommendations: {
      'ABS': 'Çekmeden kaynaklanan ek çarpılmaları (warping) en aza indirmek için en az 40°C\'lik bir kabin sıcaklığı önerilir.',
      'ASA': 'Mükemmel UV direnci. Yapısal yapışmayı iyileştirmek için katman soğutmayı azaltın.',
      'Nylon': 'Çok higroskopik bir malzeme. Baloncuk oluşumunu önlemek için baskıdan önce 80°C\'de 6-8 saat kurutun.',
      'PETG': 'Daha az çekme. Yoğun parçalarda fazla ekstrüzyon (over-extrusion) varsa %95-98 akış çarpanı kullanın.',
      'PLA': 'Asgari çekme. İnce detaylar için iyi bir hava akışı (%100 katman fanı) sağlayın.'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3D Baskı Çekme Hesaplama: Boyutsal Doğruluk',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Eğer bir <strong>3D baskı</strong> meraklısıysanız, muhtemelen bu sorunla karşılaşmışsınızdır: Mükemmel ölçülerde bir parça tasarlarsınız (örneğin 20x20x20 mm bir küp), bastırırsınız ve kumpasla ölçtüğünüzde 19,7 mm olduğunu görürsünüz. Ne oldu? Cevap <strong>malzeme çekmesi</strong> (shrinkage).',
    },
    {
      type: 'paragraph',
      html: 'Çekme, termoplastikler eriyik halden (yüksek sıcaklıklar) oda sıcaklığındaki katı hallerine geçerken meydana gelen kaçınılmaz bir fiziksel olgudur. Soğudukça moleküller yeniden düzenlenir ve "sıkılaşarak" parçanın toplam hacmini azaltır. <strong>Çekme hesaplama</strong> aracımız, bu değişikliği öngörmenize ve dilimleyicinizdeki ölçeği parçalarınızın tek seferde tam oturacağı şekilde ayarlamanıza yardımcı olmak için tasarlanmıştır.',
    },
    {
      type: 'title',
      text: 'Plastikler neden çeker?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FDM (Erimiş Biriktirme Modelleme) baskıda, sıcak plastik katmanlarını (200°C ile 300°C arası) bir yüzeye biriktiririz. Malzeme soğudukça, <strong>termal genleşme katsayısı</strong> olarak bilinen duruma uğrar. Temel olarak termal enerji molekülleri birbirinden ayrı tutar; bu enerji ortadan kalktığında moleküller arası kuvvetler onları birbirine yaklaştırır.',
    },
    {
      type: 'paragraph',
      html: 'Tüm malzemeler aynı davranmaz. Amorf plastikler (PLA gibi) daha az çekme eğilimi gösteren düzensiz bir yapıya sahiptir. Bunun aksine, kristalleşmeye meyilli veya çok yüksek sıcaklıklar gerektiren plastikler (ABS veya Naylon gibi) çok daha agresif ve kontrolü zor bir çekme gösterirler.',
    },
    {
      type: 'title',
      text: 'Yaygın Malzemeler ve Çekme Aralıkları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Akrilonitril Bütadien Stiren): %0,8 – %2,0. Yüksek çekme oranı nedeniyle en zor malzemelerden biridir ve genellikle "warping" (köşe kalkması/deformasyonu) neden olur.',
        'ASA: %0,5 – %0,9. ABS\'ye göre daha kontrollü çekme gösteren, UV dirençli bir alternatif.',
        'Naylon (PA): %0,7 – %2,5. Karbon veya cam elyaf dolgusuna bağlı olarak çekme oranı büyük ölçüde değişebilir.',
        'PETG: %0,2 – %0,5. Boyutsal olarak çok kararlıdır, ABS\'nin termal direncinin gerekmediği mekanik parçalar için idealdir.',
        'PLA: %0,1 – %0,3. Kullanım kolaylığı açısından altın standarttır; çoğu kullanım için çekme oranı ihmal edilebilir düzeydedir.',
      ],
    },
    {
      type: 'title',
      text: 'Ölçek Faktörü Nasıl Hesaplanır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pek çok kullanıcı sadece "yüzdeyi ekleme" hatasını yapar (eğer %2 eksikse, ölçeği %102 yaparlar). Ancak matematiksel olarak bir kaybı telafi etmek için ölçek biraz farklı olmalıdır. Hesaplayıcımız tarafından kullanılan doğru formül şudur: <br><strong>Ölçek Faktörü = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Burada <strong>S</strong>, ondalık sayı olarak ifade edilen çekme yüzdesidir (örneğin %2 için 0,02). Örnek olarak, %2 çeken bir malzeme için ölçek faktörü 1,0204\'tür, bu da dilimleyicide (Cura, PrusaSlicer, Bambu Studio) ölçeği <strong>%102,04</strong> olarak ayarlamamız gerektiği anlamına gelir.',
    },
    {
      type: 'title',
      text: 'Manuel Kalibrasyon: İstenen Ölçü vs. Gerçek Ölçü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ters kalibrasyon işlemi basittir: Ölçüsü bilinen bir test nesnesi (örneğin 100 mm\'lik kalibrasyon küpü) basın. Tamamen soğuduktan sonra (en az 30 dakika beklemek çok önemlidir), parçayı dijital kumpasla ölçün. Her iki değeri de hesaplayıcıya girin; o size o filament makarası için tam ayar yüzdesini verecektir.',
    },
    {
      type: 'title',
      text: 'Düzgün Olmayan Çekme: X, Y ve Z Ekseni Sorunu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3D baskıda fizik her yönde aynı değildir. Katmanlar üst üste yığıldığı için, Z eksenindeki <strong>katmanlar arası yapışma</strong> genellikle dikey çekmeyi sınırlar. Normalde, yatay düzlemdeki ölçümlerin (X ve Y eksenleri) yükseklikten (Z ekseni) daha fazla telafi gerektirdiğini göreceksiniz.',
    },
    {
      type: 'tip',
      title: 'Uzman İpucu',
      html: '<p>Naylon veya teknik malzemelerle çalışıyorsanız, parçayı her zaman baskıdan 24 saat sonra ölçün. Bazı plastikler ortam nemini emer ve soğuduktan sonra bir miktar "şişerek" nihai ölçüyü değiştirebilir.</p>',
    },
    {
      type: 'title',
      text: 'Son Doğruluğu Etkileyen Faktörler',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Ekstrüzyon Sıcaklığı: Daha yüksek sıcaklıklarda malzeme daha genleşmiş halde gelir ancak genellikle daha ani bir soğumaya maruz kalır.',
        'Yatak Sıcaklığı: Sıcak bir yatak, parçanın tabanının üst kısmından daha hızlı çekmesini önleyerek çarpılmayı azaltır.',
        'Doluluk Yoğunluğu: Çok yoğun parçalar, merkeze doğru içe çekme kuvveti uygulayan daha fazla plastik kütlesine sahiptir.',
        'Katman Fanı: ABS gibi malzemelerde, fanın çok güçlü olması çatlaklara ve düzensiz aşırı çekmeye neden olabilir.',
      ],
    },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'Simplify3D: Boyutsal Doğruluk ve Çekme',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Malzeme Tablosu ve Çekme Faktörleri',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: 3D Baskı Malzeme Çekmesini Anlamak',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
