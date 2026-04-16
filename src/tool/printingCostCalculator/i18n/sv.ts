import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = 'kalkylator-3d-utskrift-kostnad';
const title = 'Kalkylator för 3D utskriftskostnad: Filament och energi';
const description = 'Beräkna det verkliga priset på dina 3D-utskrifter. Inkluderar materialkostnad, el, maskinavskrivning och arbetskostnad.';

const faqData = [
  {
    question: 'Varför varierar elkostnaden så mycket?',
    answer: 'Den högsta förbrukningen kommer från att hålla byggplattan varm. Material som ABS (100°C) förbrukar mycket mer än PLA (60°C). Om skrivaren är öppen eller inbyggd påverkar också.',
  },
  {
    question: 'Hur vet jag hur många watt min skrivare förbrukar?',
    answer: 'De flesta hobby-skrivare förbrukar i genomsnitt 100-150W under drift. Du kan mäta det noggrant med en smart kontakt eller en wattmätare.',
  },
  {
    question: 'Vad är spillmarginal?',
    answer: 'Det är det filament som inte ingår i den slutliga delen: stödstrukturer, raft, skirt och inledande rensning. Vi rekommenderar minst 5% för att vara realistisk.',
  },
];

const howToData = [
  {
    name: 'Ange tekniska data',
    text: 'Skriv in delens vikt (ges av din slicer-mjukvara som Cura), utskriftstiden och din maskins förbrukning.',
  },
  {
    name: 'Konfigurera ekonomiska kostnader',
    text: 'Justera priset på din rulle, din eltaxa och vad du värderar din manuella arbetstimme till.',
  },
  {
    name: 'Analysera vinsten',
    text: 'Dra i marginalreglaget för att se det föreslagna försäljningspriset och kolla i cirkeldiagrammet för att se vart pengarna tar vägen.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Material',
    partWeightLabel: 'Delens vikt (netto)',
    gramsUnit: 'gram',
    spoolPriceLabel: 'Pris per rulle (1kg)',
    spoolPriceUnit: 'kr/kg',
    wasteMarginLabel: 'Spillmarginal: ',
    energyTitle: 'Energi och Tid',
    printTimeLabel: 'Utskriftstid',
    hoursUnit: 'timmar',
    averagePowerLabel: 'Genomsnittlig förbrukning',
    wattsUnit: 'watt',
    electricityRateLabel: 'Eltaxa',
    kwhPriceUnit: 'kr/kWh',
    amortizationTitle: 'Avskrivning och Arbete',
    machineCostHourLabel: 'Maskinkostnad per timme',
    priceHourUnit: 'kr/h',
    laborCostHourLabel: 'Arbete (manuellt)',
    minutesUnit: 'minuter',
    manufacturingCostLabel: 'Tillverkningskostnad',
    suggestedPriceLabel: 'Föreslaget pris (+{margin}%)',
    costBreakdownTitle: 'Kostnadsfördelning',
    plasticLabel: 'Plast',
    electricityLabel: 'El',
    machineLabel: 'Maskin',
    laborLabel: 'Arbete',
    proTip: 'Visste du att uppvärmning av byggplattan till 100°C för ABS kan fördubbla elkostnaden jämfört med PLA? Glöm inte att räkna med misslyckade utskrifter: om 10 % av dina delar misslyckas är din verkliga kostnad 10 % högre.',
  },
  seo: [
    {
      type: 'title',
      text: 'Beräkna den verkliga kostnaden för 3D-utskrift: Mer än bara filament',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'När vi börjar i världen av additiv tillverkning är det vanligt att tro att den enda kostnaden är plasten som kommer ut ur munstycket. Men om du vill göra detta till ett företag eller helt enkelt hantera din hobby bättre, måste du förstå att <strong>lönsamheten</strong> ligger i de detaljer som inte syns vid första anblicken.',
    },
    {
      type: 'title',
      text: 'De 4 kostnadspelarna i 3D-utskrift',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vår kalkylator delar upp slutpriset i fyra grundläggande områden:',
    },
    {
      type: 'summary',
      items: [
        'Material och spill: Inkluderar delens vikt, men även plasten som används i stöd, skirts och rensning. Vi rekommenderar alltid att du lägger till en marginal på 5–10 % för eventuella utskriftsfel.',
        'Elförbrukning: En 3D-skrivare drar inte lika mycket när den skriver ut PLA (platta på 60°C) som ABS eller nylon (platta på 100°C+). Priset på kilowattimme kan göra skillnad för stora delar.',
        'Maskinavskrivning: Varje timme som skrivaren är igång slits dess komponenter (remmar, fläktar, munstycken). Genom att inkludera en liten timkostnad kan du betala för framtida reparationer.',
        'Arbete: Din tid är det mest värdefulla. Förberedelse av filen, rengöring av byggplattan och efterbearbetning av delen måste räknas med.',
      ],
    },
    {
      type: 'title',
      text: 'Hur beräknar man avskrivning?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett enkelt sätt är att dela inköpspriset för din skrivare med dess uppskattade livslängd i timmar. Om en skrivare till exempel kostar 4 000 kr och du förväntar dig att den fungerar i minst 2 000 timmar före en större renovering, är dess avskrivningskostnad <strong>2,00 kr per timme</strong>.',
    },
    {
      type: 'tip',
      title: 'Spara på elen',
      html: '<p>Om du skriver ut mycket kan du överväga att bygga in din skrivare i ett hölje. Detta hjälper inte bara till vid utskrift av tekniska material, utan behåller också värmen och gör att byggplattan förbrukar mycket mindre energi för att hålla temperaturen.</p>',
    },
    {
      type: 'title',
      text: 'Strategier för försäljningspris',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När du känner till din baskostnad måste du bestämma din marginal. I världen med on-demand 3D-utskrifter är en marginal på 50–100 % utöver den totala kostnaden vanlig för att täcka risken för oväntade fel och kommersiell vinst. Om delen kräver mycket manuellt slip- och målningsarbete bör marginalen vara högre.',
    },
    {
      type: 'summary',
      items: [
        'Prissättning efter tid: Idealiskt för rena utskriftstjänster.',
        'Prissättning efter gram: Vanligt för massiva men enkla delar.',
        'Prissättning efter värde: Om designen är unik bör priset inte bara baseras på kostnad, utan på vad kunden är villig att betala.',
      ],
    },
  ],
  faqTitle: 'Vanliga frågor om 3D-kostnader',
  faq: faqData,
  bibliographyTitle: 'Bibliografi och resurser',
  bibliography: [
    {
      name: 'PrusaPrinters: Beräkna kostnader för 3D-utskrift',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Material- och kostnadsuppskattning',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Guide för kostnader i additiv tillverkning',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
