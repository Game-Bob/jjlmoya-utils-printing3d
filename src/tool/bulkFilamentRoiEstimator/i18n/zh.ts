import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'bulk-filament-roi-estimator';
const title = '散装长丝ROI估算器';
const description = '将1kg长丝卷与3kg、5kg或定制散装卷进行对比，考虑湿度风险、实际节省金额和本地货币格式。';

const faqData = [
  {
    question: '5kg长丝卷总是比购买五个1kg卷便宜吗？',
    answer: '不是。只有当每克成本更低，并且您能在湿气影响打印质量之前消耗完材料时，它才更便宜。消耗缓慢可能使散装折扣变成浪费。',
  },
  {
    question: '为什么计算器要扣除风险罚金？',
    answer: '当预期消耗时间长于您的安全存储窗口时，罚金估算损失的价值。这不是汇率转换或实验室湿度模型；而是一种规划风险调整。',
  },
  {
    question: '我需要实时汇率吗？',
    answer: '不需要。该工具使用本地近似汇率表在您切换货币时转换显示的价格。它在不联系服务器的情况下保持等价性，因此最终购买决策仍应以您的商店或银行显示的价格为准。',
  },
  {
    question: '对于PLA、PETG、TPU或尼龙，我应该输入多长时间的安全存储时间？',
    answer: '使用您在环境中能够保持该特定材料干燥的时间段。PLA可能比尼龙或TPU耐受更长时间的存储，但开放空间、潮湿气候或袋子密封不良都可能大幅缩短安全窗口。',
  },
];

const howToData = [
  {
    name: '输入标准卷价格',
    text: '输入您通常购买的1kg卷的价格。如果您的供应商使用其他规格，标准卷重量可以调整。',
  },
  {
    name: '输入散装产品信息',
    text: '选择3kg、5kg或定制重量，并输入该大卷的完整价格（使用相同货币）。',
  },
  {
    name: '模拟存储风险',
    text: '添加您的月消耗量和您在湿气、脆化或干燥成本成为实际支出之前信任的最大存储时间。',
  },
  {
    name: '查看实际节省金额',
    text: '使用实际节省金额作为购买信号，因为它同时包含了散装折扣和降解罚金。',
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: '货币',
    unitSystemLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '英制',
    standardTitle: '标准卷',
    bulkTitle: '散装卷',
    consumptionTitle: '消耗与存储',
    standardWeightLabel: '标准重量',
    standardPriceLabel: '标准卷价格',
    bulkWeightLabel: '散装重量',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6.6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: '其他',
    bulkPriceLabel: '散装卷价格',
    customWeightLabel: '定制散装重量',
    monthlyUseLabel: '月消耗量',
    safeStorageLabel: '安全存储窗口',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: '个月',
    realSavingsLabel: '风险后实际节省',
    grossSavingsLabel: '总节省',
    riskPenaltyLabel: '湿度风险罚金',
    breakEvenLabel: '消耗时间',
    viabilityLabel: '可行性',
    tableMetricLabel: '公制',
    tableStandardLabel: '1kg卷',
    tableStandardImperialLabel: '2.2lb卷',
    tableBulkLabel: '散装卷',
    costPerGramMetric: '每克成本',
    costPerOunceMetric: '每盎司成本',
    totalSpoolMetric: '卷价格',
    usableWindowMetric: '消耗窗口',
    profitableLabel: '划算',
    neutralLabel: '中性',
    poorLabel: '价值不高',
    humidityWarningTitle: '湿度降解风险',
    humidityWarning: '降解风险：如果您没有干燥系统或密封存储，购买此卷可能会造成经济损失。',
    safeMessage: '存储风险在您选择的安全窗口内。保持线卷密封干燥，以保持预期的节省金额。',
  },
  seo: [
    {
      type: 'title',
      text: '如何判断散装长丝是否真的更便宜',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3kg或5kg长丝卷看起来很有吸引力，因为每公斤标价通常低于单个1kg卷。常见的错误是只比较结账总额。正确的比较应将两种产品标准化为<strong>每克成本</strong>，将差额乘以您实际购买的材料量，然后评估该材料在消耗完之前是否能保持可打印性。',
    },
    {
      type: 'paragraph',
      html: '核心公式很简单：将每个线卷的价格除以其克重。如果1kg卷价格为24.99，5kg卷价格为89.99，那么1kg卷每克成本为0.02499，散装卷每克成本为0.017998。表面上的节省是每克差额乘以5000克。这个数字有用，但如果线卷会开封放置数月，仍然不完整。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: '常见桌面长丝卷的参考质量' },
        { value: '3-5kg', label: '折扣变得明显的典型散装规格' },
        { value: '0 API', label: '货币等值使用本地近似汇率而非实时服务器调用' },
      ],
    },
    {
      type: 'table',
      headers: ['问题', '输入内容', '为何重要'],
      rows: [
        ['我通常购买什么？', '1kg卷的价格', '这设定了每克基准成本。'],
        ['散装产品是什么？', '总价和散装重量', '这产生了折扣后的每克成本。'],
        ['我打印速度有多快？', '月消耗公斤数', '这估算线卷需要存放多久。'],
        ['我的存储条件如何？', '降解前的安全月数', '这定义了风险罚金何时开始。'],
      ],
    },
    {
      type: 'title',
      text: '为什么湿气会改变ROI计算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '长丝不是安全放在架子上的现金等价物。许多聚合物会吸收空气中的湿气，潮湿的长丝打印时可能出现气泡、拉丝、挤出脆弱、表面浑浊、层间附着力弱和流量不稳定。具体速度取决于材料、湿度、包装以及线卷是存放在干燥箱、密封袋还是开放支架中。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '散装线卷的隐藏失败模式',
      badge: '规划风险',
      html: '即使每克价格非常优惠，5kg卷也可能是个糟糕的购买。如果您的打印机每月消耗0.5kg，而您的安全存储窗口为3个月，那么该线卷需要大约10个月才能用完。折扣必须足够大，以覆盖额外的干燥、密封、打印失败或废弃材料风险的成本。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '快速用户',
          description: '小型打印农场、cosplay制作者或批量生产可以快速消耗3kg到5kg。散装长丝通常合理，因为存储时间短。',
          points: ['月使用量高', '货架暴露时间短', '折扣变成实际节省的资金'],
        },
        {
          title: '间歇性爱好用户',
          description: '仅周末打印或偶尔维修的用户可能需要数月才能用完一个大卷。湿气风险可能抵消折扣。',
          points: ['月使用量低', '开封后寿命长', '干燥存储更为重要'],
        },
        {
          title: '技术材料用户',
          description: '尼龙、TPU、PC混合物和一些PETG等级等材料通常需要更严格的干燥管理。散装购买应配合存储设备。',
          points: ['对湿气更敏感', '推荐使用干燥箱', '罚金阈值应保守设定'],
        },
      ],
    },
    {
      type: 'title',
      text: '实际节省金额的含义',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '该工具首先显示总节省额，然后在预计消耗时间超过安全存储窗口时扣除降解罚金。这种罚金故意采用保守而非实验室预测的方式。它代表了一种经济现实：潮湿或老化的长丝通常会产生不明显的成本：干燥用电、额外处理、打印失败、喷嘴堵塞、表面缺陷，以及部分线卷可能变得不适合可见或结构用途的情况。',
    },
    {
      type: 'list',
      items: [
        '实际节省为正意味着散装折扣在存储风险调整后仍然有效。',
        '中性意味着决定取决于便利性、颜色可用性、运费以及您是否已经拥有干燥箱。',
        '价值不高意味着散装卷每克并不便宜，或者风险调整后的节省为负。',
        '当消耗月数大于您输入的安全存储窗口时，会出现警告信息。',
      ],
    },
    {
      type: 'proscons',
      title: '散装长丝购买的权衡',
      items: [
        { pro: '高打印量时每克成本更低。', con: '更多资金锁定在单一材料、颜色和供应商批次中。' },
        { pro: '长时间生产中更换线卷次数更少。', con: '更大的暴露质量可能在消耗前降解。' },
        { pro: '每公斤包装废弃物更少。', con: '大卷可能需要更坚固的支架或外部线卷架。' },
        { pro: '适用于重复性农场作业和批量生产。', con: '不适合稀有颜色、实验性材料或慢速爱好使用。' },
      ],
    },
    {
      type: 'title',
      text: '如何选择安全存储窗口',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '安全存储窗口不是通用的材料常数。它是您个人相信长丝在您的存储条件下能保持可打印性的时间长度。一个装有新鲜干燥剂的密封袋放在干燥的房间里，与潮湿车库中打印机旁敞开的线卷截然不同。对于保守的购买决策，请输入您在重要打印前会开始干燥线卷的时间（以月为单位）。',
    },
    {
      type: 'table',
      headers: ['情况', '建议的规划行为', '原因'],
      rows: [
        ['潮湿房间中的开放式线卷支架', '使用较短的安全窗口', '湿气暴露是持续的。'],
        ['带干燥剂的密封盒', '使用较长的安全窗口', '线卷在打印之间受到保护。'],
        ['为打印机供料的干燥箱', '使用较长但现实的窗口', '打印和存储都处于受控状态。'],
        ['尼龙、TPU、PC或可溶性支撑材料', '保持保守', '这些材料在潮湿时会迅速产生打印问题。'],
        ['用于粗糙原型的PLA', '风险承受度可以更高', '轻微的外观问题对于非关键部件可能是可接受的。'],
      ],
    },
    {
      type: 'tip',
      title: '在促销结束前使用计算器',
      html: '闪购常常让人感觉散装卷很紧迫。输入促销价、尽可能包含运费的价格以及您的实际月使用量。如果消耗时间长于您的存储窗口，那么折扣需要足够大才能覆盖增加的风险。',
    },
    {
      type: 'title',
      text: '无需汇率API的货币转换',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '该估算器设计为客户端运行。它不会获取实时汇率，但货币选择器在用户切换货币时仍然会应用本地换算系数。这意味着输入为24.99 EUR的线卷会变成USD、GBP、JPY或其他支持货币的近似等值，而不仅仅是替换符号。汇率是规划估算值，因此实际结账价格、卡手续费、税费和特定市场的换算差价在购买前仍应进行核实。',
    },
    {
      type: 'glossary',
      items: [
        { term: '每克成本', definition: '线卷价格除以总长丝克数。这是用于公平比较的标准化单位。' },
        { term: '总节省', definition: '考虑湿气或存储风险之前的价格优势。' },
        { term: '风险罚金', definition: '当线卷消耗时间长于安全存储窗口时应用的规划扣减。' },
        { term: '实际节省', definition: '总节省减去风险罚金。这是主要的购买信号。' },
        { term: '消耗窗口', definition: '散装线卷重量除以估计月使用量。' },
      ],
    },
    {
      type: 'summary',
      title: '实用购买规则',
      items: [
        '当实际节省明显为正且消耗窗口适合您的存储设置时，购买散装产品。',
        '当您购买一个项目后就会闲置的稀有颜色时，避免散装。',
        '将干燥设备视为散装长丝系统的一部分，而不是对湿气敏感聚合物的可选奢侈品。',
        '当不同线卷尺寸的运费不同时，比较的是含运费价格，而不仅仅是产品页面价格。',
      ],
    },
    {
      type: 'message',
      title: '核心结论',
      html: '当三个条件同时具备时，散装线卷是划算的：每克成本更低、月消耗量足够、存储能保持长丝可打印性。如果其中一个条件不满足，表面上的折扣可能变成隐蔽的材料损失。',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
