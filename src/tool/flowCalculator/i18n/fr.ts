import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'calculateur-debit-volumetrique',
  title: 'Débit Volumétrique: Comprendre les Vraies Limites de Vitesse de Votre Imprimante 3D',
  description: 'Calculez le débit volumétrique maximum de votre imprimante 3D. Comprenez les véritables limitations matérielles de votre hotend.',
  ui: {
    title: 'Calculateur de Débit Volumétrique',
    autoAdjust: 'AJUSTEMENT AUTO 120%',
    configLabel: 'CONFIGURATION',
    nozzleLabel: 'BUSE',
    lineWidthLabel: 'LARGEUR DE LIGNE',
    layerHeightLabel: 'HAUTEUR DE COUCHE',
    speedLabel: 'VITESSE',
    temperatureLabel: 'TEMPÉRATURE',
    materialLabel: 'MATÉRIAU',
    hotendLimitLabel: 'LIMITE HOTEND',
    hotendTooltip: 'Capacité de fusion de base du matériel sans considérer le matériau ni la température.',
    presetEnder: 'Standard MK8/V6. Zone de fusion courte.',
    presetBambu: 'Hotend céramique haute vitesse.',
    presetVolcano: 'Zone de fusion extra-longue de 21 mm.',
    presetHF: 'Extrudeurs ultra-performants personnalisés.',
    baseLimitLabel: 'LIMITE DE BASE',
    resetButton: 'Réinitialiser les valeurs',
    volumetricFlowLabel: 'DÉBIT VOLUMÉTRIQUE RÉEL',
    maxSpeedLabel: 'VITESSE MAXIMALE',
    statusLabel: 'ÉTAT',
    safeStatus: 'SÛR',
    stratifiedLabel: 'PERFORMANCE STRATIFIÉE',
    chartHeightLabel: 'HAUTEUR DE COUCHE (MM)',
    chartSpeedLabel: 'LIMITE DE VITESSE (MM/S)',
    chartSafeLabel: 'GAMME SÛRE',
    copyButton: 'COPIER LA LIMITE EFFECTIVE',
  },
  seo: [
    {
      type: 'title',
      text: 'Débit Volumétrique: Comprendre les Vraies Limites de Vitesse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En impression 3D FDM, le <strong>débit volumétrique</strong> est le facteur qui détermine à quelle vitesse vous pouvez imprimer avant que votre matériel ne défaille. Bien que les vitesses des moteurs puissent sembler impressionnantes, c\'est la capacité de votre hotend à faire fondre le plastique de manière cohérente qui compte vraiment.',
    },
    {
      type: 'title',
      text: 'Qu\'est-ce que le Débit Volumétrique (mm³/s)?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'C\'est le volume total de filament extrudé par seconde. Il est calculé en multipliant trois variables clés: la vitesse d\'impression, la largeur de ligne et la hauteur de couche. Si vous essayez d\'extruder plus de plastique que votre bloc chauffant ne peut fondre, vous ferez face à la redoutée <strong>sous-extrusion</strong>.',
    },
  ],
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Références',
  faq: [
    {
      question: 'Quel est le débit maximal de mon imprimante?',
      answer: 'Cela dépend entièrement de votre hotend. Un hotend standard (type V6) fond généralement entre 10 et 12 mm³/s. Les modèles haute débit comme Volcano ou Revo High Flow atteignent 30-35 mm³/s.',
    },
    {
      question: 'Pourquoi le PETG coule-t-il plus lentement que le PLA?',
      answer: 'Le PETG a une viscosité beaucoup plus élevée lorsqu\'il est fondu. Cela signifie qu\'il offre plus de résistance en passant par la buse, donc sa limite de débit effective est généralement 15% inférieure à celle du PLA à la même température.',
    },
    {
      question: 'Comment la largeur de ligne affecte-t-elle le débit?',
      answer: 'La largeur de ligne est le multiplicateur le plus direct avec la hauteur de couche. Si vous passez de 0,4 mm à 0,6 mm de largeur à la même vitesse, vous demandez 50% plus de débit à votre extrudeur.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: Limites de débit et de vitesse',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'Wiki OrcaSlicer: Étalonnage',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: Étalonnage du Débit',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'Configurez votre matériel',
      text: 'Sélectionnez le diamètre de votre buse et choisissez un préset de hotend populaire.',
    },
    {
      name: 'Ajustez vos paramètres',
      text: 'Déplacez les curseurs pour la largeur de ligne, la hauteur de couche et la vitesse d\'impression.',
    },
    {
      name: 'Copiez la valeur',
      text: 'Copiez la valeur de débit maximal et utilisez-la dans votre logiciel de tranchage.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel est le débit maximal de mon imprimante?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cela dépend entièrement de votre hotend. Un hotend standard fond généralement entre 10 et 12 mm³/s.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculateur de Débit Volumétrique',
      description: 'Calculez le débit volumétrique maximum de votre imprimante 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment calculer le débit volumétrique',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Configurez votre matériel',
        },
        {
          '@type': 'HowToStep',
          text: 'Ajustez vos paramètres',
        },
      ],
    },
  ],
};
