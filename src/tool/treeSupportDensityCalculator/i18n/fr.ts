import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'calculateur-densite-supports-arbre',
  title: 'Calculateur de Densité de Supports Arborescents',
  description: 'Estime le diamètre de la canopée, le volume de support, le nombre de branches, le diamètre de contact et la stabilité des supports arborescents à partir de la hauteur du point d\'appui, de l\'angle de ramification, de la densité des branches et du diamètre basal du tronc.',
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    presetsLabel: 'Préréglages',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Équilibré',
    tallPresetLabel: 'Haut',
    supportHeightLabel: 'Hauteur du support',
    branchAngleLabel: 'Angle de branche',
    branchDensityLabel: 'Densité des branches',
    baseTrunkDiameterLabel: 'Diamètre basal du tronc',
    canopyDiameterLabel: 'Diamètre de la canopée',
    supportVolumeLabel: 'Volume estimé',
    stabilityLabel: 'Stabilité',
    filamentMassLabel: 'Masse de filament',
    branchCountLabel: 'Nombre de branches',
    contactDiameterLabel: 'Diamètre de contact',
    trunkVolumeLabel: 'Volume du tronc',
    branchVolumeLabel: 'Volume des branches',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'stabilité faible',
    stabilityBalanced: 'stabilité équilibrée',
    stabilityHigh: 'stabilité élevée',
    controlsAriaLabel: 'Paramètres de densité de support arborescent',
    resultsAriaLabel: 'Résultats de densité de support arborescent',
    copyButton: 'Copier la configuration',
    copiedButton: 'Copié',
    copiedSummaryTemplate: 'Estimation support arbre : canopée {canopy}, volume {volume}, stabilité {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'po',
    cubicCentimetersUnit: 'cm³',
    cubicInchesUnit: 'po³',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Comment la densité des supports arborescents modifie l\'utilisation de filament et la stabilité', level: 2 },
    {
      type: 'paragraph',
      html: 'Les supports arborescents sont efficaces car ils séparent le travail en un <strong>chemin de charge</strong> et un <strong>motif de contact</strong>. Le tronc supporte la majeure partie de la charge verticale depuis le plateau, tandis que de petites branches s\'étendent vers les surplombs uniquement là où le contact est nécessaire. Un calculateur de densité de supports arborescents est utile car les commandes les plus visibles du slicer, comme l\'angle de ramification et la densité des branches, interagissent avec la hauteur du point d\'appui et le diamètre basal du tronc. Une faible densité de branches peut économiser du filament, mais elle réduit aussi le nombre de chemins qui résistent au balancement. Un angle de ramification prononcé peut atteindre des pièces hautes avec moins d\'extension horizontale, mais il concentre la charge près du tronc et peut échouer sur des supports hauts et étroits.',
    },
    {
      type: 'paragraph',
      html: 'Le calculateur estime trois valeurs difficiles à juger à l\'œil nu dans un aperçu slicer : le diamètre de la canopée supérieure, le volume de support et le score de stabilité. Le diamètre de la canopée supérieure indique la largeur de la couronne de branches près du modèle. Le volume de support estime le matériau imprimé nécessaire pour le tronc et les branches. La stabilité combine l\'angle, la densité, le diamètre basal, la hauteur et l\'étendue de la canopée en un score pratique. L\'objectif n\'est pas de remplacer le moteur du slicer ; l\'objectif est de choisir des valeurs de départ avant de slicer afin de passer moins de temps à itérer les aperçus de supports.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'plage d\'angle de branche courante pour une portée et une résistance équilibrées' },
        { value: '25-55%', label: 'bande pratique de densité de branches pour de nombreuses impressions FDM' },
        { value: '2-8 mm', label: 'plage typique de diamètre basal du tronc pour supports arborescents sur imprimantes hobby' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ceci est un calculateur de planification, pas une exportation géométrique de slicer',
      html: 'Chaque slicer génère les supports arborescents différemment. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer et d\'autres outils utilisent des noms et algorithmes différents pour la génération de branches, l\'évitement de collisions, l\'interface de support et les points de contact. Utilise les résultats comme une direction de réglage, puis confirme la géométrie finale dans l\'aperçu du slicer avant d\'imprimer.',
    },
    { type: 'title', text: 'Angle de Ramification : Portée, Chemin de Charge et Risque de Défaillance', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'angle de ramification contrôle l\'agressivité avec laquelle un support arborescent s\'étend du tronc vers le modèle. Un angle plus faible maintient les branches plus verticales, ce qui améliore généralement la rigidité et réduit le balancement latéral. Un angle plus élevé atteint plus loin au-dessus de l\'espace vide, ce qui peut réduire le nombre de troncs nécessaires, mais augmente la charge de flexion et peut créer de longs segments de branche non soutenus. Pour les supports hauts, un petit changement de 50 à 60 degrés peut transformer un arbre stable en une structure flexible qui vibre lorsque la buse le touche.',
    },
    {
      type: 'paragraph',
      html: 'Le meilleur angle de ramification dépend de la hauteur du point d\'appui. Un arbre court sous un petit surplomb peut utiliser un angle plus large car la longueur de la branche est limitée. Un point d\'appui élevé nécessite un angle plus conservateur, surtout avec des matériaux flexibles, des mouvements de déplacement rapides ou une surface de plateau qui libère facilement les supports. Si le point d\'appui est élevé et l\'angle de ramification large, augmente le diamètre basal du tronc ou la densité pour que la couronne de branches ne soit pas soutenue par une colonne mince.',
    },
    {
      type: 'table',
      headers: ['Angle de branche', 'Meilleure utilisation', 'Risque en cas d\'excès', 'Ajustement'],
      rows: [
        ['20-35°', 'Supports hauts et tours étroites', 'Peut nécessiter plus de troncs car la portée est limitée', 'Augmenter la densité seulement là où la couverture de contact est faible'],
        ['36-50°', 'Réglage général des supports arborescents', 'Généralement équilibré, mais dépend encore de la hauteur', 'Commencer ici pour la plupart des impressions PLA et PETG'],
        ['51-65°', 'Surplombs larges avec hauteur modérée', 'Les branches peuvent fléchir pendant les déplacements ou contacts', 'Utiliser un tronc basal plus épais et une densité modérée'],
        ['66-75°', 'Cas spéciaux avec très large portée', 'Charge de flexion élevée et racines de branche faibles', 'Aperçu minutieux et ralentir l\'impression des supports'],
      ],
    },
    {
      type: 'tip',
      title: 'Ne recherche pas la portée avec l\'angle seul',
      html: 'Si les branches doivent voyager loin, essaie d\'ajouter un tronc supplémentaire ou d\'augmenter la densité de la canopée avant de pousser l\'angle à la limite supérieure. Un second tronc proche utilise souvent moins de matériau qu\'un arbre surétendu qui a besoin d\'une base lourde pour survivre.',
    },
    { type: 'title', text: 'Densité des Branches : Couverture de Contact Sans Cicatrices de Support', level: 2 },
    {
      type: 'paragraph',
      html: 'La densité des branches décrit la quantité de structure de branches créée près de la zone supportée. Une faible densité réduit le filament et facilite le retrait, mais peut laisser les bords de surplomb sous-supportés. Une densité élevée améliore la couverture et distribue la charge sur plusieurs contacts, mais augmente le temps d\'impression, les cicatrices de contact et le risque que les supports fusionnent avec les surfaces délicates. La bonne densité n\'est donc pas le nombre le plus élevé qui semble sûr ; c\'est le nombre le plus bas qui empêche les surplombs de s\'affaisser tout en maintenant une rigidité suffisante.',
    },
    {
      type: 'paragraph',
      html: 'Pour les modèles décoratifs, la densité peut souvent être réduite car une légère texture sous la face peut être acceptable. Pour les pièces mécaniques, la densité nécessite plus d\'attention car les trous non supportés, les chanfreins et les surfaces d\'accouplement peuvent affecter l\'ajustement. Les matériaux comptent aussi. Le PLA tolère des supports plus légers car il est rigide et imprime des ponts propres. Le PETG nécessite souvent des espaces d\'air plus grands et un diamètre de contact soigné car il adhère fortement aux supports. Le TPU et les filaments flexibles nécessitent une géométrie conservatrice car les branches fines peuvent dévier au lieu de maintenir le surplomb en position.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Faible densité',
          description: 'Idéale quand la qualité de retrait et l\'économie de filament sont plus importantes que la finition parfaite de la face inférieure.',
          points: ['Impression de supports la plus rapide', 'Couverture de contact la plus faible', 'Utile pour les miniatures organiques'],
        },
        {
          title: 'Densité équilibrée',
          description: 'Une valeur par défaut pratique pour une géométrie mixte où les surplombs ont besoin de support mais la surface du modèle doit rester propre.',
          highlight: true,
          points: ['Bonne efficacité matérielle', 'Effort de retrait modéré', 'Fonctionne pour de nombreux travaux en PLA et PETG'],
        },
        {
          title: 'Densité élevée',
          description: 'Utile pour les surplombs lourds, les points d\'appui élevés et les zones de contact fragiles, mais augmente les cicatrices.',
          points: ['Meilleure répartition de charge', 'Plus de volume et de temps d\'impression', 'Risque plus élevé de contacts fusionnés'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Augmenter la densité des branches',
      items: [
        { pro: 'Plus de points de contact réduisent l\'affaissement sous les surplombs courbés.', con: 'Plus de points de contact peuvent laisser des marques plus visibles après le retrait.' },
        { pro: 'Une canopée plus dense répartit la charge sur plusieurs branches.', con: 'Le slicer peut générer une couronne volumineuse difficile d\'accès avec des pinces coupantes.' },
        { pro: 'Les supports hauts deviennent moins sensibles aux frôlements de la buse.', con: 'Le temps d\'impression et l\'utilisation de filament augmentent rapidement quand la densité est combinée à une grande canopée.' },
      ],
    },
    { type: 'title', text: 'Diamètre Basal du Tronc et Pourquoi les Supports Arborescents Hauts Échouent', level: 2 },
    {
      type: 'paragraph',
      html: 'Le diamètre basal du tronc est la fondation de l\'arbre. Un tronc fin peut être parfaitement adéquat pour un support court, mais le même diamètre devient risqué lorsque le point supporté est haut. La hauteur augmente l\'effet de levier : un petit impact de buse, un frôlement de déplacement ou une vibration de ventilateur de refroidissement produit plus de mouvement au niveau de la canopée. Si le tronc est trop fin pour la hauteur, le support peut ne pas se casser immédiatement ; il peut lentement s\'incliner, déplacer le point de contact ou se décoller du plateau avant que le surplomb ne soit terminé.',
    },
    {
      type: 'paragraph',
      html: 'Un diamètre de tronc plus grand améliore la rigidité et l\'adhérence au plateau, mais consomme aussi du matériau. Le calculateur traite le diamètre du tronc comme une entrée de stabilité, pas comme un réglage cosmétique. Si le score de stabilité est faible, augmenter le diamètre est souvent plus efficace que d\'augmenter la densité des branches car cela renforce le chemin de charge depuis le plateau. Si le score est déjà élevé, un tronc plus grand ne peut que rendre le retrait plus difficile et gaspiller du filament.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Hauteur du point d\'appui', definition: 'La distance verticale du plateau à la région du modèle qui nécessite un support.' },
        { term: 'Angle de ramification', definition: 'L\'angle utilisé par les branches lorsqu\'elles s\'étendent du tronc vers les points de contact du support.' },
        { term: 'Densité des branches', definition: 'La quantité relative de structure de branches et de couverture de contact créée près de la zone supportée.' },
        { term: 'Diamètre basal du tronc', definition: 'Le diamètre approximatif de la colonne principale du support arborescent là où elle commence sur le plateau.' },
        { term: 'Diamètre de canopée', definition: 'La largeur estimée de la couronne supérieure de branches près du surplomb du modèle.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Une canopée haute sur un tronc fin est le mode de défaillance classique des supports arborescents',
      html: 'Si le diamètre de la canopée est plusieurs fois plus grand que le diamètre du tronc, le support se comporte comme une structure lourde en haut. Ajoute un autre tronc, réduis l\'angle de ramification ou augmente le diamètre basal avant d\'ajouter simplement plus de densité de branches.',
    },
    { type: 'title', text: 'Diamètre de la Canopée Supérieure et Dégagement du Modèle', level: 2 },
    {
      type: 'paragraph',
      html: 'Le diamètre de la canopée supérieure est important car les supports arborescents doivent s\'adapter autour du modèle, éviter les collisions et rester amovibles. Une grande canopée peut bien supporter le surplomb, mais elle peut aussi envelopper les détails, pénétrer dans les cavités ou créer des branches difficiles à casser. Une petite canopée est plus facile à retirer, mais peut concentrer la force de contact sur quelques points et permettre aux bords de s\'affaisser. Le calculateur estime le diamètre de la canopée à partir de la hauteur du support, de l\'angle de ramification, de la densité et du diamètre basal afin que tu puisses prédire si la couronne de support générée sera compacte ou tentaculaire.',
    },
    {
      type: 'paragraph',
      html: 'L\'aperçu du slicer est essentiel pour le dégagement de la canopée. Surveille les branches qui passent à travers les petits trous, sous le texte en relief, autour des doigts de figurines ou entre les caractéristiques mécaniques. Si une branche peut atteindre une zone, elle peut aussi s\'y piéger. Une densité plus faible, un diamètre de contact plus petit, des bloqueurs de support plus serrés ou une peinture manuelle peuvent empêcher les supports arborescents de devenir plus difficiles à retirer que les supports en grille standard.',
    },
    {
      type: 'table',
      headers: ['Comportement de la canopée', 'Cause probable', 'Conséquence sur l\'impression', 'Solution'],
      rows: [
        ['Canopée trop étroite', 'L\'angle et la densité sont conservateurs', 'Les bords du surplomb s\'affaissent entre les points de contact', 'Augmenter la densité ou ajouter des points de support manuels'],
        ['Canopée large mais instable', 'Angle élevé sur un support haut', 'Le contact de la buse peut secouer la structure', 'Réduire l\'angle ou augmenter le diamètre du tronc'],
        ['Canopée entoure les détails', 'Densité élevée autour d\'une géométrie complexe', 'Les marques de retrait sont visibles sur les surfaces', 'Utiliser des bloqueurs de support ou réduire la densité'],
        ['Canopée touche les parois latérales', 'Le dégagement du support est trop petit', 'Les branches peuvent fusionner avec la pièce', 'Augmenter la distance X/Y ou réduire le diamètre de contact'],
      ],
    },
    {
      type: 'card',
      title: 'Le diamètre de la canopée est un avertissement d\'aperçu',
      html: 'Une grande canopée estimée n\'est pas automatiquement mauvaise. Cela signifie que l\'aperçu du slicer mérite attention car la couronne de support peut devenir le défi de retrait dominant.',
    },
    { type: 'title', text: 'Volume de Support, Longueur de Filament et Temps d\'Impression', level: 2 },
    {
      type: 'paragraph',
      html: 'Le volume de support est le coût pratique des réglages choisis. Un support arborescent peut sembler léger dans l\'aperçu, mais une canopée dense et un tronc épais peuvent tout de même consommer un filament significatif. Le calculateur indique le volume estimé en centimètres cubes. Cela aide à comparer les réglages avant de slicer, surtout quand tu décides si un tronc plus haut, une densité plus élevée ou une portée de branche supplémentaire vaut le matériau.',
    },
    {
      type: 'paragraph',
      html: 'Le volume ne se traduit pas parfaitement en temps d\'impression car les slicers utilisent différentes largeurs de ligne, nombres de parois, motifs de remplissage, limites d\'accélération et vitesses de support. Cependant, le volume reste un indicateur solide. Si deux réglages produisent une stabilité similaire mais que l\'un utilise beaucoup moins de volume, le réglage de plus faible volume est généralement le meilleur point de départ. Si le réglage de plus faible volume produit aussi un score de stabilité bas, l\'économie peut disparaître quand l\'impression échoue ou que la face inférieure nécessite des retouches.',
    },
    {
      type: 'summary',
      title: 'Comment réduire le volume de support en toute sécurité',
      items: [
        'Réduis d\'abord la densité des branches quand le score de stabilité est déjà élevé.',
        'Réduis l\'angle de ramification quand la canopée est très large et lourde en haut.',
        'Utilise un tronc basal plus petit seulement sur des supports courts avec des charges de surplomb modestes.',
        'Divise un grand arbre en deux petits arbres quand la portée crée une couronne volumineuse.',
        'Règle le diamètre de contact séparément pour que les cicatrices de surface ne forcent pas une densité inutile.',
      ],
    },
    {
      type: 'message',
      title: 'L\'économie de matériau n\'est utile que si le support survit',
      html: 'Un support défaillant coûte généralement plus de filament qu\'un support légèrement plus résistant. Traite les grands pourcentages d\'économie comme une invitation à prévisualiser soigneusement, pas comme une preuve que le support le plus léger est automatiquement correct.',
    },
    { type: 'title', text: 'Diamètre de Contact du Support Arborescent et Qualité de Surface', level: 2 },
    {
      type: 'paragraph',
      html: 'Le diamètre de contact contrôle la quantité de support arborescent qui touche le modèle. Les petits contacts se nettoient bien et réduisent les cicatrices, mais peuvent se détacher des surplombs lourds ou chauds. Les contacts plus grands tiennent mieux et distribuent la chaleur, mais peuvent souder au PETG, laisser des points surélevés sur le PLA ou endommager les détails de type résine sur les impressions décoratives. Ce calculateur estime un diamètre de contact à partir du diamètre de branche et de la densité afin que le résultat reste connecté à la structure de support plutôt que d\'être traité comme une valeur cosmétique isolée.',
    },
    {
      type: 'paragraph',
      html: 'Les réglages de contact doivent être ajustés avec la distance Z supérieure et le comportement de l\'interface. Si l\'espace vertical est trop petit, même un contact minuscule peut adhérer fortement. Si l\'espace vertical est trop grand, un contact large peut ne pas supporter le surplomb car le filament a de l\'espace pour s\'affaisser. Pour les pièces fonctionnelles, teste le diamètre de contact sur un surplomb d\'étalonnage fait du même matériau, de la même taille de buse, hauteur de couche et réglages de refroidissement que ceux utilisés pour le modèle réel.',
    },
    {
      type: 'list',
      items: [
        'Utilise des diamètres de contact plus petits sur les surfaces cosmétiques visibles.',
        'Utilise des contacts plus grands sous les ponts lourds, les surplombs épais ou les matériaux à haute température.',
        'Augmente la distance Z supérieure avant d\'incriminer la densité de l\'arbre quand les supports sont difficiles à retirer.',
        'Réduis la vitesse de l\'interface de support si les points de contact se détachent pendant l\'impression.',
        'Vérifie si le slicer nomme ce réglage diamètre de contact, diamètre de pointe ou contact d\'interface de support.',
      ],
    },
    {
      type: 'tip',
      title: 'Le PETG nécessite une prudence supplémentaire',
      html: 'Le PETG adhère agressivement au matériau de support imprimé avec le même filament. Une densité d\'arbre modérée avec une distance Z soigneuse fonctionne souvent mieux qu\'une canopée très dense avec de grands contacts.',
    },
    { type: 'title', text: 'Flux de Travail Recommandé pour les Supports Arborescents du Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Commence par saisir la hauteur du point d\'appui le plus élevé, pas la hauteur totale du modèle. Un modèle peut être haut tandis que la région supportée est proche du plateau, ou court tandis qu\'un surplomb critique est haut sur une île étroite. Choisis ensuite un angle de ramification dans la plage équilibrée et règle la densité des branches selon la qualité de surface dont tu as besoin. Enfin, définis le diamètre basal du tronc en fonction de la hauteur et de la charge attendue. Le calculateur montrera si la combinaison est efficace en volume, stable ou risquée.',
    },
    {
      type: 'paragraph',
      html: 'Après le calcul, passe à l\'aperçu du slicer et inspecte le support arborescent généré de la première couche de support au contact final. Recherche les départs flottants, les racines de branche très fines, les branches qui passent trop près du modèle et les îlots de surplomb non supportés. Si le support est instable dans le calculateur et semble clairsemé dans l\'aperçu, renforce le tronc ou réduis l\'angle de ramification. Si le support est stable mais visuellement volumineux, réduis la densité et vérifie si le motif de contact couvre encore le surplomb.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Un bon réglage de support arborescent est ennuyeux dans l\'aperçu',
      html: 'L\'aperçu doit montrer un tronc clair, des chemins de branche courts, suffisamment de contacts sous le surplomb et un espace ouvert autour des détails. Si l\'arbre a l\'air visuellement dramatique, il en fait peut-être trop.',
    },
    {
      type: 'summary',
      title: 'Séquence de réglage rapide',
      items: [
        'Entre la hauteur du point d\'appui, pas seulement la hauteur du modèle.',
        'Commence près de 45-50° pour l\'angle de ramification.',
        'Utilise 30-45% de densité pour les impressions PLA générales, puis ajuste selon l\'aperçu.',
        'Augmente le diamètre du tronc avant de rendre les supports hauts extrêmement denses.',
        'Confirme le diamètre de contact et le dégagement dans l\'aperçu réel du slicer.',
      ],
    },
    { type: 'title', text: 'Quand les Supports Arborescents Sont Meilleurs Que les Supports Normaux', level: 2 },
    {
      type: 'paragraph',
      html: 'Les supports arborescents sont les plus utiles lorsque le support est nécessaire dans des régions isolées : bras de figurines, casques, cornes de créatures, sculptures organiques, arcs décoratifs et surplombs courbés. Ils évitent de remplir toute la zone sous le modèle, donc ils utilisent souvent moins de filament et laissent moins de cicatrices que les supports en grille. Ils sont aussi utiles quand les supports standard créeraient un grand mur difficile à retirer d\'une surface courbe.',
    },
    {
      type: 'paragraph',
      html: 'Les supports standard peuvent encore être meilleurs pour les surplombs techniques plats, les étagères horizontales larges et les surfaces qui nécessitent une interface de support uniforme. Une canopée de support arborescent touche des points sélectionnés, tandis que les supports normaux peuvent fournir un plan plus uniforme. Si la face inférieure doit être dimensionnellement précise, compare les deux approches. Un arbre dense peut utiliser plus de matériau qu\'un support rectiligne simple si le surplomb est large et plat.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Supports arborescents',
          description: 'Meilleurs pour la géométrie organique, les zones de contact clairsemées et les modèles où l\'accès de retrait est important.',
          highlight: true,
          points: ['Moins de matériau sur les surplombs isolés', 'Accès plus propre autour des formes courbes', 'Sensible à l\'angle de branche et à la rigidité du tronc'],
        },
        {
          title: 'Supports normaux',
          description: 'Meilleurs pour les surplombs plats larges, les interfaces prévisibles et les surfaces mécaniques simples.',
          points: ['Couverture uniforme de la face inférieure', 'Souvent plus faciles à raisonner', 'Peuvent utiliser beaucoup plus de filament sous des modèles complexes'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Utilise les deux types de support quand le modèle l\'exige',
      html: 'De nombreux slicers permettent la peinture de support, les bloqueurs ou les maillages modificateurs. Un modèle peut utiliser des supports arborescents pour les caractéristiques organiques et des supports normaux pour une surface technique plate.',
    },
  ],
  faq: [
    {
      question: 'Quel est un bon angle de ramification pour les supports arborescents ?',
      answer: 'Une plage de départ pratique est d\'environ 40-50°. Utilise des angles plus faibles pour les supports hauts et des angles plus élevés seulement quand tu as besoin de plus de portée et que le tronc est assez solide.',
    },
    {
      question: 'Une densité de support arborescent plus élevée améliore-t-elle toujours la qualité d\'impression ?',
      answer: 'Non. Une densité plus élevée améliore la couverture de contact et la stabilité, mais augmente aussi le filament, le temps d\'impression et les cicatrices de support. Utilise la densité la plus faible qui supporte le surplomb de manière fiable.',
    },
    {
      question: 'Comment choisir le diamètre basal du tronc ?',
      answer: 'Augmente le diamètre basal du tronc à mesure que la hauteur du point d\'appui augmente. Les supports hauts ont besoin d\'un chemin de charge plus fort, tandis que les supports courts peuvent souvent utiliser un tronc plus petit pour économiser du matériau.',
    },
    {
      question: 'Pourquoi le diamètre de la canopée est-il important ?',
      answer: 'Le diamètre de la canopée prédit la largeur de la couronne supérieure des branches. Une canopée large peut bien supporter, mais peut entrer en collision avec les détails, se piéger dans les cavités ou devenir difficile à retirer.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Entrer la hauteur du point d\'appui', text: 'Utilise la distance verticale du plateau à la zone du modèle qui nécessite un support.' },
    { name: 'Définir l\'angle et la densité des branches', text: 'Choisis les valeurs prévues de l\'angle de ramification et de la densité des branches du slicer.' },
    { name: 'Ajouter le diamètre basal du tronc', text: 'Entre le diamètre approximatif du tronc principal de l\'arbre utilisé par le slicer.' },
    { name: 'Examiner la stabilité et le volume', text: 'Compare le score de stabilité, le diamètre de la canopée et le volume de support estimé avant de slicer.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculateur de Densité de Supports Arborescents',
      description: 'Optimise la densité des supports arborescents, l\'angle de ramification, le diamètre basal du tronc, le diamètre de la canopée, le volume de support et la stabilité en impression 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel est un bon angle de ramification pour les supports arborescents ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une plage de départ pratique est d\'environ 40-50°, avec des angles plus faibles pour les supports hauts et des angles plus larges seulement quand une portée supplémentaire est nécessaire.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment régler la densité des supports arborescents pour une impression 3D',
      step: [
        { '@type': 'HowToStep', text: 'Entre la hauteur du point d\'appui.' },
        { '@type': 'HowToStep', text: 'Définis l\'angle de ramification, la densité des branches et le diamètre basal du tronc.' },
        { '@type': 'HowToStep', text: 'Examine le diamètre de la canopée, le volume de support et le score de stabilité.' },
        { '@type': 'HowToStep', text: 'Applique les valeurs dans l\'aperçu du slicer et ajuste les réglages de contact.' },
      ],
    },
  ],
};
