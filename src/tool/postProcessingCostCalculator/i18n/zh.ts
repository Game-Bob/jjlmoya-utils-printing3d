import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'post-processing-cost-calculator';
const title = '3D打印后处理成本计算器';
const description =
  '估算3D打印零件的手动修整、支撑去除、打磨、喷漆、其他人工、耗材以及货币换算后的后处理总成本。';

const faqData = [
  {
    question: '如何计算3D打印的后处理成本？',
    answer:
      '将所有手动修整的分钟数相加，乘以时薪除以60的结果，再加上耗材费用。本计算器还会显示每个修整阶段的成本占比。',
  },
  {
    question: '耗材费用是否应包含在手动修整成本中？',
    answer:
      '是的。砂纸、填充底漆、油漆、手套、美纹纸、IPA、树脂清洗液、擦拭布以及小工具的磨损，都可能足够显著，从而影响已完成零件的报价。',
  },
  {
    question: '货币换算会改变成本计算公式吗？',
    answer:
      '不会。货币仅改变显示的金额单位。人工成本公式不变：分钟数 × 时薪 ÷ 60 + 耗材费用。',
  },
  {
    question: '3D打印的人工成本应使用哪个时薪？',
    answer:
      '应使用车间的完整核算时薪，而非净工资。需包含工资、社保、有薪非计费时间、监督成本，以及外观修整所需的技能等级所对应的人力成本。',
  },
];

const howToData = [
  { name: '输入修整时间（分钟）', text: '以分钟为单位，填写支撑去除、打磨、喷漆及其他手动操作的时间。' },
  { name: '设置时薪与耗材', text: '以所选货币，填写每小时修整费率和直接耗材费用。' },
  { name: '选择货币与换算系数', text: '使用货币选择器选定符号，并可选填换算系数以便调整报价。' },
  { name: '复制结果', text: '点击复制按钮，将总计、人工、耗材及分钟数粘贴至报价单。' },
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
    '3D打印后处理成本计算器',
    '3D打印人工成本估算',
    '3D打印手动修整成本',
    '后处理时薪计算器',
  ],
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '后处理成本输入项',
    resultsAriaLabel: '后处理成本结果',
    currencyLabel: '货币',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    currencyOptionSeparator: ' - ',
    supportLabel: '支撑去除',
    sandingLabel: '打磨',
    paintingLabel: '喷漆',
    otherLabel: '其他人工',
    hourlyRateLabel: '时薪',
    consumablesLabel: '耗材',
    conversionFactorLabel: '换算系数',
    conversionFactorUnit: 'x',
    conversionHint: '若费率已按本地货币填写，请保持1不变；若需应用全局报价倍数，可修改该值。',
    minutesUnit: '分钟',
    hourUnit: '小时',
    rateUnitSeparator: '/',
    totalLabel: '后处理合计',
    laborLabel: '人工',
    consumablesBreakdownLabel: '耗材',
    timeLabel: '手动时间',
    effectiveRateLabel: '实际费率',
    breakdownLabel: '各修整阶段成本占比',
    copyLabel: '复制结果',
    copiedLabel: '已复制',
    copyTemplate: '后处理成本：{total}（{minutes}；人工 {labor}；耗材 {consumables}）',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: '本3D打印后处理成本计算器的测量对象', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3D打印后处理成本计算器</strong>旨在回答一个实际报价问题：打印机停机后会消耗多少费用？打印件可能已有机器时间成本和材料成本，但许多有偿订单的盈亏往往取决于支撑去除、打磨、填充、底漆、喷漆、清洁、遮蔽、检验和返工等环节。本计算器将这些手动修整任务拆分为分钟数，乘以后处理时薪，再加上直接耗材费用，从而得出可直接填入报价单的最终数字。',
    },
    {
      type: 'paragraph',
      html: '基础公式刻意保持透明：<code>（（支撑 + 打磨 + 喷漆 + 其他分钟数）×（时薪 ÷ 60））+ 耗材</code>。可选的换算系数在车间需要为货币换算、区域价格表、分包商加价或临时调整而对数值进行比例缩放时，会乘以时薪和耗材。若用户直接填写本地人工费率，系数应保持为 <code>1</code>，结果不受汇率假设影响。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '分钟 × 费率/60', label: '人工成本公式', icon: 'mdi:clock-outline' },
        { value: '5个阶段', label: '支撑、打磨、喷漆、其他、耗材', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: '默认换算系数', icon: 'mdi:swap-horizontal' },
        { value: '实时计算', label: '无需点击计算按钮', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: '为人工报价，而非为打印机报价',
      html: '<p>后处理通常以人工为主要成本。打印时间长的零件修整成本可能很低，而外观面带有支撑的小零件则可能需要昂贵的专业手工处理。请将<strong>3D打印人工成本估算</strong>作为独立报价行，而不是隐藏在材料加价中。</p>',
    },
    { type: 'title', text: '支撑去除：首要手动成本驱动因素', level: 2 },
    {
      type: 'paragraph',
      html: '支撑去除不仅仅是将塑料从模型上拉下来所需的时间。它还可能包括切割、加热、溶解、冲洗、刮除、修剪支撑残留、保护脆弱特征，以及检查支撑痕迹是否需要额外的表面处理。FDM的树状支撑、密集接触层、SLA支撑尖端和SLS脱粉各自产生不同的人工分布。要获得可靠的<strong>3D打印手动修整成本估算</strong>，支撑去除时间应在类似订单上实测，而非根据打印时长推算。',
    },
    {
      type: 'table',
      headers: ['支撑情况', '典型耗时表现', '报价注意事项'],
      rows: [
        ['易断支撑', '去除时间短、可预测', '通常适合按件设定固定分钟配额。'],
        ['密集支撑界面', '修剪时间较长，需进行表面清洁', '将打磨分钟数单独填写，以便让成本驱动因素保持可见。'],
        ['树脂微缩模型或精细模型', '需缓慢剪切以避免损伤', '若需要专业手工操作，应使用更高时薪。'],
        ['可溶支撑', '手动切割较少，但处理流程耗时更长', '若操作员参与液体处理和干燥过程，应将其纳入计时。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '不要仅凭切片软件中的支撑体积来估算支撑去除成本',
      badge: '人工风险',
      html: '<p>支撑体积可能很小，但访问难度极大。隐藏在狭窄特征内部的小支撑，可能比外部干净脱离的大支撑耗费更多人工。</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '为重复出现的零件族记录支撑去除时间。',
        '将去除与打磨分开记录，以便更容易比较支撑策略决策。',
        '对脆弱几何体、细销、微缩模型和客户可见面应提高估算值。',
        '使用与报价其余部分一致的货币和时薪基础。',
      ],
    },
    { type: 'title', text: '打磨、填充与表面处理', level: 2 },
    {
      type: 'paragraph',
      html: '打磨往往是3D打印成品中最大的隐性成本，因为它是一个反复迭代的过程。操作员可能需要经历粗磨、填充、固化或干燥等待、细磨、局部修正，以及在斜光下检验等多个环节。层高、材料硬度、支撑痕迹、所需光洁度和零件几何形状，都会影响手工作业量。一个功能性夹具可能只需五分钟；一个展示样件可能在打开油漆之前就需要一个小时。',
    },
    {
      type: 'paragraph',
      html: '计算器将打磨视为"分钟 × 每小时修整费率"，因为该流程受操作员而非机器制约。砂纸、填充底漆、腻子、无尘布、遮蔽材料等耗材，应填入耗材字段，而非隐藏在时薪中。这样可使<strong>3D打印修整成本分析</strong>保持清晰可读：人工反映时间压力，耗材反映采购投入。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '功能性修整',
          description: '清理锋利边缘、去除支撑、将粗糙痕迹处理到足以装配的程度。',
          icon: 'mdi:wrench-outline',
          points: ['打磨时间最短', '耗材最少', '检验聚焦于配合精度'],
        },
        {
          title: '展示级修整',
          description: '可见面光滑处理，选择性喷涂底漆，减少层纹以供客户审查。',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['打磨时间适中', '底漆与填充腻子可能是必要的', '外观面是人工主要驱动因素'],
        },
        {
          title: '喷漆就绪修整',
          description: '涂色前进行渐进式打磨、填充、遮蔽和缺陷修正。',
          icon: 'mdi:spray',
          points: ['手工时间最长', '耗材不可忽视', '建议预留返工余量'],
        },
      ],
    },
    {
      type: 'message',
      title: '磨料是耗材',
      ariaLabel: '耗材说明',
      html: '<p>砂纸、打磨海绵、针锉、腻子、手套和擦拭布都不是免费的。当订单消耗其中相当一部分时，请将其直接成本纳入计算。</p>',
    },
    { type: 'title', text: '喷漆与涂层成本估算', level: 2 },
    {
      type: 'paragraph',
      html: '喷漆时间（分钟）应包含操作员的主动操作时间：遮蔽、调漆、喷涂、刷涂、补色、揭去遮蔽、清洁工作区和检验。被动晾干或固化时间只有在占用操作员或占据稀缺喷漆房容量（需按人工或间接费用计费）时，才应纳入计算。这一区分可防止<strong>后处理时薪计算器</strong>将每一段等待时间都转化为人工成本，即便此时没有人在主动处理零件。',
    },
    {
      type: 'table',
      headers: ['喷漆任务', '记为人工？', '记为耗材？'],
      rows: [
        ['遮蔽与揭蔽', '是，主动操作分钟数', '美纹纸、遮蔽薄膜、塞头和模板'],
        ['调配油漆或树脂涂层', '是，主动操作分钟数', '油漆、稀释剂、量杯、过滤器、手套'],
        ['喷涂或刷涂', '是，主动操作分钟数', '涂层材料与清洗溶剂'],
        ['晾干时间', '仅在占用有偿人工或喷漆房容量时计入', '通常不涉及直接材料，除非热源或灯具单独计费'],
      ],
    },
    {
      type: 'tip',
      title: '明确为颜色复杂度单独报价',
      html: '<p>单层底漆与双色遮蔽修整的材料成本可能相近，但人工成本差异可能极大。在应用利润率之前，请使用喷漆时间字段将这一差异展示出来。</p>',
    },
    {
      type: 'proscons',
      title: '固定修整配额 vs 实测修整分钟数',
      items: [
        { pro: '固定配额对于修整要求稳定的重复订单处理速度快。', con: '当订单发生变化时，它会掩盖哪个阶段在消耗利润。' },
        { pro: '实测分钟数使估算可追溯，且易于更新。', con: '需要车间记录常见零件类型的实际修整时间。' },
        { pro: '可视化成本条使面向客户的报价在内部更易解释。', con: '无法替代对外观风险和返工概率的专业判断。' },
      ],
    },
    { type: 'title', text: '耗材与后处理间接费用', level: 2 },
    {
      type: 'paragraph',
      html: '耗材是修整过程中消耗的直接材料，可能包括砂纸、底漆、腻子、油漆、树脂清洗液、IPA、纸巾、丁腈手套、刀片、美纹纸、保护塞、一次性杯子、过滤器、抛光剂和清漆。部分车间会将其归入间接费用，但对于修整标准特殊、表面面积大、打磨量大或大量使用溶剂的订单，将其作为直接字段单独核算更为稳妥。',
    },
    {
      type: 'paragraph',
      html: '独立的耗材字段同样适用于<strong>后处理间接费用计算</strong>工作流程。间接费用通常比耗材范围更广：租金、排风、照明、空气过滤、压缩机使用、维护、软件、监管和行政时间。本计算器不尝试分摊每条间接费用项目，而是提供一个清晰的直接成本小计，可输入更大的报价模型，由该模型在后续步骤中应用间接费用和利润率。',
    },
    {
      type: 'glossary',
      items: [
        { term: '人工费率', definition: '分配给主动手动修整时间的每小时成本或销售费率。' },
        { term: '耗材', definition: '后处理中消耗的直接材料，如磨料、涂层、手套和清洁液。' },
        { term: '换算系数', definition: '应用于货币输入项的全局乘数，用于货币比例调整或报价修正。' },
        { term: '直接成本', definition: '可归属于正在修整的特定零件或批次的成本。' },
        { term: '间接费用', definition: '支持生产的业务成本，但无法以简单可测量的方式归因于单个零件。' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: '利润率应在哪里加入',
      html: '<p>本工具计算的是利润前的修整成本。请在汇总材料、机器时间、后处理、风险和间接费用后再应用利润率；否则，人工密集型订单可能会被低估报价。</p>',
    },
    { type: 'title', text: '货币选择与换算系数', level: 2 },
    {
      type: 'paragraph',
      html: '货币选择会更改符号，并可利用实用参考系数换算现有货币输入值。计算本身与货币无关：时薪30、耗材10所产生的结构完全相同，无论符号是欧元、美元、英镑、日元还是其他支持货币。这对国际报价非常实用，因为计算保持稳定，而展示方式与客户或车间所在位置相匹配。',
    },
    {
      type: 'paragraph',
      html: '换算系数适用于用户不希望自动换算汇率、或需要自定义商业乘数的场景。系数 <code>1</code> 表示时薪和耗材已按所选本地货币填写。系数 <code>1.15</code> 将两项货币输入均提高15%。系数 <code>0.92</code> 将其降低8%。由于系数影响的是金额而非分钟数，可视化分解图将与调整后的成本保持比例关系。',
    },
    {
      type: 'summary',
      title: '货币使用规则',
      items: [
        '使用选择器进行符号设定以及常用货币之间的便捷换算。',
        '当输入值已为本地货币时，将换算系数保持为1。',
        '针对区域报价手册、分包商加价或临时商业调整，使用自定义系数。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '汇率不是会计政策',
      badge: '定价说明',
      html: '<p>如需开具正式发票、纳税或生成会计报告，请使用贵公司规定的汇率和舍入规则。本计算器仅用于估算生产成本和准备报价。</p>',
    },
    { type: 'title', text: '利用可视化分解提升利润', level: 2 },
    {
      type: 'paragraph',
      html: '比例条不仅仅是装饰。它展示了哪个修整阶段在消耗资金。若打磨占主导，调整打印方向、层高、支撑界面或材料可能会减少手动时间。若喷漆占主导，报价可能需要单独的修整层级。若耗材占主导，批量采购或不同涂装工艺的效益可能优于提升人工效率。若支撑去除占主导，重新设计支撑接触点可能是最高价值的干预措施。',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        '若支撑去除占比最大，请审查支撑类型、密度、接触Z距离和打印方向。',
        '若打磨占比最大，请审查层高、焊缝位置、填充策略，以及报价的修整级别是否超过价格所能承载的范围。',
        '若喷漆占比最大，请将单色、遮蔽和高端修整拆分为不同报价层级。',
        '若耗材占比最大，请检查涂层、树脂清洗液、磨料和遮蔽材料是否存在浪费或回收不足的情况。',
      ],
    },
    {
      type: 'table',
      headers: ['主导成本', '可能原因', '定价应对措施'],
      rows: [
        ['支撑去除', '访问困难、支撑密集、细节脆弱', '增加支撑复杂度附加费或重新审视打印方向。'],
        ['打磨', '外观要求高、层纹明显、支撑痕迹', '建立修整等级，并为喷漆就绪准备单独收费。'],
        ['喷漆', '遮蔽、多色、喷漆房清洁', '将喷漆作为独立服务项单独报价。'],
        ['耗材', '涂层、磨料、溶剂、防护用品', '建立直接耗材追踪机制，或设定最低材料费用。'],
      ],
    },
    {
      type: 'summary',
      title: '报价工作流程',
      items: [
        '按阶段实测主动手动操作分钟数。',
        '使用包含全部成本的修整时薪。',
        '单独计入直接耗材费用。',
        '将计算结果复制到报价单，再在完整定价模型中应用间接费用和利润率。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
