import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = 'calculateur-roi-ferme-impression-3d';
const title = 'Calculateur de ROI de ferme d impression 3D';
const description =
  'Simulez la rentabilité mensuelle, la période de retour et le ROI annualisé pour une ferme d impression 3D en utilisant l occupation, le taux d échec, l électricité, les coûts fixes et variables.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'Comment calculer le ROI d une ferme d impression 3D?',
    answer:
      'Estimez les heures mensuelles productives, multipliez-les par le prix de vente par heure de machine, soustrayez les coûts fixes, d électricité et les coûts horaires variables, puis comparez le bénéfice annuel à l investissement initial.',
  },
  {
    question: 'Pourquoi le taux de réussite influence-t-il le retour sur investissement d une ferme d impression?',
    answer:
      'Les impressions ratées consomment de la capacité machine, de la matière, des buses, de l énergie et de l attention de l opérateur sans générer d heures facturables. Un taux de réussite inférieur réduit les heures productives réelles et retarde le retour sur investissement.',
  },
  {
    question: 'Que doit inclure le coût variable par heure?',
    answer:
      'Incluez la consommation de filament ou de résine, l usure des buses, l usure de la surface d impression, les pièces de maintenance courante, les consommables et toute allocation horaire qui varie avec le temps de production réussi.',
  },
  {
    question: 'Le retour sur investissement est-il identique au ROI?',
    answer:
      'Non. Le retour sur investissement estime le nombre de mois nécessaires pour récupérer l investissement initial à partir du bénéfice net mensuel. Le ROI compare le bénéfice annualisé à l investissement d origine sous forme de pourcentage.',
  },
];

const howToData = [
  { name: 'Saisir la taille de la ferme', text: 'Ajoutez le nombre d imprimantes actives et l investissement initial pour les machines, l installation, les postes de travail et la mise en service.' },
  { name: 'Ajouter les coûts d exploitation mensuels', text: 'Saisissez les frais généraux fixes et l électricité en tant que coûts mensuels, puis ajoutez le coût variable par heure de machine productive.' },
  { name: 'Définir l occupation et le taux de réussite', text: 'Utilisez des pourcentages d occupation et de réussite réalistes afin que le modèle déduise les temps d arrêt et les impressions ratées.' },
  { name: 'Lire les indicateurs de rentabilité', text: 'Comparez les revenus mensuels aux coûts, puis utilisez les mois de retour et le ROI annualisé pour évaluer la viabilité de l investissement.' },
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
    'Calculateur de ROI de ferme d impression 3D',
    'Simulateur de retour sur investissement en impression 3D',
    'Calculateur de rentabilité de ferme d impression',
    'Ajustement d occupation et d impressions ratées',
    'Modèle de coût d exploitation multidevise',
  ],
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Données de ROI de la ferme d impression',
    resultsAriaLabel: 'Résultats de ROI de la ferme d impression',
    currencyLabel: 'Devise',
    currencyOptions,
    printerCountLabel: 'Nombre d imprimantes',
    initialInvestmentLabel: 'Investissement initial',
    fixedMonthlyCostLabel: 'Coût mensuel fixe',
    electricityMonthlyCostLabel: 'Coût mensuel d électricité',
    hourlyRateLabel: 'Tarif de vente horaire',
    occupancyLabel: 'Taux d occupation moyen',
    successRateLabel: 'Taux de réussite',
    variableCostLabel: 'Coût variable par heure',
    averageHoursPerPartLabel: 'Heures moyennes par pièce',
    paybackLabel: 'Période de retour',
    netProfitLabel: 'Bénéfice net mensuel',
    annualRoiLabel: 'ROI annualisé',
    productiveHoursLabel: 'Heures productives réelles',
    revenueLabel: 'Revenus',
    costsLabel: 'Coûts',
    fixedCostShortLabel: 'Fixe',
    electricityShortLabel: 'Électricité',
    variableCostShortLabel: 'Variable',
    marginLabel: 'Marge nette',
    breakEvenPartsLabel: 'Pièces pour l équilibre',
    breakEvenHoursLabel: 'Horas para el punto de equilibrio',
    stressScenarioLabel: 'Pire scénario possible',
    exportSummaryLabel: 'Télécharger le résumé',
    chartLabel: 'Revenus mensuels par rapport aux coûts d exploitation',
    monthsUnit: 'mois',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'Non viable',
    positiveInsight: 'Le bénéfice mensuel est positif après prise en compte de l occupation, du taux de réussite et des coûts d exploitation.',
    negativeInsight: 'Les coûts d exploitation dépassent les revenus ajustés; améliorez l occupation, les prix ou le taux d échec avant de passer à l échelle.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'pièces/mois',
    reportFilename: 'resume-roi-ferme-impression.csv',
    reportTitle: 'Rapport de Viabilité du ROI de la Ferme d Impression 3D',
    reportCurrencyLabel: 'Devise',
  },
  seo: [
    { type: 'title', text: 'Comment fonctionne ce calculateur de ROI de ferme d impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calculateur de ROI de ferme d\'impression 3D</strong> doit répondre à une question d\'investissement spécifique: un groupe d\'imprimantes récupérera-t-il son coût d\'installation assez rapidement pour justifier le capital, l\'espace, la maintenance et le risque opérationnel? Ce simulateur modélise cette question à partir de la capacité mensuelle des machines. Chaque imprimante contribue à hauteur de 720 heures brutes dans un mois standard de 30 jours, puis le modèle réduit ces heures en fonction de l\'occupation et du taux de réussite d\'impression. Le résultat n\'est pas la capacité théorique; c\'est le temps de production facturable qui survit aux périodes d\'inactivité, aux files d\'attente, aux impressions ratées, aux réimpressions, à l\'étalonnage et aux temps d\'arrêt pratiques.',
    },
    {
      type: 'paragraph',
      html: 'La chaîne de calcul est volontairement transparente. Les heures mensuelles brutes sont égales à <code>imprimantes x 720</code>. Les heures productives réelles sont égales aux heures brutes multipliées par l\'occupation moyenne et le taux de réussite. Le revenu mensuel est égal aux heures productives multipliées par le tarif horaire facturé au client. Les coûts d\'exploitation combinent les frais généraux mensuels fixes, l\'électricité et les coûts horaires variables. Le bénéfice net mensuel est le revenu moins ces coûts d\'exploitation. La période de retour divise l\'investissement initial par le bénéfice net mensuel, tandis que le ROI annualisé compare douze mois de bénéfice net à l\'investissement initial.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Capacité brute mensuelle par imprimante', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Ajustement d occupation et de réussite', icon: 'mdi:percent-outline' },
        { value: 'Revenus - coûts', label: 'Bénéfice net mensuel', icon: 'mdi:finance' },
        { value: 'Investissement / bénéfice', label: 'Période de retour', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez des hypothèses conservatrices pour vos décisions d investissement',
      html: '<p>Pour un premier passage, saisissez l\'occupation que vous pouvez défendre avec la demande actuelle, et non celle que vous espérez atteindre après avoir amélioré votre marketing. Une ferme qui ne fonctionne qu\'avec une occupation optimiste n\'est pas encore un investissement solide.</p>',
    },
    { type: 'title', text: 'Pourquoi l occupation modifie la rentabilité d une ferme d impression', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'occupation est le pourcentage de temps machine disponible qui est réellement utilisé pour imprimer des travaux payés ou vendables. C\'est le levier le plus puissant dans de nombreux modèles de petites fermes car l\'investissement initial est fixe. Une imprimante achetée pour la production coûte la même chose qu\'elle soit réservée huit heures par jour ou vingt heures par jour. Une occupation plus élevée répartit le loyer, l\'installation, le stock de pièces de rechange, les logiciels et l\'amortissement des machines sur un plus grand nombre d\'heures facturables.',
    },
    {
      type: 'paragraph',
      html: 'Le calculateur traite l\'occupation comme un multiplicateur direct de la capacité brute. Dix imprimantes génèrent 7200 heures de machine brutes par mois. À 40% d\'occupation, seules 2880 heures entrent dans le modèle de revenus avant l\'ajustement du taux de réussite. À 75% d\'occupation, 5400 heures entrent dans le modèle. La différence peut décider si le retour sur investissement prend des mois, des ans ou ne se produit jamais.',
    },
    {
      type: 'table',
      headers: ['Niveau d occupation', 'Signification opérationnelle', 'Implication sur le ROI'],
      rows: [
        ['Moins de 30%', 'Les machines passent la majeure partie du mois à attendre des commandes, des fichiers, des opérateurs ou de la maintenance.', 'L investissement initial est difficile à récupérer à moins que le prix horaire ne soit élevé.'],
        ['30-55%', 'Plage initiale courante pour les fermes avec une demande mixte et une manipulation manuelle.', 'La rentabilité dépend fortement des frais généraux fixes et du taux d échec.'],
        ['55-75%', 'Niveau de réservation sain avec de la place pour les travaux urgents, la maintenance et les changements d installation.', 'Souvent la première plage où le retour sur investissement devient réaliste.'],
        ['Plus de 75%', 'Forte occupation qui nécessite une planification fiable, un flux de matières et une maintenance préventive.', 'Fort potentiel de ROI mais peu de tolérance aux pannes ou aux goulots d étranglement des opérateurs.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Une occupation élevée n équivaut pas à un bénéfice élevé',
      badge: 'Risque de prix',
      html: '<p>Une ferme peut être très active et perdre de l\'argent si le tarif horaire est trop bas, si les réimpressions sont fréquentes, si le gaspillage de matière est élevé ou si les frais généraux fixes ont été sous-estimés. Comparez toujours l\'occupation à la marge nette, pas seulement au revenu.</p>',
    },
    { type: 'title', text: 'Prendre en compte les impressions ratées et les réimpressions', level: 2 },
    {
      type: 'paragraph',
      html: 'Le taux de réussite saisi est ce qui distingue ce simulateur de retour d\'investissement d\'un simple calculateur de capacité. Les impressions ratées consomment le même temps calendaire que les impressions réussies mais ne génèrent pas la même production vendable. Elles peuvent également consommer du filament, de la résine, des plateaux d\'impression, des buses, de l\'électricité, de l\'la main-d\'œuvre et nuire à la réputation de l\'entreprise. Une ferme avec un taux de réussite de 90% perd un bloc de production potentiel sur dix avant que les revenus ne soient comptabilisés.',
    },
    {
      type: 'paragraph',
      html: 'Le taux de réussite doit être mesuré sur des travaux comparables. Une ferme imprimant des gabarits en PLA répétitifs peut maintenir un taux de réussite très élevé après réglage du processus. Une ferme produisant des modèles uniques pour les clients, des pièces hautes, des polymères techniques, des miniatures en résine ou des travaux multi-matériaux peut nécessiter une hypothèse plus basse. Si vous mélangez des travaux simples et risqués, lancez le calculateur deux fois: une fois pour la production standard et une fois pour les travaux personnalisés.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Production répétitive',
          description: 'Géométrie des pièces connue, profils réglés, matériaux prévisibles et demande stable.',
          icon: 'mdi:repeat',
          points: ['Hypothèse de réussite élevée', 'Moins d incertitude d installation', 'Meilleure confiance dans le retour'],
        },
        {
          title: 'Service d impression personnalisé',
          description: 'Les fichiers varient selon le client, la géométrie, la stratégie de support et les attentes de qualité.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Hypothèse de réussite modérée', 'Plus de variance dans les devis', 'Nécessite une marge de réimpression'],
        },
        {
          title: 'Matériaux expérimentaux',
          description: 'Polymères techniques, matériaux flexibles, filaments chargés et réglage du processus de résine.',
          icon: 'mdi:flask-outline',
          points: ['Hypothèse de réussite faible', 'Usure plus élevée des consommables', 'Utilisez des données de ROI prudentes'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Le taux d échec a sa place dans le modèle financier',
      ariaLabel: 'Note sur la comptabilisation des échecs',
      html: '<p>Ne cachez pas les réimpressions dans des frais généraux vagues. Un taux de réussite visible permet de challenger, d\'améliorer et d\'expliquer plus facilement le dossier d\'investissement.</p>',
    },
    { type: 'title', text: 'Bâtir un modèle de coûts mensuels fiable', level: 2 },
    {
      type: 'paragraph',
      html: 'Les coûts d\'exploitation comportent trois niveaux dans cet outil. Les frais mensuels fixes couvrent les dépenses qui existent même lorsque les imprimantes sont inactives: loyer, internet, assurances, logiciels, comptabilité, stockage, couverture de main-d\'œuvre de base et autres frais généraux. Le coût mensuel de l\'électricité capte l\'énergie utilisée par les imprimantes et les équipements de production directement liés. Le coût variable par heure couvre les coûts qui varient proportionnellement au temps de machine productif, tels que le filament, la résine, les buses, les tubes en PTFE, l\'usure de la surface d\'impression, les filtres, le lubrifiant, les pièces de maintenance et les consommables de nettoyage.',
    },
    {
      type: 'paragraph',
      html: 'Conserver l\'électricité comme entrée mensuelle distincte est utile pour les fermes car la consommation d\'énergie est souvent suivie à partir des factures ou d\'un sous-comptage plutôt que calculée impression par impression. Une ferme avec des plateaux chauffants produisant du PETG, de l\'ASA, de l\'ABS ou du nylon peut avoir un profil énergétique très différent d\'une ferme PLA dans la même pièce. Si vous calculez déjà l\'électricité par heure de machine, vous pouvez inclure ce chiffre dans le coût variable par heure et définir le champ d\'électricité mensuel sur zéro.',
    },
    {
      type: 'table',
      headers: ['Entrée de coût', 'Inclure', 'Éviter'],
      rows: [
        ['Coût mensuel fixe', 'Loyer, assurances, internet, logiciels, personnel de base, stockage.', 'Matière utilisée uniquement lorsque les imprimantes fonctionnent.'],
        ['Coût mensuel d électricité', 'Énergie des imprimantes, séchoirs, stations de lavage, polymérisation, ventilation, climatisation.', 'Électricité de bureau ou domestique non liée.'],
        ['Coût variable par heure', 'Filament, résine, buses, consommables de maintenance, allocation d usure horaire.', 'Coût d achat unique de la machine.'],
        ['Investissement initial', 'Imprimantes, racks, installation, outils, séchoirs, matériel de gestion de ferme.', 'Coûts mensuels récurrents après le lancement.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Heures mensuelles brutes', definition: 'Capacité machine théorique avant les ajustements d occupation et d impressions ratées.' },
        { term: 'Heures productives réelles', definition: 'Capacité restante après application du taux d occupation et de réussite.' },
        { term: 'Période de retour', definition: 'Mois nécessaires pour que le bénéfice net mensuel récupère l investissement initial.' },
        { term: 'ROI annualisé', definition: 'Douze mois de bénéfice net divisés par l investissement initial.' },
        { term: 'Coût variable par heure', definition: 'Consommables et maintenance proportionnels au temps d impression productif.' },
      ],
    },
    { type: 'title', text: 'Définir le tarif de vente par heure de machine', level: 2 },
    {
      type: 'paragraph',
      html: 'Le tarif de vente par heure est le montant facturé au client pour une heure de machine productive. Il peut être indiqué directement sur les devis ou intégré dans une formule de prix qui comprend également la matière, la main-d\'œuvre, la finition, l\'emballage et la marge. La clé est la cohérence: si le tarif horaire est censé inclure la matière, n\'ajoutez pas également cette même matière en tant que coût variable par heure. Si le tarif horaire ne représente que le temps machine, assurez-vous que la matière et la main-d\'œuvre sont représentées ailleurs dans le modèle économique.',
    },
    {
      type: 'paragraph',
      html: 'Un tarif qui semble compétitif sur des travaux uniques peut échouer à l\'échelle d\'une ferme. Les impressions longues occupent une capacité qui aurait pu servir à d\'autres travaux. Les hauteurs de couche fines, les matériaux lents, les pièces hautes et les géométries nécessitant beaucoup de supports réduisent le débit. Un <strong>calculateur de rentabilité de ferme d\'impression</strong> doit donc être utilisé conjointement avec des données de devis réelles: durée moyenne des travaux, équivalent horaire payé moyen, taux d\'acceptation des clients et volume mensuel de commandes.',
    },
    {
      type: 'proscons',
      title: 'Tarification horaire dans une ferme d impression',
      items: [
        { pro: 'Rend l occupation des machines visible et évite de sous-évaluer les impressions longues.', con: 'Les clients peuvent avoir besoin d explications lorsqu une pièce légère prend plusieurs heures.' },
        { pro: 'Fonctionne bien pour la planification interne du ROI et les décisions de capacité.', con: 'Ne remplace pas la tarification des matières, de la main-d œuvre, de la finition et du risque.' },
        { pro: 'Permet une comparaison rapide entre types d imprimantes et scénarios d occupation.', con: 'Peut être trompeur si le taux d échec et le temps d attente sont ignorés.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Point de contrôle des prix',
      html: '<p>Si une petite modification du tarif horaire change complètement le retour sur investissement, l\'investissement est sensible aux prix du marché. Validez le tarif par rapport à la demande réelle des clients avant d\'acheter de nouvelles imprimantes.</p>',
    },
    { type: 'title', text: 'Interpreter la période de retour et le ROI annualisé', level: 2 },
    {
      type: 'paragraph',
      html: 'La période de retour est facile à comprendre car elle est exprimée en mois. Si l\'investissement initial est de 18000 et le bénéfice net mensuel est de 3000, le retour est de six mois. Si le bénéfice net mensuel est nul ou négatif, la période de retour n\'est pas viable car la ferme ne récupère jamais l\'investissement sous les hypothèses actuelles. Le retour est utile pour la planification de la trésorerie, le financement des équipements et pour décider si l\'expansion doit se faire maintenant ou après l\'amélioration de la demande.',
    },
    {
      type: 'paragraph',
      html: 'Le ROI annualisé est plus strict car il compare une année de bénéfice net à l\'investissement initial. Une ferme peut avoir un bénéfice mensuel positif mais afficher un ROI annualisé faible si le retour sur investissement est lent. Par exemple, une ferme qui gagne 1000 par mois après coûts sur un investissement de 24000 produit 12000 par an avant de considérer l\'investissement initial, de sorte que le ROI de la première année reste négatif. Cela ne signifie pas automatiquement que l\'affaire est mauvaise, mais cela signifie que l\'investisseur a besoin d\'un horizon plus long.',
    },
    {
      type: 'summary',
      title: 'Règles de décision',
      items: [
        'Utilisez la période de retour pour comprendre la vitesse de récupération de la trésorerie.',
        'Utilisez le ROI annualisé pour comparer la ferme à d autres utilisations du capital.',
        'Relancez le modèle avec un taux d occupation et de réussite inférieur avant de vous engager dans une expansion.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Le test de scénarios est la vraie valeur',
      badge: 'Planung',
      html: '<p>Lancez un cas de base, un cas conservateur et un cas stressé. Le meilleur investissement n\'est pas celui qui a l\'air excellent uniquement dans le scénario optimiste; c\'est celui qui reste compréhensible lorsque la demande, les échecs ou les coûts d\'électricité tournent en votre défaveur.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
