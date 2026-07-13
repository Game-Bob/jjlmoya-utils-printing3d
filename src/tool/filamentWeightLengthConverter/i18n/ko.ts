import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'filament-weight-to-length-converter';
const title = '필라멘트 무게→길이 변환기: 정확한 소재 수량 산정';
const description = '필라멘트 그램을 재질 밀도, 1.75mm 또는 2.85mm 직경을 기반으로 미터와 부피로 변환하고 스풀 사용 가능 여부를 즉시 확인합니다.';

const faqData = [
  {
    question: '필라멘트 그램을 미터로 어떻게 변환하나요?',
    answer: '질량을 재질 밀도로 나누어 부피를 구한 뒤, 그 부피를 세제곱센티미터에서 세제곱밀리미터로 변환합니다. 그런 다음 필라멘트 직경의 원형 단면적으로 나누면 길이가 산출됩니다.',
  },
  {
    question: '필라멘트 재질 밀도가 왜 중요한가요?',
    answer: 'PLA, PETG, ABS, TPU, 혼합 필라멘트 등 동일한 무게라도 폴리머마다 밀도가 달라 부피가 다릅니다. 길이는 부피를 필라멘트 단면적으로 나눈 값이므로 밀도가 미터 추정치에 직접적인 영향을 줍니다.',
  },
  {
    question: '1.75mm 필라멘트는 항상 킬로그램당 같은 길이인가요?',
    answer: '아닙니다. 직경 공차, 재질 밀도, 첨가제, 수분 함량 모두 실제 길이를 변화시킵니다. 계산기는 공칭 직경과 밀도를 기준으로 계획용 추정치를 제공합니다.',
  },
  {
    question: '2.85mm 필라멘트에도 계산기를 사용할 수 있나요?',
    answer: '네. 2.85mm를 입력하거나 야드파운드 단위로 전환한 후 동등한 직경을 입력하면 됩니다. 단면적이 즉시 업데이트됩니다.',
  },
];

const howToData = [
  { name: '필라멘트 무게 입력', text: '슬라이서에서 산출된 소재량, 스풀에 남은 무게, 또는 변환하려는 그램 값을 입력하세요.' },
  { name: '재질 선택', text: 'PLA, PETG, ABS, TPU, Nylon, PC 또는 혼합 필라멘트를 선택하면 계산기가 올바른 밀도를 사용합니다.' },
  { name: '필라멘트 직경 설정', text: '1.75mm, 2.85mm 또는 실제 측정한 직경을 입력하면 특정 스풀에 맞는 길이 추정치를 얻을 수 있습니다.' },
  { name: '스풀 사용 가능 여부 확인', text: '남은 스풀 무게를 선택적으로 입력하여 소재가 충분한지, 정확히 얼마나 남거나 부족한지 확인하세요.' },
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

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: '단위',
    metricLabel: '미터법',
    imperialLabel: '야드파운드법',
    inputsTitle: '소재 재고 산정',
    materialLabel: '재질',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: '나일론 PA',
    materialPcLabel: '폴리카보네이트',
    materialWoodLabel: '목분 혼합 PLA',
    materialCarbonLabel: '탄소섬유 혼합',
    materialMetalLabel: '금속 혼합 PLA',
    densityLabel: '밀도',
    densityUnit: 'g/cm3',
    weightLabel: '필라멘트 무게',
    weightSliderLabel: '출력물 무게 슬라이더',
    diameterLabel: '필라멘트 직경',
    stockLabel: '스풀 잔여 무게',
    stockPlaceholder: '선택적 재고 확인',
    spoolStateLabel: '스풀 상태',
    spoolScaleLabel: '사용량 / 사용 가능 질량',
    cutLineLabel: '러너아웃 중단선',
    resultLengthLabel: '예상 필라멘트 길이',
    resultVolumeLabel: '폴리머 부피',
    resultAreaLabel: '단면적',
    resultGramsMeterLabel: '선밀도',
    enoughLabel: '스풀 충분함',
    shortLabel: '스풀 부족함',
    noStockLabel: '재고 확인 비활성화',
    surplusLabel: '여유분',
    missingLabel: '부족분',
    formulaLabel: '계산 과정',
    formulaText: '부피 = 질량 / 밀도 -> 길이 = 부피 / 단면적',
    linearMassMetricUnit: 'g/m',
    linearMassImperialUnit: 'oz/ft',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    metersUnit: 'm',
    feetUnit: 'ft',
    cm3Unit: 'cm3',
    in3Unit: 'in3',
    in2Unit: 'in2',
    mm2Unit: 'mm2',
    mmUnit: 'mm',
    inchUnit: 'in',
  },
  seo: [
    { type: 'title', text: '밀도 기반 필라멘트 그램-미터 변환기가 더 정확한 이유', level: 2 },
    { type: 'paragraph', html: '필라멘트 무게-길이 변환기는 그 뒷면의 소재 모델만큼 정확합니다. 일반적인 계산기는 모든 필라멘트 1kg이 동일한 부피를 차지한다고 가정하기 쉽지만, FFF 필라멘트는 질량 단위로 판매되는 반면 압출기는 원통형 필라멘트를 길이 단위로 소비합니다. 이 두 측정값을 연결하는 핵심이 바로 <strong>밀도</strong>입니다. 약 1.24 g/cm3의 PLA, 1.27 g/cm3 내외의 PETG, 1.04 g/cm3 근처의 ABS, 약 1.21 g/cm3의 TPU는 스풀 무게와 직경이 같더라도 같은 미터 수로 변환되지 않습니다.' },
    { type: 'paragraph', html: '계산은 질량에서 시작됩니다. 그램을 밀도로 나누면 부피가 세제곱센티미터 단위로 나옵니다. 이 부피는 필라멘트 직경이 보통 밀리미터로 측정되므로 세제곱밀리미터로 변환됩니다. 단면적은 원의 면적, 즉 파이에 반지름 제곱을 곱한 값입니다. 마지막으로 부피를 단면적으로 나누면 밀리미터 단위의 길이가 나오며, 이를 미터 또는 피트로 변환할 수 있습니다. 이 결과는 슬라이서가 산출한 소재량을 현재 스풀 재고로 출력할 수 있는지 확인할 수 있는 실용적인 추정치입니다.' },
    { type: 'stats', columns: 4, items: [
      { value: '1.24', label: '일반 PLA 밀도 (g/cm3)' },
      { value: '2.405', label: '공칭 1.75mm 필라멘트 단면적 (mm2)' },
      { value: '6.379', label: '공칭 2.85mm 필라멘트 단면적 (mm2)' },
      { value: '3개 입력값', label: '질량, 밀도, 직경이 변환을 결정' },
    ] },
    { type: 'table', headers: ['재질', '계획용 밀도', '이 수치가 중요한 이유'], rows: [
      ['PLA', '1.24 g/cm3', '데스크톱 프린팅의 일반적인 기준이자 프로토타입 제작의 좋은 베이스라인.'],
      ['PETG', '1.27 g/cm3', 'PLA보다 약간 밀도가 높아 동일 그램 대비 길이가 짧아짐.'],
      ['ABS', '1.04 g/cm3', '밀도가 낮아 동일 직경에서 PLA보다 그램당 더 긴 길이 확보.'],
      ['TPU', '1.21 g/cm3', '유연 필라멘트는 PLA에 가깝지만 별도 모델링할 가치가 있음.'],
      ['혼합 필라멘트', '변동 가능', '목분, 탄소섬유, 금속, 유리 첨가제가 기본 폴리머 대비 밀도를 크게 변화시킴.'],
    ] },
    { type: 'title', text: '필라멘트 재고 산정을 위한 정확한 변환 공식', level: 2 },
    { type: 'paragraph', html: '수학적 모델은 각 항이 물리적 의미를 가지도록 의도적으로 간결하게 구성했습니다. 단면적은 <code>π x (직경 / 2)^2</code>입니다. 부피는 <code>무게 / 밀도</code>입니다. 길이는 부피가 cm3이고 단면적이 mm2일 때 <code>부피 x 1000 / 단면적</code>이며 결과는 밀리미터 단위, 이후 1000으로 나누어 미터가 됩니다. 이는 슬라이서에서 압출량, 최대 유속, 소재 사용량을 계산할 때 사용하는 것과 동일한 기하학입니다.' },
    { type: 'diagnostic', variant: 'info', title: '직경 공차가 일상에서 가장 큰 불확실성 요인입니다', badge: '측정 참고사항', html: '공칭 1.75mm 스풀이 실제로 롤 전체에 걸쳐 정확히 1.75mm가 아닐 수 있습니다. 면적은 반지름 제곱에 의존하므로 작은 직경 차이가 계산된 길이와 실제 압출 부피를 변화시킵니다. 일반적인 재고 확인 용도로는 공칭 직경이 충분합니다. 캘리브레이션이 필요하다면 여러 지점을 캘리퍼스로 측정한 후 평균 직경을 입력하세요.' },
    { type: 'list', items: [
      'PrusaSlicer, Cura, Bambu Studio, OrcaSlicer 등 슬라이서에서 소재 사용량을 복사할 때는 그램 단위를 사용하세요.',
      '신뢰할 수 있는 충분성 확인을 위해 빈 스풀 무게를 뺀 실제 잔여 스풀 무게를 측정하세요.',
      '특수 복합소재를 출력할 때는 제조사 데이터시트의 밀도 값을 사용하세요.',
      '기기가 더 큰 필라멘트를 사용한다면 단면적이 크게 다르므로 1.75mm 대신 2.85mm를 사용하세요.',
    ] },
    { type: 'tip', title: '잔여 재고에 빈 스풀 무게를 포함하지 마세요', html: '저울 위의 스풀에는 플라스틱 또는 골판지 심지 무게가 포함됩니다. 빈 스풀이 180g이고 저울이 430g을 가리킨다면 사용 가능한 필라멘트는 250g으로 추정해야 합니다. 총 스풀 무게를 입력하면 녹색 충분 신호가 지나치게 낙관적으로 표시됩니다.' },
    { type: 'title', text: '같은 무게에서 1.75mm vs 2.85mm 필라멘트 길이 비교', level: 2 },
    { type: 'paragraph', html: '직경이 사용자 예상보다 훨씬 큰 영향을 미칩니다. 2.85mm 필라멘트는 1.75mm 필라멘트보다 단면적이 두 배 이상 크므로 1kg이 훨씬 적은 미터 수가 됩니다. 이것이 한쪽 직경이 본질적으로 더 경제적이라는 의미는 아닙니다. 두 경우 모두 동일한 부품 부피를 출력할 수 있습니다. 즉, 직경 맥락 없이는 재고 길이 수치를 비교할 수 없습니다. 슬라이서가 그램을 표시할 때는 이미 질량 기준으로 소재 사용량을 정규화한 것이고, 프린터 러너아웃 센서나 수동 스풀 추정이 미터 단위로 생각할 때는 직경이 핵심이 됩니다.' },
    { type: 'comparative', columns: 2, items: [
      { title: '1.75mm 필라멘트', description: '킬로그램당 더 긴 필라멘트 길이를 제공하며 현재 데스크톱 프린터의 주류 규격입니다.', points: ['컴팩트한 압출기에 적합', '같은 스풀 무게에서 더 많은 미터 확보', '공칭 단면적 약 2.405 mm2'] },
      { title: '2.85mm 필라멘트', description: '킬로그램당 필라멘트 길이는 짧지만 피드 단면적이 더 크며, 구형 또는 산업용 기기에서 자주 볼 수 있습니다.', points: ['공칭 단면적 약 6.379 mm2', '일부 구성에서 피더 압축에 덜 민감', '1.75mm 기준 가정을 사용하면 안 됨'] },
    ] },
    { type: 'table', headers: ['상황', '변화 요소', '계획 시 영향'], rows: [
      ['동일 폴리머, 직경 증가', '단면적 증가', '동일 그램 대비 미터 감소.'],
      ['동일 직경, 밀도 감소', '부피 증가', '동일 그램 대비 미터 증가.'],
      ['동일 그램, 혼합 필라멘트', '밀도 증가 가능', '예상보다 미터가 짧을 수 있음.'],
      ['흡습 필라멘트', '측정 질량 소폭 증가', '실제 건조 폴리머 양 대비 스풀이 더 무겁게 보일 수 있음.'],
    ] },
    { type: 'title', text: '긴 출력 시작 전 스풀 충분성 확인 활용 방법', level: 2 },
    { type: 'paragraph', html: '선택적 잔여 재고 필드는 변환기를 출력 가능 여부를 판단하는 대시보드로 바꿔줍니다. 작업에 필요한 소재량을 필라멘트 무게로 입력한 뒤, 현재 스풀에 남은 사용 가능한 필라멘트를 입력하세요. 출력 결과는 그램을 직접 비교할 뿐만 아니라 동일한 재질 및 직경 모델을 사용하여 그 차이를 미터 또는 피트로 변환해 보여줍니다. 녹색은 스풀에 충분한 재고가 있음을, 빨간색은 재료가 부족하며 정확한 차이를 표시합니다.' },
    { type: 'card', icon: 'mdi:traffic-light', title: '그램과 미터를 모두 표시하는 이유', html: '그램은 구매 및 슬라이서의 언어입니다. 미터는 일부 펌웨어 화면, 러너아웃 추정, 수동 스풀 계산에서 사용되는 필라멘트 길이 언어입니다. 둘 다 표시함으로써 흔한 계획 실수, 즉 한 밀도 가정에서는 충분한 길이가 확보되지만 실제 소재로는 질량이 부족한 상황을 방지합니다.' },
    { type: 'proscons', title: '재고 검증 방법', items: [
      { pro: '스풀 무게 측정은 빠르며 롤이 부분 사용된 상태에서도 유효합니다.', con: '빈 스풀 무게를 알고 있거나 추정해야 합니다.' },
      { pro: '슬라이서 그램 값은 일반적으로 소재 구매 무게와 일치합니다.', con: '슬라이서 추정치는 퍼지량, 서포터, 브림, 수정자 메시에 따라 달라질 수 있습니다.' },
      { pro: '길이는 필라멘트 경로 및 러너아웃 거리 비교 시 직관적입니다.', con: '길이는 밀도와 직경에 따라 변하므로 재질에 걸쳐 보편적이지 않습니다.' },
      { pro: '밀도 기반 변환은 PLA, PETG, ABS, TPU 및 복합소재를 더 잘 처리합니다.', con: '제조사별 첨가제에 따라 사용자 정의 밀도 값이 필요할 수 있습니다.' },
    ] },
    { type: 'title', text: '복합소재 및 특수 필라멘트에는 맞춤 밀도 값이 필요합니다', level: 2 },
    { type: 'paragraph', html: '혼합 필라멘트가 진지한 소재 산정 도구가 밀도를 숨기지 않고 공개해야 하는 주된 이유입니다. 목분 혼합 PLA, 탄소섬유 나일론, 금속 혼합 PLA, 야광 필라멘트, 유리 충전 엔지니어링 소재, 세라믹 계열 혼합물은 기본 폴리머와 크게 달라질 수 있습니다. 금속 혼합 필라멘트는 밀도가 높아 무겁게 느껴질 수 있습니다. 동일한 500g이라도 표준 PLA보다 부피와 길이가 훨씬 작을 수 있습니다. 고가의 엔지니어링 출력물에서 이 차이는 이론에 그치지 않습니다. 출력의 마지막 10%가 성공적으로 마무리될지 소진될지를 결정할 수 있습니다.' },
    { type: 'glossary', items: [
      { term: '밀도', definition: '단위 부피당 질량으로, 여기서는 세제곱센티미터당 그램(g/cm3)으로 표시됩니다.' },
      { term: '단면적', definition: '직경으로 계산된 필라멘트 가닥의 원형 면적.' },
      { term: '선밀도', definition: '선택한 재질과 직경에 대해 필라멘트 1미터 또는 1피트의 무게를 그램으로 나타낸 값.' },
      { term: '자체 무게(Tare)', definition: '저울 측정값에서 빼야 하는 빈 스풀의 무게.' },
      { term: '공칭 직경', definition: '실제 공차 측정 전의 광고된 필라멘트 크기, 보통 1.75mm 또는 2.85mm.' },
    ] },
    { type: 'message', title: '제조사 데이터가 최우선입니다', html: '스풀이나 기술 데이터시트에 밀도가 명시되어 있다면 그 값을 사용하세요. 일반 밀도 프리셋은 계획 수립에 유용하지만, 공급업체별 공식, 안료 함량, 강화재에 따라 수치가 달라질 수 있습니다.' },
    { type: 'title', text: '3D 프린팅 소재 산정 실전 예제', level: 2 },
    { type: 'paragraph', html: '슬라이서가 PETG 브래킷에 186g이 필요하다고 표시하고 부분 사용된 스풀이 있다고 가정해보겠습니다. 1.27 g/cm3 밀도의 PETG와 1.75mm 필라멘트는 대략 61미터로 변환됩니다. 자체 무게를 뺀 사용 가능 스풀 무게가 220g이라면 대시보드는 34g의 여유분을 표시하고 이를 약 11미터로 환산합니다. 이 여유분은 퍼지 라인과 작은 브림에는 충분할 수 있지만, 대형 서포터 실수에는 충분하지 않을 수 있습니다. 재고 확인 기능은 사용자가 출력물을 방치하기 전에 현실적인 버퍼를 추가하도록 유도합니다.' },
    { type: 'paragraph', html: '이제 ABS를 비교해보겠습니다. ABS는 PETG보다 밀도가 낮기 때문에 동일한 186g이 더 많은 부피, 따라서 동일한 1.75mm 직경에서 더 긴 길이가 됩니다. 이것이 ABS 부품이 본질적으로 더 저렴하다는 의미는 아닙니다(kg당 가격과 출력 설정도 중요하기 때문). 하지만 한 재질에서 복사한 잔여 미터 추정치가 다른 재질을 오도할 수 있는 이유를 설명해줍니다. 재고 관리 관점에서 질량은 안정적인 출발점이며, 밀도가 길이로 이어지는 다리가 되어줍니다.' },
    { type: 'summary', title: '신뢰할 수 있는 소재 계획 체크리스트', items: [
      '잔여 재고 입력 전 빈 스풀 무게를 차감하세요.',
      '혼합, 강화, 또는 프리미엄 필라멘트에는 실제 재질 밀도를 사용하세요.',
      '길이 수치를 신뢰하기 전에 기기가 1.75mm 또는 2.85mm 필라멘트를 사용하는지 확인하세요.',
      '퍼지, 서포터, 브림, 첫 레이어 실패, 슬라이서 프로필 변경을 대비한 여유분을 확보하세요.',
      '녹색 충분 상태는 막힘이나 러너아웃 센서 오류에 대한 보장이 아닌 계획 확인으로 간주하세요.',
    ] },
    { type: 'title', text: 'SEO 요약: 필라멘트 무게-길이 변환을 한 문장으로', level: 2 },
    { type: 'paragraph', html: '3D 프린터 필라멘트 무게를 길이로 변환하려면 그램 단위 무게를 재질 밀도로 나누어 부피를 구한 후 1000을 곱해 cm3를 mm3로 변환하고, <code>π x (직경 / 2)^2</code>로 나눈 다음, 다시 1000으로 나누어 미터로 읽으면 됩니다. 이 밀도 기반 방법은 PLA, PETG, ABS, TPU, 나일론, PC, 복합 필라멘트가 모두 다른 밀도 값을 가지므로 고정된 그램-미터 환산표보다 훨씬 정확합니다.' },
    { type: 'diagnostic', variant: 'success', title: '추정치가 가장 신뢰할 수 있는 경우', badge: '모범 사례', html: '슬라이서 무게가 최종 확정되고, 잔여 스풀 무게에서 자체 무게가 제거되었으며, 직경이 측정되었거나 알려져 있고, 밀도가 제조사 데이터에서 비롯된 경우 결과가 가장 강력합니다. 이러한 조건에서 변환기는 긴 출력, 생산 배치, 고가의 기술 폴리머를 위한 실질적인 사전 점검 도구가 됩니다.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
