import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-resin-curing-calculator',
  title: 'UVレジン二次硬化時間計算機',
  description: 'レジン3Dプリントの正確な硬化時間を決定します。ランプ出力（ワット）、レジンの種類、距離に基づいたプロ向けのテクニカルガイドです。',
  ui: {
    title: 'UVレジン硬化計算機',
    configLabel: '設定',
    brandLabel: '機器ブランド',
    powerLabel: 'ランプ出力 (W)',
    powerUnit: 'W',
    distanceLabel: 'LEDとの距離 (cm)',
    distanceUnit: 'cm',
    materialLabel: '材料タイプ',
    weightLabel: '推定重量 (g)',
    weightUnit: 'g',
    ipaCheckbox: 'イソプロピルアルコールで洗浄済みですか？',
    safetyLabel: 'UV安全性',
    safetySunglasses: '認定済UV保護メガネ',
    safetyGloves: 'ニトリル手袋',
    sunglassesTooltip: '405nmの光を直接浴びると、網膜に永久的な損傷を与える可能性があります。',
    glovesTooltip: '半硬化状態のレジンは強い刺激性があります。常に保護具を着用してください。',
    wavelength: '波長',
    wavelengthValue: '405 nm',
    statusLabel: 'ステータス',
    modeLabel: 'モード',
    modeValue: 'インダストリアル',
    curingTime: 'm:s',
    startButton: '硬化サイクルの開始/停止',
    intensityChart: 'UV強度（線量）',
    nearLabel: '近距離 (2cm)',
    farLabel: '遠距離 (30cm)',
    theoreticalLabel: '理論線量',
    yourConfigLabel: '現在の設定',
    evaporateWarning: '白い斑点を防ぐため、アルコールを蒸発させてください（最低10分）。',
    safeDistance: '均一な硬化のための安全な距離が検出されました。',
    riskDistance: '熱変形の危険性（臨界距離）。',
    optimeStatus: '最適',
    longStatus: '長い',
    fastStatus: '速い',
  },
  seo: [
    {
      type: 'title',
      text: 'UVレジン硬化時間計算機：プロフェッショナルガイド',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'レジン3Dプリント（SLA、DLP、またはLCD）において、<strong>UV二次硬化は不可欠な最終工程</strong>です。これにより、柔らかくベタベタした造形物が、規定の機械的特性を備えた堅牢な物体へと変化します。適切な二次硬化を行わないと、プリント品は構造的に弱く、毒性があり、不安定なままになります。',
    },
    {
      type: 'title',
      text: 'UVレジンの硬化とは？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'レジン3Dプリンターでプリントが終了した直後の状態を、技術者は<strong>「グリーンステート」</strong>と呼びます。最終的な形は成していますが、ポリマーの分子鎖は完全には架橋されていません。UV硬化によってこの架橋を完了させ、ベタつきを取り除き、硬度、強度、熱安定性を向上させます。',
    },
  ],
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
  faq: [
    {
      question: 'UVレジンの硬化にはどのくらいの時間がかかりますか？',
      answer: 'ランプの出力に依存します。40Wの硬化機であれば、中サイズの造形物で通常2〜4分ですが、低出力のDIYランプでは最大10分かかる場合があります。',
    },
    {
      question: 'ネイル用のランプでレジンを硬化できますか？',
      answer: 'そのランプが405nmの波長に対応していれば可能ですが、これらのランプは通常出力が低く（6W〜12W）、硬化時間が大幅に長くなり、表面の硬化が不十分になる可能性があります。',
    },
    {
      question: '水洗硬化（ウォーターキュアリング）は必要ですか？',
      answer: '必須ではありませんが、強く推奨（ウォーターキュアリング）されます。水は、表面の重合を妨げる酸素との接触を遮断するため、ベタつきの少ない仕上がりになります。',
    },
    {
      question: 'レジンが正しく硬化されたかどうかは、どうすればわかりますか？',
      answer: '触れた時に完全に乾いていて（ベタつかない）、表面の「濡れたような」光沢がなくなり、わずかに色が変化し、液体レジンの強い臭いがなくなっていれば硬化完了です。',
    },
    {
      question: '透明レジンが黄色くなってしまうのはなぜですか？',
      answer: '過剰な硬化、または過度の温度上昇による影響です。当計算機の「透明」設定を使用して時間を短縮し、LEDから少なくとも5cm以上離して配置してください。',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - レジンプリントのポストキュア',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: UV硬化の科学',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: '機器を設定する',
      text: 'お使いのUV硬化機のブランドを選択し、ワット（W）単位で出力を調整します。',
    },
    {
      name: '物理パラメータを調整する',
      text: 'LEDと造形物の距離、レジンの種類、推定重量を指定します。',
    },
    {
      name: '硬化を開始する',
      text: '算出された時間をガイドとして使用し、工程中の造形物の状態を監視してください。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'UVレジンの硬化にはどのくらいの時間がかかりますか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '40Wの硬化機であれば中サイズの造形物で通常2〜4分ですが、低出力のランプでは最大10分かかる場合があります。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UVレジン二次硬化時間計算機',
      description: 'ランプ出力、距離、材料タイプに基づいて、レジン3Dプリントの正確な硬化時間を決定します。',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'UVレジン硬化時間の計算方法',
      step: [
        {
          '@type': 'HowToStep',
          text: '機器を設定する',
        },
        {
          '@type': 'HowToStep',
          text: '物理パラメータを調整する',
        },
      ],
    },
  ],
};
