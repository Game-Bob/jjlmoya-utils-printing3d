import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'calculateur-microstepping-driver-moteur-pas-a-pas-impression-3d',
  title: 'Calculateur de Pas par mm et Microstepping pour Moteurs Pas à Pas',
  description: 'Calculez le nombre exact de pas par mm (ou pas par pouce) ainsi que la résolution mécanique théorique des moteurs pas à pas d\'imprimante 3D. Compatible TMC2209, TMC2208, courroies et vis-mères.',
  ui: {
    title: 'Calculateur de Microstepping pour Driver Pas à Pas',
    presetsLabel: 'PRÉRÉGLAGES',
    presetBelt16: 'Courroie GT2 et poulie 16 dents (X/Y)',
    presetBelt20: 'Courroie GT2 et poulie 20 dents (X/Y)',
    presetZLead8: 'Vis-mère T8 avance 8mm (Z)',
    presetZLead2: 'Vis-mère T8 avance 2mm (Z)',
    unitSystemLabel: 'Système d\'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    configLabel: 'CONFIGURATION MOTEUR ET DRIVER',
    motorStepAngleLabel: 'Angle de Pas du Moteur',
    driverMicrosteppingLabel: 'Microstepping du Driver',
    transmissionModeLabel: 'Type de Transmission',
    transmissionBelt: 'Entraînement par Courroie',
    transmissionLeadScrew: 'Vis-mère / Tige Filetée',
    beltPitchLabel: 'Pas de la Courroie',
    pulleyTeethLabel: 'Dents de la Poulie',
    leadScrewPitchLabel: 'Avance de la Vis-mère (Distance par Tour)',
    resultsLabel: 'RÉSULTATS CALCULÉS',
    stepsPerUnitLabel: 'Configuration Firmware (Pas)',
    mechanicalResolutionLabel: 'Résolution Théorique',
    stepsPerUnitUnitMetric: 'pas/mm',
    stepsPerUnitUnitImperial: 'pas/pouce',
    mechanicalResolutionUnitMetric: 'microns/pas',
    mechanicalResolutionUnitImperial: 'millièmes/pas',
    formulaLabel: 'FORMULES MATHÉMATIQUES',
    formulaStepsPerRevolution: 'Pas/Tour = 360 / Angle de Pas',
    formulaMicrostepsPerRev: 'Micropas/Tour = Pas/Tour * Micropas',
    formulaDistancePerRev: 'Distance/Tour = Dents * Pas (ou Avance Vis-mère)',
    formulaStepsPerUnit: 'Pas/Unité = Micropas/Tour / Distance/Tour',
    formulaResolution: 'Résolution = Distance/Tour / Micropas/Tour',
    explainResolutionLabel: 'Qu\'est-ce que cela signifie ?',
    explainResolutionText: 'Cela représente le plus petit mouvement linéaire théorique que l\'axe de votre imprimante 3D peut effectuer lorsque le driver commande un seul micropas. Des valeurs de résolution plus faibles indiquent une meilleure précision de positionnement mécanique.',
    copyButton: 'Copier la Commande Firmware',
    copiedButton: 'Copié !',
    stepAngleUnit: '°',
    microstepsUnit: 'x',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: 'dents',
    stepAngle18: '1,8° (200 pas/tour)',
    stepAngle09: '0,9° (400 pas/tour)',
    stepAngle75: '7,5° (48 pas/tour)',
    stepAngle15: '15° (24 pas/tour)',
    microstep1: '1x (Pas Complet)',
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
      text: 'Guide d\'Étalonnage des Moteurs Pas à Pas et Configuration des Pas par Millimètre dans le Firmware',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sur les imprimantes 3D grand public et professionnelles, le mouvement de précision repose sur les moteurs pas à pas, les drivers et les mécanismes de transmission linéaire. Les moteurs pas à pas ne tournent pas en continu ; ils divisent une rotation complète en un nombre fixe de pas discrets. Pour que la carte contrôleur de l\'imprimante 3D déplace la tête d\'impression ou le plateau d\'une distance exacte, le firmware doit connaître précisément combien de pas moteur (y compris les micropas) correspondent à une unité de distance linéaire (millimètre ou pouce). Cette valeur est appelée pas par millimètre ou pas par pouce, et constitue un réglage critique stocké dans les configurations de firmware comme Marlin, Klipper ou RepRapFirmware.',
    },
    {
      type: 'paragraph',
      html: 'Si cette configuration est ne serait-ce que légèrement incorrecte, les mouvements physiques de l\'imprimante 3D ne correspondront pas aux instructions numériques générées par le logiciel de tranchage. Ce décalage entraîne des imprécisions dimensionnelles sur les pièces imprimées: les pièces sont plus grandes ou plus petites que prévu, les trous sont désalignés et les assemblages multi-pièces ne s\'emboîtent pas. Comprendre les composants physiques, les caractéristiques du driver et les rapports de transmission permet aux opérateurs de calculer des valeurs mathématiquement parfaites plutôt que de se fier à des méthodes de calibrage par essais-erreurs qui introduisent des erreurs mécaniques.',
    },
    {
      type: 'title',
      text: 'Comparaison des Spécifications des Moteurs Pas à Pas et des Attributs Mécaniques',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les moteurs pas à pas les plus courants en impression 3D sont les moteurs hybrides au format NEMA 17. Ces moteurs existent généralement en deux variantes d\'angle de pas: 1,8 degré par pas et 0,9 degré par pas. Un moteur pas à pas de 1,8 degré nécessite 200 pas complets pour effectuer une rotation complète de 360 degrés. Un moteur de 0,9 degré nécessite 400 pas complets pour la même rotation. Le choix entre ces spécifications affecte la précision de positionnement, le couple maximal et le bruit de fonctionnement du système d\'impression.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Moteur Pas à Pas de 1,8 Degré',
          description: 'Option moteur standard pour la plupart des imprimantes 3D commerciales. Offre un couple robuste à haute vitesse et reste économique.',
          points: [
            '200 pas complets par tour',
            'Meilleure rétention de couple à haute vitesse',
            'Dminution des besoins en inductance électrique',
            'Résolution suffisante pour les applications FDM générales'
          ]
        },
        {
          title: 'Moteur Pas à Pas de 0,9 Degré',
          description: 'Option moteur haute précision appréciée pour les imprimantes de détail fin et les systèmes d\'extrusion haute résolution.',
          points: [
            '400 pas complets par tour',
            'Double résolution mécanique avant microstepping',
            'Erreur de positionnement réduite et vibrations de résonance atténuées',
            'Force contre-électromotrice plus élevée à grande vitesse qui réduit la limite de couple'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: 'Bien qu\'un moteur de 0,9 degré offre le double de la capacité de positionnement physique, il exige deux fois plus d\'impulsions de pas du microcontrôleur de la carte mère pour atteindre la même vitesse de rotation. Sur les plateformes d\'impression rapides équipées d\'anciens microcontrôleurs 8 bits, cela peut saturer la file d\'attente de traitement et provoquer des saccades ou des limitations de vitesse. Sur les contrôleurs 32 bits modernes, cette limitation est rarement un problème, faisant des moteurs 0,9 degré une excellente mise à niveau pour les axes X et Y lorsque la finition de surface est critique.',
    },
    {
      type: 'title',
      text: 'Glossaire de la Terminologie des Moteurs Pas à Pas et des Drivers',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Angle de Pas',
          definition: 'Rotation angulaire de l\'arbre moteur lors d\'une séquence d\'excitation de bobine en pas complet, généralement 1,8 ou 0,9 degrés.',
        },
        {
          term: 'Microstepping',
          definition: 'Méthode contrôlée par le driver qui divise un pas complet en sous-pas plus petits en équilibrant le courant entre les phases du moteur, lissant le mouvement et réduisant les vibrations.',
        },
        {
          term: 'Pas de Courroie',
          definition: 'Distance entre les centres de deux dents adjacentes sur une courroie synchrone, couramment 2,0 millimètres pour les courroies GT2 utilisées en impression 3D.',
        },
        {
          term: 'Avance de Vis-mère',
          definition: 'Distance linéaire parcourue par un écrou sur la vis-mère lors d\'une rotation complète de 360 degrés de l\'arbre de la vis.',
        },
        {
          term: 'Couple de Maintien',
          definition: 'Couple maximal que le moteur peut exercer sur un arbre stationnaire lorsque le courant nominal est appliqué aux bobines.',
        },
        {
          term: 'Force Contre-électromotrice (Back-EMF)',
          definition: 'Tension générée par la rotation des bobines du moteur dans le champ magnétique, qui s\'oppose à la tension d\'alimentation et limite la vitesse et le couple maximaux.',
        }
      ],
    },
    {
      type: 'title',
      text: 'Calcul des Pas par Millimètre pour les Courroies Dentées',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pour les axes de mouvement horizontaux (généralement X et Y) des imprimantes 3D cartésiennes, CoreXY et Delta, des courroies dentées synchrones sont utilisées pour convertir le mouvement rotatif du moteur pas à pas en mouvement linéaire. Le calcul mécanique dépend entièrement du pas de la courroies et du nombre de dents de la poulie motrice fixée sur l\'arbre du moteur. Le profil de la dent de la courroies doit correspondre au profil de la dent de la poulie pour éviter le jeu et le glissement.',
    },
    {
      type: 'table',
      headers: ['Taille de Poulie', 'Type de Courroie', 'Pas de Courroie', 'Pas/tour (1,8°, 16x)', 'Pas par mm (Métrique)', 'Pas par Pouce (Impérial)'],
      rows: [
        ['16 Dents', 'GT2', '2,0 mm', '3200', '100,00 pas/mm', '2540,00 pas/in'],
        ['20 Dents', 'GT2', '2,0 mm', '3200', '80,00 pas/mm', '2032,00 pas/in'],
        ['32 Dents', 'GT2', '2,0 mm', '3200', '50,00 pas/mm', '1270,00 pas/in'],
        ['20 Dents', 'GT3', '3,0 mm', '3200', '53,33 pas/mm', '1354,67 pas/in'],
        ['16 Dents (0,9°)', 'GT2', '2,0 mm', '6400', '200,00 pas/mm', '5080,00 pas/in'],
        ['20 Dents (0,9°)', 'GT2', '2,0 mm', '6400', '160,00 pas/mm', '4064,00 pas/in']
      ],
    },
    {
      type: 'tip',
      title: 'Choix Pratique pour la Sélection de la Poulie',
      html: 'Choisir une poulie de 16 dents plutôt qu\'une de 20 dents augmente la résolution mécanique de 25 pour cent et la force linéaire exercée sur le chariot. Cependant, les poulies plus petites forcent la courroie à se plier selon un rayon plus serré, ce qui peut augmenter l\'usure de la courroie avec le temps et introduire des fréquences de vibration plus élevées. Pour les montages standard, les poulies de 20 dents représentent un compromis équilibré entre durée de vie de la courroie et résolution.',
    },
    {
      type: 'title',
      text: 'Réalités du Microstepping: Pertes de Couple et Solution d\'Interpolation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De nombreux opérateurs croient qu\'augmenter la résolution du microstepping du driver à des niveaux élevés comme 64, 128 ou 256 améliorera infiniment la précision de leur imprimante 3D. C\'est une idée reçue courante. En réalité, le couple incrémental entre les micropas chute brutalement à mesure que la division du microstepping augmente. Le courant électrique est divisé en courbes sinusoïdales et cosinusoïdales pour positionner l\'arbre moteur entre les pôles physiques. Si la friction externe ou la charge sur l\'axe dépasse le couple incrémental d\'un micropas, l\'arbre moteur ne bougera pas tant que plusieurs impulsions de micropas ne se seront pas accumulées.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Limitation de Couple du Microstepping Théorique vs Physique',
      html: 'À 16 micropas, le couple incrémental par micropas représente environ 9,8 pour cent du couple de maintien du moteur. À 256 micropas, le couple chute à seulement 0,6 pour cent du couple de maintien. Tout léger grippage mécanique, déséquilibre de tension de la courroie ou friction du chariot empêhera facilement le mouvement physique d\'1/256e de pas, ce qui signifie qu\'un microstepping natif élevé ne garantit pas une précision de positionnement réelle.',
    },
    {
      type: 'card',
      title: 'Fonction d\'Interpolation des Drivers Trinamic',
      html: 'Les drivers modernes tels que le TMC2208, le TMC2209 et le TMC5160 résolvent ce problème en recevant les commandes de pas à une résolution fiable de 16 micropas et en interpolant en interne ces pas à 256 micropas avant d\'exécuter les changements de courant dans les bobines. Cela offre le fonctionnement doux et silencieux du 256 micropas tout en maintenant le couple de maintien fiable et la charge de traitement réduite du contrôleur d\'une configuration en 16 micropas. Dans le firmware, conservez votre configuration à 16 micropas et laissez le driver gérer l\'interpolation interne.',
    },
    {
      type: 'title',
      text: 'Calcul des Pas par Millimètre pour les Vis-mères et Tiges Filetées de l\'Axe Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'axe Z vertical de la plupart des imprimantes 3D de bureau utilise des vis-mères ou des tiges filetées. Les vis-mères sont conçues pour la transmission de puissance et ont des profils de filet rectifiés de précision qui minimisent le jeu. Lors du calcul des pas par mm d\'une vis-mère, le pas du filet ne doit pas être confondu avec l\'avance. L\'avance est la distance linéaire réelle parcourue par l\'écrou de la vis-mère lors d\'une rotation complète de 360 degrés de la vis. L\'avance se calcule en multipliant le pas du filet par le nombre de départs du filet.',
    },
    {
      type: 'list',
      items: [
        'Vis-mère à un seul départ: pas de 2 mm, nombre de départs 1. L\'avance est de 2 mm par tour.',
        'Vis-mère à deux départs: pas de 2 mm, nombre de départs 2. L\'avance est de 4 mm par tour.',
        'Vis-mère à quatre départs (T8x8 courante): pas de 2 mm, nombre de départs 4. L\'avance est de 8 mm par tour.',
        'Tiges filetées métriques standard (ex. M8): un seul départ. L\'avance est égale au pas métrique standard, soit 1,25 mm par tour.'
      ],
    },
    {
      type: 'paragraph',
      html: 'Parce que les vis-mères ont un avantage mécanique sur les systèmes à courroie, elles atteignent des valeurs de pas par mm beaucoup plus élevées, ce qui donne des valeurs de résolution mécanique plus petites. Cette haute résolution est critique pour les axes Z car les couches sont typiquement imprimées par incréments entre 0,1 mm et 0,3 mm. Une valeur de pas par mm plus élevée permet à l\'imprimante d\'établir des hauteurs de couche cohérentes sans erreurs de positionnement.',
    },
    {
      type: 'title',
      text: 'Résumé des Étapes Clés pour l\'Intégration du Driver et du Moteur',
      level: 2,
    },
    {
      type: 'summary',
      title: 'Étapes Pratiques pour Configurer le Firmware de Votre Imprimante',
      items: [
        'Identifiez l\'angle de pas du moteur sur la fiche technique du fabricant (généralement 1,8 ou 0,9 degrés).',
        'Déterminez les réglages de microstepping du driver configurés via les cavaliers physiques ou les commandes UART logicielles (16 est recommandé).',
        'Mesurez ou consultez le pas de la courroie et comptez les dents de la poulie pour les axes à courroie.',
        'Vérifiez l\'avance de la vis-mère (pas multiplié par le nombre de départs) pour l\'axe Z.',
        'Saisissez ces paramètres dans notre calculateur pour obtenir la valeur exacte de configuration en pas/mm ou pas/pouce.',
        'Écrivez les valeurs calculées dans les fichiers de configuration de votre firmware ou sauvegardez-les à l\'aide de commandes terminal comme M92.'
      ],
    },
  ],
  faq: [
    {
      question: 'Pourquoi mes pas/mm calculés diffèrent-ils de mon étalonnage manuel ?',
      answer: 'Les pas/mm calculés sont mathématiquement exacts sur la base de la géométrie physique des composants. Si un étalonnage manuel suggère une valeur différente, c\'est généralement parce que l\'opérateur a mesuré le filament ou le déplacement d\'axe avec un pied à coulisse alors que le jeu mécanique, l\'étirement de la courroie ou le glissement de l\'extrudeur introduisaient des erreurs. Vous devez toujours utiliser la valeur calculée mathématiquement pour les axes de mouvement et corriger les problèmes mécaniques sous-jacents plutôt que d\'ajuster les pas.',
    },
    {
      question: 'Que se passe-t-il si je règle la valeur de microstepping trop haut dans le firmware ?',
      answer: 'Régler le microstepping à 64, 128 ou 256 dans le firmware accroît la demande en fréquence d\'impulsions sur la carte contrôleur. Si la carte mère ne peut pas générer les impulsions de pas assez rapidement, l\'imprimante peut se figer uniquement, saccader ou limiter la vitesse de course maximale. Il est préférable d\'utiliser 16 micropas dans le firmware avec l\'interpolation au niveau du driver activée.',
    },
    {
      question: 'Comment modifier les réglages de pas par mm sur mon imprimante 3D ?',
      answer: 'Vous pouvez modifier les valeurs temporairement en utilisant la commande M92 suivie de la lettre de l\'axe et de la valeur (ex.: M92 X80.00 Y80.00 Z400.00). Pour rendre ces valeurs permanentes, envoyez la commande M500 pour les sauvegrader dans l\'EEPROM, ou modifiez le fichier Configuration.h dans le firmware Marlin et reflashez-le, ou éditez le fichier printer.cfg dans Klipper.',
    },
    {
      question: 'Quelle est la différence entre le pas de la courroie et les dents de la poulie ?',
      answer: 'Le pas de la courroie est la distance entre deux dents consécutives de la courroie, mesurée de centre à centre. Les dents de la poulie sont le nombre total de dents physiques sur l\'engrenage fixé sur l\'arbre du moteur. Multiplier le nombre de dents par le pas donne la distance linéaire totale parcourue par révolution du moteur.',
    },
    {
      question: 'Puis-je utiliser différentes valeurs de microstepping pour différents axes ?',
      answer: 'Oui, vous pouvez configurer des valeurs de microstepping différentes pour les axes X, Y, Z et E. Par exemple, il est très courant d\'utiliser 16 micropas sur X et Y, 16 micropas sur Z, et 16 ou 32 micropas sur l\'extrudeur selon le rapport de réduction de l\'ensemble du mécanisme d\'extrusion.',
    }
  ],
  bibliography,
  howTo: [
    {
      name: 'Déterminer les Spécifications du Moteur et du Driver',
      text: 'Trouvez l\'angle de pas de votre moteur (généralement 1,8 ou 0,9 degrés) et la valeur de microstepping de votre driver (16 est la valeur par défaut standard).',
    },
    {
      name: 'Déterminer les Données de Transmission',
      text: 'Choisissez entre un entraînement par courroie (spécifiez le pas de la courroie et les dents de la poulie) et une vis-mère (spécifiez l\'avance de la vis).',
    },
    {
      name: 'Configurer les Paramètres du Firmware',
      text: 'Saisissez les valeurs, sélectionnez votre système d\'unités préféré, et copiez la commande de configuration des pas générée dans votre fichier de configuration imprimante.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Pourquoi mes pas/mm calculés diffèrent-ils de mon étalonnage manuel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les pas/mm calculés sont mathématiquement exacts sur la base de la géométrie physique des composants. L\'étalonnage manuel introduit souvent des erreurs dues à la tension de la courroie ou à la compression du filament.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculateur de Microstepping pour Driver Pas à Pas',
      description: 'Calculez les valeurs de configuration des pas et les limites de résolution physique pour les moteurs et drivers d\'imprimante 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment calculer les pas par mm d\'un moteur pas à pas',
      step: [
        {
          '@type': 'HowToStep',
          text: 'Déterminer les Spécifications du Moteur et du Driver',
        },
        {
          '@type': 'HowToStep',
          text: 'Déterminer les Données de Transmission',
        },
        {
          '@type': 'HowToStep',
          text: 'Configurer les Paramètres du Firmware',
        },
      ],
    },
  ],
};