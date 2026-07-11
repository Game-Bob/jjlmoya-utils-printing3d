import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BridgingOptimizerUI } from '../ui';

export const content: ToolLocaleContent<BridgingOptimizerUI> = {
  slug: 'optimiseur-ponts',
  title: 'Optimiseur de ponts pour impression 3D',
  description: 'Calculez la vitesse de pont, la vitesse du ventilateur de pont et le débit de pont pour l\'impression FDM à partir de la longueur de la portée, du matériau, de la température, de la largeur de ligne et de la vitesse de base.',
  ui: {
    controlsAriaLabel: 'Paramètres de l\'optimiseur de ponts',
    resultsAriaLabel: 'Résultats de l\'optimiseur de ponts',
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial',
    geometryGroupLabel: 'Géométrie du pont',
    materialGroupLabel: 'Comportement du filament',
    thermalGroupLabel: 'Profil thermique',
    bridgeLengthLabel: 'Longueur du pont',
    bridgeLengthHelp: 'Distance non supportée entre les deux bords d\'ancrage du pont.',
    materialLabel: 'Matériau',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absLabel: 'ABS',
    tpuLabel: 'TPU',
    asaLabel: 'ASA',
    baseSpeedLabel: 'Vitesse d\'impression standard',
    baseSpeedHelp: 'Utilisez la vitesse normale de paroi externe ou de détail comme référence.',
    temperatureLabel: 'Température d\'extrusion',
    temperatureHelp: 'Un plastique plus chaud s\'écoule plus facilement et nécessite généralement plus de refroidissement ou un débit réduit.',
    lineWidthLabel: 'Largeur de ligne',
    lineWidthHelp: 'Largeur d\'extrusion du slicer. Des lignes plus larges sont plus lourdes et peuvent s\'affaisser davantage sur de longues portées.',
    slicerSettingsLabel: 'Paramètres du slicer',
    bridgeSpeedLabel: 'Vitesse de pont',
    bridgeFanLabel: 'Ventilateur de pont',
    bridgeFlowLabel: 'Débit de pont',
    viabilityLabel: 'Viabilité',
    greenRiskLabel: 'Vert: pont sûr',
    orangeRiskLabel: 'Orange: pont critique',
    redRiskLabel: 'Rouge: support physique recommandé',
    sagCurveLabel: 'Courbe d\'affaissement représentative',
    sagIndexLabel: 'Indice d\'affaissement',
    estimatedSagLabel: 'Affaissement estimé',
    maxLengthLabel: 'Limite du matériau',
    copyBlockLabel: 'Copier le bloc slicer',
    copiedLabel: 'Paramètres copiés.',
    educationLabel: 'Pourquoi réduire le débit aide',
    educationText: 'Un brin de pont doit se comporter comme un fil légèrement tendu. Réduire le débit de pont légèrement en dessous de 100 % évite de pousser du plastique fondu en excès dans la portée, de sorte que le brin s\'étire entre les deux ancrages au lieu de former une boucle lourde qui s\'affaisse sous son propre poids.',
    adviceSafe: 'Les paramètres se situent dans la zone de confort d\'une imprimante FDM grand public.Imprimez un petit test de pont si la face inférieure est visible.',
    adviceCritical: 'Cette portée est proche de la limite pratique. Utilisez du filament sec, des buses de ventilation propres et testez avant de lancer une impression longue.',
    adviceSupports: 'Le pont dépasse les limites physiques normales pour ce matériau. Ajoutez des supports, scindez le modèle, ajoutez une nervure ou reconcevez la face inférieure.',
    adviceHighTemp: 'La température de la buse est loin de la référence du matériau. Vérifiez les résultats d\'une tour de température avant de vous fier à un pont long.',
    adviceFlexible: 'Les ponts en TPU sont mécaniquement difficiles car le brin reste élastique. Gardez les portées courtes et envisagez un support même lorsque le calculateur n\'est pas rouge.',
    curaLabel: 'Cura',
    prusaLabel: 'PrusaSlicer',
    curaSpeedFieldLabel: 'Cura > Vitesse > Vitesse des murs du pont',
    curaFanFieldLabel: 'Cura > Refroidissement > Vitesse du ventilateur de pont',
    curaFlowFieldLabel: 'Cura > Matériau > Débit du pont',
    prusaSpeedFieldLabel: 'PrusaSlicer > Paramètres du filament > Vitesse > Ponts',
    prusaFanFieldLabel: 'PrusaSlicer > Paramètres du filament > Refroidissement > Vitesse du ventilateur des ponts',
    prusaFlowFieldLabel: 'PrusaSlicer > Paramètres d\'impression > Avancé > Taux de débit du pont',
    mmUnit: 'mm',
    inchUnit: 'po',
    mmsUnit: 'mm/s',
    ipsUnit: 'po/s',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Régler les ponts FDM sans tâtonner', level: 2 },
    {
      type: 'paragraph',
      html: 'Un pont est un trajet d\'outil FDM qui traverse l\'air libre entre deux bords supportés. La buse dépose un brin chaud sans couche en dessous, de sorte que le brin doit s\'accrocher au premier bord, rester suffisamment tendu pour rester à peu près droit et devenir rigide avant que la gravité ne le transforme en boucle pendante.Les trois paramètres du slicer qui comptent le plus sont la<strong>vitesse de pont</ strong >, la < strong > vitesse du ventilateur de pont < /strong > et le < strong > taux de débit du pont </strong >.Ce calculateur transforme la longueur du pont, le matériau, la température, la largeur de ligne et la vitesse d\'impression normale en un profil de départ pratique pour ces champs.',
    },
    {
      type: 'paragraph',
      html: 'Le modèle est volontairement heuristique. La qualité réelle d\'un pont dépend de la direction de la buse de ventilation, de la forme de la buse, de la sécheresse du filament, de la chaleur de l\'enceinte, de l\'accélération, du pressure advance, de la régularité de l\'extrusion et du trajet exact généré par le slicer. Un calculateur de bureau ne peut pas tout savoir. Ce qu\'il peut faire, c\'est encoder la direction de changement validée par la communauté: les ponts longs ont besoin de plus de vitesse d\'étirement, la plupart des matériaux nécessitent un fort refroidissement, et le débit de pont fonctionne généralement mieux légèrement en dessous de 100 % qu\'au-dessus.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '90-98 %', label: 'plage de débit de pont typique' },
        { value: '100 %', label: 'cible courante du ventilateur pour le PLA' },
        { value: '5-150 mm', label: 'plage de portée du calculateur' },
        { value: '3 champs', label: 'principales valeurs slicer à copier' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Utilisez les champs slicer dédiés aux ponts',
      html: 'Ne remplacez pas tout le profil d\'impression par les réglages de pont.Appliquez les valeurs calculées aux contrôles dédiés aux ponts, comme la vitesse de pont et le débit de pont dans Cura, ou la vitesse de pont et le taux de débit de pont dans PrusaSlicer.',
    },
    { type: 'title', text: 'Pourquoi le débit de pont est généralement inférieur à 100 %', level: 2 },
    {
      type: 'paragraph',
      html: 'Un débit inférieur à 100 % semble contre-intuitif car la sous-extrusion crée normalement des parois fragiles ou fines. Un pont est différent. Le brin n\'est pas pressé contre une couche précédente; il est tiré à travers un vide.Si le slicer commande trop de plastique, le volume excédentaire n\'a nulle part où aller de manière stable. Le cordon devient plus épais, plus lourd et plus fluide. Au lieu d\'un brin tendu, l\'imprimante crée une corde molle qui s\'incurve vers le bas avant que le refroidissement ne puisse la figer.',
    },
    {
      type: 'paragraph',
      html: 'Une réduction modeste, souvent entre 90 % et 98 %, rend la ligne déposée plus fine et plus facile à tendre entre les ancrages. Elle réduit également la chaleur transportée par le brin, car moins de polymère fondu est déposé par millimètre. La valeur exacte dépend du matériau et de la longueur de la portée. Les ponts courts en PLA peuvent tolérer 96-98 %. Les ponts longs en PETG peuvent nécessiter un débit plus faible car le PETG reste collant et chaud plus longtemps. Le TPU peut nécessiter des valeurs prudentes, mais la flexibilité limite l\'amélioration que le seul débit peut apporter.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Problème de débit probable', 'Première correction'],
      rows: [
        ['Le pont ressemble à des cordes épaisses', 'Trop de débit de pont ou température trop élevée', 'Réduisez le débit de pont de 2 à 4 points et testez à nouveau.'],
        ['Les brins du pont cassent ou n\'ancrent pas', 'Débit trop faible ou vitesse trop élevée', 'Augmentez légèrement le débit de pont ou ralentissez la première couche du pont.'],
        ['Le milieu s\'affaisse mais les ancrages semblent volumineux', 'Débit et température trop élevés', 'Abaissez le débit de pont et la température de la buse ensemble.'],
        ['La face inférieure présente des fils séparés', 'Débit trop faible pour le matériau', 'Augmentez le débit de 1 à 2 points avant de modifier le ventilateur.'],
      ],
    },
    {
      type: 'tip',
      title: 'Ne réglez pas le débit de pont d\'après l\'aspect de la surface supérieure',
      html: 'Jugez le réglage du pont par la face inférieure et le profil latéral. Le dessus d\'un pont peut sembler acceptable alors que le premier brin non supporté en dessous s\'affaisse déjà.',
    },
    { type: 'title', text: 'Vitesse de pont: pourquoi les longues portées nécessitent souvent plus de vitesse', level: 2 },
    {
      type: 'paragraph',
      html: 'La vitesse de pont fonctionne différemment de la vitesse de paroi normale. Un périmètre lent a le temps de lier et de refroidir contre le plastique existant. Un brin de pont flotte dans l\'air.Si la buse se déplace trop lentement, le brin quitte la buse chaud, épais et détendu, et la gravité a le temps de le tirer vers le bas avant qu\'il n\'atteigne le côté opposé.Augmenter la vitesse de pont étire le brin à travers l\'espace et réduit le temps que le plastique chaud passe non supporté près de la buse.',
    },
    {
      type: 'paragraph',
      html: 'Il y a une limite. Si la vitesse de pont est poussée trop haut, les ancrages peuvent échouer, l\'extrusion peut devenir irrégulière et l\'imprimante peut ne pas atteindre la vitesse commandée sur les courtes portées car l\'accélération domine.C\'est pourquoi le calculateur part de la vitesse de base de l\'utilisateur, l\'augmente avec la longueur, puis limite la sortie à une plage pratique au lieu de recommander une vitesse illimitée. Un pont de 25 mm en PLA peut n\'avoir besoin que d\'un coup de pouce modéré ; un pont de 100 mm a besoin de plus d\'étirement mais peut encore être risqué sur une petite imprimante open - frame.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Trop lent',
          description: 'Le brin reste chaud et détendu au-dessus de la portée libre.',
          points: ['Affaissement profond au milieu', 'Boucles pendantes brillantes', 'Face inférieure lourde'],
        },
        {
          title: 'Équilibré',
          description: 'Le brin est tendu entre les ancrages tandis que le refroidissement commence immédiatement.',
          highlight: true,
          points: ['Face inférieure plus droite', 'Points d\'ancrage fiables', 'Moins de matière en excès'],
        },
        {
          title: 'Trop rapide',
          description: 'Le brin peut ne pas s\'ancrer ou devenir fin et irrégulier.',
          points: ['Espaces au début du pont', 'Bris de brins', 'Mauvaise couche au-dessus du pont'],
        },
      ],
    },
    {
      type: 'message',
      title: 'L\'accélération compte',
      html: 'Sur les ponts courts, l\'accélération du firmware peut empêcher l\'imprimante d\'atteindre la vitesse de pont demandée.Si les résultats des tests ne changent pas, vérifiez l\'accélération et le comportement de la couche minimale avant de supposer que la valeur de vitesse est ignorée.',
    },
    { type: 'title', text: 'Refroidissement par matériau: PLA, PETG, ABS, ASA et TPU', level: 2 },
    {
      type: 'paragraph',
      html: 'Le PLA est le cas de référence pour un refroidissement agressif des ponts. Il devient rigide rapidement, accepte 100 % de ventilateur sur la plupart des machines et produit généralement des ponts plus nets lorsque la buse de ventilation frappe le brin directement. Le PETG bénéficie également du refroidissement, mais de nombreux utilisateurs évitent le ventilateur maximal pour l\'ensemble de l\'impression car un refroidissement excessif peut réduire l\'adhérence des couches.Les paramètres de ventilateur dédiés aux ponts permettent au PETG d\'utiliser un refroidissement plus fort pour la portée non supportée sans modifier tout le profil.',
    },
    {
      type: 'paragraph',
      html: 'L\'ABS et l\'ASA sont des matériaux à haute température imprimés avec un refroidissement réduit pour contrôler le gauchissement et les contraintes de couche. Le ventilateur de pont peut être augmenté par rapport au profil normal, mais 100 % de ventilateur peut provoquer un curling, des fissures ou une mauvaise adhérence dans une enceinte chauffée. Le TPU est encore différent: il peut rester flexible même après refroidissement, de sorte qu\'un pont peut se déformer parce que le brin est mécaniquement élastique plutôt que simplement trop chaud.Le calculateur reflète ces différences avec des cibles de ventilateur plus basses pour l\'ABS/ASA et une limite physique plus stricte pour le TPU.',
    },
    {
      type: 'table',
      headers: ['Matériau', 'Comportement du ventilateur de pont', 'Tendance du débit', 'Note pratique'],
      rows: [
        ['PLA', 'Généralement 100 %', '94-98 %', 'Meilleur matériau débutant pour les ponts longs.'],
        ['PETG', 'Modéré à élevé', '91-96 %', 'Séchez la bobine ; le PETG humide donne des ponts poilus.'],
        ['ABS', 'Ventilateur limité', '92-96 %', 'Préférez une reconception ou des supports pour les longues portées.'],
        ['ASA', 'Ventilateur limité', '92-96 %', 'Similaire à l\'ABS avec un comportement de matériau résistant aux UV.'],
        ['TPU', 'Un ventilateur élevé peut aider', '88-94 %', 'Portées courtes uniquement ; l\'élasticité est la limite.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le pourcentage du ventilateur n\'est pas la qualité du flux d\'air',
      html: 'Une valeur de 100 % dans le slicer n\'est qu\'une commande pour le ventilateur. Un ventilateur faible, une buse obstruée, une gaine en silicone qui gêne ou un refroidissement unilatéral peuvent faire échouer un réglage pourtant parfait sur l\'imprimante réelle.',
    },
    { type: 'title', text: 'Effets de la température et de la largeur de ligne', level: 2 },
    {
      type: 'paragraph',
      html: 'La température d\'extrusion modifie la viscosité.Une buse plus chaude peut améliorer l\'adhérence des couches et réduire la charge de l\'extrudeuse, mais elle rend également les brins de pont plus mous et plus sujets à l\'affaissement. Baisser légèrement la température pour les impressions riches en ponts peut aider, surtout avec le PLA et le PETG, tant que l\'extrusion reste fiable.Trop froid n\'est pas mieux ; un brin qui sort de la buse de manière irrégulière créera des espaces, des ancrages rugueux et des couches faibles au-dessus du pont.',
    },
    {
      type: 'paragraph',
      html: 'La largeur de ligne affecte à la fois la masse et la rigidité. Des lignes de pont plus larges transportent plus de matière sur la même portée, ce qui peut augmenter l\'affaissement.Elles peuvent également mieux adhérer aux ancrages et rendre la couche suivante mieux supportée.Des lignes de pont plus fines sont plus légères et plus faciles à tendre, mais trop fines peuvent ne pas s\'ancrer ou laisser des espaces ouverts. Le calculateur utilise la largeur de ligne comme facteur de pondération plutôt que comme règle stricte, car la taille de la buse, le multiplicateur d\'extrusion et l\'ordre des trajets du slicer modifient tous le résultat.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Taux de débit du pont', definition: 'Le multiplicateur d\'extrusion utilisé uniquement pour les trajets de pont, généralement affiché sous forme de pourcentage ou de ratio décimal.'
        },
        { term: 'Vitesse de pont', definition: 'La vitesse de déplacement utilisée lors de l\'impression de brins non supportés au- dessus d\'un espace.' },
        { term: 'Vitesse du ventilateur de pont', definition: 'La cible du ventilateur de refroidissement utilisée pour les trajets ou les couches de pont.' },
        { term: 'Indice d\'affaissement', definition: 'Un score de risque heuristique dans cet outil qui combine la longueur, le matériau, la température, le ventilateur et la largeur de ligne.' },
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez une tour de température avant d\'incriminer les réglages de pont',
      html: 'Si chaque test de pont semble filandreux ou brillant, imprimez une tour de température avec le même filament. Un profil de 10 à 15 °C plus chaud que nécessaire peut faire paraître les ponts impossibles.',
    },
    {
      type: 'title', text: 'Diagnostiquer les échecs de pont sur l\'imprimante', level: 2
    },
    {
      type: 'paragraph',
      html: 'Un échec de pont est plus facile à corriger lorsque vous identifiez le motif. Un affaissement lisse au milieu signifie généralement que le brin est trop chaud, trop lent, trop lourd ou insuffisamment refroidi. Des boucles désordonnées au début du pont indiquent une mauvaise adhérence de l\'ancrage, une instabilité de pression ou une première ligne de pont trop rapide.Des brins poilus peuvent provenir d\'un filament humide, surtout avec le PETG, les mélanges de nylon ou les vieilles bobines. Un pont propre dans une direction et un pont médiocre dans la direction opposée indiquent souvent un flux d\'air asymétrique.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Le risque rouge signifie qu\'une reconception est plus rapide que le réglage',
      html: 'Lorsque la portée dépasse largement la limite du matériau, les paramètres du slicer peuvent améliorer l\'échec mais le rendent rarement sûr pour la production.Ajoutez une petite nervure, scindez le modèle, faites pivoter la pièce, utilisez un support léger ou reconcevez la face inférieure comme un arc peu profond.',
    },
    {
      type: 'summary',
      title: 'Ordre de dépannage rapide',
      items: [
        'Séchez le filament si la face inférieure est bulleuse, poilue ou irrégulière.',
        'Utilisez des réglages de ventilateur dédiés aux ponts avant d\'augmenter le refroidissement pour toute l\'impression.',
        'Réduisez le débit de pont par petits pas de 1 à 2 points.',
        'Augmentez la vitesse de pont jusqu\'à ce que les ancrages commencent à souffrir, puis réduisez.',
        'Utilisez des supports ou reconcevez lorsque le risque calculé est rouge.',
      ],
    },
    {
      type: 'proscons',
      title: 'Réglage plutôt que d\'ajouter des supports',
      items: [
        { pro: 'Économise du matériau et du temps de retrait des supports.', con: 'Nécessite des impressions de test pour chaque filament et configuration de buse.' },
        { pro: 'Évite les marques de support sur la face inférieure des ponts.', con: 'Les très longues portées peuvent encore échouer à cause de la physique, pas des réglages.' },
        { pro: 'Fonctionne bien pour les ponts internes cachés et les pièces fonctionnelles.', con: 'Les faces inférieures esthétiques peuvent encore nécessiter des couches d\'interface de support.' },
      ],
    },
    { type: 'title', text: 'Correspondance des résultats avec Cura et PrusaSlicer', level: 2 },
    {
      type: 'paragraph',
      html: 'Le bloc de sortie est conçu pour une utilisation directe dans le slicer. Dans Cura, les commandes de pont peuvent être masquées jusqu\'à ce que les paramètres expérimentaux de pont soient activés.Cherchez Bridge Wall Speed, Bridge Fan Speed et Bridge Flow.Dans PrusaSlicer, la vitesse de pont se trouve généralement dans les paramètres de vitesse, le comportement du ventilateur dans le refroidissement du filament, et le taux de débit de pont apparaît sous forme de ratio décimal dans les paramètres avancés d\'impression. Une recommandation de débit de 94 % correspond généralement à 0,94 lorsque le slicer demande un ratio.',
    },
    {
      type: 'paragraph',
      html: 'Après avoir copié les paramètres, imprimez un test de pont avec des portées autour de la longueur cible. Ne jugez pas seulement un pont de 10 mm si le modèle réel a un espace de 70 mm. Le réglage des ponts varie avec la longueur, donc un profil qui semble parfait sur un petit modèle de calibration peut s\'affaisser sur une pièce fonctionnelle plus grande.Enregistrez les valeurs réussies par matériau, buse, largeur de ligne et configuration de ventilation.',
    },
    {
      type: 'card',
      title: 'Bonnes pratiques pour les pièces de production',
      html: 'Si un pont porte une charge, maintient une dimension ou se trouve sur une face visible, traitez le calculateur comme un profil de départ et validez avec le même lot de filament. Pour les toits d\'infill cachés ou les conduits internes, les valeurs calculées sont généralement suffisantes pour décider si les supports valent le temps d\'impression supplémentaire.',
    },
    {
      type: 'summary',
      title: 'Que modifier dans le slicer',
      items: [
        'Réglez la vitesse de pont sur la valeur calculée, pas sur la vitesse de paroi externe normale.',
        'Réglez la vitesse du ventilateur de pont sur la cible calculée en fonction du matériau.',
        'Réglez le débit de pont sur la valeur en pourcentage dans Cura ou le ratio décimal dans PrusaSlicer.',
        'Conservez les parois normales, le remplissage et les couches supérieures du profil d\'origine sauf si les tests indiquent le contraire.',
      ],
    },
  ],
  faq: [
    {
      question: 'Par quel taux de débit de pont dois-je commencer ?',
      answer: 'La plupart des profils FDM commencent entre 90 % et 98 %. Le PLA fonctionne souvent près de la fourchette haute, tandis que le PETG, le TPU et les longues portées peuvent nécessiter une valeur plus basse.',
    },
    {
      question: 'La vitesse du ventilateur de pont doit-elle toujours être à 100 % ?',
      answer: 'Pour le PLA, elle est généralement à 100 %. Le PETG utilise souvent un ventilateur modéré à élevé. L\'ABS et l\'ASA nécessitent généralement des cibles de ventilateur de pont plus basses pour éviter le gauchissement ou les contraintes de couche.',
    },
    {
      question: 'Pourquoi un pont plus long nécessite-t-il plus de vitesse ?',
      answer: 'Plus de vitesse étire le brin entre les ancrages et réduit le temps pendant lequel le plastique chaud reste non supporté près de la buse, mais une vitesse excessive peut briser les ancrages.',
    },
    {
      question: 'Les paramètres du slicer peuvent-ils remplacer les supports physiques ?',
      answer: 'Uniquement dans une portée raisonnable. Lorsque le calculateur indique rouge, les supports, la rotation du modèle, les nervures ou la reconception sont plus sûrs que d\'essayer de contourner la géométrie par le réglage.',
    },
    {
      question: 'Pourquoi le PETG fait-il des ponts moins bons que le PLA ?',
      answer: 'Le PETG reste collant et retient la chaleur plus longtemps que le PLA, il a donc tendance à s\'affaisser ou à former des brins poilus à moins d\'être sec, bien refroidi et imprimé avec un débit maîtrisé.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Mesurez la portée non supportée', text: 'Entrez la longueur du pont entre les deux bords supportés.' },
    { name: 'Choisissez le matériau et les valeurs du profil', text: 'Sélectionnez le filament, la vitesse standard, la température de la buse et la largeur de ligne du slicer.' },
    { name: 'Copiez les paramètres du slicer', text: 'Utilisez la vitesse de pont, la vitesse du ventilateur et le taux de débit générés dans les champs de pont de Cura ou PrusaSlicer.' },
    { name: 'Validez la couleur de risque', text: 'Le vert peut généralement être testé directement, l\'orange nécessite un réglage, et le rouge doit utiliser des supports ou une reconception.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Optimiseur de ponts pour impression 3D',
      description: 'Calculez la vitesse de pont, la vitesse du ventilateur de pont et le taux de débit de pont pour l\'impression 3D FDM.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Par quel taux de débit de pont dois-je commencer ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La plupart des profils FDM commencent entre 90 % et 98 %. Le PLA fonctionne souvent près de la fourchette haute, tandis que le PETG, le TPU et les longues portées peuvent nécessiter une valeur plus basse.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment régler les paramètres de pont FDM',
      step: [
        { '@type': 'HowToStep', text: 'Mesurez la portée non supportée du pont.' },
        { '@type': 'HowToStep', text: 'Entrez le matériau, la vitesse de base, la température et la largeur de ligne.' },
        { '@type': 'HowToStep', text: 'Copiez la vitesse de pont, la vitesse du ventilateur et le taux de débit calculés.' },
        { '@type': 'HowToStep', text: 'Imprimez un test de pont et ajustez si le risque est orange.' },
      ],
    },
  ],
};