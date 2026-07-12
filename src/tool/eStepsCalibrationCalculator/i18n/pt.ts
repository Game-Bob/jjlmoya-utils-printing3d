import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { EStepsCalibrationCalculatorUI } from '../ui';

export const content: ToolLocaleContent<EStepsCalibrationCalculatorUI> = {
  slug: 'calculadora-de-calibracao-de-e-steps',
  title: 'Calculadora de Calibração de E steps e Assistente de Diagnóstico do Extrusor',
  description: 'Calcule os E-steps corrigidos do extrusor a partir de um teste de extrusão medido e sinalize desvios acima de 5% antes que eles ocultem um problema mecânico.',
  ui: {
    unitSystemLabel: 'Unidades',
    metricLabel: 'Métrico',
    imperialLabel: 'EUA',
    inputGroupLabel: 'Teste de extrusão',
    currentEStepsLabel: 'E-steps atuais',
    requestedLengthLabel: 'Comprimento de extrusão solicitado',
    actualLengthLabel: 'Comprimento de extrusão medido',
    newEStepsLabel: 'Novos E-steps',
    errorLabel: 'Erro detectado',
    commandLabel: 'Comando de console',
    copyCommandLabel: 'Copiar comando M92',
    copiedLabel: 'Copiado',
    normalStatusLabel: 'Faixa de calibração',
    criticalStatusLabel: 'Desvio crítico',
    normalMessage: 'O desvio medido está dentro de 5%. Aplique o valor somente após confirmar que o caminho do filamento está limpo e repita o teste uma vez.',
    criticalMessage: 'Aviso crítico: O desvio está acima de 5%. Uma falha mecânica é provável: entupimento, deslizamento do extrusor ou tensão incorreta da mola do tensor. Inspecione o hardware antes de aplicar estes novos E-steps.',
    diagnosticTitle: 'Verificações mecânicas antes de salvar o firmware',
    diagnosticOne: 'Aqueça o bico à temperatura real de impressão e extruda lentamente com o hotend livre.',
    diagnosticTwo: 'Verifique a engrenagem motriz, a tensão do tensor, as marcas de mordida do filamento e o arrasto do carretel antes de confiar no número.',
    diagnosticThree: 'Repita o teste de 100 mm após limpeza ou alterações de tensão; não ajuste o firmware em torno de um extrusor que desliza.',
    referenceTitle: 'Regra de decisão',
    formulaLabel: 'Fórmula',
    formulaText: 'E-steps atuais x solicitado / medido',
    safeBandLabel: 'Erro 0-5%',
    safeBandText: 'Aplicar somente após um teste repetível.',
    criticalBandLabel: 'Erro > 5%',
    criticalBandText: 'Inspecione entupimento, deslizamento, tensão e arrasto primeiro.',
    repeatTestLabel: 'Após M92',
    repeatTestText: 'Execute o mesmo teste de extrusão novamente antes de salvar.',
    mmUnit: 'mm',
    inchUnit: 'pol',
    stepsUnit: 'passos/mm',
    controlsAriaLabel: 'Entradas de calibração de E-steps',
    resultsAriaLabel: 'Resultados de calibração de E-steps',
  },
  seo: [
    { type: 'title', text: 'O que a calibração de E-steps realmente mede', level: 2 },
    {
      type: 'paragraph',
      html: 'Os E-steps definem quantos passos do motor de passo o firmware do extrusor envia para um milímetro de movimento do filamento. No Marlin, o valor geralmente é armazenado com <code>M92 E...</code>, enquanto o Klipper frequentemente expressa a mesma relação física através da distância de rotação. A medição é simples: comande um comprimento de extrusão conhecido, meça fisicamente quanto filamento se moveu e então corrija o valor do firmware pela razão entre o movimento solicitado e o real. A fórmula é <code>novos E-steps = E-steps atuais * comprimento solicitado / comprimento real</code>.',
    },
    {
      type: 'paragraph',
      html: 'A parte perigosa é a interpretação. Uma calculadora pode produzir um número a partir de qualquer medição, incluindo uma ruim. Se o extrusor está moendo o filamento, se o bico está parcialmente entupido ou se a mola do tensor está muito frouxa, o comprimento de extrusão medido será baixo. Aumentar os E-steps pode parecer consertar o teste de 100 mm, mas não conserta o hardware. Força o motor a empurrar mais forte ou por mais tempo através da mesma falha, o que pode tornar as impressões reais inconsistentes.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '100 mm', label: 'comprimento solicitado comum para um teste de extrusor repetível' },
        { value: '5%', label: 'limiar de diagnóstico onde a inspeção de hardware deve vir primeiro' },
        { value: 'M92', label: 'comando Marlin usado para definir passos por unidade' },
        { value: '2 decimais', label: 'precisão de saída usada para o comando do eixo E copiado' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Não calibre em torno de uma falha mecânica',
      html: 'Um desvio acima de 5% é grande o suficiente para que a impressora possa estar sub-extrudando ou sobre-extrudando por uma razão que não é matemática de firmware. Inspecione o caminho do extrusor antes de salvar um novo valor com <code>M500</code> ou editar uma configuração Klipper.',
    },
    { type: 'title', text: 'Como realizar um teste de extrusão limpo de 100 mm', level: 2 },
    {
      type: 'paragraph',
      html: 'Um teste confiável de E-steps começa com um bico quente e um caminho de filamento estável. Aqueça o hotend a uma temperatura de impressão normal para o filamento, porque a proteção de extrusão a frio existe por um motivo e porque a contrapressão do plástico fundido altera a carga no extrusor. Marque o filamento a uma distância conhecida acima da entrada do extrusor, comande uma extrusão lenta de 100 mm e meça a distância restante para determinar quanto filamento realmente se moveu.',
    },
    {
      type: 'list',
      items: [
        'Use uma taxa de alimentação de extrusão lenta para que o hotend possa derreter o material sem acumular pressão anormal.',
        'Faça a marca no filamento com um paquímetro ou marcador fino em vez de estimar a olho.',
        'Mantenha o carretel livre para girar para que o arrasto do carretel não pareça um erro de E-steps.',
        'Realize o teste com o mesmo diâmetro e tipo de filamento que você normalmente imprime.',
        'Repita a medição após alterar a tensão da engrenagem motriz, a condição do bico ou a temperatura do hotend.',
      ],
    },
    {
      type: 'table',
      headers: ['Resultado medido', 'Erro', 'Primeira interpretação', 'Melhor próxima ação'],
      rows: [
        ['98 a 102 mm', '0 a 2%', 'Pequena dispersão normal de medição', 'Repetir uma vez e calcular média se necessário'],
        ['95 a 105 mm', '2 a 5%', 'Correção de firmware pode ser razoável', 'Verificar caminho, depois aplicar valor calculado'],
        ['Abaixo de 95 mm', 'Acima de 5%', 'Provável deslizamento, entupimento, arrasto ou problema de pressão', 'Inspecionar mecânica antes do firmware'],
        ['Acima de 105 mm', 'Acima de 5%', 'Valor anterior errado ou problema de configuração de medição', 'Verificar unidades e repetir teste'],
      ],
    },
    {
      type: 'tip',
      title: 'Use uma variável limpa',
      html: 'Não altere taxa de fluxo, multiplicador de extrusão, pressure advance e E-steps ao mesmo tempo. E-steps devem descrever o movimento motor-para-filamento, enquanto fluxo e multiplicador de extrusão ajustam a saída de material do slicer para um filamento e perfil de impressão específicos.',
    },
    { type: 'title', text: 'Por que o aviso de 5% é importante', level: 2 },
    {
      type: 'paragraph',
      html: 'Um erro de extrusão de 5% significa que um comando de 100 mm produziu menos de 95 mm ou mais de 105 mm de movimento real. Isso não é um pequeno problema de arredondamento. Com um filamento típico de 1,75 mm, 5 mm de alimentação faltante em um teste curto representam um déficit de material visível. Em impressões reais, pode aparecer como paredes fracas, superfícies superiores esparsas, primeiras camadas inconsistentes e baixa confiabilidade dimensional. Mais importante, a sub-extrusão nesta escala geralmente tem uma causa física.',
    },
    {
      type: 'paragraph',
      html: 'O assistente de diagnóstico sinaliza esse limiar porque a correção do firmware pode ocultar sintomas. Se a engrenagem recartilhada está cheia de pó de plástico, o motor pode pular apenas durante movimentos rápidos. Se o bico está parcialmente entupido, um teste lento pode passar após uma grande correção, mas a impressora ainda falhará durante o preenchimento de alto fluxo. Se a tensão do tensor está muito alta, o filamento pode deformar e travar a jusante; se está muito baixa, pode deslizar. O reparo correto é mecânico, não um número de eixo E maior.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Erro de calibração saudável',
          description: 'Pequena discrepância causada pelo valor anterior do firmware, tolerância do diâmetro da engrenagem ou ruído de medição.',
          points: ['Geralmente dentro de 5%', 'Repetível em dois testes', 'Sem cliques ou pó de filamento', 'Correção permanece modesta'],
        },
        {
          title: 'Erro de extrusão por falha',
          description: 'Grande discrepância causada pelo extrusor não conseguir mover o filamento conforme comandado.',
          highlight: true,
          points: ['Acima de 5%', 'Muda entre testes repetidos', 'Cliques, retificação ou marcas de mordida', 'Frequentemente pior em velocidade mais alta'],
        },
      ],
    },
    {
      type: 'summary',
      title: 'Antes de aceitar uma correção crítica',
      items: [
        'Inspecione o bico quanto a entupimento parcial e limpe ou substitua se a extrusão ondular ou pulsar.',
        'Escove os dentes da engrenagem motriz e remova o pó de filamento.',
        'Ajuste a tensão do tensor para que a engrenagem segure sem achatar o filamento.',
        'Verifique o arrasto do carretel, o assento do tubo Bowden e o atrito do caminho do filamento.',
        'Realize a mesma medição novamente antes de alterar o firmware.',
      ],
    },
    { type: 'title', text: 'Marlin M92, M500 e distância de rotação Klipper', level: 2 },
    {
      type: 'paragraph',
      html: 'No firmware estilo Marlin, <code>M92 E...</code> define os passos do extrusor por milímetro para a sessão atual. Muitas impressoras precisam de <code>M500</code> depois para salvar o valor na EEPROM, caso contrário a configuração pode desaparecer após a reinicialização. Algumas versões de firmware bloqueadas ou modificadas pelo fornecedor podem ignorar salvamentos em EEPROM ou exigir a alteração da configuração da fonte do firmware. Sempre verifique o valor após a reinicialização com <code>M503</code> se a impressora suportar.',
    },
    {
      type: 'paragraph',
      html: 'O Klipper comumente usa <code>rotation_distance</code> em vez de E-steps no printer.cfg. A ideia de calibração física é a mesma, mas a direção numérica é invertida porque a distância de rotação descreve quanto filamento se move por rotação do motor, não quantos passos são necessários por milímetro. Esta ferramenta gera um comando <code>M92</code> porque é destinada a ser diretamente utilizável em consoles Marlin e interfaces de firmware compatíveis. Os usuários do Klipper ainda podem usar o erro medido como sinal de diagnóstico antes de recalcular a distância de rotação.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'E-steps', definition: 'O número de passos do motor que o firmware envia para mover um milímetro de filamento no eixo do extrusor.' },
        { term: 'M92', definition: 'Um comando G-code usado pelo firmware Marlin para definir passos por unidade para um ou mais eixos.' },
        { term: 'M500', definition: 'Um comando Marlin que salva as configurações atuais na EEPROM quando suportado pela impressora.' },
        { term: 'Distância de rotação', definition: 'Configuração Klipper que representa o avanço do filamento por rotação completa do motor.' },
        { term: 'Multiplicador de extrusão', definition: 'Escala de fluxo em nível de slicer para um perfil de material, separado dos E-steps da máquina.' },
      ],
    },
    {
      type: 'card',
      title: 'Fluxo de trabalho do comando de console',
      html: 'Envie o comando <code>M92 E...</code> copiado, repita o teste de extrusão e salve o valor somente após o comprimento medido ser repetível. Um único número bom é evidência mais fraca do que duas medições consistentes.',
    },
    { type: 'title', text: 'Problemas mecânicos que parecem E-steps ruins', level: 2 },
    {
      type: 'paragraph',
      html: 'Um bico parcialmente entupido é a armadilha mais comum. O motor do extrusor pode girar a quantidade correta enquanto a pressão se acumula no hotend, fazendo com que a engrenagem motriz mastigue o filamento em vez de avançá-lo. O comprimento de extrusão medido fica curto, a fórmula aumenta os E-steps e a próxima impressão ainda pode sub-extrudar porque o entupimento do bico permanece. Se o filamento extrudado ondula bruscamente, pulsa, sai fino ou muda de direção ao sair do bico, limpe o hotend antes de calibrar.',
    },
    {
      type: 'paragraph',
      html: 'O deslizamento do extrusor pode vir de erros de tensão opostos. Muito pouca força da mola permite que a engrenagem gire contra o filamento. Muita força da mola pode ovalizar o filamento macio, aumentar o atrito em um tubo Bowden ou criar marcas de mordida profundas que travam na entrada do heat break. O filamento flexível é especialmente sensível. O limiar de diagnóstico existe para fazer o usuário parar e inspecionar essas condições antes de converter um problema de tração em um número de firmware.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Sintomas críticos durante o teste',
      html: 'Pare e inspecione o hardware se o extrusor clicar, pó de filamento aparecer, o motor ficar anormalmente quente, a extrusão sair em pulsações ou o comprimento medido mudar em vários milímetros entre testes repetidos de 100 mm.',
    },
    {
      type: 'proscons',
      title: 'Corrigir E steps após um grande erro',
      items: [
        { pro: 'Pode restaurar a alimentação precisa do filamento quando o valor anterior do firmware estava realmente errado.', con: 'Pode ocultar uma engrenagem motriz que desliza ou um bico entupido quando usado sem inspeção.' },
        { pro: 'Comando simples é fácil de aplicar e repetir.', con: 'Um valor salvo incorreto afeta todos os perfis de slicer e todos os materiais.' },
        { pro: 'Útil após alterar a relação de transmissão do extrusor ou o hardware do motor.', con: 'Não substitui a calibração de fluxo em paredes impressas.' },
      ],
    },
    { type: 'title', text: 'E-steps vs calibração de fluxo', level: 2 },
    {
      type: 'paragraph',
      html: 'A calibração de E-steps pertence à camada da máquina. Ela pergunta se o mecanismo do extrusor move o comprimento solicitado de filamento bruto. A calibração de fluxo pertence à camada do perfil de impressão. Ela pergunta se um filamento, temperatura, bico, largura de linha e estratégia de slicer específicos produzem a espessura de parede e qualidade de superfície desejadas. Misturar os dois cria perfis confusos: uma impressora pode passar em um teste de E-steps de 100 mm e ainda precisar de um multiplicador de extrusão de 0,96 para uma marca de PETG.',
    },
    {
      type: 'paragraph',
      html: 'Calibre os E-steps após alterar o hardware do extrusor, passos do motor, microstepping, relação de transmissão ou diâmetro da engrenagem motriz. Calibre o fluxo após alterar a marca do filamento, cor, tamanho do bico, temperatura ou largura de linha do slicer. Pressure advance, linear advance e retração são ferramentas separadas de controle de pressão e devem ser ajustadas após o movimento de extrusão de base ser confiável.',
    },
    {
      type: 'table',
      headers: ['Calibração', 'Camada', 'Muda quando', 'Não use para corrigir'],
      rows: [
        ['E-steps', 'Firmware ou config máquina', 'Hardware do extrusor ou configuração do motor muda', 'Filamento úmido, entupimentos de bico, fluxo do slicer'],
        ['Multiplicador de fluxo', 'Perfil de material do slicer', 'Marca, cor, bico, temperatura do filamento muda', 'Relação de transmissão errada ou extrusor deslizando'],
        ['Pressure advance', 'Dinâmica do firmware', 'Caminho, velocidade, aceleração, material do extrusor muda', 'Sub-extrusão estática'],
        ['Retração', 'Comportamento de deslocamento do slicer', 'Stringing, oozing, artefatos de deslocamento mudam', 'Erros de distância de alimentação de base'],
      ],
    },
    {
      type: 'message',
      title: 'Regra do técnico de suporte',
      html: 'Se um valor de calibração muda drasticamente, assuma que a medição está lhe contando sobre a máquina. Inspecione primeiro, calcule depois, salve por último.',
    },
    { type: 'title', text: 'Repetibilidade e qualidade de medição', level: 2 },
    {
      type: 'paragraph',
      html: 'Um bom resultado de E-steps é repetível. Se um teste mede 94 mm, o próximo 99 mm e o próximo 96 mm, a média é menos importante que a dispersão. Resultados variáveis apontam para tração, temperatura, pressão ou técnica de medição. Antes de salvar um novo valor, repita a extrusão pelo menos duas vezes após qualquer alteração mecânica. Os dois resultados devem estar próximos o suficiente para que o novo número de firmware não esteja perseguindo ruído.',
    },
    {
      type: 'tip',
      title: 'Meça acima do extrusor quando possível',
      html: 'Marcar o filamento antes de entrar no extrusor evita confusão com o filamento curvo que sai do bico. Meça a distância de um ponto de referência fixo até a marca antes e depois do comando.',
    },
    {
      type: 'summary',
      title: 'Sequência de calibração confiável',
      items: [
        'Aqueça o bico e limpe o material velho.',
        'Marque o filamento com uma distância de referência precisa.',
        'Extrua 100 mm lentamente e meça o movimento real.',
        'Use a calculadora e inspecione qualquer erro acima de 5%.',
        'Aplique <code>M92 E...</code>, teste novamente e salve somente se repetível.',
      ],
    },
  ],
  faq: [
    {
      question: 'Qual fórmula esta calculadora de E-steps usa?',
      answer: 'Ela usa novos E-steps = E-steps atuais * comprimento de extrusão solicitado / comprimento de extrusão medido.',
    },
    {
      question: 'Por que a ferramenta avisa sobre erro acima de 5%?',
      answer: 'Um desvio acima de 5% é grande o suficiente para sugerir um problema mecânico como deslizamento do extrusor, entupimento parcial, arrasto do carretel ou tensão incorreta do tensor. Inspecione o hardware antes de salvar um novo valor de firmware.',
    },
    {
      question: 'Posso usar o comando M92 no Klipper?',
      answer: 'O comando M92 copiado é destinado a firmware compatível com Marlin. Klipper geralmente usa rotation_distance, mas o mesmo erro medido ainda é útil para diagnosticar o extrusor.',
    },
    {
      question: 'Devo salvar o novo valor imediatamente?',
      answer: 'Não. Aplique-o temporariamente, repita o teste de extrusão e salve somente após o movimento medido ser repetível.',
    },
    {
      question: 'A calibração de E-steps é a mesma que a calibração de fluxo?',
      answer: 'Não. E-steps calibram o movimento da máquina. Fluxo ou multiplicador de extrusão calibra a saída de material do slicer para um filamento e perfil de impressão específicos.',
    },
  ],
  bibliography,
  howTo: [
    { name: 'Insira os E-steps atuais', text: 'Leia os passos atuais do extrusor por milímetro do firmware ou configurações da impressora.' },
    { name: 'Realize um teste de extrusão', text: 'Comande um comprimento conhecido, normalmente 100 mm, com o hotend na temperatura de impressão.' },
    { name: 'Meça o movimento real', text: 'Insira o movimento do filamento medido fisicamente e revise o erro detectado.' },
    { name: 'Inspecione se necessário', text: 'Se o erro estiver acima de 5%, verifique o hardware antes de aplicar o comando M92.' },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Calculadora de Calibração de E-steps e Assistente de Diagnóstico do Extrusor',
      description: 'Calcule os E-steps corrigidos do extrusor da impressora 3D e sinalize grandes desvios com risco mecânico.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qual fórmula esta calculadora de E-steps usa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ela usa novos E-steps = E-steps atuais * comprimento de extrusão solicitado / comprimento de extrusão medido.',
          },
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como calibrar os E-steps do extrusor da impressora 3D',
      step: [
        { '@type': 'HowToStep', text: 'Insira o valor atual de E-steps.' },
        { '@type': 'HowToStep', text: 'Comande um comprimento de extrusão conhecido, geralmente 100 mm.' },
        { '@type': 'HowToStep', text: 'Meça o movimento real do filamento e calcule a correção.' },
        { '@type': 'HowToStep', text: 'Inspecione primeiro o hardware se o erro detectado estiver acima de 5%.' },
      ],
    },
  ],
};
