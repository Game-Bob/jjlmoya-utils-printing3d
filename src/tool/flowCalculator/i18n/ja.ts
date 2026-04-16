import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'volumetric-flow-calculator',
  title: 'ボリューメトリック・フロー（体積流量）：3Dプリンターの真の速度限界を理解する',
  description: '3Dプリンターの最大体積流量を計算します。ホットエンドのハードウェア上の真の限界を理解しましょう。',
  ui: {
    title: '体積流量（フロー）計算機',
    autoAdjust: '120% 自動調整',
    configLabel: '設定',
    nozzleLabel: 'ノズル径',
    lineWidthLabel: 'ライン幅',
    layerHeightLabel: 'レイヤー高',
    speedLabel: '速度',
    temperatureLabel: '温度',
    materialLabel: '材料',
    hotendLimitLabel: 'ホットエンド限界',
    hotendTooltip: '材料や温度を考慮しない、ハードウェア自体のベースとなる溶解能力です。',
    presetEnder: '標準 MK8/V6。融解ゾーンが短いタイプ。',
    presetBambu: '高速セラミックホットエンド。',
    presetVolcano: '21mmのエクストラロング融解ゾーン。',
    presetHF: 'カスタムの超高性能エクストルーダー。',
    baseLimitLabel: 'ベース限界',
    resetButton: '数値をリセット',
    volumetricFlowLabel: '実効体積流量',
    maxSpeedLabel: '最大送り速度',
    statusLabel: 'ステータス',
    safeStatus: '安全',
    stratifiedLabel: '層別パフォーマンス',
    chartHeightLabel: 'レイヤー高 (MM)',
    chartSpeedLabel: '速度限界 (MM/S)',
    chartSafeLabel: '安全圏',
    copyButton: '実効限界値をコピー',
  },
  seo: [
    {
      type: 'title',
      text: 'ボリューメトリック・フロー（体積流量）：3Dプリンターの真の速度限界を理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FDM方式の3Dプリントにおいて、<strong>ボリューメトリック・フロー（体積流量）</strong>は、ハードウェアの限界を超えずにどれだけ速くプリントできるかを決定する重要な要因です。モーターの速度がどれほど速くても、最終的にはホットエンドがプラスチックを安定して溶かせるかどうかが重要になります。',
    },
    {
      type: 'title',
      text: '体積流量（mm³/s）とは何か？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'これは、1秒間に押し出されるフィラメントの総体積のことです。プリント速度、ライン幅、レイヤー高の3つの変数を掛け合わせることで計算されます。ヒーターブロックが溶かせる量以上のプラスチックを押し出そうとすると、恐ろしい<strong>押し出し不足（アンダーエクストリュージョン）</strong>が発生します。',
    },
  ],
  faqTitle: 'よくある質問',
  bibliographyTitle: '参考文献',
  faq: [
    {
      question: '自分のプリンターの最大流量はどれくらいですか？',
      answer: 'ホットエンドの種類に大きく依存します。標準的なホットエンド（V6タイプ）の融解能力は通常10〜12 mm³/sです。VolcanoやRevo High Flowのようなハイフローモデルでは30〜35 mm³/sに達します。',
    },
    {
      question: 'なぜPETGはPLAよりもフローが遅いのですか？',
      answer: 'PETGは溶けた時の粘度が非常に高いためです。これはノズルを通過する際の抵抗が大きくなることを意味し、通常、同じ温度での実効フロー限界はPLAより約15%低くなります。',
    },
    {
      question: 'ライン幅はフローにどのように影響しますか？',
      answer: 'ライン幅はレイヤー高と並んで、フローに直接的な影響を与える要素です。同じ速度でライン幅を0.4mmから0.6mmに変更すると、エクストルーダーに対して50%多いフローを要求することになります。',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: フローレートと速度限界',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: キャリブレーション',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: フローレート・キャリブレーション',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: 'ハードウェアを設定',
      text: 'ノズル径を選択し、一般的なホットエンドのプリセットを選びます。',
    },
    {
      name: 'パラメータを調整',
      text: 'ライン幅、レイヤー高、プリント速度のスライダーを動かします。',
    },
    {
      name: '値をコピー',
      text: '最大フロー値をコピーして、スライサー設定に使用します。',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '自分のプリンターの最大流量はどれくらいですか？',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ホットエンドに依存しますが、標準的なホットエンドは通常10〜12 mm³/sの融解能力があります。',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '体積流量計算機',
      description: '3Dプリンターの最大体積流量を計算します。',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '体積流量の計算方法',
      step: [
        {
          '@type': 'HowToStep',
          text: 'ハードウェアを設定',
        },
        {
          '@type': 'HowToStep',
          text: 'パラメータを調整',
        },
      ],
    },
  ],
};
