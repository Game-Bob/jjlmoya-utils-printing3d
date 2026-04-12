import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = '3d-printing-shrinkage-calculator';
const title = '3D Shrinkage Calculator: Scale Factor and Shrinkage';
const description = 'Calculate how much you should scale your 3D designs based on the material (ABS, Nylon, ASA) to compensate for thermal shrinkage and get exact measurements.';

const faqData = [
  {
    question: 'Why does ABS shrink more than PLA?',
    answer: 'ABS is an amorphous polymer that requires higher temperatures to be extruded. When cooling from 250°C to room temperature, the thermal gradient is greater, causing molecules to pack together more aggressively than in PLA.',
  },
  {
    question: 'When should I use manual calibration?',
    answer: 'You should use it whenever you change filament brands or when you need mechanical tolerances below 0.1mm. The shrinkage coefficient can vary even between different colors of the same brand.',
  },
  {
    question: 'Does the infill affect shrinkage?',
    answer: 'Yes. The higher the infill density, the greater the amount of material exerting force towards the center of the part while it cools. Solid parts tend to shrink slightly more than hollow parts.',
  },
];

const howToData = [
  {
    name: 'Select your material',
    text: 'Choose from pre-set materials (ABS, ASA, Nylon, etc.) to apply industry-standard coefficients.',
  },
  {
    name: 'Calibrate with a real part',
    text: 'If you need total precision, print a 100mm cube, measure it once cool, and enter the data in calibration mode.',
  },
  {
    name: 'Copy the factor to the Slicer',
    text: 'Copy the resulting scale percentage and apply it to the corresponding axes of your slicing software (Cura, PrusaSlicer).',
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

const howToSchema: WithContext<HowToThing> = {
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

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: 'Material Settings',
    tabCalibration: 'Manual Calibration',
    labelDefaultMaterial: 'Default Material',
    labelEstimatedShrinkage: 'Estimated Shrinkage',
    unitPercent: '%',
    labelDesignSize: 'Design Measurement (Slicer)',
    labelRealSize: 'Printed Part Measurement (Real)',
    unitMm: 'mm',
    labelAxesCompensation: 'Axes Compensation',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* The Z axis usually shrinks less due to interlayer adhesion.',
    labelRecommendationTitle: 'Technical Recommendation',
    labelResultSlicerScale: 'SCALE PERCENTAGE (SLICER)',
    labelResultFactor: 'MULTIPLIER FACTOR',
    btnCopy: 'Copy Percentage',
    btnCopied: 'Copied!',
    recommendations: {
      'ABS': 'A chamber temperature of at least 40°C is recommended to minimize additional warping due to shrinkage.',
      'ASA': 'Excellent UV resistance. Reduce layer cooling to improve structural adhesion.',
      'Nylon': 'Very hygroscopic material. Dry at 80°C for 6-8h before printing to avoid bubbles.',
      'PETG': 'Less shrinkage. Use a flow multiplier of 95-98% if you have over-extrusion in dense parts.',
      'PLA': 'Minimal shrinkage. Ensure good air flow (100% layer fan) for fine details.'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3D Printing Shrinkage Calculator: Dimensional Accuracy',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'If you are a <strong>3D printing</strong> enthusiast, you have likely faced this problem: you design a part with perfect measurements (for example, a 20x20x20 mm cube), you print it, and when measuring it with the caliper you discover it measures 19.7 mm. What happened? The answer is <strong>material shrinkage</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Shrinkage is an inevitable physical phenomenon that occurs when thermoplastics pass from their molten state (at high temperatures) to their solid state at room temperature. As they cool, the molecules reorganize and "tighten," reducing the total volume of the part. Our <strong>shrinkage calculator</strong> is designed to help you predict this change and adjust the scale in your slicer so that your parts fit the first time.',
    },
    {
      type: 'title',
      text: 'Why do plastics shrink?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In FDM (Fused Deposition Modeling) printing, we deposit layers of hot plastic (between 200°C and 300°C) onto a surface. As the material cools, it undergoes what is known as the <strong>coefficient of thermal expansion</strong>. Basically, thermal energy keeps the molecules apart; when that energy disappears, intermolecular forces draw them closer together.',
    },
    {
      type: 'paragraph',
      html: 'Not all materials behave the same. Amorphous plastics (like PLA) have a disordered structure that tends to shrink less. In contrast, plastics that tend to crystallize or require very high temperatures (like ABS or Nylon) have a much more aggressive and difficult to control shrinkage.',
    },
    {
      type: 'title',
      text: 'Common Materials and Their Shrinkage Ranges',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (Acrylonitrile Butadiene Styrene): 0.8% – 2.0%. It is one of the most difficult materials due to its high shrinkage, which often causes "warping" (deformation of the corners).',
        'ASA: 0.5% – 0.9%. A UV-resistant alternative to ABS with somewhat more contained shrinkage.',
        'Nylon (PA): 0.7% – 2.5%. Depending on whether it has carbon or glass fiber loading, its shrinkage can vary drastically.',
        'PETG: 0.2% – 0.5%. Very dimensionally stable, ideal for mechanical parts that do not require the thermal resistance of ABS.',
        'PLA: 0.1% – 0.3%. The gold standard for ease of use; its shrinkage is almost negligible for most uses.',
      ],
    },
    {
      type: 'title',
      text: 'How to calculate the Scale Factor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Many users make the mistake of simply "adding the percentage" (if 2% is missing, they scale to 102%). However, mathematically to compensate for a loss, the scale must be slightly different. The correct formula used by our calculator is: <br><strong>Scale Factor = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'Where <strong>S</strong> is the shrinkage percentage expressed in decimals (e.g., 0.02 for 2%). For example, for a material that shrinks 2%, the scale factor is 1.0204, which means that in the slicer (Cura, PrusaSlicer, Bambu Studio) we must set the scale to <strong>102.04%</strong>.',
    },
    {
      type: 'title',
      text: 'Manual Calibration: Desired vs. Real Measurement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The inverse calibration process is simple: print a test object with a known measurement (e.g., a 100mm calibration cube). Once it is completely cool (waiting at least 30 minutes is crucial), measure the part with a digital caliper. Enter both values into the calculator and it will give you the exact adjustment percentage for that filament spool.',
    },
    {
      type: 'title',
      text: 'Non-Uniform Shrinkage: The X, Y, and Z Axes Problem',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In 3D printing, physics is not the same in all directions. Because layers are deposited on top of each other, <strong>interlayer adhesion</strong> in the Z axis usually limits vertical shrinkage. Normally, you will find that measurements in the horizontal plane (X and Y axes) require more compensation than height (Z axis).',
    },
    {
      type: 'tip',
      title: 'Pro Tip',
      html: '<p>If you are working with nylon or technical materials, always measure the part 24 hours after printing. Some plastics absorb environmental moisture and can "swell" slightly after cooling, altering the final measurement.</p>',
    },
    {
      type: 'title',
      text: 'Factors that affect final accuracy',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Extruder Temperature: At higher temperatures, the material enters more expanded but also usually suffers more sudden cooling.',
        'Bed Temperature: A hot bed prevents the base of the part from shrinking faster than the top, reducing warping.',
        'Infill Density: Very dense parts have more plastic mass exerting internal shrinkage force towards the center.',
        'Layer Fan: In materials like ABS, too strong a fan can cause cracks and excessive, irregular shrinkage.',
      ],
    },
  ],
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'Simplify3D: Dimensional Accuracy and Shrinkage',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: Material Table and Shrinkage Factors',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: Understanding 3D Printing Material Shrinkage',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
