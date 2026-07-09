import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-print-weight-infill-percentage-calculator';
const title = '3D打印重量填充百分比计算器';
const description =
  '根据100%填充的参考重量，估算改变填充百分比和图案时的零件重量、节省的耗材和材料成本。';

const faqData = [
  {
    question: '我能从100%填充重量估算3D打印重量吗？',
    answer:
      '可以，但估算应将外壳、壁、顶层和底层与内部填充分开考虑。零件在0%填充时不会变得无重量，因为外部周长仍然使用材料。',
  },
  {
    question: '为什么填充图案会改变估算重量？',
    answer:
      '不同的图案在相同的标称密度下会产生不同的刀具路径长度。线条和同心图案通常更轻，而蜂窝、立方体和三角形往往增加更多的内壁长度。',
  },
  {
    question: '切片器的重量比这个计算器更准确吗？',
    answer:
      '一旦模型、喷嘴、挤出宽度、壁数、顶层和材料配置文件已知，切片器会更准确。此计算器旨在快速规划，无需反复重新切片多个版本。',
  },
  {
    question: '我应该使用多少外壳比例？',
    answer:
      '对于许多装饰性或中等尺寸的FDM零件，20-35%的外壳占比是一个实用的起始范围。小零件、薄物体和有许多孔的零件可能具有更高的外壳占比。',
  },
];

const howToData = [
  {
    name: '从100%填充参考开始',
    text: '使用切片器为同一模型在100%填充时报告的重量，或称量已知完全致密的参考打印件。',
  },
  {
    name: '选择目标填充和图案',
    text: '移动填充滑块，选择最接近你计划使用的切片器设置的图案。',
  },
  {
    name: '调整外壳和浪费假设',
    text: '对于薄型或周长较重的模型增加外壳占比，然后为清洗、裙边、边缘、支撑和失败启动添加浪费。',
  },
  {
    name: '查看重量和成本节省',
    text: '将最终估算重量与100%填充基线进行比较，以确定材料节省是否值得牺牲刚度。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '填充重量输入',
    resultsAriaLabel: '估算打印重量结果',
    unitSystemLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '美制',
    currencyLabel: '货币',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
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
    fullWeightLabel: '100%填充重量',
    fullWeightHint: '使用切片器对同一模型在完全密度下的数值。',
    infillLabel: '目标填充',
    patternLabel: '填充图案',
    patternOptions: [
      { value: 'lines', label: '线条 - 轻量路径' },
      { value: 'grid', label: '网格 - 切片器基线' },
      { value: 'triangles', label: '三角形 - 刚性单元' },
      { value: 'gyroid', label: '螺旋 - 平滑晶格' },
      { value: 'cubic', label: '立方体 - 3D刚度' },
      { value: 'honeycomb', label: '蜂窝 - 致密壁' },
      { value: 'concentric', label: '同心 - 轮廓跟随' },
    ],
    shellShareLabel: '外壳占比',
    shellShareHint: '壁、顶层、底层以及不随填充缩放的整体特征。',
    spoolPriceLabel: '耗材价格',
    wasteLabel: '浪费',
    estimatedWeightLabel: '估算零件重量',
    filamentSavedLabel: '节省耗材',
    materialCostLabel: '材料成本',
    costSavedLabel: '节省成本',
    effectiveDensityLabel: '有效密度',
    shellLabel: '外壳',
    infillCoreLabel: '填充核心',
    patternImpactLabel: '图案乘数',
    comparisonLabel: '基线比较',
    fullInfillLabel: '100%填充',
    targetInfillLabel: '目标设置',
    insightLow: '很低的填充可以节省大量耗材，但顶面、螺丝凸台、卡扣和承重区域可能需要额外的壁或局部修改器。',
    insightBalanced: '这是许多视觉和轻功能打印的平衡规划区域：外壳承载形状，而填充控制刚度和成本。',
    insightHigh: '高填充会迅速缩小节省空间。在到处使用致密填充之前，考虑更多的壁、更强的图案或材料选择。',
  },
  seo: [
    { type: 'title', text: '3D打印重量填充百分比计算器的工作原理', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3D打印重量填充百分比计算器</strong>用于估算当模型以低于100%的内部密度打印时剩余塑料的量。重要的细节是，FDM重量不是简单地将总重量乘以填充百分比。以20%填充打印的模型通常不会重达完全致密版本的20%，因为壁、顶层、底层、小的整体区域、边缘和支撑界面仍然消耗耗材。该计算器从已知或切片器报告的100%填充重量开始，分离出可配置的外壳占比，然后根据目标填充和图案行为缩放内部核心。',
    },
    {
      type: 'paragraph',
      html: '该方法旨在快速比较，避免花费时间反复重新切片同一文件。如果一个完全致密的PETG支架估计为240克，切换到20%螺旋填充可能不会产生48克的零件。当外壳占比为28%时，在计算内部密度之前，周长质量已经约为67克。然后填充核心根据所选密度和图案乘数添加材料。结果是一个比线性填充数学更现实的规划估算，同时仍足够快以支持早期决策。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: '许多中型FDM零件的典型外壳占比', icon: 'mdi:cube-outline' },
        { value: '0.88x', label: '同心填充的轻量轮廓乘数', icon: 'mdi:chart-line' },
        { value: '1.16x', label: '蜂窝规划的致密路径乘数', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: '用作节省基线的参考重量', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: '为参考使用相同的切片器配置文件',
      html: '<p>要获得最准确的估算，请使用与目标打印相同的喷嘴、挤出宽度、壁数、顶层、底层、材料密度和支撑设置来生成100%填充重量。更改这些设置会改变外壳质量，因此仅比较填充会变得不那么有意义。</p>',
    },

    { type: 'title', text: '为什么填充重量不是线性的', level: 2 },
    {
      type: 'paragraph',
      html: '<em>填充百分比</em>这个术语听起来像一个直接的密度值，但切片器仅将其应用于生成周长和实体表面后留下的内部区域。一个带有两个壁和六个顶层的简单立方体可能具有很大的内部体积，因此填充百分比会强烈影响重量。一个薄的手机支架、一个带有许多孔的齿轮外壳或一个带有狭窄四肢的微缩模型可能具有如此多的周长几何形状，以至于降低填充产生的节省比预期要小。这就是为什么该计算器公开<strong>外壳占比</strong>而不是隐藏它。',
    },
    {
      type: 'table',
      headers: ['模型类型', '可能的外壳占比', '对节省的意义'],
      rows: [
        ['大型矩形外壳', '15-25%', '大部分质量是内部体积，因此填充会显著改变重量。'],
        ['装饰性人物或有机模型', '25-45%', '许多曲线和狭窄区域产生周长较重的几何形状。'],
        ['薄支架或面板', '35-60%', '壁和表面占主导地位；降低填充可能节省更少的塑料。'],
        ['小型机械卡扣', '45-70%', '模型可能仅通过周长就几乎成为实体。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '当估算看起来太重时',
      badge: '检查外壳占比',
      html: '<p>如果10%填充设置仍然产生较高的估算重量，则外壳占比可能很大。这对于小型或薄零件可能是正确的。验证壁数、顶层和底层的厚度，以及模型是否具有许多分离的岛屿或窄肋条。</p>',
    },
    {
      type: 'summary',
      title: '实用解读',
      items: [
        '填充百分比仅影响内部核心，而非整个打印件。',
        '0%填充的零件仍然有壁、表皮、接缝，有时还有小的实体特征。',
        '全重参考、外壳占比、图案选择和浪费余量共同产生更好的规划数字。',
      ],
    },

    { type: 'title', text: '填充图案重量乘数', level: 2 },
    {
      type: 'paragraph',
      html: '两个打印件都可以设置为25%填充，但由于刀具路径几何形状的变化，仍会使用不同数量的耗材。线条和同心图案通常产生更轻的内部路径，因为它们避免了一些交叉结构。网格、三角形、立方体、螺旋和蜂窝会产生不同量的重叠、方向增强和路径长度。该计算器通过应用于内部核心（而非整个零件）的一个小<strong>图案乘数</strong>来对此进行建模。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '线条和同心',
          description: '当最小重量和快速打印比均匀刚度更重要时很有用。',
          icon: 'mdi:format-line-spacing',
          points: ['更低的路径密度', '适合装饰零件', '方向强度可能不均匀'],
        },
        {
          title: '网格和螺旋',
          description: '对于刚度重要的一般视觉和功能性打印的平衡选择。',
          icon: 'mdi:grid',
          highlight: true,
          points: ['可预测的切片器基线', '良好的刚度重量平衡', '螺旋均匀分布载荷'],
        },
        {
          title: '立方体、三角形、蜂窝',
          description: '可以改善刚度但会减少耗材节省的更重的规划选择。',
          icon: 'mdi:hexagon-outline',
          points: ['更多的内壁长度', '更好的多向刚度', '更长的打印时间很常见'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '图案选择的权衡',
      items: [
        { pro: '较轻的图案可降低材料成本并可能缩短打印时间。', con: '它们可能产生较弱的方向或较少的顶面支撑。' },
        { pro: '致密图案可改善零件的刚度感并减少弯曲。', con: '它们可能接近更高填充的成本，而无法解决薄壁设计问题。' },
        { pro: '螺旋能在许多方向上均匀分布载荷。', con: '在具有保守加速度设置的机器上可能打印速度较慢。' },
      ],
    },
    {
      type: 'message',
      title: '图案乘数是规划假设',
      ariaLabel: '图案乘数说明',
      html: '<p>切片器引擎以不同方式实现图案。将乘数视为早期估算工具，然后通过实际的切片器预览和材料使用报告确认重要的生产任务。</p>',
    },

    { type: 'title', text: '计算耗材和成本节省', level: 2 },
    {
      type: 'paragraph',
      html: '材料成本估算将最终克数乘以每公斤线盘价格。如果计算器预测打印件为126克，线盘价格为每公斤24美元，则塑料部分约为3.02美元，尚未计算机器时间、电费、人工、包装和打印失败。节省的成本使用相同的浪费百分比将同一模型与100%填充基线进行比较。这对于报价、批次规划以及决定较重的填充设置是否值得额外材料非常有用。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '将浪费百分比用于清洗线、裙边、边缘、支撑、筏层、颜色更换和短暂的失败启动。',
        '对于单个原型，5-10%的浪费余量通常比零更现实。',
        '对于带有支撑或研磨性材料的生产批次，记录多个作业中的实际剩余和失败重量。',
        '在比较PLA、PETG、ABS、ASA、尼龙和填充复合材料时，使用确切材料的线盘价格，而不是一般平均值。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: '示例：从致密原型到生产填充',
      html: '<p>一个100%填充的原型重240克。以28%的外壳占比、20%螺旋填充、6%浪费和24美元/公斤的耗材，估算值在100多克左右，而不是48克。在为40个副本报价时，这个差异很重要：每个零件的小误差会变成整卷塑料。</p>',
    },
    {
      type: 'table',
      headers: ['输入', '为什么重要', '常见错误'],
      rows: [
        ['100%重量', '定义最大材料基线。', '使用与目标打印不同的壁数。'],
        ['目标填充', '控制内部核心密度。', '假设20%填充意味着总零件重量的20%。'],
        ['图案', '改变刀具路径长度和刚度。', '比较切片器预设时忽略图案。'],
        ['浪费', '添加零件外使用的实际耗材。', '忘记支撑和失败启动。'],
      ],
    },

    { type: 'title', text: '选择填充以节省重量而不产生薄弱的零件', level: 2 },
    {
      type: 'paragraph',
      html: '只有零件仍然能够执行其功能时，重量节省才有价值。对于视觉模型、展示道具、cosplay零件和盖子，低填充配合足够的顶层可能已经完美。对于支架、夹具、带螺钉的外壳、卡扣特征和暴露于热或冲击的零件，最佳的改进通常是更多的壁或局部加固，而不是简单地提高全局填充。一个带有四个壁和20%螺旋填充的零件在正确的位置可能比一个带有两个壁和50%填充的零件更坚固。',
    },
    {
      type: 'glossary',
      items: [
        { term: '外壳占比', definition: '完全致密重量中属于壁、顶层、底层和不可避免的实体几何的部分。' },
        { term: '标称填充', definition: '在切片器中为外壳生成后的内部区域选择的百分比。' },
        { term: '有效密度', definition: '结合外壳占比、填充百分比和图案乘数后完成的打印件的估算总密度。' },
        { term: '浪费余量', definition: '用于零件外材料的额外耗材，如清洗、边缘、支撑、测试和失败启动。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '不要将重量节省作为唯一的设计标准',
      badge: '功能打印件',
      html: '<p>跨越层线受力的零件、带螺纹嵌件的零件和受螺钉压缩的零件需要单独的机械考量。填充有帮助，但壁厚、方向、材料、温度和应力集中通常比密度本身更重要。</p>',
    },
    {
      type: 'summary',
      title: '快速决策规则',
      items: [
        '装饰性打印：先降低填充，然后验证顶面质量。',
        '轻型功能打印：在高填充之前使用平衡图案和足够的壁。',
        '支架和夹具：使用局部修改器加固孔洞、角落和载荷路径。',
        '批次作业：在购买材料之前用切片器确认最终估算。',
      ],
    },

    { type: 'title', text: '何时信任计算器以及何时重新切片', level: 2 },
    {
      type: 'paragraph',
      html: '此计算器最适合快速估算、早期报价、材料采购以及比较多种填充选项而无需反复打开切片器。当尺寸设置发生变化时，它不能替代切片器。如果更改喷嘴直径、挤出宽度、壁数、顶层厚度、底层厚度、自适应层、支撑样式、熨烫、花瓶模式或材料密度，则必须更新100%基线和外壳占比。',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        '当模型和配置文件基本固定且正在探索密度或图案时使用计算器。',
        '当壁数、支撑生成、喷嘴尺寸或材料配置文件发生变化时重新切片。',
        '当需要生产级成本记录或库存预测时称量完成的零件。',
        '记录重复作业的实际克数；真实数据将很快改进你的外壳占比假设。',
      ],
    },
    {
      type: 'tip',
      title: '可靠的报价工作流程',
      html: '<p>创建一个完全致密的切片器参考，使用此计算器估算几种填充选项，选择最有希望的两种，然后仅对这两个最终候选进行重新切片。这既保持了报价的快速性，又将最终价格建立在特定于切片器的材料报告之上。</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
