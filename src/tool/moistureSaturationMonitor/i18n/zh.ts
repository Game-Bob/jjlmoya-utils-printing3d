import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'filament-dehydration-estimator';
const title = '3D打印耗材脱水估算器：热再生指南';
const description = '基于指数吸附动力学、湿度暴露时间、聚合物类型和烘干腔温度，模拟吸湿性耗材的受潮饱和度。';

const faqData = [
  {
    question: '耗材脱水估算器是如何计算水分饱和度的？',
    answer: '它使用指数饱和模型：最大材料吸水量乘以「1减去e的负动力学系数与暴露时间乘积的次方」，然后根据环境相对湿度进行缩放。',
  },
  {
    question: '为什么尼龙比PLA需要更长的时间烘干？',
    answer: '尼龙的吸湿容量比PLA高，吸附系数也更快，因此在相同的湿度和暴露时间下，它会更快达到损害打印质量的含水量。',
  },
  {
    question: '更高的烘干温度是否总是意味着更安全？',
    answer: '不是。较高的温度可以加速脱水，但每种聚合物都有其安全的烘干腔温度范围。超过该范围可能会使耗材变软、线盘变形或改变打印特性。',
  },
  {
    question: '加水分解（水解）风险指标代表什么？',
    answer: '它将估算的含水量与材料的临界阈值进行对比，当吸附的水分足以增加气泡、拉丝、层间结合力变差或聚合物链受损的风险时，就会发出警告。',
  },
];

const howToData = [
  { name: '选择聚合物', text: '选择 PLA, PETG, ABS, ASA, TPU, Nylon, PC 或 PVA，以便模型能够加载正确的平衡吸湿容量 and 动力学系数。' },
  { name: '输入储存环境湿度', text: '根据房间、干燥盒或工作室的实际湿度测量值，设置线盘所处环境的相对湿度。' },
  { name: '设置暴露时间', text: '输入耗材置于密封干燥盒或主动烘干机外部的累计天数。' },
  { name: '选择烘干温度', text: '设定在聚合物和线盘材质安全范围内的烘干腔温度。' },
  { name: '启动烘干周期', text: '启动保存的烘干定时器，随着估算水分的逐渐去除，烘干腔的可视化进度条将逐渐减少。' },
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

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '英制',
    materialLabel: '聚合物',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: '聚碳酸酯',
    materialPvaLabel: 'PVA支撑',
    humidityLabel: '相对湿度',
    exposureLabel: '暴露时间',
    dryTempLabel: '烘干腔',
    spoolMassLabel: '线盘质量',
    calculateLabel: '启动烘干周期',
    pauseCycleLabel: '暂停周期',
    resumeCycleLabel: '恢复周期',
    resetCycleLabel: '重置周期',
    saturationLabel: '含水量',
    absorbedLabel: '吸附水分',
    dryingTimeLabel: '烘干周期',
    remainingTimeLabel: '剩余时间',
    cycleProgressLabel: '周期进度',
    hydrolysisLabel: '水解风险',
    stableLabel: '稳定',
    watchLabel: '警戒区',
    criticalLabel: '临界',
    chamberReadyLabel: '烘干腔就绪',
    chamberRunningLabel: '烘干周期运行中',
    chamberCompleteLabel: '水分已排除',
    curveLabel: '吸附曲线',
    kineticLabel: '饱和动力学',
    equilibriumLabel: '平衡饱和度的指数逼近',
    daysUnit: '天',
    percentUnit: '%',
    gramsUnit: '克',
    poundsUnit: '磅',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: '时',
    minutesUnit: '分',
    secondsUnit: '秒',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: '理解吸附动力学：为什么尼龙的吸湿特性与PLA完全不同', level: 2 },
    { type: 'paragraph', html: '一个专业的<strong>3D打印耗材烘干时间估算器</strong>不能将受潮过程视为简单的线性变化。吸湿性聚合物不会每天都以恒定的速度无限吸收水分。它们会逐渐逼近一个平衡状态：开始时吸湿极快，接近饱和时变慢，且受环境相对湿度的强烈制约。这就是为什么在70%相对湿度下放置两天的线盘，其含水量并不是放置四天线盘的一半。暴露的最初阶段通常会产生最陡峭的水分上升，特别是尼龙、TPU、PVA以及其他含有吸引水分子极性基团的材料。' },
    { type: 'paragraph', html: '本工具使用公式 <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code> 来模拟含水量。其中 <code>S_max</code> 是聚合物的平衡吸湿容量，<code>k</code> 是吸附速度，<code>t</code> 是暴露时间，而 <code>RH</code> 负责根据储存环境调整结果。该输出并不是实验室鉴定证书，而是一个工程规划模型，旨在解释为什么在相同的环境里，PLA可以保持干燥直接打印，而尼龙则会产生噼啪声、起泡、拉丝并丧失层间强度。' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'PLA的规划平衡吸湿容量' },
      { value: '3.2%', label: '尼龙 PA的规划平衡吸湿容量' },
      { value: '5.8%', label: 'PVA支撑耗材的规划平衡吸湿容量' },
      { value: 'RH缩放', label: '环境湿度决定饱和曲线的上限' },
    ] },
    { type: 'diagnostic', variant: 'info', title: '受潮症状是工艺过程的警示', badge: '打印线索', html: '噼啪声、蒸汽泡、表面由光滑变粗糙、过度拉丝、脆弱的壁厚以及浑浊的挤出物，这些都不是切片软件的随机问题。它们通常意味着水分在熔融区迅速汽化，或者在沉积前水解作用已经缩短了聚合物分子链的长度。' },

    { type: 'title', text: '指数饱和模型如何改变烘干决策', level: 2 },
    { type: 'paragraph', html: '线性计算器通常仅询问材质，然后返回一个固定的烘干小时数。这虽然能起到快速提示的作用，但掩盖了核心问题：耗材实际吸收了多少水分？在湿度为15%的密封干燥盒中存放三周的线盘，可能几乎不需要再生。而周末开封放置在潮湿车库中的同种聚合物，可能需要完整的烘干周期。饱和度模型将烘干建议与暴露历史相绑定，而不是将所有线盘一律视为受潮程度相同。' },
    { type: 'table', headers: ['输入项', '物理意义', '对估算的影响'], rows: [
      ['相对湿度', '线盘周围的水分活性', '更高的RH会提升平衡上限以及最终的吸湿百分比。'],
      ['暴露时间', '水分扩散允许进行的时间', '前几天最关键，随着接近饱和，曲线趋于平缓。'],
      ['材料系数', '聚合物接近平衡的速度快慢', '尼龙和PVA的反应速度远快于PLA或ASA。'],
      ['烘干温度', '可用于脱附的水分热能', '更高的安全烘干腔温度会缩短估算的烘干周期。'],
      ['线盘质量', '耗材的物理重量', '百分比反映的是材料的状态，吸附的水分克数随线盘质量同比放大。'],
    ] },
    { type: 'tip', title: '估算实际微环境，而非天气预报', html: '请输入耗材实际存放的干燥盒、打印机机箱、储藏柜或工作室内部的湿度。本地天气预报可能与加热打印机旁、地下室货架或放有干燥剂 seal 容器内部的实际湿度相去甚远。' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: '为什么圆环在接近饱和时进度变慢', html: '视觉圆环与数学公式遵循相同的指数行为。当聚合物干燥时，由于水分梯度较强，圆环填充极快。临近平衡时，梯度变弱，因此视觉填充速度变慢。这种变慢是真实的物理规律，而不是动画特效。' },

    { type: 'title', text: '各类材质的耗材脱水计算器范围', level: 2 },
    { type: 'paragraph', html: '烘干建议必须尊重聚合物特性和线盘材质。PLA在过热时容易变软或发生蠕变。PETG可以承受稍高的温度，但仍能从保守的温度控制中受益。尼龙通常需要更高温度和更长周期，因为它吸水较多且结合力较强。PVA对水分极其敏感，如果暴露放置可能会变得完全无法打印。PC在烘干后往往打印效果更好，即使它看起来并不潮湿。估算器利用这些差异，将通用的<strong>耗材脱水计算器</strong>转化为针对特定材料的指南。' },
    { type: 'comparative', columns: 2, items: [
      { title: '低至中等吸湿响应', description: 'PLA, ABS 和 ASA 通常吸水较少且较慢，但在长期潮湿暴露后仍会出现质量下降。', points: ['较短的烘干周期', '较低的平衡含水量', '症状可能逐渐显现'] },
      { title: '高吸湿响应', description: '尼龙, TPU, PVA 和某些 PC 级别需要更主动的储存和更严格的干燥再生。', points: ['更高的吸附水分重量', '较快的早期饱和速度', '更容易起泡和层间开裂'] },
    ] },
    { type: 'table', headers: ['材料', '典型烘干腔目标温度', '规划注意事项'], rows: [
      ['PLA', '40-55 C', '避免过热，因为PLA和部分线盘可能会发生变形。'],
      ['PETG', '55-70 C', '烘干数小时后通常能改善表面一致性并减少拉丝。'],
      ['ABS / ASA', '65-85 C', '吸湿性低于尼龙，但干燥存放效果更佳。'],
      ['TPU', '45-60 C', '柔性耗材可能吸附足以导致起泡或严重拉丝的水分。'],
      ['Nylon PA', '70-90 C', '在打印关键功能件前，通常需要主动进行烘干。'],
      ['PVA', '40-55 C', '极易受潮的支撑材料；使用后应立即密封保存。'],
    ] },
    { type: 'proscons', title: '固定烘干图表对比饱和度监控器', items: [
      { pro: '固定图表在您仅需要默认周期时使用非常快捷。', con: 'It 无法区分干燥盒中的线盘与暴露在潮湿空气中的线盘。' },
      { pro: '饱和度模拟解释了为什么早期暴露的影响非常严重。', con: '它依然依赖于近似的材料系数和储存历史。' },
      { pro: '烘干温度输入能够反映烘干箱的实际设定。', con: 'It 不能替代耗材制造商提供的安全温度上限。' },
      { pro: '吸附克数使满盘或残盘的含水情况变得直观具体。', con: '线盘总质量无法反映外圈是否比内圈受潮更严重。' },
    ] },

    { type: 'title', text: '水解风险：当受潮耗材变成永久受损的耗材', level: 2 },
    { type: 'paragraph', html: '水分不仅影响打印外观质量。在挤出温度下，吸附的水分会导致易感聚合物发生水解。水解会断裂分子链，降低零件的韧性、延伸率和可靠性。这种影响对于用作支架、夹具、齿轮、管道和承重零件的工程材料尤为重要。受潮的线盘可能仍能正常挤出，但由于聚合物在加工过程中发生了化学降解，零件可能会提早发生断裂。' },
    { type: 'glossary', items: [
      { term: '吸湿性', definition: '材料从周围空气中吸引并保持水分的倾向。' },
      { term: '平衡含水量', definition: '聚合物在特定湿度下暴露足够时间后趋近的含水率。' },
      { term: '吸附系数', definition: '控制饱和曲线攀升速度的简化动力学数值。' },
      { term: '脱附', definition: '逆过程：热风烘干过程中水分离开聚合物的过程。' },
      { term: '水解', definition: '水在受热条件下引起的化学链剪切，与多种工程塑料密切相关。' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: '表面干燥并不能保证内部干燥', badge: '扩散限制', html: '耗材是由外向内烘干的。短暂的高温烘干可能改善表面，但紧密线盘的内圈仍可能处于潮湿状态。大型线盘、纸板侧板以及缠绕过紧的耗材都会减缓水分再生的速度。' },
    { type: 'message', title: '视觉规则', html: '当圆环由透亮蓝色变为沉闷的灰蓝色状态时，工具标志着由常规水分管理向水解监控区的过渡。在这个阶段，烘干已成为质量控制的一部分，而不仅仅是外观修复。' },

    { type: 'title', text: '建立可靠的耗材烘干工作流', level: 2 },
    { type: 'paragraph', html: '实用的<strong>吸湿性材料饱和度指南</strong>将预测与日常习惯相结合。测量储存环境湿度、在线盘上标注开封日期、将敏感聚合物保存在密封箱中、在干燥剂饱和前进行更换，并在打印机械要求高的零件前进行烘干。最佳的工作流程能避免重复的「受潮-烘干」循环，因为每次无谓的加热周期都可能使耗材老化、线盘变形或浪费打印准备时间。' },
    { type: 'list', items: [
      '当储存历史不确定时，在长时间打印前对尼龙、PVA、TPU 和 PC 进行烘干。',
      'PLA 和 PETG 也应保持密封；低吸湿性不等于完全不吸湿。',
      '在烘干机内使用独立的温度计，因为自带显示屏的温度可能会偏高。',
      '在潮湿房间内进行长达数小时的打印时，建议让耗材从干燥盒中直接进料。',
      '当指示珠或湿度传感器显示干燥盒内湿度攀升时，请及时更换或再生干燥剂。',
      '避免烘干温度超过耗材及线盘的玻璃化转变温度或软化范围。',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: '烘干腔是一个再生循环系统', html: '烘干腔必须提供稳定的热量、空气流动以及水分排出的通道。在没有排气或干燥剂的情况下对密封盒子进行加热，可能只是将水分从耗材转移到箱内空气中，并在冷却时重新被吸回。' },
    { type: 'summary', title: '实用解读清单', items: [
      '水分百分比描述材料的状态，吸附克数描述线盘中的实际水载荷。',
      '高湿度和高响应性材质会导致极快的早期饱和。',
      '烘干时间应随饱和度增加而延长，随安全的烘干腔温度提高而缩短。',
      '水解风险对于高温挤出和结构功能件最为致命。',
      '制造商的数据手册优先级高于任何通用烘干估算。'
    ] },

    { type: 'title', text: 'SEO回答：3D打印耗材应该烘干多久？', level: 2 },
    { type: 'paragraph', html: '正确的烘干时间取决于材质、受潮历史、线盘质量和烘干箱温度。PLA在轻度受潮后可能仅需数小时，PETG和TPU通常需要更长时间，而尼龙或PVA在潮湿环境中存放后可能需要相当长的再生周期。一个可靠的 <strong>3D打印含水量控制</strong> 工作流应首先估算吸附的水分，然后选择安全的烘干温度和充足的脱附时间。这比将一个通用的时间硬套给所有聚合物要可靠得多。', },
    { type: 'diagnostic', variant: 'success', title: '该监控器的最佳应用场景', badge: '工程预检', html: '在关键功能件打印、批量生产、使用昂贵的工程聚合物，或任何由于表面失败、层间脆弱或强度不足导致报废损失远超烘干周期成本的场景下，请使用此估算器。' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
