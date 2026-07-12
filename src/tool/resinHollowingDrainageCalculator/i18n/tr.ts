import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'sla-recine-oyma-ve-drenaj-hesaplayici';
const title = 'SLA Reçine Oyma ve Drenaj Hesaplayıcı';
const description = 'İçi boş SLA ve DLP reçine baskılar için güvenli duvar kalınlığı, drenaj deliği çapı, minimum havalandırma deliği sayısı ve karmaşıklığa göre ayarlanmış reçine tasarrufunu hesaplayın.';

const faqData = [
  { question: 'Hesaplayıcı neden her zaman en az iki drenaj deliği öneriyor?', answer: 'İçi boş bir reçine baskı, sıvı reçinenin çıkması için bir yola ve havanın girmesi için başka bir yola ihtiyaç duyar. İki açıklık, soyulma sırasında ayırma filmine karşı oluşan vakum etkisini kırmaya da yardımcı olur.' },
  { question: 'Reçine tasarrufu neden teorik boşluk hacminden daha düşük?', answer: 'Sıvı reçine iç duvarlarda, desteklerde, köşelerde ve küçük ceplerde kalır. Hesaplayıcı, geometrik karmaşıklığa bağlı olarak teorik boşluk hacminden yüzde 5, 10 veya 15 çıkarır.' },
  { question: '1,5 mm duvar kalınlığı her zaman yeterli midir?', answer: 'Hayır. Birçok masaüstü reçine baskısı için minimum güvenlik sınırıdır. Yüksek parçalar, ağır parçalar, mühendislik yükleri, sıcak ortamlar veya agresif zımparalama daha kalın duvarlar gerektirebilir.' },
  { question: 'Drenaj delikleri nereye yerleştirilmelidir?', answer: 'Delikleri baskı yönünde yapı levhası tarafına ve en düşük reçine birikme noktalarına mümkün olduğunca yakın yerleştirin, ardından dilimleyicide kapalı bir cep kalmadığını doğrulayın.' },
];

const howToData = [
  { name: 'Model hacmini ve yüksekliğini girin', text: 'Destekler ve yerleşimden sonraki dilimleyici hacmini kullanın, ardından parçanın baskı yönündeki yüksekliğini girin.' },
  { name: 'Geometrik karmaşıklığı seçin', text: 'Sıkışan reçinenin teorik oyma tasarrufundan düşülmesi için basit, orta veya yüksek karmaşıklığı seçin.' },
  { name: 'Reçine tipini seçin', text: 'Standart, dayanıklı veya mühendislik reçinesini seçin. Daha yüksek vizkoziteli reçineler daha büyük bir drenaj çapı önerisi alır.' },
  { name: 'Duvar ve drenaj önerilerini kontrol edin', text: 'Son dosyayı dilimlemeden önce duvar kalınlığını, drenaj çapını, delik sayısını ve kontrol listesini kullanın.' },
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
    {
      type: 'title',
      text: 'SLA Reçine Boşaltma ve Tahliye Hesaplayıcı Ne İşe Yarar?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Bu araç, SLA, DLP ve LCD reçine 3D baskıda en kritik zorluklardan birini çözer: içi boş modellerin optimizasyonu. Katı reçine parçalarının basılması pahalıdır, ağırdır ve baskı işlemi sırasında soyulma (ayırma) kuvvetlerini artırır. Modelin içinin boşaltılması malzeme kullanımını azaltır, ancak uygun tahliye olmadan içi boş boşlukların açılması, vakum kuvvetleri nedeniyle kürlenmemiş reçinenin içeride sıkışmasına ve baskı hatalarına yol açar. Bu hesaplayıcı, ideal duvar kalınlığını hesaplar, doğru tahliye deliği çapını ve sayısını önerir ve basılan parçanın iç duvarlarında kaçınılmaz olarak sıkışıp kalan sıvı reçineyi hesaba katarak gerçek reçine tasarrufunu tahmin eder.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: 'Masaüstü SLA için önerilen minimum duvar kalınlığı'
          },
          {
            value: '2 delik',
            label: 'Vakumu kırmak için gereken minimum hava deliği sayısı'
          },
          {
            value: '10-15%',
            label: 'İç yüzey tutunması nedeniyle reçine hacminde azalma'
          },
          {
            value: '30-70%',
            label: 'İç boşaltma ile elde edilen ortalama toplam ağırlık azalması'
          }
        ]
    },
    {
      type: 'title',
      text: 'Duvar Kalınlığı Reçine Tasarrufunu Nasıl Etkiler?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Duvar kalınlığı, tasarruf edilen reçine miktarını belirleyen birincil değişkendir. Daha kalın bir duvar yapısal gücü artırır ancak reçineyi hızla daha fazla tüketerek iç boşaltma verimliliğini düşürür. Tersine, çok ince bir duvar kırılgan olur, kürleme sırasında bükülmeye meyillidir ve yazıcı her katmanı FEP filmden ayırırken mekanik soyulma kuvvetlerine dayanamayabilir. Amaç, modelin şeklini ve kullanışlılığını korurken malzeme tasarrufunu en üst düzeye çıkaran optimum noktayı bulmaktır.'
    },
    {
      type: 'proscons',
      title: 'Reçine Baskıların İçini Boşaltmanın Artıları ve Eksileri',
      items: [
          {
            pro: 'Malzeme maliyetlerinde ve toplam baskı ağırlığında büyük azalma',
            con: 'İç boşlukların yıkanması ve kürlenmesi için son işlem gerektirir'
          },
          {
            pro: 'Katman başına daha düşük yüzey alanı, FEP film üzerindeki soyulma kuvvetlerini azaltır',
            con: 'Yanlış yerleştirilmiş delikler modelin görsel estetiğini bozabilir'
          },
          {
            pro: 'Kürleme sonrası termal stresi ve bükülmeyi azaltır',
            con: 'Sıkışan sıvı reçinenin daha sonra parçanın çatlamasına neden olma riski'
          }
        ]
    },
    {
      type: 'title',
      text: 'İçi Boş Reçine Baskılarda Vantuz Etkisini Anlamak',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'İçi boş bir model basıldığında, hazneye daldığında kapalı bir bölme oluşturur. Bu bölmede havalandırma delikleri yoksa, her kaldırma döngüsü kürlenmiş katman ile ayırma filmi arasında güçlü bir kısmi vakum (vantuz etkisi) oluşturur. Bu kuvvet baskıyı çekerek katman ayrılmasına, katman çizgilerine, destek hatalarına ve hatta modelin yapı levhasından tamamen kopmasına neden olur. Havalandırma deliklerinin eklenmesi havanın girmesini sağlar, basınç farkını nötralize eder ve sorunsuz soyulma döngüleri sağlar.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mühürlü Boşlukların Tehlikesi',
      html: 'İçi boş bir alanı asla tamamen mühürlü bırakmayın. Basılan bir parçanın içinde sıkışan sıvı reçine, zamanla kürlenmiş duvarları yavaşça bozacak ve sonunda modelin çatlamasına, toksik reçine sızdırmasına veya tamamen parçalanmasına neden olacaktır. İç kısmı yıkamak ve dahili bir UV ışık kaynağıyla kürlemek için her zaman en az iki delik bırakın.'
    },
    {
      type: 'title',
      text: 'Tahliye Deliği Yerleşimi İçin En İyi Uygulamalar',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Tahliye deliklerini yapı levhasına mümkün olduğunca yakın yerleştirin, böylece reçine baskının erken safhalarında kaçabilir.',
          'Her zaman en az iki delik kullanın: biri sıvı reçinenin akması için, diğeri ise havanın girmesi için.',
          'Estetiği korumak için delikleri tabanların altı veya ek yerlerinin arkası gibi görünmeyen yüzeylere yönlendirin.',
          'İzole edilmiş her bir iç bölmenin kendi tahliye deliği setine sahip olduğundan emin olun.'
        ]
    },
    {
      type: 'title',
      text: 'Hesaplayıcı Geometrik Karmaşıklığı Nasıl Ayarlar?',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Basit Geometri',
            description: 'Düşük detaylı modeller, küreler veya bloklar. Düz iç yüzeylerde minimum reçine (yaklaşık %5) tutar.'
          },
          {
            title: 'Orta Karmaşıklık',
            description: 'Karakter modelleri veya standart mekanik parçalar. İç destekler ve kavisler orta düzeyde reçine (yaklaşık %10) tutar.',
            highlight: true
          },
          {
            title: 'Yüksek Karmaşıklık',
            description: 'Çok detaylı minyatürler, kafes yapılar veya karmaşık boş kanallar. Kılcal etki nedeniyle önemli ölçüde reçine (yaklaşık %15+) tutar.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Reçine Viskozitesi ve Tahliye Deliği Boyutlandırmasını Anlamak',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Reçine Sınıfı',
          'Viskozite Seviyesi',
          'Min Delik Çapı',
          'Önerilen Yerleşim'
        ],
      rows: [
          [
              'Reçine Sınıfı',
              'Viskozite Seviyesi',
              'Min Delik Çapı',
              'Önerilen Yerleşim'
            ],
          [
              'Standart Reçine',
              'Düşük-Orta',
              '2.0 - 3.0 mm',
              'Taban veya gizli düz yüzeyler'
            ],
          [
              'Dayanıklı / Esnek',
              'Orta-Yüksek',
              '3.0 - 4.5 mm',
              'Soyulmayı önlemek için köşeler ve ek yerleri'
            ],
          [
              'Mühendislik / Dökülebilir',
              'Çok Yüksek',
              '4.5 - 6.0 mm',
              'Yerçekimi tahliyesi için doğrudan görüş hattı'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Duvar Kalınlığı Ne Zaman 1.5 mm\'nin Üzerine Çıkarılmalıdır?',
      level: 2
    },
    {
      type: 'tip',
      title: 'Ölçek ve İşlev duvar kalınlığını belirler',
      html: 'Küçük teşhir figürleri için 1,5 mm güvenilir bir minimum değer olsa da, daha büyük baskılar için duvar kalınlığını artırmalısınız. 150 mm\'den daha uzun parçalar için 2,0 mm ila 2,5 mm duvarları hedefleyin. Yük taşıyan mekanik bileşenler veya esnek reçinelerle basılan parçalar için, yük altında yapısal çökmeyi önlemek için duvarlar 3,0 mm veya daha kalın olmalıdır.'
    },
    {
      type: 'title',
      text: 'İçi Boş SLA Baskı İçin Teknik Sözlük',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA Boşaltma',
            definition: 'Reçineden ve baskı süresinden tasarruf etmek için katı bir 3D modeli belirli bir duvar kalınlığına sahip içi boş bir kabuğa dönüştürme işlemi.'
          },
          {
            term: 'Vantuz Etkisi',
            definition: 'Baskı sırasında kapalı bir içi boş boşluk ayırma filminden çekildiğinde oluşan vakum kuvveti.'
          },
          {
            term: 'Soyulma Kuvveti',
            definition: 'Kürlenmiş katman hazne tabanından ayrılırken model ve desteklerin maruz kaldığı mekanik gerilim.'
          },
          {
            term: 'Reçine Sıkışması',
            definition: 'Yüzey gerilimi nedeniyle kürlenmemiş sıvı reçinenin iç köşelerde, desteklerde ve dokularda kalması.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Başarılı İçi Boş Baskılar İçin Kontrol Listesi Özeti',
      level: 2
    },
    {
      type: 'summary',
      title: 'Dilimleme Öncesi SLA Kontrol Listesi',
      items: [
          'İç boşaltma kalınlığının model ölçeğine uygun olduğunu doğrulayın.',
          'En düşük baskı noktalarına en az iki tahliye deliğinin yerleştirildiğinden emin olun.',
          'Havalandırması olmayan izole edilmiş iç boşlukları kontrol edin.',
          'IPA ile iç yıkama ve dahili UV LED kürleme planı yapın.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    modelInputsLabel: 'Model Girdileri',
    volumeLabel: 'Toplam Model Hacmi',
    heightLabel: 'Parça Yüksekliği',
    complexityLabel: 'Geometrik Karmaşıklık',
    resinTypeLabel: 'Reçine Tipi',
    simpleLabel: 'Basit',
    moderateLabel: 'Orta',
    highLabel: 'Yüksek',
    standardLabel: 'Standart',
    toughLabel: 'Dayanıklı',
    engineeringLabel: 'Mühendislik',
    resultsLabel: 'Oyma ve Drenaj Sonucu',
    wallThicknessLabel: 'Önerilen Duvar',
    drainDiameterLabel: 'Drenaj Çapı',
    drainHoleCountLabel: 'Minimum Delik',
    adjustedSavingLabel: 'Tahmini Reçine Tasarrufu',
    adjustedSavingNote: 'İç yüzeylerde tutulan sıvı reçineyi hesaba katmak için karmaşıklığa göre ayarlanmıştır.',
    trapFactorLabel: 'Sıkışan Reçine Faktörü',
    trapFactorHelp: 'Bu faktör, kör boşluklardaki vizkoz reçine yüzey gerilimini telafi etmek için geometrik karmaşıklıkla birlikte değişir.',
    theoreticalSavingLabel: 'Teorik Boşluk Hacmi',
    trappedAllowanceLabel: 'Sıkışan Reçine Toleransı',
    savingUnitLabel: 'Tasarruf',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Not: Drenaj delikleri, baskı yönünde yapı levhası tarafına ve en düşük reçine toplama noktalarına yakın yerleştirilmelidir.',
    vacuumWarning: 'İçi boş gövdeler, ayırma filmine karşı oluşan vakumu kırmak için her zaman en az iki drenaj deliği gerektirir.',
    trappedResinWarning: 'Karmaşık geometriler sıvı reçineyi içeride sıkıştırır; bu hesaplama toleransı tahmin eder.',
    checklistTitle: 'Dilimleme Öncesi Kontrol Listesi',
    checklistItems: ['Drenaj deliklerinin yapı levhasına yakın bölgede olduğundan emin olun.', 'Duvar kalınlığının 1,5 mm\'nin altına düşmediğini doğrulayın.', 'Modelde kapalı reçine adaları veya boşluklar olmadığını onaylayın.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
