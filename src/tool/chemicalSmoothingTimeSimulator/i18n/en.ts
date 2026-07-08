import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ChemicalSmoothingTimeSimulatorUI } from '../ui';

export const content: ToolLocaleContent<ChemicalSmoothingTimeSimulatorUI> = {
  slug: 'abs-pvb-chemical-smoothing-time-calculator',
  title: 'ABS Acetone and PVB IPA Vapor Smoothing Time Calculator',
  description: 'Estimate conservative vapor exposure and drying time for ABS acetone smoothing or PVB isopropyl alcohol smoothing from chamber volume, temperature, part volume, and surface detail.',
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    materialLabel: 'Material',
    absLabel: 'ABS + acetone',
    pvbLabel: 'PVB + IPA',
    chamberVolumeLabel: 'Vapor chamber',
    chamberTemperatureLabel: 'Chamber temp',
    partVolumeLabel: 'Part volume',
    surfaceDetailLabel: 'Surface detail',
    fineDetailLabel: 'Fine details',
    balancedDetailLabel: 'Balanced',
    coarseDetailLabel: 'Heavy layer lines',
    presetsLabel: 'Presets',
    miniPresetLabel: 'Mini',
    displayPresetLabel: 'Display part',
    enclosurePresetLabel: 'Large enclosure',
    exposureLabel: 'Estimated exposure',
    dryTimeLabel: 'Post-smoothing dry',
    firstTrialLabel: 'First test pull',
    riskLabel: 'Detail risk',
    vaporMapLabel: 'Vapor intensity',
    chamberUnitMetric: 'L',
    chamberUnitImperial: 'gal',
    temperatureUnitMetric: 'C',
    temperatureUnitImperial: 'F',
    partUnitMetric: 'cm3',
    partUnitImperial: 'in3',
    secondsUnit: 's',
    minutesUnit: 'min',
    hoursUnit: 'h',
    controlsAriaLabel: 'Chemical smoothing inputs',
    resultsAriaLabel: 'Chemical smoothing results',
    recommendationGentle: 'gentle window',
    recommendationStandard: 'watch closely',
    recommendationAggressive: 'high detail-loss risk',
    safetyNote: 'Use this as a conservative planning estimate only. Solvent vapor is flammable and hazardous: work away from ignition sources, use ventilation and PPE, and start with a short test exposure.',
    copyButton: 'Copy smoothing plan',
    copiedButton: 'Copied',
    copiedSummaryTemplate: 'Chemical smoothing estimate: {minutes} min ({seconds} s) exposure, first test pull at {trialSeconds} s, dry for about {dryHours} h.',
  },
  seo: [
    { type: 'title', text: 'How to Estimate ABS Acetone Vapor Smoothing Time Without Melting Details', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS acetone vapor smoothing is a controlled surface dissolution process. Acetone vapor softens the outer skin of ABS, allowing visible FDM layer ridges to relax into a glossier surface. The useful window is narrow: too little exposure leaves layer lines unchanged, while too much exposure rounds edges, softens embossed text, closes small holes, and can make thin walls sag. A time estimate is therefore best treated as a <strong>starting window for short test pulls</strong>, not as a fixed recipe.',
    },
    {
      type: 'paragraph',
      html: 'The calculator uses five practical variables that strongly affect smoothing duration: polymer and solvent pair, chamber volume, chamber temperature, printed part volume, and surface detail level. Temperature matters because vapor pressure and solvent activity rise quickly as the chamber warms. Part size matters because larger parts present more surface area and thermal mass. Detail level matters because a miniature gear tooth, logo, or snap-fit tab can be ruined by a time that looks perfect on a plain rectangular enclosure.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '30-35%', label: 'sensible first test pull of the estimated time' },
        { value: 'ABS/PVB', label: 'common printable polymers for vapor smoothing' },
        { value: 'hours', label: 'drying time before handling or assembly' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Vapor smoothing is a finishing operation, not a dimensional calibration step',
      html: 'If a printed part must hold a bearing, thread, seal, snap fit, or press-fit insert, mask the critical area or validate the smoothing process on a sacrificial copy. Chemical smoothing changes edges and can change functional clearances.',
    },
    { type: 'title', text: 'ABS Acetone vs PVB IPA Vapor Smoothing', level: 2 },
    {
      type: 'paragraph',
      html: 'ABS is usually smoothed with acetone because acetone is an effective solvent for the surface of acrylonitrile butadiene styrene. PVB, often sold as a filament intended for transparent or glossy prints, is commonly smoothed with isopropyl alcohol. The visual goal is similar, but the process behavior is different. ABS with acetone can become glossy and rounded quickly, especially in a warm chamber. PVB with IPA is often more forgiving for gradual gloss development, but it can still lose sharpness if exposed for too long.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'ABS with acetone vapor',
          description: 'Fast, strong smoothing action with a high risk of softening small text, corners, pins, and thin walls when the chamber is warm.',
          points: ['Best for visible shells and props', 'Sensitive to temperature', 'Needs long off-gassing before enclosed use'],
        },
        {
          title: 'PVB with IPA vapor',
          description: 'Often chosen for glossy visual parts and translucent prints where a slower, more controllable smoothing response is desirable.',
          highlight: true,
          points: ['Useful for display pieces', 'Can preserve detail better with short cycles', 'Dry thoroughly before polishing or packaging'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Material', 'Typical solvent', 'Process character', 'Main failure mode'],
      rows: [
        ['ABS', 'Acetone', 'Fast surface softening and strong gloss', 'Rounded edges, sagging thin features, closed holes'],
        ['PVB', 'Isopropyl alcohol', 'More gradual gloss and haze reduction', 'Sticky surface, smeared texture, softened fine detail'],
        ['ASA', 'Acetone or other solvents', 'Similar family to ABS but formulation dependent', 'UV-stable parts can still lose crisp edges'],
        ['PLA/PETG', 'Not suitable for this calculator', 'Common solvents do not behave like ABS/PVB smoothing', 'Poor finish or unsafe solvent experimentation'],
      ],
    },
    {
      type: 'tip',
      title: 'Use the material setting as a solvent pair, not just a plastic name',
      html: 'Select ABS when the process is acetone vapor smoothing and PVB when the process is IPA vapor smoothing. Different filament blends, additives, pigments, and annealing history can shift the real response, so test with the exact spool used for the final print.',
    },
    { type: 'title', text: 'Why Chamber Volume Changes Chemical Smoothing Duration', level: 2 },
    {
      type: 'paragraph',
      html: 'Chamber volume affects how quickly vapor concentration builds and how evenly it surrounds the printed part. A tiny jar can become aggressive quickly because a small amount of solvent occupies a small headspace. A larger chamber usually needs more time to reach the same effective vapor environment, but it can be more uniform if the solvent source is distributed and the part is raised above liquid contact. The calculator increases exposure time gently as chamber volume grows, because the relationship is real but not perfectly linear in home finishing setups.',
    },
    {
      type: 'paragraph',
      html: 'Uniformity matters as much as average concentration. A part placed too close to a solvent-soaked towel, puddle, or heated plate can receive a directional attack: one face becomes glossy and soft while the opposite side remains matte. A taller chamber can also create gradients, especially if vapor condenses on the lid and drips. The safest interpretation of a calculated time is therefore a scheduled inspection interval: remove the part, inspect the wet gloss, and stop before crisp features begin to flow.',
    },
    {
      type: 'list',
      items: [
        'Raise the part on a solvent-resistant stand so it never touches liquid solvent.',
        'Keep absorbent solvent sources away from the model surface to avoid one-sided overexposure.',
        'Use a chamber large enough that vapor can circulate around all visible faces.',
        'Avoid dripping condensation from the lid; droplets create scars, craters, and glossy spots.',
        'Do not increase solvent amount endlessly to compensate for a large chamber; concentration and safety risk rise together.',
      ],
    },
    {
      type: 'card',
      title: 'A larger chamber is not automatically safer',
      html: 'Large sealed volumes can hold more flammable vapor. A larger chamber may slow smoothing, but it can also create a larger hazardous atmosphere. Use the smallest practical chamber that gives the part clearance and even exposure.',
    },
    { type: 'title', text: 'Temperature, Vapor Pressure, and Detail Loss', level: 2 },
    {
      type: 'paragraph',
      html: 'Temperature is one of the strongest inputs because solvent evaporation increases as the chamber warms. A few degrees can change the finish from slow satin smoothing to rapid gloss and edge rounding. Warm acetone vapor around ABS is especially unforgiving: the surface can go from matte to wet-looking to softened in a short interval. The calculator shortens exposure time as chamber temperature rises, and it raises the risk score when temperatures climb above a normal room-temperature reference.',
    },
    {
      type: 'paragraph',
      html: 'Active heating is where many hobby smoothing processes become unsafe. Acetone and IPA vapors are flammable, and improvised heaters, switches, relays, sparks, hot plates, and poorly sealed electronics can create serious fire risk. If temperature is controlled at all, it should be done with equipment designed for hazardous vapor contexts, not with an exposed heater inside a sealed container. For most users, room-temperature smoothing with short inspections is the more defensible workflow.',
    },
    {
      type: 'table',
      headers: ['Chamber condition', 'Expected behavior', 'Practical response'],
      rows: [
        ['Cool room below 18 C', 'Slow vapor action and delayed gloss', 'Use longer intervals but inspect for uneven condensation'],
        ['Room temperature 20-25 C', 'Predictable baseline for most tests', 'Start with the calculator estimate and first test pull'],
        ['Warm chamber 26-32 C', 'Faster softening and higher detail risk', 'Shorten cycles and avoid fine functional parts'],
        ['Hot or actively heated chamber', 'Very aggressive vapor environment', 'Do not improvise; fire and overexposure risks rise sharply'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Never use open flame or exposed heating elements',
      html: 'Acetone and isopropyl alcohol vapors can ignite. Keep smoothing chambers away from flames, sparks, hot tools, switches that arc, brushed motors, heaters not rated for vapor service, and static-prone handling.',
    },
    { type: 'title', text: 'Part Volume, Surface Area, and Geometry Sensitivity', level: 2 },
    {
      type: 'paragraph',
      html: 'The input labeled part volume is a practical proxy for overall part size. It is not a perfect substitute for surface area, but it is easy to estimate from slicer statistics and usually tracks whether the print is a tiny knob, a display figurine, or a large enclosure panel. Larger parts often need longer exposure to develop an even visual finish, but they also have more edges, corners, and thin sections that may show uneven solvent uptake.',
    },
    {
      type: 'paragraph',
      html: 'Geometry can dominate the result. A smooth cylindrical vase and a lattice bracket can have the same volume but completely different smoothing tolerance. Thin ribs, sharp embossed lettering, small holes, internal channels, dovetails, and clips soften faster than broad flat surfaces. When the part has critical geometry, use the fine-detail setting even if layer lines are visible, then repeat short cycles rather than attempting one long exposure.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Vapor smoothing', definition: 'A finishing process where solvent vapor softens only the outer surface of a polymer print.' },
        { term: 'Overexposure', definition: 'A smoothing interval long enough to round details, deform thin walls, or leave a sticky surface.' },
        { term: 'Off-gassing', definition: 'The period after smoothing when absorbed solvent evaporates from the softened surface.' },
        { term: 'Surface detail', definition: 'Small geometry such as text, texture, holes, ridges, clips, and sharp edges that can be lost during smoothing.' },
        { term: 'Sacrificial coupon', definition: 'A small test print made from the same filament and settings to validate solvent response before finishing the real part.' },
      ],
    },
    {
      type: 'summary',
      title: 'Geometry rules for choosing detail level',
      items: [
        'Use fine detail for text, gears, small holes, snap fits, threads, or thin walls.',
        'Use balanced for decorative parts with moderate layer lines and no tight fits.',
        'Use heavy layer lines only for simple shapes where rounded edges are acceptable.',
        'Split complex models into masked and unmasked zones when only the outer shell needs gloss.',
      ],
    },
    { type: 'title', text: 'Reading the Calculator Outputs', level: 2 },
    {
      type: 'paragraph',
      html: 'The exposure output is the estimated total vapor time for a conservative first pass. It is shown in minutes and seconds because short finishing windows are easier to manage with a timer. The first test pull is deliberately shorter, usually about one third of the calculated exposure. Pulling the part early lets you check whether the surface is beginning to gloss before detail loss becomes permanent.',
    },
    {
      type: 'paragraph',
      html: 'The drying time estimates how long the print should sit before close handling, assembly, painting, packaging, or sealing. Drying is not just about the surface feeling dry. Solvent can remain in softened polymer and continue to affect fit, odor, paint adhesion, and mechanical feel. ABS parts smoothed with acetone often need longer off-gassing than PVB parts smoothed with IPA, especially when the part is thick or the exposure was aggressive.',
    },
    {
      type: 'proscons',
      title: 'One long exposure vs several short cycles',
      items: [
        { pro: 'A single exposure is faster and easier to schedule.', con: 'It gives little warning before fine features soften.' },
        { pro: 'Short cycles make it easier to stop at a satin or semi-gloss finish.', con: 'They require more handling and repeated chamber opening.' },
        { pro: 'Multiple inspections reduce the chance of destroying a one-off print.', con: 'The finish may be slightly less uniform if the part cools or dries between cycles.' },
      ],
    },
    {
      type: 'message',
      title: 'Best use of the estimate',
      html: 'Set a timer for the first test pull, inspect the part under raking light, then continue in short increments. Stop while layer lines are still barely visible; the surface often continues to relax for a short time after removal.',
    },
    { type: 'title', text: 'Safe Workflow for ABS and PVB Chemical Smoothing', level: 2 },
    {
      type: 'paragraph',
      html: 'A safe workflow starts before solvent is opened. Print a small coupon with the same filament, layer height, wall count, and cooling settings. Clean the final part so dust and oils do not become trapped under the softened skin. Prepare a non-reactive stand, timer, gloves compatible with the solvent, eye protection, ventilation, and a place where the part can dry without being touched. Keep solvent containers closed when not actively charging the chamber.',
    },
    {
      type: 'list',
      items: [
        'Confirm that the filament is actually ABS or PVB, not PLA, PETG, PC blend, or unknown recycled material.',
        'Remove supports and sand only before smoothing; sanding after smoothing can cut through the gloss unevenly.',
        'Mask holes, bearing seats, threads, and mating surfaces if dimensions matter.',
        'Start with the first test pull time, then add short intervals if the finish is still too matte.',
        'Dry the part in a ventilated area until solvent odor and tackiness are gone.',
        'Dispose of solvent wipes and contaminated materials according to local hazardous waste rules.',
      ],
    },
    {
      type: 'tip',
      title: 'Do not judge the finish while the surface is wet',
      html: 'A freshly exposed ABS or PVB surface can look glossier than it will after drying. Inspect both gloss and geometry: if corners look swollen or small text is becoming soft, stop even if layer lines are still faintly visible.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ventilation is part of the process time',
      html: 'Post-smoothing drying should happen where vapors cannot accumulate. A part placed immediately into a drawer, shipping bag, display case, or electronics enclosure can retain odor and solvent longer than expected.',
    },
    { type: 'title', text: 'Common Problems and Corrective Actions', level: 2 },
    {
      type: 'table',
      headers: ['Symptom', 'Likely cause', 'Next adjustment'],
      rows: [
        ['Layer lines still sharp', 'Exposure too short or chamber too cool', 'Repeat with short increments rather than doubling time'],
        ['Edges rounded or text blurred', 'Overexposure for the detail level', 'Use fine-detail setting, lower temperature, or mask features'],
        ['Sticky surface after drying', 'Too much solvent absorbed or insufficient ventilation', 'Extend drying time and reduce future exposure'],
        ['One side glossier than the other', 'Uneven vapor source or part too close to solvent', 'Raise part, distribute source, rotate only between cycles'],
        ['White haze or cloudy patches', 'Condensation, moisture, or uneven evaporation', 'Reduce chamber saturation and avoid lid drips'],
      ],
    },
    {
      type: 'paragraph',
      html: 'If a part becomes sticky, do not try to fix it by immediately adding more vapor. More solvent usually deepens the softened zone. Let the part dry fully, then decide whether a very brief follow-up cycle is worth the risk. If edges have already flowed, the shape cannot be restored by drying. For critical parts, the more reliable fix is reprinting with adjusted slicer settings and using a shorter finishing window.',
    },
    {
      type: 'card',
      title: 'Slicer settings that reduce smoothing time',
      html: 'Lower layer height, stable extrusion, dry filament, appropriate cooling, and well-tuned pressure advance reduce the amount of chemical work needed. Chemical smoothing should refine a print, not hide severe ringing, gaps, blobs, wet filament texture, or under-extrusion.',
    },
    {
      type: 'summary',
      title: 'Practical finishing checklist',
      items: [
        'Estimate exposure with the exact material, chamber, temperature, part size, and detail level.',
        'Run a sacrificial coupon or first test pull before committing the final part.',
        'Use short cycles when detail matters and stop before the surface loses crispness.',
        'Allow enough drying time for solvent odor, tackiness, and dimensional softness to disappear.',
        'Treat flammable vapor control as a safety requirement, not an optional convenience.',
      ],
    },
  ],
  faq: [
    {
      question: 'How long should ABS stay in acetone vapor?',
      answer: 'There is no universal time because chamber size, temperature, part geometry, and filament formulation matter. Use the calculator estimate as a starting point, then inspect at the shorter first test pull time before continuing.',
    },
    {
      question: 'Can PVB be smoothed with isopropyl alcohol vapor?',
      answer: 'Yes, many PVB filaments are designed for IPA smoothing. The process is usually more gradual than ABS with acetone, but overexposure can still make the surface sticky or blur fine details.',
    },
    {
      question: 'Does a warmer chamber reduce smoothing time?',
      answer: 'Yes. Warmer solvent vapor usually acts faster, but it also increases flammability and detail-loss risk. Avoid improvised heaters and keep vapor away from ignition sources.',
    },
    {
      question: 'How long should a smoothed part dry?',
      answer: 'Plan for hours, not minutes. ABS smoothed with acetone often needs longer off-gassing than PVB smoothed with IPA, especially for thick parts or aggressive exposures.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Choose the material and solvent pair', text: 'Select ABS for acetone vapor smoothing or PVB for IPA vapor smoothing.' },
    { name: 'Enter chamber conditions', text: 'Add vapor chamber volume and chamber temperature using metric or US units.' },
    { name: 'Describe the part', text: 'Enter approximate part volume and choose a surface detail level that matches the smallest features.' },
    { name: 'Use the first test pull', text: 'Inspect the part at the shorter test time before running the full estimated exposure.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'ABS Acetone and PVB IPA Vapor Smoothing Time Calculator',
      description: 'Estimate chemical vapor smoothing exposure and drying time for ABS acetone and PVB IPA finishing.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long should ABS stay in acetone vapor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use a conservative estimate based on chamber volume, temperature, part size, and detail level, then inspect at a shorter first test pull time.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to estimate chemical smoothing time for ABS or PVB prints',
      step: [
        { '@type': 'HowToStep', text: 'Select ABS with acetone or PVB with IPA.' },
        { '@type': 'HowToStep', text: 'Enter chamber volume and temperature.' },
        { '@type': 'HowToStep', text: 'Enter part volume and surface detail level.' },
        { '@type': 'HowToStep', text: 'Start with the first test pull and continue only if detail remains safe.' },
      ],
    },
  ],
};
