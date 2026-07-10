import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintDurationEstimatorUI } from '../ui';

const slug = '3d-print-time-estimator-layer-height-speed';
const title = '레이어 높이와 속도 기반 3D 프린트 시간 예측기';
const description =
  '모델 높이, 레이어 높이, 프린트 속도, 채움, 복잡성, 이동 오버헤드 및 필라멘트 사용량을 결합하여 슬라이서를 열지 않고 3D 프린트 소요 시간을 예측합니다.';

const faqData = [
  {
    question: '슬라이서 없이 3D 프린트 시간을 어떻게 예측하나요?',
    answer:
      '총 레이어 수, 대략적인 재료 부피, 평균 프린트 속도, 채움률, 이동 및 방향 전환에 대한 여유분을 기준으로 예측할 수 있습니다. 최종 작업에는 슬라이서가 더 정확합니다.',
  },
  {
    question: '레이어 높이가 프린트 시간에 왜 그렇게 큰 영향을 미치나요?',
    answer:
      '레이어 높이는 Z축 레이어 수를 변경합니다. 0.12mm 프로필은 동일한 모델 높이에서 0.28mm 프로필보다 훨씬 더 많은 레이어를 생성하므로, 프린터가 외곽선, 채움 및 레이어 변경 오버헤드를 훨씬 더 많이 반복합니다.',
  },
  {
    question: '실제 프린트 시간이 속도를 거리로 나눈 값보다 더 긴 이유는 무엇인가요?',
    answer:
      '프린터는 모서리, 짧은 구간, 작은 디테일, 리트랙션, Z 이동 및 이동 경로에서 요청된 속도를 유지하는 경우가 드뭅니다. 가속 한계와 오버헤드로 인해 실제 소요 시간이 이상적인 운동 계산보다 길어집니다.',
  },
  {
    question: '이것이 슬라이서 예측보다 더 정확한가요?',
    answer:
      '아닙니다. 이 계산기는 초기 계획, 견적 및 비교 분석을 위한 것입니다. 슬라이서는 정확한 지오메트리, 서포트, 솔기, 가속 설정, 압출 폭 및 툴패스 순서를 검사할 수 있습니다.',
  },
];

const howToData = [
  { name: '모델 높이 입력', text: '모델 또는 계획된 프린트 작업에서 가장 높은 객체의 Z 높이를 사용합니다.' },
  { name: '레이어 높이 선택', text: '실제 프린트 프로필 값을 사용합니다(예: 일반 FDM 드래프트 품질 설정의 경우 0.20mm).' },
  { name: '속도, 면적 및 채움 추가', text: '평균 프린트 속도, 대략적인 XY 바닥 면적 및 목표 채움 백분율을 사용합니다.' },
  { name: '복잡성 및 오버헤드 조정', text: '매우 작은 디테일의 경우 복잡성을 높이고, 많은 이동, 서포트 또는 리트랙션의 경우 오버헤드를 높입니다.' },
  { name: '속도 시나리오 비교', text: '40, 60, 80 mm/s 행을 사용하여 더 빠른 프린트 속도가 총 작업 시간을 의미 있게 변경하는지 확인합니다.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PrintDurationEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D 프린트 시간 예측기 입력',
    resultsAriaLabel: '예상 3D 프린트 시간 결과',
    unitSystemLabel: '단위',
    metricLabel: '미터법',
    imperialLabel: 'US',
    modelHeightLabel: '모델 높이',
    modelHeightHint: '프린트의 가장 높은 Z 치수.',
    layerHeightLabel: '레이어 높이',
    speedLabel: '평균 프린트 속도',
    footprintLabel: '예상 바닥 면적',
    footprintHint: '부피 대용으로 사용되는 대략적인 XY 면적.',
    infillLabel: '채움 밀도',
    complexityLabel: '복잡성 계수',
    complexityHint: '단순한 형상은 0.80, 작은 디테일과 짧은 구간은 1.20.',
    overheadLabel: '이동 오버헤드',
    filamentDiameterLabel: '필라멘트 직경',
    densityLabel: '재료 밀도',
    timeLabel: '예상 프린트 시간',
    layersLabel: '총 레이어 수',
    materialLabel: '재료 예측',
    filamentLabel: '필라멘트 길이',
    effectiveSpeedLabel: '유효 속도',
    baseTimeLabel: '압출 시간',
    overheadTimeLabel: '오버헤드 시간',
    comparisonLabel: '속도 비교',
    minutesUnit: '분',
    hoursUnit: '시간',
    layersUnit: '레이어',
    gramUnit: 'g',
    ounceUnit: 'oz',
    meterUnit: 'm',
    footUnit: 'ft',
    percentUnit: '%',
    mmUnit: 'mm',
    inchUnit: 'in',
    mm2Unit: 'mm²',
    in2Unit: 'in²',
    mmSUnit: 'mm/s',
    inSUnit: 'in/s',
    cm3Unit: 'cm³',
    densityUnit: 'g/cm³',
    multiplierUnit: 'x',
    lowInsight: '짧은 예측: 슬라이서 오버헤드, 베드 예열 및 냉각이 실제 경과 시간의 큰 부분을 차지할 수 있습니다.',
    balancedInsight: '균형 잡힌 예측: 속도 변화도 중요하지만, 레이어 수와 오버헤드가 여전히 최종 시간을 결정합니다.',
    highInsight: '긴 예측: 단순히 속도를 높이기보다 두꺼운 레이어, 낮은 채움, 적은 서포트 또는 모델 분할을 고려하세요.',
  },
  seo: [
    { type: 'title', text: '레이어 높이와 속도로 3D 프린트 시간을 예측하는 방법', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>레이어 높이와 속도 기반 3D 프린트 시간 예측기</strong>는 슬라이서를 열기 전에 계획 숫자가 필요할 때, 여러 프린트 프로필을 비교할 때, 또는 대략적인 치수로 부품을 견적할 때 유용합니다. 핵심 아이디어는 간단합니다. 모델 높이를 레이어 높이로 나누면 레이어 수가 나오고, 예상 압출 경로 길이를 평균 속도로 나누면 이동 시간이 나옵니다. 어려운 부분은 실제 FDM 프린팅이 깔끔한 컨베이어 벨트가 아니라는 점입니다. 노즐은 모서리에서 속도를 줄이고, 리트랙션은 압출을 중단하며, 이동은 비프린팅 거리를 추가하고, 짧은 구간은 명령된 속도에 거의 도달하지 못합니다.',
    },
    {
      type: 'paragraph',
      html: '이 계산기는 의도적으로 가장 기본적인 공식을 넘어섭니다. <code>높이 / 레이어 높이 / 속도</code>만으로 충분하다고 가정하는 대신, 대략적인 모델 부피, 채움 밀도, 압출 선폭, 복잡성 계수, 레이어 변경 시간 및 이동 오버헤드 백분율을 결합합니다. 결과는 여전히 예측값이며 슬라이서를 대체하지는 않지만, 사용자가 검색하는 실용적인 질문인 <strong>레이어 높이, 채움 또는 속도를 변경하면 3D 프린트 시간이 얼마나 걸릴까</strong>에 답합니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0.20 mm', label: '균형 잡힌 프린트를 위한 일반적인 FDM 레이어 높이', icon: 'mdi:layers-outline' },
        { value: '15-20%', label: '유용한 이동 및 동작 오버헤드 시작 범위', icon: 'mdi:routes' },
        { value: '40-80 mm/s', label: '데스크톱 프린터의 일반적인 비교 속도', icon: 'mdi:speedometer' },
        { value: '1.75 mm', label: '재료 길이 계산에 사용되는 일반적인 필라멘트 직경', icon: 'mdi:circle-outline' },
      ],
    },
    {
      type: 'tip',
      title: '최고 속도가 아닌 평균 속도를 사용하세요',
      html: '<p>슬라이서 프로필이 120 mm/s를 표시하지만 외벽이 40 mm/s, 작은 외곽선이 25 mm/s, 채움이 90 mm/s로 실행된다면 평균 프린트 속도는 120 mm/s가 아닙니다. 계획을 위해 현실적인 평균 속도는 프로필에서 가장 빠른 이동보다 더 나은 예측을 제공하는 경우가 많습니다.</p>',
    },

    { type: 'title', text: '레이어 높이가 시간에这么大的 영향을 미치는 이유', level: 2 },
    {
      type: 'paragraph',
      html: '레이어 높이는 프린터가 동일한 기본 시퀀스(외곽선, 내부 구조, 상단/하단 표면, 다음 섬으로 이동, 다음 레이어로 Z 이동)를 반복해야 하는 횟수를 결정합니다. 80mm 모델은 0.20mm에서 400개의 레이어가 필요하지만 0.12mm에서는 약 667개의 레이어가 필요합니다. 각 얇은 레이어가 패스당 약간 적은 플라스틱을 사용하더라도 프린터는 훨씬 더 많은 레이어 전환, 더 많은 반복 외곽선, 더 많은 느린 가속 제한 이동 기회를 수행합니다.',
    },
    {
      type: 'table',
      headers: ['모델 높이', '레이어 높이', '레이어 수', '계획 해석'],
      rows: [
        ['80 mm', '0.28 mm', '286 레이어', '레이어 선이 보이는 빠른 드래프트 프로필.'],
        ['80 mm', '0.20 mm', '400 레이어', '많은 부품에 균형 잡힌 품질과 시간.'],
        ['80 mm', '0.12 mm', '667 레이어', '많은 시간을 추가할 수 있는 미세 디테일 프로필.'],
        ['160 mm', '0.20 mm', '800 레이어', '높은 부품은 일반 속도에서도 시간이 많이 소요됩니다.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '레이어 높이가 실제 병목일 때',
      badge: '레이어 확인',
      html: '<p>프린트 속도를 높여도 예측이 거의 변하지 않는다면, 작업이 레이어 수, 짧은 구간 및 오버헤드에 의해 지배될 수 있습니다. 그런 경우 0.12mm에서 0.20mm로 전환하는 것이 프린터를 60mm/s에서 80mm/s로 높이는 것보다 더 많은 시간을 절약할 수 있습니다.</p>',
    },
    {
      type: 'summary',
      title: '레이어 높이 결정 규칙',
      items: [
        'Z표면 마감이 중요하지 않은 프로토타입, 브래킷, 지그 및 부품에는 두꺼운 레이어를 사용하세요.',
        '완만한 곡선, 작은 텍스트, 미니어처 및 외관 표면에는 얇은 레이어를 사용하세요.',
        '높은 부품의 경우 각 추가 레이어가 오버헤드를 반복하므로 레이어 높이 변경이 빠르게 누적됩니다.',
      ],
    },

    { type: 'title', text: '프린트 속도, 가속도 및 복잡성 계수', level: 2 },
    {
      type: 'paragraph',
      html: '프린트 속도 값은 목표이지 약속이 아닙니다. 프린터는 그 속도까지 가속하고, 모서리 전에 감속하며, 저크/junction deviation 한계를 준수하고, 때로는 냉각, 브리지, 오버행, 최소 레이어 시간 및 작은 섬을 위해 속도를 늦춰야 합니다. 이것이 바로 <strong>프린트 속도-시간 계산기</strong>에 복잡성 계수가 필요한 이유입니다. 깨끗한 상자와 긴 직선 채움선은 요청된 속도에 가깝게 작동할 수 있습니다. 디테일한 피규어, 로고, 격자, 나사 부품 또는 유기적 조각은 최대 속도보다 가속 한계가 더 중요한 짧은 구간에서 대부분의 시간을 보낼 수 있습니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '단순한 형상',
          description: '상자, 패널 및 긴 채움 경로는 낮은 복잡성 승수를 사용할 수 있습니다.',
          icon: 'mdi:cube-outline',
          points: ['더 긴 연속 경로', '더 적은 섬', '더 적은 리트랙션 오버헤드'],
        },
        {
          title: '혼합 형상',
          description: '대부분의 브래킷, 인클로저, 소품 및 가정용 부품이 기본 승수에 가깝습니다.',
          icon: 'mdi:shape-outline',
          highlight: true,
          points: ['외곽선과 채움 모두 중요', '적당한 이동', '균형 잡힌 가속 손실'],
        },
        {
          title: '복잡한 형상',
          description: '작은 특징, 텍스트, 격자, 서포트 및 유기적 곡면은 더 높은 승수가 필요합니다.',
          icon: 'mdi:vector-polyline',
          points: ['짧은 구간이 지배적', '더 많은 시작 및 정지', '더 많은 리트랙션 및 이동'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '프린트 속도 높이기: 개선되는 것과 그렇지 않은 것',
      items: [
        { pro: '긴 채움선은 속도가 증가하면 더 빨리 끝날 수 있습니다.', con: '외벽과 작은 디테일은 여전히 프로필 제한에 의해 제한될 수 있습니다.' },
        { pro: '크고 디테일이 적은 프로토타입은 더 빠른 이동의 이점을 얻을 수 있습니다.', con: '가속, 링잉, 압출 유량 및 냉각이 사용 가능한 속도를 제한할 수 있습니다.' },
        { pro: '속도 비교 표는 잠재적 절감을 빠르게 보여줍니다.', con: '최소 레이어 시간과 같은 슬라이서별 감속을 예측할 수 없습니다.' },
      ],
    },
    {
      type: 'message',
      title: '속도 예측은 상대적 비교에 가장 유용합니다',
      ariaLabel: '속도 예측 참고',
      html: '<p>40, 60, 80 mm/s 행을 방향 비교에 사용하세요. 80 mm/s가 적은 양만 절약한다면 프린트는 아마도 원시 속도보다는 레이어, 오버헤드 또는 복잡성에 의해 제한되는 것입니다.</p>',
    },

    { type: 'title', text: '채움, 부피 및 재료 시간', level: 2 },
    {
      type: 'paragraph',
      html: '계산기는 바닥 면적과 모델 높이를 대략적인 부피 대용으로 사용한 다음, 유효 고체 비율로 그 부피를 조정합니다. 이는 메쉬 지오메트리를 읽는 것만큼 정확하지는 않지만 중요한 물리적 진실을 포착합니다. 채움을 줄여도 벽과 스킨은 사라지지 않습니다. 15% 채움으로 프린트된 부품에는 여전히 외곽선, 상단 레이어, 하단 레이어, 작은 솔리드 특징 및 때로는 서포트 인터페이스가 있습니다. 계산기는 예측에 쉘 비율을 유지하여 낮은 채움으로 인해 프린트 시간이 비현실적으로 거의 0으로 붕괴되지 않도록 합니다.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '넓은 물체, 상자, 평판, 트레이 및 대형 인클로저의 경우 바닥 면적을 늘리세요.',
        '좁은 타워, 얇은 피규어, 작은 브래킷 및 개방형 프레임의 경우 바닥 면적을 줄이세요.',
        '채움 백분율을 전체 부품 밀도가 아닌 계획 제어로 사용하세요.',
        '서포트, brim, raft, 퍼지 타워 및 멀티 컬러 폐기물이 모델 자체 외부에 시간을 추가한다는 것을 기억하세요.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:printer-3d-nozzle',
      title: '예시: 20% 채움이 20% 프린트 시간이 아닌 이유',
      html: '<p>80mm 높이의 인클로저는 4개의 벽, 6개의 하단 레이어, 6개의 상단 레이어, 나사 보스 및 큰 내부 공동이 있을 수 있습니다. 채움을 40%에서 20%로 낮추면 내부 경로 길이가 줄어들지만 벽과 스킨은 여전히 모든 레이어에서 프린트됩니다. 외곽선이 많은 모델의 경우 벽 수 또는 레이어 높이를 변경하는 것이 채움만 변경하는 것보다 시간에 더 큰 영향을 미칠 수 있습니다.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: '바닥 면적', definition: '모델이 차지하는 대략적인 XY 면적으로, 여기서는 대략적인 부피 입력으로 사용됩니다.' },
        { term: '유효 고체 비율', definition: '예상 압출 부피를 추정하는 데 사용되는 쉘 재료와 채움 재료의 계획 혼합.' },
        { term: '압출선', definition: '노즐이 놓는 플라스틱 비드; 단면은 레이어 높이와 압출 폭에 따라 달라집니다.' },
        { term: '필라멘트 길이', definition: '예상 플라스틱 부피를 공급하는 데 필요한 원시 필라멘트의 길이.' },
      ],
    },

    { type: 'title', text: '이동 오버헤드: 단순 계산기에서 누락된 부분', level: 2 },
    {
      type: 'paragraph',
      html: '단순한 시간 예측은 종종 비압출 이동을 무시합니다. 실제 프린터는 섬 사이를 이동하고, 필라멘트를 리트랙션 및 프라이밍하고, 와이핑하고, Z로 호핑하고, 프린트된 부품을 피하고, 방향을 변경하고, 때로는 냉각을 위해 일시 중지합니다. 이러한 작업은 눈에 보이는 재료를 만들지 않지만 실제 시간을 소비합니다. 고정 오버헤드 백분율은 전체 슬라이서 툴패스가 없을 때 이동을 설명하는 실용적인 방법입니다. 기본 범위 15-20%는 일반적인 단일 재료 FDM 부품에 유용한 출발점입니다.',
    },
    {
      type: 'table',
      headers: ['프린트 조건', '권장 오버헤드', '이유'],
      rows: [
        ['단일 단순 부품', '10-15%', '섬이 적고, 리트랙션이 적으며, 대부분 연속 경로.'],
        ['일반 기능성 부품', '15-22%', '적당한 외곽선, 채움 및 이동.'],
        ['하나의 플레이트에 많은 소형 부품', '22-35%', '객체 간 빈번한 이동 및 반복 시작.'],
        ['서포트 또는 디테일 표면', '25-40%', '서포트 인터페이스, 짧은 구간 및 리트랙션이 시간 추가.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '베드 예열은 포함되지 않습니다',
      badge: '전체 작업 시간',
      html: '<p>예측은 이동 및 압출 시간에 중점을 둡니다. 실제 기계 점유를 계획할 때 베드 예열, 노즐 예열, 프로빙, 메쉬 레벨링, 필라멘트 로딩, 냉각 및 부품 제거에 대한 별도의 시간을 추가하세요.</p>',
    },
    {
      type: 'tip',
      title: '실제 프린트에서 오버헤드 보정',
      html: '<p>완료된 작업 하나를 가져와 슬라이서 또는 스톱워치 시간을 이 계산기와 비교한 다음 예측이 일치할 때까지 오버헤드와 복잡성을 조정하세요. 이 로컬 보정은 일반 값을 계속 사용하는 것보다 향후 계획을 더 개선할 것입니다.</p>',
    },

    { type: 'title', text: '이 계산기를 신뢰해야 할 때와 슬라이서를 사용해야 할 때', level: 2 },
    {
      type: 'paragraph',
      html: '이 도구는 초기 예측, 견적 협의, 교실 시연 및 프로필을 확정하기 전 레이어 높이 대 속도 비교에 가장 강력합니다. 정확한 STL을 아직 사용할 수 없을 때, 고객이 대략적인 치수만 제공할 때, 또는 변경 사항을 조사할 가치가 있는지 알고 싶을 때 특히 유용합니다. 생산에 중요한 작업을 위해 슬라이서 예측을 대체하도록 설계되지 않았습니다. 슬라이서는 정확한 메쉬 지오메트리, 특징별 속도, 서포트 경로, 벽 순서, 상단/하단 표면, 솔기 배치, 가속 제어 및 기계별 펌웨어 동작을 검사하기 때문입니다.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        '이 계산기를 사용하여 0.12mm, 0.20mm 및 0.28mm 레이어 프로필을 빠르게 비교하세요.',
        '속도를 변경하기 전에 높은 모델이 레이어 수에 제한되는지 예측하는 데 사용하세요.',
        '대략적인 치수에서 대략적인 재료 부피, 필라멘트 길이 및 무게를 얻는 데 사용하세요.',
        '재료를 구매하거나, 기계 시간을 예약하거나, 납품일을 약속하기 전에 슬라이서를 사용하세요.',
      ],
    },
    {
      type: 'table',
      headers: ['질문', '계산기 답변', '슬라이서 답변'],
      rows: [
        ['두꺼운 레이어가 시간을 절약할까요?', '레이어 수에서 좋은 방향 예측.', '특정 경로 및 표면의 정확한 결과.'],
        ['80 mm/s가 60 mm/s보다 훨씬 빠를까요?', '유용한 속도 시나리오 비교.', '속도 및 가속 기능별 정확한 동작.'],
        ['필라멘트가 얼마나 필요할까요?', '대략적인 부피, 길이 및 무게.', '프로필별 재료 보고서.'],
        ['이 생산 작업을 견적할 수 있나요?', '초기 선별만 가능.', '최종 견적 및 계획에 필요.'],
      ],
    },
    {
      type: 'summary',
      title: '최적의 워크플로우',
      items: [
        '이 예측기로 레이어 높이, 속도 및 채움 선택을 좁히는 것으로 시작하세요.',
        '자신의 기계에서 알려진 프린트를 사용하여 복잡성과 오버헤드를 조정하세요.',
        '비용, 시간 또는 납품을 확정하기 전에 최종 후보 프로필을 다시 슬라이싱하세요.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
