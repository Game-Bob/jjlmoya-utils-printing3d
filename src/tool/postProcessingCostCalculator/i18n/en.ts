import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'post-processing-cost-calculator';
const title = '3D Print Post Processing Cost Calculator';
const description =
  'Estimate manual finishing, support removal, sanding, painting, other labor, consumables, and currency-adjusted post-processing cost for 3D printed parts.';

const faqData = [
  {
    question: 'How do I calculate 3D print post-processing cost?',
    answer:
      'Add all manual finishing minutes, multiply the total by the hourly labor rate divided by 60, then add consumables. This calculator also shows the cost share of each finishing phase.',
  },
  {
    question: 'Should consumables be included in manual finishing cost?',
    answer:
      'Yes. Sandpaper, filler primer, paint, gloves, masking tape, IPA, resin cleaning fluid, wipes, and small tooling wear can be large enough to change the quote on finished parts.',
  },
  {
    question: 'Does currency conversion change the cost formula?',
    answer:
      'No. Currency only changes the displayed monetary scale. The labor formula remains minutes multiplied by hourly rate divided by 60 plus consumables.',
  },
  {
    question: 'What hourly rate should I use for 3D printing labor?',
    answer:
      'Use the loaded shop labor rate, not only take-home pay. Include wages, payroll burden, paid non-billable time, supervision, and the level of skill required for cosmetic finishing.',
  },
];

const howToData = [
  { name: 'Enter finishing minutes', text: 'Add support removal, sanding, painting, and other manual time in minutes.' },
  { name: 'Set labor rate and consumables', text: 'Enter your hourly finishing rate and the direct consumables cost in the selected currency.' },
  { name: 'Choose currency and factor', text: 'Use the currency selector for symbols and optional conversion factor for quote adjustments.' },
  { name: 'Copy the result', text: 'Use the copy button to paste total, labor, consumables, and minutes into a quotation.' },
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
    '3d print post processing cost calculator',
    '3d printing labor cost estimate',
    'manual finishing cost 3d printing',
    'post-processing hourly rate calculator',
  ],
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Post-processing cost inputs',
    resultsAriaLabel: 'Post-processing cost results',
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
    currencyOptionSeparator: ' - ',
    supportLabel: 'Support removal',
    sandingLabel: 'Sanding',
    paintingLabel: 'Painting',
    otherLabel: 'Other labor',
    hourlyRateLabel: 'Hourly rate',
    consumablesLabel: 'Consumables',
    conversionFactorLabel: 'Conversion factor',
    conversionFactorUnit: 'x',
    conversionHint: 'Leave at 1 when the rate is already entered in local currency; change it to apply a global quote multiplier.',
    minutesUnit: 'min',
    hourUnit: 'h',
    rateUnitSeparator: '/',
    totalLabel: 'Post-processing total',
    laborLabel: 'Labor',
    consumablesBreakdownLabel: 'Consumables',
    timeLabel: 'Manual time',
    effectiveRateLabel: 'Effective rate',
    breakdownLabel: 'Cost share by finishing phase',
    copyLabel: 'Copy result',
    copiedLabel: 'Copied',
    copyTemplate: 'Post-processing cost: {total} ({minutes}; labor {labor}; consumables {consumables})',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'What This 3D Print Post Processing Cost Calculator Measures', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>3d print post processing cost calculator</strong> should answer a practical quoting question: how much money is consumed after the printer stops? The printed part may already have a machine-time cost and a material cost, but many paid jobs are won or lost in support removal, sanding, filler, priming, painting, cleaning, masking, inspection, and rework. This calculator separates those manual finishing tasks into minutes, multiplies them by a post-processing hourly rate, then adds direct consumables so the final number can be pasted into a quote.',
    },
    {
      type: 'paragraph',
      html: 'The base formula is intentionally transparent: <code>((support + sanding + painting + other minutes) x (hourly rate / 60)) + consumables</code>. The optional conversion factor multiplies the hourly rate and consumables when a shop wants to scale values for currency conversion, regional price lists, subcontractor markup, or a temporary adjustment. If the user enters a local labor rate directly, the factor should stay at <code>1</code> and the result remains independent of exchange-rate assumptions.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'min x rate/60', label: 'Labor cost formula', icon: 'mdi:clock-outline' },
        { value: '5 phases', label: 'Support, sanding, painting, other, consumables', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: 'Default conversion factor', icon: 'mdi:swap-horizontal' },
        { value: 'Live', label: 'No calculate button required', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Quote the person, not the printer',
      html: '<p>Post-processing is usually labor-led. A slow print can be cheap to finish, while a small visual part with supports on cosmetic faces can require expensive skilled handling. Treat the <strong>3d printing labor cost estimate</strong> as its own line instead of hiding it inside material markup.</p>',
    },
    { type: 'title', text: 'Support Removal: The First Manual Cost Driver', level: 2 },
    {
      type: 'paragraph',
      html: 'Support removal is not just the time needed to pull plastic away from a model. It can include cutting, warming, dissolving, rinsing, scraping, trimming support nubs, protecting fragile features, and checking whether support scars require extra surface work. FDM tree supports, dense interface layers, SLA support tips, and SLS depowdering all create different labor profiles. For a reliable <strong>manual finishing cost 3d printing</strong> estimate, support time should be measured on comparable jobs rather than guessed from print duration.',
    },
    {
      type: 'table',
      headers: ['Support situation', 'Typical time behavior', 'Quoting note'],
      rows: [
        ['Easy breakaway supports', 'Short, predictable removal', 'Often suitable for a fixed minute allowance per part.'],
        ['Dense support interface', 'Longer trimming and surface cleanup', 'Add sanding minutes separately so the cost driver stays visible.'],
        ['Resin miniatures or delicate models', 'Slow clipping to avoid damage', 'Use a higher labor rate if skilled hand work is required.'],
        ['Soluble support', 'Less manual cutting but more process time', 'Include solution handling and drying if the operator is involved.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not price support removal from slicer support volume alone',
      badge: 'Labor risk',
      html: '<p>Support volume can be low while access is terrible. A small support hidden inside a narrow feature may cost more labor than a large external support that peels off cleanly.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Record support removal minutes for repeated part families.',
        'Separate removal from sanding so support strategy decisions are easier to compare.',
        'Increase the estimate for fragile geometry, thin pins, miniatures, and customer-facing surfaces.',
        'Use the same currency and hourly rate basis as the rest of the quote.',
      ],
    },
    { type: 'title', text: 'Sanding, Filling, and Surface Preparation', level: 2 },
    {
      type: 'paragraph',
      html: 'Sanding is often the largest hidden cost in finished 3D prints because it is iterative. The operator may move through coarse sanding, filler, cure or dry time, fine sanding, spot correction, and inspection under angled light. Layer height, material hardness, support scars, required gloss level, and part geometry all change the amount of hand work. A functional jig may need five minutes; a display prototype may need an hour before paint is even opened.',
    },
    {
      type: 'paragraph',
      html: 'The calculator treats sanding as minutes multiplied by the hourly finishing rate because the process is constrained by the operator more than by the machine. Consumables such as abrasives, filler primer, putty, tack cloths, and masking materials should go into the consumables field instead of being buried in the labor rate. This keeps the <strong>3d print finishing cost analysis</strong> readable: labor shows time pressure, consumables show purchased inputs.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Functional finish',
          description: 'Sharp edges cleaned, supports removed, and rough scars reduced enough for assembly.',
          icon: 'mdi:wrench-outline',
          points: ['Lowest sanding time', 'Minimal consumables', 'Inspection focuses on fit'],
        },
        {
          title: 'Presentation finish',
          description: 'Visible faces smoothed, primer used selectively, and layer lines reduced for customer review.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['Moderate sanding time', 'Primer and filler likely', 'Cosmetic surfaces drive labor'],
        },
        {
          title: 'Paint ready finish',
          description: 'Progressive sanding, filling, masking, and defect correction before color coats.',
          icon: 'mdi:spray',
          points: ['Highest manual time', 'Consumables matter', 'Rework allowance recommended'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Abrasives are consumables',
      ariaLabel: 'Consumables note',
      html: '<p>Sandpaper sheets, sanding sponges, needle files, filler, gloves, and wipes are not free. Add their direct cost when the job consumes a meaningful share of them.</p>',
    },
    { type: 'title', text: 'Painting and Coating Cost Estimation', level: 2 },
    {
      type: 'paragraph',
      html: 'Painting minutes should include active operator time: masking, mixing, spraying, brush work, touch-up, de-masking, cleaning the work area, and inspection. Passive drying or curing time should only be added when it blocks the operator or occupies scarce booth space that is charged as labor or overhead. This distinction keeps a <strong>post-processing hourly rate calculator</strong> from turning every waiting hour into labor cost when nobody is actively working on the part.',
    },
    {
      type: 'table',
      headers: ['Paint task', 'Enter as labor?', 'Enter as consumables?'],
      rows: [
        ['Masking and demasking', 'Yes, active minutes', 'Tape, film, plugs, and stencils'],
        ['Mixing paint or resin coating', 'Yes, active minutes', 'Paint, thinner, cups, filters, gloves'],
        ['Spraying or brushing', 'Yes, active minutes', 'Coating material and cleaning solvent'],
        ['Drying time', 'Only if it blocks paid labor or booth capacity', 'Usually no direct material unless heat or lamps are billed separately'],
      ],
    },
    {
      type: 'tip',
      title: 'Charge color complexity explicitly',
      html: '<p>A single primer coat and a two-tone masked finish can have similar material cost but very different labor cost. Use the painting minutes field to expose the difference before margin is applied.</p>',
    },
    {
      type: 'proscons',
      title: 'Flat finishing allowance vs measured finishing minutes',
      items: [
        { pro: 'A flat allowance is fast for repeat jobs with stable finish requirements.', con: 'It hides which phase is consuming profit when a job changes.' },
        { pro: 'Measured minutes make the estimate auditable and easy to update.', con: 'They require the shop to track real finishing time for common part types.' },
        { pro: 'The visual cost bar makes customer-facing quotes easier to explain internally.', con: 'It does not replace judgment about cosmetic risk and rework probability.' },
      ],
    },
    { type: 'title', text: 'Consumables and Post-Processing Overhead', level: 2 },
    {
      type: 'paragraph',
      html: 'Consumables are direct materials consumed during finishing. They can include sandpaper, primer, filler, paint, resin wash fluid, IPA, towels, nitrile gloves, blades, masking tape, protective plugs, disposable cups, filters, polishing compound, and clear coat. Some shops roll these into overhead, but quoting them as a direct field is safer for jobs with unusual finish standards, large surface area, aggressive sanding, or solvent-heavy workflows.',
    },
    {
      type: 'paragraph',
      html: 'A separate consumables field also helps with <strong>post-processing overhead calculator</strong> workflows. Overhead is normally broader than consumables: rent, extraction, lighting, air filtration, compressor use, maintenance, software, supervision, and administrative time. This calculator does not pretend to allocate every overhead line. Instead, it gives a clean direct-cost subtotal that can feed a larger quote model where overhead and margin are applied afterward.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Labor rate', definition: 'The hourly cost or selling rate assigned to active manual finishing time.' },
        { term: 'Consumables', definition: 'Direct materials used up during post-processing, such as abrasives, coatings, gloves, and cleaning fluids.' },
        { term: 'Conversion factor', definition: 'A global multiplier applied to money inputs for currency scaling or quote adjustments.' },
        { term: 'Direct cost', definition: 'A cost that can be tied to the specific part or batch being finished.' },
        { term: 'Overhead', definition: 'Business costs that support production but are not consumed by one part in a simple measurable amount.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: 'Where margin belongs',
      html: '<p>This tool calculates finishing cost before profit. Apply margin after material, machine time, post-processing, risk, and overhead are assembled, otherwise labor-heavy jobs may be underpriced.</p>',
    },
    { type: 'title', text: 'Currency Selection and Conversion Factor', level: 2 },
    {
      type: 'paragraph',
      html: 'Currency selection changes the symbol and can convert existing monetary inputs using practical reference factors. The calculation itself is currency-neutral: a rate of 30 per hour and 10 in consumables produce the same structure whether the symbol is euros, dollars, pounds, yen, or another supported currency. This is useful for international quoting because the math remains stable while the presentation matches the customer or shop location.',
    },
    {
      type: 'paragraph',
      html: 'The conversion factor exists for cases where the user does not want automatic exchange-rate conversion or needs a custom commercial multiplier. A factor of <code>1</code> means the hourly rate and consumables are already entered in the selected local currency. A factor of <code>1.15</code> increases both monetary inputs by fifteen percent. A factor of <code>0.92</code> reduces them by eight percent. Because the factor affects money and not minutes, the visual breakdown remains proportional to the adjusted cost.',
    },
    {
      type: 'summary',
      title: 'Currency rules',
      items: [
        'Use the selector for symbols and convenient scaling between common currencies.',
        'Keep the conversion factor at 1 when the inputs are already local.',
        'Use a custom factor for regional quote books, subcontractor markup, or temporary commercial adjustments.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Exchange rates are not accounting policy',
      badge: 'Pricing note',
      html: '<p>For official invoices, taxes, or accounting reports, use the exchange rate and rounding policy required by your business. This calculator is for estimating production cost and quote preparation.</p>',
    },
    { type: 'title', text: 'Using the Visual Breakdown to Improve Profit', level: 2 },
    {
      type: 'paragraph',
      html: 'The proportional bar is more than decoration. It shows which finishing phase is consuming money. If sanding dominates, changing print orientation, layer height, support interface, or material may reduce manual time. If painting dominates, the quote may need a separate finish tier. If consumables dominate, bulk purchasing or a different coating process may matter more than labor efficiency. If support removal dominates, redesigning support contact points may be the highest-value intervention.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'When support removal is the largest section, review support style, support density, contact Z distance, and orientation.',
        'When sanding is largest, review layer height, seam placement, filler strategy, and whether the quoted finish is too high for the price.',
        'When painting is largest, split single-color, masked, and premium finishes into separate quote tiers.',
        'When consumables are largest, check whether coatings, resin wash, abrasives, and masking supplies are being wasted or under-recovered.',
      ],
    },
    {
      type: 'table',
      headers: ['Dominant cost', 'Likely cause', 'Pricing response'],
      rows: [
        ['Support removal', 'Difficult access, dense supports, fragile details', 'Add a support complexity surcharge or revise orientation.'],
        ['Sanding', 'High cosmetic requirement, visible layers, support scars', 'Create finish grades and charge for paint-ready preparation.'],
        ['Painting', 'Masking, multiple colors, booth cleanup', 'Quote painting as a separate service line.'],
        ['Consumables', 'Coatings, abrasives, solvents, protective supplies', 'Use direct consumable tracking or minimum material charges.'],
      ],
    },
    {
      type: 'summary',
      title: 'Quote ready workflow',
      items: [
        'Measure active manual minutes by phase.',
        'Use a loaded finishing hourly rate.',
        'Add direct consumables separately.',
        'Copy the calculated result into the quote, then apply overhead and margin in the full pricing model.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
