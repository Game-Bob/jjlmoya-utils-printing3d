import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'optimiseur-de-perimetres-et-parois',
  title: 'Optimiseur de Périmètres et Parois',
  description: 'Calcule le nombre exact de périmètres et une largeur de ligne sûre pour que l\'épaisseur de paroi imprimée corresponde au modèle CAO sans espaces internes.',
  ui: {
    controlsAriaLabel: 'Entrées de l\'optimiseur de périmètres de paroi',
    resultsAriaLabel: 'Résultats de l\'optimiseur de périmètres de paroi',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    tooltipLabel: 'Plus d\'informations',
    nozzleLabel: 'Diamètre de buse',
    nozzleHelp: 'Diamètre physique de l\'orifice de la buse. La largeur de ligne sûre est limitée à 80-120 % de cette valeur.',
    lineWidthLabel: 'Largeur de ligne',
    lineWidthHelp: 'Largeur d\'extrusion du slicer pour les parois externes et internes.',
    cadThicknessLabel: 'Épaisseur de paroi CAO',
    cadThicknessHelp: 'Épaisseur de paroi conçue qui doit être reproduite par des périmètres entiers.',
    commonNozzlesLabel: 'Tailles de buse courantes',
    infillStrategyLabel: 'Stratégie de remplissage des parois',
    perimeterFirstLabel: 'Périmètres d\'abord',
    solidInfillFallbackLabel: 'Remplissage solide de secours',
    solidInfillTip: 'Conseil: si vous préférez ne pas ajouter plus de périmètres, utilisez un remplissage solide ou un gap fill fiable dans les parois minces pour que le slicer ne laisse pas de vides internes.',
    copySolidInfillNote: 'Si vous gardez moins de périmètres, utilisez un remplissage solide ou un gap fill vérifié pour les intérieurs de parois minces.',
    visualLabel: 'Coupe transversale montrant les périmètres tassés dans l\'épaisseur de paroi CAO',
    cadEnvelopeLabel: 'Enveloppe de paroi CAO',
    lineLabel: 'Ligne d\'extrusion',
    recommendedPerimetersLabel: 'Périmètres recommandés',
    realThicknessLabel: 'Épaisseur réelle',
    residualLabel: 'Erreur résiduelle',
    verdictLabel: 'Verdict de précision',
    exactLabel: 'Exact',
    adjustLabel: 'Nécessite un ajustement de largeur de ligne',
    impossibleLabel: 'Impossible avec cette buse',
    adjustedWidthLabel: 'Largeur de ligne ajustée',
    noAdjustmentLabel: 'Aucun ajustement',
    slicerBlockLabel: 'Configuration du slicer',
    perimetersUnitLabel: 'périmètres',
    copyLabel: 'Copier les paramètres',
    copiedLabel: 'Bloc slicer copié.',
    safeRangeLabel: 'Plage de largeur de ligne sûre',
    compareLabel: 'Options de périmètres les plus proches',
    perimetersColumn: 'Périmètres',
    lineWidthColumn: 'Largeur de ligne',
    realThicknessColumn: 'Épaisseur réelle',
    errorColumn: 'Erreur',
    messageExact: 'La largeur de ligne sélectionnée se situe à moins de 0,05 mm de la paroi CAO. C\'est une bonne paroi composée uniquement de périmètres.',
    messageAdjust: 'La largeur actuelle laisse un espace mesurable. Utilisez la largeur de ligne ajustée pour fermer la paroi exactement avec des périmètres entiers.',
    messageTooThin: 'La paroi CAO est plus fine que le diamètre de la buse. Reconcevez la paroi, utilisez une buse plus petite ou acceptez un élément non structurel à ligne unique.',
    messageOutsideRange: 'Aucun ajustement dans la plage sûre de 80-120 % du diamètre de buse ne peut fermer cette paroi exactement. Modifiez la paroi CAO ou changez la taille de buse.',
    mmUnit: 'mm',
    inchUnit: 'po',
  },
  seo: [
    { type: 'title', text: 'Pourquoi l\'épaisseur de paroi doit correspondre à des périmètres entiers', level: 2 },
    {
      type: 'paragraph',
      html: 'Les slicers FDM construisent une paroi à partir de cordons d\'extrusion discrets. Une paroi CAO de 1,20 mm n\'est pas une instruction solide continue ; elle devient un, deux, trois périmètres ou plus selon la largeur de ligne, le diamètre de buse et les règles du slicer. Si le calcul ne tombe pas juste, le slicer doit choisir entre laisser un espace interne étroit, insérer un fin chemin de gap fill, sur-extruder une région ou modifier silencieusement l\'ordre des trajectoires. Les pièces fonctionnelles en souffrent car la paroi qui semblait solide en CAO peut contenir un joint faible ou un cordon irrégulier à l\'intérieur de la section.',
    },
    {
      type: 'paragraph',
      html: 'L\'équation utile est simple: <strong>épaisseur réelle de paroi = nombre de périmètres × largeur de ligne</strong>. La difficulté est de choisir des valeurs qui restent imprimables. Une largeur de ligne peut généralement descendre un peu en dessous ou monter au-dessus du diamètre de buse, mais elle ne peut pas être arbitraire. Cet optimiseur parcourt les nombres entiers de périmètres, mesure l\'erreur résiduelle par rapport à l\'épaisseur CAO et ne propose un ajustement de largeur de ligne que lorsque la largeur exacte reste dans une plage conservatrice de 80-120 % du diamètre de buse.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'seuil de précision utilisé pour le verdict' },
        { value: '80-120 %', label: 'bande de largeur de ligne sûre autour du diamètre de buse' },
        { value: 'n × largeur', label: 'équation centrale de l\'épaisseur de paroi' },
        { value: '2 décimales', label: 'précision pratique minimale du slicer' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Les périmètres sont une géométrie entière',
      html: 'Un slicer ne peut pas imprimer 2,6 périmètres normaux. Si une paroi est trop large pour deux lignes et trop étroite pour trois, elle nécessite un comportement de gap fill ou une dimension CAO corrigée.',
    },
    { type: 'title', text: 'Comment choisir l\'épaisseur de paroi CAO pour une buse de 0,4 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Une buse de 0,4 mm utilise généralement une largeur de ligne d\'environ 0,40-0,48 mm. Avec une largeur de ligne de 0,42 mm, deux périmètres produisent 0,84 mm, trois périmètres produisent 1,26 mm et quatre périmètres produisent 1,68 mm. Une paroi conçue de 1,20 mm semble raisonnable en CAO, mais elle est à 0,06 mm de trois périmètres de 0,42 mm. C\'est proche, mais pas exact. L\'optimiseur peut suggérer 3 périmètres à 0,40 mm, ce qui ferme parfaitement la paroi et reste exactement au diamètre de buse.',
    },
    {
      type: 'paragraph',
      html: 'Pour les pièces mécaniques, il est souvent préférable de concevoir les parois comme des multiples de la largeur de ligne prévue plutôt que de forcer le slicer à les réparer. Les cibles CAO courantes pour une buse de 0,4 mm sont d\'environ 0,8 mm pour les coques légères, 1,2 mm pour les parois fonctionnelles normales, 1,6 mm pour les boîtiers plus résistants et 2,0 mm ou plus pour les éléments porteurs. Les valeurs exactes doivent suivre la largeur de ligne du slicer, pas seulement le diamètre nominal de la buse.',
    },
    {
      type: 'table',
      headers: ['Buse', 'Plage de largeur de ligne sûre', 'Bonnes cibles 2 parois', 'Bonnes cibles 3 parois'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Concevoir à partir du profil du slicer en arrière',
      html: 'Avant de modéliser des clips, nervures, bossages ou parois de boîtier, décidez de la buse et de la largeur de ligne. Définissez ensuite les dimensions de paroi sur des multiples propres pour que le slicer n\'invente pas de chemins de gap fill dans les zones critiques.',
    },
    { type: 'title', text: 'Limites de largeur de ligne: pourquoi 80 à 120 % est une bande sûre', level: 2 },
    {
      type: 'paragraph',
      html: 'Une buse peut déposer un cordon légèrement plus large que son orifice car le plastique est pressé contre la couche précédente et aplati en un chemin ovale. Elle peut aussi imprimer une ligne légèrement plus étroite, mais trop étroite demande à l\'imprimante de créer un cordon contrôlé avec un support latéral limité. Les deux extrêmes ont des compromis. Les lignes très larges peuvent surpressuriser la hotend, étaler les coins, masquer les petits détails et réduire la précision dimensionnelle. Les lignes très étroites peuvent sous-remplir les parois, affaiblir la liaison et rendre la consistance d\'extrusion plus sensible au pressure advance et au diamètre du filament.',
    },
    {
      type: 'paragraph',
      html: 'La plage de 80-120 % utilisée ici est intentionnellement conservatrice. De nombreux slicers permettent des valeurs plus larges pour les modes spéciaux, l\'impression vase ou les buses grossières, et les utilisateurs expérimentés peuvent dépasser cette plage après des tests. Cet outil vise une planification fiable de parois mécaniques, où la recommandation doit être suffisamment sûre pour être copiée dans un profil normal sans provoquer de sous-extrusion ou sur-extrusion évidente. Si une correspondance exacte nécessite une largeur de ligne hors plage, l\'outil signale la conception comme impraticable plutôt que de faire semblant que le slicer peut la résoudre proprement.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Trop étroit', description: 'Le cordon peut ne pas presser assez de matière dans la section de paroi.', points: ['Liaison intercouche faible', 'Espaces visibles', 'Parois minces fragiles'] },
        { title: 'Plage sûre', description: 'Le cordon reste proche du comportement physique de la buse.', highlight: true, points: ['Extrusion prévisible', 'Bon contrôle dimensionnel', 'Profils réutilisables'] },
        { title: 'Trop large', description: 'La buse peut pousser plus de plastique que le chemin ne peut en accepter.', points: ['Coins bombés', 'Crêtes en surface', 'Contre-pression élevée'] },
      ],
    },
    {
      type: 'message',
      title: 'Sûr ne signifie pas calibré',
      html: 'Même une largeur mathématiquement parfaite nécessite un débit calibré. Si le multiplicateur d\'extrusion est erroné, la paroi physique peut toujours mesurer épaisse ou fine au pied à coulisse.',
    },
    { type: 'title', text: 'Diagnostic des espaces internes dans l\'aperçu du slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Le moyen le plus rapide d\'identifier un décalage de périmètres est d\'inspecter l\'aperçu couche par couche. Recherchez une fine bande pâle entre les parois externe et interne, une seule ligne de gap fill errante, ou une zone où le slicer alterne entre deux et trois lignes le long de la même caractéristique. Ces motifs sont courants dans les parois de boîtier, les bossages, les clips et les nervures fines car la dimension CAO est souvent choisie visuellement plutôt que comme un multiple de la largeur d\'extrusion.',
    },
    {
      type: 'paragraph',
      html: 'Un espace dans la paroi n\'est pas toujours visible à l\'extérieur de l\'impression. La pièce peut sembler propre tandis que l\'intérieur contient un vide étroit qui réduit la rigidité. Cela compte pour les bossages de vis, les goupilles de pression, les supports, les cadres de drone, les engrenages et toute pièce où la charge traverse la paroi. Si l\'espace se situe entre les périmètres, la paroi peut se fendre plus facilement car le chemin de charge traverse un matériau faiblement lié ou manquant plutôt que des cordons continus.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le gap fill est une réparation, pas un plan de paroi',
      html: 'Les slicers modernes peuvent insérer des chemins de gap fill fins, mais ces chemins sont souvent imprimés avec une vitesse, un débit et un refroidissement différents. Pour une géométrie porteuse, un multiple propre de périmètres est plus prévisible.',
    },
    {
      type: 'summary',
      title: 'Liste de vérification pour l\'aperçu',
      items: [
        'Passez à l\'aperçu par type de ligne ou caractéristique, pas seulement à l\'aperçu couleur unie.',
        'Inspectez les parois au niveau des trous, nervures, bossages et languettes fines.',
        'Vérifiez si des chemins de gap fill apparaissent dans les régions structurelles.',
        'Comparez l\'épaisseur de paroi CAO avec des multiples entiers de la largeur de ligne.',
        'N\'utilisez la largeur de ligne ajustée que lorsqu\'elle reste dans la plage sûre de buse.',
      ],
    },
    { type: 'title', text: 'Quand le résultat est exact, nécessite un ajustement ou est impossible', level: 2 },
    {
      type: 'paragraph',
      html: 'Le verdict utilise un seuil résiduel de 0,05 mm car la plupart des systèmes FDM de bureau présentent des variations pratiques dues au débit, au diamètre du filament, à la dilatation thermique, à l\'étalonnage des mouvements et à la technique de mesure. Si les réglages actuels se situent dans cette bande, l\'outil qualifie le résultat d\'exact. Cela ne signifie pas que chaque échantillon imprimé mesurera parfaitement au micron près ; cela signifie que la géométrie du slicer elle-même est suffisamment alignée pour que l\'erreur restante soit probablement due à l\'étalonnage ou au comportement du matériau plutôt qu\'à l\'arithmétique des périmètres.',
    },
    {
      type: 'paragraph',
      html: 'Nécessite un ajustement signifie que la largeur de ligne actuelle laisse un résidu plus important, mais que le même nombre de périmètres peut fermer la paroi avec une largeur sûre. Par exemple, une paroi de 1,20 mm avec une largeur de ligne de 0,42 mm donne trois lignes à 1,26 mm. L\'ajustement à 0,40 mm rend trois lignes exactement à 1,20 mm. Impossible signifie que soit la paroi est plus fine que le diamètre de buse, soit la largeur de ligne exacte nécessaire tomberait hors de la bande sûre de buse. Dans ce cas, il est préférable de reconcevoir la paroi ou de changer la taille de buse plutôt que de forcer le slicer.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Périmètre', definition: 'Une boucle de paroi générée par le slicer autour du contour d\'une couche.' },
        { term: 'Largeur de ligne', definition: 'La largeur commandée d\'un cordon extrudé, parfois appelée largeur d\'extrusion.' },
        { term: 'Résidu', definition: 'La différence absolue entre l\'épaisseur de paroi CAO et l\'épaisseur produite par des périmètres entiers.' },
        { term: 'Gap fill', definition: 'Un chemin généré par le slicer pour occuper l\'espace restant que les périmètres normaux ne remplissent pas proprement.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Ajuster la largeur de ligne versus modifier la CAO',
      items: [
        { pro: 'L\'ajustement de la largeur de ligne est rapide et peut préserver le fichier modèle.', con: 'Il affecte chaque paroi utilisant ce profil à moins d\'être délimité avec soin.' },
        { pro: 'La modification CAO rend explicite l\'intention de conception pour les impressions futures.', con: 'Elle prend plus de temps lorsque de nombreuses caractéristiques sont déjà contraintes.' },
        { pro: 'Changer la taille de buse peut sauver des parois très fines ou très épaisses.', con: 'Cela modifie la résolution des détails, le temps d\'impression et le volume d\'extrusion.' },
      ],
    },
    { type: 'title', text: 'Application des résultats dans Cura, PrusaSlicer et slicers similaires', level: 2 },
    {
      type: 'paragraph',
      html: 'Le bloc de copie contient intentionnellement seulement les deux valeurs qui comptent: le nombre de périmètres et la largeur de ligne. Dans Cura, le nombre de périmètres correspond au nombre de lignes de paroi, et la largeur de ligne correspond à la largeur de ligne de paroi ou à la largeur de ligne globale selon la structure du profil. Dans PrusaSlicer et ses dérivés, utilisez perimeters pour le nombre de boucles et extrusion width pour la largeur de ligne. Si le slicer a des largeurs de périmètre externe et interne séparées, maintenez-les égales pour la paroi optimisée sauf si vous comprenez comment le slicer les combine.',
    },
    {
      type: 'paragraph',
      html: 'Après avoir modifié les paramètres du slicer, re-tranchez et inspectez la même paroi dans l\'aperçu. L\'aperçu visuel doit montrer le nombre attendu de cordons remplissant l\'enveloppe CAO sans canal étroit résiduel. Imprimez ensuite une petite éprouvette qui inclut la même épaisseur de paroi et mesurez-la après refroidissement. Si l\'éprouvette est systématiquement décalée mais que l\'aperçu est correct, réglez le débit ou l\'expansion horizontale séparément ; n\'utilisez pas le nombre de périmètres pour compenser une erreur d\'étalonnage.',
    },
    {
      type: 'card',
      title: 'Flux de travail pour tolérances mécaniques',
      html: 'Utilisez cet ordre pour les pièces fonctionnelles: choisissez la buse, choisissez la largeur de ligne sûre, modélisez les multiples de paroi, tranchez sans espaces internes, imprimez une éprouvette, mesurez la paroi réelle, puis ajustez le débit ou la compensation dimensionnelle. Sauter l\'étape géométrique fait que l\'étalonnage poursuit une cible mobile.',
    },
    {
      type: 'table',
      headers: ['Concept du slicer', 'Nom de champ typique', 'Que saisir'],
      rows: [
        ['Nombre de boucles', 'Nombre de lignes de paroi / Périmètres', 'Nombre entier de périmètres recommandé'],
        ['Largeur de cordon d\'extrusion', 'Largeur de ligne / Largeur d\'extrusion', 'Largeur de ligne recommandée ou ajustée'],
        ['Chemins de réparation fins', 'Gap fill / Remplir les espaces entre parois', 'Éviter de s\'y fier pour les parois structurelles'],
        ['Correction dimensionnelle', 'Expansion horizontale / Compensation XY', 'Régler seulement après que le calcul de paroi est propre'],
      ],
    },
    { type: 'title', text: 'Cas particuliers: parois minces, nervures, bossages et caractéristiques de tolérance', level: 2 },
    {
      type: 'paragraph',
      html: 'Les parois minces en dessous du diamètre de buse ne sont pas des parois de périmètre normales. Les slicers peuvent les imprimer avec une détection de paroi mince, des lignes d\'extrusion uniques ou une largeur de ligne variable, mais le résultat est généralement cosmétique ou légèrement chargé. Pour une nervure structurelle, concevez la nervure assez épaisse pour au moins deux lignes stables ou acceptez qu\'elle se comporte comme une toile flexible. Pour les bossages de vis, utilisez suffisamment de périmètres pour que la charge de vis traverse des boucles continues plutôt qu\'un anneau rempli de gap fill.',
    },
    {
      type: 'paragraph',
      html: 'Les caractéristiques de tolérance nécessitent une attention particulière car la correction de paroi peut interagir avec la taille des trous et l\'ajustement. Si un clip ou un élément à pression est conçu comme une paroi de 0,9 mm et que le profil utilise des lignes de 0,45 mm, deux périmètres sont propres. Si le même clip mesure 1,0 mm, le slicer peut ajouter un petit chemin central qui modifie la rigidité et l\'ajustement. Une paroi mathématiquement plus propre rend souvent les caractéristiques à ressort plus répétables car chaque copie utilise le même nombre de cordons continus.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Ne forcez pas une géométrie fine impossible',
      html: 'Si la paroi CAO est en dessous du diamètre de buse, la solution correcte est généralement une buse plus petite, une caractéristique plus épaisse ou une méthode de fabrication différente. Forcer une buse large dans une paroi sous-diamètre crée une forme de cordon imprévisible.',
    },
    {
      type: 'list',
      items: [
        'Utilisez au moins deux lignes propres pour les nervures supportant une charge en flexion.',
        'Utilisez trois périmètres ou plus autour des bossages de vis lorsque l\'espace le permet.',
        'Évitez les canaux résiduels dans les clips car ils deviennent des amorces de fissures.',
        'Validez les ajustements de pression avec la même largeur de ligne utilisée dans la pièce finale.',
      ],
    },
  ],
  faq: [
    {
      question: 'Combien de périmètres une paroi de 1,2 mm doit-elle utiliser avec une buse de 0,4 mm ?',
      answer: 'Généralement trois périmètres. Avec une largeur de ligne de 0,40 mm, trois périmètres équivalent exactement à 1,20 mm. Avec une largeur de ligne de 0,42 mm, l\'épaisseur réelle est de 1,26 mm.',
    },
    {
      question: 'Pourquoi le calculateur limite-t-il la largeur de ligne à 80-120 % du diamètre de buse ?',
      answer: 'Cette plage maintient les recommandations dans une zone imprimable conservatrice. Des valeurs plus larges ou plus étroites peuvent fonctionner dans des cas spéciaux, mais elles sont moins fiables pour la planification de parois mécaniques.',
    },
    {
      question: 'Dois-je modifier l\'épaisseur CAO ou la largeur de ligne du slicer ?',
      answer: 'Si l\'ajustement est petit et dans la plage sûre, modifier la largeur de ligne est rapide. Pour les pièces de production répétée, modifier la CAO pour obtenir des multiples propres est généralement plus maintenable.',
    },
    {
      question: 'Un verdict exact garantit-il que la pièce imprimée mesurera exacte ?',
      answer: 'Non. Cela signifie que la géométrie du slicer tombe juste. L\'étalonnage du débit, le retrait du matériau, la température et la compensation XY affectent toujours la mesure physique.',
    },
    {
      question: 'Que dois-je faire quand le résultat est impossible ?',
      answer: 'Utilisez une buse plus petite, reconcevez l\'épaisseur de paroi comme un multiple d\'une largeur de ligne sûre, ou acceptez que la caractéristique sera un chemin de paroi mince non structurel.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Entrez le diamètre de buse', text: 'Choisissez une taille de buse courante ou tapez le diamètre mesuré de la buse.' },
    { name: 'Définissez la largeur de ligne', text: 'Entrez la largeur de ligne de paroi du slicer ; l\'outil la limite à une plage de buse sûre.' },
    { name: 'Entrez l\'épaisseur de paroi CAO', text: 'Utilisez l\'épaisseur de paroi conçue du modèle.' },
    { name: 'Copiez les paramètres du slicer', text: 'Appliquez le nombre de périmètres recommandé et la largeur de ligne ajustée si nécessaire.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Optimiseur de Périmètres et Parois',
      description: 'Calculez le nombre de périmètres FDM et une largeur de ligne sûre pour une épaisseur de paroi CAO exacte.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien de périmètres une paroi de 1,2 mm doit-elle utiliser avec une buse de 0,4 mm ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Généralement trois périmètres. Avec une largeur de ligne de 0,40 mm, trois périmètres équivalent exactement à 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment optimiser l\'épaisseur de paroi FDM pour des périmètres entiers',
      step: [
        { '@type': 'HowToStep', text: 'Entrez le diamètre de buse.' },
        { '@type': 'HowToStep', text: 'Entrez la largeur de ligne du slicer.' },
        { '@type': 'HowToStep', text: 'Entrez l\'épaisseur de paroi CAO.' },
        { '@type': 'HowToStep', text: 'Appliquez les périmètres et la largeur de ligne recommandés.' },
      ],
    },
  ],
};
