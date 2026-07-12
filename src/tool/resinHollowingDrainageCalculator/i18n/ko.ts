import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResinHollowingDrainageCalculatorUI } from '../ui';

const slug = 'sla-resin-hollowing-drainage-calculator';
const title = 'SLA 레진 내부 비우기 및 배출구 계산기';
const description = '중공 SLA 및 DLP 레진 출력을 위해 보수적인 벽 두께, 배출구 직경, 최소 환기구 수 및 복잡도에 맞게 조정된 레진 절약량을 계산합니다.';

const faqData = [
  { question: '왜 계산기는 항상 최소 두 개의 배출구를 권장하나요?', answer: '내부가 비어 있는 레진 출력물은 액체 레진이 흘러나갈 수 있는 경로 하나와 공기가 들어올 수 있는 또 다른 경로가 필요합니다. 또한 두 개의 개구부는 박리 과정에서 이탈 필름에 대한 흡착 효과를 방지하는 데 도움이 됩니다.' },
  { question: '왜 레진 절약량이 이론적인 중공 부피보다 적나요?', answer: '내벽, 리브, 모서리, 서포터 및 작은 틈새에 액체 레진이 남아 있기 때문입니다. 계산기는 지오메트리의 복잡성에 따라 이론적인 중공 부피에서 5%, 10%, 또는 15%를 차감합니다.' },
  { question: '벽 두께 1.5 mm는 항상 충분한가요?', answer: '아닙니다. 이는 많은 데스크톱 레진 출력에서 최소한의 안전 기준입니다. 높은 부품, 무거운 부품, 엔지니어링 하중, 고온 환경 또는 강한 사포질이 필요한 경우 더 두꺼운 벽과 테스트 시편이 필요할 수 있습니다.' },
  { question: '배출구는 어디에 배치해야 하나요?', answer: '배출구는 출력 방향에서 빌드 플레이트 측면과 가장 낮은 레진 수집 지점에 최대한 가깝게 배치한 다음, 슬라이서에서 밀폐된 공간이 남아 있지 않은지 확인해야 합니다.' },
];

const howToData = [
  { name: '모델 부피 및 높이 입력', text: '서포트 및 방향을 설정한 후 슬라이서 부피를 사용하고, 출력 방향의 파트 높이를 입력합니다.' },
  { name: '기하학적 복잡도 선택', text: '단순, 중간, 또는 높은 복잡도를 선택하여 갇힌 레진 부피가 이론적 중공 절약량에서 차감되도록 합니다.' },
  { name: '레진 유형 선택', text: '일반, 고강도 또는 엔지니어링 레진을 선택합니다. 점도가 높을수록 더 큰 배출구 직경이 권장됩니다.' },
  { name: '벽 두께 및 배출구 권장사항 확인', text: '최종 파일을 슬라이싱하기 전에 벽 두께, 배출구 직경, 홀 개수 및 체크리스트를 확인합니다.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo',
  name: title, description,
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep', position: index + 1,
    name: step.name, text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication',
  name: title, description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

const seoData = [
    {
      type: 'title',
      text: 'SLA 레진 중공화 및 배수 계산기는 어떤 역할을 하나요?',
      level: 2
    },
    {
      type: 'paragraph',
      html: '이 도구는 SLA, DLP 및 LCD 레진 3D 프린팅에서 가장 중요한 과제 중 하나인 중공 모델 최적화를 해결합니다. 속이 꽉 찬 레진 부품을 인쇄하는 것은 비용이 많이 들고 무거우며 인쇄 프로세스 중에 수축력(이탈력)을 증가시킵니다. 모델을 중공화하면 재료 사용량이 줄어들지만, 적절한 배수 없이 빈 공간을 만들면 미경화 레진이 내부에 갇히게 되고 진공력으로 인해 인쇄 실패가 발생합니다. 이 계산기는 이상적인 벽 두께를 계산하고, 배수구의 적절한 직경과 개수를 제안하며, 인쇄된 부품의 내벽에 불가피하게 부착되는 액체 레진의 영향을 고려하여 실제 레진 절약량을 추정합니다.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
          {
            value: '1.5 mm',
            label: '데스크톱 SLA용 최소 권장 벽 두께'
          },
          {
            value: '2 개',
            label: '진공을 깨기 위해 필요한 최소 환기구 수'
          },
          {
            value: '10-15%',
            label: '내벽 부착으로 인한 레진 부피 감소율'
          },
          {
            value: '30-70%',
            label: '중공화를 통해 달성되는 평균 총 무게 감소율'
          }
        ]
    },
    {
      type: 'title',
      text: '벽 두께가 레진 절약에 미치는 영향',
      level: 2
    },
    {
      type: 'paragraph',
      html: '벽 두께는 레진 절약량을 결정하는 가장 중요한 변수입니다. 벽이 두꺼울수록 구조적 강도는 증가하지만 레진 소비가 빠르게 늘어나 중공화 효율이 저하됩니다. 반대로 벽이 너무 얇으면 부서지기 쉽고 큐어링 중에 변형되기 쉬우며, 프린터가 FEP 필름에서 각 레이어를 분리할 때 발생하는 기계적 이탈력을 견디지 못할 수 있습니다. 목표는 모델의 형상과 기능성을 유지하면서 재료 절약을 극대화할 수 있는 적정선을 찾는 것입니다.'
    },
    {
      type: 'proscons',
      title: '레진 프린트 중공화의 장단점',
      items: [
          {
            pro: '재료 비용 및 전체 인쇄 무게 대폭 감소',
            con: '내부 공간을 세척하고 경화시키기 위한 후처리가 필요함'
          },
          {
            pro: '레이어당 표면적이 줄어들어 FEP 필름에 가해지는 이탈력이 감소함',
            con: '구멍을 잘못 배치하면 모델의 외관을 망칠 수 있음'
          },
          {
            pro: '사후 경화 중 열 응력 및 뒤틀림 감소',
            con: '내부에 갇힌 액체 레진으로 인해 나중에 부품에 균열이 생길 위험 있음'
          }
        ]
    },
    {
      type: 'title',
      text: '중공 레진 프린트에서의 흡착판 효과 이해',
      level: 2
    },
    {
      type: 'paragraph',
      html: '중공 모델을 인쇄할 때 수조에 담기면서 밀폐된 공간이 형성됩니다. 이 공간에 환기구가 없으면 플랫폼이 상승할 때마다 경화된 레이어와 릴리스 필름 사이에 강한 부분 진공(흡착판 효과)이 발생합니다. 이 힘이 인쇄물을 잡아당겨 레이어 분리, 적층선, 서포터 파손 또는 모델 전체가 빌드 플레이트에서 떨어지는 현상을 유발합니다. 환기구를 추가하면 공기가 유입되어 압력 차이가 중화되고 원활한 이탈 주기가 보장됩니다.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '밀폐된 중공 공간의 위험성',
      html: '중공 공간을 완전히 밀폐된 상태로 두지 마십시오. 인쇄된 부품 내부에 갇힌 액체 레진은 시간이 지남에 따라 경화된 벽을 서서히 부식시켜 결국 모델에 균열이 생기거나 독성 레진이 누출되거나 완전히 붕괴될 수 있습니다. 내부를 세척하고 내부 UV 광원으로 경화시킬 수 있도록 항상 최소 2개의 구멍을 확보하십시오.'
    },
    {
      type: 'title',
      text: '배수구 배치의 모범 사례',
      level: 2
    },
    {
      type: 'list',
      items: [
          '인쇄 초기 단계에서 레진이 빠져나갈 수 있도록 배수구는 빌드 플레이트에 최대한 가깝게 배치합니다.',
          '항상 최소 2개의 구멍을 사용하십시오: 하나는 액체 레진이 흘러나오도록 하고, 다른 하나는 공기가 들어가도록 합니다.',
          '외관을 보호하기 위해 구멍은 베이스 바닥이나 조인트 뒤쪽 등 보이지 않는 면에 배치합니다.',
          '독립된 내부 공간이나 포켓의 각각에 전용 배수구가 마련되어 있는지 확인하십시오.'
        ]
    },
    {
      type: 'title',
      text: '기하학적 복잡성에 따른 계산 조정 방법',
      level: 2
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
          {
            title: '단순한 형상',
            description: '세부 묘사가 적은 모델, 구체 또는 블록. 평평한 내벽에 부착되는 레진이 최소화(약 5%)됩니다.'
          },
          {
            title: '보통 형상',
            description: '캐릭터 모델 또는 표준 기계 부품. 내부 서포터와 곡선부로 인해 레진이 적당히 부착됩니다(약 10%).',
            highlight: true
          },
          {
            title: '높은 복잡성',
            description: '매우 상세한 미니어처, 격자 구조 또는 복잡한 내부 채널. 모세관 현상으로 인해 상당한 레진이 부착됩니다(약 15% 이상).'
          }
        ]
    },
    {
      type: 'title',
      text: '레진 점도 및 배수구 크기 이해',
      level: 2
    },
    {
      type: 'table',
      headers: [
          '레진 클래스',
          '점도 수준',
          '최소 구멍 직경',
          '권장 배치'
        ],
      rows: [
          [
              '표준 레진',
              '낮음-보통',
              '2.0 - 3.0 mm',
              '베이스 또는 숨겨진 평평한 표면'
            ],
          [
              '터프 / 플렉시블',
              '보통-높음',
              '3.0 - 4.5 mm',
              '벗겨짐을 방지하기 위한 모서리 및 조인트'
            ],
          [
              '엔지니어링 / 캐스터블',
              '매우 높음',
              '4.5 - 6.0 mm',
              '중력 배수를 위한 직접 시선 확보 위치'
            ]
        ]
    },
    {
      type: 'title',
      text: '벽 두께를 1.5 mm 이상으로 늘려야 하는 경우',
      level: 2
    },
    {
      type: 'tip',
      title: '모델의 스케일과 기능이 벽 두께를 결정합니다',
      html: '작은 전시용 피규어의 경우 1.5 mm 벽 두께가 신뢰할 수 있는 최소값이지만, 대형 인쇄물의 경우 벽 두께를 늘려야 합니다. 높이가 150mm를 초과하는 부품의 경우 2.0mm에서 2.5mm 두께를 목표로 하십시오. 하중을 받는 기계 부품이나 플렉시블/엘라스토머 레진으로 인쇄되는 부품의 경우, 하중 하에서 구조적 붕괴를 방지하기 위해 벽 두께를 3.0mm 이상으로 해야 합니다.'
    },
    {
      type: 'title',
      text: '중공 SLA 인쇄를 위한 기술 용어집',
      level: 2
    },
    {
      type: 'glossary',
      items: [
          {
            term: 'SLA 중공화',
            definition: '레진과 인쇄 시간을 절약하기 위해 속이 꽉 찬 3D 모델을 지정된 벽 두께의 중공 쉘로 변환하는 프로세스.'
          },
          {
            term: '흡착판 효과',
            definition: '인쇄 중에 밀폐된 중공 공간이 릴리스 필름에서 떨어질 때 발생하는 진공력.'
          },
          {
            term: '이탈력',
            definition: '경화된 레이어가 수조 바닥에서 분리될 때 모델과 서포터가 받는 기계적 인장력.'
          },
          {
            term: '레진 트래핑',
            definition: '표면 장력으로 인해 미경화 액체 레진이 내부 모서리, 서포터 및 텍스처 내부에 남아 있는 현상.'
          }
        ]
    },
    {
      type: 'title',
      text: '성공적인 중공 인쇄를 위한 체크리스트 요약',
      level: 2
    },
    {
      type: 'summary',
      title: '슬라이싱 전 SLA 체크리스트',
      items: [
          '인쇄 전 중공화 두께가 모델 스케일에 적합한지 확인합니다.',
          '가장 낮은 인쇄 지점에 최소 2개의 배수구가 배치되었는지 확인합니다.',
          '환기가 되지 않는 격리된 내부 빈 공간이 있는지 확인합니다.',
          'IPA를 사용한 내부 세척 및 내부 UV LED 경화 계획을 수립합니다.'
        ]
    }
  ];

export const content: ToolLocaleContent & { ui: ResinHollowingDrainageCalculatorUI } = {
  slug, title, description,
  ui: {
    unitSystemLabel: '단위',
    metricLabel: '메트릭',
    imperialLabel: 'US',
    modelInputsLabel: '모델 입력',
    volumeLabel: '총 모델 부피',
    heightLabel: '파트 높이',
    complexityLabel: '기하학적 복잡도',
    resinTypeLabel: '레진 유형',
    simpleLabel: '단순',
    moderateLabel: '중간',
    highLabel: '높음',
    standardLabel: '일반',
    toughLabel: '고강도',
    engineeringLabel: '엔지니어링',
    resultsLabel: '비우기 및 배출 결과',
    wallThicknessLabel: '권장 벽 두께',
    drainDiameterLabel: '배출구 직경',
    drainHoleCountLabel: '최소 구멍 수',
    adjustedSavingLabel: '예상 레진 절약량',
    adjustedSavingNote: '내벽에 묻어 잔류하는 액체 레진을 감안하여 복잡도에 맞게 조정되었습니다.',
    trapFactorLabel: '잔류 레진 계수',
    trapFactorHelp: '밀폐된 공동 내 점성 레진의 표면 장력을 보완하기 위해 기하학적 복잡도에 따라 이 계수가 변합니다.',
    theoreticalSavingLabel: '이론적인 중공 부피',
    trappedAllowanceLabel: '허용 잔류 레진량',
    savingUnitLabel: '절약',
    percentLabel: '%',
    cm3Unit: 'cm3',
    cubicInUnit: 'in3',
    mmUnit: 'mm',
    inchUnit: 'in',
    mlUnit: 'ml',
    drainPlacementNote: '참고: 배출구는 출력 방향에서 빌드 플레이트 측면 및 가장 낮은 레진 수집 지점 근처에 배치해야 합니다.',
    vacuumWarning: '중공 형상은 이탈 필름과의 진공 흡착을 방지하기 위해 항상 두 개 이상의 배출구가 필요합니다.',
    trappedResinWarning: '복잡한 기하학적 형상은 내부에 액체 레진을 가두며, 이 계산은 그 허용치를 추정합니다.',
    checklistTitle: '슬라이싱 전 체크리스트',
    checklistItems: ['배출구가 빌드 플레이트 근처 영역에 위치하는지 확인하십시오.', '벽 두께가 1.5 mm 미만으로 내려가지 않는지 확인하십시오.', '모델 내부에 닫힌 레진 고립 영역이나 빈 공간이 없는지 확인하십시오.'],
  },
  seo: seoData, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
