import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = '3d-print-kosten-calculator';
const title = '3D print Kosten Calculator: Filament en Energie';
const description = 'Bereken de echte prijs van je 3D-prints. Inclusief materiaalkosten, elektriciteit, machine-afschrijving en arbeid.';

const faqData = [
  {
    question: 'Waarom variëren de elektriciteitskosten zo sterk?',
    answer: 'Het hoogste verbruik komt voort uit het warm houden van het printbed. Materialen zoals ABS (100°C) verbruiken veel meer dan PLA (60°C). Ook of de printer open of gesloten is, heeft invloed.',
  },
  {
    question: 'Hoe weet ik hoeveel watt mijn printer verbruikt?',
    answer: 'De meeste thuisprinters verbruiken gemiddeld 100-150W tijdens gebruik. Je kunt dit nauwkeurig meten met een slimme stekker of een wattmeter.',
  },
  {
    question: 'Wat is de afvalmarge?',
    answer: 'Dit is het filament dat geen deel uitmaakt van het uiteindelijke stuk: supports, raft, skirt en de initiële purge. We raden minimaal 5% aan om realistisch te zijn.',
  },
];

const howToData = [
  {
    name: 'Voer de technische gegevens in',
    text: 'Vul het gewicht van het onderdeel in (gegeven door slicer-software zoals Cura), de printtijd en het verbruik van je machine.',
  },
  {
    name: 'Configureer de economische kosten',
    text: 'Pas de prijs van je rol, je elektriciteitstarief en de waarde van je handmatige arbeidsuur aan.',
  },
  {
    name: 'Analyseer de winst',
    text: 'Verschuif de margeschuifregelaar om de adviesprijs te zien en bekijk het cirkeldiagram om te zien waar het geld naartoe gaat.',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Materiaal',
    partWeightLabel: 'Gewicht onderdeel (netto)',
    gramsUnit: 'gram',
    spoolPriceLabel: 'Prijs rol (1kg)',
    spoolPriceUnit: '€/kg',
    wasteMarginLabel: 'Afvalmarge: ',
    energyTitle: 'Energie en Tijd',
    printTimeLabel: 'Printtijd',
    hoursUnit: 'uur',
    averagePowerLabel: 'Gemiddeld verbruik',
    wattsUnit: 'watt',
    electricityRateLabel: 'Elektriciteitstarief',
    kwhPriceUnit: '€/kWh',
    amortizationTitle: 'Afschrijving en Arbeid',
    machineCostHourLabel: 'Machinekosten per uur',
    priceHourUnit: '€/u',
    laborCostHourLabel: 'Arbeid (handmatig)',
    minutesUnit: 'minuten',
    manufacturingCostLabel: 'Productiekosten',
    suggestedPriceLabel: 'Adviesprijs (+{margin}%)',
    costBreakdownTitle: 'Kostenverdeling',
    plasticLabel: 'Plastic',
    electricityLabel: 'Elektriciteit',
    machineLabel: 'Machine',
    laborLabel: 'Arbeid',
    proTip: 'Wist je dat het verwarmen van het bed naar 100°C voor ABS de elektriciteitskosten kan verdubbelen in vergelijking met PLA? Vergeet niet om mislukkingen mee te tellen: als 10% van de onderdelen mislukt, liggen je echte kosten 10% hoger.',
  },
  seo: [
    {
      type: 'title',
      text: 'De Echte Kosten van 3D-printen Berekenen: Meer dan Alleen Filament',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'Wanneer we beginnen in de wereld van additive manufacturing, is het gebruikelijk te denken dat de enige kostenpost het plastic is dat uit de nozzle komt. Als je hier echter een bedrijf van wilt maken of simpelweg je hobby beter wilt beheren, moet je begrijpen dat de <strong>rendabiliteit</strong> schuilt in de details die niet op het eerste gezicht zichtbaar zijn.',
    },
    {
      type: 'title',
      text: 'De 4 Pijlers van Kosten bij 3D-printen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Onze calculator verdeelt de uiteindelijke prijs in vier fundamentele gebieden:',
    },
    {
      type: 'summary',
      items: [
        'Materiaal en Afval: Bevat het gewicht van het onderdeel, maar ook het plastic gebruikt in supports, skirts en purges. We raden altijd aan om een marge van 5-10% toe te voegen voor mogelijke printfouten.',
        'Elektriciteitsverbruik: Een 3D-printer verbruikt niet hetzelfde bij het printen van PLA (bed op 60°C) als bij ABS of Nylon (bed op 100°C+). De prijs per kWh kan het verschil maken bij grote onderdelen.',
        'Machine-afschrijving: Elk uur dat de printer draait, verslijten de componenten (riemen, ventilatoren, nozzles). Door een klein uurtarief op te nemen, kun je toekomstige reparaties betalen.',
        'Arbeid: Jouw tijd is het meest waardevol. Het voorbereiden van het bestand, het schoonmaken van het bed en het nabewerken van het onderdeel moeten worden meegerekend.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe bereken je de afschrijving?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een eenvoudige manier is om de aankoopprijs van je printer te delen door de geschatte levensduur in uren. Bijvoorbeeld, als een printer €400 kost en je verwacht dat deze minstens 2000 uur werkt voor een grote renovatie, dan zijn de afschrijvingskosten <strong>€0,20 per uur</strong>.',
    },
    {
      type: 'tip',
      title: 'Bespaar op Elektriciteit',
      html: '<p>Als je veel print, overweeg dan om je printer af te sluiten met een enclosure. Dit helpt niet alleen bij het printen van technische materialen, maar houdt ook warmte vast waardoor het printbed veel minder energie verbruikt om de temperatuur te handhaven.</p>',
    },
    {
      type: 'title',
      text: 'Strategieën voor de Verkoopprijs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Zodra je de basiskosten weet, moet je je marge bepalen. In de wereld van on-demand 3D-printen is een marge van 50-100% bovenop de totale kosten gebruikelijk om het risico op onverwachte fouten en commerciële winst te dekken. Als het onderdeel veel handmatig schuur- en schilderwerk vereist, moet die marge hoger zijn.',
    },
    {
      type: 'summary',
      items: [
        'Prijs per tijd: Ideaal voor pure printdiensten.',
        'Prijs per gram: Gangbaar voor massieve maar eenvoudige onderdelen.',
        'Prijs per waarde: Als het ontwerp uniek is, moet de prijs niet alleen gebaseerd zijn op de kosten, maar op wat de klant bereid is te betalen.',
      ],
    },
  ],
  faqTitle: 'Veelgestelde Vragen over 3D-Kosten',
  faq: faqData,
  bibliographyTitle: 'Bibliografie en Bronnen',
  bibliography: [
    {
      name: 'PrusaPrinters: 3D-printkosten berekenen',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Schatting van Materiaal en Kosten',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Gids voor kosten in additive manufacturing',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
