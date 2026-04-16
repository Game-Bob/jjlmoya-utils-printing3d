import type { ToolLocaleContent } from '../../../types';
import type { ResinCuringCalculatorUI } from '../ui';

export const content: ToolLocaleContent<ResinCuringCalculatorUI> = {
  slug: 'uv-resin-curing-calculator',
  title: 'UV 레진 경화 시간 계산기',
  description: '레진 3D 출력물의 정확한 경화 시간을 결정하세요. 램프 출력(W), 레진 종류 및 거리에 따라 전문가용 기술 가이드를 제공합니다.',
  ui: {
    title: 'UV 레진 경화 계산기',
    configLabel: '구성 설정',
    brandLabel: '장비 브랜드',
    powerLabel: '램프 출력 (W)',
    powerUnit: 'W',
    distanceLabel: 'LED 거리 (cm)',
    distanceUnit: 'cm',
    materialLabel: '재료 종류',
    weightLabel: '예상 무게 (g)',
    weightUnit: 'g',
    ipaCheckbox: '이소프로필 알코올(IPA)로 세척했습니까?',
    safetyLabel: 'UV 안전 정보',
    safetySunglasses: '인증받은 UV 차단 고글',
    safetyGloves: '니트릴 장갑',
    sunglassesTooltip: '405nm의 빛에 직접 노출되면 망막에 영구적인 손상을 줄 수 있습니다.',
    glovesTooltip: '준경화 상태의 레진은 매우 자극적입니다. 반드시 보호구를 착용하세요.',
    wavelength: '파장',
    wavelengthValue: '405 nm',
    statusLabel: '상태',
    modeLabel: '모드',
    modeValue: '산업용',
    curingTime: '분:초',
    startButton: '경화 주기 시작/중지',
    intensityChart: 'UV 강도(선량)',
    nearLabel: '근거리 (2cm)',
    farLabel: '원거리 (30cm)',
    theoreticalLabel: '이론적 선량',
    yourConfigLabel: '현재 구성',
    evaporateWarning: '흰색 반점을 방지하기 위해 알코올을 완전히 증발시키세요 (최소 10분).',
    safeDistance: '고른 경화를 위한 안전한 거리가 감지되었습니다.',
    riskDistance: '열 변형 위험 (임계 거리).',
    optimeStatus: '최적',
    longStatus: '길음',
    fastStatus: '빠름',
  },
  seo: [
    {
      type: 'title',
      text: 'UV 레진 경화 시간 계산기: 전문가 가이드',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '레진 3D 프린팅(SLA, DLP 또는 LCD)에서 <strong>UV 경화는 필수적인 마지막 단계</strong>입니다. 부드럽고 끈적거리는 출력물을 선언된 기계적 특성을 갖춘 견고한 물체로 변환시킵니다. 적절한 후경화 없이는 출력물이 구조적으로 취약하고 독성이 있으며 불안정한 상태로 남게 됩니다.',
    },
    {
      type: 'title',
      text: 'UV 레진 경화란 무엇인가요?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '레진 3D 프린터가 출력을 마친 직후의 상태를 기술적으로 <strong>"그린 스테이트(green state)"</strong>라고 부릅니다. 최종 형태는 갖추고 있지만 폴리머 분자 사슬이 완전히 가교되지 않은 상태입니다. UV 경화는 이 가교를 완료하여 끈적임을 없애고 경도, 강도 및 열 안정성을 향상시킵니다.',
    },
  ],
  faqTitle: '자주 묻는 질문',
  bibliographyTitle: '참고 자료',
  faq: [
    {
      question: 'UV 레진 경화는 얼마나 걸리나요?',
      answer: '램프 출력에 따라 다릅니다. 40W 경화기라면 중간 크기 부품의 경우 보통 2-4분 정도 소요되며, 저출력 DIY 램프는 최대 10분까지 필요할 수 있습니다.',
    },
    {
      question: '네일용 램프로 레진을 경화할 수 있나요?',
      answer: '램프 파장이 405nm를 커버한다면 가능은 하지만, 보통 출력이 낮아(6W-12W) 시간이 상당히 오래 걸리며 표면 경화가 제대로 되지 않을 위험이 있습니다.',
    },
    {
      question: '수중 경화(Water Curing)가 필요한가요?',
      answer: '필수는 아니지만 적극 권장(워터 큐어링)됩니다. 물은 산소 접촉을 차단하는데, 산소는 표면 중합을 억제하기 때문에 물 속에서 경화하면 끈적임이 훨씬 적어집니다.',
    },
    {
      question: '레진이 제대로 경화되었는지 어떻게 아나요?',
      answer: '만졌을 때 완전히 말라 있어야 하며(끈적이지 않음), "젖은" 광택이 사라지고 약간의 색상 변화가 있으며 액상 레진 특유의 강한 냄새가 나지 않아야 합니다.',
    },
    {
      question: '투명 레진이 왜 황변되나요?',
      answer: '과경화 또는 과도한 온도의 영향입니다. 저희 계산기의 "투명" 설정을 사용하여 경화 시간을 줄이고, LED에서 최소 5cm 이상의 거리를 유지하세요.',
    },
  ],
  bibliography: [
    {
      name: 'Formlabs - 레진 출력물 후경화',
      url: 'https://formlabs.com/blog/how-to-post-cure-3d-prints/',
    },
    {
      name: 'E3D-Online: UV 경화 과학',
      url: 'https://e3d-online.com/pages/resin-printing-guide',
    },
  ],
  howTo: [
    {
      name: '장비 구성',
      text: '사용 중인 UV 경화기 브랜드를 선택하고 와트(W) 단위로 출력을 조정하세요.',
    },
    {
      name: '물리적 매개변수 조정',
      text: 'LED와 부품 사이의 거리, 레진 종류 및 예상 무게를 지정하세요.',
    },
    {
      name: '경화 시작',
      text: '계산된 시간을 가이드로 사용하고 경화 과정 동안 부품의 상태를 확인하세요.',
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'UV 레진 경화는 얼마나 걸리나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '40W 경화기라면 보통 중간 크기 부품의 경우 2-4분이며, 저출력 램프는 최대 10분까지 소요됩니다.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'UV 레진 경화 시간 계산기',
      description: '램프 출력, 거리 및 재료 종류에 따라 레진 3D 출력물의 정확한 경화 시간을 결정하세요.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'UV 레진 경화 시간 계산 방법',
      step: [
        {
          '@type': 'HowToStep',
          text: '장비 구성',
        },
        {
          '@type': 'HowToStep',
          text: '물리적 매개변수 조정',
        },
      ],
    },
  ],
};
