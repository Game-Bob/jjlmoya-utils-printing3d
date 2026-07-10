import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = '3d-print-time-estimator-layer-height-speed';
const title = '基于层高和速度的3D打印时间估算器';
const description =
  '通过结合模型高度、层高、打印速度、填充率、复杂程度、移动开销和耗材用量，无需打开切片软件即可估算3D打印的时长。';

const faqData = [
  {
    question: '没有切片软件如何估算3D打印时间？',
    answer:
      '您可以根据总层数、大致材料体积、平均打印速度、填充率以及用于移动和方向改变的余量来估算。对于最终作业，切片软件仍然更精确。',
  },
  {
    question: '为什么层高对打印时间影响这么大？',
    answer:
      '层高改变了Z轴方向的层数。在相同的模型高度下，0.12mm的配置文件产生的层数远多于0.28mm的配置文件，因此打印机会重复更多次的外围、填充和层间切换开销。',
  },
  {
    question: '为什么实际打印时间比速度除以距离更长？',
    answer:
      '打印机在拐角、短线段、小细节、回抽、Z轴移动和移动路径中很少能保持设定的速度。加速度限制和开销使得实际耗时比理想运动计算更长。',
  },
  {
    question: '这比切片软件的估算更准确吗？',
    answer:
      '不。此计算器用于早期规划、报价和探索性比较。切片软件可以检查精确的几何形状、支撑、接缝、加速度设置、挤出宽度和刀具路径顺序。',
  },
];

const howToData = [
  { name: '输入模型高度', text: '使用模型或计划打印作业中最高的物体的Z轴高度。' },
  { name: '选择层高', text: '使用实际的打印配置文件值，例如典型的FDM草稿质量设置为0.20mm。' },
  { name: '添加速度、占地和填充', text: '使用平均打印速度、近似的XY占地面积为目标填充百分比。' },
  { name: '调整复杂程度和开销', text: '为微小的细节增加复杂程度，为大量移动、支撑或回抽增加开销。' },
  { name: '比较速度场景', text: '使用40、60、80 mm/s的行来查看更快的打印速度是否显著改变总作业时间。' },
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

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D打印时间估算器输入',
    resultsAriaLabel: '估算的3D打印时间结果',
    unitSystemLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '美制',
    modelHeightLabel: '模型高度',
    modelHeightHint: '打印件的最高Z轴尺寸。',
    layerHeightLabel: '层高',
    speedLabel: '平均打印速度',
    footprintLabel: '估算占地面积',
    footprintHint: '用作体积代理的近似XY面积。',
    infillLabel: '填充密度',
    complexityLabel: '复杂程度系数',
    complexityHint: '简单形状为0.80，微小细节和短线段为1.20。',
    overheadLabel: '移动开销',
    filamentDiameterLabel: '耗材直径',
    densityLabel: '材料密度',
    timeLabel: '预计打印时间',
    layersLabel: '总层数',
    materialLabel: '材料估算',
    filamentLabel: '耗材长度',
    effectiveSpeedLabel: '有效速度',
    baseTimeLabel: '挤出时间',
    overheadTimeLabel: '开销时间',
    comparisonLabel: '速度比较',
    minutesUnit: '分钟',
    hoursUnit: '小时',
    layersUnit: '层',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: '倍',
    lowInsight: '短时间估算：切片软件的开销、热床预热和冷却可能占实际经过时间的很大一部分。',
    balancedInsight: '平衡估算：速度变化很重要，但层数和开销仍然影响最终时长。',
    highInsight: '长时间估算：在单纯提高速度之前，请考虑更厚的层、更低的填充率、更少的支撑或拆分模型。',
  },
  seo: [
    { type: 'title', text: '如何根据层高和速度估算3D打印时间', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>基于层高和速度的3D打印时间估算器</strong>在您需要打开切片软件之前获得规划数字、比较多个打印配置文件或根据粗略尺寸对零件进行报价时非常有用。核心思路很简单：模型高度除以层高得出层数，估算的挤出路径长度除以平均速度得出运动时间。困难之处在于真实的FDM打印并非一条干净的传送带。喷嘴在拐角处减速，回抽中断挤出，移动增加了非打印距离，短线段很少能达到设定速度。',
    },
    {
      type: 'paragraph',
      html: '此计算器有意超越了最基本的公式。它不假设<code>高度 / 层高 / 速度</code>就足够了，而是结合了近似模型体积、填充密度、挤出线宽、复杂程度系数、换层时间和移动开销百分比。结果仍然是估算值，不能替代切片软件，但它回答了用户搜索的实际问题：<strong>如果我改变层高、填充率或速度，我的3D打印需要多长时间</strong>。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0.20 mm', label: '平衡打印的常见FDM层高', icon: 'mdi:layers-outline' },
        { value: '15-20%', label: '有用的移动和运动开销起始范围', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: '桌面打印机的典型比较速度', icon: 'mdi:speedometer' },
        { value: '1.75 mm', label: '计算材料长度时常用的耗材直径', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: '使用平均速度，而非最高速度',
      html: '<p>如果您的切片软件配置文件显示120 mm/s，但外壁以40 mm/s运行，小外围以25 mm/s运行，填充以90 mm/s运行，那么平均打印速度就不是120 mm/s。对于规划而言，现实的平均速度通常比配置文件中最快的运动提供更好的估算。</p>',
    },

    { type: 'title', text: '为什么层高对时长有如此大的影响', level: 2 },
    {
      type: 'paragraph',
      html: '层高控制着打印机必须重复相同基本序列的次数：外围、内部结构、顶部和底部表面、移动到下一个岛以及Z轴移动到下一层。一个80mm高的模型在0.20mm时需要400层，但在0.12mm时需要大约667层。即使每层薄层每次通过的塑料用量略少，打印机执行了更多的层间过渡、更多的重复轮廓和更多缓慢的加速度受限运动的机会。',
    },
    {
      type: 'table',
      headers: ['模型高度', '层高', '层数', '规划解读'],
      rows: [
        ['80 mm', '0.28 mm', '286 层', '快速草稿配置文件，层纹可见。'],
        ['80 mm', '0.20 mm', '400 层', '许多零件的平衡质量和时长。'],
        ['80 mm', '0.12 mm', '667 层', '精细细节配置文件，可能增加许多小时。'],
        ['160 mm', '0.20 mm', '800 层', '高零件即使在正常速度下也会变得耗时。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '当层高是真正的瓶颈时',
      badge: '检查层数',
      html: '<p>如果提高打印速度几乎不改变估算值，那么作业可能由层数、短线段和开销主导。在这种情况下，从0.12mm切换到0.20mm可能比将打印机从60 mm/s提高到80 mm/s节省更多时间。</p>',
    },
    {
      type: 'summary',
      title: '层高决策规则',
      items: [
        '对于Z表面光洁度不关键的原型、支架、夹具和零件，使用较厚的层。',
        '对于平滑曲面、小文字、微缩模型和外观表面，使用较薄的层。',
        '对于高零件，层高变化会迅速累积，因为每增加一层都会重复开销。',
      ],
    },

    { type: 'title', text: '打印速度、加速度和复杂程度系数', level: 2 },
    {
      type: 'paragraph',
      html: '打印速度值是一个目标，而不是承诺。打印机必须加速到该速度，在拐角前减速，遵守抖动或连接偏差限制，有时还会因冷却、桥接、悬垂、最小层时间和小岛而减速。这就是为什么<strong>打印速度到打印时间的计算器</strong>需要一个复杂程度系数。一个干净的盒子加上长的直线填充线可以接近要求的速度运行。一个精细的手办、标志、网格、螺纹零件或有机雕塑可能大部分时间都花在短线段上，在这些短线段上，加速度限制比最大速度更重要。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '简单几何形状',
          description: '盒子、面板和长填充路径可以使用较低的复杂程度系数。',
          icon: 'mdi:cube-outline',
          points: ['更长的连续路径', '更少的岛', '更少的回抽开销'],
        },
        {
          title: '混合几何形状',
          description: '大多数支架、外壳、道具和家用零件接近默认系数。',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['外围和填充都很重要', '适度的移动', '平衡的加速度损失'],
        },
        {
          title: '复杂几何形状',
          description: '小特征、文字、网格、支撑和有机曲面需要更高的系数。',
          icon: 'mdi:vector-polyline',
          points: ['短线段占主导', '更多的启动和停止', '更多的回抽和移动'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '提高打印速度：哪些改善，哪些没有',
      items: [
        { pro: '长的填充线在速度提高时可能更快完成。', con: '外壁和小细节可能仍受到配置文件的限制。' },
        { pro: '大型低细节原型可以从更快的运动中受益。', con: '加速度、振纹、挤出流量和冷却可能限制可用速度。' },
        { pro: '速度比较表可以快速显示潜在的节省。', con: '它无法预测切片软件特有的减速，如最小层时间。' },
      ],
    },
    {
      type: 'message',
      title: '速度估算对于相对比较最为有用',
      ariaLabel: '速度估算说明',
      html: '<p>使用40、60、80 mm/s的行进行方向性比较。如果80 mm/s只节省了少量时间，那么打印可能受层数、开销或复杂程度限制，而非原始速度。</p>',
    },

    { type: 'title', text: '填充、体积和材料时间', level: 2 },
    {
      type: 'paragraph',
      html: '计算器使用占地面积和模型高度作为粗略的体积代理，然后按有效实体比率缩放该体积。这不像读取网格几何体那样精确，但它捕捉到了一个重要的物理事实：减少填充时，壁和外壳并不会消失。以15%填充打印的零件仍然有外围、顶部层、底部层、小的实体特征，有时还有支撑界面。计算器在估算中保留了一个外壳比例，这样低填充不会不切实际地将打印时间几乎压缩到零。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '为宽大的物体、盒子、平板、托盘和大型外壳增加占地面积。',
        '为窄塔、薄手办、小支架和开放式框架减少占地面积。',
        '将填充百分比作为规划控制，而非总零件密度。',
        '请记住，支撑、边缘、筏层、清洗塔和多色废料会在模型本身之外增加时间。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: '示例：为什么20%的填充不是20%的打印时间',
      html: '<p>一个80mm高的外壳可能有四个壁、六个底部层、六个顶部层、螺纹凸台和一个大的内部空腔。将填充从40%降低到20%会减少内部路径长度，但壁和外壳仍在每一层上打印。对于外围较多的模型，改变壁数或层高可能比单独改变填充对时间的影响更大。</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: '占地面积', definition: '模型占据的近似XY面积，此处用作粗略的体积输入。' },
        { term: '有效实体比率', definition: '用于估算挤出体积的外壳材料和填充材料的规划组合。' },
        { term: '挤出线', definition: '喷嘴铺设的塑料条；其横截面取决于层高和挤出宽度。' },
        { term: '耗材长度', definition: '供应估算塑料体积所需的原始耗材长度。' },
      ],
    },

    { type: 'title', text: '移动开销：简单计算器中缺失的部分', level: 2 },
    {
      type: 'paragraph',
      html: '简单的时长估算往往忽略非挤出运动。真实的打印机在岛屿之间移动、回抽和预注耗材、擦拭、Z轴抬升、避开已打印零件、改变方向，有时还会暂停冷却。这些操作不产生可见的材料，但消耗实际时间。在没有完整切片软件刀具路径的情况下，固定开销百分比是一种考虑移动的实用方法。默认的15-20%范围是普通单材料FDM零件的一个有用起点。',
    },
    {
      type: 'table',
      headers: ['打印条件', '建议开销', '原因'],
      rows: [
        ['单个简单零件', '10-15%', '岛少，回抽少，路径基本连续。'],
        ['典型功能零件', '15-22%', '适度的外围、填充和移动。'],
        ['一个平台上多个小零件', '22-35%', '对象之间的频繁移动和重复启动。'],
        ['支撑或精细表面', '25-40%', '支撑界面、短线段和回抽增加时间。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '不包含热床预热',
      badge: '总作业时间',
      html: '<p>估算侧重于运动和挤出时间。在规划实际机器占用时，请为热床预热、喷嘴预热、探针、网格调平、耗材加载、冷却和零件取出增加单独的时间。</p>',
    },
    {
      type: 'tip',
      title: '根据一次实际打印校准开销',
      html: '<p>拿一个已完成的作业，将切片软件或秒表的时间与此计算器进行比较，然后调整开销和复杂程度，直到估算值吻合。这种本地校准将比永远使用通用值更好地改进未来的规划。</p>',
    },

    { type: 'title', text: '何时信任此计算器以及何时使用切片软件', level: 2 },
    {
      type: 'paragraph',
      html: '此工具最适合于早期估算、报价洽谈、课堂演示以及在投入配置文件之前比较层高与速度。当精确的STL文件尚未可用时，当客户仅提供大致尺寸时，或者当您想知道某个更改是否值得研究时，它尤其有用。它并非旨在替代生产关键型作业的切片软件估算，因为切片软件会检查精确的网格几何体、特征特定速度、支撑路径、壁顺序、顶部和底部表面、接缝放置、加速度控制以及特定于机器的固件行为。',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        '使用此计算器快速比较0.12mm、0.20mm和0.28mm的层配置文件。',
        '在更改速度之前，使用它来估算高模型是否受层数限制。',
        '使用它从大致尺寸中获得粗略的材料体积、耗材长度和重量。',
        '在购买材料、预订机器时间或承诺交货日期之前，使用切片软件。',
      ],
    },
    {
      type: 'table',
      headers: ['问题', '计算器的回答', '切片软件的回答'],
      rows: [
        ['更厚的层能节省时间吗？', '根据层数得出的良好方向性估算。', '特定路径和表面的精确结果。'],
        ['80 mm/s会比60 mm/s快很多吗？', '有用的速度场景比较。', '按速度和加速度特征的精确行为。'],
        ['我可能需要多少耗材？', '大致的体积、长度和重量。', '特定配置文件的材料报告。'],
        ['我能为这个生产作业报价吗？', '仅用于初步筛选。', '最终报价和规划所需。'],
      ],
    },
    {
      type: 'summary',
      title: '最佳工作流程',
      items: [
        '从此估算器开始，缩小层高、速度和填充的选择范围。',
        '使用您自己机器上的一次已知打印来调整复杂程度和开销。',
        '在承诺成本、时间或交货之前，重新切片最终的候选配置文件。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
