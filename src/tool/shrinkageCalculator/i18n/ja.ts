import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = '3d-printing-shrinkage-calculator';
const title = '3Dプリント収縮率計算機：スケール係数と収縮';
const description = '熱収縮を補正して正確な寸法を得るために、材料（ABS、ナイロン、ASAなど）に基づいて3Dデザインをどの程度スケールアップすべきかを計算します。';

const faqData = [
  {
    question: 'なぜABSはPLAよりも収縮するのですか？',
    answer: 'ABSは非晶性ポリマーであり、押し出しにより高い温度を必要とします。250°Cから室温まで冷却される際、温度差が大きいため、分子がPLAよりも激しく密集し、収縮が大きくなります。',
  },
  {
    question: '手動キャリブレーションはどのような時に使用すべきですか？',
    answer: 'フィラメントのブランドを変更した時や、0.1mm以下の機械的公差が必要な時に使用してください。収縮率は、同じブランドでも色によって異なることがあります。',
  },
  {
    question: 'インフィルは収縮に影響しますか？',
    answer: 'はい。インフィル密度が高いほど、冷却中にパーツの中心に向かって力を及ぼす材料の量が増えます。中空のパーツよりも、中身が詰まったパーツの方がわずかに収縮しやすい傾向があります。',
  },
];

const howToData = [
  {
    name: '材料を選択',
    text: 'プリセットされた材料（ABS、ASA、ナイロンなど）を選択して、業界の標準収縮率を適用します。',
  },
  {
    name: '実物パーツでキャリブレーション',
    text: '完全な精度が必要な場合は、100mmの立方体をプリントし、冷却後に測定して、キャリブレーションモードにデータを入力します。',
  },
  {
    name: '係数をスライサーにコピー',
    text: '算出されたスケール（%）をコピーし、スライサーソフト（Cura、PrusaSlicerなど）の対応する軸に適用します。',
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

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: '材料設定',
    tabCalibration: '手動キャリブレーション',
    labelDefaultMaterial: 'デフォルト材料',
    labelEstimatedShrinkage: '推定収縮率',
    unitPercent: '%',
    labelDesignSize: 'デザイン寸法（スライサー）',
    labelRealSize: '実測寸法（プリント後）',
    unitMm: 'mm',
    labelAxesCompensation: '各軸の補正',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '※Z軸は層間の密着により、通常は収縮が少なくなります。',
    labelRecommendationTitle: '技術アドバイス',
    labelResultSlicerScale: 'スケール比率（スライサー設定用）',
    labelResultFactor: '倍率（乗数）',
    btnCopy: '比率をコピー',
    btnCopied: 'コピー完了！',
    recommendations: {
      'ABS': '収縮による反りを最小限に抑えるために、チャンバー温度を少なくとも40°C以上に保つことをお勧めします。',
      'ASA': '耐候性に優れています。構造的な接着を改善するために、冷却ファンの回転数を抑えてください。',
      'Nylon': '非常に吸湿性が高い材料です。気泡を防ぐため、プリント前に80°Cで6〜8時間乾燥させてください。',
      'PETG': '収縮は少なめです。密度の高いパーツで過剰押し出しが見られる場合は、フロー（押し出し倍率）を95〜98%に設定してください。',
      'PLA': '収縮は極めてわずかです。細かいディテールを出すために、十分なエアフロー（ファン100%）を確保してください。'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3Dプリント収縮率計算機：寸法精度の追求',
      level: 1,
    },
    {
      type: 'paragraph',
      html: '<strong>3Dプリント</strong>愛好家であれば、次のような問題に直面したことがあるはずです。完璧な寸法（例えば20x20x20 mmの立方体）でデザインし、プリントした。しかし、デジタルノギスで測ってみると19.7 mmしかなかった。何が起きたのか？その答えは<strong>材料の収縮</strong>です。',
    },
    {
      type: 'paragraph',
      html: '収縮は、熱可塑性プラスチックが溶融状態（高温）から室温の固体状態に変化する際に起こる避けられない物理現象です。冷却されるにつれて分子が再編され「引き締まる」ため、パーツ全体の体積が減少します。当社の<strong>収縮率計算機</strong>は、この変化を予測してスライサーのスケールを調整し、一発でパーツをフィットさせるために役立ちます。',
    },
    {
      type: 'title',
      text: 'なぜプラスチックは収縮するのか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FDM（熱溶解積層法）プリントでは、高温（200〜300°C）のプラスチックを層状に積み上げていきます。材料が冷える際、<strong>熱膨張係数</strong>として知られる現象が起こります。基本的には熱エネルギーが分子を引き離していますが、そのエネルギーが消えると分子間力が働き、分子同士が近づきます。',
    },
    {
      type: 'paragraph',
      html: 'すべての材料が同じように振る舞うわけではありません。非晶性プラスチック（PLAなど）は構造が無秩序で、収縮が少ない傾向にあります。対照的に、結晶化しやすいプラスチックや非常に高い温度を必要とするプラスチック（ABSやナイロンなど）は、収縮がより激しく、コントロールが難しくなります。',
    },
    {
      type: 'title',
      text: '一般的な材料とその収縮範囲',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS（アクリロニトリル・ブタジエン・スチレン）：0.8%〜2.0%。高い収縮率のため、最も扱いにくい材料の一つで、しばしば「反り」（角の変形）の原因となります。',
        'ASA：0.5%〜0.9%。ABSの耐UV代替品で、収縮はやや抑えられています。',
        'ナイロン（PA）：0.7%〜2.5%。カーボンやガラスファイバーの含有量によって、収縮率が劇的に変化することがあります。',
        'PETG：0.2%〜0.5%。寸法安定性が非常に高く、ABSほどの耐熱性を必要としない機械部品に理想的です。',
        'PLA：0.1%〜0.3%。使いやすさのゴールドスタンダード。ほとんどの用途で収縮はほぼ無視できるレベルです。',
      ],
    },
    {
      type: 'title',
      text: 'スケール係数の計算方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '多くのユーザーは、単に「不足分を追加する（2%足りなければ102%にする）」という間違いを犯します。しかし、数学的に減少分を完全に補正するには、スケールはわずかに異なります。当計算機で使用している正しい公式は次の通りです。： <br><strong>スケール係数 = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: 'ここで <strong>S</strong> は小数で表した収縮率です（例：2%なら0.02）。例えば、収縮率が2%の材料の場合、スケール係数は1.0204となり、スライサー（Cura、PrusaSlicer、Bambu Studioなど）ではスケールを <strong>102.04%</strong> に設定する必要があります。',
    },
    {
      type: 'title',
      text: '手動キャリブレーション：設計寸法 vs 実測寸法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '逆キャリブレーションのプロセスは簡単です。既知の寸法（例：100mmの立方体）を持つテストオブジェクトをプリントします。完全に冷めるまで待ち（少なくとも30分待つことが極めて重要です）、デジタルノギスでパーツを測定します。計算機に両方の値を入力すれば、そのフィラメントスプールに最適な調整比率が算出されます。',
    },
    {
      type: 'title',
      text: '不均一な収縮：X、Y、Z軸の問題',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3Dプリントにおいて、物理現象はすべての方向で同じではありません。層を積み重ねていくため、Z軸の<strong>層間密着</strong>が通常、垂直方向の収縮を制限します。一般的に、水平面（XおよびY軸）の測定値は、高さ（Z軸）よりも大きな補正を必要とすることがわかっています。',
    },
    {
      type: 'tip',
      title: 'プロからのヒント',
      html: '<p>ナイロンやテクニカル素材を扱う場合は、常にプリントから24時間後に測定を行ってください。一部のプラスチックは環境中の水分を吸収し、冷却後にわずかに「膨張」して最終的な寸法が変わることがあります。</p>',
    },
    {
      type: 'title',
      text: '最終的な精度に影響する要因',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'エクストルーダー温度：温度が高いほど材料は膨張した状態で押し出されますが、通常はより急激な冷却による影響も受けます。',
        'ベッド温度：ヒートベッドは、パーツの底部が上部よりも早く収縮するのを防ぎ、反りを軽減します。',
        'インフィル密度：密度が非常に高いパーツはプラスチックの質量が多く、中心に向かって内部的な収縮力を及ぼします。',
        'パーツ冷却ファン：ABSなどの材料では、ファンを強くしすぎるとクラック（割れ）や、過度で不規則な収縮を引き起こす可能性があります。',
      ],
    },
  ],
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Simplify3D: 寸法精度と収縮について',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: 材料表と収縮係数',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: 3Dプリント材料の収縮を理解する',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
