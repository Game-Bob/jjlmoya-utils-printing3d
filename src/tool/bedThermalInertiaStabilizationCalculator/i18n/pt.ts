import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { BedThermalInertiaStabilizationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<BedThermalInertiaStabilizationCalculatorUI> = {
  slug: 'calculadora-estabilizacao-inercia-termica-mesa-impressao',
  title: 'Calculadora de Estabilização por Inércia Térmica da Mesa',
  description: 'Estime quanto tempo deixar uma mesa aquecida de impressão 3D descansar após atingir o setpoint, usando material da placa, espessura, temperatura alvo, potência do aquecedor e tamanho da mesa.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'US',
    materialLabel: 'Material da placa',
    borosilicateGlassLabel: 'Vítreo borosilicato',
    peiSpringSteelLabel: 'Aço mola PEI',
    aluminumLabel: 'Placa de alumínio',
    thicknessLabel: 'Espessura da placa',
    targetTemperatureLabel: 'Temperatura alvo da mesa',
    heaterPowerLabel: 'Potência do aquecedor',
    bedSizeLabel: 'Área aquecida',
    presetsLabel: 'Predefinições',
    enderPresetLabel: 'Vítreo 235',
    voronPresetLabel: 'PEI 300',
    largePresetLabel: 'Alumínio 350',
    recommendedDelayLabel: 'Atraso antes de imprimir',
    delayMarkerLabel: 'Atraso',
    warmupTimeLabel: 'Aquecimento ideal',
    plateMassLabel: 'Massa da placa',
    energyStoredLabel: 'Calor armazenado',
    conductionLagLabel: 'Latência por condução',
    conductivityLabel: 'Condutividade',
    readinessLabel: 'Prontidão',
    readinessQuick: 'têmpera rápida',
    readinessBalanced: 'têmpera normal',
    readinessSlow: 'têmpera longa',
    controlsAriaLabel: 'Parâmetros de inércia térmica da mesa aquecida',
    resultsAriaLabel: 'Resultados de estabilização da mesa aquecida',
    copyButton: 'Copiar atraso da mesa',
    copiedButton: 'Copiado',
    copiedSummaryTemplate: 'Estimativa de estabilização: aguardar {delay} s ({minutes} min) após setpoint; aquecimento ideal cerca de {warmup} min, prontidão {readiness}.',
    thicknessUnitMetric: 'mm',
    thicknessUnitImperial: 'in',
    temperatureUnitMetric: '°C',
    temperatureUnitImperial: '°F',
    bedSizeUnitMetric: 'mm',
    bedSizeUnitImperial: 'in',
    wattsUnit: 'W',
    secondsUnit: 's',
    minutesUnit: 'min',
    kilogramsUnit: 'kg',
    poundsUnit: 'lb',
    wattHoursUnit: 'Wh',
    conductivityUnit: 'W/mK',
  },
  seo: [
    { type: 'title', text: 'Por que uma mesa aquecida precisa de estabilização após atingir o setpoint', level: 2 },
    {
      type: 'paragraph',
      html: 'O visor de uma impressora geralmente mostra a temperatura medida perto do termistor, não a temperatura exata da superfície superior de impressão. Em muitas máquinas, o termistor é colado sob o aquecedor, embutido no suporte da mesa ou colocado longe da área onde a primeira camada começa. O controlador pode mostrar <strong>60 °C</strong> enquanto o topo de uma placa espessa de vidro ainda está alcançando a temperatura. Esse atraso é a inércia térmica: a placa armazena calor, move o calor através de sua espessura e perde calor para o ar ao mesmo tempo.',
    },
    {
      type: 'paragraph',
      html: 'A primeira camada é particularmente sensível a esse atraso porque a adesão depende da viscosidade do polímero, da energia superficial e da pressão de contato. Uma mesa que ainda está aquecendo na superfície pode fazer com que os cantos levantem, as linhas de saia pareçam secas ou o deslocamento Z pareça inconsistente mesmo quando a malha e a altura do bocal estão corretas. Aguardar um intervalo de têmpera calculado após a mesa atingir o setpoint é geralmente mais repetível do que aumentar o setpoint aleatoriamente.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '1,2', label: 'W/mK condutividade típica do vidro borosilicato' },
        { value: '16', label: 'W/mK condutividade aproximada do aço mola' },
        { value: '205', label: 'W/mK condutividade aproximada do alumínio' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'O atraso é uma estimativa superficial, não um substituto para o autotune PID',
      html: 'A sintonia PID controla como o aquecedor segue o termistor. A estabilização térmica estima quanto tempo a superfície de impressão precisa para se aproximar do setpoint controlado pelo termistor. Um loop PID bem ajustado ainda pode precisar de um atraso de têmpera quando a placa é espessa, pouco condutora ou mal acoplada ao aquecedor.',
    },
    { type: 'title', text: 'A escolha do material domina a inércia térmica da mesa', level: 2 },
    {
      type: 'paragraph',
      html: 'A calculadora trata o material como uma entrada estrita porque vidro, aço mola PEI e alumínio não são sistemas térmicos intercambiáveis. O vidro borosilicato tem baixa condutividade térmica e capacidade calorífica significativa, então a superfície superior pode ficar atrás do lado do aquecedor por um período notável. O aço mola é mais fino e conduz melhor que o vidro, então geralmente se equaliza mais rápido mesmo sendo denso. O alumínio conduz calor extremamente bem, por isso as mesas de alumínio fundido ou usinado são preferidas em impressoras maiores, mas uma placa espessa de alumínio ainda pode armazenar muita energia.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Vidro borosilicato',
          description: 'Baixa condutividade e capacidade calorífica moderada criam o maior atraso superficial, especialmente com 3-5 mm de espessura.',
          points: ['Boa planicidade quando bem apoiado', 'Resposta superficial lenta', 'Sensível a clipes e contato local do aquecedor'],
        },
        {
          title: 'Aço mola PEI',
          description: 'Chapas finas de aço respondem mais rápido e geralmente precisam de menos descanso, mas bases magnéticas e camadas adesivas adicionam resistência de contato.',
          highlight: true,
          points: ['Têmpera prática rápida', 'Troca de superfície fácil', 'A pilha magnética e adesiva ainda importa'],
        },
        {
          title: 'Placa de alumínio',
          description: 'Alta condutividade espalha calor rapidamente pela mesa; espessura e potência do aquecedor tornam-se os principais fatores de atraso.',
          points: ['Excelente propagação lateral de calor', 'Alta energia armazenada em mesas grandes', 'Melhor quando a cobertura do aquecedor é uniforme'],
        },
      ],
    },
    {
      type: 'table',
      headers: ['Superfície de impressão', 'Comportamento térmico', 'Problema típico de estabilização', 'Resposta prática da primeira camada'],
      rows: [
        ['Vidro borosilicato 4 mm', 'Condução lenta através da espessura', 'Superfície atrasada em relação ao termistor', 'Aguardar mais antes de sondar ou imprimir'],
        ['Aço PEI 0,4-0,6 mm', 'Folha condutora fina', 'Interface magnética/adesiva controla o atraso', 'Têmpera curta geralmente é suficiente'],
        ['Alumínio 5-8 mm', 'Condução rápida mas muito calor armazenado', 'Grande massa leva tempo para atingir equilíbrio', 'Usar têmpera estável em mesas grandes'],
        ['Pilhas compostas', 'Interfaces de camadas dominam', 'Lacunas de ar e adesivos adicionam resistência térmica', 'Medir a temperatura superficial real quando possível'],
      ],
    },
    {
      type: 'tip',
      title: 'Não reutilize o atraso do vidro para aço mola',
      html: 'Um atraso correto para uma placa de borosilicato de 4 mm pode ser excessivo para uma chapa de aço PEI de 0,5 mm. Por outro lado, um atraso de chapa PEI pode ser muito curto para vidro e fazer a primeira camada parecer um problema de deslocamento Z.',
    },
    { type: 'title', text: 'Como a espessura altera o tempo de aquecimento e o atraso superficial', level: 2 },
    {
      type: 'paragraph',
      html: 'A espessura afeta duas partes diferentes do processo. Primeiro, uma placa mais espessa tem mais massa, portanto requer mais energia para elevar sua temperatura média. Segundo, o calor deve difundir-se por um caminho mais longo antes que a superfície siga o lado do aquecedor. A calculadora estima tanto a energia de aquecimento ideal quanto um atraso de difusão através da placa, depois os combina em um atraso recomendado após a impressora relatar que a mesa atingiu o setpoint.',
    },
    {
      type: 'paragraph',
      html: 'A relação não é linear para o atraso superficial. O tempo de difusão aumenta com o quadrado da espessura, razão pela qual uma pequena mudança de 3 mm para 4 mm de vidro pode importar mais do que o esperado. Uma chapa de aço muito fina pode equalizar rapidamente, mas a base magnética, o filme adesivo, o revestimento PEI e o ar aprisionado ainda podem retardar a transferência real. Em mesas de alumínio, a própria placa espalha calor rapidamente, mas a mesa pode permanecer globalmente instável se a cobertura do aquecedor for irregular ou a placa for grande.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Inércia térmica', definition: 'A tendência de uma placa de resistir a mudanças de temperatura porque tem massa e capacidade calorífica.' },
        { term: 'Difusividade térmica', definition: 'Uma propriedade do material que combina condutividade, densidade e capacidade calorífica para descrever a rapidez com que as mudanças de temperatura se movem através dele.' },
        { term: 'Têmpera térmica', definition: 'Uma espera deliberada após atingir o setpoint para que a superfície de impressão, aquecedor, suporte e pilha da mesa se aproximem de um estado mais estável.' },
        { term: 'Resistência de contato', definition: 'Resistência térmica extra causada por contato imperfeito, camadas adesivas, ímãs, clipes, lacunas de ar ou superfícies deformadas.' },
        { term: 'Excedente de setpoint', definition: 'Um evento de controle onde a temperatura do termistor sobe acima do alvo antes de estabilizar, geralmente não relacionado à temperatura superficial.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Regras práticas de espessura',
      items: [
        'Chapas finas de aço PEI geralmente estabilizam rapidamente assim que o aquecedor e a base magnética estão quentes.',
        'Placas de vidro acima de 3 mm merecem um atraso real antes dos movimentos da primeira camada.',
        'Placas grandes de alumínio podem precisar de têmpera devido à massa total, mesmo quando a condução é excelente.',
        'Lacunas de ar sob superfícies removíveis podem dominar o cálculo; limpe as faces de contato e assente a placa consistentemente.',
      ],
    },
    { type: 'title', text: 'Potência do aquecedor, tamanho da mesa e calor armazenado', level: 2 },
    {
      type: 'paragraph',
      html: 'A potência do aquecedor determina a rapidez com que a energia pode entrar na pilha da mesa. Um aquecedor de 220 W sob uma mesa de vidro de 235 mm tem uma densidade de potência muito diferente de um aquecedor de silicone de 600 W sob uma placa de alumínio de 300 mm. A calculadora usa potência, temperatura alvo, área da mesa e massa da placa para estimar o tempo de aquecimento ideal. Em seguida, aplica um componente de estabilização porque a superfície geralmente continua mudando após o sistema controlado pelo termistor atingir o alvo pela primeira vez.',
    },
    {
      type: 'paragraph',
      html: 'A potência não é uma cura para má distribuição de calor. Um aquecedor potente pode elevar rapidamente o termistor enquanto bordas, clipes ou zonas sem suporte ficam para trás. Impressoras grandes devem considerar a cobertura do aquecedor, isolamento, montagem da mesa, temperatura da câmara e se a sondagem começa imediatamente após o evento de setpoint. Para ABS, ASA, nylon e outros materiais mais quentes, uma mesa e câmara estáveis são frequentemente mais importantes do que simplesmente atingir um alto valor numérico de temperatura da mesa.',
    },
    {
      type: 'table',
      headers: ['Sintoma', 'Causa térmica provável', 'Ajuste a tentar'],
      rows: [
        ['Primeiras linhas de saia opacas ou que mal aderem', 'A superfície ainda está mais fria que o termistor', 'Aumentar o atraso de estabilização antes da primeira camada'],
        ['Centro adere mas cantos levantam', 'Temperatura superficial irregular ou perdas nas bordas', 'Adicionar isolamento, verificar cobertura do aquecedor, esperar mais'],
        ['Malha de sondagem muda entre execuções frias e quentes', 'A pilha da mesa ainda está se expandindo ou relaxando', 'Fazer têmpera antes de sondar, não apenas antes de imprimir'],
        ['Gráfico PID parece estável mas adesão varia', 'O controlador está estável no sensor, não na superfície de impressão', 'Usar um atraso superficial e verificar com termômetro de contato'],
      ],
    },
    {
      type: 'card',
      title: 'Por que a saída é um atraso após o setpoint',
      html: 'A impressora já lida com a subida até a temperatura alvo. Esta calculadora responde a uma pergunta mais restrita da primeira camada: quando o visor diz que a mesa está pronta, quantos segundos extras a superfície deve descansar antes que a extrusão comece?',
    },
    { type: 'title', text: 'Autotune PID vs estabilização real da superfície da mesa', level: 2 },
    {
      type: 'paragraph',
      html: 'O autotune PID da mesa é valioso porque reduz a oscilação no sensor medido. Ele não pode remover a física de uma placa espessa ou de baixa condutividade. Uma superfície de vidro pode ainda estar atrasada enquanto o sensor inferior parece estável. Uma chapa de aço mola pode parecer estável rapidamente, mas uma base magnética fria pode continuar extraindo calor dela. O fluxo de trabalho mais repetível é ajustar o controlador, usar um atraso de mesa sensato e começar a calibração da primeira camada apenas após a pilha da mesa estar termicamente repetível.',
    },
    {
      type: 'proscons',
      title: 'Começar imediatamente vs aguardar estabilização',
      items: [
        { pro: 'Começar imediatamente reduz o tempo total de impressão.', con: 'A primeira camada pode ser impressa numa superfície abaixo da temperatura pretendida.' },
        { pro: 'Um atraso calculado melhora a repetibilidade entre impressões.', con: 'Adiciona tempo ocioso, especialmente em vidro e mesas grandes de alumínio.' },
        { pro: 'Fazer têmpera antes de sondar pode reduzir a deriva da malha.', con: 'Têmperas muito longas podem desperdiçar energia se o material escolhido não as necessitar.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não mascare o atraso térmico com compressão excessiva',
      html: 'Se a primeira camada só adere com deslocamento Z agressivamente baixo, a superfície da mesa pode estar mais fria que o esperado. A compressão excessiva pode mascarar o problema térmico enquanto causa pé de elefante, raspagem do bocal e textura superficial rugosa.',
    },
    {
      type: 'message',
      title: 'Melhor sequência de calibração',
      html: 'Aqueça a mesa, aguarde o atraso calculado, execute a sondagem da malha (se sua impressora sonda a quente), depois ajuste a altura da primeira camada. Calibrar o deslocamento Z numa pilha de mesa instável fará com que a próxima impressão pareça inconsistente mesmo que nenhuma configuração mecânica tenha mudado.',
    },
    { type: 'title', text: 'Como usar o tempo de estabilização no G-code de início', level: 2 },
    {
      type: 'paragraph',
      html: 'O atraso recomendado pode ser usado manualmente ou inserido no G-code de início. Um fluxo simples é aquecer a mesa com <code>M190</code>, aguardar o número calculado de segundos com um comando de espera, depois continuar com sondagem, aquecimento do bocal, purga e impressão. Alguns usuários preferem aquecer primeiro a mesa, iniciar o aquecimento da câmara ou o pré-aquecimento do bocal durante a têmpera, e só sondar depois que a mesa parou de derivar.',
    },
    {
      type: 'list',
      items: [
        'Use o mesmo atraso ao comparar filamentos para que os testes de adesão sejam justos.',
        'Aplique atrasos mais longos para vidro, temperaturas altas de mesa, placas grandes ou salas frias.',
        'Aplique atrasos mais curtos para chapas finas de aço quando a base magnética já estiver quente.',
        'Sonde após a têmpera se sua malha mudar com a temperatura.',
        'Recalcule após mudar o material da placa, espessura, potência do aquecedor ou tamanho da mesa.',
      ],
    },
    {
      type: 'tip',
      title: 'Use a primeira impressão do dia como caso de referência',
      html: 'Uma segunda impressão iniciada imediatamente após um trabalho concluído começa com uma pilha de mesa quente e pode precisar de menos espera. Para calibração, avalie o atraso a partir de uma impressora fria, pois essa é a condição com maior probabilidade de expor o atraso térmico.',
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Um bom atraso torna o ajuste da primeira camada entediante',
      html: 'Quando a têmpera está correta, a forma da saia, o brilho das linhas, a adesão dos cantos e a compensação da malha tornam-se mais repetíveis de impressão para impressão. Você não deve precisar perseguir o deslocamento Z toda vez que a máquina começa fria.',
    },
    { type: 'title', text: 'Medindo e melhorando a estabilização real da mesa', level: 2 },
    {
      type: 'paragraph',
      html: 'A calculadora é intencionalmente prática, mas a melhor validação é uma medição superficial. Um termopar de contato colado na superfície de impressão, uma sonda fina sob uma folha sacrificial ou um termômetro infravermelho calibrado com emissividade conhecida podem revelar quanto tempo a superfície leva para estabilizar. Leituras infravermelhas em vidro, PEI e metal brilhante podem ser enganosas, portanto use pontos de medição consistentes e evite comparar diferentes acabamentos superficiais como se tivessem a mesma emissividade.',
    },
    {
      type: 'paragraph',
      html: 'O desempenho térmico muitas vezes pode ser melhorado sem alterar o firmware. Isolar a parte inferior reduz a perda de calor e encurta o aquecimento. Limpar a folha magnética e a placa flexível melhora o contato. Substituir clipes fracos, achatar placas deformadas e evitar contato parcial do aquecedor reduzem campos de temperatura desiguais. Impressoras fechadas beneficiam-se de uma câmara mais quente, mas o calor da câmara também altera correias, componentes do pórtico e comportamento de sondagem, portanto as rotinas térmicas devem ser repetíveis em vez de improvisadas.',
    },
    {
      type: 'table',
      headers: ['Melhoria ou hábito', 'Efeito na estabilização', 'Cuidado'],
      rows: [
        ['Isolamento inferior', 'Menos perda de calor e equilíbrio mais rápido', 'Manter cabos e adesivos classificados para temperatura da mesa'],
        ['Melhor cobertura do aquecedor', 'Temperatura superficial mais uniforme', 'Evitar bolhas e má adesão do aquecedor de silicone'],
        ['Assento consistente da placa removível', 'Menor variação de resistência de contato', 'Poeira ou migalhas de filamento podem criar pontos frios locais'],
        ['Sondagem de malha a quente após têmpera', 'A malha reflete a forma expandida da mesa', 'O suporte da sonda e a cabeça também devem ser termicamente estáveis'],
      ],
    },
    {
      type: 'summary',
      title: 'Lista de verificação prática de estabilização',
      items: [
        'Selecione o material real da placa; vidro, aço e alumínio requerem atrasos diferentes.',
        'Insira espessura e potência do aquecedor em vez de confiar em nomes de modelos de impressora.',
        'Use o atraso calculado após a mesa relatar o setpoint, especialmente antes da calibração da primeira camada.',
        'Meça a superfície se os problemas de adesão persistirem apesar de um gráfico PID estável.',
        'Verifique novamente o atraso após trocar placas, ímãs, isolamento, aquecedores ou tamanho da mesa.',
      ],
    },
  ],
  faq: [
    {
      question: 'Por que esperar após a mesa atingir a temperatura alvo?',
      answer: 'O termistor pode atingir o setpoint antes que a superfície superior de impressão tenha aquecido completamente. A espera permite que a placa, o revestimento, a base magnética e a pilha do aquecedor se aproximem de uma temperatura mais estável.',
    },
    {
      question: 'O vidro precisa de mais tempo de estabilização que o aço PEI?',
      answer: 'Geralmente sim. O vidro borosilicato tem condutividade térmica muito menor e é frequentemente mais espesso, portanto a superfície atrasa mais que uma chapa fina de aço PEI.',
    },
    {
      question: 'Isto é o mesmo que autotune PID?',
      answer: 'Não. O autotune PID controla o comportamento do aquecedor no sensor. Esta calculadora estima quanto tempo a superfície real de impressão deve descansar após a mesa controlada pelo sensor atingir o setpoint.',
    },
    {
      question: 'Devo sondar antes ou após a têmpera térmica?',
      answer: 'Se sua malha mudar quando a mesa aquecer, sonde após a mesa ter estabilizado. Isso torna a malha mais próxima da forma usada durante a primeira camada.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Escolher o material da placa', text: 'Selecione vidro borosilicato, aço mola PEI ou alumínio para que o cálculo use a condutividade e capacidade calorífica corretas.' },
    { name: 'Inserir a pilha física da mesa', text: 'Adicione espessura da placa, área aquecida, temperatura alvo e potência do aquecedor.' },
    { name: 'Ler o atraso recomendado', text: 'Use o atraso antes de imprimir após a impressora relatar que a mesa atingiu o setpoint.' },
    { name: 'Aplicá-lo consistentemente', text: 'Use o mesmo atraso de têmpera antes de sondar ou calibrar a primeira camada para resultados repetíveis.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Estabilização por Inércia Térmica da Mesa',
      description: 'Estime o atraso de estabilização da superfície de uma mesa aquecida de impressão 3D a partir do material da placa, espessura, temperatura, potência do aquecedor e tamanho da mesa.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Por que esperar após a mesa atingir a temperatura alvo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O termistor pode atingir o setpoint antes que a superfície superior de impressão tenha aquecido completamente, portanto um atraso de têmpera melhora a repetibilidade da primeira camada.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como estimar o atraso de estabilização da mesa de uma impressora 3D',
      step: [
        { '@type': 'HowToStep', text: 'Selecione o material da placa.' },
        { '@type': 'HowToStep', text: 'Insira espessura, temperatura alvo, potência do aquecedor e tamanho da mesa.' },
        { '@type': 'HowToStep', text: 'Aguarde o atraso recomendado após a mesa atingir o setpoint.' },
        { '@type': 'HowToStep', text: 'Sonde ou imprima após a pilha da mesa ter estabilizado.' },
      ],
    },
  ],
};
