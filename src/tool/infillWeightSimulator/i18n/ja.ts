import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-print-weight-infill-percentage-calculator';
const title = '3Dプリント重量 infill 割合計算機';
const description =
  '100% infill の参照重量から、infill の割合とパターンを変更したときのパーツ重量、節約フィラメント、材料費を推定します。';

const faqData = [
  {
    question: '100% infill の重量から3Dプリント重量を推定できますか？',
    answer:
      'はい。ただし、シェル、壁、天面、底面は内部 infill から分離して推定する必要があります。外周はまだ材料を使用するため、0% infill でもパーツが無重量になるわけではありません。',
  },
  {
    question: 'infill パターンによって推定重量が変わるのはなぜですか？',
    answer:
      '異なるパターンは同じ公称密度でも異なるツールパス長を生成します。ラインとコンセントリックのパターンは通常より軽く、ハニカム、キュービック、トライアングルは内部壁長を増やす傾向があります。',
  },
  {
    question: 'スライサーの重量はこの計算機より正確ですか？',
    answer:
      'スライサーは、モデル、ノズル、押出幅、壁数、天面、材料プロファイルがわかればより正確です。この計算機は、多くのバージョンを再スライスする前の迅速な計画用に設計されています。',
  },
  {
    question: 'どのシェル割合を使用すべきですか？',
    answer:
      '多くの装飾用または中サイズのFDMパーツでは、20〜35%のシェルシェアが実用的な開始範囲です。小さなパーツ、薄いオブジェクト、多くの穴があるパーツは、より高いシェルシェアになる可能性があります。',
  },
];

const howToData = [
  {
    name: '100% infill の参照から開始',
    text: 'スライサーが同じモデルを100% infill でレポートした重量を使用するか、既知の完全密度の参照プリントを計量します。',
  },
  {
    name: '目標 infill とパターンを選択',
    text: 'infill スライダーを動かし、使用予定のスライサー設定に最も近いパターンを選びます。',
  },
  {
    name: 'シェルと廃棄の仮定を調整',
    text: '薄いまたは周辺重量の大きいモデルではシェルシェアを増やし、パージ、スカート、ブリム、サポート、失敗スタートの廃棄を追加します。',
  },
  {
    name: '重量とコストの節約を確認',
    text: '最終推定重量を100% infill ベースラインと比較して、材料節約が剛性のトレードオフに見合うか判断します。',
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

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Infill重量入力',
    resultsAriaLabel: '推定プリント重量結果',
    unitSystemLabel: '単位',
    metricLabel: 'メートル法',
    imperialLabel: 'US',
    currencyLabel: '通貨',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'GBP', label: '£', symbol: '£' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '¥', symbol: '¥' },
      { code: 'INR', label: '₹', symbol: '₹' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '₽', symbol: '₽' },
      { code: 'PLN', label: 'zł', symbol: 'zł' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '₺', symbol: '₺' },
      { code: 'JPY', label: '¥', symbol: '¥' },
    ],
    fullWeightLabel: '100% infill 重量',
    fullWeightHint: '同じモデルの完全密度時のスライサー値を使用します。',
    infillLabel: '目標 infill',
    patternLabel: 'Infill パターン',
    patternOptions: [
      { value: 'lines', label: 'ライン - 軽量パス' },
      { value: 'grid', label: 'グリッド - スライサーベースライン' },
      { value: 'triangles', label: 'トライアングル - 剛性セル' },
      { value: 'gyroid', label: 'ジャイロイド - 滑らかな格子' },
      { value: 'cubic', label: 'キュービック - 3D剛性' },
      { value: 'honeycomb', label: 'ハニカム - 高密度壁' },
      { value: 'concentric', label: 'コンセントリック - 輪郭追従' },
    ],
    shellShareLabel: 'シェルシェア',
    shellShareHint: 'infill とともにスケールしない壁、天面、底面、中実フィーチャー。',
    spoolPriceLabel: 'フィラメント価格',
    wasteLabel: '廃棄',
    estimatedWeightLabel: '推定パーツ重量',
    filamentSavedLabel: '節約フィラメント',
    materialCostLabel: '材料費',
    costSavedLabel: '節約コスト',
    effectiveDensityLabel: '実効密度',
    shellLabel: 'シェル',
    infillCoreLabel: 'Infill コア',
    patternImpactLabel: 'パターン乗数',
    comparisonLabel: 'ベースライン比較',
    fullInfillLabel: '100% infill',
    targetInfillLabel: '目標設定',
    insightLow: '非常に低い infill は多くのフィラメントを節約できますが、天面、ネジボス、クリップ、荷重域には追加の壁やローカル修飾子が必要になる場合があります。',
    insightBalanced: 'これは多くの外観用および軽量機能プリントのバランスの取れた計画ゾーンです。シェルが形状を支え、infill が剛性とコストを制御します。',
    insightHigh: '高い infill は節約ギャップを急速に狭めます。どこでも高密度 infill を使用する前に、より多くの壁、より強いパターン、または材料の選択を検討してください。',
  },
  seo: [
    { type: 'title', text: '3Dプリント重量 infill 割合計算機の仕組み', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3Dプリント重量 infill 割合計算機</strong>は、モデルが100%未満の内部密度で印刷されたときに残るプラスチックの量を推定します。重要なのは、FDM重量は全重量に infill 割合を単純に掛けたものではないということです。20% infill で印刷されたモデルは、通常、完全密度バージョンの20%の重さにはなりません。壁、天面、底面、小さな中実領域、ブリム、サポートインターフェースが依然としてフィラメントを消費するからです。この計算機は、100% infill での既知のまたはスライサーレポートの重量から開始し、設定可能なシェルシェアを分離してから、目標 infill とパターン動作によって内部コアをスケーリングします。',
    },
    {
      type: 'paragraph',
      html: 'この方法は、ファイルを何度も再スライスする時間を費やす前の迅速な比較のために設計されています。完全密度のPETGブラケットが240gと推定される場合、20%ジャイロイドに変更しても48gのパーツにはならない可能性があります。28%のシェルシェアでは、内部密度をカウントする前に外周質量がすでに約67gになります。infill コアは、選択した密度とパターン乗数に従って材料を追加します。結果は、線形 infill 計算よりも現実的でありながら、初期の決定には十分に高速な計画推定値です。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: '多くの中程度FDMパーツの典型的なシェルシェア', icon: 'mdi:cube-outline' },
        { value: '0.88x', label: 'コンセントリック infill の軽量輪郭乗数', icon: 'mdi:chart-line' },
        { value: '1.16x', label: 'ハニカム計画用の高密度パス乗数', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: '節約のベースラインとして使用される参照重量', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: '参照には同じスライサープロファイルを使用',
      html: '<p>最もクリーンな推定を得るには、目標プリントに使用するのと同じノズル、押出幅、壁数、天面、底面、材料密度、サポート設定で100% infill 重量を生成してください。これらの設定を変更するとシェル質量が変わるため、infill のみの比較の意味が薄れます。</p>',
    },

    { type: 'title', text: 'Infill 重量が線形でない理由', level: 2 },
    {
      type: 'paragraph',
      html: '<em>Infill 割合</em>という用語は直接的な密度値のように聞こえますが、スライサーは外周と中実表面が生成された後に残った内部領域にのみそれを適用します。2つの壁と6つの天面を持つ単純なキューブは大きな内部容量を持つ可能性があるため、infill 割合は重量に強く影響します。薄い電話スタンド、多くの穴があるギアハウジング、または細い四肢を持つミニチュアは、周辺形状が多すぎるため、infill を下げても期待よりも節約効果が小さくなる可能性があります。これが、計算機がシェルシェアを隠さずに公開する理由です。',
    },
    {
      type: 'table',
      headers: ['モデルタイプ', '推定シェルシェア', '節約への意味'],
      rows: [
        ['大型長方形エンクロージャ', '15-25%', 'ほとんどの質量は内部容量なので、infill が重量を強く変える。'],
        ['装飾フィギュアまたは有機モデル', '25-45%', '多くの曲線と狭い領域が周辺重量の大きい形状を作る。'],
        ['薄型ブラケットまたはパネル', '35-60%', '壁と表面が支配的。infill 削減の節約プラスチックは少ない可能性。'],
        ['小型機械クリップ', '45-70%', 'モデルは外周だけでほぼ中実になる可能性がある。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '推定が重すぎるように見える場合',
      badge: 'シェルシェアを確認',
      html: '<p>10% infill 設定でも推定重量が高い場合、シェルシェアが大きい可能性があります。小さなまたは薄いパーツではそれが正しい場合があります。壁数、天面と底面の厚さ、モデルに多くの分離した島や狭いリブがあるかどうかを確認してください。</p>',
    },
    {
      type: 'summary',
      title: '実用的な解釈',
      items: [
        'Infill 割合はプリント全体ではなく内部コアのみに影響する。',
        '0% infill のパーツにも壁、スキン、シーム、時には小さな中実フィーチャーがある。',
        '全重量参照、シェルシェア、パターン選択、廃棄マージンを組み合わせることで、より良い計画数値が得られる。',
      ],
    },

    { type: 'title', text: 'Infill パターン重量乗数', level: 2 },
    {
      type: 'paragraph',
      html: '2つのプリントが両方とも25% infill に設定されていても、ツールパス形状が変わるため異なる量のフィラメントを使用する可能性があります。ラインとコンセントリックのパターンは、交差構造の一部を避けるため、内部パスが軽くなることがよくあります。グリッド、トライアングル、キュービック、ジャイロイド、ハニカムは、異なる量のオーバーラップ、方向補強、パス長を生成します。計算機はこれを、パーツ全体ではなく内部コアに適用される小さな<strong>パターン乗数</strong>でモデル化します。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'ラインとコンセントリック',
          description: '均一な剛性よりも最小重量と高速印刷が重要な場合に有用。',
          icon: 'mdi:format-line-spacing',
          points: ['低いパス密度', '装飾パーツに適している', '方向強度が不均一になる可能性'],
        },
        {
          title: 'グリッドとジャイロイド',
          description: '剛性が重要な一般的な外観用および機能プリントのバランスの取れた選択肢。',
          icon: 'mdi:grid',
          highlight: true,
          points: ['予測可能なスライサーベースライン', '良好な剛性重量トレードオフ', 'ジャイロイドは荷重を均等に分散'],
        },
        {
          title: 'キュービック、トライアングル、ハニカム',
          description: '剛性を向上させる可能性があるがフィラメント節約を減らす、より重い計画選択肢。',
          icon: 'mdi:hexagon-outline',
          points: ['より多くの内部壁長', 'より良い多方向剛性', '印刷時間が長くなるのが一般的'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'パターン選択のトレードオフ',
      items: [
        { pro: '軽量パターンは材料費を削減し、印刷時間を短縮できる。', con: '弱い方向や天面サポートの低下を生む可能性がある。' },
        { pro: '高密度パターンは剛性感を向上させ、曲げを減らす。', con: '弱い壁設計を解決せずに、より高い infill のコストに近づく可能性がある。' },
        { pro: 'ジャイロイドは多くの方向に荷重を均等に分散する。', con: '保守的な加速度設定のマシンでは印刷が遅くなる可能性がある。' },
      ],
    },
    {
      type: 'message',
      title: 'パターン乗数は計画上の仮定です',
      ariaLabel: 'パターン乗数に関する注記',
      html: '<p>スライサーエンジンはパターンを異なる方法で実装します。乗数を初期推定値として扱い、実際のスライサービューと材料使用量レポートで重要な生産ジョブを確認してください。</p>',
    },

    { type: 'title', text: 'フィラメントとコスト節約の計算', level: 2 },
    {
      type: 'paragraph',
      html: '材料費の推定は、最終グラムにスプール価格（kgあたり）を掛けます。計算機が126gの印刷を予測し、スプールが1kgあたり24ドルの場合、プラスチック部分は機械時間、電気代、人件費、梱包、失敗印刷の前に約3.02ドルになります。節約コストは、同じ廃棄率を使用して同じモデルを100% infill ベースラインと比較します。これは、見積もり、バッチ計画、より重い infill 設定が追加材料に見合うかどうかの判断に役立ちます。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'パージライン、スカート、ブリム、サポート、ラフト、色変更、短い失敗スタートに廃棄率を使用する。',
        '単一プロトタイプの場合、5-10%の廃棄マージンがゼロよりも通常は現実的。',
        'サポートや研磨材を使用した生産バッチでは、複数ジョブにわたる実際の残りと失敗重量を記録する。',
        'PLA、PETG、ABS、ASA、ナイロン、充填コンポジットを比較する場合、一般的な平均ではなく正確な材料のスプール価格を使用する。',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: '例：高密度プロトタイプから生産 infill へ',
      html: '<p>100% infill のプロトタイプは240gです。28%のシェルシェア、20%ジャイロイド、6%廃棄、24ドル/kgのフィラメントで、推定値は48gではなく100グラム台前半になります。この差は40個の見積もりを作成する際に重要です。小さなパーツあたりの誤差がスプール全体のプラスチックになります。</p>',
    },
    {
      type: 'table',
      headers: ['入力', '重要な理由', 'よくある間違い'],
      rows: [
        ['100%重量', '最大材料ベースラインを定義する。', '目標プリントと異なる壁数を使用する。'],
        ['目標 infill', '内部コア密度を制御する。', '20% infill が総重量の20%を意味すると想定する。'],
        ['パターン', 'ツールパス長と剛性を変更する。', 'スライサープリセット比較時にパターンを無視する。'],
        ['廃棄', '最終パーツ外で使用される実際のフィラメントを追加する。', 'サポートと失敗スタートを忘れる。'],
      ],
    },

    { type: 'title', text: '弱いパーツにせず重量節約のための infill 選択', level: 2 },
    {
      type: 'paragraph',
      html: '重量節約は、パーツがまだその機能を果たす場合にのみ価値があります。外観モデル、展示用プロップ、コスプレパーツ、カバーには、十分な天面を備えた低 infill で完璧な場合があります。ブラケット、治具、ネジ付きエンクロージャ、スナップフィーチャー、熱や衝撃にさらされるパーツの場合、最善の改善は単に全体的な infill を上げるよりも、多くの壁や局所的な補強であることがよくあります。4つの壁と20%ジャイロイドのパーツは、2つの壁と50% infill のパーツよりも適切な場所で強くなることができます。',
    },
    {
      type: 'glossary',
      items: [
        { term: 'シェルシェア', definition: '壁、天面、底面、避けられない中実形状に属する完全密度重量の部分。' },
        { term: '公称 infill', definition: 'シェル生成後にスライサーで内部領域用に選択された割合。' },
        { term: '実効密度', definition: 'シェルシェア、infill 割合、パターン乗数を組み合わせた後の完成プリントの推定総密度。' },
        { term: '廃棄マージン', definition: 'パージ、ブリム、サポート、テスト、失敗スタートなどの非パーツ材料に使用される追加フィラメント。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '重量節約を唯一の設計基準にしないでください',
      badge: '機能プリント',
      html: '<p>層線を横切って荷重がかかるパーツ、ねじインサート付きパーツ、ネジ圧縮のあるパーツは、別途機械的思考が必要です。Infill は役立ちますが、壁厚、方向、材料、温度、応力集中は密度だけよりも重要であることがよくあります。</p>',
    },
    {
      type: 'summary',
      title: '迅速な決定ルール',
      items: [
        '装飾プリント：最初に infill を減らし、次に天面品質を確認する。',
        '軽量機能プリント：高い infill の前にバランスの取れたパターンと十分な壁を使用する。',
        'ブラケットと治具：局所修飾子で穴、コーナー、荷重経路を補強する。',
        'バッチジョブ：材料購入前にスライサーで最終推定を確認する。',
      ],
    },

    { type: 'title', text: '計算機を信頼すべき時と再スライスすべき時', level: 2 },
    {
      type: 'paragraph',
      html: 'この計算機は、迅速な推定、初期見積もり、材料購入、スライサーを繰り返し開かずに多くの infill オプションを比較するのに最適です。寸法設定が変更される場合、スライサーの代わりにはなりません。ノズル直径、押出幅、壁数、天面厚さ、底面厚さ、アダプティブレイヤー、サポートスタイル、アイロニング、ベースモード、材料密度を変更する場合、100%ベースラインとシェルシェアを更新する必要があります。',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        'モデルとプロファイルがほとんど固定されていて密度やパターンを探求している場合は計算機を使用する。',
        '壁数、サポート生成、ノズルサイズ、材料プロファイルが変更された場合は再スライスする。',
        '生産レベルのコスト記録や在庫予測が必要な場合は完成パーツを計量する。',
        '繰り返しジョブの実際のグラムを記録する。実際のデータはシェルシェアの仮定をすぐに改善する。',
      ],
    },
    {
      type: 'tip',
      title: '見積もりのための信頼性の高いワークフロー',
      html: '<p>完全密度のスライサー参照を作成し、この計算機でいくつかの infill オプションを推定し、最も有望な2つを選択して、それらの最終候補のみを再スライスします。これにより、見積もりを迅速に保ちながら、最終価格をスライサー固有の材料レポートに基づかせることができます。</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
