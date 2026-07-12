import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'sla-resin-hollowing-drainage-calculator';
const title = 'SLA Resin Hollowing and Drainage Calculator';
const description = 'Calculate conservative wall thickness, drain hole diameter, minimum vent count, and complexity-adjusted resin savings for hollow SLA and DLP resin prints.';

const faqData = [
  { question: 'Why does the calculator always recommend at least two drain holes?', answer: 'A hollow resin print needs one path for liquid resin to leave and another path for air to enter. Two openings also help break the suction cup effect against the release film during peeling.' },
  { question: 'Why is the resin saving lower than the theoretical hollow volume?', answer: 'Liquid resin remains on internal walls, ribs, corners, supports, and small pockets. The calculator subtracts 5, 10, or 15 percent from the theoretical hollow volume based on geometry complexity.' },
  { question: 'Is 1.5 mm always enough wall thickness?', answer: 'No. It is a minimum safety floor for many desktop resin prints. Tall parts, heavy parts, engineering loads, hot environments, or aggressive sanding may need thicker walls and test coupons.' },
  { question: 'Where should drain holes be placed?', answer: 'Place holes as close as possible to the build plate side and the lowest resin collection points in the print orientation, then verify that no sealed pocket remains in the slicer.' },
];

const howToData = [
  { name: 'Enter model volume and height', text: 'Use the slicer volume after supports and orientation, then enter the height of the part in the print orientation.' },
  { name: 'Choose geometric complexity', text: 'Select simple, moderate, or high complexity so trapped resin is subtracted from the theoretical hollow saving.' },
  { name: 'Choose resin type', text: 'Select standard, tough, or engineering resin. More viscous resins receive a larger drain diameter recommendation.' },
  { name: 'Check wall and drain recommendations', text: 'Use the wall thickness, drain diameter, hole count, and checklist before slicing the final file.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

const seoData = [
    {
      type: 'title',
      text: 'What Does the SLA Resin Hollowing and Drainage Calculator Do?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'This tool solves one of the most critical challenges in SLA, DLP, and LCD resin 3D printing: optimizing hollow models. Printing solid resin parts is expensive, heavy, and increases peel forces during the printing process. Hollowing the model reduces material usage, but introducing hollow cavities without proper drainage leads to trapped uncured resin and print failures due to vacuum forces. This calculator computes the ideal wall thickness, suggests the correct diameter and quantity of drain holes, and estimates the true resin savings by factoring in the liquid resin that inevitably remains trapped on the internal walls of the printed part.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: 'Minimum recommended wall thickness for desktop SLA'
          },
          {
            value: '2 holes',
            label: 'Minimum number of vents required to break the vacuum'
          },
          {
            value: '10-15%',
            label: 'Resin volume reduction due to internal surface retention'
          },
          {
            value: '30-70%',
            label: 'Average total weight reduction achieved by hollowing'
          }
        ]
    },
    {
      type: 'title',
      text: 'How Wall Thickness Affects Resin Savings',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Wall thickness is the primary variable that determines the amount of resin saved. A thicker wall increases structural strength but rapidly consumes more resin, reducing the efficiency of hollowing. Conversely, a wall that is too thin will be fragile, prone to warping during curing, and might fail to withstand the mechanical peel forces as the printer separates each layer from the FEP film. The goal is to find the sweet spot where the model retains its shape and utility while maximizing material savings.'
    },
    {
      type: 'proscons',
      title: 'Pros and Cons of Hollowing Resin Prints',
      items: [
          {
            pro: 'Massive reduction in material costs and overall print weight',
            con: 'Requires post-processing to wash and cure internal cavities'
          },
          {
            pro: 'Lower surface area per layer reduces peel forces on FEP film',
            con: 'Improperly placed holes can ruin the visual aesthetics of the model'
          },
          {
            pro: 'Reduces thermal stress and warping during post-curing',
            con: 'Risk of trapped liquid resin causing the part to crack later'
          }
        ]
    },
    {
      type: 'title',
      text: 'Understanding the Suction Cup Effect in Hollow Resin Prints',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'When a hollow model is printed, it forms an enclosed chamber as it dips into the vat. If this chamber lacks ventilation holes, each lifting cycle creates a strong partial vacuum (suction cup effect) between the cured layer and the release film. This force pulls on the print, leading to layer separation, layer lines, support failures, or even tearing the model completely off the build plate. Adding ventilation holes allows air to enter, neutralizing the pressure difference and ensuring smooth peel cycles.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'The Danger of Sealed Hollow Spaces',
      html: 'Never leave a hollow space completely sealed. Trapped liquid resin inside a printed part will slowly degrade the cured walls over time, eventually causing the model to crack, leak toxic resin, or completely disintegrate. Always include at least two holes to wash the interior and cure it with an internal UV light source.'
    },
    {
      type: 'title',
      text: 'Drain Hole Placement Best Practices',
      level: 2
    },
    {
      type: 'list',
      items: [
          'Place drain holes as close to the build plate as possible to allow the resin to escape early during printing.',
          'Always use at least two holes: one to let the liquid resin flow out and another to let air flow in.',
          'Orient the holes on non-visible surfaces, such as the bottom of bases or behind joints, to preserve aesthetics.',
          'Ensure that every isolated internal chamber or pocket has its own set of drainage holes.'
        ]
    },
    {
      type: 'title',
      text: 'How the Calculator Adjusts for Geometric Complexity',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: 'Simple Geometry',
            description: 'Low detail models, spheres, or blocks. Traps minimal resin (approx. 5%) on flat interior surfaces.'
          },
          {
            title: 'Moderate Geometry',
            description: 'Character models or standard mechanical parts. Internal supports and curves retain moderate resin (approx. 10%).',
            highlight: true
          },
          {
            title: 'High Complexity',
            description: 'Highly detailed miniatures, lattice structures, or complex hollow channels. Retains significant resin (approx. 15%+) due to capillary action.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Understanding Resin Viscosity and Drain Hole Sizing',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'Resin Class',
          'Viscosity Level',
          'Min Hole Diameter',
          'Recommended Placement'
        ],
      rows: [
          [
              'Standard Resin',
              'Low-Medium',
              '2.0 - 3.0 mm',
              'Base or hidden flat surfaces'
            ],
          [
              'Tough / Flexible',
              'Medium-High',
              '3.0 - 4.5 mm',
              'Corners and joints to avoid peeling'
            ],
          [
              'Engineering / Castable',
              'Very High',
              '4.5 - 6.0 mm',
              'Direct line of sight for gravity drainage'
            ]
        ]
    },
    {
      type: 'title',
      text: 'When to Increase Wall Thickness Beyond 1.5 mm',
      level: 2
    },
    {
      type: 'tip',
      title: 'Scale and Function dictate wall thickness',
      html: 'While 1.5 mm is a reliable minimum for small display figures, you should scale up the wall thickness for larger prints. For parts taller than 150mm, aim for 2.0mm to 2.5mm walls. For load-bearing mechanical components or parts printed with flexible/elastomeric resins, walls should be 3.0mm or thicker to prevent structural collapse under load.'
    },
    {
      type: 'title',
      text: 'Technical Glossary for Hollow SLA Printing',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA Hollowing',
            definition: 'The process of converting a solid 3D model into a hollow shell with a specific wall thickness to save resin and print time.'
          },
          {
            term: 'Suction Cup Effect',
            definition: 'The vacuum force created when an enclosed hollow cavity is pulled away from the release film during printing.'
          },
          {
            term: 'Peel Force',
            definition: 'The mechanical tension experienced by the model and supports as the cured layer is separated from the vat bottom.'
          },
          {
            term: 'Resin Trapping',
            definition: 'The retention of liquid uncured resin inside internal corners, supports, and textures due to surface tension.'
          }
        ]
    },
    {
      type: 'title',
      text: 'Summary Checklist for Successful Hollow Prints',
      level: 2
    },
    {
      type: 'summary',
      title: 'Preflight SLA Checklist',
      items: [
          'Verify hollowing thickness is appropriate for the model scale.',
          'Confirm at least two drain holes are placed at the lowest printing points.',
          'Check for isolated internal voids that lack ventilation.',
          'Plan for internal washing with IPA and internal UV LED curing.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    modelInputsLabel: 'Model Inputs',
    volumeLabel: 'Total Model Volume',
    heightLabel: 'Part Height',
    complexityLabel: 'Geometric Complexity',
    resinTypeLabel: 'Resin Type',
    simpleLabel: 'Simple',
    moderateLabel: 'Moderate',
    highLabel: 'High',
    standardLabel: 'Standard',
    toughLabel: 'Tough',
    engineeringLabel: 'Engineering',
    resultsLabel: 'Hollowing and Drainage Result',
    wallThicknessLabel: 'Recommended Wall',
    drainDiameterLabel: 'Drain Diameter',
    drainHoleCountLabel: 'Minimum Holes',
    adjustedSavingLabel: 'Estimated Resin Saving',
    adjustedSavingNote: 'Adjusted for complexity to account for liquid resin retained on internal surfaces.',
    trapFactorLabel: 'Trapped Resin Factor',
    trapFactorHelp: 'This factor changes with geometric complexity to compensate for viscous resin surface tension in blind cavities.',
    theoreticalSavingLabel: 'Theoretical Hollow Volume',
    trappedAllowanceLabel: 'Trapped Resin Allowance',
    savingUnitLabel: 'Saving',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: 'Note: Drain holes should be placed near the build plate side and the lowest resin collection points in the print orientation.',
    vacuumWarning: 'Hollow bodies always require at least two drain holes to break the vacuum against the release film.',
    trappedResinWarning: 'Complex geometries trap liquid resin inside; this calculation estimates the allowance.',
    checklistTitle: 'Pre-Slice Checklist',
    checklistItems: ['Ensure drain holes are located in the area near the build plate.', 'Verify that wall thickness does not go below 1.5 mm.', 'Confirm that there are no closed resin islands or voids in the model.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
