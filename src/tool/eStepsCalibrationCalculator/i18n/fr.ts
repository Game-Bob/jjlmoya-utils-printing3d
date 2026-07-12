import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'calculateur-de-calibrage-e-steps',
  title: 'Calculateur de calibrage E steps et assistant de diagnostic d\'extrudeuse',
  description: 'Calculez les E-steps corrigés de l\'extrudeuse à partir d\'un test d\'extrusion mesuré et signalez les écarts supérieurs à 5 % avant qu\'ils ne masquent un problème mécanique.',
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    inputGroupLabel: 'Test d\'extrusion',
    currentEStepsLabel: 'E-steps actuels',
    requestedLengthLabel: 'Longueur d\'extrusion demandée',
    actualLengthLabel: 'Longueur d\'extrusion mesurée',
    newEStepsLabel: 'Nouveaux E-steps',
    errorLabel: 'Erreur détectée',
    commandLabel: 'Commande console',
    copyCommandLabel: 'Copier la commande M92',
    copiedLabel: 'Copié',
    normalStatusLabel: 'Plage de calibrage',
    criticalStatusLabel: 'Écart critique',
    normalMessage: 'L\'écart mesuré est inférieur à 5 %. N\'appliquez la valeur qu\'après avoir confirmé que le chemin du filament est propre et répétez le test une fois.',
    criticalMessage: 'Avertissement critique: L\'écart est supérieur à 5 %. Une défaillance mécanique est probable: buse bouchée, glissement de l\'extrudeuse ou tension incorrecte du ressort du galet. Inspectez le matériel avant d\'appliquer ces nouveaux E-steps.',
    diagnosticTitle: 'Vérifications mécaniques avant d\'enregistrer dans le firmware',
    diagnosticOne: 'Chauffez la buse à la température d\'impression réelle et extrudez lentement avec la hotend dégagée.',
    diagnosticTwo: 'Vérifiez l\'engrenage d\'entraînement, la tension du galet, les marques de morsure du filament et la traînée de la bobine avant de faire confiance au nombre.',
    diagnosticThree: 'Répétez le test de 100 mm après nettoyage ou changements de tension ; ne réglez pas le firmware autour d\'une extrudeuse qui patine.',
    referenceTitle: 'Règle de décision',
    formulaLabel: 'Formule',
    formulaText: 'E-steps actuels x demandé / mesuré',
    safeBandLabel: 'Erreur 0-5 %',
    safeBandText: 'Appliquer seulement après un test reproductible.',
    criticalBandLabel: 'Erreur > 5 %',
    criticalBandText: 'Inspecter d\'abord le bouchage, le glissement, la tension et la traînée.',
    repeatTestLabel: 'Après M92',
    repeatTestText: 'Refaites le même test d\'extrusion avant d\'enregistrer.',
    mmUnit: 'mm',
    inchUnit: 'po',
    stepsUnit: 'pas/mm',
    controlsAriaLabel: 'Entrées de calibrage E-steps',
    resultsAriaLabel: 'Résultats de calibrage E-steps',
  },
  seo: [
    { type: 'title', text: 'Ce que mesure réellement le calibrage des E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'Les E-steps définissent combien de pas du moteur pas à pas le firmware de l\'extrudeuse envoie pour un millimètre de déplacement du filament. Dans Marlin, la valeur est généralement stockée avec <code>M92 E...</code>, tandis que Klipper exprime souvent la même relation physique via la distance de rotation. La mesure est simple: commandez une longueur d\'extrusion connue, mesurez physiquement combien de filament s\'est déplacé, puis corrigez la valeur du firmware par le rapport entre le mouvement demandé et le mouvement réel. La formule est <code>nouveaux E-steps = E-steps actuels * longueur demandée / longueur réelle</code>.',
    },
    {
      type: 'paragraph',
      html: 'La partie dangereuse est l\'interprétation. Un calculateur peut produire un nombre à partir de n\'importe quelle mesure, y compris une mauvaise. Si l\'extrudeuse broie le filament, si la buse est partiellement bouchée ou si le ressort du galet est trop lâche, la longueur d\'extrusion mesurée sera faible. Augmenter les E-steps peut sembler résoudre le test de 100 mm, mais cela ne résout pas le problème matériel. Cela force le moteur à pousser plus fort ou plus longtemps à travers le même défaut, ce qui peut rendre les impressions réelles incohérentes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'longueur demandée courante pour un test d\'extrudeuse reproductible' },
        { value: '5 %', label: 'seuil de diagnostic où l\'inspection matérielle doit venir en premier' },
        { value: 'M92', label: 'commande Marlin utilisée pour définir les pas par unité' },
        { value: '2 décimales', label: 'précision de sortie utilisée pour la commande d\'axe E copiée' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ne pas calibrer autour d\'un défaut mécanique',
      html: 'Un écart supérieur à 5 % est suffisamment important pour que l\'imprimante puisse sous-extruder ou sur-extruder pour une raison qui n\'est pas mathématique du firmware. Inspectez le chemin de l\'extrudeuse avant d\'enregistrer une nouvelle valeur avec <code>M500</code> ou de modifier une configuration Klipper.',
    },
    { type: 'title', text: 'Comment effectuer un test d\'extrusion propre de 100 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Un test fiable des E-steps commence par une buse chaude et un chemin de filament stable. Chauffez la hotend à une température d\'impression normale pour le filament, car la protection d\'extrusion à froid existe pour une raison et parce que la contre-pression du plastique fondu modifie la charge sur l\'extrudeuse. Marquez le filament à une distance connue au-dessus de l\'entrée de l\'extrudeuse, commandez une extrusion lente de 100 mm et mesurez la distance restante pour déterminer la quantité de filament réellement déplacée.',
    },
    {
      type: 'list',
      items: [
        'Utilisez un taux d\'alimentation d\'extrusion lent pour que la hotend puisse faire fondre le matériau sans accumuler une pression anormale.',
        'Faites la marque sur le filament avec un pied à coulisse ou un marqueur fin plutôt qu\'en estimant à l\'œil.',
        'Laissez la bobine libre de tourner pour que la traînée de la bobine ne ressemble pas à une erreur d\'E-steps.',
        'Effectuez le test avec le même diamètre et type de filament que vous utilisez normalement.',
        'Répétez la mesure après avoir changé la tension de l\'engrenage d\'entraînement, l\'état de la buse ou la température de la hotend.',
      ],
    },
    {
      type: 'table',
      headers: ['Résultat mesuré', 'Erreur', 'Première interprétation', 'Meilleure action suivante'],
      rows: [
        ['98 à 102 mm', '0 à 2 %', 'Faible dispersion de mesure normale', 'Répéter une fois et faire la moyenne si nécessaire'],
        ['95 à 105 mm', '2 à 5 %', 'La correction du firmware peut être raisonnable', 'Vérifier le chemin, puis appliquer la valeur calculée'],
        ['Moins de 95 mm', 'Supérieur à 5 %', 'Probable glissement, bouchage, traînée ou problème de pression', 'Inspecter la mécanique avant le firmware'],
        ['Plus de 105 mm', 'Supérieur à 5 %', 'Mauvaise valeur précédente ou problème de configuration de mesure', 'Vérifier les unités et répéter le test'],
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez une variable propre',
      html: 'Ne modifiez pas simultanément le débit, le multiplicateur d\'extrusion, le pressure advance et les E-steps. Les E-steps doivent décrire le mouvement moteur-à-filament, tandis que le débit et le multiplicateur d\'extrusion ajustent la sortie de matériau du slicer pour un filament et un profil d\'impression spécifiques.',
    },
    { type: 'title', text: 'Pourquoi l\'avertissement des 5 % est important', level: 2 },
    {
      type: 'paragraph',
      html: 'Une erreur d\'extrusion de 5 % signifie qu\'une commande de 100 mm a produit moins de 95 mm ou plus de 105 mm de mouvement réel. Ce n\'est pas un petit problème d\'arrondi. Avec un filament typique de 1,75 mm, 5 mm d\'alimentation manquante sur un test court représentent un déficit de matériau visible. Dans les impressions réelles, cela peut se manifester par des parois faibles, des surfaces supérieures clairsemées, des premières couches incohérentes et une mauvaise fiabilité dimensionnelle. Plus important encore, la sous-extrusion à cette échelle a souvent une cause physique.',
    },
    {
      type: 'paragraph',
      html: 'L\'assistant de diagnostic signale ce seuil car la correction du firmware peut masquer les symptômes. Si l\'engrenage cannelé est rempli de poussière de plastique, le moteur peut sauter seulement pendant les mouvements rapides. Si la buse est partiellement bouchée, un test lent peut réussir après une correction importante, mais l\'imprimante échouera toujours pendant le remplissage à haut débit. Si la tension du galet est trop élevée, le filament peut se déformer et se coincer en aval ; si elle est trop faible, il peut patiner. La bonne réparation est mécanique, pas un nombre d\'axe E plus grand.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Erreur de calibrage saine',
          description: 'Petit écart causé par l\'ancienne valeur du firmware, la tolérance du diamètre de l\'engrenage ou le bruit de mesure.',
          points: ['Généralement inférieur à 5 %', 'Reproductible sur deux tests', 'Pas de clics ni de poussière de filament', 'La correction reste modeste'],
        },
        {
          title: 'Erreur d\'extrusion due à un défaut',
          description: 'Grand écart causé par l\'incapacité de l\'extrudeuse à déplacer le filament comme commandé.',
          highlight: true,
          points: ['Supérieur à 5 %', 'Change entre des tests répétés', 'Clics, broyage ou marques de morsure', 'Souvent pire à vitesse élevée'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Avant d\'accepter une correction critique',
      items: [
        'Inspectez la buse pour un bouchage partiel et nettoyez-la ou remplacez-la si l\'extrusion ondule ou pulse.',
        'Brossez les dents de l\'engrenage d\'entraînement et enlevez la poussière de filament.',
        'Réglez la tension du galet pour que l\'engrenage saisisse sans aplatir le filament.',
        'Vérifiez la traînée de la bobine, le siège du tube Bowden et la friction du chemin du filament.',
        'Refaites la même mesure avant de modifier le firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 et distance de rotation Klipper', level: 2 },
    {
      type: 'paragraph',
      html: 'Sur le firmware de style Marlin, <code>M92 E...</code> définit les pas de l\'extrudeuse par millimètre pour la session en cours. De nombreuses imprimantes ont besoin de <code>M500</code> ensuite pour enregistrer la valeur en EEPROM, sinon le réglage peut disparaître après un redémarrage. Certaines versions de firmware verrouillées ou modifiées par le fournisseur peuvent ignorer les sauvegardes EEPROM ou nécessiter de modifier la configuration source du firmware. Vérifiez toujours la valeur après redémarrage avec <code>M503</code> si l\'imprimante le supporte.',
    },
    {
      type: 'paragraph',
      html: 'Klipper utilise couramment <code>rotation_distance</code> plutôt que les E-steps dans printer.cfg. L\'idée de calibrage physique est la même, mais la direction numérique est inversée car la distance de rotation décrit la quantité de filament déplacée par rotation du moteur, pas le nombre de pas nécessaires par millimètre. Cet outil produit une commande <code>M92</code> car il est destiné à être directement utilisable dans les consoles Marlin et les interfaces de firmware compatibles. Les utilisateurs de Klipper peuvent toujours utiliser l\'erreur mesurée comme signal de diagnostic avant de recalculer la distance de rotation.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'Le nombre de pas moteur que le firmware envoie pour déplacer d\'un millimètre le filament sur l\'axe de l\'extrudeuse.' },
        { term: 'M92', definition: 'Une commande G-code utilisée par le firmware Marlin pour définir les pas par unité pour un ou plusieurs axes.' },
        { term: 'M500', definition: 'Une commande Marlin qui enregistre les réglages actuels en EEPROM lorsque l\'imprimante le supporte.' },
        { term: 'Distance de rotation', definition: 'Réglage Klipper qui représente le déplacement du filament par rotation complète du moteur.' },
        { term: 'Multiplicateur d\'extrusion', definition: 'Échelle de débit au niveau du slicer pour un profil de matériau, distincte des E-steps machine.' },
      ],
    },
    {
      type: 'card',
      title: 'Flux de travail de la commande console',
      html: 'Envoyez la commande <code>M92 E...</code> copiée, répétez le test d\'extrusion, et n\'enregistrez la valeur qu\'après que la longueur mesurée soit reproductible. Un seul bon nombre est une preuve plus faible que deux mesures cohérentes.',
    },
    { type: 'title', text: 'Problèmes mécaniques qui ressemblent à de mauvais E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'Une buse partiellement bouchée est le piège le plus courant. Le moteur de l\'extrudeuse peut tourner de la quantité correcte pendant que la pression s\'accumule dans la hotend, ce qui fait que l\'engrenage d\'entraînement mord le filament au lieu de l\'avancer. La longueur d\'extrusion mesurée devient courte, la formule augmente les E-steps, et l\'impression suivante peut encore sous-extruder car l\'obstruction de la buse persiste. Si le filament extrudé ondule fortement, pulse, sort fin ou change de direction en quittant la buse, nettoyez la hotend avant de calibrer.',
    },
    {
      type: 'paragraph',
      html: 'Le glissement de l\'extrudeuse peut provenir d\'erreurs de tension opposées. Trop peu de force du ressort permet à l\'engrenage de tourner contre le filament. Trop de force du ressort peut ovaliser le filament mou, augmenter la friction dans un tube Bowden ou créer des marques de morsure profondes qui se coincent à l\'entrée du heat break. Le filament flexible est particulièrement sensible. Le seuil de diagnostic existe pour faire réfléchir l\'utilisateur et inspecter ces conditions avant de convertir un problème de traction en un nombre de firmware.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Symptômes critiques pendant le test',
      html: 'Arrêtez-vous et inspectez le matériel si l\'extrudeuse clique, de la poussière de filament apparaît, le moteur devient anormalement chaud, l\'extrusion sort par pulses ou la longueur mesurée change de plusieurs millimètres entre des tests répétés de 100 mm.',
    },
    {
      type: 'proscons',
      title: 'Corriger les E steps après une grande erreur',
      items: [
        { pro: 'Peut restaurer une alimentation précise du filament lorsque l\'ancienne valeur du firmware était vraiment incorrecte.', con: 'Peut masquer un engrenage d\'entraînement qui patine ou une buse bouchée lorsqu\'elle est utilisée sans inspection.' },
        { pro: 'Commande simple facile à appliquer et à répéter.', con: 'Une valeur enregistrée incorrecte affecte tous les profils de slicer et tous les matériaux.' },
        { pro: 'Utile après avoir changé le rapport de transmission de l\'extrudeuse ou le matériel du moteur.', con: 'Ne remplace pas le calibrage du débit sur les parois imprimées.' },
      ],
    },
    { type: 'title', text: 'E-steps vs calibrage du débit', level: 2 },
    {
      type: 'paragraph',
      html: 'Le calibrage des E-steps appartient à la couche machine. Il vérifie si le mécanisme de l\'extrudeuse déplace la longueur demandée de filament brut. Le calibrage du débit appartient à la couche du profil d\'impression. Il vérifie si un filament, une température, une buse, une largeur de ligne et une stratégie de slicer spécifiques produisent l\'épaisseur de paroi et la qualité de surface souhaitées. Mélanger les deux crée des profils confus: une imprimante peut réussir un test d\'E-steps de 100 mm et avoir quand même besoin d\'un multiplicateur d\'extrusion de 0,96 pour une marque de PETG.',
    },
    {
      type: 'paragraph',
      html: 'Calibrez les E-steps après avoir changé le matériel de l\'extrudeuse, les pas du moteur, le microstepping, le rapport de transmission ou le diamètre de l\'engrenage d\'entraînement. Calibrez le débit après avoir changé la marque de filament, la couleur, la taille de la buse, la température ou la largeur de ligne du slicer. Le pressure advance, le linear advance et la rétraction sont des outils de contrôle de pression séparés et doivent être réglés après que le mouvement d\'extrusion de base soit fiable.',
    },
    {
      type: 'table',
      headers: ['Calibrage', 'Couche', 'Change quand', 'Ne pas l\'utiliser pour corriger'],
      rows: [
        ['E-steps', 'Firmware ou config machine', 'Le matériel de l\'extrudeuse ou la configuration moteur change', 'Filament humide, buses bouchées, débit slicer'],
        ['Multiplicateur de débit', 'Profil matériau slicer', 'La marque, couleur, buse ou température du filament change', 'Mauvais rapport de transmission ou extrudeuse qui patine'],
        ['Pressure advance', 'Dynamique firmware', 'Le chemin, la vitesse, l\'accélération ou le matériau de l\'extrudeuse change', 'Sous-extrusion statique'],
        ['Rétraction', 'Comportement de déplacement slicer', 'Le filage, le suintement ou les artefacts de déplacement changent', 'Erreurs de distance d\'alimentation de base'],
      ],
    },
    {
      type: 'message',
      title: 'Règle du technicien de support',
      html: 'Si une valeur de calibrage change dramatiquement, supposez que la mesure vous parle de la machine. Inspectez d\'abord, calculez ensuite, enregistrez en dernier.',
    },
    { type: 'title', text: 'Reproductibilité et qualité de mesure', level: 2 },
    {
      type: 'paragraph',
      html: 'Un bon résultat d\'E-steps est reproductible. Si un test mesure 94 mm, le suivant 99 mm et le suivant 96 mm, la moyenne est moins importante que la dispersion. Des résultats variables pointent vers la traction, la température, la pression ou la technique de mesure. Avant d\'enregistrer une nouvelle valeur, répétez l\'extrusion au moins deux fois après tout changement mécanique. Les deux résultats doivent être suffisamment proches pour que le nouveau nombre de firmware ne poursuive pas du bruit.',
    },
    {
      type: 'tip',
      title: 'Mesurez au dessus de l\'extrudeuse quand c\'est possible',
      html: 'Marquer le filament avant qu\'il n\'entre dans l\'extrudeuse évite toute confusion due au filament courbé sortant de la buse. Mesurez la distance d\'un point de référence fixe à la marque avant et après la commande.',
    },
    {
      type: 'summary',
      title: 'Séquence de calibrage fiable',
      items: [
        'Chauffez la buse et nettoyez l\'ancien matériau.',
        'Marquez le filament avec une distance de référence précise.',
        'Extrudez 100 mm lentement et mesurez le mouvement réel.',
        'Utilisez le calculateur et inspectez toute erreur supérieure à 5 %.',
        'Appliquez <code>M92 E...</code>, retestez, puis enregistrez seulement si reproductible.',
      ],
    },
  ],
  faq: [
    {
      question: 'Quelle formule ce calculateur d\'E-steps utilise-t-il ?',
      answer: 'Il utilise nouveaux E-steps = E-steps actuels * longueur d\'extrusion demandée / longueur d\'extrusion mesurée.',
    },
    {
      question: 'Pourquoi l\'outil avertit-il en cas d\'erreur supérieure à 5 % ?',
      answer: 'Un écart supérieur à 5 % est suffisamment important pour suggérer un problème mécanique tel qu\'un glissement de l\'extrudeuse, un bouchage partiel, une traînée de bobine ou une tension incorrecte du galet. Inspectez le matériel avant d\'enregistrer une nouvelle valeur de firmware.',
    },
    {
      question: 'Puis-je utiliser la commande M92 dans Klipper ?',
      answer: 'La commande M92 copiée est destinée au firmware compatible Marlin. Klipper utilise généralement rotation_distance, mais la même erreur mesurée reste utile pour diagnostiquer l\'extrudeuse.',
    },
    {
      question: 'Dois-je enregistrer la nouvelle valeur immédiatement ?',
      answer: 'Non. Appliquez-la temporairement, répétez le test d\'extrusion et n\'enregistrez qu\'après que le mouvement mesuré est reproductible.',
    },
    {
      question: 'Le calibrage des E-steps est-il identique au calibrage du débit ?',
      answer: 'Non. Les E-steps calibrant le mouvement de la machine. Le débit ou multiplicateur d\'extrusion calibre la sortie de matériau du slicer pour un filament et un profil d\'impression spécifiques.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Entrez les E-steps actuels', text: 'Lisez les pas actuels de l\'extrudeuse par millimètre depuis le firmware ou les paramètres de l\'imprimante.' },
    { name: 'Effectuez un test d\'extrusion', text: 'Commandez une longueur connue, normalement 100 mm, avec la hotend à température d\'impression.' },
    { name: 'Mesurez le mouvement réel', text: 'Entrez le mouvement du filament physiquement mesuré et examinez l\'erreur détectée.' },
    { name: 'Inspectez si nécessaire', text: 'Si l\'erreur est supérieure à 5 %, vérifiez le matériel avant d\'appliquer la commande M92.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculateur de calibrage E-steps et assistant de diagnostic d\'extrudeuse',
      description: 'Calculez les E-steps corrigés de l\'extrudeuse d\'une imprimante 3D et signalez les grands écarts à risque mécanique.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quelle formule ce calculateur d\'E-steps utilise-t-il ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Il utilise nouveaux E-steps = E-steps actuels * longueur d\'extrusion demandée / longueur d\'extrusion mesurée.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment calibrer les E-steps de l\'extrudeuse d\'une imprimante 3D',
      step: [
        { '@type': 'HowToStep', text: 'Entrez la valeur actuelle des E-steps.' },
        { '@type': 'HowToStep', text: 'Commandez une longueur d\'extrusion connue, généralement 100 mm.' },
        { '@type': 'HowToStep', text: 'Mesurez le mouvement réel du filament et calculez la correction.' },
        { '@type': 'HowToStep', text: 'Inspectez d\'abord le matériel si l\'erreur détectée est supérieure à 5 %.' },
      ],
    },
  ],
};
