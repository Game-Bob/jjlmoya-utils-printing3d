import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'calculateur-stabilisation-inertie-thermique-plateau-impression',
  title: 'Calculateur de Stabilisation par Inertie Thermique du Plateau',
  description: 'Estimez le temps de repos nécessaire d\'un plateau chauffant d\'impression 3D après avoir atteint la consigne, selon le matériau, l\'épaisseur, la température cible, la puissance du chauffage et la taille du plateau.',
  ui: {
    unitSystemLabel: 'Unités',
    metricLabel: 'Métrique',
    imperialLabel: 'US',
    materialLabel: 'Matériau du plateau',
    borosilicateGlassLabel: 'Verre borosilicate',
    peiSpringSteelLabel: 'Acier à ressort PEI',
    aluminumLabel: 'Plaque d\'aluminium',
    thicknessLabel: 'Épaisseur',
    targetTemperatureLabel: 'Température cible du plateau',
    heaterPowerLabel: 'Puissance du chauffage',
    bedSizeLabel: 'Surface chauffée',
    presetsLabel: 'Préréglages',
    enderPresetLabel: 'Verre 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Aluminium 350',
    recommendedDelayLabel: 'Délai avant impression',
    delayMarkerLabel: 'Délai',
    warmupTimeLabel: 'Préchauffage idéal',
    plateMassLabel: 'Masse du plateau',
    energyStoredLabel: 'Chaleur stockée',
    conductionLagLabel: 'Latence traversante',
    conductivityLabel: 'Conductivité',
    readinessLabel: 'Disponibilité',
    readinessQuick: 'trempe rapide',
    readinessBalanced: 'trempe normale',
    readinessSlow: 'trempe longue',
    controlsAriaLabel: 'Paramètres d\'inertie thermique du plateau chauffant',
    resultsAriaLabel: 'Résultats de stabilisation du plateau chauffant',
    copyButton: 'Copier le délai',
    copiedButton: 'Copié',
    copiedSummaryTemplate: 'Estimation de stabilisation: attendre {delay} s ({minutes} min) après consigne ; préchauffage idéal d\'environ {warmup} min, disponibilité: {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Pourquoi un plateau chauffant a besoin d\'une stabilisation après avoir atteint la consigne', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'écran d\'une imprimante affiche généralement la température mesurée près de la thermistance, pas la température exacte de la surface d\'impression supérieure. Sur de nombreuses machines, la thermistance est collée sous le chauffage, noyée dans le support du plateau ou placée loin de la zone où commence la première couche. Le contrôleur peut indiquer <strong>60 °C</strong> alors que le dessus d\'une épaisse plaque de verre est encore en train de rattraper son retard. Ce décalage est l\'inertie thermique: la plaque stocke la chaleur, la déplace dans son épaisseur et en perd vers l\'air simultanément.',
    },
    {
      type: 'paragraph',
      html: 'La première couche est particulièrement sensible à ce décalage car l\'adhésion dépend de la viscosité du polymère, de l\'énergie de surface et de la pression de contact. Un plateau qui continue de chauffer en surface peut provoquer le soulèvement des coins, des lignes de jupe sèches ou un décalage Z incohérent même lorsque le maillage et la hauteur de la buse sont corrects. Attendre un intervalle de trempe calculé après que le plateau a atteint la consigne est souvent plus répétable que d\'augmenter la consigne au hasard.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK conductivité typique du verre borosilicate' },
        { value: '16', label: 'W/mK conductivité approximative de l\'acier à ressort' },
        { value: '205', label: 'W/mK conductivité approximative de l\'aluminium' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Le délai est une estimation de surface, pas un remplacement de l\'autotune PID',
      html: 'Le réglage PID contrôle la façon dont le chauffage suit la thermistance. La stabilisation thermique estime le temps nécessaire à la surface d\'impression pour se rapprocher de la consigne contrôlée par la thermistance. Une boucle PID bien réglée peut encore nécessiter un délai de trempe lorsque le plateau est épais, peu conducteur ou mal couplé au chauffage.',
    },
    { type: 'title', text: 'Le choix du matériau domine l\'inertie thermique du plateau', level: 2 },
    {
      type: 'paragraph',
      html: 'Le calculateur traite le matériau comme une entrée stricte car le verre, l\'acier à ressort PEI et l\'aluminium ne sont pas des systèmes thermiques interchangeables. Le verre borosilicate a une faible conductivité thermique et une capacité calorifique significative, donc la surface peut accuser un retard notable par rapport au côté chauffant. L\'acier à ressort est plus mince et conduit mieux que le verre, il s\'égalise donc généralement plus rapidement même si l\'acier est dense. L\'aluminium conduit extrêmement bien la chaleur, c\'est pourquoi les plateaux en aluminium coulé ou usiné sont privilégiés sur les grandes imprimantes, mais une plaque d\'aluminium épaisse peut encore stocker beaucoup d\'énergie.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Verre borosilicate',
          description: 'La faible conductivité et la capacité calorifique modérée créent le plus long retard de surface, surtout à 3-5 mm d\'épaisseur.',
          points: ['Bonne planéité avec un bon support', 'Réponse lente en surface', 'Sensible aux clips et au contact local du chauffage'],
        },
        {
          title: 'Acier à ressort PEI',
          description: 'Les fines feuilles d\'acier répondent plus vite et nécessitent généralement moins de repos, mais les bases magnétiques et les couches adhésives ajoutent une résistance de contact.',
          highlight: true,
          points: ['Trempe pratique rapide', 'Changements de surface faciles', 'L\'empilement aimant/adhésif reste important'],
        },
        {
          title: 'Plaque d\'aluminium',
          description: 'La conductivité élevée répartit rapidement la chaleur sur le plateau ; l\'épaisseur et la puissance du chauffage deviennent les principaux facteurs de délai.',
          points: ['Excellente répartition latérale de la chaleur', 'Énergie stockée élevée sur les grands plateaux', 'Meilleur avec une couverture chauffante uniforme'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Surface d\'impression', 'Comportement thermique', 'Problème de stabilisation typique', 'Réponse pratique pour la première couche'],
      rows: [
        ['Verre borosilicate 4 mm', 'Conduction lente dans l\'épaisseur', 'La surface est en retard sur la thermistance', 'Attendre plus avant de sonder ou d\'imprimer'],
        ['Acier PEI 0,4-0,6 mm', 'Feuille conductrice mince', 'L\'interface aimant/adhésif contrôle le retard', 'Une trempe courte suffit généralement'],
        ['Aluminium 5-8 mm', 'Conduction rapide mais chaleur stockée élevée', 'Grande masse qui met du temps à s\'équilibrer', 'Utiliser une trempe stable sur les grands plateaux'],
        ['Empilements composites', 'Les interfaces de couches dominent', 'Les lames d\'air et adhésifs ajoutent de la résistance', 'Mesurer la température réelle de surface si possible'],
      ],
    },
    {
      type: 'tip',
      title: 'Ne réutilisez pas le délai du verre pour l\'acier PEI',
      html: 'Un délai correct pour une plaque de borosilicate de 4 mm peut être excessif pour une feuille d\'acier PEI de 0,5 mm. Inversement, un délai pour feuille PEI peut être trop court pour le verre et faire ressembler la première couche à un problème de décalage Z.',
    },
    { type: 'title', text: 'Comment l\'épaisseur modifie le temps de préchauffage et le retard de surface', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'épaisseur affecte deux parties différentes du processus. Premièrement, une plaque plus épaisse a plus de masse, donc elle nécessite plus d\'énergie pour élever sa température moyenne. Deuxièmement, la chaleur doit diffuser sur un chemin plus long avant que la surface ne suive le côté chauffant. Le calculateur estime à la fois l\'énergie de préchauffage idéale et un retard de diffusion à travers la plaque, puis les combine en un délai recommandé après que l\'imprimante signale que le plateau a atteint la consigne.',
    },
    {
      type: 'paragraph',
      html: 'La relation n\'est pas linéaire pour le retard de surface. Le temps de diffusion augmente avec le carré de l\'épaisseur, c\'est pourquoi un petit passage de 3 mm à 4 mm de verre peut compter plus que prévu. Une feuille d\'acier très mince peut s\'égaliser rapidement, mais la base magnétique, le film adhésif, le revêtement PEI et l\'air emprisonné peuvent encore ralentir le transfert réel. Sur les plateaux en aluminium, la plaque elle-même répartit rapidement la chaleur, mais le plateau peut rester globalement instable si la couverture chauffante est irrégulière ou si la plaque est grande.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Inertie thermique', definition: 'Tendance d\'une plaque à résister aux changements de température car elle possède une masse et une capacité calorifique.' },
        { term: 'Diffusivité thermique', definition: 'Propriété d\'un matériau qui combine conductivité, masse volumique et capacité calorifique pour décrire la vitesse à laquelle les changements de température s\'y propagent.' },
        { term: 'Trempe thermique', definition: 'Attente délibérée après avoir atteint la consigne pour que la surface, le chauffage, le support et l\'ensemble du plateau se rapprochent d\'un état plus stable.' },
        { term: 'Résistance de contact', definition: 'Résistance thermique supplémentaire causée par un contact imparfait, des couches adhésives, des aimants, des clips, des lames d\'air ou des surfaces déformées.' },
        { term: 'Dépassement de consigne', definition: 'Événement de contrôle où la température de la thermistance dépasse la cible avant de se stabiliser, souvent sans lien avec la température de surface.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Règles empiriques sur l\'épaisseur',
      items: [
        'Les feuilles minces d\'acier PEI se stabilisent généralement rapidement une fois le chauffage et la base magnétique chauds.',
        'Les plaques de verre de plus de 3 mm méritent un vrai délai avant de commencer la première couche.',
        'Les grandes plaques d\'aluminium peuvent nécessiter une trempe à cause de leur masse totale, même avec une excellente conduction.',
        'Les lames d\'air sous les surfaces amovibles peuvent dominer le calcul ; nettoyez les faces de contact et posez la plaque de manière cohérente.',
      ],
    },
    { type: 'title', text: 'Puissance du chauffage, taille du plateau et chaleur stockée', level: 2 },
    {
      type: 'paragraph',
      html: 'La puissance du chauffage détermine la rapidité avec laquelle l\'énergie peut pénétrer dans l\'ensemble du plateau. Un chauffage de 220 W sous un plateau en verre de 235 mm a une densité de puissance très différente d\'un chauffage silicone de 600 W sous une plaque d\'aluminium de 300 mm. Le calculateur utilise la puissance, la température cible, la surface du plateau et la masse de la plaque pour estimer le temps de préchauffage idéal. Il applique ensuite une composante de stabilisation car la surface continue généralement de changer après que le système contrôlé par thermistance a atteint la cible pour la première fois.',
    },
    {
      type: 'paragraph',
      html: 'La puissance n\'est pas un remède à une mauvaise répartition de la chaleur. Un chauffage puissant peut élever rapidement la thermistance tandis que les bords, les clips ou les zones non supportées sont en retard. Les grandes imprimantes doivent considérer la couverture chauffante, l\'isolation, le montage du plateau, la température de l\'enceinte et si le palpage commence immédiatement après l\'événement de consigne. Pour l\'ABS, l\'ASA, le nylon et autres matériaux chauds, un plateau et une enceinte stables sont souvent plus importants que d\'atteindre simplement une température numérique élevée du plateau.',
    },
    {
      type: 'table',
      headers: ['Symptôme', 'Cause thermique probable', 'Ajustement à essayer'],
      rows: [
        ['Premières lignes de jupe ternes ou qui n\'adhèrent pas', 'La surface est encore plus froide que la thermistance', 'Augmenter le délai de stabilisation avant la première couche'],
        ['Le centre adhère mais les coins se soulèvent', 'Température de surface inégale ou pertes sur les bords', 'Ajouter de l\'isolation, vérifier la couverture chauffante, attendre plus'],
        ['Le maillage de palpage change entre passes à froid et à chaud', 'L\'ensemble du plateau est encore en expansion ou en relaxation', 'Tremper avant de sonder, pas seulement avant d\'imprimer'],
        ['Le graphique PID semble stable mais l\'adhésion varie', 'Le contrôleur est stable au capteur, pas à la surface', 'Utiliser un délai de surface et vérifier avec un thermomètre de contact'],
      ],
    },
    {
      type: 'card',
      title: 'Pourquoi le résultat est un délai après la consigne',
      html: 'L\'imprimante gère déjà la montée à la température cible. Ce calculateur répond à une question plus précise sur la première couche: une fois que l\'écran indique que le plateau est prêt, combien de secondes supplémentaires la surface doit-elle reposer avant que l\'extrusion commence ?',
    },
    { type: 'title', text: 'Autotune PID vs stabilisation réelle de la surface du plateau', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'autotune PID du plateau est précieux car il réduit les oscillations au niveau du capteur mesuré. Il ne peut pas supprimer la physique d\'une plaque épaisse ou peu conductrice. Une surface en verre peut encore accuser un retard alors que le capteur inférieur semble stable. Une feuille d\'acier à ressort peut sembler stable rapidement, mais une base magnétique froide peut continuer à en extraire de la chaleur. Le flux de travail le plus répétable consiste à régler le contrôleur, à utiliser un délai de plateau raisonnable et à commencer l\'étalonnage de la première couche seulement après que l\'ensemble du plateau est thermiquement répétable.',
    },
    {
      type: 'proscons',
      title: 'Commencer immédiatement vs attendre la stabilisation',
      items: [
        { pro: 'Commencer immédiatement réduit le temps d\'impression total.', con: 'La première couche peut être imprimée sur une surface en dessous de la température prévue.' },
        { pro: 'Un délai calculé améliore la répétabilité entre impressions.', con: 'Il ajoute du temps d\'inactivité, surtout sur le verre et les grands plateaux en aluminium.' },
        { pro: 'La trempe avant le palpage peut réduire la dérive du maillage.', con: 'Des trempes très longues peuvent gaspiller de l\'énergie si le matériau choisi n\'en a pas besoin.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ne masquez pas le retard thermique avec un écrasement excessif',
      html: 'Si la première couche n\'adhère qu\'avec un décalage Z agressivement bas, la surface du plateau est peut-être plus froide que prévu. Un écrasement excessif peut masquer le problème thermique tout en provoquant un pied d\'éléphant, un frottement de buse et une texture de surface rugueuse.',
    },
    {
      type: 'message',
      title: 'Meilleure séquence d\'étalonnage',
      html: 'Chauffez le plateau, attendez le délai calculé, lancez le palpage de maillage (si votre imprimante palpe à chaud), puis réglez la hauteur de première couche. Calibrer le décalage Z sur un ensemble de plateau instable rendra l\'impression suivante incohérente même si aucun réglage mécanique n\'a changé.',
    },
    { type: 'title', text: 'Comment utiliser le temps de stabilisation dans le G-code de démarrage', level: 2 },
    {
      type: 'paragraph',
      html: 'Le délai recommandé peut être utilisé manuellement ou inséré dans le G-code de démarrage. Un flux simple consiste à chauffer le plateau avec <code>M190</code>, à attendre le nombre calculé de secondes avec une commande d\'attente, puis à continuer avec le palpage, le préchauffage de la buse, le purge et l\'impression. Certains utilisateurs préfèrent chauffer d\'abord le plateau, commencer le réchauffement de l\'enceinte ou le préchauffage de la buse pendant la trempe, et ne palper qu\'après que le plateau a cessé de dériver.',
    },
    {
      type: 'list',
      items: [
        'Utilisez le même délai lors de la comparaison de filaments pour que les tests d\'adhésion soient équitables.',
        'Appliquez des délais plus longs pour le verre, les températures élevées, les grandes plaques ou les pièces froides.',
        'Appliquez des délais plus courts pour les fines feuilles d\'acier lorsque la base magnétique est déjà chaude.',
        'Palpez après la trempe si votre maillage change avec la température.',
        'Recalculez après avoir changé le matériau du plateau, l\'épaisseur, la puissance du chauffage ou la taille du plateau.',
      ],
    },
    {
      type: 'tip',
      title: 'Utilisez la première impression du jour comme cas de référence',
      html: 'Une deuxième impression lancée immédiatement après un travail terminé commence avec un ensemble de plateau chaud et peut nécessiter moins d\'attente. Pour l\'étalonnage, évaluez le délai à partir d\'une imprimante froide car c\'est la condition la plus susceptible de révéler le retard thermique.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Un bon délai rend le réglage de la première couche ennuyeux',
      html: 'Lorsque la trempe est correcte, la forme de la jupe, le brillant des lignes, l\'adhésion des coins et la compensation du maillage deviennent plus répétables d\'une impression à l\'autre. Vous ne devriez pas avoir à courir après le décalage Z à chaque fois que la machine démarre à froid.',
    },
    { type: 'title', text: 'Mesurer et améliorer la stabilisation réelle du plateau', level: 2 },
    {
      type: 'paragraph',
      html: 'Le calculateur est délibérément pratique, mais la meilleure validation est une mesure de surface. Un thermocouple de contact collé sur la surface d\'impression, une sonde fine sous une feuille sacrificielle ou un thermomètre infrarouge calibré avec une émissivité connue peuvent révéler combien de temps la surface met à se stabiliser. Les lectures infrarouges sur le verre, le PEI et le métal brillant peuvent être trompeuses, utilisez donc des points de mesure cohérents et évitez de comparer différentes finitions de surface comme si elles avaient la même émissivité.',
    },
    {
      type: 'paragraph',
      html: 'Les performances thermiques peuvent souvent être améliorées sans modifier le firmware. Isoler la face inférieure réduit les pertes de chaleur et raccourcit le préchauffage. Nettoyer la feuille magnétique et la plaque flexible améliore le contact. Remplacer les clips faibles, aplatir les plaques déformées et éviter le contact partiel du chauffage réduisent les champs de température inégaux. Les imprimantes fermées bénéficient d\'une enceinte plus chaude, mais la chaleur de l\'enceinte modifie également les courroies, les composants du portique et le comportement de palpage, donc les routines thermiques doivent être répétables plutôt qu\'improvisées.',
    },
    {
      type: 'table',
      headers: ['Amélioration ou habitude', 'Effet sur la stabilisation', 'Précaution'],
      rows: [
        ['Isolation inférieure', 'Moins de perte de chaleur et équilibre plus rapide', 'Vérifier que le câblage et les adhésifs supportent la température du plateau'],
        ['Meilleure couverture chauffante', 'Température de surface plus uniforme', 'Éviter les bulles et un mauvais collage du chauffage silicone'],
        ['Assise cohérente de la plaque amovible', 'Moins de variation de résistance de contact', 'La poussière ou les miettes de filament peuvent créer des points froids locaux'],
        ['Palpage à chaud après trempe', 'Le maillage reflète la forme dilatée du plateau', 'Le support de palpage et la tête d\'impression doivent aussi être thermiquement stables'],
      ],
    },
    {
      type: 'summary',
      title: 'Liste de vérification pratique de stabilisation',
      items: [
        'Sélectionnez le matériau réel de la plaque ; le verre, l\'acier et l\'aluminium nécessitent des délais différents.',
        'Saisissez l\'épaisseur et la puissance du chauffage plutôt que de vous fier aux noms de modèles d\'imprimante.',
        'Utilisez le délai calculé après que le plateau signale la consigne, surtout avant l\'étalonnage de la première couche.',
        'Mesurez la surface si les problèmes d\'adhésion persistent malgré un graphique PID stable.',
        'Revérifiez le délai après avoir changé de plaque, d\'aimants, d\'isolation, de chauffage ou de taille de plateau.',
      ],
    },
  ],
  faq: [
    {
      question: 'Pourquoi attendre après que le plateau a atteint la température cible ?',
      answer: 'La thermistance peut atteindre la consigne avant que la surface d\'impression supérieure ne soit complètement chaude. L\'attente permet à la plaque, au revêtement, à la base magnétique et à l\'ensemble chauffant de se rapprocher d\'une température plus stable.',
    },
    {
      question: 'Le verre nécessite-t-il plus de temps de stabilisation que l\'acier PEI ?',
      answer: 'Généralement oui. Le verre borosilicate a une conductivité thermique beaucoup plus faible et est souvent plus épais, donc la surface accuse plus de retard qu\'une fine feuille d\'acier PEI.',
    },
    {
      question: 'Est-ce la même chose que l\'autotune PID ?',
      answer: 'Non. L\'autotune PID contrôle le comportement du chauffage au niveau du capteur. Ce calculateur estime combien de temps la surface d\'impression réelle doit reposer après que le plateau contrôlé par capteur a atteint la consigne.',
    },
    {
      question: 'Dois-je palper avant ou après la trempe ?',
      answer: 'Si votre maillage change lorsque le plateau chauffe, palpez après la stabilisation du plateau. Cela rend le maillage plus proche de la forme utilisée pendant la première couche.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Choisir le matériau du plateau', text: 'Sélectionnez le verre borosilicate, l\'acier PEI ou l\'aluminium pour que le calcul utilise la conductivité et la capacité calorifique correctes.' },
    { name: 'Saisir l\'ensemble physique du plateau', text: 'Ajoutez l\'épaisseur, la surface chauffée, la température cible et la puissance du chauffage.' },
    { name: 'Lire le délai recommandé', text: 'Utilisez le délai avant impression après que l\'imprimante signale que le plateau a atteint la consigne.' },
    { name: 'L\'appliquer systématiquement', text: 'Utilisez le même délai de trempe avant le palpage ou l\'étalonnage de la première couche pour des résultats répétables.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculateur de Stabilisation par Inertie Thermique du Plateau',
      description: 'Estimez le délai de stabilisation de la surface d\'un plateau chauffant d\'impression 3D selon le matériau, l\'épaisseur, la température, la puissance du chauffage et la taille du plateau.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Pourquoi attendre après que le plateau a atteint la température cible ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La thermistance peut atteindre la consigne avant que la surface d\'impression supérieure ne soit complètement chaude, donc un délai de trempe améliore la répétabilité de la première couche.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Comment estimer le délai de stabilisation du plateau d\'une imprimante 3D',
      step: [
        { '@type': 'HowToStep', text: 'Sélectionnez le matériau du plateau.' },
        { '@type': 'HowToStep', text: 'Saisissez l\'épaisseur, la température cible, la puissance du chauffage et la taille du plateau.' },
        { '@type': 'HowToStep', text: 'Attendez le délai recommandé après que le plateau a atteint la consigne.' },
        { '@type': 'HowToStep', text: 'Palpez ou imprimez après que l\'ensemble du plateau s\'est stabilisé.' },
      ],
    },
  ],
};
