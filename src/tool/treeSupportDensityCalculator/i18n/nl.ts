import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'boomondersteuning-dichtheid-calculator',
  title: 'Boomondersteuning Dichtheid Calculator',
  description: 'Schat de kroondiameter, het ondersteuningsvolume, het aantal takken, de contactdiameter en de stabiliteit van boomondersteuning op basis van ondersteuningshoogte, takhoek, takdichtheid en basisstamdiameter.',
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    presetsLabel: 'Voorinstellingen',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Gebalanceerd',
    tallPresetLabel: 'Hoog',
    supportHeightLabel: 'Ondersteuningspunthoogte',
    branchAngleLabel: 'Takhoek',
    branchDensityLabel: 'Takdichtheid',
    baseTrunkDiameterLabel: 'Basisstamdiameter',
    canopyDiameterLabel: 'Kroondiameter bovenaan',
    supportVolumeLabel: 'Geschat ondersteuningsvolume',
    stabilityLabel: 'Ondersteuningsstabiliteit',
    filamentMassLabel: 'Filamentmassa',
    branchCountLabel: 'Aantal takken',
    contactDiameterLabel: 'Contactdiameter',
    trunkVolumeLabel: 'Stamvolume',
    branchVolumeLabel: 'Takvolume',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'lage stabiliteit',
    stabilityBalanced: 'gebalanceerde stabiliteit',
    stabilityHigh: 'hoge stabiliteit',
    controlsAriaLabel: 'Invoer boomondersteuning dichtheid',
    resultsAriaLabel: 'Resultaten boomondersteuning dichtheid',
    copyButton: 'Ondersteuningsconfiguratie kopiëren',
    copiedButton: 'Gekopieerd',
    copiedSummaryTemplate: 'Boomondersteuning schatting: kroon {canopy}, volume {volume}, stabiliteit {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'in',
    cubicCentimetersUnit: 'cm³',
    cubicInchesUnit: 'in³',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: '°',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'Hoe de Dichtheid van Boomondersteuning het Filamentgebruik en de Stabiliteit Beïnvloedt', level: 2 },
    {
      type: 'paragraph',
      html: 'Boomondersteuning is efficiënt omdat het de taak opsplitst in een <strong>lastpad</strong> en een <strong>contactpatroon</strong>. De stam draagt het grootste deel van de verticale belasting vanaf de bouwplaat, terwijl kleinere takken zich alleen naar overstekingen uitstrekken waar contact nodig is. Een boomondersteuning dichtheid calculator is nuttig omdat de meest zichtbare slicer-instellingen, zoals takhoek en takdichtheid, samenwerken met ondersteuningspunthoogte en basisstamdiameter. Een lage takdichtheid kan filament besparen, maar vermindert ook het aantal paden dat wiebelen weerstaat. Een steile takhoek kan hoge kenmerken bereiken met minder horizontale spreiding, maar concentreert de belasting nabij de stam en kan falen bij hoge smalle ondersteuningen.',
    },
    {
      type: 'paragraph',
      html: 'De calculator schat drie waarden die moeilijk met het blote oog te beoordelen zijn in een slicer-voorvertoning: de bovenste kroondiameter, het ondersteuningsvolume en de stabiliteitsscore. De bovenste kroondiameter vertelt hoe breed de takkroon nabij het model wordt. Het ondersteuningsvolume schat het benodigde printmateriaal voor de stam en takken. Stabiliteit combineert hoek, dichtheid, basisdiameter, hoogte en kroonuitspreiding tot een praktische score. Het doel is niet om de slicer-engine te vervangen; het doel is om startwaarden te kiezen voordat je sliceert, zodat je minder tijd besteedt aan het herhalen van ondersteuningsvoorvertoningen.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50°', label: 'gangbare takhoekbereik voor gebalanceerd bereik en sterkte' },
        { value: '25-55%', label: 'praktische takdichtheidsspreiding voor veel FDM-prints' },
        { value: '2-8 mm', label: 'typisch basisstamdiameterbereik voor hobbyprinter boomondersteuning' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Dit is een planningscalculator, geen slicer geometrie-export',
      html: 'Elke slicer genereert boomondersteuning anders. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer en andere tools gebruiken verschillende namen en algoritmen voor takgeneratie, botsingsvermijding, ondersteuningsinterface en contactpunten. Gebruik de uitvoer als afstemrichting en bevestig de uiteindelijke geometrie in de slicer-voorvertoning voordat je print.',
    },
    { type: 'title', text: 'Takhoek: Bereik, Lastpad en Faalrisico', level: 2 },
    {
      type: 'paragraph',
      html: 'De takhoek bepaalt hoe agressief een boomondersteuning zich van de stam naar het model verspreidt. Een lagere hoek houdt takken dichter bij verticaal, wat meestal de stijfheid verbetert en lateraal wiebelen vermindert. Een hogere hoek reikt verder over lege ruimte, wat het aantal benodigde stammen kan verminderen, maar het verhoogt de buigbelasting en kan lange ongesteunde taksegmenten creëren. Bij hoge ondersteuningen kan een kleine verandering van 50 graden naar 60 graden een stabiele boom veranderen in een flexibele structuur die trilt wanneer de nozzle hem aanraakt.',
    },
    {
      type: 'paragraph',
      html: 'De beste takhoek hangt af van de ondersteuningspunthoogte. Een korte boom onder een kleine oversteking kan een grotere hoek gebruiken omdat de taklengte beperkt is. Een hoog ondersteuningspunt heeft een conservatievere hoek nodig, vooral met flexibele materialen, snelle verplaatsingen of een bedoppervlak dat ondersteuningen gemakkelijk loslaat. Als het ondersteuningspunt hoog is en de takhoek wijd, vergroot dan de basisstamdiameter of dichtheid zodat de takkroon niet wordt ondersteund door een dunne kolom.',
    },
    {
      type: 'table',
      headers: ['Takhoek', 'Beste gebruik', 'Risico bij overgebruik', 'Aanpassing'],
      rows: [
        ['20-35°', 'Hoge ondersteuningen en smalle torens', 'Kan meer stammen vereisen omdat bereik beperkt is', 'Dichtheid alleen verhogen waar contactdekking slecht is'],
        ['36-50°', 'Algemene boomondersteuning afstemmen', 'Meestal gebalanceerd maar hangt nog af van hoogte', 'Hier beginnen voor de meeste PLA- en PETG-prints'],
        ['51-65°', 'Wijde overstekingen met gematigde hoogte', 'Takken kunnen buigen tijdens verplaatsing of contact', 'Gebruik dikkere basisstam en gematigde dichtheid'],
        ['66-75°', 'Speciale gevallen met zeer wijde reikwijdte', 'Hoge buigbelasting en zwakke takwortels', 'Voorvertoning zorgvuldig bekijken en ondersteuningsprint vertragen'],
      ],
    },
    {
      type: 'tip',
      title: 'Jaag bereik niet alleen na met hoek',
      html: 'Als takken ver moeten reizen, probeer dan een extra stam toe te voegen of de kroondichtheid te verhogen voordat je de hoek naar de bovengrens duwt. Een tweede nabijgelegen stam gebruikt vaak minder materiaal dan een overrekte boom die een zware basis nodig heeft om te overleven.',
    },
    { type: 'title', text: 'Takdichtheid: Contactdekking Zonder Ondersteuningslittekens', level: 2 },
    {
      type: 'paragraph',
      html: 'Takdichtheid beschrijft hoeveel takstructuur er nabij het ondersteunde gebied wordt gecreëerd. Lage dichtheid vermindert filament en maakt verwijdering gemakkelijker, maar kan overstekingsranden onvoldoende ondersteuningsd laten. Hoge dichtheid verbetert de dekking en verdeelt de last over meerdere contacten, maar verhoogt de printtijd, contactlittekens en de kans dat ondersteuningen aan delicate oppervlakken versmelten. De juiste dichtheid is daarom niet het hoogste getal dat er veilig uitziet; het is het laagste getal dat overstekingen laat doorhangen voorkomt terwijl het voldoende stijfheid behoudt.',
    },
    {
      type: 'paragraph',
      html: 'Voor decoratieve modellen kan de dichtheid vaak worden verlaagd omdat een lichte onderkantstructuur acceptabel kan zijn. Voor mechanische onderdelen vraagt dichtheid meer zorg omdat ongesteunde gaten, afschuiningen en pasvlakken de passing kunnen beïnvloeden. Materialen doen er ook toe. PLA kan lichtere ondersteuningen verdragen omdat het stijf is en schone bruggen print. PETG heeft vaak grotere luchtspleten en een zorgvuldige contactdiameter nodig omdat het sterk aan ondersteuningen hecht. TPU en flexibele filamenten hebben een conservatieve geometrie nodig omdat dunne takken kunnen doorbuigen in plaats van de oversteking op zijn plaats te houden.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lage dichtheid',
          description: 'Het beste wanneer verwijderkwaliteit en filamentbesparing belangrijker zijn dan perfecte onderkantafwerking.',
          points: ['Snelste ondersteuningsprint', 'Zwakste contactdekking', 'Nuttig voor organische miniaturen'],
        },
        {
          title: 'Gebalanceerde dichtheid',
          description: 'Een praktisch standaard voor gemengde geometrie waar overstekingen ondersteuning nodig hebben maar het modeloppervlak schoon moet blijven.',
          highlight: true,
          points: ['Goede materiaalefficiëntie', 'Gemiddelde verwijderinspanning', 'Werkt voor veel PLA- en PETG-klussen'],
        },
        {
          title: 'Hoge dichtheid',
          description: 'Bruikbaar voor zware overstekingen, hoge ondersteuningspunten en kwetsbare contactgebieden, maar het verhoogt littekens.',
          points: ['Beste lastspreiding', 'Meer volume en printtijd', 'Hoger risico op versmolten contacten'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Takdichtheid verhogen',
      items: [
        { pro: 'Meer contactpunten verminderen doorhangen onder gebogen overstekingen.', con: 'Meer contactpunten kunnen zichtbaardere sporen achterlaten na verwijdering.' },
        { pro: 'Een dichtere kroon verdeelt de last over meerdere takken.', con: 'De slicer kan een omvangrijke kroon genereren die moeilijk te bereiken is met zijkniptangen.' },
        { pro: 'Hoge ondersteuningen worden minder gevoelig voor nozzle-aanrakingen.', con: 'Printtijd en filamentverbruik stijgen snel wanneer dichtheid wordt gecombineerd met een grote kroon.' },
      ],
    },
    { type: 'title', text: 'Basisstamdiameter en Waarom Hoge Boomondersteuning Faalt', level: 2 },
    {
      type: 'paragraph',
      html: 'De basisstamdiameter is het fundament van de boom. Een dunne stam kan volkomen voldoende zijn voor een korte ondersteuning, maar dezelfde diameter wordt riskant wanneer het ondersteunde punt hoog is. Hoogte vergroot het hefboomeffect: een kleine nozzle-impact, bewegingstrijking of koelventilatortrilling produceert meer beweging bij de kroon. Als de stam te dun is voor de hoogte, kan de ondersteuning niet onmiddellijk breken; deze kan langzaam schuin gaan staan, het contactpunt verplaatsen of loskomen van het bed voordat de oversteking klaar is.',
    },
    {
      type: 'paragraph',
      html: 'Een grotere stamdiameter verbetert de stijfheid en bedhechting, maar verbruikt ook materiaal. De calculator behandelt de stamdiameter als stabiliteitsinvoer in plaats van een optische instelling. Als de stabiliteitsscore laag is, is het vergroten van de diameter vaak effectiever dan het verhogen van de takdichtheid omdat het het lastpad vanaf de bouwplaat versterkt. Als de score al hoog is, kan een grotere stam alleen maar het verwijderen bemoeilijken en filament verspillen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Ondersteuningspunthoogte', definition: 'De verticale afstand van de bouwplaat naar het modeldeel dat ondersteuning nodig heeft.' },
        { term: 'Takhoek', definition: 'De hoek die takken gebruiken terwijl ze zich van de stam naar ondersteuningscontactpunten verspreiden.' },
        { term: 'Takdichtheid', definition: 'De relatieve mate van takstructuur en contactdekking gegenereerd nabij het ondersteunde gebied.' },
        { term: 'Basisstamdiameter', definition: 'De geschatte diameter van de hoofdondersteuningskolom van de boom op het startpunt op de bouwplaat.' },
        { term: 'Kroondiameter', definition: 'De geschatte breedte van de bovenste takkroon nabij de modeloversteking.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Een hoge kroon op een dunne stam is de klassieke boomondersteuningsfaalmodus',
      html: 'Als de kroondiameter vele malen groter is dan de stamdiameter, gedraagt de ondersteuning zich als een topzware structuur. Voeg nog een stam toe, verklein de takhoek of vergroot de basisdiameter voordat je simpelweg meer takdichtheid toevoegt.',
    },
    { type: 'title', text: 'Bovenste Kroondiameter en Modelvrijheid', level: 2 },
    {
      type: 'paragraph',
      html: 'De bovenste kroondiameter is belangrijk omdat boomondersteuningen om het model heen moeten passen, botsingen moeten vermijden en verwijderbaar moeten blijven. Een grote kroon kan de oversteking goed ondersteunen, maar kan ook details omwikkelen, in holtes binnendringen of takken creëren die moeilijk te breken zijn. Een kleine kroon is gemakkelijker te verwijderen, maar kan de contactkracht op een paar punten concentreren en randen laten doorhangen. De calculator schat de kroondiameter uit ondersteuningshoogte, takhoek, dichtheid en basisdiameter zodat je kunt voorspellen of de gegenereerde ondersteuningskroon compact of uitgestrekt zal zijn.',
    },
    {
      type: 'paragraph',
      html: 'Slicer-voorvertoning is essentieel voor kroonvrijheid. Let op takken die door kleine gaten gaan, onder verheven tekst, rond vingers van figuren of tussen mechanische functies door lopen. Als een tak een gebied kan bereiken, kan hij zich er ook verstrikken. Lagere dichtheid, kleinere contactdiameter, strakkere ondersteuningsblokkering of handmatig schilderen kan voorkomen dat boomondersteuningen moeilijker te verwijderen worden dan standaard roosterondersteuningen.',
    },
    {
      type: 'table',
      headers: ['Kroongedrag', 'Waarschijnlijke oorzaak', 'Printgevolg', 'Oplossing'],
      rows: [
        ['Kroon is te smal', 'Hoek en dichtheid zijn beide conservatief', 'Overstekingsranden hangen tussen contactpunten door', 'Dichtheid verhogen of handmatige ondersteuningspunten toevoegen'],
        ['Kroon is breed maar instabiel', 'Hoge hoek op een hoge ondersteuning', 'Nozzle-contact kan de structuur doen schudden', 'Hoek verkleinen of stamdiameter vergroten'],
        ['Kroon omhult details', 'Hoge dichtheid rond complexe geometrie', 'Zichtbare littekens op oppervlakken na verwijdering', 'Ondersteuningsblokkers gebruiken of dichtheid verlagen'],
        ['Kroon raakt modelzijwanden', 'Ondersteuningsvrijheid te klein', 'Takken kunnen aan het onderdeel versmelten', 'X/Y-afstand vergroten of contactdiameter verkleinen'],
      ],
    },
    {
      type: 'card',
      title: 'Kroondiameter is een voorvertoningswaarschuwing',
      html: 'Een grote geschatte kroondiameter is niet automatisch slecht. Het betekent dat de slicer-voorvertoning aandacht verdient omdat de ondersteuningskroon de dominante verwijderuitdaging kan worden.',
    },
    { type: 'title', text: 'Ondersteuningsvolume, Filamentlengte en Printtijd', level: 2 },
    {
      type: 'paragraph',
      html: 'Ondersteuningsvolume is de praktische kostprijs van de gekozen instellingen. Een boomondersteuning kan er in de voorvertoning licht uitzien, maar een dichte kroon en dikke stam kunnen nog steeds aanzienlijk filament verbruiken. De calculator rapporteert het geschatte volume in kubieke centimeters. Dit helpt om instellingen te vergelijken voordat je sliceert, vooral wanneer je beslist of een hogere stam, hogere dichtheid of extra takbereik het materiaal waard is.',
    },
    {
      type: 'paragraph',
      html: 'Volume vertaalt zich niet perfect naar printtijd omdat slicers verschillende lijnbreedten, wandtellingen, vulpatronen, acceleratielimieten en ondersteuningssnelheden gebruiken. Volume blijft echter een sterke indicator. Als twee instellingen vergelijkbare stabiliteit produceren maar de ene veel minder volume gebruikt, is de instelling met het lagere volume meestal een beter startpunt. Als de instelling met het lagere volume ook een lage stabiliteitsscore oplevert, kan de besparing verdwijnen wanneer de print mislukt of de onderkant nabewerking nodig heeft.',
    },
    {
      type: 'summary',
      title: 'Hoe veilig het ondersteuningsvolume te verminderen',
      items: [
        'Verlaag eerst de takdichtheid wanneer de stabiliteitsscore al hoog is.',
        'Verklein de takhoek wanneer de kroon erg breed en topzwaar is.',
        'Gebruik alleen een kleinere basisstam bij korte ondersteuningen met gematigde overstekingsbelastingen.',
        'Splits een grote boom in twee kleinere bomen wanneer het bereik een omvangrijke kroon creëert.',
        'Stem de contactdiameter apart af zodat oppervlaktelittekens geen onnodige dichtheid afdwingen.',
      ],
    },
    {
      type: 'message',
      title: 'Materiaal besparen is alleen nuttig als de ondersteuning overleeft',
      html: 'Een mislukte ondersteuning kost meestal meer filament dan een iets sterkere. Behandel grote besparingspercentages als een uitnodiging om de voorvertoning zorgvuldig te bekijken, niet als bewijs dat de lichtste ondersteuning automatisch correct is.',
    },
    { type: 'title', text: 'Boomondersteuning Contactdiameter en Oppervlaktekwaliteit', level: 2 },
    {
      type: 'paragraph',
      html: 'Contactdiameter bepaalt hoeveel van de boomondersteuning het model raakt. Kleine contacten verwijderen schoon en verminderen littekens, maar kunnen loskomen van zware of hete overstekingen. Grotere contacten houden beter en verspreiden warmte, maar kunnen met PETG versmelten, verheven punten op PLA achterlaten of detailbeschadigend werken op decoratieve prints. Deze calculator schat een contactdiameter uit takdiameter en dichtheid zodat het resultaat verbonden blijft met de ondersteuningsstructuur in plaats van behandeld te worden als een geïsoleerde cosmetische waarde.',
    },
    {
      type: 'paragraph',
      html: 'Contactinstellingen moeten worden afgestemd met de bovenste Z-afstand en het interfacegedrag. Als de verticale opening te klein is, kan zelfs een klein contact sterk hechten. Als de verticale opening te groot is, kan een breed contact de oversteking nog steeds niet ondersteunen omdat het filament ruimte heeft om door te hangen. Voor functionele onderdelen, test de contactdiameter op een kalibratieoversteking met hetzelfde materiaal, nozzlegrootte, laaghoogte en koelinstellingen die voor het echte model worden gebruikt.',
    },
    {
      type: 'list',
      items: [
        'Gebruik kleinere contactdiameters op zichtbare cosmetische oppervlakken.',
        'Gebruik grotere contacten onder zware bruggen, dikke overstekingen of hogetemperatuurmaterialen.',
        'Vergroot de bovenste Z-afstand voordat je de boomdichtheid de schuld geeft als ondersteuningen moeilijk te verwijderen zijn.',
        'Verlaag de ondersteuningsinterfacesnelheid als contactpunten tijdens het printen losraken.',
        'Controleer of de slicer deze instelling contactdiameter, puntdiameter of ondersteuningsinterfacecontact noemt.',
      ],
    },
    {
      type: 'tip',
      title: 'PETG vereist extra voorzichtigheid',
      html: 'PETG hecht agressief aan ondersteuningsmateriaal dat uit hetzelfde filament is geprint. Een gematigde boomdichtheid met zorgvuldige Z-afstand werkt vaak beter dan een zeer dichte kroon met grote contacten.',
    },
    { type: 'title', text: 'Aanbevolen Startwerkstroom voor Slicer Boomondersteuning', level: 2 },
    {
      type: 'paragraph',
      html: 'Begin met het invoeren van de hoogte van het hoogste ondersteuningspunt, niet de totale modelhoogte. Een model kan hoog zijn terwijl het ondersteunde gebied dicht bij het bed ligt, of laag terwijl een kritische oversteking hoog op een smal eiland zit. Kies dan een takhoek in het gebalanceerde bereik en stel de takdichtheid in op basis van de benodigde oppervlaktekwaliteit. Bepaal ten slotte de basisstamdiameter op basis van hoogte en verwachte belasting. De calculator laat zien of de combinatie volume-efficiënt, stabiel of riskant is.',
    },
    {
      type: 'paragraph',
      html: 'Ga na de berekening naar de slicer-voorvertoning en inspecteer de gegenereerde boomondersteuning van de eerste ondersteuningslaag tot het uiteindelijke contact. Let op zwevende startpunten, erg dunne takwortels, takken die te dicht langs het model lopen en ongesteunde overstekingseilanden. Als de ondersteuning in de calculator instabiel is en er schaars uitziet in de voorvertoning, versterk dan de stam of verklein de takhoek. Als de ondersteuning stabiel is maar er volumineus uitziet, verlaag dan de dichtheid en controleer of het contactpatroon de oversteking nog steeds bedekt.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Een goede boomondersteuningsinstelling is saai in de voorvertoning',
      html: 'De voorvertoning moet een duidelijke stam, korte takpaden, voldoende contacten onder de oversteking en open ruimte rond details tonen. Als de boom er visueel dramatisch uitziet, doet hij waarschijnlijk te veel.',
    },
    {
      type: 'summary',
      title: 'Snelle afstemsequentie',
      items: [
        'Voer de ondersteuningspunthoogte in, niet alleen de modelhoogte.',
        'Begin nabij 45-50° voor de takhoek.',
        'Gebruik 30-45% dichtheid voor algemene PLA-prints en pas daarna aan op basis van de voorvertoning.',
        'Vergroot de stamdiameter voordat je hoge ondersteuningen extreem dicht maakt.',
        'Bevestig contactdiameter en vrijheid in de daadwerkelijke slicer-voorvertoning.',
      ],
    },
    { type: 'title', text: 'Wanneer Boomondersteuning Beter Is Dan Normale Ondersteuning', level: 2 },
    {
      type: 'paragraph',
      html: 'Boomondersteuning is het sterkst wanneer ondersteuning in geïsoleerde gebieden nodig is: armen van figuren, helmen, monsterhoorns, organische sculpturen, decoratieve bogen en gebogen overstekingen. Ze vermijden het vullen van het hele gebied onder het model, dus ze gebruiken vaak minder filament en laten minder littekens achter dan blokvormige roosterondersteuningen. Ze zijn ook nuttig wanneer standaardondersteuningen een grote muur zouden creëren die moeilijk te verwijderen is van een gebogen oppervlak.',
    },
    {
      type: 'paragraph',
      html: 'Standaard ondersteuningen kunnen nog steeds beter zijn voor vlakke technische overstekingen, brede horizontale planken en oppervlakken die een uniforme ondersteuningsinterface nodig hebben. Een boomondersteuningskroon raakt geselecteerde punten, terwijl normale ondersteuningen een gelijkmatiger vlak kunnen bieden. Als de onderkant dimensioneel nauwkeurig moet zijn, vergelijk dan beide benaderingen. Een dichte boom kan meer materiaal verbruiken dan een eenvoudige rechtlijnige ondersteuning als de oversteking breed en vlak is.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Boomondersteuning',
          description: 'Het beste voor organische geometrie, schaarse contactgebieden en modellen waar verwijderingstoegang belangrijk is.',
          highlight: true,
          points: ['Minder materiaal bij geïsoleerde overstekingen', 'Schonere toegang rond gebogen vormen', 'Gevoelig voor takhoek en stamstijfheid'],
        },
        {
          title: 'Normale ondersteuning',
          description: 'Het beste voor brede vlakke overstekingen, voorspelbare interfaces en eenvoudige mechanische oppervlakken.',
          points: ['Gelijkmatige onderkantdekking', 'Vaak eenvoudiger te doorgronden', 'Kunnen veel meer filament verbruiken onder complexe modellen'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Gebruik beide ondersteuningstypen wanneer het model erom vraagt',
      html: 'Veel slicers ondersteunen ondersteuningsschilderen, blokkers of modificatormeshes. Een model kan boomondersteuning gebruiken voor organische kenmerken en normale ondersteuning voor één vlak technisch oppervlak.',
    },
  ],
  faq: [
    {
      question: 'Wat is een goede takhoek voor boomondersteuning?',
      answer: 'Een praktisch startbereik is ongeveer 40-50°. Gebruik lagere hoeken voor hoge ondersteuningen en hogere hoeken alleen wanneer je meer bereik nodig hebt en de stam sterk genoeg is.',
    },
    {
      question: 'Verbetert een hogere boomondersteuningsdichtheid altijd de printkwaliteit?',
      answer: 'Nee. Hogere dichtheid verbetert contactdekking en stabiliteit, maar verhoogt ook filament, printtijd en ondersteuningslittekens. Gebruik de laagste dichtheid die de oversteking betrouwbaar ondersteunt.',
    },
    {
      question: 'Hoe kies ik de basisstamdiameter?',
      answer: 'Vergroot de basisstamdiameter naarmate de ondersteuningspunthoogte toeneemt. Hoge ondersteuningen hebben een sterker lastpad nodig, terwijl korte ondersteuningen vaak een kleinere stam kunnen gebruiken om materiaal te besparen.',
    },
    {
      question: 'Waarom is de kroondiameter belangrijk?',
      answer: 'De kroondiameter voorspelt hoe wijd de bovenste takkroon wordt. Een wijde kroon kan goed ondersteunen, maar kan botsen met details, zich in holtes verstrikken of moeilijk te verwijderen zijn.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Ondersteuningspunthoogte invoeren', text: 'Gebruik de verticale afstand van de bouwplaat naar het modeldeel dat ondersteuning nodig heeft.' },
    { name: 'Takhoek en dichtheid instellen', text: 'Kies de geplande slicer-waarden voor takhoek en takdichtheid.' },
    { name: 'Basisstamdiameter toevoegen', text: 'Voer de geschatte hoofdstamdiameter van de boom in die de slicer gebruikt.' },
    { name: 'Stabiliteit en volume controleren', text: 'Vergelijk de stabiliteitsscore, de kroondiameter en het geschatte ondersteuningsvolume voordat je sliceert.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Boomondersteuning Dichtheid Calculator',
      description: 'Optimaliseer de dichtheid van 3D-print boomondersteuning, takhoek, basisstamdiameter, kroondiameter, ondersteuningsvolume en stabiliteit.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Wat is een goede takhoek voor boomondersteuning?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Een praktisch startbereik is ongeveer 40-50°, met lagere hoeken voor hoge ondersteuningen en hogere hoeken alleen wanneer extra bereik nodig is.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe de dichtheid van boomondersteuning voor een 3D-print af te stemmen',
      step: [
        { '@type': 'HowToStep', text: 'Voer de ondersteuningspunthoogte in.' },
        { '@type': 'HowToStep', text: 'Stel takhoek, takdichtheid en basisstamdiameter in.' },
        { '@type': 'HowToStep', text: 'Controleer de kroondiameter, het ondersteuningsvolume en de stabiliteitsscore.' },
        { '@type': 'HowToStep', text: 'Pas de waarden toe in de slicer-voorvertoning en stel contactinstellingen bij.' },
      ],
    },
  ],
};