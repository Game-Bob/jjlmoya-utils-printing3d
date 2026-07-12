import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'calculateur-temps-cuisson-uv-resine-technique';
const title = 'Calculateur de Temps de Cuisson UV pour Résine Technique';
const description = 'Estimez le temps de post- durcissement sûr des résines SLA en fonction du type de résine, de l\'épaisseur maximale de paroi, de la puissance de la station de lavage et de durcissement, et de la longueur d\'onde UV.';

const faqData = [
  { question: 'Combien de temps dois-je durcir les impressions en résine SLA ?', answer: 'Le temps correct dépend du type de résine, de l\'épaisseur de paroi, de la puissance de la station de durcissement, de la longueur d\'onde et de la géométrie d\'exposition. Les petites pièces en résine standard peuvent nécessiter seulement quelques minutes, tandis que les pièces épaisses en résine technique nécessitent plus de temps mais doivent respecter une limite de sécurité.' },
  { question: 'Un excès de cuisson UV peut-il rendre la résine cassante ?', answer: 'Oui. Une exposition UV excessive peut rendre de nombreuses pièces en résine photopolymère cassantes, jaunes ou moins flexibles. Le calculateur limite le temps lorsque l\'estimation brute entre dans une région de dégradation.' },
  { question: 'Les impressions en résine doivent-elles être sèches avant le durcissement ?', answer: 'Oui. Les impressions en résine doivent être propres et complètement sèches avant le durcissement UV. Les résidus d\'alcool peuvent provoquer un blanchiment, une contamination piégée et des résultats de post-durcissement incohérents.' },
  { question: 'Le 385 nm ou le 405 nm est-il meilleur pour le durcissement de la résine ?', answer: 'Aucun n\'est universellement meilleur. La meilleure longueur d\'onde est celle qui correspond au système photo-initiateur de la résine et à la station de durcissement. De nombreuses résines de bureau sont optimisées pour le 405 nm, tandis que certaines résines techniques répondent bien au 385 nm.' },
];

const howToData = [
  { name: 'Sélectionnez le préréglage de résine', text: 'Choisissez standard, flexible, rigide/résistante, coulable ou brûlable selon le flacon de résine ou l\'utilisation prévue.' },
  { name: 'Entrez la paroi la plus épaisse', text: 'Mesurez l\'épaisseur maximale de paroi qui doit recevoir le post-durcissement UV.' },
  { name: 'Entrez les paramètres de la station', text: 'Réglez la puissance de la station de durcissement et la longueur d\'onde pour correspondre à votre chambre UV.' },
  { name: 'Suivez la liste de contrôle de sécurité', text: 'Séchez la pièce, exposez chaque face, retirez les supports qui projettent des ombres et respectez la valeur maximale sécurisée du minuteur.' },
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
  { type: 'title', text: 'Comment le Temps de Post-Durcissement de la Résine SLA Est Choisi', level: 2 },
  {
    type: 'paragraph',
    html: 'Le post-durcissement est l\'exposition UV contrôlée appliquée après le lavage d\'une impression en résine. Le but n\'est pas simplement de rendre la surface sèche au toucher. Une pièce SLA ou MSLA correctement durcie atteint une meilleure conversion des groupes réactifs au sein du réseau polymère, ce qui améliore la rigidité, la résistance à la chaleur, la stabilité dimensionnelle et la sécurité de manipulation. Le sous-durcissement laisse des surfaces collantes, faibles ou chimiquement actives. Le sur-durcissement peut pousser le matériau vers la fragilisation, le jaunissement visible et la perte d\'élongation. Un <strong>estimateur de temps de cuisson UV pour résine SLA</strong> utile doit donc équilibrer la chimie de la résine, l\'épaisseur de paroi, l\'intensité lumineuse, la longueur d\'onde, la température et la géométrie d\'exposition.',
  },
  {
    type: 'paragraph',
    html: 'Le calculateur utilise des préréglages de résine car différentes familles de résines ne répondent pas de manière identique. Une résine de bureau standard durcit généralement plus vite qu\'une formulation flexible de type uréthane. La résine technique rigide ou résistante nécessite souvent une exposition plus longue et parfois une chaleur douce pour s\'approcher des propriétés de sa fiche technique. Les résines coulables et brûlables sont sensibles car un durcissement excessif peut augmenter la fragilité ou les problèmes liés aux cendres. Le résultat est une valeur de minuteur recommandée, une limite supérieure de sécurité, une température cible optionnelle et une distance de lumière pratique.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'longueurs d\'onde courantes de durcissement des résines de bureau' },
      { value: '1-22 min', label: 'sortie typique avec limite de sécurité du calculateur' },
      { value: '0,4-12 mm', label: 'plage du modèle d\'épaisseur de paroi' },
      { value: '6-120 W', label: 'plage de puissance de la station de durcissement' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Ne jamais durcir des impressions en résine humides',
    html: 'L\'alcool laissé sur la pièce peut piéger des résidus non durcis, blanchir les surfaces, contaminer la chambre de durcissement et déformer la relation entre la dose UV et le comportement final du matériau. Lavez d\'abord, laissez la pièce sécher complètement, puis durcissez.',
  },
  { type: 'title', text: 'Pourquoi l\'Épaisseur de Paroi Modifie le Temps de Durcissement UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Une coque miniature fine et un support fonctionnel épais peuvent utiliser la même résine mais nécessitent un comportement de post-durcissement différent. La lumière UV est absorbée et diffusée par les pigments, les charges, les photo-initiateurs et le polymère lui-même. La surface reçoit la dose la plus forte, tandis que le matériau plus profond reçoit moins d\'énergie. C\'est pourquoi le calculateur demande l\'<strong>épaisseur maximale de paroi</strong> plutôt que la hauteur totale ou la masse totale. La section optiquement pertinente la plus épaisse est la partie la plus susceptible de rester sous-durcie alors que l\'extérieur semble déjà terminé.',
  },
  {
    type: 'paragraph',
    html: 'L\'augmentation est proportionnelle mais pas parfaitement linéaire. Doubler l\'épaisseur de paroi ne nécessite pas toujours exactement le double de la valeur du minuteur car le durcissement se poursuit également depuis plusieurs faces lorsque la pièce est tournée et parce que de nombreuses impressions en résine sont creuses. Le modèle utilise un exposant spécifique à la résine: les résines résistantes évoluent plus agressivement avec l\'épaisseur, tandis que les profils coulables restent sous une limite de sécurité plus stricte. Pour les pièces solides très épaisses, la meilleure solution est souvent l\'évidement, le drainage, la rotation et le durcissement par étapes plutôt qu\'une seule exposition longue.',
  },
  {
    type: 'table',
    headers: ['Condition géométrique', 'Implication de durcissement', 'Action pratique'],
    rows: [
      ['Coque cosmétique fine', 'Faible demande de durcissement interne', 'Utilisez le temps calculé sans ajouter de minutes supplémentaires.'],
      ['Mamelon ou patte solide épais', 'Risque élevé de noyau sous-durci', 'Entrez l\'épaisseur maximale de paroi locale, pas l\'épaisseur moyenne de la coque.'],
      ['Pièce creuse avec trous de drainage', 'La lumière atteint l\'extérieur ; l\'intérieur peut rester ombragé', 'Durcissez d\'abord l\'extérieur, puis exposez l\'intérieur si la géométrie le permet.'],
      ['Résine opaque ou foncée', 'Pénétration plus faible et plus de diffusion', 'Restez près des instructions du fabricant et tournez plus souvent.'],
    ],
  },
  {
    type: 'tip',
    title: 'Mesurez la paroi structurelle la plus épaisse',
    html: 'Pour une impression en résine creuse, utilisez la coque la plus épaisse ou la nervure de renforcement. Pour une pièce technique pleine, utilisez la section pleine la plus épaisse qui doit atteindre les propriétés mécaniques finales.',
  },
  { type: 'title', text: 'Puissance de la Station, Distance et Dose UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Une station de lavage et de durcissement nominale à 40 W ne délivre pas 40 W d\'énergie UV utile dans chaque centimètre carré de la pièce. La puissance nominale inclut les pertes électriques et optiques, la disposition des LED, la réflectivité de la chambre, la couverture du plateau rotatif et la distance de la source lumineuse. Néanmoins, la puissance est un estimateur utile: une station haute puissance nécessite généralement un minuteur plus court qu\'une boîte de durcissement faible de type lampe à ongles. Le calculateur applique un facteur de puissance inverse pour que le minuteur diminue à mesure que la puissance de la station augmente.',
  },
  {
    type: 'paragraph',
    html: 'La distance compte car l\'irradiance diminue à mesure que la pièce s\'éloigne des LED, et parce qu\'un placement très proche peut créer des points chauds. Une pièce placée trop près d\'une rangée de LED peut durcir agressivement une face tandis que les coins ou les surfaces en retrait restent mous. Une pièce placée trop loin peut nécessiter une exposition plus longue, mais l\'ajout de temps peut sur-durcir les faces déjà illuminées. C\'est pourquoi la sortie inclut une distance recommandée en centimètres ou en pouces. C\'est un contrôle de géométrie, pas simplement une valeur de commodité.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Trop près',
        description: 'Une intensité locale élevée crée une dose inégale et un stress de surface.',
        points: ['Jaunissement sur les faces exposées', 'Détails fins cassants', 'Cavités ombragées restent sous-durcies'],
      },
      {
        title: 'Équilibré',
        description: 'Une distance modérée permet à la chambre et au plateau rotatif de distribuer les UV plus uniformément.',
        highlight: true,
        points: ['Résultat mécanique plus propre', 'Moins de risque de points chauds', 'Meilleure répétabilité'],
      },
      {
        title: 'Trop loin',
        description: 'Une faible irradiance encourage les utilisateurs à compenser par un temps excessif.',
        points: ['Cycles longs', 'Durcissement incohérent', 'Fausse confiance due aux surfaces sèches'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Tournez lorsque la chambre n\'expose pas toutes les faces',
    html: 'Si une pièce a des creux profonds, des contre-dépouilles ou de larges côtés plats, divisez l\'exposition en cycles plus courts et tournez la pièce. Une dose uniforme est généralement préférable à un long durcissement statique.',
  },
  { type: 'title', text: '385 nm Versus 405 nm dans le Durcissement de la Résine', level: 2 },
  {
    type: 'paragraph',
    html: 'La plupart des imprimantes MSLA grand public et des stations de durcissement utilisent des LED à 405 nm car cette longueur d\'onde correspond à de nombreux systèmes photo-initiateurs de bureau et est efficace pour des matrices de LED abordables. Certaines résines techniques répondent également fortement à 385 nm, une longueur d\'onde plus courte plus proche de la gamme UV-A. La différence n\'est pas automatiquement meilleure ou pire. Une résine formulée pour 405 nm peut nécessiter plus de temps sous 385 nm si le spectre n\'est pas adapté ; une autre résine peut durcir efficacement à 385 nm. Le calculateur traite la longueur d\'onde comme un multiplicateur dépendant de la résine.',
  },
  {
    type: 'paragraph',
    html: 'L\'action importante de l\'utilisateur est la cohérence. Si un fabricant de résine spécifie un programme de post-durcissement pour une unité de durcissement, une longueur d\'onde et une température particulières, utilisez ce programme comme référence. Utilisez ce calculateur lorsque la résine est générique, lorsque la puissance de la station diffère de la machine de référence, ou lorsque la géométrie d\'impression est plus épaisse qu\'un simple coupon d\'étalonnage. Ne mélangez pas un programme industriel à 385 nm avec une station de bureau à 405 nm sans ajuster les hypothèses d\'exposition.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Photo-initiateur', definition: 'Composant de la résine qui absorbe la lumière et déclenche les réactions de polymérisation.' },
      { term: 'Dose UV', definition: 'L\'énergie lumineuse accumulée reçue par la pièce pendant le durcissement, influencée par l\'irradiance et le temps.' },
      { term: 'Post-durcissement', definition: 'Traitement UV et parfois thermique après le lavage qui améliore les propriétés du matériau au-delà de l\'état imprimé.' },
      { term: 'Sur-durcissement', definition: 'Exposition excessive qui peut rendre une pièce en résine cassante, jaune, déformée ou moins résistante aux chocs.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Sec au toucher n\'est pas la même chose que complètement durci',
    html: 'Une surface en résine peut cesser d\'être collante avant que le réseau interne n\'atteigne le comportement mécanique prévu. Utilisez la géométrie, le type de résine et la puissance de la station plutôt que la sensation en surface.',
  },
  { type: 'title', text: 'Préréglages de Résine et Risque Mécanique', level: 2 },
  {
    type: 'paragraph',
    html: 'Les résines standard sont généralement optimisées pour la facilité d\'impression et le post-traitement rapide. Elles sont la catégorie la plus indulgente dans le calculateur. Les résines flexibles nécessitent une manipulation plus prudente car la propriété souhaitée est l\'élongation, pas la dureté maximale. Trop d\'UV peut réduire la flexibilité et transformer une pièce molle en quelque chose qui se fissure plus tôt. Les résines rigides et résistantes nécessitent souvent plus de dose pour développer leur résistance, mais elles ont aussi une limite supérieure au-delà de laquelle un durcissement supplémentaire n\'améliore plus les performances et augmente plutôt la fragilité.',
  },
  {
    type: 'paragraph',
    html: 'Les résines coulables et brûlables ont une priorité différente. Leur utilisation finale peut impliquer la coulée d\'investissement ou la combustion propre, donc la qualité de surface, le comportement des cendres et la stabilité dimensionnelle sont importants. Une pièce coulable fortement sur-durcie peut devenir fragile pendant la manipulation ou mal performer dans les étapes de processus en aval. Le calculateur applique une limite plus stricte à ces catégories car le flux de travail le plus sûr est un durcissement contrôlé, pas une exposition maximale.',
  },
  {
    type: 'table',
    headers: ['Préréglage de résine', 'Objectif principal', 'Symptôme de sur-durcissement', 'Comportement du calculateur'],
    rows: [
      ['Standard', 'Dureté générale et manipulation sûre', 'Jaunissement et détails fins cassants', 'Temps de base modéré et limite moyenne.'],
      ['Flexible', 'Maintenir l\'élongation tout en supprimant le collant', 'Perte de flexibilité et déchirure', 'Temps de base plus long avec sensibilité de dose prudente.'],
      ['Rigide / Résistante', 'Atteindre la rigidité et la résistance techniques', 'Rupture fragile au lieu d\'un échec résistant', 'Temps de base plus élevé et durcissement à chaud optionnel.'],
      ['Coulable', 'Manipulation propre avant le processus de coulée', 'Motifs fragiles et assombrissement de surface', 'Limite de sécurité plus basse pour éviter une exposition agressive.'],
      ['Brûlable', 'Durcissement contrôlé avant la combustion thermique', 'Écaillage ou contrainte dimensionnelle', 'Temps modéré avec limite conservatrice.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Ajouter des minutes supplémentaires après le calculateur',
    items: [
      { pro: 'Peut aider si une face était ombragée pendant un cycle court.', con: 'Peut dégrader les faces déjà exposées lorsque la pièce n\'a pas été tournée.' },
      { pro: 'Peut réduire le collant sur les pièces très épaisses ou foncées.', con: 'Peut rendre les résines résistantes et flexibles plus cassantes.' },
      { pro: 'Utile comme deuxième cycle court après inspection.', con: 'Dangereux comme habitude de routine sans vérifier la limite de sécurité.' },
    ],
  },
  { type: 'title', text: 'Température Pendant le Post-Durcissement de la Résine Technique', level: 2 },
  {
    type: 'paragraph',
    html: 'Certaines résines techniques spécifient une température de post-durcissement élevée car la chaleur augmente la mobilité moléculaire et aide le réseau polymère à atteindre ses propriétés prévues. Le durcissement à chaud peut améliorer la température de déflexion thermique, le module et la résistance finale pour les matériaux compatibles. Il ne doit pas être appliqué aveuglément à chaque résine. Une miniature imprimée en résine standard peut ne pas nécessiter de chaleur du tout, tandis qu\'une résine technique résistante peut bénéficier de 40-60 °C selon les données du fabricant. Le calculateur renvoie donc la température ambiante pour les familles de résine où la chaleur n\'est pas supposée, et une température cible modeste là où elle est utile.',
  },
  {
    type: 'paragraph',
    html: 'Le contrôle de la température est aussi un problème de sécurité. Trop de chaleur peut déformer les sections minces, ramollir les cicatrices de supports ou accélérer le jaunissement. Une station de lavage et de durcissement sans chambre chauffée ne doit pas être traitée comme équivalente à un four de laboratoire. Si la fiche technique de la résine spécifie un cycle thermique précis, cette fiche technique prévaut. Le calculateur est un estimateur pratique pour les flux de travail de bureau courants, pas un remplacement pour la validation de processus médicaux, dentaires, aérospatiaux ou de coulée certifiés.',
  },
  {
    type: 'card',
    title: 'Quand la sortie indique température ambiante',
    html: 'Température ambiante signifie que le calculateur ne nécessite pas de post-durcissement chauffé pour ce préréglage de résine. Cela ne signifie pas que la pièce peut durcir froide, humide ou dans un atelier plein de courants d\'air. Gardez la pièce sèche et laissez la résine atteindre une température intérieure normale avant l\'exposition.',
  },
  {
    type: 'tip',
    title: 'Évitez de durcir immédiatement après le retrait de l\'IPA',
    html: 'Après le lavage, laissez l\'alcool s\'évaporer des trous, des cavités et du texte en relief. Dix à trente minutes de séchage peuvent compter plus que l\'ajout d\'une minute supplémentaire d\'UV.',
  },
  { type: 'title', text: 'Diagnostic des Pièces en Résine Sous-Durcies et Sur-Durcies', level: 2 },
  {
    type: 'paragraph',
    html: 'Les pièces en résine sous-durcies présentent généralement des surfaces collantes, des petites caractéristiques faibles, une odeur persistante, des bords mous ou des résidus qui se transfèrent sur les gants. Ces symptômes sont plus fréquents lorsque la pièce n\'a pas été lavée soigneusement, a été durcie humide, avait une épaisseur de paroi importante ou était à l\'ombre dans la chambre. Les pièces sur-durcies présentent des symptômes différents: rupture cassante, jaunissement, surfaces crayeuses, bords fins recourbés ou perte de flexibilité. La solution dépend du symptôme. Plus d\'UV n\'est pas la réponse à chaque problème d\'impression en résine.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Cassant et jaune signifie arrêter d\'ajouter de l\'exposition',
    html: 'Si une pièce est déjà devenue cassante ou visiblement jaune, un durcissement supplémentaire ne retrouvera pas la ténacité. Réimprimez, réduisez la valeur du minuteur, améliorez la rotation et respectez la limite.',
  },
  {
    type: 'summary',
    title: 'Ordre de dépannage',
    items: [
      'Confirmez que la pièce a été lavée et séchée avant le durcissement.',
      'Vérifiez si les supports ou l\'orientation du modèle ont créé des ombres UV.',
      'Entrez la paroi la plus épaisse, pas la taille moyenne du modèle.',
      'Utilisez la limite de sécurité lorsque l\'estimation brute serait trop longue.',
      'Tournez les pièces complexes au lieu de prolonger une exposition statique.',
    ],
  },
  {
    type: 'table',
    headers: ['Symptôme', 'Cause probable', 'Correction'],
    rows: [
      ['Surface collante après durcissement', 'Résine résiduelle ou IPA, dose insuffisante ou face ombragée', 'Relavez si contaminé, séchez complètement, puis appliquez un court cycle rotatif.'],
      ['Les détails fins se cassent facilement', 'Sur-durcissement ou résine intrinsèquement cassante', 'Réduisez le minuteur et évitez le placement proche des LED.'],
      ['Un côté jaune, l\'autre mou', 'Exposition inégale de la chambre', 'Augmentez la distance et tournez pendant le durcissement.'],
      ['La résine flexible devient rigide', 'Dose trop élevée pour le comportement élastomère', 'Utilisez moins de temps et arrêtez au toucher non collant.'],
    ],
  },
  { type: 'title', text: 'Comment Utiliser Ce Calculateur de Temps de Station de Lavage et Durcissement UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Commencez avec le préréglage de résine le plus proche de l\'étiquette du matériau. Si le flacon indique résistant, rigide, type ABS, technique ou haute résistance aux chocs, utilisez le préréglage rigide/résistante. S\'il est élastique, flexible ou caoutchouteux, utilisez flexible. Pour la coulée d\'investissement ou les flux de travail sans cendres, utilisez coulable ou brûlable. Mesurez ensuite l\'épaisseur maximale de paroi. Entrez la puissance nominale de la station de durcissement et choisissez 385 nm ou 405 nm selon la documentation de la station ou de la résine. La valeur du minuteur de sortie est le premier cycle que vous devez exécuter.',
  },
  {
    type: 'paragraph',
    html: 'Avant d\'appuyer sur démarrer, utilisez la liste de contrôle. La pièce doit être sèche, visible sous plusieurs angles et exempte de structures de support qui projettent des ombres. Si le modèle est complexe, durcissez pendant une partie du temps recommandé, tournez-le et terminez le reste du cycle. Si le calculateur avertit que la limite de sécurité a été appliquée, ne la remplacez pas par une exposition longue. La limite existe car cette catégorie de résine est plus susceptible de se dégrader que de s\'améliorer au-delà de ce point.',
  },
  {
    type: 'list',
    items: [
      'Utilisez les instructions du fabricant lorsqu\'une fiche technique de résine donne un cycle de post-durcissement validé.',
      'Utilisez ce calculateur lorsque la puissance de la station, la longueur d\'onde ou l\'épaisseur de la pièce diffèrent du flux de travail de référence.',
      'Ne durcissez pas les pièces qui sentent fortement le solvant ou qui ont du liquide piégé dans les trous de drainage.',
      'Ne supposez pas qu\'une lumière plus forte est plus sûre ; elle peut créer un sur-durcissement local plus rapide.',
      'Enregistrez les temps réussis par résine, couleur, épaisseur de paroi et modèle de station.',
    ],
  },
  {
    type: 'summary',
    title: 'Règle de post durcissement sûr',
    items: [
      'Nettoyez d\'abord.',
      'Séchez complètement.',
      'Durcissez dans la fenêtre calculée.',
      'Tournez pour la couverture.',
      'Arrêtez avant que la résine ne devienne cassante, jaune ou déformée.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Contrôles de saisie de durcissement UV de résine technique',
    resultsAriaLabel: 'Paramètres recommandés de post-durcissement de résine',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    resinGroupLabel: 'Préréglage de résine',
    stationGroupLabel: 'Station de durcissement',
    preparationLabel: 'Avant le durcissement',
    resinTypeLabel: 'Type de résine',
    standardLabel: 'Standard',
    flexibleLabel: 'Flexible',
    toughLabel: 'Rigide / Résistante',
    castableLabel: 'Coulable',
    burnoutLabel: 'Brûlable',
    wallThicknessLabel: 'Épaisseur maximale de paroi',
    wallThicknessHelp: 'Utilisez la paroi ou coque solide la plus épaisse que la lumière UV doit traverser pour durcir.',
    stationPowerLabel: 'Puissance de la station',
    stationPowerHelp: 'Puissance électrique nominale de la station de durcissement ou du réseau de lampes UV.',
    wavelengthLabel: 'Longueur d\'onde',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'La pièce doit être propre et parfaitement sèche avant l\'exposition UV. Ne durcissez pas les pièces qui portent encore de l\'alcool.',
    dryCheckLabel: 'La pièce est-elle totalement sèche et exempte de résidus d\'alcool ?',
    exposureCheckLabel: 'La pièce est-elle positionnée pour que la lumière atteigne chaque face ?',
    supportsCheckLabel: 'La pièce est-elle exempte de supports qui pourraient projeter des ombres ?',
    degradationWarning: 'Un temps de durcissement excessif rend la pièce cassante et jaune. Respectez les limites techniques.',
    recommendedTimeLabel: 'Réglage du minuteur',
    temperatureLabel: 'Température de durcissement',
    noTemperatureLabel: 'Ambiante',
    ambientTemperatureNoteMetric: 'Durcissez à température ambiante (18-25 °C). Aucune chambre chauffée n\'est requise pour ce préréglage.',
    ambientTemperatureNoteImperial: 'Durcissez à température ambiante (64-77 °F). Aucune chambre chauffée n\'est requise pour ce préréglage.',
    distanceLabel: 'Distance de la lumière',
    maxSafeLabel: 'Limite de sécurité',
    doseIndexLabel: 'Indice de dose UV',
    safetySafeLabel: 'Dans la fenêtre sûre',
    safetyCautionLabel: 'Près de la limite supérieure',
    safetyLimitLabel: 'Limite de sécurité appliquée',
    limitMessage: 'L\'exposition demandée dépasserait la limite de sécurité de la résine. Utilisez la valeur du minuteur limitée et tournez la pièce entre les cycles si des faces sont ombragées.',
    cautionMessage: 'La recommandation est techniquement utilisable mais proche de la région de dégradation. Gardez la pièce sèche, tournez-la et évitez d\'ajouter des minutes supplémentaires par habitude.',
    safeMessage: 'La recommandation se situe dans la fenêtre normale de post-durcissement pour ce profil de résine et cette puissance de station.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
