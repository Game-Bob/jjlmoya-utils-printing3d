import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'sla-resin-hollowing-drainage-calculator';
const title = 'SLAレジン中空化・排出口計算ツール';
const description = '中空のSLAおよびDLPレジンプリント向けに、安全な最小肉厚、排出口径、最小ベント数、形状の複雑さを考慮したレジン節約量を算出します。';

const faqData = [
  { question: 'なぜこの計算ツールは常に少なくとも2つの排出口を推奨するのですか？', answer: '中空レジンプリントでは、液状レジンが流出するための経路と、空気が入るための経路がそれぞれ必要です。また、2つの開口部を設けることで、剥離時のリリースフィルムに対する吸盤効果を防ぐことができます。' },
  { question: 'なぜ実際のレジン節約量は理論上の中空ボリュームよりも少なくなるのですか？', answer: '液状レジンは内壁、リブ、角、サポート、小さなポケットなどに残留します。このツールでは、形状の複雑さに応じて、理論上の中空ボリュームから5％、10％、または15％を差し引いて計算します。' },
  { question: '壁厚は1.5 mmあれば常に十分ですか？', answer: 'いいえ。1.5 mmは多くのデスクトップ型レジンプリントにおける最小限の安全基準です。背の高い部品、重量のある部品、機械的負荷がかかる場合、高温環境、または強めの研磨を行う場合は、より厚い壁やテストピースが必要になります。' },
  { question: '排出口はどこに配置すべきですか？', answer: '排出口は、プリント方向においてビルドプレート側にできるだけ近く、最もレジンが溜まりやすい低い位置に配置してください。その後、スライサー上で密閉されたポケットが残っていないか確認します。' },
];

const howToData = [
  { name: 'モデルのボリュームと高さを入力する', text: 'サポートと配置方向を設定した後のスライサー上のボリュームを使用し、プリント配置方向におけるパーツの高さを入力します。' },
  { name: '形状の複雑さを選択する', text: '「単純」「標準」「複雑」から選択し、トラップされるレジン量を理論上の中空節約量から差し引きます。' },
  { name: 'レジンの種類を選択する', text: 'スタンダード、タフ、またはエンジニアリングレジンを選択します。粘度の高いレジンほど、推奨される排出口径が大きくなります。' },
  { name: '推奨される壁厚と排出口を確認する', text: '最終ファイルをスライスする前に、推奨される壁厚、排出口径、最小穴数、およびチェックリストを確認します。' },
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
  inLanguage: 'ja',
};

const seoData = [
    {
      type: 'title',
      text: 'SLAレジン中空化・排液計算ツールは何をするものですか？',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'このツールは、SLA、DLP、およびLCDレジン3Dプリントにおける最も重要な課題の1つである、中空モデルの最適化を解決します。中空化せずにレジンパーツをプリントすると、コストが高くなり、重量が増し、プリントプロセス中の剥離力（リリース力）が増加します。モデルを中空化することで材料の使用量は削減できますが、適切な排液を行わずに中空の空洞を作ると、未硬化のレジンが内部に閉じ込められ、真空力によるプリント失敗につながります。この計算ツールは、理想的な肉厚を計算し、適切な排液口の直径と数を提案し、印刷されたパーツの内壁にどうしても付着してしまう液状レジンの影響を考慮して、実際のレジン節約量を推定します。'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: 'デスクトップSLA向けの推奨最小肉厚'
          },
          {
            value: '2 個',
            label: '真空を破壊するために必要な最小限の空気穴の数'
          },
          {
            value: '10-15%',
            label: '内壁への付着によるレジン体積の目減り率'
          },
          {
            value: '30-70%',
            label: '中空化によって達成される平均的な総重量削減率'
          }
        ]
    },
    {
      type: 'title',
      text: '肉厚がレジン節約に与える影響について',
      level: 2
    },
    {
      type: 'paragraph',
      html: '肉厚は、レジンの節約量を決定する最も主要な変数です。壁が厚いほど構造的な強度は増しますが、より多くのレジンを消費するため、中空化の効率は低下します。逆に、壁が薄すぎると壊れやすくなり、二次硬化中に反りが発生しやすくなります。さらに、プリンターがFEPフィルムから各層を剥離する際の機械的な引っ張り力に耐えられない可能性もあります。目標は、モデルの形状と機能性を維持しながら、材料の節約を最大化できる「スイートスポット」を見つけることです。'
    },
    {
      type: 'proscons',
      title: 'レジンプリント中空化のメリットとデメリット',
      items: [
          {
            pro: '材料コストとプリント全体の重量を大幅に削減できる',
            con: '内部の空洞を洗浄・硬化させるための後処理が必要'
          },
          {
            pro: 'レイヤーあたりの表面積が小さくなり、FEPフィルムへの剥離力が低下する',
            con: '穴の配置を誤ると、モデルの外観デザインを損なう可能性がある'
          },
          {
            pro: '二次硬化時の熱応力や反りを軽減できる',
            con: '内部に残った液状レジンにより、後からパーツにひびが入るリスクがある'
          }
        ]
    },
    {
      type: 'title',
      text: '中空レジンプリントにおけるサクションカップ（吸盤）効果の理解',
      level: 2
    },
    {
      type: 'paragraph',
      html: '中空モデルをプリントする際、レジン槽に浸かることで密閉された空間が形成されます。この空間に通気孔がないと、プラットフォームが上昇するたびに、硬化層とリリースフィルムの間に強い部分真空（サクションカップ効果）が発生します。この力がプリントを引っ張り、層の剥がれ、積層痕、サポートの破損、あるいはモデル全体がビルドプレートから脱落する原因になります。通気孔を追加することで空気が入り、圧力差が中和されてスムーズな剥離サイクルが保証されます。'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '密閉された中空空間의 위험성',
      html: '中空空間を完全に密閉したままにしないでください。印刷されたパーツの内部に閉じ込められた液状レジンは、時間の経過とともに硬化した壁を徐々に劣化させ、最終的にはモデルのひび割れ、有害なレジンの漏れ、あるいは完全な崩壊を引き起こします。内部を洗浄し、内部UV光源で硬化させるために、必ず少なくとも2つの穴を設けてください。'
    },
    {
      type: 'title',
      text: '排液口の配置に関するベストプラクティス',
      level: 2
    },
    {
      type: 'list',
      items: [
          'プリントの初期段階でレジンが逃げられるように、排液口はビルドプレートにできるだけ近い位置に配置します。',
          '必ず少なくとも2つの穴を使用してください：1つは液状レジンを排出するため、もう1つは空気を取り入れるためです。',
          '意匠性を保つため、穴はベースの底面やジョイントの裏側など、目立たない面に配置します。',
          '独立した内部の空洞やポケットのそれぞれに、専用の排液口が設けられていることを確認してください。'
        ]
    },
    {
      type: 'title',
      text: '幾何学的複雑さに応じた計算調整について',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: '単純な形状',
            description: '詳細の少ないモデル、球体、ブロック。平らな内壁に付着するレジンは最小限（約5%）です。'
          },
          {
            title: '標準的な形状',
            description: 'キャラクターモデルや標準的な機械部品。内部のサポートや曲線部により、中程度のレジンが付着します（約10%）。',
            highlight: true
          },
          {
            title: '高い複雑さ',
            description: '非常に詳細なフィギュア、ラティス構造、または複雑な内部チャネル。毛細管現象により、かなりのレジンが付着します（約15%以上）。'
          }
        ]
    },
    {
      type: 'title',
      text: 'レジン粘度と排液口サイズの重要性',
      level: 2
    },
    {
      type: 'table',
      headers: [
          'レジンクラス',
          '粘度レベル',
          '最小穴径',
          '推奨配置'
        ],
      rows: [
          [
              'スタンダードレジン',
              '低〜中',
              '2.0 - 3.0 mm',
              'ベースまたは隠れた平らな面'
            ],
          [
              'タフ / フレキシブル',
              '中〜高',
              '3.0 - 4.5 mm',
              '剥がれを防ぐための角やジョイント部'
            ],
          [
              'エンジニアリング / キャスタブル',
              '極めて高',
              '4.5 - 6.0 mm',
              '重力排液をスムーズにするための直接視認できる位置'
            ]
        ]
    },
    {
      type: 'title',
      text: '肉厚を1.5 mmより厚くすべきケース',
      level: 2
    },
    {
      type: 'tip',
      title: 'モデルのスケールと機能が肉厚を決定します',
      html: '小さなディスプレイ用フィギュアであれば1.5 mmの肉厚で十分ですが、プリントサイズが大きくなるにつれて肉厚を増やす必要があります。高さが150mmを超えるパーツの場合は、2.0mmから2.5mmの肉厚を目安にしてください。荷重がかかる機械部品や、フレキシブル/エラストマーレジンで印刷されるパーツの場合、荷重による構造の崩壊を防ぐために、肉厚は3.0mm以上にする必要があります。'
    },
    {
      type: 'title',
      text: '中空SLAプリントの技術用語集',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA中空化',
            definition: 'レジンとプリント時間を節約するために、ソリッドな3Dモデルを指定した肉厚の中空シェルに変換するプロセス。'
          },
          {
            term: 'サクションカップ効果',
            definition: 'プリント中に密閉された中空の空洞がリリースフィルムから引き離されるときに発生する真空力。'
          },
          {
            term: '剥離力',
            definition: '硬化層が槽の底から剥がされるときに、モデルやサポートが受ける機械的な引っ張り力。'
          },
          {
            term: 'レジン溜まり',
            definition: '表面張力により、未硬化の液状レジンが内部のコーナー、サポート、凹凸に付着して残る現象。'
          }
        ]
    },
    {
      type: 'title',
      text: '中空プリントを成功させるためのチェックリスト',
      level: 2
    },
    {
      type: 'summary',
      title: 'スライス前のSLAチェックリスト',
      items: [
          '中空化の肉厚がモデルのスケールに対して適切であることを確認する。',
          'プリント時に最も低い位置に、少なくとも2つの排液口が配置されていることを確認する。',
          '空気の通り道がない、独立した内部の密閉空間がないか確認する。',
          'IPAによる内部洗浄と、内部UV LEDによる二次硬化の計画を立てる。'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: '単位',
    metricLabel: 'メトリック',
    imperialLabel: 'US',
    modelInputsLabel: 'モデル入力',
    volumeLabel: '総モデルボリューム',
    heightLabel: 'パーツの高さ',
    complexityLabel: '形状の複雑さ',
    resinTypeLabel: 'レジンの種類',
    simpleLabel: '単純',
    moderateLabel: '標準',
    highLabel: '複雑',
    standardLabel: 'スタンダード',
    toughLabel: 'タフ',
    engineeringLabel: 'エンジニアリング',
    resultsLabel: '中空化・排出口計算結果',
    wallThicknessLabel: '推奨される壁厚',
    drainDiameterLabel: '排出口径',
    drainHoleCountLabel: '最小穴数',
    adjustedSavingLabel: '予想レジン節約量',
    adjustedSavingNote: '内壁に残留する液状レジンを考慮し、複雑さに応じて調整されています。',
    trapFactorLabel: 'トラップレジン係数',
    trapFactorHelp: 'この係数は、閉じた空洞内での粘性レジンの表面張力を補正するために、形状の複雑さに応じて変化します。',
    theoreticalSavingLabel: '理論上の中空ボリューム',
    trappedAllowanceLabel: '残留レジン許容量',
    savingUnitLabel: '節約量',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: '注意：排出口は、プリント方向においてビルドプレート側および最も低いレジン回収ポイントの近くに配置してください。',
    vacuumWarning: '中空形状では、リリースフィルムに対する真空状態を解消するために、常に少なくとも2つの排出口が必要です。',
    trappedResinWarning: '複雑な形状では内部に液状レジンが残るため、この計算で許容量を推測しています。',
    checklistTitle: 'スライス前チェックリスト',
    checklistItems: ['排出口がビルドプレートに近い領域に配置されていることを確認する。', '壁厚が1.5 mmを下回っていないことを確認する。', 'モデル内に閉じられたレジンの孤立領域や空洞がないことを確認する。'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
