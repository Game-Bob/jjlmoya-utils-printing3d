import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = 'calculateur-cout-impression-3d';
const title = 'Calculateur de Coût d\'Impression 3D : Filament et Énergie';
const description = 'Calculez le prix réel de vos impressions 3D. Comprend le coût des matériaux, l\'électricité, l\'amortissement de la machine et la main-d\'œuvre.';

const faqData = [
  {
    question: 'Pourquoi le coût de l\'électricité varie-t-il autant ?',
    answer: 'La consommation la plus élevée vient du maintien du plateau chaud. Les matériaux comme l\'ABS (100°C) consomment beaucoup plus que le PLA (60°C). Le fait que l\'imprimante soit ouverte ou fermée influence également.',
  },
  {
    question: 'Comment savoir combien de watts mon imprimante consomme ?',
    answer: 'La plupart des imprimantes domestiques consomment en moyenne 100-150W pendant le fonctionnement. Vous pouvez le mesurer avec précision à l\'aide d\'une prise intelligente ou d\'un wattmètre.',
  },
  {
    question: 'Qu\'est-ce que la marge de perte ?',
    answer: 'C\'est le filament qui ne fait pas partie de la pièce finale : supports, radeau (raft), jupe (skirt) et purge initiale. Nous recommandons un minimum de 5 % pour être réaliste.',
  },
];

const howToData = [
  {
    name: 'Saisissez les données techniques',
    text: 'Inscrivez le poids de la pièce (donné par le logiciel de tranchage comme Cura), le temps d\'impression et la consommation de votre machine.',
  },
  {
    name: 'Configurez les coûts économiques',
    text: 'Ajustez le prix de votre bobine, votre tarif d\'électricité et la valeur de votre heure de main-d\'œuvre manuelle.',
  },
  {
    name: 'Analysez le bénéfice',
    text: 'Déplacez le curseur de marge pour voir le prix de vente suggéré et consultez le graphique circulaire pour voir où va l\'argent.',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Matériau',
    partWeightLabel: 'Poids de la pièce (net)',
    gramsUnit: 'grammes',
    spoolPriceLabel: 'Prix de la bobine (1kg)',
    spoolPriceUnit: '€/kg',
    wasteMarginLabel: 'Marge de perte : ',
    energyTitle: 'Énergie et Temps',
    printTimeLabel: 'Temps d\'impression',
    hoursUnit: 'heures',
    averagePowerLabel: 'Consommation moyenne',
    wattsUnit: 'watts',
    electricityRateLabel: 'Tarif électrique',
    kwhPriceUnit: '€/kWh',
    amortizationTitle: 'Amortissement et Main-d\'œuvre',
    machineCostHourLabel: 'Coût machine par heure',
    priceHourUnit: '€/h',
    laborCostHourLabel: 'Main-d\'œuvre (manuelle)',
    minutesUnit: 'minutes',
    manufacturingCostLabel: 'Coût de Fabrication',
    suggestedPriceLabel: 'Prix Suggéré (+{margin}%)',
    costBreakdownTitle: 'Répartition des Coûts',
    plasticLabel: 'Plastique',
    electricityLabel: 'Électricité',
    machineLabel: 'Machine',
    laborLabel: 'Main-d\'œuvre',
    proTip: 'Saviez-vous que chauffer le plateau à 100°C pour l\'ABS peut doubler le coût électrique par rapport au PLA ? N\'oubliez pas de compter les échecs : si 10 % de vos pièces échouent, votre coût réel est 10 % plus élevé.',
  },
  seo: [
    {
      type: 'title',
      text: 'Calcul du Coût Réel de l\'Impression 3D : Au-delà du Filament',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Lorsque nous commençons dans le monde de la fabrication additive, il est courant de penser que le seul coût est celui du plastique qui sort de la buse. Cependant, si vous voulez en faire une entreprise ou simplement mieux gérer votre passe-temps, vous devez comprendre que la <strong>rentabilité</strong> réside dans les détails qui ne sont pas visibles au premier coup d\'œil.',
    },
    {
      type: 'title',
      text: 'Les 4 Piliers du Coût en Impression 3D',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Notre calculateur répartit le prix final en quatre domaines fondamentaux :',
    },
    {
      type: 'summary',
      items: [
        'Matériel et Perte : Comprend le poids de la pièce, mais aussi le plastique utilisé dans les supports, les jupes et les purges. Nous recommandons toujours d\'ajouter une marge de 5 à 10 % pour les échecs d\'impression possibles.',
        'Consommation Électrique : Une imprimante 3D ne dépense pas la même chose en imprimant du PLA (plateau à 60°C) que de l\'ABS ou du Nylon (plateau à 100°C+). Le prix du kWh peut faire la différence sur les pièces longues.',
        'Amortissement de la Machine : Chaque heure où l\'imprimante fonctionne, ses composants (courroies, ventilateurs, buses) s\'usent. Inclure un petit coût horaire vous permettra de payer les futures réparations.',
        'Main-d\'œuvre : Votre temps est le plus précieux. La préparation du fichier, le nettoyage du plateau et le post-traitement de la pièce doivent être pris en compte.',
      ],
    },
    {
      type: 'title',
      text: 'Comment calculer l\'amortissement ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un moyen simple est de diviser le prix d\'achat de votre imprimante par sa durée de vie utile estimée en heures. Par exemple, si une imprimante coûte 400 € et que vous espérez qu\'elle fonctionne au moins 2000 heures avant une rénovation majeure, son coût d\'amortissement est de <strong>0,20 € par heure</strong>.',
    },
    {
      type: 'tip',
      title: 'Économisez sur l\'Électricité',
      html: '<p>Si vous imprimez beaucoup, envisagez de fermer votre imprimante avec un caisson (enclosure). Cela aide non seulement à imprimer des matériaux techniques, mais retient également la chaleur et fait que le plateau chauffant consomme beaucoup moins d\'énergie pour maintenir la température.</p>',
    },
    {
      type: 'title',
      text: 'Stratégies de Prix de Vente',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une fois que vous connaissez votre coût de base, vous devez décider de votre marge. Dans le monde de l\'impression 3D à la demande, une marge de 50 à 100 % sur le coût total est courante pour couvrir le risque d\'échecs inattendus et le profit commercial. Si la pièce nécessite beaucoup de travail manuel de ponçage et de peinture, cette marge doit être plus élevée.',
    },
    {
      type: 'summary',
      items: [
        'Tarification au temps : Idéal pour les services d\'impression purs.',
        'Tarification au gramme : Commun pour les pièces massives mais simples.',
        'Tarification à la valeur : Si le design est unique, le prix ne doit pas être basé uniquement sur le coût, mais sur ce que le client est prêt à payer.',
      ],
    },
  ],
  faqTitle: 'Foire Aux Questions sur les Coûts 3D',
  faq: faqData,
  bibliographyTitle: 'Bibliographie et Ressources',
  bibliography: [
    {
      name: 'PrusaPrinters : Calcul des coûts d\'impression 3D',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D : Material and Cost Estimation',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs : Guide des coûts de fabrication additive',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
