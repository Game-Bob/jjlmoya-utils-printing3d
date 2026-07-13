import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HotendFlowRateLimitCalculatorUI } from '../ui';

const slug = 'volumetric-flow-rate-limit-calculator';
const title = '체적 유량 계산기: 정밀한 핫엔드 한계';
const description =
  '3D 프린팅의 체적 유량을 mm3/s 단위로 계산하고, 핫엔드 용융 용량과 비교하여 속도, 선폭, 레이어 높이가 언더익스트루전을 유발하는 시기를 식별합니다.';

const faqData = [
  {
    question: '3D 프린팅에서 체적 유량이란 무엇인가요?',
    answer:
      '체적 유량은 매초 핫엔드에 요청되는 플라스틱의 부피입니다. 선폭 x 레이어 높이 x 인쇄 속도로 계산되며 결과는 mm3/s로 표시됩니다.',
  },
  {
    question: '체적 유량이 핫엔드 한계를 초과하면 어떻게 되나요?',
    answer:
      '핫엔드가 요청된 속도로 플라스틱을 완전히 녹일 수 없습니다. 압력이 상승하고 압출이 불안정해지며 인쇄물에 언더익스트루전, 약한 벽, 거친 무광 표면 또는 압출기 단계 건너뛰기가 나타날 수 있습니다.',
  },
  {
    question: 'V6는 정말 15 mm3/s로 제한되나요?',
    answer:
      '15 mm3/s는 잘 조정된 표준 용융존 핫엔드에 대한 실용적인 계획 상수입니다. 실제 값은 필라멘트, 온도, 노즐, 히터 출력, 압출기 그립 및 허용 가능한 시각적 품질 손실 정도에 따라 다릅니다.',
  },
  {
    question: '레이어 높이를 높이면 안전 속도가 감소하는 이유는 무엇인가요?',
    answer:
      '레이어 높이는 유량 방정식의 직접적인 승수입니다. 선폭과 핫엔드 용량이 동일하게 유지되면 레이어 높이를 두 배로 늘리면 핫엔드가 용융 한계에 도달하기 전 최대 속도가 약 절반으로 줄어듭니다.',
  },
];

const howToData = [
  { name: '핫엔드 아키텍처 선택', text: '표준 V6, Volcano, Bambu 고유량 또는 초고유량 프리셋을 선택하여 용융 용량 상수를 설정합니다.' },
  { name: '선 형상 설정', text: '사용할 슬라이서 프로파일에 맞게 선폭과 레이어 높이를 조정합니다.' },
  { name: '인쇄 속도 조정', text: '미세 속도 슬라이더를 사용하여 응력 게이지가 70%, 90% 및 임계 유량 영역에 접근하는 것을 확인합니다.' },
  { name: '안전 속도 및 여유 확인', text: '현재 mm3/s를 최대 안전 속도 및 남은 용융률 여유와 비교합니다.' },
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<HotendFlowRateLimitCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '체적 유량 한계 입력',
    resultsAriaLabel: '체적 유량 한계 결과',
    unitSystemLabel: '단위',
    metricLabel: '미터법',
    imperialLabel: '야드파운드법',
    hotendLabel: '핫엔드 아키텍처',
    lineWidthLabel: '선폭',
    layerHeightLabel: '레이어 높이',
    speedLabel: '인쇄 속도',
    flowLabel: '체적 유량',
    loadLabel: '열 부하',
    maxSpeedLabel: '최대 안전 속도',
    reserveLabel: '용융 여유',
    stateLabel: '시스템 상태',
    idealState: '이상적인 유량',
    limitState: '점도 한계',
    criticalState: '임계 유량',
    idealHint: '핫엔드에 안정적인 용융 압력과 일관된 압출을 위한 충분한 열적 여유가 있습니다.',
    limitHint: '프로파일이 점도 한계에 가깝습니다. 재료나 온도의 작은 변화로 언더익스트루전이 드러날 수 있습니다.',
    criticalHint: '요청된 유량이 신뢰할 수 있는 용융 범위를 초과합니다. 속도, 선폭 또는 레이어 높이를 줄이십시오.',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    flowUnit: 'mm3/s',
  },
  seo: [
    { type: 'title', text: '최대 체적 유량 계산기 작동 방식', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>최대 체적 유량 계산기</strong>는 단순한 속도 계산기보다 더 유용한 질문에 답합니다: 핫엔드가 슬라이서가 요청하는 양의 플라스틱을 녹일 수 있을까요? 운동 시스템은 높은 이동 속도를 광고할 수 있지만, 압출은 열 전달, 용융존 길이, 노즐 압력, 필라멘트 점도, 히터 안정성 및 압출기 그립에 의해 제한됩니다. 계산기는 요청된 용융률을 <code>Vf = 선폭 x 레이어 높이 x 속도</code>로 모델링하고 결과를 <code>mm3/s</code>로 표시합니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구는 해당 순간 유량을 선택한 핫엔드 용량과 비교합니다. 표준 V6 스타일 핫엔드는 낮은 용융률 상수로 표현되고, Volcano와 같은 더 긴 용융존 아키텍처는 더 높은 상수를 사용하며, 최신 고유량 핫엔드는 더 큰 값을 사용합니다. 목적은 보편적인 실험실 한계를 약속하는 것이 아니라, 슬라이서 프로파일이 하드웨어가 안정적으로 액화할 수 있는 것보다 더 많은 플라스틱을 요구하기 전에 빠른 엔지니어링 확인을 제공하는 것입니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'mm3/s', label: '핫엔드 용융 용량에 사용되는 단위', icon: 'mdi:cube-scan' },
        { value: '70%', label: '안정적인 생산 프로파일을 위한 안전 영역 경계', icon: 'mdi:gauge-low' },
        { value: '90%', label: '실패에 민감해지는 점도 경계', icon: 'mdi:gauge' },
        { value: '100%+', label: '언더익스트루전 위험이 지배적인 임계 유량', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: '노즐 직경 대신 슬라이서 선폭 사용',
      html: '<p>유량 방정식은 슬라이서의 압출 선폭을 사용합니다. 0.4mm 노즐은 종종 0.42-0.48mm의 선을 인쇄합니다. 계산기가 선폭 대신 노즐 직경을 사용하면 유량 수요를 과소평가하고 이미 핫엔드 한계에 가까운 프로파일을 숨길 수 있습니다.</p>',
    },
    { type: 'title', text: '속도와 용융률이 같은 한계가 아닌 이유', level: 2 },
    {
      type: 'paragraph',
      html: '프린터가 300mm/s로 움직일 수 있지만 압출 부피가 너무 높으면 90mm/s에서도 실패할 수 있습니다. 속도는 선폭과 레이어 높이를 포함한 후에야 의미가 생깁니다. 0.45mm 선을 0.20mm 레이어로 150mm/s에서 인쇄하면 13.5mm3/s가 필요합니다. 0.60mm 선을 0.30mm 레이어로 같은 속도에서 인쇄하면 27mm3/s가 필요합니다. 이동 속도는 동일하지만 두 번째 프로파일은 핫엔드가 초당 두 배의 플라스틱을 녹이도록 요구합니다.',
    },
    {
      type: 'table',
      headers: ['선폭', '레이어 높이', '속도', '요청된 유량'],
      rows: [
        ['0.42 mm', '0.16 mm', '120 mm/s', '8.06 mm3/s'],
        ['0.45 mm', '0.20 mm', '150 mm/s', '13.50 mm3/s'],
        ['0.50 mm', '0.25 mm', '180 mm/s', '22.50 mm3/s'],
        ['0.60 mm', '0.30 mm', '150 mm/s', '27.00 mm3/s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '언더익스트루전은 종종 튜닝 문제처럼 보입니다',
      badge: '유량 상한',
      html: '<p>프로파일이 용융 용량을 초과하면 사용자들은 종종 리트랙션, 프레셔 어드밴스, 온도 또는 E-스텝을 조정합니다. 이러한 설정은 중요하지만, 짧은 용융존이 무제한의 플라스틱을 처리하게 할 수는 없습니다. 먼저 요청된 mm3/s가 핫엔드 용량 범위 내에 있는지 확인하십시오.</p>',
    },
    {
      type: 'summary',
      title: '유량 방정식 규칙',
      items: [
        '선폭, 레이어 높이 및 속도는 직접 곱해집니다.',
        '두 가지 형상 설정의 작은 증가만으로도 속도가 적당해 보일 때조차 핫엔드를 압도할 수 있습니다.',
        '최대 안전 속도는 핫엔드 한계를 선폭과 레이어 높이로 나눈 값입니다.',
      ],
    },
    { type: 'title', text: '핫엔드 아키텍처별 열 성능 벤치마크', level: 2 },
    {
      type: 'paragraph',
      html: '핫엔드 아키텍처는 필라멘트가 가열 영역에 머무는 시간과 열이 필라멘트 코어로 얼마나 효율적으로 이동하는지를 제어합니다. 컴팩트한 V6 스타일 용융존은 반응성이 뛰어나고 가볍지만, 실용적인 유량 상한은 긴 Volcano 스타일 용융존보다 낮습니다. 고유량 세라믹 및 초고유량 설계는 히터 접촉, 용융 경로 길이 또는 내부 표면적을 증가시켜 더 높은 압출률을 유지합니다.',
    },
    {
      type: 'table',
      headers: ['핫엔드 아키텍처', '계획 용량', '최적 사용 사례', '공학적 주의사항'],
      rows: [
        ['V6 / MK8', '15 mm3/s', '품질 프로파일, 중간 PLA/PETG 속도, 표준 데스크탑 프린터', '넓은 선이나 높은 레이어에서 압력 한계에 빠르게 도달할 수 있습니다.'],
        ['Revo High Flow', '18 mm3/s', '컴팩트한 폼 팩터의 드롭인 고유량 업그레이드', '여전히 온도 및 재료 검증이 필요합니다.'],
        ['Volcano', '25 mm3/s', '대형 노즐, 두꺼운 레이어, 기능성 부품, 빠른 드래프트 프로파일', '긴 용융존은 더 많이 흘러내릴 수 있으며 리트랙션 조정이 필요합니다.'],
        ['Bambu HF', '32 mm3/s', '밀폐형 프린터의 고속 프로파일 및 빠른 PLA 생산', '프로파일 값은 냉각 및 필라멘트 거동에 크게 의존합니다.'],
        ['Rapido UHF / 유사', '45 mm3/s', '극한 유량, 큰 압출 폭, 생산 처리량', '압출기 토크, 히터 출력 및 노즐 형상이 제한 요소가 됩니다.'],
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: '짧은 용융존', description: '컴팩트, 반응성 우수, 가벼운 툴헤드, 낮은 열 저장.', icon: 'mdi:thermometer-low', points: ['좋은 디테일 제어', '낮은 유량 상한', '적은 열 관성'] },
        { title: '긴 용융존', description: '필라멘트가 노즐에 도달하기 전에 열을 흡수할 수 있는 더 많은 접촉 시간.', icon: 'mdi:thermometer-lines', highlight: true, points: ['더 높은 mm3/s', '더 나은 두꺼운 레이어 출력', '더 많은 흘러내림 관리'] },
        { title: '고유량 코어', description: '최신 형상이 단순히 길이를 늘리지 않고 접촉 면적 또는 히터 결합을 증가시킵니다.', icon: 'mdi:heat-wave', points: ['빠른 응답', '높은 처리량', '조정된 프로파일 필요'] },
      ],
    },
    {
      type: 'message',
      title: '벤치마크 값은 계획 상수입니다',
      ariaLabel: '핫엔드 벤치마크 참고',
      html: '<p>프리셋 한계는 의도적으로 보수적인 계획 상수입니다. 실제 용융 용량은 필라멘트 구성, 노즐 직경, 히터 카트리지, 서미스터 위치, 압출 온도 및 부품이 허용할 수 있는 품질 저하 정도에 따라 달라집니다.</p>',
    },
    { type: 'title', text: '응력 게이지 영역 읽기', level: 2 },
    {
      type: 'paragraph',
      html: '응력 게이지는 유량 계산을 시각적 작동 상태로 변환합니다. 부하 70% 미만에서는 핫엔드에 정상적인 필라멘트 변동, 약간의 온도 변화 및 툴패스 전반의 속도 변화를 위한 여유가 있습니다. 70%에서 90% 사이에서는 압출이 계속 성공할 수 있지만 프로파일이 민감해집니다. 90% 이상에서는 인쇄물이 용융 상한에 충분히 가까워져 재료 배치 변동, 습기 또는 약간 더 차가운 노즐이 눈에 띄는 언더익스트루전으로 밀어넣을 수 있습니다.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '0-70%: 반복 가능한 부품 및 정상적인 재료 변동에 대한 좋은 생산 여유.',
        '70-90%: 속도 테스트에 유용하지만 벽, 상단 표면 및 인필 결합을 검증하십시오.',
        '90%+: 필라멘트와 핫엔드가 유량 타워로 측정되지 않은 한 임계 영역으로 취급하십시오.',
        '100% 초과: 관련 없는 슬라이서 설정을 변경하기 전에 속도, 선폭 또는 레이어 높이를 줄이십시오.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gauge-full',
      title: '게이지가 경고 상자보다 나은 이유',
      html: '<p>경고 상자는 임계값을 초과한 후 무엇이 잘못되었는지 사용자에게 알려줍니다. 응력 게이지는 해당 임계값에 대한 접근을 보여줍니다. 이를 통해 프로파일이 이미 불안정해진 후에만 반응하는 대신 계획된 운영 마진에서 멈추기가 더 쉬워집니다.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '임계 유량은 표면 품질 문제만이 아닙니다',
      badge: '기계적 강도',
      html: '<p>용융이 불충분한 필라멘트는 패스와 레이어 사이에 제대로 접착되지 않을 수 있습니다. 외벽이 허용 가능해 보여도 유량이 용융 용량을 초과하면 인필 결합, 둘레 접착 및 충격 강도가 저하될 수 있습니다.</p>',
    },
    { type: 'title', text: '슬라이서 프로파일과 계산기 사용 방법', level: 2 },
    {
      type: 'paragraph',
      html: '선폭, 레이어 높이 및 외벽 또는 일반 인쇄 속도에 대한 실제 슬라이서 값으로 시작하십시오. 가장 가까운 핫엔드 아키텍처를 선택하십시오. 속도 슬라이더를 움직여 게이지가 원하는 부하에 도달할 때까지 조정하십시오. 표시된 최대 안전 속도는 현재 선 형상에 대해 핫엔드 한계에 정확히 도달하는 속도입니다. 생산 작업의 경우 수학적 최대값보다 낮은 값을 사용하십시오.',
    },
    {
      type: 'paragraph',
      html: '게이지가 임계 영역에 진입하면 유량을 줄이는 세 가지 직접적인 방법이 있습니다: 속도 낮추기, 선폭 줄이기 또는 레이어 높이 줄이기. 온도는 일부 재료의 실용적인 유량을 증가시킬 수 있지만 광택, 브리징, 오버행 동작, 스트링잉 및 치수 정확도도 변경합니다. 계산기는 의도적으로 형상과 하드웨어 용량에 초점을 맞춥니다. 이것이 가장 투명한 레버이기 때문입니다.',
    },
    {
      type: 'proscons',
      title: '유량 수요를 낮추는 방법',
      items: [
        { pro: '속도를 낮추면 선 형상과 치수 의도가 유지됩니다.', con: '인쇄 시간이 증가하고 팜 처리량이 감소할 수 있습니다.' },
        { pro: '레이어 높이를 낮추면 표면 마감이 개선되고 mm3/s가 감소합니다.', con: '레이어 수가 증가하고 유량이 낮아도 작업 시간이 길어질 수 있습니다.' },
        { pro: '선폭을 줄이면 압력이 감소하고 미세 디테일이 향상됩니다.', con: '드문 벽이 약해지고 툴패스 수가 증가할 수 있습니다.' },
      ],
    },
    {
      type: 'tip',
      title: '유량 타워로 검증',
      html: '<p>계산기를 사용하여 현실적인 속도 범위를 선택한 다음 특정 필라멘트와 온도에 대한 유량 테스트 타워를 인쇄하십시오. 최상의 생산 한계는 안정적인 벽, 일관된 광택, 우수한 레이어 접착 및 압출기 단계 건너뛰기가 없는 가장 높은 유량입니다.</p>',
    },
    { type: 'title', text: '핫엔드 용융률 용량 초과 증상', level: 2 },
    {
      type: 'paragraph',
      html: '핫엔드 용융 한계를 초과하는 프로파일은 점진적으로 실패할 수 있습니다. 먼저 상단 표면에 얇은 자국이나 작은 틈이 나타날 수 있습니다. 그런 다음 인필 라인이 불일치해지고 둘레가 광택을 잃으며 모서리에서 약한 압력 회복을 보입니다. 더 심각한 경우 압출기가 딸깍거리고, 필라멘트를 갈고, 단계를 건너뛰거나, 노즐로 들어가는 필라멘트가 완전히 연화되지 않았기 때문에 취성 섹션을 남깁니다.',
    },
    {
      type: 'table',
      headers: ['관찰된 증상', '유량 관련 가능한 원인', '계산기 응답'],
      rows: [
        ['고속에서 얇은 벽', '요청된 mm3/s가 긴 직선 이동에서 용융 용량 초과', '부하가 90% 미만으로 돌아올 때까지 속도를 줄이십시오.'],
        ['거친 무광 압출', '필라멘트가 코어까지 완전히 가열되지 않음', '해당 재료에 대해 유량을 줄이거나 온도를 신중히 높이십시오.'],
        ['압출기 딸깍거림', '배압이 압출기 그립 또는 모터 토크 초과', '즉시 유량을 줄이고 필라멘트 구동 장력을 검사하십시오.'],
        ['약한 인필 결합', '재료가 너무 차갑거나 불균일하게 녹아 나옴', '구조 부품에 더 많은 열적 여유를 사용하십시오.'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '체적 유량', definition: '매초 핫엔드에 요청되는 플라스틱 부피(mm3/s로 표시).' },
        { term: '용융률 용량', definition: '인쇄 품질을 유지하면서 핫엔드가 일관되게 녹일 수 있는 실용적인 필라멘트 양.' },
        { term: '선폭', definition: '슬라이서에서 압출된 패스의 너비로, 일반적으로 노즐 직경보다 약간 큼.' },
        { term: '레이어 높이', definition: '각 인쇄 레이어의 수직 두께로, 유량 수요의 직접적인 승수.' },
        { term: '유량 여유', definition: '핫엔드 용량과 현재 요청된 유량 간의 차이.' },
      ],
    },
    {
      type: 'summary',
      title: '실용적인 유량 워크플로',
      items: [
        '속도를 높이기 전에 요청된 유량을 계산하십시오.',
        '테스트로 검증되지 않은 한 생산 프로파일을 임계 영역 미만으로 유지하십시오.',
        '핫엔드 프리셋을 계획 상수로 사용한 다음 재료별 보정으로 정제하십시오.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
