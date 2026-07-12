import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'e-steps-calibration-calculator',
  title: 'E steps Calibration Calculator and Extruder Diagnostic Assistant',
  description: 'Calculate corrected extruder E-steps from a measured extrusion test and flag deviations above 5% before they hide a mechanical problem.',
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    inputGroupLabel: 'Extrusion test',
    currentEStepsLabel: 'Current E-steps',
    requestedLengthLabel: 'Requested extrusion length',
    actualLengthLabel: 'Measured extrusion length',
    newEStepsLabel: 'New E-steps',
    errorLabel: 'Detected error',
    commandLabel: 'Console command',
    copyCommandLabel: 'Copy M92 command',
    copiedLabel: 'Copied',
    normalStatusLabel: 'Calibration range',
    criticalStatusLabel: 'Critical deviation',
    normalMessage: 'The measured deviation is within 5%. Apply the value only after confirming the filament path is clean and repeat the test once.',
    criticalMessage: 'Critical warning: The deviation is above 5%. A mechanical fault is likely: clog, extruder slip, or incorrect idler spring tension. Inspect the hardware before applying these new E-steps.',
    diagnosticTitle: 'Mechanical checks before saving firmware',
    diagnosticOne: 'Heat the nozzle to the real printing temperature and extrude slowly with the hotend clear.',
    diagnosticTwo: 'Check the drive gear, idler tension, filament bite marks, and spool drag before trusting the number.',
    diagnosticThree: 'Repeat the 100 mm test after cleaning or tension changes; do not tune firmware around a slipping extruder.',
    referenceTitle: 'Decision rule',
    formulaLabel: 'Formula',
    formulaText: 'current E-steps x requested / measured',
    safeBandLabel: '0-5% error',
    safeBandText: 'Apply only after one repeatable test.',
    criticalBandLabel: '> 5% error',
    criticalBandText: 'Inspect clogging, slip, tension, and drag first.',
    repeatTestLabel: 'After M92',
    repeatTestText: 'Run the same extrusion test again before saving.',
    mmUnit: 'mm',
    inchUnit: 'in',
    stepsUnit: 'steps/mm',
    controlsAriaLabel: 'E-steps calibration inputs',
    resultsAriaLabel: 'E-steps calibration results',
  },
  seo: [
    { type: 'title', text: 'What E-steps Calibration Actually Measures', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps define how many stepper motor steps the extruder firmware sends for one millimeter of filament movement. In Marlin the value is usually stored with <code>M92 E...</code>, while Klipper often expresses the same physical relationship through rotation distance. The measurement is simple: command a known extrusion length, physically measure how much filament moved, then correct the firmware value by the ratio between requested and actual movement. The formula is <code>new E-steps = current E-steps * requested length / actual length</code>.',
    },
    {
      type: 'paragraph',
      html: 'The dangerous part is interpretation. A calculator can produce a number from any measurement, including a bad one. If the extruder is grinding filament, if the nozzle is partially blocked, or if the idler spring is too loose, the measured extrusion length will be low. Raising E-steps may appear to fix the 100 mm test, but it does not fix the hardware. It forces the motor to push harder or longer through the same fault, which can make real prints inconsistent.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'common requested length for a repeatable extruder test' },
        { value: '5%', label: 'diagnostic threshold where hardware inspection should come first' },
        { value: 'M92', label: 'Marlin command used to set steps per unit' },
        { value: '2 decimals', label: 'output precision used for the copied E-axis command' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do Not Calibrate Around a Mechanical Fault',
      html: 'A deviation above 5% is large enough that the printer may be under-extruding or over-extruding for a reason that is not firmware math. Inspect the extruder path before saving a new value with <code>M500</code> or editing a Klipper configuration.',
    },
    { type: 'title', text: 'How to Run a Clean 100 mm Extrusion Test', level: 2 },
    {
      type: 'paragraph',
      html: 'A reliable E-steps test starts with a hot nozzle and a stable filament path. Heat the hotend to a normal printing temperature for the filament, because cold extrusion protection exists for a reason and because molten plastic back-pressure changes the load on the extruder. Mark the filament at a known distance above the extruder inlet, command a slow 100 mm extrusion, and measure the remaining distance to determine how much filament actually moved.',
    },
    {
      type: 'list',
      items: [
        'Use a slow extrusion feed rate so the hotend can melt material without building abnormal pressure.',
        'Make the filament mark with calipers or a fine marker instead of estimating by eye.',
        'Keep the spool free to rotate so spool drag does not look like an E-steps error.',
        'Run the test with the same filament diameter and material type you normally print.',
        'Repeat the measurement after changing drive gear tension, nozzle condition, or hotend temperature.',
      ],
    },
    {
      type: 'table',
      headers: ['Measured result', 'Error', 'First interpretation', 'Best next action'],
      rows: [
        ['98 to 102 mm', '0 to 2%', 'Small normal measurement spread', 'Repeat once and average if needed'],
        ['95 to 105 mm', '2 to 5%', 'Firmware correction may be reasonable', 'Check path, then apply calculated value'],
        ['Below 95 mm', 'Above 5%', 'Slip, clog, drag, or pressure problem likely', 'Inspect mechanics before firmware'],
        ['Above 105 mm', 'Above 5%', 'Wrong previous value or measurement setup issue likely', 'Verify units and repeat test'],
      ],
    },
    {
      type: 'tip',
      title: 'Use one clean variable',
      html: 'Do not change flow rate, extrusion multiplier, pressure advance, and E-steps at the same time. E-steps should describe motor-to-filament movement, while flow and extrusion multiplier tune slicer material output for a specific filament and print profile.',
    },
    { type: 'title', text: 'Why the 5% Warning Matters', level: 2 },
    {
      type: 'paragraph',
      html: 'A 5% extrusion error means a 100 mm command produced less than 95 mm or more than 105 mm of real motion. That is not a tiny rounding issue. With a typical 1.75 mm filament, 5 mm of missing feed over a short test represents a visible material deficit. In real prints it can show as weak walls, sparse top surfaces, inconsistent first layers, and poor dimensional reliability. More importantly, under-extrusion at this scale often has a physical cause.',
    },
    {
      type: 'paragraph',
      html: 'The diagnostic assistant flags that threshold because firmware correction can hide symptoms. If the hobbed gear is packed with plastic dust, the motor may skip only during fast moves. If the nozzle is partially clogged, a slow test may pass after a large correction but the printer will still fail during high-flow infill. If idler tension is too high, the filament can deform and jam downstream; if it is too low, it can slip. The right repair is mechanical, not a larger E-axis number.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Healthy calibration error',
          description: 'Small mismatch caused by previous firmware value, gear diameter tolerance, or measurement noise.',
          points: ['Usually within 5%', 'Repeatable across two tests', 'No clicking or filament dust', 'Correction remains modest'],
        },
        {
          title: 'Fault driven extrusion error',
          description: 'Large mismatch caused by the extruder failing to move filament as commanded.',
          highlight: true,
          points: ['Above 5%', 'Changes between repeated tests', 'Clicking, grinding, or bite marks', 'Often worse at higher speed'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Before accepting a critical correction',
      items: [
        'Inspect the nozzle for partial blockage and clean or replace it if extrusion curls or pulses.',
        'Brush the drive gear teeth and remove filament dust.',
        'Set idler tension so the gear grips without flattening the filament.',
        'Check spool drag, Bowden tube seating, and filament path friction.',
        'Run the same measurement again before changing firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500, and Klipper Rotation Distance', level: 2 },
    {
      type: 'paragraph',
      html: 'On Marlin-style firmware, <code>M92 E...</code> sets the extruder steps per millimeter for the current session. Many printers need <code>M500</code> afterward to save the value to EEPROM, otherwise the setting can disappear after reboot. Some locked or vendor-modified firmware builds may ignore EEPROM saves or require changing firmware source configuration instead. Always verify the value after reboot with <code>M503</code> if the printer supports it.',
    },
    {
      type: 'paragraph',
      html: 'Klipper commonly uses <code>rotation_distance</code> rather than E-steps in printer.cfg. The physical calibration idea is the same, but the numerical direction is inverted because rotation distance describes how much filament moves per motor rotation, not how many steps are needed per millimeter. This tool outputs an <code>M92</code> command because it is meant to be directly usable in Marlin consoles and compatible firmware interfaces. Klipper users can still use the measured error as a diagnostic signal before recalculating rotation distance.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'The number of motor steps firmware sends to move one millimeter of filament on the extruder axis.' },
        { term: 'M92', definition: 'A G-code command used by Marlin firmware to set steps per unit for one or more axes.' },
        { term: 'M500', definition: 'A Marlin command that saves current settings to EEPROM when supported by the printer.' },
        { term: 'Rotation distance', definition: 'Klipper setting that represents filament travel per full motor rotation.' },
        { term: 'Extrusion multiplier', definition: 'Slicer-level flow scaling for a material profile, separate from machine E-steps.' },
      ],
    },
    {
      type: 'card',
      title: 'Console command workflow',
      html: 'Send the copied <code>M92 E...</code> command, repeat the extrusion test, and only save the value after the measured length is repeatable. A single good number is weaker evidence than two consistent measurements.',
    },
    { type: 'title', text: 'Mechanical Problems That Look Like Bad E-steps', level: 2 },
    {
      type: 'paragraph',
      html: 'A partially clogged nozzle is the most common trap. The extruder motor may turn the correct amount while pressure builds in the hotend, causing the drive gear to chew the filament instead of advancing it. The measured extrusion length becomes short, the formula raises E-steps, and the next print may still under-extrude because the nozzle restriction remains. If extruded filament curls sharply, pulses, comes out thin, or changes direction as it leaves the nozzle, clean the hotend before calibrating.',
    },
    {
      type: 'paragraph',
      html: 'Extruder slip can come from the opposite tension errors. Too little spring force lets the gear spin against the filament. Too much spring force can ovalize soft filament, increase friction in a Bowden tube, or create deep bite marks that jam at the heat break entrance. Flexible filament is especially sensitive. The diagnostic threshold exists to make the user pause and inspect these conditions before converting a traction problem into a firmware number.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Critical symptoms during the test',
      html: 'Stop and inspect hardware if the extruder clicks, filament dust appears, the motor becomes unusually hot, extrusion comes out in pulses, or the measured length changes by several millimeters between repeated 100 mm tests.',
    },
    {
      type: 'proscons',
      title: 'Correcting E steps after a large error',
      items: [
        { pro: 'Can restore accurate filament feed when the old firmware value was genuinely wrong.', con: 'Can hide a slipping drive gear or clogged nozzle when used without inspection.' },
        { pro: 'Simple command is easy to apply and repeat.', con: 'Wrong saved value affects every slicer profile and every material.' },
        { pro: 'Useful after changing extruder gear ratio or motor hardware.', con: 'Not a replacement for flow calibration on printed walls.' },
      ],
    },
    { type: 'title', text: 'E-steps vs Flow Calibration', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps calibration belongs to the machine layer. It asks whether the extruder mechanism moves the requested length of raw filament. Flow calibration belongs to the print profile layer. It asks whether a specific filament, temperature, nozzle, line width, and slicer strategy produce the intended wall thickness and surface quality. Mixing the two creates confusing profiles: a printer can pass a 100 mm E-steps test and still need a 0.96 extrusion multiplier for one PETG brand.',
    },
    {
      type: 'paragraph',
      html: 'Calibrate E-steps after changing extruder hardware, motor steps, microstepping, gear ratio, or drive gear diameter. Calibrate flow after changing filament brand, color, nozzle size, temperature, or slicer line width. Pressure advance, linear advance, and retraction are separate pressure-control tools and should be tuned after the baseline extrusion movement is trustworthy.',
    },
    {
      type: 'table',
      headers: ['Calibration', 'Layer', 'Changes when', 'Do not use it to fix'],
      rows: [
        ['E-steps', 'Firmware or machine config', 'Extruder hardware or motor setup changes', 'Wet filament, nozzle clogs, slicer flow'],
        ['Flow multiplier', 'Slicer material profile', 'Filament brand, color, nozzle, temperature changes', 'Wrong gear ratio or slipping extruder'],
        ['Pressure advance', 'Firmware dynamics', 'Extruder path, speed, acceleration, material changes', 'Static under-extrusion'],
        ['Retraction', 'Slicer travel behavior', 'Stringing, oozing, travel artifacts change', 'Baseline feed distance errors'],
      ],
    },
    {
      type: 'message',
      title: 'Support technician rule',
      html: 'If a calibration value changes dramatically, assume the measurement is telling you about the machine. Inspect first, calculate second, save last.',
    },
    { type: 'title', text: 'Repeatability and Measurement Quality', level: 2 },
    {
      type: 'paragraph',
      html: 'A good E-steps result is repeatable. If one test measures 94 mm, the next measures 99 mm, and the next measures 96 mm, the average is less important than the spread. Variable results point toward traction, temperature, pressure, or measurement technique. Before saving a new value, repeat the extrusion at least twice after any mechanical change. The two results should be close enough that the new firmware number is not chasing noise.',
    },
    {
      type: 'tip',
      title: 'Measure above the extruder when possible',
      html: 'Marking filament before it enters the extruder avoids confusion from curved filament leaving the nozzle. Measure the distance from a fixed reference point to the mark before and after the command.',
    },
    {
      type: 'summary',
      title: 'Reliable calibration sequence',
      items: [
        'Heat the nozzle and clear old material.',
        'Mark filament with a precise reference distance.',
        'Extrude 100 mm slowly and measure actual movement.',
        'Use the calculator and inspect any error above 5%.',
        'Apply <code>M92 E...</code>, retest, then save only if repeatable.',
      ],
    },
  ],
  faq: [
    {
      question: 'What formula does this E-steps calculator use?',
      answer: 'It uses new E-steps = current E-steps * requested extrusion length / measured extrusion length.',
    },
    {
      question: 'Why does the tool warn above 5% error?',
      answer: 'A deviation above 5% is large enough to suggest a mechanical issue such as extruder slip, a partial clog, spool drag, or incorrect idler tension. Inspect hardware before saving a new firmware value.',
    },
    {
      question: 'Can I use the M92 command in Klipper?',
      answer: 'The copied M92 command is intended for Marlin-compatible firmware. Klipper usually uses rotation_distance, but the same measured error is still useful for diagnosing the extruder.',
    },
    {
      question: 'Should I save the new value immediately?',
      answer: 'No. Apply it temporarily, repeat the extrusion test, and save only after the measured movement is repeatable.',
    },
    {
      question: 'Is E-steps calibration the same as flow calibration?',
      answer: 'No. E-steps calibrate machine movement. Flow or extrusion multiplier calibrates slicer material output for a specific filament and print profile.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Enter current E-steps', text: 'Read the current extruder steps per millimeter from firmware or printer settings.' },
    { name: 'Run an extrusion test', text: 'Command a known length, normally 100 mm, with the hotend at printing temperature.' },
    { name: 'Measure actual movement', text: 'Enter the physically measured filament movement and review the detected error.' },
    { name: 'Inspect if needed', text: 'If error is above 5%, check hardware before applying the M92 command.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'E-steps Calibration Calculator and Extruder Diagnostic Assistant',
      description: 'Calculate corrected 3D printer extruder E-steps and flag large mechanical-risk deviations.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What formula does this E-steps calculator use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It uses new E-steps = current E-steps * requested extrusion length / measured extrusion length.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to calibrate 3D printer extruder E-steps',
      step: [
        { '@type': 'HowToStep', text: 'Enter the current E-steps value.' },
        { '@type': 'HowToStep', text: 'Command a known extrusion length, commonly 100 mm.' },
        { '@type': 'HowToStep', text: 'Measure the real filament movement and calculate the correction.' },
        { '@type': 'HowToStep', text: 'Inspect hardware first if the detected error is above 5%.' },
      ],
    },
  ],
};
