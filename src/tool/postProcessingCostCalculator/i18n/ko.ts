import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PostProcessingCostCalculatorUI } from '../ui';

const slug = 'post-processing-cost-calculator';
const title = '3D 프린트 후처리 비용 계산기';
const description =
  '3D 프린트 부품의 수동 마감, 서포트 제거, 샌딩, 도장, 기타 수작업, 소모품 및 통화 환산된 후처리 비용을 산출합니다.';

const faqData = [
  {
    question: '3D 프린트 후처리 비용은 어떻게 계산하나요?',
    answer:
      '모든 수동 마감 작업 시간(분)을 합산한 후 시급을 60으로 나눈 값을 곱하고, 소모품 비용을 더합니다. 이 계산기는 각 마감 단계별 비용 비중도 표시합니다.',
  },
  {
    question: '소모품은 수동 마감 비용에 포함해야 하나요?',
    answer:
      '네. 사포, 필러 프라이머, 도료, 장갑, 마스킹 테이프, IPA, 레진 세척액, 청소용 천, 소형 공구 마모는 완성 부품의 견적에 영향을 줄 만큼 상당한 금액이 될 수 있습니다.',
  },
  {
    question: '통화 환산이 비용 계산 공식을 바꾸나요?',
    answer:
      '아니요. 통화는 표시되는 금액 단위만 변경합니다. 인건비 공식은 동일하게 유지됩니다: 분 × 시급 ÷ 60 + 소모품입니다.',
  },
  {
    question: '3D 프린트 인건비에는 어떤 시급을 사용해야 하나요?',
    answer:
      '순 급여만이 아닌, 작업장의 전체 원가 시급을 사용하세요. 임금, 사회보험료, 유급 비청구 시간, 감독 비용, 외관 마감에 필요한 숙련도 수준을 모두 포함해야 합니다.',
  },
];

const howToData = [
  { name: '마감 시간(분) 입력', text: '서포트 제거, 샌딩, 도장, 기타 수작업 시간을 분 단위로 추가합니다.' },
  { name: '시급 및 소모품 설정', text: '선택한 통화로 시간당 마감 비용과 소모품 직접 비용을 입력합니다.' },
  { name: '통화 및 계수 선택', text: '통화 선택기로 기호를 지정하고, 선택적으로 환산 계수를 설정하여 견적을 조정합니다.' },
  { name: '결과 복사', text: '복사 버튼을 사용하여 합계, 인건비, 소모품, 분 수를 견적서에 붙여넣습니다.' },
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
    '3D 프린트 후처리 비용 계산기',
    '3D 프린트 인건비 견적',
    '3D 프린트 수동 마감 비용',
    '후처리 시급 계산기',
  ],
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PostProcessingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '후처리 비용 입력 항목',
    resultsAriaLabel: '후처리 비용 결과',
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
    currencyOptionSeparator: ' - ',
    supportLabel: '서포트 제거',
    sandingLabel: '샌딩',
    paintingLabel: '도장',
    otherLabel: '기타 작업',
    hourlyRateLabel: '시급',
    consumablesLabel: '소모품',
    conversionFactorLabel: '환산 계수',
    conversionFactorUnit: 'x',
    conversionHint: '시급이 이미 현지 통화로 입력된 경우 1로 유지하세요. 글로벌 견적 승수를 적용하려면 변경하세요.',
    minutesUnit: '분',
    hourUnit: '시간',
    rateUnitSeparator: '/',
    totalLabel: '후처리 합계',
    laborLabel: '인건비',
    consumablesBreakdownLabel: '소모품',
    timeLabel: '수작업 시간',
    effectiveRateLabel: '실질 시급',
    breakdownLabel: '마감 단계별 비용 비중',
    copyLabel: '결과 복사',
    copiedLabel: '복사됨',
    copyTemplate: '후처리 비용: {total} ({minutes}; 인건비 {labor}; 소모품 {consumables})',
    pendingLabel: '-',
    currencySymbol: '€',
  },
  seo: [
    { type: 'title', text: '이 3D 프린트 후처리 비용 계산기가 측정하는 것', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3D 프린트 후처리 비용 계산기</strong>는 프린터가 멈춘 후 얼마나 많은 비용이 발생하는지라는 실질적인 견적 질문에 답합니다. 프린트된 부품에는 이미 기계 작동 시간 비용과 재료비가 있을 수 있지만, 유상 수주의 많은 부분은 서포트 제거, 샌딩, 충전, 프라이밍, 도장, 세척, 마스킹, 검사, 재작업 단계에서 결정됩니다. 이 계산기는 그러한 수동 마감 작업을 분 단위로 분해하고, 시간당 후처리 비용을 곱한 뒤 직접 소모품 비용을 더하여 견적서에 바로 붙여 넣을 수 있는 최종 수치를 산출합니다.',
    },
    {
      type: 'paragraph',
      html: '기본 공식은 의도적으로 투명하게 설계되었습니다: <code>((서포트 + 샌딩 + 도장 + 기타 분 수) × (시급 ÷ 60)) + 소모품</code>. 선택적 환산 계수는 작업장이 통화 환산, 지역 가격표, 하청업체 마진 또는 임시 조정을 위해 값을 조정할 때 시급과 소모품에 곱해집니다. 사용자가 현지 인건비를 직접 입력하는 경우 계수는 <code>1</code>로 유지해야 하며, 결과는 환율 가정과 무관하게 유지됩니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '분 × 시급/60', label: '인건비 공식', icon: 'mdi:clock-outline' },
        { value: '5단계', label: '서포트, 샌딩, 도장, 기타, 소모품', icon: 'mdi:chart-bar-stacked' },
        { value: '1x', label: '기본 환산 계수', icon: 'mdi:swap-horizontal' },
        { value: '실시간', label: '계산 버튼 불필요', icon: 'mdi:flash-outline' },
      ],
    },
    {
      type: 'tip',
      title: '프린터가 아닌 사람을 견적하세요',
      html: '<p>후처리는 대부분 인건비가 주요 비용 요소입니다. 느린 프린트는 마감 비용이 낮을 수 있지만, 외관면에 서포트가 있는 작은 부품은 고비용의 숙련된 수작업이 필요할 수 있습니다. <strong>3D 프린트 인건비 견적</strong>을 재료 마크업에 숨기지 말고 독립 항목으로 처리하세요.</p>',
    },
    { type: 'title', text: '서포트 제거: 첫 번째 수동 비용 동인', level: 2 },
    {
      type: 'paragraph',
      html: '서포트 제거는 단순히 모델에서 플라스틱을 떼어내는 데 걸리는 시간만이 아닙니다. 절단, 가열, 용해, 헹굼, 긁어내기, 서포트 잔재 다듬기, 취약한 형상 보호, 서포트 흔적이 추가 표면 처리를 요구하는지 확인하는 작업이 포함될 수 있습니다. FDM 트리 서포트, 조밀한 인터페이스 레이어, SLA 서포트 팁, SLS 탈분은 각각 다른 인건비 프로파일을 만들어냅니다. <strong>3D 프린트 수동 마감 비용</strong>을 신뢰성 있게 추정하려면 서포트 제거 시간을 프린트 시간으로 추측하지 말고 유사 작업에서 실측해야 합니다.',
    },
    {
      type: 'table',
      headers: ['서포트 상황', '일반적인 소요 시간 특성', '견적 참고 사항'],
      rows: [
        ['쉽게 부러지는 서포트', '짧고 예측 가능한 제거', '부품당 고정 분 수 할당이 적합한 경우가 많습니다.'],
        ['조밀한 서포트 인터페이스', '더 긴 다듬기와 표면 청소 필요', '비용 동인이 보이도록 샌딩 분 수를 별도로 입력하세요.'],
        ['레진 미니어처 또는 정밀 모델', '손상 방지를 위한 천천히 절단', '숙련된 수작업이 필요한 경우 더 높은 시급을 사용하세요.'],
        ['수용성 서포트', '수동 절단은 적지만 처리 시간이 더 긴 경우', '작업자가 관여하는 경우 용액 처리 및 건조 시간을 포함하세요.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '슬라이서의 서포트 볼륨만으로 서포트 제거 비용을 산정하지 마세요',
      badge: '인건비 리스크',
      html: '<p>서포트 볼륨이 작아도 접근이 매우 어려울 수 있습니다. 좁은 형상 내부에 숨어있는 작은 서포트는 깔끔하게 분리되는 큰 외부 서포트보다 더 많은 인건비가 들 수 있습니다.</p>',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '반복 발생하는 부품군의 서포트 제거 시간을 기록하세요.',
        '서포트 전략 결정을 더 쉽게 비교할 수 있도록 제거와 샌딩을 분리해서 입력하세요.',
        '취약한 형상, 얇은 핀, 미니어처, 고객이 보는 면은 추정치를 높이세요.',
        '견적서의 나머지 항목과 동일한 통화 및 시급 기준을 사용하세요.',
      ],
    },
    { type: 'title', text: '샌딩, 퍼티 작업 및 표면 처리', level: 2 },
    {
      type: 'paragraph',
      html: '샌딩은 반복적인 작업이기 때문에 완성된 3D 프린트에서 가장 큰 숨겨진 비용이 되는 경우가 많습니다. 작업자는 거친 샌딩, 퍼티 작업, 경화 또는 건조 시간, 세밀한 샌딩, 포인트 수정, 그리고 비스듬한 빛 아래에서의 검사 단계를 반복할 수 있습니다. 레이어 높이, 재료 경도, 서포트 흔적, 요구되는 광택 수준, 부품 형상은 모두 수작업 양에 영향을 미칩니다. 기능성 브라켓은 5분으로 충분할 수 있지만, 전시용 프로토타입은 도료를 열기도 전에 한 시간이 필요할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '계산기는 샌딩을 분 × 시간당 마감 비율로 처리합니다. 이 공정은 기계보다 작업자에 의해 제약되기 때문입니다. 연마재, 필러 프라이머, 퍼티, 무진 천, 마스킹 재료 같은 소모품은 시급에 숨기지 말고 소모품 필드에 입력해야 합니다. 이렇게 하면 <strong>3D 프린트 마감 비용 분석</strong>이 읽기 쉽게 유지됩니다: 인건비는 시간 압박을, 소모품은 구매한 자재를 나타냅니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '기능성 마감',
          description: '날카로운 모서리 정리, 서포트 제거, 조립에 충분한 수준으로 거친 흔적 처리.',
          icon: 'mdi:wrench-outline',
          points: ['샌딩 시간 최소', '소모품 최소', '검사는 조립 공차에 집중'],
        },
        {
          title: '프레젠테이션 마감',
          description: '보이는 면을 매끄럽게 처리, 선택적 프라이머 도포, 고객 검토를 위한 레이어 라인 감소.',
          icon: 'mdi:eye-outline',
          highlight: true,
          points: ['중간 수준의 샌딩 시간', '프라이머와 퍼티 필요 가능성 높음', '외관면이 인건비를 좌우'],
        },
        {
          title: '도장 준비 마감',
          description: '색상 도포 전 단계적 샌딩, 퍼티 작업, 마스킹 및 결함 수정.',
          icon: 'mdi:spray',
          points: ['수작업 시간이 가장 길다', '소모품 비용이 중요', '재작업 여유분 포함 권장'],
        },
      ],
    },
    {
      type: 'message',
      title: '연마재는 소모품입니다',
      ariaLabel: '소모품 참고 사항',
      html: '<p>사포, 샌딩 스펀지, 니들 파일, 퍼티, 장갑, 청소용 천은 무료가 아닙니다. 작업에서 상당량을 소모하는 경우 직접 비용을 계상하세요.</p>',
    },
    { type: 'title', text: '도장 및 코팅 비용 견적', level: 2 },
    {
      type: 'paragraph',
      html: '도장 시간(분)에는 작업자의 능동적 작업 시간이 포함되어야 합니다: 마스킹, 혼합, 스프레이 도포, 붓 도색, 터치업, 마스크 제거, 작업 공간 청소, 검사가 여기에 해당합니다. 수동적인 건조 또는 경화 시간은 작업자를 블로킹하거나 인건비 또는 오버헤드로 청구되는 희소한 부스 용량을 점유할 때만 추가해야 합니다. 이 구분은 <strong>후처리 시급 계산기</strong>가 아무도 부품을 능동적으로 작업하지 않는 대기 시간을 모두 인건비로 전환하는 것을 방지합니다.',
    },
    {
      type: 'table',
      headers: ['도장 작업', '인건비로 입력?', '소모품으로 입력?'],
      rows: [
        ['마스킹 및 마스크 제거', '예, 능동적 분 수', '테이프, 필름, 플러그, 스텐실'],
        ['도료 또는 레진 코팅 혼합', '예, 능동적 분 수', '도료, 신너, 컵, 필터, 장갑'],
        ['스프레이 또는 붓 도색', '예, 능동적 분 수', '코팅 재료 및 세척 용제'],
        ['건조 시간', '유상 인건비 또는 부스 용량을 블로킹할 때만', '열원 또는 램프가 별도 청구되지 않는 한 직접 재료 없음'],
      ],
    },
    {
      type: 'tip',
      title: '색상 복잡도를 명시적으로 반영하세요',
      html: '<p>단순한 프라이머 1코트와 마스킹된 2색 마감은 재료비가 비슷해도 인건비는 크게 다를 수 있습니다. 마진을 적용하기 전에 도장 분 수 필드를 사용하여 차이를 드러내세요.</p>',
    },
    {
      type: 'proscons',
      title: '고정 마감 할당 vs 실측 마감 분 수',
      items: [
        { pro: '고정 할당은 마감 요건이 안정적인 반복 작업에서 빠르게 처리할 수 있다.', con: '작업이 변경될 때 어느 단계가 이익을 잠식하는지 숨긴다.' },
        { pro: '실측 분 수는 견적을 감사 가능하고 업데이트하기 쉽게 만든다.', con: '작업장이 일반적인 부품 유형의 실제 마감 시간을 추적해야 한다.' },
        { pro: '시각적 비용 바는 고객 지향 견적을 내부적으로 설명하기 쉽게 만든다.', con: '외관 리스크와 재작업 가능성에 대한 판단을 대체하지 않는다.' },
      ],
    },
    { type: 'title', text: '소모품 및 후처리 간접비', level: 2 },
    {
      type: 'paragraph',
      html: '소모품은 마감 과정에서 소비되는 직접 재료입니다. 사포, 프라이머, 퍼티, 도료, 레진 세척액, IPA, 종이 타올, 니트릴 장갑, 칼날, 마스킹 테이프, 보호 플러그, 일회용 컵, 필터, 폴리싱 컴파운드, 클리어코트가 포함될 수 있습니다. 일부 작업장은 이를 간접비에 포함시키지만, 특수한 마감 기준, 큰 표면적, 강도 높은 샌딩, 또는 용제를 많이 사용하는 공정의 작업에서는 직접 필드로 계산하는 것이 더 안전합니다.',
    },
    {
      type: 'paragraph',
      html: '별도의 소모품 필드는 <strong>후처리 간접비 계산</strong> 워크플로우에도 도움이 됩니다. 간접비는 일반적으로 소모품보다 범위가 넓습니다: 임대료, 환기, 조명, 공기 필터링, 압축기 사용, 유지보수, 소프트웨어, 감독, 행정 시간. 이 계산기는 모든 간접비 항목을 배분하려 하지 않습니다. 대신 더 큰 견적 모델에 입력할 수 있는 순 직접 비용 소계를 제공하며, 해당 모델에서 간접비와 마진이 나중에 적용됩니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '인건비 단가', definition: '능동적 수동 마감 시간에 할당된 시간당 비용 또는 판매 단가.' },
        { term: '소모품', definition: '후처리 중 소비되는 직접 재료: 연마재, 코팅, 장갑, 세척액 등.' },
        { term: '환산 계수', definition: '통화 스케일링 또는 견적 조정을 위해 금액 입력에 적용되는 글로벌 승수.' },
        { term: '직접 비용', definition: '마감 중인 특정 부품 또는 로트에 귀속될 수 있는 비용.' },
        { term: '간접비', definition: '생산을 지원하지만 단일 부품이 쉽게 측정 가능한 양으로 소비하지 않는 사업 비용.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:receipt-text-outline',
      title: '마진은 어디에 추가해야 하나',
      html: '<p>이 도구는 이익 전 마감 비용을 계산합니다. 재료, 기계 시간, 후처리, 리스크, 간접비를 합산한 후 마진을 적용하세요. 그렇지 않으면 인건비가 많이 드는 작업이 과소 평가될 수 있습니다.</p>',
    },
    { type: 'title', text: '통화 선택 및 환산 계수', level: 2 },
    {
      type: 'paragraph',
      html: '통화 선택은 기호를 변경하고 실용적인 참조 계수를 사용해 기존 금액을 환산할 수 있습니다. 계산 자체는 통화 중립적입니다: 시급 30, 소모품 10은 기호가 유로, 달러, 파운드, 엔, 또는 다른 지원 통화든 동일한 구조를 생성합니다. 이는 국제 견적에 유용합니다. 수식은 안정적으로 유지되면서 표시는 고객이나 작업장 위치에 맞게 조정됩니다.',
    },
    {
      type: 'paragraph',
      html: '환산 계수는 사용자가 자동 환율 변환을 원하지 않거나 사용자 지정 상업 승수가 필요한 경우를 위해 존재합니다. 계수 <code>1</code>은 시급과 소모품이 이미 선택된 현지 통화로 입력되었음을 의미합니다. 계수 <code>1.15</code>는 두 금액 입력 모두 15% 증가시킵니다. 계수 <code>0.92</code>는 8% 감소시킵니다. 계수는 분이 아닌 금액에 영향을 미치기 때문에, 시각적 분해는 조정된 비용에 비례하여 유지됩니다.',
    },
    {
      type: 'summary',
      title: '통화 규칙',
      items: [
        '일반 통화 간 기호 및 편리한 스케일링을 위해 선택기를 사용하세요.',
        '입력 값이 이미 현지 통화인 경우 환산 계수를 1로 유지하세요.',
        '지역 가격표, 하청업체 마진, 임시 상업적 조정에는 사용자 정의 계수를 사용하세요.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '환율은 회계 정책이 아닙니다',
      badge: '가격 책정 참고',
      html: '<p>공식 청구서, 세금 또는 회계 보고서에는 회사가 요구하는 환율 및 반올림 정책을 사용하세요. 이 계산기는 생산 비용 견적 및 견적서 준비 목적으로 사용됩니다.</p>',
    },
    { type: 'title', text: '시각적 분해를 활용한 수익성 개선', level: 2 },
    {
      type: 'paragraph',
      html: '비율 바는 단순한 장식이 아닙니다. 어느 마감 단계가 비용을 소비하는지 보여줍니다. 샌딩이 지배적이면 프린트 방향, 레이어 높이, 서포트 인터페이스 또는 재료를 변경하면 수작업 시간을 줄일 수 있습니다. 도장이 지배적이면 견적에 별도의 마감 등급이 필요할 수 있습니다. 소모품이 지배적이면 대량 구매나 다른 코팅 공정이 인건비 효율성보다 더 큰 영향을 줄 수 있습니다. 서포트 제거가 지배적이면 서포트 접촉점을 재설계하는 것이 가장 가치 있는 개입이 될 수 있습니다.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        '서포트 제거가 가장 큰 비중을 차지하는 경우, 서포트 스타일, 밀도, 접촉 Z 거리, 프린트 방향을 검토하세요.',
        '샌딩이 가장 큰 경우, 레이어 높이, 심 위치, 인필 전략을 검토하고 견적 마감 수준이 가격에 비해 너무 높지 않은지 확인하세요.',
        '도장이 가장 큰 경우, 단색, 마스킹, 프리미엄 마감을 별도의 견적 등급으로 분리하세요.',
        '소모품이 가장 큰 경우, 코팅, 레진 세척액, 연마재, 마스킹 재료가 낭비되거나 과소 회수되고 있지 않은지 확인하세요.',
      ],
    },
    {
      type: 'table',
      headers: ['지배적 비용', '가능한 원인', '가격 책정 대응'],
      rows: [
        ['서포트 제거', '접근이 어려움, 조밀한 서포트, 취약한 세부 형상', '서포트 복잡도 추가 요금을 부과하거나 프린트 방향을 재검토하세요.'],
        ['샌딩', '높은 외관 요구사항, 보이는 레이어, 서포트 흔적', '마감 등급을 만들고 도장 준비 작업에 별도 요금을 부과하세요.'],
        ['도장', '마스킹, 다중 색상, 부스 청소', '도장을 별도 서비스 항목으로 견적하세요.'],
        ['소모품', '코팅, 연마재, 용제, 보호 자재', '직접 소모품 추적 또는 최소 재료 요금을 적용하세요.'],
      ],
    },
    {
      type: 'summary',
      title: '견적 워크플로우',
      items: [
        '단계별 능동적 수작업 시간을 실측하세요.',
        '전체 원가 포함된 마감 시급을 사용하세요.',
        '직접 소모품을 별도로 추가하세요.',
        '계산된 결과를 견적서에 복사한 뒤, 전체 가격 책정 모델에서 간접비와 마진을 적용하세요.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
