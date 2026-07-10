import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'calculateur-cout-reel-resine-sla-dlp';
const title = 'Calculateur de coût réel de résine pour impressions SLA et DLP';
const description = 'Calculez le coût théorique et réel de la résine avec conversion de densité, volume du slicer et un correcteur de gaspillage de 10 à 15 pour cent pour les pièces SLA et DLP complexes.';

const faqData = [
  {
    question: 'Pourquoi le coût réel de la résine est-il plus élevé que le coût indiqué par le slicer ?',
    answer: 'Le slicer ne rapporte généralement que la résine cuite nette dans le modèle et les supports. Il ne tient pas toujours compte de la résine restée sur le plateau de construction, piégée dans les parois creuses, perdue au lavage, sur les supports ratés ou des résidus qui ne peuvent pas être reversés proprement dans le bidon.',
  },
  {
    question: 'Dois-je saisir des grammes ou des millilitres ?',
    answer: 'Utilisez ce que votre slicer exporte. S\'il indique des grammes, saisissez la densité de la résine depuis le bidon ou la fiche technique pour que le calculateur convertisse la masse en volume avant de calculer le prix de l\'impression.',
  },
  {
    question: 'Quel facteur de complexité dois-je utiliser ?',
    answer: 'Utilisez faible pour les pièces pleines avec des supports simples, moyen pour les figurines typiques et les pièces fonctionnelles en résine, et élevé pour les pièces creuses, les supports denses, les cavités et les pièces qui retiennent de la résine liquide après l\'impression.',
  },
  {
    question: 'Est-ce que cela inclut l\'alcool, les gants, les filtres ou le temps machine ?',
    answer: 'Non. Cet outil isole le coût du matériau résine. Les consommables, la main-d\'œuvre, l\'énergie de post-polymérisation, les échecs et l\'amortissement de la machine doivent être ajoutés dans un devis plus large.',
  },
];

const howToData = [
  {
    name: 'Saisissez les données du bidon',
    text: 'Ajoutez le prix net du bidon, le volume nominal en millilitres et la densité indiquée sur la fiche technique ou l\'étiquette de la résine.',
  },
  {
    name: 'Collez l\'utilisation du slicer',
    text: 'Saisissez la consommation de résine du modèle exportée par Lychee, Chitubox, PrusaSlicer ou un autre slicer, puis choisissez grammes ou millilitres.',
  },
  {
    name: 'Choisissez la complexité',
    text: 'Sélectionnez une complexité faible, moyenne ou élevée pour appliquer un correcteur de gaspillage de 10, 12,5 ou 15 pour cent au volume du slicer.',
  },
  {
    name: 'Comparez le coût théorique et le coût réel',
    text: 'Utilisez le coût théorique pour comparer entre slicers et le coût réel corrigé pour établir des devis, regrouper des lots et planifier le stock de résine.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Bidon de résine',
    modelPanel: 'Modèle du slicer',
    resultPanel: 'Coût réel de résine',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
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
    bottlePriceLabel: 'Prix du bidon',
    bottleVolumeLabel: 'Volume du bidon',
    resinPresetLabel: 'Préréglage de résine',
    resinPresetOptions: [
      { label: 'Personnalisé / densité manuelle', density: '' },
      { label: 'Résine standard générique - 1,10 g/cm3', density: '1.10' },
      { label: 'Résine lavable à l\'eau générique - 1,08 g/cm3', density: '1.08' },
      { label: 'Résine type ABS générique - 1,10 g/cm3', density: '1.10' },
      { label: 'Résine résistante générique - 1,12 g/cm3', density: '1.12' },
      { label: 'Résine flexible générique - 1,05 g/cm3', density: '1.05' },
      { label: 'Résine haute température générique - 1,15 g/cm3', density: '1.15' },
      { label: 'Résine coulable générique - 1,12 g/cm3', density: '1.12' },
      { label: 'Résine à charge céramique générique - 1,35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1,05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1,09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1,12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1,10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1,18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Densité de la résine (g/cm3)',
    modelAmountLabel: 'Quantité du slicer',
    unitLabel: 'Unité de quantité',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Complexité de la pièce',
    lowComplexity: 'Faible',
    mediumComplexity: 'Moyenne',
    highComplexity: 'Élevée',
    lowHint: 'Pièces pleines, supports légers, +10%',
    mediumHint: 'Travail résine typique, +12,5%',
    highHint: 'Pièces creuses ou supports denses, +15%',
    theoreticalCostLabel: 'Coût slicer',
    realCostLabel: 'Coût réel',
    wasteCostLabel: 'Correction de gaspillage',
    correctedVolumeLabel: 'Volume corrigé',
    costPerMlLabel: 'Coût par ml',
    bottlePrintsLabel: 'Impressions par bidon',
    savedSettingsLabel: 'Facteur de gaspillage',
    hollowPartTip: 'Les pièces creuses avec trous de drainage peuvent dépasser 15 pour cent de gaspillage car la résine reste sur les parois intérieures, dans les cavités, sur les supports et pendant le lavage.',
    conversionLabel: 'Volume net du slicer',
    netFromSlicerLabel: 'net du slicer',
    persistenceNote: 'Le prix du bidon, le volume du bidon et la densité sont sauvegardés localement dans ce navigateur.',
  },
  seo: [
    {
      type: 'title',
      text: 'Pourquoi le coût de la résine SLA et DLP nécessite une correction de gaspillage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La quantité de résine affichée par un slicer est un point de départ utile, mais elle n\'est pas équivalente à la quantité de résine qui disparaît du bidon lors d\'une impression réelle. L\'impression SLA, MSLA, LCD et DLP utilise une cuve remplie de photopolymère liquide. La pièce durcit couche par couche, mais la résine non polymérisée recouvre encore le modèle, les supports, le plateau de construction, le film de la cuve et toute cavité interne ouverte au bain de résine. Un calculateur qui multiplie le volume du slicer par le prix au millilitre du bidon donne un nombre théorique propre. Un devis d\'atelier, en revanche, a besoin du nombre corrigé.',
    },
    {
      type: 'paragraph',
      html: 'Ce calculateur sépare le <strong>coût slicer</strong> du <strong>coût réel de la résine</strong>. Le coût slicer est la résine nette rapportée par le logiciel. Le coût réel applique un facteur de gaspillage contrôlé de 10 à 15 pour cent. Cette fourchette est volontairement étroite: elle est suffisamment élevée pour inclure les pertes courantes de manipulation de la résine, mais pas au point de cacher les échecs, la main-d\'œuvre, l\'alcool, les gants, les filtres ou le post-durcissement sous la ligne du matériau. Le résultat est un coût variable pratique du matériau pour une seule impression ou un lot.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Correction faible pour pièces pleines et supports légers' },
        { value: '12,5%', label: 'Correction par défaut pour les travaux de résine normaux' },
        { value: '15%', label: 'Correction élevée pour cavités et supports denses' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ne mélangez pas le coût du matériau avec le coût du travail',
      html: 'Le nombre retourné ici est uniquement le matériau résine. Un prix de vente complet doit également inclure les impressions ratées, l\'alcool de nettoyage, les gants en nitrile, l\'essuie-tout, les filtres, le temps de post-durcissement, l\'emballage, l\'usure de la machine, le temps de conception et la marge.',
    },
    {
      type: 'title',
      text: 'La formule derrière le calculateur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La première étape est le prix du bidon par millilitre: <code>coût_par_ml = prix_bidon / volume_bidon_ml</code>. Un bidon de 1000 ml acheté 42 EUR a un coût de base de 0,042 EUR par ml. Si le slicer indique qu\'une figurine consomme 38 ml, le coût théorique de la résine est de 38 x 0,042, soit 1,60 EUR. Ce nombre est utile pour comparer l\'orientation, l\'évidement, les stratégies de support et les lots dans le slicer, mais il suppose que chaque millilitre rapporté par le slicer est la seule résine consommée.',
    },
    {
      type: 'paragraph',
      html: 'La deuxième étape applique le volume corrigé: <code>volume_réel = volume_slicer x (1 + facteur_gaspillage)</code>. Avec le facteur par défaut de 12,5 pour cent, un modèle de 38 ml devient 42,75 ml. Le coût réel du matériau devient 42,75 x 0,042 EUR, soit 1,80 EUR. La différence est faible sur un petit modèle, mais elle devient visible lors du devis d\'un plateau de figurines, de modèles dentaires, de maîtres de joaillerie, de prototypes d\'ingénierie ou d\'accessoires de production.',
    },
    {
      type: 'table',
      headers: ['Volume slicer', 'Coût bidon', 'Facteur', 'Coût théorique', 'Coût réel'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1,05 EUR', '1,16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12,5%', '3,36 EUR', '3,78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6,30 EUR', '7,25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17,64 EUR', '20,29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez le volume du lot, pas le volume de la pièce, pour les séries de production',
      html: 'Si vous remplissez le plateau de construction avec plusieurs exemplaires, calculez à partir du volume du slicer pour l\'ensemble du plateau. Les tours de support, les structures de support partagées et les changements d\'orientation peuvent rendre le lot plus efficace que la multiplication d\'une pièce isolée par le nombre d\'exemplaires.',
    },
    {
      type: 'title',
      text: 'Choisir le bon facteur de complexité',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Complexité faible',
          description: 'Utilisez 10 pour cent pour les pièces pleines, les supports simples, les pièces de calibrage, les pièces d\'échecs et les modèles avec peu de supports.',
          points: ['Faible rétention interne', 'Faible densité de supports', 'Égouttage facile dans la cuve'],
        },
        {
          title: 'Complexité moyenne',
          description: 'Utilisez 12,5 pour cent pour les figurines normales, les modèles dentaires, les pièces de jeu et les pièces fonctionnelles avec supports modérés.',
          points: ['Pertes de post-traitement typiques', 'Un peu de résine sur les supports', 'Bon facteur de devis par défaut'],
          highlight: true,
        },
        {
          title: 'Complexité élevée',
          description: 'Utilisez 15 pour cent pour les coques creuses, les cavités, les forêts denses de supports, les structures en treillis et les pièces qui laissent des résidus lourds après égouttage.',
          points: ['Plus de liquide piégé', 'Plus de perte au lavage', 'Incertitude de manipulation plus élevée'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Le facteur de complexité n\'est pas une pénalité pour un mauvais tranchage. C\'est une correction du comportement de la résine liquide. Un bloc plein simple incliné correctement peut s\'égoutter presque complètement après quelques minutes. Une statue creuse avec de petits trous de drainage peut retenir un film de résine à l\'intérieur de la paroi, autour des supports et près des coupelles d\'aspiration. Les bases de supports denses retiennent également la résine entre les piliers. Même lorsque vous laissez la pièce s\'égoutter au-dessus de la cuve, la résine qui atteint le récipient de lavage, les gants, l\'essuie-tout et le filtre fait partie du matériau réel consommé par le travail.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Quand 15 pour cent ne suffisent pas',
      html: 'Si un modèle creux a un mauvais drainage, des cavités aveugles, des supports internes épais ou un intérieur texturé, le gaspillage peut dépasser 15 pour cent. Dans ce cas, considérez ce calculateur comme la base de résine et ajoutez une marge de risque séparée dans le devis.',
    },
    {
      type: 'summary',
      title: 'Sélection rapide du facteur',
      items: [
        'Choisissez 10 pour cent quand le modèle est plein, compact et facile à drainer.',
        'Choisissez 12,5 pour cent quand vous n\'êtes pas sûr ou que vous imprimez un plateau mixte.',
        'Choisissez 15 pour cent quand la pièce est creuse, fortement supportée ou géométriquement complexe.',
        'Ajoutez une marge d\'échec séparée lors de l\'impression d\'une nouvelle résine, d\'une nouvelle orientation ou d\'une pièce fragile cliente.',
      ],
    },
    {
      type: 'title',
      text: 'Utiliser la densité quand le slicer rapporte en grammes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De nombreux slicers peuvent rapporter l\'utilisation de résine en millilitres, en grammes ou les deux. Le bidon de résine est généralement vendu par volume nominal, couramment 500 ml, 1000 ml ou 1 litre. Si le slicer exporte en grammes, le calculateur convertit la masse en volume en utilisant la densité: <code>volume_ml = grammes / densité</code>. La densité de la résine est normalement écrite en g/cm3, et 1 cm3 équivaut au même volume que 1 ml. Une résine de densité 1,10 g/cm3 signifie que 110 g équivalent approximativement à 100 ml.',
    },
    {
      type: 'table',
      headers: ['Masse slicer', 'Densité', 'Volume converti', 'Pourquoi c\'est important'],
      rows: [
        ['55 g', '1,10 g/cm3', '50,0 ml', 'Estimation courante pour résine standard'],
        ['55 g', '1,05 g/cm3', '52,4 ml', 'Une densité plus faible signifie plus de volume'],
        ['55 g', '1,20 g/cm3', '45,8 ml', 'Les résines chargées ou céramiques peuvent être plus denses'],
      ],
    },
    {
      type: 'tip',
      title: 'Trouvez la densité sur la fiche technique',
      html: 'Utilisez le catalogue de préréglages pour les résines courantes, puis considérez la saisie de densité comme la source de vérité finale. Si votre résine, couleur ou lot exact diffère du préréglage, remplacez la valeur par celle de la fiche technique du fabricant. Ne supposez pas que toutes les résines sont à 1,00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Densité', definition: 'Masse par unité de volume. Dans le calcul des coûts de résine, elle permet de convertir les grammes du slicer en millilitres du bidon.' },
        { term: 'Coût théorique', definition: 'Le volume net du slicer multiplié par le coût au millilitre du bidon, avant correction de gaspillage.' },
        { term: 'Volume corrigé', definition: 'Le volume du modèle après ajout du facteur de gaspillage sélectionné de 10, 12,5 ou 15 pour cent.' },
        { term: 'Trou de drainage', definition: 'Une ouverture dans une pièce en résine creuse qui permet à la résine non polymérisée de quitter l\'intérieur avant le lavage et le durcissement.' },
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les impressions creuses en résine coûtent souvent plus cher que prévu',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Évider un grand modèle peut réduire considérablement le volume de résine polymérisée, mais cela ne rend pas l\'impression sans coûts cachés. Les parois creuses ont besoin de trous de drainage, la géométrie interne doit être lavable et la résine non polymérisée piégée à l\'intérieur du modèle peut fuir plus tard, fissurer la pièce ou interférer avec le durcissement final. Le slicer peut afficher un volume net bien inférieur après l\'évidement, mais le processus de manipulation devient plus sensible. C\'est pourquoi la complexité élevée utilise 15 pour cent par défaut.',
    },
    {
      type: 'proscons',
      title: 'Évidement et contrôle des coûts',
      items: [
        { pro: 'Les grands modèles d\'exposition peuvent utiliser beaucoup moins de résine polymérisée.', con: 'Un mauvais drainage peut maintenir la résine liquide à l\'intérieur de la pièce.' },
        { pro: 'Des forces de décollement plus faibles peuvent améliorer la réussite sur les grandes sections.', con: 'Les trous supplémentaires, les bouchons et le temps de nettoyage peuvent augmenter la main-d\'œuvre.' },
        { pro: 'Un modèle plus léger est plus facile à expédier et à monter.', con: 'Les parois minces peuvent échouer si l\'épaisseur et l\'exposition ne sont pas réglées.' },
      ],
    },
    {
      type: 'card',
      title: 'Règle pratique pour l\'impression creuse',
      html: 'Si une pièce creuse sort de l\'imprimante et continue de goutter après un égouttage normal, utilisez le facteur élevé et inspectez la disposition des trous de drainage. Si elle continue de fuir après le lavage, le problème n\'est pas seulement le coût ; il peut devenir un problème de qualité et de sécurité car de la résine non polymérisée reste à l\'intérieur de l\'objet.',
    },
    {
      type: 'title',
      text: 'Lire les estimations du slicer sans sous-évaluer le devis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer et d\'autres slicers de résine estiment l\'utilisation de résine à partir du maillage, des supports, de l\'évidement et parfois du profil de résine. Ces estimations sont suffisamment bonnes pour comparer des versions du même travail. Elles sont plus faibles comme devis final car elles ne connaissent pas votre flux de travail. Un atelier qui filtre la résine après chaque travail perd une quantité différente d\'un amateur qui garde la même résine dans la cuve. Un utilisateur qui lave en deux bains d\'IPA perd une quantité différente d\'un utilisateur qui utilise une station de lavage scellée et laisse les pièces s\'égoutter complètement avant de les déplacer.',
    },
    {
      type: 'list',
      items: [
        'Saisissez l\'estimation du plateau complet après les supports, pas le volume du maillage original non supporté.',
        'Utilisez la même devise pour le prix du bidon et le devis final ; le calculateur peut convertir le prix visible du bidon entre les devises courantes avec des facteurs de change approximatifs.',
        'Mettez à jour le prix du bidon lors de l\'achat de résine spécialisée, car les résines coulables, flexibles, dentaires et haute température peuvent coûter plusieurs fois plus que la résine standard.',
        'Utilisez la conversion de densité lorsque la masse du slicer et le volume du bidon ne partagent pas la même unité.',
        'Gardez le taux d\'échec séparé, surtout lors de l\'impression de figurines fragiles, de coques dentaires fines ou de nouvelles stratégies de support.',
      ],
    },
    {
      type: 'message',
      title: 'Meilleure habitude de devis',
      html: 'Enregistrez les données de votre bidon de résine courant, collez l\'estimation du slicer, choisissez la complexité et notez les deux nombres. Le coût théorique explique l\'estimation du slicer ; le coût réel protège votre inventaire de matériau.',
    },
    {
      type: 'title',
      text: 'Ce que ce calculateur n\'inclut pas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une impression en résine a plus de coûts que la résine elle-même. Cet outil se concentre volontairement sur la consommation variable de résine car c\'est le nombre le plus souvent sous-estimé lors de la comparaison entre la sortie du slicer et l\'utilisation réelle du bidon. Il n\'inclut pas le remplacement de l\'alcool, le détergent, le traitement de l\'eau, l\'essuie-tout, les gants jetables, l\'usure du film FEP ou de libération, le vieillissement de l\'écran LCD, l\'amortissement de l\'imprimante, l\'électricité, le temps de post-durcissement, le ponçage, l\'apprêt, le retrait des supports, l\'emballage ou les frais de plateforme.',
    },
    {
      type: 'table',
      headers: ['Élément de coût', 'Inclus ici ?', 'Où le comptabiliser'],
      rows: [
        ['Résine liquide utilisée par l\'impression', 'Oui', 'Ce calculateur'],
        ['Résidu de résine et gaspillage normal de manipulation', 'Oui', 'Facteur de complexité'],
        ['Impressions ratées', 'Non', 'Ajouter une marge d\'échec par matériau et risque du modèle'],
        ['IPA, gants, serviettes, filtres', 'Non', 'Poste consommables'],
        ['Retrait des supports et ponçage', 'Non', 'Poste main-d\'œuvre ou finition'],
        ['Amortissement de l\'imprimante', 'Non', 'Taux horaire machine'],
      ],
    },
    {
      type: 'summary',
      title: 'Flux de travail fiable pour le coût de la résine',
      items: [
        'Calculez le prix au millilitre du bidon que vous avez réellement acheté.',
        'Convertissez les grammes en millilitres avec la densité de la résine si nécessaire.',
        'Utilisez la sortie du slicer après supports et évidement.',
        'Appliquez une correction de 10 à 15 pour cent selon la géométrie et la perte de manipulation.',
        'Gardez les échecs, la main-d\'œuvre, les consommables et la marge en dehors du nombre de matériau résine.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
