import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'calculateur-efficacite-production-additive';
const title = 'Calculateur d\'Efficacité de Production Additive';
const description =
  'Comparez l\'impression par lots vs. l\'impression séquentielle avec le temps d\'impression, la surcharge de préchauffage, les transitions de déplacement, le temps de purge, le risque statistique de défaillance et une recommandation automatique de viabilité.';

const faqData = [
  {
    question: 'Quand l\'impression par lots est-elle plus rapide que l\'impression séquentielle ?',
    answer:
      'L\'impression par lots est généralement plus rapide lorsque le préchauffage est significatif, que les pièces tiennent en toute sécurité sur le plateau de construction, que la distance de déplacement entre les pièces est modérée et que le taux d\'échec historique est suffisamment bas pour que le risque combiné du lot reste sous le seuil critique.',
  },
  {
    question: 'Pourquoi l\'impression séquentielle peut-elle être recommandée même si elle prend plus de temps ?',
    answer:
      'L\'impression séquentielle limite la perte d\'une pièce défaillante. Si le risque du lot calculé comme 1 - (1 - taux d\'échec)^N dépasse le seuil critique, le calculateur recommande l\'impression séquentielle pour protéger la file de production.',
  },
  {
    question: 'Le calculateur remplace-t-il les estimations du slicer ?',
    answer:
      'Non. Un slicer connaît les trajectoires exactes, les accélérations, les largeurs d\'extrusion, le refroidissement et les jeux de collision. Ce calculateur est destiné à la planification de production avant le slicer, en particulier pour comparer un travail sur plateau complet à des travaux répétés sur une seule pièce.',
  },
  {
    question: 'Quel taux d\'échec dois-je saisir ?',
    answer:
      'Utilisez votre propre historique d\'atelier pour un matériau, une imprimante, une géométrie et des conditions d\'opérateur similaires. Si vous ne le suivez pas encore, commencez prudemment avec 2 à 5 % pour la production FDM calibrée et augmentez pour les nouveaux matériaux, les travaux longs ou les supports mal validés.',
  },
];

const howToData = [
  { name: 'Saisissez la quantité', text: 'Définissez le nombre total de pièces nécessaires pour la série de production.' },
  { name: 'Ajoutez les temps', text: 'Saisissez le temps d\'impression par pièce, le temps de préchauffage, la distance de transition, la vitesse de déplacement et le temps de purge ou de stabilisation.' },
  { name: 'Définissez le risque historique', text: 'Utilisez un pourcentage d\'échec issu de travaux comparables et choisissez le risque maximal acceptable pour le lot.' },
  { name: 'Lisez la recommandation', text: 'Comparez le temps total, le temps gagné, l\'efficacité relative, la surcharge de transition et le risque statistique du lot.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entrées d\'efficacité de production additive',
    resultsAriaLabel: 'Résultats d\'efficacité de production additive',
    visualizerAriaLabel: 'Visualisation générative du risque et de la disposition du plateau',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    piecesLabel: 'Pièces',
    unitPrintTimeLabel: 'Temps d\'impression par pièce (min)',
    preheatTimeLabel: 'Temps de préchauffage (min)',
    transitionDistanceLabel: 'Transition moyenne',
    travelSpeedLabel: 'Vitesse de déplacement',
    failureRateLabel: 'Taux d\'échec historique',
    purgeTimeLabel: 'Purge / stabilisation (min)',
    criticalRiskLabel: 'Risque critique du lot',
    batchLabel: 'Impression par lots',
    sequentialLabel: 'Impression séquentielle',
    recommendationLabel: 'Stratégie recommandée',
    savingsLabel: 'Gain de temps absolu',
    efficiencyLabel: 'Efficacité relative',
    riskLabel: 'Risque d\'échec du lot',
    layoutLabel: 'Chorégraphie du plateau',
    transitionLabel: 'Surcharge de transition',
    batchWinsLabel: 'Lot',
    sequentialWinsLabel: 'Séquentiel',
    riskOverrideLabel: 'dérogation de risque',
    fasterLabel: 'gagné',
    slowerLabel: 'supplément',
    lowRiskLabel: 'Risque de lot faible',
    moderateRiskLabel: 'Risque de lot modéré',
    criticalRiskStatusLabel: 'Risque de lot critique',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
  },
  seo: [
    { type: 'title', text: 'Impression par Lots vs. Impression Séquentielle: Ce que Mesure le Calculateur', level: 2 },
    {
      type: 'paragraph',
      html: 'Choisir entre <strong>l\'impression par lots et l\'impression séquentielle</strong> n\'est pas seulement une question de remplissage du plateau de construction. Un lot sur plateau complet peut économiser du temps de chauffage et réduire l\'intervention de l\'opérateur, mais il concentre le risque de production dans une longue fenêtre d\'exposition. L\'impression séquentielle répète la surcharge de configuration, mais isole les défaillances afin qu\'une mauvaise pièce ne contamine pas automatiquement la valeur de l\'ensemble du plateau. Ce calculateur transforme ce compromis en chiffres: minutes totales, transitions de déplacement, efficacité relative et risque statistique du lot.',
    },
    {
      type: 'paragraph',
      html: 'La formule du lot est <code>Tlot = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. La formule séquentielle est <code>Tseq = N x (Tc + Tp + Tpurge)</code>. La formule de risque est <code>Risquelot = 1 - (1 - Péchec)^N</code>. Ces équations sont intentionnellement transparentes car la planification de production est plus facile lorsque la raison derrière une recommandation est visible plutôt que cachée dans une boîte noire.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Cycle de préchauffage en mode lot', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Cycles de préchauffage en mode séquentiel', icon: 'mdi:repeat' },
        { value: '60', label: 'Secondes utilisées pour normaliser le déplacement en minutes', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Modèle composé de défaillance de lot', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez une définition cohérente de l\'échec',
      html: '<p>Un taux d\'échec n\'est utile que si l\'atelier définit l\'échec de manière cohérente. Décidez s\'il inclut les rebuts cosmétiques, les écarts dimensionnels, les cicatrices de support, les échecs de première couche, les enchevêtrements de bobine, les coupures de courant et les retraits par l\'opérateur. Mélanger les definitions donne l\'impression que le modèle de risque est précis alors qu\'il est alimenté par des données bruitées.</p>',
    },
    { type: 'title', text: 'Comment l\'Impression par Lots Économise du Temps', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'impression par lots gagne normalement sur l\'utilisation de la machine lorsque le temps de préchauffage est important par rapport au temps d\'impression d\'une seule pièce. Chauffer le plateau et la buse une fois pour un tirage de 24 pièces peut éviter 23 cycles de réchauffage répétés. Dans un environnement de ferme, cela compte car le chauffage est une capacité morte: l\'imprimante consomme du temps calendaire, de l\'énergie et de l\'attention de l\'opérateur avant de produire une géométrie vendable.',
    },
    {
      type: 'paragraph',
      html: 'Le terme de déplacement empêche le modèle de faire comme si les dispositions par lots étaient gratuites. Chaque pièce peut ajouter une transition sans impression où la buse traverse le plateau, évite les îlots, effectue des mouvements de peignage ou se déplace vers la limite de l\'objet suivant. Le calculateur utilise la distance moyenne de transition et la vitesse de déplacement pour estimer cette surcharge en minutes. Le terme est faible sur les dispositions compactes et plus visible lorsque les pièces sont réparties sur un grand plateau.',
    },
    {
      type: 'table',
      headers: ['Variable du lot', 'Signification en production', 'Erreur de planification qu\'elle prévient'],
      rows: [
        ['N', 'Total des pièces dans le tirage', 'Traiter un plateau de dix pièces comme dix travaux isolés sans préchauffage partagé.'],
        ['Tp', 'Temps d\'impression d\'une pièce complète', 'Utiliser le temps de couche d\'une seule petite caractéristique au lieu d\'une estimation de pièce finie.'],
        ['Tc', 'Temps de chauffage du plateau et de la buse', 'Ignorer le temps avant le début de l\'extrusion lors de la planification de la capacité.'],
        ['Dtrans', 'Distance moyenne entre les pièces', 'Supposer qu\'un plateau dense n\'a pas de pénalité de mouvement sans extrusion.'],
        ['Vtravel', 'Vitesse de déplacement de la tête', 'Oublier que les profils de déplacement lents rendent les dispositions étendues moins efficaces.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Le temps du lot est le plus sensible au préchauffage et à la quantité',
      badge: 'Planification de capacité',
      html: '<p>Si le préchauffage est de 12 minutes et que le travail contient 30 pièces, le mode séquentiel passe 360 minutes à répéter le chauffage. Le mode lot investit ces 12 minutes une seule fois. C\'est pourquoi la même imprimante peut sembler considérablement plus productive lorsque les petites pièces sont imbriquées soigneusement.</p>',
    },
    { type: 'title', text: 'Pourquoi l\'Impression Séquentielle Gagne Encore dans les Travaux à Risque', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'impression séquentielle peut sembler plus lente car l\'imprimante répète le préchauffage et le temps de purge ou de stabilisation pour chaque unité. L\'avantage est le confinement. Si la pièce 17 échoue dans un plan séquentiel, les 16 pièces précédentes peuvent déjà être terminées et retirées. Si la pièce 17 échoue dans un lot à cause d\'un entraînement de buse, d\'une perte d\'adhérence, d\'un fluage thermique ou d\'un problème de matériau, l\'objet défaillant peut heurter les pièces voisines ou forcer l\'opérateur à mettre au rebut l\'intégralité du plateau.',
    },
    {
      type: 'paragraph',
      html: 'Le modèle de risque cumule la probabilité d\'échec historique sur le nombre de pièces. Un taux d\'échec de 3 % par pièce ne signifie pas qu\'un lot de 24 pièces a un risque de 3 %. La probabilité que chaque pièce réussisse est <code>(1 - 0,03)^24</code>, et la probabilité qu\'au moins une pièce échoue est le complément. Cela rend les grands lots moins attractifs lorsque le processus n\'est pas stable.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Impression par lots',
          description: 'Meilleure lorsque le processus est stable, que les pièces ont une bonne adhérence, que la disposition du plateau est sûre contre les collisions et que le temps de préchauffage domine le calendrier.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Un cycle de chauffage', 'Débit élevé', 'Exposition aux défaillances partagées plus élevée'],
        },
        {
          title: 'Impression séquentielle',
          description: 'Meilleure lorsque les rebuts sont coûteux, que les travaux sont hauts, que les matériaux sont sensibles ou que l\'utilisateur souhaite isoler chaque pièce de la suivante.',
          icon: 'mdi:format-list-numbered',
          points: ['Confinement des défaillances', 'Plus de surcharge répétée', 'Nécessite une planification des jeux'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Compromis du risque de production',
      items: [
        { pro: 'L\'impression par lots réduit le temps de chauffage inactif et peut terminer les petites pièces répétitives en un seul passage non supervisé.', con: 'Un échec d\'adhérence ou d\'extrusion peut menacer l\'ensemble du plateau et consommer une longue fenêtre de récupération pour l\'opérateur.' },
        { pro: 'L\'impression séquentielle facilite la validation d\'une unité, son retrait et la poursuite avec moins de perte cumulée.', con: 'Le chauffage et la stabilisation répétés peuvent consommer plus de temps que la géométrie réelle sur les petites pièces.' },
        { pro: 'Un lot peut simplifier l\'emballage car toutes les pièces se terminent ensemble.', con: 'Un lot long expose chaque unité à la même dérive environnementale, au même problème de bobine ou à la même période de dégradation thermique.' },
      ],
    },
    { type: 'title', text: 'Choix d\'un Seuil de Risque Critique pour le Lot', level: 2 },
    {
      type: 'paragraph',
      html: 'Le seuil de risque critique est la ligne où le calculateur fait passer la recommandation de l\'optimisation du temps à la protection de la viabilité. Un atelier de prototypage peut tolérer 45 % de risque de lot si le matériau est bon marché et que l\'opérateur expérimente. Une ferme de production expédiant des pièces à des clients peut utiliser 15 à 25 % pour les matériaux courants et des seuils plus bas pour les travaux de nuit, les polymères techniques coûteux ou les pièces nécessitant beaucoup de main-d\'œuvre de post-traitement.',
    },
    {
      type: 'table',
      headers: ['Seuil', 'Bon cas d\'utilisation', 'Interprétation'],
      rows: [
        ['10-20 %', 'Pièces chères, travaux de nuit, commandes clients de grande valeur', 'Protéger la fiabilité même lorsque le mode lot économise du temps.'],
        ['25-35 %', 'Production FDM calibrée normale avec matériau connu', 'Seuil équilibré pour le gain de temps et l\'exposition aux rebuts.'],
        ['40-60 %', 'Prototypes internes ou accessoires bon marché', 'Accepte plus de risque pour libérer la capacité de l\'imprimante plus rapidement.'],
        ['Au-dessus de 60 %', 'Exploration uniquement', 'Utile pour voir le potentiel de temps, mais faible comme règle de viabilité de production.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'Comment estimer votre taux d\'échec de départ',
      html: '<p>Passez en revue les 50 à 200 impressions comparables les plus récentes sur la même famille d\'imprimantes. Comptez les travaux qui ont nécessité une réimpression, un sauvetage manuel ou un rejet client. Divisez les échecs par le nombre total de tentatives, puis séparez par matériau et géométrie lorsque suffisamment de données existent. Les supports PLA, les clips PETG, les boîtiers ASA et les joints TPU ne devraient pas partager un seul chiffre de risque générique.</p>',
    },
    {
      type: 'summary',
      title: 'Règles du seuil de risque',
      items: [
        'Abaissez le seuil lorsque le matériau, la date limite ou le coût de post-traitement est élevé.',
        'Augmentez-le uniquement lorsque les pièces défaillantes sont bon marché et que la file d\'attente bénéficie d\'un regroupement agressif.',
        'Recalculez après des changements de processus tels qu\'une nouvelle surface de plateau, buse, fournisseur de filament ou température d\'enceinte.',
      ],
    },
    { type: 'title', text: 'Transitions de Déplacement, Mouvement de la Tête et Efficacité de la Disposition', level: 2 },
    {
      type: 'paragraph',
      html: 'Les transitions de déplacement sont le coût caché de l\'efficacité d\'impression sur place. Un slicer peut sauter d\'une pièce à une autre plusieurs fois par couche, surtout lorsque plusieurs objets partagent la même hauteur Z. La distance moyenne de transition n\'a pas besoin d\'être parfaite ; elle doit seulement représenter si la disposition est compacte, modérément espacée ou étalée sur la surface de construction. Un réseau compact avec des transitions moyennes de 25 mm se comporte très différemment d\'une disposition plein plateau avec des sauts de 180 mm.',
    },
    {
      type: 'paragraph',
      html: 'La vitesse de déplacement doit refléter le profil réel, pas le maximum publicitaire de la machine. Les limites d\'accélération, les paramètres du firmware, les options d\'évitement de traversée des périmètres, le Z-hop et la stratégie de peignage peuvent rendre le déplacement effectif plus lent que ce que suggère le champ du slicer. Si une machine utilise un déplacement prudent pour les premières couches fragiles ou les pièces hautes, réduisez la valeur pour éviter de surestimer l\'efficacité du lot.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Impression par lots', definition: 'Impression de plusieurs copies ou objets dans un travail partagé sur le plateau de construction.' },
        { term: 'Impression séquentielle', definition: 'Impression d\'un objet à la fois avant de passer à l\'objet suivant, souvent avec des contraintes de jeu autour de la tête d\'outil.' },
        { term: 'Distance de transition', definition: 'Distance moyenne de déplacement sans extrusion nécessaire pour se déplacer entre les pièces ou les zones d\'impression.' },
        { term: 'Temps de purge ou de stabilisation', definition: 'Temps supplémentaire par unité séquentielle pour l\'amorçage, la stabilisation thermique, l\'essuyage ou le redémarrage sécurisé pour l\'opérateur.' },
        { term: 'Risque critique', definition: 'Probabilité maximale acceptable qu\'au moins une pièce du lot échoue.' },
      ],
    },
    {
      type: 'message',
      title: 'Le jeu de collision compte en mode séquentiel réel',
      ariaLabel: 'Avertissement de jeu pour l\'impression séquentielle',
      html: '<p>De nombreux slicers restreignent l\'impression séquentielle car la hotend, le conduit de ventilateur, le portique X ou les pinces du plateau peuvent entrer en collision avec les pièces terminées. Utilisez ce calculateur pour planifier, puis vérifiez le jeu séquentiel dans le slicer avant de valider le travail.</p>',
    },
    { type: 'title', text: 'Comment Utiliser les Résultats pour l\'Optimisation de la Fabrication Additive', level: 2 },
    {
      type: 'paragraph',
      html: 'Le gain de temps absolu montre combien de minutes le mode lot gagne ou perd par rapport au mode séquentiel. Le pourcentage d\'efficacité relative normalise cette différence par rapport au temps séquentiel, ce qui est utile pour comparer des travaux de différentes tailles. Gagner 20 minutes sur un tirage de 40 minutes est opérationnellement énorme ; gagner 20 minutes sur un tirage de 30 heures peut ne pas justifier un risque plus élevé.',
    },
    {
      type: 'paragraph',
      html: 'La recommandation combine vitesse et viabilité. Si le lot est plus rapide et que le risque est inférieur au seuil, l\'outil recommande le lot. Si le risque du lot dépasse le seuil, le séquentiel est recommandé même s\'il est plus lent. Si le lot est plus lent parce que la surcharge de transition est grande ou que le préchauffage est faible, le séquentiel gagne en temps sans nécessiter de dérogation de risque.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Utilisez le calculateur avant d\'imbriquer un grand plateau de construction afin que le plan de production soit basé sur le temps de file d\'attente et l\'exposition aux défaillances.',
        'Effectuez une comparaison hypothétique avec un taux d\'échec plus faible après l\'étalonnage pour voir comment l\'amélioration du processus change la stratégie.',
        'Augmentez le temps de purge lorsque les travaux séquentiels nécessitent un nettoyage, un amorçage, une inspection du plateau ou une intervention de l\'opérateur entre les unités.',
        'Réduisez la vitesse de déplacement lorsque vous utilisez Z-hop, l\'évitement de traversée des périmètres, les pièces hautes fragiles ou les limites d\'accélération du firmware.',
        'Enregistrez les résultats réels des tirages et mettez à jour le taux d\'échec au lieu de vous fier à une règle empirique générique.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'N\'optimisez pas uniquement pour le temps d\'horloge le plus rapide',
      badge: 'Coût opérationnel',
      html: '<p>Un lot échoué de 12 heures peut coûter plus cher que le temps affiché sur l\'écran de la machine. Incluez le matériau, l\'électricité, le diagnostic de l\'opérateur, la perte de créneau dans la file d\'attente, le retard de post-traitement et l\'impact sur la date limite du client pour décider si le gain de temps vaut le risque composé.</p>',
    },
    { type: 'title', text: 'Exemples Pratiques pour les Flux de Travail du Calculateur de Temps d\'Impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Pour les petits clips PLA avec un temps d\'impression de 20 minutes par pièce et 10 minutes de chauffage, l\'impression par lots domine souvent. Le préchauffage partagé économise une grande partie du travail, et le placement compact maintient la surcharge de transition faible. Si l\'atelier a un taux d\'échec de 1 à 2 %, le risque peut rester acceptable pour des quantités modérées. C\'est le cas d\'utilisation classique à haut débit pour l\'impression par lots.',
    },
    {
      type: 'paragraph',
      html: 'Pour les supports PETG hauts avec une adhérence marginale, l\'impression séquentielle peut être plus sûre. Même si le lot économise deux heures, un coin recourbé peut provoquer un impact de buse, un décalage de couche ou un détachement d\'objet qui ruine les pièces voisines. Le calculateur expose la différence entre un gain de temps tentant et un profil de risque qui ne correspond plus à l\'intention de production.',
    },
    {
      type: 'paragraph',
      html: 'Pour les décisions d\'efficacité d\'impression sur place, exécutez la même pièce deux fois: une fois avec le taux d\'échec actuel et une fois avec le taux cible après étalonnage. Si la réduction des échecs de 6 % à 2 % fait basculer la recommandation de séquentielle à lot, le meilleur investissement peut être le nettoyage du plateau, le réglage de la première couche, le filament sec, la stabilité de l\'enceinte ou une stratégie de bordure validée plutôt que l\'achat d\'une autre imprimante.',
    },
    {
      type: 'summary',
      title: 'Liste de contrôle des décisions',
      items: [
        'Lot lorsque le préchauffage est important, la disposition est compacte et le taux d\'échec historique est faible.',
        'Séquentiel lorsque chaque rebut est coûteux, haut, risqué ou susceptible d\'endommager les pièces voisines.',
        'Réglez le processus lorsqu\'une petite réduction du taux d\'échec débloque une efficacité de lot majeure.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
