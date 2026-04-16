import type { ToolLocaleContent } from '../../../types';
import type { FlowCalculatorUI } from '../ui';

export const content: ToolLocaleContent<FlowCalculatorUI> = {
  slug: 'volumetric-flow-calculator',
  title: '체적 유량(Volumetric Flow): 3D 프린터의 실제 속도 한계 이해하기',
  description: '3D 프린터의 최대 체적 유량을 계산합니다. 핫엔드의 실제 하드웨어 제한 사항을 확인하세요.',
  ui: {
    title: '체적 유량(Flow) 계산기',
    autoAdjust: '120% 자동 조절',
    configLabel: '구성',
    nozzleLabel: '노즐',
    lineWidthLabel: '라인 너비',
    layerHeightLabel: '레이어 높이',
    speedLabel: '속도',
    temperatureLabel: '온도',
    materialLabel: '재료',
    hotendLimitLabel: '핫엔드 한계',
    hotendTooltip: '재료나 온도를 고려하지 않은 하드웨어 자체의 기본 용융 용량입니다.',
    presetEnder: '표준 MK8/V6. 용융 존이 짧은 타입.',
    presetBambu: '고속 세라믹 핫엔드.',
    presetVolcano: '21mm 엑스트라 롱 용융 존.',
    presetHF: '커스텀 초고성능 익스트루더.',
    baseLimitLabel: '기본 한계',
    resetButton: '수치 재설정',
    volumetricFlowLabel: '실제 체적 유량',
    maxSpeedLabel: '최대 속도',
    statusLabel: '상태',
    safeStatus: '안전',
    stratifiedLabel: '계층별 성능',
    chartHeightLabel: '레이어 높이 (MM)',
    chartSpeedLabel: '속도 한계 (MM/S)',
    chartSafeLabel: '안전 범위',
    copyButton: '실제 한계값 복사',
  },
  seo: [
    {
      type: 'title',
      text: '체적 유량(Volumetric Flow): 3D 프린터의 실제 속도 한계 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'FDM 3D 프린팅에서 <strong>체적 유량</strong>은 하드웨어가 고장나기 전에 얼마나 빨리 출력할 수 있는지를 결정하는 요소입니다. 모터 속도가 인상적으로 보일 수 있지만, 실제로 중요한 것은 핫엔드가 플라스틱을 일관되게 녹일 수 있는 능력입니다.',
    },
    {
      type: 'title',
      text: '체적 유량(mm³/s)이란 무엇인가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '초당 압출되는 필라멘트의 총 부피를 말합니다. 출력 속도, 라인 너비, 레이어 높이의 세 가지 주요 변수를 곱하여 계산합니다. 히터 블록이 녹일 수 있는 양보다 더 많은 플라스틱을 압출하려고 하면, 흔히 말하는 <strong>압출 부족(underextrusion)</strong> 현상이 발생합니다.',
    },
  ],
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 자료',
  faq: [
    {
      question: '제 프린터의 최대 유량은 얼마인가요?',
      answer: '핫엔드의 종류에 전적으로 달려 있습니다. 표준 핫엔드(V6 타입)의 용융량은 보통 10~12 mm³/s 사이입니다. Volcano 또는 Revo High Flow와 같은 하이플로우 모델은 30~35 mm³/s에 도달합니다.',
    },
    {
      question: '왜 PETG는 PLA보다 유량이 느린가요?',
    answer: 'PETG는 녹았을 때 점도가 훨씬 높기 때문입니다. 이는 노즐을 통과할 때 더 많은 저항을 받는다는 것을 의미하므로, 같은 온도에서 실제 유량 한계는 보통 PLA보다 15% 정도 낮습니다.',
    },
    {
      question: '라인 너비가 유량에 어떤 영향을 주나요?',
      answer: '라인 너비는 레이어 높이와 함께 가장 직접적인 곱하기 계수입니다. 같은 속도에서 라인 너비를 0.4mm에서 0.6mm로 변경하면, 익스트루더에 50% 더 많은 유량을 요구하게 됩니다.',
    },
  ],
  bibliography: [
    {
      name: 'E3D-Online: 유량 및 속도 한계',
      url: 'https://e3d-online.com/pages/revo-high-flow-volumetric-flow-rate-calculator',
    },
    {
      name: 'OrcaSlicer Wiki: 캘리브레이션',
      url: 'https://github.com/OrcaSlicer/OrcaSlicer/wiki/Calibration',
    },
    {
      name: 'Bambu Lab: 유량 캘리브레이션',
      url: 'https://wiki.bambulab.com/en/software/bambu-studio/calibration_flow_rate',
    },
  ],
  howTo: [
    {
      name: '하드웨어 구성',
      text: '노즐 직경을 선택하고 인기 있는 핫엔드 사전 설정을 선택합니다.',
    },
    {
      name: '매개변수 조정',
      text: '라인 너비, 레이어 높이, 출력 속도 슬라이더를 움직입니다.',
    },
    {
      name: '값 복사',
      text: '최대 유량 값을 복사하여 슬라이서 설정에 사용합니다.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '제 프린터의 최대 유량은 얼마인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '핫엔드에 따라 다르지만 보통 표준 핫엔드는 10~12 mm³/s를 용융할 수 있습니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '체적 유량 계산기',
      description: '3D 프린터의 최대 체적 유량을 계산합니다.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '체적 유량 계산 방법',
      step: [
        {
          '@type': 'HowToStep',
          text: '하드웨어 구성',
        },
        {
          '@type': 'HowToStep',
          text: '매개변수 조정',
        },
      ],
    },
  ],
};
