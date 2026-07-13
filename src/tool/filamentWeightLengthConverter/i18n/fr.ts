import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'convertisseur-poids-longueur-filament';
const title = 'Convertisseur de Poids de Filament en Longueur: Estimation Précise du Matériau';
const description = 'Convertissez les grammes de filament en mètres et en volume grâce à la densité du matériau, un diamètre de 1,75 mm ou 2,85 mm et une vérification instantanée de la suffisance de la bobine.';

const faqData = [
  {
    question: 'Comment convertir les grammes de filament en mètres ?',
    answer: 'Divisez la masse par la densité du matériau pour obtenir le volume, convertissez ce volume de centimètres cubes en millimètres cubes, puis divisez par la surface de la section circulaire du diamètre du filament.',
  },
  {
    question: 'Pourquoi la densité du matériau du filament est-elle importante ?',
    answer: 'Un même poids de PLA, PETG, ABS, TPU ou de filament chargé occupe un volume différent car chaque polymère a une densité différente. La longueur est le volume divisé par la surface du filament, donc la densité modifie directement l\'estimation en mètres.',
  },
  {
    question: 'Un filament de 1,75 mm fait-il toujours la même longueur au kilogramme ?',
    answer: 'Non. La tolérance de diamètre, la densité du matériau, les additifs et la teneur en humidité modifient tous la longueur réelle. Le calculateur donne une estimation de planification basée sur le diamètre nominal et la densité.',
  },
  {
    question: 'Puis-je utiliser le calculateur pour du filament de 2,85 mm ?',
    answer: 'Oui. Entrez 2,85 mm, ou passez en unités impériales et entrez le diamètre équivalent. La section transversale se met à jour immédiatement.',
  },
];

const howToData = [
  { name: 'Entrez la masse du filament', text: 'Saisissez la quantité de filament nécessaire d\'après le slicer, le poids restant sur une bobine ou toute valeur en grammes que vous souhaitez convertir.' },
  { name: 'Choisissez le matériau', text: 'Sélectionnez PLA, PETG, ABS, TPU, Nylon, PC ou un mélange chargé pour que le calculateur utilise la densité correcte.' },
  { name: 'Définissez le diamètre du filament', text: 'Utilisez 1,75 mm, 2,85 mm ou un diamètre mesuré si vous voulez que l\'estimation de longueur reflète une bobine spécifique.' },
  { name: 'Vérifiez la suffisance de la bobine', text: 'Entrez optionnellement le poids restant de la bobine pour savoir si vous avez assez de matériau ainsi que le surplus ou le manque exact.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    inputsTitle: 'Estimation du stock de matériau',
    materialLabel: 'Matériau',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonate',
    materialWoodLabel: 'PLA chargé bois',
    materialCarbonLabel: 'Mélange fibres de carbone',
    materialMetalLabel: 'PLA chargé métal',
    densityLabel: 'Densité',
    densityUnit: 'g/cm3',
    weightLabel: 'Poids du filament',
    weightSliderLabel: 'Curseur du poids d\'impression',
    diameterLabel: 'Diamètre du filament',
    stockLabel: 'Poids restant de la bobine',
    stockPlaceholder: 'Vérification de stock optionnelle',
    spoolStateLabel: 'État de la bobine',
    spoolScaleLabel: 'Masse consommée / disponible',
    cutLineLabel: 'Ligne d\'arrêt de fin de filament',
    resultLengthLabel: 'Longueur estimée du filament',
    resultVolumeLabel: 'Volume du polymère',
    resultAreaLabel: 'Section transversale',
    resultGramsMeterLabel: 'Masse linéique',
    enoughLabel: 'Bobine suffisante',
    shortLabel: 'Bobine insuffisante',
    noStockLabel: 'Vérification de stock inactive',
    surplusLabel: 'Surplus',
    missingLabel: 'Manque',
    formulaLabel: 'Chemin de calcul',
    formulaText: 'volume = masse / densité -> longueur = volume / section transversale',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/pi',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'pi',
    cm3Unit: 'cm3',
    in3Unit: 'po3',
    in2Unit: 'po2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'po',
  },
  seo: [
    { type: 'title', text: 'Pourquoi un calculateur de grammes en mètres basé sur la densité est plus précis', level: 2 },
    { type: 'paragraph', html: 'Un convertisseur de poids de filament en longueur ne vaut que ce que vaut le modèle de matériau qui le sous-tend. Un calculateur générique suppose souvent qu\'un kilogramme de chaque filament occupe le même volume, mais le filament FFF est vendu au poids alors que l\'extrudeuse consomme un brin cylindrique en longueur. Le pont entre ces deux mesures est la <strong>densité</strong>. Le PLA à environ 1,24 g/cm3, le PETG autour de 1,27 g/cm3, l\'ABS près de 1,04 g/cm3 et le TPU autour de 1,21 g/cm3 ne donnent pas le même nombre de mètres, même lorsque le poids de la bobine et le diamètre sont identiques.' },
    { type: 'paragraph', html: 'Le calcul part de la masse. Diviser les grammes par la densité donne le volume en centimètres cubes. Ce volume est ensuite converti en millimètres cubes car le diamètre du filament est normalement mesuré en millimètres. La section transversale est l\'aire d\'un cercle: pi multiplié par le rayon au carré. Enfin, le volume divisé par la surface donne une longueur en millimètres, qui peut être convertie en mètres ou en pieds. Le résultat est une estimation pratique pour vérifier si le matériau indiqué par un slicer peut être imprimé à partir du stock présent sur une bobine.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Densité typique du PLA en g/cm3' },
      { value: '2,405', label: 'Surface en mm2 pour un filament nominal de 1,75 mm' },
      { value: '6,379', label: 'Surface en mm2 pour un filament nominal de 2,85 mm' },
      { value: '3 entrées', label: 'Masse, densité et diamètre définissent la conversion' },
    ] },
    { type: 'table', headers: ['Matériau', 'Densité de planification', 'Pourquoi ce nombre est important'], rows: [
      ['PLA', '1,24 g/cm3', 'Référence courante pour l\'impression de bureau et une bonne base pour les prototypes.'],
      ['PETG', '1,27 g/cm3', 'Légèrement plus dense que le PLA, donc le même poids donne moins de longueur.'],
      ['ABS', '1,04 g/cm3', 'Une densité plus faible signifie plus de longueur par gramme que le PLA au même diamètre.'],
      ['TPU', '1,21 g/cm3', 'Le filament flexible est proche du PLA mais mérite tout de même une modélisation séparée.'],
      ['Mélanges chargés', 'Variable', 'Les additifs bois, fibres de carbone, métal et verre peuvent éloigner la densité du polymère de base.'],
    ] },
    { type: 'title', text: 'Les formules de conversion exactes pour l\'estimation du stock de filament', level: 2 },
    { type: 'paragraph', html: 'Le modèle mathématique est volontairement simple car chaque terme a une signification physique. La section transversale est <code>pi x (diamètre / 2)^2</code>. Le volume est <code>poids / densité</code>. La longueur est <code>volume x 1000 / section transversale</code> quand le volume est en cm3 et la section en mm2 ; le résultat est en millimètres, puis divisé par 1000 pour obtenir des mètres. C\'est la même géométrie utilisée pour raisonner sur le volume d\'extrusion, le débit maximal et la consommation de matériau dans les slicers.' },
    { type: 'diagnostic', variant: 'info', title: 'La tolérance de diamètre est la plus grande incertitude au quotidien', badge: 'Note de mesure', html: 'Une bobine nominale de 1,75 mm peut ne pas faire exactement 1,75 mm sur toute sa longueur. Comme la surface dépend du rayon au carré, une petite différence de diamètre modifie la longueur calculée et le volume d\'extrusion réel. Pour les vérifications de stock courantes, le diamètre nominal suffit. Pour un étalonnage, utilisez un pied à coulisse à plusieurs endroits et entrez la moyenne des diamètres.' },
    { type: 'list', items: [
      'Utilisez les grammes quand vous copiez la consommation depuis des slicers comme PrusaSlicer, Cura, Bambu Studio ou OrcaSlicer.',
      'Utilisez le poids restant mesuré de la bobine après avoir soustrait la tare de la bobine vide si vous voulez une vérification de suffisance fiable.',
      'Utilisez la densité de la fiche technique du fabricant pour les composites spécialisés.',
      'Utilisez 2,85 mm au lieu de 1,75 mm quand la machine utilise du filament plus gros, car la section transversale est radicalement différente.',
    ] },
    { type: 'tip', title: 'N\'incluez pas la tare de la bobine vide dans le stock restant', html: 'Une bobine sur une balance inclut le poids du noyau en plastique ou en carton. Si la bobine vide pèse 180 g et que la balance affiche 430 g, l\'estimation de filament utilisable doit être de 250 g. Saisir le poids brut de la bobine rend le signal vert de suffisance trop optimiste.' },
    { type: 'title', text: 'Longueur du filament 1,75 mm vs 2,85 mm pour un même poids', level: 2 },
    { type: 'paragraph', html: 'Le diamètre a un impact plus important que ce que beaucoup d\'utilisateurs imaginent. Un brin de 2,85 mm a plus du double de la section transversale d\'un brin de 1,75 mm, donc un kilogramme donne beaucoup moins de mètres. Cela ne signifie pas qu\'un diamètre est plus économique en soi ; les deux peuvent imprimer le même volume de pièce. Cela signifie que le nombre de longueur de stock ne peut pas être comparé sans le contexte du diamètre. Quand un slicer indique des grammes, il normalise déjà la consommation par la masse ; quand un capteur de fin de filament ou une estimation manuelle de bobine raisonne en mètres, le diamètre devient central.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Filament 1,75 mm', description: 'Longueur de brin plus grande par kilogramme et format dominant pour les imprimantes de bureau actuelles.', points: ['Idéal pour les extrudeuses compactes', 'Plus de mètres sur la même masse de bobine', 'Surface nominale d\'environ 2,405 mm2'] },
      { title: 'Filament 2,85 mm', description: 'Longueur de brin plus courte par kilogramme avec une section d\'alimentation plus grande, souvent vu sur les machines anciennes ou professionnelles.', points: ['Surface nominale d\'environ 6,379 mm2', 'Moins sensible à la compression du feeder dans certaines configurations', 'Ne pas utiliser les hypothèses du 1,75 mm'] },
    ] },
    { type: 'table', headers: ['Scénario', 'Ce qui change', 'Conséquence pour la planification'], rows: [
      ['Même polymère, diamètre plus grand', 'La surface augmente', 'Les mètres diminuent pour les mêmes grammes.'],
      ['Même diamètre, densité plus faible', 'Le volume augmente', 'Les mètres augmentent pour les mêmes grammes.'],
      ['Mêmes grammes, filament chargé', 'La densité peut augmenter', 'Les mètres peuvent être plus courts que prévu.'],
      ['Filament humide', 'La masse mesurée augmente légèrement', 'La bobine peut sembler plus lourde sans ajouter de polymère sec utile.'],
    ] },
    { type: 'title', text: 'Comment utiliser la vérification de suffisance de la bobine avant de lancer une longue impression', level: 2 },
    { type: 'paragraph', html: 'Le champ optionnel de stock restant transforme le convertisseur en un tableau de bord go/no-go. Entrez la masse nécessaire pour le travail comme poids du filament, puis entrez le filament utilisable restant sur la bobine actuelle. Le résultat compare les grammes directement et convertit également la différence en mètres ou en pieds en utilisant le même modèle de matériau et de diamètre. Le vert signifie que la bobine a assez de stock ; le rouge signifie que le travail est en déficit et montre l\'écart exact.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Pourquoi les grammes et les mètres sont tous deux affichés', html: 'Les grammes sont le langage de l\'achat et du slicer. Les mètres sont le langage de la longueur de brin utilisé par certains écrans de firmware, les estimations de fin de filament et les calculs manuels de bobine. Afficher les deux évite une erreur de planification courante: avoir assez de longueur sous une hypothèse de densité mais pas assez de masse pour le matériau réel.' },
    { type: 'proscons', title: 'Méthodes de validation du stock', items: [
      { pro: 'Peser la bobine est rapide et fonctionne même quand le rouleau est partiellement utilisé.', con: 'Vous devez connaître ou estimer la tare de la bobine vide.' },
      { pro: 'Utiliser les grammes du slicer est généralement cohérent avec le poids d\'achat du matériau.', con: 'Les estimations du slicer peuvent changer avec le volume de purge, les supports, le bord et les maillages de modification.' },
      { pro: 'La longueur est intuitive pour comparer les chemins de filament et les distances de fin de filament.', con: 'La longueur change avec la densité et le diamètre, elle n\'est donc pas universelle d\'un matériau à l\'autre.' },
      { pro: 'La conversion basée sur la densité gère mieux le PLA, le PETG, l\'ABS, le TPU et les composites.', con: 'Les additifs spécifiques au fabricant peuvent nécessiter une valeur de densité personnalisée.' },
    ] },
    { type: 'title', text: 'Les filaments composites et spécialisés nécessitent des valeurs de densité personnalisées', level: 2 },
    { type: 'paragraph', html: 'Les filaments chargés sont la principale raison pour laquelle un estimateur de matériau sérieux devrait exposer la densité plutôt que de la masquer. Le PLA chargé bois, le nylon fibres de carbone, le PLA chargé métal, le filament phosphorescent, les matériaux techniques chargés verre et les mélanges de type céramique peuvent s\'écarter fortement du polymère de base. Un filament chargé métal peut sembler lourd car sa densité est élevée ; les mêmes 500 g peuvent représenter beaucoup moins de volume et moins de longueur qu\'un PLA standard. Pour une impression technique coûteuse, cette différence n\'est pas académique. Elle peut décider si les dix pour cent finaux d\'une impression se terminent ou s\'arrêtent.' },
    { type: 'glossary', items: [
      { term: 'Densité', definition: 'Masse par unité de volume, exprimée ici en grammes par centimètre cube.' },
      { term: 'Section transversale', definition: 'La surface circulaire du brin de filament calculée à partir du diamètre.' },
      { term: 'Masse linéique', definition: 'Combien de grammes pèse un mètre ou un pied de filament pour le matériau et le diamètre sélectionnés.' },
      { term: 'Tare', definition: 'Le poids de la bobine vide qui doit être soustrait de la lecture de la balance.' },
      { term: 'Diamètre nominal', definition: 'La taille de filament annoncée, généralement 1,75 mm ou 2,85 mm, avant mesure de la tolérance réelle.' },
    ] },
    { type: 'message', title: 'La donnée du fabricant prime', html: 'Quand la bobine ou la fiche technique indique la densité, utilisez cette valeur. Les valeurs prédéfinies de densité générique sont utiles pour la planification, mais les formulations spécifiques au fournisseur, les charges de pigment et les renforts peuvent modifier le nombre.' },
    { type: 'title', text: 'Exemples pratiques pour l\'estimation de matériau en impression 3D', level: 2 },
    { type: 'paragraph', html: 'Imaginez qu\'un slicer indique qu\'un support en PETG nécessite 186 g et que vous avez une bobine partiellement utilisée. Le PETG à 1,27 g/cm3 avec du filament de 1,75 mm se convertit en environ soixante et un mètres. Si le poids de bobine utilisable après tare est de 220 g, le tableau de bord indique un surplus de 34 g et convertit cette marge en environ onze mètres. Cette marge peut suffire pour une ligne de purge et un petit bord, mais pas pour une grande erreur de support. La vérification de stock encourage l\'utilisateur à ajouter une marge réaliste avant de laisser une impression sans surveillance.' },
    { type: 'paragraph', html: 'Comparez maintenant avec l\'ABS. Comme l\'ABS est moins dense que le PETG, les mêmes 186 g deviennent un volume plus important et donc plus de longueur au même diamètre de 1,75 mm. Cela ne rend pas la pièce en ABS moins chère en soi, car le prix au kilogramme et les paramètres d\'impression comptent aussi, mais cela explique pourquoi une estimation de mètres restants copiée d\'un matériau peut en tromper un autre. Pour la gestion des stocks, la masse est le point de départ stable et la densité crée le pont vers la longueur.' },
    { type: 'summary', title: 'Liste de vérification pour une planification fiable du matériau', items: [
      'Soustrayez la tare de la bobine vide avant d\'entrer le stock restant.',
      'Utilisez la densité réelle du matériau pour les filaments chargés, renforcés ou premium.',
      'Vérifiez si votre machine utilise du filament de 1,75 mm ou 2,85 mm avant de vous fier à un nombre de longueur.',
      'Prévoyez une marge pour la purge, les supports, les bords, les premières couches ratées et les changements de profil du slicer.',
      'Considérez l\'état de suffisance vert comme une vérification de planification, pas une garantie contre les bourrages ou les défauts du capteur de fin de filament.',
    ] },
    { type: 'title', text: 'Réponse SEO: poids du filament en longueur en une phrase', level: 2 },
    { type: 'paragraph', html: 'Pour convertir le poids du filament d\'impression 3D en longueur, divisez le poids en grammes par la densité du matériau pour obtenir le volume, multipliez par 1000 pour convertir les cm3 en mm3, divisez par <code>pi x (diamètre / 2)^2</code>, puis divisez par 1000 pour lire en mètres. Cette méthode basée sur la densité est plus précise qu\'un tableau fixe de conversion grammes-mètres car le PLA, le PETG, l\'ABS, le TPU, le Nylon, le PC et les filaments composites ont tous des valeurs de densité différentes.' },
    { type: 'diagnostic', variant: 'success', title: 'Quand l\'estimation est la plus fiable', badge: 'Bonne pratique', html: 'Le résultat est le plus fiable quand le poids du slicer est définitif, que le poids restant de la bobine a été corrigé de la tare, que le diamètre est mesuré ou connu et que la densité provient du fabricant. Dans ces conditions, le convertisseur devient un outil de vérification pratique avant les longues impressions, les séries de production et les polymères techniques coûteux.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
