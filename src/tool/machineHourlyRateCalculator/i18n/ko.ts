import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MachineHourlyRateCalculatorUI } from '../ui';

const slug = 'machine-hourly-rate-production-cost-calculator';
const title = '기계 시간당 요금 & 생산 원가 계산기';
const description =
  '전력 소비, 전기 요금, 구매 가격, 내용 연수, 인쇄 시간을 기반으로 3D 프린터의 실제 운영 비용을 계산합니다.';

const faqData = [
  {
    question: '3D 프린터의 시간당 비용을 어떻게 계산하나요?',
    answer:
      '시간당 전기 비용과 시간당 감가상각 비용을 더합니다. 전기 비용은 와트를 1000으로 나눈 값에 전기 요금을 곱한 것입니다. 감가상각비는 구매 가격을 내용 연수(시간)로 나눈 것입니다.',
  },
  {
    question: '3D 프린팅 가격 책정에서 감가상각이 중요한 이유는 무엇인가요?',
    answer:
      '감가상각은 부품 생산 중 소비되는 기계 가치를 나타냅니다. 이를 무시하면 프린터가 조용히 재판매 가치, 신뢰성 및 교체 능력을 잃는 동안 인쇄물이 수익성 있어 보일 수 있습니다.',
  },
  {
    question: '데스크탑 3D 프린터에는 어떤 내용 연수를 사용해야 하나요?',
    answer:
      '5000시간이라는 기준값은 많은 데스크탑 프린터에 실용적인 출발점이지만, 생산 팜은 유지보수 이력, 예상 교체 주기 및 실제 가동 시간 데이터로 이를 대체해야 합니다.',
  },
  {
    question: '이것이 완전한 3D 프린팅 견적과 동일한가요?',
    answer:
      '아니요. 이 계산기는 기계 전기와 하드웨어 상각을 다룹니다. 완전한 견적에는 필라멘트 또는 수지, 인건비, 인쇄 실패, 후처리, 포장, 간접비 및 마진도 포함되어야 합니다.',
  },
];

const howToData = [
  { name: '측정된 프린터 전력 입력', text: '전원 공급 장치 정격뿐만 아니라 비교 가능한 인쇄 중 평균 와트를 사용합니다.' },
  { name: '인쇄 시간 설정', text: '시간 슬라이더를 작업 또는 생산 배치의 예상 기계 시간으로 이동합니다.' },
  { name: '에너지 및 자산 데이터 추가', text: '전기 요금, 기계 구매 가격, 추정 내용 연수(작동 시간)를 입력합니다.' },
  { name: '비용 분할 확인', text: '총 비용, 시간당 요금, 전기 대 감가상각 구성을 사용하여 기계 시간을 가격 책정합니다.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  featureList: [
    '3D 프린터 전력 소비 계산기',
    '기계 시간당 감가상각 계산기',
    '3D 프린팅 운영 비용 추정기',
    '전기 대 상각 비용 구성',
  ],
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<MachineHourlyRateCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '기계 시간당 요금 입력',
    resultsAriaLabel: '기계 시간당 요금 결과',
    settingsLabel: '견적 설정',
    currencyLabel: '통화',
    currencyOptions: [
      { code: 'EUR', label: '\u20ac', symbol: '\u20ac' },
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'GBP', label: '\u00a3', symbol: '\u00a3' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: '\u00a5', symbol: '\u00a5' },
      { code: 'INR', label: '\u20b9', symbol: '\u20b9' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: '$', symbol: '$' },
      { code: 'RUB', label: '\u20bd', symbol: '\u20bd' },
      { code: 'PLN', label: 'z\u0142', symbol: 'z\u0142' },
      { code: 'SEK', label: 'kr', symbol: 'kr' },
      { code: 'NOK', label: 'kr', symbol: 'kr' },
      { code: 'DKK', label: 'kr', symbol: 'kr' },
      { code: 'TRY', label: '\u20ba', symbol: '\u20ba' },
      { code: 'JPY', label: '\u00a5', symbol: '\u00a5' },
    ],
    durationLabel: '생산 시간',
    powerLabel: '평균 전력',
    tariffLabel: '전기 요금',
    purchasePriceLabel: '기계 구매 가격',
    usefulLifeLabel: '추정 내용 연수',
    totalCostLabel: '운영 비용',
    hourlyRateLabel: '기계 시간당 요금',
    electricityLabel: '전기',
    depreciationLabel: '상각',
    electricityPerHourLabel: '시간당 에너지 비용',
    depreciationPerHourLabel: '시간당 자산 비용',
    compositionLabel: '비용 구성: 전기 대 상각',
    insightLabel: '수익성 인사이트',
    utilizationLabel: '가동률 압박',
    utilizationValueLabel: '소비된 내용 연수',
    utilizationHint: '이 작업은 추정 기계 수명의 표시된 비율을 소비합니다.',
    batchLabel: '배치 운영 비용',
    energyUsedLabel: '사용된 에너지',
    costDriverLabel: '주요 요인',
    energyDriverLabel: '에너지',
    assetDriverLabel: '자산',
    balancedDriverLabel: '균형',
    electricityDominant: '작업은 에너지 주도형입니다: 요금, 가열 베드 크기, 챔버 온도 및 유휴 예열 시간이 구매 가격보다 견적에 더 큰 영향을 미칩니다.',
    depreciationDominant: '작업은 자산 주도형입니다: 기계 가격과 내용 연수가 지배적이므로 사용되지 않는 모든 시간이 이 프린터의 경제성을 약화시킵니다.',
    balancedDominant: '전기와 상각이 충분히 가깝기 때문에 하나를 마진 내에 숨기는 대신 둘 다 샵 시간당 요금에 표시되어야 합니다.',
    hoursUnit: '시간',
    wattsUnit: 'W',
    kwhUnit: 'kWh',
    currencySymbol: '\u20a9',
  },
  seo: [
    { type: 'title', text: '3D 프린팅에서 기계 시간당 요금의 의미', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>기계 시간당 요금</strong>은 재료, 인건비, 후처리, 포장, 이익을 추가하기 전에 프린터를 한 시간 동안 생산적으로 가동하는 비용입니다. 3D 프린팅에서 이 수치는 필라멘트와 같은 눈에 보이는 비용은 전기 및 하드웨어 감가상각과 같은 숨겨진 비용보다 알아차리기 쉽기 때문에 종종 과소평가됩니다. 데스크탑 프린터는 시간당 몇 센트의 전기만 소비할 수 있지만, 수천 유로에 달하는 전문 기계는 제한된 내용 연수 동안 그 가치를 회수해야 합니다. 이 계산기는 이 두 가지 기계 비용을 분리하여 생산 견적이 측정 가능한 기준선에서 시작되도록 합니다.',
    },
    {
      type: 'paragraph',
      html: '계산기는 두 가지 투명한 공식을 사용합니다. 전기 비용은 <code>(W / 1000) x T x 요금</code>이며, 여기서 <code>W</code>는 평균 와트, <code>T</code>는 인쇄 시간(시간), 요금은 킬로와트시당 전기 가격입니다. 상각 비용은 <code>(구매 가격 / 내용 연수 시간) x T</code>입니다. 총 운영 비용은 둘의 합계입니다. 두 항 모두 시간에 따라 확장되므로 동일한 공식에서 시간당 전기 비용과 시간당 감가상각 비용을 더한 깔끔한 시간당 요금도 생성됩니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'W / 1000', label: '와트를 킬로와트로 변환', icon: 'mdi:flash-outline' },
        { value: 'kWh', label: '에너지 청구 단위', icon: 'mdi:meter-electric-outline' },
        { value: 'P / life', label: '시간당 선형 기계 비용', icon: 'mdi:chart-line' },
        { value: 'Ce + Ca', label: '총 운영 비용', icon: 'mdi:calculator-variant-outline' },
      ],
    },
    {
      type: 'tip',
      title: '측정된 평균 와트 사용',
      html: '<p>전원 공급 장치 라벨은 최대 용량이며 실제 작업 중 프린터 소비량이 아닙니다. 더 나은 <strong>3D 프린터 전력 소비 계산기 입력</strong>을 위해 전력 측정기로 대표적인 인쇄물을 측정하고 예열, 인쇄, 팬, 베드, 대기 단계를 평균화하세요.</p>',
    },
    { type: 'title', text: '전기 비용: 와트를 생산 비용으로 변환', level: 2 },
    {
      type: 'paragraph',
      html: '전기 비용은 프린터의 정격 와트 수뿐만 아니라 평균 전력 소비량에 따라 달라집니다. 350W 전원 공급 장치가 있는 기계도 작은 PLA 작업에서 예열 후 평균 90W를 소비할 수 있지만, 가열 베드와 챔버가 있는 대형 밀폐형 프린터는 엔지니어링 폴리머에서 훨씬 더 높게 유지될 수 있습니다. 가열 베드 면적, 챔버 온도, 노즐 온도, 실내 온도, 팬 듀티 사이클, 부품 제거 전 유휴 시간은 모두 유효 전력을 변경할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '킬로와트시 변환은 간단하지만 중요합니다. 180W 프린터가 8시간 작동하면 <code>0.18 kW x 8 h = 1.44 kWh</code>를 소비합니다. kWh당 250원인 경우, 해당 작업 부분의 비용은 360원입니다. 작게 들릴 수 있지만, 많은 기계, 긴 PETG 또는 ASA 작업, 가열식 건조 캐비닛, 기후 제어를 갖춘 팜은 작은 시간 차이를 상당한 월별 청구액으로 전환할 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['입력', '입력 내용', '일반적인 실수'],
      rows: [
        ['평균 전력', '전체 인쇄 주기에 걸쳐 측정된 와트', '전원 공급 장치 정격 또는 예열 피크 사용.'],
        ['시간', '기계 점유 시간(시간)', '예열, 냉각 또는 대기 시간 무시.'],
        ['요금', '청구서의 kWh당 실제 가격', '샵 요금 대신 오래된 전국 평균 사용.'],
        ['통화', '견적 모델에 사용된 통화', '유로 하드웨어 비용과 달러 에너지 가정 혼동.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '에너지 비용은 규모가 가시화될 때까지 낮습니다',
      badge: '팜 계획',
      html: '<p>소형 프린터 한 대는 정교한 에너지 회계를 정당화하지 못할 수 있습니다. 매일 긴 작업을 실행하는 20대의 프린터는 정당화합니다. 동일한 전기 공식을 시간만 변경하여 작업별, 프린터별, 셀별 또는 월별로 사용할 수 있습니다.</p>',
    },
    { type: 'title', text: '상각: 프린터 수익성 뒤에 숨겨진 비용', level: 2 },
    {
      type: 'paragraph',
      html: '상각은 프린터가 사용으로 인해 소비된다는 재무적 인식입니다. 레일이 마모되고, 팬이 노후화되고, 베드가 평탄도를 잃고, 핫엔드가 막히고, 전자 장치가 노후화되고, 기계는 결국 교체가 필요합니다. 프린터가 90만원이고 샵이 5000시간의 유용한 가동을 기대하는 경우, 기계는 생산적인 1시간마다 180원의 자산 가치를 소비합니다. 따라서 10시간 작업은 재료나 인건비를 고려하기 전에 1800원의 하드웨어 비용을 부담합니다.',
    },
    {
      type: 'paragraph',
      html: '여기서의 정액법 감가상각은 의도적으로 실용적입니다. 세법, 재판매 가치, 자금 조달 또는 유지보수 이벤트를 모델링하려고 하지 않습니다. 대신 생산 가격 책정 질문에 답합니다: 이 기계 구매 비용 중 얼마를 각 작업 시간에 할당해야 합니까? 그 숫자는 <strong>3D 프린터 시간당 감가상각률</strong> 검색과 프린터가 경제적 수명에 도달했을 때 교체 자금이 존재하기를 원하는 모든 팜의 기초입니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '취미 데스크탑 프린터',
          description: '낮은 구매 가격과 불규칙한 사용. 가열 베드 작업에서는 전기 비용이 눈에 띌 수 있지만, 부품을 판매하는 경우 상각도 중요합니다.',
          icon: 'mdi:printer-3d-nozzle-outline',
          points: ['낮은 자본 노출', '내용 연수가 종종 불확실', '수작업이 일반적으로 견적을 지배'],
        },
        {
          title: '프로슈머 팜 프린터',
          description: '중간 정도의 구매 가격, 높은 가동률, 반복 재료 및 많은 동일 작업으로 시간당 감가상각이 중요한 견적 입력 항목이 됩니다.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['3000-8000시간 수명 가정에 적합', '실제 수리 추적', '기계 시간과 인건비 분리'],
        },
        {
          title: '산업용 시스템',
          description: '높은 자본 비용은 상각이 지배적일 수 있음을 의미합니다. 서비스 계약, 빌드 챔버 환경 및 검증 시간에 추가 비용 라인이 필요할 수 있습니다.',
          icon: 'mdi:domain',
          points: ['자본 비용이 지배적', '다운타임은 비용이 많이 듬', '서비스 및 시설 간접비 추가'],
        },
      ],
    },
    {
      type: 'message',
      title: '내용 연수 입력에 주의 필요',
      ariaLabel: '내용 연수 참고',
      html: '<p>기본 5000시간은 출발점이지 보편적인 진실이 아닙니다. 가볍게 사용되는 취미 기계는 그 숫자에 도달하기 전에 노후화될 수 있는 반면, 잘 유지 관리되는 팜 기계는 이를 초과할 수 있습니다. 교체 정책에 맞는 숫자를 사용하세요.</p>',
    },
    { type: 'title', text: '추측 없이 내용 연수 선택', level: 2 },
    {
      type: 'paragraph',
      html: '내용 연수는 상각 공식의 분모에 있기 때문에 이 계산기에서 가장 민감한 회계 가정입니다. 동일한 90만원 프린터에 3000시간의 내용 연수를 할당하면 감가상각은 시간당 300원입니다. 9000시간 내용 연수에서는 시간당 100원으로 떨어집니다. 프린터는 변하지 않았지만 비즈니스 기대치가 변했습니다. 이것이 견적이 일반적인 마크업에 묻어두지 않고 선택한 수명 가정을 문서화해야 하는 이유입니다.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '가능한 경우 유지보수 로그 사용: 노즐 교체, 팬 고장, 레일 마모, 벨트, 보드, 핫엔드 및 베드 표면이 실제 비용 곡선을 드러냅니다.',
        '프린터 제품군을 분리하세요. 소형 베드슬링어, CoreXY 생산 기계, 수지 프린터가 동일한 내용 연수 번호를 공유해서는 안 됩니다.',
        '실패한 튜닝, 재료 테스트 또는 고객별 검증에 많은 시간을 소비하는 실험용 기계는 내용 연수를 낮춥니다.',
        '가동 시간, 예방적 유지보수, 예비 부품 및 교체 이력이 가정을 뒷받침할 때만 내용 연수를 높입니다.',
        '주요 업그레이드 후 가정을 검토하세요. 새로운 운동 시스템, 인클로저 또는 핫엔드가 자산의 경제적 수명을 변경할 수 있기 때문입니다.',
      ],
    },
    {
      type: 'table',
      headers: ['내용 연수 가정', '최적 용도', '가격 결과'],
      rows: [
        ['2000-3000시간', '실험적, 저비용, 문서화 불량 또는 혹사 기계', '더 높은 시간당 감가상각이 교체 자금을 보호.'],
        ['4000-6000시간', '정기적인 생산 사용이 있는 표준 데스크탑 또는 프로슈머 기계', '많은 소규모 팜에 균형 잡힌 초기 범위.'],
        ['7000-10000시간', '유지보수 데이터와 통제된 재료를 갖춘 안정적인 프린터 함대', '시간당 자산 비용은 낮지만 가동 시간에 대한 신뢰 필요.'],
        ['10000시간 이상', '수명 주기가 문서화된 산업용 또는 집중 관리 자산', '서비스와 다운타임이 별도로 회계처리되는 경우에만 유용.'],
      ],
    },
    {
      type: 'summary',
      title: '내용 연수 체크리스트',
      items: [
        '내용 연수를 인터넷의 일반적인 숫자가 아닌 프린터 클래스에 맞춥니다.',
        '가정을 문서화하여 견적이 몇 달 후에도 설명 가능하도록 유지합니다.',
        '기계가 취미 용도에서 유료 생산으로 전환될 때 다시 계산합니다.',
      ],
    },
    { type: 'title', text: '전기 대 상각 비율 읽기', level: 2 },
    {
      type: 'paragraph',
      html: '구성 막대는 작업이 에너지 주도형인지 자산 주도형인지 보여줍니다. 에너지 주도형 작업은 전기 요금, 가열 베드 전략, 챔버 온도, 예열 동작 및 실내 조건에 강하게 반응합니다. 자산 주도형 작업은 구매 가격, 내용 연수 및 가동률에 더 강하게 반응합니다. 균형 잡힌 비율은 어느 라인도 무시해서는 안 되며, 둘 다 기본 기계 시간당 요금에 포함되어야 함을 의미합니다.',
    },
    {
      type: 'paragraph',
      html: '이 비율은 동일한 총 비용에 대해 다른 해결책이 있을 수 있기 때문에 유용합니다. 전기가 지배적인 경우 베드 온도 낮추기, 반복 예열을 피하기 위한 부품 그룹화, 인클로저 단열, 낮은 요금 시간대에 인쇄하는 것이 도움이 될 수 있습니다. 상각이 지배적인 경우 더 나은 레버리지는 가동률입니다: 프린터를 수익성 있는 작업으로 계속 가동하고, 유휴 자본을 피하고, 사용되지 않는 용량을 구매하는 대신 기계 크기를 신중하게 선택하세요.',
    },
    {
      type: 'glossary',
      items: [
        { term: '전기 비용', definition: '선택된 기간 동안 프린터가 소비한 청구 대상 에너지.' },
        { term: '상각', definition: '작업이 사용한 시간에 할당된 기계 구매 가격의 비율.' },
        { term: '내용 연수', definition: '프린터가 경제적으로 교체되기 전까지의 예상 생산 가동 시간.' },
        { term: '기계 시간당 요금', definition: '재료, 인건비, 간접비 및 이익을 차감하기 전의 시간당 전기 비용과 시간당 감가상각 비용의 합계.' },
        { term: '운영 비용', definition: '특정 기간 동안 생산을 유지하기 위해 발생하는 기계 비용.' },
      ],
    },
    {
      type: 'proscons',
      title: '이 계산기에 포함 및 제외되는 항목',
      items: [
        { pro: '측정된 전력 소비, 전기 요금, 시간, 구매 가격 및 내용 연수를 포함합니다.', con: '필라멘트, 수지, 서포트, 인쇄 실패, 인건비, 임대료, 소프트웨어, 포장 또는 마진을 포함하지 않습니다.' },
        { pro: '사용자가 주요 경제적 요인을 식별할 수 있도록 비용 분할을 표시합니다.', con: '정액법 감가상각을 사용하므로 세무 감가상각 일정이나 재판매 가치를 모델링하지 않습니다.' },
        { pro: '시간을 변경하여 한 번의 인쇄, 한 배치 또는 월간 생산 블록에 대해 작동합니다.', con: '잘못된 정밀도를 피하기 위해 정직한 전력 및 내용 연수 가정이 필요합니다.' },
      ],
    },
    { type: 'title', text: '결과를 사용하여 시간당 수익성 있는 가격 설정', level: 2 },
    {
      type: 'paragraph',
      html: '계산된 시간당 요금은 기계 시간의 최저선이며 최종 판매 가격이 아닙니다. 완전한 3D 프린팅 견적에는 일반적으로 재료, 서포트 폐기물, 퍼지 폐기물, 운영자 인건비, 슬라이싱 및 준비 시간, 인쇄 실패 허용치, 유지보수 소모품, 임대료, 소프트웨어, 지불 수수료, 세금 및 목표 마진이 추가됩니다. 기계 시간당 요금은 프린터 자체가 무료로 취급되는 것을 방지하기 때문에 여전히 필수적입니다.',
    },
    {
      type: 'paragraph',
      html: '예를 들어, 계산기가 기계 시간당 225원을 반환하고 작업이 프린터를 14시간 점유하는 경우 기계 운영 비용은 3,150원입니다. 재료가 4,800원, 인건비 할당이 6,000원, 실패 허용치가 1,200원이고 이후 마진이 적용되는 경우 견적은 재무적으로 추적 가능해집니다. 고객이 긴 인쇄물이 플라스틱 무게가 암시하는 것보다 더 많은 비용이 드는 이유를 물을 때 기계 시간은 설명 가능한 항목이 됩니다.',
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: '수익성 인사이트',
      html: '<p>이 계산은 모든 인쇄 팜의 <strong>시간당 가격</strong>을 정의하기 위한 기초입니다. 기계 시간당 비용이 알려지면 샵은 기계 시간을 직접 청구할지, 재료 마크업에 번들로 포함할지, 또는 프린터와 재료를 비교하기 위해 내부적으로 사용할지 결정할 수 있습니다.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '그램으로만 견적하지 마세요',
      badge: '숨겨진 비용',
      html: '<p>프린터를 20시간 점유하는 경량 부품은 빠르게 인쇄되는 중량 부품보다 더 많은 기계 용량을 소비할 수 있습니다. 기계 시간 없이 무게 기반 가격 책정은 종종 느리거나, 높거나, 미세 레이어 또는 저유량 작업을 과소평가합니다.</p>',
    },
    { type: 'title', text: '3D 프린팅 운영 비용 추정 실제 예시', level: 2 },
    {
      type: 'paragraph',
      html: '조정된 PLA 데스크탑 작업은 평균 120W, 6시간 작동, kWh당 22원 요금, 5000시간 내용 연수의 60만원 프린터를 사용할 수 있습니다. 전기 비용은 158원에 불과한 반면 상각 비용은 720원입니다. 총 기계 운영 비용은 약 878원이고 시간당 요금은 약 146원입니다. 이 경우 작업은 명확히 자산 주도형입니다: 더 나은 기계 가동률이 작은 전력 변경보다 수익성에 더 큰 영향을 미칩니다.',
    },
    {
      type: 'paragraph',
      html: '더 큰 밀폐형 프린터의 ASA 작업은 kWh당 30원에 18시간 동안 평균 420W를 소비할 수 있습니다. 프린터가 180만원이고 내용 연수가 4500시간인 경우 전기는 2,268원, 상각은 7,200원으로 총 기계 비용은 9,468원입니다. 에너지 사용량이 훨씬 높지만 자본 비용과 긴 기계 점유가 상당하기 때문에 감가상각이 여전히 지배적입니다.',
    },
    {
      type: 'paragraph',
      html: '수지 프린터는 다른 이야기를 할 수 있습니다. 프린터는 적당한 전력을 소비할 수 있지만 계산은 여전히 기계 점유에 적용됩니다. 4000시간의 내용 연수가 예상되는 250만원 기계에서 빌드에 9시간이 걸리는 경우 상각만 5,625원입니다. 이 금액은 수지, 장갑, IPA 또는 세척액, 후경화, 서포트 및 청소 작업이 추가되기 전에 견적에 포함되어야 합니다.',
    },
    {
      type: 'summary',
      title: '결정 규칙',
      items: [
        '전기 정확도를 위해 측정된 평균 와트를 사용합니다.',
        '자산 회수를 위해 현실적인 내용 연수 시간을 사용합니다.',
        '결과를 기계 시간 최저선으로 처리한 다음 재료, 인건비, 간접비, 위험 및 마진을 추가합니다.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
