import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'calculateur-compensation-pied-elephant';
const title = 'Calculateur de Compensation de Pied d\'Éléphant: Correction Dimensionnelle de Précision';
const description = 'Calculez l\'expansion horizontale négative et la profondeur de chanfrein CAO pour la première couche d\'impression 3D à partir de l\'erreur dimensionnelle mesurée, de la hauteur de couche, de la pression Z-offset et de la température du plateau.';

const faqData = [
  {
    question: 'Quelle est la meilleure valeur de compensation pour le pied d\'éléphant ?',
    answer: 'La meilleure valeur est l\'erreur de base mesurée corrigée de la hauteur de la première couche, de la pression Z effective et de la température du plateau. Ce calculateur la restitue sous forme de valeur d\'expansion horizontale négative pour le slicer.',
  },
  {
    question: 'Dois-je utiliser l\'expansion horizontale ou un chanfrein CAO ?',
    answer: 'Utilisez l\'expansion horizontale du slicer pour une correction rapide au niveau du profil. Utilisez un chanfrein CAO pour les pièces fonctionnelles où le bord inférieur touche une autre pièce, repose sur une surface de référence ou doit rester reproductible entre les slicers.',
  },
  {
    question: 'Pourquoi la température du plateau affecte-t-elle le pied d\'éléphant ?',
    answer: 'Un plateau plus chaud maintient le polymère inférieur plus mou plus longtemps. Le cordon ramolli peut s\'écouler horizontalement sous la pression de la buse, donc le calculateur augmente la correction au-dessus du point de référence de 60 °C.',
  },
  {
    question: 'Le pied d\'éléphant est-il identique à la sur-extrusion ?',
    answer: 'Non. La sur-extrusion affecte de nombreuses couches. Le pied d\'éléphant se concentre à la base où les premières couches sont comprimées et chauffées par le plateau, bien que la sur-extrusion puisse l\'aggraver.',
  },
];

const howToData = [
  { name: 'Imprimer un coupon', text: 'Utilisez le même matériau, la même température de plateau, la même hauteur de première couche et les mêmes réglages de première couche que pour l\'impression de production.' },
  { name: 'Mesurer l\'erreur de base', text: 'Soustrayez la dimension stable de la paroi supérieure de la dimension la plus large de la base.' },
  { name: 'Saisir la pression et la température', text: 'Fournissez la hauteur de la première couche, l\'espace de pression Z effectif et la température du plateau.' },
  { name: 'Appliquer la correction', text: 'Utilisez la valeur d\'expansion horizontale négative dans le slicer ou modélisez le chanfrein de 45 degrés suggéré.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Entrées de compensation de pied d\'éléphant',
    resultsAriaLabel: 'Résultats de correction de pied d\'éléphant',
    canvasAriaLabel: 'Visualisation en coupe du profil de pied d\'éléphant actuel et corrigé',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    materialLabel: 'Préréglage de matériau',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Personnalisé',
    measuredErrorLabel: 'Erreur de base mesurée',
    layerHeightLabel: 'Hauteur de première couche',
    zPressureLabel: 'Écart de pression Z-offset',
    bedTemperatureLabel: 'Température du plateau',
    targetToleranceLabel: 'Tolérance cible',
    expansionLabel: 'Expansion du slicer',
    chamferLabel: 'Chanfrein CAO',
    thermalFactorLabel: 'Facteur thermique',
    verdictLabel: 'Objectif de précision dimensionnelle',
    currentProfileLabel: 'Pied d\'éléphant mesuré',
    correctedProfileLabel: 'Profil corrigé',
    slicerCommandLabel: 'Commande du slicer',
    cadCommandLabel: 'Commande CAO',
    copyButton: 'Copier le rapport de correction',
    copiedButton: 'Copié',
    copyTemplate: 'Compensation de pied d\'éléphant: expansion horizontale du slicer {expansion}, chanfrein CAO {chamfer} à 45°, facteur thermique {phi}, verdict: {verdict}.',
    slicerCommandTemplate: 'Expansion horizontale: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_corr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | rapport de pression Z {ratio}',
    optimalVerdict: '< 0,05 mm de tolérance: correction facultative, vérifier au pied à coulisse.',
    watchVerdict: 'Déviation contrôlée: appliquer la compensation du slicer et réimprimer le coupon.',
    severeVerdict: 'Étalement de base sévère: corriger la pression Z avant de se fier au décalage du slicer.',
    mmUnit: 'mm',
    inchUnit: 'po',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'La compensation de pied d\'éléphant comme problème de précision dimensionnelle', level: 2 },
    { type: 'paragraph', html: 'Le pied d\'éléphant est l\'expansion vers l\'extérieur des premières couches imprimées au-delà de la limite CAO nominale. Sur un cube d\'étalonnage, il apparaît comme une lèvre à la base. Sur les pièces techniques, il devient une erreur fonctionnelle: les queues d\'aronde coincent, les trous près du plateau de construction se ferment, les clips perdent leur jeu, les plaques d\'assemblage basculent sur un bord surélevé et les blocs de calibrage ne reposent plus à plat. Un <strong>calculateur de compensation de pied d\'éléphant</strong> utile ne peut donc pas être traité comme un ajustement cosmétique de flux. Il doit convertir une erreur dimensionnelle mesurée en une valeur d\'expansion horizontale négative et, lorsque c\'est possible, en un chanfrein CAO qui supprime le chemin de matériau comprimé de la conception elle-même.' },
    { type: 'paragraph', html: 'Ce calculateur modélise la correction à partir de trois entrées physiques qui affectent fortement le défaut: l\'erreur de base mesurée, la hauteur de la première couche et l\'écart de pression Z effectif. La relation centrale est <code>E_corr = Erreur x (HauteurCouche / PressionZOffset) x phi_temp</code>. Le multiplicateur de température <code>phi_temp</code> augmente au-dessus d\'un plateau de référence à 60 °C car une base plus chaude maintient le polymère plus mou plus longtemps et permet à la charge de la buse de pousser le matériau latéralement. Le résultat est rapporté comme expansion horizontale négative pour le slicer et comme profondeur de chanfrein à 45 degrés pour la CAO.' },
    { type: 'stats', columns: 3, items: [
      { value: '0,01 mm', label: 'résolution de saisie pour le réglage dimensionnel' },
      { value: '45°', label: 'angle de chanfrein CAO par défaut' },
      { value: 'phi_temp', label: 'multiplicateur de flux de température du plateau' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Mesurez l\'erreur, pas la lèvre visuelle', html: 'Imprimez un coupon carré ou rectangulaire, mesurez la paroi nominale ou la dimension extérieure au-dessus de la base, puis mesurez la même dimension sur les premières couches. La différence entre ces deux mesures est l\'erreur de pied d\'éléphant. N\'estimez pas à partir d\'une photographie ; l\'outil est conçu pour les données de pied à coulisse.' },

    { type: 'title', text: 'Pourquoi le pied d\'éléphant se produit: pression de buse, chaleur et écoulement du plastique', level: 2 },
    { type: 'paragraph', html: 'La première couche est intentionnellement comprimée pour que le filament mouille le plateau et adhère. Cette compression transforme la buse en un petit applicateur de pression. Le polymère fondu sort de la buse, est pressé entre la buse et la surface de construction, et doit occuper le volume disponible. Lorsque l\'écart Z est trop petit, il n\'y a pas assez d\'espace vertical pour le cordon d\'extrusion commandé, donc le matériau s\'écoule latéralement. La base s\'élargit même lorsque le reste de l\'impression est dimensionnellement précis.' },
    { type: 'paragraph', html: 'La température du plateau modifie la sévérité. Le PLA à 60 °C peut être proche de sa région de transition vitreuse, le PETG à 75 °C reste collant et complaisant, et l\'ABS ou l\'ASA sur un plateau à 100 °C reste chaud dans les premières couches. Un plateau plus chaud n\'améliore pas seulement l\'adhérence ; il retarde également la solidification à la base. C\'est pourquoi ce calculateur applique un facteur thermique: <strong>1,00 à 60 °C, plus 0,05 pour chaque 5 °C supplémentaires</strong>. Un plateau PETG à 75 °C utilise donc un facteur d\'environ 1,15 avant limitation.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Dominé par la pression Z', description: 'Un écart de buse très faible aplatit le cordon et pousse le plastique vers l\'extérieur. L\'erreur est la plus marquée sur la première couche et s\'améliore souvent après la correction du Z-offset.', points: ['Première ligne large', 'Surface écrasée brillante', 'Bordure type brim'] },
      { title: 'Dominé thermiquement', description: 'La base reste molle car la chaleur du plateau ou de l\'enceinte est élevée. La lèvre peut s\'étendre sur plusieurs couches même avec une première couche raisonnable.', highlight: true, points: ['Bord inférieur arrondi', 'Courant sur PETG ou ABS', 'Refroidissement lent'] },
      { title: 'Dominé par le flux', description: 'Le multiplicateur d\'extrusion, le diamètre du filament ou le flux de la première couche est trop élevé. Toute la région inférieure peut sembler surremplie, pas seulement le périmètre.', points: ['Dessus rugueux de la première couche', 'Lignes trop larges', 'Espaces fermés'] },
    ] },
    { type: 'tip', title: 'Utilisez le Z offset comme entrée, pas comme supposition', html: 'L\'écart de pression Z est le jeu effectif qui force le cordon dans le plateau. Si votre slicer rapporte une première couche de 0,20 mm mais que l\'écrasement réel se comporte comme 0,10 mm, utilisez l\'écart de pression le plus petit. Cela rend la compensation calculée plus grande, ce qui correspond à la physique d\'un cordon plus comprimé.' },

    { type: 'title', text: 'Comment mesurer l\'expansion de base pour le calculateur', level: 2 },
    { type: 'paragraph', html: 'Utilisez un coupon d\'essai simple avec une dimension extérieure connue, comme 20,00 mm, 30,00 mm ou 40,00 mm. Le coupon doit avoir des côtés verticaux droits, au moins 8 à 12 mm de hauteur et aucun chanfrein lors du premier essai. Mesurez la dimension du corps plusieurs millimètres au-dessus du plateau où le pied d\'éléphant a disparu. Mesurez ensuite la même dimension à la partie la plus large de la base. La différence est l\'erreur extérieure totale pour cet axe.' },
    { type: 'paragraph', html: 'Si un cube de 20,00 mm mesure 20,02 mm au milieu mais 20,24 mm à la base, l\'erreur de base relative au corps stable est de 0,22 mm. Saisissez 0,22 mm plutôt que la différence par rapport au nominal. Cela élimine le retrait non lié, l\'erreur de pas XY ou le biais de largeur de ligne du slicer du calcul du pied d\'éléphant. Vous isolez la déformation de la base, pas l\'étalonnage de l\'imprimante entière.' },
    { type: 'list', items: [
      'Mesurez après que la pièce a refroidi à température ambiante, en particulier pour l\'ABS, l\'ASA, le PETG et les grandes pièces en PLA.',
      'Utilisez une légère pression du pied à coulisse ; serrer une base ramollie ou texturée peut cacher la vraie lèvre.',
      'Prenez des mesures sur les côtés X et Y car le mouvement du plateau, la direction du ventilateur et l\'inclinaison du portique peuvent rendre le défaut asymétrique.',
      'Ignorez le matériau de brim et de jupe. Retirez le brim proprement avant de mesurer la paroi réelle de la pièce.',
      'Réimprimez le même coupon après avoir appliqué la compensation pour que la mesure suivante soit comparable.',
    ] },
    { type: 'table', headers: ['Observation', 'Cause probable', 'Meilleure première action'], rows: [
      ['La base est plus large mais la paroi supérieure est précise', 'Pied d\'éléphant dû à la pression de la première couche', 'Utilisez ce calculateur et appliquez une expansion horizontale négative.'],
      ['Chaque couche est surdimensionnée', 'Échelle XY, multiplicateur d\'extrusion ou erreur de diamètre de filament', 'Étalonnez le flux et XY avant la compensation du pied d\'éléphant.'],
      ['Seuls les coins gonflent', 'Avance de pression, vitesse ou problème de refroidissement', 'Réglez l\'avance de pression ou la vitesse dans les coins.'],
      ['La face inférieure est rugueuse et translucide', 'Buse trop proche ou flux de première couche trop élevé', 'Augmentez le Z-offset ou réduisez le flux de la première couche avant de compenser.'],
    ] },

    { type: 'title', text: 'Expansion horizontale négative vs chanfrein CAO', level: 2 },
    { type: 'paragraph', html: 'L\'expansion horizontale du slicer décale la limite du polygone vers l\'intérieur ou l\'extérieur avant la génération des trajectoires d\'outil. Pour la correction du pied d\'éléphant, le réglage est normalement négatif: si la base mesure 0,20 mm trop large, le slicer peut nécessiter une valeur proche de -0,20 mm, modifiée ici par la hauteur de couche, la pression Z et la température du plateau. C\'est rapide, réversible et utile pour les lots où chaque pièce partage une déformation similaire de la première couche.' },
    { type: 'paragraph', html: 'Un chanfrein CAO retire de la matière du modèle lui-même. Le calculateur rapporte une profondeur de chanfrein à 45 degrés comme <code>Erreur x sqrt(2)</code>, ce qui correspond à une face diagonale qui dégage la lèvre de base horizontale. Les chanfreins CAO sont souvent meilleurs pour les interfaces critiques car ils préservent les dimensions prévues de la paroi supérieure tout en donnant à la première couche une voie de dégagement contrôlée. Ils sont également plus portables entre slicers car la géométrie porte la compensation.' },
    { type: 'proscons', title: 'Choix d\'une méthode de correction', items: [
      { pro: 'L\'expansion horizontale négative peut être modifiée rapidement par profil de matériau ou d\'imprimante.', con: 'Elle peut affecter les petits textes, les parois minces, les broches et les trous si elle est appliquée globalement.' },
      { pro: 'Les chanfreins CAO sont explicites et robustes pour les surfaces d\'accouplement près du plateau de construction.', con: 'Ils nécessitent des modifications du modèle et peuvent ne pas être pratiques pour les pièces téléchargées.' },
      { pro: 'Combiner un léger décalage du slicer avec un petit chanfrein peut contrôler les bases sévères en PETG ou ABS.', con: 'Empiler les corrections sans remesurer peut sous-dimensionner la pièce.' },
    ] },
    { type: 'message', title: 'Ne compensez pas aveuglément', html: 'Si la première couche est visiblement trop écrasée, corrigez d\'abord le Z-offset. La compensation doit supprimer l\'expansion de base prévisible restante, pas cacher une buse qui laboure la première couche.' },

    { type: 'title', text: 'Compensation suggérée par matériau', level: 2 },
    { type: 'paragraph', html: 'Le comportement du matériau compte car la température d\'adhérence, la transition vitreuse, la vitesse de refroidissement et la viscosité affectent la distance que le cordon inférieur peut parcourir avant de se figer. Le PLA répond souvent bien à une petite expansion horizontale négative après que le Z-offset est raisonnable. Le PETG peut nécessiter une correction plus importante car il est généralement imprimé plus chaud sur le plateau et avec une première couche réglée pour une adhérence forte. L\'ABS et l\'ASA peuvent nécessiter un dégagement CAO sur les pièces fonctionnelles car le plateau chaud et l\'enceinte maintiennent la base molle plus longtemps.' },
    { type: 'table', headers: ['Matériau', 'Plage de plateau typique', 'Objectif de tolérance de départ', 'Notes de compensation'], rows: [
      ['PLA', '55-65 °C', '< 0,05 mm', 'Commencez par un Z-offset précis, puis utilisez une petite expansion horizontale négative. Un chanfrein est utile pour les bases à ajustement serré.'],
      ['PETG', '70-85 °C', '< 0,07 mm', 'Attendez-vous à un facteur thermique plus élevé. Évitez un flux excessif de la première couche car le PETG peut former une lèvre arrondie collante.'],
      ['ABS/ASA', '90-110 °C', '< 0,08 mm', 'Utilisez des chanfreins CAO pour les pièces de production. La chaleur de l\'enceinte peut maintenir les premières couches complaisantes.'],
      ['TPU', '40-60 °C', 'spécifique à l\'application', 'Le filament flexible peut se déformer sous le pied à coulisse. Mesurez doucement et préférez le dégagement géométrique aux décalages globaux agressifs.'],
    ] },
    { type: 'card', title: 'Pourquoi le tableau est un point de départ', html: 'Une feuille PEI texturée, un plateau en verre lisse, le diamètre de la buse, la largeur de ligne, la vitesse de la première couche, le délai de refroidissement, la température de l\'enceinte et la marque de filament peuvent tous modifier l\'erreur mesurée. Le tableau établit des attentes ; le calculateur doit être piloté par votre coupon mesuré.' },
    { type: 'summary', title: 'Priorités de réglage des matériaux', items: [
      'PLA: corrigez d\'abord le Z-offset, puis utilisez une petite compensation du slicer.',
      'PETG: surveillez la température du plateau et le flux de la première couche car la base reste mobile.',
      'ABS/ASA: préférez les chanfreins CAO sur les interfaces de production et vérifiez après le préchauffage de l\'enceinte.',
      'Matériaux flexibles: la méthode de mesure compte car la base peut se comprimer sous les mâchoires du pied à coulisse.',
    ] },

    { type: 'title', text: 'Paramètres du slicer qui interagissent avec la compensation de pied d\'éléphant', level: 2 },
    { type: 'paragraph', html: 'Différents slicers exposent le paramètre sous des noms tels que Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation ou expansion de la première couche. Une expansion horizontale globale modifie tout le contour de la pièce. Un paramètre limité à la première couche n\'affecte que les couches inférieures et est généralement plus sûr pour la précision dimensionnelle. Lorsqu\'un slicer prend en charge les deux, utilisez la compensation de la première couche pour le pied d\'éléphant et réservez la compensation XY globale pour les erreurs de taille calibrées qui persistent sur toute la hauteur.' },
    { type: 'paragraph', html: 'La largeur de ligne et le flux de la première couche interagissent également avec la correction. Une ligne de première couche très large peut améliorer l\'adhérence au plateau mais augmente le volume qui doit tenir sous la buse. Si le cordon n\'a nulle part où aller verticalement, il s\'étale horizontalement. Réduire le flux de la première couche de 105 pour cent à 100 pour cent, augmenter le Z-offset de 0,02 mm ou réduire la température du plateau de 5 °C peut réduire l\'expansion négative requise plus proprement que l\'application d\'un grand décalage.' },
    { type: 'glossary', items: [
      { term: 'Expansion horizontale', definition: 'Un décalage du slicer qui expand ou contracte les contours du modèle avant de générer les trajectoires d\'outil.' },
      { term: 'Expansion de couche initiale', definition: 'Une variante qui s\'applique uniquement à la première couche ou aux couches inférieures, la rendant mieux adaptée au pied d\'éléphant.' },
      { term: 'Écart de pression Z', definition: 'L\'espace effectif buse-plateau qui détermine à quel point le premier cordon est comprimé.' },
      { term: 'Facteur thermique', definition: 'Un multiplicateur utilisé ici pour représenter l\'augmentation de l\'écoulement latéral lorsque le plateau est plus chaud que 60 °C.' },
      { term: 'Chanfrein CAO', definition: 'Un bord biseauté modélisé qui offre au matériau comprimé de la première couche une zone de dégagement géométrique.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Une grande expansion négative peut briser les petits détails', html: 'Une valeur comme -0,35 mm peut corriger la base extérieure d\'une grande boîte mais effacer de minuscules lettres en relief, réduire des nervures étroites et modifier le diamètre de petites colonnes. Lorsque la correction requise est importante, traitez-la comme un signal pour revoir le Z-offset, le flux de la première couche ou la température du plateau.' },

    { type: 'title', text: 'Flux de travail pour une correction précise du pied d\'éléphant', level: 2 },
    { type: 'list', items: [
      'Imprimez un coupon d\'étalonnage simple avec le même matériau, la même température de plateau, la même hauteur de première couche et la même vitesse de première couche que pour la pièce réelle.',
      'Mesurez la dimension stable du corps au-dessus de la base, puis mesurez la dimension la plus large de la base et soustrayez les deux.',
      'Saisissez l\'erreur mesurée, la hauteur de la première couche, l\'écart de pression Z effectif, la température du plateau et la tolérance cible.',
      'Appliquez l\'expansion horizontale négative rapportée dans le slicer, ou ajoutez le chanfrein de 45 degrés rapporté en CAO.',
      'Réimprimez le coupon et mesurez à nouveau après refroidissement.',
      'Si l\'erreur résiduelle reste au-dessus de la tolérance, ajustez par demi-pas au lieu de sauter à un décalage global extrême.',
      'Verrouillez le paramètre dans un profil de matériau seulement après que deux coupons reproductibles concordent dans votre objectif de tolérance.',
    ] },
    { type: 'tip', title: 'Utilisez le même état de plateau qu\'en production', html: 'Une première impression à froid sur un plateau épais peut se comporter différemment de la cinquième impression après que le plateau a chauffé pendant 30 minutes. Si le travail de production s\'exécute après le préchauffage, étalonnez le coupon également après le préchauffage.' },
    { type: 'diagnostic', variant: 'success', title: 'Bon objectif de correction', html: 'Pour les travaux dimensionnels FDM pratiques, une déviation de base inférieure à 0,05 mm est souvent assez petite pour que l\'ajustement d\'assemblage soit contrôlé par la conception de jeu normale plutôt que par la lèvre de pied d\'éléphant. Des objectifs plus stricts nécessitent des machines rigides, un filament stable et une technique de mesure reproductible.' },
    { type: 'summary', title: 'Points clés à retenir', items: [
      'Le pied d\'éléphant est un problème de déformation par pression et température, pas seulement un défaut visuel.',
      'Utilisez l\'erreur de base mesurée par rapport à la paroi stable, pas seulement la taille CAO nominale.',
      'L\'expansion horizontale négative est la correction du slicer ; un chanfrein à 45 degrés est la correction CAO.',
      'La température du plateau augmente le facteur thermique car la base reste plus molle et s\'écoule latéralement plus longtemps.',
      'Les valeurs de compensation sévères doivent déclencher des vérifications du Z et du flux de la première couche avant l\'utilisation en production.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
