import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = '3d-printing-cost-calculator';
const title = '3Dプリントコスト計算機：フィラメントと電気代';
const description = '3Dプリントの実際の価格を計算します。材料費、電気代、機械の減価償却費、人件費を含みます。';

const faqData = [
  {
    question: 'なぜ電気代がこれほど変動するのですか？',
    answer: '最大の電力消費は、ヒートベッドを高温に保つことによるものです。ABS（100°C）などの材料は、PLA（60°C）よりもはるかに多くの電力を消費します。また、プリンターが開放型か密閉型かによっても影響を受けます。',
  },
  {
    question: 'プリンターの消費電力を知るにはどうすればよいですか？',
    answer: 'ほとんどの家庭用プリンターは、動作中に平均100〜150Wを消費します。スマートプラグやワットチェッカーを使用すると、正確に測定できます。',
  },
  {
    question: '廃棄マージンとは何ですか？',
    answer: '完成品には含まれないフィラメントのことです。サポート材、ラフト、スカート、最初のパージなどが含まれます。現実的な計算のために、最低でも5%を見込むことをお勧めします。',
  },
];

const howToData = [
  {
    name: 'テクニカルデータを入力',
    text: 'パーツの重量（Curaなどのスライサーソフトで算出）、プリント時間、マシンの消費電力を入力します。',
  },
  {
    name: '経済的コストを設定',
    text: 'スプールの価格、電気料金、および自分の手作業の時給を設定します。',
  },
  {
    name: '利益を分析',
    text: 'マージンのスライダーを動かして推奨販売価格を確認し、円グラフで費用の内訳をチェックします。',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: '材料',
    partWeightLabel: 'パーツ重量（正味）',
    gramsUnit: 'グラム',
    spoolPriceLabel: 'スプール価格（1kg）',
    spoolPriceUnit: '円/kg',
    wasteMarginLabel: '廃棄マージン：',
    energyTitle: 'エネルギーと時間',
    printTimeLabel: 'プリント時間',
    hoursUnit: '時間',
    averagePowerLabel: '平均消費電力',
    wattsUnit: 'ワット',
    electricityRateLabel: '電気料金単価',
    kwhPriceUnit: '円/kWh',
    amortizationTitle: '減価償却と人件費',
    machineCostHourLabel: '1時間あたりの機械コスト',
    priceHourUnit: '円/h',
    laborCostHourLabel: '人件費（手作業）',
    minutesUnit: '分',
    manufacturingCostLabel: '製造コスト',
    suggestedPriceLabel: '推奨価格（+{margin}%）',
    costBreakdownTitle: 'コスト内訳',
    plasticLabel: 'プラスチック',
    electricityLabel: '電力',
    machineLabel: '機械',
    laborLabel: '人件費',
    proTip: 'ABSのためにヒートベッドを100°Cに加熱すると、PLAと比較して電気代が2倍になる可能性があることをご存知ですか？失敗も忘れずにカウントしましょう。10%のパーツが失敗する場合、実際のコストは10%高くなります。',
  },
  seo: [
    {
      type: 'title',
      text: '3Dプリントの真のコストを計算する：フィラメント以外の要素',
      level: 1,
    },
    {
      type: 'paragraph',
      html: 'アディティブ・マニュファクチャリング（積層造形）の世界に足を踏み入れると、ノズルから出るプラスチックだけがコストだと思われがちです。しかし、これをビジネスにしたい場合や、単に趣味をより良く管理したい場合は、一見しただけでは見えない詳細にこそ<strong>収益性</strong>が隠れていることを理解する必要があります。',
    },
    {
      type: 'title',
      text: '3Dプリントにおける4つのコストの柱',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当計算機では、最終的な価格を4つの主要な領域に分けて算出します。',
    },
    {
      type: 'summary',
      items: [
        '材料費と廃棄分：パーツ自体の重量だけでなく、サポート、スカート、パージに使用されるプラスチックも含みます。プリント失敗の可能性を考慮して、常に5〜10%のマージンを追加することをお勧めします。',
        '消費電力：3DプリンターがPLAを印刷する場合（ベッド温度60°C）と、ABSやナイロンを印刷する場合（ベッド温度100°C以上）では、消費電力が異なります。大きなパーツの場合、kWhあたりの価格が大きな違いを生むことがあります。',
        'マシンの減価償却費：プリンターが稼働している1時間ごとに、その構成部品（ベルト、ファン、ノズル）は摩耗します。1時間あたりの少額のコストを含めることで、将来の修理費用を賄うことができます。',
        '人件費：あなたの時間は最も貴重なものです。ファイルの作成準備、ベッドのクリーニング、パーツの後処理なども計算に入れなければなりません。',
      ],
    },
    {
      type: 'title',
      text: '減価償却費を計算するには？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'シンプルな方法は、プリンターの購入価格を推定耐用時間（時間）で割ることです。例えば、プリンターが6万円で、大規模な改修が必要になるまでに少なくとも2000時間稼働すると予想される場合、その減価償却費は<strong>1時間あたり30円</strong>となります。',
    },
    {
      type: 'tip',
      title: '電気代を節約する',
      html: '<p>大量にプリントする場合は、エンクロージャー（筐体）でプリンターを囲うことを検討してください。これはテクニカル素材のプリントを助けるだけでなく、熱を保持し、ヒートベッドが温度を維持するために消費するエネルギーを大幅に削減できます。</p>',
    },
    {
      type: 'title',
      text: '販売価格の戦略',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ベースコストがわかったら、マージンを決める必要があります。オンデマンド3Dプリントの世界では、予期せぬ失敗のリスクや商業的利益をカバーするために、総コストに対して50〜100%のマージンを乗せるのが一般的です。パーツに手作業によるサンディングや塗装作業が多く必要な場合は、そのマージンをさらに高く設定すべきです。',
    },
    {
      type: 'summary',
      items: [
        '時間に基づく価格設定：純粋なプリント受託サービスに最適です。',
        'グラムに基づく価格設定：大量生産されるが単純なパーツに適しています。',
        '価値に基づく価格設定：デザインが一点物である場合、価格はコストだけでなく、クライアントが支払う価値に見合ったものであるべきです。',
      ],
    },
  ],
  faqTitle: '3Dコストに関するよくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献とリソース',
  bibliography: [
    {
      name: 'PrusaPrinters: 3Dプリントコストの計算',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: 材料とコストの見積もり',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: アディティブ・マニュファクチャリング・コストガイド',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
