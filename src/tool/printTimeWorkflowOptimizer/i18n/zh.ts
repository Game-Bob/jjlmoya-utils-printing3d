import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-print-time-workflow-optimizer';
const title = '3D打印时间工作流优化器';
const description =
  '并排比较两种FDM打印设置：层数、修正后的时间、耗材消耗量、成本、质量权衡和硬件速度警告。';

const faqData = [
  {
    question: '与简单时间计算器有何不同？',
    answer:
      '包括复杂度开销、每层回抽时间、填充体积、耗材质量、成本和场景比较。',
  },
  {
    question: '能否替代切片器的估算？',
    answer:
      '不能。切片器知道精确的刀具路径。此工具用于切片前的规划。',
  },
  {
    question: '复杂度设置改变什么？',
    answer:
      '低/中/高对移动、加速损失、转角和孤岛应用开销系数。',
  },
  {
    question: '为什么工具在超过100 mm/s时发出警告？',
    answer:
      '许多打印机可以超过100 mm/s，但未校准的高速在挤出和冷却方面存在风险。',
  },
];
const howToData = [
  { name: '输入模型尺寸和体积', text: '从CAD、切片器预览或近似值添加高度和体积。' },
  { name: '调整场景A', text: '选择层高、速度、线宽、填充、材料、复杂度。' },
  { name: '调整场景B', text: '调整第二个配置以进行比较。' },
  { name: '查看影响', text: '比较时间、耗材、成本、层数、效率、流量。' },
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '打印工作流输入',
    resultsAriaLabel: '打印工作流结果',
    unitSystemLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '美国',
    currencyLabel: '货币',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: '场景A',
    scenarioBLabel: '场景B',
    modelHeightLabel: '模型高度',
    modelVolumeLabel: '估计体积',
    layerHeightLabel: '层高',
    speedLabel: '速度',
    lineWidthLabel: '线宽',
    infillLabel: '填充',
    complexityLabel: '复杂度',
    complexityTooltip: '估算死区时间：加速、转角、回抽、孤岛、短距离移动。',
    pieceTypeLabel: '零件类型',
    solidPieceLabel: '实心连续',
    hollowPieceLabel: '空心多腔',
    materialLabel: '材料',
    filamentPriceLabel: '耗材价格',
    lowComplexity: '低简单面',
    mediumComplexity: '中混合几何',
    highComplexity: '高多孤岛',
    estimatedTimeLabel: '估计时间',
    filamentLabel: '耗材',
    costLabel: '材料成本',
    layersLabel: '层数',
    efficiencyLabel: '效率',
    flowLabel: '体积流量',
    flowTooltip: '超过10-12 mm3/s时存在挤出不足风险。',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: '质量权衡',
    speedReductionLabel: '-10%速度',
    speedReductionAddsLabel: '增加',
    speedReductionMinutesLabel: '分钟',
    qualityGainLabel: '约8%更清洁的表面',
    hardwareWarning: '速度>100 mm/s。检查热端流量、冷却、加速度。',
    flowWarning: '流量超过标准热端舒适区。',
    bestValueLabel: '最佳价值',
    timeDeltaLabel: '时间差',
    costDeltaLabel: '成本差',
    materialDeltaLabel: '材料差',
    winnerBadge: '最佳价值',
    scenarioPrefix: '场景',
    inScenarioLabel: '在',
    fasterDirection: '更快',
    cheaperDirection: '更便宜',
    lighterDirection: '更轻',
    criterionAlignedLabel: '与最佳价值一致',
    criterionTradeoffLabel: '最佳价值权衡',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: '分钟',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: '如何在切片前估算3D打印时间', level: 2 },
    {
      type: 'paragraph',
      html: '一个有用的<strong>3D打印时间估算器</strong>不能仅仅是用体积除以速度。FDM打印机需要时间加速、转弯减速、回抽耗材、在孤岛之间移动、冷却小层以及在方向变化后恢复压力。该工具将部件建模为可打印体积、线宽、层高、速度、层数和复杂度系数，使早期规划更接近实际工作流决策。',
    },
    {
      type: 'paragraph',
      html: '基础挤出时间通过体积除以体积流量计算：速度乘以线宽和层高。然后工具对模型复杂度应用校正系数，并添加每层固定的回抽余量。这并不声称达到切片器的精度，但它能比线性计算器更公正地比较0.20 mm草稿设置和0.12 mm精细设置之间的差异。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: '简单块体和光滑零件的低复杂度开销', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: '多孤岛和多次回抽的高复杂度开销', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: '每层增加的计划回抽余量', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: '标准打印机挤出风险警告阈值', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: '尽可能使用切片器体积',
      html: '<p>最佳体积输入是切片器或CAD中的模型材料体积，而非外部包围盒。包围盒包括曲线、孔洞、手柄和空腔周围的空白空间，因此可能夸大时间和耗材。',
    },
    { type: 'title', text: '层高为何对时间影响如此之大', level: 2 },
    {
      type: 'paragraph',
      html: '层高通过两种方式影响打印时间。第一，它改变体积流量：在相同速度和宽度下，0.12 mm的层每秒比0.20 mm的层少挤出40%的塑料。第二，它增加层数，因此换层开销、回抽、压力稳定和冷却决策更频繁地发生。这就是为什么微小的外观变化能将五小时的打印变成八小时的打印。',
    },
    {
      type: 'table',
      headers: ['层高', '典型用途', '工作流影响'],
      rows: [
        ['0.28-0.32 mm', '草稿零件、大型夹具、快速验证', '层数少、流量高，但层纹可见。'],
        ['0.18-0.22 mm', '常规PLA和PETG打印', '在许多桌面打印机上实现时间、强度和表面质量的平衡。'],
        ['0.10-0.14 mm', '微缩模型、曲面外壳、可见消费品零件', '由于流量下降且层数增加，打印时间明显更长。'],
        ['低于0.10 mm', '特殊精加工场景', '通常受限于机器精度、冷却和递减的视觉回报。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '精细层可能比公式显示的要慢',
      badge: '冷却和最小层时间',
      html: '<p>小型模型可能在切片器中达到最小层时间。此时，即使体积公式表明机器可以更快移动，打印机也会减速以让塑料冷却。',
    },
    {
      type: 'summary',
      title: '层高规则',
      items: [
        '较低的层高在相同速度下减少每秒流量。',
        '即使模型体积不变，更多的层也会增加重复开销。',
        '最佳比较基于场景：草稿配置与质量配置。',
      ],
    },
    { type: 'title', text: '模型复杂度开销与死区时间', level: 2 },
    {
      type: 'paragraph',
      html: '死区时间是理论挤出与实际运行时之间的差距。直线花瓶状壁几乎不需要移动和回抽。而带有多孔、凸台、标签、加强筋和分离孤岛的机械外壳迫使打印机频繁启停。加速度限制意味着喷嘴在短线段上可能永远达不到指令速度，因此实际平均移动速度低于滑块设定值。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: '低复杂度', description: '光滑模型、连续轮廓、少量孤岛和有限的内部移动。', icon: 'mdi:shape-outline', points: ['较低开销', '速度稳定', '回抽少'] },
        { title: '中复杂度', description: '带孔洞、混合曲线、填充变化和适度移动的常见功能零件。', icon: 'mdi:cog-outline', highlight: true, points: ['平衡默认值', '部分移动损失', '有用的报价基线'] },
        { title: '高复杂度', description: '纹理表面、大量分离特征、支撑界面和回抽密集区域。', icon: 'mdi:transit-connection-variant', points: ['高开销', '拉丝风险增加', '实际时间更长'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '开销系数', definition: '用于近似移动、加速度损失、回抽及其他稳定挤出计算未涵盖时间的乘数。' },
        { term: '体积流量', definition: '每秒通过喷嘴的塑料量，按速度×线宽×层高计算。' },
        { term: '层数', definition: '模型高度除以层高后向上取整，因为部分最终层仍需一次通过。' },
        { term: '挤出不足', definition: '热端或挤出机无法为请求的速度和线条几何提供足够熔融塑料的缺陷。' },
      ],
    },
    {
      type: 'message',
      title: '将复杂度视为校准旋钮',
      ariaLabel: '复杂度系数说明',
      html: '<p>如果您的切片器对类似模型报告的打印时间始终长于此工具，请提高复杂度。如果您的直驱打印机经过加速度调优后优于估算值，请降低复杂度以便未来规划。',
    },
    { type: 'title', text: '耗材消耗、成本和填充', level: 2 },
    {
      type: 'paragraph',
      html: '时间只是工作流决策的一部分。耗材重量和成本在报价零件、规划批量生产或决定精细配置是否值得占用打印机时至关重要。该工具通过保留外壳比例并按填充百分比缩放内部区域来估算校正后的可打印体积，然后将该体积乘以材料密度。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '快速材料规划时，PLA使用约1.24 g/cm³，PETG使用约1.27 g/cm³。',
        '当支撑、边缘、筏层或清洗结构属于作业一部分时，提高估算体积。',
        '降低填充可减少耗材和时间，但壁、顶层和底层仍会消耗材料。',
        '对于批量生产，将计算器估算值与实际使用的线盘重量进行比较，并调整未来报价。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: '工作流决策示例',
      html: '<p>0.20 mm层高的120 cm³ PLA零件可能适合车间夹具，而0.12 mm版本外观更佳但占用打印机更长时间。将时间和材料成本并排比较，可在投入机器前看清权衡。',
    },
    {
      type: 'proscons',
      title: '优化速度与质量',
      items: [
        { pro: '更高速度可释放打印机产能，每天处理更多任务。', con: '可能暴露振纹、弱角、冷却不足和热端流量限制。' },
        { pro: '更低速度通常改善表面光洁度和尺寸一致性。', con: '增加排队时间，可能降低小型商业零件的利润率。' },
        { pro: '较低层高改善曲面和微缩模型效果。', con: '成倍增加层数和重复机器开销。' },
      ],
    },
    { type: 'title', text: '硬件警告和实际速度限制', level: 2 },
    {
      type: 'paragraph',
      html: '切片器的速度值并不能保证喷嘴在所有位置都能维持该速度。标准的笛卡尔移动床机、较旧的鲍登挤出机、短熔融区热端和较弱的零件冷却，在未调校加速度、急动、压力提前、温度和流量时，可能难以超过100 mm/s。该警告并不意味着打印会失败；而是提醒应将请求的设置与硬件行为进行核对。',
    },
    {
      type: 'table',
      headers: ['症状', '可能原因', '规划应对'],
      rows: [
        ['薄壁或间隙', '热端无法熔化足够塑料或挤出机打滑', '降低速度，谨慎提高温度，或降低线宽/层高。'],
        ['角落附近振纹', '加速度和框架振动主导', '降低加速度或减少可见壁的速度。'],
        ['小型特征卷曲', '冷却跟不上', '降低速度，增大风扇，或同时打印多个副本。'],
        ['复杂零件拉丝', '多次移动和回抽', '提高复杂度开销并调校回抽/温度。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '体积流量是真正的速度天花板',
      badge: '检查 mm³/s',
      html: '<p>移动速度相同的两种配置可能需要不同的熔化速率。80 mm/s下0.30 mm层高和0.50 mm线宽比相同速度下0.12 mm层高和0.42 mm线宽每秒需要更多的塑料。</p>',
    },
    {
      type: 'summary',
      title: '切片前使用此工具',
      items: [
        '比较两个候选配置，而不是仅凭单个数字猜测。',
        '同时关注层数、体积流量和硬件警告。',
        '将上次交互保持在本地区，以便重复规划可从先前设置继续。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
