import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'technical-resin-uv-curing-calculator';
const title = 'Technical Resin UV Curing Time Calculator';
const description = 'Estimate safe SLA resin post-curing time from resin type, maximum wall thickness, wash and cure station power, and UV wavelength.';

const faqData = [
  { question: 'How long should I cure SLA resin prints?', answer: 'The correct time depends on resin type, wall thickness, curing station power, wavelength, and exposure geometry. Small standard resin parts may need only a few minutes, while thick tough resin parts need longer but should still respect a safety cap.' },
  { question: 'Can too much UV curing make resin brittle?', answer: 'Yes. Excess UV exposure can make many photopolymer resin parts brittle, yellow, or less flexible. The calculator caps the timer when the raw estimate enters a degradation region.' },
  { question: 'Should resin prints be dry before curing?', answer: 'Yes. Resin prints should be clean and completely dry before UV curing. Alcohol residue can cause whitening, trapped contamination, and inconsistent post-cure results.' },
  { question: 'Is 385 nm or 405 nm better for resin curing?', answer: 'Neither is universally better. The best wavelength is the one matched to the resin photoinitiator system and the curing station. Many desktop resins are optimized around 405 nm, while some technical resins respond well to 385 nm.' },
];

const howToData = [
  { name: 'Select the resin preset', text: 'Choose standard, flexible, rigid/tough, castable, or burnout according to the resin bottle or intended use.' },
  { name: 'Enter the thickest wall', text: 'Measure the maximum wall thickness that must receive UV post-cure.' },
  { name: 'Enter station parameters', text: 'Set curing station power and wavelength to match your UV chamber.' },
  { name: 'Follow the safety checklist', text: 'Dry the part, expose every face, remove shadowing supports, and respect the maximum safe timer value.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Technical resin UV curing inputs',
    resultsAriaLabel: 'Recommended resin post-curing parameters',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    resinGroupLabel: 'Resin preset',
    stationGroupLabel: 'Curing station',
    preparationLabel: 'Before curing',
    resinTypeLabel: 'Resin type',
    standardLabel: 'Standard',
    flexibleLabel: 'Flexible',
    toughLabel: 'Rigid / Tough',
    castableLabel: 'Castable',
    burnoutLabel: 'Burnout',
    wallThicknessLabel: 'Maximum wall thickness',
    wallThicknessHelp: 'Use the thickest solid or shell wall that UV light must cure through.',
    stationPowerLabel: 'Station power',
    stationPowerHelp: 'Nominal electrical power of the curing station or UV lamp array.',
    wavelengthLabel: 'Wavelength',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'The part must be clean and perfectly dry before UV exposure. Do not cure parts that still carry alcohol.',
    dryCheckLabel: 'Is the part totally dry and free from alcohol residue?',
    exposureCheckLabel: 'Is the part positioned so light reaches every face?',
    supportsCheckLabel: 'Is the part free from supports that can cast shadows?',
    degradationWarning: 'Excess curing time makes the part brittle and yellow. Respect the technical limits.',
    recommendedTimeLabel: 'Timer setting',
    temperatureLabel: 'Curing temperature',
    noTemperatureLabel: 'Ambient',
    ambientTemperatureNoteMetric: 'Cure at room temperature (18-25 °C). No heated chamber is required for this preset.',
    ambientTemperatureNoteImperial: 'Cure at room temperature (64-77 °F). No heated chamber is required for this preset.',
    distanceLabel: 'Light distance',
    maxSafeLabel: 'Safety cap',
    doseIndexLabel: 'UV dose index',
    safetySafeLabel: 'Inside the safe window',
    safetyCautionLabel: 'Close to the upper limit',
    safetyLimitLabel: 'Safety cap applied',
    limitMessage: 'The requested exposure would exceed the resin safety cap. Use the capped timer value and rotate the part between cycles if faces are shaded.',
    cautionMessage: 'The recommendation is technically usable but close to the degradation region. Keep the part dry, rotate it, and avoid adding extra minutes by habit.',
    safeMessage: 'The recommendation is within the normal post-curing window for this resin profile and station power.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: [
    { type: 'title', text: 'How SLA Resin Post-Curing Time Is Chosen', level: 2 },
    {
      type: 'paragraph',
      html: 'Post-curing is the controlled UV exposure applied after a resin print has been washed. The goal is not simply to make the surface feel dry. A correctly cured SLA or MSLA part reaches a better conversion of reactive groups inside the polymer network, which improves stiffness, heat resistance, dimensional stability, and handling safety. Under-curing leaves surfaces tacky, weak, or chemically active. Over-curing can push the material toward embrittlement, visible yellowing, and loss of elongation. A useful <strong>SLA resin UV curing time estimator</strong> therefore needs to balance resin chemistry, wall thickness, light intensity, wavelength, temperature, and exposure geometry.',
    },
    {
      type: 'paragraph',
      html: 'The calculator uses resin presets because different resin families do not respond identically. A standard desktop resin usually cures faster than a flexible urethane-like formulation. Tough or rigid engineering resin often needs longer exposure and sometimes mild heat to approach its datasheet properties. Castable and burnout resins are sensitive because excessive cure can increase brittleness or ash-related process problems. The result is a recommended timer value, a safe upper cap, an optional temperature target, and a practical light distance.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '385/405 nm', label: 'common desktop resin cure wavelengths' },
        { value: '1-22 min', label: 'typical capped calculator output' },
        { value: '0.4-12 mm', label: 'wall thickness model range' },
        { value: '6-120 W', label: 'curing station power range' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Never cure wet resin prints',
      html: 'Alcohol left on the part can trap uncured residue, whiten surfaces, contaminate the curing chamber, and distort the relationship between UV dose and final material behavior. Wash first, let the part dry completely, then cure.',
    },
    { type: 'title', text: 'Why Wall Thickness Changes UV Curing Time', level: 2 },
    {
      type: 'paragraph',
      html: 'A thin miniature shell and a thick functional bracket can use the same resin but need different post-curing behavior. UV light is absorbed and scattered by pigments, fillers, photoinitiators, and the polymer itself. The surface receives the strongest dose, while deeper material receives less energy. This is why the calculator asks for <strong>maximum wall thickness</strong> rather than total part height or total mass. The thickest optically relevant section is the part most likely to remain under-cured when the outside already looks finished.',
    },
    {
      type: 'paragraph',
      html: 'The increase is proportional but not perfectly linear. Doubling wall thickness does not always require exactly double the timer value because curing also continues from multiple faces when the part is rotated and because many resin prints are hollow. The model uses a resin-specific exponent: tough resins scale more aggressively with thickness, while castable profiles stay under a tighter safety cap. For very thick solid parts, the better solution is often hollowing, drainage, rotation, and staged curing rather than a single long exposure.',
    },
    {
      type: 'table',
      headers: ['Geometry condition', 'Curing implication', 'Practical action'],
      rows: [
        ['Thin cosmetic shell', 'Low internal curing demand', 'Use the calculated time without adding extra minutes.'],
        ['Thick solid boss or lug', 'Higher risk of under-cured core', 'Enter the local maximum wall thickness, not average shell thickness.'],
        ['Hollow part with drain holes', 'Light reaches outside; inside may remain shaded', 'Cure outside first, then expose the interior if geometry allows.'],
        ['Opaque or dark resin', 'Lower penetration and more scattering', 'Stay near manufacturer guidance and rotate more often.'],
      ],
    },
    {
      type: 'tip',
      title: 'Measure the thickest structural wall',
      html: 'For a hollow resin print, use the thickest shell or reinforcement rib. For a solid engineering part, use the thickest solid section that must reach final mechanical properties.',
    },
    { type: 'title', text: 'Station Power, Distance, and UV Dose', level: 2 },
    {
      type: 'paragraph',
      html: 'A wash and cure station rated at 40 W does not deliver 40 W of useful UV energy into every square centimeter of the part. The nominal power includes electrical and optical losses, LED arrangement, chamber reflectivity, turntable coverage, and distance from the light source. Still, power is a useful estimator: a high-power station usually needs a shorter timer than a weak nail-lamp style curing box. The calculator applies an inverse power factor so the timer decreases as station power rises.',
    },
    {
      type: 'paragraph',
      html: 'Distance matters because irradiance falls as the part moves away from the LEDs, and because very close placement can create hotspots. A part placed too close to one LED bank can cure one face aggressively while corners or recessed surfaces stay soft. A part placed too far away may need longer exposure, but adding time alone can over-cure the already illuminated faces. This is why the output includes a recommended distance in centimeters or inches. It is a geometry control, not merely a convenience value.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Too close',
          description: 'High local intensity creates uneven dose and surface stress.',
          points: ['Yellowing on exposed faces', 'Brittle thin features', 'Shadowed cavities remain under-cured'],
        },
        {
          title: 'Balanced',
          description: 'Moderate distance lets the chamber and turntable distribute UV more evenly.',
          highlight: true,
          points: ['Cleaner mechanical result', 'Less hotspot risk', 'Better repeatability'],
        },
        {
          title: 'Too far',
          description: 'Low irradiance encourages users to compensate with excessive time.',
          points: ['Long cycles', 'Inconsistent cure', 'False confidence from dry surfaces'],
        },
      ],
    },
    {
      type: 'message',
      title: 'Rotate when the chamber does not expose every face',
      html: 'If a part has deep recesses, undercuts, or broad flat sides, split the exposure into shorter cycles and rotate the part. Uniform dose is usually better than one long static cure.',
    },
    { type: 'title', text: '385 nm Versus 405 nm Resin Curing', level: 2 },
    {
      type: 'paragraph',
      html: 'Most consumer MSLA printers and curing stations use 405 nm LEDs because that wavelength matches many desktop photoinitiator systems and is efficient for affordable LED arrays. Some technical resins also respond strongly at 385 nm, a shorter wavelength closer to the UV-A range. The difference is not automatically better or worse. A resin formulated around 405 nm may need more time under 385 nm if the spectrum is not matched; another resin may cure efficiently at 385 nm. The calculator treats wavelength as a resin-dependent multiplier.',
    },
    {
      type: 'paragraph',
      html: 'The important user action is consistency. If a resin manufacturer specifies a post-curing schedule for a particular curing unit, wavelength, and temperature, use that schedule as the reference. Use this calculator when the resin is generic, when the station power differs from the reference machine, or when the print geometry is thicker than a simple calibration coupon. Do not mix a 385 nm industrial schedule with a 405 nm desktop station without adjusting exposure assumptions.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Photoinitiator', definition: 'A resin component that absorbs light and starts polymerization reactions.' },
        { term: 'UV dose', definition: 'The accumulated light energy received by the part during curing, influenced by irradiance and time.' },
        { term: 'Post-cure', definition: 'UV and sometimes heat treatment after washing that advances material properties beyond the as-printed state.' },
        { term: 'Over-cure', definition: 'Excess exposure that can make a resin part brittle, yellow, warped, or less impact resistant.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Dry to touch is not the same as fully cured',
      html: 'A resin surface can stop feeling sticky before the internal network reaches the intended mechanical behavior. Use geometry, resin type, and station power instead of surface feel alone.',
    },
    { type: 'title', text: 'Resin Presets and Mechanical Risk', level: 2 },
    {
      type: 'paragraph',
      html: 'Standard resins are usually optimized for ease of printing and fast post-processing. They are the most forgiving category in the calculator. Flexible resins need more careful handling because the desired property is elongation, not maximum hardness. Too much UV can reduce flexibility and turn a soft part into something that cracks earlier. Rigid and tough resins often need more dose to develop strength, but they also have an upper limit where additional curing no longer improves performance and instead increases brittleness.',
    },
    {
      type: 'paragraph',
      html: 'Castable and burnout resins have a different priority. Their final use may involve investment casting or clean burnout, so surface quality, ash behavior, and dimensional stability matter. A very hard over-cured castable part can become fragile during handling or perform poorly in downstream process steps. The calculator applies a tighter cap to these categories because the safest workflow is controlled curing, not maximum exposure.',
    },
    {
      type: 'table',
      headers: ['Resin preset', 'Main objective', 'Over-cure symptom', 'Calculator behavior'],
      rows: [
        ['Standard', 'General hardness and safe handling', 'Yellowing and brittle thin details', 'Moderate base time and medium cap.'],
        ['Flexible', 'Keep elongation while removing tack', 'Loss of flexibility and tearing', 'Longer base time with cautious dose sensitivity.'],
        ['Rigid / Tough', 'Reach engineering stiffness and strength', 'Brittle fracture instead of tough failure', 'Higher base time and optional warm cure.'],
        ['Castable', 'Clean handling before casting workflow', 'Fragile patterns and surface darkening', 'Lower safety cap to avoid aggressive exposure.'],
        ['Burnout', 'Controlled cure before thermal burnout', 'Chipping or dimensional stress', 'Moderate time with conservative cap.'],
      ],
    },
    {
      type: 'proscons',
      title: 'Adding extra minutes after the calculator',
      items: [
        { pro: 'Can help if one face was shaded during a short cycle.', con: 'Can degrade already exposed faces when the part was not rotated.' },
        { pro: 'May reduce tack on very thick or dark parts.', con: 'Can make tough and flexible resins fail in a more brittle way.' },
        { pro: 'Useful as a second short cycle after inspection.', con: 'Unsafe as a routine habit without checking the safety cap.' },
      ],
    },
    { type: 'title', text: 'Temperature During Technical Resin Post-Cure', level: 2 },
    {
      type: 'paragraph',
      html: 'Some engineering resins specify elevated post-cure temperature because heat increases molecular mobility and helps the polymer network approach its intended properties. Warm curing can improve heat deflection temperature, modulus, and final strength for compatible materials. It should not be applied blindly to every resin. A miniature printed in standard resin may not need heat at all, while a tough engineering resin may benefit from 40-60 °C depending on manufacturer data. The calculator therefore returns room temperature for resin families where heat is not assumed, and a modest temperature target where it is useful.',
    },
    {
      type: 'paragraph',
      html: 'Temperature control is also a safety issue. Too much heat can warp thin sections, soften support scars, or accelerate yellowing. A wash and cure station with no heated chamber should not be treated as equivalent to a laboratory oven. If the resin datasheet specifies a precise thermal cycle, that datasheet wins. The calculator is a practical estimator for common desktop workflows, not a replacement for certified medical, dental, aerospace, or casting process validation.',
    },
    {
      type: 'card',
      title: 'When the output says room temperature',
      html: 'Room temperature means the calculator does not require a heated post-cure for that resin preset. It does not mean the part can cure while cold, wet, or in a drafty workshop. Keep the part dry and let the resin reach a normal indoor temperature before exposure.',
    },
    {
      type: 'tip',
      title: 'Avoid curing directly after IPA removal',
      html: 'After washing, let alcohol evaporate from holes, cavities, and embossed text. Ten to thirty minutes of drying can matter more than adding another minute of UV.',
    },
    { type: 'title', text: 'Diagnosing Under-Cured and Over-Cured Resin Parts', level: 2 },
    {
      type: 'paragraph',
      html: 'Under-cured resin parts usually show tacky surfaces, weak small features, lingering odor, soft edges, or residue that transfers to gloves. These symptoms are most common when the part was not washed thoroughly, was cured while wet, had heavy wall thickness, or sat in shadow inside the chamber. Over-cured parts show different symptoms: brittle snap failure, yellowing, chalky surfaces, curled thin edges, or loss of flexibility. The fix depends on the symptom. More UV is not the answer to every resin print problem.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Brittle and yellow means stop adding exposure',
      html: 'If a part has already become brittle or visibly yellow, extra curing will not recover toughness. Reprint, reduce timer value, improve rotation, and respect the cap.',
    },
    {
      type: 'summary',
      title: 'Troubleshooting order',
      items: [
        'Confirm the part was washed and dried before curing.',
        'Check whether supports or the model orientation created UV shadows.',
        'Enter the thickest wall, not the average model size.',
        'Use the safety cap when the raw estimate would run too long.',
        'Rotate complex parts instead of extending one static exposure.',
      ],
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely cause', 'Correction'],
      rows: [
        ['Sticky surface after curing', 'Residual resin or IPA, too little dose, or shadowed face', 'Rewash if contaminated, dry fully, then apply a short rotated cycle.'],
        ['Thin features snap easily', 'Over-cure or inherently brittle resin', 'Reduce timer and avoid close LED placement.'],
        ['One side yellow, other side soft', 'Uneven chamber exposure', 'Increase distance and rotate during curing.'],
        ['Flexible resin becomes stiff', 'Dose too high for elastomeric behavior', 'Use lower time and stop at tack-free handling.'],
      ],
    },
    { type: 'title', text: 'How to Use This UV Wash and Cure Station Time Calculator', level: 2 },
    {
      type: 'paragraph',
      html: 'Start with the resin preset closest to the material label. If the bottle says tough, rigid, ABS-like, engineering, or high impact, use the rigid/tough preset. If it is elastic, bendable, or rubber-like, use flexible. For investment casting or ash-free workflows, use castable or burnout. Then measure the maximum wall thickness. Enter the nominal curing station power and choose 385 nm or 405 nm according to the station or resin documentation. The output timer value is the first cycle you should run.',
    },
    {
      type: 'paragraph',
      html: 'Before pressing start, use the checklist. The part must be dry, visible from multiple angles, and free from support structures that cast shadows. If the model is complex, cure for part of the recommended time, rotate it, and finish the rest of the cycle. If the calculator warns that the safety cap was applied, do not override it with one long exposure. The cap exists because that resin category is more likely to degrade than improve beyond that point.',
    },
    {
      type: 'list',
      items: [
        'Use manufacturer instructions when a resin datasheet gives a validated post-cure cycle.',
        'Use this calculator when station power, wavelength, or part thickness differs from the reference workflow.',
        'Do not cure parts that smell strongly of solvent or have trapped liquid in drain holes.',
        'Do not assume stronger light is safer; it can create local over-cure faster.',
        'Record successful times by resin, color, wall thickness, and station model.',
      ],
    },
    {
      type: 'summary',
      title: 'Safe post curing rule',
      items: [
        'Clean first.',
        'Dry completely.',
        'Cure within the calculated window.',
        'Rotate for coverage.',
        'Stop before the resin becomes brittle, yellow, or warped.',
      ],
    },
  ],
  bibliography,
  howTo: howToData,
  faq: faqData,
  schemas: [faqSchema, howToSchema, appSchema],
};
