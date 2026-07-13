import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ElephantFootCompensationCalculatorUI } from '../ui';

const slug = 'elephant-foot-compensation-calculator';
const title = '象脚补偿计算器：精确尺寸修正';
const description = '根据测量的尺寸误差、层高、Z 偏移压力和热床温度，计算 3D 打印第一层的负水平扩展和 CAD 倒角深度。';

const faqData = [
  {
    question: '最佳象脚补偿值是多少？',
    answer: '最佳值是测量的底部误差，经第一层高度、有效 Z 压力和热床温度校正后得出。此计算器将其报告为负切片器水平扩展值。',
  },
  {
    question: '我应该使用水平扩展还是 CAD 倒角？',
    answer: '对于快速的配置文件级修正，使用切片器水平扩展。对于功能部件（下边缘接触另一个部件、位于参考表面上或必须在切片器之间保持可重复性），使用 CAD 倒角。',
  },
  {
    question: '为什么热床温度会影响象脚？',
    answer: '更高的热床使下部聚合物更长时间保持柔软。软化的熔丝在喷嘴压力下可以水平流动，因此计算器会在 60°C 参考点以上增加修正。',
  },
  {
    question: '象脚与过度挤出相同吗？',
    answer: '不同。过度挤出影响许多层。象脚集中在第一层被压缩和热床加热的底部，尽管过度挤出可能使其恶化。',
  },
];

const howToData = [
  { name: '打印测试件', text: '使用与生产打印相同的材料、热床温度、第一层高度和第一层设置。' },
  { name: '测量底部误差', text: '从最宽的底部尺寸减去稳定的上部壁尺寸。' },
  { name: '输入压力和温度', text: '提供第一层高度、有效 Z 压力间隙和热床温度。' },
  { name: '应用修正', text: '在切片器中使用负水平扩展值，或在 CAD 中建模建议的 45 度倒角。' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<ElephantFootCompensationCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    controlsAriaLabel: '象脚补偿输入',
    resultsAriaLabel: '象脚修正结果',
    canvasAriaLabel: '当前和修正后象脚轮廓的横截面可视化',
    unitSystemLabel: '单位制',
    metricLabel: '公制',
    imperialLabel: '英制',
    materialLabel: '材料预设',
    plaLabel: 'PLA',
    petgLabel: 'PETG',
    absAsaLabel: 'ABS/ASA',
    customMaterialLabel: '自定义',
    measuredErrorLabel: '测量底部误差',
    layerHeightLabel: '第一层高度',
    zPressureLabel: 'Z 偏移压力间隙',
    bedTemperatureLabel: '热床温度',
    targetToleranceLabel: '目标公差',
    expansionLabel: '切片器扩展',
    chamferLabel: 'CAD 倒角',
    thermalFactorLabel: '热系数',
    verdictLabel: '尺寸精度目标',
    currentProfileLabel: '测量的象脚',
    correctedProfileLabel: '修正后轮廓',
    slicerCommandLabel: '切片器命令',
    cadCommandLabel: 'CAD 命令',
    copyButton: '复制修正报告',
    copiedButton: '已复制',
    copyTemplate: '象脚补偿：切片器水平扩展 {expansion}，CAD 倒角 {chamfer}（45度），热系数 {phi}，判断：{verdict}。',
    slicerCommandTemplate: '水平扩展：{expansion} {unit}',
    cadCommandTemplate: '45度 x {chamfer} {unit}',
    correctionCanvasTemplate: 'E_corr {correction} {unit}',
    pressureCanvasTemplate: 'phi_temp {phi} | Z 压力比 {ratio}',
    optimalVerdict: '< 0.05 mm 公差：修正可选，用卡尺验证。',
    watchVerdict: '受控偏差：应用切片器补偿并重新打印测试件。',
    severeVerdict: '严重底部扩散：在依赖切片器偏移前修正 Z 压力。',
    mmUnit: 'mm',
    inchUnit: 'in',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
    degreeUnit: '度',
    multiplierUnit: '倍',
  },
  seo: [
    { type: 'title', text: '作为尺寸精度问题的象脚补偿', level: 2 },
    { type: 'paragraph', html: '象脚是最初打印层超出标称 CAD 边界的向外扩展。在校准立方体上，它表现为底部凸缘。在工程部件上，它成为功能误差：燕尾槽卡住、靠近构建平台的孔闭合、卡扣失去间隙、配合板在凸起的边缘上摇晃、量规块不再齐平。因此，一个有用的<strong>象脚补偿计算器</strong>不能被视为外观流量调整。它必须将测量的尺寸误差转换为负水平扩展值，并在可能的情况下转换为 CAD 倒角，从设计本身中移除压缩的材料路径。' },
    { type: 'paragraph', html: '此计算器根据三个强烈影响缺陷的物理输入（测量的底部误差、第一层高度和有效 Z 压力间隙）对修正进行建模。核心关系是 <code>E_corr = 误差 x (层高 / Z 偏移压力) x phi_temp</code>。温度乘数 <code>phi_temp</code> 在 60°C 参考热床以上增加，因为更热的底部使聚合物更长时间保持柔软，允许喷嘴载荷将材料推向侧面。结果报告为切片器的负水平扩展和 CAD 的 45 度倒角深度。' },
    { type: 'stats', columns: 3, items: [
      { value: '0.01 mm', label: '尺寸调整的输入分辨率' },
      { value: '45度', label: '默认 CAD 倒角角度' },
      { value: 'phi_temp', label: '热床温度流量乘数' },
    ] },
    { type: 'diagnostic', variant: 'info', title: '测量误差，而不是视觉凸缘', html: '打印一个方形或矩形测试件，测量底部上方的标称壁或外部尺寸，然后测量第一层上的相同尺寸。这两个测量值之差就是象脚误差。不要从照片估算；该工具专为卡尺数据设计。' },

    { type: 'title', text: '象脚发生的原因：喷嘴压力、热量和塑料流动', level: 2 },
    { type: 'paragraph', html: '第一层被有意压缩，以便灯丝润湿热床并粘附。这种压缩将喷嘴变成一个小型压力施加器。熔融聚合物离开喷嘴，在喷嘴和构建表面之间被挤压，并且必须占据可用体积。当 Z 间隙太小时，没有足够的垂直空间容纳命令的挤出珠，因此材料横向流动。即使打印件的其余部分尺寸准确，底部也会变宽。' },
    { type: 'paragraph', html: '热床温度会改变严重程度。60°C 的 PLA 可能接近其玻璃化转变区域，75°C 的 PETG 保持粘性和柔顺性，100°C 热床上的 ABS 或 ASA 在最初几层保持温暖。更热的热床不仅改善附着力；它还延迟了底部的凝固。这就是为什么此计算器应用热系数：<strong>60°C 时为 1.00，每增加 5°C 加 0.05</strong>。因此，75°C 的 PETG 热床在限制前使用约 1.15 的系数。' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Z 压力主导', description: '非常低的喷嘴间隙使珠子变平并将塑料向外推。误差在第一层最尖锐，通常在 Z 偏移修正后改善。', points: ['宽第一条线', '有光泽的压碎表面', '类似裙边的边缘'] },
      { title: '热主导', description: '由于热床或腔室热量高，底部保持柔软。即使第一层合理，凸缘也可能延伸穿过多个层。', highlight: true, points: ['圆形下边缘', '常见于 PETG 或 ABS', '冷却缓慢'] },
      { title: '流动主导', description: '挤出乘数、灯丝直径或第一层流量过高。整个底部区域可能看起来过度填充，而不仅仅是周边。', points: ['第一层顶部粗糙', '线条过宽', '间隙闭合'] },
    ] },
    { type: 'tip', title: '将 Z 偏移用作输入，而非猜测', html: 'Z 压力间隙是迫使珠子进入热床的有效间隙。如果您的切片器报告第一层为 0.20 mm，但实际挤压表现如 0.10 mm，请使用较小的压力间隙。这使计算出的补偿更大，这与更压缩的珠子的物理特性相匹配。' },

    { type: 'title', text: '如何为计算器测量底部扩展', level: 2 },
    { type: 'paragraph', html: '使用一个具有已知外部尺寸的简单测试件，例如 20.00 mm、30.00 mm 或 40.00 mm。测试件应有笔直的垂直侧面、至少 8 到 12 mm 的高度，并且在第一次测试时没有倒角。在象脚消失的热床上方几毫米处测量主体尺寸。然后在底部最宽处测量相同尺寸。差值就是该轴的总外部误差。' },
    { type: 'paragraph', html: '如果 20.00 mm 的立方体在中间测量为 20.02 mm，但在底部测量为 20.24 mm，则相对于稳定主体的底部误差为 0.22 mm。输入 0.22 mm 而不是与标称值的差值。这将无关的收缩、XY 步进误差或切片器线宽偏差从象脚计算中移除。您是在隔离底部变形，而不是校准整个打印机。' },
    { type: 'list', items: [
      '在零件冷却至室温后进行测量，尤其是 ABS、ASA、PETG 和大型 PLA 零件。',
      '使用轻卡尺压力；挤压软化或纹理化的底部可能隐藏真正的凸缘。',
      '在 X 和 Y 侧进行测量，因为热床移动、风扇方向和龙门倾斜可能使缺陷不对称。',
      '忽略裙边和底边材料。在测量实际零件壁之前，清洁地移除裙边。',
      '应用补偿后重新打印相同的测试片，以便下一次测量具有可比性。',
    ] },
    { type: 'table', headers: ['观察', '可能原因', '最佳第一行动'], rows: [
      ['底部更宽但上部壁准确', '第一层压力导致的象脚', '使用此计算器并应用负水平扩展。'],
      ['每一层都过大', 'XY 比例、挤出乘数或灯丝直径误差', '在象脚补偿前校准流量和 XY。'],
      ['仅角落鼓胀', '压力提前、速度或冷却问题', '调整压力提前或角落速度。'],
      ['底面粗糙且半透明', '喷嘴太近或第一层流量太高', '在补偿前抬高 Z 偏移或减少第一层流量。'],
    ] },

    { type: 'title', text: '负水平扩展 vs CAD 倒角', level: 2 },
    { type: 'paragraph', html: '切片器水平扩展在生成刀具路径之前将多边形边界向内或向外偏移。对于象脚修正，设置通常为负值：如果底部测量值过宽 0.20 mm，切片器可能需要接近 -0.20 mm 的值，此处由层高、Z 压力和热床温度修改。这快速、可逆，并且对于每个零件共享相似第一层变形的批次非常有用。' },
    { type: 'paragraph', html: 'CAD 倒角从模型本身移除材料。计算器将 45 度倒角深度报告为 <code>误差 x sqrt(2)</code>，这对应于消除水平底部凸缘的对角面。CAD 倒角通常更适合关键接口，因为它们保留预期的上部壁尺寸，同时为第一层提供受控的释放路径。由于几何形状承载补偿，它们在切片器之间也更可移植。' },
    { type: 'proscons', title: '选择修正方法', items: [
      { pro: '负水平扩展可以按材料或打印机配置文件快速更改。', con: '如果全局应用，可能会影响小文本、薄壁、销钉和孔。' },
      { pro: 'CAD 倒角对于靠近构建平台的配合表面明确且可靠。', con: '它们需要模型编辑，并且可能不便于下载的零件。' },
      { pro: '将温和的切片器偏移与小倒角相结合可以控制严重的 PETG 或 ABS 底部。', con: '不重新测量就堆叠修正可能会使零件尺寸过小。' },
    ] },
    { type: 'message', title: '不要盲目补偿', html: '如果第一层明显过度挤压，请先修正 Z 偏移。补偿应移除剩余的可预测底部扩展，而不是隐藏正在犁过第一层的喷嘴。' },

    { type: 'title', text: '按材料建议的补偿', level: 2 },
    { type: 'paragraph', html: '材料行为很重要，因为粘附温度、玻璃化转变、冷却速率和粘度影响下部珠子在冻结前可以流动多远。PLA 在 Z 偏移合理后通常对小负水平扩展反应良好。PETG 可能需要更大的修正，因为它通常在热床上以更高温度打印，并且第一层调整为强附着力。ABS 和 ASA 在功能部件上可能需要 CAD 释放，因为热床和腔室使底部更长时间保持柔软。' },
    { type: 'table', headers: ['材料', '典型热床范围', '起始公差目标', '补偿备注'], rows: [
      ['PLA', '55-65 °C', '< 0.05 mm', '从精确的 Z 偏移开始，然后使用小的负水平扩展。倒角对于压配底座很有用。'],
      ['PETG', '70-85 °C', '< 0.07 mm', '预期更高的热系数。避免过度的第一层流量，因为 PETG 可能形成粘性圆形凸缘。'],
      ['ABS/ASA', '90-110 °C', '< 0.08 mm', '对生产零件使用 CAD 倒角。腔室热量可以使第一层保持柔顺。'],
      ['TPU', '40-60 °C', '特定应用', '柔性灯丝在卡尺下可能变形。轻柔测量，并优先选择几何释放而非激进的整体偏移。'],
    ] },
    { type: 'card', title: '为什么表格是起点', html: '纹理 PEI 板、光滑玻璃热床、喷嘴直径、线宽、第一层速度、冷却延迟、腔室温度和灯丝品牌都可能改变测量误差。表格设定预期；计算器应由您测量的测试件驱动。' },
    { type: 'summary', title: '材料调整优先级', items: [
      'PLA：先修正 Z 偏移，然后使用小的切片器补偿。',
      'PETG：监测热床温度和第一层流量，因为底部保持可移动性。',
      'ABS/ASA：在生产接口上优先使用 CAD 倒角，并在腔室预热后验证。',
      '柔性材料：测量方法很重要，因为底部可能在卡尺钳口下压缩。',
    ] },

    { type: 'title', text: '与象脚补偿交互的切片器设置', level: 2 },
    { type: 'paragraph', html: '不同的切片器以水平扩展、初始层水平扩展、象脚补偿、XY 补偿或第一层扩展等名称显示设置。全局水平扩展更改整个零件轮廓。仅第一层设置仅影响下层，通常对尺寸精度更安全。当切片器同时支持两者时，将第一层补偿用于象脚，并将全局 XY 补偿保留用于在整个高度上持续的校准尺寸误差。' },
    { type: 'paragraph', html: '线宽和第一层流量也与修正交互。非常宽的第一层线可以改善热床粘附，但增加了必须安装在喷嘴下方的体积。如果珠子无处可去（竖直方向），它会水平扩散。将第一层流量从 105% 降低到 100%，将 Z 偏移提高 0.02 mm，或将热床温度降低 5°C，可以比应用大的偏移更干净地减少所需的负扩展。' },
    { type: 'glossary', items: [
      { term: '水平扩展', definition: '在生成刀具路径之前扩展或收缩模型轮廓的切片器偏移。' },
      { term: '初始层扩展', definition: '仅应用于第一层或下层的变体，使其更适合象脚。' },
      { term: 'Z 压力间隙', definition: '确定第一个珠子被压缩程度的有效喷嘴到热床空间。' },
      { term: '热系数', definition: '此处用于表示当热床高于 60°C 时增加横向流动的乘数。' },
      { term: 'CAD 倒角', definition: '为压缩的第一层材料提供几何释放区域的建模倒角边缘。' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: '大的负扩展可能破坏小特征', html: '像 -0.35 mm 这样的值可能修复大盒子的外部底部，但会擦除微小的浮雕字母、减小窄肋条以及改变小柱子的直径。当所需修正很大时，将其视为重新检查 Z 偏移、第一层流量或热床温度的信号。' },

    { type: 'title', text: '精确象脚修正的工作流程', level: 2 },
    { type: 'list', items: [
      '使用与实际零件相同的材料、热床温度、第一层高度和第一层速度打印一个简单的校准测试件。',
      '测量底部上方的稳定主体尺寸，然后测量最宽的底部尺寸并相减。',
      '输入测量误差、第一层高度、有效 Z 压力间隙、热床温度和目标公差。',
      '在切片器中应用报告的负水平扩展，或在 CAD 中添加报告的 45 度倒角。',
      '重新打印测试件并在冷却后再次测量。',
      '如果残余误差仍高于公差，则以半步调整，而不是跳到极端全局偏移。',
      '仅当两个可重复的测试件在您的公差目标内一致时，才将设置锁定到材料配置文件中。',
    ] },
    { type: 'tip', title: '使用与生产相同的热床状态', html: '在厚热床上的第一次冷打印可能不同于热床预热 30 分钟后的第五次打印。如果生产工作是在热浸后运行的，则也在热浸后校准测试件。' },
    { type: 'diagnostic', variant: 'success', title: '良好修正目标', html: '对于实用的 FDM 尺寸工作，低于 0.05 mm 的底部偏差通常足够小，使装配配合由正常间隙设计控制，而不是由象脚凸缘控制。更严格的目标需要刚性机器、稳定的灯丝和可重复的测量技术。' },
    { type: 'summary', title: '关键要点', items: [
      '象脚是压力和温度变形问题，而不仅仅是视觉缺陷。',
      '使用相对于稳定壁的测量底部误差，而不仅仅是标称 CAD 尺寸。',
      '负水平扩展是切片器修正；45 度倒角是 CAD 修正。',
      '热床温度提高热系数，因为底部保持更柔软并更长时间横向流动。',
      '严重的补偿值应在生产使用前触发第一层 Z 和流量检查。',
    ] },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
