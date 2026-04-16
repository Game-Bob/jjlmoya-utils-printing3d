import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ShrinkageCalculatorUI } from '../ui';

const slug = '3d-printing-shrinkage-calculator';
const title = '3D 수축률 계산기: 스케일 계수와 수축';
const description = '열 수축을 보정하고 정확한 치수를 얻기 위해 재료(ABS, 나일론, ASA)에 따라 3D 디자인을 얼마나 확대해야 하는지 계산합니다.';

const faqData = [
  {
    question: '왜 ABS가 PLA보다 더 많이 수축하나요?',
    answer: 'ABS는 비정질 폴리머로 압출 시 더 높은 온도가 필요합니다. 250°C에서 상온으로 냉각될 때 온도 차이가 더 크기 때문에 분자들이 PLA보다 더 강하게 결합하며 수축이 일어납니다.',
  },
  {
    question: '수동 보정은 언제 사용해야 하나요?',
    answer: '필라멘트 브랜드를 변경하거나 0.1mm 미만의 정밀한 기계적 공차가 필요할 때 사용해야 합니다. 수축 계수는 같은 브랜드라도 색상에 따라 다를 수 있습니다.',
  },
  {
    question: '채우기(infill) 비율이 수축에 영향을 주나요?',
    answer: '네. 채우기 밀도가 높을수록 냉각될 때 부품 중심부로 힘을 가하는 재료의 양이 많아집니다. 속이 빈 부품보다 꽉 찬 부품이 약간 더 수축하는 경향이 있습니다.',
  },
];

const howToData = [
  {
    name: '재료 선택',
    text: '사전 설정된 재료(ABS, ASA, 나일론 등) 중에서 선택하여 업계 표준 계수를 적용합니다.',
  },
  {
    name: '실제 부품으로 보정',
    text: '완벽한 정밀도가 필요하다면 100mm 큐브를 출력하여 냉각 후 측정하고 보정 모드에 데이터를 입력합니다.',
  },
  {
    name: '계수를 슬라이서에 복사',
    text: '결과로 나온 스케일 백분율을 복사하여 슬라이싱 소프트웨어(Cura, PrusaSlicer)의 해당 축에 적용합니다.',
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

export const content: ToolLocaleContent<ShrinkageCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    tabPresets: '재료 설정',
    tabCalibration: '수동 보정',
    labelDefaultMaterial: '기본 재료',
    labelEstimatedShrinkage: '예상 수축률',
    unitPercent: '%',
    labelDesignSize: '디자인 규격 (슬라이서)',
    labelRealSize: '출력물 측정값 (실제)',
    unitMm: 'mm',
    labelAxesCompensation: '축 보정',
    labelAxisXY: 'X/Y',
    labelAxisZ: 'Z',
    textZWarning: '* Z축은 레이어 간 접착력 때문에 보통 수축이 적게 일어납니다.',
    labelRecommendationTitle: '기술 권장 사항',
    labelResultSlicerScale: '스케일 백분율 (슬라이서용)',
    labelResultFactor: '배율 계수',
    btnCopy: '백분율 복사',
    btnCopied: '복사 완료!',
    recommendations: {
      'ABS': '수축으로 인한 추가적인 휨(warping)을 최소화하기 위해 챔버 온도를 최소 40°C로 유지하는 것이 좋습니다.',
      'ASA': '우수한 내자외선성을 가집니다. 구조적 접착력을 높이기 위해 레이어 쿨링 팬 속도를 줄이세요.',
      'Nylon': '흡습성이 매우 강한 재료입니다. 기포 방지를 위해 출력 전 80°C에서 6-8시간 건조하세요.',
      'PETG': '수축이 적은 편입니다. 밀도가 높은 부품에서 과압출이 발생하면 압출량(flow)을 95-98%로 조정하세요.',
      'PLA': '수축이 거의 없습니다. 미세한 디테일을 위해 충분한 공기 흐름(팬 100%)을 확보하세요.'
    }
  },
  seo: [
    {
      type: 'title',
      text: '3D 프린팅 수축률 계산기: 정밀한 치수 정확도 확보',
      level: 1,
    },
    {
      type: 'paragraph',
      html: '<strong>3D 프린팅</strong>을 즐기다 보면 이런 문제에 직면할 때가 있습니다. 완벽한 치수(예: 20x20x20 mm 큐브)로 디자인하고 출력했는데, 디지털 캘리퍼스로 측정해 보니 19.7 mm가 나오는 경우입니다. 왜 이런 일이 생길까요? 정답은 <strong>재료의 수축</strong>입니다.',
    },
    {
      type: 'paragraph',
      html: '수축은 열가소성 수지가 용융 상태(고온)에서 상온의 고체 상태로 변할 때 발생하는 피할 수 없는 물리적 현상입니다. 냉각되면서 분자들이 재정렬되고 "수축"되어 부품의 전체 부피가 줄어들게 됩니다. 저희 <strong>수축률 계산기</strong>는 이러한 변화를 예측하고 슬라이서의 스케일을 조정하여 첫 번째 출력부터 완벽하게 맞도록 도와줍니다.',
    },
    {
      type: 'title',
      text: '왜 플라스틱은 수축할까요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FDM(압출 적층 방식) 프린팅에서는 뜨거운 플라스틱(200°C~300°C)을 레이어별로 쌓아 올립니다. 재료이 냉각되면서 <strong>열팽창 계수</strong> 현상을 겪게 됩니다. 기본적으로 열에너지는 분자들을 서로 떨어뜨려 유지시키는데, 그 에너지가 사라지면 분자 간 힘이 작용하여 분자들이 서로 가까워집니다.',
    },
    {
      type: 'paragraph',
      html: '모든 재료가 똑같이 반응하지는 않습니다. 비정질 플라스틱(PLA 등)은 무질서한 구조를 가져 수축이 적은 편입니다. 반면, 결정화되기 쉽거나 매우 높은 온도가 필요한 플라스틱(ABS 또는 나일론 등)은 훨씬 더 공격적이고 제어하기 어려운 수축률을 보입니다.',
    },
    {
      type: 'title',
      text: '일반적인 재료 및 수축 범위',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'ABS (아크릴로니트릴 부타디엔 스티렌): 0.8% – 2.0%. 높은 수축률 때문에 가장 다루기 어려운 재료 중 하나이며, 종종 "워핑(warping, 모서리 들림)" 현상을 일으킵니다.',
        'ASA: 0.5% – 0.9%. 자외선에 강한 ABS 대체재로 수축률이 다소 억제되어 있습니다.',
        '나일론 (PA): 0.7% – 2.5%. 탄소 섬유 또는 유리 섬유 포함 여부에 따라 수축률이 급격히 변할 수 있습니다.',
        'PETG: 0.2% – 0.5%. 치수 안정성이 매우 뛰어나 ABS의 내열성까지는 필요 없는 기계 부품에 이상적입니다.',
        'PLA: 0.1% – 0.3%. 사용 편의성의 표준이며, 대부분의 용도에서 수축률이 거의 무시할 수 있는 수준입니다.',
      ],
    },
    {
      type: 'title',
      text: '스케일 계수 계산 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '많은 사용자들이 단순히 "백분율을 더하는 것"(2%가 작으면 스케일을 102%로 설정)으로 실수합니다. 하지만 수학적으로 손실을 보충하기 위한 스케일은 약간 다릅니다. 저희 계산기가 사용하는 정확한 공식은 다음과 같습니다: <br><strong>스케일 계수 = 1 / (1 - S)</strong>',
    },
    {
      type: 'paragraph',
      html: '여기서 <strong>S</strong>는 소수로 표현된 수축률입니다(예: 2%는 0.02). 예를 들어, 2% 수축하는 재료의 경우 스케일 계수는 1.0204이며, 이는 슬라이서(Cura, PrusaSlicer, Bambu Studio)에서 스케일을 <strong>102.04%</strong>로 설정해야 함을 의미합니다.',
    },
    {
      type: 'title',
      text: '수동 보정: 디자인 치수 vs 실제 측정값',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '역 보정 과정은 간단합니다. 규격 치수를 아는 테스트 물체(예: 100mm 보정 큐브)를 출력합니다. 완전히 식을 때까지 기다린 후(최소 30분 대기 권장), 디지털 캘리퍼스로 부품을 측정합니다. 계산기에 두 값을 입력하면 해당 필라멘트 롤에 대한 정확한 조정 백분율을 알려줍니다.',
    },
    {
      type: 'title',
      text: '불균일한 수축: X, Y, Z축의 문제',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '3D 프린팅에서 모든 방향의 물리 현상이 동일하지는 않습니다. 레이어를 차례로 쌓아 올리기 때문에 Z축 방향의 <strong>레이어 간 접착력</strong>이 일반적으로 수직 수축을 제한합니다. 보통 높이(Z축)보다는 수평 평면(X와 Y축)의 치수가 더 많은 보정을 필요로 한다는 것을 알게 될 것입니다.',
    },
    {
      type: 'tip',
      title: '전문가 팁',
      html: '<p>나일론이나 엔지니어링 소재로 작업할 때는 항상 출력 24시간 후에 측정하세요. 일부 플라스틱은 주변 습기를 흡수하여 냉각 후 약간 "부풀어" 오를 수 있으며, 이는 최종 측정값에 영향을 줍니다.</p>',
    },
    {
      type: 'title',
      text: '최종 정확도에 영향을 미치는 요인들',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '노즐 온도: 온도가 높을수록 재료이 더 팽창된 상태로 공급되지만, 보통은 더 급격한 냉각을 겪게 됩니다.',
        '베드 온도: 뜨거운 베드는 부품의 바닥 부분이 윗부분보다 빠르게 수축하는 것을 방지하여 휨 현상을 줄여줍니다.',
        '채우기 밀도: 밀도가 매우 높은 부품은 중심을 향해 내부 수축력을 가하는 플라스틱 질량이 더 많습니다.',
        '레이어 팬: ABS와 같은 재료에서 팬을 너무 강하게 돌리면 균열이 생기고 불규칙하며 과도한 수축이 발생할 수 있습니다.',
      ],
    },
  ],
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    {
      name: 'Simplify3D: 치수 정확도 및 수축',
      url: 'https://www.simplify3d.com/resources/print-quality-troubleshooting/dimensional-accuracy/',
    },
    {
      name: 'Prusa Research: 재료 표 및 수축 계수',
      url: 'https://help.prusa3d.com/materials',
    },
    {
      name: 'MatterHackers: 3D 프린팅 재료 수축 이해하기',
      url: 'https://www.matterhackers.com/articles/how-to-fix-shrinkage-and-warping',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
