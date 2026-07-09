import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-print-weight-infill-percentage-calculator';
const title = '3D Print Weight Infill Percentage Calculator';
const description =
  'Estimate part weight, filament saved, and material cost when changing infill percentage and pattern from a 100% infill reference weight.';

const faqData = [
  {
    question: 'Can I estimate 3D print weight from 100% infill weight?',
    answer:
      'Yes, but the estimate should keep shells, walls, top layers, and bottom layers separate from the internal infill. A part does not become weightless at 0% infill because the outer perimeter still uses material.',
  },
  {
    question: 'Why does the infill pattern change the estimated weight?',
    answer:
      'Different patterns create different toolpath lengths at the same nominal density. Lines and concentric patterns are usually lighter, while honeycomb, cubic, and triangles tend to add more internal wall length.',
  },
  {
    question: 'Is slicer weight more accurate than this calculator?',
    answer:
      'A slicer is more accurate once the model, nozzle, extrusion width, wall count, top layers, and material profile are known. This calculator is designed for quick planning before re-slicing many versions.',
  },
  {
    question: 'What shell percentage should I use?',
    answer:
      'For many decorative or medium-size FDM parts, 20-35% shell share is a practical starting range. Small parts, thin objects, and parts with many holes can have a higher shell share.',
  },
];

const howToData = [
  {
    name: 'Start from a 100% infill reference',
    text: 'Use the weight reported by your slicer for the same model at 100% infill, or weigh a known fully dense reference print.',
  },
  {
    name: 'Choose target infill and pattern',
    text: 'Move the infill slider and pick the pattern closest to the slicer setting you plan to use.',
  },
  {
    name: 'Adjust shell and waste assumptions',
    text: 'Increase shell share for thin or perimeter-heavy models, then add waste for purge, skirt, brim, supports, and failed starts.',
  },
  {
    name: 'Read weight and cost savings',
    text: 'Compare the final estimated weight against the 100% infill baseline to decide whether the material saving is worth the stiffness tradeoff.',
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

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Infill weight inputs',
    resultsAriaLabel: 'Estimated print weight results',
    gramUnit: 'g',
    ounceUnit: 'oz',
    poundUnit: 'lb',
    kilogramUnit: 'kg',
    percentUnit: '%',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    currencyLabel: 'Currency',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    fullWeightLabel: '100% infill weight',
    fullWeightHint: 'Use the slicer value for the same model at fully dense infill.',
    infillLabel: 'Target infill',
    patternLabel: 'Infill pattern',
    patternOptions: [
      { value: 'lines', label: 'Lines - light paths' },
      { value: 'grid', label: 'Grid - slicer baseline' },
      { value: 'triangles', label: 'Triangles - rigid cells' },
      { value: 'gyroid', label: 'Gyroid - smooth lattice' },
      { value: 'cubic', label: 'Cubic - 3D stiffness' },
      { value: 'honeycomb', label: 'Honeycomb - dense walls' },
      { value: 'concentric', label: 'Concentric - contour following' },
    ],
    shellShareLabel: 'Shell share',
    shellShareHint: 'Walls, top layers, bottom layers, and solid features that do not scale with infill.',
    spoolPriceLabel: 'Filament price',
    wasteLabel: 'Waste',
    estimatedWeightLabel: 'Estimated part weight',
    filamentSavedLabel: 'Filament saved',
    materialCostLabel: 'Material cost',
    costSavedLabel: 'Cost saved',
    effectiveDensityLabel: 'Effective density',
    shellLabel: 'Shell',
    infillCoreLabel: 'Infill core',
    patternImpactLabel: 'Pattern multiplier',
    comparisonLabel: 'Baseline comparison',
    fullInfillLabel: '100% infill',
    targetInfillLabel: 'Target setup',
    insightLow: 'Very low infill can save a lot of filament, but top surfaces, screw bosses, clips, and load-bearing zones may need extra walls or local modifiers.',
    insightBalanced: 'This is a balanced planning zone for many visual and light functional prints: the shell carries shape while the infill controls stiffness and cost.',
    insightHigh: 'High infill narrows the saving gap quickly. Consider more walls, a stronger pattern, or material choice before using dense infill everywhere.',
  },
  seo: [
    { type: 'title', text: 'How a 3D Print Weight Infill Percentage Calculator Works', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>3D print weight infill percentage calculator</strong> estimates how much plastic remains when a model is printed with less than 100% internal density. The important detail is that FDM weight is not a simple multiplication of full weight by infill percentage. A model printed at 20% infill does not usually weigh 20% of the fully dense version, because walls, top layers, bottom layers, small solid regions, brims, and support interfaces still consume filament. This calculator starts with the known or slicer-reported weight at 100% infill, separates a configurable shell share, then scales the internal core by target infill and pattern behavior.',
    },
    {
      type: 'paragraph',
      html: 'The method is designed for quick comparison before you spend time re-slicing a file many times. If a fully dense PETG bracket is estimated at 240 g, switching to 20% gyroid may not produce a 48 g part. With a 28% shell share, the perimeter mass is already about 67 g before internal density is counted. The infill core then adds material according to the selected density and pattern multiplier. The result is a planning estimate that is more realistic than linear infill math while still fast enough for early decisions.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: 'Typical shell share for many medium FDM parts', icon: 'mdi:cube-outline' },
        { value: '0.88x', label: 'Light contour-style multiplier used for concentric infill', icon: 'mdi:chart-line' },
        { value: '1.16x', label: 'Dense path multiplier used for honeycomb planning', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: 'Reference weight used as the baseline for savings', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: 'Use the same slicer profile for the reference',
      html: '<p>For the cleanest estimate, generate the 100% infill weight with the same nozzle, extrusion width, wall count, top layers, bottom layers, material density, and support setting you will use for the target print. Changing those settings changes the shell mass, so the infill-only comparison becomes less meaningful.</p>',
    },

    { type: 'title', text: 'Why Infill Weight Is Not Linear', level: 2 },
    {
      type: 'paragraph',
      html: 'The phrase <em>infill percentage</em> sounds like a direct density value, but slicers apply it only to the internal region left after perimeters and solid surfaces are generated. A simple cube with two walls and six top layers may have a large internal volume, so infill percentage strongly affects weight. A thin phone stand, a gear housing with many holes, or a miniature with narrow limbs may have so much perimeter geometry that lowering infill produces a smaller saving than expected. This is why the calculator exposes <strong>shell share</strong> instead of hiding it.',
    },
    {
      type: 'table',
      headers: ['Model type', 'Likely shell share', 'What it means for savings'],
      rows: [
        ['Large rectangular enclosure', '15-25%', 'Most mass is internal volume, so infill changes weight strongly.'],
        ['Decorative figure or organic model', '25-45%', 'Many curves and narrow regions create perimeter-heavy geometry.'],
        ['Thin bracket or panel', '35-60%', 'Walls and surfaces dominate; infill reduction may save less plastic.'],
        ['Small mechanical clip', '45-70%', 'The model may be nearly solid from perimeters alone.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'When the estimate looks too heavy',
      badge: 'Check shell share',
      html: '<p>If a 10% infill setting still produces a high estimated weight, the shell share is probably large. That can be correct for small or thin parts. Verify wall count, top and bottom thickness, and whether the model has many separated islands or narrow ribs.</p>',
    },
    {
      type: 'summary',
      title: 'Practical interpretation',
      items: [
        'Infill percentage affects only the internal core, not the entire print.',
        'A 0% infill part still has walls, skins, seams, and sometimes solid small features.',
        'Full-weight reference, shell share, pattern choice, and waste margin together produce a better planning number.',
      ],
    },

    { type: 'title', text: 'Infill Pattern Weight Multipliers', level: 2 },
    {
      type: 'paragraph',
      html: 'Two prints can both be set to 25% infill and still use different amounts of filament because the toolpath geometry changes. Lines and concentric patterns often produce lighter internal paths because they avoid some crossing structures. Grid, triangles, cubic, gyroid, and honeycomb create different amounts of overlap, directional reinforcement, and path length. The calculator models this with a small <strong>pattern multiplier</strong> applied to the internal core, not to the entire part.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Lines and concentric',
          description: 'Useful when minimum weight and fast printing matter more than uniform stiffness.',
          icon: 'mdi:format-line-spacing',
          points: ['Lower path density', 'Good for decorative parts', 'Directional strength can be uneven'],
        },
        {
          title: 'Grid and gyroid',
          description: 'Balanced choices for common visual and functional prints where stiffness matters.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['Predictable slicer baseline', 'Good stiffness-to-weight tradeoff', 'Gyroid distributes loads smoothly'],
        },
        {
          title: 'Cubic, triangles, honeycomb',
          description: 'Heavier planning choices that can improve rigidity but reduce filament savings.',
          icon: 'mdi:hexagon-outline',
          points: ['More internal wall length', 'Better multi-direction stiffness', 'Longer print time is common'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Pattern selection tradeoffs',
      items: [
        { pro: 'Lighter patterns reduce material cost and may shorten print time.', con: 'They can create weaker directions or less top-surface support.' },
        { pro: 'Dense patterns improve the feel of rigid parts and reduce flex.', con: 'They can approach the cost of higher infill without solving weak wall design.' },
        { pro: 'Gyroid spreads loads smoothly in many directions.', con: 'It may print slower on machines with conservative acceleration settings.' },
      ],
    },
    {
      type: 'message',
      title: 'Pattern multipliers are planning assumptions',
      ariaLabel: 'Pattern multiplier note',
      html: '<p>Slicer engines implement patterns differently. Treat the multiplier as an early estimator, then confirm important production jobs with a real slicer preview and the material usage report.</p>',
    },

    { type: 'title', text: 'Calculating Filament and Cost Savings', level: 2 },
    {
      type: 'paragraph',
      html: 'The material cost estimate multiplies final grams by spool price per kilogram. If the calculator predicts a 126 g print and the spool costs $24 per kg, the plastic portion is about $3.02 before machine time, electricity, labor, packaging, and failed prints. The cost saved compares the same model against the 100% infill baseline, using the same waste percentage. This is useful for quoting, batch planning, and deciding whether a heavier infill setting is worth the extra material.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use waste percentage for purge lines, skirts, brims, supports, rafts, color changes, and short failed starts.',
        'For single prototypes, a 5-10% waste margin is usually more realistic than zero.',
        'For production batches with supports or abrasive materials, track actual leftover and failed weight over several jobs.',
        'When comparing PLA, PETG, ABS, ASA, nylon, and filled composites, use the spool price for the exact material, not a generic average.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: 'Example: from dense prototype to production infill',
      html: '<p>A 100% infill prototype weighs 240 g. With a 28% shell share, 20% gyroid, 6% waste, and $24/kg filament, the estimate lands near the low hundreds of grams rather than 48 g. That difference matters when quoting 40 copies: small per-part errors become whole spools of plastic.</p>',
    },
    {
      type: 'table',
      headers: ['Input', 'Why it matters', 'Common mistake'],
      rows: [
        ['100% weight', 'Defines the maximum material baseline.', 'Using a different wall count than the target print.'],
        ['Target infill', 'Controls the internal core density.', 'Assuming 20% infill means 20% total part weight.'],
        ['Pattern', 'Changes toolpath length and stiffness.', 'Ignoring pattern when comparing slicer presets.'],
        ['Waste', 'Adds real filament used outside the final part.', 'Forgetting supports and failed starts.'],
      ],
    },

    { type: 'title', text: 'Choosing Infill for Weight Saving Without Weak Parts', level: 2 },
    {
      type: 'paragraph',
      html: 'Weight saving is valuable only if the part still performs its job. For visual models, display props, cosplay pieces, and covers, low infill with enough top layers can be perfect. For brackets, fixtures, enclosures with screws, snap features, and parts exposed to heat or impact, the best improvement is often more walls or local reinforcement rather than simply raising global infill. A part with four walls and 20% gyroid can be stronger in the right places than a part with two walls and 50% infill.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Shell share', definition: 'The portion of the fully dense weight that belongs to walls, top layers, bottom layers, and unavoidable solid geometry.' },
        { term: 'Nominal infill', definition: 'The percentage selected in the slicer for the internal region after shells are generated.' },
        { term: 'Effective density', definition: 'The estimated total density of the finished print after shell share, infill percentage, and pattern multiplier are combined.' },
        { term: 'Waste margin', definition: 'Extra filament used for non-part material such as purge, brim, supports, tests, and failed starts.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not use weight savings as the only design criterion',
      badge: 'Functional prints',
      html: '<p>Parts loaded across layer lines, parts with threaded inserts, and parts with screw compression need separate mechanical thinking. Infill helps, but wall thickness, orientation, material, temperature, and stress concentration often matter more than density alone.</p>',
    },
    {
      type: 'summary',
      title: 'Fast decision rules',
      items: [
        'Decorative prints: reduce infill first, then verify top surface quality.',
        'Light-duty functional prints: use a balanced pattern and enough walls before high infill.',
        'Fixtures and brackets: reinforce holes, corners, and load paths with local modifiers.',
        'Batch jobs: confirm the final estimate with the slicer before buying material.',
      ],
    },

    { type: 'title', text: 'When to Trust the Calculator and When to Re-Slice', level: 2 },
    {
      type: 'paragraph',
      html: 'This calculator is best for fast estimates, early quoting, material purchasing, and comparing many infill options without opening the slicer repeatedly. It is not a replacement for the slicer when dimensional settings are changing. If you alter nozzle diameter, extrusion width, wall count, top thickness, bottom thickness, adaptive layers, support style, ironing, vase mode, or material density, the 100% baseline and shell share should be updated.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Use the calculator when the model and profile stay mostly fixed and you are exploring density or pattern.',
        'Re-slice when wall count, support generation, nozzle size, or material profile changes.',
        'Weigh a finished part when you need production-level cost records or inventory forecasting.',
        'Record actual grams for repeated jobs; real data will quickly improve your shell share assumptions.',
      ],
    },
    {
      type: 'tip',
      title: 'A reliable workflow for quoting',
      html: '<p>Create a fully dense slicer reference, estimate several infill options with this calculator, choose the most promising two, then re-slice only those two final candidates. This keeps quoting fast while still grounding final prices in slicer-specific material reports.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
