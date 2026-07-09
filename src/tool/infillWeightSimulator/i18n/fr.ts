import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = 'calculateur-poids-pourcentage-remplissage-3d';
const title = 'Calculateur de Poids et Pourcentage de Remplissage 3D';
const description =
  'Estime le poids de la pièce, le filament économisé et le coût du matériau en modifiant le pourcentage et le motif de remplissage à partir d\'un poids de référence à 100% de remplissage.';

const faqData = [
  {
    question: 'Puis-je estimer le poids d\'une impression 3D à partir du poids à 100% de remplissage ?',
    answer:
      'Oui, mais l\'estimation doit garder les coques, les parois, les couches supérieures et inférieures séparées du remplissage interne. Une pièce ne devient pas en apesanteur à 0% de remplissage car le périmètre extérieur utilise toujours du matériau.',
  },
  {
    question: 'Pourquoi le motif de remplissage change-t-il le poids estimé ?',
    answer:
      'Différents motifs créent différentes longueurs de trajet à la même densité nominale. Les motifs de lignes et concentriques sont généralement plus légers, tandis que le nid d\'abeille, le cubique et les triangles ont tendance à ajouter plus de longueur de paroi interne.',
  },
  {
    question: 'Le poids du slicer est-il plus précis que ce calculateur ?',
    answer:
      'Un slicer est plus précis une fois que le modèle, la buse, la largeur d\'extrusion, le nombre de parois, les couches supérieures et le profil de matériau sont connus. Ce calculateur est conçu pour une planification rapide avant de reslicer de nombreuses versions.',
  },
  {
    question: 'Quel pourcentage de coque dois-je utiliser ?',
    answer:
      'Pour de nombreuses pièces FDM décoratives ou de taille moyenne, 20-35% de part de coque est une fourchette de départ pratique. Les petites pièces, les objets fins et les pièces avec de nombreux trous peuvent avoir une part de coque plus élevée.',
  },
];

const howToData = [
  {
    name: 'Partir d\'une référence à 100% de remplissage',
    text: 'Utilise le poids rapporté par ton slicer pour le même modèle à 100% de remplissage, ou pèse une impression de référence connue complètement dense.',
  },
  {
    name: 'Choisir le remplissage cible et le motif',
    text: 'Déplace le curseur de remplissage et choisis le motif le plus proche du réglage slicer que tu prévois d\'utiliser.',
  },
  {
    name: 'Ajuster les hypothèses de coque et de déchet',
    text: 'Augmente la part de coque pour les modèles fins ou à périmètre lourd, puis ajoute du déchet pour la purge, la jupe, le bord, les supports et les démarrages ratés.',
  },
  {
    name: 'Lire les économies de poids et de coût',
    text: 'Compare le poids estimé final à la référence 100% de remplissage pour décider si l\'économie de matériau vaut le compromis sur la rigidité.',
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

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Paramètres de poids de remplissage',
    resultsAriaLabel: 'Résultats estimés du poids d\'impression',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    currencyLabel: 'Devise',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    fullWeightLabel: 'Poids à 100% de remplissage',
    fullWeightHint: 'Utilise la valeur du slicer pour le même modèle à densité totale.',
    infillLabel: 'Remplissage cible',
    patternLabel: 'Motif de remplissage',
    patternOptions: [
      { value: 'lines', label: 'Lignes - trajets légers' },
      { value: 'grid', label: 'Grille - référence slicer' },
      { value: 'triangles', label: 'Triangles - cellules rigides' },
      { value: 'gyroid', label: 'Gyroïde - treillis lisse' },
      { value: 'cubic', label: 'Cubique - rigidité 3D' },
      { value: 'honeycomb', label: 'Nid d\'abeille - parois denses' },
      { value: 'concentric', label: 'Concentrique - suit le contour' },
    ],
    shellShareLabel: 'Part de coque',
    shellShareHint: 'Parois, couches supérieures, couches inférieures et zones pleines qui ne s\'adaptent pas avec le remplissage.',
    spoolPriceLabel: 'Prix du filament',
    wasteLabel: 'Déchet',
    estimatedWeightLabel: 'Poids estimé de la pièce',
    filamentSavedLabel: 'Filament économisé',
    materialCostLabel: 'Coût du matériau',
    costSavedLabel: 'Coût économisé',
    effectiveDensityLabel: 'Densité effective',
    shellLabel: 'Coque',
    infillCoreLabel: 'Noyau de remplissage',
    patternImpactLabel: 'Multiplicateur de motif',
    comparisonLabel: 'Comparaison de référence',
    fullInfillLabel: '100% remplissage',
    targetInfillLabel: 'Configuration cible',
    insightLow: 'Un remplissage très bas peut économiser beaucoup de filament, mais les surfaces supérieures, les bossages de vis, les clips et les zones de charge peuvent nécessiter des parois supplémentaires ou des modificateurs locaux.',
    insightBalanced: 'C\'est une zone de planification équilibrée pour de nombreuses impressions visuelles et fonctionnelles légères: la coque porte la forme tandis que le remplissage contrôle la rigidité et le coût.',
    insightHigh: 'Un remplissage élevé réduit rapidement l\'écart d\'économie. Envisage plus de parois, un motif plus fort ou un choix de matériau différent avant d\'utiliser un remplissage dense partout.',
  },
  seo: [
    { type: 'title', text: 'Comment fonctionne un calculateur de poids et pourcentage de remplissage 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calculateur de poids et pourcentage de remplissage 3D</strong> estime la quantité de plastique restante lorsqu\'un modèle est imprimé avec moins de 100% de densité interne. Le détail important est que le poids FDM n\'est pas une simple multiplication du poids total par le pourcentage de remplissage. Un modèle imprimé à 20% de remplissage ne pèse généralement pas 20% de la version complètement dense, car les parois, les couches supérieures, les couches inférieures, les petites zones pleines, les bords et les interfaces de support consomment toujours du filament. Ce calculateur part du poids connu ou rapporté par le slicer à 100% de remplissage, sépare une part de coque configurable, puis met à l\'échelle le noyau interne selon le remplissage cible et le comportement du motif.',
    },
    {
      type: 'paragraph',
      html: 'La méthode est conçue pour des comparaisons rapides avant de passer du temps à reslicer un fichier plusieurs fois. Si un support PETG complètement dense est estimé à 240 g, passer à 20% gyroïde peut ne pas produire une pièce de 48 g. Avec une part de coque de 28%, la masse du périmètre est déjà d\'environ 67 g avant de compter la densité interne. Le noyau de remplissage ajoute ensuite du matériau selon la densité et le multiplicateur de motif sélectionnés. Le résultat est une estimation de planification plus réaliste que le calcul linéaire de remplissage, tout en restant assez rapide pour les décisions précoces.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Part de coque typique pour de nombreuses pièces FDM moyennes', icon: 'mdi:cube-outline' },
        { value: '0,88x', label: 'Multiplicateur de contour léger pour le remplissage concentrique', icon: 'mdi:chart-line' },
        { value: '1,16x', label: 'Multiplicateur de trajet dense pour la planification en nid d\'abeille', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Poids de référence utilisé comme base pour les économies', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilise le même profil slicer pour la référence',
      html: '<p>Pour l\'estimation la plus propre, génère le poids à 100% de remplissage avec la même buse, largeur d\'extrusion, nombre de parois, couches supérieures, couches inférieures, densité de matériau et réglages de support que tu utiliseras pour l\'impression cible. Modifier ces réglages change la masse de la coque, donc la comparaison de remplissage seul devient moins pertinente.</p>',
    },

    { type: 'title', text: 'Pourquoi le poids de remplissage n\'est pas linéaire', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'expression <em>pourcentage de remplissage</em> semble être une valeur de densité directe, mais les slicers ne l\'appliquent qu\'à la région interne restante après la génération des périmètres et des surfaces pleines. Un simple cube avec deux parois et six couches supérieures peut avoir un grand volume interne, donc le pourcentage de remplissage affecte fortement le poids. Un support de téléphone fin, un boîtier d\'engrenage avec de nombreux trous, ou une miniature aux membres étroits peuvent avoir tellement de géométrie de périmètre que la réduction du remplissage produit une économie plus faible que prévu. C\'est pourquoi le calculateur expose la <strong>part de coque</strong> au lieu de la cacher.',
    },
    {
      type: 'table',
      headers: ['Type de modèle', 'Part de coque probable', 'Ce que cela signifie pour les économies'],
      rows: [
        ['Grand boîtier rectangulaire', '15-25%', 'La majeure partie de la masse est du volume interne, donc le remplissage change fortement le poids.'],
        ['Figure décorative ou modèle organique', '25-45%', 'De nombreuses courbes et zones étroites créent une géométrie à périmètre lourd.'],
        ['Support ou panneau fin', '35-60%', 'Les parois et surfaces dominent ; la réduction du remplissage peut économiser moins de plastique.'],
        ['Petit clip mécanique', '45-70%', 'Le modèle peut être presque plein rien qu\'avec les périmètres.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quand l\'estimation semble trop lourde',
      badge: 'Vérifier la part de coque',
      html: '<p>Si un réglage de 10% de remplissage produit encore un poids estimé élevé, la part de coque est probablement grande. Cela peut être correct pour les petites pièces ou les pièces fines. Vérifie le nombre de parois, l\'épaisseur supérieure et inférieure, et si le modèle a de nombreuses îles séparées ou des nervures étroites.</p>',
    },
    {
      type: 'summary',
      title: 'Interprétation pratique',
      items: [
        'Le pourcentage de remplissage n\'affecte que le noyau interne, pas la totalité de l\'impression.',
        'Une pièce à 0% de remplissage a toujours des parois, des peaux, des jointures et parfois de petites caractéristiques pleines.',
        'La référence de poids total, la part de coque, le choix du motif et la marge de déchet produisent ensemble un meilleur nombre de planification.',
      ],
    },

    { type: 'title', text: 'Multiplicateurs de poids par motif de remplissage', level: 2 },
    {
      type: 'paragraph',
      html: 'Deux impressions peuvent toutes deux être réglées à 25% de remplissage et utiliser différentes quantités de filament car la géométrie du trajet change. Les motifs de lignes et concentriques produisent souvent des trajets internes plus légers car ils évitent certaines structures de croisement. La grille, les triangles, le cubique, le gyroïde et le nid d\'abeille créent différentes quantités de chevauchement, de renforcement directionnel et de longueur de trajet. Le calculateur modélise cela avec un petit <strong>multiplicateur de motif</strong> appliqué au noyau interne, pas à la pièce entière.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lignes et concentrique',
          description: 'Utile quand le poids minimal et l\'impression rapide importent plus que la rigidité uniforme.',
          icon: 'mdi:format-line-spacing',
          points: ['Densité de trajet plus faible', 'Bon pour les pièces décoratives', 'La résistance directionnelle peut être inégale'],
        },
        {
          title: 'Grille et gyroïde',
          description: 'Choix équilibrés pour les impressions visuelles et fonctionnelles courantes où la rigidité compte.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Référence slicer prévisible', 'Bon compromis rigidité-poids', 'Le gyroïde répartit les charges uniformément'],
        },
        {
          title: 'Cubique, triangles, nid d\'abeille',
          description: 'Choix de planification plus lourds qui peuvent améliorer la rigidité mais réduisent l\'économie de filament.',
          icon: 'mdi:hexagon-outline',
          points: ['Plus de longueur de paroi interne', 'Meilleure rigidité multidirectionnelle', 'Un temps d\'impression plus long est courant'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compromis de sélection de motif',
      items: [
        { pro: 'Les motifs plus légers réduisent le coût du matériau et peuvent raccourcir le temps d\'impression.', con: 'Ils peuvent créer des directions plus faibles ou un moins bon support des surfaces supérieures.' },
        { pro: 'Les motifs denses améliorent la sensation de rigidité des pièces et réduisent la flexion.', con: 'Ils peuvent approcher le coût d\'un remplissage plus élevé sans résoudre une conception de paroi faible.' },
        { pro: 'Le gyroïde répartit les charges uniformément dans de nombreuses directions.', con: 'Il peut imprimer plus lentement sur les machines avec des réglages d\'accélération conservateurs.' },
      ],
    },
    {
      type: 'message',
      title: 'Les multiplicateurs de motif sont des hypothèses de planification',
      ariaLabel: 'Note sur les multiplicateurs de motif',
      html: '<p>Les moteurs des slicers implémentent les motifs différemment. Traite le multiplicateur comme un estimateur précoce, puis confirme les travaux de production importants avec un aperçu réel du slicer et le rapport d\'utilisation du matériau.</p>',
    },

    { type: 'title', text: 'Calcul des économies de filament et de coût', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'estimation du coût du matériau multiplie les grammes finaux par le prix de la bobine par kilogramme. Si le calculateur prédit une impression de 126 g et que la bobine coûte 24 $ par kg, la part de plastique est d\'environ 3,02 $ avant le temps machine, l\'électricité, la main-d\'œuvre, l\'emballage et les impressions ratées. Le coût économisé compare le même modèle à la référence 100% de remplissage, en utilisant le même pourcentage de déchet. C\'est utile pour les devis, la planification de lots et pour décider si un réglage de remplissage plus lourd vaut le matériel supplémentaire.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Utilise le pourcentage de déchet pour les lignes de purge, les jupes, les bords, les supports, les radeaux, les changements de couleur et les démarrages ratés courts.',
        'Pour les prototypes uniques, une marge de déchet de 5-10% est généralement plus réaliste que zéro.',
        'Pour les lots de production avec supports ou matériaux abrasifs, enregistre le poids réel restant et raté sur plusieurs travaux.',
        'En comparant le PLA, PETG, ABS, ASA, nylon et les composites chargés, utilise le prix de la bobine pour le matériau exact, pas une moyenne générique.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Exemple: du prototype dense au remplissage de production',
      html: '<p>Un prototype à 100% de remplissage pèse 240 g. Avec une part de coque de 28%, 20% gyroïde, 6% de déchet et du filament à 24 $/kg, l\'estimation se situe autour de la centaine de grammes plutôt que 48 g. Cette différence compte lors du devis de 40 exemplaires: de petites erreurs par pièce deviennent des bobines entières de plastique.</p>',
    },
    {
      type: 'table',
      headers: ['Entrée', 'Pourquoi c\'est important', 'Erreur courante'],
      rows: [
        ['Poids 100%', 'Définit la référence de matériau maximale.', 'Utiliser un nombre de parois différent de celui de l\'impression cible.'],
        ['Remplissage cible', 'Contrôle la densité du noyau interne.', 'Supposer que 20% de remplissage signifie 20% du poids total de la pièce.'],
        ['Motif', 'Modifie la longueur du trajet et la rigidité.', 'Ignorer le motif lors de la comparaison des préréglages du slicer.'],
        ['Déchet', 'Ajoute le filament réel utilisé hors de la pièce finale.', 'Oublier les supports et les démarrages ratés.'],
      ],
    },

    { type: 'title', text: 'Choisir le remplissage pour économiser du poids sans pièces faibles', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'économie de poids n\'a de valeur que si la pièce remplit toujours sa fonction. Pour les modèles visuels, les accessoires d\'exposition, les pièces de cosplay et les couvercles, un faible remplissage avec suffisamment de couches supérieures peut être parfait. Pour les supports, les fixations, les boîtiers avec vis, les clips et les pièces exposées à la chaleur ou aux chocs, la meilleure amélioration est souvent plus de parois ou un renforcement local plutôt que d\'augmenter simplement le remplissage global. Une pièce avec quatre parois et 20% gyroïde peut être plus solide aux bons endroits qu\'une pièce avec deux parois et 50% de remplissage.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Part de coque', definition: 'La portion du poids totalement dense qui appartient aux parois, couches supérieures, couches inférieures et à la géométrie pleine inévitable.' },
        { term: 'Remplissage nominal', definition: 'Le pourcentage sélectionné dans le slicer pour la région interne après la génération des coques.' },
        { term: 'Densité effective', definition: 'La densité totale estimée de l\'impression finie après combinaison de la part de coque, du pourcentage de remplissage et du multiplicateur de motif.' },
        { term: 'Marge de déchet', definition: 'Filament supplémentaire utilisé pour le matériau hors pièce tel que purge, bord, supports, tests et démarrages ratés.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'N\'utilise pas l\'économie de poids comme seul critère de conception',
      badge: 'Pièces fonctionnelles',
      html: '<p>Les pièces chargées à travers les couches, les pièces avec inserts filetés et les pièces avec compression de vis nécessitent un raisonnement mécanique séparé. Le remplissage aide, mais l\'épaisseur de paroi, l\'orientation, le matériau, la température et la concentration de contraintes comptent souvent plus que la densité seule.</p>',
    },
    {
      type: 'summary',
      title: 'Règles de décision rapides',
      items: [
        'Impressions décoratives: réduis d\'abord le remplissage, puis vérifie la qualité de la surface supérieure.',
        'Impressions fonctionnelles légères: utilise un motif équilibré et assez de parois avant un remplissage élevé.',
        'Supports et fixations: renforce les trous, les coins et les chemins de charge avec des modificateurs locaux.',
        'Travaux par lots: confirme l\'estimation finale avec le slicer avant d\'acheter du matériau.',
      ],
    },

    { type: 'title', text: 'Quand faire confiance au calculateur et quand reslicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Ce calculateur est idéal pour les estimations rapides, les devis précoces, l\'achat de matériau et la comparaison de multiples options de remplissage sans ouvrir le slicer à répétition. Il ne remplace pas le slicer lorsque les réglages dimensionnels changent. Si tu modifies le diamètre de la buse, la largeur d\'extrusion, le nombre de parois, l\'épaisseur supérieure, l\'épaisseur inférieure, les couches adaptatives, le style de support, le repassage, le mode vase ou la densité du matériau, la référence 100% et la part de coque doivent être mises à jour.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Utilise le calculateur quand le modèle et le profil restent principalement fixes et que tu explores la densité ou le motif.',
        'Reslice quand le nombre de parois, la génération de supports, la taille de buse ou le profil de matériau change.',
        'Pèse une pièce finie quand tu as besoin de relevés de coûts de production ou de prévisions d\'inventaire.',
        'Enregistre les grammes réels pour les travaux répétés ; les données réelles amélioreront rapidement tes hypothèses de part de coque.',
      ],
    },
    {
      type: 'tip',
      title: 'Un flux de travail fiable pour les devis',
      html: '<p>Crée une référence slicer complètement dense, estime plusieurs options de remplissage avec ce calculateur, choisis les deux plus prometteuses, puis reslice seulement ces deux candidats finaux. Cela maintient les devis rapides tout en fondant les prix finaux sur des rapports de matériau spécifiques au slicer.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
