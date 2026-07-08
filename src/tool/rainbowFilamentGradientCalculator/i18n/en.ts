import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RainbowFilamentGradientCalculatorUI } from '../ui';

export const content: ToolLocaleContent<RainbowFilamentGradientCalculatorUI> = {
  slug: 'rainbow-filament-transition-calculator',
  title: 'Rainbow Filament Transition Length Calculator for 3D Prints',
  description: 'Estimate rainbow filament color cycles, spool usage, and where gradient transitions will appear along the Z height of a sliced 3D print.',
  ui: {
    unitMetric: 'Metric',
    unitImperial: 'US',
    cycleLength: 'Color cycle length',
    partWeight: 'Sliced part weight',
    density: 'Density',
    diameter: 'Filament diameter',
    partHeight: 'Printed Z height',
    startOffset: 'Start offset on spool',
    presets: 'Material presets',
    pla: 'PLA rainbow',
    petg: 'PETG blend',
    silk: 'Silk multicolor',
    usedFilament: 'Filament used',
    cyclesInPart: 'Cycles in part',
    heightPerCycle: 'Z per cycle',
    gramsPerCycle: 'Mass per cycle',
    zMap: 'Z transition map',
    transitionBands: 'Visible transition bands',
    phaseWindow: 'Cycle phase',
    copySummary: 'Copy gradient summary',
    reset: 'Reset',
    emptyValue: '0',
    copyTemplate: 'Rainbow filament estimate',
    copyCycles: 'color cycles',
    copyUsed: 'used',
    copyZCycle: 'per cycle',
  },
  seo: [
    { type: 'title', text: 'How a Rainbow Filament Transition Length Calculator Works', level: 2 },
    { type: 'paragraph', html: 'A rainbow filament transition length calculator connects two slicer numbers that are usually viewed separately: <strong>model mass</strong> and <strong>printed height</strong>. The slicer tells you how many grams of material the part will consume, while the filament manufacturer or a manual measurement tells you how many meters the spool needs to complete one full color cycle. Once those values are in the same material-flow model, you can estimate how many color cycles appear in the object and where each color band lands on the Z axis.' },
    { type: 'paragraph', html: 'The core conversion is physical rather than visual. A sliced part that weighs 180 g does not automatically consume the same length of filament on every spool, because length depends on density and diameter. PLA, PETG, silk PLA, filled blends, and translucent blends can have different densities. A nominal 1.75 mm filament also has tolerance variation, so a calculator should let you adjust diameter instead of assuming the default forever.' },
    { type: 'stats', columns: 4, items: [
      { value: '1.75 mm', label: 'common FDM filament diameter', icon: 'mdi:circle-slice-8' },
      { value: '1.24 g/cm3', label: 'typical PLA density used for estimates', icon: 'mdi:flask' },
      { value: '30 m', label: 'example full rainbow color cycle', icon: 'mdi:palette' },
      { value: 'Z axis', label: 'where cycle length becomes visible', icon: 'mdi:arrow-up-down' },
    ] },
    { type: 'tip', title: 'Measure one real cycle before trusting the preview', html: 'Manufacturers often describe rainbow filament as fast, medium, or long transition, but the useful input is the measured distance from one color returning to the same color. Unwind a small sample only if it is safe for the spool, or print a thin purge tower and back-calculate the consumed filament length from slicer estimates.' },

    { type: 'title', text: 'Why Part Weight Predicts Color Changes Better Than Print Time', level: 2 },
    { type: 'paragraph', html: 'Print time is a poor predictor for rainbow spool color usage. A decorative vase may take many hours in spiral mode while consuming little material, and a dense mechanical bracket may consume a large amount of filament quickly. The spool changes color according to <strong>length of filament pulled through the extruder</strong>, not according to minutes elapsed, travel distance, or the number of layers.' },
    { type: 'paragraph', html: 'Slicer weight is useful because it already includes walls, infill, top and bottom layers, supports if enabled, brims, skirts, and purge structures. That weight can be converted into volume by dividing by material density. Volume can then be divided by the cross-sectional area of the filament to estimate total filament length. This is why the same STL may show different gradient behavior when you change infill, wall count, support settings, or scale.' },
    { type: 'table', headers: ['Slicer change', 'Effect on filament usage', 'Effect on rainbow gradient'], rows: [
      ['More infill', 'Raises total grams and meters', 'More color cycle progress inside the same Z height'],
      ['More walls', 'Raises usage across most layers', 'Transitions compress vertically and become more frequent'],
      ['Taller model with same mass', 'Similar meters over more Z height', 'Transitions stretch farther apart'],
      ['Supports enabled', 'Consumes colors outside the visible part', 'Visible phase may shift compared with the bare model'],
      ['Large brim or raft', 'Consumes filament before the first visible layer', 'Start color moves forward on the spool'],
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Use the slicer estimate after final settings', badge: 'Important', html: 'Do the calculation after choosing layer height, wall count, infill, support, brim, and scale. A rainbow spool color cycle estimate made before support generation can be visibly wrong because support material consumes part of the color sequence before and during the object.' },

    { type: 'title', text: 'Understanding Color Cycle Length on Rainbow Filament Spools', level: 2 },
    { type: 'paragraph', html: 'Color cycle length is the distance of filament needed for the sequence to repeat. On a six-color rainbow spool, one cycle might run red, orange, yellow, green, blue, violet, then return to red. The cycle may be short enough for several transitions in a small figurine, or long enough that a medium print shows only one slow fade. A <strong>rainbow spool color cycle calculator</strong> is most useful when this number is realistic.' },
    { type: 'paragraph', html: 'Not all transition filaments have equal color zones. Some products blend gradually with long fades, while others have stronger blocks. The calculator treats the full cycle as evenly distributed color bands because that is the most practical estimate from slicer data alone. If your spool has uneven sections, use the Z map as a phase guide and expect the actual visual blend to be softer or more asymmetric.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Short Cycle Rainbow', description: 'Best for miniatures, ornaments, small vases, and nameplates. Multiple color changes can appear with less material.', icon: 'mdi:weather-sunset-up', points: ['Fast visible transitions', 'Can look busy on large flat faces'] },
      { title: 'Medium Cycle Rainbow', description: 'A balanced choice for desk objects and medium sculptures. Often produces one to three major transitions.', icon: 'mdi:palette-swatch', highlight: true, points: ['Predictable on common prints', 'Good for 100-300 g objects'] },
      { title: 'Long Cycle Rainbow', description: 'Better for tall vases, large dragons, lamps, and single-wall prints that need slow sweeping gradients.', icon: 'mdi:palette-outline', points: ['Smooth color travel', 'Small models may stay one color'] },
    ] },
    { type: 'glossary', items: [
      { term: 'Color cycle', definition: 'The filament length required for the full color sequence to repeat from a starting color back to the same color.' },
      { term: 'Phase', definition: 'The current position inside the color cycle at the moment the visible part begins printing.' },
      { term: 'Transition band', definition: 'A vertical region of the printed object where the estimated color segment changes along the Z axis.' },
      { term: 'Start offset', definition: 'Filament length already consumed before the model begins, including previous prints, purge, skirt, brim, or manual trimming.' },
    ] },

    { type: 'title', text: 'How to Estimate Color Transition Position Along the Z Axis', level: 2 },
    { type: 'paragraph', html: 'The Z map is an estimator, not a slicer simulator. It assumes material consumption is distributed proportionally through the printed height. That is a good first-order model for many vase-mode prints, sculptures with steady cross-sections, and decorative objects. It becomes less exact when the model has a heavy base, a hollow middle, a dense top, or large supports that consume material unevenly across height.' },
    { type: 'paragraph', html: 'For a model with mostly uniform cross-section, dividing printed height by color cycles gives an intuitive answer: if a 160 mm object uses two full color cycles, each cycle occupies roughly 80 mm of Z height. If it uses only 0.4 cycles, the print will show less than half the rainbow sequence. If it uses 4 cycles, colors repeat often and may create a striped look rather than a single smooth gradient.' },
    { type: 'list', icon: 'mdi:arrow-up-down', items: [
      'Use printed Z height, not total machine travel height.',
      'Include brim or raft consumption as start offset if those features are printed before the object.',
      'For multi-object plates, calculate the combined sliced weight if the objects print sequentially by layer.',
      'For sequential printing, calculate each object separately and advance the start offset for the next object.',
      'For a purge tower or multicolor waste structure, add its estimated mass to the offset or total usage depending on when it prints.',
    ] },
    { type: 'card', icon: 'mdi:layers-triple', title: 'Why the bottom may not match the predicted first color', html: 'Many printers purge, draw a prime line, print a skirt, or print a brim before the first visible wall. Those features consume filament and shift the starting phase. If the first visible layer must be a specific color, measure or estimate that pre-print consumption and enter it as start offset.' },

    { type: 'title', text: 'Density, Diameter, and Why Two 180 g Prints Can Use Different Filament Lengths', level: 2 },
    { type: 'paragraph', html: 'The same mass can represent different filament lengths because density changes the volume per gram. PLA is often estimated around 1.24 g/cm3, PETG around 1.27 g/cm3, and some silk or filled blends can differ enough to move transitions by several millimeters on tall prints. The diameter input matters for the same reason: a thicker filament has more cross-sectional area, so every meter contains more material.' },
    { type: 'paragraph', html: 'For practical planning, density errors are usually smaller than cycle-length errors, but they still matter when trying to place a color boundary near an important feature such as a face, logo, text relief, or vase rim. If a spool datasheet gives density, use it. If not, the preset values are reasonable planning estimates, then the result should be validated with a short calibration print.' },
    { type: 'table', headers: ['Material family', 'Planning density', 'Gradient planning note'], rows: [
      ['PLA rainbow', '1.24 g/cm3', 'Good default for most standard rainbow spools'],
      ['Silk PLA', '1.18-1.24 g/cm3', 'Pigments and additives vary; check brand data when available'],
      ['PETG multicolor', '1.25-1.29 g/cm3', 'Slightly denser, so the same grams may use less length'],
      ['Filled PLA', 'Varies widely', 'Wood, metal, stone, or glitter additives can shift the estimate'],
    ] },
    { type: 'proscons', title: 'Using slicer weight as the main input', items: [
      { pro: 'It includes real print settings such as walls, infill, supports, and scale.', con: 'It depends on the slicer density profile being reasonably accurate.' },
      { pro: 'It is faster than manually summing extrusion moves from G-code.', con: 'It does not reveal uneven material distribution at each layer.' },
      { pro: 'It works across different models and slicers with minimal data entry.', con: 'Prime lines, purge, and failed starts must be accounted for separately.' },
    ] },

    { type: 'title', text: 'How to Use the Calculator for a Real Rainbow Filament Print', level: 2 },
    { type: 'paragraph', html: 'Start by slicing the model with final settings. Copy the estimated filament weight from the slicer, then enter the material density and filament diameter. Enter the measured or advertised color cycle length. Finally, enter the printed Z height of the model. The calculator returns filament used, number of cycles in the part, grams per full color cycle, and estimated Z distance per cycle.' },
    { type: 'list', icon: 'mdi:check-circle', items: [
      'If cycles in part is below 0.25, expect a subtle shade change rather than a rainbow object.',
      'If cycles in part is around 1.0, the model can show one complete sweep through the spool palette.',
      'If cycles in part is between 2.0 and 4.0, the object will show repeated color bands.',
      'If Z per cycle is larger than the model height, increase scale, add mass, or choose a faster-transition spool.',
      'If Z per cycle is very small, reduce infill or choose a longer-transition spool for smoother gradients.',
    ] },
    { type: 'summary', title: 'Fast planning rule', items: [
      'More grams in the same height compress the rainbow vertically.',
      'More height with the same grams stretches the gradient.',
      'Shorter color cycle length creates more transitions.',
      'Start offset controls which part of the rainbow appears first.',
    ] },
    { type: 'message', title: 'For display pieces', ariaLabel: 'Display piece planning advice', html: 'When the color boundary must land on a specific feature, print a small vertical test column with the same slicer profile. Compare the measured band heights with the estimate, then adjust cycle length or start offset before committing to the full print.' },

    { type: 'title', text: 'Common Long-Tail Questions About Rainbow Spool Color Planning', level: 2 },
    { type: 'paragraph', html: '<strong>How much rainbow filament do I need for one full color cycle?</strong> Multiply the cycle length by grams per meter for your filament diameter and density. For standard 1.75 mm PLA, one meter is roughly 3 g, so a 30 m cycle is close to 90 g. The calculator performs this conversion directly because real density and diameter change the answer.' },
    { type: 'paragraph', html: '<strong>Why did my print stay mostly one color?</strong> The part probably used less than one meaningful fraction of the spool cycle. Small models, low infill, and very long-transition rainbow filament can stay within one or two neighboring colors. Scaling the model up, printing multiple objects at once, increasing walls, or choosing a faster-cycle spool can make transitions more visible.' },
    { type: 'paragraph', html: '<strong>Can I force a specific color at the top of the model?</strong> You can estimate it with start offset, but exact placement requires knowing the current spool phase. If the top needs to be blue, for example, you may need to advance the filament by printing a purge object, starting from a known visible color, or choosing a different model scale so the final phase lands in the desired region.' },
    { type: 'diagnostic', variant: 'warning', title: 'Large Geometry Changes Reduce Z Map Accuracy', badge: 'Model shape', html: 'A heavy pedestal and thin upper statue may consume most material near the bottom, so real transitions will cluster lower than a proportional Z estimate suggests. For those models, use the calculator for total cycle count, then inspect the slicer layer preview to understand where extrusion volume is concentrated.' },
  ],
  faq: [
    {
      question: 'What is rainbow filament transition length?',
      answer: 'It is the amount of filament, usually measured in meters or feet, required for the spool to move through one full color sequence and return to the starting color.',
    },
    {
      question: 'Why does the calculator ask for part weight instead of print time?',
      answer: 'Color changes depend on filament length consumed by the extruder. Slicer weight can be converted to volume and then to filament length, while print time does not directly describe material usage.',
    },
    {
      question: 'How accurate is the Z transition map?',
      answer: 'It is a planning estimate. It is most accurate for models with fairly even material distribution across height, and less accurate for shapes with a dense base, hollow sections, supports, or large purge structures.',
    },
    {
      question: 'Can I use this for silk PLA or PETG rainbow filament?',
      answer: 'Yes. Choose a material preset or enter the density from the spool datasheet. Density changes the estimated filament length and therefore the predicted color cycle count.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Slice the model', text: 'Use the final slicer settings and copy the estimated part weight.' },
    { name: 'Enter spool data', text: 'Set the color cycle length, density, filament diameter, and any start offset.' },
    { name: 'Read the Z map', text: 'Use cycles, Z per cycle, and visible bands to decide whether the gradient will be subtle, complete, or repeated.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Rainbow Filament Transition Length Calculator',
      description: 'Estimate rainbow filament color cycle usage and transition positions along the Z axis of a 3D print.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is rainbow filament transition length?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is the amount of filament required for the spool to move through one full color sequence and return to the starting color.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Rainbow Filament Transition Length Calculator for 3D Prints',
      description: 'Estimate rainbow filament color cycles, spool usage, and where gradient transitions will appear along the Z height of a sliced 3D print.',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Slice the model', text: 'Use the final slicer settings and copy the estimated part weight.' },
        { '@type': 'HowToStep', position: 2, name: 'Enter spool data', text: 'Set the color cycle length, density, filament diameter, and any start offset.' },
        { '@type': 'HowToStep', position: 3, name: 'Read the Z map', text: 'Use cycles, Z per cycle, and visible bands to decide whether the gradient will be subtle, complete, or repeated.' }
      ],
    },
  ],
};
