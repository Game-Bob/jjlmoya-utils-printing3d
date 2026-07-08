import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PowerSupplyEstimatorUI } from '../ui';

export const content: ToolLocaleContent<PowerSupplyEstimatorUI> = {
  slug: '3d-printer-power-supply-size-calculator',
  title: '3D Printer Power Supply Size Calculator for Hotends, Heated Beds, Motors, and 12V vs 24V Upgrades',
  description: 'Estimate PSU wattage and maximum current for a 3D printer upgrade by adding heated bed, hotend cartridge, stepper motor, auxiliary load, and safety headroom.',
  ui: {
    systemVoltageLabel: 'System voltage',
    bedPowerLabel: 'Heated bed',
    hotendPowerLabel: 'Hotend cartridge',
    motorsLabel: 'Motors',
    motorPowerLabel: 'Per motor',
    auxiliaryPowerLabel: 'Auxiliary load',
    safetyMarginLabel: 'Safety margin',
    totalLoadLabel: 'Direct load',
    psuRequiredLabel: 'PSU required',
    currentRequiredLabel: 'Maximum current',
    recommendedPsuLabel: 'nearest common PSU',
    utilizationLabel: 'load on selected size',
    thermalMapLabel: 'Thermal power map',
    bedSegmentLabel: 'Bed',
    hotendSegmentLabel: 'Hotend',
    motorsSegmentLabel: 'Motors',
    auxiliarySegmentLabel: 'Aux',
    headroomSegmentLabel: 'Headroom',
    scenarioLabel: 'Presets',
    scenarioBedSlinger: 'Bed slinger',
    scenarioCoreXY: 'CoreXY',
    scenarioLargeFormat: 'Large format',
    copyButton: 'Copy sizing summary',
    copiedButton: 'Copied',
    controlsAriaLabel: 'Power supply inputs',
    resultsAriaLabel: 'Power supply results',
    copiedSummaryTemplate: '3D printer PSU: {requiredWatts} W required, {currentAmps} A at {voltage} V, recommended {recommendedWatts} W.',
    wattsUnit: 'W',
    ampsUnit: 'A',
    voltsUnit: 'V',
    percentUnit: '%',
    countUnit: 'x',
  },
  seo: [
    { type: 'title', text: 'How to Size a 3D Printer Power Supply Without Guessing', level: 2 },
    {
      type: 'paragraph',
      html: 'A 3D printer power supply is sized from the loads that can be active at the same time: the heated bed, hotend heater cartridge, stepper motors, controller board, fans, LEDs, probes, chamber heater relays, and any auxiliary electronics. The basic electrical relationship is simple: <strong>watts equal volts multiplied by amps</strong>. A printer that needs 420 W on a 24 V system can demand about 17.5 A before any extra allowance for startup, regulation losses, or future upgrades.',
    },
    {
      type: 'paragraph',
      html: 'The mistake that causes many unstable printer builds is using the average printing consumption instead of the maximum controlled load. During a normal PLA print the bed may cycle at partial duty once it reaches temperature, but during heat-up the bed and hotend can both run at 100%. If the PSU is sized only from a smart plug reading taken mid-print, it can look adequate while still being marginal during warmup, ABS enclosure use, or a cold room recovery cycle.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: 'P = V x A', label: 'core sizing formula' },
        { value: '20-35%', label: 'typical practical headroom' },
        { value: '24V', label: 'lower current than 12V for the same watts' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not treat PSU wattage as permission to overload connectors',
      html: 'A 500 W supply does not make every terminal, PCB trace, XT connector, barrel jack, or screw block safe for 500 W. Current must be checked at the wire and connector level, especially for heated beds and chamber heaters.',
    },
    { type: 'title', text: 'What Loads Should Be Included in a PSU Wattage Calculation?', level: 2 },
    {
      type: 'paragraph',
      html: 'For an FDM printer, the heated bed is usually the dominant power load. A common 220 x 220 mm bed may be around 180-250 W, while a larger 300 x 300 mm bed can be 300-500 W depending on voltage and construction. AC beds are different because their heater power is not supplied by the printer DC PSU; in that case include only the DC control electronics, fans, hotend, motors, and the small current used by the solid-state relay input.',
    },
    {
      type: 'paragraph',
      html: 'The hotend heater cartridge is the next obvious load. Stock cartridges are often 30 W or 40 W, high-flow hotends frequently use 50 W or 60 W, and some high-temperature setups use 80 W or more. A cartridge with more watts does not automatically consume that power constantly, but the PSU must support the full rating because firmware can command 100% duty during warmup or recovery after a large extrusion demand.',
    },
    {
      type: 'list',
      items: [
        'Heated bed wattage from the bed specification or measured voltage and resistance.',
        'Hotend cartridge wattage from its rating, not from average duty cycle.',
        'Stepper motor allowance based on motor count and driver current settings.',
        'Auxiliary power for controller, fans, Raspberry Pi, LEDs, probes, relays, and toolhead boards.',
        'Safety margin for transient load, aging capacitors, enclosure heat, and future upgrades.',
      ],
    },
    {
      type: 'table',
      headers: ['Component', 'Typical range', 'Sizing note'],
      rows: [
        ['220 mm heated bed', '180-250 W', 'Often the largest DC load on a desktop printer.'],
        ['300 mm heated bed', '300-500 W', 'Check wire gauge and bed MOSFET path carefully.'],
        ['Hotend cartridge', '30-80 W', 'Use the cartridge rating, not observed average power.'],
        ['Stepper motors', '6-15 W each', 'Depends on current limit, voltage, driver mode, and holding current.'],
        ['Fans and electronics', '10-60 W', 'Toolhead boards, LEDs, and single-board computers add up quickly.'],
      ],
    },
    { type: 'title', text: '12V vs 24V Power Supply Needs', level: 2 },
    {
      type: 'paragraph',
      html: 'For the same wattage, a 24 V printer needs half the current of a 12 V printer. A 360 W load draws 30 A at 12 V but only 15 A at 24 V. Lower current reduces voltage drop in wires, reduces heat in connectors, and gives bed and hotend circuits more practical headroom. This is why many modern 3D printers and upgrade boards prefer 24 V for heaters and motion electronics.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '12V systems',
          description: 'Useful for older printers and automotive-style accessories, but high bed power can require very high current.',
          points: ['Higher amperage for the same watts', 'More sensitive to connector resistance', 'Common on older RepRap-era machines'],
        },
        {
          title: '24V systems',
          description: 'Preferred for many modern printers because the same heater power is delivered with lower current.',
          highlight: true,
          points: ['Lower amperage for the same watts', 'Less voltage drop in wiring', 'Better suited to larger DC heated beds'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Use current as the wiring reality check',
      html: 'After calculating required watts, divide by voltage to get maximum current. That amp number is the value that matters for PSU terminals, fuses, switches, wire gauge, bed connectors, and board input ratings.',
    },
    {
      type: 'proscons',
      title: 'Changing voltage during an upgrade',
      items: [
        { pro: 'Moving from 12 V to 24 V can reduce current and connector heating for the same bed power.', con: 'Fans, LEDs, pumps, and some control boards may need replacement or buck converters.' },
        { pro: '24 V hotends and beds often reach temperature faster when correctly specified.', con: 'A mismatched 12 V heater on 24 V can be dangerously overpowered.' },
        { pro: 'Driver and motion systems often behave better with modern 24 V electronics.', con: 'Every accessory voltage must be audited before first power-up.' },
      ],
    },
    { type: 'title', text: 'How Much Safety Headroom Should a 3D Printer PSU Have?', level: 2 },
    {
      type: 'paragraph',
      html: 'A safety margin is not wasted capacity; it is operating space. Switching power supplies are most comfortable when they are not permanently driven at their nameplate rating in a warm enclosure. A printer PSU mounted under a heated chamber, next to a bed cable chain, or inside a poorly ventilated base can run hotter than the same supply on an open bench. Heat shortens capacitor life and can trigger shutdowns under load.',
    },
    {
      type: 'paragraph',
      html: 'For a typical desktop printer, 20% headroom is a reasonable minimum when the load estimate is accurate. For large beds, high-flow hotends, chamber fans, LED lighting, or future toolhead upgrades, 30-35% is more comfortable. For experimental printers, high-temperature machines, or builds that may add a second hotend, active chamber heating controls, or many accessories, sizing one common PSU step above the calculated requirement is usually the calmer engineering choice.',
    },
    {
      type: 'table',
      headers: ['Margin', 'Use case', 'Practical meaning'],
      rows: [
        ['10%', 'Tightly known loads, open frame, quality PSU', 'Works only when every load and wire path is already verified.'],
        ['20%', 'Normal desktop printer', 'Good baseline for a stable stock-style build.'],
        ['30%', 'Upgraded bed, high-flow hotend, enclosed electronics', 'Better thermal comfort and future flexibility.'],
        ['40%+', 'Large format or experimental printer', 'Useful when load assumptions may change later.'],
      ],
    },
    {
      type: 'card',
      title: 'Why a bigger PSU does not force more power into the printer',
      html: 'A regulated DC power supply offers voltage; the connected loads draw current according to resistance, duty cycle, and control electronics. A 600 W supply on a printer that needs 300 W does not push 600 W into the bed. It simply has enough capacity to provide the current without operating at its limit.',
    },
    { type: 'title', text: 'Heated Bed Power Draw and Thermal Behavior', level: 2 },
    {
      type: 'paragraph',
      html: 'Heated beds are resistive loads, so their theoretical power can be estimated from voltage and resistance using <code>P = V^2 / R</code>. If a 24 V bed has 2.4 ohms of resistance, it is approximately a 240 W bed. Real power varies with supply voltage, wiring loss, MOSFET resistance, and bed temperature because resistance can change slightly as the heater warms.',
    },
    {
      type: 'paragraph',
      html: 'A bed that cycles at 35% duty during a stable PLA print can still demand 100% duty at startup. For PSU sizing, use the full heater rating. For electricity cost estimation, average duty cycle is more useful. Mixing those two questions is a common source of under-sized power supplies: energy consumption over a two-hour print is not the same as instantaneous electrical capacity.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'AC bed exception',
      html: 'If the printer uses a mains-powered AC bed, do not include the bed wattage in the DC PSU load. Instead, size the AC wiring, fuse, relay, strain relief, grounding, and thermal protection separately. The DC PSU still powers the controller, hotend, motors, and accessories.',
    },
    {
      type: 'list',
      items: [
        'Insulated bed underside: less heat loss and lower average duty after warmup.',
        'Thick aluminum tooling plate: slower warmup but more even heat distribution.',
        'Large glass plate: more thermal mass, often longer heat-up at the same wattage.',
        'Cold room or open frame: more recovery power needed to maintain temperature.',
      ],
    },
    { type: 'title', text: 'Hotend, Motors, Fans, and Auxiliary Loads', level: 2 },
    {
      type: 'paragraph',
      html: 'Stepper motors are often overestimated or underestimated because their electrical behavior is not as simple as adding nameplate voltage and current. Modern chopper drivers regulate winding current, and the power taken from the PSU depends on driver settings, motor speed, holding current reduction, and mechanical load. For PSU sizing, a practical allowance of 8-15 W per active stepper is often adequate for common desktop printers, but very high current motors or many Z motors deserve a direct calculation from driver configuration.',
    },
    {
      type: 'paragraph',
      html: 'Auxiliary loads are easy to forget because each item is small: hotend fan, part cooling fan, controller fan, chamber circulation fans, LEDs, filament sensor, probe, mainboard, display, toolhead board, Raspberry Pi, camera, USB hub, and buck converter losses. A printer with a single board computer and enclosure lighting can add 20-40 W without feeling like a major electrical change.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Continuous rating', definition: 'The load a power supply is intended to deliver for long periods under specified cooling and temperature conditions.' },
        { term: 'Peak load', definition: 'A short-term demand that can be higher than average load, such as heat-up or simultaneous heater recovery.' },
        { term: 'Voltage drop', definition: 'The voltage lost across wires and connectors because real conductors have resistance.' },
        { term: 'Duty cycle', definition: 'The percentage of time a controlled heater is switched on during a control period.' },
        { term: 'Headroom', definition: 'Extra capacity above calculated load that keeps the PSU away from its limit.' },
      ],
    },
    {
      type: 'summary',
      title: 'Auxiliary load checklist',
      items: [
        'Add all fans at their rated wattage or voltage times current.',
        'Include single-board computers and cameras if powered from the printer PSU.',
        'Reserve power for LED strips, toolhead boards, relays, probes, and buck converter losses.',
        'Recalculate after adding enclosure heaters, extra extruders, or high-current part cooling.',
      ],
    },
    { type: 'title', text: 'Reading the Calculator Outputs', level: 2 },
    {
      type: 'paragraph',
      html: 'The direct load is the sum of the bed, hotend, motors, and auxiliary inputs before headroom. The PSU required value adds the selected safety margin. The maximum current value divides that requirement by system voltage, so it answers the practical wiring question: how many amps must the supply and input path safely carry at the chosen voltage?',
    },
    {
      type: 'paragraph',
      html: 'The recommended PSU size rounds up to a common wattage class. If the required value is 382 W, a 400 W supply may appear sufficient mathematically, but a 450 W or 500 W model may be preferable when it has better cooling, better terminals, recognized safety certifications, or a more honest continuous rating. The label wattage is only one part of PSU quality.',
    },
    {
      type: 'table',
      headers: ['Output', 'Use it for', 'Warning sign'],
      rows: [
        ['Required watts', 'Choosing PSU capacity', 'Value is within a few watts of the PSU label.'],
        ['Maximum current', 'Wire, fuse, and connector checks', 'Current exceeds board or terminal ratings.'],
        ['Recommended size', 'Shopping shortlist', 'Cheap no-name PSU claims high watts with tiny terminals.'],
        ['Utilization', 'Thermal comfort estimate', 'Continuous load is above roughly 80-85%.'],
      ],
    },
    {
      type: 'message',
      title: 'Practical purchase rule',
      html: 'Choose the first quality PSU size above the calculated requirement, then verify output voltage, current rating, cooling orientation, enclosure ventilation, protective earth, fuse strategy, and connector ratings before installation.',
    },
    { type: 'title', text: 'Common PSU Sizing Mistakes in 3D Printer Upgrades', level: 2 },
    {
      type: 'list',
      items: [
        'Using average smart-plug watts instead of maximum DC heater load.',
        'Forgetting that 12 V systems need twice the current of 24 V systems at the same wattage.',
        'Adding a larger bed but keeping the original board input connector and wire gauge.',
        'Installing a high-watt hotend cartridge without checking MOSFET, fuse, and firmware thermal protections.',
        'Powering a Raspberry Pi, camera, LEDs, and fans from the printer without adding auxiliary load.',
        'Buying a PSU by advertised peak wattage instead of continuous rating and safety certification.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Stop if wires or connectors heat up',
      html: 'Warm wires, browned terminals, melted housings, intermittent resets, or bed temperature drops during motion are not tuning issues. They are electrical symptoms that require inspection before more printing.',
    },
    {
      type: 'paragraph',
      html: 'The calculator estimates PSU capacity; it does not certify the whole electrical system. A safe printer also needs correct earthing, strain relief, fusing, ferrules where appropriate, crimped connectors rated for the actual current, firmware thermal runaway protection, and a wiring layout that keeps mains voltage separated from low-voltage electronics.',
    },
    {
      type: 'card',
      title: 'When to split power supplies',
      html: 'Large printers sometimes use separate supplies for bed, motion electronics, and accessories. Splitting can reduce current through one board and simplify service, but grounds, switching logic, fusing, and emergency stop behavior must be designed deliberately.',
    },
    { type: 'title', text: 'Worked Examples: Stock Printer, CoreXY Upgrade, and Large Bed', level: 2 },
    {
      type: 'paragraph',
      html: 'A compact bed-slinger with a 220 W bed, 40 W hotend, four motors at 10 W, and 25 W of electronics has a direct load of 325 W. With 25% headroom the required PSU capacity is about 406 W. On 24 V that is roughly 16.9 A, so a quality 450 W or 500 W 24 V PSU is a sensible target depending on connector layout and cooling.',
    },
    {
      type: 'paragraph',
      html: 'A CoreXY upgrade with a 300 W bed, 60 W high-flow hotend, five motors at 12 W, and 45 W auxiliary load totals 465 W before margin. With 30% headroom it needs about 605 W, or 25.2 A at 24 V. That build belongs in the 600-750 W class, and the bed wiring should be treated as a major current path rather than an afterthought.',
    },
    {
      type: 'paragraph',
      html: 'A large-format printer with a 600 W DC bed, 80 W hotend, six motors at 14 W, and 80 W auxiliary load reaches 844 W before margin. With 35% headroom the requirement is about 1139 W. At that point many builders consider an AC bed or separated power architecture because the DC current, wiring, fusing, and heat management become central design constraints.',
    },
    {
      type: 'summary',
      title: 'Final sizing workflow',
      items: [
        'List every load that can run during warmup or recovery.',
        'Calculate direct watts, then add realistic headroom.',
        'Convert watts to amps at the actual system voltage.',
        'Choose a quality continuous-rated PSU above the result.',
        'Verify wires, connectors, fuses, board ratings, and cooling before powering the printer.',
      ],
    },
  ],
  faq: [
    {
      question: 'How many watts does my 3D printer power supply need?',
      answer: 'Add the heated bed, hotend cartridge, motors, electronics, fans, and accessories, then add safety headroom. Many upgraded desktop 24 V printers land between 400 W and 600 W, while large beds can require much more.',
    },
    {
      question: 'Is 24V better than 12V for a 3D printer PSU?',
      answer: 'For the same wattage, 24 V uses half the current of 12 V. Lower current usually means less voltage drop and less connector heating, but all heaters, fans, boards, and accessories must be compatible with the chosen voltage.',
    },
    {
      question: 'Should I include the heated bed in the DC PSU calculation?',
      answer: 'Include it if it is a DC heated bed powered by the printer PSU. Do not include an AC mains bed in the DC PSU wattage; size its mains wiring, relay, fuse, and safety protections separately.',
    },
    {
      question: 'What safety margin should I use for PSU headroom?',
      answer: 'Use at least 20% for a normal known build. Use 30-35% for upgraded beds, high-flow hotends, enclosed electronics, or future accessories.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Enter heater loads', text: 'Add the rated wattage of the heated bed and hotend cartridge.' },
    { name: 'Add motion and accessories', text: 'Enter motor count, per-motor allowance, fans, boards, LEDs, and other auxiliary loads.' },
    { name: 'Choose voltage and margin', text: 'Select 12 V or 24 V and set a safety margin that matches the build risk.' },
    { name: 'Check watts and amps', text: 'Use required watts for PSU selection and maximum amps for wire, fuse, and connector checks.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '3D Printer Power Supply Size Calculator',
      description: 'Estimate 3D printer PSU wattage and current from bed, hotend, motor, auxiliary, and headroom loads.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many watts does my 3D printer power supply need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Add the heated bed, hotend cartridge, motors, electronics, fans, and accessories, then add safety headroom.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to size a 3D printer power supply',
      step: [
        { '@type': 'HowToStep', text: 'Enter heater loads.' },
        { '@type': 'HowToStep', text: 'Add motion and accessory loads.' },
        { '@type': 'HowToStep', text: 'Select system voltage and safety margin.' },
        { '@type': 'HowToStep', text: 'Choose a quality PSU above the calculated requirement.' },
      ],
    },
  ],
};
