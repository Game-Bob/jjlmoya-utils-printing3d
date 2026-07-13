import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'olifantenpoot-compensatie-calculator';
const title = 'Olifantenpoot Compensatie Calculator: Precieze Dimensionale Correctie';
const description = 'Bereken de negatieve horizontale expansie en CAD-afschuiningdiepte voor de eerste laag van 3D-printen met behulp van gemeten dimensionale fout, laaghoogte, Z-offsetdruk en bedtemperatuur.';

const faqData = [
  {
    question: 'Wat is de beste olifantenpoot-compensatiewaarde?',
    answer: 'De beste waarde is de gemeten basisfout gecorrigeerd voor eerste laaghoogte, effectieve Z-druk en bedtemperatuur. Deze calculator rapporteert het als een negatieve horizontale expansiewaarde voor de slicer.',
  },
  {
    question: 'Moet ik horizontale expansie of een CAD-afschuining gebruiken?',
    answer: 'Gebruik slicer horizontale expansie voor snelle profielcorrectie. Gebruik een CAD-afschuining voor functionele onderdelen waar de onderrand een ander onderdeel raakt, op een referentieoppervlak rust, of herhaalbaar moet blijven tussen slicers.',
  },
  {
    question: 'Waarom beïnvloedt de bedtemperatuur olifantenpoot?',
    answer: 'Een heter bed houdt het onderste polymeer langer zachter. De verzachte draad kan horizontaal vloeien onder nozzle-druk, dus de calculator verhoogt de correctie boven het referentiepunt van 60 °C.',
  },
  {
    question: 'Is olifantenpoot hetzelfde als over-extrusie?',
    answer: 'Nee. Over-extrusie treft vele lagen. Olifantenpoot is geconcentreerd aan de basis waar de eerste lagen worden samengedrukt en verwarmd door het bed, hoewel over-extrusie het kan verergeren.',
  },
];

const howToData = [
  { name: 'Print een testcoupon', text: 'Gebruik hetzelfde materiaal, dezelfde bedtemperatuur, eerste laaghoogte en eerste laaginstellingen als bij de productieprint.' },
  { name: 'Meet de basisfout', text: 'Trek de stabiele bovenwandmaat af van de breedste basismaat.' },
  { name: 'Voer druk en temperatuur in', text: 'Geef de eerste laaghoogte, effectieve Z-drukspleet en bedtemperatuur op.' },
  { name: 'Pas de correctie toe', text: 'Gebruik de negatieve horizontale expansiewaarde in de slicer of modelleer de voorgestelde 45-graden afschuining.' },
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: 'Olifantenpoot compensatie-ingangen',
    resultsAriaLabel: 'Olifantenpoot correctieresultaten',
    canvasAriaLabel: 'Doorsnede visualisatie van huidig en gecorrigeerd olifantenpootprofiel',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperiaal',
    materialLabel: 'Materiaalvoorinstelling',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: 'Aangepast',
    measuredErrorLabel: 'Gemeten basisfout',
    layerHeightLabel: 'Eerste laaghoogte',
    zPressureLabel: 'Z-offset drukspleet',
    bedTemperatureLabel: 'Bedtemperatuur',
    targetToleranceLabel: 'Doeltolerantie',
    expansionLabel: 'Slicer-expansie',
    chamferLabel: 'CAD-afschuining',
    thermalFactorLabel: 'Thermische factor',
    verdictLabel: 'Dimensionaal nauwkeurigheidsdoel',
    currentProfileLabel: 'Gemeten olifantenpoot',
    correctedProfileLabel: 'Gecorrigeerd profiel',
    slicerCommandLabel: 'Slicer-opdracht',
    cadCommandLabel: 'CAD-opdracht',
    copyButton: 'Kopieer correctierapport',
    copiedButton: 'Gekopieerd',
    copyTemplate: 'Olifantenpootcompensatie: slicer horizontale expansie {expansion}, CAD-afschuining {chamfer} bij 45°, thermische factor {phi}, oordeel: {verdict}.',
    slicerCommandTemplate: 'Horizontale expansie: {expansion} {unit}',
    cadCommandTemplate: '45° x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_corr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | Z-drukverhouding {ratio}',
    optimalVerdict: '< 0,05 mm tolerantie: correctie optioneel, verifiëren met schuifmaat.',
    watchVerdict: 'Gecontroleerde afwijking: slicercompensatie toepassen en coupon herprinten.',
    severeVerdict: 'Ernstige basisverbreding: Z-druk corrigeren voordat u op slicer-offset vertrouwt.',
    mmUnit: 'mm',
    inchUnit: 'in',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '°',
    multiplierUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'Olifantenpootcompensatie als dimensionaal nauwkeurigheidsprobleem', level: 2 },
    { type: 'paragraph', html: 'Olifantenpoot is de naar buiten gerichte expansie van de eerste geprinte lagen voorbij de nominale CAD-grens. Op een kalibratiekubus verschijnt het als een basislip. Op technische onderdelen wordt het een functionele fout: zwaluwstaarten klemmen, gaten nabij het bouwplateau sluiten, klikverbindingen verliezen speling, pasplaten wiebelen op een verhoogde rand en meetblokken zitten niet meer vlak. Een nuttige <strong>olifantenpoot compensatiecalculator</strong> kan daarom niet worden behandeld als een cosmetische stromingsaanpassing. Het moet een gemeten dimensionale fout omzetten in een negatieve horizontale expansiewaarde en, waar mogelijk, een CAD-afschuining die het samengedrukte materiaalpad uit het ontwerp zelf verwijdert.' },
    { type: 'paragraph', html: 'Deze calculator modelleert de correctie op basis van drie fysieke inputs die het defect sterk beïnvloeden: gemeten basisfout, eerste laaghoogte en de effectieve Z-drukspleet. De kernrelatie is <code>E_corr = Fout x (Laaghoogte / ZOffsetDruk) x phi_temp</code>. De temperatuurvermenigvuldiger <code>phi_temp</code> neemt toe boven een referentiebed van 60 °C omdat een hetere basis het polymeer langer zachter houdt en de nozzle-belasting het materiaal zijwaarts kan duwen. Het resultaat wordt gerapporteerd als negatieve horizontale expansie voor de slicer en als 45-graden afschuiningsdiepte voor CAD.' },
    { type: 'stats', columns: 3, items: [
      { value: '0,01 mm', label: 'invoerresolutie voor dimensionale afstemming' },
      { value: '45°', label: 'standaard CAD-afschuiningshoek' },
      { value: 'phi_temp', label: 'bedtemperatuur-stromingsvermenigvuldiger' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Meet de fout, niet de visuele lip', html: 'Print een vierkante of rechthoekige coupon, meet de nominale wand of buitenmaat boven de basis, meet dan dezelfde maat over de eerste lagen. Het verschil tussen deze twee metingen is de olifantenpootfout. Schat niet op basis van een foto; het gereedschap is ontworpen voor schuifmaatgegevens.' },

    { type: 'title', text: 'Waarom olifantenpoot ontstaat: nozzle-druk, warmte en kunststofstroming', level: 2 },
    { type: 'paragraph', html: 'De eerste laag wordt opzettelijk samengedrukt zodat het filament het bed bevochtigt en hecht. Die compressie verandert de nozzle in een kleine drukaanbrenger. Gesmolten polymeer verlaat de nozzle, wordt samengeperst tussen nozzle en bouwoppervlak en moet het beschikbare volume innemen. Wanneer de Z-spleet te klein is, is er niet genoeg verticale ruimte voor de bevolen extrusiedraad, dus vloeit het materiaal zijwaarts. De basis wordt breder, zelfs wanneer de rest van de print dimensionaal nauwkeurig is.' },
    { type: 'paragraph', html: 'De bedtemperatuur verandert de ernst. PLA bij 60 °C kan dicht bij zijn glasovergangsgebied liggen, PETG bij 75 °C blijft plakkerig en meegaand, en ABS of ASA op een 100 °C-bed blijft warm in de eerste paar lagen. Een heter bed verbetert niet alleen de hechting; het vertraagt ook de stolling aan de basis. Daarom past deze calculator een thermische factor toe: <strong>1,00 bij 60 °C, plus 0,05 voor elke extra 5 °C</strong>. Een 75 °C PETG-bed gebruikt daarom een factor van ongeveer 1,15 vóór het begrenzen.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Z druk gedomineerd', description: 'Een zeer lage nozzle-afstand maakt de draad plat en duwt kunststof naar buiten. De fout is het scherpst in de eerste laag en verbetert vaak na Z-offsetcorrectie.', points: ['Brede eerste lijn', 'Glanzend verpletterd oppervlak', 'Brim-achtige rand'] },
      { title: 'Thermisch gedomineerd', description: 'De basis blijft zacht omdat bed- of kamerwarmte hoog is. De lip kan zich uitstrekken over meerdere lagen, zelfs met een redelijke eerste laag.', highlight: true, points: ['Afgeronde onderrand', 'Vaak bij PETG of ABS', 'Langzame koeling'] },
      { title: 'Stromingsgedomineerd', description: 'Extrusievermenigvuldiger, filamentdiameter of eerste laagstroming is te hoog. Het hele onderste gebied kan overvuld lijken, niet alleen de omtrek.', points: ['Ruwe bovenkant van eerste laag', 'Te brede lijnen', 'Gesloten gaten'] },
    ] },
    { type: 'tip', title: 'Gebruik de Z offset als invoer, niet als gok', html: 'De Z-drukspleet is de effectieve speling die de draad in het bed dwingt. Als uw slicer een eerste laag van 0,20 mm rapporteert maar de werkelijke samendrukking zich gedraagt als 0,10 mm, gebruik dan de kleinere drukspleet. Dat maakt de berekende compensatie groter, wat overeenkomt met de fysica van een meer samengedrukte draad.' },

    { type: 'title', text: 'Hoe de basisuitzetting voor de calculator te meten', level: 2 },
    { type: 'paragraph', html: 'Gebruik een eenvoudige testcoupon met een bekende buitenmaat, zoals 20,00 mm, 30,00 mm of 40,00 mm. De coupon moet rechte verticale zijden hebben, ten minste 8 tot 12 mm hoog en geen afschuining bij de eerste test. Meet de lichaamsmaat enkele millimeters boven het bed waar de olifantenpoot verdwenen is. Meet dan dezelfde maat op het breedste deel van de basis. Het verschil is de totale buitenfout voor die as.' },
    { type: 'paragraph', html: 'Als een 20,00 mm-kubus 20,02 mm in het midden meet maar 20,24 mm aan de basis, is de basisfout ten opzichte van het stabiele lichaam 0,22 mm. Voer 0,22 mm in in plaats van het verschil met de nominale maat. Dit verwijdert niet-gerelateerde krimp, XY-stapfout of slicer-lijnbreedtevertekening uit de olifantenpootberekening. U isoleert de basisvervorming, niet het kalibreren van de hele printer.' },
    { type: 'list', items: [
      'Meet nadat het onderdeel is afgekoeld tot kamertemperatuur, vooral voor ABS, ASA, PETG en grote PLA-onderdelen.',
      'Gebruik lichte schuifmaatdruk; het indrukken van een verzachte of getextureerde basis kan de echte lip verbergen.',
      'Neem metingen aan X- en Y-zijden omdat bedbeweging, ventilatorrichting en portaalscheefstand het defect asymmetrisch kunnen maken.',
      'Negeer brim- en skirtmateriaal. Verwijder de brim schoon voordat u de werkelijke onderdeelwand meet.',
      'Herprint dezelfde coupon na het toepassen van compensatie, zodat de volgende meting vergelijkbaar is.',
    ] },
    { type: 'table', headers: ['Observatie', 'Waarschijnlijke oorzaak', 'Beste eerste actie'], rows: [
      ['Basis is breder maar bovenwand is nauwkeurig', 'Olifantenpoot door eerste-laagdruk', 'Gebruik deze calculator en pas negatieve horizontale expansie toe.'],
      ['Elke laag is te groot', 'XY-schaal, extrusievermenigvuldiger of filamentdiameterfout', 'Kalibreer stroming en XY vóór olifantenpootcompensatie.'],
      ['Alleen hoeken bollen uit', 'Drukvooruitloop, snelheid of koelingsprobleem', 'Stel drukvooruitloop of hoeksnelheid af.'],
      ['Onderkant is ruw en doorschijnend', 'Nozzle te dichtbij of eerste-laagstroming te hoog', 'Verhoog Z-offset of verlaag eerste-laagstroming vóór compensatie.'],
    ] },

    { type: 'title', text: 'Negatieve horizontale expansie vs CAD-afschuining', level: 2 },
    { type: 'paragraph', html: 'Slicer horizontale expansie verschuift de polygoongrens naar binnen of buiten vóór het genereren van gereedschapspaden. Voor olifantenpootcorrectie is de instelling normaal gesproken negatief: als de basis 0,20 mm te breed meet, heeft de slicer mogelijk een waarde rond -0,20 mm nodig, hier aangepast door laaghoogte, Z-druk en bedtemperatuur. Dit is snel, omkeerbaar en nuttig voor batches waarbij elk onderdeel een vergelijkbare eerste-laagvervorming deelt.' },
    { type: 'paragraph', html: 'Een CAD-afschuining verwijdert materiaal uit het model zelf. De calculator rapporteert een 45-graden afschuiningsdiepte als <code>Fout x sqrt(2)</code>, wat overeenkomt met een diagonaal vlak dat de horizontale basislip opruimt. CAD-afschuiningen zijn vaak beter voor kritische interfaces omdat ze de beoogde bovenwandafmetingen behouden terwijl ze de eerste laag een gecontroleerd reliëfpad geven. Ze zijn ook beter overdraagbaar tussen slicers omdat de geometrie de compensatie draagt.' },
    { type: 'proscons', title: 'Een correctiemethode kiezen', items: [
      { pro: 'Negatieve horizontale expansie kan snel worden gewijzigd per materiaal- of printerprofiel.', con: 'Het kan kleine tekst, dunne wanden, pennen en gaten beïnvloeden als het globaal wordt toegepast.' },
      { pro: 'CAD-afschuiningen zijn expliciet en robuust voor pasvlakken nabij het bouwplateau.', con: 'Ze vereisen modelbewerkingen en zijn mogelijk niet handig voor gedownloade onderdelen.' },
      { pro: 'Het combineren van een milde slicer-offset met een kleine afschuining kan ernstige PETG- of ABS-basen beheersen.', con: 'Het stapelen van correcties zonder opnieuw te meten kan het onderdeel te klein maken.' },
    ] },
    { type: 'message', title: 'Niet blindelings compenseren', html: 'Als de eerste laag zichtbaar oververpletterd is, corrigeer dan eerst de Z-offset. Compensatie moet de resterende voorspelbare basisuitzetting verwijderen, niet een nozzle verbergen die door de eerste laag ploegt.' },

    { type: 'title', text: 'Aanbevolen compensatie per materiaal', level: 2 },
    { type: 'paragraph', html: 'Materiaalgedrag is belangrijk omdat hechtingstemperatuur, glasovergang, koelsnelheid en viscositeit beïnvloeden hoe ver de onderste draad kan vloeien voordat deze bevriest. PLA reageert vaak goed op een kleine negatieve horizontale expansie nadat de Z-offset redelijk is. PETG heeft mogelijk een grotere correctie nodig omdat het gewoonlijk heter op het bed wordt geprint en met een eerste laag die is afgestemd op sterke hechting. ABS en ASA kunnen CAD-reliëf vereisen op functionele onderdelen omdat het hete bed en de kamer de basis langer zacht houden.' },
    { type: 'table', headers: ['Materiaal', 'Typisch bedbereik', 'Starttolerantiedoel', 'Compensatieopmerkingen'], rows: [
      ['PLA', '55-65 °C', '< 0,05 mm', 'Begin met nauwkeurige Z-offset, gebruik dan kleine negatieve horizontale expansie. Een afschuining is nuttig voor perspassingsbasissen.'],
      ['PETG', '70-85 °C', '< 0,07 mm', 'Verwacht een hogere thermische factor. Vermijd overmatige eerste-laagstroming omdat PETG een plakkerige afgeronde lip kan vormen.'],
      ['ABS/ASA', '90-110 °C', '< 0,08 mm', 'Gebruik CAD-afschuiningen voor productieonderdelen. Kamerwarmte kan de eerste lagen meegaand houden.'],
      ['TPU', '40-60 °C', 'toepassingsspecifiek', 'Flexibel filament kan vervormen onder schuifmaten. Meet voorzichtig en geef de voorkeur aan geometrisch reliëf boven agressieve globale offsets.'],
    ] },
    { type: 'card', title: 'Waarom de tabel een startpunt is', html: 'Een getextureerd PEI-vel, glad glazen bed, nozzle-diameter, lijnbreedte, eerste-laagsnelheid, koelvertraging, kamertemperatuur en filamentmerk kunnen allemaal de gemeten fout veranderen. De tabel stelt verwachtingen; de calculator moet worden aangestuurd door uw gemeten coupon.' },
    { type: 'summary', title: 'Prioriteiten voor materiaalafstemming', items: [
      'PLA: corrigeer eerst Z-offset, gebruik dan kleine slicercompensatie.',
      'PETG: houd bedtemperatuur en eerste-laagstroming in de gaten omdat de basis mobiel blijft.',
      'ABS/ASA: geef de voorkeur aan CAD-afschuiningen op productie-interfaces en verifieer na kameropwarming.',
      'Flexibele materialen: meetmethode is belangrijk omdat de basis kan samendrukken onder de schuifmaatbekken.',
    ] },

    { type: 'title', text: 'Slicer-instellingen die interageren met olifantenpootcompensatie', level: 2 },
    { type: 'paragraph', html: 'Verschillende slicers tonen de instelling onder namen zoals Horizontal Expansion, Initial Layer Horizontal Expansion, Elephant Foot Compensation, XY Compensation of eerste-laagexpansie. Een globale horizontale expansie verandert de hele onderdeelomtrek. Een alleen-eerste-laag-instelling beïnvloedt alleen de onderste lagen en is meestal veiliger voor dimensionale nauwkeurigheid. Wanneer een slicer beide ondersteunt, gebruik dan eerste-laagcompensatie voor olifantenpoot en reserveer globale XY-compensatie voor gekalibreerde groottefouten die over de volledige hoogte aanhouden.' },
    { type: 'paragraph', html: 'Lijnbreedte en eerste-laagstroming interageren ook met de correctie. Een zeer brede eerste-laaglijn kan de bedhechting verbeteren maar verhoogt het volume dat onder de nozzle moet passen. Als de draad nergens verticaal heen kan, spreidt hij zich horizontaal. Het verlagen van de eerste-laagstroming van 105 procent naar 100 procent, het verhogen van de Z-offset met 0,02 mm of het verlagen van de bedtemperatuur met 5 °C kan de vereiste negatieve expansie schoner verminderen dan het toepassen van een grote offset.' },
    { type: 'glossary', items: [
      { term: 'Horizontale expansie', definition: 'Een slicer-offset die modelcontouren uitzet of samentrekt voordat gereedschapspaden worden gegenereerd.' },
      { term: 'Eerste-laagexpansie', definition: 'Een variant die alleen op de eerste laag of onderste lagen wordt toegepast, waardoor deze beter geschikt is voor olifantenpoot.' },
      { term: 'Z-drukspleet', definition: 'De effectieve nozzle-bedruimte die bepaalt hoeveel de eerste draad wordt samengedrukt.' },
      { term: 'Thermische factor', definition: 'Een vermenigvuldiger die hier wordt gebruikt om verhoogde laterale stroming weer te geven wanneer het bed heter is dan 60 °C.' },
      { term: 'CAD-afschuining', definition: 'Een gemodelleerde afgeschuinde rand die samengedrukt eerste-laagmateriaal een geometrische reliëfzone geeft.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Grote negatieve expansie kan kleine kenmerken beschadigen', html: 'Een waarde zoals -0,35 mm kan de buitenbasis van een grote doos repareren maar kleine reliëfletters uitwissen, smalle ribben verminderen en de diameter van kleine palen veranderen. Wanneer de vereiste correctie groot is, behandel het dan als een signaal om Z-offset, eerste-laagstroming of bedtemperatuur opnieuw te controleren.' },

    { type: 'title', text: 'Werkstroom voor een nauwkeurige olifantenpootcorrectie', level: 2 },
    { type: 'list', items: [
      'Print een eenvoudige kalibratiecoupon met hetzelfde materiaal, dezelfde bedtemperatuur, eerste laaghoogte en eerste laagsnelheid als voor het echte onderdeel.',
      'Meet de stabiele lichaamsmaat boven de basis, meet dan de breedste basismaat en trek de twee af.',
      'Voer gemeten fout, eerste laaghoogte, effectieve Z-drukspleet, bedtemperatuur en doeltolerantie in.',
      'Pas de gerapporteerde negatieve horizontale expansie toe in de slicer, of voeg de gerapporteerde 45-graden afschuining toe in CAD.',
      'Herprint de coupon en meet opnieuw na afkoeling.',
      'Als restfout boven de tolerantie blijft, pas dan aan in halve stappen in plaats van te springen naar een extreme globale offset.',
      'Vergrendel de instelling in een materiaalprofiel pas nadat twee reproduceerbare coupons het binnen uw tolerantiedoel eens zijn.',
    ] },
    { type: 'tip', title: 'Gebruik dezelfde bedtoestand als productie', html: 'Een koude eerste print op een dik bed kan zich anders gedragen dan de vijfde print nadat het bed 30 minuten is ingewarmd. Als de productietaak na warmte-inweek wordt uitgevoerd, kalibreer de coupon dan ook na warmte-inweek.' },
    { type: 'diagnostic', variant: 'success', title: 'Goed correctiedoel', html: 'Voor praktisch FDM-dimensionaal werk is een basisafwijking onder 0,05 mm vaak klein genoeg dat montagepassing wordt bepaald door normaal spelingontwerp in plaats van door de olifantenpootlip. Strengere doelen vereisen stijve machines, stabiel filament en herhaalbare meettechniek.' },
    { type: 'summary', title: 'Belangrijkste punten', items: [
      'Olifantenpoot is een druk- en temperatuurvervormingsprobleem, niet slechts een visueel defect.',
      'Gebruik gemeten basisfout ten opzichte van de stabiele wand, niet alleen de nominale CAD-maat.',
      'Negatieve horizontale expansie is de slicercorrectie; een 45-graden afschuining is de CAD-correctie.',
      'Bedtemperatuur verhoogt de thermische factor omdat de basis zachter blijft en langer zijwaarts vloeit.',
      'Ernstige compensatiewaarden moeten controles van Z en eerste-laagstroming activeren vóór productiegebruik.',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
