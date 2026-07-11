import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'warping-risk-simulator';
const title = '翘曲风险模拟器：3D 打印变形风险估算';
const description = '根据材料收缩率、接触面积、最长对角线、热床温度、室温以及是否封闭腔体，估算第一层抬升和翘曲风险。';

const faqData = [
  {
    question: '为什么最长对角线比接触面积对翘曲的影响更大？',
    answer: '最长对角线代表了最大的连续收缩路径。即便总接触面积看起来很大，长零件也能积聚足够的线性收缩，从而抬起边角。',
  },
  {
    question: '这个模拟器能保证我的打印件不会翘曲吗？',
    answer: '不能。这是一个风险评估。潮湿的耗材、脏污的打印平台、第一层高度、气流、零件几何形状以及切片软件的冷却选择都可能导致结果变化。',
  },
  {
    question: '哪些材料最需要封闭腔体？',
    answer: 'ABS、ASA、Nylon 和 PC 在该模型中对腔体最为敏感，因为它们结合了更高的加工温度、更强的收缩以及更大的冷却应力。',
  },
  {
    question: '裙边宽度是如何估算的？',
    answer: '模拟器从最长对角线的百分之五开始，根据计算出的风险进行缩放，然后将结果限定到实用的切片软件数值。',
  },
];

const howToData = [
  { name: '选择材料', text: '选择 PLA、PETG、ABS、ASA、Nylon、PC 或 TPU，以便模拟器应用收缩等级。' },
  { name: '输入接触面积和对角线', text: '使用零件接触热床的表面积以及最长的角到角距离。' },
  { name: '设置热环境', text: '输入热床温度和室温，然后指明打印机是否有封闭腔体。' },
  { name: '复制切片设置', text: '使用建议的裙边、附着、冷却和腔体设置作为起始配置文件。' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '单位制',
    unitMetric: '公制',
    unitImperial: '英制',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    material: '材料',
    footprintArea: '接触面积',
    footprintHelp: '实际接触打印平台的面积，而非模型的总表面积。',
    diagonal: '最长对角线',
    diagonalHelp: '第一层最长的角到角距离。这是主要的热应力矢量。',
    bedTemperature: '热床温度',
    bedTemperatureWarning: '温度警告',
    ambientTemperature: '室温',
    chamber: '封闭腔体',
    chamberOn: '已封闭或主动屏蔽',
    chamberOff: '开放式打印机',
    riskLow: '低',
    riskMedium: '中',
    riskHigh: '高',
    riskCritical: '严重',
    riskIndex: '风险指数',
    thermalIndex: '热应力指数',
    deltaT: '温差',
    brimRecommendation: '裙边建议',
    adhesionDiagnosis: '附着诊断',
    adhesionStrength: '附着强度阶梯',
    criticalWarnings: '严重警告',
    whyDiagonalMatters: '为什么对角线很重要',
    recommendedSettings: '推荐的切片设置',
    copySettings: '复制设置',
    copied: '已复制',
    simulatorNotice: '这是风险评估，而非成功保证。耗材湿度、热床污染、Z 偏移、气流和冷却更改仍然是外部变量。',
    warnings: {
      openTechnicalMaterial: '{material} 在没有封闭腔体的情况下属于严重翘曲状况。',
      bedTemperatureHigh: '{material} 的热床温度超过了建议范围 {min}-{max} {unit}。可能出现软化、象脚或附着缺陷。',
      bedTemperatureLow: '{material} 的热床温度低于建议范围 {min}-{max} {unit}。第一层附着力可能不足以应对此几何形状。',
      narrowFootprint: '接触面积相对于对角线较窄，因此边角抬升可能迅速累积。',
      highDeltaT: '热床与室温的温差非常高；请控制气流和冷却速度。',
    },
    diagnosis: {
      critical: '必须使用裙边。请使用专用附着表面，并避免在开放空气中打印此材料。',
      highEnclosed: '强烈建议使用宽裙边和胶粘剂。',
      highOpen: '在开始前请使用裙边、胶粘剂和封闭腔体。',
      mediumEasyMaterial: '使用干净的 PEI 表面；尖角处裙边可选。',
      medium: '在边角处使用裙边或鼠标耳，并检查热床附着。',
      low: '在正常第一层条件下安全。',
    },
    adhesionOptions: {
      low: ['干净 PEI 或纹理板：正常附着力，最容易移除。'],
      medium: ['胶棒或 PVA 脱模层：轻量额外附着力，PETG 脱模更安全。', '鼠标耳：无需完整裙边即可为边角提供局部附着力。'],
      high: ['宽裙边加胶棒：宽泛的机械支撑，清洁适中。', 'Magigoo 或类似胶粘剂：为 ABS、ASA、PETG 和 Nylon 变体提供更强的附着力。'],
      criticalDefault: ['全宽裙边：最大第一层接触面积。', '高强度胶粘剂：使用 PEI 加深高强度胶粘剂。', '封闭腔体：确保胶粘剂持续有效。'],
      criticalTechnical: ['全宽裙边：最大第一层接触面积。', '高强度胶粘剂：使用针对 Nylon 或 PC 的材料专用胶粘剂。', '封闭腔体：确保胶粘剂持续有效。'],
    },
    slicerSettings: {
      brimWidth: '裙边宽度：{value}',
      bedAdhesion: '热床附着：{value}',
      lowAdhesion: '干净 PEI 或纹理板',
      highAdhesion: 'PEI 加胶棒、Magigoo 或材料专用胶粘剂',
      cooling: '冷却：{value}',
      normalCooling: '第 3 层后正常零件冷却',
      technicalCooling: '前 5-8 层关闭零件冷却',
      enclosedChamber: '保持腔体封闭，直到零件冷却至玻璃化转变范围以下',
      openChamber: '保护打印机免受气流和室内空气流动影响',
      skirtEnough: '0 mm，底边足够',
    },
    diagonalExplanation: '最长的对角线就像主应力矢量一样：随着零件冷却，收缩沿着该跨度累积，即使接触面积看起来足够大，也会对边角施加负荷。',
  },
  seo: [
    { type: 'title', text: '在切片 3D 打印件之前如何估算翘曲风险', level: 2 },
    {
      type: 'paragraph',
      html: '翘曲不仅是材料问题，也不仅是热床附着问题。当打印层冷却、收缩并产生足够的内部应力以克服第一层的附着力时，就会出现翘曲。一个小型 ABS 支架可能因为聚合物强烈收缩而失败；一个大型 PLA 标牌可能因为对角线足够长，能在宽跨度上累积收缩而失败。因此，有用的问题不仅仅是<strong>这种材料会翘曲吗？</strong>而是<strong>这种几何形状和热环境是否产生了超过打印平台承受能力的拉力？</strong>',
    },
    {
      type: 'paragraph',
      html: '该模拟器使用启发式热应力指数：<strong>材料收缩系数 × 最长对角线 × 热床-室温温差 ÷ 接触面积</strong>。该公式有意保持实用。它不自称是有限元分析，但它结合了操作员在打印前可以测量的变量：材料系列、接触面积、最长线性跨度、热床温度、室温以及打印机是否封闭。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '将结果用作预防信号',
      badge: '估算',
      html: '低分意味着如果第一层干净且调整良好，打印件不太可能抬升。高分或严重分意味着应在打印前更改切片配置文件：更宽的裙边、胶粘剂、减少冷却、防气流保护或改用不同材料。模拟器无法看到潮湿的耗材、油污的 PEI、离热床太远的喷嘴或边角接触点微小的零件。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: '初始裙边宽度为最长对角线的分数', icon: 'mdi:ruler' },
        { value: '1.85x', label: 'ABS、ASA、Nylon 和 PC 在开放腔体下的严重倍数', icon: 'mdi:home-alert' },
        { value: '0-100', label: '从热应力指数映射的风险等级', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: '为什么最长对角线可能比面积更危险', level: 2 },
    {
      type: 'paragraph',
      html: '接触面积告诉你有多少表面可用于附着。对角线告诉你热收缩在到达边角或薄端之前能累积多远。两个零件可能具有相同的面积但行为截然不同：紧凑的方形垫在各个方向上都有较短的收缩路径，而长而窄的条带将收缩集中在单条线上并试图在两端剥离。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '紧凑型接触面积',
          description: '方形或圆形基底通过许多短路径分散收缩。边角更靠近中心，因此抬升的杠杆臂更小。',
          icon: 'mdi:crop-square',
          points: ['更好的负载分配', '较低的边角杠杆作用', '在容易处理的材料上裙边通常可选'],
        },
        {
          title: '长对角线接触面积',
          description: '长矩形、框架、叶片、封闭面板或导轨允许收缩沿一个主导方向累积。末端和边角承受最高的剥离力。',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['更高的累积应力', '边角首先抬升', '通常需要裙边或鼠标耳'],
        },
      ],
    },
    {
      type: 'tip',
      title: '如何快速测量对角线',
      html: '在切片软件预览中，从上方观察第一层，测量接触热床的零件部分最长角到角的距离。对于矩形接触面积，使用矩形的对角线，而不仅仅是 X 或 Y 方向的长度。对于不规则零件，使用两个外部点之间的最长直线跨度。',
    },
    {
      type: 'table',
      headers: ['几何模式', '典型症状', '预防措施'],
      rows: [
        ['长而薄的导轨', '两端抬升而中间保持附着', '在两端使用裙边或鼠标耳'],
        ['大型平板', '边角逐渐向上卷曲', '使用封闭腔体、较慢的冷却和胶粘剂'],
        ['小而高的零件', '基底保持附着但塔架摇晃', '翘曲不是主要风险；改善稳定性'],
        ['开放式框架', '内角向内拉', '添加裙边，增加第一层宽度，减少风扇'],
      ],
    },
    { type: 'title', text: '模拟器使用的材料收缩等级', level: 2 },
    {
      type: 'paragraph',
      html: '不同的热塑性塑料从挤出温度冷却到室温时收缩程度不同。PLA 和 TPU 通常较为宽容，因为它们在较低温度下打印并产生较少的冷却应力。PETG 居中：它附着牢固但仍可能拉扯尖角。ABS、ASA、Nylon 和 PC 被视为高风险工程材料，因为它们结合了更高的挤出温度、更强的收缩以及对温暖稳定腔体的更大需求。',
    },
    {
      type: 'table',
      headers: ['材料', '收缩等级', '常见热床策略', '腔体敏感度'],
      rows: [
        ['PLA', '低', '干净 PEI，适中热床', '低'],
        ['TPU', '低', '干净板面，避免过度挤压', '低'],
        ['PETG', '中', '纹理 PEI 或脱模层', '中'],
        ['ABS', '高', 'PEI 加胶粘剂或 ABS 浆料（如适用）', '非常高'],
        ['ASA', '高', 'PEI 加胶粘剂，受控冷却', '非常高'],
        ['Nylon', '高', '材料专用胶粘剂，干燥耗材', '非常高'],
        ['PC', '高', '高温热床和胶粘剂', '非常高'],
      ],
    },
    {
      type: 'proscons',
      title: '更换材料而非对抗翘曲',
      items: [
        { pro: '从 ABS 切换到 ASA 可在保持类似热行为的同时提高户外耐久性。', con: 'ASA 仍然需要腔体纪律，并且可能在长零件上翘曲。' },
        { pro: '从 ABS 切换到 PETG 可减少收缩，通常适用于支架和外壳。', con: 'PETG 的耐热性较低，刚度与 ABS 或 PC 不同。' },
        { pro: '纤维填充的 Nylon 可以减少某些收缩路径并提高刚度。', con: '它需要干燥、耐磨喷嘴和严格的附着控制。' },
      ],
    },
    { type: 'title', text: '温差：为什么热床温度和室温都很重要', level: 2 },
    {
      type: 'paragraph',
      html: '模拟器使用<strong>温差</strong>作为热床温度减去室温。这与喷嘴温度不同，但它是零件底部经历的热梯度的有用代理。热床减少了界面处的早期收缩，但非常冷的房间或强气流仍然可以从上层带走热量，并在锚固基底和冷却中的零件主体之间产生应力梯度。',
    },
    {
      type: 'paragraph',
      html: '对于 PLA，适度的温差可能无害，因为材料收缩不那么剧烈。对于 ABS、ASA、Nylon 和 PC，相同热床温度下的相同几何形状如果打印机暴露在气流中可能会失败。这就是为什么当这些工程材料在没有封闭腔体的情况下打印时，计算会应用一个严重的倍数。',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '使用 ABS、ASA、Nylon 或 PC 的开放式打印机',
      badge: '严重状态',
      html: '如果腔体开放，打印件会暴露在局部冷却、门移动、HVAC 气流和快速的层温度变化中。第一层可能在前二十分钟看起来完美，但后来随着零件积累更多收缩应力而仍然抬升。',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        '较温暖的腔体可减少新层与旧层之间的温差。',
        '封闭腔体还会减慢打印后的冷却速度，从而减少突然的边角剥离。',
        '防风罩有帮助，但对于 PC 或 Nylon 来说，它们不等同于稳定的加热腔体。',
        '单独提高热床温度可以改善附着力，但也可能增加软材料上的象脚效应。',
      ],
    },
    { type: 'title', text: '如何解读热应力指数', level: 2 },
    {
      type: 'paragraph',
      html: '热应力指数是一个相对分数，而不是以牛顿为单位的测量力。当收缩系数、对角线或温差上升时，它上升。当接触面积增加时它下降，因为更大的接触面积可以分散相同的拉伸载荷。然后该值被映射到 0-100 的风险百分比，以便可以快速比较不同的打印设置。',
    },
    {
      type: 'table',
      headers: ['风险范围', '含义', '建议响应'],
      rows: [
        ['0-31%', '低', '清洁热床，检查第一层，大多数形状不需要特殊附着'],
        ['32-57%', '中', '在尖角处使用裙边，减少早期风扇，检查接触面积接触'],
        ['58-81%', '高', '使用宽裙边、胶粘剂，如果材料需要则使用封闭腔体，避免气流'],
        ['82-100%', '严重', '除非几何形状、材料或环境改变，否则视为可能翘曲'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: '为什么要除以接触面积？',
      html: '更大的接触面积让热床有更多机会抵抗剥离力。该模型奖励具有宽广连续接触的零件，并惩罚窄基底、小脚以及只有薄条接触表面的长零件。',
    },
    { type: 'title', text: '裙边宽度、鼠标耳和胶粘剂选择', level: 2 },
    {
      type: 'paragraph',
      html: '裙边建议从<strong>对角线 × 0.05</strong>开始。因此，180 毫米对角线在风险缩放前从约 9 毫米开始。在实践中，不应仅根据材料选择裙边。短 PLA 立方体可能不需要裙边，而长 PLA 剑、标牌或导轨可能受益于适度的裙边，因为对角线是主导应力路径。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: '裙边', description: '增加整个零件周围第一层接触的最佳通用选择。', icon: 'mdi:border-outside', points: ['PLA 上易于移除', '在 ABS 边角上非常有用'] },
        { title: '鼠标耳', description: '放置在抬升开始的边角或薄端的局部圆形垫片。', icon: 'mdi:circle-outline', points: ['清理较少', '适用于导轨和框架'] },
        { title: '胶粘剂', description: '改善聚合物与打印表面之间的化学或机械附着力。', icon: 'mdi:water-plus', points: ['对 Nylon 和 PC 有用', '特定表面选择很重要'] },
      ],
    },
    {
      type: 'tip',
      title: '不要将裙边作为唯一的解决方案',
      html: '如果模拟器报告严重风险，更宽的裙边可能会延迟失效，但不会消除根本应力。请将裙边与封闭腔体、较慢的初始冷却、更清洁的热床以及几何形状更改（如圆角或拆分零件）结合使用。',
    },
    {
      type: 'glossary',
      items: [
        { term: '翘曲', definition: '冷却收缩超过热床附着力引起的向上变形。' },
        { term: '接触面积', definition: '模型在第一层接触打印平台的区域。' },
        { term: '最长对角线', definition: '穿过第一层接触形状的最长直线跨度。' },
        { term: '温差', definition: '热床与周围室内空气之间的温度差。' },
        { term: '裙边', definition: '打印在零件周围的额外第一层周长环，用于增加附着力。' },
      ],
    },
    { type: 'title', text: '高风险零件的实用切片设置', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        '增加第一层线宽以创造更多接触，但避免导致脊状突起的过度 Z 挤压。',
        '使用较慢的第一层，以便聚合物在后续层拉扯之前附着到热床上。',
        '在前几层期间，禁用或减少 ABS、ASA、Nylon 和 PC 的零件冷却。',
        '添加足够宽的裙边以超出尖角和窄端。',
        '避免将大型工程材料零件放置在腔体门、通风口或冷侧板附近。',
      ],
    },
    {
      type: 'message',
      title: '降低风险的几何更改',
      ariaLabel: '几何缓解思路',
      html: '圆化尖角，将非常长的面板分成较短的段，在薄端添加临时凸片，定向零件使最长的应力路径更短，或添加可在打印后修剪的牺牲垫。这些更改通常比简单地提高热床温度更有效。',
    },
    {
      type: 'summary',
      title: '快速解读检查清单',
      items: [
        '高收缩材料加开放腔体是最强烈的警告信号。',
        '长对角线加小接触面积意味着边角和末端值得使用裙边或鼠标耳。',
        '高温热床不能抵消冷房间或多风环境。',
        '结果是规划估算；第一层校准和耗材状态仍然决定最终打印效果。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
