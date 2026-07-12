import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TechnicalResinUvCuringUI } from '../ui';

const slug = 'calculadora-tempo-curacao-uv-resina-tecnica';
const title = 'Calculadora de Tempo de Cura UV para Resina Técnica';
const description = 'Estime o tempo seguro de pós-cura de resina SLA com base no tipo de resina, espessura máxima da parede, potência da estação de lavagem e cura e comprimento de onda UV.';

const faqData = [
  { question: 'Quanto tempo devo curar as impressões de resina SLA?', answer: 'O tempo correto depende do tipo de resina, espessura da parede, potência da estação de cura, comprimento de onda e geometria de exposição. Peças pequenas de resina padrão podem precisar de apenas alguns minutos, enquanto peças grossas de resina resistente precisam de mais tempo, mas devem respeitar um limite de segurança.' },
  { question: 'O excesso de cura UV pode tornar a resina quebradiça?', answer: 'Sim. A exposição excessiva aos UV pode tornar muitas peças de resina fotopolímero quebradiças, amareladas ou menos flexíveis. A calculadora limita o tempo quando a estimativa bruta entra em uma região de degradação.' },
  { question: 'As impressões de resina devem estar secas antes da cura?', answer: 'Sim. As impressões de resina devem estar limpas e completamente secas antes da cura UV. Resíduos de álcool podem causar branqueamento, contaminação retida e resultados inconsistentes de pós-cura.' },
  { question: '385 nm ou 405 nm é melhor para cura de resina?', answer: 'Nenhum é universalmente melhor. O melhor comprimento de onda é aquele que corresponde ao sistema fotoiniciador da resina e à estação de cura. Muitas resinas de desktop são otimizadas para 405 nm, enquanto algumas resinas técnicas respondem bem a 385 nm.' },
];

const howToData = [
  { name: 'Selecione o preset de resina', text: 'Escolha padrão, flexível, rígida/resistente, fundível ou queima de acordo com o frasco de resina ou uso pretendido.' },
  { name: 'Insira a parede mais espessa', text: 'Meça a espessura máxima da parede que deve receber a pós-cura UV.' },
  { name: 'Insira os parâmetros da estação', text: 'Defina a potência da estação de cura e o comprimento de onda para corresponder à sua câmara UV.' },
  { name: 'Siga a lista de verificação de segurança', text: 'Seque a peça, exponha cada face, remova os suportes que projetam sombras e respeite o valor máximo seguro do temporizador.' },
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
  inLanguage: 'pt',
};

const seoData = [
  { type: 'title', text: 'Como o Tempo de Pós-Cura de Resina SLA É Escolhido', level: 2 },
  {
    type: 'paragraph',
    html: 'A pós-cura é a exposição UV controlada aplicada após uma impressão de resina ter sido lavada. O objetivo não é simplesmente fazer a superfície parecer seca. Uma peça SLA ou MSLA corretamente curada atinge uma melhor conversão de grupos reativos dentro da rede polimérica, o que melhora a rigidez, resistência ao calor, estabilidade dimensional e segurança de manuseio. O sub-cura deixa superfícies pegajosas, fracas ou quimicamente ativas. O sobre-cura pode levar o material à fragilização, amarelamento visível e perda de alongamento. Um <strong>estimador de tempo de cura UV para resina SLA</strong> útil precisa equilibrar a química da resina, espessura da parede, intensidade da luz, comprimento de onda, temperatura e geometria de exposição.',
  },
  {
    type: 'paragraph',
    html: 'A calculadora usa predefinições de resina porque diferentes famílias de resina não respondem de forma idêntica. Uma resina de desktop padrão geralmente cura mais rápido que uma formulação flexível tipo uretano. A resina resistente ou rígida de engenharia geralmente precisa de exposição mais longa e às vezes calor suave para se aproximar das propriedades da ficha técnica. As resinas fundíveis e de queima são sensíveis porque o excesso de cura pode aumentar a fragilidade ou problemas relacionados às cinzas. O resultado é um valor de temporizador recomendado, um limite superior seguro, uma temperatura alvo opcional e uma distância prática da luz.',
  },
  {
    type: 'stats',
    columns: 4,
    items: [
      { value: '385/405 nm', label: 'comprimentos de onda comuns de cura de resina de desktop' },
      { value: '1-22 min', label: 'saída típica com limite de segurança da calculadora' },
      { value: '0,4-12 mm', label: 'faixa do modelo de espessura de parede' },
      { value: '6-120 W', label: 'faixa de potência da estação de cura' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'warning',
    title: 'Nunca cure impressões de resina molhadas',
    html: 'O álcool deixado na peça pode prender resíduos não curados, branquear superfícies, contaminar a câmara de cura e distorcer a relação entre a dose UV e o comportamento final do material. Lave primeiro, deixe a peça secar completamente, depois cure.',
  },
  { type: 'title', text: 'Por Que a Espessura da Parede Altera o Tempo de Cura UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Uma casca fina de miniatura e um suporte funcional grosso podem usar a mesma resina, mas precisam de comportamento de pós-cura diferente. A luz UV é absorvida e dispersada por pigmentos, cargas, fotoiniciadores e o próprio polímero. A superfície recebe a dose mais forte, enquanto o material mais profundo recebe menos energia. É por isso que a calculadora pergunta pela <strong>espessura máxima da parede</strong> em vez da altura total ou massa total. A seção opticamente relevante mais espessa é a parte com maior probabilidade de permanecer sub-curada quando o exterior já parece terminado.',
  },
  {
    type: 'paragraph',
    html: 'O aumento é proporcional, mas não perfeitamente linear. Dobrar a espessura da parede nem sempre requer exatamente o dobro do valor do temporizador porque a cura também continua de múltiplas faces quando a peça é girada e porque muitas impressões de resina são ocas. O modelo usa um expoente específico da resina: resinas resistentes escalam mais agressivamente com a espessura, enquanto perfis fundíveis permanecem sob um limite de segurança mais restrito. Para peças sólidas muito grossas, a melhor solução geralmente é o oco, drenagem, rotação e cura por etapas em vez de uma única exposição longa.',
  },
  {
    type: 'table',
    headers: ['Condição geométrica', 'Implicação de cura', 'Ação prática'],
    rows: [
      ['Casca cosmética fina', 'Baixa demanda de cura interna', 'Use o tempo calculado sem adicionar minutos extras.'],
      ['Ressalto ou saliência sólida grossa', 'Maior risco de núcleo sub-curado', 'Insira a espessura máxima local da parede, não a média da casca.'],
      ['Peça oca com orifícios de drenagem', 'A luz atinge o exterior; o interior pode permanecer sombreado', 'Cure o exterior primeiro, depois exponha o interior se a geometria permitir.'],
      ['Resina opaca ou escura', 'Menor penetração e mais dispersão', 'Mantenha-se próximo às instruções do fabricante e gire com mais frequência.'],
    ],
  },
  {
    type: 'tip',
    title: 'Meça a parede estrutural mais espessa',
    html: 'Para uma impressão de resina oca, use a casca mais espessa ou a nervura de reforço. Para uma peça sólida de engenharia, use a seção sólida mais espessa que deve atingir as propriedades mecânicas finais.',
  },
  { type: 'title', text: 'Potência da Estação, Distância e Dose UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Uma estação de lavagem e cura classificada em 40 W não entrega 40 W de energia UV útil em cada centímetro quadrado da peça. A potência nominal inclui perdas elétricas e ópticas, disposição dos LEDs, refletividade da câmara, cobertura do prato giratório e distância da fonte de luz. Ainda assim, a potência é um estimador útil: uma estação de alta potência geralmente precisa de um temporizador mais curto do que uma caixa de cura fraca tipo lâmpada de unhas. A calculadora aplica um fator de potência inverso para que o temporizador diminua à medida que a potência da estação aumenta.',
  },
  {
    type: 'paragraph',
    html: 'A distância importa porque a irradiância cai à medida que a peça se afasta dos LEDs, e porque o posicionamento muito próximo pode criar pontos quentes. Uma peça colocada muito perto de um banco de LEDs pode curar uma face agressivamente enquanto cantos ou superfícies rebaixadas permanecem moles. Uma peça colocada muito longe pode precisar de exposição mais longa, mas adicionar tempo pode sobre-curar as faces já iluminadas. É por isso que a saída inclui uma distância recomendada em centímetros ou polegadas. É um controle de geometria, não meramente um valor de conveniência.',
  },
  {
    type: 'comparative',
    columns: 3,
    items: [
      {
        title: 'Muito perto',
        description: 'Alta intensidade local cria dose desigual e estresse superficial.',
        points: ['Amarelamento em faces expostas', 'Detalhes finos quebradiços', 'Cavidades sombreadas permanecem sub-curadas'],
      },
      {
        title: 'Equilibrado',
        description: 'Distância moderada permite que a câmara e o prato giratório distribuam UV mais uniformemente.',
        highlight: true,
        points: ['Resultado mecânico mais limpo', 'Menos risco de pontos quentes', 'Melhor repetibilidade'],
      },
      {
        title: 'Muito longe',
        description: 'Baixa irradiância incentiva os usuários a compensar com tempo excessivo.',
        points: ['Ciclos longos', 'Cura inconsistente', 'Falsa confiança de superfícies secas'],
      },
    ],
  },
  {
    type: 'message',
    title: 'Gire quando a câmara não expuser todas as faces',
    html: 'Se uma peça tem reentrâncias profundas, rebaixos ou lados planos largos, divida a exposição em ciclos mais curtos e gire a peça. Uma dose uniforme geralmente é melhor do que uma cura estática longa.',
  },
  { type: 'title', text: '385 nm Versus 405 nm na Cura de Resina', level: 2 },
  {
    type: 'paragraph',
    html: 'A maioria das impressoras MSLA de consumo e estações de cura usa LEDs de 405 nm porque esse comprimento de onda corresponde a muitos sistemas fotoiniciadores de desktop e é eficiente para matrizes de LED acessíveis. Algumas resinas técnicas também respondem fortemente a 385 nm, um comprimento de onda mais curto mais próximo da faixa UV-A. A diferença não é automaticamente melhor ou pior. Uma resina formulada para 405 nm pode precisar de mais tempo sob 385 nm se o espectro não for correspondente; outra resina pode curar eficientemente a 385 nm. A calculadora trata o comprimento de onda como um multiplicador dependente da resina.',
  },
  {
    type: 'paragraph',
    html: 'A ação importante do usuário é a consistência. Se um fabricante de resina especificar um programa de pós-cura para uma unidade de cura, comprimento de onda e temperatura específicos, use esse programa como referência. Use esta calculadora quando a resina for genérica, quando a potência da estação diferir da máquina de referência, ou quando a geometria de impressão for mais espessa que um simples cupom de calibração. Não misture um programa industrial de 385 nm com uma estação desktop de 405 nm sem ajustar as suposições de exposição.',
  },
  {
    type: 'glossary',
    items: [
      { term: 'Fotoiniciador', definition: 'Componente da resina que absorve luz e inicia reações de polimerização.' },
      { term: 'Dose UV', definition: 'A energia luminosa acumulada recebida pela peça durante a cura, influenciada pela irradiância e pelo tempo.' },
      { term: 'Pós-cura', definition: 'Tratamento UV e às vezes térmico após a lavagem que melhora as propriedades do material além do estado impresso.' },
      { term: 'Sobre-cura', definition: 'Exposição excessiva que pode tornar uma peça de resina quebradiça, amarela, deformada ou menos resistente a impactos.' },
    ],
  },
  {
    type: 'diagnostic',
    variant: 'info',
    title: 'Seco ao toque não é o mesmo que completamente curado',
    html: 'Uma superfície de resina pode parar de parecer pegajosa antes que a rede interna atinja o comportamento mecânico pretendido. Use geometria, tipo de resina e potência da estação em vez da sensação superficial.',
  },
  { type: 'title', text: 'Predefinições de Resina e Risco Mecânico', level: 2 },
  {
    type: 'paragraph',
    html: 'As resinas padrão são geralmente otimizadas para facilidade de impressão e pós-processamento rápido. São a categoria mais indulgente na calculadora. As resinas flexíveis precisam de manuseio mais cuidadoso porque a propriedade desejada é o alongamento, não a dureza máxima. Muito UV pode reduzir a flexibilidade e transformar uma peça macia em algo que racha mais cedo. As resinas rígidas e resistentes geralmente precisam de mais dose para desenvolver resistência, mas também têm um limite superior onde a cura adicional não melhora mais o desempenho e em vez disso aumenta a fragilidade.',
  },
  {
    type: 'paragraph',
    html: 'As resinas fundíveis e de queima têm uma prioridade diferente. Seu uso final pode envolver fundição de investimento ou queima limpa, portanto a qualidade da superfície, o comportamento das cinzas e a estabilidade dimensional são importantes. Uma peça fundível muito sobre-curada pode se tornar frágil durante o manuseio ou ter desempenho ruim em etapas de processo posteriores. A calculadora aplica um limite mais restrito a essas categorias porque o fluxo de trabalho mais seguro é a cura controlada, não a exposição máxima.',
  },
  {
    type: 'table',
    headers: ['Predefinição de resina', 'Objetivo principal', 'Sintoma de sobre-cura', 'Comportamento da calculadora'],
    rows: [
      ['Padrão', 'Dureza geral e manuseio seguro', 'Amarelamento e detalhes finos quebradiços', 'Tempo base moderado e limite médio.'],
      ['Flexível', 'Manter alongamento enquanto remove pegajosidade', 'Perda de flexibilidade e rasgo', 'Tempo base mais longo com sensibilidade de dose cautelosa.'],
      ['Rígida / Resistente', 'Alcançar rigidez e resistência de engenharia', 'Fratura frágil em vez de falha resistente', 'Tempo base mais alto e cura quente opcional.'],
      ['Fundível', 'Manuseio limpo antes do fluxo de fundição', 'Padrões frágeis e escurecimento superficial', 'Limite de segurança mais baixo para evitar exposição agressiva.'],
      ['Queima', 'Cura controlada antes da queima térmica', 'Lascamento ou estresse dimensional', 'Tempo moderado com limite conservador.'],
    ],
  },
  {
    type: 'proscons',
    title: 'Adicionar minutos extras após a calculadora',
    items: [
      { pro: 'Pode ajudar se uma face ficou sombreada durante um ciclo curto.', con: 'Pode degradar faces já expostas quando a peça não foi girada.' },
      { pro: 'Pode reduzir a pegajosidade em peças muito grossas ou escuras.', con: 'Pode tornar resinas resistentes e flexíveis mais quebradiças.' },
      { pro: 'Útil como segundo ciclo curto após inspeção.', con: 'Inseguro como hábito de rotina sem verificar o limite de segurança.' },
    ],
  },
  { type: 'title', text: 'Temperatura Durante a Pós-Cura de Resina Técnica', level: 2 },
  {
    type: 'paragraph',
    html: 'Algumas resinas de engenharia especificam temperatura elevada de pós-cura porque o calor aumenta a mobilidade molecular e ajuda a rede polimérica a atingir suas propriedades pretendidas. A cura quente pode melhorar a temperatura de deflexão térmica, o módulo e a resistência final para materiais compatíveis. Não deve ser aplicada cegamente a todas as resinas. Uma miniatura impressa em resina padrão pode não precisar de calor algum, enquanto uma resina resistente de engenharia pode se beneficiar de 40-60 °C dependendo dos dados do fabricante. A calculadora portanto retorna temperatura ambiente para famílias de resina onde o calor não é assumido, e uma temperatura alvo modesta onde é útil.',
  },
  {
    type: 'paragraph',
    html: 'O controle de temperatura também é uma questão de segurança. Muito calor pode deformar seções finas, amolecer cicatrizes de suportes ou acelerar o amarelamento. Uma estação de lavagem e cura sem câmara aquecida não deve ser tratada como equivalente a um forno de laboratório. Se a ficha técnica da resina especificar um ciclo térmico preciso, essa ficha técnica prevalece. A calculadora é um estimador prático para fluxos de trabalho de desktop comuns, não um substituto para validação de processos médicos, odontológicos, aeroespaciais ou de fundição certificados.',
  },
  {
    type: 'card',
    title: 'Quando a saída diz temperatura ambiente',
    html: 'Temperatura ambiente significa que a calculadora não requer uma pós-cura aquecida para essa predefinição de resina. Não significa que a peça possa curar fria, molhada ou em uma oficina com correntes de ar. Mantenha a peça seca e deixe a resina atingir uma temperatura interna normal antes da exposição.',
  },
  {
    type: 'tip',
    title: 'Evite curar imediatamente após a remoção do IPA',
    html: 'Após a lavagem, deixe o álcool evaporar de furos, cavidades e texto em relevo. Dez a trinta minutos de secagem podem importar mais do que adicionar mais um minuto de UV.',
  },
  { type: 'title', text: 'Diagnóstico de Peças de Resina Sub-Curadas e Sobre-Curadas', level: 2 },
  {
    type: 'paragraph',
    html: 'Peças de resina sub-curadas geralmente mostram superfícies pegajosas, pequenas características fracas, odor persistente, bordas moles ou resíduos que transferem para luvas. Esses sintomas são mais comuns quando a peça não foi lavada completamente, foi curada molhada, tinha espessura de parede grande ou ficou na sombra dentro da câmara. Peças sobre-curadas mostram sintomas diferentes: falha frágil por ruptura, amarelamento, superfícies calcárias, bordas finas enroladas ou perda de flexibilidade. A solução depende do sintoma. Mais UV não é a resposta para todo problema de impressão de resina.',
  },
  {
    type: 'diagnostic',
    variant: 'error',
    title: 'Quebradiço e amarelo significa parar de adicionar exposição',
    html: 'Se uma peça já se tornou quebradiça ou visivelmente amarela, a cura extra não recuperará a tenacidade. Reimprima, reduza o valor do temporizador, melhore a rotação e respeite o limite.',
  },
  {
    type: 'summary',
    title: 'Ordem de solução de problemas',
    items: [
      'Confirme que a peça foi lavada e seca antes de curar.',
      'Verifique se os suportes ou a orientação do modelo criaram sombras UV.',
      'Insira a parede mais espessa, não o tamanho médio do modelo.',
      'Use o limite de segurança quando a estimativa bruta for muito longa.',
      'Gire peças complexas em vez de estender uma exposição estática.',
    ],
  },
  {
    type: 'table',
    headers: ['Sintoma', 'Causa provável', 'Correção'],
    rows: [
      ['Superfície pegajosa após a cura', 'Resina residual ou IPA, dose insuficiente ou face sombreada', 'Relave se contaminado, seque completamente, depois aplique um ciclo curto girado.'],
      ['Detalhes finos quebram facilmente', 'Sobre-cura ou resina inerentemente quebradiça', 'Reduza o temporizador e evite posicionamento próximo de LEDs.'],
      ['Um lado amarelo, outro mole', 'Exposição desigual da câmara', 'Aumente a distância e gire durante a cura.'],
      ['Resina flexível fica rígida', 'Dose muito alta para comportamento elastomérico', 'Use menos tempo e pare ao atingir manuseio não pegajoso.'],
    ],
  },
  { type: 'title', text: 'Como Usar Esta Calculadora de Tempo de Estação de Lavagem e Cura UV', level: 2 },
  {
    type: 'paragraph',
    html: 'Comece com a predefinição de resina mais próxima do rótulo do material. Se o frasco disser resistente, rígida, tipo ABS, engenharia ou alto impacto, use a predefinição rígida/resistente. Se for elástica, flexível ou tipo borracha, use flexível. Para fundição de investimento ou fluxos de trabalho sem cinzas, use fundível ou queima. Em seguida, meça a espessura máxima da parede. Insira a potência nominal da estação de cura e escolha 385 nm ou 405 nm de acordo com a documentação da estação ou da resina. O valor do temporizador de saída é o primeiro ciclo que você deve executar.',
  },
  {
    type: 'paragraph',
    html: 'Antes de pressionar iniciar, use a lista de verificação. A peça deve estar seca, visível de múltiplos ângulos e livre de estruturas de suporte que projetam sombras. Se o modelo for complexo, cure por parte do tempo recomendado, gire-o e termine o resto do ciclo. Se a calculadora avisar que o limite de segurança foi aplicado, não o substitua por uma exposição longa. O limite existe porque essa categoria de resina tem mais probabilidade de degradar do que melhorar além desse ponto.',
  },
  {
    type: 'list',
    items: [
      'Use as instruções do fabricante quando uma ficha técnica de resina der um ciclo de pós-cura validado.',
      'Use esta calculadora quando a potência da estação, o comprimento de onda ou a espessura da peça diferirem do fluxo de trabalho de referência.',
      'Não cure peças que cheiram fortemente a solvente ou tenham líquido preso nos orifícios de drenagem.',
      'Não assuma que luz mais forte é mais segura; pode criar sobre-cura local mais rápido.',
      'Registre tempos bem-sucedidos por resina, cor, espessura de parede e modelo de estação.',
    ],
  },
  {
    type: 'summary',
    title: 'Regra de pós cura segura',
    items: [
      'Limpe primeiro.',
      'Seque completamente.',
      'Cure dentro da janela calculada.',
      'Gire para cobertura.',
      'Pare antes que a resina se torne quebradiça, amarela ou deformada.',
    ],
  },
];

export const content: ToolLocaleContent<TechnicalResinUvCuringUI> = {
  slug, title, description,
  ui: {
    controlsAriaLabel: 'Controles de entrada de cura UV de resina técnica',
    resultsAriaLabel: 'Parâmetros recomendados de pós-cura de resina',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    resinGroupLabel: 'Predefinição de resina',
    stationGroupLabel: 'Estação de cura',
    preparationLabel: 'Antes da cura',
    resinTypeLabel: 'Tipo de resina',
    standardLabel: 'Padrão',
    flexibleLabel: 'Flexível',
    toughLabel: 'Rígida / Resistente',
    castableLabel: 'Fundível',
    burnoutLabel: 'Queima',
    wallThicknessLabel: 'Espessura máxima da parede',
    wallThicknessHelp: 'Use a parede ou casca sólida mais espessa que a luz UV deve atravessar para curar.',
    stationPowerLabel: 'Potência da estação',
    stationPowerHelp: 'Potência elétrica nominal da estação de cura ou conjunto de lâmpadas UV.',
    wavelengthLabel: 'Comprimento de onda',
    wavelength385Label: '385 nm',
    wavelength405Label: '405 nm',
    cleanDryReminder: 'A peça deve estar limpa e perfeitamente seca antes da exposição UV. Não cure peças que ainda contenham álcool.',
    dryCheckLabel: 'A peça está totalmente seca e livre de resíduos de álcool?',
    exposureCheckLabel: 'A peça está posicionada para que a luz alcance cada face?',
    supportsCheckLabel: 'A peça está livre de suportes que possam projetar sombras?',
    degradationWarning: 'O tempo de cura excessivo torna a peça quebradiça e amarela. Respeite os limites técnicos.',
    recommendedTimeLabel: 'Ajuste do temporizador',
    temperatureLabel: 'Temperatura de cura',
    noTemperatureLabel: 'Ambiente',
    ambientTemperatureNoteMetric: 'Cure à temperatura ambiente (18-25 °C). Nenhuma câmara aquecida é necessária para esta predefinição.',
    ambientTemperatureNoteImperial: 'Cure à temperatura ambiente (64-77 °F). Nenhuma câmara aquecida é necessária para esta predefinição.',
    distanceLabel: 'Distância da luz',
    maxSafeLabel: 'Limite de segurança',
    doseIndexLabel: 'Índice de dose UV',
    safetySafeLabel: 'Dentro da janela segura',
    safetyCautionLabel: 'Próximo ao limite superior',
    safetyLimitLabel: 'Limite de segurança aplicado',
    limitMessage: 'A exposição solicitada excederia o limite de segurança da resina. Use o valor do temporizador limitado e gire a peça entre os ciclos se houver faces sombreadas.',
    cautionMessage: 'A recomendação é tecnicamente utilizável, mas próxima à região de degradação. Mantenha a peça seca, gire-a e evite adicionar minutos extras por hábito.',
    safeMessage: 'A recomendação está dentro da janela normal de pós-cura para este perfil de resina e potência de estação.',
    timerUnit: 'min',
    mmUnit: 'mm',
    inchUnit: 'in',
    cmUnit: 'cm',
    inUnit: 'in',
    wattUnit: 'W',
    celsiusUnit: '°C',
    fahrenheitUnit: '°F',
  },
  seo: seoData,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
