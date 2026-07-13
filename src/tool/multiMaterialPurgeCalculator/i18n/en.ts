import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'multi-material-purge-calculator';
const title = 'Multi Material Purge Calculator: Analyze & Optimize Filament Waste';
const description = 'Estimate AMS and MMU purge tower volume, wasted filament mass, and transition cost with a pigment-intensity matrix for color changes.';

const faqData = [
  {
    question: 'Why is black to white assigned a higher purge factor than white to black?',
    answer: 'Dark pigments contaminate pale polymers more visibly than pale pigments contaminate dark polymers. The calculator therefore models black to white as a high factor transition and white to black as a lower factor transition.',
  },
  {
    question: 'Is this calculator a replacement for slicer flushing volumes?',
    answer: 'No. It is a diagnostic planner that estimates purge economics before slicing or budgeting. Use the slicer calibration result for final machine-specific tuning.',
  },
  {
    question: 'What purge ratio should I consider too high?',
    answer: 'The tool flags a high waste ratio above 30 percent of total extruded volume. That threshold usually means color order, grouping, purge-to-infill, or model splitting should be reviewed.',
  },
  {
    question: 'Can I use it for material changes, not only color changes?',
    answer: 'The current matrix focuses on pigment contamination. Mixed polymers, soluble supports, abrasive materials, and temperature changes may require extra purge beyond the color factor.',
  },
];

const howToData = [
  {
    name: 'Enter object and base purge volume',
    text: 'Type the real model volume and the standard purge volume your AMS or MMU profile uses for one normal filament change.',
  },
  {
    name: 'Choose origin and destination colors',
    text: 'Use the circular color selectors for each transition. The transition factor updates immediately from the pigment matrix.',
  },
  {
    name: 'Set transition counts',
    text: 'Enter how many times each color pair occurs in the job. Repeated dark to light swaps will dominate the total purge estimate.',
  },
  {
    name: 'Read ratio, mass, and cost',
    text: 'Use the object versus purge bar, waste mass, and cost result to decide whether the print should be reorganized before production.',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial',
    currencyLabel: 'Currency',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: 'Cost model',
    objectVolumeLabel: 'Object volume',
    basePurgeLabel: 'Base purge per change',
    densityLabel: 'Density g/cm3',
    priceLabel: 'Price per kg',
    transitionsTitle: 'Pigment transition matrix',
    fromLabel: 'From',
    toLabel: 'To',
    colorLabels: {
      white: 'White',
      natural: 'Natural',
      yellow: 'Yellow',
      red: 'Red',
      blue: 'Blue',
      green: 'Green',
      gray: 'Gray',
      black: 'Black',
    },
    countLabel: 'Changes',
    objectLabel: 'Object real plastic',
    purgeTowerLabel: 'Purge tower waste',
    totalWasteLabel: 'Purge volume',
    wasteCostLabel: 'Waste cost',
    purgeRatioLabel: 'Purge ratio',
    massLabel: 'Waste mass',
    loadbarAriaLabel: 'Object volume compared with purge tower volume',
    alertTitle: 'High waste ratio detected',
    alertText: 'High waste ratio detected: Grouping similar colors recommended.',
    efficientText: 'Purge ratio inside the planning limit.',
    factorGuideTitle: 'Purge Factor Guide by Transition',
    transitionLabel: 'Transition',
    factorLabel: 'Factor',
    volumeLabel: 'Purge volume',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'How AMS and MMU purge waste becomes a real production cost',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A multi-material print does not consume filament only in the visible object. Every color or material change leaves molten polymer in the hotend, melt zone, nozzle, and sometimes the start of the next extrusion path. The printer must push enough new filament through that path before the next visible surface is clean. In AMS, MMU, toolhead changer, and palette-style workflows, that cleaning extrusion often becomes a purge tower, purge block, purge line, or waste chute deposit. The important economic point is simple: the tower can be priced like any other part because it has volume, mass, and material cost.',
    },
    {
      type: 'paragraph',
      html: 'Generic calculators often multiply the number of swaps by one fixed flushing volume. That is useful for a rough budget, but it misses the most expensive failure mode in color printing: <strong>asymmetric contamination</strong>. White to black does not require the same cleaning as black to white. A small amount of black pigment carried into white PLA, PETG, or ABS is visible quickly, while a small amount of white carried into black is usually hidden by the darker pigment load. This tool uses a transition matrix so each direction has its own multiplier.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: 'High purge-ratio alert threshold used by the dashboard' },
        { value: '1.6x', label: 'Default black to white transition multiplier' },
        { value: '0.8x', label: 'Default white to black transition multiplier' },
        { value: '0 buttons', label: 'All calculations update instantly while editing' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The expensive symptom to watch',
      badge: 'Waste audit',
      html: 'When the purge tower exceeds 30 percent of the combined object and purge volume, the job is no longer just a colorful print. It is a material conversion process where a large fraction of purchased filament becomes non-product output. That is the point where color ordering, model splitting, purge-to-infill, and batching deserve attention before the machine starts.',
    },
    {
      type: 'title',
      text: 'The transition matrix behind the calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The core model is <code>Vtotal = sum(Vbase x Ka,b)</code>. <code>Vbase</code> is the base purge volume for one standard filament change. <code>Ka,b</code> is the factor for moving from color <code>a</code> to color <code>b</code>. A factor below 1 means the transition is usually easier than the baseline. A factor above 1 means the next color is sensitive to contamination or the previous color has strong pigment carryover. The result is a purge volume in cubic centimeters, which is then converted to mass using filament density.',
    },
    {
      type: 'paragraph',
      html: 'The cost formula is <code>Cwaste = ((Vtotal x density) / 1000) x priceKg</code>. If the purge tower uses 80 cm3 of PLA at 1.24 g/cm3, it consumes 99.2 g of filament. At 24 per kilogram, that tower costs 2.38 in material before electricity, machine time, failed color transitions, or post-processing are considered. For a hobby print that may be acceptable. For repeated production, it is a line item.',
    },
    {
      type: 'table',
      headers: ['Transition', 'Default factor', 'Why it is weighted that way'],
      rows: [
        ['White to black', '0.80x', 'Black hides small pale residues, so the visible contamination tolerance is higher.'],
        ['Black to white', '1.60x', 'Dark residue in white is immediately visible and usually needs a longer flush.'],
        ['Natural to white', '1.15x', 'Translucent or natural material can tint opaque white until the melt path is cleaner.'],
        ['Yellow to white', '1.35x', 'Yellow pigments can warm or stain pale surfaces despite being less severe than black.'],
        ['Red to yellow', '1.08x', 'Red carryover changes hue strongly in yellow and orange-adjacent colors.'],
        ['Gray to black', '0.72x', 'Gray residue is usually hidden by black pigment, so the purge can be lower.'],
      ],
    },
    {
      type: 'tip',
      title: 'Use your slicer calibration as the base volume',
      html: 'Run the vendor or community flushing calibration for your printer first, then enter that result as the base purge volume. The matrix should scale a known baseline, not replace machine-specific tuning for nozzle diameter, hotend volume, filament path length, and slicer behavior.',
    },
    {
      type: 'title',
      text: 'Why polymer opacity changes required purge volume',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Opacity controls how much previous-color contamination is visible in the next material. Opaque white is demanding because it reflects light strongly and shows darker particles or streaks near the surface. Natural and translucent filaments behave differently: they may hide less mass but show tint through depth, especially in thin walls or backlit parts. Saturated colors such as red and blue can also stain following pale colors because the pigment concentration needed for strong chroma remains visible at low residue levels.',
    },
    {
      type: 'paragraph',
      html: 'The printer does not know color science. It only extrudes a length or volume. The user has to decide whether the visible result needs cosmetic purity, functional separation, or only rough color change. A toy, logo, signage face, lithophane frame, or customer-facing enclosure may need aggressive purging. A hidden internal support, draft prototype, or back side of a jig may tolerate more carryover. The calculator exposes that tradeoff by making the purge tower grow when the transition direction is harder.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Light destination',
          description: 'White, natural, yellow, and pale gray are sensitive destinations. Dark or saturated previous colors need longer purge before these colors look clean.',
          points: ['Use higher factors', 'Group light sections together', 'Avoid returning from black to white repeatedly'],
        },
        {
          title: 'Dark destination',
          description: 'Black, navy, deep green, and dark gray can hide residue from lighter colors. These transitions can often use smaller multipliers.',
          points: ['Lower visible risk', 'Good target after pale colors', 'Useful final color in a sequence'],
        },
        {
          title: 'Similar hue transition',
          description: 'Moving between related colors usually costs less than crossing from dark to pale. Red to orange or gray to black is normally easier than blue to yellow.',
          points: ['Color ordering matters', 'Hue families reduce waste', 'Batch similar objects together'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Base purge volume', definition: 'The normal volume your slicer or calibration profile extrudes for one ordinary filament change before matrix scaling.' },
        { term: 'Transition factor', definition: 'A multiplier assigned to one direction of a color change, such as black to white or white to black.' },
        { term: 'Purge ratio', definition: 'Purge volume divided by total extruded volume, including both object and purge tower.' },
        { term: 'Pigment carryover', definition: 'Visible residue of the previous filament color that remains in the hotend and appears in the next extrusion.' },
        { term: 'Purge-to-infill', definition: 'A slicer strategy that redirects some cleaning extrusion into hidden infill instead of a tower or waste chute.' },
      ],
    },
    {
      type: 'title',
      text: 'How to reduce AMS filament waste without ruining color quality',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The first optimization is color order. If a model can be split, printed in groups, or arranged so that dark-to-light transitions happen fewer times, the purge tower can shrink dramatically. Repeated black to white changes are expensive because every cycle asks the printer to remove a strong pigment before a sensitive destination. If the same visual design can be printed as white-to-black once, or as separate parts assembled later, the material budget changes immediately.',
    },
    {
      type: 'paragraph',
      html: 'The second optimization is destination choice. When several colors are optional, choose a dark final color for details that appear after pale regions. For example, black text over a white plaque is usually cheaper than white text over a black plaque because the latter forces the printer to clean dark residue before every white segment. This is not only an aesthetic decision; it changes the physical amount of polymer that must be pushed through the hotend.',
    },
    {
      type: 'list',
      items: [
        'Group similar colors in the model or print queue so related hues share transitions.',
        'Use purge-to-infill when internal color contamination is acceptable and the part has enough infill volume.',
        'Reduce color swaps by splitting badges, logos, labels, or decorative inserts into separate printed pieces.',
        'Use darker colors after lighter colors when the design allows it.',
        'Tune flushing multipliers with physical swatches, not only slicer defaults.',
        'Budget purge cost separately for customer quotes so decorative multicolor work is not underpriced.',
      ],
    },
    {
      type: 'proscons',
      title: 'Optimization tradeoffs',
      items: [
        { pro: 'Lower purge factors reduce tower mass and filament cost.', con: 'Too little purge can create streaks, tinting, or unacceptable customer-facing surfaces.' },
        { pro: 'Splitting models can remove many color changes.', con: 'Assembly adds labor, tolerance management, glue, fasteners, or visible seams.' },
        { pro: 'Purge-to-infill turns some waste into useful internal plastic.', con: 'It works best only when the object has enough hidden volume and contamination is structurally acceptable.' },
        { pro: 'Batching similar colors improves print-farm economics.', con: 'It may delay urgent one-off jobs that need a specific color sequence.' },
      ],
    },
    {
      type: 'title',
      text: 'Budgeting multi-material prints for customers and print farms',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A print quote that prices only the final object volume is wrong for AMS and MMU jobs. The customer is buying the manufacturing process, and the process includes non-product extrusion. A small keychain with many layer-by-layer color swaps can waste more material than a larger single-color bracket. The calculator makes that visible by comparing object volume and purge tower volume as two competing blocks rather than hiding waste inside a single number.',
    },
    {
      type: 'paragraph',
      html: 'For a farm, the purge ratio is also a scheduling signal. High purge jobs occupy the printer while converting filament into tower plastic, so the economic loss is not only material. The machine time spent changing filament, cutting, loading, wiping, and rebuilding pressure is time not spent producing saleable volume. When purge ratio is high, consider whether the item should carry a multicolor surcharge, whether colors should be limited, or whether a painted, printed-label, or assembled solution is cheaper.',
    },
    {
      type: 'card',
      title: 'Quote rule for multicolor work',
      html: 'Price the object, then price the purge tower as a separate waste line. If the client changes from two colors to four colors, or adds small isolated details on many layers, update the quote because the transition count changes even when the visible model volume barely moves.',
    },
    {
      type: 'table',
      headers: ['Purge ratio', 'Interpretation', 'Recommended action'],
      rows: [
        ['Under 15%', 'Efficient multicolor job', 'Normal quote assumptions are usually acceptable.'],
        ['15% to 30%', 'Material loss is visible', 'Review transitions and check whether purge-to-infill helps.'],
        ['Above 30%', 'High waste ratio', 'Group colors, split the model, raise the quote, or redesign the color layout.'],
        ['Above 50%', 'Tower dominates economics', 'Treat the print as a special production job, not a routine object print.'],
      ],
    },
    {
      type: 'title',
      text: 'Reading the dashboard results',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The two horizontal blocks are intentionally severe. Green is the real object volume. The striped purge block is material that does not become the visible product. If the striped block starts to look physically comparable to the object block, the print deserves scrutiny. This visual ratio is often more persuasive than grams or currency because it shows the user exactly how much plastic is being assigned to cleanup.',
    },
    {
      type: 'paragraph',
      html: 'The mass result comes from volume multiplied by density. PLA is often around 1.24 g/cm3, PETG is commonly near 1.27 g/cm3, ABS is lower, and filled filaments vary widely. The price result uses the selected price per kilogram. If you use specialty silk PLA, carbon fiber blends, soluble support, or engineering filament, replace the default price and density. The same purge volume can have very different economic weight depending on material.',
    },
    {
      type: 'summary',
      title: 'Decision checklist',
      items: [
        'Use measured slicer purge calibration as the base volume.',
        'Count repeated transitions, not only the number of colors loaded in the AMS or MMU.',
        'Watch black to white, saturated to pale, and translucent destination transitions first.',
        'Treat a purge ratio above 30 percent as a redesign or quoting warning.',
        'Use the cost result for material budgeting and the visual bar for fast design review.',
      ],
    },
    {
      type: 'message',
      title: 'Practical bottom line',
      html: 'A multi-material print is efficient when color changes are arranged so the purge tower remains small relative to the object. If the tower grows past the 30 percent warning line, the cheapest optimization is usually not a new spool or a faster profile; it is a better color strategy.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
