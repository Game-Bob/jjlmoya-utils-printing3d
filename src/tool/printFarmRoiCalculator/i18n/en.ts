import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = '3d-print-farm-roi-calculator';
const title = '3D Print Farm ROI Calculator';
const description =
  'Simulate monthly profitability, payback period, and annualized ROI for a 3D printing farm using utilization, failure rate, electricity, overhead, and variable hourly costs.';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: 'How do you calculate ROI for a 3D print farm?',
    answer:
      'Estimate productive monthly hours, multiply them by the selling price per machine hour, subtract fixed, electricity, and variable hourly costs, then compare annual profit with the initial investment.',
  },
  {
    question: 'Why does the success rate affect print farm payback?',
    answer:
      'Failed prints consume machine capacity, material, nozzles, energy, and operator attention without producing billable hours. A lower success rate reduces real productive hours and delays payback.',
  },
  {
    question: 'What should be included in variable cost per hour?',
    answer:
      'Include filament or resin consumption, nozzle wear, build surface wear, routine maintenance parts, consumables, and any per-hour allowance that scales with actual successful production time.',
  },
  {
    question: 'Is payback the same as ROI?',
    answer:
      'No. Payback estimates how many months are needed to recover the initial investment from monthly net profit. ROI compares annualized profit against the original investment as a percentage.',
  },
];

const howToData = [
  { name: 'Enter farm scale', text: 'Add the number of active printers and the initial investment for machines, setup, workstations, and commissioning.' },
  { name: 'Add monthly operating costs', text: 'Enter fixed overhead and electricity as monthly costs, then add variable cost per productive machine hour.' },
  { name: 'Set utilization and success rate', text: 'Use realistic occupancy and success percentages so the model discounts idle time and failed prints.' },
  { name: 'Read profitability outputs', text: 'Compare monthly revenue with costs, then use payback months and annualized ROI to judge investment viability.' },
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
    '3D print farm ROI calculator',
    '3D printing investment payback simulator',
    'Print farm profitability calculator',
    'Utilization and failed print adjustment',
    'Multi-currency operating cost model',
  ],
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Print farm ROI inputs',
    resultsAriaLabel: 'Print farm ROI results',
    currencyLabel: 'Currency',
    currencyOptions,
    printerCountLabel: 'Number of printers',
    initialInvestmentLabel: 'Initial investment',
    fixedMonthlyCostLabel: 'Fixed monthly cost',
    electricityMonthlyCostLabel: 'Electricity monthly cost',
    hourlyRateLabel: 'Selling rate per hour',
    occupancyLabel: 'Average occupancy',
    successRateLabel: 'Success rate',
    variableCostLabel: 'Variable cost per hour',
    averageHoursPerPartLabel: 'Average hours per part',
    paybackLabel: 'Payback period',
    netProfitLabel: 'Net monthly profit',
    annualRoiLabel: 'Annualized ROI',
    productiveHoursLabel: 'Real productive hours',
    revenueLabel: 'Revenue',
    costsLabel: 'Costs',
    fixedCostShortLabel: 'Fixed',
    electricityShortLabel: 'Electricity',
    variableCostShortLabel: 'Variable',
    marginLabel: 'Net margin',
    breakEvenPartsLabel: 'Break-even parts',
    breakEvenHoursLabel: 'Break-even hours',
    stressScenarioLabel: 'Worst case scenario',
    exportSummaryLabel: 'Download summary',
    chartLabel: 'Monthly revenue versus operating costs',
    monthsUnit: 'months',
    hoursUnit: 'h',
    percentUnit: '%',
    notViableLabel: 'Not viable',
    positiveInsight: 'Monthly profit is positive after utilization, success rate, and operating costs.',
    negativeInsight: 'Operating costs exceed adjusted revenue; improve utilization, pricing, or failure rate before scaling.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: 'parts/month',
    reportFilename: 'print-farm-roi-summary.csv',
    reportTitle: '3D Print Farm ROI Viability Report',
    reportCurrencyLabel: 'Currency',
  },
  seo: [
    { type: 'title', text: 'How This 3D Print Farm ROI Calculator Works', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>3d print farm ROI calculator</strong> should answer a specific investment question: will a group of printers recover its setup cost quickly enough to justify the capital, space, maintenance, and operational risk? This simulator models that question from monthly machine capacity. Each printer contributes 720 gross hours in a standard 30 day month, then the model discounts those hours by occupancy and print success rate. The result is not theoretical capacity; it is the billable production time that survives idle periods, job queues, failed prints, reprints, calibration, and practical downtime.',
    },
    {
      type: 'paragraph',
      html: 'The calculation chain is intentionally transparent. Gross monthly hours equal <code>printers x 720</code>. Real productive hours equal gross hours multiplied by average occupancy and success rate. Monthly revenue equals productive hours multiplied by the customer-facing hourly rate. Operating costs combine fixed monthly overhead, electricity, and variable hourly costs. Net monthly profit is revenue minus those operating costs. Payback period divides the initial investment by net monthly profit, while annualized ROI compares twelve months of net profit against the initial investment.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 h', label: 'Monthly gross capacity per printer', icon: 'mdi:clock-outline' },
        { value: 'U x S', label: 'Utilization and success adjustment', icon: 'mdi:percent-outline' },
        { value: 'Revenue - cost', label: 'Net monthly profit', icon: 'mdi:finance' },
        { value: 'Investment / profit', label: 'Payback period', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: 'Use conservative inputs for investment decisions',
      html: '<p>For a first pass, enter the utilization you can defend with current demand, not the utilization you hope to reach after marketing improves. A farm that only works at optimistic occupancy is not yet a robust investment.</p>',
    },
    { type: 'title', text: 'Why Utilization Changes Print Farm Profitability', level: 2 },
    {
      type: 'paragraph',
      html: 'Utilization is the percentage of available machine time that is actually printing paid or sellable work. It is the strongest lever in many small farm models because the initial investment is fixed. A printer bought for production costs the same whether it is booked eight hours per day or twenty hours per day. Higher occupancy spreads rent, setup, spare parts inventory, software, and machine depreciation across more billable hours.',
    },
    {
      type: 'paragraph',
      html: 'The calculator treats occupancy as a direct multiplier on gross capacity. Ten printers create 7200 gross machine hours per month. At 40% occupancy, only 2880 hours enter the revenue model before the success-rate adjustment. At 75% occupancy, 5400 hours enter the model. The difference can decide whether payback takes months, years, or never occurs.',
    },
    {
      type: 'table',
      headers: ['Occupancy level', 'Operational meaning', 'ROI implication'],
      rows: [
        ['Below 30%', 'Machines spend most of the month waiting for orders, files, operators, or maintenance.', 'Initial investment is difficult to recover unless hourly pricing is high.'],
        ['30-55%', 'Common early-stage range for farms with mixed demand and manual handling.', 'Profitability depends heavily on fixed overhead and failure rate.'],
        ['55-75%', 'Healthy booking level with room for urgent jobs, maintenance, and setup changes.', 'Often the first range where payback becomes realistic.'],
        ['Above 75%', 'High utilization that requires reliable scheduling, material flow, and preventive maintenance.', 'Strong ROI potential but little tolerance for breakdowns or operator bottlenecks.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'High occupancy is not the same as high profit',
      badge: 'Pricing risk',
      html: '<p>A farm can be busy and still lose money if the hourly rate is too low, reprints are frequent, material waste is high, or fixed overhead was underestimated. Always compare occupancy with margin, not only with revenue.</p>',
    },
    { type: 'title', text: 'Accounting for Failed Prints and Reprints', level: 2 },
    {
      type: 'paragraph',
      html: 'The success rate input is what separates this <strong>3d printing investment payback simulator</strong> from a simple capacity calculator. Failed prints consume the same calendar time as successful prints but do not create the same sellable output. They may also consume filament, resin, build plates, nozzles, electricity, labor, and customer goodwill. A farm with a 90% success rate loses one out of every ten potential production blocks before revenue is counted.',
    },
    {
      type: 'paragraph',
      html: 'Success rate should be measured over comparable work. A farm printing repeated PLA fixtures may sustain a very high success rate after process tuning. A farm producing one-off customer models, tall parts, technical polymers, resin miniatures, or multi-material jobs may need a lower assumption. If you mix simple and risky work, run the calculator twice: once for standard production and once for custom jobs.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Repeat production',
          description: 'Known part geometry, tuned profiles, predictable materials, and stable demand.',
          icon: 'mdi:repeat',
          points: ['Higher success assumption', 'Lower setup uncertainty', 'Better payback confidence'],
        },
        {
          title: 'Custom print service',
          description: 'Files vary by customer, geometry, support strategy, and quality expectation.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['Moderate success assumption', 'More quoting variance', 'Needs reprint allowance'],
        },
        {
          title: 'Experimental materials',
          description: 'Engineering polymers, flexible materials, filled filaments, and resin process tuning.',
          icon: 'mdi:flask-outline',
          points: ['Lower success assumption', 'Higher consumable wear', 'Use cautious ROI inputs'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Failure rate belongs in the financial model',
      ariaLabel: 'Failed print accounting note',
      html: '<p>Do not hide reprints inside vague overhead. A visible success-rate input makes the investment case easier to challenge, improve, and explain.</p>',
    },
    { type: 'title', text: 'Building a Reliable Monthly Cost Model', level: 2 },
    {
      type: 'paragraph',
      html: 'Operating cost has three layers in this tool. Fixed monthly cost covers expenses that exist even when printers are idle: rent, internet, insurance, software, accounting, storage, basic labor coverage, climate control allocation, and other overhead. Electricity monthly cost captures energy used by printers and directly related production equipment. Variable cost per hour covers costs that scale with productive machine time, such as filament, resin, nozzles, PTFE tubes, build surface wear, filters, lubricant, maintenance parts, and cleaning consumables.',
    },
    {
      type: 'paragraph',
      html: 'Keeping electricity as a separate monthly input is useful for farms because power consumption is often tracked from bills or submetering rather than calculated print by print. A heated bed farm producing PETG, ASA, ABS, or nylon can have a very different energy profile from a PLA farm in the same room. If you already calculate electricity per machine hour, you can include that figure inside variable cost per hour and set the monthly electricity field to zero.',
    },
    {
      type: 'table',
      headers: ['Cost input', 'Include', 'Avoid'],
      rows: [
        ['Fixed monthly cost', 'Rent, insurance, internet, software, baseline staffing, storage.', 'Material used only when printers run.'],
        ['Electricity monthly cost', 'Printer energy, dryers, wash stations, curing, ventilation, climate share.', 'Unrelated household or office power.'],
        ['Variable cost per hour', 'Filament, resin, nozzles, maintenance consumables, per-hour wear allowance.', 'One-time machine purchase cost.'],
        ['Initial investment', 'Printers, racks, setup, tools, dryers, farm management hardware.', 'Monthly costs that recur after launch.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Gross monthly hours', definition: 'Theoretical machine capacity before utilization and failed-print adjustments.' },
        { term: 'Real productive hours', definition: 'Capacity that remains after applying occupancy and success rate.' },
        { term: 'Payback period', definition: 'Months required for net monthly profit to recover the initial investment.' },
        { term: 'Annualized ROI', definition: 'Twelve months of net profit minus initial investment, divided by initial investment.' },
        { term: 'Variable hourly cost', definition: 'Consumables and maintenance allowance that scale with productive print time.' },
      ],
    },
    { type: 'title', text: 'Setting the Selling Rate per Machine Hour', level: 2 },
    {
      type: 'paragraph',
      html: 'The selling rate per hour is the amount charged to the customer for one productive machine hour. It can be shown directly on quotes or embedded inside a price formula that also includes material, labor, finishing, packaging, and margin. The key is consistency: if the hourly rate is meant to include material, do not also add the same material again as variable cost per hour. If the hourly rate is only machine time, make sure material and labor are represented elsewhere in the business model.',
    },
    {
      type: 'paragraph',
      html: 'A rate that looks competitive on single jobs may fail at farm scale. Long prints occupy capacity that could have served other work. Fine layer heights, slow materials, tall parts, and support-heavy geometry all reduce throughput. A <strong>print farm profitability calculator</strong> should therefore be used together with real quoting data: average job duration, average paid hourly equivalent, customer acceptance rate, and monthly order volume.',
    },
    {
      type: 'proscons',
      title: 'Hourly pricing in a print farm',
      items: [
        { pro: 'Makes machine occupancy visible and protects long prints from being underpriced.', con: 'Customers may need explanation when a lightweight part takes many hours.' },
        { pro: 'Works well for internal ROI planning and capacity decisions.', con: 'Does not replace material, labor, finishing, and risk pricing.' },
        { pro: 'Allows quick comparison between printer types and utilization scenarios.', con: 'Can be misleading if failure rate and queue time are ignored.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Pricing checkpoint',
      html: '<p>If a small change in hourly rate completely changes payback, the investment is sensitive to market pricing. Validate the rate against actual customer demand before buying more printers.</p>',
    },
    { type: 'title', text: 'Interpreting Payback Period and Annualized ROI', level: 2 },
    {
      type: 'paragraph',
      html: 'Payback period is easy to understand because it is expressed in months. If the initial investment is 18000 and net monthly profit is 3000, payback is six months. If net monthly profit is zero or negative, payback is not viable because the farm never recovers the investment under the current assumptions. Payback is useful for cash planning, equipment financing, and deciding whether expansion should happen now or after demand improves.',
    },
    {
      type: 'paragraph',
      html: 'Annualized ROI is stricter because it compares one year of net profit with the initial investment. A farm can have positive monthly profit but still show a weak annualized ROI if payback is slow. For example, a farm that earns 1000 per month after costs on a 24000 investment produces 12000 per year before considering the original investment, so the first-year ROI remains negative. That does not automatically mean the business is bad, but it does mean the investor needs a longer horizon.',
    },
    {
      type: 'summary',
      title: 'Decision rules',
      items: [
        'Use payback to understand cash recovery speed.',
        'Use annualized ROI to compare the farm against other uses of capital.',
        'Rerun the model with lower utilization and success rate before committing to expansion.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Scenario testing is the real value',
      badge: 'Planning',
      html: '<p>Run a base case, a conservative case, and a stressed case. The best investment is not the one that looks great only in the optimistic scenario; it is the one that remains understandable when demand, failures, or electricity costs move against you.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
