import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'volumetric-flow-rate-limit-calculator';
const title = 'Volumetric Flow Rate Calculator: Precision Hotend Limits';
const description =
  'Calculate 3D printing volumetric flow in mm3/s, compare it with hotend melt rate capacity, and identify when speed, line width, and layer height will cause under-extrusion.';

const faqData = [
  {
    question: 'What is volumetric flow rate in 3D printing?',
    answer:
      'Volumetric flow rate is the volume of plastic requested from the hotend each second. It is calculated as line width multiplied by layer height multiplied by print speed, producing a result in mm3/s.',
  },
  {
    question: 'What happens if volumetric flow exceeds the hotend limit?',
    answer:
      'The hotend cannot fully melt plastic at the requested rate. Pressure rises, extrusion becomes inconsistent, and the print can show under-extrusion, weak walls, matte rough surfaces, or skipped extruder steps.',
  },
  {
    question: 'Is a V6 really limited to 15 mm3/s?',
    answer:
      '15 mm3/s is a practical planning constant for a well-tuned standard melt-zone hotend. Real values depend on filament, temperature, nozzle, heater power, extruder grip, and how much visual quality loss is acceptable.',
  },
  {
    question: 'Why does increasing layer height reduce safe speed?',
    answer:
      'Layer height is a direct multiplier in the flow equation. If line width and hotend capacity stay the same, doubling layer height roughly halves the maximum speed before the hotend reaches its melt limit.',
  },
];

const howToData = [
  { name: 'Choose a hotend architecture', text: 'Select a standard V6, Volcano, Bambu high-flow, or ultra-high-flow preset to set the melt capacity constant.' },
  { name: 'Set line geometry', text: 'Adjust line width and layer height to match the slicer profile you plan to use.' },
  { name: 'Move print speed', text: 'Use the fine speed slider to watch the stress gauge approach the 70%, 90%, and critical flow zones.' },
  { name: 'Read safe speed and reserve', text: 'Compare current mm3/s with the maximum safe speed and remaining melt-rate reserve.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Volumetric flow rate limit inputs',
    resultsAriaLabel: 'Volumetric flow rate limit results',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    hotendLabel: 'Hotend architecture',
    lineWidthLabel: 'Line width',
    layerHeightLabel: 'Layer height',
    speedLabel: 'Print speed',
    flowLabel: 'Volumetric flow',
    loadLabel: 'Thermal load',
    maxSpeedLabel: 'Max safe speed',
    reserveLabel: 'Melt reserve',
    stateLabel: 'System state',
    idealState: 'IDEAL FLOW',
    limitState: 'VISCOSITY LIMIT',
    criticalState: 'CRITICAL FLOW',
    idealHint: 'The hotend has enough thermal headroom for stable melt pressure and consistent extrusion.',
    limitHint: 'The profile is close to the viscosity edge. Small material or temperature changes can reveal under-extrusion.',
    criticalHint: 'The requested flow exceeds the reliable melt window. Reduce speed, line width, or layer height.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: 'How the Maximum Volumetric Flow Rate Calculator Works', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>maximum volumetric flow rate calculator</strong> answers a more useful question than a simple speed calculator: can the hotend melt the amount of plastic requested by the slicer? Motion systems can advertise high travel speeds, but extrusion is limited by thermal transfer, melt-zone length, nozzle pressure, filament viscosity, heater stability, and extruder grip. The calculator models the requested melt rate as <code>Vf = line width x layer height x speed</code>, with the result shown in <code>mm3/s</code>.',
    },
    {
      type: 'paragraph',
      html: 'The tool compares that instantaneous flow against a selected hotend capacity. Standard V6-style hotends are represented with a lower melt-rate constant, longer melt-zone architectures such as Volcano use a higher constant, and modern high-flow hotends use larger values. The purpose is not to promise a universal laboratory limit; it is to provide a fast engineering check before a slicer profile asks for more plastic than the hardware can reliably liquefy.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: 'Unit used for hotend melt-rate capacity', icon: 'mdi:cube-scan' },
        { value: '70%', label: 'Comfort zone boundary for stable production profiles', icon: 'mdi:gauge-low' },
        { value: '90%', label: 'Viscosity edge where failures become sensitive', icon: 'mdi:gauge' },
        { value: '100%+', label: 'Critical flow where under-extrusion risk dominates', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use slicer line width, not nozzle diameter',
      html: '<p>The flow equation uses the extrusion line width from the slicer. A 0.4 mm nozzle often prints a 0.42-0.48 mm line. If the calculator uses nozzle diameter instead of line width, it can underestimate flow demand and hide a profile that is already near the hotend limit.</p>',
    },
    { type: 'title', text: 'Why Speed and Melt Rate Are Not the Same Limit', level: 2 },
    {
      type: 'paragraph',
      html: 'A printer can move at 300 mm/s and still fail at 90 mm/s if the extrusion volume is too high. Speed only becomes meaningful after line width and layer height are included. Printing a 0.45 mm line at 0.20 mm layers and 150 mm/s requests 13.5 mm3/s. Printing a 0.60 mm line at 0.30 mm layers and the same speed requests 27 mm3/s. The motion speed is identical, but the second profile asks the hotend to melt twice as much plastic per second.',
    },
    {
      type: 'table',
      headers: ['Line width', 'Layer height', 'Speed', 'Requested flow'],
      rows: [
        ['0.42 mm', '0.16 mm', '120 mm/s', '8.06 mm3/s'],
        ['0.45 mm', '0.20 mm', '150 mm/s', '13.50 mm3/s'],
        ['0.50 mm', '0.25 mm', '180 mm/s', '22.50 mm3/s'],
        ['0.60 mm', '0.30 mm', '150 mm/s', '27.00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Under extrusion often looks like a tuning problem',
      badge: 'Flow ceiling',
      html: '<p>When a profile exceeds melt capacity, users often chase retraction, pressure advance, temperature, or esteps. Those settings matter, but they cannot make a short melt zone process unlimited plastic. First verify that the requested mm3/s is inside the hotend capacity window.</p>',
    },
    {
      type: 'summary',
      title: 'Flow equation rules',
      items: [
        'Line width, layer height, and speed multiply directly.',
        'A small increase in two geometry settings can overwhelm a hotend even when speed looks modest.',
        'Maximum safe speed is hotend limit divided by line width and layer height.',
      ],
    },
    { type: 'title', text: 'Thermal Performance Benchmarks by Hotend Architecture', level: 2 },
    {
      type: 'paragraph',
      html: 'Hotend architecture controls how long filament remains in the heated zone and how efficiently heat moves into the core of the filament. A compact V6-style melt zone is responsive and lightweight, but its practical flow ceiling is lower than a long Volcano-style melt zone. High-flow ceramic and ultra-high-flow designs increase heater contact, melt path length, or internal surface area to sustain higher extrusion rates.',
    },
    {
      type: 'table',
      headers: ['Hotend architecture', 'Planning capacity', 'Best use case', 'Engineering caution'],
      rows: [
        ['V6 / MK8', '15 mm3/s', 'Quality profiles, moderate PLA/PETG speed, standard desktop printers', 'Can reach pressure limits quickly with wide lines or tall layers.'],
        ['Revo High Flow', '18 mm3/s', 'Drop-in high-flow upgrade with compact form factor', 'Still needs temperature and material validation.'],
        ['Volcano', '25 mm3/s', 'Large nozzles, thick layers, functional parts, fast draft profiles', 'Long melt zones can ooze more and need retraction tuning.'],
        ['Bambu HF', '32 mm3/s', 'High-speed enclosed printer profiles and rapid PLA production', 'Profile values depend heavily on cooling and filament behavior.'],
        ['Rapido UHF / similar', '45 mm3/s', 'Extreme flow, large extrusion widths, production throughput', 'Extruder torque, heater power, and nozzle geometry become limiting factors.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Short melt zone', description: 'Compact, responsive, lighter toolhead, lower thermal storage.', icon: 'mdi:thermometer-low', points: ['Good detail control', 'Lower flow ceiling', 'Less thermal inertia'] },
        { title: 'Long melt zone', description: 'More contact time for filament to absorb heat before reaching the nozzle.', icon: 'mdi:thermometer-lines', highlight: true, points: ['Higher mm3/s', 'Better thick-layer output', 'More ooze management'] },
        { title: 'High flow core', description: 'Modern geometry increases contact area or heater coupling without simply extending length.', icon: 'mdi:heat-wave', points: ['Fast response', 'High throughput', 'Needs tuned profiles'] },
      ],
    },
    {
      type: 'message',
      title: 'Benchmark values are planning constants',
      ariaLabel: 'Hotend benchmark note',
      html: '<p>The preset limits are deliberately conservative planning constants. Real melt capacity varies with filament formulation, nozzle diameter, heater cartridge, thermistor placement, extrusion temperature, and the amount of quality loss the part can tolerate.</p>',
    },
    { type: 'title', text: 'Reading the Stress Gauge Zones', level: 2 },
    {
      type: 'paragraph',
      html: 'The stress gauge translates flow math into a visual operating state. Below 70% load, the hotend has room for normal filament variation, minor temperature oscillation, and speed changes across the toolpath. Between 70% and 90%, extrusion can remain successful, but the profile becomes sensitive. Above 90%, the print is close enough to the melt ceiling that material batch variation, moisture, or a slightly colder nozzle can push it into visible under-extrusion.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: good production headroom for repeatable parts and normal material variation.',
        '70-90%: useful for speed testing, but validate walls, top surfaces, and infill bonding.',
        '90%+: treat as a critical zone unless the filament and hotend have been measured with a flow tower.',
        'Above 100%: reduce speed, line width, or layer height before chasing unrelated slicer settings.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: 'Why the gauge can be better than a warning box',
      html: '<p>A warning box tells the user what went wrong after crossing a threshold. A stress gauge shows the approach to that threshold. This makes it easier to stop at a planned operating margin instead of reacting only when the profile has already become unstable.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Critical flow is not only a surface quality problem',
      badge: 'Mechanical strength',
      html: '<p>Under-melted filament can bond poorly between roads and layers. Even when the outside wall looks acceptable, infill bonding, perimeter adhesion, and impact strength can suffer if the flow rate exceeds the melt capacity.</p>',
    },
    { type: 'title', text: 'How to Use the Calculator With a Slicer Profile', level: 2 },
    {
      type: 'paragraph',
      html: 'Start with the actual slicer values for line width, layer height, and outer wall or general print speed. Select the closest hotend architecture. Move the speed slider until the gauge reaches your preferred load. The displayed maximum safe speed is the speed that would exactly reach the hotend limit for the current line geometry. For production work, use a lower value than the mathematical maximum.',
    },
    {
      type: 'paragraph',
      html: 'If the gauge enters the critical zone, there are three direct ways to reduce flow: lower speed, reduce line width, or reduce layer height. Temperature can increase practical flow for some materials, but it also changes gloss, bridging, overhang behavior, stringing, and dimensional accuracy. The calculator intentionally focuses on geometry and hardware capacity because those are the most transparent levers.',
    },
    {
      type: 'proscons',
      title: 'Ways to lower flow demand',
      items: [
        { pro: 'Lowering speed preserves line geometry and dimensional intent.', con: 'It increases print time and may reduce farm throughput.' },
        { pro: 'Lowering layer height improves surface finish and reduces mm3/s.', con: 'It increases layer count and can make the job longer despite lower flow.' },
        { pro: 'Lowering line width can reduce pressure and improve fine detail.', con: 'It can weaken sparse walls and increase the number of toolpaths.' },
      ],
    },
    {
      type: 'tip',
      title: 'Validate with a flow tower',
      html: '<p>Use the calculator to choose a realistic speed range, then print a flow-rate test tower for the specific filament and temperature. The best production limit is the highest flow that still gives stable walls, consistent gloss, good layer bonding, and no extruder skipping.</p>',
    },
    { type: 'title', text: 'Symptoms of Exceeding Hotend Melt Rate Capacity', level: 2 },
    {
      type: 'paragraph',
      html: 'A profile beyond the hotend melt limit can fail gradually. First, top surfaces may show thin tracks or small gaps. Then infill lines become inconsistent, perimeters lose gloss, and corners show weak pressure recovery. In more severe cases the extruder clicks, grinds filament, skips steps, or leaves brittle sections because the filament entering the nozzle is not fully softened.',
    },
    {
      type: 'table',
      headers: ['Observed symptom', 'Likely flow-related cause', 'Calculator response'],
      rows: [
        ['Thin walls at high speed', 'Requested mm3/s exceeds melt capacity on long straight moves', 'Lower speed until load returns below 90%.'],
        ['Rough matte extrusion', 'Filament is not fully heated through the core', 'Reduce flow or increase temperature carefully for that material.'],
        ['Extruder clicking', 'Back pressure rises beyond extruder grip or motor torque', 'Reduce flow immediately and inspect filament drive tension.'],
        ['Weak infill bonding', 'Material exits too cool or inconsistently melted', 'Use more thermal headroom for structural parts.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Volumetric flow', definition: 'The volume of plastic requested from the hotend per second, expressed in mm3/s.' },
        { term: 'Melt rate capacity', definition: 'The practical amount of filament a hotend can melt consistently while maintaining print quality.' },
        { term: 'Line width', definition: 'The width of an extruded road in the slicer, usually slightly larger than nozzle diameter.' },
        { term: 'Layer height', definition: 'The vertical thickness of each printed layer; a direct multiplier in flow demand.' },
        { term: 'Flow reserve', definition: 'The difference between hotend capacity and current requested flow.' },
      ],
    },
    {
      type: 'summary',
      title: 'Practical flow workflow',
      items: [
        'Calculate requested flow before increasing speed.',
        'Keep production profiles below the critical zone unless validated by testing.',
        'Use hotend presets as planning constants, then refine with material-specific calibration.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
