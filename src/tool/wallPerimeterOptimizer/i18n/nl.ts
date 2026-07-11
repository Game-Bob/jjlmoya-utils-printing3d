import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'wand-perimeter-optimalisatie',
  title: 'Wand en Perimeteroptimalisatie',
  description: 'Bereken het exacte aantal perimeters en een veilige lijnbreedte zodat de geprinte wanddikte overeenkomt met het CAD-model zonder interne gaten.',
  ui: {
    controlsAriaLabel: 'Invoer voor wand-perimeteroptimalisatie',
    resultsAriaLabel: 'Resultaten van wand-perimeteroptimalisatie',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    tooltipLabel: 'Meer informatie',
    nozzleLabel: 'Sproeierdiameter',
    nozzleHelp: 'Fysieke openingsdiameter van de sproeier. Veilige lijnbreedte is beperkt tot 80-120% van deze waarde.',
    lineWidthLabel: 'Lijnbreedte',
    lineWidthHelp: 'Extrusiebreedte van de slicer voor externe en interne wanden.',
    cadThicknessLabel: 'CAD-wanddikte',
    cadThicknessHelp: 'Ontworpen wanddikte die moet worden gereproduceerd door hele perimeters.',
    commonNozzlesLabel: 'Veelvoorkomende sproeiergroottes',
    infillStrategyLabel: 'Wandvulstrategie',
    perimeterFirstLabel: 'Eerst perimeters',
    solidInfillFallbackLabel: 'Massieve opvulling als back-up',
    solidInfillTip: 'Tip: als je liever geen extra perimeters toevoegt, gebruik dan massieve opvulling of betrouwbare gap fill in dunne wanden, zodat de slicer geen interne holtes achterlaat.',
    copySolidInfillNote: 'Als je minder perimeters houdt, gebruik dan massieve opvulling of geverifieerde gap fill voor dunne wandinterieurs.',
    visualLabel: 'Dwarsdoorsnede met perimeters gepakt in de CAD-wanddikte',
    cadEnvelopeLabel: 'CAD-wandomhulling',
    lineLabel: 'Extrusielijn',
    recommendedPerimetersLabel: 'Aanbevolen perimeters',
    realThicknessLabel: 'Werkelijke dikte',
    residualLabel: 'Residuele fout',
    verdictLabel: 'Precisie-oordeel',
    exactLabel: 'Exact',
    adjustLabel: 'Vereist aanpassing lijnbreedte',
    impossibleLabel: 'Onmogelijk met deze sproeier',
    adjustedWidthLabel: 'Aangepaste lijnbreedte',
    noAdjustmentLabel: 'Geen aanpassing',
    slicerBlockLabel: 'Slicerconfiguratie',
    perimetersUnitLabel: 'perimeters',
    copyLabel: 'Instellingen kopiëren',
    copiedLabel: 'Slicerblok gekopieerd.',
    safeRangeLabel: 'Veilig lijnbreedtebereik',
    compareLabel: 'Dichtstbijzijnde perimeteropties',
    perimetersColumn: 'Perimeters',
    lineWidthColumn: 'Lijnbreedte',
    realThicknessColumn: 'Werkelijke dikte',
    errorColumn: 'Fout',
    messageExact: 'De geselecteerde lijnbreedte valt binnen 0,05 mm van de CAD-wand. Dit is een goede wand die alleen uit perimeters bestaat.',
    messageAdjust: 'De huidige breedte laat een meetbare opening. Gebruik de aangepaste lijnbreedte om de wand exact te sluiten met hele perimeters.',
    messageTooThin: 'De CAD-wand is dunner dan de sproeierdiameter. Herontwerp de wand, gebruik een kleinere sproeier of accepteer een niet-structureel enkellijns kenmerk.',
    messageOutsideRange: 'Geen aanpassing in het veilige 80-120% sproeierbreedtebereik kan deze wand exact sluiten. Herontwerp de CAD-wand of wijzig de sproeiergrootte.',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Waarom wanddikte moet overeenkomen met hele perimeters', level: 2 },
    {
      type: 'paragraph',
      html: 'FDM-slicers bouwen een wand uit discrete extrusiebanen. Een CAD-wand van 1,20 mm is geen doorlopende massieve instructie; het wordt één, twee, drie of meer perimeters, afhankelijk van lijnbreedte, sproeierdiameter en slicerregels. Als de wiskunde niet klopt, moet de slicer kiezen tussen het laten van een smalle interne opening, het invoegen van een dun gap-fill pad, het overextruderen van een regio of het stilletjes wijzigen van de gereedschapspadvolgorde. Functionele onderdelen lijden eronder omdat de wand die er in CAD massief uitzag een zwakke naad of een inconsistente rups in de doorsnede kan bevatten.',
    },
    {
      type: 'paragraph',
      html: 'De bruikbare vergelijking is eenvoudig: <strong>werkelijke wanddikte = aantal perimeters × lijnbreedte</strong>. De moeilijkheid zit in het kiezen van waarden die printbaar blijven. Een lijnbreedte kan meestal iets onder of boven de sproeierdiameter bewegen, maar kan niet willekeurig zijn. Deze optimalisatie doorzoekt gehele aantallen perimeters, meet de residufout tegen de CAD-dikte en stelt alleen een aanpassing van de lijnbreedte voor wanneer de exacte breedte binnen een conservatief bereik van 80-120% van de sproeierdiameter blijft.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0,05 mm', label: 'precisiedrempel gebruikt voor het oordeel' },
        { value: '80-120%', label: 'veilige lijnbreedteband rond sproeierdiameter' },
        { value: 'n × breedte', label: 'kernvergelijking wanddikte' },
        { value: '2 decimalen', label: 'minimale praktische slicerprecisie' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perimeters zijn gehele geometrie',
      html: 'Een slicer kan geen 2,6 normale perimeters printen. Als een wand te breed is voor twee lijnen en te smal voor drie, heeft het gap-fill gedrag of een gecorrigeerde CAD-dimensie nodig.',
    },
    { type: 'title', text: 'Hoe kies je CAD-wanddikte voor een 0,4 mm sproeier', level: 2 },
    {
      type: 'paragraph',
      html: 'Een 0,4 mm sproeier gebruikt gewoonlijk een lijnbreedte rond 0,40-0,48 mm. Met een lijnbreedte van 0,42 mm produceren twee perimeters 0,84 mm, drie perimeters 1,26 mm en vier perimeters 1,68 mm. Een ontworpen wand van 1,20 mm ziet er redelijk uit in CAD, maar ligt 0,06 mm verwijderd van drie perimeters van 0,42 mm. Dat is dichtbij, maar niet exact. De optimalisatie stelt misschien 3 perimeters voor op 0,40 mm, wat de wand perfect sluit en exact op sproeierdiameter blijft.',
    },
    {
      type: 'paragraph',
      html: 'Voor mechanische onderdelen is het vaak beter om wanden te ontwerpen als veelvouden van de beoogde lijnbreedte in plaats van de slicer te dwingen ze te repareren. Veelvoorkomende CAD-wanddoelen voor een 0,4 mm sproeier zijn ongeveer 0,8 mm voor lichte omhulsels, 1,2 mm voor normale functionele wanden, 1,6 mm voor sterkere behuizingen en 2,0 mm of meer voor dragende kenmerken. De exacte waarden moeten de slicer-lijnbreedte volgen, niet alleen de nominale sproeierdiameter.',
    },
    {
      type: 'table',
      headers: ['Sproeier', 'Veilig lijnbreedtebereik', 'Goede 2-wand doelen', 'Goede 3-wand doelen'],
      rows: [
        ['0,2 mm', '0,16-0,24 mm', '0,32-0,48 mm', '0,48-0,72 mm'],
        ['0,4 mm', '0,32-0,48 mm', '0,64-0,96 mm', '0,96-1,44 mm'],
        ['0,6 mm', '0,48-0,72 mm', '0,96-1,44 mm', '1,44-2,16 mm'],
        ['0,8 mm', '0,64-0,96 mm', '1,28-1,92 mm', '1,92-2,88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Ontwerp vanuit het slicerprofiel achterwaarts',
      html: 'Voordat je klikverbindingen, ribben, bazen of behuizingswanden modelleert, bepaal je de sproeier en lijnbreedte. Stel vervolgens de wandafmetingen in op schone veelvouden, zodat de slicer geen gap-fill paden verzint in kritieke gebieden.',
    },
    { type: 'title', text: 'Lijnbreedtelimieten: waarom 80 tot 120 procent een veilige band is', level: 2 },
    {
      type: 'paragraph',
      html: 'Een sproeier kan een iets bredere rups leggen dan zijn opening omdat plastic tegen de vorige laag wordt gedrukt en platgedrukt tot een ovale baan. Het kan ook een iets smallere lijn printen, maar te smal vraagt de printer om een gecontroleerde rups te creëren met beperkte laterale ondersteuning. Beide extremen hebben compromissen. Zeer brede lijnen kunnen de hotend overdrukken, hoeken uitsmeren, kleine details verbergen en de maatnauwkeurigheid verminderen. Zeer smalle lijnen kunnen wanden ondervullen, de hechting verzwakken en de extrusieconsistentie gevoeliger maken voor pressure advance en filamentdiameter.',
    },
    {
      type: 'paragraph',
      html: 'Het hier gebruikte bereik van 80-120% is bewust conservatief. Veel slicers staan bredere waarden toe voor speciale modi, vase-printing of grove sproeiers, en ervaren gebruikers kunnen na testen buiten dit bereik gaan. Deze tool is gericht op betrouwbare mechanische wandplanning, waar de aanbeveling veilig genoeg moet zijn om in een normaal profiel te kopiëren zonder duidelijke onder- of overextrusie te veroorzaken. Als een exacte match een lijnbreedte buiten het bereik vereist, meldt de tool het ontwerp als onpraktisch in plaats van te doen alsof de slicer het netjes kan oplossen.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Te smal', description: 'De rups drukt mogelijk niet genoeg materiaal in de wanddoorsnede.', points: ['Zwakke tussenlaag hechting', 'Zichtbare gaten', 'Broze dunne wanden'] },
        { title: 'Veilig bereik', description: 'De rups blijft dicht bij fysiek sproeiergedrag.', highlight: true, points: ['Voorspelbare extrusie', 'Goede maatbeheersing', 'Herbruikbare profielen'] },
        { title: 'Te breed', description: 'De sproeier duwt mogelijk meer plastic dan het pad kan accepteren.', points: ['Uitgezakte hoeken', 'Oppervlakterichels', 'Hogere tegendruk'] },
      ],
    },
    {
      type: 'message',
      title: 'Veilig betekent niet gekalibreerd',
      html: 'Zelfs een wiskundig perfecte breedte heeft een gekalibreerde doorstroomsnelheid nodig. Als de extrusiemultiplier verkeerd is, kan de fysieke wand nog steeds dik of dun meten met een schuifmaat.',
    },
    { type: 'title', text: 'Diagnose van interne wandgaten in de slicervoorbeeldweergave', level: 2 },
    {
      type: 'paragraph',
      html: 'De snelste manier om een perimeter-mismatch te identificeren, is door de voorbeeldweergave laag voor laag te inspecteren. Zoek naar een bleke streep tussen buiten- en binnenwanden, een enkele dwalende gap-fill lijn, of een gebied waar de slicer afwisselt tussen twee en drie lijnen langs hetzelfde kenmerk. Deze patronen komen vaak voor bij behuizingswanden, bazen, clips en dunne ribben omdat de CAD-dimensie vaak visueel wordt gekozen in plaats van als een veelvoud van extrusiebreedte.',
    },
    {
      type: 'paragraph',
      html: 'Een wandgat is niet altijd zichtbaar aan de buitenkant van de print. Het onderdeel kan er schoon uitzien terwijl de binnenkant een smalle holte bevat die de stijfheid vermindert. Dit is belangrijk voor schroefbazen, perspassingspinnen, beugels, dronerframes, tandwielen en elk onderdeel waar belasting door de wand gaat. Als het gat tussen perimeters zit, kan de wand gemakkelijker splijten omdat het belastingspad zwak gehecht of ontbrekend materiaal kruist in plaats van continue banen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap fill is een reparatie, geen wandplan',
      html: 'Moderne slicers kunnen dunne gap-fill paden invoegen, maar die paden worden vaak geprint met andere snelheid, flow en koelgedrag. Voor dragende geometrie is een schoon veelvoud van perimeters voorspelbaarder.',
    },
    {
      type: 'summary',
      title: 'Controlelijst voor voorbeeldweergave',
      items: [
        'Schakel over naar lijnsoort- of kenmerkvoorbeeld, niet alleen effen kleurvoorbeeld.',
        'Inspecteer wanden bij gaten, ribben, bazen en dunne lipjes.',
        'Controleer of gap-fill paden verschijnen in structurele gebieden.',
        'Vergelijk de CAD-wanddikte met hele veelvouden van lijnbreedte.',
        'Gebruik aangepaste lijnbreedte alleen wanneer het binnen het veilige sproeierbereik blijft.',
      ],
    },
    { type: 'title', text: 'Wanneer het resultaat exact is, aanpassing vereist of onmogelijk is', level: 2 },
    {
      type: 'paragraph',
      html: 'Het oordeel gebruikt een residudrempel van 0,05 mm omdat de meeste desktop-FDM-systemen praktische variatie hebben van flow, filamentdiameter, thermische uitzetting, bewegingskalibratie en meettechniek. Als de huidige instellingen binnen die band vallen, noemt de tool het resultaat exact. Het betekent niet dat elk geprint exemplaar perfect tot op de micron meet; het betekent dat de slicergeometrie zelf dicht genoeg is uitgelijnd dat resterende fout waarschijnlijk kalibratie- of materiaalgedrag is in plaats van perimeter-rekenkunde.',
    },
    {
      type: 'paragraph',
      html: 'Vereist aanpassing betekent dat de huidige lijnbreedte een groter residu achterlaat, maar hetzelfde aantal perimeters kan de wand sluiten met een veilige breedte. Bijvoorbeeld, een 1,20 mm wand met 0,42 mm lijnbreedte geeft drie lijnen op 1,26 mm. Aanpassen naar 0,40 mm maakt drie lijnen exact 1,20 mm. Onmogelijk betekent dat de wand dunner is dan de sproeierdiameter of dat de exacte lijnbreedte buiten de veilige sproeierband zou vallen. In dat geval is herontwerp van de wand of wijziging van sproeiergrootte beter dan de slicer te dwingen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perimeter', definition: 'Een wandlus gegenereerd door de slicer rond de omtrek van een laag.' },
        { term: 'Lijnbreedte', definition: 'De bevolen breedte van één geëxtrudeerde baan, soms extrusiebreedte genoemd.' },
        { term: 'Residu', definition: 'Het absolute verschil tussen CAD-wanddikte en de dikte geproduceerd door hele perimeters.' },
        { term: 'Gap fill', definition: 'Een door de slicer gegenereerd pad gebruikt om resterende ruimte te vullen die normale perimeters niet netjes vullen.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Lijnbreedte aanpassen versus CAD bewerken',
      items: [
        { pro: 'Lijnbreedte aanpassing is snel en kan het modelbestand behouden.', con: 'Het beïnvloedt elke wand die dat profiel gebruikt tenzij zorgvuldig afgebakend.' },
        { pro: 'CAD-bewerking maakt de ontwerpintentie expliciet voor toekomstige prints.', con: 'Het duurt langer wanneer veel kenmerken al zijn vastgelegd.' },
        { pro: 'Sproeiergrootte wijzigen kan zeer dunne of zeer dikke wanden redden.', con: 'Het verandert detailresolutie, printtijd en extrusievolume.' },
      ],
    },
    { type: 'title', text: 'De output toepassen in Cura, PrusaSlicer en vergelijkbare slicers', level: 2 },
    {
      type: 'paragraph',
      html: 'Het kopieerblok bevat bewust alleen de twee waarden die ertoe doen: aantal perimeters en lijnbreedte. In Cura wordt het aantal perimeters toegewezen aan wandlijntelling, en lijnbreedte aan wandlijnbreedte of globale lijnbreedte afhankelijk van de profielstructuur. In PrusaSlicer en afgeleiden gebruik je perimeters voor de lustelling en extrusion width voor de lijnbreedte. Als de slicer aparte externe en interne perimeterbreedtes heeft, houd ze dan gelijk voor de wand die wordt geoptimaliseerd tenzij je begrijpt hoe de slicer ze combineert.',
    },
    {
      type: 'paragraph',
      html: 'Na het wijzigen van slicerinstellingen, slice opnieuw en inspecteer dezelfde wand in de voorbeeldweergave. De visuele voorbeeldweergave moet het verwachte aantal banen tonen die de CAD-omhulling vullen zonder een smal overgebleven kanaal. Print dan een klein testcoupon met dezelfde wanddikte en meet het na afkoeling. Als het coupon consistent afwijkt maar de voorbeeldweergave correct is, stem dan flow of horizontale expansie apart af; gebruik geen aantal perimeters om een kalibratiefout te compenseren.',
    },
    {
      type: 'card',
      title: 'Werklast voor mechanische tolerantie',
      html: 'Gebruik deze volgorde voor functionele onderdelen: kies sproeier, kies veilige lijnbreedte, modelleer wandveelvouden, slice zonder interne gaten, print een coupon, meet werkelijke wand, pas dan flow of dimensionale compensatie aan. De geometriestap overslaan maakt kalibratie een bewegend doelwit.',
    },
    {
      type: 'table',
      headers: ['Slicerconcept', 'Typische veldnaam', 'Wat in te vullen'],
      rows: [
        ['Lustelling', 'Wandlijntelling / Perimeters', 'Aanbevolen geheel aantal perimeters'],
        ['Extrusiebaanbreedte', 'Lijnbreedte / Extrusiebreedte', 'Aanbevolen of aangepaste lijnbreedte'],
        ['Dunne reparatiepaden', 'Gap fill / Gaten tussen wanden vullen', 'Vermijd erop te vertrouwen voor structurele wanden'],
        ['Dimensionale correctie', 'Horizontale expansie / XY-compensatie', 'Afstellen alleen nadat wandwiskunde schoon is'],
      ],
    },
    { type: 'title', text: 'Speciale gevallen: dunne wanden, ribben, bazen en tolerantiekenmerken', level: 2 },
    {
      type: 'paragraph',
      html: 'Dunne wanden onder sproeierdiameter zijn geen normale perimeterwanden. Slicers kunnen ze printen met dunne-wanddetectie, enkele extrusielijnen of variabele lijnbreedte, maar het resultaat is meestal cosmetisch of licht belast. Voor een structurele rib, ontwerp de rib dik genoeg voor ten minste twee stabiele lijnen of accepteer dat het zich gedraagt als een flexibel web. Voor schroefbazen, gebruik voldoende perimeters zodat de schroefbelasting door continue lussen gaat in plaats van een met gap fill gevulde ring.',
    },
    {
      type: 'paragraph',
      html: 'Tolerantiekenmerken hebben extra zorg nodig omdat wandcorrectie kan interageren met gatgrootte en passing. Als een clip of klikkenmerk is ontworpen als een 0,9 mm wand en het profiel gebruikt 0,45 mm lijnen, zijn twee perimeters schoon. Als dezelfde clip 1,0 mm is, kan de slicer een klein middenpad toevoegen dat stijfheid en passing verandert. Een wiskundig schonere wand maakt veerkenmerken vaak beter herhaalbaar omdat elke kopie hetzelfde aantal continue banen gebruikt.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Forceer geen onmogelijke dunne geometrie',
      html: 'Als de CAD-wand onder sproeierdiameter is, is de juiste oplossing meestal een kleinere sproeier, een dikker kenmerk of een andere productiemethode. Een brede sproeier in een sub-sproeierwand dwingen creëert onvoorspelbare rupsvorm.',
    },
    {
      type: 'list',
      items: [
        'Gebruik ten minste twee schone lijnen voor ribben die buigbelasting dragen.',
        'Gebruik drie of meer perimeters rond schroefbazen wanneer de ruimte het toelaat.',
        'Vermijd overgebleven kanalen in clips omdat ze scheurstarters worden.',
        'Valideer perspassingen met dezelfde lijnbreedte die in het uiteindelijke onderdeel wordt gebruikt.',
      ],
    },
  ],
  faq: [
    {
      question: 'Hoeveel perimeters moet een 1,2 mm wand gebruiken met een 0,4 mm sproeier?',
      answer: 'Gewoonlijk drie perimeters. Met een lijnbreedte van 0,40 mm zijn drie perimeters exact 1,20 mm. Met een lijnbreedte van 0,42 mm is de werkelijke dikte 1,26 mm.',
    },
    {
      question: 'Waarom beperkt de calculator de lijnbreedte tot 80-120% van de sproeierdiameter?',
      answer: 'Dat bereik houdt de aanbevelingen in een conservatieve printbare zone. bredere of smallere waarden kunnen in speciale gevallen werken, maar zijn minder betrouwbaar voor mechanische wandplanning.',
    },
    {
      question: 'Moet ik CAD-dikte of slicer-lijnbreedte wijzigen?',
      answer: 'Als de aanpassing klein is en binnen het veilige bereik, is het wijzigen van lijnbreedte snel. Voor herhaalde productieonderdelen is CAD bewerken naar schone veelvouden meestal beter onderhoudbaar.',
    },
    {
      question: 'Garandeert een exact oordeel dat het geprinte onderdeel exact zal meten?',
      answer: 'Nee. Het betekent dat de slicergeometrie schoon sluit. Flowkalibratie, materiaalkrimp, temperatuur en XY-compensatie beïnvloeden nog steeds de fysieke meting.',
    },
    {
      question: 'Wat moet ik doen wanneer het resultaat onmogelijk is?',
      answer: 'Gebruik een kleinere sproeier, herontwerp de wanddikte als een veelvoud van een veilige lijnbreedte, of accepteer dat het kenmerk een niet-structureel dunne-wandpad zal zijn.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Voer sproeierdiameter in', text: 'Kies een veelvoorkomende sproeiergrootte of typ de gemeten sproeierdiameter.' },
    { name: 'Stel lijnbreedte in', text: 'Voer de slicer-wandlijnbreedte in; de tool beperkt het tot een veilig sproeierbereik.' },
    { name: 'Voer CAD-wanddikte in', text: 'Gebruik de ontworpen wanddikte uit het model.' },
    { name: 'Kopieer slicerinstellingen', text: 'Pas het aanbevolen aantal perimeters en de aangepaste lijnbreedte toe indien nodig.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Wand en Perimeteroptimalisatie',
      description: 'Bereken FDM-perimeteraantal en veilige lijnbreedte voor exacte CAD-wanddikte.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hoeveel perimeters moet een 1,2 mm wand gebruiken met een 0,4 mm sproeier?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gewoonlijk drie perimeters. Met een lijnbreedte van 0,40 mm zijn drie perimeters exact 1,20 mm.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe optimaliseer je FDM-wanddikte voor hele perimeters',
      step: [
        { '@type': 'HowToStep', text: 'Voer de sproeierdiameter in.' },
        { '@type': 'HowToStep', text: 'Voer de slicer-lijnbreedte in.' },
        { '@type': 'HowToStep', text: 'Voer de CAD-wanddikte in.' },
        { '@type': 'HowToStep', text: 'Pas de aanbevolen perimeters en lijnbreedte toe.' },
      ],
    },
  ],
};
