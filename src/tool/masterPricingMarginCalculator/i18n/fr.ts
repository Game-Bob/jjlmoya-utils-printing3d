import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = 'calculateur-prix-impression-3d';
const title = 'Calculateur de Prix d\'Impression 3D : Marge, Markup et Positionnement';
const description =
  'Calculez le prix de vente conseillé en impression 3D à partir des coûts de fabrication, de la marge bénéficiaire ciblée, du taux de marque (markup) et des prix de la concurrence.';

const currencyOptions = [
  { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
  { code: 'USD', label: '$', symbol: '$' },
  { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
  { code: 'CAD', label: 'C$', symbol: 'C$' },
  { code: 'AUD', label: 'A$', symbol: 'A$' },
  { code: 'CHF', label: 'Fr', symbol: 'Fr' },
  { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
  { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
  { code: 'BRL', label: 'R$', symbol: 'R$' },
  { code: 'MXN', label: '$', symbol: '$' },
  { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
  { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
  { code: 'SEK', label: 'kr', symbol: 'kr' },
  { code: 'NOK', label: 'kr', symbol: 'kr' },
  { code: 'DKK', label: 'kr', symbol: 'kr' },
  { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
  { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
];

const faqData = [
  {
    question: 'Quelle est la différence entre marge et markup en impression 3D ?',
    answer:
      'La marge est le bénéfice divisé par le prix de vente. Le markup (ou taux de marque) est le bénéfice divisé par le coût de fabrication. Un markup de 50 % sur un coût de 40,00 donne un prix de 60,00 et génère une marge réelle de 33,33 %, et non de 50 %.',
  },
  {
    question: 'Pourquoi la marge cible doit-elle être strictement inférieure à 100 % ?',
    answer:
      'La formule de calcul de la marge divise le coût par (1 - taux de marge). À 100 % de marge, le dénominateur devient égal à zéro, rendant le prix de vente final mathématiquement infini.',
  },
  {
    question: 'Le prix de la concurrence doit-il dicter mes devis d\'impression 3D ?',
    answer:
      'Le prix des concurrents sert d\'indicateur de positionnement, mais ne remplace pas le calcul des coûts. Si votre tarif recommandé dépasse le marché, auditez vos coûts, le niveau de finition et la valeur ajoutée avant de solder.',
  },
  {
    question: 'Le calculateur intègre-t-il les taxes ou la TVA ?',
    answer:
      'Non. Il calcule le prix de vente conseillé hors taxes. Vous devez appliquer la TVA, les taxes locales ou les frais de plateforme selon vos obligations de facturation habituelles.',
  },
];

const howToData = [
  { name: 'Saisir le coût total de fabrication', text: 'Prenez en compte le coût complet de production : coûts fixes, variables, matière, usure machine, main-d\'œuvre et post-traitement.' },
  { name: 'Choisir le mode marge ou markup', text: 'Sélectionnez si le prix de vente recommandé doit appliquer la formule de marge cible ou celle du markup.' },
  { name: 'Définir un prix de référence concurrentiel', text: 'Saisissez un tarif de marché équivalent pour situer votre devis par rapport à vos concurrents.' },
  { name: 'Copier le tarif conseillé', text: 'Utilisez le bouton de copie pour exporter le PVP, le bénéfice net, la marge réelle et le positionnement marché dans votre devis.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    'calculateur prix impression 3d',
    'calculateur marge beneficiaire impression 3d',
    'marge vs markup impression 3d',
    'calculateur tarif vente impression 3d',
    'positionnement prix concurrentiel 3d',
  ],
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Données de tarification d\'impression 3D',
    resultsAriaLabel: 'Résultats de tarification d\'impression 3D',
    currencyLabel: 'Devise',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Coût total de fabrication',
    competitorLabel: 'Prix de référence concurrentiel',
    marginLabel: 'Marge cible',
    markupLabel: 'Markup cible',
    conversionFactorLabel: 'Facteur de conversion global',
    conversionFactorUnit: 'x',
    conversionHint: 'Laissez à 1 si les coûts sont déjà saisis dans la devise sélectionnée. Utile pour appliquer un coefficient multiplicateur global.',
    modeLabel: 'Méthode PVP',
    marginModeLabel: 'Marge',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'PVP recommandé',
    netProfitLabel: 'Bénéfice net',
    realMarginLabel: 'Marge réelle',
    marketComparisonLabel: 'Vs. concurrence',
    marketPositionLabel: 'Position marché',
    aboveMarketLabel: 'Au-dessus du marché',
    belowMarketLabel: 'En dessous du marché',
    atMarketLabel: 'Au prix du marché',
    pvpByMarginLabel: 'PVP par marge',
    pvpByMarkupLabel: 'PVP par markup',
    formulaMarginLabel: 'PVP_marge = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Copier le prix',
    copiedLabel: 'Copié',
    copyTemplate: 'PVP recommandé : {pvp}; bénéfice net : {profit}; marge réelle : {margin}; comparaison marché : {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Fonctionnement du calculateur de prix d\'impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calculateur de prix d\'impression 3D</strong> professionnel doit se baser sur le coût de fabrication réel, et non uniquement sur le poids du consommable. Ce coût doit comprendre l\'amortissement machine, l\'électricité, le temps de main-d\'œuvre (préparation du plateau, post-traitement, contrôle qualité), les pertes de consommables, le taux d\'échec estimé et l\'emballage. Une fois ce coût déterminé, vous pouvez calculer le prix de vente final via deux approches distinctes : la marge cible ou le markup. Ces deux méthodes diffèrent fondamentalement, et les confondre risque de fausser votre rentabilité.',
    },
    {
      type: 'paragraph',
      html: 'Notre outil applique les formules standard : <code>PVP_marge = C / (1 - M / 100)</code> et <code>PVP_markup = C x (1 + U / 100)</code>. Le profit net s\'établit toujours à <code>PVP - C</code>. La marge réelle représente le bénéfice rapporté au prix final (et non au coût initial). Le curseur de marge est bridé en deçà de 100 % afin d\'éviter une division par zéro. La valeur finale s\'affiche avec deux décimales pour faciliter l\'import direct dans vos devis, factures ou tableurs.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Validation stricte de la marge', icon: 'mdi:shield-check-outline' },
        { value: '2 décimales', label: 'Format monétaire fixe', icon: 'mdi:calculator-variant-outline' },
        { value: 'En direct', label: 'Calcul dynamique par curseur', icon: 'mdi:flash-outline' },
        { value: 'Marché', label: 'Indicateur de concurrence', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Unifiez votre terminologie financière interne',
      html: '<p>Clarifiez avec vos collaborateurs si vous raisonnez en marge ou en markup lors des phases de chiffrage commercial. Un taux de "40 %" sans précision peut conduire à deux grilles tarifaires incompatibles.</p>',
    },
    { type: 'title', text: 'Marge vs. Markup en Impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Le débat <strong>marge vs markup en impression 3D</strong> survient fréquemment lorsqu\'un prestataire constate qu\'un markup de 30 % ne produit pas 30 % de marge nette sur son chiffre d\'affaires. Le markup exprime le gain par rapport au coût de revient, tandis que la marge exprime le gain par rapport au prix facturé. Si une pièce coûte 50,00 et se vend 75,00, votre bénéfice brut est de 25,00. Le markup s\'élève à 50,00 % (25,00 / 50,00) alors que la marge réelle est de 33,33 % (25,00 / 75,00). Les deux indicateurs sont valides, mais répondent à des objectifs distincts.',
    },
    {
      type: 'table',
      headers: ['Coût', 'Cible', 'Formule', 'PVP', 'Bénéfice net', 'Marge réelle'],
      rows: [
        ['50.00', '50% markup', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% marge', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% markup', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% marge', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Un markup fort peut dissimuler une marge restreinte',
      badge: 'Rigueur financière',
      html: '<p>Doubler vos coûts (markup de 100 %) ne produit qu\'une marge de 50 %. Si votre entreprise requiert 60 % de marge réelle pour couvrir ses frais fixes et investir, un markup de 100 % se révélera insuffisant.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Prix de vente public conseillé hors taxes (sauf mentions contraires de votre politique).' },
        { term: 'Coût C', definition: 'Coût de revient global de fabrication affecté à la commande avant marge.' },
        { term: 'Marge M', definition: 'Bénéfice rapporté au prix de vente final, exprimé en pourcentage.' },
        { term: 'Markup U', definition: 'Bénéfice rapporté au coût de fabrication d\'origine, exprimé en pourcentage.' },
        { term: 'Bénéfice net', definition: 'Prix de vente final déduit du coût de fabrication avant impôts.' },
      ],
    },
    { type: 'title', text: 'Composition du coût de fabrication en impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>calculateur de prix d\'impression 3D</strong> n\'est fiable que si le coût de base saisi est complet. Un devis professionnel ne saurait se limiter au simple poids de fil ou de résine multiplié par le prix d\'achat brut. Vous devez inclure le coût machine (consommation électrique, usure des consommables comme les buses, plateaux ou bacs FEP/silicone), la préparation des fichiers (slicing), le nettoyage, le post-traitement manuel, le contrôle de conformité, l\'emballage, les frais de transaction bancaire et une provision pour échecs de production. Le calculateur considère que ces variables sont déjà intégrées dans le coût de revient initial.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Intégrez les matières premières : filaments, résines, poudres, matériaux de support et pertes liées aux purges.',
        'Calculez l\'amortissement horaire des imprimantes, incluant l\'entretien préventif et les pièces de rechange.',
        'Valorisez le temps passé : préparation du fichier, post-traitement, contrôle qualité et packaging.',
        'Ajoutez les fournitures de finition directe : abrasifs, solvants, apprêts, peintures et vernis.',
        'Prévoyez une marge d\'erreur (échecs) adaptée à la complexité géométrique de la pièce ou aux exigences esthétiques.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Coût matière seul',
          description: 'Rapide pour les loisirs mais inadapté à une activité commerciale pérenne.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Exclut le temps de travail', 'Ignore l\'amortissement machine', 'Sous-évalue la finition'],
        },
        {
          title: 'Coût de revient',
          description: 'La base idéale pour chiffrer vos devis de manière rigoureuse.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Inclut le taux machine', 'Prend en compte la main-d\'œuvre', 'Garantit des devis fiables'],
        },
        {
          title: 'Prix tout compris',
          description: 'Risque de double emploi si les frais fixes et la marge y sont déjà imputés.',
          icon: 'mdi:receipt-text-outline',
          points: ['Utile pour les audits', 'Déconseillé pour ce calculateur', 'Exige une comptabilité claire'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'Le calculateur ne remplace pas le chiffrage de revient',
      html: '<p>Il applique vos objectifs financiers à un coût préalablement établi. Si vos coûts de revient sont incertains, modélisez d\'abord vos coûts matière et temps avant d\'utiliser cet outil pour fixer vos tarifs finaux.</p>',
    },
    { type: 'title', text: 'Fixer ses tarifs par marge cible', level: 2 },
    {
      type: 'paragraph',
      html: 'Utiliser un coefficient multiplicateur brut est une solution de facilité répandue. Cependant, la tarification par marge s\'avère bien plus stratégique pour assurer la rentabilité globale de l\'atelier. Si vous visez une marge de 40 % sur une pièce au coût de revient de 60,00, la formule s\'écrit <code>60,00 / (1 - 0,40)</code>, soit un prix final de 100,00. Votre bénéfice brut s\'établit à 40,00, réalisant exactement l\'objectif de 40 % de marge. Cette rigueur permet de stabiliser les contributions nettes de chaque commande.',
    },
    {
      type: 'paragraph',
      html: 'Mathématiquement, une marge ne peut égaler ou dépasser 100 %. À 99 % de marge cible, un coût de 10,00 se traduit par un prix de 1 000,00. À 99,99 %, ce même coût exige un tarif de 100 000,00. Ce comportement formule met en évidence la nécessité de fixer des objectifs réalistes. Des exigences de marges anormalement hautes indiquent souvent un coût de revient sous-évalué ou une prestation à très haute valeur ajoutée.',
    },
    {
      type: 'table',
      headers: ['Marge cible', 'Coefficient sur coût', 'Coût de 40.00 devient', 'Usage type'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Impression standard hautement concurrentielle, sans service additionnel.'],
        ['35%', '1.5385x', '61.54', 'Prestation professionnelle courante avec frais généraux standard.'],
        ['50%', '2.0000x', '80.00', 'Pièces techniques complexes, finitions manuelles, urgences ou petites séries.'],
        ['70%', '3.3333x', '133.33', 'Prestation de niche, haute expertise, ou positionnement de marque premium.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checklist pour la tarification par marge',
      items: [
        'Utilisez le coût de revient global comme valeur de départ.',
        'Fixez des objectifs de marge cible strictement inférieurs à 100 %.',
        'Comparez toujours le prix de vente estimé avec le marché avant d\'émettre le devis.',
        'Analysez les inducteurs de coûts avant de consentir à des remises sur votre marge.',
      ],
    },
    { type: 'title', text: 'Utiliser le markup sans compromettre vos marges', level: 2 },
    {
      type: 'paragraph',
      html: 'La tarification par markup (taux de marque) est pertinente pour appliquer rapidement un coefficient correcteur par catégorie de travaux. Par exemple, appliquer un markup de 80 % sur le FDM standard, 120 % sur le prototypage de précision et 200 % sur les commandes urgentes. Le calcul est linéaire : le coût est multiplié par (1 + markup). Un coût de 35,00 avec un markup de 80 % donne un prix final de 63,00. Votre bénéfice est de 28,00, mais la marge réelle sur cette vente n\'est que de 44,44 % (et non 80 %).',
    },
    {
      type: 'proscons',
      title: 'Marge vs. Markup : avantages et inconvénients',
      items: [
        { pro: 'La marge sécurise directement les objectifs de rentabilité financière.', con: 'Demande une éducation des commerciaux pour appréhender la courbe non linéaire des prix.' },
        { pro: 'Le markup simplifie l\'application de coefficients multiplicateurs.', con: 'Peut induire en erreur sur la rentabilité réelle si on l\'assimile à la marge nette.' },
        { pro: 'Visualiser les deux indicateurs offre une transparence financière totale.', con: 'L\'entreprise doit définir une règle claire quant au choix de la valeur finale.' },
      ],
    },
    {
      type: 'message',
      title: 'Usage pratique du markup',
      ariaLabel: 'Conseils markup',
      html: '<p>Le markup convient pour les règles internes rapides : +60 % sur les séries FDM, +90 % sur les figurines résine, ou +150 % sur les pièces express. Suivez toujours la valeur de marge réelle pour valider ces choix.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Le markup reste un outil valide',
      badge: 'Note de méthode',
      html: '<p>Le markup est une convention de calcul légitime si elle est comprise par tous. Le danger réside uniquement dans le fait d\'employer le terme "marge" pour désigner un taux de marque.</p>',
    },
    { type: 'title', text: 'Positionnement et analyse de la concurrence', level: 2 },
    {
      type: 'paragraph',
      html: 'La saisie d\'un prix concurrentiel de référence transforme ce simple outil mathématique en aide à la décision commerciale. Si votre PVP conseillé est supérieur au marché, l\'affichage passe au orange. Cela n\'invalide pas votre calcul : un prix plus élevé peut refléter des délais réduits, une meilleure traçabilité des matériaux, une qualité de surface supérieure, un support d\'ingénierie, ou un risque réduit pour le client. Cependant, le commercial doit être en mesure d\'expliquer cette différence avant l\'envoi du devis.',
    },
    {
      type: 'paragraph',
      html: 'Veillez à comparer ce qui est comparable. Une pièce FDM brute sortie d\'imprimante ne vaut pas un prototype poncé, apprêté et peint. De même, une offre anonyme en ligne avec délais longs et tolérances incertaines ne remplace pas un service de proximité qualifié qui valide vos fichiers CAD. Renseignez toujours un prix de référence correspondant au même niveau d\'exigence technique.',
    },
    {
      type: 'table',
      headers: ['Position', 'Analyse', 'Décision commerciale'],
      rows: [
        ['En dessous du marché', 'Tarif attractif mais manque à gagner potentiel sur vos marges.', 'Vérifiez si la marge cible n\'est pas sous-évaluée ou si le concurrent offre moins de services.'],
        ['Proche du marché', 'Tarif cohérent avec le marché de référence.', 'Mettez en avant vos atouts de service (délais, proximité) pour remporter le marché.'],
        ['Au-dessus du marché', 'Devis nécessitant une justification ou un audit de coût.', 'Analysez vos postes de coûts de revient et le niveau d\'exigence client avant de consentir à un rabais.'],
      ],
    },
    {
      type: 'tip',
      title: 'Évitez la guerre des prix par le bas',
      html: '<p>Un atelier professionnel structuré (main-d\'œuvre qualifiée, machines calibrées, fiches techniques de matériaux) n\'a pas à s\'aligner sur des tarifs low-cost. Valorisez la qualité et la conformité technique.</p>',
    },
    { type: 'title', text: 'Devises et facteurs de conversion globaux', level: 2 },
    {
      type: 'paragraph',
      html: 'Les devis internationaux exigent une gestion rigoureuse des monnaies. Le sélecteur de devise adapte le symbole et convertit les montants selon les taux de référence de la suite logicielle. Le facteur de conversion global est un coefficient d\'ajustement commercial distinct. Conservez la valeur <code>1</code> si vos coûts de fabrication et prix de référence sont déjà saisis dans la devise finale. Modifiez ce coefficient pour appliquer des grilles de prix régionales, amortir les fluctuations des taux de change ou intégrer des commissions d\'intermédiaires.',
    },
    {
      type: 'paragraph',
      html: 'Ce facteur affecte uniquement les montants financiers, pas les taux de marge ou de markup. Cette règle préserve la signification économique de vos indicateurs : une marge de 35 % reste identique en dollars ou en euros après conversion. L\'affichage sans séparateur de milliers et avec deux décimales garantit des copier-coller propres vers vos outils de facturation ou vos ERP.',
    },
    {
      type: 'summary',
      title: 'Règles de devises et coefficients',
      items: [
        'Sélectionnez la devise du client final avant d\'exporter vos données.',
        'Laissez le facteur à 1 pour les devis standards en monnaie locale.',
        'Utilisez le coefficient pour des ajustements commerciaux stratégiques, et non pour modifier vos ratios de marge.',
        'Gérez les taxes et arrondis finaux dans votre outil de facturation habituel.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Taxes et commissions de vente externes',
      badge: 'Politique commerciale',
      html: '<p>Toute taxe sur la valeur ajoutée (TVA), taxe de vente ou commission de plateforme doit être ajoutée en fin de processus sur le PVP recommandé calculé par notre outil.</p>',
    },
    { type: 'title', text: 'Établir une stratégie tarifaire en impression 3D', level: 2 },
    {
      type: 'paragraph',
      html: 'Une <strong>stratégie tarifaire pérenne en impression 3D</strong> concilie rigueur de calcul, discipline financière et connaissance du marché. La rigueur élimine le risque de vente à perte. La discipline protège vos marges contre les négociations arbitraires. La connaissance du marché évite de déconnecter vos offres de la réalité économique. Ce calculateur réunit ces trois piliers pour vous guider au quotidien.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Définissez des objectifs de marge distincts pour la production de série, le prototypage technique et les pièces à haute valeur esthétique.',
        'Utilisez des règles de markup uniquement si vos équipes ont également visibilité sur la marge nette réelle correspondante.',
        'Suivez le taux de conversion de vos devis pour justifier vos positionnements premium par des preuves factuelles.',
        'Réalisez un bilan post-production pour affiner vos modèles de coûts matière, temps machine et taux d\'échecs.',
        'Fixez un montant minimum de commande pour couvrir les frais administratifs et de configuration sur les petits travaux.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Analysez vos marges réelles après livraison',
      html: '<p>La rentabilité estimée valide le devis, mais seule la rentabilité réelle constatée finance votre croissance. Comparez systématiquement vos coûts prévisionnels aux coûts réels pour optimiser vos futurs tarifs.</p>',
    },
    {
      type: 'summary',
      title: 'Flux de chiffrage recommandé',
      items: [
        'Estimer le coût complet de revient.',
        'Sélectionner la méthode (marge ou markup) selon votre politique interne.',
        'Vérifier les indicateurs de marge nette et bénéfice.',
        'Évaluer le prix obtenu face à une offre concurrente comparable.',
        'Copier le tarif PVP et appliquer les taxes lors de la facturation.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
