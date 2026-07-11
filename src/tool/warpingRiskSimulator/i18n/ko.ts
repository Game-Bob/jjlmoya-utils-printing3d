import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WarpingRiskSimulatorUI } from '../ui';

const slug = 'warping-risk-simulator';
const title = '워핑 리스크 시뮬레이터：3D 프린팅 휨 위험 추정';
const description = '재료 수축, 바닥면 면적, 최장 대각선, 베드 온도, 실내 온도, 밀폐 챔버 조건을 기반으로 첫 번째 레이어 들뜸 및 휨 위험을 추정합니다.';

const faqData = [
  {
    question: '왜 최장 대각선이 바닥면 면적보다 워핑에 더 큰 영향을 미치나요?',
    answer: '최장 대각선은 가장 큰 연속 수축 경로를 나타냅니다. 긴 부품은 전체 접촉 면적이 커 보여도 모서리를 들어 올릴 만큼 충분한 선형 수축을 축적할 수 있습니다.',
  },
  {
    question: '이 시뮬레이터가 출력물이 뒤틀리지 않을 것을 보장하나요?',
    answer: '아니요. 위험 추정치입니다. 습한 필라멘트, 더러운 빌드 플레이트, 첫 번째 레이어 높이, 외풍, 부품 형상, 슬라이서 냉각 설정에 따라 결과가 달라질 수 있습니다.',
  },
  {
    question: '어떤 재료가 밀폐 챔버를 가장 필요로 하나요?',
    answer: 'ABS, ASA, Nylon, PC는 더 높은 가공 온도, 더 강한 수축, 더 큰 냉각 응력을 결합하기 때문에 이 모델에서 챔버에 가장 민감합니다.',
  },
  {
    question: '브림 너비는 어떻게 추정되나요?',
    answer: '시뮬레이터는 최장 대각선의 5%에서 시작하여 계산된 위험에 따라 조정한 후 결과를 실용적인 슬라이서 값으로 고정합니다.',
  },
];

const howToData = [
  { name: '재료 선택', text: 'PLA, PETG, ABS, ASA, Nylon, PC 또는 TPU를 선택하면 시뮬레이터가 수축 등급을 적용합니다.' },
  { name: '바닥면과 대각선 입력', text: '베드에 닿는 표면적과 부품의 최장 모서리 간 거리를 입력합니다.' },
  { name: '열 환경 설정', text: '베드 온도와 실내 온도를 입력하고 프린터에 밀폐 챔버가 있는지 여부를 지정합니다.' },
  { name: '슬라이서 설정 복사', text: '제안된 브림, 접착, 냉각 및 챔버 설정을 시작 프로필로 사용합니다.' },
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

export const content: ToolLocaleContent<WarpingRiskSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '단위계',
    unitMetric: '미터법',
    unitImperial: '야드파운드법',
    unitCelsius: '°C',
    unitFahrenheit: '°F',
    unitMillimeter: 'mm',
    unitInch: 'in',
    noBrim: '0',
    materialLabels: {
      PLA: 'PLA',
      PETG: 'PETG',
      ABS: 'ABS',
      ASA: 'ASA',
      Nylon: '나일론',
      PC: 'PC',
      TPU: 'TPU',
    },
    material: '재료',
    footprintArea: '바닥면 면적',
    footprintHelp: '실제로 빌드 플레이트에 닿는 면적입니다. 모델의 전체 표면적이 아닙니다.',
    diagonal: '최장 대각선',
    diagonalHelp: '첫 번째 레이어의 최장 모서리 간 거리입니다. 이것이 주요 열 응력 벡터입니다.',
    bedTemperature: '베드 온도',
    bedTemperatureWarning: '온도 경고',
    ambientTemperature: '실내 온도',
    chamber: '밀폐 챔버',
    chamberOn: '밀폐 또는 능동 차폐',
    chamberOff: '개방형 프린터',
    riskLow: '낮음',
    riskMedium: '중간',
    riskHigh: '높음',
    riskCritical: '심각',
    riskIndex: '위험 지수',
    thermalIndex: '열 응력 지수',
    deltaT: '델타 T',
    brimRecommendation: '브림 권장',
    adhesionDiagnosis: '접착 진단',
    adhesionStrength: '접착 강도 계단',
    criticalWarnings: '심각한 경고',
    whyDiagonalMatters: '대각선이 중요한 이유',
    recommendedSettings: '권장 슬라이서 설정',
    copySettings: '설정 복사',
    copied: '복사됨',
    simulatorNotice: '이는 위험 추정치이며 성공을 보장하지 않습니다. 필라멘트 습기, 베드 오염, Z 오프셋, 외풍, 냉각 변경은 여전히 외부 변수입니다.',
    warnings: {
      openTechnicalMaterial: '{material}을(를) 밀폐 챔버 없이 사용하는 것은 심각한 워핑 상태입니다.',
      bedTemperatureHigh: '{material}의 베드 온도가 권장 범위 {min}-{max} {unit}을(를) 초과했습니다. 연화, 코끼리 발 또는 접착 불량이 예상됩니다.',
      bedTemperatureLow: '{material}의 베드 온도가 권장 범위 {min}-{max} {unit} 미만입니다. 이 형상에 대해 첫 번째 레이어 그립이 너무 약할 수 있습니다.',
      narrowFootprint: '바닥면이 대각선에 비해 좁아 모서리 들뜸이 빠르게 축적될 수 있습니다.',
      highDeltaT: '베드-실내 온도 차이가 매우 높습니다. 기류와 냉각 속도를 제어하십시오.',
    },
    diagnosis: {
      critical: '브림은 필수입니다. 전용 접착 표면을 사용하고 이 재료를 개방형으로 인쇄하지 마십시오.',
      highEnclosed: '넓은 브림과 접착제를 강력히 권장합니다.',
      highOpen: '시작하기 전에 브림, 접착제 및 밀폐 챔버를 사용하십시오.',
      mediumEasyMaterial: '깨끗한 PEI 표면을 사용하십시오. 날카로운 모서리의 경우 브림은 선택 사항입니다.',
      medium: '모서리에 브림 또는 마우스 이어를 사용하고 베드 접착을 확인하십시오.',
      low: '정상적인 첫 번째 레이어 조건에서 안전합니다.',
    },
    adhesionOptions: {
      low: ['깨끗한 PEI 또는 텍스처 시트: 정상 그립, 가장 쉬운 제거.'],
      medium: ['풀 스틱 또는 PVA 이형층: 가벼운 추가 그립과 더 안전한 PETG 이형.', '마우스 이어: 전체 브림 없이 모서리를 위한 국소 그립.'],
      high: ['넓은 브림과 풀 스틱: 적당한 청소로 넓은 기계적 지지.', 'Magigoo 또는 유사 접착제: ABS, ASA, PETG 및 Nylon 변형에 더 강한 그립.'],
      criticalDefault: ['전폭 브림: 최대 첫 번째 레이어 바닥면.', '고강도 접착제: PEI와 고강도 접착제 사용.', '밀폐 챔버: 접착제가 일관되게 작동하는 데 필요.'],
      criticalTechnical: ['전폭 브림: 최대 첫 번째 레이어 바닥면.', '고강도 접착제: Nylon 또는 PC에 맞는 재료별 접착제 사용.', '밀폐 챔버: 접착제가 일관되게 작동하는 데 필요.'],
    },
    slicerSettings: {
      brimWidth: '브림 너비: {value}',
      bedAdhesion: '베드 접착: {value}',
      lowAdhesion: '깨끗한 PEI 또는 텍스처 시트',
      highAdhesion: 'PEI와 풀 스틱, Magigoo 또는 재료별 접착제',
      cooling: '냉각: {value}',
      normalCooling: '레이어 3 이후 정상 부품 냉각',
      technicalCooling: '처음 5-8개 레이어 동안 부품 냉각 끄기',
      enclosedChamber: '부품이 유리 전이 범위 아래로 냉각될 때까지 챔버를 닫아 둠',
      openChamber: '프린터를 외풍과 실내 기류로부터 보호',
      skirtEnough: '0 mm, 스커트로 충분함',
    },
    diagonalExplanation: '최장 대각선은 주 응력 벡터처럼 작동합니다. 부품이 냉각됨에 따라 수축이 해당 스팬을 따라 축적되어 바닥면 면적이 충분해 보여도 모서리에 부하를 가합니다.',
  },
  seo: [
    { type: 'title', text: '3D 프린트 슬라이싱 전 워핑 위험 추정 방법', level: 2 },
    {
      type: 'paragraph',
      html: '워핑은 재료 문제만도 아니고 베드 접착 문제만도 아닙니다. 인쇄된 레이어가 냉각되고 수축되며 첫 번째 레이어의 그립을 극복할 만큼 충분한 내부 응력을 생성할 때 나타납니다. 작은 ABS 브래킷은 폴리머가 강하게 수축하기 때문에 실패할 수 있고, 큰 PLA 표지판은 대각선이 충분히 길어 넓은 스팬에 걸쳐 수축을 축적할 수 있기 때문에 실패할 수 있습니다. 따라서 유용한 질문은 단순히 <strong>이 재료가 뒤틀릴까?</strong>가 아니라 <strong>이 형상과 열 환경이 빌드 플레이트가 저항할 수 있는 것보다 더 많은 당기는 힘을 생성하는가?</strong>입니다.',
    },
    {
      type: 'paragraph',
      html: '이 시뮬레이터는 경험적 열 응력 지수를 사용합니다: <strong>재료 수축 계수 × 최장 대각선 × 베드-실내 온도 차이 ÷ 바닥면 면적</strong>. 공식은 의도적으로 실용적입니다. 유한 요소 분석을 가장하지 않지만 작업자가 인쇄 전에 측정할 수 있는 변수(재료군, 접촉 면적, 최장 선형 스팬, 베드 온도, 실내 온도, 프린터 밀폐 여부)를 결합합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '결과를 예방 신호로 사용',
      badge: '추정',
      html: '낮은 점수는 첫 번째 레이어가 깨끗하고 잘 조정된 경우 인쇄물이 들릴 가능성이 낮다는 것을 의미합니다. 높거나 심각한 점수는 인쇄 전에 슬라이서 프로필을 변경해야 함을 의미합니다: 더 넓은 브림, 접착제, 냉각 감소, 외풍 방지 또는 다른 재료. 시뮬레이터는 습한 필라멘트, 기름진 PEI, 베드에서 너무 먼 노즐, 또는 모서리에 작은 접촉점만 있는 부품을 볼 수 없습니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5%', label: '최장 대각선의 분율로서 초기 브림 너비', icon: 'mdi:ruler' },
        { value: '1.85x', label: 'ABS, ASA, Nylon, PC의 개방 챔버 심각 배율', icon: 'mdi:home-alert' },
        { value: '0-100', label: '열 응력 지수에서 매핑된 위험 척도', icon: 'mdi:gauge' },
      ],
    },
    { type: 'title', text: '최장 대각선이 면적보다 더 위험할 수 있는 이유', level: 2 },
    {
      type: 'paragraph',
      html: '바닥면 면적은 접착에 사용할 수 있는 표면의 양을 알려줍니다. 대각선은 열 수축이 모서리나 얇은 끝에 도달하기 전에 얼마나 멀리 축적될 수 있는지를 알려줍니다. 동일한 면적을 가진 두 부품이 매우 다르게 동작할 수 있습니다: 컴팩트한 정사각형 패드는 모든 방향으로 짧은 수축 경로를 가지지만, 길고 좁은 스트립은 단일 선을 따라 수축을 집중시키고 끝에서 떨어지려고 합니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '컴팩트한 바닥면',
          description: '정사각형 또는 원형 베이스는 많은 짧은 경로를 통해 수축을 분산합니다. 모서리가 중심에 더 가깝기 때문에 들림을 위한 지렛대가 더 작습니다.',
          icon: 'mdi:crop-square',
          points: ['더 나은 하중 분산', '더 낮은 모서리 지렛대', '쉬운 재료에서는 브림이 옵션인 경우가 많음'],
        },
        {
          title: '긴 대각선 바닥면',
          description: '긴 직사각형, 프레임, 블레이드, 인클로저 패널 또는 레일은 한 지배적인 방향을 따라 수축이 축적되도록 합니다. 끝과 모서리가 가장 높은 박리력을 받습니다.',
          icon: 'mdi:vector-line',
          highlight: true,
          points: ['더 높은 축적 응력', '모서리가 먼저 들림', '브림 또는 마우스 이어가 자주 필요함'],
        },
      ],
    },
    {
      type: 'tip',
      title: '대각선을 빠르게 측정하는 방법',
      html: '슬라이서 미리보기에서 첫 번째 레이어를 위에서 보고 베드에 닿는 부품의 최장 모서리 간 거리를 측정합니다. 직사각형 바닥면의 경우 X 또는 Y 길이만이 아니라 직사각형의 대각선을 사용합니다. 불규칙한 부품의 경우 두 외부 지점 사이의 최장 직선 스팬을 사용합니다.',
    },
    {
      type: 'table',
      headers: ['형상 패턴', '일반적인 증상', '예방 조치'],
      rows: [
        ['길고 가는 레일', '중간은 부착된 상태로 끝이 들림', '양쪽 끝에 브림 또는 마우스 이어 사용'],
        ['크고 평평한 패널', '모서리가 점차 위로 휨', '밀폐 챔버, 느린 냉각, 접착제 사용'],
        ['작고 높은 부품', '베이스는 부착되지만 타워가 흔들림', '워핑이 주요 위험이 아님; 안정성 개선'],
        ['개방형 프레임', '내부 모서리가 안쪽으로 당겨짐', '브림 추가, 첫 번째 레이어 너비 증가, 팬 감소'],
      ],
    },
    { type: 'title', text: '시뮬레이터가 사용하는 재료 수축 등급', level: 2 },
    {
      type: 'paragraph',
      html: '다양한 열가소성 수지는 압출 온도에서 실온으로 냉각될 때 서로 다른 양만큼 수축합니다. PLA와 TPU는 일반적으로 낮은 온도에서 인쇄하고 냉각 응력이 적기 때문에 관대합니다. PETG는 중간에 있습니다: 강하게 접착되지만 날카로운 모서리를 당길 수 있습니다. ABS, ASA, Nylon, PC는 더 높은 압출 온도, 더 강한 수축, 따뜻하고 안정적인 챔버에 대한 더 큰 필요성을 결합하기 때문에 고위험 기술 재료로 취급됩니다.',
    },
    {
      type: 'table',
      headers: ['재료', '수축 등급', '일반적인 베드 전략', '챔버 민감도'],
      rows: [
        ['PLA', '낮음', '깨끗한 PEI, 적당한 베드', '낮음'],
        ['TPU', '낮음', '깨끗한 시트, 과도한 누르기 방지', '낮음'],
        ['PETG', '중간', '텍스처 PEI 또는 이형층', '중간'],
        ['ABS', '높음', 'PEI와 접착제 또는 ABS 슬러리(해당 시)', '매우 높음'],
        ['ASA', '높음', 'PEI와 접착제, 제어된 냉각', '매우 높음'],
        ['Nylon', '높음', '재료별 접착제, 건조 필라멘트', '매우 높음'],
        ['PC', '높음', '고온 베드와 접착제', '매우 높음'],
      ],
    },
    {
      type: 'proscons',
      title: '워핑과 싸우는 대신 재료 변경',
      items: [
        { pro: 'ABS에서 ASA로 전환하면 유사한 열적 거동을 유지하면서 옥외 내구성이 향상됩니다.', con: 'ASA는 여전히 챔버 규율이 필요하며 긴 부품에서 휠 수 있습니다.' },
        { pro: 'ABS에서 PETG로 전환하면 수축이 줄어들고 브래킷과 하우징에 충분한 경우가 많습니다.', con: 'PETG는 ABS나 PC보다 내열성이 낮고 강성이 다릅니다.' },
        { pro: '섬유 충전 Nylon은 일부 수축 경로를 줄이고 강성을 향상시킬 수 있습니다.', con: '건조, 내마모성 노즐 및 강력한 접착 제어가 필요합니다.' },
      ],
    },
    { type: 'title', text: '델타 T: 베드 온도와 실내 온도가 모두 중요한 이유', level: 2 },
    {
      type: 'paragraph',
      html: '시뮬레이터는 <strong>델타 T</strong>를 베드 온도에서 실내 온도를 뺀 값으로 사용합니다. 이는 노즐 온도와 같지 않지만 부품 하단이 경험하는 열 구배의 유용한 대리 지표입니다. 뜨거운 베드는 인터페이스에서 초기 수축을 줄이지만 매우 추운 방이나 강한 기류는 여전히 상층에서 열을 빼앗아 고정된 베이스와 냉각 중인 부품 본체 사이에 응력 구배를 생성할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: 'PLA의 경우 적당한 델타 T는 재료가 덜 공격적으로 수축하기 때문에 무해할 수 있습니다. ABS, ASA, Nylon, PC의 경우 동일한 베드 온도에서 동일한 형상이 프린터가 외풍에 노출되면 실패할 수 있습니다. 그렇기 때문에 이러한 기술 재료가 밀폐 챔버 없이 인쇄될 때 계산은 심각한 배율을 적용합니다.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'ABS, ASA, Nylon 또는 PC 사용 시 개방형 프린터',
      badge: '심각한 상태',
      html: '챔버가 열려 있으면 인쇄물이 국소 냉각, 문 움직임, HVAC 기류 및 급격한 레이어 온도 변화에 노출됩니다. 첫 번째 레이어는 처음 20분 동안 완벽해 보일 수 있으며 부품이 더 많은 수축 응력을 저장함에 따라 나중에 여전히 들릴 수 있습니다.',
    },
    {
      type: 'list',
      icon: 'mdi:thermometer',
      items: [
        '더 따뜻한 챔버는 새 레이어와 오래된 레이어 간의 온도 차이를 줄입니다.',
        '밀폐 챔버는 인쇄 후 냉각도 늦춰 갑작스러운 모서리 박리를 줄입니다.',
        '방풍 실드는 도움이 되지만 PC 또는 Nylon의 안정적인 가열 챔버와 동일하지 않습니다.',
        '베드 온도만 높이면 그립이 향상될 수 있지만 부드러운 재료에서 코끼리 발이 증가할 수 있습니다.',
      ],
    },
    { type: 'title', text: '열 응력 지수 해석 방법', level: 2 },
    {
      type: 'paragraph',
      html: '열 응력 지수는 상대 점수이며 뉴턴 단위의 측정된 힘이 아닙니다. 수축 계수, 대각선 또는 델타 T가 상승하면 상승합니다. 더 많은 접촉 면적이 동일한 당김 하중을 분산할 수 있기 때문에 바닥면 면적이 증가하면 하락합니다. 그런 다음 값은 0-100의 위험 백분율로 매핑되어 다양한 인쇄 설정을 빠르게 비교할 수 있습니다.',
    },
    {
      type: 'table',
      headers: ['위험 범위', '의미', '권장 대응'],
      rows: [
        ['0-31%', '낮음', '베드 청소, 첫 번째 레이어 확인, 대부분의 형태에 특별 접착 불필요'],
        ['32-57%', '중간', '날카로운 모서리에 브림 사용, 초기 팬 감소, 바닥면 접촉 검사'],
        ['58-81%', '높음', '넓은 브림, 접착제, 필요 시 밀폐 챔버 사용, 외풍 방지'],
        ['82-100%', '심각', '형상, 재료 또는 환경이 변경되지 않으면 뒤틀릴 가능성이 높은 것으로 간주'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant',
      title: '왜 바닥면 면적으로 나누나요?',
      html: '더 큰 바닥면은 베드가 박리력에 저항할 더 많은 기회를 제공합니다. 이 모델은 넓고 연속적인 접촉이 있는 부품에 보상을 주고 좁은 베이스, 작은 발, 표면에 닿는 얇은 스트립만 있는 긴 부품에 불이익을 줍니다.',
    },
    { type: 'title', text: '브림 너비, 마우스 이어 및 접착제 선택', level: 2 },
    {
      type: 'paragraph',
      html: '브림 권장은 <strong>대각선 × 0.05</strong>에서 시작합니다. 따라서 180mm 대각선은 위험 조정 전에 약 9mm 근처에서 시작합니다. 실제로 브림은 재료만으로 선택해서는 안 됩니다. 짧은 PLA 큐브는 브림이 필요하지 않을 수 있지만 긴 PLA 검, 표지판 또는 레일은 대각선이 지배적인 응력 경로이기 때문에 적당한 브림의 이점을 얻을 수 있습니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: '브림', description: '전체 부품 주변의 첫 번째 레이어 접촉을 증가시키는 최고의 다목적 선택.', icon: 'mdi:border-outside', points: ['PLA에서 제거 용이', 'ABS 모서리에 매우 유용'] },
        { title: '마우스 이어', description: '들뜸이 시작되는 모서리나 얇은 끝에 배치되는 국소 원형 패드.', icon: 'mdi:circle-outline', points: ['청소 감소', '레일과 프레임에 좋음'] },
        { title: '접착제', description: '폴리머와 인쇄 표면 사이의 화학적 또는 기계적 그립 향상.', icon: 'mdi:water-plus', points: ['Nylon과 PC에 유용', '표면별 선택 중요'] },
      ],
    },
    {
      type: 'tip',
      title: '브림을 유일한 해결책으로 만들지 마세요',
      html: '시뮬레이터가 심각한 위험을 보고하는 경우 더 넓은 브림이 실패를 지연시킬 수는 있지만 근본적인 응력을 제거하지는 않습니다. 브림을 챔버, 더 느린 초기 냉각, 더 깨끗한 베드 및 둥근 모서리나 분할 부품과 같은 형상 변경과 결합하십시오.',
    },
    {
      type: 'glossary',
      items: [
        { term: '워핑', definition: '베드 접착을 압도하는 냉각 수축으로 인한 위쪽 변형.' },
        { term: '바닥면 면적', definition: '첫 번째 레이어에서 빌드 플레이트에 닿는 모델의 영역.' },
        { term: '최장 대각선', definition: '첫 번째 레이어 접촉 형상을 가로지르는 최장 직선 스팬.' },
        { term: '델타 T', definition: '베드와 주변 실내 공기 사이의 온도 차이.' },
        { term: '브림', definition: '접착력을 높이기 위해 부품 주위에 인쇄된 추가 첫 번째 레이어 둘레 루프.' },
      ],
    },
    { type: 'title', text: '고위험 부품을 위한 실용적인 슬라이서 설정', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tune',
      items: [
        '더 많은 접촉을 만들기 위해 첫 번째 레이어 선 폭을 늘리되, 융기를 유발하는 과도한 Z 스퀴즈를 피하십시오.',
        '이후 레이어가 당기기 전에 폴리머가 베드에 접착될 수 있도록 더 느린 첫 번째 레이어를 사용하십시오.',
        '첫 번째 레이어 동안 ABS, ASA, Nylon 및 PC의 부품 냉각을 비활성화하거나 줄이십시오.',
        '날카로운 모서리와 좁은 끝을 넘어설 수 있을 만큼 충분히 넓은 브림을 추가하십시오.',
        '큰 기술 재료 부품을 챔버 도어, 통풍구 또는 차가운 측면 패널 근처에 두지 마십시오.',
      ],
    },
    {
      type: 'message',
      title: '위험을 줄이는 형상 변경',
      ariaLabel: '형상 완화 아이디어',
      html: '날카로운 모서리를 둥글게 하고, 매우 긴 패널을 더 짧은 섹션으로 나누고, 얇은 끝에 임시 탭을 추가하고, 가장 긴 응력 경로가 더 짧아지도록 부품 방향을 지정하거나, 인쇄 후 다듬을 수 있는 희생 패드를 추가하십시오. 이러한 변경은 단순히 베드 온도를 높이는 것보다 더 효과적인 경우가 많습니다.',
    },
    {
      type: 'summary',
      title: '빠른 해석 체크리스트',
      items: [
        '높은 수축 재료와 개방 챔버의 조합이 가장 강력한 경고 신호입니다.',
        '긴 대각선과 작은 바닥면은 모서리와 끝에 브림 또는 마우스 이어가 필요함을 의미합니다.',
        '높은 베드 온도가 추운 방이나 바람이 부는 환경을 상쇄하지는 않습니다.',
        '결과는 계획 추정치입니다. 첫 번째 레이어 보정과 필라멘트 상태가 최종 인쇄를 결정합니다.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
