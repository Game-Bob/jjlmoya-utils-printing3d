import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'print-bed-traagheid-stabilisatie-berekenaar',
  title: 'Printbed Traagheidsstabilisatie Calculator',
  description: 'Schat hoe lang een verwarmd 3D-printerbed moet rusten nadat het het instelpunt heeft bereikt, op basis van plaatmateriaal, dikte, doeltemperatuur, verhogervermogen en bedgrootte.',
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    materialLabel: 'Bouwplaatmateriaal',
    borosilicateGlassLabel: 'Borosilicaatglas',
    peiSpringSteelLabel: 'PEI-veerstaal',
    aluminumLabel: 'Aluminium gereedschapsplaat',
    thicknessLabel: 'Plaatdikte',
    targetTemperatureLabel: 'Doelbedtemperatuur',
    heaterPowerLabel: 'Verhogervermogen',
    bedSizeLabel: 'Verwarmd oppervlak',
    presetsLabel: 'Voorinstellingen',
    enderPresetLabel: 'Glas 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Aluminium 350',
    recommendedDelayLabel: 'Startprintvertraging',
    delayMarkerLabel: 'Vertraging',
    warmupTimeLabel: 'Ideale opwarmtijd',
    plateMassLabel: 'Plaatmassa',
    energyStoredLabel: 'Opgeslagen warmte',
    conductionLagLabel: 'Vertraging door plaat',
    conductivityLabel: 'Warmtegeleiding',
    readinessLabel: 'Gereedheid',
    readinessQuick: 'korte weektijd',
    readinessBalanced: 'normale weektijd',
    readinessSlow: 'lange weektijd',
    controlsAriaLabel: 'Thermische traagheidsinvoer verwarmd bed',
    resultsAriaLabel: 'Stabilisatieresultaten verwarmd bed',
    copyButton: 'Kopieer bedvertraging',
    copiedButton: 'Gekopieerd',
    copiedSummaryTemplate: 'Bedstabilisatieschatting: wacht {delay} s ({minutes} min) na instelpunt; ideale opwarmtijd ongeveer {warmup} min, gereedheid {readiness}.',
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
    { type: 'title', text: 'Waarom een verwarmd bed stabilisatie nodig heeft nadat het het instelpunt heeft bereikt', level: 2 },
    {
      type: 'paragraph',
      html: 'Een printerdisplay geeft meestal de temperatuur weer die gemeten is bij de thermistor, niet de exacte temperatuur van het bovenste printoppervlak. Bij veel machines zit de thermistor onder de verhoger geplakt, ingebed in de beddrager of geplaatst weg van het gebied waar de eerste laag begint. De regelaar kan <strong>60 °C</strong> aangeven terwijl de bovenkant van een dikke glasplaat nog aan het bijkomen is. Die vertraging is thermische traagheid: de plaat slaat warmte op, verplaatst warmte door de dikte en verliest tegelijkertijd warmte aan de lucht.',
    },
    {
      type: 'paragraph',
      html: 'De eerste laag is ongewoon gevoelig voor deze vertraging omdat hechting afhangt van polymeerviscositeit, oppervlakte-energie en contactdruk. Een bed dat nog aan het opwarmen is aan het oppervlak kan hoeken doen loskomen, skirtlijnen er droog uit laten zien of Z-offset inconsistent laten lijken, zelfs wanneer mesh en spuitmondhoogte correct zijn. Wachten op een berekend warmteweekinterval nadat het bed het instelpunt heeft bereikt, is vaak beter herhaalbaar dan het instelpunt willekeurig te verhogen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK typische warmtegeleiding van borosilicaatglas' },
        { value: '16', label: 'W/mK geschatte warmtegeleiding van veerstaal' },
        { value: '205', label: 'W/mK geschatte warmtegeleiding van aluminium' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'De vertraging is een oppervlakteschatting, geen vervanging voor PID autotune',
      html: 'PID-regeling controleert hoe de verhoger de thermistor volgt. Thermische stabilisatie schat hoe lang het printoppervlak nodig heeft om dicht bij het thermistor-gestuurde instelpunt te komen. Een goed afgestelde PID-lus kan nog steeds een warmteweekvertraging nodig hebben wanneer de bouwplaat dik, slecht geleidend of losjes gekoppeld is aan de verhoger.',
    },
    { type: 'title', text: 'Materiaalkeuze domineert de thermische traagheid van het bed', level: 2 },
    {
      type: 'paragraph',
      html: 'De calculator behandelt materiaal als een strikte invoer omdat glas, PEI-veerstaal en aluminium geen uitwisselbare thermische systemen zijn. Borosilicaatglas heeft een lage thermische geleidbaarheid en een aanzienlijke warmtecapaciteit, waardoor het bovenoppervlak merkbaar kan achterlopen op de verhogerkant. Veerstaal is dunner en geleidt beter dan glas, dus het wordt meestal sneller gelijkmatig, ook al is staal dicht. Aluminium geleidt warmte extreem goed, daarom worden gegoten of bewerkte aluminium bedden geprefereerd op grotere printers, maar een dikke aluminium plaat kan nog steeds veel energie opslaan.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Borosilicaatglas',
          description: 'Lage geleidbaarheid en matige warmtecapaciteit veroorzaken de langste oppervlaktevertraging, vooral bij 3-5 mm dikte.',
          points: ['Goede vlakheid bij goede ondersteuning', 'Langzame oppervlakterespons', 'Gevoelig voor clips en lokaal verhogercontact'],
        },
        {
          title: 'PEI veerstaal',
          description: 'Dunne stalen platen reageren sneller en hebben meestal minder rusttijd nodig, maar magnetische bases en lijmlagen voegen contactweerstand toe.',
          highlight: true,
          points: ['Snelle praktische weektijd', 'Makkelijk oppervlaktewissel', 'Magneet- en lijmstapeling doet er nog toe'],
        },
        {
          title: 'Aluminium plaat',
          description: 'Hoge geleidbaarheid verspreidt warmte snel over het bed; dikte en verhogervermogen worden de belangrijkste vertragingsfactoren.',
          points: ['Uitstekende laterale warmteverspreiding', 'Hoge opgeslagen energie op grote bedden', 'Het beste bij gelijkmatige verhogerbedekking'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Printoppervlak', 'Thermisch gedrag', 'Typisch stabilisatieprobleem', 'Praktische eerste-laag respons'],
      rows: [
        ['4 mm borosilicaatglas', 'Langzame geleiding door de dikte', 'Oppervlak loopt achter op thermistor', 'Langer wachten voor sonderen of printen'],
        ['0,4-0,6 mm PEI-veerstaal', 'Dunne geleidende plaat', 'Magneet/lijm-interface bepaalt vertraging', 'Korte warmteweektijd is meestal voldoende'],
        ['5-8 mm aluminium', 'Snelle geleiding maar veel opgeslagen warmte', 'Grote massa heeft tijd nodig voor evenwicht', 'Gebruik een constante weektijd op grote bedden'],
        ['Composietstapelingen', 'Laaginterfaces domineren', 'Luchtspleten en lijmen voegen thermische weerstand toe', 'Meet indien mogelijk de werkelijke oppervlaktetemperatuur'],
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik geen glasvertraging voor veerstaal',
      html: 'Een vertraging die correct is voor een 4 mm borosilicaatplaat kan overdreven zijn voor een 0,5 mm PEI-veerstalen plaat. Omgekeerd kan een PEI-plaatvertraging te kort zijn voor glas en de eerste laag eruit laten zien als een Z-offset probleem.',
    },
    { type: 'title', text: 'Hoe dikte de opwarmtijd en oppervlaktevertraging verandert', level: 2 },
    {
      type: 'paragraph',
      html: 'Dikte beïnvloedt twee verschillende delen van het proces. Ten eerste heeft een dikkere plaat meer massa, dus heeft het meer energie nodig om de gemiddelde temperatuur te verhogen. Ten tweede moet warmte door een langer pad diffunderen voordat het oppervlak de verhogerkant volgt. De calculator schat zowel de ideale opwarmenergie als een diffusievertraging door de plaat, en combineert ze vervolgens in een aanbevolen vertraging nadat de printer meldt dat het bed het instelpunt heeft bereikt.',
    },
    {
      type: 'paragraph',
      html: 'De relatie is niet lineair voor oppervlaktevertraging. Diffusietijd stijgt met het kwadraat van de dikte, daarom kan een kleine verandering van 3 mm naar 4 mm glas meer uitmaken dan verwacht. Een zeer dunne stalen plaat kan snel gelijkmatig worden, maar de magnetische basis, lijmfilm, PEI-coating en ingesloten lucht kunnen de werkelijke overdracht nog steeds vertragen. Op aluminium bedden verspreidt de plaat zelf warmte snel, maar het bed kan globaal onstabiel blijven als de verhogerbedekking ongelijkmatig is of de plaat groot is.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Thermische traagheid', definition: 'De neiging van een plaat om temperatuurveranderingen te weerstaan omdat het massa en warmtecapaciteit heeft.' },
        { term: 'Temperatuurvereffeningscoëfficiënt', definition: 'Een materiaaleigenschap die geleidbaarheid, dichtheid en warmtecapaciteit combineert om te beschrijven hoe snel temperatuurveranderingen erdoorheen bewegen.' },
        { term: 'Warmteweken', definition: 'Een opzettelijke wachttijd na het bereiken van het instelpunt zodat het printoppervlak, de verhoger, drager en bedstapeling een stabielere toestand benaderen.' },
        { term: 'Contactweerstand', definition: 'Extra thermische weerstand veroorzaakt door onvolmaakt contact, lijmlagen, magneten, clips, luchtspleten of vervormde oppervlakken.' },
        { term: 'Instelpuntoverschrijding', definition: 'Een regelgebeurtenis waarbij de thermistortemperatuur boven het doel stijgt voordat het stabiliseert, vaak niet gerelateerd aan de oppervlaktetemperatuur.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Vuistregels voor dikte',
      items: [
        'Dunne PEI-veerstalen platen stabiliseren meestal snel zodra de verhoger en magnetische basis warm zijn.',
        'Glasplaten boven 3 mm verdienen een echte vertraging voordat eerste-laag bewegingen beginnen.',
        'Grote aluminium platen kunnen warmteweken nodig hebben vanwege de totale massa, zelfs wanneer de geleiding uitstekend is.',
        'Luchtspleten onder verwijderbare oppervlakken kunnen de berekening domineren; reinig contactvlakken en plaats de plaat consistent.',
      ],
    },
    { type: 'title', text: 'Verhogervermogen, bedgrootte en opgeslagen warmte', level: 2 },
    {
      type: 'paragraph',
      html: 'Verhogervermogen bepaalt hoe snel energie de bedstapeling kan binnendringen. Een 220 W verhoger onder een 235 mm glasbed heeft een heel andere vermogensdichtheid dan een 600 W siliconenverhoger onder een 300 mm aluminium plaat. De calculator gebruikt vermogen, doeltemperatuur, bedoppervlak en plaatmassa om de ideale opwarmtijd te schatten. Het past vervolgens een stabilisatiecomponent toe omdat het oppervlak meestal blijft veranderen nadat het thermistor-gestuurde systeem voor het eerst het doel heeft bereikt.',
    },
    {
      type: 'paragraph',
      html: 'Vermogen is geen remedie voor slechte warmteverdeling. Een krachtige verhoger kan de thermistor snel laten stijgen terwijl randen, clips of niet-ondersteunde zones achterblijven. Grote printers moeten rekening houden met verhogerbedekking, isolatie, bedmontage, kamertemperatuur en of sonderen onmiddellijk na de instelpuntgebeurtenis begint. Voor ABS, ASA, nylon en andere warmere materialen zijn een stabiel bed en kamer vaak belangrijker dan simpelweg een hoge numerieke bedtemperatuur te bereiken.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke thermische oorzaak', 'Aanpassing om te proberen'],
      rows: [
        ['Eerste skirtlijnen zijn dof of hechten nauwelijks', 'Oppervlak is nog koeler dan thermistor', 'Verhoog stabilisatievertraging voor eerste laag'],
        ['Midden hecht maar hoeken laten los', 'Ongelijkmatige bedoppervlaktetemperatuur of randverliezen', 'Voeg isolatie toe, controleer verhogerbedekking, wacht langer'],
        ['Sondeermesh verandert tussen koude en warme runs', 'Bedstapeling is nog aan het uitzetten of ontspannen', 'Warmteweken voor sonderen, niet alleen voor printen'],
        ['PID-grafiek stabiel maar hechting varieert', 'Regelaar is stabiel bij sensor, niet bij printoppervlak', 'Gebruik een oppervlaktevertraging en verifieer met contactthermometer'],
      ],
    },
    {
      type: 'card',
      title: 'Waarom de uitvoer een vertraging na instelpunt is',
      html: 'De printer handelt al het opwarmen naar de doeltemperatuur. Deze calculator beantwoordt een smallere eerste-laag vraag: zodra het display zegt dat het bed klaar is, hoeveel extra seconden moet het oppervlak rusten voordat de extrusie begint?',
    },
    { type: 'title', text: 'PID-autotune versus echte bedoppervlakstabilisatie', level: 2 },
    {
      type: 'paragraph',
      html: 'Bed-PID-autotune is waardevol omdat het oscillatie bij de gemeten sensor vermindert. Het kan de fysica van een dikke of slecht geleidende plaat niet wegnemen. Een glasoppervlak kan nog achterlopen terwijl de onderkantsensor er stabiel uitziet. Een veerstalen plaat kan snel stabiel lijken, maar een koude magnetische basis kan er nog steeds warmte aan onttrekken. De meest herhaalbare workflow is om de regelaar af te stellen, een verstandige bedvertraging te gebruiken en pas met eerste-laag kalibratie te beginnen nadat de bedstapeling thermisch herhaalbaar is.',
    },
    {
      type: 'proscons',
      title: 'Onmiddellijk beginnen versus wachten op stabilisatie',
      items: [
        { pro: 'Onmiddellijk beginnen verkort de totale printtijd.', con: 'De eerste laag wordt mogelijk geprint op een oppervlak onder de beoogde temperatuur.' },
        { pro: 'Een berekende vertraging verbetert de herhaalbaarheid tussen prints.', con: 'Het voegt stille tijd toe, vooral op glas en grote aluminium bedden.' },
        { pro: 'Warmteweken voor sonderen kan mesh-drift verminderen.', con: 'Zeer lange weektijden kunnen energie verspillen als het gekozen materiaal ze niet nodig heeft.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Verberg thermische vertraging niet met overmatig indrukken',
      html: 'Als de eerste laag alleen hecht bij agressief lage Z-offset, is het bedoppervlak mogelijk koeler dan verwacht. Overmatig indrukken kan het thermische probleem maskeren terwijl het olifantenvoet, spuitmondschrapen en ruwe oppervlaktetextuur veroorzaakt.',
    },
    {
      type: 'message',
      title: 'Beste kalibratievolgorde',
      html: 'Verwarm het bed, wacht de berekende vertraging, voer mesh-sonderen uit (als uw printer heet sondert), stel dan de eerste-laag hoogte in. Het kalibreren van Z-offset op een onstabiele bedstapeling laat de volgende print inconsistent aanvoelen, zelfs wanneer geen mechanische instelling is veranderd.',
    },
    { type: 'title', text: 'Hoe de stabilisatietijd in start G-code te gebruiken', level: 2 },
    {
      type: 'paragraph',
      html: 'De aanbevolen vertraging kan handmatig worden gebruikt of in de start G-code worden ingevoegd. Een eenvoudige workflow is om het bed te verwarmen met <code>M190</code>, het berekende aantal seconden te wachten met een wachtcommando, en dan verder te gaan met sonderen, spuitmondverwarming, purgen en printen. Sommige gebruikers verwarmen liever eerst het bed, beginnen met kamerverwarming of spuitmondvoorverwarming tijdens het weken, en sonderen pas nadat het bed is gestopt met driften.',
    },
    {
      type: 'list',
      items: [
        'Gebruik dezelfde vertraging bij het vergelijken van filamenten zodat hechtingstests eerlijk zijn.',
        'Pas langere vertragingen toe voor glas, hoge bedtemperaturen, grote platen of koude kamers.',
        'Pas kortere vertragingen toe voor dunne veerstalen platen wanneer de magnetische basis al warm is.',
        'Sondeer na warmteweken als uw mesh verandert met temperatuur.',
        'Herbereken na het wijzigen van bouwplaatmateriaal, dikte, verhogervermogen of bedgrootte.',
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik de eerste print van de dag als referentiegeval',
      html: 'Een tweede print die onmiddellijk na een voltooide taak begint, start met een warme bedstapeling en heeft mogelijk minder wachttijd nodig. Beoordeel voor kalibratie de vertraging vanaf een koude printer, omdat die toestand het meest waarschijnlijk thermische vertraging blootlegt.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Een goede vertraging maakt eerste laag afstelling saai',
      html: 'Wanneer de warmteweektijd goed is, worden skirtvorm, lijn-glans, hoekhechting en mesh-compensatie beter herhaalbaar van print tot print. U zou niet elke keer de Z-offset moeten moeten najagen wanneer de machine koud start.',
    },
    { type: 'title', text: 'Meten en verbeteren van echte bedstabilisatie', level: 2 },
    {
      type: 'paragraph',
      html: 'De calculator is bewust praktisch, maar de beste validatie is een oppervlaktemeting. Een contactthermokoppel op het printoppervlak, een dunne sonde onder een offersheet, of een gekalibreerde infraroodthermometer met bekende emissiviteit kan onthullen hoe lang het oppervlak nodig heeft om te stabiliseren. Infraroodmetingen op glas, PEI en glanzend metaal kunnen misleidend zijn, dus gebruik consistente meetpunten en vermijd het vergelijken van verschillende oppervlakteafwerkingen alsof ze dezelfde emissiviteit hebben.',
    },
    {
      type: 'paragraph',
      html: 'Thermische prestaties kunnen vaak worden verbeterd zonder firmwarewijzigingen. Het isoleren van de onderkant vermindert warmteverlies en verkort het opwarmen. Het reinigen van de magnetische sheet en flexibele plaat verbetert het contact. Het vervangen van zwakke clips, het vlakken van vervormde platen en het vermijden van gedeeltelijk verhogercontact verminderen ongelijke temperatuurvelden. Gesloten printers profiteren van een warmere kamer, maar kamerwarmte verandert ook riemen, portaalonderdelen en sondeergedrag, dus thermische routines moeten herhaalbaar zijn in plaats van geïmproviseerd.',
    },
    {
      type: 'table',
      headers: ['Upgrade of gewoonte', 'Effect op stabilisatie', 'Voorzichtigheid'],
      rows: [
        ['Onderzijde isolatie', 'Minder warmteverlies en sneller evenwicht', 'Houd bedrading en lijmen geschikt voor bedtemperatuur'],
        ['Betere verhogerbedekking', 'Gelijkmatigere oppervlaktetemperatuur', 'Vermijd bellen en slechte siliconenverhoger hechting'],
        ['Consistente plaatsing verwijderbare plaat', 'Lagere contactweerstand variatie', 'Stof of filamentkruimels kunnen lokale koude plekken creëren'],
        ['Hete mesh-sonderen na weektijd', 'Mesh weerspiegelt uitgezette bedvorm', 'Sondeerbevestiging en gereedschapskop moeten ook thermisch stabiel zijn'],
      ],
    },
    {
      type: 'summary',
      title: 'Praktische stabilisatiechecklist',
      items: [
        'Selecteer het werkelijke plaatmateriaal; glas, staal en aluminium vereisen verschillende vertragingen.',
        'Voer dikte en verhogervermogen in in plaats van te vertrouwen op printermodelnamen.',
        'Gebruik de berekende vertraging nadat het bed instelpunt meldt, vooral vóór eerste-laag kalibratie.',
        'Meet het oppervlak als hechtingsproblemen aanhouden ondanks een stabiele PID-grafiek.',
        'Controleer de vertraging opnieuw na het wijzigen van bouwplaten, magneten, isolatie, verhogers of bedgrootte.',
      ],
    },
  ],
  faq: [
    {
      question: 'Waarom wachten nadat het bed de doeltemperatuur heeft bereikt?',
      answer: 'De thermistor kan het instelpunt bereiken voordat het bovenste printoppervlak volledig is opgewarmd. Door te wachten kunnen de plaat, coating, magnetische basis en verhogerstapeling een stabielere temperatuur benaderen.',
    },
    {
      question: 'Heeft glas meer stabilisatietijd nodig dan PEI-veerstalen?',
      answer: 'Meestal ja. Borosilicaatglas heeft een veel lagere thermische geleidbaarheid en is vaak dikker, waardoor het oppervlak meer achterloopt dan een dunne PEI-gecoate veerstalen plaat.',
    },
    {
      question: 'Is dit hetzelfde als PID-autotune?',
      answer: 'Nee. PID-autotune regelt het verhoger gedrag bij de sensor. Deze calculator schat hoe lang het echte printoppervlak moet rusten nadat het sensor-gestuurde bed het instelpunt heeft bereikt.',
    },
    {
      question: 'Moet ik sonderen voor of na de warmteweektijd?',
      answer: 'Als uw mesh verandert wanneer het bed opwarmt, sondeer dan nadat het bed is gestabiliseerd. Dat maakt de mesh dichter bij de vorm die tijdens de eerste laag wordt gebruikt.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Kies bouwplaatmateriaal', text: 'Selecteer borosilicaatglas, PEI-veerstaal of aluminium zodat de berekening de juiste geleidbaarheid en warmtecapaciteit gebruikt.' },
    { name: 'Voer de fysieke bedstapeling in', text: 'Voeg plaatdikte, verwarmd oppervlak, doeltemperatuur en verhogervermogen toe.' },
    { name: 'Lees de aanbevolen vertraging', text: 'Gebruik de startprintvertraging nadat de printer meldt dat het bed het instelpunt heeft bereikt.' },
    { name: 'Pas het consistent toe', text: 'Gebruik dezelfde warmteweekvertraging voor sonderen of eerste-laag kalibratie voor herhaalbare resultaten.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Printbed Traagheidsstabilisatie Calculator',
      description: 'Schat de stabilisatievertraging van het oppervlak van een verwarmd 3D-printerbed op basis van plaatmateriaal, dikte, temperatuur, verhogervermogen en bedgrootte.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Waarom wachten nadat het bed de doeltemperatuur heeft bereikt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'De thermistor kan het instelpunt bereiken voordat het bovenste printoppervlak volledig is opgewarmd, dus een warmteweekvertraging verbetert de herhaalbaarheid van de eerste laag.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe de stabilisatievertraging van een 3D-printerbed te schatten',
      step: [
        { '@type': 'HowToStep', text: 'Selecteer het bouwplaatmateriaal.' },
        { '@type': 'HowToStep', text: 'Voer dikte, doeltemperatuur, verhogervermogen en bedgrootte in.' },
        { '@type': 'HowToStep', text: 'Wacht de aanbevolen vertraging nadat het bed het instelpunt heeft bereikt.' },
        { '@type': 'HowToStep', text: 'Sondeer of print nadat de bedstapeling is gestabiliseerd.' },
      ],
    },
  ],
};
