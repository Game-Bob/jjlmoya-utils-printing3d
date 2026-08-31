import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NozzleFlowRateCalculatorUI } from '../ui';

const slug = '3d-print-nozzle-flow-rate-calculator';
const title = '3D Print Nozzle Flow Rate Calculator';
const description = 'Calculate the extrusion flow requested by a 3D printer profile, find the speed ceiling for your hotend limit, and see when nozzle geometry leaves too little production margin.';

const faq = [
  {
    question: 'What does this nozzle flow rate calculator measure?',
    answer: 'It estimates the plastic volume requested each second from line width, layer height, and print speed. It compares that request with the flow limit you enter for your hotend and material combination.',
  },
  {
    question: 'Why is nozzle diameter an input if it is not multiplied into the flow formula?',
    answer: 'Nozzle diameter helps check whether the layer height is inside a practical nozzle envelope. The flow equation uses the slicer line width and layer height because those describe the deposited track.',
  },
  {
    question: 'What is a safe production speed?',
    answer: 'The calculator shows a planning speed at 85% of the entered flow limit. It is a margin, not a guarantee, because filament, temperature, cooling, nozzle condition, and motion limits can reduce real performance.',
  },
  {
    question: 'What should I do when the result is critical?',
    answer: 'Reduce print speed first, then consider a narrower line or lower layer height. If the profile still needs more throughput, validate the material and hotend with a flow calibration rather than trusting a catalogue value.',
  },
];

const howTo = [
  { name: 'Enter the nozzle and slicer geometry', text: 'Set nozzle diameter, line width, and layer height from the profile you intend to slice.' },
  { name: 'Set the requested speed', text: 'Enter the speed used by the feature you want to check, such as infill or a perimeter.' },
  { name: 'Enter a measured or conservative flow limit', text: 'Use a limit for the hotend and filament combination, starting conservatively when it has not been calibrated.' },
  { name: 'Read the ribbon and production margin', text: 'Use the requested flow, speed ceiling, 85% production speed, and state to decide which slicer value to change.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<NozzleFlowRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Nozzle flow rate inputs',
    resultsAriaLabel: 'Nozzle flow rate results',
    unitSystemLabel: 'Unit system',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial',
    presetLabel: 'Profile presets',
    qualityPreset: 'Fine detail',
    balancedPreset: 'Balanced',
    draftPreset: 'Fast draft',
    flowPresetLabel: 'Hotend and material',
    customFlowPreset: 'Custom limit',
    e3dV6PlaPreset: 'E3D V6 and PLA',
    e3dV6PetgPreset: 'E3D V6 and PETG',
    volcanoPlaPreset: 'Volcano and PLA',
    volcanoPetgPreset: 'Volcano and PETG',
    bambuPlaPreset: 'Bambu High Flow and PLA',
    bambuPetgPreset: 'Bambu High Flow and PETG',
    nozzleDiameterLabel: 'Nozzle diameter',
    lineWidthLabel: 'Line width',
    layerHeightLabel: 'Layer height',
    printSpeedLabel: 'Print speed',
    flowLimitLabel: 'Flow limit',
    nozzleUnit: 'mm',
    lineWidthUnit: 'mm',
    layerHeightUnit: 'mm',
    speedUnit: 'mm/s',
    flowUnit: 'mm³/s',
    requestedFlowLabel: 'Requested flow',
    safeSpeedLabel: 'Speed ceiling',
    productionSpeedLabel: '85% production speed',
    marginLabel: 'Flow margin',
    layerEnvelopeLabel: 'Limit load',
    readyState: 'ROOM TO PRINT',
    watchState: 'WATCH THE MARGIN',
    criticalState: 'FLOW OVER LIMIT',
    readyHint: 'The requested track leaves usable headroom below the entered limit.',
    watchHint: 'The profile is close to the limit. Validate the filament before raising speed.',
    criticalHint: 'The requested track needs more melt capacity than the entered limit allows.',
    layerWarning: 'Layer height is above 80% of nozzle diameter. Lower it or verify the slicer profile before printing.',
    geometryHint: 'The ribbon uses the stadium cross section used by modern slicers. Nozzle diameter is a geometry check, not a flow multiplier.',
    inverseTitle: 'Run the calculation backwards',
    inverseTargetFlowLabel: 'Target flow limit',
    inverseSpeedLabel: 'Desired speed',
    inverseSolveLabel: 'Find the maximum for',
    inverseLayerOption: 'Layer height',
    inverseWidthOption: 'Line width',
    inverseResultLabel: 'Suggested value',
    inverseNoSolution: 'This combination is not possible with the selected geometry.',
    inverseHint: 'This is the mathematical limit. Round down and check layer height against the nozzle.',
  },
  seo: [
    { type: 'title', text: 'What the Nozzle Flow Rate Calculator Tells You', level: 2 },
    {
      type: 'paragraph',
      html: 'A slicer speed is only half of an extrusion decision. The deposited track also has a width and a height, and both increase the plastic volume that must pass through the nozzle every second. This calculator turns those three profile values into a requested volumetric flow and compares it with a limit for the hotend and filament combination.',
    },
    {
      type: 'paragraph',
      html: 'The model uses a stadium shaped cross section: <code>area = (line width - layer height) x layer height + pi x layer height squared / 4</code>. Requested flow is that area multiplied by print speed. The result is a planning estimate for a slicer profile, not a measurement of the printer and not a promise that every feature will print at the same speed.',
    },
    { type: 'title', text: 'How Line Geometry Changes Flow Demand', level: 2 },
    {
      type: 'paragraph',
      html: 'A wider track or taller layer asks the extruder to deliver more plastic at the same motion speed. That is why a 0.6 mm nozzle can still print slowly when it is paired with a tall layer and a wide line. The nozzle diameter provides context for the layer envelope, while the actual line width remains the value that controls the deposited cross section.',
    },
    {
      type: 'list',
      items: [
        'Use the line width from the slicer profile, not only the engraved nozzle diameter.',
        'Keep layer height below the practical nozzle envelope unless the profile documents a different limit.',
        'Check the feature speed that creates the most flow, commonly infill or thick internal walls.',
        'Treat the 85% production speed as a margin target and validate higher values with a flow test.',
      ],
    },
    {
      type: 'tip',
      title: 'A catalogue limit is a starting point',
      html: '<p>Hotend and nozzle manufacturers report flow under specific filament, temperature, and test conditions. If you have no measured value, enter a conservative limit. Increase it only after a calibration shows stable extrusion and acceptable layer adhesion.</p>',
    },
    { type: 'title', text: 'How to Interpret the Flow Ribbon', level: 2 },
    {
      type: 'paragraph',
      html: 'The central scene starts at the nozzle and shows the requested track moving toward the entered flow limit. The dotted teal path marks the limit reference, while the solid track changes color as the load moves from room to print, to watch, to over limit. This gives you a visible reason to change a slicer value instead of treating the output as an isolated number.',
    },
    {
      type: 'table',
      headers: ['State', 'Load of entered limit', 'Action'],
      rows: [
        ['Room to print', '0 to 70%', 'Keep the profile or test another feature speed.'],
        ['Watch the margin', 'Above 70% to 100%', 'Validate the filament and keep a buffer for real toolpath variation.'],
        ['Flow over limit', 'Above 100%', 'Reduce speed, line width, or layer height before printing.'],
      ],
    },
    { type: 'title', text: 'What the Calculator Cannot Prove', level: 2 },
    {
      type: 'paragraph',
      html: 'The output does not measure heater power, pressure, cooling, extrusion force, acceleration, or the quality of a particular filament. A profile below the entered limit can still fail because the nozzle is partially blocked, the temperature is too low, the filament is wet, or the motion system reaches another constraint first.',
    },
    {
      type: 'paragraph',
      html: 'Use the result to choose a sensible starting point for a slicer maximum volumetric speed. Then inspect the sliced preview and run a flow calibration when the material, nozzle, temperature, or hotend changes. The strongest evidence is a repeatable print test that preserves surface quality and layer bonding at the chosen limit.',
    },
  ],
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
