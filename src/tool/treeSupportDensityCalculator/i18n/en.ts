import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TreeSupportDensityCalculatorUI } from '../ui';

export const content: ToolLocaleContent<TreeSupportDensityCalculatorUI> = {
  slug: 'tree-support-density-calculator',
  title: 'Tree Support Density Calculator',
  description: 'Estimate tree support canopy diameter, support volume, branch count, contact diameter, and stability from support height, branch angle, branch density, and base trunk diameter.',
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    presetsLabel: 'Presets',
    miniaturePresetLabel: 'Mini',
    balancedPresetLabel: 'Balanced',
    tallPresetLabel: 'Tall',
    supportHeightLabel: 'Support point height',
    branchAngleLabel: 'Branch angle',
    branchDensityLabel: 'Branch density',
    baseTrunkDiameterLabel: 'Base trunk diameter',
    canopyDiameterLabel: 'Top canopy diameter',
    supportVolumeLabel: 'Estimated support volume',
    stabilityLabel: 'Support stability',
    filamentMassLabel: 'Filament mass',
    branchCountLabel: 'Branch count',
    contactDiameterLabel: 'Contact diameter',
    trunkVolumeLabel: 'Trunk volume',
    branchVolumeLabel: 'Branch volume',
    stabilityScoreSeparator: '-',
    stabilityScoreSuffix: '/100',
    stabilityLow: 'low stability',
    stabilityBalanced: 'balanced stability',
    stabilityHigh: 'high stability',
    controlsAriaLabel: 'Tree support density inputs',
    resultsAriaLabel: 'Tree support density results',
    copyButton: 'Copy support setup',
    copiedButton: 'Copied',
    copiedSummaryTemplate: 'Tree support estimate: canopy {canopy}, support volume {volume}, stability {stability} ({score}/100).',
    millimetersUnit: 'mm',
    inchesUnit: 'in',
    cubicCentimetersUnit: 'cm3',
    cubicInchesUnit: 'in3',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    degreesUnit: 'deg',
    percentUnit: '%',
  },
  seo: [
    { type: 'title', text: 'How Tree Support Density Changes Filament Use and Stability', level: 2 },
    {
      type: 'paragraph',
      html: 'Tree supports are efficient because they separate the job into a <strong>load path</strong> and a <strong>contact pattern</strong>. The trunk carries most of the vertical load from the build plate, while smaller branches spread toward overhangs only where contact is needed. A tree support density calculator is useful because the most visible slicer controls, such as branch angle and branch density, interact with support point height and base trunk diameter. A low branch density can save filament, but it also reduces the number of paths that resist wobble. A steep branch angle can reach high features with less horizontal spread, but it concentrates load near the trunk and may fail on tall narrow supports.',
    },
    {
      type: 'paragraph',
      html: 'The calculator estimates three values that are difficult to judge by eye in a slicer preview: upper canopy diameter, support volume, and stability score. Upper canopy diameter tells you how wide the branch crown becomes near the model. Support volume estimates the printed material needed for the trunk and branches. Stability combines angle, density, base diameter, height, and canopy spread into a practical score. The goal is not to replace the slicer engine; the goal is to choose starting values before slicing so you spend less time iterating support previews.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '35-50 deg', label: 'common branch angle range for balanced reach and strength' },
        { value: '25-55%', label: 'practical branch density band for many FDM prints' },
        { value: '2-8 mm', label: 'typical base trunk diameter range for hobby printer tree supports' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'This is a planning calculator, not a slicer geometry export',
      html: 'Every slicer generates tree supports differently. Cura, PrusaSlicer, Bambu Studio, OrcaSlicer, and other tools use different names and algorithms for branch generation, collision avoidance, support interface, and contact points. Use the output as a tuning direction, then confirm the final geometry in slicer preview before printing.',
    },
    { type: 'title', text: 'Branch Angle: Reach, Load Path, and Failure Risk', level: 2 },
    {
      type: 'paragraph',
      html: 'Branch angle controls how aggressively a tree support spreads from the trunk toward the model. A lower angle keeps branches closer to vertical, which usually improves stiffness and reduces lateral wobble. A higher angle reaches farther over empty space, which can reduce the number of trunks needed, but it increases bending load and may create long unsupported branch segments. For tall supports, a small change from 50 degrees to 60 degrees can turn a stable tree into a flexible structure that vibrates when the nozzle touches it.',
    },
    {
      type: 'paragraph',
      html: 'The best branch angle depends on support point height. A short tree under a small overhang can use a wider angle because the branch length is limited. A high support point needs a more conservative angle, especially with flexible materials, fast travel moves, or a bed surface that releases supports easily. If the support point is high and the branch angle is wide, increase the base trunk diameter or density so the branch crown is not supported by a thin column.',
    },
    {
      type: 'table',
      headers: ['Branch angle', 'Best use case', 'Risk if overused', 'Adjustment'],
      rows: [
        ['20-35 deg', 'Tall supports and narrow towers', 'May require more trunks because reach is limited', 'Increase density only where contact coverage is poor'],
        ['36-50 deg', 'General tree support tuning', 'Usually balanced, but still depends on height', 'Start here for most PLA and PETG prints'],
        ['51-65 deg', 'Wide overhangs with moderate height', 'Branches can flex during travel or contact', 'Use thicker base trunk and moderate density'],
        ['66-75 deg', 'Special cases with very wide reach', 'High bending load and weak branch roots', 'Preview carefully and slow support printing'],
      ],
    },
    {
      type: 'tip',
      title: 'Do not chase reach with angle alone',
      html: 'If branches must travel far, try adding an extra trunk or increasing canopy density before pushing the angle to the upper limit. A second nearby trunk often uses less material than one overextended tree that needs a heavy base to survive.',
    },
    { type: 'title', text: 'Branch Density: Contact Coverage Without Support Scars', level: 2 },
    {
      type: 'paragraph',
      html: 'Branch density describes how much branch structure is created near the supported area. Low density reduces filament and makes removal easier, but it can leave overhang edges under-supported. High density improves coverage and distributes load across more contacts, but it increases print time, contact scars, and the chance that supports fuse to delicate surfaces. The right density is therefore not the highest number that looks safe; it is the lowest number that keeps overhangs from sagging while maintaining enough stiffness.',
    },
    {
      type: 'paragraph',
      html: 'For decorative models, density can often be reduced because slight underside texture may be acceptable. For mechanical parts, density needs more care because unsupported holes, chamfers, and mating surfaces can affect fit. Materials also matter. PLA can tolerate lighter supports because it is stiff and prints clean bridges. PETG often needs larger air gaps and careful contact diameter because it bonds strongly to supports. TPU and flexible filaments need conservative geometry because thin branches can deflect instead of holding the overhang in position.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Low density',
          description: 'Best when removal quality and filament saving are more important than perfect underside finish.',
          points: ['Fastest support printing', 'Weakest contact coverage', 'Useful for organic miniatures'],
        },
        {
          title: 'Balanced density',
          description: 'A practical default for mixed geometry where overhangs need support but the model surface must stay clean.',
          highlight: true,
          points: ['Good material efficiency', 'Moderate removal effort', 'Works for many PLA and PETG jobs'],
        },
        {
          title: 'High density',
          description: 'Useful for heavy overhangs, high support points, and fragile contact regions, but it increases scars.',
          points: ['Best load distribution', 'More volume and print time', 'Higher risk of fused contacts'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Increasing branch density',
      items: [
        { pro: 'More contact points reduce sagging under curved overhangs.', con: 'More contact points can leave more visible marks after removal.' },
        { pro: 'A denser canopy spreads load across several branches.', con: 'The slicer may generate a bulky crown that is harder to access with flush cutters.' },
        { pro: 'Tall supports become less sensitive to nozzle taps.', con: 'Print time and filament use rise quickly when density is combined with a large canopy.' },
      ],
    },
    { type: 'title', text: 'Base Trunk Diameter and Why Tall Tree Supports Fail', level: 2 },
    {
      type: 'paragraph',
      html: 'The base trunk diameter is the foundation of the tree. A thin trunk can be perfectly adequate for a short support, but the same diameter becomes risky when the supported point is high. Height increases leverage: a small nozzle impact, travel brush, or cooling fan vibration produces more movement at the canopy. If the trunk is too thin for the height, the support may not break immediately; it may slowly lean, shift the contact point, or detach from the bed before the overhang is finished.',
    },
    {
      type: 'paragraph',
      html: 'A larger trunk diameter improves stiffness and bed adhesion, but it also consumes material. The calculator treats trunk diameter as a stability input rather than a cosmetic setting. If the stability score is low, increasing diameter is often more effective than raising branch density because it strengthens the load path from the build plate. If the score is already high, a larger trunk may only make removal harder and waste filament.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Support point height', definition: 'The vertical distance from the build plate to the model region that needs support.' },
        { term: 'Branch angle', definition: 'The angle used by branches as they spread from the trunk toward support contact points.' },
        { term: 'Branch density', definition: 'The relative amount of branch structure and contact coverage created near the supported area.' },
        { term: 'Base trunk diameter', definition: 'The approximate diameter of the main tree support column where it starts on the build plate.' },
        { term: 'Canopy diameter', definition: 'The estimated width of the upper branch crown near the model overhang.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A high canopy on a thin trunk is the classic tree support failure mode',
      html: 'If the canopy diameter is many times larger than the trunk diameter, the support behaves like a top-heavy structure. Add another trunk, reduce branch angle, or increase the base diameter before simply adding more branch density.',
    },
    { type: 'title', text: 'Upper Canopy Diameter and Model Clearance', level: 2 },
    {
      type: 'paragraph',
      html: 'Upper canopy diameter is important because tree supports must fit around the model, avoid collisions, and remain removable. A large canopy may support the overhang well, but it can also wrap around details, enter cavities, or create branches that are difficult to break away. A small canopy is easier to remove, but it may concentrate contact force on a few points and allow edges to droop. The calculator estimates canopy diameter from support height, branch angle, density, and base diameter so you can predict whether the generated support crown will be compact or sprawling.',
    },
    {
      type: 'paragraph',
      html: 'Slicer preview is essential for canopy clearance. Watch for branches that pass through small holes, under raised text, around fingers on figurines, or between mechanical features. If a branch can reach an area, it may also trap itself there. Lower density, smaller contact diameter, tighter support blockers, or manual painting can keep tree supports from becoming more difficult to remove than standard grid supports.',
    },
    {
      type: 'table',
      headers: ['Canopy behavior', 'Likely cause', 'Print consequence', 'Fix'],
      rows: [
        ['Canopy is too narrow', 'Angle and density are both conservative', 'Overhang edges sag between contact points', 'Increase density or add manual support points'],
        ['Canopy is wide but unstable', 'High angle on a tall support', 'Nozzle contact can shake the structure', 'Reduce angle or add trunk diameter'],
        ['Canopy surrounds details', 'Density is high around complex geometry', 'Support removal scars visible surfaces', 'Use support blockers or lower density'],
        ['Canopy touches model sidewalls', 'Support clearance too small', 'Branches may fuse to the part', 'Increase X/Y distance or reduce contact diameter'],
      ],
    },
    {
      type: 'card',
      title: 'Canopy diameter is a preview warning',
      html: 'A large estimated canopy is not automatically bad. It means the slicer preview deserves attention because the support crown may become the dominant removal challenge.',
    },
    { type: 'title', text: 'Support Volume, Filament Length, and Print Time', level: 2 },
    {
      type: 'paragraph',
      html: 'Support volume is the practical cost of the chosen settings. A tree support can look lightweight in preview, but a dense canopy and thick trunk can still consume significant filament. The calculator reports estimated volume in cubic centimeters and an equivalent filament length for 1.75 mm filament. This helps compare settings before slicing, especially when you are deciding whether a taller trunk, higher density, or extra branch reach is worth the material.',
    },
    {
      type: 'paragraph',
      html: 'Volume does not map perfectly to print time because slicers use different line widths, wall counts, infill patterns, acceleration limits, and support speeds. However, support volume remains a strong indicator. If two settings produce similar stability but one uses much less volume, the lower-volume setting is usually the better starting point. If the lower-volume setting also produces a low stability score, the saving may disappear when the print fails or the underside needs rework.',
    },
    {
      type: 'summary',
      title: 'How to reduce support volume safely',
      items: [
        'Lower branch density first when the stability score is already high.',
        'Reduce branch angle when the canopy is very wide and top-heavy.',
        'Use a smaller base trunk only on short supports with modest overhang loads.',
        'Split one large tree into two smaller trees when reach is creating a bulky crown.',
        'Tune contact diameter separately so surface scars do not force unnecessary density.',
      ],
    },
    {
      type: 'message',
      title: 'Material saving is only useful if the support survives',
      html: 'A failed support usually costs more filament than a slightly stronger one. Treat large saving percentages as an invitation to preview carefully, not as proof that the lightest support is automatically correct.',
    },
    { type: 'title', text: 'Tree Support Contact Diameter and Surface Quality', level: 2 },
    {
      type: 'paragraph',
      html: 'Contact diameter controls how much of the tree support touches the model. Small contacts remove cleanly and reduce scars, but they can detach from heavy or hot overhangs. Larger contacts hold better and distribute heat, but they can weld to PETG, leave raised dots on PLA, or damage resin-like surface detail on decorative prints. This calculator estimates a contact diameter from branch diameter and density so the result stays connected to the support structure rather than being treated as an isolated cosmetic value.',
    },
    {
      type: 'paragraph',
      html: 'Contact settings should be tuned with top Z distance and interface behavior. If the vertical gap is too small, even a tiny contact can bond strongly. If the vertical gap is too large, a wide contact may still fail to support the overhang because the filament has room to sag. For functional parts, test contact diameter on a calibration overhang made from the same material, nozzle size, layer height, and cooling settings used for the real model.',
    },
    {
      type: 'list',
      items: [
        'Use smaller contact diameters on visible cosmetic surfaces.',
        'Use larger contacts under heavy bridges, thick overhangs, or high-temperature materials.',
        'Increase top Z distance before blaming tree density when supports are hard to remove.',
        'Lower support interface speed if contact points are knocked loose during printing.',
        'Check whether the slicer names this setting contact diameter, tip diameter, or support interface contact.',
      ],
    },
    {
      type: 'tip',
      title: 'PETG needs extra caution',
      html: 'PETG bonds aggressively to support material printed from the same filament. A moderate tree density with careful Z distance often works better than a very dense canopy with large contacts.',
    },
    { type: 'title', text: 'Recommended Starting Workflow for Slicer Tree Supports', level: 2 },
    {
      type: 'paragraph',
      html: 'Start by entering the height of the highest support point rather than the total model height. A model can be tall while the supported region is close to the bed, or short while a critical overhang sits high on a narrow island. Then choose a branch angle in the balanced range and set branch density according to the surface quality you need. Finally, set base trunk diameter based on height and expected load. The calculator will show whether the combination is volume-efficient, stable, or risky.',
    },
    {
      type: 'paragraph',
      html: 'After calculating, move to the slicer preview and inspect the generated tree from the first support layer to the final contact. Look for floating starts, very thin branch roots, branches that pass too close to the model, and unsupported overhang islands. If the support is unstable in the calculator and looks sparse in preview, strengthen the trunk or reduce branch angle. If the support is stable but visually bulky, reduce density and check whether the contact pattern still covers the overhang.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'A good tree support setting is boring in preview',
      html: 'The preview should show a clear trunk, short branch paths, enough contacts under the overhang, and open space around details. If the tree looks visually dramatic, it may be doing too much.',
    },
    {
      type: 'summary',
      title: 'Fast tuning sequence',
      items: [
        'Enter support point height, not just model height.',
        'Begin near 45-50 degrees for branch angle.',
        'Use 30-45% density for general PLA prints, then adjust from preview.',
        'Increase trunk diameter before making tall supports extremely dense.',
        'Confirm contact diameter and clearance on the actual slicer preview.',
      ],
    },
    { type: 'title', text: 'When Tree Supports Are Better Than Normal Supports', level: 2 },
    {
      type: 'paragraph',
      html: 'Tree supports are strongest when support is needed in isolated regions: figurine arms, helmets, creature horns, organic sculptures, decorative arches, and curved overhangs. They avoid filling the entire area under the model, so they often use less filament and leave fewer scars than blocky grid supports. They are also useful when standard supports would create a large wall that is hard to remove from a curved surface.',
    },
    {
      type: 'paragraph',
      html: 'Standard supports can still be better for flat technical overhangs, broad horizontal shelves, and surfaces that need consistent support interface. A tree support canopy touches selected points, while normal supports can provide a more uniform plane. If the underside must be dimensionally accurate, compare both approaches. A dense tree may use more material than a simple rectilinear support if the overhang is broad and flat.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Tree supports',
          description: 'Best for organic geometry, sparse contact areas, and models where removal access matters.',
          highlight: true,
          points: ['Lower material on isolated overhangs', 'Cleaner access around curved shapes', 'Sensitive to branch angle and trunk stiffness'],
        },
        {
          title: 'Normal supports',
          description: 'Best for broad flat overhangs, predictable interfaces, and simple mechanical surfaces.',
          points: ['Uniform underside coverage', 'Often easier to reason about', 'Can use much more filament under complex models'],
        },
      ],
    },
    {
      type: 'card',
      title: 'Use both support types when the model demands it',
      html: 'Many slicers allow support painting, blockers, or modifier meshes. A model can use tree supports for organic features and normal supports for one flat engineering surface.',
    },
  ],
  faq: [
    {
      question: 'What is a good branch angle for tree supports?',
      answer: 'A practical starting range is about 40-50 degrees. Use lower angles for tall supports and higher angles only when you need more reach and the trunk is strong enough.',
    },
    {
      question: 'Does higher tree support density always improve print quality?',
      answer: 'No. Higher density improves contact coverage and stability, but it also increases filament, print time, and support scars. Use the lowest density that supports the overhang reliably.',
    },
    {
      question: 'How should I choose base trunk diameter?',
      answer: 'Increase base trunk diameter as support point height rises. Tall supports need a stronger load path, while short supports can often use a smaller trunk to save material.',
    },
    {
      question: 'Why does canopy diameter matter?',
      answer: 'Canopy diameter predicts how wide the upper branch crown becomes. A wide canopy may support well, but it can collide with details, trap itself in cavities, or become hard to remove.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Enter support point height', text: 'Use the vertical distance from the build plate to the model area that needs support.' },
    { name: 'Set branch angle and density', text: 'Choose the planned slicer branch angle and branch density values.' },
    { name: 'Add base trunk diameter', text: 'Enter the approximate main tree trunk diameter used by the slicer.' },
    { name: 'Review stability and volume', text: 'Compare the stability score, canopy diameter, and estimated support volume before slicing.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Tree Support Density Calculator',
      description: 'Optimize 3D print tree support density, branch angle, base trunk diameter, canopy diameter, support volume, and stability.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a good branch angle for tree supports?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A practical starting range is about 40-50 degrees, with lower angles for tall supports and wider angles only when extra reach is needed.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to tune tree support density for a 3D print',
      step: [
        { '@type': 'HowToStep', text: 'Enter the support point height.' },
        { '@type': 'HowToStep', text: 'Set branch angle, branch density, and base trunk diameter.' },
        { '@type': 'HowToStep', text: 'Review canopy diameter, support volume, and stability score.' },
        { '@type': 'HowToStep', text: 'Apply the values in slicer preview and adjust contact settings.' },
      ],
    },
  ],
};
