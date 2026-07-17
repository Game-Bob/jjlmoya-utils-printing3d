import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MasterPricingMarginCalculatorUI } from '../ui';

const slug = '3d-print-pricing-calculator';
const title = '3D 프린팅 가격 계산기: 마진, 마크업 및 시장 포지션';
const description =
  '제조 원가, 목표 마진율, 마크업 비율, 경쟁사 가격을 바탕으로 정확한 금융 공식을 사용하여 3D 프린팅 권장 소비자 가격(PVP)을 계산합니다.';

const currencyOptions = [
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
];

const faqData = [
  {
    question: '3D 프린팅에서 마진과 마크업의 차이점은 무엇인가요?',
    answer:
      '마진은 이익을 판매 가격으로 나눈 비율이며, 마크업은 이익을 원가로 나눈 비율입니다. 원가 40,00에 50% 마크업을 적용하면 가격은 60,00이 되고 실제 마진율은 50%가 아니라 33,33%가 됩니다.',
  },
  {
    question: '목표 마진은 왜 100% 미만이어야 하나요?',
    answer:
      '마진 공식은 원가를 (1 - 마진율)로 나눕니다. 마진율이 100%가 되면 분모가 0이 되므로 유한한 판매 가격이 존재할 수 없습니다.',
  },
  {
    question: '경쟁사 가격이 3D 프린팅 견적을 결정해야 하나요?',
    answer:
      '경쟁사 가격은 포지셔닝 신호일 뿐이며 원가 계산을 대체할 수 없습니다. 계산된 가격이 시장가보다 높다면 할인을 적용하기 전에 원가, 마감 수준, 리드 타임, 부가 가치를 검토하십시오.',
  },
  {
    question: '계산기에 세금이나 부가세가 포함되어 있나요?',
    answer:
      '아닙니다. 세금 적용 전 권장 소비자 가격을 계산합니다. 현지 인보이스 규정에 따라 부가세, 판매세, 플랫폼 수수료 또는 결제 수수료를 별도로 추가해야 합니다.',
  },
];

const howToData = [
  { name: '총 제조 원가 입력', text: '고정비, 변동비, 재료비, 장비 가동 시간, 인건비, 후가공 비용을 포함한 작업의 전체 원가를 입력합니다.' },
  { name: '마진 또는 마크업 모드 선택', text: '권장 소비자 가격(PVP) 계산 시 목표 마진 공식을 사용할지 아니면 마크업 공식을 사용할지 선택합니다.' },
  { name: '경쟁사 기준 가격 설정', text: '비교 가능한 시장 가격을 입력하여 귀사의 견적이 경쟁사보다 높은지, 낮은지 또는 비슷한 수준인지 확인합니다.' },
  { name: '권장 가격 복사', text: '복사 버튼을 사용하여 권장 판매가(PVP), 순이익, 실제 마진, 시장 비교 결과를 견적서나 인보이스로 가져옵니다.' },
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
    '3d 프린팅 가격 계산기',
    '3d 프린팅 마진율 계산기',
    '마크업 마진 차이 3d 프린팅',
    '3d 프린팅 판매가 계산기',
    '시장 포지셔닝 지표',
  ],
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<MasterPricingMarginCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: '3D 프린팅 가격 입력',
    resultsAriaLabel: '3D 프린팅 가격 결과',
    currencyLabel: '통화',
    currencyOptions,
    currencyOptionSeparator: ' - ',
    costLabel: '총 제조 원가',
    competitorLabel: '경쟁사 기준 가격',
    marginLabel: '목표 마진율',
    markupLabel: '목표 마크업 비율',
    conversionFactorLabel: '글로벌 변환 계수',
    conversionFactorUnit: 'x',
    conversionHint: '비용이 이미 선택한 통화로 입력된 경우 1로 유지하십시오. 글로벌 가격표 조율이나 통화 환산 시 사용합니다.',
    modeLabel: '판매가 방식',
    marginModeLabel: '마진율',
    markupModeLabel: '마크업',
    pvpRecommendedLabel: '권장 PVP',
    netProfitLabel: '순이익',
    realMarginLabel: '실제 마진율',
    marketComparisonLabel: '경쟁사 대비',
    marketPositionLabel: '시장 포지션',
    aboveMarketLabel: '시장가 이상',
    belowMarketLabel: '시장가 이하',
    atMarketLabel: '시장가 수준',
    pvpByMarginLabel: '마진 기준 판매가',
    pvpByMarkupLabel: '마크업 기준 판매가',
    formulaMarginLabel: 'PVP_margin = C / (1 - M / 100)',
    formulaMarkupLabel: 'PVP_markup = C x (1 + U / 100)',
    sliderOutputSeparator: ' | ',
    copyLabel: '가격 복사',
    copiedLabel: '복사 완료',
    copyTemplate: '권장 PVP: {pvp}; 순이익: {profit}; 실제 마진: {margin}; 시장 비교: {comparison}',
    pendingLabel: '-',
    currencySymbol: '\u20ac',
  },
  seo: [
    { type: 'title', text: '3D 프린팅 가격 계산기 작동 원리', level: 2 },
    {
      type: 'paragraph',
      html: '신뢰할 수 있는 <strong>3D 프린팅 가격 계산기</strong>는 필라멘트 무게뿐만 아니라 총 제조 원가에서 출발해야 합니다. 원가에는 고정비 분담금, 변동 장비 비용, 재료비, 출력 실패율 반영분, 인건비, 후가공 비용, 포장비 및 작업에 직접 소요된 제반 경비가 포함되어야 합니다. 원가가 파악되면 판매 가격은 목표 마진 또는 마크업을 통해 계산됩니다. 이 두 가지 방법은 서로 대체할 수 없으며, 이를 혼동하는 것은 3D 프린팅 서비스가 겉으로는 이익이 남아 보이지만 실제로는 계획된 이익률을 달성하지 못하는 가장 빠른 지름길입니다.',
    },
    {
      type: 'paragraph',
      html: '이 계산기는 엄격한 공식을 사용합니다: <code>PVP_margin = C / (1 - M / 100)</code> 및 <code>PVP_markup = C x (1 + U / 100)</code>. 순이익은 항상 <code>PVP - C</code>입니다. 실제 마진은 원가가 아닌 최종 판매 가격을 기준으로 이익을 나눈 비율입니다. 목표 마진 슬라이더는 100% 미만으로 제한되는데, 이는 100% 마진을 얻으려면 원가가 0이거나 가격이 무한대여야 하기 때문입니다. 결과값은 항상 소수점 둘째 자리까지 표시되며 천 단위 구분 기호가 없어 인보이스, 스프레드시트, ERP 시스템 또는 고객 견적서에 깨끗하게 복사하여 붙여넣을 수 있습니다.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'M < 100', label: '엄격한 마진 검증', icon: 'mdi:shield-check-outline' },
        { value: '소수점 2자리', label: '고정 화폐 포맷', icon: 'mdi:calculator-variant-outline' },
        { value: '라이브', label: '슬라이더 실시간 재계산', icon: 'mdi:flash-outline' },
        { value: '시장가', label: '경쟁사 포지셔닝 지표', icon: 'mdi:chart-timeline-variant' },
      ],
    },
    {
      type: 'tip',
      title: '회사 내부에서 통일된 가격 용어를 사용하십시오',
      html: '<p>영업 대화 시 명확한 기준을 가지고 마진을 말하는지, 마크업을 말하는지 명시하십시오. 계산 기준을 지정하지 않은 "40%" 견적은 완전히 다른 두 가지 판매가를 초래할 수 있습니다.</p>',
    },
    { type: 'title', text: '3D 프린팅에서의 마진 vs 마크업', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>마크업 마진 차이 3d 프린팅</strong>에 대한 관심은 대개 30% 마크업을 적용했음에도 실제 순이익률이 30%가 되지 않는다는 점을 발견할 때 시작됩니다. 마크업은 원가 대비 비율로 측정됩니다. 마진은 판매가 대비 비율로 측정됩니다. 출력물의 원가가 50,00이고 75,00에 판매된다면 순이익은 25,00입니다. 마크업은 25,00을 50,00으로 나눈 50,00%가 됩니다. 반면 마진은 25,00을 75,00으로 나눈 33,33%가 됩니다. 둘 다 올바른 지표이지만 비즈니스적으로 서로 다른 질문에 답합니다.',
    },
    {
      type: 'table',
      headers: ['원가', '목표', '공식', 'PVP', '순이익', '실제 마진율'],
      rows: [
        ['50.00', '50% 마크업', '50.00 x 1.50', '75.00', '25.00', '33.33%'],
        ['50.00', '50% 마진율', '50.00 / 0.50', '100.00', '50.00', '50.00%'],
        ['80.00', '25% 마크업', '80.00 x 1.25', '100.00', '20.00', '20.00%'],
        ['80.00', '25% 마진율', '80.00 / 0.75', '106.67', '26.67', '25.00%'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '높은 마크업률을 적용해도 마진율은 완만할 수 있습니다',
      badge: '재무 정밀도',
      html: '<p>100% 마크업은 원가를 두 배로 늘리지만 실제 이익률(마진율)은 50%가 됩니다. 비즈니스를 유지하고 성장시키기 위해 실제 60%의 마진이 필요하다면 100% 마크업만으로는 부족합니다.</p>',
    },
    {
      type: 'glossary',
      items: [
        { term: 'PVP', definition: '견적 정책에서 달리 규정하지 않는 한, 세금 적용 전 권장 소비자 가격입니다.' },
        { term: '원가 C', definition: '이익이 추가되기 전에 작업에 할당된 총 제조 원가입니다.' },
        { term: '마진 M', definition: '이익을 판매 가격으로 나눈 백분율입니다.' },
        { term: '마크업 U', definition: '이익을 원가로 나눈 백분율입니다.' },
        { term: '순이익', definition: '세금 및 자금 조달 조정을 거치기 전 판매가에서 제조 원가를 뺀 금액입니다.' },
      ],
    },
    { type: 'title', text: '총 제조 원가에 포함되는 항목', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3D 프린팅 판매가 계산기</strong>는 입력되는 원가의 정확도만큼만 신뢰할 수 있습니다. 전문적인 견적을 작성할 때 원가는 단순히 필라멘트 무게에 스풀 가격을 곱한 것만을 의미하지 않습니다. 재료비 외에 장비 소모 전력, 노즐 및 FEP 필름 마모 비용, 레진 손실분, 빌드 플레이트 세팅 비용, 슬라이싱 및 서포터 제거 시간, 샌딩, 채색, 품질 검사, 포장비, 결제 수수료 및 합리적인 불량률 반영분이 원가 계산에 포함되어야 합니다. 계산기는 입력된 원가에 이미 이러한 항목들이 흡수되어 있다고 가정합니다.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        '필라멘트, 레진, 분말, 서포터, 퍼지 및 래프트 재료를 포함한 가변 재료비를 포함합니다.',
        '장비 감가상각, 유지보수, 에너지 소모량 및 예상 서비스 수명을 포함한 시간당 장비 비용을 포함합니다.',
        '견적 작성, 슬라이싱, 후가공, 포장 및 작업 전담 고객 소통을 담당한 노동비용을 포함합니다.',
        '프라이머, 페인트, 사포, IPA, 장갑, 테이프, 광택제 및 블레이드 같은 직접 후가공 소모품 비용을 포함합니다.',
        '기하학적 구조가 까다롭거나 엄격한 공차, 장시간 야간 작업 등의 위험 요소가 있는 경우 불량률을 계측하여 포함시킵니다.',
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '단순 재료비',
          description: '취미 생활자들의 빠른 추정에는 용이하나 상업적 목적에는 너무 협소합니다.',
          icon: 'mdi:printer-3d-nozzle',
          points: ['인건비 제외', '장비 마모 비용 제외', '완성품 가치 저평가'],
        },
        {
          title: '제조 원가',
          description: '마진과 마크업의 가장 이상적인 기준값으로, 이익을 붙이기 전 순수 작업 비용을 나타냅니다.',
          icon: 'mdi:factory',
          highlight: true,
          points: ['장비 시간 비용 포함', '노동 비용 포함', '일관된 견적서 발행 가능'],
        },
        {
          title: '관리비 포함 가격',
          description: '일반 관리비와 이익이 이미 포함되어 있을 수 있으므로 여기에 다시 마진을 추가하면 이중 계산이 될 수 있습니다.',
          icon: 'mdi:receipt-text-outline',
          points: ['감사 시 유용', '계산기 입력값으로는 부적절', '명확한 회계 정책 수반 필요'],
        },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:calculator-variant-outline',
      title: '계산기는 원가를 임의로 추정하지 않습니다',
      html: '<p>이미 산출된 원가를 추천 판매 가격으로 변환합니다. 원가가 불확실하다면 먼저 재료, 시간, 노동, 마감에 대한 원가 모델을 수립한 후 이 도구를 통해 마진과 시장 포지션을 산정하십시오.</p>',
    },
    { type: 'title', text: '목표 마진율을 기준으로 3D 프린팅 가격 책정하기', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>3D 프린팅 가격 책정 방법</strong>을 검색하면 대개 단순 곱하기 방식을 마주하게 됩니다. 그러나 비즈니스의 뚜렷한 수익 목표가 있을 때는 마진 기준 책정이 훨씬 우수합니다. 필요한 마진율이 40%이고 제조 원가가 60,00인 경우 가격은 <code>60,00 / (1 - 0,40)</code>인 100,00이 됩니다. 이익은 40,00이 되고 실제 마진율은 정확히 40,00%가 됩니다. 이 방식은 각 제품군이 매출에서 일관된 비율의 이익 기여도를 내기를 원할 때 널리 쓰입니다.',
    },
    {
      type: 'paragraph',
      html: '가장 핵심적인 규칙은 마진율이 100%에 도달할 수 없다는 것입니다. 99% 마진율에서는 10,00 원가의 제품 가격이 1000,00이 됩니다. 99,99% 마진율에서는 동일한 원가가 100000,00이 됩니다. 이러한 수학적 특성은 오류가 아니며, 마진 목표가 상업적으로 실현 가능해야 함을 보여줍니다. 과도하게 높은 마진 목표는 보통 원가 모델이 너무 낮게 책정되었거나 제품의 부가가치가 독보적인 니치 마켓임을 의미합니다.',
    },
    {
      type: 'table',
      headers: ['목표 마진율', '원가 곱하기 비율', '원가 40.00 제품 판매가', '적용 사례'],
      rows: [
        ['20%', '1.2500x', '50.00', '서비스 관리가 적고 경쟁이 치열한 범용 프린팅 제품군.'],
        ['35%', '1.5385x', '61.54', '일반적인 간접비가 소요되는 일상적인 전문 작업.'],
        ['50%', '2.0000x', '80.00', '후가공 소요가 크거나 긴급도가 높은 소량 다품종 주문 작업.'],
        ['70%', '3.3333x', '133.33', '독점적인 기술 가치, 난이도가 높은 프로젝트 혹은 프리미엄 포지셔닝.'],
      ],
    },
    {
      type: 'summary',
      title: '마진 기준 가격 책정 체크리스트',
      items: [
        '총 제조 원가를 기본값으로 삼으십시오.',
        '목표 마진율을 100% 미만으로 유지하십시오.',
        '견적을 보내기 전에 계산된 판매가(PVP)를 경쟁사 가격과 비교해 보십시오.',
        '가격이 너무 높게 나온다면 이익을 깎기 전에 원가 유발 요인을 먼저 진단하십시오.',
      ],
    },
    { type: 'title', text: '마크업을 마진과 혼동하지 않고 사용하기', level: 2 },
    {
      type: 'paragraph',
      html: '마크업 책정은 원가 범주별로 고정 승수를 더할 때 편리합니다. 예를 들어 일반 FDM 출력에는 80% 마크업, 마감 프로토타입에는 120% 마크업, 긴급 소형 작업에는 200% 마크업을 가산할 수 있습니다. 공식은 직접적입니다: 원가 곱하기 (1 + 마크업율). 35,00 원가에 80% 마크업을 적용하면 63,00이 됩니다. 순이익은 28,00이지만 실제 마진율은 80%가 아니라 44,44%가 됩니다.',
    },
    {
      type: 'proscons',
      title: '마진 방식 vs 마크업 방식',
      items: [
        { pro: '마진 방식은 매출 대비 순이익 보고서와 직접 일치합니다.', con: '영업 담당자가 고마진 목표 시 가격이 비선형적으로 급등하는 이유를 이해해야 합니다.' },
        { pro: '마크업 방식은 원가 장부에 곱하기를 적용하기 간편합니다.', con: '직원이 마크업 비율 자체를 순수 마진율로 오인하면 실제 수익성을 착각하기 쉽습니다.' },
        { pro: '두 공식을 병기하여 실제 재무 영향을 파악할 수 있게 돕습니다.', con: '회사는 최종적으로 견적에 반영할 기준가에 대한 정책을 수립해야 합니다.' },
      ],
    },
    {
      type: 'message',
      title: '마크업이 실무적으로 쓰이는 경우',
      ariaLabel: '마크업 지침',
      html: '<p>마크업은 FDM 양산 작업에 +60%, 레진 미니어처에 +90%, 익스프레스 부품에 +150% 가산과 같은 단순 내부 룰을 정할 때 유용합니다. 실제 마진율 출력을 모니터링하여 그 룰이 지속 가능한지 체크하십시오.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '마크업이 잘못된 지표는 아닙니다',
      badge: '방식 참고 사항',
      html: '<p>마크업은 산출 기준만 정확히 공유된다면 유효한 가격 언어입니다. 문제는 원가 가산 마크업을 견적서나 장부상에서 그냥 "마진"이라고 잘못 부르는 관행입니다.</p>',
    },
    { type: 'title', text: '경쟁사 가격 및 시장 포지셔닝', level: 2 },
    {
      type: 'paragraph',
      html: '경쟁사 기준 가격은 단순 수식 시트를 상업적 판단 도구로 격상시킵니다. 권장 판매가(PVP)가 경쟁 가격보다 높게 도출되면 경고 색상이 연하게 표시됩니다. 이것이 견적이 틀렸음을 뜻하지는 않습니다. 리드 타임 단축, 재료 인증서 제공, 우수한 표면 품질, 설계 엔지니어링 지원, 치수 정밀 검사, 로컬 픽업 편의성 또는 리스크 감소 혜택이 가격 프리미엄을 정당화할 수 있습니다. 다만 견적을 전달하기 전에 영업 담당자가 경쟁사 대비 왜 더 비싼지에 대한 논리를 인지하고 있어야 합니다.',
    },
    {
      type: 'paragraph',
      html: '경쟁 가격과 비교할 때는 동등한 스펙의 대상을 비교해야 합니다. 적층 결이 그대로 보이는 FDM 출력물은 샌딩 후 서페이서를 올리고 도색 마감한 프로토타입과 비교 대상이 될 수 없습니다. 재질이 불분명하고 공차가 크며 배송 기간이 긴 온라인 플랫폼 판매 가격은 엔지니어가 직접 검토하고 조립 품질을 보증하는 현지 전문 서비스 가격과 같을 수 없습니다. 재질, 공정, 수량, 마감 수준, 납기 조건이 가장 유사한 경쟁 가격을 기입하십시오.',
    },
    {
      type: 'table',
      headers: ['포지션', '해석', '영업 조치'],
      rows: [
        ['경쟁가 이하', '가격 경쟁력은 있으나 마진율을 손해 보고 있을 수 있습니다.', '목표 마진율이 너무 낮게 설정되었거나 경쟁사가 더 적은 범위의 서비스를 제공하는지 확인하십시오.'],
        ['경쟁가 근접', '기준 시장가와 가격대가 일치합니다.', '서비스 품질, 신속한 납기, 신뢰성을 강점으로 삼아 수주를 진행하십시오.'],
        ['경쟁가 이상', '견적 단가에 대한 합리적인 소명이나 원가 검토가 필요합니다.', '단순 할인을 검토하기 전에 원가 구조, 마감 디테일, 긴급성 및 고객 가치를 재차 분석하십시오.'],
      ],
    },
    {
      type: 'tip',
      title: '단순 최저가 경쟁에 휩쓸리지 마십시오',
      html: '<p>숙련된 인건비, 캘리브레이션된 장비, 검증된 산업용 자재와 가공 노하우를 갖춘 전문 숍은 저가 견적에 무조건 맞춰 단가를 깎아서는 안 됩니다. 고객이 확인할 수 있는 가치로 승부하십시오.</p>',
    },
    { type: 'title', text: '통화 선택기 및 글로벌 변환 계수', level: 2 },
    {
      type: 'paragraph',
      html: '해외 견적 발행 시에는 일관성 있는 금융 관리가 필요합니다. 통화 선택기를 누르면 심볼이 변경되고 기존 입력값들이 전체 도구 패키지 공통 기준 요율에 따라 변환됩니다. 글로벌 변환 계수는 이와 별개로 작동하는 영업용 승수입니다. 원가와 경쟁 가격이 이미 해당 통화로 입력된 상태라면 계수를 <code>1</code>로 두십시오. 환율 변동 완충 장치, 지역별 요율 테이블 대입 또는 대리점 수수료 가산을 적용하고자 할 때 맞춤 계수를 입력하십시오.',
    },
    {
      type: 'paragraph',
      html: '이 계수는 화폐 값에만 적용되며 마진이나 마크업 비율에는 영향을 주지 않습니다. 통화가 달라져도 비율 지표가 갖는 경제적 의미는 동일하게 유지되어야 하기 때문입니다. 유로화 기준 35% 마진은 원가와 경쟁가 변환을 거쳐 달러화 기준으로도 35% 마진으로 환산됩니다. 출력값은 천 단위 구분 기호 없이 소수점 2자리로 고정되어 견적 프로그램이나 엑셀 시트에 붙여넣을 때 에러를 일으키지 않습니다.',
    },
    {
      type: 'summary',
      title: '통화 및 계수 규칙',
      items: [
        '가격을 복사하기 전에 고객 거래 통화를 먼저 선택하십시오.',
        '로컬 통화 견적서 작성 시에는 계수를 1로 고정하십시오.',
        '계수는 마진 공식 변경 목적이 아닌, 통제된 단가 스케일링용으로만 사용하십시오.',
        '세금 적용 및 인보이스 반올림은 계산된 세전 PVP 가격을 기초로 사후 처리하십시오.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '세금과 결제 수수료는 별도 계산됩니다',
      badge: '견적 지침',
      html: '<p>부가세, 판매세, 결제사 수수료, 쇼핑몰 수수료 혹은 배송 보험 등을 청구해야 하는 경우, 계산기로 산출한 제조 PVP 위에 회사 회계 방침에 맞춰 얹어서 청구하십시오.</p>',
    },
    { type: 'title', text: '3D 프린팅 서비스 가격 책정 전략 수립', level: 2 },
    {
      type: 'paragraph',
      html: '확고한 <strong>3D 프린팅 서비스 가격 책정 전략</strong>은 비용 분석의 정확성, 이익 관리의 규율, 그리고 시장 동향의 흐름을 조화롭게 엮는 데 있습니다. 정확성은 원가 이하 판매를 차단하고, 규율은 무분별한 할인으로 인한 수익성 악화를 막으며, 동향 인지는 고객이 실질적으로 받아들일 수 있는 범위를 지켜줍니다. 이 계산기는 원가, 마진/마크업, 그리고 경쟁 가격이 만나는 바로 그 교차점에 위치합니다.',
    },
    {
      type: 'list',
      icon: 'mdi:target',
      items: [
        '범용 출력, 기능성 시제품, 고품질 전시 모형, 긴급 출력, 소량 양산 등 제품 성격에 따라 마진율 대상을 개별화하십시오.',
        '영업 스태프가 마크업 비율 가산으로 유도되는 최종 실제 마진율을 직접 볼 수 있게 조치하십시오.',
        '시장 포지션별 수주 성공률을 기록하여 프리미엄 견적 발행이 시장에서 납득되고 있는지 데이터로 검증하십시오.',
        '납품 후 실제 원가를 정산하고 노무비, 불량률, 후가공 시간이 예상을 초과했다면 원가 계산 표준을 업데이트하십시오.',
        '상담, 셋업, 파일 검토 비용이 실 제조비를 초과하는 소형 주문을 위해 최소 주문 금액을 책정하십시오.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:chart-timeline-variant',
      title: '출력 완료 후 실질적인 이익을 사후 점검하십시오',
      html: '<p>견적 발행 시 계산된 마진율보다 납품 후 정산된 실제 마진율이 가격 시스템을 발전시킵니다. 견적 시 예측한 원가와 납품 후 정산된 실제 원가를 정기적으로 대조해 보십시오.</p>',
    },
    {
      type: 'summary',
      title: '견적 즉시 활용 워크플로우',
      items: [
        '전체 제조 원가를 엄밀하게 산출합니다.',
        '내부 지침에 맞게 마진 혹은 마크업 모드를 고릅니다.',
        '도출된 실제 마진율과 순이익을 점검합니다.',
        '유사 스펙의 경쟁사 가격과 대조해 봅니다.',
        '계산된 PVP 판매가를 견적서에 기입하고 세금 처리는 사후 별도 진행합니다.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
