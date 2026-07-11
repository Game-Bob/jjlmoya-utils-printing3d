import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'bulk-filament-roi-estimator';
const title = 'Bulk Filament ROI Estimator';
const description = 'Compare 1kg filament spools against 3kg, 5kg, or custom bulk spools with humidity risk, real savings, and local currency formatting.';

const faqData = [
  {
    question: 'Is a 5kg filament spool always cheaper than buying five 1kg spools?',
    answer: 'No. It is cheaper only when the cost per gram is lower and you can consume the material before moisture exposure reduces print quality. Slow consumption can turn a bulk discount into waste.',
  },
  {
    question: 'Why does the calculator subtract a risk penalty?',
    answer: 'The penalty estimates lost value when the expected consumption time is longer than your safe storage window. It is not an exchange-rate conversion or a laboratory moisture model; it is a planning risk adjustment.',
  },
  {
    question: 'Do I need live currency exchange rates?',
    answer: 'No. The tool uses a local approximate exchange-rate table to convert visible prices when you switch currency. It preserves equivalence without contacting a server, so final purchasing decisions should still use the price shown by your shop or bank.',
  },
  {
    question: 'What safe storage time should I enter for PLA, PETG, TPU, or Nylon?',
    answer: 'Use the period in which you can keep that specific material dry in your environment. PLA may tolerate longer storage than Nylon or TPU, but an open room, humid climate, or poor bag seal can shorten the safe window dramatically.',
  },
];

const howToData = [
  {
    name: 'Enter standard spool price',
    text: 'Type the price of the 1kg spool you would normally buy. The standard spool weight can be adjusted if your supplier uses another format.',
  },
  {
    name: 'Enter the bulk offer',
    text: 'Choose 3kg, 5kg, or a custom weight and type the full price of that larger spool in the same currency.',
  },
  {
    name: 'Model storage risk',
    text: 'Add your monthly consumption and the maximum storage time you trust before humidity, brittleness, or drying effort becomes a real cost.',
  },
  {
    name: 'Read the real saving',
    text: 'Use the real savings number as the purchasing signal because it includes both the bulk discount and the degradation penalty.',
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

const howToSchema: WithContext<HowTo> = {
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: 'Currency',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial',
    standardTitle: 'Standard spool',
    bulkTitle: 'Bulk spool',
    consumptionTitle: 'Consumption and storage',
    standardWeightLabel: 'Standard weight',
    standardPriceLabel: 'Standard spool price',
    bulkWeightLabel: 'Bulk weight',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6.6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'Other',
    bulkPriceLabel: 'Bulk spool price',
    customWeightLabel: 'Custom bulk weight',
    monthlyUseLabel: 'Monthly consumption',
    safeStorageLabel: 'Safe storage window',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'months',
    realSavingsLabel: 'Real savings after risk',
    grossSavingsLabel: 'Gross saving',
    riskPenaltyLabel: 'Humidity risk penalty',
    breakEvenLabel: 'Time to consume',
    viabilityLabel: 'Viability',
    tableMetricLabel: 'Metric',
    tableStandardLabel: '1kg spool',
    tableStandardImperialLabel: '2.2lb spool',
    tableBulkLabel: 'Bulk spool',
    costPerGramMetric: 'Cost per gram',
    costPerOunceMetric: 'Cost per ounce',
    totalSpoolMetric: 'Spool price',
    usableWindowMetric: 'Consumption window',
    profitableLabel: 'Profitable',
    neutralLabel: 'Neutral',
    poorLabel: 'Poor value',
    humidityWarningTitle: 'Moisture degradation risk',
    humidityWarning: 'Risk of degradation: buying this spool may lose money if you do not have a drying system or airtight storage.',
    safeMessage: 'Storage risk is inside your selected safe window. Keep the spool sealed and dry to preserve the expected saving.',
  },
  seo: [
    {
      type: 'title',
      text: 'How to decide if bulk filament is really cheaper',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A 3kg or 5kg filament spool looks attractive because the sticker price per kilogram is usually lower than a single 1kg spool. The mistake is comparing only the checkout total. A correct comparison normalizes both offers to <strong>cost per gram</strong>, multiplies the difference by the amount of material you will actually buy, and then asks whether the material will remain printable until you finish it.',
    },
    {
      type: 'paragraph',
      html: 'The core formula is simple: divide each spool price by its weight in grams. If a 1kg spool costs 24.99 and a 5kg spool costs 89.99, the 1kg spool costs 0.02499 per gram and the bulk spool costs 0.017998 per gram. The apparent saving is the gram difference multiplied by 5000 grams. That number is useful, but it is still incomplete if the spool will sit open for months.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: 'Reference mass for a common desktop filament spool' },
        { value: '3-5kg', label: 'Typical bulk format where discounts become visible' },
        { value: '0 APIs', label: 'Currency equivalence uses local approximate rates instead of a live server call' },
      ],
    },
    {
      type: 'table',
      headers: ['Question', 'What to enter', 'Why it matters'],
      rows: [
        ['What do I normally buy?', 'The 1kg spool price', 'This sets the baseline cost per gram.'],
        ['What is the bulk offer?', 'Total price and bulk weight', 'This creates the discounted cost per gram.'],
        ['How fast do I print?', 'Monthly kg consumed', 'This estimates how long the spool will stay in storage.'],
        ['How good is my storage?', 'Safe months before degradation', 'This defines when the risk penalty begins.'],
      ],
    },
    {
      type: 'title',
      text: 'Why moisture changes the ROI calculation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Filament is not a cash equivalent sitting safely on a shelf. Many polymers absorb moisture from air, and wet filament can print with bubbles, stringing, brittle extrusion, cloudy surfaces, weak layer adhesion, and inconsistent flow. The exact speed depends on material, humidity, packaging, and whether the spool is stored in a dry box, sealed bag, or open holder.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The hidden bulk spool failure mode',
      badge: 'Planning risk',
      html: 'A 5kg spool can be a bad buy even when the price per gram is excellent. If your printer consumes 0.5kg per month and your safe storage window is 3 months, that spool needs about 10 months to finish. The discount must be large enough to pay for the added drying, sealing, failed prints, or discarded material risk.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Fast user',
          description: 'A small print farm, cosplay builder, or product batch can consume 3kg to 5kg quickly. Bulk filament usually makes sense because storage time is short.',
          points: ['High monthly use', 'Low shelf exposure', 'Discount becomes real cash saved'],
        },
        {
          title: 'Intermittent hobby user',
          description: 'A user printing weekends or occasional repairs may take many months to finish a large spool. Moisture risk can erase the discount.',
          points: ['Low monthly use', 'Long open-spool life', 'Dry storage matters more'],
        },
        {
          title: 'Technical material user',
          description: 'Materials such as Nylon, TPU, PC blends, and some PETG grades often need stricter drying discipline. Bulk purchases should be paired with storage equipment.',
          points: ['Higher moisture sensitivity', 'Dry box recommended', 'Penalty threshold should be conservative'],
        },
      ],
    },
    {
      type: 'title',
      text: 'What the real savings number means',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The tool shows gross saving first, then subtracts a degradation penalty when the estimated consumption time exceeds the safe storage window. This penalty is deliberately conservative rather than a laboratory prediction. It represents the economic reality that wet or over-aged filament often creates non-obvious costs: drying electricity, extra handling, failed prints, nozzle clogs, surface defects, and the possibility that part of the spool becomes unsuitable for visible or structural work.',
    },
    {
      type: 'list',
      items: [
        'Positive real savings means the bulk discount survives the storage-risk adjustment.',
        'Neutral means the decision depends on convenience, color availability, shipping, and whether you already own a dry box.',
        'Poor value means the bulk spool is either not cheaper per gram or the risk-adjusted saving is negative.',
        'The warning message appears when consumption months are greater than the safe storage window you entered.',
      ],
    },
    {
      type: 'proscons',
      title: 'Bulk filament purchase tradeoffs',
      items: [
        { pro: 'Lower cost per gram for high-volume printing.', con: 'More capital locked into one material, color, and supplier batch.' },
        { pro: 'Fewer spool changes during long production runs.', con: 'A larger exposed mass can degrade before it is consumed.' },
        { pro: 'Less packaging waste per kilogram.', con: 'Large spools may need stronger holders or external spool stands.' },
        { pro: 'Useful for repeatable farm jobs and batch production.', con: 'Bad fit for rare colors, experimental materials, or slow hobby use.' },
      ],
    },
    {
      type: 'title',
      text: 'How to choose a safe storage window',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The safe storage window is not a universal material constant. It is the amount of time you personally trust the filament to remain printable under your storage conditions. A sealed bag with fresh desiccant in a dry room is very different from an open spool beside a printer in a humid garage. For a conservative buying decision, enter the number of months after which you would start drying the spool before important prints.',
    },
    {
      type: 'table',
      headers: ['Situation', 'Suggested planning behavior', 'Reason'],
      rows: [
        ['Open spool holder in humid room', 'Use a short safe window', 'Moisture exposure is continuous.'],
        ['Airtight box with desiccant', 'Use a longer safe window', 'The spool is protected between prints.'],
        ['Dry box feeding the printer', 'Use a longer but realistic window', 'Printing and storage are both controlled.'],
        ['Nylon, TPU, PC, or soluble support', 'Be conservative', 'These materials can become print-problematic quickly when wet.'],
        ['PLA used for rough prototypes', 'Risk tolerance can be higher', 'Minor cosmetic issues may be acceptable for non-critical parts.'],
      ],
    },
    {
      type: 'tip',
      title: 'Use the calculator before the sale ends',
      html: 'Flash discounts often make bulk spools feel urgent. Enter the sale price, shipping-inclusive price if possible, and your realistic monthly use. If the consumption time is longer than your storage window, the sale needs to be strong enough to pay for the added risk.',
    },
    {
      type: 'title',
      text: 'Currency conversion without exchange-rate APIs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This estimator is client-side by design. It does not fetch live exchange rates, but the currency selector still applies a local conversion multiplier when the user changes currency. That means a spool entered as 24.99 EUR becomes an approximate equivalent in USD, GBP, JPY, or another supported currency instead of merely replacing the symbol. The rates are planning estimates, so checkout prices, card fees, taxes, and marketplace-specific conversion spreads should still be checked before buying.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Cost per gram', definition: 'The spool price divided by total filament grams. This is the normalized unit used for fair comparison.' },
        { term: 'Gross saving', definition: 'The price advantage before humidity or storage risk is considered.' },
        { term: 'Risk penalty', definition: 'A planning deduction applied when the spool takes longer to consume than the safe storage window.' },
        { term: 'Real saving', definition: 'Gross saving minus the risk penalty. This is the main purchase signal.' },
        { term: 'Consumption window', definition: 'Bulk spool weight divided by estimated monthly use.' },
      ],
    },
    {
      type: 'summary',
      title: 'Practical buying rule',
      items: [
        'Buy bulk when the real saving is clearly positive and the consumption window fits your storage setup.',
        'Avoid bulk when you are buying a rare color that will sit idle after one project.',
        'Treat drying equipment as part of the bulk-filament system, not as an optional luxury for moisture-sensitive polymers.',
        'Compare delivered prices, not only product-page prices, when shipping differs between spool sizes.',
      ],
    },
    {
      type: 'message',
      title: 'Bottom line',
      html: 'A bulk spool is profitable when three conditions align: lower cost per gram, enough monthly consumption, and storage that keeps the filament printable. If one condition fails, the apparent discount can become a disguised material loss.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
