import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'calculateur-taux-horaire-machine-cout-production';
const title = 'Calculateur de Taux Horaire Machine et Coût de Production';
const description =
  'Calculez le coût d\'exploitation réel d\'une imprimante 3D à partir de la consommation électrique, du tarif électrique, du prix d\'achat, de la durée de vie utile et de la durée d\'impression.';

const faqData = [
  {
    question: 'Comment calculer le coût horaire d\'une imprimante 3D ?',
    answer:
      'Ajoutez le coût électrique horaire au coût de dépréciation horaire. L\'électricité correspond aux watts divisés par 1000 multipliés par le tarif électrique. La dépréciation est le prix d\'achat divisé par les heures de durée de vie utile.',
  },
  {
    question: 'Pourquoi la dépréciation est-elle importante dans la tarification de l\'impression 3D ?',
    answer:
      'La dépréciation représente la valeur de la machine consommée pendant la production des pièces. L\'ignorer peut rendre une impression rentable alors que l\'imprimante perd silencieusement sa valeur de revente, sa fiabilité et sa capacité de remplacement.',
  },
  {
    question: 'Quelle durée de vie utile dois-je utiliser pour une imprimante 3D de bureau ?',
    answer:
      'Un repère de 5000 heures est un point de départ pratique pour de nombreuses imprimantes de bureau, mais les fermes de production devraient le remplacer par l\'historique de maintenance, le cycle de remplacement prévu et les données réelles de fonctionnement.',
  },
  {
    question: 'Est-ce la même chose qu\'un devis complet d\'impression 3D ?',
    answer:
      'Non. Ce calculateur couvre l\'électricité de la machine et l\'amortissement du matériel. Un devis complet doit également inclure le filament ou la résine, la main-d\'œuvre, les échecs d\'impression, la post-production, l\'emballage, les frais généraux et la marge.',
  },
];

const howToData = [
  { name: 'Saisissez la puissance mesurée de l\'imprimante', text: 'Utilisez les watts moyens pendant une impression comparable, pas seulement la puissance nominale de l\'alimentation.' },
  { name: 'Définissez la durée d\'impression', text: 'Déplacez le curseur de durée sur le temps machine prévu pour le travail ou le lot de production.' },
  { name: 'Ajoutez les données énergétiques et d\'actif', text: 'Saisissez le tarif électrique, le prix d\'achat de la machine et la durée de vie utile estimée en heures de fonctionnement.' },
  { name: 'Lisez la répartition des coûts', text: 'Utilisez le coût total, le taux horaire et la composition électricité versus dépréciation pour fixer le prix du temps machine.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'Calculateur de consommation électrique d\'imprimante 3D',
    'Calculateur de dépréciation horaire machine',
    'Estimateur de coût d\'exploitation d\'impression 3D',
    'Composition du coût: électricité versus amortissement',
  ],
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Saisies du taux horaire machine',
    resultsAriaLabel: 'Résultats du taux horaire machine',
    settingsLabel: 'Paramètres du devis',
    currencyLabel: 'Devise',
    currencyOptions: [
      { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
      { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
      { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
      { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
    ],
    durationLabel: 'Temps de production',
    powerLabel: 'Puissance moyenne',
    tariffLabel: 'Tarif électrique',
    purchasePriceLabel: "Prix d'achat de la machine",
    usefulLifeLabel: 'Durée de vie utile estimée',
    totalCostLabel: 'Coût d\'exploitation total',
    hourlyRateLabel: 'Taux horaire machine',
    electricityLabel: 'Électricité',
    depreciationLabel: 'Amortissement',
    electricityPerHourLabel: 'Coût énergétique par heure',
    depreciationPerHourLabel: 'Coût de l\'actif par heure',
    compositionLabel: 'Composition du coût: électricité versus amortissement',
    insightLabel: 'Aperçu de la rentabilité',
    utilizationLabel: 'Pression d\'utilisation',
    utilizationValueLabel: 'Durée de vie consommée',
    utilizationHint: 'Ce travail consomme la part indiquée de la durée de vie estimée de la machine.',
    batchLabel: 'Coût d\'exploitation du lot',
    energyUsedLabel: 'Énergie utilisée',
    costDriverLabel: 'Facteur principal',
    energyDriverLabel: 'Énergie',
    assetDriverLabel: 'Actif',
    balancedDriverLabel: 'Équilibré',
    electricityDominant: 'Le travail est dominé par l\'énergie: le tarif, la taille du lit chauffant, la température de l\'enceinte et le temps de préchauffage à vide influenceront le devis plus que le prix d\'achat.',
    depreciationDominant: 'Le travail est dominé par l\'actif: le prix de la machine et la durée de vie dominent, donc chaque heure inutilisée affaiblit l\'économie de cette imprimante.',
    balancedDominant: 'L\'électricité et l\'amortissement sont suffisamment proches pour que les deux apparaissent dans le taux horaire de l\'atelier au lieu d\'en cacher un dans la marge.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Ce que signifie un taux horaire machine dans l\'impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>taux horaire machine</strong> est le coût de maintien d\'une imprimante occupée de manière productive pendant une heure avant d\'ajouter le matériau, la main-d\'œuvre, la post-production, l\'emballage et le profit. Dans l\'impression 3D, ce chiffre est souvent sous-estimé car les coûts visibles tels que le filament sont plus faciles à remarquer que les coûts cachés tels que l\'électricité et la dépréciation du matériel. Une imprimante de bureau peut ne consommer que quelques centimes d\'électricité par heure, mais une machine professionnelle qui a coûté plusieurs milliers d\'euros doit récupérer sa valeur sur une durée de vie utile finie. Ce calculateur isole ces deux coûts machine pour que le devis de production commence par une base mesurable.',
    },
    {
      type: 'paragraph',
      html: 'Le calculateur utilise deux formules transparentes. Le coût électrique est <code>(W / 1000) x T x tarif</code>, où <code>W</code> est la puissance moyenne en watts, <code>T</code> la durée d\'impression en heures, et le tarif le prix de l\'électricité par kilowatt-heure. Le coût d\'amortissement est <code>(prix d\'achat / heures de durée de vie utile) x T</code>. Le coût d\'exploitation total est la somme des deux. Comme les deux termes évoluent avec le temps, les mêmes formules produisent également un taux horaire clair: électricité par heure plus dépréciation par heure.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Convertit les watts en kilowatts', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Unité de facturation énergétique', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Coût machine linéaire par heure', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Coût d\'exploitation total', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez les watts moyens mesurés',
      html: '<p>L\'étiquette de l\'alimentation indique la capacité maximale, pas la consommation de l\'imprimante pendant un travail réel. Pour une meilleure <strong>entrée dans le calculateur de consommation d\'imprimante 3D</strong>, mesurez une impression représentative avec un wattmètre et faites la moyenne des phases de préchauffage, d\'impression, de ventilation, de lit et d\'attente.</p>',
    },
    { type: 'title', text: 'Coût électrique: convertir les watts en coût de production', level: 2 },
    {
      type: 'paragraph',
      html: 'Le coût électrique dépend de la consommation moyenne, pas seulement de la puissance nominale de l\'imprimante. Une machine avec une alimentation de 350 W peut consommer en moyenne 90 W sur un petit travail PLA après le préchauffage, tandis qu\'une grande imprimante fermée avec un lit chaud et une enceinte peut rester beaucoup plus élevée pour les polymères techniques. La surface du lit chauffant, la température de l\'enceinte, la température de la buse, la température ambiante, le cycle du ventilateur et le temps d\'inactivité avant le retrait de la pièce peuvent tous modifier la puissance effective.',
    },
    {
      type: 'paragraph',
      html: 'La conversion en kilowatts-heures est simple mais importante. Une imprimante de 180 W fonctionnant pendant 8 heures utilise <code>0,18 kW x 8 h = 1,44 kWh</code>. À 0,25 € par kWh, cette partie du travail coûte 0,36 €. Cela peut sembler faible, mais les fermes avec de nombreuses machines, de longs travaux PETG ou ASA, des armoires de séchage chauffées et la climatisation peuvent transformer de petites différences horaires en une facture mensuelle significative.',
    },
    {
      type: 'table',
      headers: ['Entrée', 'Que saisir', 'Erreur courante'],
      rows: [
        ['Puissance moyenne', 'Watts mesurés sur tout le cycle d\'impression', 'Utiliser la puissance nominale de l\'alimentation ou le pic de préchauffage.'],
        ['Durée', 'Temps d\'occupation machine en heures', 'Ignorer le préchauffage, le refroidissement ou les temps d\'attente.'],
        ['Tarif', 'Prix réel par kWh sur la facture', 'Utiliser une moyenne nationale obsolète au lieu du tarif de l\'atelier.'],
        ['Devise', 'La devise utilisée dans votre modèle de devis', 'Mélanger le coût matériel en euros avec des hypothèses énergétiques en dollars.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Le coût énergétique est faible jusqu\'à ce que l\'échelle le rende visible',
      badge: 'Planification de ferme',
      html: '<p>Une petite imprimante peut ne pas justifier une comptabilité énergétique élaborée. Vingt imprimantes exécutant de longs travaux chaque jour, oui. La même formule électrique peut être utilisée par travail, par imprimante, par cellule ou par mois en changeant seulement la durée.</p>',
    },
    { type: 'title', text: 'Amortissement: le coût caché derrière la rentabilité de l\'imprimante', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'amortissement est la reconnaissance financière qu\'une imprimante se consomme par l\'usage. Les guides s\'usent, les ventilateurs vieillissent, les lits perdent leur planéité, les hotends se bouchent, l\'électronique devient obsolète et la machine doit éventuellement être remplacée. Si une imprimante coûte 900 € et que l\'atelier prévoit 5000 heures de fonctionnement utile, la machine consomme 0,18 € de valeur d\'actif chaque heure productive. Un travail de dix heures supporte donc 1,80 € de coût matériel avant que le matériau ou la main-d\'œuvre ne soient pris en compte.',
    },
    {
      type: 'paragraph',
      html: 'L\'amortissement linéaire est ici volontairement pratique. Il n\'essaie pas de modéliser le droit fiscal, la valeur de revente, le financement ou les événements de maintenance. Il répond plutôt à la question de tarification de production: combien de cet achat de machine doit être attribué à chaque heure de travail ? Ce nombre est la base des recherches de <strong>taux de dépréciation horaire pour imprimante 3D</strong> et pour toute ferme qui veut que l\'argent de remplacement existe lorsque l\'imprimante atteint la fin de sa vie économique.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Imprimante de bureau hobby',
          description: 'Faible prix d\'achat et utilisation irrégulière. L\'électricité peut être visible sur les travaux avec lit chauffant, mais l\'amortissement compte toujours si des pièces sont vendues.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Exposition au capital plus faible', 'Durée de vie souvent incertaine', 'La main-d\'œuvre manuelle domine généralement les devis'],
        },
        {
          title: 'Imprimante de ferme prosumer',
          description: 'Prix d\'achat modéré, disponibilité élevée, matériaux répétés et nombreux travaux identiques font de la dépréciation horaire un élément clé de la tarification.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Bonne pour des hypothèses de vie de 3000 à 8000 heures', 'Suivre les réparations réelles', 'Séparer le temps machine de la main-d\'œuvre'],
        },
        {
          title: 'Système industriel',
          description: 'Le coût du capital élevé signifie que l\'amortissement peut dominer. Les contrats de service, l\'environnement de la chambre de construction et le temps de qualification peuvent nécessiter des lignes de coût supplémentaires.',
          icon: 'mdi:domain',
          points: ['Le coût du capital domine', 'Les temps d\'arrêt sont coûteux', 'Ajouter les frais de service et d\'installation'],
        },
      ],
    },
    {
      type: 'message',
      title: 'La saisie de la durée de vie utile mérite attention',
      ariaLabel: 'Note sur la durée de vie utile',
      html: '<p>La valeur par défaut de 5000 heures est un point de départ, pas une vérité universelle. Une machine de hobby peu utilisée peut devenir obsolète avant d\'atteindre ce nombre, tandis qu\'une machine de ferme bien entretenue peut le dépasser. Utilisez le nombre qui correspond à votre politique de remplacement.</p>',
    },
    { type: 'title', text: 'Choisir les heures de durée de vie utile sans conjectures', level: 2 },
    {
      type: 'paragraph',
      html: 'La durée de vie utile est l\'hypothèse comptable la plus sensible de ce calculateur car elle se situe au dénominateur de la formule d\'amortissement. Si la même imprimante à 900 € se voit attribuer 3000 heures utiles, la dépréciation est de 0,30 € par heure. Avec 9000 heures utiles, elle tombe à 0,10 € par heure. L\'imprimante n\'a pas changé, mais l\'attente commerciale a changé. C\'est pourquoi un devis doit documenter la durée de vie choisie plutôt que de l\'enterrer dans une marge générique.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Utilisez les journaux de maintenance lorsqu\'ils sont disponibles: remplacements de buses, pannes de ventilateurs, usure des guides, courroies, cartes, hotends et surfaces de lit révèlent la courbe de coût réelle.',
        'Séparez les familles d\'imprimantes. Un petit bedslinger, une machine de production CoreXY et une imprimante résine ne devraient pas partager un même nombre de durée de vie utile.',
        'Durée de vie utile plus faible pour les machines expérimentales qui passent de nombreuses heures en réglages infructueux, tests de matériaux ou validation spécifique client.',
        'Augmentez la durée de vie utile seulement lorsque la disponibilité, la maintenance préventive, les pièces de rechange et l\'historique de remplacement soutiennent l\'hypothèse.',
        'Révisez l\'hypothèse après des mises à niveau majeures car un nouveau système de mouvement, une enceinte ou un hotend peuvent changer la vie économique de l\'actif.',
      ],
    },
    {
      type: 'table',
      headers: ['Hypothèse de durée de vie', 'Meilleur ajustement', 'Conséquence sur le prix'],
      rows: [
        ['2000-3000 h', 'Machines expérimentales, peu coûteuses, mal documentées ou à usage intensif', 'Une dépréciation horaire plus élevée protège le capital de remplacement.'],
        ['4000-6000 h', 'Machines de bureau standard ou prosumer avec utilisation régulière en production', 'Plage de départ équilibrée pour de nombreuses petites fermes.'],
        ['7000-10000 h', 'Parc d\'imprimantes stable avec données de maintenance et matériaux contrôlés', 'Coût horaire d\'actif plus faible mais nécessite une confiance dans la disponibilité.'],
        ['Plus de 10000 h', 'Actifs industriels ou fortement entretenus avec cycle de vie documenté', 'Utile seulement lorsque le service et les temps d\'arrêt sont comptabilisés séparément.'],
      ],
    },
    {
      type: 'summary',
      title: 'Liste de vérification de la durée de vie utile',
      items: [
        'Adaptez la durée de vie utile à la classe d\'imprimante, pas à un nombre générique sur Internet.',
        'Documentez l\'hypothèse pour que les devis restent explicables des mois plus tard.',
        'Recalculez lorsque la machine passe d\'un usage hobby à une production rémunérée.',
      ],
    },
    { type: 'title', text: 'Interpréter la répartition électricité versus amortissement', level: 2 },
    {
      type: 'paragraph',
      html: 'La barre de composition montre si un travail est dominé par l\'énergie ou par l\'actif. Les travaux dominés par l\'énergie répondent fortement au tarif électrique, à la stratégie du lit chauffant, à la température de l\'enceinte, au comportement de préchauffage et aux conditions ambiantes. Les travaux dominés par l\'actif répondent plus fortement au prix d\'achat, à la durée de vie utile et à l\'utilisation. Une répartition équilibrée signifie qu\'aucune ligne ne doit être ignorée ; les deux doivent figurer dans le taux horaire de base de la machine.',
    },
    {
      type: 'paragraph',
      html: 'Cette répartition est utile car le même coût total peut avoir différents remèdes. Si l\'électricité domine, réduire la température du lit, grouper les pièces pour éviter les préchauffages répétés, isoler une enceinte ou imprimer pendant les fenêtres tarifaires plus basses peut aider. Si l\'amortissement domine, le meilleur levier est l\'utilisation: gardez l\'imprimante occupée avec des travaux rentables, évitez le capital inactif et choisissez la taille de la machine avec soin plutôt que d\'acheter une capacité qui reste inutilisée.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coût électrique', definition: 'L\'énergie facturée consommée par l\'imprimante pendant la durée sélectionnée.' },
        { term: 'Amortissement', definition: 'La part du prix d\'achat de la machine attribuée aux heures utilisées par le travail.' },
        { term: 'Durée de vie utile', definition: 'Le nombre prévu d\'heures de fonctionnement productif avant que l\'imprimante ne soit économiquement remplacée.' },
        { term: 'Taux horaire machine', definition: 'Coût électrique par heure plus coût de dépréciation par heure avant matériau, main-d\'œuvre, frais généraux et profit.' },
        { term: 'Coût d\'exploitation', definition: 'Le coût machine engagé pour maintenir la production en activité pendant une durée spécifique.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Ce que ce calculateur inclut et exclut',
      items: [
        { pro: 'Inclut la consommation électrique mesurée, le tarif électrique, la durée, le prix d\'achat et la durée de vie utile.', con: 'N\'inclut pas le filament, la résine, les supports, les échecs d\'impression, la main-d\'œuvre, le loyer, le logiciel, l\'emballage ni la marge.' },
        { pro: 'Montre la répartition des coûts pour que les utilisateurs identifient le principal facteur économique.', con: 'Utilise un amortissement linéaire, donc il ne modélise pas les programmes d\'amortissement fiscal ni la valeur de revente.' },
        { pro: 'Fonctionne pour une impression, un lot ou un bloc de production mensuel en changeant la durée.', con: 'Nécessite des hypothèses honnêtes de puissance et de durée de vie pour éviter une fausse précision.' },
      ],
    },
    { type: 'title', text: 'Utiliser le résultat pour fixer un prix rentable par heure', level: 2 },
    {
      type: 'paragraph',
      html: 'Le taux horaire calculé est le plancher pour le temps machine, pas le prix de vente final. Un devis complet d\'impression 3D ajoute normalement le matériau, les déchets de supports, la purge, la main-d\'œuvre de l\'opérateur, le temps de tranchage et de préparation, la tolérance aux échecs, les consommables de maintenance, le loyer, le logiciel, les frais de paiement, les taxes et la marge cible. Le taux horaire machine reste essentiel car il empêche que l\'imprimante elle-même soit traitée comme gratuite.',
    },
    {
      type: 'paragraph',
      html: 'Par exemple, si le calculateur retourne 0,225 € par heure machine et qu\'un travail occupe l\'imprimante pendant 14 heures, le coût d\'exploitation machine est de 3,15 €. Si le matériau est de 4,80 €, l\'allocation de main-d\'œuvre de 6,00 €, la tolérance aux échecs de 1,20 € et la marge appliquée ensuite, le devis devient financièrement traçable. Lorsqu\'un client demande pourquoi une impression longue coûte plus que ne le suggère le poids du plastique, le temps machine devient une ligne explicable.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Aperçu de la rentabilité',
      html: '<p>Ce calcul est la base pour définir le <strong>prix par heure</strong> de toute ferme d\'impression. Une fois le coût machine par heure connu, l\'atelier peut décider de facturer le temps machine directement, de l\'inclure dans la majoration du matériau, ou de l\'utiliser en interne pour comparer les imprimantes et les matériaux.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ne devinez pas seulement par grammes',
      badge: 'Coût caché',
      html: '<p>Une pièce légère qui occupe l\'imprimante pendant 20 heures peut consommer plus de capacité machine qu\'une pièce lourde imprimée rapidement. La tarification basée sur le poids sans temps machine sous-évalue souvent les travaux lents, hauts, à couche fine ou à faible débit.</p>',
    },
    { type: 'title', text: 'Exemples pratiques pour les estimations de coût d\'exploitation en impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un travail PLA de bureau bien réglé peut consommer en moyenne 120 W, fonctionner pendant 6 heures, utiliser un tarif de 0,22 €/kWh et reposer sur une imprimante de 600 € avec une durée de vie utile de 5000 heures. L\'électricité ne représente que 0,158 €, tandis que l\'amortissement est de 0,720 €. Le coût d\'exploitation total de la machine est d\'environ 0,878 € et le taux horaire d\'environ 0,146 €. Dans ce cas, le travail est clairement dominé par l\'actif: une meilleure utilisation de la machine affecte la rentabilité plus que de petits changements de puissance.',
    },
    {
      type: 'paragraph',
      html: 'Un travail ASA sur une imprimante fermée plus grande peut consommer en moyenne 420 W pendant 18 heures à 0,30 €/kWh. Si l\'imprimante coûte 1800 € et que la durée de vie utile est de 4500 heures, l\'électricité est de 2,268 € et l\'amortissement de 7,200 €, pour un coût machine total de 9,468 €. Même si la consommation d\'énergie est beaucoup plus élevée, la dépréciation domine toujours car le coût du capital et la longue occupation de la machine sont substantiels.',
    },
    {
      type: 'paragraph',
      html: 'Une imprimante résine peut raconter une histoire différente. L\'imprimante peut consommer une puissance modeste, mais le calcul s\'applique toujours à l\'occupation de la machine. Si une construction prend 9 heures sur une machine de 2500 € devant produire 4000 heures utiles, l\'amortissement seul est de 5,625 €. Ce chiffre doit figurer dans le devis avant d\'ajouter la résine, les gants, l\'IPA ou le liquide de lavage, le post-durcissement, les supports et la main-d\'œuvre de nettoyage.',
    },
    {
      type: 'summary',
      title: 'Règles de décision',
      items: [
        'Utilisez les watts moyens mesurés pour la précision électrique.',
        'Utilisez des heures de durée de vie réalistes pour la récupération de l\'actif.',
        'Traitez le résultat comme le plancher du temps machine, puis ajoutez le matériau, la main-d\'œuvre, les frais généraux, le risque et la marge.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
