import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'real-resin-cost-calculator-sla-dlp';
const title = 'Real Resin Cost Calculator for SLA and DLP Prints';
const description = 'Calculate theoretical and real resin cost with density conversion, slicer volume, and a 10 to 15 percent waste correction for complex SLA and DLP parts.';

const faqData = [
  {
    question: 'Why is the real resin cost higher than the slicer cost?',
    answer: 'The slicer usually reports net cured resin in the model and supports. It does not always account for resin left on the build plate, trapped inside hollow walls, wash losses, failed supports, or residue that cannot be poured back cleanly.',
  },
  {
    question: 'Should I enter grams or milliliters?',
    answer: 'Use whatever your slicer exports. If it reports grams, enter the resin density from the bottle or technical sheet so the calculator can convert mass into volume before pricing the print.',
  },
  {
    question: 'Which complexity factor should I use?',
    answer: 'Use low for solid parts with simple supports, medium for typical miniatures and functional resin parts, and high for hollow parts, dense supports, cavities, and pieces that retain liquid resin after printing.',
  },
  {
    question: 'Does this include alcohol, gloves, filters, or machine time?',
    answer: 'No. This tool isolates resin material cost. Consumables, labor, post curing energy, failures, and machine depreciation should be added in a broader job quote.',
  },
];

const howToData = [
  {
    name: 'Enter bottle data',
    text: 'Add the net bottle price, nominal bottle volume in milliliters, and the density shown on the resin datasheet or label.',
  },
  {
    name: 'Paste slicer usage',
    text: 'Enter the model resin usage exported by Lychee, Chitubox, PrusaSlicer, or another slicer, then choose grams or milliliters.',
  },
  {
    name: 'Choose complexity',
    text: 'Select low, medium, or high complexity to apply a 10, 12.5, or 15 percent waste correction to the slicer volume.',
  },
  {
    name: 'Compare theoretical and real cost',
    text: 'Use the theoretical cost for slicer comparison and the real corrected cost for quoting, batching, and resin stock planning.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: 'Resin bottle',
    modelPanel: 'Slicer model',
    resultPanel: 'Real resin cost',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    currencyLabel: 'Currency',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
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
    bottlePriceLabel: 'Bottle price',
    bottleVolumeLabel: 'Bottle volume',
    resinPresetLabel: 'Resin preset',
    resinPresetOptions: [
      { label: 'Custom / manual density', density: '' },
      { label: 'Generic standard resin - 1.10 g/cm3', density: '1.10' },
      { label: 'Generic water washable resin - 1.08 g/cm3', density: '1.08' },
      { label: 'Generic ABS-like resin - 1.10 g/cm3', density: '1.10' },
      { label: 'Generic tough resin - 1.12 g/cm3', density: '1.12' },
      { label: 'Generic flexible resin - 1.05 g/cm3', density: '1.05' },
      { label: 'Generic high temperature resin - 1.15 g/cm3', density: '1.15' },
      { label: 'Generic castable resin - 1.12 g/cm3', density: '1.12' },
      { label: 'Generic ceramic filled resin - 1.35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1.10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1.05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1.09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1.12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1.10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1.18 g/cm3', density: '1.18' },
    ],
    densityLabel: 'Resin density (g/cm3)',
    modelAmountLabel: 'Slicer amount',
    unitLabel: 'Slicer amount unit',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: 'Part complexity',
    lowComplexity: 'Low',
    mediumComplexity: 'Medium',
    highComplexity: 'High',
    lowHint: 'Solid parts, light supports, +10%',
    mediumHint: 'Typical resin job, +12.5%',
    highHint: 'Hollow parts or dense supports, +15%',
    theoreticalCostLabel: 'Slicer cost',
    realCostLabel: 'Real cost',
    wasteCostLabel: 'Waste correction',
    correctedVolumeLabel: 'Corrected volume',
    costPerMlLabel: 'Cost per ml',
    bottlePrintsLabel: 'Prints per bottle',
    savedSettingsLabel: 'Waste factor',
    hollowPartTip: 'Hollow parts with drain holes can exceed 15 percent waste because resin remains on inner walls, in cavities, on supports, and in the wash workflow.',
    conversionLabel: 'Net slicer volume',
    netFromSlicerLabel: 'net from slicer',
    persistenceNote: 'Bottle price, bottle volume, and density are saved locally in this browser.',
  },
  seo: [
    {
      type: 'title',
      text: 'Why SLA and DLP resin cost needs a waste correction',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The resin amount shown by a slicer is a useful starting point, but it is not the same as the amount of resin that disappears from the bottle during a real print. SLA, MSLA, LCD, and DLP printing all use a vat full of liquid photopolymer. The part cures layer by layer, but uncured resin still coats the model, the supports, the build platform, the vat film, and any internal cavity that is open to the resin pool. A cost calculator that multiplies slicer volume by bottle price per milliliter gives a clean theoretical number. A workshop quote, however, needs the corrected number.',
    },
    {
      type: 'paragraph',
      html: 'This calculator separates <strong>slicer cost</strong> from <strong>real resin cost</strong>. The slicer cost is the net resin reported by software. The real cost applies a controlled waste factor of 10 to 15 percent. That range is intentionally narrow: it is high enough to include common resin handling losses, but not so high that it hides failures, labor, alcohol, gloves, filters, or post curing under the material line. The result is a practical variable material cost for a single print or batch.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: 'Low correction for solid parts and light supports' },
        { value: '12.5%', label: 'Default correction for normal resin jobs' },
        { value: '15%', label: 'High correction for cavities and dense supports' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Do not mix material cost with job cost',
      html: 'The number returned here is resin material only. A complete sale price should also include failed prints, cleaning alcohol, nitrile gloves, paper towels, filters, post curing time, packaging, machine wear, design time, and margin.',
    },
    {
      type: 'title',
      text: 'The formula behind the calculator',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The first step is the bottle price per milliliter: <code>cost_per_ml = bottle_price / bottle_volume_ml</code>. A 1000 ml bottle bought for 42 EUR has a base cost of 0.042 EUR per ml. If the slicer says that a miniature consumes 38 ml, the theoretical resin cost is 38 x 0.042, or 1.60 EUR. That number is useful for comparing orientation, hollowing, support strategies, and batches inside the slicer, but it assumes every milliliter reported by the slicer is the only resin consumed.',
    },
    {
      type: 'paragraph',
      html: 'The second step applies corrected volume: <code>real_volume = slicer_volume x (1 + waste_factor)</code>. With the default 12.5 percent factor, a 38 ml model becomes 42.75 ml. The real material cost becomes 42.75 x 0.042 EUR, or 1.80 EUR. The difference is small on one tiny model, but it becomes visible when quoting a tray of miniatures, dental models, jewelry masters, engineering prototypes, or production fixtures.',
    },
    {
      type: 'table',
      headers: ['Slicer volume', 'Bottle cost', 'Factor', 'Theoretical cost', 'Real cost'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1.05 EUR', '1.16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12.5%', '3.36 EUR', '3.78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6.30 EUR', '7.25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17.64 EUR', '20.29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: 'Use batch volume, not part volume, for production runs',
      html: 'If you are filling the build plate with multiple copies, calculate from the slicer volume for the whole plate. Support towers, shared support structures, and orientation changes can make the batch more efficient than multiplying one isolated part by the copy count.',
    },
    {
      type: 'title',
      text: 'Choosing the right complexity factor',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Low complexity',
          description: 'Use 10 percent for solid parts, simple brackets, calibration pieces, chess pieces, and models with few supports.',
          points: ['Little internal retention', 'Low support density', 'Easy drip back into vat'],
        },
        {
          title: 'Medium complexity',
          description: 'Use 12.5 percent for normal miniatures, dental style models, tabletop parts, and functional pieces with moderate supports.',
          points: ['Typical post processing loss', 'Some resin on supports', 'Good default quote factor'],
          highlight: true,
        },
        {
          title: 'High complexity',
          description: 'Use 15 percent for hollow shells, cavities, dense support forests, lattice structures, and parts that leave heavy residue after draining.',
          points: ['More trapped liquid', 'More washing loss', 'Higher handling uncertainty'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'The complexity factor is not a penalty for bad slicing. It is a correction for how liquid resin behaves. A simple solid block tilted correctly may drain almost completely after a few minutes. A hollow statue with small drain holes can keep a film of resin inside the wall, around supports, and near suction cups. Dense support bases also hold resin between pillars. Even when you let the part drip over the vat, the resin that reaches the wash container, gloves, paper towel, and filter is part of the real material consumed by the job.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'When 15 percent is not enough',
      html: 'If a hollow model has poor drainage, blind cavities, thick internal supports, or a textured interior, waste may exceed 15 percent. In that case, treat this calculator as the resin baseline and add a separate risk allowance for the quote.',
    },
    {
      type: 'summary',
      title: 'Fast factor selection',
      items: [
        'Choose 10 percent when the model is solid, compact, and easy to drain.',
        'Choose 12.5 percent when you are unsure or printing a mixed tray.',
        'Choose 15 percent when the part is hollow, heavily supported, or geometrically messy.',
        'Add a separate failure allowance when printing a new resin, new orientation, or a fragile client part.',
      ],
    },
    {
      type: 'title',
      text: 'Using density when the slicer reports grams',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Many slicers can report resin use in milliliters, grams, or both. Bottle pricing is usually sold by nominal volume, commonly 500 ml, 1000 ml, or 1 liter. If the slicer exports grams, the calculator converts mass to volume using density: <code>volume_ml = grams / density</code>. Resin density is normally written in g/cm3, and 1 cm3 is the same volume as 1 ml. A resin with density 1.10 g/cm3 means 110 g is approximately 100 ml.',
    },
    {
      type: 'table',
      headers: ['Slicer mass', 'Density', 'Converted volume', 'Why it matters'],
      rows: [
        ['55 g', '1.10 g/cm3', '50.0 ml', 'Common standard resin estimate'],
        ['55 g', '1.05 g/cm3', '52.4 ml', 'Lower density means more volume'],
        ['55 g', '1.20 g/cm3', '45.8 ml', 'Filled or ceramic like resins can be denser'],
      ],
    },
    {
      type: 'tip',
      title: 'Find density on the technical data sheet',
      html: 'Use the preset catalog for common resins, then treat the density input as the final source of truth. If your exact resin, color, or batch differs from the preset, override the field with the value from the manufacturer technical data sheet. Do not assume all resins are 1.00 g/ml.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Density', definition: 'Mass per unit volume. In resin costing, it lets you convert grams from the slicer into milliliters from the bottle.' },
        { term: 'Theoretical cost', definition: 'The clean slicer volume multiplied by bottle cost per milliliter, before waste correction.' },
        { term: 'Corrected volume', definition: 'The model volume after adding the selected 10, 12.5, or 15 percent waste factor.' },
        { term: 'Drain hole', definition: 'An opening in a hollow resin part that lets uncured resin leave the interior before washing and curing.' },
      ],
    },
    {
      type: 'title',
      text: 'Why hollow resin prints often cost more than expected',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hollowing a large model can reduce cured resin volume dramatically, but it does not make the print free of hidden cost. Hollow walls need drain holes, internal geometry must be washable, and uncured resin trapped inside the model can leak later, crack the part, or interfere with final curing. The slicer may show a much lower net volume after hollowing, but the handling process becomes more sensitive. That is why high complexity uses 15 percent by default.',
    },
    {
      type: 'proscons',
      title: 'Hollowing and cost control',
      items: [
        { pro: 'Large display models can use much less cured resin.', con: 'Poor drainage can keep liquid resin inside the part.' },
        { pro: 'Lower peel forces may improve success on big cross sections.', con: 'Extra holes, plugs, and cleaning time can increase labor.' },
        { pro: 'A lighter model is easier to ship and mount.', con: 'Thin walls can fail if wall thickness and exposure are not tuned.' },
      ],
    },
    {
      type: 'card',
      title: 'Practical hollow print rule',
      html: 'If a hollow part comes out of the printer and still drips after normal draining, use the high factor and inspect your drain layout. If it keeps leaking after washing, the problem is not only cost; it may become a quality and safety issue because uncured resin remains inside the object.',
    },
    {
      type: 'title',
      text: 'Reading slicer estimates without underquoting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer, and other resin slicers estimate resin use from the mesh, supports, hollowing, and sometimes resin profile. These estimates are good enough for comparing versions of the same job. They are weaker as a final quote because they do not know your workflow. A shop that pours resin through filters after every job loses a different amount than a hobbyist who keeps the same resin in the vat. A user who washes in two IPA stages loses a different amount than one who uses a sealed wash station and lets parts drip thoroughly before moving them.',
    },
    {
      type: 'list',
      items: [
        'Enter the full plate estimate after supports, not the original unsupported mesh volume.',
        'Use the same currency for bottle price and final quote; the calculator can convert the visible bottle price between common currencies with approximate exchange factors.',
        'Update bottle price when buying specialty resin, because castable, flexible, dental, and high temperature resins can cost several times more than standard resin.',
        'Use density conversion when the slicer mass and bottle volume do not share the same unit.',
        'Keep failure rate separate, especially when printing fragile miniatures, thin dental shells, or new support strategies.',
      ],
    },
    {
      type: 'message',
      title: 'Better quoting habit',
      html: 'Save your common resin bottle data, paste the slicer estimate, choose complexity, and record both numbers. The theoretical cost explains the slicer estimate; the real cost protects your material inventory.',
    },
    {
      type: 'title',
      text: 'What this calculator does not include',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A resin print has more costs than resin. This tool intentionally focuses on variable resin consumption because that is the number most often undercounted when comparing slicer output to real bottle usage. It does not include alcohol replacement, detergent, water treatment, paper towels, disposable gloves, FEP or release film wear, LCD screen aging, printer depreciation, electricity, post curing time, sanding, priming, support removal, packaging, or marketplace fees.',
    },
    {
      type: 'table',
      headers: ['Cost item', 'Include here?', 'Where to account for it'],
      rows: [
        ['Liquid resin used by print', 'Yes', 'This calculator'],
        ['Resin residue and normal handling waste', 'Yes', 'Complexity factor'],
        ['Failed prints', 'No', 'Add failure allowance by material and model risk'],
        ['IPA, gloves, towels, filters', 'No', 'Consumables line item'],
        ['Support removal and sanding', 'No', 'Labor or finishing line item'],
        ['Printer depreciation', 'No', 'Hourly machine rate'],
      ],
    },
    {
      type: 'summary',
      title: 'Reliable resin cost workflow',
      items: [
        'Price by milliliter from the bottle you actually bought.',
        'Convert grams to milliliters with resin density when needed.',
        'Use slicer output after supports and hollowing.',
        'Apply a 10 to 15 percent correction based on geometry and handling loss.',
        'Keep failures, labor, consumables, and margin outside the resin material number.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
