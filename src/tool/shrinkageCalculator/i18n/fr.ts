import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = 'calculateur-retrait-impression-3d';
const title = 'Calculateur de Retrait 3D : Facteur d\'Échelle et Shrinkage';
const description = 'Calculez de combien vous devez mettre à l\'échelle vos conceptions 3D selon le matériau (ABS, Nylon, ASA) pour compenser le retrait thermique et obtenir des mesures exactes.';

const faqData = [
  {
    question: 'Pourquoi l\'ABS se rétracte-t-il plus que le PLA ?',
    answer: 'L\'ABS est un polymère amorphe qui nécessite des températures plus élevées pour être extrudé. Lors du refroidissement de 250°C à la température ambiante, le gradient thermique est plus élevé, ce qui amène les molécules à se regrouper plus agressivement que dans le PLA.',
  },
  {
    question: 'Quand dois-je utiliser l\'étalonnage manuel ?',
    answer: 'Vous devriez l\'utiliser chaque fois que vous changez de marque de filament ou lorsque vous avez besoin de tolérances mécaniques inférieures à 0,1 mm. Le coefficient de retrait peut varier même entre différentes couleurs d\'une même marque.',
  },
  {
    question: 'Le remplissage (infill) affecte-t-il le retrait ?',
    answer: 'Oui. Plus la densité de remplissage est élevée, plus la quantité de matériau exerçant une force vers le centre de la pièce pendant qu\'elle refroidit est importante. Les pièces pleines ont tendance à se rétracter un peu plus que les pièces creuses.',
  },
];

const howToData = [
  {
    name: 'Sélectionnez votre matériau',
    text: 'Choisissez parmi les matériaux prédéfinis (ABS, ASA, Nylon, etc.) pour appliquer les coefficients standard de l\'industrie.',
  },
  {
    name: 'Calibrez avec une pièce réelle',
    text: 'Si vous avez besoin d\'une précision totale, imprimez un cube de 100 mm, mesurez-le une fois refroidi et entrez les données en mode étalonnage.',
  },
  {
    name: 'Copiez le facteur dans le Slicer',
    text: 'Copiez le pourcentage d\'échelle résultant et appliquez-le aux axes correspondants de votre logiciel de tranchage (Cura, PrusaSlicer).',
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

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Réglages par Matériau',
    tabCalibration: 'Étalonnage Manuel',
    labelDefaultMaterial: 'Matériau par Défaut',
    labelEstimatedShrinkage: 'Retrait Estimé',
    unitPercent: '%',
    labelDesignSize: 'Mesure en Conception (Slicer)',
    labelRealSize: 'Mesure de la Pièce Imprimée (Réelle)',
    unitMm: 'mm',
    labelAxesCompensation: 'Compensation par Axes',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* L\'axe Z se rétracte généralement moins en raison de l\'adhésion entre les couches.',
    labelRecommendationTitle: 'Recommandation Technique',
    labelResultSlicerScale: 'POURCENTAGE D\'ÉCHELLE (SLICER)',
    labelResultFactor: 'FACTEUR MULTIPLICATEUR',
    btnCopy: 'Copier le Pourcentage',
    btnCopied: 'Copié !',
    recommendations: {
      'ABS': 'Une température de chambre d\'au moins 40°C est recommandée pour minimiser le warping supplémentaire dû au retrait.',
      'ASA': 'Excellente résistance aux UV. Réduisez le refroidissement de la couche pour améliorer l\'adhésion structurelle.',
      'Nylon': 'Matériau très hygroscopique. Sécher à 80°C pendant 6-8h avant l\'impression pour éviter les bulles.',
      'PETG': 'Moins de retrait. Utilisez un multiplicateur de débit de 95-98% si vous avez une sur-extrusion dans les pièces denses.',
      'PLA': 'Retrait minimal. Assurez un bon flux d\'air (ventilateur de couche à 100%) pour les détails fins.'
    }
  },
  seo: [
    {
      type: 'title',
      text: 'Calculateur de Retrait en Impression 3D : Précision Dimensionnelle',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Si vous êtes un passionné d\'<strong>impression 3D</strong>, il est fort probable que vous ayez été confronté à ce problème : vous concevez une pièce avec des mesures parfaites (par exemple, un cube de 20x20x20 mm), vous l\'imprimez, et en la mesurant avec le pied à coulisse vous découvrez qu\'elle mesure 19,7 mm. Que s\'est-il passé ? La réponse est le <strong>retrait du matériau</strong> ou <i>shrinkage</i>.',
    },
    {
      type: 'paragraph',
      html: 'Le retrait est un phénomène physique inévitable qui se produit lorsque les thermoplastiques passent de leur état fondu (à haute température) à leur état solide à température ambiante. En refroidissant, les molécules se réorganisent et se "resserrent", réduisant le volume total de la pièce. Notre <strong>calculateur de retrait</strong> est conçu pour vous aider à prédire ce changement et à ajuster l\'échelle dans votre slicer afin que vos pièces s\'ajustent dès la première fois.',
    },
    {
      type: 'title',
      text: 'Pourquoi les plastiques se rétractent-ils ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dans l\'impression FDM (Fused Deposition Modeling), nous déposons des couches de plastique chaud (entre 200°C et 300°C) sur une surface. À mesure que le matériau refroidit, il subit ce qu\'on appelle le <strong>coefficient d\'expansion thermique</strong>. Fondamentalement, l\'énergie thermique maintient les molécules séparées ; lorsque cette énergie disparaît, les forces intermoléculaires les rapprochent les unes des autres.',
    },
    {
      type: 'paragraph',
      html: 'Tous les matériaux ne se comportent pas de la même manière. Les plastiques amorphes (comme le PLA) ont une structure désordonnée qui a tendance à se rétracter moins. En revanche, les plastiques qui ont tendance à cristalliser ou qui nécessitent des températures très élevées (comme l\'ABS ou le Nylon) ont un retrait beaucoup plus agressif et difficile à contrôler.',
    },
    {
      type: 'title',
      text: 'Matériaux Communs et Leurs Plages de Retrait',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrylonitrile Butadiène Styrène) : 0,8 % – 2,0 %. C\'est l\'un des matériaux les plus difficiles en raison de son retrait élevé, qui provoque souvent du "warping" (déformation des coins).',
        'ASA : 0,5 % – 0,9 %. Une alternative à l\'ABS plus résistante aux UV et avec un retrait un peu plus contenu.',
        'Nylon (PA) : 0,7 % – 2,5 %. Selon qu\'il a une charge de fibre de carbone ou de verre, son retrait peut varier considérablement.',
        'PETG : 0,2 % – 0,5 %. Très stable dimensionnellement, idéal pour les pièces mécaniques qui ne nécessitent pas la résistance thermique de l\'ABS.',
        'PLA : 0,1 % – 0,3 %. La norme de référence pour la facilité d\'utilisation ; son retrait est presque négligeable pour la plupart des usages.',
      ],
    },
    {
      type: 'title',
      text: 'Comment calculer le Facteur d\'Échelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De nombreux utilisateurs commettent l\'erreur de simplement "ajouter le pourcentage" (s\'il manque 2 %, ils mettent l\'échelle à 102 %). Cependant, mathématiquement, pour compenser une perte, l\'échelle doit être légèrement différente. La formule correcte utilisée par notre calculateur est : <br><strong>Facteur d\'Échelle = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Où <strong>S</strong> est le pourcentage de retrait exprimé en décimales (ex : 0,02 pour 2 %). Par exemple, pour un matériau qui se rétracte de 2 %, le facteur d\'échelle est de 1,0204, ce qui signifie que dans le slicer (Cura, PrusaSlicer, Bambu Studio), nous devons régler l\'échelle sur <strong>102,04 %</strong>.',
    },
    {
      type: 'title',
      text: 'Étalonnage Manuel : Mesure Souhaitée vs Réelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le processus d\'étalonnage inverse est simple : imprimez un objet de test avec une mesure connue (par exemple, un cube d\'étalonnage de 100 mm). Une fois qu\'il est complètement froid (il est crucial d\'attendre au moins 30 minutes), mesurez la pièce avec un pied à coulisse numérique. Entrez les deux valeurs dans le calculateur et celui-ci vous donnera le pourcentage exact d\'ajustement pour cette bobine de filament.',
    },
    {
      type: 'title',
      text: 'Retrait Non Uniforme : Le Problème des Axes X, Y et Z',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dans l\'impression 3D, la physique n\'est pas la même dans toutes les directions. Comme les couches sont déposées les unes sur les autres, l\'<strong>adhésion entre les couches</strong> sur l\'axe Z limite généralement le retrait vertical. Normalement, vous constaterez que les mesures dans le plan horizontal (axes X et Y) nécessitent plus de compensation que la hauteur (axe Z).',
    },
    {
      type: 'tip',
      title: 'Conseil de Pro',
      html: '<p>Si vous travaillez avec du nylon ou des matériaux techniques, mesurez toujours la pièce 24 heures après l\'impression. Certains plastiques absorbent l\'humidité ambiante et peuvent "gonfler" légèrement après refroidissement, modifiant la mesure finale.</p>',
    },
    {
      type: 'title',
      text: 'Facteurs qui affectent la précision finale',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Température de l\'Extrudeur : À une température plus élevée, le matériau entre plus expansé mais subit également un refroidissement plus brutal.',
        'Température du Plateau : Un plateau chaud empêche la base de la pièce de se rétracter plus vite que le haut, réduisant le warping.',
        'Densité de Remplissage (Infill) : Les pièces très denses ont plus de masse de plastique exerçant une force de retrait interne vers le centre.',
        'Ventilateur de Couche : Dans des matériaux comme l\'ABS, un ventilateur trop puissant peut provoquer des fissures et un retrait excessif et irrégulier.',
      ],
    },
  ],
  faqTitle: 'Foire Aux Questions',
  faq: faqData,
  bibliographyTitle: 'Références',
  bibliography: [
    {
      name: 'Simplify3D: Dimensional Accuracy and Shrinkage',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Material Table and Shrinkage Factors',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Understanding 3D Printing Material Shrinkage',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
