import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'filament-dehydration-estimator';
const title = '필라멘트 건조 추정기: 열 재생 가이드';
const description = '지수 함수적 흡착 동역학, 습도 노출, 폴리머 유형 및 건조 챔버 온도를 사용하여 흡습성 필라멘트 포화를 모델링합니다.';

const faqData = [
  {
    question: '필라멘트 건조 추정기는 수분 포화도를 어떻게 계산합니까?',
    answer: '지수 포화 모델을 사용합니다: 최대 재료 흡수량에 1에서 e의 마이너스 반응 계수 곱하기 노출 시간을 뺀 값을 곱한 다음, 주변 상대 습도로 조정합니다.',
  },
  {
    question: '나일론이 PLA보다 건조가 더 필요한 이유는 무엇입니까?',
    answer: '나일론은 PLA보다 수분 용량이 높고 흡착 계수가 빠르기 때문에 동일한 습도와 노출 시간 하에서 더 빨리 품질에 손상을 주는 수분량에 도달합니다.',
  },
  {
    question: '건조 온도가 높을수록 항상 더 안전한 건조가 가능합니까?',
    answer: '아닙니다. 온도가 높을수록 건조는 빨라지지만, 각 폴리머에는 안전한 챔버 온도 범위가 있습니다. 이를 초과하면 필라멘트가 연화되거나 스풀이 변형되거나 인쇄 거동이 달라질 수 있습니다.',
  },
  {
    question: '가수분해 위험 지표는 무엇을 의미합니까?',
    answer: '추정된 수분 함량을 재료의 임계 임계값과 비교하여 흡수된 수분이 기포, 스트링잉, 레이어 결합력 약화 또는 폴리머 체인 손상을 증가시킬 만큼 높을 때 경고를 표시합니다.',
  },
];

const howToData = [
  { name: '폴리머 선택', text: '모델이 올바른 평형 용량과 반응 계수를 로드할 수 있도록 PLA, PETG, ABS, ASA, TPU, 나일론, PC 또는 PVA를 선택합니다.' },
  { name: '보관 습도 입력', text: '스풀이 노출된 방, 건조 상자 또는 작업장의 상대 습도를 설정합니다.' },
  { name: '노출 시간 설정', text: '필라멘트가 밀봉된 드라이 박스나 작동 중인 건조기 외부에서 보낸 일수를 입력합니다.' },
  { name: '건조 온도 선택', text: '폴리머 및 스풀 재료에 대해 안전한 범위 내의 챔버 온도를 사용합니다.' },
  { name: '건조 주기 시작', text: '저장된 건조 타이머를 시작한 다음, 추정된 수분 부하가 제거됨에 따라 챔버 시각화 표시가 점차 줄어들도록 둡니다.' },
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
  applicationCategory: 'EngineeringApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '단위',
    metricLabel: '미터법',
    imperialLabel: '야드파운드법',
    materialLabel: '폴리머',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: '나일론 PA',
    materialPcLabel: '폴리카보네이트',
    materialPvaLabel: 'PVA 서포트',
    humidityLabel: '상대 습도',
    exposureLabel: '노출 시간',
    dryTempLabel: '건조 챔버',
    spoolMassLabel: '스풀 질량',
    calculateLabel: '건조 주기 시작',
    pauseCycleLabel: '주기 일시 중지',
    resumeCycleLabel: '주기 재개',
    resetCycleLabel: '주기 초기화',
    saturationLabel: '수분 함량',
    absorbedLabel: '흡수된 수분',
    dryingTimeLabel: '건조 주기',
    remainingTimeLabel: '남은 시간',
    cycleProgressLabel: '주기 진행 상황',
    hydrolysisLabel: '가수분해 위험',
    stableLabel: '안정',
    watchLabel: '감시 구역',
    criticalLabel: '위험',
    chamberReadyLabel: '챔버 준비 완료',
    chamberRunningLabel: '건조 주기 실행 중',
    chamberCompleteLabel: '수분 제거 완료',
    curveLabel: '흡착 곡선',
    kineticLabel: '포화 동역학',
    equilibriumLabel: '평형 포화에 대한 지수 함수적 접근',
    daysUnit: '일',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: '시간',
    minutesUnit: '분',
    secondsUnit: '초',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: '흡착 동역학 이해: 나일론이 PLA처럼 작동하지 않는 이유', level: 2 },
    { type: 'paragraph', html: '제대로 된 <strong>3D 필라멘트 건조 시간 추정기</strong>는 수분을 선형적인 흐름으로 취급할 수 없습니다. 흡습성 폴리머는 매일 영원히 동일한 비율로 수분을 흡수하지 않습니다. 폴리머는 평형 상태에 가까워집니다. 처음에는 빠르고 포화 상태에 가까워질수록 느려지며, 주변 상대 습도에 크게 의존합니다. 그렇기 때문에 70% RH에서 이틀 동안 방치된 스풀의 수분량이 나흘 동안 방치된 스풀의 수분량의 절반에 불과한 것은 아닙니다. 노출 초기 단계에서 가장 가파른 수분 증가가 일어나며, 특히 나일론, TPU, PVA 및 물 분자를 끌어당기는 극성 그룹을 가진 기타 재료에서 더욱 두드러집니다.' },
    { type: 'paragraph', html: '이 도구는 수분 함량을 <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>으로 모델링합니다. <code>S_max</code>는 폴리머의 평형 흡수 용량, <code>k</code>는 흡착 속도, <code>t</code>는 노출 시간이며, <code>RH</code>는 보관 환경에 맞춰 결과를 스케일합니다. 이 결과는 실험실 인증서가 아니라, 동일한 작업장에서 PLA는 인쇄 가능한 상태로 유지되면서 나일론은 탁탁 소리가 나고, 기포가 생기고, 스트링잉이 발생하며, 레이어 결합 강도를 잃게 되는 이유를 설명하는 엔지니어링 계획 모델입니다.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'PLA의 계획 평형 용량' },
      { value: '3.2%', label: '나일론 PA의 계획 평형 용량' },
      { value: '5.8%', label: 'PVA 서포트 필라멘트의 계획 평형 용량' },
      { value: 'RH 스케일', label: '주변 습도가 포화 곡선에 곱해집니다' },
    ] },
    { type: 'diagnostic', variant: 'info', title: '수분 증상은 공정의 증상입니다', badge: '인쇄 단서', html: '탁탁 터지는 소리, 증기 기포, 실키한 표면이 거칠어지는 변화, 과도한 스트링잉, 취약한 벽, 탁한 압출물 등은 단순한 슬라이서의 문제가 아닙니다. 이는 주로 융해 영역에서 수분이 급격히 증발하거나 침적 전에 가수분해로 인해 폴리머 체인의 길이가 단축되었음을 나타냅니다.' },

    { type: 'title', text: '지수 포화 모델이 건조 결정을 바꾸는 방식', level: 2 },
    { type: 'paragraph', html: '선형 계산기는 보통 재료를 입력받아 고정된 건조 시간을 반환합니다. 이는 빠른 참조를 위해서는 작동하지만, 필라멘트가 실제로 얼마나 많은 수분을 흡수했는지에 대한 진짜 질문을 가려버립니다. 밀봉된 드라이 박스 내부 15% RH에서 3주 동안 보관된 스풀은 재생이 거의 또는 전혀 필요하지 않을 수 있습니다. 반면, 습한 차고에 주말 동안 노출된 동일한 폴리머는 완전한 챔버 주기가 필요할 수 있습니다. 포화 모델링은 모든 스풀을 동일하게 젖은 것으로 처리하는 대신 건조 권장 사항을 노출 이력과 연결합니다.' },
    { type: 'table', headers: ['입력', '물리적 의미', '추정에 미치는 영향'], rows: [
      ['상대 습도', '스풀 주변의 수분 활성도', '상대 습도가 높을수록 평형 목표와 최종 흡수율이 높아집니다.'],
      ['노출 시간', '확산이 진행되도록 허용된 기간', '초기 며칠이 가장 중요하며, 포화에 가까워질수록 곡선의 상승이 느려집니다.'],
      ['재료 계수', '폴리머가 평형에 접근하는 속도', '나일론과 PVA는 PLA 또는 ASA보다 평형에 더 빨리 도달합니다.'],
      ['건조 온도', '탈착에 사용 가능한 열 에너지', '안전한 챔버 온도가 높을수록 추정 주기가 단축됩니다.'],
      ['스풀 질량', '존재하는 폴리머의 양', '백분율은 재료의 상태이며, 흡수된 수분 그램 수는 스풀 질량에 비례합니다.'],
    ] },
    { type: 'tip', title: '날씨 앱이 아닌 실제 보관 환경을 추정하세요', html: '필라멘트가 실제로 위치했던 보관 상자, 프린터 인클로저, 캐비닛 또는 작업장 내부의 습도를 사용하십시오. 지역 일기 예보는 가열된 프린터 옆, 지하실 선반 또는 건조제가 포함된 밀봉 용기 내부의 습도와 크게 다를 수 있습니다.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: '포화 부근에서 진행 링이 느려지는 이유', html: '시각적 링은 방정식과 동일한 지수 함수적 거동을 따릅니다. 폴리머가 건조할 때는 수분 구배가 강하기 때문에 빠르게 채워집니다. 평형 상태에 가까워지면 구배가 약해지므로 눈에 보이는 충전 속도가 느려집니다. 이 속도 저하는 애니메이션 효과가 아닌 물리 법칙입니다.' },

    { type: 'title', text: '재료별 필라멘트 건조 계산기 범위', level: 2 },
    { type: 'paragraph', html: '건조 권장 사항은 폴리머와 스풀을 모두 고려해야 합니다. PLA는 과열 시 연화되거나 크리프 변형이 발생할 수 있습니다. PETG는 더 높은 열을 견딜 수 있지만 여전히 보수적인 챔버 제어가 권장됩니다. 나일론는 더 많은 물을 흡수하고 더 강력하게 유지하므로 일반적으로 더 뜨겁고 긴 주기가 필요합니다. PVA는 습기에 극도로 민감하여 노출된 상태로 방치하면 인쇄가 불가능해질 수 있습니다. PC는 겉보기에 젖어 보이지 않더라도 건조 후 인쇄 품질이 향상되는 경우가 많습니다. 추정기는 이러한 차이를 사용하여 일반적인 <strong>필라멘트 건조 계산기</strong>를 재료 맞춤형 가이드로 전환합니다.' },
    { type: 'comparative', columns: 2, items: [
      { title: '낮거나 중간 수준의 흡습 반응', description: 'PLA, ABS 및 ASA는 일반적으로 수분을 적고 느리게 흡수하지만, 습한 환경에 장기간 노출되면 품질 저하를 겪습니다.', points: ['짧은 건조 주기', '낮은 평형 수분량', '증상이 점진적으로 나타남'] },
      { title: '높은 흡습 반응', description: '나일론, TPU, PVA 및 일부 PC 등급은 더 적극적인 보관과 엄격한 재생 관리가 필요합니다.', points: ['높은 흡수 수분 질량', '빠른 초기 포화 속도', '기포 형성 및 레이어 강도 약화 위험 증가'] },
    ] },
    { type: 'table', headers: ['재료', '대표적인 챔버 목표 온도', '계획 참고 사항'], rows: [
      ['PLA', '40-55 C', 'PLA 및 일부 스풀 코어가 변형될 수 있으므로 과도한 열을 피하십시오.'],
      ['PETG', '55-70 C', '몇 시간 건조 후 표면 일관성이 향상되고 스트링잉이 감소하는 경우가 많습니다.'],
      ['ABS / ASA', '65-85 C', '나일론보다 흡수량은 적지만 건조 보관의 이점이 있습니다.'],
      ['TPU', '45-60 C', '유연한 등급은 발포나 스트링잉을 유발할 만큼 수분을 충분히 흡수할 수 있습니다.'],
      ['나일론 PA', '70-90 C', '중요한 기능적 인쇄 전에는 일반적으로 활성 건조가 필요합니다.'],
      ['PVA', '40-55 C', '습기에 민감한 서포트 재료이므로 사용 후 즉시 밀봉하여 보관하십시오.'],
    ] },
    { type: 'proscons', title: '고정 건조 차트 vs 포화 모니터', items: [
      { pro: '고정 차트는 기본 주기만 필요할 때 빠르게 사용할 수 있습니다.', con: '드라이 박스 스풀과 습한 외기에 방치된 스풀을 구분할 수 없습니다.' },
      { pro: '포화 모델링은 초기 노출이 왜 심각할 수 있는지 설명합니다.', con: '여전히 대략적인 재료 계수와 보관 이력에 의존합니다.' },
      { pro: '건조 온도 입력은 실제 챔버 설정을 반영합니다.', con: '필라멘트 제조사가 제공하는 안전 온도 제한을 대체하지는 않습니다.' },
      { pro: '흡수된 수분 그램 수는 전체 및 일부 스풀에 대해 구체적인 수치를 제시합니다.', con: '스풀 질량만으로는 외곽 권선이 내부 코어보다 더 젖어 있는지 알 수 없습니다.' },
    ] },

    { type: 'title', text: '가수분해 위험: 젖은 필라멘트가 영구적으로 손상될 때', level: 2 },
    { type: 'paragraph', html: '수분은 인쇄 품질의 문제에만 국한되지 않습니다. 압출 온도에서 흡수된 물은 영향을 받기 쉬운 폴리머에서 가수분해를 촉진할 수 있습니다. 가수분해는 분자 사슬을 끊어 인성, 연신율 및 신뢰성을 감소시킵니다. 이 효과는 브래킷, 지그, 기어, 덕트 및 하중을 지탱하는 부품에 사용되는 엔지니어링 재료에 특히 중요합니다. 젖은 스풀도 여전히 압출될 수는 있지만, 가공 중에 폴리머가 화학적으로 분해되어 부품이 조기에 파손될 수 있습니다.' },
    { type: 'glossary', items: [
      { term: '흡습성', definition: '주변 공기에서 수분을 끌어당기고 보유하려는 재료의 성질.' },
      { term: '평형 수분', definition: '지정된 습도에서 충분한 시간 노출된 후 폴리머가 도달하는 수분 함량.' },
      { term: '흡착 계수', definition: '포화 곡선이 상승하는 속도를 제어하는 단순화된 동역학 값.' },
      { term: '탈착', definition: '역과정: 가열 건조 중에 폴리머에서 물이 빠져나가는 과정.' },
      { term: '가수분해', definition: '여러 엔지니어링 폴리머에서 열 조건 하에 물에 의해 발생하는 화학적 사슬 절단.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: '표면이 건조하다고 해서 코어가 건조한 것은 아닙니다', badge: '확산 제한', html: '필라멘트는 바깥쪽에서 안쪽으로 건조됩니다. 짧고 뜨거운 건조는 표면 상태를 개선할 수 있지만 밀도가 높은 스풀의 내부 권선은 여전히 습한 상태로 유지될 수 있습니다. 대형 스풀, 판지 측면 및 단단히 감겨진 필라멘트는 모두 재생 속도를 늦출 수 있습니다.' },
    { type: 'message', title: '시각적 규칙', html: '진행 링이 깨끗한 파란색에서 탁한 회청색 상태로 바뀔 때, 도구는 일반적인 수분 관리에서 가수분해 감시 영역으로의 전환을 표시합니다. 이 시점부터 건조는 단순한 미관 정리가 아닌 품질 관리의 일부가 됩니다.' },

    { type: 'title', text: '신뢰할 수 있는 필라멘트 건조 워크플로 구축', level: 2 },
    { type: 'paragraph', html: '실용적인 <strong>흡습성 재료 포화 가이드</strong>는 예측과 일상을 결합합니다. 보관 습도를 측정하고, 스풀에 개봉 날짜를 표시하고, 민감한 폴리머는 밀봉 상자에 보관하고, 건조제가 포화되기 전에 교체하고, 기계적 성능이 중요한 부품을 인쇄하기 전에 건조하십시오. 가장 좋은 워크플로는 불필요한 열 주기로 인해 재료가 노화되거나, 스풀이 휘거나, 생산 시간이 낭비되는 것을 방지하기 위해 젖고 마르는 주기가 반복되는 것을 막는 것입니다.' },
    { type: 'list', items: [
      '보관 이력이 확실하지 않은 경우 장시간 인쇄 전에 나일론, PVA, TPU 및 PC를 건조하십시오.',
      'PLA와 PETG도 밀봉 상태를 유지하십시오. 흡수율이 낮다고 해서 흡수율이 0인 것은 아닙니다.',
      '디스플레이 표시 온도가 낙관적일 수 있으므로 건조기 내부에 독립된 온도계를 사용하십시오.',
      '습한 방에서 몇 시간 동안 인쇄할 때는 드라이 박스에서 필라멘트를 직접 공급하십시오.',
      '표시용 비즈나 습도 센서가 상자 내부 습도의 상승을 나타낼 때 건조제를 교체하거나 재생하십시오.',
      '필라멘트 및 스풀의 유리 전이 온도 또는 연화 범위를 초과하여 건조하지 마십시오.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: '건조 챔버는 재생 시스템입니다', html: '챔버는 안정적인 열, 공기 흐름 및 습기가 빠져나갈 수 있는 경로를 제공해야 합니다. 환기나 건조제 없이 밀봉된 상자를 가열하면 단순히 필라멘트의 물이 챔버 내부 공기로 이동했다가 다시 되돌아갈 뿐입니다.' },
    { type: 'summary', title: '실용적인 해석 체크리스트', items: [
      '수분 백분율은 재료의 상태를 설명하고, 흡수된 수분 그램 수는 스풀 내의 실제 수분 부하를 나타냅니다.',
      '높은 습도와 반응이 빠른 재료는 초기 단계에서 가파른 포화를 생성합니다.',
      '건조 시간은 포화도에 따라 늘려야 하고 안전한 챔버 온도에 따라 줄여야 합니다.',
      '가수분해 위험은 고온 압출 및 기능성 부품에 가장 중요합니다.',
      '제조사의 데이터 시트는 어떠한 일반적인 건조 추정보다 우선합니다.'
    ] },

    { type: 'title', text: 'SEO 답변: 3D 프린터 필라멘트는 얼마나 오래 건조해야 합니까?', level: 2 },
    { type: 'paragraph', html: '올바른 건조 시간은 재료, 습도 노출, 스풀 질량 및 챔버 온도에 따라 다릅니다. PLA는 중간 정도 노출된 후 몇 시간만 필요할 수 있지만, PETG와 TPU는 종종 더 긴 시간이 필요하고, 나일론이나 PVA는 습한 환경에 보관된 후에 상당한 재생 주기가 필요할 수 있습니다. 강력한 <strong>3D 인쇄 수분 함량</strong> 워클로는 먼저 흡수된 수분을 추정한 다음, 안전한 건조기 온도와 탈착에 충분한 시간을 선택합니다. 이는 모든 폴리머에 단 하나의 범용적인 숫자를 적용하는 것보다 훨씬 신뢰할 수 있습니다.', },
    { type: 'diagnostic', variant: 'success', title: '이 모니터의 가장 좋은 활용 사례', badge: '엔지니어링 프리플라이트', html: '중요한 인쇄, 생산 배치, 고가의 엔지니어링 폴리머 또는 표면 실패, 취약한 레이어 또는 강도가 떨어지는 부품으로 인해 건조 주기를 돌리는 것보다 큰 손실이 발생할 수 있는 모든 작업 전에 이 추정기를 사용하십시오.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
