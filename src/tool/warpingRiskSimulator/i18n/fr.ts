import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'simulateur-risque-warping-impression-3d';
const title = 'Simulateur de Risque de Warping pour l\'Impression 3D';
const description = 'Estimez le soulèvement de la première couche et le risque de warping à partir du retrait du matériau, de la surface d\'empreinte, de la diagonale la plus longue, de la température du lit, de la température ambiante et des conditions d\'enceinte.';

const faqData = [
  {
    question: 'Pourquoi la diagonale la plus longue affecte-t-elle le warping plus que la surface d\'empreinte ?',
    answer: 'La diagonale la plus longue représente le chemin de contraction continu le plus étendu. Une pièce longue peut accumuler suffisamment de retrait linéaire pour soulever les coins même si la surface de contact totale semble grande.',
  },
  {
    question: 'Ce simulateur garantit-il que mon impression ne se déformera pas ?',
    answer: 'Non. Il s\'agit d\'une estimation de risque. Le filament humide, les surfaces d\'impression sales, la hauteur de la première couche, les courants d\'air, la géométrie de la pièce et les choix de refroidissement du slicer peuvent modifier le résultat.',
  },
  {
    question: 'Quels matériaux ont le plus besoin d\'une enceinte ?',
    answer: 'L\'ABS, l\'ASA, le Nylon et le PC sont les plus sensibles à l\'enceinte dans ce modèle car ils combinent des températures de traitement plus élevées, un retrait plus fort et une plus grande contrainte de refroidissement.',
  },
  {
    question: 'Comment la largeur du bord est-elle estimée ?',
    answer: 'Le simulateur part de cinq pour cent de la diagonale la plus longue et l\'adapte en fonction du risque calculé, puis ajuste le résultat aux valeurs pratiques du slicer.',
  },
];

const howToData = [
  { name: 'Choisissez le matériau', text: 'Sélectionnez PLA, PETG, ABS, ASA, Nylon, PC ou TPU pour que le simulateur applique une classe de retrait.' },
  { name: 'Entrez l\'empreinte et la diagonale', text: 'Utilisez la surface en contact avec le lit et la distance la plus longue d\'un coin à l\'autre de la pièce.' },
  { name: 'Configurez l\'environnement thermique', text: 'Entrez la température du lit et la température ambiante, puis indiquez si l\'imprimante dispose d\'une enceinte fermée.' },
  { name: 'Copiez les réglages du slicer', text: 'Utilisez le bord suggéré, l\'adhésion, le refroidissement et les réglages d\'enceinte comme profil de départ.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Système d\'unités',
    unitMetric: 'Métrique',
    unitImperial: 'Impérial',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'po',
    noBrim: '0',
    material: 'Matériau',
    footprintArea: 'Surface d\'empreinte',
    footprintHelp: 'Surface réellement en contact avec le plateau, pas la surface totale du modèle.',
    diagonal: 'Diagonale la plus longue',
    diagonalHelp: 'Portée la plus longue d\'un coin à l\'autre de la première couche. C\'est le vecteur principal de tension thermique.',
    bedTemperature: 'Température du lit',
    bedTemperatureWarning: 'Avertissement de température',
    ambientTemperature: 'Température ambiante',
    chamber: 'Enceinte fermée',
    chamberOn: 'Fermée ou protégée activement',
    chamberOff: 'Imprimante ouverte',
    riskLow: 'Faible',
    riskMedium: 'Moyen',
    riskHigh: 'Élevé',
    riskCritical: 'Critique',
    riskIndex: 'Indice de risque',
    thermalIndex: 'Indice de tension thermique',
    deltaT: 'Delta T',
    brimRecommendation: 'Recommandation de bord',
    adhesionDiagnosis: 'Diagnostic d\'adhésion',
    adhesionStrength: 'Échelle d\'adhésion',
    criticalWarnings: 'Avertissements critiques',
    whyDiagonalMatters: 'Pourquoi la diagonale est importante',
    recommendedSettings: 'Configuration recommandée du slicer',
    copySettings: 'Copier la configuration',
    copied: 'Copié',
    simulatorNotice: 'Ceci est une estimation de risque, pas une garantie de succès. L\'humidité du filament, la contamination du plateau, le Z offset, les courants d\'air et les modifications de refroidissement restent des variables externes.',
    warnings: {
      openTechnicalMaterial: '{material} sans enceinte fermée est une condition sévère de warping.',
      bedTemperatureHigh: 'La température de lit pour {material} dépasse la plage recommandée de {min}-{max} {unit}. Attendez-vous à un ramollissement, un pied d\'éléphant ou des artefacts d\'adhésion.',
      bedTemperatureLow: 'La température de lit pour {material} est inférieure à la plage recommandée de {min}-{max} {unit}. L\'adhérence de la première couche pourrait être insuffisante pour cette géométrie.',
      narrowFootprint: 'L\'empreinte est étroite par rapport à la diagonale, donc le soulèvement des coins peut s\'accumuler rapidement.',
      highDeltaT: 'L\'écart entre la température du lit et la température ambiante est très élevé ; contrôlez le flux d\'air et la vitesse de refroidissement.',
    },
    diagnosis: {
      critical: 'Le bord est obligatoire. Utilisez une surface adhésive dédiée et évitez d\'imprimer ce matériau à l\'air libre.',
      highEnclosed: 'Un bord large et un adhésif sont fortement recommandés.',
      highOpen: 'Utilisez un bord, un adhésif et une enceinte fermée avant de commencer.',
      mediumEasyMaterial: 'Utilisez une surface PEI propre ; le bord est optionnel pour les coins tranchants.',
      medium: 'Utilisez un bord ou des oreilles de souris aux coins et vérifiez l\'adhésion au lit.',
      low: 'Sûr dans des conditions normales de première couche.',
    },
    adhesionOptions: {
      low: ['PEI propre ou surface texturée: adhérence normale, retrait le plus facile.'],
      medium: ['Bâton de colle ou couche de démoulage PVA: légère adhérence supplémentaire et libération plus sûre du PETG.', 'Oreilles de souris: adhérence localisée pour les coins sans bord complet.'],
      high: ['Bord large plus bâton de colle: large support mécanique avec nettoyage modéré.', 'Magigoo ou adhésif similaire: adhérence plus forte pour l\'ABS, l\'ASA, le PETG et les variantes de Nylon.'],
      criticalDefault: ['Bord pleine largeur: empreinte maximale de la première couche.', 'Adhésif haute résistance: utilisez du PEI plus un adhésif haute résistance.', 'Enceinte: nécessaire pour que l\'adhésif fonctionne de manière constante.'],
      criticalTechnical: ['Bord pleine largeur: empreinte maximale de la première couche.', 'Adhésif haute résistance: utilisez un adhésif spécifique adapté au Nylon ou au PC.', 'Enceinte: nécessaire pour que l\'adhésif fonctionne de manière constante.'],
    },
    slicerSettings: {
      brimWidth: 'Largeur du bord: {value}',
      bedAdhesion: 'Adhésion au lit: {value}',
      lowAdhesion: 'PEI propre ou surface texturée',
      highAdhesion: 'PEI plus bâton de colle, Magigoo ou adhésif spécifique',
      cooling: 'Refroidissement: {value}',
      normalCooling: 'Refroidissement normal de la pièce après la couche 3',
      technicalCooling: 'Refroidissement de la pièce désactivé pendant les 5-8 premières couches',
      enclosedChamber: 'Gardez l\'enceinte fermée jusqu\'à ce que la pièce refroidisse sous la température de transition vitreuse',
      openChamber: 'Protégez l\'imprimante des courants d\'air et du flux d\'air ambiant',
      skirtEnough: '0 mm, la jupe suffit',
    },
    diagonalExplanation: 'La diagonale la plus longue se comporte comme le vecteur de tension principal: pendant le refroidissement de la pièce, le retrait s\'accumule le long de cette portée et charge les coins même lorsque la surface d\'empreinte semble généreuse.',
  },
  seo: [
    { type: 'title', text: 'Comment estimer le risque de warping avant de slicer une impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Le warping n\'est pas seulement un problème de matériau et ce n\'est pas seulement un problème d\'adhésion au lit. Il apparaît lorsqu\'une couche imprimée refroidit, se contracte et crée suffisamment de contrainte interne pour vaincre l\'adhérence de la première couche. Un petit support en ABS peut échouer parce que le polymère se rétracte fortement ; un grand panneau en PLA peut échouer parce que la diagonale est assez longue pour accumuler la contraction sur une large portée. La question utile n\'est donc pas simplement <strong>ce matériau va-t-il se déformer ?</strong> mais <strong>cette géométrie et cet environnement thermique créent-ils plus de force de traction que le plateau ne peut en résister ?</strong>',
    },
    {
      type: 'paragraph',
      html: 'Ce simulateur utilise un Indice de Tension Thermique heuristique: <strong>facteur de retrait du matériau fois diagonale la plus longue fois différence de température lit-ambiant, divisé par la surface d\'empreinte</strong>. La formule est délibérément pratique. Elle ne prétend pas être une analyse par éléments finis, mais elle combine les variables que les opérateurs peuvent mesurer avant d\'imprimer: famille de matériau, surface de contact, portée linéaire la plus longue, température du lit, température ambiante et si l\'imprimante est fermée.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Utilisez le résultat comme un signal préventif',
      badge: 'Estimation',
      html: 'Un score faible signifie que l\'impression a peu de chances de se soulever si la première couche est propre et bien réglée. Un score élevé ou critique signifie que le profil du slicer doit être modifié avant d\'imprimer: bord plus large, adhésif, moins de refroidissement, protection contre les courants d\'air ou un matériau différent. Le simulateur ne peut pas voir le filament humide, le PEI huileux, une buse trop éloignée du lit ou une pièce avec des points de contact minuscules aux coins.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'largeur initiale du bord en fraction de la diagonale la plus longue', icon: 'mdi:ruler' },
        { value: '1,85x', label: 'multiplicateur sévère pour enceinte ouverte avec ABS, ASA, Nylon et PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'échelle de risque mappée à partir de l\'Indice de Tension Thermique', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Pourquoi la diagonale la plus longue peut être plus dangereuse que la surface', level: 2 },
    {
      type: 'paragraph',
      html: 'La surface d\'empreinte vous indique la quantité de surface disponible pour l\'adhésion. La diagonale vous indique jusqu\'où la contraction thermique peut s\'accumuler avant d\'atteindre un coin ou une extrémité fine. Deux pièces peuvent avoir la même surface et se comporter très différemment: une base carrée compacte a des chemins de contraction courts dans toutes les directions, tandis qu\'une bande longue et étroite concentre le retrait le long d\'une seule ligne et tente de se décoller aux extrémités.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Empreinte compacte',
          description: 'Une base carrée ou ronde distribue la contraction à travers de nombreux chemins courts. Les coins sont plus proches du centre, donc le bras de levier pour le soulèvement est plus petit.',
          icon: 'mdi:crop-square',
          points: ['Meilleur partage de charge', 'Moindre effet de levier aux coins', 'Bord souvent optionnel sur les matériaux faciles'],
        },
        {
          title: 'Empreinte à longue diagonale',
          description: 'Un long rectangle, cadre, lame, panneau d\'enceinte ou rail permet au retrait de s\'accumuler le long d\'une direction dominante. Les extrémités et les coins reçoivent la force de décollement la plus élevée.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Tension accumulée plus élevée', 'Les coins se soulèvent en premier', 'Bord ou oreilles de souris souvent nécessaires'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Comment mesurer rapidement la diagonale',
      html: 'Dans l\'aperçu du slicer, regardez la première couche d\'en haut et mesurez la distance d\'un coin à l\'autre la plus longue de la partie touchant le lit. Pour une empreinte rectangulaire, utilisez la diagonale du rectangle, pas seulement la longueur X ou Y. Pour une pièce irrégulière, utilisez la portée droite la plus longue entre deux points extérieurs.',
    },
    {
      type: 'table',
      headers: ['Configuration géométrique', 'Symptôme typique', 'Action préventive'],
      rows: [
        ['Long rail fin', 'Les extrémités se soulèvent tandis que le milieu reste attaché', 'Utilisez un bord ou des oreilles de souris aux deux extrémités'],
        ['Grand panneau plat', 'Les coins se courbent vers le haut progressivement', 'Utilisez une enceinte, un refroidissement plus lent et un adhésif'],
        ['Petite pièce haute', 'La base reste attachée mais la tour vacille', 'Le warping n\'est pas le risque principal ; améliorez la stabilité'],
        ['Cadre ouvert', 'Les coins intérieurs tirent vers l\'intérieur', 'Ajoutez un bord, augmentez la largeur de la première couche, réduisez le ventilateur'],
      ],
    },
    { type: 'title', text: 'Classes de retrait des matériaux utilisées par le simulateur', level: 2 },
    {
      type: 'paragraph',
      html: 'Les différents thermoplastiques se contractent à des degrés divers lors du refroidissement de la température d\'extrusion à la température ambiante. Le PLA et le TPU sont généralement tolérants car ils impriment à des températures plus basses et génèrent moins de contrainte de refroidissement. Le PETG se situe au milieu: il adhère fortement mais peut toujours tirer sur les coins tranchants. L\'ABS, l\'ASA, le Nylon et le PC sont traités comme des matériaux techniques à haut risque car ils combinent des températures d\'extrusion plus élevées, un retrait plus fort et un plus grand besoin d\'une enceinte stable et chaude.',
    },
    {
      type: 'table',
      headers: ['Matériau', 'Classe de retrait', 'Stratégie de lit courante', 'Sensibilité à l\'enceinte'],
      rows: [
        ['PLA', 'Faible', 'PEI propre, lit modéré', 'Faible'],
        ['TPU', 'Faible', 'Surface propre, éviter un écrasement excessif', 'Faible'],
        ['PETG', 'Moyenne', 'PEI texturé ou couche de démoulage', 'Moyenne'],
        ['ABS', 'Élevée', 'PEI plus adhésif ou lait d\'ABS si approprié', 'Très élevée'],
        ['ASA', 'Élevée', 'PEI plus adhésif, refroidissement contrôlé', 'Très élevée'],
        ['Nylon', 'Élevée', 'Adhésif spécifique, filament sec', 'Très élevée'],
        ['PC', 'Élevée', 'Lit à haute température et adhésif', 'Très élevée'],
      ],
    },
    {
      type: 'proscons',
      title: 'Changer de matériau plutôt que de lutter contre le warping',
      items: [
        { pro: 'Passer de l\'ABS à l\'ASA peut améliorer la durabilité extérieure tout en conservant un comportement thermique similaire.', con: 'L\'ASA nécessite encore une discipline d\'enceinte et peut se déformer sur les pièces longues.' },
        { pro: 'Passer de l\'ABS au PETG réduit le retrait et est souvent suffisant pour les supports et les boîtiers.', con: 'Le PETG a une résistance à la chaleur plus faible et une rigidité différente de celle de l\'ABS ou du PC.' },
        { pro: 'Le Nylon chargé de fibres peut réduire certains chemins de retrait et améliorer la rigidité.', con: 'Il nécessite un séchage, des buses résistantes à l\'abrasion et un contrôle d\'adhésion rigoureux.' },
      ],
    },
    { type: 'title', text: 'Delta T: pourquoi la température du lit et la température ambiante comptent toutes les deux', level: 2 },
    {
      type: 'paragraph',
      html: 'Le simulateur utilise <strong>Delta T</strong> comme la température du lit moins la température ambiante. Ce n\'est pas la même chose que la température de la buse, mais c\'est un indicateur utile du gradient thermique que subit la partie inférieure de la pièce. Un lit chaud réduit la contraction précoce à l\'interface, mais une pièce très froide ou un fort flux d\'air peuvent encore extraire la chaleur des couches supérieures et créer un gradient de contrainte entre la base ancrée et le corps en refroidissement de la pièce.',
    },
    {
      type: 'paragraph',
      html: 'Pour le PLA, un Delta T modéré peut être inoffensif car le matériau se contracte moins agressivement. Pour l\'ABS, l\'ASA, le Nylon et le PC, la même géométrie à la même température de lit peut échouer si l\'imprimante est ouverte aux courants d\'air. C\'est pourquoi le calcul applique un multiplicateur sévère lorsque ces matériaux techniques sont imprimés sans enceinte fermée.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Imprimante ouverte avec ABS, ASA, Nylon ou PC',
      badge: 'Condition critique',
      html: 'Si l\'enceinte est ouverte, l\'impression est exposée au refroidissement local, aux mouvements de porte, au flux d\'air HVAC et aux changements rapides de température des couches. La première couche peut sembler parfaite pendant les vingt premières minutes et se soulever plus tard à mesure que la pièce accumule plus de contrainte de retrait.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'Une enceinte plus chaude réduit la différence de température entre les nouvelles couches et les couches plus anciennes.',
        'Une enceinte fermée ralentit également le refroidissement après l\'impression, ce qui réduit le décollement soudain des coins.',
        'Les écrans anti-courants d\'air aident, mais ils ne sont pas équivalents à une enceinte chauffée stable pour le PC ou le Nylon.',
        'Augmenter seul la température du lit peut améliorer l\'adhérence, mais peut aussi augmenter le pied d\'éléphant sur les matériaux mous.',
      ],
    },
    { type: 'title', text: 'Comment l\'Indice de Tension Thermique est interprété', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'Indice de Tension Thermique est un score relatif, pas une force mesurée en newtons. Il augmente lorsque le facteur de retrait, la diagonale ou le Delta T augmentent. Il diminue lorsque la surface d\'empreinte augmente car une plus grande surface de contact peut distribuer la même charge de traction. La valeur est ensuite convertie en pourcentage de risque de 0 à 100 afin que différentes configurations d\'impression puissent être comparées rapidement.',
    },
    {
      type: 'table',
      headers: ['Plage de risque', 'Signification', 'Réponse recommandée'],
      rows: [
        ['0-31%', 'Faible', 'Nettoyez le lit, vérifiez la première couche, aucune adhésion spéciale nécessaire pour la plupart des formes'],
        ['32-57%', 'Moyen', 'Utilisez un bord sur les coins tranchants, réduisez le ventilateur initial, inspectez le contact de l\'empreinte'],
        ['58-81%', 'Élevé', 'Utilisez un bord large, un adhésif, une enceinte si le matériau le nécessite, évitez les courants d\'air'],
        ['82-100%', 'Critique', 'Considérez comme probable qu\'il se déforme à moins de changer la géométrie, le matériau ou l\'environnement'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Pourquoi diviser par la surface d\'empreinte ?',
      html: 'Une empreinte plus grande donne au lit plus d\'opportunité de résister à la force de décollement. Le modèle récompense les pièces avec un contact large et continu et pénalise les bases étroites, les petits pieds et les pièces longues qui n\'ont qu\'une fine bande touchant la surface.',
    },
    { type: 'title', text: 'Largeur du bord, oreilles de souris et choix d\'adhésif', level: 2 },
    {
      type: 'paragraph',
      html: 'La recommandation de bord part de <strong>Diagonale x 0,05</strong>. Une diagonale de 180 mm commence donc près de 9 mm avant la mise à l\'échelle par le risque. En pratique, le bord ne doit pas être choisi uniquement par matériau. Un petit cube en PLA peut ne pas nécessiter de bord, tandis qu\'une épée, un panneau ou un rail longs en PLA peuvent bénéficier d\'un bord modeste car la diagonale est le chemin de tension dominant.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Bord', description: 'Le meilleur choix polyvalent pour augmenter le contact de la première couche autour de toute la pièce.', icon: 'mdi:border-outside', points: ['Facile à retirer sur PLA', 'Très utile sur les coins ABS'] },
        { title: 'Oreilles de souris', description: 'Patches circulaires localisés placés aux coins ou aux extrémités fines où le soulèvement commence.', icon: 'mdi:circle-outline', points: ['Moins de nettoyage', 'Bon pour les rails et les cadres'] },
        { title: 'Adhésif', description: 'Améliore l\'adhérence chimique ou mécanique entre le polymère et la surface d\'impression.', icon: 'mdi:water-plus', points: ['Utile pour le Nylon et le PC', 'Le choix spécifique à la surface est important'] },
      ],
    },
    {
      type: 'tip',
      title: 'Ne faites pas du bord la seule solution',
      html: 'Si le simulateur indique un risque critique, un bord plus large peut retarder l\'échec mais n\'élimine pas la contrainte sous-jacente. Combinez le bord avec une enceinte, un refroidissement initial plus lent, un lit plus propre et des changements de géométrie tels que des coins arrondis ou des pièces divisées.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Déformation vers le haut causée par la contraction de refroidissement surpassant l\'adhésion au lit.' },
        { term: 'Surface d\'empreinte', definition: 'La surface du modèle qui touche le plateau d\'impression sur la première couche.' },
        { term: 'Diagonale la plus longue', definition: 'La portée droite la plus longue à travers la forme de contact de la première couche.' },
        { term: 'Delta T', definition: 'La différence de température entre le lit et l\'air ambiant de la pièce.' },
        { term: 'Bord', definition: 'Boucles de périmètre supplémentaires de la première couche imprimées autour de la pièce pour augmenter l\'adhésion.' },
      ],
    },
    { type: 'title', text: 'Réglages pratiques du slicer pour les pièces à haut risque', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Augmentez la largeur de ligne de la première couche pour créer plus de contact, mais évitez un écrasement Z excessif qui provoque des crêtes.',
        'Utilisez une première couche plus lente pour que le polymère adhère au lit avant que les couches ultérieures ne tirent dessus.',
        'Désactivez ou réduisez le refroidissement de la pièce pour l\'ABS, l\'ASA, le Nylon et le PC pendant les premières couches.',
        'Ajoutez un bord assez large pour dépasser les coins tranchants et les extrémités étroites.',
        'Évitez de placer de grandes pièces en matériau technique près des portes d\'enceinte, des bouches d\'aération ou des panneaux latéraux froids.',
      ],
    },
    {
      type: 'message',
      title: 'Modifications géométriques qui réduisent le risque',
      ariaLabel: 'Idées d\'atténuation géométrique',
      html: 'Arrondissez les coins tranchants, divisez les très longs panneaux en sections plus courtes, ajoutez des languettes temporaires aux extrémités fines, orientez la pièce de sorte que le chemin de contrainte le plus long soit plus court, ou ajoutez des pattes sacrificielles qui peuvent être coupées après l\'impression. Ces changements fonctionnent souvent mieux que simplement augmenter la température du lit.',
    },
    {
      type: 'summary',
      title: 'Liste de vérification rapide',
      items: [
        'Matériau à fort retrait plus enceinte ouverte est le signe d\'avertissement le plus fort.',
        'Diagonale longue plus petite empreinte signifie que les coins et les extrémités méritent un bord ou des oreilles de souris.',
        'Une température de lit élevée n\'annule pas une pièce froide ou un environnement avec courants d\'air.',
        'Le résultat est une estimation de planification ; l\'étalonnage de la première couche et l\'état du filament décident encore de l\'impression finale.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
