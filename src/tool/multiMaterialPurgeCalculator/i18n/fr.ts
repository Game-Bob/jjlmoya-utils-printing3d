import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'calculateur-de-purge-multimateriaux';
const title = 'Calculateur de Purge Multimatériaux: Analyser et Optimiser le Gaspillage de Filament';
const description = 'Estimez le volume de la tour de purge AMS et MMU, la masse de filament gaspillée et le coût de transition avec une matrice d\'intensité pigmentaire pour les changements de couleur.';

const faqData = [
  {
    question: 'Pourquoi un facteur de purge plus élevé est-il attribué au noir sur blanc qu\'au blanc sur noir ?',
    answer: 'Les pigments foncés contaminent les polymères pâles de manière plus visible que les pigments pâles ne contaminent les polymères foncés. Le calculateur modélise donc le noir sur blanc comme une transition à facteur élevé et le blanc sur noir comme une transition à facteur plus faible.',
  },
  {
    question: 'Ce calculateur remplace-t-il les volumes de purge du slicer ?',
    answer: 'Non. C\'est un planificateur de diagnostic qui estime l\'économie de purge avant le slicer ou l\'établissement du budget. Utilisez le résultat de calibration du slicer pour le réglage final spécifique à la machine.',
  },
  {
    question: 'Quel ratio de purge dois-je considérer comme trop élevé ?',
    answer: 'L\'outil signale un ratio de déchets élevé au-dessus de 30 pour cent du volume total extrudé. Ce seuil signifie généralement que l\'ordre des couleurs, le regroupement, la purge vers le remplissage ou la division du modèle doivent être revus.',
  },
  {
    question: 'Puis-je l\'utiliser pour des changements de matériau, pas seulement pour des changements de couleur ?',
    answer: 'La matrice actuelle se concentre sur la contamination pigmentaire. Les polymères mélangés, les supports solubles, les matériaux abrasifs et les changements de température peuvent nécessiter une purge supplémentaire au-delà du facteur de couleur.',
  },
];

const howToData = [
  {
    name: 'Saisir le volume de l\'objet et la purge de base',
    text: 'Saisissez le volume réel du modèle et le volume de purge standard que votre profil AMS ou MMU utilise pour un changement de filament normal.',
  },
  {
    name: 'Choisir les couleurs d\'origine et de destination',
    text: 'Utilisez les sélecteurs de couleur circulaires pour chaque transition. Le facteur de transition se met à jour immédiatement à partir de la matrice pigmentaire.',
  },
  {
    name: 'Définir le nombre de transitions',
    text: 'Indiquez combien de fois chaque paire de couleurs apparaît dans le travail. Les échanges répétés d\'obscur à clair domineront l\'estimation totale de purge.',
  },
  {
    name: 'Lire le ratio, la masse et le coût',
    text: 'Utilisez la barre objet versus purge, la masse de déchets et le résultat de coût pour décider si l\'impression doit être réorganisée avant la production.',
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

const howToSchema: WithContext<HowTo> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    currencyLabel: 'Devise',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Modèle de coût',
    objectVolumeLabel: 'Volume de l\'objet',
    basePurgeLabel: 'Purge de base par changement',
    densityLabel: 'Densité g/cm3',
    priceLabel: 'Prix par kg',
    transitionsTitle: 'Matrice de transition pigmentaire',
    fromLabel: 'De',
    toLabel: 'Vers',
    colorLabels: {
      white: 'Blanc',
      natural: 'Naturel',
      yellow: 'Jaune',
      red: 'Rouge',
      blue: 'Bleu',
      green: 'Vert',
      gray: 'Gris',
      black: 'Noir',
    },
    countLabel: 'Changements',
    objectLabel: 'Plastique réel de l\'objet',
    purgeTowerLabel: 'Déchets de la tour de purge',
    totalWasteLabel: 'Volume de purge',
    wasteCostLabel: 'Coût des déchets',
    purgeRatioLabel: 'Ratio de purge',
    massLabel: 'Masse des déchets',
    loadbarAriaLabel: 'Volume de l\'objet comparé au volume de la tour de purge',
    alertTitle: 'Ratio de déchets élevé détecté',
    alertText: 'Ratio de déchets élevé détecté: regrouper les couleurs similaires recommandé.',
    efficientText: 'Ratio de purge dans la limite de planification.',
    factorGuideTitle: 'Guide des facteurs de purge par transition',
    transitionLabel: 'Transition',
    factorLabel: 'Facteur',
    volumeLabel: 'Volume de purge',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Comment les déchets de purge AMS et MMU deviennent un véritable coût de production',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une impression multimatériaux ne consomme pas du filament uniquement dans l\'objet visible. Chaque changement de couleur ou de matériau laisse du polymère fondu dans la hotend, la zone de fusion, la buse, et parfois au début du chemin d\'extrusion suivant. L\'imprimante doit pousser suffisamment de nouveau filament à travers ce chemin avant que la surface visible suivante soit propre. Dans les flux de travail AMS, MMU, changeur de tête et palette, cette extrusion de nettoyage devient souvent une tour de purge, un bloc de purge, une ligne de purge ou un dépôt de décharge. Le point économique important est simple: la tour peut être tarifée comme n\'importe quelle autre pièce car elle a un volume, une masse et un coût matière.',
    },
    {
      type: 'paragraph',
      html: 'Les calculateurs génériques multiplient souvent le nombre d\'échanges par un volume de purge fixe. C\'est utile pour un budget approximatif, mais cela passe à côté du mode de défaillance le plus coûteux en impression couleur: <strong>la contamination asymétrique</strong>. Le blanc sur noir ne nécessite pas le même nettoyage que le noir sur blanc. Une petite quantité de pigment noir transportée dans du PLA, PETG ou ABS blanc est rapidement visible, tandis qu\'une petite quantité de blanc transportée dans du noir est généralement cachée par la charge pigmentaire plus foncée. Cet outil utilise une matrice de transition pour que chaque direction ait son propre multiplicateur.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Seuil d\'alerte de ratio de purge élevé utilisé par le tableau de bord' },
        { value: '1,6x', label: 'Multiplicateur de transition par défaut noir vers blanc' },
        { value: '0,8x', label: 'Multiplicateur de transition par défaut blanc vers noir' },
        { value: '0 boutons', label: 'Tous les calculs se mettent à jour instantanément pendant l\'édition' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le symptôme coûteux à surveiller',
      badge: 'Audit des déchets',
      html: 'Lorsque la tour de purge dépasse 30 pour cent du volume combiné de l\'objet et de la purge, le travail n\'est plus seulement une impression colorée. C\'est un processus de conversion de matière où une grande fraction du filament acheté devient une production non-produit. C\'est le point où l\'ordre des couleurs, la division du modèle, la purge vers le remplissage et le regroupement méritent attention avant que la machine ne démarre.',
    },
    {
      type: 'title',
      text: 'La matrice de transition derrière le calculateur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le modèle central est <code>Vtotal = somme(Vbase x Ka,b)</code>. <code>Vbase</code> est le volume de purge de base pour un changement de filament standard. <code>Ka,b</code> est le facteur pour passer de la couleur <code>a</code> à la couleur <code>b</code>. Un facteur inférieur à 1 signifie que la transition est généralement plus facile que la référence. Un facteur supérieur à 1 signifie que la couleur suivante est sensible à la contamination ou que la couleur précédente a un fort report de pigment. Le résultat est un volume de purge en centimètres cubes, qui est ensuite converti en masse en utilisant la densité du filament.',
    },
    {
      type: 'paragraph',
      html: 'La formule de coût est <code>Cwaste = ((Vtotal x densité) / 1000) x priceKg</code>. Si la tour de purge utilise 80 cm3 de PLA à 1,24 g/cm3, elle consomme 99,2 g de filament. À 24 le kilogramme, cette tour coûte 2,38 en matière avant de prendre en compte l\'électricité, le temps machine, les transitions de couleur ratées ou la post-production. Pour une impression de loisir, cela peut être acceptable. Pour une production répétée, c\'est une ligne de budget.',
    },
    {
      type: 'table',
      headers: ['Transition', 'Facteur par défaut', 'Pourquoi elle est pondérée ainsi'],
      rows: [
        ['Blanc vers noir', '0,80x', 'Le noir cache les petits résidus clairs, donc la tolérance à la contamination visible est plus élevée.'],
        ['Noir vers blanc', '1,60x', 'Les résidus foncés dans le blanc sont immédiatement visibles et nécessitent généralement une purge plus longue.'],
        ['Naturel vers blanc', '1,15x', 'Le matériau translucide ou naturel peut teinter le blanc opaque jusqu\'à ce que le chemin de fusion soit plus propre.'],
        ['Jaune vers blanc', '1,35x', 'Les pigments jaunes peuvent réchauffer ou tacher les surfaces pâles bien qu\'ils soient moins sévères que le noir.'],
        ['Rouge vers jaune', '1,08x', 'Le report de rouge modifie fortement la teinte dans le jaune et les couleurs adjacentes à l\'orange.'],
        ['Gris vers noir', '0,72x', 'Les résidus gris sont généralement cachés par le pigment noir, donc la purge peut être plus faible.'],
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez la calibration de votre slicer comme volume de base',
      html: 'Exécutez d\'abord la calibration de purge du fabricant ou de la communauté pour votre imprimante, puis saisissez ce résultat comme volume de purge de base. La matrice doit mettre à l\'échelle une référence connue, et non remplacer le réglage spécifique à la machine pour le diamètre de buse, le volume de la hotend, la longueur du chemin de filament et le comportement du slicer.',
    },
    {
      type: 'title',
      text: 'Pourquoi l\'opacité du polymère modifie le volume de purge requis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'opacité contrôle à quel point la contamination de la couleur précédente est visible dans le matériau suivant. Le blanc opaque est exigeant car il réfléchit fortement la lumière et montre des particules sombres ou des stries près de la surface. Les filaments naturels et translucides se comportent différemment: ils peuvent cacher moins de masse mais montrer une teinte en profondeur, surtout dans les parois minces ou les pièces rétroéclairées. Les couleurs saturées comme le rouge et le bleu peuvent également tacher les couleurs pâles suivantes car la concentration de pigment nécessaire pour un chroma fort reste visible à de faibles niveaux de résidu.',
    },
    {
      type: 'paragraph',
      html: 'L\'imprimante ne connaît pas la science des couleurs. Elle ne fait qu\'extruder une longueur ou un volume. L\'utilisateur doit décider si le résultat visible nécessite une pureté cosmétique, une séparation fonctionnelle, ou seulement un changement de couleur approximatif. Un jouet, un logo, une face d\'enseigne, un cadre de lithophanie ou un boîtier destiné au client peut nécessiter une purge agressive. Un support interne caché, un prototype d\'ébauche ou l\'arrière d\'un gabarit peut tolérer plus de report. Le calculateur expose ce compromis en faisant croître la tour de purge lorsque la direction de transition est plus difficile.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Destination claire',
          description: 'Le blanc, le naturel, le jaune et le gris pâle sont des destinations sensibles. Les couleurs précédentes foncées ou saturées nécessitent une purge plus longue avant que ces couleurs paraissent propres.',
          points: ['Utiliser des facteurs plus élevés', 'Regrouper les sections claires ensemble', 'Éviter de revenir du noir au blanc de manière répétée'],
        },
        {
          title: 'Destination foncée',
          description: 'Le noir, le bleu marine, le vert foncé et le gris foncé peuvent cacher les résidus des couleurs plus claires. Ces transitions peuvent souvent utiliser des multiplicateurs plus petits.',
          points: ['Risque visible plus faible', 'Bon objectif après les couleurs pâles', 'Couleur finale utile dans une séquence'],
        },
        {
          title: 'Transition de teinte similaire',
          description: 'Passer entre des couleurs apparentées coûte généralement moins cher que de passer du foncé au clair. Le rouge vers l\'orange ou le gris vers le noir est normalement plus facile que le bleu vers le jaune.',
          points: ['L\'ordre des couleurs compte', 'Les familles de teintes réduisent les déchets', 'Traiter les objets similaires ensemble'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volume de purge de base', definition: 'Le volume normal que votre slicer ou profil de calibration extrude pour un changement de filament ordinaire avant la mise à l\'échelle de la matrice.' },
        { term: 'Facteur de transition', definition: 'Un multiplicateur attribué à une direction d\'un changement de couleur, comme noir vers blanc ou blanc vers noir.' },
        { term: 'Ratio de purge', definition: 'Volume de purge divisé par le volume total extrudé, incluant à la fois l\'objet et la tour de purge.' },
        { term: 'Report de pigment', definition: 'Résidu visible de la couleur de filament précédente qui reste dans la hotend et apparaît dans l\'extrusion suivante.' },
        { term: 'Purge vers le remplissage', definition: 'Une stratégie de slicer qui redirige une partie de l\'extrusion de nettoyage vers le remplissage caché au lieu d\'une tour ou d\'une décharge.' },
      ],
    },
    {
      type: 'title',
      text: 'Comment réduire le gaspillage de filament AMS sans ruiner la qualité des couleurs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La première optimisation est l\'ordre des couleurs. Si un modèle peut être divisé, imprimé en groupes, ou agencé de sorte que les transitions sombre-vers-clair se produisent moins souvent, la tour de purge peut rétrécir considérablement. Les changements répétés de noir à blanc sont coûteux car chaque cycle oblige l\'imprimante à éliminer un pigment fort avant une destination sensible. Si le même design visuel peut être imprimé en blanc-vers-noir une fois, ou en pièces séparées assemblées plus tard, le budget matière change immédiatement.',
    },
    {
      type: 'paragraph',
      html: 'La deuxième optimisation est le choix de la destination. Lorsque plusieurs couleurs sont optionnelles, choisissez une couleur finale foncée pour les détails qui apparaissent après les régions pâles. Par exemple, un texte noir sur une plaque blanche est généralement moins cher qu\'un texte blanc sur une plaque noire car ce dernier oblige l\'imprimante à nettoyer les résidus foncés avant chaque segment blanc. Ce n\'est pas seulement une décision esthétique ; cela change la quantité physique de polymère qui doit être poussée à travers la hotend.',
    },
    {
      type: 'list',
      items: [
        'Regroupez les couleurs similaires dans le modèle ou la file d\'attente d\'impression afin que les teintes apparentées partagent les transitions.',
        'Utilisez la purge vers le remplissage lorsque la contamination interne des couleurs est acceptable et que la pièce a un volume de remplissage suffisant.',
        'Réduisez les échanges de couleurs en divisant les badges, logos, étiquettes ou inserts décoratifs en pièces imprimées séparées.',
        'Utilisez des couleurs plus foncées après des couleurs plus claires lorsque le design le permet.',
        'Ajustez les multiplicateurs de purge avec des échantillons physiques, pas seulement avec les valeurs par défaut du slicer.',
        'Budgétisez le coût de purge séparément dans les devis clients afin que le travail multicolore décoratif ne soit pas sous-évalué.',
      ],
    },
    {
      type: 'proscons',
      title: 'Compromis d\'optimisation',
      items: [
        { pro: 'Des facteurs de purge plus faibles réduisent la masse de la tour et le coût du filament.', con: 'Trop peu de purge peut créer des stries, des teintures ou des surfaces inacceptables destinées au client.' },
        { pro: 'Diviser les modèles peut éliminer de nombreux changements de couleur.', con: 'L\'assemblage ajoute de la main-d\'œuvre, de la gestion des tolérances, de la colle, des fixations ou des joints visibles.' },
        { pro: 'La purge vers le remplissage transforme une partie des déchets en plastique interne utile.', con: 'Cela fonctionne mieux seulement lorsque l\'objet a suffisamment de volume caché et que la contamination est structurellement acceptable.' },
        { pro: 'Le regroupement de couleurs similaires améliore l\'économie de la ferme d\'impression.', con: 'Cela peut retarder les travaux urgents uniques qui nécessitent une séquence de couleurs spécifique.' },
      ],
    },
    {
      type: 'title',
      text: 'Budgétisation des impressions multimatériaux pour les clients et les fermes d\'impression',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un devis d\'impression qui ne tarife que le volume final de l\'objet est erroné pour les travaux AMS et MMU. Le client achète le processus de fabrication, et le processus inclut l\'extrusion non productive. Un petit porte-clés avec de nombreux échanges de couleur couche par couche peut gaspiller plus de matière qu\'un support monochrome plus grand. Le calculateur rend cela visible en comparant le volume de l\'objet et le volume de la tour de purge comme deux blocs concurrents plutôt que de cacher le gaspillage dans un seul nombre.',
    },
    {
      type: 'paragraph',
      html: 'Pour une ferme, le ratio de purge est aussi un signal de planification. Les travaux à purge élevée occupent l\'imprimante tout en convertissant le filament en plastique de tour, donc la perte économique n\'est pas seulement matérielle. Le temps machine passé à changer le filament, couper, charger, essuyer et reconstruire la pression est du temps non consacré à produire du volume vendable. Lorsque le ratio de purge est élevé, demandez-vous si l\'article doit porter une surcharge multicolore, si les couleurs doivent être limitées, ou si une solution peinte, étiquetée ou assemblée est moins chère.',
    },
    {
      type: 'card',
      title: 'Règle de devis pour le travail multicolore',
      html: 'Tarifiez l\'objet, puis tarifiez la tour de purge comme une ligne de déchets séparée. Si le client passe de deux couleurs à quatre couleurs, ou ajoute de petits détails isolés sur de nombreuses couches, mettez à jour le devis car le nombre de transitions change même lorsque le volume visible du modèle bouge à peine.',
    },
    {
      type: 'table',
      headers: ['Ratio de purge', 'Interprétation', 'Action recommandée'],
      rows: [
        ['Moins de 15%', 'Travail multicolore efficace', 'Les hypothèses de devis normales sont généralement acceptables.'],
        ['15% à 30%', 'La perte de matière est visible', 'Examinez les transitions et vérifiez si la purge vers le remplissage aide.'],
        ['Au-dessus de 30%', 'Ratio de déchets élevé', 'Regroupez les couleurs, divisez le modèle, augmentez le devis ou reconcevez la disposition des couleurs.'],
        ['Au-dessus de 50%', 'La tour domine l\'économie', 'Traitez l\'impression comme un travail de production spécial, pas comme une impression d\'objet de routine.'],
      ],
    },
    {
      type: 'title',
      text: 'Lecture des résultats du tableau de bord',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Les deux blocs horizontaux sont intentionnellement sévères. Le vert est le volume réel de l\'objet. Le bloc de purge rayé est la matière qui ne devient pas le produit visible. Si le bloc rayé commence à paraître physiquement comparable au bloc de l\'objet, l\'impression mérite un examen approfondi. Ce ratio visuel est souvent plus convaincant que les grammes ou la devise car il montre à l\'utilisateur exactement combien de plastique est alloué au nettoyage.',
    },
    {
      type: 'paragraph',
      html: 'Le résultat de masse provient du volume multiplié par la densité. Le PLA est souvent autour de 1,24 g/cm3, le PETG est généralement proche de 1,27 g/cm3, l\'ABS est plus faible, et les filaments chargés varient considérablement. Le résultat de prix utilise le prix sélectionné par kilogramme. Si vous utilisez du PLA soie spécial, des mélanges de fibre de carbone, du support soluble ou du filament technique, remplacez le prix et la densité par défaut. Le même volume de purge peut avoir un poids économique très différent selon le matériau.',
    },
    {
      type: 'summary',
      title: 'Liste de contrôle décisionnelle',
      items: [
        'Utilisez la calibration de purge mesurée du slicer comme volume de base.',
        'Comptez les transitions répétées, pas seulement le nombre de couleurs chargées dans l\'AMS ou la MMU.',
        'Surveillez d\'abord les transitions noir vers blanc, saturé vers pâle et vers destination translucide.',
        'Considérez un ratio de purge supérieur à 30 pour cent comme un avertissement de refonte ou de révision de devis.',
        'Utilisez le résultat de coût pour la budgétisation matière et la barre visuelle pour une revue rapide du design.',
      ],
    },
    {
      type: 'message',
      title: 'Conclusion pratique',
      html: 'Une impression multimatériaux est efficace lorsque les changements de couleur sont arrangés de sorte que la tour de purge reste petite par rapport à l\'objet. Si la tour dépasse la ligne d\'avertissement des 30 pour cent, l\'optimisation la moins chère n\'est généralement pas une nouvelle bobine ou un profil plus rapide ; c\'est une meilleure stratégie de couleurs.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
