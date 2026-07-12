import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'sla-resin-hollowing-drainage-calculator';
const title = 'SLA光敏树脂镂空与排料孔计算器';
const description = '针对镂空SLA及DLP光敏树脂3D打印，计算保守的壁厚、排料孔径、最小排气孔数量，以及根据几何复杂性调整后的树脂节省量。';

const faqData = [
  { question: '为什么计算器总是建议至少设置两个排料孔？', answer: '镂空树脂打印件需要一个通道让液体树脂排出，以及另一个通道让空气进入。两个开口还有助于在剥离过程中打破针对离型膜的吸盘效应。' },
  { question: '为什么树脂节省量低于理论上的镂空体积？', answer: '液体树脂会残留在内壁、加强筋、拐角、支撑和微小口袋中。计算器会根据几何复杂性，从理论镂空体积中扣除5%、10%或15%。' },
  { question: '1.5 mm的壁厚总是足够吗？', answer: '不够。对于许多桌面级树脂打印件来说，这只是一个最低的安全底线。高大部件、重型部件、工程负载、高温环境或剧烈打磨可能需要更厚的壁厚和测试样件。' },
  { question: '排料孔应该放在哪里？', answer: '将孔放置在尽可能靠近成型平台一侧以及打印取向中树脂容易积聚的最低点，然后确认切片软件中没有残留密封的口袋空间。' },
];

const howToData = [
  { name: '输入模型体积和高度', text: '使用添加支撑和确定取向后的切片体积，然后输入打印取向中的零件高度。' },
  { name: '选择几何复杂性', text: '选择简单、中等或高复杂性，以便从理论镂空节省量中扣除残留树脂体积。' },
  { name: '选择树脂类型', text: '选择标准、刚性或工程树脂。粘度更高的树脂会获得更大的推荐排料孔径。' },
  { name: '检查壁厚和排孔建议', text: '在对最终文件进行切片之前，参考建议壁厚、排孔径、孔数和检查清单。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

const seoData = [
    {
      type: 'title',
      text: 'SLA 树脂掏空与排液计算器的作用是什么？',
      level: 2
    },
    {
      type: 'paragraph',
      html: '该工具解决了 SLA、DLP 和 LCD 树脂 3D 打印中最关键的挑战之一：优化空心模型。打印实心树脂零件不仅成本高昂、重量大，而且会增加打印过程中的离型力（剥离力）。掏空模型可以减少材料使用，但如果引入没有适当排液口的空心腔体，会导致未固化的树脂滞留，并因真空力而导致打印失败。该计算器可以计算出理想的壁厚，建议正确的排液孔直径 and 数量，并通过考虑不可避免地滞留在打印零件内壁上的液态树脂来估算实际的树脂节省量。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 毫米',
            label: '桌面级 SLA 推荐的最小壁厚'
          },
          {
            value: '2 个孔',
            label: '破坏真空所需的最小排气孔数量'
          },
          {
            value: '10-15%',
            label: '由于内表面树脂滞留导致的体积减少率'
          },
          {
            value: '30-70%',
            label: '通过掏空实现的平均总重量减轻率'
          }
        ]
    },
    {
      type: 'title',
      text: '壁厚如何影响树脂节省',
      level: 2
    },
    {
      type: 'paragraph',
      html: '壁厚是决定节省树脂量的主要变量。较厚的壁可以增加结构强度，但会迅速消耗更多树脂，从而降低掏空的效率。相反，过薄的壁会非常脆弱，在后固化过程中容易变形，并且在打印机将每个固化层与 FEP 离型膜分离时，可能无法承受机械剥离力。目标是找到一个平衡点，既能使模型保持其形状和实用性，又能最大程度地节省材料。'
    },
    {
      type: 'proscons',
      title: '树脂打印模型掏空的利与弊',
      items: [
          {
            pro: '大幅降低材料成本和打印总重量',
            con: '需要后处理来清洗和固化内部空腔'
          },
          {
            pro: '每层较小的表面积可减少 FEP 离型膜上的剥离力',
            con: '位置不当的排液孔可能会破坏模型的视觉美感'
          },
          {
            pro: '减少后固化过程中的热应力和变形',
            con: '滞留的液态树脂有导致零件日后开裂的风险'
          }
        ]
    },
    {
      type: 'title',
      text: '了解空心树脂打印中的吸盘效应',
      level: 2
    },
    {
      type: 'paragraph',
      html: '打印空心模型时，当它浸入树脂槽中时会形成一个密闭的腔室。如果该腔室没有排气孔，则每次抬升循环都会在固化层与离型膜之间产生强烈的局部真空（即吸盘效应）。这种力会拉扯打印件，导致层间分离、层纹、支撑失效，甚至将模型完全拉脱离成型板。添加排气孔可以让空气进入，中和压力差，从而确保剥离循环顺利进行。'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '密闭空心空间的危险性',
      html: '切勿让空心空间完全密闭。打印零件内部滞留的液态树脂会随着时间的推移缓慢降解已固化的壁，最终导致模型开裂、泄漏有毒树脂或完全解体。务必保留至少两个孔，以便清洗内部并使用内部 UV 光源进行固化。'
    },
    {
      type: 'title',
      text: '排液孔放置的最佳实践',
      level: 2
    },
    {
      type: 'list',
      items: [
          '将排液孔放置在尽可能靠近成型板的位置，以便树脂在打印早期流出。',
          '务必使用至少两个孔：一个用于排出液态树脂，另一个用于让空气进入。',
          '将孔定位在非显眼表面，例如底座底部或接缝后面，以保持美观。',
          '确保每个独立的内部空腔都有一套自己的排液孔。'
        ]
    },
    {
      type: 'title',
      text: '计算器如何根据几何复杂度进行调整',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: '简单几何形状',
            description: '低细节模型、球体或块。在平坦的内表面上滞留的树脂极少（约 5%）。'
          },
          {
            title: '中等几何形状',
            description: '角色模型或标准机械零件。内部支撑和曲线会滞留中等程度的树脂（约 10%）。',
            highlight: true
          },
          {
            title: '高复杂度',
            description: '高度精细的微缩模型、网格结构或复杂的空心通道。由于毛细管作用会滞留大量树脂（约 15% 以上）。'
          }
        ]
    },
    {
      type: 'title',
      text: '了解树脂粘度与排液孔尺寸的关系',
      level: 2
    },
    {
      type: 'table',
      headers: [
          '树脂类别',
          '粘度等级',
          '最小孔径',
          '推荐位置'
        ],
      rows: [
          [
              '标准树脂',
              '低-中',
              '2.0 - 3.0 毫米',
              '底座或隐藏的平整表面'
            ],
          [
              '坚韧 / 柔性树脂',
              '中-高',
              '3.0 - 4.5 毫米',
              '拐角和接缝处以避免剥离'
            ],
          [
              '工程 / 可投射树脂',
              '极高',
              '4.5 - 6.0 毫米',
              '重力排液的直接通道位置'
            ]
        ]
    },
    {
      type: 'title',
      text: '何时应将壁厚增加到 1.5 毫米以上',
      level: 2
    },
    {
      type: 'tip',
      title: '尺寸与功能决定壁厚',
      html: '虽然 1.5 毫米是小型展示模型的可靠最小值，但对于较大的打印件，应增加壁厚。对于高度超过 150 毫米的零件，目标壁厚应为 2.0 毫米至 2.5 毫米。对于承重机械部件或使用柔性/弹性体树脂打印의 零件，壁厚应为 3.0 毫米或更厚，以防止在负载下结构崩溃。'
    },
    {
      type: 'title',
      text: '空心 SLA 打印技术词汇表',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA 掏空',
            definition: '将实心 3D 模型转换为具有特定壁厚的空心外壳的过程，以节省树脂和打印时间。'
          },
          {
            term: '吸盘效应',
            definition: '在打印过程中，当密闭的空心腔体脱离离型膜时产生的真空吸力。'
          },
          {
            term: '剥离力',
            definition: '当固化层与树脂槽底部发生分离时，模型和支撑所承受的机械剥离力。'
          },
          {
            term: '树脂滞留',
            definition: '由于表面张力，未固化的液态树脂滞留在内部拐角、支撑和纹理中的现象。'
          }
        ]
    },
    {
      type: 'title',
      text: '空心打印成功的总结清单',
      level: 2
    },
    {
      type: 'summary',
      title: '切片前 SLA 检查清单',
      items: [
          '确认掏空壁厚适合模型比例。',
          '确保在最低打印点处放置了至少两个排液孔。',
          '检查是否有缺乏排气通道的孤立内部空洞。',
          '规划使用异丙醇 (IPA) 进行内部清洗以及内部 UV LED 后固化。'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '美制',
    modelInputsLabel: '模型输入',
    volumeLabel: '模型总休积',
    heightLabel: '零件高度',
    complexityLabel: '几何复杂性',
    resinTypeLabel: '树脂类型',
    simpleLabel: '简单',
    moderateLabel: '中等',
    highLabel: '高',
    standardLabel: '标准',
    toughLabel: '刚性',
    engineeringLabel: '工程',
    resultsLabel: '镂空与排料结果',
    wallThicknessLabel: '推荐壁厚',
    drainDiameterLabel: '排料孔径',
    drainHoleCountLabel: '最少孔数',
    adjustedSavingLabel: '预计树脂节省量',
    adjustedSavingNote: '根据复杂性进行调整，以计入残留于内表面的液体树脂。',
    trapFactorLabel: '残留树脂系数',
    trapFactorHelp: '该系数随几何复杂性变化，以补偿高粘度树脂在盲腔中的表面张力。',
    theoreticalSavingLabel: '理论镂空体积',
    trappedAllowanceLabel: '残留树脂预留量',
    savingUnitLabel: '节省量',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: '注意：排料孔应放置在靠近成型平台一侧以及打印取向中树脂最易积聚的最低点附近。',
    vacuumWarning: '镂空体总是需要至少两个排孔，以打破打印时针对离型膜的真空效应。',
    trappedResinWarning: '复杂的几何体会将液体树脂困在内部；此计算对残留预留量进行了估算。',
    checklistTitle: '切片前检查清单',
    checklistItems: ['确保排料孔位于靠近成型平台的区域。', '验证壁厚不低于1.5 mm。', '确认模型中没有封闭的树脂孤岛或盲腔空洞。'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
