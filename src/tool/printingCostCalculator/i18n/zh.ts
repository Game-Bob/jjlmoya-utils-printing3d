import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = '3d-printing-cost-calculator';
const title = '3D 打印成本计算器：耗材与能源';
const description = '计算 3D 打印的真实价格。包含材料成本、电力消耗、机器折旧及人工成本。';

const faqData = [
  {
    question: '为什么电力成本差异如此之大？',
    answer: '最大的电量消耗来自于加热床的保温。像 ABS (100°C) 这样的材料比 PLA (60°C) 消耗更多。此外，打印机是开放式还是封闭式结构也会产生影响。',
  },
  {
    question: '我如何知道我的打印机消耗多少瓦？',
    answer: '大多数家用打印机在运行时的平均功耗为 100-150W。您可以使用智能插座或功率计进行精确测量。',
  },
  {
    question: '什么是损耗率？',
    answer: '指不属于最终成品部分的耗材：支撑、底垫 (raft)、裙边 (skirt) 以及初始挤出的废料。为了估算的真实性，我们建议至少预留 5% 的损耗。',
  },
];

const howToData = [
  {
    name: '输入技术数据',
    text: '填写零件重量（由 Cura 等切片软件计算得出）、打印时间以及机器的平均功耗。',
  },
  {
    name: '配置经济成本',
    text: '调整耗材每卷的价格、您的电费费率，以及您对单次人工小时的定价。',
  },
  {
    name: '分析利润',
    text: '移动利润率滑块以查看建议零售价，并查看饼图了解资金流向。',
  },
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

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: '材料',
    partWeightLabel: '零件重量 (净重)',
    gramsUnit: '克',
    spoolPriceLabel: '耗材价格 (1kg)',
    spoolPriceUnit: '元/kg',
    wasteMarginLabel: '损耗率：',
    energyTitle: '能源与时间',
    printTimeLabel: '打印时间',
    hoursUnit: '小时',
    averagePowerLabel: '平均功耗',
    wattsUnit: '瓦特',
    electricityRateLabel: '电费费率',
    kwhPriceUnit: '元/kWh',
    amortizationTitle: '折旧与人工',
    machineCostHourLabel: '每小时机器成本',
    priceHourUnit: '元/h',
    laborCostHourLabel: '人工 (手工操作)',
    minutesUnit: '分钟',
    manufacturingCostLabel: '生产成本',
    suggestedPriceLabel: '建议价格 (+{margin}%)',
    costBreakdownTitle: '成本拆解',
    plasticLabel: '塑料费用',
    electricityLabel: '电力费用',
    machineLabel: '设备折旧',
    laborLabel: '人工费用',
    proTip: '您知道吗？打印 ABS 时将热床加热到 100°C 的电力成本可能是打印 PLA 的两倍。别忘了计算失败率：如果您的零件有 10% 的失败率，您的实际成本就要高出 10%。',
  },
  seo: [
    {
      type: 'title',
      text: '计算 3D 打印的真实成本：耗材之外的细节',
      level: 1,
    },
    {
      type: 'paragraph',
      html: '当我们开始进入增材制造的世界时，通常会认为唯一的成本就是从喷头中挤出的塑料。然而，如果您想将其作为一项事业，或者只是为了更好地管理您的爱好，您必须明白<strong>盈利能力</strong>隐藏在那些乍看之下不可见的细节中。',
    },
    {
      type: 'title',
      text: '3D 打印成本的四大支柱',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '我们的计算器将最终价格细分为四个基本领域：',
    },
    {
      type: 'summary',
      items: [
        '材料与损耗：包括零件本身的重量，但也包括支撑、裙边和校准废料所使用的塑料。我们始终建议增加 5-10% 的利润率以应对可能的打印失败。',
        '电力消耗：打印 PLA (热床 60°C) 与打印 ABS 或尼龙 (热床 100°C 以上) 消耗的电力不同。对于大型零件，每度电 (kWh) 的价格可能会产生显着差异。',
        '机器折旧：打印机运行的每一小时，其组件（同步带、风扇、喷嘴）都在磨损。包含少额的小时成本将使您有能力支付未来的维修费用。',
        '人工：您的时间是最宝贵的。准备文件、清理热床以及零件的后期处理都必须计入成本。',
      ],
    },
    {
      type: 'title',
      text: '如何计算折旧？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '一个简单的方法是将打印机的购买价格除以其预计的使用寿命（小时）。例如，如果一台打印机花费了 2800 元，而您期望它在大修前至少工作 2000 小时，那么它的折旧成本就是<strong>每小时 1.4 元</strong>。',
    },
    {
      type: 'tip',
      title: '节省电力',
      html: '<p>如果您打印量很大，请考虑为您的打印机添加封闭罩 (enclosure)。这不仅有助于打印工程材料，还能保持热量，使加热床在维持温度时消耗更少的能量。</p>',
    },
    {
      type: 'title',
      text: '销售价格策略',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '一旦您知道了基础成本，就必须决定您的利润率。在按需 3D 打印的世界中，通常在总成本的基础上增加 50-100% 的利润率，以覆盖意外失败的风险和商业利润。如果零件需要大量的手工打磨和喷漆工作，该利润率应更高。',
    },
    {
      type: 'summary',
      items: [
        '按时间定价：非常适合纯打印代工服务。',
        '按克定价：常见于大体积但结构简单的零件。',
        '按价值定价：如果设计是独一无二的，价格不应仅基于成本，而应基于客户愿意支付的价值。',
      ],
    },
  ],
  faqTitle: '关于 3D 成本的常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献与资源',
  bibliography: [
    {
      name: 'PrusaPrinters：计算 3D 打印成本',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D：材料与成本估算',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs：增材制造成本指南',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
