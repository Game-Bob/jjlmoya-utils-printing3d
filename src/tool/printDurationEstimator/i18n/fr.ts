import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = 'estimateur-de-temps-d-impression-3d-par-hauteur-de-couche-et-vitesse';
const title = 'Estimateur de Temps d\'Impression 3D par Hauteur de Couche et Vitesse';
const description =
  'Estimez la durée d\'une impression 3D sans ouvrir un slicer en combinant la hauteur du modèle, la hauteur de couche, la vitesse d\'impression, le remplissage, la complexité, la surcharge de déplacement et l\'utilisation de filament.';

const faqData = [
  {
    question: 'Combien de temps prendra mon impression 3D sans slicer ?',
    answer:
      'Vous pouvez l\'estimer à partir du nombre total de couches, du volume approximatif de matière, de la vitesse d\'impression moyenne, du remplissage et d\'une marge pour les déplacements et les changements de direction. Un slicer reste plus précis pour les travaux finaux.',
  },
  {
    question: 'Pourquoi la hauteur de couche change-t-elle autant le temps d\'impression ?',
    answer:
      'La hauteur de couche modifie le nombre de couches en Z. Un profil de 0,12 mm crée beaucoup plus de couches qu\'un profil de 0,28 mm pour la même hauteur de modèle, donc l\'imprimante répète les périmètres, le remplissage et la surcharge de changement de couche beaucoup plus de fois.',
  },
  {
    question: 'Pourquoi le temps d\'impression réel est-il plus long que la vitesse divisée par la distance ?',
    answer:
      'Les imprimantes maintiennent rarement la vitesse demandée dans les coins, les segments courts, les petits détails, les rétractions, les mouvements en Z et les trajets de déplacement. Les limites d\'accélération et la surcharge rendent la durée réelle plus longue que le calcul de mouvement idéal.',
  },
  {
    question: 'Est-ce plus précis que l\'estimation d\'un slicer ?',
    answer:
      'Non. Ce calculateur est destiné à la planification précoce, aux devis et aux comparaisons exploratoires. Un slicer peut inspecter la géométrie exacte, les supports, les coutures, les réglages d\'accélération, la largeur d\'extrusion et l\'ordre des trajectoires.',
  },
];

const howToData = [
  { name: 'Saisissez la hauteur du modèle', text: 'Utilisez la hauteur Z du modèle ou de l\'objet le plus haut du travail d\'impression prévu.' },
  { name: 'Choisissez la hauteur de couche', text: 'Utilisez la valeur réelle du profil d\'impression, par exemple 0,20 mm pour une configuration FDM typique de qualité brouillon.' },
  { name: 'Ajoutez la vitesse, l\'empreinte et le remplissage', text: 'Utilisez la vitesse d\'impression moyenne, une surface d\'empreinte XY approximative et le pourcentage de remplissage cible.' },
  { name: 'Ajustez la complexité et la surcharge', text: 'Augmentez la complexité pour les très petits détails et augmentez la surcharge pour de nombreux déplacements, supports ou rétractions.' },
  { name: 'Comparez les scénarios de vitesse', text: 'Utilisez les lignes à 40, 60 et 80 mm/s pour voir si l\'augmentation de la vitesse modifie significativement la durée totale du travail.' },
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
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Paramètres de l\'estimateur de temps d\'impression 3D',
    resultsAriaLabel: 'Résultats estimés du temps d\'impression 3D',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    modelHeightLabel: 'Hauteur du modèle',
    modelHeightHint: 'Dimension Z la plus haute de l\'impression.',
    layerHeightLabel: 'Hauteur de couche',
    speedLabel: 'Vitesse d\'impression moyenne',
    footprintLabel: 'Surface d\'empreinte estimée',
    footprintHint: 'Surface XY approximative utilisée comme proxy de volume.',
    infillLabel: 'Densité de remplissage',
    complexityLabel: 'Facteur de complexité',
    complexityHint: '0,80 pour les formes simples, 1,20 pour les petits détails et les segments courts.',
    overheadLabel: 'Surcharge de déplacement',
    filamentDiameterLabel: 'Diamètre du filament',
    densityLabel: 'Densité du matériau',
    timeLabel: 'Temps d\'impression estimé',
    layersLabel: 'Couches totales',
    materialLabel: 'Estimation de matière',
    filamentLabel: 'Longueur de filament',
    effectiveSpeedLabel: 'Vitesse effective',
    baseTimeLabel: 'Temps d\'extrusion',
    overheadTimeLabel: 'Temps de surcharge',
    comparisonLabel: 'Comparaison de vitesse',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'couches',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: 'Estimation courte: la surcharge du slicer, le préchauffage du lit et le refroidissement peuvent représenter une grande partie du temps réel écoulé.',
    balancedInsight: 'Estimation équilibrée: les changements de vitesse comptent, mais le nombre de couches et la surcharge influencent encore la durée finale.',
    highInsight: 'Estimation longue: envisagez des couches plus épaisses, moins de remplissage, moins de supports ou la division du modèle avant de simplement augmenter la vitesse.',
  },
  seo: [
    { type: 'title', text: 'Comment Estimer le Temps d\'Impression 3D à Partir de la Hauteur de Couche et de la Vitesse', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>estimateur de temps d\'impression 3D par hauteur de couche et vitesse</strong> est utile lorsque vous avez besoin d\'un chiffre de planification avant d\'ouvrir un slicer, pour comparer plusieurs profils d\'impression ou pour deviser une pièce à partir de dimensions approximatives. L\'idée centrale est simple: la hauteur du modèle divisée par la hauteur de couche donne le nombre de couches, et la quantité estimée de trajectoire extrudée divisée par la vitesse moyenne donne le temps de mouvement. La difficulté est que l\'impression FDM réelle n\'est pas un tapis roulant parfait. La buse ralentit dans les virages, les rétractions interrompent l\'extrusion, les déplacements ajoutent de la distance sans impression et les segments courts atteignent rarement la vitesse commandée.',
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur va intentionnellement au-delà de la formule la plus basique. Au lieu de supposer que <code>hauteur / hauteur de couche / vitesse</code> suffit, il combine un volume de modèle approximatif, la densité de remplissage, la largeur de la ligne d\'extrusion, un facteur de complexité, le temps de changement de couche et un pourcentage de surcharge de déplacement. Le résultat reste une estimation, pas un remplacement du slicer, mais il répond à la question pratique que les utilisateurs recherchent: <strong>combien de temps prendra mon impression 3D</strong> si je modifie la hauteur de couche, le remplissage ou la vitesse.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,20 mm', label: 'Hauteur de couche FDM courante pour des impressions équilibrées', icon: 'mdi:layers-outline' },
        { value: '15-20 %', label: 'Plage de départ utile pour la surcharge de déplacement et de mouvement', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Vitesses de comparaison typiques pour les imprimantes de bureau', icon: 'mdi:speedometer' },
        { value: '1,75 mm', label: 'Diamètre de filament courant pour calculer la longueur de matière', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez la vitesse moyenne, pas la vitesse de pointe',
      html: '<p>Si votre profil de slicer annonce 120 mm/s mais que les parois extérieures tournent à 40 mm/s, les petits périmètres à 25 mm/s et le remplissage à 90 mm/s, la vitesse d\'impression moyenne n\'est pas de 120 mm/s. Pour la planification, une vitesse moyenne réaliste donne souvent une meilleure estimation que le mouvement le plus rapide du profil.</p>',
    },

    { type: 'title', text: 'Pourquoi la Hauteur de Couche A un Effet si Important sur la Durée', level: 2 },
    {
      type: 'paragraph',
      html: 'La hauteur de couche détermine combien de fois l\'imprimante doit répéter la même séquence de base: périmètre, structure interne, surfaces supérieure et inférieure, déplacement vers l\'île suivante et mouvement Z vers la couche suivante. Un modèle de 80 mm de hauteur nécessite 400 couches à 0,20 mm, mais environ 667 couches à 0,12 mm. Même si chaque couche fine utilise légèrement moins de plastique par passage, l\'imprimante effectue beaucoup plus de transitions de couche, plus de contours répétés et plus d\'opportunités de mouvement lent limité par l\'accélération.',
    },
    {
      type: 'table',
      headers: ['Hauteur du modèle', 'Hauteur de couche', 'Nombre de couches', 'Interprétation pour la planification'],
      rows: [
        ['80 mm', '0,28 mm', '286 couches', 'Profil rapide de brouillon avec couches visibles.'],
        ['80 mm', '0,20 mm', '400 couches', 'Qualité et durée équilibrées pour de nombreuses pièces.'],
        ['80 mm', '0,12 mm', '667 couches', 'Profil de détail fin qui peut ajouter de nombreuses heures.'],
        ['160 mm', '0,20 mm', '800 couches', 'Les pièces hautes deviennent lourdes en durée même à vitesse normale.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quand la hauteur de couche est le vrai goulot d\'étranglement',
      badge: 'Vérifier les couches',
      html: '<p>Si l\'augmentation de la vitesse d\'impression ne change presque pas l\'estimation, le travail est peut-être dominé par le nombre de couches, les segments courts et la surcharge. Dans ce cas, passer de 0,12 mm à 0,20 mm peut faire gagner plus de temps que d\'augmenter l\'imprimante de 60 mm/s à 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Règles de décision sur la hauteur de couche',
      items: [
        'Utilisez des couches plus épaisses pour les prototypes, les supports, les fixations et les pièces où l\'état de surface en Z n\'est pas critique.',
        'Utilisez des couches plus fines pour les courbes douces, les petits textes, les miniatures et les surfaces cosmétiques.',
        'Pour les pièces hautes, les changements de hauteur de couche se cumulent rapidement car chaque couche supplémentaire répète la surcharge.',
      ],
    },

    { type: 'title', text: 'Vitesse d\'Impression, Accélération et le Facteur de Complexité', level: 2 },
    {
      type: 'paragraph',
      html: 'Une valeur de vitesse d\'impression est un objectif, pas une promesse. L\'imprimante doit accélérer jusqu\'à cette vitesse, décélérer avant les virages, obéir aux limites de jerk ou de déviation de jonction, et parfois ralentir pour le refroidissement, les ponts, les porte-à-faux, le temps de couche minimum et les petites îles. C\'est pourquoi un <strong>calculateur de vitesse d\'impression en temps d\'impression</strong> a besoin d\'un facteur de complexité. Une boîte propre avec de longues lignes de remplissage droites peut fonctionner près de la vitesse demandée. Une figurine détaillée, un logo, un treillis, une pièce filetée ou une sculpture organique peuvent passer la majeure partie de leur temps sur des segments courts où les limites d\'accélération importent plus que la vitesse maximale.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Géométrie simple',
          description: 'Les boîtes, les panneaux et les longs parcours de remplissage peuvent utiliser un facteur de complexité plus faible.',
          icon: 'mdi:cube-outline',
          points: ['Trajectoires continues plus longues', 'Moins d\'îles', 'Moins de surcharge de rétraction'],
        },
        {
          title: 'Géométrie mixte',
          description: 'La plupart des supports, boîtiers, accessoires et pièces domestiques se situent près du facteur par défaut.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Périmètres et remplissage comptent tous deux', 'Déplacements modérés', 'Pertes d\'accélération équilibrées'],
        },
        {
          title: 'Géométrie détaillée',
          description: 'Les petites pièces, le texte, les treillis, les supports et les surfaces courbes organiques nécessitent un facteur plus élevé.',
          icon: 'mdi:vector-polyline',
          points: ['Segments courts dominants', 'Plus de démarrages et d\'arrêts', 'Plus de rétractions et de déplacements'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Augmenter la vitesse d\'impression: ce qui s\'améliore et ce qui ne s\'améliore pas',
      items: [
        { pro: 'Les longues lignes de remplissage peuvent finir plus vite avec une vitesse accrue.', con: 'Les parois extérieures et les petits détails peuvent encore être limités par le profil.' },
        { pro: 'Les grands prototypes peu détaillés peuvent bénéficier d\'un mouvement plus rapide.', con: 'L\'accélération, le ring, le débit d\'extrusion et le refroidissement peuvent limiter la vitesse utile.' },
        { pro: 'Un tableau comparatif des vitesses montre rapidement l\'économie potentielle.', con: 'Il ne peut pas prédire les ralentissements spécifiques du slicer comme le temps de couche minimum.' },
      ],
    },
    {
      type: 'message',
      title: 'Les estimations de vitesse sont plus utiles pour la comparaison relative',
      ariaLabel: 'Note sur l\'estimation de vitesse',
      html: '<p>Utilisez les lignes à 40, 60 et 80 mm/s pour comparer de façon indicative. Si 80 mm/s ne fait économiser qu\'un petit montant, l\'impression est probablement limitée par les couches, la surcharge ou la complexité plutôt que par la vitesse brute.</p>',
    },

    { type: 'title', text: 'Remplissage, Volume et Temps de Matière', level: 2 },
    {
      type: 'paragraph',
      html: 'Le calculateur utilise la surface d\'empreinte et la hauteur du modèle comme une approximation du volume, puis ajuste ce volume par un rapport de solide effectif. Ce n\'est pas aussi précis que la lecture de la géométrie du maillage, mais cela capture une vérité physique importante: les parois et les peaux ne disparaissent pas quand on réduit le remplissage. Une pièce imprimée à 15 % de remplissage a toujours des périmètres, des couches supérieures, des couches inférieures, des petites pièces pleines et parfois des interfaces de support. Le calculateur conserve une part de coque dans l\'estimation pour qu\'un faible remplissage ne fasse pas s\'effondrer le temps d\'impression de façon irréaliste jusqu\'à presque rien.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Augmentez la surface d\'empreinte pour les objets larges, les boîtes, les plaques planes, les plateaux et les grands boîtiers.',
        'Réduisez la surface d\'empreinte pour les tours étroites, les figurines fines, les petits supports et les cadres ouverts.',
        'Utilisez le pourcentage de remplissage comme un contrôle de planification, pas comme la densité totale de la pièce.',
        'N\'oubliez pas que les supports, les bords, les radeaux, les tours de purge et les déchets multicolores ajoutent du temps en dehors du modèle lui-même.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Exemple: pourquoi 20 % de remplissage n\'est pas 20 % du temps d\'impression',
      html: '<p>Un boîtier de 80 mm de haut peut avoir quatre parois, six couches inférieures, six couches supérieures, des bossages vissés et une grande cavité interne. Réduire le remplissage de 40 % à 20 % réduit la longueur de la trajectoire interne, mais les parois et les peaux sont toujours imprimées sur chaque couche. Pour les modèles avec beaucoup de périmètres, modifier le nombre de parois ou la hauteur de couche peut affecter le temps plus que le seul changement de remplissage.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Surface d\'empreinte', definition: 'La surface XY approximative occupée par le modèle, utilisée ici comme entrée de volume grossière.' },
        { term: 'Rapport de solide effectif', definition: 'Un mélange de planification de matériau de coque et de matériau de remplissage utilisé pour estimer le volume extrudé.' },
        { term: 'Cordon d\'extrusion', definition: 'Le cordon de plastique déposé par la buse ; sa section transversale dépend de la hauteur de couche et de la largeur d\'extrusion.' },
        { term: 'Longueur de filament', definition: 'La longueur de filament brut nécessaire pour fournir le volume de plastique estimé.' },
      ],
    },

    { type: 'title', text: 'Surcharge de Déplacement: La Pièce Manquante dans les Calculateurs Simples', level: 2 },
    {
      type: 'paragraph',
      html: 'Une estimation de durée simple ignore souvent le mouvement sans extrusion. Les imprimantes réelles se déplacent entre les îles, rétractent et amorcent le filament, essuient, sautent en Z, évitent les pièces déjà imprimées, changent de direction et parfois marquent une pause pour refroidir. Ces actions ne créent pas de matière visible, mais elles consomment du temps réel. Un pourcentage fixe de surcharge est un moyen pratique de comptabiliser les déplacements quand on ne dispose pas d\'une trajectoire complète de slicer. La plage par défaut de 15-20 % est un point de départ utile pour les pièces FDM ordinaires à un seul matériau.',
    },
    {
      type: 'table',
      headers: ['Condition d\'impression', 'Surcharge suggérée', 'Raison'],
      rows: [
        ['Pièce unique et simple', '10-15 %', 'Peu d\'îles, moins de rétractions, trajectoires surtout continues.'],
        ['Pièce fonctionnelle typique', '15-22 %', 'Périmètres, remplissage et déplacements modérés.'],
        ['Plusieurs petites pièces sur un plateau', '22-35 %', 'Déplacements fréquents entre objets et démarrages répétés.'],
        ['Supports ou surfaces détaillées', '25-40 %', 'Les interfaces de support, les segments courts et les rétractions ajoutent du temps.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le préchauffage du lit n\'est pas inclus',
      badge: 'Temps total du travail',
      html: '<p>L\'estimation se concentre sur le temps de mouvement et d\'extrusion. Ajoutez du temps séparé pour le préchauffage du lit et de la buse, le palpage, le nivellement du maillage, le chargement du filament, le refroidissement et le retrait de la pièce lors de la planification de l\'occupation réelle de la machine.</p>',
    },
    {
      type: 'tip',
      title: 'Calibrez la surcharge à partir d\'une impression réelle',
      html: '<p>Prenez un travail terminé, comparez la durée du slicer ou du chronomètre avec ce calculateur, puis ajustez la surcharge et la complexité jusqu\'à ce que l\'estimation corresponde. Ce calibrage local améliorera la planification future plus que l\'utilisation de valeurs génériques indéfiniment.</p>',
    },

    { type: 'title', text: 'Quand Faire Confiance à Ce Calculateur et Quand Utiliser un Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Cet outil est le plus utile pour les estimations précoces, les conversations de devis, les démonstrations en classe et la comparaison de la hauteur de couche par rapport à la vitesse avant de s\'engager sur un profil. Il est particulièrement utile quand le STL exact n\'est pas encore disponible, quand un client fournit seulement des dimensions approximatives, ou quand vous voulez savoir si un changement vaut la peine d\'être étudié. Il n\'est pas conçu pour remplacer les estimations du slicer pour les travaux de production critiques, car les slicers inspectent la géométrie exacte du maillage, les vitesses par caractéristique, les trajectoires de support, l\'ordre des parois, les surfaces supérieure et inférieure, le placement des coutures, le contrôle d\'accélération et le comportement spécifique du firmware de la machine.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Utilisez ce calculateur pour comparer rapidement les profils de couche 0,12 mm, 0,20 mm et 0,28 mm.',
        'Utilisez-le pour estimer si un modèle haut est limité par le nombre de couches avant de changer la vitesse.',
        'Utilisez-le pour obtenir un volume de matière, une longueur de filament et un poids approximatifs à partir de dimensions approximatives.',
        'Utilisez un slicer avant d\'acheter du matériau, de réserver du temps machine ou de promettre des dates de livraison.',
      ],
    },
    {
      type: 'table',
      headers: ['Question', 'Réponse du calculateur', 'Réponse du slicer'],
      rows: [
        ['Des couches plus épaisses feront-elles gagner du temps ?', 'Bonne estimation indicative à partir du nombre de couches.', 'Résultat exact par trajectoire et surface spécifique.'],
        ['80 mm/s sera-t-il beaucoup plus rapide que 60 mm/s ?', 'Comparaison utile de scénarios de vitesse.', 'Comportement exact par caractéristique de vitesse et d\'accélération.'],
        ['De combien de filament pourrais-je avoir besoin ?', 'Volume, longueur et poids approximatifs.', 'Rapport de matière spécifique au profil.'],
        ['Puis-je deviser ce travail de production ?', 'Sélection préliminaire uniquement.', 'Nécessaire pour le devis final et la planification.'],
      ],
    },
    {
      type: 'summary',
      title: 'Meilleur flux de travail',
      items: [
        'Commencez par cet estimateur pour réduire les choix de hauteur de couche, de vitesse et de remplissage.',
        'Ajustez la complexité et la surcharge en utilisant une impression connue de votre propre machine.',
        'Re-slicez le profil candidat final avant de vous engager sur le coût, le temps ou la livraison.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
