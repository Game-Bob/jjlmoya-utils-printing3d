import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-resin-curing-calculator',
  title: 'UV 树脂二次固化时间计算器',
  description: '确定树脂 3D 打印件的精确固化时间。基于灯管功率（瓦特）、树脂类型和距离。专业的交互式技术指南。',
  ui: {
    title: 'UV 树脂固化计算器',
    configLabel: '配置',
    brandLabel: '设备品牌',
    powerLabel: '灯管功率 (W)',
    powerUnit: 'W',
    distanceLabel: 'LED 距离 (cm)',
    distanceUnit: 'cm',
    materialLabel: '材料类型',
    weightLabel: '预估重量 (g)',
    weightUnit: 'g',
    ipaCheckbox: '是否使用异丙基乙醇 (IPA) 中清洗？',
    safetyLabel: 'UV 安全事项',
    safetySunglasses: '认证的 UV 防护眼镜',
    safetyGloves: '丁腈手套',
    sunglassesTooltip: '直接暴露在 405nm 下会永久损伤视网膜。',
    glovesTooltip: '半固化的树脂具有强刺激性。请务必穿戴防护。',
    wavelength: '波长',
    wavelengthValue: '405 nm',
    statusLabel: '状态',
    modeLabel: '模式',
    modeValue: '工业',
    curingTime: '分:秒',
    startButton: '开始/停止固化循环',
    intensityChart: 'UV 强度（剂量）',
    nearLabel: '近 (2cm)',
    farLabel: '远 (30cm)',
    theoreticalLabel: '理论剂量',
    yourConfigLabel: '您的配置',
    evaporateWarning: '等待酒精蒸发（至少 10 分钟）以防止产生白斑。',
    safeDistance: '检测到均匀固化的安全距离。',
    riskDistance: '存在热变形风险（临界距离）。',
    optimeStatus: '最佳',
    longStatus: '偏长',
    fastStatus: '快速',
  },
  seo: [
    {
      type: 'title',
      text: 'UV 树脂固化时间计算器：专业指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在树脂 3D 打印（SLA、DLP 或 LCD）中，<strong>UV 二次固化是至关重要的最终步骤</strong>，它将柔软且粘稠的部件转化为具有声称机械性能的刚性物体。如果没有适当的后固化，打印件将结构薄弱、有毒且不稳定。',
    },
    {
      type: 'title',
      text: '什么是 UV 树脂固化？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当树脂 3D 打印机完成打印时，部件处于技术人员所称的<strong>“湿坯状态” (green state)</strong>。虽然已具有最终形状，但聚合物的分子链尚未完全交联。UV 固化完成这种交联，消除粘性并提高硬度、强度和热稳定性。',
    },
  ],
  faqTitle: '常见问题',
  bibliographyTitle: '参考文献',
  faq: [
    {
      question: 'UV 树脂固化需要多长时间？',
      answer: '取决于灯管功率。40W 的固化箱通常需要 2-4 分钟来处理中等尺寸的部件，而低功率的 DIY 灯可能需要长达 10 分钟。',
    },
    {
      question: '我可以使用美甲灯固化树脂吗？',
      answer: '如果灯涵盖了 405nm 光谱，是可以的。但这些灯通常功率很低 (6W-12W)，会显著延长固化时间，并可能导致表面固化质量不佳。',
    },
    {
      question: '是否有必要进行水固化 (Water Curing)？',
      answer: '并非强制要求，但强烈建议（水固化）。水可以阻挡氧气接触，氧气会抑制表面聚合，从而减少部件的粘性。',
    },
    {
      question: '我该如何判断树脂是否完全固化？',
      answer: '部件触感应完全干燥（不粘手），失去“湿润”光泽，出现轻微色偏，并且不再有液态树脂的强烈气味。',
    },
    {
      question: '为什么我的透明树脂会变黄？',
      answer: '这是过固化或温度过高的后果。使用我们计算器中的“透明”参数来缩短时间，并将 LED 保持在至少 5cm 以外。',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - 树脂打印件的后固化',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: UV 固化的科学',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: '配置设备',
      text: '选择您的 UV 固化机品牌并调整功率（瓦特）。',
    },
    {
      name: '调整物理参数',
      text: '指定 LED 与部件之间的距离、树脂类型和估算重量。',
    },
    {
      name: '开始固化',
      text: '以计算出的时间为参考，并在过程中观察您的部件。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'UV 树脂固化需要多长时间？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '40W 的固化箱通常需要 2-4 分钟处理中等尺寸部件，低功率灯则可能需要 10 分钟或更长。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UV 树脂固化计算器',
      description: '基于灯管功率、距离和材料类型确定树脂 3D 打印件的精确固化时间。',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何计算 UV 树脂固化时间',
      step: [
        {
          '@type': 'HowToStep',
          text: '配置设备',
        },
        {
          '@type': 'HowToStep',
          text: '调整物理参数',
        },
      ],
    },
  ],
};
