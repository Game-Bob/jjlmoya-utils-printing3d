import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'multi-materiaal-purge-calculator';
const title = 'Multi Material Purge Calculator: Analyseer & Optimaliseer Filamentafval';
const description = 'Schat het AMS- en MMU-purgetorenvolume, de verspilde filamentmassa en de overgangskosten met een pigmentintensiteitsmatrix voor kleurwisselingen.';

const faqData = [
  {
    question: 'Waarom krijgt zwart naar wit een hogere purgefactor toegewezen dan wit naar zwart?',
    answer: 'Donkere pigmenten vervuilen lichte polymeren zichtbaarder dan lichte pigmenten donkere polymeren vervuilen. De calculator modelleert daarom zwart naar wit als een overgang met een hoge factor en wit naar zwart als een overgang met een lagere factor.',
  },
  {
    question: 'Vervangt deze calculator de spoelvolumes van de slicer?',
    answer: 'Nee. Het is een diagnostische planningsmodule die de purge-economie schat vóór het slicen of budgetteren. Gebruik het slicer-kalibratieresultaat voor de uiteindelijke machinespecifieke afstemming.',
  },
  {
    question: 'Welke purgeverhouding moet ik als te hoog beschouwen?',
    answer: 'De tool markeert een hoge afvalverhouding boven de 30 procent van het totale geëxtrudeerde volume. Die drempel betekent meestal dat de kleurvolgorde, groepering, purge-to-infill of modelsplitsing moet worden herzien.',
  },
  {
    question: 'Kan ik het gebruiken voor materiaalwisselingen, niet alleen voor kleurwisselingen?',
    answer: 'De huidige matrix richt zich op pigmentverontreiniging. Gemengde polymeren, oplosbare ondersteuningen, schurende materialen en temperatuurwisselingen kunnen extra purge vereisen bovenop de kleurfactor.',
  },
];

const howToData = [
  {
    name: 'Voer object- en basispurgevolume in',
    text: 'Typ het werkelijke modelvolume en het standaard purgevolume dat uw AMS- of MMU-profiel gebruikt voor één normale filamentwisseling.',
  },
  {
    name: 'Kies begin- en eindkleuren',
    text: 'Gebruik de ronde kleurkiezers voor elke overgang. De overgangsfactor wordt direct bijgewerkt vanuit de pigmentmatrix.',
  },
  {
    name: 'Stel overgangsaantallen in',
    text: 'Voer in hoe vaak elk kleurpaar in de taak voorkomt. Herhaalde donker-naar-licht-wisselingen domineren de totale purge-schatting.',
  },
  {
    name: 'Bekijk verhouding, massa en kosten',
    text: 'Gebruik de object- versus purgebalk, de afvalmassa en het kostenresultaat om te beslissen of de print opnieuw moet worden georganiseerd vóór productie.',
  },
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperiaal',
    currencyLabel: 'Valuta',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Kostenmodel',
    objectVolumeLabel: 'Objectvolume',
    basePurgeLabel: 'Basis purge per wissel',
    densityLabel: 'Dichtheid g/cm3',
    priceLabel: 'Prijs per kg',
    transitionsTitle: 'Pigmentovergangsmatrix',
    fromLabel: 'Van',
    toLabel: 'Naar',
    colorLabels: {
      white: 'Wit',
      natural: 'Natuur',
      yellow: 'Geel',
      red: 'Rood',
      blue: 'Blauw',
      green: 'Groen',
      gray: 'Grijs',
      black: 'Zwart',
    },
    countLabel: 'Wisselingen',
    objectLabel: 'Werkelijk objectplastic',
    purgeTowerLabel: 'Purgetoren afval',
    totalWasteLabel: 'Purgevolume',
    wasteCostLabel: 'Afvalkosten',
    purgeRatioLabel: 'Purgeverhouding',
    massLabel: 'Afvalmassa',
    loadbarAriaLabel: 'Objectvolume vergeleken met purgetorenvolume',
    alertTitle: 'Hoge afvalverhouding gedetecteerd',
    alertText: 'Hoge afvalverhouding gedetecteerd: Groeperen van vergelijkbare kleuren aanbevolen.',
    efficientText: 'Purgeverhouding binnen de planningslimiet.',
    factorGuideTitle: 'Purgefactor-gids per overgang',
    transitionLabel: 'Overgang',
    factorLabel: 'Factor',
    volumeLabel: 'Purgevolume',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'Hoe AMS- en MMU-purgeafval een echte productiekost wordt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een multi-material print verbruikt niet alleen filament in het zichtbare object. Elke kleur- of materiaalwisseling laat gesmolten polymeer achter in de hotend, smeltzone, nozzle en soms aan het begin van het volgende extrusiepad. De printer moet voldoende nieuw filament door dat pad duwen voordat het volgende zichtbare oppervlak schoon is. In AMS-, MMU-, toolhead-wisselaar- en palette-workflows wordt die reinigingsextrusie vaak een purgetoren, purgeblok, purgelijn of afvalkanaaldepot. Het economische kernpunt is eenvoudig: de toren kan worden geprijsd als elk ander onderdeel, omdat deze volume, massa en materiaalkosten heeft.',
    },
    {
      type: 'paragraph',
      html: 'Generieke calculators vermenigvuldigen het aantal wisselingen vaak met één vast spoelvolume. Dat is nuttig voor een globale begroting, maar het mist de duurste faalmodus in kleurenprinten: <strong>asymmetrische contaminatie</strong>. Wit naar zwart vereist niet dezelfde reiniging als zwart naar wit. Een kleine hoeveelheid zwart pigment in wit PLA, PETG of ABS is snel zichtbaar, terwijl een kleine hoeveelheid wit in zwart meestal wordt verborgen door de donkere pigmentlading. Deze tool gebruikt een overgangsmatrix zodat elke richting zijn eigen vermenigvuldiger heeft.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'Hoge purgeverhouding-alertdrempel gebruikt door het dashboard' },
        { value: '1.6x', label: 'Standaard zwart-naar-wit overgangsvermenigvuldiger' },
        { value: '0.8x', label: 'Standaard wit-naar-zwart overgangsvermenigvuldiger' },
        { value: '0 knoppen', label: 'Alle berekeningen worden direct bijgewerkt tijdens het bewerken' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Het dure symptoom om in de gaten te houden',
      badge: 'Afvalaudit',
      html: 'Wanneer de purgetoren meer dan 30 procent van het gecombineerde object- en purgevolume overschrijdt, is de taak niet langer slechts een kleurrijke print. Het is een materiaalomzettingsproces waarbij een groot deel van het aangekochte filament niet-productieve output wordt. Dat is het punt waar kleurvolgorde, modelsplitsing, purge-to-infill en batchverwerking aandacht verdienen voordat de machine start.',
    },
    {
      type: 'title',
      text: 'De overgangsmatrix achter de calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het kernmodel is <code>Vtotaal = som(Vbasis x Ka,b)</code>. <code>Vbasis</code> is het basispurgevolume voor één standaard filamentwisseling. <code>Ka,b</code> is de factor voor het gaan van kleur <code>a</code> naar kleur <code>b</code>. Een factor onder 1 betekent dat de overgang meestal gemakkelijker is dan de basislijn. Een factor boven 1 betekent dat de volgende kleur gevoelig is voor verontreiniging of dat de vorige kleur een sterke pigmentoverdracht heeft. Het resultaat is een purgevolume in kubieke centimeters, dat vervolgens wordt omgezet in massa met behulp van filamentdichtheid.',
    },
    {
      type: 'paragraph',
      html: 'De kostenformule is <code>Cafval = ((Vtotaal x dichtheid) / 1000) x prijsKg</code>. Als de purgetoren 80 cm3 PLA gebruikt bij 1,24 g/cm3, verbruikt deze 99,2 g filament. Bij €24 per kilogram kost die toren €2,38 aan materiaal voordat elektriciteit, machinetijd, mislukte kleurovergangen of nabewerking worden meegerekend. Voor een hobbyprint is dat misschien acceptabel. Voor herhaalde productie is het een kostenpost.',
    },
    {
      type: 'table',
      headers: ['Overgang', 'Standaardfactor', 'Waarom deze weging'],
      rows: [
        ['Wit naar zwart', '0,80x', 'Zwart verbergt kleine lichte resten, dus de tolerantie voor zichtbare verontreiniging is hoger.'],
        ['Zwart naar wit', '1,60x', 'Donkere resten in wit zijn direct zichtbaar en vereisen meestal een langere spoeling.'],
        ['Natuur naar wit', '1,15x', 'Doorzichtig of natuurlijk materiaal kan dekkend wit verkleuren totdat het smeltpad schoner is.'],
        ['Geel naar wit', '1,35x', 'Gele pigmenten kunnen lichte oppervlakken verwarmen of verkleuren, hoewel minder ernstig dan zwart.'],
        ['Rood naar geel', '1,08x', 'Roodoverdracht verandert de tint sterk in gele en oranje-achtige kleuren.'],
        ['Grijs naar zwart', '0,72x', 'Grijze resten worden meestal verborgen door zwart pigment, dus de purge kan lager zijn.'],
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik uw slicer kalibratie als basisvolume',
      html: 'Voer eerst de spoelkalibratie van de leverancier of community voor uw printer uit en voer dat resultaat vervolgens in als het basispurgevolume. De matrix moet een bekende basislijn schalen, niet de machinespecifieke afstemming vervangen voor nozzlediameter, hotendvolume, filamentpadlengte en slicergedrag.',
    },
    {
      type: 'title',
      text: 'Waarom polymeeropaciteit het benodigde purgevolume verandert',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opaciteit bepaalt hoe zichtbaar verontreiniging van de vorige kleur is in het volgende materiaal. Dekkend wit is veeleisend omdat het licht sterk reflecteert en donkere deeltjes of strepen nabij het oppervlak laat zien. Natuurlijke en doorzichtige filaments gedragen zich anders: ze verbergen misschien minder massa, maar laten tint doorschijnen door de diepte, vooral in dunne wanden of tegenlichtonderdelen. Verzadigde kleuren zoals rood en blauw kunnen ook volgende lichte kleuren verkleuren, omdat de pigmentconcentratie die nodig is voor sterke chroma zichtbaar blijft bij lage residuniveaus.',
    },
    {
      type: 'paragraph',
      html: 'De printer heeft geen kennis van kleurwetenschap. Het extrudeert alleen een lengte of volume. De gebruiker moet beslissen of het zichtbare resultaat cosmetische zuiverheid, functionele scheiding of alleen een grove kleurverandering nodig heeft. Een speeltje, logo, bewegwijzering, lithofaanlijst of klantgerichte behuizing kan agressieve purge vereisen. Een verborgen interne ondersteuning, conceptprototype of achterkant van een mal kan meer overdracht tolereren. De calculator stelt die afweging inzichtelijk door de purgetoren te laten groeien wanneer de overgangsrichting moeilijker is.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lichte bestemming',
          description: 'Wit, natuur, geel en lichtgrijs zijn gevoelige bestemmingen. Donkere of verzadigde vorige kleuren hebben een langere purge nodig voordat deze kleuren er schoon uitzien.',
          points: ['Gebruik hogere factoren', 'Groepeer lichte secties samen', 'Vermijd herhaaldelijk terugkeren van zwart naar wit'],
        },
        {
          title: 'Donkere bestemming',
          description: 'Zwart, marineblauw, donkergroen en donkergrijs kunnen resten van lichtere kleuren verbergen. Deze overgangen kunnen vaak kleinere vermenigvuldigers gebruiken.',
          points: ['Lager zichtbaar risico', 'Goed doel na lichte kleuren', 'Nuttige eindkleur in een reeks'],
        },
        {
          title: 'Overgang met vergelijkbare tint',
          description: 'Bewegen tussen verwante kleuren kost meestal minder dan oversteken van donker naar licht. Rood naar oranje of grijs naar zwart is normaal gesproken gemakkelijker dan blauw naar geel.',
          points: ['Kleurvolgorde is belangrijk', 'Tintfamilies verminderen afval', 'Batch vergelijkbare objecten samen'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Basis purgevolume', definition: 'Het normale volume dat uw slicer of kalibratieprofiel extrudeert voor één gewone filamentwisseling vóór matrixschaling.' },
        { term: 'Overgangsfactor', definition: 'Een vermenigvuldiger toegewezen aan één richting van een kleurverandering, zoals zwart naar wit of wit naar zwart.' },
        { term: 'Purgeverhouding', definition: 'Purgevolume gedeeld door het totale geëxtrudeerde volume, inclusief zowel object als purgetoren.' },
        { term: 'Pigmentoverdracht', definition: 'Zichtbare rest van de vorige filamentkleur die achterblijft in de hotend en verschijnt in de volgende extrusie.' },
        { term: 'Purge-to-infill', definition: 'Een slicerstrategie die een deel van de reinigingsextrusie omleidt naar verborgen opvulling in plaats van een toren of afvalkanaal.' },
      ],
    },
    {
      type: 'title',
      text: 'Hoe AMS-filamentafval te verminderen zonder kleurkwaliteit te verliezen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De eerste optimalisatie is kleurvolgorde. Als een model kan worden gesplitst, in groepen geprint of zodanig gerangschikt dat donker-naar-licht-overgangen minder vaak voorkomen, kan de purgetoren dramatisch krimpen. Herhaalde zwart-naar-wit-wisselingen zijn duur omdat elke cyclus de printer vraagt een sterk pigment te verwijderen vóór een gevoelige bestemming. Als hetzelfde visuele ontwerp eenmaal als wit-naar-zwart kan worden geprint, of als afzonderlijke delen later worden geassembleerd, verandert het materiaalbudget onmiddellijk.',
    },
    {
      type: 'paragraph',
      html: 'De tweede optimalisatie is bestemmingskeuze. Wanneer meerdere kleuren optioneel zijn, kies dan een donkere eindkleur voor details die na lichte gebieden verschijnen. Zwarte tekst op een witte plaat is bijvoorbeeld meestal goedkoper dan witte tekst op een zwarte plaat, omdat de laatste de printer dwingt donkere resten te verwijderen vóór elk wit segment. Dit is niet alleen een esthetische beslissing; het verandert de fysieke hoeveelheid polymeer die door de hotend moet worden geduwd.',
    },
    {
      type: 'list',
      items: [
        'Groepeer vergelijkbare kleuren in het model of de printwachtrij, zodat verwante tinten overgangen delen.',
        'Gebruik purge-to-infill wanneer interne kleurverontreiniging acceptabel is en het onderdeel voldoende opvulvolume heeft.',
        'Verminder kleurwisselingen door badges, logo\'s, labels of decoratieve inzetstukken te splitsen in afzonderlijke geprinte onderdelen.',
        'Gebruik donkerdere kleuren na lichtere kleuren wanneer het ontwerp dit toelaat.',
        'Stem spoelvermenigvuldigers af met fysieke stalen, niet alleen met slicer-standaardwaarden.',
        'Begroot purgekosten apart voor klantoffertes, zodat decoratief meerkleurig werk niet wordt ondergeprijsd.',
      ],
    },
    {
      type: 'proscons',
      title: 'Afwegingen bij optimalisatie',
      items: [
        { pro: 'Lagere purgefactoren verminderen torenmassa en filamentkosten.', con: 'Te weinig purge kan strepen, verkleuring of onacceptabele klantgerichte oppervlakken veroorzaken.' },
        { pro: 'Modellen splitsen kan veel kleurwisselingen verwijderen.', con: 'Assemblage voegt arbeid, tolerantiebeheer, lijm, bevestigingsmiddelen of zichtbare naden toe.' },
        { pro: 'Purge-to-infill zet afval om in bruikbaar intern plastic.', con: 'Het werkt het beste wanneer het object voldoende verborgen volume heeft en verontreiniging structureel acceptabel is.' },
        { pro: 'Batches van vergelijkbare kleuren verbeteren de printfarm-economie.', con: 'Het kan dringende eenmalige opdrachten vertragen die een specifieke kleurvolgorde nodig hebben.' },
      ],
    },
    {
      type: 'title',
      text: 'Budgettering van multi-material prints voor klanten en printfarms',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een printofferte die alleen het uiteindelijke objectvolume prijst, is onjuist voor AMS- en MMU-taken. De klant koopt het productieproces en het proces omvat niet-productieve extrusie. Een kleine sleutelhanger met veel laag-voor-laag kleurwisselingen kan meer materiaal verspillen dan een grotere eenkleurige beugel. De calculator maakt dat zichtbaar door objectvolume en purgetorenvolume te vergelijken als twee concurrerende blokken in plaats van afval te verbergen in één enkel getal.',
    },
    {
      type: 'paragraph',
      html: 'Voor een farm is de purgeverhouding ook een planningssignaal. Taken met hoge purge bezetten de printer terwijl filament wordt omgezet in torenplastic, dus het economische verlies is niet alleen materiaal. De machinetijd die wordt besteed aan het wisselen van filament, knippen, laden, reinigen en drukopbouw is tijd die niet wordt besteed aan het produceren van verkoopbaar volume. Wanneer de purgeverhouding hoog is, overweeg dan of het item een meerkleurtoeslag moet krijgen, of kleuren moeten worden beperkt, of een geverfde, bedrukte-label of geassembleerde oplossing goedkoper is.',
    },
    {
      type: 'card',
      title: 'Offerte regel voor meerkleurig werk',
      html: 'Prijs het object en prijs vervolgens de purgetoren als een aparte afvalpost. Als de klant van twee kleuren naar vier kleuren gaat, of kleine geïsoleerde details op vele lagen toevoegt, werk de offerte dan bij omdat het aantal overgangen verandert, zelfs wanneer het zichtbare modelvolume nauwelijks beweegt.',
    },
    {
      type: 'table',
      headers: ['Purgeverhouding', 'Interpretatie', 'Aanbevolen actie'],
      rows: [
        ['Onder 15%', 'Efficiënte meerkleurige taak', 'Normale offerte-aannames zijn meestal acceptabel.'],
        ['15% tot 30%', 'Materiaalverlies is zichtbaar', 'Controleer overgangen en kijk of purge-to-infill helpt.'],
        ['Boven 30%', 'Hoge afvalverhouding', 'Groepeer kleuren, splits het model, verhoog de offerte of herontwerp de kleurindeling.'],
        ['Boven 50%', 'Toren domineert economie', 'Behandel de print als een speciale productietaak, niet als een routine objectprint.'],
      ],
    },
    {
      type: 'title',
      text: 'Het dashboard lezen van de resultaten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De twee horizontale blokken zijn opzettelijk streng. Groen is het werkelijke objectvolume. Het gestreepte purgeblok is materiaal dat niet het zichtbare product wordt. Als het gestreepte blok fysiek vergelijkbaar begint te worden met het objectblok, verdient de print nader onderzoek. Deze visuele verhouding is vaak overtuigender dan grammen of valuta, omdat het de gebruiker exact laat zien hoeveel plastic wordt toegewezen aan reiniging.',
    },
    {
      type: 'paragraph',
      html: 'Het massaresultaat komt van volume vermenigvuldigd met dichtheid. PLA is vaak ongeveer 1,24 g/cm3, PETG is gewoonlijk nabij 1,27 g/cm3, ABS is lager en gevulde filaments variëren sterk. Het prijsresultaat gebruikt de geselecteerde prijs per kilogram. Als u speciale zijde-PLA, koolstofvezelmengsels, oplosbare ondersteuning of technisch filament gebruikt, vervang dan de standaardprijs en -dichtheid. Hetzelfde purgevolume kan een heel verschillend economisch gewicht hebben, afhankelijk van het materiaal.',
    },
    {
      type: 'summary',
      title: 'Beslissingschecklist',
      items: [
        'Gebruik de gemeten slicer-purgekalibratie als basisvolume.',
        'Tel herhaalde overgangen, niet alleen het aantal kleuren dat in de AMS of MMU is geladen.',
        'Let eerst op zwart-naar-wit, verzadigd-naar-licht en doorzichtige bestemmingsovergangen.',
        'Behandel een purgeverhouding boven 30 procent als een herontwerp- of offertewaarschuwing.',
        'Gebruik het kostenresultaat voor materiaalbudgettering en de visuele balk voor snelle ontwerpbeoordeling.',
      ],
    },
    {
      type: 'message',
      title: 'Praktische bottom line',
      html: 'Een multi-material print is efficiënt wanneer kleurwisselingen zodanig zijn gerangschikt dat de purgetoren klein blijft ten opzichte van het object. Als de toren voorbij de waarschuwingslijn van 30 procent groeit, is de goedkoopste optimalisatie meestal geen nieuwe spoel of een sneller profiel; het is een betere kleurstrategie.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
