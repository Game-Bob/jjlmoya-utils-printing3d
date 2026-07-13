import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'filament-dehydration-estimator';
const title = 'Filament Dehydration Estimator: Thermal Regeneration Guide';
const description = 'Model hygroscopic filament saturation with exponential adsorption kinetics, humidity exposure, polymer type, and drying chamber temperature.';

const faqData = [
  {
    question: 'How does the filament dehydration estimator calculate moisture saturation?',
    answer: 'It uses an exponential saturation model: maximum material absorption multiplied by one minus e to the negative kinetic coefficient times exposure time, then scaled by ambient relative humidity.',
  },
  {
    question: 'Why does Nylon need more drying than PLA?',
    answer: 'Nylon has a higher moisture capacity and faster adsorption coefficient than PLA, so it reaches a damaging water content sooner under the same humidity and exposure time.',
  },
  {
    question: 'Does a higher drying temperature always mean safer drying?',
    answer: 'No. Higher temperature accelerates dehydration, but each polymer has a safe chamber range. Exceeding it can soften filament, deform a spool, or change print behavior.',
  },
  {
    question: 'What does the hydrolysis risk indicator mean?',
    answer: 'It compares estimated water content against the material critical threshold and raises the warning when absorbed moisture is high enough to increase bubbling, stringing, weak layers, or polymer chain damage.',
  },
];

const howToData = [
  { name: 'Choose the polymer', text: 'Select PLA, PETG, ABS, ASA, TPU, Nylon, PC, or PVA so the model can load the correct equilibrium capacity and kinetic coefficient.' },
  { name: 'Enter storage humidity', text: 'Set the relative humidity where the spool was exposed, using the room, box, or workshop humidity measurement.' },
  { name: 'Set exposure time', text: 'Enter how many days the filament spent outside a sealed dry box or active dryer.' },
  { name: 'Select drying temperature', text: 'Use a chamber temperature inside the safe range for the polymer and spool material.' },
  { name: 'Start the drying cycle', text: 'Start the persisted drying timer, then let the chamber visualization drain gradually as the estimated moisture load is removed.' },
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

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial',
    materialLabel: 'Polymer',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Polycarbonate',
    materialPvaLabel: 'PVA support',
    humidityLabel: 'Relative humidity',
    exposureLabel: 'Exposure time',
    dryTempLabel: 'Drying chamber',
    spoolMassLabel: 'Spool mass',
    calculateLabel: 'Start drying cycle',
    pauseCycleLabel: 'Pause cycle',
    resumeCycleLabel: 'Resume cycle',
    resetCycleLabel: 'Reset cycle',
    saturationLabel: 'Moisture content',
    absorbedLabel: 'Water absorbed',
    dryingTimeLabel: 'Drying cycle',
    remainingTimeLabel: 'Time remaining',
    cycleProgressLabel: 'Cycle progress',
    hydrolysisLabel: 'Hydrolysis risk',
    stableLabel: 'Stable',
    watchLabel: 'Watch zone',
    criticalLabel: 'Critical',
    chamberReadyLabel: 'Chamber ready',
    chamberRunningLabel: 'Drying cycle running',
    chamberCompleteLabel: 'Moisture purged',
    curveLabel: 'Adsorption curve',
    kineticLabel: 'Saturation kinetics',
    equilibriumLabel: 'Exponential approach to equilibrium saturation',
    daysUnit: 'days',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Understanding adsorption kinetics: why Nylon does not behave like PLA', level: 2 },
    { type: 'paragraph', html: 'A serious <strong>3D filament drying time estimator</strong> cannot treat moisture as a straight line. Hygroscopic polymers do not absorb the same percentage of water every day forever. They approach an equilibrium state: fast at first, slower near saturation, and strongly dependent on ambient relative humidity. That is why a spool left at 70% RH for two days is not simply half as wet as a spool left for four days. The first part of the exposure often produces the steepest moisture gain, especially in Nylon, TPU, PVA, and other materials with polar groups that attract water molecules.' },
    { type: 'paragraph', html: 'This tool models moisture content with <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. <code>S_max</code> is the equilibrium absorption capacity of the polymer, <code>k</code> is the adsorption speed, <code>t</code> is exposure time, and <code>RH</code> scales the result to the storage environment. The output is not a laboratory certificate; it is an engineering planning model that explains why the same workshop can leave PLA printable while making Nylon hiss, bubble, string, and lose layer strength.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Planning equilibrium capacity for PLA' },
      { value: '3.2%', label: 'Planning equilibrium capacity for Nylon PA' },
      { value: '5.8%', label: 'Planning equilibrium capacity for PVA support filament' },
      { value: 'RH scaled', label: 'Ambient humidity multiplies the saturation curve' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Moisture symptoms are process symptoms', badge: 'Print clue', html: 'Popping sounds, steam bubbles, satin-to-rough surface changes, excessive stringing, weak walls, and cloudy extrudate are not random slicer problems. They often indicate that water is flashing into vapor in the melt zone or that hydrolysis has reduced polymer chain length before deposition.' },

    { type: 'title', text: 'How the exponential saturation model changes drying decisions', level: 2 },
    { type: 'paragraph', html: 'Linear calculators usually ask for a material and return a fixed number of hours. That works for a quick reminder, but it hides the real question: how much moisture has the filament actually absorbed? A spool stored in a sealed dry box at 15% RH for three weeks may need little or no regeneration. The same polymer sitting open in a humid garage for a weekend may need a full chamber cycle. Saturation modeling links the drying recommendation to exposure history instead of treating every spool as equally wet.' },
    { type: 'table', headers: ['Input', 'Physical meaning', 'Effect on the estimate'], rows: [
      ['Relative humidity', 'Water activity around the spool', 'Higher RH raises the equilibrium target and the final absorbed percentage.'],
      ['Exposure time', 'How long diffusion has been allowed to progress', 'Early days matter most; the curve slows as it approaches saturation.'],
      ['Material coefficient', 'How quickly a polymer approaches equilibrium', 'Nylon and PVA move faster than PLA or ASA.'],
      ['Drying temperature', 'Thermal energy available for desorption', 'Higher safe chamber temperature shortens the estimated cycle.'],
      ['Spool mass', 'Amount of polymer present', 'The percentage is material state; absorbed grams scale with spool mass.'],
    ] },
    { type: 'tip', title: 'Estimate the environment, not the weather app', html: 'Use the humidity inside the storage box, printer enclosure, cabinet, or workshop where the filament actually sat. A local weather report can differ sharply from the humidity beside a heated printer, a basement shelf, or a sealed container with desiccant.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Why the ring slows near saturation', html: 'The visual ring follows the same exponential behavior as the equation. It fills quickly when the polymer is dry because the moisture gradient is strong. Near equilibrium the gradient becomes weaker, so the apparent fill rate slows. That slowdown is the physics, not an animation trick.' },

    { type: 'title', text: 'Filament dehydration calculator ranges by material', level: 2 },
    { type: 'paragraph', html: 'Drying recommendations must respect the polymer and the spool. PLA can soften or creep when overheated. PETG can tolerate more heat but still benefits from conservative chamber control. Nylon normally requires a hotter and longer cycle because it absorbs more water and holds it more aggressively. PVA is extremely moisture sensitive and can become unprintable if left exposed. PC often prints better after drying even when it does not look obviously wet. The estimator uses these differences to turn a generic <strong>filament dehydration calculator</strong> into a material-specific guide.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Low to moderate hygroscopic response', description: 'PLA, ABS, and ASA generally absorb less water and more slowly, but still suffer quality loss after long humid exposure.', points: ['Shorter drying cycles', 'Lower equilibrium moisture', 'Symptoms may appear gradually'] },
      { title: 'High hygroscopic response', description: 'Nylon, TPU, PVA, and some PC grades require more active storage and more disciplined regeneration.', points: ['Higher absorbed water mass', 'Faster early saturation', 'Greater risk of bubbling and weak layers'] },
    ] },
    { type: 'table', headers: ['Material', 'Typical chamber target', 'Planning note'], rows: [
      ['PLA', '40-55 C', 'Avoid excessive heat because PLA and some spool cores can deform.'],
      ['PETG', '55-70 C', 'Often improves surface consistency and stringing after several hours.'],
      ['ABS / ASA', '65-85 C', 'Lower absorption than Nylon but benefits from dry storage.'],
      ['TPU', '45-60 C', 'Flexible grades can absorb enough moisture to foam or string.'],
      ['Nylon PA', '70-90 C', 'Usually needs active drying before critical functional prints.'],
      ['PVA', '40-55 C', 'Moisture-sensitive support material; store sealed immediately.'],
    ] },
    { type: 'proscons', title: 'Fixed drying chart vs saturation monitor', items: [
      { pro: 'A fixed chart is fast when you only need a default cycle.', con: 'It cannot distinguish a dry-box spool from a humid open-air spool.' },
      { pro: 'Saturation modeling explains why early exposure can be severe.', con: 'It still depends on approximate material coefficients and storage history.' },
      { pro: 'A drying temperature input reflects the actual chamber setup.', con: 'It does not replace safe temperature limits from the filament manufacturer.' },
      { pro: 'Absorbed grams make the result tangible for full and partial spools.', con: 'Spool mass does not reveal whether the outer windings are wetter than the core.' },
    ] },

    { type: 'title', text: 'Hydrolysis risk: when wet filament becomes damaged filament', level: 2 },
    { type: 'paragraph', html: 'Moisture is not only a print quality issue. At extrusion temperatures, absorbed water can contribute to hydrolysis in susceptible polymers. Hydrolysis breaks molecular chains, reducing toughness, elongation, and reliability. The effect is especially important for engineering materials used in brackets, fixtures, gears, ducts, and parts that carry load. A wet spool can still extrude, but the part may fail earlier because the polymer was chemically degraded during processing.' },
    { type: 'glossary', items: [
      { term: 'Hygroscopy', definition: 'The tendency of a material to attract and hold water from the surrounding air.' },
      { term: 'Equilibrium moisture', definition: 'The moisture content a polymer approaches after enough time at a given humidity.' },
      { term: 'Adsorption coefficient', definition: 'A simplified kinetic value that controls how fast the saturation curve rises.' },
      { term: 'Desorption', definition: 'The reverse process: water leaving the polymer during heated drying.' },
      { term: 'Hydrolysis', definition: 'Chemical chain scission caused by water under heat, relevant to several engineering polymers.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'A dry surface does not prove a dry core', badge: 'Diffusion limit', html: 'Filament dries from the outside inward. A short hot blast can improve the surface while the inner windings of a dense spool remain humid. Large spools, cardboard sides, and tightly wound filament can all slow regeneration.' },
    { type: 'message', title: 'The visual rule', html: 'When the ring turns from clean blue to a muted gray-blue state, the tool is marking a transition from normal moisture management into a hydrolysis watch zone. That is the point where drying becomes part of quality control, not just cosmetic cleanup.' },

    { type: 'title', text: 'Building a reliable filament drying workflow', level: 2 },
    { type: 'paragraph', html: 'A useful <strong>hygroscopic material saturation guide</strong> combines prediction with routine. Measure the storage humidity, label spools with opening dates, keep sensitive polymers in sealed boxes, recharge desiccant before it saturates, and dry before prints where mechanical performance matters. The best workflow prevents repeated wet-dry cycles because every unnecessary heat cycle can age material, warp spools, or waste production time.' },
    { type: 'list', items: [
      'Dry Nylon, PVA, TPU, and PC before long prints when storage history is uncertain.',
      'Keep PLA and PETG sealed too; lower absorption does not mean zero absorption.',
      'Use an independent thermometer inside the dryer because display temperatures can be optimistic.',
      'Let filament feed from a dry box during multi-hour prints in humid rooms.',
      'Replace or recharge desiccant when indicator beads or humidity sensors show the box climbing.',
      'Avoid drying above the glass transition or softening range of the filament and spool.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'The drying chamber is a regeneration system', html: 'The chamber must provide stable heat, airflow, and a path for moisture to leave. Heating a sealed box without venting or desiccant can simply move water from the filament into the chamber air and back again.' },
    { type: 'summary', title: 'Practical interpretation checklist', items: [
      'Moisture percentage describes material state; absorbed grams describe the water load in the spool.',
      'High humidity and fast materials create steep early saturation.',
      'Drying time should rise with saturation and fall with safe chamber temperature.',
      'Hydrolysis risk matters most for high-temperature extrusion and functional parts.',
      'The manufacturer data sheet overrides any generic drying estimate.',
    ] },

    { type: 'title', text: 'SEO answer: how long should I dry 3D printer filament?', level: 2 },
    { type: 'paragraph', html: 'The correct drying time depends on material, humidity exposure, spool mass, and chamber temperature. PLA might need only a few hours after moderate exposure, PETG and TPU often need longer, and Nylon or PVA can require a substantial regeneration cycle after humid storage. A strong <strong>moisture content 3D printing</strong> workflow estimates absorbed water first, then selects a safe dryer temperature and enough time for desorption. That is more reliable than applying one universal number to every polymer.' },
    { type: 'diagnostic', variant: 'success', title: 'Best use case for this monitor', badge: 'Engineering preflight', html: 'Use the estimator before critical prints, production batches, expensive engineering polymers, or any job where a failed surface, brittle layer, or under-strength part would cost more than a drying cycle.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
