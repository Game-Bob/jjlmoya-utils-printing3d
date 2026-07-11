import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WallPerimeterOptimizerUI } from '../ui';

export const content: ToolLocaleContent<WallPerimeterOptimizerUI> = {
  slug: 'wall-perimeter-optimizer',
  title: 'Wall and Perimeter Optimizer',
  description: 'Calculate the exact number of perimeters and a safe line width so printed wall thickness matches the CAD model without internal gaps.',
  ui: {
    controlsAriaLabel: 'Wall perimeter optimizer inputs',
    resultsAriaLabel: 'Wall perimeter optimizer results',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    tooltipLabel: 'More information',
    nozzleLabel: 'Nozzle diameter',
    nozzleHelp: 'Physical nozzle orifice diameter. Safe line width is limited to 80-120% of this value.',
    lineWidthLabel: 'Line width',
    lineWidthHelp: 'Slicer extrusion width for external and internal walls.',
    cadThicknessLabel: 'CAD wall thickness',
    cadThicknessHelp: 'Designed wall thickness that should be reproduced by whole perimeters.',
    commonNozzlesLabel: 'Common nozzle sizes',
    infillStrategyLabel: 'Wall fill strategy',
    perimeterFirstLabel: 'Perimeters first',
    solidInfillFallbackLabel: 'Solid infill fallback',
    solidInfillTip: 'Tip: if you prefer not to add more perimeters, use solid infill or reliable gap fill in thin walls so the slicer does not leave internal voids.',
    copySolidInfillNote: 'If you keep fewer perimeters, use solid infill or verified gap fill for thin wall interiors.',
    visualLabel: 'Cross section showing perimeters packed inside the CAD wall thickness',
    cadEnvelopeLabel: 'CAD wall envelope',
    lineLabel: 'Extrusion line',
    recommendedPerimetersLabel: 'Recommended perimeters',
    realThicknessLabel: 'Real thickness',
    residualLabel: 'Residual error',
    verdictLabel: 'Precision verdict',
    exactLabel: 'Exact',
    adjustLabel: 'Requires line width adjustment',
    impossibleLabel: 'Impossible with this nozzle',
    adjustedWidthLabel: 'Adjusted line width',
    noAdjustmentLabel: 'No adjustment',
    slicerBlockLabel: 'Slicer configuration',
    perimetersUnitLabel: 'perimeters',
    copyLabel: 'Copy settings',
    copiedLabel: 'Slicer block copied.',
    safeRangeLabel: 'Safe line width range',
    compareLabel: 'Nearest perimeter options',
    perimetersColumn: 'Perimeters',
    lineWidthColumn: 'Line width',
    realThicknessColumn: 'Real thickness',
    errorColumn: 'Error',
    messageExact: 'The selected line width lands within 0.05 mm of the CAD wall. This is a good perimeter-only wall.',
    messageAdjust: 'The current width leaves a measurable gap. Use the adjusted line width to make the wall close exactly with whole perimeters.',
    messageTooThin: 'The CAD wall is thinner than the nozzle diameter. Redesign the wall, use a smaller nozzle, or accept a non-structural single-line feature.',
    messageOutsideRange: 'No safe 80-120% nozzle-width adjustment can close this wall exactly. Redesign the CAD wall or change nozzle size.',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: 'Why Wall Thickness Must Match Whole Perimeters', level: 2 },
    {
      type: 'paragraph',
      html: 'FDM slicers build a wall from discrete extrusion roads. A 1.20 mm CAD wall is not a continuous solid instruction; it becomes one, two, three, or more perimeters depending on line width, nozzle diameter, and slicer rules. If the math does not close, the slicer must choose between leaving a narrow internal gap, inserting a thin gap-fill path, over-extruding a region, or silently changing the toolpath order. Functional parts suffer because the wall that looked solid in CAD can contain a weak seam or an inconsistent bead inside the section.',
    },
    {
      type: 'paragraph',
      html: 'The useful equation is simple: <strong>real wall thickness = perimeter count x line width</strong>. The difficulty is choosing values that remain printable. A line width can usually move a little below or above nozzle diameter, but it cannot be arbitrary. This optimizer searches integer perimeter counts, measures the residual error against the CAD thickness, and proposes a line width adjustment only when the exact width stays inside a conservative 80-120% nozzle range.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0.05 mm', label: 'precision threshold used for the verdict' },
        { value: '80-120%', label: 'safe line width band around nozzle diameter' },
        { value: 'n x width', label: 'core wall thickness equation' },
        { value: '2 decimals', label: 'minimum practical slicer precision' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Perimeters are integer geometry',
      html: 'A slicer cannot print 2.6 normal perimeters. If a wall is too wide for two lines and too narrow for three, it needs gap-fill behavior or a corrected CAD dimension.',
    },
    { type: 'title', text: 'How to Choose CAD Wall Thickness for a 0.4 mm Nozzle', level: 2 },
    {
      type: 'paragraph',
      html: 'A 0.4 mm nozzle commonly uses a line width around 0.40-0.48 mm. With a 0.42 mm line width, two perimeters produce 0.84 mm, three perimeters produce 1.26 mm, and four perimeters produce 1.68 mm. A designed wall of 1.20 mm looks reasonable in CAD, but it is 0.06 mm away from three 0.42 mm perimeters. That is close, but not exact. The optimizer may suggest 3 perimeters at 0.40 mm, which closes the wall perfectly and remains exactly at nozzle diameter.',
    },
    {
      type: 'paragraph',
      html: 'For mechanical parts, it is often better to design walls as multiples of the intended line width instead of forcing the slicer to repair them. Common CAD wall targets for a 0.4 mm nozzle are around 0.8 mm for light shells, 1.2 mm for normal functional walls, 1.6 mm for stronger housings, and 2.0 mm or more for load-bearing features. The exact values should follow the slicer line width, not only the nominal nozzle diameter.',
    },
    {
      type: 'table',
      headers: ['Nozzle', 'Safe line width range', 'Good 2-wall targets', 'Good 3-wall targets'],
      rows: [
        ['0.2 mm', '0.16-0.24 mm', '0.32-0.48 mm', '0.48-0.72 mm'],
        ['0.4 mm', '0.32-0.48 mm', '0.64-0.96 mm', '0.96-1.44 mm'],
        ['0.6 mm', '0.48-0.72 mm', '0.96-1.44 mm', '1.44-2.16 mm'],
        ['0.8 mm', '0.64-0.96 mm', '1.28-1.92 mm', '1.92-2.88 mm'],
      ],
    },
    {
      type: 'tip',
      title: 'Design from the slicer profile backward',
      html: 'Before modeling snap fits, ribs, bosses, or enclosure walls, decide the nozzle and line width. Then set wall dimensions to clean multiples so the slicer does not invent gap-fill paths in critical areas.',
    },
    { type: 'title', text: 'Line Width Limits: Why 80 to 120 Percent Is a Safe Band', level: 2 },
    {
      type: 'paragraph',
      html: 'A nozzle can lay a bead slightly wider than its orifice because plastic is pressed against the previous layer and flattened into an oval road. It can also print a slightly narrower line, but too narrow asks the printer to create a controlled bead with limited lateral support. Both extremes have tradeoffs. Very wide lines can overpressure the hot end, smear corners, hide small features, and reduce dimensional accuracy. Very narrow lines can underfill walls, weaken bonding, and make extrusion consistency more sensitive to pressure advance and filament diameter.',
    },
    {
      type: 'paragraph',
      html: 'The 80-120% range used here is intentionally conservative. Many slicers allow wider values for special modes, vase printing, or coarse nozzles, and experienced users may push beyond this range after testing. This tool is aimed at reliable mechanical wall planning, where the recommendation should be safe enough to copy into a normal profile without causing obvious under-extrusion or over-extrusion. If an exact match requires a line width outside the range, the tool reports the design as impractical instead of pretending the slicer can solve it cleanly.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Too narrow', description: 'The bead may not press enough material into the wall section.', points: ['Weak interline bonding', 'Visible gaps', 'Fragile thin walls'] },
        { title: 'Safe range', description: 'The bead stays close to physical nozzle behavior.', highlight: true, points: ['Predictable extrusion', 'Good dimensional control', 'Reusable profiles'] },
        { title: 'Too wide', description: 'The nozzle may push more plastic than the path can accept.', points: ['Bulged corners', 'Surface ridges', 'Higher back pressure'] },
      ],
    },
    {
      type: 'message',
      title: 'Safe does not mean calibrated',
      html: 'Even a mathematically perfect width needs a calibrated flow rate. If extrusion multiplier is wrong, the physical wall can still measure thick or thin with calipers.',
    },
    { type: 'title', text: 'Diagnosing Internal Wall Gaps in the Slicer Preview', level: 2 },
    {
      type: 'paragraph',
      html: 'The fastest way to identify a perimeter mismatch is to inspect the preview layer by layer. Look for a pale sliver between outer and inner walls, a single wandering gap-fill line, or an area where the slicer alternates between two and three lines along the same feature. These patterns are common in enclosure walls, bosses, clips, and thin ribs because the CAD dimension is often chosen visually rather than as a multiple of extrusion width.',
    },
    {
      type: 'paragraph',
      html: 'A wall gap is not always visible on the outside of the print. The part can look clean while the inside contains a narrow void that reduces stiffness. This matters for screw bosses, press-fit pins, brackets, drone frames, gears, and any part where load travels through the wall. If the gap sits between perimeters, the wall can split more easily because the load path crosses weakly bonded or missing material instead of continuous roads.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gap fill is a repair, not a wall plan',
      html: 'Modern slicers can insert thin gap-fill paths, but those paths are often printed with different speed, flow, and cooling behavior. For load-bearing geometry, a clean perimeter multiple is more predictable.',
    },
    {
      type: 'summary',
      title: 'Preview checklist',
      items: [
        'Switch to line type or feature preview, not only solid color preview.',
        'Inspect walls at holes, ribs, bosses, and thin tabs.',
        'Check whether gap-fill paths appear in structural regions.',
        'Compare the CAD wall thickness with whole multiples of line width.',
        'Use adjusted line width only when it stays inside the nozzle safe range.',
      ],
    },
    { type: 'title', text: 'When the Result Is Exact, Requires Adjustment, or Impossible', level: 2 },
    {
      type: 'paragraph',
      html: 'The verdict uses a 0.05 mm residual threshold because most desktop FDM systems have practical variation from flow, filament diameter, thermal expansion, motion calibration, and measurement technique. If the current settings land within that band, the tool calls the result exact. It does not mean every printed sample will measure perfectly to the micron; it means the slicer geometry itself is aligned closely enough that remaining error is likely calibration or material behavior rather than perimeter arithmetic.',
    },
    {
      type: 'paragraph',
      html: 'Requires adjustment means the current line width leaves a larger residual, but the same perimeter count can close the wall with a safe width. For example, a 1.20 mm wall at 0.42 mm line width gives three lines at 1.26 mm. Adjusting to 0.40 mm makes three lines exactly 1.20 mm. Impossible means either the wall is thinner than the nozzle diameter or the exact line width needed would fall outside the safe nozzle band. In that case, redesigning the wall or changing nozzle size is better than forcing the slicer.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Perimeter', definition: 'A wall loop generated by the slicer around the outline of a layer.' },
        { term: 'Line width', definition: 'The commanded width of one extruded road, sometimes called extrusion width.' },
        { term: 'Residual', definition: 'The absolute difference between CAD wall thickness and the thickness produced by whole perimeters.' },
        { term: 'Gap fill', definition: 'A slicer-generated path used to occupy leftover space that normal perimeters do not fill cleanly.' },
      ],
    },
    {
      type: 'proscons',
      title: 'Adjusting line width versus editing CAD',
      items: [
        { pro: 'Line width adjustment is fast and can preserve the model file.', con: 'It affects every wall using that profile unless scoped carefully.' },
        { pro: 'CAD editing makes the design intent explicit for future prints.', con: 'It takes longer when many features are already constrained.' },
        { pro: 'Changing nozzle size can rescue very thin or very thick walls.', con: 'It changes detail resolution, print time, and extrusion volume.' },
      ],
    },
    { type: 'title', text: 'Applying the Output in Cura, PrusaSlicer, and Similar Slicers', level: 2 },
    {
      type: 'paragraph',
      html: 'The copy block intentionally contains only the two values that matter: perimeter count and line width. In Cura, perimeter count maps to wall line count, and line width maps to wall line width or global line width depending on profile structure. In PrusaSlicer and derivatives, use perimeters for the loop count and extrusion width for the line width. If the slicer has separate external and internal perimeter widths, keep them equal for the wall being optimized unless you understand how the slicer combines them.',
    },
    {
      type: 'paragraph',
      html: 'After changing slicer settings, re-slice and inspect the same wall in preview. The visual preview should show the expected number of roads filling the CAD envelope without a narrow leftover channel. Then print a small test coupon that includes the same wall thickness and measure it after cooling. If the coupon is consistently off but the preview is correct, tune flow or horizontal expansion separately; do not use perimeter count to compensate for a calibration error.',
    },
    {
      type: 'card',
      title: 'Mechanical tolerance workflow',
      html: 'Use this order for functional parts: choose nozzle, choose safe line width, model wall multiples, slice without internal gaps, print a coupon, measure actual wall, then adjust flow or dimensional compensation. Skipping the geometry step makes calibration chase a moving target.',
    },
    {
      type: 'table',
      headers: ['Slicer concept', 'Typical field name', 'What to enter'],
      rows: [
        ['Loop count', 'Wall line count / Perimeters', 'Recommended perimeter integer'],
        ['Extrusion road width', 'Line width / Extrusion width', 'Recommended or adjusted line width'],
        ['Thin repair paths', 'Gap fill / Fill gaps between walls', 'Avoid relying on it for structural walls'],
        ['Dimensional correction', 'Horizontal expansion / XY compensation', 'Tune only after wall math is clean'],
      ],
    },
    { type: 'title', text: 'Special Cases: Thin Walls, Ribs, Bosses, and Tolerance Features', level: 2 },
    {
      type: 'paragraph',
      html: 'Thin walls below nozzle diameter are not normal perimeter walls. Slicers may print them with thin-wall detection, single extrusion lines, or variable line width, but the result is usually cosmetic or lightly loaded. For a structural rib, design the rib thick enough for at least two stable lines or accept that it behaves like a flexible web. For screw bosses, use enough perimeters that the screw load travels through continuous loops rather than a gap-filled annulus.',
    },
    {
      type: 'paragraph',
      html: 'Tolerance features need extra care because wall correction can interact with hole size and fit. If a clip or snap feature is designed as a 0.9 mm wall and the profile uses 0.45 mm lines, two perimeters are clean. If the same clip is 1.0 mm, the slicer may add a small middle path that changes stiffness and fit. A mathematically cleaner wall often makes spring features more repeatable because every copy uses the same number of continuous roads.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Do not force impossible thin geometry',
      html: 'If the CAD wall is below nozzle diameter, the correct fix is usually a smaller nozzle, a thicker feature, or a different manufacturing method. Forcing a wide nozzle into a sub-nozzle wall creates unpredictable bead shape.',
    },
    {
      type: 'list',
      items: [
        'Use at least two clean lines for ribs that carry bending load.',
        'Use three or more perimeters around screw bosses when space allows.',
        'Avoid leftover channels in clips because they become crack starters.',
        'Validate press fits with the same line width used in the final part.',
      ],
    },
  ],
  faq: [
    {
      question: 'How many perimeters should a 1.2 mm wall use with a 0.4 mm nozzle?',
      answer: 'Usually three perimeters. With a 0.40 mm line width, three perimeters equal 1.20 mm exactly. With a 0.42 mm line width, the real thickness is 1.26 mm.',
    },
    {
      question: 'Why does the calculator limit line width to 80-120% of nozzle diameter?',
      answer: 'That range keeps recommendations in a conservative printable zone. Wider or narrower values can work in special cases, but they are less reliable for mechanical wall planning.',
    },
    {
      question: 'Should I change CAD thickness or slicer line width?',
      answer: 'If the adjustment is small and inside the safe range, changing line width is quick. For repeated production parts, editing CAD to clean multiples is usually more maintainable.',
    },
    {
      question: 'Does an exact verdict guarantee the printed part will measure exact?',
      answer: 'No. It means the slicer geometry closes cleanly. Flow calibration, material shrinkage, temperature, and XY compensation still affect the physical measurement.',
    },
    {
      question: 'What should I do when the result is impossible?',
      answer: 'Use a smaller nozzle, redesign the wall thickness as a multiple of a safe line width, or accept that the feature will be a non-structural thin-wall path.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Enter nozzle diameter', text: 'Choose a common nozzle size or type the measured nozzle diameter.' },
    { name: 'Set line width', text: 'Enter the slicer wall line width; the tool constrains it to a safe nozzle range.' },
    { name: 'Enter CAD wall thickness', text: 'Use the designed wall thickness from the model.' },
    { name: 'Copy slicer settings', text: 'Apply the recommended perimeter count and adjusted line width if required.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Wall and Perimeter Optimizer',
      description: 'Calculate FDM perimeter count and safe line width for exact CAD wall thickness.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many perimeters should a 1.2 mm wall use with a 0.4 mm nozzle?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Usually three perimeters. With a 0.40 mm line width, three perimeters equal 1.20 mm exactly.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to optimize FDM wall thickness for whole perimeters',
      step: [
        { '@type': 'HowToStep', text: 'Enter the nozzle diameter.' },
        { '@type': 'HowToStep', text: 'Enter slicer line width.' },
        { '@type': 'HowToStep', text: 'Enter CAD wall thickness.' },
        { '@type': 'HowToStep', text: 'Apply the recommended perimeters and line width.' },
      ],
    },
  ],
};
