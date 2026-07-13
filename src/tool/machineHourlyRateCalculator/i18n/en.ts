import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'machine-hourly-rate-production-cost-calculator';
const title = 'Machine Hourly Rate & Production Cost Calculator';
const description =
  'Calculate the real operating cost of a 3D printer from power consumption, electricity tariff, machine purchase price, useful life, and print duration.';

const faqData = [
  {
    question: 'How do I calculate the hourly cost of a 3D printer?',
    answer:
      'Add the hourly electricity cost to the hourly depreciation cost. Electricity is watts divided by 1000 multiplied by the electricity tariff. Depreciation is purchase price divided by useful life hours.',
  },
  {
    question: 'Why does depreciation matter in 3D printing pricing?',
    answer:
      'Depreciation represents the machine value consumed while producing parts. Ignoring it can make a print look profitable while the printer silently loses resale value, reliability, and replacement capacity.',
  },
  {
    question: 'What useful life should I use for a desktop 3D printer?',
    answer:
      'A 5000 hour placeholder is a practical starting point for many desktop printers, but production farms should replace it with maintenance history, expected replacement cycle, and actual uptime data.',
  },
  {
    question: 'Is this the same as a full 3D printing quote?',
    answer:
      'No. This calculator covers machine electricity and hardware amortization. A complete quote should also include filament or resin, labor, failed prints, post-processing, packaging, overhead, and margin.',
  },
];

const howToData = [
  { name: 'Enter measured printer power', text: 'Use average watts during a comparable print, not only the power supply rating.' },
  { name: 'Set the print duration', text: 'Move the duration slider to the expected machine time for the job or production batch.' },
  { name: 'Add energy and asset inputs', text: 'Enter the electricity tariff, machine purchase price, and estimated useful life in operating hours.' },
  { name: 'Read the cost split', text: 'Use total cost, hourly rate, and the electricity versus depreciation composition to price machine time.' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    '3D printer power consumption calculator',
    'Machine hourly depreciation calculator',
    'Operating cost 3D printing estimator',
    'Electricity versus amortization cost composition',
  ],
  inLanguage: 'en',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Machine hourly rate inputs',
    resultsAriaLabel: 'Machine hourly rate results',
    settingsLabel: 'Quote settings',
    currencyLabel: 'Currency',
    currencyOptions: [
      { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
      { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
      { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
      { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
    ],
    durationLabel: 'Production time',
    powerLabel: 'Average power',
    tariffLabel: 'Electricity tariff',
    purchasePriceLabel: 'Machine purchase price',
    usefulLifeLabel: 'Estimated useful life',
    totalCostLabel: 'Operating cost ticker',
    hourlyRateLabel: 'Machine hourly rate',
    electricityLabel: 'Electricity',
    depreciationLabel: 'Amortization',
    electricityPerHourLabel: 'Power cost per hour',
    depreciationPerHourLabel: 'Asset cost per hour',
    compositionLabel: 'Electricity versus amortization cost composition',
    insightLabel: 'Profitability insight',
    utilizationLabel: 'Utilization pressure',
    utilizationValueLabel: 'Useful life consumed',
    utilizationHint: 'This job consumes the shown share of the machine life assumption.',
    batchLabel: 'Batch operating cost',
    energyUsedLabel: 'Energy used',
    costDriverLabel: 'Main driver',
    energyDriverLabel: 'Energy',
    assetDriverLabel: 'Asset',
    balancedDriverLabel: 'Balanced',
    electricityDominant: 'The job is energy-led: tariff, heated bed size, chamber temperature, and idle warm-up time will move the quote more than the purchase price.',
    depreciationDominant: 'The job is asset-led: machine price and useful life dominate, so every unused hour weakens the economics of this printer.',
    balancedDominant: 'Electricity and amortization are close enough that both should appear in the shop hourly rate instead of hiding one inside markup.',
    hoursUnit: 'h',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'What a Machine Hourly Rate Means in 3D Printing', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>machine hourly rate</strong> is the cost of keeping a printer productively occupied for one hour before material, labor, post-processing, packaging, and profit are added. In 3D printing, the number is often underestimated because visible costs such as filament are easier to notice than hidden costs such as electricity and hardware depreciation. A desktop printer may consume only a few cents of power per hour, yet a professional machine that cost several thousand euros must recover its value over a finite useful life. This calculator isolates those two machine costs so the production quote starts with a measurable baseline.',
    },
    {
      type: 'paragraph',
      html: 'The calculator uses two transparent formulas. Electrical cost is <code>(W / 1000) x T x tariff</code>, where <code>W</code> is average watts, <code>T</code> is print duration in hours, and tariff is the electricity price per kilowatt-hour. Amortization cost is <code>(purchase price / useful life hours) x T</code>. The total operating cost is the sum of both. Because both terms scale with time, the same formulas also produce a clean hourly rate: electricity per hour plus depreciation per hour.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: 'Converts watts to kilowatts', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: 'Energy billing unit', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: 'Straight-line machine cost per hour', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: 'Total operating cost', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use measured average watts',
      html: '<p>The power supply label is a maximum capacity, not the printer consumption during a real job. For a better <strong>3d printer power consumption calculator</strong> input, measure a representative print with a wall meter and average the warm-up, printing, fan, bed, and standby phases.</p>',
    },
    { type: 'title', text: 'Electricity Cost: Turning Watts into Production Cost', level: 2 },
    {
      type: 'paragraph',
      html: 'Electricity cost depends on average power draw, not only on the headline wattage of the printer. A machine with a 350 W power supply may average 90 W on a small PLA job after warm-up, while a large enclosed printer holding a hot bed and chamber can remain much higher for engineering polymers. Heated bed area, enclosure temperature, nozzle temperature, ambient room temperature, fan duty, and idle time before part removal can all change the effective power number.',
    },
    {
      type: 'paragraph',
      html: 'The kilowatt-hour conversion is simple but important. A 180 W printer running for 8 hours uses <code>0.18 kW x 8 h = 1.44 kWh</code>. At €0.25 per kWh, that part of the job costs €0.36. That may sound small, but farms with many machines, long PETG or ASA jobs, heated drying cabinets, and climate control can turn small hourly differences into a meaningful monthly bill.',
    },
    {
      type: 'table',
      headers: ['Input', 'What to enter', 'Common mistake'],
      rows: [
        ['Average power', 'Measured watts across the whole print cycle', 'Using the power supply rating or peak warm-up draw.'],
        ['Duration', 'Machine occupied time in hours', 'Ignoring preheat, cool-down, or queue blocking time.'],
        ['Tariff', 'Actual price per kWh from the bill', 'Using an outdated national average instead of the shop tariff.'],
        ['Currency', 'The currency used in your quoting model', 'Mixing euro hardware cost with dollar energy assumptions.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Energy cost is low until scale makes it visible',
      badge: 'Farm planning',
      html: '<p>One small printer may not justify elaborate energy accounting. Twenty printers running long jobs every day do. The same electricity formula can be used per job, per printer, per cell, or per month by changing only the duration.</p>',
    },
    { type: 'title', text: 'Amortization: The Hidden Cost Behind Printer Profitability', level: 2 },
    {
      type: 'paragraph',
      html: 'Amortization is the financial recognition that a printer is consumed by use. Rails wear, fans age, beds lose flatness, hotends clog, electronics become obsolete, and the machine eventually needs replacement. If a printer costs €900 and the shop expects 5000 useful operating hours, the machine consumes €0.18 of asset value every productive hour. A ten-hour job therefore carries €1.80 of hardware cost before material or labor are considered.',
    },
    {
      type: 'paragraph',
      html: 'Straight-line depreciation is intentionally practical here. It does not try to model tax law, resale value, financing, or maintenance events. Instead, it answers the production pricing question: how much of this machine purchase should be assigned to each hour of work? That number is the foundation for <strong>hourly depreciation rate 3d printer</strong> searches and for any farm that wants replacement money to exist when the printer reaches the end of its economic life.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hobby desktop printer',
          description: 'Low purchase price and irregular use. Electricity may be visible on heated-bed jobs, but amortization still matters if parts are sold.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['Lower capital exposure', 'Useful life often uncertain', 'Manual labor usually dominates quotes'],
        },
        {
          title: 'Prosumer farm printer',
          description: 'Moderate purchase price, high uptime, repeated materials, and many identical jobs make hourly depreciation a key quoting input.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Good fit for 3000-8000 hour life assumptions', 'Track actual repairs', 'Separate machine time from labor'],
        },
        {
          title: 'Industrial system',
          description: 'High capital cost means amortization can dominate. Service contracts, build chamber environment, and qualification time may need extra cost lines.',
          icon: 'mdi:domain',
          points: ['Capital cost dominates', 'Downtime is expensive', 'Add service and facility overhead'],
        },
      ],
    },
    {
      type: 'message',
      title: 'The useful life input deserves attention',
      ariaLabel: 'Useful life accounting note',
      html: '<p>The default 5000 hours is a starting placeholder, not a universal truth. A lightly used hobby machine may age by obsolescence before reaching that number, while a well-maintained farm machine may exceed it. Use the number that matches your replacement policy.</p>',
    },
    { type: 'title', text: 'Choosing Useful Life Hours Without Guesswork', level: 2 },
    {
      type: 'paragraph',
      html: 'Useful life is the most sensitive accounting assumption in this calculator because it sits in the denominator of the amortization formula. If the same €900 printer is assigned 3000 useful hours, depreciation is €0.30 per hour. At 9000 useful hours, it falls to €0.10 per hour. The printer did not change, but the business expectation changed. That is why a quote should document the chosen life assumption rather than burying it in a generic markup.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use maintenance logs when available: nozzle replacements, fan failures, rail wear, belts, boards, hotends, and bed surfaces reveal the real cost curve.',
        'Separate printer families. A small bedslinger, a CoreXY production machine, and a resin printer should not share one useful life number.',
        'Lower useful life for experimental machines that spend many hours in failed tuning, material testing, or customer-specific validation.',
        'Raise useful life only when uptime, preventive maintenance, spare parts, and replacement history support the assumption.',
        'Review the assumption after major upgrades because a new motion system, enclosure, or hotend may change the economic life of the asset.',
      ],
    },
    {
      type: 'table',
      headers: ['Useful life assumption', 'Best fit', 'Pricing consequence'],
      rows: [
        ['2000-3000 h', 'Experimental, low-cost, poorly documented, or harsh-use machines', 'Higher hourly depreciation protects replacement cash.'],
        ['4000-6000 h', 'Standard desktop or prosumer machines with regular production use', 'Balanced starting range for many small farms.'],
        ['7000-10000 h', 'Stable printer fleet with maintenance data and controlled materials', 'Lower hourly asset cost but requires confidence in uptime.'],
        ['Above 10000 h', 'Industrial or heavily serviced assets with documented life cycle', 'Useful only when service and downtime are accounted for separately.'],
      ],
    },
    {
      type: 'summary',
      title: 'Useful life checklist',
      items: [
        'Match useful life to the printer class, not to a generic internet number.',
        'Document the assumption so quotes remain explainable months later.',
        'Recalculate when the machine is repurposed from hobby use to paid production.',
      ],
    },
    { type: 'title', text: 'Reading the Electricity vs Amortization Split', level: 2 },
    {
      type: 'paragraph',
      html: 'The composition bar shows whether a job is energy-led or asset-led. Energy-led jobs respond strongly to electricity tariff, heated bed strategy, chamber temperature, warm-up behavior, and room conditions. Asset-led jobs respond more strongly to purchase price, useful life, and utilization. A balanced split means neither line should be ignored; both belong in the base machine hourly rate.',
    },
    {
      type: 'paragraph',
      html: 'This split is useful because the same total cost can have different remedies. If electricity dominates, reducing bed temperature, grouping parts to avoid repeated warm-up, insulating an enclosure, or printing during lower tariff windows may help. If amortization dominates, the better lever is utilization: keep the printer booked with profitable jobs, avoid idle capital, and choose machine size carefully instead of buying capacity that sits unused.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Electricity cost', definition: 'The billed energy consumed by the printer during the selected duration.' },
        { term: 'Amortization', definition: 'The share of machine purchase price assigned to the hours used by the job.' },
        { term: 'Useful life', definition: 'The expected number of productive operating hours before the printer is economically replaced.' },
        { term: 'Machine hourly rate', definition: 'Electricity cost per hour plus depreciation cost per hour before material, labor, overhead, and profit.' },
        { term: 'Operating cost', definition: 'The machine cost incurred to keep production running for a specific duration.' },
      ],
    },
    {
      type: 'proscons',
      title: 'What this calculator includes and excludes',
      items: [
        { pro: 'Includes measured power consumption, electricity tariff, duration, purchase price, and useful life.', con: 'Does not include filament, resin, supports, failed prints, labor, rent, software, packaging, or margin.' },
        { pro: 'Shows the cost split so users can identify the main economic driver.', con: 'Uses straight-line depreciation, so it does not model tax depreciation schedules or resale value.' },
        { pro: 'Works for one print, one batch, or a monthly production block by changing duration.', con: 'Requires honest power and useful-life assumptions to avoid false precision.' },
      ],
    },
    { type: 'title', text: 'Using the Result to Set a Profitable Price per Hour', level: 2 },
    {
      type: 'paragraph',
      html: 'The calculated hourly rate is the floor for machine time, not the final selling price. A complete 3D printing quote normally adds material, support waste, purge waste, operator labor, slicing and preparation time, failed-print allowance, maintenance consumables, rent, software, payment fees, taxes, and target margin. The machine hourly rate is still essential because it prevents the printer itself from being treated as free.',
    },
    {
      type: 'paragraph',
      html: 'For example, if the calculator returns €0.225 per machine hour and a job occupies the printer for 14 hours, the operating machine cost is €3.15. If material is €4.80, labor allocation is €6.00, failure allowance is €1.20, and margin is applied afterward, the quote becomes financially traceable. When a customer asks why a long print costs more than the plastic weight suggests, machine time becomes an explainable line item.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Profitability insight',
      html: '<p>This calculation is the base for defining the <strong>price per hour</strong> of any print farm. Once machine cost per hour is known, the shop can decide whether to charge machine time directly, bundle it into material markup, or use it internally to compare printers and materials.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not quote only by grams',
      badge: 'Hidden cost',
      html: '<p>A lightweight part that occupies the printer for 20 hours can consume more machine capacity than a heavy part printed quickly. Weight-based pricing without machine time often underprices slow, tall, fine-layer, or low-flow jobs.</p>',
    },
    { type: 'title', text: 'Practical Examples for Operating Cost 3D Printing Estimates', level: 2 },
    {
      type: 'paragraph',
      html: 'A tuned PLA desktop job may average 120 W, run for 6 hours, use a €0.22/kWh tariff, and sit on a €600 printer with a 5000 hour useful life. Electricity is only €0.158, while amortization is €0.720. The total machine operating cost is about €0.878, and the hourly rate is about €0.146. In this case the job is clearly asset-led: better machine utilization affects profitability more than small power changes.',
    },
    {
      type: 'paragraph',
      html: 'An ASA job on a larger enclosed printer might average 420 W for 18 hours at €0.30/kWh. If the printer cost €1800 and useful life is 4500 hours, electricity is €2.268 and amortization is €7.200, for a total machine cost of €9.468. Even though energy use is much higher, depreciation still dominates because capital cost and long machine occupation are substantial.',
    },
    {
      type: 'paragraph',
      html: 'A resin printer can tell a different story. The printer may consume modest power, but the calculation still applies to machine occupancy. If a build takes 9 hours on a €2500 machine expected to produce 4000 useful hours, amortization alone is €5.625. That number belongs in the quote before resin, gloves, IPA or wash fluid, post-curing, supports, and cleanup labor are added.',
    },
    {
      type: 'summary',
      title: 'Decision rules',
      items: [
        'Use measured average watts for electricity accuracy.',
        'Use realistic useful life hours for asset recovery.',
        'Treat the result as the machine-time floor, then add material, labor, overhead, risk, and margin.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
