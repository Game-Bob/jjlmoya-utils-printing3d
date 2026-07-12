import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'sla-hars-uitholling-en-drainage-calculator';
const title = 'SLA Hars Uitholling en Drainage Calculator';
const description = 'Bereken conservatieve wanddikte, diameter van het afvoergat, minimaal aantal ontluchtingsgaten en complexiteit-aangepaste harsbesparingen voor holle SLA en DLP harsprints.';

const faqData = [
  { question: 'Waarom adviseert de calculator altijd ten minste twee afvoergaten?', answer: 'Een holle harsprint heeft één pad nodig voor het weglopen van vloeibare hars en een ander pad voor de toevoer van lucht. Twee openingen helpen ook om het zuignapeffect tegen de releasefolie tijdens het losmaken te breken.' },
  { question: 'Waarom is de harsbesparing lager dan het theoretische holle volume?', answer: 'Vloeibare hars blijft achter op interne wanden, ribben, hoeken, ondersteuningen en kleine holtes. De calculator trekt 5, 10 of 15 procent af van het theoretische holle volume op basis van de geometrische complexiteit.' },
  { question: 'Is 1,5 mm wanddikte altijd voldoende?', answer: 'Nee. Het is een minimale veiligheidsgrens voor veel desktop harsprints. Hoge onderdelen, zware onderdelen, technische belastingen, warme omgevingen of agressief schuren kunnen dikkere wanden vereisen.' },
  { question: 'Waar moeten afvoergaten geplaatst worden?', answer: 'Plaats gaten zo dicht mogelijk bij de zijde van de bouwplaat en de laagste harsverzamelpunten in de printoriëntatie, en controleer vervolgens in de slicer of er geen afgesloten holtes overblijven.' },
];

const howToData = [
  { name: 'Voer modelvolume en hoogte in', text: 'Gebruik het slicervolume na ondersteuningen en oriëntatie, en voer vervolgens de hoogte van het onderdeel in de printoriëntatie in.' },
  { name: 'Kies geometrische complexiteit', text: 'Selecteer eenvoudige, gemiddelde of hoge complexiteit zodat ingesloten hars wordt afgetrokken van de theoretische holle besparing.' },
  { name: 'Kies harstype', text: 'Selecteer standaard, taaie of technische hars. Viskeuzere harsen krijgen een grotere aanbevolen afvoerdiameter.' },
  { name: 'Controleer wand- en afvoeradviezen', text: 'Gebruik de wanddikte, afvoerdiameter, aantal gaten en checklist voordat u het definitieve bestand slicet.' },
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
    {
      type: 'title',
      text: 'Wat doet de SLA Hars Uithollings- en Afvoercalculator?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Deze tool lost een van de meest kritieke uitdagingen op bij het printen van SLA-, DLP- en LCD-hars 3D-modellen: het optimaliseren van holle modellen. Het printen van massieve harsmodellen is duur, zwaar en verhoogt de trekkrachten tijdens het printproces. Het uithollen van het model vermindert het materiaalgebruik, maar het introduceren van holle holtes zonder de juiste afvoer leidt tot ingesloten, niet-uitgeharde hars en printfouten als gevolg van vacuümkrachten. Deze calculator berekent de ideale wanddikte, stelt de juiste diameter en hoeveelheid afvoergaatjes voor en schat de werkelijke harsbesparing door rekening te houden met de vloeibare hars die onvermijdelijk op de binnenwanden van het geprinte deel achterblijft.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1,5 mm',
            label: 'Aanbevolen minimale wanddikte voor desktop SLA'
          },
          {
            value: '2 gaten',
            label: 'Minimaal aantal ventilatieopeningen vereist om vacuüm te breken'
          },
          {
            value: '10-15%',
            label: 'Harsvolumereductie door interne oppervlaktehechting'
          },
          {
            value: '30-70%',
            label: 'Gemiddelde totale gewichtsvermindering bereikt door uitholling'
          }
        ]
    },
    {
      type: 'title',
      text: 'Hoe wanddikte de harsbesparing beïnvloedt',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'De wanddikte is de primaire variabele die de hoeveelheid bespaarde hars bepaalt. Een dikkere wand verhoogt de structurele sterkte, maar verbruikt snel meer hars, waardoor de efficiëntie van het uithollen afneemt. Omgekeerd is een wand die te dun is fragiel, gevoelig voor vervorming tijdens het uitharden en bestand mogelijk niet tegen de mechanische trekkrachten wanneer de printer elke laag scheidt van de FEP-film. Het doel is om het optimale punt te vinden waar het model zijn vorm en bruikbaarheid behoudt, terwijl de materiaalbesparing wordt gemaximaliseerd.'
    },
    {
      type: 'proscons',
      title: 'Voor en nadelen van het uithollen van harsprenten',
      items: [
          {
            pro: 'Enorme vermindering van materiaalkosten en het totale gewicht van de print',
            con: 'Vereist nabewerking om interne holtes te wassen en uit te harden'
          },
          {
            pro: 'Een kleiner oppervlak per laag vermindert de trekkrachten op de FEP-film',
            con: 'Slecht geplaatste gaten kunnen de visuele esthetiek van het model verruïneren'
          },
          {
            pro: 'Vermindert thermische spanning en vervorming tijdens het naharden',
            con: 'Risico dat ingesloten vloeibare hars later scheuren in het onderdeel veroorzaakt'
          }
        ]
    },
    {
      type: 'title',
      text: 'Het zuignapeffect begrijpen bij holle harsprenten',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wanneer een hol model wordt geprint, vormt het een gesloten kamer wanneer het in de bak zakt. Als deze kamer geen ventilatiegaten heeft, creëert elke hefcyclus een sterk gedeeltelijk vacuüm (zuignapeffect) tussen de uitgeharde laag und de releasefilm. Deze kracht trekt aan de print, wat leidt to laagafwijkingen, laaglijnen, ondersteuningsfouten of zelfs het volledig lostrekken van het model van de bouwplaat. Het toevoegen van ventilatiegaten laat lucht binnen, waardoor het drukverschil wordt geneutraliseerd en een soepele trekkrachtcyclus wordt gegarandeerd.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Het gevaar van afgesloten holle ruimtes',
      html: 'Laat een holle ruimte nooit volledig afgesloten. Ingesloten vloeibare hars in een geprint onderdeel zal de uitgeharde wanden na verloop van tempo langzaam aantasten, wat er uiteindelijk toe leidt dat het model scheurt, giftige hars lekt of volledig uiteenvalt. Zorg altijd voor ten minste twee gaten om de binnenkant te wassen en uit te harden met een interne UV-lichtbron.'
    },
    {
      type: 'title',
      text: 'Praktische tips voor de plaatsing van afvoergaatjes',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Plaats de afvoergaatjes zo dicht mogelijk bij de bouwplaat om de hars vroegtijdig tijdens het printen te laten ontsnappen.',
          'Gebruik altijd ten minste twee gaten: één om de vloeibare hars te laten wegstromen en een andere om lucht binnen te laten.',
          'Richt de gaten op niet-zichtbare oppervlakken, zoals de onderkant van bases of achter verbindingen, om de esthetiek te behouden.',
          'Zorg ervoor dat elke geïsoleerde interne kamer of zak zijn eigen set afvoergaatjes heeft.'
        ]
    },
    {
      type: 'title',
      text: 'Hoe de calculator zich aanpast aan de geometrische complexiteit',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Eenvoudige geometrie',
            description: 'Modellen met weinig details, bollen of blokken. Houdt minimale hars vast (ca. 5%) op vlakke binnenoppervlakken.'
          },
          {
            title: 'Matige geometrie',
            description: 'Karaktermodellen of standaard mechanische onderdelen. Interne ondersteuningen en curves houden matig hars vast (ca. 10%).',
            highlight: true
          },
          {
            title: 'Hoge complexiteit',
            description: 'Zeer gedetailleerde miniaturen, rasterstructuren of complexe holle kanalen. Houdt aanzienlijke hars vast (ca. 15%+) als gevolg van capillaire werking.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Harsviscositeit en de grootte van afvoergaatjes begrijpen',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Harsklasse',
          'Viscositeitsniveau',
          'Min. Gatdiameter',
          'Aanbevolen plaatsing'
        ],
      rows: [
          [
              'Standaard Hars',
              'Laag-Midden',
              '2,0 - 3,0 mm',
              'Basis of verborgen vlakke oppervlakken'
            ],
          [
              'Zwaar / Flexibel',
              'Midden-Hoog',
              '3,0 - 4,5 mm',
              'Hoeken en verbindingen om loslaten te voorkomen'
            ],
          [
              'Technisch / Gietbaar',
              'Zeer Hoog',
              '4,5 - 6,0 mm',
              'Direct zichtbaar kanaal voor zwaartekrachtafvoer'
            ]
        ]
    },
    {
      type: 'title',
      text: 'Wanneer de wanddikte moet worden verhoogd tot boven 1,5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'Schaal en functie bepalen de wanddikte',
      html: 'Hoewel 1,5 mm een betrouwbaar minimum is voor kleine displayfiguren, moet u de wanddikte verhogen voor grotere prints. Streef voor onderdelen die hoger zijn dan 150 mm naar wanden van 2,0 mm to 2,5 mm. Voor dragende mechanische componenten of onderdelen die met flexibele harsen zijn geprint, moeten de wanden 3,0 mm of dikker zijn om structureel falen onder belasting te voorkomen.'
    },
    {
      type: 'title',
      text: 'Technische woordenlijst voor holle SLA-prints',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA Uitholling',
            definition: 'Het proces waarbij een massief 3D-model wordt omgezet in een holle schil met een specifieke wanddikte om hars en printtijd te besparen.'
          },
          {
            term: 'Zuignapeffect',
            definition: 'De vacuümkracht die ontstaat wanneer een gesloten holle holte tijdens het printen van de releasefilm wordt getrokken.'
          },
          {
            term: 'Trekkracht',
            definition: 'De mechanische spanning die op het model en de ondersteuningen wordt uitgeoefend wanneer de uitgeharde laag van de bodem van de bak wordt gescheiden.'
          },
          {
            term: 'Harsinsluiting',
            definition: 'Het vasthouden van vloeibare, niet-uitgeharde hars in binnenhoeken, ondersteuningen en texturen als gevolg van oppervlaktespanning.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Samenvattende checklist voor succesvolle holle prints',
      level: 2
    },
    {
      type: 'summary',
      title: 'Preflight SLA checklist',
      items: [
          'Controleer of de uithollingsdikte geschikt is voor de schaal van het model.',
          'Bevestig dat er ten minste twee afvoergaatjes zijn geplaatst op de laagste printpunten.',
          'Controleer op geïsoleerde interne holtes die geen ventilatie hebben.',
          'Plan voor interne reiniging met IPA en interne UV LED-uitharding.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Eenheden',
    metricLabel: 'Metrisch',
    imperialLabel: 'US',
    modelInputsLabel: 'Modelinvoer',
    volumeLabel: 'Totaal Modelvolume',
    heightLabel: 'Onderdeelhoogte',
    complexityLabel: 'Geometrische Complexiteit',
    resinTypeLabel: 'Harstype',
    simpleLabel: 'Eenvoudig',
    moderateLabel: 'Gemiddeld',
    highLabel: 'Hoog',
    standardLabel: 'Standaard',
    toughLabel: 'Taai',
    engineeringLabel: 'Technisch',
    resultsLabel: 'Resultaat Uitholling en Drainage',
    wallThicknessLabel: 'Aanbevolen Wand',
    drainDiameterLabel: 'Afvoerdiameter',
    drainHoleCountLabel: 'Minimaal Aantal Gaten',
    adjustedSavingLabel: 'Geschatte Harsbesparing',
    adjustedSavingNote: 'Aangepast voor complexiteit om rekening te houden met vloeibare hars die op interne oppervlakken achterblijft.',
    trapFactorLabel: 'Factor Ingesloten Hars',
    trapFactorHelp: 'Deze factor verandert met de geometrische complexiteit om de oppervlaktespanning van viskeuze hars in blinde holtes te compenseren.',
    theoreticalSavingLabel: 'Theoretisch Hol Volume',
    trappedAllowanceLabel: 'Marge Ingesloten Hars',
    savingUnitLabel: 'Besparing',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Opmerking: Afvoergaten moeten nabij de bouwplaatzijde en de laagste harsverzamelpunten in de printoriëntatie worden geplaatst.',
    vacuumWarning: 'Holle lichamen vereisen altijd minimaal twee afvoergaten om het vacuüm tegen de releasefolie te brechen.',
    trappedResinWarning: 'Complexe geometrieën sluiten vloeibare hars binnenin op; deze berekening schat de marge.',
    checklistTitle: 'Checklist Voor het Slicen',
    checklistItems: ['Zorg dat de afvoergaten zich in de buurt van de bouwplaat bevinden.', 'Controleer of de wanddikte niet onder 1,5 mm komt.', 'Bevestig dat er geen gesloten harseilanden of holtes in het model zijn.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
