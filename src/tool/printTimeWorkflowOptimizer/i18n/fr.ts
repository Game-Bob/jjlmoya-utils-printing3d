import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = 'optimiseur-de-temps-d-impression-3d';
const title = 'Optimiseur de temps d\'impression 3D';
const description =
  'Comparez deux configurations d\'impression FDM côte à côte: nombre de couches, temps corrigé, consommation de filament, coût, compromis qualité-vitesse et avertissements de vitesse.';

const faqData = [
  {
    question: 'En quoi diffère-t-il d\'un simple calculateur de temps ?',
    answer:
      'Il inclut la surcharge de complexité, le temps de rétraction par couche, le volume ajusté du remplissage, la masse du filament, le coût et la comparaison de scénarios.',
  },
  {
    question: 'Peut-il remplacer les estimations du slicer ?',
    answer:
      'Non. Un slicer connaît les trajectoires exactes. Cet outil sert à planifier avant de lancer le tranchage.',
  },
  {
    question: 'Que change le réglage de complexité ?',
    answer:
      'Les options faible/moyenne/élevée appliquent des coefficients pour les déplacements, les pertes d\'accélération, les virages et les îlots.',
  },
  {
    question: 'Pourquoi l\'outil avertit-il au-delà de 100 mm/s ?',
    answer:
      'Beaucoup d\'imprimantes peuvent dépasser 100 mm/s, mais l\'extrusion et le refroidissement rendent les hautes vitesses risquées sans calibrage préalable.',
  },
];
const howToData = [
  { name: 'Saisir la taille et le volume du modèle', text: 'Ajouter la hauteur et le volume depuis votre logiciel CAO, l\'aperçu du slicer ou une approximation.' },
  { name: 'Régler le scénario A', text: 'Choisir la hauteur de couche, la vitesse, la largeur de ligne, le remplissage, le matériau et la complexité.' },
  { name: 'Régler le scénario B', text: 'Ajuster la seconde configuration pour comparer les résultats.' },
  { name: 'Lire l\'impact', text: 'Comparer le temps, le filament, le coût, les couches, l\'efficacité et le débit.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entrées workflow impression',
    resultsAriaLabel: 'Résultats workflow impression',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    currencyLabel: 'Monnaie',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Scénario A',
    scenarioBLabel: 'Scénario B',
    modelHeightLabel: 'Hauteur modèle',
    modelVolumeLabel: 'Volume estimé',
    layerHeightLabel: 'Hauteur couche',
    speedLabel: 'Vitesse',
    lineWidthLabel: 'Largeur ligne',
    infillLabel: 'Remplissage',
    complexityLabel: 'Complexité',
    complexityTooltip: 'Estime le temps mort: accélérations, virages, rétractions, îlots, déplacements.',
    pieceTypeLabel: 'Type de pièce',
    solidPieceLabel: 'Plein continu',
    hollowPieceLabel: 'Creux avec nombreuses cavités',
    materialLabel: 'Matériau',
    filamentPriceLabel: 'Prix du filament',
    lowComplexity: 'Faible (faces simples)',
    mediumComplexity: 'Moyenne (géométrie mixte)',
    highComplexity: 'Élevée (nombreux îlots)',
    estimatedTimeLabel: 'Temps estimé',
    filamentLabel: 'Filament',
    costLabel: 'Coût matériau',
    layersLabel: 'Couches',
    efficiencyLabel: 'Efficacité',
    flowLabel: 'Débit volumétrique',
    flowTooltip: 'Dépassement de 10-12 mm³/s = risque de sous-extrusion.',
    flowUnit: 'mm³/s',
    qualityTradeoffLabel: 'Compromis qualité',
    speedReductionLabel: '-10% vitesse',
    speedReductionAddsLabel: 'ajoute',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: '~8% surface plus propre',
    hardwareWarning: 'Vitesse >100 mm/s. Vérifier débit buse, refroidissement, accélération, calibrage extrusion.',
    flowWarning: 'Débit volumétrique dépassant la zone de confort de la buse standard.',
    bestValueLabel: 'Meilleur rapport',
    timeDeltaLabel: 'Écart temps',
    costDeltaLabel: 'Écart coût',
    materialDeltaLabel: 'Écart matériau',
    winnerBadge: 'Meilleur rapport',
    scenarioPrefix: 'Scénario',
    inScenarioLabel: 'dans',
    fasterDirection: 'plus rapide',
    cheaperDirection: 'moins cher',
    lighterDirection: 'plus léger',
    criterionAlignedLabel: 'Aligné sur le meilleur rapport',
    criterionTradeoffLabel: 'Compromis pour le meilleur rapport',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm³',
    imperialVolumeUnit: 'in³',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'min',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'Estimer le temps d\'impression 3D avant le tranchage', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>estimateur de temps d\'impression 3D</strong> utile ne peut pas se contenter de diviser le volume par la vitesse. Les imprimantes FDM passent du temps à accélérer, ralentir dans les virages, rétracter le filament, se déplacer entre les îlots, refroidir les petites couches et récupérer la pression après les changements de direction. L\'optimiseur modélise la pièce en fonction du volume imprimable, de la largeur de ligne, de la hauteur de couche, de la vitesse, du nombre de couches et d\'un coefficient de complexité pour que la planification préliminaire soit plus proche de la réalité du flux de travail.',
    },
    {
      type: 'paragraph',
      html: 'Le temps d\'extrusion de base est calculé à partir du volume sur le débit volumétrique: vitesse multipliée par largeur de ligne et hauteur de couche. Ensuite, l\'outil applique un coefficient de correction pour la complexité du modèle et ajoute une tolérance de rétraction fixe par couche. Cela ne prétend pas à la précision d\'un slicer, mais offre une comparaison plus honnête entre une configuration "brouillon" à 0,20 mm et une configuration "qualité" à 0,12 mm qu\'un calculateur linéaire simple.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Surcharge faible pour blocs simples et pièces lisses', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Surcharge élevée pour nombreux îlots et rétractions', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Tolérance de rétraction planifiée ajoutée par couche', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Seuil d\'avertissement pour imprimante standard (risque d\'extrusion)', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Utiliser le volume du slicer quand c\'est possible',
      html: '<p>La meilleure entrée de volume est le volume de matériau indiqué par le slicer ou la CAO pour le modèle, et non la boîte englobante extérieure. Les boîtes englobantes incluent l\'air vide autour des courbes, trous, poignées et cavités, ce qui peut exagérer le temps et la quantité de filament.</p>',
    },
    { type: 'title', text: 'Pourquoi la hauteur de couche influence autant le temps', level: 2 },
    {
      type: 'paragraph',
      html: 'La hauteur de couche affecte le temps d\'impression de deux manières. Premièrement, elle modifie le débit volumétrique: une couche de 0,12 mm à même vitesse et largeur extrude 40 % moins de plastique par seconde qu\'une couche de 0,20 mm. Deuxièmement, elle augmente le nombre total de couches, donc les surcharges de changement de couche, les rétractions, le rétablissement de la pression et les décisions de refroidissement surviennent plus souvent. C\'est pourquoi de petits changements cosmétiques peuvent transformer une impression de cinq heures en une impression de huit heures.',
    },
    {
      type: 'table',
      headers: ['Hauteur de couche', 'Utilisation typique', 'Conséquence sur le flux de travail'],
      rows: [
        ['0,28-0,32 mm', 'Pièces de brouillon, grands montages, vérifications rapides', 'Faible nombre de couches et débit élevé, mais lignes de couche visibles.'],
        ['0,18-0,22 mm', 'Impression générale PLA et PETG', 'Temps, résistance et qualité de surface équilibrés pour de nombreuses imprimantes de bureau.'],
        ['0,10-0,14 mm', 'Miniatures, coques courbes, pièces client visibles', 'Travaux beaucoup plus longs car le débit chute et le nombre de couches augmente.'],
        ['Moins de 0,10 mm', 'Cas de finition spéciaux', 'Souvent limité par la précision de la machine, le refroidissement et des rendements visuels décroissants.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Les couches fines peuvent être plus lentes que ne le suggère la formule',
      badge: 'Refroidissement et temps de couche minimal',
      html: '<p>Les petits modèles peuvent atteindre le temps de couche minimal défini dans le slicer. Quand cela se produit, l\'imprimante ralentit pour laisser refroidir le plastique, même si la formule volumétrique indique que la machine pourrait aller plus vite.</p>',
    },
    {
      type: 'summary',
      title: 'Règles de hauteur de couche',
      items: [
        'Une hauteur de couche plus faible réduit le débit par seconde à vitesse égale.',
        'Plus de couches ajoutent une surcharge répétée, même lorsque le volume du modèle est inchangé.',
        'La meilleure comparaison est basée sur des scénarios: profil "brouillon" contre profil "qualité".',
      ],
    },
    { type: 'title', text: 'Surcharge de complexité du modèle et temps mort', level: 2 },
    {
      type: 'paragraph',
      html: 'Le temps mort est l\'écart entre l\'extrusion théorique et l\'horloge de travail. Une paroi droite de type vase a peu de déplacements et peu de rétractions. Un boîtier mécanique avec de nombreux trous, bossages, étiquettes, nervures et îlots séparés force l\'imprimante à démarrer et s\'arrêter de nombreuses fois. Les limites d\'accélération signifient que la buse peut ne jamais atteindre la vitesse commandée sur les courts segments, donc la vitesse de déplacement moyenne réelle est inférieure à la valeur du curseur.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Complexité faible', description: 'Modèles lisses, contours continus, peu d\'îlots, déplacements internes limités.', icon: 'mdi:shape-outline', points: ['Surcharge réduite', 'Vitesse stable', 'Peu de rétractions'] },
        { title: 'Complexité moyenne', description: 'Pièces fonctionnelles courantes avec trous, courbes mixtes, changements de remplissage et déplacements modérés.', icon: 'mdi:cog-outline', highlight: true, points: ['Défaut équilibré', 'Quelque perte de déplacement', 'Base de devis utile'] },
        { title: 'Complexité élevée', description: 'Surfaces texturées, nombreuses caractéristiques séparées, interfaces de support et sections à forte rétraction.', icon: 'mdi:transit-connection-variant', points: ['Surcharge élevée', 'Risque de filandres accru', 'Temps réel plus long'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coefficient de surcharge', definition: 'Un multiplicateur qui approxime les déplacements, les pertes d\'accélération, les rétractions et autres temps non capturés par le calcul d\'extrusion stable.' },
        { term: 'Débit volumétrique', definition: 'La quantité de plastique poussée à travers la buse par seconde, calculée comme vitesse multipliée par largeur de ligne multipliée par hauteur de couche.' },
        { term: 'Nombre de couches', definition: 'La hauteur du modèle divisée par la hauteur de couche, arrondie au supérieur car les dernières couches partielles nécessitent encore un passage.' },
        { term: 'Sous-extrusion', definition: 'Un défaut où la buse ou l\'extrudeuse ne peut pas fournir assez de plastique fondu pour la vitesse et la géométrie demandées.' },
      ],
    },
    {
      type: 'message',
      title: 'Traiter la complexité comme un bouton de calibrage',
      ariaLabel: 'Note sur le coefficient de complexité',
      html: '<p>Si votre slicer signale régulièrement des temps plus longs que cet optimiseur pour des modèles similaires, augmentez la complexité. Si votre imprimante à entraînement direct avec une accélération réglée bat l\'estimation, diminuez-la pour les planifications futures.</p>',
    },
    { type: 'title', text: 'Consommation de filament, coût et remplissage', level: 2 },
    {
      type: 'paragraph',
      html: 'Le temps n\'est qu\'une partie de la décision du flux de travail. Le poids et le coût du filament comptent lors du devis de pièces, de la planification de lots ou pour décider si un profil de détail fin vaut la peine d\'occuper l\'imprimante. L\'optimiseur estime le volume imprimable corrigé en préservant une part de coque et en échelonnant la région interne par pourcentage de remplissage, puis multiplie ce volume par la densité du matériau.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Utilisez du PLA autour de 1,24 g/cm³ et du PETG autour de 1,27 g/cm³ pour une planification rapide des matériaux.',
        'Augmentez le volume estimé lorsque des supports, bords (brims), radeaux ou structures de purge font partie du travail.',
        'Un remplissage plus faible réduit le filament et le temps, mais les parois, couches supérieures et inférieures consomment toujours du matériau.',
        'Pour les lots de production, comparez les estimations du calculateur avec le poids réel de la bobine utilisée et ajustez les devis futurs.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Exemple de décision de flux de travail',
      html: '<p>Une pièce en PLA de 120 cm³ avec une couche de 0,20 mm peut être acceptable pour un gabarit d\'atelier, tandis que la version 0,12 mm a une meilleure apparence mais occupe l\'imprimante plus longtemps. Comparer le temps et le coût du matériau côte à côte rend le compromis visible avant d\'engager la machine.</p>',
    },
    {
      type: 'proscons',
      title: 'Optimiser la vitesse par rapport à la qualité',
      items: [
        { pro: 'Une vitesse plus élevée peut libérer de la capacité d\'impression pour plus de travaux par jour.', con: 'Elle peut révéler des oscillations, des coins faibles, un mauvais refroidissement et des limites de débit de la buse.' },
        { pro: 'Une vitesse plus faible améliore souvent la finition de surface et la cohérence dimensionnelle.', con: 'Elle augmente le temps d\'attente et peut rendre les petites pièces commerciales moins rentables.' },
        { pro: 'Une hauteur de couche plus faible améliore les surfaces courbes et les miniatures.', con: 'Elle multiplie le nombre de couches et la surcharge machine répétée.' },
      ],
    },
    { type: 'title', text: 'Avertissements matériel et limites pratiques de vitesse', level: 2 },
    {
      type: 'paragraph',
      html: 'Une valeur de vitesse dans le slicer n\'est pas une garantie que la buse maintiendra cette vitesse partout. Les imprimantes cartésiennes standard à lit mobile, les extrudeuses Bowden anciennes, les buses à zone de fusion courte et un refroidissement faible des pièces peuvent avoir du mal au-delà de 100 mm/s, à moins que l\'accélération, le "jerk", le "pressure advance", la température et le calibrage du débit soient réglés avec précision. L\'avertissement ne signifie pas que l\'impression échouera, mais que la configuration demandée doit être vérifiée par rapport au comportement réel du matériel.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause probable', 'Réponse de planification'],
      rows: [
        ['Parois minces ou lacunes', 'La buse ne peut pas fondre assez de plastique ou l\'extrudeuse patine', 'Réduire la vitesse, augmenter la température avec précaution, ou réduire la largeur de ligne/hauteur de couche.'],
        ['Oscillations près des coins', 'L\'accélération et les vibrations du châssis dominent', 'Réduire l\'accélération ou la vitesse pour les parois visibles.'],
        ['Petits éléments recourbés', 'Le refroidissement ne suit pas', 'Réduire la vitesse, augmenter la ventilation, ou imprimer plusieurs exemplaires.'],
        ['Filandres sur pièces complexes', 'Nombreux déplacements et rétractions', 'Augmenter la surcharge de complexité et régler la rétraction/température.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Le débit volumétrique est le vrai plafond de vitesse',
      badge: 'Vérifier mm³/s',
      html: '<p>Deux profils avec la même vitesse de déplacement peuvent demander des taux de fusion différents. Une couche de 0,30 mm et une ligne de 0,50 mm à 80 mm/s nécessitent bien plus de plastique par seconde qu\'une couche de 0,12 mm et une ligne de 0,42 mm à la même vitesse.</p>',
    },
    {
      type: 'summary',
      title: 'Utiliser l\'optimiseur avant le tranchage',
      items: [
        'Comparez deux profils candidats au lieu de deviner à partir d\'un seul nombre.',
        'Surveillez ensemble le nombre de couches, le débit volumétrique et les avertissements matériels.',
        'Conservez la dernière interaction localement pour que la planification répétée puisse continuer à partir de la configuration précédente.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};