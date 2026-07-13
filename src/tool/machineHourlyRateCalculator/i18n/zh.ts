import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'machine-hourly-rate-production-cost-calculator';
const title = '机器小时费率与生产成本计算器';
const description =
  '根据功耗、电价、购买价格、使用寿命和打印时长，计算3D打印机的实际运营成本。';

const faqData = [
  {
    question: '如何计算3D打印机的每小时成本？',
    answer:
      '将每小时电费与每小时折旧费相加。电费等于瓦特数除以1000再乘以电价。折旧费等于购买价格除以使用寿命（小时）。',
  },
  {
    question: '为什么折旧在3D打印定价中很重要？',
    answer:
      '折旧代表了零件生产过程中消耗的机器价值。忽略它可能让打印件看起来有利可图，而打印机却在悄悄损失转售价值、可靠性和更换能力。',
  },
  {
    question: '我应该为桌面3D打印机使用什么样的使用寿命？',
    answer:
      '5000小时这个基准值是许多桌面打印机的实用起点，但生产农场应将其替换为维护历史、预期更换周期和实际运行时间数据。',
  },
  {
    question: '这与完整的3D打印报价是一回事吗？',
    answer:
      '不是。此计算器涵盖机器电费和硬件摊销。完整的报价还应包括耗材或树脂、人工、打印失败、后处理、包装、间接费用和利润率。',
  },
];

const howToData = [
  { name: '输入测量的打印机功率', text: '使用可比打印期间的平均瓦特数，而不仅仅是电源额定功率。' },
  { name: '设置打印时长', text: '将时长滑块移动到作业或生产批次的预期机器时间。' },
  { name: '添加能源和资产数据', text: '输入电价、机器购买价格和预估的使用寿命（运行小时数）。' },
  { name: '读取成本分配', text: '使用总成本、每小时费率以及电费与折旧的构成来为机器时间定价。' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  featureList: [
    '3D打印机功耗计算器',
    '机器每小时折旧计算器',
    '3D打印运营成本估算器',
    '电费与摊销成本构成',
  ],
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '机器小时费率输入',
    resultsAriaLabel: '机器小时费率结果',
    settingsLabel: '报价设置',
    currencyLabel: '货币',
    currencyOptions: [
      { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
      { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
      { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
      { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
    ],
    durationLabel: '生产时间',
    powerLabel: '平均功率',
    tariffLabel: '电价',
    purchasePriceLabel: '机器购买价格',
    usefulLifeLabel: '预估使用寿命',
    totalCostLabel: '运营成本总计',
    hourlyRateLabel: '机器小时费率',
    electricityLabel: '电费',
    depreciationLabel: '摊销',
    electricityPerHourLabel: '每小时能源成本',
    depreciationPerHourLabel: '每小时资产成本',
    compositionLabel: '成本构成：电费与摊销',
    insightLabel: '盈利洞察',
    utilizationLabel: '利用率压力',
    utilizationValueLabel: '已消耗的使用寿命',
    utilizationHint: '此作业消耗了预估机器寿命中显示的比例。',
    batchLabel: '批次运营成本',
    energyUsedLabel: '已用能源',
    costDriverLabel: '主要驱动因素',
    energyDriverLabel: '能源',
    assetDriverLabel: '资产',
    balancedDriverLabel: '均衡',
    electricityDominant: '该作业是能源驱动型：电价、热床尺寸、腔室温度和空闲预热时间对报价的影响将大于购买价格。',
    depreciationDominant: '该作业是资产驱动型：机器价格和使用寿命占主导地位，因此每闲置一小时都会削弱这台打印机的经济效益。',
    balancedDominant: '电费和摊销足够接近，两者都应出现在车间小时费率中，而不是将其中一个隐藏在加价内。',
    hoursUnit: '小时',
    wattsUnit: '瓦',
    kwhUnit: '千瓦时',
    currencySymbol: '\u00a5',
  },
  seo: [
    { type: 'title', text: '机器小时费率在3D打印中的含义', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>机器小时费率</strong>是在添加材料、人工、后处理、包装和利润之前，让打印机保持高效运转一小时的成本。在3D打印中，这个数字常常被低估，因为像耗材这样的显性成本比电费和硬件折旧这样的隐性成本更容易被注意到。一台桌面打印机每小时可能只消耗几分钱的电，但一台价值数千欧元的专业机器必须在其有限的使用寿命内收回其价值。此计算器将这两项机器成本分离出来，使生产报价从可衡量的基线开始。',
    },
    {
      type: 'paragraph',
      html: '该计算器使用两个透明的公式。电费成本为 <code>(W / 1000) x T x 电价</code>，其中 <code>W</code> 是平均瓦数，<code>T</code> 是以小时为单位的打印时长，电价是每千瓦时的电费。摊销成本为 <code>(购买价格 / 使用寿命小时数) x T</code>。总运营成本是两者之和。由于两个项都随时间变化，相同的公式也会产生一个清晰的小时费率：每小时电费加上每小时折旧费。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: '将瓦特转换为千瓦', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: '能源计费单位', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: '每小时线性机器成本', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: '总运营成本', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: '使用实测平均瓦特数',
      html: '<p>电源标签标注的是最大容量，而非打印机在实际工作中的消耗。为了获得更好的<strong>3D打印机功耗计算器输入</strong>，请使用功率计测量一次有代表性的打印，并对预热、打印、风扇、热床和待机阶段进行平均。</p>',
    },
    { type: 'title', text: '电费成本：将瓦特转化为生产成本', level: 2 },
    {
      type: 'paragraph',
      html: '电费成本取决于平均功耗，而不仅仅是打印机的标称瓦数。一台配备350W电源的机器，在预热后的小型PLA作业中平均可能只有90W，而一台带有热床和腔室的大型封闭式打印机在处理工程聚合物时可能会保持高得多的功耗。热床面积、腔室温度、喷嘴温度、环境温度、风扇占空比以及取件前的空闲时间都可能改变有效功率。',
    },
    {
      type: 'paragraph',
      html: '千瓦时转换简单但很重要。一台180W的打印机运行8小时消耗 <code>0.18 kW x 8 h = 1.44 kWh</code>。按每千瓦时0.25元计算，这部分作业的成本是0.36元。这听起来可能很少，但对于拥有多台机器、长时间PETG或ASA作业、加热干燥柜和气候控制装置的农场来说，微小的每小时差异可能会变成一笔可观的月度账单。',
    },
    {
      type: 'table',
      headers: ['输入项', '输入内容', '常见错误'],
      rows: [
        ['平均功率', '在整个打印周期内测量的瓦特数', '使用电源额定功率或预热峰值。'],
        ['时长', '机器占用时间（小时）', '忽略预热、冷却或排队等待时间。'],
        ['电价', '账单上的每千瓦时实际价格', '使用过时的全国平均水平而非车间电价。'],
        ['货币', '报价模型中使用的货币', '混淆欧元的硬件成本与美元的能量假设。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '能源成本在规模化之前是低的',
      badge: '农场规划',
      html: '<p>一台小型打印机可能不需要复杂的能源核算。但二十台每天运行长时间作业的打印机就需要了。只需改变时长，同样的电力公式可以按作业、按打印机、按单元或按月使用。</p>',
    },
    { type: 'title', text: '摊销：打印机盈利背后隐藏的成本', level: 2 },
    {
      type: 'paragraph',
      html: '摊销是对打印机因使用而消耗的财务确认。导轨磨损、风扇老化、热床失去平整度、热端堵塞、电子设备过时，机器最终需要更换。如果一台打印机花费900元，车间预期有5000小时的有用运行时间，那么机器每生产性的一小时就消耗0.18元的资产价值。因此，一个十小时的作业在考虑材料或人工之前就承担了1.80元的硬件成本。',
    },
    {
      type: 'paragraph',
      html: '这里的直线折旧法有意保持实用。它并不试图模拟税法、转售价值、融资或维护事件。相反，它回答了生产定价的问题：这台机器的购买成本中，有多少应该分配到每一个工作小时？这个数字是搜索<strong>3D打印机每小时折旧率</strong>以及任何希望在打印机达到其经济寿命终点时有更换资金可用的农场的基础。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '爱好级桌面打印机',
          description: '购买价格低，使用不规律。在热床作业中电费可能很明显，但如果出售零件，摊销仍然很重要。',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['资本风险较低', '使用寿命通常不确定', '手工劳动通常主导报价'],
        },
        {
          title: '专业级农场打印机',
          description: '适中的购买价格、高运行时间、重复的材料和许多相同的作业使每小时折旧成为关键的报价输入。',
          icon: 'mdi:factory',
          highlight: true,
          points: ['适合3000-8000小时的使用寿命假设', '跟踪实际维修', '将机器时间与人工分开'],
        },
        {
          title: '工业级系统',
          description: '高资本成本意味着摊销可能占主导地位。服务合同、建造腔室环境和认证时间可能需要额外的成本项目。',
          icon: 'mdi:domain',
          points: ['资本成本占主导地位', '停机成本高昂', '增加服务和设施间接费用'],
        },
      ],
    },
    {
      type: 'message',
      title: '使用寿命输入值得关注',
      ariaLabel: '使用寿命说明',
      html: '<p>默认的5000小时是一个起点，并非普遍真理。轻度使用的爱好级机器可能在达到这个数字之前就已过时，而维护良好的农场机器可能会超过它。使用符合您更换政策的数字。</p>',
    },
    { type: 'title', text: '无需猜测即可选择使用寿命小时数', level: 2 },
    {
      type: 'paragraph',
      html: '使用寿命是此计算器中最敏感的会计假设，因为它位于摊销公式的分母中。如果同一台900元的打印机被分配了3000小时的使用寿命，折旧是每小时0.30元。如果使用寿命为9000小时，则降至每小时0.10元。打印机没有改变，但业务预期改变了。这就是为什么报价应该记录所选的使用寿命假设，而不是将其埋没在通用的加价中。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '在可用时使用维护日志：喷嘴更换、风扇故障、导轨磨损、皮带、电路板、热端和热床表面揭示了真实的成本曲线。',
        '区分打印机系列。小型移动床打印机、CoreXY生产机和树脂打印机不应共享一个使用寿命数字。',
        '对于在失败的调试、材料测试或客户特定验证上花费大量时间的实验性机器，降低使用寿命。',
        '仅在运行时间、预防性维护、备件和更换历史支持该假设时，才提高使用寿命。',
        '在重大升级后重新审视该假设，因为新的运动系统、外壳或热端可能会改变资产的经济寿命。',
      ],
    },
    {
      type: 'table',
      headers: ['使用寿命假设', '最佳适用场景', '定价后果'],
      rows: [
        ['2000-3000小时', '实验性、低成本、文档不全或高负荷使用的机器', '较高的每小时折旧保护了更换资金。'],
        ['4000-6000小时', '具有定期生产使用的标准桌面或专业级机器', '许多小型农场的平衡起始范围。'],
        ['7000-10000小时', '拥有维护数据和受控材料的稳定打印机群', '较低的每小时资产成本，但需要对运行时间有信心。'],
        ['10000小时以上', '具有记录生命周期的工业或重度维护资产', '仅当服务和停机时间单独核算时有用。'],
      ],
    },
    {
      type: 'summary',
      title: '使用寿命检查清单',
      items: [
        '根据打印机类别匹配合适的使用寿命，而不是通用的网络数字。',
        '记录该假设，以便报价在数月后仍然可以解释。',
        '当机器从爱好用途转为付费生产时，重新计算。',
      ],
    },
    { type: 'title', text: '解读电费与摊销之间的分配', level: 2 },
    {
      type: 'paragraph',
      html: '构成条显示作业是能源驱动型还是资产驱动型。能源驱动型作业对电价、热床策略、腔室温度、预热行为和房间条件反应强烈。资产驱动型作业对购买价格、使用寿命和利用率反应更为强烈。均衡的分配意味着两者都不应被忽视；两者都应属于基本机器小时费率。',
    },
    {
      type: 'paragraph',
      html: '这种分配很有用，因为相同的总成本可能有不同的解决方案。如果电费占主导地位，降低热床温度、分组零件以避免重复预热、隔离外壳或在较低电价时段打印可能会有所帮助。如果摊销占主导地位，更好的杠杆是利用率：让打印机持续处理盈利的作业，避免闲置资本，并谨慎选择机器尺寸，而不是购买闲置不用的产能。',
    },
    {
      type: 'glossary',
      items: [
        { term: '电费成本', definition: '打印机在所选时长内消耗的计费能源。' },
        { term: '摊销', definition: '分配至作业所使用小时数的机器购买价格份额。' },
        { term: '使用寿命', definition: '打印机在经济上被替换之前的预期生产运行小时数。' },
        { term: '机器小时费率', definition: '在扣除材料、人工、间接费用和利润之前，每小时电费加上每小时折旧费。' },
        { term: '运营成本', definition: '为在特定时长内维持生产运行而产生的机器成本。' },
      ],
    },
    {
      type: 'proscons',
      title: '此计算器包含和排除的内容',
      items: [
        { pro: '包含实测功耗、电价、时长、购买价格和使用寿命。', con: '不包含耗材、树脂、支撑、打印失败、人工、租金、软件、包装或利润。' },
        { pro: '显示成本分配，使用户能够识别主要的经济驱动因素。', con: '使用直线折旧法，因此不模拟税务折旧计划或转售价值。' },
        { pro: '通过更改时长，适用于单次打印、单个批次或月度生产块。', con: '需要诚实的功率和使用寿命假设，以避免虚假的精确性。' },
      ],
    },
    { type: 'title', text: '使用结果来设定有盈利空间的小时价格', level: 2 },
    {
      type: 'paragraph',
      html: '计算出的每小时费率是机器时间的下限，而非最终销售价格。一份完整的3D打印报价通常会加上材料、支撑废料、清洗废料、操作员人工、切片和准备时间、打印失败容差、维护耗材、租金、软件、支付手续费、税费和目标利润率。机器小时费率仍然至关重要，因为它可以防止打印机本身被视为免费。',
    },
    {
      type: 'paragraph',
      html: '例如，如果计算器返回每机器小时0.225元，一个作业占用打印机14小时，则机器运营成本为3.15元。如果材料为4.80元，人工分配为6.00元，失败容差为1.20元，之后再加上利润率，那么这个报价在财务上就是可追溯的。当客户问为什么一个长时间的打印件比塑料重量所暗示的成本更高时，机器时间就变成了一个可解释的条目。',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: '盈利洞察',
      html: '<p>此计算是定义任何打印农场的<strong>每小时价格</strong>的基础。一旦知道了每小时的机器成本，车间就可以决定是直接收取机器时间费用，将其捆绑到材料加价中，还是内部使用它来比较打印机和材料。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '不要仅按克重报价',
      badge: '隐性成本',
      html: '<p>一个占用打印机20小时的轻量零件，可能比一个快速打印的重型零件消耗更多的机器产能。不考虑机器时间的基于重量的定价，往往会低估慢速、高、薄层或低流量的作业。</p>',
    },
    { type: 'title', text: '3D打印运营成本估算的实践案例', level: 2 },
    {
      type: 'paragraph',
      html: '一个调试好的PLA桌面作业可能平均120W，运行6小时，电价为每千瓦时0.22元，使用的打印机价格为600元，使用寿命为5000小时。电费仅为0.158元，而摊销为0.720元。总机器运营成本约为0.878元，小时费率约为0.146元。在这种情况下，作业明显是资产驱动型的：更好的机器利用率比小的功率变化更能影响盈利能力。',
    },
    {
      type: 'paragraph',
      html: '一个在较大的封闭式打印机上进行的ASA作业，在电价为每千瓦时0.30元的情况下，可能会在18小时内平均消耗420W。如果打印机价格为1800元，使用寿命为4500小时，则电费为2.268元，摊销为7.200元，总机器成本为9.468元。尽管能源使用量高得多，但折旧仍然占主导地位，因为资本成本和长时间的机器占用是巨大的。',
    },
    {
      type: 'paragraph',
      html: '树脂打印机可能讲述不同的故事。打印机可能消耗适中的电力，但计算仍然适用于机器占用。如果在一台价值2500元、预期产生4000小时使用寿命的机器上，一次成型需要9小时，仅摊销就达到5.625元。这个数字应在添加树脂、手套、IPA或清洗液、后固化、支撑和清洁人工之前就计入报价。',
    },
    {
      type: 'summary',
      title: '决策规则',
      items: [
        '使用实测平均瓦特数来保证电力准确性。',
        '使用现实的使用寿命小时数来回收资产。',
        '将结果视为机器时间的下限，然后加上材料、人工、间接费用、风险和利润。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
