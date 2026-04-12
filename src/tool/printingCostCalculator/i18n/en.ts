import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = '3d-printing-cost-calculator';
const title = '3D Printing Cost Calculator: Filament and Energy';
const description = 'Calculate the real price of your 3D prints. Includes material cost, electricity, machine amortization, and labor.';

const faqData = [
  {
    question: 'Why does the electricity cost vary so much?',
    answer: 'The highest consumption comes from keeping the bed hot. Materials like ABS (100°C) consume much more than PLA (60°C). Whether the printer is open or closed also influences.',
  },
  {
    question: 'How do I know how many watts my printer consumes?',
    answer: 'Most domestic printers consume an average of 100-150W during operation. You can measure it accurately using a smart plug or a wattmeter.',
  },
  {
    question: 'What is the waste margin?',
    answer: 'It is the filament that is not part of the final piece: supports, raft, skirt, and initial purging. We recommend a minimum of 5% to be realistic.',
  },
];

const howToData = [
  {
    name: 'Enter the technical data',
    text: 'Write the weight of the part (given by the slicer software like Cura), the printing time, and your machine\'s consumption.',
  },
  {
    name: 'Configure the economic costs',
    text: 'Adjust the price of your spool, your electricity rate, and what you value your manual labor hour at.',
  },
  {
    name: 'Analyze the profit',
    text: 'Move the margin slider to see the suggested retail price and review the pie chart to see where the money goes.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: 'Material',
    partWeightLabel: 'Part weight (net)',
    gramsUnit: 'grams',
    spoolPriceLabel: 'Spool price (1kg)',
    spoolPriceUnit: '$/kg',
    wasteMarginLabel: 'Waste margin: ',
    energyTitle: 'Energy and Time',
    printTimeLabel: 'Print time',
    hoursUnit: 'hours',
    averagePowerLabel: 'Average consumption',
    wattsUnit: 'watts',
    electricityRateLabel: 'Electricity rate',
    kwhPriceUnit: '$/kWh',
    amortizationTitle: 'Amortization and Labor',
    machineCostHourLabel: 'Machine cost per hour',
    priceHourUnit: '$/h',
    laborCostHourLabel: 'Labor (manual)',
    minutesUnit: 'minutes',
    manufacturingCostLabel: 'Manufacturing Cost',
    suggestedPriceLabel: 'Suggested Price (+{margin}%)',
    costBreakdownTitle: 'Cost Breakdown',
    plasticLabel: 'Plastic',
    electricityLabel: 'Electricity',
    machineLabel: 'Machine',
    laborLabel: 'Labor',
    proTip: 'Did you know that heating the bed to 100°C for ABS can double the electricity cost compared to PLA? Don\'t forget to count failures: if 10% of your parts fail, your real cost is 10% higher.',
  },
  seo: [
    {
      type: 'title',
      text: 'Calculating the Real Cost of 3D Printing: Beyond Filament',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'When we start in the world of additive manufacturing, it is common to think that the only cost is the plastic that comes out of the nozzle. However, if you want to make this a business or simply manage your hobby better, you must understand that <strong>profitability</strong> lies in the details that are not visible at first glance.',
    },
    {
      type: 'title',
      text: 'The 4 Pillars of Cost in 3D Printing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Our calculator breaks down the final price into four fundamental areas:',
    },
    {
      type: 'summary',
      items: [
        'Material and Waste: Includes the weight of the part, but also the plastic used in supports, skirts, and purges. We always recommend adding a 5-10% margin for possible print failures.',
        'Electricity Consumption: A 3D printer does not spend the same printing PLA (bed at 60°C) as ABS or Nylon (bed at 100°C+). The price of kWh can make a difference in long parts.',
        'Machine Amortization: Every hour the printer is running, its components (belts, fans, nozzles) wear out. Including a small hourly cost will allow you to pay for future repairs.',
        'Labor: Your time is the most valuable. Preparing the file, cleaning the bed, and post-processing the part must be accounted for.',
      ],
    },
    {
      type: 'title',
      text: 'How to calculate amortization?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A simple way is to divide the purchase price of your printer by its estimated useful life in hours. For example, if a printer costs $400 and you expect it to work at least 2000 hours before a major renovation, its amortization cost is <strong>$0.20 per hour</strong>.',
    },
    {
      type: 'tip',
      title: 'Save on Electricity',
      html: '<p>If you print a lot, consider closing your printer with an enclosure. This not only helps to print technical materials but also retains heat and makes the heated bed consume much less energy to maintain the temperature.</p>',
    },
    {
      type: 'title',
      text: 'Sales Price Strategies',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Once you know your base cost, you must decide your margin. In the world of on-demand 3D printing, a margin of 50-100% over the total cost is common to cover the risk of unexpected failures and commercial profit. If the part requires a lot of manual sanding and painting work, that margin should be higher.',
    },
    {
      type: 'summary',
      items: [
        'Pricing by time: Ideal for pure printing services.',
        'Pricing by gram: Common for massive but simple parts.',
        'Pricing by value: If the design is unique, the price should not be based only on cost, but on what the client is willing to pay.',
      ],
    },
  ],
  faqTitle: 'Frequently Asked Questions about 3D Costs',
  faq: faqData,
  bibliographyTitle: 'Bibliography and Resources',
  bibliography: [
    {
      name: 'PrusaPrinters: Calculating 3D printing costs',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: Material and Cost Estimation',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: Additive manufacturing cost guide',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
