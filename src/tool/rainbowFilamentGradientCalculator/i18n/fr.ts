import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'calculateur-transition-filament-arc-en-ciel',
  title: 'Calculateur de Longueur de Transition de Filament Arc en Ciel pour Impressions 3D',
  description: 'Estime les cycles de couleur du filament arc-en-ciel, l\'utilisation de la bobine et l\'emplacement des transitions de dégradé le long de la hauteur Z d\'une impression 3D tranchée.',
  ui: {
    unitMetric: 'Métrique',
    unitImperial: 'US',
    cycleLength: 'Longueur du cycle de couleur',
    partWeight: 'Poids de la pièce tranchée',
    density: 'Densité',
    diameter: 'Diamètre du filament',
    partHeight: 'Hauteur Z imprimée',
    startOffset: 'Décalage de départ sur la bobine',
    presets: 'Préréglages de matériau',
    pla: 'PLA arc-en-ciel',
    petg: 'Mélange PETG',
    silk: 'Soie multicolore',
    usedFilament: 'Filament utilisé',
    cyclesInPart: 'Cycles dans la pièce',
    heightPerCycle: 'Z par cycle',
    gramsPerCycle: 'Masse par cycle',
    zMap: 'Carte de transition Z',
    transitionBands: 'Bandes de transition visibles',
    phaseWindow: 'Phase du cycle',
    copySummary: 'Copier le résumé du dégradé',
    reset: 'Réinitialiser',
    emptyValue: '0',
    copyTemplate: 'Estimation filament arc-en-ciel',
    copyCycles: 'cycles de couleur',
    copyUsed: 'utilisé',
    copyZCycle: 'par cycle',
  },
  seo: [
    { type: 'title', text: 'Comment fonctionne un calculateur de longueur de transition de filament arc-en-ciel', level: 2 },
    { type: 'paragraph', html: 'Un calculateur de longueur de transition de filament arc-en-ciel relie deux nombres du slicer habituellement vus séparément: <strong>la masse du modèle</strong> et <strong>la hauteur imprimée</strong>. Le slicer indique combien de grammes de matériau la pièce consommera, tandis que le fabricant du filament ou une mesure manuelle indique combien de mètres la bobine doit dérouler pour accomplir un cycle de couleur complet. Une fois ces valeurs réunies dans le même modèle de flux de matière, vous pouvez estimer combien de cycles de couleur apparaissent dans l\'objet et où chaque bande de couleur se trouve sur l\'axe Z.' },
    { type: 'paragraph', html: 'La conversion centrale est physique plutôt que visuelle. Une pièce tranchée de 180 g ne consomme pas automatiquement la même longueur de filament sur chaque bobine, car la longueur dépend de la densité et du diamètre. Le PLA, le PETG, la soie PLA, les mélanges chargés et les mélanges translucides peuvent avoir des densités différentes. Un filament nominal de 1,75 mm présente également des variations de tolérance, donc un calculateur devrait permettre d\'ajuster le diamètre au lieu de supposer la valeur par défaut indéfiniment.' },
    {
      type: 'stats', columns: 4, items: [
        { value: '1,75 mm', label: 'diamètre FDM courant', icon: 'mdi:circle-slice-8' },
        { value: '1,24 g/cm3', label: 'densité PLA typique pour les estimations', icon: 'mdi:flask' },
        { value: '30 m', label: 'exemple de cycle arc-en-ciel complet', icon: 'mdi:palette' },
        { value: 'Axe Z', label: 'où la longueur du cycle devient visible', icon: 'mdi:arrow-up-down' },
      ]
    },
    { type: 'tip', title: 'Mesurez un cycle réel avant de vous fier à l\'aperçu', html: 'Les fabricants décrivent souvent le filament arc-en-ciel comme à transition rapide, moyenne ou longue, mais la donnée utile est la distance mesurée entre le retour d\'une couleur à la même couleur. Ne déroulez un petit échantillon que si cela est sûr pour la bobine, ou imprimez une fine tour de purge et recalculez la longueur de filament consommée à partir des estimations du slicer.' },

    { type: 'title', text: 'Pourquoi le poids de la pièce prédit mieux les changements de couleur que le temps d\'impression', level: 2 },
    { type: 'paragraph', html: 'Le temps d\'impression est un mauvais prédicteur de l\'utilisation des couleurs sur une bobine arc-en-ciel. Un vase décoratif peut prendre de nombreuses heures en mode spirale tout en consommant peu de matériau, et un support mécanique dense peut consommer rapidement une grande quantité de filament. La bobine change de couleur en fonction de la <strong>longueur du filament passant dans l\'extrudeuse</strong>, et non des minutes écoulées, de la distance de déplacement ou du nombre de couches.' },
    { type: 'paragraph', html: 'Le poids du slicer est utile car il inclut déjà les parois, le remplissage, les couches supérieures et inférieures, les supports (s\'ils sont activés), les bords, les jupes et les structures de purge. Ce poids peut être converti en volume en le divisant par la densité du matériau. Le volume peut ensuite être divisé par la section transversale du filament pour estimer la longueur totale. C\'est pourquoi le même STL peut montrer un comportement de dégradé différent lorsque vous modifiez le remplissage, le nombre de parois, les paramètres de support ou l\'échelle.' },
    {
      type: 'table', headers: ['Modification du slicer', 'Effet sur l\'utilisation du filament', 'Effet sur le dégradé arc-en-ciel'], rows: [
        ['Plus de remplissage', 'Augmente les grammes et les mètres', 'Plus de progression du cycle de couleur dans la même hauteur Z'],
        ['Plus de parois', 'Augmente l\'usage sur la plupart des couches', 'Les transitions se compressent verticalement et deviennent plus fréquentes'],
        ['Modèle plus haut avec même masse', 'Mètres similaires sur plus de hauteur Z', 'Les transitions s\'écartent davantage'],
        ['Supports activés', 'Consomme des couleurs hors de la pièce visible', 'La phase visible peut se décaler par rapport au modèle nu'],
        ['Grand bord ou radeau', 'Consomme du filament avant la première couche visible', 'La couleur de départ avance sur la bobine'],
      ]
    },
    { type: 'diagnostic', variant: 'info', title: 'Utilisez l\'estimation du slicer après les réglages finaux', badge: 'Important', html: 'Effectuez le calcul après avoir choisi la hauteur de couche, le nombre de parois, le remplissage, les supports, le bord et l\'échelle. Une estimation du cycle de couleur faite avant la génération des supports peut être visiblement erronée car le matériau de support consomme une partie de la séquence de couleurs avant et pendant l\'objet.' },

    { type: 'title', text: 'Comprendre la longueur du cycle de couleur sur les bobines de filament arc-en-ciel', level: 2 },
    { type: 'paragraph', html: 'La longueur du cycle de couleur est la distance de filament nécessaire pour que la séquence se répète. Sur une bobine arc-en-ciel à six couleurs, un cycle peut parcourir le rouge, l\'orange, le jaune, le vert, le bleu, le violet, puis revenir au rouge. Le cycle peut être assez court pour plusieurs transitions dans une petite figurine, ou assez long pour qu\'une impression moyenne ne montre qu\'un seul changement lent. Un <strong>calculateur de cycle de couleur pour bobine arc-en-ciel</strong> est le plus utile lorsque ce nombre est réaliste.' },
    { type: 'paragraph', html: 'Tous les filaments à transition n\'ont pas des zones de couleur égales. Certains produits se mélangent progressivement avec de longs dégradés, tandis que d\'autres ont des blocs plus marqués. Le calculateur traite le cycle complet comme des bandes de couleur uniformément réparties car c\'est l\'estimation la plus pratique à partir des seules données du slicer. Si votre bobine a des sections inégales, utilisez la carte Z comme guide de phase et attendez-vous à ce que le mélange visuel réel soit plus doux ou asymétrique.' },
    {
      type: 'comparative', columns: 3, items: [
        { title: 'Arc en ciel à cycle court', description: 'Idéal pour les miniatures, ornements, petits vases et plaques nominatives. Changements de couleur multiples avec moins de matériau.', icon: 'mdi:weather-sunset-up', points: ['Transitions visibles rapides', 'Peut sembler chargé sur les grandes surfaces planes'] },
        { title: 'Arc en ciel à cycle moyen', description: 'Un choix équilibré pour les objets de bureau et les sculptures moyennes. Produit généralement une à trois transitions majeures.', icon: 'mdi:palette-swatch', highlight: true, points: ['Prévisible sur les impressions courantes', 'Bon pour les objets de 100 à 300 g'] },
        { title: 'Arc en ciel à cycle long', description: 'Meilleur pour les grands vases, dragons, lampes et impressions à paroi unique nécessitant des dégradés lents et fluides.', icon: 'mdi:palette-outline', points: ['Transition de couleur douce', 'Les petits modèles peuvent rester d\'une seule couleur'] },
      ]
    },
    {
      type: 'glossary', items: [
        { term: 'Cycle de couleur', definition: 'La longueur de filament nécessaire pour que la séquence complète de couleurs se répète depuis une couleur de départ jusqu\'à la même couleur.' },
        { term: 'Phase', definition: 'La position actuelle dans le cycle de couleur au moment où la partie visible commence à être imprimée.' },
        { term: 'Bande de transition', definition: 'Une région verticale de l\'objet imprimé où le segment de couleur estimé change le long de l\'axe Z.' },
        { term: 'Décalage de départ', definition: 'La longueur de filament déjà consommée avant le début du modèle, y compris les impressions précédentes, la purge, la jupe, le bord ou le rognage manuel.' },
      ]
    },

    { type: 'title', text: 'Comment estimer la position de transition de couleur le long de l\'axe Z', level: 2 },
    { type: 'paragraph', html: 'La carte Z est un estimateur, pas un simulateur de slicer. Elle suppose que la consommation de matériau est répartie proportionnellement sur la hauteur imprimée. C\'est un bon modèle de premier ordre pour de nombreuses impressions en mode vase, les sculptures à section constante et les objets décoratifs. Il devient moins précis lorsque le modèle a une base lourde, un centre creux, un sommet dense ou de grands supports qui consomment le matériau de manière inégale sur la hauteur.' },
    { type: 'paragraph', html: 'Pour un modèle à section transversale à peu près uniforme, diviser la hauteur imprimée par les cycles de couleur donne une réponse intuitive: si un objet de 160 mm utilise deux cycles de couleur complets, chaque cycle occupe environ 80 mm de hauteur Z. S\'il n\'utilise que 0,4 cycle, l\'impression montrera moins de la moitié de la séquence arc-en-ciel. S\'il utilise 4 cycles, les couleurs se répètent souvent et peuvent créer un aspect rayé plutôt qu\'un dégradé lisse.' },
    {
      type: 'list', icon: 'mdi:arrow-up-down', items: [
        'Utilisez la hauteur Z imprimée, pas la hauteur totale de déplacement de la machine.',
        'Incluez la consommation du bord ou du radeau comme décalage de départ si ces éléments sont imprimés avant l\'objet.',
        'Pour les plaques multi-objets, calculez le poids tranché combiné si les objets sont imprimés séquentiellement par couche.',
        'Pour l\'impression séquentielle, calculez chaque objet séparément et avancez le décalage de départ pour l\'objet suivant.',
        'Pour une tour de purge ou une structure de déchets multicolore, ajoutez sa masse estimée au décalage ou à l\'utilisation totale selon son moment d\'impression.',
      ]
    },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Pourquoi le bas peut ne pas correspondre à la première couleur prévue', html: 'De nombreuses imprimantes purgent, tracent une ligne d\'amorçage, impriment une jupe ou un bord avant la première paroi visible. Ces éléments consomment du filament et décalent la phase de départ. Si la première couche visible doit être d\'une couleur spécifique, mesurez ou estimez cette consommation de pré-impression et saisissez-la comme décalage de départ.' },

    { type: 'title', text: 'Densité, diamètre et pourquoi deux impressions de 180 g peuvent utiliser des longueurs de filament différentes', level: 2 },
    { type: 'paragraph', html: 'La même masse peut représenter différentes longueurs de filament car la densité modifie le volume par gramme. Le PLA est souvent estimé autour de 1,24 g/cm3, le PETG autour de 1,27 g/cm3, et certains mélanges de soie ou chargés peuvent différer suffisamment pour déplacer les transitions de plusieurs millimètres sur les impressions hautes.' },
    { type: 'paragraph', html: 'Tous les filaments à transition n\'ont pas des zones de couleur égales. Le calculateur traite le cycle complet comme des bandes de couleur uniformément réparties. Si votre bobine a des sections inégales, utilisez la carte Z comme guide.' },
    {
      type: 'table', headers: ['Famille de matériau', 'Densité de planification', 'Note de planification du dégradé'], rows: [
        ['PLA arc-en-ciel', '1,24 g/cm3', 'Bon réglage par défaut pour la plupart des bobines arc-en-ciel standard'],
        ['Soie PLA', '1,18-1,24 g/cm3', 'Les pigments et additifs varient ; vérifiez les données de la marque si disponibles'],
        ['PETG multicolore', '1,25-1,29 g/cm3', 'Légèrement plus dense, donc les mêmes grammes peuvent utiliser moins de longueur'],
        ['PLA chargé', 'Varie considérablement', 'Les additifs bois, métal, pierre ou brillance peuvent modifier l\'estimation'],
      ]
    },
    {
      type: 'proscons', title: 'Utiliser le poids du slicer comme entrée principale', items: [
        { pro: 'Il inclut les réglages d\'impression réels tels que les parois, le remplissage, les supports et l\'échelle.', con: 'Il dépend du profil de densité du slicer qui doit être raisonnablement précis.' },
        { pro: 'C\'est plus rapide que de sommer manuellement les mouvements d\'extrusion du G-code.', con: 'Il ne révèle pas la répartition inégale du matériau à chaque couche.' },
        { pro: 'Il fonctionne avec différents modèles et slicers avec une saisie de données minimale.', con: 'Les lignes d\'amorçage, la purge et les démarrages échoués doivent être comptabilisés séparément.' },
      ]
    },

    { type: 'title', text: 'Comment utiliser le calculateur pour une véritable impression filament arc-en-ciel', level: 2 },
    { type: 'paragraph', html: 'Commencez par trancher le modèle avec les réglages finaux. Copiez le poids estimé du filament depuis le slicer, puis saisissez la densité du matériau et le diamètre du filament. Entrez la longueur du cycle de couleur mesurée ou annoncée. Enfin, saisissez la hauteur Z imprimée du modèle. Le calculateur retourne le filament utilisé, le nombre de cycles dans la pièce, les grammes par cycle de couleur complet et la distance Z estimée par cycle.' },
    {
      type: 'list', icon: 'mdi:check-circle', items: [
        'Si les cycles dans la pièce sont inférieurs à 0,25, attendez-vous à un changement de couleur subtil plutôt qu\'à un objet arc-en-ciel.',
        'Si les cycles dans la pièce sont autour de 1,0, le modèle peut montrer un balayage complet de la palette de la bobine.',
        'Si les cycles dans la pièce sont entre 2,0 et 4,0, l\'objet présentera des bandes de couleur répétées.',
        'Si Z par cycle est plus grand que la hauteur du modèle, augmentez l\'échelle, ajoutez de la masse ou choisissez une bobine à transition plus rapide.',
        'Si Z par cycle est très petit, réduisez le remplissage ou choisissez une bobine à transition plus longue pour des dégradés plus lisses.',
      ]
    },
    {
      type: 'summary', title: 'Règle de planification rapide', items: [
        'Plus de grammes dans la même hauteur compriment l\'arc-en-ciel verticalement.',
        'Plus de hauteur avec les mêmes grammes étire le dégradé.',
        'Une longueur de cycle de couleur plus courte crée plus de transitions.',
        'Le décalage de départ contrôle quelle partie de l\'arc-en-ciel apparaît en premier.',
      ]
    },
    { type: 'message', title: 'Pour les pièces d\'exposition', ariaLabel: 'Conseil de planification pour pièces d\'exposition', html: 'Lorsque la limite de couleur doit tomber sur une caractéristique spécifique, imprimez une petite colonne de test verticale avec le même profil de slicer. Comparez les hauteurs de bandes mesurées avec l\'estimation, puis ajustez la longueur du cycle ou le décalage de départ avant de vous lancer dans l\'impression complète.' },

    { type: 'title', text: 'Questions fréquentes sur la planification des couleurs des bobines arc-en-ciel', level: 2 },
    { type: 'paragraph', html: '<strong>De combien de filament arc-en-ciel ai-je besoin pour un cycle de couleur complet ?</strong> Multipliez la longueur du cycle par les grammes par mètre pour votre diamètre et densité de filament. Pour du PLA standard de 1,75 mm, un mètre équivaut à environ 3 g, donc un cycle de 30 m correspond à environ 90 g. Le calculateur effectue cette conversion directement car la densité et le diamètre réels modifient la réponse.' },
    { type: 'paragraph', html: '<strong>Pourquoi mon impression est-elle restée principalement d\'une seule couleur ?</strong> La pièce a probablement utilisé moins d\'une fraction significative du cycle de la bobine. Les petits modèles, le faible remplissage et le filament arc-en-ciel à très longue transition peuvent rester dans une ou deux couleurs voisines. Agrandir le modèle, imprimer plusieurs objets à la fois, augmenter les parois ou choisir une bobine à cycle plus rapide peut rendre les transitions plus visibles.' },
    { type: 'paragraph', html: '<strong>Puis-je forcer une couleur spécifique en haut du modèle ?</strong> Vous pouvez l\'estimer avec le décalage de départ, mais un placement exact nécessite de connaître la phase actuelle de la bobine. Si le sommet doit être bleu, par exemple, vous devrez peut-être avancer le filament en imprimant un objet de purge, en partant d\'une couleur visible connue ou en choisissant une échelle de modèle différente.' },
    { type: 'diagnostic', variant: 'warning', title: 'Les grands changements de géométrie réduisent la précision de la carte Z', badge: 'Forme du modèle', html: 'Un piédestal lourd et une statue supérieure fine peuvent consommer la majeure partie du matériau près de la base, de sorte que les transitions réelles se regroupent plus bas qu\'une estimation Z proportionnelle ne le suggère. Pour ces modèles, utilisez le calculateur pour le nombre total de cycles, puis inspectez l\'aperçu des couches du slicer pour comprendre où le volume d\'extrusion est concentré.' },
  ],
  faq: [
    {
      question: 'Qu\'est-ce que la longueur de transition du filament arc-en-ciel ?',
      answer: 'C\'est la quantité de filament, généralement mesurée en mètres ou en pieds, nécessaire à la bobine pour parcourir une séquence complète de couleurs et revenir à la couleur de départ.',
    },
    {
      question: 'Pourquoi le calculateur demande-t-il le poids de la pièce plutôt que le temps d\'impression ?',
      answer: 'Les changements de couleur dépendent de la longueur du filament consommé par l\'extrudeuse. Le poids du slicer peut être converti en volume puis en longueur de filament, tandis que le temps d\'impression ne décrit pas directement l\'utilisation du matériau.',
    },
    {
      question: 'Quelle est la précision de la carte de transition Z ?',
      answer: 'C\'est une estimation de planification. Elle est plus précise pour les modèles avec une répartition assez uniforme du matériau sur la hauteur, et moins précise pour les formes avec une base dense, des sections creuses, des supports ou de grandes structures de purge.',
    },
    {
      question: 'Puis-je l\'utiliser pour de la soie PLA ou du PETG arc-en-ciel ?',
      answer: 'Oui. Choisissez un préréglage de matériau ou saisissez la densité de la fiche technique de la bobine. La densité modifie la longueur estimée du filament et donc le nombre de cycles de couleur prévu.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Trancher le modèle', text: 'Utilisez les réglages finaux du slicer et copiez le poids estimé de la pièce.' },
    { name: 'Saisir les données de la bobine', text: 'Définissez la longueur du cycle de couleur, la densité, le diamètre du filament et tout décalage de départ.' },
    { name: 'Lire la carte Z', text: 'Utilisez les cycles, Z par cycle et les bandes visibles pour décider si le dégradé sera subtil, complet ou répété.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculateur de Longueur de Transition de Filament Arc-en-Ciel',
      description: 'Estimez l\'utilisation du cycle de couleur du filament arc-en-ciel et les positions de transition le long de l\'axe Z d\'une impression 3D.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que la longueur de transition du filament arc-en-ciel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'C\'est la quantité de filament nécessaire à la bobine pour parcourir une séquence complète de couleurs et revenir à la couleur de départ.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Calculateur de Longueur de Transition de Filament Arc-en-Ciel pour Impressions 3D',
      description: 'Estime les cycles de couleur du filament arc-en-ciel, l\'utilisation de la bobine et l\'emplacement des transitions de dégradé le long de la hauteur Z d\'une impression 3D tranchée.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Trancher le modèle', text: 'Utilisez les réglages finaux du slicer et copiez le poids estimé de la pièce.' },
        { '@type': 'HowToStep', position: 2, name: 'Saisir les données de la bobine', text: 'Définissez la longueur du cycle de couleur, la densité, le diamètre du filament et tout décalage de départ.' },
        { '@type': 'HowToStep', position: 3, name: 'Lire la carte Z', text: 'Utilisez les cycles, Z par cycle et les bandes visibles pour décider si le dégradé sera subtil, complet ou répété.' }
      ],
    },
  ],
};
