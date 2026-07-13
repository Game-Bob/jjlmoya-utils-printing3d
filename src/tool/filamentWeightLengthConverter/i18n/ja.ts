import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-weight-to-length-converter';
const title = 'フィラメント重量・長さ変換ツール：正確な材料見積もり';
const description = 'フィラメントのグラム数をメートルと体積に変換。材料密度、1.75mmまたは2.85mm径、スプール残量確認に対応。';

const faqData = [
  {
    question: 'フィラメントのグラムをメートルに換算するには？',
    answer: '質量を材料密度で割って体積を求め、その体積を立方センチメートルから立方ミリメートルに変換し、フィラメント径の円形断面積で割ります。',
  },
  {
    question: 'フィラメントの材料密度が重要なのはなぜ？',
    answer: 'PLA、PETG、ABS、TPU、充填フィラメントは、ポリマーごとに密度が異なるため、同じ重さでも体積が変わります。長さは体積を断面積で割った値なので、密度がメートル換算に直接影響します。',
  },
  {
    question: '1.75mmフィラメントは常に1kgあたり同じ長さですか？',
    answer: 'いいえ。径の公差、材料密度、添加剤、水分含有量によって実際の長さは変化します。本計算機は公称径と密度に基づいた計画用の推定値を提供します。',
  },
  {
    question: '2.85mmフィラメントにも使えますか？',
    answer: 'はい。2.85mmを入力するか、ヤードポンド法に切り替えて同等の径を入力してください。断面積は即座に更新されます。',
  },
];

const howToData = [
  { name: 'フィラメント質量を入力', text: 'スライサーが必要とするフィラメント量、スプールの残り重量、または換算したいグラム数を入力します。' },
  { name: '素材を選択', text: 'PLA、PETG、ABS、TPU、ナイロン、PC、または充填ブレンドから選ぶと、計算機が正しい密度を使用します。' },
  { name: 'フィラメント径を設定', text: '1.75mm、2.85mm、または実測径を使用して、特定のスプールを反映した長さ推定値を得ます。' },
  { name: 'スプール残量を確認', text: 'スプールの残り重量を入力すると、材料が十分かどうか、過不足の正確な値を確認できます。' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '単位系',
    metricLabel: 'メートル法',
    imperialLabel: 'ヤードポンド法',
    inputsTitle: '材料在庫の見積もり',
    materialLabel: '素材',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'ナイロン PA',
    materialPcLabel: 'ポリカーボネート',
    materialWoodLabel: '木粉入り PLA',
    materialCarbonLabel: 'カーボンファイバーブレンド',
    materialMetalLabel: '金属入り PLA',
    densityLabel: '密度',
    densityUnit: 'g/cm3',
    weightLabel: 'フィラメント重量',
    weightSliderLabel: '印刷重量スライダー',
    diameterLabel: 'フィラメント径',
    stockLabel: 'スプール残り重量',
    stockPlaceholder: '在庫確認（任意）',
    spoolStateLabel: 'スプール状態',
    spoolScaleLabel: '消費量 / 利用可能量',
    cutLineLabel: 'フィラメント切れ停止ライン',
    resultLengthLabel: '推定フィラメント長さ',
    resultVolumeLabel: 'ポリマー体積',
    resultAreaLabel: '断面積',
    resultGramsMeterLabel: '線密度',
    enoughLabel: 'スプール十分',
    shortLabel: 'スプール不足',
    noStockLabel: '在庫確認未実施',
    surplusLabel: '余剰',
    missingLabel: '不足',
    formulaLabel: '計算経路',
    formulaText: '体積 = 質量 / 密度 → 長さ = 体積 / 断面積',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: '密度ベースのフィラメントグラム・メートル換算がより正確な理由', level: 2 },
    { type: 'paragraph', html: 'フィラメント重量・長さ変換ツールの精度は、その背後にある材料モデル次第です。汎用的な計算機は、すべてのフィラメント1kgが同じ体積を占めると仮定することがよくありますが、FFFフィラメントは質量で販売される一方、押出機は円筒状のフィラメントを長さで消費します。この2つの測定値を橋渡しするのが<strong>密度</strong>です。約1.24 g/cm3のPLA、約1.27 g/cm3のPETG、約1.04 g/cm3のABS、約1.21 g/cm3のTPUは、スプール重量と径が同じでも、同じメートル数には換算されません。' },
    { type: 'paragraph', html: '計算は質量から始まります。グラムを密度で割ると、体積が立方センチメートルで求められます。フィラメント径は通常ミリメートルで測定されるため、その体積を立方ミリメートルに変換します。断面積は円の面積、つまり円周率×半径の二乗です。最後に体積を断面積で割るとミリメートル単位の長さが得られ、それをメートルまたはフィートに変換できます。この結果は、スライサーが算出した材料が現在スプールにある在庫から印刷可能かどうかを確認するための実用的な推定値です。' },
    { type: 'stats', columns: 4, items: [
      { value: '1.24', label: 'PLAの標準密度（g/cm3）' },
      { value: '2.405', label: '公称1.75mmフィラメントの断面積（mm2）' },
      { value: '6.379', label: '公称2.85mmフィラメントの断面積（mm2）' },
      { value: '3つの入力', label: '質量、密度、径が換算を決定' },
    ] },
    { type: 'table', headers: ['素材', '計画用密度', '数値が重要な理由'], rows: [
      ['PLA', '1.24 g/cm3', 'デスクトップ印刷の一般的な基準であり、試作の良好なベースライン。'],
      ['PETG', '1.27 g/cm3', 'PLAよりわずかに密度が高いため、同じグラム数で得られる長さが短くなる。'],
      ['ABS', '1.04 g/cm3', '密度が低いため、同じ径でPLAよりグラムあたりの長さが長くなる。'],
      ['TPU', '1.21 g/cm3', '柔軟フィラメントはPLAに近いが、別途モデル化する価値がある。'],
      ['充填ブレンド', '変動あり', '木粉、カーボンファイバー、金属、ガラス添加剤により、密度がベースポリマーから大きく乖離することがある。'],
    ] },
    { type: 'title', text: 'フィラメント在庫見積もりのための正確な換算式', level: 2 },
    { type: 'paragraph', html: '数式モデルは意図的にシンプルに保たれています。なぜなら、すべての項が物理的な意味を持つからです。断面積は <code>π × (径 / 2)^2</code> です。体積は <code>重量 / 密度</code> です。体積がcm3、断面積がmm2の場合、長さは <code>体積 × 1000 / 断面積</code> で計算され、結果はミリメートル単位となり、1000で割るとメートルになります。これは、スライサーで押出量、最大流量、材料使用量を計算する際に使用されるのと同じ幾何学です。' },
    { type: 'diagnostic', variant: 'info', title: '径の公差が日常的な最大の不確実性要因', badge: '測定上の注意', html: '公称1.75mmのスプールでも、ロール全体が正確に1.75mmとは限りません。面積は半径の二乗に依存するため、わずかな径の違いが計算上の長さと実際の押出量を変えます。通常の在庫確認では公称径で十分です。較正時には、複数箇所をノギスで測定し、平均径を入力してください。' },
    { type: 'list', items: [
      'PrusaSlicer、Cura、Bambu Studio、OrcaSlicerなどのスライサーから材料使用量をコピーする場合はグラム単位を使用する。',
      '信頼性の高い在庫確認には、空スプールの風袋を差し引いた実測の残り重量を使用する。',
      '特殊な複合材料を印刷する場合は、メーカーのデータシートに記載された密度を使用する。',
      '断面積が劇的に異なるため、マシンがより太いフィラメントを送る場合は1.75mmではなく2.85mmを使用する。',
    ] },
    { type: 'tip', title: '残量に空スプールの風袋を含めない', html: 'スプールを秤にかけると、プラスチックや段ボールのコア重量も含まれます。空スプールが180gで、秤の表示が430gの場合、利用可能なフィラメントの推定値は250gとすべきです。総重量を入力すると、緑色の十分表示が過度に楽観的になります。' },
    { type: 'title', text: '同じ重量で比較する1.75mm vs 2.85mmフィラメント長さ', level: 2 },
    { type: 'paragraph', html: '径の影響は多くのユーザーが予想以上に大きくなります。2.85mmフィラメントの断面積は1.75mmの2倍以上あるため、1kgあたりのメートル数は大幅に少なくなります。これは一方の径が経済的に優れているという意味ではありません。どちらも同じパーツ体積を印刷できます。つまり、径の文脈なしに在庫の長さを比較することはできません。スライサーがグラムを報告する場合、質量によって材料使用量を正規化しています。プリンターのフィラメント切れセンサーや手動でのスプール推定がメートル単位で考える場合、径が重要な要素になります。' },
    { type: 'comparative', columns: 2, items: [
      { title: '1.75mmフィラメント', description: '1kgあたりの長さが長く、現在のデスクトッププリンターで主流のフォーマット。', points: ['コンパクトな押出機に適している', '同じスプール質量でより多くのメートル数', '公称面積: 約2.405 mm2'] },
      { title: '2.85mmフィラメント', description: '1kgあたりの長さが短く、より大きな送り断面を持ち、旧型または業務用マシンでよく見られる。', points: ['公称面積: 約6.379 mm2', '一部のセットアップでフィーダー圧縮の影響を受けにくい', '1.75mmの前提を使用してはならない'] },
    ] },
    { type: 'table', headers: ['シナリオ', '変化する要素', '計画上の影響'], rows: [
      ['同じポリマー、径拡大', '面積が増加', '同じグラム数に対してメートル数が減少。'],
      ['同じ径、低密度', '体積が増加', '同じグラム数に対してメートル数が増加。'],
      ['同じグラム数、充填フィラメント', '密度が上昇する可能性', 'メートル数が予想より短くなる可能性。'],
      ['湿気を含んだフィラメント', '測定質量がわずかに増加', '有用な乾燥ポリマーが増えていないのに、スプールが重く見える。'],
    ] },
    { type: 'title', text: '長時間印刷前にスプール在庫確認を使う方法', level: 2 },
    { type: 'paragraph', html: 'オプションの残量入力フィールドにより、変換ツールがGO/NO-GO判定のダッシュボードに変わります。ジョブに必要な質量をフィラメント重量として入力し、現在のスプールの利用可能なフィラメント量を入力します。出力はグラム単位で直接比較し、同じ素材と径のモデルを使用して差をメートルまたはフィートにも換算します。緑色はスプールに十分な在庫があることを示し、赤色は不足とその正確な差を示します。' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'グラムとメートルの両方が表示される理由', html: 'グラムは購入時やスライサーで使われる単位です。メートルは一部のファームウェア画面、フィラメント切れ推定、手動のスプール計算で使用されるフィラメント長さの単位です。両方を表示することで、ある密度の仮定では長さが十分でも、実際の素材では質量が不足するという、よくある計画ミスを防ぎます。' },
    { type: 'proscons', title: '在庫確認の手法', items: [
      { pro: 'スプールの計量は迅速で、ロールが途中からでも使える。', con: '空スプールの風袋を知っているか推定する必要がある。' },
      { pro: 'スライサーのグラム値は通常、材料購入重量と一致する。', con: 'スライサーの推定値は、パージ量、サポート、ブリム、修正メッシュによって変わる可能性がある。' },
      { pro: '長さはフィラメント経路やフィラメント切れ距離を考える際に直感的。', con: '長さは密度と径によって変化するため、素材間で一律には使えない。' },
      { pro: '密度ベースの換算はPLA、PETG、ABS、TPU、複合材料をより適切に処理する。', con: 'メーカー固有の添加剤にはカスタム密度値が必要な場合がある。' },
    ] },
    { type: 'title', text: '複合材料・特殊フィラメントにはカスタム密度値が必要', level: 2 },
    { type: 'paragraph', html: '充填フィラメントこそ、本格的な材料見積もりツールが密度を隠さず公開すべき最大の理由です。木粉入りPLA、カーボンファイバーナイロン、金属入りPLA、グローフィラメント、ガラス入りエンジニアリング材料、セラミック系ブレンドは、ベースポリマーから大幅に乖離する可能性があります。金属入りフィラメントは密度が高いため重く感じられます。同じ500gでも、標準PLAよりもはるかに少ない体積と長さしか得られません。高価なエンジニアリング印刷では、この違いは理論上の話ではありません。プリントの最後の10%が完了するかフィラメント切れで終わるかを左右します。' },
    { type: 'glossary', items: [
      { term: '密度', definition: '単位体積あたりの質量。ここでは1立方センチメートルあたりのグラム数で表す。' },
      { term: '断面積', definition: 'フィラメント径から計算されるフィラメント断面の円形面積。' },
      { term: '線密度', definition: '選択した素材と径において、1メートルまたは1フィートのフィラメントの重さ（グラム数）。' },
      { term: '風袋重量', definition: '秤の読みから差し引かなければならない空スプールの重量。' },
      { term: '公称径', definition: '実際の公差を測定する前の、製品表示上のフィラメントサイズ（通常1.75mmまたは2.85mm）。' },
    ] },
    { type: 'message', title: 'メーカーデータが最優先', html: 'スプールや技術データシートに密度が記載されている場合は、その値を使用してください。汎用の密度プリセットは計画に役立ちますが、サプライヤー固有の配合、顔料含有量、補強材によって数値が変わることがあります。' },
    { type: 'title', text: '3Dプリント材料見積もりの実践例', level: 2 },
    { type: 'paragraph', html: 'スライサーがPETG製ブラケットに186g必要と報告し、中途使用のスプールがあるとします。PETG 1.27 g/cm3、1.75mmフィラメントの場合、約61メートルに換算されます。風袋差引後の利用可能スプール重量が220gの場合、ダッシュボードは34gの余剰を報告し、その余裕を約11メートルに換算します。この余裕はパージラインと小さなブリムには十分ですが、大きなサポートのミスには足りません。在庫確認は、プリントを無人で始める前に現実的なバッファーを追加するようユーザーに促します。' },
    { type: 'paragraph', html: '次にABSを比較します。ABSはPETGより密度が低いため、同じ186gでもより大きな体積となり、同じ1.75mm径ではより長くなります。これはABSパーツ自体が安いという意味ではなく、1kgあたりの価格や印刷設定も重要ですが、ある素材からコピーした残量メートル推定値が別の素材では誤解を招く理由を説明しています。在庫管理において、質量は安定した出発点であり、密度が長さへの橋渡しをします。' },
    { type: 'summary', title: '信頼性の高い材料計画チェックリスト', items: [
      '残量を入力する前に空スプールの風袋を差し引く。',
      '充填、強化、プレミアムフィラメントには実際の材料密度を使用する。',
      'マシンが1.75mmと2.85mmのどちらのフィラメントを使用するか確認してから長さを信用する。',
      'パージ、サポート、ブリム、初層失敗、スライサープロファイル変更に備えて余裕を残す。',
      '緑色の十分表示は計画上の確認であって、詰まりやフィラメント切れセンサーの故障を保証するものではないことを理解する。',
    ] },
    { type: 'title', text: 'SEO対策：フィラメント重量→長さ換算の一言まとめ', level: 2 },
    { type: 'paragraph', html: '3Dプリンターフィラメントの重量を長さに換算するには、グラム数を材料密度で割って体積を求め、1000を掛けてcm3からmm3に変換し、<code>π × (径 / 2)^2</code> で割った後、1000で割ってメートル単位で読み取ります。PLA、PETG、ABS、TPU、ナイロン、PC、複合フィラメントはすべて異なる密度値を持つため、この密度対応方式は固定のグラム-メートル換算表より正確です。' },
    { type: 'diagnostic', variant: 'success', title: '推定値が最も信頼できる条件', badge: 'ベストプラクティス', html: 'スライサーの重量が確定し、スプール残量から風袋が除去され、径が実測または既知であり、密度がメーカー由来の場合に、結果は最も強力です。これらの条件下で、本ツールは長時間プリント、生産バッチ、高価な工業用ポリマーに対する実用的な出発前チェックとなります。' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
