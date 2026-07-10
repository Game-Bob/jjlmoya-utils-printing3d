import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = '3d-print-time-estimator-layer-height-speed';
const title = '3D Print Time Estimator by Layer Height and Speed';
const description =
  'Estimate 3D print duration without opening a slicer by combining model height, layer height, print speed, infill, complexity, travel overhead, and filament usage.';

const faqData = [
  {
    question: 'How long will my 3D print take without a slicer?',
    answer:
      'You can estimate it from total layers, approximate material volume, average print speed, infill, and an overhead allowance for travel moves and direction changes. A slicer remains more accurate for final jobs.',
  },
  {
    question: 'Why does layer height change print time so much?',
    answer:
      'Layer height changes the number of Z layers. A 0.12 mm profile creates far more layers than a 0.28 mm profile for the same model height, so the printer repeats perimeters, infill, and layer-change overhead many more times.',
  },
  {
    question: 'Why is real print time longer than speed divided by distance?',
    answer:
      'Printers rarely maintain the requested speed through corners, short segments, small details, retractions, Z moves, and travel paths. Acceleration limits and overhead make real duration longer than ideal motion math.',
  },
  {
    question: 'Is this more accurate than a slicer estimate?',
    answer:
      'No. This calculator is for early planning, quoting, and what-if comparisons. A slicer can inspect exact geometry, supports, seams, acceleration settings, extrusion width, and toolpath order.',
  },
];

const howToData = [
  { name: 'Enter the model height', text: 'Use the Z height of the model or the tallest object in the planned print job.' },
  { name: 'Choose the layer height', text: 'Use the actual print profile value, such as 0.20 mm for a common FDM draft-quality setup.' },
  { name: 'Add speed, footprint, and infill', text: 'Use average printing speed, an approximate XY footprint area, and the target infill percentage.' },
  { name: 'Tune complexity and overhead', text: 'Increase complexity for tiny details and increase overhead for many travel moves, supports, or retractions.' },
  { name: 'Compare speed scenarios', text: 'Use the 40, 60, and 80 mm/s rows to see whether faster print speed meaningfully changes the total job duration.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D print time estimator inputs',
    resultsAriaLabel: 'Estimated 3D print time results',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    modelHeightLabel: 'Model height',
    modelHeightHint: 'Tallest Z dimension of the print.',
    layerHeightLabel: 'Layer height',
    speedLabel: 'Average print speed',
    footprintLabel: 'Estimated footprint area',
    footprintHint: 'Approximate XY area used as a volume proxy.',
    infillLabel: 'Infill density',
    complexityLabel: 'Complexity factor',
    complexityHint: '0.80 for simple shapes, 1.20 for tiny details and short segments.',
    overheadLabel: 'Travel overhead',
    filamentDiameterLabel: 'Filament diameter',
    densityLabel: 'Material density',
    timeLabel: 'Estimated print time',
    layersLabel: 'Total layers',
    materialLabel: 'Material estimate',
    filamentLabel: 'Filament length',
    effectiveSpeedLabel: 'Effective speed',
    baseTimeLabel: 'Extrusion time',
    overheadTimeLabel: 'Overhead time',
    comparisonLabel: 'Speed comparison',
    minutesUnit: 'min',
    hoursUnit: 'h',
    layersUnit: 'layers',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm2',
    in2Unit: 'in2',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm3',
    densityUnit: 'g/cm3',
    multiplierUnit: 'x',
    lowInsight: 'Short estimate: slicer overhead, bed heat-up, and cooldown may become a large share of the real elapsed time.',
    balancedInsight: 'Balanced estimate: speed changes matter, but layer count and overhead still shape the final duration.',
    highInsight: 'Long estimate: consider thicker layers, lower infill, fewer supports, or splitting the model before simply raising speed.',
  },
  seo: [
    { type: 'title', text: 'How to Estimate 3D Print Time from Layer Height and Speed', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>3D print time estimator by layer height and speed</strong> is useful when you need a planning number before opening a slicer, comparing several print profiles, or quoting a part from rough dimensions. The core idea is simple: the model height divided by layer height gives the layer count, and the estimated amount of extruded path divided by average speed gives the motion time. The difficult part is that real FDM printing is not a clean conveyor belt. The nozzle slows down for corners, retractions interrupt extrusion, travel moves add non-printing distance, and short segments rarely reach the commanded speed.',
    },
    {
      type: 'paragraph',
      html: 'This calculator intentionally goes beyond the most basic formula. Instead of assuming that <code>height / layer height / speed</code> is enough, it combines an approximate model volume, infill density, extrusion road width, complexity factor, layer-change time, and a travel overhead percentage. The result is still an estimator, not a slicer replacement, but it answers the practical question users search for: <strong>how long will my 3D print take</strong> if I change layer height, infill, or speed?',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0.20 mm', label: 'Common FDM layer height for balanced prints', icon: 'mdi:layers-outline' },
        { value: '15-20%', label: 'Useful travel and motion overhead starting range', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: 'Typical comparison speeds for desktop printers', icon: 'mdi:speedometer' },
        { value: '1.75 mm', label: 'Common filament diameter used for material length', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use average speed, not headline speed',
      html: '<p>If your slicer profile says 120 mm/s but outer walls run at 40 mm/s, small perimeters run at 25 mm/s, and infill runs at 90 mm/s, the average print speed is not 120 mm/s. For planning, a realistic average often produces a better estimate than the fastest movement in the profile.</p>',
    },

    { type: 'title', text: 'Why Layer Height Has Such a Large Effect on Duration', level: 2 },
    {
      type: 'paragraph',
      html: 'Layer height controls how many times the printer must repeat the same basic sequence: perimeter, internal structure, top or bottom surfaces, travel to the next island, and Z movement to the next layer. A model that is 80 mm tall needs 400 layers at 0.20 mm, but about 667 layers at 0.12 mm. Even if each thin layer uses slightly less plastic per pass, the printer performs far more layer transitions, more repeated outlines, and more opportunities for slow acceleration-limited motion.',
    },
    {
      type: 'table',
      headers: ['Model height', 'Layer height', 'Layer count', 'Planning interpretation'],
      rows: [
        ['80 mm', '0.28 mm', '286 layers', 'Fast draft profile with visible layer lines.'],
        ['80 mm', '0.20 mm', '400 layers', 'Balanced quality and duration for many parts.'],
        ['80 mm', '0.12 mm', '667 layers', 'Fine detail profile that can add many hours.'],
        ['160 mm', '0.20 mm', '800 layers', 'Tall parts become duration-heavy even at normal speeds.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'When layer height is the real bottleneck',
      badge: 'Check layers',
      html: '<p>If increasing print speed barely changes the estimate, the job may be dominated by layer count, short segments, and overhead. In that case, switching from 0.12 mm to 0.20 mm may save more time than pushing the printer from 60 mm/s to 80 mm/s.</p>',
    },
    {
      type: 'summary',
      title: 'Layer height decision rules',
      items: [
        'Use thicker layers for prototypes, brackets, fixtures, and parts where Z surface finish is not critical.',
        'Use thinner layers for shallow curves, small text, miniatures, and cosmetic surfaces.',
        'For tall parts, layer height changes compound quickly because every extra layer repeats overhead.',
      ],
    },

    { type: 'title', text: 'Print Speed, Acceleration, and the Complexity Factor', level: 2 },
    {
      type: 'paragraph',
      html: 'A print speed value is a target, not a promise. The printer must accelerate up to that speed, decelerate before corners, obey jerk or junction deviation limits, and sometimes slow down for cooling, bridges, overhangs, minimum layer time, and tiny islands. This is why a <strong>print speed to print time calculator</strong> needs a complexity factor. A clean box with long straight infill lines can run close to the requested speed. A detailed figurine, logo, lattice, threaded part, or organic sculpture may spend most of its time on short segments where acceleration limits matter more than maximum speed.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Simple geometry',
          description: 'Boxes, panels, and long infill strokes can use a lower complexity multiplier.',
          icon: 'mdi:cube-outline',
          points: ['Longer continuous paths', 'Fewer islands', 'Less retraction overhead'],
        },
        {
          title: 'Mixed geometry',
          description: 'Most brackets, enclosures, props, and household parts sit near the default multiplier.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['Perimeters and infill both matter', 'Moderate travel moves', 'Balanced acceleration losses'],
        },
        {
          title: 'Detailed geometry',
          description: 'Small features, text, lattices, supports, and curved organic surfaces need a higher multiplier.',
          icon: 'mdi:vector-polyline',
          points: ['Short segments dominate', 'More starts and stops', 'More retractions and travels'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Raising print speed: what improves and what does not',
      items: [
        { pro: 'Long infill lines may finish faster when speed increases.', con: 'Outer walls and small details may still be capped by profile limits.' },
        { pro: 'Large low-detail prototypes can benefit from faster motion.', con: 'Acceleration, ringing, extrusion flow, and cooling can limit usable speed.' },
        { pro: 'A speed comparison table quickly shows the potential saving.', con: 'It cannot predict slicer-specific slowdowns such as minimum layer time.' },
      ],
    },
    {
      type: 'message',
      title: 'Speed estimates are most useful for relative comparison',
      ariaLabel: 'Speed estimate note',
      html: '<p>Use the 40, 60, and 80 mm/s rows to compare directionally. If 80 mm/s saves only a small amount, the print is probably limited by layers, overhead, or complexity rather than raw speed.</p>',
    },

    { type: 'title', text: 'Infill, Volume, and Material Time', level: 2 },
    {
      type: 'paragraph',
      html: 'The calculator uses footprint area and model height as a rough volume proxy, then scales that volume by an effective solid ratio. This is not as exact as reading mesh geometry, but it captures an important physical truth: walls and skins do not disappear when infill is reduced. A part printed at 15% infill still has perimeters, top layers, bottom layers, solid small features, and sometimes support interfaces. The calculator keeps a shell share in the estimate so low infill does not unrealistically collapse print time to almost nothing.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Increase footprint area for broad objects, boxes, flat plates, trays, and wide enclosures.',
        'Decrease footprint area for narrow towers, thin figurines, small brackets, and open frames.',
        'Use infill percentage as a planning control, not as total part density.',
        'Remember that supports, brims, rafts, purge towers, and multi-color waste add time outside the model itself.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: 'Example: why 20% infill is not 20% print time',
      html: '<p>An 80 mm tall enclosure may have four walls, six bottom layers, six top layers, screw bosses, and a large internal cavity. Lowering infill from 40% to 20% reduces the internal path length, but the walls and skins are still printed on every layer. For perimeter-heavy models, changing wall count or layer height can affect time more than changing infill alone.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Footprint area', definition: 'The approximate XY area occupied by the model, used here as a rough volume input.' },
        { term: 'Effective solid ratio', definition: 'A planning blend of shell material and infill material used to estimate extruded volume.' },
        { term: 'Extrusion road', definition: 'The bead of plastic laid down by the nozzle; its cross-section depends on layer height and extrusion width.' },
        { term: 'Filament length', definition: 'The length of raw filament needed to supply the estimated plastic volume.' },
      ],
    },

    { type: 'title', text: 'Travel Overhead: The Missing Piece in Simple Calculators', level: 2 },
    {
      type: 'paragraph',
      html: 'A simple duration estimate often ignores non-extruding movement. Real printers move between islands, retract and prime filament, wipe, hop in Z, avoid printed parts, change direction, and sometimes pause for cooling. These actions do not create visible material, but they consume clock time. A fixed overhead percentage is a practical way to account for travel moves when you do not have a full slicer toolpath. The default range of 15-20% is a useful starting point for ordinary single-material FDM parts.',
    },
    {
      type: 'table',
      headers: ['Print condition', 'Suggested overhead', 'Reason'],
      rows: [
        ['Single simple part', '10-15%', 'Few islands, fewer retractions, mostly continuous paths.'],
        ['Typical functional part', '15-22%', 'Moderate perimeters, infill, and travel moves.'],
        ['Many small parts on one plate', '22-35%', 'Frequent travel between objects and repeated starts.'],
        ['Supports or detailed surfaces', '25-40%', 'Support interfaces, short segments, and retractions add time.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bed warmup not included',
      badge: 'Elapsed job time',
      html: '<p>The estimate focuses on motion and extrusion time. Add separate time for bed heat-up, nozzle heat-up, probing, mesh leveling, filament loading, cooldown, and part removal when planning real elapsed machine occupancy.</p>',
    },
    {
      type: 'tip',
      title: 'Calibrate overhead from one real print',
      html: '<p>Take one finished job, compare slicer or stopwatch duration with this calculator, then adjust overhead and complexity until the estimate matches. That local calibration will improve future planning more than using generic values forever.</p>',
    },

    { type: 'title', text: 'When to Trust This Calculator and When to Use a Slicer', level: 2 },
    {
      type: 'paragraph',
      html: 'This tool is strongest for early estimates, quoting conversations, classroom demonstrations, and comparing layer height versus speed before committing to a profile. It is especially useful when the exact STL is not available yet, when a customer only provides approximate dimensions, or when you want to know whether a change is worth investigating. It is not designed to replace slicer estimates for production-critical jobs, because slicers inspect exact mesh geometry, per-feature speeds, support paths, wall order, top and bottom surfaces, seam placement, acceleration control, and machine-specific firmware behavior.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'Use this calculator to compare 0.12 mm, 0.20 mm, and 0.28 mm layer profiles quickly.',
        'Use it to estimate whether a tall model is layer-count limited before changing speed.',
        'Use it to get a rough material volume, filament length, and weight from approximate dimensions.',
        'Use a slicer before buying material, reserving machine time, or promising delivery dates.',
      ],
    },
    {
      type: 'table',
      headers: ['Question', 'Calculator answer', 'Slicer answer'],
      rows: [
        ['Will thicker layers save time?', 'Good directional estimate from layer count.', 'Exact toolpath and surface-specific result.'],
        ['Will 80 mm/s be much faster than 60 mm/s?', 'Useful speed scenario comparison.', 'Exact per-feature speed and acceleration behavior.'],
        ['How much filament might I need?', 'Approximate volume, length, and weight.', 'Profile-specific material report.'],
        ['Can I quote this production job?', 'Early screening only.', 'Required for final quote and scheduling.'],
      ],
    },
    {
      type: 'summary',
      title: 'Best workflow',
      items: [
        'Start with this estimator to narrow down layer height, speed, and infill choices.',
        'Tune complexity and overhead using one known print from your own machine.',
        'Re-slice the final candidate profile before committing to cost, time, or delivery.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
