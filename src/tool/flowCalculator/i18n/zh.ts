import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'volumetric-flow-calculator',
  title: '体积流量 (Volumetric Flow)：了解 3D 打印机的真实速度极限',
  description: '计算 3D 打印机的最大体积流量。了解您的热端的真实硬件限制。',
  ui: {
    title: '体积流量 (Flow) 计算器',
    autoAdjust: '120% 自动调整',
    configLabel: '配置',
    nozzleLabel: '喷嘴',
    lineWidthLabel: '线宽',
    layerHeightLabel: '层高',
    speedLabel: '速度',
    temperatureLabel: '温度',
    materialLabel: '材料',
    hotendLimitLabel: '热端限制',
    hotendTooltip: '硬件的基础熔化能力，不考虑材料或温度。',
    presetEnder: '标准 MK8/V6。熔化区较短。',
    presetBambu: '高速陶瓷热端。',
    presetVolcano: '21mm 超长熔化区。',
    presetHF: '定制超高性能挤出机。',
    baseLimitLabel: '基础限制',
    resetButton: '重置值',
    volumetricFlowLabel: '实际体积流量',
    maxSpeedLabel: '最大速度',
    statusLabel: '状态',
    safeStatus: '安全',
    stratifiedLabel: '层级性能',
    chartHeightLabel: '层高 (MM)',
    chartSpeedLabel: '速度限制 (MM/S)',
    chartSafeLabel: '安全范围',
    copyButton: '复制有效限制',
  },
  seo: [
    {
      type: 'title',
      text: '体积流量 (Volumetric Flow)：了解 3D 打印机的真实速度极限',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在 FDM 3D 打印中，<strong>体积流量</strong>是决定您在硬件失效前能打印多快的关键因素。虽然电机速度看起来令人印象深刻，但您的热端能否持续熔化塑料才是真正的核心。',
    },
    {
      type: 'title',
      text: '什么是体积流量 (mm³/s)？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '它是每秒挤出的耗材总流量。它是由三个关键变量相乘计算得出的：打印速度、线宽和层高。如果您尝试挤出的塑料超过了加热块所能熔化的量，您将面临令人头疼的 <strong>挤出不足 (underextrusion)</strong>。',
    },
  ],
  faqTitle: '常见问题',
  bibliographyTitle: '参考文献',
  faq: [
    {
      question: '我的打印机的最大流量是多少？',
      answer: '这完全取决于您的热端。标准热端（V6 型）通常每秒可以熔化 10 到 12 mm³。大流量模型如 Volcano 或 Revo High Flow 可以达到 30-35 mm³/s。',
    },
    {
      question: '为什么 PETG 的流动速度比 PLA 慢？',
      answer: 'PETG 在熔融状态下具有更高的粘度。这意味着它通过喷嘴时阻力更大，因此在相同温度下，其有效流量极限通常比 PLA 低 15%。',
    },
    {
      question: '线宽如何影响流量？',
      answer: '线宽与层高一样，是最直接的相乘系数。如果您在相同速度下将宽度从 0.4mm 增加到 0.6mm，您要求挤出机提供的流量增加了 50%。',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online：流量和速度限制',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki：校准',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab：流量校准',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: '配置硬件',
      text: '选择喷嘴直径并选择常用的热端预设。',
    },
    {
      name: '调整参数',
      text: '移动线宽、层高和打印速度的滑块。',
    },
    {
      name: '复制数值',
      text: '复制最大流量值并将其用于切片软件。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '我的打印机的最大流量是多少？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '这取决于您的热端。标准热端通常每秒可以熔化 10 到 12 mm³。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '体积流量计算器',
      description: '计算 3D 打印机的最大体积流量。',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何计算体积流量',
      step: [
        {
          '@type': 'HowToStep',
          text: '配置硬件',
        },
        {
          '@type': 'HowToStep',
          text: '调整参数',
        },
      ],
    },
  ],
};
