import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'calculateur-debit-volumetrique';
const title = 'Calculateur de Débit Volumétrique: Limites Précises de la Buse';
const description =
  'Calculez le débit volumétrique d\'impression 3D en mm3/s, comparez-le à la capacité de fusion de la buse et identifiez quand la vitesse, la largeur de ligne et la hauteur de couche provoquent une sous-extrusion.';

const faqData = [
  {
    question: 'Qu\'est-ce que le débit volumétrique en impression 3D ?',
    answer:
      'Le débit volumétrique est le volume de plastique demandé à la buse chaque seconde. Il se calcule en multipliant la largeur de ligne par la hauteur de couche par la vitesse d\'impression, ce qui donne un résultat en mm3/s.',
  },
  {
    question: 'Que se passe-t-il si le débit volumétrique dépasse la limite de la buse ?',
    answer:
      'La buse ne peut pas faire fondre complètement le plastique au rythme demandé. La pression augmente, l\'extrusion devient irrégulière et l\'impression peut présenter une sous-extrusion, des parois fragiles, des surfaces rugueuses mates ou des sauts de pas de l\'extrudeuse.',
  },
  {
    question: 'Un V6 est-il vraiment limité à 15 mm3/s ?',
    answer:
      '15 mm3/s est une constante de planification pratique pour une buse standard à zone de fusion bien réglée. Les valeurs réelles dépendent du filament, de la température, de la buse, de la puissance du chauffage, de la tension de l\'extrudeuse et du degré de perte de qualité visuelle acceptable.',
  },
  {
    question: 'Pourquoi l\'augmentation de la hauteur de couche réduit-elle la vitesse sécurisée ?',
    answer:
      'La hauteur de couche est un multiplicateur direct dans l\'équation de débit. Si la largeur de ligne et la capacité de la buse restent les mêmes, doubler la hauteur de couche réduit environ de moitié la vitesse maximale avant que la buse n\'atteigne sa limite de fusion.',
  },
];

const howToData = [
  { name: 'Choisissez une architecture de buse', text: 'Sélectionnez un préréglage standard V6, Volcano, Bambu haut débit ou ultra-haut débit pour définir la constante de capacité de fusion.' },
  { name: 'Définissez la géométrie de ligne', text: 'Ajustez la largeur de ligne et la hauteur de couche pour correspondre au profil du slicer que vous prévoyez d\'utiliser.' },
  { name: 'Ajustez la vitesse d\'impression', text: 'Utilisez le curseur de vitesse fine pour observer l\'indicateur de charge approcher les zones de débit à 70 %, 90 % et critique.' },
  { name: 'Lisez la vitesse sécurisée et la réserve', text: 'Comparez les mm3/s actuels avec la vitesse maximale sécurisée et la réserve de taux de fusion restante.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Paramètres de limite de débit volumétrique',
    resultsAriaLabel: 'Résultats de limite de débit volumétrique',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    hotendLabel: 'Architecture de la buse',
    lineWidthLabel: 'Largeur de ligne',
    layerHeightLabel: 'Hauteur de couche',
    speedLabel: 'Vitesse d\'impression',
    flowLabel: 'Débit volumétrique',
    loadLabel: 'Charge thermique',
    maxSpeedLabel: 'Vitesse max sécurisée',
    reserveLabel: 'Réserve de fusion',
    stateLabel: 'État du système',
    idealState: 'DÉBIT IDÉAL',
    limitState: 'LIMITE DE VISCOSITÉ',
    criticalState: 'DÉBIT CRITIQUE',
    idealHint: 'La buse dispose d\'une marge thermique suffisante pour une pression de fusion stable et une extrusion régulière.',
    limitHint: 'Le profil est proche de la limite de viscosité. De petits changements de matériau ou de température peuvent révéler une sous-extrusion.',
    criticalHint: 'Le débit demandé dépasse la fenêtre de fusion fiable. Réduisez la vitesse, la largeur de ligne ou la hauteur de couche.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'Comment Fonctionne le Calculateur de Débit Volumétrique Maximum', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calculateur de débit volumétrique maximum</strong> répond à une question plus utile qu\'un simple calculateur de vitesse: la buse peut-elle faire fondre la quantité de plastique demandée par le slicer ? Les systèmes de mouvement peuvent annoncer des vitesses de déplacement élevées, mais l\'extrusion est limitée par le transfert thermique, la longueur de la zone de fusion, la pression de la buse, la viscosité du filament, la stabilité du chauffage et la tension de l\'extrudeuse. Le calculateur modélise le taux de fusion demandé comme <code>Vf = largeur de ligne x hauteur de couche x vitesse</code>, avec le résultat affiché en <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'L\'outil compare ce débit instantané à la capacité de la buse sélectionnée. Les buses standard de type V6 sont représentées avec une constante de taux de fusion plus faible, les architectures à zone de fusion plus longue comme Volcano utilisent une constante plus élevée, et les buses modernes haut débit utilisent des valeurs plus grandes. Le but n\'est pas de promettre une limite universelle de laboratoire, mais de fournir une vérification technique rapide avant qu\'un profil de slicer ne demande plus de plastique que le matériel ne peut en liquéfier de manière fiable.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Unité utilisée pour la capacité de fusion de la buse', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Limite de zone de confort pour les profils de production stables', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Limite de viscosité où les défauts deviennent sensibles', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Débit critique où le risque de sous-extrusion domine', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez la largeur de ligne du slicer, pas le diamètre de la buse',
      html: '<p>L\'équation de débit utilise la largeur de ligne d\'extrusion du slicer. Une buse de 0,4 mm imprime souvent une ligne de 0,42-0,48 mm. Si le calculateur utilise le diamètre de la buse au lieu de la largeur de ligne, il peut sous-estimer la demande de débit et masquer un profil déjà proche de la limite de la buse.</p>',
    },
    { type: 'title', text: 'Pourquoi la Vitesse et le Taux de Fusion Ne Sont Pas la Même Limite', level: 2 },
    {
      type: 'paragraph',
      html: 'Une imprimante peut se déplacer à 300 mm/s et échouer à 90 mm/s si le volume d\'extrusion est trop élevé. La vitesse n\'a de sens qu\'après avoir inclus la largeur de ligne et la hauteur de couche. Imprimer une ligne de 0,45 mm avec des couches de 0,20 mm à 150 mm/s demande 13,5 mm3/s. Imprimer une ligne de 0,60 mm avec des couches de 0,30 mm à la même vitesse demande 27 mm3/s. La vitesse de déplacement est identique, mais le second profil demande à la buse de faire fondre deux fois plus de plastique par seconde.',
    },
    {
      type: 'table',
      headers: ['Largeur de ligne', 'Hauteur de couche', 'Vitesse', 'Débit demandé'],
      rows: [
        ['0,42 mm', '0,16 mm', '120 mm/s', '8,06 mm3/s'],
        ['0,45 mm', '0,20 mm', '150 mm/s', '13,50 mm3/s'],
        ['0,50 mm', '0,25 mm', '180 mm/s', '22,50 mm3/s'],
        ['0,60 mm', '0,30 mm', '150 mm/s', '27,00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La sous extrusion ressemble souvent à un problème de réglage',
      badge: 'Plafond de débit',
      html: '<p>Lorsqu\'un profil dépasse la capacité de fusion, les utilisateurs cherchent souvent du côté de la rétraction, du pressure advance, de la température ou des pas de l\'extrudeuse. Ces réglages comptent, mais ils ne peuvent pas permettre à une zone de fusion courte de traiter du plastique illimité. Vérifiez d\'abord que les mm3/s demandés se situent dans la fenêtre de capacité de la buse.</p>',
    },
    {
      type: 'summary',
      title: 'Règles de l\'équation de débit',
      items: [
        'La largeur de ligne, la hauteur de couche et la vitesse se multiplient directement.',
        'Une petite augmentation de deux paramètres géométriques peut saturer une buse même lorsque la vitesse semble modeste.',
        'La vitesse maximale sécurisée est la limite de la buse divisée par la largeur de ligne et la hauteur de couche.',
      ],
    },
    { type: 'title', text: 'Références de Performance Thermique par Architecture de Buse', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'architecture de la buse contrôle le temps pendant lequel le filament reste dans la zone chauffée et l\'efficacité avec laquelle la chaleur pénètre le cœur du filament. Une zone de fusion compacte de type V6 est réactive et légère, mais son plafond de débit pratique est inférieur à celui d\'une zone de fusion longue de type Volcano. Les conceptions céramiques haut débit et ultra-haut débit augmentent le contact du chauffage, la longueur du trajet de fusion ou la surface interne pour soutenir des taux d\'extrusion plus élevés.',
    },
    {
      type: 'table',
      headers: ['Architecture de buse', 'Capacité de planification', 'Meilleur cas d\'usage', 'Précaution technique'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Profils de qualité, vitesse modérée PLA/PETG, imprimantes de bureau standard', 'Peut atteindre rapidement les limites de pression avec des lignes larges ou des couches épaisses.'],
        ['Revo High Flow', '18 mm3/s', 'Mise à niveau haut débit compatible avec un format compact', 'Nécessite encore une validation de température et de matériau.'],
        ['Volcano', '25 mm3/s', 'Grosses buses, couches épaisses, pièces fonctionnelles, profils rapides d\'ébauche', 'Les zones de fusion longues peuvent davantage baver et nécessitent un réglage de la rétraction.'],
        ['Bambu HF', '32 mm3/s', 'Profils d\'imprimante fermée haute vitesse et production rapide de PLA', 'Les valeurs du profil dépendent fortement du refroidissement et du comportement du filament.'],
        ['Rapido UHF / similaire', '45 mm3/s', 'Débit extrême, grandes largeurs d\'extrusion, rendement de production', 'Le couple de l\'extrudeuse, la puissance du chauffage et la géométrie de la buse deviennent des facteurs limitants.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Zone de fusion courte', description: 'Compacte, réactive, tête d\'impression plus légère, stockage thermique plus faible.', icon: 'mdi:thermometer-low', points: ['Bon contrôle des détails', 'Plafond de débit plus bas', 'Moins d\'inertie thermique'] },
        { title: 'Zone de fusion longue', description: 'Plus de temps de contact pour que le filament absorbe la chaleur avant d\'atteindre la buse.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Mm3/s plus élevé', 'Meilleur rendement en couches épaisses', 'Plus de gestion du bavage'] },
        { title: 'Noyau haut débit', description: 'La géométrie moderne augmente la surface de contact ou le couplage du chauffage sans simplement allonger la longueur.', icon: 'mdi:heat-wave', points: ['Réponse rapide', 'Rendement élevé', 'Nécessite des profils ajustés'] },
      ],
    },
    {
      type: 'message',
      title: 'Les valeurs de référence sont des constantes de planification',
      ariaLabel: 'Note de référence sur la buse',
      html: '<p>Les limites prédéfinies sont des constantes de planification délibérément conservatrices. La capacité de fusion réelle varie selon la formulation du filament, le diamètre de la buse, la cartouche chauffante, l\'emplacement de la thermistance, la température d\'extrusion et le degré de perte de qualité que la pièce peut tolérer.</p>',
    },
    { type: 'title', text: 'Lecture des Zones de l\'Indicateur de Charge', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'indicateur de charge traduit les calculs de débit en un état visuel de fonctionnement. En dessous de 70 % de charge, la buse dispose d\'une marge pour les variations normales de filament, les oscillations mineures de température et les changements de vitesse le long du parcours. Entre 70 % et 90 %, l\'extrusion peut rester réussie, mais le profil devient sensible. Au-dessus de 90 %, l\'impression est suffisamment proche du plafond de fusion pour que les variations de lot de matériau, l\'humidité ou une buse légèrement plus froide puissent la faire basculer dans une sous-extrusion visible.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70 %: bonne marge de production pour des pièces reproductibles et des variations normales de matériau.',
        '70-90 %: utile pour les tests de vitesse, mais validez les parois, les surfaces supérieures et la liaison du remplissage.',
        '90 %+: à traiter comme une zone critique à moins que le filament et la buse n\'aient été mesurés avec une tour de débit.',
        'Au-dessus de 100 %: réduisez la vitesse, la largeur de ligne ou la hauteur de couche avant de chercher des réglages non liés du slicer.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Pourquoi l\'indicateur peut être meilleur qu\'une boîte d\'avertissement',
      html: '<p>Une boîte d\'avertissement indique à l\'utilisateur ce qui a mal fonctionné après avoir franchi un seuil. Un indicateur de charge montre l\'approche de ce seuil. Cela permet de s\'arrêter à une marge opérationnelle planifiée plutôt que de réagir seulement lorsque le profil est déjà devenu instable.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Le débit critique n\'est pas qu\'un problème de qualité de surface',
      badge: 'Résistance mécanique',
      html: '<p>Le filament insuffisamment fondu peut mal adhérer entre les passages et les couches. Même lorsque la paroi extérieure semble acceptable, la liaison du remplissage, l\'adhérence des périmètres et la résistance aux chocs peuvent souffrir si le débit dépasse la capacité de fusion.</p>',
    },
    { type: 'title', text: 'Comment Utiliser le Calculateur Avec un Profil de Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Commencez par les valeurs réelles du slicer pour la largeur de ligne, la hauteur de couche et la vitesse de la paroi extérieure ou la vitesse générale d\'impression. Sélectionnez l\'architecture de buse la plus proche. Déplacez le curseur de vitesse jusqu\'à ce que l\'indicateur atteigne votre charge préférée. La vitesse maximale sécurisée affichée est la vitesse qui atteindrait exactement la limite de la buse pour la géométrie de ligne actuelle. Pour un travail de production, utilisez une valeur inférieure au maximum mathématique.',
    },
    {
      type: 'paragraph',
      html: 'Si l\'indicateur entre dans la zone critique, il existe trois moyens directs de réduire le débit: baisser la vitesse, réduire la largeur de ligne ou réduire la hauteur de couche. La température peut augmenter le débit pratique pour certains matériaux, mais elle modifie également la brillance, les ponts, le comportement en surplomb, le filage et la précision dimensionnelle. Le calculateur se concentre intentionnellement sur la géométrie et la capacité du matériel car ce sont les leviers les plus transparents.',
    },
    {
      type: 'proscons',
      title: 'Façons de réduire la demande de débit',
      items: [
        { pro: 'Réduire la vitesse préserve la géométrie de ligne et l\'intention dimensionnelle.', con: 'Cela augmente le temps d\'impression et peut réduire le rendement de la ferme.' },
        { pro: 'Réduire la hauteur de couche améliore la finition de surface et réduit les mm3/s.', con: 'Cela augmente le nombre de couches et peut allonger le travail malgré un débit plus faible.' },
        { pro: 'Réduire la largeur de ligne peut diminuer la pression et améliorer les détails fins.', con: 'Cela peut affaiblir les parois clairsemées et augmenter le nombre de trajectoires.' },
      ],
    },
    {
      type: 'tip',
      title: 'Validez avec une tour de débit',
      html: '<p>Utilisez le calculateur pour choisir une plage de vitesse réaliste, puis imprimez une tour de test de débit pour le filament et la température spécifiques. La meilleure limite de production est le débit le plus élevé qui donne encore des parois stables, une brillance uniforme, une bonne liaison des couches et aucun saut de l\'extrudeuse.</p>',
    },
    { type: 'title', text: 'Symptômes de Dépassement de la Capacité de Fusion de la Buse', level: 2 },
    {
      type: 'paragraph',
      html: 'Un profil dépassant la limite de fusion de la buse peut échouer progressivement. D\'abord, les surfaces supérieures peuvent montrer des traces fines ou de petits espaces. Ensuite, les lignes de remplissage deviennent irrégulières, les périmètres perdent leur brillance et les coins montrent une faible récupération de pression. Dans les cas plus graves, l\'extrudeuse clique, broie le filament, saute des pas ou laisse des sections cassantes parce que le filament entrant dans la buse n\'est pas complètement ramolli.',
    },
    {
      type: 'table',
      headers: ['Symptôme observé', 'Cause probable liée au débit', 'Réponse du calculateur'],
      rows: [
        ['Parois minces à haute vitesse', 'Les mm3/s demandés dépassent la capacité de fusion sur les longs mouvements droits', 'Réduisez la vitesse jusqu\'à ce que la charge revienne sous 90 %.'],
        ['Extrusion rugueuse mate', 'Le filament n\'est pas complètement chauffé à cœur', 'Réduisez le débit ou augmentez prudemment la température pour ce matériau.'],
        ['Cliquetis de l\'extrudeuse', 'La contre-pression dépasse la tension de l\'extrudeuse ou le couple du moteur', 'Réduisez le débit immédiatement et inspectez la tension d\'entraînement du filament.'],
        ['Faible liaison du remplissage', 'La matière sort trop froide ou fondue de manière irrégulière', 'Utilisez plus de marge thermique pour les pièces structurelles.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Débit volumétrique', definition: 'Le volume de plastique demandé à la buse par seconde, exprimé en mm3/s.' },
        { term: 'Capacité de taux de fusion', definition: 'La quantité pratique de filament qu\'une buse peut faire fondre de manière constante tout en maintenant la qualité d\'impression.' },
        { term: 'Largeur de ligne', definition: 'La largeur d\'un cordon extrudé dans le slicer, généralement légèrement supérieure au diamètre de la buse.' },
        { term: 'Hauteur de couche', definition: 'L\'épaisseur verticale de chaque couche imprimée ; un multiplicateur direct dans la demande de débit.' },
        { term: 'Réserve de débit', definition: 'La différence entre la capacité de la buse et le débit actuellement demandé.' },
      ],
    },
    {
      type: 'summary',
      title: 'Flux de travail pratique du débit',
      items: [
        'Calculez le débit demandé avant d\'augmenter la vitesse.',
        'Maintenez les profils de production en dessous de la zone critique sauf validation par des tests.',
        'Utilisez les préréglages de buse comme constantes de planification, puis affinez avec un calibrage spécifique au matériau.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
