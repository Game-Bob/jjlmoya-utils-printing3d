import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'calculatrice-evidement-drainage-resine-sla';
const title = 'Calculatrice d\'Évidement et de Drainage pour Résine SLA';
const description = 'Calculez l\'épaisseur de paroi conservative, le diamètre du trou de drainage, le nombre minimum d\'évents et les économies de résine ajustées à la complexité pour les impressions creuses en résine SLA et DLP.';

const faqData = [
  { question: 'Pourquoi le calculateur recommande-t-il toujours au moins deux trous de drainage ?', answer: 'Une impression en résine creuse a besoin d\'un chemin pour que la résine liquide sorte et d\'un autre pour que l\'air entre. Deux ouvertures aident également à briser l\'effet de ventouse contre le film de libération.' },
  { question: 'Pourquoi l\'économie de résine est-elle inférieure au volume creux théorique ?', answer: 'La résine liquide reste sur les parois internes, les nervures, les coins, les supports et les petites poches. Le calculateur soustrait 5, 10 ou 15 % du volume creux théorique.' },
  { question: '1,5 mm est-il toujours suffisant comme épaisseur de paroi ?', answer: 'Non. C\'est un minimum de sécurité pour de nombreuses impressions résine de bureau. Les pièces hautes, lourdes, avec des charges techniques ou des environnements chauds peuvent nécessiter des parois plus épaisses.' },
  { question: 'Où placer les trous de drainage ?', answer: 'Placez les trous aussi près que possible du côté du plateau de construction et des points de collecte de résine les plus bas dans l\'orientation d\'impression.' },
];

const howToData = [
  { name: 'Entrez le volume et la hauteur du modèle', text: 'Utilisez le volume du slicer après les supports et l\'orientation, puis entrez la hauteur de la pièce dans l\'orientation d\'impression.' },
  { name: 'Choisissez la complexité géométrique', text: 'Sélectionnez simple, modérée ou élevée pour que la résine piégée soit soustraite de l\'économie creuse théorique.' },
  { name: 'Choisissez le type de résine', text: 'Sélectionnez standard, résistante ou technique. Les résines plus visqueuses reçoivent un diamètre de drainage plus grand.' },
  { name: 'Vérifiez les recommandations', text: 'Utilisez l\'épaisseur de paroi, le diamètre de drainage, le nombre de trous et la liste de contrôle avant de slicer.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

const seoData = [
    {
      type: 'title',
      text: 'Que fait le Calculateur d\'Évidement et de Drainage pour Résine SLA ?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Cet outil résout l\'un des défis les plus critiques de l\'impression 3D résine SLA, DLP et LCD: l\'optimisation des modèles creux. L\'impression de pièces en résine pleines est coûteuse, lourde et augmente les forces de pelage pendant le processus d\'impression. L\'évidement du modèle réduit l\'utilisation de matériau, mais l\'introduction de cavités creuses sans drainage adéquat entraîne un piégeage de résine non polymérisée et des échecs d\'impression dus aux forces de vide. Ce calculateur calcule l\'épaisseur de paroi idéale, suggère le diamètre et la quantité corrects de trous de drainage, et estime les économies réelles de résine en tenant compte de la résine liquide qui reste inévitablement piégée sur les parois internes de la pièce imprimée.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1,5 mm',
            label: 'Épaisseur de paroi minimale recommandée pour le SLA de bureau'
          },
          {
            value: '2 trous',
            label: 'Nombre minimal d\'évents requis pour briser le vide'
          },
          {
            value: '10-15%',
            label: 'Réduction du volume de résine due à la rétention sur les surfaces internes'
          },
          {
            value: '30-70%',
            label: 'Réduction moyenne du poids total obtenue par évidement'
          }
        ]
    },
    {
      type: 'title',
      text: 'Comment l\'épaisseur de paroi affecte les économies de résine',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'L\'épaisseur de paroi is la variable principale qui détermine la quantité de résine économisée. Une paroi plus épaisse augmente la résistance structurelle mais consomme rapidement plus de résine, réduisant l\'efficacité de l\'évidement. Inversement, une paroi trop mince sera fragile, sujette au voilage pendant la polymérisation, et pourrait ne pas résister aux forces de pelage mécaniques lorsque l\'imprimante sépare chaque couche du film FEP. L\'objectif est de trouver le juste milieu où le modèle conserve sa forme et son utilité tout en maximisant les économies de matériau.'
    },
    {
      type: 'proscons',
      title: 'Avantages et inconvenients de l\'évidement des impressions résine',
      items: [
          {
            pro: 'Réduction massive des coûts de matériau et du poids total de l\'impression',
            con: 'Nécessite un post-traitement pour laver et polymériser les cavités internes'
          },
          {
            pro: 'Une surface plus faible par couche réduit les forces de pelage sur le film FEP',
            con: 'Des trous mal placés peuvent ruiner l\'esthétique visuelle du modèle'
          },
          {
            pro: 'Réduit les contraintes thermiques et le voilage pendant la post-polymérisation',
            con: 'Risque de résine liquide piégée provoquant la fissuration ultérieure de la pièce'
          }
        ]
    },
    {
      type: 'title',
      text: 'Comprendre l\'effet de ventouse dans les impressions résine creuses',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Lorsqu\'un modèle creux est imprimé, it forme une chambre close lorsqu\'il plonge dans le bac. Si cette chambre manque de trous de ventilation, chaque cycle de levage crée un vide partiel important (effet de ventouse) entre la couche polymérisée et le film anti-adhésif. Cette force tire sur l\'impression, entraînant une séparation des couches, des lignes de couche, des échecs de support ou même l\'arrachement complet du modèle de la plaque de construction. L\'ajout de trous de ventilation permet à l\'air d\'entrer, neutralisant la différence de pression et assurant des cycles de pelage fluides.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le danger des espaces creux scellés',
      html: 'Ne laissez jamais un espace creux complètement scellé. La résine liquide piégée à l\'intérieur d\'une pièce imprimée dégradera lentement les parois polymérisées au fil du temps, provoquant à terme la fissuration du modèle, des fuites de résine toxique ou sa désintégration complète. Incluez toujours au moins deux trous pour laver l\'intérieur et le polymériser avec une source de lumière UV interne.'
    },
    {
      type: 'title',
      text: 'Bonnes pratiques pour le placement des trous de drainage',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Placez les trous de drainage aussi près que possible de la plaque de construction pour permettre à la résine de s\'échapper tôt pendant l\'impression.',
          'Utilisez toujours au moins deux trous: un pour laisser s\'écouler la résine liquide et un autre pour laisser entrer l\'air.',
          'Orientez les trous sur des surfaces non visibles, comme le dessous des bases ou derrière les joints, pour préserver l\'esthétique.',
          'Assurez-vous que chaque chambre ou poche interne isolée possède son propre ensemble de trous de drainage.'
        ]
    },
    {
      type: 'title',
      text: 'Comment le calculateur s\'ajuste à la complexité géométrique',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Géométrie simple',
            description: 'Modèles peu détaillés, sphères ou blocs. Piège un minimum de résine (environ 5 %) sur les surfaces intérieures planes.'
          },
          {
            title: 'Géométrie modérée',
            description: 'Modèles de personnages ou pièces mécaniques standard. Les supports internes et les courbes retiennent une quantité modérée de résine (environ 10 %).',
            highlight: true
          },
          {
            title: 'Haute complexité',
            description: 'Miniatures très détaillées, structures en treillis ou canaux creux complexes. Retient une quantité importante de résine (environ 15 % et plus) en raison de l\'action capillaire.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Comprendre la viscosité de la résine et le dimensionnement des trous de drainage',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Classe de résine',
          'Niveau de viscosité',
          'Diamètre min. du trou',
          'Placement recommandé'
        ],
      rows: [
          [
              'Résine standard',
              'Faible-Moyen',
              '2,0 - 3,0 mm',
              'Base ou surfaces planes cachées'
            ],
          [
              'Robuste / Flexible',
              'Moyen-Élevé',
              '3,0 - 4,5 mm',
              'Angles et joints pour éviter le décollement'
            ],
          [
              'Ingénierie / Calcinable',
              'Très Élevé',
              '4,5 - 6,0 mm',
              'Ligne de visée directe pour le drainage par gravité'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Quand augmenter l\'épaisseur de paroi au-delà de 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'L\'échelle et la fonction dictent l\'épaisseur de la paroi',
      html: 'Bien que 1,5 mm soit un minimum fiable pour les petites figurines d\'exposition, vous devez augmenter l\'épaisseur de la paroi pour les impressions plus grandes. Pour les pièces de plus de 150 mm de hauteur, visez des parois de 2,0 mm à 2,5 mm. Pour les composants mécaniques porteurs ou les pièces imprimées avec des résines flexibles/élastomères, les parois doivent être de 3,0 mm ou plus pour éviter un effondrement structurel sous charge.'
    },
    {
      type: 'title',
      text: 'Glossaire technique pour l\'impression SLA creuse',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'Évidement SLA',
            definition: 'Le processus consistant à convertir un modèle 3D plein en une coque creuse avec une épaisseur de paroi spécifique pour économiser de la résine et du temps d\'impression.'
          },
          {
            term: 'Effet de ventouse',
            definition: 'La force de vide créée lorsqu\'une cavité creuse fermée est retirée du film de libération pendant l\'impression.'
          },
          {
            term: 'Force de pelage',
            definition: 'La tension mécanique subie par le modèle et les supports lorsque la couche polymérisée est séparée du fond du bac.'
          },
          {
            term: 'Piégeage de résine',
            definition: 'La rétention de résine liquide non polymérisée à l\'intérieur des angles internes, des supports et des textures en raison de la tension superficielle.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Check-list de synthèse pour des impressions creuses réussies',
      level: 2
    },
    {
      type: 'summary',
      title: 'Checklist SLA avant découpage',
      items: [
          'Vérifiez que l\'épaisseur d\'évidement est appropriée à l\'échelle du modèle.',
          'Confirmez qu\'au moins deux trous de drainage sont placés aux points d\'impression les plus bas.',
          'Vérifiez l\'absence de vides internes isolés qui manqueraient de ventilation.',
          'Prévoyez un lavage interne à l\'IPA et une polymérisation interne par LED UV.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    modelInputsLabel: 'Entrées du modèle',
    volumeLabel: 'Volume total du modèle',
    heightLabel: 'Hauteur de la pièce',
    complexityLabel: 'Complexité géométrique',
    resinTypeLabel: 'Type de résine',
    simpleLabel: 'Simple',
    moderateLabel: 'Modérée',
    highLabel: 'Élevée',
    standardLabel: 'Standard',
    toughLabel: 'Résistante',
    engineeringLabel: 'Technique',
    resultsLabel: 'Résultat d\'évidement et de drainage',
    wallThicknessLabel: 'Paroi recommandée',
    drainDiameterLabel: 'Diamètre de drainage',
    drainHoleCountLabel: 'Trous minimum',
    adjustedSavingLabel: 'Économie de résine estimée',
    adjustedSavingNote: 'Ajusté à la complexité pour tenir compte de la résine liquide retenue sur les surfaces internes.',
    trapFactorLabel: 'Facteur de résine piégée',
    trapFactorHelp: 'Ce facteur change avec la complexité géométrique pour compenser la tension superficielle de la résine visqueuse.',
    theoreticalSavingLabel: 'Volume creux théorique',
    trappedAllowanceLabel: 'Marge de résine retenue',
    savingUnitLabel: 'Économie',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Remarque: Les trous de drainage doivent être placés près du plateau de construction et des points de collecte de résine les plus bas.',
    vacuumWarning: 'Les corps creux nécessitent toujours au moins deux trous de drainage pour briser le vide contre le film de libération.',
    trappedResinWarning: 'Les géométries complexes piègent la résine liquide à l\'intérieur; ce calcul estime la marge.',
    checklistTitle: 'Liste de contrôle avant slicage',
    checklistItems: ['Assurez-vous que les trous de drainage sont situés dans la zone près du plateau de construction.', 'Vérifiez que l\'épaisseur de paroi ne descend pas en dessous de 1,5 mm.', 'Confirmez qu\'il n\'y a pas d\'îlots de résine fermés ou de vides dans le modèle.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
