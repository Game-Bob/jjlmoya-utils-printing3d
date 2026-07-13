import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'additive-production-efficiency-calculator';
const title = 'Additive Production Efficiency Calculator';
const description =
  'Compare batch printing vs sequential printing with print time, preheat overhead, travel transitions, purge time, statistical failure risk, and an automatic viability recommendation.';

const faqData = [
  {
    question: 'When is batch printing faster than sequential printing?',
    answer:
      'Batch printing is usually faster when preheating is significant, the parts fit safely on the build plate, the travel distance between parts is modest, and the historical failure rate is low enough that the combined batch risk stays below the critical threshold.',
  },
  {
    question: 'Why can sequential printing be recommended even if it takes longer?',
    answer:
      'Sequential printing limits the loss from one failed part. If the batch risk calculated as 1 - (1 - failure rate)^N exceeds the critical threshold, the calculator recommends sequential printing to protect the production queue.',
  },
  {
    question: 'Does the calculator replace slicer estimates?',
    answer:
      'No. A slicer knows exact toolpaths, accelerations, extrusion widths, cooling, and collision clearance. This calculator is for production planning before slicing, especially when comparing a single full-bed job against repeated single-part jobs.',
  },
  {
    question: 'What failure rate should I enter?',
    answer:
      'Use your own shop history for similar material, printer, geometry, and operator conditions. If you do not track it yet, start conservatively with 2-5% for tuned FDM production and raise it for new materials, long jobs, or poorly validated fixtures.',
  },
];

const howToData = [
  { name: 'Enter the quantity', text: 'Set the total number of parts required for the production run.' },
  { name: 'Add timing inputs', text: 'Enter single-part print time, preheat time, transition distance, travel speed, and purge or stabilization time.' },
  { name: 'Set historical risk', text: 'Use a failure percentage from comparable jobs and choose the maximum acceptable batch risk.' },
  { name: 'Read the recommendation', text: 'Compare total time, time saved, relative efficiency, transition overhead, and statistical batch risk.' },
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

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Additive production efficiency inputs',
    resultsAriaLabel: 'Additive production efficiency results',
    visualizerAriaLabel: 'Generative risk and bed layout visualization',
    unitSystemLabel: 'Units',
    metricLabel: 'Metric',
    imperialLabel: 'US',
    piecesLabel: 'Parts',
    unitPrintTimeLabel: 'Print time per part (min)',
    preheatTimeLabel: 'Preheat time (min)',
    transitionDistanceLabel: 'Average transition',
    travelSpeedLabel: 'Travel speed',
    failureRateLabel: 'Historical failure rate',
    purgeTimeLabel: 'Purge / stabilize (min)',
    criticalRiskLabel: 'Critical batch risk',
    batchLabel: 'Batch printing',
    sequentialLabel: 'Sequential printing',
    recommendationLabel: 'Recommended strategy',
    savingsLabel: 'Absolute time saving',
    efficiencyLabel: 'Relative efficiency',
    riskLabel: 'Batch failure risk',
    layoutLabel: 'Build plate choreography',
    transitionLabel: 'Transition overhead',
    batchWinsLabel: 'Batch',
    sequentialWinsLabel: 'Sequential',
    riskOverrideLabel: 'risk override',
    fasterLabel: 'saved',
    slowerLabel: 'extra',
    lowRiskLabel: 'Low batch risk',
    moderateRiskLabel: 'Moderate batch risk',
    criticalRiskStatusLabel: 'Critical batch risk',
    minutesUnit: 'min',
    percentUnit: '%',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
  },
  seo: [
    { type: 'title', text: 'Batch Printing vs Sequential Printing: What the Calculator Measures', level: 2 },
    {
      type: 'paragraph',
      html: 'Choosing between <strong>batch printing vs sequential printing</strong> is not only a question of filling the build plate. A full-bed batch can save warm-up time and reduce operator intervention, but it concentrates production risk into one long exposure window. Sequential printing repeats setup overhead, yet it isolates failures so one bad part does not automatically contaminate the value of the entire build plate. This calculator turns that tradeoff into numbers: total minutes, travel transitions, relative efficiency, and statistical batch risk.',
    },
    {
      type: 'paragraph',
      html: 'The batch formula is <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>. The sequential formula is <code>Tseq = N x (Tc + Tp + Tpurge)</code>. The risk formula is <code>Riskbatch = 1 - (1 - Pfailure)^N</code>. These equations are intentionally transparent because production planning is easier when the reason behind a recommendation is visible rather than hidden in a black box.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: 'Preheat cycle in batch mode', icon: 'mdi:heat-wave' },
        { value: 'N', label: 'Preheat cycles in sequential mode', icon: 'mdi:repeat' },
        { value: '60', label: 'Seconds used to normalize travel to minutes', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: 'Compound batch failure model', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: 'Use one consistent definition of failure',
      html: '<p>A failure rate is only useful if the shop defines failure consistently. Decide whether it includes cosmetic rejects, dimensional outliers, support scars, first-layer failures, spool tangles, power interruptions, and operator removals. Mixing definitions makes the risk model look precise while feeding it noisy data.</p>',
    },
    { type: 'title', text: 'How Batch Printing Saves Time', level: 2 },
    {
      type: 'paragraph',
      html: 'Batch printing normally wins on machine utilization when preheat time is large compared with the single-part print time. Heating the bed and nozzle once for a 24-part run can avoid 23 repeated warm-up cycles. In a farm environment this matters because warm-up is dead capacity: the printer consumes calendar time, energy, and operator attention before any sellable geometry is produced.',
    },
    {
      type: 'paragraph',
      html: 'The travel term prevents the model from pretending that batch layouts are free. Each part can add a non-printing transition where the nozzle crosses the plate, avoids islands, performs combing moves, or moves to the next object boundary. The calculator uses average transition distance and travel speed to estimate this overhead in minutes. The term is small on compact layouts and more visible when parts are spread across a large bed.',
    },
    {
      type: 'table',
      headers: ['Batch variable', 'Production meaning', 'Planning mistake it prevents'],
      rows: [
        ['N', 'Total parts on the run', 'Treating a ten-part bed like ten isolated jobs without shared preheat.'],
        ['Tp', 'One complete part print time', 'Using layer time from only a small feature instead of a finished part estimate.'],
        ['Tc', 'Bed and nozzle warm-up time', 'Ignoring time before extrusion starts when quoting queue capacity.'],
        ['Dtrans', 'Average distance between parts', 'Assuming a packed bed has no non-extrusion motion penalty.'],
        ['Vtravel', 'Head travel speed', 'Forgetting that slow travel profiles make spread-out arrays less efficient.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Batch time is most sensitive to preheat and quantity',
      badge: 'Capacity planning',
      html: '<p>If preheat is 12 minutes and the job contains 30 parts, sequential mode spends 360 minutes just repeating heat-up. Batch mode spends those 12 minutes once. That is why the same printer can look dramatically more productive when small parts are nested carefully.</p>',
    },
    { type: 'title', text: 'Why Sequential Printing Still Wins in Risky Jobs', level: 2 },
    {
      type: 'paragraph',
      html: 'Sequential printing can look slower because the printer repeats preheat and purge or stabilization time for every unit. The advantage is containment. If part 17 fails in a sequential plan, the previous 16 pieces may already be complete and removed. If part 17 fails in a batch because of nozzle drag, adhesion loss, thermal creep, or a material problem, the failed object may knock into neighboring parts or cause the operator to scrap the entire plate.',
    },
    {
      type: 'paragraph',
      html: 'The risk model compounds historical failure probability across part count. A 3% single-part failure rate does not mean a 24-part batch has 3% risk. The probability that every part succeeds is <code>(1 - 0.03)^24</code>, and the probability that at least one part fails is the complement. This makes large batches less attractive when the process is not stable.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Batch printing',
          description: 'Best when the process is stable, parts have strong adhesion, the bed layout is collision-safe, and preheat time dominates the schedule.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['One warm-up cycle', 'High throughput', 'Higher shared-failure exposure'],
        },
        {
          title: 'Sequential printing',
          description: 'Best when rejects are expensive, jobs are tall, materials are sensitive, or the user wants to isolate each part from the next.',
          icon: 'mdi:format-list-numbered',
          points: ['Failure containment', 'More repeated overhead', 'Requires clearance planning'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Production risk tradeoff',
      items: [
        { pro: 'Batch printing reduces idle warm-up time and can finish small repeat parts in one unattended run.', con: 'One adhesion or extrusion failure can threaten the entire plate and consume a long operator recovery window.' },
        { pro: 'Sequential printing makes it easier to validate one unit, remove it, and continue with less accumulated loss.', con: 'Repeated heat-up and stabilization can consume more time than actual geometry on small parts.' },
        { pro: 'A batch can simplify packaging because all parts finish together.', con: 'A long batch exposes every unit to the same environmental drift, spool issue, or thermal degradation period.' },
      ],
    },
    { type: 'title', text: 'Choosing a Critical Batch Risk Threshold', level: 2 },
    {
      type: 'paragraph',
      html: 'The critical risk threshold is the line where the calculator switches recommendation from time optimization to viability protection. A prototype shop may tolerate 45% batch risk if the material is cheap and the operator is experimenting. A production farm shipping customer parts may use 15-25% for common materials and lower thresholds for overnight jobs, expensive engineering polymers, or parts with high post-processing labor.',
    },
    {
      type: 'table',
      headers: ['Threshold', 'Good use case', 'Interpretation'],
      rows: [
        ['10-20%', 'Expensive parts, overnight jobs, high-value customer orders', 'Protect reliability even when batch mode saves time.'],
        ['25-35%', 'Normal tuned FDM production with known material', 'Balanced threshold for time saving and reject exposure.'],
        ['40-60%', 'Internal prototypes or cheap fixtures', 'Accepts more risk to free printer capacity faster.'],
        ['Above 60%', 'Exploration only', 'Useful for seeing time potential, but weak as a production viability rule.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: 'How to estimate your starting failure rate',
      html: '<p>Review the last 50 to 200 comparable prints on the same printer family. Count jobs that needed reprint, manual rescue, or customer rejection. Divide failures by total attempts, then separate by material and geometry when enough data exists. PLA brackets, PETG clips, ASA enclosures, and TPU gaskets should not share one generic risk number.</p>',
    },
    {
      type: 'summary',
      title: 'Risk threshold rules',
      items: [
        'Lower the threshold when material, deadline, or post-processing cost is high.',
        'Raise it only when failed parts are cheap and the queue benefits from aggressive batching.',
        'Recalculate after process changes such as a new bed surface, nozzle, filament supplier, or enclosure temperature.',
      ],
    },
    { type: 'title', text: 'Travel Transitions, Head Movement, and Layout Efficiency', level: 2 },
    {
      type: 'paragraph',
      html: 'Travel transitions are the hidden cost of print-in-place efficiency. A slicer can jump from one part to another many times per layer, especially when multiple objects share the same Z height. The average transition distance does not need to be perfect; it only needs to represent whether the layout is compact, moderately spaced, or spread across the build surface. A compact array with 25 mm average transitions behaves very differently from a full-bed arrangement with 180 mm jumps.',
    },
    {
      type: 'paragraph',
      html: 'Travel speed should reflect the real profile, not the advertising maximum of the machine. Acceleration limits, firmware settings, avoid-crossing-perimeters options, Z-hop, and combing strategy can make effective travel slower than the slicer field suggests. If a machine uses conservative travel for fragile first layers or tall parts, lower the value to avoid overestimating batch efficiency.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Batch printing', definition: 'Printing multiple copies or objects in one shared job on the build plate.' },
        { term: 'Sequential printing', definition: 'Printing one object at a time before moving to the next object, often with clearance constraints around the toolhead.' },
        { term: 'Transition distance', definition: 'Average non-extruding travel distance needed to move between parts or print zones.' },
        { term: 'Purge or stabilization time', definition: 'Extra time per sequential unit for priming, thermal settling, wiping, or operator-safe restart behavior.' },
        { term: 'Critical risk', definition: 'Maximum acceptable probability that at least one part in the batch fails.' },
      ],
    },
    {
      type: 'message',
      title: 'Collision clearance matters in true sequential mode',
      ariaLabel: 'Sequential printing clearance warning',
      html: '<p>Many slicers restrict sequential printing because the hotend, fan duct, X gantry, or bed clips can collide with finished parts. Use this calculator for planning, then verify sequential clearance inside the slicer before committing the job.</p>',
    },
    { type: 'title', text: 'How to Use the Results for Additive Manufacturing Optimization', level: 2 },
    {
      type: 'paragraph',
      html: 'The absolute time saving shows how many minutes batch mode gains or loses against sequential mode. The relative efficiency percentage normalizes that difference against sequential time, which is useful when comparing jobs of different sizes. Saving 20 minutes on a 40-minute run is operationally huge; saving 20 minutes on a 30-hour run may not justify higher risk.',
    },
    {
      type: 'paragraph',
      html: 'The recommendation combines speed and viability. If batch is faster and risk is below threshold, the tool recommends batch. If batch risk exceeds the threshold, sequential is recommended even when it is slower. If batch is slower because transition overhead is large or preheat is small, sequential wins on time without needing the risk override.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use the calculator before nesting a large build plate so the production plan is based on queue time and failure exposure.',
        'Run a what-if comparison with lower failure rate after calibration to see how process improvement changes strategy.',
        'Increase purge time when sequential jobs require cleaning, priming, bed inspection, or operator intervention between units.',
        'Lower travel speed when using Z-hop, avoid-crossing-perimeters, fragile tall parts, or firmware acceleration limits.',
        'Record actual run results and update failure rate instead of relying on a generic rule of thumb.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Do not optimize only for the fastest clock time',
      badge: 'Operational cost',
      html: '<p>A failed 12-hour batch can cost more than the time shown on the machine display. Include material, electricity, operator diagnosis, lost queue slot, post-processing delay, and customer deadline impact when deciding whether the time saving is worth the compounded risk.</p>',
    },
    { type: 'title', text: 'Practical Examples for 3D Print Time Calculator Workflows', level: 2 },
    {
      type: 'paragraph',
      html: 'For small PLA clips with a 20-minute single-part print and 10-minute warm-up, batch printing often dominates. The shared preheat saves a large fraction of the job, and compact placement keeps transition overhead low. If the shop has a 1-2% failure rate, the risk may remain acceptable for moderate quantities. This is the classic high-throughput use case for batch printing.',
    },
    {
      type: 'paragraph',
      html: 'For tall PETG brackets with marginal adhesion, sequential printing may be safer. Even if batch saves two hours, one curled corner can cause nozzle impact, layer shift, or object detachment that ruins neighboring pieces. The calculator exposes the difference between a tempting time saving and a risk profile that no longer fits production intent.',
    },
    {
      type: 'paragraph',
      html: 'For print in place efficiency decisions, run the same part twice: once with the current failure rate and once with the target rate after calibration. If reducing failures from 6% to 2% flips the recommendation from sequential to batch, the best investment may be bed cleaning, first-layer tuning, dry filament, enclosure stability, or a validated brim strategy rather than buying another printer.',
    },
    {
      type: 'summary',
      title: 'Decision checklist',
      items: [
        'Batch when preheat is large, layout is compact, and historical failure rate is low.',
        'Sequential when each reject is expensive, tall, risky, or likely to damage neighbors.',
        'Tune the process when a small failure-rate reduction unlocks major batch efficiency.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
