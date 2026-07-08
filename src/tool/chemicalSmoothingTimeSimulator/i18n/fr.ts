import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'calculateur-temps-lissage-chimique-abs-pvb',
  title: 'Calculateur de Temps de Lissage Chimique à la Vapeur d\'Acétone pour ABS et d\'Alcool Isopropylique pour PVB',
  description: 'Estime le temps d\'exposition à la vapeur et de séchage de manière conservatrice pour le lissage chimique de l\'ABS à l\'acétone ou du PVB à l\'alcool isopropylique en fonction du volume de la chambre, de la température, du volume de la pièce et des détails de surface.',
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    materialLabel: 'Matériau',
    absLabel: 'ABS + acétone',
    pvbLabel: 'PVB + alcool isopropylique',
    chamberVolumeLabel: 'Chambre à vapeur',
    chamberTemperatureLabel: 'Temp. chambre',
    partVolumeLabel: 'Volume pièce',
    surfaceDetailLabel: 'Détail surface',
    fineDetailLabel: 'Détails fins',
    balancedDetailLabel: 'Équilibré',
    coarseDetailLabel: 'Couches épaisses',
    presetsLabel: 'Préréglages',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Pièce d\'exposition',
    enclosurePresetLabel: 'Grand boîtier',
    exposureLabel: 'Exposition estimée',
    dryTimeLabel: 'Séchage post-lissage',
    firstTrialLabel: 'Premier essai',
    riskLabel: 'Risque détail',
    vaporMapLabel: 'Intensité vapeur',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Paramètres de lissage chimique',
    resultsAriaLabel: 'Résultats du lissage chimique',
    recommendationGentle: 'fenêtre douce',
    recommendationStandard: 'surveiller de près',
    recommendationAggressive: 'risque élevé de perte de détail',
    safetyNote: 'Utilisez ceci uniquement comme estimation de planification conservative. La vapeur de solvant est inflammable et dangereuse: travaillez loin des sources d\'inflammation, utilisez une ventilation et des EPI, et commencez par un court test d\'exposition.',
    copyButton: 'Copier le plan de lissage',
    copiedButton: 'Copié',
    copiedSummaryTemplate: 'Estimation de lissage chimique: {minutes} min ({seconds} s) d\'exposition, premier essai à {trialSeconds} s, sécher pendant environ {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'Comment estimer le temps de lissage à la vapeur d\'acétone pour ABS sans fondre les détails', level: 2 },
    {
      type: 'paragraph',
      html: 'Le lissage à la vapeur d\'acétone pour ABS est un processus contrôlé de dissolution de surface. La vapeur d\'acétone ramollit la peau externe de l\'ABS, permettant aux stries visibles des couches FDM de se détendre pour obtenir une surface plus brillante. La fenêtre utile est étroite: une exposition trop faible laisse les lignes de couche inchangées, tandis qu\'une exposition trop forte arrondit les bords, ramollit le texte en relief, ferme les petits trous et peut faire fléchir les parois minces. Une estimation du temps est donc mieux traitée comme une <strong>fenêtre de départ pour des tests courts</strong>, pas comme une recette fixe.',
    },
    {
      type: 'paragraph',
      html: 'Le calculateur utilise cinq variables pratiques qui affectent fortement la durée de lissage: le couple polymère-solvant, le volume de la chambre, la température de la chambre, le volume de la pièce imprimée et le niveau de détail de surface. La température compte car la pression de vapeur et l\'activité du solvant augmentent rapidement à mesure que la chambre chauffe. La taille de la pièce compte car les pièces plus grandes présentent plus de surface et de masse thermique. Le niveau de détail compte car une dent d\'engrenage miniature, un logo ou une languette à encliquetage peut être ruiné par un temps qui semble parfait sur un boîtier rectangulaire simple.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35 %', label: 'premier essai raisonnable du temps estimé' },
        { value: 'ABS/PVB', label: 'polymères imprimables courants pour le lissage à la vapeur' },
        { value: 'heures', label: 'temps de séchage avant manipulation ou assemblage' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le lissage à la vapeur est une opération de finition, pas une étape de calibrage dimensionnel',
      html: 'Si une pièce imprimée doit contenir un roulement, un filetage, un joint, un encliquetage ou un insert, masquez la zone critique ou validez le processus de lissage sur une copie sacrificielle. Le lissage chimique modifie les bords et peut modifier les jeux fonctionnels.',
    },
    { type: 'title', text: 'Lissage à la vapeur ABS acétone vs PVB alcool isopropylique', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'ABS est généralement lissé à l\'acétone car l\'acétone est un solvant efficace pour la surface de l\'acrylonitrile butadiène styrène. Le PVB, souvent vendu comme filament destiné aux impressions transparentes ou brillantes, est couramment lissé à l\'alcool isopropylique. L\'objectif visuel est similaire, mais le comportement du processus est différent. L\'ABS à l\'acétone peut devenir brillant et arrondi rapidement, surtout dans une chambre chaude. Le PVB à l\'alcool isopropylique est souvent plus indulgent pour un développement progressif de la brillance, mais peut encore perdre en netteté s\'il est exposé trop longtemps.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS à la vapeur d\'acétone',
          description: 'Action de lissage rapide et forte avec un risque élevé de ramollissement des petits textes, coins, broches et parois minces lorsque la chambre est chaude.',
          points: ['Idéal pour les coques visibles et accessoires', 'Sensible à la température', 'Nécessite un long dégazage avant utilisation en espace clos'],
        },
        {
          title: 'PVB à la vapeur d\'alcool isopropylique',
          description: 'Souvent choisi pour les pièces visuelles brillantes et les impressions translucides où une réponse de lissage plus lente et contrôlable est souhaitée.',
          highlight: true,
          points: ['Utile pour les pièces d\'exposition', 'Peut mieux préserver les détails avec des cycles courts', 'Sécher complètement avant polissage ou emballage'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Matériau', 'Solvant typique', 'Caractère du processus', 'Mode de défaillance principal'],
      rows: [
        ['ABS', 'Acétone', 'Ramollissement rapide de surface et brillance forte', 'Bords arrondis, parois minces affaissées, trous fermés'],
        ['PVB', 'Alcool isopropylique', 'Brillance plus progressive et réduction du voile', 'Surface collante, texture brouillée, détails fins ramollis'],
        ['ASA', 'Acétone ou autres solvants', 'Famille similaire à l\'ABS mais dépend de la formulation', 'Les pièces résistantes aux UV peuvent encore perdre leurs bords nets'],
        ['PLA/PETG', 'Non adapté à ce calculateur', 'Les solvants courants ne se comportent pas comme le lissage ABS/PVB', 'Finition médiocre ou expérimentation dangereuse avec solvants'],
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez le réglage de matériau comme un couple solvant, pas seulement un nom de plastique',
      html: 'Sélectionnez ABS pour un processus de lissage à la vapeur d\'acétone et PVB pour un processus de lissage à la vapeur d\'alcool isopropylique. Différents mélanges de filament, additifs, pigments et historique de recuit peuvent modifier la réponse réelle, donc testez avec la bobine exacte utilisée pour l\'impression finale.',
    },
    { type: 'title', text: 'Pourquoi le volume de la chambre modifie la durée du lissage chimique', level: 2 },
    {
      type: 'paragraph',
      html: 'Le volume de la chambre affecte la rapidité avec laquelle la concentration de vapeur s\'accumule et l\'uniformité avec laquelle elle entoure la pièce imprimée. Un petit bocal peut devenir agressif rapidement car une petite quantité de solvant occupe un petit espace de tête. Une chambre plus grande nécessite généralement plus de temps pour atteindre le même environnement de vapeur effectif, mais peut être plus uniforme si la source de solvant est distribuée et la pièce surélevée au-dessus du contact liquide. Le calculateur augmente le temps d\'exposition doucement à mesure que le volume de la chambre croît, car la relation est réelle mais pas parfaitement linéaire dans les configurations de finition domestiques.',
    },
    {
      type: 'paragraph',
      html: 'L\'uniformité compte autant que la concentration moyenne. Une pièce placée trop près d\'un tissu imbibé de solvant, d\'une flaque ou d\'une plaque chauffante peut subir une attaque directionnelle: une face devient brillante et molle tandis que le côté opposé reste mat. Une chambre plus haute peut également créer des gradients, surtout si la vapeur se condense sur le couvercle et goutte. L\'interprétation la plus sûre d\'un temps calculé est donc un intervalle d\'inspection programmé: retirez la pièce, inspectez la brillance humide et arrêtez avant que les caractéristiques nettes ne commencent à couler.',
    },
    {
      type: 'list',
      items: [
        'Surélevez la pièce sur un support résistant aux solvants pour qu\'elle ne touche jamais le solvant liquide.',
        'Éloignez les sources absorbantes de solvant de la surface du modèle pour éviter une surexposition unilatérale.',
        'Utilisez une chambre assez grande pour que la vapeur puisse circuler autour de toutes les faces visibles.',
        'Évitez les gouttes de condensation du couvercle ; les gouttelettes créent des marques, des cratères et des points brillants.',
        'N\'augmentez pas la quantité de solvant indéfiniment pour compenser une grande chambre ; la concentration et le risque de sécurité augmentent ensemble.',
      ],
    },
    {
      type: 'card',
      title: 'Une chambre plus grande n\'est pas automatiquement plus sûre',
      html: 'Les grands volumes scellés peuvent contenir plus de vapeur inflammable. Une chambre plus grande peut ralentir le lissage, mais elle peut aussi créer une atmosphère dangereuse plus étendue. Utilisez la chambre pratique la plus petite qui offre à la pièce un dégagement et une exposition uniforme.',
    },
    { type: 'title', text: 'Température, pression de vapeur et perte de détail', level: 2 },
    {
      type: 'paragraph',
      html: 'La température est l\'une des entrées les plus importantes car l\'évaporation du solvant augmente à mesure que la chambre chauffe. Quelques degrés peuvent faire passer la finition d\'un lissage satiné lent à un brillant rapide avec arrondi des bords. La vapeur d\'acétone chaude autour de l\'ABS est particulièrement impitoyable: la surface peut passer de mate à aspect humide à ramollie en un court intervalle. Le calculateur raccourcit le temps d\'exposition à mesure que la température de la chambre augmente et élève le score de risque lorsque les températures dépassent une référence ambiante normale.',
    },
    {
      type: 'paragraph',
      html: 'Le chauffage actif est le point où de nombreux processus de lissage amateur deviennent dangereux. Les vapeurs d\'acétone et d\'alcool isopropylique sont inflammables, et les chauffages improvisés, interrupteurs, relais, étincelles, plaques chauffantes et composants électroniques mal scellés peuvent créer un risque d\'incendie sérieux. Si la température est contrôlée, elle doit l\'être avec des équipements conçus pour des contextes de vapeur dangereuse, pas avec un élément chauffant exposé dans un récipient scellé. Pour la plupart des utilisateurs, le lissage à température ambiante avec des inspections courtes est le flux de travail le plus défendable.',
    },
    {
      type: 'table',
      headers: ['Condition de chambre', 'Comportement attendu', 'Réponse pratique'],
      rows: [
        ['Pièce fraîche sous 18 °C', 'Action lente de la vapeur et brillance retardée', 'Utilisez des intervalles plus longs mais inspectez la condensation inégale'],
        ['Température ambiante 20-25 °C', 'Base prévisible pour la plupart des tests', 'Commencez par l\'estimation du calculateur et le premier essai'],
        ['Chambre chaude 26-32 °C', 'Ramollissement plus rapide et risque de détail plus élevé', 'Raccourcissez les cycles et évitez les pièces fonctionnelles délicates'],
        ['Chambre chaude ou chauffée activement', 'Environnement de vapeur très agressif', 'N\'improvisez pas ; les risques d\'incendie et de surexposition augmentent fortement'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'N\'utilisez jamais de flamme nue ou d\'éléments chauffants exposés',
      html: 'Les vapeurs d\'acétone et d\'alcool isopropylique peuvent s\'enflammer. Éloignez les chambres de lissage des flammes, étincelles, outils chauds, interrupteurs qui arquent, moteurs à balais, chauffages non homologués pour service vapeur et manipulations sujettes à l\'électricité statique.',
    },
    { type: 'title', text: 'Volume de pièce, surface et sensibilité géométrique', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'entrée appelée volume de pièce est un indicateur pratique de la taille globale de la pièce. Ce n\'est pas un substitut parfait de la surface, mais c\'est facile à estimer à partir des statistiques du slicer et cela indique généralement si l\'impression est un petit bouton, une figurine d\'exposition ou un grand panneau de boîtier. Les pièces plus grandes nécessitent souvent une exposition plus longue pour développer une finition visuelle uniforme, mais elles ont aussi plus de bords, coins et sections minces qui peuvent montrer une absorption inégale du solvant.',
    },
    {
      type: 'paragraph',
      html: 'La géométrie peut dominer le résultat. Un vase cylindrique lisse et un support en treillis peuvent avoir le même volume mais une tolérance au lissage complètement différente. Les nervures fines, les lettres en relief marquées, les petits trous, les canaux internes, les queues d\'aronde et les clips ramollissent plus vite que les grandes surfaces planes. Lorsque la pièce a une géométrie critique, utilisez le réglage de détail fin même si les lignes de couche sont visibles, puis répétez des cycles courts plutôt que de tenter une longue exposition.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Lissage à la vapeur', definition: 'Un processus de finition où la vapeur de solvant ramollit uniquement la surface externe d\'une impression polymère.' },
        { term: 'Surexposition', definition: 'Un intervalle de lissage assez long pour arrondir les détails, déformer les parois minces ou laisser une surface collante.' },
        { term: 'Dégazage', definition: 'La période après le lissage pendant laquelle le solvant absorbé s\'évapore de la surface ramollie.' },
        { term: 'Détail de surface', definition: 'Petite géométrie telle que texte, texture, trous, stries, clips et bords tranchants qui peut être perdue pendant le lissage.' },
        { term: 'Prospectus sacrificiel', definition: 'Une petite impression d\'essai faite du même filament et des mêmes réglages pour valider la réponse au solvant avant de finir la pièce réelle.' },
      ],
    },
    {
      type: 'summary',
      title: 'Règles de géométrie pour choisir le niveau de détail',
      items: [
        'Utilisez détail fin pour le texte, les engrenages, les petits trous, les encliquetages, les filetages ou les parois minces.',
        'Utilisez équilibré pour les pièces décoratives avec des lignes de couche modérées et sans ajustements serrés.',
        'Utilisez couches épaisses uniquement pour les formes simples où les bords arrondis sont acceptables.',
        'Divisez les modèles complexes en zones masquées et non masquées lorsque seule la coque externe a besoin de brillance.',
      ],
    },
    { type: 'title', text: 'Lire les résultats du calculateur', level: 2 },
    {
      type: 'paragraph',
      html: 'La sortie d\'exposition est le temps de vapeur total estimé pour un premier passage conservateur. Elle est affichée en minutes et secondes car les fenêtres de finition courtes sont plus faciles à gérer avec un minuteur. Le premier essai est délibérément plus court, généralement environ un tiers de l\'exposition calculée. Retirer la pièce tôt vous permet de vérifier si la surface commence à briller avant que la perte de détail ne devienne permanente.',
    },
    {
      type: 'paragraph',
      html: 'Le temps de séchage estime combien de temps l\'impression doit reposer avant manipulation rapprochée, assemblage, peinture, emballage ou scellement. Le séchage ne concerne pas seulement la sensation de sécheresse en surface. Le solvant peut rester dans le polymère ramolli et continuer à affecter l\'ajustement, l\'odeur, l\'adhérence de la peinture et la sensation mécanique. Les pièces en ABS lissées à l\'acétone nécessitent souvent un dégazage plus long que les pièces en PVB lissées à l\'alcool isopropylique, surtout lorsque la pièce est épaisse ou que l\'exposition était agressive.',
    },
    {
      type: 'proscons',
      title: 'Une longue exposition vs plusieurs cycles courts',
      items: [
        { pro: 'Une seule exposition est plus rapide et plus facile à planifier.', con: 'Elle donne peu d\'avertissement avant que les détails fins ne ramollissent.' },
        { pro: 'Les cycles courts permettent de s\'arrêter plus facilement à une finition satinée ou semi-brillante.', con: 'Ils nécessitent plus de manipulation et d\'ouvertures répétées de la chambre.' },
        { pro: 'Plusieurs inspections réduisent le risque de détruire une impression unique.', con: 'La finition peut être légèrement moins uniforme si la pièce refroidit ou sèche entre les cycles.' },
      ],
    },
    {
      type: 'message',
      title: 'Meilleure utilisation de l\'estimation',
      html: 'Réglez un minuteur pour le premier essai, inspectez la pièce sous un rayon rasant, puis continuez par incréments courts. Arrêtez-vous alors que les lignes de couche sont encore à peine visibles ; la surface continue souvent de se détendre pendant un court moment après le retrait.',
    },
    { type: 'title', text: 'Flux de travail sécurisé pour le lissage chimique ABS et PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Un flux de travail sécurisé commence avant l\'ouverture du solvant. Imprimez un petit coupon avec le même filament, la même hauteur de couche, le même nombre de parois et les mêmes réglages de refroidissement. Nettoyez la pièce finale pour que la poussière et les huiles ne soient pas piégées sous la peau ramollie. Préparez un support non réactif, un minuteur, des gants compatibles avec le solvant, une protection oculaire, une ventilation et un endroit où la pièce peut sécher sans être touchée. Gardez les récipients de solvant fermés lorsque vous ne chargez pas activement la chambre.',
    },
    {
      type: 'list',
      items: [
        'Confirmez que le filament est bien de l\'ABS ou du PVB, pas du PLA, PETG, mélange PC ou matériau recyclé inconnu.',
        'Retirez les supports et poncez uniquement avant le lissage ; le ponçage après le lissage peut couper la brillance inégalement.',
        'Masquez les trous, sièges de roulements, filetages et surfaces d\'accouplement si les dimensions comptent.',
        'Commencez par le temps du premier essai, puis ajoutez des intervalles courts si la finition est encore trop mate.',
        'Séchez la pièce dans un endroit ventilé jusqu\'à ce que l\'odeur de solvant et le collant aient disparu.',
        'Éliminez les chiffons de solvant et les matériaux contaminés selon les règles locales sur les déchets dangereux.',
      ],
    },
    {
      type: 'tip',
      title: 'Ne jugez pas la finition pendant que la surface est humide',
      html: 'Une surface d\'ABS ou de PVB fraîchement exposée peut sembler plus brillante qu\'elle ne le sera après séchage. Inspectez à la fois la brillance et la géométrie: si les coins semblent gonflés ou si le petit texte devient mou, arrêtez même si les lignes de couche sont encore faiblement visibles.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'La ventilation fait partie du temps de processus',
      html: 'Le séchage post-lissage doit avoir lieu là où les vapeurs ne peuvent pas s\'accumuler. Une pièce placée immédiatement dans un tiroir, un sac d\'expédition, une vitrine ou un boîtier électronique peut retenir l\'odeur et le solvant plus longtemps que prévu.',
    },
    { type: 'title', text: 'Problèmes courants et actions correctives', level: 2 },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause probable', 'Prochain ajustement'],
      rows: [
        ['Lignes de couche encore nettes', 'Exposition trop courte ou chambre trop froide', 'Répétez par incréments courts plutôt que de doubler le temps'],
        ['Bords arrondis ou texte flou', 'Surexposition pour le niveau de détail', 'Utilisez le réglage détail fin, température plus basse ou masquez les caractéristiques'],
        ['Surface collante après séchage', 'Trop de solvant absorbé ou ventilation insuffisante', 'Allongez le temps de séchage et réduisez l\'exposition future'],
        ['Un côté plus brillant que l\'autre', 'Source de vapeur inégale ou pièce trop près du solvant', 'Surélevez la pièce, distribuez la source, tournez seulement entre les cycles'],
        ['Voile blanc ou taches nuageuses', 'Condensation, humidité ou évaporation inégale', 'Réduisez la saturation de la chambre et évitez les gouttes du couvercle'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Si une pièce devient collante, n\'essayez pas de la réparer en ajoutant immédiatement plus de vapeur. Plus de solvant approfondit généralement la zone ramollie. Laissez la pièce sécher complètement, puis décidez si un cycle de suivi très bref vaut le risque. Si les bords ont déjà coulé, la forme ne peut pas être restaurée par le séchage. Pour les pièces critiques, la solution la plus fiable est la réimpression avec des réglages de slicer ajustés et l\'utilisation d\'une fenêtre de finition plus courte.',
    },
    {
      type: 'card',
      title: 'Réglages du slicer qui réduisent le temps de lissage',
      html: 'Une hauteur de couche plus faible, une extrusion stable, un filament sec, un refroidissement approprié et un pressure advance bien réglé réduisent la quantité de travail chimique nécessaire. Le lissage chimique doit raffiner une impression, pas cacher un ringage sévère, des lacunes, des bavures, une texture de filament humide ou une sous-extrusion.',
    },
    {
      type: 'summary',
      title: 'Liste de contrôle pratique de finition',
      items: [
        'Estimez l\'exposition avec le matériau, la chambre, la température, la taille de pièce et le niveau de détail exacts.',
        'Effectuez un coupon sacrificiel ou un premier essai avant d\'engager la pièce finale.',
        'Utilisez des cycles courts quand les détails comptent et arrêtez-vous avant que la surface ne perde sa netteté.',
        'Prévoyez assez de temps de séchage pour que l\'odeur de solvant, le collant et la mollesse dimensionnelle disparaissent.',
        'Traitez le contrôle des vapeurs inflammables comme une exigence de sécurité, pas une commodité optionnelle.',
      ],
    },
  ],
  faq: [
    {
      question: 'Combien de temps l\'ABS doit-il rester dans la vapeur d\'acétone ?',
      answer: 'Il n\'y a pas de temps universel car le volume de la chambre, la température, la géométrie de la pièce et la formulation du filament importent. Utilisez l\'estimation du calculateur comme point de départ, puis inspectez au temps plus court du premier essai avant de continuer.',
    },
    {
      question: 'Le PVB peut-il être lissé à la vapeur d\'alcool isopropylique ?',
      answer: 'Oui, de nombreux filaments PVB sont conçus pour le lissage à l\'alcool isopropylique. Le processus est généralement plus progressif que l\'ABS à l\'acétone, mais une surexposition peut encore rendre la surface collante ou brouiller les détails fins.',
    },
    {
      question: 'Une chambre plus chaude réduit-elle le temps de lissage ?',
      answer: 'Oui. La vapeur de solvant plus chaude agit généralement plus vite, mais elle augmente aussi l\'inflammabilité et le risque de perte de détail. Évitez les chauffages improvisés et éloignez la vapeur des sources d\'inflammation.',
    },
    {
      question: 'Combien de temps une pièce lissée doit-elle sécher ?',
      answer: 'Prévoyez des heures, pas des minutes. L\'ABS lissé à l\'acétone nécessite souvent un dégazage plus long que le PVB lissé à l\'alcool isopropylique, surtout pour les pièces épaisses ou les expositions agressives.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Choisissez le couple matériau-solvant', text: 'Sélectionnez ABS pour le lissage à la vapeur d\'acétone ou PVB pour le lissage à la vapeur d\'alcool isopropylique.' },
    { name: 'Entrez les conditions de la chambre', text: 'Ajoutez le volume de la chambre à vapeur et la température de la chambre en unités métriques ou US.' },
    { name: 'Décrivez la pièce', text: 'Entrez le volume approximatif de la pièce et choisissez un niveau de détail de surface qui correspond aux plus petites caractéristiques.' },
    { name: 'Utilisez le premier essai', text: 'Inspectez la pièce au temps de test plus court avant d\'exécuter l\'exposition estimée complète.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculateur de Temps de Lissage Chimique à la Vapeur d\'Acétone pour ABS et d\'Alcool Isopropylique pour PVB',
      description: 'Estime le temps d\'exposition à la vapeur chimique et de séchage pour la finition ABS acétone et PVB alcool isopropylique.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien de temps l\'ABS doit-il rester dans la vapeur d\'acétone ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Utilisez une estimation conservative basée sur le volume de la chambre, la température, la taille de la pièce et le niveau de détail, puis inspectez à un temps de premier essai plus court.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment estimer le temps de lissage chimique pour les impressions ABS ou PVB',
      step: [
        { '@type': 'HowToStep', text: 'Sélectionnez ABS avec acétone ou PVB avec alcool isopropylique.' },
        { '@type': 'HowToStep', text: 'Entrez le volume et la température de la chambre.' },
        { '@type': 'HowToStep', text: 'Entrez le volume de la pièce et le niveau de détail de surface.' },
        { '@type': 'HowToStep', text: 'Commencez par le premier essai et continuez seulement si le détail reste sûr.' },
      ],
    },
  ],
};
