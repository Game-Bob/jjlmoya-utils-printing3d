import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = '3d-print-pricing-calculator';
const title = '3D Print Pricing Calculator: Margin, Markup and Market Position';
const description =
  'Calculate 3D print retail price from manufacturing cost, target profit margin, markup, and competitor pricing with strict margin-vs-markup math.';

const currencyOptions = [
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
];

const faqData = [
  {
    question: 'What is the difference between margin and markup in 3D printing?',
    answer:
      'Margin is profit divided by selling price. Markup is profit divided by cost. A 50% markup on a 40.00 cost gives a 60.00 price and a 33.33% margin, not a 50% margin.',
  },
  {
    question: 'Why must the target margin be below 100%?',
    answer:
      'The margin formula divides cost by one minus the margin rate. At 100% margin, the denominator becomes zero, so there is no finite selling price.',
  },
  {
    question: 'Should competitor price decide my 3D print quote?',
    answer:
      'Competitor price is a positioning signal, not a replacement for cost math. If your calculated price is above the market, review cost, finish level, lead time, risk, and value before discounting.',
  },
  {
    question: 'Does the calculator include taxes or VAT?',
    answer:
      'No. It calculates retail price before tax policy. Add VAT, sales tax, marketplace fees, or payment processing fees according to your local invoicing rules.',
  },
];

const howToData = [
  { name: 'Enter total manufacturing cost', text: 'Use the full cost of the job, including fixed costs, variables, material, machine time, labor, and post-processing.' },
  { name: 'Choose margin or markup mode', text: 'Select whether the recommended PVP should use the target margin formula or the markup formula.' },
  { name: 'Set competitor reference price', text: 'Enter a comparable market price to see whether your quote sits above, below, or near the competition.' },
  { name: 'Copy the recommended price', text: 'Use the copy button to transfer the PVP, net profit, real margin, and market comparison into a quote or invoice.' },
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
    '3d print pricing calculator',
    '3d printing profit margin calculator',
    'markup vs margin 3d printing',
    '3d printing retail price calculator',
    'market positioning indicator',
  ],
  inLanguage: 'en',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D print pricing inputs',
    resultsAriaLabel: '3D print pricing results',
    currencyLabel: 'Currency',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: 'Total manufacturing cost',
    competitorLabel: 'Competitor reference price',
    marginLabel: 'Target margin',
    markupLabel: 'Target markup',
    conversionFactorLabel: 'Global conversion factor',
    conversionFactorUnit: 'x',
    conversionHint: 'Leave at 1 when costs are already entered in the selected currency. Use it for suite-wide currency or price-list scaling.',
    modeLabel: 'PVP method',
    marginModeLabel: 'Margin',
    markupModeLabel: 'Markup',
    pvpRecommendedLabel: 'Recommended PVP',
    netProfitLabel: 'Net profit',
    realMarginLabel: 'Real margin',
    marketComparisonLabel: 'Vs. competition',
    marketPositionLabel: 'Market position',
    aboveMarketLabel: 'Above market',
    belowMarketLabel: 'Below market',
    atMarketLabel: 'At market',
    pvpByMarginLabel: 'PVP by margin',
    pvpByMarkupLabel: 'PVP by markup',
    formulaMarginLabel: 'PVP_margin = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: 'Copy price',
    copiedLabel: 'Copied',
    copyTemplate: 'Recommended PVP: {pvp}; net profit: {profit}; real margin: {margin}; market comparison: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: 'How This 3D Print Pricing Calculator Works', level: 2 },
    {
      type: 'paragraph',
      html: 'A reliable <strong>3d print pricing calculator</strong> must start from the full manufacturing cost, not from filament weight alone. The cost value should include fixed allocation, variable machine cost, material, failed-print allowance, labor, post-processing, packaging, and any direct job expenses. Once that cost is known, the selling price can be calculated with either a target profit margin or a markup. Those two methods are not interchangeable, and confusing them is one of the fastest ways for a 3D printing service to quote jobs that look profitable but do not actually meet the planned margin.',
    },
    {
      type: 'paragraph',
      html: 'The calculator uses strict formulas: <code>PVP_margin = C / (1 - M / 100)</code> and <code>PVP_markup = C x (1 + U / 100)</code>. Net profit is always <code>PVP - C</code>. Real margin is the profit divided by the final price, not by cost. The target margin slider is capped below 100 because a 100% margin would require a zero cost or an infinite price. The output always uses two fixed decimals and no thousands separators so the number can be pasted cleanly into invoices, spreadsheets, ERP notes, or customer quotations.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: 'Strict margin validation', icon: 'mdi:shield-check-outline' },
        { value: '2 decimals', label: 'Fixed money output', icon: 'mdi:calculator-variant-outline' },
        { value: 'Live', label: 'Slider-driven recalculation', icon: 'mdi:flash-outline' },
        { value: 'Market', label: 'Competitor positioning', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: 'Use one pricing language inside the business',
      html: '<p>Decide whether sales conversations use margin, markup, or both with explicit labels. A quote that says "40%" without naming the basis can mean two very different prices.</p>',
    },
    { type: 'title', text: 'Margin vs Markup in 3D Printing', level: 2 },
    {
      type: 'paragraph',
      html: 'The query <strong>markup vs margin 3d printing</strong> usually appears when a shop owner notices that a 30% markup does not create a 30% margin. Markup is measured against cost. Margin is measured against sale price. If a printed part costs 50.00 and is sold for 75.00, the net profit is 25.00. The markup is 50.00% because 25.00 divided by 50.00 equals 0.50. The margin is 33.33% because 25.00 divided by 75.00 equals 0.3333. Both are correct, but they answer different business questions.',
    },
    {
      type: 'table',
      headers: ['Cost', 'Target', 'Formula', 'PVP', 'Net profit', 'Real margin'],
      rows: [
        ['50.00', '50% markup', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% margin', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% markup', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% margin', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A high markup can still produce a modest margin',
      badge: 'Financial precision',
      html: '<p>A 100% markup doubles cost, but the margin is 50%. If a business needs a real 60% margin to cover overhead and growth, a 100% markup is not enough.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: 'Retail selling price before taxes unless the quoting policy states otherwise.' },
        { term: 'Cost C', definition: 'The full manufacturing cost assigned to the job before profit is added.' },
        { term: 'Margin M', definition: 'Profit divided by selling price, expressed as a percentage.' },
        { term: 'Markup U', definition: 'Profit divided by cost, expressed as a percentage.' },
        { term: 'Net profit', definition: 'Selling price minus manufacturing cost before tax and financing adjustments.' },
      ],
    },
    { type: 'title', text: 'What Belongs in Total Manufacturing Cost', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>3d printing retail price calculator</strong> is only as accurate as the cost number entered into it. For professional quoting, cost should not mean only filament grams multiplied by spool price. It should include material, machine energy, nozzle and FEP wear, resin loss, build plate setup, operator time, slicer preparation, support removal, sanding, painting, quality inspection, packaging, payment fees if treated as direct cost, and a reasonable allowance for failures or reprints. The calculator assumes that the input cost has already absorbed those items.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Include variable material cost from filament, resin, powder, supports, purge waste, and raft material.',
        'Include machine time cost from depreciation, maintenance, energy, and expected service life.',
        'Include labor for preparation, monitoring, post-processing, packing, quoting, and customer communication when it is job-specific.',
        'Include direct post-processing supplies such as primer, paint, abrasive sheets, IPA, gloves, tape, polishing compound, and blades.',
        'Include a measured reprint allowance for risky geometries, tight tolerances, long overnight jobs, or demanding cosmetic finishes.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Material only cost',
          description: 'Fast for hobby estimates but too narrow for commercial work.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['Ignores labor', 'Ignores machine wear', 'Understates finished parts'],
        },
        {
          title: 'Manufacturing cost',
          description: 'Best input for margin and markup because it represents the job before profit.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['Includes machine time', 'Includes labor', 'Supports repeatable quotes'],
        },
        {
          title: 'Fully loaded price',
          description: 'May already include overhead and profit, so adding margin again can double count.',
          icon: 'mdi:receipt-text-outline',
          points: ['Useful for audits', 'Risky as calculator input', 'Needs clear accounting policy'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: 'The calculator does not guess cost',
      html: '<p>It converts a known cost into a recommended price. If cost is uncertain, first build a cost model for material, time, labor, and finishing, then use this tool for profit and market positioning.</p>',
    },
    { type: 'title', text: 'How to Price 3D Prints With a Target Margin', level: 2 },
    {
      type: 'paragraph',
      html: 'People searching <strong>how to price 3d prints</strong> often start with a multiplier because it feels simple. Margin pricing is better when the business has a defined profitability target. If the required margin is 40% and the manufacturing cost is 60.00, the price is <code>60.00 / (1 - 0.40)</code>, which equals 100.00. The profit is 40.00, and the real margin is 40.00%. This method is common when a shop wants every product family to contribute a consistent share of revenue after cost.',
    },
    {
      type: 'paragraph',
      html: 'The key rule is that margin cannot reach 100%. At 99% margin, a 10.00 cost becomes a 1000.00 price. At 99.99%, the same cost becomes 100000.00. That mathematical behavior is not a bug; it shows why margin targets must be commercially realistic. Very high margin targets usually mean the cost model is too low, the product has exceptional value, the market is niche, or the quote is no longer comparable to ordinary print-service pricing.',
    },
    {
      type: 'table',
      headers: ['Target margin', 'Multiplier over cost', 'Cost 40.00 becomes', 'Use case'],
      rows: [
        ['20%', '1.2500x', '50.00', 'Competitive commodity printing with low service load.'],
        ['35%', '1.5385x', '61.54', 'Routine professional work with normal overhead.'],
        ['50%', '2.0000x', '80.00', 'Higher-touch service, finishing, rush work, or smaller batches.'],
        ['70%', '3.3333x', '133.33', 'Specialized value, difficult jobs, or premium positioning.'],
      ],
    },
    {
      type: 'summary',
      title: 'Margin pricing checklist',
      items: [
        'Use total manufacturing cost as the base.',
        'Keep target margin below 100%.',
        'Compare the resulting PVP to competitor price before sending the quote.',
        'If the price is high, investigate cost drivers before cutting profit.',
      ],
    },
    { type: 'title', text: 'How to Use Markup Without Confusing It With Margin', level: 2 },
    {
      type: 'paragraph',
      html: 'Markup pricing is useful when a shop applies a clear multiplier to cost categories. For example, a service may add 80% markup to standard prints, 120% markup to finished prototypes, and 200% markup to small urgent jobs. The markup formula is direct: cost multiplied by one plus the markup rate. A cost of 35.00 with 80% markup becomes 63.00. The net profit is 28.00, but the real margin is 44.44%, not 80%.',
    },
    {
      type: 'proscons',
      title: 'Margin method vs markup method',
      items: [
        { pro: 'Margin method aligns directly with profit as a share of revenue.', con: 'Sales teams must understand why high margins create nonlinear price increases.' },
        { pro: 'Markup method is quick and easy to apply to cost books.', con: 'It can hide the actual margin when staff read the markup percentage as profitability.' },
        { pro: 'Showing both formulas exposes the real financial effect.', con: 'The business still needs a policy for which number becomes the quoted PVP.' },
      ],
    },
    {
      type: 'message',
      title: 'When markup is practical',
      ariaLabel: 'Markup guidance',
      html: '<p>Markup works well for simple internal rules: add 60% to repeat FDM work, 90% to resin miniatures, or 150% to rush parts. Use the real margin output to verify whether those rules meet the business target.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Markup is not wrong',
      badge: 'Method note',
      html: '<p>Markup is a valid pricing language when everyone understands the basis. The problem is not markup itself; the problem is calling markup "margin" inside quotes or spreadsheets.</p>',
    },
    { type: 'title', text: 'Competitor Price and Market Positioning', level: 2 },
    {
      type: 'paragraph',
      html: 'The competitor reference price turns the calculator into a commercial decision tool instead of a pure formula sheet. If the recommended PVP is above the reference price, the result is shown with a soft alert color. That does not automatically mean the quote is wrong. A higher price may be justified by faster lead time, better material traceability, stronger surface finish, engineering support, dimensional inspection, local pickup, reliable communication, or lower risk. It does mean the sales person should know why the price is above market before sending it.',
    },
    {
      type: 'paragraph',
      html: 'Competitive comparison should use a like-for-like reference. A raw FDM part with visible layers is not the same as a sanded, primed, painted prototype. A marketplace listing with uncertain material, loose tolerance, and long shipping is not the same as a local engineering service that reviews CAD files and guarantees fit. Enter the competitor price that best matches the same material, process, finish, quantity, delivery promise, and customer expectation.',
    },
    {
      type: 'table',
      headers: ['Position', 'Interpretation', 'Action'],
      rows: [
        ['Below competitor', 'The quote may be attractive but could be leaving profit behind.', 'Check whether the target margin is too low or the competitor includes less service.'],
        ['Near competitor', 'The price is commercially aligned with the reference.', 'Use service quality, lead time, and reliability to differentiate.'],
        ['Above competitor', 'The quote needs justification or cost review.', 'Inspect cost drivers, finish scope, urgency, and customer value before discounting.'],
      ],
    },
    {
      type: 'tip',
      title: 'Do not race to the lowest quote',
      html: '<p>A shop with real labor, calibrated machines, documented materials, and post-processing skill should not automatically match a low reference price. Compete on the value the customer can verify.</p>',
    },
    { type: 'title', text: 'Currency Selector and Global Conversion Factor', level: 2 },
    {
      type: 'paragraph',
      html: 'International quoting needs consistent money handling. The currency selector changes the symbol and rescales existing money inputs with the same reference factors used across the suite. The global conversion factor is a separate commercial multiplier. Use a factor of <code>1</code> when the manufacturing cost and competitor price are already entered in the selected currency. Use a custom factor when a company wants to apply a regional price list, exchange-rate buffer, distributor adjustment, or strategic quote multiplier.',
    },
    {
      type: 'paragraph',
      html: 'The factor applies to money inputs, not to margin or markup percentages. This matters because percentages should keep their meaning across currencies. A 35% margin in euros is still a 35% margin in dollars after both the cost and competitor reference have been converted. The output remains fixed to two decimals and no thousands separators, which supports clean copy-paste behavior in spreadsheet cells and quoting fields that reject localized grouping characters.',
    },
    {
      type: 'summary',
      title: 'Currency and factor rules',
      items: [
        'Select the customer-facing currency before copying the price.',
        'Keep the factor at 1 for normal local-currency quotes.',
        'Use the factor for controlled commercial scaling, not for changing the meaning of margin or markup.',
        'Review tax and invoice rounding outside this pre-tax pricing calculation.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Taxes and marketplace fees are separate',
      badge: 'Quote policy',
      html: '<p>If VAT, sales tax, payment processing, platform commission, or shipping insurance must be recovered, add them according to the business policy after calculating the production PVP.</p>',
    },
    { type: 'title', text: 'Building a 3D Printing Service Pricing Strategy', level: 2 },
    {
      type: 'paragraph',
      html: 'A strong <strong>3d printing service pricing strategy</strong> combines cost accuracy, profit discipline, and market awareness. Cost accuracy prevents selling below the real production burden. Profit discipline prevents arbitrary discounts from eroding the business. Market awareness prevents the service from becoming detached from what customers can compare. This calculator sits at the point where those three inputs meet: manufacturing cost, desired margin or markup, and competitor price.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        'Create separate margin targets for commodity prints, engineering prototypes, cosmetic models, rush work, and production batches.',
        'Use markup rules only when staff can also see the real margin produced by the rule.',
        'Track win rate by market position so above-market quotes can be explained with evidence instead of guesswork.',
        'Review actual job profit after delivery and update the cost model when labor, failures, or post-processing were underestimated.',
        'Keep a minimum order price for small jobs where quoting, setup, and communication dominate the manufacturing cost.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: 'Calculate profit from 3D prints after the job closes',
      html: '<p>The planned net profit is useful before quoting, but the delivered profit is what improves the pricing system. Compare estimated cost to actual cost and adjust future margin targets by part family.</p>',
    },
    {
      type: 'summary',
      title: 'Quote ready workflow',
      items: [
        'Estimate full manufacturing cost.',
        'Choose margin or markup intentionally.',
        'Check real margin and net profit.',
        'Compare against a like-for-like competitor price.',
        'Copy the PVP into the quote and handle taxes separately.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
