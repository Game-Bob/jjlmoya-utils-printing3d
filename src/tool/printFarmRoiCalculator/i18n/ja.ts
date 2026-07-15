import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = '3d-print-farm-roi-calculator';
const title = '3Dプリンター農場ROI計算ツール';
const description =
  '稼働率、失敗率、電気代、固定費、および変動時間コストを使用して、3Dプリントファーム of 月間収益性、回収期間、および年換算ROIをシミュレートします。';

const currencyOptions = [
  { code: 'EUR', label: 'EUR', symbol: '€' },
  { code: 'USD', label: 'USD', symbol: '$' },
  { code: 'GBP', label: 'GBP', symbol: '£' },
  { code: 'CAD', label: 'CAD', symbol: 'C$' },
  { code: 'AUD', label: 'AUD', symbol: 'A$' },
  { code: 'CHF', label: 'CHF', symbol: 'Fr' },
  { code: 'CNY', label: 'CNY', symbol: '¥' },
  { code: 'INR', label: 'INR', symbol: '₹' },
  { code: 'BRL', label: 'BRL', symbol: 'R$' },
  { code: 'MXN', label: 'MXN', symbol: 'MX$' },
  { code: 'RUB', label: 'RUB', symbol: '₽' },
  { code: 'PLN', label: 'PLN', symbol: 'zł' },
  { code: 'SEK', label: 'SEK', symbol: 'kr' },
  { code: 'NOK', label: 'NOK', symbol: 'kr' },
  { code: 'DKK', label: 'DKK', symbol: 'kr' },
  { code: 'TRY', label: 'TRY', symbol: '₺' },
  { code: 'JPY', label: 'JPY', symbol: '¥' },
];

const faqData = [
  {
    question: '3DプリントファームのROIはどのように計算しますか？',
    answer:
      '月間の実質稼働時間を推定し、それにマシン時間あたりの販売価格を掛け、固定費、電気代、および時間あたりの変動費を差し引いた後、年間利益と初期投資を比較します。',
  },
  {
    question: 'なぜ成功率がプリントファームの投資回収に影響を与えるのですか？',
    answer:
      '印刷に失敗すると、請求可能な時間を生み出すことなく、マシンの容量、材料、ノズル、エネルギー、およびオペレーターの手間が消費されます。成功率が下がると、実質的な稼働時間が減少し、投資回収が遅れます。',
  },
  {
    question: '時間あたりの変動費には何を含めるべきですか？',
    answer:
      'フィラメントやレジンの消費、ノズルの摩耗、ビルドプレートの摩耗、定期メンテナンス部品、消耗品、および実際の成功した生産時間に応じて変動する時間あたりの手当を含めます。',
  },
  {
    question: '投資回収期間とROIは同じですか？',
    answer:
      'いいえ。回収期間は、月々の純利益から初期投資を回収するのに必要な月数を見積もるものです。ROIは、年換算した利益を元の投資額に対する割合として比較します。',
  },
];

const howToData = [
  { name: 'ファームの規模を入力', text: '稼働中のプリンターの数と、マシン、セットアップ、ワークステーション、および導入に必要な初期投資を追加します。' },
  { name: '月間運用コストを追加', text: '月間の固定費と電気代を入力し、さらに実質稼働マシン時間あたりの変動費を追加します。' },
  { name: '稼働率と成功率を設定', text: 'アイドル時間と印刷の失敗が差し引かれるよう、現実的な稼働率と成功率を設定します。' },
  { name: '収益性出力を確認', text: '月間売上とコストを比較し、回収月数と年換算ROIを使用して投資の実現可能性を判断します。' },
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
    '3DプリントファームROI計算ツール',
    '3Dプリント投資回収シミュレーター',
    'プリントファーム収益性計算ツール',
    '稼働率と印刷失敗の調整機能',
    '複数通貨対応の運用コストモデル',
  ],
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'プリントファームROI 入力項目',
    resultsAriaLabel: 'プリントファームROI 計算結果',
    currencyLabel: '通貨',
    currencyOptions,
    printerCountLabel: 'プリンター台数',
    initialInvestmentLabel: '初期投資',
    fixedMonthlyCostLabel: '月間固定費',
    electricityMonthlyCostLabel: '月間電気代',
    hourlyRateLabel: '時間あたりの販売単価',
    occupancyLabel: '平均稼働率',
    successRateLabel: '成功率',
    variableCostLabel: '時間あたりの変動費',
    averageHoursPerPartLabel: '部品あたりの平均印刷時間',
    paybackLabel: '回収期間',
    netProfitLabel: '月間純利益',
    annualRoiLabel: '年換算ROI',
    productiveHoursLabel: '実質稼働時間',
    revenueLabel: '売上',
    costsLabel: 'コスト',
    fixedCostShortLabel: '固定',
    electricityShortLabel: '電気代',
    variableCostShortLabel: '変動',
    marginLabel: '純利益率',
    breakEvenPartsLabel: '損益分岐点（個数）',
    breakEvenHoursLabel: '損益分岐点（時間）',
    stressScenarioLabel: '最悪のシナリオ',
    exportSummaryLabel: 'サマリーをダウンロード',
    chartLabel: '月間売上と運用コストの比較',
    monthsUnit: 'ヶ月',
    hoursUnit: '時間',
    percentUnit: '%',
    notViableLabel: '回収不可',
    positiveInsight: '稼働率、成功率、運用コストを考慮した後の月間利益は黒字です。',
    negativeInsight: '運用コストが調整後の売上を上回っています。規模を拡大する前に、稼働率、価格設定、または失敗率を改善してください。',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: '個/月',
    reportFilename: 'print-farm-roi-summary.csv',
    reportTitle: '3DプリントファームROI実現可能性レポート',
    reportCurrencyLabel: '通貨',
  },
  seo: [
    { type: 'title', text: '3DプリントファームROI計算ツールの仕組み', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3DプリントファームのROI計算ツール</strong>は、特定の投資に関する疑問、すなわち「プリンター群のセットアップコストを十分に早く回収して、資本、スペース、メンテナンス、および運用リスクを正当化できるか」という問いに答える必要があります。このシミュレーターは、月間のマシン容量からその問いをモデル化します。各プリンターは標準的な30日間の月に720時間の総時間を提供し、モデルはそれらの時間を稼働率と印刷成功率で割り引きます。結果は理論上の容量ではなく、アイドル期間、ジョブのキュー、印刷の失敗、再印刷、キャリブレーション、および実際のダウンタイムを差し引いた、請求可能な生産時間です。',
    },
    {
      type: 'paragraph',
      html: '計算ロジックは意図的に透明化されています。月間の総時間は<code>プリンター数 x 720</code>です。実質稼働時間は、総時間に平均稼働率と成功率を掛けたものです。月間売上は、実質稼働時間に顧客向けの単価を掛けたものです。運用コストは、月間の固定費、電気代、および時間あたりの変動費を組み合わせたものです。月間純利益は売上からそれらの運用コストを差し引いたものです。回収期間は初期投資を月間純利益で割ったものであり、年換算ROIは12ヶ月分の純利益と初期投資を比較します。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 時間', label: 'プリンターあたりの月間総容量', icon: 'mdi:clock-outline' },
        { value: '稼働 x 成功', label: '稼働率と成功率の調整', icon: 'mdi:percent-outline' },
        { value: '売上 - コスト', label: '月間純利益', icon: 'mdi:finance' },
        { value: '投資 / 利益', label: '回収期間', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: '投資判断には保守的な数値を入力してください',
      html: '<p>最初のステップでは、マーケティング改善後に達成したい稼働率ではなく、現在の需要で維持できる確実な稼働率を入力してください。楽観的な稼働率でしか成り立たないファームは、まだ堅実な投資とは言えません。</p>',
    },
    { type: 'title', text: '稼働率がプリントファームの収益性を変える理由', level: 2 },
    {
      type: 'paragraph',
      html: '稼働率とは、利用可能なマシン時間のうち、実際に有償または販売可能な印刷に使用されている時間の割合です。初期投資が固定されているため、多くの小規模ファームモデルにおいてこれが最も強力なレバーとなります。生産用に購入したプリンターは、1日8時間稼働しても20時間稼働してもコストは同じです。稼働率が高くなれば、家賃、セットアップ、スペアパーツの在庫、ソフトウェア、およびマシンの減価償却費がより多くの請求可能時間に分散されます。',
    },
    {
      type: 'paragraph',
      html: '計算ツールは、稼働率を総容量に対する直接の乗数として扱います。10台 of プリンターは月間7200時間の総マシン時間を生み出します。稼働率が40%の場合、成功率調整前で2880時間のみが売上モデルに入力されます。稼働率が75%の場合、5400時間が入るため、この差によって回収が数ヶ月で済むか、数年かかるか、あるいは永久に回収できないかが決まります。',
    },
    {
      type: 'table',
      headers: ['稼働率レベル', '運用の実態', 'ROIへの影響'],
      rows: [
        ['30%未満', 'マシンは月の大部分を注文、ファイル、オペレーター、またはメンテナンスの待機に費やしています。', '時間あたりの価格設定が高くない限り、初期投資の回収は困難です。'],
        ['30-55%', '多様な需要と手動処理を伴うファームの一般的な初期段階の範囲。', '収益性は固定費と失敗率に大きく左右されます。'],
        ['55-75%', '緊急のジョブ、メンテナンス、セットアップ変更の余裕を残した健全な受注レベル。', '回収が現実的になる最初の範囲であることが多いです。'],
        ['75%超', '確実なスケジューリング、資材フロー、および予防メンテナンスが必要な高い稼働率。', '強力なROIの可能性がありますが、故障やオペレーターのボトルネックに対する許容度は低いです。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '高い稼働率が高い利益と同じとは限りません',
      badge: '価格リスク',
      html: '<p>時間単価が低すぎる、再印刷が頻繁である、材料の廃棄が多い、または固定費を過小評価している場合、ファームが忙しくても赤字になる可能性があります。売上だけでなく、常に稼働率とマージンを比較してください。</p>',
    },
    { type: 'title', text: '印刷の失敗と再印刷の考慮', level: 2 },
    {
      type: 'paragraph',
      html: '成功率の入力は、この3D印刷投資回収シミュレーターを単なる容量計算ツールと区別する要素です。失敗した印刷は、成功した印刷と同じ時間を消費しますが、販売可能な成果物は生成されません。また、フィラメント、レジン、ビルドプレート、ノズル、電気、労力、および顧客の信頼を損なう可能性があります。成功率が90%のファームは、売上をカウントする前に、潜在的な生産ブロックの10分の1を失っています。',
    },
    {
      type: 'paragraph',
      html: '成功率は同等の作業にわたって測定される必要があります。調整されたプロセスでPLA治具を繰り返し印刷するファームは、非常に高い成功率を維持できます。一回限りの顧客モデル、背の高い部品、エンジニアリングプラスチック、レジンミニチュア、またはマルチマテリアルのジョブを生産するファームは、低い成功率を想定する必要があります。簡単な作業とリスクのある作業が混在している場合は、標準生産用とカスタムジョブ用の2回、計算ツールを実行してください。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '繰り返し生産',
          description: '既知の部品形状、調整されたプロファイル、予測可能な材料、および安定した需要。',
          icon: 'mdi:repeat',
          points: ['高い成功率の想定', 'セットアップの不確実性が低い', '回収の信頼性が高い'],
        },
        {
          title: 'カスタム受託造形サービス',
          description: 'ファイルは顧客、形状、サポート配置、および品質の期待値によって異なります。',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['中程度の成功率の想定', '見積もりのばらつきが大きい', '再印刷の余裕が必要'],
        },
        {
          title: '実験的な材料',
          description: 'エンジニアリングプラスチック、フレキシブル素材、複合フィラメント、およびレジンのプロセス調整。',
          icon: 'mdi:flask-outline',
          points: ['低い成功率の想定', '消耗品の摩耗が激しい', '慎重なROI入力を推奨'],
        },
      ],
    },
    {
      type: 'message',
      title: '失敗率は財務モデルに含めるべきです',
      ariaLabel: '失敗の計算に関する注記',
      html: '<p>曖昧な固定費の中に再印刷を隠さないでください。成功率の入力を明確にすることで、投資ケースの検証、改善、説明が容易になります。</p>',
    },
    { type: 'title', text: '信頼できる月間コストモデルの構築', level: 2 },
    {
      type: 'paragraph',
      html: 'このツールの運用コストは3つの層で構成されています。月間固定費は、プリンターが停止している場合でも発生する費用（家賃、インターネット、保険、ソフトウェア、会計、保管、基本的な労力カバー、その他の間接費）をカバーします。月間電気代は、プリンターおよび直接関連する生産設備によって消費されるエネルギーを捉えます。時間あたりの変動費は、実質生産時間に応じてスケールするコスト（フィラメント、レジン、ノズル、PTFEチューブ、ビルドプレートの摩耗、フィルター、潤滑剤、メンテナンス部品、およびクリーニング用の消耗品）をカバーします。',
    },
    {
      type: 'paragraph',
      html: '電気代を個別の月間入力項目として維持することはファームに有用です。なぜなら、電力消費はプリントごとに計算されるよりも、請求書や子メーターから追跡されることが多いためです。PETG、ASA、ABS、またはナイロンを製造する加熱ベッドファームは、同じ部屋にあるPLAファームとは大きく異なるエネルギープロファイルを持つ可能性があります。すでにマシン時間あたりの電気代を計算している場合は、その数値を時間あたりの変動費に含め、月間の電気代フィールドをゼロに設定できます。',
    },
    {
      type: 'table',
      headers: ['コスト項目', '含めるもの', '除外するもの'],
      rows: [
        ['月間固定費', '家賃、保険、インターネット、ソフトウェア、基本人件費、保管料。', 'プリンターが稼働しているときのみ使用される材料。'],
        ['月間電気代', 'プリンターのエネルギー、乾燥機、洗浄機、二次硬化機、換気、空調の割合。', '関係のない家庭用またはオフィス用の電力。'],
        ['時間あたりの変動費', 'フィラメント、レジン、ノズル、メンテナンス用消耗品、時間あたりの摩耗手当。', '一回限りのマシン購入費用。'],
        ['初期投資', 'プリンター、ラック、セットアップ、工具、乾燥機、ファーム管理ハードウェア。', '立ち上げ後に繰り返し発生する月間コスト。'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '月間総時間', definition: '稼働率および印刷失敗率の調整前の理論上のマシン容量。' },
        { term: '実質稼働時間', definition: '稼働率と成功率を適用した後に残る容量。' },
        { term: '回収期間', definition: '月間純利益が初期投資を回収するのに必要な月数。' },
        { term: '年換算ROI', definition: '12ヶ月分の純利益を初期投資額で割った割合。' },
        { term: '時間あたりの変動費', definition: '実質的な印刷時間に応じて変動する消耗品およびメンテナンスの手当。' },
      ],
    },
    { type: 'title', text: 'マシン時間あたりの販売単価の設定', level: 2 },
    {
      type: 'paragraph',
      html: '時間あたりの販売単価は、1実質マシン時間に対して顧客に請求される金額です。見積もりに直接表示するか、材料、労力、仕上げ、梱包、およびマージンを含む価格式の中に組み込むことができます。重要なのは一貫性です。時間単価に材料費を含める場合は、時間あたりの変動費として同じ材料費を二重に追加しないでください。時間単価がマシン時間のみを指す場合は、材料費と労力費がビジネスモデルの他の場所で適切に表現されていることを確認してください。',
    },
    {
      type: 'paragraph',
      html: '単発の仕事で競争力があるように見える価格設定が、ファーム規模では失敗することがあります。長い印刷は、他の仕事に対応できたはずの容量を占有します。細かいレイヤー高さ、遅い材料、背の高い部品、およびサポートの多い形状はすべてスループットを低下させます。したがって、プリントファーム収益性計算ツールは、平均ジョブ期間、平均時間単価、顧客獲得率、および月間注文量などの実際の見積もりデータと一緒に使用する必要があります。',
    },
    {
      type: 'proscons',
      title: 'プリントファームにおける時間単価設定',
      items: [
        { pro: 'マシンの占有状況を可視化し、長い印刷の価格設定が安くなりすぎるのを防ぎます。', con: '軽量な部品の印刷に何時間もかかる場合、顧客に説明が必要になることがあります。' },
        { pro: '内部のROI計画や容量決定にうまく機能します。', con: '材料、労力、仕上げ、およびリスクの価格設定に代わるものではありません。' },
        { pro: 'プリンタータイプや稼働率シナリオ間の迅速な比較を可能にします。', con: '失敗率やキュー待機時間が無視されると、誤解を招く可能性があります。' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: '価格設定のチェックポイント',
      html: '<p>時間単価のわずかな変更で回収期間が完全に変わる場合、その投資は市場価格に敏感です。プリンターを追加購入する前に、実際の顧客需要に対して価格レートを検証してください。</p>',
    },
    { type: 'title', text: '回収期間と年換算ROIの解釈', level: 2 },
    {
      type: 'paragraph',
      html: '回収期間は月数で表されるため理解しやすいです。初期投資が18,000で月間純利益が3,000の場合、回収期間は6ヶ月です。月間純利益がゼロまたはマイナスの場合、現在の前提条件ではファームが投資を回収できないため、投資回収は不可能です。回収期間は、キャッシュフロー計画、機器ファイナンス、および拡張を今行うべきか需要改善後に行うべきかの決定に役立ちます。',
    },
    {
      type: 'paragraph',
      html: '年換算ROIは、1年間の純利益と初期投資を比較するため、より厳格です。回収が遅い場合、月間利益が黒字であっても年換算ROIが弱くなる可能性があります。たとえば、24,000の投資に対してコスト差し引き後の月利益が1,000のファームは、初期投資を考慮する前に年間で12,000を生み出すため、初年度のROIはマイナスのままです。それはビジネスが悪いことを自動的に意味するわけではありませんが、投資家により長い視野が必要であることを意味します。',
    },
    {
      type: 'summary',
      title: '決定ルール',
      items: [
        '回収スピードを理解するには回収期間を使用します。',
        'ファームを他の資金使途と比較するには年換算ROIを使用します。',
        '拡張を決定する前に、低い稼働率と成功率でシミュレーションを再実行してください。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'シナリオテストこそが真の価値です',
      badge: '計画',
      html: '<p>基本ケース、保守ケース、およびストレスケースを実行してください。最良 of 投資とは、楽観的なシナリオでのみ優れているものではなく、需要、失敗、または電気代が不利に動いた場合でも理解しやすい計画が立っているものです。</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
