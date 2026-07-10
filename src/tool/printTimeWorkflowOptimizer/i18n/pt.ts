import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PrintTimeWorkflowOptimizerUI } from '../ui';

const slug = 'otimizador-de-tempo-de-impressao-3d';
const title = 'Otimizador de Tempo de Impressao 3D';
const description =
  'Compare duas configuracoes de impressao FDM lado a lado: camadas, tempo corrigido, consumo de filamento, custo, equilibrio qualidade-velocidade e avisos de hardware.';

const faqData = [
  {
    question: 'Diferenca de um calculador simples?',
    answer:
      'Inclui sobrecarga complexidade, retracao por camada, volume ajustado, massa filamento, custo e comparacao cenarios.',
  },
  {
    question: 'Pode substituir estimativas do slicer?',
    answer:
      'Nao. Slicer conhece trajetorias exatas. Esta ferramenta planeja antes de slicear.',
  },
  {
    question: 'O que a complexidade muda?',
    answer:
      'Baixa/media/alta aplicam coeficientes para deslocamentos, perdas aceleracao, cantos e ilhas.',
  },
  {
    question: 'Por que avisa acima de 100 mm/s?',
    answer:
      'Muitas impressoras superam 100 mm/s mas extrusao e resfriamento tornam altas velocidades arriscadas sem calibracao.',
  },
];
const howToData = [
  { name: 'Inserir tamanho e volume do modelo', text: 'Adicionar altura e volume do CAD, slicer ou aproximacao.' },
  { name: 'Ajustar cenario A', text: 'Escolher altura camada, velocidade, largura linha, preenchimento, material, complexidade.' },
  { name: 'Ajustar cenario B', text: 'Ajustar segunda configuracao para comparar.' },
  { name: 'Ler impacto', text: 'Comparar tempo, filamento, custo, camadas, eficiencia, fluxo.' },
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
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<PrintTimeWorkflowOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    inputsAriaLabel: 'Entradas do workflow',
    resultsAriaLabel: 'Resultados do workflow',
    unitSystemLabel: 'Unidades',
    metricLabel: 'Metrico',
    imperialLabel: 'US',
    currencyLabel: 'Moeda',
    currencyOptions: [
      { code: 'USD', label: '$', symbol: '$' },
      { code: 'EUR', label: 'EUR', symbol: 'EUR' },
      { code: 'GBP', label: 'GBP', symbol: 'GBP' },
      { code: 'CAD', label: 'C$', symbol: 'C$' },
      { code: 'AUD', label: 'A$', symbol: 'A$' },
      { code: 'CHF', label: 'Fr', symbol: 'Fr' },
      { code: 'CNY', label: 'CNY', symbol: 'CNY' },
      { code: 'INR', label: 'INR', symbol: 'INR' },
      { code: 'BRL', label: 'R$', symbol: 'R$' },
      { code: 'MXN', label: 'MXN', symbol: 'MXN' },
      { code: 'RUB', label: 'RUB', symbol: 'RUB' },
      { code: 'PLN', label: 'PLN', symbol: 'PLN' },
      { code: 'SEK', label: 'SEK', symbol: 'SEK' },
      { code: 'NOK', label: 'NOK', symbol: 'NOK' },
      { code: 'DKK', label: 'DKK', symbol: 'DKK' },
      { code: 'TRY', label: 'TRY', symbol: 'TRY' },
      { code: 'JPY', label: 'JPY', symbol: 'JPY' },
    ],
    scenarioALabel: 'Cenario A',
    scenarioBLabel: 'Cenario B',
    modelHeightLabel: 'Altura do modelo',
    modelVolumeLabel: 'Volume estimado',
    layerHeightLabel: 'Altura da camada',
    speedLabel: 'Velocidade',
    lineWidthLabel: 'Largura da linha',
    infillLabel: 'Preenchimento',
    complexityLabel: 'Complexidade',
    complexityTooltip: 'Estima tempo morto: aceleracoes, cantos, retracoes, ilhas, deslocamentos.',
    pieceTypeLabel: 'Tipo de peca',
    solidPieceLabel: 'Maca continuo',
    hollowPieceLabel: 'Oco muitas cavidades',
    materialLabel: 'Material',
    filamentPriceLabel: 'Preco do filamento',
    lowComplexity: 'Baixa faces simples',
    mediumComplexity: 'Media geometria mista',
    highComplexity: 'Alta muitas ilhas',
    estimatedTimeLabel: 'Tempo estimado',
    filamentLabel: 'Filamento',
    costLabel: 'Custo material',
    layersLabel: 'Camadas',
    efficiencyLabel: 'Eficiencia',
    flowLabel: 'Fluxo volumetrico',
    flowTooltip: 'Acima de 10-12 mm3/s = risco de subextrusao.',
    flowUnit: 'mm3/s',
    qualityTradeoffLabel: 'Equilibrio qualidade',
    speedReductionLabel: '-10% velocidade',
    speedReductionAddsLabel: 'adiciona',
    speedReductionMinutesLabel: 'min',
    qualityGainLabel: '~8% superficie mais limpa',
    hardwareWarning: 'Velocidade >100 mm/s. Verificar fluxo hotend, resfriamento, aceleracao.',
    flowWarning: 'Fluxo acima da zona de conforto do hotend padrao.',
    bestValueLabel: 'Melhor valor',
    timeDeltaLabel: 'Diferenca tempo',
    costDeltaLabel: 'Diferenca custo',
    materialDeltaLabel: 'Diferenca material',
    winnerBadge: 'Melhor valor',
    scenarioPrefix: 'Cenario',
    inScenarioLabel: 'em',
    fasterDirection: 'mais rapido',
    cheaperDirection: 'mais barato',
    lighterDirection: 'mais leve',
    criterionAlignedLabel: 'Alinhado melhor valor',
    criterionTradeoffLabel: 'Compromisso melhor valor',
    infoGlyph: 'i',
    metricVolumeUnit: 'cm3',
    imperialVolumeUnit: 'in3',
    gramUnit: 'g',
    ounceUnit: 'oz',
    kilogramUnit: 'kg',
    hourUnit: 'h',
    minuteUnit: 'min',
    millimeterUnit: 'mm',
    metricSpeedUnit: 'mm/s',
    imperialSpeedUnit: 'in/s',
    inchUnit: 'in',
    percentUnit: '%',
    materials: [
      { value: 'pla', label: 'PLA' },
      { value: 'petg', label: 'PETG' },
      { value: 'abs', label: 'ABS' },
      { value: 'asa', label: 'ASA' },
      { value: 'nylon', label: 'Nylon' },
      { value: 'tpu', label: 'TPU' },
    ],
  },
  seo: [
    { type: 'title', text: 'Como estimar o tempo de impressao 3D antes de fatiar', level: 2 },
    {
      type: 'paragraph',
      html: 'Um <strong>estimador de tempo de impressao 3D</strong> util nao pode ser apenas volume dividido pela velocidade. Impressoras FDM gastam tempo acelerando, diminuindo em curvas, retraindo filamento, viajando entre ilhas, resfriando camadas pequenas e recuperando pressao apos mudancas de direcao. O otimizador modela a peca como volume imprimivel, largura de linha, altura de camada, velocidade, numero de camadas e um coeficiente de complexidade para que o planejamento inicial fique mais proximo das decisoes reais do fluxo de trabalho.',
    },
    {
      type: 'paragraph',
      html: 'O tempo base de extrusao e calculado a partir do volume sobre a vazao volumetrica: velocidade multiplicada pela largura de linha e altura de camada. Em seguida, a ferramenta aplica um coeficiente de correcao para a complexidade do modelo e adiciona uma tolerancia fixa de retracao por camada. Isso nao pretende precisao de slicer, mas oferece uma comparacao mais honesta entre uma configuracao de rascunho de 0,20 mm e uma configuracao de qualidade de 0,12 mm do que uma calculadora linear.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '1.15x', label: 'Sobrecarga baixa para blocos simples e pecas lisas', icon: 'mdi:cube-outline' },
        { value: '1.60x', label: 'Sobrecarga alta para muitas ilhas e retracoes', icon: 'mdi:vector-polyline' },
        { value: '0.5 s', label: 'Tolerancia de retracao planejada adicionada por camada', icon: 'mdi:timer-outline' },
        { value: '100 mm/s', label: 'Limite de aviso para impressoras padrao com risco de extrusao', icon: 'mdi:alert-outline' },
      ],
    },
    {
      type: 'tip',
      title: 'Use o volume do slicer quando possivel',
      html: '<p>A melhor entrada de volume e o volume de material do slicer ou CAD para o modelo, nao a caixa envolvente externa. Caixas envolventes incluem ar vazio ao redor de curvas, furos, alcas e cavidades, entao podem exagerar o tempo e o filamento.</p>',
    },
    { type: 'title', text: 'Por que a altura da camada muda o tempo tao fortemente', level: 2 },
    {
      type: 'paragraph',
      html: 'A altura da camada afeta o tempo de impressao de duas maneiras. Primeiro, altera a vazao volumetrica: uma camada de 0,12 mm na mesma velocidade e largura extrude 40% menos plastico por segundo do que uma camada de 0,20 mm. Segundo, aumenta o numero de camadas, entao a sobrecarga de mudanca de camada, retracoes, estabilizacao de pressao e decisoes de resfriamento acontecem com mais frequencia. E por isso que pequenas mudancas cosmeticas podem transformar uma impressao de cinco horas em uma de oito horas.',
    },
    {
      type: 'table',
      headers: ['Altura da camada', 'Uso tipico', 'Consequencia no fluxo de trabalho'],
      rows: [
        ['0,28-0,32 mm', 'Pecas de rascunho, grandes dispositivos, verificacoes rapidas', 'Poucas camadas e alta vazao, mas linhas de camada visiveis.'],
        ['0,18-0,22 mm', 'Impressao geral PLA e PETG', 'Tempo, resistencia e qualidade de superficie equilibrados para muitas impressoras de mesa.'],
        ['0,10-0,14 mm', 'Miniaturas, cascos curvos, pecas visiveis ao consumidor', 'Trabalhos muito mais longos porque a vazao cai e o numero de camadas aumenta.'],
        ['Abaixo de 0,10 mm', 'Casos especiais de acabamento', 'Frequentemente limitado pela precisao da maquina, resfriamento e retornos visuais decrescentes.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Camadas finas podem ser mais lentas do que a formula sugere',
      badge: 'Resfriamento e tempo minimo de camada',
      html: '<p>Modelos pequenos podem atingir o tempo minimo de camada no slicer. Quando isso acontece, a impressora diminui a velocidade para deixar o plastico esfriar, mesmo se a formula volumetrica disser que a maquina poderia se mover mais rapido.</p>',
    },
    {
      type: 'summary',
      title: 'Regras da altura da camada',
      items: [
        'Altura de camada menor reduz o fluxo por segundo na mesma velocidade.',
        'Mais camadas adicionam sobrecarga repetida mesmo quando o volume do modelo nao muda.',
        'A melhor comparacao e baseada em cenarios: perfil de rascunho versus perfil de qualidade.',
      ],
    },
    { type: 'title', text: 'Sobrecarga de complexidade do modelo e tempo morto', level: 2 },
    {
      type: 'paragraph',
      html: 'Tempo morto e a lacuna entre a extrusao teorica e o relogio do trabalho. Uma parede reta tipo vaso tem pouco deslocamento e poucas retracoes. Um invólucro mecanico com muitos furos, saliencias, etiquetas, nervuras e ilhas separadas forca a impressora a iniciar e parar muitas vezes. Os limites de aceleracao significam que o bico pode nunca atingir a velocidade comandada em segmentos curtos, entao a velocidade media real de movimento e menor do que o valor do controle deslizante.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Complexidade baixa', description: 'Modelos lisos, contornos continuos, poucas ilhas e deslocamento interno limitado.', icon: 'mdi:shape-outline', points: ['Menos sobrecarga', 'Velocidade estavel', 'Poucas retracoes'] },
        { title: 'Complexidade media', description: 'Pecas funcionais comuns com furos, curvas mistas, mudancas de preenchimento e deslocamento moderado.', icon: 'mdi:cog-outline', highlight: true, points: ['Padrao equilibrado', 'Alguma perda de deslocamento', 'Base de cotacao util'] },
        { title: 'Complexidade alta', description: 'Superficies texturizadas, muitos recursos separados, interfaces de suporte e secoes com muitas retracoes.', icon: 'mdi:transit-connection-variant', points: ['Alta sobrecarga', 'Maior risco de stringing', 'Tempo real mais longo'] },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Coeficiente de sobrecarga', definition: 'Um multiplicador que aproxima deslocamentos, perda de aceleracao, retracoes e outros tempos nao capturados pelo calculo de extrusao constante.' },
        { term: 'Vazao volumetrica', definition: 'A quantidade de plastico empurrada pelo bico por segundo, calculada como velocidade vezes largura de linha vezes altura de camada.' },
        { term: 'Numero de camadas', definition: 'A altura do modelo dividida pela altura da camada, arredondada para cima porque as camadas finais parciais ainda exigem uma passada.' },
        { term: 'Sub-extrusao', definition: 'Um defeito onde o hotend ou extrusor nao consegue fornecer plastico fundido suficiente para a velocidade e geometria de linha solicitadas.' },
      ],
    },
    {
      type: 'message',
      title: 'Trate a complexidade como um botao de calibracao',
      ariaLabel: 'Nota sobre o coeficiente de complexidade',
      html: '<p>Se seu slicer relata consistentemente tempos mais longos que este otimizador para modelos similares, aumente a complexidade. Se sua impressora direct drive com aceleracao ajustada supera a estimativa, diminua-a para planejamentos futuros.</p>',
    },
    { type: 'title', text: 'Consumo de filamento, custo e preenchimento', level: 2 },
    {
      type: 'paragraph',
      html: 'O tempo e apenas uma parte da decisao do fluxo de trabalho. O peso e o custo do filamento importam ao cotar pecas, planejar trabalhos em lote ou decidir se um perfil de detalhe fino vale a pena ocupar a impressora. O otimizador estima o volume imprimivel corrigido preservando uma parcela de casca e escalando a regiao interna pela porcentagem de preenchimento, entao multiplica esse volume pela densidade do material.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle-outline',
      items: [
        'Use PLA em torno de 1,24 g/cm³ e PETG em torno de 1,27 g/cm³ para planejamento rapido de materiais.',
        'Aumente o volume estimado quando suportes, brims, rafts ou estruturas de purga fizerem parte do trabalho.',
        'Menos preenchimento reduz filamento e tempo, mas paredes, camadas superiores e inferiores ainda consomem material.',
        'Para lotes de producao, compare as estimativas da calculadora com o peso real do carretel usado e ajuste cotacoes futuras.',
      ],
    },
    {
      type: 'card',
      icon: 'mdi:cash-clock',
      title: 'Exemplo de decisao de fluxo de trabalho',
      html: '<p>Uma peca de PLA de 120 cm³ em camadas de 0,20 mm pode ser aceitavel para um gabarito de oficina, enquanto a versao de 0,12 mm tem melhor aparencia, mas ocupa a impressora por mais tempo. Comparar tempo e custo do material lado a lado torna o compromisso visivel antes de comprometer a maquina.</p>',
    },
    {
      type: 'proscons',
      title: 'Otimizando velocidade versus qualidade',
      items: [
        { pro: 'Velocidade mais alta pode liberar capacidade da impressora para mais trabalhos por dia.', con: 'Pode expor ringing, cantos fracos, resfriamento pobre e limites de fluxo do hotend.' },
        { pro: 'Velocidade mais baixa geralmente melhora o acabamento superficial e a consistencia dimensional.', con: 'Aumenta o tempo de fila e pode tornar pequenas pecas comerciais menos lucrativas.' },
        { pro: 'Altura de camada mais baixa melhora superficies curvas e miniaturas.', con: 'Multiplica o numero de camadas e a sobrecarga repetida da maquina.' },
      ],
    },
    { type: 'title', text: 'Avisos de hardware e limites praticos de velocidade', level: 2 },
    {
      type: 'paragraph',
      html: 'Um valor de velocidade no slicer nao e uma garantia de que o bico manterá essa velocidade em todos os lugares. Impressoras Cartesianas padrao com cama movel, extrusores Bowden antigos, hotends com zona de fusao curta e resfriamento fraco de peca podem ter dificuldades acima de 100 mm/s a menos que aceleracao, jerk, pressure advance, temperatura e calibracao de fluxo estejam ajustados. O aviso nao significa que a impressao falhara; significa que a configuracao solicitada deve ser verificada em relacao ao comportamento do hardware.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa provavel', 'Resposta de planejamento'],
      rows: [
        ['Paredes finas ou lacunas', 'Hotend nao consegue derreter plastico suficiente ou extrusor desliza', 'Reduza a velocidade, aumente a temperatura com cautela, ou reduza a largura da linha/altura da camada.'],
        ['Ringing perto dos cantos', 'Aceleracao e vibracao do quadro dominam', 'Reduza a aceleracao ou a velocidade para paredes visiveis.'],
        ['Pequenos recursos enrolados', 'Resfriamento nao acompanha', 'Reduza a velocidade, aumente o ventilador, ou imprima varias copias.'],
        ['Stringing em pecas complexas', 'Muitos deslocamentos e retracoes', 'Aumente a sobrecarga de complexidade e ajuste retracao/temperatura.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'A vazao volumetrica e o teto real de velocidade',
      badge: 'Verifique mm³/s',
      html: '<p>Dois perfis com a mesma velocidade de movimento podem exigir taxas de fusao diferentes. Uma camada de 0,30 mm e uma linha de 0,50 mm a 80 mm/s precisam de muito mais plastico por segundo do que uma camada de 0,12 mm e uma linha de 0,42 mm na mesma velocidade.</p>',
    },
    {
      type: 'summary',
      title: 'Use o otimizador antes de fatiar',
      items: [
        'Compare dois perfis candidatos em vez de adivinhar a partir de um unico numero.',
        'Observe o numero de camadas, a vazao volumetrica e os avisos de hardware juntos.',
        'Mantenha a ultima interacao localmente para que o planejamento repetido possa continuar a partir da configuracao anterior.',
      ],
    },
  ],
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
};
