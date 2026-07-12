import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'e-steps-calibration-calculator',
  title: 'E steps 校准计算器和挤出机诊断助手',
  description: '根据测量的挤出测试计算校正后的挤出机 E-steps，并在 5% 以上的偏差隐藏机械问题之前标记它们。',
  ui: {
    unitSystemLabel: '单位',
    metricLabel: '公制',
    imperialLabel: '英制',
    inputGroupLabel: '挤出测试',
    currentEStepsLabel: '当前 E-steps',
    requestedLengthLabel: '请求挤出长度',
    actualLengthLabel: '实测挤出长度',
    newEStepsLabel: '新 E-steps',
    errorLabel: '检测到的误差',
    commandLabel: '控制台命令',
    copyCommandLabel: '复制 M92 命令',
    copiedLabel: '已复制',
    normalStatusLabel: '校准范围',
    criticalStatusLabel: '严重偏差',
    normalMessage: '测量的偏差在 5% 以内。仅在确认耗材路径清洁后应用该值，并重复测试一次。',
    criticalMessage: '严重警告：偏差超过 5%。很可能是机械故障：堵塞、挤出机打滑或张紧轮弹簧张力不正确。在应用这些新的 E-steps 之前，请检查硬件。',
    diagnosticTitle: '保存固件前的机械检查',
    diagnosticOne: '将喷嘴加热到实际打印温度，并在热端畅通的情况下缓慢挤出。',
    diagnosticTwo: '在信任该数字之前，检查驱动齿轮、张紧轮张力、耗材咬痕和料盘阻力。',
    diagnosticThree: '清洁或张力更改后重复 100 毫米测试；不要围绕打滑的挤出机调整固件。',
    referenceTitle: '决策规则',
    formulaLabel: '公式',
    formulaText: '当前 E-steps x 请求值 / 测量值',
    safeBandLabel: '0-5% 误差',
    safeBandText: '仅在一次可重复测试后应用。',
    criticalBandLabel: '> 5% 误差',
    criticalBandText: '首先检查堵塞、打滑、张力和阻力。',
    repeatTestLabel: 'M92 之后',
    repeatTestText: '在保存前再次运行相同的挤出测试。',
    mmUnit: '毫米',
    inchUnit: '英寸',
    stepsUnit: 'steps/mm',
    controlsAriaLabel: 'E-steps 校准输入',
    resultsAriaLabel: 'E-steps 校准结果',
  },
  seo: [
    { type: 'title', text: 'E-steps 校准实际测量的是什么', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps 定义挤出机固件每毫米耗材移动发送的步进电机步数。在 Marlin 中，该值通常使用 <code>M92 E...</code> 存储，而 Klipper 通常通过旋转距离表达相同的物理关系。测量很简单：命令一个已知的挤出长度，物理测量有多少耗材移动了，然后根据请求与实际移动的比率校正固件值。公式为 <code>新 E-steps = 当前 E-steps x 请求长度 / 实际长度</code>。',
    },
    {
      type: 'paragraph',
      html: '危险的部分在于解释。计算器可以从任何测量中产生一个数字，包括坏的测量。如果挤出机在研磨耗材，如果喷嘴部分堵塞，或者如果张紧轮弹簧太松，测量的挤出长度将会偏低。提高 E-steps 似乎可以修复 100 毫米测试，但它不能修复硬件。它迫使电机更强或更长时间地通过相同的故障推动，这可能会使实际打印不一致。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 毫米', label: '可重复挤出机测试的常见请求长度' },
        { value: '5%', label: '应优先进行硬件检查的诊断阈值' },
        { value: 'M92', label: '用于设置每单位步数的 Marlin 命令' },
        { value: '2 位小数', label: '复制的 E 轴命令使用的输出精度' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '不要围绕机械故障进行校准',
      html: '超过 5% 的偏差足够大，打印机可能由于非固件数学的原因而挤出不足或挤出过度。在使用 <code>M500</code> 保存新值或编辑 Klipper 配置之前，检查挤出机路径。',
    },
    { type: 'title', text: '如何执行干净的 100 毫米挤出测试', level: 2 },
    {
      type: 'paragraph',
      html: '可靠的 E-steps 测试从热喷嘴和稳定的耗材路径开始。将热端加热到耗材的正常打印温度，因为冷挤出保护的存在是有原因的，并且因为熔融塑料的背压会改变挤出机的负载。在挤出机入口上方已知距离处标记耗材，命令缓慢挤出 100 毫米，然后测量剩余距离以确定实际移动了多少耗材。',
    },
    {
      type: 'list',
      items: [
        '使用较慢的挤出进给速度，以便热端可以熔化材料而不会积聚异常压力。',
        '使用卡尺或细记号笔在耗材上做标记，而不是用眼睛估计。',
        '让料盘自由旋转，这样料盘阻力就不会看起来像 E-steps 误差。',
        '使用您通常打印的相同耗材直径和材料类型进行测试。',
        '在更改驱动齿轮张力、喷嘴状态或热端温度后重复测量。',
      ],
    },
    {
      type: 'table',
      headers: ['测量结果', '误差', '初步解读', '最佳后续行动'],
      rows: [
        ['98 到 102 毫米', '0 到 2%', '小的正常测量分散', '重复一次，必要时取平均值'],
        ['95 到 105 毫米', '2 到 5%', '固件校正可能是合理的', '检查路径，然后应用计算值'],
        ['低于 95 毫米', '超过 5%', '可能是打滑、堵塞、阻力或压力问题', '在固件之前检查机械部分'],
        ['超过 105 毫米', '超过 5%', '先前值错误或测量设置问题', '验证单位并重复测试'],
      ],
    },
    {
      type: 'tip',
      title: '使用一个干净的变量',
      html: '不要同时更改流量、挤出倍率、压力提前和 E-steps。E-steps 应描述电机到耗材的运动，而流量和挤出倍率则调整特定耗材和打印配置文件的切片器材料输出。',
    },
    { type: 'title', text: '为什么 5% 警告很重要', level: 2 },
    {
      type: 'paragraph',
      html: '5% 的挤出误差意味着 100 毫米命令产生了少于 95 毫米或多于 105 毫米的实际运动。这不是一个小四舍五入问题。对于典型的 1.75 毫米耗材，在短测试中 5 毫米的送料不足代表了可见的材料短缺。在实际打印中，它可能表现为薄弱的壁、稀疏的顶面、不一致的第一层和差的尺寸可靠性。更重要的是，这种规模的挤出不足通常有物理原因。',
    },
    {
      type: 'paragraph',
      html: '诊断助手标记该阈值是因为固件校正可以隐藏症状。如果滚花齿轮充满了塑料粉尘，电机可能只在快速移动时跳齿。如果喷嘴部分堵塞，慢速测试在大的校正后可能通过，但打印机在高流量填充期间仍会失败。如果张紧轮张力过高，耗材可能会变形并在下游卡住；如果张力过低，它可能会打滑。正确的修复是机械性的，而不是更大的 E 轴数字。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '健康的校准误差',
          description: '由先前的固件值、齿轮直径公差或测量噪声引起的小差异。',
          points: ['通常在 5% 以内', '在两次测试中可重复', '无咔嗒声或耗材粉尘', '校正保持适度'],
        },
        {
          title: '故障驱动的挤出误差',
          description: '由挤出机无法按命令移动耗材引起的大差异。',
          highlight: true,
          points: ['超过 5%', '在重复测试之间变化', '咔嗒声、研磨或咬痕', '在较高速度下通常更糟'],
        },
      ],
    },
    {
      type: 'summary',
      title: '在接受关键校正之前',
      items: [
        '检查喷嘴是否部分堵塞，如果挤出出现波浪或脉冲，则清洁或更换。',
        '刷洗驱动齿轮齿并清除耗材粉尘。',
        '设置张紧轮张力，使齿轮能够抓握而不会压扁耗材。',
        '检查料盘阻力、鲍登管就位和耗材路径摩擦。',
        '在更改固件之前再次执行相同的测量。',
      ],
    },
    { type: 'title', text: 'Marlin M92、M500 和 Klipper 旋转距离', level: 2 },
    {
      type: 'paragraph',
      html: '在 Marlin 风格的固件上，<code>M92 E...</code> 设置当前会话的挤出机每毫米步数。许多打印机之后需要 <code>M500</code> 将值保存到 EEPROM，否则设置可能在重启后消失。某些锁定或供应商修改的固件版本可能忽略 EEPROM 保存或需要更改固件源代码配置。如果打印机支持，始终在重启后使用 <code>M503</code> 验证该值。',
    },
    {
      type: 'paragraph',
      html: 'Klipper 在 printer.cfg 中通常使用 <code>rotation_distance</code> 而不是 E-steps。物理校准概念相同，但数值方向是相反的，因为旋转距离描述的是每次电机旋转移动多少耗材，而不是每毫米需要多少步。此工具输出 <code>M92</code> 命令，因为它旨在直接用于 Marlin 控制台和兼容的固件接口。Klipper 用户仍然可以在重新计算旋转距离之前将测量的误差用作诊断信号。',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: '固件发送的在挤出机轴上移动一毫米耗材所需的电机步数。' },
        { term: 'M92', definition: 'Marlin 固件用于设置一个或多个轴每单位步数的 G 代码命令。' },
        { term: 'M500', definition: '在打印机支持时将当前设置保存到 EEPROM 的 Marlin 命令。' },
        { term: '旋转距离', definition: '表示每次完整电机旋转的耗材行程的 Klipper 设置。' },
        { term: '挤出倍率', definition: '切片器级别的流量缩放，用于材料配置文件，与机器 E-steps 分开。' },
      ],
    },
    {
      type: 'card',
      title: '控制台命令工作流程',
      html: '发送复制的 <code>M92 E...</code> 命令，重复挤出测试，仅在测量长度可重复后保存该值。单个好的数字比两个一致的测量值证据更弱。',
    },
    { type: 'title', text: '看起来像坏 E-steps 的机械问题', level: 2 },
    {
      type: 'paragraph',
      html: '部分堵塞的喷嘴是最常见的陷阱。挤出机电机会在热端内压力积聚的同时旋转正确的量，导致驱动齿轮啃咬耗材而不是推进它。测量的挤出长度变短，公式提高 E-steps，并且下一次打印可能仍然挤出不足，因为喷嘴堵塞仍然存在。如果挤出的耗材剧烈波浪、脉冲、出来很细或在离开喷嘴时改变方向，请在校准前清洁热端。',
    },
    {
      type: 'paragraph',
      html: '挤出机打滑可能来自相反的张力误差。弹簧力太小会让齿轮在耗材上空转。弹簧力太大会使软耗材变形为椭圆形，增加鲍登管中的摩擦，或在热断裂入口处产生卡住的深咬痕。柔性耗材特别敏感。诊断阈值的存在是为了让用户停下来检查这些情况，然后再将牵引问题转换为固件数字。',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '测试期间的严重症状',
      html: '如果挤出机发出咔嗒声、出现耗材粉尘、电机异常发热、挤出呈脉冲状或在重复的 100 毫米测试之间测量长度变化几毫米，请停止并检查硬件。',
    },
    {
      type: 'proscons',
      title: '大误差后校正 E steps',
      items: [
        { pro: '当旧的固件值确实错误时，可以恢复精确的耗材进给。', con: '未经检查使用时，可能会隐藏打滑的驱动齿轮或堵塞的喷嘴。' },
        { pro: '简单的命令易于应用和重复。', con: '错误保存的值会影响每个切片器配置文件和每种材料。' },
        { pro: '在更改挤出机齿轮比或电机硬件后很有用。', con: '不能替代打印壁上的流量校准。' },
      ],
    },
    { type: 'title', text: 'E-steps 与流量校准', level: 2 },
    {
      type: 'paragraph',
      html: 'E-steps 校准属于机器层。它询问挤出机构是否移动了请求长度的原始耗材。流量校准属于打印配置文件层。它询问特定的耗材、温度、喷嘴、线宽和切片器策略是否产生预期的壁厚和表面质量。将两者混合会创建令人困惑的配置文件：打印机可能通过 100 毫米 E-steps 测试，但仍需要 0.96 的挤出倍率才能用于某个 PETG 品牌。',
    },
    {
      type: 'paragraph',
      html: '在更改挤出机硬件、电机步数、微步进、齿轮比或驱动齿轮直径后校准 E-steps。在更改耗材品牌、颜色、喷嘴尺寸、温度或切片器线宽后校准流量。压力提前、线性提前和回抽是独立的压力控制工具，应在基线挤出运动可靠后进行调谐。',
    },
    {
      type: 'table',
      headers: ['校准', '层', '何时更改', '不要用于修复'],
      rows: [
        ['E-steps', '固件或机器配置', '挤出机硬件或电机设置更改', '潮湿耗材、喷嘴堵塞、切片器流量'],
        ['流量倍率', '切片器材料配置文件', '耗材品牌、颜色、喷嘴、温度更改', '错误的齿轮比或打滑的挤出机'],
        ['压力提前', '固件动态', '挤出路径、速度、加速度、材料更改', '静态挤出不足'],
        ['回抽', '切片器移动行为', '拉丝、渗漏、移动伪影更改', '基线进给距离误差'],
      ],
    },
    {
      type: 'message',
      title: '支持技术员规则',
      html: '如果校准值发生剧烈变化，假设测量结果正在告诉你关于机器的信息。先检查，后计算，最后保存。',
    },
    { type: 'title', text: '可重复性和测量质量', level: 2 },
    {
      type: 'paragraph',
      html: '好的 E-steps 结果是可重复的。如果一个测试测量 94 毫米，下一个测量 99 毫米，再下一个测量 96 毫米，平均值不如分散度重要。变化的结果指向牵引力、温度、压力或测量技术。在保存新值之前，在任何机械更改后至少重复挤出两次。两个结果应该足够接近，这样新的固件数字就不会追逐噪声。',
    },
    {
      type: 'tip',
      title: '尽可能在挤出机上方测量',
      html: '在耗材进入挤出机之前做标记可以避免从喷嘴出来的弯曲耗材造成的混淆。在命令前后测量从固定参考点到标记的距离。',
    },
    {
      type: 'summary',
      title: '可靠的校准顺序',
      items: [
        '加热喷嘴并清除旧材料。',
        '用精确的参考距离标记耗材。',
        '缓慢挤出 100 毫米并测量实际运动。',
        '使用计算器并检查任何超过 5% 的误差。',
        '应用 <code>M92 E...</code>，重新测试，然后仅在可重复时保存。',
      ],
    },
  ],
  faq: [
    {
      question: '这个 E-steps 计算器使用什么公式？',
      answer: '它使用新 E-steps = 当前 E-steps x 请求挤出长度 / 实测挤出长度。',
    },
    {
      question: '为什么工具在超过 5% 的误差时发出警告？',
      answer: '超过 5% 的偏差足够大，表明存在机械问题，例如挤出机打滑、部分堵塞、料盘阻力或张紧轮张力不正确。在保存新的固件值之前，请检查硬件。',
    },
    {
      question: '我可以在 Klipper 中使用 M92 命令吗？',
      answer: '复制的 M92 命令适用于与 Marlin 兼容的固件。Klipper 通常使用 rotation_distance，但相同的测量误差仍然有助于诊断挤出机。',
    },
    {
      question: '我应该立即保存新值吗？',
      answer: '不。暂时应用它，重复挤出测试，仅在测量的运动可重复后保存。',
    },
    {
      question: 'E-steps 校准和流量校准是一样的吗？',
      answer: '不。E-steps 校准机器运动。流量或挤出倍率校准特定耗材和打印配置文件的切片器材料输出。',
    },
  ],
  bibliography,
  howTo: [
    { name: '输入当前 E-steps', text: '从固件或打印机设置中读取当前的挤出机每毫米步数。' },
    { name: '执行挤出测试', text: '在热端达到打印温度时，命令一个已知长度（通常为 100 毫米）。' },
    { name: '测量实际运动', text: '输入物理测量的耗材移动并查看检测到的误差。' },
    { name: '必要时检查', text: '如果误差超过 5%，在应用 M92 命令之前检查硬件。' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'E-steps 校准计算器和挤出机诊断助手',
      description: '计算校正后的 3D 打印机挤出机 E-steps 并标记具有机械风险的大偏差。',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '这个 E-steps 计算器使用什么公式？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '它使用新 E-steps = 当前 E-steps x 请求挤出长度 / 实测挤出长度。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '如何校准 3D 打印机挤出机 E-steps',
      step: [
        { '@type': 'HowToStep', text: '输入当前 E-steps 值。' },
        { '@type': 'HowToStep', text: '命令一个已知的挤出长度，通常为 100 毫米。' },
        { '@type': 'HowToStep', text: '测量实际的耗材移动并计算校正。' },
        { '@type': 'HowToStep', text: '如果检测到的误差超过 5%，首先检查硬件。' },
      ],
    },
  ],
};
