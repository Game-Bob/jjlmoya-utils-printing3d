import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = '3d-printing-shrinkage-calculator';
const title = '3D 打印收缩率计算器：缩放系数与收缩';
const description = '根据材料（ABS、尼龙、ASA）计算 3D 设计所需的缩放比例，以补偿热收缩并获得精确的尺寸。';

const faqData = [
  {
    question: '为什么 ABS 的收缩率比 PLA 高？',
    answer: 'ABS 是一种无定形聚合物，挤出时需要更高的温度。从 250°C 冷却到室温时，温差梯度更大，导致分子比 PLA 更剧烈地紧缩。',
  },
  {
    question: '什么时候应该使用手动校准？',
    answer: '每当您更换耗材品牌或需要低于 0.1mm 的机械公差时，都应使用手动校准。即使是同一品牌的不同颜色，其收缩系数也可能有所不同。',
  },
  {
    question: '填充率是否影响收缩？',
    answer: '是的。填充密度越高，冷却时向零件中心产生作用力的材料量就越大。实心零件往往比空心零件收缩得稍多。',
  },
];

const howToData = [
  {
    name: '选择材料',
    text: '从预设材料（ABS、ASA、尼龙等）中选择，以应用行业标准系数。',
  },
  {
    name: '使用实物校准',
    text: '如果需要绝对精度，请打印一个 100mm 的立方体，待其完全冷却后进行测量，并在校准模式下输入数据。',
  },
  {
    name: '将系数复制到切片软件',
    text: '复制算出的缩放百分比，并将其应用到切片软件（如 Cura、PrusaSlicer）的相应轴上。',
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

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: '材料设置',
    tabCalibration: '手动校准',
    labelDefaultMaterial: '默认材料',
    labelEstimatedShrinkage: '估算收缩率',
    unitPercent: '%',
    labelDesignSize: '设计尺寸 (切片软件)',
    labelRealSize: '打印零件尺寸 (实测)',
    unitMm: 'mm',
    labelAxesCompensation: '轴补偿',
    labelAxisXY: 'X/Y轴',
    labelAxisZ: 'Z轴',
    textZWarning: '* Z 轴由于层间粘合，通常收缩较小。',
    labelRecommendationTitle: '技术建议',
    labelResultSlicerScale: '缩放百分比 (用于切片软件)',
    labelResultFactor: '乘数因子',
    btnCopy: '复制百分比',
    btnCopied: '已复制！',
    recommendations: {
      'ABS': '建议环境温度至少为 40°C，以尽量减少由于收缩引起的翘曲 (warping)。',
      'ASA': '具有出色的抗紫外线性能。适当降低层冷却以提高结构粘合力。',
      'Nylon': '极具吸湿性的材料。打印前需在 80°C 下干燥 6-8 小时，以避免产生气泡。',
      'PETG': '收缩率较低。如果实心零件出现过挤出，请使用 95-98% 的流量倍率。',
      'PLA': '极小收缩率。确保良好的空气流动（100% 层风扇）以获得清晰的细节。'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3D 打印收缩率计算器：追求尺寸精度',
      level: 1,
    },
    {
      type: 'paragraph',
      html: '如果您是 <strong>3D 打印</strong>爱好者，可能遇到过这个问题：您设计了一个尺寸完美的零件（例如 20x20x20 毫米的立方体），打印后用游标卡尺测量，却发现它只有 19.7 毫米。发生了什么？答案是<strong>材料收缩</strong>。',
    },
    {
      type: 'paragraph',
      html: '收缩是热塑性塑料从熔融状态（高温）变为室温固态时不可避免的物理现象。随着冷却，分子会重新排列并“缩紧”，从而减小零件的总积分。我们的<strong>收缩率计算器</strong>旨在帮助您预测这种变化，并在切片软件中调整缩放比例，以便您的零件一次性精准契合。',
    },
    {
      type: 'title',
      text: '为什么塑料会收缩？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在 FDM（熔融沉积建模）打印中，我们将热塑料（200°C 至 300°C 之间）逐层沉积在表面。随着材料冷却，它会经历所谓的<strong>热膨胀系数</strong>变化。简单来说，热能使分子保持距离；当能量消失时，分子间作用力会使它们靠拢。',
    },
    {
      type: 'paragraph',
      html: '并非所有材料的表现都相同。无定形塑料（如 PLA）具有无序结构，往往收缩较小。相比之下，容易结晶或需要极高温度的塑料（如 ABS 或尼龙）则具有更剧烈且难以控制的收缩率。',
    },
    {
      type: 'title',
      text: '常用材料及其收缩范围',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS（丙烯腈-丁二烯-苯乙烯）：0.8% – 2.0%。由于其高收缩率，它是最难处理的材料之一，常引起“翘曲”（角部变形）。',
        'ASA：0.5% – 0.9%。一种抗紫外线的 ABS 替代品，收缩率相对可控。',
        '尼龙 (PA)：0.7% – 2.5%。根据是否含有碳纤维或玻璃纤维填充，其收缩率会有巨大差异。',
        'PETG：0.2% – 0.5%。尺寸非常稳定，非常适合不需要 ABS 那样耐热性的机械零件。',
        'PLA：0.1% – 0.3%。易用性的黄金标准；对于大多数用途，其收缩率几乎可以忽略不计。',
      ],
    },
    {
      type: 'title',
      text: '如何计算缩放系数',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多用户会犯“直接增加百分比”的错误（如果少了 2%，他们就缩放到 102%）。然而，从数学上讲，为了补偿损失，比例必须稍有不同。我们的计算器使用的正确公式是： <br><strong>缩放系数 = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: '其中 <strong>S</strong> 是以小数表示的收缩百分比（例如 2% 为 0.02）。例如，对于收缩率为 2% 的材料，缩放系数为 1.0204，这意味着在切片软件（Cura、PrusaSlicer、Bambu Studio）中，我们必须将缩放比例设置为 <strong>102.04%</strong>。',
    },
    {
      type: 'title',
      text: '手动校准：设计尺寸 vs 实际测量值',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '逆向校准过程很简单：打印一个已知尺寸的测试物体（例如 100mm 的校准立方体）。待其完全冷却后（至少等待 30 分钟至关重要），用数显卡尺测量零件。将这两个值输入计算器，它将为您提供该卷耗材的精确调整百分比。',
    },
    {
      type: 'title',
      text: '非均匀收缩：X、Y 和 Z 轴问题',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在 3D 打印中，各个方向的物理特性并不相同。由于层是堆叠在一起的，Z 轴方向的<strong>层间粘合</strong>通常会限制垂直方向的收缩。通常，您会发现水平面（X 轴和 Y 轴）的尺寸比高度（Z 轴）需要更多的补偿。',
    },
    {
      type: 'tip',
      title: '专家提示',
      html: '<p>如果您使用尼龙或工程材料，请始终在打印 24 小时后进行测量。某些塑料会吸收环境水分，在冷却后可能会稍微“膨胀”，从而改变量终测量值。</p>',
    },
    {
      type: 'title',
      text: '影响最终精度的因素',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '挤出温度：温度越高，材料进入时越膨胀，但通常也会经历更剧烈的冷却过程。',
        '热床温度：较热的热床防止零件底部比顶部收缩更快，从而减少翘曲。',
        '填充密度：极高密度的零件拥有更多的塑料质量，会产生向中心的内部收缩力。',
        '层风扇：对于 ABS 等材料，过强的风扇可能会导致裂纹以及过度且不规则的收缩。',
      ],
    },
  ],
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Simplify3D：尺寸精度和收缩率',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research：材料表与收缩系数',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers：了解 3D 打印材料收缩',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
