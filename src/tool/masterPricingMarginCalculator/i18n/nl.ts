import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = '3d-print-prijs-calculator';
const title = '3D print Prijs Calculator: Marge, Markup en Marktpositionering';
const description =
  'Bereken de aanbevolen verkoopprijs (PVP) voor 3D-prints op basis van productiekosten, gewenste winstmarge, markup en de prijzen van concurrenten.';

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
    question: 'Wat is het verschil tussen marge en markup bij 3D-printen?',
    answer:
      'Marge is de winst gedeeld door de verkoopprijs. Markup is de winst gedeeld door de kosten. Een markup van 50% op kosten van 40,00 resulteert in een prijs van 60,00 en een reële marge van 33,33%, niet 50%.',
  },
  {
    question: 'Waarom moet de doelmarge onder de 100% liggen?',
    answer:
      'De margeformule deelt de kosten door (1 - margepercentage). Bij een marge van 100% wordt de noemer nul, waardoor er geen eindige verkoopprijs kan worden berekend.',
  },
  {
    question: 'Moet de prijs van de concurrent mijn 3D-printofferte bepalen?',
    answer:
      'De prijs van de concurrent is een positioneringssignaal, geen vervanging voor de kostenberekening. Als uw berekende prijs boven de markt ligt, controleer dan de kosten, afwerking, levertijd en toegevoegde waarde voordat u korting geeft.',
  },
  {
    question: 'Is de calculator inclusief belastingen of btw?',
    answer:
      'Nee. De calculator berekent de aanbevolen verkoopprijs exclusief btw en belastingen. Voeg btw, platformkosten of transactiekosten toe volgens uw lokale facturatieregels.',
  },
];

const howToData = [
  { name: 'Voer de totale productiekosten in', text: 'Gebruik de volledige kosten van de opdracht, inclusief vaste kosten, variabele kosten, materiaal, machinetijd, arbeid en nabewerking.' },
  { name: 'Kies marge- of markupmodus', text: 'Selecteer of de aanbevolen verkoopprijs (PVP) berekend moet worden op basis van de doelmarge of de markupformule.' },
  { name: 'Stel de referentieprijs van de concurrent in', text: 'Voer een vergelijkbare marktprijs in om te zien of uw offerte boven, onder of op marktniveau ligt.' },
  { name: 'Kopieer de aanbevolen verkoopprijs', text: 'Gebruik de kopieerknop om de PVP, nettowinst, reële marge en marktvergelijking over te nemen in een offerte of factuur.' },
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
    '3d-print prijs calculator',
    '3d-print winstmarge calculator',
    'markup vs marge 3d-printen',
    '3d-print verkoopprijs calculator',
    'marktpositionering indicator',
  ],
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D-print prijsinvoer',
    resultsAriaLabel: '3D-print prijsresultaten',
    currencyLabel: 'Valuta',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Totale productiekosten',
    competitorLabel: 'Referentieprijs concurrent',
    marginLabel: 'Doelmarge',
    markupLabel: 'Doelmarkup',
    conversionFactorLabel: 'Globale conversiefactor',
    conversionFactorUnit: 'x',
    conversionHint: 'Laat op 1 staan als de kosten al in de geselecteerde valuta zijn ingevoerd. Gebruik het voor prijslijstschaling of valuta-aanpassingen.',
    modeLabel: 'PVP-methode',
    marginModeLabel: 'Marge',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'Aanbevolen PVP',
    netProfitLabel: 'Nettowinst',
    realMarginLabel: 'Reële marge',
    marketComparisonLabel: 'Vs. concurrentie',
    marketPositionLabel: 'Marktpositie',
    aboveMarketLabel: 'Boven marktconform',
    belowMarketLabel: 'Onder marktconform',
    atMarketLabel: 'Marktconform',
    pvpByMarginLabel: 'PVP op basis van marge',
    pvpByMarkupLabel: 'PVP op basis van markup',
    formulaMarginLabel: 'PVP_marge = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Prijs kopiëren',
    copiedLabel: 'Gekopieerd',
    copyTemplate: 'Aanbevolen PVP: {pvp}; nettowinst: {profit}; reële marge: {margin}; marktvergelijking: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'Hoe deze 3D-print prijs calculator werkt', level: 2 },
    {
      type: 'paragraph',
      html: 'Een betrouwbare <strong>3d-print prijs calculator</strong> moet uitgaan van de totale productiekosten, en niet alleen van het gewicht van het filament. De kostprijs moet vaste toerekeningen, variabele machinekosten, materiaal, faalkosten (mislukte prints), arbeid, nabewerking, verpakking en eventuele directe opdrachtkosten bevatten. Zodra die kosten bekend zijn, kan de verkoopprijs worden berekend met een doelmarge of een markup. Deze twee methoden zijn niet onderling uitwisselbaar. Het verwarren ervan is een van de snelste manieren voor een 3D-printservice om opdrachten te offreren die rendabel lijken, maar de geplande marge niet halen.',
    },
    {
      type: 'paragraph',
      html: 'De calculator maakt gebruik van strikte formules: <code>PVP_marge = C / (1 - M / 100)</code> en <code>PVP_markup = C x (1 + U / 100)</code>. De nettowinst is altijd <code>PVP - C</code>. De reële marge is de winst gedeeld door de uiteindelijke verkoopprijs, niet door de kosten. De schuifregelaar voor de doelmarge is begrensd onder de 100, omdat een marge van 100% een kostprijs van nul of een oneindige prijs zou vereisen. De uitvoer gebruikt altijd twee vaste decimalen en geen duizendtal-separatoren, zodat de getallen eenvoudig gekopieerd kunnen worden naar facturen, spreadsheets, ERP-systemen of offertes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Strikte margevalidatie', icon: 'mdi:shield-check-outline' },
        { value: '2 decimalen', label: 'Vaste valuta-uitvoer', icon: 'mdi:calculator-variant-outline' },
        { value: 'Live', label: 'Directe herberekening via schuifregelaar', icon: 'mdi:flash-outline' },
        { value: 'Markt', label: 'Concurrentiepositie', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Hanteer één prijstaal binnen het bedrijf',
      html: '<p>Bepaal of verkoopgesprekken marge, markup of beide gebruiken met expliciete aanduidingen. Een offerte met "40%" zonder vermelding van de basis kan twee totaal verschillende prijzen betekenen.</p>',
    },
    { type: 'title', text: 'Marge vs. Markup bij 3D-printen', level: 2 },
    {
      type: 'paragraph',
      html: 'De zoekterm <strong>markup vs marge 3d-printen</strong> duikt vaak op wanneer een ondernemer merkt dat een markup van 30% geen winstmarge van 30% oplevert. Markup wordt berekend ten opzichte van de kosten. Marge wordt berekend ten opzichte van de verkoopprijs. Als een geprint onderdeel 50,00 kost en verkocht wordt voor 75,00, is de nettowinst 25,00. De markup is 50,00% omdat 25,00 gedeeld door 50,00 gelijk is aan 0,50. De marge is 33,33% omdat 25,00 gedeeld door 75,00 gelijk is aan 0,3333. Beide zijn correct, maar beantwoorden verschillende bedrijfsvragen.',
    },
    {
      type: 'table',
      headers: ['Kostprijs', 'Doel', 'Formule', 'PVP', 'Nettowinst', 'Reële marge'],
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
      title: 'Een hoge markup kan leiden tot een bescheiden marge',
      badge: 'Financiële precisie',
      html: '<p>Een markup van 100% verdubbelt de kosten, maar de marge is 50%. Als een bedrijf een reële marge van 60% nodig heeft om de overhead en groei te dekken, is een markup van 100% niet voldoende.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Aanbevolen verkoopprijs exclusief belastingen, tenzij het offertebeleid anders voorschrijft.' },
        { term: 'Kostprijs C', definition: 'De totale productiekosten van de opdracht voordat de winst wordt toegevoegd.' },
        { term: 'Marge M', definition: 'Winst gedeeld door de verkoopprijs, uitgedrukt als percentage.' },
        { term: 'Markup U', definition: 'Winst gedeeld door de kostprijs, uitgedrukt als percentage.' },
        { term: 'Nettowinst', definition: 'Verkoopprijs minus productiekosten voor belastingen en financieringskosten.' },
      ],
    },
    { type: 'title', text: 'Wat valt onder de totale productiekosten', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>3d-print verkoopprijs calculator</strong> is slechts zo nauwkeurig als de ingevoerde kostprijs. Voor professionele offertes mag de kostprijs niet alleen bestaan uit het aantal grammen filament vermenigvuldigd met de spoelprijs. Het moet materiaal, machine-afschrijving, elektriciteitsverbruik, slijtage van nozzles en FEP-folies, harsverlies, voorbereiding van de bouwplaat, arbeidstijd voor slicing, nabewerking, supportverwijdering, schuren, spuiten, kwaliteitscontrole, verpakking en een realistische faalreserve voor mislukte prints bevatten. De calculator gaat ervan uit dat de invoerkosten al deze posten al dekken.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Neem de variabele materiaalkosten mee (filament, hars, poeder, supportmateriaal, spoelverlies).',
        'Bereken de machinetijdkosten op basis van afschrijving, onderhoud, energie en verwachte levensduur.',
        'Houd rekening met arbeid voor werkvoorbereiding, monitoring, nabewerking, verpakking en klantcommunicatie.',
        'Neem nabewerkingsmaterialen op zoals primer, verf, schuurpapier, IPA, handschoenen en polijstmiddelen.',
        'Houd rekening met een gemeten faalreserve voor complexe geometrieën, krappe toleranties of lange nachtopdrachten.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Alleen materiaalkosten',
          description: 'Snel voor hobby-ramingen, maar te beperkt voor commercieel werk.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Arbeid wordt genegeerd', 'Machine-afschrijving wordt genegeerd', 'Onderschatting van afgewerkte onderdelen'],
        },
        {
          title: 'Productiekosten',
          description: 'De beste invoer voor marge- en markupberekening, omdat het de opdracht vóór winst vertegenwoordigt.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Inclusief machinetijd', 'Inclusief arbeid', 'Ondersteunt herhaalbare offertes'],
        },
        {
          title: 'Volledig beladen prijs',
          description: 'Kan al overhead en winst bevatten, waardoor het toevoegen van marge leidt tot dubbeltellingen.',
          icon: 'mdi:receipt-text-outline',
          points: ['Nuttig voor audits', 'Riskant als calculator-invoer', 'Vereist een duidelijk boekhoudbeleid'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'De calculator schat de kosten niet in',
      html: '<p>De calculator zet een bekende kostprijs om in een aanbevolen prijs. Als de kosten onzeker zijn, stel dan eerst een kostenmodel op voor materiaal, tijd, arbeid en afwerking, en gebruik daarna deze tool voor winst- en marktpositionering.</p>',
    },
    { type: 'title', text: '3D-prints prijzen met een doelmarge', level: 2 },
    {
      type: 'paragraph',
      html: 'Mensen die zoeken naar <strong>hoe 3d-prints te prijzen</strong>, beginnen vaak met een eenvoudige vermenigvuldigingsfactor. Margebepaling is beter wanneer het bedrijf een duidelijke winstdoelstelling heeft. Als de vereiste marge 40% is en de productiekosten 60,00 zijn, is de verkoopprijs <code>60,00 / (1 - 0,40)</code>, wat gelijk is aan 100,00. De winst is 40,00 en de reële marge is 40,00%. Deze methode is gebruikelijk wanneer een printservice wil dat elke productgroep een consistent aandeel levert aan de omzet na aftrek van kosten.',
    },
    {
      type: 'paragraph',
      html: 'De belangrijkste regel is dat marge de 100% niet kan bereiken. Bij een marge van 99% wordt een kostprijs van 10,00 een verkoopprijs van 1000,00. Bij 99,99% wordt dezelfde kostprijs 100.000,00. Dit wiskundige gedrag is geen bug; het toont aan waarom margedoelen commercieel realistisch moeten zijn. Zeer hoge margedoelen betekenen meestal dat de kosten te laag zijn ingeschat, het product een uitzonderlijke waarde heeft of dat het om een nichemarkt gaat.',
    },
    {
      type: 'table',
      headers: ['Doelmarge', 'Vermenigvuldigingsfactor', 'Kostprijs van 40.00 wordt', 'Typisch gebruik'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Zeer competitief standaard printwerk met lage service-eisen.'],
        ['35%', '1.5385x', '61.54', 'Standaard professioneel printwerk met normale overhead.'],
        ['50%', '2.0000x', '80.00', 'Complexere opdrachten, nabewerking, spoedklussen of kleine series.'],
        ['70%', '3.3333x', '133.33', 'Gespecialiseerde waarde, moeilijke projecten of premium positionering.'],
      ],
    },
    {
      type: 'summary',
      title: 'Checklist voor margebepaling',
      items: [
        'Gebruik de totale productiekosten als basis.',
        'Houd de doelmarge onder de 100%.',
        'Vergelijk de berekende PVP met de prijs van de concurrent voordat u de offerte verzendt.',
        'Als de prijs te hoog is, controleer dan de kostenfactoren voordat u de winst verlaagt.',
      ],
    },
    { type: 'title', text: 'Markup toepassen zonder verwarring met marge', level: 2 },
    {
      type: 'paragraph',
      html: 'Markup is handig wanneer een werkplaats een vaste factor toepast op bepaalde kostencategorieën. Een service kan bijvoorbeeld 80% markup toepassen op standaard FDM-prints, 120% op afgewerkte prototypes en 200% op kleine spoedklussen. De markupformule is direct: kosten vermenigvuldigd met één plus het markup-percentage. Een kostprijs van 35,00 met een markup van 80% wordt 63,00. De nettowinst is 28,00, maar de reële marge is 44,44%, niet 80%.',
    },
    {
      type: 'proscons',
      title: 'Marge vs. Markup',
      items: [
        { pro: 'De margemethode sluit direct aan bij de winst als percentage van de omzet.', con: 'Het verkoopteam moet begrijpen waarom hoge marges leiden tot niet-lineaire prijsstijgingen.' },
        { pro: 'De markupmethode is snel en eenvoudig toe te passen op kostentabellen.', con: 'Het kan de werkelijke marge maskeren als medewerkers de markuppersentages verwarren met winstgevendheid.' },
        { pro: 'Het tonen van beide formules geeft een volledig transparant financieel beeld.', con: 'Het bedrijf moet nog steeds een beleid hebben voor welk getal de geoffreerde PVP wordt.' },
      ],
    },
    {
      type: 'message',
      title: 'Wanneer markup praktisch is',
      ariaLabel: 'Markup-richtlijn',
      html: '<p>Markup werkt goed voor eenvoudige interne regels: voeg 60% toe aan FDM-seriewerk, 90% aan resin-miniaturen of 150% aan spoedonderdelen. Gebruik de reële marge-uitvoer om te controleren of deze regels het bedrijfsdoel halen.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Markup is niet fout',
      badge: 'Methodenotitie',
      html: '<p>Markup is een geldige manier van prijsbepaling, zolang iedereen de basis begrijpt. Het probleem is niet de markup zelf, maar het noemen van markup "marge" in offertes of spreadsheets.</p>',
    },
    { type: 'title', text: 'Concurrentieprijs en marktpositionering', level: 2 },
    {
      type: 'paragraph',
      html: 'De referentieprijs van de concurrent maakt van de calculator een commercieel beslissingshulpmiddel in plaats van een simpel formuleblad. Als de aanbevolen PVP boven de referentieprijs ligt, wordt het resultaat met een waarschuwingskleur weergegeven. Dat betekent niet direct dat de offerte verkeerd is. Een hogere prijs kan gerechtvaardigd worden door een snellere levertijd, betere materiaaltoerekening, betere oppervlakteafwerking, engineering support, dimensionale controle of een lager risico. De verkoper moet echter wel weten waarom de prijs boven de markt ligt voordat de offerte wordt verstuurd.',
    },
    {
      type: 'paragraph',
      html: 'Een concurrentievergelijking moet gebaseerd zijn op gelijkwaardige criteria. Een ruw FDM-onderdeel met zichtbare lagen is niet hetzelfde als een geschuurd, gegrond en gespoten prototype. Een anonieme online aanbieder met ruime toleranties en lange levertijden is niet hetzelfde als een lokale engineering- en printservice die CAD-bestanden controleert en passing garandeert. Voer de concurrentieprijs in die het beste overeenkomt met hetzelfde materiaal, proces, afwerking, aantal en levertijd.',
    },
    {
      type: 'table',
      headers: ['Positie', 'Interpretatie', 'Actie'],
      rows: [
        ['Onder marktniveau', 'De offerte is aantrekkelijk, maar laat mogelijk marge liggen.', 'Controleer of de doelmarge te laag is of dat de concurrent minder service biedt.'],
        ['Nabij marktniveau', 'De prijs is commercieel in lijn met de referentie.', 'Gebruik servicekwaliteit, levertijd en betrouwbaarheid om u te onderscheiden.'],
        ['Boven marktniveau', 'De offerte behoeft rechtvaardiging of kostenherziening.', 'Controleer de kostenfactoren, afwerkingsgraad en urgentie voordat u korting geeft.'],
      ],
    },
    {
      type: 'tip',
      title: 'Doe niet mee aan een prijsrace naar de bodem',
      html: '<p>Een werkplaats met reële arbeidskosten, gekalibreerde machines, gedocumenteerde materialen en nabewerkingsexperience hoeft niet automatisch een lage referentieprijs te matchen. Concurreer op waarde die de klant kan verifiëren.</p>',
    },
    { type: 'title', text: 'Valutakiezer en globale conversiefactor', level: 2 },
    {
      type: 'paragraph',
      html: 'Internationaal offreren vereist een consistente omgang met geld. De valutakiezer wijzigt het symbool en rekent bestaande invoerwaarden om op basis van de suite-referentiefactoren. De globale conversiefactor is een aparte commerciële vermenigvuldigingsfactor. Gebruik de factor <code>1</code> wanneer de productiekosten en de prijs van de concurrent al in de geselecteerde valuta zijn ingevoerd. Gebruik een aangepaste factor wanneer een bedrijf een regionale prijslijst, wisselkoersbuffer of distributietoeslag wil toepassen.',
    },
    {
      type: 'paragraph',
      html: 'De factor is van toepassing op geldbedragen, niet op marge- of markuppersentages. Dit is belangrijk omdat percentages hun betekenis over verschillende valuta\'s heen moeten behouden. Een marge van 35% in euro blijft een marge van 35% in dollars nadat zowel de kosten als de referentieprijs zijn omgerekend. De uitvoer blijft vastgelegd op twee decimalen zonder duizendtal-separatoren, wat zorgt voor een foutloze invoer in factuurvelden en spreadsheets.',
    },
    {
      type: 'summary',
      title: 'Valuta en factorregels',
      items: [
        'Selecteer de klantvaluta voordat u de prijs kopieert.',
        'Laat de factor op 1 staan voor standaardoffertes in de lokale valuta.',
        'Gebruik de factor voor gecontroleerde commerciële schaling, niet voor het wijzigen van de margedefinitie.',
        'Btw en afronding van facturen vallen buiten deze prijsberekening.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Belastingen en platformkosten zijn apart',
      badge: 'Offertebeleid',
      html: '<p>Als btw, platformkosten, betalingsverwerking of verzendverzekeringen moeten worden doorberekend, voeg deze dan toe volgens het bedrijfsbeleid nadat de netto PVP is berekend.</p>',
    },
    { type: 'title', text: 'Een prijsstrategie opbouwen voor een 3D-printservice', level: 2 },
    {
      type: 'paragraph',
      html: 'Een sterke <strong>prijsstrategie voor 3D-printservices</strong> combineert nauwkeurige kostenberekening, winstdiscipline en marktbewustzijn. Nauwkeurige kostenberekening voorkomt verkoop onder de kostprijs. Winstdiscipline voorkomt dat willekeurige kortingen uw marge uithollen. En marktbewustzijn voorkomt dat u de aansluiting met de markt verliest. Deze calculator bevindt zich op het kruispunt van deze drie factoren.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Hanteer verschillende margedoelen voor standaard FDM-prints, functionele prototypes, esthetische modellen, spoedwerk en series.',
        'Gebruik markup-regels alleen wanneer medewerkers ook de reële marge kunnen inzien die deze regels opleveren.',
        'Volg de conversieratio van offertes per marktpositie, zodat offertes boven marktniveau met data kunnen worden onderbouwd.',
        'Evalueer de werkelijke winst na levering en pas het kostenmodel aan wanneer arbeid, faalkosten of nabewerking zijn onderschat.',
        'Hanteer een minimum orderwaarde voor kleine opdrachten, waar de administratie, setup en communicatie de productiekosten overstijgen.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Evalueer de winst van 3D prints na afronding van de opdracht',
      html: '<p>De geplande nettowinst is handig voorafgaand aan de offerte, maar de werkelijk behaalde winst is wat uw prijssysteem verbetert. Vergelijk geschatte kosten met werkelijke kosten en pas toekomstige margedoelen aan per productgroep.</p>',
    },
    {
      type: 'summary',
      title: 'Workflow voor offertes',
      items: [
        'Schat de totale productiekosten in.',
        'Kies bewust voor marge of markup.',
        'Controleer de reële marge en nettowinst.',
        'Vergelijk de uitkomst met een gelijkwaardige concurrentieprijs.',
        'Kopieer de PVP naar de offerte en verwerk belastingen apart.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
