import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'bulk-filament-roi-estimator';
const title = 'バルクフィラメントROI計算ツール';
const description = '1kgフィラメントスプールと3kg、5kg、またはカスタムのバルクスプールを、湿度リスク、実際の節約額、現地通貨表示で比較します。';

const faqData = [
  {
    question: '5kgのフィラメントスプールは、1kgスプールを5本買うより常に安いですか？',
    answer: 'いいえ。グラムあたりのコストが低く、かつ湿気による印刷品質の低下が起こる前に材料を使い切れる場合にのみ安くなります。消費が遅いと、バルク割引が無駄に変わることがあります。',
  },
  {
    question: 'なぜ計算機はリスクペナルティを差し引くのですか？',
    answer: 'このペナルティは、予想消費時間が安全保管期間を超える場合に失われる価値を見積もります。為替換算や実験室の湿度モデルではなく、計画上のリスク調整です。',
  },
  {
    question: 'リアルタイムの為替レートは必要ですか？',
    answer: 'いいえ。このツールは、通貨を切り替えた際に表示価格を変換するために、ローカルの概算為替テーブルを使用します。サーバーに問い合わせずに等価性を保つため、最終的な購入判断はショップや銀行が表示する価格に基づいて行う必要があります。',
  },
  {
    question: 'PLA、PETG、TPU、ナイロンではどのくらいの安全保管期間を入力すればよいですか？',
    answer: 'それぞれの材料をあなたの環境で乾燥した状態に保てる期間を使用してください。PLAはナイロンやTPUよりも長期保存に耐えるかもしれませんが、開放下の部屋、湿気の多い気候、またはバッグのシール不良によって安全期間は大幅に短縮される可能性があります。',
  },
];

const howToData = [
  {
    name: '標準スプールの価格を入力',
    text: '通常購入する1kgスプールの価格を入力します。サプライヤーが別の形式を使用している場合は、標準スプールの重量を調整できます。',
  },
  {
    name: 'バルク品の情報を入力',
    text: '3kg、5kg、またはカスタム重量を選択し、その大きなスプールの全額を同じ通貨で入力します。',
  },
  {
    name: '保管リスクをモデル化',
    text: '月間消費量と、湿気、脆化、乾燥の手間が実際のコストになる前に信頼できる最大保管期間を追加します。',
  },
  {
    name: '実際の節約額を確認',
    text: '実際の節約額はバルク割引と劣化ペナルティの両方を含むため、これを購入の判断基準として使用してください。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: '通貨',
    unitSystemLabel: '単位系',
    metricLabel: 'メートル法',
    imperialLabel: 'ヤード・ポンド法',
    standardTitle: '標準スプール',
    bulkTitle: 'バルクスプール',
    consumptionTitle: '消費と保管',
    standardWeightLabel: '標準重量',
    standardPriceLabel: '標準スプール価格',
    bulkWeightLabel: 'バルク重量',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6.6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: 'その他',
    bulkPriceLabel: 'バルクスプール価格',
    customWeightLabel: 'カスタムバルク重量',
    monthlyUseLabel: '月間消費量',
    safeStorageLabel: '安全保管期間',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: 'ヶ月',
    realSavingsLabel: 'リスク調整後の実際の節約額',
    grossSavingsLabel: '総節約額',
    riskPenaltyLabel: '湿気リスクペナルティ',
    breakEvenLabel: '消費期間',
    viabilityLabel: '採算性',
    tableMetricLabel: 'メートル法',
    tableStandardLabel: '1kgスプール',
    tableStandardImperialLabel: '2.2lbスプール',
    tableBulkLabel: 'バルクスプール',
    costPerGramMetric: 'グラムあたりのコスト',
    costPerOunceMetric: 'オンスあたりのコスト',
    totalSpoolMetric: 'スプール価格',
    usableWindowMetric: '消費期間',
    profitableLabel: '有利',
    neutralLabel: '中立',
    poorLabel: '価値が低い',
    humidityWarningTitle: '湿気による劣化リスク',
    humidityWarning: '劣化リスク：乾燥システムや密閉保管がない場合、このスプールの購入で損失が出る可能性があります。',
    safeMessage: '保管リスクは選択した安全期間内に収まっています。スプールを密閉して乾燥した状態に保ち、期待される節約を維持してください。',
  },
  seo: [
    {
      type: 'title',
      text: 'バルクフィラメントが本当に安いかどうかを判断する方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3kgや5kgのフィラメントスプールは、1kgあたりの表示価格が通常1kgスプールより低いため魅力的に見えます。よくある間違いは、レジの合計だけを比較することです。正しい比較では、両方の商品を<strong>グラムあたりのコスト</strong>に標準化し、実際に購入する材料の量で差を掛け、さらにその材料が使い終わるまで印刷可能な状態を保てるかどうかを検討します。',
    },
    {
      type: 'paragraph',
      html: '基本の計算式はシンプルです。各スプールの価格をグラム単位の重量で割ります。1kgスプールが24.99、5kgスプールが89.99の場合、1kgスプールは1グラムあたり0.02499、バルクスプールは1グラムあたり0.017998です。見かけ上の節約額は、グラム差に5000グラムを掛けたものです。この数字は有用ですが、スプールを何ヶ月も開けたままにする場合にはまだ不完全です。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: '一般的なデスクトップフィラメントスプールの基準質量' },
        { value: '3-5kg', label: '割引が明確になる典型的なバルク形式' },
        { value: '0 API', label: '通貨換算はライブサーバー呼び出しではなくローカルの概算レートを使用' },
      ],
    },
    {
      type: 'table',
      headers: ['質問', '入力する内容', '重要な理由'],
      rows: [
        ['通常何を買っていますか？', '1kgスプールの価格', 'これがグラムあたりの基準コストを設定します。'],
        ['バルク品の条件は？', '総額とバルク重量', 'これが割引後のグラムあたりコストを算出します。'],
        ['どのくらいの速さで印刷しますか？', '月間消費kg', 'スプールの保管期間を見積もります。'],
        ['保管状態はどの程度ですか？', '劣化前の安全月数', 'リスクペナルティの開始時期を定義します。'],
      ],
    },
    {
      type: 'title',
      text: '湿気がROI計算を変える理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'フィラメントは棚に安全に置かれた現金同等物ではありません。多くのポリマーは空気中の湿気を吸収し、湿ったフィラメントでは気泡、ストリンギング、もろい押出、曇った表面、層間密着の弱さ、不安定なフローなどの問題が発生します。正確な速度は、材料、湿度、包装、そしてスプールが乾燥ボックス、密封バッグ、開放ホルダーのいずれで保管されるかによって異なります。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'バルクスプールの隠れた失敗モード',
      badge: '計画リスク',
      html: '5kgスプールは、グラムあたりの価格が優れている場合でも悪い買い物になり得ます。プリンターが月に0.5kgを消費し、安全保管期間が3ヶ月の場合、そのスプールを消費するには約10ヶ月かかります。割引は、追加の乾燥、密封、印刷失敗、または廃棄材料リスクを賄うのに十分な大きさでなければなりません。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '頻繁に使うユーザー',
          description: '小型のプリントファーム、コスプレ製作者、製品バッチ生産では3kgから5kgを素早く消費できます。保管期間が短いため、バルクフィラメントは通常合理的です。',
          points: ['月間使用量が多い', '棚での露出が少ない', '割引が実際の節約になる'],
        },
        {
          title: '不定期の趣味ユーザー',
          description: '週末に印刷するか、時折修理するユーザーは、大きなスプールを消費するのに何ヶ月もかかる場合があります。湿気リスクが割引を帳消しにする可能性があります。',
          points: ['月間使用量が少ない', '開封後の寿命が長い', '乾燥保管がより重要'],
        },
        {
          title: '技術材料ユーザー',
          description: 'ナイロン、TPU、PCブレンド、一部のPETGグレードなどの材料は、より厳格な乾燥管理を必要とすることがよくあります。バルク購入は保管設備と組み合わせる必要があります。',
          points: ['湿気感受性が高い', '乾燥ボックス推奨', 'ペナルティ閾値は保守的に設定'],
        },
      ],
    },
    {
      type: 'title',
      text: '実際の節約額の意味',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールはまず総節約額を表示し、推定消費時間が安全保管期間を超える場合に劣化ペナルティを差し引きます。このペナルティは実験室的な予測ではなく、意図的に保守的に設定されています。これは、湿ったり経年劣化したフィラメントがしばしば見えにくいコスト（乾燥のための電気、追加の取り扱い、印刷失敗、ノズル詰まり、表面欠陥、スプールの一部が外観用や構造用の作業に適さなくなる可能性）を生むという経済的現実を表しています。',
    },
    {
      type: 'list',
      items: [
        '実際の節約額がプラスとは、保管リスク調整後もバルク割引が有効であることを意味します。',
        '中立とは、判断が利便性、色の入手可能性、配送料、そして既に乾燥ボックスを所有しているかどうかに依存することを意味します。',
        '価値が低いとは、バルクスプールがグラムあたりで安くないか、リスク調整後の節約額がマイナスであることを意味します。',
        '警告メッセージは、消費月数が入力した安全保管期間を超える場合に表示されます。',
      ],
    },
    {
      type: 'proscons',
      title: 'バルクフィラメント購入のトレードオフ',
      items: [
        { pro: '大量印刷時のグラムあたりコスト低減。', con: '1つの材料、色、サプライヤーバッチに多くの資本が固定される。' },
        { pro: '長期生産時のスプール交換が少ない。', con: '露出する質量が大きいため、消費前に劣化する可能性がある。' },
        { pro: '1kgあたりの包装廃棄物が少ない。', con: '大型スプールはより強力なホルダーや外部スプールスタンドが必要になる場合がある。' },
        { pro: '反復的なファーム作業やバッチ生産に有用。', con: 'レアカラー、実験的材料、またはゆっくりとした趣味での使用には不向き。' },
      ],
    },
    {
      type: 'title',
      text: '安全保管期間の選び方',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '安全保管期間は普遍的な材料定数ではありません。これは、あなたが自分の保管条件下でフィラメントが印刷可能な状態を保つと個人的に信頼できる期間です。乾燥した部屋で新鮮な乾燥剤と共に密封されたバッグは、湿気のあるガレージでプリンターの隣に置かれた開封スプールとは大きく異なります。保守的な購入判断のためには、重要な印刷の前にスプールを乾燥させ始めるであろう月数を入力してください。',
    },
    {
      type: 'table',
      headers: ['状況', '推奨される計画行動', '理由'],
      rows: [
        ['湿気のある部屋で開放ホルダー使用', '短い安全期間を使用', '湿気への暴露が継続的。'],
        ['乾燥剤入りの密閉ボックス', '長めの安全期間を使用', '印刷の合間にスプールが保護される。'],
        ['プリンターに給送する乾燥ボックス', '長めだが現実的な期間を使用', '印刷と保管の両方が管理下にある。'],
        ['ナイロン、TPU、PC、水溶性サポート', '保守的に設定', 'これらの材料は湿気で印刷不良を起こしやすい。'],
        ['粗い試作品に使うPLA', 'リスク許容度は高めでよい', '外観上の軽微な問題は非クリティカル部品では許容できる場合がある。'],
      ],
    },
    {
      type: 'tip',
      title: 'セール終了前に計算機を使う',
      html: 'タイムセールではバルクスプールが緊急に感じられることがよくあります。セール価格、可能であれば送料込みの価格、そして現実的な月間使用量を入力してください。消費時間が保管期間より長い場合、セールは追加リスクを補うのに十分な割引である必要があります。',
    },
    {
      type: 'title',
      text: '為替APIなしの通貨換算',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'この計算ツールは意図的にクライアントサイドで動作します。ライブ為替レートを取得しませんが、通貨セレクターはユーザーが通貨を変更した際にローカルの換算倍率を適用します。つまり、24.99 EURと入力されたスプールは、単に記号を置き換えるのではなく、USD、GBP、JPYなどのサポート通貨でのおおよその等価額になります。レートは計画上の見積もりであるため、購入前には実際のレジ価格、カード手数料、税金、マーケットプレイス固有の換算スプレッドを必ず確認してください。',
    },
    {
      type: 'glossary',
      items: [
        { term: 'グラムあたりコスト', definition: 'スプール価格をフィラメントの総グラム数で割ったもの。公平な比較のために使用される標準化された単位です。' },
        { term: '総節約額', definition: '湿気や保管リスクを考慮する前の価格上の利点。' },
        { term: 'リスクペナルティ', definition: 'スプールの消費に安全保管期間よりも時間がかかる場合に適用される計画上の控除。' },
        { term: '実際の節約額', definition: '総節約額からリスクペナルティを差し引いたもの。これが主要な購入シグナルです。' },
        { term: '消費期間', definition: 'バルクスプール重量を見積もり月間使用量で割ったもの。' },
      ],
    },
    {
      type: 'summary',
      title: '実用的な購入ルール',
      items: [
        '実際の節約額が明確にプラスで、消費期間が保管環境に合っている場合にバルクを購入する。',
        '1つのプロジェクトで使った後に使わなくなるレアカラーを買う場合はバルクを避ける。',
        '乾燥機器を、湿気に敏感なポリマーのためのオプションの贅沢品ではなく、バルクフィラメントシステムの一部として扱う。',
        'スプールサイズによって配送料が異なる場合は、製品ページの価格だけでなく、配送料込みの価格を比較する。',
      ],
    },
    {
      type: 'message',
      title: '結論',
      html: 'バルクスプールが有利になるのは、グラムあたりのコストが低く、月間消費量が十分で、フィラメントを印刷可能に保つ保管ができるという3つの条件が揃ったときです。1つの条件が欠けると、見かけ上の割引が偽装された材料損失に変わる可能性があります。',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
