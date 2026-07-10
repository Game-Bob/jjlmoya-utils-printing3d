import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = '3d-print-time-workflow-optimizer';
const title = '3D 프린트 시간 최적화 도구';
const description =
  '두 FDM 프린트 설정을 나란히 비교: 레이어 수, 보정된 시간, 필라멘트 소비량, 비용, 품질 트레이드오프 및 하드웨어 속도 경고.';

const faqData = [
  {
    question: '단순 시간 계산기와의 차이점은?',
    answer:
      '복잡성 오버헤드, 레이어당 리트랙션 시간, 채우기 볼륨, 필라멘트 질량, 비용 및 시나리오 비교를 포함합니다.',
  },
  {
    question: '슬라이서 추정을 대체할 수 있나요?',
    answer:
      '아니요. 슬라이서는 정확한 툴패스를 알고 있습니다. 이 도구는 슬라이싱 전 계획용입니다.',
  },
  {
    question: '복잡성 설정은 무엇을 변경하나요?',
    answer:
      '낮음/중간/높음은 이동, 가속 손실, 모서리 및 아일랜드에 오버헤드 계수를 적용합니다.',
  },
  {
    question: '왜 100 mm/s 이상에서 경고하나요?',
    answer:
      '많은 프린터가 100 mm/s를 초과할 수 있지만 압출 및 냉각으로 인해 캘리브레이션 없이 고속이 위험합니다.',
  },
];
const howToData = [
  { name: '모델 크기 및 부피 입력', text: 'CAD, 슬라이서 미리보기 또는 근사치에서 높이와 부피를 추가합니다.' },
  { name: '시나리오 A 조정', text: '레이어 높이, 속도, 선 폭, 채우기, 재료, 복잡성을 선택합니다.' },
  { name: '시나리오 B 조정', text: '비교를 위해 두 번째 구성을 조정합니다.' },
  { name: '영향 읽기', text: '시간, 필라멘트, 비용, 레이어, 효율, 유량을 비교합니다.' },
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '프린트 작업 흐름 입력',
    resultsAriaLabel: '프린트 작업 흐름 결과',
    unitSystemLabel: '단위',
    metricLabel: '미터법',
    imperialLabel: '미국',
    currencyLabel: '통화',
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
    scenarioALabel: '시나리오 A',
    scenarioBLabel: '시나리오 B',
    modelHeightLabel: '모델 높이',
    modelVolumeLabel: '예상 부피',
    layerHeightLabel: '레이어 높이',
    speedLabel: '속도',
    lineWidthLabel: '선 폭',
    infillLabel: '채우기',
    complexityLabel: '복잡성',
    complexityTooltip: '가속, 모서리, 리트랙션, 아일랜드, 짧은 이동으로 인한 데드타임 추정.',
    pieceTypeLabel: '부품 유형',
    solidPieceLabel: '솔리드 연속',
    hollowPieceLabel: '중공 다중 공동',
    materialLabel: '재료',
    filamentPriceLabel: '필라멘트 가격',
    lowComplexity: '낮음 단순한 면',
    mediumComplexity: '중간 혼합 지오메트리',
    highComplexity: '높음 많은 아일랜드',
    estimatedTimeLabel: '예상 시간',
    filamentLabel: '필라멘트',
    costLabel: '재료비',
    layersLabel: '레이어',
    efficiencyLabel: '효율',
    flowLabel: '체적 유량',
    flowTooltip: '10-12 mm3/s 초과 시 언더익스트루젼 위험.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: '품질 트레이드오프',
    speedReductionLabel: '-10% 속도',
    speedReductionAddsLabel: '추가',
    speedReductionMinutesLabel: '분',
    qualityGainLabel: '약 8% 더 깨끗한 표면',
    hardwareWarning: '속도 >100 mm/s. 핫엔드 유량, 냉각, 가속 확인.',
    flowWarning: '유량이 표준 핫엔드 편안 구역을 초과합니다.',
    bestValueLabel: '최고 가치',
    timeDeltaLabel: '시간 차이',
    costDeltaLabel: '비용 차이',
    materialDeltaLabel: '재료 차이',
    winnerBadge: '최고 가치',
    scenarioPrefix: '시나리오',
    inScenarioLabel: '에서',
    fasterDirection: '더 빠름',
    cheaperDirection: '더 저렴',
    lighterDirection: '더 가벼움',
    criterionAlignedLabel: '최고 가치와 일치',
    criterionTradeoffLabel: '최고 가치 트레이드오프',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: '분',
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
    { type: 'title', text: '슬라이싱 전 3D 프린트 시간 추정 방법', level: 2 },
    {
      type: 'paragraph',
      html: '유용한 <strong>3D 프린트 시간 추정기</strong>는 단순히 부피를 속도로 나누는 것만으로는 부족합니다. FDM 프린터는 가속, 코너에서 감속, 필라멘트 후퇴, 섬 사이 이동, 작은 레이어 냉각, 방향 변경 후 압력 복구에 시간을 소비합니다. 최적화 도구는 부품을 인쇄 가능한 부피, 선 폭, 레이어 높이, 속도, 레이어 수 및 복잡성 계수로 모델링하여 초기 계획이 실제 워크플로 결정에 더 가깝도록 합니다.',
    },
    {
      type: 'paragraph',
      html: '기본 압출 시간은 부피를 체적 처리량으로 나누어 계산됩니다: 속도 × 선 폭 × 레이어 높이. 그런 다음 도구는 모델 복잡성에 대한 보정 계수를 적용하고 레이어당 고정 후퇴 허용량을 추가합니다. 이는 슬라이서 정밀도를 주장하지는 않지만, 0.20mm 드래프트 설정과 0.12mm 품질 설정을 선형 계산기보다 더 정직하게 비교합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: '단순 블록 및 매끄러운 부품용 낮은 복잡성 오버헤드', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: '많은 섬 및 후퇴용 높은 복잡성 오버헤드', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: '레이어당 추가된 계획된 후퇴 허용량', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: '압출 위험에 대한 표준 프린터 경고 임계값', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: '가능하면 슬라이서 부피 사용',
      html: '<p>최상의 부피 입력은 모델의 외부 경계 상자가 아니라 슬라이서 또는 CAD 재료 부피입니다. 경계 상자에는 곡선, 구멍, 손잡이 및 공동 주변의 빈 공기가 포함되므로 시간과 필라멘트를 과장할 수 있습니다.</p>',
    },
    { type: 'title', text: '레이어 높이가 시간을 이렇게 강하게 변화시키는 이유', level: 2 },
    {
      type: 'paragraph',
      html: '레이어 높이는 두 가지 방식으로 인쇄 시간에 영향을 미칩니다. 첫째, 체적 처리량이 변경됩니다: 동일한 속도와 폭에서 0.12mm 레이어는 0.20mm 레이어보다 초당 40% 적은 플라스틱을 압출합니다. 둘째, 레이어 수가 증가하여 레이어 변경 오버헤드, 후퇴, 압력 안정화 및 냉각 결정이 더 자주 발생합니다. 이것이 작은 외관 변경이 5시간 인쇄를 8시간 인쇄로 바꿀 수 있는 이유입니다.',
    },
    {
      type: 'table',
      headers: ['레이어 높이', '일반적 사용', '워크플로 결과'],
      rows: [
        ['0.28-0.32mm', '드래프트 부품, 대형 고정구, 빠른 확인', '레이어 수가 적고 처리량이 높지만 레이어 라인이 보입니다.'],
        ['0.18-0.22mm', '일반 PLA 및 PETG 인쇄', '많은 데스크톱 프린터에서 시간, 강도 및 표면 품질의 균형.'],
        ['0.10-0.14mm', '미니어처, 곡선 쉘, 가시적 소비자 부품', '처리량이 떨어지고 레이어 수가 증가하여 작업이 훨씬 길어집니다.'],
        ['0.10mm 미만', '특수 마감 케이스', '종종 기계 정확도, 냉각 및 감소하는 시각적 수익에 의해 제한됩니다.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '미세 레이어는 공식이 제안하는 것보다 느릴 수 있습니다',
      badge: '냉각 및 최소 레이어 시간',
      html: '<p>작은 모델은 슬라이서에서 최소 레이어 시간에 도달할 수 있습니다. 그럴 경우 체적 공식이 기계가 더 빠르게 움직일 수 있다고 말하더라도 프린터는 플라스틱을 식히기 위해 속도를 늦춥니다.</p>',
    },
    {
      type: 'summary',
      title: '레이어 높이 규칙',
      items: [
        '더 낮은 레이어 높이는 동일한 속도에서 초당 유량을 감소시킵니다.',
        '모델 부피가 변하지 않아도 더 많은 레이어가 반복 오버헤드를 추가합니다.',
        '최상의 비교는 시나리오 기반: 드래프트 프로필 대 품질 프로필.',
      ],
    },
    { type: 'title', text: '모델 복잡성 오버헤드 및 데드 타임', level: 2 },
    {
      type: 'paragraph',
      html: '데드 타임은 이론적 압출과 실제 작업 시간 사이의 차이입니다. 직선 꽃병 모양의 벽은 이동이 적고 후퇴가 거의 없습니다. 많은 구멍, 보스, 라벨, 리브 및 분리된 섬이 있는 기계식 인클로저는 프린터를 여러 번 시작하고 중지하도록 강제합니다. 가속 제한으로 인해 짧은 세그먼트에서 노즐이 명령된 속도에 도달하지 못할 수 있으므로 실제 평균 이동 속도는 슬라이더 값보다 낮습니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: '낮은 복잡성', description: '매끄러운 모델, 연속 윤곽, 적은 섬, 제한된 내부 이동.', icon: 'mdi:shape-outline', points: ['낮은 오버헤드', '안정적인 속도', '적은 후퇴'] },
        { title: '중간 복잡성', description: '구멍, 혼합 곡선, 채우기 변경 및 적당한 이동이 있는 일반 기능 부품.', icon: 'mdi:cog-outline', highlight: true, points: ['균형 잡힌 기본값', '약간의 이동 손실', '유용한 견적 기준선'] },
        { title: '높은 복잡성', description: '질감 표면, 많은 분리된 기능, 지원 인터페이스 및 후퇴가 많은 섹션.', icon: 'mdi:transit-connection-variant', points: ['높은 오버헤드', '스트링잉 위험 증가', '더 긴 실제 시간'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '오버헤드 계수', definition: '이동, 가속 손실, 후퇴 및 안정적인 압출 계산으로 포착되지 않는 기타 시간을 근사하는 승수.' },
        { term: '체적 유량', definition: '초당 노즐을 통해 밀려나는 플라스틱의 양, 속도 × 선 폭 × 레이어 높이로 계산.' },
        { term: '레이어 수', definition: '모델 높이를 레이어 높이로 나누고 올림한 값. 부분적인 최종 레이어도 여전히 패스가 필요하기 때문.' },
        { term: '언더 익스트루젼', definition: '핫엔드 또는 압출기가 요청된 속도 및 선 형상에 대해 충분한 용융 플라스틱을 공급할 수 없는 결함.' },
      ],
    },
    {
      type: 'message',
      title: '복잡성을 교정 노브로 취급하세요',
      ariaLabel: '복잡성 계수 참고',
      html: '<p>슬라이서가 유사한 모델에 대해 이 최적화 도구보다 일관되게 더 긴 시간을 보고하면 복잡성을 높이세요. 조정된 가속도를 가진 다이렉트 드라이브 프린터가 추정치를 능가하면 향후 계획을 위해 낮추세요.</p>',
    },
    { type: 'title', text: '필라멘트 소비, 비용 및 채우기', level: 2 },
    {
      type: 'paragraph',
      html: '시간은 워크플로 결정의 일부일 뿐입니다. 필라멘트 중량과 비용은 부품 견적, 배치 작업 계획 또는 미세 세부 프로필이 프린터를 묶어둘 가치가 있는지 결정할 때 중요합니다. 최적화 도구는 쉘 비율을 유지하고 내부 영역을 채우기 백분율로 스케일링하여 보정된 인쇄 가능 부피를 추정한 다음 해당 부피에 재료 밀도를 곱합니다.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '빠른 재료 계획을 위해 약 1.24 g/cm³의 PLA와 약 1.27 g/cm³의 PETG를 사용하세요.',
        '서포트, 브림, 래프트 또는 퍼지 구조가 작업의 일부인 경우 추정 부피를 높이세요.',
        '채우기를 낮추면 필라멘트와 시간이 줄어들지만, 벽, 상단 레이어 및 하단 레이어는 여전히 재료를 소비합니다.',
        '생산 배치의 경우 계산기 추정치를 사용된 실제 스풀 중량과 비교하고 향후 견적을 조정하세요.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: '워크플로 결정 예시',
      html: '<p>0.20mm 레이어의 120 cm³ PLA 부품은 작업장 지그에 허용될 수 있지만, 0.12mm 버전은 더 좋아 보이지만 프린터를 더 오래 점유합니다. 시간과 재료비를 나란히 비교하면 기계를 커밋하기 전에 트레이드오프를 확인할 수 있습니다.</p>',
    },
    {
      type: 'proscons',
      title: '속도 대 품질 최적화',
      items: [
        { pro: '더 높은 속도는 하루 더 많은 작업을 위해 프린터 용량을 확보할 수 있습니다.', con: '링잉, 약한 모서리, 불량한 냉각 및 핫엔드 유량 한계를 노출할 수 있습니다.' },
        { pro: '더 낮은 속도는 종종 표면 마감과 치수 일관성을 향상시킵니다.', con: '대기 시간이 증가하고 소규모 상업용 부품의 수익성이 낮아질 수 있습니다.' },
        { pro: '더 낮은 레이어 높이는 곡면과 미니어처를 개선합니다.', con: '레이어 수와 반복 기계 오버헤드를 증가시킵니다.' },
      ],
    },
    { type: 'title', text: '하드웨어 경고 및 실용적 속도 제한', level: 2 },
    {
      type: 'paragraph',
      html: '슬라이서 속도 값은 노즐이 모든 곳에서 해당 속도를 유지한다는 보장이 아닙니다. 표준 Cartesian 베드슬링거, 구형 Bowden 압출기, 짧은 용융 존 핫엔드 및 약한 부품 냉각은 가속, 저크, Pressure Advance, 온도 및 유량 교정이 조정되지 않는 한 100 mm/s 이상에서 어려움을 겪을 수 있습니다. 경고는 인쇄가 실패한다는 의미가 아닙니다. 요청된 설정을 하드웨어 동작에 대해 확인해야 함을 의미합니다.',
    },
    {
      type: 'table',
      headers: ['증상', '가능한 원인', '계획 대응'],
      rows: [
        ['얇은 벽 또는 간격', '핫엔드가 충분한 플라스틱을 녹이지 못하거나 압출기가 미끄러짐', '속도를 줄이거나, 온도를 조심스럽게 올리거나, 선 폭/레이어 높이를 낮추십시오.'],
        ['코너 근처 링잉', '가속도와 프레임 진동이 지배적', '보이는 벽의 가속도 또는 속도를 낮추십시오.'],
        ['말린 작은 특징', '냉각이 따라잡지 못함', '속도를 낮추고, 팬을 높이거나, 여러 부품을 인쇄하십시오.'],
        ['복잡한 부품의 스트링잉', '많은 이동 및 후퇴', '복잡성 오버헤드를 높이고 후퇴/온도를 조정하십시오.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '체적 유량이 진정한 속도 상한선입니다',
      badge: 'mm³/s 확인',
      html: '<p>동일한 이동 속도의 두 프로필이라도 다른 용융 속도를 요구할 수 있습니다. 80 mm/s의 0.30mm 레이어와 0.50mm 선은 동일한 속도의 0.12mm 레이어와 0.42mm 선보다 초당 훨씬 더 많은 플라스틱이 필요합니다.</p>',
    },
    {
      type: 'summary',
      title: '슬라이싱 전에 최적화 도구 사용',
      items: [
        '단일 숫자로 추측하는 대신 두 후보 프로필을 비교하십시오.',
        '레이어 수, 체적 유량 및 하드웨어 경고를 함께 관찰하십시오.',
        '마지막 상호 작용을 로컬에 유지하여 반복 계획이 이전 설정에서 계속될 수 있도록 하십시오.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
