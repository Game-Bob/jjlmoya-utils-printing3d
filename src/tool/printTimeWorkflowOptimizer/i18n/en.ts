import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-print-time-workflow-optimizer';
const title = '3D Print Time Workflow Optimizer';
const description =
  'Compare two FDM print setups side by side with layer count, corrected overhead, filament consumption, cost, quality tradeoff, and hardware speed warnings.';

const faqData = [
  {
    question: 'Why is this different from a simple print time calculator?',
    answer:
      'It includes model complexity overhead, layer-based retraction time, infill-adjusted volume, filament mass, material cost, and a side-by-side scenario comparison instead of only dividing volume by speed.',
  },
  {
    question: 'Can this replace slicer time estimates?',
    answer:
      'No. A slicer knows exact toolpaths, acceleration, jerk, travel moves, supports, seams, and retractions. This optimizer is for planning and comparing setups before committing to a slicer profile.',
  },
  {
    question: 'What does the complexity setting change?',
    answer:
      'Low, medium, and high complexity apply overhead coefficients for travel moves, acceleration losses, corners, islands, and retraction-heavy geometry. Higher complexity increases estimated print time.',
  },
  {
    question: 'Why does the tool warn above 100 mm/s?',
    answer:
      'Many standard desktop printers can move faster than 100 mm/s, but extrusion consistency, hotend melt rate, cooling, and acceleration limits can make high speed risky without calibration.',
  },
];

const howToData = [
  { name: 'Enter model size and volume', text: 'Add model height and an estimated volume from CAD, slicer preview, or a bounding-volume approximation.' },
  { name: 'Tune scenario A', text: 'Choose the first layer height, speed, line width, infill, material, and model complexity.' },
  { name: 'Tune scenario B', text: 'Adjust the second setup to compare a finer layer height, slower speed, or different infill strategy.' },
  { name: 'Read the workflow impact', text: 'Compare time, filament, cost, layer count, efficiency, flow demand, and the 10% speed reduction tradeoff.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Print time workflow inputs',
    resultsAriaLabel: 'Print time workflow results',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    currencyLabel: 'Currency',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Scenario A',
    scenarioBLabel: 'Scenario B',
    modelHeightLabel: 'Model height',
    modelVolumeLabel: 'Estimated volume',
    layerHeightLabel: 'Layer height',
    speedLabel: 'Speed',
    lineWidthLabel: 'Line width',
    infillLabel: 'Infill',
    complexityLabel: 'Complexity',
    complexityTooltip: 'Complexity estimates dead time from accelerations, corners, retractions, islands, and short travel moves.',
    pieceTypeLabel: 'Piece type',
    solidPieceLabel: 'Solid / continuous',
    hollowPieceLabel: 'Hollow / many voids',
    materialLabel: 'Material',
    filamentPriceLabel: 'Filament price',
    lowComplexity: 'Low - simple faces',
    mediumComplexity: 'Medium - mixed geometry',
    highComplexity: 'High - many islands',
    estimatedTimeLabel: 'Estimated time',
    filamentLabel: 'Filament',
    costLabel: 'Material cost',
    layersLabel: 'Layers',
    efficiencyLabel: 'Efficiency',
    flowLabel: 'Volumetric flow',
    flowTooltip: 'If this exceeds 10-12 mm3/s on a standard hotend, under-extrusion risk increases.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Quality tradeoff',
    speedReductionLabel: '-10% speed',
    speedReductionAddsLabel: 'adds',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: 'for about 8% cleaner surface planning',
    hardwareWarning: 'Speed is above 100 mm/s. Check hotend flow, cooling, acceleration, and extrusion calibration to avoid under-extrusion.',
    flowWarning: 'Volumetric flow is above a typical standard-hotend comfort zone.',
    bestValueLabel: 'Best value',
    timeDeltaLabel: 'Time difference',
    costDeltaLabel: 'Cost difference',
    materialDeltaLabel: 'Material difference',
    winnerBadge: 'Best value',
    scenarioPrefix: 'Scenario',
    inScenarioLabel: 'in',
    fasterDirection: 'faster',
    cheaperDirection: 'cheaper',
    lighterDirection: 'lighter',
    criterionAlignedLabel: 'Aligned with best value',
    criterionTradeoffLabel: 'Tradeoff for best value',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'm',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'How to Estimate 3D Print Time Before Slicing', level: 2 },
    {
      type: 'paragraph',
      html: 'A useful <strong>3D print time estimator</strong> cannot be only volume divided by speed. FDM printers spend time accelerating, slowing for corners, retracting filament, traveling between islands, cooling small layers, and recovering pressure after direction changes. The optimizer models the part as printable volume, line width, layer height, speed, layer count, and a complexity coefficient so early planning is closer to real workflow decisions.',
    },
    {
      type: 'paragraph',
      html: 'The base extrusion time is calculated from volume over volumetric throughput: speed multiplied by line width and layer height. Then the tool applies a correction coefficient for model complexity and adds a fixed retraction allowance per layer. This does not claim slicer precision, but it gives a more honest comparison between a 0.20 mm draft setup and a 0.12 mm quality setup than a linear calculator.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Low-complexity overhead for simple blocks and smooth parts', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'High-complexity overhead for many islands and retractions', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Planning retraction allowance added per layer', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Standard-printer warning threshold for extrusion risk', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use slicer volume when possible',
      html: '<p>The best volume input is the slicer or CAD material volume for the model, not the outside bounding box. Bounding boxes include empty air around curves, holes, handles, and cavities, so they can exaggerate time and filament.</p>',
    },
    { type: 'title', text: 'Why Layer Height Changes Time So Strongly', level: 2 },
    {
      type: 'paragraph',
      html: 'Layer height affects print time twice. First, it changes volumetric throughput: a 0.12 mm layer at the same speed and width extrudes 40% less plastic per second than a 0.20 mm layer. Second, it increases layer count, so layer-change overhead, retractions, pressure settling, and cooling decisions happen more often. That is why small cosmetic changes can turn a five-hour print into an eight-hour print.',
    },
    {
      type: 'table',
      headers: ['Layer height', 'Typical use', 'Workflow consequence'],
      rows: [
        ['0.28-0.32 mm', 'Draft parts, large fixtures, quick checks', 'Low layer count and high throughput, but visible layer lines.'],
        ['0.18-0.22 mm', 'General PLA and PETG printing', 'Balanced time, strength, and surface quality for many desktop printers.'],
        ['0.10-0.14 mm', 'Miniatures, curved shells, visible consumer parts', 'Much longer jobs because throughput falls and layer count rises.'],
        ['Below 0.10 mm', 'Special finishing cases', 'Often limited by machine accuracy, cooling, and diminishing visual returns.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fine layers can be slower than the formula suggests',
      badge: 'Cooling and minimum layer time',
      html: '<p>Small models may hit minimum layer time in the slicer. When that happens, the printer slows down to let plastic cool, even if the volumetric formula says the machine could move faster.</p>',
    },
    {
      type: 'summary',
      title: 'Layer height rules',
      items: [
        'Lower layer height reduces flow per second at the same speed.',
        'More layers add repeated overhead even when the model volume is unchanged.',
        'The best comparison is scenario based: draft profile versus quality profile.',
      ],
    },
    { type: 'title', text: 'Model Complexity Overhead and Dead Time', level: 2 },
    {
      type: 'paragraph',
      html: 'Dead time is the gap between theoretical extrusion and the job clock. A straight vase-like wall has little travel and few retractions. A mechanical enclosure with many holes, bosses, labels, ribs, and separated islands forces the printer to start and stop many times. Acceleration limits mean the nozzle may never reach commanded speed on short segments, so the real average movement speed is lower than the slider value.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Low complexity', description: 'Smooth models, continuous contours, few islands, and limited internal travel.', icon: 'mdi:shape-outline', points: ['Lower overhead', 'Stable speed', 'Few retractions'] },
        { title: 'Medium complexity', description: 'Common functional parts with holes, mixed curves, infill changes, and moderate travel.', icon: 'mdi:cog-outline', highlight: true, points: ['Balanced default', 'Some travel loss', 'Useful quote baseline'] },
        { title: 'High complexity', description: 'Textured surfaces, many separated features, support interfaces, and retraction-heavy sections.', icon: 'mdi:transit-connection-variant', points: ['High overhead', 'More stringing risk', 'Longer actual clock time'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Overhead coefficient', definition: 'A multiplier that approximates travel moves, acceleration loss, retractions, and other time not captured by steady extrusion math.' },
        { term: 'Volumetric flow', definition: 'The amount of plastic pushed through the nozzle per second, calculated as speed times line width times layer height.' },
        { term: 'Layer count', definition: 'The model height divided by layer height, rounded up because partial final layers still require a pass.' },
        { term: 'Sub-extrusion', definition: 'A defect where the hotend or extruder cannot deliver enough molten plastic for the requested speed and line geometry.' },
      ],
    },
    {
      type: 'message',
      title: 'Treat complexity as a calibration knob',
      ariaLabel: 'Complexity coefficient note',
      html: '<p>If your slicer consistently reports longer times than this optimizer for similar models, raise complexity. If your direct-drive printer with tuned acceleration beats the estimate, lower it for future planning.</p>',
    },
    { type: 'title', text: 'Filament Consumption, Cost, and Infill', level: 2 },
    {
      type: 'paragraph',
      html: 'Time is only one part of the workflow decision. Filament weight and cost matter when quoting parts, planning batch jobs, or deciding whether a fine-detail profile is worth tying up the printer. The optimizer estimates corrected printable volume by preserving a shell share and scaling the internal region by infill percentage, then multiplies that volume by material density.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use PLA around 1.24 g/cm3 and PETG around 1.27 g/cm3 for quick material planning.',
        'Raise estimated volume when supports, brims, rafts, or purge structures are part of the job.',
        'Lower infill reduces filament and time, but walls, top layers, and bottom layers still consume material.',
        'For production batches, compare calculator estimates with actual spool weight used and tune future quotes.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Example workflow decision',
      html: '<p>A 120 cm3 PLA part at 0.20 mm layers may be acceptable for a shop jig, while the 0.12 mm version looks better but occupies the printer longer. Comparing time and material cost side by side makes the tradeoff visible before the machine is committed.</p>',
    },
    {
      type: 'proscons',
      title: 'Optimizing speed versus quality',
      items: [
        { pro: 'Higher speed can free printer capacity for more jobs per day.', con: 'It can expose ringing, weak corners, poor cooling, and hotend flow limits.' },
        { pro: 'Lower speed often improves surface finish and dimensional consistency.', con: 'It increases queue time and can make small commercial parts less profitable.' },
        { pro: 'Lower layer height improves curved surfaces and miniatures.', con: 'It multiplies layer count and repeated machine overhead.' },
      ],
    },
    { type: 'title', text: 'Hardware Warnings and Practical Speed Limits', level: 2 },
    {
      type: 'paragraph',
      html: 'A slicer speed value is not a guarantee that the nozzle will sustain that speed everywhere. Standard Cartesian bedslingers, older Bowden extruders, short melt-zone hotends, and weak part cooling can struggle above 100 mm/s unless acceleration, jerk, pressure advance, temperature, and flow calibration are tuned. The warning does not mean the print will fail; it means the requested setup should be checked against hardware behavior.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely cause', 'Planning response'],
      rows: [
        ['Thin walls or gaps', 'Hotend cannot melt enough plastic or extruder slips', 'Reduce speed, raise temperature cautiously, or lower line width/layer height.'],
        ['Ringing near corners', 'Acceleration and frame vibration dominate', 'Lower acceleration or reduce speed for visible walls.'],
        ['Curled small features', 'Cooling cannot keep up', 'Lower speed, increase fan, or print multiple copies.'],
        ['Stringing on complex parts', 'Many travels and retractions', 'Increase complexity overhead and tune retraction/temperature.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Volumetric flow is the real speed ceiling',
      badge: 'Check mm3/s',
      html: '<p>Two profiles with the same movement speed can demand different melt rates. A 0.30 mm layer and 0.50 mm line at 80 mm/s needs far more plastic per second than a 0.12 mm layer and 0.42 mm line at the same speed.</p>',
    },
    {
      type: 'summary',
      title: 'Use the optimizer before slicing',
      items: [
        'Compare two candidate profiles instead of guessing from a single number.',
        'Watch layer count, volumetric flow, and hardware warnings together.',
        'Keep the last interaction locally so repeated planning can continue from the previous setup.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
