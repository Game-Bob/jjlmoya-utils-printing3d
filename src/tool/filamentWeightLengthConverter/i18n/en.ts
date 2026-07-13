import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-weight-to-length-converter';
const title = 'Filament Weight to Length Converter: Accurate Material Estimation';
const description = 'Convert filament grams to meters and volume with material density, 1.75mm or 2.85mm diameter, and an instant spool sufficiency check.';

const faqData = [
  {
    question: 'How do you convert filament grams to meters?',
    answer: 'Divide mass by material density to get volume, convert that volume from cubic centimeters to cubic millimeters, then divide by the circular cross-section area of the filament diameter.',
  },
  {
    question: 'Why does filament material density matter?',
    answer: 'The same weight of PLA, PETG, ABS, TPU, or filled filament occupies a different volume because each polymer has a different density. Length is volume divided by filament area, so density directly changes the meter estimate.',
  },
  {
    question: 'Is 1.75mm filament always the same length per kilogram?',
    answer: 'No. Diameter tolerance, material density, additives, and moisture content all change the real length. The calculator gives a planning estimate based on nominal diameter and density.',
  },
  {
    question: 'Can I use the calculator for 2.85mm filament?',
    answer: 'Yes. Enter 2.85mm, or switch to imperial units and enter the equivalent diameter. The cross-section area updates immediately.',
  },
];

const howToData = [
  { name: 'Enter the filament mass', text: 'Type the amount of filament required by the slicer, the weight left on a spool, or any gram value you want to convert.' },
  { name: 'Choose the material', text: 'Select PLA, PETG, ABS, TPU, Nylon, PC, or a filled blend so the calculator can use the correct density.' },
  { name: 'Set the filament diameter', text: 'Use 1.75mm, 2.85mm, or a measured diameter if you want the length estimate to reflect a specific spool.' },
  { name: 'Check spool sufficiency', text: 'Optionally enter the remaining spool weight to see whether you have enough material and the exact surplus or shortfall.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial',
    inputsTitle: 'Material stock estimation',
    materialLabel: 'Material',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonate',
    materialWoodLabel: 'Wood-filled PLA',
    materialCarbonLabel: 'Carbon fiber blend',
    materialMetalLabel: 'Metal-filled PLA',
    densityLabel: 'Density',
    densityUnit: 'g/cm3',
    weightLabel: 'Filament weight',
    weightSliderLabel: 'Print weight slider',
    diameterLabel: 'Filament diameter',
    stockLabel: 'Remaining spool weight',
    stockPlaceholder: 'Optional stock check',
    spoolStateLabel: 'Spool state',
    spoolScaleLabel: 'Consumed / available mass',
    cutLineLabel: 'Runout stop line',
    resultLengthLabel: 'Estimated filament length',
    resultVolumeLabel: 'Polymer volume',
    resultAreaLabel: 'Section area',
    resultGramsMeterLabel: 'Linear mass',
    enoughLabel: 'Sufficient spool',
    shortLabel: 'Insufficient spool',
    noStockLabel: 'Stock check inactive',
    surplusLabel: 'Surplus',
    missingLabel: 'Missing',
    formulaLabel: 'Calculation path',
    formulaText: 'volume = mass / density -> length = volume / section area',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Why a density-based filament grams to meters calculator is more accurate', level: 2 },
    { type: 'paragraph', html: 'A filament weight to length converter is only as good as the material model behind it. A generic calculator often assumes that one kilogram of every filament occupies the same volume, but FFF filament is sold by mass while the extruder consumes a cylindrical strand by length. The bridge between those two measurements is <strong>density</strong>. PLA at about 1.24 g/cm3, PETG around 1.27 g/cm3, ABS near 1.04 g/cm3, and TPU around 1.21 g/cm3 do not convert to the same number of meters, even when the spool weight and diameter are identical.' },
    { type: 'paragraph', html: 'The calculation starts with mass. Dividing grams by density returns volume in cubic centimeters. That volume is then converted into cubic millimeters because filament diameter is normally measured in millimeters. The cross-section area is the area of a circle: pi multiplied by radius squared. Finally, volume divided by area returns a length in millimeters, which can be converted to meters or feet. The result is a practical estimate for checking whether the material reported by a slicer can be printed from the stock currently on a spool.' },
    { type: 'stats', columns: 4, items: [
      { value: '1.24', label: 'Typical PLA density in g/cm3' },
      { value: '2.405', label: 'Area in mm2 for nominal 1.75mm filament' },
      { value: '6.379', label: 'Area in mm2 for nominal 2.85mm filament' },
      { value: '3 inputs', label: 'Mass, density, and diameter define the conversion' },
    ] },
    { type: 'table', headers: ['Material', 'Planning density', 'Why the number matters'], rows: [
      ['PLA', '1.24 g/cm3', 'Common reference for desktop printing and a good baseline for prototypes.'],
      ['PETG', '1.27 g/cm3', 'Slightly denser than PLA, so the same gram amount produces less length.'],
      ['ABS', '1.04 g/cm3', 'Lower density means more length per gram than PLA at the same diameter.'],
      ['TPU', '1.21 g/cm3', 'Flexible filament is close to PLA but still worth modeling separately.'],
      ['Filled blends', 'Variable', 'Wood, carbon fiber, metal, and glass additives can move density far from the base polymer.'],
    ] },
    { type: 'title', text: 'The exact conversion formulas for filament stock estimation', level: 2 },
    { type: 'paragraph', html: 'The mathematical model is deliberately small because every term has a physical meaning. Section area is <code>pi x (diameter / 2)^2</code>. Volume is <code>weight / density</code>. Length is <code>volume x 1000 / section area</code> when volume is in cm3 and section area is in mm2; the result is millimeters, then divided by 1000 for meters. This is the same geometry used to reason about extrusion volume, maximum flow rate, and material usage in slicers.' },
    { type: 'diagnostic', variant: 'info', title: 'Diameter tolerance is the biggest everyday uncertainty', badge: 'Measurement note', html: 'A nominal 1.75mm spool may not be exactly 1.75mm across the entire roll. Because area depends on radius squared, a small diameter difference changes the calculated length and the real extrusion volume. For normal stock checks, nominal diameter is fine. For calibration, use calipers at several points and enter the average diameter.' },
    { type: 'list', items: [
      'Use grams when copying material usage from slicers such as PrusaSlicer, Cura, Bambu Studio, or OrcaSlicer.',
      'Use measured remaining spool weight after subtracting the empty spool tare if you want a reliable sufficiency check.',
      'Use density from the manufacturer data sheet when printing specialty composites.',
      'Use 2.85mm instead of 1.75mm when the machine feeds larger filament, because cross-section area is dramatically different.',
    ] },
    { type: 'tip', title: 'Do not include empty spool tare in remaining stock', html: 'A spool on a scale includes plastic or cardboard core weight. If the empty spool weighs 180g and the scale reads 430g, the usable filament estimate should be 250g. Entering gross spool weight makes the green sufficiency signal too optimistic.' },
    { type: 'title', text: '1.75mm vs 2.85mm filament length from the same weight', level: 2 },
    { type: 'paragraph', html: 'Diameter has a larger impact than many users expect. A 2.85mm strand has more than twice the cross-section area of a 1.75mm strand, so one kilogram becomes far fewer meters. This does not mean one diameter is more economical by itself; both can print the same part volume. It means the stock length number cannot be compared without diameter context. When a slicer reports grams, it is already normalizing material usage by mass; when a printer runout sensor or manual spool estimate thinks in meters, diameter becomes central.' },
    { type: 'comparative', columns: 2, items: [
      { title: '1.75mm filament', description: 'Longer strand length per kilogram and the dominant format for current desktop printers.', points: ['Useful for compact extruders', 'More meters on the same spool mass', 'Nominal area about 2.405 mm2'] },
      { title: '2.85mm filament', description: 'Shorter strand length per kilogram with a larger feed cross-section, often seen on older or professional machines.', points: ['Nominal area about 6.379 mm2', 'Less sensitive to feeder compression in some setups', 'Must not use 1.75mm assumptions'] },
    ] },
    { type: 'table', headers: ['Scenario', 'What changes', 'Planning consequence'], rows: [
      ['Same polymer, larger diameter', 'Area increases', 'Meters decrease for the same grams.'],
      ['Same diameter, lower density', 'Volume increases', 'Meters increase for the same grams.'],
      ['Same grams, filled filament', 'Density may increase', 'Meters may be shorter than expected.'],
      ['Wet filament', 'Measured mass increases slightly', 'The spool can look heavier without adding useful dry polymer.'],
    ] },
    { type: 'title', text: 'How to use the spool sufficiency check before starting a long print', level: 2 },
    { type: 'paragraph', html: 'The optional remaining stock field turns the converter into a go or no-go dashboard. Enter the mass required by the job as the filament weight, then enter the usable filament left on the current spool. The output compares grams directly and also converts the difference into meters or feet using the same material and diameter model. Green means the spool has enough stock; red means the job is short and shows the exact gap.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Why grams and meters are both shown', html: 'Grams are the purchasing and slicer language. Meters are the strand length language used by some firmware screens, runout estimates, and manual spool calculations. Showing both prevents a common planning mistake: having enough length under one density assumption but not enough mass under the actual material.' },
    { type: 'proscons', title: 'Stock validation methods', items: [
      { pro: 'Weighing the spool is quick and works even when the roll is partly used.', con: 'You must know or estimate the empty spool tare.' },
      { pro: 'Using slicer grams is usually consistent with material purchase weight.', con: 'Slicer estimates can change with purge volume, supports, brim, and modifier meshes.' },
      { pro: 'Length is intuitive when comparing filament paths and runout distances.', con: 'Length changes with density and diameter, so it is not universal across materials.' },
      { pro: 'Density-based conversion handles PLA, PETG, ABS, TPU, and composites better.', con: 'Manufacturer-specific additives can require a custom density value.' },
    ] },
    { type: 'title', text: 'Composite and specialty filaments need custom density values', level: 2 },
    { type: 'paragraph', html: 'Filled filaments are the main reason a serious material estimator should expose density instead of hiding it. Wood-filled PLA, carbon fiber nylon, metal-filled PLA, glow filament, glass-filled engineering materials, and ceramic-like blends can deviate sharply from the base polymer. A metal-filled filament may feel heavy because the density is high; the same 500g can represent much less volume and less length than standard PLA. For an expensive engineering print, that difference is not academic. It can decide whether the final ten percent of a print finishes or runs out.' },
    { type: 'glossary', items: [
      { term: 'Density', definition: 'Mass per unit volume, here expressed as grams per cubic centimeter.' },
      { term: 'Section area', definition: 'The circular area of the filament strand calculated from diameter.' },
      { term: 'Linear mass', definition: 'How many grams one meter or one foot of filament weighs for the selected material and diameter.' },
      { term: 'Tare weight', definition: 'The empty spool weight that must be subtracted from a scale reading.' },
      { term: 'Nominal diameter', definition: 'The advertised filament size, usually 1.75mm or 2.85mm, before measuring real tolerance.' },
    ] },
    { type: 'message', title: 'Manufacturer data wins', html: 'When the spool or technical data sheet lists density, use that value. Generic density presets are useful for planning, but supplier-specific formulas, pigment loads, and reinforcements can change the number.' },
    { type: 'title', text: 'Practical examples for 3D printing material estimation', level: 2 },
    { type: 'paragraph', html: 'Imagine a slicer reports that a PETG bracket needs 186g and you have a partly used spool. PETG at 1.27 g/cm3 with 1.75mm filament converts to roughly sixty-one meters. If the usable spool weight after tare is 220g, the dashboard reports a surplus of 34g and converts that margin into about eleven meters. That margin may be enough for a purge line and a small brim, but not for a large support mistake. The stock check encourages the user to add a realistic buffer before leaving a print unattended.' },
    { type: 'paragraph', html: 'Now compare ABS. Because ABS is less dense than PETG, the same 186g becomes more volume and therefore more length at the same 1.75mm diameter. That does not make the ABS part cheaper by itself, because price per kilogram and print settings also matter, but it explains why a remaining-meter estimate copied from one material can mislead another. For inventory control, mass is the stable starting point and density creates the bridge to length.' },
    { type: 'summary', title: 'Reliable material planning checklist', items: [
      'Subtract empty spool tare before entering remaining stock.',
      'Use the actual material density for filled, reinforced, or premium filaments.',
      'Check whether your machine uses 1.75mm or 2.85mm filament before trusting any length number.',
      'Keep a margin for purge, supports, brims, failed first layers, and slicer profile changes.',
      'Treat the green sufficiency state as a planning check, not a guarantee against jams or runout sensor faults.',
    ] },
    { type: 'title', text: 'SEO-focused answer: filament weight to length in one sentence', level: 2 },
    { type: 'paragraph', html: 'To convert 3D printer filament weight to length, divide the weight in grams by the material density to get volume, multiply by 1000 to convert cm3 to mm3, divide by <code>pi x (diameter / 2)^2</code>, and then divide by 1000 to read meters. This density-aware method is more accurate than a fixed grams-to-meters chart because PLA, PETG, ABS, TPU, Nylon, PC, and composite filaments all have different density values.' },
    { type: 'diagnostic', variant: 'success', title: 'When the estimate is most dependable', badge: 'Best practice', html: 'The result is strongest when the slicer weight is final, the remaining spool weight has tare removed, the diameter is measured or known, and the density comes from the manufacturer. Under those conditions, the converter becomes a practical preflight check for long prints, production batches, and expensive technical polymers.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
