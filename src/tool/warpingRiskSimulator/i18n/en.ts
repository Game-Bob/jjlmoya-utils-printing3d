import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'warping-risk-simulator';
const title = 'Warping Risk Simulator for 3D Printing';
const description = 'Estimate first-layer lift and warping risk from material shrinkage, footprint area, longest diagonal, bed temperature, room temperature, and enclosure conditions.';

const faqData = [
  {
    question: 'Why does the longest diagonal affect warping more than footprint area?',
    answer: 'The longest diagonal represents the largest continuous contraction path. A long part can accumulate enough linear shrinkage to lift corners even if the total contact area seems large.',
  },
  {
    question: 'Is this simulator a guarantee that my print will not warp?',
    answer: 'No. It is a risk estimate. Moist filament, dirty build plates, first-layer height, drafts, part geometry, and slicer cooling choices can change the result.',
  },
  {
    question: 'Which materials most need an enclosure?',
    answer: 'ABS, ASA, Nylon, and PC are the most enclosure-sensitive in this model because they combine higher processing temperatures, stronger shrinkage, and larger cooling stress.',
  },
  {
    question: 'How is brim width estimated?',
    answer: 'The simulator starts from five percent of the longest diagonal and scales it by calculated risk, then clamps the result to practical slicer values.',
  },
];

const howToData = [
  { name: 'Choose the material', text: 'Select PLA, PETG, ABS, ASA, Nylon, PC, or TPU so the simulator can apply a shrinkage class.' },
  { name: 'Enter footprint and diagonal', text: 'Use the surface area touching the bed and the longest corner-to-corner distance of the part.' },
  { name: 'Set the thermal environment', text: 'Enter bed and room temperature, then indicate whether the printer has a closed chamber.' },
  { name: 'Copy slicer settings', text: 'Use the suggested brim, adhesion, cooling, and chamber settings as a starting profile.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unit system',
    unitMetric: 'Metric',
    unitImperial: 'Imperial',
    unitCelsius: 'C',
    unitFahrenheit: 'F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    materialLabels: {
      PLA: 'PLA',
      PETG: 'PETG',
      ABS: 'ABS',
      ASA: 'ASA',
      Nylon: 'Nylon',
      PC: 'PC',
      TPU: 'TPU',
    },
    material: 'Material',
    footprintArea: 'Footprint area',
    footprintHelp: 'Area actually touching the build plate, not the total surface of the model.',
    diagonal: 'Longest diagonal',
    diagonalHelp: 'Longest corner-to-corner span of the first layer. This is the main thermal tension vector.',
    bedTemperature: 'Bed temperature',
    bedTemperatureWarning: 'Temperature warning',
    ambientTemperature: 'Room temperature',
    chamber: 'Enclosed chamber',
    chamberOn: 'Closed or actively shielded',
    chamberOff: 'Open printer',
    riskLow: 'Low',
    riskMedium: 'Medium',
    riskHigh: 'High',
    riskCritical: 'Critical',
    riskIndex: 'Risk index',
    thermalIndex: 'Thermal tension index',
    deltaT: 'Delta T',
    brimRecommendation: 'Brim recommendation',
    adhesionDiagnosis: 'Adhesion diagnosis',
    adhesionStrength: 'Adhesive strength ladder',
    criticalWarnings: 'Critical warnings',
    whyDiagonalMatters: 'Why the diagonal matters',
    recommendedSettings: 'Recommended slicer setup',
    copySettings: 'Copy settings',
    copied: 'Copied',
    simulatorNotice: 'This is a risk estimate, not a success guarantee. Filament moisture, bed contamination, Z offset, drafts, and cooling overrides remain external variables.',
    warnings: {
      openTechnicalMaterial: '{material} without an enclosed chamber is a severe warping condition.',
      bedTemperatureHigh: '{material} bed temperature is above the recommended {min}-{max} {unit} range. Expect softening, elephant foot, or adhesion artifacts.',
      bedTemperatureLow: '{material} bed temperature is below the recommended {min}-{max} {unit} range. First-layer grip may be too weak for this geometry.',
      narrowFootprint: 'The footprint is narrow compared with the diagonal, so corner lift can accumulate quickly.',
      highDeltaT: 'The bed to room temperature gap is very high; control airflow and cool-down rate.',
    },
    diagnosis: {
      critical: 'Brim is mandatory. Use a dedicated adhesive surface and avoid printing this material open-air.',
      highEnclosed: 'Wide brim and adhesive are strongly recommended.',
      highOpen: 'Use brim, adhesive, and an enclosure before starting.',
      mediumEasyMaterial: 'Use a clean PEI surface; brim is optional for sharp corners.',
      medium: 'Use brim or mouse ears on corners and verify bed adhesion.',
      low: 'Safe under normal first-layer conditions.',
    },
    adhesionOptions: {
      low: ['Clean PEI or textured sheet: normal grip, easiest removal.'],
      medium: ['Glue stick or PVA release layer: light extra grip and safer PETG release.', 'Mouse ears: localized grip for corners without a full brim.'],
      high: ['Wide brim plus glue stick: broad mechanical support with moderate cleanup.', 'Magigoo or similar adhesive: stronger grip for ABS, ASA, PETG, and Nylon variants.'],
      criticalDefault: ['Full-width brim: maximum first-layer footprint.', 'High-strength adhesive: use PEI plus a high-strength adhesive.', 'Enclosure: required support for adhesive to work consistently.'],
      criticalTechnical: ['Full-width brim: maximum first-layer footprint.', 'High-strength adhesive: use a material-specific adhesive matched to Nylon or PC.', 'Enclosure: required support for adhesive to work consistently.'],
    },
    slicerSettings: {
      brimWidth: 'Brim width: {value}',
      bedAdhesion: 'Bed adhesion: {value}',
      lowAdhesion: 'clean PEI or textured sheet',
      highAdhesion: 'PEI plus glue stick, Magigoo, or material-specific adhesive',
      cooling: 'Cooling: {value}',
      normalCooling: 'Normal part cooling after layer 3',
      technicalCooling: 'Part cooling off for the first 5-8 layers',
      enclosedChamber: 'Keep chamber closed until the part cools below glass transition range',
      openChamber: 'Shield the printer from drafts and room airflow',
      skirtEnough: '0 mm, skirt is enough',
    },
    diagonalExplanation: 'The longest diagonal behaves like the main tension vector: as the part cools, contraction accumulates along that span and loads the corners even when the footprint area looks generous.',
  },
  seo: [
    { type: 'title', text: 'How to estimate warping risk before slicing a 3D print', level: 2 },
    {
      type: 'paragraph',
      html: 'Warping is not only a material problem and it is not only a bed adhesion problem. It appears when a printed layer cools, contracts, and creates enough internal stress to overcome the grip of the first layer. A small ABS bracket can fail because the polymer shrinks strongly; a large PLA sign can fail because the diagonal is long enough to accumulate contraction across a wide span. The useful question is therefore not simply <strong>will this material warp?</strong> but <strong>does this geometry and thermal environment create more pulling force than the build plate can resist?</strong>',
    },
    {
      type: 'paragraph',
      html: 'This simulator uses a heuristic Thermal Tension Index: <strong>material shrinkage factor times longest diagonal times bed-to-room temperature difference, divided by footprint area</strong>. The formula is intentionally practical. It does not pretend to be finite element analysis, but it combines the variables that operators can measure before printing: material family, contact area, longest linear span, bed temperature, ambient temperature, and whether the printer is enclosed.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Use the result as a preventive signal',
      badge: 'Estimate',
      html: 'A low score means the print is unlikely to lift if the first layer is clean and well tuned. A high or critical score means the slicer profile should be changed before printing: wider brim, adhesive, less cooling, draft protection, or a different material. The simulator cannot see wet filament, oily PEI, a nozzle too far from the bed, or a part that has tiny corner contact patches.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: 'starting brim width as a fraction of the longest diagonal', icon: 'mdi:ruler' },
        { value: '1.85x', label: 'severe open-chamber multiplier for ABS, ASA, Nylon, and PC', icon: 'mdi:home-alert' },
        { value: '0-100', label: 'risk scale mapped from the Thermal Tension Index', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: 'Why the longest diagonal can be more dangerous than area', level: 2 },
    {
      type: 'paragraph',
      html: 'Footprint area tells you how much surface is available for adhesion. The diagonal tells you how far thermal contraction can accumulate before it reaches a corner or thin end. Two parts can have the same area and behave very differently: a compact square pad has short contraction paths in every direction, while a long narrow strip concentrates shrinkage along a single line and tries to peel up at the ends.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Compact footprint',
          description: 'A square or round base distributes contraction through many short paths. Corners are closer to the center, so the lever arm for lifting is smaller.',
          icon: 'mdi:crop-square',
          points: ['Better load sharing', 'Lower corner leverage', 'Brim often optional on easy materials'],
        },
        {
          title: 'Long diagonal footprint',
          description: 'A long rectangle, frame, blade, enclosure panel, or rail allows shrinkage to build along one dominant direction. Ends and corners receive the highest peel force.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['Higher accumulated tension', 'Corners lift first', 'Brim or mouse ears often needed'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'How to measure the diagonal quickly',
      html: 'In the slicer preview, look at the first layer from above and measure the longest corner-to-corner distance of the part touching the bed. For a rectangular footprint, use the diagonal of the rectangle, not only the X or Y length. For an irregular part, use the longest straight span between two outer points.',
    },
    {
      type: 'table',
      headers: ['Geometry pattern', 'Typical symptom', 'Preventive action'],
      rows: [
        ['Long thin rail', 'Ends lift while the middle remains attached', 'Use brim or mouse ears at both ends'],
        ['Large flat panel', 'Corners curl upward gradually', 'Use enclosure, slower cooling, and adhesive'],
        ['Small tall part', 'Base stays attached but tower wobbles', 'Warping is not the main risk; improve stability'],
        ['Open frame', 'Inside corners pull inward', 'Add brim, increase first-layer width, reduce fan'],
      ],
    },
    { type: 'title', text: 'Material shrinkage classes used by the simulator', level: 2 },
    {
      type: 'paragraph',
      html: 'Different thermoplastics contract by different amounts when cooling from extrusion temperature to room temperature. PLA and TPU are generally forgiving because they print at lower temperatures and create less cooling stress. PETG sits in the middle: it adheres strongly but can still pull on sharp corners. ABS, ASA, Nylon, and PC are treated as high-risk technical materials because they combine higher extrusion temperatures, stronger shrinkage, and a stronger need for a warm, stable chamber.',
    },
    {
      type: 'table',
      headers: ['Material', 'Shrinkage class', 'Common bed strategy', 'Chamber sensitivity'],
      rows: [
        ['PLA', 'Low', 'Clean PEI, moderate bed', 'Low'],
        ['TPU', 'Low', 'Clean sheet, avoid over-squish', 'Low'],
        ['PETG', 'Medium', 'Textured PEI or release layer', 'Medium'],
        ['ABS', 'High', 'PEI plus adhesive or ABS slurry where appropriate', 'Very high'],
        ['ASA', 'High', 'PEI plus adhesive, controlled cooling', 'Very high'],
        ['Nylon', 'High', 'Material-specific adhesive, dry filament', 'Very high'],
        ['PC', 'High', 'High temperature bed and adhesive', 'Very high'],
      ],
    },
    {
      type: 'proscons',
      title: 'Changing material instead of fighting warping',
      items: [
        { pro: 'Switching from ABS to ASA can improve outdoor durability while keeping similar thermal behavior.', con: 'ASA still needs enclosure discipline and can warp on long parts.' },
        { pro: 'Switching from ABS to PETG reduces shrinkage and is often enough for brackets and housings.', con: 'PETG has lower heat resistance and different stiffness than ABS or PC.' },
        { pro: 'Fiber-filled Nylon can reduce some shrinkage paths and improve stiffness.', con: 'It requires drying, abrasion-resistant nozzles, and strong adhesion control.' },
      ],
    },
    { type: 'title', text: 'Delta T: why bed temperature and room temperature both matter', level: 2 },
    {
      type: 'paragraph',
      html: 'The simulator uses <strong>Delta T</strong> as the bed temperature minus room temperature. This is not the same as nozzle temperature, but it is a useful proxy for the thermal gradient that the bottom of the part experiences. A hot bed reduces early contraction at the interface, but a very cold room or strong airflow can still pull heat out of the upper layers and create a stress gradient between the anchored base and the cooling body of the part.',
    },
    {
      type: 'paragraph',
      html: 'For PLA, a moderate Delta T may be harmless because the material contracts less aggressively. For ABS, ASA, Nylon, and PC, the same geometry at the same bed temperature can fail if the printer is open to drafts. That is why the calculation applies a severe multiplier when those technical materials are printed without an enclosed chamber.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Open printer with ABS, ASA, Nylon, or PC',
      badge: 'Critical condition',
      html: 'If the chamber is open, the print is exposed to local cooling, door movement, HVAC airflow, and rapid layer temperature changes. The first layer may look perfect for the first twenty minutes and still lift later as the part stores more shrinkage stress.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        'A warmer chamber reduces the temperature difference between new layers and older layers.',
        'A closed chamber also slows down cooling after the print, which lowers sudden corner peel.',
        'Draft shields help, but they are not equivalent to a stable heated chamber for PC or Nylon.',
        'Increasing bed temperature alone can improve grip, but it can also increase elephant foot on soft materials.',
      ],
    },
    { type: 'title', text: 'How the Thermal Tension Index is interpreted', level: 2 },
    {
      type: 'paragraph',
      html: 'The Thermal Tension Index is a relative score, not a measured force in newtons. It rises when shrinkage factor, diagonal, or Delta T rises. It falls when footprint area increases because more contact area can distribute the same pulling load. The value is then mapped to a 0-100 risk percentage so that different print setups can be compared quickly.',
    },
    {
      type: 'table',
      headers: ['Risk range', 'Meaning', 'Recommended response'],
      rows: [
        ['0-31%', 'Low', 'Clean the bed, verify first layer, no special adhesion needed for most shapes'],
        ['32-57%', 'Medium', 'Use brim on sharp corners, reduce early fan, inspect footprint contact'],
        ['58-81%', 'High', 'Use wide brim, adhesive, enclosure if material needs it, avoid drafts'],
        ['82-100%', 'Critical', 'Treat as likely to warp unless geometry, material, or environment changes'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: 'Why divide by footprint area?',
      html: 'A larger footprint gives the bed more opportunity to resist peeling force. The model rewards parts with broad, continuous contact and penalizes narrow bases, small feet, and long parts that have only a thin strip touching the surface.',
    },
    { type: 'title', text: 'Brim width, mouse ears, and adhesive choices', level: 2 },
    {
      type: 'paragraph',
      html: 'The brim recommendation starts from <strong>Diagonal x 0.05</strong>. A 180 mm diagonal therefore starts near 9 mm before risk scaling. In practice, brim should not be chosen by material alone. A short PLA cube may need no brim, while a long PLA sword, sign, or rail can benefit from a modest brim because the diagonal is the dominant tension path.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Brim', description: 'Best all-purpose choice for increasing first-layer contact around the entire part.', icon: 'mdi:border-outside', points: ['Easy to remove on PLA', 'Very useful on ABS corners'] },
        { title: 'Mouse ears', description: 'Local circular pads placed at corners or thin ends where lifting starts.', icon: 'mdi:circle-outline', points: ['Less cleanup', 'Good for rails and frames'] },
        { title: 'Adhesive', description: 'Improves chemical or mechanical grip between polymer and build surface.', icon: 'mdi:water-plus', points: ['Useful for Nylon and PC', 'Surface-specific choice matters'] },
      ],
    },
    {
      type: 'tip',
      title: 'Do not make brim the only fix',
      html: 'If the simulator reports critical risk, a wider brim may delay failure but not remove the underlying stress. Combine brim with enclosure, slower early cooling, a cleaner bed, and a geometry change such as rounded corners or split parts.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Warping', definition: 'Upward deformation caused by cooling contraction overpowering bed adhesion.' },
        { term: 'Footprint area', definition: 'The area of the model that touches the build plate on the first layer.' },
        { term: 'Longest diagonal', definition: 'The longest straight span across the first-layer contact shape.' },
        { term: 'Delta T', definition: 'The temperature difference between the bed and the surrounding room air.' },
        { term: 'Brim', definition: 'Extra first-layer perimeter loops printed around the part to increase adhesion.' },
      ],
    },
    { type: 'title', text: 'Practical slicer settings for high-risk parts', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        'Increase first-layer line width to create more contact, but avoid excessive Z squish that causes ridges.',
        'Use a slower first layer so the polymer bonds to the bed before later layers pull on it.',
        'Disable or reduce part cooling for ABS, ASA, Nylon, and PC during the first layers.',
        'Add a brim wide enough to reach beyond sharp corners and narrow ends.',
        'Avoid placing large technical-material parts near chamber doors, vents, or cold side panels.',
      ],
    },
    {
      type: 'message',
      title: 'Geometry changes that reduce risk',
      ariaLabel: 'Geometry mitigation ideas',
      html: 'Round sharp corners, split very long panels into shorter sections, add temporary tabs to thin ends, orient the part so the longest stress path is shorter, or add sacrificial pads that can be trimmed after printing. These changes often work better than simply raising the bed temperature.',
    },
    {
      type: 'summary',
      title: 'Fast interpretation checklist',
      items: [
        'High shrinkage material plus open chamber is the strongest warning sign.',
        'Long diagonal plus small footprint means corners and ends deserve brim or mouse ears.',
        'High bed temperature does not cancel a cold room or drafty environment.',
        'The result is a planning estimate; first-layer calibration and filament condition still decide the final print.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
