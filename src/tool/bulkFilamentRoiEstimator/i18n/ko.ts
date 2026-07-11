import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BulkFilamentRoiEstimatorUI } from '../ui';

const slug = 'bulk-filament-roi-estimator';
const title = '벌크 필라멘트 ROI 계산기';
const description = '1kg 필라멘트 스풀을 3kg, 5kg 또는 맞춤형 벌크 스풀과 습기 위험, 실제 절감액, 현지 통화 형식으로 비교합니다.';

const faqData = [
  {
    question: '5kg 필라멘트 스풀이 1kg 스풀 5개를 사는 것보다 항상 저렴한가요?',
    answer: '아닙니다. 그램당 비용이 더 낮고 습기 노출로 인쇄 품질이 저하되기 전에 재료를 소진할 수 있는 경우에만 저렴합니다. 소비 속도가 느리면 벌크 할인이 낭비로 바뀔 수 있습니다.',
  },
  {
    question: '계산기가 왜 위험 패널티를 차감하나요?',
    answer: '패널티는 예상 소비 시간이 안전 보관 기간보다 길 때 손실되는 가치를 추정합니다. 환율 변환이나 실험실 습도 모델이 아니라 계획상의 위험 조정입니다.',
  },
  {
    question: '실시간 환율이 필요한가요?',
    answer: '아니요. 이 도구는 통화를 전환할 때 표시된 가격을 변환하기 위해 로컬 근사 환율표를 사용합니다. 서버에 접속하지 않고 등가성을 유지하므로 최종 구매 결정은 여전히 상점이나 은행에서 표시하는 가격을 기준으로 해야 합니다.',
  },
  {
    question: 'PLA, PETG, TPU 또는 나일론의 경우 안전 보관 시간을 어떻게 입력해야 하나요?',
    answer: '해당 재료를 사용자 환경에서 건조하게 유지할 수 있는 기간을 사용하세요. PLA는 나일론이나 TPU보다 더 오래 보관할 수 있지만, 개방된 공간, 습한 기후 또는 밀봉 불량으로 인해 안전 기간이 크게 단축될 수 있습니다.',
  },
];

const howToData = [
  {
    name: '표준 스풀 가격 입력',
    text: '평소에 구매하는 1kg 스풀의 가격을 입력하세요. 공급업체가 다른 형식을 사용하는 경우 표준 스풀 무게를 조정할 수 있습니다.',
  },
  {
    name: '벌크 제품 입력',
    text: '3kg, 5kg 또는 맞춤형 무게를 선택하고 해당 대형 스풀의 전체 가격을 동일한 통화로 입력하세요.',
  },
  {
    name: '보관 위험 모델링',
    text: '월간 소비량과 습기, 취성 또는 건조 노력이 실제 비용이 되기 전에 신뢰할 수 있는 최대 보관 시간을 추가하세요.',
  },
  {
    name: '실제 절감액 확인',
    text: '실제 절감액에는 벌크 할인과 성능 저하 패널티가 모두 포함되어 있으므로 이를 구매 신호로 사용하세요.',
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

export const content: ToolLocaleContent<BulkFilamentRoiEstimatorUI> = {
  slug,
  title,
  description,
  ui: {
    currencyLabel: '통화',
    unitSystemLabel: '단위',
    metricLabel: '미터법',
    imperialLabel: '야드파운드법',
    standardTitle: '표준 스풀',
    bulkTitle: '벌크 스풀',
    consumptionTitle: '소비 및 보관',
    standardWeightLabel: '표준 무게',
    standardPriceLabel: '표준 스풀 가격',
    bulkWeightLabel: '벌크 무게',
    bulkPresetThreeMetricLabel: '3 kg',
    bulkPresetFiveMetricLabel: '5 kg',
    bulkPresetThreeImperialLabel: '6.6 lb',
    bulkPresetFiveImperialLabel: '11 lb',
    otherWeightLabel: '기타',
    bulkPriceLabel: '벌크 스풀 가격',
    customWeightLabel: '맞춤형 벌크 무게',
    monthlyUseLabel: '월간 소비량',
    safeStorageLabel: '안전 보관 기간',
    kgUnit: 'kg',
    lbUnit: 'lb',
    monthsUnit: '개월',
    realSavingsLabel: '위험 반영 후 실제 절감액',
    grossSavingsLabel: '총 절감액',
    riskPenaltyLabel: '습기 위험 패널티',
    breakEvenLabel: '소비 시간',
    viabilityLabel: '타당성',
    tableMetricLabel: '미터법',
    tableStandardLabel: '1kg 스풀',
    tableStandardImperialLabel: '2.2lb 스풀',
    tableBulkLabel: '벌크 스풀',
    costPerGramMetric: '그램당 비용',
    costPerOunceMetric: '온스당 비용',
    totalSpoolMetric: '스풀 가격',
    usableWindowMetric: '소비 기간',
    profitableLabel: '수익성 있음',
    neutralLabel: '중립',
    poorLabel: '가치 낮음',
    humidityWarningTitle: '습기 성능 저하 위험',
    humidityWarning: '성능 저하 위험: 건조 시스템이나 밀폐 보관함이 없으면 이 스풀을 구매할 때 손실이 발생할 수 있습니다.',
    safeMessage: '보관 위험이 선택한 안전 기간 내에 있습니다. 예상 절감액을 유지하려면 스풀을 밀봉하고 건조하게 보관하세요.',
  },
  seo: [
    {
      type: 'title',
      text: '벌크 필라멘트가 실제로 더 저렴한지 판단하는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3kg 또는 5kg 필라멘트 스풀은 1kg당 표시 가격이 일반적으로 1kg 스풀보다 낮기 때문에 매력적으로 보입니다. 흔한 실수는 결제 총액만 비교하는 것입니다. 올바른 비교는 두 제품을 <strong>그램당 비용</strong>으로 표준화하고, 차이에 실제 구매할 재료량을 곱한 다음, 재료가 다 소모될 때까지 인쇄 가능한 상태로 유지될 수 있는지 묻는 것입니다.',
    },
    {
      type: 'paragraph',
      html: '핵심 공식은 간단합니다. 각 스풀 가격을 그램 단위 무게로 나누면 됩니다. 1kg 스풀이 24.99이고 5kg 스풀이 89.99라면, 1kg 스풀은 그램당 0.02499이고 벌크 스풀은 그램당 0.017998입니다. 겉보기 절감액은 그램 차이에 5000그램을 곱한 것입니다. 이 숫자는 유용하지만, 스풀이 몇 달 동안 열려 있을 경우에는 여전히 불완전합니다.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1000g', label: '일반적인 데스크탑 필라멘트 스풀의 기준 질량' },
        { value: '3-5kg', label: '할인이 눈에 띄는 일반적인 벌크 형식' },
        { value: '0 API', label: '통화 환산은 실시간 서버 호출 대신 로컬 근사 환율 사용' },
      ],
    },
    {
      type: 'table',
      headers: ['질문', '입력할 내용', '중요한 이유'],
      rows: [
        ['평소에 무엇을 구매하나요?', '1kg 스풀 가격', '그램당 기준 비용을 설정합니다.'],
        ['벌크 제품은 무엇인가요?', '총 가격과 벌크 무게', '할인된 그램당 비용을 생성합니다.'],
        ['얼마나 빨리 인쇄하나요?', '월간 소비 kg', '스풀이 보관된 상태로 있을 기간을 추정합니다.'],
        ['보관 상태는 어떤가요?', '성능 저하 전 안전 개월 수', '위험 패널티가 시작되는 시점을 정의합니다.'],
      ],
    },
    {
      type: 'title',
      text: '습기가 ROI 계산을 바꾸는 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '필라멘트는 선반 위에 안전하게 놓인 현금 등가물이 아닙니다. 많은 폴리머가 공기 중의 습기를 흡수하며, 젖은 필라멘트는 기포, 스트링잉, 취성 압출, 흐린 표면, 약한 층 접착, 불규칙한 유량으로 인쇄될 수 있습니다. 정확한 속도는 재료, 습도, 포장, 그리고 스풀이 건조 상자, 밀봉 백, 또는 개방형 홀더에 보관되는지 여부에 따라 다릅니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '벌크 스풀의 숨겨진 실패 모드',
      badge: '계획 위험',
      html: '5kg 스풀은 그램당 가격이 우수하더라도 나쁜 구매가 될 수 있습니다. 프린터가 월 0.5kg을 소비하고 안전 보관 기간이 3개월이라면, 해당 스풀을 소비하는 데 약 10개월이 걸립니다. 할인은 추가 건조, 밀봉, 인쇄 실패 또는 폐기 재료 위험을 충당할 만큼 커야 합니다.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '빠른 사용자',
          description: '소규모 프린트 팜, 코스프레 제작자 또는 배치 생산자는 3kg에서 5kg을 빠르게 소비할 수 있습니다. 보관 시간이 짧기 때문에 벌크 필라멘트가 일반적으로 합리적입니다.',
          points: ['월간 사용량 많음', '선반 노출 적음', '할인이 실제 저축으로 이어짐'],
        },
        {
          title: '간헐적 취미 사용자',
          description: '주말에 인쇄하거나 가끔 수리하는 사용자는 대형 스풀을 소비하는 데 여러 달이 걸릴 수 있습니다. 습기 위험이 할인을 상쇄할 수 있습니다.',
          points: ['월간 사용량 적음', '개방 수명이 긺', '건조 보관이 더 중요함'],
        },
        {
          title: '기술 재료 사용자',
          description: '나일론, TPU, PC 블렌드 및 일부 PETG 등급과 같은 재료는 종종 더 엄격한 건조 관리가 필요합니다. 벌크 구매는 보관 장비와 함께 이루어져야 합니다.',
          points: ['습기 민감도 높음', '건조 상자 권장', '패널티 임계값은 보수적으로 설정'],
        },
      ],
    },
    {
      type: 'title',
      text: '실제 절감액의 의미',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구는 먼저 총 절감액을 표시한 다음, 예상 소비 시간이 안전 보관 기간을 초과할 때 성능 저하 패널티를 차감합니다. 이 패널티는 실험실 예측이 아니라 의도적으로 보수적으로 설정되어 있습니다. 이는 습하거나 노화된 필라멘트가 종종 눈에 띄지 않는 비용(건조 전기, 추가 취급, 인쇄 실패, 노즐 막힘, 표면 결함, 스풀의 일부가 외관용 또는 구조용 작업에 부적합해질 가능성)을 발생시킨다는 경제적 현실을 나타냅니다.',
    },
    {
      type: 'list',
      items: [
        '실제 절감액이 플러스라는 것은 보관 위험 조정 후에도 벌크 할인이 유효함을 의미합니다.',
        '중립은 결정이 편의성, 색상 가용성, 배송비, 그리고 이미 건조 상자를 소유하고 있는지 여부에 달려 있음을 의미합니다.',
        '가치 낮음은 벌크 스풀이 그램당 더 저렴하지 않거나 위험 조정 절감액이 마이너스임을 의미합니다.',
        '경고 메시지는 소비 개월 수가 입력한 안전 보관 기간보다 클 때 나타납니다.',
      ],
    },
    {
      type: 'proscons',
      title: '벌크 필라멘트 구매의 장단점',
      items: [
        { pro: '대량 인쇄 시 그램당 비용 절감.', con: '단일 재료, 색상 및 공급업체 배치에 더 많은 자본이 묶임.' },
        { pro: '긴 생산 과정에서 스풀 교체 감소.', con: '노출된 질량이 커서 소비되기 전에 성능이 저하될 수 있음.' },
        { pro: '킬로그램당 포장 폐기물 감소.', con: '대형 스풀은 더 강력한 홀더나 외부 스풀 스탠드가 필요할 수 있음.' },
        { pro: '반복적인 팜 작업 및 배치 생산에 유용.', con: '희귀 색상, 실험적 재료 또는 느린 취미 사용에 부적합.' },
      ],
    },
    {
      type: 'title',
      text: '안전 보관 기간 선택 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '안전 보관 기간은 보편적인 재료 상수가 아닙니다. 이는 사용자가 자신의 보관 조건에서 필라멘트가 인쇄 가능한 상태로 유지될 것이라고 개인적으로 신뢰하는 시간입니다. 건조한 방에 있는 신선한 건조제가 들어 있는 밀봉 백은 습한 차고의 프린터 옆에 있는 개방형 스풀과 매우 다릅니다. 보수적인 구매 결정을 위해서는 중요한 인쇄 전에 스풀을 건조시키기 시작할 개월 수를 입력하세요.',
    },
    {
      type: 'table',
      headers: ['상황', '권장 계획 행동', '이유'],
      rows: [
        ['습한 방의 개방형 스풀 홀더', '짧은 안전 기간 사용', '습기 노출이 지속적임.'],
        ['건조제가 있는 밀폐 상자', '더 긴 안전 기간 사용', '인쇄 사이에 스풀이 보호됨.'],
        ['프린터에 공급하는 건조 상자', '더 길지만 현실적인 기간 사용', '인쇄와 보관이 모두 통제됨.'],
        ['나일론, TPU, PC 또는 수용성 서포트', '보수적으로 설정', '이 재료들은 젖으면 빠르게 인쇄 문제를 일으킬 수 있음.'],
        ['거친 프로토타입에 사용되는 PLA', '위험 허용도가 더 높을 수 있음', '경미한 외관 문제는 비중요 부품에서 허용될 수 있음.'],
      ],
    },
    {
      type: 'tip',
      title: '세일 종료 전에 계산기 사용하기',
      html: '번개 할인은 종종 벌크 스풀이 긴급하게 느껴지게 만듭니다. 할인 가격, 가능하다면 배송비 포함 가격, 그리고 현실적인 월간 사용량을 입력하세요. 소비 시간이 보관 기간보다 길다면, 할인은 추가 위험을 보상할 만큼 충분히 커야 합니다.',
    },
    {
      type: 'title',
      text: '환율 API 없이 통화 변환하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 계산기는 의도적으로 클라이언트 측에서 작동합니다. 실시간 환율을 가져오지 않지만, 통화 선택기는 사용자가 통화를 변경할 때 로컬 변환 배율을 적용합니다. 즉, 24.99 EUR로 입력된 스풀은 단순히 기호를 바꾸는 대신 USD, GBP, JPY 또는 지원되는 다른 통화로 대략적인 등가액이 됩니다. 환율은 계획 추정치이므로, 구매 전에 실제 결제 가격, 카드 수수료, 세금 및 마켓플레이스별 환율 스프레드를 확인해야 합니다.',
    },
    {
      type: 'glossary',
      items: [
        { term: '그램당 비용', definition: '스풀 가격을 총 필라멘트 그램 수로 나눈 값. 공정한 비교를 위해 사용되는 표준화된 단위입니다.' },
        { term: '총 절감액', definition: '습기나 보관 위험을 고려하기 전의 가격 이점.' },
        { term: '위험 패널티', definition: '스풀을 안전 보관 기간보다 오래 소비해야 할 때 적용되는 계획상의 공제.' },
        { term: '실제 절감액', definition: '총 절감액에서 위험 패널티를 뺀 값. 주요 구매 신호입니다.' },
        { term: '소비 기간', definition: '벌크 스풀 무게를 예상 월간 사용량으로 나눈 값.' },
      ],
    },
    {
      type: 'summary',
      title: '실용적인 구매 규칙',
      items: [
        '실제 절감액이 명확히 플러스이고 소비 기간이 보관 설정에 맞을 때 벌크를 구매하세요.',
        '한 프로젝트 후에 사용하지 않을 희귀한 색상을 구매할 때는 벌크를 피하세요.',
        '건조 장비를 습기에 민감한 폴리머를 위한 선택적 사치품이 아닌 벌크 필라멘트 시스템의 일부로 취급하세요.',
        '스풀 크기에 따라 배송비가 다를 때는 제품 페이지 가격뿐만 아니라 배송된 가격을 비교하세요.',
      ],
    },
    {
      type: 'message',
      title: '결론',
      html: '벌크 스풀은 세 가지 조건, 즉 그램당 낮은 비용, 충분한 월간 소비량, 필라멘트를 인쇄 가능하게 유지하는 보관이 모두 충족될 때 수익성이 있습니다. 하나의 조건이 충족되지 않으면 겉보기 할인이 위장된 재료 손실로 바뀔 수 있습니다.',
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
