import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-recine-kurleme-hesaplama',
  title: 'UV Reçine Kürleme Süresi Hesaplayıcı',
  description: 'Reçine 3D baskılarınız için tam kürleme süresini belirleyin. Lamba gücü (watt), reçine tipi ve mesafeye göre profesyonel teknik kılavuz.',
  ui: {
    title: 'UV Reçine Kürleme Hesaplayıcı',
    configLabel: 'YAPILANDIRMA',
    brandLabel: 'Ekipman Markası',
    powerLabel: 'Lamba Gücü (W)',
    powerUnit: 'W',
    distanceLabel: 'LED Mesafesi (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Malzeme Tipi',
    weightLabel: 'Tahmini Ağırlık (g)',
    weightUnit: 'g',
    ipaCheckbox: 'İzopropil Alkol ile Temizlendi mi?',
    safetyLabel: 'UV GÜVENLİĞİ',
    safetySunglasses: 'Sertifikalı UV Gözlükler',
    safetyGloves: 'Nitril Eldivenler',
    sunglassesTooltip: '405nm\'ye doğrudan maruz kalmak retinanıza kalıcı zarar verebilir.',
    glovesTooltip: 'Yarı kürlenmiş reçine oldukça tahriş edicidir. Daima koruma kullanın.',
    wavelength: 'Dalga Boyu',
    wavelengthValue: '405 nm',
    statusLabel: 'Durum',
    modeLabel: 'Mod',
    modeValue: 'Endüstriyel',
    curingTime: 'd:s',
    startButton: 'Kürleme Döngüsünü Başlat/Durdur',
    intensityChart: 'UV Yoğunluğu (Doz)',
    nearLabel: 'Yakın (2cm)',
    farLabel: 'Uzak (30cm)',
    theoreticalLabel: 'Teorik Doz',
    yourConfigLabel: 'Sizin Yapılandırmanız',
    evaporateWarning: 'Beyaz lekeleri önlemek için alkolün buharlaşmasını bekleyin (min. 10 dk).',
    safeDistance: 'Tekdüze kürleme için güvenli mesafe tespit edildi.',
    riskDistance: 'Isı deformasyonu riski (Kritik Mesafe).',
    optimeStatus: 'Optimal',
    longStatus: 'Uzun',
    fastStatus: 'Hızlı',
  },
  seo: [
    {
      type: 'title',
      text: 'UV Reçine Kürleme Süresi Hesaplayıcı: Profesyonel Kılavuz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Reçine 3D baskıda (SLA, DLP veya LCD), <strong>UV kürleme, yumuşak ve yapışkan bir parçayı, belirtilen mekanik özelliklere sahip dirençli bir nesneye dönüştüren temel son adımdır</strong>. Uygun son kürleme yapılmazsa, baskınız yapısal olarak zayıf, toksik ve dengesiz kalacaktır.',
    },
    {
      type: 'title',
      text: 'UV Reçine Kürleme Nedir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir reçine 3D yazıcı baskıyı bitirdiğinde, parça teknisyenlerin <strong>"green state" (çiğ durum)</strong> dediği haldedir. Her ne kadar nihai şekline sahip olsa da, polimerin moleküler zincirleri tam olarak çapraz bağlanmamıştır. UV kürleme, bu çapraz bağlanmayı tamamlayarak yapışkanlığı giderir ve sertliği, mukavemeti ve termal kararlılığı artırır.',
    },
  ],
  faqTitle: 'Sıkça Sorulan Sorular',
  bibliographyTitle: 'Referanslar',
  faq: [
    {
      question: 'UV reçine kürleme ne kadar sürer?',
      answer: 'Lambanızın gücüne bağlıdır. 40W\'lık bir istasyon orta boy parçalar için genellikle 2-4 dakika sürerken, düşük güçlü DIY lambalar 10 dakikaya kadar ihtiyaç duyabilir.',
    },
    {
      question: 'Reçineyi oje lambasıyla kürleyebilir miyim?',
      answer: 'Lamba 405nm spektrumunu kapsıyorsa mümkündür, ancak bu lambalar genellikle düşük güce (6W-12W) sahiptir, bu da süreleri önemli ölçüde uzatır ve potansiyel olarak kötü yüzey kürlenmesine neden olur.',
    },
    {
      question: 'Suda kürleme (Water Curing) gerekli mi?',
      answer: 'Zorunlu değildir ancak şiddetle tavsiye edilir. Su, yüzey polimerleşmesini engelleyen oksijen temasını keserek daha az yapışkan parçalar elde edilmesini sağlar.',
    },
    {
      question: 'Reçinenin düzgün kürlendiğini nasıl anlarım?',
      answer: 'Parça dokunulduğunda tamamen kuru olmalı (yapışkan olmamalı), "ıslak" parlaklığını kaybetmiş olmalı, hafif bir renk değişimi göstermeli ve artık sıvı reçinenin keskin kokusuna sahip olmamalıdır.',
    },
    {
      question: 'Şeffaf reçinem neden sararıyor?',
      answer: 'Bu, aşırı kürleme veya aşırı sıcaklık etkisidir. Süreyi azaltmak için hesaplayıcımızdaki "Şeffaf" faktörünü kullanın ve LED\'leri en az 5 cm uzakta tutun.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Reçine Baskıların Son Kürlemesi',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: UV Kürleme Bilimi',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Ekipmanınızı yapılandırın',
      text: 'UV makine markanızı seçin ve watt cinsinden gücü ayarlayın.',
    },
    {
      name: 'Fiziksel parametreleri ayarlayın',
      text: 'LED\'ler ile parça arasındaki mesafeyi, reçine tipini ve tahmini ağırlığı belirtin.',
    },
    {
      name: 'Kürlemeyi başlatın',
      text: 'Hesaplanan süreyi kılavuz olarak kullanın ve işlem sırasında parçanızı izleyin.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'UV reçine kürleme ne kadar sürer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '40W\'lık bir istasyon orta boy parçalar için genellikle 2-4 dakika sürerken, düşük güçlü lambalar 10 dakikaya kadar ihtiyaç duyabilir.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UV Reçine Kürleme Hesaplayıcı',
      description: 'Lamba gücüne, mesafeye ve malzeme tipine göre reçine 3D baskılarınız için tam kürleme süresini belirleyin.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'UV reçine kürleme süresi nasıl hesaplanır',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Ekipmanınızı yapılandırın',
        },
        {
          '@type': 'HowToStep',
          text: 'Fiziksel parametreleri ayarlayın',
        },
      ],
    },
  ],
};
