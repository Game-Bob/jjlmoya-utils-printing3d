import { bibliography } from '../bibliography';
import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilamentWeightLengthConverterUI } from '../ui';

const slug = 'conversor-peso-comprimento-filamento';
const title = 'Conversor de Peso para Comprimento de Filamento: Estimativa Precisa de Material';
const description = 'Converta gramas de filamento em metros e volume com base na densidade do material, diâmetro de 1,75 mm ou 2,85 mm e uma verificação instantânea de suficiência do carretel.';

const faqData = [
  {
    question: 'Como converter gramas de filamento em metros?',
    answer: 'Divida a massa pela densidade do material para obter o volume, converta esse volume de centímetros cúbicos para milímetros cúbicos e depois divida pela área da secção circular do diâmetro do filamento.',
  },
  {
    question: 'Por que a densidade do material do filamento é importante?',
    answer: 'O mesmo peso de PLA, PETG, ABS, TPU ou filamento com carga ocupa um volume diferente porque cada polímero tem uma densidade diferente. O comprimento é o volume dividido pela área do filamento, portanto a densidade altera diretamente a estimativa em metros.',
  },
  {
    question: 'O filamento de 1,75 mm tem sempre o mesmo comprimento por quilograma?',
    answer: 'Não. A tolerância do diâmetro, a densidade do material, os aditivos e o teor de humidade alteram o comprimento real. A calculadora fornece uma estimativa de planeamento baseada no diâmetro nominal e na densidade.',
  },
  {
    question: 'Posso usar a calculadora para filamento de 2,85 mm?',
    answer: 'Sim. Insira 2,85 mm ou mude para unidades imperiais e insira o diâmetro equivalente. A área da secção é atualizada imediatamente.',
  },
];

const howToData = [
  { name: 'Insira a massa do filamento', text: 'Digite a quantidade de filamento exigida pelo fatiador, o peso restante num carretel ou qualquer valor em gramas que deseje converter.' },
  { name: 'Escolha o material', text: 'Selecione PLA, PETG, ABS, TPU, Nylon, PC ou uma mistura com carga para que a calculadora utilize a densidade correta.' },
  { name: 'Defina o diâmetro do filamento', text: 'Use 1,75 mm, 2,85 mm ou um diâmetro medido se quiser que a estimativa de comprimento reflita um carretel específico.' },
  { name: 'Verifique a suficiência do carretel', text: 'Opcionalmente, insira o peso restante do carretel para ver se tem material suficiente e o excedente ou a falta exatos.' },
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

export const content: ToolLocaleContent<FilamentWeightLengthConverterUI> = {
  slug,
  title,
  description,
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial',
    inputsTitle: 'Estimativa de material disponível',
    materialLabel: 'Material',
    materialPlaLabel: 'PLA',
    materialPetgLabel: 'PETG',
    materialAbsLabel: 'ABS',
    materialAsaLabel: 'ASA',
    materialTpuLabel: 'TPU',
    materialPaLabel: 'Nylon PA',
    materialPcLabel: 'Policarbonato',
    materialWoodLabel: 'PLA com carga de madeira',
    materialCarbonLabel: 'Mistura com fibra de carbono',
    materialMetalLabel: 'PLA com carga metálica',
    densityLabel: 'Densidade',
    densityUnit: 'g/cm3',
    weightLabel: 'Peso do filamento',
    weightSliderLabel: 'Controlo deslizante de peso de impressão',
    diameterLabel: 'Diâmetro do filamento',
    stockLabel: 'Peso restante do carretel',
    stockPlaceholder: 'Verificação opcional de stock',
    spoolStateLabel: 'Estado do carretel',
    spoolScaleLabel: 'Massa consumida / disponível',
    cutLineLabel: 'Linha de paragem por fim de filamento',
    resultLengthLabel: 'Comprimento estimado do filamento',
    resultVolumeLabel: 'Volume do polímero',
    resultAreaLabel: 'Área da secção',
    resultGramsMeterLabel: 'Massa linear',
    enoughLabel: 'Carretel suficiente',
    shortLabel: 'Carretel insuficiente',
    noStockLabel: 'Verificação de stock inativa',
    surplusLabel: 'Excedente',
    missingLabel: 'Falta',
    formulaLabel: 'Caminho do cálculo',
    formulaText: 'volume = massa / densidade -> comprimento = volume / área da secção',
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
    inchUnit: 'pol',
  },
  seo: [
    { type: 'title', text: 'Por que um conversor de gramas para metros de filamento baseado em densidade é mais preciso', level: 2 },
    { type: 'paragraph', html: 'Um conversor de peso para comprimento de filamento é tão bom quanto o modelo de material que o sustenta. Uma calculadora genérica muitas vezes assume que um quilograma de qualquer filamento ocupa o mesmo volume, mas o filamento FFF é vendido por massa enquanto a extrusora consome um fio cilíndrico por comprimento. A ponte entre essas duas medidas é a <strong>densidade</strong>. PLA a cerca de 1,24 g/cm3, PETG por volta de 1,27 g/cm3, ABS próximo de 1,04 g/cm3 e TPU em torno de 1,21 g/cm3 não se convertem no mesmo número de metros, mesmo quando o peso do carretel e o diâmetro são idênticos.' },
    { type: 'paragraph', html: 'O cálculo começa com a massa. A divisão dos gramas pela densidade devolve o volume em centímetros cúbicos. Esse volume é então convertido para milímetros cúbicos porque o diâmetro do filamento é normalmente medido em milímetros. A área da secção é a área de um círculo: pi multiplicado pelo raio ao quadrado. Por fim, o volume dividido pela área resulta num comprimento em milímetros, que pode ser convertido para metros ou pés. O resultado é uma estimativa prática para verificar se o material indicado por um fatiador pode ser impresso a partir do stock atualmente disponível num carretel.' },
    { type: 'stats', columns: 4, items: [
      { value: '1,24', label: 'Densidade típica do PLA em g/cm3' },
      { value: '2,405', label: 'Área em mm2 para filamento nominal de 1,75 mm' },
      { value: '6,379', label: 'Área em mm2 para filamento nominal de 2,85 mm' },
      { value: '3 entradas', label: 'Massa, densidade e diâmetro definem a conversão' },
    ] },
    { type: 'table', headers: ['Material', 'Densidade de planeamento', 'Por que o valor é importante'], rows: [
      ['PLA', '1,24 g/cm3', 'Referência comum para impressão de secretária e uma boa base para protótipos.'],
      ['PETG', '1,27 g/cm3', 'Ligeiramente mais denso que o PLA, portanto a mesma quantidade em gramas produz menos comprimento.'],
      ['ABS', '1,04 g/cm3', 'Densidade mais baixa significa mais comprimento por grama do que o PLA com o mesmo diâmetro.'],
      ['TPU', '1,21 g/cm3', 'Filamento flexível é próximo do PLA, mas ainda assim merece ser modelado separadamente.'],
      ['Misturas com carga', 'Variável', 'Aditivos de madeira, fibra de carbono, metal e vidro podem afastar a densidade da do polímero base.'],
    ] },
    { type: 'title', text: 'As fórmulas exatas de conversão para estimativa de stock de filamento', level: 2 },
    { type: 'paragraph', html: 'O modelo matemático é deliberadamente pequeno porque cada termo tem um significado físico. A área da secção é <code>pi x (diâmetro / 2)^2</code>. O volume é <code>peso / densidade</code>. O comprimento é <code>volume x 1000 / área da secção</code> quando o volume está em cm3 e a área da secção em mm2; o resultado é em milímetros, depois dividido por 1000 para obter metros. Esta é a mesma geometria usada para raciocinar sobre volume de extrusão, caudal máximo e uso de material nos fatiadores.' },
    { type: 'diagnostic', variant: 'info', title: 'A tolerância do diâmetro é a maior incerteza do dia a dia', badge: 'Nota de medição', html: 'Um carretel nominal de 1,75 mm pode não ter exatamente 1,75 mm ao longo de toda a bobina. Como a área depende do raio ao quadrado, uma pequena diferença no diâmetro altera o comprimento calculado e o volume real de extrusão. Para verificações normais de stock, o diâmetro nominal é suficiente. Para calibração, use um paquímetro em vários pontos e insira o diâmetro médio.' },
    { type: 'list', items: [
      'Use gramas ao copiar o uso de material de fatiadores como PrusaSlicer, Cura, Bambu Studio ou OrcaSlicer.',
      'Use o peso restante medido do carretel após subtrair a tara do carretel vazio se quiser uma verificação de suficiência fiável.',
      'Use a densidade da ficha técnica do fabricante ao imprimir compósitos especiais.',
      'Use 2,85 mm em vez de 1,75 mm quando a máquina alimentar filamento maior, porque a área da secção é drasticamente diferente.',
    ] },
    { type: 'tip', title: 'Não inclua a tara do carretel vazio no stock restante', html: 'Um carretel na balança inclui o peso do núcleo de plástico ou cartão. Se o carretel vazio pesa 180 g e a balança marca 430 g, a estimativa de filamento utilizável deve ser 250 g. Inserir o peso bruto do carretel torna o sinal verde de suficiência demasiado otimista.' },
    { type: 'title', text: 'Comprimento do filamento de 1,75 mm vs 2,85 mm a partir do mesmo peso', level: 2 },
    { type: 'paragraph', html: 'O diâmetro tem um impacto maior do que muitos utilizadores esperam. Um fio de 2,85 mm tem mais do dobro da área da secção de um fio de 1,75 mm, portanto um quilograma resulta em muito menos metros. Isto não significa que um diâmetro seja mais económico por si só; ambos podem imprimir o mesmo volume de peça. Significa que o número de comprimento de stock não pode ser comparado sem contexto de diâmetro. Quando um fatiador indica gramas, já está a normalizar o uso de material por massa; quando um sensor de fim de filamento ou uma estimativa manual de carretel pensa em metros, o diâmetro torna-se central.' },
    { type: 'comparative', columns: 2, items: [
      { title: 'Filamento de 1,75 mm', description: 'Maior comprimento de fio por quilograma e o formato dominante nas impressoras de secretária atuais.', points: ['Útil para extrusores compactos', 'Mais metros na mesma massa de carretel', 'Área nominal de cerca de 2,405 mm2'] },
      { title: 'Filamento de 2,85 mm', description: 'Menor comprimento de fio por quilograma com uma secção de alimentação maior, comum em máquinas mais antigas ou profissionais.', points: ['Área nominal de cerca de 6,379 mm2', 'Menos sensível à compressão do alimentador nalgumas configurações', 'Não deve usar suposições de 1,75 mm'] },
    ] },
    { type: 'table', headers: ['Cenário', 'O que muda', 'Consequência para o planeamento'], rows: [
      ['Mesmo polímero, diâmetro maior', 'A área aumenta', 'Os metros diminuem para os mesmos gramas.'],
      ['Mesmo diâmetro, densidade menor', 'O volume aumenta', 'Os metros aumentam para os mesmos gramas.'],
      ['Mesmos gramas, filamento com carga', 'A densidade pode aumentar', 'Os metros podem ser menores do que o esperado.'],
      ['Filamento húmido', 'A massa medida aumenta ligeiramente', 'O carretel pode parecer mais pesado sem adicionar polímero seco útil.'],
    ] },
    { type: 'title', text: 'Como usar a verificação de suficiência do carretel antes de iniciar uma impressão longa', level: 2 },
    { type: 'paragraph', html: 'O campo opcional de stock restante transforma o conversor num painel de avance ou pare. Insira a massa necessária para o trabalho como peso do filamento e, em seguida, insira o filamento utilizável restante no carretel atual. O resultado compara gramas diretamente e também converte a diferença em metros ou pés usando o mesmo modelo de material e diâmetro. Verde significa que o carretel tem stock suficiente; vermelho significa que o trabalho está aquém e mostra a diferença exata.' },
    { type: 'card', icon: 'mdi:traffic-light', title: 'Por que gramas e metros são ambos exibidos', html: 'Os gramas são a linguagem de compra e dos fatiadores. Os metros são a linguagem do comprimento do fio usada por alguns ecrãs de firmware, estimativas de fim de filamento e cálculos manuais de carretel. Mostrar ambos evita um erro comum de planeamento: ter comprimento suficiente com uma suposição de densidade, mas não massa suficiente com o material real.' },
    { type: 'proscons', title: 'Métodos de validação de stock', items: [
      { pro: 'Pesar o carretel é rápido e funciona mesmo quando a bobina está parcialmente usada.', con: 'É preciso saber ou estimar a tara do carretel vazio.' },
      { pro: 'Usar gramas do fatiador é geralmente consistente com o peso de compra do material.', con: 'As estimativas do fatiador podem variar com volume de purga, suportes, abas e malhas de modificadores.' },
      { pro: 'O comprimento é intuitivo ao comparar percursos de filamento e distâncias de fim de filamento.', con: 'O comprimento varia com a densidade e o diâmetro, por isso não é universal entre materiais.' },
      { pro: 'A conversão baseada em densidade lida melhor com PLA, PETG, ABS, TPU e compósitos.', con: 'Aditivos específicos do fabricante podem exigir um valor de densidade personalizado.' },
    ] },
    { type: 'title', text: 'Filamentos compósitos e especiais precisam de valores de densidade personalizados', level: 2 },
    { type: 'paragraph', html: 'Os filamentos com carga são a principal razão pela qual um estimador de material sério deve expor a densidade em vez de a ocultar. PLA com carga de madeira, nylon com fibra de carbono, PLA com carga metálica, filamento brilhante, materiais de engenharia com carga de vidro e misturas do tipo cerâmica podem desviar-se acentuadamente do polímero base. Um filamento com carga metálica pode parecer pesado porque a densidade é alta; os mesmos 500 g podem representar muito menos volume e menos comprimento do que o PLA padrão. Para uma impressão técnica cara, essa diferença não é académica. Pode decidir se os últimos dez por cento de uma impressão terminam ou ficam sem material.' },
    { type: 'glossary', items: [
      { term: 'Densidade', definition: 'Massa por unidade de volume, aqui expressa em gramas por centímetro cúbico.' },
      { term: 'Área da secção', definition: 'A área circular do fio de filamento calculada a partir do diâmetro.' },
      { term: 'Massa linear', definition: 'Quantos gramas pesa um metro ou um pé de filamento para o material e diâmetro selecionados.' },
      { term: 'Tara', definition: 'O peso do carretel vazio que deve ser subtraído da leitura da balança.' },
      { term: 'Diâmetro nominal', definition: 'O tamanho de filamento anunciado, geralmente 1,75 mm ou 2,85 mm, antes de medir a tolerância real.' },
    ] },
    { type: 'message', title: 'Os dados do fabricante prevalecem', html: 'Quando o carretel ou a ficha técnica indicar a densidade, use esse valor. As predefinições genéricas de densidade são úteis para planeamento, mas fórmulas específicas do fornecedor, cargas de pigmento e reforços podem alterar o número.' },
    { type: 'title', text: 'Exemplos práticos para estimativa de material em impressão 3D', level: 2 },
    { type: 'paragraph', html: 'Imagine que um fatiador indica que um suporte de PETG precisa de 186 g e tem um carretel parcialmente usado. PETG a 1,27 g/cm3 com filamento de 1,75 mm converte-se em aproximadamente sessenta e um metros. Se o peso utilizável do carretel após a tara for 220 g, o painel indica um excedente de 34 g e converte essa margem em cerca de onze metros. Essa margem pode ser suficiente para uma linha de purga e uma aba pequena, mas não para um erro grande de suportes. A verificação de stock incentiva o utilizador a adicionar uma margem realista antes de deixar uma impressão sem supervisão.' },
    { type: 'paragraph', html: 'Agora compare com o ABS. Como o ABS é menos denso que o PETG, os mesmos 186 g tornam-se mais volume e, portanto, mais comprimento com o mesmo diâmetro de 1,75 mm. Isso não torna a peça de ABS mais barata por si só, porque o preço por quilograma e as definições de impressão também importam, mas explica por que uma estimativa de metros restantes copiada de um material pode enganar noutro. Para controlo de inventário, a massa é o ponto de partida estável e a densidade cria a ponte para o comprimento.' },
    { type: 'summary', title: 'Lista de verificação para um planeamento fiável de material', items: [
      'Subtraia a tara do carretel vazio antes de inserir o stock restante.',
      'Use a densidade real do material para filamentos com carga, reforçados ou premium.',
      'Verifique se a sua máquina usa filamento de 1,75 mm ou 2,85 mm antes de confiar em qualquer valor de comprimento.',
      'Mantenha uma margem para purga, suportes, abas, primeiras camadas falhadas e alterações de perfil do fatiador.',
      'Trate o estado verde de suficiência como uma verificação de planeamento, não como garantia contra entupimentos ou falhas do sensor de fim de filamento.',
    ] },
    { type: 'title', text: 'Resposta SEO: conversão de peso para comprimento de filamento numa frase', level: 2 },
    { type: 'paragraph', html: 'Para converter o peso de filamento de impressora 3D em comprimento, divida o peso em gramas pela densidade do material para obter o volume, multiplique por 1000 para converter cm3 em mm3, divida por <code>pi x (diâmetro / 2)^2</code> e depois divida por 1000 para obter metros. Este método baseado na densidade é mais preciso do que uma tabela fixa de gramas para metros porque o PLA, PETG, ABS, TPU, Nylon, PC e filamentos compósitos têm todos valores de densidade diferentes.' },
    { type: 'diagnostic', variant: 'success', title: 'Quando a estimativa é mais fiável', badge: 'Melhor prática', html: 'O resultado é mais robusto quando o peso do fatiador é final, o peso restante do carretel já tem a tara removida, o diâmetro é medido ou conhecido e a densidade vem do fabricante. Nessas condições, o conversor torna-se uma verificação prática de pré-voo para impressões longas, lotes de produção e polímeros técnicos caros.' },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
