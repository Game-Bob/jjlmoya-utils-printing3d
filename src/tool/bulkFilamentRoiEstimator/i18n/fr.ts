import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'calculateur-roi-filament-vrac';
const title = 'Calculateur ROI Filament Vrac';
const description = "Comparez les bobines de filament 1kg avec les bobines vrac de 3kg, 5kg ou sur mesure, en tenant compte du risque d'humidité, des économies réelles et du format de devise locale.";

const faqData = [
  {
    question: "Une bobine de filament 5kg est-elle toujours moins chère que cinq bobines 1kg ?",
    answer: "Non. Elle n'est moins chère que si le coût au gramme est inférieur et que vous pouvez consommer le matériau avant que l'exposition à l'humidité ne dégrade la qualité d'impression. Une consommation lente peut transformer une remise de vrac en déchet.",
  },
  {
    question: "Pourquoi le calculateur soustrait-il une pénalité de risque ?",
    answer: "La pénalité estime la perte de valeur lorsque le temps de consommation prévu dépasse votre fenêtre de stockage sûr. Il ne s'agit pas d'une conversion de taux de change ni d'un modèle d'humidité en laboratoire ; c'est un ajustement de risque pour la planification.",
  },
  {
    question: "Ai-je besoin de taux de change en direct ?",
    answer: "Non. L'outil utilise un tableau de taux de change approximatifs locaux pour convertir les prix affichés lorsque vous changez de devise. Il préserve l'équivalence sans contacter un serveur, donc les décisions d'achat finales doivent toujours utiliser le prix affiché par votre boutique ou votre banque.",
  },
  {
    question: "Quelle durée de stockage sûr dois-je saisir pour le PLA, le PETG, le TPU ou le Nylon ?",
    answer: "Utilisez la période pendant laquelle vous pouvez garder ce matériau spécifique au sec dans votre environnement. Le PLA peut tolérer un stockage plus long que le Nylon ou le TPU, mais une pièce ouverte, un climat humide ou un mauvais joint de sac peuvent réduire considérablement la fenêtre de sécurité.",
  },
];

const howToData = [
  {
    name: "Saisir le prix de la bobine standard",
    text: "Saisissez le prix de la bobine 1kg que vous achetez habituellement. Le poids de la bobine standard peut être ajusté si votre fournisseur utilise un autre format.",
  },
  {
    name: "Saisir l'offre en vrac",
    text: "Choisissez 3kg, 5kg ou un poids personnalisé et saisissez le prix total de cette bobine plus grande dans la même devise.",
  },
  {
    name: "Modéliser le risque de stockage",
    text: "Ajoutez votre consommation mensuelle et la durée de stockage maximale que vous estimez sûre avant que l'humidité, la fragilité ou l'effort de séchage ne deviennent un coût réel.",
  },
  {
    name: "Lire l'économie réelle",
    text: "Utilisez le chiffre des économies réelles comme signal d'achat car il inclut à la fois la remise de vrac et la pénalité de dégradation.",
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Devise',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    standardTitle: 'Bobine standard',
    bulkTitle: 'Bobine vrac',
    consumptionTitle: 'Consommation et stockage',
    standardWeightLabel: 'Poids standard',
    standardPriceLabel: 'Prix de la bobine standard',
    bulkWeightLabel: 'Poids vrac',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6,6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Autre',
    bulkPriceLabel: 'Prix de la bobine vrac',
    customWeightLabel: 'Poids vrac personnalisé',
    monthlyUseLabel: 'Consommation mensuelle',
    safeStorageLabel: 'Fenêtre de stockage sûr',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'mois',
    realSavingsLabel: 'Économies réelles après risque',
    grossSavingsLabel: 'Économie brute',
    riskPenaltyLabel: 'Pénalité risque humidité',
    breakEvenLabel: 'Temps de consommation',
    viabilityLabel: 'Viabilité',
    tableMetricLabel: 'Métrique',
    tableStandardLabel: 'Bobine 1kg',
    tableStandardImperialLabel: 'Bobine 2,2lb',
    tableBulkLabel: 'Bobine vrac',
    costPerGramMetric: 'Coût au gramme',
    costPerOunceMetric: "Coût à l'once",
    totalSpoolMetric: 'Prix de la bobine',
    usableWindowMetric: 'Fenêtre de consommation',
    profitableLabel: 'Rentable',
    neutralLabel: 'Neutre',
    poorLabel: 'Mauvais rapport',
    humidityWarningTitle: "Risque de dégradation par l'humidité",
    humidityWarning: "Risque de dégradation: l'achat de cette bobine peut faire perdre de l'argent si vous ne possédez pas de système de séchage ou de stockage étanche.",
    safeMessage: "Le risque de stockage se situe dans votre fenêtre de stockage sûr. Gardez la bobine scellée et au sec pour préserver l'économie attendue.",
  },
  seo: [
    {
      type: 'title',
      text: 'Comment savoir si le filament en vrac est vraiment moins cher',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Une bobine de filament de 3kg ou 5kg semble attractive car le prix au kilo affiché est généralement inférieur à celui d'une bobine 1kg. L'erreur est de ne comparer que le total en caisse. Une comparaison correcte normalise les deux offres en <strong>coût au gramme</strong>, multiplie la différence par la quantité de matériau que vous achèterez réellement, puis détermine si le matériau restera imprimable jusqu'à ce que vous le terminiez.",
    },
    {
      type: 'paragraph',
      html: "La formule de base est simple: divisez chaque prix de bobine par son poids en grammes. Si une bobine 1kg coûte 24,99 et une bobine 5kg coûte 89,99, la bobine 1kg coûte 0,02499 par gramme et la bobine vrac coûte 0,017998 par gramme. L'économie apparente est la différence au gramme multipliée par 5000 grammes. Ce chiffre est utile, mais il reste incomplet si la bobine reste ouverte pendant des mois.",
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: "Masse de référence d'une bobine de filament de bureau courante" },
        { value: '3-5kg', label: 'Format vrac typique où les remises deviennent visibles' },
        { value: '0 API', label: "L'équivalence de devise utilise des taux approximatifs locaux au lieu d'un appel serveur en direct" },
      ],
    },
    {
      type: 'table',
      headers: ['Question', 'Que saisir', 'Pourquoi c\'est important'],
      rows: [
        ["Quel est mon achat habituel ?", 'Le prix de la bobine 1kg', 'Cela établit le coût de référence au gramme.'],
        ["Quelle est l'offre en vrac ?", 'Le prix total et le poids du lot', 'Cela crée le coût au gramme réduit.'],
        ['À quelle vitesse imprimez-vous ?', 'Kg consommés par mois', 'Cela estime la durée de stockage de la bobine.'],
        ['Quel est votre niveau de stockage ?', 'Mois de sécurité avant dégradation', 'Cela définit le moment où la pénalité de risque commence.'],
      ],
    },
    {
      type: 'title',
      text: "Pourquoi l'humidité modifie le calcul du ROI",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le filament n'est pas un équivalent de trésor posé en sécurité sur une étagère. De nombreux polymères absorbent l'humidité de l'air, et un filament humide peut imprimer avec des bulles, du filage, une extrusion cassante, des surfaces troubles, une mauvaise adhésion des couches et un flux irrégulier. La vitesse exacte dépend du matériau, de l'humidité, de l'emballage et du fait que la bobine soit stockée dans une boîte sèche, un sac scellé ou un support ouvert.",
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: "Le mode de défaillance caché de la bobine vrac",
      badge: 'Risque de planification',
      html: "Une bobine de 5kg peut être un mauvais achat même lorsque le prix au gramme est excellent. Si votre imprimante consomme 0,5kg par mois et que votre fenêtre de stockage sûr est de 3 mois, cette bobine nécessite environ 10 mois pour être terminée. La remise doit être suffisamment importante pour couvrir le coût du séchage, du scellement, des échecs d'impression ou du risque de rebut.",
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Utilisateur rapide',
          description: "Une petite ferme d'impression, un créateur de cosplay ou un lot de production peut consommer 3kg à 5kg rapidement. Le filament en vrac est généralement rentable car le temps de stockage est court.",
          points: ['Utilisation mensuelle élevée', 'Faible exposition au stockage', 'La remise devient de l\'argent économisé'],
        },
        {
          title: 'Utilisateur amateur intermittent',
          description: "Un utilisateur qui imprime le week-end ou pour des réparations occasionnelles peut mettre plusieurs mois à terminer une grosse bobine. Le risque d'humidité peut effacer la remise.",
          points: ['Faible utilisation mensuelle', 'Longue durée de vie ouverte', 'Un stockage sec est plus important'],
        },
        {
          title: 'Utilisateur de matériaux techniques',
          description: "Des matériaux comme le Nylon, le TPU, les mélanges PC et certains grades de PETG nécessitent souvent une discipline de séchage plus stricte. Les achats en vrac doivent être accompagnés d'équipements de stockage.",
          points: ['Sensibilité à l\'humidité plus élevée', 'Boîte sèche recommandée', 'Le seuil de pénalité doit être conservateur'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Ce que signifie le chiffre des économies réelles',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'outil affiche d'abord l'économie brute, puis soustrait une pénalité de dégradation lorsque le temps de consommation estimé dépasse la fenêtre de stockage sûr. Cette pénalité est délibérément conservatrice plutôt qu'une prédiction de laboratoire. Elle représente la réalité économique selon laquelle un filament humide ou trop âgé crée souvent des coûts non évidents: électricité de séchage, manipulation supplémentaire, échecs d'impression, buses obstruées, défauts de surface et la possibilité qu'une partie de la bobine devienne inadaptée aux travaux visibles ou structurels.",
    },
    {
      type: 'list',
      items: [
        "Des économies réelles positives signifient que la remise de vrac résiste à l'ajustement du risque de stockage.",
        'Neutre signifie que la décision dépend de la commodité, de la disponibilité des couleurs, de l\'expédition et du fait que vous possédez déjà une boîte sèche.',
        "Une mauvaise valeur signifie que la bobine vrac n'est pas moins chère au gramme ou que l'économie ajustée au risque est négative.",
        "Le message d'avertissement apparaît lorsque les mois de consommation sont supérieurs à la fenêtre de stockage sûr que vous avez saisie.",
      ],
    },
    {
      type: 'proscons',
      title: 'Compromis de l\'achat de filament en vrac',
      items: [
        { pro: 'Coût au gramme plus faible pour l\'impression en grand volume.', con: "Plus de capital immobilisé dans un seul matériau, couleur et lot de fournisseur." },
        { pro: "Moins de changements de bobine lors des longues séries de production.", con: "Une masse exposée plus grande peut se dégrader avant d'être consommée." },
        { pro: "Moins de déchets d'emballage par kilogramme.", con: "Les grosses bobines peuvent nécessiter des supports plus solides ou des supports externes." },
        { pro: "Utile pour les travaux répétitifs en ferme et la production par lots.", con: "Mauvais choix pour les couleurs rares, les matériaux expérimentaux ou une utilisation lente en loisir." },
      ],
    },
    {
      type: 'title',
      text: 'Comment choisir une fenêtre de stockage sûr',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La fenêtre de stockage sûr n'est pas une constante universelle du matériau. C'est le temps pendant lequel vous estimez personnellement que le filament restera imprimable dans vos conditions de stockage. Un sac scellé avec déshydratant frais dans une pièce sèche est très différent d'une bobine ouverte à côté d'une imprimante dans un garage humide. Pour une décision d'achat conservatrice, saisissez le nombre de mois après lequel vous commenceriez à sécher la bobine avant des impressions importantes.",
    },
    {
      type: 'table',
      headers: ['Situation', 'Comportement de planification suggéré', 'Raison'],
      rows: [
        ['Support ouvert dans une pièce humide', 'Utilisez une fenêtre courte', "L'exposition à l'humidité est continue."],
        ['Boîte étanche avec déshydratant', 'Utilisez une fenêtre plus longue', 'La bobine est protégée entre les impressions.'],
        ['Boîte sèche alimentant l\'imprimante', 'Utilisez une fenêtre longue mais réaliste', 'L\'impression et le stockage sont tous deux contrôlés.'],
        ['Nylon, TPU, PC ou support soluble', 'Soyez conservateur', 'Ces matériaux peuvent devenir problématiques rapidement lorsqu\'ils sont humides.'],
        ['PLA utilisé pour des prototypes approximatifs', 'La tolérance au risque peut être plus élevée', 'Les défauts esthétiques mineurs peuvent être acceptables pour des pièces non critiques.'],
      ],
    },
    {
      type: 'tip',
      title: "Utilisez le calculateur avant la fin de la promotion",
      html: "Les offres éclair rendent souvent les bobines vrac urgentes. Saisissez le prix promo, le prix incluant l'expédition si possible, et votre consommation mensuelle réaliste. Si le temps de consommation dépasse votre fenêtre de stockage, la promotion doit être suffisamment intéressante pour compenser le risque ajouté.",
    },
    {
      type: 'title',
      text: 'Conversion de devise sans API de taux de change',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Cet estimateur est conçu pour fonctionner côté client. Il ne récupère pas les taux de change en direct, mais le sélecteur de devise applique tout de même un multiplicateur de conversion local lorsque l'utilisateur change de devise. Cela signifie qu'une bobine saisie à 24,99 EUR devient un équivalent approximatif en USD, GBP, JPY ou une autre devise prise en charge au lieu de simplement remplacer le symbole. Les taux sont des estimations de planification, donc les prix en caisse, les frais de carte, les taxes et les écarts de conversion propres à chaque place de marché doivent toujours être vérifiés avant l'achat.",
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coût au gramme', definition: "Le prix de la bobine divisé par le nombre total de grammes de filament. C'est l'unité normalisée utilisée pour une comparaison équitable." },
        { term: 'Économie brute', definition: "L'avantage de prix avant la prise en compte du risque d'humidité ou de stockage." },
        { term: 'Pénalité de risque', definition: "Une déduction de planification appliquée lorsque la bobine prend plus de temps à consommer que la fenêtre de stockage sûr." },
        { term: 'Économie réelle', definition: "L'économie brute moins la pénalité de risque. C'est le principal signal d'achat." },
        { term: 'Fenêtre de consommation', definition: 'Le poids de la bobine vrac divisé par la consommation mensuelle estimée.' },
      ],
    },
    {
      type: 'summary',
      title: 'Règle pratique d\'achat',
      items: [
        "Achetez en vrac lorsque l'économie réelle est clairement positive et que la fenêtre de consommation correspond à votre configuration de stockage.",
        'Évitez le vrac lorsque vous achetez une couleur rare qui restera inutilisée après un projet.',
        "Traitez l'équipement de séchage comme faisant partie du système de filament en vrac, et non comme un luxe facultatif pour les polymères sensibles à l'humidité.",
        "Comparez les prix livrés, et pas seulement les prix sur la page produit, lorsque l'expédition diffère entre les tailles de bobines.",
      ],
    },
    {
      type: 'message',
      title: 'Résultat final',
      html: "Une bobine vrac est rentable lorsque trois conditions sont réunies: un coût au gramme inférieur, une consommation mensuelle suffisante et un stockage qui maintient le filament imprimable. Si une condition fait défaut, la remise apparente peut se transformer en perte de matériaux déguisée.",
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
