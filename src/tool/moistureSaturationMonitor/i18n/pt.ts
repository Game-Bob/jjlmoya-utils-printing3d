import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MoistureSaturationMonitorUI } from '../ui';

const slug = 'estimador-desidratacao-filamento';
const title = 'Estimador de Desidratação de Filamento: Guia de Regeneração Térmica';
const description = 'Modela a saturação higroscópica do filamento com cinética de adsorção exponencial, exposição à humidade, tipo de polímero e temperatura da câmara de secagem.';

const faqData = [
  {
    question: 'Como é que o estimador de desidratação de filamento calcula a saturação de humidade?',
    answer: 'Utiliza um modelo de saturação exponencial: a absorção máxima do material multiplicada por um menos e elevado ao coeficiente cinético negativo vezes o tempo de exposição, sendo depois dimensionado pela humidade relativa ambiente.',
  },
  {
    question: 'Por que razão o nylon precisa de mais secagem do que o PLA?',
    answer: 'O nylon tem uma capacidade de humidade mais elevada e um coeficiente de adsorção mais rápido do que o PLA, pelo que atinge um teor de água prejudicial mais cedo sob a mesma humidade e tempo de exposição.',
  },
  {
    question: 'Uma temperatura de secagem mais alta significa sempre uma secagem mais segura?',
    answer: 'Não. Uma temperatura mais alta acelera a desidratação, mas cada polímero tem uma gama segura para a câmara. Exceder esta gama pode amolecer o filamento, deformar a bobine ou alterar o comportamento de impressão.',
  },
  {
    question: 'O que significa o indicador de risco de hidrólise?',
    answer: 'Compara o teor de água estimado com o limiar crítico do material e emite um aviso quando a humidade absorvida é suficientemente elevada para aumentar a formação de bolhas, stringing, camadas fracas ou danos nas cadeias poliméricas.',
  },
];

const howToData = [
  { name: 'Escolher o polímero', text: 'Selecione PLA, PETG, ABS, ASA, TPU, Nylon, PC ou PVA para que o modelo possa carregar a capacidade de equilíbrio e o coeficiente cinético corretos.' },
  { name: 'Introduzir a humidade de armazenamento', text: 'Defina a humidade relativa onde a bobine esteve exposta, utilizando a medição de humidade da sala, caixa ou oficina.' },
  { name: 'Definir o tempo de exposição', text: 'Insira quantos dias o filamento passou fora de uma caixa seca selada ou de um secador ativo.' },
  { name: 'Selecionar la temperatura de secagem', text: 'Utilize uma temperatura de câmara dentro da gama segura para o polímero e o material da bobine.' },
  { name: 'Iniciar o ciclo de secagem', text: 'Inicie o temporizador de secagem persistente e, em seguida, deixe que a visualização da câmara diminua gradualmente à medida que a carga de humidade estimada é removida.' },
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<MoistureSaturationMonitorUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    materialLabel: 'Polímero',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Policarbonato',
    materialPvaLabel: 'PVA suporte',
    humidityLabel: 'Humidade relativa',
    exposureLabel: 'Tempo de exposição',
    dryTempLabel: 'Câmara de secagem',
    spoolMassLabel: 'Massa da bobine',
    calculateLabel: 'Iniciar ciclo de secagem',
    pauseCycleLabel: 'Pausar ciclo',
    resumeCycleLabel: 'Retomar ciclo',
    resetCycleLabel: 'Reiniciar ciclo',
    saturationLabel: 'Teor de humidade',
    absorbedLabel: 'Água absorvida',
    dryingTimeLabel: 'Ciclo de secagem',
    remainingTimeLabel: 'Tempo restante',
    cycleProgressLabel: 'Progresso del ciclo',
    hydrolysisLabel: 'Risco de hidrólise',
    stableLabel: 'Estável',
    watchLabel: 'Zona de alerta',
    criticalLabel: 'Crítico',
    chamberReadyLabel: 'Câmara pronta',
    chamberRunningLabel: 'Ciclo de secagem a decorrer',
    chamberCompleteLabel: 'Humidade purgada',
    curveLabel: 'Curva de adsorção',
    kineticLabel: 'Cinética de saturação',
    equilibriumLabel: 'Aproximação exponencial à saturação de equilíbrio',
    daysUnit: 'dias',
    percentUnit: '%',
    gramsUnit: 'g',
    poundsUnit: 'lb',
    celsiusUnit: 'C',
    fahrenheitUnit: 'F',
    hoursUnit: 'h',
    minutesUnit: 'm',
    secondsUnit: 's',
    noValueLabel: '-',
  },
  seo: [
    { type: 'title', text: 'Compreender a cinética de adsorção: por que o Nylon não se comporta como o PLA', level: 2 },
    { type: 'paragraph', html: 'Um <strong>estimador sério do tempo de secagem do filamento 3D</strong> não pode tratar a humidade como uma linha reta. Os polímeros higroscópicos não absorvem a mesma percentagem de água todos os dias indefinidamente. Aproximam-se de um estado de equilíbrio: rápido ao início, mais lento perto da saturação, e fortemente dependente da humidade relativa ambiente. É por isso que uma bobine deixada a 70% de humidade relativa durante dois dias não está simplesmente metade húmida de uma bobine deixada por quatro dias. A primeira parte da exposição fornece frequentemente o ganho de humidade mais acentuado, especialmente em Nylon, TPU, PVA e outros materiais com grupos polares que atraem moléculas de água.' },
    { type: 'paragraph', html: 'Esta ferramenta modela o teor de humidade com <code>S_h = S_max x (1 - e^(-k x t)) x RH/100</code>. <code>S_max</code> é a capacidade de absorção em equilíbrio do polímero, <code>k</code> é a velocidade de adsorção, <code>t</code> é o tempo de exposição e <code>RH</code> dimensiona o resultado para o ambiente de armazenamento. O resultado não é um certificado laboratorial; é um modelo de planeamento de engenharia que explica por que a mesma oficina pode manter o PLA imprimível enquanto faz o Nylon chiar, borbulhar, fazer fios e perder a força de adesão entre camadas.' },
    { type: 'stats', columns: 4, items: [
      { value: '0.65%', label: 'Capacidade de equilíbrio planeada para PLA' },
      { value: '3.2%', label: 'Capacidade de equilíbrio planeada para Nylon PA' },
      { value: '5.8%', label: 'Capacidade de equilíbrio planeada para filamento de suporte PVA' },
      { value: 'RH ajustada', label: 'A humidade ambiente multiplica a curva de saturação' },
    ] },
    { type: 'diagnostic', variant: 'info', title: 'Os sintomas de humidade são sintomas do processo', badge: 'Dica de impressão', html: 'Estalidos, bolhas de vapor, mudanças de superfície satinada para áspera, stringing excessivo, paredes fracas e extrusão turva não são problemas aleatórios do laminador (slicer). Frequentemente indicam que a água está a evaporar rapidamente na zona de fusão ou que a hidrólise reduziu o comprimento da cadeia polimérica antes da deposição.' },

    { type: 'title', text: 'Como o modelo de saturação exponencial altera as decisões de secagem', level: 2 },
    { type: 'paragraph', html: 'Calculadoras lineares costumam pedir um material e retornar um número fixo de horas. Isso funciona para um lembrete rápido, mas oculta a verdadeira questão: quanta humidade o filamento realmente absorveu? Uma bobine armazenada numa caixa seca selada a 15% de humidade relativa durante três semanas pode necessitar de pouca ou nenhuma regeneração. O mesmo polímero deixado aberto numa garagem húmida durante um fim de semana pode precisar de um ciclo de câmara completo. O planeamento baseado na saturação liga a recomendação de secagem ao histórico de exposição, em vez de tratar todas as bobines como igualmente húmidas.' },
    { type: 'table', headers: ['Entrada', 'Significado físico', 'Efeito na estimativa'], rows: [
      ['Humidade relativa', 'Atividade da água em redor da bobine', 'Uma humidade relativa mais elevada eleva o objetivo de equilíbrio e a percentagem final absorvida.'],
      ['Tempo de exposição', 'Quanto tempo a difusão pôde progredir', 'Os primeiros dias são os mais importantes; la curva abranda à medida que se aproxima da saturação.'],
      ['Coeficiente do material', 'A rapidez com que um polímero se aproxima do equilíbrio', 'O Nylon e o PVA movem-se mais rapidamente do que o PLA ou o ASA.'],
      ['Temperatura de secagem', 'Energia térmica disponível para dessorção', 'Uma temperatura segura de câmara mais elevada encurta o ciclo estimado.'],
      ['Massa da bobine', 'Quantidade de polímero presente', 'A percentagem indica o estado do material; os gramas absorvidos escalam com a massa da bobine.'],
    ] },
    { type: 'tip', title: 'Estime o ambiente real, não a aplicação de meteorologia', html: 'Utilize a humidade dentro da caixa de armazenamento, compartimento da impressora, armário ou oficina onde o filamento esteve realmente guardado. A previsão meteorológica local pode diferir significativamente da humidade junto a uma impressora aquecida, numa prateleira de cave ou num recipiente selado com dessecante.' },
    { type: 'card', icon: 'mdi:chart-bell-curve', title: 'Por que a rotação abranda perto da saturação', html: 'O anel visual segue o mesmo comportamento exponencial da equação. Preenche-se rapidamente quando o polímero está seco porque o gradiente de humidade é forte. Perto do equilíbrio, o gradiente enfraquece, pelo que a velocidade aparente de enchimento abranda. Esse abrandamento é física pura, não um truque de animação.' },

    { type: 'title', text: 'Gamas da calculadora de desidratação de filamento por material', level: 2 },
    { type: 'paragraph', html: 'As recomendações de secagem devem respeitar o polímero e a bobine. O PLA pode amolecer ou deformar se sobreaquecido. O PETG tolera mais calor, mas ainda beneficia de um controlo conservador da câmara. O Nylon normalmente requer um ciclo mais quente e longo porque absorve mais água e retém-na mais agressivamente. O PVA é extremamente sensível à humidade e pode tornar-se impossível de imprimir se deixado exposto. O PC imprime frequentemente melhor após a secagem, mesmo quando não parece visivelmente húmido. O estimador utiliza estas diferenças para transformar uma <strong>calculadora de desidratação de filamento</strong> genérica num guia específico para cada material.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Resposta higroscópica baixa a moderada', description: 'PLA, ABS e ASA geralmente absorvem menos água e mais lentamente, mas ainda sofrem perda de qualidade após longa exposição à humidade.', points: ['Ciclos de secagem mais curtos', 'Humidade de equilíbrio inferior', 'Os sintomas podem surgir gradualmente'] },
      { title: 'Resposta higroscópica elevada', description: 'Nylon, TPU, PVA e alguns graus de PC exigem armazenamento mais ativo e regeneração mais disciplinada.', points: ['Maior massa de água absorvida', 'Saturação inicial mais rápida', 'Maior risco de bolhas e camadas fracas'] },
    ] },
    { type: 'table', headers: ['Material', 'Alvo típico da câmara', 'Nota de planeamento'], rows: [
      ['PLA', '40-55 C', 'Evite calor excessivo porque o PLA e alguns núcleos de bobines podem deformar-se.'],
      ['PETG', '55-70 C', 'Frequentemente melhora a consistência da superfície e reduz o stringing após várias horas.'],
      ['ABS / ASA', '65-85 C', 'Menor absorção do que o Nylon, mas beneficia do armazenamento a seco.'],
      ['TPU', '45-60 C', 'Graus flexíveis podem absorver humidade suficiente para espumar ou fazer fios.'],
      ['Nylon PA', '70-90 C', 'Geralmente necessita de secagem activa antes de impressões funcionais críticas.'],
      ['PVA', '40-55 C', 'Material de suporte muito sensível à humidade; guardar selado imediatamente.'],
    ] },
    { type: 'proscons', title: 'Tabela de secagem fixa vs monitor de saturação', items: [
      { pro: 'Uma tabela fixa é rápida quando apenas precisa de um ciclo padrão.', con: 'Não consegue distinguir uma bobine em caixa seca de uma bobine exposta ao ar húmido.' },
      { pro: 'O planeamento por saturação explica por que a exposição inicial pode ser severa.', con: 'Ainda depende de coeficientes de material aproximados e do histórico de armazenamento.' },
      { pro: 'Uma entrada de temperatura de secagem reflete a configuração real da câmara.', con: 'Não substitui os limites de segurança de temperatura fornecidos pelo fabricante del filamento.' },
      { pro: 'Gramas absorvidos tornam o resultado tangível para bobines cheias ou parciais.', con: 'A massa da bobine não revela se as espiras exteriores estão mais húmidas do que o núcleo.' },
    ] },

    { type: 'title', text: 'Risco de hidrólise: quando o filamento húmido se torna danificado', level: 2 },
    { type: 'paragraph', html: 'A humidade não afeta apenas a qualidade estética da impressão. Em temperaturas de extrusão, a água absorvida pode provocar hidrólise em polímeros suscetíveis. A hidrólise quebra cadeias moleculares, reduzindo a tenacidade, o alongamento e a fiabilidade da peça. O efeito é especialmente importante para materiais de engenharia utilizados em suportes, dispositivos de fixação, engrenagens e peças estruturais. Uma bobine húmida pode continuar a extrudir, mas a peça pode falhar prematuramente porque o polímero foi quimicamente degradado durante o processo.' },
    { type: 'glossary', items: [
      { term: 'Higroscopia', definition: 'A tendência de um material para atrair e reter água do ar circundante.' },
      { term: 'Humidade de equilíbrio', definition: 'O teor de humidade a que um polímero se aproxima após tempo suficiente a uma dada humidade.' },
      { term: 'Coeficiente de adsorção', definition: 'Um valor cinético simplificado que controla a velocidade de subida da curva de saturação.' },
      { term: 'Dessorção', definition: 'O processo inverso: a água que abandona o polímero durante a secagem aquecida.' },
      { term: 'Hidrólise', definition: 'Quebra química de cadeias causada pela água sob a ação do calor, relevante para vários polímeros de engenharia.' },
    ] },
    { type: 'diagnostic', variant: 'warning', title: 'Uma superfície seca não garante um núcleo seco', badge: 'Limite de difusão', html: 'O filamento seca de fora para dentro. Um sopro quente curto pode melhorar a superfície enquanto as espiras internas de uma bobine densa permanecem húmidas. Bobines grandes, laterais de cartão e filamento enrolado apertado podem abrandar a regeneração.' },
    { type: 'message', title: 'A regra visual', html: 'Quando o anel passa de azul limpo para um estado cinzento-azulado baço, a ferramenta marca a transição da gestão normal de humidade para uma zona de controlo de hidrólise. Esse é o ponto em que a secagem passa a ser parte do controlo de qualidade, e não apenas limpeza estética.' },

    { type: 'title', text: 'Construir um fluxo de trabalho de secagem de filamento fiável', level: 2 },
    { type: 'paragraph', html: 'Um guia prático de saturação de material higroscópico combina previsão com rotina. Meça a humidade de armazenamento, identifique as bobines com a data de abertura, guarde os polímeros sensíveis em caixas seladas, recarregue o dessecante antes de saturar e seque antes de impressões onde o desempenho mecânico seja importante. O melhor fluxo de trabalho evita ciclos repetidos de humedecimento e secagem, porque cada ciclo térmico desnecessário pode envelhecer o material, deformar bobines ou desperdiçar tempo de produção.' },
    { type: 'list', items: [
      'Seque Nylon, PVA, TPU e PC antes de impressões longas se o histórico de armazenamento for incerto.',
      'Mantenha também o PLA e o PETG selados; menor absorção não significa absorção zero.',
      'Utilize um termómetro independente dentro do secador, pois as temperaturas indicadas no visor podem ser otimistas.',
      'Alimente o filamento a partir de uma caixa seca durante impressões longas em salas húmidas.',
      'Substitua ou recarregue o dessecante quando as esferas indicadoras ou os sensores mostrarem a humidade a subir na caixa.',
      'Evite secar acima da temperatura de transição vítrea ou da gama de amolecimento do filamento e da bobine.',
    ] },
    { type: 'card', icon: 'mdi:air-filter', title: 'A câmara de secagem é um sistema de regeneração', html: 'A câmara deve fornecer calor estável, fluxo de ar e uma via de saída para a humidade. Aquecer uma caixa selada sem ventilação ou dessecante pode simplesmente mover a água do filamento para o ar da câmara e de volta novamente.' },
    { type: 'summary', title: 'Lista de verificação de interpretação prática', items: [
      'A percentagem de humidade descreve o estado do material; os gramas absorvidos descrevem a carga de água na bobine.',
      'A humidade elevada e os materiais rápidos criam uma saturação inicial acentuada.',
      'O tempo de secagem deve aumentar com la saturação e diminuir com uma temperatura de câmara segura.',
      'O risco de hidrólise é mais crítico para a extrusão a alta temperatura e peças funcionais.',
      'A ficha de dados do fabricante sobrepõe-se a qualquer estimativa teórica de secagem.'
    ] },

    { type: 'title', text: 'Resposta SEO: quanto tempo devo secar o filamento da impressora 3D?', level: 2 },
    { type: 'paragraph', html: 'O tempo correto de secagem depende do material, da exposição à humidade, da massa da bobine e da temperatura da câmara. O PLA pode necessitar apenas de algumas horas após exposição moderada, o PETG e o TPU precisam frequentemente de mais tempo, e o Nylon ou o PVA podem requerer um ciclo de regeneração substancial após armazenamento húmido. Um fluxo sólido de <strong>teor de humidade na impressão 3D</strong> estima primeiro a água absorvida, selecionando depois uma temperatura de secador segura e o tempo necessário para dessorção. Isto é mais fiável do que aplicar uma duração universal predefinida a todos os polímeros.', },
    { type: 'diagnostic', variant: 'success', title: 'Melhor caso de uso para este monitor', badge: 'Preflight de engenharia', html: 'Utilize o estimador antes de impressões críticas, lotes de produção, polímeros de engenharia dispendiosos ou qualquer trabalho em que uma falha de superfície, camada frágil ou peça pouco resistente custasse mais do que um ciclo de secagem.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
