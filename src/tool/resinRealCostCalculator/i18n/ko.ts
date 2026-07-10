import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinRealCostCalculatorUI } from '../ui';

const slug = 'real-resin-cost-calculator-sla-dlp';
const title = 'SLA 및 DLP 출력을 위한 실제 레진 비용 계산기';
const description = '밀도 변환, 슬라이서 볼륨, 복잡한 SLA 및 DLP 부품에 대한 10~15% 폐기물 보정을 통해 이론적 및 실제 레진 비용을 계산합니다.';

const faqData = [
  {
    question: '실제 레진 비용이 슬라이서 비용보다 높은 이유는 무엇인가요?',
    answer: '슬라이서는 일반적으로 모델과 서포트에 경화된 순수 레진만 보고합니다. 빌드 플레이트에 남은 레진, 중공 벽 내부에 갇힌 레진, 세척 손실, 실패한 서포트, 또는 깨끗이 다시 부을 수 없는 잔류물은 항상 고려되지 않습니다.',
  },
  {
    question: '그램과 밀리리터 중 무엇을 입력해야 하나요?',
    answer: '슬라이서가 내보내는 단위를 사용하세요. 그램으로 보고하는 경우, 병이나 기술 데이터 시트의 레진 밀도를 입력하면 계산기가 질량을 부피로 변환한 후 인쇄 가격을 계산합니다.',
  },
  {
    question: '어떤 복잡도 계수를 사용해야 하나요?',
    answer: '단순 서포트가 있는 솔리드 부품에는 낮음, 일반적인 미니어처와 기능성 레진 부품에는 중간, 중공 부품, 고밀도 서포트, 캐비티 및 인쇄 후 액체 레진을 보유하는 부품에는 높음을 사용하세요.',
  },
  {
    question: '알코올, 장갑, 필터 또는 기계 시간이 포함되나요?',
    answer: '아니요. 이 도구는 레진 재료 비용만 분리합니다. 소모품, 인건비, 후경화 에너지, 실패 및 기계 감가상각비는 더 광범위한 작업 견적에 추가해야 합니다.',
  },
];

const howToData = [
  {
    name: '병 데이터 입력',
    text: '병의 순 가격, 공칭 부피(밀리리터), 레진 데이터 시트 또는 라벨에 표시된 밀도를 추가합니다.',
  },
  {
    name: '슬라이서 사용량 붙여넣기',
    text: 'Lychee, Chitubox, PrusaSlicer 또는 기타 슬라이서에서 내보낸 모델의 레진 사용량을 입력하고 그램 또는 밀리리터를 선택합니다.',
  },
  {
    name: '복잡도 선택',
    text: '낮음, 중간 또는 높음 복잡도를 선택하여 슬라이서 볼륨에 10%, 12.5% 또는 15%의 폐기물 보정을 적용합니다.',
  },
  {
    name: '이론적 비용과 실제 비용 비교',
    text: '이론적 비용은 슬라이서 비교에, 실제 보정 비용은 견적, 배치 및 레진 재고 계획에 사용합니다.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<ResinRealCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    bottlePanel: '레진 병',
    modelPanel: '슬라이서 모델',
    resultPanel: '실제 레진 비용',
    unitSystemLabel: '단위계',
    metricLabel: '미터법',
    imperialLabel: 'US',
    currencyLabel: '통화',
    currencyOptions: [
      { code: 'EUR', label: '€', symbol: '€' },
      { code: 'USD', label: '$', symbol: '$' },
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
    bottlePriceLabel: '병 가격',
    bottleVolumeLabel: '병 부피',
    resinPresetLabel: '레진 프리셋',
    resinPresetOptions: [
      { label: '사용자 설정 / 수동 밀도', density: '' },
      { label: '일반 표준 레진 - 1.10 g/cm3', density: '1.10' },
      { label: '일반 수세용 레진 - 1.08 g/cm3', density: '1.08' },
      { label: '일반 ABS 라이크 레진 - 1.10 g/cm3', density: '1.10' },
      { label: '일반 터프 레진 - 1.12 g/cm3', density: '1.12' },
      { label: '일반 플렉시블 레진 - 1.05 g/cm3', density: '1.05' },
      { label: '일반 고온 레진 - 1.15 g/cm3', density: '1.15' },
      { label: '일반 캐스터블 레진 - 1.12 g/cm3', density: '1.12' },
      { label: '일반 세라믹 충전 레진 - 1.35 g/cm3', density: '1.35' },
      { label: 'Anycubic Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Anycubic ABS-Like - 1.10 g/cm3', density: '1.10' },
      { label: 'Elegoo Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Elegoo ABS-Like - 1.05 g/cm3', density: '1.05' },
      { label: 'Siraya Tech Fast - 1.09 g/cm3', density: '1.09' },
      { label: 'Siraya Tech Blu - 1.12 g/cm3', density: '1.12' },
      { label: 'Phrozen Aqua Gray 4K - 1.10 g/cm3', density: '1.10' },
      { label: 'Formlabs Standard - 1.10 g/cm3', density: '1.10' },
      { label: 'Formlabs Tough 2000 - 1.18 g/cm3', density: '1.18' },
    ],
    densityLabel: '레진 밀도 (g/cm3)',
    modelAmountLabel: '슬라이서 양',
    unitLabel: '양의 단위',
    mlUnit: 'ml',
    fluidOunceUnit: 'fl oz',
    gramsUnit: 'g',
    ounceUnit: 'oz',
    complexityLabel: '부품 복잡도',
    lowComplexity: '낮음',
    mediumComplexity: '중간',
    highComplexity: '높음',
    lowHint: '솔리드 부품, 가벼운 서포트, +10%',
    mediumHint: '일반적인 레진 작업, +12.5%',
    highHint: '중공 부품 또는 고밀도 서포트, +15%',
    theoreticalCostLabel: '슬라이서 비용',
    realCostLabel: '실제 비용',
    wasteCostLabel: '폐기물 보정',
    correctedVolumeLabel: '보정된 부피',
    costPerMlLabel: 'ml당 비용',
    bottlePrintsLabel: '병당 인쇄 수',
    savedSettingsLabel: '폐기물 계수',
    hollowPartTip: '드레인 구멍이 있는 중공 부품은 내벽, 캐비티, 서포트 및 세척 과정에 레진이 남아 있어 15%를 초과하는 폐기물이 발생할 수 있습니다.',
    conversionLabel: '슬라이서 순 부피',
    netFromSlicerLabel: '슬라이서 순',
    persistenceNote: '병 가격, 병 부피 및 밀도는 이 브라우저에 로컬로 저장됩니다.',
  },
  seo: [
    {
      type: 'title',
      text: 'SLA 및 DLP 레진 비용에 폐기물 보정이 필요한 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '슬라이서가 표시하는 레진 양은 유용한 출발점이지만 실제 인쇄 중 병에서 사라지는 레진 양과 같지 않습니다. SLA, MSLA, LCD 및 DLP 인쇄는 모두 액체 포토폴리머로 가득 찬 배트를 사용합니다. 부품은 층별로 경화되지만 미경화 레진은 여전히 모델, 서포트, 빌드 플레이트, 배트 필름 및 레진 풀에 열린 내부 캐비티를 코팅합니다. 슬라이서 볼륨에 병의 밀리리터당 가격을 곱하는 계산기는 깔끔한 이론적 수치를 제공합니다. 그러나 작업장 견적에는 보정된 수치가 필요합니다.',
    },
    {
      type: 'paragraph',
      html: '이 계산기는 <strong>슬라이서 비용</strong>과 <strong>실제 레진 비용</strong>을 분리합니다. 슬라이서 비용은 소프트웨어가 보고하는 순수 레진입니다. 실제 비용은 10~15%의 제어된 폐기물 계수를 적용합니다. 이 범위는 의도적으로 좁게 설정되었습니다. 일반적인 레진 취급 손실을 포함할 수 있을 만큼 높지만 재료 항목 아래에 실패, 인건비, 알코올, 장갑, 필터 또는 후경화를 숨길 만큼 높지는 않습니다. 결과는 단일 인쇄 또는 배치에 대한 실용적인 변동 재료비입니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '10%', label: '솔리드 부품 및 가벼운 서포트용 낮은 보정' },
        { value: '12.5%', label: '일반 레진 작업용 기본 보정' },
        { value: '15%', label: '캐비티 및 고밀도 서포트용 높은 보정' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '재료비와 작업비를 혼동하지 마세요',
      html: '여기서 반환되는 숫자는 레진 재료만 해당됩니다. 완전한 판매 가격에는 실패 인쇄, 세척용 알코올, 니트릴 장갑, 종이 타월, 필터, 후경화 시간, 포장, 기계 마모, 설계 시간 및 마진도 포함되어야 합니다.',
    },
    {
      type: 'title',
      text: '계산기 뒤의 공식',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '첫 번째 단계는 밀리리터당 병 가격입니다: <code>ml당_비용 = 병_가격 / 병_부피_ml</code>. 42유로에 구매한 1000ml 병의 기본 비용은 ml당 0.042유로입니다. 슬라이서가 미니어처가 38ml를 소비한다고 표시하면 이론적 레진 비용은 38 x 0.042 = 1.60유로입니다. 이 숫자는 슬라이서 내에서 방향, 중공화, 서포트 전략 및 배치를 비교하는 데 유용하지만 슬라이서가 보고하는 모든 밀리리터가 소비되는 유일한 레진이라고 가정합니다.',
    },
    {
      type: 'paragraph',
      html: '두 번째 단계는 보정된 부피를 적용합니다: <code>실제_부피 = 슬라이서_볼륨 x (1 + 폐기물_계수)</code>. 기본 12.5% 계수를 사용하면 38ml 모델이 42.75ml가 됩니다. 실제 재료비는 42.75 x 0.042유로 = 1.80유로가 됩니다. 작은 모델 하나에서는 차이가 미미하지만 미니어처 트레이, 치과 모델, 주얼리 마스터, 엔지니어링 프로토타입 또는 생산 지그를 견적할 때 눈에 띄게 됩니다.',
    },
    {
      type: 'table',
      headers: ['슬라이서 볼륨', '병 비용', '계수', '이론적 비용', '실제 비용'],
      rows: [
        ['25 ml', '42 EUR / 1000 ml', '10%', '1.05 EUR', '1.16 EUR'],
        ['80 ml', '42 EUR / 1000 ml', '12.5%', '3.36 EUR', '3.78 EUR'],
        ['150 ml', '42 EUR / 1000 ml', '15%', '6.30 EUR', '7.25 EUR'],
        ['420 ml', '42 EUR / 1000 ml', '15%', '17.64 EUR', '20.29 EUR'],
      ],
    },
    {
      type: 'tip',
      title: '생산 런에서는 부품 부피가 아닌 배치 부피를 사용하세요',
      html: '빌드 플레이트를 여러 복사본으로 채우는 경우 전체 플레이트의 슬라이서 볼륨에서 계산하세요. 서포트 타워, 공유 서포트 구조 및 방향 변경은 개별 부품에 복사본 수를 곱하는 것보다 배치를 더 효율적으로 만들 수 있습니다.',
    },
    {
      type: 'title',
      text: '올바른 복잡도 계수 선택',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '낮은 복잡도',
          description: '솔리드 부품, 단순 브래킷, 캘리브레이션 피스, 체스 말 및 서포트가 적은 모델에는 10%를 사용하세요.',
          points: ['내부 보유 적음', '낮은 서포트 밀도', '배트로 쉽게 드립백'],
        },
        {
          title: '중간 복잡도',
          description: '일반 미니어처, 치과 모델, 테이블탑 부품 및 중간 서포트가 있는 기능성 부품에는 12.5%를 사용하세요.',
          points: ['일반적인 후처리 손실', '서포트에 약간의 레진', '우수한 기본 견적 계수'],
          highlight: true,
        },
        {
          title: '높은 복잡도',
          description: '중공 쉘, 캐비티, 고밀도 서포트 포레스트, 격자 구조 및 배수 후 무거운 잔류물을 남기는 부품에는 15%를 사용하세요.',
          points: ['더 많은 갇힌 액체', '더 많은 세척 손실', '더 높은 취급 불확실성'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: '복잡도 계수는 잘못된 슬라이싱에 대한 페널티가 아닙니다. 액체 레진의 거동에 대한 보정입니다. 올바르게 기울어진 단순한 솔리드 블록은 몇 분 후에 거의 완전히 드립백될 수 있습니다. 작은 드레인 구멍이 있는 중공 조각상은 벽 내부, 서포트 주변 및 흡입 컵 근처에 레진 막을 유지할 수 있습니다. 고밀도 서포트 베이스도 기둥 사이에 레진을 보유합니다. 배트 위에서 부품을 드립시켜도 세척 용기, 장갑, 종이 타월 및 필터에 도달하는 레진은 작업에서 소비되는 실제 재료의 일부입니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '15%로 충분하지 않은 경우',
      html: '중공 모델에 배수 불량, 맹목 캐비티, 두꺼운 내부 서포트 또는 질감 있는 내부가 있는 경우 폐기물이 15%를 초과할 수 있습니다. 이 경우 이 계산기를 레진 기준선으로 취급하고 견적에 별도의 위험 허용치를 추가하세요.',
    },
    {
      type: 'summary',
      title: '빠른 계수 선택',
      items: [
        '모델이 솔리드이고 컴팩트하며 배수가 쉬운 경우 10%를 선택하세요.',
        '확실하지 않거나 혼합 트레이를 인쇄하는 경우 12.5%를 선택하세요.',
        '부품이 중공이거나 서포트가 많거나 형상이 복잡한 경우 15%를 선택하세요.',
        '새로운 레진, 새로운 방향 또는 깨지기 쉬운 고객 부품을 인쇄할 때는 별도의 실패 허용치를 추가하세요.',
      ],
    },
    {
      type: 'title',
      text: '슬라이서가 그램으로 보고할 때 밀도 사용',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 슬라이서가 레진 사용량을 밀리리터, 그램 또는 둘 다로 보고할 수 있습니다. 레진 병은 일반적으로 공칭 부피(보통 500ml, 1000ml 또는 1리터)로 판매됩니다. 슬라이서가 그램으로 출력하는 경우 계산기는 밀도를 사용하여 질량을 부피로 변환합니다: <code>부피_ml = 그램 / 밀도</code>. 레진 밀도는 일반적으로 g/cm3로 표기되며 1cm3는 1ml와 동일한 부피입니다. 밀도 1.10g/cm3의 레진은 110g이 약 100ml에 해당함을 의미합니다.',
    },
    {
      type: 'table',
      headers: ['슬라이서 질량', '밀도', '변환된 부피', '중요한 이유'],
      rows: [
        ['55 g', '1.10 g/cm3', '50.0 ml', '일반 표준 레진 추정'],
        ['55 g', '1.05 g/cm3', '52.4 ml', '낮은 밀도는 더 많은 부피를 의미'],
        ['55 g', '1.20 g/cm3', '45.8 ml', '충전형 또는 세라믹 레진은 더 조밀할 수 있음'],
      ],
    },
    {
      type: 'tip',
      title: '기술 데이터 시트에서 밀도 찾기',
      html: '일반 레진에는 프리셋 카탈로그를 사용하고 밀도 입력을 최종 정보 소스로 취급하세요. 사용 중인 레진, 색상 또는 로트가 프리셋과 다른 경우 제조업체 기술 데이터 시트의 값으로 필드를 덮어쓰세요. 모든 레진이 1.00g/ml라고 가정하지 마세요.',
    },
    {
      type: 'glossary',
      items: [
        { term: '밀도', definition: '단위 부피당 질량. 레진 비용 계산에서 슬라이서의 그램을 병의 밀리리터로 변환할 수 있습니다.' },
        { term: '이론적 비용', definition: '폐기물 보정 전, 순수 슬라이서 볼륨에 병의 ml당 비용을 곱한 값.' },
        { term: '보정된 부피', definition: '선택한 10%, 12.5% 또는 15% 폐기물 계수를 추가한 후의 모델 부피.' },
        { term: '드레인 구멍', definition: '세척 및 경화 전에 미경화 레진이 내부에서 빠져나갈 수 있도록 하는 중공 레진 부품의 개구부.' },
      ],
    },
    {
      type: 'title',
      text: '중공 레진 인쇄물이 예상보다 더 비싼 경우가 많은 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '대형 모델을 중공화하면 경화 레진 부피를 극적으로 줄일 수 있지만 숨겨진 비용이 사라지는 것은 아닙니다. 중공 벽에는 드레인 구멍이 필요하고 내부 형상은 세척 가능해야 하며 모델 내부에 갇힌 미경화 레진이 나중에 누출되거나 부품에 균열을 일으키거나 최종 경화를 방해할 수 있습니다. 슬라이서는 중공화 후 훨씬 낮은 순 부피를 표시할 수 있지만 취급 프로세스가 더 민감해집니다. 이것이 높은 복잡도가 기본적으로 15%를 사용하는 이유입니다.',
    },
    {
      type: 'proscons',
      title: '중공화 및 비용 관리',
      items: [
        { pro: '대형 전시 모델은 경화 레진을 훨씬 적게 사용할 수 있습니다.', con: '배수가 불량하면 부품 내부에 액체 레진이 남을 수 있습니다.' },
        { pro: '더 낮은 박리력이 큰 단면의 성공률을 높일 수 있습니다.', con: '추가 구멍, 플러그 및 세척 시간으로 인건비가 증가할 수 있습니다.' },
        { pro: '더 가벼운 모델은 배송 및 장착이 더 쉽습니다.', con: '벽 두께와 노출이 조정되지 않으면 얇은 벽이 실패할 수 있습니다.' },
      ],
    },
    {
      type: 'card',
      title: '실용적인 중공 인쇄 규칙',
      html: '중공 부품이 프린터에서 나온 후 정상적인 배수 후에도 계속 떨어지는 경우 높은 계수를 사용하고 드레인 구멍 배치를 점검하세요. 세척 후에도 계속 누출되는 경우 문제는 비용만이 아닙니다. 미경화 레진이 물체 내부에 남아 있기 때문에 품질 및 안전 문제가 될 수 있습니다.',
    },
    {
      type: 'title',
      text: '과소 견적 없이 슬라이서 추정치 읽기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lychee, Chitubox, PrusaSlicer 및 기타 레진 슬라이서는 메시, 서포트, 중공화 및 때로는 레진 프로파일에서 레진 사용량을 추정합니다. 이러한 추정치는 동일한 작업의 버전을 비교하기에 충분합니다. 최종 견적으로는 약한데, 사용자의 워크플로를 모르기 때문입니다. 매 작업 후 레진을 필터링하는 작업장과 동일한 레진을 배트에 유지하는 취미 사용자는 손실 양이 다릅니다. 2단계 IPA로 세척하는 사용자와 밀폐형 세척 스테이션을 사용하고 부품을 완전히 드립시킨 후 이동하는 사용자는 손실 양이 다릅니다.',
    },
    {
      type: 'list',
      items: [
        '서포트 후 전체 플레이트 추정치를 입력하고 서포트되지 않은 원래 메시 볼륨은 사용하지 마세요.',
        '병 가격과 최종 견적에 동일한 통화를 사용하세요. 계산기는 대략적인 환율 계수로 일반 통화 간에 표시된 병 가격을 변환할 수 있습니다.',
        '특수 레진 구매 시 병 가격을 업데이트하세요. 캐스터블, 플렉시블, 치과용 및 고온 레진은 표준 레진보다 몇 배 더 비쌀 수 있습니다.',
        '슬라이서 질량과 병 부피가 동일한 단위를 공유하지 않는 경우 밀도 변환을 사용하세요.',
        '특히 깨지기 쉬운 미니어처, 얇은 치과용 쉘 또는 새로운 서포트 전략을 인쇄할 때는 실패율을 별도로 유지하세요.',
      ],
    },
    {
      type: 'message',
      title: '더 나은 견적 습관',
      html: '일반적인 레진 병 데이터를 저장하고 슬라이서 추정치를 붙여넣고 복잡도를 선택한 후 두 숫자를 모두 기록하세요. 이론적 비용은 슬라이서 추정치를 설명하고 실제 비용은 재료 재고를 보호합니다.',
    },
    {
      type: 'title',
      text: '이 계산기에 포함되지 않은 항목',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '레진 인쇄에는 레진 외에도 더 많은 비용이 있습니다. 이 도구는 슬라이서 출력과 실제 병 사용량을 비교할 때 가장 과소평가되는 변동 레진 소비에 의도적으로 초점을 맞춥니다. 알코올 교체, 세제, 수처리, 종이 타월, 일회용 장갑, FEP 또는 릴리스 필름 마모, LCD 화면 노화, 프린터 감가상각, 전기, 후경화 시간, 샌딩, 프라이밍, 서포트 제거, 포장 또는 마켓플레이스 수수료는 포함되지 않습니다.',
    },
    {
      type: 'table',
      headers: ['비용 항목', '여기에 포함?', '계상 위치'],
      rows: [
        ['인쇄에 사용된 액체 레진', '예', '이 계산기'],
        ['레진 잔류물 및 일반 취급 폐기물', '예', '복잡도 계수'],
        ['실패 인쇄', '아니요', '재료 및 모델 위험에 따라 실패 허용치 추가'],
        ['IPA, 장갑, 타월, 필터', '아니요', '소모품 항목'],
        ['서포트 제거 및 샌딩', '아니요', '인건비 또는 마감 항목'],
        ['프린터 감가상각', '아니요', '시간당 기계 요금'],
      ],
    },
    {
      type: 'summary',
      title: '신뢰할 수 있는 레진 비용 워크플로',
      items: [
        '실제로 구매한 병에서 밀리리터당 가격을 계산하세요.',
        '필요시 레진 밀도를 사용하여 그램을 밀리리터로 변환하세요.',
        '서포트 및 중공화 후 슬라이서 출력을 사용하세요.',
        '형상 및 취급 손실에 따라 10~15%의 보정을 적용하세요.',
        '실패, 인건비, 소모품 및 마진을 레진 재료비 숫자 밖에 유지하세요.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
