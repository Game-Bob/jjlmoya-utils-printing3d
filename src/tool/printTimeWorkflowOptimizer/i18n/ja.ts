import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-print-time-workflow-optimizer';
const title = '3Dプリント作業時間最適化ツール';
const description =
  '2つのFDM印刷設定を並べて比較：層数、補正済み印刷時間、フィラメント消費量、コスト、品質と速度のトレードオフ、ハードウェア速度警告。';

const faqData = [
  {
    question: '単純な時間計算機との違いは？',
    answer:
      '複雑さのオーバーヘッド、層ごとの引き取り時間、充填量、フィラメント質量、コスト、シナリオ比較を含みます。',
  },
  {
    question: 'スライサーの推定を置き換えられますか？',
    answer:
      'いいえ。スライサーは正確なツールパスを知っています。このツールはスライス前の計画用です。',
  },
  {
    question: '複雑さの設定は何を変えますか？',
    answer:
      '低/中/高は移動、加速損失、コーナー、アイランドにオーバーヘッド係数を適用します。',
  },
  {
    question: 'なぜ100 mm/s以上で警告しますか？',
    answer:
      '多くのプリンターは100 mm/sを超えられますが、押出と冷却により、キャリブレーションなしでは高速が危険です。',
  },
];
const howToData = [
  { name: 'モデルのサイズと体積を入力', text: 'CAD、スライサービュー、または近似から高さと体積を追加。' },
  { name: 'シナリオAを調整', text: '層の高さ、速度、線幅、充填、材料、複雑さを選択。' },
  { name: 'シナリオBを調整', text: '比較用に2番目の設定を調整。' },
  { name: '影響を読む', text: '時間、フィラメント、コスト、層、効率、流量を比較。' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '印刷ワークフロー入力',
    resultsAriaLabel: '印刷ワークフロー結果',
    unitSystemLabel: '単位',
    metricLabel: 'メートル法',
    imperialLabel: '米国',
    currencyLabel: '通貨',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'シナリオA',
    scenarioBLabel: 'シナリオB',
    modelHeightLabel: 'モデルの高さ',
    modelVolumeLabel: '推定体積',
    layerHeightLabel: '層の高さ',
    speedLabel: '速度',
    lineWidthLabel: '線幅',
    infillLabel: '充填',
    complexityLabel: '複雑さ',
    complexityTooltip: '加速度、コーナー、引き取り、アイランド、短い移動によるデッドタイムを推定します。',
    pieceTypeLabel: 'パーツタイプ',
    solidPieceLabel: 'ソリッド連続',
    hollowPieceLabel: '中空多数の空洞',
    materialLabel: '材料',
    filamentPriceLabel: 'フィラメント価格',
    lowComplexity: '低単純な面',
    mediumComplexity: '中混合ジオメトリ',
    highComplexity: '高多数のアイランド',
    estimatedTimeLabel: '推定時間',
    filamentLabel: 'フィラメント',
    costLabel: '材料費',
    layersLabel: '層',
    efficiencyLabel: '効率',
    flowLabel: '体積流量',
    flowTooltip: '10-12 mm3/sを超えると、アンダー押出のリスクがあります。',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: '品質トレードオフ',
    speedReductionLabel: '-10%速度',
    speedReductionAddsLabel: '追加',
    speedReductionMinutesLabel: '分',
    qualityGainLabel: '約8%清潔な表面',
    hardwareWarning: '速度>100 mm/s。ホットエンド流量、冷却、加速を確認。',
    flowWarning: '流量が標準ホットエンドの快適ゾーンを超えています。',
    bestValueLabel: '最良の値',
    timeDeltaLabel: '時間差',
    costDeltaLabel: 'コスト差',
    materialDeltaLabel: '材料差',
    winnerBadge: '最良の値',
    scenarioPrefix: 'シナリオ',
    inScenarioLabel: 'で',
    fasterDirection: 'より速い',
    cheaperDirection: 'より安い',
    lighterDirection: 'より軽い',
    criterionAlignedLabel: '最良の値に一致',
    criterionTradeoffLabel: '最良の値のトレードオフ',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: '分',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'スライス前に3Dプリント時間を見積もる方法', level: 2 },
    {
      type: 'paragraph',
      html: '有用な<strong>3Dプリント時間推定ツール</strong>は、単に体積を速度で割っただけでは不十分です。FDMプリンターは、加速、コーナーでの減速、フィラメントの引き取り、アイランド間の移動、小さな層の冷却、方向転換後の圧力回復に時間を費やします。この最適化ツールは、パーツを印刷可能な体積、線幅、層の高さ、速度、層数、複雑さ係数としてモデル化し、初期計画を実際のワークフロー判断に近づけます。',
    },
    {
      type: 'paragraph',
      html: '基本押出時間は、体積を体積スループットで割って計算されます：速度×線幅×層の高さ。次に、ツールはモデルの複雑さに応じた補正係数を適用し、層ごとに固定の引き取り許容量を追加します。これはスライサーの精度を主張するものではありませんが、0.20mmのドラフト設定と0.12mmの品質設定を、線形計算機よりも正直に比較できます。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: '単純なブロックと滑らかなパーツ向け低複雑さオーバーヘッド', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: '多数のアイランドと引き取り向け高複雑さオーバーヘッド', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: '層ごとに追加される計画引き取り許容量', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: '押出リスクに対する標準プリンターの警告しきい値', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: '可能な場合はスライサーの体積を使用',
      html: '<p>最適な体積入力は、モデルの外側のバウンディングボックスではなく、スライサーまたはCADのマテリアル体積です。バウンディングボックスには、曲線、穴、ハンドル、空洞の周りの空気が含まれるため、時間とフィラメントを過大評価する可能性があります。</p>',
    },
    { type: 'title', text: '層の高さが時間にこれほど強く影響する理由', level: 2 },
    {
      type: 'paragraph',
      html: '層の高さは印刷時間に2重の影響を与えます。第一に、体積スループットが変化します：同じ速度と幅の0.12mm層は、0.20mm層よりも1秒あたり40%少ないプラスチックを押し出します。第二に、層数が増加するため、層変更オーバーヘッド、引き取り、圧力安定化、冷却判断がより頻繁に発生します。これが、小さな外観の変更が5時間の印刷を8時間の印刷に変える理由です。',
    },
    {
      type: 'table',
      headers: ['層の高さ', '一般的な使用法', 'ワークフローへの影響'],
      rows: [
        ['0.28～0.32mm', 'ドラフトパーツ、大型治具、クイックチェック', '層数が少なくスループットは高いが、層の線が見える。'],
        ['0.18～0.22mm', '一般的なPLAおよびPETG印刷', '多くのデスクトッププリンターで時間、強度、表面品質のバランスが取れている。'],
        ['0.10～0.14mm', 'ミニチュア、湾曲したシェル、目に見える消費者向けパーツ', 'スループットが低下し層数が増加するため、作業時間が大幅に長くなる。'],
        ['0.10mm未満', '特殊な仕上げケース', '多くの場合、機械の精度、冷却、視覚的なリターンの減少によって制限される。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '細かい層は計算式が示唆するよりも遅くなる可能性がある',
      badge: '冷却と最小層時間',
      html: '<p>小さなモデルはスライサーで最小層時間に達する場合があります。その場合、体積計算式がマシンがより速く動けると示唆していても、プリンターはプラスチックを冷却するために速度を落とします。</p>',
    },
    {
      type: 'summary',
      title: '層の高さのルール',
      items: [
        '層の高さが低いほど、同じ速度での1秒あたりの流量が減少する。',
        'モデル体積が変わらなくても、層が多いほど繰り返しオーバーヘッドが増加する。',
        '最良の比較はシナリオベース：ドラフトプロファイル対品質プロファイル。',
      ],
    },
    { type: 'title', text: 'モデルの複雑さのオーバーヘッドとデッドタイム', level: 2 },
    {
      type: 'paragraph',
      html: 'デッドタイムとは、理論上の押出と実際のジョブ時間とのギャップです。まっすぐな花瓶のような壁は、移動が少なく引き取りもほとんどありません。多くの穴、ボス、ラベル、リブ、分離したアイランドがある機械的な筐体は、プリンターに何度も起動と停止を強制します。加速制限により、短いセグメントではノズルが指令速度に達しない可能性があるため、実際の平均移動速度はスライダー値よりも低くなります。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: '低複雑さ', description: '滑らかなモデル、連続した輪郭、少数のアイランド、限られた内部移動。', icon: 'mdi:shape-outline', points: ['低オーバーヘッド', '安定した速度', '少ない引き取り'] },
        { title: '中複雑さ', description: '穴、混合曲線、充填変更、適度な移動を伴う一般的な機能部品。', icon: 'mdi:cog-outline', highlight: true, points: ['バランスの取れたデフォルト', '多少の移動損失', '有用な見積もりベースライン'] },
        { title: '高複雑さ', description: 'テクスチャ表面、多数の分離した機能、サポートインターフェース、引き取りの多いセクション。', icon: 'mdi:transit-connection-variant', points: ['高オーバーヘッド', 'ストリンギングリスク増大', '実際の時間が長い'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'オーバーヘッド係数', definition: '移動、加速損失、引き取り、および安定した押出計算では捉えられないその他の時間を近似する乗数。' },
        { term: '体積流量', definition: '1秒間にノズルから押し出されるプラスチックの量。速度×線幅×層の高さで計算。' },
        { term: '層数', definition: 'モデルの高さを層の高さで割り、切り上げた値。部分的な最終層でもパスが必要なため。' },
        { term: 'アンダー押出', definition: 'ホットエンドまたは押出機が要求された速度と線形状に対して十分な溶融プラスチックを供給できない欠陥。' },
      ],
    },
    {
      type: 'message',
      title: '複雑さをキャリブレーションのつまみとして扱う',
      ariaLabel: '複雑さ係数の注意事項',
      html: '<p>スライサーが同様のモデルに対してこの最適化ツールよりも一貫して長い時間を報告する場合は、複雑さを上げてください。調整された加速度を持つダイレクトドライブプリンターが推定値を上回る場合は、将来の計画のために下げてください。</p>',
    },
    { type: 'title', text: 'フィラメント消費量、コスト、充填', level: 2 },
    {
      type: 'paragraph',
      html: '時間はワークフロー判断の一部に過ぎません。フィラメントの重量とコストは、部品の見積もり、バッチジョブの計画、または細部プロファイルがプリンターを占有する価値があるかどうかの判断において重要です。この最適化ツールは、シェル部分を保持し、内部領域を充填率でスケーリングして補正印刷可能体積を推定し、その体積に材料密度を掛けます。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '迅速な材料計画には、約1.24 g/cm³のPLAと約1.27 g/cm³のPETGを使用してください。',
        'サポート、ブリム、ラフト、またはパージ構造が作業の一部である場合は、推定体積を増やしてください。',
        '充填率を下げるとフィラメントと時間は減少しますが、壁、上面、下面は依然として材料を消費します。',
        '生産バッチの場合は、計算機の推定値を実際に使用したスプール重量と比較し、将来の見積もりを調整してください。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'ワークフロー判断の例',
      html: '<p>0.20mm層の120 cm³ PLAパーツは工場ジグとしては許容できるかもしれませんが、0.12mmバージョンは見た目が良いもののプリンターをより長く占有します。時間と材料費を並べて比較することで、マシンをコミットする前にトレードオフを可視化できます。</p>',
    },
    {
      type: 'proscons',
      title: '速度と品質の最適化',
      items: [
        { pro: '速度を上げると、1日あたりのジョブ数が増え、プリンター容量を解放できる。', con: 'リンギング、弱いコーナー、不十分な冷却、ホットエンドの流量制限が露呈する可能性がある。' },
        { pro: '速度を下げると、多くの場合、表面仕上げと寸法安定性が向上する。', con: '待ち時間が増加し、小さな商用パーツの収益性が低下する可能性がある。' },
        { pro: '層の高さを低くすると、曲面やミニチュアが改善される。', con: '層数と繰り返しのマシンオーバーヘッドが増加する。' },
      ],
    },
    { type: 'title', text: 'ハードウェア警告と実用的な速度制限', level: 2 },
    {
      type: 'paragraph',
      html: 'スライサーの速度値は、ノズルがどこでもその速度を維持できるという保証ではありません。標準的な直交ベッドスリンガー、古いボーデン押出機、短い溶融ゾーンホットエンド、弱いパーツ冷却は、加速度、ジャーク、 Pressure Advance、温度、流量キャリブレーションが調整されていない限り、100 mm/s以上で問題が生じる可能性があります。警告は印刷が失敗することを意味するのではなく、要求された設定をハードウェアの動作に対して確認する必要があることを意味します。',
    },
    {
      type: 'table',
      headers: ['症状', '考えられる原因', '計画対応'],
      rows: [
        ['薄い壁または隙間', 'ホットエンドが十分なプラスチックを溶かせないか、押出機が滑る', '速度を下げ、注意して温度を上げるか、線幅/層の高さを下げる。'],
        ['コーナー付近のリンギング', '加速度とフレーム振動が支配的', '目に見える壁の加速度または速度を下げる。'],
        ['小さな特徴部の反り', '冷却が追いつかない', '速度を下げ、ファンを増やすか、複数コピーを印刷する。'],
        ['複雑なパーツのストリンギング', '多くの移動と引き取り', '複雑さオーバーヘッドを増やし、引き取り/温度を調整する。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '体積流量が本当の速度の上限',
      badge: 'mm³/sを確認',
      html: '<p>同じ移動速度の2つのプロファイルでも、異なる溶融率が要求されることがあります。80 mm/sの0.30mm層と0.50mm線は、同じ速度の0.12mm層と0.42mm線よりも1秒あたりはるかに多くのプラスチックを必要とします。</p>',
    },
    {
      type: 'summary',
      title: 'スライス前に最適化ツールを使用',
      items: [
        '単一の数値から推測するのではなく、2つの候補プロファイルを比較する。',
        '層数、体積流量、ハードウェア警告を一緒に確認する。',
        '最後の操作をローカルに保持し、繰り返し計画を前回の設定から続行できるようにする。',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
