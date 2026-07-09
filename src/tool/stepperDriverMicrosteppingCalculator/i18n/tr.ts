import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'step-motor-mikro-adim-hesaplayici-3d-yazici',
  title: 'Step Motorlar için mm Başına Adım Sayısı ve Mikro Adım Hesaplayıcı',
  description: '3D yazıcı step motorları için mm başına tam adım sayısını (veya inç başına adımı) ve teorik mekanik çözünürlüğü hesaplayın. TMC2209, TMC2208, kayışlar ve kılavuz vidaları destekler.',
  ui: {
    title: 'Step Sürücü Mikro Adım Hesaplayıcı',
    presetsLabel: 'HAZIR AYAR',
    presetBelt16: 'GT2 Kayışı ve 16T Kasnak (X/Y)',
    presetBelt20: 'GT2 Kayışı ve 20T Kasnak (X/Y)',
    presetZLead8: 'T8 Kılavuz Vidasi 8mm Hatve (Z)',
    presetZLead2: 'T8 Kılavuz Vidasi 2mm Hatve (Z)',
    unitSystemLabel: 'Birim Sistemi',
    metricLabel: 'Metrik',
    imperialLabel: 'İmparatorluk',
    configLabel: 'MOTOR VE SÜRÜCÜ YAPILANDIRMASI',
    motorStepAngleLabel: 'Motor Adım Açısı',
    driverMicrosteppingLabel: 'Sürücü Mikro Adımı',
    transmissionModeLabel: 'İletim Türü',
    transmissionBelt: 'Kayış Tahriki',
    transmissionLeadScrew: 'Kılavuz Vidasi / Dişli Çubuk',
    beltPitchLabel: 'Kayış Adımı',
    pulleyTeethLabel: 'Kasnak Dişleri',
    leadScrewPitchLabel: 'Kılavuz Vidasi Hatvesi (Devir Başına Mesafe)',
    resultsLabel: 'HESAPLANAN ÇIKTILAR',
    stepsPerUnitLabel: 'Donanım Yazılımı Yapılandırması (Adım)',
    mechanicalResolutionLabel: 'Teorik Çözünürlük',
    stepsPerUnitUnitMetric: 'adım/mm',
    stepsPerUnitUnitImperial: 'adım/inç',
    mechanicalResolutionUnitMetric: 'mikron/adım',
    mechanicalResolutionUnitImperial: 'binde bir/adım',
    formulaLabel: 'MATEMATİKSEL FORMÜLLER',
    formulaStepsPerRevolution: 'Adım/Devir = 360 / Adım Açısı',
    formulaMicrostepsPerRev: 'Mikro Adım/Devir = Adım/Devir * Mikro Adım',
    formulaDistancePerRev: 'Mesafe/Devir = Diş * Adım (veya Kılavuz Vidasi Hatvesi)',
    formulaStepsPerUnit: 'Adım/Birim = Mikro Adım/Devir / Mesafe/Devir',
    formulaResolution: 'Çözünürlük = Mesafe/Devir / Mikro Adım/Devir',
    explainResolutionLabel: 'Bu ne anlama geliyor?',
    explainResolutionText: 'Sürücü tek bir mikro adım komutu verdiğinde 3D yazıcınız ekseninin yapabileceği en küçük teorik doğrusal hareketi temsil eder. Daha düşük çözünürlük değerleri daha ince mekanik konumlandırma hassasiyeti gösterir.',
    copyButton: 'Donanım Yazılımı Komutunu Kopyala',
    copiedButton: 'Kopyalandı!',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'diş',
    stepAngle18: '1,8° (200 adım/devir)',
    stepAngle09: '0,9° (400 adım/devir)',
    stepAngle75: '7,5° (48 adım/devir)',
    stepAngle15: '15° (24 adım/devir)',
    microstep1: '1x (Tam Adım)',
    microstep2: '2x',
    microstep4: '4x',
    microstep8: '8x',
    microstep16: '16x',
    microstep32: '32x',
    microstep64: '64x',
    microstep128: '128x',
    microstep256: '256x',
  },
  seo: [
    {
      type: 'title',
      text: 'Step Motor Kalibrasyonu ve Donanım Yazılımında Milimetre Başına Adım Yapılandırma Kılavuzu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tüketici ve profesyonel sınıf 3D yazıcılarda hassas hareket kontrolü step motorlara, step sürücülere ve doğrusal aktarma mekanizmalarına dayanır. Step motorlar sürekli dönmez; bunun yerine tam bir dönüşü belirli sayıda ayrık adıma böler. 3D yazıcı kontrol kartının baskı kafasını veya baskı yatağını tam bir mesafe boyunca hareket ettirebilmesi için, donanım yazılımının bir birim doğrusal mesafeye (milimetre veya inç) kaç motor adımı (mikro adımlar dahil) karşılık geldiğini tam olarak bilmesi gerekir. Bu değer, milimetre başına adım veya inç başına adım olarak bilinir ve Marlin, Klipper veya RepRapFirmware gibi donanım yazılımı yapılandırmalarında saklanan kritik bir ayardır.',
    },
    {
      type: 'paragraph',
      html: 'Bu yapılandırma en ufak bir şekilde yanlışsa, 3D yazıcının fiziksel hareketleri, dilimleme yazılımı tarafından oluşturulan dijital talimatlarla eşleşmeyecektir. Bu uyumsuzluk, basılan nesnelerde boyutsal hassasiyetsizliğe yol açar; parçalar amaçlandığından daha büyük veya daha küçük olur, delikler yanlış hizalanır ve çok parçalı montajlar birbirine uymaz. Fiziksel bileşenleri, sürücü özelliklerini ve aktarma oranlarını anlamak, operatörlerin mekanik hatalar getiren deneme-yanılma kalibrasyon yöntemlerine güvenmek yerine matematiksel olarak mükemmel değerleri hesaplamasını sağlar.',
    },
    {
      type: 'title',
      text: 'Step Motor Özelliklerinin ve Mekanik Niteliklerinin Karşılaştırılması',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3D baskıda kullanılan en yaygın step motorlar NEMA 17 form faktöründeki hibrit step motorlardır. Bu motorlar tipik olarak iki adım açısı varyasyonunda gelir: adım başına 1,8 derece ve adım başına 0,9 derece. 1,8 derecelik bir step motor, tam bir 360 derecelik dönüşü tamamlamak için 200 tam adım gerektirir. 0,9 derecelik bir step motor aynı dönüşü tamamlamak için 400 tam adım gerektirir. Bu özellikler arasında seçim yapmak, baskı sisteminin konumlandırma doğruluğunu, maksimum torkunu ve çalışma gürültüsünü etkiler.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '1,8 Derecelik Step Motor',
          description: 'Çoğu ticari 3D yazıcı için standart motor seçeneği. Yüksek hızlarda sağlam tork sunar ve ekonomiktir.',
          points: [
            'Devir başına 200 tam adım',
            'Daha iyi yüksek hız tork tutma',
            'Daha düşük elektriksel endüktans gereksinimleri',
            'Genel FDM uygulamaları için yeterli çözünürlük'
          ]
        },
        {
          title: '0,9 Derecelik Step Motor',
          description: 'İnce detaylı yazıcılar ve yüksek çözünürlüklü ekstrüder sistemleri için popüler yüksek hassasiyetli motor seçeneği.',
          points: [
            'Devir başına 400 tam adım',
            'Mikro adımlamadan önce iki kat mekanik çözünürlük',
            'Azaltılmış konum hatası ve daha düşük rezonans titreşimleri',
            'Yüksek hızlarda daha yüksek arka-EMK tork sınırını azaltır'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: '0,9 derecelik bir motor iki kat fiziksel konumlandırma kapasitesi sunarken, aynı dönüş hızına ulaşmak için anakart mikrodenetleyicisinden iki kat daha fazla adım darbesi talep eder. Eski 8-bit mikrodenetleyicilerde çalışan yüksek hızlı baskı platformlarında bu, işleme kuyruğunu doyurabilir ve baskı takılmalarına veya hız sınırlamalarına neden olabilir. Modern 32 bit denetleyicilerde bu sınırlama nadiren sorun olur ve bu da 0,9 derecelik motorları yüzey kalitesinin kritik olduğu X ve Y eksenleri için mükemmel bir yükseltme haline getirir.',
    },
    {
      type: 'title',
      text: 'Step Motoru ve Sürücü Terminolojisi Sözlüğü',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Adım Açısı',
          definition: 'Tek bir tam adım bobin uyarım sırası oluştuğunda motor milinin açısal dönüşü, tipik olarak 1,8 veya 0,9 derece.',
        },
        {
          term: 'Mikro Adımlama',
          definition: 'Motor fazları arasındaki akımı dengeleyerek tek bir tam adım daha küçük alt adımlara bölen, hareketi yumuşatan ve tistreşimi azaltan sürücü tarafından kontrol edilen bir yöntem.',
        },
        {
          term: 'Kayış Adımı',
          definition: 'Senkron bir dişli kayışta birbirine bitişik iki dişin merkezleri arasındaki mesafe, 3D baskıda kullanılan GT2 kayışları için yaygın olarak 2,0 milimetre.',
        },
        {
          term: 'Kılavuz Vidası Hatvesi',
          definition: 'Vida milinin bir tam 360 derecelik dönüşü sırasında bir somunun kılavuz vidası boyunca kat ettiği doğrusal mesafe.',
        },
        {
          term: 'Tutma Torku',
          definition: 'Bobinlere anma akımı uygulandığında motorun sabit bir mil üzerinde uygulayabileceği maksimum tork miktarı.',
        },
        {
          term: 'Arka Elektromotor Kuvveti (Arka-EMK)',
          definition: 'Motor bobinlerinin manyetik alan içindeki dönüşü tarafından üretilen, besleme gerilimine karşı gelen ve maksimum hız ve torku sınırlayan gerilim.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Zamanlama Kayışları için Milimetre Başına Adım Hesaplama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kartezyen, CoreXY ve Delta 3D yazıcıların yatay hareket eksenleri (genellikle X ve Y) için, step motordan gelen dönme hareketini doğrusal harekete dönüştürmek amacıyla senkron zamanlama kayışları kullanılır. Mekanik hesaplama tamamen kayış adımına ve motor miline bağlı tahrik kasnağının üzerindeki diş sayısına bağlıdır. Diş boşluğunu ve kaymayı önlemek için kayış diş profili kasnak diş profiliyle eşleşmelidir.',
    },
    {
      type: 'table',
      headers: ['Kasnak Boyutu', 'Kayış Tipi', 'Kayış Adımı', 'Adım/devir (1,8°, 16x)', 'mm Başına Adım (Metrik)', 'İnç Başına Adım (İmparatorluk)'],
      rows: [
        ['16 Diş', 'GT2', '2,0 mm', '3200', '100,00 adım/mm', '2540,00 adım/in'],
        ['20 Diş', 'GT2', '2,0 mm', '3200', '80,00 adım/mm', '2032,00 adım/in'],
        ['32 Diş', 'GT2', '2,0 mm', '3200', '50,00 adım/mm', '1270,00 adım/in'],
        ['20 Diş', 'GT3', '3,0 mm', '3200', '53,33 adım/mm', '1354,67 adım/in'],
        ['16 Diş (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 adım/mm', '5080,00 adım/in'],
        ['20 Diş (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 adım/mm', '4064,00 adım/in']
      ],
    },
    {
      type: 'tip',
      title: 'Kasnak Seçimi için Pratik Tasarım Kararı',
      html: '20 dişli bir kasnak yerine 16 dişli bir kasnak seçmek mekanik çözünülürlüğü yüzde 25 artırır ve arabaya uygulanan doğrusal kuvveti artırır. Bununla birlikte, daha küçük kasnaklar zamanlama kayışını daha dar bir yarıçap etrafında bükülmeye zorlar, bu da zamanla kayış aşınmasını artırabilir ve daha yüksek titreme frekanslarına neden olabilir. Standart yapılar için 20 dişli kasnaklar, kayış ömrü ve çözünürlük arasında dengeli bir uzzlaşmayı temsil eder.',
    },
    {
      type: 'title',
      text: 'Mikro Adımlama Gerçekleri: Tork Kayıpları ve Enterpolasyon Çözümü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Birçok operatör, sürücü mikro adımlama çözünürlüğünü 64, 128 veya 256 gibi yüksek değerlere çıkarmanın 3D yazıcılarının doğruluğunu sonsuza kadar artıracağına inanır. Bu yaygın bir yanılgıdır. Gerçekte, mikro adımlar arasındaki artımlı tork, mikro adımlama bölümü arttıkça drasik olarak düşer. Elektrik akımı, motor milini fiziksel kutuplar arasında konumlandırmak için sinüs ve kosinüs eğrilerine bölünür. Eğer eksen üzerindeki dış sürtünme veya yük bir mikro adımın artımlı torkunu aşarsa motor mili, birkaç mikro adım darbesi birikene kadar hareket etmez.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Teorik ve Fiziksel Mikro Adımlama Tork Sınırlaması',
      html: '16 mikro adımda, mikro adım başına artımlı tork yaklaşık olarak motor tutma torkunun yüzde 9,8\'idir. 256 mikro adımda, artımlı tork tutma torkunun sadece yüzde 0,6\'sına düşer. Herhangi bir küçük mekanik sıkışma, kayış gerginliği dengesizliği veya araba sürtünmesi, 1/256\'nıncı bir adımın fiziksel hareketini kolayca önleyecektir, bu da yüksek yerel mikro adımlamanın gerçek konumsal doğruluk garanti etmediği anlamına gelir.',
    },
    {
      type: 'card',
      title: 'Trinamic Sürücü Enterpolasyon Özelliği',
      html: 'TMC2208, TMC2209 ve TMC5160 gibi modern step sürücüler, step komutlarını güvenilir bir 16 mikro adımlık çözünürlükte alarak ve bobin akım değişikliklerini gerçekleştirmeden önce bu adımları dahili olarak 256 mikro adıma enterpolasyon yaparak bu sorunu çözer. Bu, 16 mikro adımlık yapılandırmanın güvenilir tutma torkunu ve azaltılmış denetleyici işleme yükünü korurken 256 mikro adımın pürüzsüz, sessiz çalışmasını sağlar. Donanım yazılamınızda yapılandırmanızı 16 mikro adımda tutun ve sürücünün dahili enterpolasyonu gerçekleştirmesine izin verin.',
    },
    {
      type: 'title',
      text: 'Z-Ekseni Kılavuz Vıdaları ve Çubukları için Milimetre Başına Adım Hesaplama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çoğu masaüstü 3D yazıcının dikey Z ekseni kılavuz vıdaları veya dişli çubukları kullanır. Kılavuz vıdaları güç iletimi için tasarlanmıştır ve boşluğu en aza indiren hassas taşlanmış diş profillerine sahiptir. Bir kılavuz vidası için mm başına adım hesaplanırken, diş adımı ile hatve karıştırılmamalıdır. Hatve, vidanın bir tam 360 derecelik dönüşü sırasında kılavuz vidası somununun kat ettiği gerçek doğrusal mesafedir. Hatve, diş adımı ile diş başlangıç sayısı çarpılarak hesaplanır.',
    },
    {
      type: 'list',
      items: [
        'Tek başlangıçlı kılavuz vidası: Adım 2mm, başlangıç sayısı 1\'dir. Devir başına hatve 2mm\'dir.',
        'İki başlangıçlı kılavuz vidası: Adım 2mm, başlangıç sayısı 2\'dir. Devir başına hatve 4mm\'dir.',
        'Dört başlangıçlı kılavuz vidası (Yaygın T8x8): Adım 2mm, başlangıç sayısı 4\'tür. Devir başına hatve 8mm\'dir.',
        'Standart metrik dişli çubuklar (ör. M8): Tek başlangıçlı. Hatve, devir başına 1,25mm olan standart metrik adıma eşittir.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Kılavuz vıdaları kayışlı sistemlere göre mekanik bir avantaja sahip olduğu için çok daha yüksek mm başına adım değerlerine ulaşırlar, bu da daha küçük mekanik çözünürlük değerlerini gösterir. Bu yüksek çözünürlük, Z eksenleri için kritiktir çünkü katmanlar tipik olarak 0,1 mm ile 0,3 mm arasında artışlarla basılır. Daha yüksek bir mm başına adım değeri, yazıcını konum hataları olmadan tutarlı katman yükseklikleri oluşturmasına olanak tanır.',
    },
    {
      type: 'title',
      text: 'Sürücü ve Motor Entegrasyonu için Temel Adımların Özeti',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Yazıcı Donanım Yazılımınızı Yapılandırmak için Eyleme Dönüştürülebilir Adımlar',
      items: [
        'Motor adım açısını üretici veri sayfasından tanımlayın (genellikle 1,8 veya 0,9 derece).',
        'Fiziksel jumperlar veya yazılım UART komutlarıyla yapılandırılan sürücü mikro adımlama ayarlarını belirleyin (16 önerilir).',
        'Kayış adımını ölçün veya araştırın ve kayış eksenleri için kasnak dişlerini sayın.',
        'Z ekseni için kılavuz vidası hatvesini (adım çarpı başlangıç sayısı) doğrulayın.',
        'Tam adım/mm veya adım/inç yapılandırma değerini elde emek için bu parametreleri hesaplayıcımıza girin.',
        'Hesaplanan değerleri donanım yazılımı yapılandırma dosyalarınıza yazın veya M92 gibi terminal komutları kullanarak kaydedin.'
      ],
    },
  ],
  faq: [
    {
      question: 'Hesaplanan adım/mm\'lerim neden manuel kalibrasyon sonucumdan farklı?',
      answer: 'Hesaplanan adım/mm, fiziksel bileşen geometrisine dayalı olarak matematiksel olarak kesindir. Manuel kalibrasyon farklı bir değer öneriyorsa, bunun nedeni genellikle operatörün filamenti veya eksen hareketini bir kumpasla ölçerken mekanik boşluk, kayış esnemesi vuru ekstrüder kaymasının hatalar eklemesidir. Hareket eksenleri için her zaman matematiksel olarak hesaplanan değeri kullanmalı ve bunun yerine temeldeki mekanik sorunları gidermelisiniz.',
    },
    {
      question: 'Donanım yazılımında mikro adımlama değerini çok yüksek ayarlarsam ne olur?',
      answer: 'Donanım yazılımında mikro adımlamayı 64, 128 veya 256\'ya ayarlamak, kontrol kartaınızdaki darbe frekansı talebini artırır. Anakart yeterince hızlı adım darbesi üretemezse yazıcı orebilir, takılabilir veya maksimum hareket hızını sınırlayabilir. Donanım yazılımında sürücü seviyesinde enterpolasyon etkinleştirilmiş olarak 16 mikro adım kullanmak en iyisidir.',
    },
    {
      question: '3D yazıcımda mm başına adım ayarlarını nasıl değiştiririm?',
      answer: 'Değerleri, M92 komutunu ardından eksen harfi ve değeri (örneğin, M92 X80.00 Y80.00 Z400.00) kullanarak geçici olarak değiştirekebilirsiniz. Bu değerleri kalıcı hale getirmek için, bunları EEPROM\'a kaydetmek üzere M500 komutunu gönderin veya Marlin donanım yazılımında Configuration.h dosyasını düzenleyip yeniden yükleyin veya Klipper\'da printer.cfg dosyasını düzenleyin.',
    },
    {
      question: 'Kayış adımı ve kasnak dişleri arasındaki fark nedir?',
      answer: 'Kayış adımı, kayıştaki iki sonraki diş arasındaki merkezden merkeze ölçülen mesafedir. Kasnak dişleri, motor miline takılı dişildeki toplam fiziksel diş sayısıdır. Diş sayısını adımla çarmak, motor devri başına kat edilen toplam doğrusal mesafeyi verir.',
    },
    {
      question: 'Farklı eksenler için farklı mikro adımlama değerleri kullanabilir myim?',
      answer: 'Evet, X, Y, Z ve E eksenleri için farklı mikro adımlama değerleri yapılandırabilirsiniz. Örneğin, ekstrüder donanımının dişli oranına bağlı olarak X ve Y\'yi 16 mikro adımda Z\'yi 16 mikro adımda ve ekstrüderi 16 veya 32 mikroadımda çalıştırmak çok yaygındir.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Motor ve Sürücü Özelliklerini Belirleyin',
      text: 'Motor adım açınızı (tipki 1,8 veya 0,9 derece) ve sürücü mikro adımlama değerinizi bulun (16 standarttır).',
    },
    {
      name: 'Aktarma Detaylarını Belirleyin',
      text: 'Kayış tahriki (kayış adımını ve kasnak dişlerini belirtin) ile kılavuz vidası arasında seçim yapın (vida hatvesini belirtin).',
    },
    {
      name: 'Donanım Yazılımı Ayarlarını Yapılandırın',
      text: 'Değerleri girin, tercih ettiğiniz birim sistemini seçin ve oluşturulan adım yapılandırma komutunu yazıcı yapılandırmanıza kopyalayın.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hesaplanan adım/mm\'üm neden manuel kalibrasyon sonucumdan farklı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hesaplanan adım/mm, fiziksel bileşen geometrisine dayalı olarak matematiksel olarak kesindir. Manuel kalibrasyon genellikle kayış gerginliği veya filament sıkıştırması nedeniyle hatalar ekler.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Step Sürücü Mikro Adım Hesaplayıcı',
      description: '3D yazıcı motorları ve sürücüleri için adım yapılandırma değerlerini ve fiziksel çözünürlük sınırlarını hesaplayın.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Step motor mm başına adımı nasıl hesaplanır',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Motor ve Sürücü Özelliklerini Belirleyin',
        },
        {
          '@type': 'HowToStep',
          text: 'Aktarma Ayrıntılarını Belirleyin',
        },
        {
          '@type': 'HowToStep',
          text: 'Donanım Yazılımı Ayarlarını Yapılandırın',
        },
      ],
    },
  ],
};