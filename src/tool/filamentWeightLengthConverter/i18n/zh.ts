import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-weight-to-length-converter';
const title = '耗材重量转长度计算器：精确材料估算';
const description = '根据材料密度、1.75mm 或 2.85mm 直径，将耗材克数转换为米数和体积，并支持即时料盘余量检查。';

const faqData = [
  {
    question: '如何将耗材克数转换为米数？',
    answer: '用质量除以材料密度得到体积，将体积从立方厘米转换为立方毫米，再除以耗材直径的圆形横截面积即可。',
  },
  {
    question: '为什么耗材材料密度很重要？',
    answer: '同样重量的 PLA、PETG、ABS、TPU 或填充耗材所占体积不同，因为每种聚合物的密度不同。长度等于体积除以耗材横截面积，因此密度直接影响米数估算结果。',
  },
  {
    question: '1.75mm 耗材每公斤的长度是否总是相同？',
    answer: '不是。直径公差、材料密度、添加剂和含水率都会改变实际长度。计算器基于标称直径和密度提供规划估算值。',
  },
  {
    question: '这个计算器可以用于 2.85mm 耗材吗？',
    answer: '可以。输入 2.85mm，或切换到英制单位后输入等效直径，横截面积会立即更新。',
  },
];

const howToData = [
  { name: '输入耗材质量', text: '输入切片软件报告的耗材用量、料盘剩余重量，或任何你想要转换的克数值。' },
  { name: '选择材料类型', text: '选择 PLA、PETG、ABS、TPU、尼龙、PC 或填充复合材料，让计算器使用正确的密度值。' },
  { name: '设置耗材直径', text: '使用 1.75mm、2.85mm，或输入实测直径，使长度估算更贴合特定料盘。' },
  { name: '检查料盘余量', text: '可选输入料盘剩余重量，查看材料是否充足以及精确的富余或短缺量。' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '单位制',
    metricLabel: '公制',
    imperialLabel: '英制',
    inputsTitle: '材料用量估算',
    materialLabel: '材料',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: '尼龙 PA',
    materialPcLabel: '聚碳酸酯',
    materialWoodLabel: '木质 PLA',
    materialCarbonLabel: '碳纤维混合',
    materialMetalLabel: '金属 PLA',
    densityLabel: '密度',
    densityUnit: 'g/cm³',
    weightLabel: '耗材重量',
    weightSliderLabel: '打印重量滑块',
    diameterLabel: '耗材直径',
    stockLabel: '料盘剩余重量',
    stockPlaceholder: '可选余量检查',
    spoolStateLabel: '料盘状态',
    spoolScaleLabel: '已消耗 / 可用质量',
    cutLineLabel: '耗尽停止线',
    resultLengthLabel: '估算耗材长度',
    resultVolumeLabel: '聚合物体积',
    resultAreaLabel: '横截面积',
    resultGramsMeterLabel: '线密度',
    enoughLabel: '料盘充足',
    shortLabel: '料盘不足',
    noStockLabel: '余量检查未启用',
    surplusLabel: '富余',
    missingLabel: '短缺',
    formulaLabel: '计算路径',
    formulaText: '体积 = 质量 / 密度 → 长度 = 体积 / 横截面积',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm³',
    in3Unit: 'in³',
    in2Unit: 'in²',
    mm2Unit: 'mm²',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: '为什么基于密度的耗材克转米计算器更精确', level: 2 },
    { type: 'paragraph', html: '耗材重量转长度计算器的精确度取决于背后的材料模型。普通计算器通常假设每公斤耗材都占据相同体积，但 FFF 打印耗材按质量出售，而挤出机按长度消耗圆柱形线材。连接这两种度量方式的桥梁是<strong>密度</strong>。PLA 约 1.24 g/cm³、PETG 约 1.27 g/cm³、ABS 约 1.04 g/cm³、TPU 约 1.21 g/cm³，即使料盘重量和直径完全相同，它们转换出的米数也不相同。' },
    { type: 'paragraph', html: '计算从质量开始。克数除以密度得到以立方厘米为单位的体积。该体积随后转换为立方毫米，因为耗材直径通常以毫米计量。横截面积即圆的面积：π 乘以半径的平方。最后，体积除以面积得到以毫米为单位的长度，可转换为米或英尺。最终结果是一个实用估算值，用于检查切片软件计算的材料用量是否能在当前料盘的存量范围内完成打印。' },
    { type: 'stats', columns: 4, items: [
      { value: '1.24', label: 'PLA 典型密度（g/cm³）' },
      { value: '2.405', label: '1.75mm 标称耗材的横截面积（mm²）' },
      { value: '6.379', label: '2.85mm 标称耗材的横截面积（mm²）' },
      { value: '3 个输入', label: '质量、密度和直径决定转换结果' },
    ] },
    { type: 'table', headers: ['材料', '规划密度', '为什么这个值重要'], rows: [
      ['PLA', '1.24 g/cm³', '桌面打印的常见基准，是原型制作的良好基线。'],
      ['PETG', '1.27 g/cm³', '密度略高于 PLA，相同克数产生的长度更短。'],
      ['ABS', '1.04 g/cm³', '密度较低，相同直径下单位克数的长度比 PLA 更长。'],
      ['TPU', '1.21 g/cm³', '柔性耗材的密度接近 PLA，但仍值得单独建模。'],
      ['填充混合材料', '可变', '木质、碳纤维、金属和玻璃添加剂可能使密度大幅偏离基础聚合物。'],
    ] },
    { type: 'title', text: '耗材用量估算的精确换算公式', level: 2 },
    { type: 'paragraph', html: '数学模型刻意保持简洁，因为每一项都有其物理意义。横截面积等于 <code>π × (直径 / 2)²</code>。体积等于 <code>重量 / 密度</code>。当体积以 cm³ 为单位、横截面积以 mm² 为单位时，长度等于 <code>体积 × 1000 / 横截面积</code>；得到的结果为毫米，再除以 1000 即为米。这与切片软件中用于推算挤出体积、最大流量和材料用量的几何模型完全一致。' },
    { type: 'diagnostic', variant: 'info', title: '直径公差是最大的日常不确定性', badge: '测量提示', html: '标称 1.75mm 的料盘在整个卷料上可能并非精确的 1.75mm。由于面积取决于半径的平方，微小的直径差异会改变计算出的长度和实际挤出体积。常规余量检查使用标称直径即可。如需校准，请用卡尺测量多个点并输入平均直径。' },
    { type: 'list', items: [
      '从 PrusaSlicer、Cura、Bambu Studio 或 OrcaSlicer 等切片软件复制材料用量时，请使用克为单位。',
      '如需可靠的余量检查，请使用扣除空料盘皮重后的实测剩余重量。',
      '打印特种复合材料时，请使用制造商数据表中的密度值。',
      '当设备使用更粗耗材时，使用 2.85mm 而非 1.75mm，因为横截面积差异巨大。',
    ] },
    { type: 'tip', title: '剩余存量中请勿包含空料盘皮重', html: '放在秤上的料盘包含塑料或纸芯的重量。如果空料盘重 180g，秤显示 430g，则可用耗材应为 250g。输入毛重会使绿色充足信号过于乐观。' },
    { type: 'title', text: '相同重量下 1.75mm 与 2.85mm 耗材的长度对比', level: 2 },
    { type: 'paragraph', html: '直径的影响远超许多用户的预期。2.85mm 线材的横截面积是 1.75mm 的两倍以上，因此一公斤耗材转换出的米数要少得多。这并不意味着某种直径本身更经济；两者都能打印相同体积的零件。它意味着长度数字不能脱离直径背景进行比较。当切片软件报告克数时，它已经按质量归一化了材料用量；而当打印机的断料检测或手动料盘估算以米为单位思考时，直径就成了核心因素。' },
    { type: 'comparative', columns: 2, items: [
      { title: '1.75mm 耗材', description: '每公斤线材长度更长，是当前桌面打印机的主流规格。', points: ['适用于紧凑型挤出机', '相同料盘质量的米数更多', '标称横截面积约 2.405 mm²'] },
      { title: '2.85mm 耗材', description: '每公斤线材长度更短，进料横截面更大，常见于老旧或专业级设备。', points: ['标称横截面积约 6.379 mm²', '某些配置下对挤出机压缩不敏感', '不能套用 1.75mm 的假设'] },
    ] },
    { type: 'table', headers: ['场景', '变化因素', '规划影响'], rows: [
      ['同种聚合物，直径增大', '横截面积增加', '相同克数对应的米数减少。'],
      ['同一直径，密度降低', '体积增加', '相同克数对应的米数增加。'],
      ['相同克数，填充耗材', '密度可能增加', '米数可能低于预期。'],
      ['受潮耗材', '实测质量略微增加', '料盘看起来更重，但并未增加有用的干燥聚合物。'],
    ] },
    { type: 'title', text: '如何在开始长时间打印前使用料盘余量检查', level: 2 },
    { type: 'paragraph', html: '可选的剩余存量字段将转换器变成一个可行或不可行的仪表盘。输入打印任务所需的质量作为耗材重量，然后输入当前料盘上的可用耗材。输出结果直接对比克数，并使用相同的材料和直径模型将差额转换为米或英尺。绿色表示料盘存量充足；红色表示材料不足并显示精确的缺口。' },
    { type: 'card', icon: 'mdi:traffic-light', title: '为什么同时显示克数和米数', html: '克数是购买和切片软件的语言。米数是一些固件屏幕、断料估算和手动料盘计算的线材长度语言。同时显示两者可以避免一个常见规划错误：在一种密度假设下长度足够，但按实际材料计算质量却不够。' },
    { type: 'proscons', title: '存量验证方法', items: [
      { pro: '称量料盘快速简便，即使料盘已部分使用也适用。', con: '必须知道或估算空料盘的皮重。' },
      { pro: '使用切片软件的克数通常与材料购买重量一致。', con: '切片软件的估算会因清洗体积、支撑、裙边和修改网格而变化。' },
      { pro: '比较耗材路径和断料距离时，长度更直观。', con: '长度随密度和直径变化，在不同材料间不具备通用性。' },
      { pro: '基于密度的转换方法能更好地处理 PLA、PETG、ABS、TPU 和复合材料。', con: '制造商特有的添加剂可能需要自定义密度值。' },
    ] },
    { type: 'title', text: '复合材料和特种耗材需要自定义密度值', level: 2 },
    { type: 'paragraph', html: '填充耗材是一个正经的材料估算工具应当开放密度参数而非隐藏它的主要原因。木质 PLA、碳纤维尼龙、金属 PLA、夜光耗材、玻纤增强工程材料和类陶瓷混合物的密度可能与基础聚合物差异巨大。金属填充耗材因为密度高，手感更重；同样 500g 可能代表比标准 PLA 少得多的体积和长度。对于昂贵的工程打印件而言，这种差异并非学术问题，它可能决定打印件的最后百分之十是顺利完成还是中途耗尽。' },
    { type: 'glossary', items: [
      { term: '密度', definition: '单位体积的质量，此处以克每立方厘米表示。' },
      { term: '横截面积', definition: '由直径计算得出的耗材线材圆形截面积。' },
      { term: '线密度', definition: '所选材料和直径下，每米或每英尺耗材的重量克数。' },
      { term: '皮重', definition: '必须从秤的读数中减去的空料盘重量。' },
      { term: '标称直径', definition: '耗材的标称尺寸，通常为 1.75mm 或 2.85mm，未考虑实际公差。' },
    ] },
    { type: 'message', title: '以制造商数据为准', html: '如果料盘或技术数据表上标明了密度，请使用该值。通用密度预设值适合规划参考，但供应商特有的配方、颜料含量和增强材料可能改变实际数值。' },
    { type: 'title', text: '3D 打印材料估算的实用示例', level: 2 },
    { type: 'paragraph', html: '假设切片软件显示一个 PETG 支架需要 186g，而你有一个部分使用过的料盘。1.27 g/cm³ 的 PETG 搭配 1.75mm 耗材，约可转换为六十一米。如果扣除皮重后的可用料盘重量为 220g，仪表盘会显示富余 34g，并将该余量转换为约十一米。这个余量可能足够应付清洗线和一小圈裙边，但不足以弥补大的支撑失误。存量检查鼓励用户在无人值守打印前留出足够的缓冲。' },
    { type: 'paragraph', html: '现在对比 ABS。由于 ABS 密度低于 PETG，相同 186g 在同样 1.75mm 直径下会产生更大的体积，从而得到更长的米数。这并不意味着 ABS 零件本身更便宜（每公斤价格和打印设置也很重要），但它解释了为什么从一种材料复制的剩余米数估算值会误导另一种材料。对于库存管理而言，质量是稳定的起点，而密度是连接质量的桥梁。' },
    { type: 'summary', title: '可靠的材料规划检查清单', items: [
      '输入剩余存量前，先扣除空料盘皮重。',
      '对填充、增强或高端耗材使用实际材料密度。',
      '在信任任何长度数值前，确认你的设备使用 1.75mm 还是 2.85mm 耗材。',
      '为清洗、支撑、裙边、首层失败和切片参数变更预留余量。',
      '将绿色充足状态视为规划参考，而非对堵头或断料检测故障的保证。',
    ] },
    { type: 'title', text: 'SEO 焦点答案：耗材重量转长度一句话总结', level: 2 },
    { type: 'paragraph', html: '要将 3D 打印耗材重量转换为长度，将克数除以材料密度得到体积，乘以 1000 将 cm³ 转换为 mm³，除以 <code>π × (直径 / 2)²</code>，再除以 1000 得到米数。这种基于密度的方法比固定的克转米对照表更精确，因为 PLA、PETG、ABS、TPU、尼龙、PC 和复合耗材的密度值各不相同。' },
    { type: 'diagnostic', variant: 'success', title: '估算最可靠的条件', badge: '最佳实践', html: '当切片软件重量为最终值、料盘剩余重量已扣除皮重、直径已实测或已知、密度来自制造商时，计算结果最为可靠。在这些条件下，该转换器可成为长时打印、批量生产和昂贵技术聚合物的实用起飞前检查工具。' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
