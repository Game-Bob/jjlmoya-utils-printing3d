import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { StepperDriverMicrosteppingCalculatorUI } from '../ui';

export const content: ToolLocaleContent<StepperDriverMicrosteppingCalculatorUI> = {
  slug: 'stepper-driver-microstepping-calculator',
  title: '步进电机每毫米步数与微步计算器',
  description: '计算 3D 打印机步进电机精确的每毫米步数（或每英寸步数）和理论机械分辨率。支持 TMC2209、TMC2208、皮带和丝杠。',
  ui: {
    title: '步进电机驱动器微步计算器',
    presetsLabel: '预设',
    presetBelt16: 'GT2 皮带 & 16T 同步轮 (X/Y)',
    presetBelt20: 'GT2 皮带 & 20T 同步轮 (X/Y)',
    presetZLead8: 'T8 丝杠导程 8mm (Z)',
    presetZLead2: 'T8 丝杠导程 2mm (Z)',
    unitSystemLabel: '单位制',
    metricLabel: '公制',
    imperialLabel: '英制',
    configLabel: '电机与驱动器配置',
    motorStepAngleLabel: '电机步进角',
    driverMicrosteppingLabel: '驱动器微步数',
    transmissionModeLabel: '传动类型',
    transmissionBelt: '皮带传动',
    transmissionLeadScrew: '丝杠 / 螺纹杆',
    beltPitchLabel: '皮带齿距',
    pulleyTeethLabel: '同步轮齿数',
    leadScrewPitchLabel: '丝杠导程（每转移动距离）',
    resultsLabel: '计算结果',
    stepsPerUnitLabel: '固件配置（步数）',
    mechanicalResolutionLabel: '理论分辨率',
    stepsPerUnitUnitMetric: '步/mm',
    stepsPerUnitUnitImperial: '步/英寸',
    mechanicalResolutionUnitMetric: '微米/步',
    mechanicalResolutionUnitImperial: '千分之一英寸/步',
    formulaLabel: '数学公式',
    formulaStepsPerRevolution: '步/转 = 360 / 步进角',
    formulaMicrostepsPerRev: '微步/转 = 步/转 × 微步数',
    formulaDistancePerRev: '距离/转 = 齿数 × 齿距（或丝杠导程）',
    formulaStepsPerUnit: '步/单位 = 微步/转 / 距离/转',
    formulaResolution: '分辨率 = 距离/转 / 微步/转',
    explainResolutionLabel: '这意味着什么？',
    explainResolutionText: '这代表了当驱动器命令一个微步时，3D 打印机轴所能实现的最小理论线性运动。分辨率值越低，表示机械定位精度越高。',
    copyButton: '复制固件命令',
    copiedButton: '已复制！',
    stepAngleUnit: '°',
    microstepsUnit: '倍',
    pitchUnitMetric: 'mm',
    pitchUnitImperial: 'in',
    teethUnit: '齿',
    stepAngle18: '1.8°（200 步/转）',
    stepAngle09: '0.9°（400 步/转）',
    stepAngle75: '7.5°（48 步/转）',
    stepAngle15: '15°（24 步/转）',
    microstep1: '1 倍（整步）',
    microstep2: '2 倍',
    microstep4: '4 倍',
    microstep8: '8 倍',
    microstep16: '16 倍',
    microstep32: '32 倍',
    microstep64: '64 倍',
    microstep128: '128 倍',
    microstep256: '256 倍',
  },
  seo: [
    {
      type: 'title',
      text: '步进电机校准与固件中每毫米步数配置指南',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在消费级和专业级 3D 打印机中，精确的运动控制依赖于步进电机、步进驱动器和线性传动机构。步进电机不是连续旋转的，而是将一整圈旋转划分为固定数量的离散步。为了让 3D 打印机控制板将打印头或打印平台精确移动到特定距离，固件必须精确知道多少电机步数（包括微步）对应一单位线性距离（毫米或英寸）。这个值被称为每毫米步数或每英寸步数，是存储在 Marlin、Klipper 或 RepRapFirmware 等固件配置中的关键设置。',
    },
    {
      type: 'paragraph',
      html: '如果此配置哪怕有轻微错误，3D 打印机的物理运动都将与切片软件生成的数字指令不匹配。这种不匹配会导致打印物体的尺寸不准确，零件比预期更大或更小、孔位错位以及多零件装配无法配合。理解物理组件、驱动器特性和传动比，可以让操作员计算数学上完美的值，而不是依赖那些引入机械误差的试错校准方法。',
    },
    {
      type: 'title',
      text: '步进电机规格与机械特性对比',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3D 打印中最常用的步进电机是 NEMA 17 外形尺寸的混合式步进电机。这些电机通常有两种步进角规格：每步 1.8 度和每步 0.9 度。1.8 度步进电机需要 200 个整步才能完成一次 360 度完整旋转。0.9 度步进电机需要 400 个整步才能完成同样的旋转。在这两种规格之间的选择会影响打印系统的定位精度、最大扭矩和运行噪音。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '1.8 度步进电机',
          description: '大多数商用 3D 打印机的标准电机选项。在较高速度下提供稳定扭矩，且经济实惠。',
          points: [
            '每转 200 个整步',
            '高速时扭矩保持能力更好',
            '较低的电感要求',
            '足以满足一般 FDM 应用的精度'
          ]
        },
        {
          title: '0.9 度步进电机',
          description: '高精度电机选项，适用于精细细节打印机和高分辨率挤出机系统。',
          points: [
            '每转 400 个整步',
            '微步前的机械分辨率翻倍',
            '减少定位误差，降低谐振振动',
            '高速时反电动势更高，降低了扭矩极限'
          ]
        }
      ],
      columns: 2,
    },
    {
      type: 'paragraph',
      html: '0.9 度电机虽然提供了双倍的物理定位能力，但需要从主板微控制器获取两倍的步进脉冲才能达到相同的转速。在使用老旧 8 位微控制器的高速打印平台上，这可能会使处理器队列饱和，导致打印卡顿或速度受限。在现代 32 位控制器上，这一限制很少成为问题，因此在表面光洁度要求高的情况下，0.9 度电机是 X 轴和 Y 轴的绝佳升级选择。',
    },
    {
      type: 'title',
      text: '步进电机与驱动器术语表',
      level: 2,
    },
    {
      type: 'glossary',
      items: [
        {
          term: '步进角',
          definition: '单次整步线圈励磁序列发生时步进电机轴的角位移，通常为 1.8 度或 0.9 度。',
        },
        {
          term: '微步',
          definition: '由驱动器控制的一种方法，通过在电机相之间平衡电流，将单个整步划分为更小的子步，使运动更平滑并减少振动。',
        },
        {
          term: '皮带齿距',
          definition: '同步带相邻两齿中心之间的距离。3D 打印中使用的 GT2 皮带通常为 2.0 毫米。',
        },
        {
          term: '丝杠导程',
          definition: '在丝杠轴完成一整圈 360 度旋转的过程中，丝杠螺母沿丝杠移动的线性距离。',
        },
        {
          term: '保持扭矩',
          definition: '当额定电流施加到线圈时，电机可以对静止轴施加的最大扭矩量。',
        },
        {
          term: '反电动势（Back-EMF）',
          definition: '电机线圈在磁场内旋转产生的电压，与电源电压相反，限制了最高速度和扭矩。',
        }
      ],
    },
    {
      type: 'title',
      text: '同步带的每毫米步数计算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '对于笛卡尔式、CoreXY 和 Delta 3D 打印机的水平运动轴（通常是 X 和 Y），使用同步带来将步进电机的旋转运动转化为线性运动。机械计算完全取决于皮带齿距和安装在电机轴上的主动轮齿数。皮带齿形必须与同步轮齿形匹配，以防止回差和打滑。',
    },
    {
      type: 'table',
      headers: ['同步轮规格', '皮带类型', '皮带齿距', '步/转（1.8°，16 倍）', '每毫米步数（公制）', '每英寸步数（英制）'],
      rows: [
        ['16 齿', 'GT2', '2.0 mm', '3200', '100.00 步/mm', '2540.00 步/in'],
        ['20 齿', 'GT2', '2.0 mm', '3200', '80.00 步/mm', '2032.00 步/in'],
        ['32 齿', 'GT2', '2.0 mm', '3200', '50.00 步/mm', '1270.00 步/in'],
        ['20 齿', 'GT3', '3.0 mm', '3200', '53.33 步/mm', '1354.67 步/in'],
        ['16 齿 (0.9°)', 'GT2', '2.0 mm', '6400', '200.00 步/mm', '5080.00 步/in'],
        ['20 齿 (0.9°)', 'GT2', '2.0 mm', '6400', '160.00 步/mm', '4064.00 步/in']
      ],
    },
    {
      type: 'tip',
      title: '同步轮选择的实用设计建议',
      html: '选择 16 齿同步轮而不是 20 齿同步轮，可将机械分辨率提高 25%，并增加施加在滑架上的线性力。然而，较小的同步轮会迫使同步带以更小的半径弯曲，这可能会随着时间的推移增加皮带磨损，并引入更高的振动频率。对于标准构建，20 齿同步轮在皮带使用寿命和分辨率之间代表了一种平衡的折衷方案。',
    },
    {
      type: 'title',
      text: '微步的现实：扭矩损失与插值解决方案',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '许多操作员认为将驱动器的微步分辨高到 64、128 甚至 256 等数值，将无限提升 3D 打印机的精度。这是一个常见的误解。实际上，随着微步划分的增加，微步之间的增量扭矩会急剧下降。电流被分为正弦和余弦曲线，以将电机轴定位在物理磁极之间。如果轴上的外部摩擦或负载超过一个微步的增量扭矩，电机轴将无法移动，直到多个微步脉冲累积起来。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '理论微步与实际物理扭矩限制',
      html: '在 16 微步时，每微步的增量扭矩约为电机保持扭矩的 9.8%。在 256 微步时，增量扭矩下降至仅保持扭矩的 0.6%。任何微小的机械卡顿、皮带张力失衡或滑架摩擦力都会轻易阻止 1/256 步的物理运动，这意味着高原生微步并不能保证真实的定位精度。',
    },
    {
      type: 'card',
      title: 'Trinamic 驱动器插值功能',
      html: 'TMC2208、TMC2209 和 TMC5160 等现代步进驱动器解决了这个问题：它们以可靠的 16 微步分辨率接收步进命令，并在执行线圈电流变化之前，在内部将这些步进插值到 256 微步。这提供了 256 微步的平稳静音运行，同时保持了 16 微步配置的可靠保持扭矩和较低的控制器处理开销。在固件中，请将配置保持在 16 微步，让驱动器处理内部插值。',
    },
    {
      type: 'title',
      text: 'Z 轴丝杠和螺纹杆的每毫米步数计算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大多数桌面 3D 打印机的垂直 Z 轴使用丝杠或螺纹杆。丝杠专为动力传输而设计，具有精密磨削的螺纹轮廓，可最大程度减少回程间隙。在计算丝杠的每毫米步数时，螺纹螺距不能与导程混淆。导程是丝杠螺母在丝杠完全旋转 360 度期间实际移动的线性距离。导程通过螺纹螺距乘以螺纹头数计算得出。',
    },
    {
      type: 'list',
      items: [
        '单头丝杠：螺距 2mm，头数 1。导程为每转 2mm。',
        '双头丝杠：螺距 2mm，头数 2。导程为每转 4mm。',
        '四头丝杠（常见的 T8x8）：螺距 2mm，头数 4。导程为每转 8mm。',
        '标准公制螺纹杆（如 M8）：单头。导程等于标准公制螺距，即每转 1.25mm。'
      ],
    },
    {
      type: 'paragraph',
      html: '由于丝杠比皮带驱动系统具有机械优势，它们能达到更高的每毫米步数值，这意味着更小的机械分辨率值。这种高精度对于 Z 轴至关重要，因为层高通常以 0.1mm 到 0.3mm 的增量进行打印。较高的每毫米步数值使打印机能够建立一致的层高，而不会出现定位错误。',
    },
    {
      type: 'title',
      text: '驱动器与电机集成的关键步骤总结',
      level: 2,
    },
    {
      type: 'summary',
      title: '配置打印机固件的可执行步骤',
      items: [
        '从制造商数据表中确认电机步进角（通常为 1.8 度或 0.9 度）。',
        '确定驱动器的微步设置（通过物理跳线或软件 UART 命令配置，推荐 16）。',
        '测量或查阅皮带齿距，并数出皮带轴的同步轮齿数。',
        '确认 Z 轴的丝杠导程（螺距乘以头数）。',
        '将这些参数输入我们的计算器，以获得精确的每毫米步数或每英寸步数配置值。',
        '将计算出的值写入固件配置文件，或通过 M92 等终端命令进行保存。'
      ],
    },
  ],
  faq: [
    {
      question: '为什么我计算出的每毫米步数与手工校准结果不同？',
      answer: '计算出的每毫米步数基于物理组件几何结构，在数学上是精确的。如果手工校准显示不同的值，通常是因为操作员在使用卡尺测量耗材或轴行程时，机械间隙、皮带拉伸或挤出机打滑引入了误差。您应该始终对运动轴使用数学计算值，并解决潜在的机械问题，而不是调整步数。',
    },
    {
      question: '如果在固件中将微步值设置得太高会怎样？',
      answer: '在固件中将微步设置为 64、128 或 256 会增加对控制板脉冲频率的要求。如果主板无法足够快地产生步进脉冲，打印机可能会出现死机、卡顿或限制最大移动速度。最好在固件中使用 16 微步，同时启用驱动器级插值。',
    },
    {
      question: '如何更改 3D 打印机上每毫米步数的设置？',
      answer: '您可以使用 M92 命令临时更改这些值，后跟轴字母和值（例如 M92 X80.00 Y80.00 Z400.00）。要使这些值永久生效，请发送 M500 命令将其保存到 EEPROM，或者编辑 Marlin 固件中的 Configuration.h 文件并重新刷写，或者编辑 Klipper 中的 printer.cfg 文件。',
    },
    {
      question: '皮带齿距和同步轮齿数有什么区别？',
      answer: '皮带齿距是皮带上相邻两齿之间的距离，从中心到中心测量。同步轮齿数是安装在电机轴上的齿轮上物理齿的总数。将齿数乘以齿距就能得到电机每转的总线性移动距离。',
    },
    {
      question: '我可以对不同轴使用不同的微步值吗？',
      answer: '是的，您可以为 X、Y、Z 和 E 轴配置不同的微步值。例如，根据挤出机组件的齿轮比，通常 X 和 Y 使用 16 微步、Z 使用 16 微步挤出机使用 16 或 32 微步。',
    }
  ],
  bibliography,
  howTo: [
    {
      name: '确定电机和驱动器规格',
      text: '找到您的电机步进角（通常为 1.8 度或 0.9 度）和驱动器微步值（16 是标准值）。',
    },
    {
      name: '确定传动详细信息',
      text: '在皮带传动（指定皮带齿距和同步轮齿数）和丝杠（指定丝杠导程）之间进行选择。',
    },
    {
      name: '配置固件设置',
      text: '输入数值，选择您偏好的单位制，然后复制生成的步进配置命令到您的打印机配置中。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '为什么我计算出的每毫米步数与手工校准结果不同？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '计算出的每毫米步数基于物理组件几何结构，在数学上是精确的。手工校准通常会因为皮带张力或耗材压缩而引入误差。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '步进电机驱动器微步计算器',
      description: '计算 3D 打印机电机和驱动器的步进配置值与物理分辨率限制。',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何计算步进电机每毫米步数',
      step: [
        {
          '@type': 'HowToStep',
          text: '确定电机和驱动器规格',
        },
        {
          '@type': 'HowToStep',
          text: '确定传动详细信息',
        },
        {
          '@type': 'HowToStep',
          text: '配置固件设置',
        },
      ],
    },
  ],
};