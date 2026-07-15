import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintFarmRoiCalculatorUI } from '../ui';

const slug = '3d-print-farm-roi-calculator';
const title = '3D 프린트 팜 ROI 계산기';
const description =
  '가동률, 실패율, 전기 요금, 고정비 및 시간당 변동 비용을 사용하여 3D 프린팅 팜의 월간 수익성, 투자 회수 기간 및 연간 ROI를 시뮬레이션합니다.';

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
    question: '3D 프린트 팜의 ROI는 어떻게 계산하나요?',
    answer:
      '월간 생산성 있는 시간을 추정하고 이를 장비 시간당 판매 가격에 곱한 다음 고정 비용, 전기 요금 및 시간당 변동 비용을 빼고 연간 이익을 초기 투자액과 비교합니다.',
  },
  {
    question: '왜 성공률이 프린트 팜 투자 회수 기간에 영향을 미치나요?',
    answer:
      '출력 실패는 청구 가능한 시간을 생성하지 않고 기기 용량, 재료, 노즐, 에너지 및 작업자의 주의를 소비합니다. 성공률이 낮아지면 실제 생산 시간이 단축되어 투자 회수가 지연됩니다.',
  },
  {
    question: '시간당 변동 비용에는 무엇이 포함되어야 하나요?',
    answer:
      '필라멘트 또는 레진 소비량, 노즐 마모, 빌드 베드 마모, 정기 유지보수 부품, 소모품 및 실제 성공적인 생산 시간에 따라 비례하는 시간당 소모품 비용을 포함합니다.',
  },
  {
    question: '투자 회수 기간과 ROI는 같은 것인가요?',
    answer:
      '아니요. 투자 회수 기간은 월간 순이익을 통해 초기 투자금을 회수하는 데 몇 개월이 걸리는지 추정하는 것입니다. ROI는 연간 이익을 초기 투자금과 백분율로 비교합니다.',
  },
];

const howToData = [
  { name: '팜 규모 입력', text: '가동 중인 프린터 수와 기기, 설정, 작업대 및 가동 준비에 필요한 초기 투자 금액을 입력합니다.' },
  { name: '월간 운영 비용 추가', text: '고정비와 전기 요금을 월간 비용으로 입력한 다음, 생산적인 장비 시간당 변동 비용을 추가합니다.' },
  { name: '가동률 및 성공률 설정', text: '대기 시간과 출력 실패가 제대로 차감되도록 실제적인 가동률 및 성공률 백분율을 사용합니다.' },
  { name: '수익성 결과 확인', text: '월간 매출과 비용을 비교한 후 투자 회수 개월 수와 연간 ROI를 사용하여 투자 타당성을 판단합니다.' },
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
    '3D 프린트 팜 ROI 계산기',
    '3D 프린팅 투자 회수 시뮬레이터',
    '프린트 팜 수익성 계산기',
    '가동률 및 실패율 조정',
    '다중 통화 운영 비용 모델',
  ],
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PrintFarmRoiCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '프린트 팜 ROI 입력 항목',
    resultsAriaLabel: '프린트 팜 ROI 결과',
    currencyLabel: '통화',
    currencyOptions,
    printerCountLabel: '프린터 수',
    initialInvestmentLabel: '초기 투자',
    fixedMonthlyCostLabel: '고정 월 비용',
    electricityMonthlyCostLabel: '월 전기 요금',
    hourlyRateLabel: '시간당 판매 단가',
    occupancyLabel: '평균 가동률',
    successRateLabel: '성공률',
    variableCostLabel: '시간당 변동 비용',
    averageHoursPerPartLabel: '부품당 평균 시간',
    paybackLabel: '투자 회수 기간',
    netProfitLabel: '월 순이익',
    annualRoiLabel: '연간 ROI',
    productiveHoursLabel: '실제 생산 시간',
    revenueLabel: '매출',
    costsLabel: '비용',
    fixedCostShortLabel: '고정비',
    electricityShortLabel: '전기 요금',
    variableCostShortLabel: '변동비',
    marginLabel: '순이익률',
    breakEvenPartsLabel: '손익분기 부품 수',
    breakEvenHoursLabel: '손익분기 시간',
    stressScenarioLabel: '최악의 시나리오',
    exportSummaryLabel: '요약 다운로드',
    chartLabel: '월간 매출 대비 운영 비용',
    monthsUnit: '개월',
    hoursUnit: '시간',
    percentUnit: '%',
    notViableLabel: '회수 불가',
    positiveInsight: '가동률, 성공률 및 운영 비용을 고려한 후의 월 순이익이 양수입니다.',
    negativeInsight: '운영 비용이 조정된 매출을 초과합니다. 규모를 확장하기 전에 가동률, 단가 또는 실패율을 개선하십시오.',
    currencySymbol: '€',
    defaultCurrencyCode: 'EUR',
    pendingLabel: '-',
    partsUnit: '개/월',
    reportFilename: 'print-farm-roi-summary.csv',
    reportTitle: '3D 프린트 팜 ROI 타당성 보고서',
    reportCurrencyLabel: '통화',
  },
  seo: [
    { type: 'title', text: '이 3D 프린트 팜 ROI 계산기 작동 방식', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3D 프린트 팜 ROI 계산기</strong>는 특정 투자 질문에 답해야 합니다. 즉, 프린터 그룹이 설정 비용을 충분히 빨리 회수하여 자본, 공간, 유지보수 및 운영 위험을 정당화할 수 있을까 하는 점입니다. 이 시뮬레이터는 월간 장비 용량을 기준으로 이를 모델링합니다. 각 프린터는 표준 30일 기준 월 720시간의 총 용량을 기여하며, 모델은 가동률과 인쇄 성공률에 따라 이를 차감합니다. 그 결과는 이론적 용량이 아니라 대기 시간, 작업 대기열, 실패한 인쇄, 재인쇄, 캘리브레이션 및 실제 다운타임에서 살아남은 청구 가능한 생산 시간입니다.',
    },
    {
      type: 'paragraph',
      html: '계산 과정은 의도적으로 투명합니다. 월간 총 시간은 <code>프린터 수 x 720</code>입니다. 실제 생산 시간은 총 시간에 평균 가동률과 성공률을 곱한 값입니다. 월간 매출은 생산 시간에 고객 판매 시간당 단가를 곱한 값입니다. 운영 비용은 월 고정비, 전기 요금 및 시간당 변동 비용의 합산입니다. 월 순이익은 매출에서 이 운영 비용을 뺀 값입니다. 투자 회수 기간은 초기 투자금을 월 순이익으로 나눈 값이며, 연간 ROI는 12개월의 순이익을 초기 투자금과 비교합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '720 시간', label: '프린터당 월간 총 용량', icon: 'mdi:clock-outline' },
        { value: '가동 x 성공', label: '가동률 및 성공률 조정', icon: 'mdi:percent-outline' },
        { value: '매출 - 비용', label: '월 순이익', icon: 'mdi:finance' },
        { value: '투자 / 이익', label: '투자 회수 기간', icon: 'mdi:calendar-clock' },
      ],
    },
    {
      type: 'tip',
      title: '투자 결정에는 보수적인 입력을 사용하십시오',
      html: '<p>첫 번째 단계에서는 마케팅이 개선된 후 도달하기를 바라는 가동률이 아니라 현재 수요로 방어할 수 있는 가동률을 입력하십시오. 낙관적인 가동률에서만 작동하는 팜은 아직 탄탄한 투자가 아닙니다.</p>',
    },
    { type: 'title', text: '가동률이 프린트 팜 수익성을 변화시키는 이유', level: 2 },
    {
      type: 'paragraph',
      html: '가동률은 사용 가능한 장비 시간 중 실제로 결제되었거나 판매 가능한 인쇄 작업에 사용된 시간의 비율입니다. 초기 투자금이 고정되어 있기 때문에 많은 소규모 팜 모델에서 가장 강력한 레버입니다. 생산용으로 구입한 프린터는 하루에 8시간을 가동하든 20시간을 가동하든 비용이 동일합니다. 가동률이 높아지면 임대료, 설정 비용, 예비 부품 재고, 소프트웨어 및 장비 감가상각비가 더 많은 청구 가능 시간으로 분산됩니다.',
    },
    {
      type: 'paragraph',
      html: '계산기는 가동률을 총 용량에 대한 직접 승수로 처리합니다. 10대의 프린터는 월간 7200시간의 총 장비 시간을 생성합니다. 가동률 40%일 때 성공률 조정 전에 매출 모델에 입력되는 시간은 2880시간에 불과합니다. 가동률 75%일 때는 5400시간이 입력됩니다. 이 차이가 투자 회수가 몇 개월 걸릴지, 몇 년이 걸릴지, 아니면 결코 이루어지지 않을지를 결정할 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['가동률 수준', '운영적 의미', 'ROI 영향'],
      rows: [
        ['30% 미만', '장비가 한 달의 대부분을 주문, 파일, 작업자 또는 유지보수 대기로 보냅니다.', '시간당 판매 단가가 높지 않다면 초기 투자금 회수가 어렵습니다.'],
        ['30-55%', '혼합 수요 및 수동 처리가 있는 팜의 일반적인 초기 단계 범위입니다.', '수익성은 월 고정비와 실패율에 크게 의존합니다.'],
        ['55-75%', '긴급 작업, 유지보수 및 설정 변경을 위한 여유가 있는 건강한 주문 예약 수준입니다.', '투자 회수가 현실적이 되는 첫 번째 범위인 경우가 많습니다.'],
        ['75% 초과', '안정적인 스케줄링, 자재 흐름 및 예방 유지보수가 필요한 높은 가동률입니다.', '강력한 ROI 잠재력이 있지만 고장이나 작업자 병목 현상에 대한 여유가 거의 없습니다.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '높은 가동률이 높은 이익을 보장하지 않습니다',
      badge: '가격 리스크',
      html: '<p>시간당 단가가 너무 낮거나, 재인쇄가 빈번하거나, 재료 낭비가 심하거나, 고정비가 과소평가된 경우 팜이 바쁘더라도 적자가 발생할 수 있습니다. 항상 매출뿐만 아니라 마진과 가동률을 비교하십시오.</p>',
    },
    { type: 'title', text: '출력 실패 및 재인쇄 고려', level: 2 },
    {
      type: 'paragraph',
      html: '성공률 입력은 이 3D 프린팅 투자 회수 시뮬레이터를 단순한 용량 계산기와 구분하는 요소입니다. 실패한 인쇄는 성공한 인쇄와 동일한 시간을 소비하지만 판매 가능한 결과물을 생성하지 못합니다. 또한 필라멘트, 레진, 빌드 플레이트, 노즐, 전기, 노동력 및 고객 신뢰를 소모할 수 있습니다. 성공률이 90%인 팜은 매출을 집계하기 전에 잠재 생산량의 10분의 1을 손실합니다.',
    },
    {
      type: 'paragraph',
      html: '성공률은 유사한 작업들을 기준으로 측정되어야 합니다. 공정 튜닝 후 반복적인 PLA 지그를 인쇄하는 팜은 매우 높은 성공률을 유지할 수 있습니다. 일회성 고객 모델, 높은 부품, 엔지니어링 폴리머, 레진 피규어 또는 멀티 재료 작업을 생산하는 팜은 더 낮은 성공률을 가정해야 합니다. 간단한 작업과 위험한 작업이 혼합되어 있는 경우 계산기를 두 번 실행하십시오. 한 번은 표준 생산용으로, 다른 한 번은 맞춤 작업용으로 실행하십시오.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '반복 생산',
          description: '알려진 부품 기하학, 튜닝된 프로필, 예측 가능한 재료 및 안정적인 수요입니다.',
          icon: 'mdi:repeat',
          points: ['높은 성공률 가정', '낮은 설정 불확실성', '높은 투자 회수 신뢰도'],
        },
        {
          title: '맞춤형 프린팅 서비스',
          description: '파일이 고객, 형상, 서포터 전략 및 품질 기대치에 따라 다양합니다.',
          icon: 'mdi:file-cad',
          highlight: true,
          points: ['중간 정도의 성공률 가정', '견적 편차가 큼', '재인쇄 허용치 필요'],
        },
        {
          title: '실험적 재료',
          description: '엔지니어링 폴리머, 유연한 재료, 복합 필라멘트 및 레진 공정 튜닝입니다.',
          icon: 'mdi:flask-outline',
          points: ['낮은 성공률 가정', '높은 소모품 마모', '조심스러운 ROI 입력 사용'],
        },
      ],
    },
    {
      type: 'message',
      title: '실패율은 재무 모델에 포함되어야 합니다',
      ariaLabel: '인쇄 실패 계산 참고 사항',
      html: '<p>모호한 오버헤드 내에 재인쇄 비용을 숨기지 마십시오. 눈에 보이는 성공률 입력을 통해 투자 사례를 평가, 개선 및 설명하기가 더 쉬워집니다.</p>',
    },
    { type: 'title', text: '신뢰할 수 있는 월간 비용 모델 구축', level: 2 },
    {
      type: 'paragraph',
      html: '운영 비용은 이 도구에서 세 가지 레이어로 구성됩니다. 고정 월 비용은 프린터가 대기 중일 때도 발생하는 비용(임대료, 인터넷, 보험, 소프트웨어, 회계, 보관, 기본 인건비 및 기타 오버헤드)을 커버합니다. 월 전기 요금은 프린터와 직접 관련된 생산 장비가 사용하는 에너지를 파악합니다. 시간당 변동 비용은 필라멘트, 레진, 노즐, PTFE 튜브, 빌드 플레이트 마모, 필터, 윤활제, 유지보수 부품 및 청소용 소모품과 같이 생산 기기 시간에 따라 비례하는 비용을 커버합니다.',
    },
    {
      type: 'paragraph',
      html: '전기 요금을 별도의 월간 입력 값으로 유지하는 것은 팜에 유용합니다. 왜냐하면 전력 소비는 인쇄 건별로 계산되기보다 청구서나 서브 미터링을 통해 추적되는 경우가 많기 때문입니다. PETG, ASA, ABS 또는 나일론을 생산하는 챔버형 온열 베드 팜은 동일한 공간에 있는 PLA 팜과 매우 다른 에너지 프로필을 가질 수 있습니다. 이미 기기 시간당 전기 요금을 계산하고 있다면 시간당 변동 비용에 해당 수치를 포함하고 월 전기 요금 필드를 0으로 설정할 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['비용 입력', '포함', '제외'],
      rows: [
        ['고정 월 비용', '임대료, 보험, 인터넷, 소프트웨어, 기본 인력, 보관.', '프린터가 가동될 때만 사용되는 재료.'],
        ['월 전기 요금', '프린터 에너지, 건조기, 세척기, 경화기, 환기, 공조 지분.', '관련 없는 가정용 또는 사무실 전력.'],
        ['시간당 변동 비용', '필라멘트, 레진, 노즐, 유지보수 소모품, 시간당 마모 허용치.', '일회성 장비 구매 비용.'],
        ['초기 투자', '프린터, 랙, 설정, 도구, 건조기, 팜 관리 하드웨어.', '출시 후 발생하는 월간 반복 비용.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '월간 총 시간', definition: '가동률 및 출력 실패 조정 전의 이론적인 장비 용량.' },
        { term: '실제 생산 시간', definition: '가동률 및 성공률을 적용한 후 남은 용량.' },
        { term: '투자 회수 기간', definition: '월 순이익이 초기 투자금을 회수하는 데 필요한 개월 수.' },
        { term: '연간 ROI', definition: '12개월의 순이익을 초기 투자금으로 나눈 값.' },
        { term: '시간당 변동 비용', definition: '생산적인 인쇄 시간당 소모품 및 유지보수 비용.' },
      ],
    },
    { type: 'title', text: '장비 시간당 판매 단가 설정', level: 2 },
    {
      type: 'paragraph',
      html: '시간당 판매 단가는 1 생산 시간당 고객에게 청구하는 금액입니다. 견적서에 직접 표시하거나 재료, 인건비, 후가공, 포장 및 마진을 포함하는 가격 공식에 포함할 수 있습니다. 핵심은 일관성입니다. 시간당 단가에 재료 비용이 포함되도록 의도된 경우 시간당 변동 비용으로 동일한 재료 비용을 다시 추가하지 마십시오. 시간당 단가가 장비 시간만 의미한다면 재료와 인건비가 비즈니스 모델의 다른 곳에 표시되어 있는지 확인하십시오.',
    },
    {
      type: 'paragraph',
      html: '단일 작업에서 경쟁력 있어 보이는 단가가 팜 규모에서는 실패할 수 있습니다. 긴 출력은 다른 작업에 제공될 수 있었던 용량을 점유합니다. 세밀한 레이어 높이, 느린 재료, 높은 부품 및 서포터가 많은 형상은 모두 처리량을 감소시킵니다. 따라서 프린트 팜 수익성 계산기는 평균 작업 시간, 평균 유료 시간당 단가, 고객 수락률 및 월간 주문량과 같은 실제 견적 데이터와 함께 사용해야 합니다.',
    },
    {
      type: 'proscons',
      title: '프린트 팜의 시간당 가격 책정',
      items: [
        { pro: '장비 점유율을 가시화하고 긴 인쇄 작업이 저평가되는 것을 방지합니다.', con: '가벼운 부품이 많은 시간을 차지할 때 고객에게 설명이 필요할 수 있습니다.' },
        { pro: '내부 ROI 계획 및 용량 결정에 잘 작동합니다.', con: '재료, 인건비, 후가공 및 리스크 가격 책정을 대체하지는 않습니다.' },
        { pro: '프린터 유형 및 가동률 시나리오 간의 신속한 비교를 가능하게 합니다.', con: '실패율과 대기 시간이 무시되면 오해의 소지가 있습니다.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: '가격 책정 체크포인트',
      html: '<p>시간당 단가의 작은 변화가 회수 기간을 완전히 바꾸는 경우 투자는 시장 가격에 민감합니다. 프린터를 더 구매하기 전에 실제 고객 요구에 대해 단가를 검증하십시오.</p>',
    },
    { type: 'title', text: '투자 회수 기간 및 연간 ROI 해석', level: 2 },
    {
      type: 'paragraph',
      html: '투자 회수 기간은 개월 수로 표시되므로 이해하기 쉽습니다. 초기 투자금이 18,000이고 월 순이익이 3,000이면 회수 기간은 6개월입니다. 월 순이익이 0이거나 음수이면 현재 가정 하에 팜이 투자금을 회수하지 못하므로 투자 회수가 불가합니다. 회수 기간은 자금 계획, 장비 금융 및 가동 확장을 지금 해야 할지 아니면 수요가 개선된 후에 해야 할지 결정하는 데 유용합니다.',
    },
    {
      type: 'paragraph',
      html: '연간 ROI는 1년의 순이익을 초기 투자금과 비교하므로 더 엄격합니다. 투자 회수가 느린 경우 월간 이익이 양수이더라도 연간 ROI가 낮을 수 있습니다. 예를 들어 24,000 투자에 대해 비용 제외 후 월 1,000을 버는 팜은 초기 투자금을 고려하기 전에 연간 12,000을 생산하므로 첫해 ROI는 음수 상태로 유지됩니다. 그것이 비즈니스가 나쁘다는 것을 자동으로 의미하지는 않지만 투자자에게 더 긴 안목이 필요함을 뜻합니다.',
    },
    {
      type: 'summary',
      title: '결정 규칙',
      items: [
        '자금 회수 속도를 이해하려면 회수 기간을 사용하십시오.',
        '팜을 다른 자본 자산과 비교하려면 연간 ROI를 사용하십시오.',
        '가동 확장을 결정하기 전에 가동률과 성공률을 더 낮춰 시뮬레이션을 다시 실행하십시오.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '시나리오 테스트가 진짜 가치입니다',
      badge: '계획',
      html: '<p>기본 케이스, 보수적인 케이스 및 스트레스 케이스를 실행하십시오. 가장 좋은 투자는 낙관적인 시나리오에서만 훌륭해 보이는 것이 아니라 수요, 실패 또는 전기 요금이 불리하게 움직일 때도 여전히 타당한 계획이 서 있는 투자입니다.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
