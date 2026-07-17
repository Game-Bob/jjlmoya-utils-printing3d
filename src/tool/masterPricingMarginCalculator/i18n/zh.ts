import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = '3d-print-pricing-calculator';
const title = '3D打印价格计算器：利润率、加成和市场定位';
const description =
  '根据生产制造成本、目标利润率、成本加成比例（markup）和竞争对手价格，使用严谨的财务公式计算3D打印的推荐零售价（PVP）。';

const currencyOptions = [
  { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
  { code: 'USD', label: '$', symbol: '$' },
  { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
  { code: 'CAD', label: 'C$', symbol: 'C$' },
  { code: 'AUD', label: 'A$', symbol: 'A$' },
  { code: 'CHF', label: 'Fr', symbol: 'Fr' },
  { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
  { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
  { code: 'BRL', label: 'R$', symbol: 'R$' },
  { code: 'MXN', label: '$', symbol: '$' },
  { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
  { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
  { code: 'SEK', label: 'kr', symbol: 'kr' },
  { code: 'NOK', label: 'kr', symbol: 'kr' },
  { code: 'DKK', label: 'kr', symbol: 'kr' },
  { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
  { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
];

const faqData = [
  {
    question: '在3D打印中，利润率（margin）和加成（markup）有什么区别？',
    answer:
      '利润率是利润除以销售价格。加成是利润除以成本。如果在 40.00 的成本上进行 50% 的成本加成，得到的销售价格是 60,00，此时的实际利润率是 33.33%，而不是 50%。',
  },
  {
    question: '为什么目标利润率必须低于 100%？',
    answer:
      '利润率计算公式是将成本除以（1 减去利润率）。当目标利润率为 100% 时，分母变为零，因此在数学上无法得出有限的销售价格。',
  },
  {
    question: '竞争对手的价格是否应该决定我的3D打印报价？',
    answer:
      '竞争对手的价格是市场定位的信号，不能替代真实的成本计算。如果您的计算价格高于市场价，请在盲目打折之前，重新评估生产成本、表面处理水平、交付周期和附加价值。',
  },
  {
    question: '此计算器是否包含税费或增值税？',
    answer:
      '不包含。它计算的是未含增值税或其他销售税前的推荐零售价格。请根据您当地的财务与开票规则，自行在推荐零售价的基础上加上增值税、平台手续费或交易服务费。',
  },
];

const howToData = [
  { name: '输入总制造成本', text: '使用该打印件的完整生产成本，包括固定费用折旧、变动成本、材料费、机器工时费、人工工时费以及后处理成本。' },
  { name: '选择利润率或加成模式', text: '选择推荐零售价（PVP）是采用目标利润率公式计算，还是采用成本加成公式计算。' },
  { name: '设置竞争对手参考价格', text: '输入市场上同等定位的产品价格，以评估您的报价是高于、低于还是处于竞争对手的同等水平。' },
  { name: '复制推荐销售价', text: '点击复制按钮，将推荐零售价（PVP）、净利润、实际利润率和市场对比结论快速导入到您的报价单或发票中。' },
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
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  featureList: [
    '3d打印价格计算器',
    '3d打印利润率计算器',
    '成本加成与利润率区别 3d打印',
    '3d打印零售价格计算器',
    '市场定位分析指标',
  ],
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D打印价格设定输入',
    resultsAriaLabel: '3D打印定价结果',
    currencyLabel: '币种',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: '总制造成本',
    competitorLabel: '竞争对手参考价格',
    marginLabel: '目标利润率',
    markupLabel: '目标加成率',
    conversionFactorLabel: '全局换算系数',
    conversionFactorUnit: 'x',
    conversionHint: '如果输入成本已经是以选择的货币计价，请保持为 1。该系数用于在整套工具中统一进行汇率换算或阶梯调价。',
    modeLabel: '零售价计算方法',
    marginModeLabel: '利润率',
    markupModeLabel: '加成',
    pvpRecommendedLabel: '推荐PVP',
    netProfitLabel: '净利润',
    realMarginLabel: '实际利润率',
    marketComparisonLabel: '对比竞争对手',
    marketPositionLabel: '市场定位',
    aboveMarketLabel: '高于市场价',
    belowMarketLabel: '低于市场价',
    atMarketLabel: '处于市场价水平',
    pvpByMarginLabel: '按利润率计算PVP',
    pvpByMarkupLabel: '按加成率计算PVP',
    formulaMarginLabel: 'PVP_margin = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: '复制价格',
    copiedLabel: '已复制',
    copyTemplate: '推荐零售价（PVP）: {pvp}; 净利润: {profit}; 实际利润率: {margin}; 市场对比结论: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: '此3D打印定价计算器的工作原理', level: 2 },
    {
      type: 'paragraph',
      html: '一个可靠的<strong>3D打印价格计算器</strong>必须从总制造成本出发，而不是仅根据耗材重量进行粗略估算。成本中应当合理分配固定资产折旧、设备损耗折旧、材料费、失败打印损耗分摊、人工工时、后处理人力、包装以及与订单直接关联的各项杂费。一旦这些成本被确定下来，您便可以根据目标利润率或成本加成率来推导合理的售价。这两种定价方法不能混用，混淆两者是导致许多3D打印服务商「表面上订单饱满且看起来有利可图，实际上利润未能达到预期」的最快根源。',
    },
    {
      type: 'paragraph',
      html: '计算器使用严格的数学公式：<code>PVP_margin = C / (1 - M / 100)</code> 以及 <code>PVP_markup = C x (1 + U / 100)</code>。净利润始终为 <code>PVP - C</code>。实际利润率则是利润占最终销售价格（而非成本）的比重。目标利润率的滑块最大限制在 100% 以下，因为 100% 的利润率要求零成本或无穷大的售价。计算结果始终固定输出为保留两位小数，且不带千分位分隔符，这极大地方便了用户直接将数据粘贴到发票、电子表格、ERP系统或报价单中。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: '严格的利润率校验', icon: 'mdi:shield-check-outline' },
        { value: '2位小数', label: '固定的货币显示格式', icon: 'mdi:calculator-variant-outline' },
        { value: '即时显示', label: '滑块连动实时重算价格', icon: 'mdi:flash-outline' },
        { value: '市场对比', label: '竞品价格定位和分析', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: '在企业内部统一价格术语的定义',
      html: '<p>在商务沟通和内部核算中，请明确所指的是「利润率」还是「加成率」。一个未说明核算基准的 "40%" 报价，会对应出两个完全不同的销售价。</p>',
    },
    { type: 'title', text: '3D打印中的利润率与成本加成对比', level: 2 },
    {
      type: 'paragraph',
      html: '当工作室的老板发现「在成本基础上加成 30% 却未能带来 30% 的毛利率」时，通常会去搜索<strong>成本加成与利润率区别 3d打印</strong>这一主题。成本加成（markup）是相对于成本的百分比，而利润率（margin）是相对于销售价格的百分比。如果一个打印件的成本是 50.00，以 75.00 出售，净利润为 25.00。加成率就是 25.00 除以 50.00，得到 50.00%；而利润率是 25.00 除以 75.00，得到 33.33%。这两个比例都是正确的财务指标，但它们衡量的是不同维度的经营问题。',
    },
    {
      type: 'table',
      headers: ['生产成本', '目标设定', '计算公式', '推荐PVP', '净利润', '实际利润率'],
      rows: [
        ['50.00', '50% 成本加成', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% 利润率', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% 成本加成', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% 利润率', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '看似高昂的成本加成，最终的利润率可能并不理想',
      badge: '财务精准度',
      html: '<p>100% 的成本加成意味着将销售价格设定为成本的两倍，但在财务报表上，这只带来了 50% 的毛利率。如果您的企业需要 60% 的实际利润率来覆盖办公室租金等间接费用并维持增长，100% 的加成率是不够的。</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: '推荐销售价格，在报价单策略中未做特别说明时，通常指未含税价格。' },
        { term: '成本 C', definition: '在添加利润之前，该打印任务分摊到的总制造和处理成本。' },
        { term: '利润率 M', definition: '净利润占销售价格的比重，以百分比形式表示。' },
        { term: '加成率 U', definition: '净利润占制造成本的比重，以百分比形式表示。' },
        { term: '净利润', definition: '在进行所得税及财务利息调整前，销售价格减去制造总成本的差额。' },
      ],
    },
    { type: 'title', text: '总制造成本应该包含哪些部分', level: 2 },
    {
      type: 'paragraph',
      html: '一个 <strong>3d打印零售价格计算器</strong> 的计算准确度，完全取决于您输入的初始成本。在进行专业报价时，成本绝不能简单地等于「耗材克数乘以卷装单价」。除了原材料以外，您还需要把设备的电力消耗、喷嘴及 FEP 离型膜的物理折旧、清洗时树脂的损耗、平台清理工时、在切片软件中修改参数的时间、去除支撑的人工、打磨及涂装处理、质量检验、包装箱材料、支付手续费以及失败打印的合理折旧比例等都计入成本中。本计算器假定，您输入的原始成本中已完全包含并消化了这些开支。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '计入可变的原材料成本：耗材丝料、树脂、金属粉末、支撑材料、排料喷嘴清理废料和打印底垫（raft）。',
        '根据设备的折旧年限、日常保养、电力消耗和预估使用周期，计算出每小时的设备运行成本。',
        '计入在排版、切片、后处理、包装和商务沟通上为此订单所花掉的人工工时成本。',
        '计入后处理中直接消耗的辅助材料：底漆、油漆、砂纸、酒精（IPA）、手套、美纹纸、抛光膏。',
        '针对结构复杂、公差严苛、容易打印失败、或耗时长的夜间打印任务，计入测算过的失败打印折旧率。',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '仅计入材料成本',
          description: '用于业余爱好者的快速估算尚可，但完全无法支撑长期的商业运作。',
          icon: 'mdi:printer-3d-nozzle',
          points: ['忽略了人工时间价值', '未考虑设备机械磨损', '严重低估了成品的应有价格'],
        },
        {
          title: '总制造和处理成本',
          description: '最合理的财务核算基准，完美体现了在追求商业利润前的真实底价。',
          icon: 'mdi:factory',
          highlight: true,
          points: ['包含设备时间成本', '包含实际处理人工', '确保了报价标准的复用性和稳定性'],
        },
        {
          title: '全面分摊后的报价',
          description: '可能已经包含了工作室折旧和预期利润，此时若在此基础上再次应用利润率，会导致价格虚高。',
          icon: 'mdi:receipt-text-outline',
          points: ['在企业审计中很有用', '不建议作为计算器的成本输入', '需配套清晰的财务记账规则'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: '计算器不会自动猜测您的生产成本',
      html: '<p>它的作用是将您已知的确定成本转化为合理的推荐销售价格。如果您的成本账目尚不明确，请先建立关于原材料、时间、人工和后处理的成本模型，然后再使用本工具设定利润和市场定位。</p>',
    },
    { type: 'title', text: '如何利用目标利润率来科学定价', level: 2 },
    {
      type: 'paragraph',
      html: '许多人在寻找 <strong>如何定价3d打印件</strong> 时，通常习惯使用一个简单的倍数。然而，当工作室有明确的财务健康度目标时，基于目标利润率进行定价要科学得多。如果需要的利润率是 40%，而制造原价是 60.00，价格就是 <code>60.00 / (1 - 0.40)</code>，即推荐售价为 100.00。利润是 40.00，实际利润率如期实现 40.00%。当工作室希望每个产品类别在扣除成本后，都能以稳定的百分比为企业贡献利润时，这种方法是首选。',
    },
    {
      type: 'paragraph',
      html: '在财务上，利润率绝不可能达到 100%。如果将目标设定为 99%，10.00 成本的零件最终售价会高达 1000.00。如果设定为 99.99%，同样的成本会对应 100000.00。这种数学现象并不是计算错误，它指明了利润率目标必须符合市场商业逻辑。极高利润率的计算结果，通常意味着您最初的成本账目算低了，或者该产品具有极高的垄断性，属于非常细分的小众市场。',
    },
    {
      type: 'table',
      headers: ['目标利润率', '对应的成本乘数', '40.00 成本对应的售价', '典型应用场景'],
      rows: [
        ['20%', '1.2500倍', '50.00', '竞争非常激烈、几乎无需进行额外客户服务和技术支持的低门槛打印订单。'],
        ['35%', '1.5385倍', '61.54', '常规的プロ向け（专业级）受托业务，能够正常分摊工作室的一般管理费。'],
        ['50%', '2.0000倍', '80.00', '后处理难度大、需要手动打磨油漆、交付时间极其紧急的特急件或小批量生产。'],
        ['70%', '3.3333倍', '133.33', '具有专利等独占技术价值、高研发属性的项目，或者定位于高端品牌路线的商业展示件。'],
      ],
    },
    {
      type: 'summary',
      title: '利润率定价核对清单',
      items: [
        '始终以实际的总制造成本为计算起点。',
        '确保设定的目标利润率在数值上小于 100%。',
        '在将报价单发给客户前，把推荐PVP与竞争对手的实际行情做对比。',
        '如果价格偏高，在直接削减企业利润之前，请先评估哪个环节的成本占了大头。',
      ],
    },
    { type: 'title', text: '在不混淆利润率的前提下正确使用成本加成', level: 2 },
    {
      type: 'paragraph',
      html: '成本加成（markup）在工作室对不同类别的成本应用一律的加成倍率时非常实用。例如，对于标准FDM打印应用 80% 的成本加成，对于打磨好并上色完成的样件应用 120% 的加成，而对于特急件应用 200% 的加成。其计算方法非常直接，即「成本 × (1 + 加成率)」。原价为 35.00 的产品在 80% 加成下售价为 63.00。净利润是 28.00，但实际销售利润率（利润除以售价）是 44.44%，而不是 80%。',
    },
    {
      type: 'proscons',
      title: '利润率方法与成本加成方法的优劣对比',
      items: [
        { pro: '利润率方法与企业财务报表上的毛利率直接挂钩，利于直观掌握真实盈利水平。', con: '需要对销售团队进行培训，使其理解在高利润目标下，售价会呈现非线性的剧烈飙升。' },
        { pro: '成本加成方法能够根据物料成本清单，极快地乘上倍数进行定价。', con: '如果员工误把加成率等同于真实盈利能力（利润率），容易导致对现金流的盲目乐观。' },
        { pro: '同时呈现两个公式的计算结果，能够帮助管理者看清定价背后的真实账目。', con: '企业内部依然需要制定明确规定，明确在最终对外报价单中以哪一个指标为基准。' },
      ],
    },
    {
      type: 'message',
      title: '成本加成在实际业务中的便捷应用',
      ariaLabel: '加成比例指南',
      html: '<p>加成率非常适合用于制定简单的内部定价口诀：例如「标准FDM任务一律+60%」「树脂手办一律+90%」「特急加急单+150%」。请借助实际利润率输出，核对这些口诀是否偏离了公司的总财务目标。</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '成本加成并非错误的定价方式',
      badge: '手法备忘录',
      html: '<p>只要核算基准被团队成员充分理解，成本加成就是一种完全合理的沟通语言。关键问题是，不要把乘在成本上的「加成率」在报价单或分析表格中错误地称为「利润率」。</p>',
    },
    { type: 'title', text: '竞争对手价格与市场定位', level: 2 },
    {
      type: 'paragraph',
      html: '竞争对手的参考价格，将此计算器从一个简单的公式工具提升为了一个辅助商务决策的工具。如果计算出的推荐PVP高于竞争对手的参考价格，结果区域将显示淡橘色的警告色调。这并不自动意味着您的报价有误。更短的交付时间、更好的物料追溯保障、更好的表面质量、伴随设计优化服务、尺寸精度检测服务、或更低的产品报废风险，都是合理溢价的支撑。但销售人员在发送报价单之前，心里应该非常清楚自己比竞争对手贵在了哪里。',
    },
    {
      type: 'paragraph',
      html: '在做竞品价格对比时，必须建立在同等规格的前提下。层纹明显的无处理FDM打印件，不能与经过精细打磨、喷砂油漆处理的工业样件做价格对比。一个在海外发货、公差宽松、材质不明的网店价格，无法取代一个由本地工程师为您校对CAD装配文件并提供装配质保的专业工程服务价格。请输入在材质、工艺、数量、处理要求及交期上最相似的竞品参考价。',
    },
    {
      type: 'table',
      headers: ['价格定位', '数据解读', '建议的销售动作'],
      rows: [
        ['低于竞争对手', '价格极具吸引力，但您可能把本应赚到的企业利润留在了桌面上。', '检查您的目标利润率是不是定得太低了，或者竞争对手在服务中砍掉了一些常规环节。'],
        ['接近竞争对手', '价格与所选的市场相符。', '可以重点宣传工作室在交付时效、技术支持或品质保障上的优势来促成受托。'],
        ['高于竞争对手', '报价单可能面临被客户质疑的风险，或需要重新核实是否有优化成本的空间。', '在打折退让之前，精细分析是哪个环节的成本占了大头，或通过展示后处理样板来向客户证明溢价的合理性。'],
      ],
    },
    {
      type: 'tip',
      title: '不要盲目陷入无底线的低价竞争',
      html: '<p>一个投入了真实研发时间、设备定期维护校准、耗材来源可靠且掌握后处理核心工艺的工作室，绝不应为了盲目迎合劣质低价而牺牲定价红线。请用客户可亲自检验的可靠质量进行竞争。</p>',
    },
    { type: 'title', text: '货币选择与全局换算系数', level: 2 },
    {
      type: 'paragraph',
      html: '跨国受托和外贸业务需要统一而稳定的汇率换算管理。货币选择器不仅可以更换货币符号，还会根据全套工具链统一的参考汇率折算数值。全局换算系数是一个独立的商务倍数。如果输入成本和竞争对手的报价本就是基于所选货币计价，请保持系数为 <code>1</code>。如果您想要在计价中加入汇率风险缓冲垫、根据不同地域应用阶梯定价表、或为代理渠道预留空间，请在这里输入自定义系数。',
    },
    {
      type: 'paragraph',
      html: '此系数仅影响金额数值，对计算出的利润率或加成率百分比没有影响。因为无论使用何种货币，利润率在财务指标上代表的比例关系是相同的。欧元的 35% 利润率，在成本和参考价换算后，在美元计价下依然是 35% 的利润率。计算结果固定输出为不带千分位号的两位小数，确保在复制到发票、 spreadsheet 等系统时不会因为格式问题产生数据报错。',
    },
    {
      type: 'summary',
      title: '货币及系数管理规则',
      items: [
        '在复制推荐价格之前，请先将货币调整为客户结算的真实货币。',
        '制作本地货币报价单时，将全局换算系数固定为 1。',
        '换算系数仅用于控制合理的商务调价，请勿通过修改它来强行凑出利润率。',
        '有关发票的最终端数四舍五入及附加消费税，请在计算出的税前PVP售价基础上另行处理。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '税费和第三方平台手续费需要另计',
      badge: '报价指引',
      html: '<p>如果您需要向客户加收增值税、平台扣点 commission、支付接口手续费或航运保险费，请根据工作室的记账政策，在计算出制造PVP售价的基础上，额外计算并加在最终发票上。</p>',
    },
    { type: 'title', text: '制定3D打印工作室的商业定价策略', level: 2 },
    {
      type: 'paragraph',
      html: '一套稳健的<strong>3D打印工作室定价策略</strong>，需要把严谨的成本核算、严格的利润红线纪律和敏锐的市场行情掌握结合在一起。核算防止赔本买卖，纪律防止因为盲目让利打折侵蚀工作室的发展根基，而行情掌握确保了产品报价能够合理地被市场接受。此计算器正是这三个核心商业要素相互验证和平衡的交点。',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        '针对大宗低端打印、工程级结构试作、高要求展示样件、急件加急和批量生产订单，分别设立独立的目标利润率红线。',
        '如果对销售人员规定了成本加成口诀，必须确保他们在计算结果中能够直接看到此口诀对应出的实际毛利率。',
        '统计并记录不同价格档位下的获单率，以便用真实数据（而非凭空直觉）来验证高端定位定价的合理性。',
        '在每笔订单交货后做成本复盘，如果工时、失败废品率或打磨时间超出预算，请及时更新成本核算标准。',
        '针对准备工作繁琐、但打印实际耗时极短的微小零件任务，设定起步的起订金额，以覆盖沟通和调试成本。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: '在订单交付结案后，进行实际利润的复盘核算',
      html: '<p>报价前预估的目标利润率只是目标，交货后结案复盘核算出的实际利润才能真正优化工作室的定价体系。请定期对比预估成本与真实发生成本的偏差，微调各产品系列的利润目标。</p>',
    },
    {
      type: 'summary',
      title: '报价即用工作流',
      items: [
        '精细测算打印任务的总制造和处理成本。',
        '根据工作室商务政策，主动选择采用利润率或成本加成方式。',
        '核对计算出的实际利润率百分比和净利润数值。',
        '将其与市场同等定位的竞争对手实际参考价做对比。',
        '将推荐PVP写入报价单中，税费和账单截断在系统内另行处理。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
