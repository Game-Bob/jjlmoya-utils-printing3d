import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'real-resin-cost-calculator-sla-dlp';
const title = 'SLA和DLP打印的实际树脂成本计算器';
const description = '通过密度转换、切片器体积以及针对复杂SLA和DLP部件的10%至15%的浪费修正，计算理论树脂成本和实际树脂成本。';

const faqData = [
  {
    question: '为什么实际树脂成本高于切片器成本？',
    answer: '切片器通常只报告模型和支撑中净固化的树脂量。它并不总是考虑留在构建平台上的树脂、被困在中空壁内的树脂、清洗损失、失败的支撑或无法干净倒回的残留物。',
  },
  {
    question: '我应该输入克还是毫升？',
    answer: '使用您的切片器导出的单位。如果它以克为单位报告，请从瓶子或技术数据表中输入树脂密度，以便计算器在计算打印价格之前将质量转换为体积。',
  },
  {
    question: '我应该使用哪个复杂程度系数？',
    answer: '对于带有简单支撑的实心部件，使用低；对于典型微型模型和功能性树脂部件，使用中；对于空心部件、密集支撑、空腔和打印后保留液态树脂的部件，使用高。',
  },
  {
    question: '这包括酒精、手套、过滤器或机器时间吗？',
    answer: '不。该工具仅隔离树脂材料成本。耗材、人工、后固化能源、失败品和机器折旧应在更广泛的工作报价中添加。',
  },
];

const howToData = [
  {
    name: '输入瓶子数据',
    text: '添加瓶子的净价、标称体积（毫升）以及树脂数据表或标签上显示的密度。',
  },
  {
    name: '粘贴切片器用量',
    text: '输入由Lychee、Chitubox、PrusaSlicer或其他切片器导出的模型树脂用量，然后选择克或毫升。',
  },
  {
    name: '选择复杂程度',
    text: '选择低、中或高复杂程度，以对切片器体积应用10%、12.5%或15%的浪费修正。',
  },
  {
    name: '比较理论成本和实际成本',
    text: '使用理论成本进行切片器比较，使用实际修正后的成本进行报价、批次处理和树脂库存规划。',
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

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: '树脂瓶',
    modelPanel: '切片器模型',
    resultPanel: '实际树脂成本',
    unitSystemLabel: '单位制',
    metricLabel: '公制',
    imperialLabel: '美制',
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
    bottlePriceLabel: '瓶子价格',
    bottleVolumeLabel: '瓶子容量',
    resinPresetLabel: '树脂预设',
    resinPresetOptions: [
      { label: '自定义 / 手动输入密度', density: '' },
      { label: '通用标准树脂 - 1.10 g/cm³', density: '1.10' },
      { label: '通用水洗树脂 - 1.08 g/cm³', density: '1.08' },
      { label: '通用类ABS树脂 - 1.10 g/cm³', density: '1.10' },
      { label: '通用高韧性树脂 - 1.12 g/cm³', density: '1.12' },
      { label: '通用柔性树脂 - 1.05 g/cm³', density: '1.05' },
      { label: '通用高温树脂 - 1.15 g/cm³', density: '1.15' },
      { label: '通用铸造树脂 - 1.12 g/cm³', density: '1.12' },
      { label: '通用陶瓷填充树脂 - 1.35 g/cm³', density: '1.35' },
      { label: 'Anycubic Standard - 1.10 g/cm³', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1.10 g/cm³', density: '1.10' },
      { label: 'Elegoo Standard - 1.10 g/cm³', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1.05 g/cm³', density: '1.05' },
      { label: 'Siraya Tech Fast - 1.09 g/cm³', density: '1.09' },
      { label: 'Siraya Tech Blu - 1.12 g/cm³', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1.10 g/cm³', density: '1.10' },
      { label: 'Formlabs Standard - 1.10 g/cm³', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1.18 g/cm³', density: '1.18' },
    ],
    densityLabel: '树脂密度 (g/cm³)',
    modelAmountLabel: '切片器用量',
    unitLabel: '用量单位',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: '部件复杂程度',
    lowComplexity: '低',
    mediumComplexity: '中',
    highComplexity: '高',
    lowHint: '实心部件、轻支撑，+10%',
    mediumHint: '典型树脂作业，+12.5%',
    highHint: '空心部件或密集支撑，+15%',
    theoreticalCostLabel: '切片器成本',
    realCostLabel: '实际成本',
    wasteCostLabel: '浪费修正',
    correctedVolumeLabel: '修正后体积',
    costPerMlLabel: '每毫升成本',
    bottlePrintsLabel: '每瓶可打印次数',
    savedSettingsLabel: '浪费系数',
    hollowPartTip: '带有排水孔的空心部件可能超过15%的浪费，因为树脂会残留在内壁、空腔、支撑件上以及清洗过程中。',
    conversionLabel: '切片器净体积',
    netFromSlicerLabel: '切片器净值',
    persistenceNote: '瓶子价格、瓶子容量和密度会保存在此浏览器本地。',
  },
  seo: [
    {
      type: 'title',
      text: '为什么SLA和DLP树脂成本需要浪费修正',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '切片器显示的树脂量是一个有用的起点，但它与实际打印过程中从瓶子中消失的树脂量并不相同。SLA、MSLA、LCD和DLP打印都使用装满液态光聚合物的料槽。部件逐层固化，但未固化的树脂仍然覆盖着模型、支撑件、构建平台、料槽薄膜以及任何通向树脂池的内部空腔。将切片器体积乘以瓶子每毫升价格的计算器会得出一个干净的理论数字。然而，车间报价需要修正后的数字。',
    },
    {
      type: 'paragraph',
      html: '该计算器将<strong>切片器成本</strong>与<strong>实际树脂成本</strong>分开。切片器成本是软件报告的净树脂量。实际成本应用了10%至15%的可控浪费系数。这个范围故意设置得很窄：它足够高以涵盖常见的树脂处理损失，但又不会高到将失败品、人工、酒精、手套、过滤器或后固化隐藏在材料项下。结果是用于单次打印或批次的实用可变材料成本。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: '实心部件和轻支撑的低修正' },
        { value: '12.5%', label: '普通树脂作业的默认修正' },
        { value: '15%', label: '空腔和密集支撑的高修正' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '不要将材料成本与作业成本混为一谈',
      html: '这里返回的数字仅指树脂材料。完整的销售价格还应包括失败打印、清洁酒精、丁腈手套、纸巾、过滤器、后固化时间、包装、机器磨损、设计时间和利润空间。',
    },
    {
      type: 'title',
      text: '计算器背后的公式',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '第一步是每毫升的瓶子价格：<code>每毫升成本 = 瓶子价格 / 瓶子容量_ml</code>。一瓶1000毫升的树脂以42欧元购买，每毫升的基础成本为0.042欧元。如果切片器显示一个微型模型消耗38毫升，则理论树脂成本为38 x 0.042 = 1.60欧元。这个数字对于在切片器内比较方向、挖空、支撑策略和批次很有用，但它假设切片器报告的每一毫升都是唯一消耗的树脂。',
    },
    {
      type: 'paragraph',
      html: '第二步应用修正后体积：<code>实际体积 = 切片器体积 x (1 + 浪费系数)</code>。使用默认的12.5%系数，一个38毫升的模型变为42.75毫升。实际材料成本变为42.75 x 0.042 = 1.80欧元。对于一个微小的模型来说差异很小，但在为一盘微型模型、牙科模型、珠宝母模、工程原型或生产夹具报价时就变得明显了。',
    },
    {
      type: 'table',
      headers: ['切片器体积', '瓶子成本', '系数', '理论成本', '实际成本'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1.05 EUR', '1.16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12.5%', '3.36 EUR', '3.78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6.30 EUR', '7.25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17.64 EUR', '20.29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: '对于生产批次，使用批次体积而非单个部件体积',
      html: '如果您要用多个副本填充构建平台，请根据整个平台的切片器体积进行计算。支撑塔、共享支撑结构和方向变化可能使批次比将单个孤立部件乘以副本数量更高效。',
    },
    {
      type: 'title',
      text: '选择合适的复杂程度系数',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '低复杂程度',
          description: '对于实心部件、简单支架、校准件、国际象棋棋子和支撑较少的模型，使用10%。',
          points: ['内部残留少', '支撑密度低', '容易滴回料槽'],
        },
        {
          title: '中复杂程度',
          description: '对于普通微型模型、牙科模型、桌游部件和带有中等支撑的功能性部件，使用12.5%。',
          points: ['典型后处理损失', '支撑上有些树脂', '良好的默认报价系数'],
          highlight: true,
        },
        {
          title: '高复杂程度',
          description: '对于空心壳体、空腔、密集支撑结构、格架结构和排水后留下大量残留物的部件，使用15%。',
          points: ['更多被困液体', '更多清洗损失', '更高的处理不确定性'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: '复杂程度系数不是对糟糕切片的惩罚。它是对液态树脂行为方式的修正。一个正确倾斜的简单实心块可以在几分钟后几乎完全滴干。一个带有小排水孔的空心雕像可以在壁内部、支撑周围和吸盘附近保留一层树脂膜。密集的支撑底座也会在立柱之间保持树脂。即使让部件在料槽上方滴干，到达清洗容器、手套、纸巾和过滤器的树脂也是作业消耗的实际材料的一部分。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '当15%不够时',
      html: '如果空心模型排水不良、有盲孔空腔、厚内部支撑或带纹理的内部，浪费可能超过15%。在这种情况下，将此计算器视为树脂基线，并在报价中添加单独的风险准备金。',
    },
    {
      type: 'summary',
      title: '快速系数选择',
      items: [
        '当模型为实心、紧凑且易于排水时，选择10%。',
        '当不确定或打印混合托盘时，选择12.5%。',
        '当部件为空心、支撑密集或几何形状复杂时，选择15%。',
        '在打印新的树脂、新的方向或易碎的客户部件时，添加单独的失败准备金。',
      ],
    },
    {
      type: 'title',
      text: '当切片器以克为单位报告时使用密度',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多切片器可以以毫升、克或两者同时报告树脂用量。树脂瓶通常按标称容量销售，常见为500 ml、1000 ml或1升。如果切片器以克为单位导出，计算器使用密度将质量转换为体积：<code>体积_ml = 克 / 密度</code>。树脂密度通常以g/cm³表示，1 cm³与1 ml体积相同。密度为1.10 g/cm³的树脂意味着110克约等于100毫升。',
    },
    {
      type: 'table',
      headers: ['切片器质量', '密度', '转换后体积', '为什么重要'],
      rows: [
        ['55 g', '1.10 g/cm³', '50.0 ml', '常见标准树脂估算'],
        ['55 g', '1.05 g/cm³', '52.4 ml', '较低密度意味着更多体积'],
        ['55 g', '1.20 g/cm³', '45.8 ml', '填充型或陶瓷树脂可能密度更高'],
      ],
    },
    {
      type: 'tip',
      title: '在技术数据表中查找密度',
      html: '对常见树脂使用预设目录，然后将密度输入视为最终的真实来源。如果您的确切树脂、颜色或批次与预设不同，请使用制造商技术数据表中的值覆盖该字段。不要假设所有树脂都是1.00 g/ml。',
    },
    {
      type: 'glossary',
      items: [
        { term: '密度', definition: '单位体积的质量。在树脂成本计算中，它允许您将切片器的克转换为瓶子的毫升。' },
        { term: '理论成本', definition: '在浪费修正之前，切片器净体积乘以瓶子每毫升成本。' },
        { term: '修正后体积', definition: '添加了10%、12.5%或15%的所选浪费系数后的模型体积。' },
        { term: '排水孔', definition: '空心树脂部件上的开口，使未固化的树脂在清洗和固化之前能够从内部排出。' },
      ],
    },
    {
      type: 'title',
      text: '为什么空心树脂打印件往往比预期更贵',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '挖空大型模型可以大幅减少固化树脂的体积，但并不能使打印件没有隐藏成本。空心壁需要排水孔，内部几何形状必须可清洗，模型内部被困的未固化树脂随后可能泄漏、导致部件开裂或干扰最终固化。切片器在挖空后可能显示更低的净体积，但处理过程变得更加敏感。这就是为什么高复杂程度默认使用15%。',
    },
    {
      type: 'proscons',
      title: '挖空与成本控制',
      items: [
        { pro: '大型展示模型可以使用更少的固化树脂。', con: '排水不良可能导致液态树脂留在部件内部。' },
        { pro: '较低的剥离力可以提高大截面上的成功率。', con: '额外的孔洞、塞子和清洗时间可能增加人工。' },
        { pro: '更轻的模型更容易运输和安装。', con: '如果壁厚和曝光时间未调整，薄壁可能失败。' },
      ],
    },
    {
      type: 'card',
      title: '实用空心打印规则',
      html: '如果空心部件从打印机中取出后经过正常排水仍然滴漏，请使用高系数并检查排水孔的布局。如果清洗后继续泄漏，问题就不仅仅是成本了；因为未固化的树脂残留在物体内部，可能会成为质量和安全问题。',
    },
    {
      type: 'title',
      text: '在不低估报价的情况下读取切片器估算值',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee、Chitubox、PrusaSlicer和其他树脂切片器根据网格、支撑、挖空以及有时树脂配置文件来估算树脂用量。这些估算值足以比较同一工作的不同版本。作为最终报价则较弱，因为它们不了解您的工作流程。每次作业后都过滤树脂的车间与将相同树脂保留在料槽中的爱好者的损失量不同。使用两级IPA清洗的用户与使用密封清洗站并在移动前让部件完全滴干的用户的损失量不同。',
    },
    {
      type: 'list',
      items: [
        '输入支撑后的整个平台估算值，而不是原始未支撑的网格体积。',
        '为瓶子价格和最终报价使用相同的货币；计算器可以使用近似汇率系数在常用货币之间转换显示的价格。',
        '购买特殊树脂时更新瓶子价格，因为铸造树脂、柔性树脂、牙科树脂和高温树脂的成本可能是标准树脂的数倍。',
        '当切片器质量和瓶子容量不共享相同单位时，使用密度转换。',
        '将失败率分开考虑，尤其是在打印脆弱的微型模型、薄牙科壳或新的支撑策略时。',
      ],
    },
    {
      type: 'message',
      title: '更好的报价习惯',
      html: '保存您的常用树脂瓶数据，粘贴切片器估算值，选择复杂程度，并记录两个数字。理论成本解释切片器估算值；实际成本保护您的材料库存。',
    },
    {
      type: 'title',
      text: '该计算器不包括的内容',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '树脂打印的成本不仅仅是树脂。该工具有意关注可变树脂消耗，因为在比较切片器输出与实际瓶子用量时，这是最常被低估的数字。它不包括酒精更换、洗涤剂、水处理、纸巾、一次性手套、FEP薄膜磨损、LCD屏幕老化、打印机折旧、电费、后固化时间、打磨、底漆、支撑去除、包装或平台费用。',
    },
    {
      type: 'table',
      headers: ['成本项目', '是否包含？', '计入位置'],
      rows: [
        ['打印使用的液态树脂', '是', '本计算器'],
        ['树脂残留物和正常处理浪费', '是', '复杂程度系数'],
        ['失败打印', '否', '根据材料和模型风险添加失败准备金'],
        ['IPA、手套、毛巾、过滤器', '否', '耗材项'],
        ['支撑去除和打磨', '否', '人工或后处理项'],
        ['打印机折旧', '否', '每小时机器费率'],
      ],
    },
    {
      type: 'summary',
      title: '可靠的树脂成本工作流程',
      items: [
        '根据您实际购买的瓶子计算每毫升价格。',
        '需要时使用树脂密度将克转换为毫升。',
        '使用经过支撑和挖空后的切片器输出。',
        '根据几何形状和处理损失应用10%至15%的修正。',
        '将失败品、人工、耗材和利润率保持在树脂材料数字之外。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
