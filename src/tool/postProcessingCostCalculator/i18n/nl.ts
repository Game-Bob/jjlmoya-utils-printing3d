import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = '3d-print-nabewerking-kosten-calculator';
const title = '3D print nabewerkingskosten calculator';
const description =
  'Schat de kosten voor handmatige afwerking, het verwijderen van supports, schuren, schilderen, overig handwerk, verbruiksartikelen en de valutaomgerekende nabewerkingskosten voor 3D-geprinte onderdelen.';

const faqData = [
  {
    question: 'Hoe bereken ik de nabewerkingskosten voor 3D-prints?',
    answer:
      'Tel alle minuten handmatige afwerking bij elkaar op, vermenigvuldig het totaal met het uurtarief gedeeld door 60, en voeg de verbruiksartikelen toe. Deze calculator toont ook het kostenandeel van elke afwerkingsfase.',
  },
  {
    question: 'Moeten verbruiksartikelen worden meegenomen in de kosten voor handmatige afwerking?',
    answer:
      'Ja. Schuurpapier, vulmiddel primer, verf, handschoenen, afplaktape, IPA, reinigingsvloeistof voor resin, doekjes en gereedschapsslijtage kunnen groot genoeg zijn om de offerte van afgewerkte onderdelen te veranderen.',
  },
  {
    question: 'Verandert valutaomrekening de kostenformule?',
    answer:
      'Nee. Valuta verandert alleen de weergegeven monetaire schaal. De arbeidsformule blijft: minuten vermenigvuldigd met het uurtarief gedeeld door 60 plus verbruiksartikelen.',
  },
  {
    question: 'Welk uurtarief moet ik gebruiken voor 3D-printarbeid?',
    answer:
      'Gebruik het volledige werkplaatsuurtarief, niet alleen het nettoloon. Neem lonen, sociale lasten, betaalde niet-factureerbare tijd, toezicht en het vereiste vaardigheidsniveau voor cosmetische afwerking mee.',
  },
];

const howToData = [
  { name: 'Voer afwerkingsminuten in', text: 'Voeg supportverwijdering, schuren, schilderen en overige handmatige tijd in minuten toe.' },
  { name: 'Stel tarief en verbruiksartikelen in', text: 'Voer uw uurtarief voor afwerking en de directe kosten van verbruiksartikelen in de geselecteerde valuta in.' },
  { name: 'Kies valuta en factor', text: 'Gebruik de valutakiezer voor symbolen en de optionele conversiefactor voor offerteaanpassingen.' },
  { name: 'Kopieer het resultaat', text: 'Gebruik de kopieerknop om totaal, arbeid, verbruiksartikelen en minuten in een offerte te plakken.' },
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
    '3D-print nabewerkingskosten calculator',
    'arbeidskosten schatting 3D-printen',
    'handmatige afwerkingskosten 3D-printen',
    'uurtarief calculator nabewerking',
  ],
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Invoeropties nabewerkingskosten',
    resultsAriaLabel: 'Resultaten nabewerkingskosten',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    currencyOptionSeparator: ' - ',
    supportLabel: 'Supportverwijdering',
    sandingLabel: 'Schuren',
    paintingLabel: 'Schilderen',
    otherLabel: 'Overig handwerk',
    hourlyRateLabel: 'Uurtarief',
    consumablesLabel: 'Verbruiksartikelen',
    conversionFactorLabel: 'Conversiefactor',
    conversionFactorUnit: 'x',
    conversionHint: 'Laat op 1 staan als het tarief al in de lokale valuta is ingevoerd; verander het om een globale offertemultiplier toe te passen.',
    minutesUnit: 'min',
    hourUnit: 'u',
    rateUnitSeparator: '/',
    totalLabel: 'Nabewerking totaal',
    laborLabel: 'Arbeid',
    consumablesBreakdownLabel: 'Verbruiksartikelen',
    timeLabel: 'Handmatige tijd',
    effectiveRateLabel: 'Effectief tarief',
    breakdownLabel: 'Kostenandeel per afwerkingsfase',
    copyLabel: 'Resultaat kopiëren',
    copiedLabel: 'Gekopieerd',
    copyTemplate: 'Nabewerkingskosten: {total} ({minutes}; arbeid {labor}; verbruiksartikelen {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: 'Wat deze 3D-print nabewerkingskosten calculator meet', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>3D-print nabewerkingskosten calculator</strong> moet een praktische offrageervraag beantwoorden: hoeveel geld gaat er op nadat de printer stopt? Het geprinte onderdeel heeft misschien al een kost voor machinetijd en materiaal, maar veel betaalde opdrachten worden gewonnen of verloren bij het verwijderen van supports, schuren, vullen, grunderen, schilderen, reinigen, afplakken, inspecteren en nabewerken. Deze calculator splitst die handmatige afwerktaken op in minuten, vermenigvuldigt ze met een uurtarief voor nabewerking en voegt directe verbruiksartikelen toe zodat het eindgetal in een offerte geplakt kan worden.',
    },
    {
      type: 'paragraph',
      html: 'De basisformule is bewust transparant: <code>((supports + schuren + schilderen + overige minuten) x (uurtarief / 60)) + verbruiksartikelen</code>. De optionele conversiefactor vermenigvuldigt het uurtarief en de verbruiksartikelen wanneer een werkplaats waarden wil aanpassen voor valutaomrekening, regionale prijslijsten, onderaannemersmarge of een tijdelijke aanpassing. Als de gebruiker een lokaal arbeidstarief rechtstreeks invoert, moet de factor op <code>1</code> blijven staan en blijft het resultaat onafhankelijk van wisselkoersaannames.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x tarief/60', label: 'Arbeidskosten formule', icon: 'mdi:clock-outline' },
        { value: '5 fasen', label: 'Supports, schuren, schilderen, overig, verbruiksartikelen', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Standaard conversiefactor', icon: 'mdi:swap-horizontal' },
        { value: 'Live', label: 'Geen bereken-knop nodig', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Offerteer de persoon, niet de printer',
      html: '<p>Nabewerking is doorgaans arbeidsintensief. Een langzame print kan goedkoop zijn om af te werken, terwijl een klein cosmetisch onderdeel met supports op zichtbare vlakken dure, gespecialiseerde afwerking kan vereisen. Behandel de <strong>arbeidskosten schatting voor 3D-printen</strong> als een eigen regel in plaats van die te verbergen in de materiaalmark-up.</p>',
    },
    { type: 'title', text: 'Supportverwijdering: de eerste handmatige kostendrijver', level: 2 },
    {
      type: 'paragraph',
      html: 'Supportverwijdering is niet alleen de tijd die nodig is om plastic van een model los te trekken. Het kan snijden, verwarmen, oplossen, spoelen, schrapen, bijknippen van supportresten, beschermen van kwetsbare elementen en controleren of supportspleten extra oppervlaktewerk vereisen, omvatten. FDM-boomachtige supports, dichte interfacelagen, SLA-supportpunten en SLS-depowdering creëren elk een ander arbeidsprofiel. Voor een betrouwbare <strong>schatting van de handmatige afwerkingskosten bij 3D-printen</strong> moet de tijd voor supportverwijdering worden gemeten op vergelijkbare opdrachten in plaats van geschat op basis van de printduur.',
    },
    {
      type: 'table',
      headers: ['Supportsituatie', 'Typisch tijdgedrag', 'Offrageernoot'],
      rows: [
        ['Makkelijk losbreekbare supports', 'Korte, voorspelbare verwijdering', 'Vaak geschikt voor een vaste minutentoewijzing per onderdeel.'],
        ['Dichte supportinterface', 'Langer bijknippen en oppervlaktereiniging', 'Voeg schuurminuten apart toe zodat de kostendrijver zichtbaar blijft.'],
        ['Resin miniaturen of kwetsbare modellen', 'Langzaam knippen om schade te voorkomen', 'Gebruik een hoger uurtarief als gespecialiseerd handwerk vereist is.'],
        ['Oplosbare support', 'Minder handmatig knippen maar meer procestijd', 'Neem vloeistofbehandeling en drogen mee als de operator betrokken is.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Offerteer supportverwijdering niet alleen op basis van het supportvolume in de slicer',
      badge: 'Arbeidsrisico',
      html: '<p>Het supportvolume kan laag zijn terwijl de toegang moeilijk is. Een kleine support verborgen in een smal element kan meer arbeidskosten met zich meebrengen dan een grote externe support die er netjes afkomt.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Registreer de minuten voor supportverwijdering voor terugkerende onderdeelfamilies.',
        'Scheidt verwijdering van schuren zodat beslissingen over supportstrategieën makkelijker te vergelijken zijn.',
        'Verhoog de schatting voor kwetsbare geometrieën, dunne pennen, miniaturen en klantgerichte oppervlakken.',
        'Gebruik dezelfde valuta en uurtariefbasis als de rest van de offerte.',
      ],
    },
    { type: 'title', text: 'Schuren, plamuren en oppervlaktevoorbereiding', level: 2 },
    {
      type: 'paragraph',
      html: 'Schuren is vaak de grootste verborgen kost bij afgewerkte 3D-prints omdat het iteratief is. De operator kan door grof schuren, plamuur, uitharding- of droogtijd, fijn schuren, puntcorrectie en inspectie onder schuin licht gaan. Laagdikte, materiaalhard-heid, supportspleten, vereist glansniveau en onderdeelgeometrie bepalen allemaal de hoeveelheid handwerk. Een functioneel hulpstuk heeft misschien vijf minuten nodig; een tentoonstellingsprototype heeft misschien een uur nodig voordat de verf zelfs maar wordt geopend.',
    },
    {
      type: 'paragraph',
      html: 'De calculator behandelt schuren als minuten vermenigvuldigd met het uurtarief voor afwerking omdat het proces meer door de operator dan door de machine wordt beperkt. Verbruiksartikelen zoals schuurmiddelen, vulmiddel primer, plamuur, stofvrije doekjes en afplakmateriaal horen in het verbruiksartikelenveld in plaats van verstopt in het arbeidstarief. Dit houdt de <strong>analyse van 3D-print afwerkingskosten</strong> leesbaar: arbeid toont tijdsdruk, verbruiksartikelen tonen ingekochte inputs.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Functionele afwerking',
          description: 'Scherpe randen gereinigd, supports verwijderd en ruwe vlekken voldoende gereduceerd voor montage.',
          icon: 'mdi:wrench-outline',
          points: ['Minste schuurttijd', 'Minimale verbruiksartikelen', 'Inspectie gericht op pasvorm'],
        },
        {
          title: 'Presentatie afwerking',
          description: 'Zichtbare vlakken gladgemaakt, selectief grundeerd en laaglijnen verminderd voor klantenreview.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Matige schuurttijd', 'Grondverf en plamuur waarschijnlijk', 'Cosmetische vlakken drijven de arbeid'],
        },
        {
          title: 'Schilderklare afwerking',
          description: 'Progressief schuren, plamuren, afplakken en defectcorrectie voor de kleurlagen.',
          icon: 'mdi:spray',
          points: ['Hoogste handmatige tijd', 'Verbruiksartikelen tellen mee', 'Nabewerkingsmarge aanbevolen'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Schuurmiddelen zijn verbruiksartikelen',
      ariaLabel: 'Opmerking over verbruiksartikelen',
      html: '<p>Schuurpapier, schuursponsjes, naaldvijlen, plamuur, handschoenen en doekjes zijn niet gratis. Voeg hun directe kost toe wanneer de opdracht een betekenisvol deel daarvan verbruikt.</p>',
    },
    { type: 'title', text: 'Kosten van schilderen en coaten schatten', level: 2 },
    {
      type: 'paragraph',
      html: 'Schilderminuten moeten de actieve operatortijd omvatten: afplakken, mengen, spuiten, kwastwerk, bijwerken, afplakken verwijderen, werkgebied reinigen en inspectie. Passieve droog- of uithardingstijd mag alleen worden toegevoegd als die de operator blokkeert of schaarse cabineruimte bezet die als arbeid of overhead wordt berekend. Dit onderscheid voorkomt dat een <strong>uurtarief calculator voor nabewerking</strong> elk wachtuur omzet in arbeidskosten terwijl niemand actief aan het onderdeel werkt.',
    },
    {
      type: 'table',
      headers: ['Schildertaak', 'Als arbeid invoeren?', 'Als verbruiksartikelen invoeren?'],
      rows: [
        ['Afplakken en afplakken verwijderen', 'Ja, actieve minuten', 'Tape, folie, stoppers en sjablonen'],
        ['Verf of resincoating mengen', 'Ja, actieve minuten', 'Verf, verdunner, bekers, filters, handschoenen'],
        ['Spuiten of kwastwerk', 'Ja, actieve minuten', 'Coatingmateriaal en reinigingssolvent'],
        ['Droogtijd', 'Alleen als het betaalde arbeid of cabinecapaciteit blokkeert', 'Doorgaans geen direct materiaal tenzij warmte of lampen apart worden gefactureerd'],
      ],
    },
    {
      type: 'tip',
      title: 'Reken kleurcomplexiteit expliciet door',
      html: '<p>Een eenvoudige grondlaag en een tweekleurige afgewerkte oppervlak kunnen vergelijkbare materiaalkosten hebben maar zeer verschillende arbeidskosten. Gebruik het veld voor schilderminuten om het verschil zichtbaar te maken voordat marge wordt toegepast.</p>',
    },
    {
      type: 'proscons',
      title: 'Vaste afwerkingstoewijzing vs gemeten afwerkingsminuten',
      items: [
        { pro: 'Een vaste toewijzing is snel voor herhalende opdrachten met stabiele afwerkingsvereisten.', con: 'Het verbergt welke fase winst opeet als een opdracht verandert.' },
        { pro: 'Gemeten minuten maken de schatting controleerbaar en makkelijk bij te werken.', con: 'Ze vereisen dat de werkplaats echte afwerkingstijden bijhoudt voor gangbare onderdeeltypen.' },
        { pro: 'De visuele kostenbalk maakt klantgerichte offertes intern makkelijker uit te leggen.', con: 'Het vervangt het oordeel over cosmetisch risico en nabewerkingskans niet.' },
      ],
    },
    { type: 'title', text: 'Verbruiksartikelen en nabewerkings-overhead', level: 2 },
    {
      type: 'paragraph',
      html: 'Verbruiksartikelen zijn directe materialen die tijdens het afwerken worden verbruikt. Ze kunnen schuurpapier, primer, plamuur, verf, resinwasvloeistof, IPA, handdoeken, nitrilhandschoenen, mesjes, afplaktape, beschermingsproppen, wegwerpbekers, filters, polijstmiddel en vernis omvatten. Sommige werkplaatsen verrekenen deze in de overhead, maar ze als direct veld berekenen is veiliger voor opdrachten met ongewone afwerkingsstandaarden, groot oppervlak, agressief schuren of oplosmiddelintensieve werkprocessen.',
    },
    {
      type: 'paragraph',
      html: 'Een apart verbruiksartikelenveld helpt ook bij <strong>overhead calculator voor nabewerking</strong>-werkstromen. Overhead is normaal gezien ruimer dan verbruiksartikelen: huur, afzuiging, verlichting, luchtfiltratie, compressorgebruik, onderhoud, software, toezicht en administratieve tijd. Deze calculator doet geen poging om elke overheadpost toe te wijzen. In plaats daarvan geeft het een nette directe-kosten subtotaal die in een groter offertemodel kan worden gevoed waar overhead en marge daarna worden toegepast.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Arbeidstarief', definition: 'Het uurloon of verkooptarief dat aan actieve handmatige afwerkingstijd wordt toegewezen.' },
        { term: 'Verbruiksartikelen', definition: 'Directe materialen die tijdens nabewerking worden verbruikt, zoals schuurmiddelen, coatings, handschoenen en reinigingsvloeistoffen.' },
        { term: 'Conversiefactor', definition: 'Een globale vermenigvuldiger die op geldelijke inputs wordt toegepast voor valutaschaling of offerteaanpassingen.' },
        { term: 'Directe kosten', definition: 'Een kost die aan het specifieke onderdeel of de specifieke batch die wordt afgewerkt kan worden gekoppeld.' },
        { term: 'Overhead', definition: 'Bedrijfskosten die de productie ondersteunen maar niet in een eenvoudig meetbare hoeveelheid door één onderdeel worden verbruikt.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Waar de marge thuishoort',
      html: '<p>Dit hulpmiddel berekent de afwerkingskosten vóór winst. Pas de marge toe nadat materiaal, machinetijd, nabewerking, risico en overhead zijn samengesteld, anders kunnen arbeidsintensieve opdrachten te laag worden geprijsd.</p>',
    },
    { type: 'title', text: 'Valutaselectie en conversiefactor', level: 2 },
    {
      type: 'paragraph',
      html: 'Valutaselectie verandert het symbool en kan bestaande geldelijke invoer converteren via praktische referentiefactoren. De berekening zelf is valutaneutraal: een tarief van 30 per uur en 10 aan verbruiksartikelen produceren dezelfde structuur ongeacht of het symbool euro, dollar, pond, yen of een andere ondersteunde valuta is. Dit is handig voor internationale offertes omdat de rekenkunde stabiel blijft terwijl de presentatie bij de klant- of werkplaatslocatie past.',
    },
    {
      type: 'paragraph',
      html: 'De conversiefactor bestaat voor gevallen waar de gebruiker geen automatische wisselkoersomrekening wil of een aangepaste commerciële vermenigvuldiger nodig heeft. Een factor van <code>1</code> betekent dat het uurtarief en de verbruiksartikelen al zijn ingevoerd in de geselecteerde lokale valuta. Een factor van <code>1,15</code> verhoogt beide geldelijke inputs met vijftien procent. Een factor van <code>0,92</code> verlaagt ze met acht procent. Omdat de factor geld en geen minuten beïnvloedt, blijft de visuele verdeling proportioneel aan de gecorrigeerde kosten.',
    },
    {
      type: 'summary',
      title: 'Valutaregels',
      items: [
        'Gebruik de kiezer voor symbolen en handige schaling tussen gangbare valuta\'s.',
        'Houd de conversiefactor op 1 als de invoer al lokaal is.',
        'Gebruik een aangepaste factor voor regionale prijslijsten, onderaannemersmarge of tijdelijke commerciële aanpassingen.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wisselkoersen zijn geen boekhoudbeleid',
      badge: 'Prijsopmerking',
      html: '<p>Gebruik voor officiële facturen, belastingen of boekhoudkundige rapporten de wisselkoers en afrondingspolitiek die uw bedrijf vereist. Deze calculator is bedoeld voor het schatten van productiekosten en het opstellen van offertes.</p>',
    },
    { type: 'title', text: 'De visuele verdeling gebruiken om winst te verbeteren', level: 2 },
    {
      type: 'paragraph',
      html: 'De proportionele balk is meer dan decoratie. Het toont welke afwerkingsfase geld kost. Als schuren domineert, kan het veranderen van printoriëntatie, laagdikte, supportinterface of materiaal de handmatige tijd verminderen. Als schilderen domineert, heeft de offerte misschien een apart afwerkingsniveau nodig. Als verbruiksartikelen domineren, kan bulkinkoop of een ander coatingsproces meer impact hebben dan arbeidsefficiëntie. Als supportverwijdering domineert, kan het herontwerpen van supportcontactpunten de meest waardevolle ingreep zijn.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Als supportverwijdering het grootste deel is, controleer het supporttype, de dichtheid, de contactafstand Z en de oriëntatie.',
        'Als schuren het grootste is, controleer laagdikte, naatplaatsing, vulstrategie en of de offerteafwerking te hoog is voor de prijs.',
        'Als schilderen het grootste is, splits eenkleurige, afgewerkte en premium afwerkingen op in aparte offerteniveaus.',
        'Als verbruiksartikelen het grootste zijn, controleer of coatings, resinwas, schuurmiddelen en afplakmateriaal worden verspild of onvoldoende doorberekend.',
      ],
    },
    {
      type: 'table',
      headers: ['Dominante kost', 'Waarschijnlijke oorzaak', 'Prijsreactie'],
      rows: [
        ['Supportverwijdering', 'Moeilijke toegang, dichte supports, kwetsbare details', 'Voeg een toeslag voor supportcomplexiteit toe of herzie de oriëntatie.'],
        ['Schuren', 'Hoge cosmetische eis, zichtbare lagen, supportspleten', 'Maak afwerkingsklassen en reken schilderklare voorbereiding door.'],
        ['Schilderen', 'Afplakken, meerdere kleuren, cabinereiniging', 'Offerteer schilderen als aparte serviceregel.'],
        ['Verbruiksartikelen', 'Coatings, schuurmiddelen, solventen, beschermende benodigdheden', 'Gebruik directe verbruiksartikelentracering of minimale materiaalkosten.'],
      ],
    },
    {
      type: 'summary',
      title: 'Offrageerwerkstroom',
      items: [
        'Meet actieve handmatige minuten per fase.',
        'Gebruik een volledig geladen afwerkingsuurtarief.',
        'Voeg directe verbruiksartikelen apart toe.',
        'Kopieer het berekende resultaat in de offerte en pas daarna overhead en marge toe in het volledige prijsmodel.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
