import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InfillWeightSimulatorUI } from '../ui';

const slug = '3d-print-weight-infill-percentage-calculator';
const title = '3D 프린트 중량 infill 비율 계산기';
const description =
  '100% infill 기준 중량에서 infill 비율과 패턴을 변경할 때 부품 중량, 절약된 필라멘트 및 재료비를 추정합니다.';

const faqData = [
  {
    question: '100% infill 중량에서 3D 프린트 중량을 추정할 수 있나요?',
    answer:
      '예, 하지만 추정은 쉘, 벽, 상단 레이어, 하단 레이어를 내부 infill과 분리해야 합니다. 외부 둘레가 여전히 재료를 사용하기 때문에 0% infill에서 부품이 무중력이 되지는 않습니다.',
  },
  {
    question: 'infill 패턴이 추정 중량을 바꾸는 이유는 무엇인가요?',
    answer:
      '다른 패턴은 동일한 공칭 밀도에서 다른 툴패스 길이를 만듭니다. 라인과 동심 패턴은 일반적으로 더 가볍고, 허니콤, 큐빅, 트라이앵글은 내부 벽 길이를 더 많이 추가하는 경향이 있습니다.',
  },
  {
    question: '슬라이서 중량이 이 계산기보다 더 정확한가요?',
    answer:
      '슬라이서는 모델, 노즐, 압출 폭, 벽 수, 상단 레이어 및 재료 프로필을 알면 더 정확합니다. 이 계산기는 여러 버전을 다시 슬라이스하기 전에 빠른 계획을 위해 설계되었습니다.',
  },
  {
    question: '어떤 쉘 비율을 사용해야 하나요?',
    answer:
      '많은 장식용 또는 중간 크기 FDM 부품의 경우 20-35% 쉘 비율이 실용적인 시작 범위입니다. 작은 부품, 얇은 물체 및 구멍이 많은 부품은 더 높은 쉘 비율을 가질 수 있습니다.',
  },
];

const howToData = [
  {
    name: '100% infill 기준에서 시작',
    text: '동일한 모델에 대해 슬라이서가 100% infill로 보고한 중량을 사용하거나 알려진 완전 밀도 기준 프린트의 무게를 측정하세요.',
  },
  {
    name: '목표 infill 및 패턴 선택',
    text: 'Infill 슬라이더를 움직이고 사용하려는 슬라이서 설정에 가장 가까운 패턴을 선택하세요.',
  },
  {
    name: '쉘 및 폐기물 가정 조정',
    text: '얇거나 둘레가 많은 모델의 경우 쉘 비율을 높이고 퍼지, 스커트, 브림, 서포트 및 실패한 시작에 대한 폐기물을 추가하세요.',
  },
  {
    name: '중량 및 비용 절감 확인',
    text: '최종 추정 중량을 100% infill 기준선과 비교하여 재료 절감이 강성 트레이드오프의 가치가 있는지 결정하세요.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<InfillWeightSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Infill 중량 입력',
    resultsAriaLabel: '추정 프린트 중량 결과',
    unitSystemLabel: '단위',
    metricLabel: '미터법',
    imperialLabel: 'US',
    currencyLabel: '통화',
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
    fullWeightLabel: '100% infill 중량',
    fullWeightHint: '동일한 모델의 완전 밀도에 대한 슬라이서 값을 사용하세요.',
    infillLabel: '목표 infill',
    patternLabel: 'Infill 패턴',
    patternOptions: [
      { value: 'lines', label: '라인 - 경량 경로' },
      { value: 'grid', label: '그리드 - 슬라이서 기준선' },
      { value: 'triangles', label: '트라이앵글 - 강성 셀' },
      { value: 'gyroid', label: '자이로이드 - 부드러운 격자' },
      { value: 'cubic', label: '큐빅 - 3D 강성' },
      { value: 'honeycomb', label: '허니콤 - 조밀한 벽' },
      { value: 'concentric', label: '동심 - 윤곽 추종' },
    ],
    shellShareLabel: '쉘 비율',
    shellShareHint: 'infill과 함께 확장되지 않는 벽, 상단 레이어, 하단 레이어 및 솔리드 피처.',
    spoolPriceLabel: '필라멘트 가격',
    wasteLabel: '폐기물',
    estimatedWeightLabel: '추정 부품 중량',
    filamentSavedLabel: '절약된 필라멘트',
    materialCostLabel: '재료비',
    costSavedLabel: '절약된 비용',
    effectiveDensityLabel: '유효 밀도',
    shellLabel: '쉘',
    infillCoreLabel: 'Infill 코어',
    patternImpactLabel: '패턴 승수',
    comparisonLabel: '기준선 비교',
    fullInfillLabel: '100% infill',
    targetInfillLabel: '목표 설정',
    insightLow: '매우 낮은 infill은 많은 필라멘트를 절약할 수 있지만, 상단 표면, 나사 보스, 클립 및 하중 지지 영역에 추가 벽이나 로컬 수정자가 필요할 수 있습니다.',
    insightBalanced: '이것은 많은 시각적 및 경량 기능 프린트를 위한 균형 잡힌 계획 영역입니다. 쉘이 형태를 지탱하고 infill이 강성과 비용을 제어합니다.',
    insightHigh: '높은 infill은 절감 격차를 빠르게 좁힙니다. 모든 곳에서 조밀한 infill을 사용하기 전에 더 많은 벽, 더 강한 패턴 또는 재료 선택을 고려하세요.',
  },
  seo: [
    { type: 'title', text: '3D 프린트 중량 infill 비율 계산기 작동 방식', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3D 프린트 중량 infill 비율 계산기</strong>는 모델이 100% 미만의 내부 밀도로 인쇄될 때 남는 플라스틱의 양을 추정합니다. 중요한 세부 사항은 FDM 중량이 전체 중량에 infill 비율을 단순히 곱한 것이 아니라는 점입니다. 20% infill로 인쇄된 모델은 일반적으로 완전 밀도 버전의 20% 무게가 나가지 않습니다. 벽, 상단 레이어, 하단 레이어, 작은 솔리드 영역, 브림 및 서포트 인터페이스가 여전히 필라멘트를 소비하기 때문입니다. 이 계산기는 100% infill에서 알려진 또는 슬라이서가 보고한 중량으로 시작하여 구성 가능한 쉘 비율을 분리한 다음 목표 infill 및 패턴 동작에 따라 내부 코어를 조정합니다.',
    },
    {
      type: 'paragraph',
      html: '이 방법은 파일을 여러 번 다시 슬라이스하는 데 시간을 소비하기 전에 빠른 비교를 위해 설계되었습니다. 완전 밀도 PETG 브래킷이 240g으로 추정되는 경우 20% 자이로이드로 전환해도 48g 부품이 생성되지 않을 수 있습니다. 28%의 쉘 비율에서 내부 밀도를 계산하기 전에 둘레 질량이 이미 약 67g입니다. 그런 다음 infill 코어는 선택한 밀도와 패턴 승수에 따라 재료를 추가합니다. 결과는 선형 infill 수학보다 더 현실적이면서도 초기 결정에 충분히 빠른 계획 추정치입니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '20-35%', label: '많은 중간 FDM 부품의 일반적인 쉘 비율', icon: 'mdi:cube-outline' },
        { value: '0.88x', label: '동심 infill용 경량 윤곽 승수', icon: 'mdi:chart-line' },
        { value: '1.16x', label: '허니콤 계획용 조밀 경로 승수', icon: 'mdi:hexagon-multiple' },
        { value: '100%', label: '절감 기준선으로 사용되는 참조 중량', icon: 'mdi:weight-gram' },
      ],
    },
    {
      type: 'tip',
      title: '참조에 동일한 슬라이서 프로필 사용',
      html: '<p>가장 깨끗한 추정을 위해 대상 프린트에 사용할 것과 동일한 노즐, 압출 폭, 벽 수, 상단 레이어, 하단 레이어, 재료 밀도 및 서포트 설정으로 100% infill 중량을 생성하세요. 이러한 설정을 변경하면 쉘 질량이 변경되므로 infill만 비교하는 것이 덜 의미 있게 됩니다.</p>',
    },

    { type: 'title', text: 'Infill 중량이 선형이 아닌 이유', level: 2 },
    {
      type: 'paragraph',
      html: '<em>Infill 비율</em>이라는 용어는 직접적인 밀도 값처럼 들리지만 슬라이서는 둘레와 솔리드 표면이 생성된 후 남은 내부 영역에만 적용합니다. 두 개의 벽과 여섯 개의 상단 레이어가 있는 단순한 큐브는 큰 내부 부피를 가질 수 있으므로 infill 비율이 중량에 강하게 영향을 미칩니다. 얇은 전화기 스탠드, 구멍이 많은 기어 하우징 또는 가느다란 팔다리가 있는 미니어처는 둘레 형상이 너무 많아 infill을 낮춰도 예상보다 절감 효과가 작을 수 있습니다. 이것이 계산기가 쉘 비율을 숨기지 않고 노출하는 이유입니다.',
    },
    {
      type: 'table',
      headers: ['모델 유형', '예상 쉘 비율', '절감에 대한 의미'],
      rows: [
        ['대형 직사각형 인클로저', '15-25%', '대부분의 질량은 내부 부피이므로 infill이 중량을 크게 변화시킵니다.'],
        ['장식용 피규어 또는 유기적 모델', '25-45%', '많은 곡선과 좁은 영역이 둘레가 무거운 형상을 만듭니다.'],
        ['얇은 브래킷 또는 패널', '35-60%', '벽과 표면이 지배적입니다. infill 감소는 더 적은 플라스틱을 절약할 수 있습니다.'],
        ['소형 기계식 클립', '45-70%', '모델은 둘레만으로 거의 솔리드일 수 있습니다.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '추정치가 너무 무거워 보일 때',
      badge: '쉘 비율 확인',
      html: '<p>10% infill 설정에서도 여전히 높은 추정 중량이 나오면 쉘 비율이 클 가능성이 있습니다. 작거나 얇은 부품의 경우 맞을 수 있습니다. 벽 수, 상단 및 하단 두께, 모델에 많은 분리된 섬이나 좁은 리브가 있는지 확인하세요.</p>',
    },
    {
      type: 'summary',
      title: '실용적 해석',
      items: [
        'Infill 비율은 전체 프린트가 아닌 내부 코어에만 영향을 미칩니다.',
        '0% infill 부품에도 벽, 스킨, 솔기 및 때로는 작은 솔리드 피처가 있습니다.',
        '전체 중량 참조, 쉘 비율, 패턴 선택 및 폐기물 마진이 함께 더 나은 계획 수치를 생성합니다.',
      ],
    },

    { type: 'title', text: 'Infill 패턴 중량 승수', level: 2 },
    {
      type: 'paragraph',
      html: '두 프린트가 모두 25% infill로 설정되어 있어도 툴패스 형상이 변경되기 때문에 다른 양의 필라멘트를 사용할 수 있습니다. 라인과 동심 패턴은 일부 교차 구조를 피하기 때문에 내부 경로가 더 가벼운 경우가 많습니다. 그리드, 트라이앵글, 큐빅, 자이로이드 및 허니콤은 다른 양의 오버랩, 방향 보강 및 경로 길이를 생성합니다. 계산기는 전체 부품이 아닌 내부 코어에 적용되는 작은 <strong>패턴 승수</strong>로 이를 모델링합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '라인 및 동심',
          description: '균일한 강성보다 최소 중량과 빠른 인쇄가 더 중요할 때 유용합니다.',
          icon: 'mdi:format-line-spacing',
          points: ['더 낮은 경로 밀도', '장식용 부품에 적합', '방향 강도가 고르지 않을 수 있음'],
        },
        {
          title: '그리드 및 자이로이드',
          description: '강성이 중요한 일반적인 시각적 및 기능적 프린트를 위한 균형 잡힌 선택.',
          icon: 'mdi:grid',
          highlight: true,
          points: ['예측 가능한 슬라이서 기준선', '좋은 강성-중량 균형', '자이로이드는 하중을 고르게 분산'],
        },
        {
          title: '큐빅, 트라이앵글, 허니콤',
          description: '강성을 향상시킬 수 있지만 필라멘트 절감을 줄이는 더 무거운 계획 선택.',
          icon: 'mdi:hexagon-outline',
          points: ['더 많은 내부 벽 길이', '더 나은 다방향 강성', '더 긴 인쇄 시간이 일반적'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '패턴 선택 트레이드오프',
      items: [
        { pro: '가벼운 패턴은 재료비를 줄이고 인쇄 시간을 단축할 수 있습니다.', con: '더 약한 방향이나 더 적은 상단 표면 지지를 만들 수 있습니다.' },
        { pro: '조밀한 패턴은 강성을 개선하고 굽힘을 줄입니다.', con: '약한 벽 설계를 해결하지 않고 더 높은 infill 비용에 근접할 수 있습니다.' },
        { pro: '자이로이드는 많은 방향으로 하중을 고르게 분산합니다.', con: '보수적인 가속 설정이 있는 기계에서 더 느리게 인쇄될 수 있습니다.' },
      ],
    },
    {
      type: 'message',
      title: '패턴 승수는 계획 가정입니다',
      ariaLabel: '패턴 승수 참고',
      html: '<p>슬라이서 엔진은 패턴을 다르게 구현합니다. 승수를 초기 추정치로 취급하고 실제 슬라이서 미리보기 및 재료 사용량 보고서로 중요한 생산 작업을 확인하세요.</p>',
    },

    { type: 'title', text: '필라멘트 및 비용 절감 계산', level: 2 },
    {
      type: 'paragraph',
      html: '재료비 추정은 최종 그램에 스풀 가격(kg당)을 곱합니다. 계산기가 126g 프린트를 예측하고 스풀이 kg당 24달러인 경우 플라스틱 부분은 기계 시간, 전기, 인건비, 포장 및 실패한 인쇄를 제외하고 약 3.02달러입니다. 절약된 비용은 동일한 폐기물 비율을 사용하여 동일한 모델을 100% infill 기준선과 비교합니다. 이는 견적, 배치 계획 및 더 무거운 infill 설정이 추가 재료의 가치가 있는지 결정하는 데 유용합니다.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '퍼지 라인, 스커트, 브림, 서포트, 래프트, 색상 변경 및 짧은 실패 시작에 폐기물 비율을 사용하세요.',
        '단일 프로토타입의 경우 5-10%의 폐기물 마진이 일반적으로 0보다 현실적입니다.',
        '서포트나 연마 재료가 있는 생산 배치의 경우 여러 작업에 걸쳐 실제 잔여 및 실패 중량을 기록하세요.',
        'PLA, PETG, ABS, ASA, 나일론 및 충전 복합재를 비교할 때 일반 평균이 아닌 정확한 재료의 스풀 가격을 사용하세요.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-multiple',
      title: '예시: 밀집 프로토타입에서 생산 infill로',
      html: '<p>100% infill 프로토타입의 무게는 240g입니다. 28% 쉘 비율, 20% 자이로이드, 6% 폐기물 및 24달러/kg 필라멘트로 추정치는 48g이 아닌 100g대 초반에 도달합니다. 이 차이는 40개 복사본을 견적할 때 중요합니다. 부품당 작은 오류가 전체 스풀의 플라스틱이 됩니다.</p>',
    },
    {
      type: 'table',
      headers: ['입력', '중요한 이유', '일반적인 실수'],
      rows: [
        ['100% 중량', '최대 재료 기준선을 정의합니다.', '대상 프린트와 다른 벽 수를 사용합니다.'],
        ['목표 infill', '내부 코어 밀도를 제어합니다.', '20% infill이 총 부품 중량의 20%를 의미한다고 가정합니다.'],
        ['패턴', '툴패스 길이와 강성을 변경합니다.', '슬라이서 프리셋 비교 시 패턴을 무시합니다.'],
        ['폐기물', '최종 부품 외부에서 사용된 실제 필라멘트를 추가합니다.', '서포트와 실패 시작을 잊습니다.'],
      ],
    },

    { type: 'title', text: '약한 부품 없이 중량 절감을 위한 infill 선택', level: 2 },
    {
      type: 'paragraph',
      html: '중량 절감은 부품이 여전히 기능을 수행하는 경우에만 가치가 있습니다. 시각적 모델, 전시 소품, 코스프레 부품 및 커버의 경우 충분한 상단 레이어가 있는 낮은 infill로 완벽할 수 있습니다. 브래킷, 고정구, 나사가 있는 인클로저, 스냅 피처 및 열이나 충격에 노출된 부품의 경우 가장 좋은 개선은 단순히 전체 infill을 높이는 것보다 더 많은 벽이나 국부적 보강인 경우가 많습니다. 4개의 벽과 20% 자이로이드가 있는 부품은 2개의 벽과 50% infill이 있는 부품보다 적절한 위치에서 더 강할 수 있습니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '쉘 비율', definition: '벽, 상단 레이어, 하단 레이어 및 불가피한 솔리드 형상에 속하는 완전 밀도 중량의 부분.' },
        { term: '공칭 infill', definition: '쉘 생성 후 슬라이서에서 내부 영역에 대해 선택한 비율.' },
        { term: '유효 밀도', definition: '쉘 비율, infill 비율 및 패턴 승수를 결합한 후 완성된 프린트의 추정 총 밀도.' },
        { term: '폐기물 마진', definition: '퍼지, 브림, 서포트, 테스트 및 실패한 시작과 같은 비부품 재료에 사용되는 추가 필라멘트.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '중량 절감을 유일한 설계 기준으로 사용하지 마세요',
      badge: '기능성 프린트',
      html: '<p>레이어 라인을 가로질러 하중이 가해지는 부품, 나사 인서트가 있는 부품 및 나사 압축이 있는 부품은 별도의 기계적 사고가 필요합니다. Infill은 도움이 되지만 벽 두께, 방향, 재료, 온도 및 응력 집중이 밀도만큼 자주 중요합니다.</p>',
    },
    {
      type: 'summary',
      title: '빠른 결정 규칙',
      items: [
        '장식용 프린트: 먼저 infill을 줄인 다음 상단 표면 품질을 확인하세요.',
        '경량 기능성 프린트: 높은 infill 전에 균형 잡힌 패턴과 충분한 벽을 사용하세요.',
        '브래킷 및 고정구: 로컬 수정자로 구멍, 모서리 및 하중 경로를 보강하세요.',
        '배치 작업: 재료 구매 전에 슬라이서로 최종 추정치를 확인하세요.',
      ],
    },

    { type: 'title', text: '계산기를 신뢰해야 할 때와 다시 슬라이스해야 할 때', level: 2 },
    {
      type: 'paragraph',
      html: '이 계산기는 빠른 추정, 초기 견적, 재료 구매 및 슬라이서를 반복적으로 열지 않고 여러 infill 옵션을 비교하는 데 가장 적합합니다. 치수 설정이 변경될 때 슬라이서를 대체하지는 않습니다. 노즐 직경, 압출 폭, 벽 수, 상단 두께, 하단 두께, 적응형 레이어, 서포트 스타일, 아이로닝, 베이스 모드 또는 재료 밀도를 변경하는 경우 100% 기준선과 쉘 비율을 업데이트해야 합니다.',
    },
    {
      type: 'list',
      icon: 'mdi:calculator-variant-outline',
      items: [
        '모델과 프로필이 대부분 고정되어 있고 밀도나 패턴을 탐색할 때 계산기를 사용하세요.',
        '벽 수, 서포트 생성, 노즐 크기 또는 재료 프로필이 변경되면 다시 슬라이스하세요.',
        '생산 수준의 비용 기록이나 재고 예측이 필요할 때 완성된 부품의 무게를 측정하세요.',
        '반복 작업의 실제 그램을 기록하세요. 실제 데이터는 쉘 비율 가정을 빠르게 개선합니다.',
      ],
    },
    {
      type: 'tip',
      title: '견적을 위한 신뢰할 수 있는 워크플로',
      html: '<p>완전 밀도 슬라이서 참조를 만들고, 이 계산기로 여러 infill 옵션을 추정하고, 가장 유망한 두 개를 선택한 다음 해당 두 최종 후보만 다시 슬라이스하세요. 이렇게 하면 견적을 빠르게 유지하면서 최종 가격을 슬라이서별 재료 보고서에 근거할 수 있습니다.</p>',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
