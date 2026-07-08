import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'abs-pvb-chemische-egalisatie-tijd-calculator',
  title: 'ABS Aceton en PVB IPA Dampleglating Tijd Calculator',
  description: 'Schat conservatieve dampblootstellings- en droogtijden voor chemische egalisatie van ABS met aceton of PVB met isopropylalcohol op basis van kamervolume, temperatuur, onderdeelvolume en oppervlaktedetail.',
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    materialLabel: 'Materiaal',
    absLabel: 'ABS + aceton',
    pvbLabel: 'PVB + IPA',
    chamberVolumeLabel: 'Dampkamer',
    chamberTemperatureLabel: 'Kamertemp.',
    partVolumeLabel: 'Onderdeelvolume',
    surfaceDetailLabel: 'Oppervlaktedetail',
    fineDetailLabel: 'Fijne details',
    balancedDetailLabel: 'Gebalanceerd',
    coarseDetailLabel: 'Dikke laaglijnen',
    presetsLabel: 'Voorinstellingen',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Tentoonstellingsstuk',
    enclosurePresetLabel: 'Grote behuizing',
    exposureLabel: 'Geschatte blootstelling',
    dryTimeLabel: 'Drogen na egalisatie',
    firstTrialLabel: 'Eerste test',
    riskLabel: 'Detailrisico',
    vaporMapLabel: 'Dampintensiteit',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    partUnitMetric: 'cm³',
    partUnitImperial: 'in³',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Ingangen chemische egalisatie',
    resultsAriaLabel: 'Resultaten chemische egalisatie',
    recommendationGentle: 'zacht venster',
    recommendationStandard: 'goed in de gaten houden',
    recommendationAggressive: 'hoog risico op detailverlies',
    safetyNote: 'Gebruik dit alleen als een conservatieve planningsschatting. Oplosmiddeldamp is ontvlambaar en gevaarlijk: werk weg van ontstekingsbronnen, gebruik ventilatie en PBM, en begin met een korte testblootstelling.',
    copyButton: 'Kopieer egalisatieplan',
    copiedButton: 'Gekopieerd',
    copiedSummaryTemplate: 'Chemische egalisatieschatting: {minutes} min ({seconds} s) blootstelling, eerste test na {trialSeconds} s, ongeveer {dryHours} h drogen.',
  },
  seo: [
    { type: 'title', text: 'Zo schat je de ABS-aceton-dampleglattingstijd zonder details te smelten', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS-aceton-dampleglatting is een gecontroleerd oppervlakte-oplossingsproces. Acetondamp verzacht de buitenste huid van ABS, waardoor zichtbare FDM-laagruggen kunnen ontspannen tot een glanzender oppervlak. Het bruikbare venster is smal: te weinig blootstelling laat laaglijnen onveranderd, terwijl te veel blootstelling randen afrondt, reliëftekst verzacht, kleine gaten sluit en dunne wanden kan laten doorhangen. Een tijdschatting kan daarom het beste worden behandeld als een <strong>startvenster voor korte testmomenten</strong>, niet als een vast recept.',
    },
    {
      type: 'paragraph',
      html: 'De calculator gebruikt vijf praktische variabelen die de egalisatieduur sterk beïnvloeden: polymeer-oplosmiddelpaar, kamervolume, kamertemperatuur, volume van het geprinte onderdeel en oppervlaktedetailniveau. Temperatuur is belangrijk omdat de dampdruk en oplosmiddelactiviteit snel stijgen naarmate de kamer warmer wordt. Onderdeelgrootte is belangrijk omdat grotere onderdelen meer oppervlakte en thermische massa hebben. Detailniveau is belangrijk omdat een miniatuur tandwieltand, logo of klikverbinding kan worden geruïneerd door een tijd die er perfect uitziet op een eenvoudige rechthoekige behuizing.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'verstandige eerste test van de geschatte tijd' },
        { value: 'ABS/PVB', label: 'veelvoorkomende printbare polymeren voor dampegalisatie' },
        { value: 'uren', label: 'droogtijd voor hantering of montage' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dampleglatting is een afwerkingsstap, geen dimensionale kalibratiestap',
      html: 'Als een geprint onderdeel een lager, schroefdraad, afdichting, klikverbinding of perspassing moet bevatten, maskeer dan het kritische gebied of valideer het egalisatieproces op een opofferingsexemplaar. Chemische egalisatie verandert randen en kan functionele toleranties wijzigen.',
    },
    { type: 'title', text: 'ABS met aceton vs PVB met IPA dampegalisatie', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS wordt meestal geëgaliseerd met aceton omdat aceton een effectief oplosmiddel is voor het oppervlak van acrylonitril-butadieen-styreen. PVB, vaak verkocht als filament bedoeld voor transparante of glanzende prints, wordt gewoonlijk geëgaliseerd met isopropylalcohol. Het visuele doel is vergelijkbaar, maar het procesgedrag is anders. ABS met aceton kan snel glanzend en afgerond worden, vooral in een warme kamer. PVB met IPA is vaak vergevingsgezinder voor geleidelijke glansontwikkeling, maar kan nog steeds scherpte verliezen bij te lange blootstelling.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS met acetondamp',
          description: 'Snelle, sterke egalisatiewerking met hoog risico op verzachting van kleine tekst, hoeken, pinnen en dunne wanden bij warme kamer.',
          points: ['Het best voor zichtbare behuizingen en rekwisieten', 'Gevoelig voor temperatuur', 'Heeft lange uitgassing nodig voor gebruik in gesloten ruimtes'],
        },
        {
          title: 'PVB met IPA damp',
          description: 'Vaak gekozen voor glanzende visuele onderdelen en doorschijnende prints waar een langzamere, beter beheersbare egalisatierespons gewenst is.',
          highlight: true,
          points: ['Nuttig voor tentoonstellingsstukken', 'Kan detail beter behouden met korte cycli', 'Goed drogen voor polijsten of verpakken'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Materiaal', 'Typisch oplosmiddel', 'Proceskarakter', 'Belangrijkste foutmodus'],
      rows: [
        ['ABS', 'Aceton', 'Snelle oppervlakteverzachting en sterke glans', 'Afgeronde randen, doorhangende dunne wanden, gesloten gaten'],
        ['PVB', 'Isopropylalcohol', 'Geleidelijkere glans en waasvermindering', 'Kleverig oppervlak, uitgesmeerde textuur, verzacht fijn detail'],
        ['ASA', 'Aceton of andere oplosmiddelen', 'Vergelijkbare familie als ABS maar afhankelijk van formulering', 'UV-bestendige onderdelen kunnen nog scherpe randen verliezen'],
        ['PLA/PETG', 'Niet geschikt voor deze calculator', 'Gangbare oplosmiddelen gedragen zich niet zoals ABS/PVB-egalisatie', 'Slechte afwerking of onveilige oplosmiddelexperimenten'],
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik de materiaalinstelling als een oplosmiddelpaar, niet alleen als een plastic naam',
      html: 'Selecteer ABS wanneer het proces acetondampleglatting is en PVB wanneer het IPA-dampleglatting is. Verschillende filamentmengsels, additieven, pigmenten en gloeigeschiedenis kunnen de werkelijke respons veranderen, dus test met de exacte spoel die voor de uiteindelijke print wordt gebruikt.',
    },
    { type: 'title', text: 'Waarom kamervolume de duur van chemische egalisatie verandert', level: 2 },
    {
      type: 'paragraph',
      html: 'Het kamervolume beïnvloedt hoe snel de dampconcentratie opbouwt en hoe gelijkmatig deze het geprinte onderdeel omringt. Een kleine pot kan snel agressief worden omdat een kleine hoeveelheid oplosmiddel een kleine kopruimte inneemt. Een grotere kamer heeft meestal meer tijd nodig om dezelfde effectieve dampomgeving te bereiken, maar kan gelijkmatiger zijn als de oplosmiddelbron is verdeeld en het onderdeel boven vloeistofcontact is verhoogd. De calculator verhoogt de blootstellingstijd voorzichtig naarmate het kamervolume groeit, omdat de relatie reëel is maar niet perfect lineair in thuisafwerkingsopstellingen.',
    },
    {
      type: 'paragraph',
      html: 'Gelijkmatigheid is net zo belangrijk als gemiddelde concentratie. Een onderdeel dat te dicht bij een met oplosmiddel doordrenkte doek, plas of verwarmde plaat wordt geplaatst, kan een directionele aanval krijgen: één zijde wordt glanzend en zacht terwijl de tegenoverliggende zijde mat blijft. Een hogere kamer kan ook gradiënten creëren, vooral als damp condenseert op het deksel en druppelt. De veiligste interpretatie van een berekende tijd is daarom een gepland inspectie-interval: verwijder het onderdeel, inspecteer de natte glans en stop voordat scherpe kenmerken beginnen te vloeien.',
    },
    {
      type: 'list',
      items: [
        'Plaats het onderdeel op een oplosmiddelbestendige standaard zodat het nooit vloeibaar oplosmiddel raakt.',
        'Houd absorberende oplosmiddelbronnen uit de buurt van het modeloppervlak om eenzijdige overbelichting te voorkomen.',
        'Gebruik een kamer die groot genoeg is zodat damp rond alle zichtbare zijden kan circuleren.',
        'Vermijd druppelende condensatie van het deksel; druppels creëren littekens, kraters en glanzende plekken.',
        'Verhoog de hoeveelheid oplosmiddel niet eindeloos om een grote kamer te compenseren; concentratie en veiligheidsrisico stijgen samen.',
      ],
    },
    {
      type: 'card',
      title: 'Een grotere kamer is niet automatisch veiliger',
      html: 'Grote afgesloten volumes kunnen meer ontvlambare damp bevatten. Een grotere kamer kan egalisatie vertragen, maar kan ook een grotere gevaarlijke atmosfeer creëren. Gebruik de kleinste praktische kamer die het onderdeel ruimte en gelijkmatige blootstelling geeft.',
    },
    { type: 'title', text: 'Temperatuur, dampdruk en detailverlies', level: 2 },
    {
      type: 'paragraph',
      html: 'Temperatuur is een van de sterkste inputs omdat oplosmiddelverdamping toeneemt naarmate de kamer warmer wordt. Een paar graden kunnen de afwerking veranderen van langzame satijnegalisatie naar snelle glans en randafronding. Warme acetondamp rond ABS is bijzonder onvergeeflijk: het oppervlak kan in korte tijd van mat naar nat ogend naar verzacht gaan. De calculator verkort de blootstellingstijd naarmate de kamertemperatuur stijgt en verhoogt de risicoscore wanneer temperaturen boven een normale kamertemperatuurreferentie komen.',
    },
    {
      type: 'paragraph',
      html: 'Actieve verwarming is waar veel hobby-egalisatieprocessen onveilig worden. Aceton- en IPA-dampen zijn ontvlambaar en geïmproviseerde verwarmingen, schakelaars, relais, vonken, hete platen en slecht afgesloten elektronica kunnen ernstig brandgevaar creëren. Als de temperatuur al wordt geregeld, moet dit gebeuren met apparatuur ontworpen voor gevaarlijke dampcontexten, niet met een open verwarming in een afgesloten container. Voor de meeste gebruikers is dampegalisatie op kamertemperatuur met korte inspecties de meer verdedigbare workflow.',
    },
    {
      type: 'table',
      headers: ['Kamerconditie', 'Verwacht gedrag', 'Praktische reactie'],
      rows: [
        ['Koele ruimte onder 18 °C', 'Langzame dampwerking en vertraagde glans', 'Gebruik langere intervallen maar controleer op ongelijke condensatie'],
        ['Kamertemperatuur 20-25 °C', 'Voorspelbare basislijn voor de meeste tests', 'Begin met de calculatorschatting en eerste test'],
        ['Warme kamer 26-32 °C', 'Snellere verzachting en hoger detailrisico', 'Verkort cycli en vermijd fijne functionele onderdelen'],
        ['Hete of actief verwarmde kamer', 'Zeer agressieve dampomgeving', 'Niet improviseren; brand- en overbelichtingsrisico stijgen sterk'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Gebruik nooit open vuur of blootgestelde verwarmingselementen',
      html: 'Aceton- en isopropylalcoholdampen kunnen ontbranden. Houd egalisatiekamers uit de buurt van vlammen, vonken, heet gereedschap, schakelaars die vonken, borstelmotoren, verwarmingselementen niet geschikt voor dampomgeving en statisch-gevoelige hantering.',
    },
    { type: 'title', text: 'Onderdeelvolume, oppervlakte en geometriegevoeligheid', level: 2 },
    {
      type: 'paragraph',
      html: 'De invoer genaamd onderdeelvolume is een praktische indicator voor de totale grootte van het onderdeel. Het is geen perfecte vervanging voor oppervlakte, maar het is gemakkelijk te schatten uit slicerstatistieken en geeft meestal aan of de print een klein knopje, een displayfiguur of een groot behuizingspaneel is. Grotere onderdelen hebben vaak langere blootstelling nodig om een gelijkmatige visuele afwerking te ontwikkelen, maar hebben ook meer randen, hoeken en dunne secties die ongelijke oplosmiddelopname kunnen vertonen.',
    },
    {
      type: 'paragraph',
      html: 'Geometrie kan het resultaat domineren. Een gladde cilindrische vaas en een traliebeugel kunnen hetzelfde volume maar een totaal verschillende egalisatietolerantie hebben. Dunne ribben, scherpe reliëflettering, kleine gaatjes, interne kanalen, zwaluwstaarten en clips verzachten sneller dan brede platte oppervlakken. Wanneer het onderdeel kritische geometrie heeft, gebruik dan de fijne-detailinstelling, zelfs als laaglijnen zichtbaar zijn, en herhaal korte cycli in plaats van één lange blootstelling te proberen.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dampleglatting', definition: 'Een afwerkingsproces waarbij oplosmiddeldamp alleen de buitenste oppervlaktelaag van een polymeerprint verzacht.' },
        { term: 'Overbelichting', definition: 'Een egalisatie-interval lang genoeg om details af te ronden, dunne wanden te vervormen of een kleverig oppervlak achter te laten.' },
        { term: 'Uitgassing', definition: 'De periode na egalisatie waarin geabsorbeerd oplosmiddel uit het verzachte oppervlak verdampt.' },
        { term: 'Oppervlaktedetail', definition: 'Kleine geometrie zoals tekst, textuur, gaten, ribbels, clips en scherpe randen die verloren kan gaan tijdens egalisatie.' },
        { term: 'Opofferingsproefstuk', definition: 'Een kleine testprint gemaakt van hetzelfde filament en instellingen om de oplosmiddelrespons te valideren voordat het echte onderdeel wordt afgewerkt.' },
      ],
    },
    {
      type: 'summary',
      title: 'Geometrieregels voor het kiezen van detailniveau',
      items: [
        'Gebruik fijn detail voor tekst, tandwielen, kleine gaten, klikverbindingen, schroefdraad of dunne wanden.',
        'Gebruik gebalanceerd voor decoratieve onderdelen met matige laaglijnen en geen nauwe passingen.',
        'Gebruik dikke laaglijnen alleen voor eenvoudige vormen waar afgeronde randen acceptabel zijn.',
        'Splits complexe modellen in gemaskerde en ongemaskerde zones wanneer alleen de buitenste schil glans nodig heeft.',
      ],
    },
    { type: 'title', text: 'De calculatoruitvoer lezen', level: 2 },
    {
      type: 'paragraph',
      html: 'De blootstellingsuitvoer is de geschatte totale damptijd voor een conservatieve eerste poging. Het wordt weergegeven in minuten en seconden omdat korte afwerkingsvensters gemakkelijker te beheren zijn met een timer. De eerste test is bewust korter, meestal ongeveer een derde van de berekende blootstelling. Het onderdeel vroeg verwijderen laat je controleren of het oppervlak begint te glanzen voordat detailverlies permanent wordt.',
    },
    {
      type: 'paragraph',
      html: 'De droogtijd schat hoe lang de print moet rusten voor nauwe hantering, montage, schilderen, verpakken of afdichten. Drogen gaat niet alleen over het oppervlak dat droog aanvoelt. Oplosmiddel kan in het verzachte polymeer achterblijven en de passing, geur, verfhechting en mechanisch gevoel blijven beïnvloeden. Met aceton geëgaliseerde ABS-onderdelen hebben vaak langere uitgassing nodig dan met IPA geëgaliseerde PVB-onderdelen, vooral wanneer het onderdeel dik is of de blootstelling agressief was.',
    },
    {
      type: 'proscons',
      title: 'Eén lange blootstelling vs meerdere korte cycli',
      items: [
        { pro: 'Een enkele blootstelling is sneller en gemakkelijker te plannen.', con: 'Het geeft weinig waarschuwing voordat fijne kenmerken verzachten.' },
        { pro: 'Korte cycli maken het gemakkelijker om te stoppen bij een satijn- of halfglanzende afwerking.', con: 'Ze vereisen meer hantering en herhaalde kameropening.' },
        { pro: 'Meerdere inspecties verminderen de kans op het vernietigen van een eenmalige print.', con: 'De afwerking kan iets minder uniform zijn als het onderdeel afkoelt of droogt tussen cycli.' },
      ],
    },
    {
      type: 'message',
      title: 'Beste gebruik van de schatting',
      html: 'Stel een timer in voor de eerste test, inspecteer het onderdeel onder strijklicht en ga dan verder in korte stappen. Stop terwijl laaglijnen nog nauwelijks zichtbaar zijn; het oppervlak ontspant vaak nog een korte tijd na verwijdering.',
    },
    { type: 'title', text: 'Veilige workflow voor chemische egalisatie van ABS en PVB', level: 2 },
    {
      type: 'paragraph',
      html: 'Een veilige workflow begint voordat het oplosmiddel wordt geopend. Print een klein proefstuk met hetzelfde filament, laaghoogte, wandenaantal en koelinstellingen. Reinig het uiteindelijke onderdeel zodat stof en oliën niet onder de verzachte huid worden opgesloten. Bereid een niet-reactieve standaard, timer, handschoenen compatibel met het oplosmiddel, oogbescherming, ventilatie en een plaats waar het onderdeel kan drogen zonder te worden aangeraakt. Houd oplosmiddelcontainers gesloten wanneer je de kamer niet actief aan het vullen bent.',
    },
    {
      type: 'list',
      items: [
        'Bevestig dat het filament daadwerkelijk ABS of PVB is, niet PLA, PETG, PC-mengsel of onbekend gerecycled materiaal.',
        'Verwijder ondersteuningen en schuur alleen vóór egalisatie; schuren na egalisatie kan de glans ongelijkmatig doorsnijden.',
        'Maskeer gaten, lagers, schroefdraad en pasvlakken als afmetingen belangrijk zijn.',
        'Begin met de eerste testtijd en voeg dan korte intervallen toe als de afwerking nog te mat is.',
        'Droog het onderdeel in een geventileerde ruimte tot oplosmiddelgeur en kleverigheid verdwenen zijn.',
        'Voer oplosmiddeldoeken en verontreinigde materialen af volgens de lokale regels voor gevaarlijk afval.',
      ],
    },
    {
      type: 'tip',
      title: 'Beoordeel de afwerking niet terwijl het oppervlak nat is',
      html: 'Een vers blootgesteld ABS- of PVB-oppervlak kan glanzender lijken dan het na drogen zal zijn. Inspecteer zowel glans als geometrie: als hoeken gezwollen lijken of kleine tekst zacht wordt, stop dan zelfs als laaglijnen nog zwak zichtbaar zijn.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ventilatie is onderdeel van de procestijd',
      html: 'Drogen na egalisatie moet plaatsvinden waar dampen zich niet kunnen ophopen. Een onderdeel dat onmiddellijk in een la, verzendtas, vitrine of elektronica-behuizing wordt geplaatst, kan geur en oplosmiddel langer vasthouden dan verwacht.',
    },
    { type: 'title', text: 'Veelvoorkomende problemen en corrigerende maatregelen', level: 2 },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke oorzaak', 'Volgende aanpassing'],
      rows: [
        ['Laaglijnen nog scherp', 'Blootstelling te kort of kamer te koel', 'Herhaal met korte stappen in plaats van tijd te verdubbelen'],
        ['Randen afgerond of tekst wazig', 'Overbelichting voor het detailniveau', 'Gebruik fijne-detailinstelling, lagere temperatuur of maskeer kenmerken'],
        ['Kleverig oppervlak na drogen', 'Te veel oplosmiddel geabsorbeerd of onvoldoende ventilatie', 'Verleng droogtijd en verminder toekomstige blootstelling'],
        ['Eén zijde glanzender dan andere', 'Ongelijke dampbron of onderdeel te dicht bij oplosmiddel', 'Verhoog onderdeel, verdeel bron, draai alleen tussen cycli'],
        ['Witte waas of bewolkte vlekken', 'Condensatie, vocht of ongelijke verdamping', 'Verminder kamerverzadiging en vermijd dekseldruppels'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Als een onderdeel kleverig wordt, probeer het dan niet te repareren door onmiddellijk meer damp toe te voegen. Meer oplosmiddel verdiept meestal de verzachte zone. Laat het onderdeel volledig drogen en beslis dan of een zeer korte vervolgcyclus het risico waard is. Als randen al zijn gevloeid, kan de vorm niet worden hersteld door drogen. Voor kritische onderdelen is de betrouwbaardere oplossing opnieuw printen met aangepaste slicer-instellingen en een korter afwerkingsvenster.',
    },
    {
      type: 'card',
      title: 'Slicerinstellingen die egalisatietijd verminderen',
      html: 'Lagere laaghoogte, stabiele extrusie, droog filament, passende koeling en goed afgestelde pressure advance verminderen de hoeveelheid benodigd chemisch werk. Chemische egalisatie moet een print verfijnen, niet ernstige ringing, gaten, bobbels, natte filamenttextuur of onder-extrusie verbergen.',
    },
    {
      type: 'summary',
      title: 'Praktische afwerkingschecklist',
      items: [
        'Schat de blootstelling met het exacte materiaal, kamer, temperatuur, onderdeelgrootte en detailniveau.',
        'Voer een opofferingsproefstuk of eerste test uit voordat je het definitieve onderdeel afwerkt.',
        'Gebruik korte cycli wanneer detail belangrijk is en stop voordat het oppervlak scherpte verliest.',
        'Geef voldoende droogtijd zodat oplosmiddelgeur, kleverigheid en dimensionale zachtheid verdwijnen.',
        'Behandel ontvlambare dampbeheersing als een veiligheidsvereiste, niet als een optioneel gemak.',
      ],
    },
  ],
  faq: [
    {
      question: 'Hoe lang moet ABS in acetondamp blijven?',
      answer: 'Er is geen universele tijd omdat kamervolume, temperatuur, onderdeelgeometrie en filamentformulering ertoe doen. Gebruik de calculatorschatting als startpunt en inspecteer dan op de kortere eerste testtijd voordat je doorgaat.',
    },
    {
      question: 'Kan PVB worden geëgaliseerd met isopropylalcoholdamp?',
      answer: 'Ja, veel PVB-filamenten zijn ontworpen voor IPA-egalisatie. Het proces is meestal geleidelijker dan ABS met aceton, maar overbelichting kan het oppervlak nog steeds kleverig maken of fijne details vervagen.',
    },
    {
      question: 'Verkort een warmere kamer de egalisatietijd?',
      answer: 'Ja. Warmere oplosmiddeldamp werkt meestal sneller, maar verhoogt ook de ontvlambaarheid en het detailverliesrisico. Vermijd geïmproviseerde verwarmingen en houd damp weg van ontstekingsbronnen.',
    },
    {
      question: 'Hoe lang moet een geëgaliseerd onderdeel drogen?',
      answer: 'Reken op uren, niet minuten. Met aceton geëgaliseerd ABS heeft vaak langere uitgassing nodig dan met IPA geëgaliseerd PVB, vooral voor dikke onderdelen of agressieve blootstellingen.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Kies het materiaal-oplosmiddelpaar', text: 'Selecteer ABS voor acetondampleglatting of PVB voor IPA-dampleglatting.' },
    { name: 'Voer kamercondities in', text: 'Voeg dampkamervolume en kamertemperatuur toe met metrische of US-eenheden.' },
    { name: 'Beschrijf het onderdeel', text: 'Voer het geschatte onderdeelvolume in en kies een oppervlaktedetailniveau dat overeenkomt met de kleinste kenmerken.' },
    { name: 'Gebruik de eerste test', text: 'Inspecteer het onderdeel op de kortere testtijd voordat je de volledige geschatte blootstelling uitvoert.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ABS Aceton en PVB IPA Dampleglating Tijd Calculator',
      description: 'Schat chemische dampegalisatie-blootstellings- en droogtijd voor ABS-aceton en PVB-IPA afwerking.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hoe lang moet ABS in acetondamp blijven?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gebruik een conservatieve schatting op basis van kamervolume, temperatuur, onderdeelgrootte en detailniveau en inspecteer dan op een kortere eerste testtijd.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Hoe schat je chemische egalisatietijd voor ABS- of PVB-prints',
      step: [
        { '@type': 'HowToStep', text: 'Selecteer ABS met aceton of PVB met IPA.' },
        { '@type': 'HowToStep', text: 'Voer kamervolume en -temperatuur in.' },
        { '@type': 'HowToStep', text: 'Voer onderdeelvolume en oppervlaktedetailniveau in.' },
        { '@type': 'HowToStep', text: 'Begin met de eerste test en ga alleen verder als detail veilig blijft.' },
      ],
    },
  ],
};
