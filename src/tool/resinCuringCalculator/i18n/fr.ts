import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'calculatrice-temps-polymerisation-resine-uv',
  title: 'Calculatrice de Temps de Polymérisation de Résine UV',
  description: 'Déterminez le temps exact de polymérisation pour vos impressions 3D en résine. Basé sur la puissance de la lampe en watts, le type de résine et la distance. Guide technique professionnel.',
  ui: {
    title: 'Calculatrice de Polymérisation UV',
    configLabel: 'CONFIGURATION',
    brandLabel: 'Marque d\'équipement',
    powerLabel: 'Puissance de Lampe (W)',
    powerUnit: 'W',
    distanceLabel: 'Distance des LEDs (cm)',
    distanceUnit: 'cm',
    materialLabel: 'Type de Matériau',
    weightLabel: 'Poids Estimé (g)',
    weightUnit: 'g',
    ipaCheckbox: 'Nettoyé avec de l\'Alcool Isopropylique?',
    safetyLabel: 'SÉCURITÉ UV',
    safetySunglasses: 'Lunettes UV Certifiées',
    safetyGloves: 'Gants en Nitrile',
    sunglassesTooltip: 'L\'exposition directe à 405nm peut endommager définitivement votre rétine.',
    glovesTooltip: 'La résine semi-polymérisée est hautement irritante. Utilisez toujours une protection.',
    wavelength: 'Longueur d\'Onde',
    wavelengthValue: '405 nm',
    statusLabel: 'État',
    modeLabel: 'Mode',
    modeValue: 'Industriel',
    curingTime: 'm:s',
    startButton: 'Démarrer/Arrêter Cycle de Polymérisation',
    intensityChart: 'Intensité UV (Dose)',
    nearLabel: 'Près (2cm)',
    farLabel: 'Loin (30cm)',
    theoreticalLabel: 'Dose Théorique',
    yourConfigLabel: 'Votre Configuration',
    evaporateWarning: 'Évaporer l\'alcool (min. 10 min) pour éviter les taches blanches.',
    safeDistance: 'Distance sûre détectée pour une polymérisation uniforme.',
    riskDistance: 'Risque de déformation par chaleur (Distance Critique).',
    optimeStatus: 'Optimal',
    longStatus: 'Long',
    fastStatus: 'Rapide',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculatrice de Temps de Polymérisation UV: Guide Professionnel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En impression 3D en résine (SLA, DLP ou LCD), la <strong>polymérisation UV est l\'étape finale essentielle</strong> qui convertit une pièce molle et collante en un objet résistant possédant les propriétés mécaniques déclarées. Sans une post-polymérisation appropriée, votre impression sera structurellement faible, toxique et instable.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que la Polymérisation UV de la Résine?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lorsqu\'une imprimante 3D en résine termine l\'impression, la pièce est dans ce que les techniciens appellent l\'<strong>«état vert»</strong>. Bien qu\'elle ait sa forme finale, les chaînes moléculaires du polymère ne sont pas complètement réticulées. La polymérisation UV complète la réticulation, éliminant la viscosité et améliorant la dureté, la résistance et la stabilité thermique.',
    },
  ],
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Références',
  faq: [
    {
      question: 'Combien de temps faut-il pour polymériser la résine UV?',
      answer: 'Cela dépend de la puissance de votre lampe. Une station de 40W prend généralement 2-4 minutes pour des pièces de taille moyenne, tandis que les lampes DIY à faible puissance peuvent nécessiter jusqu\'à 10 minutes.',
    },
    {
      question: 'Puis-je polymériser la résine avec une lampe à ongles?',
      answer: 'C\'est possible si la lampe couvre le spectre 405nm, mais ces lampes ont généralement une faible puissance (6W-12W), ce qui allonge considérablement les temps et peut causer une polymérisation superficielle médiocre.',
    },
    {
      question: 'La polymérisation en eau est-elle nécessaire?',
      answer: 'Non obligatoire, mais hautement recommandée (Water Curing). L\'eau bloque le contact avec l\'oxygène, qui inhibe la polymérisation de surface, résultant en pièces moins collantes.',
    },
    {
      question: 'Comment savoir si la résine est correctement polymérisée?',
      answer: 'La pièce doit être complètement sèche au toucher (non collante), avoir perdu son brillant «humide», montrer un léger changement de couleur et ne pas sentir fortement la résine liquide.',
    },
    {
      question: 'Pourquoi ma résine transparente devient-elle jaune?',
      answer: 'C\'est l\'effet d\'une surpolymérisation ou d\'une température excessive. Utilisez le facteur «Transparent» dans notre calculatrice pour réduire le temps et gardez les LEDs à au moins 5cm de distance.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - Post-curing Resin Prints',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: UV Curing Science',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: 'Configurez votre équipement',
      text: 'Sélectionnez la marque de votre machine UV et ajustez la puissance en watts.',
    },
    {
      name: 'Ajustez les paramètres physiques',
      text: 'Spécifiez la distance entre les LEDs et la pièce, le type de résine et le poids estimé.',
    },
    {
      name: 'Démarrez la polymérisation',
      text: 'Utilisez le temps calculé comme guide et surveillez votre pièce pendant le processus.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien de temps faut-il pour polymériser la résine UV?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une station de 40W prend généralement 2-4 minutes pour des pièces de taille moyenne.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculatrice de Polymérisation UV',
      description: 'Déterminez le temps exact de polymérisation pour vos impressions 3D en résine en fonction de la puissance de la lampe, de la distance et du type de matériau.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment calculer le temps de polymérisation UV',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configurez votre équipement',
        },
        {
          '@type': 'HowToStep',
          text: 'Ajustez les paramètres physiques',
        },
      ],
    },
  ],
};
