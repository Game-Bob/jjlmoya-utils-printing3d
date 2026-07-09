import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'agac-destek-yogunlugu-hesaplayici',
  title: 'Ağaç Destek Yoğunluğu Hesaplayıcı',
  description: 'Destek noktası yüksekliği, dal açısı, dal yoğunluğu ve taban gövde çapından ağaç desteğin taç çapını, destek hacmini, dal sayısını, temas çapını ve stabilitesini tahmin eder.',
  ui: {
    unitSystemLabel: 'Birimler',
    metricLabel: 'Metrik',
    imperialLabel: 'US',
    presetsLabel: 'Ön Ayarlar',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Dengeli',
    tallPresetLabel: 'Uzun',
    supportHeightLabel: 'Destek noktası yüksekliği',
    branchAngleLabel: 'Dal açısı',
    branchDensityLabel: 'Dal yoğunluğu',
    baseTrunkDiameterLabel: 'Taban gövde çapı',
    canopyDiameterLabel: 'Üst taç çapı',
    supportVolumeLabel: 'Tahmini destek hacmi',
    stabilityLabel: 'Destek stabilitesi',
    filamentMassLabel: 'Filament kütlesi',
    branchCountLabel: 'Dal sayısı',
    contactDiameterLabel: 'Temas çapı',
    trunkVolumeLabel: 'Gövde hacmi',
    branchVolumeLabel: 'Dal hacmi',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'düşük stabilite',
    stabilityBalanced: 'dengeli stabilite',
    stabilityHigh: 'yüksek stabilite',
    controlsAriaLabel: 'Ağaç destek yoğunluğu girişleri',
    resultsAriaLabel: 'Ağaç destek yoğunluğu sonuçları',
    copyButton: 'Destek kurulumunu kopyala',
    copiedButton: 'Kopyalandı',
    copiedSummaryTemplate: 'Ağaç destek tahmini: taç {canopy}, destek hacmi {volume}, stabilite {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'in',
    cubicCentimetersUnit: 'cm3',
    cubicInchesUnit: 'in3',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: 'derece',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Ağaç Destek Yoğunluğu Filament Kullanımını ve Stabiliteyi Nasıl Değiştirir', level: 2 },
    {
      type: 'paragraph',
      html: 'Ağaç destekler verimlidir çünkü işi bir <strong>yük yolu</strong> ve bir <strong>temas desenine</strong> ayırırlar. Gövde, dikey yükün çoğunu baskı tablasından taşırken, daha küçük dallar yalnızca temasın gerekli olduğu çıkıntılara doğru yayılır. Bir ağaç destek yoğunluğu hesaplayıcısı kullanışlıdır çünkü dilimleyicideki en görünür kontroller olan dal açısı ve dal yoğunluğu, destek noktası yüksekliği ve taban gövde çapı ile etkileşime girer. Düşük bir dal yoğunluğu filament tasarrufu sağlayabilir, ancak sallanmaya karşı direnç gösteren yolların sayısını da azaltır. Dik bir dal açısı, yüksek bölgelere daha az yatay yayılımla ulaşabilir, ancak yükü gövde yakınında yoğunlaştırır ve uzun, ince desteklerde başarısız olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı, dilimleyici önizlemesinde gözle değerlendirilmesi zor olan üç değeri tahmin eder: üst taç çapı, destek hacmi ve stabilite puanı. Üst taç çapı, dal tacının model yakınında ne kadar genişlediğini gösterir. Destek hacmi, gövde ve dallar için gereken basılı malzemeyi tahmin eder. Stabilite, açı, yoğunluk, taban çapı, yükseklik ve taç yayılımını pratik bir puanda birleştirir. Amaç dilimleyici motorunun yerini almak değil; dilimlemeden önce başlangıç ​​değerlerini seçmek, böylece destek önizlemelerini yineleyerek daha az zaman harcamaktır.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50 derece', label: 'dengeli erişim ve güç için yaygın dal açısı aralığı' },
        { value: '%25-55', label: 'çoğu FDM baskı için pratik dal yoğunluğu bandı' },
        { value: '2-8 mm', label: 'hobi yazıcı ağaç destekleri için tipik taban gövde çapı aralığı' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Bu bir planlama hesaplayıcısıdır, dilimleyici geometri dışa aktarımı değildir',
      html: 'Her dilimleyici ağaç desteklerini farklı üretir. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer ve diğer araçlar, dal oluşturma, çarpışma önleme, destek arayüzü ve temas noktaları için farklı adlar ve algoritmalar kullanır. Çıktıyı bir ayar yönü olarak kullanın, ardından baskı öncesinde nihai geometriyi dilimleyici önizlemesinde onaylayın.',
    },
    { type: 'title', text: 'Dal Açısı: Erişim, Yük Yolu ve Başarısızlık Riski', level: 2 },
    {
      type: 'paragraph',
      html: 'Dal açısı, bir ağaç desteğinin gövdeden modele doğru ne kadar agresif yayıldığını kontrol eder. Daha düşük bir açı, dalları dikeye daha yakın tutar ve bu genellikle sertliği artırır ve yanal sallanmayı azaltır. Daha yüksek bir açı, boş alan üzerinde daha uzağa uzanır, bu da gerekli gövde sayısını azaltabilir, ancak bükülme yükünü artırır ve uzun desteklenmemiş dal bölümleri oluşturabilir. Uzun destekler için, 50 dereceden 60 dereceye küçük bir değişiklik, sağlam bir ağacı nozül dokunduğunda titreşen esnek bir yapıya dönüştürebilir.',
    },
    {
      type: 'paragraph',
      html: 'En iyi dal açısı, destek noktası yüksekliğine bağlıdır. Küçük bir çıkıntının altındaki kısa bir ağaç, dal uzunluğu sınırlı olduğu için daha geniş bir açı kullanabilir. Yüksek bir destek noktası, özellikle esnek malzemeler, hızlı seyahat hareketleri veya destekleri kolayca serbest bırakan bir tabla yüzeyi ile daha muhafazakar bir açıya ihtiyaç duyar. Destek noktası yüksek ve dal açısı genişse, dal tacının ince bir sütun tarafından desteklenmemesi için taban gövde çapını veya yoğunluğu artırın.',
    },
    {
      type: 'table',
      headers: ['Dal açısı', 'En iyi kullanım', 'Aşırı kullanımda risk', 'Ayarlama'],
      rows: [
        ['20-35 derece', 'Uzun destekler ve dar kuleler', 'Erişim sınırlı olduğu için daha fazla gövde gerekebilir', 'Yalnızca temas kapsamı zayıfsa yoğunluğu artırın'],
        ['36-50 derece', 'Genel ağaç destek ayarı', 'Genellikle dengeli, ancak yine de yüksekliğe bağlıdır', 'Çoğu PLA ve PETG baskı için buradan başlayın'],
        ['51-65 derece', 'Orta yükseklikte geniş çıkıntılar', 'Dallar seyahat veya temas sırasında esneyebilir', 'Daha kalın taban gövdesi ve orta yoğunluk kullanın'],
        ['66-75 derece', 'Çok geniş erişimli özel durumlar', 'Yüksek bükülme yükü ve zayıf dal kökleri', 'Dikkatlice önizleyin ve destek baskısını yavaşlatın'],
      ],
    },
    {
      type: 'tip',
      title: 'Erişimi yalnızca açıyla kovalamayın',
      html: 'Dallar uzağa gitmek zorundaysa, açıyı üst limite zorlamadan önce ek bir gövde eklemeyi veya taç yoğunluğunu artırmayı deneyin. Yakındaki ikinci bir gövde, genellikle ağır bir tabana ihtiyaç duyan aşırı uzatılmış bir ağaçtan daha az malzeme kullanır.',
    },
    { type: 'title', text: 'Dal Yoğunluğu: Destek İzleri Olmadan Temas Kapsamı', level: 2 },
    {
      type: 'paragraph',
      html: 'Dal yoğunluğu, desteklenen alanın yakınında ne kadar dal yapısı oluşturulduğunu tanımlar. Düşük yoğunluk filament azaltır ve çıkarmayı kolaylaştırır, ancak çıkıntı kenarlarını yetersiz desteklenmiş bırakabilir. Yüksek yoğunluk, kapsamı iyileştirir ve yükü daha fazla temas noktasına dağıtır, ancak baskı süresini, temas izlerini ve desteklerin hassas yüzeylere kaynama olasılığını artırır. Bu nedenle doğru yoğunluk, güvenli görünen en yüksek sayı değil; çıkıntıların sarkmasını önlerken yeterli sertliği koruyan en düşük sayıdır.',
    },
    {
      type: 'paragraph',
      html: 'Dekoratif modeller için, hafif alt yüzey dokusu kabul edilebilir olabileceğinden yoğunluk genellikle azaltılabilir. Mekanik parçalar için yoğunluk daha fazla özen gerektirir çünkü desteklenmeyen delikler, pahlar ve eşleşen yüzeyler uyumu etkileyebilir. Malzemeler de önemlidir. PLA, sert olduğu ve temiz köprüler bastığı için daha hafif destekleri tolere edebilir. PETG, desteklere güçlü bir şekilde yapıştığı için genellikle daha büyük hava boşluklarına ve dikkatli temas çapına ihtiyaç duyar. TPU ve esnek filamentler, ince dallar çıkıntıyı yerinde tutmak yerine sapabileceğinden muhafazakar geometriye ihtiyaç duyar.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Düşük yoğunluk',
          description: 'Çıkarma kalitesi ve filament tasarrufunun, kusursuz alt yüzey cilasından daha önemli olduğu durumlarda en iyisidir.',
          points: ['En hızlı destek baskısı', 'En zayıf temas kapsamı', 'Organik minyatürler için kullanışlıdır'],
        },
        {
          title: 'Dengeli yoğunluk',
          description: 'Çıkıntıların desteğe ihtiyaç duyduğu ancak model yüzeyinin temiz kalması gereken karma geometriler için pratik bir varsayılan.',
          highlight: true,
          points: ['İyi malzeme verimliliği', 'Orta düzeyde çıkarma çabası', 'Çoğu PLA ve PETG iş için çalışır'],
        },
        {
          title: 'Yüksek yoğunluk',
          description: 'Ağır çıkıntılar, yüksek destek noktaları ve kırılgan temas bölgeleri için kullanışlıdır, ancak izleri artırır.',
          points: ['En iyi yük dağılımı', 'Daha fazla hacim ve baskı süresi', 'Yüksek kaynaşmış temas riski'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Dal yoğunluğunu artırmanın artıları ve eksileri',
      items: [
        { pro: 'Daha fazla temas noktası, kavisli çıkıntıların altında sarkmayı azaltır.', con: 'Daha fazla temas noktası, çıkarma sonrasında daha görünür izler bırakabilir.' },
        { pro: 'Daha yoğun bir taç, yükü birkaç dala dağıtır.', con: 'Dilimleyici, gömme kesicilerle erişilmesi daha zor olan hacimli bir taç oluşturabilir.' },
        { pro: 'Uzun destekler nozül darbelerine karşı daha az hassas hale gelir.', con: 'Yoğunluk geniş bir taç ile birleştiğinde baskı süresi ve filament kullanımı hızla artar.' },
      ],
    },
    { type: 'title', text: 'Taban Gövde Çapı ve Uzun Ağaç Destekler Neden Başarısız Olur', level: 2 },
    {
      type: 'paragraph',
      html: 'Taban gövde çapı ağacın temelidir. İnce bir gövde, kısa bir destek için tamamen yeterli olabilir, ancak desteklenen nokta yüksek olduğunda aynı çap riskli hale gelir. Yükseklik kaldıraç etkisini artırır: küçük bir nozül darbesi, seyahat sürtünmesi veya soğutma fanı titreşimi, taçta daha fazla harekete neden olur. Gövde yükseklik için çok inceyse, destek hemen kırılmayabilir; yavaşça eğilebilir, temas noktasını kaydırabilir veya çıkıntı bitmeden tabladan ayrılabilir.',
    },
    {
      type: 'paragraph',
      html: 'Daha büyük bir gövde çapı, sertliği ve tabla yapışmasını iyileştirir, ancak aynı zamanda malzeme tüketir. Hesaplayıcı, gövde çapını kozmetik bir ayar değil, bir stabilite girdisi olarak ele alır. Stabilite puanı düşükse, çapı artırmak genellikle dal yoğunluğunu artırmaktan daha etkilidir çünkü baskı tablasından gelen yük yolunu güçlendirir. Puan zaten yüksekse, daha büyük bir gövde yalnızca çıkarmayı zorlaştırabilir ve filament israfına neden olabilir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Destek noktası yüksekliği', definition: 'Baskı tablasından desteğe ihtiyaç duyan model bölgesine olan dikey mesafe.' },
        { term: 'Dal açısı', definition: 'Dalların gövdeden destek temas noktalarına doğru yayılırken kullandığı açı.' },
        { term: 'Dal yoğunluğu', definition: 'Desteklenen alanın yakınında oluşturulan dal yapısı ve temas kapsamının göreceli miktarı.' },
        { term: 'Taban gövde çapı', definition: 'Ana ağaç destek kolonunun baskı tablasında başladığı yaklaşık çap.' },
        { term: 'Taç çapı', definition: 'Üst dal tacının model çıkıntısı yakınındaki tahmini genişliği.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'İnce bir gövdede yüksek taç klasik ağaç desteği başarısızlık modudur',
      html: 'Taç çapı, gövde çapından birkaç kat daha büyükse, destek tepesi ağır bir yapı gibi davranır. Yalnızca daha fazla dal yoğunluğu eklemeden önce başka bir gövde ekleyin, dal açısını azaltın veya taban çapını artırın.',
    },
    { type: 'title', text: 'Üst Taç Çapı ve Model Boşluğu', level: 2 },
    {
      type: 'paragraph',
      html: 'Üst taç çapı önemlidir çünkü ağaç destekler modelin etrafına sığmalı, çarpışmalardan kaçınmalı ve çıkarılabilir kalmalıdır. Geniş bir taç, çıkıntıyı iyi destekleyebilir, ancak aynı zamanda detayların etrafını sarabilir, boşluklara girebilir veya kırılması zor dallar oluşturabilir. Küçük bir taç çıkarması daha kolaydır, ancak temas kuvvetini birkaç noktada yoğunlaştırabilir ve kenarların sarkmasına izin verebilir. Hesaplayıcı, taç çapını destek yüksekliği, dal açısı, yoğunluk ve taban çapından tahmin eder, böylece oluşturulan destek tacının kompakt mı yoksa yaygın mı olacağını tahmin edebilirsiniz.',
    },
    {
      type: 'paragraph',
      html: 'Taç boşluğu için dilimleyici Önizlemesi şarttır. Küçük deliklerden geçen, yükseltilmiş metnin altına giren, figürinlerin parmakları arasında dolaşan veya mekanik özellikler arasına giren dalları izleyin. Bir dal bir alana ulaşabiliyorsa, orada kendini hapsedebilir. Daha düşük yoğunluk, daha küçük temas çapı, daha sıkı destek engelleyiciler veya manuel boyama, ağaç desteklerinin standart kafes desteklerinden daha zor çıkarılır hale gelmesini önleyebilir.',
    },
    {
      type: 'table',
      headers: ['Taç davranışı', 'Olası neden', 'Baskı sonucu', 'Çözüm'],
      rows: [
        ['Taç çok dar', 'Açı ve yoğunluk muhafazakar', 'Çıkıntı kenarları temas noktaları arasında sarkar', 'Yoğunluğu artırın veya manuel destek noktaları ekleyin'],
        ['Taç geniş ancak stabil değil', 'Uzun destekte yüksek açı', 'Nozül teması yapıyı sallayabilir', 'Açıyı azaltın veya gövde çapını artırın'],
        ['Taç detayları sarıyor', 'Karmaşık geometri etrafında yüksek yoğunluk', 'Destek çıkarma izleri görünür yüzeyler', 'Destek engelleyiciler veya daha düşük yoğunluk kullanın'],
        ['Taç model yan duvarlarına değiyor', 'Destek boşluğu çok küçük', 'Dallar parçaya kaynayabilir', 'X/Y mesafesini artırın veya temas çapını azaltın'],
      ],
    },
    {
      type: 'card',
      title: 'Taç çapı bir önizleme uyarısıdır',
      html: 'Büyük bir tahmini taç çapı otomatik olarak kötü değildir. Dilimleyici önizlemesinin dikkat gerektirdiği anlamına gelir çünkü destek tacı baskın çıkarma zorluğu haline gelebilir.',
    },
    { type: 'title', text: 'Destek Hacmi, Filament Uzunluğu ve Baskı Süresi', level: 2 },
    {
      type: 'paragraph',
      html: 'Destek hacmi, seçilen ayarların pratik maliyetidir. Bir ağaç destek önizlemede hafif görünebilir, ancak yoğun bir taç ve kalın bir gövde yine de önemli miktarda filament tüketebilir. Hesaplayıcı, tahmini hacmi santimetreküp cinsinden ve 1,75 mm filament için eşdeğer filament uzunluğunu bildirir. Bu, özellikle daha uzun bir gövde, daha yüksek yoğunluk veya ekstra dal erişiminin malzemeye değip değmeyeceğine karar verirken, dilimlemeden önce ayarları karşılaştırmaya yardımcı olur.',
    },
    {
      type: 'paragraph',
      html: 'Hacim, baskı süresine mükemmel şekilde karşılık gelmez çünkü dilimleyiciler farklı çizgi genişlikleri, duvar sayıları, dolgu desenleri, hızlanma limitleri ve destek hızları kullanır. Bununla birlikte, destek hacmi güçlü bir gösterge olmaya devam eder. İki ayar benzer stabilite sağlıyor ancak biri çok daha az hacim kullanıyorsa, düşük hacimli ayar genellikle daha iyi başlangıç ​​noktasıdır. Düşük hacimli ayar aynı zamanda düşük bir stabilite puanı üretiyorsa, baskı başarısız olduğunda veya alt yüzey yeniden işleme ihtiyaç duyduğunda tasarruf ortadan kalkabilir.',
    },
    {
      type: 'summary',
      title: 'Destek hacmini güvenle nasıl azaltırsınız',
      items: [
        'Stabilite puanı zaten yüksekse önce dal yoğunluğunu düşürün.',
        'Taç çok geniş ve tepenin ağırlığı fazlaysa dal açısını azaltın.',
        'Daha küçük bir taban gövdesini yalnızca kısa desteklerde ve mütevazı çıkıntı yüklerinde kullanın.',
        'Erişim hacimli bir taç oluşturuyorsa, büyük bir ağacı iki küçük ağaca bölün.',
        'Temas çapını ayrı ayrı ayarlayın, böylece yüzey izleri gereksiz yoğunluğa zorlamaz.',
      ],
    },
    {
      type: 'message',
      title: 'Malzeme tasarrufu yalnızca destek hayatta kalırsa işe yarar',
      html: 'Başarısız bir destek genellikle biraz daha güçlü olandan daha fazla filament maliyetine yol açar. Büyük tasarruf yüzdelerini, en hafif desteğin otomatik olarak doğru olduğunun kanıtı olarak değil, dikkatlice önizleme yapmak için bir çağrı olarak görün.',
    },
    { type: 'title', text: 'Ağaç Destek Temas Çapı ve Yüzey Kalitesi', level: 2 },
    {
      type: 'paragraph',
      html: 'Temas çapı, ağaç desteğin modele ne kadar dokunduğunu kontrol eder. Küçük temaslar temiz çıkar ve izleri azaltır, ancak ağır veya sıcak çıkıntılarda kopabilirler. Daha büyük temaslar daha iyi tutunur ve ısıyı dağıtır, ancak PETG\'ye kaynayabilir, PLA\'da kabarık noktalar bırakabilir veya dekoratif baskılarda reçine benzeri yüzey detayına zarar verebilir. Bu hesaplayıcı, bir temas çapını dal çapı ve yoğunluğundan tahmin eder, böylece sonuç yalıtılmış bir kozmetik değer olarak değil, destek yapısına bağlı kalır.',
    },
    {
      type: 'paragraph',
      html: 'Temas ayarları, üst Z mesafesi ve arayüz davranışı ile birlikte ayarlanmalıdır. Dikey boşluk çok küçükse, küçük bir temas bile güçlü bir şekilde yapışabilir. Dikey boşluk çok büyükse, geniş bir temas yine de çıkıntıyı desteklemekte başarısız olabilir çünkü filamentin sarkacak alanı vardır. İşlevsel parçalar için, temas çapını gerçek model için kullanılan aynı malzeme, nozül boyutu, katman yüksekliği ve soğutma ayarlarıyla yapılmış bir kalibrasyon çıkıntısında test edin.',
    },
    {
      type: 'list',
      items: [
        'Görünür kozmetik yüzeylerde daha küçük temas çapları kullanın.',
        'Ağır köprüler, kalın çıkıntılar veya yüksek sıcaklık malzemeleri altında daha büyük temaslar kullanın.',
        'Destekler çıkarılması zor olduğunda ağaç yoğunluğunu suçlamadan önce üst Z mesafesini artırın.',
        'Temas noktaları baskı sırasında koparsa destek arayüz hızını düşürün.',
        'Dilimleyicinin bu ayara temas çapı, uç çapı veya destek arayüz teması adını verip vermediğini kontrol edin.',
      ],
    },
    {
      type: 'tip',
      title: 'PETG ekstra dikkat gerektirir',
      html: 'PETG, aynı filamentten basılan destek malzemesine agresif yapışır. Dikkatli bir Z mesafesi ile orta düzey bir ağaç yoğunluğu, geniş temaslara sahip çok yoğun bir taçtan genellikle daha iyi çalışır.',
    },
    { type: 'title', text: 'Dilimleyici Ağaç Destekleri İçin Önerilen Başlangıç ​​İş Akışı', level: 2 },
    {
      type: 'paragraph',
      html: 'Toplam model yüksekliği yerine en yüksek destek noktasının yüksekliğini girerek başlayın. Bir model, desteklenen bölge tablaya yakınken uzun olabilir veya kritik bir çıkıntı dar bir adada yüksekteyken kısa olabilir. Ardından dengeli aralıkta bir dal açısı seçin ve ihtiyacınız olan yüzey kalitesine göre dal yoğunluğunu ayarlayın. Son olarak, yükseklik ve beklenen yüke dayalı olarak taban gövde çapını ayarlayın. Hesaplayıcı, kombinasyonun hacim açısından verimli, stabil veya riskli olup olmadığını gösterecektir.',
    },
    {
      type: 'paragraph',
      html: 'Hesaplamadan sonra dilimleyici önizlemesine geçin ve oluşturulan ağacı ilk destek katmanından son temasa kadar inceleyin. Havada başlayanlar, çok ince dal kökleri, modele çok yakın geçen dallar ve desteklenmeyen çıkıntı adaları arayın. Destek hesaplayıcıda stabil değilse ve önizlemede seyrek görünüyorsa, gövdeyi güçlendirin veya dal açısını azaltın. Destek stabil ancak görsel olarak hacimliyse, yoğunluğu azaltın ve temas deseninin çıkıntıyı hala kaplayıp kaplamadığını kontrol edin.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'İyi bir ağaç destek ayarı önizlemede sıkıcıdır',
      html: 'Önizleme net bir gövde, kısa dal yolları, çıkıntı altında yeterli temas ve detayların etrafında açık boşluk göstermelidir. Ağaç görsel olarak dramatik görünüyorsa, çok fazla şey yapıyor olabilir.',
    },
    {
      type: 'summary',
      title: 'Hızlı ayar sırası',
      items: [
        'Yalnızca model yüksekliğini değil, destek noktası yüksekliğini girin.',
        'Dal açısı için 45-50 derece civarından başlayın.',
        'Genel PLA baskılar için %30-45 yoğunluk kullanın, ardından önizlemeden ayarlayın.',
        'Uzun destekleri aşırı yoğun yapmadan önce gövde çapını artırın.',
        'Temas çapını ve boşluğu gerçek dilimleyici önizlemesinde onaylayın.',
      ],
    },
    { type: 'title', text: 'Ağaç Destekler Ne Zaman Normal Desteklerden Daha İyidir', level: 2 },
    {
      type: 'paragraph',
      html: 'Ağaç destekler en güçlüdür destek izole bölgelerde gerektiğinde: figürin kolları, kasklar, yaratık boynuzları, organik heykeller, dekoratif kemerler ve kavisli çıkıntılar. Modelin altındaki tüm alanı doldurmaktan kaçınırlar, bu nedenle genellikle daha az filament kullanır ve bloklu kafes desteklerden daha az iz bırakırlar. Ayrıca standart desteklerin kavisli bir yüzeyden çıkarılması zor büyük bir duvar oluşturacağı durumlarda da kullanışlıdırlar.',
    },
    {
      type: 'paragraph',
      html: 'Standart destekler düz teknik çıkıntılar, geniş yatay raflar ve tutarlı destek arayüzüne ihtiyaç duyan yüzeyler için hala daha iyi olabilir. Bir ağaç destek tacı seçili noktalara temas ederken, normal destekler daha düzgün bir düzlem sağlayabilir. Alt yüzey boyutsal olarak doğru olmalıysa, her iki yaklaşımı da karşılaştırın. Çıkıntı geniş ve düzse, yoğun bir ağaç basit bir dikdörtgen destekten daha fazla malzeme kullanabilir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ağaç destekler',
          description: 'Organik geometri, seyrek temas alanları ve çıkarma erişiminin önemli olduğu modeller için en iyisidir.',
          highlight: true,
          points: ['İzole çıkıntılarda daha düşük malzeme', 'Kavisli şekiller etrafında daha temiz erişim', 'Dal açısına ve gövde sertliğine duyarlı'],
        },
        {
          title: 'Normal destekler',
          description: 'Geniş düz çıkıntılar, öngörülebilir arayüzler ve basit mekanik yüzeyler için en iyisidir.',
          points: ['Düzgün alt yüzey kaplaması', 'Genellikle akıl yürütmesi daha kolaydır', 'Karmaşık modellerin altında çok daha fazla filament kullanabilir'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Model gerektirdiğinde her iki destek türünü de kullanın',
      html: 'Birçok dilimleyici, destek boyama, engelleyiciler veya değiştirici ağlar içerir. Bir model, organik özellikler için ağaç desteklerini ve düz bir mühendislik yüzeyi için normal destekleri kullanabilir.',
    },
  ],
  faq: [
    {
      question: 'Ağaç destekler için iyi bir dal açısı nedir?',
      answer: 'Pratik bir başlangıç ​​aralığı yaklaşık 40-50 derecedir. Uzun destekler için daha düşük açılar ve yalnızca daha fazla erişime ihtiyacınız olduğunda ve gövde yeterince güçlüyse daha yüksek açılar kullanın.',
    },
    {
      question: 'Daha yüksek ağaç destek yoğunluğu baskı kalitesini her zaman artırır mı?',
      answer: 'Hayır. Daha yüksek yoğunluk temas kapsamını ve stabiliteyi artırır, ancak aynı zamanda filament, baskı süresi ve destek izlerini de artırır. Çıkıntıyı güvenilir şekilde destekleyen en düşük yoğunluğu kullanın.',
    },
    {
      question: 'Taban gövde çapını nasıl seçmeliyim?',
      answer: 'Destek noktası yüksekliği arttıkça taban gövde çapını artırın. Uzun destekler daha güçlü bir yük yoluna ihtiyaç duyar, kısa destekler ise malzeme tasarrufu için genellikle daha küçük bir gövde kullanabilir.',
    },
    {
      question: 'Taç çapı neden önemlidir?',
      answer: 'Taç çapı, üst dal tacının ne kadar genişleyeceğini tahmin eder. Geniş bir taç iyi destek sağlayabilir, ancak detaylarla çarpışabilir, boşluklarda kendini hapsedebilir veya çıkarılması zorlaşabilir.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Destek noktası yüksekliğini girin', text: 'Baskı tablasından desteğe ihtiyaç duyan model alanına kadar olan dikey mesafeyi kullanın.' },
    { name: 'Dal açısını ve yoğunluğunu ayarlayın', text: 'Planlanan dilimleyici dal açısı ve dal yoğunluğu değerlerini seçin.' },
    { name: 'Taban gövde çapını ekleyin', text: 'Dilimleyici tarafından kullanılan yaklaşık ana ağaç gövde çapını girin.' },
    { name: 'Stabilite ve hacmi inceleyin', text: 'Dilimlemeden önce stabilite puanını, taç çapını ve tahmini destek hacmini karşılaştırın.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Ağaç Destek Yoğunluğu Hesaplayıcı',
      description: '3D baskı ağaç destek yoğunluğu, dal açısı, taban gövde çapı, taç çapı, destek hacmi ve stabilite optimize edin.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Ağaç destekler için iyi bir dal açısı nedir?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pratik bir başlangıç ​​aralığı yaklaşık 40-50 derecedir, uzun destekler için daha düşük açılar ve yalnızca ekstra erişim gerektiğinde daha geniş açılar kullanılır.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '3D baskı için ağaç destek yoğunluğu nasıl ayarlanır',
      step: [
        { '@type': 'HowToStep', text: 'Destek noktası yüksekliğini girin.' },
        { '@type': 'HowToStep', text: 'Dal açısını, dal yoğunluğunu ve taban gövde çapını ayarlayın.' },
        { '@type': 'HowToStep', text: 'Taç çapını, destek hacmini ve stabilite puanını inceleyin.' },
        { '@type': 'HowToStep', text: 'Değerleri dilimleyici önizlemesinde uygulayın ve temas ayarlarını ayarlayın.' },
      ],
    },
  ],
};