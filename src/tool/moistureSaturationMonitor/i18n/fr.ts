import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'estimateur-deshydratation-filament';
const title = 'Estimateur de déshydratation de filament: Guide de régénération thermique';
const description = 'Modélisez la saturation hygroscopique des filaments avec une cinétique d\'adsorption exponentielle, l\'exposition à l\'humidité, le type de polymère et la température de la chambre de séchage.';

const faqData = [
  {
    question: 'Comment l\'estimateur de déshydratation de filament calcule-t-il la saturation en humidité ?',
    answer: 'Il utilise un modèle de saturation exponentielle: l\'absorption maximale du matériau multipliée par un moins e puissance moins le coefficient cinétique fois le temps d\'exposition, le tout mis à l\'échelle par l\'humidité relative ambiante.',
  },
  {
    question: 'Pourquoi le nylon nécessite-t-il plus de séchage que le PLA ?',
    answer: 'Le nylon a une capacité d\'absorption d\'humidité plus élevée et un coefficient d\'adsorption plus rapide que le PLA, il atteint donc une teneur en eau dommageable plus tôt pour la même humidité et le même temps d\'exposition.',
  },
  {
    question: 'Une température de séchage plus élevée est-elle toujours synonyme de séchage plus sûr ?',
    answer: 'Non. Une température plus élevée accélère la déshydratation, mais chaque polymère a une plage de température de chambre sûre. Son dépassement peut ramollir le filament, déformer la bobine ou modifier le comportement d\'impression.',
  },
  {
    question: 'Que signifie l\'indicateur de risque d\'hydrolyse ?',
    answer: 'Il compare la teneur en eau estimée au seuil critique du matériau et déclenche l\'alerte lorsque l\'humidité absorbée est suffisamment élevée pour augmenter le bullage, le stringing, la fragilité des couches ou la dégradation des chaînes polymères.',
  },
];

const howToData = [
  { name: 'Choisir le polymère', text: 'Sélectionnez le PLA, PETG, ABS, ASA, TPU, Nylon, PC ou PVA afin que le modèle puisse charger la capacité d\'équilibre et le coefficient cinétique appropriés.' },
  { name: 'Saisir l\'humidité de stockage', text: 'Définissez l\'humidité relative à laquelle la bobine a été exposée, en utilisant la mesure d\'humidité de la pièce, de la boîte ou de l\'atelier.' },
  { name: 'Définir le temps d\'exposition', text: 'Indiquez le nombre de jours que le filament a passés en dehors d\'une boîte sèche scellée ou d\'un sécheur actif.' },
  { name: 'Sélectionner la température de séchage', text: 'Utilisez une température de chambre située dans la plage de sécurité pour le polymère et le matériau de la bobine.' },
  { name: 'Démarrer le cycle de séchage', text: 'Lancez le minuteur de séchage persistant, puis laissez la visualisation de la chambre se vider progressivement à mesure que la charge d\'humidité estimée est éliminée.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    materialLabel: 'Polymère',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonate',
    materialPvaLabel: 'PVA support',
    humidityLabel: 'Humidité relative',
    exposureLabel: 'Temps d\'exposition',
    dryTempLabel: 'Chambre de séchage',
    spoolMassLabel: 'Masse de la bobine',
    calculateLabel: 'Démarrer le cycle de séchage',
    pauseCycleLabel: 'Pause',
    resumeCycleLabel: 'Reprendre',
    resetCycleLabel: 'Réinitialiser',
    saturationLabel: 'Teneur en humidité',
    absorbedLabel: 'Eau absorbée',
    dryingTimeLabel: 'Cycle de séchage',
    remainingTimeLabel: 'Temps restant',
    cycleProgressLabel: 'Progression du cycle',
    hydrolysisLabel: 'Risque d\'hydrolyse',
    stableLabel: 'Stable',
    watchLabel: 'Zone de surveillance',
    criticalLabel: 'Critique',
    chamberReadyLabel: 'Chambre prête',
    chamberRunningLabel: 'Cycle de séchage en cours',
    chamberCompleteLabel: 'Humidité purgée',
    curveLabel: 'Courbe d\'adsorption',
    kineticLabel: 'Cinétique de saturation',
    equilibriumLabel: 'Approche exponentielle de la saturation d\'équilibre',
    daysUnit: 'jours',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Comprendre la cinétique d\'adsorption: pourquoi le Nylon ne se comporte pas comme le PLA', level: 2 },
    { type: 'paragraph', html: 'Un <strong>estimateur sérieux du temps de séchage des filaments</strong> ne peut pas traiter l\'humidité comme une ligne droite. Les polymères hygroscopiques n\'absorbent pas le même pourcentage d\'eau chaque jour indéfiniment. Ils s\'approchent d\'un état d\'équilibre: rapidement au début, plus lentement près de la saturation, et dépendant fortement de l\'humidité relative ambiante. C\'est pourquoi une bobine laissée à 70% d\'humidité relative pendant deux jours n\'est pas simplement deux fois moins humide qu\'une bobine laissée pendant quatre jours. La première partie de l\'exposition produit souvent la plus forte augmentation d\'humidité, en particulier pour le Nylon, le TPU, le PVA et d\'autres matériaux dotés de groupes polaires qui attirent les molécules d\'eau.' },
    { type: 'paragraph', html: 'Cet outil modélise la teneur en humidité avec <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. <code>S_max</code> représente la capacité d\'absorption à l\'équilibre du polymère, <code>k</code> la vitesse d\'adsorption, <code>t</code> le temps d\'exposition et <code>RH</code> adapte le résultat à l\'environnement de stockage. Le résultat n\'est pas un certificat de laboratoire ; c\'est un modèle de planification d\'ingénierie qui explique pourquoi le même atelier peut conserver du PLA imprimable tout en rendant le Nylon crépitant, bulleux, sujet aux fils d\'ange et perdant sa résistance d\'adhérence intercouche.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Capacité d\'équilibre de planification pour le PLA' },
      { value: '3.2%', label: 'Capacité d\'équilibre de planification pour le Nylon PA' },
      { value: '5.8%', label: 'Capacité d\'équilibre de planification pour le filament de support PVA' },
      { value: 'RH ajustée', label: 'L\'humidité ambiante multiplie la courbe de saturation' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Les symptômes d\'humidité sont des symptômes de processus', badge: 'Indice d\'impression', html: 'Les bruits de claquement, les bulles de vapeur, les changements de surface satinée à rugueuse, le stringing excessif, les parois fragiles et l\'extrudat trouble ne sont pas des problèmes de trancheur aléatoires. Ils indiquent souvent que l\'eau s\'évapore brutalement dans la zone de fusion ou que l\'hydrolyse a réduit la longueur des chaînes polymères avant la dépose.' },

    { type: 'title', text: 'Comment le modèle de saturation exponentielle modifie les décisions de séchage', level: 2 },
    { type: 'paragraph', html: 'Les calculateurs linéaires demandent généralement un matériau et renvoient un nombre d\'heures fixe. Cela fonctionne pour un rappel rapide, mais masque la vraie question: quelle quantité d\'humidité le filament a-t-il réellement absorbée ? Une bobine stockée dans une boîte sèche scellée à 15% d\'humidité relative pendant trois semaines peut nécessiter peu ou pas de régénération. Le même polymère resté ouvert dans un garage humide pendant un week-end peut nécessiter un cycle complet de séchage. La modélisation de la saturation lie la recommandation de séchage à l\'historique d\'exposition plutôt que de traiter chaque bobine comme étant également humide.' },
    { type: 'table', headers: ['Entrée', 'Signification physique', 'Effet sur l\'estimation'], rows: [
      ['Humidité relative', 'Activité de l\'eau autour de la bobine', 'Une humidité relative plus élevée augmente la cible d\'équilibre et le pourcentage final absorbé.'],
      ['Temps d\'exposition', 'Durée pendant laquelle la diffusion a pu progresser', 'Les premiers jours comptent le plus ; la courbe ralentit à l\'approche de la saturation.'],
      ['Coefficient du matériau', 'Rapidité avec laquelle un polymère s\'approche de l\'équilibre', 'Le Nylon et le PVA s\'équilibrent plus rapidement que le PLA ou l\'ASA.'],
      ['Température de séchage', 'Énergie thermique disponible pour la désorption', 'Une température de chambre sûre plus élevée raccourcit le cycle estimé.'],
      ['Masse de la bobine', 'Quantité de polymère présente', 'Le pourcentage est l\'état du matériau ; les grammes absorbés sont proportionnels à la masse de la bobine.'],
    ] },
    { type: 'tip', title: 'Estimez l\'environnement réel, pas la météo générale', html: 'Utilisez l\'humidité à l\'intérieur de la boîte de stockage, de l\'enceinte de l\'imprimante, de l\'armoire ou de l\'atelier où le filament a réellement séjourné. Les données météo locales peuvent diffèrent considérablement de l\'humidité près d\'une imprimante chaude, sur une étagère de sous-sol ou dans un conteneur scellé avec déshydratant.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Pourquoi la progression ralentit près de la saturation', html: 'L\'anneau visuel suit le même comportement exponentiel que l\'équation. Il se remplit rapidement lorsque le polymère est sec car le gradient d\'humidité est fort. À l\'approche de l\'équilibre, ce gradient s\'affaiblit, ralentissant ainsi la vitesse de remplissage apparente. Ce ralentissement est physique, ce n\'est pas un effet d\'animation.' },

    { type: 'title', text: 'Plages du calculateur de déshydratation des filaments par matériau', level: 2 },
    { type: 'paragraph', html: 'Les recommandations de séchage doivent respecter le polymère et la bobine. Le PLA peut se ramollir ou se déformer s\'il est surchauffé. Le PETG tolère mieux la chaleur mais bénéficie tout de même d\'un contrôle modéré de la chambre. Le Nylon nécessite normalement un cycle plus chaud et plus long car il absorbe plus d\'eau et la retient plus fermement. Le PVA est extrêmement sensible à l\'humidité et peut devenir impossible à imprimer s\'il reste exposé. Le PC s\'imprime souvent mieux après séchage, même s\'il ne semble pas visiblement humide. L\'estimateur utilise ces différences pour transformer un simple <strong>calculateur de déshydratation de filament</strong> en un guide adapté à chaque matériau.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Réponse hygroscopique faible à modérée', description: 'Le PLA, l\'ABS et l\'ASA absorbent généralement moins d\'eau et plus lentement, mais subissent tout de même une perte de qualité après une longue exposition humide.', points: ['Cycles de séchage plus courts', 'Humidité d\'équilibre plus faible', 'Apparition progressive des symptômes'] },
      { title: 'Réponse hygroscopique élevée', description: 'Le Nylon, le TPU, le PVA et certains grades de PC nécessitent un stockage plus rigoureux et une régénération plus stricte.', points: ['Masse d\'eau absorbée plus élevée', 'Saturation précoce rapide', 'Risque accru de bullage et de fragilité des couches'] },
    ] },
    { type: 'table', headers: ['Matériau', 'Cible de température typique', 'Note de planification'], rows: [
      ['PLA', '40-55 C', 'Évitez la chaleur excessive car le PLA et certains corps de bobine peuvent se déformer.'],
      ['PETG', '55-70 C', 'Améliore souvent la cohérence de surface et réduit le stringing après quelques heures.'],
      ['ABS / ASA', '65-85 C', 'Absorption plus faible que le Nylon, mais bénéficie d\'un stockage à sec.'],
      ['TPU', '45-60 C', 'Les grades flexibles peuvent absorber suffisamment d\'humidité pour mousser ou filer.'],
      ['Nylon PA', '70-90 C', 'Nécessite généralement un séchage actif avant les impressions fonctionnelles critiques.'],
      ['PVA', '40-55 C', 'Matériau de support très sensible ; à sceller immédiatement après usage.'],
    ] },
    { type: 'proscons', title: 'Tableau de séchage fixe vs moniteur de saturation', items: [
      { pro: 'Un tableau fixe est rapide pour un cycle par défaut.', con: 'Il ne distingue pas une bobine issue d\'une boîte sèche d\'une bobine restée à l\'air humide.' },
      { pro: 'La modélisation de la saturation explique la sévérité des premières heures d\'exposition.', con: 'Elle dépend de coefficients de matériaux approximatifs et de l\'historique de stockage.' },
      { pro: 'La saisie de la température de séchage reflète la configuration réelle du séchoir.', con: 'Elle ne remplace pas les limites de température de sécurité indiquées par le fabricant.' },
      { pro: 'Les grammes absorbés concrétisent le résultat pour les bobines pleines ou entamées.', con: 'La masse globale ne révèle pas si l\'extérieur est plus humide que le cœur de la bobine.' },
    ] },

    { type: 'title', text: 'Risque d\'hydrolyse: quand un filament humide devient endommagé', level: 2 },
    { type: 'paragraph', html: 'L\'humidité ne nuit pas seulement à l\'aspect esthétique. Aux températures d\'extrusion, l\'eau absorbée peut provoquer une hydrolyse dans les polymères sensibles. L\'hydrolyse brise les chaînes moléculaires, réduisant la ténacité, l\'allongement et la fiabilité des pièces. Cet effet est crucial pour les pièces mécaniques fonctionnelles (supports, engrenages, conduits). Un filament humide peut s\'extruder correctement en apparence, mais la pièce finale sera fragilisée en raison de la dégradation chimique subie lors de la phase de fusion.' },
    { type: 'glossary', items: [
      { term: 'Hygroscopie', definition: 'La tendance d\'un matériau à absorber et retenir l\'humidité de l\'air ambiant.' },
      { term: 'Humidité d\'équilibre', definition: 'La teneur en humidité atteinte par un polymère après un temps prolongé à une humidité donnée.' },
      { term: 'Coefficient d\'adsorption', definition: 'Une valeur cinétique simplifiée régulant la vitesse d\'élévation de la courbe de saturation.' },
      { term: 'Désorption', definition: 'Le processus inverse: l\'eau quittant le polymère sous l\'effet de la chaleur lors du séchage.' },
      { term: 'Hydrolyse', definition: 'Coupure des chaînes chimiques par l\'eau sous l\'effet de la chaleur, affectant plusieurs polymères techniques.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Une surface sèche ne garantit pas un cœur sec', badge: 'Limite de diffusion', html: 'Le filament sèche de l\'extérieur vers l\'intérieur. Un séchage court et chaud peut traiter la surface tandis que le cœur d\'une bobine dense reste humide. Les grandes bobines, les flasques en carton et les enroulements serrés freinent la régénération.' },
    { type: 'message', title: 'La règle visuelle', html: 'Lorsque l\'anneau passe du bleu clair à un gris-bleu plus sombre, l\'outil indique le passage d\'une gestion d\'humidité normale à une zone de surveillance de l\'hydrolyse. C\'est le moment où le séchage devient indispensable pour le contrôle qualité.' },

    { type: 'title', text: 'Mettre en place un flux de travail de séchage fiable', level: 2 },
    { type: 'paragraph', html: 'Un bon <strong>guide de saturation des matériaux hygroscopiques</strong> associe prédiction et rigueur. Mesurez l\'humidité de stockage, notez la date d\'ouverture sur les bobines, conservez les polymères sensibles dans des boîtes étanches, renouvelez le déshydratant avant saturation et séchez avant d\'imprimer des pièces mécaniques. Le meilleur flux de travail évite les cycles successifs d\'humidité et de séchage, car chaque cycle thermique inutile peut vieillir le matériau, déformer la bobine ou gaspiller de l\'énergie.' },
    { type: 'list', items: [
      'Séchez le Nylon, le PVA, le TPU et le PC avant les impressions longues si l\'historique de stockage est inconnu.',
      'Gardez le PLA et le PETG sous scellés ; une faible absorption n\'est pas une absorption nulle.',
      'Utilisez un thermomètre indépendant dans le séchoir car les températures affichées sont souvent optimistes.',
      'Alimentez l\'imprimante depuis une boîte sèche lors des longues impressions en pièce humide.',
      'Remplacez le déshydratant lorsque sa couleur change ou que les capteurs d\'humidité de la boîte indiquent une hausse.',
      'Évitez de sécher à une température supérieure à la transition vitreuse ou au point de ramollissement du filament et de la bobine.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'La chambre de séchage est un système de régénération', html: 'La chambre doit offrir une chaleur stable, un flux d\'air constant et une évacuation de l\'humidité. Chauffer une boîte hermétique sans ventilation ne fait que déplacer l\'eau du filament vers l\'air ambiant, puis inversement lors du refroidissement.' },
    { type: 'summary', title: 'Liste de contrôle d\'interprétation pratique', items: [
      'Le pourcentage d\'humidité indique l\'état du matériau ; les grammes d\'eau mesurent la charge totale dans la bobine.',
      'Une humidité ambiante élevée et des matériaux rapides génèrent une saturation initiale abrupte.',
      'Le temps de séchage augmente avec la saturation et diminue avec une température de chambre élevée (et sûre).',
      'Le risque d\'hydrolyse concerne surtout l\'extrusion haute température et les pièces structurelles.',
      'La fiche technique du fabricant prévaut sur toute estimation théorique générale.'
    ] },

    { type: 'title', text: 'Réponse SEO: combien de temps faut-il sécher le filament 3D ?', level: 2 },
    { type: 'paragraph', html: 'La durée de séchage dépend du matériau, de l\'exposition à l\'humidité, de la masse de la bobine et de la température de la chambre. Le PLA peut ne nécessiter que quelques heures après une exposition modérée, tandis que le PETG et le TPU demandent plus de temps, et le Nylon ou le PVA exigent un cycle de régénération complet après un stockage humide. Un bon processus consiste à estimer d\'abord l\'eau absorbée, puis à sélectionner une température sûre et une durée adaptée pour la désorption. C\'est bien plus fiable que d\'appliquer une durée universelle par défaut.', },
    { type: 'diagnostic', variant: 'success', title: 'Meilleur cas d\'usage pour cet estimateur', badge: 'Preflight technique', html: 'Utilisez cet outil avant les impressions critiques, les séries de production, l\'usage de polymères techniques coûteux, ou tout travail où une rupture de pièce ou un défaut de surface coûterait plus cher qu\'un cycle de séchage.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
