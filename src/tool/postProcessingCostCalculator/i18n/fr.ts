import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'calculateur-cout-post-traitement-impression-3d';
const title = 'Calculateur de coût de post traitement impression 3D';
const description =
  "Estimez la finition manuelle, le retrait des supports, le ponçage, la peinture, les autres travaux manuels, les consommables et le coût de post-traitement ajusté selon la devise pour les pièces imprimées en 3D.";

const faqData = [
  {
    question: 'Comment calculer le coût de post-traitement en impression 3D ?',
    answer:
      "Additionnez toutes les minutes de finition manuelle, multipliez le total par le taux horaire divisé par 60, puis ajoutez les consommables. Cette calculatrice affiche également la part de coût de chaque phase de finition.",
  },
  {
    question: 'Les consommables doivent-ils être inclus dans le coût de finition manuelle ?',
    answer:
      "Oui. Le papier de verre, l'apprêt de remplissage, la peinture, les gants, le ruban de masquage, l'IPA, le liquide de nettoyage pour résine, les chiffons et l'usure des petits outils peuvent peser suffisamment dans le devis d'une pièce finie pour en changer le résultat.",
  },
  {
    question: 'La conversion de devise change-t-elle la formule de coût ?',
    answer:
      "Non. La devise ne modifie que l'échelle monétaire affichée. La formule de main-d'œuvre reste: minutes multipliées par le taux horaire divisé par 60, plus les consommables.",
  },
  {
    question: "Quel taux horaire utiliser pour la main-d'œuvre en impression 3D ?",
    answer:
      "Utilisez le taux de main-d'œuvre chargé de l'atelier, pas seulement le salaire net. Intégrez les salaires, les charges patronales, le temps non facturable rémunéré, l'encadrement et le niveau de qualification requis pour la finition cosmétique.",
  },
];

const howToData = [
  { name: 'Saisir les minutes de finition', text: "Ajoutez le retrait des supports, le ponçage, la peinture et tout autre temps manuel en minutes." },
  { name: 'Définir le taux et les consommables', text: "Saisissez votre taux de finition horaire et le coût direct des consommables dans la devise choisie." },
  { name: 'Choisir la devise et le facteur', text: "Utilisez le sélecteur de devise pour les symboles et le facteur de conversion optionnel pour les ajustements de devis." },
  { name: 'Copier le résultat', text: "Utilisez le bouton de copie pour coller le total, la main-d'œuvre, les consommables et les minutes dans un devis." },
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
    'calculateur de coût de post-traitement 3D',
    "estimation du coût de main-d'œuvre impression 3D",
    'coût de finition manuelle impression 3D',
    'calculateur de taux horaire post-traitement',
  ],
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Paramètres de coût de post-traitement',
    resultsAriaLabel: 'Résultats de coût de post-traitement',
    currencyLabel: 'Devise',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
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
    currencyOptionSeparator: ' - ',
    supportLabel: 'Retrait des supports',
    sandingLabel: 'Ponçage',
    paintingLabel: 'Peinture',
    otherLabel: "Autre main-d'œuvre",
    hourlyRateLabel: 'Taux horaire',
    consumablesLabel: 'Consommables',
    conversionFactorLabel: 'Facteur de conversion',
    conversionFactorUnit: 'x',
    conversionHint: "Laissez à 1 si le taux est déjà saisi en devise locale ; modifiez-le pour appliquer un multiplicateur global au devis.",
    minutesUnit: 'min',
    hourUnit: 'h',
    rateUnitSeparator: '/',
    totalLabel: 'Total post-traitement',
    laborLabel: "Main-d'œuvre",
    consumablesBreakdownLabel: 'Consommables',
    timeLabel: 'Temps manuel',
    effectiveRateLabel: 'Taux effectif',
    breakdownLabel: 'Part de coût par phase de finition',
    copyLabel: 'Copier le résultat',
    copiedLabel: 'Copié',
    copyTemplate: "Coût de post-traitement: {total} ({minutes} ; main-d'œuvre {labor} ; consommables {consumables})",
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: "Ce que mesure ce calculateur de coût de post-traitement impression 3D", level: 2 },
    {
      type: 'paragraph',
      html: "Un <strong>calculateur de coût de post-traitement impression 3D</strong> doit répondre à une question concrète de devis: combien d'argent est consommé après l'arrêt de l'imprimante ? La pièce imprimée a peut-être déjà un coût de temps machine et un coût de matière, mais beaucoup de commandes se jouent lors du retrait des supports, du ponçage, de l'apprêt, de la peinture, du nettoyage, du masquage, du contrôle et des retouches. Ce calculateur décompose ces opérations de finition manuelle en minutes, les multiplie par un taux de post-traitement horaire, puis ajoute les consommables directs pour que le chiffre final puisse être collé dans un devis.",
    },
    {
      type: 'paragraph',
      html: "La formule de base est délibérément transparente: <code>((supports + ponçage + peinture + autres minutes) x (taux horaire / 60)) + consommables</code>. Le facteur de conversion optionnel multiplie le taux horaire et les consommables quand un atelier veut adapter ses valeurs à une conversion de devise, une grille de prix régionale, une marge sous-traitant ou un ajustement ponctuel. Si l'utilisateur saisit directement un taux de main-d'œuvre local, le facteur doit rester à <code>1</code> et le résultat reste indépendant des hypothèses de taux de change.",
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x taux/60', label: "Formule de coût de main-d'œuvre", icon: 'mdi:clock-outline' },
        { value: '5 phases', label: 'Supports, ponçage, peinture, autres, consommables', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Facteur de conversion par défaut', icon: 'mdi:swap-horizontal' },
        { value: 'En direct', label: 'Sans bouton de calcul', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: "Devisez la personne, pas l'imprimante",
      html: "<p>Le post-traitement est généralement porté par la main-d'œuvre. Une impression lente peut être peu coûteuse à finir, tandis qu'une petite pièce cosmétique avec des supports sur des faces visibles peut exiger un travail manuel qualifié et onéreux. Traitez l'<strong>estimation du coût de main-d'œuvre en impression 3D</strong> comme une ligne à part au lieu de la dissimuler dans la marge matière.</p>",
    },
    { type: 'title', text: 'Retrait des supports: premier facteur de coût manuel', level: 2 },
    {
      type: 'paragraph',
      html: "Le retrait des supports ne se limite pas au temps nécessaire pour arracher du plastique d'un modèle. Il peut inclure la découpe, le chauffage, la dissolution, le rinçage, le grattage, l'élimination des marques de support, la protection des éléments fragiles et la vérification si les cicatrices de support nécessitent un travail de surface supplémentaire. Les supports arborescents FDM, les couches d'interface denses, les pointes de support SLA et le dépoudrage SLS créent des profils de main-d'œuvre différents. Pour une estimation fiable du <strong>coût de finition manuelle en impression 3D</strong>, le temps de retrait des supports doit être mesuré sur des travaux comparables plutôt qu'estimé à partir de la durée d'impression.",
    },
    {
      type: 'table',
      headers: ['Situation de support', 'Comportement de temps typique', 'Note de devis'],
      rows: [
        ['Supports à rupture facile', 'Retrait court et prévisible', "Souvent adapté à un forfait fixe en minutes par pièce."],
        ["Interface de support dense", "Découpe plus longue et nettoyage de surface", "Ajouter les minutes de ponçage séparément pour que le facteur de coût reste visible."],
        ["Miniatures en résine ou modèles délicats", "Découpe lente pour éviter les dommages", "Utiliser un taux horaire plus élevé si un travail manuel qualifié est requis."],
        ["Support soluble", "Moins de découpe manuelle mais plus de temps de process", "Inclure la manipulation de la solution et le séchage si l'opérateur est impliqué."],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: "Ne devisez pas le retrait des supports uniquement d'après le volume de support du slicer",
      badge: "Risque main-d'œuvre",
      html: "<p>Le volume de support peut être faible alors que l'accès est difficile. Un petit support caché à l'intérieur d'un élément étroit peut coûter plus de main-d'œuvre qu'un grand support externe qui se détache proprement.</p>",
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        "Enregistrez les minutes de retrait des supports pour les familles de pièces récurrentes.",
        "Séparez le retrait du ponçage pour comparer plus facilement les stratégies de support.",
        "Augmentez l'estimation pour les géométries fragiles, les broches fines, les miniatures et les surfaces côté client.",
        "Utilisez la même devise et la même base de taux horaire que le reste du devis.",
      ],
    },
    { type: 'title', text: 'Ponçage, remplissage et préparation de surface', level: 2 },
    {
      type: 'paragraph',
      html: "Le ponçage est souvent le coût caché le plus important dans les pièces 3D finies car il est itératif. L'opérateur peut passer par du ponçage grossier, du mastic, un temps de séchage ou de polymérisation, du ponçage fin, une correction ponctuelle et une inspection sous lumière rasante. La hauteur de couche, la dureté du matériau, les cicatrices de support, le niveau de brillance requis et la géométrie de la pièce modifient la quantité de travail manuel. Une pièce fonctionnelle peut nécessiter cinq minutes ; un prototype d'exposition peut nécessiter une heure avant même d'ouvrir la peinture.",
    },
    {
      type: 'paragraph',
      html: "Le calculateur traite le ponçage comme des minutes multipliées par le taux de finition horaire, car le processus est limité par l'opérateur plus que par la machine. Les consommables tels que les abrasifs, l'apprêt de remplissage, le mastic, les chiffons antistatiques et les matériaux de masquage doivent aller dans le champ consommables plutôt qu'être noyés dans le taux de main-d'œuvre. Cela rend l'<strong>analyse du coût de finition de l'impression 3D</strong> lisible: la main-d'œuvre montre la pression du temps, les consommables montrent les intrants achetés.",
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Finition fonctionnelle',
          description: "Bords vifs nettoyés, supports retirés et cicatrices grossières suffisamment réduites pour l'assemblage.",
          icon: 'mdi:wrench-outline',
          points: ["Moins de temps de ponçage", "Consommables minimes", "Contrôle axé sur l'ajustement"],
        },
        {
          title: 'Finition présentation',
          description: "Faces visibles lissées, apprêt utilisé de façon sélective et lignes de couche réduites pour la revue client.",
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ["Temps de ponçage modéré", "Apprêt et mastic probables", "Les surfaces cosmétiques pilotent la main-d'œuvre"],
        },
        {
          title: 'Finition prête à peindre',
          description: "Ponçage progressif, remplissage, masquage et correction des défauts avant les couches de couleur.",
          icon: 'mdi:spray',
          points: ["Temps manuel le plus élevé", "Les consommables comptent", "Prévoir une marge pour les retouches"],
        },
      ],
    },
    {
      type: 'message',
      title: 'Les abrasifs sont des consommables',
      ariaLabel: 'Note sur les consommables',
      html: "<p>Le papier de verre, les éponges abrasives, les limes à aiguilles, le mastic, les gants et les chiffons ne sont pas gratuits. Ajoutez leur coût direct quand le travail en consomme une part significative.</p>",
    },
    { type: 'title', text: 'Estimation du coût de peinture et de revêtement', level: 2 },
    {
      type: 'paragraph',
      html: "Les minutes de peinture doivent inclure le temps actif de l'opérateur: masquage, mélange, pulvérisation, travail au pinceau, retouche, démasquage, nettoyage de la zone de travail et contrôle. Le temps passif de séchage ou de polymérisation ne doit être ajouté que lorsqu'il bloque l'opérateur ou occupe un espace de cabine rare facturé en main-d'œuvre ou en frais généraux. Cette distinction évite qu'un <strong>calculateur de taux horaire de post-traitement</strong> transforme chaque heure d'attente en coût de main-d'œuvre alors que personne ne travaille activement sur la pièce.",
    },
    {
      type: 'table',
      headers: ['Tâche de peinture', "Saisir comme main-d'œuvre ?", 'Saisir comme consommables ?'],
      rows: [
        ['Masquage et démasquage', 'Oui, minutes actives', 'Ruban, film, bouchons et gabarits'],
        ['Mélange de peinture ou de revêtement résine', 'Oui, minutes actives', 'Peinture, diluant, gobelets, filtres, gants'],
        ['Pulvérisation ou peinture au pinceau', 'Oui, minutes actives', 'Matière de revêtement et solvant de nettoyage'],
        ['Temps de séchage', "Seulement si cela bloque de la main-d'œuvre payée ou la capacité de cabine", 'Généralement pas de matière directe sauf si chaleur ou lampes facturées séparément'],
      ],
    },
    {
      type: 'tip',
      title: 'Facturez explicitement la complexité des couleurs',
      html: "<p>Une simple couche d'apprêt et une finition deux tons masquée peuvent avoir un coût matière similaire mais un coût de main-d'œuvre très différent. Utilisez le champ des minutes de peinture pour exposer la différence avant d'appliquer la marge.</p>",
    },
    {
      type: 'proscons',
      title: 'Forfait de finition fixe vs minutes de finition mesurées',
      items: [
        { pro: "Un forfait fixe est rapide pour les travaux récurrents avec des exigences de finition stables.", con: "Il masque quelle phase consomme le bénéfice quand un travail évolue." },
        { pro: "Les minutes mesurées rendent l'estimation auditable et facile à mettre à jour.", con: "Elles exigent que l'atelier enregistre les temps de finition réels pour les types de pièces courants." },
        { pro: "La barre de coût visuelle facilite l'explication interne des devis côté client.", con: "Elle ne remplace pas le jugement sur le risque cosmétique et la probabilité de retouche." },
      ],
    },
    { type: 'title', text: 'Consommables et frais généraux de post-traitement', level: 2 },
    {
      type: 'paragraph',
      html: "Les consommables sont des matières directes consommées lors de la finition. Ils peuvent inclure du papier de verre, de l'apprêt, du mastic, de la peinture, du liquide de lavage pour résine, de l'IPA, des essuie-tout, des gants en nitrile, des lames, du ruban de masquage, des bouchons de protection, des gobelets jetables, des filtres, de la cire à polir et du vernis. Certains ateliers les intègrent aux frais généraux, mais les chiffrer comme champ direct est plus prudent pour les travaux aux normes de finition inhabituelles, aux grandes surfaces, au ponçage intensif ou aux processus riches en solvants.",
    },
    {
      type: 'paragraph',
      html: "Un champ de consommables séparé aide aussi dans les workflows de <strong>calculateur de frais généraux de post-traitement</strong>. Les frais généraux sont normalement plus larges que les consommables: loyer, extraction, éclairage, filtration d'air, usage du compresseur, maintenance, logiciels, encadrement et temps administratif. Ce calculateur ne prétend pas allouer chaque ligne de frais généraux. À la place, il fournit un sous-total de coût direct propre qui peut alimenter un modèle de devis plus large où les frais généraux et la marge sont appliqués ensuite.",
    },
    {
      type: 'glossary',
      items: [
        { term: "Taux de main-d'œuvre", definition: "Le coût horaire ou le taux de vente attribué au temps de finition manuelle active." },
        { term: 'Consommables', definition: "Matières directes consommées lors du post-traitement, comme les abrasifs, les revêtements, les gants et les liquides de nettoyage." },
        { term: 'Facteur de conversion', definition: "Un multiplicateur global appliqué aux valeurs monétaires pour la mise à l'échelle des devises ou les ajustements de devis." },
        { term: 'Coût direct', definition: "Un coût qui peut être lié à la pièce ou au lot spécifique en cours de finition." },
        { term: 'Frais généraux', definition: "Charges d'entreprise qui soutiennent la production mais ne sont pas consommées par une pièce unique en une quantité simple et mesurable." },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Où va la marge',
      html: "<p>Cet outil calcule le coût de finition avant bénéfice. Appliquez la marge après avoir assemblé matière, temps machine, post-traitement, risque et frais généraux, sinon les travaux à forte intensité de main-d'œuvre risquent d'être sous-tarifés.</p>",
    },
    { type: 'title', text: 'Sélection de devise et facteur de conversion', level: 2 },
    {
      type: 'paragraph',
      html: "La sélection de devise change le symbole et peut convertir les valeurs monétaires existantes à l'aide de facteurs de référence pratiques. Le calcul lui-même est neutre sur la devise: un taux de 30 par heure et 10 en consommables produisent la même structure que le symbole soit l'euro, le dollar, la livre, le yen ou toute autre devise prise en charge. Cela est utile pour les devis internationaux car les calculs restent stables tandis que la présentation correspond au client ou à la localisation de l'atelier.",
    },
    {
      type: 'paragraph',
      html: "Le facteur de conversion existe pour les cas où l'utilisateur ne souhaite pas de conversion automatique du taux de change ou a besoin d'un multiplicateur commercial personnalisé. Un facteur de <code>1</code> signifie que le taux horaire et les consommables sont déjà saisis dans la devise locale choisie. Un facteur de <code>1,15</code> augmente les deux valeurs monétaires de quinze pour cent. Un facteur de <code>0,92</code> les réduit de huit pour cent. Comme le facteur affecte l'argent et non les minutes, la répartition visuelle reste proportionnelle au coût ajusté.",
    },
    {
      type: 'summary',
      title: 'Règles de devise',
      items: [
        "Utilisez le sélecteur pour les symboles et la mise à l'échelle pratique entre devises courantes.",
        "Maintenez le facteur de conversion à 1 quand les saisies sont déjà en devise locale.",
        "Utilisez un facteur personnalisé pour les grilles de prix régionales, les marges sous-traitants ou les ajustements commerciaux temporaires.",
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: "Les taux de change ne sont pas une politique comptable",
      badge: 'Note tarifaire',
      html: "<p>Pour les factures officielles, les taxes ou les rapports comptables, utilisez le taux de change et la politique d'arrondi requis par votre entreprise. Ce calculateur est destiné à l'estimation des coûts de production et à la préparation des devis.</p>",
    },
    { type: 'title', text: 'Utiliser la répartition visuelle pour améliorer la marge', level: 2 },
    {
      type: 'paragraph',
      html: "La barre proportionnelle est plus qu'une décoration. Elle montre quelle phase de finition consomme de l'argent. Si le ponçage domine, changer l'orientation d'impression, la hauteur de couche, l'interface de support ou le matériau peut réduire le temps manuel. Si la peinture domine, le devis a peut-être besoin d'un niveau de finition séparé. Si les consommables dominent, un achat en gros ou un procédé de revêtement différent peut avoir plus d'impact que l'efficacité de la main-d'œuvre. Si le retrait des supports domine, repenser les points de contact de support peut être l'intervention la plus rentable.",
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        "Quand le retrait des supports est la section la plus large, révisez le style, la densité, la distance Z de contact et l'orientation des supports.",
        "Quand le ponçage est le plus important, révisez la hauteur de couche, le positionnement de la couture, la stratégie de remplissage et si la finition devisée est trop élevée pour le prix.",
        "Quand la peinture est la plus importante, séparez les finitions monochrome, masquée et premium en niveaux de devis distincts.",
        "Quand les consommables sont les plus importants, vérifiez si les revêtements, le lavage résine, les abrasifs et les matériaux de masquage sont gaspillés ou sous-récupérés.",
      ],
    },
    {
      type: 'table',
      headers: ['Coût dominant', 'Cause probable', 'Réponse tarifaire'],
      rows: [
        ['Retrait des supports', 'Accès difficile, supports denses, détails fragiles', "Ajouter un supplément de complexité de support ou revoir l'orientation."],
        ['Ponçage', 'Exigence cosmétique élevée, couches visibles, cicatrices de support', 'Créer des niveaux de finition et facturer la préparation prête à peindre.'],
        ['Peinture', 'Masquage, couleurs multiples, nettoyage de cabine', 'Devis la peinture comme ligne de service séparée.'],
        ['Consommables', 'Revêtements, abrasifs, solvants, fournitures de protection', 'Utiliser un suivi direct des consommables ou des frais de matière minimaux.'],
      ],
    },
    {
      type: 'summary',
      title: 'Flux de travail de devis',
      items: [
        "Mesurez les minutes manuelles actives par phase.",
        "Utilisez un taux de finition horaire chargé.",
        "Ajoutez les consommables directs séparément.",
        "Copiez le résultat calculé dans le devis, puis appliquez les frais généraux et la marge dans le modèle tarifaire complet.",
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
