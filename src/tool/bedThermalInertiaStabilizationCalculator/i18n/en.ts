import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'print-bed-thermal-inertia-stabilization-calculator',
  title: 'Print Bed Thermal Inertia Stabilization Calculator',
  description: 'Estimate how long to let a heated 3D printer bed rest after reaching setpoint, using plate material, thickness, target temperature, heater power, and bed size.',
  ui: {
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    materialLabel: 'Build plate material',
    borosilicateGlassLabel: 'Borosilicate glass',
    peiSpringSteelLabel: 'PEI spring steel',
    aluminumLabel: 'Aluminum tool plate',
    thicknessLabel: 'Plate thickness',
    targetTemperatureLabel: 'Target bed temperature',
    heaterPowerLabel: 'Heater power',
    bedSizeLabel: 'Heated area',
    presetsLabel: 'Presets',
    enderPresetLabel: 'Glass 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Aluminum 350',
    recommendedDelayLabel: 'Start-print delay',
    delayMarkerLabel: 'Delay',
    warmupTimeLabel: 'Ideal warm-up',
    plateMassLabel: 'Plate mass',
    energyStoredLabel: 'Stored heat',
    conductionLagLabel: 'Through-plate lag',
    conductivityLabel: 'Conductivity',
    readinessLabel: 'Readiness',
    readinessQuick: 'quick soak',
    readinessBalanced: 'normal soak',
    readinessSlow: 'long soak',
    controlsAriaLabel: 'Heated bed thermal inertia inputs',
    resultsAriaLabel: 'Heated bed stabilization results',
    copyButton: 'Copy bed delay',
    copiedButton: 'Copied',
    copiedSummaryTemplate: 'Bed stabilization estimate: wait {delay} s ({minutes} min) after setpoint; ideal warm-up is about {warmup} min and readiness is {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: 'C',
    temperatureUnitImperial: 'F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Why a Heated Bed Needs Stabilization After It Reaches Setpoint', level: 2 },
    {
      type: 'paragraph',
      html: 'A printer display usually reports the temperature measured near the thermistor, not the exact temperature of the top printing surface. On many machines the thermistor is bonded under the heater, embedded in the bed carrier, or placed away from the area where the first layer begins. The controller can show <strong>60 C</strong> while the top of a thick glass plate is still catching up. That delay is thermal inertia: the plate stores heat, moves heat through its thickness, and loses heat to the air at the same time.',
    },
    {
      type: 'paragraph',
      html: 'The first layer is unusually sensitive to this delay because adhesion depends on polymer viscosity, surface energy, and contact pressure. A bed that is still warming through the top surface can cause corners to lift, skirt lines to look dry, or Z offset to appear inconsistent even when the mesh and nozzle height are correct. Waiting a calculated heat-soak interval after the bed reaches setpoint is often more repeatable than increasing the setpoint randomly.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1.2', label: 'W/mK typical borosilicate glass conductivity' },
        { value: '16', label: 'W/mK approximate spring steel conductivity' },
        { value: '205', label: 'W/mK approximate aluminum conductivity' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'The delay is a surface estimate, not a PID autotune replacement',
      html: 'PID tuning controls how the heater follows the thermistor. Thermal stabilization estimates how long the print surface needs to become close to the thermistor-controlled setpoint. A well tuned PID loop can still need a heat-soak delay when the build plate is thick, poorly conductive, or loosely coupled to the heater.',
    },
    { type: 'title', text: 'Material Choice Dominates Bed Thermal Inertia', level: 2 },
    {
      type: 'paragraph',
      html: 'The calculator treats material as a strict input because glass, PEI spring steel, and aluminum are not interchangeable thermal systems. Borosilicate glass has low thermal conductivity and meaningful heat capacity, so the top surface can lag behind the heater side for a noticeable period. Spring steel is thinner and conducts better than glass, so it usually equalizes faster even though steel is dense. Aluminum conducts heat extremely well, which is why cast or machined aluminum beds are favored on larger printers, but a thick aluminum plate can still store a lot of energy.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Borosilicate glass',
          description: 'Low conductivity and moderate heat capacity create the longest surface delay, especially at 3-5 mm thickness.',
          points: ['Good flatness when supported well', 'Slow top-surface response', 'Sensitive to clips and local heater contact'],
        },
        {
          title: 'PEI spring steel',
          description: 'Thin steel sheets respond faster and usually need less rest time, but magnetic bases and adhesive layers add contact resistance.',
          highlight: true,
          points: ['Fast practical soak', 'Easy surface swaps', 'Magnet and adhesive stack still matters'],
        },
        {
          title: 'Aluminum plate',
          description: 'High conductivity spreads heat quickly across the bed; thickness and heater wattage become the main delay drivers.',
          points: ['Excellent lateral heat spreading', 'High stored energy on large beds', 'Best when heater coverage is uniform'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Build surface', 'Thermal behavior', 'Typical stabilization concern', 'Practical first-layer response'],
      rows: [
        ['4 mm borosilicate glass', 'Slow through-thickness conduction', 'Top surface lags the thermistor', 'Wait longer before probing or printing'],
        ['0.4-0.6 mm PEI spring steel', 'Thin conductive sheet', 'Magnet/adhesive interface controls lag', 'Short heat soak is usually enough'],
        ['5-8 mm aluminum', 'Fast conduction but high stored heat', 'Large mass takes time to reach equilibrium', 'Use a steady heat soak on large beds'],
        ['Composite stacks', 'Layer interfaces dominate', 'Air gaps and adhesives add thermal resistance', 'Measure real surface temperature when possible'],
      ],
    },
    {
      type: 'tip',
      title: 'Do not reuse a glass delay for spring steel',
      html: 'A delay that is correct for a 4 mm borosilicate plate may be excessive for a 0.5 mm PEI spring steel sheet. Conversely, a PEI sheet delay may be too short for glass and can make the first layer look like a Z offset problem.',
    },
    { type: 'title', text: 'How Thickness Changes Warm-Up Time and Surface Lag', level: 2 },
    {
      type: 'paragraph',
      html: 'Thickness affects two different parts of the process. First, a thicker plate has more mass, so it requires more energy to raise its average temperature. Second, heat must diffuse through a longer path before the top surface follows the heater side. The calculator estimates both the ideal warm-up energy and a through-plate diffusion lag, then combines them into a recommended delay after the printer reports that the bed has reached setpoint.',
    },
    {
      type: 'paragraph',
      html: 'The relationship is not linear for surface lag. Diffusion time rises with the square of thickness, which is why a small change from 3 mm to 4 mm glass can matter more than expected. A very thin steel sheet may equalize quickly, but the magnetic base, adhesive film, PEI coating, and any trapped air can still slow real transfer. On aluminum beds, the plate itself spreads heat quickly, yet the bed can remain globally unstable if heater coverage is patchy or the plate is large.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Thermal inertia', definition: 'The tendency of a plate to resist temperature change because it has mass and heat capacity.' },
        { term: 'Thermal diffusivity', definition: 'A material property that combines conductivity, density, and heat capacity to describe how quickly temperature changes move through it.' },
        { term: 'Heat soak', definition: 'A deliberate wait after reaching setpoint so the build surface, heater, carrier, and surrounding bed stack approach a steadier state.' },
        { term: 'Contact resistance', definition: 'Extra thermal resistance caused by imperfect contact, adhesive layers, magnets, clips, air gaps, or warped surfaces.' },
        { term: 'Setpoint overshoot', definition: 'A control event where the thermistor temperature rises above the target before settling, often unrelated to the top-surface temperature.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Thickness rules of thumb',
      items: [
        'Thin PEI spring steel sheets usually stabilize quickly once the heater and magnetic base are warm.',
        'Glass plates above 3 mm deserve a real delay before first-layer moves begin.',
        'Large aluminum plates may need heat soak because of total mass even when conduction is excellent.',
        'Air gaps under removable surfaces can dominate the calculation; clean mating faces and seat the plate consistently.',
      ],
    },
    { type: 'title', text: 'Heater Power, Bed Size, and Stored Heat', level: 2 },
    {
      type: 'paragraph',
      html: 'Heater power determines how quickly energy can enter the bed stack. A 220 W heater under a 235 mm glass bed has a very different power density than a 600 W silicone heater under a 300 mm aluminum plate. The calculator uses power, target temperature, bed area, and plate mass to estimate ideal warm-up time. It then applies a stabilization component because the surface usually continues changing after the thermistor-controlled system first reaches target.',
    },
    {
      type: 'paragraph',
      html: 'Power is not a cure for poor heat distribution. A powerful heater can raise the thermistor quickly while edges, clips, or unsupported zones lag behind. Large printers should consider heater coverage, insulation, bed mounting, chamber temperature, and whether probing begins immediately after the setpoint event. For ABS, ASA, nylon, and other warmer materials, a stable bed and chamber are often more important than simply reaching a high numeric bed temperature.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Likely thermal cause', 'Adjustment to try'],
      rows: [
        ['First skirt lines are dull or barely stick', 'Top surface is still cooler than the thermistor', 'Increase stabilization delay before first layer'],
        ['Center sticks but corners lift', 'Uneven bed surface temperature or edge losses', 'Add insulation, check heater coverage, wait longer'],
        ['Probe mesh changes between cold and hot runs', 'Bed stack is still expanding or relaxing', 'Heat soak before probing, not just before printing'],
        ['PID graph looks stable but adhesion varies', 'Controller is stable at sensor, not at print surface', 'Use a surface delay and verify with a contact thermometer'],
      ],
    },
    {
      type: 'card',
      title: 'Why the output is a delay after setpoint',
      html: 'The printer already handles ramping to the target temperature. This calculator answers a narrower first-layer question: once the display says the bed is ready, how many extra seconds should the surface rest before extrusion starts?',
    },
    { type: 'title', text: 'PID Autotune vs Real Bed Surface Stabilization', level: 2 },
    {
      type: 'paragraph',
      html: 'Bed PID autotune is valuable because it reduces oscillation at the measured sensor. It cannot remove the physics of a thick or low-conductivity plate. A glass surface may still lag while the underside sensor looks settled. A spring steel sheet can look stable quickly, but a cold magnetic base can continue pulling heat from it. The most repeatable workflow is to tune the controller, use a sensible bed delay, and start first-layer calibration only after the bed stack is thermally repeatable.',
    },
    {
      type: 'proscons',
      title: 'Starting immediately vs waiting for stabilization',
      items: [
        { pro: 'Starting immediately reduces total print time.', con: 'The first layer may be printed on a surface below the intended temperature.' },
        { pro: 'A calculated delay improves repeatability between prints.', con: 'It adds idle time, especially on glass and large aluminum beds.' },
        { pro: 'Heat soaking before probing can reduce mesh drift.', con: 'Very long soaks can waste energy if the chosen material does not need them.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not hide thermal delay with excessive squish',
      html: 'If the first layer only sticks when Z offset is aggressively low, the bed surface may be cooler than expected. Over-squish can mask the thermal problem while causing elephant foot, nozzle scraping, and rough top texture.',
    },
    {
      type: 'message',
      title: 'Best calibration sequence',
      html: 'Heat the bed, wait the calculated delay, run mesh probing if your printer probes hot, then tune first-layer height. Calibrating Z offset on an unstable bed stack makes the next print feel inconsistent even when no mechanical setting has changed.',
    },
    { type: 'title', text: 'How to Use the Stabilization Time in Start G-code', level: 2 },
    {
      type: 'paragraph',
      html: 'The recommended delay can be used manually or inserted into start G-code. A simple workflow is to heat the bed with <code>M190</code>, wait the calculated number of seconds with a dwell command, then continue with probing, nozzle heat, purge, and printing. Some users prefer to heat the bed first, begin chamber warming or nozzle preheat during the soak, and only run probing after the bed has stopped drifting.',
    },
    {
      type: 'list',
      items: [
        'Use the same delay when comparing filaments so adhesion tests are fair.',
        'Apply longer delays for glass, high bed temperatures, large plates, or cold rooms.',
        'Apply shorter delays for thin spring steel sheets when the magnetic base is already warm.',
        'Probe after heat soak if your mesh changes with temperature.',
        'Recalculate after changing build plate material, thickness, heater wattage, or bed size.',
      ],
    },
    {
      type: 'tip',
      title: 'Use the first print of the day as the reference case',
      html: 'A second print started immediately after a finished job begins with a warm bed stack and may need less waiting. For calibration, judge the delay from a cold printer because that is the condition most likely to expose thermal lag.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'A good delay makes first layer tuning boring',
      html: 'When the heat soak is close, skirt shape, line gloss, corner adhesion, and mesh compensation become more repeatable from print to print. You should not need to chase Z offset every time the machine starts cold.',
    },
    { type: 'title', text: 'Measuring and Improving Real Bed Stabilization', level: 2 },
    {
      type: 'paragraph',
      html: 'The calculator is intentionally practical, but the best validation is a surface measurement. A contact thermocouple taped to the print surface, a thin probe under a sacrificial sheet, or a calibrated infrared thermometer with known emissivity can reveal how long the top surface takes to settle. Infrared readings on glass, PEI, and shiny metal can be misleading, so use consistent measurement points and avoid comparing different surface finishes as if they had the same emissivity.',
    },
    {
      type: 'paragraph',
      html: 'Thermal performance can often be improved without changing firmware. Insulating the underside reduces heat loss and shortens warm-up. Cleaning the magnetic sheet and flex plate improves contact. Replacing weak clips, flattening warped plates, and avoiding partial heater contact all reduce uneven temperature fields. Enclosed printers benefit from a warmer chamber, but chamber heat also changes belts, gantry parts, and probe behavior, so thermal routines should be repeatable rather than improvised.',
    },
    {
      type: 'table',
      headers: ['Upgrade or habit', 'Effect on stabilization', 'Caution'],
      rows: [
        ['Underside insulation', 'Less heat loss and faster equilibrium', 'Keep wiring and adhesives rated for bed temperature'],
        ['Better heater coverage', 'More uniform surface temperature', 'Avoid bubbles and poor silicone heater bonding'],
        ['Consistent removable plate seating', 'Lower contact resistance variation', 'Dust or filament crumbs can create local cold spots'],
        ['Hot mesh probing after soak', 'Mesh reflects expanded bed shape', 'Probe mount and toolhead must also be thermally stable'],
      ],
    },
    {
      type: 'summary',
      title: 'Practical stabilization checklist',
      items: [
        'Select the actual plate material; glass, steel, and aluminum require different delays.',
        'Enter thickness and heater power rather than relying on printer model names.',
        'Use the calculated delay after the bed reports setpoint, especially before first-layer calibration.',
        'Measure the surface if adhesion problems persist despite a stable PID graph.',
        'Recheck the delay after changing build plates, magnets, insulation, heaters, or bed size.',
      ],
    },
  ],
  faq: [
    {
      question: 'Why wait after the bed reaches the target temperature?',
      answer: 'The thermistor can reach setpoint before the top print surface has fully warmed. Waiting lets the plate, coating, magnetic base, and heater stack approach a more stable temperature.',
    },
    {
      question: 'Does glass need more stabilization time than PEI spring steel?',
      answer: 'Usually yes. Borosilicate glass has much lower thermal conductivity and is often thicker, so the top surface lags more than a thin PEI-coated spring steel sheet.',
    },
    {
      question: 'Is this the same as PID autotune?',
      answer: 'No. PID autotune controls heater behavior at the sensor. This calculator estimates how long the real print surface should rest after the sensor-controlled bed reaches setpoint.',
    },
    {
      question: 'Should I probe before or after the heat-soak delay?',
      answer: 'If your mesh changes when the bed warms, probe after the bed has stabilized. That makes the mesh closer to the shape used during the first layer.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Choose build plate material', text: 'Select borosilicate glass, PEI spring steel, or aluminum so the calculation uses the correct conductivity and heat capacity.' },
    { name: 'Enter the physical bed stack', text: 'Add plate thickness, heated area, target temperature, and heater power.' },
    { name: 'Read the recommended delay', text: 'Use the start-print delay after the printer reports that the bed has reached setpoint.' },
    { name: 'Apply it consistently', text: 'Use the same heat-soak delay before probing or first-layer calibration for repeatable results.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Print Bed Thermal Inertia Stabilization Calculator',
      description: 'Estimate heated 3D printer bed surface stabilization delay from plate material, thickness, temperature, heater power, and bed size.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Why wait after the bed reaches the target temperature?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The thermistor can reach setpoint before the top print surface has fully warmed, so a heat-soak delay improves first-layer repeatability.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to estimate 3D printer bed stabilization delay',
      step: [
        { '@type': 'HowToStep', text: 'Select the build plate material.' },
        { '@type': 'HowToStep', text: 'Enter thickness, target temperature, heater power, and bed size.' },
        { '@type': 'HowToStep', text: 'Wait the recommended delay after the bed reaches setpoint.' },
        { '@type': 'HowToStep', text: 'Probe or print after the bed stack has stabilized.' },
      ],
    },
  ],
};
