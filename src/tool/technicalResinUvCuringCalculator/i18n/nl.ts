import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'technische-hars-uv-uithardingstijd-calculator';
const title = 'Technische Hars UV Uithardingstijd Calculator';
const description = 'Schat de veilige SLA-hars nabehandelingstijd op basis van harstype, maximale wanddikte, vermogen van de was- en uithardingsstation en UV-golflengte.';

const faqData = [
  { question: 'Hoe lang moet ik SLA-harsafdrukken uitharden?', answer: 'De juiste tijd hangt af van harstype, wanddikte, vermogen van het uithardingsstation, golflengte en belichtingsgeometrie. Kleine standaard harsonderdelen hebben misschien maar een paar minuten nodig, terwijl dikke technische harsonderdelen meer tijd nodig hebben maar een veiligheidslimiet moeten respecteren.' },
  { question: 'Kan te veel UV-uitharding hars broos maken?', answer: 'Ja. Overmatige UV-belichting kan veel fotopolymeer harsonderdelen broos, geel of minder flexibel maken. De calculator begrenst de tijd wanneer de ruwe schatting in een degradatiegebied komt.' },
  { question: 'Moeten harsafdrukken droog zijn voor het uitharden?', answer: 'Ja. Harsafdrukken moeten schoon en volledig droog zijn voor UV-uitharding. Alcoholresten kunnen witverkleuring, ingesloten verontreiniging en inconsistente nabehandelingsresultaten veroorzaken.' },
  { question: 'Is 385 nm of 405 nm beter voor harsuitharding?', answer: 'Geen van beide is universeel beter. De beste golflengte is degene die is afgestemd op het foto-initiatiorsysteem van de hars en het uithardingsstation. Veel desktop-harsen zijn geoptimaliseerd voor 405 nm, terwijl sommige technische harsen goed reageren op 385 nm.' },
];

const howToData = [
  { name: 'Selecteer de harsvoorkeuze', text: 'Kies standaard, flexibel, stijf/taai, gietbaar of uitbrandbaar volgens de harsfles of het beoogde gebruik.' },
  { name: 'Voer de dikste wand in', text: 'Meet de maximale wanddikte die UV-nabehandeling moet krijgen.' },
  { name: 'Voer stationparameters in', text: 'Stel het vermogen van het uithardingsstation en de golflengte in zodat deze overeenkomen met uw UV-kamer.' },
  { name: 'Volg de veiligheidschecklist', text: 'Droog het onderdeel, belicht elk vlak, verwijder schaduwgevende ondersteuningen en respecteer de maximale veilige timerwaarde.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

const seoData = [
  { type: 'title', text: 'Hoe de SLA-Hars Nabehandelingstijd Wordt Gekozen', level: 2 },
  {
    type: 'paragraph',
    html: 'Nabehandeling is de gecontroleerde UV-belichting die wordt toegepast nadat een harsafdruk is gewassen. Het doel is niet simpelweg om het oppervlak droog te laten aanvoelen. Een correct nabehandeld SLA- of MSLA-onderdeel bereikt een betere conversie van reactieve groepen in het polymeernetwerk, wat de stijfheid, hittebestendigheid, dimensionale stabiliteit en hanteringsveiligheid verbetert. Onderbehandeling laat plakkerige, zwakke of chemisch actieve oppervlakken achter. Overbehandeling kan het materiaal richting verbrossing, zichtbare vergeling en verlies van rek duwen. Een nuttige <strong>SLA-hars UV-uithardingstijd schatter</strong> moet daarom harschemie, wanddikte, lichtintensiteit, golflengte, temperatuur en belichtingsgeometrie in evenwicht brengen.',
  },
  {
    type: 'paragraph',
    html: 'De calculator gebruikt harsvoorkeuzes omdat verschillende harsfamilies niet identiek reageren. Een standaard desktop-hars hardt meestal sneller uit dan een flexibele urethaanachtige formulering. Taai of stijf technisch hars heeft vaak langere belichting en soms milde warmte nodig om de datasheet-eigenschappen te benaderen. Gietbare en uitbrandbare harsen zijn gevoelig omdat overmatige uitharding de brosheid of as-gerelateerde procesproblemen kan vergroten. Het resultaat is een aanbevolen timerwaarde, een veilige bovengrens, een optionele temperatuurdoelstelling en een praktische lichtafstand.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'veelvoorkomende desktop-hars uithardingsgolflengten' },
      { value: '1-22 min', label: 'typische begrensde calculatoruitvoer' },
      { value: '0,4-12 mm', label: 'wanddiktemodelbereik' },
      { value: '6-120 W', label: 'vermogensbereik uithardingsstation' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Hard nooit natte harsafdrukken uit',
    html: 'Alcohol die op het onderdeel achterblijft kan onuitgeharde resten insluiten, oppervlakken witten, de uithardingskamer verontreinigen en de relatie tussen UV-dosis en uiteindelijk materiaalgedrag verstoren. Was eerst, laat het onderdeel volledig drogen, hard dan uit.',
  },
  { type: 'title', text: 'Waarom Wanddikte de UV-Uithardingstijd Verandert', level: 2 },
  {
    type: 'paragraph',
    html: 'Een dunne miniature schaal en een dikke functionele beugel kunnen dezelfde hars gebruiken maar hebben ander nabehandelingsgedrag nodig. UV-licht wordt geabsorbeerd en verstrooid door pigmenten, vulstoffen, foto-initiatoren en het polymeer zelf. Het oppervlak ontvangt de sterkste dosis, terwijl dieper materiaal minder energie ontvangt. Daarom vraagt de calculator naar de <strong>maximale wanddikte</strong> in plaats van de totale hoogte of totale massa. De dikste optisch relevante doorsnede is het deel dat het meest waarschijnlijk onderbehandeld blijft wanneer de buitenkant er al afgewerkt uitziet.',
  },
  {
    type: 'paragraph',
    html: 'De toename is proportioneel maar niet perfect lineair. Het verdubbelen van de wanddikte vereist niet altijd exact de dubbele timerwaarde omdat de uitharding ook doorgaat vanaf meerdere vlakken wanneer het onderdeel wordt gedraaid en omdat veel harsafdrukken hol zijn. Het model gebruikt een hars-specifieke exponent: taaie harsen schalen agressiever met de dikte, terwijl gietbare profielen onder een strakkere veiligheidslimiet blijven. Voor zeer dikke massieve onderdelen is de betere oplossing vaak uithollen, afvoeren, draaien en gefaseerd uitharden in plaats van een enkele lange belichting.',
  },
  {
    type: 'table',
    headers: ['Geometrische toestand', 'Uithardingsimplicatie', 'Praktische actie'],
    rows: [
      ['Dunne cosmetische schaal', 'Lage interne uithardingsvraag', 'Gebruik de berekende tijd zonder extra minuten toe te voegen.'],
      ['Dikke massieve nok of lip', 'Hoger risico op onderbehandelde kern', 'Voer de lokale maximale wanddikte in, niet de gemiddelde schaaldikte.'],
      ['Hol onderdeel met afvoergaten', 'Licht bereikt buitenkant; binnenkant kan beschaduwd blijven', 'Hard eerst de buitenkant uit, belicht dan de binnenkant als de geometrie dit toelaat.'],
      ['Ondoorzichtige of donkere hars', 'Lagere penetratie en meer verstrooiing', 'Blijf dicht bij de fabrikantrichtlijnen en draai vaker.'],
    ],
  },
  {
    type: 'tip',
    title: 'Meet de dikste structurele wand',
    html: 'Gebruik voor een holle harsafdruk de dikste schaal of versterkingsrib. Gebruik voor een massief technisch onderdeel de dikste massieve sectie die de uiteindelijke mechanische eigenschappen moet bereiken.',
  },
  { type: 'title', text: 'Stationvermogen, Afstand en UV-Dosis', level: 2 },
  {
    type: 'paragraph',
    html: 'Een was- en uithardingsstation met een nominaal vermogen van 40 W levert niet 40 W bruikbare UV-energie in elke vierkante centimeter van het onderdeel. Het nominale vermogen omvat elektrische en optische verliezen, LED-opstelling, kamerreflectiviteit, draaitafeldekking en afstand tot de lichtbron. Toch is vermogen een nuttige schatter: een hoogvermogenstation heeft meestal een kortere timer nodig dan een zwakke nagellamp-achtige uithardingsbox. De calculator past een inverse vermogensfactor toe zodat de timer afneemt naarmate het stationvermogen toeneemt.',
  },
  {
    type: 'paragraph',
    html: 'Afstand is belangrijk omdat de bestralingssterkte afneemt naarmate het onderdeel verder van de LEDs verwijderd is, en omdat zeer dichtbij plaatsen hotspots kan creëren. Een onderdeel dat te dicht bij één LED-bank wordt geplaatst, kan één vlak agressief uitharden terwijl hoeken of verzonken oppervlakken zacht blijven. Een onderdeel dat te ver weg wordt geplaatst, heeft mogelijk langere belichting nodig, maar tijd toevoegen kan de reeds verlichte vlakken overbehandelen. Daarom bevat de uitvoer een aanbevolen afstand in centimeters of inches. Het is een geometriebeheersing, niet slechts een gemakswaarde.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Te dichtbij',
        description: 'Hoge lokale intensiteit creëert ongelijke dosis en oppervlaktespanning.',
        points: ['Vergeling op belichte vlakken', 'Brosse dunne details', 'Beschaduwde holtes blijven onderbehandeld'],
      },
      {
        title: 'Gebalanceerd',
        description: 'Matige afstand laat de kamer en draaitafel UV gelijkmatiger verdelen.',
        highlight: true,
        points: ['Zuiverder mechanisch resultaat', 'Minder hotspotrisico', 'Betere herhaalbaarheid'],
      },
      {
        title: 'Te ver',
        description: 'Lage bestralingssterkte moedigt gebruikers aan om te compenseren met overmatige tijd.',
        points: ['Lange cycli', 'Inconsistente uitharding', 'Vals vertrouwen door droge oppervlakken'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Draai wanneer de kamer niet alle vlakken belicht',
    html: 'Als een onderdeel diepe uitsparingen, ondersnijdingen of brede platte zijden heeft, verdeel de belichting dan in kortere cycli en draai het onderdeel. Een uniforme dosis is meestal beter dan één lange statische uitharding.',
  },
  { type: 'title', text: '385 nm Versus 405 nm bij Harsuitharding', level: 2 },
  {
    type: 'paragraph',
    html: 'De meeste consumenten-MSLA-printers en uithardingsstations gebruiken 405 nm LEDs omdat die golflengte overeenkomt met veel desktop foto-initiatiorsystemen en efficiënt is voor betaalbare LED-arrays. Sommige technische harsen reageren ook sterk op 385 nm, een kortere golflengte dichter bij het UV-A-bereik. Het verschil is niet automatisch beter of slechter. Een hars geformuleerd voor 405 nm heeft mogelijk meer tijd nodig onder 385 nm als het spectrum niet is afgestemd; een andere hars kan efficiënt uitharden bij 385 nm. De calculator behandelt golflengte als een harsafhankelijke vermenigvuldiger.',
  },
  {
    type: 'paragraph',
    html: 'De belangrijke gebruikersactie is consistentie. Als een harsfabrikant een nabehandelingsschema specificeert voor een bepaalde uithardingseenheid, golflengte en temperatuur, gebruik dat schema dan als referentie. Gebruik deze calculator wanneer de hars generiek is, wanneer het stationvermogen afwijkt van de referentiemachine, of wanneer de printgeometrie dikker is dan een eenvoudige kalibratiecoupon. Meng geen industrieel 385 nm-schema met een 405 nm desktop-station zonder de belichtingsaannames aan te passen.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Foto-initiator', definition: 'Een harscomponent die licht absorbeert en polymerisatiereacties start.' },
      { term: 'UV-dosis', definition: 'De geaccumuleerde lichtenergie die het onderdeel ontvangt tijdens het uitharden, beïnvloed door bestralingssterkte en tijd.' },
      { term: 'Nabehandeling', definition: 'UV- en soms warmtebehandeling na het wassen die de materiaaleigenschappen verbetert ten opzichte van de geprinte staat.' },
      { term: 'Overbehandeling', definition: 'Overmatige belichting die een harsonderdeel bros, geel, vervormd of minder slagvast kan maken.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Droog aanvoelen is niet hetzelfde als volledig uitgehard',
    html: 'Een harsoppervlak kan stoppen met plakkerig aanvoelen voordat het interne netwerk het beoogde mechanische gedrag bereikt. Gebruik geometrie, harstype en stationvermogen in plaats van oppervlaktegevoel.',
  },
  { type: 'title', text: 'Harsvoorkeuzes en Mechanisch Risico', level: 2 },
  {
    type: 'paragraph',
    html: 'Standaardharsen zijn meestal geoptimaliseerd voor gemakkelijk printen en snelle nabewerking. Ze zijn de meest vergevingsgezinde categorie in de calculator. Flexibele harsen hebben voorzichtiger hantering nodig omdat de gewenste eigenschap rek is, niet maximale hardheid. Te veel UV kan de flexibiliteit verminderen en een zacht onderdeel veranderen in iets dat eerder barst. Stijve en taaie harsen hebben vaak meer dosis nodig om sterkte te ontwikkelen, maar ze hebben ook een bovengrens waar extra uitharding de prestaties niet langer verbetert en in plaats daarvan de brosheid verhoogt.',
  },
  {
    type: 'paragraph',
    html: 'Gietbare en uitbrandbare harsen hebben een andere prioriteit. Hun uiteindelijke gebruik kan investeringsgieten of schoon uitbranden omvatten, dus oppervlaktekwaliteit, asgedrag en dimensionale stabiliteit zijn belangrijk. Een zeer hard overbehandeld gietbaar onderdeel kan bros worden tijdens hantering of slecht presteren in stroomafwaartse processtappen. De calculator past een strakkere limiet toe op deze categorieën omdat de veiligste werkwijze gecontroleerde uitharding is, niet maximale belichting.',
  },
  {
    type: 'table',
    headers: ['Harsvoorkeuze', 'Hoofddoel', 'Overbehandelingssymptoom', 'Calculatorgedrag'],
    rows: [
      ['Standaard', 'Algemene hardheid en veilige hantering', 'Vergeling en brosse dunne details', 'Matige basistijd en gemiddelde limiet.'],
      ['Flexibel', 'Rek behouden terwijl plakkerigheid wordt verwijderd', 'Verlies van flexibiliteit en scheuren', 'Langere basistijd met voorzichtige dosisgevoeligheid.'],
      ['Stijf / Taai', 'Technische stijfheid en sterkte bereiken', 'Brosse breuk in plaats van taai falen', 'Hogere basistijd en optionele warme uitharding.'],
      ['Gietbaar', 'Schone hantering voor het gietproces', 'Brosse patronen en oppervlakteverdonkering', 'Lagere veiligheidslimiet om agressieve belichting te vermijden.'],
      ['Uitbrandbaar', 'Gecontroleerde uitharding voor thermisch uitbranden', 'Afbrokkeling of dimensionale spanning', 'Matige tijd met conservatieve limiet.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Extra minuten toevoegen na de calculator',
    items: [
      { pro: 'Kan helpen als één vlak beschaduwd was tijdens een korte cyclus.', con: 'Kan reeds belichte vlakken degraderen wanneer het onderdeel niet is gedraaid.' },
      { pro: 'Kan plakkerigheid verminderen op zeer dikke of donkere onderdelen.', con: 'Kan taaie en flexibele harsen broser laten falen.' },
      { pro: 'Nuttig als tweede korte cyclus na inspectie.', con: 'Onveilig als routinegewoonte zonder de veiligheidslimiet te controleren.' },
    ],
  },
  { type: 'title', text: 'Temperatuur Tijdens Technische Hars Nabehandeling', level: 2 },
  {
    type: 'paragraph',
    html: 'Sommige technische harsen specificeren een verhoogde nabehandelingstemperatuur omdat warmte de moleculaire mobiliteit verhoogt en het polymeernetwerk helpt zijn beoogde eigenschappen te bereiken. Warme uitharding kan de hitteafbuigingstemperatuur, de modulus en de uiteindelijke sterkte verbeteren voor compatibele materialen. Het moet niet blindelings op elke hars worden toegepast. Een miniatuur geprint in standaardhars heeft misschien helemaal geen warmte nodig, terwijl een taai technisch hars kan profiteren van 40-60 °C afhankelijk van fabrikantgegevens. De calculator geeft daarom kamertemperatuur terug voor harsfamilies waar warmte niet wordt aangenomen, en een bescheiden temperatuurdoel waar het nuttig is.',
  },
  {
    type: 'paragraph',
    html: 'Temperatuurbeheersing is ook een veiligheidskwestie. Te veel hitte kan dunne secties vervormen, ondersteuningslittekens verzachten of vergeling versnellen. Een was- en uithardingsstation zonder verwarmde kamer moet niet worden behandeld als gelijkwaardig aan een laboratoriumoven. Als het harsdatasheet een precieze thermische cyclus specificeert, heeft dat datasheet voorrang. De calculator is een praktische schatter voor gangbare desktop-werkstromen, geen vervanging voor gecertificeerde medische, tandheelkundige, ruimtevaart- of gietprocesvalidatie.',
  },
  {
    type: 'card',
    title: 'Wanneer de uitvoer kamertemperatuur zegt',
    html: 'Kamertemperatuur betekent dat de calculator geen verwarmde nabehandeling vereist voor die harsvoorkeuze. Het betekent niet dat het onderdeel koud, nat of in een tochtige werkplaats kan worden uitgehard. Houd het onderdeel droog en laat de hars een normale binnentemperatuur bereiken voor belichting.',
  },
  {
    type: 'tip',
    title: 'Vermijd uitharden direct na IPA verwijdering',
    html: 'Laat na het wassen alcohol verdampen uit gaten, holtes en reliëftekst. Tien tot dertig minuten drogen kunnen meer uitmaken dan het toevoegen van nog een minuut UV.',
  },
  { type: 'title', text: 'Diagnose van Onderbehandelde en Overbehandelde Harsonderdelen', level: 2 },
  {
    type: 'paragraph',
    html: 'Onderbehandelde harsonderdelen vertonen meestal plakkerige oppervlakken, zwakke kleine kenmerken, aanhoudende geur, zachte randen of resten die overgaan op handschoenen. Deze symptomen komen het meest voor wanneer het onderdeel niet grondig is gewassen, nat is uitgehard, een grote wanddikte had of in de schaduw van de kamer stond. Overbehandelde onderdelen vertonen andere symptomen: brosse breuk, vergeling, krijtachtige oppervlakken, gekrulde dunne randen of verlies van flexibiliteit. De oplossing hangt af van het symptoom. Meer UV is niet het antwoord op elk harsprintprobleem.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Bros en geel betekent stoppen met belichting toevoegen',
    html: 'Als een onderdeel al bros of zichtbaar geel is geworden, zal extra uitharding de taaiheid niet herstellen. Herprint, verlaag de timerwaarde, verbeter de rotatie en respecteer de limiet.',
  },
  {
    type: 'summary',
    title: 'Probleemoplossingsvolgorde',
    items: [
      'Bevestig dat het onderdeel is gewassen en gedroogd voor het uitharden.',
      'Controleer of ondersteuningen of de modeloriëntatie UV-schaduwen hebben gecreëerd.',
      'Voer de dikste wand in, niet de gemiddelde modelgrootte.',
      'Gebruik de veiligheidslimiet wanneer de ruwe schatting te lang zou zijn.',
      'Draai complexe onderdelen in plaats van een statische belichting te verlengen.',
    ],
  },
  {
    type: 'table',
    headers: ['Symptoom', 'Waarschijnlijke oorzaak', 'Correctie'],
    rows: [
      ['Plakkerig oppervlak na uitharding', 'Resthars of IPA, onvoldoende dosis of beschaduwd vlak', 'Opnieuw wassen indien verontreinigd, volledig drogen, dan een korte gedraaide cyclus toepassen.'],
      ['Dunne kenmerken breken gemakkelijk', 'Overbehandeling of inherent brosse hars', 'Timer verlagen en nabije LED-plaatsing vermijden.'],
      ['Eén kant geel, andere kant zacht', 'Ongelijke kamerbelichting', 'Afstand vergroten en draaien tijdens het uitharden.'],
      ['Flexibele hars wordt stijf', 'Dosis te hoog voor elastomeergedrag', 'Minder tijd gebruiken en stoppen bij niet-plakkerige hantering.'],
    ],
  },
  { type: 'title', text: 'Hoe Deze UV-Was- en Uithardingsstation Tijdcalculator Te Gebruiken', level: 2 },
  {
    type: 'paragraph',
    html: 'Begin met de harsvoorkeuze die het dichtst bij het materiaaletiket ligt. Als de fles taai, stijf, ABS-achtig, technisch of hoogslagvast zegt, gebruik dan de stijf/taai voorkeuze. Als het elastisch, buigzaam of rubberachtig is, gebruik dan flexibel. Voor investeringsgieten of asvrije werkstromen, gebruik gietbaar of uitbrandbaar. Meet vervolgens de maximale wanddikte. Voer het nominale vermogen van het uithardingsstation in en kies 385 nm of 405 nm volgens de documentatie van het station of de hars. De uitvoer timerwaarde is de eerste cyclus die je moet uitvoeren.',
  },
  {
    type: 'paragraph',
    html: 'Gebruik voor het starten de checklist. Het onderdeel moet droog zijn, zichtbaar vanuit meerdere hoeken en vrij van ondersteuningsstructuren die schaduwen werpen. Als het model complex is, hard dan een deel van de aanbevolen tijd uit, draai het en voltooi de rest van de cyclus. Als de calculator waarschuwt dat de veiligheidslimiet is toegepast, overschrijf deze dan niet met één lange belichting. De limiet bestaat omdat die harscategorie meer kans heeft om te degraderen dan te verbeteren voorbij dat punt.',
  },
  {
    type: 'list',
    items: [
      'Gebruik fabrikantinstructies wanneer een harsdatasheet een gevalideerde nabehandelingscyclus geeft.',
      'Gebruik deze calculator wanneer stationvermogen, golflengte of onderdeeldikte afwijken van de referentie-werkstroom.',
      'Hard geen onderdelen uit die sterk naar oplosmiddel ruiken of vloeistof in afvoergaten hebben.',
      'Ga er niet van uit dat sterker licht veiliger is; het kan sneller lokale overbehandeling creëren.',
      'Noteer succesvolle tijden per hars, kleur, wanddikte en stationmodel.',
    ],
  },
  {
    type: 'summary',
    title: 'Veilige nabehandelingsregel',
    items: [
      'Eerst reinigen.',
      'Volledig drogen.',
      'Uitharden binnen het berekende venster.',
      'Draaien voor dekking.',
      'Stoppen voordat de hars bros, geel of vervormd wordt.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Invoerbediening technische hars UV-uitharding',
    resultsAriaLabel: 'Aanbevolen hars nabehandelingsparameters',
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    resinGroupLabel: 'Harsvoorkeuze',
    stationGroupLabel: 'Uithardingsstation',
    preparationLabel: 'Voor het uitharden',
    resinTypeLabel: 'Harstype',
    standardLabel: 'Standaard',
    flexibleLabel: 'Flexibel',
    toughLabel: 'Stijf / Taai',
    castableLabel: 'Gietbaar',
    burnoutLabel: 'Uitbrandbaar',
    wallThicknessLabel: 'Maximale wanddikte',
    wallThicknessHelp: 'Gebruik de dikste massieve wand of schaal waar UV-licht doorheen moet dringen om uit te harden.',
    stationPowerLabel: 'Stationvermogen',
    stationPowerHelp: 'Nominaal elektrisch vermogen van het uithardingsstation of de UV-lampenarray.',
    wavelengthLabel: 'Golflengte',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'Het onderdeel moet schoon en perfect droog zijn voor UV-belichting. Hard geen onderdelen uit die nog alcohol dragen.',
    dryCheckLabel: 'Is het onderdeel volledig droog en vrij van alcoholresten?',
    exposureCheckLabel: 'Is het onderdeel zo gepositioneerd dat licht elk vlak bereikt?',
    supportsCheckLabel: 'Is het onderdeel vrij van ondersteuningen die schaduwen kunnen werpen?',
    degradationWarning: 'Overmatige uithardingstijd maakt het onderdeel bros en geel. Respecteer de technische limieten.',
    recommendedTimeLabel: 'Timerinstelling',
    temperatureLabel: 'Uithardingstemperatuur',
    noTemperatureLabel: 'Omgeving',
    ambientTemperatureNoteMetric: 'Uitharden bij kamertemperatuur (18-25 °C). Geen verwarmde kamer vereist voor deze voorkeuze.',
    ambientTemperatureNoteImperial: 'Uitharden bij kamertemperatuur (64-77 °F). Geen verwarmde kamer vereist voor deze voorkeuze.',
    distanceLabel: 'Lichtafstand',
    maxSafeLabel: 'Veiligheidslimiet',
    doseIndexLabel: 'UV-dosisindex',
    safetySafeLabel: 'Binnen het veilige venster',
    safetyCautionLabel: 'Dicht bij de bovengrens',
    safetyLimitLabel: 'Veiligheidslimiet toegepast',
    limitMessage: 'De gevraagde belichting zou de harsveiligheidslimiet overschrijden. Gebruik de begrensde timerwaarde en draai het onderdeel tussen cycli als vlakken beschaduwd zijn.',
    cautionMessage: 'De aanbeveling is technisch bruikbaar maar dicht bij het degradatiegebied. Houd het onderdeel droog, draai het en vermijd het toevoegen van extra minuten uit gewoonte.',
    safeMessage: 'De aanbeveling valt binnen het normale nabehandelingsvenster voor dit harsprofiel en stationvermogen.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
