import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = '3d-print-farm-roi-calculator';
const title = '3D打印农场ROI计算器';
const description =
  '使用设备利用率、打印失败率、电费、固定开支和每小时可变成本，模拟3D打印农场的月度盈利能力、投资回收期和年化投资回报率。';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: '如何计算3D打印农场的投资回报率？',
    answer:
      '估算每月实际生产时间，乘以每台设备小时的销售单价，减去固定成本、电费和每小时可变成本，然后将年利润与初始投资进行比较。',
  },
  {
    question: '为什么打印成功率会影响打印农场的回收期？',
    answer:
      '打印失败会消耗设备产能、材料、喷嘴、能源和操作人员的精力，但不会产生可计费的工时。较低的成功率会减少实际生产时间并延迟投资回收。',
  },
  {
    question: '每小时可变成本中应该包括什么？',
    answer:
      '包括耗材或树脂消耗、喷嘴磨损、打印平台磨损、常规维护部件、易耗品，以及任何与实际成功生产时间成比例的每小时损耗费用。',
  },
  {
    question: '投资回收期和投资回报率是一样的吗？',
    answer:
      '不一样。投资回收期估算从每月净利润中收回初始投资需要多少个月。而ROI将年化利润与原始投资额进行百分比比较。',
  },
];

const howToData = [
  { name: '输入农场规模', text: '添加运行中的打印机数量以及设备、安装、工作站和调试的初始投资金额。' },
  { name: '添加每月运营成本', text: '输入固定的月度管理费用和电费，然后添加每个生产性设备小时的可变成本。' },
  { name: '设置利用率和成功率', text: '使用实际的设备占用率和打印成功率百分比，以便模型扣除空闲时间和打印失败的损耗。' },
  { name: '查看盈利能力输出', text: '对比月收入与成本，然后根据投资回收月数 and 年化ROI评估投资可行性。' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    '3D打印农场ROI计算器',
    '3D打印投资回收期模拟器',
    '打印农场盈利能力计算器',
    '设备利用率和打印失败调整',
    '多货币运营成本模型',
  ],
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '打印农场ROI输入项',
    resultsAriaLabel: '打印农场ROI计算结果',
    currencyLabel: '货币',
    currencyOptions,
    printerCountLabel: '打印机数量',
    initialInvestmentLabel: '初始投资',
    fixedMonthlyCostLabel: '每月固定成本',
    electricityMonthlyCostLabel: '每月电费',
    hourlyRateLabel: '每小时销售单价',
    occupancyLabel: '平均利用率',
    successRateLabel: '打印成功率',
    variableCostLabel: '每小时可变成本',
    averageHoursPerPartLabel: '单件 average 耗时',
    paybackLabel: '投资回收期',
    netProfitLabel: '每月净利润',
    annualRoiLabel: '年化投资回报率',
    productiveHoursLabel: '实际生产时间',
    revenueLabel: '收入',
    costsLabel: '成本',
    fixedCostShortLabel: '固定',
    electricityShortLabel: '电费',
    variableCostShortLabel: '可变',
    marginLabel: '净利润率',
    breakEvenPartsLabel: '损益平衡产量',
    breakEvenHoursLabel: '损益平衡工时',
    stressScenarioLabel: '最坏情况模拟',
    exportSummaryLabel: '下载报告',
    chartLabel: '月度收入与运营成本对比图',
    monthsUnit: '个月',
    hoursUnit: '小时',
    percentUnit: '%',
    notViableLabel: '无法收回投资',
    positiveInsight: '在计入利用率、成功率和运营成本后，月度利润为正。',
    negativeInsight: '运营成本超过了调整后的收入；在扩大规模之前，请提高利用率、优化定价或降低打印失败率。',
    currencySymbol: '元',
    defaultCurrencyCode: 'CNY',
    pendingLabel: '-',
    partsUnit: '件/月',
    reportFilename: 'print-farm-roi-summary.csv',
    reportTitle: '3D打印农场ROI可行性报告',
    reportCurrencyLabel: '货币',
  },
  seo: [
    { type: 'title', text: '3D打印农场ROI计算器的工作原理', level: 2 },
    {
      type: 'paragraph',
      html: '一个<strong>3D打印农场ROI计算器</strong>应该回答一个具体的投资问题：一批打印机能否足够快地收回其配置成本，以证明资本、空间、维护和运营风险的合理性？本模拟器根据每月设备产能对该问题进行建模。在标准的30天月份中，每台打印机提供720小时的总工时，然后模型根据利用率和打印成功率对这些工时进行折减。结果不是理论上的产能，而是扣除空闲时间、任务排队、打印失败、重新打印、校准和实际停机时间后剩下的可计费生产时间。',
    },
    {
      type: 'paragraph',
      html: '计算链是完全透明的。每月总工时等于<code>打印机数量 x 720</code>。实际生产时间等于总工时乘以平均利用率和成功率。月收入等于生产时间乘以面向客户的每小时单价。运营成本结合了每月固定开支、电费和每小时可变成本。每月净利润等于收入减去这些运营成本。投资回收期将初始投资除以每月净利润，而年化投资回报率则将十二个月的净利润与初始投资进行比较。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 小时', label: '单台打印机每月总产能', icon: 'mdi:clock-outline' },
        { value: '利用 x 成功', label: '利用率与成功率折减', icon: 'mdi:percent-outline' },
        { value: '收入 - 成本', label: '每月净利润', icon: 'mdi:finance' },
        { value: '投资 / 利润', label: '投资回收期', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: '为投资决策使用保守的输入值',
      html: '<p>在初步评估时，请输入你能够通过当前需求维持的真实利用率，而不是你希望在市场推广改善后达到的利用率。一个只有在乐观利用率下才能盈利的农场还不是一个稳健的投资。</p>',
    },
    { type: 'title', text: '为什么利用率会改变打印农场的盈利能力', level: 2 },
    {
      type: 'paragraph',
      html: '利用率是指设备可用时间中实际用于打印付费或可售工作的百分比。在许多小型农场模型中，这是最强大的杠杆，因为初始投资是固定的。为生产购买的打印机，无论每天预订8小时还是20小时，其设备折旧和固定成本都是相同的。更高的利用率将房租、安装、备件库存、软件和设备折旧分摊到更多的可计费工时中。',
    },
    {
      type: 'paragraph',
      html: '计算器将利用率作为总产能的直接乘数。十台打印机每月产生7200个总设备小时。在40%的利用率下，在成功率折减之前，只有2880小时进入收入模型。在75%的利用率下，则有5400小时进入模型。这其中的差异可以决定投资回收是需要几个月、几年，还是永远无法实现。',
    },
    {
      type: 'table',
      headers: ['利用率水平', '运营状态说明', 'ROI影响'],
      rows: [
        ['低于30%', '设备在一个月的大部分时间里都在等待订单、文件、操作员或维护。', '除非每小时单价极高，否则初始投资很难收回。'],
        ['30-55%', '需求不稳且依靠手工操作的农场常见的早期阶段范围。', '盈利能力高度依赖于固定开支和打印失败率。'],
        ['55-75%', '健康的订单水平，为紧急任务、日常维护和调整配置留有空间。', '通常是投资回收开始变得现实的第一范围。'],
        ['高于75%', '高利用率，需要极其可靠的排程、物料流和预防性维护。', 'ROI潜力强大，但对设备故障或操作员瓶颈的容忍度极低。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '高利用率并不等同于高利润',
      badge: '定价风险',
      html: '<p>如果每小时单价过低、重新打印频繁、材料浪费严重或固定开支被低估，农场即使非常忙碌也可能亏损。请始终将利用率与利润率进行对比，而不仅仅是对比收入。</p>',
    },
    { type: 'title', text: '计入打印失败与重新打印的损耗', level: 2 },
    {
      type: 'paragraph',
      html: '输入的成功率是将本3D打印投资回收模拟器与简单产能计算器区分开的关键。失败的打印占用的日历时间与成功的打印相同，但不会产生可售输出。它们还会消耗耗材、树脂、打印平台、喷嘴、电费、人工并损害客户的信任。一个成功率为90%的农场在计算收入之前就已经损失了十分之一的潜在生产区块。',
    },
    {
      type: 'paragraph',
      html: '成功率应该基于同类工作进行衡量。一个批量打印PLA夹具的农场在经过工艺调优后可以保持极高的成功率。而一个生产个性化客户模型、高大零件、工程聚合物、树脂手办或多色打印任务的农场可能需要更低的成功率假设。如果你混合了简单和高风险的工作，请运行计算器两次：一次针对标准生产，另一次针对定制任务。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '批量重复生产',
          description: '零件几何形状已知、配置文档已调优、材料预测性强且需求稳定。',
          icon: 'mdi:repeat',
          points: ['较高的成功率假设', '较低的设置不确定性', '更好的投资回收信心'],
        },
        {
          title: '定制打印服务',
          description: '文件因客户而异，几何形状、支撑策略和质量期望各不相同。',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['中等的成功率假设', '报价存在更多变数', '需要计入重印预留'],
        },
        {
          title: '实验性材料',
          description: '工程聚合物、弹性体、填充耗材以及树脂工艺调优。',
          icon: 'mdi:flask-outline',
          points: ['较低的成功率假设', '较高的易耗品磨损', '使用谨慎的ROI输入'],
        },
      ],
    },
    {
      type: 'message',
      title: '失败率应直接纳入财务模型',
      ariaLabel: '打印失败损耗统计说明',
      html: '<p>不要将重新打印的成本隐藏在模糊的固定开支中。清晰可见的成功率输入使得投资案例更容易被评估、改进和解释。</p>',
    },
    { type: 'title', text: '构建可靠的月度成本模型', level: 2 },
    {
      type: 'paragraph',
      html: '在本工具中，运营成本有三个层面。每月固定成本覆盖即使打印机空闲也存在的费用：租金、宽带、保险、软件、会计、仓储、基础人工保障以及其他管理费用。每月电费捕获打印机和直接相关的生产设备消耗的能源。每小时可变成本涵盖随实际生产时间变化的费用，如耗材、树脂、喷嘴、PTFE管、打印平台磨损、过滤器、润滑剂、维护配件和清洁易耗品。',
    },
    {
      type: 'paragraph',
      html: '将电费作为一个单独的月度输入项对打印农场非常有用，因为电能消耗通常是从账单或分表电表中追踪的，而不是按每个打印件计算。生产PETG、ASA、ABS或尼龙的加热腔体打印农场，其能源消耗情况可能与同一房间内的PLA农场截然不同。如果你已经计算了每台设备小时的电费，可以将该数值包含在每小时可变成本中，并将月度电费字段设为零。',
    },
    {
      type: 'table',
      headers: ['成本输入', '包含项', '应避免项'],
      rows: [
        ['每月固定成本', '租金、保险、宽带、软件、基础人工、仓储。', '仅在打印机运行时消耗的材料。'],
        ['每月电费', '打印机能耗、干燥箱、清洗机、固化箱、通风、温控分摊。', '无关的家庭或办公室用电。'],
        ['每小时可变成本', '耗材、树脂、喷嘴、维护易耗品、每小时折旧预留。', '一次性设备购买成本。'],
        ['初始投资', '打印机、货架、安装配置、工具、干燥箱、农场管理硬件。', '发布后定期发生的月度成本。'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '每月总工时', definition: '在计入利用率和打印失败折减之前的理论设备产能。' },
        { term: '实际生产时间', definition: '应用利用率和成功率折减后剩余的有效产能。' },
        { term: '投资回收期', definition: '月度净利润收回初始投资所需的月数。' },
        { term: '年化投资回报率', definition: '十二个月的净利润总和除以初始投资额。' },
        { term: '每小时可变成本', definition: '随实际打印时间而变化的易耗品和维护预留费用。' },
      ],
    },
    { type: 'title', text: '设定每台设备小时的销售单价', level: 2 },
    {
      type: 'paragraph',
      html: '每小时销售单价是向客户收取的每个生产性设备小时的金额。它可以直接显示在报价单上，也可以嵌入到包含材料、人工、后处理、包装 and 利润的定价公式中。关键在于一致性：如果每小时单价旨在包含材料，请勿在每小时可变成本中重复添加相同的材料。如果单价仅指设备折旧与机时，请确保材料和人工在商业模型的其他部分得到体现。',
    },
    {
      type: 'paragraph',
      html: '在单笔订单上看起来有竞争力的单价可能会在农场规模化运作时失效。长时打印占用了本可以服务其他订单的产能。精细的层高、慢速材料、高大零件和多支撑的几何形状都会降低产出率。因此，打印农场盈利能力计算器应与实际报价数据结合使用：平均任务持续时间、平均实付小时等值、客户接受率和月度订单量。',
    },
    {
      type: 'proscons',
      title: '打印农场中的小时定价法',
      items: [
        { pro: '使设备占用情况透明化，防止长时打印被低价估算。', con: '当一个轻量级零件耗费许多小时时，客户可能需要额外的解释。' },
        { pro: '非常适用于内部ROI规划和产能决策。', con: '不能替代材料、人工、后处理和风险的定价。' },
        { pro: '允许在打印机类型和利用率方案之间进行快速对比。', con: '如果忽略了失败率和排队等待时间，可能会产生误导。' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: '定价检查点',
      html: '<p>如果每小时单价的微小变化彻底改变了投资回收期，说明该投资对市场定价高度敏感。在购买更多打印机之前，请针对真实的客户需求验证单价合理性。</p>',
    },
    { type: 'title', text: '理解投资回收期与年化投资回报率', level: 2 },
    {
      type: 'paragraph',
      html: '投资回收期很容易理解，因为它以月为单位表示。如果初始投资为18000，每月净利润为3000，则回收期为6个月。如果每月净利润为零或负数，则投资回收是不可行的，因为在目前的假设下，农场永远无法收回投资。回收期对于资金规划、设备融资以及决定是现在扩大规模还是在需求改善后再进行非常有用。',
    },
    {
      type: 'paragraph',
      html: '年化投资回报率更为严格，因为它将一年的净利润与初始投资进行对比。如果投资回收缓慢，农场可能有正的月度利润，但年化ROI依然很低。例如，一个在24000投资上扣除成本后每月赚取1000的农场，在考虑原始投资之前每年产生12000，因此第一年的ROI仍为负值。这并不自动意味着该业务不好，但确实意味着投资者需要更长远的眼光。',
    },
    {
      type: 'summary',
      title: '决策规则',
      items: [
        '使用投资回收期来了解资金回收速度。',
        '使用年化ROI将打印农场与其他资金用途进行对比。',
        '在承诺扩大规模之前，以较低的利用率和成功率重新运行模型。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '情景测试才是真正的价值所在',
      badge: '规划',
      html: '<p>运行基准情况、保守情况和压力情况下的模拟。最好的投资不是那种仅在乐观情景下表现出色的投资，而是当需求、打印失败或电费成本发生不利变化时，其表现依然可以理解和接受的投资。</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
