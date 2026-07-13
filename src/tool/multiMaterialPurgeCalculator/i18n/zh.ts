import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MultiMaterialPurgeCalculatorUI } from '../ui';

const slug = 'multi-material-purge-calculator';
const title = '多材料冲洗计算器：分析与优化耗材浪费';
const description = '使用颜料强度矩阵估算AMS和MMU冲洗塔体积、浪费的耗材质量以及颜色切换的过渡成本。';

const faqData = [
  {
    question: '为什么从黑色到白色的冲洗系数高于从白色到黑色？',
    answer: '深色颜料对浅色聚合物的污染比浅色颜料对深色聚合物的污染更明显。因此，计算器将黑色到白色建模为高系数过渡，将白色到黑色建模为低系数过渡。',
  },
  {
    question: '这个计算器能替代切片机的冲洗体积设置吗？',
    answer: '不能。它是一个诊断规划工具，用于在切片或预算前估算冲洗成本。最终的机器特定调优请使用切片机的校准结果。',
  },
  {
    question: '冲洗比率多高才算过高？',
    answer: '当废物比率超过总挤出体积的30%时，工具会标记为高废物比率。该阈值通常意味着需要审查颜色顺序、分组、冲洗至填充或模型分割。',
  },
  {
    question: '除了颜色切换，我也可以用它来计算材料切换吗？',
    answer: '当前矩阵主要关注颜料污染。混合聚合物、可溶性支撑、研磨性材料以及温度变化可能需要超出颜色系数的额外冲洗。',
  },
];

const howToData = [
  {
    name: '输入物体体积和基础冲洗体积',
    text: '输入实际模型体积，以及您的AMS或MMU配置文件在一次正常耗材切换中使用的标准冲洗体积。',
  },
  {
    name: '选择起始颜色和目标颜色',
    text: '使用圆形颜色选择器选择每次过渡。过渡系数会立即根据颜料矩阵更新。',
  },
  {
    name: '设置过渡次数',
    text: '输入每种颜色对在作业中出现的次数。重复的深色到浅色切换将主导总冲洗估算值。',
  },
  {
    name: '查看比率、质量和成本',
    text: '使用物体与冲洗对比条、废物质量和成本结果，判断在正式生产前是否需要重新组织打印顺序。',
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

export const content: ToolLocaleContent<MultiMaterialPurgeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '单位制',
    metricLabel: '公制',
    imperialLabel: '英制',
    currencyLabel: '货币',
    currencyOptions: [
      { code: 'EUR', label: 'EUR' },
      { code: 'USD', label: 'USD' },
      { code: 'GBP', label: 'GBP' },
      { code: 'JPY', label: 'JPY' },
      { code: 'CAD', label: 'CAD' },
      { code: 'AUD', label: 'AUD' },
      { code: 'CHF', label: 'CHF' },
      { code: 'MXN', label: 'MXN' },
      { code: 'BRL', label: 'BRL' },
      { code: 'CNY', label: 'CNY' },
      { code: 'IDR', label: 'IDR' },
      { code: 'KRW', label: 'KRW' },
      { code: 'PLN', label: 'PLN' },
      { code: 'RUB', label: 'RUB' },
      { code: 'SEK', label: 'SEK' },
      { code: 'TRY', label: 'TRY' },
    ],
    modelInputsTitle: '成本模型',
    objectVolumeLabel: '物体体积',
    basePurgeLabel: '每次切换基础冲洗量',
    densityLabel: '密度 g/cm3',
    priceLabel: '每公斤价格',
    transitionsTitle: '颜料过渡矩阵',
    fromLabel: '起始颜色',
    toLabel: '目标颜色',
    colorLabels: {
      white: '白色',
      natural: '原色',
      yellow: '黄色',
      red: '红色',
      blue: '蓝色',
      green: '绿色',
      gray: '灰色',
      black: '黑色',
    },
    countLabel: '切换次数',
    objectLabel: '物体实际塑料',
    purgeTowerLabel: '冲洗塔废物',
    totalWasteLabel: '冲洗体积',
    wasteCostLabel: '废物成本',
    purgeRatioLabel: '冲洗比率',
    massLabel: '废物质量',
    loadbarAriaLabel: '物体体积与冲洗塔体积对比',
    alertTitle: '检测到高废物比率',
    alertText: '检测到高废物比率：建议将相似颜色分组。',
    efficientText: '冲洗比率在计划限值内。',
    factorGuideTitle: '按过渡分类的冲洗系数指南',
    transitionLabel: '过渡',
    factorLabel: '系数',
    volumeLabel: '冲洗体积',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    gUnit: 'g',
    ozUnit: 'oz',
  },
  seo: [
    {
      type: 'title',
      text: 'AMS和MMU冲洗废物如何成为实际生产成本',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多材料打印不仅仅在可见的物体上消耗耗材。每次颜色或材料切换都会在热端、熔融区、喷嘴以及有时在下一次挤出路径的起始端留下熔融聚合物。打印机必须在该路径中推入足够的新耗材，直到下一个可见表面变得干净。在AMS、MMU、工具头切换器和调色板式工作流程中，这种清洗挤出物通常会变成冲洗塔、冲洗块、冲洗线或废料槽堆积物。重要的经济观点很简单：冲洗塔可以像任何其他零件一样定价，因为它具有体积、质量和材料成本。',
    },
    {
      type: 'paragraph',
      html: '通用计算器通常将切换次数乘以一个固定的冲洗体积。这对于粗略预算有用，但它忽略了彩色打印中最昂贵的故障模式：<strong>不对称污染</strong>。从白色到黑色所需的清洗与从黑色到白色不同。少量黑色颜料混入白色PLA、PETG或ABS中会很快显现，而少量白色混入黑色中通常会被更深的颜料负载所掩盖。该工具使用过渡矩阵，因此每个方向都有其自己的乘数。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '30%', label: '仪表盘使用的高冲洗比率警报阈值' },
        { value: '1.6x', label: '默认黑色到白色过渡乘数' },
        { value: '0.8x', label: '默认白色到黑色过渡乘数' },
        { value: '0个按钮', label: '所有计算在编辑时即时更新' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '值得关注的高成本症状',
      badge: '废物审计',
      html: '当冲洗塔超过物体与冲洗总体积的30%时，该作业不再仅仅是彩色打印。这是一个材料转化过程，购买的大部分耗材变成了非产品输出。正是在这一点上，在机器启动之前，颜色排序、模型分割、冲洗至填充和批处理值得关注。',
    },
    {
      type: 'title',
      text: '计算器背后的过渡矩阵',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '核心模型是 <code>Vtotal = sum(Vbase x Ka,b)</code>。<code>Vbase</code> 是一次标准耗材切换的基础冲洗体积。<code>Ka,b</code> 是从颜色 <code>a</code> 到颜色 <code>b</code> 的过渡系数。系数低于1意味着过渡通常比基线更容易。系数高于1意味着下一种颜色对污染敏感，或者前一种颜色具有强烈的颜料残留。结果是立方厘米单位的冲洗体积，然后使用耗材密度转换为质量。',
    },
    {
      type: 'paragraph',
      html: '成本公式为 <code>Cwaste = ((Vtotal x density) / 1000) x priceKg</code>。如果冲洗塔使用80 cm³的PLA（密度1.24 g/cm³），则消耗99.2克耗材。每公斤24，则该塔的材料成本为2.38，尚未考虑电费、机器时间、颜色过渡失败或后处理。对于爱好打印来说这可能可以接受，但对于重复生产来说，它是一个明确的成本项目。',
    },
    {
      type: 'table',
      headers: ['过渡', '默认系数', '如此加权的原因'],
      rows: [
        ['白色→黑色', '0.80x', '黑色能隐藏少量浅色残留物，因此可见污染容忍度更高。'],
        ['黑色→白色', '1.60x', '白色中的深色残留物立即可见，通常需要更长的冲洗。'],
        ['原色→白色', '1.15x', '半透明或原色材料可能在熔融路径清洁之前给不透明白色着色。'],
        ['黄色→白色', '1.35x', '黄色颜料虽不如黑色严重，但可能给浅色表面染上暖色或污渍。'],
        ['红色→黄色', '1.08x', '红色残留会强烈改变黄色及橙色相邻颜色的色调。'],
        ['灰色→黑色', '0.72x', '灰色残留通常被黑色颜料掩盖，因此可以减少冲洗量。'],
      ],
    },
    {
      type: 'tip',
      title: '使用您的切片机校准值作为基础体积',
      html: '首先运行您的打印机的供应商或社区冲洗校准，然后将该结果作为基础冲洗体积输入。矩阵应缩放已知基线，而不是取代针对喷嘴直径、热端体积、耗材路径长度和切片机行为的机器特定调优。',
    },
    {
      type: 'title',
      text: '聚合物不透明度改变所需冲洗体积的原因',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '不透明度控制着前一种颜色的污染在下一种材料中的可见程度。不透明白色要求很高，因为它强烈反射光线，并会显示表面附近的深色颗粒或条纹。原色和半透明耗材表现不同：它们可能隐藏较少质量，但会在深度上显示色调，尤其是在薄壁或背光部件中。红色和蓝色等高饱和度颜色也可能污染后续浅色，因为强色度所需的颜料浓度即使在低残留水平下仍然可见。',
    },
    {
      type: 'paragraph',
      html: '打印机不懂色彩科学。它只挤出长度或体积。用户必须决定可见结果是否需要外观纯度、功能分离还是仅仅粗糙的颜色变化。玩具、标志、标牌面、光栅画框或面向客户的外壳可能需要激进冲洗。隐藏的内部支撑、草稿原型或治具的背面可以容忍更多残留。计算器通过使冲洗塔在过渡方向更难时增大来揭示这种权衡。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '浅色目标',
          description: '白色、原色、黄色和浅灰色是敏感目标。在这些颜色看起来干净之前，深色或高饱和度的前一种颜色需要更长的冲洗。',
          points: ['使用更高系数', '将浅色部分组合在一起', '避免重复从黑色返回白色'],
        },
        {
          title: '深色目标',
          description: '黑色、海军蓝、深绿色和深灰色可以隐藏来自较浅颜色的残留物。这些过渡通常可以使用较小的乘数。',
          points: ['可见风险较低', '浅色之后的良好目标', '序列中有用的最终颜色'],
        },
        {
          title: '相似色调过渡',
          description: '相关颜色之间的移动通常比从深色到浅色的跨越成本更低。红色到橙色或灰色到黑色通常比蓝色到黄色更容易。',
          points: ['颜色排序很重要', '色调族减少浪费', '将相似物体一起批处理'],
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '基础冲洗体积', definition: '在矩阵缩放前，切片机或校准配置文件为一次普通耗材切换所挤出的标准体积。' },
        { term: '过渡系数', definition: '分配给颜色变化一个方向的乘数，例如黑色到白色或白色到黑色。' },
        { term: '冲洗比率', definition: '冲洗体积除以总挤出体积，包括物体和冲洗塔。' },
        { term: '颜料残留', definition: '残留在热端并出现在下一次挤出中的前一种耗材颜色的可见残留物。' },
        { term: '冲洗至填充', definition: '一种切片机策略，将部分清洗挤出物重定向到隐藏的填充物中，而不是冲洗塔或废料槽。' },
      ],
    },
    {
      type: 'title',
      text: '如何在不影响色彩质量的前提下减少AMS耗材浪费',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '第一个优化是颜色顺序。如果模型可以分割、分组打印或安排使得深色到浅色过渡发生更少次数，冲洗塔可以显著缩小。重复的黑色到白色切换成本高昂，因为每个周期都要求打印机在敏感情目标之前去除强颜料。如果相同的视觉设计可以白色到黑色一次打印完成，或作为单独零件稍后组装，材料预算会立即改变。',
    },
    {
      type: 'paragraph',
      html: '第二个优化是目标颜色的选择。当几种颜色可选时，为出现在浅色区域之后的细节选择深色最终颜色。例如，白色铭牌上的黑色文字通常比黑色铭牌上的白色文字更便宜，因为后者迫使打印机在每个白色片段之前清理深色残留。这不仅是一个美学决定；它改变了必须通过热端推入的聚合物的物理量。',
    },
    {
      type: 'list',
      items: [
        '在模型或打印队列中将相似颜色分组，使相关色调共享过渡。',
        '当内部颜色污染可接受且零件有足够填充体积时，使用冲洗至填充。',
        '通过将徽章、标志、标签或装饰嵌件分割成单独的打印件来减少颜色切换。',
        '在设计允许时，在浅色之后使用深色。',
        '使用实际色样调整冲洗倍率，而不仅仅是依赖切片机默认值。',
        '在客户报价中单独计算冲洗成本，确保装饰性多色工作不被低估。',
      ],
    },
    {
      type: 'proscons',
      title: '优化权衡',
      items: [
        { pro: '较低的冲洗系数可减少冲洗塔质量和耗材成本。', con: '冲洗过少可能导致条纹、着色或不可接受的客户面向表面。' },
        { pro: '分割模型可以消除许多颜色切换。', con: '组装增加了人工、公差管理、胶水、紧固件或可见接缝。' },
        { pro: '冲洗至填充将部分废物转化为有用的内部塑料。', con: '只有在物体有足够隐藏体积且污染在结构上可接受时，效果才最佳。' },
        { pro: '相似颜色批处理可改善打印农场经济效益。', con: '可能会延迟需要特定颜色顺序的紧急单件作业。' },
      ],
    },
    {
      type: 'title',
      text: '为客户和打印农场制定多材料打印预算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '仅对最终物体体积定价的打印报价对于AMS和MMU作业是错误的。客户购买的是制造过程，而该过程包括非产品挤出。一个有很多逐层颜色切换的小钥匙扣可能比一个较大的单色支架浪费更多材料。计算器通过将物体体积和冲洗塔体积作为两个竞争块进行比较，而不是将废物隐藏在一个单一数字中，使这一点可视化。',
    },
    {
      type: 'paragraph',
      html: '对于农场来说，冲洗比率也是一个调度信号。高冲洗作业在将耗材转化为塔塑料的过程中占用了打印机，因此经济损失不仅仅是材料。更换耗材、切割、装载、擦拭和重建压力所花费的机器时间，是未用于生产可销售体积的时间。当冲洗比率很高时，考虑该物品是否应收取多色附加费，是否应限制颜色，或者涂装、印刷标签或组装解决方案是否更便宜。',
    },
    {
      type: 'card',
      title: '多色工作报价规则',
      html: '先对物体定价，然后将冲洗塔作为单独的废物项目定价。如果客户从两种颜色改为四种颜色，或在许多层上添加小的孤立细节，即使可见模型体积几乎没有变化，也要更新报价，因为过渡次数发生了变化。',
    },
    {
      type: 'table',
      headers: ['冲洗比率', '解释', '建议措施'],
      rows: [
        ['低于15%', '高效多色作业', '通常的报价假设通常可以接受。'],
        ['15%至30%', '材料损失可见', '审查过渡并检查冲洗至填充是否有帮助。'],
        ['高于30%', '高废物比率', '将颜色分组，分割模型，提高报价，或重新设计颜色布局。'],
        ['高于50%', '冲洗塔主导经济性', '将该打印视为特殊生产作业，而非常规物体打印。'],
      ],
    },
    {
      type: 'title',
      text: '解读仪表盘结果',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '两个水平条块是故意严格显示的。绿色是实际物体体积。条纹冲洗块是不会成为可见产品的材料。如果条纹块开始看起来在物理上与物体块相当，则打印物值得仔细审视。这种视觉比率通常比克或货币更有说服力，因为它向用户准确显示有多少塑料被分配到清理中。',
    },
    {
      type: 'paragraph',
      html: '质量结果来自体积乘以密度。PLA通常在1.24 g/cm³左右，PETG通常在1.27 g/cm³左右，ABS较低，填充耗材差异很大。价格结果使用选定的每公斤价格。如果您使用特殊丝绸PLA、碳纤维混合物、可溶性支撑或工程耗材，请替换默认价格和密度。相同的冲洗体积在不同材料下可能具有截然不同的经济权重。',
    },
    {
      type: 'summary',
      title: '决策检查清单',
      items: [
        '使用实测的切片机冲洗校准值作为基础体积。',
        '计算重复的过渡次数，而不仅仅是AMS或MMU中加载的颜色数量。',
        '首先关注黑色到白色、高饱和度到浅色以及半透明目标的过渡。',
        '将超过30%的冲洗比率视为重新设计或报价警告。',
        '使用成本结果进行材料预算，使用视觉条进行快速设计审查。',
      ],
    },
    {
      type: 'message',
      title: '实用底线',
      html: '当颜色切换安排得当，使得冲洗塔相对于物体保持较小时，多材料打印才是高效的。如果冲洗塔增长超过30%的警告线，最便宜的优化通常不是新线盘或更快的配置文件，而是更好的颜色策略。',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
