import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AdditiveProductionEfficiencyCalculatorUI } from '../ui';

const slug = 'additive-production-efficiency-calculator';
const title = '增材生产效率计算器';
const description =
  '比较批量打印与顺序打印的打印时间、预热开销、移动过渡、清洗时间、统计故障风险，并自动给出可行性建议。';

const faqData = [
  {
    question: '什么时候批量打印比顺序打印更快？',
    answer:
      '当预热时间显著、零件可以安全地放置在打印平台上、零件之间的移动距离适中、且历史故障率足够低使得组合后的批量风险保持在临界阈值以下时，批量打印通常更快。',
  },
  {
    question: '为什么即使顺序打印耗时更长，也可能被推荐？',
    answer:
      '顺序打印限制了一个零件故障造成的损失。如果计算出的批量风险 1 - (1 - 故障率)^N 超过了临界阈值，计算器会推荐顺序打印以保护生产队列。',
  },
  {
    question: '计算器能替代切片软件的估算吗？',
    answer:
      '不能。切片软件知道精确的刀具路径、加速度、挤出宽度、冷却和碰撞间隙。此计算器用于切片前的生产规划，特别是在将单个满板任务与重复的单件任务进行比较时。',
  },
  {
    question: '我应该输入多少故障率？',
    answer:
      '使用您自己车间在类似材料、打印机、几何形状和操作条件下的历史数据。如果尚未跟踪，对于调校良好的FDM生产，建议从2-5%开始保守使用；对于新材料、长周期任务或验证不充分的夹具，请调高此值。',
  },
];

const howToData = [
  { name: '输入数量', text: '设定生产批次所需的总零件数。' },
  { name: '添加时间参数', text: '输入单件打印时间、预热时间、过渡距离、移动速度和清洗或稳定时间。' },
  { name: '设置历史风险', text: '使用来自类似任务的历史故障百分比，并选择可接受的最大批量风险。' },
  { name: '查看建议', text: '比较总时间、节省时间、相对效率、过渡开销和统计批量风险。' },
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

export const content: ToolLocaleContent<AdditiveProductionEfficiencyCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '增材生产效率输入参数',
    resultsAriaLabel: '增材生产效率计算结果',
    visualizerAriaLabel: '风险与打印平台布局可视化',
    unitSystemLabel: '单位制',
    metricLabel: '公制',
    imperialLabel: '美制',
    piecesLabel: '零件',
    unitPrintTimeLabel: '每件打印时间（分钟）',
    preheatTimeLabel: '预热时间（分钟）',
    transitionDistanceLabel: '平均过渡距离',
    travelSpeedLabel: '移动速度',
    failureRateLabel: '历史故障率',
    purgeTimeLabel: '清洗/稳定时间（分钟）',
    criticalRiskLabel: '临界批量风险',
    batchLabel: '批量打印',
    sequentialLabel: '顺序打印',
    recommendationLabel: '推荐策略',
    savingsLabel: '绝对时间节省',
    efficiencyLabel: '相对效率',
    riskLabel: '批量故障风险',
    layoutLabel: '打印平台布局编排',
    transitionLabel: '过渡开销',
    batchWinsLabel: '批量',
    sequentialWinsLabel: '顺序',
    riskOverrideLabel: '风险覆盖',
    fasterLabel: '节省',
    slowerLabel: '额外',
    lowRiskLabel: '低批量风险',
    moderateRiskLabel: '中等批量风险',
    criticalRiskStatusLabel: '临界批量风险',
    minutesUnit: '分钟',
    percentUnit: '%',
    millimeterUnit: '毫米',
    inchUnit: '英寸',
    metricSpeedUnit: '毫米/秒',
    imperialSpeedUnit: '英寸/秒',
  },
  seo: [
    { type: 'title', text: '批量打印与顺序打印：计算器衡量什么', level: 2 },
    {
      type: 'paragraph',
      html: '在<strong>批量打印与顺序打印</strong>之间做选择，不仅仅是填充打印平台的问题。满板批量可以节省预热时间并减少操作员干预，但它将生产风险集中到一个长时间窗口中。顺序打印重复了准备开销，但它隔离了故障，使得一个坏零件不会自动影响整个打印平台的价值。这个计算器将这种权衡转化为数字：总分钟数、移动过渡、相对效率和统计批量风险。',
    },
    {
      type: 'paragraph',
      html: '批量公式为 <code>Tbatch = Tc + (N x Tp) + ((N x Dtrans) / (Vtravel x 60))</code>。顺序公式为 <code>Tseq = N x (Tc + Tp + Tpurge)</code>。风险公式为 <code>Riskbatch = 1 - (1 - Pfailure)^N</code>。这些公式有意保持透明，因为当建议背后的原因可见而非隐藏于黑箱中时，生产规划会更容易。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1', label: '批量模式下的预热周期', icon: 'mdi:heat-wave' },
        { value: 'N', label: '顺序模式下的预热周期', icon: 'mdi:repeat' },
        { value: '60', label: '用于将移动时间转换为分钟的秒数', icon: 'mdi:timer-outline' },
        { value: '1 - (1-p)^N', label: '组合批量故障模型', icon: 'mdi:chart-bell-curve' },
      ],
    },
    {
      type: 'tip',
      title: '使用一致的故障定义',
      html: '<p>只有当车间一致地定义故障时，故障率才有用。决定是否包括外观瑕疵、尺寸偏差、支撑痕迹、首层故障、料盘缠绕、断电和操作员移除。混合定义会使风险模型看起来精确，但实际上输入的是噪声数据。</p>',
    },
    { type: 'title', text: '批量打印如何节省时间', level: 2 },
    {
      type: 'paragraph',
      html: '当预热时间相比单件打印时间较大时，批量打印通常在机器利用率上胜出。为24件任务加热一次热床和喷嘴可以避免23次重复的预热循环。在打印农场环境中，这很重要，因为预热是死容量：打印机在产出任何可销售的几何形状之前，就已经消耗了日历时间、能源和操作员的注意力。',
    },
    {
      type: 'paragraph',
      html: '移动项防止了模型假设批量布局是免费的。每个零件可能增加一个非打印过渡，喷嘴越过平台、避开孤岛、进行梳理移动或移动到下一个物体边界。计算器使用平均过渡距离和移动速度来估计这个开销（以分钟计）。在紧凑布局下，该项很小；当零件分布在大平台上时，则更为明显。',
    },
    {
      type: 'table',
      headers: ['批量变量', '生产含义', '它防止的规划错误'],
      rows: [
        ['N', '任务中的总零件数', '将十件装满的平台视为十个独立任务，忽略共享预热。'],
        ['Tp', '一个完整零件的打印时间', '仅使用小特征的层时间，而非完整零件的估算。'],
        ['Tc', '热床和喷嘴预热时间', '在估算队列产能时忽略挤出开始前的时间。'],
        ['Dtrans', '零件之间的平均距离', '假设紧密布置的平台没有非挤出的移动惩罚。'],
        ['Vtravel', '打印头移动速度', '忘记慢速移动配置会使分散排列的效率降低。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '批量时间对预热和数量最为敏感',
      badge: '产能规划',
      html: '<p>如果预热需要12分钟且任务包含30个零件，顺序模式需要花费360分钟重复加热。批量模式仅花费那12分钟一次。这就是为什么当小零件被仔细嵌套时，同一台打印机看起来可以显著提高生产率。</p>',
    },
    { type: 'title', text: '为什么顺序打印在高风险任务中仍然胜出', level: 2 },
    {
      type: 'paragraph',
      html: '顺序打印看起来较慢，因为打印机为每个单元重复预热、清洗和稳定时间。其优势在于隔离。如果第17个零件在顺序计划中失败，前16个零件可能已经完成并取出。如果由于喷嘴拖拽、附着力损失、热漂移或材料问题，第17个零件在批量中失败，故障物体可能撞击到邻近零件，或导致操作员报废整个平台。',
    },
    {
      type: 'paragraph',
      html: '风险模型将历史故障概率跨零件数量进行复合。3%的单件故障率并不意味着24件批次有3%的风险。每个零件成功的概率是 <code>(1 - 0.03)^24</code>，至少有一个零件失败的概率是其补数。这使得当过程不稳定时，大批量变得不那么有吸引力。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '批量打印',
          description: '当过程稳定、零件附着力强、平台布局碰撞安全、且预热时间占主导时效果最佳。',
          icon: 'mdi:grid',
          highlight: true,
          points: ['一次预热周期', '高吞吐量', '更高的共享故障风险'],
        },
        {
          title: '顺序打印',
          description: '当废品昂贵、任务高大、材料敏感、或用户希望将每个零件彼此隔离时效果最佳。',
          icon: 'mdi:format-list-numbered',
          points: ['故障隔离', '更多重复开销', '需要间隙规划'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '生产风险权衡',
      items: [
        { pro: '批量打印减少了空闲预热时间，可以在一次无人值守运行中完成小型重复零件。', con: '一次附着力或挤出故障可能威胁整个平台，需要长时间的操作员恢复。' },
        { pro: '顺序打印使得验证一个单元、将其移除并以更少的累积损失继续变得更加容易。', con: '重复的加热和稳定可能会消耗比小零件的实际几何形状更多的时间。' },
        { pro: '批量可以简化包装，因为所有零件同时完成。', con: '长时间的批次使每个单元暴露在相同的环境漂移、料盘问题或热降解周期中。' },
      ],
    },
    { type: 'title', text: '选择临界批量风险阈值', level: 2 },
    {
      type: 'paragraph',
      html: '临界风险阈值是计算器将推荐从时间优化切换到可行性保护的分界线。如果材料便宜且操作员正在进行实验，原型车间可能容忍45%的批量风险。向客户发货的生产农场可能对常见材料使用15-25%，对过夜任务、昂贵的工程聚合物或后处理劳动成本高的零件使用更低的阈值。',
    },
    {
      type: 'table',
      headers: ['阈值', '适用场景', '解读'],
      rows: [
        ['10-20%', '昂贵零件、过夜任务、高价值客户订单', '即使批量模式节省时间，也要保护可靠性。'],
        ['25-35%', '使用已知材料的正常调校FDM生产', '时间节省和废品风险之间的平衡阈值。'],
        ['40-60%', '内部原型或廉价夹具', '接受更多风险以更快释放打印机产能。'],
        ['60%以上', '仅限探索用途', '可用于查看时间潜力，但作为生产可行性规则较弱。'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:clipboard-pulse-outline',
      title: '如何估算您的起始故障率',
      html: '<p>回顾同一打印机系列上最近50到200次可比较的打印。统计需要重印、手动修复或客户拒收的任务。将故障数除以总尝试次数，然后在数据足够时按材料和几何形状分开。PLA支架、PETG卡扣、ASA外壳和TPU垫圈不应共享同一个通用风险数字。</p>',
    },
    {
      type: 'summary',
      title: '风险阈值规则',
      items: [
        '当材料、截止日期或后处理成本高时降低阈值。',
        '仅在故障零件便宜且队列受益于激进的批量处理时才提高阈值。',
        '在工艺变更（如新热床表面、喷嘴、耗材供应商或腔室温度）后重新计算。',
      ],
    },
    { type: 'title', text: '移动过渡、打印头运动与布局效率', level: 2 },
    {
      type: 'paragraph',
      html: '移动过渡是原位打印效率的隐藏成本。切片软件可以在每层中多次从一个零件跳到另一个零件，尤其是当多个物体共享同一Z高度时。平均过渡距离不需要完美；它只需要代表布局是紧凑的、中等间距的还是分布在打印表面上的即可。平均过渡距离为25毫米的紧凑阵列与具有180毫米跳跃的满板布局表现非常不同。',
    },
    {
      type: 'paragraph',
      html: '移动速度应反映真实配置，而不是机器的广告最大值。加速度限制、固件设置、避免穿越外围选项、Z抬升和梳理策略可能会使有效移动速度比切片软件字段建议的更慢。如果机器对脆弱的首层或高零件使用保守的移动，请降低该值以避免高估批量效率。',
    },
    {
      type: 'glossary',
      items: [
        { term: '批量打印', definition: '在打印平台上的一次共享任务中打印多个副本或物体。' },
        { term: '顺序打印', definition: '一次打印一个物体，然后再移动到下一个物体；通常打印头周围有间隙约束。' },
        { term: '过渡距离', definition: '在零件或打印区域之间移动所需的平均非挤出移动距离。' },
        { term: '清洗或稳定时间', definition: '顺序打印中每个单元用于注塑、热稳定、擦拭或操作员安全重启行为的额外时间。' },
        { term: '临界风险', definition: '批次中至少一个零件故障的最大可接受概率。' },
      ],
    },
    {
      type: 'message',
      title: '真正顺序模式下碰撞间隙至关重要',
      ariaLabel: '顺序打印碰撞警告',
      html: '<p>许多切片软件限制顺序打印，因为热端、风扇风道、X龙门或热床夹可能与已完成零件碰撞。使用此计算器进行规划，然后在提交任务之前在切片软件中验证顺序间隙。</p>',
    },
    { type: 'title', text: '如何将结果用于增材制造优化', level: 2 },
    {
      type: 'paragraph',
      html: '绝对时间节省显示批量模式相对于顺序模式获得或损失了多少分钟。相对效率百分比将该差异相对于顺序时间进行归一化，这在比较不同规模的任务时很有用。在40分钟的任务中节省20分钟在操作上是巨大的；在30小时的任务中节省20分钟可能不值得承受更高的风险。',
    },
    {
      type: 'paragraph',
      html: '建议结合了速度和可行性。如果批量更快且风险低于阈值，工具推荐批量。如果批量风险超过阈值，则即使批量时间更长也推荐顺序。如果由于过渡开销大或预热时间短而导致批量更慢，则无需风险覆盖，顺序在时间上胜出。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '在嵌套大型打印平台之前使用计算器，使生产计划基于队列时间和故障风险。',
        '在校准后用较低的故障率运行假设对比，查看工艺改进如何改变策略。',
        '当顺序任务需要在单元之间进行清洁、注塑、平台检查或操作员干预时，增加清洗时间。',
        '在使用Z抬升、避免穿越外围、脆弱的高零件或固件加速度限制时，降低移动速度。',
        '记录实际运行结果并更新故障率，而不是依赖通用的经验法则。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '不要仅优化最快的时钟时间',
      badge: '运营成本',
      html: '<p>一个失败的12小时批次可能比机器显示屏上显示的时间成本更高。在决定节省时间是否值得承受复合风险时，请考虑材料、电力、操作员诊断、丢失的队列位置、后处理延迟和客户截止日期影响。</p>',
    },
    { type: 'title', text: '3D打印时间计算器工作流程的实用示例', level: 2 },
    {
      type: 'paragraph',
      html: '对于单件打印时间20分钟、预热时间10分钟的小型PLA卡扣，批量打印通常占主导地位。共享预热节省了任务的很大一部分，紧凑的放置使过渡开销保持较低。如果车间有1-2%的故障率，对于中等数量，风险可能仍然可接受。这是批量打印的经典高吞吐量用例。',
    },
    {
      type: 'paragraph',
      html: '对于附着力较差的PETG高支架，顺序打印可能更安全。即使批量节省了两个小时，一个翘曲的角落可能导致喷嘴碰撞、层移位或物体脱落，从而毁坏邻近的零件。计算器揭示了诱人的时间节省与不再符合生产意图的风险概况之间的差异。',
    },
    {
      type: 'paragraph',
      html: '对于原位打印效率决策，使用相同的零件运行两次：一次使用当前故障率，一次使用校准后的目标故障率。如果故障率从6%降低到2%将建议从顺序翻转为批量，那么最好的投资可能是清洁热床、调校首层、使用干燥耗材、稳定腔室温度或验证过的底边策略，而不是购买另一台打印机。',
    },
    {
      type: 'summary',
      title: '决策检查清单',
      items: [
        '预热时间长、布局紧凑、历史故障率低时使用批量打印。',
        '每个废品昂贵、高大、有风险或可能损坏邻近零件时使用顺序打印。',
        '当小的故障率降低就能释放大效率时，先调校工艺。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
