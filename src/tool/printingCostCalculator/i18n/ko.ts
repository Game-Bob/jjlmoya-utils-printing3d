import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintingCostCalculatorUI } from '../ui';

const slug = '3d-printing-cost-calculator';
const title = '3D 프린팅 비용 계산기: 필라멘트와 전기세';
const description = '3D 프린트의 실제 비용을 계산하세요. 재료비, 전기세, 기계 감가상각비, 인건비가 포함됩니다.';

const faqData = [
  {
    question: '왜 전기세 차이가 큰가요?',
    answer: '가장 많은 전력이 소모되는 부분은 히팅 베드를 뜨겁게 유지하는 것입니다. ABS(100°C) 같은 재질은 PLA(60°C)보다 훨씬 더 많이 소모됩니다. 프린터가 개방형인지 폐쇄형인지도 영향을 줍니다.',
  },
  {
    question: '내 프린터가 몇 와트를 소모하는지 어떻게 아나요?',
    answer: '대부분의 가정용 프린터는 작동 중 평균 100-150W를 소모합니다. 스마트 플러그나 와트미터를 사용하면 정확하게 측정할 수 있습니다.',
  },
  {
    question: '손실률(waste margin)이란 무엇인가요?',
    answer: '최종 결과물에 포함되지 않는 필라멘트를 말합니다: 서포트, 라프트, 스커트, 초기 퍼징 등이 이에 해당합니다. 현실적인 계산을 위해 최소 5%를 권장합니다.',
  },
];

const howToData = [
  {
    name: '기술 데이터 입력',
    text: '출력물의 무게(Cura와 같은 슬라이서 소프트웨어 값), 출력 시간, 그리고 기계의 소모 전력을 입력합니다.',
  },
  {
    name: '경제적 비용 설정',
    text: '필라멘트 한 롤의 가격, 전기 요금, 그리고 자신의 수작업 시급을 조정합니다.',
  },
  {
    name: '수익 분석',
    text: '마진 슬라이더를 움직여 권장 판매 가격을 확인하고, 원형 차트를 통해 비용이 어디에 쓰이는지 검토합니다.',
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

const howToSchema: WithContext<HowToThing> = {
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PrintingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    materialTitle: '재료',
    partWeightLabel: '출력물 무게 (순중량)',
    gramsUnit: '그램',
    spoolPriceLabel: '필라멘트 가격 (1kg)',
    spoolPriceUnit: '원/kg',
    wasteMarginLabel: '손실률: ',
    energyTitle: '에너지와 시간',
    printTimeLabel: '출력 시간',
    hoursUnit: '시간',
    averagePowerLabel: '평균 소모 전력',
    wattsUnit: '와트',
    electricityRateLabel: '전기 요금',
    kwhPriceUnit: '원/kWh',
    amortizationTitle: '감가상각과 인건비',
    machineCostHourLabel: '시간당 기계 비용',
    priceHourUnit: '원/h',
    laborCostHourLabel: '인건비 (수작업)',
    minutesUnit: '분',
    manufacturingCostLabel: '제조 원가',
    suggestedPriceLabel: '권장 가격 (+{margin}%)',
    costBreakdownTitle: '비용 상세 내역',
    plasticLabel: '플라스틱',
    electricityLabel: '전기',
    machineLabel: '기계',
    laborLabel: '인건비',
    proTip: 'ABS 출력을 위해 베드를 100°C로 가열하면 PLA에 비해 전기세가 두 배나 들 수 있다는 사실을 알고 계셨나요? 실패율도 잊지 마세요. 10%의 출력물이 실패한다면, 실제 비용은 10% 더 높게 측정해야 합니다.',
  },
  seo: [
    {
      type: 'title',
      text: '3D 프린팅의 실제 비용 계산: 필라멘트 그 이상을 고려하기',
      level: 1,
    },
    {
      type: 'paragraph',
      html: '적층 제조의 세계에 처음 발を 들여놓으면, 유일한 비용은 노즐에서 나오는 플라스틱뿐이라고 생각하기 쉽습니다. 하지만 이를 비즈니스화하거나 단순히 취미를 더 효율적으로 관리하고 싶다면, 첫눈에는 보이지 않는 세부 사항에 <strong>수익성</strong>이 숨어 있다는 점을 이해해야 합니다.',
    },
    {
      type: 'title',
      text: '3D 프린팅 비용의 4가지 기둥',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '저희 계산기는 최종 가격을 네 가지 핵심 영역으로 세분화합니다.',
    },
    {
      type: 'summary',
      items: [
        '재료와 손실: 부품의 무게뿐만 아니라 서포트, 스커트, 퍼지에 사용되는 플라스틱도 포함됩니다. 출력 실패 가능성에 대비해 항상 5-10%의 마진을 추가하는 것이 좋습니다.',
        '전력 소비: 3D 프린터는 PLA(베드 60°C)를 출력할 때와 ABS 또는 나일론(베드 100°C 이상)을 출력할 때 소모되는 전력이 다릅니다. 큰 출력물의 경우 kWh당 가격이 큰 차이를 만들 수 있습니다.',
        '기계 감가상각: 프린터가 가동되는 매 시간마다 벨트, 팬, 노즐과 같은 부품이 마모됩니다. 시간당 소액의 비용을 포함하면 미래의 수리 비용을 미리 준비할 수 있습니다.',
        '인건비: 당신의 시간은 가장 가치 있는 자산입니다. 파일 준비, 베드 청소, 후가공 과정의 시간도 반드시 비용에 산정해야 합니다.',
      ],
    },
    {
      type: 'title',
      text: '감가상각비는 어떻게 계산하나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '간단한 방법은 프린터 구매 가격을 예상 사용 가능 시간(시간)으로 나누는 것입니다. 예를 들어, 프린터 가격이 40만원이고 큰 수리 없이 최소 2,000시간을 작동할 것으로 기대한다면, 시간당 감가상각비는 <strong>약 200원</strong>입니다.',
    },
    {
      type: 'tip',
      title: '전기세 절약 팁',
      html: '<p>출력을 많이 하신다면 프린터용 챔버(enclosure)를 사용하는 것을 고려해 보세요. 이는 기술적인 재료를 출력하는 데 도움이 될 뿐만 아니라, 열을 보존하여 히팅 베드가 온도를 유지하기 위해 사용하는 에너지를 크게 줄여줍니다.</p>',
    },
    {
      type: 'title',
      text: '판매 가격 전략',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '기본 비용을 파악했다면 마진을 결정해야 합니다. 주문형 3D 프린팅 서비스에서, 예상치 못한 실패 리스크를 감수하고 상업적 수익을 내기 위해 전체 비용의 50-100% 마진을 붙이는 것이 일반적입니다. 부품에 수작업 샌딩이나 도색 작업이 많이 필요하다면 마진을 더 높게 책정해야 합니다.',
    },
    {
      type: 'summary',
      items: [
        '시간 기준 가격: 순수한 출력 대행 서비스에 적합합니다.',
        '무게(그램) 기준 가격: 대량으로 생산되는 단순한 부품에 흔히 사용됩니다.',
        '가치 기준 가격: 디자인이 독창적이라면 가격은 단순 비용이 아니라 고객이 지불할 용의가 있는 가치에 따라야 합니다.',
      ],
    },
  ],
  faqTitle: '3D 출력 비용에 대한 자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 문헌 및 리소스',
  bibliography: [
    {
      name: 'PrusaPrinters: 3D 프린팅 비용 계산하기',
      url: 'https://blog.prusa3d.com/es/calculadora-precio-impresion-3d_38905/',
    },
    {
      name: 'Simplify3D: 재료 및 비용 추정',
      url: 'https://forum.simplify3d.com/viewtopic.php?t=11758',
    },
    {
      name: '3DHubs: 적층 제조 비용 가이드',
      url: 'https://www.hubs.com/knowledge-base/cost-3d-printing/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
